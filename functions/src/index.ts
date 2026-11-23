// Project requests from https://novapunkai.com/contact/ (Firebase Hosting rewrites POST /api/request here).
// Stores each request in Firestore (collection "requests") and emails the owner when SMTP settings exist.
import { createHash } from "node:crypto";
import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { defineSecret, defineString } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import nodemailer from "nodemailer";
import { checkRequest, noticeText } from "./validate";

initializeApp();
const db = getFirestore();

// Email notice (optional until set): SMTP_HOST and SMTP_USER are parameters, SMTP_PASSWORD is a Secret Manager secret.
const SMTP_HOST = defineString("SMTP_HOST", { default: "" });
const SMTP_USER = defineString("SMTP_USER", { default: "" });
const NOTIFY_TO = defineString("NOTIFY_TO", { default: "sean@novapunkai.com" });
const SMTP_PASSWORD = defineSecret("SMTP_PASSWORD");

const ALLOWED_ORIGINS = ["https://novapunkai.com", "https://www.novapunkai.com", "http://localhost:3000"];
const LIMIT_PER_HOUR = 5; // requests per IP address per hour

async function underLimit(ip: string): Promise<boolean> {
  // The IP address is stored only as a salted hash, in a counter that is kept for the current hour.
  const hour = new Date().toISOString().slice(0, 13);
  const key = createHash("sha256").update(`novapunk:${ip}:${hour}`).digest("hex").slice(0, 32);
  const ref = db.collection("rate_limits").doc(key);
  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const count = (snap.exists ? (snap.get("count") as number) : 0) + 1;
    tx.set(ref, { count, hour, expiresAt: new Date(Date.now() + 2 * 3600 * 1000) });
    return count <= LIMIT_PER_HOUR;
  });
}

async function notify(text: string, replyTo: string, id: string) {
  if (!SMTP_HOST.value() || !SMTP_USER.value()) {
    logger.info("Email notice skipped: SMTP settings are not configured", { id });
    return;
  }
  const transport = nodemailer.createTransport({
    host: SMTP_HOST.value(), port: 465, secure: true,
    auth: { user: SMTP_USER.value(), pass: SMTP_PASSWORD.value() },
  });
  await transport.sendMail({
    from: `NovaPunk website <${SMTP_USER.value()}>`, to: NOTIFY_TO.value(), replyTo,
    subject: `New project request ${id}`, text,
  });
}

export const projectRequest = onRequest(
  { region: "us-central1", maxInstances: 2, memory: "256MiB", timeoutSeconds: 30, secrets: [SMTP_PASSWORD], cors: ALLOWED_ORIGINS },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }
    const checked = checkRequest((req.body ?? {}) as Record<string, unknown>);
    if (!checked.ok) {
      if (checked.spam) {
        logger.info("Request dropped as spam");
        res.status(200).json({ ok: true });
      } else {
        res.status(400).json({ error: checked.error });
      }
      return;
    }
    if (!(await underLimit(req.ip ?? "unknown"))) {
      res.status(429).json({ error: "Too many requests from this address. Please try again later." });
      return;
    }
    const doc = await db.collection("requests").add({
      ...checked.request,
      status: "new",
      createdAt: FieldValue.serverTimestamp(),
      userAgent: String(req.get("user-agent") ?? "").slice(0, 300),
    });
    try {
      await notify(noticeText(checked.request, doc.id), checked.request.email, doc.id);
    } catch (err) {
      logger.error("Email notice failed; the request is stored", { id: doc.id, err: String(err) });
    }
    res.status(200).json({ ok: true, id: doc.id });
  },
);

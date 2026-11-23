"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MAX_DESCRIPTION, REQUEST_ENDPOINT, requestOptions } from "@/config/request";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

const field = "w-full border-2 border-default-200 bg-white px-4 py-3 text-default-900 focus:border-primary focus:outline-none";
const label = "block text-sm font-semibold text-default-900 mb-2";

// One-screen project request (owner, 2026-11-23). Spam guards: a hidden field people never fill, the time spent on the
// form, and a rate limit in the Cloud Function. The data is stored in Firestore and the owner gets an email.
export default function RequestForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const opened = useRef(0);
  useEffect(() => { opened.current = Date.now(); }, []);   // when the form appeared, for the fill-time check

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(REQUEST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, consent: form.get("consent") === "on", elapsedMs: Date.now() - opened.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "The request could not be sent.");
      setStatus({ kind: "sent" });
      window.gtag?.("event", "generate_lead", { form: "project_request", service: String(body.service || "") });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "The request could not be sent." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="border-2 border-primary p-6 md:p-8 space-y-4" role="status">
        <h3 className="text-2xl text-default-900">Thank you. Your request has been received.</h3>
        <ol className="list-decimal pl-5 space-y-2 leading-relaxed">
          <li>You get a reply within two business days, including an honest answer if the work is not a good fit.</li>
          <li>If needed, we schedule a free 20-minute call.</li>
          <li>You receive a fixed quote with the scope, timeline and price.</li>
        </ol>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6" noValidate={false}>
      <div className="grid md:grid-cols-2 gap-6">
        <div><label className={label} htmlFor="rq-name">Name</label>
          <input id="rq-name" name="name" required maxLength={100} autoComplete="name" className={field} /></div>
        <div><label className={label} htmlFor="rq-email">Email</label>
          <input id="rq-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} /></div>
      </div>
      <div><label className={label} htmlFor="rq-company">Company or website <span className="font-normal text-default-600">(optional)</span></label>
        <input id="rq-company" name="company" maxLength={200} autoComplete="organization" className={field} /></div>
      <fieldset>
        <legend className={label}>What do you need?</legend>
        <div className="flex flex-wrap gap-3">
          {requestOptions.service.map((s, i) => (
            <label key={s} className="flex items-center gap-2 border-2 border-default-200 px-4 py-2 cursor-pointer has-[:checked]:border-primary">
              <input type="radio" name="service" value={s} required defaultChecked={i === 0} /> {s}
            </label>
          ))}
        </div>
      </fieldset>
      <div><label className={label} htmlFor="rq-description">What would you like to build?</label>
        <textarea id="rq-description" name="description" required minLength={20} maxLength={MAX_DESCRIPTION} rows={6} className={field}
          placeholder={"The problem or task, who will use it, what you do today, and what data or systems are involved.\n"
            + "Please leave out passwords, keys and confidential data."} /></div>
      <div className="grid md:grid-cols-2 gap-6">
        <div><label className={label} htmlFor="rq-deadline">When do you need it?</label>
          <select id="rq-deadline" name="deadline" required className={field} defaultValue="">
            <option value="" disabled>Choose one</option>
            {requestOptions.deadline.map((d) => <option key={d}>{d}</option>)}
          </select></div>
        <div><label className={label} htmlFor="rq-budget">Budget range</label>
          <select id="rq-budget" name="budget" required className={field} defaultValue="">
            <option value="" disabled>Choose one</option>
            {requestOptions.budget.map((b) => <option key={b}>{b}</option>)}
          </select></div>
      </div>
      <div><label className={label} htmlFor="rq-links">Links <span className="font-normal text-default-600">(optional: a current site, examples, a document)</span></label>
        <input id="rq-links" name="links" maxLength={500} className={field} /></div>
      {/* Hidden from people; bots that fill every field are rejected. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="rq-website">Leave this empty</label>
        <input id="rq-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>I agree that NovaPunk LLC stores this request to reply to me, as described in the <Link href="/privacy" className="text-primary underline">privacy policy</Link>.</span>
      </label>
      {status.kind === "error" && <p className="text-red-700" role="alert">{status.message} You can also email <a className="underline" href="mailto:sean@novapunkai.com">sean@novapunkai.com</a>.</p>}
      <button type="submit" disabled={status.kind === "sending"} className="bg-primary hover:bg-primary-hover disabled:opacity-60 text-white px-6 py-3 font-semibold">
        {status.kind === "sending" ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}

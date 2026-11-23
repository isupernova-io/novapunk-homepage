import { test } from "node:test";
import assert from "node:assert/strict";
import { checkRequest, noticeText } from "./validate";

const good = {
  name: "Ada", email: "ada@example.com", company: "", service: "AI agent",
  description: "We want an agent that answers questions about our product manuals.",
  deadline: "1 to 3 months", budget: "$3,000 to $7,000", links: "", website: "", consent: true, elapsedMs: 30000,
};

test("a complete request passes", () => {
  const r = checkRequest(good);
  assert.equal(r.ok, true);
});

test("the hidden field marks spam", () => {
  const r = checkRequest({ ...good, website: "http://spam.example" });
  assert.deepEqual(r, { ok: false, error: "spam", spam: true });
});

test("a form sent too fast marks spam", () => {
  const r = checkRequest({ ...good, elapsedMs: 500 });
  assert.equal(r.ok === false && r.spam, true);
});

test("consent, email and choices are required", () => {
  assert.equal(checkRequest({ ...good, consent: false }).ok, false);
  assert.equal(checkRequest({ ...good, email: "not-an-email" }).ok, false);
  assert.equal(checkRequest({ ...good, budget: "$1" }).ok, false);
  assert.equal(checkRequest({ ...good, description: "too short" }).ok, false);
});

test("long text is cut and the notice lists the fields", () => {
  const r = checkRequest({ ...good, name: "x".repeat(500) });
  assert.equal(r.ok && r.request.name.length, 100);
  if (r.ok) assert.match(noticeText(r.request, "abc"), /Budget: \$3,000 to \$7,000/);
});

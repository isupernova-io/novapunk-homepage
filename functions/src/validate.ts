// Checks a project request from the website form. Kept free of Firebase imports so it can be unit tested.

export const OPTIONS = {
  service: ["AI agent", "Data and cloud", "Analytics or forecasting", "Website", "Not sure yet"],
  deadline: ["As soon as possible", "Within 1 month", "1 to 3 months", "Flexible"],
  budget: ["Under $1,000", "$1,000 to $3,000", "$3,000 to $7,000", "$7,000 to $15,000", "$15,000 or more", "Not sure yet"],
} as const; // same values as src/config/request.ts in the site

export const MIN_FILL_MS = 4000; // a person needs at least a few seconds to fill the form

export type ProjectRequest = {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  deadline: string;
  budget: string;
  links: string;
};

export type Checked = { ok: true; request: ProjectRequest } | { ok: false; error: string; spam?: boolean };

const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function checkRequest(body: Record<string, unknown>): Checked {
  // Spam signals are answered like a success by the caller, so bots learn nothing.
  if (text(body.website, 200) !== "") return { ok: false, error: "spam", spam: true };
  if (typeof body.elapsedMs !== "number" || body.elapsedMs < MIN_FILL_MS) return { ok: false, error: "spam", spam: true };

  const request: ProjectRequest = {
    name: text(body.name, 100),
    email: text(body.email, 200),
    company: text(body.company, 200),
    service: text(body.service, 50),
    description: text(body.description, 4000),
    deadline: text(body.deadline, 50),
    budget: text(body.budget, 50),
    links: text(body.links, 500),
  };
  if (body.consent !== true) return { ok: false, error: "Please agree to the privacy policy." };
  if (!request.name) return { ok: false, error: "Please enter your name." };
  if (!EMAIL.test(request.email)) return { ok: false, error: "Please enter a valid email address." };
  if (request.description.length < 20) return { ok: false, error: "Please describe the project in a few sentences." };
  if (!(OPTIONS.service as readonly string[]).includes(request.service)) return { ok: false, error: "Please choose what you need." };
  if (!(OPTIONS.deadline as readonly string[]).includes(request.deadline)) return { ok: false, error: "Please choose a timeline." };
  if (!(OPTIONS.budget as readonly string[]).includes(request.budget)) return { ok: false, error: "Please choose a budget range." };
  return { ok: true, request };
}

export function noticeText(r: ProjectRequest, id: string): string {
  return [
    `New project request ${id}`,
    "",
    `Name: ${r.name}`,
    `Email: ${r.email}`,
    `Company: ${r.company || "-"}`,
    `Service: ${r.service}`,
    `Timeline: ${r.deadline}`,
    `Budget: ${r.budget}`,
    `Links: ${r.links || "-"}`,
    "",
    r.description,
  ].join("\n");
}

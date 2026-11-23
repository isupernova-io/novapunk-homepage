import Link from "next/link";

// How a freelance engagement runs (owner, 2026-11-23): short projects, a fixed quote, no paid discovery stage.
// Durations are the owner's figures; prices are not published (the request form asks for a budget range).
export const projectTypes = [
  { type: "Small automation or fix", examples: "Data cleaning scripts, improving an existing chatbot, API integrations", time: "1 to 2 weeks" },
  { type: "AI agent development", examples: "Document Q&A (RAG), workflow automation agents, a demo web front end", time: "1 to 3 months, depending on the request" },
  { type: "Data and cloud work", examples: "Data pipelines, deployment on AWS or Google Cloud, cloud cost review", time: "2 to 4 weeks" },
  { type: "Website", examples: "Company site, landing page, deployment in your own cloud", time: "2 to 4 weeks" },
] as const;

const steps = [
  ["Request", "Send a short request form. You get a reply within two business days, and an honest answer if the work is not a good fit."],
  ["Quote", "If needed, a free 20-minute call. Then a fixed quote with the scope, the timeline and the price."],
  ["Build and deliver", "Regular progress updates and delivery. 50% at the start, 50% on delivery; 14 days of free bug fixes after "
    + "delivery; the code is yours. Further work is quoted again."],
] as const;

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="lg:px-7.5 md:px-5 px-4 scroll-mt-24">
      <div className="container px-6 md:px-10 py-16 space-y-10">
        <div className="space-y-4">
          <p className="text-primary text-sm uppercase tracking-wider">How we work</p>
          <h2 className="text-3xl md:text-4xl">Short projects, a fixed quote, clear delivery.</h2>
          <p className="max-w-175 leading-relaxed">NovaPunk works on demand: each project is scoped from your request and delivered by the person who builds it.</p>
        </div>
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map(([name, text], i) => (
            <li key={name} className="border-2 border-default-100 p-6 space-y-3">
              <p className="text-primary text-xs uppercase tracking-wider">Step {i + 1}</p>
              <h3 className="text-xl text-default-900">{name}</h3>
              <p className="leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
        <div className="space-y-4">
          <h3 className="text-2xl text-default-900">Typical projects</h3>
          <div className="border-2 border-default-100 divide-y divide-default-100">
            {projectTypes.map((p) => (
              <div key={p.type} className="grid md:grid-cols-[14rem_1fr_14rem] gap-2 md:gap-6 p-5">
                <p className="text-default-900 font-semibold">{p.type}</p>
                <p className="leading-relaxed">{p.examples}</p>
                <p className="text-sm text-default-600 md:text-right">Usually {p.time}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-default-600">Every quote is fixed for the agreed scope. The request form asks for your budget range, so the proposal fits it.</p>
        </div>
        <Link href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3">Send a project request</Link>
      </div>
    </section>
  );
}

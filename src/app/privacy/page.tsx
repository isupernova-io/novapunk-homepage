import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ConsentSettings from "@/components/ConsentSettings";

export const metadata: Metadata = { title: "Privacy policy" };

// Draft written for the owner's review (2026-11-23); not legal advice.
export default function Privacy() {
  const h = "text-2xl text-default-900";
  return <>
    <PageIntro eyebrow="Privacy" title="Privacy policy">
      <p>Last updated: November 23, 2026. This policy explains what NovaPunk LLC (Michigan, USA) collects on novapunkai.com and why.</p>
    </PageIntro>
    <section className="lg:px-7.5 md:px-5 px-4"><div className="container px-6 md:px-10 py-16 space-y-8 max-w-200 leading-relaxed">
      <div className="space-y-3"><h2 className={h}>Project requests</h2>
        <p>When you send the project request form, we store your name, email address, company or website, the project details you enter,
          your timeline and budget range, and the browser type. We use them only to reply to you and to prepare a quote. The form data is
          stored in Google Cloud Firestore in the United States, and we receive a copy by email.</p>
        <p>To stop automated abuse we count requests per network address for one hour; the address is stored only as a one-way hash.</p>
        <p>We keep requests for up to 24 months after our last contact, unless they lead to a contract, in which case they are kept with the
          project records.</p></div>
      <div className="space-y-3"><h2 className={h}>Analytics</h2>
        <p>With your consent, we use Google Analytics to understand how visitors find and use the site (pages viewed, approximate location,
          device type, how you arrived). Until you accept, Google Analytics stores no cookies. We do not use advertising features and do
          not sell personal information.</p>
        <ConsentSettings /></div>
      <div className="space-y-3"><h2 className={h}>Service providers</h2>
        <p>The site is hosted on Google Firebase. Google acts as our service provider for hosting, the form database and analytics. Email
          is delivered through our email provider.</p></div>
      <div className="space-y-3"><h2 className={h}>Your choices</h2>
        <p>You can ask to see, correct or delete the information you sent us by writing to <a href="mailto:sean@novapunkai.com" className="text-primary underline">sean@novapunkai.com</a>.
          You can change your analytics choice with the buttons above at any time.</p></div>
      <div className="space-y-3"><h2 className={h}>Changes</h2>
        <p>If this policy changes, the date above changes with it.</p></div>
    </div></section>
  </>;
}

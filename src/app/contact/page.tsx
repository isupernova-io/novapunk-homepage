import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import RequestForm from "@/components/RequestForm";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return <>
    <PageIntro eyebrow="Contact" title="Tell us what you want to build.">
      <p>Send a short project request. You get a reply within two business days, then a fixed quote. <Link href="/services#how-we-work" className="text-primary underline">How we work</Link></p>
    </PageIntro>
    <section className="lg:px-7.5 md:px-5 px-4"><div className="container px-6 md:px-10 py-16 grid lg:grid-cols-[1fr_20rem] gap-12">
      <div className="space-y-6">
        <h2 className="text-3xl">Project request</h2>
        <RequestForm />
      </div>
      <aside className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg text-default-900">Prefer email?</h2>
        <a href="mailto:sean@novapunkai.com" className="inline-block text-primary underline underline-offset-4 break-all">sean@novapunkai.com</a>
        <p>Please leave credentials and confidential datasets out of your first message.</p>
        <p className="border-t border-default-200 pt-4 text-default-600">NovaPunk LLC · Michigan, USA</p>
      </aside>
    </div></section>
  </>;
}

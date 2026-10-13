import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return <>
    <PageIntro eyebrow="Contact" title="Tell us what you want to build.">
      <p>For custom AI engineering inquiries, email NovaPunk with a brief description of your problem, current workflow, and available data.</p>
    </PageIntro>
    <section className="lg:px-7.5 md:px-5 px-4"><div className="container px-6 md:px-10 py-16 space-y-6">
      <h2 className="text-3xl">Business inquiries</h2>
      <a href="mailto:sean@novapunkai.com" className="inline-block text-lg text-primary underline underline-offset-4 break-all">sean@novapunkai.com</a>
      <p className="max-w-175 leading-relaxed">Include your goals, technical constraints, and an approximate timeline if you have one. Please leave credentials and confidential datasets out of your initial email.</p>
      <p className="border-t border-default-200 pt-6 text-sm text-default-600">NovaPunk LLC · Michigan, USA</p>
    </div></section>
  </>;
}


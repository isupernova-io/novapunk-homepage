import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ServiceOverview from "@/components/ServiceOverview";
export const metadata: Metadata = { title: "Services" };
export default function Services() {
  return <>
    <PageIntro eyebrow="Services" title="Custom AI engineering for practical problems.">
      <p>From a focused proof of concept to workflow integration, NovaPunk scopes each engagement around your data, constraints, and intended outcomes.</p>
    </PageIntro>
    <ServiceOverview />
    <div className="lg:px-7.5 md:px-5 px-4"><div className="container p-6 md:p-10 pb-16">
      <Link href="/contact" className="inline-block bg-primary text-white px-6 py-3 hover:bg-primary-hover">Discuss an engagement</Link>
    </div></div>
  </>;
}


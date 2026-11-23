import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ServiceOverview from "@/components/ServiceOverview";
import HowWeWork from "@/components/HowWeWork";
export const metadata: Metadata = { title: "Services" };
export default function Services() {
  return <>
    <PageIntro eyebrow="Services" title="Custom AI and web development for your business.">
      <p>From AI workflows and data systems to custom websites, NovaPunk scopes each engagement around your requirements, constraints, and intended outcomes.</p>
    </PageIntro>
    <ServiceOverview />
    <HowWeWork />
  </>;
}

import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
export const metadata: Metadata = {
  title: "About",
  description: "NovaPunk LLC develops World Model-based AI and custom technology to turn real-world data into new insights and business value. Michigan, USA.",
};
export default function About() {
  return <>
    <PageIntro eyebrow="About NovaPunk LLC" title="World Model-based AI. Real-world value.">
      <div className="space-y-5">
        <p>NovaPunk LLC provides World Model-based AI services and custom technology designed to increase the value of your business. We start with reality: your data, your operations, and the decisions you need to make.</p>
        <p>Our World Model approach represents how a business or physical environment changes, helping you explore possible outcomes before taking action. We combine this approach with AI agents, analytics, and data engineering to turn new AI technology into practical applications.</p>
        <p>We look for new insights in your data and develop services that help you act on them. Our aim is to improve decisions, uncover opportunities, and support greater efficiency, profitability, and long-term business value.</p>
      </div>
    </PageIntro>
    <section className="lg:px-7.5 md:px-5 px-4"><div className="container px-6 md:px-10 py-16 space-y-6">
      <h2 className="text-3xl">From your reality to new possibilities.</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <article className="border-2 border-default-100 p-6 space-y-3"><h3 className="text-xl">Understand your world</h3><p className="leading-relaxed">Connect your data to the processes, constraints, and relationships that shape your business. Define the problem and the value you want to create.</p></article>
        <article className="border-2 border-default-100 p-6 space-y-3"><h3 className="text-xl">Discover what could change</h3><p className="leading-relaxed">Use analysis, predictive models, and simulation to reveal patterns and compare possible outcomes. Test the approach against evidence from your data.</p></article>
        <article className="border-2 border-default-100 p-6 space-y-3"><h3 className="text-xl">Turn insight into value</h3><p className="leading-relaxed">Build AI applications that bring those insights into your workflow, with attention to measurable outcomes, maintainability, and operating costs.</p></article>
      </div>
      <p className="border-t border-default-200 pt-6 text-sm text-default-600">NovaPunk LLC · Michigan, USA</p>
    </div></section>
  </>;
}


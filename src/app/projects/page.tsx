import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
export const metadata: Metadata = { title: "Projects" };
export default function Projects() {
  return <>
    <PageIntro eyebrow="Projects" title="Engineering work, documented with context.">
      <p>Project case studies will describe the problem, implementation, evaluation, and limitations, with a clear distinction between completed work, work in progress, prototypes, and planned research.</p>
    </PageIntro>
    <section className="lg:px-7.5 md:px-5 px-4"><div className="container px-6 md:px-10 py-16 space-y-5">
      <h2 className="text-3xl">Case studies are being prepared.</h2>
      <p>No project case studies are published here yet. Contact NovaPunk to discuss your use case.</p>
      <Link href="/contact" className="inline-block text-primary font-semibold">Discuss your project →</Link>
    </div></section>
  </>;
}


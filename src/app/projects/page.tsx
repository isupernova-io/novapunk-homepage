import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/config/projects";

export const metadata: Metadata = { title: "Projects" };
export default function Projects() {
  return <>
    <PageIntro eyebrow="Projects" title="Engineering work, documented with context.">
      <p>Each case study describes the problem, the implementation, how it was evaluated and its limitations, with a working demo
        where one exists.</p>
    </PageIntro>
    <section className="lg:px-7.5 md:px-5 px-4"><div className="container px-6 md:px-10 py-16 space-y-6">
      {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      <p className="pt-4">More case studies are in preparation. <Link href="/contact" className="text-primary font-semibold">Discuss your project →</Link></p>
    </div></section>
  </>;
}

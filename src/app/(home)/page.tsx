import Hero from "./components/Hero";
import ServiceOverview from "@/components/ServiceOverview";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/config/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home" };
export default function Home() {
  const latest = projects[0];
  return <>
    <Hero />
    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 pb-8 space-y-3">
        <ProjectVideo video={latest.video} title={latest.title} autoplay />
        <p className="text-sm text-default-600">{latest.title}: {latest.tagline}. Muted autoplay; turn on the sound in the player.</p>
      </div>
    </section>
    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 py-8 space-y-6">
        <p className="text-primary text-sm uppercase tracking-wider">Latest projects</p>
        <h2 className="text-3xl md:text-4xl">Built, measured and running.</h2>
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        <Link href="/projects" className="inline-block text-primary font-semibold hover:underline">All projects <span aria-hidden="true">→</span></Link>
      </div>
    </section>
    <ServiceOverview featuredVideo={false} />
    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 py-16 space-y-5">
        <h2 className="text-3xl md:text-4xl">What would you like to build?</h2>
        <p>Tell us about your workflow, data, and the decision you want to improve.</p>
        <Link href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3">Contact NovaPunk</Link>
      </div>
    </section>
  </>;
}

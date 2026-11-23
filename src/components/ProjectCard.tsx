import Link from "next/link";
import type { Project } from "@/config/projects";

// A project in a list: poster, title, summary, and links to the case study and the live demo.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-2 border-default-100 grid md:grid-cols-2">
      <Link href={`/projects/${project.slug}`} className="block bg-default-950">
        <img src={project.video.poster} alt={`${project.title} demo video frame`} className="w-full h-full object-cover" loading="lazy" />
      </Link>
      <div className="p-6 md:p-8 flex flex-col gap-4">
        <p className="text-primary text-xs uppercase tracking-wider">{project.status}</p>
        <h3 className="text-2xl text-default-900">{project.title}</h3>
        <p className="text-default-900">{project.tagline}.</p>
        <p className="leading-relaxed">{project.summary}</p>
        <div className="mt-auto pt-5 border-t border-default-200 flex flex-wrap gap-x-6 gap-y-2">
          <Link href={`/projects/${project.slug}`} className="text-primary font-semibold hover:underline">
            Case study and video <span aria-hidden="true">→</span>
          </Link>
          <a href={project.demoUrl} target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">
            Live demo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

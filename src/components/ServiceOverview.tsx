import { Fragment } from "react";
import Link from "next/link";
import { services } from "@/config/services";
import { projects } from "@/config/projects";
import ProjectVideo from "@/components/ProjectVideo";

const featuredFor = (slug: string) => projects.filter((p) => p.service === slug);

// Featured projects of a service, shown full width right under its card. The video is left out where the page already
// plays it (Home). The service's own demo page, if any, is linked at the bottom (owner, 2026-11-23: to be updated later).
function FeaturedProjects({ slug, withVideo, demo }: { slug: string; withVideo: boolean; demo?: string }) {
  const featured = featuredFor(slug);
  if (featured.length === 0) return null;
  return (
    <div className="md:col-span-2 border-2 border-default-100 bg-default-50 p-6 md:p-8 space-y-6">
      <p className="text-primary text-xs uppercase tracking-wider">Featured projects</p>
      {featured.map((p) => (
        <div key={p.slug} className={withVideo ? "grid lg:grid-cols-2 gap-6 items-start" : "space-y-4"}>
          {withVideo && <ProjectVideo video={p.video} title={p.title} />}
          <div className="space-y-4">
            <h3 className="text-2xl text-default-900">{p.title}</h3>
            <p className="text-default-900">{p.tagline}.</p>
            <p className="leading-relaxed">{p.summary}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              {p.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <Link href={`/projects/${p.slug}`} className="text-primary font-semibold hover:underline">Case study <span aria-hidden="true">→</span></Link>
              <a href={p.demoUrl} target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Live demo website <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      ))}
      {demo && (
        <p className="pt-5 border-t border-default-200 text-sm">
          More examples:{" "}
          <a href={`/demos/${slug}.html`} className="text-primary font-semibold hover:underline">{demo} <span aria-hidden="true">→</span></a>
        </p>
      )}
    </div>
  );
}

export default function ServiceOverview({ featuredVideo = true }: { featuredVideo?: boolean }) {
  return (
    <section id="services" className="lg:px-7.5 md:px-5 px-4 scroll-mt-24">
      <div className="container px-6 md:px-10 py-16">
        <p className="text-primary text-sm uppercase tracking-wider mb-3">Services</p>
        <h2 className="text-3xl md:text-4xl mb-4">AI built around your business.</h2>
        <p className="max-w-175 leading-relaxed mb-8">We build custom AI software, data systems, and websites around your business requirements. Explore our services and examples of our work below.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            // A service with featured projects shows them under its card instead of an example footer, and the card is
            // no longer a link; its demo page is linked from the featured block.
            const hasFeatured = featuredFor(service.slug).length > 0;
            const content = <>
              <p className="text-primary text-xs uppercase tracking-wider">0{index + 1} / {service.category}</p>
              <h3 className="text-2xl text-default-900">{service.title}</h3>
              <p className="leading-relaxed">{service.description}</p>
              {"details" in service && <p className="leading-relaxed">{service.details}</p>}
              <p className="text-sm text-default-600">{service.deliverables}</p>
              {!hasFeatured && (
                <div className="mt-auto pt-5 border-t border-default-200">
                  <p className="text-xs uppercase tracking-wider text-default-600 mb-2">Example project</p>
                  {"demo" in service ? (
                    <p className="text-primary font-semibold group-hover:underline">{service.demo} <span aria-hidden="true">→</span></p>
                  ) : (
                    <p className="text-default-900">{service.example}</p>
                  )}
                </div>
              )}
            </>;
            const cardClassName = `border-2 border-default-100 p-6 md:p-8 flex flex-col gap-4${service.slug === "custom-ai-agents" ? " md:col-span-2" : ""}`;
            const card = "demo" in service && !hasFeatured ? (
              <Link href={`/demos/${service.slug}.html`} prefetch={false} className={`group ${cardClassName} hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary transition-colors`}>
                {content}
              </Link>
            ) : (
              <article className={cardClassName}>
                {content}
              </article>
            );
            return <Fragment key={service.slug}>{card}
              <FeaturedProjects slug={service.slug} withVideo={featuredVideo} demo={"demo" in service ? service.demo : undefined} /></Fragment>;
          })}
        </div>
      </div>
    </section>
  );
}


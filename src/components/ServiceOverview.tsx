import Link from "next/link";
import { services } from "@/config/services";

export default function ServiceOverview() {
  return (
    <section id="services" className="lg:px-7.5 md:px-5 px-4 scroll-mt-24">
      <div className="container px-6 md:px-10 py-16">
        <p className="text-primary text-sm uppercase tracking-wider mb-3">Services</p>
        <h2 className="text-3xl md:text-4xl mb-4">AI built around your business.</h2>
        <p className="max-w-175 leading-relaxed mb-8">We build custom AI software, data systems, and websites around your business requirements. Explore our services and examples of our work below.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const content = <>
              <p className="text-primary text-xs uppercase tracking-wider">0{index + 1} / {service.category}</p>
              <h3 className="text-2xl text-default-900">{service.title}</h3>
              <p className="leading-relaxed">{service.description}</p>
              {"details" in service && <p className="leading-relaxed">{service.details}</p>}
              <p className="text-sm text-default-600">{service.deliverables}</p>
              <div className="mt-auto pt-5 border-t border-default-200">
                <p className="text-xs uppercase tracking-wider text-default-600 mb-2">Example project</p>
                {"demo" in service ? (
                  <p className="text-primary font-semibold group-hover:underline">{service.demo} <span aria-hidden="true">→</span></p>
                ) : (
                  <p className="text-default-900">{service.example}</p>
                )}
              </div>
            </>;
            const cardClassName = `border-2 border-default-100 p-6 md:p-8 flex flex-col gap-4${service.slug === "custom-ai-agents" ? " md:col-span-2" : ""}`;
            return "demo" in service ? (
              <Link key={service.slug} href={`/demos/${service.slug}.html`} prefetch={false} className={`group ${cardClassName} hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary transition-colors`}>
                {content}
              </Link>
            ) : (
              <article key={service.slug} className={cardClassName}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


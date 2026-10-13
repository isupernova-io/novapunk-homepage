import Link from "next/link";
import bgPattern from "@/assets/images/other/bg-pattern.png";
import Image from "next/image";

const Hero = () => (
  <section className="lg:px-7.5 md:px-5 px-4 overflow-hidden">
    <div className="container pt-36 pb-16 md:pt-44 md:pb-24 relative">
      <Image src={bgPattern} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      <div className="relative z-10 max-w-200 mx-auto px-6 text-center space-y-6">
        <p className="inline-flex rounded-full border-2 border-default-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">Custom AI engineering</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">Custom AI World Models for Real Work.</h1>
        <p className="text-xl md:text-2xl text-default-900">Custom AI agents, built on request.</p>
        <p className="max-w-175 mx-auto leading-relaxed">NovaPunk builds AI software around your workflow and your data. Each project starts from a specific business request and develops into an agent or application you can test. Where it helps, the system is backed by a world model that simulates how your business or physical environment responds to actions, so plans can be checked before they are carried out.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link href="/contact" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 font-semibold">Discuss your project</Link>
          <Link href="#services" className="border-2 border-default-200 bg-white text-default-900 px-6 py-3 hover:border-primary">See services</Link>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;


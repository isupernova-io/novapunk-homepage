import Hero from "./components/Hero";
import ServiceOverview from "@/components/ServiceOverview";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home" };
export default function Home() {
  return <>
    <Hero />
    <ServiceOverview />
    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 py-16 space-y-5">
        <h2 className="text-3xl md:text-4xl">What would you like to build?</h2>
        <p>Tell us about your workflow, data, and the decision you want to improve.</p>
        <Link href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3">Contact NovaPunk</Link>
      </div>
    </section>
  </>;
}


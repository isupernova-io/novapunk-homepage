import Link from "next/link";
import PageIntro from "@/components/PageIntro";
export default function Waitlist() {
  return <PageIntro eyebrow="Contact NovaPunk" title="Discuss your project.">
    <p>For custom AI engineering inquiries, visit our contact page.</p>
    <Link href="/contact" className="inline-block mt-6 text-primary underline">Contact NovaPunk →</Link>
  </PageIntro>;
}


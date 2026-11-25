import type { Metadata } from "next";
import Link from "next/link";

// A full-screen QR code to show on a phone at meetings and events (owner, 2026-11-24). Kept out of search results.
export const metadata: Metadata = { title: "QR code", robots: { index: false, follow: true } };

export default function QrPage() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 pt-32 pb-10">
      <div className="text-center space-y-5">
        <h1 className="text-2xl md:text-4xl">Scan to visit NovaPunk</h1>
        <div className="inline-block bg-white border-2 border-default-100 p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/qr/novapunkai-qr.svg" alt="QR code for novapunkai.com" width={320} height={320}
            className="w-[min(80vw,320px)] h-auto" />
        </div>
        <p className="text-xl text-default-900 font-semibold">novapunkai.com</p>
        <p className="text-default-600">Custom AI agents and data systems, built on request.</p>
        <Link href="/" className="inline-block text-primary font-semibold">Back to the home page →</Link>
      </div>
    </section>
  );
}

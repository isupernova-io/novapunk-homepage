"use client";
import { setAnalyticsConsent } from "@/components/Analytics";

// Buttons on the privacy page to change the analytics choice later.
export default function ConsentSettings() {
  return (
    <div className="flex flex-wrap gap-3">
      <button type="button" onClick={() => setAnalyticsConsent(true)} className="border-2 border-default-200 hover:border-primary px-4 py-2">Allow analytics cookies</button>
      <button type="button" onClick={() => setAnalyticsConsent(false)} className="border-2 border-default-200 hover:border-primary px-4 py-2">Turn analytics cookies off</button>
    </div>
  );
}

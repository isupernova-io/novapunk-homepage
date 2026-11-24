"use client";
import Script from "next/script";
import { useSyncExternalStore } from "react";
import Link from "next/link";

// Google Analytics 4 for property novapunk-homepage-a8912, stream "NovaPunk website" (owner, 2026-11-23).
// Consent Mode by region (owner's choice A, 2026-11-24): analytics storage is denied by default for visitors Google
// locates in the EU, EEA, UK or Switzerland, who see the banner and choose; elsewhere it is granted by default and no
// banner is shown. Advertising storage is never granted. A choice made on the banner or the privacy page is kept in
// localStorage and overrides the default everywhere.
export const GA_ID = "G-BZ9TFJCFBF";
const KEY = "novapunk-analytics-consent";
// EU 27, plus Iceland, Liechtenstein, Norway (EEA), the United Kingdom and Switzerland.
const CONSENT_REGIONS = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH"];

// The banner needs a hint of the visitor's region without a network call: the browser's time zone. European zones
// (and the Atlantic islands of EEA countries) show it; a wrong guess only shows or hides a question, while Google's own
// region check decides the default above.
function inConsentRegion(): boolean {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    return zone.startsWith("Europe/") || /^Atlantic\/(Reykjavik|Canary|Madeira|Azores|Faroe)$/.test(zone);
  } catch { return false; }
}

function readChoice(): string | null {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

export function setAnalyticsConsent(granted: boolean) {
  try { localStorage.setItem(KEY, granted ? "granted" : "denied"); } catch { /* private mode */ }
  window.gtag?.("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
  window.dispatchEvent(new Event("novapunk-consent"));
}

const subscribe = (onChange: () => void) => {
  window.addEventListener("novapunk-consent", onChange);
  return () => window.removeEventListener("novapunk-consent", onChange);
};
// GA runs only on the real domain (or with ?ga_test), so local tests stay out of the reports.
const isLive = () => /(^|\.)novapunkai\.com$/.test(window.location.hostname) || new URLSearchParams(window.location.search).has("ga_test");

export default function Analytics() {
  const choice = useSyncExternalStore(subscribe, readChoice, () => "pending");
  const live = useSyncExternalStore(subscribe, isLive, () => false);
  const ask = useSyncExternalStore(subscribe, inConsentRegion, () => false);
  if (!live) return null;
  return <>
    <Script id="ga-consent-default" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      var saved = null; try { saved = localStorage.getItem('${KEY}'); } catch (e) {}
      var ads = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
      gtag('consent', 'default', Object.assign({ analytics_storage: 'denied', region: ${JSON.stringify(CONSENT_REGIONS)} }, ads));
      gtag('consent', 'default', Object.assign({ analytics_storage: 'granted' }, ads));
      if (saved === 'granted' || saved === 'denied') gtag('consent', 'update', { analytics_storage: saved });
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    {choice === null && ask && (
      <div role="dialog" aria-label="Analytics cookies" className="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:max-w-md z-50 bg-white border-2 border-default-200 shadow-lg p-5 space-y-3 text-sm">
        <p className="leading-relaxed">We use Google Analytics cookies to see how visitors use this site. Nothing is shared for advertising.
          {" "}<Link href="/privacy" className="text-primary underline">Privacy policy</Link></p>
        <div className="flex gap-3">
          <button type="button" onClick={() => setAnalyticsConsent(true)} className="bg-primary hover:bg-primary-hover text-white px-4 py-2 font-semibold">Accept</button>
          <button type="button" onClick={() => setAnalyticsConsent(false)} className="border-2 border-default-200 hover:border-primary text-default-900 px-4 py-2">Decline</button>
        </div>
      </div>
    )}
  </>;
}

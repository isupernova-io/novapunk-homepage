# NovaPunk homepage

Company website of NovaPunk LLC (Michigan, USA) at https://novapunkai.com. Owner: sungwon (Sean). Claude replies in Korean;
site text and official documents are in English (official documents also get a Korean `_ko` copy).

## Facts

- Source: this repository, `isupernova-io/novapunk-homepage` on GitHub, branch `main`. Local path `C:\dev\homepage`
  (cloned 2026-11-23; the laptop copy is backed up at `G:\다른 컴퓨터\My Laptop\dev\homepage`; planning documents and
  journals from October are in `G:\다른 컴퓨터\My Laptop\novapunk\Website`).
- Stack: Next.js 16.2.6 static export, React 19.2.4, TypeScript, Tailwind CSS 4, Preline 4.0.1, Iconify. Adapted from the
  Boxsi template by Unifato (ThemeForest); template license obligations apply to retained assets.
- Pages: Home, Services (five services from `src/config/services.ts`), Projects (placeholder), About, Contact (mailto
  sean@novapunkai.com), `/waitlist` redirects to `/contact/`. Four standalone demo pages in `public/demos`, generated from
  `content/service-demos.json` by `scripts/generate-service-demos.py` and committed.
- Deploy: push to `main` -> GitHub Actions (`.github/workflows/firebase-hosting.yml`) -> `next build` to `out` -> GitHub
  OIDC and GCP Workload Identity Federation (no key file) -> Firebase Hosting. DNS at Namecheap. See `DEPLOYMENT.md`.
- Reference document: `docs/20261104_NovaPunk_Homepage_Final_Technical_Document_EN.md` (and .docx), copied from the
  backup on 2026-11-23.
- Local run: `npm.cmd ci`, then `npm.cmd run dev` (http://localhost:3000). Use `npm.cmd` in PowerShell.

## Rules

- Commit only when the owner asks; the owner pushes (a push to `main` deploys the live site).
- No keys, tokens or cloud account IDs in git or on the site.
- NovaNutri material (video, About text, reports, figures) comes from `C:\dev\nutriscan`; the large video files there are
  not in git.
- Product and cloud names as plain-text facts only (no AWS logo, no AWS in names); no health claims for NovaNutri.

## Log

1. 2026-11-23 Cloned to `C:\dev\homepage` (HEAD 6e70426 equals origin/main), `npm ci` and the dev server work. Copied the
   uncommitted `docs/` and `scripts/build_final_technical_document.py` from the backup. Next: revamp plan (NovaNutri on
   the Projects page with the demo video and About text, service text review), then the resume.
2. 2026-11-23 NovaNutri added (owner's design), not committed: `src/config/projects.ts` (project data, newest first),
   `src/components/ProjectVideo.tsx` (muted autoplay loop with the 720p file, or click-to-play with the 1080p file and
   metadata preload), `src/components/ProjectCard.tsx`, Projects list page, case study `/projects/novanutri` (video,
   problem, architecture figure, stages, results, cost and security, disclaimer, credits and trademarks). Home: the demo
   video autoplays under the hero, then "Latest projects" (case study and live demo links), then services. Services: a
   "Featured projects" block under Custom AI Agents with the video (the Home copy leaves the video out). Video files in
   `public/videos/novanutri/` (1080p 11.5 MB, 720p 7.3 MB, poster), encoded from `C:\dev\nutriscan\video\out`; served
   by Firebase Hosting like the existing videos (Spark plan transfer limit about 360 MB a day: check the plan).
   tsc clean; `npm run lint` reports 8 errors only in unused template files and img warnings in the new files.
3. 2026-11-23 owner: the Custom AI Agents card has no "Example project" footer and is no longer a link; its demo link
   ("Retail marketing automation", /demos/custom-ai-agents.html) moved to the bottom of the Featured projects block as
   "More examples". To be updated later by the owner's plan. Rule in ServiceOverview: any service with featured projects
   behaves this way.
4. 2026-11-23 owner pushed b614ff5; GitHub Actions run #5 built and deployed to Firebase Hosting (success; runs #3 and
   #4 on 6e70426 had failed at the Firebase access check, so this was the first successful automated deploy seen here).
   Live check: https://novapunkai.com/ shows Latest projects and the 720p video; /projects/novanutri/ and the video
   files answer 206.
5. 2026-11-23 Google Analytics (owner approved): the owner's existing account `isupernova` (also holds the blog
   properties) already had a property `novapunk-homepage-a8912` (from the Firebase link) with no data stream. Created
   the web stream "NovaPunk website" for https://novapunkai.com with enhanced measurement on: stream ID 16398439510,
   measurement ID G-BZ9TFJCFBF (public, goes in the site code); GA shows the Google tag GTM-5SVW974Q for it. Not yet in
   the site. Plan (owner): GA4 with Consent Mode and a privacy policy page; a project request form on Firebase Cloud
   Functions and Firestore with email notice; a "How we work" offer page (benchmarks: RaftLabs, WorkWise, Ridgeway AI,
   Parlance Labs, Yuke). Waiting for the owner's pricing decision (publish "starting at" prices or ask only a budget
   range) and the Firebase plan (Blaze needed for Cloud Functions).
6. 2026-11-23 request form, offer and analytics written and tested locally, not committed (owner's decisions: a light
   freelance offer with no paid discovery stage and no published prices; durations: small automation or fix 1 to 2
   weeks, AI agent development 1 to 3 months depending on the request, data and cloud work 2 to 4 weeks, website 2 to
   4 weeks). Site: `src/components/HowWeWork.tsx` on Services (Request -> Quote (free 20-minute call, fixed quote) ->
   Build and deliver (50/50 payment, 14 days of bug fixes, code belongs to the client)); `src/components/RequestForm.tsx`
   on Contact (name, email, company, service, description, deadline, budget range, links, consent; hidden field and
   fill-time spam checks; posts JSON to /api/request; GA event generate_lead); `src/config/request.ts` (choices);
   `/privacy` (draft for review); `src/components/Analytics.tsx` (GA4 G-BZ9TFJCFBF with Consent Mode, banner, only on
   novapunkai.com or with ?ga_test); Privacy link in the footer. Backend: `functions/` (Node 22, firebase-functions v2
   onRequest `projectRequest` in us-central1, max 2 instances; validates, rate limit 5 per IP hash per hour in
   Firestore `rate_limits`, stores `requests`, emails the owner by SMTP when SMTP_HOST, SMTP_USER and the secret
   SMTP_PASSWORD are set; unit tests 5 pass), `firestore.rules` (deny all to browsers), `firebase.json` (functions,
   firestore rules, emulators, hosting rewrite /api/request -> projectRequest). Local check: the form sent a payload
   that the function's validation accepts; banner and Consent Mode default 'denied' work; static build passes.
   Do NOT push before the function is deployed: the Contact form would fail and the hosting deploy may refuse the
   rewrite. Owner setup: Firebase Blaze plan, Firestore database, SMTP account for sean@novapunkai.com, first deploy
   of functions and rules from the PC (Java and the Firebase CLI are not installed here; the emulators were not run).
7. 2026-11-23 owner upgraded the Firebase project novapunk-homepage-a8912 to Blaze (pay as you go). Claude created the
   Firestore database: (default), Standard edition, location nam5 (United States, permanent), production-mode rules
   (deny all), no scheduled backups. Next: SMTP details for the email notice, then the first deploy of functions and
   rules from the PC with the Firebase CLI.
8. 2026-11-23 email notice: the mailbox is Zoho Mail (Zoho Workplace). `functions/.env.novapunk-homepage-a8912` sets
   SMTP_HOST=smtp.zoho.com (port 465, SSL, as in the code), SMTP_USER and NOTIFY_TO=sean@novapunkai.com. The password
   goes only into Secret Manager as SMTP_PASSWORD, typed by the owner (a Zoho app-specific password if 2FA is on).
9. 2026-11-23 first deploy from the PC (Firebase CLI 15.33.0 via npx, owner signed in as the project owner; the owner
   added the SMTP_PASSWORD secret version 1 in the Cloud console because the CLI hidden prompt sent an empty value):
   `firebase deploy --only functions,firestore:rules --force`. APIs enabled by the CLI (Cloud Functions, Cloud Build,
   Artifact Registry, Cloud Run, Eventarc, Pub/Sub, Secret Manager). Function projectRequest (Node 22, 2nd gen,
   us-central1, 256 MiB, max 2 instances) at https://us-central1-novapunk-homepage-a8912.cloudfunctions.net/projectRequest;
   Artifact Registry cleanup policy: images older than 1 day. Rules released. Test: a valid request answered 200 and
   was stored (Firestore id 5oCf4SARFdLVJp1UE01F, a TEST entry to delete later); an invalid email answered 400; no email
   error in the logs. Next: owner checks the inbox, then commit and push (the hosting deploy in GitHub Actions now
   includes the /api/request rewrite; its service account may need Cloud Functions or Cloud Run viewer rights).
10. 2026-11-23 owner confirmed the test email arrived in the Zoho inbox: the full path (function -> Firestore -> Zoho
    SMTP) works. Next: commit and push, then one real request from https://novapunkai.com/contact/, then delete the test
    entries in Firestore `requests`.
11. 2026-11-23 GitHub Actions run #6 (41de884) failed at `npm run build`: the site's tsconfig included `functions/**`,
    whose packages exist only on this PC. Fix: tsconfig excludes `functions`, eslint ignores `functions/**`; a clean
    clone with only the site packages builds (10 pages). `scripts/push.ps1` copied from the NovaNutri repo (checks for
    uncommitted changes, never force pushes); it pushes the repository it sits in.
12. 2026-11-23 owner pushed e3fb3eb; run #7 built and deployed (the hosting deploy with the /api/request rewrite needed
    no extra rights). Live: /contact/, /privacy/, /services/ answer 200; GET /api/request answers 405 from the function.
    A real request from the live form (Decline on the banner, "Live site test (Claude)") showed the thank-you step.
    Two TEST entries are in Firestore `requests` (5oCf4SARFdLVJp1UE01F and the live-form one) until the owner agrees
    to delete them.
13. 2026-11-23 owner confirmed the second email and approved deleting the tests: both TEST documents in `requests`
    (5oCf4SARFdLVJp1UE01F, b3nJjJ6vUm9CLmWY7Inj) deleted with `firebase firestore:delete`; the console no longer lists
    them. The empty `requests` collection is recreated by the next real request. Leftover: a few `rate_limits` counters
    from the tests (no personal data; an optional Firestore TTL policy on expiresAt would clean them automatically).
14. 2026-11-23 progress report: `docs/20261123_novapunk_homepage_revamp_en.docx` (4 pages) and `_ko` (5 pages), with
    live screenshots `docs/screenshots/hp_01_home_video.jpg` to `hp_04_request_form.jpg` (captured with analytics
    declined). No 12-digit number in either PDF. Builders hp_en.py and hp_ko.py in the session scratchpad doc1111.
15. 2026-11-24 consent by region (owner's choice A): Consent Mode defaults analytics_storage to denied only for visitors
    Google locates in the EU 27, Iceland, Liechtenstein, Norway, the UK and Switzerland, and to granted elsewhere; ads
    storage is always denied; a saved choice overrides both. The banner shows only when no choice is saved and the
    browser time zone is European (Europe/* or the Atlantic islands of EEA countries). Privacy policy text updated
    (dated November 24). Tested with Playwright time zones: Detroit and Seoul no banner, Berlin banner; static build passes.
16. 2026-11-24 QR code (owner): `public/images/qr/novapunkai-qr.svg` and `.png` encode
    https://novapunkai.com/?utm_source=qr&utm_medium=offline (QR version 4, error level M, dark #101a33), made once with
    segno 1.6.6 in a scratch environment (no site dependency); decoded back with OpenCV. Footer shows it with "Show it
    full screen"; `/qr/` is a full-screen page for showing on a phone (noindex). Scans appear in GA4 as source "qr".
    Marketing drafts for later (owner put them on hold): `docs/marketing/upwork_profile.md`,
    `docs/marketing/google_business_profile.md`.

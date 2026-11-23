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

# NovaPunk website deployment

Local source -> static build -> GitHub Actions -> Firebase Hosting.

## Local development

```powershell
cd C:\dev\homepage
npm.cmd run dev
```

## Build

```powershell
$env:NOVAPUNK_BUILD_DIR = '.next-build'
npm.cmd run build
Remove-Item Env:NOVAPUNK_BUILD_DIR
```

This setting selects a separate export destination. Next.js 16.2.6 still writes its
production build intermediates under `.next`; it is not an isolated build cache.
With the custom `NOVAPUNK_BUILD_DIR`, Next.js exports static files into `.next-build`.
In GitHub Actions, the default configuration exports into `out`, the Firebase payload.
Both include the standalone demo HTML and videos.
Run `npm.cmd run preview -- .next-build` after the local command above to serve it at http://localhost:4173 without
the Next.js development/runtime server. The helper supports video byte-range requests.
Image optimization is disabled for static hosting. `/waitlist` has a static fallback
page and redirects to `/contact/` through Firebase Hosting configuration.

The Python generator is an optional authoring tool: generated demo HTML is committed
in `public/demos`, so CI needs only Node.js and the locked npm dependencies.
After editing demo content, regenerate the intended pages using the authoring script.

## GitHub setup

Connect the intended repository before pushing. The workflow assumes `main` is the
release branch. Pull requests run the build; pushes to `main` also deploy when enabled.

Configure these repository settings after Firebase Hosting is initialized:

- Variable `FIREBASE_PROJECT_ID`: the actual project ID.
- Secret `FIREBASE_SERVICE_ACCOUNT`: the deployment service-account JSON; never commit it.
- Variable `FIREBASE_DEPLOY_ENABLED`: `true` after the deployment identity and project are configured.

The workflow uses Firebase's Hosting deploy action. Until enabled, it builds and
uploads the static output as a GitHub Actions artifact without publishing.

Firebase/GCP resources, repository connection, credentials, and DNS are not created
by these local configuration files. Add the custom domain after validating the
first deployment on the Firebase-provided URL.

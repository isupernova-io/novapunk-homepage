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
- Variable `FIREBASE_DEPLOY_ENABLED`: `true` after the deployment identity and project are configured.

The workflow uses GitHub OIDC and Workload Identity Federation through a service
account, then deploys with the Firebase CLI using Application Default Credentials.
No service-account JSON key or `FIREBASE_SERVICE_ACCOUNT` secret is required.
Until enabled, it builds and uploads the static output without publishing.

Deployment identity configured in the workflow:

- Provider: `projects/1078070273018/locations/global/workloadIdentityPools/github-homepage/providers/github-actions`
- Service account: `github-novapunk-homepage@novapunk-homepage.iam.gserviceaccount.com`
- Target project variable: `novapunk-homepage-a8912`

The provider condition must restrict `assertion.repository` to
`isupernova-io/novapunk-homepage` and `assertion.ref` to `refs/heads/main`.
The repository principal needs Workload Identity User on the service account.
The service account belongs to a different project from the Hosting target:
grant it Firebase Hosting Admin and API Keys Viewer on `novapunk-homepage-a8912`.
Creating the pool and identity binding does not itself grant those target roles.
Cloud IAM bindings and the first successful deployment still need verification.

Firebase/GCP resources, repository connection, credentials, and DNS are not created
by these local configuration files. Add the custom domain after validating the
first deployment on the Firebase-provided URL.

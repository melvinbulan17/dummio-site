# dummio-site

Landing page for [Dummio](https://github.com/melvinbulan17/dummio), a browser extension that fills any web form with realistic test data.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4. Hosted on Vercel.

## Requirements

- Node.js 26 (see `.nvmrc`)
- pnpm 12

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site runs at http://localhost:3000.

## Scripts

| Script           | What it does                      |
| ---------------- | --------------------------------- |
| `pnpm dev`       | Start the dev server              |
| `pnpm build`     | Build for production              |
| `pnpm start`     | Serve the production build        |
| `pnpm lint`      | Run ESLint                        |
| `pnpm typecheck` | Type-check with TypeScript        |
| `pnpm format`    | Format all files with Prettier    |
| `pnpm test`      | Run unit tests (Vitest)           |
| `pnpm test:e2e`  | Run end-to-end tests (Playwright) |

A pre-commit hook runs ESLint and Prettier on staged files.

## Environment variables

| Variable                   | What it's for                                     |
| -------------------------- | ------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | The live address, used for links, sitemap and SEO |
| `NEXT_PUBLIC_GA_ID`        | Google Analytics measurement ID (`G-...`)         |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification code                  |

Leave `NEXT_PUBLIC_GA_ID` empty and neither the analytics nor the consent notice load. On Vercel, the site address falls back to the production domain when `NEXT_PUBLIC_SITE_URL` isn't set.

## Analytics

Google Analytics only loads after a visitor chooses Allow. The site reports the pages people view, plus three events: `download_click` (with the browser), `support_click` and `github_click`.

## Project structure

```
src/
  app/                 Routes, metadata, sitemap, robots and design tokens
  components/
    layout/            Nav, footer, analytics and the consent notice
    sections/          Page sections, including the live fill demo
    ui/                Buttons and tracked links
  content/             Site copy and demo data
  lib/                 Analytics, consent and site address helpers
public/
  images/              Real screenshots of the extension
tests/
  e2e/                 Playwright tests
  unit/                Vitest tests, mirroring the src/ folders
```

## Updating for the stores

The download buttons point at the latest GitHub release. Once a store listing is live, change that browser's link in `src/content/site.ts`, relabel its button in `src/components/ui/DownloadButtons.tsx` to "Add to Chrome" or "Add to Firefox", and update the hero's install note.

## License

[MIT](LICENSE) © 2026 Melvin S. Bulan

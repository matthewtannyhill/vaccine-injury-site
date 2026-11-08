@AGENTS.md

# VaccineInjuries.org — Project Guide

## What this site is
A lead generation site for vaccine injury legal claims. Visitors learn about their options, read blog posts, and submit an intake form. Leads are captured in Airtable and reviewed manually.

## Stack
- **Next.js 16** (App Router) — see AGENTS.md before writing any Next.js code
- **Tailwind CSS** — all styling
- **Airtable** — lead storage via REST API (`src/lib/airtable.ts`)
- **Vercel** — hosting, auto-deploys on push to `main` (connected to `matthewtannyhill` GitHub account)
- **Google Analytics** — GA4, ID `G-GCL97RXRR0`, added via `@next/third-parties`

## Key files
- `src/app/layout.tsx` — root layout, fonts, GA tag
- `src/app/page.tsx` — homepage
- `src/app/intake/page.tsx` — lead capture form
- `src/app/api/submit-lead/route.ts` — form submission API route, writes to Airtable
- `src/content/blog/posts.ts` — all blog posts as static TypeScript data (no CMS)
- `src/content/injuries.ts` — injury guide hubs (`/injuries`, `/injuries/[slug]`) as static TypeScript data
- `src/lib/airtable.ts` — Airtable client

## Deploying
Just commit and push to `main` — Vercel auto-deploys. The user has explicitly approved committing and pushing without asking for confirmation first.

IndexNow: `.github/workflows/indexnow.yml` runs on push to `main`, waits until GitHub reports the Vercel production deployment as successful, then submits only the changed canonical URLs to `api.indexnow.org`. The public key file is `public/<key>.txt` (also named in `src/lib/indexnow.ts`). No repo secret is required. After the key file is live, a one-time full submission is `npm run indexnow -- --sitemap`. Failures exit soft and do not block the Vercel deploy.

## Environment variables
Airtable credentials are stored in `.env.local` (not checked in) and in Vercel's project settings:
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME` (defaults to `"Leads"`)

## Blog posts
All posts live in `src/content/blog/posts.ts` as a `BlogPost[]` array. To add a post, append a new object to the array with `slug`, `title`, `excerpt`, `date` (display month/year), `datePublished` and `lastReviewed` (ISO `YYYY-MM-DD`; keep them equal unless the post was actually reviewed later), `category`, optional `heroImage`, `sources` (official links from `src/lib/sources.ts`), and `content` (markdown string; supports `[text](url)` links). The byline defaults to "VaccineInjuries.org Editorial Team". Structured data (BlogPosting + BreadcrumbList, plus FAQPage when a ## or ### heading ends with "?") and the sitemap `lastmod` are generated from these fields automatically. `dateModified` is `lastReviewed`, not the build time.

## Injury guides
Hubs live in `src/content/injuries.ts` and render at `/injuries/[slug]` (index at `/injuries`). Vaccine Injury Table entries and onset windows must be quoted from 42 CFR 100.3 (never paraphrased or guessed), medical descriptions should come from NIH/CDC pages listed in the hub's `sources`, and no statistics. FAQ text is reused verbatim for FAQPage structured data. `relatedPosts` slugs also drive the "Related injury guides" box on blog posts. The sitemap picks up new hubs automatically.

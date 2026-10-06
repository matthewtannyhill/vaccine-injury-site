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
- `src/lib/airtable.ts` — Airtable client

## Deploying
Just commit and push to `main` — Vercel auto-deploys. The user has explicitly approved committing and pushing without asking for confirmation first.

## Environment variables
Airtable credentials are stored in `.env.local` (not checked in) and in Vercel's project settings:
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME` (defaults to `"Leads"`)

## Blog posts
All posts live in `src/content/blog/posts.ts` as a `BlogPost[]` array. To add a post, append a new object to the array with `slug`, `title`, `excerpt`, `date` (display month/year), `datePublished` and `lastReviewed` (ISO `YYYY-MM-DD`; keep them equal unless the post was actually reviewed later), `category`, optional `heroImage`, `sources` (official links from `src/lib/sources.ts`), and `content` (markdown string; supports `[text](url)` links). The byline defaults to "VaccineInjuries.org Editorial Team". Structured data (BlogPosting + BreadcrumbList) and the sitemap `lastmod` are generated from these fields automatically.

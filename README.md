# VaccineClaimHelp — V1

A trust-first legal lead-generation site for vaccine injury claims. Educates visitors, runs them through a short eligibility flow, and stores qualified leads in Airtable for manual review and routing.

---

## Local Setup

### Prerequisites
- Node.js v20+ (installed via Homebrew)
- npm v10+

If `node` is not found in a new terminal, run: `eval "$(/opt/homebrew/bin/brew shellenv)"`

### Install dependencies

```bash
cd vaccine-injury-site
npm install
```

### Set up environment variables

Copy the example file and fill in your Airtable credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

```
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Leads
```

See **Airtable Setup** below for how to get these values.

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    page.tsx              # Homepage
    intake/               # Eligibility form (multi-step)
    blog/                 # Blog index + article pages
    faq/                  # FAQ page (accordion)
    how-it-works/         # Expanded how-it-works page
    disclaimer/           # Legal disclaimer
    privacy-policy/       # Privacy policy
    api/submit-lead/      # API route → Airtable
  components/             # Reusable UI components
    Nav.tsx               # Site navigation
    Footer.tsx            # Site footer + legal note
    CTABanner.tsx         # Call-to-action section
  lib/
    airtable.ts           # Airtable API helper
  content/
    blog/posts.ts         # Blog post content (all in one file for V1)
public/
  sitemap.xml             # Static sitemap
  robots.txt              # Search engine directives
```

---

## Airtable Setup

1. Go to [airtable.com](https://airtable.com) and create a free account
2. Create a new **Base** — name it anything (e.g., "Vaccine Leads")
3. Rename the default table to **Leads**
4. Add the following fields:

| Field Name | Field Type |
|---|---|
| Name | Single line text |
| Email | Email |
| Phone | Phone number |
| State | Single line text |
| Vaccine Type | Single line text |
| Injury Type | Single line text |
| Injury Date | Single line text |
| Description | Long text |
| Consent | Checkbox |
| Status | Single select: New, Reviewed, Qualified, Rejected |

5. Get your **Base ID**: Open the base in your browser — the URL contains `appXXXXXXXX`. That's your Base ID.
6. Get your **API key**: Go to [airtable.com/create/tokens](https://airtable.com/create/tokens), create a Personal Access Token with `data.records:write` scope for your base.
7. Add both values to `.env.local`

---

## Deployment (Vercel)

The site is deployed via Vercel. Every push to `main` triggers a new production deployment.

### First-time deploy

```bash
vercel login
vercel
```

Follow the prompts. When asked about environment variables, add:
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME` (set to `Leads`)

Or add them later in the Vercel dashboard under **Settings → Environment Variables**.

### After deploy

- **Production URL**: shown in Vercel dashboard
- **Preview deployments**: created automatically for every branch push
- **Domain**: connect your real domain under **Settings → Domains** in Vercel

---

## Where to Update Content

| What | Where |
|---|---|
| Homepage copy | `src/app/page.tsx` |
| FAQ questions & answers | `src/app/faq/page.tsx` |
| Blog posts | `src/content/blog/posts.ts` |
| Navigation links | `src/components/Nav.tsx` |
| Footer | `src/components/Footer.tsx` |
| CTA button text | `src/components/CTABanner.tsx` |
| Site title / meta | `src/app/layout.tsx` |
| Sitemap | `public/sitemap.xml` |

---

## Adding a New Blog Post

1. Open `src/content/blog/posts.ts`
2. Add a new object to the `blogPosts` array following the same structure
3. The post will automatically appear on `/blog` and at `/blog/your-slug`
4. Add the URL to `public/sitemap.xml`

---

## Connecting a Real Domain (After Vercel Deploy)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g., `vaccineclaimhelp.com`)
3. Vercel will show you DNS records to add at your registrar:
   - For the apex (`vaccineclaimhelp.com`): add an **A record** pointing to Vercel's IP
   - For `www`: add a **CNAME record** pointing to `cname.vercel-dns.com`
4. DNS propagation takes up to 24–48 hours (usually faster)
5. Vercel auto-provisions SSL once the domain is verified

---

## V2 Backlog

- [ ] Segment landing pages by injury type (SIRVA, GBS, COVID)
- [ ] Add lead scoring logic or tagging in Airtable based on vaccine + injury
- [ ] Email notification on new lead submission (via Resend or SendGrid)
- [ ] Google Analytics or Plausible for conversion tracking
- [ ] A/B test hero headlines
- [ ] Partner dashboard or weekly Airtable summary report
- [ ] Blog content calendar — 10+ articles targeting high-intent search queries
- [ ] CICP-specific landing page for COVID-19 vaccine injuries
- [ ] MDX for richer blog post formatting

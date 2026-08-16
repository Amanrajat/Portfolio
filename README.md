# Aman Srivastav — Portfolio

A production-grade developer portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Positions Aman Srivastav as a backend-focused Software Developer (Python / Django / REST APIs / AI-powered applications), with a live GitHub integration, a filterable project system with case-study pages, and a working contact form.

## Features

- Dark-first, premium UI with a subtle trading/fintech-inspired visual system (animated sparkline charts, terminal-style status card) — purely decorative, no real or implied financial data.
- Fully data-driven content — edit `data/*.ts` to update profile, experience, skills or projects without touching any UI component.
- Dynamic, filterable project grid (`/projects`) plus per-project case-study pages (`/projects/[slug]`), statically generated at build time.
- Live GitHub integration (`components/sections/GitHubSection.tsx` + `lib/github.ts`) — server-fetched, cached for an hour, with a static fallback dataset so the section never breaks if the GitHub API is down or rate-limited.
- Working contact form (`components/sections/Contact.tsx` + `app/api/contact/route.ts`) with Zod validation, a honeypot anti-spam field, and Gmail SMTP email delivery.
- Dark/light theme (`next-themes`), respecting system preference, persisted locally.
- Full SEO: metadata, OpenGraph/Twitter images (generated via `next/og`), JSON-LD (`Person` + `WebSite`), sitemap and robots.
- Accessible: semantic landmarks, visible focus states, `prefers-reduced-motion` support, a skip-to-content link, and a desktop-only custom cursor that's automatically disabled on touch devices and reduced-motion preference.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based theme tokens in `app/globals.css`)
- **Animation:** Framer Motion
- **Icons:** Lucide
- **Validation:** Zod
- **Email:** Nodemailer over Gmail SMTP
- **Theming:** next-themes

## Folder Structure

```
app/                     Routes (App Router)
  page.tsx               Home page — composes all sections
  projects/               /projects listing + /projects/[slug] case studies
  api/contact/            Contact form API route
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.tsx
components/
  layout/                Navbar, Footer, ThemeProvider/Toggle, CustomCursor
  ui/                    Small reusable primitives (Button, Badge, Container, ...)
  sections/              Page sections (Hero, About, Experience, Projects, Contact, ...)
  projects/              Project cards + the filterable ProjectsExplorer
  github/                GitHub repo card + loading skeleton
data/                    All editable content — profile, experience, projects, skills, nav
lib/                     github.ts (fetch + fallback), validation.ts, metadata.ts, utils.ts
types/                   Shared TypeScript interfaces
public/resume/           Resume PDF served for the Resume CTA and navbar
```

**To update content, edit files in `data/` — never the components.**

## Environment Variables

Copy `.env.example` to `.env.local` and fill in what you need:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Real production domain, used for canonical URLs, OpenGraph and the sitemap. |
| `GITHUB_TOKEN` | Optional | Raises the GitHub API rate limit for the GitHub section. Works without it. |
| `GMAIL_USER` | Required for email | The Gmail address the contact form sends from (and delivers to). |
| `GMAIL_APP_PASSWORD` | Required for email | A 16-character [Gmail App Password](https://myaccount.google.com/apppasswords) for `GMAIL_USER` — requires 2-Step Verification enabled on that Google account. Not your regular Google password. |

No secret is ever exposed to the client — all of the above are read only in server components / route handlers.

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the environment variables above in the Vercel project settings.
4. Deploy — no additional configuration required.

## GitHub API Integration

`lib/github.ts` fetches the public profile and repositories for `Amanrajat` server-side, revalidating hourly (`next: { revalidate: 3600 }`) so it never re-fetches on every request. Forked repos and known scratch/assignment repos are filtered out. If the GitHub API fails or rate-limits, the section transparently falls back to a small curated dataset built from real, verified repositories — the site never shows an error state to visitors.

## Contact Form

Client-side validated with the same Zod schema (`lib/validation.ts`) used server-side in `app/api/contact/route.ts`. A hidden honeypot field silently discards bot submissions. Real submissions are sent via Gmail SMTP (nodemailer) from `GMAIL_USER`, replying-to the visitor's address; if `GMAIL_USER`/`GMAIL_APP_PASSWORD` aren't set, the API returns a clear error rather than a fake success message.

## Customization

- **Profile, contact info, positioning:** `data/profile.ts`
- **Experience timeline:** `data/experience.ts`
- **Projects:** `data/projects.ts` — add a new object to the array and it automatically appears in the home page teaser, `/projects`, and gets its own case-study page at `/projects/[slug]`.
- **Skills / capabilities:** `data/skills.ts`
- **Resume file:** replace `public/resume/aman-srivastav-resume.pdf`. The current file is a placeholder generated from verified portfolio facts — swap it for a fully formatted resume export when ready.

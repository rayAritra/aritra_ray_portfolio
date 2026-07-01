# Aritra Ray — Portfolio

Personal portfolio site. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Deploy**: Vercel

## Setup

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Customization

All content lives in **`lib/data.ts`** — edit info there without touching component code:

- `personal` — name, bio, email, social links, current job
- `experience` — work history (shown on home + /work)
- `projects` — project cards (title, description, tags, links)
- `skills` — flat skills list on /work
- `education` — education on /work
- `blogPosts` — writing links on home + /blog
- `marqueeImages` — images in the auto-scrolling strip

## Replacing placeholder images

Replace these before deploying (real screenshots):

| File | Dimensions | Purpose |
|------|-----------|---------|
| `public/aritra.jpg` | 400×400 | Profile photo |
| `public/logos/faunly.png` | 64×64 | Company logo |
| `public/projects/*.png` | 800×450 | Project screenshots |
| `public/og-image.png` | 1200×630 | OpenGraph image |

Regenerate placeholders: `node scripts/create-placeholders.js`

## Contact form

The form uses a `mailto:` fallback. To wire up a real handler:
1. Create `app/api/contact/route.ts` using Resend or Formspree
2. Update `components/ContactForm.tsx` to POST to `/api/contact`

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home: intro, marquee, about, experience, projects, contact |
| `/work` | Project cards, experience, skills, education |
| `/blog` | Writing list |

## Deploy

Push to GitHub → import at [vercel.com/new](https://vercel.com/new) → zero config needed.

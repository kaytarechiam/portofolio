# KAYTA.EXE — Portfolio

Personal portfolio for **Kayta Rechia Mazaya** — Information Systems & Technology
student at ITB. A single-page, dark, editorial site with an interactive 3D hero,
scroll-driven animation, and a custom design system ("Warm Editorial Noir").

**Live:** https://kaytarechiam.vercel.app
**GitHub:** https://github.com/kaytarechiam

---

## Tech Stack

- **Framework:** Next.js 14 (App Router, JavaScript)
- **Styling:** Tailwind CSS v4 + custom CSS design tokens
- **Components:** shadcn/ui
- **Smooth scroll:** Lenis
- **Animation:** GSAP + ScrollTrigger (scroll-driven), Framer Motion
- **3D:** React Three Fiber + drei (interactive hero)
- **Hosting:** Vercel

## Features

- Interactive 3D hero (R3F), mouse-reactive, code-split for performance
- Parallax + scroll-triggered reveals across every section
- Skills meters that fill with scroll position (GSAP scrub)
- Experience timeline whose connector grows as you scroll
- 8 projects in a bento grid with a detail modal
- Custom cursor, animated navbar, copy-to-clipboard email, contact form
- Full `prefers-reduced-motion` fallback, fully responsive
- Complete SEO metadata, Open Graph, robots, and sitemap

## Run Locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Design System

All visual decisions (color, type, spacing, motion) live in
[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) and are implemented as tokens in
`app/globals.css`. Do not hardcode colors or fonts outside that system.

## Assets

Drop real images into `public/images/` using these names (placeholders render
gracefully until then):

- `foto-formal.jpg` (hero + OG image)
- `foto-casual-1.jpg` (about), `foto-casual-2.jpg` (optional accent)
- `project-dash.png`, `project-questify.png`, `project-psytrack.png`,
  `project-ordserved.png`, `project-moviedb.png`, `project-ampibi.png`,
  `project-solar.png`

## Deployment (CI/CD)

Connected to Vercel: every `git push` to `main` triggers an automatic deploy.

1. Push this repo to `github.com/kaytarechiam/portfolio`.
2. Import it on [vercel.com](https://vercel.com) (framework auto-detected as Next.js).
3. Deploy — subsequent pushes to `main` auto-deploy.

### Panduan langkah demi langkah (Bahasa Indonesia)

- [PANDUAN-VERCEL.md](./PANDUAN-VERCEL.md) — cara pertama kali membuat website live di Vercel.
- [PANDUAN-DEMO-CICD.md](./PANDUAN-DEMO-CICD.md) — cara demo "push ke GitHub = website otomatis berubah".

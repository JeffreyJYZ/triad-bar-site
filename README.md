# Triad Bar

> The world's first architecturally stratified chocolate. A Next.js rebuild of the original Triad Bar marketing site, ready to ship.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** (PostCSS)
- **motion** (animations) + **lucide-react** (icons)
- **TypeScript** (strict)
- **pnpm**

## Local development

Requires Node `26.3.1` (see `.node-version`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the production build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new) — framework preset auto-detects as Next.js.
3. Vercel respects `.node-version` and uses `pnpm` when a `pnpm-lock.yaml` is present.
4. Set the production domain (default suggested: `triadbar.com`).

No env vars or build config required.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx            Single-page composition
  globals.css         Tailwind v4 theme (obsidian + gold)
  sitemap.ts          SEO sitemap
  robots.ts           robots.txt
  icon.png            Brand favicon
  components/
    Nav.tsx           Fixed nav + mobile menu
    Hero.tsx          TRIAD headline + "Begin the Ascent"
    Stratum.tsx       Three Strata tabs (Apex / Core / Foundation)
    Lab.tsx           "Anatomy of a Bite" + horizontal scroll cards
Builder.tsx       3-step pyramid builder
    Manifesto.tsx     Eight Pillars of a Monolith
    Vessel.tsx        "Not a wrapper. A reliquary."
    Footer.tsx
lib/
  data.ts             Layers, fillings, pillars, nav links
```

## Content source

All copy, layer definitions, and the spec-sheet figures live in `lib/data.ts`. Product imagery is bundled locally under `public/img/`; the only remote host still whitelisted in `next.config.ts` is the placeholder white-chocolate PNG on `static.vecteezy.com` — swap it for an owned render before launch.

## Performance notes

- All images use `next/image` with `fill` + responsive `sizes` (WebP/AVIF, lazy-loaded, CLS-safe).
- Hero image is `priority` for LCP.
- Inter Tight + Playfair Display via `next/font/google` (self-hosted, no CLS).
- Page is statically prerendered (`○ /`).

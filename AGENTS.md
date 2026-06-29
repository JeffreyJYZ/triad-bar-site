<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Rules

- prefer interfaces over type aliases

# Project: Triad Bar

Single-page marketing site for "Triad Bar" — the world's first architecturally stratified chocolate. Three-layer pyramid chocolate bar, custom-built by the customer, sold in AED. One landing page, no routing beyond `not-found`.

## Stack (fixed)

- Next.js 16 (App Router, Turbopack) + React 19
- Tailwind CSS v4 (PostCSS, `@theme` directive in `app/globals.css`)
- motion (formerly framer-motion) via `motion/react`
- lucide-react (icons)
- TypeScript strict, pnpm, Node 26.3.1
- React Compiler enabled (`reactCompiler: true` in `next.config.ts`)

## Commands

- `pnpm dev` — dev server :3000
- `pnpm build` — production build (use this to verify)
- `pnpm start` — serve build
- `pnpm typecheck` — `tsc --noEmit`
- No test runner configured. No lint script.

## Design system (tokens, do not hardcode literals)

Defined in `app/globals.css` under `@theme inline`. Use Tailwind utility aliases, not hex:

- Background: `bg-background` = `#1A1614` (obsidian)
- Foreground: `text-foreground` = `#FDFCFB` (ivory)
- Gold: `text-gold` / `bg-gold` = `#C9974C`
- Gold-light: `hover:bg-gold-light` = `#d4a65e`
- Fonts: `font-display` (Playfair Display), `font-body` (Inter Tight)

Olive `#4B5320` and crimson `#7D2242` appear inline only in data accent colors.

## File map

```
app/
  layout.tsx         Root layout: Playfair + Inter Tight, MotionProvider, Product JSON-LD
  page.tsx           Page composition. Order: Nav > Hero > Stratum > Lab > Builder > Manifesto > Vessel > Prices > GoldenTickets > Footer. Wrapped in SelectionProvider + ImageGate.
  globals.css        @theme tokens + base + :focus-visible + prefers-reduced-motion
  error.tsx          Client error boundary
  not-found.tsx      404 ( themed)
  opengraph-image.tsx + twitter-image.tsx  Dynamic OG (next/og)
  sitemap.ts / robots.ts
  components/
    SelectionContext.tsx  React context for builder selections, persisted to localStorage key `triad-selection-v1`. Exports useSelection, LayerKey, Selection.
    ImageGate.tsx         Preloads all lib/data images + logo before revealing UI; shows "Tempering..." veil. Any new image added to data is auto-covered here.
    MotionProvider.tsx     MotionConfig reducedMotion="user" wrapper.
    Nav.tsx               Fixed nav + mobile menu. Pulls navLinks from data. "Order Now" CTA -> #vessel when selection complete, else "Choose Your Triad" -> #builder.
    Hero.tsx              Full-screen hero, scroll parallax, masked TRIAD title reveal.
    Stratum.tsx           Three Strata tabs (Apex/Core/Foundation). role=tablist.
    Lab.tsx               "Anatomy of a Bite" horizontal scroll cards.
    Builder.tsx           3-step pyramid builder using SelectionContext.
    Manifesto.tsx         Spec sheet grid (6 groups × rows).
    Vessel.tsx            Packaging section + order mailto link (mailto:Yizhou6651@dubaicollege.org).
    Prices.tsx            Pricing tiers. 1/20 2/35 3/50 5/80 10/150 AED.
    GoldenTickets.tsx     5 tickets/year, random, 20 free triads each.
    Footer.tsx
lib/
  data.ts             Single source of truth for layers, fillings, PILlabCards, builderSteps, navLinks, image exports. Use interfaces (Layer/Filling/Pillar), not type aliases.
  motion.ts           Shared motion variants: fadeUp, fadeIn, fadeLeft, fadeRight, scaleIn, maskUp, container, containerStaggerL, EASE, viewportOnce. Reuse these for new animations.
public/
  img/                All product imagery, local. NO remote hosts whitelisted.
  logo.png            Brand mark.
```

## Conventions (stable)

- **Content source of truth = `lib/data.ts`.** New section? Add data shape (prefer `interface`), export array, consume in component.
- **New section component** goes in `app/components/`, mounted in `app/page.tsx` inside `<main>` (inside ImageGate + SelectionProvider). Add `id="section-name"` and a `navLinks` entry in `lib/data.ts`.
- **Animations:** import variants from `lib/motion.ts`. Use `initial="hidden" whileInView="visible" viewport={viewportOnce}` pattern. MotionConfig already honors reduced-motion via MotionProvider.
- **Images:** all local under `public/img/`. No remotePatterns in next.config.ts. Use `next/image` with `fill` + responsive `sizes`. Hero image is `priority`.
- **Order CTA states:** gate on `const { selection } = useSelection(); const allChosen = selection.base && selection.core && selection.apex;`
- **Pricing tiers** must be strictly monotonic descending in per-bar price.
- **localStorage keys** prefixed `triad-` (currently `triad-selection-v1`).
- **mailto link builder** lives in `Vessel.tsx::buildMailto` — extend there if more order fields.
- **Pre-commit:** run `pnpm build` (or at minimum `pnpm typecheck`) before commit. Build must pass.

## Things not present (don't assume)

- No backend / API routes / DB / auth.
- No env vars required.
- No tests, no lint script.
- No remote image hosts.
- No CMS — all content hardcoded in `lib/data.ts`.

## Domain

Production target: `triad-bar.vercel.app` (canonical). Alternates in `layout.tsx` metadata. Ownership contact: `Yizhou6651@dubaicollege.org` (Dubai College).

## Maintenance

- **Keep this file accurate.** When a feat changes the project shape (new section, new data shape, new convention, removed file), update `AGENTS.md` in the same commit. Add only what is needed; remove only what is no longer true. Do not rewrite stable sections.
- **Deps:** always prefer the latest version. Before using an API from Next.js / React / motion / Tailwind v4 / lucide-react, check the official docs — either the bundled guide in `node_modules/<pkg>/dist/docs/` (for next) or the online docs for the exact installed version. Heed deprecation notices. Do not rely on training-data assumptions about this stack.

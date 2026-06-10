# skupAUT

Business card website for a Polish car-buying service (skup samochodów) - a single statically prerendered landing page with contact details, opening hours, and a click-to-call flow.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org) (strict)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@theme`)
- [pnpm](https://pnpm.io)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script           | What it does                                          |
| ---------------- | ----------------------------------------------------- |
| `pnpm dev`       | Start the dev server                                  |
| `pnpm build`     | Production build                                      |
| `pnpm start`     | Serve the production build                            |
| `pnpm lint`      | ESLint                                                |
| `pnpm typecheck` | TypeScript without emitting                           |
| `pnpm validate`  | Prettier + ESLint + typecheck + build (the full gate) |

Husky runs `lint-staged` (Prettier) and `pnpm validate` on every commit, so nothing lands without passing the full gate.

## Project structure

```
src/
├── app/                  # App Router: layout, page, 404, SEO files
│   ├── layout.tsx        # Fonts, global metadata (Open Graph, canonical)
│   ├── page.tsx          # Composes the landing page sections
│   ├── not-found.tsx     # Branded 404
│   ├── opengraph-image.tsx  # OG preview image, generated at build time
│   ├── robots.ts         # robots.txt
│   └── sitemap.ts        # sitemap.xml
├── components/
│   ├── layout/           # Header, footer, LiveClock
│   └── sections/         # Hero, offer, how-it-works, why-us, contact
└── lib/
    ├── data.ts           # Single source of truth: phone, hours, copy, siteUrl
    └── use-now.ts        # Hydration-safe client clock hook
```

## Conventions and practices

- **Server Components by default.** The only client component is `LiveClock` (header open/closed status and footer year), kept as a small leaf so the rest of the page ships no client JS.
- **Hydration-safe time rendering.** The page is prerendered at build time, so anything derived from "now" goes through the `useNow` hook (`useSyncExternalStore`): `null` during prerender and hydration, then the client clock with a per-minute refresh. Never render `new Date()` directly during render.
- **Fonts via `next/font`** with the `latin-ext` subset - the copy is Polish, and `latin` alone is missing ą, ć, ę, ł, ń, ó, ś, ź, ż. Both fonts are variable, so no `weight` arrays.
- **Images via `next/image`** with static imports (dimensions inferred, no layout shift) and `priority` on the above-the-fold header logo only.
- **SEO via the Metadata API and file conventions**: `metadataBase`, Open Graph tags, canonical URL, a build-time-generated `opengraph-image`, `robots.ts`, and `sitemap.ts`.
- **Single source of truth in `src/lib/data.ts`.** Phone number, `tel:` href, opening hours, titles, and all section copy live there - components only render it. Derived values (`phoneHref`, `siteTitle`, `contactHours`) are computed from the base constants, never duplicated.
- **Styling stays in Tailwind utility classes**, with design tokens (colors, fonts, animations) defined once in `globals.css` under `@theme`.

> **Before launch:** `siteUrl` in `src/lib/data.ts` is a placeholder (`https://website-placeholder.pl`). Replace it with the real domain - it feeds the canonical URL, Open Graph URL, robots, and the sitemap.

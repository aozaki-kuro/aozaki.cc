# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Dev server
pnpm run build    # Build (astro build → dist/)
pnpm run deploy   # Build + deploy to Cloudflare (wrangler deploy)
pnpm lint         # ESLint --fix
pnpm start        # Preview built output
```

## Architecture

Personal profile site — purely static, deployed as a Cloudflare Worker (serving assets from `dist/`).

**Stack**: Astro 6 · Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config.*`) · TypeScript · pnpm · Wrangler

**Entry points**:
- `src/pages/index.astro` — single page, SEO meta, analytics (sight.aozaki.cc), composes Main + Footer
- `src/components/Main.astro` — profile card, links, astro-icon (Font Awesome 6 via `@iconify-json/fa6-*`)
- `src/components/Footer.astro` — copyright with dynamic year
- `src/styles/globals.css` — Tailwind import + custom `dotback2` utility (radial dot pattern)

**Fonts**: Self-hosted Overpass via `@fontsource/overpass`, configured as `--font-sans` in `astro.config.ts` using Astro's built-in font API.

**Deployment**: `wrangler.jsonc` targets worker name `profile`, serves `./dist` as static assets on `aozaki.cc`. Workers dev + preview URLs are disabled.

## Tooling Notes

- Tailwind v4 is configured as a Vite plugin — no `tailwind.config.*` file exists
- ESLint uses `@antfu/eslint-config` with Astro + TypeScript + formatters; better-tailwindcss plugin points to `src/styles/globals.css` as entryPoint
- Pre-commit hooks via `prek` (`pnpm run hooks:install` to set up)
- Lint-staged: JS/TS → `pnpm lint`; JSON/CSS/MD → `prettier --write`

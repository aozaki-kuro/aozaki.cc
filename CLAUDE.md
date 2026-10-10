# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

Personal profile site — purely static, deployed as a Cloudflare Worker (serving assets from `dist/`).

## Tooling Notes

- Tailwind v4 is configured as a Vite plugin — no `tailwind.config.*` file exists
- The 404 page is `src/pages/404.astro`, served through `assets.not_found_handling: "404-page"` in `wrangler.jsonc` — without that setting Workers answers unmatched paths with an empty body
- The avatar ships as `avatar-120.webp` (1x) and `avatar.webp` (2x), chosen by `srcset` in `Main.astro`; `/images/*` is cached for a day, so replace a photo under a new filename rather than overwriting it, or visitors keep the old one for up to 24h
- Lighthouse "deprecated APIs" warnings come from Cloudflare's injected `/cdn-cgi/challenge-platform` script (zone-level JavaScript Detections), not from this repo
- Keep `typescript` on 6.x: typescript-eslint and `astro check` reject TS 7.0 (ESLint can't even load its config). Revisit once typescript-eslint supports TS ≥7.1
- `src/icons/` (only a `.gitkeep`) must exist: astro-icon ≥1.2 warns on every build if the local icon dir is missing, even though only the fa6 iconify sets are used
- `pnpm-workspace.yaml` settings (`trustPolicy`, `minimumReleaseAgeExcludePrune`, `shellEmulator`) are enforced by `@antfu/eslint-config` ≥9; use `npx eslint . --fix` rather than editing by hand

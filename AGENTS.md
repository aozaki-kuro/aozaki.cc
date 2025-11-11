# Repository Guidelines

## Project Structure & Module Organization
Source code lives in `src/`, with page routes under `src/pages`, reusable UI in `src/components`, shared layouts in `src/layouts`, and site-wide styling tokens in `src/styles`. Shared data such as navigation metadata sits in `src/data`. Static assets (favicons, social cards, `images/`) belong in `public/`, while the build output goes to `dist/`. Configuration roots are `astro.config.ts` for Astro, `tsconfig.json` for TypeScript, and `wrangler.jsonc` for Cloudflare deployment targets.

## Build, Test, and Development Commands
Run `bun install` to sync dependencies (the repo tracks `bun.lock`). Use `bun run dev` for a hot-reload Astro server, and `bun run build` to generate the production bundle in `dist/`. `bun run prod` adds `astro check` before building to catch template and typing issues. Deployments use Workers via `bun run deploy`, which runs the checks, builds, and executes `wrangler deploy`. Preview a production build locally with `bun run start`.

## Coding Style & Naming Conventions
Astro and TypeScript files follow Prettier defaults with two-space indentation; run `bunx prettier --write .` before committing if you touch formatting. Use PascalCase for Astro components (`HeroBanner.astro`), camelCase for utilities, and kebab-case for route directories (`src/pages/blog/post-name.astro`). Favor Tailwind utility classes declared inline, adding shared tokens to `src/styles` when multiple files reuse them. Keep JSX-like markup declarative and avoid imperative DOM manipulation.

## Testing Guidelines
The project currently relies on static analysis rather than automated tests—run `bunx astro check` or `bun run prod` to surface template, markdown, and typing issues before opening a PR. When touching visual components, capture before/after screenshots to attach to the PR for manual regression review. For data-driven changes (e.g., `src/data`), add quick smoke checks in `bun run dev` to ensure navigation and metadata render as expected.

## Commit & Pull Request Guidelines
Git history favors concise conventional commits (`fix: adjust header spacing`, `chore(deps): bump astro`)—follow the `type(scope): summary` pattern when practical. Keep commits scoped to a single concern and include context in the body if the change is non-obvious. Pull requests should describe the motivation, summarize the change, and link issues when available; attach screenshots or recordings for UI work and note any manual verification steps you performed. Confirm the deploy checklist (linting, build, `astro check`) before requesting review to keep the pipeline green.

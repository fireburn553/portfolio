# NOTES

Things noticed while doing the six tasks on `fix/critical`. **Nothing here was fixed** —
recorded only, per instructions.

## Action required

- **`public/og.png` is a placeholder.** Solid `#111827` with centred white text, generated
  with a throwaway sharp script (script deleted). Replace it with a real designed card
  before the proposal goes out.
- **`NEXT_PUBLIC_SITE_URL` is not set anywhere.** `metadataBase` falls back to
  `https://jamessalva-portfolio.vercel.app`. If the live URL differs, set the env var in
  Vercel or the OG/Twitter image URLs will resolve against the wrong origin.

## Build environment

- `npm run build` fails with `EPERM: operation not permitted, open '.next\trace'` while a
  `next dev` server is running — the dev server holds a live handle on `.next`. Not a code
  problem. Stop the dev server before building, or the build dies partway through with a
  misleading `PageNotFoundError: Cannot find module for page: /_document`.
- `next build` rewrites and reformats `tsconfig.json` on every run (expands the `lib`,
  `paths`, `include`, `exclude` arrays to multi-line). Harmless, but it dirties the tree.

## Code smells (left alone)

- **`src/app/components/ImageZoomModal.tsx:16`** — `Controls` is assigned but never used.
  Only ESLint warning in the build.
- **`src/app/layout.tsx`** — `bg-gray-900 text-gray-200` is set twice, on both `<body>` and
  the inner flex `<div>`. Redundant now that `.dark` is on `<html>`.
- **Dark mode is now permanent, so every `light` half of a `light dark:` pair is dead code.**
  E.g. `text-blue-900 dark:text-blue-300` — the `text-blue-900` rule still ships in the CSS
  and can never win. 14 unique `dark:` utilities across 43 usages. Worth collapsing to
  single-value classes at some point, but that is a real refactor, not a patch.
- **`src/app/globals.css`** — `* { transition: background-color, color, border-color 0.3s }`
  applies a transition to *every* element on the page. The comment says it is for "toggling
  themes", but there is no theme toggle. Costs paint work on hover/scroll for no benefit.
- **`src/app/globals.css`** — `body { padding-top: 64px }` hardcodes the navbar height. If
  the navbar height ever changes, this silently desyncs.
- **`src/app/data/projects.ts`** — the first project object uses quoted keys
  (`"title":`, `"slug":`) while the other four use unquoted. Left as-is per instructions.
- **No `sitemap.ts`, `robots.ts`, or `alternates.canonical`** in the metadata. Nice-to-have
  for a site being handed to a client.

## Dependencies

- `npm audit` reports **11 vulnerabilities (1 moderate, 8 high, 2 critical)** in the current
  tree. Not investigated — installing `@vercel/analytics` was the only dependency change
  made, and no upgrades were run.

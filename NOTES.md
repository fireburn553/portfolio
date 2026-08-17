# NOTES

Things noticed while doing the six tasks on `fix/critical` and the five on
`fix/positioning`. **Nothing here was fixed** — recorded only, per instructions.

## Action required

- **`public/og.png` is a placeholder.** Solid `#111827` with centred white text, generated
  with a throwaway sharp script (script deleted). Replace it with a real designed card
  before the proposal goes out.
- **`NEXT_PUBLIC_SITE_URL` is not set anywhere.** `metadataBase` falls back to
  `https://jamessalva-portfolio.vercel.app`. If the live URL differs, set the env var in
  Vercel or the OG/Twitter image URLs will resolve against the wrong origin.

## From `fix/positioning`

- **`fix/critical` was never merged.** `master` and `origin/master` are both still at
  `e750e75`. `fix/positioning` was branched off the tip of `fix/critical` (`fbf16d2`)
  rather than off `master`, because branching from `master` would have dropped every
  change from the six earlier tasks and left task 3 with no `<li>` to correct. Merge
  `fix/critical` first, then `fix/positioning` on top.
- **Site-wide name is "James Charlie Salva".** Task 4 originally standardised on the short
  form "James Salva"; that was reversed on request afterwards, so all display copy now uses
  the full name — navbar, footer, About paragraph, and every `title` / `siteName` /
  image `alt` in the layout metadata. `public/og.png` was regenerated to match, since the
  old name was baked into the image pixels.
- **Two `jamessalva` strings were deliberately NOT renamed**, because they are addresses
  rather than display copy: the LinkedIn slug `linkedin.com/in/jamessalva`
  (`Footer.tsx:41`, `contact/page.tsx:35,40`) and the `metadataBase` fallback domain
  `jamessalva-portfolio.vercel.app` (`layout.tsx:10`). Editing either would break a real
  link. The contact email `jamescharliesalva@hotmail.com` now matches the full name.
- **The homepage "View All Projects" button is still `bg-blue-900`** in
  `src/app/page.tsx`. That is the same colour the hero gradient was deleted for
  (1.71:1 on `bg-gray-900`). White text on `blue-900` is a different measurement and
  probably passes, but the button now clashes with the hero's `bg-blue-600` CTA — the
  page has two different primary-button blues. Out of scope for task 2, which only
  covered the About section.
- **`Navbar.tsx` and `Footer.tsx` are still `bg-blue-950` with `red-400` accents.** The
  new hero drops red entirely in favour of blue/grey, so the navbar hover colour is now
  the only red on the page.
- **`Navbar.tsx:48`** — the mobile menu button uses `focus:outline-none` with no
  replacement ring, so it is keyboard-focusable but shows nothing on focus. The new hero
  buttons added real `focus-visible` rings; this button is now the odd one out.
- **`Navbar.tsx:6`** — leftover instructional comment in committed code:
  `// install react-icons if not yet: npm i react-icons`.
- **The FSY Attendance project no longer has a live link.** Its Azure host is gone
  (NXDOMAIN — see the task 5 notes), so its `website` line was removed. The project still
  renders with its GitHub link; the "Visit Website" block and the `website?: string`
  interface field were both left in place for a future working URL.
- **Two GitHub Pages links are single points of failure.** `psgc_frontend` and
  `job-application-manager` both return 200 today, but free-tier hosts are exactly what
  went dead on the Azure one. Worth re-checking before the proposal goes out.

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
- **`src/app/experience/page.tsx` — the timeline dots do not sit on the timeline.** Adding
  `relative` to the `<li>` (task 3) fixed the stacking, but `-left-1.5` is only `-6px` from
  the `<li>` edge while the `<ul>`'s ruled border is `pl-6` (`24px`) further left. The dots
  land in the padding, ~18px right of the line. Correct offset is roughly `-left-[29px]`.
  Left alone — task 3 said change nothing else, and the rewrite kept the same dot markup.
- **`src/app/data/projects.ts`** — the first project object uses quoted keys
  (`"title":`, `"slug":`) while the other four use unquoted. Left as-is per instructions.
- **No `sitemap.ts`, `robots.ts`, or `alternates.canonical`** in the metadata. Nice-to-have
  for a site being handed to a client.

## Dependencies

- `npm audit` reports **11 vulnerabilities (1 moderate, 8 high, 2 critical)** in the current
  tree. Not investigated — installing `@vercel/analytics` was the only dependency change
  made, and no upgrades were run.

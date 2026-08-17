# NOTES

Things noticed while doing the six tasks on `fix/critical`, the five on
`fix/positioning`, the four on `feat/conversion`, the four on `feat/case-studies` and the
four on `feat/homepage-surfacing`. **Nothing here was fixed** — recorded only, per
instructions.

## Action required

- **The fourth credential in `financial-advisory/concept.html` still names Ateneo.** The
  anonymisation sweep closed the third item; the fourth is the same kind of leak and is still
  live. See the `feat/homepage-surfacing` notes.
- **`caseStudies.ts` placeholder copy is now resolved** — real two-entry copy was installed
  from `~/Downloads` on `feat/homepage-surfacing`. Superseded; kept only so the history of this
  list reads straight.
- **`NEXT_PUBLIC_FORM_ENDPOINT` is not set, so the audit form cannot send.** Sign up for
  Formspree or Web3Forms, then set the var in Vercel (Project → Settings → Environment
  Variables) and in a local `.env.local`. `.env.example` documents the shape. Until it is
  set the form renders and validates normally but the submit handler shows a
  "not connected yet" error — verified, see the `feat/conversion` notes below.
- **`public/og.png` is a placeholder.** Solid `#111827` with centred white text, generated
  with a throwaway sharp script (script deleted). Replace it with a real designed card
  before the proposal goes out.
- **`NEXT_PUBLIC_SITE_URL` is not set anywhere.** `metadataBase` falls back to
  `https://jamessalva-portfolio.vercel.app`. If the live URL differs, set the env var in
  Vercel or the OG/Twitter image URLs will resolve against the wrong origin.

## From `feat/homepage-surfacing`

- **`caseStudies.ts` was NOT actually replaced in the repo — the real copy was still sitting
  in `~/Downloads`.** The task brief stated the file had already been swapped for real
  two-entry copy, but `origin/master` (`c4d97be`) still carried the 33-`PLACEHOLDER`,
  one-entry version I seeded on the previous branch. The real file was attached to the message
  as `C:\Users\Admin\Downloads\caseStudies.ts` (13,494 bytes, two entries) and was copied into
  `src/app/data/caseStudies.ts` as the first step, because Tasks 1b, 2, 3c and 4 all assume it
  is in place and would have been unverifiable against placeholders. Its interface is
  byte-identical to the seeded one, so nothing else needed adjusting. **Worth checking whether
  any other "already replaced" file is similarly still in Downloads.**
- **`tel:` hrefs now contain spaces, as a direct consequence of the requested replacement.**
  Task 3a specified replacing both the compact `+639666642690` and the formatted
  `+63 966 664 2690` with the single string `+63 2 8888 0000`. The compact form only ever
  appeared inside `href="tel:..."`, so both links are now
  `href="tel:+63 2 8888 0000"`. RFC 3966 does not permit spaces in a `tel:` URI; browsers
  strip them and the link still dials, so this is cosmetic rather than broken. Done exactly as
  specified — but if a strictly valid URI is wanted, the hrefs should be
  `tel:+63288880000` while the visible text keeps the spaced form.
- **The fourth credential still names a specific institution.** Task 3b anonymised the third
  `<li>` under `.creds`, but the fourth still reads "Programme director, Ateneo Financial
  Markets Certification". Ateneo is a named university and the certification is specific
  enough to identify the firm to anyone in the sector — the same class of leak the third item
  was changed to close. Left alone because the task named only the third item.
- **Both `data-note` annotations naming third-party vendors survive by design.** The four
  Task 3c hits (JotForm ×2, jotform ×1, Calendly ×1) are all inside annotation tooltips in
  `financial-advisory/concept.html`. They name vendors, not the client, so they do not identify
  the business — but they do disclose which SaaS the audited firm was using, which a reader
  could combine with other details. Reported unchanged as instructed.
- **The detail template was missing two interface fields, now added.** `sector` and
  `auditDate` were in the `CaseStudy` interface but rendered nowhere — the previous branch's
  notes flagged `auditDate`; `sector` was missed there. Both now render as one muted metadata
  line between the h1 and the summary. This was the minimum change that satisfies "render
  every field in the interface" without adding a tenth page block.
- **`CaseStudyCard` needed no field remapping — it was already correct.** It was built against
  the same field names the real data uses (`slug`, `title`, `sector`, `summary`,
  `engagement`), so nothing was mis-mapped. The only change was clamping the summary, since
  real summaries run 370-400 characters where the placeholder ran ~180.
- **The homepage "View all …" buttons are still `bg-blue-900`,** which the `fix/positioning`
  notes already flagged as clashing with the hero's `bg-blue-600` primary CTA. There are now
  two of them rather than one, so the page shows the same off-palette blue twice. Matched
  deliberately, per Task 1c's instruction to match the existing button styling.
- **`caseStudies.slice(0, 2)` encodes "latest first" as array order, with nothing enforcing
  it.** Both entries carry `auditDate: "17 August 2026"` — identical dates, so "latest" is
  currently meaningless and the homepage order is just whatever order the array happens to be
  in. Same unenforced assumption as `projects.slice(0, 4)`. If ordering ever matters, sort on
  `auditDate` — which would first require it to be a parseable date rather than the display
  string "17 August 2026".
- **The Tailwind `public/**/*.html` scanning issue from the previous branch is unchanged** and
  still costs ~664 bytes of dead CSS sitewide. One line in `globals.css` fixes it:
  `@source not "../../public/**/*.html";`. Not applied — out of scope again.

## From `feat/case-studies`

- **Tailwind v4 is scanning `public/**/*.html` and generating dead utilities from the concept
  files into the site-wide stylesheet.** Measured, not guessed: built twice, once with both
  `concept.html` files in place and once with them moved aside, and the CSS bundle went
  32,036 → 31,372 bytes. The 664-byte delta is utilities like `.visible`, `.sticky`,
  `.antialiased`, `.transform`, `.filter` and `.outline` — bare words sitting inside the
  concepts' own inline `<style>` blocks (`position: sticky`, `visibility: visible`,
  `-webkit-font-smoothing: antialiased`) that Tailwind's scanner cannot distinguish from class
  names. Nothing breaks: the concept files never load this stylesheet, and the React app does
  not use these classes. But it is dead CSS on every page of the site, and it grows with every
  concept added. Fix is one line in `globals.css` —
  `@source not "../../public/**/*.html";` — not applied here because the task ruled out
  changes beyond the four items.
- **`auditDate` is in the `CaseStudy` interface but has nowhere to render.** The task
  enumerated the detail page layout as nine specific blocks and `auditDate` is not one of
  them, so it is populated in the data and displayed nowhere. Either give it a slot (next to
  the engagement eyebrow is the natural home — an unsolicited audit is a snapshot of a site on
  a specific date, and that date is part of the claim's credibility) or drop the field.
- **`financial-advisory` has a full concept but no case study entry**, so
  `/case-studies/financial-advisory/concept.html` is reachable by direct URL and linked from
  nowhere. That follows the task, which specified exactly one seeded entry, but the concept
  file is finished work sitting unreferenced. Add the second entry to `caseStudies.ts` to
  surface it.
- **Both concept files load Google Fonts from `fonts.googleapis.com`.** That is fine
  functionally, but it makes the concepts dependent on a third-party CDN and it means the
  concept pages phone home to Google on open — worth knowing if a concept is ever shown to a
  privacy-sensitive prospect, or demoed offline.
- **The `[slug]` route and the static concept files do not collide, but the margin is one
  path segment.** `/case-studies/[slug]` matches a single segment, so
  `/case-studies/pest-control/concept.html` (two segments) falls through to the static
  handler in `public/`. Verified in dev: the static responses come back with
  `charset=UTF-8` from the file server while React routes return `charset=utf-8`, and the
  served bytes are identical to the files on disk. If a nested route like
  `/case-studies/[slug]/[section]` is ever added, it would shadow these files.
- **The new case study cards are the first thing on the site with no image.** `ProjectCard`
  leads with a 48px-tall image band; `CaseStudyCard` is text-only, so on `/case-studies` and
  in the homepage grid the case study cards sit noticeably shorter and flatter than the
  project cards they are modelled on. Fine while there is one, worth a look once there are
  four or five.
- **`src/app/projects/page.tsx:40` still has the conflicting `mb-4` / `mb-6` pair** flagged
  in the previous branch's notes, and the editor's Tailwind diagnostics still report it. Not
  touched — not one of the four tasks.

## From `feat/conversion`

- **Task 4b found nothing to remove.** `src/app/layout.tsx:53` is a bare `<Analytics />`
  with no props and no attributes. There is no `data-disable-auto-track="1"` and no
  equivalent (`mode`, `beforeSend`, `disableAutoTrack`) anywhere in `src/` — grepped the
  whole tree. Pageview auto-tracking was therefore already on, and `layout.tsx` was left
  untouched as instructed. The new `track("audit_request_submitted")` call in
  `AuditRequestForm.tsx` sits alongside it.
- **Local `master` is stale at `e750e75`; `origin/master` is at `9bbe552`.** The merge of
  PR #3 (`fix/positioning`) landed on the remote but the local branch pointer was never
  updated, so `git checkout -b feat/conversion master` would have branched off a tree with
  the old gradient hero and no "Request a free audit" CTA. Branched off `origin/master`
  instead, which is content-identical to `fix/positioning`. Run `git checkout master &&
  git pull` to resync the local pointer.
- **`.gitignore` line 34 (`.env*`) was swallowing the new `.env.example`.** Verified with
  `git check-ignore -v`. Added `!.env.example` on line 35 — the only edit made to a file
  outside the four tasks, and made because the requested file is useless if git refuses to
  track it. The real `.env` / `.env.local` are still ignored.
- **The task spec and the `Project` interface disagree on two field names.** The spec asked
  for `images: []`; the interface field is `image: string[]`. The spec also said to match the
  interface exactly, and the interface won — the new entry uses `image: []`. Same interface
  requires `longDescription`, which the spec did not supply; the `description` text is
  reused verbatim rather than inventing client detail that cannot be verified. **Write a
  real `longDescription` for the gaming-platform entry before the proposal goes out** — the
  detail page currently shows the card blurb twice.
- **`image: []` needed guards in two components, or the new entry crashes the render.**
  `ProjectCard` was passed `image={project.image[0]}` — `undefined` for an entry with no
  screenshots, and `next/image` throws on a missing `src`. `image` is now optional there and
  falls through to the existing placeholder SVG. `projects/[slug]/page.tsx` now skips
  `<ProjectCarousel>` entirely when `image.length === 0`, rather than mounting
  `react-responsive-carousel` with zero children.
- **The `/projects` filter buttons are still light-mode colours.** `bg-gray-100
  text-gray-700 hover:bg-gray-200` on a `bg-gray-900` page — a row of near-white pills. The
  new disabled "Audits" state was styled to the dark palette (`bg-gray-800 text-gray-500
  border-gray-700`), so the disabled button now looks more at home on the page than the
  enabled ones do. Restyling the enabled states was out of scope for task 1.
- **The `/projects` search input is also light-mode** (`border-gray-200`, no background set,
  so white-on-dark) and uses `focus:outline-none focus:border-blue-500` — same missing-ring
  pattern flagged on the navbar button. The new form's inputs all got real
  `focus-visible` rings; these two controls are now the outliers.
- **`/projects` intro copy still reads "A collection of my work and experiments."** That
  undercuts the same twenty-plus-production-platforms claim task 1 was meant to support,
  in the same way the old category tags did.
- **The new entry pushes the ISO Audit System off the homepage.** `src/app/page.tsx` slices
  `projects.slice(0, 4)`; five entries became six, so the last one no longer appears under
  Featured Projects. Intended consequence of leading with the client work. Superseded — see
  the Stanway section, where the array reached seven and the slice now hides three.
- **"Audits" has zero entries and renders disabled, as instructed.** Ship the case study
  soon — a permanently greyed-out filter reads as a broken control, not as a coming-soon.
- **The existing `.next` build-corruption note is worse than recorded, and the error message
  is a liar.** An orphaned `next start` holding `.next` does not only cause `EPERM` — it also
  lets a build finish with exit 0 while silently dropping webpack chunks, so `next start`
  then 500s every route with `Cannot find module './586.js'` from `pages/_document.js`. The
  same root cause surfaced three different messages in one session: `PageNotFoundError:
  /_document`, `Failed to collect page data for /experience`, and the missing-chunk require
  error. None of them mention the real problem. `taskkill /F /IM node.exe` then
  `rm -rf .next` before building is the reliable fix. Worth a `"prebuild": "rimraf .next"`
  script, or at least a line in the README.
- **`node_modules` is out of sync with the manifest: installed `next` is 15.5.2, but
  `package.json` and `package-lock.json` both say 15.5.9.** The CVE-fix commit (`b4e1b32`)
  bumped the manifest and nobody re-ran `npm install` locally. The build works on 15.5.2, so
  this is not urgent, but **every local build is currently testing a different Next version
  than Vercel will deploy** — including the version the CVE fix was meant to deliver. Run
  `npm ci`. Not run here, since the instructions ruled out dependency changes.

## Stanway Real Estate entry

- **The live site's own footer contradicts the stated tech stack, and this needs settling
  before the entry goes public.** The project was supplied as `#Wordpress #Elementor
  #EstatedAPI` and is tagged that way. But `stanwayrealestate.com` renders "Powered by
  **Avenue**" in the footer (Avenue is a hosted real-estate website platform, not
  WordPress), the brokerage line reads "RE/MAX ULTIMATE REALTY INC.", and the listings
  disclaimer credits the **Toronto Regional Real Estate Board (TRREB)** for property data —
  not Estated. If the tags describe a different build than what is live at that URL, a
  prospect who checks — and on a site whose entire pitch is "I measure before I rebuild",
  someone will — finds the portfolio overstating the work. Either correct the `tech` array,
  or drop the `website` link and describe it as a build no longer in production. Left exactly
  as supplied for now; this is a factual call only the author can make.
- **Screenshots were 29MB of PNG for ten files; now 1.58MB of WebP.** The eight homepage
  scroll captures were resized to 1600px wide and re-encoded at q82 (text stayed crisp —
  spot-checked the listings card, which is the most type-heavy frame). Originals are in the
  session scratchpad under `stanway-originals/`, not in git. If they are wanted permanently,
  move them somewhere outside the repo before the scratchpad is cleaned.
- **Two full-page captures are on disk but referenced nowhere.**
  `stanway-home-fullpage.webp` and `stanway-about-fullpage.webp` (558KB combined) are
  deliberately excluded from `image[]`: at 2278x10744 the home capture is a 1:4.7 strip, and
  both the card's `h-48 object-cover` and the carousel's `h-96` would show only a sliver of
  the very top. They are kept in case a future full-page viewer wants them — but as things
  stand they are unused assets that git will carry forever. Delete them if that viewer is
  not coming.
- **Original filenames were `stanwayrealestate.com_ (1).png` through `(7)`** — spaces and
  parentheses, which need percent-encoding in URLs and break silently when hand-edited. All
  renamed to content-describing kebab-case (`stanway-featured-listings.webp` etc.) and
  ordered to match the actual homepage scroll sequence, so the carousel reads top-to-bottom
  the way a visitor would see the page.
- **"Marketing Sites" wraps the filter row to two lines on narrow mobile.** Five buttons
  (`All / Web Apps / Dashboards / Marketing Sites / Audits`) in a `flex-wrap` row. Expected
  and accepted when the label was chosen, but if a sixth category is ever added the row
  needs a rethink rather than another button.
- **The homepage now hides three projects rather than one.** `src/app/page.tsx` still slices
  `projects.slice(0, 4)` while the array holds seven. Featured Projects shows Gaming Portals,
  Stanway, Safety Service Dashboard and FSY; Location Selector, Job Application Manager and
  the ISO Audit System only appear on `/projects`. Worth deciding deliberately which four
  lead, since that slice is now doing real editorial work.
- **`src/app/projects/page.tsx:34` has conflicting Tailwind classes** —
  `text-4xl font-bold text-blue-900 mb-4 dark:text-blue-300 mb-6` sets `mb-4` and `mb-6` on
  the same element. `mb-6` wins by source order in the compiled CSS. Pre-existing, flagged by
  the editor's Tailwind diagnostics, not touched.

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

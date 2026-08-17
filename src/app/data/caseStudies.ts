// src/app/data/caseStudies.ts

export interface CaseStudy {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  engagement: string;
  scope: string[];
  headlineFindings: { value: string; label: string; body: string }[];
  findings: { title: string; body: string }[];
  recommendation: string[];
  conceptUrl: string | null;
  auditDate: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "pest-control",
    title: "Bay Area pest control company",
    sector: "Home services — seven offices, Northern California",
    summary:
      "A long-established pest control business running 167 pages of WordPress with heavy paid traffic and real local demand. The site collects leads through a 22-field form that begins 73% of the way down the homepage, publishes two different discount amounts on the same screen, and has no Contact link anywhere in its navigation.",
    engagement: "Unsolicited audit — not a client engagement",
    scope: [
      "All 167 published pages and 205 blog posts, fetched and parsed — not sampled",
      "Live DOM inspection at a 1519px desktop viewport and a 390px layout viewport",
      "Contrast computed from resolved styles, including pixel sampling of hero images behind text",
      "Real keyboard focus traversal and measured tap-target sizes",
      "Transfer weights from resource timing on cache-busted loads",
    ],
    headlineFindings: [
      {
        value: "73%",
        label: "How far down the homepage the lead form begins",
        body: "The document is 7,189px tall and the primary form starts at y5,256 — below the fold on every device, on a site whose paid traffic exists to produce leads.",
      },
      {
        value: "4",
        label: "Different phone numbers published sitewide",
        body: "All four are live tel: links with no documented mapping — either untracked call-tracking numbers or abandoned ones still routing real calls.",
      },
      {
        value: "3.90:1",
        label: "Brand colour contrast, against a 4.5:1 requirement",
        body: "Eleven distinct failing combinations were measured, including the phone number, the primary buttons and the FAQ controls.",
      },
    ],
    findings: [
      {
        title: "A broken form field is live in production",
        body: "The primary lead form contains a field labelled 'First do Last' sitting between First Name and Last Name, with an unlabelled text input beside it. A second form carries a 1×16px field labelled 'Type Name Current', a 1×1px field with an empty label, and a five-input address group with no label at all. The damage surfaces in rendered body copy on two service pages as the repeated strings 'Address Address' and a doubled company name.",
      },
      {
        title: "Two discount amounts render simultaneously",
        body: "On a single rendered homepage: '$200 off initial service' in the sticky promo bar, and '$100 off your first service' twice in the body. Both amounts also co-occur on two other pages. On the pricing page the promo bar does not render at all and no dollar figure appears anywhere until a visitor interacts with an estimator.",
      },
      {
        title: "Contact is unreachable from the navigation",
        body: "There is no Contact item in the seven-item main navigation, and none in the footer navigation either. The dedicated contact page exists and is indexed, but the only routes to it are two in-body buttons. From any interior page lacking those buttons, it cannot be reached by navigation at all.",
      },
      {
        title: "A dead plugin is dragging superseded pricing behind it",
        body: "A top-level section on the pricing page carries display:none and 1,765 characters of live-looking content — a 2022 protection plan, per-quarter prices, and opening hours that contradict the footer. The cause is a slider addon that never initialises, collapsing every element in its class to 0×0. One dead plugin is holding an entire legacy pricing block in the document.",
      },
      {
        title: "The trust counters serve zeros",
        body: "Branch count, technician count and review count all render as literal 0 in the server HTML and in the live DOM, animating to their real values only once scrolled into view. Crawlers, link previews, archiving tools and reduced-motion users see a trust block reading zero. Separately, the review count appears as four different figures across the site, and the structured-data value matches none of the on-page ones — a Google policy problem as well as a credibility one.",
      },
      {
        title: "61% of interactive elements are under 44×44px",
        body: "Measured across the homepage, pricing, contact and reviews pages at a 390px viewport. The worst offenders are the twelve pest-selection checkboxes in the pricing estimator at 13×13px — the primary interaction on the pricing page — and the nine selection checkboxes plus three consent checkboxes in the main lead form at 16×16px.",
      },
      {
        title: "Two design systems coexist across the site",
        body: "Roughly 95 location pages built in 2026 use a navy palette and a lighter type scale; the core pages use a red-and-black system. Any redesign has to reconcile two templates rather than restyle one. All 167 pages also sit flat at the root with zero parent relationships, so the URL layer needs rebuilding with redirects — the single largest line item in a re-platform.",
      },
    ],
    recommendation: [
      "Move the lead form above the fold and cut it from 22 fields to five. A required open-text textarea is the highest-friction element in the funnel and should be the first thing removed.",
      "Consolidate to one published phone number, or document the call-tracking map. Four live numbers with no mapping is a reporting problem before it is a design problem.",
      "Replace the brand red with a single token that passes 4.5:1 in both directions, so body text and white-on-red buttons can share it. The current colour needs two tokens to fix, not one.",
      "Restore Contact to the main navigation and the footer, and link the privacy policy and SMS terms from every page that collects marketing consent.",
      "Render the trust figures in the HTML rather than animating them from zero, and reconcile the four conflicting review counts before touching the structured data.",
      "Reconcile the two page templates and rebuild the URL hierarchy with redirects before any visual work starts. Scope this first — it is the largest cost in the project and it is invisible in a design mockup.",
    ],
    conceptUrl: "/case-studies/pest-control/concept.html",
    auditDate: "17 August 2026",
  },

  {
    slug: "financial-advisory",
    title: "Philippine financial advisory firm",
    sector: "Investment advisory and corporate financial education — Metro Manila",
    summary:
      "An SEC-registered advisory firm with genuinely exceptional credentials — a CFA charterholder, a former bank chief investment officer, and 25 corporate clients including several of the country's largest banks and insurers. All of it sits on an eight-page WordPress site running an unmodified 2021 default theme, where six of the eight pages have not been edited in over three years and the primary call to action produces no attributable data.",
    engagement: "Unsolicited audit — not a client engagement",
    scope: [
      "All 8 public pages",
      "Live DOM inspection, raw HTTP response headers, and the WordPress REST API",
      "Transfer weights measured on real navigation with lazy-loading forced and full scroll",
      "Contrast computed from resolved styles, with pixel sampling behind text over photographs",
      "390px viewport probe and real keyboard focus traversal",
    ],
    headlineFindings: [
      {
        value: "0",
        label: "Phone numbers a visitor can actually see",
        body: "The company's number exists only inside the SEO plugin's Organization JSON-LD. Google can read it; a human cannot. There are zero tel: links site-wide.",
      },
      {
        value: "5 of 5",
        label: "Homepage CTAs handing visitors to an untracked domain",
        body: "Every call to action sends the visitor to an external form on a domain absent from the analytics cross-domain linker, with no click events and nothing in the data layer.",
      },
      {
        value: "3y 7m",
        label: "Gap in the media library",
        body: "The only content activity on the site since November 2022 was a refresh of four team photographs in March 2026.",
      },
    ],
    findings: [
      {
        title: "The primary conversion path produces no attributable data",
        body: "All five homepage CTAs point at the same external form, under five different labels and in three different visual styles. That domain is not in the analytics linker configuration, so the client ID does not carry across. No conversion events are defined on the site side and nothing in the data layer references the destination. The firm cannot tell which of its marketing produces enquiries.",
      },
      {
        title: "A stale booking URL is sitting inside a rel attribute",
        body: "Four homepage buttons carry a scheduling-tool URL in their rel attribute, with the noopener token duplicated. A rel attribute takes link types, not hrefs. This is the fingerprint of a find-and-replace that swapped the href to a new form provider and missed the rel — evidence of an unreviewed change, and a small live defect nobody has looked at since.",
      },
      {
        title: "Five different plugin versions are served at the same time",
        body: "The edge cache holds page objects for a year with no purge hook on plugin update. Measured across the eight pages, the page builder appears as five different versions and the SEO plugin as three, depending on when each page was last regenerated. The contact page being served to visitors was generated four months before the audit. All 39 of its asset URLs still return 200, so nothing is broken yet — but there is no mechanism to prevent it breaking on the next asset rename.",
      },
      {
        title: "Six of eight pages have not been edited in over three years",
        body: "Taken from the REST API modified field and cross-checked against the sitemap. One page has never been edited since it was created four years ago. The blog has zero published posts and the feed returns no items, so the sitemap index contains only a page sitemap. An embedded social feed on one page is live, which means it will continue displaying 2023 content indefinitely, behind a visible free-plan badge.",
      },
      {
        title: "The page carrying the whole argument is made of pictures",
        body: "The services page for corporate clients is the only page on the site with a complete funnel — a two-phase service explanation, client logos and five CTAs. It contains one real heading across 9,216 pixels of page, because every section title is a flat PNG exported from a presentation tool. The page holds 196 words of live text and needs perhaps 800. Twenty of its images carry the string 'Image' as their alt text.",
      },
      {
        title: "No content image on the site has meaningful alt text",
        body: "Counted on the rendered DOM after JavaScript across all eight pages: 99 image elements, 62 with empty alt, 20 with the carousel default 'Image', and 17 with meaningful text — of which 16 are the logo and one is an emoji. The logo itself carries different alt text on seven pages than on the homepage, because the homepage is serving a cached copy of older markup.",
      },
      {
        title: "The brand colour cannot legally carry text",
        body: "Two oranges are in circulation, differing by 16 in one channel — apparently the same colour typed twice. Both measure 3.07:1 against white, failing in both directions, so the brand colour cannot be used for text at any size that matters. Separately, zero images on the site use a modern format: one 373KB PNG is rendered at 117×117px, 6.4 times oversized, and the heaviest page transfers 4.6MB across 105 requests.",
      },
    ],
    recommendation: [
      "Render the phone number and email as real text in the header and the footer, and add a regulatory line. The footer currently contains three social icons and nothing else, on a site whose principal credential is its licensing.",
      "Bring the enquiry form on-site and define a conversion event. Until that exists, no marketing spend against this site can be evaluated.",
      "Get the text out of the images. This is the single largest content task in the project, and it unlocks search, accessibility, mobile legibility and translation simultaneously.",
      "Replace the brand orange with one token that passes 4.5:1 in both directions, and add a second lighter tint for dark surfaces. Raise the hero scrim to the level already used correctly elsewhere on the same page.",
      "Reorder the navigation by revenue: the corporate services page above testimonials, and contact above careers.",
      "Decide whether the page builder stays. It runs on three pages carrying 131 words between them; removing it removes a plugin, an addon pack, and their sitewide payload for almost no content cost.",
    ],
    conceptUrl: "/case-studies/financial-advisory/concept.html",
    auditDate: "17 August 2026",
  },
];

// src/app/data/caseStudies.ts
//
// ALL PROSE BELOW IS PLACEHOLDER COPY awaiting the real audit write-up.
// Every string prefixed "PLACEHOLDER" must be replaced before this page is
// published. The placeholder values are deliberately shaped like the real thing
// (short headline values, one-sentence bodies) so the layout can be judged now.

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
    sector: "PLACEHOLDER — sector, e.g. Pest control / home services",
    summary:
      "PLACEHOLDER SUMMARY, FIRST SENTENCE — what this business is and what its site is supposed to do. PLACEHOLDER SUMMARY, SECOND SENTENCE — the headline problem the audit found, stated plainly.",
    engagement: "Unsolicited audit — not a client engagement",
    scope: [
      "PLACEHOLDER SCOPE — what the audit measured, item 1",
      "PLACEHOLDER SCOPE — what the audit measured, item 2",
      "PLACEHOLDER SCOPE — what the audit measured, item 3",
      "PLACEHOLDER SCOPE — what the audit measured, item 4",
      "PLACEHOLDER SCOPE — what the audit measured, item 5",
    ],
    headlineFindings: [
      {
        value: "0.0s",
        label: "PLACEHOLDER LABEL ONE",
        body: "PLACEHOLDER — one sentence explaining what this number is and why it costs the business money.",
      },
      {
        value: "0/0",
        label: "PLACEHOLDER LABEL TWO",
        body: "PLACEHOLDER — one sentence explaining what this number is and why it costs the business money.",
      },
      {
        value: "0%",
        label: "PLACEHOLDER LABEL THREE",
        body: "PLACEHOLDER — one sentence explaining what this number is and why it costs the business money.",
      },
    ],
    findings: [
      {
        title: "PLACEHOLDER FINDING ONE",
        body: "PLACEHOLDER — a paragraph describing the finding, how it was measured, and the consequence for the business.",
      },
      {
        title: "PLACEHOLDER FINDING TWO",
        body: "PLACEHOLDER — a paragraph describing the finding, how it was measured, and the consequence for the business.",
      },
      {
        title: "PLACEHOLDER FINDING THREE",
        body: "PLACEHOLDER — a paragraph describing the finding, how it was measured, and the consequence for the business.",
      },
      {
        title: "PLACEHOLDER FINDING FOUR",
        body: "PLACEHOLDER — a paragraph describing the finding, how it was measured, and the consequence for the business.",
      },
      {
        title: "PLACEHOLDER FINDING FIVE",
        body: "PLACEHOLDER — a paragraph describing the finding, how it was measured, and the consequence for the business.",
      },
      {
        title: "PLACEHOLDER FINDING SIX",
        body: "PLACEHOLDER — a paragraph describing the finding, how it was measured, and the consequence for the business.",
      },
    ],
    recommendation: [
      "PLACEHOLDER RECOMMENDATION — action 1",
      "PLACEHOLDER RECOMMENDATION — action 2",
      "PLACEHOLDER RECOMMENDATION — action 3",
      "PLACEHOLDER RECOMMENDATION — action 4",
      "PLACEHOLDER RECOMMENDATION — action 5",
    ],
    conceptUrl: "/case-studies/pest-control/concept.html",
    auditDate: "PLACEHOLDER — audit date",
  },
];

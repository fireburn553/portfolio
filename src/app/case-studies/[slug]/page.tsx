// src/app/case-studies/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/caseStudies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="py-16 max-w-3xl">
      <Link
        href="/case-studies"
        className="text-sm text-blue-400 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        &larr; All case studies
      </Link>

      {/* 1. Engagement eyebrow — must not be mistakable for client work. */}
      <p className="mt-8 inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-amber-300">
        {study.engagement}
      </p>

      {/* 2. Title */}
      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-gray-100">
        {study.title}
      </h1>

      {/* 3. Summary */}
      <p className="mt-7 text-lg text-gray-400 leading-relaxed">
        {study.summary}
      </p>

      {/* 4. Three headline findings. Single column, three across at 900px up. */}
      <div className="mt-12 grid grid-cols-1 min-[900px]:grid-cols-3 gap-px rounded-xl overflow-hidden border border-gray-700 bg-gray-700">
        {study.headlineFindings.map((finding) => (
          <div key={finding.label} className="bg-gray-900 p-6">
            <p className="text-4xl font-extrabold tracking-tight text-blue-300">
              {finding.value}
            </p>
            <p className="mt-2 text-xs font-mono uppercase tracking-[0.18em] text-gray-500">
              {finding.label}
            </p>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              {finding.body}
            </p>
          </div>
        ))}
      </div>

      {/* 5. Scope */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-blue-300">
          What the audit covered
        </h2>
        <ul className="mt-5 space-y-2 border-l border-gray-700 pl-6">
          {study.scope.map((item) => (
            <li key={item} className="text-gray-300 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Findings */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-blue-300">Findings</h2>
        <div className="mt-6 space-y-8">
          {study.findings.map((finding) => (
            <div key={finding.title}>
              <h3 className="text-lg font-semibold text-gray-100">
                {finding.title}
              </h3>
              <p className="mt-2 text-gray-400 leading-relaxed">
                {finding.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Recommendation */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-blue-300">Recommendation</h2>
        <ul className="mt-5 space-y-2 border-l border-gray-700 pl-6">
          {study.recommendation.map((item) => (
            <li key={item} className="text-gray-300 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 8. Concept link — only when one exists. */}
      {study.conceptUrl && (
        <div className="mt-14">
          <a
            href={study.conceptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
          >
            View the redesign concept &rarr;
          </a>
        </div>
      )}

      {/* 9. Closing note */}
      <p className="mt-14 border-t border-gray-800 pt-8 text-sm text-gray-500 leading-relaxed">
        This audit was produced without engagement from the business concerned.
        The company is not named, and the concept uses placeholder branding.
      </p>
    </article>
  );
}

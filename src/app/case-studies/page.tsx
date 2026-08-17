// src/app/case-studies/page.tsx
import { caseStudies } from "../data/caseStudies";
import CaseStudyCard from "../components/CaseStudyCard";

export default function CaseStudiesPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-300 mb-6">
          Audits &amp; Case Studies
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Measured audits of real websites, written up in full. Each one states
          what was measured, what it found, and what I would change.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.length > 0 ? (
          caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              slug={study.slug}
              title={study.title}
              sector={study.sector}
              summary={study.summary}
              engagement={study.engagement}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No case studies published yet.
          </p>
        )}
      </div>
    </main>
  );
}

// src/app/components/CaseStudyCard.tsx
import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  engagement: string;
}

export default function CaseStudyCard({
  slug,
  title,
  sector,
  summary,
  engagement,
}: Props) {
  return (
    <div className="relative border border-gray-700 rounded-xl shadow-md shadow-gray-800 overflow-hidden h-full flex flex-col group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gray-800">
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-blue-400">
          {sector}
        </p>
        <h3 className="mt-3 font-bold text-lg text-blue-300">{title}</h3>
        <p className="text-sm text-gray-400 mt-2 flex-grow">{summary}</p>
        <p className="mt-4 text-xs text-gray-500 italic">{engagement}</p>
        <span className="mt-3 text-sm text-blue-400 underline">
          Read the audit &rarr;
        </span>
      </div>
      <Link
        href={`/case-studies/${slug}`}
        className="absolute inset-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        <span className="sr-only">Read the audit: {title}</span>
      </Link>
    </div>
  );
}

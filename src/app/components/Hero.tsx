// src/app/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 max-w-3xl">
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-blue-400">
        Frontend Developer
        <span className="text-gray-500">
          {" "}· Philippines · Working with clients in the US and Southeast Asia
        </span>
      </p>

      <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-100">
        I audit websites before I rebuild them.
      </h1>

      <p className="mt-7 text-lg md:text-xl text-gray-400 leading-relaxed">
        Most redesign quotes are an opinion about how a site looks. I start by
        measuring what it does — page weight, contrast ratios, where the forms
        are, how many clicks it takes a customer to reach you. Then the redesign
        has a job to do.
      </p>

      <p className="mt-5 text-base text-gray-500 leading-relaxed">
        Twenty-plus production platforms delivered for a Malaysian gaming
        operator, and redesigns for small and mid-size businesses. Available for
        project work and contract engagements.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/contact"
          className="px-7 py-3.5 bg-blue-600 text-white font-medium rounded-lg text-center hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
        >
          Request a free audit
        </Link>
        <Link
          href="/projects"
          className="px-7 py-3.5 border border-gray-600 text-gray-200 font-medium rounded-lg text-center hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
        >
          See selected work
        </Link>
      </div>
    </section>
  );
}

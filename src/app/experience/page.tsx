// src/app/experience/page.tsx
export default function Experience() {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-8">Experience</h2>
      <ul className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
        <li className="relative">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            React Developer — Techero Solution Sdn. Bhd.
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Malaysia · Dec 2025–Present · Remote
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            Twenty-plus gaming platform portals delivered to production across
            Malaysian, Singaporean and Thai markets. Multi-language React
            interfaces, payment and account flows, third-party integrations.
            100+ defects resolved; measurable reductions in page load time.
          </p>
        </li>
        <li className="relative">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Web &amp; Database Developer, Intern — DILG Camarines Norte
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Feb–May 2023
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            Built a web-based ranking system for monitoring and evaluating
            municipalities across the province.
          </p>
        </li>
        <li className="relative">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Demobilization Unit Leader — Provincial COVID-19 Incident Management
            Team
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mar 2020–Aug 2021
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            QR-code identification and database system tracking 600 personnel
            and resources through the Incident Command System.
          </p>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mt-16 mb-8">Education</h2>
      <ul className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
        <li className="relative">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            BS Software Development
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            BYU–Idaho · Aug 2025
          </p>
        </li>
        <li className="relative">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Web Development Certificate
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            BYU–Idaho · Jul 2024
          </p>
        </li>
        <li className="relative">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Database Certificate
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            BYU–Idaho · Jul 2023
          </p>
        </li>
        <li className="relative">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            BS Information Technology
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Camarines Norte State College · 2019–2023
          </p>
        </li>
      </ul>
    </section>
  );
}

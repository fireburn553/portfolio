// src/app/experience/page.tsx
export default function Experience() {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-8">Experience & Education</h2>
      <ul className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
        <li>
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">BYU-Idaho Online</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            BS Software Development (2024–Present)
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            Specialized in software engineering, databases, and web development.
          </p>
        </li>
        <li>
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Camarines Norte State College
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            BS Information Technology (2018–2022)
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            Learned programming fundamentals, networking, and system design.
          </p>
        </li>
        <li>
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-600"></div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Red Cross Youth – Camarines Norte
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Volunteer & IT Support (2019–Present)
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            Organized digital tools for events, developed attendance systems,
            and contributed to outreach activities.
          </p>
        </li>
      </ul>
    </section>
  );
}
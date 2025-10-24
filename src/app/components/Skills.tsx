export default function Skills() {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "C#", "Kotlin"],
    Frameworks: ["React", "Next.js", "Node.js", ".NET", "Blazor"],
    Databases: ["PostgreSQL", "SQLite", "MongoDB"],
    Tools: ["Git", "Docker", "Figma", "Jira"],
  };

  return (
    <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-gray-700 dark:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

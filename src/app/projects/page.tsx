"use client";

import { useState } from "react";

// Example project data
const projects = [
  {
    id: 1,
    title: "Red Cross Youth Database",
    description: "A role-based web application for managing youth volunteers.",
    category: "Web Development",
    tech: ["Next.js", "PostgreSQL", "Node.js"],
  },
  {
    id: 2,
    title: "FSY Attendance System",
    description:
      "A Blazor Server app with role-based authentication and QR code tracking.",
    category: "Blazor / .NET",
    tech: [".NET 8", "SQLite", "Blazor"],
  },
  {
    id: 3,
    title: "Research Repository Website",
    description: "A searchable repository for student journals and articles.",
    category: "Web Development",
    tech: ["Next.js", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Unit Converter CLI",
    description: "A Kotlin CLI app for unit conversion.",
    category: "CLI Apps",
    tech: ["Kotlin"],
  },
];

// Extract unique categories dynamically
const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full p-2 mb-4 border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-md border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <p className="mt-2 text-sm text-blue-600">{project.category}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-gray-200 text-sm rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </main>
  );
}

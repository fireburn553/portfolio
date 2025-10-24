// src/app/projects/page.tsx
"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

// Extract unique categories dynamically
const categories: string[] = [
  "All",
  ...(Array.from(new Set(projects.map((p) => p.category))) as string[]),
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
    <main className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4  dark:text-blue-300 mb-6">
          My Projects
        </h1>
        <p className="text-lg text-gray-600  dark:text-gray-300 leading-relaxed">
          A collection of my work and experiments.
        </p>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search projects by title, description, or tech..."
        className="w-full p-3 mb-6 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Filters */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image[0]}
              github={project.github}
              demo={project.demo}
              slug={project.slug}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No projects found.
          </p>
        )}
      </div>
    </main>
  );
}

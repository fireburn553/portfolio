// src/app/projects/[slug]/page.tsx

import { projects } from "../../data/projects";
import Link from "next/link";
import ProjectCarousel from "../../components/Carousel";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>; // 👈 params is now a Promise
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params; // 👈 must await
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-6 text-center">
        <p>Project not found.</p>
        <Link href="/projects" className="text-blue-600 hover:underline mt-4 ">
          &larr; Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link href="/projects" className="text-blue-600 hover:underline">
        &larr; Back to Projects
      </Link>
      <h1 className="text-4xl font-bold mt-4  dark:text-blue-300 mb-6">
        {project.title}
      </h1>
      <p className="text-gray-600 mt-2">{project.category}</p>

      <div className="mt-6">
        <ProjectCarousel images={project.image} />
      </div>

      <p className="mt-6 text-lg">{project.longDescription}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Technologies Used:</h2>
        <ul className="list-none mt-2 flex flex-wrap gap-2 text-black">
          {project.tech.map((tech, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-gray-200 text-sm rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex space-x-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View on GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Live Demo
          </a>
        )}
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}

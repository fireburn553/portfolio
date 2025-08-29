// pages/projects/[slug].js
import { useRouter } from "next/router";
import projects from "../../data/projects";
import Link from "next/link";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="p-6">Loading project...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link href="/projects" className="text-blue-600 hover:underline">
        ← Back to Projects
      </Link>
      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.category}</p>

      <p className="mt-4">{project.details}</p>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Technologies Used:</h2>
        <ul className="list-disc list-inside mt-2">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Project
      </a>
    </div>
  );
}

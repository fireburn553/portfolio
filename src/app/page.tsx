// src/app/page.tsx
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import { projects } from "./data/projects";
import Link from "next/link";
export default function Home() {
  const featured = projects.slice(0, 4); // first 4 projects
  return (
    <>
      <Hero />

      {/* About */}
      <section className="py-16 max-w-3xl" id="about">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">About</h2>
        <p className="text-gray-300 leading-relaxed">
          I&apos;m James Charlie Salva, a frontend developer based in the Philippines. I work
          on two kinds of project: contract engineering inside product teams, where I
          handle complex interface state, multi-language builds and payment flows;
          and full redesigns for businesses whose website has stopped doing its job.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Every redesign I quote starts with a measured audit of the current site, so
          the scope is based on findings rather than assumptions. You get that report
          whether or not the project goes ahead.
        </p>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Featured Projects */}
      <section className="py-16" id="projects">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
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
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </>
  );
}

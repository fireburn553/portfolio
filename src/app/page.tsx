import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  const featured = projects.slice(0, 4); // first 4 projects
  return (
    <>
      <Hero />

      {/* About Me */}
      <section className="py-16" id="about">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hello! I’m <strong>James Charlie Salva</strong>, a Software
          Development student at BYU-Idaho Online and a graduate of Information
          Technology from Camarines Norte State College. My academic journey and
          volunteer work with the Red Cross Youth shaped my passion for building
          impactful software solutions that help communities and organizations.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="py-16" id="projects">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800"
          >
            View All Projects
          </a>
        </div>
      </section>
    </>
  );
}

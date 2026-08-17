// src/app/contact/page.tsx
import AuditRequestForm from "../components/AuditRequestForm";

export default function Contact() {
  return (
    <section className="py-16 max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-100">
        Request a free audit
      </h1>

      <p className="mt-6 text-lg text-gray-400 leading-relaxed">
        I&apos;ll send a written audit of your current site within three working
        days. No call required first. If it turns into a project, good — if it
        doesn&apos;t, you still know what to fix.
      </p>

      <div className="mt-10">
        <AuditRequestForm />
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-400">
          Or reach me directly
        </h2>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li>
            Email:{" "}
            <a
              href="mailto:jamescharliesalva@hotmail.com"
              className="text-blue-400 underline hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              jamescharliesalva@hotmail.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/fireburn553"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              github.com/fireburn553
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jamessalva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              linkedin.com/in/jamessalva
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

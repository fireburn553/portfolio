import Link from "next/link";
// src/app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-red-600">
        James Charlie Salva
      </h1>
      {/* These classes will now work correctly */}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        BS Software Development (BYU-Idaho Online) | BS Information Technology
        (CNSC)
      </p>
      <p className="text-md text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
        Passionate about building software solutions, web applications, and
        volunteer-driven IT systems.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/projects"
          className="px-8 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transform hover:scale-105 transition-transform"
        >
          View Projects
        </Link>
        <a
          href="/contact"
          className="px-8 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transform hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

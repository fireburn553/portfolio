// src/app/contact/page.tsx
export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6">
        Contact Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Let’s connect! You can reach me via:
      </p>
      <div className="mt-6 space-y-4">
        <p>
          Email:{" "}
          <a
            href="mailto:jamescharliesalva@hotmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            jamescharliesalva@hotmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/fireburn553"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            github.com/fireburn553
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jamessalva/"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            linkedin.com/in/jamessalva
          </a>
        </p>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Me</h2>
      <p className="text-gray-700">Let’s connect! You can reach me via:</p>
      <div className="mt-6 space-y-2">
        <p>
          Email:{" "}
          <a
            href="mailto:jamescharliesalva@hotmail.com"
            className="text-blue-600 underline"
          >
            jamescharliesalva@hotmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/jamescharliesalva"
            target="_blank"
            className="text-blue-600 underline"
          >
            github.com/jamescharliesalva
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/jamescharliesalva"
            target="_blank"
            className="text-blue-600 underline"
          >
            linkedin.com/in/jamescharliesalva
          </a>
        </p>
      </div>
    </section>
  );
}

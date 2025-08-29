export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-5xl font-bold text-blue-900">James Charlie Salva</h1>
      <p className="mt-4 text-lg text-gray-700">
        BS Software Development (BYU-Idaho Online) | BS Information Technology
        (CNSC)
      </p>
      <p className="text-md text-gray-600 mt-2">
        Passionate about building software solutions, web applications, and
        volunteer-driven IT systems.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

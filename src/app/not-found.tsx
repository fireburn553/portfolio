// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-5xl font-bold text-blue-900">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        The page you are looking for does not exist.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800"
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}

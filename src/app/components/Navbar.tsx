"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-900 text-white py-4 shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="font-bold text-lg">
          JCSalva
        </Link>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-blue-950 text-white py-4 shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="font-bold text-xl hover:text-red-400 transition-colors"
        >
          JCSalva
        </Link>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  ${pathname === link.href ? "font-bold text-red-400" : ""}
                  hover:text-red-300 transition-colors
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

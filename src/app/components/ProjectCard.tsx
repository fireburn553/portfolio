// src/app/components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
  slug,
}: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative border border-gray-200 dark:border-gray-700 rounded-xl shadow-md dark:shadow-gray-800 overflow-hidden h-full flex flex-col group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800">
      <div className="overflow-hidden h-48 w-full">
        {imageError ? (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 14"
              />
            </svg>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            width={600}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-grow">
          {description}
        </p>
        <div className="mt-4">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Tech: {tech.join(", ")}
          </p>
          <div className="flex space-x-4 mt-3 relative z-10">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 dark:text-red-400 underline"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <Link href={`/projects/${slug}`} className="absolute inset-0 z-0">
        <span className="sr-only">View details for {title}</span>
      </Link>
    </div>
  );
}

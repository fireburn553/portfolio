import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
}: Props) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-blue-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <p className="text-xs text-gray-500 mt-2">Tech: {tech.join(", ")}</p>
        <div className="flex space-x-4 mt-3">
          {github && (
            <a
              href={github}
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" className="text-red-600 underline">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// app/data/projects.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  category?: "School" | "Personal" | "Volunteer";
}

export const projects: Project[] = [
  {
    title: "FSY Attendance System",
    description:
      "A Blazor Server app with SQLite for managing youth attendance during FSY events. Includes role-based access, nightly check-ins, and QR code tracking.",
    tech: ["C#", ".NET 8", "Blazor", "SQLite"],
    image: "/fsy-attendance.png",
    github: "https://github.com/jamescharliesalva/fsy-attendance",
    category: "School",
  },
  {
    title: "Red Cross Youth Database",
    description:
      "A web system for managing Red Cross Youth volunteer profiles, council structures, and attendance tracking across schools and chapters.",
    tech: ["React", "PostgreSQL", "Node.js"],
    image: "/rcy-database.png",
    github: "https://github.com/jamescharliesalva/rcy-database",
    category: "Volunteer",
  },
  {
    title: "QR Code Attendance System",
    description:
      "A Next.js + PostgreSQL application with role-based dashboards. Admins invite users and track attendance via QR code scanning.",
    tech: ["Next.js", "PostgreSQL"],
    image: "/qr-attendance.png",
    github: "https://github.com/jamescharliesalva/qr-attendance",
    category: "School",
  },
  {
    title: "Research Repository Website",
    description:
      "A platform for students to upload, search, and browse academic journals and research papers. Built with React and PostgreSQL backend.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/research-repo.png",
    github: "https://github.com/jamescharliesalva/research-repo",
    category: "School",
  },
  {
    title: "Job Application Manager",
    description:
      "A React-based app to help job seekers track applications, deadlines, and interviews. Includes authentication and responsive design.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/job-app-manager.png",
    category: "Personal",
  },
  {
    title: "Sorting & Algorithm Analysis",
    description:
      "A C# program analyzing sorting algorithms and standard deviation, with Big O analysis of different approaches.",
    tech: ["C#", ".NET"],
    image: "/sorting-analysis.png",
    category: "School",
  },
  {
    title: "Unit Converter (Kotlin CLI)",
    description:
      "A Kotlin-based CLI program that converts between units (length, weight, temperature). Developed as part of BYU-Idaho coursework.",
    tech: ["Kotlin"],
    image: "/unit-converter.png",
    category: "School",
  },
  {
    title: "Case Study: Adaora Chukwu",
    description:
      "A professional business case study highlighting leadership, CI/CD adoption, and risk management in e-commerce (BYU-Idaho assignment).",
    tech: ["Case Study", "Writing", "Business Analysis"],
    image: "/case-study.png",
    category: "School",
  },
];

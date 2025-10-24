// src/app/data/projects.ts
export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string[];
  github?: string;
  demo?: string;
  category?: "School" | "Personal" | "Volunteer";
  status?: "Completed" | "In Progress";
  website?: string;
}

export const projects: Project[] = [
  {
    title: "FSY Attendance System",
    slug: "fsy-attendance-system",
    description:
      "A Blazor Server app with SQLite for managing youth attendance during FSY events.",
    longDescription:
      "This project was developed to streamline the attendance process for a large youth conference. It features role-based access for administrators and staff, nightly check-ins, and QR code tracking for quick and efficient attendance monitoring. The application is built with .NET 8 and Blazor Server, utilizing an SQLite database for data persistence.",
    tech: ["C#", ".NET 8", "Blazor", "SQLite"],
    image: ["/projects/fsyAttendance/fsyAttendance.png", ],
    github: "https://dev.azure.com/utc11dotNetgroupOrganisation/cse325/_git/cse325",
    category: "School",
    status: "Completed",
    website: "https://fsy-attendance.azurewebsites.net/",
  },
  {
    title: "Location Selector Web App",
    slug: "location-selector-web-app",
    description:
      "A web application for selecting locations in the Philippines using the PGSC by the Philippine Statistic Authority.",
    longDescription:
      "This web application was designed to allow users to easily select and view locations in the Philippines. It utilizes the Philippine Geoportal Spatial Catalog (PGSC) to provide accurate and up-to-date geographic information. The application is built with a React frontend and a Node.js backend.",
    tech: ["React", "Python"],
    image: ["/projects/locationSelector/locationSelector.png", "/projects/locationSelector/locationSelector1.png", "/projects/locationSelector/locationSelector2.png", "/projects/locationSelector/locationSelector3.png", "/projects/locationSelector/locationSelector4.png"],
    github: "https://github.com/fireburn553/psgc_frontend",
    category: "Personal",
    status: "In Progress",
    website: "https://fireburn553.github.io/psgc_frontend/",
  },
  {
    title: "Job Application Manager",
    slug: "job-application-manager",
    description:
      "A full-stack application designed to help users efficiently manage and track their job applications. It features a drag-and-drop Kanban board, an analytics dashboard to visualize progress, and a notification system for important deadlines.",
    longDescription:
      "Inspired by the challenge of tracking multiple job opportunities, the Job Application Manager is a full-stack web application built to streamline the entire application process. It provides a centralized and intuitive platform for users to monitor everything from initial interest to final offer. The core of the application is a dynamic, drag-and-drop Kanban board that allows users to move their applications through various stages: Wishlist, Applied, Interview, Offer, and Rejected. To provide users with valuable insights, the application includes an analytics dashboard with charts and statistics on their application history and success rates.The backend is built with NestJS and PostgreSQL, featuring a secure authentication system using JWT and Passport.js. The frontend is a responsive single-page application built with React and TypeScript, using Jotai for state management.",
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Jotai", "Passport.js"],
  image: ["/projects/jobApplications/jobApplicationManager.png"], 
  github: "https://github.com/morganmallen/job-application-manager", 
  category: "School",
  status: "Completed",
  website: "https://morganmallen.github.io/job-application-manager"
  },
  {
  title: "Web-Based ISO Audit Management System",
  slug: "web-iso-audit-management-system",
  description:
    "A role-based web application for managing the ISO audit process at Camarines Norte State College, from scheduling audits to generating final reports.",
  longDescription:
    "This project is a comprehensive Web-Based ISO Audit Management System designed to streamline the internal auditing process for Camarines Norte State College. It provides a multi-user environment with distinct roles for administrators, auditors, and auditees, ensuring a secure and organized workflow. Key features include user account management, the creation and assignment of audit plans, a system for responding to audit findings with supporting documents, and the automated generation of detailed PDF reports. The system facilitates real-time tracking of audit progress and improves communication between all parties involved in the quality assurance process.",
  tech: ["React", "Node.js", "Express", "MySQL", "Material-UI", "JWT"],
  image: ["/projects/webAuditIso/webIso.png", "/projects/webAuditIso/webIso1.png", "/projects/webAuditIso/webIso2.png", "/projects/webAuditIso/webIso3.png", "/projects/webAuditIso/webIso4.png", "/projects/webAuditIso/webIso5.png", "/projects/webAuditIso/webIso6.png","/projects/webAuditIso/webIso7.png","/projects/webAuditIso/webIso8.png","/projects/webAuditIso/webIso9.png","/projects/webAuditIso/webIso10.png","/projects/webAuditIso/webIso11.png","/projects/webAuditIso/webIso12.png","/projects/webAuditIso/webIso13.png","/projects/webAuditIso/webIso14.png",], // Placeholder path for your project screenshot
  github: "https://github.com/fireburn553/webauditiso", // Assumed GitHub URL
  category: "Personal",
  status: "Completed",
}
];
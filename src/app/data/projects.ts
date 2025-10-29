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
    "title": "Safety Service Dashboard",
  "slug": "safety-service-dashboard",
  "description": "A web application for managing safety service classes, participants, grading, and certificates.",
  "longDescription": "This full-stack project provides a centralized dashboard for administrators and instructors, likely for organizations like the Philippine Red Cross Safety Services. Built using React (with TypeScript and Vite) for the frontend and Node.js (with Express and PostgreSQL) for the backend. Key features include role-based access control (Admin, Instructor), management of training classes, participant registration and tracking, grading functionality, and automated generation of PDF certificates and reports using Puppeteer. The application is deployed with the frontend on Vercel and the backend on Render.",
  "tech": ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT", "Bootstrap", "Vite", "Puppeteer"],
  "image": ["/projects/ssdashboard/ss.png", "/projects/ssdashboard/ss1.png", "/projects/ssdashboard/ss2.png", "/projects/ssdashboard/ss3.png", "/projects/ssdashboard/ss4.png", "/projects/ssdashboard/ss5.png", "/projects/ssdashboard/ss6.png", "/projects/ssdashboard/ss7.png", "/projects/ssdashboard/ss8.png", "/projects/ssdashboard/ss9.png", "/projects/ssdashboard/ss10.png", "/projects/ssdashboard/ss11.png", "/projects/ssdashboard/ss12.png", "/projects/ssdashboard/ss13.png", "/projects/ssdashboard/ss14.png", "/projects/ssdashboard/ss15.png", "/projects/ssdashboard/ss16.png", "/projects/ssdashboard/ss17.png", "/projects/ssdashboard/ss18.png", "/projects/ssdashboard/ss19.png", "/projects/ssdashboard/ss20.png",], 
  "github": "https://github.com/fireburn553/ssdashboard",
  "category": "Volunteer", 
  "status": "In Progress",
  "website": "https://ss-dashboard-two.vercel.app/" 
  },
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
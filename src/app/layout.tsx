// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamessalva-portfolio.vercel.app"
  ),
  title: "James Salva — Frontend Developer",
  description: "Frontend developer. I audit websites before I rebuild them.",
  openGraph: {
    type: "website",
    siteName: "James Salva",
    title: "James Salva — Frontend Developer",
    description: "Frontend developer. I audit websites before I rebuild them.",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "James Salva — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Salva — Frontend Developer",
    description: "Frontend developer. I audit websites before I rebuild them.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-gray-900 text-gray-200">
        {/* This div now correctly controls the theme for the whole page */}
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 flex-grow w-full">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

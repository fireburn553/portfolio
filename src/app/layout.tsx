// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "James Charlie Salva | Portfolio",
  description:
    "Portfolio website showcasing projects, education, and experience of James Charlie Salva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-900 text-gray-200">
        {/* This div now correctly controls the theme for the whole page */}
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 flex-grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

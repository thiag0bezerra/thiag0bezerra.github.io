import type { Metadata } from "next";
import "./resume.css";
export const metadata: Metadata = {
  title: "Thiago Bezerra - Portfolio",
  description:
    "Personal Portfolio of Thiago Bezerra - Senior Software Engineer | Full-Stack Developer | AI Researcher",
  keywords: [
    "Thiago Bezerra",
    "Software Engineer",
    "Full Stack",
    "AI Researcher",
    "Data Science",
    "Cloud Infrastructure",
    "TensorFlow",
  ],
  authors: [{ name: "Thiago Bezerra" }],
  openGraph: {
    title: "Thiago Bezerra - Portfolio",
    description:
      "Personal Portfolio of Thiago Bezerra - Senior Software Engineer | Full-Stack Developer | AI Researcher",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="p-4 md:p-8 font-sans bg-white text-ink max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./resume.css";
export const metadata: Metadata = {
  title: "Thiago Bezerra - Portfólio",
  description:
    "Portfólio pessoal de Thiago Bezerra - Senior Software Engineer | Full-Stack Developer | AI Researcher",
  keywords: [
    "Thiago Bezerra",
    "Software Engineer",
    "Full Stack",
    "AI Researcher",
    "Ciência de dados",
    "Infraestrutura de nuvem",
    "TensorFlow",
  ],
  authors: [{ name: "Thiago Bezerra" }],
  openGraph: {
    title: "Thiago Bezerra - Portfólio",
    description:
      "Portfólio pessoal de Thiago Bezerra - Senior Software Engineer | Full-Stack Developer | AI Researcher",
    type: "website",
    locale: "pt_BR",
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

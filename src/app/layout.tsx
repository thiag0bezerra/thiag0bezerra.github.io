import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout-specific/footer";
import { Header } from "@/components/layout-specific/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

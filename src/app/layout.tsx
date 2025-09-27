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
  title: "Ana Clara - Portfólio",
  description:
    "Portfólio pessoal de Ana Clara - Desenvolvedora Full Stack especializada em tecnologias modernas",
  keywords: [
    "Ana Clara",
    "Desenvolvedor",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ana Clara" }],
  openGraph: {
    title: "Ana Clara - Portfólio",
    description:
      "Portfólio pessoal de Ana Clara - Desenvolvedora Full Stack especializada em tecnologias modernas",
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

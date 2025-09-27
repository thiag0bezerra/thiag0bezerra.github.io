import { ExternalLink, Github, Heart, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "./container";

const socialLinks = [
  {
    href: "https://github.com/ana-clara",
    icon: Github,
    label: "GitHub",
    description: "Veja meus projetos",
  },
  {
    href: "https://linkedin.com/in/ana-clara",
    icon: Linkedin,
    label: "LinkedIn",
    description: "Conecte-se comigo",
  },
  {
    href: "mailto:ana.clara@email.com",
    icon: Mail,
    label: "Email",
    description: "Entre em contato",
  },
];

const quickLinks = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      AC
                    </span>
                  </div>
                  <span className="font-semibold text-xl">Ana Clara</span>
                </div>
                <p className="text-muted-foreground max-w-md leading-relaxed">
                  Desenvolvedora Full Stack apaixonada por criar soluções web
                  modernas e eficientes. Especializada em React, TypeScript,
                  Node.js e tecnologias de cloud.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-semibold">Vamos nos conectar</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Icon className="h-4 w-4" />
                          <span>{link.label}</span>
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Navegação</h3>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold">Contato</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <a
                    href="mailto:ana.clara@email.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    ana.clara@email.com
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">Localização</p>
                  <p className="text-foreground">São Paulo, Brasil</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Disponibilidade</p>
                  <p className="text-foreground">Trabalho remoto</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-1">
                &copy; {currentYear} Ana Clara. Feito com
                <Heart className="h-3 w-3 text-red-500 fill-current" />e café
              </p>
              <span className="hidden md:inline">•</span>
              <p>Todos os direitos reservados</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>Desenvolvido com Next.js & Shadcn/ui</span>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://github.com/convergente-org/aboutme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  Ver código fonte
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

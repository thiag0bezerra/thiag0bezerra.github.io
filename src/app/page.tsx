"use client";

import {
  CloudUpload,
  Code,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  Server,
  Users,
  Zap,
} from "lucide-react";
import { Container } from "@/components/layout-specific/container";
import {
  HeroActions,
  HeroBadges,
  HeroContent,
  HeroDescription,
  HeroHeading,
  HeroImage,
  HeroSection,
} from "@/components/layout-specific/hero-section";
import { Section } from "@/components/layout-specific/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const mainSkills = ["React", "TypeScript", "Node.js", "Python", "AWS"];

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection>
        <HeroContent layout="split">
          <div className="space-y-8">
            <div className="space-y-6">
              <HeroHeading>
                Olá, sou{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Ana Clara
                </span>
              </HeroHeading>
              <HeroDescription>
                Desenvolvedora Full Stack apaixonada por criar soluções web
                modernas e eficientes
              </HeroDescription>
            </div>

            <HeroBadges badges={mainSkills} />

            <HeroActions>
              <Button
                size="lg"
                className="hover:scale-105 transition-transform"
                onClick={scrollToContact}
              >
                Entre em Contato
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-transform"
              >
                Ver Projetos
              </Button>
            </HeroActions>
          </div>

          <HeroImage>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-80 h-80 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-background shadow-2xl">
                <span className="text-6xl font-bold text-muted-foreground">
                  AC
                </span>
              </div>
            </div>
          </HeroImage>
        </HeroContent>
      </HeroSection>

      {/* Skills Section */}
      <Section variant="accent">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minha Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiência em desenvolvimento full stack com foco em tecnologias
              modernas e melhores práticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>
                  Criação de interfaces modernas e responsivas com React,
                  Next.js e TypeScript
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>
                  Desenvolvimento de APIs robustas e escaláveis com Node.js e
                  Python
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CloudUpload className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Cloud & DevOps</CardTitle>
                <CardDescription>
                  Deploy e gerenciamento de aplicações na nuvem com AWS e Docker
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">CI/CD</Badge>
                  <Badge variant="outline">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>
                  Design de experiências intuitivas e acessíveis para todos os
                  usuários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">Design System</Badge>
                  <Badge variant="outline">Acessibilidade</Badge>
                  <Badge variant="outline">Usabilidade</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Otimização de aplicações para máxima performance e experiência
                  do usuário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Core Web Vitals</Badge>
                  <Badge variant="outline">Lighthouse</Badge>
                  <Badge variant="outline">Bundle Analysis</Badge>
                  <Badge variant="outline">Caching</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Metodologias Ágeis</CardTitle>
                <CardDescription>
                  Trabalho colaborativo com foco na entrega de valor contínuo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Scrum</Badge>
                  <Badge variant="outline">Kanban</Badge>
                  <Badge variant="outline">Git Flow</Badge>
                  <Badge variant="outline">Code Review</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contato">
        <Container size="md">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-xl text-muted-foreground">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
              torná-lo realidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">ana.clara@email.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respondo dentro de 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                    <p className="text-muted-foreground">
                      linkedin.com/in/ana-clara
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Conecte-se comigo profissionalmente
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                    <p className="text-muted-foreground">
                      github.com/ana-clara
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Veja meus projetos e contribuições
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato em breve
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" placeholder="Seu sobrenome" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-me sobre seu projeto..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">Enviar Mensagem</Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}

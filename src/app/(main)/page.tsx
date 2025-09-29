"use client";

import {
  CloudUploadIcon,
  CodeIcon,
  LightbulbIcon,
  ServerIcon,
  UsersIcon,
  ZapIcon,
} from "@/components/icons";
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

const mainSkills = [
  "Ciência de dados",
  "Infraestrutura de nuvem",
  "TensorFlow",
];

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
                  Thiago Bezerra
                </span>
              </HeroHeading>
              <HeroDescription>
                Senior Software Engineer | Full-Stack Developer | AI Researcher.
                Apaixonado por criar soluções inovadoras em ciência de dados,
                infraestrutura de nuvem e TensorFlow.
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
                  TB
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
              Experiência em desenvolvimento de software, IA e infraestrutura de
              nuvem com foco em soluções inovadoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CodeIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Ciência de dados</CardTitle>
                <CardDescription>
                  Análise avançada de dados, detecção de fraudes e insights
                  acionáveis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Análise de Dados</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <ServerIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Infraestrutura de nuvem</CardTitle>
                <CardDescription>
                  Deploy e gerenciamento de aplicações na nuvem com AWS e Docker
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CloudUploadIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>TensorFlow</CardTitle>
                <CardDescription>
                  Desenvolvimento de modelos de IA e aprendizado de máquina para
                  aplicações reais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">AI Models</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <LightbulbIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Full-Stack Development</CardTitle>
                <CardDescription>
                  Desenvolvimento completo de aplicações web e sistemas
                  embarcados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <ZapIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Sistemas em Tempo Real</CardTitle>
                <CardDescription>
                  Desenvolvimento de sistemas críticos com baixa latência e alta
                  confiabilidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Real-time Systems</Badge>
                  <Badge variant="outline">Embedded Software</Badge>
                  <Badge variant="outline">Robotics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <UsersIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Pesquisa e Inovação</CardTitle>
                <CardDescription>
                  Colaboração em projetos de pesquisa acadêmica e
                  desenvolvimento de ferramentas forenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Research</Badge>
                  <Badge variant="outline">Forensic Tools</Badge>
                  <Badge variant="outline">Academic Projects</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}

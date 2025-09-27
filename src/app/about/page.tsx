import { Calendar, Code, Coffee, Heart, MapPin, Users } from "lucide-react";
import { Container } from "@/components/layout-specific/container";
import {
  HeroContent,
  HeroDescription,
  HeroHeading,
  HeroSection,
} from "@/components/layout-specific/hero-section";
import { Section } from "@/components/layout-specific/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

// Timeline data
const timelineData = [
  {
    id: 1,
    date: "2024",
    title: "Especialização em Next.js",
    description:
      "Aprofundamento em React Server Components e otimizações avançadas",
    technologies: ["Next.js 15", "React 19", "Server Components"],
  },
  {
    id: 2,
    date: "2023",
    title: "Cloud & DevOps",
    description: "Migração para cloud e implementação de pipelines CI/CD",
    technologies: ["AWS", "Docker", "GitHub Actions"],
  },
  {
    id: 3,
    date: "2022",
    title: "Liderança Técnica",
    description: "Transição para papel de tech lead em projetos complexos",
    technologies: ["Team Leadership", "Mentoring", "Architecture"],
  },
  {
    id: 4,
    date: "2019",
    title: "Início da Jornada",
    description: "Primeiros passos no desenvolvimento web com React e Node.js",
    technologies: ["React", "JavaScript", "Node.js"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection variant="centered">
        <HeroContent>
          <HeroHeading size="lg">
            Sobre{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mim
            </span>
          </HeroHeading>
          <HeroDescription>
            Desenvolvedora Full Stack com paixão por tecnologia, inovação e
            criação de soluções que impactam positivamente a vida das pessoas.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      {/* About Content Section */}
      <Section>
        <Container size="md">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Minha História</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Sou uma desenvolvedora apaixonada por tecnologia com mais de
                    5 anos de experiência criando soluções web inovadoras. Minha
                    jornada começou quando descobri o poder da programação para
                    resolver problemas reais e impactar positivamente a vida das
                    pessoas.
                  </p>

                  <p>
                    Ao longo dos anos, desenvolvi expertise em diversas
                    tecnologias, desde frontend com React e TypeScript até
                    backend com Node.js e Python. Tenho experiência em
                    arquitetura de sistemas, deploy em cloud e liderança de
                    equipes técnicas.
                  </p>

                  <p>
                    Acredito que a melhor tecnologia é aquela que serve às
                    pessoas de forma intuitiva e acessível. Por isso, sempre
                    busco equilibrar inovação técnica com usabilidade e design
                    centrado no usuário.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Valores & Filosofia</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Code className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Código Limpo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Escrevo código pensando na manutenibilidade e na pessoa
                        que virá depois de mim.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Colaboração</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Acredito que as melhores soluções surgem do trabalho em
                        equipe e da troca de ideias.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Paixão</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cada projeto é uma oportunidade de aprender algo novo e
                        criar algo significativo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Coffee className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Aprendizado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        A tecnologia evolui rapidamente, e estar sempre
                        aprendendo é fundamental.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Disponível para trabalho remoto
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Experiência
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">5+ anos</p>
                    <p className="text-sm text-muted-foreground">
                      Desenvolvimento Full Stack
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">3+ anos</p>
                    <p className="text-sm text-muted-foreground">
                      Liderança Técnica
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">50+ projetos</p>
                    <p className="text-sm text-muted-foreground">
                      Entregues com sucesso
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Especialidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Idiomas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Português</span>
                    <span className="text-sm text-muted-foreground">
                      Nativo
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inglês</span>
                    <span className="text-sm text-muted-foreground">
                      Fluente
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Espanhol</span>
                    <span className="text-sm text-muted-foreground">
                      Intermediário
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section variant="accent">
        <Container size="md">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Minha Evolução Técnica
              </h2>
              <p className="text-muted-foreground">
                Uma linha do tempo das principais tecnologias e marcos da minha
                carreira
              </p>
            </div>

            <Timeline defaultValue={3}>
              {timelineData.map((item) => (
                <TimelineItem
                  key={item.id}
                  step={item.id}
                  className="group-data-[orientation=vertical]/timeline:sm:ms-32"
                >
                  <TimelineHeader>
                    <TimelineSeparator />
                    <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
                      {item.date}
                    </TimelineDate>
                    <TimelineTitle className="sm:-mt-0.5">
                      {item.title}
                    </TimelineTitle>
                    <TimelineIndicator />
                  </TimelineHeader>
                  <TimelineContent>
                    <div className="space-y-3">
                      <p>{item.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </Container>
      </Section>
    </div>
  );
}

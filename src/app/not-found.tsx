import Link from "next/link";
import {
  AlertTriangleIcon,
  BookOpenIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons";
import { Container } from "@/components/layout-specific/container";
import {
  HeroActions,
  HeroContent,
  HeroDescription,
  HeroHeading,
  HeroSection,
} from "@/components/layout-specific/hero-section";
import { Section } from "@/components/layout-specific/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const quickLinks = [
  {
    href: "/",
    label: "Página Inicial",
    icon: HomeIcon,
    description: "Volte para a página principal e conheça meu trabalho",
  },
  {
    href: "/blog",
    label: "Blog",
    icon: BookOpenIcon,
    description: "Explore artigos sobre desenvolvimento e tecnologia",
  },
  {
    href: "/about",
    label: "Sobre Mim",
    icon: UserIcon,
    description: "Conheça mais sobre minha experiência e trajetória",
  },
];

const helpfulTips = [
  "Verifique se o URL está digitado corretamente",
  "A página pode ter sido movida ou renomeada",
  "Use a navegação do site para encontrar o que procura",
  "Entre em contato se precisar de ajuda específica",
];

export default function NotFound() {
  return (
    <div className="min-h-screen">
      {/* 404 Hero Section */}
      <HeroSection variant="centered">
        <HeroContent>
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangleIcon className="w-12 h-12 text-primary" />
            </div>
            <div className="text-6xl md:text-8xl font-bold text-muted-foreground mb-4">
              404
            </div>
          </div>

          <HeroHeading size="lg">
            Página{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Não Encontrada
            </span>
          </HeroHeading>

          <HeroDescription>
            Ops! Parece que a página que você está procurando não existe ou foi
            movida para outro local.
          </HeroDescription>

          <HeroActions>
            <Button asChild size="lg">
              <Link href="/">
                <HomeIcon className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                <BookOpenIcon className="w-4 h-4 mr-2" />
                Explorar Blog
              </Link>
            </Button>
          </HeroActions>
        </HeroContent>
      </HeroSection>

      {/* Quick Links Section */}
      <Section variant="accent">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enquanto isso, que tal explorar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore outras seções do site ou descubra mais sobre meu trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Card
                  key={link.href}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <Link href={link.href} className="block">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {link.label}
                      </CardTitle>
                      <CardDescription>{link.description}</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              );
            })}
          </div>

          {/* Help Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SearchIcon className="w-5 h-5" />
                  Dicas para Encontrar o que Procura
                </CardTitle>
                <CardDescription>
                  Algumas sugestões que podem ajudar você
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {helpfulTips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5" />
                  Precisa de Ajuda?
                </CardTitle>
                <CardDescription>
                  Entre em contato caso não encontre o que procura
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Se você chegou até aqui através de um link quebrado ou está
                  procurando algo específico, ficarei feliz em ajudar!
                </p>
                <div className="space-y-2">
                  <Button asChild className="w-full">
                    <Link href="/#contato">
                      <MailIcon className="w-4 h-4 mr-2" />
                      Entrar em Contato
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Navigation Breadcrumb */}
      <Section>
        <Container>
          <div className="text-center">
            <nav className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Thiago Bezerra
              </Link>
              <span>/</span>
              <span>404</span>
            </nav>
          </div>
        </Container>
      </Section>
    </div>
  );
}

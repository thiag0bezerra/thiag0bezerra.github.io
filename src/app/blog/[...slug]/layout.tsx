import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { Container } from "@/components/layout-specific/container";
import { Section } from "@/components/layout-specific/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}

export default async function BlogPostLayout({
  children,
}: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Post content */}
      <Section>
        <Container size="md">
          <article
            className={cn(
              "prose prose-slate max-w-none dark:prose-invert",
              // Typography styles
              "prose-headings:font-semibold prose-headings:tracking-tight",
              "prose-h1:text-4xl prose-h1:md:text-5xl prose-h2:text-3xl prose-h3:text-2xl",
              "prose-h1:mb-6 prose-h2:mb-4 prose-h3:mb-3",
              // Links
              "prose-a:text-primary prose-a:no-underline prose-a:font-medium",
              "hover:prose-a:underline hover:prose-a:text-primary/80",
              // Code blocks
              "prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5",
              "prose-code:rounded prose-code:font-medium prose-code:before:content-none",
              "prose-code:after:content-none",
              "prose-pre:bg-muted prose-pre:border",
              // Tables
              "prose-table:border-collapse prose-table:border prose-table:rounded-lg",
              "prose-th:border prose-th:bg-muted/50 prose-th:px-4 prose-th:py-2",
              "prose-td:border prose-td:px-4 prose-td:py-2",
              // Images
              "prose-img:rounded-lg prose-img:border prose-img:shadow-sm",
              // Lists
              "prose-ul:list-disc prose-ol:list-decimal",
              // Paragraphs
              "prose-p:leading-7 prose-p:mb-6",
              // Blockquotes
              "prose-blockquote:border-l-4 prose-blockquote:border-primary/30",
              "prose-blockquote:pl-6 prose-blockquote:italic",
              "prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:rounded-r-lg",
            )}
          >
            {children}
          </article>
        </Container>
      </Section>

      {/* Footer navigation */}
      <Section variant="muted" size="sm">
        <Container size="md">
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeftIcon className="mr-2" />
                Voltar ao Blog
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/about">Sobre o autor</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

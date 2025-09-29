import Link from "next/link";
import { ArrowRightIcon, FileTextIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllBlogPosts, getAllTags } from "@/lib/blog";

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();
  const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  const featuredPost = sortedPosts.find((post) => post.featured);
  const otherPosts = sortedPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Blog &{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Artigos
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Compartilhando conhecimento sobre desenvolvimento web,
                tecnologia e experiências no mundo da programação
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {tags.slice(0, 8).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary/20 transition-colors relative group"
                >
                  {tag}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs bg-popover text-popover-foreground rounded-md border shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    Artigos relacionados a {tag.toLowerCase()}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {/* Featured Post */}
            {featuredPost && (
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary/20">
                        📝
                      </span>
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {formatDate(featuredPost.date)}
                          </Badge>
                          <Badge className="text-xs">Destaque</Badge>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {featuredPost.description}
                        </CardDescription>
                        <div className="flex items-center justify-between pt-4">
                          <div className="flex gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {featuredPost.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {featuredPost.readTime}
                            </Badge>
                          </div>
                          <div className="flex items-center text-primary">
                            <span className="text-sm font-medium mr-2">
                              Ler artigo
                            </span>
                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )}

            {/* Other Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary/20">
                        📄
                      </span>
                    </div>
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {formatDate(post.date)}
                        </Badge>
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <ArrowRightIcon className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {post.readTime}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {sortedPosts.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileTextIcon
                    className="w-12 h-12 text-muted-foreground"
                    aria-label="Nenhum post disponível"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Nenhum post ainda
                </h3>
                <p className="text-muted-foreground">
                  Os primeiros artigos estão sendo preparados. Volte em breve!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

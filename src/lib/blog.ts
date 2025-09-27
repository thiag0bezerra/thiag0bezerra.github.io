import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  showMetadata: boolean;
  headless: boolean;
  featured?: boolean;
}

export interface BlogPostWithMetadata extends BlogPost {
  date: Date;
  category: string;
}

/**
 * Lê os metadados de um arquivo MDX
 */
export function readPostMetadata(filePath: string): BlogPost | null {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    if (!data.title || !data.description || !data.publishedAt) {
      console.warn(`Post ${filePath} está faltando metadados obrigatórios`);
      return null;
    }

    const fileName = path.basename(filePath, ".mdx");

    return {
      slug: fileName,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      readTime: data.readTime || "5 min",
      tags: data.tags || [],
      showMetadata: data.showMetadata !== false,
      headless: data.headless === true,
      featured: data.featured === true,
    };
  } catch (error) {
    console.error(`Erro ao ler metadados do post ${filePath}:`, error);
    return null;
  }
}

/**
 * Descobre todos os posts do blog dinamicamente
 */
export function getAllBlogPosts(): BlogPostWithMetadata[] {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");

  if (!fs.existsSync(blogDir)) {
    console.warn("Diretório de blog não encontrado:", blogDir);
    return [];
  }

  const files = fs.readdirSync(blogDir, { recursive: true, encoding: "utf-8" });
  const mdxFiles = files.filter((file: string) => file.endsWith(".mdx"));

  const posts = mdxFiles
    .map((file: string) => {
      const filePath = path.join(blogDir, file);
      const postMetadata = readPostMetadata(filePath);

      if (!postMetadata) {
        return null;
      }

      // Determinar categoria baseada nas tags
      const getCategory = (tags: string[]): string => {
        if (
          tags.some(
            (tag) =>
              tag.toLowerCase().includes("next") ||
              tag.toLowerCase().includes("react"),
          )
        ) {
          return "Web Development";
        }
        if (
          tags.some(
            (tag) =>
              tag.toLowerCase().includes("typescript") ||
              tag.toLowerCase().includes("javascript"),
          )
        ) {
          return "JavaScript";
        }
        if (
          tags.some(
            (tag) =>
              tag.toLowerCase().includes("node") ||
              tag.toLowerCase().includes("backend"),
          )
        ) {
          return "Backend";
        }
        return tags[0] || "Tecnologia";
      };

      return {
        ...postMetadata,
        date: new Date(postMetadata.publishedAt),
        category: getCategory(postMetadata.tags),
      } satisfies BlogPostWithMetadata;
    })
    .filter((post): post is BlogPostWithMetadata => post !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}

/**
 * Obtém todas as categorias únicas dos posts
 */
export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

/**
 * Obtém todas as tags únicas dos posts
 */
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const allTags = posts.flatMap((post) => post.tags);
  const uniqueTags = new Set(allTags);
  return Array.from(uniqueTags);
}

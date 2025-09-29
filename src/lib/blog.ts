import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  // Slug as posix path without extension. Supports nested: "dir/subdir/post"
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPostWithMetadata extends BlogPost {
  date: Date;
  category: string;
}

/**
 * Lê os metadados de um arquivo MDX via processamento com gray-matter
 */
export async function readPostMetadata(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      "blog",
      `${slug}.mdx`,
    );
    if (!fs.existsSync(filePath)) {
      console.warn(`Post file not found: ${filePath}`);
      return null;
    }
    const source = fs.readFileSync(filePath, "utf-8");

    const { data: frontmatter } = matter(source);

    if (
      !frontmatter ||
      typeof frontmatter.title !== "string" ||
      typeof frontmatter.description !== "string" ||
      typeof frontmatter.publishedAt !== "string"
    ) {
      console.warn(`Post ${slug} is missing required metadata`);
      return null;
    }

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedAt: frontmatter.publishedAt,
      readTime: frontmatter.readTime || "5 min",
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      featured: Boolean(frontmatter.featured),
    };
  } catch (error) {
    console.error(`Error reading metadata for post ${slug}:`, error);
    return null;
  }
}

/**
 * Descobre todos os posts do blog dinamicamente
 */
export async function getAllBlogPosts(): Promise<BlogPostWithMetadata[]> {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");

  if (!fs.existsSync(blogDir)) {
    console.warn("Blog directory not found:", blogDir);
    return [];
  }

  const files = fs.readdirSync(blogDir, { recursive: true, encoding: "utf-8" });
  const mdxFiles = files.filter((file: string) => file.endsWith(".mdx"));
  const slugs = mdxFiles.map((file: string) =>
    file.replace(/\\/g, "/").replace(/\.mdx$/, ""),
  );

  const posts = (
    await Promise.all(
      slugs.map(async (slug) => {
        const postMetadata = await readPostMetadata(slug);

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
      }),
    )
  )
    .filter((post): post is BlogPostWithMetadata => post !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}

/**
 * Lista todos os slugs como arrays de segmentos (para generateStaticParams).
 * Ex.: "dir/sub/post" => ["dir", "sub", "post"].
 */
export function getAllPostSlugSegments(): string[][] {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");

  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir, { recursive: true, encoding: "utf-8" });
  const mdxFiles = files.filter((file: string) => file.endsWith(".mdx"));
  return mdxFiles.map((file) =>
    file
      .replace(/\\/g, "/")
      .replace(/\.mdx$/, "")
      .split("/"),
  );
}

/**
 * Obtém todas as tags únicas dos posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const allTags = posts.flatMap((post) => post.tags);
  const uniqueTags = new Set(allTags);
  return Array.from(uniqueTags);
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugSegments, readPostMetadata } from "@/lib/blog";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug || slug.length === 0) notFound();

  try {
    // Dynamic import of the MDX file as a React component with explicit typing
    const { default: Post } = (await import(
      `@/content/blog/${slug.join("/")}.mdx`
    )) as { default: React.ComponentType };
    return <Post />;
  } catch (error) {
    console.error(`Failed to load MDX for slug ${slug.join("/")}:`, error);
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const postSlug = slug.join("/");
    const frontmatter = await readPostMetadata(postSlug);
    if (!frontmatter) {
      throw new Error(`No frontmatter found for post ${postSlug}`);
    }
    const postTitle =
      frontmatter.title || slug[slug.length - 1].replace(/-/g, " ");
    const description =
      frontmatter.description ||
      `Leia sobre ${postTitle} no blog de Thiago Bezerra - Senior Software Engineer`;

    return {
      title: `${postTitle} | Blog - Thiago Bezerra`,
      description,
      openGraph: {
        title: postTitle,
        description,
        type: "article",
        authors: ["Thiago Bezerra"],
      },
      twitter: {
        card: "summary_large_image",
        title: postTitle,
        description,
      },
    };
  } catch (error) {
    console.error(
      `Error generating metadata for slug ${slug.join("/")}:`,
      error,
    );
    return {
      title: "Blog - Thiago Bezerra",
      description: "Blog de Thiago Bezerra - Senior Software Engineer",
    };
  }
}

export function generateStaticParams() {
  return getAllPostSlugSegments().map((slug) => ({ slug }));
}

export const dynamicParams = false;

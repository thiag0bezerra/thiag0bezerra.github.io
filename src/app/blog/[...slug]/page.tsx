import fs from "node:fs";
import path from "node:path";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(
    `@/content/blog/${slug.join("/")}.mdx`
  );

  return <Post />;
}

export function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(blogDir, { recursive: true, encoding: "utf-8" });
  const mdxFiles = files.filter((file: string) => file.endsWith(".mdx"));
  const params = mdxFiles.map((file: string) => {
    const slug = file.replace(/\.mdx$/, "").split(path.sep);
    return { slug };
  });
  return params;
}

export const dynamicParams = false;

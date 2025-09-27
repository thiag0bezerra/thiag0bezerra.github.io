import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Enable GitHub Flavored Markdown (tables, strikethrough, task lists, autolinks)
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  /**
   * Enable static exports for GitHub Pages.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   * For user/organization pages (username.github.io), leave this undefined.
   * For project pages (username.github.io/repository-name), use the repository name.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  // basePath: "/thiag0bezerra.github.io", // Uncomment for project pages

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  /**
   * Change the build output directory to `./out/`.
   * This is the default for static exports but making it explicit.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/distDir
   */
  distDir: "out",
};

const withMDX = createMDX({
  // Enable GitHub Flavored Markdown (tables, strikethrough, task lists, autolinks)
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

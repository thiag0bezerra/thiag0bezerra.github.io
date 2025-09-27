This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured with **MDX** support.

## 🚀 Features

- ⚡ Next.js 15 with Turbopack
- 📝 MDX support for markdown with JSX components
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 📱 Responsive design

## 📝 MDX Configuration

This project is fully configured to use MDX (Markdown + JSX). You can create `.mdx` files and use them as:

1. **Direct pages** - Place `.mdx` files in the `app` directory
2. **Imported content** - Import `.mdx` files into React components

### Example pages:
- `/mdx-exemplo` - Direct MDX page example
- `/about` - React page importing MDX content

## 🛠️ Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── mdx-exemplo/
│   │   └── page.mdx          # Direct MDX page
│   ├── about/
│   │   └── page.tsx          # React page importing MDX
│   └── page.tsx              # Home page
├── content/
│   └── about.mdx             # MDX content file
└── mdx-components.tsx        # Global MDX components
```

## ✨ MDX Features

- **Custom styled components** for headings, paragraphs, lists, etc.
- **Image optimization** with Next.js Image component
- **Syntax highlighting** for code blocks
- **Tailwind CSS** integration for consistent styling

## 🎨 Customizing MDX Components

Edit `mdx-components.tsx` to customize how MDX elements are rendered globally. You can:

- Style HTML elements (h1, h2, p, ul, etc.)
- Add custom React components
- Configure image handling
- Set up syntax highlighting

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [MDX Documentation](https://mdxjs.com/) - learn about MDX syntax and features.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

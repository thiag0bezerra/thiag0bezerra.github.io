import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Table as ShadcnTable,
  TableBody as ShadcnTableBody,
  TableCell as ShadcnTableCell,
  TableHead as ShadcnTableHead,
  TableHeader as ShadcnTableHeader,
  TableRow as ShadcnTableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

/**
 * MDX components focused on GitHub Flavored Markdown (GFM)
 *
 * Only GFM/Core Markdown elements are mapped here, with a 1:1 rendering
 * using shadcn/ui where applicable:
 * - hr → Separator
 * - blockquote → Alert + AlertDescription
 * - tables → shadcn Table primitives
 * - task list checkboxes → shadcn Checkbox
 *
 * All non-GFM extras (Card, Badge, Button, Label, figure, kbd, mark, small, sup, sub, etc.)
 * were intentionally removed to keep the surface area aligned with GFM.
 */

const custom_components: MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-4 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="scroll-m-20 text-lg font-semibold tracking-tight mb-2">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="scroll-m-20 text-base font-semibold tracking-tight mb-2">
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { className, href, target, rel, ...rest } = props;
    const isExternal = href?.startsWith("http");
    return (
      <a
        {...rest}
        href={href}
        target={isExternal ? "_blank" : target}
        rel={isExternal ? "noreferrer" : rel}
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
          className,
        )}
      />
    );
  },
  ul: ({ children }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  del: ({ children }) => <del className="line-through">{children}</del>,
  img: (props) => {
    // Always render Next/Image to comply with Next.js lint rules
    const { width, height, alt, className, ...rest } =
      props as unknown as ImageProps & HTMLAttributes<HTMLImageElement>;
    const w = typeof width === "number" ? width : Number(width) || 1200;
    const h = typeof height === "number" ? height : Number(height) || 630;
    const altText = typeof alt === "string" ? alt : "";
    return (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className={cn("rounded-md border", className as string)}
        width={w}
        height={h}
        alt={altText}
        {...(rest as Omit<ImageProps, "alt" | "width" | "height">)}
      />
    );
  },
  blockquote: ({ children }) => (
    <Alert className="my-6">
      <AlertDescription className="mt-0">
        <div className="border-l-2 pl-6 italic">{children}</div>
      </AlertDescription>
    </Alert>
  ),
  code: ({ children }) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4">
      <code className="relative rounded bg-muted font-mono text-sm">
        {children}
      </code>
    </pre>
  ),
  hr: () => <Separator className="my-8" />,
  // GFM tables → shadcn table primitives
  table: ({ children }) => (
    <div className="my-6 w-full overflow-y-auto">
      <ShadcnTable className="w-full">{children}</ShadcnTable>
    </div>
  ),
  thead: ({ children }) => <ShadcnTableHeader>{children}</ShadcnTableHeader>,
  tbody: ({ children }) => <ShadcnTableBody>{children}</ShadcnTableBody>,
  tr: ({ children }) => <ShadcnTableRow>{children}</ShadcnTableRow>,
  th: ({ children }) => <ShadcnTableHead>{children}</ShadcnTableHead>,
  td: ({ children }) => <ShadcnTableCell>{children}</ShadcnTableCell>,
  // GFM task list checkboxes → shadcn Checkbox
  input: (props: InputHTMLAttributes<HTMLInputElement>) => {
    if (props.type === "checkbox") {
      return (
        <Checkbox
          checked={Boolean(props.checked)}
          className="mr-2 align-middle"
          disabled
          aria-readonly="true"
        />
      );
    }
    // Fallback for non-checkbox inputs (rare in Markdown)
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    return <input {...props} />;
  },
};

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...custom_components,
    ...components,
  };
}

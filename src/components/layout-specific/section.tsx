import type * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "accent" | "muted";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const sectionVariants = {
  variant: {
    default: "bg-background",
    accent: "bg-muted/30",
    muted: "bg-muted/10",
  },
  size: {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-24",
    xl: "py-24 md:py-32",
  },
};

export function Section({
  className,
  variant = "default",
  size = "lg",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants.variant[variant],
        sectionVariants.size[size],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

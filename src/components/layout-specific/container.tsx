import type * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: React.ReactNode;
}

const containerVariants = {
  size: {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-screen-2xl",
  },
};

export function Container({
  className,
  size = "lg",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8",
        containerVariants.size[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

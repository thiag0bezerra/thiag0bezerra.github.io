import type * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "centered";
  size?: "sm" | "md" | "lg";
}

const heroVariants = {
  size: {
    sm: "py-16 md:py-20",
    md: "py-20 md:py-24",
    lg: "py-24 md:py-32",
  },
};

export function HeroSection({
  className,
  children,
  variant = "default",
  size = "lg",
  ...props
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background",
        heroVariants.size[size],
        className,
      )}
      {...props}
    >
      <Container size="lg">
        <div
          className={cn(
            "relative z-10",
            variant === "centered" && "text-center",
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}

interface HeroContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  layout?: "default" | "split";
}

export function HeroContent({
  className,
  children,
  layout = "default",
  ...props
}: HeroContentProps) {
  if (layout === "split") {
    return (
      <div
        className={cn("grid lg:grid-cols-2 gap-12 items-center", className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={cn("space-y-8 max-w-4xl mx-auto", className)} {...props}>
      {children}
    </div>
  );
}

interface HeroHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const headingSizes = {
  sm: "text-3xl md:text-4xl",
  md: "text-4xl md:text-5xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-6xl md:text-7xl",
};

export function HeroHeading({
  className,
  children,
  size = "lg",
  ...props
}: HeroHeadingProps) {
  return (
    <h1
      className={cn(
        "font-bold tracking-tight leading-tight",
        headingSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

interface HeroDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const descriptionSizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-xl md:text-2xl",
};

export function HeroDescription({
  className,
  children,
  size = "md",
  ...props
}: HeroDescriptionProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground leading-relaxed max-w-3xl",
        descriptionSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

interface HeroBadgesProps extends React.HTMLAttributes<HTMLDivElement> {
  badges: string[];
  variant?: "default" | "secondary" | "outline";
}

export function HeroBadges({
  className,
  badges,
  variant = "secondary",
  ...props
}: HeroBadgesProps) {
  if (!badges.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {badges.map((badge) => (
        <Badge key={badge} variant={variant}>
          {badge}
        </Badge>
      ))}
    </div>
  );
}

interface HeroActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function HeroActions({
  className,
  children,
  ...props
}: HeroActionsProps) {
  return (
    <div
      className={cn("flex flex-col sm:flex-row gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export function HeroImage({
  className,
  children,
  align = "center",
  ...props
}: HeroImageProps) {
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center lg:justify-end",
    right: "justify-end",
  };

  return (
    <div className={cn("flex", alignmentClasses[align], className)} {...props}>
      {children}
    </div>
  );
}

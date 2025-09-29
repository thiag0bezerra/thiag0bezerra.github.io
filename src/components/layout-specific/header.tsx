"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpenIcon,
  FileTextIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Container } from "./container";

const navigationItems = [
  { href: "/", label: "Início", icon: HomeIcon },
  { href: "/blog", label: "Blog", icon: BookOpenIcon },
  { href: "/resume", label: "Currículo", icon: FileTextIcon },
];

export function Header() {
  const pathname = usePathname();

  const scrollToContact = () => {
    const contactElement = document.getElementById("contato");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage, navigate to homepage with hash
      window.location.href = "/#contato";
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container size="full">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                TB
              </span>
            </div>
            <span className="font-semibold text-xl">Thiago Bezerra</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/80",
                        )}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Button, Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeSwitch />

            <Button
              size="sm"
              onClick={scrollToContact}
              className="hidden sm:inline-flex"
            >
              <MailIcon className="w-4 h-4 mr-2" />
              Contato
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="space-y-2">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground/80",
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <Button onClick={scrollToContact} className="w-full">
                      <MailIcon className="w-4 h-4 mr-2" />
                      Contato
                    </Button>

                    <div className="flex items-center justify-between px-1">
                      <span className="font-medium">Alternar tema</span>
                      <ThemeSwitch />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

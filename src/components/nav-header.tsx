"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Section = "home" | "skills" | "experience" | "contact";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vishalbv",
    icon: <Github className="!h-5 !w-5" />,
    tooltip: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-shanubhog/",
    icon: <Linkedin className="!h-5 !w-5" />,
    tooltip: "LinkedIn",
  },
  {
    name: "Telegram",
    href: "https://t.me/gogreen000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="!h-5 !w-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    tooltip: "Telegram",
  },
  {
    name: "Email",
    href: "mailto:vishalbv23@gmail.com",
    icon: <Mail className="!h-5 !w-5" />,
    tooltip: "Email: vishalbv23@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+917760873718",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="!h-5 !w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    tooltip: "Phone: +91 776-087-3718",
  },
];

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Get the current scroll position
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Get all sections
        const sections = document.querySelectorAll("section[id]");
        let currentSection: Element | null = null;

        // Find the section that is currently in view
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = section;
          }
        });

        // Update active section if found
        if (currentSection && currentSection.id) {
          setActiveSection(currentSection.id as Section);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1, // Trigger with just 10% visibility
      rootMargin: "0px",
    });

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Initial check for active section
    handleIntersect([{ isIntersecting: true } as IntersectionObserverEntry]);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  // Add scroll event listener for more precise tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll("section[id]");

      let currentSection: Element | null = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section;
        }
      });

      if (currentSection && currentSection.id) {
        setActiveSection(currentSection.id as Section);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-white/10 py-4"
          : "py-6"
      )}
    >
      <div className="container flex items-center justify-between text-white">
        <Link href="/" className="text-2xl font-bold w-[180px]">
          Vishal<span className="text-[var(--primary)]">.</span>BV
        </Link>
        <nav className="flex-1 flex items-center justify-center gap-2">
          {[
            { id: "home", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-md font-medium transition-all duration-300 relative py-1 px-3",
                "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300",
                activeSection === item.id
                  ? "text-white after:bg-[var(--primary)] after:scale-x-100"
                  : "text-zinc-400 hover:text-white after:bg-white/20 hover:after:scale-x-100"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3 w-[260px] justify-end">
          <TooltipProvider delayDuration={100}>
            {socialLinks.map((link) => (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-[var(--primary)] w-8 h-8 p-5"
                  >
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.icon}
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}

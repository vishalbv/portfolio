/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";

import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { socialLinks } from "../lib/data";

type Section = "home" | "skills" | "experience" | "projects" | "contact";

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      entries.forEach(() => {
        // Get the current scroll position
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Get all sections
        const sections = document.querySelectorAll("section[id]");
        let currentSection: any = null;

        // Find the section that is currently in view
        sections.forEach((section) => {
          const sectionElement = section as HTMLElement;
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = sectionElement;
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

      let currentSection: any = null;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sections.forEach((section: any) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = sectionElement;
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

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
        <Link href="/" className="text-2xl font-bold">
          Vishal<span className="text-[var(--primary)]">.</span>BV
        </Link>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className={cn("lg:hidden p-2 relative z-[60]")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-2 [@media(max-width:1150px)_and_(min-width:1000px)]:scale-[0.88] transition-[transform] duration-300">
          {[
            { id: "home", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
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

        {/* Desktop Social Links */}
        <SocialLinks />
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-[72px] right-0 w-[75%] h-[calc(100vh-72px)] bg-[#2e203d] z-500 lg:hidden transition-all duration-300 overflow-y-auto transform",
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col min-h-full py-6 px-6">
          {/* Mobile Social Links */}
          <div className="flex flex-wrap justify-end gap-4 pb-6 border-b border-white/10 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="p-2 hover:text-[var(--primary)]"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <nav className="flex flex-col gap-4 mb-auto">
            {[
              { id: "home", label: "Home" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "text-lg font-medium py-2 text-right",
                  activeSection === item.id
                    ? "text-[var(--primary)]"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-1.5 w-[220px] justify-end hidden lg:flex">
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
                  target={link.href.startsWith("http") ? "_blank" : undefined}
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
            <TooltipContent side="bottom">
              <p>{link.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

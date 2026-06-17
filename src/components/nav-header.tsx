"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { socialLinks } from "../lib/data";

type Section = "home" | "skills" | "experience" | "projects" | "education" | "contact";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll("section[id]");
      let current: string | null = null;
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.clientHeight) {
          current = el.id;
        }
      });
      if (current) setActiveSection(current as Section);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (isMenuOpen && menuRef.current && buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border-color)]"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight select-none">
          <span style={{ color: "var(--text-primary)" }}>Vishal</span>
          <span style={{ color: "var(--accent)" }}>.</span>
          <span style={{ color: "var(--text-primary)" }}>BV</span>
        </Link>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="p-2 rounded-lg"
            style={{ color: "var(--text-primary)" }}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isMenuOpen ? 45 : 0 }}>
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
              style={{ color: activeSection === item.id ? "var(--accent)" : "var(--text-secondary)" }}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "rgba(var(--accent-rgb), 0.08)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-2">
          <SocialLinks />
          <div className="w-px h-5 mx-1" style={{ background: "var(--border-color)" }} />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[60px] right-0 w-72 h-[calc(100vh-60px)] z-50 overflow-y-auto"
            style={{ background: "var(--bg-surface)", borderLeft: "1px solid var(--border-color)" }}
          >
            <div className="flex flex-col p-6 gap-2">
              <div className="flex flex-wrap gap-3 pb-5 mb-4" style={{ borderBottom: "1px solid var(--border-color)" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2 rounded-lg transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
                  className="text-left py-3 px-4 rounded-xl text-base font-medium transition-colors"
                  style={{
                    color: activeSection === item.id ? "var(--accent)" : "var(--text-secondary)",
                    background: activeSection === item.id ? "rgba(var(--accent-rgb), 0.08)" : "transparent",
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function ThemeToggle({ theme, setTheme }: { theme: string | undefined; setTheme: (t: string) => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <div className="w-12 h-6 rounded-full" style={{ background: "var(--border-color)" }} />;
  }

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-0.5"
      style={{
        background: isDark ? "rgba(var(--accent-rgb), 0.15)" : "rgba(0,0,0,0.1)",
        border: "1px solid var(--border-color)",
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
        style={{ background: isDark ? "var(--accent)" : "#f59e0b" }}
      >
        {isDark ? "🌙" : "☀️"}
      </motion.div>
    </button>
  );
}

export const SocialLinks = () => (
  <div className="flex items-center gap-0.5">
    <TooltipProvider delayDuration={100}>
      {socialLinks.map((link) => (
        <Tooltip key={link.name}>
          <TooltipTrigger asChild>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
            >
              {link.icon}
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom"><p>{link.tooltip}</p></TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  </div>
);

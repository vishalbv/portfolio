"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import { TechSkills } from "../sections/TechSkills";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";

// type Section = "home" | "skills" | "experience" | "contact";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Skills Section */}
        <Skills />
        {/* Language Skills Section */}
        <TechSkills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* New Contact Section */}
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-8 right-8 p-3 rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all duration-300 z-50",
          showScrollButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        )}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}

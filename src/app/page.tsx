"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import { TechSkills } from "../sections/TechSkills";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import Education from "../sections/Education";

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

        {/* Education Section */}
        <Education />

        {/* New Contact Section */}
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-8 right-8 p-1.5 rounded-full bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 transition-all duration-300 z-[1] border border-2 border-[#00f2fe88] hover:bg-[#00f2fe22]",
          showScrollButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        )}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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

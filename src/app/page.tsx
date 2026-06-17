"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import { TechSkills } from "../sections/TechSkills";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import Education from "../sections/Education";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor glow follows mouse
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Cursor spotlight glow */}
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

      <main>
        <Hero />
        <Skills />
        <TechSkills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center z-50 transition-all"
            style={{
              background: "rgba(var(--accent-rgb), 0.12)",
              border: "1px solid rgba(var(--accent-rgb), 0.3)",
              boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.2)",
              color: "var(--accent)",
            }}
            aria-label="Scroll to top"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(var(--accent-rgb), 0.22)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(var(--accent-rgb), 0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(var(--accent-rgb), 0.12)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(var(--accent-rgb), 0.2)";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

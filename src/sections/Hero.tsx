"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { techStack } from "@/lib/data";
import Image from "next/image";

const resumePath = "/assets/pdf/Vishal_BV_React_6yrs.pdf";
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function FadeUp({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const orb1X = useTransform(springX, [0, 1], ["5%", "75%"]);
  const orb1Y = useTransform(springY, [0, 1], ["0%", "70%"]);
  const orb2X = useTransform(springX, [0, 1], ["70%", "10%"]);
  const orb2Y = useTransform(springY, [0, 1], ["60%", "5%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = resumePath;
    a.download = "Vishal_BV_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Aurora orbs — mouse-tracked */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            left: orb1X,
            top: orb1Y,
            background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: "var(--glow-opacity)",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            left: orb2X,
            top: orb2Y,
            background: "radial-gradient(circle, rgba(var(--accent-2-rgb), 0.2) 0%, transparent 70%)",
            filter: "blur(90px)",
            opacity: "var(--glow-opacity)",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            right: "5%",
            top: "20%",
            background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── Left ── */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Badge */}
            <FadeUp delay={0}>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: "rgba(var(--accent-rgb), 0.08)",
                  border: "1px solid rgba(var(--accent-rgb), 0.2)",
                  color: "var(--accent)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
                />
                Senior Frontend Developer
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.1} className="space-y-1">
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.1]"
                style={{ color: "var(--text-primary)" }}>
                Building
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.1] gradient-text">
                Digital Products
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.1]"
                style={{ color: "var(--text-primary)" }}>
                With Passion
              </h1>
            </FadeUp>

            {/* Description */}
            <FadeUp delay={0.2}>
              <p
                className="text-base lg:text-lg max-w-[560px] mx-auto lg:mx-0 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Results-driven Senior Frontend Engineer with 6+ years delivering
                high-performance, scalable web applications. Specialized in React,
                Next.js, and modern frontend ecosystems.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <button onClick={handleDownload} className="btn-primary text-sm font-semibold">
                  Download CV
                </button>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-outline text-sm"
                >
                  View Projects
                </button>
              </div>
            </FadeUp>

            {/* Tech stack */}
            <FadeUp delay={0.4}>
              <div className="pt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="group relative"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                        style={{ background: "var(--bg-surface-2)", border: "1px solid var(--border-color)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(var(--accent-rgb), 0.4)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(var(--accent-rgb), 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                      >
                        {tech.icon}
                      </div>
                      <div
                        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
                      >
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Right — Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative w-full max-w-[300px] lg:max-w-[420px] flex-shrink-0"
          >
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 animate-blob-morph"
              style={{ background: "linear-gradient(135deg, rgba(var(--accent-rgb), 0.3), rgba(var(--accent-2-rgb), 0.2))", filter: "blur(24px)" }}
            />
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ border: "1px solid var(--border-color)", boxShadow: "var(--card-shadow)" }}
            >
              <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, transparent 60%, var(--bg) 100%)" }} />
              <Image src="/assets/images/me.png" alt="Vishal BV" fill className="object-cover" priority />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease }}
              className="absolute -right-4 lg:-right-8 top-8 px-4 py-3 rounded-2xl backdrop-blur-xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", boxShadow: "var(--card-shadow)" }}
            >
              <div className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>6+</div>
              <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Years Exp.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease }}
              className="absolute -left-4 lg:-left-8 bottom-8 px-4 py-3 rounded-2xl backdrop-blur-xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)", boxShadow: "var(--card-shadow)" }}
            >
              <div className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>30+</div>
              <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Projects</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--text-muted)" }}>
          Scroll
        </span>
        <div
          className="w-5 h-9 rounded-full p-1 flex justify-center"
          style={{ border: "1.5px solid var(--border-color)" }}
        >
          <div className="w-1 h-2 rounded-full animate-scroll-indicator" style={{ background: "var(--accent)" }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../lib/data";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card p-6 space-y-4 cursor-default"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold text-base leading-snug" style={{ color: "var(--text-primary)" }}>
          {skill.name}
        </h3>
        <span
          className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: "rgba(var(--accent-rgb), 0.1)", color: "var(--accent)" }}
        >
          {skill.years} {skill.years === 1 ? "yr" : "yrs"}
        </span>
      </div>

      {/* Progress */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs">
          <span style={{ color: "var(--text-muted)" }}>Proficiency</span>
          <span className="font-semibold" style={{ color: "var(--accent)" }}>{skill.rating}/10</span>
        </div>
        <div className="progress-track">
          <motion.div
            className="progress-fill"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: skill.rating / 10 } : { scaleX: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 + 0.3 }}
          />
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {skill.technologies.map((tech, ti) => (
          <span key={ti} className="tech-pill">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
}

const Skills = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(var(--accent-2-rgb), 0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="section-label mb-3">Domain Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
            Professional Domains
          </h2>
          <p className="text-base max-w-[560px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Deep expertise across the full frontend stack — from architecture and system design
            to pixel-perfect UI and production deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { languageSkills } from "../lib/data";

function TechCard({ skill, index }: { skill: typeof languageSkills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-card p-4 space-y-3 group cursor-default"
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
          style={{ background: "rgba(var(--accent-rgb), 0.08)", border: "1px solid rgba(var(--accent-rgb), 0.12)" }}
        >
          {skill.icon}
        </div>
        <h3 className="font-semibold text-sm leading-tight" style={{ color: "var(--text-primary)" }}>
          {skill.name}
        </h3>
      </div>

      {/* Stats */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px]">
          <span style={{ color: "var(--text-muted)" }}>
            <span className="font-semibold" style={{ color: "var(--accent)" }}>{skill.years}+</span> yrs
          </span>
          <span className="font-semibold" style={{ color: "var(--accent)" }}>{skill.rating}/10</span>
        </div>
        <div className="progress-track">
          <motion.div
            className="progress-fill"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: skill.rating / 10 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 + 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export const TechSkills = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(var(--accent-rgb), 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="section-label mb-3">Technical Skills</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
            Language &amp; Framework Expertise
          </h2>
          <p className="text-base max-w-[560px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Core technical skills and proficiency in various programming languages and frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {languageSkills.map((skill, i) => (
            <TechCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

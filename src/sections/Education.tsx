"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../lib/data";

const Education = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(var(--accent-2-rgb), 0.06) 0%, transparent 60%)",
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
          <span className="section-label mb-3">Academic Background</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
            Education
          </h2>
          <p className="text-base max-w-[560px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            My academic journey and qualifications that built my foundation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((edu, i) => {
            const ref = useRef<HTMLDivElement>(null);
            const inView = useInView(ref, { once: true, margin: "-40px" });
            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card relative overflow-hidden p-6 space-y-4 cursor-default"
              >
                {/* Accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
                />

                <div className="flex items-start justify-between gap-3 pt-1">
                  <h3 className="font-bold text-base leading-snug" style={{ color: "var(--text-primary)" }}>
                    {edu.degree}
                  </h3>
                  <span
                    className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(var(--accent-rgb), 0.1)", color: "var(--accent)" }}
                  >
                    {edu.year}
                  </span>
                </div>

                <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{edu.institution}</p>

                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{edu.score}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;

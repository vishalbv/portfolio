"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../lib/data";
import { ImageGallery } from "../components/ImageGallery";

function ExperienceEntry({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-[56%_40%] gap-[4%]"
    >
      {/* Left — details */}
      <div className="relative pl-8">
        <div className="timeline-line" />
        <div className="timeline-dot" />

        {"roles" in experience && experience.roles ? (
          <div className="space-y-10">
            {experience.roles.map((roleItem, ri) => (
              <div key={ri} className="space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1">
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {roleItem.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium" style={{ color: "var(--accent)" }}>{experience.company}</span>
                    <span style={{ color: "var(--border-color)" }}>•</span>
                    <span style={{ color: "var(--text-muted)" }}>{roleItem.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {roleItem.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {roleItem.technologies.map((tech, ti) => (
                    <span key={ti} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                {(experience as { role?: string }).role}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium" style={{ color: "var(--accent)" }}>{experience.company}</span>
                <span style={{ color: "var(--border-color)" }}>•</span>
                <span style={{ color: "var(--text-muted)" }}>{(experience as { period?: string }).period}</span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {(experience as { responsibilities?: string[] }).responsibilities?.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {(experience as { technologies?: string[] }).technologies?.map((tech, ti) => (
                <span key={ti} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right — gallery */}
      <ImageGallery
        images={experience.images || []}
        company={experience.company}
      />
    </motion.div>
  );
}

export const Experience = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="experience" className="min-h-screen py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label mb-3">Work Experience</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
            Professional Journey
          </h2>
          <p className="text-base max-w-[560px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Over 6 years of experience developing responsive applications and leading development teams.
          </p>
        </motion.div>

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <ExperienceEntry key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

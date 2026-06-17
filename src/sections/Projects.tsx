"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../lib/data";
import { ImageGallery } from "../components/ImageGallery";

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function ProjectEntry({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[56%_40%] gap-[4%]">
        {/* Left — details */}
        <div className="relative pl-8">
          <div className="timeline-line" />
          <div className="timeline-dot" />

          <div className="space-y-4">
            {/* Title + meta */}
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                {project.company}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium" style={{ color: "var(--accent)" }}>{project.location}</span>
                <span style={{ color: "var(--border-color)" }}>•</span>
                <span style={{ color: "var(--text-muted)" }}>{project.period}</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  <ExternalLinkIcon /> {project.displayUrl}
                </a>
              )}
              {(project as { appLinks?: { mobile?: string; admin?: string }; displayAppUrls?: { mobile?: string; admin?: string } }).appLinks?.mobile && (
                <a
                  href={(project as { appLinks?: { mobile?: string } }).appLinks!.mobile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  <ExternalLinkIcon /> {(project as { displayAppUrls?: { mobile?: string } }).displayAppUrls?.mobile}
                </a>
              )}
              {(project as { appLinks?: { admin?: string }; displayAppUrls?: { admin?: string } }).appLinks?.admin && (
                <a
                  href={(project as { appLinks?: { admin?: string } }).appLinks!.admin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  <ExternalLinkIcon /> {(project as { displayAppUrls?: { admin?: string } }).displayAppUrls?.admin}
                </a>
              )}
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2.5">
              {project.responsibilities.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, ti) => (
                <span key={ti} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — gallery */}
        <div className="mt-8 lg:mt-0">
          <ImageGallery images={project.images || []} company={project.company} />
        </div>
      </div>

      {/* Highlights grid */}
      {project.highlights && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {project.highlights.map((h, hi) => (
            <motion.div
              key={hi}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card p-4 space-y-2 cursor-default"
            >
              <div className="w-5 h-5 rounded-md flex items-center justify-center mb-3"
                style={{ background: "rgba(var(--accent-rgb), 0.12)" }}>
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
              </div>
              <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{h.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{h.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export const Projects = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(var(--accent-2-rgb), 0.05) 0%, transparent 70%)",
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
          <span className="section-label mb-3">Featured Projects</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
            Personal Projects
          </h2>
          <p className="text-base max-w-[560px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Showcase of my personal projects and technical innovations.
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, i) => (
            <ProjectEntry key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

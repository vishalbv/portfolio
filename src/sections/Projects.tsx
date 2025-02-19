import { projects } from "../lib/data";

import { ImageGallery } from "../components/ImageGallery";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent" />

      <div className="container relative">
        <div>
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Featured Projects
            </div>
            <h2 className="text-4xl font-bold ">Personal Projects</h2>
            <p className="text-zinc-400 max-w-[600px]">
              Showcase of my personal projects and technical innovations.
            </p>
          </div>
          <div className="space-y-16 md:space-y-28">
            {projects.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[56%_40%] gap-8 lg:gap-[4%]"
              >
                {/* Left side - Experience Details */}
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-yellow-500 before:to-[var(--primary)]">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-yellow-500" />

                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <h3 className="text-xl font-bold ">{project.company}</h3>
                      <div className="flex items-center gap-2 text-yellow-500">
                        <span className="text-sm">{project.location}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-sm">{project.period}</span>
                      </div>
                    </div>

                    {/* Add website and app links if available */}
                    <div className="flex flex-col gap-2">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                        >
                          <span>Visit Website ({project.displayUrl})</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}

                      {project.appLinks?.mobile && (
                        <a
                          href={project.appLinks.mobile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                        >
                          <span>
                            Mobile App ({project.displayAppUrls.mobile})
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}

                      {project.appLinks?.admin && (
                        <a
                          href={project.appLinks.admin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                        >
                          <span>
                            Admin Panel ({project.displayAppUrls.admin})
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <div className="space-y-3">
                      {project.responsibilities.map((item, idx) => (
                        <div key={idx} className="flex gap-2 text-zinc-400">
                          <span className="text-yellow-500 mt-1.5">•</span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side - Image Gallery */}
                <div className="space-y-6 mt-8 lg:mt-0">
                  <ImageGallery
                    images={project.images || []}
                    company={project.company}
                  />
                </div>

                {/* Add this inside the experience mapping, after the technologies section */}
                {project.highlights && (
                  <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:col-span-2">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="bg-[#2A2440] p-4 rounded-lg space-y-2 hover:bg-[#2A2440]/80 transition-colors"
                      >
                        <h4 className="font-medium">{highlight.title}</h4>
                        <p className="text-zinc-400 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

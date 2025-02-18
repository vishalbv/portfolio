import { experiences } from "../lib/data";

import { ImageGallery } from "../components/ImageGallery";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent" />

      <div className="container relative">
        <div>
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Work Experience
            </div>
            <h2 className="text-4xl font-bold ">Professional Journey</h2>
            <p className="text-zinc-400 max-w-[600px]">
              Over 6 years of experience in developing responsive applications
              and leading development teams.
            </p>
          </div>
          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[56%_40%] gap-[4%]"
              >
                {/* Left side - Experience Details */}
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-yellow-500 before:to-[var(--primary)]">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-yellow-500" />

                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <h3 className="text-xl font-bold ">{experience.role}</h3>
                      <div className="flex items-center gap-2 text-yellow-500 whitespace-nowrap">
                        <span className="text-sm">{experience.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {experience.responsibilities.map((item, idx) => (
                        <div key={idx} className="flex gap-2 text-zinc-400">
                          <span className="text-yellow-500 mt-1.5">•</span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.technologies.map((tech, techIndex) => (
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
                <ImageGallery
                  images={experience.images || []}
                  company={experience.company}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

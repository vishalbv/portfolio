import { skills } from "../lib/data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container relative">
        <div>
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Domain Expertise
            </div>
            <h2 className="text-4xl font-bold">Professional Domains</h2>
            <p className="text-zinc-400 max-w-[600px]">
              Deep expertise across the full frontend stack — from architecture
              and system design to pixel-perfect UI and production deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card-hover bg-[#1A1530]/60 p-6 rounded-xl space-y-4 backdrop-blur-sm border border-white/8"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <span className="text-[var(--primary)] text-sm font-medium bg-[var(--primary)]/8 px-2.5 py-0.5 rounded-full">
                    {skill.years} {skill.years === 1 ? "yr" : "yrs"}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Proficiency</span>
                    <span className="text-yellow-400 font-medium">{skill.rating}/10</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-[var(--primary)] rounded-full transition-all duration-700"
                      style={{ width: `${(skill.rating / 10) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-white/5 rounded-full text-xs text-zinc-300 border border-white/8 hover:border-[var(--primary)]/30 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

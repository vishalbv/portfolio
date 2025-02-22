import { skills } from "../lib/data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent" /> */}

      <div className="container relative">
        <div>
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Domain Expertise
            </div>
            <h2 className="text-4xl font-bold ">Professional Domains</h2>
            <p className="text-zinc-400 max-w-[600px]">
              Comprehensive skill set in frontend development with expertise in
              modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#1A1530]/60 p-6 rounded-lg space-y-4 hover:bg-[#1A1530]/80 transition-colors backdrop-blur-sm border border-white/5"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <span className="text-yellow-500 text-sm">
                    {skill.years} {skill.years === 1 ? "year" : "years"}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Proficiency</span>
                    <span className="text-yellow-500">{skill.rating}/10</span>
                  </div>
                  <div className="h-2 relative">
                    <div className="absolute inset-0 w-full h-[2px] top-1/2 -translate-y-1/2 bg-white/10" />
                    <div className="relative h-full rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-500 to-[var(--primary)] rounded-full transition-all duration-500 opacity-70"
                        style={{ width: `${(skill.rating / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300 border border-white/5"
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

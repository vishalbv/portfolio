import { languageSkills } from "../lib/data";

export const TechSkills = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent" />

      <div className="container relative">
        <div>
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Technical Skills
            </div>
            <h2 className="text-4xl font-bold ">
              Language & Framework Expertise
            </h2>
            <p className="text-zinc-400 max-w-[600px]">
              Core technical skills and proficiency in various programming
              languages and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {languageSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#1A1530]/60 p-4 rounded-lg space-y-4 hover:bg-[#1A1530]/80 transition-colors backdrop-blur-sm border border-white/5 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)]/5 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-yellow-500">{skill.years}+ </span>
                      <span className="text-zinc-400">Years</span>
                    </div>

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

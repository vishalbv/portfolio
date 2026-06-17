import { languageSkills } from "../lib/data";

export const TechSkills = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/8 via-transparent to-transparent" />

      <div className="container relative">
        <div>
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Technical Skills
            </div>
            <h2 className="text-4xl font-bold">
              Language &amp; Framework Expertise
            </h2>
            <p className="text-zinc-400 max-w-[600px]">
              Core technical skills and proficiency in various programming
              languages and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {languageSkills.map((skill, index) => (
              <div
                key={index}
                className="card-hover group bg-[#1A1530]/60 p-4 rounded-xl space-y-3 backdrop-blur-sm border border-white/8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)]/10 transition-colors flex-shrink-0">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">{skill.name}</h3>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">
                      <span className="text-yellow-400">{skill.years}+</span> yrs
                    </span>
                    <span className="text-yellow-400 font-medium">{skill.rating}/10</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-[var(--primary)] rounded-full transition-all duration-700"
                      style={{ width: `${(skill.rating / 10) * 100}%` }}
                    />
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

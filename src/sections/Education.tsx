import { education } from "../lib/data";

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8a2be2]/8 via-transparent to-transparent" />
      <div className="container relative">
        <div>
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Academic Background
            </div>
            <h2 className="text-4xl font-bold">Education</h2>
            <p className="text-zinc-400 max-w-[600px]">
              My academic journey and qualifications that built my foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card-hover relative bg-[#1A1530]/60 p-6 rounded-xl backdrop-blur-sm border border-white/8 overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500 to-[var(--primary)] opacity-60" />

                <div className="space-y-3 pt-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-base leading-snug">{edu.degree}</h3>
                    <span className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-yellow-400/90 text-sm">{edu.institution}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    <span className="text-zinc-300 text-sm font-medium">{edu.score}</span>
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

export default Education;

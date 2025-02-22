import { education } from "../lib/data";

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#1A1530]/60 p-6 rounded-lg space-y-4 hover:bg-[#1A1530]/80 transition-colors backdrop-blur-sm border border-white/5"
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <p className="text-yellow-500">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm text-zinc-400">
                    <span>{edu.year}</span>
                    <span className="font-medium text-white/90">
                      {edu.score}
                    </span>
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

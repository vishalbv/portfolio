import { experiences } from "../lib/data";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Experience = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{
    [key: string]: number;
  }>({});
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-16"
              >
                {/* Left side - Experience Details */}
                <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-yellow-500 before:to-[var(--primary)]">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-yellow-500" />

                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      <h3 className="text-xl font-bold ">{experience.role}</h3>
                      <div className="flex items-center gap-2 text-yellow-500">
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
                <div className="space-y-6">
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[#1A1530] group">
                    {experience.images?.length > 0 && (
                      <>
                        <Image
                          src={`/assets/images/${
                            experience.images[
                              currentImageIndexes[experience.company] || 0
                            ]
                          }`}
                          alt={`${experience.company} project`}
                          width={750}
                          height={500}
                          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Overlay with Project Title */}
                        {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-center">
                            <h4 className=" font-medium text-xl">
                              Project Preview
                            </h4>
                            <p className="text-zinc-300 text-base mt-2">
                              {experience.company} - {experience.period}
                            </p>
                          </div>
                        </div> */}
                      </>
                    )}
                  </div>

                  {/* Navigation - Arrows and Dots */}
                  {experience.images?.length > 1 && (
                    <div className="flex items-center justify-center gap-4">
                      {/* Left Arrow */}
                      <button
                        onClick={() => {
                          setCurrentImageIndexes((prev) => ({
                            ...prev,
                            [experience.company]:
                              prev[experience.company] === 0 ||
                              prev[experience.company] === undefined
                                ? experience.images.length - 1
                                : prev[experience.company] - 1,
                          }));
                        }}
                        className="w-8 h-8 rounded-full bg-[#2A2440] flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 " />
                      </button>

                      {/* Dots */}
                      <div className="flex items-center gap-4">
                        {experience.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentImageIndexes((prev) => ({
                                ...prev,
                                [experience.company]: index,
                              }));
                            }}
                            className={`h-2.5 transition-all duration-300 rounded-full hover:bg-white ${
                              index ===
                              (currentImageIndexes[experience.company] || 0)
                                ? "w-8 bg-white"
                                : "w-2.5 bg-white/50"
                            }`}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>

                      {/* Right Arrow */}
                      <button
                        onClick={() => {
                          setCurrentImageIndexes((prev) => ({
                            ...prev,
                            [experience.company]:
                              ((prev[experience.company] || 0) + 1) %
                              experience.images.length,
                          }));
                        }}
                        className="w-8 h-8 rounded-full bg-[#2A2440] flex items-center justify-center hover:bg-[var(--primary)]/20 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 " />
                      </button>
                    </div>
                  )}
                </div>

                {/* Add this inside the experience mapping, after the technologies section */}
                {/* {experience.highlights && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:col-span-2">
                    {experience.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="bg-[#2A2440] p-4 rounded-lg space-y-2 hover:bg-[#2A2440]/80 transition-colors"
                      >
                        <h4 className=" font-medium">{highlight.title}</h4>
                        <p className="text-zinc-400 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

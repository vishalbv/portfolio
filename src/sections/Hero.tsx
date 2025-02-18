import React from "react";
import { Button } from "@/components/ui/button";
import { techStack } from "@/lib/data";
import Image from "next/image";

const resumePath = "/assets/pdf/Vishal_BV_React_6yrs.pdf";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "Vishal_BV_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="animated-gradient" />

      {/* Floating Elements - Keep these for additional depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob animation-delay-2000 absolute w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-3xl -right-40 -top-40" />
        <div className="animate-blob animation-delay-4000 absolute w-[500px] h-[500px] rounded-full bg-[#8a2be2]/5 blur-3xl -left-40 -bottom-40" />
      </div>

      {/* Tech Stack Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-blob">
          <div className="w-20 h-20 rounded-xl bg-white/5 backdrop-blur-lg" />
        </div>
        <div className="absolute bottom-20 right-20 animate-blob animation-delay-2000">
          <div className="w-20 h-20 rounded-xl bg-white/5 backdrop-blur-lg" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-blob animation-delay-4000">
          <div className="w-20 h-20 rounded-xl bg-white/5 backdrop-blur-lg" />
        </div>
      </div>

      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-zinc-400 font-medium">
                  Senior Frontend Developer
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block">Building</span>
                <span className="block mt-1 text-[var(--primary)]">
                  Digital Products
                </span>
                <span className="block mt-1">With Passion</span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-[600px]">
                Over 6 years of experience in crafting responsive and scalable
                web applications. Specialized in modern frontend technologies
                and user-centric development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleDownload}
                className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300"
              >
                Download CV
              </Button>
              <Button
                onClick={() => {
                  const experienceSection =
                    document.getElementById("experience");
                  if (experienceSection) {
                    experienceSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                variant="outline"
                className="text-lg px-8 py-4 h-auto border-white/10 hover:bg-white/5 hover:scale-105 transition-all duration-300 hover:text-white"
              >
                View Projects
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm text-zinc-400 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="group relative">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      {tech.icon}
                    </div>
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[#1A1530] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-[480px] h-[560px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
              <Image
                src="/assets/images/me.png"
                alt="Vishal BV"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -right-10 top-10 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
              <div className="text-4xl font-bold ">6+</div>
              <div className="text-sm text-zinc-400">Years of Experience</div>
            </div>

            {/* Projects Card */}
            <div className="absolute -left-10 bottom-10 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
              <div className="text-4xl font-bold ">50+</div>
              <div className="text-sm text-zinc-400">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-zinc-400 tracking-wider animate-pulse">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1 hover:border-white/40 transition-colors">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

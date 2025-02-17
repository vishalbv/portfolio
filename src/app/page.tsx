"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  siReact,
  siNextdotjs,
  siHtml5,
  siJavascript,
  siNx,
  siNodedotjs,
  siBun,
  siRedux,
  siJest,
  siMongodb,
  siTailwindcss,
  siGraphql,
  siGit,
  siMui,
  siTypescript,
} from "simple-icons";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

// type Section = "home" | "skills" | "experience" | "contact";

const resumePath = "/assets/pdf/Vishal_BV_React_6yrs.pdf";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "Vishal_BV_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{
    [key: string]: number;
  }>({});
  // const [activeSection, setActiveSection] = useState<Section>("home");

  const nextImage = (company: string, maxLength: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [company]: (prev[company] + 1) % maxLength,
    }));
  };

  const prevImage = (company: string, maxLength: number) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [company]: prev[company] === 0 ? maxLength - 1 : prev[company] - 1,
    }));
  };

  // Add this type for form data
  type ContactFormData = {
    name: string;
    email: string;
    message: string;
  };

  // Add this inside your component
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_e8pojai", // Replace with your EmailJS service ID
        "template_us8rnkt", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Vishal BV",
          to_email: "vishalbv23@gmail.com",
        },
        "tIArEks7onBYnbvy1" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main>
        {/* Hero Section */}
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
                    Over 6 years of experience in crafting responsive and
                    scalable web applications. Specialized in modern frontend
                    technologies and user-centric development.
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
                  <div className="text-sm text-zinc-400">
                    Years of Experience
                  </div>
                </div>

                {/* Projects Card */}
                <div className="absolute -left-10 bottom-10 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-4xl font-bold ">50+</div>
                  <div className="text-sm text-zinc-400">
                    Projects Completed
                  </div>
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

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen py-20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent" />

          <div className="container relative">
            <div>
              <div className="space-y-4 mb-12">
                <div className="text-yellow-500 text-sm tracking-wider">
                  — Domain Expertise
                </div>
                <h2 className="text-4xl font-bold ">Professional Domains</h2>
                <p className="text-zinc-400 max-w-[600px]">
                  Comprehensive skill set in frontend development with expertise
                  in modern web technologies.
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
                        <span className="text-yellow-500">
                          {skill.rating}/10
                        </span>
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

        {/* Language Skills Section */}
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
                          <span className="text-yellow-500">
                            {skill.years}+{" "}
                          </span>
                          <span className="text-zinc-400">Years</span>
                        </div>

                        <span className="text-yellow-500">
                          {skill.rating}/10
                        </span>
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
                  Over 6 years of experience in developing responsive
                  applications and leading development teams.
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
                          <h3 className="text-xl font-bold ">
                            {experience.role}
                          </h3>
                          <div className="flex items-center gap-2 text-yellow-500">
                            <span className="text-sm">
                              {experience.company}
                            </span>
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
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay with Project Title */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="text-center">
                                <h4 className=" font-medium text-xl">
                                  Project Preview
                                </h4>
                                <p className="text-zinc-300 text-base mt-2">
                                  {experience.company} - {experience.period}
                                </p>
                              </div>
                            </div>
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
                    {experience.highlights && (
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
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* New Contact Section */}
        <section
          id="contact"
          className="min-h-screen py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent" />

          <div className="container relative">
            <div className="max-w-[980px] mx-auto">
              <div className="space-y-4 mb-12">
                <div className="text-yellow-500 text-sm tracking-wider">
                  — Get in Touch
                </div>
                <h2 className="text-4xl font-bold ">Let's Work Together</h2>
                <p className="text-zinc-400 max-w-[600px]">
                  Have a project in mind? Let's discuss how we can help your
                  business grow.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-zinc-400">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1530]/60 border border-white/5 focus:border-[var(--primary)] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-zinc-400">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1530]/60 border border-white/5 focus:border-[var(--primary)] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-zinc-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1530]/60 border border-white/5 focus:border-[var(--primary)] transition-colors min-h-[150px]"
                    placeholder="Hello, I'd like to discuss..."
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-black font-medium px-8"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitStatus === "success" && (
                    <span className="text-green-500">
                      Message sent successfully!
                    </span>
                  )}
                  {submitStatus === "error" && (
                    <span className="text-red-500">
                      Failed to send message. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-8 right-8 p-3 rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all duration-300 z-50",
          "opacity-0 translate-y-16",
          "scroll-y-0:opacity-100 scroll-y-0:translate-y-0"
        )}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}

const skills = [
  {
    name: "Frontend Development",
    years: 6,
    rating: 9,
    technologies: ["React", "Next.js", "TypeScript", "Redux", "TailwindCSS"],
  },
  {
    name: "UI/UX Development",
    years: 5,
    rating: 8,
    technologies: [
      "Figma",
      "Material-UI",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    name: "Backend Development",
    years: 4,
    rating: 7,
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    name: "DevOps & Tools",
    years: 3,
    rating: 7,
    technologies: ["Git", "Docker", "AWS", "CI/CD", "Webpack"],
  },
  {
    name: "Mobile Development",
    years: 2,
    rating: 6,
    technologies: ["React Native", "Expo", "Android", "iOS"],
  },
  {
    name: "Testing",
    years: 4,
    rating: 8,
    technologies: ["Jest", "React Testing Library", "Cypress", "Playwright"],
  },
];

const languageSkills = [
  {
    name: "React.js",
    years: 6,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siReact.path} />
      </svg>
    ),
  },
  {
    name: "Next.js",
    years: 4,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siNextdotjs.path} />
      </svg>
    ),
  },
  {
    name: "Node.js",
    years: 4,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siNodedotjs.path} />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    years: 3,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siTypescript.path} />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    years: 6,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siJavascript.path} />
      </svg>
    ),
  },
  {
    name: "HTML/CSS",
    years: 6,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siHtml5.path} />
      </svg>
    ),
  },
  {
    name: "Bun.js",
    years: 1,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siBun.path} />
      </svg>
    ),
  },
  {
    name: "NX Monorepo",
    years: 2,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siNx.path} />
      </svg>
    ),
  },
  {
    name: "Redux",
    years: 4,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siRedux.path} />
      </svg>
    ),
  },
  {
    name: "Jest",
    years: 3,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siJest.path} />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    years: 3,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siMongodb.path} />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    years: 2,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siTailwindcss.path} />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    years: 2,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siGraphql.path} />
      </svg>
    ),
  },
  {
    name: "Material UI",
    years: 3,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siMui.path} />
      </svg>
    ),
  },
  {
    name: "Git",
    years: 6,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siGit.path} />
      </svg>
    ),
  },
];

const experiences = [
  {
    role: "Independent Developer",
    company: "Trading Application",
    location: "Personal Project",
    period: "2023 - Present",
    images: [
      "freelance/my-trade/a.png",
      "freelance/my-trade/b.png",
      "freelance/my-trade/c.png",
      "freelance/my-trade/d.png",
      "freelance/my-trade/e.png",
    ],
    responsibilities: [
      "Architected and developed a comprehensive trading platform from scratch, implementing complete UX/UI design and full-stack development.",
      "Pioneered the use of Bun.js as a high-performance Node.js alternative, achieving significant performance improvements in API response times.",
      "Integrated multiple broker APIs (Fyers, Shoonya, FlatTrade) with a unified authentication system, simplifying the trading workflow.",
      "Developed a custom charting library with advanced technical analysis tools including Fibonacci retracements, trend lines, and RSI indicators.",
      "Implemented real-time P&L tracking with voice notifications for target hits and stop losses using WebSocket connections.",
      "Utilized AI tools (Claude AI, ChatGPT) to optimize code quality and implement advanced trading algorithms.",
      "Built a responsive, modern UI using Next.js 14, Shadcn, and Tailwind CSS with TypeScript for type safety.",
    ],
    technologies: [
      "Bun.js",
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "WebSocket",
      "Shadcn UI",
      "TailwindCSS",
      "Trading APIs",
      "Custom Charts",
      "AI Integration",
    ],
    highlights: [
      {
        title: "Performance Optimization",
        description:
          "Leveraged Bun.js for superior backend performance, achieving faster execution times compared to traditional Node.js.",
      },
      {
        title: "Unified Trading Interface",
        description:
          "Created a seamless integration of multiple trading platforms with single-click authentication and unified order management.",
      },
      {
        title: "Custom Technical Analysis",
        description:
          "Developed proprietary charting tools with advanced features like Fibonacci patterns, trend analysis, and automated P&L tracking.",
      },
      {
        title: "Real-time Monitoring",
        description:
          "Implemented WebSocket-based real-time updates with voice alerts for critical trading events and P&L thresholds.",
      },
      {
        title: "AI-Enhanced Development",
        description:
          "Utilized AI tools to optimize code quality and implement sophisticated trading algorithms and analysis patterns.",
      },
      {
        title: "Modern Tech Stack",
        description:
          "Embraced cutting-edge technologies like Next.js 14, Shadcn, and Tailwind CSS for a robust and maintainable codebase.",
      },
      {
        title: "Quick Scalping Interface",
        description:
          "Developed an enhanced buy/sell window with hotkeys and single-click trading capabilities for rapid scalping operations.",
      },
      {
        title: "Theme Customization",
        description:
          "Implemented comprehensive dark and light theme support with customizable color schemes for optimal trading experience in any lighting condition.",
      },
    ],
  },
  {
    role: "Senior Software Developer",
    company: "ConcertAI",
    location: "Bangalore",
    period: "2023 - Present",
    images: [
      "concertai/a.png",
      // "concertai/b.png",
      // "concertai/c.png",
      // "concertai/d.png",
    ],
    responsibilities: [
      "Introduced an AI Prompt screen with API integration, featuring additional functionalities such as note-taking and prompt saving.",
      "Leveraged Material UI and Ant Design for controls related to Drag-and-Drop, Widgets, Menus, User Interface, and Forms.",
      "Formulated and executed front-end development strategies, achieving a 15% boost in website performance by utilizing optimization techniques.",
      "Refactored the existing application, integrated the Redux toolkit, adopted a micro-frontend architecture, Mixpanel tracking and updated NPM libraries.",
      "Developed applications using Next.js and React, demonstrating a solid understanding of their features and best practices.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Material UI",
      "Ant Design",
      "Micro-frontend",
    ],
  },
  {
    role: "Software Developer",
    company: "Analyttica Datalab",
    location: "Bangalore",
    period: "2021 - 2023",
    images: [
      "analyttica/a.png",
      "analyttica/b.png",
      // "analyttica/c.jpg",
      // "analyttica/d.jpg",
    ],
    responsibilities: [
      "Actively listened to and analyzed customer needs to design tailored technical solutions.",
      "Transformed the entire application into multiple micro front-end services using NX Projects.",
      "Built the application from the ground up while adhering to best coding practices.",
      "Collaborated with other teams, UX designers, and senior management.",
      "Led a team of four, engaging members by breaking tasks down and conducting pair programming sessions.",
    ],
    technologies: [
      "React",
      "NX Monorepo",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "AWS",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    period: "2018 - 2021",
    images: ["tcs-1.jpg", "tcs-2.jpg", "tcs-3.jpg", "tcs-4.jpg"],
    responsibilities: [
      "Created a user interface for analyzing results processed through Hadoop and Spark analytics.",
      "Employed an object-oriented approach in development.",
      "Developed flowcharts and solution documents to enhance user clarity.",
      "Implemented responsive designs using SASS, mixins, and modern CSS features.",
      "Transitioned AngularJS projects to React while maintaining functionality.",
    ],
    technologies: [
      "AngularJS",
      "React",
      "D3.js",
      "Spring Boot",
      "SASS",
      "Hadoop",
    ],
  },
];

const techStack = [
  {
    name: "React",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siReact.path} />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siNextdotjs.path} />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siTypescript.path} />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siNodedotjs.path} />
      </svg>
    ),
  },
  // Add more as needed
];

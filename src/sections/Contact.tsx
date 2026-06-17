"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import Wave from "react-wavify";
import { SocialLinks } from "../components/nav-header";

type ContactFormData = { name: string; email: string; message: string };

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [waveAmplitude, setWaveAmplitude] = useState(40);

  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setWaveAmplitude(20 + (e.clientY / window.innerHeight) * 35);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await emailjs.send(
        "service_e8pojai",
        "template_us8rnkt",
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: "Vishal BV", to_email: "vishalbv23@gmail.com" },
        "tIArEks7onBYnbvy1"
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 relative overflow-hidden">
      {/* Wave bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Wave
          fill="var(--accent)"
          paused={false}
          opacity="0.04"
          options={{ height: 40, amplitude: waveAmplitude * 1.5, speed: 0.12, points: 8 }}
          style={{ position: "absolute", bottom: 0, height: 220, transition: "transform 0.3s ease-out" }}
          data-testid="wave"
        />
        <Wave
          fill="var(--accent-2)"
          paused={false}
          opacity="0.06"
          options={{ height: 60, amplitude: waveAmplitude * 2, speed: 0.07, points: 8 }}
          style={{ position: "absolute", bottom: 0, height: 220, transition: "transform 0.3s ease-out" }}
          data-testid="wave"
        />
      </div>

      <div className="container relative">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <span className="section-label mb-3">Get in Touch</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
              Let&apos;s Work Together
            </h2>
            <p className="text-base max-w-[560px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Have a project in mind? Let&apos;s discuss how we can help your business grow.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="form-field"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="form-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  Your Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="form-field min-h-[140px] resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <div className="flex items-center gap-4 pt-1">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
                {submitStatus === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium"
                    style={{ color: "#4ade80" }}
                  >
                    Message sent successfully!
                  </motion.span>
                )}
                {submitStatus === "error" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium"
                    style={{ color: "#f87171" }}
                  >
                    Failed to send. Please try again.
                  </motion.span>
                )}
              </div>
            </form>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-14">
            <div className="h-px flex-1" style={{ background: "var(--border-color)" }} />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>or</span>
            <div className="h-px flex-1" style={{ background: "var(--border-color)" }} />
          </div>

          {/* Direct contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-8 max-w-md mx-auto text-center"
          >
            <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>Contact Me Directly</h3>
            <p className="text-sm mb-7" style={{ color: "var(--text-muted)" }}>Available for freelance &amp; full-time roles</p>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+917760873718"
                className="flex items-center justify-center gap-2 transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <span>📞</span> +91 7760873718
              </a>
              <a
                href="mailto:vishalbv23@gmail.com"
                className="flex items-center justify-center gap-2 transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <span>✉️</span> vishalbv23@gmail.com
              </a>
              <p className="flex items-center justify-center gap-2" style={{ color: "var(--text-muted)" }}>
                <span>📍</span> Bengaluru, India
              </p>
            </div>

            <div className="mt-7 pt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

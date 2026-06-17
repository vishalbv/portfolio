import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import Wave from "react-wavify";
import { SocialLinks } from "../components/nav-header";

export const Contact = () => {
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

  // Add state for wave properties
  const [waveAmplitude, setWaveAmplitude] = useState(70);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate wave amplitude based on vertical mouse position
      const newAmplitude = 20 + (clientY / windowHeight) * 30;
      setWaveAmplitude(newAmplitude);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Wave
          fill="var(--primary)"
          paused={false}
          opacity="0.05"
          options={{
            height: 40,
            amplitude: waveAmplitude * 1.5,
            speed: 0.12,
            points: 8,
          }}
          style={{
            position: "absolute",
            bottom: 0,

            transition: "transform 0.3s ease-out",
            height: 230,
          }}
          data-testid="wave"
        />
        <Wave
          fill="#8a2be2"
          paused={false}
          opacity="0.1"
          options={{
            height: 60,
            amplitude: waveAmplitude * 2,
            speed: 0.07,
            points: 8,
          }}
          style={{
            position: "absolute",
            bottom: 0,

            transition: "transform 0.3s ease-out",
            height: 230,
          }}
          data-testid="wave"
        />
      </div>

      <div className="container relative">
        <div className="max-w-[980px] mx-auto">
          <div className="space-y-4 mb-12">
            <div className="text-yellow-500 text-sm tracking-wider">
              — Get in Touch
            </div>
            <h2 className="text-4xl font-bold ">Let&apos;s Work Together</h2>
            <p className="text-zinc-400 max-w-[600px]">
              Have a project in mind? Let&apos;s discuss how we can help your
              business grow.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1530]/80 border border-white/8 transition-all placeholder:text-zinc-600 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1530]/80 border border-white/8 transition-all placeholder:text-zinc-600 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-[#1A1530]/80 border border-white/8 transition-all min-h-[140px] resize-none placeholder:text-zinc-600 text-white"
                placeholder="Hello, I'd like to discuss..."
              />
            </div>
            <div className="flex items-center gap-4 pt-1">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--primary)] hover:bg-[var(--primary)]/85 text-black font-semibold px-8 rounded-full shadow-[0_0_20px_rgba(0,242,254,0.25)] hover:shadow-[0_0_28px_rgba(0,242,254,0.4)] transition-all"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitStatus === "success" && (
                <span className="text-green-400 text-sm">Message sent successfully!</span>
              )}
              {submitStatus === "error" && (
                <span className="text-red-400 text-sm">Failed to send. Please try again.</span>
              )}
            </div>
          </form>

          <div className="mt-16">
            <div className="flex items-center gap-4 justify-center">
              <div className="h-[1px] bg-white/10 flex-1" />
              <span className="text-zinc-500 text-sm">OR</span>
              <div className="h-[1px] bg-white/10 flex-1" />
            </div>

            <div className="mt-8">
              <div className="bg-[#1A1530]/60 border border-white/8 rounded-2xl p-8 backdrop-blur-sm text-center max-w-md mx-auto">
                <h3 className="text-xl font-bold mb-1">Contact Me Directly</h3>
                <p className="text-zinc-500 text-sm mb-6">Available for freelance & full-time roles</p>
                <div className="space-y-3 text-sm">
                  <a href="tel:+917760873718" className="flex items-center justify-center gap-2 text-zinc-300 hover:text-[var(--primary)] transition-colors">
                    <span className="text-[var(--primary)]">📞</span> +91 7760873718
                  </a>
                  <a href="mailto:vishalbv23@gmail.com" className="flex items-center justify-center gap-2 text-zinc-300 hover:text-[var(--primary)] transition-colors">
                    <span className="text-[var(--primary)]">✉️</span> vishalbv23@gmail.com
                  </a>
                  <p className="flex items-center justify-center gap-2 text-zinc-400">
                    <span className="text-[var(--primary)]">📍</span> Bengaluru, India
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-white/8">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

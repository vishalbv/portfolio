import { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-transparent to-transparent" />

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

          <div className="mt-16">
            <div className="flex items-center gap-4 justify-center">
              <div className="h-[1px] bg-white/10 flex-1" />
              <span className="text-zinc-400">OR</span>
              <div className="h-[1px] bg-white/10 flex-1" />
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Contact Me Directly</h3>
              <div className="space-y-2 text-zinc-400">
                <p className="font-medium text-white">Vishal BV</p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href="tel:+917760873718"
                    className="hover:text-[var(--primary)]"
                  >
                    +91 7760873718
                  </a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:vishalbv23@gmail.com"
                    className="hover:text-[var(--primary)]"
                  >
                    vishalbv23@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Location:</span> Bengaluru
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

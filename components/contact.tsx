"use client";

import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, User, Briefcase, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig, contactServices } from "@/lib/site.config";
import { AnimatedSection } from "@/components/animated-section";

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.93A9.9 9.9 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24a8.2 8.2 0 0 1 5.84 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.44 1.02 2.6c.13.18 1.78 2.72 4.32 3.81.6.26 1.08.42 1.44.53.6.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.19.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-container flex flex-col gap-10 py-16">
      <AnimatedSection as="div" className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-purple">
          Get In Touch
        </span>
        <h2>Contact Me</h2>
        <p className="mt-2 max-w-xl text-text-secondary">
          Have a project in mind or just want to say hello? Send me a message and I&apos;ll get
          back to you as soon as possible.
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <AnimatedSection className="flex flex-1 flex-col gap-4" delay={0.05}>
          <div className="glass-card flex items-center gap-4 rounded-xl border p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white/5">
              <Mail size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-accent-purple">EMAIL</span>
              <a href={`mailto:${siteConfig.email}`} className="text-text-primary hover:underline">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-1 items-center justify-center gap-2 rounded-xl border p-4 text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-1 items-center justify-center gap-2 rounded-xl border p-4 text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-1 items-center justify-center gap-2 rounded-xl border p-4 text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
            >
              <WhatsappIcon /> WhatsApp
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex flex-1 justify-center lg:justify-end" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass-card flex w-full max-w-xl flex-col gap-4 rounded-2xl border p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col gap-1.5">
                <label htmlFor="firstName" className="flex items-center gap-2 text-sm text-text-secondary">
                  <User size={14} /> First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Your first name"
                  className="w-full rounded-lg border border-accent-purpleDark bg-transparent px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-purple focus:glow-shadow"
                />
              </div>
              <div className="flex w-full flex-col gap-1.5">
                <label htmlFor="lastName" className="flex items-center gap-2 text-sm text-text-secondary">
                  <User size={14} /> Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Your last name"
                  className="w-full rounded-lg border border-accent-purpleDark bg-transparent px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-purple focus:glow-shadow"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail size={14} /> Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-accent-purpleDark bg-transparent px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-purple focus:glow-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="flex items-center gap-2 text-sm text-text-secondary">
                <Briefcase size={14} /> Service Required
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full cursor-pointer rounded-lg border border-accent-purpleDark bg-transparent px-4 py-3 text-sm text-text-secondary outline-none focus:border-accent-purple focus:glow-shadow"
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {contactServices.map((service) => (
                  <option key={service.value} value={service.value} className="bg-bg-card text-text-primary">
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="flex items-center gap-2 text-sm text-text-secondary">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-accent-purpleDark bg-transparent px-4 py-3 text-sm text-text-primary outline-none focus:border-accent-purple focus:glow-shadow"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border-glass bg-bg-card px-6 py-3 font-medium text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"} <Send size={16} />
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} /> Message sent — I&apos;ll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-rose-400">
                <AlertCircle size={16} /> Something went wrong. Please email me directly at{" "}
                {siteConfig.email}.
              </p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

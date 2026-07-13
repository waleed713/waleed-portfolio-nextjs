"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Store } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.93A9.9 9.9 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24a8.2 8.2 0 0 1 5.84 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.44 1.02 2.6c.13.18 1.78 2.72 4.32 3.81.6.26 1.08.42 1.44.53.6.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.19.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="section-container flex min-h-[85vh] flex-col-reverse items-center justify-center gap-10 py-12 md:flex-row md:gap-6"
    >
      <motion.div
        className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="flex w-fit items-center gap-2 rounded-full border border-border-glass bg-bg-card px-4 py-1.5 text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-purpleDark opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-purpleDark" />
          </span>
          Available for opportunities
        </span>

        <h1 className="text-[clamp(2.5rem,3.5vw+1rem,3.5rem)] font-bold">
          Hi, I&apos;m{" "}
          <span className="block text-gradient">Waleed Ahmad</span>
        </h1>

        <p className="text-xl font-semibold text-text-primary">
          WordPress Developer &amp; UI/UX Designer
        </p>

        <p className="max-w-xl text-[0.9375rem] text-text-secondary">
          I don&apos;t just build <strong className="text-text-primary">websites</strong> — I
          craft digital experiences. <strong className="text-text-primary">WordPress Developer</strong>{" "}
          meets <strong className="text-text-primary">UI/UX Designer</strong>. I turn ideas into
          pixel-perfect, <strong className="text-text-primary">high-performing</strong> websites
          that users love and clients obsess over.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
          <Link
            href="/#contact"
            className="flex items-center gap-2 rounded-full border border-border-glass bg-bg-card px-6 py-2.5 font-medium text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            Contact Me <ArrowRight size={16} />
          </Link>
          <a
            href={siteConfig.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full border border-border-glass bg-bg-card px-6 py-2.5 font-medium text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-glass bg-bg-card text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <Github size={20} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-glass bg-bg-card text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <Linkedin size={20} />
          </a>
          
          href={siteConfig.social.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr Profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-glass bg-bg-card text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <Store size={20} />
          </a>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-glass bg-bg-card text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <WhatsappIcon />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-1 items-center justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <Image
          src="/images/hero.svg"
          alt="Illustration of Waleed Ahmad at work"
          width={500}
          height={500}
          priority
          className="w-full max-w-[420px] md:max-w-[500px]"
        />
      </motion.div>
    </section>
  );
}

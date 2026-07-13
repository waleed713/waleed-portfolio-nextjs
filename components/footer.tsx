import Image from "next/image";
import { Github, Linkedin, Store } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.93A9.9 9.9 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24a8.2 8.2 0 0 1 5.84 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.44 1.02 2.6c.13.18 1.78 2.72 4.32 3.81.6.26 1.08.42 1.44.53.6.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.19.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accent-purpleDark px-4 py-16">
      <div className="section-container flex flex-col items-center gap-4 text-center">
        <Image src="/images/logo.png" alt={`${siteConfig.name} logo`} width={180} height={60} className="h-auto w-[160px]" />
        <p className="text-text-secondary">Building the web, one project at a time.</p>

        <div className="flex gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-glass bg-bg-card text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-glass bg-bg-card text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.social.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr Profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-glass bg-bg-card text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <Store size={18} />
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

        <p className="text-xs text-text-muted">
          &copy; {year}{" "}
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-purple hover:underline"
          >
            Waleed Ahmad
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

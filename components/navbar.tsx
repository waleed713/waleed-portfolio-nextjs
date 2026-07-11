"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { House, User, Briefcase, Code, FolderOpen, Mail, Menu, X, Newspaper } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site.config";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const icons = {
  House,
  User,
  Briefcase,
  Code,
  FolderOpen,
  Mail,
} as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full p-2 sm:p-4">
      <div className="section-container flex items-center justify-between gap-4 rounded-2xl border border-border-glass bg-bg-card/90 px-4 py-3 backdrop-blur-md sm:px-6">
        <Link href="/#home" className="shrink-0" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} logo`}
            width={140}
            height={47}
            priority
            className="h-auto w-[120px] sm:w-[140px]"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = icons[link.icon as keyof typeof icons];
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary",
                      isActive && "bg-bg-cardHover text-text-primary"
                    )}
                  >
                    <Icon size={16} className={isActive ? "text-accent-purple" : ""} />
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/blog"
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                <Newspaper size={16} />
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-glass text-text-primary md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed right-0 top-0 z-40 h-screen w-[80%] max-w-xs border-l border-border-glass bg-bg-card p-6 pt-24 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = icons[link.icon as keyof typeof icons];
                  return (
                    <li key={link.href}>
                      <Link
                        href={`/${link.href}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-text-secondary hover:bg-bg-cardHover hover:text-text-primary"
                      >
                        <Icon size={18} />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/blog"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-text-secondary hover:bg-bg-cardHover hover:text-text-primary"
                  >
                    <Newspaper size={18} />
                    Blog
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

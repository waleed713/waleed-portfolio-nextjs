"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/site.config";
import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";

const linkIcons = { ExternalLink, Linkedin } as const;

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "WordPress", value: "wordpress" },
  { label: "UI/UX", value: "uiux" },
  { label: "E-Commerce", value: "ecommerce" },
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => (p.categories as readonly string[]).includes(active));
  }, [active]);

  return (
    <section id="projects" className="section-container flex flex-col gap-10 py-16 text-center">
      <AnimatedSection as="div" className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-purple">
          What I&apos;ve Built
        </span>
        <h2>Featured Projects</h2>
      </AnimatedSection>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            className={cn(
              "rounded-full border border-border-glass px-4 py-2 text-sm font-medium transition-all",
              active === f.value
                ? "bg-accent-purple text-white glow-shadow"
                : "bg-bg-card text-text-secondary hover:text-text-primary"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const LinkIcon = linkIcons[project.linkIcon as keyof typeof linkIcons];
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="glass-card flex flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:glow-shadow"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-lg text-text-primary">{project.title}</h4>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.linkLabel}
                      className="text-text-muted transition-colors hover:text-accent-purple"
                    >
                      <LinkIcon size={20} />
                    </a>
                  </div>
                  <p className="text-sm text-text-secondary">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

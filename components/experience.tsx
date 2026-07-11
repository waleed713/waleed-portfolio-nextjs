"use client";

import { CalendarDays, MapPin, Globe } from "lucide-react";
import { experience } from "@/lib/site.config";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/animated-section";
import { motion } from "framer-motion";

const locationIcons = { MapPin, Globe } as const;

export function Experience() {
  return (
    <section id="experience" className="section-container flex flex-col gap-10 py-16">
      <AnimatedSection as="div" className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-purple">
          Where I&apos;ve Worked
        </span>
        <h2>Experience</h2>
      </AnimatedSection>

      <motion.div
        className="grid gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {experience.map((exp) => {
          const LocationIcon = locationIcons[exp.locationIcon as keyof typeof locationIcons];
          return (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              className="glass-card flex flex-col gap-4 rounded-2xl border p-8 text-sm transition-all hover:-translate-y-1 hover:glow-shadow"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h4 className="text-xl text-text-primary">{exp.title}</h4>
                  <span className="font-medium text-accent-purple">{exp.company}</span>
                </div>
                <div className="flex flex-col gap-1 text-xs text-text-secondary sm:text-right">
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <CalendarDays size={14} className="text-accent-purple" />
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <LocationIcon size={14} className="text-accent-purple" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point) => (
                  <li key={point} className="relative pl-6 text-text-secondary">
                    <span className="absolute left-0 top-0 text-accent-purple">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

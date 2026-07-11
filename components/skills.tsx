"use client";

import {
  Layout, ShoppingCart, Puzzle, Layers, Box, ShieldCheck, SlidersHorizontal, Mail,
  Pencil, PenTool, Palette, Droplets, Crop, Type,
  MousePointerClick, Workflow, Play, Users, Smartphone, LayoutGrid,
  FileCode, Paintbrush, GitBranch, Github, Code2, Bug,
} from "lucide-react";
import { skillGroups } from "@/lib/site.config";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/animated-section";
import { motion } from "framer-motion";

const iconMap = {
  Layout, ShoppingCart, Puzzle, Layers, Box, ShieldCheck, SlidersHorizontal, Mail,
  Pencil, PenTool, Palette, Droplets, Crop, Type,
  MousePointerClick, Workflow, Play, Users, Smartphone, LayoutGrid,
  FileCode, Paintbrush, GitBranch, Github, Code2, Bug,
} as const;

export function Skills() {
  return (
    <section id="skills" className="section-container flex flex-col gap-10 py-16">
      <AnimatedSection as="div" className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-purple">
          What I Work With
        </span>
        <h2>Skills &amp; Technologies</h2>
      </AnimatedSection>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.id}
            variants={staggerItem}
            className="glass-card flex flex-col gap-4 rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:glow-shadow"
          >
            <h4 className="font-heading text-xl text-text-primary">{group.category}</h4>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => {
                const Icon = iconMap[tag.icon as keyof typeof iconMap];
                return (
                  <span
                    key={tag.label}
                    className="flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-sm text-text-secondary"
                  >
                    <Icon size={14} className="text-accent-purple" />
                    {tag.label}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

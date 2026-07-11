import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";

export function About() {
  return (
    <section id="about" className="section-container flex flex-col items-center gap-10 py-16">
      <AnimatedSection as="div" className="text-center">
        <h2>About Me</h2>
      </AnimatedSection>

      <div className="flex w-full flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
        <AnimatedSection className="flex-1 space-y-5 text-center md:text-left" delay={0.05}>
          <p className="text-base">
            I&apos;m a <strong className="text-text-primary">WordPress Developer &amp; UI/UX Designer</strong>{" "}
            who lives at the intersection of code and creativity. While most developers think in
            functions and most designers think in colors — I think in both.
          </p>
          <p className="text-base">
            From wireframes to fully deployed WordPress sites, I handle it all. Whether it&apos;s a
            blazing-fast business site, a custom theme from scratch, or a user flow that just makes
            sense — that&apos;s my zone.
          </p>
          <p className="text-base">
            I don&apos;t build websites. I build <strong className="text-text-primary">digital identities</strong>.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-1 justify-center md:justify-start" delay={0.15}>
          <Image
            src="/images/about.svg"
            alt="Illustration representing Waleed Ahmad's design and development work"
            width={500}
            height={500}
            className="w-full max-w-[420px] md:max-w-[500px]"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}

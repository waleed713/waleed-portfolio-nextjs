
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { sanityFetch } from "@/lib/sanity/client";
import { allPostsQuery, type SanityPost } from "@/lib/sanity/queries";
import { PostCard } from "@/components/blog/post-card";
import { AnimatedSection } from "@/components/animated-section";

export async function HomeBlog() {
  const posts = (await sanityFetch<SanityPost[]>({ query: allPostsQuery })) ?? [];
  const latest = posts.slice(0, 3);

  // Sanity not connected yet / no posts published — hide the section on the homepage.
  if (latest.length === 0) return null;

  return (
    <section id="blog" className="section-container flex flex-col gap-10 py-16">
      <AnimatedSection as="div" className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-purple">
          From The Blog
        </span>
        <h2>Latest Articles</h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/blog"
          className="flex items-center gap-2 rounded-full border border-border-glass bg-bg-card px-6 py-2.5 font-medium text-text-primary transition-all hover:-translate-y-1 hover:glow-shadow"
        >
          <Newspaper size={16} /> View All Posts <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

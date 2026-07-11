import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { sanityFetch } from "@/lib/sanity/client";
import { allPostsQuery, type SanityPost } from "@/lib/sanity/queries";
import { PostCard } from "@/components/blog/post-card";
import { siteConfig } from "@/lib/site.config";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on WordPress development, UI/UX design, freelancing and building better websites — by Waleed Ahmad.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Articles on WordPress development, UI/UX design, freelancing and building better websites.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = (await sanityFetch<SanityPost[]>({ query: allPostsQuery })) ?? [];

  return (
    <section className="section-container flex flex-col gap-10 py-16">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-purple">
          Thoughts &amp; Writing
        </span>
        <h1>Blog</h1>
        <p className="mt-2 max-w-xl text-text-secondary">
          Notes on WordPress development, UI/UX design and the freelance journey.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="glass-card mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border p-10 text-center">
          <Newspaper size={32} className="text-accent-purple" />
          <h3 className="text-lg text-text-primary">No posts yet</h3>
          <p className="text-sm text-text-secondary">
            Connect Sanity Studio at <code className="text-accent-purple">/studio</code> and
            publish your first post — it will show up here automatically.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

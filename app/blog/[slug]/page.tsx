import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { sanityFetch } from "@/lib/sanity/client";
import { postBySlugQuery, postSlugsQuery, type SanityPost } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/site.config";
import { PostBody } from "@/components/blog/post-body";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = (await sanityFetch<string[]>({ query: postSlugsQuery })) ?? [];
  return slugs.map((slug) => ({ slug }));
}

async function getPost(slug: string) {
  return sanityFetch<SanityPost>({ query: postBySlugQuery, params: { slug } });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const imageUrl = urlForImage(post.mainImage)?.width(1200).height(630).url();
  const description = post.excerpt || siteConfig.description;

  return {
    title: post.title,
    description,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const imageUrl = urlForImage(post.mainImage)?.width(1600).height(900).url();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author?.name || siteConfig.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${post.slug}` },
  };

  return (
    <article className="section-container flex flex-col gap-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="flex w-fit items-center gap-2 text-sm text-text-secondary hover:text-accent-purple"
      >
        <ArrowLeft size={14} /> Back to Blog
      </Link>

      <header className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {post.categories.map((cat) => (
              <span
                key={cat.slug}
                className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-accent-purple"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}
        <h1>{post.title}</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted">
          {post.author?.name && <span>By {post.author.name}</span>}
          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} /> {formatDate(post.publishedAt)}
          </span>
          {post.estimatedReadingTime && (
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.estimatedReadingTime} min read
            </span>
          )}
        </div>
      </header>

      {imageUrl && (
        <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl border border-border">
          <Image src={imageUrl} alt={post.title} fill priority className="object-cover" />
        </div>
      )}

      <div className="mx-auto w-full max-w-3xl">
        <PostBody value={post.body} />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-secondary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

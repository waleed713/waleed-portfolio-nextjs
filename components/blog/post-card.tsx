import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils";
import type { SanityPost } from "@/lib/sanity/queries";

export function PostCard({ post }: { post: SanityPost }) {
  const imageUrl = urlForImage(post.mainImage)?.width(800).height(500).url();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card group flex flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:glow-shadow"
    >
      <div className="relative aspect-[8/5] w-full overflow-hidden bg-bg-cardHover">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
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
        <h3 className="text-lg leading-snug text-text-primary">{post.title}</h3>
        {post.excerpt && <p className="line-clamp-3 text-sm text-text-secondary">{post.excerpt}</p>}
        <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} /> {formatDate(post.publishedAt)}
          </span>
          {post.estimatedReadingTime && (
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.estimatedReadingTime} min read
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

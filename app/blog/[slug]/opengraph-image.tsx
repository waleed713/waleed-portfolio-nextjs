import { ImageResponse } from "next/og";
import { sanityFetch } from "@/lib/sanity/client";
import { postBySlugQuery, type SanityPost } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "Blog post cover image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost>({
    query: postBySlugQuery,
    params: { slug },
  });

  const title = post?.title || "Waleed Ahmad | Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0d0a1a 0%, #120f23 50%, #1a0d1a 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28, opacity: 0.85 }}>
          Waleed Ahmad — Blog
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 24, opacity: 0.7 }}>
          WordPress Developer &amp; UI/UX Designer
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site.config";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          background: "linear-gradient(135deg, #0d0a1a 0%, #120f23 50%, #1a0d1a 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>Waleed Ahmad</div>
        <div style={{ display: "flex", fontSize: 32, opacity: 0.85 }}>
          WordPress Developer &amp; UI/UX Designer
        </div>
      </div>
    ),
    { ...size }
  );
}

import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          cardHover: "var(--bg-card-hover)",
        },
        accent: {
          purple: "hsl(280, 90%, 65%)",
          purpleDark: "hsl(280, 95%, 35%)",
          purpleLight: "hsl(280, 75%, 82%)",
          blue: "hsl(320, 88%, 60%)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          glass: "hsl(280, 90%, 65%)",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(135deg, hsl(280, 90%, 65%), hsl(320, 88%, 60%))",
        "gradient-bg": "linear-gradient(135deg, #0d0a1a 0%, #120f23 50%, #1a0d1a 100%)",
        "gradient-bg-light": "linear-gradient(135deg, #f7f5fc 0%, #f0edf7 50%, #f9f0f6 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(236, 72, 153, 0.05))",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.05), inset 0 0 10px 5px rgba(255, 255, 255, 0.15)",
        "glass-2": "0 0 20px hsla(280, 90%, 65%, 0.25), 0 0 45px hsla(280, 90%, 65%, 0.12), 0 0 80px hsla(280, 90%, 65%, 0.06), 0 8px 32px rgba(13, 10, 26, 0.8)",
        card: "0 4px 24px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        content: "1260px",
      },
      borderRadius: {
        xl2: "1rem",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        blob: "blob 12s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;

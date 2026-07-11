# Waleed Ahmad — Portfolio (Next.js 15)

A modern, production-ready rebuild of the original HTML/CSS portfolio, using **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and a **Sanity CMS**-powered blog. Same branding, colors, and content as the original site — upgraded architecture, animations, dark/light mode, and full SEO.

## ✨ Features

- **Next.js 15 App Router** + **TypeScript**, fully typed end-to-end
- **Tailwind CSS** with the original purple/pink gradient theme as design tokens
- **Dark / light mode** via `next-themes` (defaults to the original dark theme)
- **Framer Motion** scroll-reveal and stagger animations throughout
- Reusable components: `Navbar`, `Hero`, `About`, `Experience`, `Skills`, `Projects`, `Contact`, `Footer`
- **Active nav-link highlighting** based on scroll position (IntersectionObserver)
- **Project showcase with category filters** (WordPress / UI-UX / E-Commerce)
- Working **contact form** → `/api/contact` route (wire up an email provider — see below)
- **Resume download button** (`/CV.pdf`)
- **Blog powered by Sanity CMS**: listing page, dynamic `[slug]` pages, categories, tags, author, featured image, publish date, and estimated reading time
- **SEO**: per-page `generateMetadata`, canonical URLs, dynamic `sitemap.xml` (includes blog posts), `robots.txt`, JSON-LD (`Person` + `BlogPosting`) structured data
- **Pinterest / social-friendly**: Open Graph + Twitter card metadata, dynamically generated OG images (`next/og`) for the homepage and every blog post
- **Performance**: `next/image` everywhere (lazy-loaded, responsive `sizes`), `next/font` self-hosted Google Fonts, route-level loading states, edge-rendered OG images
- Embedded **Sanity Studio** at `/studio` — no separate app/deploy needed

---

## 🗂 Project structure

```
app/
  layout.tsx              # Root layout: fonts, metadata, ThemeProvider, Navbar/Footer, JSON-LD
  page.tsx                # Homepage — composes all sections
  globals.css              # Design tokens (CSS vars) + Tailwind layers
  loading.tsx / not-found.tsx
  sitemap.ts / robots.ts   # Dynamic, includes Sanity blog posts
  opengraph-image.tsx      # Dynamic OG image for the homepage
  api/contact/route.ts     # Contact form endpoint
  blog/
    page.tsx               # Blog listing (Sanity)
    loading.tsx
    [slug]/
      page.tsx             # Blog post detail (SEO + JSON-LD + PortableText)
      loading.tsx
      opengraph-image.tsx  # Per-post dynamic OG image
  studio/[[...tool]]/page.tsx  # Embedded Sanity Studio (/studio)

components/               # Hero, About, Experience, Skills, Projects, Contact, Navbar, Footer, etc.
components/blog/          # PostCard, PostBody (PortableText renderer)

lib/
  site.config.ts          # All real content: nav links, experience, skills, projects, contact options
  utils.ts                # cn(), formatDate()
  sanity/
    env.ts                # Reads + validates Sanity env vars (safe fallback if unset)
    client.ts             # Sanity client + sanityFetch() wrapper (never throws mid-build)
    image.ts               # Sanity image URL builder
    queries.ts             # GROQ queries + types

sanity/schemas/            # post, author, category schema definitions
sanity.config.ts           # Studio config (basePath: /studio)

public/
  images/                 # Original assets, reused as-is (hero.svg, about.svg, logo.png, project photos)
  CV.pdf                  # Resume, linked from the "Download CV" button
```

---

## 🚀 Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | From [sanity.io/manage](https://www.sanity.io/manage) (create a free project) |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Any date ≥ `2024-01-01` |
| `NEXT_PUBLIC_SITE_URL` | Your production domain, used for metadata/sitemap/robots |
| `RESEND_API_KEY` / `CONTACT_TO_EMAIL` | Optional — only needed if you wire up real email sending in `app/api/contact/route.ts` |

> The site **builds and runs even without Sanity configured** — the blog will just show an empty state until you connect it. This is intentional so you can preview and deploy the portfolio immediately.

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

### 4. Set up the blog (Sanity)

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage) and copy the **Project ID**.
2. Add it to `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Go to `http://localhost:3000/studio` — this is your embedded Sanity Studio (no separate app to run).
4. Create a **Category** and an **Author**, then write your first **Blog Post**.
5. Visit `/blog` — your post appears automatically (ISR revalidates every 60s).

> First time using Sanity? In the Studio, you'll be prompted to log in and the dataset (`production`) will be created automatically the first time you save a document, or you can create it via `npx sanity dataset create production`.

---

## 🧞 Scripts

```bash
npm run dev        # Start dev server
npm run build       # Production build
npm run start       # Start production server (after build)
npm run lint        # ESLint
npm run typecheck   # TypeScript check only
```

---

## 🎨 Design system

All theme tokens live in `app/globals.css` (CSS variables for backgrounds/text/borders, swapped by the `.light` class) and `tailwind.config.ts` (color/shadow/animation tokens). The original dark purple gradient background, glass-card borders, and glow shadows are preserved as reusable Tailwind utilities: `.glass-card`, `.glow-shadow`, `.text-gradient`, `.section-container`.

Content (nav links, experience, skills, projects, contact form options, social links) lives in one place: `lib/site.config.ts` — edit that file to update copy without touching components.

---

## 📈 SEO & performance notes

- `generateMetadata` on every route (home, blog listing, blog posts) with per-page titles/descriptions/canonicals.
- `app/sitemap.ts` pulls live blog slugs from Sanity so new posts are indexed automatically.
- `app/robots.ts` disallows `/studio` and `/api/*`, points to the sitemap.
- JSON-LD: `Person` schema site-wide, `BlogPosting` schema on every post.
- OG/Twitter images are generated on-demand with `next/og` (edge runtime) — no manual image exports needed, and they update automatically when you change a post's title or cover image.
- All images use `next/image` with explicit `sizes` for responsive, lazy-loaded delivery.
- Fonts (`Outfit`, `Poppins`) are loaded via `next/font/google`, which self-hosts them at build time — no external font requests at runtime.

To validate Lighthouse scores yourself after deploying: `npx lighthouse https://your-domain.com --view`.

---

## ☁️ Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — Vercel auto-detects Next.js, no extra config required.
5. Once live, update `NEXT_PUBLIC_SITE_URL` to your real domain and redeploy so metadata/sitemap URLs are correct.

---

## 📝 Notes / next steps

- **Contact form**: `app/api/contact/route.ts` currently validates and logs submissions. Wire it to an email provider (e.g. [Resend](https://resend.com)) using the `RESEND_API_KEY` / `CONTACT_TO_EMAIL` env vars for real email delivery.
- **Third project image**: `public/images/project-visa.jpg` (from the original `assets` folder) is now used for a third "Visa Hosting Platform" project card — update the description/link in `lib/site.config.ts` if you'd like different copy.
- **Pinterest verification**: the meta tag in `app/layout.tsx` (`p:domain_verify`) reuses the value from the original `index.html` — replace it if you re-verify the domain.

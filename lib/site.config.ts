export const siteConfig = {
  name: "Waleed Ahmad",
  title: "Waleed Ahmad | WordPress Developer & UI/UX Designer",
  description:
    "Waleed Ahmad is a WordPress Developer & UI/UX Designer crafting pixel-perfect, high-performing websites and digital experiences. Available for freelance projects.",
  keywords: [
    "Waleed Ahmad",
    "WordPress Developer",
    "UI/UX Designer",
    "Freelance Web Developer Pakistan",
    "WooCommerce Developer",
    "Elementor Developer",
    "Figma Designer",
    "Web Designer Abbottabad",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://waleedahmad.dev",
  ogImage: "/images/og-cover.jpg",
  author: "Waleed Ahmad",
  email: "waleedaw778@gmail.com",
  location: "Abbottabad, Pakistan",
  social: {
    github: "https://github.com/waleed713",
    linkedin: "https://www.linkedin.com/in/waleed-ahmad-b95665268/",
    whatsapp:
      "https://wa.me/923215459190?text=Hi%20Waleed!%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
  },
  resumeUrl: "/CV.pdf",
  pinterestVerification: "589511781f4ec2421bca5e89ea5985cd",
} as const;

export const navLinks = [
  { href: "#home", label: "Home", icon: "House" },
  { href: "#about", label: "About", icon: "User" },
  { href: "#experience", label: "Experience", icon: "Briefcase" },
  { href: "#skills", label: "Skills", icon: "Code" },
  { href: "#projects", label: "Projects", icon: "FolderOpen" },
  { href: "#contact", label: "Contact", icon: "Mail" },
] as const;

export const experience = [
  {
    id: "wp-dev",
    title: "WordPress Designer / Developer",
    company: "Freelance",
    date: "Oct 2024 - Present",
    location: "Abbottabad, Pak",
    locationIcon: "MapPin",
    points: [
      "Designed and developed fully customized WordPress websites for local and international clients.",
      "Built custom WordPress themes from scratch with clean, semantic code and pixel-perfect designs.",
      "Integrated WooCommerce for e-commerce solutions including product management, payment gateways and order flows.",
      "Used Elementor and ACF to deliver flexible, easily manageable page layouts tailored to client needs.",
      "Optimized websites for performance, SEO and mobile responsiveness to maximize user engagement.",
      "Delivered complete WordPress solutions from initial concept and wireframe through to launch and post-launch support.",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Designer",
    company: "Freelance",
    date: "Oct 2024 - Present",
    location: "Remote",
    locationIcon: "Globe",
    points: [
      "Designed intuitive, user-centered interfaces using Figma with a focus on usability and visual clarity.",
      "Created detailed wireframes, user flows and high-fidelity prototypes for web and mobile applications.",
      "Conducted UX research and user journey mapping to identify pain points and improve overall user experience.",
      "Developed consistent design systems and component libraries to streamline the handoff between design and development.",
      "Collaborated with clients to translate brand identities into polished, pixel-perfect UI designs.",
      "Delivered responsive design layouts ensuring seamless experiences across all screen sizes and devices.",
    ],
  },
] as const;

export const skillGroups = [
  {
    id: "wp-cms",
    category: "WordPress & CMS",
    tags: [
      { label: "WordPress", icon: "Layout" },
      { label: "WooCommerce", icon: "ShoppingCart" },
      { label: "Elementor", icon: "Puzzle" },
      { label: "ACF", icon: "Layers" },
      { label: "Cpt UI", icon: "Box" },
      { label: "Yoast SEO", icon: "ShieldCheck" },
      { label: "Customizer", icon: "SlidersHorizontal" },
      { label: "SMTP / WP Mail", icon: "Mail" },
    ],
  },
  {
    id: "design-tools",
    category: "Design Tools",
    tags: [
      { label: "Figma", icon: "Pencil" },
      { label: "Photoshop", icon: "PenTool" },
      { label: "Canva", icon: "Palette" },
      { label: "Color Theory", icon: "Droplets" },
      { label: "Image Editing", icon: "Crop" },
      { label: "Typography", icon: "Type" },
    ],
  },
  {
    id: "ui-ux",
    category: "UI/UX",
    tags: [
      { label: "UI / UX Design", icon: "MousePointerClick" },
      { label: "Wireframing", icon: "Workflow" },
      { label: "Prototyping", icon: "Play" },
      { label: "User Research", icon: "Users" },
      { label: "Responsive Design", icon: "Smartphone" },
      { label: "Design Systems", icon: "LayoutGrid" },
    ],
  },
  {
    id: "dev-tools",
    category: "Dev & Tools",
    tags: [
      { label: "HTML5", icon: "FileCode" },
      { label: "CSS3", icon: "Paintbrush" },
      { label: "Git", icon: "GitBranch" },
      { label: "GitHub", icon: "Github" },
      { label: "VS Code", icon: "Code2" },
      { label: "DevTools", icon: "Bug" },
    ],
  },
] as const;

export type ProjectCategory = "wordpress" | "uiux" | "ecommerce";

export const projects = [
  {
    id: "wordpress-development",
    title: "WordPress Website Development",
    description:
      "Experienced in building all types of websites on WordPress — including E-Commerce, blogs, portfolios, business sites, and landing pages. Using WooCommerce, Elementor and custom theme development.",
    image: "/images/project-wordpress.jpg",
    href: "https://hamali.store/",
    linkIcon: "ExternalLink",
    linkLabel: "Live Demo",
    tags: ["WordPress", "WooCommerce", "Elementor", "E-Commerce", "Business Sites", "Essential Addons"],
    categories: ["wordpress", "ecommerce"] as ProjectCategory[],
  },
  {
    id: "visa-hosting-platform",
    title: "Visa Hosting Platform",
    description:
      "A custom WordPress hosting & business platform built with a focus on speed, clean structure and conversion-friendly layouts, using Elementor, ACF and a fully responsive custom theme.",
    image: "/images/project-visa.jpg",
    href: "https://www.linkedin.com/in/waleed-ahmad-b95665268/",
    linkIcon: "Linkedin",
    linkLabel: "View on LinkedIn",
    tags: ["WordPress", "ACF", "Elementor", "Custom Theme", "Business Sites", "Performance"],
    categories: ["wordpress"] as ProjectCategory[],
  },
  {
    id: "uiux-design",
    title: "UI/UX Design — Web & App",
    description:
      "Designed clean, modern, user-centered interfaces using Figma. Projects include wireframes, high-fidelity prototypes, design systems, and UI kits for web and mobile apps focused on usability and visual clarity.",
    image: "/images/project-uiux.jpg",
    href: "https://www.linkedin.com/in/waleed-ahmad-b95665268/",
    linkIcon: "Linkedin",
    linkLabel: "View on LinkedIn",
    tags: ["Figma", "Wireframing", "Prototyping", "UI Design", "UX Research", "Design Systems"],
    categories: ["uiux"] as ProjectCategory[],
  },
] as const;

export const contactServices = [
  { value: "wordpress", label: "WordPress Website" },
  { value: "ecommerce", label: "E-Commerce (WooCommerce)" },
  { value: "custom-web", label: "Custom HTML/CSS Website" },
  { value: "landing-page", label: "Landing Page" },
  { value: "uiux-design", label: "UI/UX Design (Figma)" },
  { value: "graphic-design", label: "Graphic Design (Photoshop/Canva)" },
  { value: "website-redesign", label: "Website Redesign" },
  { value: "other", label: "Other" },
] as const;

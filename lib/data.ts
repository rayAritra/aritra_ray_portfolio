export const personal = {
  name: "aritra ray",
  displayName: "Aritra Ray",
  title: "full-stack software engineer",
  bio: "full-stack software engineer, based in west bengal, india. final-year cse student. loves building things and shipping fast.",
  location: "west bengal, india",
  email: "aritra@example.com",
  profilePhoto: "/aritra.jpg",
  initials: "AR",
  currentJob: {
    company: "Faunly",
    role: "software engineer",
    url: "https://faunly.com",
    logo: "/logos/faunly.png",
    description:
      "building scalable backend systems, apis, and infrastructure powering faunly's products.",
  },
  social: {
    github: "https://github.com/rayAritra",
    linkedin: "https://linkedin.com/in/aritraray",
    twitter: "https://twitter.com/Aritraray2005",
    hashnode: "https://aritra05.hashnode.dev",
    resume: "#",
  },
  about:
    "i started building things in my first year of college, with zero cs background — just curiosity and a lot of debugging. since then i've shipped a production edtech platform serving 500+ students, built real-time apps, and most recently moved into backend infrastructure work at an early-stage startup. i'm currently looking for new opportunities and always happy to talk about what i'm building.",
};

export interface Experience {
  role: string;
  type: string;
  company: string;
  companyUrl?: string;
  location?: string;
  dateRange: string;
  slug: string;
  description: string;
  stack?: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    type: "Full-time",
    company: "Faunly",
    companyUrl: "https://faunly.com",
    dateRange: "Jun 2026 - Present",
    slug: "faunly",
    description:
      "Building scalable backend systems, APIs, and infrastructure powering Faunly's products: high-performance services, database architecture, authentication systems, and third-party integrations. Working cross-functionally on production-ready features, performance, and technical decisions.",
    stack: ["Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    role: "Full Stack Engineer",
    type: "Full-time",
    company: "Ezzstar",
    companyUrl: "https://ezzstar.com",
    location: "Oman, Remote",
    dateRange: "May 2026 - Present",
    slug: "ezzstar",
    description:
      "Founding contributor to Ezzstar, a Web3 entertainment and social ecosystem powered by the SPICA token. Building core features across the Ezzstar website and mobile app, contributing to architecture, UI/UX, and technical direction for creators and gamers.",
    stack: ["MEAN Stack", "Web3", "Mobile App", "SPICA Token"],
  },
  {
    role: "Full Stack Engineer",
    type: "Full-time",
    company: "AirEdify Ventures",
    companyUrl: "https://airedify.in",
    location: "Remote",
    dateRange: "Dec 2025 - Present",
    slug: "airedify-ventures",
    description:
      "Built core features of AirEdify, a production EdTech platform (Next.js 14, Strapi CMS, MongoDB) serving 500+ active students. End-to-end Razorpay payment integration with webhooks, automated transactional email via AWS SES (eliminated 100% of manual follow-ups), Incremental Static Regeneration cutting page loads by 60%, 3+ major feature releases shipped across agile sprints.",
    stack: ["Next.js 14", "Strapi CMS", "MongoDB", "Razorpay", "AWS SES"],
  },
];

export interface Project {
  title: string;
  slug: string;
  date: string;
  shortDesc: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    label: string;
    url: string;
  }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "LinkedIn GTM Agent",
    slug: "linkedin-gtm-agent",
    date: "Jun 2026",
    shortDesc:
      "fully autonomous outreach pipeline that watches influencer posts, scores icp fit, and sends personalized dms through to meeting booked.",
    description:
      "Fully autonomous outreach pipeline: watches influencer posts, scores ICP fit, sends personalized DMs, tracks through to meeting booked. Built and shipped overnight after seeing a tweet at 10pm.",
    image: "/projects/linkedin-gtm-agent.png",
    tags: ["Node.js", "Express", "PostgreSQL", "AI"],
    links: [
      { label: "Live", url: "https://linkedin-gmt-agent.vercel.app" },
      { label: "Source", url: "https://github.com/rayAritra/linkedin-gmt-agent" },
    ],
    featured: true,
  },
  {
    title: "AirEdify — EdTech Platform",
    slug: "airedify",
    date: "Dec 2025",
    shortDesc:
      "production edtech platform serving 500+ students. razorpay payments, aws ses email automation, isr caching.",
    description:
      "Production platform serving 500+ students. Razorpay payments with webhooks, AWS SES email automation, ISR caching (60% faster loads).",
    image: "/projects/airedify.png",
    tags: ["Next.js 14", "Strapi CMS", "MongoDB", "Razorpay", "AWS SES"],
    links: [{ label: "Website", url: "https://airedify.in" }],
    featured: true,
  },
  {
    title: "Lumio — In-Browser App Builder",
    slug: "lumio",
    date: "2024",
    shortDesc:
      "browser-native app builder that runs full node.js/react projects via the webcontainers api, with ai code generation in under 3 seconds.",
    description:
      "Browser-native app builder that runs full Node.js/React projects entirely via the WebContainers API, with AI code generation from a prompt in under 3 seconds and zero local setup.",
    image: "/projects/lumio.png",
    tags: ["TypeScript", "Node.js", "React", "WebContainers API", "AI"],
    links: [{ label: "Source", url: "https://github.com/rayAritra/lumio" }],
    featured: true,
  },
  {
    title: "YOUTH Health Tech",
    slug: "youth",
    date: "2025",
    shortDesc:
      "vision-ai biomarker scanner with personalized supplement recommendations and an embeddable white-label widget.",
    description:
      "Vision-AI biomarker scanner with personalized supplement recommendations, a brand dashboard, and an embeddable white-label widget.",
    image: "/projects/youth.png",
    tags: ["Node.js", "Groq Vision AI", "React Native", "PostgreSQL"],
    links: [{ label: "Source", url: "https://github.com/rayAritra/youth" }],
  },
  {
    title: "ReviewIQ",
    slug: "reviewiq",
    date: "2024",
    shortDesc:
      "ai saas where gemini drafts answers and human reviewers approve before delivery. diversion hackathon finalist, top 10/200+ teams.",
    description:
      "AI SaaS where Gemini drafts answers and human reviewers approve before delivery; multi-tenant RBAC via Auth0, built and demoed in 24 hours. Diversion Hackathon — Finalist, Top 10/200+ teams.",
    image: "/projects/reviewiq.png",
    tags: ["Next.js 14", "Auth0", "Prisma", "PostgreSQL", "Gemini AI"],
    links: [{ label: "Demo", url: "https://diversion-hackaut.vercel.app" }],
  },
  {
    title: "Uber Clone — Real-Time Ride Hailing",
    slug: "uber-clone",
    date: "2024",
    shortDesc:
      "full-stack ride-hailing app with real-time updates via socket.io, jwt + rbac securing 10+ endpoints, mongodb geolocation indexing.",
    description:
      "Full-stack ride-hailing app with real-time ride updates via Socket.IO, JWT + RBAC securing 10+ endpoints, MongoDB geolocation indexing for driver matching.",
    image: "/projects/uber-clone.png",
    tags: ["Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "React"],
    links: [{ label: "Source", url: "https://github.com/rayAritra/uber_new" }],
  },
  {
    title: "Chess Game",
    slug: "chess-game",
    date: "2024",
    shortDesc:
      "multiplayer chess with websocket sessions, full server-side move validation (castling, en passant, checkmate) via chess.js.",
    description:
      "Multiplayer chess with WebSocket sessions for 2 concurrent players, full server-side move validation (castling, en passant, check/checkmate) via chess.js, zero client-side trust.",
    image: "/projects/chess-game.png",
    tags: ["Node.js", "Express", "Socket.IO", "chess.js"],
    links: [
      { label: "Demo", url: "https://chess-game-three-snowy.vercel.app" },
      { label: "Source", url: "https://github.com/rayAritra/chessGame" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const skills: string[] = [
  "React",
  "Next.js 14",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Strapi CMS",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
  "Tailwind CSS",
  "Shadcn/UI",
  "Redux",
  "Vite",
  "Socket.IO",
  "WebContainers API",
  "REST API Design",
  "AWS SES",
  "Docker",
  "Vercel",
  "JWT",
  "Auth0",
  "Razorpay",
  "Web3 / SPICA token infra",
  "Git",
  "Postman",
  "Java",
  "Python",
  "C",
  "HTML",
  "CSS",
];

export interface Education {
  institution: string;
  url?: string;
  dateRange: string;
  degree: string;
}

export const education: Education[] = [
  {
    institution: "MAKAUT, West Bengal",
    dateRange: "2023 - 2027",
    degree: "Bachelor of Technology in Computer Science & Engineering",
  },
];

export interface BlogPost {
  title: string;
  description: string;
  url: string;
  date?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Learning to Code: Navigating the First Three Months of Engineering",
    description:
      "a first-year engineering student learning to code from zero, no cs background, just curiosity and a lot of debugging.",
    url: "https://aritra05.hashnode.dev",
  },
  {
    title: "An Introduction to Git and GitHub",
    description:
      "a beginner-friendly walkthrough of git and github: commits, branches, remotes, collaboration.",
    url: "https://aritra05.hashnode.dev",
  },
  {
    title: "1st Year Tech Journey",
    description:
      "reflecting on my first year in tech: what i built, what broke, what i learned coming from a pcmb background.",
    url: "https://aritra05.hashnode.dev",
  },
];

export const marqueeImages = [
  { src: "/projects/linkedin-gtm-agent.png", alt: "LinkedIn GTM Agent" },
  { src: "/projects/airedify.png", alt: "AirEdify" },
  { src: "/projects/lumio.png", alt: "Lumio" },
  { src: "/projects/reviewiq.png", alt: "ReviewIQ" },
  { src: "/projects/uber-clone.png", alt: "Uber Clone" },
  { src: "/projects/chess-game.png", alt: "Chess Game" },
];

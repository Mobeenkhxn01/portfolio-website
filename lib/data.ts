export const personalInfo = {
  name: "Mobeen Khan",
  title: "Full Stack Developer",
  subtitle: "Next.js · TypeScript · Node.js",
  location: "Chandigarh, India",
  email: "developermobeen7@gmail.com",
  github: "https://github.com/Mobeenkhxn01",
  linkedin: "https://www.linkedin.com/in/Mobeenkhan456",
  avatar: "https://avatars.githubusercontent.com/u/126558598?v=4",
  bio: "I build fast, scalable full-stack web applications — from clean APIs to polished UIs. Available for freelance projects and full-time roles.",
  longBio: "Computer Science student at Chandigarh University with a strong focus on production-grade web development. I specialise in Next.js, TypeScript and Node.js, and I design systems that are built to scale from day one.",
  available: true,
  openToWork: "Full-time & Freelance",
};

export const skills = {
  frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  backend: ["Node.js", "Express.js", "REST APIs", "Prisma ORM"],
  databases: ["PostgreSQL (NeonDB)", "MongoDB", "Redis"],
  tools: ["Git", "Vercel", "AWS", "Firebase", "Docker", "Figma"],
  dsa: ["C++", "Java", "Data Structures", "Algorithms"],
};

export const projects = [
  {
    id: "qrave-bites",
    title: "QraveBites",
    tagline: "Full-Stack Food Ordering Platform",
    description:
      "A complete food ordering web app with real-time menu management, cart system, order tracking, and admin dashboard. Built with Next.js App Router, TypeScript, and Prisma ORM on PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Mobeenkhxn01/qrave-bites",
    live: null,
    featured: true,
    stars: 1,
    category: "Full Stack",
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    tagline: "WebSocket-Powered Messaging",
    description:
      "Real-time chat application with WebSocket connections, user authentication, room-based messaging, and persistent message history. TypeScript throughout for type safety.",
    tech: ["Next.js", "TypeScript", "WebSockets", "MongoDB"],
    github: "https://github.com/Mobeenkhxn01/chat-app",
    live: null,
    featured: true,
    stars: 0,
    category: "Full Stack",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    tagline: "Custom Short Links with Analytics",
    description:
      "Production-ready URL shortener with custom slug support, click analytics, expiry settings, and a clean dashboard. Built with Next.js API routes and MongoDB.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Mobeenkhxn01/url-shortener",
    live: null,
    featured: true,
    stars: 0,
    category: "Tool",
  },
  {
    id: "todos-app",
    title: "Todos App",
    tagline: "Daily Task Manager",
    description:
      "Task management app with CRUD operations, priority labels, due dates, and persistent storage. Clean UI with smooth interactions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Mobeenkhxn01/todos-app",
    live: null,
    featured: false,
    stars: 0,
    category: "Tool",
  },
  {
    id: "depression-prediction",
    title: "Depression Prediction",
    tagline: "ML-Powered Mental Health Tool",
    description:
      "A TypeScript web interface for a machine learning model that predicts depression risk based on user inputs. Demonstrates full-stack ML integration.",
    tech: ["TypeScript", "Next.js", "ML Integration", "Tailwind CSS"],
    github: "https://github.com/Mobeenkhxn01/depression-prediction",
    live: null,
    featured: false,
    stars: 0,
    category: "ML / Health",
  },
  {
    id: "xkcd-comics",
    title: "XKCD Comics Emailer",
    tagline: "Email Subscription with OTP Verification",
    description:
      "Email verification and subscription system using PHPMailer to deliver XKCD Comics to subscribers. Custom OTP flow with secure email dispatch.",
    tech: ["PHP", "PHPMailer", "MySQL", "HTML/CSS"],
    github: "https://github.com/Mobeenkhxn01/XKCD-Comics",
    live: null,
    featured: false,
    stars: 1,
    category: "Backend",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2023 – Present",
    type: "Self-Directed",
    points: [
      "Shipped 6+ production-ready TypeScript projects with Next.js App Router",
      "Designed relational & NoSQL schemas with Prisma + PostgreSQL and MongoDB",
      "Implemented real-time features with WebSockets in a live chat application",
      "Integrated ML models into full-stack TypeScript interfaces",
      "Deployed apps on Vercel and AWS; used Firebase for auth & storage",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Science",
    institution: "Chandigarh University",
    period: "2022 – 2026",
    grade: "Active",
    note: "Data Structures · Algorithms · DBMS · Operating Systems · System Design",
  },
];

export const services = [
  {
    icon: "⬡",
    title: "Full Stack Web Apps",
    desc: "End-to-end Next.js + TypeScript applications with clean architecture, REST APIs, and database design.",
  },
  {
    icon: "⬡",
    title: "Backend & API Development",
    desc: "Scalable Node.js/Express APIs with auth, validation, error handling, and Prisma ORM integrations.",
  },
  {
    icon: "⬡",
    title: "UI / Frontend Engineering",
    desc: "Pixel-perfect, responsive interfaces with Tailwind CSS, ShadCN UI and smooth interactions.",
  },
  {
    icon: "⬡",
    title: "Database Design",
    desc: "Schema design and optimization for PostgreSQL (NeonDB) and MongoDB based on your data model.",
  },
];

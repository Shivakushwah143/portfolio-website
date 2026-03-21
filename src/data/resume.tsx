import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shiva Kushwah",
  initials: "SK",
  url: "https://github.com/Shivakushwah143",
  location: "Indore, India",
  locationLink: "https://www.google.com/maps/place/Indore",
  description:
    "Backend-leaning full-stack developer focused on building reliable, scalable web systems.",
  summary:
    "Backend-leaning full-stack developer focused on building reliable, scalable web systems. Strong in secure API design, async workflows, data consistency, and backend architecture, with the ability to ship clean, production-ready frontends when required.",
  avatarUrl: "https://plus.unsplash.com/premium_photo-1726079246917-46f2b37f7e9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "Express.js",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Mongoose",
    "Redis",
    "Kafka",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Docker",
    "Git",
    "AWS",
    "LangChain",
    "LangGraph",
    "Generative AI",
    "Vector Databases",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "shivakushwah144@gmail.com",
    tel: "+91 9009917146",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shivakushwah143",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shiva-kushwah-53a095297/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Shivakushwa2004",
        icon: Icons.x,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "#",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Calance",
      badges: [],
      href: "#",
      location: "India",
      title: "Full-Stack Developer Intern",
      logoUrl: "/download.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "- Built features for a government e-governance platform under the Skill India initiative\n- Developed backend APIs using Node.js and MongoDB\n- Implemented authentication and dashboards\n- Contributed to frontend development using React and Tailwind CSS",
    },
  ],
  education: [
    {
      school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      href: "",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/RGPVLOGO.jpeg",
      start: "2025",
      end: "2027",
    },
    {
      school: "Devi Ahilya Vishwavidyalaya (DAVV)",
      href: "",
      degree: "Bachelor of Computer Applications (BCA) | CGPA: 7.0",
      logoUrl: "/download.jpeg",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Craveo — Full-Stack Food Ordering Platform",
      href: "#",
      active: true,
      description:
        "Production-style food ordering platform with an event-driven Node.js backend. Implemented real-time order tracking, secure payments, order lifecycle management, and AI-powered search, recommendations, and ETA prediction.",
      technologies: [
        "Node.js",
        "Event-driven",
        "Payments",
        "Realtime",
        "AI Search",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Shivakushwah143/Craveo-formerly-Zomato-Lite-",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://craveolite.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://player.cloudinary.com/embed/?cloud_name=dvcbhvxd6&public_id=secondBrainAM_x0crbk",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/cravio-screenshot.png",
      video: "https://res.cloudinary.com/dvcbhvxd6/video/upload/v1773992940/6190423079114513480_myabgv.mp4",
    },
    {
      title: "SoleScript — AI-Powered Full-Stack Content Generation Platform",
      href: "#",
      active: true,
      description:
        "A production-ready AI content platform that helps creators and businesses generate high-quality posts for LinkedIn, X, and Instagram in seconds. Built with secure authentication, credit-based subscriptions, Razorpay & UPI payments .",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Clerk Authentication",
        "Razorpay Integration",
        "UPI Payments",
        "AI Content Generation"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Shivakushwah143/ContentGeneration",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://www.onewish.fun/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://player.cloudinary.com/embed/?cloud_name=dvcbhvxd6&public_id=secondBrainAM_x0crbk",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/soleScriptscreenshot-studio.png",
      video: "https://res.cloudinary.com/dvcbhvxd6/video/upload/v1773993127/6190423079114513479_qg4g7f.mp4",
    },
    {
      title: "SecondBrain — AI Knowledge Management System",
      href: "#",
      active: true,
      description:
        "Full-stack knowledge management system with JWT authentication and a RAG pipeline using vector databases. Integrated AI chat, background jobs, and Telegram bot notifications.",
      technologies: [
        "JWT",
        "RAG",
        "Vector Databases",
        "Background Jobs",
        "Telegram Bot",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://second-brain-qkz50a5v2-shivakushwah143s-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/secondBrain-screenshot-studio.png",
      video: "https://res.cloudinary.com/dvcbhvxd6/video/upload/v1770441075/secondBrainAM_x0crbk.mp4",
    },
    {
      title: "QuickWish Gifts — Full-Stack E-Commerce Gift Platform",
      href: "https://github.com/Shivakushwah143/Quickwish-Gifts.git",
      active: true,
      description:
        "A full-stack gift e-commerce platform designed for seamless product browsing, cart management, and secure checkout. Built with structured backend architecture, authentication, dynamic product handling, and responsive UI to deliver a smooth and scalable shopping experience.",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Authentication",
        "REST APIs",
        "Responsive UI"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Shivakushwah143/Quickwish-Gifts.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://quickwish-gifts.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/quickwishscreenshot-studio.png",
      video: "https://res.cloudinary.com/dvcbhvxd6/video/upload/v1773993165/6190423079114513470_gmpe88.mp4",
    },
    {
      title: "DevForces — Competitive Programming Platform",
      href: "#",
      active: true,
      description:
        "Competitive programming platform with real-time leaderboards using PostgreSQL, Prisma, and Redis. Implemented AI-based code evaluation and magic-link authentication.",
      technologies: [
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Realtime",
        "AI Evaluation",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Shivakushwah143/DevForces---Coding-Contest-Platform",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://dev-forces-coding-contest-platform.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/devForce-screensho.png",
      video: "https://res.cloudinary.com/dvcbhvxd6/video/upload/v1774010556/6190423079114513849_r1hplq.mp4",
    },
    {
      title: "Nexus— Production-Ready Full-Stack E-Commerce Platform",
      href: "https://github.com/Shivakushwah143/NEXUS.git",
      active: true,
      description:
        "A complete full-stack e-commerce platform built with modern web technologies. Includes secure JWT + OTP authentication, Stripe payment integration, real-time cart updates, admin dashboard, and full product & order lifecycle management.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Stripe Payments",
        "Tailwind CSS",
        "Framer Motion"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Shivakushwah143/NEXUS.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://nexus-qgiv.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/nexus-screenshot-studio.png",
      video: "https://res.cloudinary.com/dvcbhvxd6/video/upload/v1773993084/6190423079114513472_py7cti.mp4",
    },

    {
      title: "Vanish — Anonymous Real-Time Chat Application",
      href: "#",
      active: true,
      description:
        "WebSocket-based anonymous chat system with ephemeral sessions, ensuring zero message persistence and low-latency real-time communication.",
      technologies: [
        "WebSockets",
        "Realtime",
        "Ephemeral Sessions",
        "Low Latency",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://vanisha-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/-vanish-screenshot-studio.png",
      video: "https://res.cloudinary.com/dvcbhvxd6/video/upload/v1770441192/vanish_AM_pobtwv.mp4",
    },
  ],
  hackathons: [
    {
      title: "InnoNova (AuroNova 2025)",
      dates: "March 28th - 29th, 2025",
      location: "Sri Aurobindo Institute of Technology, Indore",
      description:
        "24-hour hackathon with a 5-member team. Built a Lost & Found web app using the MERN stack.",
      image: "",
      links: [],
    },
    {
      title: "AI Recommendation System | Hackathon Project",
      dates: "City Level Hackathon",
      location: "SCSIT, DAVV Indore",
      description:
        "Built an AI-powered recommendation engine for local businesses that personalizes products based on user behavior (click, cart, purchase, reviews). Implemented event tracking, user interest profiling, and vector-based recommendations using Qdrant. Focused on system design, real-time learning, and personalized user experience.",
      image: "",
      links: [],
    },
  ],
} as const;

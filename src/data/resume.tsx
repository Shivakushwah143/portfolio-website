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
  avatarUrl: "/Me.png.jpeg",
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
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
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
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
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
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
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
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
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
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
  ],
} as const;

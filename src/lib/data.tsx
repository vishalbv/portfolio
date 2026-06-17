import {
  siReact,
  siNextdotjs,
  siHtml5,
  siJavascript,
  siNx,
  siNodedotjs,
  siBun,
  siRedux,
  siJest,
  siMongodb,
  siTailwindcss,
  siGraphql,
  siGit,
  siMui,
  siTypescript,
} from "simple-icons";
import { Github, Linkedin, Mail } from "lucide-react";

export const techStack = [
  {
    name: "React.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siReact.path} />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siNextdotjs.path} />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siTypescript.path} />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 text-[var(--primary)]"
      >
        <path d={siNodedotjs.path} />
      </svg>
    ),
  },
  // Add more as needed
];

export const skills = [
  {
    name: "Frontend Development",
    years: 6,
    rating: 9,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "TailwindCSS",
      "NX Monorepo",
    ],
  },
  {
    name: "UI/UX Development",
    years: 5,
    rating: 8,
    technologies: [
      "Figma",
      "Material-UI",
      "Styled Components",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    name: "AI-Assisted Development",
    years: 2,
    rating: 9,
    technologies: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "OpenAI Codex",
      "ChatGPT",
    ],
  },
  {
    name: "Backend Development",
    years: 4,
    rating: 7,
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Java",
      "Bun.js",
    ],
  },
  {
    name: "DevOps & Tools",
    years: 3,
    rating: 7,
    technologies: ["Git", "Docker", "CI/CD", "Webpack"],
  },
  {
    name: "Mobile Development",
    years: 2,
    rating: 6,
    technologies: ["React Native", "Expo", "Android"],
  },
  {
    name: "Testing",
    years: 4,
    rating: 8,
    technologies: ["Jest", "React Testing Library"],
  },
];

export const languageSkills = [
  {
    name: "React.js",
    years: 6,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siReact.path} />
      </svg>
    ),
  },
  {
    name: "Next.js",
    years: 3,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siNextdotjs.path} />
      </svg>
    ),
  },
  {
    name: "Node.js",
    years: 3,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siNodedotjs.path} />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    years: 3,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siTypescript.path} />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    years: 6,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siJavascript.path} />
      </svg>
    ),
  },
  {
    name: "HTML/CSS",
    years: 6,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siHtml5.path} />
      </svg>
    ),
  },
  {
    name: "Bun.js",
    years: 1,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siBun.path} />
      </svg>
    ),
  },
  {
    name: "NX Monorepo",
    years: 2,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siNx.path} />
      </svg>
    ),
  },
  {
    name: "Redux",
    years: 4,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siRedux.path} />
      </svg>
    ),
  },
  {
    name: "Jest",
    years: 2,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siJest.path} />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    years: 3,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siMongodb.path} />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    years: 2,
    rating: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siTailwindcss.path} />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    years: 1,
    rating: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siGraphql.path} />
      </svg>
    ),
  },
  {
    name: "Material UI",
    years: 4,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siMui.path} />
      </svg>
    ),
  },
  {
    name: "Git",
    years: 6,
    rating: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-[var(--primary)]"
      >
        <path d={siGit.path} />
      </svg>
    ),
  },
];

export const projects = [
  {
    role: "Independent Developer",
    company: "Trading Application",
    location: "Personal Project",
    period: "2023 - Present",
    images: [
      "freelance/my-trade/a.png",
      "freelance/my-trade/b.png",
      "freelance/my-trade/c.png",
      "freelance/my-trade/d.png",
      "freelance/my-trade/e.png",
    ],
    responsibilities: [
      "Architected and delivered a full-stack algorithmic trading platform from zero — owning the complete product lifecycle including system design, UX/UI, frontend, and backend.",
      "Pioneered Bun.js as a high-throughput Node.js alternative for the API layer, achieving significant reductions in response latency and server resource consumption.",
      "Unified authentication and order management across multiple broker APIs (Fyers, Shoonya, FlatTrade), abstracting broker-specific complexity behind a single interface.",
      "Engineered a custom charting library from scratch with proprietary technical analysis tools — Fibonacci retracements, trend lines, RSI, and automated pattern detection.",
      "Built real-time P&L monitoring with WebSocket-driven live updates and voice alert notifications for stop-loss and profit-target triggers.",
      "Integrated a Telegram bot for remote trade management — enabling position control, real-time alerts, and app commands directly from mobile chat.",
      "Leveraged AI-assisted development tools — Claude Code, Cursor, and OpenAI Codex — to accelerate feature delivery, optimize algorithmic logic, and refactor performance-critical code paths.",
      "Delivered a production-grade UI with Next.js 14, shadcn/ui, and Tailwind CSS — fully typed with TypeScript for end-to-end type safety.",
      "Implemented Turborepo monorepo architecture for seamless type and utility sharing between frontend and backend, reducing duplication and improving DX.",
    ],
    technologies: [
      "Bun.js",
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "WebSocket",
      "Shadcn UI",
      "TailwindCSS",
      "Trading APIs",
      "Custom Charts",
      "Claude Code",
      "Cursor",
      "Turborepo",
    ],
    highlights: [
      {
        title: "Performance Optimization",
        description:
          "Leveraged Bun.js for superior backend performance, achieving faster execution times compared to traditional Node.js.",
      },
      {
        title: "Unified Trading Interface",
        description:
          "Created a seamless integration of multiple trading platforms with single-click authentication and unified order management.",
      },
      {
        title: "Custom Technical Analysis",
        description:
          "Developed proprietary charting tools with advanced features like Fibonacci patterns, trend analysis, and automated P&L tracking.",
      },
      {
        title: "Real-time Monitoring",
        description:
          "Implemented WebSocket-based real-time updates with voice alerts for critical trading events and P&L thresholds.",
      },
      {
        title: "AI-Enhanced Development",
        description:
          "Utilized AI tools to optimize code quality and implement sophisticated trading algorithms and analysis patterns.",
      },
      {
        title: "Modern Tech Stack",
        description:
          "Embraced cutting-edge technologies like Next.js 14, Shadcn, and Tailwind CSS for a robust and maintainable codebase.",
      },
      {
        title: "Quick Scalping Interface",
        description:
          "Developed an enhanced buy/sell window with hotkeys and single-click trading capabilities for rapid scalping operations.",
      },
      {
        title: "Monorepo Architecture",
        description:
          "Implemented Turborepo for efficient code sharing between frontend and backend, enabling seamless type sharing, utility functions, and improved development workflow.",
      },
    ],
  },

  {
    role: "Frontend Developer",
    company: "Paymadi Technologies",
    location: "Bangalore",
    period: "2024 - 2025",
    website: "https://www.paymadi.com/",
    displayUrl: "paymadi.com",
    appLinks: {
      mobile: "https://play.google.com/store/apps/details?id=com.paymadi",
      admin: "https://test.admin.paymadi.com/",
    },
    displayAppUrls: {
      mobile: "Play Store",
      admin: "admin.paymadi.com",
    },
    images: [
      "freelance/paymadi/a.png",
      "freelance/paymadi/b.png",
      "freelance/paymadi/c.png",
      "freelance/paymadi/d.png",
      "freelance/paymadi/e.png",
    ],
    responsibilities: [
      "Engineered responsive web and mobile interfaces for a fintech platform handling digital payments, credit workflows, and real-time financial data.",
      "Built a feature-rich admin dashboard using React-admin with configurable themes, dynamic data grids, and role-based layouts for internal operations.",
      "Implemented end-to-end credit card verification flows and payment gateway integrations with robust error handling and security best practices.",
      "Developed a scalable component library with full light/dark mode support, enabling consistent UI across products and accelerating feature development.",
      "Delivered mobile-first UI screens in React Native for the Android app, ensuring parity with web experience and smooth cross-platform performance.",
      "Integrated real-time data visualization dashboards with live charting and monitoring capabilities for financial metrics and transaction analytics.",
      "Architected a dynamic white-label theming engine supporting multi-tenant customization — enabling rapid client-specific deployments without code duplication.",
    ],
    technologies: [
      "React",
      "React Native",
      "React-admin",
      "Redux Toolkit",
      "Vite",
      "TypeScript",
      "SCSS Modules",
      "Theming",
    ],
    highlights: [
      {
        title: "Theme System",
        description:
          "Implemented comprehensive theming system supporting multiple color schemes, dark/light modes, and white-label customization",
      },
      {
        title: "Mobile UI",
        description:
          "Developed responsive mobile interfaces with React Native, ensuring consistent user experience across platforms",
      },
      {
        title: "Admin Interface",
        description:
          "Created customizable admin dashboard with dynamic layouts and configurable widgets using React-admin",
      },
      {
        title: "Component Library",
        description:
          "Built reusable component library with theme support, reducing development time and maintaining consistency",
      },
      {
        title: "Payment UI",
        description:
          "Designed and implemented intuitive payment flows and credit card verification interfaces",
      },
      {
        title: "Responsive Design",
        description:
          "Ensured perfect display and functionality across all device sizes with mobile-first approach",
      },
      {
        title: "White-label Solution",
        description:
          "Developed flexible theming system allowing easy customization for white-label deployments",
      },
      {
        title: "Performance",
        description:
          "Optimized application performance through efficient component rendering and state management",
      },
    ],
  },

  {
    role: "Frontend Developer",
    company: "OraCare Dentistry",
    location: "Plano, TX",
    period: "2024",
    website: "https://www.oracaredentistry.com/",
    displayUrl: "oracaredentistry.com",
    images: [
      "freelance/oracare/a.png",
      "freelance/oracare/b.png",
      "freelance/oracare/c.png",
    ],
    responsibilities: [
      "Designed and developed a modern dental clinic website using Next.js with SSR, optimizing for local SEO and achieving fast core web vitals scores.",
      "Implemented structured service pages covering Cosmetic Dentistry, Preventive Care, Restorative, Endodontics, Oral Surgery, and Periodontics with rich semantic markup.",
      "Built an intuitive patient appointment booking system with live scheduling integration, automated confirmation flows, and mobile-optimized UX.",
      "Engineered fully responsive layouts across mobile, tablet, and desktop breakpoints — delivering a seamless experience for all device types.",
      "Integrated interactive UI elements including service carousels, image galleries, and contact forms with real-time validation.",
      "Configured production domain and hosting infrastructure via GoDaddy, managing DNS, SSL, and deployment end to end.",
      "Maintained close collaboration with US-based client stakeholders, translating requirements into deliverables and shipping the project on time.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "SCSS Modules",
      "Responsive Design",
      "Figma",
      "Booking System",
      "SSR",
      "GoDaddy",
    ],
    highlights: [
      {
        title: "SEO Optimization",
        description:
          "Implemented SSR and semantic HTML structure to enhance search engine visibility for local dental services",
      },
      {
        title: "Booking Integration",
        description:
          "Developed user-friendly appointment scheduling system with automated confirmation",
      },
      {
        title: "Service Showcase",
        description:
          "Created detailed service sections with interactive elements to highlight dental procedures and specialties",
      },
      {
        title: "Location Integration",
        description:
          "Integrated maps and contact information for the Plano, TX location (7000 Preston Rd, Suite 400)",
      },
      {
        title: "Business Hours",
        description:
          "Implemented dynamic business hours display with special handling for weekend schedules",
      },
      {
        title: "Blog Integration",
        description:
          "Implemented a dynamic blog section showcasing dental health tips, procedures, and educational content to enhance patient engagement and SEO performance.",
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "UI Development Projects",
    location: "Freelance",
    period: "2022 - 2023",
    images: [
      "freelance/others/a.png",
      "freelance/others/b.png",
      "freelance/others/c.png",
      "freelance/others/d.png",
    ],
    responsibilities: [
      "Shipped 20+ production web applications for a long-term client, spanning static sites, dynamic SPAs, and data-heavy dashboards using React.js and SCSS.",
      "Delivered diverse product types — algorithmic trading platforms, fintech dashboards, admin portals, and marketing landing pages — demonstrating broad domain adaptability.",
      "Translated high-fidelity Figma and design mockups into pixel-perfect, responsive UIs with cross-browser compatibility and accessibility compliance.",
      "Engineered a reusable component library — including a fully custom date picker, form controls, and layout primitives — significantly reducing per-project development time.",
      "Designed and implemented multiple admin dashboards with dynamic data tables, filtering, and role-based views aligned with modern UI/UX principles.",
      "Upheld high code quality standards through consistent use of modular SCSS architecture, component documentation, and Git-based version control workflows.",
    ],
    technologies: [
      "React.js",
      "SCSS Modules",
      "TypeScript",
      "Responsive Design",
      "Component Libraries",
      "Git",
      "Custom UI Components",
    ],
    highlights: [
      {
        title: "Rapid Development",
        description:
          "Successfully delivered 20+ projects with quick turnaround times while maintaining high code quality",
      },
      {
        title: "Diverse Applications",
        description:
          "Created various types of applications including trading platforms, admin dashboards, and business websites",
      },
      {
        title: "Component Libraries",
        description:
          "Built reusable component libraries including custom date pickers and UI elements for faster development",
      },
      {
        title: "Version Control",
        description:
          "Managed multiple repositories efficiently using Git, maintaining clean commit history and documentation",
      },
      {
        title: "Responsive Design",
        description:
          "Implemented mobile-first responsive designs ensuring perfect display across all device sizes",
      },
      {
        title: "Code Quality",
        description:
          "Maintained high code quality standards with modular SCSS and reusable React components",
      },
    ],
    projectList: [
      "Trading Platforms (my-trade, trade-app)",
      "Admin Dashboards (admin-web, payouts-web)",
      "Business Websites (dentist-app, oracare)",
      "Financial Applications (orange-cards)",
      "Custom Components (date-picker)",
      "Mobile Applications (mobile)",
      "Landing Pages (landing)",
      "And many more proprietary projects",
    ],
  },
];

export const experiences = [
  {
    company: "ConcertAI",
    location: "Bangalore",
    images: [
      "concertai/e.png",
      "concertai/j.png",
      "concertai/f.png",
      "concertai/g.png",
      "concertai/h.png",
      "concertai/i.png",
      "concertai/a.png",

      "concertai/c.png",
    ],
    roles: [
      {
        role: "Lead Software Engineer",
        period: "2024 - Present",
        responsibilities: [
          "Spearheaded the frontend modernization initiative — decomposing a legacy Django monolith into a decoupled architecture with a standalone React/Next.js SPA and RESTful API backend, reducing time-to-deploy by over 40%.",
          "Engineered Nginx reverse proxy configuration and end-to-end CI/CD pipelines, cutting release cycle times and eliminating manual deployment steps.",
          "Championed adoption of Tailwind CSS and shadcn/ui, establishing a reusable component library and unified design system that accelerated feature delivery across teams.",
          "Drove AI-assisted development practices using Claude Code, Cursor, and GitHub Copilot / Codex — enabling large-scale legacy code refactoring, measurable performance gains, and a significant reduction in developer toil.",
        ],
        technologies: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "shadcn/ui",
          "Nginx",
          "CI/CD",
          "AI-Assisted Dev",
        ],
      },
      {
        role: "Senior Software Developer",
        period: "2023 - 2024",
        responsibilities: [
          "Engineered an AI Prompt interface with full REST API integration, delivering capabilities including contextual note-taking, prompt versioning, and saved-prompt management.",
          "Built rich interactive UI components leveraging Material UI and Ant Design — covering drag-and-drop workflows, configurable widgets, dynamic menus, and complex form systems.",
          "Defined and executed frontend performance strategy, achieving a 15% improvement in core web vitals through code splitting, lazy loading, and bundle optimization.",
          "Led a comprehensive application refactor — migrating state management to Redux Toolkit, restructuring into a micro-frontend architecture, integrating Mixpanel analytics, and upgrading the full NPM dependency tree.",
          "Delivered production-grade features in Next.js and React, enforcing best practices around component design, SSR/SSG patterns, and maintainable code architecture.",
        ],
        technologies: [
          "React.js",
          "Next.js",
          "Redux Toolkit",
          "Material UI",
          "Ant Design",
          "Micro-frontend",
          "Mixpanel",
        ],
      },
    ],
  },
  {
    role: "Software Developer",
    company: "Analyttica Datalab",
    location: "Bangalore",
    period: "2021 - 2023",
    images: [
      "analyttica/a.png",
      "analyttica/b.png",
      "analyttica/c.png",
      "analyttica/d.png",
    ],
    responsibilities: [
      "Translated complex customer requirements into scalable technical solutions through structured discovery, stakeholder alignment, and iterative delivery.",
      "Architected and executed the full migration of a monolithic application to a distributed micro-frontend architecture using NX Monorepo, improving team autonomy and build performance.",
      "Built the product frontend from the ground up, establishing coding standards, folder conventions, and reusable component patterns adopted across the engineering team.",
      "Collaborated cross-functionally with UX designers, backend engineers, QA, and senior leadership to deliver cohesive product experiences on schedule.",
      "Led and mentored a team of four engineers — decomposing epics into sprint-ready tasks, conducting pair programming sessions, and driving consistent code quality through structured code reviews.",
      "Championed continuous improvement of React.js practices through internal knowledge-sharing sessions, workshops, and hands-on implementation of emerging best practices in production.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "NX Monorepo",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Redux Toolkit",
      "Material UI",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    period: "2018 - 2021",
    images: ["tcs/a.png", "tcs/b.png", "tcs/c.png"],
    responsibilities: [
      "Designed and built analytical dashboards surfacing insights from large-scale Hadoop and Spark data pipelines, enabling data-driven decision-making for stakeholders.",
      "Applied object-oriented design principles to deliver maintainable, modular frontend codebases aligned with enterprise engineering standards.",
      "Produced detailed flowcharts and solution specification documents, improving cross-team clarity and reducing ambiguity in feature delivery.",
      "Implemented fully responsive layouts using SASS, mixins, and modern CSS — ensuring consistent experiences across devices and screen sizes.",
      "Self-initiated mastery of React.js from the ground up, progressing from self-study to owning production feature development within months.",
      "Built complex, interactive data visualizations using D3.js and Chart.js, transforming raw analytical data into intuitive reporting interfaces.",
      "Led the migration of legacy AngularJS modules to React, preserving full feature parity while modernizing the component architecture.",
    ],
    technologies: [
      "AngularJS",
      "React.js",
      "D3.js",
      "Spring Boot",
      "Java",
      "SASS",
      "Hadoop",
      "PostgreSQL",
    ],
  },
];

export const education = [
  {
    degree: "Bachelors of Engineering",
    institution: "Malnad College Of Engineering, Hassan",
    year: "2018",
    score: "8.73 CGPA",
  },
  {
    degree: "Pre-university",
    institution: "Poorna Prajna College, Udupi",
    year: "2014",
    score: "86%",
  },
  {
    degree: "SSLC",
    institution: "Government High School, Sonale",
    year: "2012",
    score: "90%",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vishalbv",
    icon: <Github className="!h-5 !w-5" />,
    tooltip: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-shanubhog/",
    icon: <Linkedin className="!h-5 !w-5" />,
    tooltip: "LinkedIn",
  },
  {
    name: "Telegram",
    href: "https://t.me/gogreen000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="!h-5 !w-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    tooltip: "Telegram",
  },
  {
    name: "Email",
    href: "mailto:vishalbv23@gmail.com",
    icon: <Mail className="!h-5 !w-5" />,
    tooltip: "Email: vishalbv23@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+917760873718",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="!h-5 !w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    tooltip: "Phone: +91 776-087-3718",
  },
];

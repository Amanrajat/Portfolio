export const profile = {
  name: "Aman Srivastav",
  initials: "AS",
  role: "Software Developer",
  tagline: "Building scalable systems & intelligent products.",
  subheadline:
    "Python-focused developer specializing in Django, REST APIs, backend architecture and AI-powered applications.",
  positioning:
    "Software Developer focused on building scalable backend systems, production APIs and AI-powered applications.",
  email: "amancode2000@gmail.com",
  phone: "+91 7068118139",
  phoneHref: "tel:+917068118139",
  emailHref: "mailto:amancode2000@gmail.com",
  github: "https://github.com/Amanrajat",
  githubUsername: "Amanrajat",
  linkedin: "https://www.linkedin.com/in/aman-srivastav-3bb485223/",
  resumeUrl: "/resume/aman-srivastav-resume.pdf",
  currentCompany: {
    name: "WhatBytes",
    url: "https://www.whatbytes.com/",
    description:
      "WhatBytes is a venture studio that partners with startups and founders on business validation, product design and development, and infrastructure and AI solutions.",
  },
  about: {
    paragraph:
      "I'm a backend-focused software developer working on production APIs, data-driven systems and AI-powered applications. My work centers on Python and Django — designing REST APIs, authentication and authorization layers, and database-backed services that hold up under real usage. Alongside backend work, I build full-stack products end-to-end, from Django/DRF services to React frontends, and I've shipped a live PDF-processing platform used in production.",
    highlights: [
      {
        title: "Backend Engineering",
        description:
          "Designing RESTful APIs, custom middleware, authentication and authorization systems with Django and DRF.",
      },
      {
        title: "API Development",
        description:
          "Building secure, validated, well-documented APIs — JWT auth, role-based access control, filtering and pagination.",
      },
      {
        title: "Database & Performance",
        description:
          "Modeling relational schemas and optimizing SQL/MySQL/PostgreSQL queries for production response times.",
      },
      {
        title: "AI-Powered Applications",
        description:
          "Integrating LLMs and document-processing pipelines (OCR, PDF parsing, text extraction) into real products.",
      },
    ],
  },
  quickFacts: [
    "Python",
    "Django / DRF",
    "REST APIs",
    "PostgreSQL / MySQL",
    "AI-Powered Apps",
    "Production Systems",
  ],
} as const;

export const seoConfig = {
  // Set NEXT_PUBLIC_SITE_URL to the real production domain once deployed (see .env.example).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Aman Srivastav | Software Developer | Python & Django",
  description:
    "Aman Srivastav is a Software Developer specializing in Python, Django and REST APIs — building scalable backend systems, production-ready APIs, and AI-powered applications. Currently at WhatBytes.",
  keywords: [
    "Aman Srivastav",
    "Software Developer",
    "Backend Developer",
    "Python Developer",
    "Django Developer",
    "Django REST Framework",
    "API Engineer",
    "Software Engineer Portfolio",
  ],
} as const;

import type { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    id: "whatbytes",
    company: "WhatBytes",
    companyUrl: "https://www.whatbytes.com/",
    role: "Software Developer",
    period: "Present",
    current: true,
    summary:
      "Currently working as a Software / Backend Developer at WhatBytes, a venture studio building production software and digital products for startups and founders.",
    highlights: [
      "Building and maintaining production software as part of the engineering team.",
      "Working across backend services and API development for client products.",
    ],
    technologies: ["Python", "Django", "REST APIs", "PostgreSQL"],
  },
  {
    id: "chalo-chale",
    company: "Chalo Chale",
    role: "Backend Developer",
    period: "May 2025 – Jan 2026",
    current: false,
    summary:
      "Built and maintained backend services and APIs, focusing on performance, authentication and reliable request handling under real production traffic.",
    highlights: [
      "Built RESTful APIs using Python, Django and Django REST Framework serving 10K+ API requests.",
      "Developed custom Django middleware for authentication, logging, and request/response handling.",
      "Optimized SQL/MySQL queries, improving average API response time by approximately 30%.",
      "Implemented JWT authentication and role-based access control (RBAC).",
      "Coordinated with frontend teams on API contracts and integration.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL",
      "JWT",
      "RBAC",
    ],
  },
];

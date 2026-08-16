import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "editdocsnow",
    slug: "editdocsnow",
    title: "EditDocsNow",
    tagline: "Live PDF productivity platform",
    description:
      "An online PDF productivity platform for editing, organizing, compressing, converting and OCR-processing documents — directly in the browser.",
    longDescription:
      "EditDocsNow is a full-stack document platform that lets users edit, merge, split, organize, compress, convert and OCR-process PDFs without installing anything. The frontend is a Next.js/TypeScript application; the backend is a Django REST API that extracts editable text blocks from a PDF using PyMuPDF, lets the frontend edit them, and regenerates a new PDF with the changes applied.",
    categories: ["Full Stack", "PDF / Document"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "PyMuPDF",
      "PostgreSQL",
      "OCR",
    ],
    githubUrl: "https://github.com/Amanrajat/EDITDOCSNOW-FE",
    secondaryGithubUrl: "https://github.com/Amanrajat/EDITDOCSNOW-BE",
    secondaryGithubLabel: "Backend repo",
    liveUrl: "https://editdocsnow-fe.vercel.app/",
    featured: true,
    year: "2026",
    status: "Live Product",
    highlights: [
      "PDF editing with text-block extraction and regeneration",
      "Merge, split, organize, remove pages, rotate and crop",
      "Batch and single-file compression",
      "PDF ⇄ Office / image / Markdown / PDF-A conversion",
      "OCR for scanned documents",
    ],
    caseStudy: {
      problem:
        "Most PDF tools require a desktop install, an account, or a subscription just to make small edits, merge a few files, or pull text out of a scanned document. There was room for a fast, no-signup, browser-based tool that covers the everyday PDF workflows people actually need.",
      solution:
        "A Next.js frontend gives users an instant, no-install editing surface, backed by a Django REST API that does the real document work: extracting text blocks and layout data from a PDF with PyMuPDF, letting the user edit them, and regenerating a clean output PDF. Independent apps handle merge, split, compression, conversion and OCR, each exposed through a consistent API.",
      architecture: [
        "Next.js/TypeScript frontend deployed on Vercel, calling the Django API for every document operation.",
        "Django 5 + Django REST Framework backend, organized into focused apps (docs_editor, pdf_merge, and siblings for split/compress/convert/OCR).",
        "PyMuPDF (fitz) for PDF text-block extraction and regeneration — redacting original text and reinserting edited content in place.",
        "A shared `apps/common` layer for upload validation (size, extension, magic bytes, corruption and page-count checks) and a consistent API response envelope.",
        "PostgreSQL as the primary datastore, with django-cors-headers for the separately-hosted frontend and python-decouple for environment-based configuration.",
      ],
      challenges: [
        "Preserving font, position and styling fidelity when redacting and reinserting edited text blocks into an existing PDF layout.",
        "Validating arbitrary user-uploaded PDFs safely — checking magic bytes, page counts and corruption before any processing runs.",
        "Keeping a consistent request/response contract across many independent document-processing features (edit, merge, split, compress, convert, OCR).",
      ],
      impact:
        "Deployed and publicly usable today at editdocsnow-fe.vercel.app, exposing 20+ PDF tools plus OCR in a single no-signup workflow.",
    },
  },
  {
    id: "finance-backend",
    slug: "finance-management-backend",
    title: "Finance Management Backend",
    tagline: "RBAC-secured finance & analytics API",
    description:
      "A Django REST Framework backend for managing financial records and user portfolios, with JWT auth, role-based access control and analytics filtering.",
    longDescription:
      "A scalable RESTful API for financial record management, built around a three-tier role system (Admin, Analyst, Viewer), per-user data isolation, and advanced filtering across category, type and date range — with Swagger-documented endpoints.",
    categories: ["Backend"],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "JWT",
      "RBAC",
      "Swagger / OpenAPI",
    ],
    githubUrl: "https://github.com/Amanrajat/Finance_Backend",
    featured: false,
    year: "2026",
    status: "Completed",
    highlights: [
      "JWT authentication with access and refresh tokens",
      "Three-tier RBAC: Admin, Analyst, Viewer",
      "Per-user data isolation on financial records",
      "Filtering by category, type and date range, with pagination and throttling",
    ],
  },
  {
    id: "pdf-resume-editor",
    slug: "pdf-resume-editor",
    title: "PDF Resume Editor",
    tagline: "Click-to-edit PDF resume tool",
    description:
      "A full-stack app for editing PDF resumes directly in the browser — click any text block, restyle it, and download the regenerated PDF.",
    longDescription:
      "Upload a PDF resume and the app extracts every text block with its position, font, size and color. Users click blocks directly on the rendered PDF to edit text, change fonts, resize, recolor, bold or italicize, then regenerate and download the final file.",
    categories: ["PDF / Document", "Full Stack"],
    technologies: [
      "Django",
      "Django REST Framework",
      "PyMuPDF",
      "PDF.js",
      "SQLite",
    ],
    githubUrl: "https://github.com/Amanrajat/PDF_RESUME_EDITOR",
    featured: false,
    year: "2026",
    status: "Completed",
    highlights: [
      "Text-block extraction with position, font and color metadata",
      "Interactive overlay editor on top of a PDF.js-rendered viewer",
      "Live preview with font, size and color controls",
      "Server-side PDF regeneration with all edits applied",
    ],
  },
  {
    id: "pdf-chat-bot",
    slug: "ai-resume-tailoring-chatbot",
    title: "AI Resume Tailoring Chatbot",
    tagline: "LLM-powered resume tailoring assistant",
    description:
      "A ChatGPT-style chatbot that tailors an uploaded resume to a pasted job description and generates an ATS-optimized version for download.",
    longDescription:
      "A Django + DRF backend paired with a React (Vite) frontend. Users chat naturally, upload or paste a resume, paste a job description, and the app uses an LLM to produce a tailored, ATS-friendly resume available as PDF, DOCX or TXT.",
    categories: ["AI", "PDF / Document"],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "PyMuPDF",
      "ReportLab",
      "LLM Integration",
    ],
    githubUrl: "https://github.com/Amanrajat/Pdf_Chatt_Bot",
    featured: false,
    year: "2026",
    status: "Completed",
    highlights: [
      "Chat-style interface for resume tailoring",
      "Resume parsing from PDF/DOCX upload or manual paste",
      "LLM-agnostic design (OpenAI / Gemini / Claude / local LLM)",
      "Export tailored resumes as PDF, DOCX or TXT",
    ],
  },
  {
    id: "urbanbasket",
    slug: "urbanbasket-ecommerce",
    title: "UrbanBasket E-Commerce",
    tagline: "Full-stack e-commerce platform",
    description:
      "A full-stack e-commerce application with a Django REST backend and a React/Redux frontend.",
    longDescription:
      "UrbanBasket pairs a Django + Django REST Framework backend (MySQL-backed) with a React frontend using Redux for state management, covering product catalog, cart and order flows end to end.",
    categories: ["Full Stack", "E-commerce"],
    technologies: ["Django", "Django REST Framework", "MySQL", "React", "Redux"],
    githubUrl: "https://github.com/Amanrajat/UrbanBasket-ECOMMMERCE",
    featured: false,
    year: "2025",
    status: "Completed",
    highlights: [
      "Django REST Framework API backed by MySQL",
      "React + Redux frontend for the storefront",
      "End-to-end product, cart and order flows",
    ],
  },
  {
    id: "multi-tenant-ecommerce",
    slug: "multi-tenant-ecommerce-backend",
    title: "Multi-Tenant E-Commerce Backend",
    tagline: "Tenant-isolated marketplace API",
    description:
      "A multi-tenant e-commerce backend where independent vendors run isolated stores on shared infrastructure.",
    longDescription:
      "Each tenant manages its own products and orders, fully isolated via tenant-scoped data access. JWT tokens carry tenant and role claims (OWNER, STAFF, CUSTOMER), and a tenant-aware middleware scopes every request.",
    categories: ["Backend", "E-commerce"],
    technologies: ["Django", "Django REST Framework", "JWT", "MySQL"],
    githubUrl: "https://github.com/Amanrajat/Multi-Tenant-E-Commerce",
    featured: false,
    year: "2025",
    status: "Completed",
    highlights: [
      "Tenant onboarding API provisioning a tenant and its owner",
      "JWT auth carrying custom tenant_id and role claims",
      "Role-based access across tenant-scoped endpoints",
    ],
  },
  {
    id: "ecommerce-api",
    slug: "ecommerce-api",
    title: "E-Commerce REST API",
    tagline: "Real-time order-status API",
    description:
      "A Django REST API for e-commerce with JWT auth, product/category management, and real-time order-status updates over WebSockets.",
    longDescription:
      "Covers product and category management, a cart and order system, and real-time order-status notifications via Django Channels and WebSockets, with pagination and product filtering throughout.",
    categories: ["Backend", "E-commerce"],
    technologies: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Django Channels",
      "JWT",
    ],
    githubUrl: "https://github.com/Amanrajat/Ecommerce-api",
    featured: false,
    year: "2025",
    status: "Completed",
    highlights: [
      "JWT-authenticated product, cart and order endpoints",
      "Real-time order-status updates via Django Channels / WebSockets",
      "Pagination and product filtering",
    ],
  },
  {
    id: "mergixlabs-backend",
    slug: "mergixlabs-backend",
    title: "MergixLabs Backend",
    tagline: "Production Django template with AI & scheduling APIs",
    description:
      "A production-grade Django REST Framework backend template built for the MergixLabs team, with JWT auth, Google Calendar-backed meeting scheduling, and a Pinecone/Gemini-powered document-ingestion app.",
    longDescription:
      "A reusable Django backend template used as the base for MergixLabs' projects. Ships with JWT authentication (login/signup/refresh), a meeting-scheduling API that orchestrates Google Calendar availability, Google Meet link creation and Celery-driven confirmation/reminder emails, and a fintech-focused AI app that ingests documents into Pinecone for retrieval alongside Gemini. Deploys to Render as a multi-service Docker blueprint (web, Celery worker, Celery beat, Redis, PostgreSQL).",
    categories: ["Backend", "AI"],
    technologies: [
      "Django",
      "Django REST Framework",
      "JWT",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Django Channels",
      "Google Calendar API",
      "Pinecone",
      "Gemini",
      "Docker",
    ],
    githubUrl: "https://github.com/Mergix-Labs/MergixLabs-be",
    featured: false,
    year: "2026",
    status: "In Progress",
    highlights: [
      "JWT authentication with login, signup and token refresh",
      "Meeting scheduling with live Google Calendar availability and auto-generated Google Meet links",
      "Celery-driven confirmation, reminder and cancellation emails",
      "Fintech AI app ingesting documents into Pinecone for retrieval alongside Gemini",
      "Multi-service Docker deployment on Render (web, Celery worker, Celery beat, Redis, Postgres)",
    ],
  },
  {
    id: "desktop-assistant",
    slug: "desktop-ai-assistant",
    title: "Desktop AI Assistant",
    tagline: "Python voice-command assistant",
    description:
      "A Python voice assistant (J.A.R.V.I.S-style) that handles voice commands, app control, web search and task management.",
    longDescription:
      "A desktop automation assistant using speech recognition to open/close applications, run web and Wikipedia searches, manage a task list, send WhatsApp messages and emails, and take screenshots on voice command.",
    categories: ["Automation"],
    technologies: ["Python", "Speech Recognition", "Automation Scripting"],
    githubUrl: "https://github.com/Amanrajat/Python-Project",
    featured: false,
    year: "2025",
    status: "Completed",
    highlights: [
      "Voice command recognition to trigger actions",
      "Application launch/close, web and Wikipedia search",
      "Task management, reminders and screenshot capture",
    ],
  },
];

export const projectCategories = [
  "All",
  "Backend",
  "Full Stack",
  "AI",
  "PDF / Document",
  "E-commerce",
  "Automation",
] as const;

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getOtherProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

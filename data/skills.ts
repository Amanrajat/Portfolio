export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C", "C++"],
  },
  {
    category: "Backend",
    items: ["Django", "Django REST Framework", "REST APIs", "Django Channels"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "SQL", "SQLite"],
  },
  {
    category: "Security",
    items: ["JWT", "RBAC", "CORS", "Auth & Middleware"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Swagger / OpenAPI"],
  },
  {
    category: "AI / Automation",
    items: ["LLM Integration", "OCR Pipelines", "Python Automation"],
  },
];

export interface Capability {
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    title: "Backend Architecture",
    description:
      "Designing RESTful APIs, authentication systems, custom middleware and backend services built to hold up in production.",
  },
  {
    title: "API Engineering",
    description:
      "Building secure, validated and maintainable APIs with structured serialization, filtering and pagination.",
  },
  {
    title: "Database Engineering",
    description:
      "Modeling relational schemas and optimizing SQL queries for correctness and response-time performance.",
  },
  {
    title: "AI Applications",
    description:
      "Building AI-powered applications — LLM integrations, resume/document intelligence, and automation workflows.",
  },
  {
    title: "Document Processing",
    description:
      "Building PDF and document-processing workflows: text extraction, editing, regeneration, conversion and OCR.",
  },
  {
    title: "Production Engineering",
    description:
      "Authentication, authorization, error handling and deployment-oriented development for real users.",
  },
];

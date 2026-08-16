export type ProjectCategory =
  | "Backend"
  | "Full Stack"
  | "AI"
  | "PDF / Document"
  | "E-commerce"
  | "Automation";

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  impact: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  categories: ProjectCategory[];
  technologies: string[];
  githubUrl?: string;
  secondaryGithubUrl?: string;
  secondaryGithubLabel?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
  status: "Live Product" | "Completed" | "In Progress";
  highlights: string[];
  caseStudy?: ProjectCaseStudy;
}

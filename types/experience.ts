export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

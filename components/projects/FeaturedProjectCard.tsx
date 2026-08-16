import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/icons";

const pillars = [
  { label: "Frontend", value: "Next.js / TypeScript" },
  { label: "Backend", value: "Django REST Framework" },
  { label: "Document Processing", value: "PyMuPDF" },
  { label: "OCR", value: "Scanned document text extraction" },
];

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-bg-elevated">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.25]" />

      <div className="relative p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.status}</Badge>
          <Badge>PDF Platform</Badge>
          <span className="mono-nums text-xs text-fg-subtle">{project.year}</span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.label} className="rounded-xl border border-border bg-bg p-4">
              <p className="mono-nums text-[11px] uppercase tracking-wide text-fg-subtle">
                {p.label}
              </p>
              <p className="mt-1.5 text-sm font-medium text-fg">{p.value}</p>
            </div>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-fg-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live Product <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          )}
          <ButtonLink href={`/projects/${project.slug}`} variant="secondary">
            Read Case Study
          </ButtonLink>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> Frontend repo
            </a>
          )}
          {project.secondaryGithubUrl && (
            <a
              href={project.secondaryGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> {project.secondaryGithubLabel ?? "Backend repo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

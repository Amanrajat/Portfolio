import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            <h3 className="text-base font-semibold text-fg">{project.title}</h3>
          </Link>
          <p className="mt-1 text-sm text-fg-muted">{project.tagline}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-fg-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech} className="text-[11px]">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge className="text-[11px]">+{project.technologies.length - 4}</Badge>
        )}
      </div>

      <div className="mt-auto pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          View case study <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

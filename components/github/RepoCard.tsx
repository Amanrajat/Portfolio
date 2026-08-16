import { Star, GitFork, ArrowUpRight } from "lucide-react";
import type { GitHubRepo } from "@/types/github";
import { formatDate } from "@/lib/utils";

export function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-fg group-hover:text-accent">
          {repo.name}
        </h3>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-subtle transition-colors group-hover:text-accent" />
      </div>

      <p className="mt-2 line-clamp-2 flex-1 text-sm text-fg-muted">
        {repo.description ?? "No description provided."}
      </p>

      <div className="mono-nums mt-4 flex items-center justify-between text-xs text-fg-subtle">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3" /> {repo.stargazersCount}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="h-3 w-3" /> {repo.forksCount}
          </span>
        </div>
        <span>{formatDate(repo.updatedAt)}</span>
      </div>
    </a>
  );
}

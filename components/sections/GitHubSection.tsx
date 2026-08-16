import { ArrowUpRight, GitFork } from "lucide-react";
import Image from "next/image";
import { getGitHubData } from "@/lib/github";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RepoCard } from "@/components/github/RepoCard";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/icons";

export async function GitHubSection() {
  const { profile: ghProfile, repos, source } = await getGitHubData();
  const topRepos = repos.slice(0, 6);

  return (
    <section id="github" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Open Source & GitHub"
            title="What I'm shipping in public"
            className="mb-0"
          />
          {source === "fallback" && (
            <Badge className="text-[11px]">Showing cached data</Badge>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {ghProfile && (
            <Image
              src={ghProfile.avatarUrl}
              alt=""
              width={40}
              height={40}
              className="rounded-full border border-border-strong"
            />
          )}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-bg-elevated px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" /> @{profile.githubUsername}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          {ghProfile && (
            <span className="mono-nums flex items-center gap-1.5 text-sm text-fg-muted">
              <GitFork className="h-4 w-4" /> {ghProfile.publicRepos} public repos
            </span>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </Container>
    </section>
  );
}

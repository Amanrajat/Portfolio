import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildMetadata, absoluteUrl } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project not found" });

  return buildMetadata({
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/projects/${project.slug}`),
      title: project.title,
      description: project.description,
    },
  });
}

export default async function ProjectCaseStudyPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <article className="py-32 sm:py-40">
      <Container className="max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.status}</Badge>
          {project.categories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
          <span className="mono-nums text-xs text-fg-subtle">{project.year}</span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-fg-muted">{project.tagline}</p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live Product <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          )}
          {project.githubUrl && (
            <ButtonLink
              href={project.githubUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-4 w-4" />{" "}
              {project.secondaryGithubUrl ? "Frontend repo" : "View on GitHub"}
            </ButtonLink>
          )}
          {project.secondaryGithubUrl && (
            <ButtonLink
              href={project.secondaryGithubUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-4 w-4" /> {project.secondaryGithubLabel}
            </ButtonLink>
          )}
        </div>

        <p className="mt-10 text-base leading-relaxed text-fg-muted">
          {project.longDescription}
        </p>

        {cs && (
          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-lg font-semibold text-fg">Problem</h2>
              <p className="mt-2 leading-relaxed text-fg-muted">{cs.problem}</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-fg">Solution</h2>
              <p className="mt-2 leading-relaxed text-fg-muted">{cs.solution}</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-fg">Architecture</h2>
              <ul className="mt-3 space-y-2">
                {cs.architecture.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-fg">Technical Challenges</h2>
              <ul className="mt-3 space-y-2">
                {cs.challenges.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-fg">Impact</h2>
              <p className="mt-2 leading-relaxed text-fg-muted">{cs.impact}</p>
            </section>
          </div>
        )}

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-fg">Key Features</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-fg">Technology Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </section>
      </Container>
    </article>
  );
}

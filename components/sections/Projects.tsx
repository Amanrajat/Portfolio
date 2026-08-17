import { ArrowUpRight } from "lucide-react";
import { getFeaturedProject, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";

// Curated trio shown on the home page teaser — kept separate from the full /projects grid.
const HOME_SHOWCASE_SLUGS = [
  "desktop-ai-assistant",
  "mergixlabs-backend",
  "multi-tenant-ecommerce-backend",
];

export function Projects() {
  const featured = getFeaturedProject();
  const others = HOME_SHOWCASE_SLUGS.map(getProjectBySlug).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Real Products"
          description="A featured live product, plus a curated set of backend, full-stack and AI projects."
        />

        <div className="mt-10">
          <FeaturedProjectCard project={featured} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/projects" variant="secondary">
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

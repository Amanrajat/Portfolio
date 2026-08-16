import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Backend, full-stack and AI projects by Aman Srivastav — including EditDocsNow, a live PDF processing platform, and production Django/DRF APIs.",
  alternates: { canonical: "/projects" },
});

export default function ProjectsPage() {
  return (
    <div className="py-32 sm:py-40">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Everything I've built"
          description="Filter by category to explore backend services, full-stack apps, AI tools and automation projects — all backed by real GitHub repositories."
        />
        <div className="mt-10">
          <ProjectsExplorer projects={projects} />
        </div>
      </Container>
    </div>
  );
}

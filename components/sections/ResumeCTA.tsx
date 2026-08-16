import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function ResumeCTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-bg-elevated px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent-soft text-accent">
            <FileText className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Want the detailed version?
          </h2>
          <p className="max-w-md text-base text-fg-muted">
            Explore my experience, projects and technical background in my resume.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              View Resume
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="secondary" download>
              <Download className="h-4 w-4" /> Download Resume
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

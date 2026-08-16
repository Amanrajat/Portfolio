import {
  Cpu,
  Database,
  FileCog,
  Lock,
  Sparkles,
  Workflow,
} from "lucide-react";
import { capabilities } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Workflow, Lock, Database, Sparkles, FileCog, Cpu];

export function Capabilities() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Engineering Capabilities"
          title="What I bring to a team"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={cap.title}
                className="group rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-accent/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent transition-colors group-hover:border-accent/40">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-fg">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

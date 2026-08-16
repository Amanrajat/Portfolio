import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Focused on backend systems that hold up in production" />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <p className="text-lg leading-relaxed text-fg-muted">
            {profile.about.paragraph}
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {profile.about.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-bg-elevated p-5 transition-colors hover:border-accent/30"
              >
                <h3 className="text-sm font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

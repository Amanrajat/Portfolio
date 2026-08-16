import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function TrustStats() {
  return (
    <section className="border-y border-border bg-surface/40">
      <Container>
        <div className="grid grid-cols-2 divide-y divide-border sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:grid-cols-6">
          {profile.quickFacts.map((fact) => (
            <div
              key={fact}
              className="flex items-center justify-center px-4 py-5 text-center"
            >
              <span className="mono-nums text-xs font-medium tracking-wide text-fg-muted sm:text-sm">
                {fact}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

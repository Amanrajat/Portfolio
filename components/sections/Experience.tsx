"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Current role first, followed by prior backend experience."
        />

        <div className="mt-12 space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative grid grid-cols-1 gap-6 rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8 lg:grid-cols-[220px_1fr]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-fg">{item.company}</h3>
                  {item.companyUrl && (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${item.company} website`}
                      className="text-fg-subtle transition-colors hover:text-accent"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-fg-muted">{item.role}</p>
                <p className="mono-nums mt-2 text-xs text-fg-subtle">{item.period}</p>
                {item.current && (
                  <Badge variant="accent" className="mt-3">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    Current
                  </Badge>
                )}
              </div>

              <div>
                <p className="text-sm leading-relaxed text-fg-muted">{item.summary}</p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-fg-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

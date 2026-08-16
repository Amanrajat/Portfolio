"use client";

import { motion } from "framer-motion";
import { Sparkline } from "@/components/sections/hero/Sparkline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const lanes = [
  { label: "REQUEST THROUGHPUT", seed: 3, tone: "text-up" as const, delta: "steady" },
  { label: "API LATENCY", seed: 11, tone: "text-accent-2" as const, delta: "optimized" },
  { label: "DATABASE LOAD", seed: 19, tone: "text-fg-muted" as const, delta: "balanced" },
];

export function SystemsIBuild() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Systems I Build"
          title="Backend systems, visualized"
          description="A stylized look at the kind of telemetry backend systems run on — illustrative motion graphics, not live or financial data."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {lanes.map((lane, i) => (
            <motion.div
              key={lane.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-bg-elevated p-5"
            >
              <div className="mono-nums flex items-center justify-between text-[11px] text-fg-subtle">
                <span>{lane.label}</span>
                <span className={lane.tone}>{lane.delta}</span>
              </div>
              <div className="mt-3">
                <Sparkline seed={lane.seed} height={70} width={360} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

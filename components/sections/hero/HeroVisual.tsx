"use client";

import { motion } from "framer-motion";
import { Sparkline } from "@/components/sections/hero/Sparkline";

const statusRows = [
  { label: "API STATUS", value: "ONLINE", live: true },
  { label: "BACKEND", value: "DJANGO" },
  { label: "DATABASE", value: "POSTGRESQL" },
  { label: "AUTH", value: "JWT" },
  { label: "DEPLOY", value: "VERCEL" },
];

const floatingLabels = [
  { label: "REST API", top: "8%", left: "-6%", delay: 0 },
  { label: "DRF", top: "62%", left: "-10%", delay: 0.4 },
  { label: "OCR", top: "20%", right: "-8%", delay: 0.2 },
  { label: "PostgreSQL", top: "78%", right: "-4%", delay: 0.6 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {floatingLabels.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: item.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay },
          }}
          className="mono-nums absolute z-10 hidden rounded-full border border-border-strong bg-bg-elevated px-3 py-1 text-[11px] text-fg-muted shadow-sm sm:block"
          style={{ top: item.top, left: item.left, right: item.right }}
        >
          {item.label}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-border-strong bg-bg-elevated shadow-2xl shadow-black/10"
      >
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-up/70" />
          </div>
          <p className="mono-nums text-[11px] text-fg-subtle">system.status</p>
        </div>

        <div className="relative space-y-2.5 px-4 py-4">
          {statusRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="mono-nums flex items-center justify-between text-xs"
            >
              <span className="text-fg-subtle">{row.label}</span>
              <span className="flex items-center gap-1.5 font-medium text-fg">
                {row.live && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-up opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-up" />
                  </span>
                )}
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="relative border-t border-border px-4 py-4">
          <div className="mono-nums mb-2 flex items-center justify-between text-[11px] text-fg-subtle">
            <span>REQUEST LATENCY</span>
            <span className="text-up">-30% avg</span>
          </div>
          <Sparkline seed={7} height={64} width={400} />
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface SparklineProps {
  seed: number;
  points?: number;
  width?: number;
  height?: number;
  className?: string;
  strokeClassName?: string;
  fill?: boolean;
}

// Deterministic pseudo-random walk so server and client render the same markup (avoids hydration mismatch).
function pseudoRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}

export function Sparkline({
  seed,
  points = 24,
  width = 320,
  height = 80,
  className,
  strokeClassName = "stroke-accent",
  fill = true,
}: SparklineProps) {
  const path = useMemo(() => {
    const rand = pseudoRandom(seed);
    let value = height * 0.6;
    const coords: [number, number][] = [];
    for (let i = 0; i < points; i++) {
      const drift = (rand() - 0.45) * (height * 0.22);
      value = Math.min(height - 6, Math.max(6, value + drift));
      const x = (i / (points - 1)) * width;
      coords.push([x, value]);
    }
    const d = coords
      .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
      .join(" ");
    const area = `${d} L${width},${height} L0,${height} Z`;
    return { line: d, area };
  }, [seed, points, width, height]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      {fill && (
        <path d={path.area} className="fill-accent/10" />
      )}
      <motion.path
        d={path.line}
        fill="none"
        strokeWidth={1.5}
        className={strokeClassName}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </svg>
  );
}

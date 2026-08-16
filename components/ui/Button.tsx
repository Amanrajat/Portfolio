import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
};

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  size: {
    md: "px-5 py-2.5 text-sm",
    sm: "px-3.5 py-2 text-xs",
  },
  variant: {
    primary:
      "bg-accent text-black shadow-[var(--shadow-glow)] hover:brightness-110 active:brightness-95",
    secondary:
      "border border-border-strong bg-surface text-fg hover:border-accent/40 hover:bg-accent-soft",
    ghost: "text-fg-muted hover:text-fg",
  },
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BaseProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(styles.base, styles.size[size], styles.variant[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: BaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(styles.base, styles.size[size], styles.variant[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

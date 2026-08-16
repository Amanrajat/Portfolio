import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "border-border bg-surface text-fg-muted",
        variant === "accent" &&
          "border-accent/30 bg-accent-soft text-accent",
        variant === "outline" && "border-border-strong text-fg",
        className
      )}
    >
      {children}
    </span>
  );
}

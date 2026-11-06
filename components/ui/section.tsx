import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Kicker({
  children,
  tone = "ink",
  className,
}: {
  children: ReactNode;
  tone?: "ink" | "light" | "amber";
  className?: string;
}) {
  const color =
    tone === "light" ? "text-paper/60" : tone === "amber" ? "text-amber" : "text-ink/55";

  return (
    <span className={cn("inline-flex items-center gap-3 label-xs", color, className)}>
      <span
        aria-hidden
        className={cn(
          "h-px w-8",
          tone === "light" ? "bg-paper/40" : tone === "amber" ? "bg-amber" : "bg-ink/30",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  tone = "ink",
  className,
  align = "start",
  children,
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "ink" | "light";
  className?: string;
  align?: "start" | "end";
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "end" && "items-start md:items-end md:text-right",
        className,
      )}
    >
      {kicker ? <Kicker tone={tone === "light" ? "light" : "ink"}>{kicker}</Kicker> : null}
      <h2
        className={cn(
          "display-lg max-w-[22ch]",
          tone === "light" ? "text-paper" : "text-ink",
          align === "end" && "md:ml-auto",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-[52ch] text-[0.98rem] leading-relaxed",
            tone === "light" ? "text-paper/70" : "text-ink/65",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function Hairline({ tone = "ink", className }: { tone?: "ink" | "light"; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("h-px w-full", tone === "light" ? "bg-paper/15" : "bg-ink/12", className)}
    />
  );
}

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "amber" | "ink" | "outline" | "outline-light" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  amber:
    "bg-amber text-ink shadow-[0_16px_34px_-22px_rgba(245,158,11,0.95)] hover:-translate-y-0.5 hover:bg-[#fbb021] hover:shadow-[0_20px_40px_-20px_rgba(245,158,11,0.9)]",
  ink: "bg-ink text-paper hover:-translate-y-0.5 hover:bg-royal",
  outline:
    "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light":
    "border border-paper/35 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-ink",
  whatsapp:
    "bg-emerald-brand text-white shadow-[0_16px_34px_-22px_rgba(5,150,105,0.95)] hover:-translate-y-0.5 hover:bg-[#047857]",
  ghost: "text-ink hover:bg-ink/[0.06]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.78rem]",
  md: "h-11 px-5 text-[0.84rem]",
  lg: "h-[3.25rem] px-7 text-[0.92rem]",
};

export function buttonStyles({
  variant = "amber",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonBaseProps & { href: string; className?: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link href={href} className={buttonStyles({ variant, size, className })} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonBaseProps & { href: string; className?: string } & Omit<
    ComponentProps<"a">,
    "href" | "className" | "children"
  >) {
  return (
    <a href={href} className={buttonStyles({ variant, size, className })} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonBaseProps & ComponentProps<"button">) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

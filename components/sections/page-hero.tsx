import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Inner-page opener. Reuses the editorial overlap idea at a smaller scale so
 * /primary, /secondary, /admissions and /gallery stay in the same visual family.
 */
export function PageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
  meta,
  breadcrumb,
  action,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  meta?: { label: string; value: string }[];
  breadcrumb?: { label: string; href: string };
  action?: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="shell py-10 md:py-16">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[0.72rem] text-ink/45">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <ChevronRight aria-hidden className="size-3" />
            <span className="text-ink/70">{breadcrumb.label}</span>
          </nav>
        ) : null}

        <div
          className={cn(
            "grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16",
            align === "right" && "lg:grid-cols-[0.98fr_1.02fr]",
          )}
        >
          <div className={cn(align === "right" && "lg:order-2")}>
            <p className="label-xs flex items-center gap-3 text-royal/70">
              <span aria-hidden className="h-px w-8 bg-royal/40" />
              {kicker}
            </p>
            <h1 className="display-lg mt-5 max-w-[20ch] text-ink">{title}</h1>
            <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink/62">
              {description}
            </p>
            {action ? <div className="mt-7 flex flex-wrap gap-3">{action}</div> : null}

            {meta?.length ? (
              <dl className="mt-9 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-ink/12 bg-ink/10">
                {meta.map((item) => (
                  <div key={item.label} className="bg-paper px-4 py-3.5">
                    <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ink/40">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-display text-[1.15rem] font-semibold leading-none tracking-tight text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <div className={cn("relative", align === "right" && "lg:order-1")}>
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-[1.5rem] bg-ink">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-bl-[1.5rem] border-b-2 border-l-2 border-amber/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

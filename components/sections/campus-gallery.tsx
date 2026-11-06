"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { galleryCategories } from "@/lib/school";
import type { GalleryItem } from "@/lib/gallery";
import { cn } from "@/lib/utils";

type Filter = (typeof galleryCategories)[number];

/**
 * Filterable campus-life grid. Asymmetric by design: "tall" frames double
 * their row span on desktop so the wall never reads as a tidy 4×3 album.
 */
export function CampusGallery({
  items,
  showFilters = true,
  className,
}: {
  items: GalleryItem[];
  showFilters?: boolean;
  className?: string;
}) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  return (
    <div className={cn("", className)}>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {galleryCategories.map((category) => {
            const active = category === filter;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-[0.75rem] font-semibold tracking-tight transition-all duration-300",
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink",
                )}
              >
                {category}
              </button>
            );
          })}
          <span className="ml-auto hidden text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink/35 sm:block">
            {filtered.length} frame{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
      ) : null}

      <div className="grid grid-cols-2 gap-3 md:auto-rows-[12.5rem] md:grid-cols-4 md:gap-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((item, index) => (
            <motion.figure
              key={item.caption}
              layout
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.32, delay: index * 0.015, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-ink",
                item.tall
                  ? "aspect-[4/5] md:row-span-2 md:aspect-auto"
                  : "aspect-[4/3] md:aspect-auto",
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                placeholder="blur"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-amber">
                  {item.category}
                </span>
                <span className="translate-y-1 font-display text-[0.95rem] font-medium leading-snug tracking-tight text-paper opacity-95 transition-transform duration-500 group-hover:translate-y-0">
                  {item.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

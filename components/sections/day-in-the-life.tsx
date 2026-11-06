"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dayInTheLife } from "@/lib/school";
import { cn } from "@/lib/utils";
import { Kicker } from "@/components/ui/section";

export function DayInTheLife({ defaultTrack = "primary" }: { defaultTrack?: string }) {
  const [active, setActive] = useState(defaultTrack);
  const track = dayInTheLife.find((item) => item.key === active) ?? dayInTheLife[0];

  return (
    <section
      id="day-in-the-life"
      aria-labelledby="day-heading"
      className="relative overflow-hidden bg-paper-dim"
    >
      <div className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Kicker>A day in the life</Kicker>
            <h2 id="day-heading" className="display-lg mt-5 max-w-[16ch] text-ink">
              From the gate to the last bell.
            </h2>
            <p className="mt-5 max-w-[40ch] text-[0.95rem] leading-relaxed text-ink/60">
              Choose a track to see how the hours are actually spent. No filler periods —
              every block has a named teacher and a measurable outcome.
            </p>

            <div
              role="tablist"
              aria-label="School track"
              className="mt-8 flex flex-wrap gap-2"
            >
              {dayInTheLife.map((item) => {
                const selected = item.key === track.key;
                return (
                  <button
                    key={item.key}
                    role="tab"
                    type="button"
                    id={`tab-${item.key}`}
                    aria-selected={selected}
                    aria-controls={`panel-${item.key}`}
                    onClick={() => setActive(item.key)}
                    className={cn(
                      "rounded-full border px-4 py-2.5 text-[0.78rem] font-semibold tracking-tight transition-all duration-300",
                      selected
                        ? "border-ink bg-ink text-paper shadow-[0_14px_30px_-22px_rgba(15,23,42,1)]"
                        : "border-ink/15 bg-transparent text-ink/60 hover:border-ink/40 hover:text-ink",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-[0.75rem] text-ink/45">
              <span aria-hidden className="size-1.5 rounded-full bg-amber" />
              Typical school day · {track.time}
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.ol
                key={track.key}
                id={`panel-${track.key}`}
                role="tabpanel"
                aria-labelledby={`tab-${track.key}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col"
              >
                <span
                  aria-hidden
                  className="absolute bottom-6 left-[0.42rem] top-6 w-px bg-ink/12 sm:left-[5.25rem]"
                />
                {track.blocks.map((block, index) => (
                  <li key={block.title} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-8">
                    <div className="hidden w-16 shrink-0 pt-1 text-right sm:block">
                      <span className="font-display text-[0.95rem] font-semibold tracking-tight text-royal">
                        {block.time}
                      </span>
                    </div>
                    <span
                      aria-hidden
                      className="relative z-10 mt-1.5 grid size-[0.9rem] shrink-0 place-items-center rounded-full border border-ink/20 bg-paper-dim"
                    >
                      <span className="size-[0.3rem] rounded-full bg-amber" />
                    </span>
                    <div className="min-w-0 pb-2">
                      <p className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/40 sm:hidden">
                        {block.time}
                      </p>
                      <h3 className="text-[1.12rem] font-semibold leading-snug tracking-tight text-ink">
                        <span className="mr-2 font-display text-[0.82rem] font-medium text-amber">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {block.title}
                      </h3>
                      <p className="mt-1.5 max-w-[46ch] text-[0.87rem] leading-relaxed text-ink/60">
                        {block.body}
                      </p>
                    </div>
                  </li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

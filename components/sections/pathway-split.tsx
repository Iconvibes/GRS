import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { tracks } from "@/lib/school";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Kicker } from "@/components/ui/section";

const artwork = [images.primaryClassroom, images.secondarySmiles];

export function PathwaySplit() {
  return (
    <section id="pathways" aria-labelledby="pathways-heading" className="relative bg-paper">
      <div className="shell py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Kicker>Two pathways, one standard</Kicker>
            <h2 id="pathways-heading" className="display-lg mt-5 text-ink">
              Choose the door your child <span className="italic-accent">walks through</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[0.9rem] leading-relaxed text-ink/60 md:pb-2">
            The same teachers, the same discipline, the same eighteen-child ceiling. What
            changes is the work — and how much of it your child can carry alone.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8">
          {tracks.map((track, index) => (
            <Link
              key={track.key}
              href={track.href}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[1.6rem] border border-ink/12 bg-paper transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_40px_80px_-60px_rgba(15,23,42,0.6)]",
                index === 1 && "lg:mt-14",
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image
                  src={artwork[index]}
                  alt={
                    index === 0
                      ? "Primary pupils raising their hands in a bright classroom"
                      : "Secondary students smiling together in class"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-paper/95 px-3 py-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-ink/70 backdrop-blur">
                  {track.ageRange}
                </span>
                <span className="absolute bottom-4 right-5 font-display text-[3.4rem] font-semibold leading-none text-paper/85 mix-blend-overlay">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-royal/70">
                  {track.eyebrow}
                </p>
                <h3 className="display-sm mt-3 text-ink">{track.title}</h3>
                <p className="mt-1.5 font-display text-[1.05rem] italic text-amber">
                  {track.tagline}
                </p>
                <p className="mt-4 max-w-[44ch] text-[0.88rem] leading-relaxed text-ink/62">
                  {track.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {track.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-1.5 text-[0.78rem] font-medium text-ink/70"
                    >
                      <Check aria-hidden className="size-3.5 text-royal" strokeWidth={3} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center justify-between border-t border-ink/10 pt-5">
                  <span className="text-[0.8rem] font-semibold tracking-tight text-ink">
                    Explore {track.title}
                  </span>
                  <span className="grid size-9 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-400 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <ArrowRight aria-hidden className="size-4" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

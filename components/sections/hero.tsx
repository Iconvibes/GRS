import Image from "next/image";
import { ArrowDownRight, MapPin, MessageCircle } from "lucide-react";
import { school, whatsappHref } from "@/lib/school";
import { images } from "@/lib/images";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <Image
        src={images.hero}
        alt="Pupils in blue and white uniforms at work in a Goodness Royal School classroom"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover object-[58%_42%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(15,23,42,0.94)_0%,rgba(15,23,42,0.82)_38%,rgba(15,23,42,0.42)_72%,rgba(15,23,42,0.25)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="shell relative flex min-h-[calc(100svh-6.75rem)] flex-col justify-between pb-10 pt-16 md:min-h-[38rem] md:pb-14 md:pt-24">
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
          <div className="max-w-[41rem]">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-paper/55">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/25 px-3 py-1.5 text-amber">
                <MapPin aria-hidden className="size-3" strokeWidth={2.4} />
                Alagbado, Lagos
              </span>
              <span>Creche · Nursery · Primary · Secondary</span>
            </p>

            <h1 className="display-xl mt-7 text-paper">
              Knowledge is only{" "}
              <em className="relative whitespace-nowrap not-italic">
                <span className="italic text-amber">power</span>
                <svg
                  aria-hidden
                  viewBox="0 0 240 12"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-amber/70"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C58 3 142 2 238 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </em>{" "}
              <br className="hidden sm:block" />
              when a child can use it.
            </h1>

            <p className="mt-8 max-w-[34rem] text-[0.98rem] leading-[1.75] text-paper/75 md:text-[1.05rem]">
              Goodness Royal School is a deliberately small school off Suberu-Oje Road.
              Eighteen pupils to a class, teachers who know every name, and a campus where
              the motto is a daily instruction — not a slogan on a wall.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonAnchor
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle aria-hidden className="size-[1.15rem]" strokeWidth={2} />
                Chat on WhatsApp
              </ButtonAnchor>
              <ButtonLink href="/#pathways" variant="outline-light" size="lg">
                Explore academics
                <ArrowDownRight
                  aria-hidden
                  className="size-[1.1rem] transition-transform duration-300 group-hover/btn:translate-y-0.5"
                  strokeWidth={2}
                />
              </ButtonLink>
            </div>

            <p className="mt-6 text-[0.75rem] text-paper/45">
              Ask for <span className="text-paper/80">{school.secretary}</span> in the school
              office — she handles every admission enquiry personally.
            </p>
          </div>

          {/* Overlapping cards: the Walker-style collage cue. */}
          <div className="relative hidden justify-end lg:flex">
            <div className="relative w-full max-w-[19rem]">
              <div className="absolute -left-16 top-6 w-[13.5rem] rotate-[-3.5deg] overflow-hidden rounded-2xl border border-paper/15 bg-paper/5 p-1.5 backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[0.8rem]">
                  <Image
                    src={images.primaryClassroom}
                    alt="Young pupils raising their hands in class"
                    fill
                    sizes="240px"
                    placeholder="blur"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative ml-auto mt-24 w-[15.5rem] rotate-[2deg] rounded-2xl bg-paper p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]">
                <p className="label-xs text-ink/40">Class size</p>
                <p className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-display text-[2.9rem] font-semibold leading-none tracking-[-0.04em]">
                    18
                  </span>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                    max
                  </span>
                </p>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-ink/60">
                  Small enough for the teacher to hear every child read, every week.
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-ink/10 pt-3">
                  <span className="size-1.5 rounded-full bg-amber" />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink/50">
                    Casso B/Stop, Alagbado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6 border-t border-paper/15 pt-5">
          <p className="max-w-[22rem] text-[0.72rem] leading-relaxed text-paper/45">
            No. 9, Oluode Oginsado Street · Off Suberu-Oje Road
            <br />
            Casso Bus Stop, Alagbado, Lagos State
          </p>
          <p className="hidden text-right text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-paper/40 sm:block">
            Est. community school
            <br />
            <span className="text-amber">Applied Knowledge is Power</span>
          </p>
        </div>
      </div>
    </section>
  );
}

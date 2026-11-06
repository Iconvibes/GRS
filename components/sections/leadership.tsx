import Image from "next/image";
import { Quote } from "lucide-react";
import { school } from "@/lib/school";
import { images } from "@/lib/images";
import { Kicker } from "@/components/ui/section";

const principles = [
  {
    title: "Discipline with warmth",
    body: "Clear rules, applied the same way every day, by adults who are glad to see your child.",
  },
  {
    title: "Progress you can see",
    body: "Reading age and numeracy tracked each term, reported to you in plain language.",
  },
  {
    title: "Teaching that shows its working",
    body: "Every lesson ends with the child explaining the answer, not just recording it.",
  },
];

export function Leadership() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="relative overflow-hidden bg-royal-deep text-paper"
    >
      <div className="grain absolute inset-0" />
      <div className="shell relative py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[1.5rem] border border-amber/40" />
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.5rem] bg-ink">
              <Image
                src={images.leadership}
                alt="A teacher standing with pupils in a Goodness Royal School classroom"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                placeholder="blur"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-royal-deep/70 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-paper/15 bg-ink/70 px-4 py-3 backdrop-blur-md">
                <p className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-amber">
                  Leadership
                </p>
                <p className="mt-1 font-display text-[1.05rem] font-semibold tracking-tight">
                  Head of School
                </p>
                <p className="text-[0.72rem] text-paper/60">
                  {school.name} · Alagbado
                </p>
              </div>
            </div>
          </div>

          <div>
            <Kicker tone="amber">Principal&apos;s welcome</Kicker>
            <h2 id="leadership-heading" className="display-lg mt-5 max-w-[20ch] text-paper">
              We are not in a hurry with children.
            </h2>

            <div className="relative mt-7 max-w-[46ch] border-l border-amber/40 pl-6">
              <Quote
                aria-hidden
                className="absolute -left-2.5 -top-1 size-5 bg-royal-deep text-amber"
                strokeWidth={1.6}
              />
              <blockquote className="font-display text-[1.18rem] leading-[1.55] text-paper/85 md:text-[1.3rem]">
                “Any school can fill a child&apos;s exercise book. Our work is to make sure
                something stays in the child. That takes small classes, teachers who are
                prepared, and parents we talk to honestly — term after term.”
              </blockquote>
              <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-paper/45">
                Head of School
                <span className="mx-2 text-amber">—</span>
                {school.name}
              </p>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-paper/12 bg-paper/10 sm:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.title} className="bg-royal-deep/80 p-5">
                  <dt className="text-[0.82rem] font-semibold leading-snug tracking-tight text-paper">
                    {principle.title}
                  </dt>
                  <dd className="mt-2 text-[0.75rem] leading-relaxed text-paper/55">
                    {principle.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

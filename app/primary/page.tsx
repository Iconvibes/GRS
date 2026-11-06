import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Calculator,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sun,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { DayInTheLife } from "@/components/sections/day-in-the-life";
import { CtaBand } from "@/components/sections/cta-band";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { Kicker, SectionHeading } from "@/components/ui/section";
import { images } from "@/lib/images";
import { whatsappHref } from "@/lib/school";

const PRIMARY_MESSAGE = "Hello Amarachi, I'm inquiring about Primary School entry.";

export const metadata: Metadata = {
  title: "Primary School & Early Years",
  description:
    "Creche, Nursery and Primary education at Goodness Royal School, Alagbado. Phonics-led literacy, hands-on numeracy, after-school care and a safe, monitored campus.",
};

const pillars = [
  {
    icon: BookOpen,
    title: "Reading before anything else",
    body: "Guided reading in small groups every day. A child who cannot decode the instruction cannot follow the lesson — so literacy comes first, every term.",
  },
  {
    icon: Calculator,
    title: "Number sense, not memorising",
    body: "Counters, number lines and word problems before written sums. Children show how they got the answer, then write it down.",
  },
  {
    icon: ShieldCheck,
    title: "Safety you can check",
    body: "Controlled gate entry, verified pick-up names, first-aid trained staff and a campus small enough that a stranger is noticed.",
  },
  {
    icon: Sun,
    title: "After-school care",
    body: "Supervised care until parents close from work — homework support, a snack, and quiet reading before pick-up.",
  },
  {
    icon: HeartHandshake,
    title: "Manners and faith",
    body: "Greetings, honesty, respect for elders and daily devotion. The behaviour we expect is written, taught and reinforced by every adult.",
  },
];

const timetable = [
  { time: "7:30 – 8:00", mon: "Assembly / devotion", tue: "Assembly / devotion", wed: "Assembly / devotion", thu: "Assembly / devotion", fri: "Assembly / devotion" },
  { time: "8:00 – 9:00", mon: "Phonics & guided reading", tue: "Phonics & guided reading", wed: "Phonics & guided reading", thu: "Phonics & guided reading", fri: "Library & story" },
  { time: "9:00 – 10:00", mon: "Numeracy", tue: "Numeracy", wed: "Numeracy", thu: "Numeracy", fri: "Numeracy games" },
  { time: "10:00 – 10:30", mon: "Snack & play", tue: "Snack & play", wed: "Snack & play", thu: "Snack & play", fri: "Snack & play" },
  { time: "10:30 – 12:00", mon: "English studies", tue: "Basic science", wed: "Social studies", thu: "Nigerian language", fri: "Creative art" },
  { time: "12:00 – 1:00", mon: "Lunch & rest", tue: "Lunch & rest", wed: "Lunch & rest", thu: "Lunch & rest", fri: "Lunch & rest" },
  { time: "1:00 – 2:30", mon: "ICT lab", tue: "French", wed: "ICT lab", thu: "Music & movement", fri: "Clubs" },
  { time: "2:30 – 3:30", mon: "Prep & homework", tue: "Prep & homework", wed: "Prep & homework", thu: "Prep & homework", fri: "After-school care" },
];

export default function PrimaryPage() {
  return (
    <>
      <PageHero
        kicker="Primary · Creche, Nursery & Primary"
        title={
          <>
            The first years, <span className="italic-accent">done properly</span>.
          </>
        }
        description="Foundations are hard to repair later. In Primary we spend our time on the things that compound: reading fluency, number sense, safe habits and the confidence to put a hand up in class."
        image={images.primaryClassroom}
        imageAlt="Two young pupils raising their hands at their desk in a bright classroom"
        meta={[
          { label: "Class size", value: "18 max" },
          { label: "Ages", value: "2 – 11" },
          { label: "School day", value: "7:30 – 3:30" },
        ]}
        breadcrumb={{ label: "Primary", href: "/primary" }}
        action={
          <>
            <ButtonAnchor
              href={whatsappHref(PRIMARY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle aria-hidden className="size-[1.1rem]" strokeWidth={2} />
              Inquire about Primary
            </ButtonAnchor>
            <ButtonLink href="/secondary" variant="outline" size="lg">
              Compare Secondary
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="pillars-heading" className="bg-paper">
        <div className="shell border-t border-ink/12 pb-16 pt-16 md:pb-24 md:pt-20">
          <SectionHeading
            kicker="What we build here"
            title="Five things we refuse to rush."
            description="Each pillar is timetabled, staffed and reported on. If it is not in the timetable, it is not really happening."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative bg-paper p-7 transition-colors duration-500 hover:bg-paper-dim"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-10 place-items-center rounded-full border border-ink/15 text-royal transition-colors duration-500 group-hover:border-royal group-hover:bg-royal group-hover:text-paper">
                    <pillar.icon aria-hidden className="size-[1.05rem]" strokeWidth={1.9} />
                  </span>
                  <span className="font-display text-[0.85rem] text-ink/25">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[1.02rem] font-semibold leading-snug tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 max-w-[34ch] text-[0.85rem] leading-relaxed text-ink/60">
                  {pillar.body}
                </p>
              </div>
            ))}
            <div className="relative hidden overflow-hidden bg-ink lg:block">
              <Image
                src={images.literacyReading}
                alt="Pupils holding open textbooks during a reading lesson"
                fill
                sizes="400px"
                placeholder="blur"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <p className="absolute inset-x-5 bottom-5 font-display text-[1.05rem] italic leading-snug text-paper/90">
                “Read with them nightly. Twenty minutes beats two hours on a Saturday.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="week-heading" className="bg-paper-dim">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="A Primary week"
              title="The timetable, without the marketing."
            />
            <p className="max-w-xs text-[0.82rem] leading-relaxed text-ink/55 md:pb-2">
              Illustrative Primary timetable. Actual periods shift slightly by class and term.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/12 bg-paper">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <caption className="sr-only">Illustrative Primary school timetable</caption>
              <thead>
                <tr className="border-b border-ink/12 bg-ink/[0.03]">
                  <th scope="col" className="px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                    Time
                  </th>
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                    <th
                      key={day}
                      scope="col"
                      className="px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/45"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetable.map((row) => (
                  <tr key={row.time} className="border-b border-ink/8 last:border-0">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-5 py-3.5 text-[0.75rem] font-semibold text-royal"
                    >
                      {row.time}
                    </th>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri].map((cell, index) => (
                      <td
                        key={index}
                        className="px-5 py-3.5 text-[0.8rem] text-ink/65"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DayInTheLife defaultTrack="primary" />

      <section aria-labelledby="care-heading" className="bg-paper">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 rounded-[1.75rem] border border-ink/12 p-6 md:grid-cols-2 md:items-center md:p-10">
            <div>
              <Kicker>For working parents</Kicker>
              <h2 id="care-heading" className="display-md mt-5 max-w-[18ch] text-ink">
                Care that runs past the last bell.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[0.9rem] leading-relaxed text-ink/62">
                Lagos traffic does not respect closing time. Supervised after-school care
                keeps your child on campus — homework done, snack eaten, reading book open —
                until you arrive.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Homework support from a class teacher",
                  "Snack and supervised indoor play",
                  "Late pick-up arranged in advance with the office",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.85rem] text-ink/70">
                    <span aria-hidden className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-ink">
              <Image
                src={images.pupilsSmiling}
                alt="Pupils smiling in their classroom at the end of the school day"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Primary admission"
        title="Start with a conversation, not a form."
        description="Tell Amarachi your child's age and the class you are considering. She will tell you exactly what happens next — and book your campus visit."
        whatsappMessage={PRIMARY_MESSAGE}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import {
  Atom,
  BadgeCheck,
  Cpu,
  MessageCircle,
  Microscope,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { DayInTheLife } from "@/components/sections/day-in-the-life";
import { CtaBand } from "@/components/sections/cta-band";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";
import { Hairline, Kicker, SectionHeading } from "@/components/ui/section";
import { images } from "@/lib/images";
import { whatsappHref } from "@/lib/school";

const SECONDARY_MESSAGE = "Hello Amarachi, I'm inquiring about Secondary School entry.";

export const metadata: Metadata = {
  title: "Secondary School",
  description:
    "Junior and Senior Secondary at Goodness Royal School, Alagbado. WAEC and NECO preparation, weekly science and ICT practicals, leadership and discipline.",
};

const facilities = [
  {
    image: images.scienceLab,
    alt: "Students working with laboratory apparatus at a science bench",
    icon: Microscope,
    title: "Science laboratory",
    body: "Physics, chemistry and biology practicals on the same timetable as the theory. Apparatus, reagents and supervision are budgeted for every term.",
    points: ["Weekly practical periods", "JETS & science club", "Practical notebooks marked"],
  },
  {
    image: images.ictLab,
    alt: "Pupils working on laptops in the school ICT laboratory",
    icon: Cpu,
    title: "ICT & coding lab",
    body: "Every pupil gets lab time — typing, spreadsheets, research skills and an introduction to coding that continues into senior classes.",
    points: ["One pupil, one workstation", "Coding basics from JSS1", "Research & digital citizenship"],
  },
];

const academics = [
  {
    stage: "Junior Secondary (JSS1 – JSS3)",
    subjects: [
      "English studies",
      "Mathematics",
      "Basic science & technology",
      "Social studies",
      "Business studies",
      "Nigerian language",
      "French",
      "Computer studies",
      "Creative & cultural arts",
      "Physical & health education",
    ],
    note: "BECE readiness is built in from JSS2, with continuous assessment reports each term.",
  },
  {
    stage: "Senior Secondary (SS1 – SS3)",
    subjects: [
      "English language",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Further mathematics",
      "Economics",
      "Government",
      "Literature-in-English",
      "Agricultural science",
    ],
    note: "Science, commercial and arts streams with WAEC and NECO preparation from the start of SS2.",
  },
];

const character = [
  {
    icon: Users,
    title: "House system & prefects",
    body: "Four houses, elected prefects and inter-house competition in sport, debate and quiz. Responsibility is given, not just discussed.",
  },
  {
    icon: BadgeCheck,
    title: "Discipline made visible",
    body: "Uniform, punctuality and conduct are checked daily at assembly. Merits and corrections are recorded and shared with parents.",
  },
  {
    icon: Atom,
    title: "Exam technique, taught",
    body: "Past-question drills, timed mocks and mark-scheme literacy — so a good student does not lose marks to poor exam habits.",
  },
];

export default function SecondaryPage() {
  return (
    <>
      <PageHero
        kicker="Secondary · Junior & Senior"
        title={
          <>
            Discipline that becomes <span className="italic-accent">direction</span>.
          </>
        }
        description="The teenage years need structure, not noise. We run a tight academic timetable with real lab work, real exam preparation and leadership responsibility that pupils have to carry."
        image={images.secondaryClassroom}
        imageAlt="Secondary pupils in white uniforms seated at desks during a lesson"
        meta={[
          { label: "Exams", value: "WAEC / NECO" },
          { label: "Classes", value: "JSS1–SS3" },
          { label: "Class size", value: "18 max" },
        ]}
        breadcrumb={{ label: "Secondary", href: "/secondary" }}
        action={
          <>
            <ButtonAnchor
              href={whatsappHref(SECONDARY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle aria-hidden className="size-[1.1rem]" strokeWidth={2} />
              Inquire about Secondary
            </ButtonAnchor>
            <ButtonLink href="/primary" variant="outline" size="lg">
              Compare Primary
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="academics-heading" className="bg-paper">
        <div className="shell border-t border-ink/12 pb-16 pt-16 md:pb-24 md:pt-20">
          <SectionHeading
            kicker="Academic programme"
            title="Six years, mapped backwards from WAEC."
            description="We start with the certificate your child needs and work backwards through every term. Nothing is left to the final year."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {academics.map((level, index) => (
              <div
                key={level.stage}
                className="relative flex flex-col rounded-2xl border border-ink/12 p-7 md:p-8"
              >
                <span className="absolute right-7 top-6 font-display text-[2.6rem] font-semibold leading-none text-ink/[0.07]">
                  0{index + 1}
                </span>
                <p className="label-xs text-royal/70">
                  {index === 0 ? "Foundation" : "Certification"}
                </p>
                <h3 className="display-sm mt-4 max-w-[20ch] text-ink">{level.stage}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {level.subjects.map((subject) => (
                    <li
                      key={subject}
                      className="rounded-full border border-ink/12 px-3 py-1.5 text-[0.74rem] font-medium text-ink/65"
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
                <Hairline className="my-6" />
                <p className="text-[0.82rem] leading-relaxed text-ink/55">{level.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="facilities-heading" className="bg-ink text-paper">
        <div className="shell py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Kicker tone="amber">Facilities</Kicker>
              <h2 id="facilities-heading" className="display-lg mt-5 max-w-[20ch] text-paper">
                Where the theory has to stand up.
              </h2>
            </div>
            <p className="max-w-xs text-[0.85rem] leading-relaxed text-paper/55 md:pb-2">
              Science and computing are not electives on this campus. They are timetabled,
              staffed and assessed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {facilities.map((facility) => (
              <article
                key={facility.title}
                className="group overflow-hidden rounded-[1.5rem] border border-paper/12 bg-paper/[0.03]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-royal-deep">
                  <Image
                    src={facility.image}
                    alt={facility.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    placeholder="blur"
                    className="object-cover opacity-95 transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 grid size-9 place-items-center rounded-full bg-paper/95 text-royal">
                    <facility.icon aria-hidden className="size-4" strokeWidth={2} />
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-[1.05rem] font-semibold tracking-tight text-paper">
                    {facility.title}
                  </h3>
                  <p className="mt-2.5 max-w-[42ch] text-[0.85rem] leading-relaxed text-paper/60">
                    {facility.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-paper/10 pt-4">
                    {facility.points.map((point) => (
                      <li key={point} className="flex items-center gap-1.5 text-[0.74rem] text-paper/60">
                        <span aria-hidden className="size-1 rounded-full bg-amber" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="character-heading" className="bg-paper">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <Kicker>Leadership & discipline</Kicker>
              <h2 id="character-heading" className="display-lg mt-5 max-w-[17ch] text-ink">
                A uniform does not make discipline.{" "}
                <span className="italic-accent">Practice does.</span>
              </h2>
              <p className="mt-5 max-w-[40ch] text-[0.92rem] leading-relaxed text-ink/60">
                Secondary school is where a child decides who they are when nobody is
                watching. We give them responsibility early, then hold them to it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/admissions" variant="ink" size="md">
                  Admission steps
                </ButtonLink>
                <ButtonAnchor
                  href={whatsappHref(SECONDARY_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  Ask a question
                </ButtonAnchor>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
              {character.map((item, index) => (
                <div key={item.title} className="group flex gap-5 py-6">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-ink/15 text-royal transition-colors duration-500 group-hover:border-royal group-hover:bg-royal group-hover:text-paper">
                    <item.icon aria-hidden className="size-[1.05rem]" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="flex items-baseline gap-2 text-[0.98rem] font-semibold tracking-tight text-ink">
                      <span className="font-display text-[0.72rem] font-medium text-amber">
                        0{index + 1}
                      </span>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-[44ch] text-[0.85rem] leading-relaxed text-ink/60">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DayInTheLife defaultTrack="secondary" />

      <CtaBand
        eyebrow="Secondary admission"
        title="Bring the last report card. We will tell you the truth."
        description="A short placement conversation tells us where your child actually is — and what the first term would need to cover."
        whatsappMessage={SECONDARY_MESSAGE}
      />
    </>
  );
}

import type { Metadata } from "next";
import { ArrowUpRight, Check, Download, FileText, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ButtonAnchor } from "@/components/ui/button";
import { Hairline, Kicker, SectionHeading } from "@/components/ui/section";
import { images } from "@/lib/images";
import { admissionsSteps, faqs, school, telHref, whatsappHref } from "@/lib/school";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to apply to Goodness Royal School, Alagbado. Four clear steps, the documents to bring, and a direct line to the school office.",
};

const ADMISSIONS_MESSAGE =
  "Hello Amarachi, I'd like to start an admission application for my child at Goodness Royal School.";

const requirements = [
  "Birth certificate or sworn age declaration",
  "Most recent school report card (Primary and Secondary)",
  "Two passport photographs of the child",
  "Transfer certificate, where applicable",
  "Parent or guardian phone number and address",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title={
          <>
            Four steps, <span className="italic-accent">one conversation</span>.
          </>
        }
        description="No long forms before anyone has spoken to you. Start with a message to the school office, come and see the campus, then decide. Places are capped at eighteen pupils per class."
        image={images.collaboration}
        imageAlt="Two students working together on an assignment in class"
        meta={[
          { label: "Intake", value: "Sept & Jan" },
          { label: "Visits", value: "Weekday AM" },
          { label: "Reply", value: "Same day" },
        ]}
        breadcrumb={{ label: "Admissions", href: "/admissions" }}
        action={
          <ButtonAnchor
            href={whatsappHref(ADMISSIONS_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
          >
            <MessageCircle aria-hidden className="size-[1.1rem]" strokeWidth={2} />
            Start on WhatsApp
          </ButtonAnchor>
        }
      />

      <section aria-labelledby="steps-heading" className="bg-paper">
        <div className="shell border-t border-ink/12 pb-16 pt-16 md:pb-24 md:pt-20">
          <SectionHeading
            kicker="The process"
            title="What actually happens, in order."
            description="Every step has a named person and a realistic timeline. If anything is unclear, ask Amarachi directly — that is what the office line is for."
          />

          <ol className="mt-12 flex flex-col">
            {admissionsSteps.map((step, index) => (
              <li key={step.step}>
                <div className="grid gap-4 py-8 md:grid-cols-[6rem_1fr_1.1fr] md:items-start md:gap-8">
                  <span className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.04em] text-ink/15 md:text-[3.4rem]">
                    {step.step}
                  </span>
                  <h3 className="display-sm max-w-[16ch] text-ink">{step.title}</h3>
                  <p className="max-w-[48ch] text-[0.9rem] leading-relaxed text-ink/62">
                    {step.body}
                  </p>
                </div>
                {index < admissionsSteps.length - 1 ? <Hairline /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="documents-heading" className="bg-paper-dim">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Kicker>What to bring</Kicker>
              <h2 id="documents-heading" className="display-md mt-5 max-w-[18ch] text-ink">
                Documents, once you are ready.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[0.9rem] leading-relaxed text-ink/60">
                Nothing is required to make an enquiry. These are only needed when an offer
                is made and you accept a place.
              </p>

              <ul className="mt-8 space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.88rem] text-ink/70">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-royal/10 text-royal">
                      <Check aria-hidden className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-ink/12 bg-paper p-6 md:p-7">
                <Kicker>Fees &amp; terms</Kicker>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-ink/65">
                  The fee schedule, term dates and uniform list are issued in writing with
                  the term prospectus, so nothing is quoted from memory or negotiated in a
                  corridor.
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/65">
                  Request the current prospectus and the office will send the exact figures
                  for the class you are considering.
                </p>
                <a
                  href={telHref()}
                  className="mt-5 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-royal hover:text-ink"
                >
                  <Phone aria-hidden className="size-3.5" strokeWidth={2.2} />
                  {school.phone.display}
                </a>
              </div>

              <div className="rounded-2xl bg-royal-deep p-6 text-paper md:p-7">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-amber">
                  Visiting
                </p>
                <p className="mt-3 font-display text-[1.25rem] leading-snug tracking-tight">
                  Weekday mornings, while lessons are running.
                </p>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-paper/60">
                  Come through Casso Bus Stop on Suberu-Oje Road. Allow about forty minutes.
                  Call ahead so a member of staff is free to walk you round.
                </p>
                <a
                  href={school.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-amber"
                >
                  Open directions
                  <ArrowUpRight
                    aria-hidden
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prospectus" aria-labelledby="prospectus-heading" className="bg-paper">
        <div className="shell py-16 md:py-24">
          <div className="grid items-center gap-8 rounded-[1.75rem] border border-ink/12 bg-paper-dim p-7 md:grid-cols-[auto_1fr_auto] md:p-10">
            <span className="grid size-14 place-items-center rounded-2xl bg-ink text-paper">
              <FileText aria-hidden className="size-6" strokeWidth={1.8} />
            </span>
            <div>
              <h2 id="prospectus-heading" className="display-sm text-ink">
                The term prospectus
              </h2>
              <p className="mt-2 max-w-[52ch] text-[0.86rem] leading-relaxed text-ink/60">
                Levels offered, curriculum outline, admission requirements and contact
                details in one printable document. Fees and term dates are sent with it on
                request.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <ButtonAnchor
                href="/goodness-royal-prospectus.pdf"
                download
                variant="ink"
                size="md"
              >
                <Download aria-hidden className="size-4" strokeWidth={2} />
                Download PDF
              </ButtonAnchor>
              <ButtonAnchor
                href={whatsappHref(
                  "Hello Amarachi, please send me the current term prospectus for Goodness Royal School.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                Request by WhatsApp
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="bg-paper">
        <div className="shell pb-20 md:pb-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading kicker="Questions parents ask" title="Straight answers." />
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[0.95rem] font-semibold tracking-tight text-ink marker:hidden">
                    {faq.q}
                    <span
                      aria-hidden
                      className="grid size-6 shrink-0 place-items-center rounded-full border border-ink/20 text-ink/60 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[58ch] pr-10 text-[0.87rem] leading-relaxed text-ink/62">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="One message is enough to start."
        description="Tell Amarachi your child's age and the class you have in mind. She will reply with the next step and a time to visit."
        whatsappMessage={ADMISSIONS_MESSAGE}
        showProspectus={false}
      />
    </>
  );
}

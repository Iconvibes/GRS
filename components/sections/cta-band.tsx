import Link from "next/link";
import { ArrowRight, Download, MapPin, MessageCircle, Phone } from "lucide-react";
import { school, telHref, whatsappHref } from "@/lib/school";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";

export function CtaBand({
  eyebrow = "Admissions are open",
  title,
  description,
  whatsappMessage,
  showProspectus = true,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  whatsappMessage?: string;
  showProspectus?: boolean;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-ink px-6 py-12 text-paper md:px-14 md:py-16">
          <div className="grain absolute inset-0" />
          <div
            aria-hidden
            className="absolute -right-24 -top-24 size-[26rem] rounded-full border border-paper/10"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 right-10 size-[22rem] rounded-full bg-royal/40 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-amber">
                <span aria-hidden className="size-1.5 rounded-full bg-amber" />
                {eyebrow}
              </p>
              <h2 id="cta-heading" className="display-lg mt-5 max-w-[19ch] text-paper">
                {title ?? "Come and see the school for yourself."}
              </h2>
              <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-paper/65">
                {description ??
                  `Message ${school.secretary} in the office and she will arrange a weekday morning visit. Forty minutes on campus tells you more than any brochure can.`}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonAnchor
                  href={whatsappHref(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle aria-hidden className="size-[1.1rem]" strokeWidth={2} />
                  Chat on WhatsApp
                </ButtonAnchor>
                <ButtonAnchor href={telHref()} variant="outline-light" size="lg">
                  <Phone aria-hidden className="size-[1.05rem]" strokeWidth={2} />
                  Call {school.secretary}
                </ButtonAnchor>
                {showProspectus ? (
                  <ButtonLink href="/admissions#prospectus" variant="ghost" size="lg" className="text-paper/80 hover:bg-paper/10 hover:text-paper">
                    <Download aria-hidden className="size-[1.05rem]" strokeWidth={2} />
                    Term prospectus
                  </ButtonLink>
                ) : null}
              </div>
            </div>

            <div className="rounded-2xl border border-paper/12 bg-paper/[0.04] p-5">
              <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-paper/40">
                <MapPin aria-hidden className="size-3 text-amber" strokeWidth={2.4} />
                Visit us
              </p>
              <address className="mt-3 not-italic text-[0.85rem] leading-relaxed text-paper/75">
                {school.address.line1}
                <br />
                {school.address.line2}
                <br />
                {school.address.line3}
              </address>
              <div className="mt-4 flex items-center justify-between border-t border-paper/10 pt-4">
                <p className="text-[0.75rem] text-paper/50">Mon–Fri · {school.hours.weekdays}</p>
                <Link
                  href="/admissions"
                  className="group inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-amber"
                >
                  Admission steps
                  <ArrowRight
                    aria-hidden
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { navLinks, school, telHref, whatsappHref } from "@/lib/school";
import { Hairline } from "@/components/ui/section";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="grain relative">
        <div className="shell pb-[5.75rem] pt-16 lg:pb-10 md:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.55fr_0.75fr]">
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-[0.7rem] bg-paper text-royal">
                  <span className="font-display text-[0.95rem] font-semibold leading-none">
                    GR
                  </span>
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  {school.name}
                </span>
              </div>
              <p className="mt-5 font-display text-[1.6rem] leading-tight tracking-tight text-paper/90">
                <span className="italic-accent text-amber">Applied Knowledge</span> is Power.
              </p>
              <p className="mt-4 max-w-sm text-[0.86rem] leading-relaxed text-paper/55">
                A Creche, Nursery, Primary and Secondary school in Alagbado, Lagos —
                built on discipline, small classes and teaching that shows its working.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-brand px-5 py-2.5 text-[0.82rem] font-semibold text-white transition-colors hover:bg-[#047857]"
                >
                  <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
                  Chat with {school.secretary} on WhatsApp
                </a>
                <a
                  href={telHref()}
                  className="inline-flex w-fit items-center gap-2 text-[0.82rem] font-medium text-paper/70 transition-colors hover:text-amber"
                >
                  <Phone aria-hidden className="size-3.5 text-amber" strokeWidth={2} />
                  {school.phone.display}
                </a>
              </div>
            </div>

            <nav aria-label="Footer" className="flex flex-col gap-3">
              <p className="label-xs text-paper/35">Explore</p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-underline w-fit text-[0.88rem] text-paper/70 hover:text-paper"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admissions#prospectus"
                className="link-underline mt-1 w-fit text-[0.88rem] text-amber"
              >
                Term prospectus
              </Link>
            </nav>

            <div className="flex flex-col gap-5">
              <p className="label-xs text-paper/35">Find us</p>
              <address className="not-italic text-[0.88rem] leading-relaxed text-paper/70">
                {school.address.line1}
                <br />
                {school.address.line2}
                <br />
                {school.address.line3}
              </address>

              <div className="rounded-2xl border border-paper/12 bg-paper/[0.04] p-4">
                <p className="flex items-start gap-2 text-[0.78rem] leading-relaxed text-paper/60">
                  <MapPin aria-hidden className="mt-0.5 size-3.5 shrink-0 text-amber" strokeWidth={2} />
                  <span>
                    Alight at <strong className="font-semibold text-paper/90">Casso B/Stop</strong>{" "}
                    on Suberu-Oje Road — the school is a short walk down Oluode Oginsado Street.
                  </span>
                </p>
                <p className="mt-3 flex items-start gap-2 border-t border-paper/10 pt-3 text-[0.78rem] leading-relaxed text-paper/60">
                  <Clock aria-hidden className="mt-0.5 size-3.5 shrink-0 text-amber" strokeWidth={2} />
                  <span>
                    Office: Mon–Fri {school.hours.weekdays}
                  </span>
                </p>
              </div>

              <a
                href={school.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-1.5 text-[0.82rem] font-semibold text-paper/85 hover:text-amber"
              >
                Get directions
                <ArrowUpRight
                  aria-hidden
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <Hairline tone="light" className="mt-14" />

          <div className="flex flex-col gap-3 pt-5 text-[0.72rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {school.copyrightYear} {school.name}. All rights reserved.
            </p>
            <p className="tracking-[0.12em] uppercase">
              Creche · Nursery · Primary · Secondary
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

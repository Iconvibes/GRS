import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/school";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="shell flex min-h-[62vh] flex-col justify-center py-24">
        <p className="label-xs text-royal/60">404 — page not found</p>
        <h1 className="display-lg mt-5 max-w-[18ch] text-ink">
          This page is not on the timetable.
        </h1>
        <p className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-ink/60">
          The link may be old, or the page may have moved. Start again from the homepage, or
          ask the school office directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="ink" size="lg">
            <ArrowLeft aria-hidden className="size-4" strokeWidth={2} />
            Back to homepage
          </ButtonLink>
          <ButtonAnchor
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
          >
            <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
            Ask the office
          </ButtonAnchor>
        </div>
        <p className="mt-10 text-[0.8rem] text-ink/45">
          Or browse{" "}
          <Link href="/primary" className="font-semibold text-ink underline underline-offset-4">
            Primary
          </Link>{" "}
          and{" "}
          <Link href="/secondary" className="font-semibold text-ink underline underline-offset-4">
            Secondary
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

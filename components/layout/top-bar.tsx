import { MapPin, Phone } from "lucide-react";
import { school, telHref } from "@/lib/school";

export function TopBar() {
  return (
    <div className="relative z-50 border-b border-ink/10 bg-ink text-paper">
      <div className="shell flex h-9 items-center justify-between gap-6">
        <p className="hidden items-center gap-2.5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-paper/55 sm:flex">
          <span aria-hidden className="size-1.5 rounded-full bg-amber" />
          {school.motto}
        </p>

        <p className="flex min-w-0 items-center gap-2 text-[0.66rem] tracking-[0.06em] text-paper/60 sm:hidden">
          <MapPin aria-hidden className="size-3 shrink-0 text-amber" strokeWidth={2} />
          <span className="truncate">{school.address.short}</span>
        </p>

        <div className="flex items-center gap-5">
          <p className="hidden items-center gap-2 text-[0.68rem] tracking-[0.04em] text-paper/60 lg:flex">
            <MapPin aria-hidden className="size-3 text-amber" strokeWidth={2} />
            {school.address.short}
          </p>
          <a
            href={telHref()}
            className="link-underline flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-[0.08em] text-paper/90 hover:text-amber"
          >
            <Phone aria-hidden className="size-3 text-amber" strokeWidth={2.2} />
            <span className="hidden sm:inline">Call {school.secretary}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}

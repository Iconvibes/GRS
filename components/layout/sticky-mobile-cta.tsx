import { MessageCircle, Phone } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/school";

/**
 * Mobile-only action bar. Keeps the two primary conversion paths
 * (WhatsApp + tap-to-call) one thumb away on every page.
 */
export function StickyMobileCta() {
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-2xl items-center gap-2 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-emerald-brand text-[0.82rem] font-semibold text-white"
        >
          <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
          WhatsApp Admissions
        </a>
        <a
          href={telHref()}
          aria-label="Call the school secretary"
          className="flex h-11 items-center justify-center gap-2 rounded-full border border-ink/20 px-4 text-[0.82rem] font-semibold text-ink"
        >
          <Phone aria-hidden className="size-4" strokeWidth={2} />
          Call
        </a>
      </div>
    </div>
  );
}

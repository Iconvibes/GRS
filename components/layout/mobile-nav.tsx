"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react";
import { navLinks, school, telHref, whatsappHref } from "@/lib/school";
import { cn } from "@/lib/utils";
import { ButtonAnchor } from "@/components/ui/button";

export function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-ink/45 backdrop-blur-[2px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute right-0 top-0 flex h-full w-[min(88vw,25rem)] flex-col bg-ink text-paper"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-paper/12 px-6 py-5">
              <span className="label-xs text-paper/45">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-paper/20 text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                <X aria-hidden className="size-4" strokeWidth={2} />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
              {navLinks.map((link, index) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group flex items-baseline justify-between border-b border-paper/10 py-4 transition-colors",
                      active ? "text-amber" : "text-paper hover:text-amber",
                    )}
                  >
                    <span className="font-display text-[1.85rem] leading-none tracking-tight">
                      {link.label}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-[0.6rem] font-medium tracking-[0.2em] text-paper/35">
                        0{index + 1}
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4 border-t border-paper/12 px-6 py-6">
              <p className="text-[0.78rem] leading-relaxed text-paper/55">
                {school.address.line1}
                <br />
                {school.address.line2}
                <br />
                {school.address.line3}
              </p>
              <div className="flex flex-col gap-2.5">
                <ButtonAnchor
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
                  Chat with {school.secretary}
                </ButtonAnchor>
                <ButtonAnchor
                  href={telHref()}
                  variant="outline-light"
                  size="md"
                  className="w-full"
                >
                  <Phone aria-hidden className="size-4" strokeWidth={2} />
                  {school.phone.display}
                </ButtonAnchor>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

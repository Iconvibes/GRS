"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle } from "lucide-react";
import { navLinks, school, whatsappHref } from "@/lib/school";
import { cn } from "@/lib/utils";
import { ButtonAnchor } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500",
          scrolled
            ? "bg-paper/92 shadow-[0_1px_0_0_rgba(15,23,42,0.1)] backdrop-blur-md"
            : "bg-paper/70 backdrop-blur-sm",
        )}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            aria-label={`${school.name} — home`}
            className="group flex items-center gap-3"
          >
            <span className="relative grid size-10 place-items-center overflow-hidden rounded-[0.7rem] bg-royal text-paper shadow-[0_10px_24px_-16px_rgba(30,58,138,1)]">
              <span className="font-display text-[0.95rem] font-semibold leading-none tracking-tight">
                GR
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[3px] bg-amber transition-transform duration-500 group-hover:translate-x-0"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.06rem] font-semibold tracking-tight text-ink">
                Goodness Royal
              </span>
              <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.26em] text-ink/45">
                School · Alagbado
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.83rem] font-medium transition-colors duration-300",
                    active ? "text-ink" : "text-ink/60 hover:text-ink",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-amber transition-transform duration-500",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonAnchor
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              variant="ink"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <MessageCircle aria-hidden className="size-4" strokeWidth={2} />
              Chat on WhatsApp
            </ButtonAnchor>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 lg:hidden"
            >
              <Menu aria-hidden className="size-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}

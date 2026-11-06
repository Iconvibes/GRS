import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { MottoMarquee } from "@/components/sections/motto-marquee";
import { StatsStrip } from "@/components/sections/stats-strip";
import { PathwaySplit } from "@/components/sections/pathway-split";
import { Leadership } from "@/components/sections/leadership";
import { CampusGallery } from "@/components/sections/campus-gallery";
import { DayInTheLife } from "@/components/sections/day-in-the-life";
import { LocationCard } from "@/components/sections/location-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Kicker } from "@/components/ui/section";
import { galleryItems } from "@/lib/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <MottoMarquee />
      <StatsStrip />
      <PathwaySplit />

      <section aria-labelledby="life-heading" className="bg-paper">
        <div className="shell pb-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Kicker>Campus life</Kicker>
              <h2 id="life-heading" className="display-lg mt-5 max-w-[18ch] text-ink">
                This is what a Tuesday{" "}
                <span className="italic-accent">actually looks like</span>.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group inline-flex w-fit items-center gap-2 border-b border-ink/20 pb-1.5 text-[0.82rem] font-semibold text-ink transition-colors hover:border-amber"
            >
              View the full gallery
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-10">
            <CampusGallery items={galleryItems.slice(0, 8)} />
          </div>
        </div>
      </section>

      <DayInTheLife />
      <Leadership />
      <LocationCard />
      <CtaBand />
    </>
  );
}

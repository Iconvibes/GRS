import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CampusGallery } from "@/components/sections/campus-gallery";
import { CtaBand } from "@/components/sections/cta-band";
import { Kicker } from "@/components/ui/section";
import { galleryItems } from "@/lib/gallery";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Campus Life Gallery",
  description:
    "Classrooms, science practicals, sports day, assemblies and the everyday life of Goodness Royal School in Alagbado, Lagos.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Campus life"
        title={
          <>
            School, <span className="italic-accent">unposed</span>.
          </>
        }
        description="Assemblies, practicals, games periods and the ordinary classroom moments in between. Filter by what you would like to see."
        image={images.assemblyGrounds}
        imageAlt="Pupils in uniform lined up on the school grounds during morning assembly"
      />

      <section aria-labelledby="gallery-heading" className="bg-paper">
        <div className="shell pb-16 md:pb-24">
          <div className="mb-8 flex flex-col gap-3 border-t border-ink/12 pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Kicker>Fifteen frames</Kicker>
              <h2 id="gallery-heading" className="display-md mt-4 text-ink">
                The week, in pictures.
              </h2>
            </div>
            <p className="max-w-xs text-[0.78rem] leading-relaxed text-ink/45">
              Photography shown is licensed illustrative imagery. The school&apos;s own
              campus photographs are refreshed each term.
            </p>
          </div>

          <CampusGallery items={galleryItems} />
        </div>
      </section>

      <CtaBand
        eyebrow="See it in person"
        title="Pictures are useful. A visit is better."
        description="Book a weekday morning walk-through and watch a lesson in progress before you decide."
      />
    </>
  );
}

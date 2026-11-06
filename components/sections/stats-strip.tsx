import { stats } from "@/lib/school";
import { Kicker } from "@/components/ui/section";

/**
 * Trust strip. Deliberately asymmetric: the first metric is oversized
 * and the supporting numbers step down, instead of four equal boxes.
 */
export function StatsStrip() {
  return (
    <section aria-label="School at a glance" className="relative bg-paper">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-y-10 border-y border-ink/12 py-10 md:grid-cols-4 md:gap-x-8 md:py-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "group relative flex flex-col gap-2 md:px-6",
                index === 0 ? "md:pl-0" : "",
                index !== 0 ? "md:border-l md:border-ink/10" : "",
              ].join(" ")}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.04em] text-ink md:text-[3.1rem]">
                  {stat.value}
                </span>
                <span className="label-xs pb-1 text-ink/45">{stat.unit}</span>
              </div>
              <p className="text-[0.86rem] font-semibold tracking-tight text-ink">{stat.label}</p>
              <p className="max-w-[26ch] text-[0.8rem] leading-relaxed text-ink/55">{stat.note}</p>
              <span
                aria-hidden
                className="absolute -top-[0.9rem] hidden h-[2px] w-6 bg-amber transition-all duration-500 group-hover:w-12 md:block"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Kicker>Registered in Lagos State</Kicker>
          <p className="text-[0.78rem] text-ink/45">
            Creche · Nursery · Primary · Junior &amp; Senior Secondary
          </p>
        </div>
      </div>
    </section>
  );
}

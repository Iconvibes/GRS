import { ArrowUpRight, Bus, MapPin, Route } from "lucide-react";
import { school } from "@/lib/school";
import { ButtonAnchor } from "@/components/ui/button";
import { Kicker } from "@/components/ui/section";

const routeSteps = [
  {
    icon: Bus,
    title: "Alight at Casso B/Stop",
    body: "Any bus or keke running along Suberu-Oje Road stops here. It is the landmark every driver knows.",
  },
  {
    icon: Route,
    title: "Turn into Oluode Oginsado",
    body: "From the bus stop, walk a short way into Oluode Oginsado Street. The school gate is No. 9, on your right.",
  },
  {
    icon: MapPin,
    title: "Ring at the gate",
    body: "A security officer takes your name at the gate. Visits run weekday mornings — call ahead so Amarachi is expecting you.",
  },
];

export function LocationCard() {
  return (
    <section aria-labelledby="location-heading" className="bg-paper">
      <div className="shell py-20 md:py-28">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 flex flex-col justify-between rounded-[1.75rem] border border-ink/12 bg-paper-dim p-7 md:p-10 lg:order-1">
            <div>
              <Kicker>Find the campus</Kicker>
              <h2 id="location-heading" className="display-md mt-5 max-w-[18ch] text-ink">
                Easy to reach, hard to forget.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[0.92rem] leading-relaxed text-ink/60">
                We sit one turn off Suberu-Oje Road in Alagbado — inside the Casso
                catchment, reachable from Ijaiye, Meiran, Abule-Egba and Agege.
              </p>
            </div>

            <ol className="mt-9 flex flex-col gap-1">
              {routeSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="group relative flex gap-4 rounded-2xl px-2 py-4 transition-colors hover:bg-paper/80"
                >
                  <div className="flex flex-col items-center">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 bg-paper text-royal transition-colors group-hover:border-royal group-hover:bg-royal group-hover:text-paper">
                      <step.icon aria-hidden className="size-4" strokeWidth={1.9} />
                    </span>
                    {index < routeSteps.length - 1 ? (
                      <span aria-hidden className="mt-1 h-full w-px bg-ink/12" />
                    ) : null}
                  </div>
                  <div className="pb-1">
                    <h3 className="text-[0.95rem] font-semibold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 max-w-[38ch] text-[0.84rem] leading-relaxed text-ink/60">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <ButtonAnchor
                href={school.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ink"
                size="md"
              >
                Open in Google Maps
                <ArrowUpRight aria-hidden className="size-4" strokeWidth={2} />
              </ButtonAnchor>
              <ButtonAnchor href="/admissions" variant="outline" size="md">
                Book a visit
              </ButtonAnchor>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-5 lg:order-2">
            {/* Stylised route diagram — no third-party map iframe, so nothing blocks first paint. */}
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[1.75rem] bg-ink text-paper">
              <div className="grain absolute inset-0" />
              <svg
                aria-hidden
                viewBox="0 0 420 360"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <g stroke="rgba(250,250,250,0.12)" strokeWidth="1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 45} x2="420" y2={i * 45} />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 47} y1="0" x2={i * 47} y2="360" />
                  ))}
                </g>
                <path
                  d="M-10 268 H150 Q168 268 168 250 V150 Q168 132 186 132 H300"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="1 9"
                />
                <path
                  d="M-10 320 H420"
                  fill="none"
                  stroke="rgba(250,250,250,0.28)"
                  strokeWidth="10"
                />
                <path
                  d="M300 40 V300"
                  fill="none"
                  stroke="rgba(250,250,250,0.18)"
                  strokeWidth="7"
                />
              </svg>

              <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-paper/20 px-3 py-1.5 text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-paper/70">
                    Alagbado · Lagos
                  </span>
                  <span className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-amber">
                    Not to scale
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-amber text-ink">
                      <Bus aria-hidden className="size-4" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[0.82rem] font-semibold">Casso B/Stop</p>
                      <p className="text-[0.7rem] text-paper/55">Suberu-Oje Road</p>
                    </div>
                  </div>
                  <div className="ml-4 h-10 w-px border-l border-dashed border-amber/70" />
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-paper text-royal">
                      <MapPin aria-hidden className="size-4" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[0.82rem] font-semibold">Goodness Royal School</p>
                      <p className="text-[0.7rem] text-paper/55">No. 9, Oluode Oginsado St.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink/12 px-5 py-4">
              <p className="text-[0.83rem] leading-relaxed text-ink/65">
                <strong className="font-semibold text-ink">Office hours:</strong> Mon–Fri{" "}
                {school.hours.weekdays}. Saturday {school.hours.saturday}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

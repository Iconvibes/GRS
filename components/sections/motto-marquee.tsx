import { school } from "@/lib/school";

const segment = Array.from({ length: 4 });

export function MottoMarquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-b border-ink/10 bg-paper-dim py-4 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
    >
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {segment.map((_, index) => (
              <span key={index} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-display text-[1.02rem] italic tracking-tight text-ink/55">
                  {school.motto}
                </span>
                <span className="text-[0.7rem] text-amber">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

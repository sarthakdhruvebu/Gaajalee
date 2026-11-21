import { CoastalScene } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[min(92svh,860px)] overflow-hidden text-foam"
    >
      <CoastalScene />

      <div className="relative z-10 mx-auto flex min-h-[min(92svh,860px)] max-w-[1120px] flex-col justify-end px-[clamp(1rem,4vw,2rem)] pb-14 pt-16 md:justify-center md:pb-20 md:pt-10">
        <div className="max-w-xl">
          <p className="hero-in hero-delay-1 mb-3 font-display text-[clamp(2.6rem,10vw,4.75rem)] leading-[0.92] tracking-[-0.02em] text-white">
            Gajalee
          </p>
          <h1 className="hero-in hero-delay-2 mb-4 max-w-[18ch] text-[clamp(1.35rem,3.6vw,1.85rem)] font-medium leading-snug text-foam/95">
            Mumbai&apos;s coastal seafood, done the Malvani way
          </h1>
          <p className="hero-in hero-delay-3 mb-8 max-w-[34ch] text-[1.02rem] text-foam/78">
            Fresh catch, family recipes, and the comfort of a Konkani kitchen —
            since 1984.
          </p>
          <div className="hero-in hero-delay-4 flex flex-wrap gap-3">
            <a href="#menu" className="btn-pill btn-accent">
              View menu
            </a>
            <a href="#locations" className="btn-pill btn-ghost-light">
              Find us
            </a>
          </div>
        </div>

        <div className="hero-in hero-delay-5 mt-12 flex items-center gap-3 text-[0.8rem] font-medium tracking-[0.08em] text-foam/55 uppercase md:mt-16">
          <span className="h-px w-8 bg-highlight/80" aria-hidden />
          Three Mumbai kitchens · One coastal soul
        </div>
      </div>

      {/* bottom wave cut into page bg */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 leading-none" aria-hidden>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-10 w-full md:h-14">
          <path
            d="M0 32 C180 8 360 56 540 28 C720 0 900 48 1080 24 C1260 0 1380 28 1440 18 V64 H0Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>
    </section>
  );
}

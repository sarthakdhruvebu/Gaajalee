import { useReveal } from "../hooks/useReveal";
import { MrLabel } from "./MrLabel";

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-24">
      <div
        className="net-pattern pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden
      />
      <div
        ref={ref}
        className="reveal relative z-[1] mx-auto grid max-w-[1120px] gap-10 px-[clamp(1rem,4vw,2rem)] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14"
      >
        <div>
          <MrLabel>आमची गोष्ट</MrLabel>
          <h2 className="mb-5 text-[clamp(1.85rem,4.5vw,2.6rem)]">
            A coastal table people grow up with
          </h2>
          <p className="mb-4 text-[1.05rem] text-body">
            Since <strong className="text-ink">[FOUNDING YEAR]</strong>, Gajalee
            has been Mumbai&apos;s homely coastal kitchen — Malvani spice,
            Konkani soul, and seafood treated with quiet confidence.
          </p>
          <p className="mb-4 text-body">
            <strong className="text-ink">[FOUNDER STORY]</strong> The name means
            a heart-to-heart talk: generous plates, familiar flavours, and a
            place where regulars feel known.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Highlights">
            {[
              { k: "Recipes", v: "Malvani, unchanged" },
              { k: "Catch", v: "Fresh, every day" },
              { k: "Tables", v: "Family favourite" },
            ].map((item) => (
              <li key={item.k} className="border-l-2 border-highlight/80 pl-3">
                <p className="m-0 text-[0.72rem] font-bold tracking-[0.12em] text-primary uppercase">
                  {item.k}
                </p>
                <p className="m-0 mt-1 text-[0.95rem] text-ink">{item.v}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[20px] bg-primary/5 md:-inset-5" aria-hidden />
          <div
            role="img"
            aria-label="Coastal kitchen atmosphere"
            className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-primary p-6 text-foam md:aspect-[5/6]"
          >
            <div className="paper-grain absolute inset-0 opacity-10" aria-hidden />
            <div
              className="absolute inset-x-8 top-10 flex justify-center gap-4 opacity-40"
              aria-hidden
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="steam-wisp h-10 w-6 rounded-full bg-foam/40 blur-[2px]"
                  style={{ animationDelay: `${i * 0.7}s` }}
                />
              ))}
            </div>
            <svg
              className="absolute top-1/3 left-1/2 w-40 -translate-x-1/2 opacity-70 md:w-52"
              viewBox="0 0 160 80"
              aria-hidden
            >
              <ellipse cx="80" cy="48" rx="54" ry="18" fill="none" stroke="#d9a441" strokeWidth="1.2" />
              <path
                d="M30 48 C50 28 70 22 80 22 C90 22 110 28 130 48"
                fill="none"
                stroke="#eef3f2"
                strokeWidth="1.4"
                strokeOpacity="0.55"
              />
              <circle cx="118" cy="40" r="2.5" fill="#eef3f2" />
            </svg>
            <p className="relative z-10 font-display text-3xl leading-none text-white">
              Heart-to-heart
              <br />
              over seafood
            </p>
            <p className="relative z-10 mt-3 max-w-[22ch] text-sm text-foam/70">
              From Vile Parle to the western suburbs — same masala, same memory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

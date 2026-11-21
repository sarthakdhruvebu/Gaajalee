import { SIGNATURES } from "../data/content";
import { useReveal, useRevealGroup } from "../hooks/useReveal";
import { DishArt } from "./DishArt";
import { MrLabel } from "./MrLabel";

const DELAYS = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

export function Signatures() {
  const headRef = useReveal<HTMLElement>();
  const gridRef = useRevealGroup<HTMLDivElement>();

  return (
    <section id="signatures" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-[clamp(1rem,4vw,2rem)]">
        <header ref={headRef} className="reveal mb-8 max-w-2xl md:mb-12">
          <MrLabel>आमची खासियत</MrLabel>
          <h2 className="mb-3 text-[clamp(1.85rem,4.5vw,2.6rem)]">
            Signature dishes
          </h2>
          <p className="m-0 text-body">
            The plates Mumbai keeps coming back for — crisp fries, slow masalas,
            and a cool finish of sol kadhi.
          </p>
        </header>

        <div
          ref={gridRef}
          tabIndex={0}
          aria-label="Signature dishes"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 -mx-[clamp(1rem,4vw,2rem)] px-[clamp(1rem,4vw,2rem)] [scrollbar-width:thin] md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
        >
          {SIGNATURES.map((dish, index) => (
            <article
              key={dish.name}
              className={`reveal w-[min(78vw,280px)] shrink-0 snap-start md:w-auto ${DELAYS[index] ?? "reveal-delay-4"}`}
            >
              <div className="group relative h-full overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(14,58,69,0.14)]">
                <div
                  role="img"
                  aria-label={`${dish.name} illustration`}
                  className="relative aspect-[5/4] overflow-hidden bg-sand"
                >
                  <DishArt name={dish.name} />
                  <span className="pointer-events-none absolute right-3 bottom-2 font-display text-4xl text-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {dish.bestseller ? (
                    <span className="absolute top-3 left-3 z-10 rounded-full bg-highlight px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-ink shadow-sm">
                      ★ Bestseller
                    </span>
                  ) : null}
                </div>
                <div className="p-4 pt-3.5">
                  <p className="m-0 text-[0.72rem] font-medium tracking-wide text-body">
                    {dish.note}
                  </p>
                  <h3 className="mt-1 mb-1.5 text-[1.15rem]">{dish.name}</h3>
                  <p className="mb-3 text-[0.9rem] leading-snug text-body">
                    {dish.desc}
                  </p>
                  <p className="m-0 text-[1rem] font-bold text-accent">{dish.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

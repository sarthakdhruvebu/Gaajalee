import { OUTLETS, type Outlet } from "../data/content";
import { useOutletOpen } from "../hooks/useOutletOpen";
import { useReveal, useRevealGroup } from "../hooks/useReveal";
import { MrLabel } from "./MrLabel";

const DELAYS = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

function LocationCard({
  outlet,
  index,
  delayClass,
}: {
  outlet: Outlet;
  index: number;
  delayClass: string;
}) {
  const open = useOutletOpen(outlet);

  return (
    <article className={`reveal ${delayClass}`}>
      <div className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(14,58,69,0.14)]">
        <div className="relative bg-primary px-5 py-4 text-white">
          <p className="m-0 text-[0.72rem] font-bold tracking-[0.14em] text-highlight uppercase">
            {outlet.area}
          </p>
          <div className="mt-1 flex items-start justify-between gap-3">
            <h3 className="m-0 text-[1.2rem] text-white">{outlet.name}</h3>
            <p className="m-0 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/10 px-2.5 py-1 text-[0.75rem] font-medium">
              <span
                className={`size-2 rounded-full ${
                  open
                    ? "animate-pulse-dot bg-[#3BA55C]"
                    : "bg-[#9aa0ad]"
                }`}
                aria-hidden
              />
              {open ? "Open now" : "Closed"}
            </p>
          </div>
          <span
            className="pointer-events-none absolute right-3 bottom-1 font-display text-6xl text-white/10"
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="mb-4 text-[0.95rem] leading-relaxed text-body">
            {outlet.address}
          </p>
          <p className="mb-5 text-[0.9rem] text-ink">
            <span className="mb-1 block text-[0.7rem] font-bold tracking-[0.12em] text-primary uppercase">
              Hours
            </span>
            {outlet.hoursLabel}
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            <a href={`tel:${outlet.tel}`} className="btn-pill btn-accent !min-h-11 px-4 text-[0.875rem]">
              Call
            </a>
            <a
              href={outlet.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-ghost !min-h-11 px-4 text-[0.875rem]"
            >
              Directions
            </a>
          </div>
          <p className="mt-3 mb-0 text-[0.9rem] font-medium text-primary">
            {outlet.phone}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Locations() {
  const headRef = useReveal<HTMLElement>();
  const gridRef = useRevealGroup<HTMLDivElement>();

  return (
    <section id="locations" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-[clamp(1rem,4vw,2rem)]">
        <header ref={headRef} className="reveal mb-8 max-w-2xl md:mb-12">
          <MrLabel>आमचा पत्ता</MrLabel>
          <h2 className="mb-3 text-[clamp(1.85rem,4.5vw,2.6rem)]">Find us</h2>
          <p className="m-0 text-body">
            Three Mumbai outlets — same coastal kitchen, same Malvani soul.
          </p>
        </header>
        <div ref={gridRef} className="grid gap-5 md:grid-cols-3">
          {OUTLETS.map((outlet, i) => (
            <LocationCard
              key={outlet.name}
              outlet={outlet}
              index={i}
              delayClass={DELAYS[i] ?? "reveal-delay-3"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

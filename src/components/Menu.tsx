import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  CATEGORIES,
  CATEGORY_ICONS,
  MENU_ITEMS,
  type MenuCategory,
} from "../data/menu";
import { CategoryIcon } from "./Icons";
import { MrLabel } from "./MrLabel";
import { useReveal } from "../hooks/useReveal";

export function Menu() {
  const headRef = useReveal<HTMLElement>();
  const [active, setActive] = useState<MenuCategory>(CATEGORIES[0]);
  const tabsRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Map<MenuCategory, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const items = MENU_ITEMS.filter((item) => item.category === active);

  const updateIndicator = () => {
    const tabs = tabsRef.current;
    const btn = btnRefs.current.get(active);
    if (!tabs || !btn) return;
    const tabsRect = tabs.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setIndicator({
      left: btnRect.left - tabsRect.left + tabs.scrollLeft,
      width: btnRect.width,
    });
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [active]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    const tabs = tabsRef.current;
    tabs?.addEventListener("scroll", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      tabs?.removeEventListener("scroll", onResize);
    };
  }, [active]);

  const select = (cat: MenuCategory) => {
    setActive(cat);
    btnRefs.current.get(cat)?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  };

  return (
    <section id="menu" className="relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgb(14_58_69/0.05),transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-[1120px] px-[clamp(1rem,4vw,2rem)]">
        <header ref={headRef} className="reveal mb-8 max-w-2xl">
          <MrLabel>मेनू</MrLabel>
          <h2 className="mb-3 text-[clamp(1.85rem,4.5vw,2.6rem)]">
            The lunch-home card
          </h2>
          <p className="m-0 text-body">
            Classic coastal favourites, written the way a Mumbai lunch home
            would. Prices may vary by outlet. Market-price items are marked{" "}
            <strong className="text-ink">MP</strong>.
          </p>
        </header>

        <div className="sticky top-[calc(2.25rem+3.6rem+3px)] z-50 -mx-[clamp(1rem,4vw,2rem)] bg-bg/95 px-[clamp(1rem,4vw,2rem)] py-3 backdrop-blur-sm md:top-[calc(2.25rem+4rem+3px)]">
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Menu categories"
            className="relative flex gap-2 overflow-x-auto scroll-smooth snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 z-0 h-full min-h-11 rounded-full bg-accent transition-[transform,width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: indicator.width,
                transform: `translateX(${indicator.left}px)`,
              }}
            />
            {CATEGORIES.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  ref={(el) => {
                    if (el) btnRefs.current.set(cat, el);
                    else btnRefs.current.delete(cat);
                  }}
                  onClick={() => select(cat)}
                  className={`relative z-[1] inline-flex min-h-11 shrink-0 snap-start items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[0.86rem] font-medium transition ${
                    isActive
                      ? "bg-transparent text-white"
                      : "bg-primary text-white hover:bg-[#164a56]"
                  }`}
                >
                  <CategoryIcon name={CATEGORY_ICONS[cat]} />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          aria-live="polite"
          className="mt-4 overflow-hidden rounded-[var(--radius-card)] border border-muted/80 bg-foam shadow-soft"
        >
          <div className="flex items-center justify-between border-b border-muted bg-sand/70 px-5 py-3">
            <p className="m-0 font-display text-lg text-primary">{active}</p>
            <p className="m-0 text-[0.75rem] tracking-wide text-body uppercase">
              Gajalee kitchen
            </p>
          </div>
          <div key={active} className="menu-panel-in px-5 py-2">
            {items.map((item) => (
              <article
                key={`${item.category}-${item.name}`}
                className="border-b border-muted/70 py-4 last:border-b-0"
              >
                <div className="flex items-baseline gap-2">
                  <span
                    title={item.veg ? "Vegetarian" : "Non-vegetarian"}
                    aria-label={item.veg ? "Vegetarian" : "Non-vegetarian"}
                    className={`mt-1.5 size-2.5 shrink-0 self-start rounded-full border-[1.5px] ${
                      item.veg
                        ? "border-[#2e7d32] bg-[#2e7d32]"
                        : "border-[#b71c1c] bg-[#b71c1c]"
                    }`}
                  />
                  <span className="shrink-0 font-bold text-ink">{item.name}</span>
                  <span className="leader-dots mx-1 mb-1 min-w-8 flex-1" aria-hidden />
                  <span className="shrink-0 font-bold text-accent">{item.price}</span>
                </div>
                <p className="mt-1 mb-0 ml-5 text-[0.88rem] text-body">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "Story" },
  { href: "#signatures", label: "Signatures" },
  { href: "#menu", label: "Menu" },
  { href: "#locations", label: "Find us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-9 z-[300] transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "bg-primary/95 shadow-[0_10px_30px_rgba(15,26,51,0.35)] backdrop-blur-md"
          : "bg-primary"
      }`}
    >
      <div className="relative mx-auto flex min-h-[3.6rem] max-w-[1120px] items-center justify-between gap-4 px-[clamp(1rem,4vw,2rem)] md:min-h-16">
        <a href="#top" aria-label="Gajalee home" className="relative z-10 shrink-0">
          <img
            src="/logo.png"
            alt="Gajalee"
            width={154}
            height={87}
            className="h-10 w-auto brightness-0 invert md:h-11"
          />
        </a>

        <button
          type="button"
          className="relative z-10 flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 rounded-sm bg-white transition ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-sm bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-sm bg-white transition ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        <nav
          id="site-nav"
          aria-label="Primary"
          className={`absolute inset-x-0 top-full z-20 flex flex-col gap-1 border-t border-white/10 bg-primary px-[clamp(1rem,4vw,2rem)] py-4 shadow-soft transition md:static md:flex-row md:items-center md:gap-0.5 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none md:visible md:translate-y-0 md:opacity-100 md:pointer-events-auto"
          }`}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="flex min-h-11 items-center rounded-lg px-3 text-[0.92rem] font-medium text-white/90 no-underline transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+912226166470"
            onClick={close}
            className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-accent px-5 text-[0.92rem] font-bold text-white no-underline md:mt-0 md:ml-3"
          >
            Call now
          </a>
        </nav>
      </div>
      <div className="brand-stripe animate-shimmer h-[3px]" aria-hidden />
    </header>
  );
}

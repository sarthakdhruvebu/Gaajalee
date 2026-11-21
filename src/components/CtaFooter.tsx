import { useReveal } from "../hooks/useReveal";

export function CtaBand() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="book" className="relative overflow-hidden bg-primary py-16 text-center text-foam md:py-20">
      <div className="paper-grain absolute inset-0 opacity-[0.06]" aria-hidden />
      <div
        className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-highlight/20 blur-3xl"
        aria-hidden
      />
      <div
        ref={ref}
        className="reveal relative mx-auto max-w-[720px] px-[clamp(1rem,4vw,2rem)]"
      >
        <p className="mb-3 inline-flex items-center gap-2.5 font-mr text-[clamp(1.25rem,3vw,1.55rem)] leading-tight text-highlight">
          <span className="inline-block h-[1.1em] w-1 rounded-full bg-highlight" aria-hidden />
          <span className="relative">
            ये ना
            <span className="mr-underline absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-accent" aria-hidden />
          </span>
        </p>
        <h2 className="mb-3 text-[clamp(1.85rem,4.5vw,2.6rem)] text-white">
          Hungry for coastal comfort?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-foam/80">
          Call your nearest outlet to order ahead or keep a table waiting.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:+912226166470" className="btn-pill btn-accent">
            Order / Call
          </a>
          <a href="#locations" className="btn-pill btn-ghost-light">
            Pick an outlet
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a2c34] py-10 text-foam/80">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-[clamp(1rem,4vw,2rem)] md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img
            src="/logo.png"
            alt="Gajalee"
            width={154}
            height={87}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-3 max-w-xs text-[0.92rem]">
            Malvani &amp; Konkani seafood · A Mumbai coastal kitchen since 1984
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-1">
          {[
            { href: "#about", label: "Our story" },
            { href: "#signatures", label: "Signatures" },
            { href: "#menu", label: "Menu" },
            { href: "#locations", label: "Find us" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-10 items-center font-medium text-foam no-underline hover:text-highlight"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div>
          <p className="m-0 text-[0.72rem] font-bold tracking-[0.12em] text-highlight uppercase">
            Talk to us
          </p>
          <a
            href="tel:+912226166470"
            className="mt-2 inline-flex min-h-10 items-center font-medium text-foam no-underline hover:text-white"
          >
            022 2616 6470
          </a>
          <p className="mt-6 mb-0 text-[0.8rem] text-foam/50">
            © {new Date().getFullYear()} Gajalee · Trial demo site
          </p>
        </div>
      </div>
    </footer>
  );
}

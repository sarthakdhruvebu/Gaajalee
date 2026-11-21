export function MrLabel({ children }: { children: string }) {
  return (
    <p className="mr-label mb-2.5 inline-flex items-center gap-2.5 font-mr text-[clamp(1.35rem,3.2vw,1.75rem)] leading-tight text-primary">
      <span
        className="inline-block h-[1.15em] w-1 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      <span className="relative">
        {children}
        <span
          className="mr-underline absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-highlight"
          aria-hidden
        />
      </span>
    </p>
  );
}

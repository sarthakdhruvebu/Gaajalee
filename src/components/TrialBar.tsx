export function TrialBar() {
  return (
    <div
      role="status"
      className="sticky top-0 z-[301] flex min-h-9 items-center justify-center gap-2 bg-ink px-4 py-1.5 text-center text-[0.78rem] font-medium tracking-wide text-foam"
    >
      <span
        className="hidden size-1.5 rounded-full bg-highlight sm:inline-block"
        aria-hidden
      />
      Trial website — for demonstration only. Not an official Gajalee site.
    </div>
  );
}

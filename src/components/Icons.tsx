import type { IconName } from "../data/menu";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CategoryIcon({
  name,
  className = "size-[18px] shrink-0",
}: {
  name: IconName;
  className?: string;
}) {
  switch (name) {
    case "crab":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M8 14c-2 0-4-1.5-4-3.5S6 7 8 7" />
          <path d="M16 14c2 0 4-1.5 4-3.5S18 7 16 7" />
          <ellipse cx="12" cy="14" rx="5" ry="4" />
          <path d="M9 11v-1M15 11v-1M7 17l-2 3M17 17l2 3M10 18v2M14 18v2" />
        </svg>
      );
    case "prawn":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M5 15c2 3 6 5 10 3 3-1.5 5-4 5-7 0-2-1-3.5-3-4" />
          <path d="M17 7c-2 0-4 1-5 3-1 2 0 4 2 5" />
          <path d="M8 16l-2 3M11 17.5l-1 2.5M14 18l-.5 2" />
        </svg>
      );
    case "thali":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="8" cy="9" r="1.2" />
          <circle cx="16" cy="9" r="1.2" />
          <circle cx="8" cy="15" r="1.2" />
        </svg>
      );
    case "leaf":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M5 19c8-1 12-7 13-14-7 1-13 5-14 13z" />
          <path d="M5 19c2-4 6-7 11-9" />
        </svg>
      );
    case "glass":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M8 3h8l-1 10a3 3 0 0 1-6 0L8 3z" />
          <path d="M12 13v5M9 21h6" />
        </svg>
      );
    case "fish":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z" />
          <circle cx="16" cy="12" r="1" />
          <path d="M3 12l3-2M3 12l3 2" />
        </svg>
      );
  }
}

export function WaveDivider() {
  return (
    <div className="relative -my-1 overflow-hidden leading-none" aria-hidden>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="animate-tide block h-10 w-[110%] max-w-none md:h-12"
      >
        <path
          d="M0 28C120 8 240 48 360 28S600 8 720 28 960 48 1080 28 1320 8 1440 28V56H0Z"
          fill="var(--color-muted)"
          opacity="0.35"
        />
        <path
          d="M0 32C120 14 240 50 360 32S600 14 720 32 960 50 1080 32 1320 14 1440 32"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.18"
          strokeWidth="1.25"
        />
      </svg>
    </div>
  );
}

/** Full-bleed coastal scene for the hero — CSS/SVG only */
export function CoastalScene() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,#1a5a66_0%,#0e3a45_48%,#0a2c34_100%)]" />
      <div className="paper-grain absolute inset-0 opacity-[0.07] mix-blend-soft-light" />

      {/* drifting late-afternoon light */}
      <div className="animate-sun-drift absolute -top-24 right-[-10%] h-[55%] w-[70%] rounded-full bg-[radial-gradient(circle,rgb(217_164_65/0.3),transparent_65%)] blur-2xl" />

      {/* distant birds */}
      <svg
        className="animate-bird absolute top-[18%] left-[8%] w-16 opacity-35 md:w-20"
        viewBox="0 0 80 24"
      >
        <path
          d="M4 14 Q12 6 20 14 Q12 10 4 14Z M28 10 Q36 2 44 10 Q36 6 28 10Z M52 14 Q60 7 68 14 Q60 11 52 14Z"
          fill="#eef3f2"
        />
      </svg>
      <svg
        className="animate-bird absolute top-[14%] left-[28%] w-10 opacity-25 md:w-12"
        viewBox="0 0 80 24"
        style={{ animationDelay: "2.5s", animationDuration: "15s" }}
      >
        <path
          d="M12 12 Q20 5 28 12 Q20 8 12 12Z M40 16 Q48 9 56 16 Q48 13 40 16Z"
          fill="#eef3f2"
        />
      </svg>

      {/* distant islands */}
      <svg
        className="absolute bottom-[28%] left-0 w-full opacity-40"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 90 L80 70 L160 85 L280 55 L360 78 L480 48 L560 72 L700 40 L820 68 L940 52 L1080 75 L1200 60 V120 H0Z"
          fill="#0a2c34"
        />
      </svg>

      {/* animated tide layers */}
      <svg
        className="animate-tide absolute bottom-0 left-[-5%] w-[110%] h-[42%]"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 C180 80 320 160 500 110 C680 60 820 150 1000 100 C1160 60 1320 130 1440 90 V220 H0Z"
          fill="#0a2c34"
        />
        <path
          d="M0 150 C200 110 360 180 540 140 C720 100 880 190 1060 145 C1220 110 1340 170 1440 140 V220 H0Z"
          fill="#0e3a45"
          opacity="0.95"
        />
        <path
          d="M0 175 C220 150 400 200 600 170 C800 140 980 205 1180 175 C1300 160 1380 185 1440 170 V220 H0Z"
          fill="#164a56"
        />
      </svg>

      {/* foam line — slow tide */}
      <svg
        className="animate-tide absolute bottom-[14%] left-[-3%] w-[106%] opacity-50"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        style={{ animationDuration: "11s", animationDirection: "reverse" }}
      >
        <path
          d="M0 22 C160 8 320 30 480 16 C640 4 800 28 960 14 C1120 2 1280 24 1440 12"
          fill="none"
          stroke="#eef3f2"
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />
        <path
          d="M0 28 C180 18 340 34 520 22 C700 10 860 32 1040 20 C1200 12 1340 26 1440 18"
          fill="none"
          stroke="#eef3f2"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
      </svg>

      {/* simple boat silhouette */}
      <svg
        className="animate-float absolute bottom-[26%] right-[12%] w-28 opacity-70 md:w-40"
        viewBox="0 0 120 60"
      >
        <path d="M20 38 L100 38 L88 48 H32 Z" fill="#061c22" />
        <path d="M58 38 V12" stroke="#061c22" strokeWidth="2" />
        <path d="M60 12 L82 36 H60 Z" fill="#d9a441" opacity="0.85" />
      </svg>
    </div>
  );
}

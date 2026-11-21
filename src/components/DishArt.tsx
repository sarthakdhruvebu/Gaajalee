/** Animated SVG dish scenes — no image files */

import type { ReactNode } from "react";

type DishArtKind =
  | "crab"
  | "bombil"
  | "surmai"
  | "pomfret"
  | "gassi"
  | "koliwada"
  | "thali"
  | "solkadhi";

const KIND_BY_NAME: Record<string, DishArtKind> = {
  "Crab Masala": "crab",
  "Bombil Fry": "bombil",
  "Surmai Fry": "surmai",
  "Pomfret Tawa Fry": "pomfret",
  "Prawns Gassi": "gassi",
  "Kolambi Koliwada": "koliwada",
  "Malvani Fish Thali": "thali",
  "Sol Kadhi": "solkadhi",
};

function Steam({ className = "" }: { className?: string }) {
  return (
    <g className={className} aria-hidden>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="dish-steam"
          style={{ animationDelay: `${i * 0.55}s` }}
          d={`M${58 + i * 14} 52 Q${62 + i * 14} 36 ${58 + i * 14} 22`}
          fill="none"
          stroke="#eef3f2"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      ))}
    </g>
  );
}

function Sizzle() {
  return (
    <g aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          className="dish-sizzle"
          style={{ animationDelay: `${i * 0.35}s` }}
          cx={40 + i * 22}
          cy={78}
          r="2.2"
          fill="#d9a441"
        />
      ))}
    </g>
  );
}

function ArtCrab() {
  return (
    <>
      <ellipse className="dish-bob" cx="100" cy="78" rx="48" ry="28" fill="#c4452d" />
      <ellipse className="dish-bob" cx="100" cy="74" rx="36" ry="20" fill="#9e3620" />
      <circle className="dish-bob" cx="78" cy="58" r="7" fill="#0e3a45" />
      <circle className="dish-bob" cx="122" cy="58" r="7" fill="#0e3a45" />
      <path
        className="dish-claw"
        d="M58 70 Q40 55 48 42"
        fill="none"
        stroke="#0e3a45"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="dish-claw dish-claw-r"
        d="M142 70 Q160 55 152 42"
        fill="none"
        stroke="#0e3a45"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Steam />
    </>
  );
}

function ArtBombil() {
  return (
    <>
      <ellipse cx="100" cy="92" rx="70" ry="10" fill="#b0c0bb" opacity="0.55" />
      <g className="dish-sizzle-pan">
        <path
          d="M30 78 C50 50 70 42 100 44 C130 42 150 50 170 78 Z"
          fill="#d9a441"
        />
        <path
          d="M38 74 C55 56 75 50 100 52 C125 50 145 56 162 74"
          fill="#0e3a45"
          opacity="0.15"
        />
      </g>
      <Sizzle />
      <Steam />
    </>
  );
}

function ArtSurmai() {
  return (
    <>
      <rect x="28" y="88" width="144" height="8" rx="2" fill="#6a7a76" />
      <g className="dish-bob">
        <ellipse cx="100" cy="68" rx="58" ry="22" fill="#0e3a45" />
        <ellipse cx="100" cy="64" rx="46" ry="14" fill="#1a5a66" />
        <path d="M48 68 L36 58 L36 78 Z" fill="#0e3a45" />
        <circle cx="140" cy="64" r="3" fill="#eef3f2" />
      </g>
      <Sizzle />
    </>
  );
}

function ArtPomfret() {
  return (
    <>
      <ellipse cx="100" cy="96" rx="62" ry="8" fill="#a3b5b0" opacity="0.5" />
      <g className="dish-sway">
        <ellipse cx="100" cy="70" rx="54" ry="26" fill="#0e3a45" />
        <path d="M48 70 Q40 52 52 44 Q70 58 100 58 Q130 58 148 44 Q160 52 152 70 Q160 88 148 96 Q130 82 100 82 Q70 82 52 96 Q40 88 48 70Z" fill="#164a56" />
        <circle cx="138" cy="66" r="3" fill="#d9a441" />
      </g>
      <Steam />
    </>
  );
}

function ArtGassi() {
  return (
    <>
      <ellipse cx="100" cy="98" rx="46" ry="8" fill="#0e3a45" opacity="0.2" />
      <path d="M55 48 H145 L136 96 H64 Z" fill="#c4452d" />
      <path d="M62 56 H138 L132 88 H68 Z" fill="#d45a40" />
      <ellipse className="dish-ripple" cx="100" cy="62" rx="28" ry="8" fill="#e8a890" opacity="0.55" />
      <circle className="dish-bob" cx="82" cy="70" r="6" fill="#0e3a45" />
      <circle className="dish-bob" cx="112" cy="74" r="5" fill="#0e3a45" style={{ animationDelay: "0.4s" }} />
      <Steam />
    </>
  );
}

function ArtKoliwada() {
  const pieces = [
    { x: 55, y: 62 },
    { x: 82, y: 54 },
    { x: 110, y: 64 },
    { x: 136, y: 56 },
  ];
  return (
    <>
      <ellipse cx="100" cy="96" rx="58" ry="9" fill="#b0c0bb" opacity="0.45" />
      {pieces.map((p, i) => (
        <g key={i} className="dish-pop" style={{ animationDelay: `${i * 0.2}s` }}>
          <ellipse cx={p.x} cy={p.y} rx="16" ry="9" fill="#d9a441" />
          <ellipse cx={p.x} cy={p.y - 1} rx="11" ry="5" fill="#b8892e" opacity="0.5" />
        </g>
      ))}
      <Sizzle />
      <Steam />
    </>
  );
}

function ArtThali() {
  return (
    <>
      <circle cx="100" cy="72" r="54" fill="#c8d5d2" />
      <circle cx="100" cy="72" r="48" fill="#eef3f2" />
      <circle className="dish-bob" cx="100" cy="72" r="16" fill="#c4452d" />
      <circle cx="72" cy="54" r="10" fill="#d9a441" />
      <circle cx="128" cy="54" r="10" fill="#0e3a45" />
      <circle cx="70" cy="90" r="9" fill="#1a5a66" />
      <circle cx="130" cy="88" r="9" fill="#d45a40" />
      <Steam />
    </>
  );
}

function ArtSolKadhi() {
  return (
    <>
      <path d="M78 36 H122 L114 100 H86 Z" fill="#eef3f2" stroke="#0e3a45" strokeWidth="2" />
      <path className="dish-pour" d="M82 70 H118 L114 98 H86 Z" fill="#d45a40" opacity="0.85" />
      <ellipse className="dish-ripple" cx="100" cy="70" rx="16" ry="4" fill="#e8a890" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          className="dish-bubble"
          style={{ animationDelay: `${i * 0.45}s` }}
          cx={90 + i * 10}
          cy={86}
          r="2"
          fill="#eef3f2"
          opacity="0.7"
        />
      ))}
      <rect x="86" y="100" width="28" height="6" rx="2" fill="#0e3a45" />
    </>
  );
}

const ARTS: Record<DishArtKind, () => ReactNode> = {
  crab: ArtCrab,
  bombil: ArtBombil,
  surmai: ArtSurmai,
  pomfret: ArtPomfret,
  gassi: ArtGassi,
  koliwada: ArtKoliwada,
  thali: ArtThali,
  solkadhi: ArtSolKadhi,
};

export function DishArt({ name }: { name: string }) {
  const kind = KIND_BY_NAME[name] ?? "thali";
  const Scene = ARTS[kind];

  return (
    <svg
      viewBox="0 0 200 120"
      className="dish-art absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="dishBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dce8e5" />
          <stop offset="55%" stopColor="#c5d4d0" />
          <stop offset="100%" stopColor="#aebfba" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dishBg)" />
      <Scene />
    </svg>
  );
}

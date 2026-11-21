import { useEffect, useState } from "react";
import type { Outlet } from "../data/content";

function parseHM(hm: string): number {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
}

function minutesNowIST(): number {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
  );
  return now.getHours() * 60 + now.getMinutes();
}

export function isOutletOpen(outlet: Outlet, nowMinutes = minutesNowIST()): boolean {
  const lunchOpen = parseHM(outlet.openLunch);
  const lunchClose = parseHM(outlet.closeLunch);
  const dinnerOpen = parseHM(outlet.openDinner);
  const dinnerClose = parseHM(outlet.closeDinner);
  return (
    (nowMinutes >= lunchOpen && nowMinutes < lunchClose) ||
    (nowMinutes >= dinnerOpen && nowMinutes < dinnerClose)
  );
}

export function useOutletOpen(outlet: Outlet): boolean {
  const [open, setOpen] = useState(() => isOutletOpen(outlet));

  useEffect(() => {
    const tick = () => setOpen(isOutletOpen(outlet));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [outlet]);

  return open;
}

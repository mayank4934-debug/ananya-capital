export interface PotdEntry {
  date: string; // YYYY-MM-DD
  problemId: number;
  bonusSP: number;
  featured: boolean;
}

export const POTD_POOL: PotdEntry[] = [
  { date: "2026-01-01", problemId: 1, bonusSP: 75, featured: true },
  { date: "2026-01-02", problemId: 4, bonusSP: 60, featured: false },
  { date: "2026-01-03", problemId: 14, bonusSP: 100, featured: true },
  { date: "2026-01-04", problemId: 26, bonusSP: 50, featured: false },
  { date: "2026-01-05", problemId: 33, bonusSP: 80, featured: true },
  { date: "2026-01-06", problemId: 9, bonusSP: 90, featured: false },
  { date: "2026-01-07", problemId: 38, bonusSP: 65, featured: true },
  { date: "2026-01-08", problemId: 2, bonusSP: 55, featured: false },
  { date: "2026-01-09", problemId: 44, bonusSP: 100, featured: true },
  { date: "2026-01-10", problemId: 12, bonusSP: 70, featured: false },
  { date: "2026-01-11", problemId: 29, bonusSP: 80, featured: false },
  { date: "2026-01-12", problemId: 47, bonusSP: 95, featured: true },
  { date: "2026-01-13", problemId: 6, bonusSP: 50, featured: false },
  { date: "2026-01-14", problemId: 18, bonusSP: 60, featured: false },
  { date: "2026-01-15", problemId: 35, bonusSP: 85, featured: true },
  { date: "2026-01-16", problemId: 40, bonusSP: 70, featured: false },
  { date: "2026-01-17", problemId: 22, bonusSP: 65, featured: false },
  { date: "2026-01-18", problemId: 50, bonusSP: 100, featured: true },
  { date: "2026-01-19", problemId: 7, bonusSP: 75, featured: false },
  { date: "2026-01-20", problemId: 31, bonusSP: 80, featured: true },
  { date: "2026-01-21", problemId: 16, bonusSP: 60, featured: false },
  { date: "2026-01-22", problemId: 43, bonusSP: 90, featured: false },
  { date: "2026-01-23", problemId: 24, bonusSP: 100, featured: true },
  { date: "2026-01-24", problemId: 10, bonusSP: 55, featured: false },
  { date: "2026-01-25", problemId: 36, bonusSP: 75, featured: true },
  { date: "2026-01-26", problemId: 48, bonusSP: 85, featured: false },
  { date: "2026-01-27", problemId: 15, bonusSP: 50, featured: false },
  { date: "2026-01-28", problemId: 41, bonusSP: 70, featured: true },
  { date: "2026-01-29", problemId: 27, bonusSP: 60, featured: false },
  { date: "2026-01-30", problemId: 49, bonusSP: 95, featured: true },
];

/** Returns the POTD entry for a given date string (YYYY-MM-DD).
 *  Falls back to cycling through the pool if the date isn't explicitly listed. */
export function getPOTD(dateStr: string): PotdEntry | undefined {
  const explicit = POTD_POOL.find((e) => e.date === dateStr);
  if (explicit) return explicit;

  // Deterministic fallback: hash date string into pool index
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
  }
  const entry = POTD_POOL[hash % POTD_POOL.length];
  return { ...entry, date: dateStr, featured: false };
}

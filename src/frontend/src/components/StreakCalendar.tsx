import { memo, useMemo, useRef, useState } from "react";

// ── Activity log helpers ─────────────────────────────────────────────────────

export function getActivityLog(): Record<string, number> {
  try {
    const raw = localStorage.getItem("cc_activity_log");
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, number>;
  } catch {
    return {};
  }
}

export function incrementActivity(dateStr?: string) {
  const key = dateStr ?? new Date().toISOString().split("T")[0];
  const log = getActivityLog();
  log[key] = (log[key] ?? 0) + 1;
  localStorage.setItem("cc_activity_log", JSON.stringify(log));
}

// ── Color helpers ────────────────────────────────────────────────────────────

function activityColor(count: number): string {
  if (count === 0) return "bg-muted/60 border-muted";
  if (count === 1) return "bg-green-900/50 border-green-800/40";
  if (count === 2) return "bg-green-700/60 border-green-600/40";
  if (count === 3) return "bg-green-500/70 border-green-400/40";
  return "bg-green-400/90 border-green-300/50";
}

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface TooltipState {
  x: number;
  y: number;
  text: string;
}

interface StreakCalendarProps {
  streak: number;
}

export default memo(function StreakCalendar({ streak }: StreakCalendarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  // Build 52-week grid (364 days) ending today
  const { weeks, monthPositions } = useMemo(() => {
    const log = getActivityLog();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Offset back so the grid ends on today's weekday column
    const dayOfWeek = today.getDay(); // 0 = Sun
    const totalDays = 364; // 52 * 7

    const cells: { date: Date; count: number; dateStr: string }[] = [];
    for (let i = totalDays - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      cells.push({ date: d, count: log[dateStr] ?? 0, dateStr });
    }

    // Add today
    const todayStr = today.toISOString().split("T")[0];
    cells.push({ date: today, count: log[todayStr] ?? 0, dateStr: todayStr });

    // Pad to align grid start to Sunday
    const startDayOfWeek = cells[0].date.getDay();
    const paddedCells = [...Array(startDayOfWeek).fill(null), ...cells];

    // Group into weeks
    const weeksArr: ((typeof cells)[0] | null)[][] = [];
    for (let i = 0; i < paddedCells.length; i += 7) {
      weeksArr.push(
        paddedCells.slice(i, i + 7) as ((typeof cells)[0] | null)[],
      );
    }

    // Month labels: find first appearance of each month
    const monthPos: { label: string; colIndex: number }[] = [];
    let lastMonth = -1;
    for (let col = 0; col < weeksArr.length; col++) {
      const week = weeksArr[col];
      for (const cell of week) {
        if (cell && cell.date.getMonth() !== lastMonth) {
          lastMonth = cell.date.getMonth();
          monthPos.push({ label: MONTH_LABELS[lastMonth], colIndex: col });
          break;
        }
      }
    }

    return { weeks: weeksArr, monthPositions: monthPos, dayOfWeek };
  }, []);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    cell: { date: Date; count: number } | null,
  ) => {
    if (!cell) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    const x = rect.left - containerRect.left + rect.width / 2;
    const y = rect.top - containerRect.top - 4;
    const label = cell.date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const countText =
      cell.count === 0
        ? "No activity"
        : cell.count === 1
          ? "1 activity"
          : `${cell.count} activities`;
    setTooltip({ x, y, text: `${label} — ${countText}` });
  };

  return (
    <div className="space-y-3" data-ocid="streak-calendar.section">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <span className="text-base font-bold text-foreground">
            {streak} Day Streak
          </span>
        </div>
        <span className="text-xs text-muted-foreground">Last 365 days</span>
      </div>

      {/* Calendar grid — scrollable on mobile */}
      <div
        ref={containerRef}
        className="relative overflow-x-auto pb-1"
        onMouseLeave={() => setTooltip(null)}
      >
        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute z-20 pointer-events-none bg-card border border-border rounded-lg px-2.5 py-1.5 text-xs text-foreground shadow-lg whitespace-nowrap"
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -100%)",
            }}
          >
            {tooltip.text}
          </div>
        )}

        <div className="inline-flex flex-col gap-0">
          {/* Month labels row */}
          <div className="flex gap-[3px] mb-1 pl-0">
            {weeks.map((_, colIdx) => {
              const mp = monthPositions.find((m) => m.colIndex === colIdx);
              return (
                <div
                  key={colIdx}
                  className="w-[10px] text-[8px] text-muted-foreground font-medium leading-none select-none"
                  style={{ minWidth: 10 }}
                >
                  {mp ? mp.label : ""}
                </div>
              );
            })}
          </div>

          {/* Day rows: Sun=0 .. Sat=6 */}
          {[0, 1, 2, 3, 4, 5, 6].map((dayRow) => (
            <div key={dayRow} className="flex gap-[3px]">
              {weeks.map((week, colIdx) => {
                const cell = week[dayRow];
                return (
                  <div
                    key={colIdx}
                    className={`w-[10px] h-[10px] rounded-sm border transition-transform hover:scale-125 cursor-default ${
                      cell ? activityColor(cell.count) : "opacity-0"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e, cell)}
                    aria-label={
                      cell
                        ? `${cell.dateStr}: ${cell.count} activities`
                        : undefined
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((lvl) => (
          <div
            key={lvl}
            className={`w-[10px] h-[10px] rounded-sm border ${activityColor(lvl)}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
});

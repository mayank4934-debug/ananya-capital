import { RefreshCw } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface LeaderboardEntry {
  rank: number;
  username: string;
  xp: number;
  level: number;
  streak: number;
  avatar: string;
  isCurrentUser?: boolean;
}

// ── Mock users ────────────────────────────────────────────────────────────────

const MOCK_NAMES = [
  { name: "Arjun Sharma", avatar: "🧑‍💻" },
  { name: "Priya Mehta", avatar: "👩‍💻" },
  { name: "Rohan Verma", avatar: "🧑‍🎓" },
  { name: "Ananya Singh", avatar: "👩‍🎓" },
  { name: "Kiran Patel", avatar: "🧑‍🔬" },
  { name: "Sneha Gupta", avatar: "👩‍🏫" },
  { name: "Vikram Rao", avatar: "🧑‍💼" },
  { name: "Deepa Nair", avatar: "👩‍💼" },
  { name: "Aditya Kumar", avatar: "🧑‍🚀" },
  { name: "Meera Iyer", avatar: "👩‍🎨" },
  { name: "Rahul Das", avatar: "🧑‍🏫" },
  { name: "Kavya Reddy", avatar: "👩‍🔬" },
  { name: "Suresh Pillai", avatar: "🧑‍🎨" },
  { name: "Pooja Bansal", avatar: "👩‍💻" },
  { name: "Dev Anand", avatar: "🧑‍💻" },
];

function buildLeaderboard(
  username: string,
  xp: number,
  level: number,
  streak: number,
): LeaderboardEntry[] {
  const baseXps = [
    980, 870, 760, 650, 530, 450, 380, 290, 180, 160, 140, 120, 100, 80, 60,
  ];
  const mocks: LeaderboardEntry[] = MOCK_NAMES.map((m, i) => ({
    rank: 0,
    username: m.name,
    xp: baseXps[i] + Math.floor(Math.random() * 30),
    level: Math.max(1, Math.floor(baseXps[i] / 100) + 1),
    streak: 1 + Math.floor(Math.random() * 20),
    avatar: m.avatar,
    isCurrentUser: false,
  }));

  const user: LeaderboardEntry = {
    rank: 0,
    username: username || "You",
    xp,
    level,
    streak,
    avatar: "🌟",
    isCurrentUser: true,
  };

  const all = [...mocks, user].sort((a, b) => b.xp - a.xp);
  return all.map((e, i) => ({ ...e, rank: i + 1 }));
}

function loadLeaderboard(
  username: string,
  xp: number,
  level: number,
  streak: number,
): LeaderboardEntry[] {
  const board = buildLeaderboard(username, xp, level, streak);
  localStorage.setItem("cc_leaderboard", JSON.stringify(board));
  return board;
}

// ── Rank medal ────────────────────────────────────────────────────────────────

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="text-xl leading-none">🥇</span>;
  if (rank === 2) return <span className="text-xl leading-none">🥈</span>;
  if (rank === 3) return <span className="text-xl leading-none">🥉</span>;
  return (
    <span className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold text-muted-foreground">
      {rank}
    </span>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

interface LeaderboardProps {
  username: string;
  xp: number;
  level: number;
  streak: number;
}

const PAGE_SIZE = 5;

export default memo(function Leaderboard({
  username,
  xp,
  level,
  streak,
}: LeaderboardProps) {
  const { setPage } = useApp();
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [lastRefresh, setLastRefresh] = useState(Date.now());
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const refresh = useCallback(() => {
    const board = loadLeaderboard(username, xp, level, streak);
    setEntries(board);
    setLastRefresh(Date.now());
    // Don't reset visibleCount on refresh — keep user's expanded state
  }, [username, xp, level, streak]);

  // Initial load + auto-refresh every 30s
  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [refresh]);

  const currentUser = entries.find((e) => e.isCurrentUser);
  const visibleEntries = entries.slice(0, visibleCount);
  const hasMore = visibleCount < entries.length;

  const secondsAgo = Math.floor((Date.now() - lastRefresh) / 1000);
  const timeLabel =
    secondsAgo < 5
      ? "Just now"
      : secondsAgo < 60
        ? `${secondsAgo}s ago`
        : `${Math.floor(secondsAgo / 60)}m ago`;

  return (
    <div className="space-y-3" data-ocid="leaderboard.section">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Updated {timeLabel}
          </span>
        </div>
        <button
          type="button"
          onClick={refresh}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          aria-label="Refresh leaderboard"
          data-ocid="leaderboard.refresh_button"
        >
          <RefreshCw className="w-3 h-3" />
          Refresh
        </button>
      </div>

      {/* Current user rank pill */}
      {currentUser && (
        <div className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5">
          <span className="text-base">{currentUser.avatar}</span>
          <span className="text-sm font-semibold text-foreground flex-1 min-w-0 truncate">
            Your Rank
          </span>
          <span className="text-sm font-bold text-primary">
            #{currentUser.rank}
          </span>
        </div>
      )}

      {/* Showing count */}
      <p className="text-xs text-muted-foreground">
        Showing{" "}
        <strong className="text-foreground">{visibleEntries.length}</strong> of{" "}
        <strong className="text-foreground">{entries.length}</strong> learners
      </p>

      {/* Leaderboard list */}
      <div className="space-y-1.5">
        {visibleEntries.map((entry) => {
          const xpPct = Math.min(100, (entry.xp / 1000) * 100);
          return (
            <button
              key={entry.username}
              type="button"
              data-ocid={`leaderboard.item.${entry.rank}`}
              onClick={() => {
                if (!entry.isCurrentUser) {
                  localStorage.setItem("cc_viewingUser", entry.username);
                  setPage("profile");
                }
              }}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors text-left ${
                entry.isCurrentUser
                  ? "bg-primary/10 border-primary/30 shadow-sm cursor-default"
                  : "bg-muted/40 border-border hover:border-primary/40 hover:bg-muted/70 cursor-pointer"
              }`}
            >
              <div className="flex items-center justify-center w-7 shrink-0">
                <RankBadge rank={entry.rank} />
              </div>
              <span className="text-xl shrink-0">{entry.avatar}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-sm font-semibold truncate ${
                      entry.isCurrentUser ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {entry.username}
                    {entry.isCurrentUser && (
                      <span className="ml-1 text-[10px] font-bold text-primary/70">
                        (You)
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        entry.isCurrentUser ? "bg-primary" : "bg-primary/50"
                      }`}
                      style={{ width: `${xpPct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                    {entry.xp} XP
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5 shrink-0">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full border ${
                    entry.isCurrentUser
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-muted text-muted-foreground border-border"
                  }`}
                >
                  Lv {entry.level}
                </span>
                <span className="text-[10px] text-orange-400">
                  🔥 {entry.streak}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center pt-1">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-5 py-2 rounded-full transition-colors"
            data-ocid="leaderboard.load_more_button"
          >
            Load {Math.min(PAGE_SIZE, entries.length - visibleCount)} more
          </button>
        </div>
      )}

      {!hasMore && entries.length > 0 && (
        <p className="text-center text-xs text-muted-foreground pt-1">
          All {entries.length} learners shown
        </p>
      )}
    </div>
  );
});

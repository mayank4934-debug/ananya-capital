import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Code,
  Edit,
  Flame,
  Share2,
  Star,
  Trophy,
  UserCheck,
  UserPlus,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import WhatsAppAvatar, {
  DEFAULT_AVATAR_CONFIG,
} from "../components/WhatsAppAvatar";
import { useApp } from "../context/AppContext";
import { CODING_PROBLEMS } from "../data/problems";

const BADGE_META: Record<
  string,
  { icon: string; label: string; color: string }
> = {
  "first-problem": {
    icon: "🚀",
    label: "First Steps",
    color:
      "text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800",
  },
  "streak-7": {
    icon: "🔥",
    label: "Week Warrior",
    color:
      "text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800",
  },
  "code-master": {
    icon: "💻",
    label: "Code Master",
    color:
      "text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800",
  },
  "love-call": {
    icon: "💖",
    label: "Love Call",
    color:
      "text-pink-600 bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800",
  },
  "hot-streak": {
    icon: "⚡",
    label: "Hot Streak",
    color:
      "text-yellow-600 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
  },
  century: {
    icon: "💯",
    label: "Century",
    color:
      "text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
  },
  enrolled: {
    icon: "📚",
    label: "Scholar",
    color:
      "text-teal-600 bg-teal-50 border-teal-200 dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-800",
  },
};

const DOMAIN_META: Record<string, { icon: string; label: string }> = {
  frontend: { icon: "🌐", label: "Frontend Dev" },
  backend: { icon: "⚙️", label: "Backend Dev" },
  python: { icon: "🐍", label: "Python" },
  java: { icon: "☕", label: "Java" },
  "data-science": { icon: "📊", label: "Data Science" },
  ml: { icon: "🤖", label: "ML / AI" },
  "c-programming": { icon: "🔧", label: "Programming in C" },
  devops: { icon: "🚢", label: "DevOps" },
  cybersecurity: { icon: "🔐", label: "Cybersecurity" },
  cloud: { icon: "☁️", label: "Cloud" },
  android: { icon: "📱", label: "Android" },
  ios: { icon: "🍎", label: "iOS Dev" },
  blockchain: { icon: "⛓️", label: "Blockchain" },
  "game-dev": { icon: "🎮", label: "Game Dev" },
  "ui-ux": { icon: "🎨", label: "UI/UX Design" },
  "full-stack": { icon: "🏗️", label: "Full Stack" },
};

const DIFF_COLORS: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
  Medium:
    "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
  Hard: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
};

function getCourseProgress(courseId: string): number {
  try {
    const key = `cc_course_progress_${courseId}`;
    const val = localStorage.getItem(key);
    if (val !== null) return Math.min(100, Math.max(0, Number(val)));
    // Deterministic mock so it's stable per course
    const hash = courseId
      .split("")
      .reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return (hash % 85) + 5;
  } catch {
    return 0;
  }
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Jan 2025";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Jan 2025";
  }
}

export default function UserProfilePage({
  targetUsername,
}: { targetUsername?: string }) {
  const { user, setPage } = useApp();

  // Determine whose profile we're showing
  const viewingUsername: string =
    targetUsername || localStorage.getItem("cc_viewingUser") || user.username;

  const isOwnProfile = !viewingUsername || viewingUsername === user.username;

  // Follow state
  const followKey = `following_${viewingUsername}`;
  const [isFollowing, setIsFollowing] = useState<boolean>(() => {
    try {
      const list: string[] = JSON.parse(
        localStorage.getItem("followingList") ?? "[]",
      );
      return list.includes(viewingUsername);
    } catch {
      return false;
    }
  });

  const toggleFollow = () => {
    try {
      const list: string[] = JSON.parse(
        localStorage.getItem("followingList") ?? "[]",
      );
      const next = isFollowing
        ? list.filter((u) => u !== viewingUsername)
        : [...list, viewingUsername];
      localStorage.setItem("followingList", JSON.stringify(next));
      localStorage.setItem(followKey, String(!isFollowing));
      setIsFollowing(!isFollowing);
      toast.success(
        isFollowing
          ? `Unfollowed ${viewingUsername}`
          : `Following ${viewingUsername} 🎉`,
      );
    } catch {
      setIsFollowing(!isFollowing);
    }
  };

  const shareProfile = () => {
    const url = `${window.location.href.split("?")[0]}?profile=${encodeURIComponent(viewingUsername)}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Profile link copied to clipboard!");
      })
      .catch(() => {
        toast.info(`Profile: ${url}`);
      });
  };

  // Profile data — use own data for own profile
  const profileData = isOwnProfile
    ? user
    : {
        username: viewingUsername,
        xp: 320,
        level: 4,
        streak: 12,
        badges: ["first-problem", "streak-7"],
        solvedProblems: ["1", "2", "5", "8", "12"],
        enrolledCourses: ["frontend", "python"],
        avatarConfig: null,
      };

  const solvedProblems = profileData.solvedProblems ?? [];
  const enrolledCourses = profileData.enrolledCourses ?? [];
  const badges = profileData.badges ?? [];

  // Group solved problems by difficulty
  const solvedByDiff = useMemo(() => {
    const easy: typeof CODING_PROBLEMS = [];
    const medium: typeof CODING_PROBLEMS = [];
    const hard: typeof CODING_PROBLEMS = [];
    for (const id of solvedProblems) {
      const p = CODING_PROBLEMS.find((x) => String(x.id) === String(id));
      if (!p) continue;
      if (p.difficulty === "Easy") easy.push(p);
      else if (p.difficulty === "Medium") medium.push(p);
      else hard.push(p);
    }
    return { easy, medium, hard };
  }, [solvedProblems]);

  const totalXP = profileData.xp ?? 0;
  const level = profileData.level ?? 1;
  const streak = profileData.streak ?? 0;
  const xpInLevel = totalXP % 100;

  return (
    <div
      className="h-screen bg-background flex flex-col overflow-hidden"
      data-ocid="profile.page"
    >
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            localStorage.removeItem("cc_viewingUser");
            setPage("dashboard");
          }}
          className="rounded-xl text-foreground shrink-0"
          data-ocid="profile.back_button"
          aria-label="Back to Dashboard"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-foreground text-base truncate">
            {isOwnProfile ? "My Profile" : `${viewingUsername}'s Profile`}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {!isOwnProfile ? (
            <Button
              size="sm"
              variant={isFollowing ? "outline" : "default"}
              onClick={toggleFollow}
              className="rounded-full gap-1.5 text-xs"
              data-ocid="profile.follow_button"
            >
              {isFollowing ? (
                <UserCheck className="w-3.5 h-3.5" />
              ) : (
                <UserPlus className="w-3.5 h-3.5" />
              )}
              {isFollowing ? "Following" : "Follow"}
            </Button>
          ) : (
            <span
              className="text-xs text-muted-foreground px-3 py-1.5 border border-border rounded-full flex items-center gap-1"
              data-ocid="profile.edit_label"
            >
              <Edit className="w-3 h-3" /> Your Profile
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={shareProfile}
            className="rounded-xl"
            data-ocid="profile.share_button"
            aria-label="Share profile"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-5 space-y-5 pb-24">
          {/* Profile Hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-5"
            data-ocid="profile.hero_card"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <WhatsAppAvatar
                  config={profileData.avatarConfig ?? DEFAULT_AVATAR_CONFIG}
                  size={72}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-extrabold text-foreground text-xl truncate">
                  {profileData.username || "Anonymous"}
                </h2>
                <p className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Joined{" "}
                  {isOwnProfile && user.email ? formatDate() : "Jan 2025"}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="flex items-center gap-1 text-xs font-bold bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full">
                    <Zap className="w-3 h-3" /> Level {level}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800 px-2.5 py-1 rounded-full">
                    <Flame className="w-3 h-3" /> {streak} day streak
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold bg-yellow-50 text-yellow-700 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800 px-2.5 py-1 rounded-full">
                    <Star className="w-3 h-3" /> {totalXP} XP
                  </span>
                </div>
              </div>
            </div>
            {/* XP Bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                <span>Progress to Level {level + 1}</span>
                <span>{xpInLevel}/100 XP</span>
              </div>
              <Progress value={xpInLevel} className="h-2" />
            </div>
          </motion.div>

          {/* Solved Problems */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-5"
            data-ocid="profile.problems_section"
          >
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              Solved Problems
              <span className="ml-auto text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {solvedProblems.length} total
              </span>
            </h3>

            {solvedProblems.length === 0 ? (
              <div
                className="text-center py-6 text-muted-foreground text-sm"
                data-ocid="profile.problems.empty_state"
              >
                <Code className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p>No problems solved yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {(
                  [
                    {
                      label: "Easy",
                      items: solvedByDiff.easy,
                      color: "#22c55e",
                    },
                    {
                      label: "Medium",
                      items: solvedByDiff.medium,
                      color: "#eab308",
                    },
                    {
                      label: "Hard",
                      items: solvedByDiff.hard,
                      color: "#ef4444",
                    },
                  ] as const
                ).map(
                  ({ label, items }) =>
                    items.length > 0 && (
                      <div key={label}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-full border ${DIFF_COLORS[label]}`}
                          >
                            {label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {items.length} solved
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {items.slice(0, 8).map((p) => (
                            <span
                              key={p.id}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-lg border border-border truncate max-w-[160px]"
                              title={p.title}
                            >
                              {p.title}
                            </span>
                          ))}
                          {items.length > 8 && (
                            <span className="text-xs text-muted-foreground px-2 py-1">
                              +{items.length - 8} more
                            </span>
                          )}
                        </div>
                      </div>
                    ),
                )}
              </div>
            )}
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-5"
            data-ocid="profile.badges_section"
          >
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              Badges Earned
              <span className="ml-auto text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800 px-2 py-0.5 rounded-full">
                {badges.length}
              </span>
            </h3>
            {badges.length === 0 ? (
              <div
                className="text-center py-6 text-muted-foreground text-sm"
                data-ocid="profile.badges.empty_state"
              >
                <Trophy className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p>No badges yet — keep learning!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {badges.map((badgeId, idx) => {
                  const meta = BADGE_META[badgeId] ?? {
                    icon: "🏅",
                    label: badgeId,
                    color: "text-muted-foreground bg-muted border-border",
                  };
                  return (
                    <div
                      key={`${badgeId}-${idx}`}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border ${meta.color}`}
                      data-ocid={`profile.badge.${idx + 1}`}
                    >
                      <span className="text-2xl shrink-0">{meta.icon}</span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">
                          {meta.label}
                        </div>
                        <div className="text-[10px] opacity-70">Earned</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Course Progress */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-5"
            data-ocid="profile.courses_section"
          >
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              Course Progress
              <span className="ml-auto text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800 px-2 py-0.5 rounded-full">
                {enrolledCourses.length} enrolled
              </span>
            </h3>
            {enrolledCourses.length === 0 ? (
              <div
                className="text-center py-6 text-muted-foreground text-sm"
                data-ocid="profile.courses.empty_state"
              >
                <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p>No courses enrolled yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {enrolledCourses.map((courseId, idx) => {
                  const meta = DOMAIN_META[courseId] ?? {
                    icon: "📘",
                    label: courseId,
                  };
                  const pct = getCourseProgress(courseId);
                  return (
                    <div
                      key={courseId}
                      className="flex items-center gap-3"
                      data-ocid={`profile.course.${idx + 1}`}
                    >
                      <span className="text-2xl shrink-0">{meta.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-foreground truncate">
                            {meta.label}
                          </span>
                          <span className="text-xs font-bold text-primary ml-2 shrink-0">
                            {pct}%
                          </span>
                        </div>
                        <Progress value={pct} className="h-1.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

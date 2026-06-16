import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Code,
  Download,
  Flame,
  LayoutDashboard,
  MessageSquare,
  Palette,
  Pencil,
  Plus,
  Share2,
  ShoppingBag,
  StickyNote,
  Trash2,
  TrendingUp,
  Trophy,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import AvatarBuilder from "../components/AvatarBuilder";
import { JOB_LISTINGS, type JobListing } from "../data/jobListings";

// ── Local Note type (localStorage-backed) ────────────────────────────────────
interface LocalNote {
  id: string;
  title: string;
  content: string;
  topicId: string;
  createdAt: string;
  updatedAt: string;
}

function loadNotes(): LocalNote[] {
  try {
    return JSON.parse(localStorage.getItem("cc_notes") ?? "[]") as LocalNote[];
  } catch {
    return [];
  }
}

function saveNotesToStorage(notes: LocalNote[]) {
  localStorage.setItem("cc_notes", JSON.stringify(notes));
}
import CompanionDressAvatar from "../components/CompanionDressAvatar";
import Leaderboard from "../components/Leaderboard";
import QuizScoreChart from "../components/QuizScoreChart";
import StreakCalendar from "../components/StreakCalendar";
import WhatsAppAvatar, {
  DEFAULT_AVATAR_CONFIG,
} from "../components/WhatsAppAvatar";
import {
  type AppTheme,
  type AvatarConfig,
  type WalletEntry,
  useApp,
} from "../context/AppContext";
import { C_PROGRAMMING_COURSE } from "../data/cProgrammingCourse";
import {
  CLOTHING_ITEMS,
  type ClothingSlot,
  SLOT_LABELS,
} from "../data/clothing";
import { COMPANION_PRESETS } from "../data/companions";
import { ROADMAPS } from "../data/roadmaps";

const XP_PER_LEVEL = 100;

const DAILY_TIPS = [
  {
    icon: "💧",
    tip: "Drink water regularly! Hydration improves focus and memory retention by up to 20%.",
  },
  {
    icon: "💡",
    tip: "Study in 25-minute sprints with 5-minute breaks. The Pomodoro Technique beats marathon sessions every time.",
  },
  {
    icon: "🌙",
    tip: "Sleep is when your brain consolidates code! Aim for 7-8 hours to retain what you learned today.",
  },
  {
    icon: "🤸",
    tip: "Stretch every 45 minutes. A 2-minute stretch improves blood flow and keeps you sharp.",
  },
  {
    icon: "🎧",
    tip: "Lo-fi music or white noise can boost concentration by 15%. Try it for your next session!",
  },
  {
    icon: "✏️",
    tip: "Write code by hand occasionally. It strengthens understanding far better than copy-paste.",
  },
  {
    icon: "🧠",
    tip: "Teach what you learn. Explaining a concept out loud reveals gaps in your knowledge instantly.",
  },
  {
    icon: "🍎",
    tip: "Brain food: blueberries, dark chocolate, and nuts support focus and cognitive performance!",
  },
  {
    icon: "👀",
    tip: "Follow the 20-20-20 rule: every 20 mins, look at something 20 feet away for 20 seconds.",
  },
  {
    icon: "📝",
    tip: "Review your notes within 24 hours. The forgetting curve drops sharply — re-reading locks it in.",
  },
  {
    icon: "🌳",
    tip: "A short walk outside resets your mind and improves creative problem-solving skills.",
  },
  {
    icon: "💪",
    tip: "Progress beats perfection. Solving one problem imperfectly beats planning forever.",
  },
];

const AMBIENT_TRACKS = [
  {
    id: "lofi",
    name: "Lo-Fi Chill",
    emoji: "🎵",
    desc: "Brown noise + soft tones",
  },
  {
    id: "rain",
    name: "Rain Sounds",
    emoji: "🌧️",
    desc: "Relaxing rain droplets",
  },
  { id: "white", name: "White Noise", emoji: "🔮", desc: "Pure focus noise" },
  {
    id: "jazz",
    name: "Study Jazz",
    emoji: "🎷",
    desc: "Soft chord progressions",
  },
];

// ── Singleton audio context (never re-created on re-render) ──────────────────
let _sharedAudioCtx: AudioContext | null = null;
let _sharedMasterGain: GainNode | null = null;

function getSharedAudioCtx(volume: number) {
  if (!_sharedAudioCtx || _sharedAudioCtx.state === "closed") {
    _sharedAudioCtx = new AudioContext();
    _sharedMasterGain = _sharedAudioCtx.createGain();
    _sharedMasterGain.gain.value = volume / 100;
    _sharedMasterGain.connect(_sharedAudioCtx.destination);
  }
  return { ctx: _sharedAudioCtx, master: _sharedMasterGain! };
}

function buildLofi(ctx: AudioContext, master: GainNode) {
  const bufSize = ctx.sampleRate * 4;
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  let b0 = 0;
  let b1 = 0;
  let b2 = 0;
  let b3 = 0;
  let b4 = 0;
  let b5 = 0;
  let b6 = 0;
  for (let i = 0; i < bufSize; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + w * 0.0555179;
    b1 = 0.99332 * b1 + w * 0.0750759;
    b2 = 0.969 * b2 + w * 0.153852;
    b3 = 0.8665 * b3 + w * 0.3104856;
    b4 = 0.55 * b4 + w * 0.5329522;
    b5 = -0.7616 * b5 - w * 0.016898;
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
    b6 = w * 0.115926;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const lpf = ctx.createBiquadFilter();
  lpf.type = "lowpass";
  lpf.frequency.value = 200;
  const delay = ctx.createDelay(0.5);
  delay.delayTime.value = 0.3;
  const fb = ctx.createGain();
  fb.gain.value = 0.25;
  src.connect(lpf);
  lpf.connect(master);
  lpf.connect(delay);
  delay.connect(fb);
  fb.connect(delay);
  delay.connect(master);
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.value = 220;
  const oscGain = ctx.createGain();
  oscGain.gain.value = 0;
  osc.connect(oscGain);
  oscGain.connect(master);
  src.start();
  osc.start();
  let t = 0;
  const iv = setInterval(() => {
    t++;
    if (t % 8 === 0) {
      oscGain.gain.setTargetAtTime(0.04, ctx.currentTime, 0.1);
      oscGain.gain.setTargetAtTime(0, ctx.currentTime + 1, 0.3);
    }
  }, 1000);
  return () => {
    clearInterval(iv);
    try {
      src.stop();
      osc.stop();
    } catch (_) {}
  };
}

function buildRain(ctx: AudioContext, master: GainNode) {
  const bufSize = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const bpf = ctx.createBiquadFilter();
  bpf.type = "bandpass";
  bpf.frequency.value = 1200;
  bpf.Q.value = 0.5;
  const g = ctx.createGain();
  g.gain.value = 0.3;
  src.connect(bpf);
  bpf.connect(g);
  g.connect(master);
  src.start();
  let on = true;
  const iv = setInterval(() => {
    if (!on) return;
    g.gain.setTargetAtTime(0.1 + Math.random() * 0.3, ctx.currentTime, 0.05);
  }, 80);
  return () => {
    on = false;
    clearInterval(iv);
    try {
      src.stop();
    } catch (_) {}
  };
}

function buildWhite(ctx: AudioContext, master: GainNode) {
  const bufSize = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const lpf = ctx.createBiquadFilter();
  lpf.type = "lowpass";
  lpf.frequency.value = 1500;
  const g = ctx.createGain();
  g.gain.value = 0.2;
  src.connect(lpf);
  lpf.connect(g);
  g.connect(master);
  src.start();
  return () => {
    try {
      src.stop();
    } catch (_) {}
  };
}

function buildJazz(ctx: AudioContext, master: GainNode) {
  const chords = [
    [261, 329, 392, 523],
    [293, 370, 440, 587],
    [349, 440, 523, 698],
    [261, 329, 392, 523],
  ];
  let ci = 0;
  let active: OscillatorNode[] = [];
  const playChord = () => {
    for (const o of active) {
      try {
        o.stop();
      } catch (_) {}
    }
    active = [];
    const chord = chords[ci++ % chords.length];
    for (const freq of chord) {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.1);
      g.gain.setTargetAtTime(0.03, ctx.currentTime + 0.1, 0.5);
      osc.connect(g);
      g.connect(master);
      osc.start();
      active.push(osc);
    }
  };
  playChord();
  const iv = setInterval(playChord, 2500);
  return () => {
    clearInterval(iv);
    for (const o of active) {
      try {
        o.stop();
      } catch (_) {}
    }
  };
}

// ── AmbientPlayer — memoized, uses singleton AudioContext ───────────────────
const AmbientPlayer = memo(function AmbientPlayer() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState(60);
  const stopRef = useRef<(() => void) | null>(null);
  const volumeDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopCurrent = useCallback(() => {
    if (stopRef.current) {
      stopRef.current();
      stopRef.current = null;
    }
  }, []);

  const toggle = useCallback(
    (id: string) => {
      if (playing === id) {
        stopCurrent();
        setPlaying(null);
        return;
      }
      stopCurrent();
      const { ctx, master } = getSharedAudioCtx(volume);
      if (ctx.state === "suspended") ctx.resume();
      let stop: () => void;
      if (id === "lofi") stop = buildLofi(ctx, master);
      else if (id === "rain") stop = buildRain(ctx, master);
      else if (id === "white") stop = buildWhite(ctx, master);
      else stop = buildJazz(ctx, master);
      stopRef.current = stop;
      setPlaying(id);
    },
    [playing, stopCurrent, volume],
  );

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = Number(e.target.value);
      setVolume(val);
      // Debounce gain update — don't thrash Web Audio on every slider tick
      if (volumeDebounceRef.current) clearTimeout(volumeDebounceRef.current);
      volumeDebounceRef.current = setTimeout(() => {
        if (_sharedMasterGain) _sharedMasterGain.gain.value = val / 100;
      }, 50);
    },
    [],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: cleanup on unmount only
  useEffect(() => {
    return () => {
      stopCurrent();
      if (volumeDebounceRef.current) clearTimeout(volumeDebounceRef.current);
    };
  }, []);

  return (
    <div style={{ contain: "layout style paint" }}>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {AMBIENT_TRACKS.map((track) => {
          const isPlaying = playing === track.id;
          return (
            <div
              key={track.id}
              className={`rounded-xl p-4 border transition-colors cursor-pointer ${isPlaying ? "border-primary bg-primary/10 shadow-lg" : "border-border bg-muted hover:border-primary/40"}`}
              data-ocid={`dashboard.music_${track.id}.card`}
              onClick={() => toggle(track.id)}
              onKeyDown={(e) => e.key === "Enter" && toggle(track.id)}
              // biome-ignore lint/a11y/useSemanticElements: card container needs div
              role="button"
              tabIndex={0}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-2xl ${isPlaying ? "animate-bounce" : ""}`}
                >
                  {track.emoji}
                </span>
                {isPlaying && (
                  <span className="inline-flex w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>
              <p className="text-sm font-semibold text-foreground">
                {track.name}
              </p>
              <p className="text-xs text-muted-foreground mb-3">{track.desc}</p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(track.id);
                }}
                className={`w-full py-1.5 rounded-lg text-xs font-semibold transition-colors ${isPlaying ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-primary/10"}`}
              >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground">🔈</span>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1 accent-primary"
          data-ocid="dashboard.music.volume_input"
        />
        <span className="text-xs text-muted-foreground w-8">{volume}%</span>
      </div>
    </div>
  );
});

function relativeDate(isoDate: string): string {
  const now = Date.now();
  const then = new Date(isoDate).getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

// ── Progress Report Types ────────────────────────────────────────────────────

interface QuizHistoryEntry {
  courseId: string;
  quizId: string;
  score: number;
  maxScore: number;
  dateTaken: string;
}

interface BadgeEntry {
  name: string;
  earnDate: string | null;
}

interface CourseStats {
  courseId: string;
  name: string;
  icon: string;
  modulesTotal: number;
  modulesDone: number;
  topicsTotal: number;
  topicsDone: number;
  avgQuizScore: number | null;
  quizHistory: QuizHistoryEntry[];
  programmingQsSolved: number;
  programmingQsTotal: number;
  pct: number;
  estMinsRemaining: number;
}

function loadQuizHistory(): QuizHistoryEntry[] {
  try {
    const raw = localStorage.getItem("cc_quiz_history");
    if (!raw) return [];
    return JSON.parse(raw) as QuizHistoryEntry[];
  } catch {
    return [];
  }
}

function getCProgrammingStats(
  quizHistory: QuizHistoryEntry[],
): Omit<CourseStats, "courseId" | "name" | "icon"> {
  const modulesTotal = C_PROGRAMMING_COURSE.length;
  const modulesDone = C_PROGRAMMING_COURSE.filter(
    (m) => localStorage.getItem(`c_module_done::${m.id}`) === "true",
  ).length;

  let topicsTotal = 0;
  let topicsDone = 0;
  let programmingQsTotal = 0;
  for (const mod of C_PROGRAMMING_COURSE) {
    for (const part of mod.parts) {
      topicsTotal++;
      if (localStorage.getItem(`c_part_done::${part.id}`) === "true")
        topicsDone++;
      if (part.partProgrammingQuestions)
        programmingQsTotal += part.partProgrammingQuestions.length;
    }
  }

  const cHistory = quizHistory.filter((q) => q.courseId === "c-programming");
  const avgQuizScore =
    cHistory.length > 0
      ? Math.round(
          cHistory.reduce(
            (s, q) => s + (q.score / Math.max(q.maxScore, 1)) * 100,
            0,
          ) / cHistory.length,
        )
      : null;

  let programmingQsSolved = 0;
  try {
    const testHistory = JSON.parse(
      localStorage.getItem("c_online_test_history") ?? "[]",
    ) as { score: number }[];
    programmingQsSolved = Math.min(testHistory.length * 2, programmingQsTotal);
  } catch {}

  const remainingTopics = topicsTotal - topicsDone;
  const remainingModuleQuizzes = modulesTotal - modulesDone;
  const estMinsRemaining = remainingTopics * 15 + remainingModuleQuizzes * 5;
  const pct =
    topicsTotal > 0 ? Math.round((topicsDone / topicsTotal) * 100) : 0;

  return {
    modulesTotal,
    modulesDone,
    topicsTotal,
    topicsDone,
    avgQuizScore,
    quizHistory: cHistory,
    programmingQsSolved,
    programmingQsTotal,
    pct,
    estMinsRemaining,
  };
}

function getRoadmapStats(
  courseId: string,
  quizHistory: QuizHistoryEntry[],
): Omit<CourseStats, "courseId" | "name" | "icon"> {
  const roadmap = ROADMAPS.find((r) => r.id === courseId);
  if (!roadmap)
    return {
      modulesTotal: 0,
      modulesDone: 0,
      topicsTotal: 0,
      topicsDone: 0,
      avgQuizScore: null,
      quizHistory: [],
      programmingQsSolved: 0,
      programmingQsTotal: 0,
      pct: 0,
      estMinsRemaining: 0,
    };

  const completedRaw = localStorage.getItem("roadmap_completed") ?? "{}";
  let completedMap: Record<string, boolean> = {};
  try {
    completedMap = JSON.parse(completedRaw);
  } catch {}

  const topicsTotal = roadmap.topics.length;
  const topicsDone = roadmap.topics.filter(
    (t) => !!completedMap[`${courseId}::${t.id}`],
  ).length;
  const pct =
    topicsTotal > 0 ? Math.round((topicsDone / topicsTotal) * 100) : 0;

  const courseHistory = quizHistory.filter((q) => q.courseId === courseId);
  const avgQuizScore =
    courseHistory.length > 0
      ? Math.round(
          courseHistory.reduce(
            (s, q) => s + (q.score / Math.max(q.maxScore, 1)) * 100,
            0,
          ) / courseHistory.length,
        )
      : null;

  const remainingTopics = topicsTotal - topicsDone;
  const estMinsRemaining =
    remainingTopics * 15 + Math.max(0, topicsTotal - courseHistory.length) * 5;

  return {
    modulesTotal: topicsTotal,
    modulesDone: topicsDone,
    topicsTotal,
    topicsDone,
    avgQuizScore,
    quizHistory: courseHistory,
    programmingQsSolved: 0,
    programmingQsTotal: 0,
    pct,
    estMinsRemaining,
  };
}

function formatMins(mins: number): string {
  if (mins <= 0) return "Completed!";
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m} min remaining`;
  if (m === 0) return `${h} hr remaining`;
  return `${h} hr ${m} min remaining`;
}

const ScoreChip = memo(function ScoreChip({ pct }: { pct: number | null }) {
  if (pct === null)
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border font-medium">
        No quizzes yet
      </span>
    );
  if (pct >= 75)
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/25 font-semibold">
        {pct}% avg
      </span>
    );
  if (pct >= 40)
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border border-yellow-500/25 font-semibold">
        {pct}% avg
      </span>
    );
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/25 font-semibold">
      {pct}% avg
    </span>
  );
});

const ProgressChip = memo(function ProgressChip({ pct }: { pct: number }) {
  if (pct === 100)
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/25 font-semibold">
        ✓ Complete
      </span>
    );
  if (pct > 0)
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border border-yellow-500/25 font-semibold">
        {pct}% done
      </span>
    );
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border font-medium">
      Not started
    </span>
  );
});

// ── Canvas-based shareable card ───────────────────────────────────────────────

function drawShareCard(
  canvas: HTMLCanvasElement,
  username: string,
  level: number,
  xp: number,
  streak: number,
  badges: BadgeEntry[],
  courses: CourseStats[],
) {
  const W = 600;
  const H = 400 + badges.length * 28 + courses.length * 60;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#1a1040");
  grad.addColorStop(1, "#0d0821");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(140,100,255,0.07)";
  for (let x = 0; x < W; x += 24) {
    for (let y = 0; y < H; y += 24) {
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const headerGrad = ctx.createLinearGradient(0, 0, W, 80);
  headerGrad.addColorStop(0, "rgba(120,60,255,0.4)");
  headerGrad.addColorStop(1, "rgba(60,40,180,0.2)");
  ctx.fillStyle = headerGrad;
  ctx.fillRect(0, 0, W, 80);

  ctx.font = "bold 22px sans-serif";
  ctx.fillStyle = "#a78bfa";
  ctx.fillText("Code & Crush", 24, 50);
  ctx.font = "13px sans-serif";
  ctx.fillStyle = "rgba(200,180,255,0.6)";
  ctx.fillText("Progress Report", 24, 68);
  ctx.font = "11px sans-serif";
  ctx.fillStyle = "rgba(200,200,255,0.4)";
  const ts = new Date().toLocaleString();
  ctx.textAlign = "right";
  ctx.fillText(ts, W - 20, 50);
  ctx.textAlign = "left";

  ctx.beginPath();
  ctx.arc(56, 130, 36, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(120,60,255,0.3)";
  ctx.fill();
  ctx.strokeStyle = "rgba(160,100,255,0.6)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.font = "bold 26px sans-serif";
  ctx.fillStyle = "#c4b5fd";
  ctx.textAlign = "center";
  ctx.fillText((username || "S").slice(0, 1).toUpperCase(), 56, 138);
  ctx.textAlign = "left";

  ctx.font = "bold 20px sans-serif";
  ctx.fillStyle = "#f0ecff";
  ctx.fillText(username || "Student", 105, 120);
  ctx.font = "14px sans-serif";
  ctx.fillStyle = "#a78bfa";
  ctx.fillText(`Level ${level} Scholar`, 105, 140);

  ctx.font = "bold 14px sans-serif";
  ctx.fillStyle = "#fbbf24";
  ctx.textAlign = "right";
  ctx.fillText(`⚡ ${xp} XP`, W - 24, 120);
  ctx.fillStyle = "#fb923c";
  ctx.fillText(`🔥 ${streak} day streak`, W - 24, 140);
  ctx.textAlign = "left";

  ctx.strokeStyle = "rgba(160,100,255,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(24, 170);
  ctx.lineTo(W - 24, 170);
  ctx.stroke();

  let y = 190;
  ctx.font = "bold 13px sans-serif";
  ctx.fillStyle = "rgba(200,180,255,0.7)";
  ctx.fillText("📚 ENROLLED COURSES", 24, y);
  y += 20;

  if (courses.length === 0) {
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "rgba(200,200,255,0.4)";
    ctx.fillText("No courses enrolled yet", 24, y + 12);
    y += 30;
  } else {
    for (const course of courses) {
      ctx.font = "bold 13px sans-serif";
      ctx.fillStyle = "#e0d8ff";
      ctx.fillText(`${course.icon} ${course.name}`, 24, y + 14);
      ctx.font = "11px sans-serif";
      ctx.fillStyle = "rgba(200,200,255,0.5)";
      ctx.fillText(
        `${course.pct}% complete · ${course.topicsDone}/${course.topicsTotal} topics`,
        24,
        y + 28,
      );
      const barX = 24;
      const barY = y + 36;
      const barW = W - 48;
      const barH = 6;
      ctx.fillStyle = "rgba(120,60,255,0.2)";
      roundRect(ctx, barX, barY, barW, barH, 3);
      ctx.fillStyle = course.pct === 100 ? "#4ade80" : "#8b5cf6";
      roundRect(ctx, barX, barY, (barW * course.pct) / 100, barH, 3);
      y += 55;
    }
  }

  ctx.strokeStyle = "rgba(160,100,255,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(24, y);
  ctx.lineTo(W - 24, y);
  ctx.stroke();
  y += 16;

  ctx.font = "bold 13px sans-serif";
  ctx.fillStyle = "rgba(200,180,255,0.7)";
  ctx.fillText("🏆 BADGES EARNED", 24, y);
  y += 18;

  if (badges.length === 0) {
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "rgba(200,200,255,0.4)";
    ctx.fillText(
      "No badges yet — complete quizzes to earn badges!",
      24,
      y + 12,
    );
    y += 30;
  } else {
    for (const badge of badges) {
      ctx.font = "12px sans-serif";
      ctx.fillStyle = "#c4b5fd";
      ctx.fillText(`• ${badge.name}`, 24, y + 12);
      if (badge.earnDate) {
        ctx.fillStyle = "rgba(200,200,255,0.4)";
        ctx.font = "11px sans-serif";
        ctx.textAlign = "right";
        ctx.fillText(badge.earnDate, W - 24, y + 12);
        ctx.textAlign = "left";
      }
      y += 28;
    }
  }

  ctx.strokeStyle = "rgba(160,100,255,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(24, H - 32);
  ctx.lineTo(W - 24, H - 32);
  ctx.stroke();
  ctx.font = "11px sans-serif";
  ctx.fillStyle = "rgba(200,200,255,0.35)";
  ctx.textAlign = "center";
  ctx.fillText("caffeine.ai · Code & Crush", W / 2, H - 12);
  ctx.textAlign = "left";
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  if (w <= 0) return;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
}

// ── Lazy section wrapper — renders children only after IntersectionObserver fires ──
const LazySection = memo(function LazySection({
  children,
  rootMargin = "200px",
}: { children: React.ReactNode; rootMargin?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref}>
      {visible ? (
        children
      ) : (
        <div className="h-48 rounded-2xl bg-muted/20 border border-border animate-pulse" />
      )}
    </div>
  );
});

export default function DashboardPage({
  embedded = false,
}: { embedded?: boolean } = {}) {
  const { user, setUser, setPage, appTheme, setAppTheme, unenrollCourse } =
    useApp();

  const [tipIndex, setTipIndex] = useState(() =>
    Math.floor(Math.random() * DAILY_TIPS.length),
  );
  const [activeSlot, setActiveSlot] = useState<ClothingSlot>("cap");
  const [showAvatarBuilder, setShowAvatarBuilder] = useState(false);
  const [draftAvatar, setDraftAvatar] = useState<AvatarConfig>(
    user.avatarConfig ?? DEFAULT_AVATAR_CONFIG,
  );
  const [shareCopied, setShareCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [quizFilter, setQuizFilter] = useState("all");
  const [progressTick, setProgressTick] = useState(0);
  const shareCanvasRef = useRef<HTMLCanvasElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const themeDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const avatarDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── GCoins state ──
  const [gCoins, setGCoins] = useState<number>(() =>
    Number(localStorage.getItem("cc_gcoins") ?? "0"),
  );

  // ── Notes state ──
  const [notes, setNotes] = useState<LocalNote[]>(loadNotes);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [editingNote, setEditingNote] = useState<LocalNote | null>(null);
  const [noteForm, setNoteForm] = useState({
    title: "",
    content: "",
    topicId: "",
  });

  // ── Jobs modal state ──
  const [showJobsModal, setShowJobsModal] = useState(false);
  const [jobFilter, setJobFilter] = useState<
    "all" | "full-time" | "internship" | "remote"
  >("all");

  // ── Memoized derived values — never recompute on unrelated renders ──
  const level = useMemo(
    () => Math.floor(user.xp / XP_PER_LEVEL) + 1,
    [user.xp],
  );
  const xpProgress = useMemo(
    () => ((user.xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100,
    [user.xp],
  );

  const preset = useMemo(
    () =>
      COMPANION_PRESETS.find((p) => p.personality === user.personality) ??
      COMPANION_PRESETS[0],
    [user.personality],
  );
  const companionImage = useMemo(
    () => user.companionCustomPhoto || preset.image,
    [user.companionCustomPhoto, preset.image],
  );

  const equippedClothing = useMemo(
    () => user.equippedClothing ?? {},
    [user.equippedClothing],
  );
  const ownedClothing = useMemo(
    () => user.ownedClothing ?? [],
    [user.ownedClothing],
  );
  const walletHistory: WalletEntry[] = useMemo(
    () => user.walletHistory ?? [],
    [user.walletHistory],
  );
  const savedAvatarConfig = user.avatarConfig;
  const enrolledCourses = useMemo(
    () => user.enrolledCourses ?? [],
    [user.enrolledCourses],
  );
  const totalSpent = useMemo(
    () => walletHistory.reduce((s, e) => s + e.cost, 0),
    [walletHistory],
  );
  const initials = useMemo(
    () => (user.username ? user.username.slice(0, 2).toUpperCase() : "?"),
    [user.username],
  );
  const today = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    [],
  );

  const slotItems = useMemo(
    () => CLOTHING_ITEMS.filter((c) => c.slot === activeSlot),
    [activeSlot],
  );

  const getCourseLabel = useCallback((courseId: string) => {
    if (courseId === "c-programming")
      return { name: "Programming in C", icon: "🔵" };
    const r = ROADMAPS.find((rm) => rm.id === courseId);
    return { name: r?.title ?? courseId, icon: r?.icon ?? "📚" };
  }, []);

  const getCourseProgress = useCallback((courseId: string) => {
    if (courseId === "c-programming") {
      const total = C_PROGRAMMING_COURSE.length;
      const done = C_PROGRAMMING_COURSE.filter(
        (m) => localStorage.getItem(`c_module_done::${m.id}`) === "true",
      ).length;
      return {
        total,
        done,
        pct: total > 0 ? Math.round((done / total) * 100) : 0,
      };
    }
    const roadmap = ROADMAPS.find((r) => r.id === courseId);
    if (!roadmap) return { total: 0, done: 0, pct: 0 };
    const completedRaw = localStorage.getItem("roadmap_completed") ?? "{}";
    let completedMap: Record<string, boolean> = {};
    try {
      completedMap = JSON.parse(completedRaw);
    } catch {}
    const total = roadmap.topics.length;
    const done = roadmap.topics.filter(
      (t) => !!completedMap[`${courseId}::${t.id}`],
    ).length;
    return {
      total,
      done,
      pct: total > 0 ? Math.round((done / total) * 100) : 0,
    };
  }, []);

  // ── Real-time progress tracking — only storage events, no scroll ──
  useEffect(() => {
    const onStorage = () => setProgressTick((t) => t + 1);
    window.addEventListener("storage", onStorage);
    const poll = setInterval(onStorage, 10000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(poll);
    };
  }, []);

  // ── Course stats — memoized to avoid recomputing on every render ──
  // biome-ignore lint/correctness/useExhaustiveDependencies: progressTick forces re-read of localStorage on activity
  const allQuizHistory = useMemo(() => loadQuizHistory(), [progressTick]);
  const courseStats: CourseStats[] = useMemo(
    () =>
      enrolledCourses.map((courseId) => {
        const { name, icon } = getCourseLabel(courseId);
        if (courseId === "c-programming")
          return {
            courseId,
            name,
            icon,
            ...getCProgrammingStats(allQuizHistory),
          };
        return {
          courseId,
          name,
          icon,
          ...getRoadmapStats(courseId, allQuizHistory),
        };
      }),
    // biome-ignore lint/correctness/useExhaustiveDependencies: getCourseLabel is stable
    [enrolledCourses, allQuizHistory, getCourseLabel],
  );

  const totalEstMins = useMemo(
    () => courseStats.reduce((s, c) => s + c.estMinsRemaining, 0),
    [courseStats],
  );

  const badgeEntries: BadgeEntry[] = useMemo(
    () =>
      user.badges.map((b) => {
        try {
          const raw = localStorage.getItem(`cc_badge_date::${b}`);
          return {
            name: b,
            earnDate: raw ? new Date(raw).toLocaleDateString() : null,
          };
        } catch {
          return { name: b, earnDate: null };
        }
      }),
    [user.badges],
  );

  const getEquipped = useCallback(
    (slot: ClothingSlot) => equippedClothing[slot] ?? "",
    [equippedClothing],
  );

  // ── Event handlers — all stable via useCallback ──
  const handleShareText = useCallback(() => {
    const courseLines = courseStats
      .map((c) => `${c.icon} ${c.name}: ${c.pct}%`)
      .join(" | ");
    const badgeText = user.badges.slice(0, 3).join(", ") || "No badges yet";
    const text = `🎓 ${user.username || "Student"} | Level ${level} | ${user.xp} XP | 🔥 ${user.streak} day streak\n📚 ${courseLines || "No courses enrolled"}\n🏆 Badges: ${badgeText}\n— Code & Crush 🚀 (${new Date().toLocaleString()})`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2500);
      })
      .catch(() => {
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2500);
      });
  }, [courseStats, user.badges, user.username, user.xp, user.streak, level]);

  const handleOpenShareModal = useCallback(() => setShowShareModal(true), []);

  const handleDownloadPng = useCallback(() => {
    const canvas = shareCanvasRef.current;
    if (!canvas) return;
    drawShareCard(
      canvas,
      user.username || "Student",
      level,
      user.xp,
      user.streak,
      badgeEntries,
      courseStats,
    );
    const link = document.createElement("a");
    link.download = "code-crush-progress.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [user, level, badgeEntries, courseStats]);

  // Draw share card when modal opens
  useEffect(() => {
    if (!showShareModal) return;
    const canvas = shareCanvasRef.current;
    if (!canvas) return;
    drawShareCard(
      canvas,
      user.username || "Student",
      level,
      user.xp,
      user.streak,
      badgeEntries,
      courseStats,
    );
  }, [showShareModal, user, level, badgeEntries, courseStats]);

  const handleBuy = useCallback(
    (item: (typeof CLOTHING_ITEMS)[0]) => {
      if (user.studyPoints < item.cost) return;
      const entry: WalletEntry = {
        id: `${Date.now()}_${Math.random()}`,
        itemId: item.id,
        itemLabel: item.label,
        itemEmoji: item.emoji,
        cost: item.cost,
        date: new Date().toISOString(),
      };
      setUser({
        studyPoints: user.studyPoints - item.cost,
        ownedClothing: [...ownedClothing, item.id],
        equippedClothing: { ...equippedClothing, [item.slot]: item.id },
        walletHistory: [entry, ...walletHistory],
      });
    },
    [user.studyPoints, ownedClothing, equippedClothing, walletHistory, setUser],
  );

  const handleWear = useCallback(
    (item: (typeof CLOTHING_ITEMS)[0]) => {
      setUser({
        equippedClothing: { ...equippedClothing, [item.slot]: item.id },
      });
    },
    [equippedClothing, setUser],
  );

  const handlePhotoUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUser({ profilePhoto: ev.target?.result as string });
      };
      reader.readAsDataURL(file);
    },
    [setUser],
  );

  // Debounced avatar change — prevents SVG thrash on every slider tick
  const handleAvatarChange = useCallback((patch: Partial<AvatarConfig>) => {
    setDraftAvatar((prev) => {
      const next = { ...prev, ...patch };
      if (avatarDebounceRef.current) clearTimeout(avatarDebounceRef.current);
      // Live preview updates immediately in draft, persisted on done
      return next;
    });
  }, []);

  const handleAvatarDone = useCallback(() => {
    setUser({ avatarConfig: draftAvatar });
    setShowAvatarBuilder(false);
  }, [draftAvatar, setUser]);

  const handleEditAvatar = useCallback(() => {
    setDraftAvatar(user.avatarConfig ?? DEFAULT_AVATAR_CONFIG);
    setShowAvatarBuilder(true);
  }, [user.avatarConfig]);

  // Debounced theme change — 300ms prevents rapid re-renders
  const handleThemeChange = useCallback(
    (themeId: AppTheme) => {
      if (themeDebounceRef.current) clearTimeout(themeDebounceRef.current);
      themeDebounceRef.current = setTimeout(() => setAppTheme(themeId), 300);
    },
    [setAppTheme],
  );

  const handleExpandCourse = useCallback((courseId: string) => {
    setExpandedCourse((prev) => (prev === courseId ? null : courseId));
  }, []);

  // Tip carousel — 30s interval, stable
  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % DAILY_TIPS.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Cleanup debounce refs on unmount
  useEffect(() => {
    return () => {
      if (themeDebounceRef.current) clearTimeout(themeDebounceRef.current);
      if (avatarDebounceRef.current) clearTimeout(avatarDebounceRef.current);
    };
  }, []);

  // ── Note handlers ──────────────────────────────────────────────────────────
  const handleOpenNewNote = useCallback(() => {
    setEditingNote(null);
    setNoteForm({ title: "", content: "", topicId: "" });
    setShowNotesModal(true);
  }, []);

  const handleEditNote = useCallback((note: LocalNote) => {
    setEditingNote(note);
    setNoteForm({
      title: note.title,
      content: note.content,
      topicId: note.topicId,
    });
    setShowNotesModal(true);
  }, []);

  const handleSaveNote = useCallback(() => {
    if (!noteForm.title.trim()) return;
    const now = new Date().toISOString();
    const updated = [...notes];
    if (editingNote) {
      const idx = updated.findIndex((n) => n.id === editingNote.id);
      if (idx >= 0) {
        updated[idx] = { ...editingNote, ...noteForm, updatedAt: now };
      }
    } else {
      updated.unshift({
        id: crypto.randomUUID(),
        ...noteForm,
        createdAt: now,
        updatedAt: now,
      });
    }
    setNotes(updated);
    saveNotesToStorage(updated);
    setShowNotesModal(false);
  }, [noteForm, editingNote, notes]);

  const handleDeleteNote = useCallback(
    (id: string) => {
      const updated = notes.filter((n) => n.id !== id);
      setNotes(updated);
      saveNotesToStorage(updated);
    },
    [notes],
  );

  // ── GCoins sync (persist to localStorage on change) ──
  useEffect(() => {
    localStorage.setItem("cc_gcoins", String(gCoins));
  }, [gCoins]);

  // Track POTD bonus (award once per day)
  useEffect(() => {
    const potdKey = `cc_potd_solved_${new Date().toISOString().slice(0, 10)}`;
    if (
      localStorage.getItem(potdKey) === "true" &&
      gCoins === Number(localStorage.getItem("cc_gcoins") ?? "0")
    ) {
      const awarded = localStorage.getItem(`${potdKey}_awarded`);
      if (!awarded) {
        setGCoins((prev) => prev + 50);
        localStorage.setItem(`${potdKey}_awarded`, "true");
      }
    }
  }, [gCoins]);

  const filteredJobs = useMemo(
    () =>
      jobFilter === "all"
        ? JOB_LISTINGS
        : JOB_LISTINGS.filter((j) => j.type === jobFilter),
    [jobFilter],
  );

  return (
    <div
      className="min-h-screen bg-background overflow-y-auto"
      style={{ overflowAnchor: "none" }}
    >
      {/* Header */}
      {!embedded && (
        <header
          className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 sticky top-0 z-10"
          style={{ willChange: "transform" }}
        >
          <img
            src="/assets/generated/code-crush-logo-transparent.dim_400x400.png"
            alt="Code & Crush"
            className="w-7 h-7 rounded-full object-cover"
          />
          <h1 className="font-bold text-foreground">Dashboard</h1>
        </header>
      )}

      <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-5 pb-28 sm:pb-24">
        {/* Daily Tip */}
        <motion.div
          key={tipIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/10 rounded-2xl p-5 border border-primary/20"
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">{DAILY_TIPS[tipIndex].icon}</span>
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                Daily Tip — {today}
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {DAILY_TIPS[tipIndex].tip}
              </p>
            </div>
          </div>
          <div className="flex gap-1.5 mt-3">
            {DAILY_TIPS.map((tip, i) => (
              <button
                key={tip.tip.slice(0, 15)}
                type="button"
                onClick={() => setTipIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === tipIndex ? "w-5 bg-primary" : "w-1.5 bg-primary/30"}`}
              />
            ))}
          </div>
        </motion.div>

        {/* ── MY ENROLLED COURSES ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.03 }}
          className="bg-card rounded-2xl p-5 border border-border"
          data-ocid="dashboard.enrolled_courses.card"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">
              My Enrolled Courses
            </h3>
            <span className="ml-auto text-xs text-muted-foreground">
              {enrolledCourses.length}/2 slots
            </span>
          </div>
          {enrolledCourses.length === 0 ? (
            <div
              className="text-center py-6"
              data-ocid="dashboard.enrolled_courses.empty_state"
            >
              <div className="text-3xl mb-2">📚</div>
              <p className="text-sm text-muted-foreground">
                No courses enrolled yet. Go to Study → Roadmap to enroll in up
                to 2 courses.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {enrolledCourses.map((courseId) => {
                const { name, icon } = getCourseLabel(courseId);
                const { done, total, pct } = getCourseProgress(courseId);
                return (
                  <div
                    key={courseId}
                    className="rounded-xl border border-border bg-muted/40 p-3"
                    data-ocid="dashboard.enrolled_course.item"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-lg shrink-0">{icon}</span>
                        <span className="text-sm font-semibold text-foreground truncate">
                          {name}
                        </span>
                        {pct === 100 && (
                          <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-muted-foreground">
                          {done}/{total}
                        </span>
                        <button
                          type="button"
                          onClick={() => unenrollCourse(courseId)}
                          className="text-xs text-muted-foreground hover:text-red-400 transition-colors"
                          data-ocid="dashboard.unenroll_course.button"
                        >
                          Unenroll
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Progress value={pct} className="h-2 rounded-full" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{pct}% complete</span>
                        {pct === 100 ? (
                          <span className="text-green-400 font-semibold">
                            ✓ Done!
                          </span>
                        ) : (
                          <span>{total - done} remaining</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* ── PROGRESS REPORT ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.04 }}
          className="bg-card rounded-2xl border border-border overflow-hidden"
          data-ocid="dashboard.progress_report.card"
          style={{ contain: "layout style" }}
        >
          <div className="flex items-center gap-2 px-5 py-4 border-b border-border bg-muted/30">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Progress Report</h3>
            <span className="ml-auto text-xs text-muted-foreground">Live</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>

          <div className="p-5 space-y-4">
            {enrolledCourses.length > 0 && (
              <div
                className="flex items-center gap-3 rounded-xl bg-primary/10 border border-primary/20 px-4 py-3"
                data-ocid="dashboard.progress_report.est_time_banner"
              >
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-primary">
                    Total Time to Completion
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {formatMins(totalEstMins)}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  across {enrolledCourses.length} course
                  {enrolledCourses.length > 1 ? "s" : ""}
                </span>
              </div>
            )}

            <div
              className="flex items-center gap-4 rounded-xl bg-muted/40 px-4 py-3 border border-border"
              data-ocid="dashboard.progress_report.identity"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 overflow-hidden shrink-0">
                {user.profilePhoto ? (
                  <img
                    src={user.profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-extrabold text-primary">
                    {(user.username || "S").slice(0, 1).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground truncate">
                  {user.username || "Student"}
                </p>
                <p className="text-xs text-primary font-medium">
                  Level {level} Scholar
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-base font-extrabold text-yellow-500">
                  ⚡ {user.xp} XP
                </span>
                <span className="text-xs text-orange-500 font-semibold">
                  🔥 {user.streak}-day streak
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  label: "Courses",
                  value: enrolledCourses.length,
                  color: "text-primary",
                },
                {
                  label: "Solved",
                  value: user.solvedProblems.length,
                  color: "text-green-500",
                },
                {
                  label: "Badges",
                  value: user.badges.length,
                  color: "text-amber-500",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-muted/40 border border-border p-3 text-center"
                >
                  <p className={`text-lg font-extrabold ${s.color}`}>
                    {s.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {courseStats.length === 0 ? (
              <div
                className="text-center py-6 rounded-xl bg-muted/30 border border-dashed border-border"
                data-ocid="dashboard.progress_report.no_courses"
              >
                <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">
                  No courses enrolled yet
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Go to Study → Roadmap to enroll in up to 2 courses
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                  📚 Course Breakdown
                </p>
                {courseStats.map((cs) => {
                  const isExpanded = expandedCourse === cs.courseId;
                  const bestQuiz =
                    cs.quizHistory.length > 0
                      ? Math.max(
                          ...cs.quizHistory.map((q) =>
                            Math.round(
                              (q.score / Math.max(q.maxScore, 1)) * 100,
                            ),
                          ),
                        )
                      : null;
                  const worstQuiz =
                    cs.quizHistory.length > 0
                      ? Math.min(
                          ...cs.quizHistory.map((q) =>
                            Math.round(
                              (q.score / Math.max(q.maxScore, 1)) * 100,
                            ),
                          ),
                        )
                      : null;
                  return (
                    <div
                      key={cs.courseId}
                      className="rounded-xl border border-border bg-muted/20 overflow-hidden"
                      data-ocid={`dashboard.progress_report.course_${cs.courseId}`}
                    >
                      <button
                        type="button"
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/40 transition-colors"
                        data-ocid={`dashboard.progress_report.course_${cs.courseId}.expand`}
                        onClick={() => handleExpandCourse(cs.courseId)}
                      >
                        <span className="text-xl shrink-0">{cs.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {cs.name}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                            <ProgressChip pct={cs.pct} />
                            <ScoreChip pct={cs.avgQuizScore} />
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                        )}
                      </button>
                      <div className="px-4 pb-2">
                        <Progress
                          value={cs.pct}
                          className="h-1.5 rounded-full"
                        />
                      </div>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            key="details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pt-1 space-y-3 border-t border-border/50">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="rounded-lg bg-muted/40 border border-border px-3 py-2">
                                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                                    Modules / Topics
                                  </p>
                                  <p className="text-sm font-bold text-foreground mt-0.5">
                                    {cs.modulesDone}
                                    <span className="text-muted-foreground font-normal">
                                      /{cs.modulesTotal}
                                    </span>{" "}
                                    done
                                  </p>
                                </div>
                                <div className="rounded-lg bg-muted/40 border border-border px-3 py-2">
                                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                                    Topics Covered
                                  </p>
                                  <p className="text-sm font-bold text-foreground mt-0.5">
                                    {cs.topicsDone}
                                    <span className="text-muted-foreground font-normal">
                                      /{cs.topicsTotal}
                                    </span>
                                  </p>
                                </div>
                                {cs.programmingQsTotal > 0 && (
                                  <div className="rounded-lg bg-muted/40 border border-border px-3 py-2">
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                                      Programming Qs
                                    </p>
                                    <p className="text-sm font-bold text-foreground mt-0.5">
                                      {cs.programmingQsSolved}
                                      <span className="text-muted-foreground font-normal">
                                        /{cs.programmingQsTotal}
                                      </span>{" "}
                                      solved
                                    </p>
                                  </div>
                                )}
                                <div className="rounded-lg bg-muted/40 border border-border px-3 py-2">
                                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                                    Est. Remaining
                                  </p>
                                  <p className="text-sm font-bold text-foreground mt-0.5">
                                    {cs.estMinsRemaining <= 0
                                      ? "Done!"
                                      : `${Math.ceil(cs.estMinsRemaining / 60)}h ${cs.estMinsRemaining % 60}m`}
                                  </p>
                                </div>
                              </div>
                              {cs.quizHistory.length > 0 ? (
                                <div>
                                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide mb-2">
                                    📊 Quiz History ({cs.quizHistory.length}{" "}
                                    attempts)
                                  </p>
                                  <div className="flex items-center gap-3 mb-2">
                                    {bestQuiz !== null && (
                                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/25 font-semibold">
                                        Best: {bestQuiz}%
                                      </span>
                                    )}
                                    {worstQuiz !== null &&
                                      worstQuiz !== bestQuiz && (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/25 font-semibold">
                                          Worst: {worstQuiz}%
                                        </span>
                                      )}
                                    <ScoreChip pct={cs.avgQuizScore} />
                                  </div>
                                  <div className="space-y-1 max-h-40 overflow-y-auto">
                                    {cs.quizHistory
                                      .slice(-8)
                                      .reverse()
                                      .map((q, idx) => {
                                        const pct = Math.round(
                                          (q.score / Math.max(q.maxScore, 1)) *
                                            100,
                                        );
                                        return (
                                          <div
                                            key={`${q.quizId}-${idx}`}
                                            className="flex items-center gap-2 text-xs py-1 px-2 rounded-lg bg-muted/30"
                                          >
                                            <span
                                              className={`w-2 h-2 rounded-full shrink-0 ${pct >= 75 ? "bg-green-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-500"}`}
                                            />
                                            <span className="flex-1 text-foreground/80 truncate">
                                              {q.quizId.replace(/-/g, " ")}
                                            </span>
                                            <span
                                              className={`font-semibold shrink-0 ${pct >= 75 ? "text-green-600 dark:text-green-400" : pct >= 40 ? "text-yellow-700 dark:text-yellow-400" : "text-red-600 dark:text-red-400"}`}
                                            >
                                              {q.score}/{q.maxScore}
                                            </span>
                                            <span className="text-muted-foreground shrink-0">
                                              {new Date(
                                                q.dateTaken,
                                              ).toLocaleDateString()}
                                            </span>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              ) : (
                                <p className="text-xs text-muted-foreground text-center py-2">
                                  No quizzes taken yet — complete a topic to get
                                  started
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ── PEER COMPARISON ── */}
            {(() => {
              // Calculate peer percentile: compare user XP vs mock leaderboard XPs
              const mockXps = [980, 870, 760, 650, 530, 450, 380, 290, 180, 90];
              const allXps = [...mockXps, user.xp].sort((a, b) => b - a);
              const userRank = allXps.indexOf(user.xp) + 1;
              const total = allXps.length;
              const percentile = Math.round(((total - userRank) / total) * 100);
              const avgXp = Math.round(
                allXps.reduce((s, x) => s + x, 0) / total,
              );
              return (
                <div
                  className="rounded-xl bg-muted/30 border border-border p-4 space-y-3"
                  data-ocid="dashboard.peer_comparison.card"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <p className="text-sm font-semibold text-foreground">
                      Percentile Rank
                    </p>
                  </div>
                  <p className="text-base font-bold text-primary">
                    You are in the top {100 - percentile}% of learners 🎯
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Percentile</span>
                      <span className="font-semibold text-foreground">
                        {100 - percentile}th
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
                        style={{ width: `${100 - percentile}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className="rounded-lg bg-muted/40 border border-border px-2 py-1.5">
                      <p className="text-muted-foreground">Your Rank</p>
                      <p className="font-bold text-foreground">
                        #{userRank} of {total}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/40 border border-border px-2 py-1.5">
                      <p className="text-muted-foreground">Avg XP</p>
                      <p className="font-bold text-foreground">{avgXp}</p>
                    </div>
                    <div className="rounded-lg bg-muted/40 border border-border px-2 py-1.5">
                      <p className="text-muted-foreground">Your XP</p>
                      <p className="font-bold text-yellow-400">{user.xp}</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={handleShareText}
                data-ocid="dashboard.share_progress.text_button"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {shareCopied ? (
                  <>
                    <CheckCircle className="w-4 h-4" /> Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" /> Share Text
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleOpenShareModal}
                data-ocid="dashboard.share_progress.card_button"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors bg-muted border border-border text-foreground hover:bg-accent"
              >
                <Download className="w-4 h-4" /> Report Card
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── SHARE MODAL ── */}
        <AnimatePresence>
          {showShareModal && (
            <motion.div
              key="share-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              data-ocid="dashboard.share_modal"
              onClick={(e) => {
                if (e.target === e.currentTarget) setShowShareModal(false);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="bg-card border border-border rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
                data-ocid="dashboard.share_modal.panel"
              >
                <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
                  <Trophy className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Progress Report Card
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowShareModal(false)}
                    className="ml-auto p-1.5 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Close share modal"
                    data-ocid="dashboard.share_modal.close"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <div className="p-5 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center min-h-32">
                    <canvas
                      ref={shareCanvasRef}
                      className="max-w-full rounded-lg"
                      style={{ imageRendering: "auto" }}
                    />
                  </div>
                  <div className="rounded-xl bg-muted/40 border border-border p-3 text-xs text-foreground/80 leading-relaxed font-mono break-all">
                    🎓 {user.username || "Student"} · Level {level} · {user.xp}{" "}
                    XP · 🔥 {user.streak}-day streak
                    {courseStats
                      .map((c) => ` · ${c.icon} ${c.name} ${c.pct}%`)
                      .join("")}
                    {user.badges.length > 0
                      ? ` · 🏆 ${user.badges.slice(0, 3).join(", ")}`
                      : ""}
                    {" · Code & Crush 🚀"}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handleShareText}
                      data-ocid="dashboard.share_modal.copy_text"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold bg-muted border border-border text-foreground hover:bg-accent transition-colors"
                    >
                      {shareCopied ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />{" "}
                          Copied!
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" /> Copy Text
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadPng}
                      data-ocid="dashboard.share_modal.download_png"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download PNG
                    </button>
                  </div>
                  <p className="text-[11px] text-muted-foreground text-center">
                    Generated at {new Date().toLocaleString()} · caffeine.ai
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PEER COMPARISON (inside progress report section we extend) ── */}

        {/* ── STREAK CALENDAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.045 }}
          className="bg-card rounded-2xl p-5 border border-border"
          data-ocid="dashboard.streak_calendar.card"
        >
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-4 h-4 text-orange-400" />
            <h3 className="font-semibold text-foreground">
              Study Streak Calendar
            </h3>
          </div>
          <StreakCalendar streak={user.streak} />
        </motion.div>

        {/* ── QUIZ SCORE HISTORY ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="bg-card rounded-2xl p-5 border border-border"
          data-ocid="dashboard.quiz_chart.card"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">
              Quiz Score History
            </h3>
          </div>
          <QuizScoreChart filter={quizFilter} onFilterChange={setQuizFilter} />
        </motion.div>

        {/* ── LEADERBOARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.055 }}
          className="bg-card rounded-2xl p-5 border border-border"
          data-ocid="dashboard.leaderboard.card"
        >
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <h3 className="font-semibold text-foreground">Leaderboard</h3>
            <span className="ml-auto text-xs text-muted-foreground">
              Top 10
            </span>
          </div>
          <Leaderboard
            username={user.username}
            xp={user.xp}
            level={level}
            streak={user.streak}
          />
        </motion.div>

        {/* ── Social Feed Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="bg-card rounded-2xl p-5 border border-border"
          data-ocid="dashboard.social_feed.card"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">👥</span>
            <h3 className="font-semibold text-foreground">Social Feed</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            See interview experiences from people you follow. Follow learners
            from the Leaderboard to build your feed.
          </p>
          <Button
            className="w-full rounded-xl gap-2 font-semibold"
            onClick={() => setPage("social-feed")}
            data-ocid="dashboard.social_feed.button"
          >
            <span>👥</span> View Social Feed
          </Button>
        </motion.div>

        {/* ── Relax & Focus Music — always rendered (audio context persists) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="bg-card rounded-2xl p-5 border border-border"
          data-ocid="dashboard.music.card"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🎵</span>
            <h3 className="font-semibold text-foreground">
              Relax &amp; Focus Music
            </h3>
          </div>
          <AmbientPlayer />
        </motion.div>

        {/* Hero Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-3xl overflow-hidden border border-border shadow-card"
        >
          <div className="h-24 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/10 relative">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, oklch(0.6 0.2 265 / 0.5) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="px-6 pb-6 -mt-12">
            <div className="flex items-end justify-between mb-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-card overflow-hidden bg-muted">
                  {user.profilePhoto ? (
                    <img
                      src={user.profilePhoto}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center">
                      <span className="text-white text-xl font-extrabold">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  data-ocid="dashboard.photo.upload_button"
                  onClick={() => photoInputRef.current?.click()}
                  className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-white" />
                </button>
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Companion</p>
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-sm font-bold text-foreground">
                    {user.companionName}
                  </span>
                  <img
                    src={companionImage}
                    alt={user.companionName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h2 className="font-extrabold text-xl text-foreground">
              {user.username || "Student"}
            </h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold border border-primary/30">
                Level {level} Scholar
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 font-semibold border border-orange-500/30">
                🔥 {user.streak} Day Streak
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {[
            {
              label: "XP",
              value: user.xp,
              icon: <Zap className="w-5 h-5 text-yellow-400" />,
              color: "text-yellow-400",
            },
            {
              label: "SP",
              value: user.studyPoints,
              icon: <span className="text-lg">⭐</span>,
              color: "text-amber-400",
            },
            {
              label: "GCoins",
              value: gCoins,
              icon: <span className="text-lg">🪙</span>,
              color: "text-yellow-500",
            },
            {
              label: "Solved",
              value: user.solvedProblems.length,
              icon: <CheckCircle className="w-5 h-5 text-green-400" />,
              color: "text-green-400",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-4 border border-border text-center"
              data-ocid={`dashboard.stat_${stat.label.toLowerCase()}.card`}
            >
              <div className="flex justify-center mb-1">{stat.icon}</div>
              <p className={`text-2xl font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* XP Progress */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card rounded-2xl p-5 border border-border"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold text-foreground text-sm">
                Level {level}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {user.xp} / {level * XP_PER_LEVEL} XP
            </span>
          </div>
          <Progress value={xpProgress} className="h-3 rounded-full" />
          <p className="text-xs text-muted-foreground mt-2">
            {XP_PER_LEVEL - (user.xp % XP_PER_LEVEL)} XP to Level {level + 1}
          </p>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-card rounded-2xl p-5 border border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">Achievements</h3>
            <span className="ml-auto text-xs text-muted-foreground">
              {user.badges.length} earned
            </span>
          </div>
          {badgeEntries.length === 0 ? (
            <div
              className="text-center py-6"
              data-ocid="dashboard.badges.empty_state"
            >
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm text-muted-foreground">
                Complete quizzes to earn badges!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {badgeEntries.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center gap-3 rounded-xl bg-muted/40 border border-border px-3 py-2"
                  data-ocid={`dashboard.badges.item_${b.name.replace(/\s+/g, "_")}`}
                >
                  <span className="text-xl shrink-0">🏅</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {b.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {b.earnDate ? `Earned ${b.earnDate}` : "Earned"}
                    </p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Streak */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-card rounded-2xl p-5 border border-border"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="font-bold text-foreground">
                {user.streak} Day Streak
              </p>
              <p className="text-xs text-muted-foreground">
                Keep studying daily to maintain your streak!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Outfit Shop */}
        <LazySection>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-card rounded-2xl p-5 border border-border"
            style={{ contain: "layout style paint" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground">Outfit Shop</h3>
              <span className="ml-auto text-sm font-bold text-amber-400">
                ⭐ {user.studyPoints} SP
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
              {preset.outfits.map((outfit) => {
                const owned = user.unlockedOutfits.includes(outfit.id);
                const active = user.activeOutfit === outfit.id;
                const canAfford = user.studyPoints >= outfit.cost;
                return (
                  <div
                    key={outfit.id}
                    className={`rounded-xl border p-3 text-center transition-colors ${active ? "border-primary bg-primary/10" : "border-border bg-muted"}`}
                    style={{
                      contentVisibility: "auto",
                      containIntrinsicSize: "0 120px",
                    }}
                  >
                    <div className="text-2xl mb-1">{outfit.emoji}</div>
                    <p className="text-xs font-semibold text-foreground">
                      {outfit.label}
                    </p>
                    {outfit.cost === 0 ? (
                      <p className="text-xs text-green-400 mt-1">Free</p>
                    ) : (
                      <p className="text-xs text-amber-400 mt-1">
                        ⭐ {outfit.cost} SP
                      </p>
                    )}
                    {!owned ? (
                      <button
                        type="button"
                        data-ocid={`dashboard.outfit_${outfit.id}.button`}
                        disabled={!canAfford}
                        onClick={() => {
                          if (!canAfford) return;
                          setUser({
                            studyPoints: user.studyPoints - outfit.cost,
                            unlockedOutfits: [
                              ...user.unlockedOutfits,
                              outfit.id,
                            ],
                            activeOutfit: outfit.id,
                          });
                        }}
                        className="mt-2 w-full text-xs py-1 rounded-lg bg-primary text-primary-foreground disabled:opacity-40 font-semibold"
                      >
                        Buy
                      </button>
                    ) : (
                      <button
                        type="button"
                        data-ocid={`dashboard.equip_${outfit.id}.button`}
                        onClick={() => setUser({ activeOutfit: outfit.id })}
                        className={`mt-2 w-full text-xs py-1 rounded-lg font-semibold transition-colors ${active ? "bg-primary text-primary-foreground" : "bg-muted border border-border text-foreground hover:bg-accent"}`}
                      >
                        {active ? "Equipped" : "Equip"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </LazySection>

        {/* ── WHATSAPP-STYLE AVATAR ── */}
        <LazySection>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 rounded-3xl border border-primary/20 p-5"
            data-ocid="dashboard.avatar.card"
            style={{ contain: "layout style" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-foreground text-base">
                  Your Avatar
                </h3>
                <p className="text-xs text-muted-foreground">
                  {savedAvatarConfig
                    ? "Custom cartoon avatar"
                    : `Showing ${user.companionName}'s photo`}
                </p>
              </div>
              <span className="text-xs bg-primary/20 text-primary border border-primary/30 rounded-full px-3 py-1 font-semibold">
                ✨ Style
              </span>
            </div>

            <div className="flex flex-col items-center py-4 gap-3">
              {savedAvatarConfig ? (
                <motion.div
                  key="cartoon"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative flex items-center justify-center"
                  style={{ willChange: "transform, opacity" }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                    style={{ background: savedAvatarConfig.outfitColor }}
                  />
                  <div className="relative bg-card/60 rounded-3xl p-4 border border-primary/20 shadow-xl">
                    <WhatsAppAvatar config={savedAvatarConfig} size={200} />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="photo"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <CompanionDressAvatar
                    companionImage={companionImage}
                    companionName={user.companionName}
                    equippedClothing={user.equippedClothing ?? {}}
                  />
                </motion.div>
              )}

              <Button
                size="sm"
                variant={savedAvatarConfig ? "outline" : "default"}
                onClick={handleEditAvatar}
                className="rounded-full gap-2 px-5"
                data-ocid="dashboard.avatar.edit_button"
              >
                <Pencil className="w-3.5 h-3.5" />
                {savedAvatarConfig ? "Edit Avatar" : "Create Cartoon Avatar"}
              </Button>

              {savedAvatarConfig && (
                <button
                  type="button"
                  onClick={() => setUser({ avatarConfig: null })}
                  className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
                  data-ocid="dashboard.avatar.delete_button"
                >
                  Remove cartoon avatar
                </button>
              )}
            </div>

            {/* Avatar Builder — only mounts when user explicitly opens it */}
            <AnimatePresence>
              {showAvatarBuilder && (
                <motion.div
                  key="builder"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4"
                  data-ocid="dashboard.avatar.panel"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-card/60 rounded-3xl p-3 border border-primary/20 shadow-lg">
                      <WhatsAppAvatar config={draftAvatar} size={140} />
                    </div>
                  </div>
                  <div className="max-h-[60vh] overflow-y-auto overscroll-contain">
                    <AvatarBuilder
                      config={draftAvatar}
                      onChange={handleAvatarChange}
                      onDone={handleAvatarDone}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LazySection>

        {/* ── WARDROBE SHOP ── */}
        <LazySection>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.31 }}
            className="bg-card rounded-2xl p-5 border border-border"
            data-ocid="dashboard.wardrobe.card"
            style={{ contain: "layout style paint" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">👗</span>
              <h3 className="font-semibold text-foreground">Wardrobe</h3>
              <span className="ml-auto text-sm font-bold text-amber-400">
                ⭐ {user.studyPoints} SP
              </span>
            </div>

            <div className="flex gap-1 overflow-x-auto mb-4 pb-1">
              {(
                ["cap", "shirt", "pant", "shoe", "accessory"] as ClothingSlot[]
              ).map((slot) => (
                <button
                  key={slot}
                  type="button"
                  data-ocid={`dashboard.wardrobe_${slot}.tab`}
                  onClick={() => setActiveSlot(slot)}
                  className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${activeSlot === slot ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}
                >
                  {SLOT_LABELS[slot]}
                </button>
              ))}
            </div>

            {/* Virtualized clothing grid via content-visibility */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
              {slotItems.map((item) => {
                const owned = ownedClothing.includes(item.id);
                const equipped = getEquipped(item.slot) === item.id;
                const canAfford = user.studyPoints >= item.cost;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3 text-center transition-colors ${equipped ? "border-primary bg-primary/10" : "border-border bg-muted"}`}
                    style={{
                      contentVisibility: "auto",
                      containIntrinsicSize: "0 120px",
                    }}
                  >
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <p className="text-xs font-semibold text-foreground leading-tight">
                      {item.label}
                    </p>
                    {item.cost === 0 ? (
                      <p className="text-xs text-green-400 mt-1">Free</p>
                    ) : (
                      <p className="text-xs text-amber-400 mt-1">
                        ⭐ {item.cost} SP
                      </p>
                    )}
                    {!owned ? (
                      <button
                        type="button"
                        data-ocid={`dashboard.wardrobe_buy_${item.id}.button`}
                        disabled={!canAfford}
                        onClick={() => handleBuy(item)}
                        className="mt-2 w-full text-xs py-1 rounded-lg bg-primary text-primary-foreground disabled:opacity-40 font-semibold"
                      >
                        Buy
                      </button>
                    ) : equipped ? (
                      <button
                        type="button"
                        disabled
                        className="mt-2 w-full text-xs py-1 rounded-lg bg-primary text-primary-foreground font-semibold opacity-90"
                      >
                        Equipped
                      </button>
                    ) : (
                      <button
                        type="button"
                        data-ocid={`dashboard.wardrobe_wear_${item.id}.button`}
                        onClick={() => handleWear(item)}
                        className="mt-2 w-full text-xs py-1 rounded-lg bg-muted border border-border text-foreground hover:bg-accent font-semibold"
                      >
                        Wear
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </LazySection>

        {/* ── WALLET ── */}
        <LazySection>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.34 }}
            className="bg-card rounded-2xl p-5 border border-border"
            data-ocid="dashboard.wallet.card"
          >
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground">Wallet</h3>
            </div>
            <div className="flex items-center justify-between bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20 mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">
                  Available Balance
                </p>
                <p className="text-3xl font-extrabold text-amber-400">
                  ⭐ {user.studyPoints} SP
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Total Spent</p>
                <p className="text-lg font-bold text-foreground">
                  {totalSpent} SP
                </p>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Purchase History
            </h4>
            {walletHistory.length === 0 ? (
              <div
                className="text-center py-6"
                data-ocid="dashboard.wallet.empty_state"
              >
                <div className="text-3xl mb-2">👛</div>
                <p className="text-sm text-muted-foreground">
                  No purchases yet. Visit the Wardrobe or Outfit Shop!
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {walletHistory.map((entry, i) => (
                  <div
                    key={entry.id}
                    data-ocid={`dashboard.wallet.item.${i + 1}`}
                    className="flex items-center gap-3 p-3 bg-muted rounded-xl border border-border"
                  >
                    <span className="text-2xl">{entry.itemEmoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {entry.itemLabel}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {relativeDate(entry.date)}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-amber-400 shrink-0">
                      ⭐ {entry.cost} SP
                    </span>
                  </div>
                ))}
                {walletHistory.length > 0 && (
                  <p className="text-xs text-muted-foreground text-right pt-1">
                    Total spent:{" "}
                    <span className="font-bold text-foreground">
                      {totalSpent} SP
                    </span>
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </LazySection>

        {/* ── TECH JOBS BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/10 rounded-2xl p-5 border border-primary/20 cursor-pointer hover:border-primary/40 transition-colors"
          data-ocid="dashboard.jobs.card"
          onClick={() => setShowJobsModal(true)}
          // biome-ignore lint/a11y/useSemanticElements: card container needs div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setShowJobsModal(true)}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-base">
                💼 Tech Jobs &amp; Internships
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {JOB_LISTINGS.length} curated openings · Google, Amazon, Meta
                &amp; more
              </p>
            </div>
            <span className="shrink-0 text-xs bg-primary text-primary-foreground rounded-full px-3 py-1.5 font-semibold">
              Browse →
            </span>
          </div>
        </motion.div>

        {/* ── MY NOTES ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.36 }}
          className="bg-card rounded-2xl p-5 border border-border"
          data-ocid="dashboard.notes.card"
        >
          <div className="flex items-center gap-2 mb-4">
            <StickyNote className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">My Notes</h3>
            <span className="ml-auto text-xs text-muted-foreground">
              {notes.length} note{notes.length !== 1 ? "s" : ""}
            </span>
            <button
              type="button"
              onClick={handleOpenNewNote}
              data-ocid="dashboard.notes.add_button"
              className="flex items-center gap-1 text-xs bg-primary text-primary-foreground rounded-lg px-3 py-1.5 font-semibold hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> New Note
            </button>
          </div>

          {notes.length === 0 ? (
            <div
              className="text-center py-8"
              data-ocid="dashboard.notes.empty_state"
            >
              <div className="text-4xl mb-3">📝</div>
              <p className="text-sm font-medium text-foreground mb-1">
                No notes yet
              </p>
              <p className="text-xs text-muted-foreground">
                Jot down key concepts as you study each topic
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {notes.map((note, i) => (
                <div
                  key={note.id}
                  data-ocid={`dashboard.notes.item.${i + 1}`}
                  className="rounded-xl border border-border bg-muted/40 p-3 flex items-start gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {note.title}
                    </p>
                    {note.topicId && (
                      <p className="text-[10px] text-primary font-medium mt-0.5">
                        #{note.topicId}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {note.content}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1.5">
                      {new Date(note.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleEditNote(note)}
                      data-ocid={`dashboard.notes.edit_button.${i + 1}`}
                      className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Edit note"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteNote(note.id)}
                      data-ocid={`dashboard.notes.delete_button.${i + 1}`}
                      className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors"
                      aria-label="Delete note"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Theme Selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-card rounded-2xl p-5 border border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-foreground">App Theme</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {(
              [
                {
                  id: "default",
                  label: "Default",
                  emoji: "🎨",
                  desc: "Classic",
                },
                {
                  id: "romantic",
                  label: "Romantic",
                  emoji: "💖",
                  desc: "Pink & soft",
                },
                {
                  id: "chill",
                  label: "Chill",
                  emoji: "🌊",
                  desc: "Blue & calm",
                },
                {
                  id: "motivation",
                  label: "Motivation",
                  emoji: "🔥",
                  desc: "Orange energy",
                },
                {
                  id: "focus",
                  label: "Focus",
                  emoji: "🔮",
                  desc: "Purple deep",
                },
                { id: "night", label: "Night", emoji: "🌙", desc: "Dark mode" },
              ] as {
                id: AppTheme;
                label: string;
                emoji: string;
                desc: string;
              }[]
            ).map((theme) => {
              const isActive = appTheme === theme.id;
              return (
                <button
                  type="button"
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`rounded-xl border p-3 text-center transition-colors hover:scale-105 ${isActive ? "border-primary bg-primary/15 shadow-md" : "border-border bg-muted hover:border-primary/40"}`}
                  data-ocid={`dashboard.theme_${theme.id}.button`}
                >
                  <div className="text-2xl mb-1">{theme.emoji}</div>
                  <p className="text-xs font-semibold text-foreground">
                    {theme.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {theme.desc}
                  </p>
                  {isActive && (
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary mx-auto" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ── NOTES MODAL ── */}
      <AnimatePresence>
        {showNotesModal && (
          <motion.div
            key="notes-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            data-ocid="dashboard.notes.dialog"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowNotesModal(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-card border border-border rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
                <StickyNote className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground flex-1">
                  {editingNote ? "Edit Note" : "New Note"}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowNotesModal(false)}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  data-ocid="dashboard.notes.close_button"
                  aria-label="Close notes modal"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label
                    htmlFor="note-title"
                    className="text-xs font-semibold text-muted-foreground block mb-1.5"
                  >
                    Title *
                  </label>
                  <input
                    id="note-title"
                    type="text"
                    value={noteForm.title}
                    onChange={(e) =>
                      setNoteForm((f) => ({ ...f, title: e.target.value }))
                    }
                    placeholder="e.g. Pointers in C — key concepts"
                    className="w-full rounded-xl border border-input bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    data-ocid="dashboard.notes.title_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="note-topic"
                    className="text-xs font-semibold text-muted-foreground block mb-1.5"
                  >
                    Topic ID (optional)
                  </label>
                  <input
                    id="note-topic"
                    type="text"
                    value={noteForm.topicId}
                    onChange={(e) =>
                      setNoteForm((f) => ({ ...f, topicId: e.target.value }))
                    }
                    placeholder="e.g. c-pointers, python-lists"
                    className="w-full rounded-xl border border-input bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    data-ocid="dashboard.notes.topic_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="note-content"
                    className="text-xs font-semibold text-muted-foreground block mb-1.5"
                  >
                    Content *
                  </label>
                  <textarea
                    id="note-content"
                    value={noteForm.content}
                    onChange={(e) =>
                      setNoteForm((f) => ({ ...f, content: e.target.value }))
                    }
                    placeholder="Write your notes here…"
                    rows={6}
                    className="w-full rounded-xl border border-input bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    data-ocid="dashboard.notes.content_textarea"
                  />
                </div>
                <div className="flex gap-3 pt-1">
                  <Button
                    variant="outline"
                    onClick={() => setShowNotesModal(false)}
                    className="flex-1 rounded-xl"
                    data-ocid="dashboard.notes.cancel_button"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveNote}
                    disabled={!noteForm.title.trim()}
                    className="flex-1 rounded-xl"
                    data-ocid="dashboard.notes.submit_button"
                  >
                    {editingNote ? "Save Changes" : "Create Note"}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── JOBS MODAL ── */}
      <AnimatePresence>
        {showJobsModal && (
          <motion.div
            key="jobs-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
            data-ocid="dashboard.jobs.dialog"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowJobsModal(false);
            }}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-border shrink-0">
                <Briefcase className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground flex-1">
                  Tech Jobs &amp; Internships
                </h3>
                <span className="text-xs text-muted-foreground">
                  {filteredJobs.length} listings
                </span>
                <button
                  type="button"
                  onClick={() => setShowJobsModal(false)}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  data-ocid="dashboard.jobs.close_button"
                  aria-label="Close jobs modal"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Filter tabs */}
              <div className="flex gap-2 px-5 py-3 border-b border-border overflow-x-auto shrink-0">
                {(["all", "full-time", "internship", "remote"] as const).map(
                  (f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setJobFilter(f)}
                      data-ocid={`dashboard.jobs.filter_${f}.tab`}
                      className={`shrink-0 text-xs px-3 py-1.5 rounded-full font-semibold transition-colors border ${jobFilter === f ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground border-border hover:border-primary/40"}`}
                    >
                      {f === "all"
                        ? "All"
                        : f === "full-time"
                          ? "Full-time"
                          : f === "internship"
                            ? "Internship"
                            : "Remote"}
                    </button>
                  ),
                )}
              </div>

              {/* Job list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredJobs.map((job: JobListing, i) => (
                  <div
                    key={job.id}
                    data-ocid={`dashboard.jobs.item.${i + 1}`}
                    className="rounded-xl border border-border bg-muted/40 p-4 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-xl shrink-0">
                        {job.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-foreground truncate">
                              {job.role}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {job.company} · {job.location}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                              job.type === "remote"
                                ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                                : job.type === "internship"
                                  ? "bg-green-500/15 text-green-400 border-green-500/30"
                                  : "bg-primary/15 text-primary border-primary/30"
                            }`}
                          >
                            {job.type}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/70 mt-2 line-clamp-2">
                          {job.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className="text-xs font-semibold text-green-400">
                            {job.salary}
                          </span>
                          <span className="text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">
                            {job.experience}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {job.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {job.skills.length > 4 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                              +{job.skills.length - 4}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-[10px] text-muted-foreground">
                            Posted {job.postedDate}
                          </span>
                          <a
                            href={job.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-ocid={`dashboard.jobs.apply_button.${i + 1}`}
                            className="text-xs font-semibold bg-primary text-primary-foreground rounded-lg px-3 py-1.5 hover:bg-primary/90 transition-colors"
                          >
                            Apply →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom Navigation Bar — only shown when NOT embedded in StudyApp */}
      {!embedded && (
        <nav
          className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border flex items-stretch justify-around"
          style={{ willChange: "transform" }}
        >
          {[
            {
              tab: "study",
              key: "chat",
              icon: <MessageSquare className="w-5 h-5" />,
              label: "Chat",
            },
            {
              tab: "study",
              icon: <BookOpen className="w-5 h-5" />,
              label: "Study",
            },
            {
              tab: "events",
              icon: <Calendar className="w-5 h-5" />,
              label: "Events",
            },
            {
              tab: "problems",
              icon: <Code className="w-5 h-5" />,
              label: "Problems",
            },
            {
              tab: "dashboard",
              icon: <LayoutDashboard className="w-5 h-5" />,
              label: "Dashboard",
              active: true,
            },
          ].map((item) => (
            <button
              key={(item as { key?: string; tab: string }).key ?? item.tab}
              type="button"
              data-ocid={`dashboard.nav_${item.label.toLowerCase()}.button`}
              onClick={() =>
                setPage(
                  item.tab as "study" | "problems" | "dashboard" | "events",
                )
              }
              className={`flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 text-xs font-medium transition-colors ${item.active ? "text-primary border-t-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

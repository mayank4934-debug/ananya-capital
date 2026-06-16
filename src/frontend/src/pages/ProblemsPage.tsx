import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  Clock,
  Code,
  Lightbulb,
  Search,
  Send,
  Star,
  Trophy,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type React from "react";
import MultiLangCompiler from "../components/MultiLangCompiler";
import ProjectsSection from "../components/ProjectsSection";
import { useApp } from "../context/AppContext";
import { APTITUDE_QUESTIONS } from "../data/aptitudeData";
import { COMPANION_PRESETS } from "../data/companions";
import { COMPANY_PREP } from "../data/companyPrepData";
import { MOCK_TESTS } from "../data/mockTestData";
import { getPOTD } from "../data/potdData";
import { CODING_PROBLEMS, type CodingProblem } from "../data/problems";
import { TOPIC_PRACTICE } from "../data/topicPracticeData";
import { useProxyAIChat } from "../hooks/useQueries";
import COnlineTestPage from "./COnlineTestPage";
import CodeVisualizationPage from "./CodeVisualizationPage";
import DailyChallengeProblems from "./DailyChallengeProblems";
import DocumentationHub from "./DocumentationHub";
import PracticeProgramsPage from "./PracticeProgramsPage";

type ActivePage =
  | null
  | "problems"
  | "projects"
  | "compiler"
  | "visualizer"
  | "conlinetest"
  | "practice"
  | "dailychallenge"
  | "documentation"
  | "company"
  | "topic"
  | "aptitude"
  | "mocktest-list"
  | "mocktest-active"
  | "mocktest-results";

const ACHIEVEMENTS = [
  { icon: "🚀", name: "First Steps", desc: "Complete your first problem" },
  { icon: "🔥", name: "Week Warrior", desc: "7-day learning streak" },
  { icon: "💻", name: "Code Master", desc: "Solve 10 problems" },
  { icon: "💖", name: "First Love Call", desc: "Unlock your first Love Call" },
  { icon: "⚡", name: "Hot Streak", desc: "3 correct answers in a row" },
  { icon: "💯", name: "Century", desc: "Earn 100 points" },
];

const DIFF_COLORS: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
  Medium:
    "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
  Hard: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
};

const COMPANY_STYLES: Record<
  string,
  { label: string; bg: string; text: string }
> = {
  Google: { label: "G", bg: "bg-blue-500", text: "text-white" },
  Amazon: { label: "A", bg: "bg-orange-500", text: "text-white" },
  Meta: { label: "M", bg: "bg-blue-600", text: "text-white" },
  Microsoft: { label: "Ms", bg: "bg-slate-500", text: "text-white" },
  Apple: { label: "Ap", bg: "bg-zinc-700", text: "text-white" },
  Netflix: { label: "N", bg: "bg-red-600", text: "text-white" },
  Uber: { label: "U", bg: "bg-neutral-800", text: "text-white" },
};

const CATEGORIES = [
  "All",
  "Arrays",
  "Strings",
  "Two Pointers",
  "Sliding Window",
  "Stacks",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Recursion",
  "Bit Manipulation",
  "Linked Lists",
];

const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"] as const;
const COMPANIES = [
  "All",
  "Google",
  "Amazon",
  "Meta",
  "Microsoft",
  "Apple",
] as const;

function getCategory(p: CodingProblem): string {
  return p.topic ?? "Other";
}

async function askOpenAI({
  userMessage,
  companionName,
  problemTitle,
  problemHint,
  proxyFn,
}: {
  userMessage: string;
  companionName: string;
  problemTitle: string;
  problemHint: string;
  proxyFn: (
    messages: Array<{ role: string; content: string }>,
    systemPrompt: string,
  ) => Promise<string>;
}): Promise<string> {
  const systemPrompt = `You are ${companionName}, a friendly and encouraging AI study companion helping a student solve the coding problem "${problemTitle}". 
You are supportive, warm, and give clear technical guidance. If asked for a hint, use this hint: "${problemHint}". 
Keep responses concise (2-3 sentences max). Use light emojis for warmth.`;
  try {
    const reply = await proxyFn(
      [{ role: "user", content: userMessage }],
      systemPrompt,
    );
    return reply || "";
  } catch {
    return "";
  }
}

// ─── Utility: get today string ────────────────────────────────────────────────
function getTodayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// ─── Difficulty Progress Ring (SVG) ─────────────────────────────────────────
function DiffRing({
  label,
  solved,
  total,
  color,
}: { label: string; solved: number; total: number; color: string }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const pct = total > 0 ? solved / total : 0;
  const dash = circ * pct;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-14 h-14">
        <svg width={56} height={56} className="-rotate-90" aria-hidden="true">
          <circle
            cx={28}
            cy={28}
            r={r}
            fill="none"
            strokeWidth={5}
            className="stroke-muted"
          />
          <circle
            cx={28}
            cy={28}
            r={r}
            fill="none"
            strokeWidth={5}
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            style={{ stroke: color, transition: "stroke-dasharray 0.6s ease" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-foreground">
          {solved}/{total}
        </span>
      </div>
      <span className="text-[11px] font-semibold text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

// ─── Company Badge ───────────────────────────────────────────────────────────
function CompanyBadge({ company }: { company: string }) {
  const style = COMPANY_STYLES[company];
  if (!style) return null;
  return (
    <span
      title={company}
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold shrink-0 ${style.bg} ${style.text}`}
    >
      {style.label}
    </span>
  );
}

// ─── Problem Card ────────────────────────────────────────────────────────────
const ProblemCard = memo(function ProblemCard({
  problem,
  onStart,
  isSolved,
}: { problem: CodingProblem; onStart: () => void; isSolved: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow relative"
    >
      {isSolved && (
        <span className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
          ✓ Solved
        </span>
      )}
      <div className="flex items-center gap-2 mb-3 flex-wrap pr-14">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${DIFF_COLORS[problem.difficulty]}`}
        >
          {problem.difficulty}
        </span>
        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
          {getCategory(problem)}
        </span>
      </div>
      <h3 className="font-bold text-primary text-base mb-2 pr-2">
        {problem.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
        {problem.description}
      </p>
      {problem.companies && problem.companies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {problem.companies.slice(0, 5).map((c) => (
            <CompanyBadge key={c} company={c} />
          ))}
        </div>
      )}
      {(problem.timeComplexity || problem.spaceComplexity) && (
        <div className="flex gap-2 mb-3 flex-wrap">
          {problem.timeComplexity && (
            <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800 px-2 py-0.5 rounded-full font-mono">
              ⏱ {problem.timeComplexity}
            </span>
          )}
          {problem.spaceComplexity && (
            <span className="text-xs bg-violet-50 text-violet-700 border border-violet-200 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800 px-2 py-0.5 rounded-full font-mono">
              💾 {problem.spaceComplexity}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {problem.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Button
        onClick={onStart}
        data-ocid="problem.card.start"
        className="w-full rounded-xl bg-primary text-primary-foreground font-semibold text-sm"
      >
        {isSolved ? "Revisit" : "Start"}{" "}
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </motion.div>
  );
});

// ─── Category Progress Row ──────────────────────────────────────────────────
function CategoryProgress({
  category,
  total,
  solved,
}: { category: string; total: number; solved: number }) {
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
  const color =
    pct === 100
      ? "bg-green-500"
      : pct > 0
        ? "bg-yellow-500"
        : "bg-muted-foreground/30";
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted-foreground w-36 truncate shrink-0">
        {category}
      </span>
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        className={`text-xs font-bold shrink-0 w-12 text-right ${pct === 100 ? "text-green-600" : pct > 0 ? "text-yellow-600" : "text-muted-foreground"}`}
      >
        {solved}/{total}
      </span>
    </div>
  );
}

// ─── Page Header with Back Button ────────────────────────────────────────────
function PageHeader({
  title,
  emoji,
  subtitle,
  onBack,
  gradientFrom,
  gradientTo,
}: {
  title: string;
  emoji: string;
  subtitle: string;
  onBack: () => void;
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <header
      className="shrink-0 px-4 py-3 flex items-center gap-3"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={onBack}
        className="rounded-xl text-white/80 hover:text-white hover:bg-white/15 shrink-0"
        data-ocid="problems.back_button"
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: "rgba(255,255,255,0.2)" }}
      >
        {emoji}
      </div>
      <div className="flex-1 min-w-0">
        <h1 className="font-extrabold text-white text-base leading-tight truncate">
          {title}
        </h1>
        <p className="text-[11px] text-white/70 truncate">{subtitle}</p>
      </div>
    </header>
  );
}

// ─── POTD Banner ─────────────────────────────────────────────────────────────
function POTDBanner({
  onStartProblem,
  solvedSet,
}: { onStartProblem: (id: string) => void; solvedSet: Set<string> }) {
  const today = getTodayStr();
  const potd = getPOTD(today);
  const problem = potd
    ? CODING_PROBLEMS.find((p) => p.id === potd.problemId)
    : null;

  const [countdown, setCountdown] = useState(() => {
    const now = Date.now();
    const nextMidnight = (Math.floor(now / 86400000) + 1) * 86400000;
    return nextMidnight - now;
  });

  useEffect(() => {
    const id = setInterval(() => {
      const now = Date.now();
      const nextMidnight = (Math.floor(now / 86400000) + 1) * 86400000;
      setCountdown(nextMidnight - now);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!potd || !problem) return null;

  const isSolved = solvedSet.has(String(potd.problemId));
  const hh = String(Math.floor(countdown / 3600000)).padStart(2, "0");
  const mm = String(Math.floor((countdown % 3600000) / 60000)).padStart(2, "0");
  const ss = String(Math.floor((countdown % 60000) / 1000)).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl overflow-hidden border border-border shadow-lg mb-4"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e1b4b 100%)",
      }}
      data-ocid="potd.banner"
    >
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌟</span>
          <span className="text-white font-extrabold text-sm uppercase tracking-wider">
            Problem of the Day
          </span>
          {potd.featured && (
            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
              <Star className="w-2.5 h-2.5" /> Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-white/70 text-xs">
          <Clock className="w-3.5 h-3.5" />
          <span className="font-mono font-bold text-white">
            {hh}:{mm}:{ss}
          </span>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-base truncate">
            {problem.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${DIFF_COLORS[problem.difficulty]}`}
            >
              {problem.difficulty}
            </span>
            <span className="text-white/60 text-xs">
              {getCategory(problem)}
            </span>
            {(problem.companies ?? []).slice(0, 3).map((c) => (
              <CompanyBadge key={c} company={c} />
            ))}
          </div>
          <p className="text-white/60 text-xs mt-1.5 line-clamp-1">
            {problem.description}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-yellow-300 font-extrabold text-lg">
            +{potd.bonusSP}
          </div>
          <div className="text-white/50 text-[10px]">SP Bonus</div>
        </div>
      </div>
      <div className="px-4 pb-3">
        {isSolved ? (
          <div
            className="flex items-center justify-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 rounded-xl py-2.5 text-sm font-bold"
            data-ocid="potd.solved_state"
          >
            <CheckCircle2 className="w-4 h-4" /> Solved Today! +{potd.bonusSP}{" "}
            SP Earned
          </div>
        ) : (
          <Button
            onClick={() => onStartProblem(String(potd.problemId))}
            className="w-full rounded-xl font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              color: "white",
            }}
            data-ocid="potd.solve_button"
          >
            Solve Today's Problem →
          </Button>
        )}
      </div>
    </motion.div>
  );
}

// ─── Problems Sub Page ────────────────────────────────────────────────────────
function ProblemsSubPage({
  onBack,
  onStartProblem,
}: { onBack: () => void; onStartProblem: (id: string) => void }) {
  const { user } = useApp();
  const solvedSet = new Set(user.solvedProblems ?? []);

  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");
  const [activeDiff, setActiveDiff] =
    useState<(typeof DIFFICULTIES)[number]>("All");
  const [activeCompany, setActiveCompany] =
    useState<(typeof COMPANIES)[number]>("All");
  const [showProgress, setShowProgress] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);
  const LOAD_MORE_SIZE = 10;

  const categoryStats = useMemo(
    () =>
      CATEGORIES.filter((c) => c !== "All")
        .map((cat) => {
          const catProblems = CODING_PROBLEMS.filter(
            (p) => getCategory(p) === cat,
          );
          const catSolved = catProblems.filter((p) =>
            solvedSet.has(String(p.id)),
          ).length;
          return {
            category: cat,
            total: catProblems.length,
            solved: catSolved,
          };
        })
        .filter((s) => s.total > 0),
    [solvedSet],
  );

  const totalSolved = solvedSet.size;
  const totalProblems = CODING_PROBLEMS.length;

  // Difficulty ring stats
  const easyProblems = CODING_PROBLEMS.filter((p) => p.difficulty === "Easy");
  const mediumProblems = CODING_PROBLEMS.filter(
    (p) => p.difficulty === "Medium",
  );
  const hardProblems = CODING_PROBLEMS.filter((p) => p.difficulty === "Hard");
  const easySolved = easyProblems.filter((p) =>
    solvedSet.has(String(p.id)),
  ).length;
  const mediumSolved = mediumProblems.filter((p) =>
    solvedSet.has(String(p.id)),
  ).length;
  const hardSolved = hardProblems.filter((p) =>
    solvedSet.has(String(p.id)),
  ).length;

  const filtered = useMemo(() => {
    return CODING_PROBLEMS.filter((p) => {
      const matchCat = activeCat === "All" || getCategory(p) === activeCat;
      const matchDiff = activeDiff === "All" || p.difficulty === activeDiff;
      const matchCompany =
        activeCompany === "All" || (p.companies ?? []).includes(activeCompany);
      const matchSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchDiff && matchCompany && matchSearch;
    });
  }, [activeCat, activeDiff, activeCompany, search]);

  // Reset pagination when filters change
  const visibleProblems = filtered.slice(0, visibleCount);
  const hasMoreProblems = visibleCount < filtered.length;

  // Helpers to change filters and reset pagination
  const handleCatChange = (cat: string) => {
    setActiveCat(cat);
    setVisibleCount(10);
  };
  const handleDiffChange = (d: (typeof DIFFICULTIES)[number]) => {
    setActiveDiff(d);
    setVisibleCount(10);
  };
  const handleCompanyChange = (c: (typeof COMPANIES)[number]) => {
    setActiveCompany(c);
    setVisibleCount(10);
  };

  const activeFilters: { label: string; clear: () => void }[] = [];
  if (activeCat !== "All")
    activeFilters.push({
      label: activeCat,
      clear: () => handleCatChange("All"),
    });
  if (activeDiff !== "All")
    activeFilters.push({
      label: activeDiff,
      clear: () => handleDiffChange("All"),
    });
  if (activeCompany !== "All")
    activeFilters.push({
      label: activeCompany,
      clear: () => handleCompanyChange("All"),
    });

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <PageHeader
        title="Coding Problems"
        emoji="🧩"
        subtitle="Solve real challenges with AI hints"
        onBack={onBack}
        gradientFrom="#10b981"
        gradientTo="#0d9488"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-5 space-y-4 sm:space-y-5 pb-24">
          {/* Difficulty Progress Rings */}
          <div className="bg-card border border-border rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-extrabold text-foreground text-lg">
                  {totalSolved}
                </span>
                <span className="text-muted-foreground text-sm">
                  {" "}
                  / {totalProblems} solved
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowProgress((v) => !v)}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="problems.progress.toggle"
              >
                {showProgress ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                {showProgress ? "Hide" : "Show"} breakdown
              </button>
            </div>
            {/* Difficulty Rings Row */}
            <div className="flex items-center justify-around mb-3 py-2 bg-muted/30 rounded-xl">
              <DiffRing
                label="Easy"
                solved={easySolved}
                total={easyProblems.length}
                color="#22c55e"
              />
              <div className="w-px h-12 bg-border" />
              <DiffRing
                label="Medium"
                solved={mediumSolved}
                total={mediumProblems.length}
                color="#eab308"
              />
              <div className="w-px h-12 bg-border" />
              <DiffRing
                label="Hard"
                solved={hardSolved}
                total={hardProblems.length}
                color="#ef4444"
              />
            </div>
            <Progress
              value={
                totalProblems > 0 ? (totalSolved / totalProblems) * 100 : 0
              }
              className="h-2 mb-3"
            />
            <AnimatePresence>
              {showProgress && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  {categoryStats.map((s) => (
                    <CategoryProgress key={s.category} {...s} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(10);
              }}
              placeholder="Search problems..."
              className="pl-9 rounded-xl h-10 text-sm"
              data-ocid="problems.search"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Category
            </p>
            <div
              className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
              data-ocid="problems.category.filter"
              style={{ scrollbarWidth: "none" }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCatChange(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors shrink-0 min-h-[36px] ${
                    activeCat === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty + Company */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Difficulty
              </p>
              <div
                className="flex gap-2 overflow-x-auto pb-1"
                style={{ scrollbarWidth: "none" }}
                data-ocid="problems.difficulty.filter"
              >
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => handleDiffChange(d)}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors shrink-0 min-h-[36px] ${
                      activeDiff === d
                        ? d === "Easy"
                          ? "bg-green-500 text-white border-green-500"
                          : d === "Medium"
                            ? "bg-yellow-500 text-white border-yellow-500"
                            : d === "Hard"
                              ? "bg-red-500 text-white border-red-500"
                              : "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Company
              </p>
              <div
                className="flex gap-2 overflow-x-auto pb-1"
                style={{ scrollbarWidth: "none" }}
                data-ocid="problems.company.filter"
              >
                {COMPANIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleCompanyChange(c)}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors shrink-0 min-h-[36px] ${
                      activeCompany === c
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {c === "All" ? "All" : c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((f) => (
                <span
                  key={f.label}
                  className="flex items-center gap-1 text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full"
                >
                  {f.label}
                  <button
                    type="button"
                    onClick={f.clear}
                    className="hover:text-primary/60"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={() => {
                  setActiveCat("All");
                  setActiveDiff("All");
                  setActiveCompany("All");
                  setSearch("");
                  setVisibleCount(10);
                }}
                className="text-xs text-muted-foreground hover:text-foreground underline"
              >
                Clear all
              </button>
            </div>
          )}

          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <strong className="text-foreground">
              {visibleProblems.length}
            </strong>{" "}
            of <strong className="text-foreground">{filtered.length}</strong>{" "}
            problems
            {filtered.length !== totalProblems && ` (${totalProblems} total)`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-semibold">No problems match your filters</p>
              <p className="text-sm mt-1">
                Try adjusting the category or difficulty
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visibleProblems.map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    problem={problem}
                    isSolved={solvedSet.has(String(problem.id))}
                    onStart={() => onStartProblem(String(problem.id))}
                  />
                ))}
              </div>
              {hasMoreProblems && (
                <div className="flex justify-center pt-2">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + LOAD_MORE_SIZE)}
                    data-ocid="problems.load_more_button"
                    className="flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-5 py-2.5 rounded-full transition-colors"
                  >
                    Load{" "}
                    {Math.min(LOAD_MORE_SIZE, filtered.length - visibleCount)}{" "}
                    more problems
                  </button>
                </div>
              )}
              {!hasMoreProblems && filtered.length > 10 && (
                <p className="text-center text-xs text-muted-foreground pt-1">
                  All {filtered.length} problems shown
                </p>
              )}
            </>
          )}

          <div>
            <h3 className="text-xl font-extrabold text-foreground mb-4">
              🏆 Achievements
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.name}
                  className="bg-card rounded-2xl p-4 border border-border text-center opacity-60"
                >
                  <div className="text-2xl mb-1">{ach.icon}</div>
                  <div className="text-xs font-bold text-foreground">
                    {ach.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {ach.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Company Prep Sub Page ────────────────────────────────────────────────────
function CompanyPrepPage({
  onBack,
  onStartProblem,
}: { onBack: () => void; onStartProblem: (id: string) => void }) {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("cc_company_checklist") || "{}");
    } catch {
      return {};
    }
  });

  const toggleCheck = (key: string) => {
    const next = { ...checklist, [key]: !checklist[key] };
    setChecklist(next);
    localStorage.setItem("cc_company_checklist", JSON.stringify(next));
  };

  if (selectedCompany) {
    const cp = COMPANY_PREP.find((c) => c.company === selectedCompany);
    if (!cp) return null;
    const topProblems = CODING_PROBLEMS.filter((p) =>
      cp.topProblemIds.includes(p.id),
    );
    return (
      <div className="h-screen bg-background flex flex-col overflow-hidden">
        <PageHeader
          title={`${cp.company} Interview Prep`}
          emoji={cp.logo}
          subtitle={`${cp.difficulty === "hard" ? "Hard" : "Medium"} difficulty · ${cp.rounds.length} rounds`}
          onBack={() => setSelectedCompany(null)}
          gradientFrom="#1e3a8a"
          gradientTo="#312e81"
        />
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-4 py-5 space-y-5 pb-24">
            {/* Tips banner */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
              <p className="text-sm text-foreground leading-relaxed">
                💡 {cp.tips}
              </p>
            </div>
            {/* Common Patterns */}
            <div className="bg-card border border-border rounded-2xl p-4">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span>🧩</span> Common Patterns
              </h3>
              <ul className="space-y-2">
                {cp.patterns.map((pat) => (
                  <li
                    key={pat}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="text-primary mt-0.5">▸</span> {pat}
                  </li>
                ))}
              </ul>
            </div>
            {/* Interview Rounds */}
            <div className="bg-card border border-border rounded-2xl p-4">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span>📋</span> Interview Rounds
              </h3>
              <div className="flex flex-wrap gap-2">
                {cp.rounds.map((r) => (
                  <span
                    key={r}
                    className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full border border-border"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            {/* Mock Interview Checklist */}
            <div className="bg-card border border-border rounded-2xl p-4">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span>✅</span> Mock Interview Checklist
              </h3>
              <div className="space-y-2">
                {cp.checklist.map((item, i) => {
                  const key = `${cp.company}-${i}`;
                  const checked = !!checklist[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleCheck(key)}
                      className="w-full flex items-start gap-3 text-left p-2 rounded-xl hover:bg-muted/30 transition-colors"
                      data-ocid={`company.checklist.item.${i + 1}`}
                    >
                      {checked ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm leading-snug ${checked ? "line-through text-muted-foreground" : "text-foreground"}`}
                      >
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                {
                  cp.checklist.filter(
                    (_, i) => !!checklist[`${cp.company}-${i}`],
                  ).length
                }{" "}
                / {cp.checklist.length} completed
              </div>
            </div>
            {/* Top Problems */}
            <div className="bg-card border border-border rounded-2xl p-4">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span>🔥</span> Top Asked Problems
              </h3>
              <div className="space-y-2">
                {topProblems.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onStartProblem(String(p.id))}
                    className="w-full flex items-center justify-between gap-3 p-3 bg-muted/30 hover:bg-muted/60 rounded-xl transition-colors text-left"
                    data-ocid={`company.problem.${p.id}`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-foreground truncate">
                        {p.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {getCategory(p)}
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${DIFF_COLORS[p.difficulty]}`}
                    >
                      {p.difficulty}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <PageHeader
        title="Company Interview Prep"
        emoji="🏢"
        subtitle="Targeted prep for top tech companies"
        onBack={onBack}
        gradientFrom="#1e3a8a"
        gradientTo="#312e81"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-5 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPANY_PREP.map((cp) => (
              <motion.button
                key={cp.company}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCompany(cp.company)}
                className="bg-card border border-border rounded-2xl p-5 text-left hover:shadow-md transition-shadow"
                data-ocid={`company.card.${cp.company.toLowerCase()}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{cp.logo}</span>
                  <div>
                    <div className="font-bold text-foreground text-base">
                      {cp.company}
                    </div>
                    <div
                      className={`text-xs font-semibold ${cp.difficulty === "hard" ? "text-red-500" : "text-yellow-600"}`}
                    >
                      {cp.difficulty === "hard" ? "🔥 Hard" : "⚡ Medium"}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {cp.patterns.slice(0, 2).join(" · ")}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    {cp.topProblemIds.length} top problems
                  </span>
                  <span className="text-primary font-semibold">
                    View prep →
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Topic Practice Sub Page ──────────────────────────────────────────────────
function TopicPracticePage({
  onBack,
  onStartProblem,
}: { onBack: () => void; onStartProblem: (id: string) => void }) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [progress] = useState<Record<string, string[]>>(() => {
    try {
      return JSON.parse(localStorage.getItem("cc_topic_progress") || "{}");
    } catch {
      return {};
    }
  });

  if (selectedTopic) {
    const tp = TOPIC_PRACTICE.find((t) => t.topic === selectedTopic);
    if (!tp) return null;
    const problems = CODING_PROBLEMS.filter((p) =>
      tp.problemIds.includes(p.id),
    );
    const solvedInTopic = (progress[tp.topic] ?? []).length;

    return (
      <div className="h-screen bg-background flex flex-col overflow-hidden">
        <PageHeader
          title={`${tp.icon} ${tp.topic}`}
          emoji={tp.icon}
          subtitle={`${tp.estimatedTime} · ${tp.difficulty}`}
          onBack={() => setSelectedTopic(null)}
          gradientFrom="#0d9488"
          gradientTo="#059669"
        />
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-4 py-5 space-y-5 pb-24">
            <div className="bg-card border border-border rounded-2xl p-4">
              <p className="text-sm text-foreground leading-relaxed mb-3">
                {tp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tp.keyTechniques.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground">
                  Problems ({solvedInTopic}/{problems.length} solved)
                </h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tp.difficulty === "beginner" ? "bg-green-100 text-green-700" : tp.difficulty === "intermediate" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}
                >
                  {tp.difficulty}
                </span>
              </div>
              <Progress
                value={
                  problems.length > 0
                    ? (solvedInTopic / problems.length) * 100
                    : 0
                }
                className="h-2 mb-4"
              />
              <div className="space-y-2">
                {problems.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onStartProblem(String(p.id))}
                    className="w-full flex items-center justify-between gap-3 p-3 bg-muted/30 hover:bg-muted/60 rounded-xl transition-colors text-left"
                    data-ocid={`topic.problem.${p.id}`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-foreground truncate">
                        {p.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {p.topic}
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${DIFF_COLORS[p.difficulty]}`}
                    >
                      {p.difficulty}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <PageHeader
        title="Topic Practice"
        emoji="📚"
        subtitle="Practice problems by topic category"
        onBack={onBack}
        gradientFrom="#0d9488"
        gradientTo="#059669"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-5 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOPIC_PRACTICE.map((tp) => {
              const solvedInTopic = (progress[tp.topic] ?? []).length;
              const totalInTopic = tp.problemIds.length;
              const pct =
                totalInTopic > 0 ? (solvedInTopic / totalInTopic) * 100 : 0;
              return (
                <motion.button
                  key={tp.topic}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedTopic(tp.topic)}
                  className="bg-card border border-border rounded-2xl p-4 text-left hover:shadow-md transition-shadow"
                  data-ocid={`topic.card.${tp.topic.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tp.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-foreground text-sm truncate">
                        {tp.topic}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {tp.estimatedTime}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <DiffRing
                        label=""
                        solved={solvedInTopic}
                        total={totalInTopic}
                        color={
                          pct === 100
                            ? "#22c55e"
                            : pct > 0
                              ? "#eab308"
                              : "#6366f1"
                        }
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {tp.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-semibold ${tp.difficulty === "beginner" ? "text-green-600" : tp.difficulty === "intermediate" ? "text-yellow-600" : "text-red-600"}`}
                    >
                      {tp.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {tp.problemIds.length} problems
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Aptitude Sub Page ────────────────────────────────────────────────────────
function AptitudePage({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<
    "quantitative" | "logical" | "verbal"
  >("quantitative");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [scores, setScores] = useState<Record<string, number>>(() => {
    try {
      return JSON.parse(localStorage.getItem("cc_aptitude_scores") || "{}");
    } catch {
      return {};
    }
  });

  const questions = APTITUDE_QUESTIONS.filter((q) => q.category === activeTab);

  const handleAnswer = (qId: string, idx: number, correctIdx: number) => {
    if (answers[qId] !== undefined) return;
    const newAnswers = { ...answers, [qId]: idx };
    setAnswers(newAnswers);
    setRevealed({ ...revealed, [qId]: true });
    if (idx === correctIdx) {
      const next = { ...scores, [qId]: 1 };
      setScores(next);
      localStorage.setItem("cc_aptitude_scores", JSON.stringify(next));
    }
  };

  const tabScore = questions.filter((q) => scores[q.id] === 1).length;

  const tabs: {
    id: "quantitative" | "logical" | "verbal";
    label: string;
    emoji: string;
  }[] = [
    { id: "quantitative", label: "Quantitative", emoji: "🔢" },
    { id: "logical", label: "Logical", emoji: "🧠" },
    { id: "verbal", label: "Verbal", emoji: "📝" },
  ];

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <PageHeader
        title="Aptitude & Reasoning"
        emoji="🧮"
        subtitle="Quantitative · Logical · Verbal"
        onBack={onBack}
        gradientFrom="#7c3aed"
        gradientTo="#a855f7"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-4 pb-24">
          {/* Tabs */}
          <div className="flex gap-2 mb-4" data-ocid="aptitude.tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors min-h-[40px] ${
                  activeTab === t.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary"
                }`}
                data-ocid={`aptitude.tab.${t.id}`}
              >
                {t.emoji} {t.label}
              </button>
            ))}
          </div>
          {/* Score */}
          <div className="flex items-center justify-between mb-4 bg-card border border-border rounded-xl px-4 py-2.5">
            <span className="text-sm text-muted-foreground font-medium">
              Score
            </span>
            <span className="font-extrabold text-primary text-base">
              {tabScore} / {questions.length}
            </span>
          </div>
          {/* Questions */}
          <div className="space-y-4">
            {questions.map((q, qi) => {
              const selected = answers[q.id];
              const isRevealed = revealed[q.id];
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: qi * 0.03 }}
                  className="bg-card border border-border rounded-2xl p-4"
                  data-ocid={`aptitude.question.${qi + 1}`}
                >
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-xs font-bold text-muted-foreground shrink-0 mt-0.5">
                      Q{qi + 1}.
                    </span>
                    <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                      {q.question}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {q.options.map((opt, oi) => {
                      let cls =
                        "bg-muted/40 border-border text-foreground hover:border-primary hover:bg-primary/5";
                      if (isRevealed) {
                        if (oi === q.correctAnswer)
                          cls =
                            "bg-green-50 border-green-400 text-green-700 dark:bg-green-900/30 dark:text-green-300";
                        else if (oi === selected && oi !== q.correctAnswer)
                          cls =
                            "bg-red-50 border-red-400 text-red-700 dark:bg-red-900/30 dark:text-red-300";
                        else
                          cls =
                            "bg-muted/30 border-border text-muted-foreground";
                      }
                      return (
                        <button
                          key={oi}
                          type="button"
                          onClick={() =>
                            handleAnswer(q.id, oi, q.correctAnswer)
                          }
                          disabled={isRevealed}
                          className={`w-full text-left px-3 py-2.5 rounded-xl border text-sm transition-colors ${cls}`}
                          data-ocid={`aptitude.option.${qi + 1}.${oi + 1}`}
                        >
                          <span className="font-semibold mr-2">
                            {["A", "B", "C", "D"][oi]}.
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl px-3 py-2.5 overflow-hidden"
                    >
                      <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">
                        💡 Explanation
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                        {q.explanation}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mock Test Sub Page ───────────────────────────────────────────────────────
const MOCK_DOMAIN_TABS = [
  "All",
  "DSA",
  "Aptitude",
  "CS Subjects",
  "Python",
  "Java",
  "Frontend",
  "Backend",
  "Data Science",
  "Cybersecurity",
] as const;

type MockDomainTab = (typeof MOCK_DOMAIN_TABS)[number];

function MockTestListPage({
  onBack,
  onStart,
}: { onBack: () => void; onStart: (testId: string) => void }) {
  const [activeTab, setActiveTab] = useState<MockDomainTab>("All");
  const [visibleCount, setVisibleCount] = useState(5);
  const [results] = useState<
    Record<string, { score: number; total: number; date: string }>
  >(() => {
    try {
      return JSON.parse(localStorage.getItem("cc_mock_results") || "{}");
    } catch {
      return {};
    }
  });

  const completedIds: string[] = (() => {
    try {
      return JSON.parse(
        localStorage.getItem("completedMockTests") ?? "[]",
      ) as string[];
    } catch {
      return [];
    }
  })();

  const filteredTests =
    activeTab === "All"
      ? MOCK_TESTS
      : MOCK_TESTS.filter((t) => t.category === activeTab);

  const completedInTab = filteredTests.filter(
    (t) => completedIds.includes(t.id) || results[t.id],
  ).length;

  const categoryColors: Record<string, string> = {
    DSA: "from-emerald-500 to-teal-600",
    Aptitude: "from-violet-500 to-purple-600",
    "CS Subjects": "from-blue-500 to-cyan-600",
    Mixed: "from-orange-500 to-red-500",
    Python: "from-yellow-500 to-amber-600",
    Java: "from-orange-500 to-red-600",
    Frontend: "from-pink-500 to-rose-600",
    Backend: "from-teal-600 to-cyan-700",
    "Data Science": "from-indigo-500 to-blue-600",
    Cybersecurity: "from-slate-600 to-gray-700",
  };
  const categoryEmojis: Record<string, string> = {
    DSA: "🌳",
    Aptitude: "🧮",
    "CS Subjects": "💻",
    Mixed: "🎯",
    Python: "🐍",
    Java: "☕",
    Frontend: "🌐",
    Backend: "⚙️",
    "Data Science": "📊",
    Cybersecurity: "🔐",
  };

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <PageHeader
        title="Mock Tests"
        emoji="📝"
        subtitle="Timed practice tests with full review"
        onBack={onBack}
        gradientFrom="#0f766e"
        gradientTo="#0369a1"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-5 pb-24 space-y-4">
          {/* Domain filter tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
            data-ocid="mocktest.domain.filter"
          >
            {MOCK_DOMAIN_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(5);
                }}
                className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors shrink-0 min-h-[36px] ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
                data-ocid={`mocktest.tab.${tab.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Progress tracker */}
          <div className="bg-card border border-border rounded-xl px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-medium">
              {activeTab === "All" ? "All Tests" : activeTab} Progress
            </span>
            <div className="flex items-center gap-2">
              <div className="w-28 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{
                    width:
                      filteredTests.length > 0
                        ? `${(completedInTab / filteredTests.length) * 100}%`
                        : "0%",
                  }}
                />
              </div>
              <span className="text-xs font-bold text-primary">
                {completedInTab}/{filteredTests.length} completed
              </span>
            </div>
          </div>

          {filteredTests.length === 0 ? (
            <div
              className="text-center py-12 text-muted-foreground"
              data-ocid="mocktest.empty_state"
            >
              <div className="text-4xl mb-3">📝</div>
              <p className="font-semibold">No tests in this category yet</p>
            </div>
          ) : (
            <>
              <p className="text-xs text-muted-foreground">
                Showing{" "}
                <strong className="text-foreground">
                  {Math.min(visibleCount, filteredTests.length)}
                </strong>{" "}
                of{" "}
                <strong className="text-foreground">
                  {filteredTests.length}
                </strong>{" "}
                tests
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredTests.slice(0, visibleCount).map((test) => {
                  const prev = results[test.id];
                  const pct = prev
                    ? Math.round((prev.score / prev.total) * 100)
                    : null;
                  const isCompleted = completedIds.includes(test.id) || !!prev;
                  return (
                    <motion.button
                      key={test.id}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onStart(test.id)}
                      className={`bg-gradient-to-br ${categoryColors[test.category] ?? "from-primary to-secondary"} rounded-2xl p-5 text-left shadow-md relative`}
                      data-ocid={`mocktest.card.${test.id}`}
                    >
                      {isCompleted && (
                        <span className="absolute top-3 right-3 text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                          ✓ Done
                        </span>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">
                          {categoryEmojis[test.category] ?? "📝"}
                        </span>
                        <div>
                          <div className="font-extrabold text-white text-sm">
                            {test.title}
                          </div>
                          <div className="text-white/70 text-[11px]">
                            {test.category}
                          </div>
                        </div>
                      </div>
                      <p className="text-white/80 text-xs mb-3 line-clamp-2">
                        {test.description}
                      </p>
                      <div className="flex items-center justify-between text-white/80 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 60 min
                        </span>
                        <span>{test.totalQuestions} questions</span>
                        {pct !== null && (
                          <span
                            className={`font-bold ${pct >= 60 ? "text-green-300" : "text-red-300"}`}
                          >
                            Best: {pct}%
                          </span>
                        )}
                      </div>
                      {isCompleted && (
                        <div className="mt-2 text-center text-[11px] text-white/70 font-semibold">
                          Retake →
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
              {visibleCount < filteredTests.length && (
                <div className="flex justify-center pt-2">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((c) => c + 5)}
                    data-ocid="mocktest.load_more_button"
                    className="flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-5 py-2.5 rounded-full transition-colors"
                  >
                    Load {Math.min(5, filteredTests.length - visibleCount)} more
                    tests
                  </button>
                </div>
              )}
              {visibleCount >= filteredTests.length &&
                filteredTests.length > 5 && (
                  <p className="text-center text-xs text-muted-foreground pt-1">
                    All {filteredTests.length} tests shown
                  </p>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MockTestActivePage({
  testId,
  onResults,
}: {
  testId: string;
  onBack: () => void;
  onResults: (testId: string, answers: Record<string, number>) => void;
}) {
  const test = MOCK_TESTS.find((t) => t.id === testId);
  const [timeLeft, setTimeLeft] = useState(test?.duration ?? 3600);
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          onResults(testId, userAnswers);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [testId, userAnswers, onResults]);

  if (!test) return null;
  const q = test.questions[currentQ];
  const hh = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  const answered = Object.keys(userAnswers).length;

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground text-sm">
            {test.title}
          </span>
          <span className="text-xs text-muted-foreground">
            Q{currentQ + 1}/{test.totalQuestions}
          </span>
        </div>
        <div
          className={`flex items-center gap-1.5 font-mono font-bold text-sm px-3 py-1 rounded-xl ${timeLeft < 600 ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-muted text-foreground"}`}
        >
          <Clock className="w-3.5 h-3.5" />
          {hh}:{mm}:{ss}
        </div>
      </header>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-xl mx-auto px-4 py-5 space-y-5 pb-24">
          <Progress
            value={((currentQ + 1) / test.totalQuestions) * 100}
            className="h-1.5"
          />
          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-xs font-bold text-muted-foreground shrink-0 mt-1">
                Q{currentQ + 1}.
              </span>
              <p className="text-sm text-foreground leading-relaxed">
                {q.question}
              </p>
            </div>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const selected = userAnswers[q.id] === oi;
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() =>
                      setUserAnswers({ ...userAnswers, [q.id]: oi })
                    }
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-colors ${
                      selected
                        ? "bg-primary/10 border-primary text-primary font-semibold"
                        : "bg-muted/30 border-border text-foreground hover:border-primary hover:bg-primary/5"
                    }`}
                    data-ocid={`mocktest.option.${oi + 1}`}
                  >
                    <span className="font-semibold mr-2">
                      {["A", "B", "C", "D"][oi]}.
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrentQ((v) => Math.max(0, v - 1))}
              disabled={currentQ === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border border-border bg-card text-foreground hover:border-primary disabled:opacity-40 transition-colors"
              data-ocid="mocktest.prev"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <span className="text-xs text-muted-foreground">
              {answered}/{test.totalQuestions} answered
            </span>
            {currentQ < test.totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() =>
                  setCurrentQ((v) => Math.min(test.totalQuestions - 1, v + 1))
                }
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                data-ocid="mocktest.next"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onResults(testId, userAnswers)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold bg-green-500 text-white border border-green-600 hover:bg-green-600 transition-colors"
                data-ocid="mocktest.submit_button"
              >
                <Trophy className="w-4 h-4" /> Submit Test
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockTestResultsPage({
  testId,
  userAnswers,
  onBack,
}: {
  testId: string;
  userAnswers: Record<string, number>;
  onBack: () => void;
}) {
  const test = MOCK_TESTS.find((t) => t.id === testId);
  const correct = test
    ? test.questions.filter((q) => userAnswers[q.id] === q.correctAnswer).length
    : 0;
  const total = test ? test.totalQuestions : 0;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const percentile =
    pct >= 90 ? 95 : pct >= 75 ? 85 : pct >= 60 ? 70 : pct >= 40 ? 50 : 30;
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (!test) return;
    const stored = JSON.parse(localStorage.getItem("cc_mock_results") || "{}");
    const prev = stored[testId];
    if (!prev || correct > prev.score) {
      stored[testId] = {
        score: correct,
        total,
        date: new Date().toLocaleDateString(),
      };
      localStorage.setItem("cc_mock_results", JSON.stringify(stored));
    }
  }, [testId, correct, total, test]);

  if (!test) return null;

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <PageHeader
        title="Test Results"
        emoji="🏆"
        subtitle={test.title}
        onBack={onBack}
        gradientFrom="#0f766e"
        gradientTo="#0369a1"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-xl mx-auto px-4 py-5 space-y-5 pb-24">
          {/* Score Card */}
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div
              className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-extrabold"
              style={{
                background:
                  pct >= 60
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, #ef4444, #b91c1c)",
                color: "white",
              }}
            >
              {pct}%
            </div>
            <div className="text-2xl font-extrabold text-foreground mb-1">
              {correct} / {total}
            </div>
            <div className="text-muted-foreground text-sm mb-3">
              correct answers
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 text-sm font-bold">
              <Trophy className="w-4 h-4" /> Top {100 - percentile}% of learners
            </div>
          </div>
          {/* Review toggle */}
          <button
            type="button"
            onClick={() => setShowReview((v) => !v)}
            className="w-full flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors"
            data-ocid="mocktest.review.toggle"
          >
            <span>Review Answers</span>
            {showReview ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          <AnimatePresence>
            {showReview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3 overflow-hidden"
              >
                {test.questions.map((q, qi) => {
                  const userAns = userAnswers[q.id];
                  const isCorrect = userAns === q.correctAnswer;
                  return (
                    <div
                      key={q.id}
                      className={`bg-card border rounded-2xl p-4 ${isCorrect ? "border-green-300 dark:border-green-800" : "border-red-300 dark:border-red-800"}`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <span
                          className={`text-sm font-bold shrink-0 ${isCorrect ? "text-green-600" : "text-red-600"}`}
                        >
                          {isCorrect ? "✓" : "✗"} Q{qi + 1}.
                        </span>
                        <p className="text-sm text-foreground leading-snug">
                          {q.question}
                        </p>
                      </div>
                      {!isCorrect && userAns !== undefined && (
                        <div className="text-xs text-red-600 dark:text-red-400 mb-1">
                          Your answer: {q.options[userAns]}
                        </div>
                      )}
                      <div className="text-xs text-green-700 dark:text-green-400 mb-2">
                        Correct: {q.options[q.correctAnswer]}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Problem Solver ──────────────────────────────────────────────────────────
function ProblemSolver({ problem }: { problem: CodingProblem }) {
  const { user, setUser, setCurrentProblemId } = useApp();
  const proxyAIChat = useProxyAIChat();
  const preset =
    COMPANION_PRESETS.find((p) => p.personality === user.personality) ??
    COMPANION_PRESETS[0];
  const solvedSet = new Set(user.solvedProblems ?? []);

  const [code, setCode] = useState(problem.solution ?? "");
  const [submitted, setSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(
    null,
  );
  const [chatMessages, setChatMessages] = useState<
    { role: "user" | "companion"; text: string }[]
  >([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [revealedHints, setRevealedHints] = useState<number>(0);
  const [showSolution, setShowSolution] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const solvedCount = user.solvedProblems?.length ?? 0;
  const relationshipPct = Math.min(100, Math.round((solvedCount / 10) * 100));

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  useEffect(() => {
    setChatMessages([
      {
        role: "companion",
        text: `Hey! Let's solve "${problem.title}" together! ${problem.difficulty === "Hard" ? "This one's tough but I believe in you! 💪" : "You've got this! 💕"} Ask me anything or reveal hints below!`,
      },
    ]);
    setRevealedHints(0);
    setShowSolution(false);
    setSubmitResult(null);
    setSubmitted(false);
    setCode(problem.solution ?? "");
  }, [problem]);

  const handleSubmit = () => {
    if (code.trim().length < 20) {
      setSubmitResult("error");
      setChatMessages((prev) => [
        ...prev,
        {
          role: "companion",
          text: "Hmm, you haven't written code yet! Try implementing the solution, then submit. 💕",
        },
      ]);
      return;
    }
    setSubmitted(true);
    setSubmitResult("success");
    const xpGained =
      problem.xpReward ??
      (problem.difficulty === "Easy"
        ? 20
        : problem.difficulty === "Medium"
          ? 35
          : 50);
    const already = solvedSet.has(String(problem.id));
    if (!already) {
      setUser({
        xp: user.xp + xpGained,
        solvedProblems: [...(user.solvedProblems ?? []), String(problem.id)],
      });
    }
    setChatMessages((prev) => [
      ...prev,
      {
        role: "companion",
        text: `Amazing work! 🎉 You submitted for "${problem.title}"! ${already ? "" : `+${xpGained} XP earned! 🌟`}`,
      },
    ]);
  };

  const revealNextHint = () => {
    const hints = problem.hints ?? [];
    if (revealedHints < hints.length) {
      setRevealedHints((n) => n + 1);
      setHintsOpen(true);
    }
  };

  const handleSendChat = useCallback(() => {
    const text = chatInput.trim();
    if (!text) return;
    setChatInput("");
    setChatMessages((prev) => [...prev, { role: "user", text }]);
    setIsTyping(true);
    askOpenAI({
      userMessage: text,
      companionName: user.companionName || preset.defaultName,
      problemTitle: problem.title,
      problemHint: problem.hints?.[0] ?? "",
      proxyFn: (msgs, sys) =>
        proxyAIChat.mutateAsync({ messages: msgs, systemPrompt: sys }),
    })
      .then((resp) => {
        setIsTyping(false);
        setChatMessages((prev) => [
          ...prev,
          {
            role: "companion",
            text: resp || "You're doing great! Keep coding! 💕",
          },
        ]);
      })
      .catch(() => {
        setIsTyping(false);
        setChatMessages((prev) => [
          ...prev,
          {
            role: "companion",
            text: `💡 ${problem.hints?.[0] ?? "Think step by step!"}`,
          },
        ]);
      });
  }, [chatInput, user.companionName, preset.defaultName, problem, proxyAIChat]);

  const hints = problem.hints ?? [];

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <header className="bg-card border-b border-border px-3 sm:px-4 py-2.5 flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          type="button"
          onClick={() => setCurrentProblemId(null)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors text-foreground text-xs font-semibold shrink-0"
          data-ocid="problems.solver.back_button"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Back to Problems</span>
          <span className="sm:hidden">Back</span>
        </button>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
            <img
              src={preset.image}
              alt={user.companionName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-xs font-bold text-foreground truncate">
              {user.companionName || "Companion"}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {preset.traits.split(" · ")[0]}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Badge
            variant="outline"
            className={`text-xs ${DIFF_COLORS[problem.difficulty]}`}
          >
            {problem.difficulty}
          </Badge>
          {solvedSet.has(String(problem.id)) && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200 hidden sm:inline">
              ✓ Solved
            </span>
          )}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-3 sm:px-4 py-3 sm:py-4 space-y-4 pb-6">
          <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h1 className="text-xl font-extrabold text-foreground">
                {problem.title}
              </h1>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">
              {problem.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {problem.timeComplexity && (
                <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-mono">
                  ⏱ {problem.timeComplexity}
                </span>
              )}
              {problem.spaceComplexity && (
                <span className="text-xs bg-violet-50 text-violet-700 border border-violet-200 px-2 py-0.5 rounded-full font-mono">
                  💾 {problem.spaceComplexity}
                </span>
              )}
              {(problem.companies ?? []).map((c) => (
                <CompanyBadge key={c} company={c} />
              ))}
            </div>
            {problem.examples.map((ex) => (
              <div
                key={ex.input.slice(0, 20)}
                className="bg-[#1a1a2e] rounded-xl p-4 font-mono text-xs mb-2 space-y-1"
              >
                <div>
                  <span className="text-blue-400">Input:</span>{" "}
                  <span className="text-gray-300">{ex.input}</span>
                </div>
                <div>
                  <span className="text-green-400">Output:</span>{" "}
                  <span className="text-gray-300">{ex.output}</span>
                </div>
                {ex.explanation && (
                  <div className="text-gray-500">
                    {"// "}
                    {ex.explanation}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-wrap gap-2 mt-3">
              {problem.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-primary/70 bg-primary/5 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {hints.length > 0 && (
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setHintsOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors"
                data-ocid="problems.hints.toggle"
              >
                <span className="flex items-center gap-2 font-semibold text-sm text-foreground">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  Hints ({revealedHints}/{hints.length} revealed)
                </span>
                {hintsOpen ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {hintsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2">
                      {hints.slice(0, revealedHints).map((h, i) => (
                        <div
                          key={`hint-${i}`}
                          className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-3"
                        >
                          <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 mb-1">
                            Hint {i + 1}
                          </p>
                          <p className="text-sm text-yellow-800 dark:text-yellow-300">
                            {h}
                          </p>
                        </div>
                      ))}
                      {revealedHints < hints.length && (
                        <button
                          type="button"
                          onClick={revealNextHint}
                          className="w-full text-sm text-primary font-semibold py-2 rounded-xl border-2 border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 transition-colors"
                          data-ocid="problems.hint.reveal"
                        >
                          💡 Reveal Hint {revealedHints + 1}
                        </button>
                      )}
                      {revealedHints === hints.length && (
                        <p className="text-xs text-center text-muted-foreground">
                          All hints revealed!
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="bg-[#1e1e2e] rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-gray-400 ml-2 font-mono">
                  solution.js
                </span>
              </div>
              <span className="text-xs text-gray-500">JavaScript</span>
            </div>
            <div className="flex">
              <div className="px-3 py-4 text-right select-none font-mono text-xs text-gray-600 bg-[#181825] min-w-[2.5rem]">
                {code.split("\n").map((_, i) => (
                  <div key={`ln-${i + 1}`}>{i + 1}</div>
                ))}
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 bg-transparent text-gray-100 font-mono text-xs py-4 pr-4 resize-none outline-none leading-5"
                style={{ minHeight: "220px", lineHeight: "1.25rem" }}
                spellCheck={false}
                data-ocid="problems.code.editor"
              />
            </div>
            <div className="flex justify-end px-4 py-3 border-t border-white/10">
              <Button
                onClick={handleSubmit}
                className="rounded-full bg-primary text-primary-foreground font-bold text-sm gap-2 px-5"
                data-ocid="problems.submit"
              >
                <Code className="w-4 h-4" /> Submit Solution
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {submitResult && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${submitResult === "success" ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800" : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"}`}
              >
                {submitResult === "success"
                  ? "✅ Solution submitted! Great work!"
                  : "❌ Please write your solution before submitting."}
              </motion.div>
            )}
          </AnimatePresence>

          {(submitted || revealedHints >= hints.length) && (
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setShowSolution((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors"
                data-ocid="problems.solution.toggle"
              >
                <span className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  View Solution
                </span>
                {showSolution ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {showSolution && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <div className="bg-[#1a1a2e] rounded-xl p-4 font-mono text-xs text-gray-200 whitespace-pre-wrap overflow-x-auto">
                        {problem.solution}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Relationship Progress
              </span>
              <span className="text-sm font-bold text-primary">
                {relationshipPct}%
              </span>
            </div>
            <Progress value={relationshipPct} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{solvedCount} Solved</span>
              <span>{problem.xpReward ?? 50} XP reward</span>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <img
                    src={preset.image}
                    alt={user.companionName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold">
                    {user.companionName} Chat
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    🤖 AI Powered
                  </div>
                </div>
              </div>
              <Button
                onClick={revealNextHint}
                disabled={revealedHints >= hints.length}
                variant="outline"
                size="sm"
                className="rounded-full border-primary text-primary gap-1 text-xs"
                data-ocid="problems.get_hint"
              >
                <Lightbulb className="w-3.5 h-3.5" /> Get Hint
              </Button>
            </div>
            <ScrollArea className="h-48">
              <div className="p-4 space-y-3">
                {chatMessages.map((msg, i) => (
                  <div
                    key={`msg-${i}-${msg.role}`}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex gap-1">
                        {[0, 150, 300].map((delay) => (
                          <span
                            key={delay}
                            className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
                            style={{ animationDelay: `${delay}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </ScrollArea>
            <div className="border-t border-border p-3 flex gap-2">
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
                placeholder="Ask your companion anything..."
                className="rounded-full h-9 text-sm border-2 focus:border-primary"
                data-ocid="problems.chat.input"
              />
              <Button
                onClick={handleSendChat}
                disabled={!chatInput.trim()}
                className="rounded-full w-9 h-9 p-0 bg-primary text-primary-foreground shrink-0"
                data-ocid="problems.chat.send"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-pages ────────────────────────────────────────────────────────────────
function ProjectsSubPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <PageHeader
        title="Project-Based Learning"
        emoji="🛠️"
        subtitle="Build real projects step by step"
        onBack={onBack}
        gradientFrom="#f97316"
        gradientTo="#ef4444"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-5">
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}

function CompilerSubPage({ onBack }: { onBack: () => void }) {
  return (
    <div
      className="h-screen flex flex-col overflow-hidden"
      style={{ background: "#0d1117" }}
    >
      <PageHeader
        title="Multi-Language Compiler"
        emoji="💻"
        subtitle="20+ languages · Judge0 powered · Auto-save"
        onBack={onBack}
        gradientFrom="#0891b2"
        gradientTo="#2563eb"
      />
      <div
        className="flex-1 overflow-y-auto px-4 pt-5"
        style={{ background: "#0d1117" }}
      >
        <MultiLangCompiler />
      </div>
    </div>
  );
}

function VisualizerSubPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
      <div
        className="shrink-0 flex items-center gap-2 px-3 py-2 z-10"
        style={{
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
          borderBottom: "1px solid rgba(139,92,246,0.3)",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="rounded-xl text-white/80 hover:text-white hover:bg-white/15 w-8 h-8"
          data-ocid="visualizer.back_button"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <span className="text-white/70 text-xs font-semibold">
          ← Back to Code Studio
        </span>
      </div>
      <div className="flex-1 overflow-hidden">
        <CodeVisualizationPage />
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ProblemsPage({
  onNavigate: _onNavigate,
}: { onNavigate?: (tab: string) => void }) {
  const { currentProblemId, setCurrentProblemId } = useApp();
  const [activePage, setActivePage] = useState<ActivePage>(null);
  const [countdown, setCountdown] = useState(() => {
    const now = Date.now();
    return (Math.floor(now / 86400000) + 1) * 86400000 - now;
  });
  // For mock test flow
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [testAnswers, setTestAnswers] = useState<Record<string, number>>({});

  const { user } = useApp();
  const solvedSet = useMemo(
    () => new Set(user.solvedProblems ?? []),
    [user.solvedProblems],
  );

  useEffect(() => {
    const id = setInterval(() => {
      const now = Date.now();
      setCountdown((Math.floor(now / 86400000) + 1) * 86400000 - now);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const currentProblem = currentProblemId
    ? CODING_PROBLEMS.find((p) => String(p.id) === currentProblemId)
    : null;
  if (currentProblem) return <ProblemSolver problem={currentProblem} />;

  // Mock test active
  if (activePage === "mocktest-active" && activeTestId) {
    return (
      <MockTestActivePage
        testId={activeTestId}
        onBack={() => setActivePage("mocktest-list")}
        onResults={(_tid, answers) => {
          setTestAnswers(answers);
          setActivePage("mocktest-results");
        }}
      />
    );
  }

  if (activePage === "mocktest-results" && activeTestId) {
    return (
      <MockTestResultsPage
        testId={activeTestId}
        userAnswers={testAnswers}
        onBack={() => setActivePage("mocktest-list")}
      />
    );
  }

  if (activePage === "mocktest-list") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="mocktest-list"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.22 }}
          className="h-screen"
        >
          <MockTestListPage
            onBack={() => setActivePage(null)}
            onStart={(tid) => {
              setActiveTestId(tid);
              setActivePage("mocktest-active");
            }}
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (activePage === "company") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="company"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.22 }}
          className="h-screen"
        >
          <CompanyPrepPage
            onBack={() => setActivePage(null)}
            onStartProblem={(id) => setCurrentProblemId(id)}
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (activePage === "topic") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="topic"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.22 }}
          className="h-screen"
        >
          <TopicPracticePage
            onBack={() => setActivePage(null)}
            onStartProblem={(id) => setCurrentProblemId(id)}
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (activePage === "aptitude") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="aptitude"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.22 }}
          className="h-screen"
        >
          <AptitudePage onBack={() => setActivePage(null)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  const standardSubPageMap: Partial<
    Record<NonNullable<ActivePage>, React.ReactElement>
  > = {
    problems: (
      <ProblemsSubPage
        onBack={() => setActivePage(null)}
        onStartProblem={(id) => setCurrentProblemId(id)}
      />
    ),
    projects: <ProjectsSubPage onBack={() => setActivePage(null)} />,
    compiler: <CompilerSubPage onBack={() => setActivePage(null)} />,
    visualizer: <VisualizerSubPage onBack={() => setActivePage(null)} />,
    conlinetest: <COnlineTestPage onBack={() => setActivePage(null)} />,
    practice: <PracticeProgramsPage onBack={() => setActivePage(null)} />,
    dailychallenge: (
      <DailyChallengeProblems onBack={() => setActivePage(null)} />
    ),
    documentation: <DocumentationHub onBack={() => setActivePage(null)} />,
  };

  if (activePage && standardSubPageMap[activePage]) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.22 }}
          className="h-screen"
        >
          {standardSubPageMap[activePage]}
        </motion.div>
      </AnimatePresence>
    );
  }

  // ── Banner List ──────────────────────────────────────────────────────────────
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <span className="font-bold text-foreground">Code Studio 💻</span>
      </header>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 pb-24">
          {/* POTD Banner — always first */}
          <POTDBanner
            onStartProblem={(id) => setCurrentProblemId(id)}
            solvedSet={solvedSet}
          />

          <div className="mb-4 sm:mb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-primary">
              💻 Code Studio
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Practice real coding problems with your companion by your side
            </p>
          </div>

          {[
            {
              key: "visualizer",
              gradient: "from-violet-500 to-pink-500",
              icon: "🔍",
              title: "Code Visualizer",
              desc: "Upload or paste code — see it animate step by step with variables, arrays & speed control",
              ocid: "problems.visualizer.button",
            },
            {
              key: "compiler",
              gradient: "from-cyan-500 to-blue-600",
              icon: "💻",
              title: "Multi-Language Compiler",
              desc: "Write & run code in 20 languages — Python, Java, C++, Go, Rust & more. Save your snippets.",
              ocid: "problems.compiler.button",
            },
            {
              key: "conlinetest",
              gradient: "from-amber-500 to-orange-500",
              icon: "📝",
              title: "C Online Test",
              desc: "Test your C programming skills with timed MCQ + coding questions. 30–90 min.",
              ocid: "problems.conlinetest.button",
            },
            {
              key: "problems",
              gradient: "from-emerald-500 to-teal-600",
              icon: "🧩",
              title: "Coding Problems",
              desc: "50 real interview problems with filters, hints, and AI companion guidance",
              ocid: "problems.banner",
            },
            {
              key: "projects",
              gradient: "from-orange-500 to-red-500",
              icon: "🛠️",
              title: "Project-Based Learning",
              desc: "Build real projects step-by-step with tasks, hints, and companion guidance",
              ocid: "projects.banner",
            },
            {
              key: "practice",
              gradient: "from-violet-600 to-indigo-600",
              icon: "📋",
              title: "Practice Programs",
              desc: "Domain-specific exercises across Frontend, Python, Java, C & 15+ more tracks",
              ocid: "practice.banner",
            },
            {
              key: "dailychallenge",
              gradient: "from-yellow-500 to-orange-500",
              icon: "⚡",
              title: "Daily Challenge",
              desc: `Next challenge in: ${String(Math.floor(Math.max(0, countdown) / 3600000)).padStart(2, "0")}:${String(Math.floor((Math.max(0, countdown) % 3600000) / 60000)).padStart(2, "0")}:${String(Math.floor((Math.max(0, countdown) % 60000) / 1000)).padStart(2, "0")}`,
              ocid: "daily.banner",
            },
            {
              key: "documentation",
              gradient: "from-green-500 to-emerald-600",
              icon: "📚",
              title: "Documentation",
              desc: "Browse guides, examples, and references for all 15 domains",
              ocid: "docs.banner",
            },
            {
              key: "company",
              gradient: "from-slate-600 to-blue-700",
              icon: "🏢",
              title: "Company Interview Prep",
              desc: "Google, Amazon, Microsoft, Meta, Flipkart, Adobe — targeted prep with top problems & checklists",
              ocid: "company.banner",
            },
            {
              key: "topic",
              gradient: "from-teal-500 to-cyan-600",
              icon: "📚",
              title: "Topic Practice",
              desc: "15 topics — Arrays, Strings, Trees, DP & more — with progress rings and curated problem sets",
              ocid: "topic.banner",
            },
            {
              key: "aptitude",
              gradient: "from-purple-600 to-violet-700",
              icon: "🧮",
              title: "Aptitude & Reasoning",
              desc: "60 questions — Quantitative, Logical Reasoning, Verbal Ability — with instant feedback",
              ocid: "aptitude.banner",
            },
            {
              key: "mocktest-list",
              gradient: "from-teal-600 to-blue-600",
              icon: "📝",
              title: "Mock Tests",
              desc: "4 timed tests — DSA, Aptitude, CS Subjects, Mixed — 30 questions · 60 min · score + review",
              ocid: "mocktest.banner",
            },
          ].map((b) => (
            <motion.button
              key={b.key}
              type="button"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActivePage(b.key as ActivePage)}
              className={`w-full mb-4 sm:mb-5 bg-gradient-to-r ${b.gradient} rounded-2xl p-3 sm:p-4 text-left flex items-center gap-3 sm:gap-4 shadow-lg hover:shadow-xl transition-shadow min-h-[72px]`}
              data-ocid={b.ocid}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                {b.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-extrabold text-sm sm:text-base truncate">
                  {b.title}
                </div>
                <div className="text-white/80 text-xs mt-0.5">{b.desc}</div>
              </div>
              <div className="text-white/60 text-lg shrink-0">&rsaquo;</div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

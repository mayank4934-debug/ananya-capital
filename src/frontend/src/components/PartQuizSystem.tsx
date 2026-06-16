import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import ALL_PART_QUIZZES from "../data/allPartQuizzes";
import type { PartMCQ, PartProgrammingQuestion } from "../data/partQuizData";
import AdvancedChatbot from "./AdvancedChatbot";
import { appendQuizScore } from "./QuizScoreChart";
import { incrementActivity } from "./StreakCalendar";

// ── Activity tracking helpers ────────────────────────────────────────────────

// biome-ignore lint/correctness/noUnusedVariables: used in handleFinish below
function trackQuizCompletion(moduleName: string, score: number, total: number) {
  incrementActivity();
  appendQuizScore({
    date: new Date().toISOString().split("T")[0],
    moduleName,
    score,
    total,
  });
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PartQuizSystemProps {
  partId: string;
  partTitle: string;
  domainName: string;
  onComplete: (score: { mcq: number; programming: number; xp: number }) => void;
  onClose: () => void;
  /** When false, skip the programming/coding challenge phase entirely. Defaults to true. */
  showProgrammingQuestions?: boolean;
}

type QuizPhase = "gate" | "intro" | "mcq" | "programming" | "results";
type ProgrammingStatus = "idle" | "running" | "passed" | "failed";

interface AnswerRecord {
  questionId: string;
  selectedIndex: number;
  correct: boolean;
}

interface RunResult {
  stdout: string;
  stderr: string;
  exitCode: number;
  compileError?: string;
}

// ─── Judge0 Runner ────────────────────────────────────────────────────────────

async function runCode(
  code: string,
  languageId: number,
  stdin = "",
): Promise<RunResult> {
  const res = await fetch(
    "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_code: code,
        language_id: languageId,
        stdin,
      }),
    },
  );
  if (!res.ok) throw new Error(`Judge0 API returned ${res.status}`);
  const data = await res.json();
  return {
    stdout: data.stdout ?? "",
    stderr: data.stderr ?? "",
    exitCode: data.status?.id === 3 ? 0 : 1,
    compileError: data.compile_output || undefined,
  };
}

// ─── Shuffle utility ──────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function shuffledMCQ(mcq: PartMCQ): { mcq: PartMCQ; optionOrder: number[] } {
  const optionOrder = shuffle([0, 1, 2, 3]);
  const shuffledOptions = optionOrder.map((i) => mcq.options[i]) as [
    string,
    string,
    string,
    string,
  ];
  const newCorrect = optionOrder.indexOf(mcq.correct) as 0 | 1 | 2 | 3;
  return {
    mcq: { ...mcq, options: shuffledOptions, correct: newCorrect },
    optionOrder,
  };
}

// ─── XP Ticker ───────────────────────────────────────────────────────────────

function XpTicker({ xp }: { xp: number }) {
  return (
    <motion.div
      key={xp}
      initial={{ opacity: 0, y: -16, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ type: "spring", damping: 12 }}
      className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full px-2.5 py-0.5 text-xs font-bold"
    >
      ⚡ +5 XP
    </motion.div>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function QuizProgressBar({
  current,
  total,
  label,
}: { current: number; total: number; label: string }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-primary">{pct}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ─── Code Editor ──────────────────────────────────────────────────────────────

function CodeEditor({
  value,
  onChange,
  language,
}: {
  value: string;
  onChange: (v: string) => void;
  language: string;
}) {
  const lines = value.split("\n");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.currentTarget;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const newVal = `${value.substring(0, start)}    ${value.substring(end)}`;
      onChange(newVal);
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 4;
          textareaRef.current.selectionEnd = start + 4;
        }
      });
    }
  };

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-zinc-950">
      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">
          Your Solution
        </span>
        <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
          {language}
        </span>
      </div>
      <div className="flex">
        {/* Line numbers */}
        <div className="select-none bg-zinc-900/60 border-r border-border px-2 py-3 text-right min-w-[2.5rem]">
          {lines.map((_, i) => (
            <div
              key={i}
              className="text-[10px] leading-5 text-muted-foreground/50 font-mono"
            >
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          className="flex-1 bg-transparent text-green-300 font-mono text-xs py-3 px-3 resize-none focus:outline-none leading-5"
          style={{ minHeight: "200px" }}
          data-ocid="part-quiz.code_editor"
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PartQuizSystem({
  partId,
  partTitle,
  domainName,
  onComplete,
  onClose,
  showProgrammingQuestions = true,
}: PartQuizSystemProps) {
  // ── Data ──
  const rawData = ALL_PART_QUIZZES[partId] ?? ALL_PART_QUIZZES.generic;
  const isGeneric = !(partId in ALL_PART_QUIZZES);

  // ── Phase state ──
  const [phase, setPhase] = useState<QuizPhase>("gate");
  const [mcqList, setMcqList] = useState<PartMCQ[]>([]);
  const [currentMcqIndex, setCurrentMcqIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [xpFlash, setXpFlash] = useState(false);
  const [mcqXp, setMcqXp] = useState(0);

  // ── Programming state ──
  const [currentProgIndex, setCurrentProgIndex] = useState(0);
  const [progCodes, setProgCodes] = useState<Record<string, string>>({});
  const [progStatuses, setProgStatuses] = useState<
    Record<string, ProgrammingStatus>
  >({});
  const [progOutputs, setProgOutputs] = useState<
    Record<string, RunResult | null>
  >({});
  const [progRunErrors, setProgRunErrors] = useState<
    Record<string, string | null>
  >({});
  const [hintLevels, setHintLevels] = useState<Record<string, number>>({});
  const [progXp, setProgXp] = useState(0);
  const [showChatbot, setShowChatbot] = useState<Record<string, boolean>>({});

  // ── Review mode ──
  const [showReview, setShowReview] = useState(false);

  // ── Initialize MCQ list (shuffled) ──
  const initQuiz = useCallback(() => {
    const shuffledMcqs = shuffle(rawData.mcqs.slice(0, 15)).map(
      (m) => shuffledMCQ(m).mcq,
    );
    setMcqList(shuffledMcqs);
    setCurrentMcqIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setShowExplanation(false);
    setXpFlash(false);
    setMcqXp(0);

    const initialCodes: Record<string, string> = {};
    const initialStatuses: Record<string, ProgrammingStatus> = {};
    for (const pq of rawData.programmingQuestions) {
      initialCodes[pq.id] = pq.starterCode;
      initialStatuses[pq.id] = "idle";
    }
    setProgCodes(initialCodes);
    setProgStatuses(initialStatuses);
    setProgOutputs({});
    setProgRunErrors({});
    setHintLevels({});
    setProgXp(0);
    setShowChatbot({});
    setCurrentProgIndex(0);
    setShowReview(false);
  }, [rawData]);

  // ── MCQ logic ──
  const currentMcq = mcqList[currentMcqIndex];
  const answered = selectedOption !== null;

  const handleSelectOption = (idx: number) => {
    if (answered) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    const isCorrect = idx === currentMcq.correct;
    if (isCorrect) {
      setMcqXp((x) => x + 5);
      setXpFlash(true);
      setTimeout(() => setXpFlash(false), 1500);
    }
    setAnswers((prev) => [
      ...prev,
      { questionId: currentMcq.id, selectedIndex: idx, correct: isCorrect },
    ]);
  };

  const handleNextMcq = () => {
    if (currentMcqIndex + 1 >= mcqList.length) {
      // Skip programming phase for theory-only parts
      setPhase(showProgrammingQuestions ? "programming" : "results");
    } else {
      setCurrentMcqIndex((i) => i + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  // ── Programming logic ──
  const handleRunCode = async (pq: PartProgrammingQuestion) => {
    setProgStatuses((s) => ({ ...s, [pq.id]: "running" }));
    setProgOutputs((o) => ({ ...o, [pq.id]: null }));
    setProgRunErrors((e) => ({ ...e, [pq.id]: null }));

    try {
      const result = await runCode(
        progCodes[pq.id] ?? pq.starterCode,
        pq.languageId,
      );
      setProgOutputs((o) => ({ ...o, [pq.id]: result }));

      // Verdict: check if output contains expected keywords or solution keywords
      const outputText = result.stdout.toLowerCase();
      const hasKeywords = pq.solutionKeywords.some((kw) =>
        (progCodes[pq.id] ?? "").toLowerCase().includes(kw.toLowerCase()),
      );
      const passed = result.exitCode === 0 && hasKeywords;
      setProgStatuses((s) => ({ ...s, [pq.id]: passed ? "passed" : "failed" }));
      if (passed) setProgXp((x) => x + 20);
      // suppress unused variable warning
      void outputText;
    } catch {
      setProgRunErrors((e) => ({
        ...e,
        [pq.id]: "Could not connect to compiler. Check your connection.",
      }));
      setProgStatuses((s) => ({ ...s, [pq.id]: "idle" }));
    }
  };

  const handleNextProg = () => {
    if (currentProgIndex + 1 >= rawData.programmingQuestions.length) {
      setPhase("results");
    } else {
      setCurrentProgIndex((i) => i + 1);
    }
  };

  // ── Results ──
  const mcqCorrect = answers.filter((a) => a.correct).length;
  const progSolved = rawData.programmingQuestions.filter(
    (pq) => progStatuses[pq.id] === "passed",
  ).length;
  const totalXp = mcqXp + progXp;

  const performanceTier = (() => {
    const pct = mcqList.length > 0 ? (mcqCorrect / mcqList.length) * 100 : 0;
    if (pct >= 87)
      return { label: "Expert", emoji: "🏆", color: "text-yellow-400" };
    if (pct >= 67)
      return { label: "Proficient", emoji: "⭐", color: "text-blue-400" };
    if (pct >= 47)
      return { label: "Learning", emoji: "📚", color: "text-purple-400" };
    return { label: "Retry", emoji: "🔄", color: "text-red-400" };
  })();

  const handleFinish = () => {
    // Track activity + quiz score history
    trackQuizCompletion(
      `${domainName} — ${partTitle}`,
      mcqCorrect,
      mcqList.length,
    );
    onComplete({ mcq: mcqCorrect, programming: progSolved, xp: totalXp });
  };

  const handleShareScore = () => {
    const text = showProgrammingQuestions
      ? `🎓 ${partTitle} Quiz — ${mcqCorrect}/${mcqList.length} MCQs, ${progSolved}/${rawData.programmingQuestions.length} Coding. +${totalXp} XP on Code & Crush!`
      : `🎓 ${partTitle} Quiz — ${mcqCorrect}/${mcqList.length} MCQs. +${totalXp} XP on Code & Crush!`;
    navigator.clipboard.writeText(text).catch(() => {});
  };

  // ── Render phases ──

  // GATE
  if (phase === "gate") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-primary/30 bg-card overflow-hidden shadow-lg"
        data-ocid="part-quiz.gate"
      >
        <div className="relative overflow-hidden px-6 py-8 text-center">
          {/* Glowing background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 pointer-events-none" />
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{
              duration: 2.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-5xl mb-4"
          >
            🎯
          </motion.div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            You've studied this section!
          </h3>
          <p className="text-sm text-muted-foreground mb-1 font-medium">
            {partTitle}
          </p>
          <p className="text-xs text-muted-foreground mb-5">
            Ready to test your knowledge? Take the quiz to earn XP and reinforce
            what you learned.
          </p>
          <div className="flex items-center justify-center gap-3 mb-5 flex-wrap">
            <span className="flex items-center gap-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 text-xs font-semibold">
              📝 15 MCQs
            </span>
            {showProgrammingQuestions && (
              <span className="flex items-center gap-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 text-xs font-semibold">
                💻 2 Coding
              </span>
            )}
            <span className="flex items-center gap-1.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-3 py-1 text-xs font-semibold">
              ⚡ Up to {showProgrammingQuestions ? "115" : "75"} XP
            </span>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              initQuiz();
              setPhase("intro");
            }}
            data-ocid="part-quiz.gate_start"
            className="w-full rounded-xl py-3 text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
          >
            🚀 Start Quiz
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // INTRO
  if (phase === "intro") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        data-ocid="part-quiz.intro"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", damping: 22 }}
          className="w-full max-w-md bg-card rounded-3xl border border-border shadow-2xl overflow-hidden"
        >
          {/* Header gradient */}
          <div className="bg-gradient-to-br from-primary/20 via-card to-cyan-500/10 px-6 pt-8 pb-6 text-center relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/20 hover:bg-black/30 transition-colors text-white/80 text-xs font-semibold"
              data-ocid="part-quiz.intro.back_button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </button>
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl mb-4"
            >
              🧠
            </motion.div>
            <h2 className="text-xl font-bold text-foreground mb-1">
              {partTitle}
            </h2>
            <p className="text-sm text-muted-foreground">{domainName}</p>
            {isGeneric && (
              <p className="text-xs text-amber-400 mt-1">
                Loading personalized questions…
              </p>
            )}
          </div>

          <div className="px-6 py-5 space-y-4">
            {/* Stats */}
            <div
              className={`grid gap-3 ${showProgrammingQuestions ? "grid-cols-3" : "grid-cols-2"}`}
            >
              {[
                {
                  label: "MCQs",
                  value: "15",
                  icon: "📝",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10 border-blue-500/20",
                  show: true,
                },
                {
                  label: "Coding",
                  value: "2",
                  icon: "💻",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10 border-purple-500/20",
                  show: showProgrammingQuestions,
                },
                {
                  label: "Max XP",
                  value: showProgrammingQuestions ? "115" : "75",
                  icon: "⚡",
                  color: "text-yellow-400",
                  bg: "bg-yellow-500/10 border-yellow-500/20",
                  show: true,
                },
              ]
                .filter((s) => s.show)
                .map((s) => (
                  <div
                    key={s.label}
                    className={`rounded-xl border px-3 py-3 text-center ${s.bg}`}
                  >
                    <div className="text-xl mb-0.5">{s.icon}</div>
                    <div className={`text-lg font-bold ${s.color}`}>
                      {s.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
            </div>

            {/* Time estimate */}
            <div className="flex items-center gap-2 rounded-xl bg-muted/50 border border-border px-4 py-3 text-sm text-muted-foreground">
              <span>⏱️</span>
              <span>Estimated time: ~10 minutes</span>
            </div>

            {/* Tips */}
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 px-4 py-3 space-y-1.5">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                Quick Tips
              </p>
              {[
                "Read each question carefully before selecting",
                "Wrong answers show the correct answer + explanation",
                "Use hints on coding questions if you get stuck",
              ].map((tip) => (
                <p
                  key={tip}
                  className="text-xs text-foreground/70 flex items-start gap-1.5"
                >
                  <span className="text-cyan-400 mt-0.5 shrink-0">•</span> {tip}
                </p>
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPhase("mcq")}
              data-ocid="part-quiz.intro_start"
              className="w-full rounded-xl py-3.5 text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
            >
              Begin Quiz →
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // MCQ
  if (phase === "mcq" && currentMcq) {
    const isCorrect = selectedOption === currentMcq.correct;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        data-ocid="part-quiz.mcq_phase"
      >
        <div className="w-full max-w-lg bg-card rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          {/* Top bar */}
          <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-border shrink-0">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors text-foreground text-xs font-semibold"
                data-ocid="part-quiz.mcq.back_button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back
              </button>
              <span className="text-xs font-semibold text-muted-foreground">
                Question {currentMcqIndex + 1} of {mcqList.length}
              </span>
              <div className="flex items-center gap-2">
                <AnimatePresence>
                  {xpFlash && <XpTicker xp={mcqXp} />}
                </AnimatePresence>
                <span className="text-xs font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-2 py-0.5">
                  ⚡ {mcqXp} XP
                </span>
              </div>
            </div>
            <QuizProgressBar
              current={currentMcqIndex}
              total={mcqList.length}
              label="MCQ Progress"
            />
          </div>

          {/* Question */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMcqIndex}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <p className="text-sm font-bold text-foreground leading-snug mb-4">
                  {currentMcq.question}
                </p>

                <div className="space-y-2" role="radiogroup">
                  {currentMcq.options.map((opt, i) => {
                    const isSelected = selectedOption === i;
                    const isCorrectOpt = currentMcq.correct === i;
                    let cls =
                      "w-full text-left rounded-xl px-4 py-3 text-sm font-medium border-2 transition-all duration-200 flex items-center gap-3 ";
                    if (!answered) {
                      cls +=
                        "bg-muted/50 text-foreground border-border hover:border-primary/60 hover:bg-primary/5 cursor-pointer";
                    } else if (isCorrectOpt) {
                      cls +=
                        "bg-green-500/15 text-green-300 border-green-500/50";
                    } else if (isSelected && !isCorrectOpt) {
                      cls += "bg-red-500/15 text-red-300 border-red-500/50";
                    } else {
                      cls +=
                        "bg-muted/30 text-muted-foreground border-border opacity-50";
                    }

                    return (
                      <motion.button
                        key={`${currentMcqIndex}-${i}`}
                        type="button"
                        whileTap={!answered ? { scale: 0.99 } : {}}
                        className={cls}
                        onClick={() => handleSelectOption(i)}
                        disabled={answered}
                        aria-label={`Option ${["A", "B", "C", "D"][i]}: ${opt}`}
                        data-ocid={`part-quiz.mcq_option_${i}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full border text-xs font-bold flex items-center justify-center shrink-0 ${
                            !answered
                              ? "border-border text-muted-foreground"
                              : isCorrectOpt
                                ? "border-green-500 text-green-400 bg-green-500/20"
                                : isSelected
                                  ? "border-red-500 text-red-400 bg-red-500/20"
                                  : "border-border text-muted-foreground/40"
                          }`}
                        >
                          {["A", "B", "C", "D"][i]}
                        </span>
                        <span className="flex-1 min-w-0">{opt}</span>
                        {answered && isCorrectOpt && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 10 }}
                            className="text-green-400 shrink-0 text-base"
                          >
                            ✅
                          </motion.span>
                        )}
                        {answered && isSelected && !isCorrectOpt && (
                          <span className="text-red-400 shrink-0 text-base">
                            ❌
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`mt-3 rounded-xl px-4 py-3 border text-xs leading-relaxed ${
                        isCorrect
                          ? "bg-green-500/10 border-green-500/25 text-green-300"
                          : "bg-red-500/10 border-red-500/25 text-red-300"
                      }`}
                      data-ocid="part-quiz.explanation"
                    >
                      <span className="font-bold block mb-0.5">
                        {isCorrect ? "✅ Correct!" : "❌ Not quite!"}
                      </span>
                      <span className="text-foreground/70">
                        {currentMcq.explanation}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <div className="px-5 pb-5 pt-3 border-t border-border shrink-0">
            <AnimatePresence>
              {answered && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  type="button"
                  onClick={handleNextMcq}
                  data-ocid="part-quiz.mcq_next"
                  className="w-full rounded-xl py-3 text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {currentMcqIndex + 1 >= mcqList.length
                    ? showProgrammingQuestions
                      ? "Coding Challenges 💻 →"
                      : "See Results 🏆"
                    : `Next Question (${currentMcqIndex + 2}/${mcqList.length}) →`}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  // PROGRAMMING
  if (phase === "programming") {
    const pq: PartProgrammingQuestion | undefined =
      rawData.programmingQuestions[currentProgIndex];
    if (!pq) {
      setPhase("results");
      return null;
    }
    const status = progStatuses[pq.id] ?? "idle";
    const output = progOutputs[pq.id];
    const runError = progRunErrors[pq.id];
    const hintLevel = hintLevels[pq.id] ?? 0;
    const chatbotVisible = showChatbot[pq.id] ?? false;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        data-ocid="part-quiz.programming_phase"
      >
        <div className="w-full max-w-xl bg-card rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
          {/* Header */}
          <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-border shrink-0">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-muted hover:bg-muted/70 transition-colors text-foreground text-xs font-semibold"
                data-ocid="part-quiz.programming.back_button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back
              </button>
              <div className="min-w-0 flex-1 px-3">
                <span className="text-xs text-muted-foreground font-medium block">
                  Coding Challenge {currentProgIndex + 1}/
                  {rawData.programmingQuestions.length}
                </span>
                <h3 className="text-sm font-bold text-foreground mt-0.5 truncate">
                  {pq.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-2 py-0.5">
                  +20 XP
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {/* Problem description */}
            <div className="rounded-xl bg-muted/40 border border-border px-4 py-3 space-y-2">
              <p className="text-sm font-medium text-foreground leading-relaxed">
                {pq.description}
              </p>
              {pq.examples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-card border border-border px-3 py-2 text-xs font-mono"
                >
                  <span className="text-muted-foreground">Input: </span>
                  <span className="text-cyan-400">{ex.input}</span>
                  <br />
                  <span className="text-muted-foreground">Output: </span>
                  <span className="text-green-400">{ex.output}</span>
                </div>
              ))}
            </div>

            {/* Code editor */}
            <CodeEditor
              value={progCodes[pq.id] ?? pq.starterCode}
              onChange={(v) => setProgCodes((c) => ({ ...c, [pq.id]: v }))}
              language={pq.languageLabel}
            />

            {/* Hints */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-400">
                  Hints
                </span>
                {[0, 1, 2].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    disabled={lvl > hintLevel}
                    onClick={() => {
                      if (lvl <= hintLevel) return;
                      setHintLevels((h) => ({ ...h, [pq.id]: lvl }));
                    }}
                    data-ocid={`part-quiz.hint_${lvl + 1}`}
                    className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                      lvl <= hintLevel
                        ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                        : "bg-muted text-muted-foreground border-border hover:border-amber-500/30 cursor-pointer"
                    }`}
                  >
                    {lvl <= hintLevel
                      ? `💡 Hint ${lvl + 1}`
                      : `🔒 Hint ${lvl + 1}`}
                  </button>
                ))}
              </div>
              {hintLevel >= 0 && hintLevel <= 2 && (
                <AnimatePresence>
                  {[0, 1, 2]
                    .filter((l) => l <= hintLevel)
                    .map((l) => (
                      <motion.div
                        key={l}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="rounded-xl bg-amber-500/5 border border-amber-500/20 px-3 py-2 text-xs text-foreground/80"
                        data-ocid={`part-quiz.hint_text_${l + 1}`}
                      >
                        <span className="font-bold text-amber-400">
                          Hint {l + 1}:{" "}
                        </span>
                        {pq.hints[l]}
                      </motion.div>
                    ))}
                </AnimatePresence>
              )}
            </div>

            {/* Run result */}
            {runError && (
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-3 py-2 text-xs text-red-400">
                {runError}
              </div>
            )}
            <AnimatePresence>
              {output && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl overflow-hidden border border-border"
                  data-ocid="part-quiz.prog_output"
                >
                  <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900 border-b border-border">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                      Output
                    </span>
                    <div className="flex items-center gap-2">
                      {status === "passed" && (
                        <span className="text-[10px] font-bold text-green-400 bg-green-500/15 px-2 py-0.5 rounded-full">
                          ✅ Passed
                        </span>
                      )}
                      {status === "failed" && (
                        <span className="text-[10px] font-bold text-red-400 bg-red-500/15 px-2 py-0.5 rounded-full">
                          ❌ Try Again
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${output.exitCode === 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                      >
                        Exit {output.exitCode}
                      </span>
                    </div>
                  </div>
                  {output.compileError && (
                    <pre className="bg-zinc-900 text-red-300 px-3 py-2 font-mono text-[11px] whitespace-pre-wrap">
                      {output.compileError}
                    </pre>
                  )}
                  {output.stderr && !output.compileError && (
                    <pre className="bg-zinc-900 text-red-300 px-3 py-2 font-mono text-[11px] whitespace-pre-wrap">
                      {output.stderr}
                    </pre>
                  )}
                  {output.stdout && (
                    <pre className="bg-zinc-900 text-green-300 px-3 py-2 font-mono text-[11px] whitespace-pre-wrap">
                      {output.stdout}
                    </pre>
                  )}
                  {!output.stdout && !output.stderr && !output.compileError && (
                    <div className="bg-zinc-900 px-3 py-2 text-xs text-muted-foreground italic">
                      (no output)
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* AdvancedChatbot */}
            {chatbotVisible && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl overflow-hidden border border-border"
                data-ocid="part-quiz.chatbot"
              >
                <AdvancedChatbot
                  topicTitle={pq.title}
                  topicContent={pq.description}
                  placeholder="Ask for guidance on this challenge…"
                  onClose={() =>
                    setShowChatbot((s) => ({ ...s, [pq.id]: false }))
                  }
                />
              </motion.div>
            )}
          </div>

          {/* Bottom actions */}
          <div className="px-5 pb-5 pt-3 border-t border-border shrink-0 space-y-2">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setShowChatbot((s) => ({ ...s, [pq.id]: !chatbotVisible }))
                }
                data-ocid="part-quiz.toggle_chatbot"
                className="flex-1 rounded-xl py-2.5 text-xs font-semibold bg-muted text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-colors"
              >
                🤖 {chatbotVisible ? "Hide" : "Ask"} Companion
              </button>
              <button
                type="button"
                onClick={() => handleRunCode(pq)}
                disabled={status === "running"}
                data-ocid="part-quiz.run_check"
                className="flex-1 rounded-xl py-2.5 text-xs font-bold bg-green-500 text-white hover:bg-green-600 disabled:opacity-60 transition-colors flex items-center justify-center gap-1.5"
              >
                {status === "running" ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1,
                        ease: "linear",
                      }}
                    >
                      ⟳
                    </motion.span>
                    Running…
                  </>
                ) : (
                  "▶ Run & Check"
                )}
              </button>
            </div>
            {(status === "passed" || status === "failed") && (
              <motion.button
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                type="button"
                onClick={handleNextProg}
                data-ocid="part-quiz.prog_next"
                className="w-full rounded-xl py-2.5 text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {currentProgIndex + 1 >= rawData.programmingQuestions.length
                  ? "See Results 🏆"
                  : "Next Challenge →"}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // RESULTS
  if (phase === "results") {
    const tier = performanceTier;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        data-ocid="part-quiz.results"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 260 }}
          className="w-full max-w-md bg-card rounded-3xl border border-border shadow-2xl overflow-hidden"
        >
          {/* Trophy section */}
          <div className="px-6 pt-8 pb-5 text-center bg-gradient-to-br from-primary/10 via-card to-cyan-500/5 border-b border-border relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted text-muted-foreground"
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12, delay: 0.15 }}
              className="text-6xl mb-3"
            >
              {tier.emoji}
            </motion.div>
            <h2 className="text-xl font-bold text-foreground">
              Quiz Complete!
            </h2>
            <p className={`text-sm font-semibold mt-1 ${tier.color}`}>
              {tier.label}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 inline-flex items-center gap-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full px-4 py-1.5 text-sm font-bold"
            >
              ⚡ +{totalXp} XP Earned
            </motion.div>
          </div>

          <div className="px-6 py-5 space-y-4">
            {/* Score breakdown */}
            <div
              className={`grid gap-3 ${showProgrammingQuestions ? "grid-cols-2" : "grid-cols-1"}`}
            >
              <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 px-4 py-3 text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {mcqCorrect}/{mcqList.length}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  MCQs Correct
                </div>
              </div>
              {showProgrammingQuestions && (
                <div className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-4 py-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {progSolved}/{rawData.programmingQuestions.length}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Coding Solved
                  </div>
                </div>
              )}
            </div>

            {/* MCQ accuracy bar */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Accuracy</span>
                <span className="font-semibold text-foreground">
                  {mcqList.length > 0
                    ? Math.round((mcqCorrect / mcqList.length) * 100)
                    : 0}
                  %
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${mcqList.length > 0 ? (mcqCorrect / mcqList.length) * 100 : 0}%`,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
                />
              </div>
            </div>

            {/* ── Adaptive learning banner ── */}
            {(() => {
              const scorePct =
                mcqList.length > 0
                  ? Math.round((mcqCorrect / mcqList.length) * 100)
                  : 0;
              if (scorePct < 60) {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-orange-500/10 border border-orange-500/30 px-4 py-3 space-y-2"
                    data-ocid="part-quiz.adaptive_revisit_banner"
                  >
                    <p className="text-sm font-semibold text-orange-400">
                      📚 Need help? Your score was {scorePct}%.
                    </p>
                    <p className="text-xs text-foreground/70">
                      Consider revisiting this module before moving on to
                      solidify your understanding.
                    </p>
                    <button
                      type="button"
                      onClick={onClose}
                      data-ocid="part-quiz.revisit_module_button"
                      className="text-xs px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold hover:bg-orange-500/30 transition-colors"
                    >
                      ← Revisit Module
                    </button>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-green-500/10 border border-green-500/25 px-4 py-3"
                  data-ocid="part-quiz.adaptive_encouragement_banner"
                >
                  <p className="text-sm font-semibold text-green-400">
                    🎉 Great job! You scored {scorePct}%.
                  </p>
                  <p className="text-xs text-foreground/70 mt-0.5">
                    You're ready for the next topic!
                  </p>
                </motion.div>
              );
            })()}

            {/* Review section */}
            <button
              type="button"
              onClick={() => setShowReview(!showReview)}
              data-ocid="part-quiz.review_toggle"
              className="w-full rounded-xl py-2.5 text-xs font-semibold bg-muted border border-border hover:bg-muted/70 text-muted-foreground transition-colors"
            >
              {showReview ? "▲ Hide Mistakes" : "▼ Review Mistakes"}
            </button>

            <AnimatePresence>
              {showReview && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5 max-h-48 overflow-y-auto"
                  data-ocid="part-quiz.review_panel"
                >
                  {answers
                    .map((a, i) => {
                      const q = mcqList[i];
                      if (!q || a.correct) return null;
                      return (
                        <div
                          key={a.questionId}
                          className="rounded-xl bg-red-500/8 border border-red-500/20 px-3 py-2 text-xs"
                        >
                          <p className="font-semibold text-foreground/80 mb-1">
                            {q.question.slice(0, 80)}
                            {q.question.length > 80 ? "…" : ""}
                          </p>
                          <p className="text-green-400">
                            ✓ Correct: {q.options[q.correct]}
                          </p>
                          <p className="text-red-400/80 mt-0.5">
                            {q.explanation}
                          </p>
                        </div>
                      );
                    })
                    .filter(Boolean)}
                  {answers.every((a) => a.correct) && (
                    <p className="text-xs text-center text-green-400 py-2">
                      🎉 No mistakes! Perfect score on MCQs!
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleShareScore}
                data-ocid="part-quiz.share_score"
                className="flex-1 rounded-xl py-2.5 text-xs font-semibold bg-muted border border-border hover:bg-muted/70 text-muted-foreground transition-colors"
              >
                📋 Share Score
              </button>
              <button
                type="button"
                onClick={() => {
                  initQuiz();
                  setPhase("mcq");
                }}
                data-ocid="part-quiz.retake"
                className="flex-1 rounded-xl py-2.5 text-xs font-semibold bg-muted border border-border hover:bg-muted/70 text-muted-foreground transition-colors"
              >
                🔄 Retake
              </button>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleFinish}
              data-ocid="part-quiz.continue"
              className="w-full rounded-xl py-3 text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
            >
              Continue to Next Part →
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}

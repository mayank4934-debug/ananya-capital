import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";

// ── Types ──────────────────────────────────────────────────────────────────────
interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

interface ProgramQuestion {
  id: number;
  title: string;
  desc: string;
  starterCode: string;
  sampleInput: string;
  sampleOutput: string;
}

interface TestHistoryEntry {
  date: string;
  score: number;
  maxScore: number;
  timeTaken: number;
}

// ── Questions ─────────────────────────────────────────────────────────────────
const QUIZ_QUESTIONS: MCQQuestion[] = [
  {
    id: 1,
    question: 'What is the output of printf("%d", sizeof(int))?',
    options: ["2", "4", "8", "Depends on compiler/platform"],
    correctIndex: 3,
  },
  {
    id: 2,
    question: "Which header file is required to use printf() and scanf()?",
    options: ["stdlib.h", "string.h", "stdio.h", "math.h"],
    correctIndex: 2,
  },
  {
    id: 3,
    question: "What does the & operator do when applied to a variable?",
    options: [
      "Performs bitwise AND on it",
      "Returns the address of the variable",
      "Dereferences the pointer",
      "None of the above",
    ],
    correctIndex: 1,
  },
  {
    id: 4,
    question: "What is the index of the first element in a C array?",
    options: ["1", "0", "-1", "Depends on array type"],
    correctIndex: 1,
  },
  {
    id: 5,
    question: "Which loop in C always executes its body at least once?",
    options: ["for", "while", "do-while", "None of the above"],
    correctIndex: 2,
  },
  {
    id: 6,
    question: "What is a pointer in C?",
    options: [
      "A variable that stores a value directly",
      "A variable that stores a memory address",
      "A type of function",
      "A special data type",
    ],
    correctIndex: 1,
  },
  {
    id: 7,
    question: "Which of the following is a valid C function declaration?",
    options: [
      "function myFunc()",
      "void myFunc()",
      "def myFunc():",
      "myFunc() {}",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    question: "What is NULL in C?",
    options: [
      "The integer 0",
      "An empty string",
      "An undefined variable",
      "A pointer with value 0 (null pointer)",
    ],
    correctIndex: 3,
  },
  {
    id: 9,
    question:
      "Which is the correct way to access a member of a struct variable vs a struct pointer?",
    options: [
      "struct.member only",
      "struct->member only (for pointers)",
      "Both dot (.) for variable and arrow (->) for pointer are correct",
      "struct:member",
    ],
    correctIndex: 2,
  },
  {
    id: 10,
    question: "What does malloc() return?",
    options: ["int *", "void * (generic pointer)", "char *", "NULL always"],
    correctIndex: 1,
  },
];

const PROGRAM_QUESTIONS: ProgramQuestion[] = [
  {
    id: 1,
    title: "Factorial Using Recursion",
    desc: "Write a C program to find the factorial of a given non-negative integer n using recursion. The factorial of 0 is 1.",
    starterCode: `#include <stdio.h>

// TODO: Implement the recursive factorial function
long long factorial(int n) {
    // Your code here
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%lld\\n", factorial(n));
    return 0;
}`,
    sampleInput: "5",
    sampleOutput: "120",
  },
  {
    id: 2,
    title: "Reverse an Array",
    desc: "Write a C program to reverse an array in-place. Read the size of the array and then its elements, then print the reversed array.",
    starterCode: `#include <stdio.h>

// TODO: Implement a function to reverse array in-place
void reverseArray(int arr[], int size) {
    // Your code here
}

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    reverseArray(arr, n);
    for (int i = 0; i < n; i++) {
        if (i > 0) printf(" ");
        printf("%d", arr[i]);
    }
    printf("\\n");
    return 0;
}`,
    sampleInput: "5\n1 2 3 4 5",
    sampleOutput: "5 4 3 2 1",
  },
];

const JUDGE0_URL = "https://judge0-ce.p.rapidapi.com";

// ── Judge0 runner ─────────────────────────────────────────────────────────────
async function runCCode(
  code: string,
  stdin: string,
): Promise<{ stdout: string; stderr: string; status: string }> {
  try {
    const submitRes = await fetch(
      `${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": "",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          language_id: 50, // C (GCC 9.2.0)
          source_code: code,
          stdin,
        }),
      },
    );
    if (!submitRes.ok) throw new Error("Judge0 submit failed");
    const data = await submitRes.json();
    return {
      stdout: data.stdout ?? "",
      stderr: data.stderr ?? data.compile_output ?? "",
      status: data.status?.description ?? "Unknown",
    };
  } catch {
    return {
      stdout: "",
      stderr:
        "⚠️ Compiler service unavailable. Please check your API key or try later.",
      status: "Error",
    };
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────
function TimerBadge({
  remaining,
  total,
}: { remaining: number; total: number }) {
  void total;
  const isLow = remaining < 300;
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-mono font-bold text-sm border ${
        isLow
          ? "bg-red-500/10 border-red-400 text-red-400 animate-pulse"
          : "bg-primary/10 border-primary/30 text-primary"
      }`}
    >
      ⏱ {formatTime(remaining)}
      {isLow && <span className="text-xs">LOW TIME</span>}
    </div>
  );
}

// ── Setup Screen ──────────────────────────────────────────────────────────────
function SetupScreen({
  onStart,
  onBack,
  history,
}: {
  onStart: (minutes: number) => void;
  onBack: () => void;
  history: TestHistoryEntry[];
}) {
  const [selected, setSelected] = useState(60);

  return (
    <div className="h-[100dvh] bg-background flex flex-col overflow-hidden">
      <header className="bg-card border-b border-border px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
          data-ocid="conlinetest.back_button"
          aria-label="Back"
        >
          ←
        </button>
        <div>
          <h1 className="font-extrabold text-foreground text-sm sm:text-base leading-tight">
            C Programming Online Test
          </h1>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Section A: 10 MCQs · Section B: 2 Programming Problems
          </p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl">
                📝
              </div>
              <div>
                <h2 className="font-extrabold text-foreground text-lg">
                  C Programming Test
                </h2>
                <p className="text-xs text-muted-foreground">
                  Test your skills in C language fundamentals
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: "📋", label: "Section A", value: "10 MCQ Questions" },
                {
                  icon: "💻",
                  label: "Section B",
                  value: "2 Programming Problems",
                },
                { icon: "⭐", label: "Max Score", value: "70 points" },
                { icon: "🎯", label: "XP Reward", value: "Up to 80 XP" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-muted rounded-xl p-3 flex items-center gap-2"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-xs font-bold text-foreground">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 text-xs text-yellow-400">
              ⚠️ Once the test starts, the back button is disabled. The test
              auto-submits when time runs out.
            </div>
          </motion.div>

          {/* Time selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <h3 className="font-bold text-foreground mb-3">
              ⏱ Select Time Limit
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[30, 60, 90].map((min) => (
                <button
                  key={min}
                  type="button"
                  onClick={() => setSelected(min)}
                  className={`py-4 rounded-xl font-bold text-sm border transition-all ${
                    selected === min
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                      : "bg-muted text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {min} min
                </button>
              ))}
            </div>
          </motion.div>

          {/* Past history */}
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-5"
            >
              <h3 className="font-bold text-foreground mb-3">
                📊 Past Results
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {[...history]
                  .reverse()
                  .slice(0, 5)
                  .map((h, i) => (
                    <div
                      key={`history-${i}-${h.date}`}
                      className="flex items-center justify-between bg-muted rounded-xl px-3 py-2 text-sm"
                    >
                      <span className="text-muted-foreground text-xs">
                        {new Date(h.date).toLocaleDateString()}
                      </span>
                      <span className="font-bold text-foreground">
                        {h.score}/{h.maxScore}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatTime(h.timeTaken)}
                      </span>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}

          <Button
            onClick={() => onStart(selected)}
            className="w-full h-12 rounded-2xl font-extrabold text-base bg-primary text-primary-foreground shadow-lg"
            data-ocid="conlinetest.start_button"
          >
            🚀 Start Test ({selected} min)
          </Button>
        </div>
      </div>
    </div>
  );
}

// ── MCQ Section ───────────────────────────────────────────────────────────────
function McqSection({
  answers,
  onAnswer,
}: {
  answers: Record<number, number>;
  onAnswer: (qId: number, optIdx: number) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-sm font-extrabold text-primary">
          A
        </div>
        <div>
          <h2 className="font-extrabold text-foreground text-base">
            Section A — Multiple Choice
          </h2>
          <p className="text-xs text-muted-foreground">
            10 questions · 5 points each · 50 points total
          </p>
        </div>
      </div>

      {QUIZ_QUESTIONS.map((q, qi) => (
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: qi * 0.04 }}
          className="bg-card border border-border rounded-2xl p-4"
          data-ocid={`conlinetest.q${q.id}`}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
              {qi + 1}
            </span>
            <p className="text-sm text-foreground font-medium leading-relaxed">
              {q.question}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 ml-10">
            {q.options.map((opt, oi) => {
              const isSelected = answers[q.id] === oi;
              return (
                <button
                  key={`q${q.id}-o${oi}`}
                  type="button"
                  onClick={() => onAnswer(q.id, oi)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm border transition-all ${
                    isSelected
                      ? "bg-primary/10 border-primary text-primary font-semibold"
                      : "bg-muted border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-xs mr-2 opacity-60">
                    {String.fromCharCode(65 + oi)}.
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Programming Section ───────────────────────────────────────────────────────
function ProgramSection({
  codes,
  onCodeChange,
}: {
  codes: Record<number, string>;
  onCodeChange: (qId: number, code: string) => void;
}) {
  const [outputs, setOutputs] = useState<Record<number, string>>({});
  const [running, setRunning] = useState<Record<number, boolean>>({});

  const handleRun = async (q: ProgramQuestion) => {
    setRunning((r) => ({ ...r, [q.id]: true }));
    const result = await runCCode(codes[q.id] ?? q.starterCode, q.sampleInput);
    setOutputs((o) => ({
      ...o,
      [q.id]: result.stderr
        ? `❌ Error:\n${result.stderr}`
        : `✅ Output:\n${result.stdout || "(no output)"}`,
    }));
    setRunning((r) => ({ ...r, [q.id]: false }));
  };

  return (
    <div className="space-y-6 mt-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-secondary/20 rounded-xl flex items-center justify-center text-sm font-extrabold text-secondary">
          B
        </div>
        <div>
          <h2 className="font-extrabold text-foreground text-base">
            Section B — Programming
          </h2>
          <p className="text-xs text-muted-foreground">
            2 problems · up to 10 points each · language: C
          </p>
        </div>
      </div>

      {PROGRAM_QUESTIONS.map((q, qi) => {
        const code = codes[q.id] ?? q.starterCode;
        return (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: qi * 0.08 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
            data-ocid={`conlinetest.prog${q.id}`}
          >
            {/* Problem header */}
            <div className="px-4 pt-4 pb-3 border-b border-border">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-extrabold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                  P{qi + 1}
                </span>
                <h3 className="font-extrabold text-foreground text-sm">
                  {q.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {q.desc}
              </p>
            </div>

            {/* Sample I/O */}
            <div className="px-3 sm:px-4 py-3 bg-muted/30 border-b border-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-muted-foreground font-semibold mb-1">
                  Sample Input
                </div>
                <pre className="font-mono text-foreground bg-background/50 rounded-lg px-2 py-1.5 whitespace-pre-wrap">
                  {q.sampleInput}
                </pre>
              </div>
              <div>
                <div className="text-muted-foreground font-semibold mb-1">
                  Expected Output
                </div>
                <pre className="font-mono text-foreground bg-background/50 rounded-lg px-2 py-1.5 whitespace-pre-wrap">
                  {q.sampleOutput}
                </pre>
              </div>
            </div>

            {/* Code editor */}
            <div className="bg-[#0d1117]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400 ml-1 font-mono">
                    solution.c
                  </span>
                </div>
                <span className="text-xs text-blue-400 font-mono">
                  Language: C
                </span>
              </div>
              <div className="flex">
                <div className="px-2.5 py-3 text-right select-none font-mono text-xs text-gray-600 bg-[#161b22] min-w-[2.5rem]">
                  {code.split("\n").map((_, i) => (
                    <div key={`ln-p${q.id}-${i + 1}`}>{i + 1}</div>
                  ))}
                </div>
                <textarea
                  value={code}
                  onChange={(e) => onCodeChange(q.id, e.target.value)}
                  className="flex-1 bg-transparent text-gray-100 font-mono text-xs py-3 pr-3 resize-none outline-none"
                  style={{ minHeight: "220px", lineHeight: "1.5" }}
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Run + output */}
            <div className="bg-[#0d1117] border-t border-white/10 px-4 py-3 flex items-center gap-3">
              <Button
                size="sm"
                onClick={() => handleRun(q)}
                disabled={running[q.id]}
                className="rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-xs gap-1"
                data-ocid={`conlinetest.run_prog${q.id}`}
              >
                {running[q.id] ? "⏳ Running..." : "▶ Run Code"}
              </Button>
              <span className="text-xs text-gray-500">
                Tests against sample input
              </span>
            </div>
            {outputs[q.id] && (
              <div className="bg-[#0d1117] border-t border-white/10 px-4 pb-3">
                <pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap bg-[#161b22] rounded-xl p-3 max-h-32 overflow-y-auto">
                  {outputs[q.id]}
                </pre>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// ── Results Screen ────────────────────────────────────────────────────────────
function ResultsScreen({
  mcqAnswers,
  timeTaken,
  xpEarned,
  totalScore,
  maxScore,
  correctMcq,
  onRetake,
  onBack,
}: {
  mcqAnswers: Record<number, number>;
  timeTaken: number;
  xpEarned: number;
  totalScore: number;
  maxScore: number;
  correctMcq: number;
  onRetake: () => void;
  onBack: () => void;
}) {
  const { setUser, user } = useApp();
  const savedRef = useRef(false);
  const xpRef = useRef(xpEarned);
  const userXpRef = useRef(user.xp);
  const totalScoreRef = useRef(totalScore);
  const timeTakenRef = useRef(timeTaken);
  const maxScoreRef = useRef(maxScore);
  const setUserRef = useRef(setUser);

  const pct = Math.round((totalScore / maxScore) * 100);

  const gradeInfo =
    pct >= 80
      ? { label: "Excellent!", color: "text-green-400", emoji: "🏆" }
      : pct >= 60
        ? { label: "Good Job!", color: "text-blue-400", emoji: "🌟" }
        : pct >= 40
          ? { label: "Keep Practicing", color: "text-yellow-400", emoji: "💪" }
          : { label: "Needs Improvement", color: "text-red-400", emoji: "📚" };

  // Save history + award XP once on mount
  useEffect(() => {
    if (savedRef.current) return;
    savedRef.current = true;
    const key = "cc_c_test_history";
    const prev: TestHistoryEntry[] = JSON.parse(
      localStorage.getItem(key) ?? "[]",
    );
    prev.push({
      date: new Date().toISOString(),
      score: totalScoreRef.current,
      maxScore: maxScoreRef.current,
      timeTaken: timeTakenRef.current,
    });
    localStorage.setItem(key, JSON.stringify(prev));
    setUserRef.current({ xp: userXpRef.current + xpRef.current });
  }, []);

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <header className="bg-card border-b border-border px-4 py-3 shrink-0 flex items-center gap-3">
        <span className="text-2xl">📊</span>
        <div>
          <h1 className="font-extrabold text-foreground text-base">
            Test Results
          </h1>
          <p className="text-xs text-muted-foreground">
            C Programming Online Test
          </p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-xl mx-auto px-4 py-6 space-y-5">
          {/* Score hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-6 text-center"
          >
            <div className="text-4xl mb-2">{gradeInfo.emoji}</div>
            <div className={`text-2xl font-extrabold mb-1 ${gradeInfo.color}`}>
              {gradeInfo.label}
            </div>
            <div className="text-5xl font-extrabold text-foreground mb-1">
              {totalScore}
              <span className="text-2xl text-muted-foreground">
                /{maxScore}
              </span>
            </div>
            <Progress value={pct} className="h-3 my-3" />
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="bg-muted rounded-xl p-2">
                <div className="text-xs text-muted-foreground">Quiz</div>
                <div className="font-extrabold text-foreground">
                  {correctMcq}/10
                </div>
              </div>
              <div className="bg-muted rounded-xl p-2">
                <div className="text-xs text-muted-foreground">Time Taken</div>
                <div className="font-extrabold text-foreground">
                  {formatTime(timeTaken)}
                </div>
              </div>
              <div className="bg-muted rounded-xl p-2">
                <div className="text-xs text-muted-foreground">XP Earned</div>
                <div className="font-extrabold text-primary">+{xpEarned}</div>
              </div>
            </div>
          </motion.div>

          {/* MCQ breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-4"
          >
            <h3 className="font-extrabold text-foreground mb-3 text-sm">
              📋 Section A — Quiz Breakdown
            </h3>
            <div className="space-y-2">
              {QUIZ_QUESTIONS.map((q, qi) => {
                const userAns = mcqAnswers[q.id];
                const correct = userAns === q.correctIndex;
                const notAnswered = userAns === undefined;
                return (
                  <div key={q.id} className="flex items-start gap-2 text-xs">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 font-bold ${
                        notAnswered
                          ? "bg-muted-foreground"
                          : correct
                            ? "bg-green-500"
                            : "bg-red-500"
                      }`}
                    >
                      {notAnswered ? "-" : correct ? "✓" : "✗"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground font-medium leading-tight">
                        Q{qi + 1}: {q.question}
                      </p>
                      {!notAnswered && !correct && (
                        <p className="text-green-400 mt-0.5">
                          Correct: {q.options[q.correctIndex]}
                        </p>
                      )}
                    </div>
                    <span
                      className={`font-bold shrink-0 ${correct ? "text-green-400" : "text-muted-foreground"}`}
                    >
                      {correct ? "+5" : "0"}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className="rounded-2xl font-bold border-border text-foreground"
              data-ocid="conlinetest.back_to_studio"
            >
              ← Code Studio
            </Button>
            <Button
              onClick={onRetake}
              className="rounded-2xl font-bold bg-primary text-primary-foreground"
              data-ocid="conlinetest.retake"
            >
              🔁 Retake Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function COnlineTestPage({ onBack }: { onBack: () => void }) {
  type Phase = "setup" | "test" | "results";
  const [phase, setPhase] = useState<Phase>("setup");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({});
  const [progCodes, setProgCodes] = useState<Record<number, string>>(
    Object.fromEntries(PROGRAM_QUESTIONS.map((q) => [q.id, q.starterCode])),
  );
  const [timeTaken, setTimeTaken] = useState(0);
  const [history, setHistory] = useState<TestHistoryEntry[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cc_c_test_history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleStart = (minutes: number) => {
    const secs = minutes * 60;
    setTotalSeconds(secs);
    setRemaining(secs);
    setMcqAnswers({});
    setProgCodes(
      Object.fromEntries(PROGRAM_QUESTIONS.map((q) => [q.id, q.starterCode])),
    );
    setPhase("test");
    timerRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearTimer();
          setTimeTaken(secs);
          setPhase("results");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = () => {
    clearTimer();
    setTimeTaken(totalSeconds - remaining);
    setPhase("results");
  };

  const handleRetake = () => {
    clearTimer();
    setPhase("setup");
    const saved = localStorage.getItem("cc_c_test_history");
    if (saved) setHistory(JSON.parse(saved));
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // ── Compute scores ────────────────────────────────────────────────────────────
  const correctMcq = QUIZ_QUESTIONS.filter(
    (q) => mcqAnswers[q.id] === q.correctIndex,
  ).length;
  const progAttempted = PROGRAM_QUESTIONS.filter((q) => {
    const code = progCodes[q.id] ?? "";
    return code.trim().length > 0 && code.trim() !== q.starterCode.trim();
  }).length;
  const totalScore = correctMcq * 5 + progAttempted * 10;
  const maxScore = 70;
  const xpEarned = correctMcq * 5 + progAttempted * 15;

  // ── Setup Phase ──────────────────────────────────────────────────────────────
  if (phase === "setup") {
    return (
      <SetupScreen onStart={handleStart} onBack={onBack} history={history} />
    );
  }

  // ── Results Phase ─────────────────────────────────────────────────────────────
  if (phase === "results") {
    return (
      <ResultsScreen
        mcqAnswers={mcqAnswers}
        timeTaken={timeTaken}
        xpEarned={xpEarned}
        totalScore={totalScore}
        maxScore={maxScore}
        correctMcq={correctMcq}
        onRetake={handleRetake}
        onBack={onBack}
      />
    );
  }

  // ── Test Phase ────────────────────────────────────────────────────────────────
  const answeredMcq = Object.keys(mcqAnswers).length;
  const progressPct = Math.round(
    ((answeredMcq +
      Object.values(progCodes).filter(
        (c, i) =>
          c !== PROGRAM_QUESTIONS[i]?.starterCode && c.trim().length > 0,
      ).length) /
      (QUIZ_QUESTIONS.length + PROGRAM_QUESTIONS.length)) *
      100,
  );

  return (
    <div className="h-[100dvh] bg-background flex flex-col overflow-hidden">
      {/* Sticky test header — no back button during test */}
      <header className="bg-card border-b border-border px-3 sm:px-4 py-2.5 sm:py-3 shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h1 className="font-extrabold text-foreground text-xs sm:text-sm leading-tight">
              C Programming Online Test
            </h1>
            <p className="text-xs text-muted-foreground">
              {answeredMcq}/{QUIZ_QUESTIONS.length} MCQs answered
            </p>
          </div>
          <TimerBadge remaining={remaining} total={totalSeconds} />
        </div>
        <Progress value={progressPct} className="h-1.5 mt-2" />
      </header>

      {/* Scrollable test content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-5 space-y-2 pb-8">
          <McqSection
            answers={mcqAnswers}
            onAnswer={(qId, optIdx) =>
              setMcqAnswers((prev) => ({ ...prev, [qId]: optIdx }))
            }
          />
          <ProgramSection
            codes={progCodes}
            onCodeChange={(qId, code) =>
              setProgCodes((prev) => ({ ...prev, [qId]: code }))
            }
          />

          {/* Submit strip */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-4 pb-8"
            >
              <div className="bg-card border border-border rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-3">
                <div className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">
                    {answeredMcq}/10
                  </span>{" "}
                  MCQs answered
                </div>
                <Button
                  onClick={handleSubmit}
                  className="rounded-2xl bg-primary text-primary-foreground font-extrabold px-4 sm:px-6"
                  data-ocid="conlinetest.submit"
                >
                  Submit Test ✓
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

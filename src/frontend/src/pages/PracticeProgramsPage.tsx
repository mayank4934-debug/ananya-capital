import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code,
  Lightbulb,
  Play,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useRef, useState } from "react";
import AdvancedChatbot from "../components/AdvancedChatbot";
import { useApp } from "../context/AppContext";
import {
  PRACTICE_DOMAINS,
  PRACTICE_PROGRAMS,
  type PracticeProgram,
} from "../data/practicePrograms";

const DIFF_COLORS: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 border-green-200",
  Medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Hard: "bg-red-100 text-red-700 border-red-200",
};

const LANG_IDS: Record<string, number> = {
  javascript: 93,
  python: 71,
  java: 62,
  c: 50,
  cpp: 54,
};

const LANG_EXT: Record<string, string> = {
  javascript: "js",
  python: "py",
  java: "java",
  c: "c",
  cpp: "cpp",
};

async function runCode(
  code: string,
  language: string,
  stdin = "",
): Promise<{ stdout: string; stderr: string; compile_output: string }> {
  const langId = LANG_IDS[language] ?? 93;
  try {
    const submitRes = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": localStorage.getItem("cc_judge0_key") ?? "demo",
        },
        body: JSON.stringify({
          source_code: code,
          language_id: langId,
          stdin,
        }),
      },
    );
    if (!submitRes.ok) throw new Error("Judge0 unavailable");
    const result = await submitRes.json();
    return {
      stdout: result.stdout ?? "",
      stderr: result.stderr ?? "",
      compile_output: result.compile_output ?? "",
    };
  } catch {
    // Fallback: try to run JS locally via Function constructor
    if (language === "javascript") {
      try {
        const logs: string[] = [];
        const origLog = console.log;
        console.log = (...args: unknown[]) =>
          logs.push(args.map(String).join(" "));
        // eslint-disable-next-line no-new-func
        new Function(code)();
        console.log = origLog;
        return { stdout: logs.join("\n"), stderr: "", compile_output: "" };
      } catch (e) {
        return { stdout: "", stderr: String(e), compile_output: "" };
      }
    }
    return {
      stdout: "",
      stderr: "Could not connect to compiler. Check your internet connection.",
      compile_output: "",
    };
  }
}

// ── Program Card ─────────────────────────────────────────────────────────────
function ProgramCard({
  program,
  isCompleted,
  onOpen,
}: {
  program: PracticeProgram;
  isCompleted: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="w-full text-left bg-card rounded-2xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow relative"
      data-ocid={`practice.card.${program.id}`}
    >
      {isCompleted && (
        <div className="absolute top-3 right-3">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Code className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0 pr-6">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${DIFF_COLORS[program.difficulty]}`}
            >
              {program.difficulty}
            </span>
            <span className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {program.language}
            </span>
          </div>
          <h3 className="font-bold text-foreground text-sm leading-snug mb-1">
            {program.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {program.description}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-primary/70 font-medium">
          {isCompleted
            ? "✅ Completed (+25 XP earned)"
            : "🎯 +25 XP on completion"}
        </span>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </motion.button>
  );
}

// ── Hint Item ────────────────────────────────────────────────────────────────
function HintItem({ hint, index }: { hint: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground bg-muted/40 hover:bg-muted/60 transition-colors"
      >
        <span className="flex items-center gap-2">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
          Hint {index + 1}
        </span>
        {open ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div className="px-3 py-2.5 text-xs text-amber-900 dark:text-amber-100 bg-amber-50 dark:bg-amber-950/40 border-t border-amber-100 dark:border-amber-800/50">
              💡 {hint}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Companion Chat Toggle ─────────────────────────────────────────────────────
function CompanionChatPanel({
  program,
  companionName,
}: {
  program: PracticeProgram;
  companionName: string;
}) {
  const [open, setOpen] = useState(false);
  const topicContent = `${program.description} Hints: ${program.hints.join(" ")}`;

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/40 transition-colors"
        data-ocid="practice.companion_chat_toggle"
      >
        <span className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Bot className="w-4 h-4 text-primary" />💬 Ask {companionName} for
          Help
        </span>
        {open ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border">
              <AdvancedChatbot
                topicTitle={program.title}
                topicContent={topicContent}
                companionName={companionName}
                placeholder={`Ask ${companionName} for hints on ${program.title}…`}
                className="rounded-none border-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Editor Panel ─────────────────────────────────────────────────────────────
function EditorPanel({
  program,
  isCompleted,
  companionName,
  onClose,
  onComplete,
}: {
  program: PracticeProgram;
  isCompleted: boolean;
  companionName: string;
  onClose: () => void;
  onComplete: () => void;
}) {
  const [code, setCode] = useState(program.starterCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<boolean[]>([]);
  const [allPassed, setAllPassed] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setOutput("");
    setTestResults([]);
    setAllPassed(false);
    const result = await runCode(code, program.language);
    const rawOut = (
      result.stdout ||
      result.stderr ||
      result.compile_output ||
      "No output"
    ).trim();
    setOutput(rawOut);
    // Check test cases
    const lines = rawOut.split("\n").map((l) => l.trim());
    const passed = program.testCases.map(
      (tc, i) =>
        lines[i]?.includes(tc.expected) || rawOut.includes(tc.expected),
    );
    setTestResults(passed);
    const all = passed.every(Boolean);
    setAllPassed(all);
    if (all && !isCompleted) {
      onComplete();
    }
    setIsRunning(false);
  }, [code, program, isCompleted, onComplete]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newCode = `${code.substring(0, start)}  ${code.substring(end)}`;
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 2;
          textareaRef.current.selectionEnd = start + 2;
        }
      });
    }
  };

  const ext = LANG_EXT[program.language] ?? "txt";

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 bg-background flex flex-col overflow-hidden"
      data-ocid="practice.editor_panel"
    >
      {/* Header */}
      <header
        className="shrink-0 px-4 py-3 flex items-center gap-3 border-b border-border"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="rounded-xl text-white/80 hover:text-white hover:bg-white/15 shrink-0"
          data-ocid="practice.editor_close"
        >
          <X className="w-5 h-5" />
        </Button>
        <div className="flex-1 min-w-0">
          <h1 className="font-extrabold text-white text-sm leading-tight truncate">
            {program.title}
          </h1>
          <p className="text-[11px] text-white/70 truncate">
            {program.domain} · {program.language}
          </p>
        </div>
        {isCompleted && (
          <span className="text-xs bg-green-500 text-white px-2.5 py-1 rounded-full font-semibold shrink-0">
            ✅ Completed
          </span>
        )}
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-4 space-y-4">
          {/* Description */}
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full border ${DIFF_COLORS[program.difficulty]}`}
              >
                {program.difficulty}
              </span>
              <span className="text-xs text-muted-foreground">
                +25 XP on all tests pass
              </span>
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Code Editor */}
          <div className="bg-[#1e1e2e] rounded-2xl overflow-hidden border border-border">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-gray-400 ml-2 font-mono">
                  solution.{ext}
                </span>
              </div>
              <span className="text-xs text-gray-500 capitalize">
                {program.language}
              </span>
            </div>
            <div className="flex">
              <div className="px-3 py-4 text-right select-none font-mono text-xs text-gray-600 bg-[#181825] min-w-[2.5rem]">
                {code.split("\n").map((_, i) => (
                  <div key={`ln-${i + 1}`}>{i + 1}</div>
                ))}
              </div>
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-gray-100 font-mono text-xs py-4 pr-4 resize-none outline-none leading-5"
                style={{ minHeight: "200px", lineHeight: "1.25rem" }}
                spellCheck={false}
                data-ocid="practice.code_editor"
              />
            </div>
            <div className="flex justify-end px-4 py-3 border-t border-white/10">
              <Button
                onClick={handleRun}
                disabled={isRunning}
                className="rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm gap-2 px-5"
                data-ocid="practice.run_button"
              >
                {isRunning ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    Running…
                  </span>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" /> Run Code
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Output Panel */}
          {output && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0d1117] rounded-2xl border border-border overflow-hidden"
            >
              <div className="px-4 py-2.5 border-b border-white/10 flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-400">
                  Output
                </span>
              </div>
              <pre className="px-4 py-3 font-mono text-xs text-green-400 whitespace-pre-wrap overflow-x-auto">
                {output}
              </pre>
            </motion.div>
          )}

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="bg-card rounded-2xl border border-border p-4 space-y-2">
              <h4 className="text-sm font-bold text-foreground mb-3">
                Test Cases
              </h4>
              {program.testCases.map((tc, i) => (
                <div
                  key={`tc-${i}-${tc.input.slice(0, 10)}`}
                  className={`flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs ${
                    testResults[i]
                      ? "bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50"
                      : "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50"
                  }`}
                >
                  <span className="text-base shrink-0 mt-0.5">
                    {testResults[i] ? "✅" : "❌"}
                  </span>
                  <div>
                    <div className="font-semibold text-foreground">
                      Input: <span className="font-mono">{tc.input}</span>
                    </div>
                    <div className="text-muted-foreground">
                      Expected: <span className="font-mono">{tc.expected}</span>
                    </div>
                  </div>
                </div>
              ))}
              {allPassed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-3 bg-green-500 text-white rounded-xl px-4 py-3 text-sm font-bold text-center"
                >
                  🎉 All tests passed! +25 XP earned!
                </motion.div>
              )}
            </div>
          )}

          {/* Hints */}
          <div className="bg-card rounded-2xl border border-border p-4">
            <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" /> Hints
            </h4>
            <div className="space-y-2">
              {program.hints.map((hint, i) => (
                <HintItem key={`hint-${i}`} hint={hint} index={i} />
              ))}
            </div>
          </div>

          {/* Companion Chat */}
          <CompanionChatPanel program={program} companionName={companionName} />
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function PracticeProgramsPage({
  onBack,
}: {
  onBack?: () => void;
}) {
  const { user, setUser, setPage } = useApp();
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [openProgram, setOpenProgram] = useState<PracticeProgram | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const companionName = user.companionName || "Nova";

  const completedIds: string[] = (() => {
    try {
      return JSON.parse(localStorage.getItem("cc_practice_completed") ?? "[]");
    } catch {
      return [];
    }
  })();

  const markComplete = (id: string) => {
    if (!completedIds.includes(id)) {
      const updated = [...completedIds, id];
      localStorage.setItem("cc_practice_completed", JSON.stringify(updated));
      setUser({ xp: user.xp + 25 });
    }
  };

  const filtered =
    selectedDomain === "All"
      ? PRACTICE_PROGRAMS
      : selectedDomain === "C"
        ? PRACTICE_PROGRAMS.filter(
            (p) => p.language === "c" || p.domain === "Programming in C",
          )
        : PRACTICE_PROGRAMS.filter((p) => p.domain === selectedDomain);

  // Reset pagination when domain changes
  const handleDomainChange = (domain: string) => {
    setSelectedDomain(domain);
    setVisibleCount(10);
  };

  const visiblePrograms = filtered.slice(0, visibleCount);
  const hasMorePrograms = visibleCount < filtered.length;

  const handleBack = () => {
    if (onBack) onBack();
    else setPage("problems");
  };

  return (
    <>
      <div className="h-[100dvh] bg-background flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className="shrink-0 px-4 py-3 flex items-center gap-3"
          style={{
            background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="rounded-xl text-white/80 hover:text-white hover:bg-white/15 shrink-0"
            data-ocid="practice.back_button"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-xl shrink-0"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            📋
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-extrabold text-white text-base leading-tight truncate">
              Practice Programs
            </h1>
            <p className="text-[11px] text-white/70 truncate">
              {PRACTICE_PROGRAMS.length} programs across{" "}
              {PRACTICE_DOMAINS.length - 1} domains
            </p>
          </div>
          <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-semibold shrink-0">
            {completedIds.length}/{PRACTICE_PROGRAMS.length} done
          </span>
        </header>

        {/* Domain Filter */}
        <div className="shrink-0 border-b border-border bg-card">
          <ScrollArea className="w-full">
            <div
              className="flex gap-2 px-4 py-2.5 overflow-x-auto"
              style={{ flexWrap: "nowrap" }}
            >
              {PRACTICE_DOMAINS.map((domain) => {
                const count =
                  domain === "All"
                    ? PRACTICE_PROGRAMS.length
                    : PRACTICE_PROGRAMS.filter((p) => p.domain === domain)
                        .length;
                if (count === 0 && domain !== "All") return null;
                return (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => handleDomainChange(domain)}
                    className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      selectedDomain === domain
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/40 text-muted-foreground border-border hover:bg-muted"
                    }`}
                    data-ocid={`practice.filter.${domain.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {domain}
                    {count > 0 && (
                      <span className="ml-1.5 opacity-70">{count}</span>
                    )}
                  </button>
                );
              })}
              {/* C language shortcut filter */}
              {(() => {
                const cCount = PRACTICE_PROGRAMS.filter(
                  (p) => p.language === "c" || p.domain === "Programming in C",
                ).length;
                return cCount > 0 ? (
                  <button
                    key="C"
                    type="button"
                    onClick={() => handleDomainChange("C")}
                    className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      selectedDomain === "C"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/40 text-muted-foreground border-border hover:bg-muted"
                    }`}
                    data-ocid="practice.filter.c"
                  >
                    C<span className="ml-1.5 opacity-70">{cCount}</span>
                  </button>
                ) : null;
              })()}
            </div>
          </ScrollArea>
        </div>

        {/* Program List */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="text-5xl mb-4">📂</div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  No programs yet
                </h3>
                <p className="text-muted-foreground text-sm">
                  Programs for this domain are coming soon!
                </p>
              </div>
            ) : (
              <>
                <p className="text-xs text-muted-foreground mb-3">
                  Showing{" "}
                  <strong className="text-foreground">
                    {visiblePrograms.length}
                  </strong>{" "}
                  of{" "}
                  <strong className="text-foreground">{filtered.length}</strong>{" "}
                  programs
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {visiblePrograms.map((program, i) => (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <ProgramCard
                        program={program}
                        isCompleted={completedIds.includes(program.id)}
                        onOpen={() => setOpenProgram(program)}
                      />
                    </motion.div>
                  ))}
                </div>
                {hasMorePrograms && (
                  <div className="flex justify-center pt-4">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((c) => c + 10)}
                      data-ocid="practice.load_more_button"
                      className="flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 px-5 py-2.5 rounded-full transition-colors"
                    >
                      Load {Math.min(10, filtered.length - visibleCount)} more
                      programs
                    </button>
                  </div>
                )}
                {!hasMorePrograms && filtered.length > 10 && (
                  <p className="text-center text-xs text-muted-foreground pt-3">
                    All {filtered.length} programs shown
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Editor Overlay */}
      <AnimatePresence>
        {openProgram && (
          <EditorPanel
            program={openProgram}
            isCompleted={completedIds.includes(openProgram.id)}
            companionName={companionName}
            onClose={() => setOpenProgram(null)}
            onComplete={() => markComplete(openProgram.id)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

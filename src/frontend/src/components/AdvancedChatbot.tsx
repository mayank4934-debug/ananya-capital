import { Bot, Lightbulb, Loader2, Send, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import { COMPANION_PRESETS } from "../data/companions";
import { useProxyAIChat } from "../hooks/useQueries";

// ─── Behaviour Tracking ───────────────────────────────────────────────────────

type BehaviourProfile = {
  typingSpeed: "slow" | "medium" | "fast";
  hesitationLevel: "high" | "medium" | "low";
  correctionRate: "high" | "medium" | "low";
  responseDelay: "long" | "medium" | "short";
  sessionNumber: number;
  currentTopic: string;
};

type PageVisit = { page: string; timestamp: number; duration: number };

function getSessionNumber(): number {
  const raw = localStorage.getItem("cac_session_count");
  const n = raw ? Number.parseInt(raw, 10) : 0;
  const next = n + 1;
  localStorage.setItem("cac_session_count", String(next));
  return next;
}

function recordPageVisit(page: string) {
  if (!page) return;
  const raw = localStorage.getItem("cac_page_visits");
  const visits: PageVisit[] = raw ? JSON.parse(raw) : [];
  const last = visits[visits.length - 1];
  if (last && !last.duration && last.page === page) return;
  if (last && !last.duration) last.duration = Date.now() - last.timestamp;
  visits.push({ page, timestamp: Date.now(), duration: 0 });
  localStorage.setItem("cac_page_visits", JSON.stringify(visits.slice(-100)));
}

function classifyTypingSpeed(cps: number): BehaviourProfile["typingSpeed"] {
  if (cps < 2) return "slow";
  if (cps < 5) return "medium";
  return "fast";
}

function classifyCorrectionRate(
  corrections: number,
  total: number,
): BehaviourProfile["correctionRate"] {
  if (total === 0) return "low";
  const rate = corrections / total;
  if (rate > 0.35) return "high";
  if (rate > 0.15) return "medium";
  return "low";
}

function classifyHesitation(
  avgPauseMs: number,
): BehaviourProfile["hesitationLevel"] {
  if (avgPauseMs > 3000) return "high";
  if (avgPauseMs > 1200) return "medium";
  return "low";
}

function classifyResponseDelay(ms: number): BehaviourProfile["responseDelay"] {
  if (ms > 15000) return "long";
  if (ms > 5000) return "medium";
  return "short";
}

function buildBehaviourInstruction(profile: BehaviourProfile): string {
  const lines: string[] = [];
  if (profile.typingSpeed === "slow" && profile.hesitationLevel === "high") {
    lines.push(
      "The user seems confused or overwhelmed. Be extra encouraging, use simpler language, break things into smaller steps. Talk like a caring friend.",
    );
  } else if (
    profile.typingSpeed === "fast" &&
    profile.hesitationLevel === "low"
  ) {
    lines.push(
      "The user is confident and engaged. Match their energy, be playful and peer-like, skip basic explanations.",
    );
  }
  if (profile.correctionRate === "high") {
    lines.push(
      "The user is second-guessing themselves. Offer reassurance and validation.",
    );
  }
  if (profile.responseDelay === "long") {
    lines.push(
      "The user may be thinking hard or struggling. Be patient and offer to explain differently.",
    );
  }
  if (profile.sessionNumber === 1) {
    lines.push(
      "This is their first session — be extra warm, welcoming, and encouraging. Introduce yourself naturally.",
    );
  } else if (profile.sessionNumber >= 5) {
    lines.push(
      "This is a returning user who knows you well — be familiar, reference past interactions, use an inside-joke style.",
    );
  }
  return lines.join(" ");
}

function applyToneToFallback(base: string, profile: BehaviourProfile): string {
  if (profile.typingSpeed === "slow" || profile.hesitationLevel === "high") {
    return `You've got this! 💪 ${base}`;
  }
  if (profile.typingSpeed === "fast" && profile.hesitationLevel === "low") {
    return `${base} You're on fire 🔥`;
  }
  if (profile.correctionRate === "high") {
    return `${base} Trust yourself — you're doing better than you think! 🌟`;
  }
  return base;
}

function localFallback(
  topicTitle: string,
  userMsg: string,
  profile?: BehaviourProfile,
): string {
  const lower = userMsg.toLowerCase();
  let base: string;

  if (/summary|summarize|overview|what.*about/.test(lower)) {
    base = `This topic covers the fundamentals of "${topicTitle}". Review the study notes and examples above — they contain everything you need to understand the key concepts. 📚`;
  } else if (/hint|help|stuck|how|confused/.test(lower)) {
    base = `For "${topicTitle}", try breaking the problem into smaller steps. Read each example carefully and trace through the logic.`;
  } else if (/code|program|write|implement/.test(lower)) {
    base = `Start with the simplest version first. Write what you know, then build on it. For "${topicTitle}", focus on the core pattern from the examples. 🔧`;
  } else {
    base = `Great question about "${topicTitle}"! Think about what you already know and connect it to the new concept. The notes and examples are your best guide. 💡`;
  }

  return profile ? applyToneToFallback(base, profile) : base;
}

// ─── Suggested quick replies ──────────────────────────────────────────────────

const QUICK_REPLIES = [
  "Explain more 🤔",
  "Give me a hint 💡",
  "I get it! What's next?",
  "Can you simplify that?",
  "Show an example",
  "Why does this work?",
];

function getSuggestedReplies(): string[] {
  const shuffled = [...QUICK_REPLIES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface AdvancedChatbotProps {
  topicTitle: string;
  topicContent?: string;
  companionName?: string;
  placeholder?: string;
  context?: string;
  onClose?: () => void;
  className?: string;
}

interface ChatMsg {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingIndicator({ accentColor }: { accentColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      className="flex justify-start items-end gap-2"
      data-ocid="advanced_chatbot.loading_state"
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
        style={{ background: accentColor }}
      >
        <Bot className="w-3 h-3" />
      </div>
      <div
        className="rounded-2xl rounded-bl-sm px-4 py-3 border flex items-center gap-1.5"
        style={{
          backgroundColor: `${accentColor}18`,
          borderColor: `${accentColor}33`,
        }}
      >
        {[0, 150, 300].map((delay) => (
          <motion.span
            key={delay}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              delay: delay / 1000,
            }}
            className="w-2 h-2 rounded-full block"
            style={{ backgroundColor: accentColor }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdvancedChatbot({
  topicTitle,
  topicContent = "",
  companionName,
  placeholder,
  context = "",
  onClose,
  className = "",
}: AdvancedChatbotProps) {
  const { user } = useApp();
  const proxyAIChat = useProxyAIChat();
  const effectiveCompanionName =
    companionName ?? user.companionName ?? "Study Companion";

  const preset =
    COMPANION_PRESETS.find((p) => p.personality === user.personality) ??
    COMPANION_PRESETS[0];
  const accentColor = preset.accentColor;

  const [messages, setMessages] = useState<ChatMsg[]>(() => [
    {
      id: makeId(),
      role: "assistant",
      content: `Hey! I'm ${effectiveCompanionName} 💙 Ask me anything about **"${topicTitle}"**, or tap the buttons above to get a summary or hints!`,
      timestamp: new Date(),
      suggestions: getSuggestedReplies(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Behaviour tracking refs ─────────────────────────────────────────────────
  const sessionNumberRef = useRef<number>(getSessionNumber());
  const lastCompanionMsgTimeRef = useRef<number>(Date.now());
  const typingStartTimeRef = useRef<number | null>(null);
  const keyCountRef = useRef(0);
  const backspaceCountRef = useRef(0);
  const pauseTimestampsRef = useRef<number[]>([]);
  const lastKeypressTimeRef = useRef<number | null>(null);
  const typingDurationRef = useRef(0);

  useEffect(() => {
    const page = context || topicTitle;
    if (page) recordPageVisit(page);
  }, [context, topicTitle]);

  const buildProfile = useCallback((): BehaviourProfile => {
    const elapsedSec = typingDurationRef.current / 1000 || 1;
    const cps = keyCountRef.current / elapsedSec;
    const avgPause =
      pauseTimestampsRef.current.length > 0
        ? pauseTimestampsRef.current.reduce((a, b) => a + b, 0) /
          pauseTimestampsRef.current.length
        : 0;
    const responseDelayMs = typingStartTimeRef.current
      ? typingStartTimeRef.current - lastCompanionMsgTimeRef.current
      : 0;

    return {
      typingSpeed: classifyTypingSpeed(cps),
      hesitationLevel: classifyHesitation(avgPause),
      correctionRate: classifyCorrectionRate(
        backspaceCountRef.current,
        keyCountRef.current,
      ),
      responseDelay: classifyResponseDelay(responseDelayMs),
      sessionNumber: sessionNumberRef.current,
      currentTopic: context || topicTitle,
    };
  }, [context, topicTitle]);

  const resetTypingTracking = () => {
    keyCountRef.current = 0;
    backspaceCountRef.current = 0;
    pauseTimestampsRef.current = [];
    typingStartTimeRef.current = null;
    lastKeypressTimeRef.current = null;
    typingDurationRef.current = 0;
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const now = Date.now();
    if (typingStartTimeRef.current === null) {
      typingStartTimeRef.current = now;
    }
    if (lastKeypressTimeRef.current !== null) {
      const gap = now - lastKeypressTimeRef.current;
      if (gap > 800) {
        pauseTimestampsRef.current.push(gap);
      }
      typingDurationRef.current += gap;
    }
    lastKeypressTimeRef.current = now;

    if (e.key === "Backspace" || e.key === "Delete") {
      backspaceCountRef.current += 1;
    } else if (e.key.length === 1) {
      keyCountRef.current += 1;
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll after new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const buildSystemPrompt = useCallback(
    (profile?: BehaviourProfile) => {
      const base = `You are ${effectiveCompanionName}, a warm, friendly, and encouraging study companion for Code & Crush. You talk like a supportive friend — conversational, natural, never robotic. The student is studying "${topicTitle}". Be concise (2-4 sentences), warm, and educational. Never give complete solutions — guide with questions and hints. Context:\n\n${topicContent.slice(0, 1500)}`;
      if (!profile) return base;
      const behaviour = buildBehaviourInstruction(profile);
      return behaviour ? `${base}\n\nBehaviour note: ${behaviour}` : base;
    },
    [effectiveCompanionName, topicTitle, topicContent],
  );

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const profile = buildProfile();
    resetTypingTracking();

    const userMsg: ChatMsg = {
      id: makeId(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, userMsg].slice(-10).map((m) => ({
        role: m.role,
        content: m.content,
      }));
      const aiReply = await proxyAIChat.mutateAsync({
        messages: history,
        systemPrompt: buildSystemPrompt(profile),
      });
      const replyContent =
        aiReply || localFallback(topicTitle, trimmed, profile);
      const reply: ChatMsg = {
        id: makeId(),
        role: "assistant",
        content: replyContent,
        timestamp: new Date(),
        suggestions: getSuggestedReplies(),
      };
      setMessages((prev) => [...prev, reply]);
      lastCompanionMsgTimeRef.current = Date.now();
    } catch {
      const fallback = localFallback(topicTitle, trimmed, profile);
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "assistant",
          content: fallback,
          timestamp: new Date(),
          suggestions: getSuggestedReplies(),
        },
      ]);
      lastCompanionMsgTimeRef.current = Date.now();
    } finally {
      setLoading(false);
    }
  };

  const handleGetSummary = async () => {
    if (loading) return;
    setLoading(true);

    const userMsg: ChatMsg = {
      id: makeId(),
      role: "user",
      content: "✨ Give me a bullet-point summary of this topic",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    const summaryPrompt = `Please provide a concise bullet-point summary of "${topicTitle}" in 5-7 key points. Each bullet should highlight the most important concept. Keep it student-friendly and actionable.`;

    try {
      const contextChunk = topicContent.slice(0, 2000);
      const systemWithCtx = `${buildSystemPrompt()}\n\nContent to summarize:\n${contextChunk}`;
      const aiReply = await proxyAIChat.mutateAsync({
        messages: [{ role: "user", content: summaryPrompt }],
        systemPrompt: systemWithCtx,
      });

      const localSummary = topicContent
        ? `📋 Key points for "${topicTitle}":\n\n${topicContent
            .split("\n")
            .map((l) => l.trim())
            .filter((l) => l.length > 20)
            .slice(0, 7)
            .map((l) => `• ${l.slice(0, 120)}${l.length > 120 ? "..." : ""}`)
            .join("\n")}`
        : `📋 Summary of "${topicTitle}": Review the study notes above — they contain the core concepts for this topic. Use the Docs section for deeper reference. 💡`;

      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "assistant",
          content: aiReply || localSummary,
          timestamp: new Date(),
          suggestions: [
            "Explain the first point",
            "What should I do next?",
            "Give me a quiz",
          ],
        },
      ]);
      lastCompanionMsgTimeRef.current = Date.now();
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "assistant",
          content: `📋 Summary of "${topicTitle}": Review the study notes above for the key concepts. The notes are your best reference for this topic.`,
          timestamp: new Date(),
          suggestions: getSuggestedReplies(),
        },
      ]);
      lastCompanionMsgTimeRef.current = Date.now();
    } finally {
      setLoading(false);
    }
  };

  const handleGetHint = async () => {
    if (loading) return;
    setLoading(true);

    const userMsg: ChatMsg = {
      id: makeId(),
      role: "user",
      content: "💡 Give me a helpful hint for this topic",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    const hintPrompt = `Give a helpful, guiding hint about "${topicTitle}" that nudges the student toward understanding without giving away complete answers. Focus on the most commonly confusing aspect. Be encouraging.`;

    try {
      const aiReply = await proxyAIChat.mutateAsync({
        messages: [{ role: "user", content: hintPrompt }],
        systemPrompt: buildSystemPrompt(),
      });
      const localHints = [
        `💡 For "${topicTitle}", start by understanding the core concept before looking at code examples.`,
        `💡 Break down "${topicTitle}" into smaller parts — tackle each piece one at a time.`,
        `💡 The examples in the study notes for "${topicTitle}" are the best starting point. Trace through them step by step.`,
      ];
      const hint = localHints[Math.floor(Math.random() * localHints.length)];

      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "assistant",
          content: aiReply || hint,
          timestamp: new Date(),
          suggestions: [
            "Give me another hint",
            "I'm still confused",
            "Got it! What next?",
          ],
        },
      ]);
      lastCompanionMsgTimeRef.current = Date.now();
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "assistant",
          content: `💡 For "${topicTitle}": try to identify the pattern in the examples first, then apply it to your own code.`,
          timestamp: new Date(),
          suggestions: getSuggestedReplies(),
        },
      ]);
      lastCompanionMsgTimeRef.current = Date.now();
    } finally {
      setLoading(false);
    }
  };

  const MAX_CHARS = 500;

  return (
    <div
      className={`flex flex-col rounded-2xl border overflow-hidden ${className}`}
      style={{
        borderColor: `${accentColor}33`,
        background: `${accentColor}08`,
      }}
      data-ocid="advanced_chatbot.panel"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{
          borderColor: `${accentColor}22`,
          background: `${accentColor}15`,
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white"
            style={{ background: accentColor }}
          >
            <Bot className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <p
              className="text-xs font-bold truncate leading-tight"
              style={{ color: accentColor }}
            >
              {effectiveCompanionName}
            </p>
            <p className="text-[10px] text-muted-foreground leading-tight">
              Study companion · guidance only
            </p>
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            data-ocid="advanced_chatbot.close_button"
            className="ml-2 p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Action buttons */}
      <div
        className="flex gap-2 px-3 py-2 border-b"
        style={{ borderColor: `${accentColor}22` }}
      >
        <button
          type="button"
          onClick={handleGetSummary}
          disabled={loading}
          data-ocid="advanced_chatbot.summary_button"
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-2 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <Sparkles className="w-3 h-3" />
          )}
          Get Summary
        </button>
        <button
          type="button"
          onClick={handleGetHint}
          disabled={loading}
          data-ocid="advanced_chatbot.hint_button"
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-2 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <Lightbulb className="w-3 h-3" />
          )}
          Get Hint
        </button>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-3 py-3 space-y-3"
        style={{ minHeight: 180, maxHeight: 320 }}
        data-ocid="advanced_chatbot.message_list"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`flex items-end gap-1.5 max-w-[88%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Companion avatar */}
                {msg.role === "assistant" && (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white mb-0.5"
                    style={{ background: accentColor }}
                  >
                    <Bot className="w-3 h-3" />
                  </div>
                )}

                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "text-foreground rounded-bl-sm border"
                  }`}
                  style={
                    msg.role === "assistant"
                      ? {
                          backgroundColor: `${accentColor}18`,
                          borderColor: `${accentColor}33`,
                        }
                      : {}
                  }
                >
                  <span style={{ whiteSpace: "pre-wrap" }}>{msg.content}</span>
                </div>
              </div>

              {/* Timestamp */}
              <span
                className={`text-[10px] text-muted-foreground px-1 ${msg.role === "user" ? "text-right" : "text-left ml-8"}`}
              >
                {formatTime(msg.timestamp)}
              </span>

              {/* Suggested quick replies — only on latest assistant message */}
              {msg.role === "assistant" &&
                msg.suggestions &&
                msg.id ===
                  messages.filter((m) => m.role === "assistant").at(-1)?.id &&
                !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex flex-wrap gap-1.5 ml-8"
                    data-ocid="advanced_chatbot.suggestions"
                  >
                    {msg.suggestions.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => sendMessage(chip)}
                        disabled={loading}
                        data-ocid="advanced_chatbot.suggestion_chip"
                        className="text-[11px] px-2.5 py-1 rounded-full border transition-all hover:scale-105 active:scale-95 disabled:opacity-40"
                        style={{
                          borderColor: `${accentColor}44`,
                          color: accentColor,
                          backgroundColor: `${accentColor}10`,
                        }}
                      >
                        {chip}
                      </button>
                    ))}
                  </motion.div>
                )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {loading && <TypingIndicator accentColor={accentColor} />}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        className="px-3 py-2.5 border-t"
        style={{ borderColor: `${accentColor}22` }}
      >
        <div
          className="flex items-center gap-2 rounded-xl border px-3 py-1.5"
          style={{
            borderColor: `${accentColor}33`,
            background: "var(--background)",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              if (e.target.value.length <= MAX_CHARS) setInput(e.target.value);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder={placeholder ?? `Ask about ${topicTitle}…`}
            disabled={loading}
            data-ocid="advanced_chatbot.input"
            className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none disabled:opacity-50 min-w-0"
          />
          {/* Character count */}
          {input.length > 0 && (
            <span
              className={`text-[10px] shrink-0 tabular-nums ${input.length > MAX_CHARS * 0.9 ? "text-destructive" : "text-muted-foreground"}`}
            >
              {input.length}/{MAX_CHARS}
            </span>
          )}
          <button
            type="button"
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            data-ocid="advanced_chatbot.send_button"
            className="w-7 h-7 rounded-full flex items-center justify-center text-white disabled:opacity-40 hover:opacity-90 active:scale-95 transition-all shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

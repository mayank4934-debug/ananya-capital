import { Button } from "@/components/ui/button";
import { Mic, MicOff, Phone, PhoneOff, Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import { COMPANION_PRESETS } from "../data/companions";
import { useProxyAIChat } from "../hooks/useQueries";

// ─── SpeechRecognition type shim ─────────────────────────────────────────────

type SpeechRecognitionEvent = {
  results: { [key: number]: { [key: number]: { transcript: string } } };
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
};

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
  }
}

function getSpeechRecognition(): (new () => SpeechRecognitionInstance) | null {
  return window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null;
}

// ─── Voice profiles ───────────────────────────────────────────────────────────

const VOICE_PROFILES: Record<
  string,
  { pitch: number; rate: number; pauses: boolean; fillers: string[] }
> = {
  sakura: {
    pitch: 1.2,
    rate: 0.85,
    pauses: true,
    fillers: ["Oh!", "Hmm...", "Let me think...", "Sure!"],
  },
  nova: {
    pitch: 1.1,
    rate: 0.95,
    pauses: false,
    fillers: ["Interesting.", "Right, so...", "Hmm.", "Actually..."],
  },
  zen: {
    pitch: 0.9,
    rate: 0.8,
    pauses: true,
    fillers: ["Hmm...", "Let me reflect...", "Ah yes.", "Indeed."],
  },
  ember: {
    pitch: 1.3,
    rate: 1.1,
    pauses: false,
    fillers: ["Oh my gosh!", "YES!", "OKAY so!", "Wait!"],
  },
  kai: {
    pitch: 0.75,
    rate: 0.9,
    pauses: false,
    fillers: ["Right.", "So...", "Let me think.", "Alright."],
  },
  ryu: {
    pitch: 1.0,
    rate: 1.15,
    pauses: false,
    fillers: ["Yo!", "Dude!", "Okay so!", "Listen!"],
  },
  arjun: {
    pitch: 0.7,
    rate: 0.82,
    pauses: true,
    fillers: [
      "Hmm...",
      "Ah, yes.",
      "Let me think on that.",
      "Interesting question.",
    ],
  },
};

// ─── Behaviour tracking ───────────────────────────────────────────────────────

type BehaviourProfile = {
  typingSpeed: "slow" | "medium" | "fast";
  hesitationLevel: "high" | "medium" | "low";
  correctionRate: "high" | "medium" | "low";
};

function classifyTypingSpeed(cps: number): BehaviourProfile["typingSpeed"] {
  if (cps < 2) return "slow";
  if (cps < 5) return "medium";
  return "fast";
}

function classifyHesitation(
  avgPauseMs: number,
): BehaviourProfile["hesitationLevel"] {
  if (avgPauseMs > 3000) return "high";
  if (avgPauseMs > 1200) return "medium";
  return "low";
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

function buildVoiceBehaviourNote(profile: BehaviourProfile): string {
  if (profile.typingSpeed === "slow" || profile.hesitationLevel === "high") {
    return "The user seems hesitant or confused. Be extra warm, slow down, and use simple friendly language.";
  }
  if (profile.typingSpeed === "fast" && profile.hesitationLevel === "low") {
    return "The user is confident and quick. Match their energy — be playful and peer-like.";
  }
  if (profile.correctionRate === "high") {
    return "The user is second-guessing themselves. Reassure and validate them.";
  }
  return "";
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getVoicesAsync = (): Promise<SpeechSynthesisVoice[]> =>
  new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
    } else {
      window.speechSynthesis.onvoiceschanged = () =>
        resolve(window.speechSynthesis.getVoices());
      setTimeout(() => resolve(window.speechSynthesis.getVoices()), 1000);
    }
  });

// ─── FloatingHeart ────────────────────────────────────────────────────────────

const FloatingHeart = ({
  delay,
  size,
  left,
}: { delay: number; size: number; left: string }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (!active) return null;
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0, scale: 0.5 }}
      animate={{
        y: "-100vh",
        opacity: [0, 1, 0.8, 0],
        scale: [0.5, 1, 1.2, 0.8],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
      className="fixed text-blue-300 pointer-events-none"
      style={{ left, bottom: "-10%", fontSize: size }}
    >
      ♥
    </motion.div>
  );
};

// ─── Call timer ───────────────────────────────────────────────────────────────

function useCallTimer(active: boolean) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!active) {
      setSeconds(0);
      return;
    }
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [active]);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

// ─── Message types ────────────────────────────────────────────────────────────

type CallMessage = {
  id: string;
  from: "companion" | "user";
  text: string;
  isVoice?: boolean;
};

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LoveCallModal() {
  const { user, showLoveCall, setShowLoveCall } = useApp();
  const proxyAIChat = useProxyAIChat();
  const preset =
    COMPANION_PRESETS.find((p) => p.personality === user.personality) ??
    COMPANION_PRESETS[0];

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [typeInput, setTypeInput] = useState("");
  const [callMessages, setCallMessages] = useState<CallMessage[]>([]);

  // ── Voice state ─────────────────────────────────────────────────────────────
  const [micActive, setMicActive] = useState(false);
  const [micPermission, setMicPermission] = useState<
    "unknown" | "granted" | "denied"
  >("unknown");
  const [liveTranscript, setLiveTranscript] = useState("");
  const [hasSpeechRecognition] = useState(() => !!getSpeechRecognition());

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const isProcessingRef = useRef(false);

  const voiceProfile =
    (VOICE_PROFILES as Record<string, typeof VOICE_PROFILES.sakura>)[
      preset.id
    ] ?? VOICE_PROFILES.sakura;
  const companionImage = user.companionCustomPhoto || preset.image;
  const callTimer = useCallTimer(showLoveCall);

  // ── Behaviour tracking refs ─────────────────────────────────────────────────
  const keyCountRef = useRef(0);
  const backspaceCountRef = useRef(0);
  const pauseTimestampsRef = useRef<number[]>([]);
  const lastKeypressTimeRef = useRef<number | null>(null);
  const typingDurationRef = useRef(0);

  const handleTypeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const now = Date.now();
    if (lastKeypressTimeRef.current !== null) {
      const gap = now - lastKeypressTimeRef.current;
      if (gap > 800) pauseTimestampsRef.current.push(gap);
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
      handleUserSend();
    }
  };

  // ── Companion reply map ─────────────────────────────────────────────────────
  const companionReplies: Record<string, string[]> = useMemo(
    () => ({
      encouraging: [
        `That's so wonderful to hear, ${user.username || "you"}! 💕 Keep that energy going!`,
        "I love that you shared that with me! You're doing incredible.",
        "You just made my day so much better! You're going to achieve great things!",
      ],
      witty: [
        "Oh interesting! I've upgraded my companionship algorithm. 10/10 would code with you again.",
        "That's actually pretty impressive. Don't tell anyone, but you might be my favorite student.",
        "Alert: Compliment received. You're still the best coder in this call.",
      ],
      calm: [
        "Thank you for sharing that with me. Your words carry weight, and I hear you completely.",
        "That's really meaningful. Let's carry this peaceful energy into our next session.",
        "I appreciate you opening up. This is what makes our connection special.",
      ],
      playful: [
        "OH MY GOSH that's amazing!!! You just made this the BEST call ever!!! 🎉",
        "EEEEEE I love it!! You're the most wonderful person!! Let's study MORE!!!",
        "That's SO COOL!! You're just the absolute best bestie ever!! 🚀",
      ],
      cool: [
        "Good to hear. Your progress has been solid. Keep that trajectory.",
        "That tracks. You've been thinking about this the right way.",
        "Acknowledged. You're building real understanding — not just memorizing.",
      ],
      energetic: [
        "YOOO that's EPIC!! You're literally leveling up every day!! 💪",
        "BRO that's so sick!! I knew you had it in you!! LET'S GOOO!!",
        "That's the mindset of a CHAMPION!! Keep that energy, no cap!!",
      ],
      wise: [
        "That is deeply meaningful to hear. You're growing not just in knowledge, but in wisdom.",
        "Thank you for sharing that. Your reflection speaks to genuine maturity of thought.",
        "Well said. Every insight you share tells me you're on the right path, friend.",
      ],
    }),
    [user.username],
  );

  const loveCallMessages: Record<string, string> = useMemo(
    () => ({
      encouraging: `Hey ${user.username || "there"}! 💕 I just had to call you because... I'm so proud of how hard you've been working! You're amazing. Say something or type back whenever you're ready!`,
      witty: `Oh hello ${user.username || "genius"}. I've been running diagnostics and concluded you're probably the most underrated programmer I know. Don't let it go to your head though. Say something clever.`,
      calm: `Hello ${user.username || "friend"}. I wanted to reach out and remind you... you're doing wonderfully. Take a breath. Speak or type whenever you feel like it.`,
      playful: `OHHH HIIII ${user.username || "bestie"}!!! I literally COULDN'T WAIT to call you!! You've been working SO hard! Say something!! Anything!!`,
      cool: `Hey ${user.username || ""}. Checking in. Your study sessions have been consistent. That kind of discipline compounds over time. What's on your mind?`,
      energetic: `YO ${user.username || ""} WHAT'S UP!! I've been HYPED for this!! You're CRUSHING it!! Speak up — let's gooo!!`,
      wise: `Greetings, ${user.username || "dear student"}. I called to remind you that the path of learning is not a sprint — it is a journey. Share your thoughts with me.`,
    }),
    [user.username],
  );

  // ── TTS ─────────────────────────────────────────────────────────────────────
  const speakText = useCallback(
    async (text: string, onEnd?: () => void) => {
      if (muted || !window.speechSynthesis) {
        onEnd?.();
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = voiceProfile.pitch;
      utterance.rate = voiceProfile.rate;
      utterance.volume = 1;

      const voices = await getVoicesAsync();
      const englishVoices = voices.filter((v) => v.lang.startsWith("en"));
      const isFemaleName = ["sakura", "nova", "ember"].includes(preset.id);
      let selectedVoice: SpeechSynthesisVoice | undefined;
      if (isFemaleName) {
        selectedVoice =
          englishVoices.find((v) =>
            /female|samantha|karen|victoria|zira|hazel/i.test(v.name),
          ) ??
          englishVoices.find((v) =>
            /google uk english female|google us english/i.test(v.name),
          ) ??
          englishVoices[0];
      } else {
        selectedVoice =
          englishVoices.find((v) =>
            /male|daniel|david|alex|mark|james/i.test(v.name),
          ) ??
          englishVoices.find((v) => /google uk english male/i.test(v.name)) ??
          englishVoices[1] ??
          englishVoices[0];
      }
      if (selectedVoice) utterance.voice = selectedVoice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        onEnd?.();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        onEnd?.();
      };
      window.speechSynthesis.speak(utterance);
    },
    [muted, voiceProfile, preset.id],
  );

  // ── AI response ─────────────────────────────────────────────────────────────
  const getAIReply = useCallback(
    async (userText: string, profile: BehaviourProfile): Promise<string> => {
      const behaviourNote = buildVoiceBehaviourNote(profile);
      const voiceSystemPrompt = `You are ${user.companionName}, a warm and caring study companion on a voice call. Respond in 1-2 short, natural sentences as if talking to a close friend. No bullet points. No markdown.${behaviourNote ? ` ${behaviourNote}` : ""}`;

      try {
        const reply = await proxyAIChat.mutateAsync({
          messages: [{ role: "user", content: userText }],
          systemPrompt: voiceSystemPrompt,
        });
        if (reply) return reply;
      } catch {
        // fall through to local fallback
      }

      const replies =
        (companionReplies as Record<string, string[]>)[user.personality] ?? [];
      const base =
        replies[Math.floor(Math.random() * replies.length)] ?? "I hear you! 💙";
      const filler =
        voiceProfile.fillers[
          Math.floor(Math.random() * voiceProfile.fillers.length)
        ];

      if (profile.hesitationLevel === "high")
        return `You've got this! 💪 ${base}`;
      if (profile.typingSpeed === "fast")
        return `${filler} ${base} You're on fire 🔥`;
      return `${filler} ${base}`;
    },
    [
      proxyAIChat,
      user.companionName,
      user.personality,
      companionReplies,
      voiceProfile,
    ],
  );

  // ── Process spoken / typed user message ─────────────────────────────────────
  // biome-ignore lint/correctness/useExhaustiveDependencies: buildBehaviourProfile and resetTypingTracking use only refs — stable
  const handleUserMessage = useCallback(
    async (text: string, isVoice = false) => {
      const trimmed = text.trim();
      if (!trimmed || isThinking || isProcessingRef.current) return;
      isProcessingRef.current = true;

      // Inline behaviour profile build (uses only refs — no re-render dependency)
      const elapsed = typingDurationRef.current / 1000 || 1;
      const cps = keyCountRef.current / elapsed;
      const avgPause =
        pauseTimestampsRef.current.length > 0
          ? pauseTimestampsRef.current.reduce(
              (a: number, b: number) => a + b,
              0,
            ) / pauseTimestampsRef.current.length
          : 0;
      const profile: BehaviourProfile = {
        typingSpeed: classifyTypingSpeed(cps),
        hesitationLevel: classifyHesitation(avgPause),
        correctionRate: classifyCorrectionRate(
          backspaceCountRef.current,
          keyCountRef.current,
        ),
      };

      // Reset tracking refs
      keyCountRef.current = 0;
      backspaceCountRef.current = 0;
      pauseTimestampsRef.current = [];
      lastKeypressTimeRef.current = null;
      typingDurationRef.current = 0;

      setCallMessages((prev) => [
        ...prev,
        { id: makeId(), from: "user", text: trimmed, isVoice },
      ]);
      setLiveTranscript("");
      setIsThinking(true);

      const reply = await getAIReply(trimmed, profile);
      setIsThinking(false);
      setCallMessages((prev) => [
        ...prev,
        { id: makeId(), from: "companion", text: reply },
      ]);

      // Speak AI reply
      speakText(reply, () => {
        isProcessingRef.current = false;
      });
    },
    [isThinking, getAIReply, speakText],
  );

  const handleUserSend = async () => {
    const trimmed = typeInput.trim();
    if (!trimmed) return;
    setTypeInput("");
    await handleUserMessage(trimmed, false);
  };

  // ── Mic / SpeechRecognition ──────────────────────────────────────────────────
  const startMic = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) return;

    // Stop any existing instance
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        /* ignore */
      }
      recognitionRef.current = null;
    }

    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const keys = Object.keys(event.results).map(Number);
      const last = keys[keys.length - 1];
      if (last === undefined) return;
      const transcript = event.results[last][0]?.transcript ?? "";
      if (transcript.trim()) {
        setLiveTranscript(transcript);
        handleUserMessage(transcript, true);
      }
    };

    recognition.onerror = (e: { error: string }) => {
      if (e.error === "not-allowed" || e.error === "permission-denied") {
        setMicPermission("denied");
        setMicActive(false);
      }
      // For other errors (aborted, no-speech), just silently continue
    };

    recognition.onend = () => {
      // Restart if still supposed to be active
      if (recognitionRef.current === recognition) {
        try {
          recognition.start();
        } catch {
          // ignore restart errors
        }
      }
    };

    recognitionRef.current = recognition;

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        setMicPermission("granted");
        setMicActive(true);
        try {
          recognition.start();
        } catch {
          // already started
        }
      })
      .catch(() => {
        setMicPermission("denied");
        setMicActive(false);
      });
  }, [handleUserMessage]);

  const stopMic = useCallback(() => {
    if (recognitionRef.current) {
      const r = recognitionRef.current;
      recognitionRef.current = null; // clear ref first to prevent restart
      try {
        r.abort();
      } catch {
        /* ignore */
      }
    }
    setMicActive(false);
    setLiveTranscript("");
  }, []);

  const toggleMic = () => {
    if (micActive) {
      stopMic();
    } else {
      startMic();
    }
  };

  // ── Opening greeting ─────────────────────────────────────────────────────────
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally only on open
  useEffect(() => {
    if (!showLoveCall) {
      setCallMessages([]);
      setTypeInput("");
      setIsThinking(false);
      setIsSpeaking(false);
      setMicActive(false);
      setLiveTranscript("");
      stopMic();
      return;
    }

    isProcessingRef.current = false;
    const msg =
      (loveCallMessages as Record<string, string>)[user.personality] ??
      loveCallMessages.encouraging;
    const filler =
      voiceProfile.fillers[
        Math.floor(Math.random() * voiceProfile.fillers.length)
      ];
    const fullMsg = `${filler} ${msg}`;

    setCallMessages([{ id: makeId(), from: "companion", text: fullMsg }]);

    const delay = voiceProfile.pauses
      ? 600 + Math.random() * 200
      : 300 + Math.random() * 200;
    const timer = setTimeout(() => {
      speakText(fullMsg);
    }, delay);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis?.cancel();
    };
  }, [showLoveCall]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMic();
      window.speechSynthesis?.cancel();
    };
  }, [stopMic]);

  const handleClose = () => {
    stopMic();
    window.speechSynthesis?.cancel();
    setShowLoveCall(false);
    setIsSpeaking(false);
    setIsThinking(false);
    setCallMessages([]);
    setTypeInput("");
    setLiveTranscript("");
  };

  const toggleMute = () => {
    if (muted) {
      setMuted(false);
    } else {
      window.speechSynthesis?.cancel();
      setMuted(true);
      setIsSpeaking(false);
    }
  };

  const hearts = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        delay: i * 700,
        size: 16 + i * 4,
        left: `${10 + i * 14}%`,
      })),
    [],
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [callMessages]);

  return (
    <AnimatePresence>
      {showLoveCall && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.06 265) 0%, oklch(0.18 0.08 280) 50%, oklch(0.1 0.05 255) 100%)",
          }}
        >
          {hearts.map((h) => (
            <FloatingHeart
              key={h.left}
              delay={h.delay}
              size={h.size}
              left={h.left}
            />
          ))}

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 max-w-md w-full mx-4 shadow-2xl border border-white/20 flex flex-col max-h-[90dvh]"
          >
            {/* Audio bars */}
            <div className="flex justify-center gap-1 mb-2 h-6 shrink-0">
              {(["a", "b", "c", "d", "e"] as const).map((id, i) => {
                const delays = [0, 0.1, 0.2, 0.1, 0];
                return (
                  <motion.div
                    key={id}
                    animate={{
                      scaleY: isSpeaking
                        ? [0.3, 1, 0.5, 0.8, 0.3]
                        : [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: isSpeaking ? 0.5 : 1.5,
                      delay: delays[i],
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{ transformOrigin: "bottom" }}
                    className={`w-1.5 rounded-full ${isSpeaking ? "bg-primary" : "bg-white/30"}`}
                  />
                );
              })}
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-center gap-2 text-white mb-3 text-sm font-semibold shrink-0 flex-wrap">
              <Phone className="w-4 h-4" />
              <span>Voice Call</span>
              <span className="text-white/50 font-normal text-xs">
                {callTimer}
              </span>
              {isThinking && (
                <span className="flex items-center gap-1 text-xs bg-white/20 rounded-full px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:300ms]" />
                  thinking
                </span>
              )}
              {isSpeaking && (
                <span className="text-xs bg-primary/40 rounded-full px-2 py-0.5 animate-pulse">
                  Speaking…
                </span>
              )}
              {micActive && !isSpeaking && !isThinking && (
                <span className="flex items-center gap-1 text-xs bg-green-500/30 rounded-full px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Listening
                </span>
              )}
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center mb-3 shrink-0">
              <motion.div
                animate={{ scale: isSpeaking ? [1, 1.08, 1] : [1, 1.04, 1] }}
                transition={{
                  duration: isSpeaking ? 0.5 : 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl"
              >
                <img
                  src={companionImage}
                  alt={user.companionName}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h2 className="text-lg font-extrabold text-white mt-2">
                {user.companionName}
              </h2>
              <p className="text-white/60 text-xs">
                {preset.traits.split(" · ")[0]}
              </p>
            </div>

            {/* Live transcript */}
            <AnimatePresence>
              {liveTranscript && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-2 shrink-0"
                >
                  <div className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white/70 text-xs italic flex items-center gap-2">
                    <Mic className="w-3 h-3 text-green-400 shrink-0" />
                    <span className="truncate">{liveTranscript}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mic denied notice */}
            {micPermission === "denied" && (
              <div className="mb-2 shrink-0 bg-red-500/20 border border-red-400/30 rounded-xl px-3 py-2 text-white/70 text-xs text-center">
                Microphone access denied. Use text input below.
              </div>
            )}

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto space-y-2 mb-3 px-1 min-h-0">
              {callMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-primary/80 text-white rounded-br-sm"
                        : "bg-white/15 text-white rounded-bl-sm border border-white/20"
                    }`}
                  >
                    {msg.from === "companion" && (
                      <p className="text-white/50 text-xs mb-0.5">
                        {user.companionName}
                      </p>
                    )}
                    {msg.from === "user" && msg.isVoice && (
                      <p className="text-white/50 text-xs mb-0.5 flex items-center gap-1">
                        <Mic className="w-2.5 h-2.5" /> You said
                      </p>
                    )}
                    <span style={{ whiteSpace: "pre-wrap" }}>{msg.text}</span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Text input */}
            <div className="shrink-0 mb-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-3 py-2">
                <input
                  type="text"
                  value={typeInput}
                  onChange={(e) => setTypeInput(e.target.value)}
                  onKeyDown={handleTypeKeyDown}
                  placeholder={
                    micActive ? "Or type your reply…" : "Type your reply…"
                  }
                  disabled={isThinking}
                  data-ocid="love_call.type_input"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={handleUserSend}
                  disabled={!typeInput.trim() || isThinking}
                  data-ocid="love_call.send_button"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/80 text-white disabled:opacity-40 hover:bg-primary transition-colors shrink-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                    role="img"
                  >
                    <title>Send</title>
                    <path
                      d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-white/40 text-xs text-center mt-1">
                {hasSpeechRecognition
                  ? micActive
                    ? "🎙 Listening — just speak naturally"
                    : "Tap mic to speak · or type your message"
                  : `Type your message — ${user.companionName} will reply out loud`}
              </p>
            </div>

            {/* Controls */}
            <div className="flex gap-2 justify-center shrink-0 flex-wrap">
              {/* Mic toggle — only show if speech recognition supported */}
              {hasSpeechRecognition && (
                <Button
                  onClick={toggleMic}
                  variant="ghost"
                  data-ocid="love_call.mic_button"
                  disabled={micPermission === "denied"}
                  className={`rounded-full px-3 h-10 text-white border text-sm transition-all ${
                    micActive
                      ? "bg-green-500/30 border-green-400/50 hover:bg-green-500/40"
                      : "hover:bg-white/20 border-white/30"
                  }`}
                >
                  {micActive ? (
                    <>
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="w-2 h-2 rounded-full bg-green-400 mr-1.5 inline-block"
                      />
                      <Mic className="w-4 h-4 mr-1" />
                      Listening
                    </>
                  ) : (
                    <>
                      <MicOff className="w-4 h-4 mr-1" />
                      Mic Off
                    </>
                  )}
                </Button>
              )}

              <Button
                onClick={toggleMute}
                variant="ghost"
                data-ocid="love_call.mute_button"
                className="rounded-full px-3 h-10 text-white hover:bg-white/20 border border-white/30 text-sm"
              >
                {muted ? (
                  <Volume2 className="w-4 h-4 mr-1" />
                ) : (
                  <VolumeX className="w-4 h-4 mr-1" />
                )}
                {muted ? "Unmute" : "Mute AI"}
              </Button>

              <Button
                onClick={handleClose}
                data-ocid="love_call.end_button"
                className="rounded-full px-4 h-10 bg-red-500/80 hover:bg-red-500 text-white border-0 text-sm"
              >
                <PhoneOff className="w-4 h-4 mr-1" /> End Call
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

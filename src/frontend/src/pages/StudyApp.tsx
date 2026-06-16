import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Award,
  Calendar,
  Code2,
  Flame,
  LogOut,
  Map as MapIcon,
  MessageCircle,
  Phone,
  Send,
  User,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import WhatsAppAvatar from "../components/WhatsAppAvatar";
import { useApp } from "../context/AppContext";
import { COMPANION_PRESETS } from "../data/companions";
import { useMotivationAudio } from "../hooks/useMotivationAudio";
import { useAddMessage, useProxyAIChat } from "../hooks/useQueries";
import { useResponseQueue } from "../hooks/useResponseQueue";
import { clearToken } from "../utils/jwtAuth";

const DashboardPage = lazy(() => import("./DashboardPage"));
const EventsPage = lazy(() => import("./EventsPage"));
const ProblemsPage = lazy(() => import("./ProblemsPage"));
const RoadmapPage = lazy(() => import("./RoadmapPage"));

function LoadingSpinner() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

const XP_PER_LEVEL = 100;

const FRUSTRATION_KEYWORDS = [
  "stuck",
  "confused",
  "help",
  "frustrated",
  "don't understand",
  "dont understand",
  "hard",
  "difficult",
  "lost",
  "idk",
  "no idea",
];
const CS_KEYWORDS = [
  "algorithm",
  "loop",
  "function",
  "array",
  "recursion",
  "pointer",
  "class",
  "stack",
  "queue",
  "tree",
  "graph",
  "sort",
  "search",
];

const BREAK_TIPS = [
  "💧 Drink some water! Hydration boosts focus.",
  "🚶 Take a 5-min walk — your brain will thank you!",
  "👁️ Look 20 feet away for 20 seconds. Eye care matters!",
  "🧘 Take 3 deep breaths. Stress less, learn more.",
  "🍎 Grab a healthy snack to fuel your brain!",
  "✋ Stretch your hands and wrists — programmer self-care!",
  "😴 A short power nap (10 min) can reset your focus.",
  "🎵 Listen to lo-fi beats for a calm study session.",
];

const STUDY_MODULES = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: "🗄️",
    description: "Arrays, Linked Lists, Trees, Graphs, Sorting",
    difficulty: "Advanced",
    diffColor: "text-red-400 bg-red-500/10",
    topics: [
      "Arrays",
      "Linked Lists",
      "Trees",
      "Graphs",
      "Sorting",
      "Searching",
    ],
    resources: [
      {
        type: "pdf",
        label: "DS Visualization",
        url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
      },
      {
        type: "pdf",
        label: "Big-O Reference",
        url: "https://bigocheatsheet.com",
      },
      {
        type: "video",
        label: "Arrays & Linked Lists",
        url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
      },
      {
        type: "video",
        label: "Trees & Graphs",
        url: "https://www.youtube.com/watch?v=JeznW_7DlB0",
      },
    ],
    quiz: [
      {
        q: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correct: 1,
      },
      {
        q: "Which data structure uses LIFO ordering?",
        options: ["Queue", "Array", "Stack", "Graph"],
        correct: 2,
      },
      {
        q: "What is the worst-case time complexity of quicksort?",
        options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"],
        correct: 1,
      },
      {
        q: "A binary tree has a maximum of how many children per node?",
        options: ["1", "2", "3", "4"],
        correct: 1,
      },
      {
        q: "Which sorting algorithm has O(n log n) average case?",
        options: [
          "Bubble Sort",
          "Insertion Sort",
          "Merge Sort",
          "Selection Sort",
        ],
        correct: 2,
      },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    icon: "🌐",
    description: "HTML, CSS, JavaScript, React, APIs",
    difficulty: "Intermediate",
    diffColor: "text-amber-400 bg-amber-500/10",
    topics: ["HTML5", "CSS3", "JavaScript ES6+", "React", "REST APIs"],
    resources: [
      {
        type: "pdf",
        label: "JS Cheat Sheet",
        url: "https://htmlcheatsheet.com/js/",
      },
      {
        type: "video",
        label: "JavaScript Full Course",
        url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
      {
        type: "video",
        label: "React Crash Course",
        url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
      },
    ],
    quiz: [
      {
        q: "Which HTML tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<heading>", "<header>"],
        correct: 1,
      },
      {
        q: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style System",
          "Colorful Style Sheets",
        ],
        correct: 1,
      },
      {
        q: "Which method adds an element to the end of an array in JS?",
        options: ["push()", "pop()", "shift()", "append()"],
        correct: 0,
      },
      {
        q: "What is JSX in React?",
        options: [
          "A JS library",
          "A database query language",
          "A syntax extension for JS",
          "A CSS preprocessor",
        ],
        correct: 2,
      },
      {
        q: "What HTTP method is used to fetch data from a server?",
        options: ["POST", "DELETE", "PUT", "GET"],
        correct: 3,
      },
    ],
  },
  {
    id: "python",
    title: "Python Programming",
    icon: "🐍",
    description: "Basics, OOP, Data Science, Flask",
    difficulty: "Beginner",
    diffColor: "text-green-400 bg-green-500/10",
    topics: ["Python Basics", "OOP", "NumPy/Pandas", "Flask", "Data Science"],
    resources: [
      {
        type: "pdf",
        label: "Python Cheat Sheet",
        url: "https://www.pythoncheatsheet.org/",
      },
      {
        type: "video",
        label: "Python for Beginners",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      },
      {
        type: "video",
        label: "Python OOP Tutorial",
        url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM",
      },
    ],
    quiz: [
      {
        q: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        correct: 1,
      },
      {
        q: "What is the output of print(type([]))?",
        options: ["<class 'list'>", "<class 'array'>", "list", "array"],
        correct: 0,
      },
      {
        q: "Which of these is a mutable data type in Python?",
        options: ["tuple", "string", "list", "int"],
        correct: 2,
      },
      {
        q: "What does 'self' refer to in a Python class?",
        options: [
          "The parent class",
          "The class itself",
          "The current instance",
          "A global variable",
        ],
        correct: 2,
      },
      {
        q: "Which library is used for data manipulation in Python?",
        options: ["NumPy", "Pandas", "Matplotlib", "Requests"],
        correct: 1,
      },
    ],
  },
  {
    id: "java",
    title: "Java Programming",
    icon: "☕",
    description: "OOP, Collections, Multithreading",
    difficulty: "Intermediate",
    diffColor: "text-amber-400 bg-amber-500/10",
    topics: [
      "Java Basics",
      "OOP Principles",
      "Collections",
      "Multithreading",
      "Generics",
    ],
    resources: [
      {
        type: "pdf",
        label: "Java Cheat Sheet",
        url: "https://introcs.cs.princeton.edu/java/11cheatsheet/",
      },
      {
        type: "video",
        label: "Java Full Course",
        url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
      },
    ],
    quiz: [
      {
        q: "Which keyword makes a variable constant in Java?",
        options: ["static", "const", "final", "immutable"],
        correct: 2,
      },
      {
        q: "What is the default value of an int in Java?",
        options: ["null", "undefined", "0", "-1"],
        correct: 2,
      },
      {
        q: "Which collection maintains insertion order in Java?",
        options: ["HashSet", "TreeSet", "LinkedList", "HashMap"],
        correct: 2,
      },
      {
        q: "What is method overloading?",
        options: [
          "Same name, different parameters",
          "Same name, same parameters",
          "Different class, same method",
          "Overriding parent method",
        ],
        correct: 0,
      },
      {
        q: "Which Java keyword is used for inheritance?",
        options: ["inherits", "extends", "implements", "super"],
        correct: 1,
      },
    ],
  },
];

interface ModuleQuizState {
  moduleId: string;
  currentQ: number;
  selected: number | null;
  answered: boolean;
  score: number;
  finished: boolean;
}

const TypingIndicator = ({ companionImg }: { companionImg: string }) => (
  <div className="flex items-end gap-3 slide-in-up">
    <img
      src={companionImg}
      alt="companion"
      className="w-8 h-8 rounded-full object-cover shrink-0"
    />
    <div className="bg-card border border-border rounded-2xl px-4 py-3">
      <div className="flex gap-1.5 items-center">
        <span className="typing-dot w-2 h-2 rounded-full bg-primary/60" />
        <span className="typing-dot w-2 h-2 rounded-full bg-primary/60" />
        <span className="typing-dot w-2 h-2 rounded-full bg-primary/60" />
        <span className="text-xs text-muted-foreground ml-1">thinking...</span>
      </div>
    </div>
  </div>
);

type BottomTab = "chat" | "modules" | "events" | "problems" | "dashboard";

const COMPANION_COLORS: Record<string, { bubble: string; border: string }> = {
  sakura: {
    bubble: "bg-pink-100 text-pink-900 border-pink-200",
    border: "border-pink-300",
  },
  nova: {
    bubble: "bg-purple-100 text-purple-900 border-purple-200",
    border: "border-purple-300",
  },
  zen: {
    bubble: "bg-teal-100 text-teal-900 border-teal-200",
    border: "border-teal-300",
  },
  ember: {
    bubble: "bg-orange-100 text-orange-900 border-orange-200",
    border: "border-orange-300",
  },
  kai: {
    bubble: "bg-blue-100 text-blue-900 border-blue-200",
    border: "border-blue-300",
  },
  ryu: {
    bubble: "bg-green-100 text-green-900 border-green-200",
    border: "border-green-300",
  },
  arjun: {
    bubble: "bg-indigo-100 text-indigo-900 border-indigo-200",
    border: "border-indigo-300",
  },
};

function fuzzyMatch(
  input: string,
  keywords: string[],
  threshold = 0.6,
): boolean {
  const inputWords = new Set(
    input
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 2),
  );
  if (inputWords.size === 0) return false;
  for (const kw of keywords) {
    const kwWords = new Set(
      kw
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 2),
    );
    if (kwWords.size === 0) continue;
    if (kwWords.size <= 1) {
      if (input.toLowerCase().includes(kw.toLowerCase())) return true;
      continue;
    }
    const intersection = [...kwWords].filter((w) => inputWords.has(w));
    const ratio = intersection.length / kwWords.size;
    if (ratio >= threshold) return true;
  }
  return false;
}

export default function StudyApp() {
  const {
    user,
    setUser,
    setPage,
    messages,
    addMessage,
    setShowLoveCall,
    frustrationCount,
    setFrustrationCount,
    xpFlash,
    setXpFlash,
    focusModeEnabled,
  } = useApp();
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [burnoutMode, setBurnoutMode] = useState(false);
  const [activeTab, setActiveTab] = useState<BottomTab>("chat");
  const [breakTipIdx, setBreakTipIdx] = useState(0);
  const [conversationHistory, setConversationHistory] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [moduleQuiz, setModuleQuiz] = useState<ModuleQuizState | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const addMessageMutation = useAddMessage();
  const proxyAIChat = useProxyAIChat();
  const pick = useResponseQueue();

  // Motivation audio: speaks on load, every 60 min, and on page close
  useMotivationAudio();

  const preset =
    COMPANION_PRESETS.find((p) => p.personality === user.personality) ??
    COMPANION_PRESETS[0];
  const companionImage = user.companionCustomPhoto || preset.image;
  const xpProgress = ((user.xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100;
  const level = Math.floor(user.xp / XP_PER_LEVEL) + 1;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setBreakTipIdx((prev) => (prev + 1) % BREAK_TIPS.length);
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const awayStartRef = useRef<number | null>(null);
  useEffect(() => {
    if (!focusModeEnabled) return;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        awayStartRef.current = Date.now();
      } else {
        const away = awayStartRef.current;
        if (away && Date.now() - away > 30000) {
          addMessage({
            role: "companion",
            text: "Hey! 👀 I noticed you were away for a bit~ Come back, let's focus! 💪",
          });
        }
        awayStartRef.current = null;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [focusModeEnabled, addMessage]);

  const generateResponse = useCallback(
    (text: string): string => {
      const lower = text.toLowerCase().trim();
      const greetingWords = [
        "hi",
        "hello",
        "hey",
        "sup",
        "what's up",
        "whats up",
        "yo",
        "hii",
        "hiii",
        "heya",
        "howdy",
      ];
      const isGreeting = greetingWords.some(
        (g) =>
          lower === g ||
          lower.startsWith(`${g} `) ||
          lower.startsWith(`${g}!`) ||
          lower.startsWith(`${g},`),
      );
      if (isGreeting) {
        const greetingReplies: Record<string, string[]> = {
          sakura: [
            "Hi there! 💕 What's going on?",
            "Hey! 🌸 How are you feeling today?",
            "Hiiii! 😊 What's up with you?",
          ],
          nova: [
            "Hello! ⚡ What's on your mind?",
            "Hey! What's going on?",
            "Hi! Ready to learn something cool?",
          ],
          zen: [
            "Hey... What's up?",
            "Hello. What's going on today?",
            "Hi. How are you holding up?",
          ],
          ember: [
            "HI HI HI! 🔥 What's going on??",
            "HEYYY! What's up!!",
            "Omg hi! What's happening?",
          ],
          kai: [
            "Hey. What's up?",
            "Hi. What's going on?",
            "Hello. How can I help?",
          ],
          ryu: [
            "Yo! What's good?",
            "Heyyy! What's up?",
            "Sup! What's going on?",
          ],
          arjun: [
            "Hello! What's going on?",
            "Hi there. How are you doing?",
            "Hey! What can I help you with?",
          ],
        };
        const compReplies =
          greetingReplies[user.personality] ?? greetingReplies.sakura;
        return compReplies[Math.floor(Math.random() * compReplies.length)];
      }
      for (const kw of CS_KEYWORDS) {
        if (lower.includes(kw) && preset.csKeywordResponses[kw])
          return preset.csKeywordResponses[kw];
      }
      const conversationTopics: Array<{
        keywords: string[];
        responses: string[];
      }> = [
        {
          keywords: [
            "your name",
            "what's your name",
            "whats your name",
            "who are you",
          ],
          responses: [
            `My name is ${user.companionName}! Nice to meet you! 😊`,
            `I'm ${user.companionName}, your study companion! What's yours?`,
            `${user.companionName} here! Ready to study together?`,
          ],
        },
        {
          keywords: ["study", "studying", "what are you studying"],
          responses: [
            "I'm here to help you study Computer Science! What topic are you working on? 💻",
            "We're studying CS together! It's going great, right? 📚",
            "Computer Science is our thing! Any specific topic you want to explore?",
          ],
        },
        {
          keywords: ["tired", "sleepy", "exhausted", "bored"],
          responses: [
            "Take a short break! A 5-minute walk can refresh your mind completely. 🌿",
            "It's okay to feel tired. Rest is part of the process! Come back when ready. 💙",
            "Even small progress counts! Maybe start with something easy to build momentum?",
          ],
        },
        {
          keywords: ["motivation", "motivated", "give up", "why study"],
          responses: [
            "Remember why you started! Every line of code brings you closer to your dream. 🔥",
            "You're building skills that will change your life! Keep going! 💪",
            "Hard days are just stepping stones. You've got this! 🚀",
          ],
        },
        {
          keywords: ["debug", "debugging", "bug", "error", "not working"],
          responses: [
            "Debugging is detective work! Start by reading the error message carefully. 🔍",
            "Every bug is a chance to learn something new! What's the error saying? 🐛",
            "Try console.log or print statements first — they reveal so much! 💡",
          ],
        },
        {
          keywords: [
            "career",
            "job",
            "future",
            "placement",
            "software engineer",
          ],
          responses: [
            "The tech industry is huge and growing! Your CS skills will take you far. 🌟",
            "Stay consistent with DSA and projects — that's what companies look for! 💼",
            "Dream big! Software engineers are shaping the world right now. 🚀",
          ],
        },
      ];
      for (const topic of conversationTopics) {
        if (
          topic.keywords.some((kw) => lower.includes(kw)) ||
          fuzzyMatch(lower, topic.keywords)
        ) {
          return topic.responses[
            Math.floor(Math.random() * topic.responses.length)
          ];
        }
      }
      const isFrustrated = FRUSTRATION_KEYWORDS.some((kw) =>
        lower.includes(kw),
      );
      if (isFrustrated) {
        const newCount = frustrationCount + 1;
        setFrustrationCount(newCount);
        if (newCount >= 5) {
          setBurnoutMode(true);
          return pick(preset.burnoutResponses, `${preset.id}_burnout`);
        }
        return pick(preset.frustrationResponses, `${preset.id}_frustration`);
      }
      return pick(preset.encouragements, `${preset.id}_encouragement`);
    },
    [
      frustrationCount,
      preset,
      setFrustrationCount,
      pick,
      user.personality,
      user.companionName,
    ],
  );

  const sendMessage = useCallback(async () => {
    const text = inputText.trim();
    if (!text) return;
    setInputText("");
    addMessage({ role: "user", text });
    setIsTyping(true);
    addMessageMutation.mutate({ role: "user", text });
    const historySnapshot = conversationHistory;
    const newHistory = [
      ...historySnapshot,
      { role: "user" as const, content: text },
    ].slice(-10);
    setConversationHistory(newHistory);

    const systemPrompt = `You are ${user.companionName}, a warm and friendly AI study companion with a ${user.personality} personality. Help students study Computer Science, but also be naturally conversational. Keep responses concise (2-3 sentences). Be encouraging and supportive. Use occasional relevant emojis.`;

    try {
      const response = await proxyAIChat.mutateAsync({
        messages: [...historySnapshot, { role: "user", content: text }].slice(
          -10,
        ),
        systemPrompt,
      });
      setIsTyping(false);
      const reply = response || generateResponse(text);
      addMessage({ role: "companion", text: reply });
      addMessageMutation.mutate({ role: "companion", text: reply });
      setConversationHistory((prev) =>
        [...prev, { role: "assistant" as const, content: reply }].slice(-10),
      );
      setUser({ xp: user.xp + 2 });
      setXpFlash(2);
      setTimeout(() => setXpFlash(null), 1500);
    } catch {
      setIsTyping(false);
      const fallback = generateResponse(text);
      addMessage({ role: "companion", text: fallback });
      addMessageMutation.mutate({ role: "companion", text: fallback });
      setUser({ xp: user.xp + 2 });
      setXpFlash(2);
      setTimeout(() => setXpFlash(null), 1500);
    }
  }, [
    inputText,
    addMessage,
    addMessageMutation,
    generateResponse,
    setUser,
    setXpFlash,
    user.xp,
    user.companionName,
    user.personality,
    conversationHistory,
    proxyAIChat,
  ]);

  const greetingRef = useRef<{
    preset: typeof preset;
    addMsg: typeof addMessage;
  }>({ preset, addMsg: addMessage });
  greetingRef.current = { preset, addMsg: addMessage };
  const didGreet = useRef(false);
  useEffect(() => {
    if (!didGreet.current) {
      didGreet.current = true;
      const { preset: p, addMsg } = greetingRef.current;
      const greeting =
        p.greetings[Math.floor(Math.random() * p.greetings.length)];
      addMsg({ role: "companion", text: greeting });
    }
  }, []);

  // biome-ignore lint/correctness/noUnusedVariables: kept for potential quiz re-use
  const startModuleQuiz = (moduleId: string) => {
    setModuleQuiz({
      moduleId,
      currentQ: 0,
      selected: null,
      answered: false,
      score: 0,
      finished: false,
    });
  };

  const handleQuizAnswer = (idx: number) => {
    if (!moduleQuiz || moduleQuiz.answered) return;
    const mod = STUDY_MODULES.find((m) => m.id === moduleQuiz.moduleId);
    if (!mod) return;
    const correct = mod.quiz[moduleQuiz.currentQ].correct;
    const isCorrect = idx === correct;
    const newScore = isCorrect ? moduleQuiz.score + 1 : moduleQuiz.score;
    setModuleQuiz((prev) =>
      prev ? { ...prev, selected: idx, answered: true, score: newScore } : prev,
    );
  };

  const handleQuizNext = () => {
    if (!moduleQuiz) return;
    const mod = STUDY_MODULES.find((m) => m.id === moduleQuiz.moduleId);
    if (!mod) return;
    if (moduleQuiz.currentQ + 1 >= mod.quiz.length) {
      const xpEarned = moduleQuiz.score * 15;
      setUser({ xp: user.xp + xpEarned });
      setXpFlash(xpEarned);
      setTimeout(() => setXpFlash(null), 1500);
      setModuleQuiz((prev) => (prev ? { ...prev, finished: true } : prev));
    } else {
      setModuleQuiz((prev) =>
        prev
          ? {
              ...prev,
              currentQ: prev.currentQ + 1,
              selected: null,
              answered: false,
            }
          : prev,
      );
    }
  };

  const bottomNavItems: {
    tab: BottomTab;
    icon: React.ReactNode;
    label: string;
  }[] = [
    {
      tab: "chat",
      icon: <MessageCircle className="w-[18px] h-[18px] sm:w-5 sm:h-5" />,
      label: "Chat",
    },
    {
      tab: "modules",
      icon: <MapIcon className="w-[18px] h-[18px] sm:w-5 sm:h-5" />,
      label: "Roadmap",
    },
    {
      tab: "events",
      icon: <Calendar className="w-[18px] h-[18px] sm:w-5 sm:h-5" />,
      label: "Events",
    },
    {
      tab: "problems",
      icon: <Code2 className="w-[18px] h-[18px] sm:w-5 sm:h-5" />,
      label: "Problems",
    },
    {
      tab: "dashboard",
      icon: <User className="w-[18px] h-[18px] sm:w-5 sm:h-5" />,
      label: "Dashboard",
    },
  ];

  const handleTabClick = (tab: BottomTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-[100dvh] bg-background flex flex-col overflow-hidden">
      {/* Top bar */}
      <header className="bg-card border-b border-border px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src="/assets/generated/code-crush-logo-refined-transparent.dim_400x400.png"
            alt="Code & Crush"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover drop-shadow-md shrink-0"
          />
          <span className="font-bold text-foreground text-sm sm:text-base truncate">
            Code &amp; Crush
          </span>
          {user.avatarConfig && (
            <div className="rounded-full overflow-hidden w-7 h-7 sm:w-8 sm:h-8 border-2 border-primary/40 shrink-0">
              <WhatsAppAvatar config={user.avatarConfig} size={32} />
            </div>
          )}
          <span className="text-xs text-muted-foreground hidden sm:block bg-muted px-2 py-0.5 rounded-full shrink-0">
            🤖 AI Active
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <span className="text-sm text-muted-foreground hidden md:block">
            Hi, <strong className="text-foreground">{user.username}</strong>!
          </span>
          <Button
            data-ocid="study.call.button"
            variant="ghost"
            size="sm"
            title="Love Call"
            onClick={() => setShowLoveCall(true)}
            className="rounded-full text-primary hover:text-primary/80 w-9 h-9 p-0"
          >
            <Phone className="w-4 h-4" />
          </Button>
          <Button
            data-ocid="study.logout.button"
            variant="ghost"
            size="sm"
            onClick={() => {
              clearToken();
              localStorage.removeItem("cc_user");
              setUser({ isOnboarded: false });
              setPage("landing");
            }}
            className="rounded-full text-muted-foreground hover:text-foreground w-9 h-9 p-0"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Left Sidebar — hidden on mobile */}
        <aside className="w-56 lg:w-64 bg-card border-r border-border flex-col p-3 lg:p-4 gap-4 shrink-0 hidden md:flex overflow-y-auto">
          <div className="text-center py-3 lg:py-4">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mx-auto mb-3 ring-4 shadow-glow ${burnoutMode ? "ring-red-500" : "ring-primary"}`}
            >
              <img
                src={companionImage}
                alt={user.companionName}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h3 className="font-bold text-foreground text-sm lg:text-base">
              {user.companionName}
            </h3>
            <p className="text-xs text-muted-foreground">
              {preset.traits.split(" · ")[0]}
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-foreground flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400" /> Level {level}
              </span>
              <span className="text-xs text-muted-foreground">
                {user.xp} XP
              </span>
            </div>
            <Progress value={xpProgress} className="h-2 rounded-full" />
            <p className="text-xs text-muted-foreground mt-1 text-right">
              {XP_PER_LEVEL - (user.xp % XP_PER_LEVEL)} XP to next level
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">
                {user.streak} Day Streak
              </p>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-3">
            <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
              <Award className="w-3 h-3" /> Badges
            </p>
            {user.badges.length === 0 ? (
              <p
                className="text-xs text-muted-foreground"
                data-ocid="badges.empty_state"
              >
                Complete quizzes to earn badges! 🏆
              </p>
            ) : (
              <div className="flex flex-wrap gap-1">
                {user.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-primary/20 text-primary border border-primary/30 rounded-full px-2 py-0.5"
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-3 mt-auto">
            <p className="text-xs font-bold text-primary mb-1.5">
              💡 Break Tip
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={breakTipIdx}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-xs text-foreground leading-relaxed"
              >
                {BREAK_TIPS[breakTipIdx]}
              </motion.p>
            </AnimatePresence>
          </div>
        </aside>

        {/* Center: Main Panel */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {activeTab === "modules" && (
            <Suspense fallback={<LoadingSpinner />}>
              <RoadmapPage />
            </Suspense>
          )}
          {activeTab === "events" && (
            <Suspense fallback={<LoadingSpinner />}>
              <EventsPage />
            </Suspense>
          )}
          {activeTab === "dashboard" && (
            <Suspense fallback={<LoadingSpinner />}>
              <DashboardPage embedded />
            </Suspense>
          )}
          {activeTab === "problems" && (
            <Suspense fallback={<LoadingSpinner />}>
              <ProblemsPage
                onNavigate={(tab) => setActiveTab(tab as BottomTab)}
              />
            </Suspense>
          )}

          {/* Chat Tab */}
          {activeTab === "chat" && (
            <>
              <ScrollArea className="flex-1 px-3 sm:px-4 py-3 sm:py-5">
                <div className="space-y-3 sm:space-y-5 max-w-[700px] mx-auto pb-2">
                  {messages.length === 0 && (
                    <div
                      className="text-center py-12 sm:py-16"
                      data-ocid="chat.empty_state"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/30"
                      >
                        <img
                          src={companionImage}
                          alt={user.companionName}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                        {user.companionName}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Start a conversation! Ask me anything about CS 💻
                      </p>
                    </div>
                  )}
                  <AnimatePresence initial={false}>
                    {messages.map((msg, i) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        data-ocid={`chat.message.${i + 1}`}
                      >
                        {msg.role === "companion" ? (
                          <div className="flex items-start gap-2 sm:gap-3">
                            <img
                              src={companionImage}
                              alt="companion"
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0 mt-1"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-primary mb-1.5">
                                {user.companionName}
                              </p>
                              <div
                                className={`rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm leading-relaxed border ${COMPANION_COLORS[user.personality]?.bubble ?? "bg-card text-foreground border-border"}`}
                              >
                                {msg.text}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-end">
                            <div className="max-w-[85%] sm:max-w-[75%]">
                              <p className="text-xs text-muted-foreground text-right mb-1.5">
                                You
                              </p>
                              <div className="bg-primary/15 border border-primary/20 rounded-2xl rounded-tr-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm leading-relaxed text-foreground break-words">
                                {msg.text}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {isTyping && (
                    <TypingIndicator companionImg={companionImage} />
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* XP Flash */}
              <AnimatePresence>
                {xpFlash !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 0, scale: 0.5 }}
                    animate={{ opacity: 1, y: -40, scale: 1.2 }}
                    exit={{ opacity: 0, y: -80, scale: 0.8 }}
                    className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-extrabold text-xl px-5 py-2 rounded-full shadow-lg pointer-events-none z-40 flex items-center gap-1"
                  >
                    ⚡ +{xpFlash} XP!
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Chat Input */}
              <div className="bg-background border-t border-border p-3 sm:p-4 pb-2 shrink-0">
                <div className="max-w-[700px] mx-auto">
                  <div className="flex items-end gap-2 bg-card border border-border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:border-primary/50 transition-colors">
                    <textarea
                      data-ocid="chat.message.input"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                      placeholder={`Ask ${user.companionName} anything...`}
                      rows={1}
                      className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground resize-none outline-none text-sm leading-relaxed min-h-[24px] max-h-28"
                      style={{ scrollbarWidth: "none" }}
                    />
                    <Button
                      data-ocid="chat.send.button"
                      onClick={sendMessage}
                      disabled={!inputText.trim() || isTyping}
                      size="sm"
                      className="rounded-full w-9 h-9 p-0 bg-primary text-primary-foreground shrink-0 shadow-glow-sm"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    {user.companionName} can make mistakes. Verify important
                    info.
                  </p>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Bottom Navigation Bar — LinkedIn Style, sticky */}
      <nav
        className="bg-card border-t border-border shrink-0"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        aria-label="Main navigation"
      >
        <div className="flex items-stretch">
          {bottomNavItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                type="button"
                key={item.tab}
                data-ocid={`bottomnav.${item.tab}.button`}
                onClick={() => handleTabClick(item.tab)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex-1 flex flex-col items-center justify-center pt-1.5 pb-2 sm:pb-2.5 gap-0 sm:gap-0.5 text-[9px] sm:text-[11px] font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset min-h-[52px] min-w-0 px-0.5 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground/80"}`}
              >
                <span
                  className={`absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-b-full transition-all duration-200 ${isActive ? "w-6 sm:w-8 bg-primary" : "w-0 bg-transparent"}`}
                />
                <span
                  className={`transition-transform duration-150 ${isActive ? "scale-110" : "scale-100"} shrink-0`}
                >
                  {item.icon}
                </span>
                <span className="leading-none mt-0.5 truncate w-full text-center px-0.5">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Module Quiz Modal */}
      <AnimatePresence>
        {moduleQuiz &&
          (() => {
            const mod = STUDY_MODULES.find((m) => m.id === moduleQuiz.moduleId);
            if (!mod) return null;
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                data-ocid="modules.quiz.modal"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-card border border-border rounded-3xl p-5 sm:p-6 w-full max-w-md shadow-card-hover max-h-[90dvh] overflow-y-auto"
                >
                  {moduleQuiz.finished ? (
                    <div className="text-center">
                      <div className="text-5xl mb-3">
                        {moduleQuiz.score >= 4
                          ? "🎉"
                          : moduleQuiz.score >= 3
                            ? "👍"
                            : "💪"}
                      </div>
                      <h3 className="text-xl font-extrabold text-foreground mb-2">
                        Quiz Complete!
                      </h3>
                      <p className="text-muted-foreground mb-1">You scored</p>
                      <p className="text-4xl font-extrabold text-primary mb-4">
                        {moduleQuiz.score}/{mod.quiz.length}
                      </p>
                      <p className="text-sm text-foreground mb-6">
                        +{moduleQuiz.score * 15} XP earned!
                      </p>
                      <Button
                        data-ocid="modules.quiz.close.button"
                        onClick={() => setModuleQuiz(null)}
                        className="w-full rounded-full bg-primary text-primary-foreground font-semibold"
                      >
                        Done!
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest">
                            {mod.title}
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            Question {moduleQuiz.currentQ + 1} of{" "}
                            {mod.quiz.length}
                          </p>
                        </div>
                        <button
                          type="button"
                          data-ocid="modules.quiz.cancel.button"
                          onClick={() => setModuleQuiz(null)}
                          className="text-muted-foreground hover:text-foreground text-lg w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted"
                        >
                          ×
                        </button>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 mb-5">
                        <div
                          className="bg-primary h-1.5 rounded-full transition-all"
                          style={{
                            width: `${(moduleQuiz.currentQ / mod.quiz.length) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-foreground font-semibold text-sm leading-relaxed mb-5">
                        {mod.quiz[moduleQuiz.currentQ].q}
                      </p>
                      <div className="space-y-2 mb-4">
                        {mod.quiz[moduleQuiz.currentQ].options.map(
                          (opt, idx) => {
                            let style =
                              "border-border bg-muted text-foreground";
                            if (moduleQuiz.answered) {
                              if (idx === mod.quiz[moduleQuiz.currentQ].correct)
                                style =
                                  "border-green-500 bg-green-500/10 text-green-300";
                              else if (idx === moduleQuiz.selected)
                                style =
                                  "border-red-500 bg-red-500/10 text-red-300";
                            } else if (moduleQuiz.selected === idx) {
                              style =
                                "border-primary bg-primary/10 text-primary";
                            }
                            return (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => handleQuizAnswer(idx)}
                                disabled={moduleQuiz.answered}
                                className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all min-h-[44px] ${style}`}
                              >
                                {opt}
                              </button>
                            );
                          },
                        )}
                      </div>
                      {moduleQuiz.answered && (
                        <Button
                          data-ocid="modules.quiz.next.button"
                          onClick={handleQuizNext}
                          className="w-full rounded-full bg-primary text-primary-foreground font-semibold"
                        >
                          {moduleQuiz.currentQ + 1 >= mod.quiz.length
                            ? "See Results"
                            : "Next Question"}
                        </Button>
                      )}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </div>
  );
}

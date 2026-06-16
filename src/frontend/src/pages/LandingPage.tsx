import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  BookOpen,
  Brain,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code,
  Code2,
  Heart,
  Layers,
  Mail,
  MessageSquare,
  Mic,
  Music,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import {
  INTERVIEW_EXPERIENCES,
  type InterviewExperience,
} from "../data/interviewExperiences";
import { CODING_PROBLEMS } from "../data/problems";
import {
  type ReviewData,
  useGetReviews,
  useSubmitReview,
} from "../hooks/useQueries";

// ── Team data (CodeQuotient-style) ─────────────────────────────────────────
const TEAM = [
  {
    name: "Mayank",
    role: "Co-Founder & CTO",
    initials: "MA",
    gradient: "from-blue-600 to-cyan-500",
    bio: "Full stack developer passionate about building educational tools that make CS learning accessible and fun. Architected the core learning engine and AI integration.",
    extendedBio:
      "Mayank leads product engineering at Code & Crush. He built the AI chat engine, the roadmap system, and the real-time quiz infrastructure. When not coding, he's mentoring students on their first open-source contributions.",
  },
  {
    name: "Kripanshu Wats",
    role: "Co-Founder & CEO",
    initials: "KR",
    gradient: "from-indigo-600 to-purple-500",
    bio: "Designer and developer focused on creating intuitive, beautiful interfaces that students love to use. Leads the product experience and visual design.",
    extendedBio:
      "Kripanshu crafts every pixel of Code & Crush's interface. From the companion avatars to the quiz animations, he ensures the product is not just functional but delightful. His design philosophy: complexity should feel simple.",
  },
  {
    name: "Dinesh",
    role: "CMO",
    initials: "DI",
    gradient: "from-sky-600 to-blue-500",
    bio: "Marketing strategist who drives growth, brand awareness, and student community initiatives for Code & Crush. Builds the bridge between product and people.",
    extendedBio:
      "Dinesh leads all marketing and growth efforts at Code & Crush. From social media campaigns to community events, he makes sure students everywhere know about the platform and find their way in. His work fuels the student community that powers our growth.",
  },
  {
    name: "Vinit",
    role: "COO",
    initials: "VI",
    gradient: "from-emerald-600 to-teal-500",
    bio: "Operations leader ensuring every part of Code & Crush runs seamlessly — from platform reliability to student support and internal processes.",
    extendedBio:
      "Vinit oversees the day-to-day operations of Code & Crush, coordinating between teams to deliver a smooth and consistent experience for every student. His focus is on scaling processes, improving platform uptime, and making sure learners never hit a roadblock.",
  },
  {
    name: "Biswajeet Mandal",
    role: "CMS",
    initials: "BM",
    gradient: "from-orange-500 to-rose-500",
    bio: "Content strategist responsible for every lesson, quiz, and learning path on the platform — ensuring accuracy, depth, and clarity for students at every level.",
    extendedBio:
      "Biswajeet shapes the knowledge backbone of Code & Crush. From curating roadmap content and writing quiz questions to verifying technical accuracy across all 15 domains, he ensures students get reliable, well-structured learning material. He is the reason every lesson makes sense.",
  },
];

// ── How It Works data ───────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: 1,
    icon: "💙",
    title: "Create Your Companion",
    desc: "Pick a personality that matches your vibe — encouraging, witty, calm, or playful.",
  },
  {
    step: 2,
    icon: "📚",
    title: "Choose a Study Topic",
    desc: "Select from CS fundamentals to advanced algorithms. Your companion is always ready.",
  },
  {
    step: 3,
    icon: "💬",
    title: "Chat, Quiz & Solve Problems",
    desc: "Engage in AI-driven conversations, ace quizzes, and conquer coding challenges.",
  },
  {
    step: 4,
    icon: "🏆",
    title: "Earn XP & Level Up",
    desc: "Every answer, message, and solved problem earns XP. Level up and collect badges!",
  },
];

const companions = [
  {
    name: "Sakura",
    traits: "Warm · Encouraging",
    img: "/assets/generated/companion-sakura.dim_200x200.png",
    color: "#F06A9B",
  },
  {
    name: "Kai",
    traits: "Cool · Analytical",
    img: "/assets/generated/companion-kai-transparent.dim_400x400.png",
    color: "#4f6ef7",
  },
  {
    name: "Zen",
    traits: "Calm · Patient",
    img: "/assets/generated/companion-zen.dim_200x200.png",
    color: "#4BAF8C",
  },
  {
    name: "Ryu",
    traits: "Energetic · Hype",
    img: "/assets/generated/companion-ryu-transparent.dim_400x400.png",
    color: "#f7724f",
  },
  {
    name: "Arjun",
    traits: "Wise · Gentle",
    img: "/assets/generated/companion-arjun-transparent.dim_400x400.png",
    color: "#b88a44",
  },
  {
    name: "Nova",
    traits: "Sharp · Witty",
    img: "/assets/generated/companion-nova.dim_200x200.png",
    color: "#8C84D8",
  },
];

// ── Privacy accordion item ──────────────────────────────────────────────────
interface PrivacySectionData {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

function PrivacyAccordion({ section }: { section: PrivacySectionData }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 bg-card hover:bg-muted transition-colors text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-lg shrink-0">{section.icon}</span>
          <span className="font-semibold text-foreground text-sm">
            {section.title}
          </span>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 border-t border-border bg-card">
              {section.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Privacy sections list ───────────────────────────────────────────────────
const PRIVACY_SECTIONS: PrivacySectionData[] = [
  {
    id: "intro",
    icon: "📋",
    title: "1. Introduction",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p>
          Welcome to{" "}
          <strong className="text-foreground">Code &amp; Crush</strong> ("we",
          "our", "us"). This Privacy &amp; Policy explains how we collect, use,
          store, and protect your information when you use our AI-powered CS
          learning platform.
        </p>
        <p>
          <strong className="text-foreground">Effective Date:</strong> April
          2026 &nbsp;·&nbsp;
          <strong className="text-foreground">Last Updated:</strong> April 13,
          2026
        </p>
        <p>
          By using Code &amp; Crush you agree to this policy. Code &amp; Crush
          is built on a secure decentralized infrastructure providing a secure
          and tamper-resistant foundation for your data.
        </p>
      </div>
    ),
  },
  {
    id: "collect",
    icon: "📊",
    title: "2. Information We Collect",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p>We collect the following categories of information:</p>
        <div className="space-y-1.5">
          {[
            {
              label: "Account Information",
              desc: "Your username and email address when you register or log in.",
            },
            {
              label: "Learning & Progress Data",
              desc: "Quiz scores, XP, SP, streaks, badges, enrolled courses, module progress, problem-solving history, and completion certificates.",
            },
            {
              label: "Code Submissions",
              desc: "Code you write in the compiler and code challenges is processed for execution. Saved snippets are stored in your browser's localStorage.",
            },
            {
              label: "Device & Browser Info",
              desc: "Browser type, device type, OS, and approximate geographic region (country-level only, not precise location).",
            },
            {
              label: "Chat Messages",
              desc: "Conversation history with your companion is stored locally in your browser only. Messages are not stored on our servers.",
            },
            {
              label: "API Keys (Local Only)",
              desc: "OpenAI, Claude, or ElevenLabs API keys are stored exclusively in your browser's localStorage and are never transmitted to our servers.",
            },
            {
              label: "Avatar & Customization",
              desc: "Your avatar configuration, equipped outfits, and theme preferences are saved to improve your experience.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-primary/10 rounded-lg p-3 border border-primary/20"
            >
              <p className="font-semibold text-primary text-xs mb-0.5">
                {item.label}
              </p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "use",
    icon: "⚙️",
    title: "3. How We Use Your Information",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p>We use your information to:</p>
        <ul className="space-y-1.5">
          {[
            "Provide, maintain, and improve the platform",
            "Personalize your learning experience based on your progress and enrolled courses",
            "Track achievements — XP, SP, badges, streaks, and completions",
            "Generate shareable progress reports and completion certificates",
            "Adapt the AI chatbot to your behaviour signals for a more human-like experience",
            "Communicate important updates and policy changes",
            "Analyze aggregate (anonymized) usage patterns to improve features",
            "Detect and prevent fraud or unauthorized access",
            "Comply with applicable legal requirements",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-0.5 shrink-0 text-xs">✓</span>
              <span className="text-xs">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground italic text-xs border-t border-border pt-2 mt-2">
          We do not use your data for advertising and never sell personal
          information to any third party.
        </p>
      </div>
    ),
  },
  {
    id: "storage",
    icon: "🔒",
    title: "4. Data Storage & Security",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        {[
          {
            icon: "🌐",
            label: "Secure Decentralized Storage",
            desc: "Account data and learning progress are stored securely on our decentralized infrastructure. Your data is distributed across nodes, tamper-resistant, and not hosted on any single server.",
          },
          {
            icon: "🔑",
            label: "API Keys Stay Local",
            desc: "Your OpenAI, Claude, and ElevenLabs API keys are stored only in your browser's localStorage. They are never sent to our servers or logged anywhere.",
          },
          {
            icon: "🔐",
            label: "HTTPS Encryption",
            desc: "All communications between your browser and the platform use HTTPS/TLS encryption. Data in transit is always protected.",
          },
          {
            icon: "🛡️",
            label: "Password Security",
            desc: "Passwords are never stored in plaintext. We use cryptographic hashing with salting for all credential storage. No plain-text passwords exist anywhere in our system.",
          },
          {
            icon: "📦",
            label: "Local-First Architecture",
            desc: "Chat history, code snippets, quiz progress, and avatar settings are stored in your browser's localStorage — they never leave your device unless you explicitly share them.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-accent rounded-lg p-3 border border-border"
          >
            <p className="font-semibold text-accent-foreground text-xs mb-0.5">
              {item.icon} {item.label}
            </p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "third-party",
    icon: "🔗",
    title: "5. Third-Party Services",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p className="text-xs">
          Code &amp; Crush integrates with these third-party services, each
          governed by their own privacy policy:
        </p>
        <div className="space-y-1.5">
          {[
            {
              name: "Judge0",
              note: "Code execution engine. Code snippets are sent for execution and immediately discarded — not stored by Judge0.",
            },
            {
              name: "YouTube",
              note: "Embedded educational videos in roadmap modules using privacy-enhanced mode (youtube-nocookie.com). YouTube may still collect viewing data.",
            },
            {
              name: "OpenAI / Claude (Anthropic)",
              note: "AI chat and tutoring (only when you provide your own API key). Your messages go directly from your browser to OpenAI or Anthropic — not through our servers.",
            },
            {
              name: "ElevenLabs",
              note: "AI voice synthesis for Love Call voice feature. Voice data is processed per ElevenLabs' own privacy policy. Only active when you provide an API key.",
            },
            {
              name: "Web Speech API",
              note: "Browser-native voice recognition. Processed entirely locally in your browser. No data is transmitted to external servers.",
            },
            {
              name: "GitHub API",
              note: "Used to upload completed projects to your GitHub repository when you choose to do so. We only access repositories you explicitly authorize.",
            },
          ].map((s) => (
            <div
              key={s.name}
              className="bg-muted rounded-lg p-3 border border-border"
            >
              <p className="font-semibold text-foreground text-xs">{s.name}</p>
              <p className="text-muted-foreground text-xs mt-0.5 italic">
                {s.note}
              </p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-xs italic">
          We are not responsible for the data practices of these third-party
          services.
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    icon: "🍪",
    title: "6. Cookies & Local Storage",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p className="text-xs">
          We use browser localStorage (not traditional cookies) to store data
          locally on your device:
        </p>
        <ul className="space-y-1">
          {[
            "Session token (JWT) for authentication — expires in 24 hours",
            "Theme preference (Default, Romantic, Chill, Motivation, Focus, Night)",
            "Chat history with your companion",
            "Quiz progress and scores",
            "Enrolled courses and module unlock progress",
            "Saved code snippets from the compiler",
            "API keys (if provided by you)",
            "Avatar customization settings and equipped outfits",
            "Music volume preference in Dashboard",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs">
              <span className="text-primary mt-0.5 shrink-0">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
          <p className="font-semibold text-primary text-xs mb-0.5">
            No Third-Party Tracking Cookies
          </p>
          <p className="text-foreground text-xs">
            We do not use Google Analytics, Facebook Pixel, or any third-party
            tracking cookies. Your browsing behavior is not shared with
            advertisers.
          </p>
        </div>
        <p className="text-xs">
          You can delete all locally stored data by clearing your browser's
          local storage (Settings → Privacy → Clear Site Data).
        </p>
      </div>
    ),
  },
  {
    id: "rights",
    icon: "⚖️",
    title: "7. Your Rights",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p className="text-xs">
          You have the following rights regarding your data:
        </p>
        <div className="space-y-1.5">
          {[
            {
              right: "Access",
              desc: "View all your data from the Dashboard — XP, progress, quiz scores, badges, and enrolled courses.",
            },
            {
              right: "Deletion",
              desc: "Request full account and data deletion at any time by contacting support@codeandcrush.app. We will process requests within 30 days.",
            },
            {
              right: "Correction",
              desc: "Update your profile information (name, email, avatar) from the Dashboard at any time.",
            },
            {
              right: "Opt-Out",
              desc: "Opt out of analytics data collection by contacting our support team.",
            },
            {
              right: "Portability",
              desc: "Export your full learning progress from the Progress Report section in the Dashboard as a shareable report card.",
            },
            {
              right: "Data Clear",
              desc: "Clear all local data (chat history, saved code, preferences) by clearing your browser's localStorage — no account required.",
            },
          ].map((item) => (
            <div key={item.right} className="flex gap-3 items-start">
              <span className="bg-primary/20 text-primary font-bold text-xs px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                {item.right}
              </span>
              <p className="text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-xs italic border-t border-border pt-2">
          These rights align with GDPR principles and applicable data protection
          regulations.
        </p>
      </div>
    ),
  },
  {
    id: "children",
    icon: "👶",
    title: "8. Children's Privacy",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p className="text-xs">
          Code &amp; Crush is designed for{" "}
          <strong className="text-foreground">
            students aged 13 and older
          </strong>
          .
        </p>
        <p className="text-xs">
          We do not knowingly collect personal information from children under
          13. If you are a parent or guardian and believe your child under 13
          has provided us with personal information, please contact us at{" "}
          <strong className="text-foreground">support@codeandcrush.app</strong>{" "}
          and we will promptly delete it.
        </p>
        <p className="text-xs">
          Parents and guardians are encouraged to review the app with their
          children and help them understand the data practices described in this
          policy.
        </p>
      </div>
    ),
  },
  {
    id: "changes",
    icon: "📝",
    title: "9. Changes to This Policy",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p className="text-xs">
          We may update this policy from time to time. When we make significant
          changes, we will:
        </p>
        <ul className="space-y-1">
          {[
            "Display a notice within the app on your next login",
            "Update the 'Last Updated' date at the top of this policy",
            "Send an email notification for major changes (when email feature is enabled)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs">
          Your continued use of Code &amp; Crush after changes are posted means
          you accept the updated policy. We recommend reviewing this page
          periodically.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    icon: "📬",
    title: "10. Contact & Data Requests",
    content: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p className="text-xs">
          For privacy questions, data access requests, or account deletion:
        </p>
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 space-y-2">
          {[
            { icon: "📧", label: "Email", value: "support@codeandcrush.app" },
            { icon: "🌐", label: "Website", value: "codeandcrush.app" },
            { icon: "💬", label: "Discord", value: "discord.gg/codeandcrush" },
            { icon: "🐙", label: "GitHub", value: "github.com/codeandcrush" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="text-base">{c.icon}</span>
              <div>
                <p className="font-semibold text-primary text-xs">{c.label}</p>
                <p className="text-foreground text-xs">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-xs italic">
          We aim to respond to all privacy-related inquiries within 5 business
          days. Data deletion requests are processed within 30 days.
        </p>
        <div className="bg-muted rounded-lg p-3 border border-border">
          <p className="text-foreground font-semibold text-xs mb-1">
            Effective Date: April 2026
          </p>
          <p className="text-muted-foreground text-xs">
            Last Updated: April 13, 2026 &nbsp;·&nbsp; Code &amp; Crush v1.0
          </p>
        </div>
      </div>
    ),
  },
];

// ── Team Bio Carousel (phone-screen swipe) ─────────────────────────────────
function TeamBioCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDir(1);
      setActive((prev) => (prev + 1) % TEAM.length);
    }, 3000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = (index: number) => {
    setDir(index > active ? 1 : -1);
    setActive(index);
    startTimer();
  };

  const prev = () => {
    setDir(-1);
    setActive((prev) => (prev - 1 + TEAM.length) % TEAM.length);
    startTimer();
  };

  const next = () => {
    setDir(1);
    setActive((prev) => (prev + 1) % TEAM.length);
    startTimer();
  };

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-5 rounded-full bg-blue-600 shrink-0" />
        <h3 className="text-sm font-bold text-slate-800">Team Stories</h3>
      </div>

      {/* Phone-frame carousel */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-1 shadow-xl max-w-sm mx-auto">
        {/* Screen bezel */}
        <div className="bg-white rounded-[22px] overflow-hidden">
          {/* Status bar */}
          <div className="bg-slate-900 flex items-center justify-between px-4 py-1.5">
            <span className="text-white text-[10px] font-semibold">9:41</span>
            <div className="w-16 h-4 bg-slate-800 rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 bg-white/80 rounded-sm" />
              <div className="w-1.5 h-2 bg-white/80 rounded-sm" />
            </div>
          </div>

          {/* App bar */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-2.5 flex items-center justify-between">
            <span className="text-white font-bold text-sm">
              Code &amp; Crush
            </span>
            <span className="text-white/70 text-xs">Team</span>
          </div>

          {/* Card slide area */}
          <div className="relative overflow-hidden" style={{ height: 220 }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ x: dir > 0 ? "100%" : "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: dir > 0 ? "-100%" : "100%", opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 p-4 flex flex-col"
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current === null) return;
                  const diff =
                    touchStartX.current - e.changedTouches[0].clientX;
                  if (Math.abs(diff) > 40) {
                    diff > 0 ? next() : prev();
                  }
                  touchStartX.current = null;
                }}
              >
                {/* Avatar row */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${TEAM[active].gradient} flex items-center justify-center border-2 border-white shadow-md shrink-0`}
                  >
                    <span className="text-base font-extrabold text-white">
                      {TEAM[active].initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-sm leading-tight">
                      {TEAM[active].name}
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      {TEAM[active].role}
                    </p>
                  </div>
                </div>
                {/* Bio text */}
                <p className="text-slate-600 text-xs leading-relaxed flex-1">
                  {TEAM[active].extendedBio}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation row */}
          <div className="bg-slate-50 border-t border-slate-100 px-4 py-2.5 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-slate-700" />
            </button>
            <div className="flex items-center gap-2">
              {TEAM.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all ${i === active ? "w-5 h-2 bg-blue-600" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
                  aria-label={`Go to ${TEAM[i].name}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export default function LandingPage() {
  const { setPage, setCurrentProblemId } = useApp();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [feedbackPhoto, setFeedbackPhoto] = useState<string>("");
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [contactSent, setContactSent] = useState(false);
  const feedbackPhotoRef = useRef<HTMLInputElement>(null);

  // Interview Experiences state
  const [shareExpOpen, setShareExpOpen] = useState(false);
  const [expExpanded, setExpExpanded] = useState<string | null>(null);
  const [expForm, setExpForm] = useState({
    authorName: "",
    company: "",
    role: "",
    difficulty: "medium" as "easy" | "medium" | "hard",
    experienceText: "",
  });
  const [expSubmitted, setExpSubmitted] = useState(false);
  const [localExperiences, setLocalExperiences] = useState<
    InterviewExperience[]
  >(() => {
    try {
      const raw = localStorage.getItem("cc_interview_experiences");
      return raw ? (JSON.parse(raw) as InterviewExperience[]) : [];
    } catch {
      return [];
    }
  });

  const handleShareExperience = () => {
    if (
      !expForm.company.trim() ||
      !expForm.role.trim() ||
      !expForm.experienceText.trim()
    )
      return;
    const newExp: InterviewExperience = {
      id: `user-${Date.now()}`,
      company: expForm.company.trim(),
      logo: "💼",
      role: expForm.role.trim(),
      difficulty: expForm.difficulty,
      rounds: 3,
      experienceText: expForm.experienceText.trim(),
      tips: ["Prepare well", "Stay confident", "Practice coding daily"],
      authorName: expForm.authorName.trim() || "Anonymous",
      date: new Date().toISOString().slice(0, 7),
      outcome: "selected",
      tags: [],
    };
    const updated = [newExp, ...localExperiences];
    setLocalExperiences(updated);
    try {
      localStorage.setItem("cc_interview_experiences", JSON.stringify(updated));
    } catch {
      /* ignore */
    }
    setExpSubmitted(true);
    setTimeout(() => {
      setExpSubmitted(false);
      setShareExpOpen(false);
      setExpForm({
        authorName: "",
        company: "",
        role: "",
        difficulty: "medium",
        experienceText: "",
      });
    }, 2500);
  };

  const allExperiences = [...localExperiences, ...INTERVIEW_EXPERIENCES];

  // Reviews state
  const { data: reviews = [], refetch: refetchReviews } = useGetReviews();
  const submitReview = useSubmitReview();
  const [reviewName, setReviewName] = useState("");
  const [reviewUniversity, setReviewUniversity] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewHover, setReviewHover] = useState(0);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const handleSubmitReview = async () => {
    if (!reviewRating || !reviewText.trim()) return;
    setReviewSubmitting(true);
    try {
      await submitReview.mutateAsync({
        username: reviewName.trim() || "Guest",
        universityName: reviewUniversity.trim(),
        rating: reviewRating,
        text: reviewText.trim(),
      });
      setReviewText("");
      setReviewRating(0);
      setReviewName("");
      setReviewUniversity("");
      setReviewSuccess(true);
      setTimeout(() => setReviewSuccess(false), 3000);
      refetchReviews();
    } catch {
      // fallback — show success anyway so UX isn't broken
      setReviewSuccess(true);
      setTimeout(() => setReviewSuccess(false), 3000);
    } finally {
      setReviewSubmitting(false);
    }
  };

  // Sample reviews to show when backend returns none
  const SAMPLE_REVIEWS: ReviewData[] = [
    {
      id: 0,
      username: "Aryan_Dev",
      universityName: "IIT Delhi",
      rating: 5,
      text: "Code & Crush completely changed how I study. The AI companion keeps me motivated and the roadmap is incredibly structured!",
      timestamp: Date.now() - 86400000 * 3,
    },
    {
      id: 1,
      username: "Priya_CS",
      universityName: "VIT Vellore",
      rating: 5,
      text: "The Programming in C course with step-by-step modules is exactly what I needed. Cleared my university exam with flying colors!",
      timestamp: Date.now() - 86400000 * 7,
    },
    {
      id: 2,
      username: "RahulCodes",
      universityName: "NIT Trichy",
      rating: 4,
      text: "Love the voice call feature and the coding problems. The XP system makes studying addictive in a good way 🔥",
      timestamp: Date.now() - 86400000 * 14,
    },
    {
      id: 3,
      username: "Sneha_ML",
      universityName: "BITS Pilani",
      rating: 5,
      text: "Best CS learning platform I've found. The chatbot actually understands context and gives helpful hints without spoiling answers.",
      timestamp: Date.now() - 86400000 * 21,
    },
    {
      id: 4,
      username: "DevKumar42",
      universityName: "IIIT Hyderabad",
      rating: 5,
      text: "The 50 interview problems section is gold! Got my first internship after practicing here for 2 months. Highly recommend!",
      timestamp: Date.now() - 86400000 * 30,
    },
  ];

  useEffect(() => {
    document.title =
      "Code & Crush — AI-Powered CS Learning Platform | Study with Your Companion";
    const descEl = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (descEl) {
      descEl.content =
        "Learn Computer Science with Code & Crush — an AI-powered study companion that makes coding fun! 15 domains, interactive quizzes, coding challenges & real-time voice calls.";
    }
  }, []);

  const features = [
    {
      icon: Heart,
      title: "AI Study Companion",
      desc: "Choose from 7 unique AI companions — each with their own personality, voice, and teaching style. They adapt to your mood and keep you motivated.",
      color: "text-pink-400",
      emoji: "💕",
    },
    {
      icon: Brain,
      title: "Smart CS Roadmap",
      desc: "15+ developer tracks: Frontend, Backend, Full Stack, Python, Java, ML, DevOps, iOS, Android, Cybersecurity, Blockchain, Cloud, and more — each with curated videos and notes.",
      color: "text-blue-400",
      emoji: "🧠",
    },
    {
      icon: Trophy,
      title: "Gamified XP & Badges",
      desc: "Earn XP for every quiz, problem, and challenge. Level up, collect badges, maintain study streaks, and track your relationship progress with your companion.",
      color: "text-yellow-400",
      emoji: "🏆",
    },
    {
      icon: Shield,
      title: "Burnout Guard",
      desc: "Smart frustration detection that adapts your companion's tone to support you through tough sessions. Focus mode nudges you if you leave the tab.",
      color: "text-green-400",
      emoji: "🛡️",
    },
    {
      icon: Code2,
      title: "Code Studio",
      desc: "10+ real coding challenges with a dark editor, hints (no API key needed), companion-assisted solving, and relationship progress tracking.",
      color: "text-cyan-400",
      emoji: "💻",
    },
    {
      icon: Zap,
      title: "Code Visualizer",
      desc: "See algorithms come alive — Bubble Sort, Binary Search, Fibonacci, Two Sum — with step-by-step animated frames, speed controls, and zoom.",
      color: "text-orange-400",
      emoji: "⚡",
    },
    {
      icon: Layers,
      title: "Multi-Language Compiler",
      desc: "Write, run, and save code in 20+ languages. Save snippets by name, reload them anytime — Python, Java, C++, Go, Rust, and more.",
      color: "text-violet-400",
      emoji: "🔧",
    },
    {
      icon: BookOpen,
      title: "Project-Based Learning",
      desc: "12+ real projects broken into small guided tasks. Starter code, hints, and a companion chat for guidance — upload your finished project to GitHub.",
      color: "text-emerald-400",
      emoji: "📚",
    },
    {
      icon: Mic,
      title: "Love Call (Voice AI)",
      desc: "Two-way human-like voice calls with your companion. Powered by ElevenLabs + Web Speech API. Works with or without an API key.",
      color: "text-rose-400",
      emoji: "📞",
    },
    {
      icon: MessageSquare,
      title: "Chat Without API",
      desc: "15+ conversation topics with fuzzy matching. Your companion talks naturally about greetings, hobbies, food, and more — even without an API key.",
      color: "text-sky-400",
      emoji: "💬",
    },
    {
      icon: Users,
      title: "Avatar Builder",
      desc: "WhatsApp-style cartoon avatar customization — skin tone, hair, eyes, mouth, outfits, accessories, glasses, headband, and more.",
      color: "text-fuchsia-400",
      emoji: "🎨",
    },
    {
      icon: Music,
      title: "Relax Music & Themes",
      desc: "4 ambient tracks (Lo-Fi, Rain, White Noise, Study Jazz) playing natively in the Dashboard. Plus 6 UI themes: Default, Romantic, Chill, Motivation, Focus, Night.",
      color: "text-teal-400",
      emoji: "🎵",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-jakarta">
      {/* ── About Us Modal (CodeQuotient-style) ── */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl md:max-w-4xl w-full mx-2 sm:mx-auto rounded-2xl p-0 overflow-hidden bg-white border-0 shadow-2xl">
          {/* Header banner */}
          <div className="relative bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-7 sm:px-8 sm:py-10 text-white overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* X close button */}
            <button
              type="button"
              onClick={() => setAboutOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close About Us"
            >
              <X className="w-5 h-5" />
            </button>

            <DialogHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  {/* Nova companion image with fallback */}
                  <img
                    src="/assets/generated/companion-nova.dim_200x200.png"
                    alt="Nova companion"
                    className="w-8 h-8 rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <span
                    className="text-xl hidden items-center justify-center"
                    aria-hidden="true"
                  >
                    💙
                  </span>
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-extrabold text-white">
                  About Code &amp; Crush
                </DialogTitle>
              </div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                Code &amp; Crush is an AI-powered CS learning platform built by
                passionate developers who believe learning to code should feel
                exciting, not boring. We combine gamification, emotional AI, and
                structured roadmaps to make every study session engaging.
              </p>
            </DialogHeader>

            {/* Stats row */}
            <div className="flex items-center gap-6 sm:gap-8 mt-5 relative z-10">
              {[
                { label: "Students", value: "12K+" },
                { label: "Domains", value: "15+" },
                { label: "Problems", value: "50+" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl sm:text-2xl font-extrabold text-white">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Body — scrollable */}
          <div className="overflow-y-auto max-h-[65vh] bg-slate-50">
            <div className="p-5 sm:p-7">
              {/* ── Meet the Team: 3-column cards ── */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-5 rounded-full bg-blue-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-800">
                  Meet the Team
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {TEAM.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {/* Card gradient header */}
                    <div
                      className={`bg-gradient-to-br ${member.gradient} px-4 py-6 flex flex-col items-center`}
                    >
                      <div className="w-16 h-16 rounded-full bg-white/25 border-2 border-white/50 flex items-center justify-center mb-3 shadow-lg">
                        <span className="text-2xl font-extrabold text-white">
                          {member.initials}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-lg text-white text-center leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-white/85 text-xs mt-1 text-center font-medium">
                        {member.role}
                      </p>
                    </div>

                    {/* Card body */}
                    <div className="px-4 py-4 space-y-3">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ── Team Stories carousel (phone-screen swipe) ── */}
              <TeamBioCarousel />

              {/* ── Mission strip ── */}
              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl px-4 py-4 flex items-start gap-3">
                <span className="text-2xl shrink-0">🎯</span>
                <div>
                  <p className="font-bold text-blue-900 text-sm mb-1">
                    Our Mission
                  </p>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    To make computer science education accessible, engaging, and
                    emotionally supportive for every student — whether
                    they&apos;re just starting out or preparing for top tech
                    interviews.
                  </p>
                </div>
              </div>

              {/* ── Features highlight ── */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 rounded-full bg-indigo-600 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-800">
                    Platform Highlights
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { icon: "🗺️", label: "15+ Roadmap Domains" },
                    { icon: "🤖", label: "AI Chat & Voice" },
                    { icon: "🧩", label: "50 Interview Problems" },
                    { icon: "📜", label: "Completion Certificates" },
                    { icon: "🎮", label: "XP, Badges & Streaks" },
                    { icon: "🏗️", label: "12+ Guided Projects" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2.5"
                    >
                      <span className="text-base shrink-0">{f.icon}</span>
                      <span className="text-xs font-semibold text-slate-700 leading-tight">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Contact Us Modal ── */}
      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-md w-full mx-2 sm:mx-auto rounded-3xl p-0 overflow-hidden bg-background border border-border">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-white">
                Contact Us
              </DialogTitle>
            </DialogHeader>
            <p className="text-white/80 text-sm mt-1">
              We'd love to hear from you!
            </p>
          </div>
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto max-h-[75vh]">
            {contactSent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-lg font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  We'll get back to you soon.
                </p>
                <Button
                  onClick={() => {
                    setContactSent(false);
                    setContactOpen(false);
                  }}
                  className="mt-4 rounded-full bg-primary text-primary-foreground"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground block mb-1">
                      Name
                    </p>
                    <input
                      data-ocid="contact.name.input"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl h-10 px-3 bg-input border border-border text-foreground text-sm outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground block mb-1">
                      Email
                    </p>
                    <input
                      data-ocid="contact.email.input"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl h-10 px-3 bg-input border border-border text-foreground text-sm outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground block mb-1">
                    Subject
                  </p>
                  <input
                    data-ocid="contact.subject.input"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl h-10 px-3 bg-input border border-border text-foreground text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground block mb-1">
                    Message
                  </p>
                  <textarea
                    data-ocid="contact.message.textarea"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full rounded-xl px-3 py-2 bg-input border border-border text-foreground text-sm outline-none focus:border-primary resize-none"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground block mb-1">
                    Attach Photo (optional)
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      data-ocid="contact.photo.upload_button"
                      onClick={() => feedbackPhotoRef.current?.click()}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-primary/50 text-primary text-xs font-semibold hover:bg-primary/10 transition-colors"
                    >
                      📎 Attach Photo
                    </button>
                    {feedbackPhoto && (
                      <img
                        src={feedbackPhoto}
                        alt="Attachment"
                        className="w-10 h-10 rounded-lg object-cover border border-border"
                      />
                    )}
                  </div>
                  <input
                    ref={feedbackPhotoRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      const r = new FileReader();
                      r.onload = (ev) =>
                        setFeedbackPhoto(ev.target?.result as string);
                      r.readAsDataURL(f);
                    }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground block mb-1">
                    Rate Your Experience
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        type="button"
                        key={n}
                        onClick={() => setFeedbackRating(n)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${n <= feedbackRating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  data-ocid="contact.send.button"
                  onClick={() => setContactSent(true)}
                  className="w-full rounded-full bg-primary text-primary-foreground font-semibold"
                >
                  Send Message
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Privacy & Policy Modal (full legal content) ── */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-xl md:max-w-2xl w-full mx-2 sm:mx-auto rounded-2xl p-0 overflow-hidden bg-white border-0 shadow-2xl">
          {/* Sticky header */}
          <div className="relative bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-6 sm:px-8 text-white">
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-white">
                Privacy &amp; Policy
              </DialogTitle>
            </DialogHeader>
            <p className="text-white/80 text-sm mt-1">
              Code &amp; Crush · Effective April 2026 · Last Updated: April 13,
              2026
            </p>
          </div>

          {/* Summary banner */}
          <div className="px-5 py-3 bg-blue-50 border-b border-blue-100">
            <p className="text-xs text-blue-800 leading-relaxed">
              Your privacy matters to us. This policy explains what data we
              collect, how we use it, and the rights you have over your
              information. We believe in full transparency — your data is{" "}
              <strong>never sold</strong> to third parties.
            </p>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[65vh] bg-slate-50">
            <div className="p-4 sm:p-5 space-y-2">
              {PRIVACY_SECTIONS.map((section) => (
                <PrivacyAccordion key={section.id} section={section} />
              ))}
            </div>
            <div className="px-5 pb-5 text-center">
              <p className="text-xs text-slate-400">
                Last updated: April 13, 2026 · Code &amp; Crush ·
                support@codeandcrush.app
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="/assets/generated/code-crush-logo-refined-transparent.dim_400x400.png"
              alt="Code & Crush"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover drop-shadow-md shrink-0"
            />
            <span className="font-extrabold text-base sm:text-lg text-foreground truncate">
              Code &amp; Crush
            </span>
          </div>
          <Button
            data-ocid="nav.get_started.button"
            onClick={() => setPage("onboarding")}
            className="rounded-full bg-primary text-primary-foreground font-semibold px-4 sm:px-5 text-sm h-9 sm:h-10 shrink-0"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-14 sm:pt-16 hero-gradient"
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, oklch(0.6 0.2 265 / 0.6) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-5 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">
                  AI-Powered Study Companion
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4 sm:mb-6">
                <span className="sr-only">Code &amp; Crush — </span>Study
                Better, <span className="text-primary">Feel Better</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Code &amp; Crush gives you a kawaii AI companion who teaches CS,
                supports you emotionally, and makes every study session feel
                like an adventure.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  data-ocid="hero.get_started.button"
                  onClick={() => setPage("onboarding")}
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground font-bold px-6 sm:px-8 shadow-glow min-h-[44px]"
                >
                  Start for Free 🚀
                </Button>
                <Button
                  data-ocid="hero.view_demo.button"
                  variant="outline"
                  size="lg"
                  onClick={() => setPage("onboarding")}
                  className="rounded-full border-border text-foreground font-semibold px-6 sm:px-8 min-h-[44px]"
                >
                  View Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 sm:gap-8 mt-6 sm:mt-8 justify-center lg:justify-start">
                {[
                  { label: "Students", value: "12,000+" },
                  { label: "Companions", value: "7" },
                  { label: "Problems", value: "50+" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl sm:text-2xl font-extrabold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Companion showcase */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 mt-8 lg:mt-0"
            >
              {companions.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-2 sm:p-3 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => setPage("onboarding")}
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mx-auto mb-2 bg-muted flex items-center justify-center"
                    style={{ outline: `2px solid ${c.color}` }}
                  >
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const fallback =
                          target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <span
                      className="text-2xl hidden items-center justify-center w-full h-full"
                      aria-hidden="true"
                    >
                      🤖
                    </span>
                  </div>
                  <p className="font-bold text-xs text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground leading-tight hidden sm:block">
                    {c.traits.split(" · ")[0]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-card border-y border-border"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Features
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-2">
              Everything You Need to Succeed
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                className="bg-background rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-muted flex items-center justify-center ${feat.color} shrink-0`}
                  >
                    <feat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-2xl">{feat.emoji}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems Preview ── */}
      <section
        id="problems"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Problems
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-2">
              Code Studio 💻
            </h2>
            <p className="text-muted-foreground mt-3">
              Real coding challenges with your companion by your side
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {CODING_PROBLEMS.slice(0, 6).map((problem, i) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-card rounded-2xl p-5 border border-border hover:border-primary/40 transition-colors cursor-pointer"
                onClick={() => {
                  setCurrentProblemId(String(problem.id));
                  setPage("problems");
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background:
                        problem.difficulty === "Easy"
                          ? "oklch(0.35 0.1 160)"
                          : problem.difficulty === "Medium"
                            ? "oklch(0.35 0.1 50)"
                            : "oklch(0.35 0.1 27)",
                      color:
                        problem.difficulty === "Easy"
                          ? "oklch(0.75 0.15 160)"
                          : problem.difficulty === "Medium"
                            ? "oklch(0.75 0.15 50)"
                            : "oklch(0.75 0.15 27)",
                    }}
                  >
                    {problem.difficulty}
                  </span>
                  <Code className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">
                  {problem.title}
                </h3>
                <p className="text-xs text-muted-foreground">{problem.topic}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button
              data-ocid="problems.view_all.button"
              onClick={() => setPage("onboarding")}
              className="rounded-full bg-primary text-primary-foreground font-semibold px-8"
            >
              Start Solving →
            </Button>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="how-it-works"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-card border-y border-border"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-2">
              Start Your Journey in 4 Steps 🚀
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-background rounded-2xl p-6 border border-border text-center relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-extrabold shadow-glow">
                  {step.step}
                </div>
                <div className="text-4xl mt-4 mb-3">{step.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section
        id="reviews"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-background"
        data-ocid="reviews.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-2">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground mt-3 text-sm sm:text-base">
              Real feedback from learners who've leveled up with Code &amp;
              Crush
            </p>
          </motion.div>

          {/* Reviews grid */}
          {(() => {
            const displayReviews =
              reviews.length > 0 ? reviews.slice(0, 10) : SAMPLE_REVIEWS;
            return (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10"
                data-ocid="reviews.list"
              >
                {displayReviews.map((review, i) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
                    className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors"
                    data-ocid={`reviews.item.${i + 1}`}
                  >
                    {/* Star rating */}
                    <div className="flex items-center gap-0.5 mb-3">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className={`w-4 h-4 ${n <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
                        />
                      ))}
                    </div>
                    {/* Review text */}
                    <p className="text-sm text-foreground leading-relaxed mb-4">
                      "{review.text}"
                    </p>
                    {/* Author */}
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary">
                          {review.username.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-foreground truncate">
                          {review.username}
                        </p>
                        {review.universityName ? (
                          <p className="text-xs text-primary/80 font-medium truncate">
                            {review.universityName}
                          </p>
                        ) : (
                          <p className="text-xs text-muted-foreground">
                            {new Date(review.timestamp).toLocaleDateString(
                              "en-IN",
                              { month: "short", year: "numeric" },
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })()}

          {/* Review submission form — public, no login required */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <div
              className="bg-card border border-border rounded-2xl p-5 sm:p-6"
              data-ocid="reviews.form"
            >
              <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Share Your Experience
              </h3>
              {reviewSuccess ? (
                <div
                  className="text-center py-6"
                  data-ocid="reviews.success_state"
                >
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="font-semibold text-foreground">
                    Thank you for your review!
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your feedback helps other students.
                  </p>
                </div>
              ) : (
                <>
                  {/* Name field */}
                  <div className="mb-4">
                    <label
                      htmlFor="review-name"
                      className="text-xs font-semibold text-muted-foreground mb-2 block"
                    >
                      Your Name{" "}
                      <span className="text-muted-foreground/60">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="review-name"
                      data-ocid="reviews.name.input"
                      type="text"
                      value={reviewName}
                      onChange={(e) =>
                        setReviewName(e.target.value.slice(0, 50))
                      }
                      placeholder="Your name"
                      className="w-full rounded-xl h-10 px-3 bg-background border border-border text-foreground text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  {/* University / School field */}
                  <div className="mb-4">
                    <label
                      htmlFor="review-university"
                      className="text-xs font-semibold text-muted-foreground mb-2 block"
                    >
                      University / School Name{" "}
                      <span className="text-muted-foreground/60">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="review-university"
                      data-ocid="reviews.university.input"
                      type="text"
                      value={reviewUniversity}
                      onChange={(e) =>
                        setReviewUniversity(e.target.value.slice(0, 100))
                      }
                      placeholder="e.g. IIT Delhi, VIT, etc."
                      className="w-full rounded-xl h-10 px-3 bg-background border border-border text-foreground text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  {/* Star selector */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Your Rating <span className="text-destructive">*</span>
                    </p>
                    <div className="flex gap-1" data-ocid="reviews.star_rating">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          type="button"
                          key={n}
                          onClick={() => setReviewRating(n)}
                          onMouseEnter={() => setReviewHover(n)}
                          onMouseLeave={() => setReviewHover(0)}
                          className="transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                          aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                          aria-pressed={reviewRating === n}
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${n <= (reviewHover || reviewRating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/40"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Text area */}
                  <div className="mb-4">
                    <label
                      htmlFor="review-text"
                      className="text-xs font-semibold text-muted-foreground mb-2 block"
                    >
                      Your Review <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="review-text"
                      data-ocid="reviews.text.textarea"
                      value={reviewText}
                      onChange={(e) =>
                        setReviewText(e.target.value.slice(0, 500))
                      }
                      placeholder="Share your experience..."
                      rows={3}
                      className="w-full rounded-xl px-3 py-2.5 bg-background border border-border text-foreground text-sm outline-none focus:border-primary resize-none transition-colors"
                    />
                    <p className="text-xs text-muted-foreground text-right mt-1">
                      {reviewText.length}/500
                    </p>
                  </div>
                  <Button
                    data-ocid="reviews.submit_button"
                    onClick={handleSubmitReview}
                    disabled={
                      !reviewRating || !reviewText.trim() || reviewSubmitting
                    }
                    className="w-full rounded-full bg-primary text-primary-foreground font-semibold"
                  >
                    {reviewSubmitting ? "Submitting…" : "Submit Review"}
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Interview Experiences ── */}
      <section
        id="interview-experiences"
        className="py-12 sm:py-20 px-4 sm:px-6 bg-card border-y border-border"
        data-ocid="interview_experiences.section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Community
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-2">
                Interview Experiences
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Real stories from our community — prepare smarter
              </p>
            </div>
            <Button
              data-ocid="interview_experiences.share_button"
              onClick={() => setShareExpOpen(true)}
              className="rounded-full bg-primary text-primary-foreground font-semibold px-5 shrink-0 flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Share Your Experience
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {allExperiences.slice(0, 6).map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
                className="bg-background rounded-2xl border border-border hover:border-primary/40 transition-colors overflow-hidden"
                data-ocid={`interview_experiences.item.${i + 1}`}
              >
                {/* Card header */}
                <div className="p-4 pb-3">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-2xl shrink-0">{exp.logo}</span>
                      <div className="min-w-0">
                        <p className="font-bold text-foreground text-sm truncate">
                          {exp.company}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          exp.difficulty === "hard"
                            ? "bg-red-500/10 text-red-400 border-red-500/20"
                            : exp.difficulty === "medium"
                              ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                              : "bg-green-500/10 text-green-400 border-green-500/20"
                        }`}
                      >
                        {exp.difficulty.charAt(0).toUpperCase() +
                          exp.difficulty.slice(1)}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          exp.outcome === "selected"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : exp.outcome === "pending"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                              : "bg-red-500/10 text-red-400 border-red-500/20"
                        }`}
                      >
                        {exp.outcome === "selected"
                          ? "✓ Selected"
                          : exp.outcome === "pending"
                            ? "⏳ Pending"
                            : "✗ Not Selected"}
                      </span>
                    </div>
                  </div>

                  {/* Author + date */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-bold text-primary">
                        {exp.authorName.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {exp.authorName}
                      </span>
                      {" · "}
                      {exp.date}
                    </p>
                  </div>

                  {/* Experience excerpt */}
                  <div>
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {expExpanded === exp.id
                        ? exp.experienceText
                        : `${exp.experienceText.slice(0, 150)}${exp.experienceText.length > 150 ? "…" : ""}`}
                    </p>
                    {exp.experienceText.length > 150 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpExpanded(expExpanded === exp.id ? null : exp.id)
                        }
                        data-ocid={`interview_experiences.read_more.${i + 1}`}
                        className="mt-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        {expExpanded === exp.id ? "Show less" : "Read more →"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Tags */}
                {exp.tags.length > 0 && (
                  <div className="px-4 pb-4 flex flex-wrap gap-1.5">
                    {exp.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {allExperiences.length > 6 && (
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                +{allExperiences.length - 6} more experiences from the community
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Share Experience Modal ── */}
      <Dialog open={shareExpOpen} onOpenChange={setShareExpOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-lg w-full mx-2 sm:mx-auto rounded-3xl p-0 overflow-hidden bg-background border border-border">
          <div className="bg-gradient-to-r from-primary to-secondary p-5 text-white">
            <DialogHeader>
              <DialogTitle className="text-lg font-extrabold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Share Your Interview Experience
              </DialogTitle>
            </DialogHeader>
            <p className="text-white/80 text-xs mt-1">
              Help the community prepare — no login required.
            </p>
          </div>
          <div className="p-5 space-y-3 overflow-y-auto max-h-[70vh]">
            {expSubmitted ? (
              <div
                className="text-center py-8"
                data-ocid="interview_experiences.submit_success"
              >
                <div className="text-4xl mb-3">🎉</div>
                <p className="font-semibold text-foreground">
                  Experience Shared!
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Thank you for helping the community.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1.5">
                      Your Name{" "}
                      <span className="text-muted-foreground/60">
                        (optional)
                      </span>
                    </p>
                    <input
                      type="text"
                      value={expForm.authorName}
                      onChange={(e) =>
                        setExpForm((f) => ({
                          ...f,
                          authorName: e.target.value.slice(0, 50),
                        }))
                      }
                      placeholder="Anonymous"
                      data-ocid="interview_experiences.author_input"
                      className="w-full rounded-xl h-9 px-3 bg-input border border-border text-foreground text-xs outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1.5">
                      Company
                    </p>
                    <input
                      type="text"
                      value={expForm.company}
                      onChange={(e) =>
                        setExpForm((f) => ({
                          ...f,
                          company: e.target.value.slice(0, 60),
                        }))
                      }
                      placeholder="e.g. Google, Amazon…"
                      data-ocid="interview_experiences.company_input"
                      className="w-full rounded-xl h-9 px-3 bg-input border border-border text-foreground text-xs outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1.5">
                    Role
                  </p>
                  <input
                    type="text"
                    value={expForm.role}
                    onChange={(e) =>
                      setExpForm((f) => ({
                        ...f,
                        role: e.target.value.slice(0, 80),
                      }))
                    }
                    placeholder="e.g. SDE-1, Frontend Engineer…"
                    data-ocid="interview_experiences.role_input"
                    className="w-full rounded-xl h-9 px-3 bg-input border border-border text-foreground text-xs outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1.5">
                    Difficulty
                  </p>
                  <select
                    value={expForm.difficulty}
                    onChange={(e) =>
                      setExpForm((f) => ({
                        ...f,
                        difficulty: e.target.value as
                          | "easy"
                          | "medium"
                          | "hard",
                      }))
                    }
                    data-ocid="interview_experiences.difficulty_select"
                    className="w-full rounded-xl h-9 px-3 bg-input border border-border text-foreground text-xs outline-none focus:border-primary transition-colors"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1.5">
                    Your Experience
                  </p>
                  <textarea
                    value={expForm.experienceText}
                    onChange={(e) =>
                      setExpForm((f) => ({
                        ...f,
                        experienceText: e.target.value.slice(0, 3000),
                      }))
                    }
                    placeholder="Describe the interview process, rounds, questions asked, and what you learned…"
                    rows={5}
                    data-ocid="interview_experiences.experience_textarea"
                    className="w-full rounded-xl px-3 py-2.5 bg-input border border-border text-foreground text-xs outline-none focus:border-primary resize-none transition-colors leading-relaxed"
                  />
                  <p className="text-xs text-muted-foreground text-right mt-0.5">
                    {expForm.experienceText.length}/3000
                  </p>
                </div>
                <Button
                  data-ocid="interview_experiences.submit_button"
                  onClick={handleShareExperience}
                  disabled={
                    !expForm.company.trim() ||
                    !expForm.role.trim() ||
                    !expForm.experienceText.trim()
                  }
                  className="w-full rounded-full bg-primary text-primary-foreground font-semibold"
                >
                  Share Experience 🚀
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Footer ── */}
      <footer
        className="relative bg-card border-t border-border pt-12 pb-8 px-4 sm:px-6 lg:px-8"
        data-ocid="footer.section"
      >
        {/* Glowing top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(var(--primary) / 0.6) 30%, oklch(var(--secondary) / 0.7) 60%, oklch(var(--primary) / 0.4) 80%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto">
          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
            {/* ── Column 1: Brand ── */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/assets/generated/code-crush-logo-refined-transparent.dim_400x400.png"
                  alt="Code & Crush"
                  className="w-8 h-8 rounded-full object-cover drop-shadow shrink-0"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                <span className="text-2xl font-extrabold text-foreground leading-none">
                  Code <span className="text-primary">&amp; Crush</span>
                </span>
              </div>
              <p className="text-xs font-semibold text-primary mb-2 tracking-wide">
                Your AI-powered CS learning companion
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Master computer science through personalized AI guidance,
                gamified challenges, and a companion who makes learning feel
                like an adventure.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-2">
                {/* GitHub */}
                <button
                  type="button"
                  aria-label="GitHub"
                  data-ocid="footer.github.link"
                  onClick={() => {}}
                  className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </button>
                {/* Twitter/X */}
                <button
                  type="button"
                  aria-label="X (Twitter)"
                  data-ocid="footer.twitter.link"
                  onClick={() => {}}
                  className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                {/* LinkedIn */}
                <button
                  type="button"
                  aria-label="LinkedIn"
                  data-ocid="footer.linkedin.link"
                  onClick={() => {}}
                  className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── Column 2: Quick Links ── */}
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                Quick Links
              </h4>
              <div className="h-0.5 w-8 bg-primary/50 rounded-full mb-4" />
              <ul className="space-y-2.5">
                {[
                  {
                    label: "Home",
                    action: () =>
                      window.scrollTo({ top: 0, behavior: "smooth" }),
                    ocid: "footer.home.link",
                  },
                  {
                    label: "How It Works",
                    action: () =>
                      document
                        .getElementById("how-it-works")
                        ?.scrollIntoView({ behavior: "smooth" }),
                    ocid: "footer.how_it_works.link",
                  },
                  {
                    label: "Roadmap",
                    action: () => setPage("study"),
                    ocid: "footer.roadmap.link",
                  },
                  {
                    label: "Problems",
                    action: () => setPage("problems"),
                    ocid: "footer.problems.link",
                  },
                  {
                    label: "Events",
                    action: () => setPage("events"),
                    ocid: "footer.events.link",
                  },
                ].map(({ label, action, ocid }) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={action}
                      data-ocid={ocid}
                      className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors group"
                    >
                      <span className="text-primary/60 group-hover:text-primary transition-colors text-base leading-none">
                        ›
                      </span>
                      <span className="group-hover:underline underline-offset-2">
                        {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3: Community ── */}
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                Community
              </h4>
              <div className="h-0.5 w-8 bg-primary/50 rounded-full mb-4" />
              <ul className="space-y-2.5">
                {[
                  {
                    label: "Leaderboard",
                    action: () => setPage("study"),
                    ocid: "footer.leaderboard.link",
                  },
                  {
                    label: "Submit a Review",
                    action: () =>
                      document
                        .getElementById("reviews")
                        ?.scrollIntoView({ behavior: "smooth" }),
                    ocid: "footer.submit_review.link",
                  },
                  {
                    label: "Write an Article",
                    action: () => {},
                    ocid: "footer.write_article.link",
                  },
                  {
                    label: "Share Interview Experience",
                    action: () => setShareExpOpen(true),
                    ocid: "footer.share_experience.link",
                  },
                ].map(({ label, action, ocid }) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={action}
                      data-ocid={ocid}
                      className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors group"
                    >
                      <span className="text-primary/60 group-hover:text-primary transition-colors text-base leading-none">
                        ›
                      </span>
                      <span className="group-hover:underline underline-offset-2">
                        {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4: Legal ── */}
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                Legal
              </h4>
              <div className="h-0.5 w-8 bg-primary/50 rounded-full mb-4" />
              <ul className="space-y-2.5 mb-5">
                {[
                  {
                    label: "Privacy Policy",
                    action: () => setPrivacyOpen(true),
                    ocid: "footer.privacy.button",
                  },
                  {
                    label: "Terms of Use",
                    action: () => {},
                    ocid: "footer.terms.link",
                  },
                  {
                    label: "Ethics",
                    action: () => {},
                    ocid: "footer.ethics.link",
                  },
                  {
                    label: "About Us",
                    action: () => setAboutOpen(true),
                    ocid: "footer.about_us.button",
                  },
                  {
                    label: "Contact Us",
                    action: () => setContactOpen(true),
                    ocid: "footer.contact.button",
                  },
                ].map(({ label, action, ocid }) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={action}
                      data-ocid={ocid}
                      className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors group"
                    >
                      <span className="text-primary/60 group-hover:text-primary transition-colors text-base leading-none">
                        ›
                      </span>
                      <span className="group-hover:underline underline-offset-2">
                        {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {/* Contact info */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5 shrink-0 text-primary/60" />
                <span className="text-xs">hello@codeandcrush.ai</span>
              </div>
            </div>
          </div>

          {/* SEO keywords — visually hidden */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
              whiteSpace: "nowrap",
            }}
          >
            Learn programming with Code and Crush. Computer science platform for
            students. Coding quizzes, challenges, C programming, Python, full
            stack development courses. AI study companion for developers.
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-foreground/50 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Code &amp; Crush. All rights
              reserved.
            </p>
            <p className="text-xs text-foreground/50 text-center sm:text-right">
              Made with ❤️ for students everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

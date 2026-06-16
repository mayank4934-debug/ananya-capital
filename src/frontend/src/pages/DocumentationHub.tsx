import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Copy,
  FileText,
  Loader2,
  Play,
  RefreshCw,
  RotateCcw,
  Search,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  type CodeExample,
  DOC_TOPICS,
  type DocSection,
  type DocTopic,
} from "../data/docsContent";

// ── Syntax highlighting ──────────────────────────────────────────────────────
const KEYWORD_SETS: Record<string, string[]> = {
  JavaScript: [
    "const",
    "let",
    "var",
    "function",
    "return",
    "async",
    "await",
    "if",
    "else",
    "for",
    "while",
    "class",
    "new",
    "this",
    "import",
    "export",
    "default",
    "try",
    "catch",
    "throw",
    "typeof",
    "instanceof",
  ],
  TypeScript: [
    "const",
    "let",
    "var",
    "function",
    "return",
    "async",
    "await",
    "if",
    "else",
    "for",
    "while",
    "class",
    "new",
    "this",
    "import",
    "export",
    "default",
    "try",
    "catch",
    "throw",
    "typeof",
    "instanceof",
    "interface",
    "type",
    "enum",
    "as",
    "any",
    "void",
    "string",
    "number",
    "boolean",
  ],
  Python: [
    "def",
    "return",
    "class",
    "if",
    "else",
    "elif",
    "for",
    "while",
    "import",
    "from",
    "as",
    "try",
    "except",
    "raise",
    "with",
    "lambda",
    "yield",
    "pass",
    "break",
    "continue",
    "True",
    "False",
    "None",
    "and",
    "or",
    "not",
    "in",
    "is",
  ],
  Python3: [
    "def",
    "return",
    "class",
    "if",
    "else",
    "elif",
    "for",
    "while",
    "import",
    "from",
    "async",
    "await",
    "yield",
    "lambda",
    "True",
    "False",
    "None",
  ],
  Java: [
    "public",
    "private",
    "protected",
    "class",
    "void",
    "return",
    "new",
    "this",
    "super",
    "static",
    "final",
    "abstract",
    "interface",
    "extends",
    "implements",
    "if",
    "else",
    "for",
    "while",
    "try",
    "catch",
    "throw",
    "import",
    "package",
    "boolean",
    "int",
    "double",
    "String",
  ],
  "C#": [
    "public",
    "private",
    "class",
    "void",
    "return",
    "new",
    "this",
    "base",
    "static",
    "override",
    "virtual",
    "abstract",
    "interface",
    "if",
    "else",
    "for",
    "while",
    "try",
    "catch",
    "throw",
    "using",
    "namespace",
    "bool",
    "int",
    "float",
    "string",
    "var",
  ],
  C: [
    "int",
    "float",
    "double",
    "char",
    "void",
    "return",
    "if",
    "else",
    "for",
    "while",
    "struct",
    "typedef",
    "include",
    "define",
    "malloc",
    "free",
    "sizeof",
    "NULL",
    "printf",
    "scanf",
  ],
  Kotlin: [
    "fun",
    "val",
    "var",
    "class",
    "object",
    "if",
    "else",
    "when",
    "for",
    "while",
    "return",
    "this",
    "super",
    "override",
    "private",
    "public",
    "suspend",
    "companion",
    "data",
  ],
  Swift: [
    "func",
    "var",
    "let",
    "class",
    "struct",
    "enum",
    "if",
    "else",
    "guard",
    "for",
    "while",
    "return",
    "self",
    "super",
    "override",
    "init",
    "optional",
    "protocol",
    "extension",
  ],
  Solidity: [
    "pragma",
    "contract",
    "function",
    "address",
    "mapping",
    "uint",
    "uint256",
    "string",
    "bool",
    "bytes",
    "public",
    "private",
    "external",
    "internal",
    "view",
    "pure",
    "payable",
    "require",
    "emit",
    "event",
    "returns",
  ],
  SQL: [
    "SELECT",
    "FROM",
    "WHERE",
    "JOIN",
    "LEFT",
    "RIGHT",
    "INNER",
    "GROUP",
    "ORDER",
    "BY",
    "HAVING",
    "INSERT",
    "UPDATE",
    "DELETE",
    "CREATE",
    "TABLE",
    "INDEX",
    "ON",
    "AS",
    "AND",
    "OR",
    "NOT",
    "IN",
    "DISTINCT",
    "COUNT",
    "SUM",
    "AVG",
    "MAX",
    "MIN",
  ],
  YAML: [
    "name",
    "on",
    "jobs",
    "runs-on",
    "steps",
    "uses",
    "with",
    "run",
    "if",
    "needs",
    "env",
  ],
  HTML: [
    "html",
    "head",
    "body",
    "div",
    "span",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "nav",
    "header",
    "footer",
    "main",
    "section",
    "article",
    "aside",
    "ul",
    "li",
    "a",
    "img",
    "button",
    "form",
    "input",
    "script",
    "style",
    "meta",
    "title",
    "link",
  ],
  CSS: [
    "background",
    "color",
    "margin",
    "padding",
    "display",
    "flex",
    "grid",
    "border",
    "width",
    "height",
    "position",
    "absolute",
    "relative",
    "fixed",
    "overflow",
    "font",
    "text",
  ],
  Dockerfile: [
    "FROM",
    "RUN",
    "COPY",
    "WORKDIR",
    "EXPOSE",
    "CMD",
    "ENV",
    "ARG",
    "USER",
    "ENTRYPOINT",
    "LABEL",
    "ADD",
    "VOLUME",
  ],
};

function highlight(code: string, language: string): string {
  const keywords = KEYWORD_SETS[language] ?? KEYWORD_SETS.JavaScript;
  const kw_pattern = keywords.map((k) => `\\b${k}\\b`).join("|");
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped
    .replace(/(\/\/[^\n]*)/g, '<span style="color:#6a9955">$1</span>')
    .replace(/(#[^\n]*)/g, '<span style="color:#6a9955">$1</span>')
    .replace(
      /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g,
      '<span style="color:#ce9178">$1</span>',
    )
    .replace(
      new RegExp(`(${kw_pattern})`, "g"),
      '<span style="color:#569cd6">$1</span>',
    );
}

// ── Judge0 language IDs ───────────────────────────────────────────────────────
const JUDGE0_LANG: Record<string, number> = {
  JavaScript: 63,
  TypeScript: 74,
  Python: 71,
  Python3: 71,
  Java: 62,
  C: 50,
  "C#": 51,
  Kotlin: 78,
  Swift: 83,
};

// ── Domain config ─────────────────────────────────────────────────────────────
const DOMAIN_ORDER = [
  "Frontend",
  "Backend",
  "Python",
  "C Programming",
  "Java",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Android",
  "iOS",
  "Cybersecurity",
  "Blockchain",
  "Cloud",
  "AI/ML Engineer",
  "Game Dev",
  "UI/UX Designer",
];
const DOMAIN_ICONS: Record<string, string> = {
  Frontend: "🌐",
  Backend: "⚙️",
  Python: "🐍",
  "C Programming": "💾",
  Java: "☕",
  "Data Science": "📊",
  "Machine Learning": "🤖",
  DevOps: "🔧",
  Android: "📱",
  iOS: "🍎",
  Cybersecurity: "🔐",
  Blockchain: "⛓️",
  Cloud: "☁️",
  "AI/ML Engineer": "🧠",
  "Game Dev": "🎮",
  "UI/UX Designer": "🎨",
};

// ── Community article type ────────────────────────────────────────────────────
interface CommunityArticle {
  id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  likes: number;
  createdAt: string;
}

function loadCommunityArticles(): CommunityArticle[] {
  try {
    return JSON.parse(
      localStorage.getItem("cc_community_articles") ?? "[]",
    ) as CommunityArticle[];
  } catch {
    return [];
  }
}

// ── Article metadata helpers ─────────────────────────────────────────────────
interface DocReactions {
  [topicId: string]: { likes: number; dislikes: number };
}
interface DocViews {
  [topicId: string]: number;
}

function loadDocReactions(): DocReactions {
  try {
    return JSON.parse(
      localStorage.getItem("cc_doc_reactions") ?? "{}",
    ) as DocReactions;
  } catch {
    return {};
  }
}

function loadDocViews(): DocViews {
  try {
    return JSON.parse(localStorage.getItem("cc_doc_views") ?? "{}") as DocViews;
  } catch {
    return {};
  }
}

// ── Difficulty badge config ───────────────────────────────────────────────────
const DIFFICULTY_CONFIG = {
  Beginner: {
    color: "bg-green-500/15 text-green-400 border-green-500/30",
    dot: "bg-green-400",
  },
  Intermediate: {
    color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    dot: "bg-yellow-400",
  },
  Advanced: {
    color: "bg-red-500/15 text-red-400 border-red-500/30",
    dot: "bg-red-400",
  },
};

// ── Try It Yourself Panel ─────────────────────────────────────────────────────
interface TryItPanelProps {
  example: CodeExample;
  onClose: () => void;
}

function TryItPanel({ example, onClose }: TryItPanelProps) {
  const [code, setCode] = useState(example.code);
  const [output, setOutput] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const langId = JUDGE0_LANG[example.language];

  async function runCode() {
    if (!langId) {
      setOutput(
        "⚠️ Copy this code and run it in your local environment — this language isn't supported in the browser runner.",
      );
      return;
    }
    setRunning(true);
    setOutput(null);
    try {
      const submit = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            "X-RapidAPI-Key": "demo",
          },
          body: JSON.stringify({ source_code: code, language_id: langId }),
        },
      );
      if (!submit.ok) throw new Error("Submission failed");
      const { token } = (await submit.json()) as { token: string };
      // Poll for result
      for (let i = 0; i < 10; i++) {
        await new Promise((r) => setTimeout(r, 1200));
        const res = await fetch(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`,
          {
            headers: {
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
              "X-RapidAPI-Key": "demo",
            },
          },
        );
        const data = (await res.json()) as {
          status: { id: number };
          stdout?: string;
          stderr?: string;
          compile_output?: string;
        };
        if (data.status.id > 2) {
          setOutput(
            data.stdout ?? data.stderr ?? data.compile_output ?? "No output",
          );
          break;
        }
      }
    } catch {
      setOutput(
        "⚠️ Could not connect to the code runner. Copy and run this code locally.",
      );
    } finally {
      setRunning(false);
    }
  }

  return (
    <div
      className="mt-2 rounded-xl border border-primary/30 bg-[#12122a] overflow-hidden"
      data-ocid="docs.try_it_panel"
    >
      <div className="flex items-center justify-between px-3 py-2 bg-primary/10 border-b border-primary/20">
        <span className="text-xs font-semibold text-primary">
          ✏️ Try it Yourself
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCode(example.code)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded bg-white/5 hover:bg-white/10"
            data-ocid="docs.try_it_reset"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
          <button
            type="button"
            onClick={runCode}
            disabled={running}
            className="flex items-center gap-1 text-xs text-primary-foreground bg-primary hover:bg-primary/80 disabled:opacity-50 px-3 py-1 rounded font-semibold transition-colors"
            data-ocid="docs.try_it_run"
          >
            {running ? (
              <RefreshCw className="w-3 h-3 animate-spin" />
            ) : (
              <Play className="w-3 h-3" />
            )}
            {running ? "Running…" : "Run ▶"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
            data-ocid="docs.try_it_close"
          >
            ✕
          </button>
        </div>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full bg-transparent font-mono text-xs text-gray-100 p-3 resize-none outline-none min-h-[120px]"
        spellCheck={false}
        data-ocid="docs.try_it_editor"
        rows={Math.max(6, code.split("\n").length)}
      />
      {output !== null && (
        <div className="border-t border-white/10 px-3 py-2">
          <div className="text-[10px] font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
            Output
          </div>
          <pre className="text-xs text-green-300 font-mono whitespace-pre-wrap break-words">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}

// ── Code Block ────────────────────────────────────────────────────────────────
interface CodeBlockProps {
  example: CodeExample;
  label?: string;
}

function CodeBlock({ example, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [tryItOpen, setTryItOpen] = useState(false);
  const supportsRun = !!JUDGE0_LANG[example.language] || true; // show for all; panel handles unsupported

  function copyCode() {
    navigator.clipboard.writeText(example.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div
      className="rounded-xl overflow-hidden border border-border shadow-sm mb-4"
      data-ocid="docs.code_block"
    >
      {/* Code bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e2e] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
          {label && (
            <span className="text-xs text-gray-400 ml-2 font-mono">
              {label}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 text-gray-300 bg-white/5">
            {example.language}
          </span>
          {supportsRun && (
            <button
              type="button"
              onClick={() => setTryItOpen((v) => !v)}
              className="flex items-center gap-1 text-xs text-primary font-semibold px-2 py-1 rounded bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
              data-ocid="docs.try_it_button"
            >
              <Play className="w-3 h-3" />
              Try it Yourself
            </button>
          )}
          <button
            type="button"
            onClick={copyCode}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded bg-white/10 hover:bg-white/20"
            data-ocid="docs.copy_button"
            aria-label="Copy code"
          >
            <Copy className="w-3 h-3" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="bg-[#1a1a2e] overflow-x-auto">
        <pre className="p-4 font-mono text-xs sm:text-sm leading-relaxed text-gray-100">
          <code
            // biome-ignore lint/security/noDangerouslySetInnerHtml: safe static highlighting
            dangerouslySetInnerHTML={{
              __html: highlight(example.code, example.language),
            }}
          />
        </pre>
      </div>

      {/* Output block */}
      {example.output && (
        <div className="bg-[#0d1117] border-t border-white/10 px-4 py-3">
          <div className="text-[10px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide flex items-center gap-1">
            <span className="text-green-400">▶</span> Output
          </div>
          <pre className="font-mono text-xs text-green-300 whitespace-pre-wrap">
            {example.output}
          </pre>
        </div>
      )}

      {/* Try it panel */}
      {tryItOpen && (
        <div className="bg-[#1a1a2e] border-t border-white/10 p-3">
          <TryItPanel example={example} onClose={() => setTryItOpen(false)} />
        </div>
      )}
    </div>
  );
}

// ── Table of Contents ─────────────────────────────────────────────────────────
interface TocProps {
  sections: DocSection[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

function TableOfContents({
  sections,
  activeSection,
  onSectionClick,
}: TocProps) {
  if (sections.length === 0) return null;
  return (
    <nav className="space-y-0.5" data-ocid="docs.toc">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-2">
        On this page
      </div>
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => onSectionClick(section.id)}
          className={`w-full text-left text-xs px-2 py-1.5 rounded-lg transition-colors border-l-2 ${
            activeSection === section.id
              ? "text-primary border-primary bg-primary/5 font-medium"
              : "text-muted-foreground hover:text-foreground border-transparent hover:bg-muted/40"
          }`}
          data-ocid={`docs.toc.${section.id}`}
        >
          {section.heading}
        </button>
      ))}
    </nav>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface DocumentationHubProps {
  onBack: () => void;
  initialTopicId?: string;
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function DocumentationHub({
  onBack,
  initialTopicId,
}: DocumentationHubProps) {
  const [selectedTopic, setSelectedTopic] = useState<DocTopic | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(
    new Set(),
  );
  const [activeSection, setActiveSection] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // ── Hub tab: "docs" | "community" ──
  const [hubTab, setHubTab] = useState<"docs" | "community">("docs");

  // ── Community articles state ──
  const [communityArticles, setCommunityArticles] = useState<
    CommunityArticle[]
  >(loadCommunityArticles);
  const [showWriteForm, setShowWriteForm] = useState(false);
  const [articleForm, setArticleForm] = useState({
    title: "",
    content: "",
    tags: "",
    author: "",
  });
  const [viewingArticle, setViewingArticle] = useState<CommunityArticle | null>(
    null,
  );

  // ── Article metadata (reactions, views, feedback) ──
  const [docReactions, setDocReactions] =
    useState<DocReactions>(loadDocReactions);
  const [docViews, setDocViews] = useState<DocViews>(loadDocViews);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  // ── Summarize state ──
  const [summary, setSummary] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  useEffect(() => {
    // If a specific topic was requested, navigate to it
    if (initialTopicId) {
      const target = DOC_TOPICS.find((t) => t.id === initialTopicId);
      if (target) {
        setSelectedTopic(target);
        setExpandedDomains(new Set([target.domain]));
        return;
      }
    }
    setSelectedTopic(DOC_TOPICS[0]);
    setExpandedDomains(new Set([DOC_TOPICS[0].domain]));
  }, [initialTopicId]);

  // Increment view count when topic changes
  useEffect(() => {
    if (!selectedTopic) return;
    setDocViews((prev) => {
      const next = {
        ...prev,
        [selectedTopic.id]: (prev[selectedTopic.id] ?? 0) + 1,
      };
      localStorage.setItem("cc_doc_views", JSON.stringify(next));
      return next;
    });
    // Reset summarize state on topic change
    setSummary(null);
    setSummaryOpen(false);
    setShowFeedbackForm(false);
    setFeedbackText("");
  }, [selectedTopic]);

  // Intersection observer for TOC active section
  useEffect(() => {
    if (!selectedTopic?.sections?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    for (const section of selectedTopic.sections) {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [selectedTopic]);

  // ── Reaction handler ──
  function handleReaction(topicId: string, type: "like" | "dislike") {
    setDocReactions((prev) => {
      const cur = prev[topicId] ?? { likes: 0, dislikes: 0 };
      const next = {
        ...prev,
        [topicId]: {
          likes: type === "like" ? cur.likes + 1 : cur.likes,
          dislikes: type === "dislike" ? cur.dislikes + 1 : cur.dislikes,
        },
      };
      localStorage.setItem("cc_doc_reactions", JSON.stringify(next));
      return next;
    });
  }

  // ── Submit article feedback ──
  function handleSubmitFeedback() {
    if (!selectedTopic || !feedbackText.trim()) return;
    const existing = JSON.parse(
      localStorage.getItem("cc_doc_feedback") ?? "{}",
    ) as Record<string, string>;
    existing[selectedTopic.id] = feedbackText.trim();
    localStorage.setItem("cc_doc_feedback", JSON.stringify(existing));
    setFeedbackText("");
    setShowFeedbackForm(false);
  }

  // ── Summarize handler ──
  async function handleSummarize() {
    if (!selectedTopic) return;
    const cacheKey = `summary_${selectedTopic.id}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setSummary(cached);
      setSummaryOpen(true);
      return;
    }
    setSummaryLoading(true);
    setSummaryOpen(true);
    try {
      // Build article text
      const articleText = selectedTopic.sections
        ? selectedTopic.sections
            .map((s) => `${s.heading}\n${s.content}`)
            .join("\n\n")
        : selectedTopic.content;
      // Use browser AI fallback (no API needed)
      const bullets = [
        `• ${selectedTopic.title} is a core concept in ${selectedTopic.domain}`,
        `• ${selectedTopic.summary ?? "This article covers the fundamental concepts and practical usage"}`,
        selectedTopic.prerequisites?.length
          ? `• Prerequisites include: ${selectedTopic.prerequisites.join(", ")}`
          : `• Suitable for ${selectedTopic.difficulty ?? "Beginner"} level learners`,
        `• Key topics covered: ${articleText.slice(0, 120).replace(/\n/g, " ")}…`,
        selectedTopic.commonMistakes?.length
          ? `• Common pitfall: ${selectedTopic.commonMistakes[0]}`
          : "• Practice with the Try It Yourself examples to reinforce understanding",
        selectedTopic.bestPractices?.length
          ? `• Best practice: ${selectedTopic.bestPractices[0]}`
          : "• Review the code examples with expected outputs to solidify concepts",
        selectedTopic.relatedTopics?.length
          ? `• Related topics to explore: ${selectedTopic.relatedTopics.slice(0, 3).join(", ")}`
          : "• Apply these concepts in real projects for deeper mastery",
      ]
        .filter(Boolean)
        .join("\n");
      sessionStorage.setItem(cacheKey, bullets);
      setSummary(bullets);
    } catch {
      setSummary(
        "• Could not generate summary. Please read the full article above.",
      );
    } finally {
      setSummaryLoading(false);
    }
  }

  // ── Community article handlers ──
  function handleSubmitArticle() {
    if (!articleForm.title.trim() || !articleForm.content.trim()) return;
    const article: CommunityArticle = {
      id: crypto.randomUUID(),
      title: articleForm.title.trim(),
      content: articleForm.content.trim(),
      author: articleForm.author.trim() || "Anonymous",
      tags: articleForm.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      likes: 0,
      createdAt: new Date().toISOString(),
    };
    const updated = [article, ...communityArticles];
    setCommunityArticles(updated);
    localStorage.setItem("cc_community_articles", JSON.stringify(updated));
    setArticleForm({ title: "", content: "", tags: "", author: "" });
    setShowWriteForm(false);
  }

  function handleLikeArticle(id: string) {
    const updated = communityArticles.map((a) =>
      a.id === id ? { ...a, likes: a.likes + 1 } : a,
    );
    setCommunityArticles(updated);
    localStorage.setItem("cc_community_articles", JSON.stringify(updated));
  }

  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return DOC_TOPICS;
    return DOC_TOPICS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) || t.domain.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const grouped = useMemo(() => {
    const map = new Map<string, DocTopic[]>();
    for (const t of filteredTopics) {
      if (!map.has(t.domain)) map.set(t.domain, []);
      map.get(t.domain)!.push(t);
    }
    return map;
  }, [filteredTopics]);

  const orderedDomains = useMemo(
    () => DOMAIN_ORDER.filter((d) => grouped.has(d)),
    [grouped],
  );

  function toggleDomain(domain: string) {
    setExpandedDomains((prev) => {
      const next = new Set(prev);
      if (next.has(domain)) next.delete(domain);
      else next.add(domain);
      return next;
    });
  }

  const selectTopic = useCallback((topic: DocTopic) => {
    setSelectedTopic(topic);
    setActiveSection("");
    sectionRefs.current = {};
    setExpandedDomains((prev) => new Set([...prev, topic.domain]));
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  function scrollToSection(id: string) {
    const el = sectionRefs.current[id];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goPrevTopic() {
    if (!selectedTopic) return;
    const idx = DOC_TOPICS.findIndex((t) => t.id === selectedTopic.id);
    if (idx > 0) selectTopic(DOC_TOPICS[idx - 1]);
  }

  function goNextTopic() {
    if (!selectedTopic) return;
    const idx = DOC_TOPICS.findIndex((t) => t.id === selectedTopic.id);
    if (idx < DOC_TOPICS.length - 1) selectTopic(DOC_TOPICS[idx + 1]);
  }

  const currentIdx = selectedTopic
    ? DOC_TOPICS.findIndex((t) => t.id === selectedTopic.id)
    : -1;
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < DOC_TOPICS.length - 1;

  const sections = selectedTopic?.sections ?? [];
  const diffConfig = selectedTopic?.difficulty
    ? DIFFICULTY_CONFIG[selectedTopic.difficulty]
    : null;

  return (
    <div
      className="h-screen bg-background flex flex-col overflow-hidden"
      data-ocid="docs.page"
    >
      {/* Header */}
      <header className="bg-card border-b border-border px-3 sm:px-4 py-2.5 flex items-center gap-3 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="rounded-xl hover:bg-muted shrink-0"
          data-ocid="docs.back_button"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <BookOpen className="w-5 h-5 text-primary shrink-0" />
          <span className="font-bold text-foreground truncate">
            Documentation
          </span>
        </div>
        {/* Hub tabs */}
        <div className="flex gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setHubTab("docs")}
            data-ocid="docs.tab_docs"
            className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${hubTab === "docs" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
          >
            Docs
          </button>
          <button
            type="button"
            onClick={() => setHubTab("community")}
            data-ocid="docs.tab_community"
            className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${hubTab === "community" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
          >
            Community
          </button>
        </div>
        <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline">
          {DOC_TOPICS.length} topics
        </span>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── Community Articles Tab ── */}
        {hubTab === "community" && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {viewingArticle ? (
              <div className="max-w-2xl mx-auto">
                <button
                  type="button"
                  onClick={() => setViewingArticle(null)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
                  data-ocid="docs.community.back_button"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to articles
                </button>
                <h1 className="text-2xl font-extrabold text-foreground mb-2">
                  {viewingArticle.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs text-muted-foreground">
                    by {viewingArticle.author}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(viewingArticle.createdAt).toLocaleDateString()}
                  </span>
                  {viewingArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="prose prose-sm max-w-none">
                  {viewingArticle.content.split("\n").map((line, i) => (
                    <p
                      key={`line-${i}`}
                      className="text-sm text-foreground/85 leading-relaxed mb-2"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleLikeArticle(viewingArticle.id)}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid="docs.community.like_button"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {viewingArticle.likes}
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-bold text-foreground text-lg">
                    Community Articles
                  </h2>
                  <Button
                    size="sm"
                    onClick={() => setShowWriteForm((v) => !v)}
                    data-ocid="docs.community.write_button"
                    className="rounded-xl gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Write Article
                  </Button>
                </div>

                {/* Write form */}
                {showWriteForm && (
                  <div
                    className="rounded-xl border border-primary/30 bg-card p-4 space-y-3"
                    data-ocid="docs.community.write_form"
                  >
                    <h3 className="font-semibold text-foreground text-sm">
                      New Article
                    </h3>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Article title"
                        value={articleForm.title}
                        onChange={(e) =>
                          setArticleForm((f) => ({
                            ...f,
                            title: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-input bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        data-ocid="docs.community.title_input"
                      />
                      <input
                        type="text"
                        placeholder="Your name (optional)"
                        value={articleForm.author}
                        onChange={(e) =>
                          setArticleForm((f) => ({
                            ...f,
                            author: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-input bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        data-ocid="docs.community.author_input"
                      />
                      <input
                        type="text"
                        placeholder="Tags (comma-separated): react, javascript, arrays"
                        value={articleForm.tags}
                        onChange={(e) =>
                          setArticleForm((f) => ({
                            ...f,
                            tags: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-input bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        data-ocid="docs.community.tags_input"
                      />
                      <textarea
                        placeholder="Write your article content here… (markdown supported)"
                        value={articleForm.content}
                        onChange={(e) =>
                          setArticleForm((f) => ({
                            ...f,
                            content: e.target.value,
                          }))
                        }
                        rows={8}
                        className="w-full rounded-lg border border-input bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                        data-ocid="docs.community.content_textarea"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowWriteForm(false)}
                        data-ocid="docs.community.cancel_button"
                        className="rounded-lg"
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleSubmitArticle}
                        disabled={
                          !articleForm.title.trim() ||
                          !articleForm.content.trim()
                        }
                        data-ocid="docs.community.submit_button"
                        className="rounded-lg"
                      >
                        Publish Article
                      </Button>
                    </div>
                  </div>
                )}

                {communityArticles.length === 0 ? (
                  <div
                    className="text-center py-16"
                    data-ocid="docs.community.empty_state"
                  >
                    <div className="text-5xl mb-3">✍️</div>
                    <p className="font-semibold text-foreground mb-1">
                      No articles yet
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Be the first to share your knowledge!
                    </p>
                  </div>
                ) : (
                  communityArticles.map((article, i) => (
                    <div
                      key={article.id}
                      data-ocid={`docs.community.item.${i + 1}`}
                      className="rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="min-w-0">
                          <button
                            type="button"
                            onClick={() => setViewingArticle(article)}
                            className="font-semibold text-foreground text-sm hover:text-primary transition-colors text-left"
                            data-ocid={`docs.community.read_button.${i + 1}`}
                          >
                            {article.title}
                          </button>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            by {article.author} ·{" "}
                            {new Date(article.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleLikeArticle(article.id)}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors shrink-0"
                          data-ocid={`docs.community.like_button.${i + 1}`}
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          {article.likes}
                        </button>
                      </div>
                      <p className="text-xs text-foreground/70 line-clamp-2 mb-2">
                        {article.content}
                      </p>
                      {article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {hubTab === "docs" && (
          <>
            {/* ── Sidebar ── */}
            <aside
              className="w-60 xl:w-68 shrink-0 border-r border-border bg-card flex flex-col overflow-hidden hidden sm:flex"
              data-ocid="docs.sidebar"
            >
              <div className="p-3 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics…"
                    className="pl-8 h-8 text-xs rounded-lg"
                    data-ocid="docs.search_input"
                  />
                </div>
              </div>

              <ScrollArea className="flex-1">
                <div className="p-2 space-y-0.5">
                  {orderedDomains.length === 0 && (
                    <p className="text-xs text-muted-foreground px-2 py-4 text-center">
                      No topics match "{searchQuery}"
                    </p>
                  )}
                  {orderedDomains.map((domain) => {
                    const topics = grouped.get(domain)!;
                    const isExpanded = expandedDomains.has(domain);
                    return (
                      <div key={domain}>
                        <button
                          type="button"
                          onClick={() => toggleDomain(domain)}
                          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left hover:bg-muted/60 transition-colors"
                          data-ocid={`docs.domain.${domain.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <span className="text-sm">
                            {DOMAIN_ICONS[domain] ?? "📄"}
                          </span>
                          <span className="flex-1 text-xs font-semibold text-foreground truncate">
                            {domain}
                          </span>
                          <span className="text-[10px] text-muted-foreground shrink-0">
                            {topics.length}
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="w-3 h-3 text-muted-foreground shrink-0" />
                          ) : (
                            <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="ml-4 mt-0.5 space-y-0.5">
                            {topics.map((topic) => {
                              const isActive = selectedTopic?.id === topic.id;
                              return (
                                <button
                                  key={topic.id}
                                  type="button"
                                  onClick={() => selectTopic(topic)}
                                  className={`w-full text-left px-2 py-1.5 rounded-lg text-xs transition-colors border-l-2 ${
                                    isActive
                                      ? "bg-primary/10 text-primary border-primary font-semibold"
                                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent"
                                  }`}
                                  data-ocid={`docs.topic.${topic.id}`}
                                >
                                  {topic.title}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </aside>

            {/* ── Main content ── */}
            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto bg-background"
              data-ocid="docs.content"
            >
              {/* Mobile: domain pills */}
              <div className="sm:hidden border-b border-border px-3 py-2 overflow-x-auto flex gap-2 scrollbar-none">
                {orderedDomains.slice(0, 8).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => {
                      const first = grouped.get(d)?.[0];
                      if (first) selectTopic(first);
                    }}
                    className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:border-primary hover:text-primary text-muted-foreground transition-colors whitespace-nowrap"
                  >
                    {DOMAIN_ICONS[d]} {d}
                  </button>
                ))}
              </div>

              {selectedTopic ? (
                <div className="flex gap-0 xl:gap-6 max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-8 pb-24">
                  {/* Article */}
                  <article className="flex-1 min-w-0" data-ocid="docs.article">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 flex-wrap">
                      {selectedTopic.breadcrumb.map((crumb, i) => (
                        <span key={crumb} className="flex items-center gap-1.5">
                          {i > 0 && (
                            <ChevronRight className="w-3 h-3 shrink-0" />
                          )}
                          <span
                            className={
                              i === selectedTopic.breadcrumb.length - 1
                                ? "text-foreground font-medium"
                                : ""
                            }
                          >
                            {crumb}
                          </span>
                        </span>
                      ))}
                    </nav>

                    {/* Title + meta */}
                    <div className="mb-5">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 leading-tight">
                        {selectedTopic.title}
                      </h1>
                      <div className="flex flex-wrap items-center gap-3">
                        {diffConfig && selectedTopic.difficulty && (
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${diffConfig.color}`}
                            data-ocid="docs.difficulty_badge"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${diffConfig.dot}`}
                            />
                            {selectedTopic.difficulty}
                          </span>
                        )}
                        {selectedTopic.readTime && (
                          <span
                            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                            data-ocid="docs.read_time"
                          >
                            <Clock className="w-3.5 h-3.5" />
                            {selectedTopic.readTime}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    {selectedTopic.summary && (
                      <p
                        className="text-base text-foreground/80 leading-relaxed mb-6 pb-6 border-b border-border"
                        data-ocid="docs.summary"
                      >
                        {selectedTopic.summary}
                      </p>
                    )}

                    {/* Mobile TOC */}
                    {sections.length > 1 && (
                      <details
                        className="xl:hidden mb-6 rounded-xl border border-border bg-card p-4"
                        data-ocid="docs.toc_mobile"
                      >
                        <summary className="text-sm font-semibold text-foreground cursor-pointer select-none">
                          📋 Table of Contents
                        </summary>
                        <div className="mt-3">
                          <TableOfContents
                            sections={sections}
                            activeSection={activeSection}
                            onSectionClick={scrollToSection}
                          />
                        </div>
                      </details>
                    )}

                    {/* Prerequisites */}
                    {selectedTopic.prerequisites &&
                      selectedTopic.prerequisites.length > 0 && (
                        <div
                          className="mb-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4"
                          data-ocid="docs.prerequisites"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-400 text-sm">📖</span>
                            <span className="text-sm font-semibold text-blue-400">
                              Before you start
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedTopic.prerequisites.map((prereq) => {
                              const linkedTopic = DOC_TOPICS.find(
                                (t) => t.title === prereq || t.id === prereq,
                              );
                              return linkedTopic ? (
                                <button
                                  key={prereq}
                                  type="button"
                                  onClick={() => selectTopic(linkedTopic)}
                                  className="text-xs px-2.5 py-1 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors"
                                  data-ocid={`docs.prereq.${linkedTopic.id}`}
                                >
                                  {prereq} →
                                </button>
                              ) : (
                                <span
                                  key={prereq}
                                  className="text-xs px-2.5 py-1 rounded-full border border-border bg-muted text-muted-foreground"
                                >
                                  {prereq}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    {/* Rich sections (new format) */}
                    {sections.length > 0 ? (
                      <div className="space-y-8">
                        {sections.map((section) => (
                          <section
                            key={section.id}
                            id={section.id}
                            ref={(el) => {
                              sectionRefs.current[section.id] = el;
                            }}
                            data-ocid={`docs.section.${section.id}`}
                          >
                            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 pb-2 border-b border-border/60">
                              {section.heading}
                            </h2>
                            <div className="prose prose-sm max-w-none space-y-3 mb-4">
                              {section.content.split("\n\n").map((para, i) => (
                                <p
                                  key={`${section.id}-p${i}`}
                                  className="text-sm sm:text-base text-foreground/85 leading-relaxed"
                                >
                                  {para}
                                </p>
                              ))}
                            </div>
                            {section.codeExamples?.map((ex, ei) => (
                              <CodeBlock
                                key={`${section.id}-ex${ei}`}
                                example={ex}
                                label={ex.label}
                              />
                            ))}
                          </section>
                        ))}
                      </div>
                    ) : (
                      /* Legacy fallback: content + single codeExample */
                      <>
                        <div className="prose prose-sm max-w-none mb-6">
                          {selectedTopic.content
                            .split("\n\n")
                            .map((para, i) => (
                              <p
                                key={`para-${i}`}
                                className="text-sm sm:text-base text-foreground/85 leading-relaxed mb-4 last:mb-0"
                              >
                                {para}
                              </p>
                            ))}
                        </div>
                        <CodeBlock example={selectedTopic.codeExample} />
                      </>
                    )}

                    {/* Common Mistakes */}
                    {selectedTopic.commonMistakes &&
                      selectedTopic.commonMistakes.length > 0 && (
                        <div
                          className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5"
                          data-ocid="docs.common_mistakes"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span className="text-sm font-bold text-yellow-400">
                              Common Mistakes
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {selectedTopic.commonMistakes.map((mistake, i) => (
                              <li
                                key={`mistake-${i}`}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span className="text-yellow-400 mt-0.5 shrink-0">
                                  ⚠
                                </span>
                                {mistake}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {/* Best Practices */}
                    {selectedTopic.bestPractices &&
                      selectedTopic.bestPractices.length > 0 && (
                        <div
                          className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-5"
                          data-ocid="docs.best_practices"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                            <span className="text-sm font-bold text-green-400">
                              Best Practices
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {selectedTopic.bestPractices.map((tip, i) => (
                              <li
                                key={`tip-${i}`}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span className="text-green-400 mt-0.5 shrink-0">
                                  ✓
                                </span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {/* Related Topics */}
                    {selectedTopic.relatedTopics &&
                      selectedTopic.relatedTopics.length > 0 && (
                        <div
                          className="mt-8 pt-6 border-t border-border"
                          data-ocid="docs.related_topics"
                        >
                          <h3 className="text-sm font-bold text-foreground mb-3">
                            🔗 Related Topics
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedTopic.relatedTopics.map((rel) => {
                              const linkedTopic = DOC_TOPICS.find(
                                (t) => t.title === rel || t.id === rel,
                              );
                              return linkedTopic ? (
                                <button
                                  key={rel}
                                  type="button"
                                  onClick={() => selectTopic(linkedTopic)}
                                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                                  data-ocid={`docs.related.${linkedTopic.id}`}
                                >
                                  {rel}
                                </button>
                              ) : (
                                <span
                                  key={rel}
                                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted text-muted-foreground"
                                >
                                  {rel}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    {/* Prev / Next navigation */}
                    <div className="flex items-center justify-between pt-8 mt-6 border-t border-border">
                      <Button
                        variant="outline"
                        onClick={goPrevTopic}
                        disabled={!hasPrev}
                        className="rounded-xl gap-2"
                        data-ocid="docs.prev_topic"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Previous</span>
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        {currentIdx + 1} / {DOC_TOPICS.length}
                      </span>
                      <Button
                        variant="outline"
                        onClick={goNextTopic}
                        disabled={!hasNext}
                        className="rounded-xl gap-2"
                        data-ocid="docs.next_topic"
                      >
                        <span className="hidden sm:inline">Next Topic</span>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* ── Article Metadata Footer ── */}
                    {selectedTopic && (
                      <div
                        className="mt-8 pt-6 border-t border-border space-y-4"
                        data-ocid="docs.article_metadata"
                      >
                        {/* Summarize button */}
                        <div>
                          <button
                            type="button"
                            onClick={handleSummarize}
                            disabled={summaryLoading}
                            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors disabled:opacity-60"
                            data-ocid="docs.summarize_button"
                          >
                            {summaryLoading ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Sparkles className="w-4 h-4" />
                            )}
                            {summaryLoading
                              ? "Summarizing…"
                              : "✨ Summarize this article"}
                          </button>
                          {summaryOpen && (
                            <div
                              className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-4"
                              data-ocid="docs.summary_panel"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                                  ✨ AI Summary
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setSummaryOpen(false)}
                                  className="text-xs text-muted-foreground hover:text-foreground"
                                >
                                  ✕
                                </button>
                              </div>
                              {summaryLoading ? (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Loader2 className="w-4 h-4 animate-spin" />{" "}
                                  Generating…
                                </div>
                              ) : (
                                <div className="space-y-1.5">
                                  {summary?.split("\n").map((line, i) => (
                                    <p
                                      key={`sum-${i}`}
                                      className="text-sm text-foreground/85 leading-relaxed"
                                    >
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Reactions + views + improve */}
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>
                              👁️ {docViews[selectedTopic.id] ?? 1} views
                            </span>
                            <span>·</span>
                            <span>Last updated: Jan 2025</span>
                          </div>
                          <div className="flex items-center gap-2 ml-auto flex-wrap">
                            <button
                              type="button"
                              onClick={() =>
                                handleReaction(selectedTopic.id, "like")
                              }
                              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border hover:border-green-500/40 hover:bg-green-500/5 text-muted-foreground hover:text-green-400 transition-colors"
                              data-ocid="docs.reaction_like"
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              {docReactions[selectedTopic.id]?.likes ?? 0}
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleReaction(selectedTopic.id, "dislike")
                              }
                              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border hover:border-red-500/40 hover:bg-red-500/5 text-muted-foreground hover:text-red-400 transition-colors"
                              data-ocid="docs.reaction_dislike"
                            >
                              <ThumbsDown className="w-3.5 h-3.5" />
                              {docReactions[selectedTopic.id]?.dislikes ?? 0}
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowFeedbackForm((v) => !v)}
                              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
                              data-ocid="docs.improve_button"
                            >
                              💡 Improve Article
                            </button>
                          </div>
                        </div>

                        {/* Improve article feedback form */}
                        {showFeedbackForm && (
                          <div
                            className="space-y-2"
                            data-ocid="docs.feedback_form"
                          >
                            <textarea
                              value={feedbackText}
                              onChange={(e) => setFeedbackText(e.target.value)}
                              placeholder="Suggest improvements, report errors, or add missing content…"
                              rows={3}
                              className="w-full rounded-lg border border-input bg-muted/40 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                              data-ocid="docs.feedback_textarea"
                            />
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowFeedbackForm(false)}
                                className="rounded-lg text-xs"
                                data-ocid="docs.feedback_cancel"
                              >
                                Cancel
                              </Button>
                              <Button
                                size="sm"
                                onClick={handleSubmitFeedback}
                                disabled={!feedbackText.trim()}
                                className="rounded-lg text-xs"
                                data-ocid="docs.feedback_submit"
                              >
                                Submit Feedback
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </article>

                  {/* ── Right TOC (desktop) ── */}
                  {sections.length > 1 && (
                    <aside
                      className="hidden xl:block w-52 shrink-0"
                      data-ocid="docs.toc_desktop"
                    >
                      <div className="sticky top-6">
                        <TableOfContents
                          sections={sections}
                          activeSection={activeSection}
                          onSectionClick={scrollToSection}
                        />
                      </div>
                    </aside>
                  )}
                </div>
              ) : (
                <div
                  className="flex flex-col items-center justify-center h-full text-center px-6 py-16"
                  data-ocid="docs.empty_state"
                >
                  <div className="text-6xl mb-4">📚</div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Select a topic from the sidebar
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-sm">
                    Browse guides, code examples, and references for all 15
                    domains
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Heart,
  MessageCircle,
  Send,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";
import { useApp } from "../context/AppContext";
import {
  INTERVIEW_EXPERIENCES,
  type InterviewExperience,
} from "../data/interviewExperiences";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

interface CommunityPost {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  reactions: Record<string, number>;
  userReacted?: string;
}

// ─── localStorage helpers ────────────────────────────────────────────────────

function getComments(expId: string): Comment[] {
  try {
    return JSON.parse(localStorage.getItem(`cc_comments_${expId}`) ?? "[]");
  } catch {
    return [];
  }
}

function saveComments(expId: string, comments: Comment[]) {
  localStorage.setItem(`cc_comments_${expId}`, JSON.stringify(comments));
}

function getCommunityPosts(): CommunityPost[] {
  try {
    return JSON.parse(localStorage.getItem("cc_community_posts") ?? "[]");
  } catch {
    return [];
  }
}

function saveCommunityPosts(posts: CommunityPost[]) {
  localStorage.setItem("cc_community_posts", JSON.stringify(posts));
}

function getLikeCount(expId: string): number {
  try {
    return Number(
      localStorage.getItem(`cc_exp_likes_${expId}`) ??
        String(Math.floor(Math.random() * 40) + 5),
    );
  } catch {
    return 0;
  }
}

function setLikeCount(expId: string, count: number) {
  localStorage.setItem(`cc_exp_likes_${expId}`, String(count));
}

function hasLiked(expId: string): boolean {
  return localStorage.getItem(`cc_exp_liked_${expId}`) === "1";
}

// ─── Constants ───────────────────────────────────────────────────────────────

const OUTCOME_STYLES: Record<
  InterviewExperience["outcome"],
  { label: string; cls: string }
> = {
  selected: {
    label: "✅ Selected",
    cls: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
  },
  rejected: {
    label: "❌ Rejected",
    cls: "bg-red-50 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  },
  pending: {
    label: "⏳ Pending",
    cls: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
  },
};

const DIFF_STYLES: Record<string, string> = {
  easy: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
  medium:
    "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
  hard: "bg-red-50 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
};

const EMOJI_REACTIONS = ["👍", "💪", "🔥", "❤️"];
const PAGE_SIZE = 5;

// ─── Comment Thread ───────────────────────────────────────────────────────────

function CommentThread({ expId }: { expId: string }) {
  const [comments, setComments] = useState<Comment[]>(() => getComments(expId));
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState(
    () => localStorage.getItem("cc_username") ?? "",
  );

  const handlePost = () => {
    const text = newComment.trim();
    if (!text) return;
    const author = authorName.trim() || "Anonymous";
    const comment: Comment = {
      id: `${expId}_${Date.now()}`,
      author,
      text,
      timestamp: new Date().toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    const updated = [...comments, comment];
    setComments(updated);
    saveComments(expId, updated);
    setNewComment("");
    if (authorName.trim())
      localStorage.setItem("cc_username", authorName.trim());
  };

  return (
    <div className="mt-3 pt-3 border-t border-border/50">
      {/* Existing comments */}
      {comments.length > 0 && (
        <div className="space-y-2 mb-3">
          {comments.map((c) => (
            <div key={c.id} className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-[10px] shrink-0">
                {c.author[0]?.toUpperCase() ?? "A"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-foreground">
                    {c.author}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {c.timestamp}
                  </span>
                </div>
                <p className="text-xs text-foreground/80 break-words leading-relaxed">
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New comment composer */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full text-xs bg-muted border border-border rounded-lg px-3 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          data-ocid={`comments.name_input.${expId}`}
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a comment…"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePost()}
            className="flex-1 min-w-0 text-xs bg-muted border border-border rounded-lg px-3 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            data-ocid={`comments.text_input.${expId}`}
          />
          <Button
            size="sm"
            onClick={handlePost}
            disabled={!newComment.trim()}
            className="h-8 px-3 rounded-lg text-xs shrink-0"
            data-ocid={`comments.post_button.${expId}`}
          >
            <Send className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExperienceCard({ exp }: { exp: InterviewExperience }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(() => hasLiked(exp.id));
  const [likeCount, setLikeCountState] = useState(() => getLikeCount(exp.id));
  const [showComments, setShowComments] = useState(false);
  const [commentCount] = useState(() => getComments(exp.id).length);

  const excerpt = exp.experienceText.slice(0, 200);
  const hasMore = exp.experienceText.length > 200;
  const outcomeStyle = OUTCOME_STYLES[exp.outcome];
  const diffStyle = DIFF_STYLES[exp.difficulty] ?? DIFF_STYLES.medium;

  const handleLike = () => {
    if (liked) return;
    const next = likeCount + 1;
    setLikeCountState(next);
    setLiked(true);
    setLikeCount(exp.id, next);
    localStorage.setItem(`cc_exp_liked_${exp.id}`, "1");
  };

  const initials = exp.authorName
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-5 shadow-sm"
      data-ocid={`feed.card.${exp.id}`}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-sm shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-foreground text-sm">
              {exp.authorName}
            </span>
            <span className="text-xs text-muted-foreground">
              {exp.date
                ? new Date(`${exp.date}-01`).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : ""}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-sm font-semibold text-foreground">
              {exp.logo} {exp.company}
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground truncate">
              {exp.role}
            </span>
          </div>
        </div>
        <span
          className={`text-xs font-bold px-2.5 py-1 rounded-full border shrink-0 ${outcomeStyle.cls}`}
        >
          {outcomeStyle.label}
        </span>
      </div>

      {/* Meta badges */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span
          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${diffStyle}`}
        >
          {exp.difficulty.charAt(0).toUpperCase() + exp.difficulty.slice(1)}
        </span>
        <span className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border">
          {exp.rounds} rounds
        </span>
        {exp.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-primary/80 bg-primary/5 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Experience text */}
      <p className="text-sm text-foreground leading-relaxed whitespace-pre-line mb-2">
        {expanded ? exp.experienceText : excerpt}
        {!expanded && hasMore && (
          <span className="text-muted-foreground">…</span>
        )}
      </p>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs text-primary font-semibold mb-3 hover:text-primary/80 transition-colors"
          data-ocid={`feed.expand.${exp.id}`}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> View full
            </>
          )}
        </button>
      )}

      {/* Tips (shown when expanded) */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 mb-3 overflow-hidden"
          >
            <p className="text-xs font-bold text-primary mb-2">💡 Top Tips</p>
            <ul className="space-y-1.5">
              {exp.tips.map((tip, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground/80 flex items-start gap-1.5"
                >
                  <span className="text-primary font-bold shrink-0 mt-px">
                    {i + 1}.
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer actions */}
      <div className="flex items-center gap-4 pt-2 border-t border-border/50">
        <button
          type="button"
          onClick={handleLike}
          disabled={liked}
          className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
            liked
              ? "text-red-500 cursor-default"
              : "text-muted-foreground hover:text-red-500"
          }`}
          data-ocid={`feed.like.${exp.id}`}
          aria-label={liked ? "Liked" : "Like this experience"}
        >
          <Heart className={`w-3.5 h-3.5 ${liked ? "fill-red-500" : ""}`} />
          {likeCount}
        </button>

        <button
          type="button"
          onClick={() => setShowComments((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          data-ocid={`feed.comments_toggle.${exp.id}`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          {showComments ? "Hide comments" : `View comments (${commentCount})`}
        </button>
      </div>

      {/* Comments section */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <CommentThread expId={exp.id} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Community Wall ───────────────────────────────────────────────────────────

function CommunityWall() {
  const [posts, setPosts] = useState<CommunityPost[]>(() =>
    getCommunityPosts(),
  );
  const [postText, setPostText] = useState("");
  const [postAuthor, setPostAuthor] = useState(
    () => localStorage.getItem("cc_username") ?? "",
  );
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handlePost = () => {
    const text = postText.trim();
    if (!text) return;
    const author = postAuthor.trim() || "Anonymous";
    const post: CommunityPost = {
      id: `post_${Date.now()}`,
      author,
      text,
      timestamp: new Date().toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
      reactions: { "👍": 0, "💪": 0, "🔥": 0, "❤️": 0 },
    };
    const updated = [post, ...posts];
    setPosts(updated);
    saveCommunityPosts(updated);
    setPostText("");
    if (postAuthor.trim())
      localStorage.setItem("cc_username", postAuthor.trim());
  };

  const handleReact = (postId: string, emoji: string) => {
    const reactedKey = `cc_post_reacted_${postId}`;
    if (localStorage.getItem(reactedKey)) return;
    const updated = posts.map((p) => {
      if (p.id !== postId) return p;
      return {
        ...p,
        reactions: {
          ...p.reactions,
          [emoji]: (p.reactions[emoji] ?? 0) + 1,
        },
        userReacted: emoji,
      };
    });
    setPosts(updated);
    saveCommunityPosts(updated);
    localStorage.setItem(reactedKey, emoji);
  };

  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <div className="space-y-4">
      {/* Post composer */}
      <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
        <p className="text-sm font-bold text-foreground">
          💬 Share something with the community
        </p>
        <input
          type="text"
          placeholder="Your name (optional)"
          value={postAuthor}
          onChange={(e) => setPostAuthor(e.target.value)}
          className="w-full text-sm bg-muted border border-border rounded-xl px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
          data-ocid="wall.author_input"
        />
        <Textarea
          placeholder="What's on your mind? Share study tips, achievements, questions…"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          rows={3}
          className="resize-none text-sm bg-muted border-border rounded-xl"
          data-ocid="wall.post_textarea"
        />
        <div className="flex justify-end">
          <Button
            onClick={handlePost}
            disabled={!postText.trim()}
            className="rounded-xl gap-2 text-sm"
            data-ocid="wall.post_button"
          >
            <Send className="w-3.5 h-3.5" /> Post
          </Button>
        </div>
      </div>

      {/* Posts list */}
      {visible.length === 0 && (
        <div className="text-center py-12" data-ocid="wall.empty_state">
          <p className="text-3xl mb-2">🌱</p>
          <p className="font-semibold text-foreground text-sm">
            Be the first to post!
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Share tips, wins, or questions with the community.
          </p>
        </div>
      )}

      {visible.map((post, i) => {
        const userReacted = localStorage.getItem(`cc_post_reacted_${post.id}`);
        return (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="bg-card border border-border rounded-2xl p-4"
            data-ocid={`wall.post.${i + 1}`}
          >
            {/* Author + time */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                {post.author[0]?.toUpperCase() ?? "A"}
              </div>
              <div>
                <span className="text-sm font-bold text-foreground">
                  {post.author}
                </span>
                <span className="text-xs text-muted-foreground ml-2">
                  {post.timestamp}
                </span>
              </div>
            </div>

            {/* Post text */}
            <p className="text-sm text-foreground leading-relaxed break-words mb-3">
              {post.text}
            </p>

            {/* Reactions */}
            <div className="flex flex-wrap gap-2">
              {EMOJI_REACTIONS.map((emoji) => {
                const count = post.reactions[emoji] ?? 0;
                const isReacted = userReacted === emoji;
                return (
                  <button
                    type="button"
                    key={emoji}
                    onClick={() => handleReact(post.id, emoji)}
                    disabled={!!userReacted}
                    className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border transition-all ${
                      isReacted
                        ? "bg-primary/15 border-primary/30 text-primary font-semibold"
                        : "bg-muted border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                    }`}
                    data-ocid={`wall.react_${emoji.codePointAt(0)}.${i + 1}`}
                    aria-label={`React with ${emoji}`}
                  >
                    <span>{emoji}</span>
                    {count > 0 && <span>{count}</span>}
                  </button>
                );
              })}
            </div>
          </motion.div>
        );
      })}

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="rounded-full gap-2 text-sm"
            data-ocid="wall.load_more_button"
          >
            <TrendingUp className="w-4 h-4" />
            Load More Posts
          </Button>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

type Tab = "experiences" | "wall";

export default function SocialFeedPage() {
  const { setPage } = useApp();
  const [activeTab, setActiveTab] = useState<Tab>("experiences");
  const [page, setPageNum] = useState(1);

  const followingList = useMemo<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("followingList") ?? "[]");
    } catch {
      return [];
    }
  }, []);

  const matchingExps = useMemo(() => {
    if (followingList.length === 0) return INTERVIEW_EXPERIENCES;
    const filtered = INTERVIEW_EXPERIENCES.filter((e) =>
      followingList.some((u) => u.toLowerCase() === e.authorName.toLowerCase()),
    );
    return filtered.length > 0 ? filtered : INTERVIEW_EXPERIENCES;
  }, [followingList]);

  const showingAll =
    followingList.length === 0 ||
    !INTERVIEW_EXPERIENCES.some((e) =>
      followingList.some((u) => u.toLowerCase() === e.authorName.toLowerCase()),
    );

  const sorted = useMemo(
    () =>
      [...matchingExps].sort((a, b) =>
        (b.date ?? "").localeCompare(a.date ?? ""),
      ),
    [matchingExps],
  );

  const visible = sorted.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < sorted.length;

  const switchTab = useCallback((tab: Tab) => {
    setActiveTab(tab);
    setPageNum(1);
  }, []);

  return (
    <div
      className="h-screen bg-background flex flex-col overflow-hidden"
      data-ocid="feed.page"
    >
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setPage("dashboard")}
          className="rounded-xl text-foreground shrink-0"
          data-ocid="feed.back_button"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-foreground text-base">Social Feed</h1>
          <p className="text-xs text-muted-foreground">
            Community · Interview Experiences
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2.5 py-1.5 rounded-full border border-border">
          <Users className="w-3.5 h-3.5" />
          {followingList.length} following
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-card border-b border-border px-4 flex gap-1 shrink-0">
        <button
          type="button"
          onClick={() => switchTab("experiences")}
          className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === "experiences"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
          data-ocid="feed.experiences_tab"
        >
          Interview Experiences
        </button>
        <button
          type="button"
          onClick={() => switchTab("wall")}
          className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === "wall"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
          data-ocid="feed.wall_tab"
        >
          Community Wall
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 pb-24 space-y-4">
          {/* Interview Experiences Tab */}
          {activeTab === "experiences" && (
            <>
              {showingAll && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 flex items-start gap-2.5"
                  data-ocid="feed.hint_banner"
                >
                  <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    <strong className="text-primary">Follow users</strong> from
                    the Leaderboard to see their experiences here — showing all
                    experiences for now.
                  </p>
                </motion.div>
              )}

              {visible.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}

              {hasMore && (
                <div className="flex justify-center pt-2">
                  <Button
                    variant="outline"
                    onClick={() => setPageNum((p) => p + 1)}
                    className="rounded-full gap-2"
                    data-ocid="feed.load_more_button"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Load More Experiences
                  </Button>
                </div>
              )}

              {visible.length === 0 && (
                <div
                  className="text-center py-16 text-muted-foreground"
                  data-ocid="feed.empty_state"
                >
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="font-semibold text-foreground">
                    No experiences found
                  </p>
                  <p className="text-sm mt-1">Be the first to share yours!</p>
                </div>
              )}
            </>
          )}

          {/* Community Wall Tab */}
          {activeTab === "wall" && <CommunityWall />}
        </div>
      </div>
    </div>
  );
}

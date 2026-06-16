import { ArrowLeft } from "lucide-react";
import AdvancedChatbot from "../components/AdvancedChatbot";

interface VideoPlayerPageProps {
  videoUrl: string;
  videoLabel: string;
  topicTitle: string;
  topicNotes: string;
  onBack: () => void;
}

function extractYouTubeId(url: string): string | null {
  try {
    const shortMatch = url.match(/youtu\.be\/([^?&#]+)/);
    if (shortMatch) return shortMatch[1];
    const watchMatch = url.match(/[?&]v=([^&#]+)/);
    if (watchMatch) return watchMatch[1];
    const embedMatch = url.match(/\/embed\/([^?&#]+)/);
    if (embedMatch) return embedMatch[1];
    return null;
  } catch {
    return null;
  }
}

export default function VideoPlayerPage({
  videoUrl,
  videoLabel,
  topicTitle,
  topicNotes,
  onBack,
}: VideoPlayerPageProps) {
  const videoId = extractYouTubeId(videoUrl);
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0&origin=https://ic0.app`
    : null;

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      {/* Top bar with back button */}
      <div
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-border bg-background/95 backdrop-blur shrink-0"
        data-ocid="video_player.panel"
      >
        <button
          type="button"
          onClick={onBack}
          data-ocid="video_player.close_button"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg px-2 py-1.5 hover:bg-muted min-h-[36px]"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">
            {videoLabel}
          </p>
          <p className="text-xs text-muted-foreground truncate">{topicTitle}</p>
        </div>
      </div>

      {/* Main content: video (top on mobile) + chat (below on mobile, side on desktop) */}
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row min-h-0">
        {/* Video pane */}
        <div className="w-full md:w-[58%] shrink-0 flex flex-col bg-black">
          {embedUrl ? (
            <>
              {/* 16:9 responsive container */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={embedUrl}
                  title={videoLabel}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              {/* Fallback link */}
              <div className="flex items-center justify-between gap-3 px-3 py-2 bg-background/90 border-t border-border">
                <p className="text-xs text-muted-foreground truncate flex-1">
                  Can't see the video?
                </p>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="video_player.primary_button"
                  className="inline-flex items-center gap-1.5 shrink-0 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-40 md:h-full text-muted-foreground text-sm bg-muted/30">
              <div className="text-center px-4">
                <span className="text-4xl mb-3 block">🎬</span>
                <p className="text-sm font-medium text-foreground mb-1">
                  Video not available in-app
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Watch it directly on YouTube for the best experience.
                </p>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="video_player.primary_button"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  ▶ Watch on YouTube
                </a>
              </div>
            </div>
          )}
          {/* Topic info — mobile only */}
          <div className="px-3 sm:px-4 py-2 bg-background/90 border-t border-border md:hidden">
            <p className="text-xs font-semibold text-foreground truncate">
              {videoLabel}
            </p>
            <p className="text-xs text-muted-foreground">{topicTitle}</p>
          </div>
        </div>

        {/* Chat pane — full-width below video on mobile, side panel on desktop */}
        <div
          className="flex-1 flex flex-col border-t md:border-t-0 md:border-l border-border min-h-0 overflow-hidden"
          data-ocid="video_player.chat_panel"
          style={{ minHeight: "240px" }}
        >
          <AdvancedChatbot
            topicTitle={topicTitle}
            topicContent={topicNotes}
            className="flex-1 rounded-none border-0"
          />
        </div>
      </div>
    </div>
  );
}

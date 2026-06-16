import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type EventCategory = "All" | "Hackathon" | "Contest" | "Program" | "Fellowship";

const EVENTS = [
  {
    id: 1,
    name: "TechGig Code Gladiators 2025",
    date: "July 2025",
    location: "Online",
    category: "Contest" as EventCategory,
    description:
      "India's biggest coding contest with 300,000+ participants. Multiple elimination rounds covering algorithms, data structures, and full-stack development.",
    prize: "₹5 Lakh",
    link: "https://www.techgig.com/codegladiators",
    hot: true,
  },
  {
    id: 2,
    name: "Smart India Hackathon 2025",
    date: "Aug 2025",
    location: "Nationwide, India",
    category: "Hackathon" as EventCategory,
    description:
      "Government of India's flagship hackathon for students to solve pressing national problems across healthcare, agriculture, smart cities, and more.",
    prize: "₹1 Lakh per team",
    link: "https://sih.gov.in",
    hot: true,
  },
  {
    id: 3,
    name: "HackWithInfy 2025",
    date: "Sep 2025",
    location: "Online",
    category: "Hackathon" as EventCategory,
    description:
      "Infosys's premier hackathon for engineering students. Build innovative tech solutions across AI, cloud, and enterprise domains.",
    prize: "₹50,000",
    link: "https://hackwithinfy.com",
    hot: true,
  },
  {
    id: 4,
    name: "HackBio Bioinformatics Hackathon 2025",
    date: "Sep 2025",
    location: "Online (Global)",
    category: "Hackathon" as EventCategory,
    description:
      "A global bioinformatics hackathon designed to bridge the gap between biological research and computational tools. Great for CS + biology intersect.",
    prize: "Recognition + Global Network",
    link: "https://hackbio.africa",
    hot: false,
  },
  {
    id: 5,
    name: "CodeChef SnackDown 2025",
    date: "Oct 2025",
    location: "Online",
    category: "Contest" as EventCategory,
    description:
      "CodeChef's annual global programming contest. Team of two compete across multiple rounds with algorithmic problems of varying difficulty.",
    prize: "₹2 Lakh",
    link: "https://www.codechef.com/snackdown",
    hot: true,
  },
  {
    id: 6,
    name: "ACM ICPC 2025",
    date: "Oct – Nov 2025",
    location: "Global (Multi-site)",
    category: "Contest" as EventCategory,
    description:
      "The International Collegiate Programming Contest — the world's most prestigious university-level programming competition with teams from 100+ countries.",
    prize: "Global Recognition + Cash",
    link: "https://icpc.global",
    hot: true,
  },
  {
    id: 7,
    name: "MLH Local Hack Day 2025",
    date: "Nov 2025",
    location: "Global (Multiple venues)",
    category: "Hackathon" as EventCategory,
    description:
      "Major League Hacking's global 24-hour hackathon series with simultaneous events across cities worldwide. Build projects for real prizes.",
    prize: "$5,000 prize pool",
    link: "https://localhackday.mlh.io",
    hot: false,
  },
  {
    id: 8,
    name: "Flipkart Grid 6.0 2025",
    date: "Online",
    location: "Online + Bengaluru Finals",
    category: "Hackathon" as EventCategory,
    description:
      "Flipkart's flagship engineering challenge for students. Solve real-world e-commerce, supply chain, and AI problems. PPO opportunities for top performers.",
    prize: "₹3 Lakh + PPO",
    link: "https://unstop.com/hackathons/flipkart-grid",
    hot: true,
  },
  {
    id: 9,
    name: "Codeforces Global Round 2025",
    date: "Multiple rounds, 2025",
    location: "Online",
    category: "Contest" as EventCategory,
    description:
      "Highly-rated global rounds on Codeforces open to all competitive programmers. Each round contributes to global ratings and features hard algorithmic problems.",
    prize: "Ratings + Prizes",
    link: "https://codeforces.com/contests",
    hot: false,
  },
  {
    id: 10,
    name: "LeetCode Weekly Contest 2025",
    date: "Every Sunday, 2025",
    location: "Online",
    category: "Contest" as EventCategory,
    description:
      "Weekly timed contests on LeetCode with 4 problems across difficulty levels. Crucial for building problem-solving speed for technical interviews.",
    prize: "Badges + LeetCoins",
    link: "https://leetcode.com/contest",
    hot: false,
  },
  {
    id: 11,
    name: "Google Summer of Code 2026",
    date: "Applications open Feb 2026",
    location: "Online (Global)",
    category: "Program" as EventCategory,
    description:
      "Google's prestigious global program connecting students with open source organizations. Work on real projects under experienced mentors for a stipend.",
    prize: "$1,500 – $6,600 stipend",
    link: "https://summerofcode.withgoogle.com",
    hot: true,
  },
  {
    id: 12,
    name: "Devfolio Hackathons 2025",
    date: "Multiple, throughout 2025",
    location: "Various locations (India + Online)",
    category: "Hackathon" as EventCategory,
    description:
      "India's leading hackathon platform hosting multiple in-person and online events across universities and cities. Discover and apply to 100+ hackathons.",
    prize: "Varies per event",
    link: "https://devfolio.co/hackathons",
    hot: false,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Hackathon: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Contest: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Program: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Fellowship: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

const PAGE_SIZE = 6;

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories: EventCategory[] = [
    "All",
    "Hackathon",
    "Contest",
    "Program",
    "Fellowship",
  ];

  const filtered =
    activeFilter === "All"
      ? EVENTS
      : EVENTS.filter((e) => e.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = (cat: EventCategory) => {
    setActiveFilter(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="px-3 sm:px-4 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <h2 className="text-lg sm:text-xl font-extrabold text-foreground">
            🎤 Events &amp; Opportunities
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            2025–2026 hackathons, contests &amp; programs
          </p>
        </div>

        {/* Filters — horizontally scrollable on mobile */}
        <div
          className="px-3 sm:px-4 pb-3 sm:pb-4 flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              data-ocid={`events.filter_${cat.toLowerCase()}.tab`}
              onClick={() => handleFilterChange(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border shrink-0 min-h-[36px] ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-muted-foreground border-border hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="px-3 sm:px-4 pb-24 space-y-3">
          <AnimatePresence mode="popLayout">
            {visible.map((event, i) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                data-ocid={`events.item.${i + 1}`}
                className="bg-card border border-border rounded-2xl p-3 sm:p-4 relative overflow-hidden"
              >
                {event.hot && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded-full font-semibold">
                      🔥 Hot
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-2 mb-2">
                  <div className="flex-1 min-w-0 pr-14">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-foreground text-sm leading-tight">
                        {event.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border font-medium ${CATEGORY_COLORS[event.category] ?? "bg-muted text-muted-foreground border-border"}`}
                      >
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-muted-foreground mb-2 sm:mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 shrink-0" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate max-w-[140px] sm:max-w-none">
                      {event.location}
                    </span>
                  </span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {event.description}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-primary truncate">
                    🏆 {event.prize}
                  </span>
                  <Button
                    size="sm"
                    data-ocid={`events.register.button.${i + 1}`}
                    className="h-8 text-xs rounded-full bg-primary text-primary-foreground px-3 shrink-0"
                    onClick={() => {
                      if (event.link !== "#") window.open(event.link, "_blank");
                    }}
                  >
                    {event.link !== "#" ? (
                      <>
                        <ExternalLink className="w-3 h-3 mr-1" /> Register
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                data-ocid="events.load_more_button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="rounded-full gap-2 text-sm"
              >
                Load More Events ({filtered.length - visibleCount} remaining)
              </Button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-16" data-ocid="events.empty_state">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-muted-foreground">
                No events in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

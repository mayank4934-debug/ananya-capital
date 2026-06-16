export interface InterviewExperience {
  id: string;
  company: string;
  logo: string; // emoji
  role: string;
  difficulty: "easy" | "medium" | "hard";
  rounds: number;
  experienceText: string; // multi-paragraph narrative
  tips: [string, string, string];
  authorName: string;
  date: string; // YYYY-MM
  outcome: "selected" | "rejected" | "pending";
  tags: string[];
}

export const INTERVIEW_EXPERIENCES: InterviewExperience[] = [
  {
    id: "exp-01",
    company: "Google",
    logo: "🔵",
    role: "Software Engineer II (L4)",
    difficulty: "hard",
    rounds: 5,
    experienceText: `I applied through LinkedIn and got a recruiter call within 2 weeks. The recruiter was friendly and explained the process clearly — phone screen followed by 4–5 onsite rounds (virtual). She also shared preparation materials and gave me 6 weeks to prepare.

The phone screen was a LeetCode Medium on sliding window. I solved it in ~20 minutes and explained the time complexity clearly. The interviewer asked follow-up questions about edge cases and optimizations — this is where many people lose points. I walked through 3 edge cases before even coding.

For the onsite, I had 2 coding rounds, 1 system design, and 1 Googleyness round. The coding rounds were on arrays and graphs — one problem involved BFS on a grid with obstacles, and the other was a DP problem on string matching. For system design, I was asked to design a URL shortener at Google scale. I covered load balancing, hashing strategies, database sharding, and cache invalidation. The Googleyness round felt like a casual conversation but every answer was evaluated against their values.

I got the call 3 weeks after my final interview — selected! The key was communicating my thought process before coding, and always discussing trade-offs in system design.`,
    tips: [
      "Always explain your approach out loud before writing any code — Googlers specifically evaluate communication skills",
      "For system design, think at scale from the start: latency, throughput, fault tolerance, and data replication",
      "The Googleyness round is not casual — prepare 2–3 specific stories showing impact, collaboration, and learning",
    ],
    authorName: "Arjun Mehta",
    date: "2026-02",
    outcome: "selected",
    tags: ["FAANG", "SDE-2", "DP", "Graphs", "System Design"],
  },
  {
    id: "exp-02",
    company: "Amazon",
    logo: "🟠",
    role: "SDE-1 (Fresh Graduate)",
    difficulty: "medium",
    rounds: 4,
    experienceText: `I got the Amazon interview opportunity through the campus placement process. There were two online assessment rounds first — the first had 2 coding questions (Easy + Medium) and a work simulation survey, the second had 3 coding questions under a time limit.

After clearing the OA, I had a virtual loop with 3 SDE rounds and 1 Bar Raiser round. The first SDE round was purely DSA — I got a problem involving merging K sorted linked lists. I used a min-heap approach. The interviewer was pleased with the approach but asked me to optimize space. We discussed trade-offs.

The second round was more design-focused: design a parking lot system with object-oriented principles. I designed the class hierarchy (ParkingLot, Floor, Slot, Vehicle, Ticket) and discussed extensibility. The Bar Raiser round surprised me — it combined a medium DSA problem with deep dives into past projects. Every behavioral answer was mapped to Amazon Leadership Principles.

I prepared 2 STAR stories per Leadership Principle. That alone set me apart. I got a call from the recruiter 10 days later — offered!`,
    tips: [
      "Prepare STAR stories for ALL 16 Leadership Principles — the Bar Raiser round is 50% behavioral",
      "For low-level design, always start with requirements and then define entities before writing any code",
      "During OA, submit early and test with custom edge cases — don't wait for all test cases to appear",
    ],
    authorName: "Priya Sharma",
    date: "2026-01",
    outcome: "selected",
    tags: ["FAANG", "SDE-1", "Fresher", "LLD", "Leadership Principles"],
  },
  {
    id: "exp-03",
    company: "Microsoft",
    logo: "🪟",
    role: "SDE-2 (Backend)",
    difficulty: "medium",
    rounds: 4,
    experienceText: `Microsoft's process was the smoothest I've experienced. Recruiter explained every step, gave feedback after each round, and the team was genuinely welcoming. I applied directly through their careers portal.

The technical phone screen had a medium BST problem — I coded a solution, explained the recursion, and discussed iterative alternatives. The interviewer appreciated that I proactively mentioned an edge case with duplicate values in a BST.

The onsite had 3 technical rounds. Round 1 was DSA — a hard graph problem on detecting if two routes in a DAG lead to the same destination, which I solved with DFS + memoization. Round 2 was system design — I designed an online code editor with real-time collaboration (like VS Code Live Share). I covered WebSocket connections, operational transforms for conflict resolution, and document versioning.

Round 3 was a past project deep-dive. I presented a distributed caching system I built during my previous job. The interviewer was technically sharp and asked about consistency models and cache invalidation strategies. The hiring manager call was confirming the offer — a very positive experience.`,
    tips: [
      "Microsoft focuses on growth mindset — if you're stuck, acknowledge it and show how you'd approach learning",
      "System design rounds expect you to ask clarifying questions about scale before diving in — don't assume",
      "Have a deep technical story about a project you built: architecture decisions, trade-offs, and what you'd improve",
    ],
    authorName: "Rahul Verma",
    date: "2026-01",
    outcome: "selected",
    tags: ["FAANG", "SDE-2", "System Design", "Graphs", "OOP"],
  },
  {
    id: "exp-04",
    company: "Meta",
    logo: "🔷",
    role: "Software Engineer (E4)",
    difficulty: "hard",
    rounds: 5,
    experienceText: `Meta's recruitment process was intense but transparent. After submitting my application online, a recruiter reached out within a week. She was extremely helpful — she shared a prep guide and even scheduled a pre-prep call to explain Meta's evaluation criteria.

The first coding phone screen had a hard graph problem — find the minimum number of operations to connect all nodes in a network. I used a Union-Find approach. The interviewer probed into why I chose Union-Find over BFS, which led to a discussion on time complexities.

The onsite had 2 coding rounds, 1 system design, and 1 behavioral round. The coding rounds were hard — one involved backtracking (subsets of subsets under constraints) and the other was a two-dimensional DP on grid paths with obstacles. Both were completed, but I ran over time on the DP problem by 5 minutes. For system design, I designed Instagram's news feed system — covering CDN, fan-out strategies, sharding by user ID, and cache layers.

The behavioral round was evaluated strictly. Meta focuses on their values: Move Fast, Be Bold, Focus on Impact. My stories needed to show data-driven decisions and measurable outcomes. I got the offer — but it was close. The interviewer later mentioned my system design and communication saved me.`,
    tips: [
      "Meta's coding bar is very high — practice hard-level LeetCode problems, especially DP and backtracking",
      "System design must show scale thinking: assume billions of users from the start, not thousands",
      "Behavioral answers MUST include quantifiable impact (e.g., 'reduced latency by 40%', 'increased DAU by 15%')",
    ],
    authorName: "Sneha Kapoor",
    date: "2025-12",
    outcome: "selected",
    tags: ["FAANG", "E4", "Graph", "DP", "System Design", "Backtracking"],
  },
  {
    id: "exp-05",
    company: "Flipkart",
    logo: "🛒",
    role: "SDE-1 (Campus Placement)",
    difficulty: "medium",
    rounds: 3,
    experienceText: `Flipkart visited our campus for placements. The first round was a proctored online test with 3 sections: MCQs on CS fundamentals (OS, DBMS, Networks), 2 coding questions, and a general aptitude section. I scored well in coding and got a decent score in CS theory, which was enough to clear.

The second round was a technical interview. The interviewer asked me to implement a browser history system using a doubly linked list with forward and backward navigation, plus an LRU eviction policy. I designed the classes, handled edge cases, and coded the solution in ~35 minutes. We then discussed time and space complexities.

The third round was a system design and culture fit. I was asked to design a basic version of Flipkart's search auto-complete feature. I proposed a Trie data structure on the front-end combined with a back-end API with Redis caching for popular searches. The interviewer seemed impressed that I discussed the trade-off between full-client Trie and API-based suggestions.

The HR round was brief — compensation discussion and joining timeline. I received the offer letter within 5 days.`,
    tips: [
      "Prepare data structures from scratch (implement LinkedList, Stack, Trie yourself before the interview)",
      "CS fundamentals matter for Flipkart — brush up on OS scheduling, SQL joins, and HTTP protocol",
      "Low-level design questions are common — practice designing parking lots, library systems, and similar",
    ],
    authorName: "Karan Malhotra",
    date: "2025-11",
    outcome: "selected",
    tags: ["Campus", "SDE-1", "Fresher", "LLD", "Trie"],
  },
  {
    id: "exp-06",
    company: "Adobe",
    logo: "🔴",
    role: "Computer Scientist (MTS-1)",
    difficulty: "medium",
    rounds: 4,
    experienceText: `Adobe's hiring process is unique compared to FAANG — there's more emphasis on projects and computer science fundamentals alongside DSA. I applied through Adobe's campus program at IIT Roorkee.

Round 1 was an online test: 20 MCQs (DBMS, OS, OOP, Algorithms) + 2 coding problems. The coding problems were medium difficulty — one on interval merging and another on matrix spiral traversal.

Round 2 was a technical interview. The interviewer dove deep into my final year project (an image segmentation model using CNNs). He then pivoted to a DSA problem: given a string with nested expressions, evaluate it — essentially implementing a mini-parser. I used a stack-based recursive descent approach.

Round 3 was a system design round focused on scalability. I was asked to design a real-time collaborative document editor. I drew parallels to Google Docs and discussed WebSockets, conflict resolution using operational transforms (OT), and user presence indicators.

Round 4 was HR + culture fit with the hiring manager. The offer came 2 weeks later with a generous relocation package.`,
    tips: [
      "Adobe specifically values CS theory — prepare DBMS normalization, OS scheduling, and network protocols",
      "Be ready to go deep on any project you mention — they will ask follow-up questions about every design decision",
      "System design rounds at Adobe focus on correctness and extensibility, not just scale",
    ],
    authorName: "Divya Nair",
    date: "2025-10",
    outcome: "selected",
    tags: ["Campus", "MTS-1", "System Design", "CS Theory", "Stack"],
  },
  {
    id: "exp-07",
    company: "Razorpay",
    logo: "💰",
    role: "Software Development Engineer",
    difficulty: "medium",
    rounds: 3,
    experienceText: `I applied to Razorpay through a referral from a friend. The process was fast — recruiter call, 2 technical rounds, and an offer within 3 weeks.

The first technical round was live coding on a shared IDE. I was given a problem: implement a rate limiter with a sliding window algorithm. I implemented it using a sorted list of timestamps and discussed the trade-offs with Redis-based solutions. The interviewer appreciated the in-depth discussion of production considerations.

The second round was system design. I was asked to design Razorpay's payment gateway — handling concurrent payment requests, idempotency keys to prevent double charges, webhook retries with exponential backoff, and fraud detection hooks. The interviewer was clearly a domain expert and asked about eventual consistency in payment flows.

The final round was with the engineering manager and touched on team fit, past projects, and product thinking. He asked how I'd improve the merchant onboarding flow — a product-thinking question that I wasn't fully prepared for but handled by asking clarifying questions.`,
    tips: [
      "For fintech interviews, understand idempotency, two-phase commit, and distributed transaction patterns",
      "Razorpay loves candidates who can discuss their solutions in terms of real production trade-offs",
      "Prepare one product thinking question: 'How would you improve X?' — it shows ownership mentality",
    ],
    authorName: "Ananya Bose",
    date: "2026-03",
    outcome: "selected",
    tags: [
      "Startup",
      "Fintech",
      "System Design",
      "Rate Limiting",
      "Distributed Systems",
    ],
  },
  {
    id: "exp-08",
    company: "Google",
    logo: "🔵",
    role: "Senior Software Engineer (L5)",
    difficulty: "hard",
    rounds: 5,
    experienceText: `My second attempt at Google after being rejected at L4 three years ago. The process has matured significantly — interviewers were more structured, and the feedback loop was cleaner.

The phone screen had a hard problem involving topological sort on a dependency graph with cycles — I had to detect cycles AND return a valid order for non-cyclic components. I solved it with DFS coloring and got a strong signal.

The onsite was virtual. The two coding rounds had a hard DP problem (minimum cost to cut a stick, which requires interval DP) and a graph problem on minimum spanning trees with constraints. For the senior-level system design, I was asked to design YouTube's video upload and processing pipeline — I covered chunked uploads, transcoding workers, CDN distribution, and metadata indexing at scale.

The leadership round was the most intensive — as an L5, they expected examples where I had led technical decisions, mentored engineers, and resolved ambiguous product requirements. I spent 2 weeks preparing 8–10 detailed leadership stories before the interview.`,
    tips: [
      "For senior roles, prepare leadership stories showing you navigated ambiguity and influenced without authority",
      "Hard DP patterns like interval DP and DP on trees appear frequently in L5+ rounds — practice them specifically",
      "System design at senior level expects you to proactively address failure modes, SLAs, and operational concerns",
    ],
    authorName: "Vikram Singh",
    date: "2026-02",
    outcome: "selected",
    tags: [
      "FAANG",
      "L5",
      "Senior",
      "Interval DP",
      "Leadership",
      "System Design",
    ],
  },
  {
    id: "exp-09",
    company: "Swiggy",
    logo: "🍔",
    role: "Backend Engineer (3 years exp)",
    difficulty: "medium",
    rounds: 3,
    experienceText: `Swiggy reached out through LinkedIn — their recruiter was very clear about the process and timeline. The entire process took about 2 weeks.

Round 1 was a take-home coding assignment. I had to build a REST API for a restaurant ordering system in Go. The requirements included menu management, cart, order creation, and basic authentication. I built it in about 5 hours, wrote unit tests, and added a clear README with setup instructions.

Round 2 was a technical review of my take-home with 2 engineers. They asked about my design decisions: why I chose a particular database schema, how I'd handle concurrent orders for the same menu item, and how I'd scale the service. I answered confidently since I had thought through these decisions.

Round 3 was a system design + behavioral combined. The design question was to scale the ordering system to handle Swiggy's actual load (millions of orders/day). I introduced a message queue (Kafka) for order processing, a geospatial database for restaurant matching, and a pub/sub system for real-time order tracking updates.`,
    tips: [
      "Take-home assignments are an opportunity to show code quality — write tests, add error handling, document your README",
      "Always be prepared to defend every design decision in your take-home with clear reasoning",
      "Food-tech system design should address real-time geolocation, restaurant availability windows, and peak load handling",
    ],
    authorName: "Rohan Das",
    date: "2025-12",
    outcome: "selected",
    tags: ["Startup", "Backend", "Go", "System Design", "Take-home"],
  },
  {
    id: "exp-10",
    company: "Meta",
    logo: "🔷",
    role: "Software Engineer (New Grad)",
    difficulty: "hard",
    rounds: 4,
    experienceText: `I applied during Meta's university recruiting season. The first step was a recruiter call where they assessed my academic background and motivation. They scheduled a technical screen 2 weeks later.

The phone screen had two LeetCode-style problems in 45 minutes — one easy and one hard. The easy one was straightforward (string manipulation), but the hard one was a graph problem finding the minimum number of roads connecting all cities. I solved both but the hard one took me 30 minutes.

The onsite (virtual) had two coding rounds and one behavioral round. The first coding round was a hard backtracking problem: generate all valid combinations of brackets given n pairs. I extended to n-triplets brackets as a follow-up. The second coding round was DP — longest increasing path in a matrix.

The behavioral round was evaluated against Meta's values (Move Fast, Be Bold, Focus on Long-Term Impact, Be Open, Build Social Value). I got the offer, but the recruiter mentioned the coding rounds were strong and behavioral was borderline — they expected more quantifiable examples.`,
    tips: [
      "Meta's new grad bar is surprisingly high — treat it the same as experienced hire preparation",
      "Behavioral answers for new grads should highlight internship or project impact with metrics where possible",
      "Practice two hard problems back-to-back under 45 minutes to simulate the phone screen pressure",
    ],
    authorName: "Nisha Rao",
    date: "2026-01",
    outcome: "selected",
    tags: ["FAANG", "New Grad", "Backtracking", "DP", "Behavioral"],
  },
  {
    id: "exp-11",
    company: "Zepto",
    logo: "⚡",
    role: "Backend Engineer (Go)",
    difficulty: "medium",
    rounds: 3,
    experienceText: `Zepto's interview process is fast and practical — they care more about real-world problem-solving than algorithmic puzzles. I applied through a job posting and heard back within 3 days.

The first round was a 30-minute technical call with a senior engineer. He asked me about my experience with Go, concurrency patterns, and database design. He then gave a live coding exercise: design and implement a basic rate limiter using token bucket algorithm in Go. I wrote the code, tested it with a few scenarios, and we discussed goroutine safety.

The second round was more extensive — a 90-minute technical session with 2 engineers. I was asked to design Zepto's real-time inventory management system handling 10,000+ SKUs across 500+ dark stores. I covered event-driven architecture with Kafka, CQRS for read/write separation, and optimistic locking for concurrent inventory updates.

The third round was with the Engineering Director — very product-oriented. He wanted to understand how I'd approach building a new feature from scratch, prioritize technical debt, and mentor junior engineers. I felt like I was being evaluated as much for cultural fit as technical skills.`,
    tips: [
      "Zepto values engineers who understand both product and systems — study quick-commerce domain problems",
      "Concurrency is important for backend roles — know goroutines/channels (Go) or Java concurrent utilities deeply",
      "Leadership round at startups tests team-building thinking — prepare examples of mentoring or knowledge sharing",
    ],
    authorName: "Aryan Joshi",
    date: "2026-03",
    outcome: "selected",
    tags: ["Startup", "Go", "Concurrency", "System Design", "Quick Commerce"],
  },
  {
    id: "exp-12",
    company: "Amazon",
    logo: "🟠",
    role: "SDE-2 (Machine Learning)",
    difficulty: "hard",
    rounds: 5,
    experienceText: `Amazon's ML SDE role is a hybrid — you need both strong DSA and ML engineering skills. The recruiter was very specific about what to expect and what to prepare. The online assessment had 2 ML-focused coding problems (implementing gradient descent, feature scaling) + 1 standard DSA problem.

The first technical round focused on ML systems. I was asked to design a recommendation system for Amazon's product page — I covered collaborative filtering, content-based filtering, data pipeline architecture, and A/B testing infrastructure. The interviewer dug into cold-start problems and how I'd handle a new product with no review history.

The second technical round was pure DSA — a hard problem on detecting patterns in a stream of data using sliding windows with complex constraints. I solved it but with hints, which slightly reduced my signal. Always try to solve independently before asking for hints.

Rounds 3–5 were leadership-focused. The Bar Raiser spent 45 minutes on behavioral questions exclusively. My preparation with STAR stories paid off — I had clear metrics for every example (improved system latency by 30%, reduced deployment time by 50%).`,
    tips: [
      "For ML engineering roles, prepare both system design for ML pipelines and standard DSA — it's a double bar",
      "Know the trade-offs between collaborative filtering and content-based recommendations, and when to use each",
      "Don't ask for hints unless you've genuinely tried for 5+ minutes — it signals desperation to the interviewer",
    ],
    authorName: "Pooja Krishnan",
    date: "2025-11",
    outcome: "selected",
    tags: [
      "FAANG",
      "SDE-2",
      "ML Engineering",
      "Recommendation System",
      "Leadership",
    ],
  },
  {
    id: "exp-13",
    company: "Atlassian",
    logo: "🔧",
    role: "Software Engineer (Remote)",
    difficulty: "medium",
    rounds: 4,
    experienceText: `Atlassian's process is entirely remote and asynchronous-friendly. I applied online and got an email within a week. The recruiter was great at setting expectations and provided a detailed guide.

Round 1 was a HackerRank take-home test with 4 problems (2 easy, 2 medium) — I had 3 days to submit. I finished all 4 and scored 100%, which set a strong first impression.

Round 2 was a live coding session. Two medium problems in 60 minutes. I was solving on a shared coding platform (no IDE). I solved both within 45 minutes and used the remaining 15 minutes to walk through my approach and suggest optimizations.

Round 3 was system design — design Jira's project management backend. I covered the data model (projects, issues, comments, attachments), indexing strategy for search, and real-time notifications via WebSockets. The interviewer was particularly interested in the attachment storage design — I proposed S3-compatible object storage with presigned URLs.

Round 4 was a values and team fit interview. Atlassian heavily emphasizes their 5 values: open company, no bullshit, play as a team, build with heart and balance, be the change you seek.`,
    tips: [
      "Atlassian's values interview is critical — read their company values deeply and prepare honest stories for each",
      "For fully remote roles, demonstrate strong async communication skills and initiative in your behavioral answers",
      "System design for productivity tools should focus on real-time collaboration, notifications, and search at scale",
    ],
    authorName: "Akash Tiwari",
    date: "2026-02",
    outcome: "selected",
    tags: ["Remote", "Product Company", "System Design", "Jira", "Values"],
  },
  {
    id: "exp-14",
    company: "Microsoft",
    logo: "🪟",
    role: "SDE-1 (Fresher via Campus)",
    difficulty: "medium",
    rounds: 3,
    experienceText: `Microsoft visited our campus and the placement drive spanned 2 days. The online test was 3 coding problems in 90 minutes — I solved all 3 and was selected for the interview rounds.

The first interview round had a hard recursion problem: print all valid paths in a maze with obstacles. I solved it using DFS with backtracking and the interviewer was happy with the cleanness of my recursion. He then asked about the time complexity and whether memoization could help — good conversation.

The second round was on OOP and low-level design. I was asked to design a notification system supporting multiple channels (email, SMS, push) and different user preferences. I used the Observer design pattern and polymorphism to design extensible notification handlers. The interviewer grilled me on adding a new channel — I showed how my design required minimal changes (open/closed principle).

Round 3 was the hiring manager round — very conversational. He asked about my projects, what excites me about Microsoft, and how I handle disagreements in a team. I was honest and specific, which seemed to resonate well.`,
    tips: [
      "Low-level design rounds are extremely common at Microsoft campus — practice designing at least 5 systems",
      "Know design patterns deeply (Factory, Observer, Strategy, Singleton) and when to apply them",
      "The hiring manager round evaluates culture fit — be authentic, specific, and show genuine interest in Microsoft's products",
    ],
    authorName: "Simran Kaur",
    date: "2025-09",
    outcome: "selected",
    tags: ["Campus", "Fresher", "SDE-1", "LLD", "Recursion", "Design Patterns"],
  },
  {
    id: "exp-15",
    company: "Google",
    logo: "🔵",
    role: "Software Engineer Intern (STEP)",
    difficulty: "medium",
    rounds: 2,
    experienceText: `I was a 2nd-year engineering student when I applied to Google's STEP (Student Training in Engineering Program) internship. The program specifically targets 2nd/3rd year students who are underrepresented in tech.

The process had just one technical interview — a 45-minute session with a Google engineer. I had studied Data Structures for 3 months before this. The interviewer was incredibly supportive and created a comfortable environment. The problem was medium difficulty: given a matrix of characters, find the largest connected component of the same character (a variant of Number of Islands).

I solved it using DFS and handled edge cases like empty matrices and single-cell inputs. The interviewer guided me when I was stuck — STEP interviews are intentionally more forgiving than full-time interviews. He then asked me to discuss my college projects and what I hoped to learn at Google.

I received my offer 3 weeks later. The 10-week internship itself was incredible — I worked on Google Maps' backend with a dedicated mentor, and my work was actually shipped to production.`,
    tips: [
      "STEP is designed for 2nd/3rd year students — don't be intimidated by it, start applying early in your degree",
      "For intern interviews, focus on communicating your thought process clearly — they're evaluating potential, not perfection",
      "Show genuine curiosity and learning mindset in the HR section — Google STEP values growth potential above all else",
    ],
    authorName: "Tanvi Gupta",
    date: "2025-08",
    outcome: "selected",
    tags: ["Internship", "STEP", "Campus", "DFS", "Fresher", "2nd Year"],
  },
];

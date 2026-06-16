import type {
  CModule,
  CPart,
  CQuizQuestion,
  CSubsection,
  CTestProblem,
} from "./cProgrammingCourse";
import type { DocLink } from "./roadmaps";

// ─── Re-export course type ────────────────────────────────────────────────────

export interface SystemDesignCourse {
  id: string;
  title: string;
  description: string;
  category: string;
  certificate: boolean;
  modules: CModule[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const VIDEO = "dQw4w9WgXcQ";

function q(
  question: string,
  options: string[],
  correct: number,
  xp = 10,
): CQuizQuestion {
  return { question, options, correct, xp };
}

function sub(id: string, title: string, content: string): CSubsection {
  return { id, title, content };
}

function emptyTest(): CTestProblem[] {
  return [];
}

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const module0: CModule = {
  id: "system-design-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "system-design-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to System Design! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO SYSTEM DESIGN!

Hey! I'm so excited to be your companion on this System Design journey! 🏗️ System design is the skill that separates junior engineers from senior engineers — it's how you think about building systems that serve millions of users reliably. This knowledge is tested in every FAANG and big tech interview!

COURSE OVERVIEW
System Design is the process of defining the architecture, components, modules, interfaces, and data flow of a system to satisfy specified requirements. You'll master scalability fundamentals, database design and sharding, API design principles, caching strategies, message queues and event-driven architecture, microservices patterns, and real-world case studies like designing URL shorteners, Twitter, YouTube, and WhatsApp.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), and a Quiz (15 MCQs to test your knowledge). System Design is primarily conceptual and architecture-focused — coding questions appear only in parts where specific implementation is taught. After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~30 hours
This is a focused, concept-heavy course. Dedicate 1–2 hours per day and you'll be acing system design interviews in about 3–4 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "system-design-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this System Design course:

1. Scalability Basics — Horizontal vs vertical scaling, CAP theorem, latency vs throughput
2. Database Design — SQL vs NoSQL, sharding, replication, indexing strategies, consistency models
3. API Design — REST vs GraphQL vs gRPC, versioning, rate limiting, authentication patterns
4. Caching — Cache invalidation, Redis, CDNs, cache-aside vs write-through patterns
5. Message Queues — Kafka, RabbitMQ, event-driven architecture, pub/sub patterns
6. Microservices — Service decomposition, API gateways, service discovery, circuit breakers
7. Real-World Case Studies — Design URL shortener, Twitter feed, YouTube, WhatsApp, Uber`,
          codeExample: "",
        },
        {
          id: "system-design-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning

System Design is primarily architectural and conceptual. Most parts do not have traditional coding questions — instead, they test your ability to reason about trade-offs, design decisions, and architectural patterns through quizzes.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "system-design-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what system design is and why it matters for interviews
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part testing your architecture reasoning skills
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your System Design journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleProgrammingQuestions: [],
  moduleTest: emptyTest(),
};

// ─── Module 1: Fundamentals ───────────────────────────────────────────────────

const module1: CModule = {
  id: "sd-fundamentals",
  title: "Module 1: Fundamentals",
  outcome:
    "Understand the core principles that underpin scalable system design.",
  isLocked: false,
  parts: [
    {
      id: "sd-f-p1",
      title: "Part 1: Scalability",
      description:
        "Horizontal vs vertical scaling, stateless design, and scaling strategies.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Scalability is the ability of a system to handle growing load. Horizontal scaling adds more machines; vertical scaling upgrades existing ones.",
      docs: [
        {
          label: "Scalability – Wikipedia",
          url: "https://en.wikipedia.org/wiki/Scalability",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "What does horizontal scaling mean?",
          [
            "Upgrading CPU/RAM on one machine",
            "Adding more machines to the pool",
            "Reducing server count",
            "Compressing data",
          ],
          1,
        ),
        q(
          "Which scaling approach is limited by a single machine's max capacity?",
          ["Horizontal", "Vertical", "Diagonal", "Elastic"],
          1,
        ),
        q(
          "Stateless services are easier to scale because:",
          [
            "They store session in DB",
            "Any instance can handle any request",
            "They use less RAM",
            "They avoid load balancers",
          ],
          1,
        ),
        q(
          "A load balancer primarily:",
          [
            "Stores user sessions",
            "Distributes requests across servers",
            "Encrypts traffic",
            "Caches static assets",
          ],
          1,
        ),
        q(
          "Which is a common metric for measuring scalability?",
          [
            "Code coverage",
            "Throughput (requests/sec)",
            "Cyclomatic complexity",
            "Line count",
          ],
          1,
        ),
        q(
          "Sharding is a technique for:",
          [
            "Encrypting data",
            "Splitting data across multiple databases",
            "Caching responses",
            "Monitoring services",
          ],
          1,
        ),
        q(
          "Auto-scaling in cloud environments means:",
          [
            "Manual server addition",
            "Automatically adding or removing instances based on load",
            "Upgrading OS versions",
            "Compressing logs",
          ],
          1,
        ),
        q(
          "Which pattern helps scale reads by serving stale-tolerant data?",
          [
            "Write-ahead log",
            "Read replicas",
            "Two-phase commit",
            "Circuit breaker",
          ],
          1,
        ),
        q(
          "What is the bottleneck in a monolithic application?",
          [
            "Load balancer",
            "Any tightly-coupled component can limit the whole app",
            "The CDN",
            "DNS resolver",
          ],
          1,
        ),
        q(
          "Vertical scaling is also called:",
          ["Scale-out", "Scale-up", "Scale-in", "Scale-down"],
          1,
        ),
        q(
          "Which component helps absorb traffic spikes in a scalable system?",
          ["DNS", "Message queue", "Git repository", "Code linter"],
          1,
        ),
        q(
          "Idempotent operations are important in distributed systems because:",
          [
            "They reduce latency",
            "They can be retried safely without side effects",
            "They encrypt data",
            "They avoid load balancers",
          ],
          1,
        ),
        q(
          "Consistent hashing is used in:",
          [
            "SQL joins",
            "Distributed caching/load balancing",
            "CSS styling",
            "OAuth flows",
          ],
          1,
        ),
        q(
          "What does 'elastic scalability' refer to?",
          [
            "Fixed server count",
            "Scaling resources up and down dynamically with demand",
            "Only vertical scaling",
            "Manual provisioning",
          ],
          1,
        ),
        q(
          "Which of these best describes a stateless service?",
          [
            "Stores session in local memory",
            "Relies on shared DB for state",
            "Keeps all state client-side or in external stores",
            "Uses sticky sessions",
          ],
          2,
        ),
      ],
      subsections: [
        sub(
          "sd-f-p1s1",
          "Horizontal vs Vertical Scaling",
          "Horizontal scaling (scale-out) adds more servers to distribute load; it is cost-effective and fault-tolerant. Vertical scaling (scale-up) adds more CPU or RAM to a single server and is simpler but has a hard upper limit.",
        ),
        sub(
          "sd-f-p1s2",
          "Stateless vs Stateful Services",
          "Stateless services store no session data locally, so any server can handle any request — making horizontal scaling trivial. Stateful services require session affinity (sticky sessions) or external session stores like Redis.",
        ),
        sub(
          "sd-f-p1s3",
          "Load Balancing Strategies",
          "Round-robin distributes requests equally. Least-connections routes to the least-busy server. IP-hash ensures the same client always hits the same server. A load balancer also performs health checks and removes unhealthy nodes automatically.",
        ),
      ],
    } as CPart,
    {
      id: "sd-f-p2",
      title: "Part 2: Load Balancing & Caching",
      description:
        "Layer 4 vs Layer 7 load balancing, cache invalidation, and CDN patterns.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Caching stores frequently accessed data in fast memory to reduce latency and database load.",
      docs: [
        { label: "Caching – AWS", url: "https://aws.amazon.com/caching/" },
      ] as DocLink[],
      partQuiz: [
        q(
          "What does a CDN cache?",
          [
            "User credentials",
            "Static assets close to end users",
            "Database schemas",
            "Compiler output",
          ],
          1,
        ),
        q(
          "Cache eviction policy LRU stands for:",
          [
            "Least Recently Used",
            "Last Read Update",
            "Latest Resource Unit",
            "Largest Resource Used",
          ],
          0,
        ),
        q(
          "Cache stampede occurs when:",
          [
            "Cache is never invalidated",
            "Many requests hit the DB simultaneously after a cache miss",
            "CDN is overloaded",
            "Load balancer fails",
          ],
          1,
        ),
        q(
          "TTL in caching means:",
          [
            "Time To Load",
            "Time To Live",
            "Total Transfer Length",
            "Token Transfer Layer",
          ],
          1,
        ),
        q(
          "Write-through cache means:",
          [
            "Data written to cache only",
            "Data written to cache and DB simultaneously",
            "Data written to DB then invalidated in cache",
            "Data never written to cache",
          ],
          1,
        ),
        q(
          "Layer 7 load balancing operates at the:",
          [
            "Transport layer",
            "Application layer (HTTP)",
            "Network layer",
            "Physical layer",
          ],
          1,
        ),
        q(
          "Which cache strategy is best for read-heavy workloads?",
          [
            "Write-through",
            "Write-behind",
            "Cache-aside (lazy loading)",
            "No caching",
          ],
          2,
        ),
        q(
          "What is cache hit ratio?",
          [
            "Ratio of writes to reads",
            "Percentage of requests served from cache",
            "Size of cache vs DB",
            "Number of evictions per second",
          ],
          1,
        ),
        q(
          "Distributed caching (e.g., Redis Cluster) helps by:",
          [
            "Centralizing all data in one node",
            "Spreading cache across nodes to avoid single-point failure",
            "Removing the need for a database",
            "Replacing load balancers",
          ],
          1,
        ),
        q(
          "What is stale-while-revalidate?",
          [
            "Never serve stale data",
            "Serve cached data while refreshing it in the background",
            "Invalidate cache on every write",
            "A SQL isolation level",
          ],
          1,
        ),
        q(
          "Layer 4 load balancing is based on:",
          [
            "HTTP headers",
            "IP address and TCP port",
            "URL path",
            "User cookies",
          ],
          1,
        ),
        q(
          "Which is NOT a common cache eviction policy?",
          ["LRU", "LFU", "FIFO", "ACID"],
          3,
        ),
        q(
          "A reverse proxy differs from a forward proxy in that it:",
          [
            "Sits in front of clients",
            "Sits in front of servers on behalf of clients",
            "Only caches DNS",
            "Requires VPN",
          ],
          1,
        ),
        q(
          "Consistent hashing minimizes cache misses during:",
          [
            "User authentication",
            "Node addition or removal in a distributed cache",
            "HTTP redirects",
            "Schema migrations",
          ],
          1,
        ),
        q(
          "Which header controls HTTP caching?",
          ["Content-Type", "Cache-Control", "Authorization", "Accept-Encoding"],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-f-p2s1",
          "Load Balancer Types",
          "Layer 4 load balancers route traffic based on IP/TCP without inspecting content. Layer 7 load balancers inspect HTTP headers and URL paths, enabling smarter routing like directing /api requests to API servers and /static to CDN origins.",
        ),
        sub(
          "sd-f-p2s2",
          "Caching Strategies",
          "Cache-aside (lazy loading) loads data into cache on first miss. Write-through writes to cache and DB simultaneously. Write-behind writes to cache first and DB asynchronously. Each strategy has different consistency and performance trade-offs.",
        ),
        sub(
          "sd-f-p2s3",
          "Cache Invalidation",
          "Cache invalidation is the hard problem: when should cached data be considered stale? Common approaches include TTL-based expiry, event-driven invalidation on write, and versioned cache keys to allow graceful rollout.",
        ),
      ],
    } as CPart,
    {
      id: "sd-f-p3",
      title: "Part 3: CAP Theorem & Consistency",
      description:
        "CAP theorem, consistency models, ACID vs BASE, and eventual consistency.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "CAP theorem states a distributed system can guarantee at most two of: Consistency, Availability, Partition Tolerance.",
      docs: [
        {
          label: "CAP Theorem – Wikipedia",
          url: "https://en.wikipedia.org/wiki/CAP_theorem",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "CAP theorem says a distributed system can guarantee at most:",
          [
            "1 of 3 properties",
            "2 of 3 properties",
            "All 3 properties",
            "None of the properties",
          ],
          1,
        ),
        q(
          "What does 'P' stand for in CAP?",
          ["Performance", "Partition Tolerance", "Persistence", "Protocol"],
          1,
        ),
        q(
          "An AP system sacrifices:",
          ["Availability", "Partition tolerance", "Consistency", "Latency"],
          2,
        ),
        q(
          "ACID properties apply to:",
          [
            "NoSQL databases",
            "Relational (SQL) databases",
            "Cache stores",
            "Message queues",
          ],
          1,
        ),
        q(
          "'BASE' stands for:",
          [
            "Basically Available, Soft state, Eventual consistency",
            "Binary Atomic Structured Encoding",
            "Basic Async Service Engine",
            "None of the above",
          ],
          0,
        ),
        q(
          "Eventual consistency means:",
          [
            "Data is always consistent",
            "All nodes will eventually reach the same state",
            "Writes are atomic",
            "No reads are allowed during writes",
          ],
          1,
        ),
        q(
          "Strong consistency guarantees:",
          [
            "All reads see the most recent write",
            "Writes are faster than reads",
            "Data is distributed evenly",
            "Replicas are always out of sync",
          ],
          0,
        ),
        q(
          "Which database is CP (Consistent + Partition Tolerant)?",
          ["Cassandra", "DynamoDB", "HBase", "CouchDB"],
          2,
        ),
        q(
          "Cassandra is typically classified as:",
          ["CP", "CA", "AP", "None"],
          2,
        ),
        q(
          "Which isolation level prevents dirty reads?",
          ["Read Uncommitted", "Read Committed", "Serializable", "Snapshot"],
          1,
        ),
        q(
          "Two-phase commit (2PC) ensures:",
          [
            "High availability",
            "Atomic distributed transactions",
            "Horizontal scaling",
            "Cache coherence",
          ],
          1,
        ),
        q(
          "Read-your-own-writes consistency means:",
          [
            "All users see the latest write",
            "A user always sees their own recent writes",
            "Writes are synchronous",
            "Reads are cached",
          ],
          1,
        ),
        q(
          "Quorum reads/writes in distributed systems help achieve:",
          [
            "Stronger consistency with some partition tolerance",
            "Full ACID compliance",
            "Zero latency",
            "Infinite scalability",
          ],
          0,
        ),
        q(
          "Monotonic read consistency guarantees:",
          [
            "Reads always see new data",
            "Once you read a value, future reads won't return older data",
            "Writes are sequential",
            "Data is compressed",
          ],
          1,
        ),
        q(
          "Which is a characteristic of a CA system?",
          [
            "Cannot handle network partitions",
            "Sacrifices availability",
            "Sacrifices consistency",
            "Requires eventual consistency",
          ],
          0,
        ),
      ],
      subsections: [
        sub(
          "sd-f-p3s1",
          "CAP Theorem",
          "In any distributed data store you can only guarantee two of: Consistency (every read gets the latest write), Availability (every request gets a response), and Partition Tolerance (the system works despite network failures). In practice, partitions happen, so real systems choose between CP and AP.",
        ),
        sub(
          "sd-f-p3s2",
          "Consistency Models",
          "Strong consistency ensures every read reflects the latest write. Eventual consistency allows temporary divergence but guarantees convergence. Read-your-own-writes, monotonic reads, and causal consistency sit between these extremes, offering practical trade-offs.",
        ),
        sub(
          "sd-f-p3s3",
          "ACID vs BASE",
          "ACID (Atomicity, Consistency, Isolation, Durability) is the gold standard for relational databases ensuring transaction safety. BASE (Basically Available, Soft state, Eventually consistent) describes NoSQL trade-offs where high availability is prioritized over strict consistency.",
        ),
      ],
    } as CPart,
    {
      id: "sd-f-p4",
      title: "Part 4: Availability & Reliability",
      description:
        "SLA, SLO, fault tolerance, redundancy, and disaster recovery.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "High availability systems are designed to minimize downtime through redundancy, failover, and health monitoring.",
      docs: [
        {
          label: "Site Reliability Engineering – Google",
          url: "https://sre.google/books/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "99.99% availability is also called:",
          ["Two nines", "Three nines", "Four nines", "Five nines"],
          2,
        ),
        q(
          "MTTR stands for:",
          [
            "Mean Time To Respond",
            "Mean Time To Recovery",
            "Max Time To Replicate",
            "Mean Transfer Time Rate",
          ],
          1,
        ),
        q(
          "Which pattern prevents cascading failures in microservices?",
          ["Singleton", "Circuit Breaker", "Observer", "Factory"],
          1,
        ),
        q(
          "Active-passive failover means:",
          [
            "Both nodes handle traffic",
            "Standby takes over only when primary fails",
            "Nodes share load equally",
            "No failover is needed",
          ],
          1,
        ),
        q(
          "RPO (Recovery Point Objective) defines:",
          [
            "Max acceptable downtime",
            "Max acceptable data loss measured in time",
            "Number of replicas",
            "Cache eviction window",
          ],
          1,
        ),
        q(
          "RTO (Recovery Time Objective) defines:",
          [
            "Max acceptable data loss",
            "How quickly the system must recover after failure",
            "Cache TTL",
            "Database backup size",
          ],
          1,
        ),
        q(
          "Chaos Engineering involves:",
          [
            "Writing more unit tests",
            "Intentionally injecting failures to test resilience",
            "Encrypting all traffic",
            "Automating deployments",
          ],
          1,
        ),
        q(
          "A health check endpoint is used by:",
          [
            "Users to see site status",
            "Load balancers to detect unhealthy instances",
            "Developers to debug code",
            "Logs to store errors",
          ],
          1,
        ),
        q(
          "Redundancy in system design means:",
          [
            "Removing unused features",
            "Having backup components to prevent single points of failure",
            "Compressing responses",
            "Caching all reads",
          ],
          1,
        ),
        q(
          "SLA stands for:",
          [
            "Service Level Architecture",
            "Service Level Agreement",
            "System Load Average",
            "Scalability Level Assessment",
          ],
          1,
        ),
        q(
          "Which strategy best improves read availability in a database?",
          [
            "Write sharding",
            "Read replicas",
            "Two-phase commit",
            "SAGA pattern",
          ],
          1,
        ),
        q(
          "Graceful degradation means:",
          [
            "System crashes completely on failure",
            "System provides reduced functionality when a component fails",
            "System scales down automatically",
            "System stops accepting new requests",
          ],
          1,
        ),
        q(
          "A bulkhead pattern in microservices:",
          [
            "Encrypts inter-service traffic",
            "Isolates failures to prevent them from spreading",
            "Routes traffic by URL",
            "Manages database connections",
          ],
          1,
        ),
        q(
          "What is a canary deployment?",
          [
            "Rolling back all changes at once",
            "Releasing to a small subset of users first",
            "Deploying only to one region",
            "Blue-green switching",
          ],
          1,
        ),
        q(
          "Which metric measures the fraction of time a system is operational?",
          ["Throughput", "Latency", "Availability", "Error rate"],
          2,
        ),
      ],
      subsections: [
        sub(
          "sd-f-p4s1",
          "SLA, SLO, SLI",
          "An SLA (Service Level Agreement) is a contract with customers defining uptime guarantees. An SLO (Service Level Objective) is an internal target. An SLI (Service Level Indicator) is the actual measured metric. 99.9% availability ('three nines') allows ~8.7 hours of downtime per year.",
        ),
        sub(
          "sd-f-p4s2",
          "Fault Tolerance Patterns",
          "Circuit breakers stop cascading failures by short-circuiting requests to a failing service. Bulkheads isolate failures to one pool of resources. Retries with exponential backoff prevent thundering-herd problems. Together they make distributed systems resilient.",
        ),
        sub(
          "sd-f-p4s3",
          "Redundancy & Disaster Recovery",
          "Active-passive failover keeps a warm standby ready to take over. Active-active runs multiple nodes simultaneously. RPO defines the maximum acceptable data loss; RTO defines how quickly recovery must occur. Regular disaster recovery drills validate these objectives in practice.",
        ),
      ],
    } as CPart,
  ],
  moduleQuiz: [
    q(
      "Horizontal scaling is also known as:",
      ["Scale-up", "Scale-out", "Scale-in", "Scale-down"],
      1,
    ),
    q(
      "CAP theorem guarantees at most how many properties simultaneously?",
      ["1", "2", "3", "4"],
      1,
    ),
    q(
      "LRU cache eviction removes:",
      [
        "Most frequently used item",
        "Least recently used item",
        "Largest item",
        "Randomly selected item",
      ],
      1,
    ),
    q(
      "Which pattern prevents cascading failures?",
      ["Singleton", "Circuit Breaker", "Repository", "Facade"],
      1,
    ),
    q(
      "99.99% availability is called:",
      ["Two nines", "Three nines", "Four nines", "Five nines"],
      2,
    ),
  ],
  moduleProgrammingQuestions: [],
  moduleTest: emptyTest(),
};

// ─── Module 2: Low Level Design ───────────────────────────────────────────────

const module2: CModule = {
  id: "sd-lld",
  title: "Module 2: Low Level Design (LLD)",
  outcome:
    "Apply SOLID principles and design patterns to design clean, maintainable class structures.",
  isLocked: true,
  parts: [
    {
      id: "sd-lld-p1",
      title: "Part 1: SOLID Principles",
      description:
        "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "SOLID is a set of five principles for object-oriented design that lead to more maintainable, flexible, and scalable code.",
      docs: [
        {
          label: "SOLID Principles – Wikipedia",
          url: "https://en.wikipedia.org/wiki/SOLID",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "What does the 'S' in SOLID stand for?",
          [
            "Scalability",
            "Single Responsibility",
            "Separation of Concerns",
            "State Management",
          ],
          1,
        ),
        q(
          "The Open/Closed principle states software should be:",
          [
            "Open to modification, closed to extension",
            "Open to extension, closed to modification",
            "Open source, closed binary",
            "Open to testing, closed to debugging",
          ],
          1,
        ),
        q(
          "Liskov Substitution Principle means:",
          [
            "Child classes can replace parent classes without breaking behavior",
            "Parents inherit from children",
            "Only abstract classes are used",
            "Classes should have multiple responsibilities",
          ],
          0,
        ),
        q(
          "Interface Segregation Principle advises:",
          [
            "One large interface for all clients",
            "Many small, client-specific interfaces",
            "No interfaces, only classes",
            "Interfaces should extend each other",
          ],
          1,
        ),
        q(
          "Dependency Inversion means high-level modules should depend on:",
          [
            "Concrete classes",
            "Abstractions/interfaces",
            "Global variables",
            "Singletons",
          ],
          1,
        ),
        q(
          "Which SOLID principle does a class with too many responsibilities violate?",
          [
            "Open/Closed",
            "Liskov Substitution",
            "Single Responsibility",
            "Dependency Inversion",
          ],
          2,
        ),
        q(
          "A class that can be extended without modifying its source code follows:",
          ["SRP", "OCP", "LSP", "ISP"],
          1,
        ),
        q(
          "Fat interfaces that force clients to implement unused methods violate:",
          ["SRP", "OCP", "LSP", "ISP"],
          3,
        ),
        q(
          "Dependency Injection is a technique to achieve:",
          ["Caching", "Dependency Inversion", "Scalability", "Load balancing"],
          1,
        ),
        q(
          "Which principle ensures subclass behavior is consistent with superclass contracts?",
          ["SRP", "OCP", "LSP", "DIP"],
          2,
        ),
        q(
          "SOLID principles were popularized by:",
          [
            "James Gosling",
            "Robert C. Martin (Uncle Bob)",
            "Linus Torvalds",
            "Bjarne Stroustrup",
          ],
          1,
        ),
        q(
          "Which principle helps reduce coupling between layers?",
          ["SRP", "LSP", "ISP", "DIP"],
          3,
        ),
        q(
          "A God class (does everything) violates:",
          ["OCP", "SRP", "LSP", "DIP"],
          1,
        ),
        q(
          "Which principle is most related to polymorphism?",
          ["SRP", "OCP", "LSP", "ISP"],
          2,
        ),
        q(
          "SOLID principles apply primarily to:",
          [
            "Database schema design",
            "Network protocols",
            "Object-oriented code design",
            "DevOps pipelines",
          ],
          2,
        ),
      ],
      subsections: [
        sub(
          "sd-lld-p1s1",
          "Single Responsibility & Open/Closed",
          "SRP: a class should have only one reason to change — keep concerns separate. OCP: classes should be open for extension but closed for modification — use inheritance or composition to add behavior without touching existing code.",
        ),
        sub(
          "sd-lld-p1s2",
          "Liskov Substitution & Interface Segregation",
          "LSP: subclasses must be substitutable for their base classes without altering correctness. ISP: clients should not be forced to depend on interfaces they do not use — split large interfaces into focused, role-specific ones.",
        ),
        sub(
          "sd-lld-p1s3",
          "Dependency Inversion",
          "High-level modules should not depend on low-level modules; both should depend on abstractions. This is achieved through dependency injection — passing dependencies as constructor arguments — enabling easy testing and swapping of implementations.",
        ),
      ],
    } as CPart,
    {
      id: "sd-lld-p2",
      title: "Part 2: Creational Patterns",
      description:
        "Singleton, Factory Method, Abstract Factory, Builder, and Prototype patterns.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Creational patterns deal with object creation mechanisms, aiming to create objects in a manner suitable to the situation.",
      docs: [
        {
          label: "Design Patterns – Refactoring.Guru",
          url: "https://refactoring.guru/design-patterns",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Singleton pattern ensures:",
          [
            "Many instances of a class",
            "Exactly one instance of a class",
            "Instances are immutable",
            "No instances are created",
          ],
          1,
        ),
        q(
          "Factory Method pattern:",
          [
            "Creates objects without specifying the exact class",
            "Stores a single instance",
            "Notifies observers of changes",
            "Adapts incompatible interfaces",
          ],
          0,
        ),
        q(
          "Which pattern uses a step-by-step approach to construct complex objects?",
          ["Singleton", "Factory", "Builder", "Prototype"],
          2,
        ),
        q(
          "Prototype pattern creates objects by:",
          [
            "Using a factory",
            "Cloning an existing object",
            "Calling a constructor directly",
            "Using a static method",
          ],
          1,
        ),
        q(
          "Abstract Factory provides:",
          [
            "One product",
            "An interface for creating families of related objects",
            "A single instance",
            "Object state snapshots",
          ],
          1,
        ),
        q(
          "Thread-safe Singleton is achieved using:",
          [
            "Multiple constructors",
            ["Double-checked locking or eager initialization"][0],
            "Prototype cloning",
            "Observer pattern",
          ],
          1,
        ),
        q(
          "Builder pattern is most useful when:",
          [
            "An object has many optional parameters",
            "Only one instance is needed",
            "Objects need to be cloned",
            "Interfaces need adapting",
          ],
          0,
        ),
        q(
          "Which pattern is commonly used for database connection pools?",
          ["Prototype", "Observer", "Singleton", "Strategy"],
          2,
        ),
        q(
          "Factory Method defers instantiation to:",
          ["The client", "Subclasses", "Static methods", "Singletons"],
          1,
        ),
        q(
          "Which creational pattern involves a Director class?",
          ["Singleton", "Factory", "Builder", "Prototype"],
          2,
        ),
        q(
          "Abstract Factory differs from Factory Method in that it:",
          [
            "Creates only one type of object",
            "Creates families of related objects",
            "Uses cloning",
            "Uses inheritance only",
          ],
          1,
        ),
        q(
          "Object pooling is a variation of:",
          ["Observer", "Singleton", "Prototype", "Strategy"],
          1,
        ),
        q(
          "Lazy initialization in Singleton means:",
          [
            "Instance created at class load",
            "Instance created on first use",
            "Instance destroyed after use",
            "Instance shared across threads",
          ],
          1,
        ),
        q(
          "Which pattern avoids subclassing by cloning?",
          ["Factory Method", "Abstract Factory", "Builder", "Prototype"],
          3,
        ),
        q(
          "The main drawback of Singleton is:",
          [
            "Too many instances",
            "Global state makes testing harder",
            "Slow object creation",
            "Lack of polymorphism",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-lld-p2s1",
          "Singleton & Factory",
          "Singleton restricts a class to one instance — useful for config managers and connection pools, but be wary of global state. Factory Method lets subclasses decide which class to instantiate, decoupling creation from usage.",
        ),
        sub(
          "sd-lld-p2s2",
          "Builder & Abstract Factory",
          "Builder constructs complex objects step-by-step with a fluent API, avoiding telescoping constructors. Abstract Factory groups related factories under one interface so product families can be swapped without changing client code.",
        ),
        sub(
          "sd-lld-p2s3",
          "Prototype Pattern",
          "Prototype clones an existing object rather than creating from scratch — useful when construction is expensive. Most languages support shallow copy natively; deep copy requires explicit implementation to avoid shared mutable state between clone and original.",
        ),
      ],
    } as CPart,
    {
      id: "sd-lld-p3",
      title: "Part 3: Structural & Behavioral Patterns",
      description:
        "Adapter, Decorator, Observer, Strategy, and Command patterns.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Structural patterns deal with object composition; behavioral patterns deal with communication between objects.",
      docs: [
        {
          label: "GoF Design Patterns",
          url: "https://refactoring.guru/design-patterns/catalog",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Adapter pattern is used to:",
          [
            "Clone objects",
            "Make incompatible interfaces work together",
            "Notify subscribers of events",
            "Create a single instance",
          ],
          1,
        ),
        q(
          "Observer pattern implements:",
          [
            "Publish-subscribe event notification",
            "Object cloning",
            "Interface adaptation",
            "Step-by-step construction",
          ],
          0,
        ),
        q(
          "Strategy pattern allows:",
          [
            "Swapping algorithms at runtime",
            "A single global instance",
            "Adapting old interfaces",
            "Notifying observers",
          ],
          0,
        ),
        q(
          "Decorator pattern adds behavior:",
          [
            "At compile time via inheritance",
            "Dynamically by wrapping objects",
            "By cloning",
            "By using a factory",
          ],
          1,
        ),
        q(
          "Command pattern encapsulates:",
          [
            "A request as an object",
            "A family of algorithms",
            "A single instance",
            "Related objects",
          ],
          0,
        ),
        q(
          "Which pattern is used in event-driven UIs (e.g., button click listeners)?",
          ["Singleton", "Observer", "Adapter", "Builder"],
          1,
        ),
        q(
          "Facade pattern provides:",
          [
            "A simplified interface to a complex subsystem",
            "Notification of state changes",
            "Object cloning",
            "Interface compatibility",
          ],
          0,
        ),
        q(
          "Proxy pattern controls:",
          [
            "Object creation",
            "Access to another object",
            "Algorithm selection",
            "Event notification",
          ],
          1,
        ),
        q(
          "Which pattern is used for undo/redo functionality?",
          ["Observer", "Adapter", "Command", "Singleton"],
          2,
        ),
        q(
          "Template Method pattern defines:",
          [
            "An algorithm skeleton with steps overridden by subclasses",
            "A publish-subscribe mechanism",
            "A single global instance",
            "Object cloning",
          ],
          0,
        ),
        q(
          "Composite pattern is used to:",
          [
            "Treat individual objects and compositions uniformly",
            "Add behavior dynamically",
            "Adapt interfaces",
            "Create object families",
          ],
          0,
        ),
        q(
          "Iterator pattern provides:",
          [
            "Sequential access to elements without exposing internals",
            "Object cloning",
            "A simplified subsystem interface",
            "Event notification",
          ],
          0,
        ),
        q(
          "Chain of Responsibility passes a request along:",
          [
            "A single handler",
            "A chain of handlers until one processes it",
            "All handlers simultaneously",
            "A factory",
          ],
          1,
        ),
        q(
          "Which pattern is the basis for middleware pipelines?",
          ["Singleton", "Adapter", "Chain of Responsibility", "Prototype"],
          2,
        ),
        q(
          "State pattern allows an object to:",
          [
            "Clone itself",
            "Alter its behavior when its internal state changes",
            "Notify observers",
            "Create families of objects",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-lld-p3s1",
          "Adapter & Decorator",
          "Adapter wraps an incompatible class to match an expected interface — common when integrating third-party libraries. Decorator wraps an object to add new behavior at runtime without changing its class, stacking multiple wrappers for composed functionality.",
        ),
        sub(
          "sd-lld-p3s2",
          "Observer & Strategy",
          "Observer implements publish-subscribe: subjects notify observers when state changes — the foundation of event systems and reactive frameworks. Strategy encapsulates interchangeable algorithms behind a common interface, allowing runtime algorithm selection.",
        ),
        sub(
          "sd-lld-p3s3",
          "Command & Facade",
          "Command encapsulates a request as an object, enabling queuing, logging, and undo/redo. Facade provides a unified, simplified interface to a complex subsystem, reducing coupling between the client and the subsystem's internals.",
        ),
      ],
    } as CPart,
    {
      id: "sd-lld-p4",
      title: "Part 4: UML & Class Diagrams",
      description:
        "Class diagrams, relationships (association, aggregation, composition, inheritance), and sequence diagrams.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "UML class diagrams provide a visual representation of the structure of a system — classes, attributes, methods, and relationships.",
      docs: [
        {
          label: "UML Class Diagrams – IBM",
          url: "https://developer.ibm.com/articles/the-class-diagram/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "In a UML class diagram, a filled diamond represents:",
          [
            "Association",
            "Aggregation",
            "Composition (strong ownership)",
            "Dependency",
          ],
          2,
        ),
        q(
          "An open diamond in UML represents:",
          [
            "Composition",
            "Aggregation (weak ownership)",
            "Inheritance",
            "Realization",
          ],
          1,
        ),
        q(
          "Inheritance is shown in UML as:",
          [
            "Dashed arrow",
            "Solid line with filled arrow",
            "Solid line with open arrowhead",
            "Diamond",
          ],
          2,
        ),
        q(
          "What does multiplicity '1..*' mean?",
          ["Zero or one", "Exactly one", "One or more", "Zero or more"],
          2,
        ),
        q(
          "A sequence diagram shows:",
          [
            "Class structure",
            "Object interactions over time",
            "Database schema",
            "Network topology",
          ],
          1,
        ),
        q(
          "Which UML diagram is best for showing use cases?",
          [
            "Class diagram",
            "Sequence diagram",
            "Use case diagram",
            "Activity diagram",
          ],
          2,
        ),
        q(
          "A dependency relationship in UML is shown as:",
          ["Solid line", "Filled diamond", "Dashed arrow", "Open diamond"],
          2,
        ),
        q(
          "Composition differs from aggregation in that:",
          [
            "Children can exist independently in composition",
            "Children cannot exist without parent in composition",
            "They are identical",
            "Aggregation implies inheritance",
          ],
          1,
        ),
        q(
          "In a class diagram, methods are listed in:",
          [
            "The top compartment",
            "The middle compartment",
            "The bottom compartment",
            "Outside the class box",
          ],
          2,
        ),
        q(
          "An abstract class in UML is indicated by:",
          [
            "Bold name",
            "Italicized class name",
            "Underlined name",
            "Dashed border",
          ],
          1,
        ),
        q(
          "An interface in UML is marked with:",
          [
            "<<interface>> stereotype",
            "Bold border",
            "Italic name",
            "Diamond symbol",
          ],
          0,
        ),
        q(
          "A realization relationship is between:",
          [
            "Two classes",
            "A class and an interface it implements",
            "Two interfaces",
            "A class and a package",
          ],
          1,
        ),
        q(
          "Multiplicity '0..1' means:",
          [
            "Exactly one",
            "Zero or one (optional)",
            "One or more",
            "Zero or more",
          ],
          1,
        ),
        q(
          "Which diagram is best for modeling state transitions?",
          [
            "Class diagram",
            "Sequence diagram",
            "State diagram",
            "Component diagram",
          ],
          2,
        ),
        q(
          "Activity diagrams in UML represent:",
          [
            "Class hierarchies",
            "Workflows and business processes",
            "Network topology",
            "Object instantiation",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-lld-p4s1",
          "Class Diagrams Basics",
          "A UML class diagram box has three compartments: class name (top), attributes (middle), and methods (bottom). Visibility modifiers prefix members: + (public), - (private), # (protected). Abstract classes and interfaces use stereotypes or italics.",
        ),
        sub(
          "sd-lld-p4s2",
          "Relationships",
          "Association is a general use relationship. Aggregation (open diamond) is a weak 'has-a' where parts can exist independently. Composition (filled diamond) is a strong 'has-a' where parts' lifecycles are tied to the whole. Inheritance (open arrowhead) is 'is-a'. Realization connects a class to an interface it implements.",
        ),
        sub(
          "sd-lld-p4s3",
          "Sequence Diagrams",
          "Sequence diagrams show object interactions over time using vertical lifelines and horizontal arrows for messages. Solid arrows are synchronous calls; dashed arrows are returns. Loops and alternatives use combined fragments (loop, alt, opt) to represent control flow visually.",
        ),
      ],
    } as CPart,
  ],
  moduleQuiz: [
    q(
      "'S' in SOLID stands for:",
      ["Scalability", "Single Responsibility", "Strategy", "Separation"],
      1,
    ),
    q(
      "Singleton ensures:",
      [
        "Many instances",
        "Exactly one instance",
        "Cloned instances",
        "No instances",
      ],
      1,
    ),
    q(
      "Observer pattern is used for:",
      [
        "Object cloning",
        "Publish-subscribe notifications",
        "Interface adaptation",
        "Object creation",
      ],
      1,
    ),
    q(
      "Composition in UML (filled diamond) means:",
      [
        "Weak ownership",
        "Parts exist independently",
        "Strong ownership — parts cannot exist without whole",
        "Inheritance",
      ],
      2,
    ),
    q(
      "Strategy pattern allows:",
      [
        "Runtime algorithm swapping",
        "Single global state",
        "Interface adaptation",
        "Event notification",
      ],
      0,
    ),
  ],
  moduleProgrammingQuestions: [],
  moduleTest: emptyTest(),
};

// ─── Module 3: High Level Design ─────────────────────────────────────────────

const module3: CModule = {
  id: "sd-hld",
  title: "Module 3: High Level Design (HLD)",
  outcome:
    "Design scalable distributed architectures using microservices, queues, and databases.",
  isLocked: true,
  parts: [
    {
      id: "sd-hld-p1",
      title: "Part 1: Microservices vs Monolith",
      description:
        "Monolithic architecture, microservices, service mesh, and decomposition strategies.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Microservices decompose an application into small, independently deployable services each owning its data.",
      docs: [
        {
          label: "Microservices – Martin Fowler",
          url: "https://martinfowler.com/articles/microservices.html",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "A monolithic application has all its components:",
          [
            "In separate services",
            "In a single deployable unit",
            "In separate databases",
            "In separate cloud regions",
          ],
          1,
        ),
        q(
          "Microservices communicate primarily via:",
          [
            "Shared memory",
            "HTTP/REST or message queues",
            "File system",
            "Direct function calls",
          ],
          1,
        ),
        q(
          "Which is an advantage of microservices?",
          [
            "Simpler debugging",
            "Independent scaling and deployment",
            "Single database",
            "Fewer network calls",
          ],
          1,
        ),
        q(
          "Service mesh (e.g., Istio) handles:",
          [
            "Business logic",
            "Cross-cutting concerns like auth, tracing, retries",
            "Database migrations",
            "UI rendering",
          ],
          1,
        ),
        q(
          "Strangler Fig pattern is used to:",
          [
            "Build new microservices from scratch",
            "Gradually migrate from monolith to microservices",
            "Scale a single service",
            "Monitor services",
          ],
          1,
        ),
        q(
          "Each microservice should ideally have:",
          [
            "A shared database",
            "Its own database",
            "No database",
            "A read-only replica",
          ],
          1,
        ),
        q(
          "API Gateway is responsible for:",
          [
            "Running business logic",
            "Routing, auth, rate limiting at the edge",
            "Database management",
            "Service discovery",
          ],
          1,
        ),
        q(
          "Which is a disadvantage of microservices?",
          [
            "Cannot scale independently",
            "Distributed system complexity and network latency",
            "All code in one repository",
            "Single point of failure",
          ],
          1,
        ),
        q(
          "Domain-Driven Design (DDD) helps microservices by:",
          [
            "Defining shared databases",
            "Identifying bounded contexts as service boundaries",
            "Combining services into one",
            "Avoiding APIs",
          ],
          1,
        ),
        q(
          "Choreography in microservices means:",
          [
            "Central orchestrator directs services",
            "Services react to events without a central controller",
            "Services share a database",
            "Services run on the same machine",
          ],
          1,
        ),
        q(
          "Which pattern handles distributed transactions across services?",
          ["Two-phase commit only", "SAGA pattern", "Singleton", "Observer"],
          1,
        ),
        q(
          "Service discovery allows:",
          [
            "Services to find each other dynamically",
            "Static IP assignment",
            "Database connection pooling",
            "Cache invalidation",
          ],
          0,
        ),
        q(
          "The main challenge with microservices testing is:",
          [
            "Unit tests are harder to write",
            ["Integration testing across service boundaries"][0],
            "Services cannot be mocked",
            "No CI/CD support",
          ],
          1,
        ),
        q(
          "Circuit breaker in microservices prevents:",
          [
            "Data loss",
            "Cascading failures when a downstream service is down",
            "Authentication bypass",
            "Cache misses",
          ],
          1,
        ),
        q(
          "Sidecar pattern in service mesh:",
          [
            "Runs business logic next to main service",
            "Deploys a proxy container alongside each service",
            "Stores configuration centrally",
            "Manages database connections",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-hld-p1s1",
          "Monolith vs Microservices",
          "A monolith packages everything into one deployable unit — simple to develop initially but hard to scale and deploy independently. Microservices split the app into small services, each with its own database, enabling independent scaling and technology choice at the cost of distributed system complexity.",
        ),
        sub(
          "sd-hld-p1s2",
          "API Gateway & Service Discovery",
          "An API gateway is the single entry point for clients — it handles routing, authentication, rate limiting, and SSL termination. Service discovery (e.g., Consul, Eureka) lets services find each other dynamically as instances come and go.",
        ),
        sub(
          "sd-hld-p1s3",
          "SAGA Pattern",
          "The SAGA pattern manages distributed transactions across microservices using a sequence of local transactions, each publishing events that trigger the next step. If a step fails, compensating transactions roll back previous steps, maintaining eventual consistency without two-phase commit.",
        ),
      ],
    } as CPart,
    {
      id: "sd-hld-p2",
      title: "Part 2: Message Queues & Async Patterns",
      description: "Kafka, RabbitMQ, pub-sub, event sourcing, and CQRS.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Message queues decouple producers from consumers, enabling async communication and buffering traffic spikes.",
      docs: [
        {
          label: "Apache Kafka – Docs",
          url: "https://kafka.apache.org/documentation/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Message queues primarily help with:",
          [
            "Synchronous communication",
            "Decoupling producers from consumers",
            "Database joins",
            "UI rendering",
          ],
          1,
        ),
        q(
          "Kafka is best described as:",
          [
            "A relational database",
            "A distributed event streaming platform",
            "An in-memory cache",
            "An API gateway",
          ],
          1,
        ),
        q(
          "In pub-sub messaging, consumers are called:",
          ["Producers", "Brokers", "Subscribers/Consumers", "Routers"],
          2,
        ),
        q(
          "Event sourcing stores:",
          [
            "Only current state",
            "A log of all state-changing events",
            "Compressed snapshots",
            "SQL queries",
          ],
          1,
        ),
        q(
          "CQRS stands for:",
          [
            "Command Query Responsibility Segregation",
            "Cache Queue Redis Service",
            "Centralized Queue Request System",
            "Container Queue Runtime Service",
          ],
          0,
        ),
        q(
          "Dead letter queue stores:",
          [
            "Priority messages",
            "Messages that failed processing after retries",
            "Broadcast messages",
            "Compressed events",
          ],
          1,
        ),
        q(
          "At-least-once delivery guarantees:",
          [
            "Messages are processed exactly once",
            "Messages may be processed more than once",
            "Messages are never processed twice",
            "Messages are dropped if queue is full",
          ],
          1,
        ),
        q(
          "Idempotent consumers handle duplicate messages by:",
          [
            "Ignoring all duplicates",
            "Using a unique message ID to detect and skip already-processed messages",
            "Resetting state",
            "Clearing the queue",
          ],
          1,
        ),
        q(
          "Kafka partitions allow:",
          [
            "Sequential processing only",
            "Parallel consumption within a topic",
            "Single consumer per topic",
            "No ordering guarantees",
          ],
          1,
        ),
        q(
          "Consumer group in Kafka means:",
          [
            "Multiple topics sharing one consumer",
            "Multiple consumers sharing the work of a partition set",
            "A producer group",
            "A broker cluster",
          ],
          1,
        ),
        q(
          "Which pattern separates read and write models?",
          ["SAGA", "Event Sourcing", "CQRS", "Circuit Breaker"],
          2,
        ),
        q(
          "Exactly-once semantics in messaging is:",
          [
            "Easy to achieve",
            "The strongest delivery guarantee, hardest to implement",
            "Implied by at-least-once",
            "Only possible with HTTP",
          ],
          1,
        ),
        q(
          "Backpressure in streaming systems:",
          [
            "Speeds up producers",
            "Slows down producers when consumers are overwhelmed",
            "Increases queue size infinitely",
            "Drops all messages",
          ],
          1,
        ),
        q(
          "RabbitMQ uses which protocol by default?",
          ["HTTP", "AMQP", "MQTT", "gRPC"],
          1,
        ),
        q(
          "Topic compaction in Kafka:",
          [
            "Deletes all messages",
            "Retains only the latest message per key",
            "Compresses messages with gzip",
            "Splits topics into partitions",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-hld-p2s1",
          "Message Queues & Pub-Sub",
          "Point-to-point queues deliver each message to exactly one consumer. Pub-sub broadcasts messages to all subscribers of a topic. Kafka combines both with consumer groups — within a group, each partition is consumed by one member; across groups, all groups receive the message.",
        ),
        sub(
          "sd-hld-p2s2",
          "Event Sourcing",
          "Instead of storing current state, event sourcing stores every state-changing event as an immutable log. Current state is derived by replaying events. This gives a full audit trail and enables time-travel debugging. Snapshots periodically checkpoint state to speed up replay.",
        ),
        sub(
          "sd-hld-p2s3",
          "CQRS Pattern",
          "CQRS separates the write model (commands that change state) from the read model (queries that return data). This allows the read side to be optimized independently — using denormalized views or separate databases — while the write side focuses on consistency. CQRS pairs naturally with event sourcing.",
        ),
      ],
    } as CPart,
    {
      id: "sd-hld-p3",
      title: "Part 3: Databases at Scale",
      description:
        "SQL vs NoSQL, sharding, replication, indexing, and polyglot persistence.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Database design choices directly impact system scalability, consistency, and query performance.",
      docs: [
        {
          label: "Database Sharding – AWS",
          url: "https://aws.amazon.com/what-is/database-sharding/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Database sharding splits data based on:",
          [
            "Random assignment",
            "A shard key across multiple nodes",
            "Table name",
            "Column count",
          ],
          1,
        ),
        q(
          "Read replicas improve:",
          [
            "Write throughput",
            "Read throughput and availability",
            "Data consistency",
            "Primary node performance",
          ],
          1,
        ),
        q(
          "Which SQL isolation level offers the strongest consistency?",
          [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable",
          ],
          3,
        ),
        q(
          "NoSQL databases are best for:",
          [
            "Complex multi-table joins",
            "Flexible schema and horizontal scaling",
            "ACID transactions",
            "Foreign key constraints",
          ],
          1,
        ),
        q(
          "Index in a database improves:",
          [
            "Write speed",
            "Storage efficiency",
            "Query read speed",
            "Data replication",
          ],
          2,
        ),
        q(
          "Hot shard problem occurs when:",
          [
            "All shards are equally loaded",
            "One shard receives disproportionate traffic",
            "Shards are too large",
            "Replication is disabled",
          ],
          1,
        ),
        q(
          "Polyglot persistence means:",
          [
            "Using one database for everything",
            "Using multiple types of databases for different use cases",
            "Translating SQL to NoSQL",
            "Encrypting databases",
          ],
          1,
        ),
        q(
          "Column-family databases (e.g., Cassandra) are optimized for:",
          [
            "Complex joins",
            "High-write, wide-column access patterns",
            "Full-text search",
            "Graph traversal",
          ],
          1,
        ),
        q(
          "Document databases (e.g., MongoDB) store data as:",
          [
            "Tables and rows",
            "JSON-like documents",
            "Key-value pairs only",
            "Graph nodes",
          ],
          1,
        ),
        q(
          "Replication lag refers to:",
          [
            "Time to write a record",
            "Delay between primary write and replica update",
            "Index build time",
            "Query execution time",
          ],
          1,
        ),
        q(
          "Composite index is useful when:",
          [
            "Querying on a single column",
            "Querying on multiple columns together",
            "Full table scans are needed",
            "Write performance must be maximized",
          ],
          1,
        ),
        q(
          "Which type of NoSQL database is best for social network graphs?",
          [
            "Key-value store",
            "Document store",
            "Graph database",
            "Column-family store",
          ],
          2,
        ),
        q(
          "Two-phase commit in distributed databases ensures:",
          [
            "High availability",
            "Atomic multi-node transactions",
            "Faster reads",
            "Cache coherence",
          ],
          1,
        ),
        q(
          "Write-ahead log (WAL) is used for:",
          [
            "Query optimization",
            "Crash recovery and durability",
            "Horizontal scaling",
            "Index management",
          ],
          1,
        ),
        q(
          "Connection pooling helps by:",
          [
            "Increasing database RAM",
            "Reusing existing DB connections to reduce overhead",
            "Sharding data",
            "Compressing queries",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-hld-p3s1",
          "Sharding Strategies",
          "Range-based sharding splits data by value ranges (e.g., user IDs 1-1M on shard 1). Hash-based sharding applies a hash function for even distribution. Directory-based sharding uses a lookup table for flexibility. The shard key choice is critical — a poor key causes hot shards.",
        ),
        sub(
          "sd-hld-p3s2",
          "Replication Patterns",
          "Master-slave (primary-replica) replication sends all writes to the primary; replicas serve reads. Master-master (multi-primary) allows writes on multiple nodes but requires conflict resolution. Synchronous replication ensures no data loss; asynchronous replication offers better performance with risk of lag.",
        ),
        sub(
          "sd-hld-p3s3",
          "SQL vs NoSQL Trade-offs",
          "SQL databases provide ACID guarantees and powerful joins — ideal for financial data and complex queries. NoSQL databases offer flexible schemas and horizontal scalability — ideal for user profiles, catalogs, and time-series data. Polyglot persistence uses the best store for each use case in the same system.",
        ),
      ],
    } as CPart,
    {
      id: "sd-hld-p4",
      title: "Part 4: CDN & Network Design",
      description:
        "CDN architecture, DNS resolution, TCP/HTTP, WebSockets, and network security basics.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "CDNs push static assets to edge servers globally, reducing latency for end users by serving content from the nearest node.",
      docs: [
        {
          label: "How CDNs Work – Cloudflare",
          url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "CDN stands for:",
          [
            "Central Data Node",
            "Content Delivery Network",
            "Cache Distribution Network",
            "Core DNS Node",
          ],
          1,
        ),
        q(
          "CDN reduces latency by:",
          [
            "Compressing data at origin",
            "Serving content from geographically closer edge servers",
            "Increasing bandwidth at origin",
            "Using WebSockets",
          ],
          1,
        ),
        q(
          "DNS resolves:",
          [
            "IP to domain name",
            "Domain name to IP address",
            "HTTP to HTTPS",
            "URL to CDN path",
          ],
          1,
        ),
        q(
          "HTTP/2 improvement over HTTP/1.1 includes:",
          [
            "Textual protocol",
            "Multiplexed streams over one connection",
            "No compression",
            "Synchronous requests only",
          ],
          1,
        ),
        q(
          "WebSockets provide:",
          [
            "One-way server-to-client push",
            "Full-duplex persistent connection",
            "Stateless request-response",
            "HTTP caching",
          ],
          1,
        ),
        q(
          "TLS (Transport Layer Security) provides:",
          [
            "Data compression",
            "Encryption and authentication",
            "Load balancing",
            "DNS resolution",
          ],
          1,
        ),
        q(
          "What is anycast routing used for in CDNs?",
          [
            "Routing to nearest server by IP",
            "Broadcasting to all servers",
            "Unicast delivery",
            "TCP connection reuse",
          ],
          0,
        ),
        q(
          "Long polling is a technique for:",
          [
            "Batch database writes",
            "Near-real-time updates without WebSockets",
            "Compressing HTTP headers",
            "DNS caching",
          ],
          1,
        ),
        q(
          "Server-Sent Events (SSE) allow:",
          [
            "Client-to-server streaming",
            "Server-to-client one-way streaming",
            "Full-duplex communication",
            "UDP communication",
          ],
          1,
        ),
        q(
          "Which HTTP status code means 'Not Modified' (used in conditional caching)?",
          ["200", "201", "304", "404"],
          2,
        ),
        q(
          "Rate limiting at API Gateway protects against:",
          [
            "Data corruption",
            "DDoS and abuse by limiting requests per client",
            "Cache misses",
            "Database deadlocks",
          ],
          1,
        ),
        q(
          "gRPC uses which protocol under the hood?",
          ["HTTP/1.1", "WebSocket", "HTTP/2 with Protocol Buffers", "UDP"],
          2,
        ),
        q(
          "ETag in HTTP is used for:",
          [
            "Authentication",
            "Cache validation — comparing client and server versions",
            "Compression",
            "Rate limiting",
          ],
          1,
        ),
        q(
          "A CDN pull model means:",
          [
            "CDN proactively pushes content to edge",
            "CDN fetches content from origin on first request, then caches",
            "CDN only serves images",
            "CDN handles authentication",
          ],
          1,
        ),
        q(
          "Which protocol is preferred for real-time gaming and video calls?",
          ["HTTP/2", "TCP", "UDP (lower latency, loss-tolerant)", "FTP"],
          2,
        ),
      ],
      subsections: [
        sub(
          "sd-hld-p4s1",
          "CDN Architecture",
          "CDNs have points of presence (PoPs) at major internet exchange points globally. Pull CDNs cache content on first request; push CDNs let you pre-populate edge nodes. Cache-Control and ETag headers control CDN behavior. CDNs also provide DDoS protection and TLS termination at the edge.",
        ),
        sub(
          "sd-hld-p4s2",
          "HTTP & WebSockets",
          "HTTP/2 enables multiplexed streams, header compression (HPACK), and server push over a single TCP connection. WebSockets upgrade an HTTP connection to a persistent, full-duplex channel — ideal for chat, live dashboards, and gaming. Long polling and SSE are simpler alternatives for one-way server push.",
        ),
        sub(
          "sd-hld-p4s3",
          "Network Security Basics",
          "TLS encrypts all data in transit and authenticates servers via certificates. HTTPS is HTTP over TLS. Certificate pinning prevents MITM attacks. Rate limiting and IP allowlisting protect APIs. WAF (Web Application Firewall) filters malicious HTTP traffic at the edge.",
        ),
      ],
    } as CPart,
  ],
  moduleQuiz: [
    q(
      "Microservices prefer:",
      [
        "Shared database",
        "Each service owns its database",
        "A single API",
        "No load balancing",
      ],
      1,
    ),
    q(
      "Kafka is a:",
      [
        "Relational DB",
        "Distributed event streaming platform",
        "Graph database",
        "CDN",
      ],
      1,
    ),
    q(
      "CQRS separates:",
      [
        "Frontend and backend",
        "Command (write) and Query (read) models",
        "Auth and data",
        "Cache and DB",
      ],
      1,
    ),
    q(
      "Database sharding splits data by:",
      [
        "Random assignment",
        "A shard key across nodes",
        "Table name",
        "Index size",
      ],
      1,
    ),
    q(
      "CDN reduces latency by:",
      [
        "Compressing at origin",
        "Serving from nearby edge servers",
        "Increasing origin bandwidth",
        "Pooling connections",
      ],
      1,
    ),
  ],
  moduleProgrammingQuestions: [],
  moduleTest: emptyTest(),
};

// ─── Module 4: Real-world Systems ────────────────────────────────────────────

const module4: CModule = {
  id: "sd-real-world",
  title: "Module 4: Real-world Systems",
  outcome:
    "Apply system design principles to design well-known production systems end-to-end.",
  isLocked: true,
  parts: [
    {
      id: "sd-rw-p1",
      title: "Part 1: URL Shortener & Pastebin",
      description:
        "Design TinyURL — hashing, redirection, analytics, and storage estimates.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "A URL shortener maps a long URL to a short code and redirects users. Core challenges: unique code generation, high read throughput, and analytics.",
      docs: [
        {
          label: "URL Shortener System Design – Educative",
          url: "https://www.educative.io/blog/system-design-tinyurl-instagram",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "URL shortener short code generation is commonly done using:",
          [
            "Auto-increment IDs encoded to Base62",
            "Random UUIDs",
            "MD5 hash of the full URL",
            "Sequential alphabets",
          ],
          0,
        ),
        q(
          "Base62 alphabet uses:",
          [
            "0-9 and A-Z only",
            "0-9, a-z, A-Z (62 chars)",
            "Hex digits",
            "ASCII printable chars",
          ],
          1,
        ),
        q(
          "The primary data store for URL mappings should support:",
          [
            "Complex joins",
            "High-throughput key-value lookups",
            "Full-text search",
            "Graph traversal",
          ],
          1,
        ),
        q(
          "Redirection HTTP status code for temporary redirect is:",
          ["200", "301", "302", "404"],
          2,
        ),
        q(
          "301 vs 302 redirect: browsers cache:",
          ["302", "301 (permanent)", "Both", "Neither"],
          1,
        ),
        q(
          "To handle 100M URLs, storage estimate focuses on:",
          [
            "CPU usage only",
            "Bytes per record × number of records",
            "Network bandwidth",
            "Cache miss rate",
          ],
          1,
        ),
        q(
          "Analytics for URL shortener can be stored in:",
          [
            "Same relational DB",
            "A separate time-series or analytics DB",
            "Cookie storage",
            "Browser cache",
          ],
          1,
        ),
        q(
          "Custom aliases in URL shorteners require checking:",
          [
            "Cache only",
            "For uniqueness in the key-value store",
            "DNS records",
            "CDN edge nodes",
          ],
          1,
        ),
        q(
          "Expiration of short URLs is handled by:",
          [
            "Manual deletion only",
            "TTL or scheduled cleanup jobs",
            "Load balancer",
            "DNS TTL",
          ],
          1,
        ),
        q(
          "Encoding collision in URL shortener is avoided by:",
          [
            "Using UUIDs",
            "Checking DB before confirming a new code, retrying on collision",
            "Disabling custom aliases",
            "Using MD5 only",
          ],
          1,
        ),
        q(
          "High read throughput (redirects) is best served by:",
          [
            "A SQL database with complex indexes",
            "Cache layer (Redis) in front of DB",
            "NoSQL with eventual consistency",
            "Message queue",
          ],
          1,
        ),
        q(
          "Rate limiting in URL shortener prevents:",
          [
            "Slow queries",
            "Abuse and link spam creation",
            "Data loss",
            "Cache invalidation",
          ],
          1,
        ),
        q(
          "Which is a suitable database for URL-to-code mappings?",
          [
            "Graph DB",
            "Redis or DynamoDB (key-value)",
            "Columnar store",
            "Time-series DB",
          ],
          1,
        ),
        q(
          "A counter-based ID approach for short codes requires:",
          [
            "A distributed counter service",
            "A single-threaded counter",
            "No coordination",
            "UUID generation",
          ],
          0,
        ),
        q(
          "Bloom filter helps URL shortener by:",
          [
            "Encrypting URLs",
            "Quickly checking if a URL already has a short code",
            "Storing analytics",
            "Balancing shards",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-rw-p1s1",
          "Core Design",
          "A URL shortener needs two APIs: shorten(longUrl) → shortCode and redirect(shortCode) → 301/302 to longUrl. Short codes are 6-7 character Base62 strings. Generation strategies: hash-based (MD5/SHA256 truncated to 7 chars, handle collisions), counter-based (atomic counter → Base62 encode), or random.",
        ),
        sub(
          "sd-rw-p1s2",
          "Storage & Scale",
          "With 100M URLs at ~500 bytes each, that's ~50GB — easily fits in a key-value store like Redis or DynamoDB. Reads heavily outnumber writes (100:1), so a read cache in front of the DB handles most traffic. Shard by shortCode hash for horizontal scaling.",
        ),
        sub(
          "sd-rw-p1s3",
          "Analytics & Expiration",
          "Click analytics (timestamp, IP, referrer) go to a separate analytics store to avoid slowing down redirects. URLs expire via TTL in Redis or a scheduled cleanup job. Custom aliases are stored in the same table but must be checked for uniqueness before confirmation.",
        ),
      ],
    } as CPart,
    {
      id: "sd-rw-p2",
      title: "Part 2: Social Feed & Messaging",
      description:
        "Design Twitter feed, newsfeed generation (fan-out), and WhatsApp messaging.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Social feeds involve trade-offs between push (fan-out on write) and pull (fan-out on read) models for newsfeed generation.",
      docs: [
        {
          label: "Designing Twitter – High Scalability",
          url: "http://highscalability.com/blog/2022/1/3/designing-twitter.html",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Fan-out on write means:",
          [
            "Computing feed when user reads",
            "Pre-computing feed when post is created",
            "Caching on CDN",
            "Lazy loading posts",
          ],
          1,
        ),
        q(
          "Fan-out on read is better for:",
          [
            "Users with millions of followers (celebrities)",
            "Users with few followers",
            "Real-time chats",
            "Image uploads",
          ],
          0,
        ),
        q(
          "Twitter uses a hybrid fan-out because:",
          [
            "All users have equal follower counts",
            "Celebrities use pull; regular users use push to avoid queue overload",
            "Push doesn't scale",
            "Pull is always faster",
          ],
          1,
        ),
        q(
          "Newsfeed storage per user is typically:",
          [
            "A SQL table with all posts",
            "A sorted set in Redis per user",
            "A file on disk",
            "A graph database",
          ],
          1,
        ),
        q(
          "WhatsApp ensures message delivery via:",
          [
            "Fire-and-forget",
            "Acknowledgement system with retry",
            "CDN delivery",
            "Email fallback",
          ],
          1,
        ),
        q(
          "End-to-end encryption in messaging means:",
          [
            "Server can read messages",
            "Only sender and receiver can decrypt messages",
            "Messages are stored in plaintext",
            "TLS at transport layer only",
          ],
          1,
        ),
        q(
          "Message ordering in distributed chat is maintained using:",
          [
            "Wall-clock time",
            "Logical clocks or vector clocks",
            "Random IDs",
            "Hash of content",
          ],
          1,
        ),
        q(
          "Presence (online/offline) in messaging is tracked via:",
          [
            "Database polling every minute",
            "Heartbeat signals + TTL in Redis",
            "HTTP long polling always",
            "Cookie expiry",
          ],
          1,
        ),
        q(
          "Group messaging at scale uses:",
          [
            "One-to-one connections for each member",
            "Fan-out to a group queue consumed by all members",
            "Email broadcast",
            "P2P connections",
          ],
          1,
        ),
        q(
          "Push notifications in mobile apps are sent via:",
          [
            "Direct socket connection always",
            "APNs (Apple) or FCM (Google)",
            "Email",
            "SMS only",
          ],
          1,
        ),
        q(
          "Read receipts ('seen by') require:",
          [
            "Server storing timestamp when message is delivered and read per user",
            "Client-side only logic",
            "Polling the sender",
            "No backend changes",
          ],
          0,
        ),
        q(
          "Media (images/videos) in WhatsApp is stored in:",
          [
            "Chat database",
            "Object storage (S3-like) with CDN",
            "Message queue",
            "In-memory cache",
          ],
          1,
        ),
        q(
          "Infinite scroll in social feeds uses:",
          [
            "Load all posts at once",
            "Cursor-based pagination for efficient queries",
            "Page numbers only",
            "Random ordering",
          ],
          1,
        ),
        q(
          "Timeline ranking (non-chronological feed) requires:",
          [
            "Simple timestamp sort",
            "ML model scoring for relevance",
            "Alphabetical ordering",
            "Random sampling",
          ],
          1,
        ),
        q(
          "Which data structure is best for a user's activity feed?",
          [
            "B-tree index",
            "Sorted set (by timestamp score)",
            "Hash map",
            "Linked list",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-rw-p2s1",
          "Newsfeed Design",
          "Fan-out on write: when a user posts, the server writes to every follower's feed cache immediately — fast reads but expensive for celebrities with millions of followers. Fan-out on read: compute the feed on request by merging followees' posts — slower reads but no write amplification. Twitter uses a hybrid.",
        ),
        sub(
          "sd-rw-p2s2",
          "Real-time Messaging Architecture",
          "WhatsApp uses a persistent WebSocket connection per client to a chat server. Messages are stored in a durable queue and acknowledged by the server. The recipient receives the message when their connection is active or via push notification when offline. End-to-end encryption uses the Signal protocol.",
        ),
        sub(
          "sd-rw-p2s3",
          "Scale Considerations",
          "User presence uses heartbeat signals with TTL in Redis — if no heartbeat for 30s, mark offline. Media uploads go to object storage (S3), then the chat message contains only a URL. Group messages are fan-out to each member's inbox. Cassandra is popular for message storage due to write-optimized, time-series access patterns.",
        ),
      ],
    } as CPart,
    {
      id: "sd-rw-p3",
      title: "Part 3: Video Streaming & Ride-sharing",
      description:
        "Design Netflix video delivery and Uber's real-time location and matching system.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Video streaming and ride-sharing represent different extremes: one is read-heavy with large blobs; the other is write-heavy with real-time geo data.",
      docs: [
        { label: "Netflix Tech Blog", url: "https://netflixtechblog.com/" },
      ] as DocLink[],
      partQuiz: [
        q(
          "Netflix transcodes videos into multiple bitrates for:",
          [
            "Storage savings",
            "Adaptive bitrate streaming to match user bandwidth",
            "DRM enforcement",
            "CDN routing",
          ],
          1,
        ),
        q(
          "Adaptive bitrate streaming (ABR) works by:",
          [
            "Streaming at a fixed bitrate",
            "Dynamically switching quality based on network conditions",
            "Pre-downloading entire video",
            "Using only audio stream",
          ],
          1,
        ),
        q(
          "HLS (HTTP Live Streaming) splits video into:",
          [
            "Single large file",
            "Small .ts segment files with an .m3u8 manifest",
            "RTMP streams",
            "Base64 blobs",
          ],
          1,
        ),
        q(
          "CDN is critical for Netflix because:",
          [
            "It runs business logic",
            "It serves video segments from edge nodes near users",
            "It manages user accounts",
            "It handles payment",
          ],
          1,
        ),
        q(
          "Uber's driver location updates use:",
          [
            "HTTP polling every 30s",
            "WebSocket or periodic REST updates every 4-5 seconds",
            "Email notifications",
            "DNS updates",
          ],
          1,
        ),
        q(
          "Geospatial indexing for nearby driver search uses:",
          [
            "B-tree index",
            "Quadtree or geohash",
            "Full-text search",
            "Hash map",
          ],
          1,
        ),
        q(
          "Uber matching algorithm considers:",
          [
            "Only distance",
            "Distance, driver rating, ETA, surge pricing",
            "Only surge pricing",
            "Random selection",
          ],
          1,
        ),
        q(
          "Surge pricing in Uber is calculated from:",
          [
            "Static rates",
            "Supply (drivers) vs demand (riders) in a geospatial cell",
            "Time of day only",
            "Traffic data only",
          ],
          1,
        ),
        q(
          "Video encoding formats used in streaming include:",
          [
            "MP3 only",
            "H.264, H.265 (HEVC), VP9, AV1",
            "WAV and FLAC",
            "GIF and WebP",
          ],
          1,
        ),
        q(
          "DRM (Digital Rights Management) in Netflix:",
          [
            "Speeds up streaming",
            "Prevents unauthorized copying/playback",
            "Improves video quality",
            "Reduces CDN costs",
          ],
          1,
        ),
        q(
          "Uber's trip data (start, end, route) is stored in:",
          [
            "Redis only",
            "A durable relational DB for billing and history",
            "Local device only",
            "Message queue only",
          ],
          1,
        ),
        q(
          "Netflix Open Connect is:",
          [
            "A payment system",
            "Netflix's own CDN with ISP-hosted appliances",
            "An encoding service",
            "An authentication service",
          ],
          1,
        ),
        q(
          "Real-time ETA calculation for Uber uses:",
          [
            "Static timetables",
            "Live traffic data combined with historical patterns",
            "Driver self-reporting",
            "GPS distance only",
          ],
          1,
        ),
        q(
          "Video thumbnail generation is an example of:",
          [
            "Synchronous user-facing operation",
            "Async background job after upload",
            "CDN routing logic",
            "Database sharding",
          ],
          1,
        ),
        q(
          "Uber's location data is a time-series stream best stored in:",
          [
            "Document DB",
            "Relational DB",
            "Time-series DB or Cassandra",
            "File system",
          ],
          2,
        ),
      ],
      subsections: [
        sub(
          "sd-rw-p3s1",
          "Netflix Architecture",
          "Videos are uploaded, then transcoded into multiple resolutions (480p, 720p, 1080p, 4K) and codecs (H.264, AV1) by distributed encoding workers. Segments are pushed to Open Connect (Netflix's CDN). The player downloads an .m3u8 manifest listing available quality levels and switches adaptively based on measured bandwidth.",
        ),
        sub(
          "sd-rw-p3s2",
          "Uber Real-time Location",
          "Driver apps send GPS coordinates to Uber's servers every 4-5 seconds via REST or WebSocket. Locations are stored in memory (Redis) indexed by geohash for fast spatial queries. When a rider requests a trip, the matching service queries nearby drivers within a geospatial radius and applies scoring (distance, rating, ETA).",
        ),
        sub(
          "sd-rw-p3s3",
          "Matching & Surge Pricing",
          "Matching is a bipartite optimization problem: assign riders to drivers minimizing total wait time. Surge pricing uses a supply-demand ratio within a geohash cell — when demand exceeds supply, a multiplier is applied. These calculations run on a stream processing engine (Kafka + Flink) for near-real-time responsiveness.",
        ),
      ],
    } as CPart,
    {
      id: "sd-rw-p4",
      title: "Part 4: Search & E-commerce",
      description:
        "Design Amazon product search, inventory management, and order processing pipeline.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Search systems require inverted indexes for fast full-text lookup. E-commerce order processing requires ACID transactions for inventory updates.",
      docs: [
        {
          label: "Elasticsearch Concepts",
          url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "An inverted index maps:",
          [
            "Document ID to words",
            "Words to document IDs where they appear",
            "User IDs to products",
            "Prices to products",
          ],
          1,
        ),
        q(
          "Elasticsearch uses which underlying library?",
          ["PostgreSQL", "Apache Lucene", "Redis", "MongoDB"],
          1,
        ),
        q(
          "TF-IDF measures:",
          [
            "Transaction frequency",
            "Term Frequency × Inverse Document Frequency for relevance scoring",
            "Total files indexed",
            "Transfer delay",
          ],
          1,
        ),
        q(
          "Search relevance ranking is improved by:",
          [
            "Sorting by insertion date",
            "ML-based ranking models (Learning to Rank)",
            "Alphabetical sorting",
            "Cache-only results",
          ],
          1,
        ),
        q(
          "Inventory reservation to avoid overselling uses:",
          [
            "Optimistic locking or atomic DB decrement",
            "Soft deletes",
            "Message queue only",
            "CDN caching",
          ],
          0,
        ),
        q(
          "Order processing pipeline uses async events to:",
          [
            "Block until payment succeeds",
            "Decouple inventory check, payment, and fulfillment",
            "Store orders in cache",
            "Avoid databases",
          ],
          1,
        ),
        q(
          "Product catalog reads vs writes ratio is typically:",
          [
            "1:1",
            "Reads much higher than writes",
            "Writes much higher than reads",
            "Equal",
          ],
          1,
        ),
        q(
          "Search autocomplete is implemented using:",
          [
            "Full table scan on every keystroke",
            "Trie data structure or prefix-indexed search",
            "Graph traversal",
            "Message queue",
          ],
          1,
        ),
        q(
          "Faceted search (filters by category, price) requires:",
          [
            "Full-text index only",
            "Aggregation-capable indexes (like Elasticsearch aggregations)",
            "Key-value store",
            "Message queues",
          ],
          1,
        ),
        q(
          "Flash sale inventory management requires:",
          [
            "Eventual consistency",
            "Strong consistency with atomic operations to prevent overselling",
            "NoSQL only",
            "CDN caching",
          ],
          1,
        ),
        q(
          "Shopping cart is best stored in:",
          [
            "Database with ACID transactions",
            "Client-side localStorage for simplicity, Redis for persistence",
            "Message queue",
            "Graph database",
          ],
          1,
        ),
        q(
          "Payment processing uses idempotency keys to:",
          [
            "Speed up payments",
            "Ensure duplicate payment requests are safely retried",
            "Avoid encryption",
            "Cache payment data",
          ],
          1,
        ),
        q(
          "Product recommendations are typically generated by:",
          [
            "Random selection",
            "Collaborative filtering or ML models",
            "Alphabetical sort",
            "Inventory count",
          ],
          1,
        ),
        q(
          "Search index update on product change is done via:",
          [
            "Direct synchronous write",
            "Change data capture (CDC) → search index update pipeline",
            "Manual process",
            "CDN invalidation",
          ],
          1,
        ),
        q(
          "Which storage is best for session cart data with TTL?",
          ["PostgreSQL", "HDFS", "Redis", "Cassandra"],
          2,
        ),
      ],
      subsections: [
        sub(
          "sd-rw-p4s1",
          "Search Architecture",
          "Elasticsearch clusters store documents in sharded inverted indexes. Products are indexed as JSON documents; a search query is analyzed, tokenized, and matched against the inverted index. Relevance is scored by TF-IDF and BM25. A separate indexing pipeline (Kafka → consumer → Elasticsearch) keeps the index updated from the product database.",
        ),
        sub(
          "sd-rw-p4s2",
          "Order Processing Pipeline",
          "An order flows through: cart checkout → inventory reservation (atomic decrement) → payment processing → order confirmation → fulfillment. Each step publishes events to a message queue. Failures trigger compensating transactions (SAGA). Idempotency keys on the payment API prevent double-charging on retries.",
        ),
        sub(
          "sd-rw-p4s3",
          "Inventory at Scale",
          "Flash sales need atomic inventory decrement — use Redis DECR for speed with a DB sync-back, or database-level ACID transactions with row-level locking. Optimistic locking uses version numbers to detect concurrent updates. Oversell prevention is critical: reserve stock immediately on order placement, release if payment fails.",
        ),
      ],
    } as CPart,
  ],
  moduleQuiz: [
    q(
      "URL shortener short codes are typically encoded in:",
      ["Base16", "Base64", "Base62", "Binary"],
      2,
    ),
    q(
      "Fan-out on write is problematic for users with:",
      [
        "Few followers",
        "Millions of followers",
        "Private accounts",
        "Deleted accounts",
      ],
      1,
    ),
    q(
      "Netflix CDN serves:",
      [
        "Business logic",
        "Video segments from edge nodes near users",
        "User authentication",
        "Payment processing",
      ],
      1,
    ),
    q(
      "Uber uses geohash for:",
      [
        "User authentication",
        "Spatial proximity driver search",
        "Payment routing",
        "Video streaming",
      ],
      1,
    ),
    q(
      "Inverted index maps:",
      [
        "Document to words",
        "Words to documents where they appear",
        "Users to products",
        "Prices to categories",
      ],
      1,
    ),
  ],
  moduleProgrammingQuestions: [],
  moduleTest: emptyTest(),
};

// ─── Module 5: Interview Preparation ─────────────────────────────────────────

const module5: CModule = {
  id: "sd-interview",
  title: "Module 5: Interview Preparation",
  outcome:
    "Confidently approach system design interviews using structured frameworks and avoid common pitfalls.",
  isLocked: true,
  parts: [
    {
      id: "sd-int-p1",
      title: "Part 1: Interview Framework (PEDALS)",
      description:
        "Process, Estimate, Design, APIs, Layer deep, Scale — a structured 45-minute approach.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "PEDALS: Process requirements, Estimate scale, Design data model, API design, Layer in detail, Scale the design.",
      docs: [
        {
          label: "System Design Interview Guide – Grokking",
          url: "https://www.designgurus.io/blog/system-design-interview-fundamentals",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "What does 'P' in PEDALS stand for?",
          [
            "Plan",
            "Process requirements & clarify scope",
            "Prototype",
            "Partition",
          ],
          1,
        ),
        q(
          "The 'E' in PEDALS is:",
          [
            "Evaluate trade-offs",
            "Estimate scale (users, QPS, storage)",
            "Encrypt data",
            "Enumerate services",
          ],
          1,
        ),
        q(
          "You should ask clarifying questions:",
          [
            "Never — just start designing",
            "At the very start of the interview",
            "Only after finishing the design",
            "When the interviewer asks",
          ],
          1,
        ),
        q(
          "Estimating QPS (queries per second) helps with:",
          [
            "Code quality",
            "Determining caching and database capacity needs",
            "UI design",
            "Authentication strategy",
          ],
          1,
        ),
        q(
          "Which should you design first in a system design interview?",
          [
            "Database schema in detail",
            "High-level architecture showing major components",
            "Low-level code",
            "Deployment configuration",
          ],
          1,
        ),
        q(
          "API design in the interview should cover:",
          [
            "Implementation details",
            ["Endpoints, request/response format, and auth method"][0],
            "Database indexes only",
            "Frontend components",
          ],
          1,
        ),
        q(
          "Scaling the design ('S' in PEDALS) should happen:",
          [
            "Before any design",
            "At the end, after core design is established",
            "During requirements",
            "Never",
          ],
          1,
        ),
        q(
          "How long should requirements clarification take in a 45-minute interview?",
          ["20 minutes", "1-2 minutes", "5-10 minutes", "30 minutes"],
          2,
        ),
        q(
          "What is a back-of-envelope calculation used for in interviews?",
          [
            "Proving mathematical skills",
            "Estimating scale to justify design choices",
            "Showing coding ability",
            "Defining SLAs",
          ],
          1,
        ),
        q(
          "Which is the BEST way to start a system design question?",
          [
            "Draw boxes immediately",
            "Ask about scale, users, and key features before designing",
            "Write code first",
            "Define database schema first",
          ],
          1,
        ),
        q(
          "Trade-off discussion in interviews means:",
          [
            "Avoiding any trade-offs",
            ["Explaining why you chose one approach over alternatives"][0],
            "Implementing all options",
            "Ignoring interviewer input",
          ],
          1,
        ),
        q(
          "Whiteboard/diagram convention: boxes represent:",
          [
            "Databases only",
            "Any component (service, database, queue, client)",
            "Users only",
            "APIs only",
          ],
          1,
        ),
        q(
          "When should you mention bottlenecks?",
          [
            "Never",
            "Only when asked",
            "Proactively after presenting the design",
            "Only at the start",
          ],
          2,
        ),
        q(
          "The 'L' in PEDALS means:",
          [
            "Load balance",
            "Layer/dive deep into one specific component",
            "Log all requests",
            "List all microservices",
          ],
          1,
        ),
        q(
          "A good system design answer prioritizes:",
          [
            "Perfect code",
            "Clear communication, trade-offs, and iterative refinement",
            "Using every technology",
            "Avoiding databases",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-int-p1s1",
          "PEDALS Framework",
          "Process: gather requirements (functional and non-functional). Estimate: calculate QPS, storage, bandwidth. Design: draw the high-level diagram. API: define key endpoints. Layer: dive deep into one component. Scale: identify bottlenecks and apply scalability techniques. Following this structure shows methodical thinking.",
        ),
        sub(
          "sd-int-p1s2",
          "Clarifying Requirements",
          "Always ask: Who uses the system? What are the core features? What scale are we designing for (users, writes/sec, reads/sec)? Are there latency constraints? This takes 5-10 minutes and prevents designing the wrong system. Functional requirements define features; non-functional requirements define performance, scale, and reliability.",
        ),
        sub(
          "sd-int-p1s3",
          "Back-of-Envelope Estimation",
          "Rough estimation: assume 1M DAU. Each user makes 10 reads and 1 write per day. QPS = 1M × 10 / 86400 ≈ 115 reads/sec, 12 writes/sec. Storage: 1M users × 1KB per write × 365 days = ~365GB/year. These numbers inform whether you need caching, sharding, or CDN.",
        ),
      ],
    } as CPart,
    {
      id: "sd-int-p2",
      title: "Part 2: Common Mistakes & Best Practices",
      description:
        "Pitfalls in system design interviews and how to avoid them.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "The most common mistake is jumping into solution details before understanding the problem scope.",
      docs: [
        {
          label: "System Design Mistakes – Medium",
          url: "https://medium.com/@karan99/common-mistakes-in-system-design-interviews-f8b7e77b2c61",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "The #1 system design interview mistake is:",
          [
            "Drawing too many diagrams",
            "Not asking clarifying questions before designing",
            "Using too many databases",
            "Over-explaining basics",
          ],
          1,
        ),
        q(
          "Over-engineering means:",
          [
            "Designing for 10x current scale",
            "Adding unnecessary complexity for hypothetical future needs",
            "Writing unit tests",
            "Using microservices always",
          ],
          1,
        ),
        q(
          "Not discussing trade-offs is a problem because:",
          [
            "It shows confidence",
            [
              "Interviewers want to see your reasoning, not just the solution",
            ][0],
            "Trade-offs are irrelevant",
            "It speeds up the interview",
          ],
          1,
        ),
        q(
          "Premature optimization refers to:",
          [
            "Optimizing at the wrong time before knowing bottlenecks",
            "Always optimizing from the start",
            "Ignoring performance",
            "Using caching everywhere",
          ],
          0,
        ),
        q(
          "Single point of failure (SPOF) should be:",
          [
            "Ignored in interviews",
            "Identified and mitigated with redundancy",
            "Added intentionally",
            "Only in databases",
          ],
          1,
        ),
        q(
          "What does 'think aloud' mean in a design interview?",
          [
            "Speaking randomly",
            "Narrating your thought process so the interviewer can follow",
            "Reading the problem aloud",
            "Asking to think silently",
          ],
          1,
        ),
        q(
          "Using a relational database for everything is:",
          [
            "Always correct",
            "A potential mistake when a specialized store fits better",
            "Forbidden in interviews",
            "Required for transactions",
          ],
          1,
        ),
        q(
          "Not considering security (auth, encryption) is:",
          [
            "Acceptable for junior roles",
            "A red flag showing incomplete design thinking",
            "Out of scope always",
            "Bonus content only",
          ],
          1,
        ),
        q(
          "Skipping capacity estimation means:",
          [
            "Saving time",
            "Missing key decisions about caching, sharding, and replication",
            "Showing efficiency",
            "The interviewer prefers it",
          ],
          1,
        ),
        q(
          "Good system design communication involves:",
          [
            "Technical jargon only",
            "Clear diagrams, labeled components, and explained decisions",
            "Rapid speech to cover more ground",
            "Avoiding diagrams",
          ],
          1,
        ),
        q(
          "Designing for 100% availability is:",
          [
            "The goal",
            "Practically impossible and not a realistic target",
            "Required for all systems",
            "Easy with microservices",
          ],
          1,
        ),
        q(
          "Inconsistent terminology in an interview indicates:",
          [
            "Expertise",
            "Possible confusion between concepts; use precise terms consistently",
            "Creativity",
            "Good communication",
          ],
          1,
        ),
        q(
          "Best response when you don't know something in an interview:",
          [
            "Guess confidently",
            "Acknowledge the gap and reason through what you do know",
            "Change the subject",
            "Ask the interviewer for the answer",
          ],
          1,
        ),
        q(
          "Describing the happy path only (no error handling) is:",
          [
            "Complete",
            "Incomplete — good designs handle failures explicitly",
            "Efficient",
            "Expected at senior level",
          ],
          1,
        ),
        q(
          "The best system design uses:",
          [
            "The most technologies possible",
            [
              "The simplest design that meets requirements, with clear justification for each component",
            ][0],
            "Only NoSQL databases",
            "Microservices always",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-int-p2s1",
          "Top Mistakes",
          "Not clarifying requirements leads to solving the wrong problem. Jumping to solutions without estimation means you may design for the wrong scale. Not discussing trade-offs looks like shallow thinking. Over-engineering wastes interview time on hypothetical complexity. Forgetting non-functional requirements (latency, availability) leaves the design incomplete.",
        ),
        sub(
          "sd-int-p2s2",
          "Communication Best Practices",
          "Think out loud — interviewers evaluate reasoning, not just the final answer. Draw components before explaining details. Label everything on the diagram. Acknowledge trade-offs explicitly: 'I chose X over Y because…'. Invite feedback: 'Does this approach make sense? Should I dive deeper into any part?'.",
        ),
        sub(
          "sd-int-p2s3",
          "Scoping & Prioritization",
          "In 45 minutes you cannot design everything. Start with the critical path — the must-have flow. Mark other areas as 'can expand if time permits'. A clear, well-explained core design beats an incomplete attempt at everything. Always leave 5 minutes to walk through the design end-to-end and identify bottlenecks.",
        ),
      ],
    } as CPart,
    {
      id: "sd-int-p3",
      title: "Part 3: Practice Questions",
      description:
        "Mock interview questions with approach outlines for 10 common system design problems.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Regular practice with timed mock interviews is the most effective preparation for system design interviews.",
      docs: [
        {
          label: "System Design Primer – GitHub",
          url: "https://github.com/donnemartin/system-design-primer",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Design a rate limiter — which algorithm uses a sliding window counter?",
          [
            "Token bucket only",
            "Sliding window log or sliding window counter",
            "Fixed window only",
            "Leaky bucket only",
          ],
          1,
        ),
        q(
          "Designing a notification system — which component decides what to send?",
          [
            "CDN",
            "Notification service consuming user events from a queue",
            "DNS",
            "Load balancer",
          ],
          1,
        ),
        q(
          "Design a file storage (Dropbox) — large files are best uploaded via:",
          [
            "Single HTTP request",
            "Chunked/multipart upload to object storage",
            "Email attachment",
            "FTP",
          ],
          1,
        ),
        q(
          "Designing a search engine — the index is built by:",
          [
            "User browsers",
            "Crawler → Parser → Indexer pipeline",
            "CDN",
            "Load balancer",
          ],
          1,
        ),
        q(
          "Design a live leaderboard — sorted scores are best stored in:",
          [
            "SQL table",
            "Redis Sorted Set (ZSET)",
            "File system",
            "Message queue",
          ],
          1,
        ),
        q(
          "Distributed lock service is used for:",
          [
            "UI rendering",
            ["Preventing concurrent access to a shared resource"][0],
            "Caching static assets",
            "DNS resolution",
          ],
          1,
        ),
        q(
          "Design a web crawler — politeness means:",
          [
            "Crawling as fast as possible",
            "Respecting robots.txt and rate-limiting per domain",
            "Ignoring duplicate URLs",
            "Storing all pages in RAM",
          ],
          1,
        ),
        q(
          "Design a collaborative editor (Google Docs) — conflict resolution uses:",
          [
            "Last-write-wins",
            "Operational Transformation (OT) or CRDTs",
            "Locks per document",
            "Append-only log only",
          ],
          1,
        ),
        q(
          "Designing a hotel booking system — preventing double booking uses:",
          [
            "Message queue",
            "Optimistic/pessimistic locking with ACID transactions",
            "CDN",
            "Bloom filter",
          ],
          1,
        ),
        q(
          "Design a proximity service (find nearby restaurants) — spatial index uses:",
          ["B-tree", "Quadtree or geohash grid", "Hash map", "Inverted index"],
          1,
        ),
        q(
          "Stock trading system requires:",
          [
            "Eventual consistency",
            ["Strong consistency and strict ordering for order matching"][0],
            "High read latency",
            "NoSQL only",
          ],
          1,
        ),
        q(
          "Design a typeahead/autocomplete — data is pre-computed in:",
          [
            "A SQL table",
            "A Trie or prefix search index",
            "A message queue",
            "An object store",
          ],
          1,
        ),
        q(
          "Video upload flow (YouTube) after user uploads:",
          [
            "Directly streams raw video",
            "Triggers async transcoding jobs before publishing",
            "Stores in SQL",
            "Sends to CDN immediately",
          ],
          1,
        ),
        q(
          "Designing metrics collection (Prometheus-like) — time-series data is stored in:",
          [
            "Relational DB",
            "Time-series database (InfluxDB, Prometheus TSDB)",
            "Graph DB",
            "Document DB",
          ],
          1,
        ),
        q(
          "Ad click aggregation requires:",
          [
            "Real-time per-click DB writes",
            "Stream processing with approximate counting (HyperLogLog)",
            "Relational joins per click",
            "Client-side computation",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-int-p3s1",
          "URL Shortener, Rate Limiter, Pastebin",
          "URL Shortener: Base62 encoding, key-value store, read cache. Rate Limiter: token bucket or sliding window counter, Redis for distributed state. Pastebin: similar to URL shortener but stores text blobs in object storage with expiry TTL — don't store large blobs in the URL mapping DB.",
        ),
        sub(
          "sd-int-p3s2",
          "Notification System, File Storage, Search Engine",
          "Notification System: event → notification service → channel handlers (push/email/SMS). File Storage: chunked multipart upload → object store → metadata DB. Search Engine: crawler pipeline → inverted index → ranking service. Each is a multi-component pipeline requiring async processing.",
        ),
        sub(
          "sd-int-p3s3",
          "Leaderboard, Typeahead, Collaborative Editor",
          "Leaderboard: Redis Sorted Set for real-time rankings with O(log n) updates and range queries. Typeahead: Trie or prefix-indexed Elasticsearch, debounced on the client. Collaborative Editor: CRDT or Operational Transformation for conflict-free concurrent edits, WebSocket for real-time sync, and a persisted event log for history.",
        ),
      ],
    } as CPart,
    {
      id: "sd-int-p4",
      title: "Part 4: Career & Final Tips",
      description:
        "Building a system design portfolio, resources for continued learning, and what interviewers look for.",
      hasCodingContent: false,
      videoUrl: `https://www.youtube.com/watch?v=${VIDEO}`,
      notes:
        "Interviewers evaluate your ability to think at scale, communicate trade-offs, and make pragmatic decisions under uncertainty.",
      docs: [
        {
          label: "System Design Interview Book – Alex Xu",
          url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "What do senior-level system design interviews evaluate above all?",
          [
            "Memorized patterns",
            "Reasoning under ambiguity and trade-off communication",
            "Coding speed",
            "Algorithm complexity",
          ],
          1,
        ),
        q(
          "The best way to practice system design is:",
          [
            "Reading textbooks only",
            "Mock interviews with timed practice and peer feedback",
            "Watching videos passively",
            "Memorizing diagrams",
          ],
          1,
        ),
        q(
          "Which resource is widely recommended for system design prep?",
          [
            "The C Programming Language book",
            "System Design Interview by Alex Xu",
            "SICP",
            "Clean Code",
          ],
          1,
        ),
        q(
          "Writing a design doc for a past project helps by:",
          [
            "Proving you can write documentation",
            "Solidifying your understanding and creating portfolio artifacts",
            "Satisfying HR",
            "Replacing the interview",
          ],
          1,
        ),
        q(
          "Architecture Decision Records (ADRs) document:",
          [
            "Code snippets",
            "Why a specific technology or design choice was made",
            "Meeting minutes",
            "Bug reports",
          ],
          1,
        ),
        q(
          "Reading engineering blogs from Netflix, Uber, Airbnb helps by:",
          [
            "Learning their exact technology stack",
            "Understanding real-world trade-offs and scale challenges",
            "Finding job openings",
            "Copying their architecture blindly",
          ],
          1,
        ),
        q(
          "Open source contributions to distributed systems help because:",
          [
            "They guarantee a job offer",
            "They provide hands-on experience with real production systems",
            "They replace design interviews",
            "They show coding ability only",
          ],
          1,
        ),
        q(
          "Domain expertise (e.g., having built a search engine) in an interview:",
          [
            "Is not valued",
            "Shows depth and helps you design with real-world awareness",
            "Replaces the need to explain trade-offs",
            "Is irrelevant if you know patterns",
          ],
          1,
        ),
        q(
          "Which is most valuable in a 45-min system design interview?",
          [
            "Covering every component perfectly",
            "Showing structured thinking and adapting based on interviewer feedback",
            "Using the most technologies",
            "Finishing early",
          ],
          1,
        ),
        q(
          "After the interview, you should:",
          [
            "Accept the result passively",
            "Ask for feedback and reflect on gaps to improve",
            "Assume you failed if not given an answer",
            "Stop practicing",
          ],
          1,
        ),
        q(
          "Soft skills matter in system design interviews because:",
          [
            "They are more important than technical skills",
            "Design involves communication, influence, and negotiation in real teams",
            "Interviewers prefer non-technical candidates",
            "They replace knowledge of distributed systems",
          ],
          1,
        ),
        q(
          "Designing systems for the current scale (not 100x) is:",
          [
            "Under-engineering",
            "Pragmatic — build for now, design for growth",
            "Forbidden in interviews",
            "Only for startups",
          ],
          1,
        ),
        q(
          "The System Design Primer on GitHub is valuable because:",
          [
            "It replaces all books",
            "It provides a comprehensive, free, community-maintained reference",
            "It has practice coding problems",
            "It is the official Google study guide",
          ],
          1,
        ),
        q(
          "Discussing monitoring and observability in a design interview:",
          [
            "Is off-topic",
            "Shows production maturity — good systems are observable",
            "Is only for DevOps roles",
            "Should be avoided",
          ],
          1,
        ),
        q(
          "Final rule for system design interviews:",
          [
            "Perfect is better than done",
            "A clear, justified, iterative design beats a complex, unexplained one",
            "Never ask questions",
            "Always use microservices",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "sd-int-p4s1",
          "What Interviewers Look For",
          "Senior engineers look for: structured thinking (do you have a process?), breadth (do you know the major components?), depth (can you dive into one area?), trade-off awareness (do you know why, not just what?), and communication (can you explain complex ideas clearly?). Memorized patterns without reasoning score poorly.",
        ),
        sub(
          "sd-int-p4s2",
          "Continuous Learning Resources",
          "Top resources: System Design Interview by Alex Xu (Volumes 1 & 2), Designing Data-Intensive Applications by Martin Kleppmann, System Design Primer on GitHub, engineering blogs from Uber, Netflix, Airbnb, Discord, and Cloudflare. Study one real system per week — read the blog, draw the architecture, discuss trade-offs.",
        ),
        sub(
          "sd-int-p4s3",
          "Building Experience",
          "Contribute to open-source distributed systems (Apache Kafka, Cassandra, Redis). Build side projects at scale — URL shortener, chat app, search engine. Write design documents and post-mortems for work projects. Practice mock interviews with peers using a 45-minute timer. The gap between knowing patterns and being interview-ready is closed by practice, not more reading.",
        ),
      ],
    } as CPart,
  ],
  moduleQuiz: [
    q(
      "'P' in PEDALS stands for:",
      ["Plan", "Process requirements", "Prototype", "Partition"],
      1,
    ),
    q(
      "Back-of-envelope estimation helps:",
      [
        "Show math skills",
        "Justify architecture choices based on scale",
        "Avoid databases",
        "Skip capacity planning",
      ],
      1,
    ),
    q(
      "The #1 interview mistake is:",
      [
        "Drawing diagrams",
        "Not clarifying requirements before designing",
        "Using too many databases",
        "Over-explaining",
      ],
      1,
    ),
    q(
      "Redis Sorted Set is best for:",
      [
        "Full-text search",
        "Real-time leaderboards",
        "Document storage",
        "Message queuing",
      ],
      1,
    ),
    q(
      "Interviewers value most:",
      [
        "Memorized solutions",
        "Structured thinking with trade-off communication",
        "Using every technology",
        "Finishing in 20 minutes",
      ],
      1,
    ),
  ],
  moduleProgrammingQuestions: [],
  moduleTest: emptyTest(),
};

// ─── Course Export ─────────────────────────────────────────────────────────────

const systemDesignCourse: SystemDesignCourse = {
  id: "system-design",
  title: "System Design",
  description:
    "Master scalable system design — from fundamentals to real-world architectures and interview preparation.",
  category: "Engineering",
  certificate: true,
  modules: [module0, module1, module2, module3, module4, module5],
};

export default systemDesignCourse;

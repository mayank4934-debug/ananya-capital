import type {
  CModule,
  CPart,
  CQuizQuestion,
  CSubsection,
  CTestProblem,
} from "./cProgrammingCourse";
import type { DocLink } from "./roadmaps";

// ─── Re-export types for consumers ───────────────────────────────────────────
export type { CModule, CQuizQuestion, CSubsection, CPart, CTestProblem };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function q(
  question: string,
  options: string[],
  correct: number,
  xp = 10,
): CQuizQuestion {
  return { question, options, correct, xp };
}

function sub(id: string, title: string, content: string): CSubsection {
  return { id, title, content, video: { youtubeId: "dQw4w9WgXcQ", title } };
}

const noTest: CTestProblem[] = [];

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const module0: CModule = {
  id: "cs-subjects-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "cs-subjects-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to CS Subjects! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO CS SUBJECTS!

Hey! I'm so excited to be your companion on this CS Subjects journey! 💻 These core computer science subjects are asked in virtually every technical interview — OS, DBMS, Networks, Theory of Computation, Compiler Design, and Digital Electronics are the foundation of your CS knowledge. Let's master them together!

COURSE OVERVIEW
CS Subjects covers the fundamental theoretical and systems-level topics taught in computer science curricula worldwide and tested rigorously in campus placements and technical interviews. You'll deeply understand how operating systems manage processes and memory, how databases store and query data, how networks transmit information, the theory behind computation, how compilers transform code, and how digital logic circuits work.

HOW THIS COURSE WORKS
This course has 6 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), and a Quiz (15 MCQs to test your knowledge). CS Subjects are primarily theoretical — coding questions appear only in parts where programming is explicitly taught. After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~45 hours
This is a rigorous theory course. Dedicate 1–2 hours per day and you'll be interview-ready in about 5–6 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "cs-subjects-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this CS Subjects course:

1. Operating Systems — Processes & threads, memory management, file systems, deadlocks, scheduling
2. DBMS — Relational model, SQL, normalization (1NF–BCNF), transactions, ACID, indexing
3. Computer Networks — OSI/TCP-IP model, IP addressing, routing protocols, TCP vs UDP, DNS, HTTP
4. Theory of Computation — Finite automata, regular languages, CFGs, Turing machines, decidability
5. Compiler Design — Lexical analysis, parsing, semantic analysis, code generation, optimization
6. Digital Electronics — Logic gates, Boolean algebra, combinational/sequential circuits, flip-flops`,
          codeExample: "",
        },
        {
          id: "cs-subjects-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning

CS Subjects is primarily theoretical — most parts focus on deep conceptual understanding tested through quizzes. Coding questions appear in very few parts (e.g., SQL queries, basic algorithm implementations).

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "cs-subjects-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what CS Subjects covers and why it matters for interviews
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part to test your conceptual understanding
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your CS Subjects journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: noTest,
};

// ─── Module 1: Operating Systems ─────────────────────────────────────────────

const module1: CModule = {
  id: "cs-os",
  title: "Module 1: Operating Systems",
  outcome: "Understand how an OS manages processes, memory, and file systems.",
  isLocked: false,
  parts: [
    {
      id: "cs-os-p1",
      title: "Part 1: Processes & Threads",
      description: "Process lifecycle, PCB, threads, and concurrency.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "A process is a program in execution with its own address space. A thread is a lightweight sub-process sharing the same memory.",
      docs: [
        {
          label: "OS Processes – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/processes-in-linuxunix/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "What is a process?",
          [
            "A file on disk",
            "A program in execution",
            "A CPU register",
            "A memory segment",
          ],
          1,
        ),
        q(
          "Threads within the same process share:",
          ["Stack", "Registers", "Heap memory", "Program counter"],
          2,
        ),
        q(
          "What does PCB stand for?",
          [
            "Process Control Block",
            "Program Counter Buffer",
            "Processor Clock Bus",
            "Primary Code Block",
          ],
          0,
        ),
        q(
          "Which state means a process is waiting for I/O?",
          ["Running", "Ready", "Blocked", "Terminated"],
          2,
        ),
        q(
          "Context switching saves and restores the:",
          [
            "Hard disk state",
            "Network state",
            "PCB of each process",
            "GPU state",
          ],
          2,
        ),
        q(
          "A zombie process is:",
          [
            "A running process",
            "A process that finished but parent hasn't read its status",
            "A blocked process",
            "An orphan process",
          ],
          1,
        ),
        q(
          "Multiprogramming means:",
          [
            "Running one program at a time",
            "Multiple programs in memory simultaneously",
            "Multi-core CPUs",
            "Parallel compilation",
          ],
          1,
        ),
        q(
          "IPC stands for:",
          [
            "Internal Process Code",
            "Inter-Process Communication",
            "Integrated Program Control",
            "Input/Process/Continue",
          ],
          1,
        ),
        q(
          "A thread is also called:",
          [
            "Heavyweight process",
            "Lightweight process",
            "Virtual process",
            "Daemon",
          ],
          1,
        ),
        q(
          "Which is NOT a process state?",
          ["Ready", "Running", "Blocked", "Compiling"],
          3,
        ),
        q(
          "The OS scheduler decides:",
          [
            "Memory layout",
            "Which process gets CPU next",
            "File permissions",
            "Network packets",
          ],
          1,
        ),
        q(
          "Shared memory is a type of:",
          ["CPU feature", "IPC mechanism", "File system", "Cache"],
          1,
        ),
        q(
          "A daemon process runs:",
          [
            "Interactively",
            "In the background without a terminal",
            "Only on login",
            "On GPUs",
          ],
          1,
        ),
        q(
          "Fork() in Unix creates:",
          ["A thread", "A child process copy", "A pipe", "A socket"],
          1,
        ),
        q(
          "Race condition occurs when:",
          [
            "CPU is overloaded",
            "Two processes access shared data concurrently without sync",
            "Memory is full",
            "I/O is slow",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "m1p1s1",
          "Process Lifecycle",
          "A process transitions through states: New → Ready → Running → Blocked → Terminated. The OS tracks each process using a Process Control Block (PCB) storing PID, registers, memory maps, and I/O state. Understanding the lifecycle helps debug hangs and zombie processes.",
        ),
        sub(
          "m1p1s2",
          "Threads and Concurrency",
          "A thread is a unit of execution within a process. Multiple threads share code, data, and heap but each has its own stack and registers. Concurrency enables responsive programs but introduces race conditions when threads access shared data without synchronization.",
        ),
        sub(
          "m1p1s3",
          "Inter-Process Communication",
          "Processes communicate via IPC mechanisms: pipes (one-way byte stream), message queues, shared memory (fastest), and sockets (network). Shared memory requires synchronization with semaphores or mutexes to prevent race conditions.",
        ),
      ],
    },
    {
      id: "cs-os-p2",
      title: "Part 2: CPU Scheduling",
      description: "FCFS, SJF, Round Robin, Priority scheduling algorithms.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "CPU scheduling determines which ready process runs next to maximize CPU utilization.",
      docs: [
        {
          label: "CPU Scheduling – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems-using-the-priority-queue-with-gantt-chart/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "FCFS stands for:",
          [
            "First Come First Served",
            "Fast CPU Flow Scheduler",
            "Fixed Cycle Frame Sequence",
            "First Core First Schedule",
          ],
          0,
        ),
        q(
          "SJF scheduling picks:",
          [
            "Longest job",
            "Job with highest priority",
            "Job with shortest burst time",
            "Random job",
          ],
          2,
        ),
        q(
          "Round Robin uses a:",
          [
            "Priority queue",
            "Time quantum",
            "Shortest job metric",
            "Deadlock check",
          ],
          1,
        ),
        q(
          "Preemptive scheduling means:",
          [
            "Process runs to completion",
            "OS can forcibly remove CPU from a process",
            "Only one process allowed",
            "No context switch",
          ],
          1,
        ),
        q(
          "Turnaround time =",
          [
            "Completion – Arrival time",
            "Burst time only",
            "Waiting time only",
            "Completion – Burst time",
          ],
          0,
        ),
        q(
          "Waiting time =",
          [
            "Turnaround – Burst time",
            "Burst – Arrival",
            "Completion time",
            "Queue length",
          ],
          0,
        ),
        q(
          "Convoy effect happens in:",
          ["Round Robin", "SJF", "FCFS", "Priority"],
          2,
        ),
        q(
          "Starvation can occur in:",
          ["FCFS", "Round Robin", "Priority scheduling", "SJF non-preemptive"],
          2,
        ),
        q(
          "Aging prevents:",
          ["Race conditions", "Deadlocks", "Starvation", "Context switches"],
          2,
        ),
        q(
          "Shortest Remaining Time First is:",
          [
            "Non-preemptive SJF",
            "Preemptive SJF",
            "Round Robin variant",
            "Priority variant",
          ],
          1,
        ),
        q(
          "Response time measures:",
          [
            "Time from submission to first CPU use",
            "Total execution time",
            "Waiting in ready queue",
            "I/O wait time",
          ],
          0,
        ),
        q(
          "Multilevel queue scheduling uses:",
          [
            "One queue for all processes",
            "Separate queues for different process types",
            "Random assignment",
            "FCFS only",
          ],
          1,
        ),
        q(
          "CPU bound processes spend most time:",
          [
            "Waiting for I/O",
            "Doing computations",
            "In blocked state",
            "In new state",
          ],
          1,
        ),
        q(
          "I/O bound processes:",
          [
            "Rarely use CPU",
            "Never block",
            "Use CPU intensively",
            "Have highest priority always",
          ],
          0,
        ),
        q(
          "The goal of CPU scheduling is to maximize:",
          ["Idle time", "Context switches", "CPU utilization", "Waiting time"],
          2,
        ),
      ],
      subsections: [
        sub(
          "m1p2s1",
          "FCFS & SJF",
          "First Come First Served processes jobs in arrival order — simple but causes the convoy effect (short jobs wait behind long ones). Shortest Job First picks the process with the smallest burst time, minimizing average waiting time but requiring knowledge of burst times in advance.",
        ),
        sub(
          "m1p2s2",
          "Round Robin & Priority",
          "Round Robin assigns each process a fixed time quantum cyclically — fair for all processes and good for interactive systems. Priority scheduling runs the highest-priority process first; static priorities may cause starvation of low-priority processes, solved by aging (increasing priority over time).",
        ),
        sub(
          "m1p2s3",
          "Scheduling Metrics",
          "Key metrics: Turnaround time (completion minus arrival), Waiting time (turnaround minus burst), Response time (first CPU use minus arrival), and CPU utilization (percentage of time CPU is busy). Good schedulers minimize waiting and turnaround while maximizing utilization.",
        ),
      ],
    },
    {
      id: "cs-os-p3",
      title: "Part 3: Memory Management",
      description: "Paging, segmentation, virtual memory, page replacement.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "Memory management maps logical addresses to physical RAM and handles virtual memory via paging.",
      docs: [
        {
          label: "Memory Management – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/memory-management-in-operating-system/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Paging divides memory into fixed-size:",
          ["Segments", "Pages and frames", "Sectors", "Clusters"],
          1,
        ),
        q(
          "A page table maps:",
          [
            "Physical to logical",
            "Logical to physical addresses",
            "Virtual to disk",
            "Cache to RAM",
          ],
          1,
        ),
        q(
          "Internal fragmentation occurs in:",
          [
            "Segmentation",
            "Paging",
            "Linked allocation",
            "Contiguous allocation",
          ],
          1,
        ),
        q(
          "External fragmentation occurs in:",
          ["Paging", "Segmentation", "Neither", "Both equally"],
          1,
        ),
        q(
          "Virtual memory allows processes to use:",
          [
            "More RAM than installed",
            "Only physical RAM",
            "Only cache",
            "GPU memory",
          ],
          0,
        ),
        q(
          "A page fault occurs when:",
          [
            "Page is in RAM",
            "CPU overloads",
            "Requested page is not in RAM",
            "TLB hits",
          ],
          2,
        ),
        q(
          "LRU page replacement evicts:",
          [
            "Least recently used page",
            "Most recently used page",
            "Random page",
            "Oldest page",
          ],
          0,
        ),
        q(
          "FIFO page replacement evicts:",
          [
            "Random page",
            "Oldest page in memory",
            "Least used page",
            "Largest page",
          ],
          1,
        ),
        q(
          "Thrashing is caused by:",
          [
            "Too much CPU",
            "Excessive page faults due to insufficient RAM",
            "Large page size",
            "Too few processes",
          ],
          1,
        ),
        q(
          "TLB stands for:",
          [
            "Translation Lookaside Buffer",
            "Total Load Block",
            "Thread Level Bridge",
            "Table of Logical Bytes",
          ],
          0,
        ),
        q(
          "Compaction solves:",
          [
            "Internal fragmentation",
            "External fragmentation",
            "Page faults",
            "Thrashing",
          ],
          1,
        ),
        q(
          "Demand paging loads pages:",
          [
            "All at start",
            "Only when needed",
            "In fixed batches",
            "From cache first",
          ],
          1,
        ),
        q(
          "Working set of a process is:",
          [
            "All pages ever used",
            "Pages currently in use",
            "Pages on disk",
            "Stack pages only",
          ],
          1,
        ),
        q(
          "Swapping moves processes between:",
          [
            "RAM and disk",
            "Cache and RAM",
            "CPU and RAM",
            "Registers and cache",
          ],
          0,
        ),
        q(
          "Optimal page replacement requires:",
          [
            "Knowledge of future references",
            "LRU history",
            "FIFO order",
            "Random selection",
          ],
          0,
        ),
      ],
      subsections: [
        sub(
          "m1p3s1",
          "Paging & Segmentation",
          "Paging divides logical memory into fixed-size pages and physical memory into frames — eliminating external fragmentation. Segmentation divides memory into variable-size logical segments (code, stack, data) matching programmer view. Paging causes internal fragmentation; segmentation causes external fragmentation.",
        ),
        sub(
          "m1p3s2",
          "Virtual Memory & Page Replacement",
          "Virtual memory lets processes use more address space than physical RAM by storing unused pages on disk. Page faults trigger page loading. Replacement algorithms — FIFO (evict oldest), LRU (evict least recently used), Optimal (evict page used farthest in future) — manage which pages stay in RAM.",
        ),
        sub(
          "m1p3s3",
          "Deadlocks",
          "A deadlock occurs when processes hold resources and wait for others in a circular chain. The four Coffman conditions: mutual exclusion, hold and wait, no preemption, circular wait. Prevention breaks one condition; avoidance uses Banker's algorithm; detection finds cycles in the resource allocation graph.",
        ),
      ],
    },
    {
      id: "cs-os-p4",
      title: "Part 4: File Systems",
      description: "File allocation, directory structure, disk scheduling.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "File systems organize persistent data on disk using allocation tables and directory hierarchies.",
      docs: [
        {
          label: "File Systems – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/file-systems-in-operating-system/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Contiguous allocation suffers from:",
          [
            "Internal fragmentation",
            "External fragmentation",
            "No fragmentation",
            "Page faults",
          ],
          1,
        ),
        q(
          "FAT stands for:",
          [
            "File Allocation Table",
            "Fast Access Tree",
            "Fragment Addressing Technique",
            "File Attribute Tag",
          ],
          0,
        ),
        q(
          "Inode stores:",
          ["File data", "File metadata", "Directory names", "User passwords"],
          1,
        ),
        q(
          "SSTF disk scheduling picks:",
          [
            "Nearest track first",
            "First request first",
            "Farthest track first",
            "Random track",
          ],
          0,
        ),
        q(
          "SCAN algorithm moves the disk arm:",
          [
            "Randomly",
            "In one direction then reverses",
            "Always inward",
            "Skipping alternate tracks",
          ],
          1,
        ),
        q(
          "Journaling in file systems provides:",
          ["Faster writes", "Crash recovery", "Encryption", "Compression"],
          1,
        ),
        q(
          "Which allocation avoids external fragmentation?",
          ["Contiguous", "Linked", "Indexed", "None"],
          1,
        ),
        q(
          "Directory is a:",
          [
            "Special file storing file metadata/names",
            "Process",
            "Memory region",
            "CPU instruction",
          ],
          0,
        ),
        q(
          "Absolute path starts from:",
          [
            "Current directory",
            "Root directory",
            "Home directory",
            "Any directory",
          ],
          1,
        ),
        q(
          "Hard link:",
          [
            "Points to another link",
            "Points directly to inode",
            "Requires same filesystem",
            "Cannot be deleted",
          ],
          1,
        ),
        q(
          "Symbolic link:",
          [
            "Points to inode",
            "Points to filename/path",
            "Is always relative",
            "Cannot cross filesystems",
          ],
          1,
        ),
        q(
          "RAID 1 provides:",
          [
            "Striping for speed",
            "Mirroring for redundancy",
            "No redundancy",
            "Parity only",
          ],
          1,
        ),
        q(
          "Disk seek time is:",
          [
            "Time to read data",
            "Time to move head to correct track",
            "Rotational delay",
            "Transfer time",
          ],
          1,
        ),
        q(
          "Superblock stores:",
          [
            "User files",
            "File system metadata",
            "Process list",
            "Network config",
          ],
          1,
        ),
        q(
          "Mounting a filesystem:",
          [
            "Formats the disk",
            "Makes it accessible in directory tree",
            "Creates a partition",
            "Backs up data",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "m1p4s1",
          "File Allocation Methods",
          "Contiguous allocation stores files in sequential disk blocks — fast access but causes external fragmentation. Linked allocation chains blocks via pointers — no fragmentation but slow random access. Indexed allocation stores all block pointers in an index block — combining advantages of both but with overhead.",
        ),
        sub(
          "m1p4s2",
          "Directory Structure & Inodes",
          "Directories are special files mapping names to inodes. An inode stores file metadata (permissions, size, timestamps, block pointers) but not the filename. Unix uses a multi-level tree hierarchy; each file has exactly one inode, but hard links can give it multiple directory entries.",
        ),
        sub(
          "m1p4s3",
          "Disk Scheduling Algorithms",
          "FCFS serves requests in order — simple but inefficient. SSTF (Shortest Seek Time First) picks the nearest track — reduces seeks but may starve far requests. SCAN moves the arm in one direction serving all requests, then reverses — like an elevator, fair and efficient.",
        ),
      ],
    },
  ],
  moduleQuiz: [
    q(
      "Which scheduling algorithm suffers from the convoy effect?",
      ["SJF", "Round Robin", "FCFS", "Priority"],
      2,
    ),
    q(
      "A page fault means:",
      ["CPU error", "Requested page not in RAM", "Disk failure", "TLB miss"],
      1,
    ),
    q(
      "Deadlock requires all four Coffman conditions including:",
      ["Preemption", "Circular wait", "No hold and wait", "Single resource"],
      1,
    ),
    q(
      "Inode stores:",
      ["Filename", "File data", "File metadata", "Directory structure"],
      2,
    ),
    q(
      "Thrashing results from:",
      [
        "Too much CPU power",
        "Excessive paging due to low RAM",
        "High priority scheduling",
        "Disk errors",
      ],
      1,
    ),
  ],
  moduleTest: noTest,
};

// ─── Module 2: DBMS ───────────────────────────────────────────────────────────

const module2: CModule = {
  id: "cs-dbms",
  title: "Module 2: DBMS",
  outcome: "Design relational databases and write SQL queries.",
  isLocked: true,
  parts: [
    {
      id: "cs-dbms-p1",
      title: "Part 1: ER Model & Relational Algebra",
      description: "Entity-relationship model, relational operators.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "The ER model visually represents real-world data as entities, attributes, and relationships.",
      docs: [
        {
          label: "DBMS ER Model – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/introduction-of-er-model/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "In an ER diagram, an entity is represented by:",
          ["Diamond", "Ellipse", "Rectangle", "Line"],
          2,
        ),
        q(
          "A weak entity:",
          [
            "Has a primary key",
            "Depends on another entity",
            "Cannot have attributes",
            "Has no relationships",
          ],
          1,
        ),
        q(
          "Projection (π) in relational algebra:",
          [
            "Selects rows",
            "Selects columns",
            "Joins tables",
            "Renames attributes",
          ],
          1,
        ),
        q(
          "Selection (σ) in relational algebra:",
          [
            "Selects columns",
            "Renames relations",
            "Selects rows based on condition",
            "Performs join",
          ],
          2,
        ),
        q(
          "Cardinality 1:N means:",
          ["One to one", "One to many", "Many to many", "Zero to one"],
          1,
        ),
        q(
          "A composite attribute can be:",
          [
            "Divided into smaller attributes",
            "Multi-valued",
            "Derived",
            "Always a key",
          ],
          0,
        ),
        q(
          "Natural join combines tables on:",
          [
            "Any condition",
            "Common attributes",
            "Primary key only",
            "Foreign key only",
          ],
          1,
        ),
        q(
          "Cartesian product of R(2 tuples) and S(3 tuples) has:",
          ["5 tuples", "6 tuples", "2 tuples", "1 tuple"],
          1,
        ),
        q(
          "A multivalued attribute in ER:",
          [
            "Has one value",
            "Can have multiple values for one entity",
            "Is always a key",
            "Cannot be represented",
          ],
          1,
        ),
        q(
          "Degree of a relation means:",
          [
            "Number of tuples",
            "Number of attributes",
            "Number of keys",
            "Number of constraints",
          ],
          1,
        ),
        q(
          "Candidate key:",
          [
            "Can have null values",
            "Must be unique and minimal",
            "Is always a single attribute",
            "Must reference another table",
          ],
          1,
        ),
        q(
          "Super key is:",
          [
            "A minimal unique identifier",
            "Any set of attributes uniquely identifying a tuple",
            "Always a single attribute",
            "A foreign key",
          ],
          1,
        ),
        q(
          "Division in relational algebra:",
          [
            "Adds tables",
            "Finds tuples in R associated with all tuples in S",
            "Removes duplicates",
            "Computes difference",
          ],
          1,
        ),
        q(
          "Aggregation in ER models:",
          [
            "Treats relationships as entities",
            "Removes weak entities",
            "Adds foreign keys",
            "Normalizes tables",
          ],
          0,
        ),
        q(
          "Relational algebra is:",
          [
            "Non-procedural",
            "Procedural query language",
            "A file format",
            "An SQL variant",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-dbms-p1s1",
          "ER Model Basics",
          "The Entity-Relationship model describes data using entities (real-world objects), attributes (properties), and relationships (associations). Entities are rectangles, relationships are diamonds, and attributes are ellipses. Weak entities depend on strong entities and are shown with double rectangles.",
        ),
        sub(
          "cs-dbms-p1s2",
          "Relational Algebra",
          "Relational algebra provides operators to query relations. Selection (σ) filters rows, Projection (π) selects columns, Union combines two compatible relations, Set Difference removes common tuples, and Natural Join combines tables on common attributes. These operators form the foundation of SQL execution plans.",
        ),
        sub(
          "cs-dbms-p1s3",
          "Keys and Constraints",
          "A super key uniquely identifies tuples. A candidate key is a minimal super key. The primary key is the chosen candidate key. A foreign key in one relation references the primary key of another, enforcing referential integrity. These constraints maintain data consistency across tables.",
        ),
      ],
    },
    {
      id: "cs-dbms-p2",
      title: "Part 2: SQL & Normalization",
      description: "SQL queries, joins, normalization forms, ACID properties.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "SQL is the standard language for relational databases; normalization reduces redundancy.",
      docs: [
        { label: "SQL – W3Schools", url: "https://www.w3schools.com/sql/" },
      ] as DocLink[],
      partQuiz: [
        q(
          "1NF requires:",
          [
            "No partial dependencies",
            "Atomic values in each column",
            "No transitive dependencies",
            "All keys declared",
          ],
          1,
        ),
        q(
          "2NF requires:",
          [
            "1NF + no partial dependencies",
            "1NF + no transitive dependencies",
            "BCNF + 1NF",
            "No multi-valued attributes",
          ],
          0,
        ),
        q(
          "3NF removes:",
          [
            "Partial dependencies",
            "Transitive dependencies",
            "Multi-valued dependencies",
            "Join dependencies",
          ],
          1,
        ),
        q("BCNF is stricter than:", ["1NF", "2NF", "3NF", "4NF"], 2),
        q(
          "ACID's 'A' stands for:",
          ["Availability", "Atomicity", "Authorization", "Aggregation"],
          1,
        ),
        q(
          "Isolation in ACID means:",
          [
            "Transactions are permanent",
            "Transactions are all-or-nothing",
            "Concurrent transactions don't interfere",
            "Data is consistent",
          ],
          2,
        ),
        q(
          "SQL SELECT with WHERE clause performs:",
          ["Projection", "Selection", "Join", "Aggregation"],
          1,
        ),
        q(
          "GROUP BY is used with:",
          [
            "WHERE only",
            "Aggregate functions",
            "ORDER BY only",
            "Subqueries only",
          ],
          1,
        ),
        q(
          "INNER JOIN returns:",
          [
            "All rows from left table",
            "All rows from right table",
            "Only matching rows",
            "All rows from both",
          ],
          2,
        ),
        q(
          "LEFT JOIN returns:",
          [
            "Only matching rows",
            "All left rows + matching right",
            "All right rows + matching left",
            "All rows",
          ],
          1,
        ),
        q(
          "PRIMARY KEY constraint:",
          [
            "Allows nulls",
            "Must be unique and not null",
            "Can have duplicates",
            "References another table",
          ],
          1,
        ),
        q(
          "Dirty read occurs when:",
          [
            "Transaction reads committed data",
            "Transaction reads uncommitted data of another",
            "Two transactions deadlock",
            "Index is missing",
          ],
          1,
        ),
        q(
          "Functional dependency X→Y means:",
          [
            "Y determines X",
            "X determines Y",
            "X and Y are equal",
            "X and Y are independent",
          ],
          1,
        ),
        q(
          "Denormalization:",
          [
            "Adds normal forms",
            "Intentionally introduces redundancy for performance",
            "Removes foreign keys",
            "Splits tables further",
          ],
          1,
        ),
        q(
          "A view in SQL is:",
          [
            "A stored procedure",
            "A virtual table based on a query",
            "An index",
            "A trigger",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-dbms-p2s1",
          "SQL Fundamentals",
          "SQL (Structured Query Language) uses SELECT to retrieve data, INSERT/UPDATE/DELETE for modifications, and CREATE/DROP for schema management. The WHERE clause filters rows, GROUP BY aggregates data, HAVING filters groups, and ORDER BY sorts results. JOINs combine data from multiple tables.",
        ),
        sub(
          "cs-dbms-p2s2",
          "Normalization",
          "Normalization organizes databases to reduce redundancy and anomalies. 1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependencies on composite key. 3NF: 2NF + no transitive dependencies. BCNF: every determinant is a candidate key. Higher normal forms address multi-valued and join dependencies.",
        ),
        sub(
          "cs-dbms-p2s3",
          "ACID Properties & Indexing",
          "ACID ensures reliable transactions: Atomicity (all or nothing), Consistency (valid state transitions), Isolation (concurrent transactions don't interfere), Durability (committed data persists). Indexes (B-trees, hash) speed up queries by allowing O(log n) lookups instead of O(n) full scans, at the cost of slower writes.",
        ),
      ],
    },
  ],
  moduleQuiz: [
    q(
      "2NF eliminates:",
      [
        "Transitive dependencies",
        "Partial dependencies",
        "Multi-valued dependencies",
        "All redundancy",
      ],
      1,
    ),
    q(
      "ACID atomicity means:",
      [
        "Fast transactions",
        "All-or-nothing execution",
        "Concurrent transactions",
        "Permanent storage",
      ],
      1,
    ),
    q(
      "Selection (σ) in relational algebra selects:",
      ["Columns", "Rows", "Tables", "Keys"],
      1,
    ),
    q(
      "A foreign key enforces:",
      [
        "Entity integrity",
        "Referential integrity",
        "Domain constraints",
        "Atomicity",
      ],
      1,
    ),
    q(
      "INNER JOIN returns:",
      ["All rows", "Only matching rows", "Left table rows", "Right table rows"],
      1,
    ),
  ],
  moduleTest: noTest,
};

// ─── Module 3: Computer Networks ─────────────────────────────────────────────

const module3: CModule = {
  id: "cs-cn",
  title: "Module 3: Computer Networks",
  outcome: "Understand network models, protocols, and security fundamentals.",
  isLocked: true,
  parts: [
    {
      id: "cs-cn-p1",
      title: "Part 1: OSI & TCP/IP Models",
      description: "OSI layers, TCP/IP stack, protocols at each layer.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "The OSI model has 7 layers; TCP/IP has 4 layers mapping to OSI layers.",
      docs: [
        {
          label: "OSI Model – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/layers-of-osi-model/",
        },
      ] as DocLink[],
      partQuiz: [
        q("OSI model has how many layers?", ["4", "5", "6", "7"], 3),
        q(
          "Which OSI layer handles routing?",
          ["Data Link", "Network", "Transport", "Session"],
          1,
        ),
        q(
          "TCP operates at which layer?",
          ["Network", "Transport", "Application", "Data Link"],
          1,
        ),
        q(
          "HTTP operates at which layer?",
          ["Transport", "Session", "Presentation", "Application"],
          3,
        ),
        q(
          "MAC address is used at:",
          [
            "Network layer",
            "Data Link layer",
            "Transport layer",
            "Physical layer",
          ],
          1,
        ),
        q(
          "IP address is used at:",
          [
            "Data Link layer",
            "Transport layer",
            "Network layer",
            "Session layer",
          ],
          2,
        ),
        q(
          "DNS resolves:",
          [
            "IP to MAC",
            "Domain name to IP",
            "IP to hostname",
            "Port to protocol",
          ],
          1,
        ),
        q(
          "TCP vs UDP: TCP is:",
          [
            "Connectionless and faster",
            "Connection-oriented and reliable",
            "Same as UDP",
            "Used only for video",
          ],
          1,
        ),
        q("Port number 80 is for:", ["HTTPS", "FTP", "HTTP", "SSH"], 2),
        q(
          "Three-way handshake uses:",
          [
            "SYN, SYN-ACK, ACK",
            "ACK, SYN, FIN",
            "RST, SYN, ACK",
            "FIN, ACK, SYN",
          ],
          0,
        ),
        q(
          "ARP resolves:",
          [
            "IP to MAC address",
            "MAC to IP address",
            "Domain to IP",
            "Port to IP",
          ],
          0,
        ),
        q(
          "Subnetting creates:",
          [
            "Larger networks",
            "Smaller subnetworks from a larger one",
            "Faster routing",
            "Encryption",
          ],
          1,
        ),
        q(
          "DHCP automatically assigns:",
          ["MAC addresses", "IP addresses", "DNS records", "Routing tables"],
          1,
        ),
        q(
          "Which is a connection-oriented protocol?",
          ["UDP", "IP", "TCP", "ICMP"],
          2,
        ),
        q(
          "The physical layer deals with:",
          [
            "Logical addressing",
            "Raw bit transmission over medium",
            "Error correction",
            "Encryption",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-cn-p1s1",
          "OSI Model Layers",
          "The 7-layer OSI model: Physical (bits on wire), Data Link (frames, MAC addresses, error detection), Network (IP routing), Transport (TCP/UDP, end-to-end delivery), Session (managing connections), Presentation (encryption, encoding), Application (HTTP, FTP, DNS). Each layer serves the layer above and is served by the layer below.",
        ),
        sub(
          "cs-cn-p1s2",
          "TCP/IP Stack",
          "The TCP/IP model has 4 layers: Network Access (OSI Physical+DataLink), Internet (IP, ICMP), Transport (TCP, UDP), Application (HTTP, DNS, FTP). TCP provides reliable, ordered delivery with connection establishment (3-way handshake: SYN→SYN-ACK→ACK) and flow control. UDP is connectionless and faster but unreliable.",
        ),
        sub(
          "cs-cn-p1s3",
          "HTTP, DNS & Routing",
          "HTTP (port 80) and HTTPS (port 443) are application-layer protocols for web communication. DNS translates domain names to IP addresses using a hierarchy of resolvers. Routing protocols like RIP (distance-vector) and OSPF (link-state) determine optimal paths through the network.",
        ),
      ],
    },
    {
      id: "cs-cn-p2",
      title: "Part 2: Subnetting & Security",
      description: "IP addressing, subnetting, CIDR, network security basics.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "Subnetting divides networks; security protocols protect data in transit.",
      docs: [
        {
          label: "Subnetting – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/introduction-to-subnetting/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Class C IP range is:",
          ["0-127", "128-191", "192-223", "224-239"],
          2,
        ),
        q(
          "/24 subnet mask is:",
          ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
          2,
        ),
        q("A /24 network has how many hosts?", ["256", "254", "512", "128"], 1),
        q(
          "SSL/TLS operates at:",
          [
            "Transport layer",
            "Application layer",
            "Network layer",
            "Between Transport and Application",
          ],
          3,
        ),
        q(
          "A firewall filters based on:",
          [
            "MAC addresses only",
            "IP/port rules and packet inspection",
            "DNS names only",
            "Physical cables",
          ],
          1,
        ),
        q(
          "VPN provides:",
          [
            "Faster internet",
            "Encrypted tunnel over public network",
            "Static IP assignment",
            "Wireless access",
          ],
          1,
        ),
        q(
          "HTTPS uses:",
          ["Plaintext", "SSL/TLS encryption", "Only authentication", "UDP"],
          1,
        ),
        q(
          "DoS attack targets:",
          [
            "Authentication",
            "Availability of a service",
            "Data confidentiality",
            "Integrity",
          ],
          1,
        ),
        q(
          "Symmetric encryption uses:",
          [
            "Two different keys",
            "Same key for encryption and decryption",
            "No keys",
            "Public key only",
          ],
          1,
        ),
        q(
          "RSA is:",
          [
            "Symmetric",
            "Asymmetric encryption",
            "Hashing algorithm",
            "Routing protocol",
          ],
          1,
        ),
        q(
          "Private IP 192.168.x.x is:",
          [
            "Routable on internet",
            "Non-routable, local only",
            "Reserved for DNS",
            "Used by ISPs",
          ],
          1,
        ),
        q(
          "NAT translates:",
          [
            "MAC to IP",
            "Private IPs to public IP",
            "Ports to IPs",
            "Domains to IPs",
          ],
          1,
        ),
        q(
          "CIDR notation /20 means:",
          ["20 host bits", "20 network bits", "20 total IPs", "20 subnets"],
          1,
        ),
        q(
          "MITM attack means:",
          [
            "Malware on server",
            "Attacker intercepts communication",
            "DDoS variant",
            "SQL injection type",
          ],
          1,
        ),
        q(
          "Loopback address is:",
          ["127.0.0.1", "192.168.0.1", "10.0.0.1", "0.0.0.0"],
          0,
        ),
      ],
      subsections: [
        sub(
          "cs-cn-p2s1",
          "IP Addressing & Subnetting",
          "IPv4 uses 32-bit addresses in dotted decimal (e.g., 192.168.1.1). CIDR notation /n means n network bits. A /24 has 256 addresses (254 usable). Subnetting divides a network into smaller blocks for efficiency and security. Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 are not routable on the internet.",
        ),
        sub(
          "cs-cn-p2s2",
          "Network Security Basics",
          "SSL/TLS encrypts data between browser and server — HTTPS uses TLS. Firewalls filter traffic by IP/port rules. VPNs create encrypted tunnels over public networks. Common attacks: DoS/DDoS (overwhelms service), MITM (intercepts traffic), phishing (social engineering). Symmetric encryption (AES) is fast; asymmetric (RSA) enables key exchange.",
        ),
        sub(
          "cs-cn-p2s3",
          "Routing Protocols",
          "Distance-vector protocols (RIP) share full routing tables with neighbors periodically — simple but slow to converge. Link-state protocols (OSPF) flood topology info to all routers then compute shortest paths with Dijkstra's algorithm — fast convergence. BGP is the exterior gateway protocol routing traffic between autonomous systems on the internet.",
        ),
      ],
    },
  ],
  moduleQuiz: [
    q(
      "TCP three-way handshake sequence:",
      ["ACK, SYN, FIN", "SYN, SYN-ACK, ACK", "FIN, ACK, RST", "SYN, ACK, FIN"],
      1,
    ),
    q(
      "DNS primarily converts:",
      [
        "IP to MAC",
        "Domain names to IP addresses",
        "Ports to services",
        "IPs to hostnames",
      ],
      1,
    ),
    q("/24 subnet has how many usable hosts?", ["256", "254", "512", "255"], 1),
    q("HTTPS uses port:", ["80", "21", "443", "22"], 2),
    q("OSI Network layer protocol:", ["TCP", "HTTP", "IP", "Ethernet"], 2),
  ],
  moduleTest: noTest,
};

// ─── Module 4: Theory of Computation ─────────────────────────────────────────

const module4: CModule = {
  id: "cs-toc",
  title: "Module 4: Theory of Computation",
  outcome: "Understand automata, formal languages, and computability.",
  isLocked: true,
  parts: [
    {
      id: "cs-toc-p1",
      title: "Part 1: Finite Automata & Regular Languages",
      description: "DFA, NFA, regular expressions, and closure properties.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "Finite automata model computation with finite memory; they recognize regular languages.",
      docs: [
        {
          label: "Automata Theory – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/introduction-of-finite-automata/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "DFA stands for:",
          [
            "Dynamic Finite Automata",
            "Deterministic Finite Automaton",
            "Discrete Function Algorithm",
            "Direct Flow Abstraction",
          ],
          1,
        ),
        q(
          "DFA differs from NFA in that DFA:",
          [
            "Has ε-transitions",
            "Has exactly one transition per symbol per state",
            "Can be nondeterministic",
            "Accepts more languages",
          ],
          1,
        ),
        q(
          "NFA and DFA accept:",
          [
            "Different language classes",
            "The same class (regular languages)",
            "Context-free languages",
            "Turing-computable languages",
          ],
          1,
        ),
        q(
          "Regular expression a* means:",
          [
            "Exactly one a",
            "Zero or more a's",
            "One or more a's",
            "Exactly two a's",
          ],
          1,
        ),
        q(
          "Kleene star (*) denotes:",
          ["Concatenation", "Zero or more repetitions", "Union", "Complement"],
          1,
        ),
        q(
          "Pumping lemma is used to:",
          [
            "Prove a language is regular",
            "Prove a language is NOT regular",
            "Construct DFA",
            "Convert NFA to DFA",
          ],
          1,
        ),
        q(
          "The language {aⁿbⁿ | n≥0} is:",
          [
            "Regular",
            "Context-free but not regular",
            "Context-sensitive",
            "Undecidable",
          ],
          1,
        ),
        q(
          "Minimization of DFA:",
          [
            "Adds states",
            "Removes equivalent states",
            "Converts to NFA",
            "Adds transitions",
          ],
          1,
        ),
        q(
          "Union of two regular languages is:",
          ["Context-free", "Regular", "Undecidable", "Context-sensitive"],
          1,
        ),
        q(
          "ε-NFA includes:",
          [
            "No transitions",
            "Transitions on empty string",
            "Only deterministic transitions",
            "Final states only",
          ],
          1,
        ),
        q(
          "A dead/trap state in DFA:",
          [
            "Accepts all input",
            "Rejects all further input",
            "Is always the start state",
            "Does not exist in DFA",
          ],
          1,
        ),
        q(
          "Concatenation of two regular languages:",
          [
            "May not be regular",
            "Is always regular",
            "Is context-free",
            "Depends on alphabet",
          ],
          1,
        ),
        q(
          "GNFA is used in:",
          [
            "NFA minimization",
            "Converting DFA to regular expression",
            "Parsing",
            "Turing machine construction",
          ],
          1,
        ),
        q(
          "Which is NOT a regular language?",
          [
            "Even-length strings",
            "Strings ending in 0",
            "{aⁿbⁿ}",
            "Strings containing 'ab'",
          ],
          2,
        ),
        q(
          "Subset construction converts:",
          ["DFA to NFA", "NFA to DFA", "NFA to PDA", "DFA to TM"],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-toc-p1s1",
          "DFA & NFA",
          "A Deterministic Finite Automaton (DFA) has exactly one transition per input symbol per state — no ambiguity. An NFA allows multiple transitions per symbol and ε-transitions (on empty input). Both recognize exactly the class of regular languages. Every NFA can be converted to an equivalent DFA via subset construction, potentially exponentially increasing states.",
        ),
        sub(
          "cs-toc-p1s2",
          "Regular Expressions",
          "Regular expressions describe regular languages using three operations: union (|), concatenation (juxtaposition), and Kleene star (*) for zero or more repetitions. Example: (a|b)*abb describes strings ending in abb over {a,b}. Every regular expression has an equivalent NFA (Thompson's construction) and vice versa.",
        ),
        sub(
          "cs-toc-p1s3",
          "Pumping Lemma",
          "The pumping lemma proves a language is NOT regular by contradiction. For any regular language L, there exists pumping length p such that any string s in L with |s|≥p can be split into xyz where |y|≥1, |xy|≤p, and all pumped versions xyⁿz are in L. If pumping fails, L is not regular.",
        ),
      ],
    },
    {
      id: "cs-toc-p2",
      title: "Part 2: CFG, Turing Machines & Decidability",
      description:
        "Context-free grammars, PDAs, Turing machines, halting problem.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "CFGs describe programming language syntax; TMs define the limits of computation.",
      docs: [
        {
          label: "Turing Machines – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/turing-machine-in-toc/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "CFG stands for:",
          [
            "Computer Function Grammar",
            "Context-Free Grammar",
            "Conditional Flow Graph",
            "Control Flag Group",
          ],
          1,
        ),
        q(
          "CFG productions are of form:",
          [
            "A → α where A is terminal",
            "A → α where A is non-terminal",
            "Only S → ε",
            "Only unit productions",
          ],
          1,
        ),
        q("PDA extends NFA with:", ["Queue", "Stack", "Tape", "Tree"], 1),
        q(
          "CFL is accepted by:",
          ["DFA", "NFA", "PDA", "Turing Machine only"],
          2,
        ),
        q(
          "Chomsky Normal Form has productions:",
          ["A→BC or A→a", "A→aBc", "S→ε only", "Any form"],
          0,
        ),
        q(
          "Turing machine has:",
          [
            "Finite tape",
            "Infinite tape read/write",
            "Stack only",
            "Queue only",
          ],
          1,
        ),
        q(
          "The halting problem is:",
          [
            "Decidable",
            "Undecidable",
            "Semi-decidable only for TMs",
            "Decidable for CFLs",
          ],
          1,
        ),
        q(
          "Church-Turing thesis states:",
          [
            "All algorithms can be written in C",
            "Anything computable can be computed by a TM",
            "All languages are decidable",
            "NFA equals DFA",
          ],
          1,
        ),
        q(
          "A language is decidable if:",
          [
            "TM accepts it",
            "TM accepts and halts on all inputs",
            "NFA accepts it",
            "PDA accepts it",
          ],
          1,
        ),
        q(
          "CFL is closed under:",
          [
            "Intersection",
            "Union",
            "Complement",
            "Both union and intersection",
          ],
          1,
        ),
        q(
          "Ambiguous grammar produces:",
          [
            "Single parse tree",
            "Multiple parse trees for same string",
            "No parse trees",
            "Only left derivations",
          ],
          1,
        ),
        q(
          "LL parsers are:",
          ["Bottom-up", "Top-down", "Random", "Table-driven bottom-up"],
          1,
        ),
        q(
          "P class contains problems solvable in:",
          [
            "Exponential time",
            "Polynomial time",
            "Linear time only",
            "Logarithmic time",
          ],
          1,
        ),
        q(
          "NP-complete problems are:",
          [
            "Easy to verify and as hard as any NP problem",
            "Polynomial time solvable",
            "Undecidable",
            "Regular language problems",
          ],
          0,
        ),
        q(
          "Reductions prove undecidability by:",
          [
            "Solving the problem directly",
            "Reducing known undecidable to new problem",
            "Building a DFA",
            "Using pumping lemma",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-toc-p2s1",
          "Context-Free Grammars & PDAs",
          "A CFG consists of non-terminals, terminals, productions, and start symbol. Productions replace non-terminals. CFGs describe nested structures like balanced parentheses and programming language syntax. Pushdown Automata (PDAs) recognize CFLs using a stack to handle nesting. Every CFG has an equivalent PDA.",
        ),
        sub(
          "cs-toc-p2s2",
          "Turing Machines",
          "A Turing Machine has an infinite read/write tape, a head, and a finite state control. It can simulate any algorithm — the Church-Turing thesis states TMs capture everything computable. TMs decide recursive (decidable) languages and accept recursively enumerable languages. The halting problem — does TM M halt on input w? — is undecidable by diagonalization.",
        ),
        sub(
          "cs-toc-p2s3",
          "Complexity Classes P and NP",
          "P contains problems solvable in polynomial time. NP contains problems verifiable in polynomial time. NP-complete problems are the hardest in NP — solving one in polynomial time solves all of NP. No one has proved P=NP or P≠NP. Famous NP-complete problems: SAT, 3-coloring, TSP, knapsack.",
        ),
      ],
    },
  ],
  moduleQuiz: [
    q(
      "DFA and NFA both accept:",
      [
        "Context-free languages",
        "Regular languages only",
        "All languages",
        "Context-sensitive languages",
      ],
      1,
    ),
    q("Halting problem is:", ["Decidable", "Undecidable", "In P", "In NP"], 1),
    q(
      "PDA is an NFA extended with:",
      ["Queue", "Stack", "Tape", "Priority queue"],
      1,
    ),
    q(
      "Pumping lemma proves:",
      [
        "Language is regular",
        "Language is NOT regular",
        "DFA minimization",
        "CFG ambiguity",
      ],
      1,
    ),
    q(
      "NP-complete means:",
      ["Polynomial solvable", "Hardest problems in NP", "Undecidable", "In P"],
      1,
    ),
  ],
  moduleTest: noTest,
};

// ─── Module 5: Compiler Design ────────────────────────────────────────────────

const module5: CModule = {
  id: "cs-cd",
  title: "Module 5: Compiler Design",
  outcome: "Understand how compilers translate source code to machine code.",
  isLocked: true,
  parts: [
    {
      id: "cs-cd-p1",
      title: "Part 1: Lexical & Syntax Analysis",
      description: "Tokens, DFA-based lexers, grammars, LL and LR parsing.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "The front end of a compiler reads source code and produces a parse tree.",
      docs: [
        {
          label: "Compiler Design – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/compiler-design-tutorial/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Lexical analysis produces:",
          ["Parse tree", "Token stream", "Machine code", "Symbol table"],
          1,
        ),
        q(
          "A lexeme is:",
          [
            "A token category",
            "The actual string matched by a pattern",
            "A grammar rule",
            "An AST node",
          ],
          1,
        ),
        q(
          "First set of a grammar symbol contains:",
          [
            "Terminals derivable first in production",
            "Follow symbols",
            "All non-terminals",
            "Null productions only",
          ],
          0,
        ),
        q(
          "LL(1) parser reads input:",
          [
            "Right to left",
            "Left to right, leftmost derivation",
            "Bottom-up",
            "Right to left, rightmost",
          ],
          1,
        ),
        q(
          "Shift-reduce conflict in LR parsing:",
          [
            "Always an error",
            "Indicates ambiguous grammar or parsing table conflict",
            "Means grammar is correct",
            "Occurs only in LL parsers",
          ],
          1,
        ),
        q(
          "FIRST(A) includes ε if:",
          [
            "A is a terminal",
            "A can derive ε",
            "A is the start symbol",
            "A has no productions",
          ],
          1,
        ),
        q(
          "A scanner (lexer) is typically implemented as:",
          ["PDA", "DFA/NFA", "Turing Machine", "Stack machine"],
          1,
        ),
        q(
          "CFGs are used for:",
          [
            "Lexical analysis",
            "Syntax analysis",
            "Code generation",
            "Register allocation",
          ],
          1,
        ),
        q(
          "LR parsers are:",
          ["Top-down", "Bottom-up", "Random", "LL variants"],
          1,
        ),
        q(
          "Ambiguous grammar:",
          [
            "Has unique parse tree for every string",
            "Has multiple parse trees for some string",
            "Cannot generate any string",
            "Is always context-sensitive",
          ],
          1,
        ),
        q(
          "YACC/Bison generates:",
          ["Lexers", "LALR parsers", "Code generators", "Linkers"],
          1,
        ),
        q(
          "Lex/Flex generates:",
          [
            "Parsers",
            "Lexers from regular expressions",
            "Code optimizers",
            "Assemblers",
          ],
          1,
        ),
        q(
          "Parse tree leaf nodes are:",
          ["Non-terminals", "Terminals (tokens)", "Both", "Empty nodes"],
          1,
        ),
        q(
          "Left recursion in grammar causes problems for:",
          [
            "LR parsers",
            "LL parsers",
            "Shift-reduce parsers",
            "All parsers equally",
          ],
          1,
        ),
        q(
          "FOLLOW set is used in:",
          [
            "LL(1) parsing tables",
            "Code generation",
            "Register allocation",
            "Lexical analysis",
          ],
          0,
        ),
      ],
      subsections: [
        sub(
          "cs-cd-p1s1",
          "Lexical Analysis",
          "The lexer (scanner) reads source code characters and groups them into tokens — the smallest meaningful units (keywords, identifiers, literals, operators, delimiters). It is implemented as a DFA recognizing patterns described by regular expressions. Tools like Lex/Flex automatically generate lexers from regex specifications.",
        ),
        sub(
          "cs-cd-p1s2",
          "LL Parsing (Top-Down)",
          "LL parsers read input Left-to-right and produce Leftmost derivations. LL(1) uses one lookahead token and a predictive parsing table built from FIRST and FOLLOW sets. Recursive descent parsing implements each non-terminal as a function. LL parsers cannot handle left-recursive or ambiguous grammars directly.",
        ),
        sub(
          "cs-cd-p1s3",
          "LR Parsing (Bottom-Up)",
          "LR parsers read Left-to-right producing Rightmost derivations in reverse. They use a stack and action/goto tables. SLR uses FOLLOW sets, LALR merges states with same core items (used by YACC), and CLR is fully canonical. LR parsers handle a wider class of grammars than LL parsers.",
        ),
      ],
    },
    {
      id: "cs-cd-p2",
      title: "Part 2: Semantic Analysis & Code Generation",
      description:
        "Type checking, intermediate code, optimization, code generation.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "The back end translates the AST through intermediate representations to machine code.",
      docs: [
        {
          label: "Code Generation – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/code-generation-in-compiler-design/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Semantic analysis checks:",
          [
            "Spelling of keywords",
            "Type compatibility and scoping rules",
            "Grammar rules",
            "Token order",
          ],
          1,
        ),
        q(
          "Symbol table stores:",
          [
            "Runtime values",
            "Identifiers, types, scope info",
            "Machine instructions",
            "Tokens",
          ],
          1,
        ),
        q(
          "Three-address code uses at most:",
          [
            "1 operand",
            "2 operands",
            "3 operands per instruction",
            "4 operands",
          ],
          2,
        ),
        q(
          "DAG in optimization detects:",
          [
            "Dead code",
            "Common subexpressions",
            "Register conflicts",
            "Loop depth",
          ],
          1,
        ),
        q(
          "Loop unrolling is a:",
          [
            "Parsing technique",
            "Code optimization reducing loop overhead",
            "Register allocation method",
            "Linking step",
          ],
          1,
        ),
        q(
          "Constant folding:",
          [
            "Folds multiple loops",
            "Evaluates constant expressions at compile time",
            "Allocates constants to registers",
            "Removes dead code",
          ],
          1,
        ),
        q(
          "Dead code elimination removes:",
          [
            "Unreachable or unused code",
            "Loop bodies",
            "Function calls",
            "All comments",
          ],
          0,
        ),
        q(
          "Register allocation problem is equivalent to:",
          ["Graph coloring", "Sorting", "DFA minimization", "CFL parsing"],
          0,
        ),
        q(
          "Backpatching handles:",
          [
            "Forward references in jumps",
            "Register spills",
            "Type coercions",
            "Loop bounds",
          ],
          0,
        ),
        q(
          "SSA form means:",
          [
            "Single static assignment — each variable assigned once",
            "Stack-based allocation",
            "Sequential statement analysis",
            "Safe scope analysis",
          ],
          0,
        ),
        q(
          "Peephole optimization works on:",
          [
            "Entire program",
            "Small window of instructions",
            "Loop structures only",
            "Data flow graphs",
          ],
          1,
        ),
        q(
          "Code hoisting moves:",
          [
            "Loop-invariant computations outside loops",
            "Code inside loops",
            "Dead code to trash",
            "Constants to registers",
          ],
          0,
        ),
        q(
          "Which is a machine-independent optimization?",
          [
            "Register allocation",
            "Instruction selection",
            "Constant folding",
            "Instruction scheduling",
          ],
          2,
        ),
        q(
          "Intermediate representation (IR) makes compilers:",
          [
            "Language and machine dependent",
            "Language-independent, machine-independent",
            "Faster only",
            "Smaller only",
          ],
          1,
        ),
        q(
          "Target code generation maps IR to:",
          [
            "Source code",
            "Machine/assembly instructions",
            "Parse tree",
            "Symbol table",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-cd-p2s1",
          "Semantic Analysis",
          "Semantic analysis checks meaning beyond syntax: type checking (compatible types in operations), scope resolution (variable declarations visible at use), and control flow (return in all paths). It builds and queries a symbol table storing identifiers, types, and scope levels. Errors here include type mismatches and use of undeclared variables.",
        ),
        sub(
          "cs-cd-p2s2",
          "Intermediate Code & Optimization",
          "Intermediate representations (three-address code, SSA, DAG) decouple the front-end from back-end. Machine-independent optimizations: constant folding, common subexpression elimination (CSE via DAG), dead code elimination, loop-invariant code motion. Machine-dependent: register allocation (graph coloring), instruction scheduling, peephole optimization.",
        ),
        sub(
          "cs-cd-p2s3",
          "Code Generation",
          "The code generator maps IR to target machine instructions, selecting instruction patterns, allocating registers (graph coloring — k-colorable means k registers suffice), and scheduling instructions to minimize pipeline stalls. Spilling moves variables to memory when registers run out. The final output is assembly or machine code.",
        ),
      ],
    },
  ],
  moduleQuiz: [
    q(
      "Lexical analysis produces a:",
      ["Parse tree", "Token stream", "Symbol table", "Machine code"],
      1,
    ),
    q(
      "LL parsers are:",
      [
        "Bottom-up",
        "Top-down",
        "Left-to-right rightmost derivation",
        "LR variants",
      ],
      1,
    ),
    q(
      "Constant folding evaluates:",
      [
        "Constants at runtime",
        "Constant expressions at compile time",
        "Loop bounds",
        "Register usage",
      ],
      1,
    ),
    q(
      "Register allocation is equivalent to:",
      ["Sorting", "Graph coloring", "DFA construction", "CFL parsing"],
      1,
    ),
    q(
      "Symbol table is built during:",
      [
        "Code generation only",
        "Lexical analysis only",
        "Semantic analysis",
        "Linking",
      ],
      2,
    ),
  ],
  moduleTest: noTest,
};

// ─── Module 6: Digital Electronics ───────────────────────────────────────────

const module6: CModule = {
  id: "cs-de",
  title: "Module 6: Digital Electronics",
  outcome: "Design combinational and sequential digital circuits.",
  isLocked: true,
  parts: [
    {
      id: "cs-de-p1",
      title: "Part 1: Logic Gates & Boolean Algebra",
      description: "Logic gates, truth tables, Boolean laws, K-maps.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "Boolean algebra provides the mathematical foundation for digital circuit design.",
      docs: [
        {
          label: "Logic Gates – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/logic-gates-in-digital-electronics/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "AND gate output is 1 when:",
          [
            "Any input is 1",
            "All inputs are 1",
            "Any input is 0",
            "No inputs are 1",
          ],
          1,
        ),
        q(
          "OR gate output is 0 when:",
          [
            "All inputs are 1",
            "Any input is 1",
            "All inputs are 0",
            "Any input is 0",
          ],
          2,
        ),
        q(
          "NOT gate output:",
          ["Same as input", "Complement of input", "Always 1", "Always 0"],
          1,
        ),
        q(
          "NAND is NOT AND — universal gate because:",
          [
            "It's simplest",
            "Any logic circuit can be built from it",
            "Fastest gate",
            "Uses least power",
          ],
          1,
        ),
        q(
          "XOR output is 1 when:",
          [
            "Both inputs same",
            "Inputs differ",
            "Both inputs 0",
            "Both inputs 1",
          ],
          1,
        ),
        q("De Morgan's theorem: (A·B)' =", ["A'·B'", "A'+B'", "A·B", "A+B"], 1),
        q("Boolean identity A + A' =", ["0", "A", "1", "A'"], 2),
        q(
          "K-map is used for:",
          [
            "Circuit simulation",
            "Simplifying Boolean expressions",
            "Timing analysis",
            "Power calculation",
          ],
          1,
        ),
        q("K-map groups must be powers of:", ["3", "2", "5", "10"], 1),
        q(
          "SOP stands for:",
          [
            "Sum of Products",
            "Set of Paths",
            "Sequential Operations Protocol",
            "System Output Program",
          ],
          0,
        ),
        q(
          "POS stands for:",
          [
            "Product of Sums",
            "Process of Sequences",
            "Parallel Operation System",
            "Primary Output Stage",
          ],
          0,
        ),
        q("Boolean A·(A+B) simplifies to:", ["A+B", "A", "B", "AB"], 1),
        q(
          "NOR gate is universal because:",
          [
            "It's complex",
            "Any logic can be built from NOR gates alone",
            "It's fast",
            "It uses CMOS",
          ],
          1,
        ),
        q(
          "XNOR output is 1 when:",
          [
            "Inputs differ",
            "Both inputs same",
            "First input is 1",
            "Second input is 0",
          ],
          1,
        ),
        q(
          "A 3-variable K-map has:",
          ["6 cells", "8 cells", "9 cells", "4 cells"],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-de-p1s1",
          "Logic Gates & Truth Tables",
          "Basic gates: AND (output 1 iff all inputs 1), OR (output 1 if any input 1), NOT (inverts). Derived: NAND = NOT-AND, NOR = NOT-OR, XOR (different inputs → 1), XNOR (same inputs → 1). NAND and NOR are universal gates — any boolean function can be implemented using only NANDs or only NORs.",
        ),
        sub(
          "cs-de-p1s2",
          "Boolean Algebra Laws",
          "Boolean algebra laws: Commutative (A+B=B+A), Associative, Distributive, Identity (A+0=A, A·1=A), Complement (A+A'=1, A·A'=0), Idempotent (A+A=A), Absorption (A+AB=A). De Morgan's: (A·B)'=A'+B' and (A+B)'=A'·B'. These laws allow simplification without K-maps.",
        ),
        sub(
          "cs-de-p1s3",
          "Karnaugh Maps",
          "K-maps provide a visual method for minimizing Boolean expressions. Group adjacent 1-cells in powers of 2 (pairs, quads, octets) — larger groups give simpler terms. SOP (Sum of Products) groups the 1s; POS (Product of Sums) groups the 0s. Don't-care conditions (X) can be included in groups if they help minimize.",
        ),
      ],
    },
    {
      id: "cs-de-p2",
      title: "Part 2: Combinational & Sequential Circuits",
      description: "Mux, demux, adders, flip-flops, counters, registers.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      notes:
        "Combinational circuits depend only on current inputs; sequential circuits have memory (state).",
      docs: [
        {
          label: "Combinational Circuits – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/combinational-circuits-using-decoder/",
        },
      ] as DocLink[],
      partQuiz: [
        q(
          "Multiplexer (MUX) selects:",
          [
            "Multiple outputs from one input",
            "One of many inputs to route to output",
            "Amplifies signals",
            "Stores data",
          ],
          1,
        ),
        q(
          "Demultiplexer routes:",
          [
            "One input to one of many outputs",
            "Many inputs to one output",
            "Stores bits",
            "Compares values",
          ],
          0,
        ),
        q(
          "Half adder computes:",
          [
            "Sum of 3 bits",
            "Sum and carry of 2 bits",
            "Sum only",
            "Carry only",
          ],
          1,
        ),
        q(
          "Full adder computes:",
          [
            "Sum of 2 bits",
            "Sum and carry of 3 bits (including carry-in)",
            "Product of two bits",
            "XOR only",
          ],
          1,
        ),
        q(
          "D flip-flop stores:",
          [
            "The D input on clock edge",
            "Complement of D",
            "Previous state always",
            "XOR of inputs",
          ],
          0,
        ),
        q(
          "SR flip-flop's forbidden state is:",
          ["S=0, R=0", "S=1, R=0", "S=0, R=1", "S=1, R=1"],
          3,
        ),
        q(
          "JK flip-flop in toggle mode has:",
          ["J=0, K=0", "J=0, K=1", "J=1, K=0", "J=1, K=1"],
          3,
        ),
        q(
          "A 3-bit ripple counter counts from:",
          ["0 to 4", "0 to 7", "0 to 8", "1 to 8"],
          1,
        ),
        q(
          "Synchronous counter:",
          [
            "Uses ripple carry",
            "All flip-flops clocked simultaneously",
            "Slower than ripple",
            "Uses fewer gates",
          ],
          1,
        ),
        q(
          "Encoder converts:",
          [
            "Binary to Gray code",
            "Decimal/OCtal to binary",
            "Binary to BCD",
            "Gray to binary",
          ],
          1,
        ),
        q(
          "Decoder converts:",
          [
            "Binary to many outputs (one-hot)",
            "Many inputs to binary",
            "Binary to BCD",
            "Gray code to binary",
          ],
          0,
        ),
        q("4-to-1 MUX needs how many select lines?", ["1", "4", "2", "3"], 2),
        q(
          "Shift register shifts bits:",
          [
            "Left only",
            "Right only",
            "Left or right on each clock",
            "Randomly",
          ],
          2,
        ),
        q(
          "Combinational circuit output depends on:",
          [
            "Current inputs only",
            "Previous state",
            "Clock signal",
            "Both state and inputs",
          ],
          0,
        ),
        q(
          "Sequential circuit uses:",
          [
            "No memory",
            "Flip-flops or latches for state storage",
            "Only combinational logic",
            "ROM only",
          ],
          1,
        ),
      ],
      subsections: [
        sub(
          "cs-de-p2s1",
          "Combinational Circuits",
          "Combinational circuits produce outputs solely from current inputs with no memory. Key circuits: Half adder (XOR for sum, AND for carry), Full adder (adds 3 bits with carry-in), Multiplexer (selects one of n inputs via select lines), Demultiplexer (routes input to one of n outputs), Encoder (n inputs to log₂n bits), Decoder (n bits to 2ⁿ outputs).",
        ),
        sub(
          "cs-de-p2s2",
          "Flip-Flops",
          "Flip-flops are 1-bit memory elements triggered by clock edges. SR (Set-Reset): forbidden state S=R=1. D (Data): captures D on rising clock edge, most common. JK: eliminates forbidden state — J=K=1 toggles output. T (Toggle): output flips when T=1. Flip-flops are the building blocks of registers and counters.",
        ),
        sub(
          "cs-de-p2s3",
          "Counters & Registers",
          "Counters are sequential circuits that cycle through states. Ripple (asynchronous) counters cascade flip-flops — simple but have propagation delay. Synchronous counters clock all flip-flops simultaneously — faster. Shift registers store and shift bits in or out serially (SISO, SIPO, PISO, PIPO). Registers store multi-bit values and are the foundation of CPU register files.",
        ),
      ],
    },
  ],
  moduleQuiz: [
    q("De Morgan's: (A·B)' equals:", ["A·B", "A'+B'", "A'·B'", "A+B"], 1),
    q(
      "XOR gate outputs 1 when:",
      ["Both inputs same", "Inputs differ", "Both 0", "Both 1"],
      1,
    ),
    q(
      "D flip-flop stores:",
      ["Complement of D", "Previous state", "D on clock edge", "XOR of inputs"],
      2,
    ),
    q(
      "4-to-1 MUX needs:",
      ["1 select line", "4 select lines", "2 select lines", "3 select lines"],
      2,
    ),
    q(
      "Synchronous counter advantages over ripple:",
      [
        "Uses fewer flip-flops",
        "No propagation delay",
        "Simpler design",
        "Needs no clock",
      ],
      1,
    ),
  ],
  moduleTest: noTest,
  // Certificate awarded on final module completion
};
(module6 as CModule & { certificate?: boolean }).certificate = true;

// ─── Course Export ────────────────────────────────────────────────────────────

const csSubjectsCourse = {
  id: "cs-subjects",
  title: "CS Subjects",
  description:
    "Master the core computer science subjects tested in university exams and technical interviews: OS, DBMS, Networks, Theory of Computation, Compiler Design, and Digital Electronics.",
  modules: [module0, module1, module2, module3, module4, module5, module6],
};

export default csSubjectsCourse;

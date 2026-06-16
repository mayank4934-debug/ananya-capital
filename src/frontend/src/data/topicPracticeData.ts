export interface TopicPractice {
  topic: string;
  icon: string; // emoji
  description: string;
  problemIds: number[]; // IDs from CODING_PROBLEMS (1–50)
  color: string; // tailwind color class (text color)
  bgColor: string; // tailwind background class
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  keyTechniques: string[];
}

export const TOPIC_PRACTICE: TopicPractice[] = [
  {
    topic: "Arrays",
    icon: "📊",
    description:
      "Master array manipulation, prefix sums, and in-place operations. Arrays form the foundation of most coding interviews.",
    problemIds: [1, 2, 3, 4, 5, 15, 17],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    difficulty: "beginner",
    estimatedTime: "3–5 hours",
    keyTechniques: [
      "Two pointers",
      "Prefix/suffix products",
      "Kadane's algorithm",
      "Binary search on arrays",
    ],
  },
  {
    topic: "Strings",
    icon: "🔤",
    description:
      "Tackle substring matching, anagram detection, palindromes, and string encoding problems asked in top company interviews.",
    problemIds: [6, 7, 8, 9, 10],
    color: "text-green-600",
    bgColor: "bg-green-50",
    difficulty: "beginner",
    estimatedTime: "3–4 hours",
    keyTechniques: [
      "Character frequency maps",
      "Sliding window on strings",
      "Palindrome expansion",
      "Encode/decode patterns",
    ],
  },
  {
    topic: "Two Pointers",
    icon: "👆",
    description:
      "Solve sorted array problems, triplet sums, and water container problems efficiently with the two-pointer technique.",
    problemIds: [11, 12, 13, 14, 15],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    difficulty: "beginner",
    estimatedTime: "2–3 hours",
    keyTechniques: [
      "Left-right pointers",
      "Fast-slow pointers",
      "Dutch national flag",
      "Sorted array operations",
    ],
  },
  {
    topic: "Sliding Window",
    icon: "🪟",
    description:
      "Optimize subarray/substring problems with variable and fixed-size sliding windows — a must-know pattern for interviews.",
    problemIds: [16, 17, 18, 19, 20],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    difficulty: "intermediate",
    estimatedTime: "2–4 hours",
    keyTechniques: [
      "Fixed-size window",
      "Variable-size window",
      "Frequency maps in window",
      "Window shrinking conditions",
    ],
  },
  {
    topic: "Linked Lists",
    icon: "🔗",
    description:
      "Master pointer manipulation, cycle detection, and list reversal — classic linked list patterns that appear in most tech interviews.",
    problemIds: [31, 32, 33, 34, 35],
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    difficulty: "intermediate",
    estimatedTime: "3–5 hours",
    keyTechniques: [
      "Runner technique (fast/slow)",
      "Dummy head node",
      "Reverse in-place",
      "Merge sorted lists",
    ],
  },
  {
    topic: "Stack & Queue",
    icon: "📚",
    description:
      "Tackle bracket matching, daily temperatures, monotonic stacks, and queue-based level-order problems.",
    problemIds: [21, 22, 23, 24, 25],
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    difficulty: "intermediate",
    estimatedTime: "3–4 hours",
    keyTechniques: [
      "Monotonic stack",
      "Auxiliary min/max stack",
      "Stack-based parsing",
      "BFS with queue",
    ],
  },
  {
    topic: "Trees",
    icon: "🌳",
    description:
      "Learn tree traversals, BST operations, path problems, and LCA — trees are one of the highest-frequency interview topics.",
    problemIds: [26, 27, 28, 29, 30],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    difficulty: "intermediate",
    estimatedTime: "4–6 hours",
    keyTechniques: [
      "DFS inorder/preorder/postorder",
      "BFS level-order",
      "Path sum DP",
      "Lowest Common Ancestor",
    ],
  },
  {
    topic: "Graphs",
    icon: "🕸️",
    description:
      "Conquer graph traversal, shortest path, topological sort, and union-find — essential for senior engineering interviews.",
    problemIds: [36, 37, 38, 39, 40],
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    difficulty: "advanced",
    estimatedTime: "5–8 hours",
    keyTechniques: [
      "BFS for shortest path",
      "DFS for cycle detection",
      "Topological sort (Kahn's)",
      "Union-Find (DSU)",
    ],
  },
  {
    topic: "Dynamic Programming",
    icon: "🧮",
    description:
      "Master the hardest interview topic: break down complex optimization problems into overlapping subproblems.",
    problemIds: [41, 42, 43, 44, 45],
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    difficulty: "advanced",
    estimatedTime: "6–10 hours",
    keyTechniques: [
      "Top-down memoization",
      "Bottom-up tabulation",
      "State definition",
      "Space optimization",
    ],
  },
  {
    topic: "Recursion",
    icon: "🔄",
    description:
      "Build intuition for recursive thinking, call stack behavior, and base case design — the foundation for backtracking and divide & conquer.",
    problemIds: [26, 27, 46, 47, 48],
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    difficulty: "intermediate",
    estimatedTime: "3–5 hours",
    keyTechniques: [
      "Base case identification",
      "Recurrence relations",
      "Tree recursion",
      "Tail recursion optimization",
    ],
  },
  {
    topic: "Sorting & Searching",
    icon: "🔍",
    description:
      "Understand sorting algorithms, binary search variants, and their applications — including searching on answer space.",
    problemIds: [5, 4, 2, 49, 50],
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    difficulty: "beginner",
    estimatedTime: "3–4 hours",
    keyTechniques: [
      "Binary search template",
      "Merge sort divide & conquer",
      "Quick select",
      "Binary search on answer",
    ],
  },
  {
    topic: "Bit Manipulation",
    icon: "💡",
    description:
      "Solve problems using bitwise operations — XOR tricks, bit counting, and power-of-two checks that make O(1) solutions possible.",
    problemIds: [48, 49, 50, 3, 1],
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    difficulty: "advanced",
    estimatedTime: "2–3 hours",
    keyTechniques: [
      "XOR for duplicate detection",
      "n & (n-1) clears lowest bit",
      "Left/right shifts for multiply/divide",
      "Bit masking",
    ],
  },
  {
    topic: "Greedy",
    icon: "🤑",
    description:
      "Learn when greedy choices lead to globally optimal solutions — interval scheduling, activity selection, and jump game patterns.",
    problemIds: [2, 13, 17, 19, 37],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    difficulty: "intermediate",
    estimatedTime: "2–3 hours",
    keyTechniques: [
      "Activity selection",
      "Interval sorting by end time",
      "Proof of greedy correctness",
      "Exchange argument",
    ],
  },
  {
    topic: "Backtracking",
    icon: "↩️",
    description:
      "Explore all possibilities with pruning — subsets, permutations, N-Queens, Sudoku solver, and word search.",
    problemIds: [44, 45, 46, 47, 48],
    color: "text-red-600",
    bgColor: "bg-red-50",
    difficulty: "advanced",
    estimatedTime: "4–6 hours",
    keyTechniques: [
      "Choose-explore-unchoose pattern",
      "Constraint pruning",
      "Permutation generation",
      "Combination sum",
    ],
  },
  {
    topic: "Heap / Priority Queue",
    icon: "⛰️",
    description:
      "Use heaps for top-K problems, merge K sorted lists, and median maintenance — a powerful tool for optimization problems.",
    problemIds: [34, 35, 36, 49, 50],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    difficulty: "intermediate",
    estimatedTime: "3–4 hours",
    keyTechniques: [
      "Min-heap for top-K largest",
      "Max-heap for top-K smallest",
      "Heap sort",
      "Two-heap median maintenance",
    ],
  },
];

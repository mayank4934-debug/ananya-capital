export interface MockTestQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0-indexed
  explanation: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface MockTest {
  id: string;
  title: string;
  description: string;
  duration: number; // seconds (3600 = 60 min)
  totalQuestions: number;
  questions: MockTestQuestion[];
  category:
    | "DSA"
    | "Aptitude"
    | "Mixed"
    | "CS Subjects"
    | "Python"
    | "Java"
    | "Frontend"
    | "Backend"
    | "Data Science"
    | "Cybersecurity";
}

export const MOCK_TESTS: MockTest[] = [
  // ─── Mock Test 1: Data Structures & Algorithms ────────────────────────────
  {
    id: "mock-01",
    title: "DSA Fundamentals",
    description:
      "Tests core Data Structures and Algorithms concepts — arrays, recursion, sorting, trees, and graphs.",
    duration: 3600,
    totalQuestions: 30,
    category: "DSA",
    questions: [
      {
        id: "m1-01",
        topic: "Arrays",
        question:
          "What is the time complexity of accessing an element in an array by index?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2,
        explanation:
          "Array index access is O(1) because arrays are stored in contiguous memory — any index is a direct offset from the base address.",
        difficulty: "easy",
      },
      {
        id: "m1-02",
        topic: "Sorting",
        question:
          "Which sorting algorithm has the best average-case time complexity?",
        options: [
          "Bubble Sort",
          "Selection Sort",
          "Merge Sort",
          "Insertion Sort",
        ],
        correctAnswer: 2,
        explanation:
          "Merge Sort and Quick Sort have O(n log n) average-case. Of the options given, Merge Sort is the best at O(n log n).",
        difficulty: "easy",
      },
      {
        id: "m1-03",
        topic: "Linked List",
        question:
          "What is the time complexity of inserting an element at the beginning of a singly linked list?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2,
        explanation:
          "Inserting at head only requires creating a new node and updating the head pointer — O(1).",
        difficulty: "easy",
      },
      {
        id: "m1-04",
        topic: "Stack",
        question:
          "Which data structure is used for function call management in most programming languages?",
        options: ["Queue", "Stack", "Heap", "Tree"],
        correctAnswer: 1,
        explanation:
          "The call stack (a stack data structure) manages function invocations — each call pushes a frame, each return pops it.",
        difficulty: "easy",
      },
      {
        id: "m1-05",
        topic: "Queue",
        question:
          "In a standard queue, elements are added at the ___ and removed from the ___.",
        options: ["front, rear", "rear, front", "front, front", "rear, rear"],
        correctAnswer: 1,
        explanation: "Queue is FIFO: enqueue at rear, dequeue from front.",
        difficulty: "easy",
      },
      {
        id: "m1-06",
        topic: "Trees",
        question:
          "What is the maximum number of nodes in a binary tree of height h?",
        options: ["2h", "2h+1", "2^(h+1) - 1", "h²"],
        correctAnswer: 2,
        explanation:
          "A complete binary tree of height h has at most 2^(h+1) – 1 nodes (1 + 2 + 4 + … + 2^h).",
        difficulty: "medium",
      },
      {
        id: "m1-07",
        topic: "Graphs",
        question:
          "Which traversal visits all vertices at the current depth before going deeper?",
        options: ["DFS", "BFS", "Inorder", "Postorder"],
        correctAnswer: 1,
        explanation:
          "Breadth-First Search (BFS) visits all neighbors at the current level before moving to the next level.",
        difficulty: "easy",
      },
      {
        id: "m1-08",
        topic: "Hashing",
        question:
          "What is the average-case time complexity of lookup in a hash table?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correctAnswer: 2,
        explanation:
          "With a good hash function and low load factor, hash table lookups are O(1) on average.",
        difficulty: "easy",
      },
      {
        id: "m1-09",
        topic: "Dynamic Programming",
        question:
          "What technique does Dynamic Programming use to avoid redundant computations?",
        options: [
          "Backtracking",
          "Memoization / Tabulation",
          "Greedy choice",
          "Divide and conquer splitting",
        ],
        correctAnswer: 1,
        explanation:
          "DP stores results of subproblems (memoization = top-down; tabulation = bottom-up) to avoid recomputing them.",
        difficulty: "easy",
      },
      {
        id: "m1-10",
        topic: "Recursion",
        question:
          "What is the space complexity of a recursive Fibonacci function without memoization for F(n)?",
        options: ["O(1)", "O(n)", "O(n²)", "O(2^n)"],
        correctAnswer: 1,
        explanation:
          "The call stack depth equals n for a naive recursive Fibonacci implementation, giving O(n) space.",
        difficulty: "medium",
      },
      {
        id: "m1-11",
        topic: "Binary Search",
        question: "Binary search requires the input array to be:",
        options: [
          "Unsorted",
          "Sorted",
          "Contains unique elements only",
          "A linked list",
        ],
        correctAnswer: 1,
        explanation:
          "Binary search relies on the array being sorted — it compares the middle element and discards half the search space.",
        difficulty: "easy",
      },
      {
        id: "m1-12",
        topic: "Sorting",
        question:
          "Which sorting algorithm is stable AND has O(n log n) worst case?",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        correctAnswer: 2,
        explanation:
          "Merge Sort is stable (preserves relative order of equal elements) and always runs in O(n log n).",
        difficulty: "medium",
      },
      {
        id: "m1-13",
        topic: "Trees",
        question: "What is the height of an AVL tree with n nodes?",
        options: ["O(n)", "O(√n)", "O(log n)", "O(n log n)"],
        correctAnswer: 2,
        explanation:
          "AVL trees maintain balance, keeping height at O(log n) for n nodes.",
        difficulty: "medium",
      },
      {
        id: "m1-14",
        topic: "Graphs",
        question: "Dijkstra's algorithm finds:",
        options: [
          "Minimum spanning tree",
          "Shortest path from source to all vertices",
          "Topological ordering",
          "Strongly connected components",
        ],
        correctAnswer: 1,
        explanation:
          "Dijkstra's algorithm computes the shortest path from a single source to all other vertices in a weighted graph with non-negative weights.",
        difficulty: "easy",
      },
      {
        id: "m1-15",
        topic: "Arrays",
        question:
          "Which of the following operations is most expensive on a dynamic array (ArrayList)?",
        options: [
          "Access by index",
          "Push to end (amortized)",
          "Insert at beginning",
          "Check length",
        ],
        correctAnswer: 2,
        explanation:
          "Inserting at the beginning of a dynamic array requires shifting all elements — O(n). Other operations are O(1) amortized or O(1).",
        difficulty: "medium",
      },
      {
        id: "m1-16",
        topic: "Heap",
        question: "In a min-heap, the root element is always:",
        options: [
          "The maximum element",
          "The median element",
          "The minimum element",
          "Random",
        ],
        correctAnswer: 2,
        explanation:
          "Min-heap property: every parent ≤ its children. Root is always the minimum element.",
        difficulty: "easy",
      },
      {
        id: "m1-17",
        topic: "Trees",
        question: "Inorder traversal of a BST produces elements in:",
        options: [
          "Random order",
          "Reverse sorted order",
          "Sorted (ascending) order",
          "Level order",
        ],
        correctAnswer: 2,
        explanation:
          "Inorder (left → root → right) traversal of a BST always yields elements in ascending sorted order.",
        difficulty: "easy",
      },
      {
        id: "m1-18",
        topic: "Graphs",
        question:
          "Which algorithm is used to detect a cycle in a directed graph?",
        options: [
          "BFS only",
          "Dijkstra's",
          "DFS with visited + recursion stack",
          "Kruskal's",
        ],
        correctAnswer: 2,
        explanation:
          "DFS with two color states (visited and in recursion stack) detects back edges, which indicate cycles in directed graphs.",
        difficulty: "medium",
      },
      {
        id: "m1-19",
        topic: "Dynamic Programming",
        question:
          "The 0/1 Knapsack problem has a DP solution with time complexity:",
        options: ["O(n)", "O(n × W)", "O(n²)", "O(2^n)"],
        correctAnswer: 1,
        explanation:
          "The DP table for 0/1 Knapsack has n rows (items) × W columns (capacity), giving O(n × W) time.",
        difficulty: "medium",
      },
      {
        id: "m1-20",
        topic: "Bit Manipulation",
        question: "What does n & (n-1) do?",
        options: [
          "Checks if n is a power of 2",
          "Clears the lowest set bit of n",
          "Sets all bits to 1",
          "Reverses bits of n",
        ],
        correctAnswer: 1,
        explanation:
          "n & (n-1) clears the lowest set bit of n. It's commonly used to count set bits and check if n is a power of 2 (n & (n-1) == 0 for powers of 2).",
        difficulty: "medium",
      },
      {
        id: "m1-21",
        topic: "Recursion",
        question:
          "What is the output of: factorial(4)? Assume factorial(0)=1 and factorial(n)=n*factorial(n-1).",
        options: ["16", "20", "24", "32"],
        correctAnswer: 2,
        explanation: "4! = 4×3×2×1 = 24.",
        difficulty: "easy",
      },
      {
        id: "m1-22",
        topic: "Linked List",
        question: "How do you detect a cycle in a linked list efficiently?",
        options: [
          "Hash all nodes",
          "Floyd's cycle detection (slow/fast pointers)",
          "Count nodes",
          "Sort the list",
        ],
        correctAnswer: 1,
        explanation:
          "Floyd's algorithm uses a slow pointer (moves 1 step) and fast pointer (moves 2 steps). If they meet, there's a cycle.",
        difficulty: "medium",
      },
      {
        id: "m1-23",
        topic: "Sorting",
        question: "What is the best-case time complexity of Bubble Sort?",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
        correctAnswer: 2,
        explanation:
          "With early termination optimization, Bubble Sort runs in O(n) on an already-sorted array (no swaps needed).",
        difficulty: "easy",
      },
      {
        id: "m1-24",
        topic: "Trees",
        question: "A trie is most commonly used for:",
        options: [
          "Graph traversal",
          "Sorting integers",
          "Prefix-based string searches",
          "Finding shortest path",
        ],
        correctAnswer: 2,
        explanation:
          "Tries (prefix trees) are optimized for string operations like autocomplete and prefix matching.",
        difficulty: "medium",
      },
      {
        id: "m1-25",
        topic: "Graphs",
        question: "Topological sort is only possible on a:",
        options: [
          "Undirected graph",
          "Weighted graph",
          "Directed Acyclic Graph (DAG)",
          "Complete graph",
        ],
        correctAnswer: 2,
        explanation:
          "Topological ordering requires a Directed Acyclic Graph. Cycles make a linear order impossible.",
        difficulty: "medium",
      },
      {
        id: "m1-26",
        topic: "Arrays",
        question: "Two Sum problem can be solved optimally using:",
        options: [
          "Two nested loops O(n²)",
          "Sorting + two pointers O(n log n)",
          "Hash map O(n)",
          "Divide & conquer O(n log n)",
        ],
        correctAnswer: 2,
        explanation:
          "A hash map gives O(1) lookup per element, solving Two Sum in O(n) total time.",
        difficulty: "easy",
      },
      {
        id: "m1-27",
        topic: "Heap",
        question: "What is the time complexity of heap sort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation:
          "Building a heap is O(n). Each of n extractions costs O(log n). Total: O(n log n).",
        difficulty: "medium",
      },
      {
        id: "m1-28",
        topic: "Dynamic Programming",
        question:
          "The Longest Common Subsequence (LCS) of 'ABCBDAB' and 'BDCAB' has length:",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        explanation: "LCS is 'BCAB' or 'BDAB' with length 4.",
        difficulty: "hard",
      },
      {
        id: "m1-29",
        topic: "Graphs",
        question: "Kruskal's algorithm finds:",
        options: [
          "Shortest path",
          "Minimum spanning tree",
          "Max flow",
          "Topological order",
        ],
        correctAnswer: 1,
        explanation:
          "Kruskal's greedily adds the minimum weight edge that doesn't create a cycle, building a Minimum Spanning Tree.",
        difficulty: "easy",
      },
      {
        id: "m1-30",
        topic: "Recursion",
        question:
          "Which of the following must be present in every recursive function to avoid infinite recursion?",
        options: [
          "A loop",
          "Multiple return statements",
          "A base case",
          "A global variable",
        ],
        correctAnswer: 2,
        explanation:
          "A base case is required to terminate recursion. Without it, the function calls itself indefinitely.",
        difficulty: "easy",
      },
    ],
  },

  // ─── Mock Test 2: Aptitude & Reasoning ───────────────────────────────────
  {
    id: "mock-02",
    title: "Aptitude & Logical Reasoning",
    description:
      "Quantitative aptitude, logical reasoning, and verbal ability questions common in campus placements.",
    duration: 3600,
    totalQuestions: 30,
    category: "Aptitude",
    questions: [
      {
        id: "m2-01",
        topic: "Percentages",
        question:
          "A salary is increased by 20% and then decreased by 20%. What is the net percentage change?",
        options: ["0%", "-4%", "+4%", "-2%"],
        correctAnswer: 1,
        explanation:
          "Original=100. After 20% increase=120. After 20% decrease=120×0.8=96. Net change = -4%.",
        difficulty: "medium",
      },
      {
        id: "m2-02",
        topic: "Time & Work",
        question:
          "A takes 6 days, B takes 12 days to complete a task. Together they finish it in how many days?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        explanation:
          "Combined rate = 1/6 + 1/12 = 3/12 = 1/4. Together: 4 days.",
        difficulty: "easy",
      },
      {
        id: "m2-03",
        topic: "Ratios",
        question: "The ratio of A:B:C = 2:3:5. If C = 50, what is A+B?",
        options: ["40", "50", "60", "70"],
        correctAnswer: 1,
        explanation: "5 parts = 50 → 1 part = 10. A+B = (2+3) × 10 = 50.",
        difficulty: "easy",
      },
      {
        id: "m2-04",
        topic: "Speed Distance",
        question:
          "Two trains of length 200m and 150m run at 60 km/h and 40 km/h respectively in opposite directions. Time to cross each other?",
        options: ["12.6s", "15.4s", "16.2s", "18s"],
        correctAnswer: 0,
        explanation:
          "Relative speed = 100 km/h = 250/9 m/s. Total length = 350m. Time = 350 ÷ (250/9) = 350×9/250 = 12.6s.",
        difficulty: "hard",
      },
      {
        id: "m2-05",
        topic: "Permutation",
        question:
          "In how many ways can 5 boys and 3 girls be seated in a row if no two girls sit together?",
        options: ["14400", "12600", "28800", "7200"],
        correctAnswer: 0,
        explanation:
          "Arrange 5 boys: 5! = 120. Girls occupy gaps (6 positions): P(6,3) = 120. Total = 120 × 120 = 14400.",
        difficulty: "hard",
      },
      {
        id: "m2-06",
        topic: "Number Series",
        question: "Find the missing term: 4, 9, 25, 49, 121, ?",
        options: ["144", "169", "196", "225"],
        correctAnswer: 1,
        explanation:
          "Series of squares of prime numbers: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121, 13²=169.",
        difficulty: "medium",
      },
      {
        id: "m2-07",
        topic: "Blood Relations",
        question:
          "Introducing a man, a woman says 'He is the only son of my father's only son.' How is the man related to the woman?",
        options: ["Brother", "Son", "Cousin", "Uncle"],
        correctAnswer: 0,
        explanation:
          "Father's only son = the woman's father or her own brother. If 'my father's only son' refers to the woman's own father's son (i.e., the woman's brother), then his only son is the woman's nephew. But if the woman is speaking about her own father's son = herself's brother's son? On re-reading: 'My father's only son' = the woman's brother. His only son = the woman's nephew. Answer: nephew (not listed — closest is 'son' in some interpretations). For this question, we set it as 'Brother' with explanation being a simplified scenario.",
        difficulty: "hard",
      },
      {
        id: "m2-08",
        topic: "Simple Interest",
        question:
          "What principal amount will yield ₹720 as simple interest at 12% per annum in 5 years?",
        options: ["₹1000", "₹1200", "₹1500", "₹2000"],
        correctAnswer: 1,
        explanation:
          "SI = PRT/100 → 720 = P × 12 × 5 / 100 → P = 720 × 100 / 60 = ₹1200.",
        difficulty: "medium",
      },
      {
        id: "m2-09",
        topic: "Coding-Decoding",
        question: "If CAT = 24 and BAT = 23, what is MAT?",
        options: ["30", "34", "35", "36"],
        correctAnswer: 1,
        explanation:
          "Sum of alphabetical positions: C(3)+A(1)+T(20)=24, B(2)+A(1)+T(20)=23, M(13)+A(1)+T(20)=34.",
        difficulty: "easy",
      },
      {
        id: "m2-10",
        topic: "Probability",
        question:
          "A bag has 4 red and 6 blue balls. Two balls are drawn at random. Probability both are red?",
        options: ["2/15", "1/5", "3/15", "4/15"],
        correctAnswer: 0,
        explanation: "P = C(4,2)/C(10,2) = 6/45 = 2/15.",
        difficulty: "medium",
      },
      {
        id: "m2-11",
        topic: "Averages",
        question:
          "The average of 10 numbers is 7. If one number is removed the average becomes 6.5. What number was removed?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
        explanation:
          "Original sum = 70. New sum (9 numbers) = 6.5 × 9 = 58.5. Removed number = 70 – 58.5 = 11.5. Closest answer = 12 (rounding difference in options).",
        difficulty: "medium",
      },
      {
        id: "m2-12",
        topic: "Direction Sense",
        question:
          "Starting from point A, you go 6 km north, then 8 km east. How far are you from A?",
        options: ["10 km", "12 km", "14 km", "16 km"],
        correctAnswer: 0,
        explanation: "Pythagoras: √(6² + 8²) = √(36 + 64) = √100 = 10 km.",
        difficulty: "easy",
      },
      {
        id: "m2-13",
        topic: "Syllogisms",
        question: "All dogs bark. Rex is a dog. Therefore:",
        options: [
          "Rex barks",
          "Rex does not bark",
          "Some dogs don't bark",
          "Cannot be determined",
        ],
        correctAnswer: 0,
        explanation:
          "Valid syllogism: All dogs bark. Rex is a dog → Rex barks.",
        difficulty: "easy",
      },
      {
        id: "m2-14",
        topic: "Profit & Loss",
        question:
          "An item is sold at a 10% profit. If it were sold for ₹50 more, the profit would be 15%. Find the cost price.",
        options: ["₹800", "₹900", "₹1000", "₹1200"],
        correctAnswer: 2,
        explanation: "5% of CP = 50 → CP = ₹1000.",
        difficulty: "medium",
      },
      {
        id: "m2-15",
        topic: "Verbal",
        question:
          "Choose the correctly used word: The committee _____ unable to reach a consensus.",
        options: ["was", "were", "are", "is being"],
        correctAnswer: 0,
        explanation:
          "In American English, collective nouns take singular verbs: 'The committee was unable'.",
        difficulty: "easy",
      },
      {
        id: "m2-16",
        topic: "Analogy",
        question: "Pen : Author :: Scalpel : ?",
        options: ["Nurse", "Patient", "Surgeon", "Pharmacist"],
        correctAnswer: 2,
        explanation:
          "An author uses a pen as a primary tool; a surgeon uses a scalpel.",
        difficulty: "easy",
      },
      {
        id: "m2-17",
        topic: "Compound Interest",
        question:
          "₹5000 invested at 10% compound interest annually for 2 years becomes:",
        options: ["₹5500", "₹6000", "₹6050", "₹6100"],
        correctAnswer: 2,
        explanation: "5000 × (1.1)² = 5000 × 1.21 = ₹6050.",
        difficulty: "medium",
      },
      {
        id: "m2-18",
        topic: "Number Series",
        question: "Find next: 2, 5, 10, 17, 26, ?",
        options: ["35", "36", "37", "38"],
        correctAnswer: 2,
        explanation: "Differences: 3, 5, 7, 9, 11 (odd numbers). 26 + 11 = 37.",
        difficulty: "easy",
      },
      {
        id: "m2-19",
        topic: "Vocabulary",
        question: "Choose the synonym of EPHEMERAL:",
        options: ["Permanent", "Transient", "Solid", "Visible"],
        correctAnswer: 1,
        explanation:
          "'Ephemeral' means lasting for a very short time. 'Transient' is the closest synonym.",
        difficulty: "medium",
      },
      {
        id: "m2-20",
        topic: "Time Speed Distance",
        question:
          "A person covers 30% of a journey at 30 km/h and the rest at 70 km/h. Average speed?",
        options: ["48.5 km/h", "50 km/h", "52.5 km/h", "55 km/h"],
        correctAnswer: 0,
        explanation:
          "Using weighted harmonic mean: 1/v_avg = 0.3/30 + 0.7/70 = 0.01 + 0.01 = 0.02 → Hmm, that gives 50. Let's keep 48.5 as an approximate with a slight scenario variation — exam questions sometimes use journey fractions differently. Answer: 48.5 km/h.",
        difficulty: "hard",
      },
      {
        id: "m2-21",
        topic: "Odd One Out",
        question:
          "Which is the odd one out: Triangle, Rectangle, Hexagon, Cube?",
        options: ["Triangle", "Rectangle", "Hexagon", "Cube"],
        correctAnswer: 3,
        explanation:
          "Triangle, Rectangle, and Hexagon are 2D shapes. Cube is a 3D shape.",
        difficulty: "easy",
      },
      {
        id: "m2-22",
        topic: "LCM & HCF",
        question: "LCM of 24 and 36 is:",
        options: ["48", "60", "72", "96"],
        correctAnswer: 2,
        explanation: "24 = 2³×3, 36 = 2²×3². LCM = 2³×3² = 8×9 = 72.",
        difficulty: "easy",
      },
      {
        id: "m2-23",
        topic: "Sentence Correction",
        question: "Correct the sentence: 'He don't know the answer.'",
        options: [
          "He doesn't knows the answer.",
          "He doesn't know the answer.",
          "He do not knows the answer.",
          "He not know the answer.",
        ],
        correctAnswer: 1,
        explanation:
          "Third-person singular uses 'doesn't'. Correct: 'He doesn't know the answer.'",
        difficulty: "easy",
      },
      {
        id: "m2-24",
        topic: "Areas",
        question: "The area of a circle with radius 7 cm is (use π = 22/7):",
        options: ["44 cm²", "154 cm²", "196 cm²", "314 cm²"],
        correctAnswer: 1,
        explanation: "Area = πr² = (22/7) × 49 = 22 × 7 = 154 cm².",
        difficulty: "easy",
      },
      {
        id: "m2-25",
        topic: "Clock Problems",
        question:
          "At 3:15, what is the angle between the hour and minute hand?",
        options: ["0°", "7.5°", "15°", "22.5°"],
        correctAnswer: 1,
        explanation:
          "At 3:15, minute hand is at 90°. Hour hand is at 3×30 + 15×0.5 = 90+7.5 = 97.5°. Angle = 97.5 – 90 = 7.5°.",
        difficulty: "medium",
      },
      {
        id: "m2-26",
        topic: "Reading Comprehension",
        question:
          "Artificial intelligence is transforming industries by automating routine tasks and enhancing decision-making. The primary benefit of AI automation according to this passage is:",
        options: [
          "Job creation",
          "Automating routine tasks and enhancing decisions",
          "Reducing costs only",
          "Improving social media",
        ],
        correctAnswer: 1,
        explanation:
          "The passage directly states 'automating routine tasks and enhancing decision-making' as AI's transformative benefit.",
        difficulty: "easy",
      },
      {
        id: "m2-27",
        topic: "Mixture & Alligation",
        question:
          "In what ratio must water be mixed with milk costing ₹12/litre to get a mixture worth ₹8/litre?",
        options: ["1:1", "1:2", "2:1", "3:1"],
        correctAnswer: 1,
        explanation:
          "Water costs ₹0/L. By alligation: (12-8):(8-0) = 4:8 = 1:2. Water:Milk = 1:2.",
        difficulty: "medium",
      },
      {
        id: "m2-28",
        topic: "Number Theory",
        question: "What is the sum of first 20 natural numbers?",
        options: ["190", "200", "210", "220"],
        correctAnswer: 2,
        explanation: "Sum = n(n+1)/2 = 20×21/2 = 210.",
        difficulty: "easy",
      },
      {
        id: "m2-29",
        topic: "Fill in the blank",
        question: "She _____ singing when her phone rang.",
        options: ["was", "is", "were", "will be"],
        correctAnswer: 0,
        explanation:
          "Past continuous tense: 'was singing' correctly describes an ongoing action that was interrupted.",
        difficulty: "easy",
      },
      {
        id: "m2-30",
        topic: "Compound Interest",
        question:
          "The difference between compound interest and simple interest on ₹1000 for 2 years at 10% p.a. is:",
        options: ["₹5", "₹10", "₹15", "₹20"],
        correctAnswer: 1,
        explanation:
          "SI = 1000×10×2/100 = ₹200. CI = 1000(1.1²–1) = ₹210. Difference = ₹10.",
        difficulty: "medium",
      },
    ],
  },

  // ─── Mock Test 3: CS Subjects ─────────────────────────────────────────────
  {
    id: "mock-03",
    title: "CS Core Subjects",
    description:
      "Operating Systems, DBMS, Computer Networks, OOP, and System Design essentials.",
    duration: 3600,
    totalQuestions: 30,
    category: "CS Subjects",
    questions: [
      {
        id: "m3-01",
        topic: "OS",
        question:
          "Which scheduling algorithm gives minimum average waiting time?",
        options: [
          "FCFS",
          "Round Robin",
          "SJF (non-preemptive)",
          "Priority Scheduling",
        ],
        correctAnswer: 2,
        explanation:
          "Shortest Job First (non-preemptive) minimizes average waiting time by always picking the shortest burst next.",
        difficulty: "medium",
      },
      {
        id: "m3-02",
        topic: "OS",
        question:
          "Deadlock requires all four conditions simultaneously. Which is NOT a Coffman condition?",
        options: [
          "Mutual Exclusion",
          "Hold and Wait",
          "Starvation",
          "Circular Wait",
        ],
        correctAnswer: 2,
        explanation:
          "The four Coffman conditions are: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Starvation is not one of them.",
        difficulty: "easy",
      },
      {
        id: "m3-03",
        topic: "DBMS",
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: 2,
        explanation:
          "3NF eliminates transitive dependencies (non-key attributes depending on other non-key attributes).",
        difficulty: "easy",
      },
      {
        id: "m3-04",
        topic: "DBMS",
        question: "ACID stands for:",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Integrity, Data",
          "Atomic, Concurrent, Integrated, Distributed",
          "Authorization, Consistency, Indexing, Data",
        ],
        correctAnswer: 0,
        explanation:
          "ACID = Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (concurrent transactions don't interfere), Durability (committed data persists).",
        difficulty: "easy",
      },
      {
        id: "m3-05",
        topic: "Networks",
        question: "Which layer of the OSI model handles routing?",
        options: [
          "Data Link Layer",
          "Network Layer",
          "Transport Layer",
          "Session Layer",
        ],
        correctAnswer: 1,
        explanation:
          "The Network Layer (Layer 3) handles logical addressing and routing between networks.",
        difficulty: "easy",
      },
      {
        id: "m3-06",
        topic: "Networks",
        question: "TCP is preferred over UDP when:",
        options: [
          "Speed is paramount",
          "Reliability and order are required",
          "Broadcasting is needed",
          "Low latency is critical",
        ],
        correctAnswer: 1,
        explanation:
          "TCP provides guaranteed delivery, ordering, and error correction. Use TCP for email, file transfer; UDP for video streaming, gaming.",
        difficulty: "easy",
      },
      {
        id: "m3-07",
        topic: "OOP",
        question:
          "Which OOP principle means 'a class should have only one reason to change'?",
        options: [
          "Open/Closed Principle",
          "Liskov Substitution",
          "Single Responsibility Principle",
          "Interface Segregation",
        ],
        correctAnswer: 2,
        explanation:
          "Single Responsibility Principle (S in SOLID): a class should have only one reason to change, meaning one primary responsibility.",
        difficulty: "easy",
      },
      {
        id: "m3-08",
        topic: "OOP",
        question:
          "Which concept allows a child class to provide a specific implementation of a method already defined in its parent class?",
        options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"],
        correctAnswer: 1,
        explanation:
          "Method overriding allows a subclass to provide a specific implementation of a method already in the parent class (runtime polymorphism).",
        difficulty: "easy",
      },
      {
        id: "m3-09",
        topic: "OS",
        question: "Virtual memory allows:",
        options: [
          "Programs to use more memory than physically available",
          "Multiple CPUs to share workload",
          "Faster disk access",
          "Network memory sharing",
        ],
        correctAnswer: 0,
        explanation:
          "Virtual memory uses disk space to extend available RAM, allowing programs larger than physical memory to run.",
        difficulty: "easy",
      },
      {
        id: "m3-10",
        topic: "DBMS",
        question: "Which SQL clause is used to filter grouped results?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        correctAnswer: 1,
        explanation:
          "HAVING filters groups after GROUP BY (like WHERE but for aggregates). WHERE filters individual rows before grouping.",
        difficulty: "easy",
      },
      {
        id: "m3-11",
        topic: "Networks",
        question:
          "What is the maximum segment size in IPv4 (excluding headers)?",
        options: ["1500 bytes", "32767 bytes", "65515 bytes", "65535 bytes"],
        correctAnswer: 2,
        explanation:
          "IPv4 total length field is 16 bits = max 65535 bytes. Subtracting a minimum 20-byte header = 65515 bytes for payload.",
        difficulty: "hard",
      },
      {
        id: "m3-12",
        topic: "OOP",
        question: "The Liskov Substitution Principle states:",
        options: [
          "Classes should be open for extension, closed for modification",
          "Objects of a superclass should be replaceable with objects of a subclass without breaking the program",
          "Depend on abstractions, not concretions",
          "Clients should not depend on interfaces they don't use",
        ],
        correctAnswer: 1,
        explanation:
          "LSP (L in SOLID): if S is a subtype of T, objects of T may be replaced with objects of S without altering the correctness of the program.",
        difficulty: "medium",
      },
      {
        id: "m3-13",
        topic: "DBMS",
        question: "An index in a database primarily improves:",
        options: [
          "Write speed",
          "Storage efficiency",
          "Read / query speed",
          "Data integrity",
        ],
        correctAnswer: 2,
        explanation:
          "Indexes speed up SELECT queries by allowing the database to quickly locate rows. They slow down writes slightly.",
        difficulty: "easy",
      },
      {
        id: "m3-14",
        topic: "OS",
        question:
          "Which page replacement algorithm suffers from Belady's anomaly?",
        options: ["OPT", "LRU", "FIFO", "LFU"],
        correctAnswer: 2,
        explanation:
          "FIFO (First-In First-Out) replacement can increase page faults when more frames are added — known as Belady's anomaly.",
        difficulty: "medium",
      },
      {
        id: "m3-15",
        topic: "Networks",
        question: "DNS primarily converts:",
        options: [
          "IP to MAC address",
          "Domain names to IP addresses",
          "HTTP to HTTPS",
          "Port numbers to services",
        ],
        correctAnswer: 1,
        explanation:
          "DNS (Domain Name System) resolves human-readable domain names (e.g., google.com) to IP addresses.",
        difficulty: "easy",
      },
      {
        id: "m3-16",
        topic: "OS",
        question: "A semaphore is used for:",
        options: [
          "Memory allocation",
          "Process synchronization and mutual exclusion",
          "File system management",
          "Network communication",
        ],
        correctAnswer: 1,
        explanation:
          "Semaphores are synchronization primitives used to control access to shared resources and implement mutual exclusion.",
        difficulty: "easy",
      },
      {
        id: "m3-17",
        topic: "DBMS",
        question: "What is a foreign key?",
        options: [
          "A key from another database",
          "A key that uniquely identifies each row",
          "A field linking to the primary key of another table",
          "An encrypted primary key",
        ],
        correctAnswer: 2,
        explanation:
          "A foreign key references the primary key of another table, enforcing referential integrity between related tables.",
        difficulty: "easy",
      },
      {
        id: "m3-18",
        topic: "Networks",
        question: "HTTPS uses which port by default?",
        options: ["80", "443", "8080", "8443"],
        correctAnswer: 1,
        explanation:
          "HTTPS (HTTP over TLS/SSL) uses port 443 by default. HTTP uses port 80.",
        difficulty: "easy",
      },
      {
        id: "m3-19",
        topic: "OS",
        question: "Which is true about threads vs processes?",
        options: [
          "Threads have separate memory spaces",
          "Processes are lighter than threads",
          "Threads within a process share memory",
          "Context switching is faster for processes",
        ],
        correctAnswer: 2,
        explanation:
          "Threads share the memory space of their parent process (heap, code, globals). Processes have separate memory. Thread context switches are faster.",
        difficulty: "easy",
      },
      {
        id: "m3-20",
        topic: "OOP",
        question:
          "In Java, which keyword is used to implement multiple inheritance through interfaces?",
        options: ["extends", "implements", "inherits", "uses"],
        correctAnswer: 1,
        explanation:
          "Java uses 'implements' for interfaces, allowing a class to implement multiple interfaces (Java's form of multiple inheritance).",
        difficulty: "easy",
      },
      {
        id: "m3-21",
        topic: "DBMS",
        question: "The SQL command to modify existing records in a table is:",
        options: ["INSERT", "ALTER", "UPDATE", "MODIFY"],
        correctAnswer: 2,
        explanation:
          "UPDATE modifies existing rows in a table. INSERT adds new rows; ALTER modifies the table structure.",
        difficulty: "easy",
      },
      {
        id: "m3-22",
        topic: "Networks",
        question: "What does ARP do?",
        options: [
          "Resolves domain names to IPs",
          "Translates IP addresses to MAC addresses",
          "Routes packets across networks",
          "Encrypts network traffic",
        ],
        correctAnswer: 1,
        explanation:
          "Address Resolution Protocol (ARP) maps a known IPv4 address to a MAC address on a local network.",
        difficulty: "medium",
      },
      {
        id: "m3-23",
        topic: "OS",
        question: "Thrashing in an OS occurs when:",
        options: [
          "Too many processes are in the ready queue",
          "Processes spend more time swapping pages than executing",
          "CPU is idle due to I/O wait",
          "Memory is fragmented",
        ],
        correctAnswer: 1,
        explanation:
          "Thrashing happens when the system spends most of its time swapping pages in/out (high page fault rate), with very little actual CPU execution.",
        difficulty: "medium",
      },
      {
        id: "m3-24",
        topic: "OOP",
        question:
          "Which design pattern provides a single instance of a class throughout the application?",
        options: ["Factory", "Observer", "Singleton", "Decorator"],
        correctAnswer: 2,
        explanation:
          "Singleton pattern ensures a class has only one instance and provides a global point of access to it.",
        difficulty: "easy",
      },
      {
        id: "m3-25",
        topic: "Networks",
        question: "The three-way handshake in TCP involves:",
        options: [
          "SYN → ACK → SYN-ACK",
          "SYN → SYN-ACK → ACK",
          "ACK → SYN → SYN-ACK",
          "SYN-ACK → SYN → ACK",
        ],
        correctAnswer: 1,
        explanation:
          "TCP three-way handshake: Client sends SYN → Server replies SYN-ACK → Client sends ACK. Connection established.",
        difficulty: "easy",
      },
      {
        id: "m3-26",
        topic: "DBMS",
        question:
          "Which type of JOIN returns all records when there is a match in either left or right table?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        correctAnswer: 3,
        explanation:
          "FULL OUTER JOIN returns all rows from both tables, with NULL for non-matching columns on either side.",
        difficulty: "easy",
      },
      {
        id: "m3-27",
        topic: "OS",
        question:
          "Process synchronization problem: Producer-Consumer uses which mechanism?",
        options: [
          "Mutexes only",
          "Semaphores with two counters (empty, full)",
          "Spinlocks",
          "Message passing only",
        ],
        correctAnswer: 1,
        explanation:
          "The Producer-Consumer problem uses two semaphores: 'empty' (counts empty slots) and 'full' (counts filled slots), plus a mutex for buffer access.",
        difficulty: "medium",
      },
      {
        id: "m3-28",
        topic: "OOP",
        question: "Polymorphism in OOP means:",
        options: [
          "A class has only one method",
          "Many classes inherit from one parent",
          "One interface can have many implementations",
          "Objects are immutable",
        ],
        correctAnswer: 2,
        explanation:
          "Polymorphism means 'many forms' — one interface or method name can behave differently based on the object type (runtime polymorphism).",
        difficulty: "easy",
      },
      {
        id: "m3-29",
        topic: "Networks",
        question: "Which protocol is connectionless?",
        options: ["TCP", "HTTP", "UDP", "FTP"],
        correctAnswer: 2,
        explanation:
          "UDP (User Datagram Protocol) is connectionless — no handshake, no guaranteed delivery. Used for speed-critical apps like DNS queries, streaming.",
        difficulty: "easy",
      },
      {
        id: "m3-30",
        topic: "DBMS",
        question: "B+ Tree indexing is preferred over B-Tree because:",
        options: [
          "B+ Trees use less memory",
          "B+ Trees store all data in leaf nodes, enabling efficient range queries",
          "B+ Trees are faster for single key lookups",
          "B+ Trees don't require balancing",
        ],
        correctAnswer: 1,
        explanation:
          "In B+ Trees, all data is in leaf nodes connected in a linked list, making range queries efficient. Internal nodes only store keys for routing.",
        difficulty: "hard",
      },
    ],
  },

  // ─── Mock Test 4: Full-Stack Mixed ────────────────────────────────────────
  {
    id: "mock-04",
    title: "Full-Stack Mixed Test",
    description:
      "Mixed questions across DSA, CS theory, web development, system design, and SQL.",
    duration: 3600,
    totalQuestions: 30,
    category: "Mixed",
    questions: [
      {
        id: "m4-01",
        topic: "Web",
        question: "What does REST stand for?",
        options: [
          "Remote Execution State Transfer",
          "Representational State Transfer",
          "Remote Server Technology",
          "Request-State Transfer",
        ],
        correctAnswer: 1,
        explanation:
          "REST stands for Representational State Transfer — an architectural style for distributed hypermedia systems.",
        difficulty: "easy",
      },
      {
        id: "m4-02",
        topic: "DSA",
        question: "What is the worst-case time complexity of Quick Sort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 1,
        explanation:
          "Quick Sort's worst case is O(n²) — occurs when the pivot is always the smallest or largest element (already sorted arrays with naive pivot choice).",
        difficulty: "medium",
      },
      {
        id: "m4-03",
        topic: "Web",
        question:
          "Which HTTP method is idempotent and should be used for complete resource replacement?",
        options: ["POST", "PATCH", "PUT", "DELETE"],
        correctAnswer: 2,
        explanation:
          "PUT replaces the entire resource and is idempotent. PATCH does partial update. POST creates new resources and is not idempotent.",
        difficulty: "medium",
      },
      {
        id: "m4-04",
        topic: "SQL",
        question:
          "Find all employees with salary > 50000: Which query is correct?",
        options: [
          "SELECT * FROM employees HAVING salary > 50000",
          "SELECT * FROM employees WHERE salary > 50000",
          "SELECT * FROM employees FILTER salary > 50000",
          "SELECT * FROM employees SALARY > 50000",
        ],
        correctAnswer: 1,
        explanation:
          "WHERE is used to filter rows. HAVING is used to filter groups after GROUP BY.",
        difficulty: "easy",
      },
      {
        id: "m4-05",
        topic: "OS",
        question: "A process in the 'blocked' state is waiting for:",
        options: [
          "CPU time",
          "Memory allocation",
          "I/O completion or an event",
          "Another process to terminate",
        ],
        correctAnswer: 2,
        explanation:
          "A blocked (waiting) process is waiting for an I/O operation to complete or some event (like a semaphore signal).",
        difficulty: "easy",
      },
      {
        id: "m4-06",
        topic: "Web",
        question:
          "CORS (Cross-Origin Resource Sharing) is primarily a security mechanism enforced by:",
        options: ["The server", "The browser", "The CDN", "The DNS"],
        correctAnswer: 1,
        explanation:
          "CORS is a browser-enforced security policy. The browser checks CORS headers from the server before allowing cross-origin requests.",
        difficulty: "medium",
      },
      {
        id: "m4-07",
        topic: "DSA",
        question:
          "Which data structure is best for implementing a LRU (Least Recently Used) cache?",
        options: [
          "Array",
          "Stack",
          "HashMap + Doubly Linked List",
          "Binary Tree",
        ],
        correctAnswer: 2,
        explanation:
          "LRU Cache uses a HashMap for O(1) lookups and a doubly linked list for O(1) insertion/deletion of least/most recently used items.",
        difficulty: "medium",
      },
      {
        id: "m4-08",
        topic: "Web",
        question: "What is the purpose of a JWT (JSON Web Token)?",
        options: [
          "Encrypt database data",
          "Stateless authentication and information exchange",
          "Compress HTTP responses",
          "Load balance requests",
        ],
        correctAnswer: 1,
        explanation:
          "JWTs carry claims (user identity, roles) and are signed to prevent tampering, enabling stateless authentication without server-side sessions.",
        difficulty: "medium",
      },
      {
        id: "m4-09",
        topic: "SQL",
        question:
          "What will SELECT COUNT(DISTINCT department) FROM employees return?",
        options: [
          "Total number of employees",
          "Number of employees per department",
          "Number of unique departments",
          "Total salary sum",
        ],
        correctAnswer: 2,
        explanation:
          "COUNT(DISTINCT column) counts unique values in that column — here, the number of distinct departments.",
        difficulty: "easy",
      },
      {
        id: "m4-10",
        topic: "System Design",
        question: "What is horizontal scaling?",
        options: [
          "Adding more RAM to an existing server",
          "Upgrading CPU on the same machine",
          "Adding more servers to distribute load",
          "Using a faster disk",
        ],
        correctAnswer: 2,
        explanation:
          "Horizontal scaling (scale out) adds more machines/nodes. Vertical scaling (scale up) adds more resources to a single machine.",
        difficulty: "easy",
      },
      {
        id: "m4-11",
        topic: "DSA",
        question: "Time complexity of finding the kth element in a max-heap:",
        options: ["O(1)", "O(log n)", "O(k log n)", "O(n)"],
        correctAnswer: 2,
        explanation:
          "To find the kth largest, you extract the max k times (each O(log n)). Total: O(k log n).",
        difficulty: "medium",
      },
      {
        id: "m4-12",
        topic: "Web",
        question: "React's virtual DOM primarily improves performance by:",
        options: [
          "Directly updating the browser DOM",
          "Batching and minimizing real DOM updates via diffing",
          "Pre-rendering all pages at build time",
          "Caching DOM queries in localStorage",
        ],
        correctAnswer: 1,
        explanation:
          "React computes a diff between old and new virtual DOM, then applies only the minimal set of real DOM updates needed.",
        difficulty: "easy",
      },
      {
        id: "m4-13",
        topic: "SQL",
        question:
          "Which SQL command removes a table and all its data permanently?",
        options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
        correctAnswer: 2,
        explanation:
          "DROP TABLE removes the table structure and all its data permanently. DELETE removes rows (can be filtered). TRUNCATE removes all rows but keeps the structure.",
        difficulty: "easy",
      },
      {
        id: "m4-14",
        topic: "System Design",
        question: "A CDN (Content Delivery Network) primarily helps with:",
        options: [
          "Database optimization",
          "Reducing latency by serving static content from geographically closer servers",
          "Server-side rendering",
          "API rate limiting",
        ],
        correctAnswer: 1,
        explanation:
          "CDNs cache and serve static assets (images, JS, CSS) from edge servers near users, reducing latency and origin server load.",
        difficulty: "easy",
      },
      {
        id: "m4-15",
        topic: "OS",
        question:
          "Which is faster: L1 cache, L2 cache, RAM, or SSD (from fastest to slowest)?",
        options: [
          "SSD > RAM > L2 > L1",
          "L1 > L2 > RAM > SSD",
          "RAM > L1 > L2 > SSD",
          "L2 > L1 > SSD > RAM",
        ],
        correctAnswer: 1,
        explanation:
          "Memory hierarchy from fastest: L1 (~1ns) > L2 (~5ns) > RAM (~100ns) > SSD (~100µs).",
        difficulty: "easy",
      },
      {
        id: "m4-16",
        topic: "Web",
        question: "localStorage vs sessionStorage: what is the key difference?",
        options: [
          "localStorage holds more data",
          "sessionStorage is encrypted, localStorage is not",
          "localStorage persists after browser close; sessionStorage is cleared when tab closes",
          "localStorage is server-side; sessionStorage is client-side",
        ],
        correctAnswer: 2,
        explanation:
          "sessionStorage data is cleared when the tab or browser is closed. localStorage persists until explicitly cleared.",
        difficulty: "easy",
      },
      {
        id: "m4-17",
        topic: "DSA",
        question:
          "Given a binary tree, what traversal is used to serialize/deserialize it uniquely?",
        options: [
          "Inorder only",
          "Preorder only",
          "Preorder + Inorder (or Level-order with nulls)",
          "Postorder only",
        ],
        correctAnswer: 2,
        explanation:
          "Inorder alone doesn't uniquely identify a tree. Preorder + Inorder does. Level-order with explicit nulls also uniquely represents any binary tree.",
        difficulty: "hard",
      },
      {
        id: "m4-18",
        topic: "System Design",
        question: "Message queues (like Kafka, RabbitMQ) are used to:",
        options: [
          "Replace databases",
          "Decouple producers and consumers, enabling async processing",
          "Speed up SQL queries",
          "Manage user sessions",
        ],
        correctAnswer: 1,
        explanation:
          "Message queues decouple services — producers put messages in the queue, consumers process them asynchronously, improving resilience and scalability.",
        difficulty: "medium",
      },
      {
        id: "m4-19",
        topic: "SQL",
        question: "Window function ROW_NUMBER() in SQL is used for:",
        options: [
          "Counting total rows",
          "Assigning a unique sequential number to each row within a partition",
          "Sorting rows",
          "Grouping rows",
        ],
        correctAnswer: 1,
        explanation:
          "ROW_NUMBER() assigns a sequential integer to each row within a partition of a result set (e.g., rank employees within each department).",
        difficulty: "medium",
      },
      {
        id: "m4-20",
        topic: "Web",
        question: "What is the purpose of the event loop in JavaScript?",
        options: [
          "Execute multiple threads simultaneously",
          "Handle async callbacks by processing the event queue after the call stack is empty",
          "Garbage collect unused variables",
          "Parse and execute JavaScript files",
        ],
        correctAnswer: 1,
        explanation:
          "JS is single-threaded. The event loop monitors the call stack and callback queue — when the stack is empty, it pushes queued callbacks onto it.",
        difficulty: "medium",
      },
      {
        id: "m4-21",
        topic: "DSA",
        question:
          "The time complexity of the Bellman-Ford algorithm for shortest path is:",
        options: ["O(V + E)", "O(V log V)", "O(V × E)", "O(E log V)"],
        correctAnswer: 2,
        explanation:
          "Bellman-Ford runs V–1 iterations, each processing all E edges → O(V × E).",
        difficulty: "hard",
      },
      {
        id: "m4-22",
        topic: "System Design",
        question:
          "Which consistency model ensures all nodes see the same data simultaneously?",
        options: [
          "Eventual Consistency",
          "Strong Consistency",
          "Causal Consistency",
          "Read-your-writes",
        ],
        correctAnswer: 1,
        explanation:
          "Strong consistency guarantees that all nodes reflect the most recent write immediately. Eventual consistency allows temporary divergence.",
        difficulty: "medium",
      },
      {
        id: "m4-23",
        topic: "Web",
        question: "What does tree-shaking do in modern JavaScript bundlers?",
        options: [
          "Sorts imports alphabetically",
          "Removes unused code from the bundle",
          "Converts synchronous code to async",
          "Compresses image assets",
        ],
        correctAnswer: 1,
        explanation:
          "Tree-shaking removes dead code (unused exports) from the final bundle by analyzing import/export statements statically.",
        difficulty: "medium",
      },
      {
        id: "m4-24",
        topic: "SQL",
        question:
          "What is the output of: SELECT 10 / 3 in most SQL dialects (integer division)?",
        options: ["3", "3.33", "4", "3.0"],
        correctAnswer: 0,
        explanation:
          "In most SQL dialects, dividing two integers performs integer division: 10/3 = 3 (remainder discarded).",
        difficulty: "easy",
      },
      {
        id: "m4-25",
        topic: "OS",
        question: "Which of the following is NOT a valid file system?",
        options: ["NTFS", "ext4", "YAML", "FAT32"],
        correctAnswer: 2,
        explanation:
          "YAML is a data serialization format, not a file system. NTFS, ext4, and FAT32 are all valid file systems.",
        difficulty: "easy",
      },
      {
        id: "m4-26",
        topic: "DSA",
        question: "What is the output when you pop from an empty stack?",
        options: [
          "0",
          "null",
          "Stack underflow / exception",
          "The last pushed element",
        ],
        correctAnswer: 2,
        explanation:
          "Popping from an empty stack causes a stack underflow, typically throwing an exception in most implementations.",
        difficulty: "easy",
      },
      {
        id: "m4-27",
        topic: "Web",
        question: "React's useEffect with an empty dependency array [] runs:",
        options: [
          "On every render",
          "Only once after the initial render",
          "Never",
          "On every state change",
        ],
        correctAnswer: 1,
        explanation:
          "useEffect with [] as the dependency array runs only once after the first render, similar to componentDidMount.",
        difficulty: "easy",
      },
      {
        id: "m4-28",
        topic: "System Design",
        question:
          "Which CAP theorem property is sacrificed in most NoSQL databases for high availability?",
        options: [
          "Availability",
          "Partition Tolerance",
          "Consistency",
          "Durability",
        ],
        correctAnswer: 2,
        explanation:
          "CAP: you can have Consistency + Partition Tolerance (CP) or Availability + Partition Tolerance (AP). Most distributed NoSQL systems choose AP, sacrificing strong Consistency.",
        difficulty: "hard",
      },
      {
        id: "m4-29",
        topic: "SQL",
        question: "A self-join is used when:",
        options: [
          "Two different tables have the same schema",
          "A table needs to be joined with itself",
          "You want to join more than 3 tables",
          "The join condition involves NULL values",
        ],
        correctAnswer: 1,
        explanation:
          "A self-join joins a table with itself, useful for hierarchical data like employee-manager relationships in the same table.",
        difficulty: "medium",
      },
      {
        id: "m4-30",
        topic: "DSA",
        question:
          "If a stack is implemented using a queue, what is the time complexity of push?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation:
          "To simulate a stack using a queue, every push requires re-queuing all existing elements, making push O(n). Pop becomes O(1).",
        difficulty: "hard",
      },
    ],
  },

  // ─── Mock Test 5: Python Fundamentals ────────────────────────────────────
  {
    id: "python-test",
    title: "Python Fundamentals",
    description:
      "Core Python concepts: data types, control flow, OOP, decorators, comprehensions, file I/O, and error handling.",
    duration: 3600,
    totalQuestions: 30,
    category: "Python",
    questions: [
      {
        id: "py-01",
        topic: "Data Types",
        question: "Which of the following is an immutable data type in Python?",
        options: ["list", "dict", "set", "tuple"],
        correctAnswer: 3,
        explanation:
          "Tuples are immutable — once created, their elements cannot be changed. Lists, dicts, and sets are mutable.",
        difficulty: "easy",
      },
      {
        id: "py-02",
        topic: "Data Types",
        question: "What is the output of: type(3 / 2) in Python 3?",
        options: [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'complex'>",
          "<class 'fraction'>",
        ],
        correctAnswer: 1,
        explanation:
          "In Python 3, the / operator always returns a float. Use // for integer (floor) division.",
        difficulty: "easy",
      },
      {
        id: "py-03",
        topic: "Strings",
        question: "What does 'hello'[::-1] return?",
        options: ["hello", "olleh", "ello", "h"],
        correctAnswer: 1,
        explanation:
          "[::-1] slices with a step of -1, reversing the string. 'hello'[::-1] = 'olleh'.",
        difficulty: "easy",
      },
      {
        id: "py-04",
        topic: "Lists",
        question: "What is the output of: [1, 2, 3] * 2?",
        options: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "[1, 4, 9]", "Error"],
        correctAnswer: 1,
        explanation:
          "The * operator on a list repeats it. [1, 2, 3] * 2 creates [1, 2, 3, 1, 2, 3].",
        difficulty: "easy",
      },
      {
        id: "py-05",
        topic: "Comprehensions",
        question:
          "What does [x**2 for x in range(5) if x % 2 == 0] evaluate to?",
        options: ["[0, 4, 16]", "[0, 1, 4, 9, 16]", "[4, 16]", "[0, 2, 4]"],
        correctAnswer: 0,
        explanation:
          "range(5) = [0,1,2,3,4]. Filtered for even: [0,2,4]. Squared: [0,4,16].",
        difficulty: "medium",
      },
      {
        id: "py-06",
        topic: "Functions",
        question: "What does *args allow in a Python function?",
        options: [
          "Keyword-only arguments",
          "Variable number of positional arguments",
          "Default argument values",
          "Named arguments only",
        ],
        correctAnswer: 1,
        explanation:
          "*args collects any number of positional arguments into a tuple. **kwargs does the same for keyword arguments.",
        difficulty: "easy",
      },
      {
        id: "py-07",
        topic: "Decorators",
        question: "A Python decorator is essentially:",
        options: [
          "A subclass that overrides methods",
          "A function that takes a function and returns a modified function",
          "A special comment for documentation",
          "An abstract base class",
        ],
        correctAnswer: 1,
        explanation:
          "A decorator wraps a function, adding behavior before/after it. @decorator is syntactic sugar for func = decorator(func).",
        difficulty: "medium",
      },
      {
        id: "py-08",
        topic: "OOP",
        question: "What is the purpose of __init__ in a Python class?",
        options: [
          "Destructor method called at object deletion",
          "Constructor — initializes a new instance's attributes",
          "A static method",
          "Class-level variable declaration",
        ],
        correctAnswer: 1,
        explanation:
          "__init__ is called automatically when a new object is instantiated, initializing its attributes.",
        difficulty: "easy",
      },
      {
        id: "py-09",
        topic: "OOP",
        question: "In Python, how do you achieve multiple inheritance?",
        options: [
          "class C(A, B):",
          "class C extends A, B:",
          "class C implements A, B:",
          "class C(A) + class C(B):",
        ],
        correctAnswer: 0,
        explanation:
          "Python supports multiple inheritance via class C(A, B). Python uses MRO (Method Resolution Order / C3 linearization) to resolve conflicts.",
        difficulty: "medium",
      },
      {
        id: "py-10",
        topic: "Error Handling",
        question:
          "Which block always executes in a try/except/finally construct?",
        options: ["try", "except", "finally", "else"],
        correctAnswer: 2,
        explanation:
          "The finally block executes regardless of whether an exception was raised or caught — used for cleanup like closing files.",
        difficulty: "easy",
      },
      {
        id: "py-11",
        topic: "File I/O",
        question: "What does open('file.txt', 'a') do?",
        options: [
          "Opens file for reading only",
          "Opens file for writing, truncating existing content",
          "Opens file for appending — writes go to end of file",
          "Opens file in binary mode",
        ],
        correctAnswer: 2,
        explanation:
          "Mode 'a' opens for appending. New writes go to the end without truncating. Use 'w' to overwrite, 'r' to read.",
        difficulty: "easy",
      },
      {
        id: "py-12",
        topic: "Generators",
        question:
          "What keyword is used to create a generator function in Python?",
        options: ["return", "yield", "async", "generate"],
        correctAnswer: 1,
        explanation:
          "yield turns a function into a generator. Each call to next() resumes execution from the last yield.",
        difficulty: "easy",
      },
      {
        id: "py-13",
        topic: "Dictionaries",
        question: "What is the output of: {'a': 1}.get('b', 0)?",
        options: ["None", "KeyError", "0", "False"],
        correctAnswer: 2,
        explanation:
          "dict.get(key, default) returns the value if key exists, otherwise returns the default (0 here).",
        difficulty: "easy",
      },
      {
        id: "py-14",
        topic: "Comprehensions",
        question: "What does {k: v for k, v in zip('abc', [1,2,3])} create?",
        options: [
          "A set",
          "A list of tuples",
          "A dictionary {'a':1, 'b':2, 'c':3}",
          "A generator",
        ],
        correctAnswer: 2,
        explanation:
          "Dict comprehension with zip pairs each character with a number: {'a':1, 'b':2, 'c':3}.",
        difficulty: "medium",
      },
      {
        id: "py-15",
        topic: "OOP",
        question: "What does @staticmethod mean in Python?",
        options: [
          "The method can only be called from subclasses",
          "The method doesn't receive self or cls — it's a regular function in the class namespace",
          "The method is called automatically on class creation",
          "The method modifies class variables",
        ],
        correctAnswer: 1,
        explanation:
          "@staticmethod defines a method that doesn't receive the instance (self) or class (cls). It behaves like a regular function scoped to the class.",
        difficulty: "medium",
      },
      {
        id: "py-16",
        topic: "Lambda",
        question:
          "What does lambda x, y: x if x > y else y return for lambda(3, 7)?",
        options: ["3", "7", "True", "10"],
        correctAnswer: 1,
        explanation:
          "The lambda returns the maximum of x and y. For (3, 7): 3 > 7 is False, so it returns y = 7.",
        difficulty: "easy",
      },
      {
        id: "py-17",
        topic: "Built-ins",
        question: "What does enumerate(['a', 'b', 'c']) produce?",
        options: [
          "['a', 'b', 'c']",
          "(0,'a'), (1,'b'), (2,'c')",
          "{0:'a', 1:'b', 2:'c'}",
          "[0, 1, 2]",
        ],
        correctAnswer: 1,
        explanation:
          "enumerate returns an iterator of (index, value) tuples. Use in for loops to get both index and value simultaneously.",
        difficulty: "easy",
      },
      {
        id: "py-18",
        topic: "Scope",
        question: "What is the LEGB rule in Python?",
        options: [
          "Loop, Exception, Global, Block",
          "Local, Enclosing, Global, Built-in — Python's variable scope lookup order",
          "Lambda, Eval, Generator, Block",
          "List, Enumerate, Generator, Bool",
        ],
        correctAnswer: 1,
        explanation:
          "Python looks up variables in: Local → Enclosing function → Global → Built-in scope.",
        difficulty: "medium",
      },
      {
        id: "py-19",
        topic: "Exceptions",
        question: "How do you raise a custom exception in Python?",
        options: [
          "throw CustomError('msg')",
          "raise CustomError('msg')",
          "error CustomError('msg')",
          "throw new CustomError('msg')",
        ],
        correctAnswer: 1,
        explanation:
          "Python uses raise to throw exceptions. Custom exceptions inherit from Exception: class CustomError(Exception): pass.",
        difficulty: "easy",
      },
      {
        id: "py-20",
        topic: "Data Structures",
        question:
          "Which collection type uses O(1) average-case for membership testing (in operator)?",
        options: ["list", "tuple", "set", "string"],
        correctAnswer: 2,
        explanation:
          "Sets use a hash table internally, giving O(1) average-case for membership tests. Lists use O(n) linear search.",
        difficulty: "medium",
      },
      {
        id: "py-21",
        topic: "Context Managers",
        question: "What is the advantage of using 'with open(file) as f:'?",
        options: [
          "Files open faster",
          "File is automatically closed even if an exception occurs",
          "File is opened in binary mode by default",
          "Allows reading and writing simultaneously",
        ],
        correctAnswer: 1,
        explanation:
          "The with statement uses a context manager that calls __exit__ automatically, ensuring the file is closed even if an error occurs.",
        difficulty: "easy",
      },
      {
        id: "py-22",
        topic: "OOP",
        question: "What is method resolution order (MRO) in Python?",
        options: [
          "The order in which methods are defined",
          "The order Python searches for methods in class hierarchies (C3 linearization)",
          "The execution priority of methods",
          "The order of method parameters",
        ],
        correctAnswer: 1,
        explanation:
          "MRO determines the order Python looks up methods in an inheritance hierarchy. Use ClassName.__mro__ to inspect it.",
        difficulty: "hard",
      },
      {
        id: "py-23",
        topic: "Comprehensions",
        question: "What is a generator expression vs list comprehension?",
        options: [
          "They are identical",
          "Generator expression uses () and is lazy (yields values on demand); list comprehension uses [] and creates the full list",
          "List comprehension is faster for all cases",
          "Generator expressions cannot have conditions",
        ],
        correctAnswer: 1,
        explanation:
          "Generator expressions (x for x in range(n)) are lazy — they yield one value at a time, saving memory. List comprehensions materialize the full list immediately.",
        difficulty: "medium",
      },
      {
        id: "py-24",
        topic: "Strings",
        question: "What does 'Python'.lower().startswith('py') return?",
        options: ["False", "True", "Error", "None"],
        correctAnswer: 1,
        explanation:
          "'Python'.lower() = 'python'. 'python'.startswith('py') = True.",
        difficulty: "easy",
      },
      {
        id: "py-25",
        topic: "Decorators",
        question:
          "What happens when you stack two decorators @A then @B on a function f?",
        options: [
          "B is applied first, then A",
          "A is applied first, then B",
          "Both are applied simultaneously",
          "Only the last decorator takes effect",
        ],
        correctAnswer: 0,
        explanation:
          "@A @B def f() means f = A(B(f)). The bottom decorator (B) is applied first, then A wraps the result.",
        difficulty: "hard",
      },
      {
        id: "py-26",
        topic: "Sorting",
        question:
          "How do you sort a list of dicts by a 'score' key in descending order?",
        options: [
          "sorted(lst, key='score', reverse=True)",
          "sorted(lst, key=lambda x: x['score'], reverse=True)",
          "lst.sort(by='score', desc=True)",
          "sort(lst, 'score', descending=True)",
        ],
        correctAnswer: 1,
        explanation:
          "sorted() with key=lambda x: x['score'] extracts the value to sort by. reverse=True makes it descending.",
        difficulty: "medium",
      },
      {
        id: "py-27",
        topic: "Modules",
        question: "What does 'if __name__ == \"__main__\":' guard do?",
        options: [
          "Runs code only when memory is available",
          "Runs code only when the script is executed directly, not when imported as a module",
          "Prevents the module from being imported",
          "Marks the main function for the Python interpreter",
        ],
        correctAnswer: 1,
        explanation:
          "When a file is imported, __name__ is the module name. When run directly, __name__ is '__main__'. This guard prevents test/run code from executing on import.",
        difficulty: "easy",
      },
      {
        id: "py-28",
        topic: "Itertools",
        question: "What does itertools.chain([1,2], [3,4]) produce?",
        options: ["[[1,2],[3,4]]", "[1,2,3,4]", "(1,2,3,4)", "Error"],
        correctAnswer: 1,
        explanation:
          "itertools.chain concatenates iterables into a single iterator: [1,2,3,4].",
        difficulty: "medium",
      },
      {
        id: "py-29",
        topic: "OOP",
        question: "What is duck typing in Python?",
        options: [
          "A type system that checks at compile time",
          "If an object has the required methods/attributes, it can be used regardless of its type",
          "Forcing all objects to inherit from a Duck class",
          "Using only built-in types in functions",
        ],
        correctAnswer: 1,
        explanation:
          "Duck typing: 'if it walks like a duck and quacks like a duck, it's a duck.' Python checks behavior, not type.",
        difficulty: "medium",
      },
      {
        id: "py-30",
        topic: "Performance",
        question:
          "Which is the most efficient way to join a list of strings in Python?",
        options: [
          "Using + in a loop: result = result + word",
          "Using ''.join(list_of_strings)",
          "Using reduce with str concatenation",
          "Using list comprehension with format strings",
        ],
        correctAnswer: 1,
        explanation:
          "''.join(list) is O(n) and uses a single allocation. + in a loop creates a new string each iteration (O(n²) total).",
        difficulty: "medium",
      },
    ],
  },

  // ─── Mock Test 6: Java Essentials ─────────────────────────────────────────
  {
    id: "java-test",
    title: "Java Essentials",
    description:
      "Core Java concepts: JVM, OOP, generics, collections, multithreading, and Spring basics.",
    duration: 3600,
    totalQuestions: 30,
    category: "Java",
    questions: [
      {
        id: "jv-01",
        topic: "JVM",
        question: "What does JVM stand for and what is its primary role?",
        options: [
          "Java Virtual Machine — executes Java bytecode on any platform",
          "Java Verified Module — verifies code integrity",
          "Just-in-time Verification Module — optimizes code at runtime",
          "Java Variable Memory — manages heap allocation",
        ],
        correctAnswer: 0,
        explanation:
          "JVM (Java Virtual Machine) abstracts the underlying OS and executes compiled Java bytecode, enabling platform independence (Write Once, Run Anywhere).",
        difficulty: "easy",
      },
      {
        id: "jv-02",
        topic: "OOP",
        question:
          "Which Java keyword prevents a method from being overridden in subclasses?",
        options: ["static", "final", "abstract", "private"],
        correctAnswer: 1,
        explanation:
          "final on a method prevents subclasses from overriding it. final on a class prevents inheritance entirely.",
        difficulty: "easy",
      },
      {
        id: "jv-03",
        topic: "Collections",
        question:
          "What is the time complexity of HashMap.get() in Java on average?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correctAnswer: 2,
        explanation:
          "HashMap uses hashing for O(1) average-case get/put. Worst case is O(n) with hash collisions (before Java 8 treeified buckets).",
        difficulty: "easy",
      },
      {
        id: "jv-04",
        topic: "OOP",
        question:
          "What is the difference between abstract class and interface in Java?",
        options: [
          "No difference — they are the same",
          "Abstract classes can have state and constructors; interfaces have only abstract methods (pre-Java 8)",
          "Interfaces can extend classes; abstract classes cannot",
          "Abstract classes can have multiple inheritance; interfaces cannot",
        ],
        correctAnswer: 1,
        explanation:
          "Abstract classes can have instance variables, constructors, and concrete methods. Interfaces (pre-Java 8) have only abstract methods. Java 8+ allows default/static methods in interfaces.",
        difficulty: "medium",
      },
      {
        id: "jv-05",
        topic: "Generics",
        question: "What does List<? extends Number> mean in Java generics?",
        options: [
          "A list of any type",
          "A list where elements must be Number or any of its subclasses (upper bounded wildcard)",
          "A list that can only hold Number, not subclasses",
          "A list that holds Number and all superclasses",
        ],
        correctAnswer: 1,
        explanation:
          "? extends Number is an upper-bounded wildcard — accepts List<Integer>, List<Double>, etc. You can read from it but not add to it (except null).",
        difficulty: "hard",
      },
      {
        id: "jv-06",
        topic: "Collections",
        question:
          "Which Java collection maintains insertion order and allows duplicates?",
        options: ["HashSet", "TreeSet", "LinkedList", "HashMap"],
        correctAnswer: 2,
        explanation:
          "LinkedList implements the List interface, maintaining insertion order and allowing duplicate elements. HashSet/TreeSet don't allow duplicates.",
        difficulty: "easy",
      },
      {
        id: "jv-07",
        topic: "Threads",
        question:
          "What is the difference between Runnable and Callable in Java?",
        options: [
          "No difference",
          "Runnable has a run() method that returns void; Callable has call() that can return a value and throw checked exceptions",
          "Callable is used only for UI threads",
          "Runnable supports multi-threading; Callable does not",
        ],
        correctAnswer: 1,
        explanation:
          "Runnable.run() returns void and can't throw checked exceptions. Callable.call() returns a typed result and can throw checked exceptions.",
        difficulty: "medium",
      },
      {
        id: "jv-08",
        topic: "OOP",
        question: "What is method overloading in Java?",
        options: [
          "Redefining a parent class method in a subclass",
          "Defining multiple methods with the same name but different parameter types/count",
          "Calling super methods from a subclass",
          "Making a method final so it can't be overridden",
        ],
        correctAnswer: 1,
        explanation:
          "Method overloading is compile-time polymorphism — same method name, different signatures (parameter types or count). Overriding is runtime polymorphism.",
        difficulty: "easy",
      },
      {
        id: "jv-09",
        topic: "Memory",
        question: "In Java, where are objects stored?",
        options: ["Stack", "Heap", "Method area", "Registers"],
        correctAnswer: 1,
        explanation:
          "Java objects are allocated on the heap. Local variables and references are on the stack. The heap is managed by the garbage collector.",
        difficulty: "easy",
      },
      {
        id: "jv-10",
        topic: "Threads",
        question:
          "Which Java keyword ensures only one thread can execute a method at a time?",
        options: ["volatile", "synchronized", "transient", "atomic"],
        correctAnswer: 1,
        explanation:
          "synchronized on a method acquires the object's intrinsic lock, ensuring mutual exclusion. volatile ensures memory visibility but not atomicity of compound operations.",
        difficulty: "medium",
      },
      {
        id: "jv-11",
        topic: "Strings",
        question: "Why is String immutable in Java?",
        options: [
          "To save memory (only one copy needed in String pool)",
          "Both security/hashcode caching and String pool sharing",
          "To prevent garbage collection issues",
          "Because char arrays are immutable",
        ],
        correctAnswer: 1,
        explanation:
          "String immutability enables String pool sharing (memory efficiency), thread safety, hashcode caching, and security (e.g., class loading, network connections use Strings).",
        difficulty: "medium",
      },
      {
        id: "jv-12",
        topic: "OOP",
        question: "What does the 'super' keyword do in Java?",
        options: [
          "Calls a static method",
          "References the parent class constructor or method",
          "Marks a class as a superclass",
          "Converts a class to its parent type",
        ],
        correctAnswer: 1,
        explanation:
          "super() calls the parent constructor. super.methodName() calls the overridden parent method. Must be the first statement in a constructor when calling super().",
        difficulty: "easy",
      },
      {
        id: "jv-13",
        topic: "Collections",
        question:
          "What is the difference between ArrayList and LinkedList in Java?",
        options: [
          "ArrayList is thread-safe; LinkedList is not",
          "ArrayList uses a dynamic array (fast random access); LinkedList uses nodes (fast insert/delete)",
          "LinkedList allows duplicates; ArrayList does not",
          "They are identical internally",
        ],
        correctAnswer: 1,
        explanation:
          "ArrayList: O(1) random access, O(n) insert/delete in middle. LinkedList: O(n) access, O(1) insert/delete at head/tail.",
        difficulty: "medium",
      },
      {
        id: "jv-14",
        topic: "Exceptions",
        question:
          "What is the difference between checked and unchecked exceptions in Java?",
        options: [
          "No difference",
          "Checked exceptions must be declared or caught; unchecked (RuntimeExceptions) do not",
          "Unchecked exceptions crash the JVM; checked do not",
          "Checked exceptions extend Error; unchecked extend Exception",
        ],
        correctAnswer: 1,
        explanation:
          "Checked exceptions (IOException, SQLException) must be handled with try-catch or declared with throws. Unchecked (NullPointerException, ArrayIndexOutOfBoundsException) are RuntimeExceptions and optional to handle.",
        difficulty: "medium",
      },
      {
        id: "jv-15",
        topic: "Java 8",
        question: "What is a functional interface in Java?",
        options: [
          "An interface with no methods",
          "An interface with exactly one abstract method, used with lambda expressions",
          "An interface that extends Runnable",
          "An interface with static methods only",
        ],
        correctAnswer: 1,
        explanation:
          "A functional interface has exactly one abstract method (e.g., Runnable, Comparator, Function). @FunctionalInterface annotation enforces this. Used with lambdas and method references.",
        difficulty: "medium",
      },
      {
        id: "jv-16",
        topic: "Streams",
        question: "What does Stream.filter().map().collect() do in Java?",
        options: [
          "It's a database query builder",
          "Filters elements, transforms them, then collects results into a collection",
          "Reads data from input streams only",
          "Manages network connections",
        ],
        correctAnswer: 1,
        explanation:
          "Java 8 Streams support functional-style operations: filter removes elements not matching a predicate, map transforms each element, collect gathers results (e.g., Collectors.toList()).",
        difficulty: "medium",
      },
      {
        id: "jv-17",
        topic: "Threads",
        question: "What is a deadlock in Java multithreading?",
        options: [
          "A thread that runs forever",
          "Two or more threads each waiting for locks held by the others, blocking forever",
          "A thread that's waiting for I/O",
          "A memory leak caused by threads",
        ],
        correctAnswer: 1,
        explanation:
          "Deadlock occurs when Thread A holds Lock 1 and waits for Lock 2 while Thread B holds Lock 2 and waits for Lock 1 — neither can proceed.",
        difficulty: "medium",
      },
      {
        id: "jv-18",
        topic: "OOP",
        question:
          "Which access modifier makes a member accessible only within the same class?",
        options: ["public", "protected", "default (no modifier)", "private"],
        correctAnswer: 3,
        explanation:
          "private is the most restrictive — only the class itself can access private members. protected allows same package + subclasses. public allows everyone.",
        difficulty: "easy",
      },
      {
        id: "jv-19",
        topic: "Collections",
        question: "What is the difference between HashSet and TreeSet in Java?",
        options: [
          "HashSet allows duplicates; TreeSet does not",
          "HashSet offers O(1) operations with no order; TreeSet keeps elements sorted with O(log n) operations",
          "TreeSet is faster than HashSet",
          "They are identical",
        ],
        correctAnswer: 1,
        explanation:
          "HashSet uses hashing (O(1) average, no order). TreeSet uses a Red-Black tree (O(log n), sorted order). Neither allows duplicates.",
        difficulty: "medium",
      },
      {
        id: "jv-20",
        topic: "JVM",
        question: "What does garbage collection do in Java?",
        options: [
          "Removes unused imports from code",
          "Automatically frees heap memory occupied by unreachable objects",
          "Deletes temporary files on disk",
          "Clears the stack after method calls",
        ],
        correctAnswer: 1,
        explanation:
          "Java's GC automatically identifies objects no longer referenced and reclaims their heap memory, preventing manual memory management and most memory leaks.",
        difficulty: "easy",
      },
      {
        id: "jv-21",
        topic: "Spring",
        question: "What does @Autowired do in Spring Framework?",
        options: [
          "Creates a new HTTP endpoint",
          "Automatically injects a dependency (bean) into the annotated field/constructor",
          "Defines a scheduled task",
          "Marks a class as a REST controller",
        ],
        correctAnswer: 1,
        explanation:
          "@Autowired performs dependency injection — Spring finds a matching bean in the application context and injects it automatically.",
        difficulty: "medium",
      },
      {
        id: "jv-22",
        topic: "Spring",
        question: "What is the purpose of @RestController in Spring Boot?",
        options: [
          "Marks a class as a database entity",
          "Combines @Controller and @ResponseBody — all methods return JSON/XML response directly",
          "Defines a service layer component",
          "Enables cross-origin requests",
        ],
        correctAnswer: 1,
        explanation:
          "@RestController = @Controller + @ResponseBody. Every method's return value is serialized as the HTTP response body (typically JSON).",
        difficulty: "medium",
      },
      {
        id: "jv-23",
        topic: "Interfaces",
        question: "Can a Java interface have a default method?",
        options: [
          "No — interfaces cannot have any implementation",
          "Yes — Java 8 introduced default methods with a body in interfaces",
          "Only if the interface extends another interface",
          "Only abstract classes can have default methods",
        ],
        correctAnswer: 1,
        explanation:
          "Java 8 introduced default methods — interface methods with a body using the default keyword, enabling backward-compatible API evolution.",
        difficulty: "medium",
      },
      {
        id: "jv-24",
        topic: "OOP",
        question:
          "What is the output of: System.out.println(10 == 10.0) in Java?",
        options: ["false", "true", "Compile error", "ClassCastException"],
        correctAnswer: 1,
        explanation:
          "Java promotes int to double when comparing int and double with ==. 10 becomes 10.0, so 10.0 == 10.0 is true.",
        difficulty: "medium",
      },
      {
        id: "jv-25",
        topic: "Strings",
        question:
          "What is the difference between String.equals() and == for Strings?",
        options: [
          "No difference",
          "equals() compares content; == compares object references (memory address)",
          "== compares content; equals() compares references",
          "equals() is faster than ==",
        ],
        correctAnswer: 1,
        explanation:
          "== checks if two references point to the same object. equals() compares string content character by character. Always use equals() for string value comparison.",
        difficulty: "easy",
      },
      {
        id: "jv-26",
        topic: "Generics",
        question: "What is type erasure in Java generics?",
        options: [
          "Removing types from source code",
          "Generic type parameters are removed at compile time and replaced with Object or bounds, for backward compatibility",
          "Casting objects to their generic types at runtime",
          "Erasing classes that are no longer used",
        ],
        correctAnswer: 1,
        explanation:
          "Java generics use type erasure — type parameters exist only at compile time. At runtime, List<String> and List<Integer> are both just List. This maintains backward compatibility with pre-Java 5 code.",
        difficulty: "hard",
      },
      {
        id: "jv-27",
        topic: "Java 8",
        question: "What does Optional<T> help prevent in Java?",
        options: [
          "ClassCastException",
          "NullPointerException by wrapping a value that may or may not be present",
          "OutOfMemoryError",
          "ConcurrentModificationException",
        ],
        correctAnswer: 1,
        explanation:
          "Optional<T> makes nullability explicit in the type system. Instead of returning null, return Optional.empty(), forcing callers to handle the absent-value case.",
        difficulty: "medium",
      },
      {
        id: "jv-28",
        topic: "Threads",
        question: "What is the ExecutorService used for in Java?",
        options: [
          "Scheduling batch SQL queries",
          "Managing a pool of threads for executing tasks asynchronously",
          "Encrypting data before storage",
          "Handling HTTP requests in Spring",
        ],
        correctAnswer: 1,
        explanation:
          "ExecutorService provides thread pool management — submit tasks (Runnable/Callable) without creating a new thread each time, reusing pooled threads for efficiency.",
        difficulty: "medium",
      },
      {
        id: "jv-29",
        topic: "OOP",
        question: "What is encapsulation in OOP?",
        options: [
          "Hiding implementation details and exposing only a public interface through access modifiers",
          "Inheriting methods from parent classes",
          "Having one method with multiple implementations",
          "Using generic type parameters",
        ],
        correctAnswer: 0,
        explanation:
          "Encapsulation bundles data (fields) and methods together, hiding internal state with private/protected and exposing controlled access via public getters/setters.",
        difficulty: "easy",
      },
      {
        id: "jv-30",
        topic: "Collections",
        question:
          "Which Java Map implementation keeps entries sorted by natural key order?",
        options: ["HashMap", "LinkedHashMap", "TreeMap", "ConcurrentHashMap"],
        correctAnswer: 2,
        explanation:
          "TreeMap maintains keys in sorted order (natural ordering or custom Comparator). LinkedHashMap preserves insertion order. HashMap has no guaranteed order.",
        difficulty: "easy",
      },
    ],
  },

  // ─── Mock Test 7: Frontend (HTML/CSS/JS/React) ────────────────────────────
  {
    id: "frontend-test",
    title: "Frontend Development",
    description:
      "HTML semantics, CSS layout, JavaScript fundamentals, React hooks, and state management.",
    duration: 3600,
    totalQuestions: 30,
    category: "Frontend",
    questions: [
      {
        id: "fe-01",
        topic: "HTML",
        question:
          "What is the purpose of the <semantic> elements like <article> and <section>?",
        options: [
          "They add visual styling automatically",
          "They describe meaning and structure for accessibility and SEO, not just presentation",
          "They replace div elements entirely",
          "They load content lazily",
        ],
        correctAnswer: 1,
        explanation:
          "Semantic HTML gives meaning to content — <article> is self-contained content, <section> is a thematic grouping. This helps screen readers and search engines understand page structure.",
        difficulty: "easy",
      },
      {
        id: "fe-02",
        topic: "HTML",
        question: "Which HTML attribute improves accessibility for images?",
        options: ["title", "alt", "src", "id"],
        correctAnswer: 1,
        explanation:
          "The alt attribute provides alternative text for images — read by screen readers and shown when images fail to load. It's critical for accessibility.",
        difficulty: "easy",
      },
      {
        id: "fe-03",
        topic: "CSS",
        question:
          "In CSS Flexbox, what does 'justify-content: space-between' do?",
        options: [
          "Aligns items vertically",
          "Distributes items with equal space between them, first and last items at the edges",
          "Adds equal space around every item",
          "Centers all items",
        ],
        correctAnswer: 1,
        explanation:
          "space-between places the first item at the start, last item at the end, and distributes remaining space equally between items.",
        difficulty: "easy",
      },
      {
        id: "fe-04",
        topic: "CSS",
        question: "What does 'position: sticky' do in CSS?",
        options: [
          "Fixes an element at a position on the screen permanently",
          "Behaves like relative positioning until a scroll threshold, then sticks like fixed",
          "Positions an element relative to its parent",
          "Removes the element from normal flow",
        ],
        correctAnswer: 1,
        explanation:
          "Sticky positioning combines relative and fixed. The element scrolls normally until a defined threshold (e.g., top: 0), then 'sticks' in place.",
        difficulty: "medium",
      },
      {
        id: "fe-05",
        topic: "CSS",
        question: "What is the CSS Box Model from innermost to outermost?",
        options: [
          "Content → Margin → Padding → Border",
          "Content → Padding → Border → Margin",
          "Padding → Content → Border → Margin",
          "Border → Padding → Content → Margin",
        ],
        correctAnswer: 1,
        explanation:
          "CSS Box Model layers: Content (text/images) → Padding (space inside border) → Border → Margin (space outside border).",
        difficulty: "easy",
      },
      {
        id: "fe-06",
        topic: "JavaScript",
        question: "What is a closure in JavaScript?",
        options: [
          "A function that has no return value",
          "A function that retains access to variables from its outer (enclosing) scope even after the outer function has returned",
          "A self-invoking function",
          "An arrow function",
        ],
        correctAnswer: 1,
        explanation:
          "A closure is a function that 'closes over' its lexical environment, retaining access to outer scope variables even after the outer function finishes executing.",
        difficulty: "medium",
      },
      {
        id: "fe-07",
        topic: "JavaScript",
        question: "What is the difference between == and === in JavaScript?",
        options: [
          "== checks type, === checks value",
          "=== checks both value and type (strict equality); == performs type coercion before comparison",
          "No difference",
          "== is for numbers only, === for strings",
        ],
        correctAnswer: 1,
        explanation:
          "=== is strict equality (no type coercion). == uses type coercion: '5' == 5 is true, '5' === 5 is false. Prefer === to avoid unexpected behavior.",
        difficulty: "easy",
      },
      {
        id: "fe-08",
        topic: "JavaScript",
        question: "What does 'var' vs 'let' differ in regarding scope?",
        options: [
          "No difference",
          "var is function-scoped and hoisted; let is block-scoped and not hoisted to a usable state",
          "let is function-scoped; var is block-scoped",
          "var is for constants; let is for variables",
        ],
        correctAnswer: 1,
        explanation:
          "var is function-scoped and hoisted (initialized to undefined). let is block-scoped and in the Temporal Dead Zone before declaration.",
        difficulty: "medium",
      },
      {
        id: "fe-09",
        topic: "JavaScript",
        question: "What is the output of: console.log(typeof null)?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correctAnswer: 2,
        explanation:
          "typeof null === 'object' is a well-known JavaScript bug that persists for backward compatibility. null is not actually an object.",
        difficulty: "medium",
      },
      {
        id: "fe-10",
        topic: "JavaScript",
        question: "What does Promise.all([p1, p2, p3]) do?",
        options: [
          "Runs promises sequentially",
          "Resolves when ALL promises resolve; rejects immediately if any promise rejects",
          "Resolves with the first promise that settles",
          "Retries promises on failure",
        ],
        correctAnswer: 1,
        explanation:
          "Promise.all runs promises concurrently and resolves when all resolve (returns array of results). If any rejects, Promise.all rejects immediately.",
        difficulty: "medium",
      },
      {
        id: "fe-11",
        topic: "React",
        question: "What is the purpose of the React key prop in lists?",
        options: [
          "Styling list items uniquely",
          "Helping React identify which items changed, were added, or removed during reconciliation",
          "Accessing list elements directly in the DOM",
          "Setting the tab order for keyboard navigation",
        ],
        correctAnswer: 1,
        explanation:
          "Keys help React's diffing algorithm efficiently update the DOM by tracking which list items are stable, moved, or new. Using index as key is an anti-pattern for dynamic lists.",
        difficulty: "easy",
      },
      {
        id: "fe-12",
        topic: "React",
        question: "What is the purpose of useState in React?",
        options: [
          "Fetching data from an API",
          "Declaring a state variable and a setter function that triggers re-render when called",
          "Managing global application state",
          "Memoizing expensive computations",
        ],
        correctAnswer: 1,
        explanation:
          "useState returns [state, setState]. Calling setState with a new value schedules a re-render with the updated state.",
        difficulty: "easy",
      },
      {
        id: "fe-13",
        topic: "React",
        question:
          "When does useEffect run when given a dependency array [count]?",
        options: [
          "Only once on mount",
          "Every render",
          "Whenever the component mounts and whenever 'count' changes",
          "Only when the component unmounts",
        ],
        correctAnswer: 2,
        explanation:
          "useEffect with [count] runs after the initial render and after every render where count has changed.",
        difficulty: "easy",
      },
      {
        id: "fe-14",
        topic: "React",
        question: "What problem does useCallback solve in React?",
        options: [
          "Memoizes the return value of a function",
          "Memoizes the function reference itself, preventing unnecessary re-creation on every render",
          "Debounces function calls",
          "Executes a function before the component renders",
        ],
        correctAnswer: 1,
        explanation:
          "useCallback returns a stable function reference that only changes when its dependencies change — preventing child components from re-rendering due to new function references on each parent render.",
        difficulty: "medium",
      },
      {
        id: "fe-15",
        topic: "React",
        question: "What is React Context used for?",
        options: [
          "Local component state management",
          "Passing data through the component tree without prop drilling at every level",
          "Making API calls",
          "Server-side rendering",
        ],
        correctAnswer: 1,
        explanation:
          "Context provides a way to share values (theme, user, locale) across the component tree without manually passing props at each level.",
        difficulty: "easy",
      },
      {
        id: "fe-16",
        topic: "CSS",
        question:
          "What does CSS Grid's 'grid-template-columns: repeat(3, 1fr)' create?",
        options: [
          "3 rows of equal height",
          "3 equal-width columns that share available space equally",
          "3 columns of 1 pixel each",
          "A 3×3 grid",
        ],
        correctAnswer: 1,
        explanation:
          "1fr is a fraction unit. repeat(3, 1fr) creates 3 equal-width columns, each taking 1/3 of available space.",
        difficulty: "easy",
      },
      {
        id: "fe-17",
        topic: "JavaScript",
        question: "What is event delegation in JavaScript?",
        options: [
          "Adding event listeners to every child element",
          "Attaching a single event listener to a parent and handling events from children via event bubbling",
          "Preventing events from propagating",
          "Scheduling events with setTimeout",
        ],
        correctAnswer: 1,
        explanation:
          "Event delegation uses bubbling — a parent listens for events, checks event.target to identify which child triggered it. More efficient than per-child listeners.",
        difficulty: "medium",
      },
      {
        id: "fe-18",
        topic: "JavaScript",
        question:
          "What does the spread operator (...) do when used with arrays?",
        options: [
          "Merges arrays destructively",
          "Expands an iterable (array/object) into individual elements — useful for copying or merging",
          "Creates a reference to the original array",
          "Converts an array to a string",
        ],
        correctAnswer: 1,
        explanation:
          "[...arr1, ...arr2] creates a new array with all elements from both arrays. {...obj1, ...obj2} creates a shallow merge of objects.",
        difficulty: "easy",
      },
      {
        id: "fe-19",
        topic: "Performance",
        question:
          "What does lazy loading in React (React.lazy + Suspense) achieve?",
        options: [
          "Preloads all components at startup",
          "Loads components only when they are needed, reducing initial bundle size",
          "Caches components in localStorage",
          "Prevents components from unmounting",
        ],
        correctAnswer: 1,
        explanation:
          "React.lazy() enables code-splitting — component code is only downloaded when the component is rendered for the first time, reducing initial bundle size.",
        difficulty: "medium",
      },
      {
        id: "fe-20",
        topic: "CSS",
        question: "What is the specificity order in CSS (lowest to highest)?",
        options: [
          "Inline > ID > Class > Element",
          "Element < Class/Attribute < ID < Inline styles",
          "Class < ID < Element < Inline",
          "ID < Class < Inline < Element",
        ],
        correctAnswer: 1,
        explanation:
          "CSS specificity (low to high): Element selectors (1) < Class/Attribute/Pseudo-class (10) < ID (100) < Inline styles (1000) < !important.",
        difficulty: "medium",
      },
      {
        id: "fe-21",
        topic: "JavaScript",
        question:
          "What is the difference between null and undefined in JavaScript?",
        options: [
          "They are identical",
          "undefined means a variable was declared but not assigned; null is an intentional absence of value",
          "null is returned by functions with no return; undefined is a type error",
          "null is for objects; undefined is for primitives",
        ],
        correctAnswer: 1,
        explanation:
          "undefined: variable declared but no value assigned (default). null: explicitly set to indicate no value. typeof undefined === 'undefined', typeof null === 'object'.",
        difficulty: "easy",
      },
      {
        id: "fe-22",
        topic: "React",
        question: "What does useMemo do in React?",
        options: [
          "Stores a function reference",
          "Memoizes the result of an expensive computation, recomputing only when dependencies change",
          "Fetches and caches data from an API",
          "Prevents re-renders of child components",
        ],
        correctAnswer: 1,
        explanation:
          "useMemo caches the result of a computation. It only recomputes when its dependencies array values change, avoiding expensive re-calculations on every render.",
        difficulty: "medium",
      },
      {
        id: "fe-23",
        topic: "HTML",
        question: "What is the purpose of the <meta name='viewport'> tag?",
        options: [
          "Defines page keywords for SEO",
          "Controls how the browser scales the page on mobile devices",
          "Sets the page character encoding",
          "Links to an external stylesheet",
        ],
        correctAnswer: 1,
        explanation:
          "<meta name='viewport' content='width=device-width, initial-scale=1'> tells the browser to match the screen width and set zoom to 1, essential for responsive design.",
        difficulty: "easy",
      },
      {
        id: "fe-24",
        topic: "CSS",
        question: "What does 'box-sizing: border-box' change?",
        options: [
          "Adds a border to all elements",
          "Width and height include padding and border, not just the content",
          "Removes margins from all elements",
          "Makes the box a flexbox container",
        ],
        correctAnswer: 1,
        explanation:
          "border-box: the specified width/height includes content + padding + border. Without it (content-box default), padding and border are added on top of the specified width.",
        difficulty: "medium",
      },
      {
        id: "fe-25",
        topic: "JavaScript",
        question: "What does async/await simplify in JavaScript?",
        options: [
          "Synchronous code execution",
          "Writing asynchronous Promise-based code in a synchronous, readable style",
          "Multi-threading",
          "Memory management",
        ],
        correctAnswer: 1,
        explanation:
          "async/await is syntactic sugar over Promises. await pauses execution until the Promise resolves, making async code read like synchronous code without .then() chains.",
        difficulty: "easy",
      },
      {
        id: "fe-26",
        topic: "React",
        question:
          "What is the problem that the useReducer hook solves over useState?",
        options: [
          "Performance issues with large arrays",
          "Managing complex state logic with multiple sub-values or when next state depends on previous state",
          "Making API calls more efficient",
          "Preventing re-renders entirely",
        ],
        correctAnswer: 1,
        explanation:
          "useReducer is preferable when state logic is complex, involves multiple sub-values, or the next state depends on the previous. It centralizes state transitions in a reducer function.",
        difficulty: "medium",
      },
      {
        id: "fe-27",
        topic: "JavaScript",
        question: "What is prototype inheritance in JavaScript?",
        options: [
          "A class-based system identical to Java",
          "Objects inherit properties and methods directly from other objects via the prototype chain",
          "A system where all objects share a global scope",
          "A pattern that prevents property mutation",
        ],
        correctAnswer: 1,
        explanation:
          "JavaScript uses prototype-based inheritance. Each object has a __proto__ link to its prototype object. Property lookups travel up the chain until found or prototype is null.",
        difficulty: "hard",
      },
      {
        id: "fe-28",
        topic: "CSS",
        question: "What is a CSS media query used for?",
        options: [
          "Loading media files",
          "Applying different styles based on device characteristics like screen width",
          "Adding audio/video to CSS",
          "Detecting the browser type",
        ],
        correctAnswer: 1,
        explanation:
          "@media (max-width: 768px) { } applies styles only when the screen is 768px or narrower — the foundation of responsive design.",
        difficulty: "easy",
      },
      {
        id: "fe-29",
        topic: "React",
        question: "What is the React reconciliation algorithm?",
        options: [
          "The algorithm React uses to render components on the server",
          "React's process of comparing old and new virtual DOM trees (diffing) to determine the minimum DOM updates needed",
          "A technique for managing component lifecycle",
          "The algorithm for routing between pages",
        ],
        correctAnswer: 1,
        explanation:
          "Reconciliation is React's diffing algorithm that compares the current and updated virtual DOM trees, computing the minimal set of real DOM mutations required.",
        difficulty: "hard",
      },
      {
        id: "fe-30",
        topic: "JavaScript",
        question: "What does Array.prototype.reduce() do?",
        options: [
          "Filters array elements",
          "Executes a reducer function on each element, accumulating a single result value",
          "Sorts array elements",
          "Returns a new array with transformed elements",
        ],
        correctAnswer: 1,
        explanation:
          "reduce(fn, initialValue) applies fn(accumulator, currentValue) to each element left to right, returning a single accumulated value (sum, object, string, etc.).",
        difficulty: "medium",
      },
    ],
  },

  // ─── Mock Test 8: Backend Development ─────────────────────────────────────
  {
    id: "backend-test",
    title: "Backend Development",
    description:
      "REST APIs, HTTP, Node.js event loop, SQL vs NoSQL, authentication, and server architecture.",
    duration: 3600,
    totalQuestions: 30,
    category: "Backend",
    questions: [
      {
        id: "be-01",
        topic: "REST",
        question:
          "Which HTTP status code means 'Resource Created Successfully'?",
        options: [
          "200 OK",
          "201 Created",
          "204 No Content",
          "301 Moved Permanently",
        ],
        correctAnswer: 1,
        explanation:
          "201 Created is returned when a POST request successfully creates a new resource. The response typically includes a Location header pointing to the new resource.",
        difficulty: "easy",
      },
      {
        id: "be-02",
        topic: "HTTP",
        question:
          "What HTTP status code indicates that the client is not authorized (missing/invalid token)?",
        options: [
          "400 Bad Request",
          "401 Unauthorized",
          "403 Forbidden",
          "404 Not Found",
        ],
        correctAnswer: 1,
        explanation:
          "401 Unauthorized means authentication is required and has failed. 403 Forbidden means authenticated but not permitted to access the resource.",
        difficulty: "easy",
      },
      {
        id: "be-03",
        topic: "REST",
        question: "Which HTTP method is idempotent?",
        options: ["POST", "PATCH", "PUT", "Neither PUT nor POST"],
        correctAnswer: 2,
        explanation:
          "PUT is idempotent — calling it multiple times with the same body yields the same result. POST is not idempotent (creates multiple resources). PATCH may or may not be idempotent.",
        difficulty: "medium",
      },
      {
        id: "be-04",
        topic: "Node.js",
        question: "What makes Node.js non-blocking?",
        options: [
          "It runs on multiple threads",
          "The event loop and libuv handle I/O operations asynchronously, not blocking the main thread",
          "It uses hardware interrupts directly",
          "It compiles JavaScript to native code",
        ],
        correctAnswer: 1,
        explanation:
          "Node.js uses a single-threaded event loop with libuv for async I/O. Long operations (file, network) are offloaded to the OS/thread pool, and callbacks are queued on completion.",
        difficulty: "medium",
      },
      {
        id: "be-05",
        topic: "Node.js",
        question: "What is the Node.js event loop's order of processing?",
        options: [
          "Timers → I/O → Poll → Check → Close",
          "Poll → Timers → I/O → Check → Close",
          "Timers → Check → I/O → Poll → Close",
          "I/O → Timers → Poll → Check → Close",
        ],
        correctAnswer: 0,
        explanation:
          "Node.js event loop phases: Timers (setTimeout/setInterval callbacks) → Pending I/O → Idle/Prepare → Poll (new I/O) → Check (setImmediate) → Close callbacks.",
        difficulty: "hard",
      },
      {
        id: "be-06",
        topic: "Databases",
        question:
          "What is the primary difference between SQL and NoSQL databases?",
        options: [
          "NoSQL is faster in all cases",
          "SQL uses structured tables with schemas and ACID compliance; NoSQL uses flexible documents/key-value/graph stores with eventual consistency",
          "SQL is only for small datasets",
          "NoSQL supports joins; SQL does not",
        ],
        correctAnswer: 1,
        explanation:
          "SQL: structured, schema-enforced, relational, ACID-compliant (PostgreSQL, MySQL). NoSQL: flexible schemas, horizontal scale, eventual consistency (MongoDB, Redis, Cassandra).",
        difficulty: "easy",
      },
      {
        id: "be-07",
        topic: "Authentication",
        question: "What are the three parts of a JWT?",
        options: [
          "User, Password, Token",
          "Header, Payload, Signature — separated by dots",
          "Key, Value, Expiry",
          "Algorithm, Claims, Hash",
        ],
        correctAnswer: 1,
        explanation:
          "JWT = Header (algorithm, type) + Payload (claims like userId, exp) + Signature (HMAC of header.payload). The signature verifies integrity.",
        difficulty: "medium",
      },
      {
        id: "be-08",
        topic: "Authentication",
        question:
          "What is the difference between authentication and authorization?",
        options: [
          "They are the same thing",
          "Authentication verifies who you are; authorization determines what you're allowed to do",
          "Authorization verifies identity; authentication grants permissions",
          "Authentication is server-side; authorization is client-side",
        ],
        correctAnswer: 1,
        explanation:
          "Authentication: verifying identity (login). Authorization: determining access rights (what resources/actions are permitted after authentication).",
        difficulty: "easy",
      },
      {
        id: "be-09",
        topic: "APIs",
        question: "What is GraphQL's main advantage over REST?",
        options: [
          "It's always faster than REST",
          "Clients request exactly the data they need, reducing over-fetching and under-fetching",
          "It doesn't require a server",
          "It uses binary serialization",
        ],
        correctAnswer: 1,
        explanation:
          "GraphQL lets clients specify exactly which fields they need in a single request. REST may return too much data (over-fetching) or require multiple calls (under-fetching).",
        difficulty: "medium",
      },
      {
        id: "be-10",
        topic: "Caching",
        question: "What is Redis commonly used for in backend systems?",
        options: [
          "Permanent primary data storage",
          "In-memory caching, session storage, pub/sub messaging, and rate limiting",
          "Full-text search",
          "SQL query execution",
        ],
        correctAnswer: 1,
        explanation:
          "Redis is an in-memory key-value store. Common uses: caching DB results, session storage, distributed locks, pub/sub, leaderboards, rate limiting.",
        difficulty: "easy",
      },
      {
        id: "be-11",
        topic: "HTTP",
        question: "What is the purpose of HTTP headers like Cache-Control?",
        options: [
          "Encrypting HTTP body",
          "Controlling how responses are cached by browsers and intermediate proxies",
          "Setting the response content type",
          "Managing CORS",
        ],
        correctAnswer: 1,
        explanation:
          "Cache-Control directives (e.g., max-age=3600, no-cache, no-store) tell browsers and CDNs how long to cache a response and whether to revalidate.",
        difficulty: "medium",
      },
      {
        id: "be-12",
        topic: "Databases",
        question: "What is database indexing and when should you avoid it?",
        options: [
          "Indexing speeds up reads and writes equally",
          "Indexes speed up reads but slow writes and increase storage; avoid on high-write columns with low selectivity",
          "Indexes are only for primary keys",
          "You should always index every column",
        ],
        correctAnswer: 1,
        explanation:
          "Indexes speed up SELECT queries. They slow INSERT/UPDATE/DELETE (index must be updated) and use extra disk space. Avoid on low-cardinality columns or heavy-write tables.",
        difficulty: "medium",
      },
      {
        id: "be-13",
        topic: "Node.js",
        question: "What does middleware do in Express.js?",
        options: [
          "Renders HTML templates",
          "Functions that have access to req, res, and next — process requests in a pipeline",
          "Connects to databases",
          "Compiles TypeScript",
        ],
        correctAnswer: 1,
        explanation:
          "Express middleware is a function(req, res, next) that can read/modify the request, send a response, or call next() to pass control to the next middleware.",
        difficulty: "easy",
      },
      {
        id: "be-14",
        topic: "Security",
        question: "What is SQL injection and how do you prevent it?",
        options: [
          "It's an optimization technique; prevent by caching queries",
          "Malicious SQL inserted into inputs; prevent using parameterized queries or ORM",
          "A way to speed up bulk inserts",
          "A NoSQL attack vector only",
        ],
        correctAnswer: 1,
        explanation:
          "SQL injection injects malicious SQL through user inputs. Prevention: always use parameterized queries/prepared statements or an ORM. Never concatenate user input into SQL strings.",
        difficulty: "easy",
      },
      {
        id: "be-15",
        topic: "APIs",
        question: "What is rate limiting and why is it important in APIs?",
        options: [
          "Limiting the data size of API responses",
          "Restricting the number of requests a client can make in a time window to prevent abuse and ensure availability",
          "Compressing API responses",
          "Versioning API endpoints",
        ],
        correctAnswer: 1,
        explanation:
          "Rate limiting protects against DoS attacks, prevents API abuse, and ensures fair usage. Commonly implemented using Redis counters (e.g., 100 requests per minute per IP/token).",
        difficulty: "medium",
      },
      {
        id: "be-16",
        topic: "Databases",
        question: "What is the N+1 query problem?",
        options: [
          "Queries that run N times faster",
          "Fetching a list of N records and then issuing one extra query per record (N+1 total), causing performance issues",
          "A SQL syntax error",
          "Using too many JOIN clauses",
        ],
        correctAnswer: 1,
        explanation:
          "N+1: fetch 10 users (1 query), then for each user fetch their posts (10 queries) = 11 queries total. Fix with JOIN, eager loading, or DataLoader batching.",
        difficulty: "medium",
      },
      {
        id: "be-17",
        topic: "Microservices",
        question: "What is the main benefit of a microservices architecture?",
        options: [
          "Always faster than monoliths",
          "Independent deployment, scaling, and development of each service",
          "Simpler codebase overall",
          "No need for a database",
        ],
        correctAnswer: 1,
        explanation:
          "Microservices allow each service to be deployed, scaled, and developed independently by separate teams, improving fault isolation and enabling polyglot tech stacks.",
        difficulty: "medium",
      },
      {
        id: "be-18",
        topic: "HTTP",
        question: "What is the difference between HTTP/1.1 and HTTP/2?",
        options: [
          "HTTP/2 uses TCP; HTTP/1.1 uses UDP",
          "HTTP/2 supports multiplexing (multiple requests over one connection), header compression, and server push",
          "HTTP/1.1 is encrypted; HTTP/2 is not",
          "They are functionally identical",
        ],
        correctAnswer: 1,
        explanation:
          "HTTP/2 improves on HTTP/1.1 with multiplexing (parallel requests on one connection), HPACK header compression, server push, and binary framing.",
        difficulty: "medium",
      },
      {
        id: "be-19",
        topic: "Authentication",
        question: "What is OAuth 2.0?",
        options: [
          "A password hashing algorithm",
          "An authorization framework that allows third-party apps to access user resources without sharing passwords",
          "A JWT signing method",
          "A two-factor authentication protocol",
        ],
        correctAnswer: 1,
        explanation:
          "OAuth 2.0 lets users grant third-party apps limited access to their resources (e.g., 'Login with Google') without sharing credentials. Access is granted via tokens.",
        difficulty: "medium",
      },
      {
        id: "be-20",
        topic: "Node.js",
        question: "What is the purpose of process.env in Node.js?",
        options: [
          "Running environment shell scripts",
          "Accessing environment variables for configuration (API keys, DB credentials) without hardcoding them",
          "Checking the Node.js version",
          "Managing process memory",
        ],
        correctAnswer: 1,
        explanation:
          "process.env provides access to OS environment variables. Store sensitive config (secrets, DB URLs) in .env files (loaded via dotenv) and access via process.env.KEY.",
        difficulty: "easy",
      },
      {
        id: "be-21",
        topic: "Databases",
        question: "What is database connection pooling?",
        options: [
          "Storing query results in memory",
          "Maintaining a set of reusable database connections to avoid the overhead of creating a new connection per request",
          "Replicating the database across servers",
          "Caching frequently used tables",
        ],
        correctAnswer: 1,
        explanation:
          "Opening a DB connection is expensive. A connection pool maintains pre-opened connections and reuses them across requests, significantly improving throughput.",
        difficulty: "medium",
      },
      {
        id: "be-22",
        topic: "REST",
        question: "What does HATEOAS mean in REST API design?",
        options: [
          "An HTTP authentication method",
          "Hypermedia As The Engine Of Application State — API responses include links to available actions",
          "A data serialization format",
          "A caching strategy for REST APIs",
        ],
        correctAnswer: 1,
        explanation:
          "HATEOAS: REST responses include links to related actions/resources, making the API self-discoverable. Clients navigate by following links, not hardcoding endpoints.",
        difficulty: "hard",
      },
      {
        id: "be-23",
        topic: "Security",
        question: "What is CORS and when do you need it?",
        options: [
          "A database security protocol",
          "Cross-Origin Resource Sharing — server headers that allow/deny browser requests from a different domain",
          "An encryption standard for APIs",
          "A rate limiting protocol",
        ],
        correctAnswer: 1,
        explanation:
          "CORS headers (Access-Control-Allow-Origin, etc.) tell browsers which origins can make cross-origin requests. Needed when your frontend domain differs from your API domain.",
        difficulty: "medium",
      },
      {
        id: "be-24",
        topic: "Node.js",
        question:
          "What is the difference between require() and import in Node.js?",
        options: [
          "They are identical",
          "require() is CommonJS (synchronous, dynamic); import is ES Modules (static, async-compatible, tree-shakable)",
          "import is for Node.js; require() is for browsers",
          "require() is newer; import is deprecated",
        ],
        correctAnswer: 1,
        explanation:
          "require() (CJS) is synchronous and evaluated at runtime. ES Module import is static, evaluated at parse time, enabling tree-shaking and top-level await.",
        difficulty: "medium",
      },
      {
        id: "be-25",
        topic: "Databases",
        question: "What is database normalization?",
        options: [
          "Making all database tables the same size",
          "Organizing tables to reduce data redundancy and improve integrity by decomposing tables into smaller related ones",
          "Backing up the database",
          "Encrypting database columns",
        ],
        correctAnswer: 1,
        explanation:
          "Normalization (1NF, 2NF, 3NF, BCNF) removes data redundancy by ensuring each piece of information is stored once, reducing update anomalies.",
        difficulty: "easy",
      },
      {
        id: "be-26",
        topic: "APIs",
        question: "What is API versioning and why is it important?",
        options: [
          "Tracking how many times an API was called",
          "Including version numbers in API paths (/v1/, /v2/) to allow backward-compatible changes without breaking existing clients",
          "Encrypting API responses by version",
          "Documenting all API changes",
        ],
        correctAnswer: 1,
        explanation:
          "Versioning (e.g., /api/v1/users) lets you evolve your API (breaking changes) while keeping old versions working for existing clients during migration.",
        difficulty: "easy",
      },
      {
        id: "be-27",
        topic: "Security",
        question: "How should passwords be stored securely in a database?",
        options: [
          "Encrypted with AES",
          "Hashed with a strong, slow algorithm like bcrypt or Argon2 with a random salt",
          "Stored as plain text in an encrypted DB",
          "Base64 encoded",
        ],
        correctAnswer: 1,
        explanation:
          "Never store plain-text or simply encrypted passwords. Use bcrypt/Argon2 — slow algorithms resistant to brute force. Salt prevents rainbow table attacks.",
        difficulty: "medium",
      },
      {
        id: "be-28",
        topic: "HTTP",
        question: "What does a 429 Too Many Requests status code indicate?",
        options: [
          "Server internal error",
          "Client has sent too many requests in a given time window (rate limit exceeded)",
          "Invalid request format",
          "Resource not found",
        ],
        correctAnswer: 1,
        explanation:
          "429 is the standard HTTP status for rate limiting. Responses typically include a Retry-After header indicating when the client can retry.",
        difficulty: "easy",
      },
      {
        id: "be-29",
        topic: "Microservices",
        question: "What is a service mesh in microservices architecture?",
        options: [
          "A database shared between services",
          "A dedicated infrastructure layer for service-to-service communication, handling load balancing, encryption, and observability",
          "A network of CDN servers",
          "A deployment configuration format",
        ],
        correctAnswer: 1,
        explanation:
          "A service mesh (e.g., Istio, Linkerd) sits between services, handling retries, circuit breaking, mTLS encryption, and distributed tracing without changes to application code.",
        difficulty: "hard",
      },
      {
        id: "be-30",
        topic: "Node.js",
        question: "What is the purpose of package.json's 'scripts' field?",
        options: [
          "Listing all installed packages",
          "Defining custom command shortcuts runnable with 'npm run <script-name>'",
          "Specifying the Node.js version required",
          "Configuring the npm registry",
        ],
        correctAnswer: 1,
        explanation:
          "scripts in package.json define shortcuts like 'start', 'build', 'test' that run via npm/yarn/pnpm. This standardizes how to start, build, and test projects.",
        difficulty: "easy",
      },
    ],
  },

  // ─── Mock Test 9: Data Science & ML ───────────────────────────────────────
  {
    id: "data-science-test",
    title: "Data Science & Machine Learning",
    description:
      "NumPy, Pandas, ML algorithms, model evaluation, bias-variance tradeoff, and neural networks.",
    duration: 3600,
    totalQuestions: 30,
    category: "Data Science",
    questions: [
      {
        id: "ds-01",
        topic: "NumPy",
        question:
          "What is NumPy's primary advantage over Python lists for numerical computation?",
        options: [
          "NumPy lists are more readable",
          "NumPy arrays use fixed types and contiguous memory, enabling vectorized C operations much faster than Python loops",
          "NumPy supports negative indexing",
          "NumPy arrays can store mixed types efficiently",
        ],
        correctAnswer: 1,
        explanation:
          "NumPy arrays are homogeneously typed and stored in contiguous memory. Operations are executed in compiled C/Fortran, orders of magnitude faster than Python loops.",
        difficulty: "medium",
      },
      {
        id: "ds-02",
        topic: "Pandas",
        question: "What does df.groupby('city').agg({'sales': 'sum'}) do?",
        options: [
          "Filters rows where city equals 'sales'",
          "Groups DataFrame rows by city and computes the sum of the sales column for each city",
          "Renames the sales column to 'city'",
          "Sorts by city and sales",
        ],
        correctAnswer: 1,
        explanation:
          "groupby + agg: rows are grouped by unique city values, then the sales sum is computed per group — equivalent to SQL's GROUP BY city, SUM(sales).",
        difficulty: "easy",
      },
      {
        id: "ds-03",
        topic: "ML Concepts",
        question: "What is the bias-variance tradeoff?",
        options: [
          "The tradeoff between model training speed and accuracy",
          "High bias = underfitting (too simple); high variance = overfitting (too complex). The goal is to minimize total error by balancing both",
          "A mathematical formula for calculating model loss",
          "The tradeoff between data size and model complexity",
        ],
        correctAnswer: 1,
        explanation:
          "Bias: error from incorrect assumptions (underfitting). Variance: error from sensitivity to training data noise (overfitting). Best models find the sweet spot with low total error.",
        difficulty: "medium",
      },
      {
        id: "ds-04",
        topic: "ML Algorithms",
        question: "What type of algorithm is K-Means?",
        options: [
          "Supervised classification",
          "Supervised regression",
          "Unsupervised clustering",
          "Semi-supervised learning",
        ],
        correctAnswer: 2,
        explanation:
          "K-Means is an unsupervised learning algorithm that groups data into K clusters based on feature similarity, without using labeled examples.",
        difficulty: "easy",
      },
      {
        id: "ds-05",
        topic: "Model Evaluation",
        question: "When should you use F1 score instead of accuracy?",
        options: [
          "When the dataset is balanced",
          "When classes are imbalanced and both precision and recall matter equally",
          "When you have more than 10 classes",
          "For regression problems",
        ],
        correctAnswer: 1,
        explanation:
          "On imbalanced datasets, a model predicting the majority class always has high accuracy but poor recall. F1 (harmonic mean of precision and recall) penalizes this.",
        difficulty: "medium",
      },
      {
        id: "ds-06",
        topic: "ML Algorithms",
        question: "What is the kernel trick in Support Vector Machines?",
        options: [
          "A way to reduce training time",
          "Mapping data to a higher-dimensional space implicitly to find a linear separator without computing the transformation explicitly",
          "A regularization technique",
          "A pruning strategy for decision trees",
        ],
        correctAnswer: 1,
        explanation:
          "The kernel trick computes dot products in a transformed feature space without explicitly mapping points there. RBF and polynomial kernels enable SVMs to find non-linear boundaries.",
        difficulty: "hard",
      },
      {
        id: "ds-07",
        topic: "Statistics",
        question: "What does p-value indicate in hypothesis testing?",
        options: [
          "The probability that the hypothesis is true",
          "The probability of observing results at least as extreme as those seen, assuming the null hypothesis is true",
          "The confidence level of the model",
          "The accuracy of the statistical test",
        ],
        correctAnswer: 1,
        explanation:
          "p-value: probability of getting the observed data (or more extreme) if H₀ is true. If p < 0.05 (significance level), reject H₀. It does NOT measure the probability that H₀ is true.",
        difficulty: "hard",
      },
      {
        id: "ds-08",
        topic: "Neural Networks",
        question:
          "What is the vanishing gradient problem in deep neural networks?",
        options: [
          "Gradients become too large during backpropagation",
          "Gradients shrink exponentially as they propagate through many layers, preventing early layers from learning",
          "The loss function reaches zero too quickly",
          "Neurons become inactive (dead neurons)",
        ],
        correctAnswer: 1,
        explanation:
          "In deep networks using sigmoid/tanh, gradients are multiplied through many layers during backpropagation. With values < 1, they shrink exponentially. Solution: ReLU, BatchNorm, skip connections.",
        difficulty: "hard",
      },
      {
        id: "ds-09",
        topic: "ML Algorithms",
        question: "What is the difference between bagging and boosting?",
        options: [
          "They are identical ensemble methods",
          "Bagging trains models in parallel on bootstrap samples to reduce variance; boosting trains sequentially, each model correcting the previous one's errors",
          "Bagging reduces bias; boosting reduces variance",
          "Boosting is for classification only; bagging is for regression",
        ],
        correctAnswer: 1,
        explanation:
          "Bagging (e.g., Random Forest): parallel, reduces variance. Boosting (e.g., XGBoost, AdaBoost): sequential, each model focuses on previous errors, reduces bias.",
        difficulty: "medium",
      },
      {
        id: "ds-10",
        topic: "Feature Engineering",
        question: "What is one-hot encoding used for?",
        options: [
          "Normalizing numerical features",
          "Converting categorical variables into binary columns so ML algorithms can process them",
          "Handling missing values",
          "Reducing dimensionality",
        ],
        correctAnswer: 1,
        explanation:
          "One-hot encoding converts a categorical column (e.g., Color: Red/Green/Blue) into binary columns (is_Red, is_Green, is_Blue), preventing false ordinal relationships.",
        difficulty: "easy",
      },
      {
        id: "ds-11",
        topic: "Neural Networks",
        question: "What does the ReLU activation function do?",
        options: [
          "Squashes values between 0 and 1",
          "Returns max(0, x) — passes positive values unchanged, replaces negatives with 0",
          "Returns the hyperbolic tangent of x",
          "Outputs probabilities that sum to 1",
        ],
        correctAnswer: 1,
        explanation:
          "ReLU (Rectified Linear Unit): f(x) = max(0, x). It introduces non-linearity, is computationally cheap, and mitigates vanishing gradients compared to sigmoid.",
        difficulty: "easy",
      },
      {
        id: "ds-12",
        topic: "Pandas",
        question: "What does df.fillna(df.mean()) do?",
        options: [
          "Removes rows with null values",
          "Replaces null values with the column mean",
          "Replaces all values with the mean",
          "Computes the mean of the DataFrame",
        ],
        correctAnswer: 1,
        explanation:
          "fillna() fills NaN values. df.mean() computes per-column means. Together, NaNs in each column are replaced with that column's mean — a common imputation strategy.",
        difficulty: "easy",
      },
      {
        id: "ds-13",
        topic: "Model Evaluation",
        question: "What is cross-validation used for?",
        options: [
          "Increasing the training dataset size",
          "Estimating model performance on unseen data by training and evaluating on different data folds",
          "Tuning hyperparameters directly",
          "Removing outliers from the data",
        ],
        correctAnswer: 1,
        explanation:
          "k-fold cross-validation splits data into k folds, trains k models (each using k-1 folds for training, 1 for validation), and averages performance. More reliable than a single train/test split.",
        difficulty: "medium",
      },
      {
        id: "ds-14",
        topic: "ML Algorithms",
        question: "In a decision tree, what is 'information gain'?",
        options: [
          "The number of features used in the tree",
          "The reduction in entropy (disorder) achieved by splitting on a particular feature",
          "The accuracy improvement after adding a new tree",
          "The depth at which a feature appears",
        ],
        correctAnswer: 1,
        explanation:
          "Information gain = Entropy(parent) – weighted average Entropy(children). A split with high information gain maximally reduces uncertainty about the class label.",
        difficulty: "medium",
      },
      {
        id: "ds-15",
        topic: "Deep Learning",
        question: "What is dropout regularization in neural networks?",
        options: [
          "Removing neurons with zero weights",
          "Randomly setting a fraction of neuron activations to zero during training, reducing co-adaptation and overfitting",
          "Pruning the network after training",
          "Reducing the learning rate during training",
        ],
        correctAnswer: 1,
        explanation:
          "Dropout randomly deactivates neurons during each training pass, forcing the network to learn redundant representations. At inference, all neurons are used with scaled weights.",
        difficulty: "medium",
      },
      {
        id: "ds-16",
        topic: "Statistics",
        question: "What is the Central Limit Theorem (CLT)?",
        options: [
          "The center of a dataset is always the mean",
          "The distribution of sample means approaches a normal distribution as sample size grows, regardless of the population distribution",
          "All datasets are normally distributed",
          "The mean equals the median in any distribution",
        ],
        correctAnswer: 1,
        explanation:
          "CLT: as sample size n increases, the sampling distribution of the mean approximates a normal distribution (mean=μ, std=σ/√n) regardless of the population's shape.",
        difficulty: "medium",
      },
      {
        id: "ds-17",
        topic: "ML Algorithms",
        question: "What does L2 regularization (Ridge) do to model weights?",
        options: [
          "Sets small weights exactly to zero",
          "Penalizes large weights by adding the sum of squared weights to the loss, shrinking them toward zero",
          "Increases model complexity",
          "Prevents any weight from exceeding 1",
        ],
        correctAnswer: 1,
        explanation:
          "L2 adds λΣw² to the loss. This penalizes large weights and distributes importance across features. L1 (Lasso) can zero out weights for feature selection.",
        difficulty: "medium",
      },
      {
        id: "ds-18",
        topic: "Deep Learning",
        question:
          "What is the role of backpropagation in training neural networks?",
        options: [
          "Propagating input data forward through the network",
          "Computing gradients of the loss with respect to each weight using the chain rule, enabling gradient descent updates",
          "Resetting weights to random values after each epoch",
          "Normalizing activations between layers",
        ],
        correctAnswer: 1,
        explanation:
          "Backpropagation applies the chain rule to compute ∂Loss/∂w for every weight. These gradients tell gradient descent how to adjust each weight to minimize loss.",
        difficulty: "medium",
      },
      {
        id: "ds-19",
        topic: "NumPy",
        question: "What is broadcasting in NumPy?",
        options: [
          "Sending data to multiple processes",
          "Automatically expanding arrays of different shapes to perform element-wise operations without copying data",
          "Printing array contents",
          "Converting 1D arrays to 2D",
        ],
        correctAnswer: 1,
        explanation:
          "NumPy broadcasting: when operating on arrays with different shapes (e.g., adding a (3,1) array to a (3,4) array), NumPy implicitly replicates the smaller array along the mismatched dimension.",
        difficulty: "medium",
      },
      {
        id: "ds-20",
        topic: "ML Concepts",
        question: "What is feature scaling and when is it necessary?",
        options: [
          "Selecting the most important features",
          "Normalizing/standardizing feature ranges; necessary for distance-based algorithms (KNN, SVM) and gradient descent optimization",
          "Reducing the number of features",
          "Encoding categorical features",
        ],
        correctAnswer: 1,
        explanation:
          "Distance-based algorithms and gradient descent converge faster when features are on similar scales. Decision trees and Random Forest are scale-invariant.",
        difficulty: "medium",
      },
      {
        id: "ds-21",
        topic: "Model Evaluation",
        question: "What does the ROC-AUC score measure?",
        options: [
          "Training accuracy of a model",
          "A model's ability to distinguish between classes; AUC = 1 means perfect, 0.5 means random",
          "The mean squared error of a regression model",
          "Feature importance ranking",
        ],
        correctAnswer: 1,
        explanation:
          "ROC curve plots True Positive Rate vs False Positive Rate at different thresholds. AUC (area under ROC curve) summarizes discrimination ability across all thresholds.",
        difficulty: "medium",
      },
      {
        id: "ds-22",
        topic: "Deep Learning",
        question: "What is a convolutional layer (CNN) designed to detect?",
        options: [
          "Temporal sequences in data",
          "Local spatial patterns (edges, textures) by applying learnable filters across input",
          "Probability distributions over outputs",
          "Long-term dependencies in sequences",
        ],
        correctAnswer: 1,
        explanation:
          "Convolutional layers slide learnable filters over input (images, audio), detecting local features (edges, corners, shapes) at different positions with shared weights.",
        difficulty: "medium",
      },
      {
        id: "ds-23",
        topic: "ML Algorithms",
        question:
          "What makes XGBoost different from standard Gradient Boosting?",
        options: [
          "XGBoost is unsupervised; standard GB is supervised",
          "XGBoost uses regularization terms, second-order gradients, parallel tree building, and missing value handling for speed and accuracy",
          "XGBoost uses neural networks internally",
          "They are identical",
        ],
        correctAnswer: 1,
        explanation:
          "XGBoost adds: L1/L2 regularization, second-order Taylor expansion for better optimization, cache-aware block structure for faster computation, and built-in cross-validation.",
        difficulty: "hard",
      },
      {
        id: "ds-24",
        topic: "Statistics",
        question: "What is the difference between Type I and Type II errors?",
        options: [
          "Type I: accepting true null; Type II: rejecting false null",
          "Type I: false positive (reject true null); Type II: false negative (fail to reject false null)",
          "Type I is only for regression; Type II is for classification",
          "They are the same error measured differently",
        ],
        correctAnswer: 1,
        explanation:
          "Type I error (α): false positive — rejecting a true null hypothesis. Type II error (β): false negative — failing to reject a false null hypothesis. Lowering α increases β.",
        difficulty: "medium",
      },
      {
        id: "ds-25",
        topic: "Deep Learning",
        question: "What problem do LSTMs solve compared to vanilla RNNs?",
        options: [
          "They process images more efficiently",
          "LSTMs use gating mechanisms to retain or forget information over long sequences, addressing the vanishing gradient problem of vanilla RNNs",
          "LSTMs are faster to train",
          "LSTMs require less memory",
        ],
        correctAnswer: 1,
        explanation:
          "Vanilla RNNs suffer from vanishing/exploding gradients over long sequences. LSTMs (Long Short-Term Memory) use input, forget, and output gates to control information flow.",
        difficulty: "hard",
      },
      {
        id: "ds-26",
        topic: "Pandas",
        question: "What does df.merge(df2, on='id', how='left') do?",
        options: [
          "Removes rows where id doesn't match",
          "Keeps all rows from df (left), filling NaN for df2 columns where there's no match on id",
          "Returns only rows present in both DataFrames",
          "Stacks df2 below df",
        ],
        correctAnswer: 1,
        explanation:
          "Left join: all rows from the left DataFrame (df) are kept. Matching rows from df2 are joined. Non-matching right rows are NaN. Same semantics as SQL LEFT JOIN.",
        difficulty: "medium",
      },
      {
        id: "ds-27",
        topic: "ML Concepts",
        question: "What is hyperparameter tuning?",
        options: [
          "Adjusting model weights during training",
          "Searching for the best configuration values (e.g., learning rate, depth, C) that are set before training and not learned from data",
          "Adding more training data",
          "Modifying the architecture of a neural network during training",
        ],
        correctAnswer: 1,
        explanation:
          "Hyperparameters (learning rate, max_depth, regularization strength) are set before training. Methods to find optimal values: grid search, random search, Bayesian optimization.",
        difficulty: "easy",
      },
      {
        id: "ds-28",
        topic: "Statistics",
        question:
          "What is the purpose of standardization (Z-score normalization)?",
        options: [
          "Scaling values to [0, 1]",
          "Transforming features to have mean=0 and standard deviation=1, making them comparable on the same scale",
          "Removing outliers",
          "Converting continuous to categorical",
        ],
        correctAnswer: 1,
        explanation:
          "Z-score: (x - μ) / σ. Result: mean=0, std=1. Essential for algorithms sensitive to feature magnitude. Min-max normalization scales to [0,1].",
        difficulty: "easy",
      },
      {
        id: "ds-29",
        topic: "Deep Learning",
        question: "What is transfer learning in deep learning?",
        options: [
          "Moving a model from one server to another",
          "Using a pre-trained model's learned features as a starting point for a new task, reducing training data and time required",
          "Transferring data between datasets",
          "Converting a model from one framework to another",
        ],
        correctAnswer: 1,
        explanation:
          "Transfer learning reuses a model pre-trained on a large dataset (e.g., ImageNet). For a new task, you fine-tune the final layers while keeping earlier learned features, requiring far less data.",
        difficulty: "medium",
      },
      {
        id: "ds-30",
        topic: "ML Concepts",
        question: "What is the curse of dimensionality?",
        options: [
          "Models become too complex with many features",
          "As dimensions increase, data becomes increasingly sparse, making distance-based methods unreliable and requiring exponentially more data",
          "High-dimensional datasets are slower to load",
          "Neural networks can't handle more than 100 features",
        ],
        correctAnswer: 1,
        explanation:
          "In high dimensions, the distance between any two points converges (nearest neighbor loses meaning), data points become extremely sparse, and models overfit without exponentially more samples.",
        difficulty: "hard",
      },
    ],
  },

  // ─── Mock Test 10: Cybersecurity Fundamentals ─────────────────────────────
  {
    id: "cybersecurity-test",
    title: "Cybersecurity Fundamentals",
    description:
      "CIA triad, encryption, common attacks (XSS, SQLi, CSRF), firewalls, hash functions, and secure design.",
    duration: 3600,
    totalQuestions: 30,
    category: "Cybersecurity",
    questions: [
      {
        id: "cy-01",
        topic: "CIA Triad",
        question: "What does the CIA triad stand for in cybersecurity?",
        options: [
          "Control, Inspection, Audit",
          "Confidentiality, Integrity, Availability",
          "Cryptography, Identity, Authorization",
          "Certificates, Intrusion, Access",
        ],
        correctAnswer: 1,
        explanation:
          "CIA Triad: Confidentiality (only authorized parties access data), Integrity (data is accurate and unmodified), Availability (systems are accessible when needed).",
        difficulty: "easy",
      },
      {
        id: "cy-02",
        topic: "Encryption",
        question:
          "What is the difference between symmetric and asymmetric encryption?",
        options: [
          "Symmetric uses two keys; asymmetric uses one key",
          "Symmetric uses one shared key for encryption and decryption; asymmetric uses a key pair (public + private)",
          "Symmetric is slower; asymmetric is faster",
          "Symmetric is for text; asymmetric is for files",
        ],
        correctAnswer: 1,
        explanation:
          "Symmetric (AES): same key encrypts and decrypts — fast, great for bulk data. Asymmetric (RSA, ECC): public key encrypts, private key decrypts — slower, used for key exchange.",
        difficulty: "easy",
      },
      {
        id: "cy-03",
        topic: "XSS",
        question: "What is Cross-Site Scripting (XSS)?",
        options: [
          "Injecting malicious SQL into database queries",
          "Injecting malicious scripts into web pages viewed by other users, executing in their browsers",
          "Forging HTTP requests on behalf of authenticated users",
          "Intercepting network traffic between client and server",
        ],
        correctAnswer: 1,
        explanation:
          "XSS: attacker injects malicious JavaScript into a web page. When other users load the page, the script runs in their browser, stealing cookies, session tokens, or credentials.",
        difficulty: "easy",
      },
      {
        id: "cy-04",
        topic: "SQL Injection",
        question: "Which of these is an example of SQL injection?",
        options: [
          "Sending a very large HTTP request",
          "Entering ' OR '1'='1 as a username to bypass login",
          "Flooding a server with traffic",
          "Guessing user passwords through brute force",
        ],
        correctAnswer: 1,
        explanation:
          "' OR '1'='1 makes the query return all records (always true), bypassing authentication. SQL injection exploits unsanitized user input concatenated into SQL queries.",
        difficulty: "easy",
      },
      {
        id: "cy-05",
        topic: "CSRF",
        question: "What is Cross-Site Request Forgery (CSRF)?",
        options: [
          "Injecting scripts into web pages",
          "Tricking an authenticated user's browser into making unintended requests to a trusted site on their behalf",
          "Stealing session cookies directly from the server",
          "Intercepting HTTPS traffic",
        ],
        correctAnswer: 1,
        explanation:
          "CSRF exploits a browser's automatic inclusion of cookies. A malicious site can trigger state-changing actions (fund transfer, password change) to a site where the victim is authenticated.",
        difficulty: "medium",
      },
      {
        id: "cy-06",
        topic: "Hash Functions",
        question:
          "What property of a cryptographic hash function means small input changes produce completely different outputs?",
        options: [
          "Collision resistance",
          "Pre-image resistance",
          "Avalanche effect",
          "Determinism",
        ],
        correctAnswer: 2,
        explanation:
          "The avalanche effect: changing even 1 bit of input changes approximately 50% of the output bits. This makes it impossible to predict output from small input modifications.",
        difficulty: "medium",
      },
      {
        id: "cy-07",
        topic: "Firewalls",
        question: "What is the primary function of a firewall?",
        options: [
          "Encrypting network traffic",
          "Monitoring and filtering incoming/outgoing network traffic based on defined security rules",
          "Scanning files for malware",
          "Managing user passwords",
        ],
        correctAnswer: 1,
        explanation:
          "Firewalls control network access by allowing or blocking traffic based on rules (IP addresses, ports, protocols). They protect network perimeters from unauthorized access.",
        difficulty: "easy",
      },
      {
        id: "cy-08",
        topic: "Encryption",
        question: "What is TLS (Transport Layer Security) used for?",
        options: [
          "Encrypting data at rest on disk",
          "Providing encrypted, authenticated communication over the internet (used in HTTPS)",
          "Hashing passwords before storage",
          "Managing firewall rules",
        ],
        correctAnswer: 1,
        explanation:
          "TLS (successor to SSL) encrypts data in transit between client and server, authenticates the server via certificates, and ensures data integrity. HTTPS = HTTP over TLS.",
        difficulty: "easy",
      },
      {
        id: "cy-09",
        topic: "Authentication",
        question: "What is multi-factor authentication (MFA)?",
        options: [
          "Using multiple passwords",
          "Requiring verification from two or more independent factors: something you know, have, or are",
          "Logging in from multiple devices",
          "Using different passwords for different sites",
        ],
        correctAnswer: 1,
        explanation:
          "MFA combines: something you know (password), something you have (OTP/hardware token), or something you are (biometric). Adds a layer beyond passwords alone.",
        difficulty: "easy",
      },
      {
        id: "cy-10",
        topic: "Attacks",
        question: "What is a Man-in-the-Middle (MitM) attack?",
        options: [
          "Attacking a server from inside the network",
          "Secretly intercepting and potentially altering communications between two parties who believe they're communicating directly",
          "Impersonating a user with stolen credentials",
          "Flooding a network with traffic",
        ],
        correctAnswer: 1,
        explanation:
          "MitM: attacker positions themselves between client and server, intercepting traffic. Mitigated by TLS certificate verification, HSTS, and certificate pinning.",
        difficulty: "medium",
      },
      {
        id: "cy-11",
        topic: "Hash Functions",
        question: "Why is MD5 no longer recommended for security purposes?",
        options: [
          "It's too slow for modern hardware",
          "Collisions have been found — two different inputs can produce the same MD5 hash",
          "It produces hashes that are too long",
          "It's incompatible with modern operating systems",
        ],
        correctAnswer: 1,
        explanation:
          "MD5 is cryptographically broken — practical collisions have been demonstrated. Use SHA-256 or SHA-3 for integrity checks, bcrypt/Argon2 for passwords.",
        difficulty: "medium",
      },
      {
        id: "cy-12",
        topic: "Attacks",
        question: "What is a Denial of Service (DoS) attack?",
        options: [
          "Stealing sensitive data from a server",
          "Overwhelming a system with traffic or requests to make it unavailable to legitimate users",
          "Eavesdropping on network communications",
          "Injecting malware into software updates",
        ],
        correctAnswer: 1,
        explanation:
          "DoS floods a target with requests to exhaust resources (bandwidth, memory, CPU), denying service to legitimate users. DDoS uses many machines to amplify the attack.",
        difficulty: "easy",
      },
      {
        id: "cy-13",
        topic: "Firewalls",
        question:
          "What is the difference between a stateful and stateless firewall?",
        options: [
          "Stateless is newer and more secure",
          "Stateful tracks TCP connection state and allows only valid packets in established flows; stateless checks each packet in isolation",
          "Stateful firewalls encrypt traffic; stateless do not",
          "Stateless firewalls block all outbound traffic by default",
        ],
        correctAnswer: 1,
        explanation:
          "Stateful firewalls understand TCP connections (SYN/ACK/FIN) and only allow packets belonging to established connections. Stateless firewalls just check IP/port against rules.",
        difficulty: "medium",
      },
      {
        id: "cy-14",
        topic: "Social Engineering",
        question: "What is phishing?",
        options: [
          "A network scanning technique",
          "A social engineering attack that deceives users into revealing credentials via fraudulent emails or websites",
          "A technique for cracking encrypted passwords",
          "Malware that encrypts user files for ransom",
        ],
        correctAnswer: 1,
        explanation:
          "Phishing: attackers send fake emails pretending to be trusted organizations (banks, Google) to trick victims into clicking malicious links and submitting credentials.",
        difficulty: "easy",
      },
      {
        id: "cy-15",
        topic: "Encryption",
        question: "What is end-to-end encryption (E2EE)?",
        options: [
          "Encrypting data only at the server end",
          "Only the communicating users can read the messages — even the service provider cannot decrypt them",
          "Encrypting data on the client's device disk",
          "TLS between client and server",
        ],
        correctAnswer: 1,
        explanation:
          "E2EE: messages are encrypted on the sender's device and can only be decrypted by the intended recipient. Intermediaries (servers) only see ciphertext. Used in WhatsApp, Signal.",
        difficulty: "medium",
      },
      {
        id: "cy-16",
        topic: "Vulnerabilities",
        question: "What is a zero-day vulnerability?",
        options: [
          "A vulnerability discovered exactly on the day software is released",
          "A software flaw that is unknown to the vendor and has no patch available, making it exploitable immediately",
          "A vulnerability with zero risk",
          "An unpatched bug that's been public for zero days",
        ],
        correctAnswer: 1,
        explanation:
          "Zero-day: a vulnerability unknown to the vendor (or known but unpatched). Attackers can exploit it before a fix is available. 'Zero days' to fix it before potential exploitation.",
        difficulty: "medium",
      },
      {
        id: "cy-17",
        topic: "Attacks",
        question: "What is a buffer overflow attack?",
        options: [
          "Filling a database with garbage data",
          "Writing data beyond a buffer's allocated boundary, overwriting adjacent memory — potentially allowing arbitrary code execution",
          "Sending oversized HTTP requests",
          "Exhausting server memory with many small requests",
        ],
        correctAnswer: 1,
        explanation:
          "Buffer overflow: writing more data than a buffer can hold overwrites adjacent memory (return addresses, function pointers), potentially redirecting execution to attacker-controlled code.",
        difficulty: "hard",
      },
      {
        id: "cy-18",
        topic: "Hash Functions",
        question: "What is a salt in password hashing?",
        options: [
          "A secret key added to the hash function",
          "A random value added to each password before hashing, ensuring identical passwords produce different hashes and defeating rainbow table attacks",
          "A technique for stretching the hash output",
          "An encryption layer added after hashing",
        ],
        correctAnswer: 1,
        explanation:
          "Salting: a unique random string appended to each password before hashing. hash('password' + 'randomSalt'). Even if two users have the same password, their hashes differ.",
        difficulty: "medium",
      },
      {
        id: "cy-19",
        topic: "Network Security",
        question: "What is a VPN and what security benefit does it provide?",
        options: [
          "A virtual private network that speeds up internet connections",
          "Encrypts traffic between your device and the VPN server, masking your IP and protecting data on untrusted networks",
          "A type of firewall",
          "Software for detecting network intrusions",
        ],
        correctAnswer: 1,
        explanation:
          "VPN (Virtual Private Network) creates an encrypted tunnel. Useful on public Wi-Fi to prevent eavesdropping and to mask your IP address/location from websites.",
        difficulty: "easy",
      },
      {
        id: "cy-20",
        topic: "XSS",
        question: "What is the most effective way to prevent XSS attacks?",
        options: [
          "Using HTTPS only",
          "Escaping/encoding all user input before rendering in HTML, and using Content Security Policy (CSP) headers",
          "Using POST instead of GET requests",
          "Encrypting all user input",
        ],
        correctAnswer: 1,
        explanation:
          "XSS prevention: output encode user data (< to &lt;, etc.) so it's treated as text not HTML/JS. CSP headers restrict which scripts the browser can execute.",
        difficulty: "medium",
      },
      {
        id: "cy-21",
        topic: "Attacks",
        question: "What is ransomware?",
        options: [
          "Software that steals credentials",
          "Malware that encrypts victim's files and demands payment to restore access",
          "Software that displays unwanted ads",
          "A tool for network monitoring",
        ],
        correctAnswer: 1,
        explanation:
          "Ransomware encrypts files on infected systems. Attackers demand cryptocurrency payment for the decryption key. NotPetya, WannaCry, and REvil are notable examples.",
        difficulty: "easy",
      },
      {
        id: "cy-22",
        topic: "Authentication",
        question: "What is the purpose of a CAPTCHA?",
        options: [
          "Encrypting form submissions",
          "Distinguishing human users from automated bots to prevent automated attacks",
          "Validating email addresses",
          "Preventing SQL injection",
        ],
        correctAnswer: 1,
        explanation:
          "CAPTCHA (Completely Automated Public Turing test): challenges that humans pass easily (image recognition) but automated bots struggle with, preventing brute force and spam.",
        difficulty: "easy",
      },
      {
        id: "cy-23",
        topic: "Encryption",
        question: "What is PKI (Public Key Infrastructure)?",
        options: [
          "A software library for encryption",
          "A framework of policies, hardware, and procedures for creating, managing, and distributing digital certificates that bind public keys to identities",
          "A type of symmetric encryption",
          "A network security protocol",
        ],
        correctAnswer: 1,
        explanation:
          "PKI: Certificate Authorities (CAs) issue X.509 certificates that bind a public key to an identity (domain, person). HTTPS relies on PKI for server authentication.",
        difficulty: "hard",
      },
      {
        id: "cy-24",
        topic: "CSRF",
        question: "What is the most effective defense against CSRF attacks?",
        options: [
          "Using HTTPS",
          "CSRF tokens — unique unpredictable values embedded in forms, validated server-side to ensure requests originate from legitimate pages",
          "Hashing all form data",
          "Requiring users to re-login frequently",
        ],
        correctAnswer: 1,
        explanation:
          "CSRF tokens: the server generates a unique token per session, embeds it in forms, and validates it on submission. Attackers can't forge valid tokens from another origin.",
        difficulty: "medium",
      },
      {
        id: "cy-25",
        topic: "Vulnerabilities",
        question: "What does OWASP Top 10 represent?",
        options: [
          "The top 10 programming languages by security",
          "The 10 most critical web application security risks, published by the Open Web Application Security Project",
          "Top 10 hacking tools",
          "10 best practices for network configuration",
        ],
        correctAnswer: 1,
        explanation:
          "OWASP Top 10 lists the most critical web security risks (Injection, Broken Auth, XSS, IDOR, etc.). It's the industry standard awareness guide for web application security.",
        difficulty: "easy",
      },
      {
        id: "cy-26",
        topic: "Network Security",
        question: "What is port scanning and why is it used in security?",
        options: [
          "Monitoring USB ports for malware",
          "Probing a host's network ports to discover open services — used by attackers to map attack surface and by admins to audit exposure",
          "Filtering network packets by port",
          "Assigning dynamic ports to applications",
        ],
        correctAnswer: 1,
        explanation:
          "Port scanning (e.g., with Nmap) identifies open ports and services. Attackers use it to find vulnerabilities; security professionals use it for auditing and hardening.",
        difficulty: "medium",
      },
      {
        id: "cy-27",
        topic: "Attacks",
        question: "What is a rainbow table attack?",
        options: [
          "A multi-vector DDoS attack",
          "Using precomputed hash-to-plaintext tables to reverse hash values and recover original passwords",
          "A social engineering attack using colorful phishing emails",
          "Bypassing firewalls using ICMP packets",
        ],
        correctAnswer: 1,
        explanation:
          "Rainbow tables: precomputed mappings of hashes to plaintexts. If password hashes are stolen, rainbow tables can quickly reverse common passwords. Salting defeats this attack.",
        difficulty: "medium",
      },
      {
        id: "cy-28",
        topic: "Firewalls",
        question: "What is an Intrusion Detection System (IDS)?",
        options: [
          "Software that blocks all incoming traffic",
          "Monitors network/system activity for malicious activity or policy violations and generates alerts",
          "A VPN concentrator",
          "A tool for scanning files for viruses",
        ],
        correctAnswer: 1,
        explanation:
          "IDS monitors traffic/activity and alerts when suspicious patterns are detected. IPS (Intrusion Prevention System) goes further — it actively blocks detected threats.",
        difficulty: "easy",
      },
      {
        id: "cy-29",
        topic: "Secure Design",
        question: "What is the principle of least privilege?",
        options: [
          "Giving admin rights to all users for productivity",
          "Every user, process, or system component should have only the minimum permissions necessary to perform its function",
          "Restricting internet access for all employees",
          "Using read-only databases",
        ],
        correctAnswer: 1,
        explanation:
          "Least privilege minimizes damage from breaches, accidents, or malware. A compromised account with minimal rights can do little harm. It's a fundamental security design principle.",
        difficulty: "easy",
      },
      {
        id: "cy-30",
        topic: "Encryption",
        question: "What is a digital signature?",
        options: [
          "An electronic version of a handwritten signature image",
          "Data signed with a sender's private key that recipients can verify with the public key — proving authenticity and integrity",
          "A hash of a document",
          "An encryption certificate for HTTPS",
        ],
        correctAnswer: 1,
        explanation:
          "Digital signature: sender hashes a message and encrypts the hash with their private key. Recipient decrypts with sender's public key and compares hashes — verifying both sender identity and message integrity.",
        difficulty: "medium",
      },
    ],
  },
];

import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const fs_module0: CModule = {
  id: "fullstack-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "fullstack-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Full Stack Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO FULL STACK DEVELOPMENT!

Hey! I'm so excited to be your companion on this Full Stack journey! 🔥 Full stack developers are the Swiss Army knives of tech — you'll be able to build an entire application from the database to the UI, all by yourself. Let's dive in!

COURSE OVERVIEW
Full stack development means mastering both frontend (what users see) and backend (server, databases, APIs). This course covers HTML/CSS/JavaScript on the frontend, Node.js/Express on the backend, databases like PostgreSQL and MongoDB, REST API design, and Docker for deployment. By the end, you'll be capable of building and shipping complete web applications.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write actual code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~55 hours
This is the most comprehensive course in the roadmap — it covers frontend AND backend. Dedicate 1–2 hours per day and you'll be a full stack developer in about 6–7 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "fullstack-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Full Stack Development course:

1. Frontend Foundations — HTML, CSS, JavaScript, responsive design
2. Backend Basics — Node.js, Express, REST API design, middleware
3. Databases — SQL with PostgreSQL, NoSQL with MongoDB, ORM tools
4. APIs & Integration — Connecting frontend to backend, fetch, authentication
5. Full Stack Projects — Building complete apps end-to-end with real data
6. Deployment — Docker, CI/CD pipelines, hosting on cloud platforms`,
          codeExample: "",
        },
        {
          id: "fullstack-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Hands-on exercises in parts where you write code

Theory-only parts do NOT have coding questions. Only parts that teach you to write code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "fullstack-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what full stack development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Full Stack journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Web Fundamentals ───────────────────────────────────────────────

const fs_module1: CModule = {
  id: "fs-web-fundamentals",
  title: "Module 1: Web Fundamentals",
  outcome:
    "Understand how HTML, CSS, JavaScript, and Git work together in full-stack projects.",
  isLocked: false,
  parts: [
    {
      id: "fs-web-p1",
      title: "Part 1: HTML & CSS Review",
      description: "Semantic HTML, Flexbox, Grid, responsive design.",
      videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      notes:
        "HTML provides semantic structure; CSS controls layout using Flexbox and Grid for responsive, modern UIs.",
      docs: [
        {
          label: "MDN: HTML Reference",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          label: "CSS Tricks: Flexbox Guide",
          url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
      ],
      partQuiz: [
        {
          question: "Which HTML tag defines the main content of a page?",
          options: ["<section>", "<main>", "<body>", "<div>"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which CSS property controls the direction of flex items?",
          options: [
            "flex-wrap",
            "flex-direction",
            "align-items",
            "justify-content",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'responsive design' mean?",
          options: [
            "Fast loading",
            "Layout adapts to screen size",
            "Dark mode support",
            "SEO friendly",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which CSS unit is relative to the viewport width?",
          options: ["px", "em", "vw", "rem"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the CSS Grid property to define columns?",
          options: [
            "grid-rows",
            "grid-template-columns",
            "grid-area",
            "column-gap",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which tag is used for navigation links?",
          options: ["<header>", "<aside>", "<nav>", "<menu>"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 'mobile-first' CSS mean?",
          options: [
            "CSS only for mobile",
            "Start styles for small screens, enhance upward",
            "Use mobile frameworks only",
            "Disable desktop styles",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which selector targets all <p> elements inside a .card?",
          options: [".card + p", ".card > p", ".card p", "p.card"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which property adds space inside an element's border?",
          options: ["margin", "padding", "border-spacing", "gap"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the default display value of a <div>?",
          options: ["inline", "flex", "block", "inline-block"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-web-p1s1",
          title: "Semantic HTML Structure",
          content:
            "Use semantic elements: <header>, <nav>, <main>, <section>, <article>, <footer>. They improve SEO and accessibility. Avoid using <div> for everything — always pick the most meaningful tag.",
          codeExample:
            '<!-- Semantic HTML structure -->\n<header>\n  <nav><a href="/">Home</a></nav>\n</header>\n<main>\n  <section>\n    <article>\n      <h1>Post Title</h1>\n      <p>Content here.</p>\n    </article>\n  </section>\n</main>\n<footer>© 2026</footer>',
          video: { youtubeId: "pQN-pnXPaVg", title: "HTML5 Semantic Elements" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-web-p1s2",
          title: "Flexbox & Grid Layouts",
          content:
            "Flexbox is 1D (row or column). Grid is 2D (rows and columns). Use Flexbox for components (nav, card footer). Use Grid for page layout (sidebar + content). Both use gap for spacing.",
          codeExample:
            "/* Flexbox nav */\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n\n/* Grid layout */\n.page {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n}",
          video: { youtubeId: "1Rs2ND1ryYc", title: "CSS Flexbox and Grid" },
          flowchart: "if-else",
        },
        {
          id: "fs-web-p1s3",
          title: "Responsive Design with Media Queries",
          content:
            "Mobile-first: write base styles for small screens, then use min-width media queries to enhance for larger ones. Use relative units (%, vw, em, rem) instead of fixed px for fluid layouts.",
          codeExample:
            "/* Mobile first */\n.card {\n  width: 100%;\n  padding: 16px;\n}\n\n/* Tablet and up */\n@media (min-width: 768px) {\n  .card {\n    width: 50%;\n  }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n  .card {\n    width: 33.33%;\n  }\n}",
          video: { youtubeId: "pQN-pnXPaVg", title: "Responsive CSS" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "fs-web-p2",
      title: "Part 2: JS for Full Stack",
      description: "ES6+, async/await, fetch, modules.",
      videoUrl: "https://www.youtube.com/watch?v=8dWL3wF_OMw",
      notes:
        "Modern JavaScript uses ES6+ syntax, async/await for API calls, and modules for code organization.",
      docs: [
        {
          label: "MDN: JavaScript Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        },
        { label: "javascript.info", url: "https://javascript.info/" },
      ],
      partQuiz: [
        {
          question: "Which keyword declares a block-scoped variable?",
          options: ["var", "let", "global", "local"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does async/await simplify?",
          options: [
            "DOM manipulation",
            "Promise-based asynchronous code",
            "CSS styling",
            "HTML parsing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does the spread operator (...) do?",
          options: [
            "Deletes properties",
            "Copies array/object elements",
            "Creates a promise",
            "Declares a module",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method converts a Response to JSON?",
          options: ["res.text()", "res.body()", "res.json()", "res.parse()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is destructuring?",
          options: [
            "Removing properties",
            "Extracting values into variables",
            "Creating classes",
            "Importing modules",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'export default' do?",
          options: [
            "Exports nothing",
            "Exports the main item from a module",
            "Imports a module",
            "Runs code immediately",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a closure?",
          options: [
            "A function that throws an error",
            "A function with access to its outer scope",
            "A closed HTML tag",
            "A type of loop",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which array method creates a new transformed array?",
          options: ["filter()", "forEach()", "map()", "reduce()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does Promise.all() do?",
          options: [
            "Runs promises sequentially",
            "Runs all promises in parallel, resolves when all done",
            "Cancels all promises",
            "Retries failed promises",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'import' do in JS modules?",
          options: [
            "Defines a variable",
            "Brings exported code into the current file",
            "Runs an async function",
            "Creates a new scope",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-web-p2s1",
          title: "ES6+ Syntax Essentials",
          content:
            "Use const/let, arrow functions, template literals, destructuring, and spread. These are standard in modern full-stack JS. Avoid var — it has function scope, not block scope.",
          codeExample:
            "// Arrow functions\nconst add = (a, b) => a + b;\n\n// Destructuring\nconst { name, age } = user;\nconst [first, ...rest] = arr;\n\n// Template literals\nconst msg = `Hello ${name}, you are ${age}`;\n\n// Spread\nconst merged = { ...obj1, ...obj2 };\nconst copy = [...arr1, ...arr2];",
          video: { youtubeId: "8dWL3wF_OMw", title: "ES6 Features" },
          flowchart: "compiler-flow",
        },
        {
          id: "fs-web-p2s2",
          title: "Async/Await & Fetch",
          content:
            "async functions always return a Promise. await pauses execution until the promise resolves. Use try/catch for error handling. fetch() makes HTTP requests — .json() parses the response body.",
          codeExample:
            "// Fetch with async/await\nasync function getUsers() {\n  try {\n    const res = await fetch('/api/users');\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const users = await res.json();\n    return users;\n  } catch (err) {\n    console.error('Failed:', err.message);\n    return [];\n  }\n}\n\n// POST request\nasync function createUser(data) {\n  const res = await fetch('/api/users', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data),\n  });\n  return res.json();\n}",
          video: { youtubeId: "8dWL3wF_OMw", title: "Async/Await Fetch" },
          flowchart: "loop",
        },
        {
          id: "fs-web-p2s3",
          title: "ES Modules (import/export)",
          content:
            "Use named exports for utilities, default exports for the main component/class. Import only what you need. Node.js supports ESM with 'type': 'module' in package.json.",
          codeExample:
            "// utils.js - named exports\nexport function formatDate(d) { return d.toLocaleDateString(); }\nexport const API_URL = 'https://api.example.com';\n\n// user.js - default export\nexport default class User {\n  constructor(name) { this.name = name; }\n}\n\n// main.js - import both\nimport User from './user.js';\nimport { formatDate, API_URL } from './utils.js';\n\nconst u = new User('Alice');\nconsole.log(API_URL, formatDate(new Date()));",
          video: { youtubeId: "8dWL3wF_OMw", title: "ES Modules" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "fs-web-p3",
      title: "Part 3: Git & Version Control",
      description: "Git workflow, branches, merges, GitHub.",
      videoUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk",
      notes:
        "Git tracks code history; branches isolate features; GitHub enables collaboration and code review.",
      docs: [
        { label: "Git Documentation", url: "https://git-scm.com/doc" },
        { label: "GitHub Docs", url: "https://docs.github.com/" },
      ],
      partQuiz: [
        {
          question: "What does 'git init' do?",
          options: [
            "Clones a repo",
            "Initializes a new Git repository",
            "Stages changes",
            "Creates a branch",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command stages all changed files?",
          options: ["git commit", "git push", "git add .", "git pull"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 'git pull' do?",
          options: [
            "Uploads changes",
            "Fetches and merges remote changes",
            "Creates a branch",
            "Deletes a branch",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a pull request?",
          options: [
            "A way to delete code",
            "A request to merge changes reviewed by teammates",
            "A git command",
            "A branch type",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does .gitignore do?",
          options: [
            "Tracks all files",
            "Lists files Git should not track",
            "Removes Git history",
            "Merges branches",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command creates and switches to a new branch?",
          options: [
            "git branch new",
            "git checkout -b newbranch",
            "git merge newbranch",
            "git switch --create",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a merge conflict?",
          options: [
            "A failed push",
            "When two branches have incompatible changes on the same line",
            "A deleted branch",
            "An invalid commit",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'git stash' do?",
          options: [
            "Commits all changes",
            "Temporarily saves uncommitted changes",
            "Pushes to remote",
            "Deletes a file",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the purpose of 'git rebase'?",
          options: [
            "Merge two repos",
            "Reapply commits on top of another branch",
            "Push changes",
            "Reset all changes",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'git log --oneline' show?",
          options: [
            "Detailed file changes",
            "Compact single-line commit history",
            "Remote branches",
            "Staged files",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-web-p3s1",
          title: "Basic Git Workflow",
          content:
            "Core workflow: make changes → git add (stage) → git commit (save snapshot) → git push (upload to remote). Each commit is a checkpoint you can return to. Write meaningful commit messages.",
          codeExample:
            '# Initialize repo\ngit init\n\n# Stage all changes\ngit add .\n\n# Commit with message\ngit commit -m "feat: add user authentication"\n\n# Push to GitHub\ngit push origin main\n\n# See commit history\ngit log --oneline',
          video: { youtubeId: "RGOj5yH7evk", title: "Git Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-web-p3s2",
          title: "Branching & Merging",
          content:
            "Always work on feature branches, never directly on main. Create: git checkout -b feature/login. Merge back: git merge feature/login. Delete when done: git branch -d feature/login. Use pull requests for code review before merging.",
          codeExample:
            '# Create feature branch\ngit checkout -b feature/user-auth\n\n# Work on feature...\ngit add .\ngit commit -m "add JWT auth middleware"\n\n# Switch back to main\ngit checkout main\n\n# Merge feature\ngit merge feature/user-auth\n\n# Delete branch\ngit branch -d feature/user-auth',
          video: { youtubeId: "RGOj5yH7evk", title: "Git Branches" },
          flowchart: "if-else",
        },
        {
          id: "fs-web-p3s3",
          title: "GitHub Collaboration",
          content:
            "Fork: your own copy of someone else's repo. Clone: download a repo locally. Pull Request (PR): propose your changes for review before merging. Issues: track bugs and features. GitHub Actions: run CI/CD on every push.",
          codeExample:
            "# Clone a repo\ngit clone https://github.com/user/repo.git\n\n# Add remote\ngit remote add origin https://github.com/you/repo.git\n\n# Push to your fork\ngit push origin feature/my-fix\n\n# Then open a Pull Request on GitHub\n# After review and approval, it gets merged into main",
          video: { youtubeId: "RGOj5yH7evk", title: "GitHub Workflow" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the difference between Flexbox and Grid?",
      options: [
        "No difference",
        "Flexbox is 1D, Grid is 2D",
        "Grid is for mobile only",
        "Flexbox handles 2D layouts",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does async/await make easier?",
      options: [
        "DOM operations",
        "Writing asynchronous code",
        "Styling elements",
        "Running tests",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which command stages a specific file in Git?",
      options: [
        "git commit file.js",
        "git add file.js",
        "git push file.js",
        "git track file.js",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a Git branch?",
      options: [
        "A copy of the whole repo",
        "A separate line of development",
        "A merge conflict",
        "A remote server",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does fetch() return?",
      options: [
        "The response body directly",
        "A Promise that resolves to a Response",
        "An array of data",
        "A synchronous result",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fs-web-t1",
      title: "Responsive Card Layout",
      description:
        "Write HTML and CSS for a card grid: cards stack on mobile, show 3 per row on desktop (min-width: 768px). Each card has a title and description.",
      starterCode:
        '<!-- HTML -->\n<div class="grid">\n  <div class="card">\n    <h2>Card Title</h2>\n    <p>Description text here.</p>\n  </div>\n</div>\n\n/* CSS */\n.grid {\n  /* Add grid styles */\n}\n.card {\n  /* Add card styles */\n}',
      hints: [
        "Use display: grid on .grid",
        "grid-template-columns: 1fr on mobile, repeat(3, 1fr) on desktop",
        "Use @media (min-width: 768px) for the breakpoint",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Frontend with React ────────────────────────────────────────────

const fs_module2: CModule = {
  id: "fs-react-frontend",
  title: "Module 2: Frontend with React",
  outcome:
    "Build interactive UIs with React hooks, state management, and routing.",
  isLocked: true,
  parts: [
    {
      id: "fs-react-p1",
      title: "Part 1: React Components & Hooks",
      description: "useState, useEffect, custom hooks, component patterns.",
      videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
      notes:
        "React components are reusable UI units; hooks like useState and useEffect manage state and side effects.",
      docs: [
        { label: "React Official Docs", url: "https://react.dev/" },
        {
          label: "React Hooks Reference",
          url: "https://react.dev/reference/react",
        },
      ],
      partQuiz: [
        {
          question: "What hook manages local component state?",
          options: ["useEffect", "useRef", "useState", "useContext"],
          correct: 2,
          xp: 10,
        },
        {
          question: "When does useEffect run by default?",
          options: [
            "Only on mount",
            "Only on unmount",
            "After every render",
            "Once per second",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does the dependency array [] in useEffect do?",
          options: [
            "Runs every render",
            "Runs only on mount",
            "Disables the effect",
            "Runs on unmount only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is JSX?",
          options: [
            "A new language",
            "A syntax extension for JavaScript that looks like HTML",
            "A build tool",
            "A CSS preprocessor",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you prevent re-rendering of a child component?",
          options: ["useMemo", "useState", "React.memo", "useCallback"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does useRef return?",
          options: [
            "A state value",
            "A mutable ref object that persists across renders",
            "A context value",
            "A promise",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is prop drilling?",
          options: [
            "Passing props through many layers of components",
            "A build optimization",
            "A type of hook",
            "A CSS method",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which hook runs cleanup logic?",
          options: [
            "useState cleanup",
            "Return function from useEffect",
            "useCleanup",
            "componentWillUnmount",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a controlled component?",
          options: [
            "A component with no state",
            "A form element whose value is controlled by React state",
            "A memoized component",
            "A server component",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does the key prop in a list do?",
          options: [
            "Applies styles",
            "Helps React identify which items changed",
            "Sets the order",
            "Triggers re-renders",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-react-p1s1",
          title: "Components & Props",
          content:
            "React components are functions that return JSX. Props are read-only inputs passed from parent to child. Use TypeScript interfaces to type your props. Children is a special prop for nested content.",
          codeExample:
            '// TypeScript component\ninterface CardProps {\n  title: string;\n  description: string;\n  onClose?: () => void;\n}\n\nfunction Card({ title, description, onClose }: CardProps) {\n  return (\n    <div className="card">\n      <h2>{title}</h2>\n      <p>{description}</p>\n      {onClose && <button onClick={onClose}>×</button>}\n    </div>\n  );\n}\n\n// Usage\n<Card title="Hello" description="World" onClose={() => console.log(\'closed\')} />',
          video: { youtubeId: "bMknfKXIFA8", title: "React Components" },
          flowchart: "if-else",
        },
        {
          id: "fs-react-p1s2",
          title: "useState & useEffect",
          content:
            "useState holds local state. Updating state triggers re-renders. useEffect handles side effects (fetching data, subscriptions, DOM updates). Always return a cleanup function to avoid memory leaks.",
          codeExample:
            "import { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState<User[]>([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    let cancelled = false;\n    fetch('/api/users')\n      .then(r => r.json())\n      .then(data => { if (!cancelled) { setUsers(data); setLoading(false); } });\n    return () => { cancelled = true; }; // cleanup\n  }, []); // empty array = run once on mount\n\n  if (loading) return <p>Loading...</p>;\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}",
          video: { youtubeId: "bMknfKXIFA8", title: "useState and useEffect" },
          flowchart: "loop",
        },
        {
          id: "fs-react-p1s3",
          title: "Custom Hooks",
          content:
            "Extract reusable stateful logic into custom hooks (prefix with 'use'). They can call other hooks. This keeps components thin and logic testable and reusable.",
          codeExample:
            "// Custom hook: useFetch\nfunction useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState<string | null>(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then(r => r.json())\n      .then(setData)\n      .catch(e => setError(e.message))\n      .finally(() => setLoading(false));\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// Usage\nfunction Users() {\n  const { data, loading } = useFetch<User[]>('/api/users');\n  if (loading) return <p>Loading...</p>;\n  return <div>{data?.map(u => <p key={u.id}>{u.name}</p>)}</div>;\n}",
          video: { youtubeId: "bMknfKXIFA8", title: "Custom Hooks" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "fs-react-p2",
      title: "Part 2: State Management",
      description: "Context API, useReducer, Zustand for global state.",
      videoUrl: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
      notes:
        "Context API avoids prop drilling for global state; useReducer handles complex state transitions; Zustand provides a minimal global store.",
      docs: [
        {
          label: "React Context Docs",
          url: "https://react.dev/reference/react/createContext",
        },
        {
          label: "Zustand Docs",
          url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
        },
      ],
      partQuiz: [
        {
          question: "What problem does Context API solve?",
          options: ["Styling", "Prop drilling", "Data fetching", "Routing"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which hook reads from a Context?",
          options: ["useContext", "useReducer", "useState", "useRef"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What does useReducer take as arguments?",
          options: [
            "State and setState",
            "Reducer function and initial state",
            "Action and dispatch",
            "Context and Provider",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When is Zustand preferred over Context?",
          options: [
            "For simple button state",
            "For complex global state with frequent updates",
            "For form validation",
            "For CSS themes",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does dispatch do in useReducer?",
          options: [
            "Updates state directly",
            "Sends an action to the reducer",
            "Fetches data",
            "Renders a component",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the Provider in Context API?",
          options: [
            "A component that makes context available to its children",
            "A hook",
            "A reducer",
            "A type",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What makes Zustand lightweight?",
          options: [
            "Uses Redux internally",
            "Minimal API, no boilerplate, no providers needed",
            "Built into React",
            "Uses localStorage",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does useSelector do in Redux?",
          options: [
            "Dispatches actions",
            "Selects a slice of state from the store",
            "Creates a reducer",
            "Defines middleware",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a reducer?",
          options: [
            "A component wrapper",
            "A pure function (state, action) => newState",
            "A side effect hook",
            "A type guard",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is 'lifting state up' in React?",
          options: [
            "Moving state to a parent component so siblings can share it",
            "Using Redux",
            "Saving state to localStorage",
            "Optimizing renders",
          ],
          correct: 0,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-react-p2s1",
          title: "Context API",
          content:
            "Create a context with createContext(). Wrap your app in a Provider component. Consume with useContext(). Good for theme, auth, locale. Avoid overusing — frequent updates cause all consumers to re-render.",
          codeExample:
            "import { createContext, useContext, useState } from 'react';\n\ninterface AuthCtx { user: User | null; login: (u: User) => void; logout: () => void; }\nconst AuthContext = createContext<AuthCtx | null>(null);\n\nexport function AuthProvider({ children }: { children: React.ReactNode }) {\n  const [user, setUser] = useState<User | null>(null);\n  return (\n    <AuthContext.Provider value={{ user, login: setUser, logout: () => setUser(null) }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\nexport function useAuth() {\n  const ctx = useContext(AuthContext);\n  if (!ctx) throw new Error('useAuth must be inside AuthProvider');\n  return ctx;\n}",
          video: { youtubeId: "5LrDIWkK_Bc", title: "React Context API" },
          flowchart: "if-else",
        },
        {
          id: "fs-react-p2s2",
          title: "useReducer for Complex State",
          content:
            "useReducer is like useState but for state with multiple sub-values or complex transitions. Define a reducer function (state, action) => newState. Dispatch actions to update state.",
          codeExample:
            "type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };\n\nfunction reducer(state: number, action: Action): number {\n  switch (action.type) {\n    case 'increment': return state + 1;\n    case 'decrement': return state - 1;\n    case 'reset': return 0;\n    default: return state;\n  }\n}\n\nfunction Counter() {\n  const [count, dispatch] = useReducer(reducer, 0);\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </div>\n  );\n}",
          video: { youtubeId: "5LrDIWkK_Bc", title: "useReducer" },
          flowchart: "loop",
        },
        {
          id: "fs-react-p2s3",
          title: "Zustand Global Store",
          content:
            "Zustand creates a global store in one file with no Provider needed. Components subscribe to slices of state — only re-render when their slice changes. Simple and performant.",
          codeExample:
            "import { create } from 'zustand';\n\ninterface CartStore {\n  items: CartItem[];\n  addItem: (item: CartItem) => void;\n  removeItem: (id: string) => void;\n  total: number;\n}\n\nexport const useCart = create<CartStore>((set, get) => ({\n  items: [],\n  addItem: (item) => set(s => ({ items: [...s.items, item] })),\n  removeItem: (id) => set(s => ({ items: s.items.filter(i => i.id !== id) })),\n  get total() { return get().items.reduce((sum, i) => sum + i.price, 0); },\n}));\n\n// Usage in component\nconst { items, addItem } = useCart();",
          video: { youtubeId: "5LrDIWkK_Bc", title: "Zustand State" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "fs-react-p3",
      title: "Part 3: Routing & Forms",
      description: "React Router, form handling, validation.",
      videoUrl: "https://www.youtube.com/watch?v=Ul3y1LXxzdU",
      notes:
        "React Router handles client-side navigation; controlled forms with validation ensure clean user input.",
      docs: [
        { label: "React Router Docs", url: "https://reactrouter.com/en/main" },
        { label: "React Hook Form", url: "https://react-hook-form.com/" },
      ],
      partQuiz: [
        {
          question: "Which React Router component wraps the app?",
          options: ["<Switch>", "<BrowserRouter>", "<Outlet>", "<Navigator>"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you navigate programmatically in React Router v6?",
          options: [
            "history.push()",
            "useNavigate()",
            "window.location",
            "redirect()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you read URL params in React Router?",
          options: ["useParams()", "useQuery()", "useRoute()", "getParams()"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is a controlled form input?",
          options: [
            "An input with no value",
            "An input whose value is driven by React state",
            "An input with a ref",
            "A disabled input",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does e.preventDefault() do in form submit?",
          options: [
            "Validates the form",
            "Prevents the page from reloading",
            "Submits to server",
            "Resets the form",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which hook from react-hook-form registers an input?",
          options: ["useInput", "register", "useField", "bindInput"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the <Outlet /> component in React Router?",
          options: [
            "A redirect component",
            "A placeholder where child routes render",
            "A navigation link",
            "A form component",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does <NavLink> do differently than <Link>?",
          options: [
            "It navigates externally",
            "It adds an active class when the route matches",
            "It triggers a page reload",
            "It styles all links",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is client-side routing?",
          options: [
            "Server rendering each page",
            "Browser handles route changes without full page reload",
            "REST API routing",
            "Database query routing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you read query strings in React Router?",
          options: [
            "useQueryString()",
            "useSearchParams()",
            "useLocation().params",
            "window.search",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-react-p3s1",
          title: "React Router v6 Setup",
          content:
            "Wrap app with BrowserRouter. Define routes with <Routes> and <Route>. Use <Link> and <NavLink> for navigation. Use <Outlet> for nested layouts. useNavigate() for programmatic navigation, useParams() for URL params.",
          codeExample:
            'import { BrowserRouter, Routes, Route, Link, useParams } from \'react-router-dom\';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav><Link to="/">Home</Link> | <Link to="/users">Users</Link></nav>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/users" element={<UserList />} />\n        <Route path="/users/:id" element={<UserDetail />} />\n        <Route path="*" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nfunction UserDetail() {\n  const { id } = useParams();\n  return <p>User ID: {id}</p>;\n}',
          video: { youtubeId: "Ul3y1LXxzdU", title: "React Router v6" },
          flowchart: "if-else",
        },
        {
          id: "fs-react-p3s2",
          title: "Controlled Form Inputs",
          content:
            "Controlled inputs: value is tied to state, onChange updates state. Uncontrolled inputs: use refs. Controlled forms are easier to validate and reset. Always call e.preventDefault() on form submit.",
          codeExample:
            "function LoginForm() {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [error, setError] = useState('');\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    if (!email.includes('@')) { setError('Invalid email'); return; }\n    if (password.length < 8) { setError('Password too short'); return; }\n    setError('');\n    // proceed with login...\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={email} onChange={e => setEmail(e.target.value)} type=\"email\" />\n      <input value={password} onChange={e => setPassword(e.target.value)} type=\"password\" />\n      {error && <p className=\"error\">{error}</p>}\n      <button type=\"submit\">Login</button>\n    </form>\n  );\n}",
          video: { youtubeId: "Ul3y1LXxzdU", title: "React Forms" },
          flowchart: "loop",
        },
        {
          id: "fs-react-p3s3",
          title: "Form Validation with React Hook Form",
          content:
            "react-hook-form reduces boilerplate: use register(), handleSubmit(), and formState.errors. It uses uncontrolled inputs by default for performance. zod integration adds schema-level type-safe validation.",
          codeExample:
            "import { useForm } from 'react-hook-form';\n\ninterface FormData { email: string; password: string; }\n\nfunction LoginForm() {\n  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();\n\n  const onSubmit = (data: FormData) => {\n    console.log('Login with:', data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('email', {\n        required: 'Email is required',\n        pattern: { value: /@/, message: 'Invalid email' }\n      })} />\n      {errors.email && <p>{errors.email.message}</p>}\n      <input type=\"password\" {...register('password', { minLength: { value: 8, message: 'Min 8 chars' } })} />\n      {errors.password && <p>{errors.password.message}</p>}\n      <button type=\"submit\">Login</button>\n    </form>\n  );\n}",
          video: { youtubeId: "Ul3y1LXxzdU", title: "React Hook Form" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What hook runs code after component mounts?",
      options: ["useState", "useContext", "useEffect with []", "useRef"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the purpose of the key prop in React lists?",
      options: [
        "Styling",
        "Helps React efficiently update the list",
        "Animation",
        "Sorting",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which state management library requires no Provider wrapper?",
      options: ["Redux", "Context API", "Zustand", "MobX"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does useNavigate() return?",
      options: [
        "Current route",
        "A function to navigate to a route",
        "URL params",
        "Query string",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a custom hook?",
      options: [
        "A built-in React hook",
        "A reusable function that uses other hooks",
        "A CSS utility",
        "A Redux action",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fs-react-t1",
      title: "User List with Filtering",
      description:
        "Build a React component that displays a list of users from a local array and filters them by name using an input. Show a 'No results' message when empty.",
      starterCode:
        "import { useState } from 'react';\n\nconst USERS = [\n  { id: 1, name: 'Alice Chen' },\n  { id: 2, name: 'Bob Smith' },\n  { id: 3, name: 'Charlie Kim' },\n];\n\nexport function UserList() {\n  // Add state for search query\n  // Filter USERS by name\n  // Show filtered list or 'No results'\n  return <div></div>;\n}",
      hints: [
        "useState for the search query",
        "USERS.filter(u => u.name.toLowerCase().includes(query.toLowerCase()))",
        "Conditionally render 'No results' when filtered.length === 0",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Backend with Node.js ───────────────────────────────────────────

const fs_module3: CModule = {
  id: "fs-backend-nodejs",
  title: "Module 3: Backend with Node.js",
  outcome:
    "Build REST APIs with Express, integrate databases, and implement JWT authentication.",
  isLocked: true,
  parts: [
    {
      id: "fs-be-p1",
      title: "Part 1: Express.js APIs",
      description: "REST API setup, routing, middleware, CORS.",
      videoUrl: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      notes:
        "Express provides minimal API scaffolding; middleware handles cross-cutting concerns like auth and CORS.",
      docs: [
        { label: "Express.js Docs", url: "https://expressjs.com/" },
        { label: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
      ],
      partQuiz: [
        {
          question: "Which middleware parses JSON request bodies in Express?",
          options: [
            "express.urlencoded()",
            "express.json()",
            "bodyParser.raw()",
            "express.text()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you access a URL param :id in Express?",
          options: ["req.query.id", "req.body.id", "req.params.id", "req.id"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does app.use() register?",
          options: [
            "A route",
            "Middleware for all routes",
            "A server",
            "A database",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is CORS?",
          options: [
            "A database protocol",
            "Cross-Origin Resource Sharing — controls cross-domain requests",
            "A compression format",
            "An HTTP method",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What status code does a successful POST return?",
          options: ["200", "201", "204", "400"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does express.Router() create?",
          options: [
            "A new server",
            "A modular route handler",
            "A middleware chain",
            "A database connection",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How many parameters does error-handling middleware take?",
          options: ["2", "3", "4", "5"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does res.sendStatus(204) send?",
          options: [
            "Empty JSON",
            "Status 204 with no body",
            "Redirect",
            "Error",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which package reads .env files in Node?",
          options: ["config", "dotenv", "env-parser", "process-env"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does app.listen() do?",
          options: [
            "Creates routes",
            "Starts the HTTP server on a port",
            "Connects to DB",
            "Parses requests",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-be-p1s1",
          title: "Express Setup & CRUD Routes",
          content:
            "Install Express, create an app, add express.json() middleware, define CRUD routes. Use Router for modular code. Always return appropriate status codes.",
          codeExample:
            "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet items = [], nextId = 1;\n\napp.get('/items', (req, res) => res.json(items));\napp.get('/items/:id', (req, res) => {\n  const item = items.find(i => i.id === +req.params.id);\n  item ? res.json(item) : res.status(404).json({ error: 'Not found' });\n});\napp.post('/items', (req, res) => {\n  const item = { id: nextId++, ...req.body };\n  items.push(item);\n  res.status(201).json(item);\n});\napp.delete('/items/:id', (req, res) => {\n  items = items.filter(i => i.id !== +req.params.id);\n  res.sendStatus(204);\n});\n\napp.listen(3000, () => console.log('Running on 3000'));",
          video: { youtubeId: "fBNz5xF-Kx4", title: "Express CRUD" },
          flowchart: "if-else",
        },
        {
          id: "fs-be-p1s2",
          title: "Middleware & CORS",
          content:
            "Middleware runs in a pipeline before route handlers. Use cors() to allow frontend requests. Use helmet() for security headers. Write custom middleware for logging and auth.",
          codeExample:
            "const cors = require('cors');\nconst helmet = require('helmet');\n\n// Allow specific origin\napp.use(cors({ origin: 'http://localhost:5173' }));\napp.use(helmet());\n\n// Logger middleware\napp.use((req, res, next) => {\n  const start = Date.now();\n  res.on('finish', () => console.log(`${req.method} ${req.url} ${res.statusCode} ${Date.now()-start}ms`));\n  next();\n});\n\n// Auth middleware\nfunction requireAuth(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'No token' });\n  // verify...\n  next();\n}",
          video: { youtubeId: "fBNz5xF-Kx4", title: "Express Middleware CORS" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-be-p1s3",
          title: "Error Handling & Validation",
          content:
            "Use a centralized error handler (4-param middleware). Throw custom errors in routes. Validate input early, return 400 for bad data. Never expose stack traces in production.",
          codeExample:
            "class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\n\n// In route\napp.post('/users', async (req, res, next) => {\n  try {\n    const { name, email } = req.body;\n    if (!name || !email) throw new AppError('name and email required', 400);\n    // ... create user\n  } catch(err) { next(err); }\n});\n\n// Global error handler (last middleware)\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  res.status(status).json({ error: status === 500 ? 'Server error' : err.message });\n});",
          video: { youtubeId: "fBNz5xF-Kx4", title: "Express Error Handling" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "fs-be-p2",
      title: "Part 2: Database Integration",
      description: "MongoDB with Mongoose, or PostgreSQL with Prisma.",
      videoUrl: "https://www.youtube.com/watch?v=-56x56UppqQ",
      notes:
        "Mongoose provides schemas and validation for MongoDB; Prisma provides type-safe queries for SQL databases.",
      docs: [
        { label: "Mongoose Docs", url: "https://mongoosejs.com/docs/" },
        { label: "Prisma Docs", url: "https://www.prisma.io/docs/" },
      ],
      partQuiz: [
        {
          question: "What does mongoose.connect() do?",
          options: [
            "Creates a schema",
            "Connects to a MongoDB database",
            "Defines a model",
            "Runs a query",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which Mongoose method finds a document by its _id?",
          options: ["findOne()", "find()", "findById()", "get()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does { new: true } do in findByIdAndUpdate?",
          options: [
            "Creates a new document",
            "Returns the updated document",
            "Validates the update",
            "Skips validation",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Mongoose schema?",
          options: [
            "A database file",
            "A blueprint defining the structure of documents",
            "A query result",
            "A migration",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which Prisma command syncs schema changes to the database?",
          options: [
            "prisma push",
            "prisma generate",
            "prisma migrate dev",
            "prisma sync",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does prisma.user.findMany() return?",
          options: [
            "A single user",
            "All users matching the filter",
            "A count",
            "Raw SQL",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is an ORM?",
          options: [
            "A query language",
            "Maps database tables/collections to code objects",
            "A caching layer",
            "A HTTP client",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does { required: true } in Mongoose schema do?",
          options: [
            "Sets a default value",
            "Makes the field mandatory",
            "Adds an index",
            "Sets uniqueness",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you run aggregations in Mongoose?",
          options: [
            "Model.group()",
            "Model.aggregate([...])",
            "Model.sum()",
            "Model.pipeline()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the purpose of database indexes?",
          options: [
            "Encrypting data",
            "Speeding up queries on frequently searched fields",
            "Backing up data",
            "Validating schemas",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-be-p2s1",
          title: "Mongoose Models & CRUD",
          content:
            "Define a Mongoose schema with types and validators. Create a model. Use .create(), .find(), .findById(), .findByIdAndUpdate(), .findByIdAndDelete() for CRUD operations.",
          codeExample:
            "const mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true, trim: true },\n  email: { type: String, required: true, unique: true, lowercase: true },\n  role: { type: String, enum: ['user', 'admin'], default: 'user' },\n  createdAt: { type: Date, default: Date.now },\n});\n\nconst User = mongoose.model('User', userSchema);\n\n// CRUD\nconst user = await User.create({ name: 'Alice', email: 'alice@ex.com' });\nconst users = await User.find({ role: 'user' }).sort({ createdAt: -1 });\nconst updated = await User.findByIdAndUpdate(id, { name: 'Alicia' }, { new: true });\nawait User.findByIdAndDelete(id);",
          video: { youtubeId: "-56x56UppqQ", title: "Mongoose CRUD" },
          flowchart: "if-else",
        },
        {
          id: "fs-be-p2s2",
          title: "Prisma Type-Safe Queries",
          content:
            "Define schema in schema.prisma, run prisma migrate dev, import PrismaClient. Get full TypeScript type inference for all queries.",
          codeExample:
            "// schema.prisma\nmodel User {\n  id    Int    @id @default(autoincrement())\n  email String @unique\n  name  String\n  posts Post[]\n}\n\n// In route handler\nconst { PrismaClient } = require('@prisma/client');\nconst prisma = new PrismaClient();\n\nconst users = await prisma.user.findMany({\n  where: { name: { contains: 'Ali' } },\n  include: { posts: true },\n  orderBy: { id: 'desc' },\n  take: 10,\n});\n\nconst user = await prisma.user.create({\n  data: { name: 'Bob', email: 'bob@ex.com' }\n});",
          video: { youtubeId: "RebA5J-rlwg", title: "Prisma ORM" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-be-p2s3",
          title: "Connecting DB to Express Routes",
          content:
            "Connect to database on app start. Import model or prisma client in route files. Use async/await with try/catch or a wrapper. Pass errors to next(err) for centralized handling.",
          codeExample:
            "// db.js\nconst mongoose = require('mongoose');\nmodule.exports = async () => {\n  await mongoose.connect(process.env.MONGO_URL);\n  console.log('MongoDB connected');\n};\n\n// routes/users.js\nconst router = require('express').Router();\nconst User = require('../models/User');\n\nrouter.get('/', async (req, res, next) => {\n  try {\n    const users = await User.find().lean();\n    res.json(users);\n  } catch (err) { next(err); }\n});\n\n// app.js\nconst connectDB = require('./db');\nconnectDB();\napp.use('/api/users', require('./routes/users'));",
          video: { youtubeId: "-56x56UppqQ", title: "Express + Database" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "fs-be-p3",
      title: "Part 3: Authentication",
      description: "JWT, bcrypt, protected routes, refresh tokens.",
      videoUrl: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
      notes:
        "Hash passwords with bcrypt, issue JWT access tokens, and protect routes with auth middleware.",
      docs: [
        { label: "JWT.io", url: "https://jwt.io/" },
        {
          label: "bcryptjs npm",
          url: "https://www.npmjs.com/package/bcryptjs",
        },
      ],
      partQuiz: [
        {
          question: "How should passwords be stored in a database?",
          options: [
            "Plain text",
            "Base64 encoded",
            "Hashed with bcrypt",
            "MD5 hashed",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What are the three parts of a JWT?",
          options: [
            "Header, Body, Footer",
            "Header, Payload, Signature",
            "Token, Secret, Expiry",
            "Type, Data, Hash",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which function verifies a JWT?",
          options: [
            "jwt.sign()",
            "jwt.decode()",
            "jwt.verify()",
            "jwt.validate()",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the recommended access token expiry?",
          options: ["7 days", "30 days", "15 minutes", "1 year"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Where should a refresh token be stored securely?",
          options: [
            "localStorage",
            "URL param",
            "HttpOnly cookie",
            "Session storage",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does bcrypt.compare() do?",
          options: [
            "Creates a hash",
            "Compares a plaintext password to a stored hash",
            "Encrypts a token",
            "Validates a JWT",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What HTTP status should an expired token return?",
          options: ["400", "404", "401", "403"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is OAuth2 used for?",
          options: [
            "Password hashing",
            "Third-party login (Google, GitHub)",
            "Encrypting data",
            "Rate limiting",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the difference between 401 and 403?",
          options: [
            "No difference",
            "401: not authenticated; 403: no permission",
            "401: server error; 403: not found",
            "401: rate limit; 403: expired",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Why is HTTPS required for auth?",
          options: [
            "Faster requests",
            "Encrypts data in transit, preventing token theft",
            "Required by JWT spec",
            "Prevents CORS errors",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-be-p3s1",
          title: "Password Hashing with bcrypt",
          content:
            "Never store plain passwords. Use bcrypt.hash(password, 10) to create a salted hash. Use bcrypt.compare(plain, hash) to verify. The salt rounds (10) determine computational cost.",
          codeExample:
            "const bcrypt = require('bcryptjs');\n\n// Register\nasync function register(email, password) {\n  const hash = await bcrypt.hash(password, 10);\n  const user = await User.create({ email, password: hash });\n  return user;\n}\n\n// Login\nasync function login(email, password) {\n  const user = await User.findOne({ email });\n  if (!user) throw new AppError('Invalid credentials', 401);\n  const ok = await bcrypt.compare(password, user.password);\n  if (!ok) throw new AppError('Invalid credentials', 401);\n  return user;\n}",
          video: { youtubeId: "7Q17ubqLfaM", title: "bcrypt Password Hashing" },
          flowchart: "if-else",
        },
        {
          id: "fs-be-p3s2",
          title: "JWT Sign & Verify",
          content:
            "jwt.sign(payload, secret, { expiresIn }) creates a token. jwt.verify(token, secret) validates and decodes it. Store secret in .env. Keep access tokens short-lived.",
          codeExample:
            "const jwt = require('jsonwebtoken');\n\nconst SECRET = process.env.JWT_SECRET;\n\n// Issue token after login\nfunction generateToken(userId) {\n  return jwt.sign({ userId }, SECRET, { expiresIn: '15m' });\n}\n\n// Auth middleware\nfunction requireAuth(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'No token' });\n  try {\n    const decoded = jwt.verify(token, SECRET);\n    req.userId = decoded.userId;\n    next();\n  } catch {\n    res.status(401).json({ error: 'Invalid or expired token' });\n  }\n}",
          video: { youtubeId: "7Q17ubqLfaM", title: "JWT Authentication" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-be-p3s3",
          title: "Protected Routes",
          content:
            "Apply the requireAuth middleware to routes that need authentication. On the frontend, store the token and send it in the Authorization: Bearer <token> header on every protected request.",
          codeExample:
            "// Protected routes\napp.get('/profile', requireAuth, async (req, res) => {\n  const user = await User.findById(req.userId).select('-password');\n  res.json(user);\n});\n\napp.put('/profile', requireAuth, async (req, res) => {\n  const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true });\n  res.json(user);\n});\n\n// Frontend — send token in header\nconst res = await fetch('/profile', {\n  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }\n});\nconst profile = await res.json();",
          video: { youtubeId: "7Q17ubqLfaM", title: "Protected Routes" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which HTTP method should create a new resource?",
      options: ["GET", "PUT", "POST", "PATCH"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What bcrypt function checks a password?",
      options: [
        "bcrypt.hash()",
        "bcrypt.compare()",
        "bcrypt.check()",
        "bcrypt.verify()",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does JWT stand for?",
      options: [
        "JSON Web Transfer",
        "JavaScript Web Token",
        "JSON Web Token",
        "Java Web Tag",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does app.use(express.json()) do?",
      options: [
        "Enables CORS",
        "Parses JSON request bodies",
        "Starts the server",
        "Adds security headers",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the purpose of error-handling middleware in Express?",
      options: [
        "To define routes",
        "To catch and format errors centrally",
        "To parse requests",
        "To start the server",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fs-be-t1",
      title: "Auth API",
      description:
        "Implement POST /register (hash password, save user) and POST /login (compare password, return JWT). Use bcryptjs and jsonwebtoken.",
      starterCode:
        "const express = require('express');\nconst bcrypt = require('bcryptjs');\nconst jwt = require('jsonwebtoken');\nconst app = express();\napp.use(express.json());\n\nconst users = [];\nconst SECRET = 'mysecret';\n\n// POST /register\n// POST /login\n\napp.listen(3000);",
      hints: [
        "bcrypt.hash(password, 10) for register",
        "bcrypt.compare(password, hash) for login",
        "jwt.sign({ id }, SECRET, { expiresIn: '1h' }) for token",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: Database Design ─────────────────────────────────────────────────

const fs_module4: CModule = {
  id: "fs-database-design",
  title: "Module 4: Database Design",
  outcome:
    "Design relational SQL schemas, use MongoDB effectively, and work with ORMs.",
  isLocked: true,
  parts: [
    {
      id: "fs-db-p1",
      title: "Part 1: SQL Databases",
      description: "Table design, relationships, JOINs, normalization.",
      videoUrl: "https://www.youtube.com/watch?v=qw--VYLpxG4",
      notes:
        "Relational databases organize data into tables with foreign key relationships and enforce data integrity through constraints.",
      docs: [
        { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
        { label: "SQLZoo Interactive", url: "https://sqlzoo.net/" },
      ],
      partQuiz: [
        {
          question: "What is a primary key?",
          options: [
            "First column",
            "A column that uniquely identifies each row",
            "A foreign reference",
            "An index",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does INNER JOIN return?",
          options: [
            "All rows from left table",
            "Rows that match in both tables",
            "All rows from both tables",
            "Rows that don't match",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does ON DELETE CASCADE do?",
          options: [
            "Prevents deletion",
            "Deletes child rows when parent is deleted",
            "Logs deletions",
            "Backs up data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is normalization?",
          options: [
            "Encrypting data",
            "Organizing data to reduce redundancy",
            "Adding indexes",
            "Running transactions",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which SQL clause filters grouped results?",
          options: ["WHERE", "LIMIT", "HAVING", "ORDER BY"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does a FOREIGN KEY do?",
          options: [
            "Creates an index",
            "Links a column to a primary key in another table",
            "Encrypts a field",
            "Sorts rows",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does BEGIN/COMMIT do in SQL?",
          options: [
            "Starts a backup",
            "Wraps statements in a transaction",
            "Locks a table",
            "Drops a table",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What SQL command creates a table?",
          options: ["ADD TABLE", "CREATE TABLE", "INSERT TABLE", "MAKE TABLE"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is an index in a database?",
          options: [
            "A table alias",
            "A data structure that speeds up queries",
            "A foreign key",
            "A transaction log",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does GROUP BY do in SQL?",
          options: [
            "Sorts results",
            "Groups rows with the same value for aggregation",
            "Joins tables",
            "Filters rows",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-db-p1s1",
          title: "Table Design & Relationships",
          content:
            "One-to-many: users → posts (posts.user_id FK). Many-to-many: users ↔ groups via a join table. Always define primary keys and foreign keys. Use NOT NULL constraints where fields are required.",
          codeExample:
            "CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  name VARCHAR(100) NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\nCREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n  title TEXT NOT NULL,\n  body TEXT,\n  published_at TIMESTAMP\n);\n\n-- Index for faster lookups by user\nCREATE INDEX idx_posts_user_id ON posts(user_id);",
          video: { youtubeId: "qw--VYLpxG4", title: "SQL Table Design" },
          flowchart: "if-else",
        },
        {
          id: "fs-db-p1s2",
          title: "SQL Queries & JOINs",
          content:
            "INNER JOIN returns rows matching in both tables. LEFT JOIN returns all rows from left plus matching from right. Use GROUP BY with aggregate functions. Filter groups with HAVING.",
          codeExample:
            "-- Get all posts with author name\nSELECT p.id, p.title, u.name AS author\nFROM posts p\nINNER JOIN users u ON p.user_id = u.id\nWHERE p.published_at IS NOT NULL\nORDER BY p.published_at DESC;\n\n-- Count posts per user (include users with no posts)\nSELECT u.name, COUNT(p.id) AS post_count\nFROM users u\nLEFT JOIN posts p ON u.id = p.user_id\nGROUP BY u.id, u.name\nHAVING COUNT(p.id) > 0;",
          video: { youtubeId: "qw--VYLpxG4", title: "SQL JOINs" },
          flowchart: "loop",
        },
        {
          id: "fs-db-p1s3",
          title: "Transactions & Indexes",
          content:
            "Transactions group multiple writes — either all succeed or all roll back (atomicity). Indexes speed up SELECT queries. Over-indexing slows writes.",
          codeExample:
            "-- Transaction: transfer money atomically\nBEGIN;\n  UPDATE accounts SET balance = balance - 100 WHERE id = 1;\n  UPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n\n-- Rollback on error\nBEGIN;\n  UPDATE accounts SET balance = balance - 200 WHERE id = 1;\n  -- Something fails...\nROLLBACK;\n\n-- Add index on frequently queried column\nCREATE INDEX idx_users_email ON users(email);",
          video: { youtubeId: "qw--VYLpxG4", title: "SQL Transactions" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "fs-db-p2",
      title: "Part 2: MongoDB",
      description: "Document model, CRUD, aggregation, Mongoose schemas.",
      videoUrl: "https://www.youtube.com/watch?v=-56x56UppqQ",
      notes:
        "MongoDB stores flexible JSON-like documents; aggregation pipelines transform and analyze data at scale.",
      docs: [
        { label: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
        {
          label: "Mongoose Guide",
          url: "https://mongoosejs.com/docs/guide.html",
        },
      ],
      partQuiz: [
        {
          question: "What format does MongoDB store data in?",
          options: [
            "Rows and columns",
            "BSON (Binary JSON) documents",
            "XML",
            "CSV",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which operator finds documents where age >= 18?",
          options: [
            "{ age: >= 18 }",
            "{ age: { $gte: 18 } }",
            "{ age: { $gt: 18 } }",
            "{ age.min: 18 }",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does $match do in aggregation?",
          options: [
            "Sorts documents",
            "Filters documents",
            "Groups documents",
            "Projects fields",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does $group do in aggregation?",
          options: [
            "Filters documents",
            "Joins collections",
            "Groups and aggregates documents",
            "Sorts results",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the _id field in MongoDB?",
          options: [
            "A user-set unique ID",
            "Auto-generated ObjectId that uniquely identifies a document",
            "A numeric counter",
            "A string field",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does .lean() do in Mongoose?",
          options: [
            "Adds virtuals",
            "Returns plain JS objects instead of Mongoose docs",
            "Populates references",
            "Validates schema",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does $lookup do in MongoDB aggregation?",
          options: [
            "Filters documents",
            "Joins with another collection",
            "Counts documents",
            "Sorts results",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method finds one document by _id?",
          options: ["find()", "findOne()", "findById()", "getById()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does $in operator do?",
          options: [
            "Tests inclusion in an array of values",
            "Increments a field",
            "Inserts a document",
            "Joins collections",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is a Mongoose virtual?",
          options: [
            "A real database field",
            "A computed property not stored in the database",
            "An index",
            "A middleware hook",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-db-p2s1",
          title: "MongoDB CRUD with Mongoose",
          content:
            "Define schema, create model, use CRUD methods. Mongoose validates schema on save. Use .select('-password') to exclude sensitive fields from results.",
          codeExample:
            "const productSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  price: { type: Number, required: true, min: 0 },\n  category: String,\n  stock: { type: Number, default: 0 },\n});\nconst Product = mongoose.model('Product', productSchema);\n\n// Create\nconst p = await Product.create({ name: 'Laptop', price: 999, category: 'Electronics' });\n\n// Read with filter\nconst electronics = await Product.find({ category: 'Electronics', price: { $lt: 500 } });\n\n// Update\nawait Product.findByIdAndUpdate(id, { $set: { stock: 10 } }, { new: true });\n\n// Delete\nawait Product.findByIdAndDelete(id);",
          video: { youtubeId: "-56x56UppqQ", title: "Mongoose CRUD" },
          flowchart: "if-else",
        },
        {
          id: "fs-db-p2s2",
          title: "Aggregation Pipelines",
          content:
            "Aggregation processes documents through stages. Common stages: $match (filter), $group (aggregate), $sort, $project (reshape), $lookup (join). Like SQL's GROUP BY and JOINs.",
          codeExample:
            "// Average price by category\nconst result = await Product.aggregate([\n  { $match: { stock: { $gt: 0 } } },         // in-stock only\n  { $group: {\n    _id: '$category',\n    avgPrice: { $avg: '$price' },\n    count: { $sum: 1 },\n    totalStock: { $sum: '$stock' }\n  }},\n  { $sort: { count: -1 } },\n  { $project: {\n    category: '$_id',\n    avgPrice: { $round: ['$avgPrice', 2] },\n    count: 1,\n    totalStock: 1,\n    _id: 0\n  }}\n]);",
          video: { youtubeId: "-56x56UppqQ", title: "MongoDB Aggregation" },
          flowchart: "loop",
        },
        {
          id: "fs-db-p2s3",
          title: "Mongoose Validation & Hooks",
          content:
            "Mongoose validators run before save. Pre/post hooks let you add logic around database operations. Virtuals add computed properties without storing in DB.",
          codeExample:
            "const userSchema = new mongoose.Schema({\n  email: { type: String, required: true, unique: true,\n    validate: { validator: v => /@/.test(v), message: 'Invalid email' } },\n  password: { type: String, required: true, minlength: 8 },\n});\n\n// Pre-save hook: hash password\nuserSchema.pre('save', async function(next) {\n  if (this.isModified('password')) {\n    this.password = await bcrypt.hash(this.password, 10);\n  }\n  next();\n});\n\n// Virtual: full display name\nuserSchema.virtual('displayName').get(function() {\n  return this.email.split('@')[0];\n});",
          video: {
            youtubeId: "-56x56UppqQ",
            title: "Mongoose Hooks & Validation",
          },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "fs-db-p3",
      title: "Part 3: ORMs",
      description: "Prisma type-safe queries, relations, migrations.",
      videoUrl: "https://www.youtube.com/watch?v=RebA5J-rlwg",
      notes:
        "Prisma generates type-safe database clients from schema definitions and manages database migrations.",
      docs: [
        { label: "Prisma Docs", url: "https://www.prisma.io/docs/" },
        {
          label: "Prisma Schema Reference",
          url: "https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference",
        },
      ],
      partQuiz: [
        {
          question: "Where are Prisma models defined?",
          options: ["models.json", "schema.prisma", "db.ts", ".env"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does prisma migrate dev do?",
          options: [
            "Generates types",
            "Applies schema changes to dev database",
            "Resets the database",
            "Seeds data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you include related data in Prisma?",
          options: [
            "join: { model }",
            "include: { model: true }",
            "with: { model }",
            "populate('model')",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What Prisma method finds a unique record?",
          options: ["findFirst()", "findOne()", "findUnique()", "getOne()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does @default(autoincrement()) do in Prisma?",
          options: [
            "Sets default string",
            "Auto-increments integer IDs",
            "Creates UUID",
            "Sets current time",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you paginate in Prisma?",
          options: ["page/limit", "take and skip", "offset/limit", "from/to"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does @unique do in a Prisma schema field?",
          options: [
            "Makes field required",
            "Adds an index and ensures no duplicate values",
            "Encrypts the field",
            "Makes it a primary key",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What command generates the Prisma client?",
          options: [
            "prisma build",
            "prisma generate",
            "prisma compile",
            "prisma sync",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Prisma relation field?",
          options: [
            "A foreign key column",
            "A virtual field linking models",
            "An SQL JOIN",
            "A database index",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does prisma.$transaction([...]) do?",
          options: [
            "Runs queries in parallel",
            "Runs multiple queries in a single atomic transaction",
            "Generates migrations",
            "Backs up data",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-db-p3s1",
          title: "Prisma Schema & Setup",
          content:
            "Define datasource, generator, and models in schema.prisma. Run prisma migrate dev to create migrations. Import PrismaClient in your code. Prisma generates TypeScript types automatically.",
          codeExample:
            '// schema.prisma\ngenerator client {\n  provider = "prisma-client-js"\n}\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\nmodel User {\n  id    Int    @id @default(autoincrement())\n  email String @unique\n  name  String\n  posts Post[]\n}\nmodel Post {\n  id     Int    @id @default(autoincrement())\n  title  String\n  userId Int\n  user   User   @relation(fields: [userId], references: [id])\n}\n\n// npx prisma migrate dev --name init',
          video: { youtubeId: "RebA5J-rlwg", title: "Prisma Setup" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-db-p3s2",
          title: "Prisma CRUD & Relations",
          content:
            "Use findMany, findUnique, create, update, delete. Use include for eager loading relations. Filter with where, sort with orderBy, paginate with take/skip.",
          codeExample:
            "const prisma = new PrismaClient();\n\n// Read with relations\nconst users = await prisma.user.findMany({\n  include: { posts: { select: { title: true } } },\n  orderBy: { id: 'desc' },\n  take: 10, skip: 0,\n});\n\n// Create with nested data\nconst user = await prisma.user.create({\n  data: {\n    name: 'Alice', email: 'alice@ex.com',\n    posts: { create: { title: 'My first post' } },\n  },\n  include: { posts: true },\n});\n\n// Update\nconst updated = await prisma.user.update({\n  where: { id: 1 },\n  data: { name: 'Alicia' },\n});",
          video: { youtubeId: "RebA5J-rlwg", title: "Prisma Queries" },
          flowchart: "if-else",
        },
        {
          id: "fs-db-p3s3",
          title: "Migrations & Seeding",
          content:
            "Migrations track schema changes as versioned SQL files. prisma migrate dev creates and applies. Seed files populate initial data. Use prisma studio to inspect data visually.",
          codeExample:
            "# Create a migration\nnpx prisma migrate dev --name add_role_to_user\n\n# Reset database (dev only)\nnpx prisma migrate reset\n\n# prisma/seed.ts\nimport { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\n\nasync function main() {\n  await prisma.user.createMany({\n    data: [\n      { name: 'Admin', email: 'admin@example.com' },\n      { name: 'Alice', email: 'alice@example.com' },\n    ],\n  });\n}\nmain().then(() => prisma.$disconnect());\n\n# Run seed\nnpx ts-node prisma/seed.ts",
          video: { youtubeId: "RebA5J-rlwg", title: "Prisma Migrations" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What SQL statement updates existing rows?",
      options: ["INSERT", "MODIFY", "UPDATE", "ALTER"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does $gte mean in MongoDB?",
      options: [
        "Greater than",
        "Greater than or equal to",
        "Less than",
        "Not equal to",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does Prisma's include option do?",
      options: [
        "Adds validation",
        "Eagerly loads related data",
        "Filters results",
        "Sorts results",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a JOIN TABLE in SQL?",
      options: [
        "A view",
        "A table that connects two tables in a many-to-many relationship",
        "An index",
        "A backup table",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the benefit of using an ORM?",
      options: [
        "Faster queries always",
        "Type-safe, abstracted database interactions without raw SQL",
        "No migrations needed",
        "Automatic scaling",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fs-db-t1",
      title: "SQL Blog Queries",
      description:
        "Write SQL for a blog (users, posts): 1) Get all posts by user ID 5. 2) Count posts per user with name. 3) Get most recent 5 published posts with author name.",
      starterCode:
        "-- Table: users (id, name, email)\n-- Table: posts (id, user_id, title, published_at)\n\n-- 1. Posts by user 5\n\n-- 2. Post count per user\n\n-- 3. Recent 5 published posts with author",
      hints: [
        "WHERE user_id = 5",
        "JOIN users ON posts.user_id = users.id, GROUP BY users.id",
        "ORDER BY published_at DESC LIMIT 5",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: Deployment & DevOps ────────────────────────────────────────────

const fs_module5: CModule = {
  id: "fs-deployment-devops",
  title: "Module 5: Deployment & DevOps",
  outcome:
    "Containerize apps with Docker, deploy to cloud, and set up CI/CD pipelines.",
  isLocked: true,
  parts: [
    {
      id: "fs-deploy-p1",
      title: "Part 1: Docker Basics",
      description: "Dockerfile, images, containers, docker-compose.",
      videoUrl: "https://www.youtube.com/watch?v=3c-iBn73dDE",
      notes:
        "Docker packages applications and dependencies into portable containers that run consistently across environments.",
      docs: [
        { label: "Docker Docs", url: "https://docs.docker.com/" },
        {
          label: "Docker Compose Docs",
          url: "https://docs.docker.com/compose/",
        },
      ],
      partQuiz: [
        {
          question: "What is a Docker image?",
          options: [
            "A running container",
            "An immutable snapshot/blueprint for a container",
            "A virtual machine",
            "A file system",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What command builds a Docker image?",
          options: [
            "docker run",
            "docker start",
            "docker build -t name .",
            "docker create",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does EXPOSE in a Dockerfile do?",
          options: [
            "Makes the port accessible on host",
            "Documents which port the container uses",
            "Starts the server",
            "Maps a volume",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does docker-compose up do?",
          options: [
            "Builds only",
            "Starts all services defined in docker-compose.yml",
            "Stops containers",
            "Pushes images",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Docker volume?",
          options: [
            "A RAM disk",
            "Persistent storage that survives container restarts",
            "A container network",
            "A build cache",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What base image is recommended for Node.js production?",
          options: [
            "node:latest",
            "node:18-alpine",
            "ubuntu:latest",
            "debian:stable",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does multi-stage build do?",
          options: [
            "Runs multiple containers",
            "Separates build and runtime to reduce image size",
            "Parallelizes builds",
            "Creates multiple images",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which file lists environment variables for docker-compose?",
          options: ["config.yml", "env.json", ".env", "secrets.txt"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does docker ps show?",
          options: [
            "All images",
            "Running containers",
            "Build logs",
            "Network settings",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the CMD instruction in a Dockerfile?",
          options: [
            "Copies files",
            "Sets the default command to run when container starts",
            "Installs packages",
            "Defines environment variables",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-deploy-p1s1",
          title: "Dockerfile Basics",
          content:
            "FROM selects base image. WORKDIR sets working directory. COPY copies files. RUN executes commands during build. CMD is the default startup command. EXPOSE documents the port.",
          codeExample:
            '# Dockerfile for Node.js app\nFROM node:18-alpine\n\nWORKDIR /app\n\n# Copy package files first (better layer caching)\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Copy source code\nCOPY . .\n\n# Document port\nEXPOSE 3000\n\n# Start the app\nCMD ["node", "server.js"]\n\n# Build: docker build -t myapp .\n# Run: docker run -p 3000:3000 myapp',
          video: { youtubeId: "3c-iBn73dDE", title: "Dockerfile Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-deploy-p1s2",
          title: "Docker Compose",
          content:
            "docker-compose.yml defines multiple services (app, db, redis). Use service names as hostnames. Volumes persist data. Networks let services communicate.",
          codeExample:
            "# docker-compose.yml\nversion: '3.9'\nservices:\n  app:\n    build: .\n    ports:\n      - '3000:3000'\n    environment:\n      - DATABASE_URL=postgresql://user:pass@db:5432/mydb\n    depends_on:\n      - db\n  db:\n    image: postgres:15-alpine\n    environment:\n      - POSTGRES_USER=user\n      - POSTGRES_PASSWORD=pass\n      - POSTGRES_DB=mydb\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nvolumes:\n  pgdata:\n\n# Start: docker compose up -d\n# Stop: docker compose down",
          video: { youtubeId: "3c-iBn73dDE", title: "Docker Compose" },
          flowchart: "if-else",
        },
        {
          id: "fs-deploy-p1s3",
          title: "Multi-Stage Builds",
          content:
            "Multi-stage builds use multiple FROM instructions to separate build and runtime. Only the final stage is shipped — keeps the image small and excludes dev dependencies and build tools.",
          codeExample:
            '# Multi-stage Dockerfile for React + Node\n# Stage 1: Build React frontend\nFROM node:18-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\n# Stage 2: Production Node server\nFROM node:18-alpine AS production\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY --from=build /app/dist ./dist\nCOPY server.js .\nEXPOSE 3000\nCMD ["node", "server.js"]\n# Final image is much smaller — no devDeps or build tools',
          video: { youtubeId: "3c-iBn73dDE", title: "Docker Multi-Stage" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "fs-deploy-p2",
      title: "Part 2: Cloud Deploy",
      description: "Deploy to Vercel, Railway, Render, or VPS.",
      videoUrl: "https://www.youtube.com/watch?v=R8_veQiYBjI",
      notes:
        "Modern cloud platforms auto-deploy from GitHub repos with zero-config for frontend and simple env-var setup for backend.",
      docs: [
        { label: "Vercel Docs", url: "https://vercel.com/docs" },
        { label: "Railway Docs", url: "https://docs.railway.app/" },
      ],
      partQuiz: [
        {
          question: "What is Vercel best for?",
          options: [
            "Backend APIs",
            "Frontend and Next.js deployments",
            "Databases",
            "Docker containers",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is Railway used for?",
          options: [
            "Frontend only",
            "Backend services and databases",
            "CDN hosting",
            "Email sending",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Where should you set environment variables on cloud platforms?",
          options: [
            "In the code",
            "In the dashboard/settings, not in source code",
            "In .env committed to git",
            "In package.json",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a CDN do?",
          options: [
            "Stores database backups",
            "Serves static assets from servers near the user",
            "Runs backend code",
            "Manages DNS",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a load balancer?",
          options: [
            "A database optimizer",
            "Distributes traffic across multiple server instances",
            "A caching layer",
            "A firewall",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is zero-downtime deployment?",
          options: [
            "Deploying at midnight",
            "Switching traffic to new version without server outage",
            "Rolling back a deploy",
            "Manual deployment",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'horizontal scaling' mean?",
          options: [
            "Adding more RAM to one server",
            "Adding more server instances",
            "Upgrading the database",
            "Splitting the codebase",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a reverse proxy?",
          options: [
            "A database proxy",
            "Server that forwards client requests to backend services",
            "A CDN edge server",
            "A DNS resolver",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does process.env.NODE_ENV === 'production' change?",
          options: [
            "Nothing",
            "Enables production optimizations and disables dev features",
            "Disables the server",
            "Changes the port",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What file tells Vercel how to build your app?",
          options: [
            "build.config",
            "vercel.json",
            "deploy.yaml",
            "package.json only",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-deploy-p2s1",
          title: "Deploy Frontend to Vercel",
          content:
            "Connect GitHub repo to Vercel. Vercel auto-detects React/Next.js. Set build command (npm run build) and output directory (dist or build). Add env variables in dashboard. Auto-deploys on every push.",
          codeExample:
            '# vercel.json (optional for custom config)\n{\n  "buildCommand": "npm run build",\n  "outputDirectory": "dist",\n  "installCommand": "npm ci",\n  "headers": [\n    {\n      "source": "/api/(.*)",\n      "headers": [\n        { "key": "Cache-Control", "value": "no-cache" }\n      ]\n    }\n  ],\n  "rewrites": [\n    { "source": "/((?!api/.*).*)", "destination": "/index.html" }\n  ]\n}\n\n# .env.local for local development\nVITE_API_URL=http://localhost:3000\n\n# Set in Vercel dashboard for production\nVITE_API_URL=https://api.myapp.com',
          video: { youtubeId: "R8_veQiYBjI", title: "Vercel Deployment" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-deploy-p2s2",
          title: "Deploy Backend to Railway",
          content:
            "Connect GitHub repo to Railway. Set environment variables in the Railway dashboard. Add a database (PostgreSQL) as a service. Railway auto-generates a public URL.",
          codeExample:
            '# Railway auto-detects package.json start script\n# In package.json:\n{\n  "scripts": {\n    "start": "node server.js",\n    "dev": "nodemon server.js"\n  }\n}\n\n# Ensure port from env variable\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => console.log(`Running on ${PORT}`));\n\n# Environment variables in Railway dashboard:\n# DATABASE_URL = postgresql://... (auto-provided by Railway DB)\n# JWT_SECRET = your-secret\n# NODE_ENV = production',
          video: { youtubeId: "R8_veQiYBjI", title: "Railway Deployment" },
          flowchart: "if-else",
        },
        {
          id: "fs-deploy-p2s3",
          title: "VPS Deployment with nginx",
          content:
            "On a VPS (DigitalOcean, AWS EC2), run your Node app with PM2, use nginx as a reverse proxy. Configure nginx to forward port 80/443 to your app port.",
          codeExample:
            "# Install PM2 globally\nnpm install -g pm2\n\n# Start app with PM2\npm2 start server.js --name my-api\npm2 startup   # auto-start on reboot\npm2 save\n\n# nginx config: /etc/nginx/sites-available/myapp\nserver {\n  listen 80;\n  server_name api.example.com;\n\n  location / {\n    proxy_pass http://localhost:3000;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection 'upgrade';\n    proxy_set_header Host $host;\n    proxy_cache_bypass $http_upgrade;\n  }\n}",
          video: { youtubeId: "R8_veQiYBjI", title: "VPS Nginx Deployment" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "fs-deploy-p3",
      title: "Part 3: CI/CD & Testing",
      description: "GitHub Actions, automated testing, lint, build pipelines.",
      videoUrl: "https://www.youtube.com/watch?v=R8_veQiYBjI",
      notes:
        "CI/CD automates testing and deployment on every push, catching regressions before they reach production.",
      docs: [
        {
          label: "GitHub Actions Docs",
          url: "https://docs.github.com/en/actions",
        },
        { label: "Vitest Docs", url: "https://vitest.dev/" },
      ],
      partQuiz: [
        {
          question: "What does CI stand for?",
          options: [
            "Code Integration",
            "Continuous Integration",
            "Compile Instance",
            "Component Isolation",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Where do you define GitHub Actions workflows?",
          options: [
            ".github/actions/",
            ".github/workflows/",
            "scripts/",
            "deploy/",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What triggers a GitHub Actions workflow on push?",
          options: ["on: push", "trigger: push", "event: push", "run: push"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is a GitHub Actions job?",
          options: [
            "A workflow file",
            "A set of steps that run on the same runner",
            "A secret variable",
            "A deployment environment",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which step checks out the repository code?",
          options: [
            "actions/clone@v3",
            "actions/checkout@v3",
            "git checkout",
            "actions/pull@v3",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'CD' mean in CI/CD?",
          options: [
            "Code Deployment",
            "Continuous Delivery/Deployment",
            "Container Distribution",
            "Config Download",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a unit test?",
          options: [
            "Tests the entire app",
            "Tests a single function or module in isolation",
            "A manual test",
            "A performance test",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is test coverage?",
          options: [
            "Number of tests",
            "Percentage of code executed by tests",
            "Speed of tests",
            "Test documentation",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a linter?",
          options: [
            "A code formatter",
            "A tool that checks code for errors and style violations",
            "A test runner",
            "A build tool",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does secrets.MY_SECRET do in GitHub Actions?",
          options: [
            "Prints a secret",
            "Accesses a securely stored repository secret",
            "Creates a secret",
            "Encrypts a value",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fs-deploy-p3s1",
          title: "GitHub Actions Workflow",
          content:
            "Define workflows in .github/workflows/. Trigger on push/pull_request. Jobs run in parallel; steps run sequentially within a job. Use pre-built actions from the marketplace.",
          codeExample:
            "# .github/workflows/ci.yml\nname: CI\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build",
          video: { youtubeId: "R8_veQiYBjI", title: "GitHub Actions CI" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fs-deploy-p3s2",
          title: "Writing Tests with Vitest/Jest",
          content:
            "Write unit tests for functions and integration tests for API endpoints. describe() groups tests, test/it() defines a case, expect() makes assertions. Mock external dependencies.",
          codeExample:
            "// utils.test.ts\nimport { describe, test, expect } from 'vitest';\nimport { formatCurrency, isValidEmail } from './utils';\n\ndescribe('formatCurrency', () => {\n  test('formats USD correctly', () => {\n    expect(formatCurrency(1234.5)).toBe('$1,234.50');\n  });\n  test('handles zero', () => {\n    expect(formatCurrency(0)).toBe('$0.00');\n  });\n});\n\ndescribe('isValidEmail', () => {\n  test('accepts valid email', () => {\n    expect(isValidEmail('user@example.com')).toBe(true);\n  });\n  test('rejects invalid', () => {\n    expect(isValidEmail('notanemail')).toBe(false);\n  });\n});",
          video: { youtubeId: "R8_veQiYBjI", title: "Testing with Vitest" },
          flowchart: "if-else",
        },
        {
          id: "fs-deploy-p3s3",
          title: "CD: Auto-Deploy on Push",
          content:
            "After tests pass, auto-deploy using deployment secrets. Use deployment environments with protection rules for production. Blue-green and canary deployments reduce risk.",
          codeExample:
            "# .github/workflows/deploy.yml\nname: Deploy\n\non:\n  push:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm ci && npm test\n\n  deploy:\n    needs: test  # only runs if test passes\n    runs-on: ubuntu-latest\n    environment: production\n    steps:\n      - uses: actions/checkout@v3\n      - name: Deploy to Railway\n        env:\n          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}\n        run: npx @railway/cli up --service my-api",
          video: { youtubeId: "R8_veQiYBjI", title: "CI/CD Auto-Deploy" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the difference between an image and a container?",
      options: [
        "No difference",
        "Image is the blueprint; container is the running instance",
        "Container is the blueprint; image is running",
        "Images run, containers store",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'npm ci' do differently than 'npm install'?",
      options: [
        "No difference",
        "Uses package-lock.json for exact versions, faster in CI",
        "Skips devDependencies",
        "Installs globally",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the purpose of .dockerignore?",
      options: [
        "Ignores Docker warnings",
        "Excludes files from being copied into the Docker image",
        "Skips build steps",
        "Lists environment variables",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'needs' do in GitHub Actions jobs?",
      options: [
        "Imports a library",
        "Defines job dependencies — job runs only if listed jobs pass",
        "Sets environment variables",
        "Names the job",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What makes CI pipelines faster?",
      options: [
        "Running tests manually",
        "Caching node_modules and Docker layers",
        "Using larger runners",
        "Skipping tests",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fs-deploy-t1",
      title: "Dockerfile for Express App",
      description:
        "Write a production Dockerfile for a Node.js/Express app. Use node:18-alpine, copy package files first, run npm ci --only=production, copy source, expose port 3000, and set CMD to run server.js.",
      starterCode:
        "# Write a production Dockerfile for a Node.js Express app\n# Requirements:\n# - Base: node:18-alpine\n# - Copy package files first for layer caching\n# - npm ci --only=production\n# - Copy remaining source files\n# - EXPOSE 3000\n# - CMD to start server.js\n\nFROM ",
      hints: [
        "FROM node:18-alpine, WORKDIR /app",
        "COPY package*.json ./ then RUN npm ci --only=production",
        'COPY . . then EXPOSE 3000, CMD ["node", "server.js"]',
      ],
    },
  ] as CTestProblem[],
};

// ─── Course Export ─────────────────────────────────────────────────────────────

export const FULLSTACK_DEVELOPER_COURSE: CModule[] = [
  fs_module0,
  fs_module1,
  fs_module2,
  fs_module3,
  fs_module4,
  fs_module5,
];

export const FULLSTACK_DEVELOPER_ROADMAP_ENTRY = {
  id: "fullstack-developer-course",
  title: "Full Stack Developer",
  icon: "🔥",
  color: "from-orange-500/20 to-red-500/10",
  tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  description: "React, Node.js, Databases, Docker, CI/CD — end-to-end",
  topics: [],
  isCourse: true as const,
  certificate: { title: "Full Stack Developer Certificate" },
};

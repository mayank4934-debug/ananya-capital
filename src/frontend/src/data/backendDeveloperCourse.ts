import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const be_module0: CModule = {
  id: "backend-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "backend-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Backend Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO BACKEND DEVELOPMENT!

Hey! I'm so pumped to be your companion on this Backend Development journey! ⚙️ Backend is where the real power lives — you'll be building the engines that power apps used by millions. I'll guide you from understanding servers all the way to building production-ready APIs and databases!

COURSE OVERVIEW
Backend development is the server-side logic that makes applications work. You'll learn Node.js and Express for building fast servers, databases (SQL and NoSQL) for storing data, REST and GraphQL APIs for communication, authentication systems for security, and Docker for deployment. Backend developers are among the highest-paid in tech.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write server code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~45 hours
This is a comprehensive backend course. Dedicate 1–2 hours per day and you'll be building real APIs in about 5 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "backend-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Backend Development course:

1. Server Fundamentals — HTTP, request/response cycle, how servers work
2. Node.js & Express — Setting up a server, routing, middleware, error handling
3. Databases — SQL with PostgreSQL, NoSQL with MongoDB, queries & aggregation
4. REST APIs — RESTful design principles, CRUD operations, API versioning
5. Authentication — JWT, sessions, OAuth, hashing passwords, authorization
6. DevOps Basics — Docker, environment variables, deployment strategies
7. Capstone — Build a full production-grade REST API from scratch`,
          codeExample: "",
        },
        {
          id: "backend-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Hands-on exercises in parts where you write server-side code

Theory-only parts (like "How HTTP works") do NOT have coding questions. Only parts where you write actual code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "backend-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what backend development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Backend Development journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Server & Node.js Basics ────────────────────────────────────────

const be_module1: CModule = {
  id: "be-server-basics",
  title: "Module 1: Server & Node.js Basics",
  outcome:
    "Understand how servers work, set up Node.js, and build routes with Express.",
  isLocked: false,
  parts: [
    {
      id: "be-server-p1",
      title: "Part 1: How Servers Work",
      description: "HTTP, request/response cycle, client-server model.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=iYM2zFP3Zn0",
      notes:
        "HOW SERVERS WORK\n\nA server listens for incoming requests and sends back responses. HTTP is the protocol used — it is stateless and text-based. Every request has a method (GET, POST, PUT, DELETE), a URL, headers, and optionally a body. The server processes the request and returns a response with a status code (200 OK, 404 Not Found, 500 Server Error) and a body. DNS resolves domain names to IP addresses. TCP/IP handles the actual data transport.",
      docs: [
        {
          label: "MDN: HTTP Overview",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
        },
        {
          label: "MDN: HTTP Status Codes",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
        },
      ],
      partQuiz: [
        {
          question: "What does HTTP stand for?",
          options: [
            "HyperText Transfer Protocol",
            "High Traffic Transmission Protocol",
            "HyperText Transport Package",
            "Host Transfer Text Protocol",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which HTTP method is used to retrieve data?",
          options: ["POST", "PUT", "GET", "DELETE"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What status code means 'Not Found'?",
          options: ["200", "201", "400", "404"],
          correct: 3,
          xp: 10,
        },
        {
          question: "What does DNS do?",
          options: [
            "Encrypts data",
            "Resolves domain names to IP addresses",
            "Manages cookies",
            "Handles authentication",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "HTTP is:",
          options: ["Stateful", "Stateless", "Always encrypted", "Binary only"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-server-p1s1",
          title: "Client-Server Model",
          content:
            "A client (browser, app) sends a request to a server. The server processes it and returns a response. This is the foundation of the web. Servers can be physical machines or cloud instances. The server runs software (Node.js, Apache, Nginx) that handles incoming connections.",
          codeExample:
            '// HTTP Request Example (conceptual)\nGET /users/123 HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer token123\n\n// HTTP Response\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{"id": 123, "name": "Alice"}',
          video: { youtubeId: "iYM2zFP3Zn0", title: "How HTTP Works" },
          flowchart: "compiler-flow",
        },
        {
          id: "be-server-p1s2",
          title: "HTTP Methods & Status Codes",
          content:
            "GET: read data (no body). POST: create new resource (has body). PUT: replace resource. PATCH: partial update. DELETE: remove resource. Status codes: 2xx success, 3xx redirect, 4xx client error, 5xx server error. Always use the correct method and status code.",
          codeExample:
            "// Common status codes:\n// 200 OK - success\n// 201 Created - resource created\n// 204 No Content - success, no body\n// 400 Bad Request - invalid input\n// 401 Unauthorized - not authenticated\n// 403 Forbidden - authenticated but no access\n// 404 Not Found\n// 422 Unprocessable Entity - validation error\n// 500 Internal Server Error",
          video: {
            youtubeId: "iYM2zFP3Zn0",
            title: "HTTP Methods & Status Codes",
          },
          flowchart: "if-else",
        },
        {
          id: "be-server-p1s3",
          title: "Headers, Body & JSON",
          content:
            "HTTP headers carry metadata: Content-Type, Authorization, Accept, CORS headers. Request body sends data (POST/PUT). JSON is the standard format for APIs: Content-Type: application/json. Use JSON.stringify() to encode and JSON.parse() to decode. Always validate incoming request data.",
          codeExample:
            '// Request with JSON body\nPOST /users HTTP/1.1\nContent-Type: application/json\nAuthorization: Bearer mytoken\n\n{"name": "Alice", "email": "alice@example.com"}\n\n// JavaScript - parse JSON response\nconst res = await fetch(\'/api/users\');\nconst data = await res.json();\nconsole.log(data);',
          video: { youtubeId: "iYM2zFP3Zn0", title: "HTTP Headers and JSON" },
        },
      ],
    },
    {
      id: "be-server-p2",
      title: "Part 2: Node.js & npm",
      description: "Node.js runtime, modules, npm package management.",
      videoUrl: "https://www.youtube.com/watch?v=Oe421EPjeBE",
      notes:
        "NODE.JS & NPM\n\nNode.js runs JavaScript on the server using V8 engine. It is event-driven and non-blocking — perfect for I/O-heavy tasks. npm (Node Package Manager) installs packages. package.json lists dependencies. Key built-in modules: fs (file system), path, http, os. Use require() (CommonJS) or import (ESM). process.env for environment variables. Node handles many connections concurrently via the event loop.",
      docs: [
        { label: "Node.js Official Docs", url: "https://nodejs.org/en/docs/" },
        { label: "npm Documentation", url: "https://docs.npmjs.com/" },
      ],
      partQuiz: [
        {
          question: "What engine does Node.js use to run JavaScript?",
          options: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which command initializes a new Node project?",
          options: ["node start", "npm init", "npm run", "node new"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is package.json?",
          options: [
            "A runtime config",
            "A file listing project dependencies and scripts",
            "A lock file",
            "A build artifact",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does require('fs') give you?",
          options: [
            "File system module",
            "A framework",
            "React",
            "Database access",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "How do you read an env variable in Node?",
          options: ["env.VAR", "process.env.VAR", "node.env.VAR", "config.VAR"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-server-p2s1",
          title: "Node.js Basics & Event Loop",
          content:
            "Node.js is single-threaded but handles concurrency via the event loop. Async I/O operations (file reads, DB queries, HTTP calls) are offloaded — when done, the callback runs. This makes Node efficient for high-concurrency APIs. Avoid CPU-heavy synchronous tasks on the main thread.",
          codeExample:
            "// Node.js built-in http server\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ message: 'Hello from Node!' }));\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
          video: { youtubeId: "Oe421EPjeBE", title: "Node.js Event Loop" },
          flowchart: "loop",
        },
        {
          id: "be-server-p2s2",
          title: "Modules & require/import",
          content:
            "CommonJS (CJS): const path = require('path'). ESM: import path from 'path'. Built-in modules: fs, path, http, os, events, crypto. Third-party: install via npm. Create your own: module.exports = { fn } (CJS) or export const fn (ESM). package.json 'type': 'module' enables ESM.",
          codeExample:
            "// CommonJS (default in Node)\nconst fs = require('fs');\nconst path = require('path');\n\n// Read a file\nfs.readFile('./data.json', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(JSON.parse(data));\n});\n\n// Export your own module\nmodule.exports = { greet: (name) => `Hello, ${name}!` };",
          video: { youtubeId: "Oe421EPjeBE", title: "Node.js Modules" },
        },
        {
          id: "be-server-p2s3",
          title: "npm & package.json",
          content:
            "npm install <pkg> adds to dependencies. npm install <pkg> --save-dev for dev dependencies. npm install installs all from package.json. package-lock.json locks exact versions. Scripts: 'start', 'dev', 'test' run via npm run. dotenv package loads .env files into process.env.",
          codeExample:
            '// Install packages\nnpm install express dotenv\nnpm install --save-dev nodemon\n\n// package.json scripts\n{\n  "scripts": {\n    "start": "node index.js",\n    "dev": "nodemon index.js",\n    "test": "jest"\n  }\n}\n\n// .env file\nPORT=3000\nDB_URL=mongodb://localhost/mydb\n\n// Load with dotenv\nrequire(\'dotenv\').config();\nconsole.log(process.env.PORT); // 3000',
          video: { youtubeId: "Oe421EPjeBE", title: "npm and package.json" },
          flowchart: "storage-hierarchy",
        },
      ],
    },
    {
      id: "be-server-p3",
      title: "Part 3: Express.js Routing",
      description: "Setting up Express, routes, middleware, request/response.",
      videoUrl: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
      notes:
        "EXPRESS.JS ROUTING\n\nExpress is a minimal Node.js web framework. Routes: app.get(), app.post(), app.put(), app.delete(). Parameters: req.params.id, req.query.page, req.body (requires express.json() middleware). Middleware: functions with (req, res, next). app.use() registers global middleware. Router: express.Router() for modular route files. res.json(), res.status(201).json(), res.sendStatus(204).",
      docs: [
        {
          label: "Express.js Guide",
          url: "https://expressjs.com/en/guide/routing.html",
        },
        {
          label: "Express API Docs",
          url: "https://expressjs.com/en/4x/api.html",
        },
      ],
      partQuiz: [
        {
          question: "How do you parse JSON request bodies in Express?",
          options: [
            "app.use(express.text())",
            "app.use(express.json())",
            "app.use(bodyParser.raw())",
            "app.json()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you access a URL parameter :id in Express?",
          options: ["req.query.id", "req.params.id", "req.body.id", "req.id"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is middleware in Express?",
          options: [
            "A database helper",
            "A function with (req, res, next) that runs in the pipeline",
            "An HTTP method",
            "A routing strategy",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you respond with JSON in Express?",
          options: [
            "res.send(JSON.stringify(data))",
            "res.json(data)",
            "res.write(data)",
            "res.text(data)",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does express.Router() do?",
          options: [
            "Creates a middleware",
            "Creates a modular route handler",
            "Starts the server",
            "Connects to a database",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-server-p3s1",
          title: "Express Setup & Routes",
          content:
            "Install Express: npm install express. Create app = express(). Define routes with app.get/post/put/delete(path, handler). handler receives (req, res). Call app.listen(port) to start. Always add express.json() middleware for JSON bodies.",
          codeExample:
            "const express = require('express');\nconst app = express();\napp.use(express.json()); // parse JSON bodies\n\nconst users = [\n  { id: 1, name: 'Alice' },\n  { id: 2, name: 'Bob' },\n];\n\napp.get('/users', (req, res) => {\n  res.json(users);\n});\n\napp.get('/users/:id', (req, res) => {\n  const user = users.find(u => u.id === +req.params.id);\n  if (!user) return res.status(404).json({ error: 'Not found' });\n  res.json(user);\n});\n\napp.listen(3000, () => console.log('Running on port 3000'));",
          video: { youtubeId: "fBNz5xF-Kx4", title: "Express Routes" },
          flowchart: "if-else",
        },
        {
          id: "be-server-p3s2",
          title: "Middleware",
          content:
            "Middleware functions run before route handlers. They have access to req, res, and next. Call next() to pass to the next middleware. Use for logging, authentication, CORS, error handling. Error middleware takes 4 args: (err, req, res, next).",
          codeExample:
            "// Logger middleware\napp.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next(); // must call next!\n});\n\n// Auth middleware\nfunction requireAuth(req, res, next) {\n  const token = req.headers.authorization;\n  if (!token) return res.status(401).json({ error: 'No token' });\n  // verify token...\n  next();\n}\napp.get('/protected', requireAuth, (req, res) => {\n  res.json({ secret: 'data' });\n});\n\n// Error middleware (4 params)\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).json({ error: 'Server error' });\n});",
          video: { youtubeId: "fBNz5xF-Kx4", title: "Express Middleware" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "be-server-p3s3",
          title: "Express Router & CRUD",
          content:
            "Use express.Router() to split routes into separate files. Mount with app.use('/api/users', userRouter). This keeps your code organized. A full CRUD API handles GET (list), GET/:id (one), POST (create), PUT/:id (update), DELETE/:id (delete).",
          codeExample:
            "// routes/users.js\nconst router = require('express').Router();\nlet users = [];\nlet nextId = 1;\n\nrouter.get('/', (req, res) => res.json(users));\nrouter.get('/:id', (req, res) => {\n  const u = users.find(u => u.id === +req.params.id);\n  u ? res.json(u) : res.status(404).json({ error: 'Not found' });\n});\nrouter.post('/', (req, res) => {\n  const user = { id: nextId++, ...req.body };\n  users.push(user);\n  res.status(201).json(user);\n});\nrouter.delete('/:id', (req, res) => {\n  users = users.filter(u => u.id !== +req.params.id);\n  res.sendStatus(204);\n});\n\nmodule.exports = router;\n// In app.js: app.use('/api/users', require('./routes/users'));",
          video: { youtubeId: "fBNz5xF-Kx4", title: "Express Router & CRUD" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the default port for HTTP?",
      options: ["443", "3000", "80", "8080"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which Node module handles file operations?",
      options: ["http", "os", "fs", "path"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does res.status(201).json(data) do?",
      options: [
        "Sends status 201 with no body",
        "Sends JSON with HTTP status 201",
        "Redirects with status 201",
        "Parses status 201",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is non-blocking I/O?",
      options: [
        "Synchronous file reads",
        "I/O that doesn't block the event loop",
        "Blocking network calls",
        "GPU operations",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which Express method registers middleware for all routes?",
      options: ["app.route()", "app.use()", "app.all()", "app.listen()"],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "be-server-t1",
      title: "Build a REST API",
      description:
        "Build an Express API with GET /items (list), POST /items (create with {name}), GET /items/:id (find by id). Return proper status codes.",
      starterCode:
        "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet items = [];\nlet nextId = 1;\n\n// GET /items - return all items\n// POST /items - create item\n// GET /items/:id - find by id\n\napp.listen(3000);",
      hints: [
        "Use a simple array to store items",
        "Use Array.find() for GET /:id",
        "Return 404 if item not found",
      ],
    },
    {
      id: "be-server-t2",
      title: "Auth Middleware",
      description:
        "Write a requireApiKey middleware that checks req.headers['x-api-key'] === 'secret123'. Return 401 if missing, 403 if wrong. Apply it to GET /protected.",
      starterCode:
        "const express = require('express');\nconst app = express();\n\nfunction requireApiKey(req, res, next) {\n  // check x-api-key header\n}\n\napp.get('/protected', requireApiKey, (req, res) => {\n  res.json({ data: 'secret' });\n});\n\napp.listen(3000);",
      hints: [
        "Access headers with req.headers['x-api-key']",
        "Return res.status(401).json() if missing",
        "Return res.status(403).json() if wrong",
      ],
    },
    {
      id: "be-server-t3",
      title: "Logger Middleware",
      description:
        "Write an Express logger middleware that logs '[METHOD] /path - Xms' for each request, measuring response time using Date.now().",
      starterCode:
        "const express = require('express');\nconst app = express();\n\napp.use((req, res, next) => {\n  // log method, url, and response time\n});\n\napp.get('/hello', (req, res) => res.json({ ok: true }));\napp.listen(3000);",
      hints: [
        "Record start = Date.now() before next()",
        "Use res.on('finish', ...) to log after response",
        "Log `${req.method} ${req.url} - ${Date.now()-start}ms`",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Databases ───────────────────────────────────────────────────────

const be_module2: CModule = {
  id: "be-databases",
  title: "Module 2: Databases",
  outcome: "Work with SQL, MongoDB, and ORMs to store and query data.",
  isLocked: true,
  parts: [
    {
      id: "be-db-p1",
      title: "Part 1: SQL & PostgreSQL",
      description: "Relational databases, SQL queries, joins, indexes.",
      videoUrl: "https://www.youtube.com/watch?v=qw--VYLpxG4",
      notes:
        "SQL & POSTGRESQL\n\nSQL stores data in tables with rows and columns. Core commands: SELECT, INSERT INTO, UPDATE, DELETE, JOIN (INNER, LEFT, RIGHT), GROUP BY, ORDER BY, LIMIT. Relationships: one-to-many (user → posts), many-to-many (users ↔ tags via a join table). PRIMARY KEY uniquely identifies each row. FOREIGN KEY links tables. Indexes speed up lookups. Transactions: BEGIN, COMMIT, ROLLBACK ensure atomicity. PostgreSQL: open-source, supports JSON, arrays, full-text search.",
      docs: [
        { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
        { label: "SQLZoo: Interactive SQL", url: "https://sqlzoo.net/" },
      ],
      partQuiz: [
        {
          question: "What SQL command retrieves all rows from 'users'?",
          options: [
            "GET * FROM users",
            "FETCH users",
            "SELECT * FROM users",
            "PULL users",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does INNER JOIN do?",
          options: [
            "Returns all rows from the left table",
            "Returns rows matching in both tables",
            "Returns all rows from both tables",
            "Merges two columns",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a PRIMARY KEY?",
          options: [
            "The first column",
            "A column that uniquely identifies each row",
            "A foreign reference",
            "An index",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a database transaction guarantee?",
          options: [
            "Speed",
            "Atomicity — all or nothing",
            "Encryption",
            "Indexing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which SQL clause filters grouped results?",
          options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-db-p1s1",
          title: "SELECT, INSERT, UPDATE, DELETE",
          content:
            "SELECT columns FROM table WHERE condition. INSERT INTO table (cols) VALUES (vals). UPDATE table SET col=val WHERE id=1. DELETE FROM table WHERE id=1. Use WHERE to filter rows. ORDER BY col ASC/DESC. LIMIT n to paginate. DISTINCT removes duplicates.",
          codeExample:
            "-- Create table\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\n-- Insert\nINSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');\n\n-- Select\nSELECT id, name FROM users WHERE email LIKE '%@example.com' ORDER BY name;\n\n-- Update\nUPDATE users SET name = 'Alicia' WHERE id = 1;\n\n-- Delete\nDELETE FROM users WHERE id = 1;",
          video: { youtubeId: "qw--VYLpxG4", title: "SQL CRUD Operations" },
        },
        {
          id: "be-db-p1s2",
          title: "JOINs & Relationships",
          content:
            "INNER JOIN returns rows with matching keys in both tables. LEFT JOIN returns all rows from left + matching from right. One-to-many: users → posts (posts.user_id FK). Many-to-many needs a join table. Always index foreign key columns for fast JOINs.",
          codeExample:
            "-- One-to-many: users have many posts\nCREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  user_id INT REFERENCES users(id) ON DELETE CASCADE,\n  title TEXT NOT NULL,\n  body TEXT\n);\n\n-- INNER JOIN: posts with their author\nSELECT p.title, u.name AS author\nFROM posts p\nINNER JOIN users u ON p.user_id = u.id;\n\n-- LEFT JOIN: all users even with no posts\nSELECT u.name, COUNT(p.id) AS post_count\nFROM users u\nLEFT JOIN posts p ON u.id = p.user_id\nGROUP BY u.id, u.name;",
          video: { youtubeId: "qw--VYLpxG4", title: "SQL JOINs" },
          flowchart: "loop",
        },
        {
          id: "be-db-p1s3",
          title: "Indexes & Transactions",
          content:
            "CREATE INDEX idx_name ON table(column) speeds up queries on that column. Transactions group multiple statements — if one fails, all roll back. Use BEGIN / COMMIT / ROLLBACK. ACID: Atomicity, Consistency, Isolation, Durability. Use for bank transfers, order processing.",
          codeExample:
            "-- Create index for faster lookups\nCREATE INDEX idx_users_email ON users(email);\n\n-- Transaction example\nBEGIN;\n  UPDATE accounts SET balance = balance - 100 WHERE id = 1;\n  UPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n-- If anything fails, use ROLLBACK instead\n\n-- Node.js with pg\nconst client = await pool.connect();\ntry {\n  await client.query('BEGIN');\n  await client.query('UPDATE accounts ...');\n  await client.query('COMMIT');\n} catch (e) {\n  await client.query('ROLLBACK');\n} finally { client.release(); }",
          video: {
            youtubeId: "qw--VYLpxG4",
            title: "SQL Indexes and Transactions",
          },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "be-db-p2",
      title: "Part 2: MongoDB & NoSQL",
      description: "Document databases, collections, CRUD, aggregation.",
      videoUrl: "https://www.youtube.com/watch?v=-56x56UppqQ",
      notes:
        "MONGODB & NOSQL\n\nMongoDB stores documents (JSON-like BSON) in collections. No fixed schema — great for flexible data. Documents are identified by _id (ObjectId). CRUD: insertOne/insertMany, findOne/find, updateOne/updateMany, deleteOne/deleteMany. Query operators: $gt, $lt, $in, $or, $and, $regex. Aggregation pipeline: $match → $group → $sort → $project. Mongoose adds schema validation and model methods on top.",
      docs: [
        { label: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
        { label: "Mongoose Docs", url: "https://mongoosejs.com/docs/" },
      ],
      partQuiz: [
        {
          question: "What does MongoDB store data as?",
          options: [
            "Rows and columns",
            "JSON-like documents (BSON)",
            "XML files",
            "CSV tables",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which MongoDB method finds one document?",
          options: ["findById()", "selectOne()", "findOne()", "getOne()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is an aggregation pipeline?",
          options: [
            "A query shortcut",
            "A series of stages that transform documents",
            "A caching layer",
            "A schema definition",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Mongoose add to MongoDB?",
          options: [
            "Encryption",
            "Schema validation and model helpers",
            "Indexing",
            "Replication",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which operator finds documents where age > 25?",
          options: [
            "{ age: { $lt: 25 } }",
            "{ age: { $gt: 25 } }",
            "{ age: > 25 }",
            "{ age.gt: 25 }",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-db-p2s1",
          title: "MongoDB Basics & CRUD",
          content:
            "Connect with MongoClient or Mongoose. Collections are like tables. Documents are JS objects. insertOne adds a document; find returns a cursor; updateOne updates matching; deleteOne removes. _id is auto-generated (ObjectId). Use .lean() in Mongoose to get plain objects.",
          codeExample:
            "// Mongoose model\nconst mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true },\n  age: Number,\n  createdAt: { type: Date, default: Date.now },\n});\n\nconst User = mongoose.model('User', userSchema);\n\n// Create\nconst user = await User.create({ name: 'Alice', email: 'alice@ex.com' });\n\n// Read\nconst users = await User.find({ age: { $gt: 18 } });\nconst one = await User.findById('64abc...');\n\n// Update\nawait User.findByIdAndUpdate(id, { name: 'Alicia' }, { new: true });\n\n// Delete\nawait User.findByIdAndDelete(id);",
          video: { youtubeId: "-56x56UppqQ", title: "MongoDB CRUD" },
        },
        {
          id: "be-db-p2s2",
          title: "Query Operators & Filtering",
          content:
            "Use query operators: $gt (greater than), $lt, $gte, $lte, $in (in array), $nin (not in), $or, $and, $regex (pattern match). Projection: select fields with { name: 1, _id: 0 }. sort({ field: 1 }) ascending, -1 descending. limit() and skip() for pagination.",
          codeExample:
            "// Advanced queries\nconst adults = await User.find(\n  { age: { $gte: 18 }, active: true },\n  { name: 1, email: 1, _id: 0 }  // projection\n).sort({ name: 1 }).limit(10).skip(20);\n\n// $in operator\nconst devs = await User.find({\n  role: { $in: ['dev', 'senior-dev'] }\n});\n\n// $or operator\nconst result = await User.find({\n  $or: [{ age: { $lt: 18 } }, { age: { $gt: 65 } }]\n});\n\n// Text search ($regex)\nconst search = await User.find({\n  name: { $regex: /alice/i }\n});",
          video: { youtubeId: "-56x56UppqQ", title: "MongoDB Query Operators" },
          flowchart: "if-else",
        },
        {
          id: "be-db-p2s3",
          title: "Aggregation Pipeline",
          content:
            "Aggregation processes documents through stages: $match (filter), $group (aggregate), $sort, $project (reshape), $lookup (join). Like SQL GROUP BY and JOINs. Use for analytics, reports, or complex transformations.",
          codeExample:
            "// Aggregation: average age by city\nconst result = await User.aggregate([\n  { $match: { active: true } },    // filter first\n  { $group: {\n    _id: '$city',\n    avgAge: { $avg: '$age' },\n    count: { $sum: 1 }\n  }},\n  { $sort: { count: -1 } },         // most users first\n  { $project: {\n    city: '$_id',\n    avgAge: { $round: ['$avgAge', 1] },\n    count: 1,\n    _id: 0\n  }}\n]);",
          video: { youtubeId: "-56x56UppqQ", title: "MongoDB Aggregation" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "be-db-p3",
      title: "Part 3: ORM with Prisma/Mongoose",
      description:
        "Type-safe database access with Prisma and Mongoose schemas.",
      videoUrl: "https://www.youtube.com/watch?v=RebA5J-rlwg",
      notes:
        "ORM WITH PRISMA/MONGOOSE\n\nPrisma: next-gen ORM for Node.js. schema.prisma defines models. prisma generate creates type-safe client. prisma migrate dev applies migrations. Queries: prisma.user.findMany(), prisma.user.create(), prisma.user.update(), prisma.user.delete(). Supports PostgreSQL, MySQL, SQLite. Mongoose: schema validation for MongoDB. Define schema with types, validators, defaults. Methods and virtuals. Middleware (pre/post hooks). Populate for relations.",
      docs: [
        { label: "Prisma Docs", url: "https://www.prisma.io/docs/" },
        { label: "Mongoose Docs", url: "https://mongoosejs.com/docs/" },
      ],
      partQuiz: [
        {
          question: "Where do you define Prisma models?",
          options: ["prisma.json", "schema.prisma", "models.ts", ".env"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which command applies Prisma migrations?",
          options: [
            "prisma push",
            "prisma apply",
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
            "All users matching the query",
            "A user count",
            "Raw SQL",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Mongoose's 'required: true' do?",
          options: [
            "Indexes the field",
            "Validates that the field is not empty",
            "Encrypts the value",
            "Makes it a foreign key",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Prisma migration?",
          options: [
            "A database dump",
            "A versioned change to the database schema",
            "A seed file",
            "An environment variable",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-db-p3s1",
          title: "Prisma Schema & Setup",
          content:
            "Initialize: npx prisma init. Define models in schema.prisma. Run prisma migrate dev to sync DB. Import PrismaClient to run queries. Prisma generates full TypeScript types — no manual type definitions needed.",
          codeExample:
            '// schema.prisma\ngenerator client {\n  provider = "prisma-client-js"\n}\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\nmodel User {\n  id        Int      @id @default(autoincrement())\n  email     String   @unique\n  name      String\n  posts     Post[]\n  createdAt DateTime @default(now())\n}\nmodel Post {\n  id       Int    @id @default(autoincrement())\n  title    String\n  userId   Int\n  user     User   @relation(fields: [userId], references: [id])\n}',
          video: { youtubeId: "RebA5J-rlwg", title: "Prisma Setup" },
        },
        {
          id: "be-db-p3s2",
          title: "Prisma CRUD Queries",
          content:
            "prisma.model.create(), findMany(), findUnique(), update(), delete(). Use include to join relations. Use where for filtering, select for projection, orderBy for sorting, take/skip for pagination. All queries return typed TypeScript objects.",
          codeExample:
            "const { PrismaClient } = require('@prisma/client');\nconst prisma = new PrismaClient();\n\n// Create\nconst user = await prisma.user.create({\n  data: { name: 'Alice', email: 'alice@ex.com' }\n});\n\n// Find with relations\nconst users = await prisma.user.findMany({\n  where: { name: { contains: 'ali' } },\n  include: { posts: true },\n  orderBy: { createdAt: 'desc' },\n  take: 10, skip: 0\n});\n\n// Update\nconst updated = await prisma.user.update({\n  where: { id: 1 },\n  data: { name: 'Alicia' }\n});\n\n// Delete\nawait prisma.user.delete({ where: { id: 1 } });",
          video: { youtubeId: "RebA5J-rlwg", title: "Prisma CRUD" },
          flowchart: "if-else",
        },
        {
          id: "be-db-p3s3",
          title: "Mongoose Schemas & Validation",
          content:
            "Define a Mongoose schema with types, required, default, min/max validators. Use virtuals for computed properties. Pre/post hooks run before/after operations. populate() resolves ObjectId references. Use lean() for plain JS objects (faster reads).",
          codeExample:
            "const productSchema = new mongoose.Schema({\n  name: { type: String, required: true, trim: true },\n  price: { type: Number, required: true, min: 0 },\n  stock: { type: Number, default: 0 },\n  category: { type: String, enum: ['electronics', 'clothing', 'food'] },\n});\n\n// Virtual (not stored in DB)\nproductSchema.virtual('inStock').get(function() {\n  return this.stock > 0;\n});\n\n// Pre-save hook\nproductSchema.pre('save', function(next) {\n  this.name = this.name.toUpperCase();\n  next();\n});\n\nconst Product = mongoose.model('Product', productSchema);",
          video: { youtubeId: "RebA5J-rlwg", title: "Mongoose Schema" },
          flowchart: "storage-classes-flow",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does ACID stand for?",
      options: [
        "Async, Cached, Indexed, Dynamic",
        "Atomic, Consistent, Isolated, Durable",
        "Active, Connected, Integrated, Detailed",
        "Automated, Controlled, Indexed, Distributed",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is denormalization?",
      options: [
        "Removing duplicates",
        "Intentionally adding redundancy for read performance",
        "Deleting old data",
        "Adding foreign keys",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does $lookup do in MongoDB aggregation?",
      options: [
        "Filters documents",
        "Performs a join with another collection",
        "Groups documents",
        "Sorts results",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which Prisma method returns a single record or null?",
      options: ["findFirst()", "findUnique()", "findOne()", "selectOne()"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is an ORM?",
      options: [
        "Object Relational Mapper — maps DB tables to objects",
        "An HTTP method",
        "A caching strategy",
        "A schema format",
      ],
      correct: 0,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "be-db-t1",
      title: "SQL Query Challenge",
      description:
        "Write SQL: 1) Select users older than 30 sorted by name. 2) Count posts per user. 3) Find users with no posts using LEFT JOIN.",
      starterCode:
        "-- Table: users (id, name, age)\n-- Table: posts (id, user_id, title)\n\n-- 1. Users older than 30\n\n-- 2. Count posts per user\n\n-- 3. Users with no posts",
      hints: [
        "Use WHERE age > 30 ORDER BY name",
        "LEFT JOIN posts ON users.id = posts.user_id, GROUP BY users.id",
        "WHERE posts.id IS NULL after LEFT JOIN",
      ],
    },
    {
      id: "be-db-t2",
      title: "Mongoose CRUD API",
      description:
        "Create a Product Mongoose model (name, price, stock). Write functions createProduct(data), getProducts(), updatePrice(id, price), deleteProduct(id).",
      starterCode:
        "const mongoose = require('mongoose');\n\n// Define Product schema\n\n// createProduct(data) - returns created product\nasync function createProduct(data) {}\n\n// getProducts() - returns all products\nasync function getProducts() {}\n\n// updatePrice(id, price)\nasync function updatePrice(id, price) {}\n\n// deleteProduct(id)\nasync function deleteProduct(id) {}",
      hints: [
        "Use mongoose.Schema with name(String), price(Number), stock(Number)",
        "Use Model.create(), Model.find(), Model.findByIdAndUpdate(), Model.findByIdAndDelete()",
        "Pass { new: true } to findByIdAndUpdate to return updated doc",
      ],
    },
    {
      id: "be-db-t3",
      title: "Prisma Relations",
      description:
        "Design a Prisma schema for a blog: User (id, email, name) and Post (id, title, content, userId). Write a query to get all users with their posts count.",
      starterCode:
        "// schema.prisma - define User and Post models\n\n// Then in JS:\nconst { PrismaClient } = require('@prisma/client');\nconst prisma = new PrismaClient();\n\n// Get all users with post count\nasync function getUsersWithPostCount() {\n  // use prisma.user.findMany with _count\n}",
      hints: [
        "Post model needs userId Int and user User @relation(...)",
        "Use include: { _count: { select: { posts: true } } }",
        "Or use groupBy with _count",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: REST APIs & GraphQL ────────────────────────────────────────────

const be_module3: CModule = {
  id: "be-apis",
  title: "Module 3: REST APIs & GraphQL",
  outcome:
    "Design and build production-quality REST APIs and basic GraphQL APIs.",
  isLocked: true,
  parts: [
    {
      id: "be-api-p1",
      title: "Part 1: REST API Design",
      description:
        "RESTful conventions, resource naming, versioning, pagination.",
      videoUrl: "https://www.youtube.com/watch?v=NjqBxipXBGs",
      notes:
        "REST API DESIGN\n\nREST (Representational State Transfer) uses HTTP methods on resources. Use nouns for URLs, not verbs: /users, not /getUsers. Version APIs: /api/v1/users. Pagination: ?page=1&limit=20 (offset-based) or cursor-based. Filter/sort: ?category=tech&sort=createdAt&order=desc. Response envelope: { data: [...], total: 100, page: 1 }. Document with OpenAPI/Swagger. Idempotent: GET, PUT, DELETE called multiple times = same result. POST is not idempotent.",
      docs: [
        {
          label: "REST API Design Best Practices",
          url: "https://restfulapi.net/",
        },
        {
          label: "OpenAPI Specification",
          url: "https://swagger.io/docs/specification/about/",
        },
      ],
      partQuiz: [
        {
          question: "What is the RESTful URL for getting user with id 5?",
          options: ["/getUser/5", "/users?id=5", "/users/5", "/fetchUser/5"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which HTTP method is idempotent?",
          options: ["POST", "GET", "Both GET and PUT", "None"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What status code should a successful POST return?",
          options: ["200", "201", "204", "202"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is API versioning for?",
          options: [
            "Performance",
            "Breaking changes without disrupting existing clients",
            "Security",
            "Caching",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What tool documents REST APIs with a UI?",
          options: [
            "Postman only",
            "Swagger/OpenAPI",
            "JSON Schema",
            "GraphQL",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-api-p1s1",
          title: "Resource Naming & URL Design",
          content:
            "Use nouns, not verbs. Use plural nouns: /users, /posts. Nest related resources: /users/123/posts. Keep it flat for non-owned relations: /posts?userId=123. Avoid deep nesting (max 2 levels). Use kebab-case for multi-word: /user-profiles.",
          codeExample:
            "// Good REST URLs:\nGET    /users           // list all users\nGET    /users/123       // get user 123\nPOST   /users           // create user\nPUT    /users/123       // replace user 123\nPATCH  /users/123       // partial update\nDELETE /users/123       // delete user 123\n\nGET    /users/123/posts  // posts by user 123\nGET    /posts?userId=123 // same, alternative\n\n// Bad (use verbs - avoid):\nGET /getUser/123\nPOST /createUser\nDELETE /deleteUser/123",
          video: { youtubeId: "NjqBxipXBGs", title: "REST URL Design" },
        },
        {
          id: "be-api-p1s2",
          title: "Pagination & Filtering",
          content:
            "Offset-based: ?page=1&limit=20. Calculate skip = (page-1)*limit. Return total count in response. Cursor-based: ?cursor=lastId&limit=20 — more efficient for large datasets. Filter: ?status=active&role=admin. Sort: ?sortBy=name&order=asc. Always validate and cap limit (max 100).",
          codeExample:
            "// Pagination in Express + Mongoose\napp.get('/users', async (req, res) => {\n  const page = Math.max(1, parseInt(req.query.page) || 1);\n  const limit = Math.min(100, parseInt(req.query.limit) || 20);\n  const skip = (page - 1) * limit;\n\n  const [users, total] = await Promise.all([\n    User.find().skip(skip).limit(limit).lean(),\n    User.countDocuments()\n  ]);\n\n  res.json({\n    data: users,\n    pagination: {\n      page, limit, total,\n      pages: Math.ceil(total / limit)\n    }\n  });\n});",
          video: { youtubeId: "NjqBxipXBGs", title: "API Pagination" },
          flowchart: "loop",
        },
        {
          id: "be-api-p1s3",
          title: "API Versioning & Documentation",
          content:
            "Version via URL: /api/v1/users (most common). Or use headers: Accept: application/vnd.api+json;version=2. Swagger/OpenAPI auto-generates interactive docs. Use swagger-jsdoc (JSDoc comments) + swagger-ui-express to serve docs at /api-docs. Always document request/response schemas.",
          codeExample:
            "// swagger-jsdoc example\n/**\n * @swagger\n * /api/v1/users:\n *   get:\n *     summary: Get all users\n *     parameters:\n *       - in: query\n *         name: page\n *         schema:\n *           type: integer\n *     responses:\n *       200:\n *         description: List of users\n */\napp.get('/api/v1/users', async (req, res) => { ... });\n\n// Setup\nconst swaggerUi = require('swagger-ui-express');\nconst swaggerDoc = require('./swagger.json');\napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));",
          video: {
            youtubeId: "NjqBxipXBGs",
            title: "API Documentation with Swagger",
          },
        },
      ],
    },
    {
      id: "be-api-p2",
      title: "Part 2: HTTP Methods & Status Codes",
      description:
        "Correct usage of HTTP verbs, idempotency, and response codes.",
      videoUrl: "https://www.youtube.com/watch?v=iYM2zFP3Zn0",
      notes:
        "HTTP METHODS & STATUS CODES\n\nGET: read, no side effects, cacheable. POST: create new resource, not idempotent. PUT: replace entire resource (idempotent). PATCH: partial update (idempotent if well-designed). DELETE: remove resource (idempotent). 2xx: 200 OK, 201 Created, 204 No Content. 4xx: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity. 5xx: 500 Internal Server Error, 503 Service Unavailable.",
      docs: [
        {
          label: "MDN: HTTP Methods",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
        },
        {
          label: "MDN: HTTP Status Codes",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
        },
      ],
      partQuiz: [
        {
          question: "Which method should be used for partial updates?",
          options: ["PUT", "POST", "PATCH", "UPDATE"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 401 Unauthorized mean?",
          options: [
            "User is banned",
            "Authentication required",
            "Wrong password only",
            "Session expired only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the difference between 401 and 403?",
          options: [
            "No difference",
            "401: not authenticated; 403: authenticated but no permission",
            "401: server error; 403: not found",
            "401: rate limited; 403: banned",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What status should a DELETE return with no body?",
          options: ["200", "201", "204", "404"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 409 Conflict indicate?",
          options: [
            "Wrong method",
            "Duplicate resource or conflicting state",
            "Server error",
            "Rate limit exceeded",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-api-p2s1",
          title: "GET & POST in Depth",
          content:
            "GET requests must be safe (no side effects) and idempotent. Never use GET for mutations. POST creates a new resource — return 201 with the new resource and a Location header. POST is not idempotent. Use GET for reads, POST for creates.",
          codeExample:
            "// POST - create resource\napp.post('/api/v1/users', async (req, res) => {\n  const { name, email } = req.body;\n  \n  // Validate\n  if (!name || !email) {\n    return res.status(400).json({ error: 'name and email required' });\n  }\n  \n  // Check duplicate\n  const exists = await User.findOne({ email });\n  if (exists) {\n    return res.status(409).json({ error: 'Email already registered' });\n  }\n  \n  const user = await User.create({ name, email });\n  res\n    .status(201)\n    .set('Location', `/api/v1/users/${user.id}`)\n    .json(user);\n});",
          video: { youtubeId: "iYM2zFP3Zn0", title: "HTTP GET and POST" },
          flowchart: "if-else",
        },
        {
          id: "be-api-p2s2",
          title: "PUT, PATCH & DELETE",
          content:
            "PUT replaces the entire resource — client sends the full object. PATCH sends only changed fields. DELETE removes the resource; return 204 (no body) or 200 with a message. All three should be idempotent — calling them twice gives the same result.",
          codeExample:
            "// PUT - replace entire resource\napp.put('/api/v1/users/:id', async (req, res) => {\n  const user = await User.findByIdAndUpdate(\n    req.params.id,\n    req.body,  // replace entire doc\n    { new: true, runValidators: true }\n  );\n  if (!user) return res.status(404).json({ error: 'Not found' });\n  res.json(user);\n});\n\n// PATCH - partial update\napp.patch('/api/v1/users/:id', async (req, res) => {\n  const user = await User.findByIdAndUpdate(\n    req.params.id,\n    { $set: req.body },  // merge changes\n    { new: true }\n  );\n  res.json(user);\n});\n\n// DELETE\napp.delete('/api/v1/users/:id', async (req, res) => {\n  await User.findByIdAndDelete(req.params.id);\n  res.sendStatus(204);\n});",
          video: { youtubeId: "iYM2zFP3Zn0", title: "PUT, PATCH, DELETE" },
        },
        {
          id: "be-api-p2s3",
          title: "Error Handling Best Practices",
          content:
            "Always return consistent error format: { error: 'message', code: 'ERROR_CODE' }. Use a centralized error handler middleware. Distinguish validation errors (400/422) from auth errors (401/403) from server errors (500). Never expose stack traces in production.",
          codeExample:
            "// Centralized error handler\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\n\n// Throw in routes:\nif (!user) throw new AppError('User not found', 404);\n\n// Global handler (last middleware)\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  const message = status === 500\n    ? 'Internal server error'\n    : err.message;\n  \n  res.status(status).json({\n    error: message,\n    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })\n  });\n});",
          video: { youtubeId: "iYM2zFP3Zn0", title: "API Error Handling" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "be-api-p3",
      title: "Part 3: GraphQL Basics",
      description: "Schema, queries, mutations, resolvers with Apollo Server.",
      videoUrl: "https://www.youtube.com/watch?v=ed8SzALpx1Q",
      notes:
        "GRAPHQL BASICS\n\nGraphQL is a query language for APIs. Single endpoint /graphql. Client specifies exactly what fields it needs — no over/under fetching. Schema: defines types, queries, mutations, subscriptions. Resolvers: functions that return data for each field. Apollo Server is the standard Node.js implementation. Query: read data. Mutation: write data. Introspection: clients can query the schema itself. DataLoader solves the N+1 problem by batching queries.",
      docs: [
        { label: "GraphQL Official Docs", url: "https://graphql.org/learn/" },
        {
          label: "Apollo Server Docs",
          url: "https://www.apollographql.com/docs/apollo-server/",
        },
      ],
      partQuiz: [
        {
          question: "How many endpoints does a GraphQL API typically have?",
          options: [
            "One per resource",
            "Two (read/write)",
            "One — /graphql",
            "Depends on the schema",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is a GraphQL mutation?",
          options: [
            "A query for lists",
            "An operation that writes/modifies data",
            "A schema type",
            "A subscription",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a resolver in GraphQL?",
          options: [
            "A route handler",
            "A function that fetches data for a field",
            "A schema validator",
            "A caching layer",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What problem does DataLoader solve?",
          options: [
            "Schema validation",
            "N+1 query problem by batching DB calls",
            "Authentication",
            "Pagination",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is GraphQL introspection?",
          options: [
            "Logging queries",
            "Querying the schema itself for type info",
            "A debugger",
            "Schema versioning",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-api-p3s1",
          title: "GraphQL Schema & Types",
          content:
            "Define types with the SDL (Schema Definition Language). Scalar types: Int, Float, String, Boolean, ID. Object types define your data shape. ! means non-null. [User] is a list. type Query defines read operations. type Mutation defines write operations.",
          codeExample:
            "// Schema Definition Language\nconst typeDefs = `\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n    posts: [Post!]!\n  }\n\n  type Post {\n    id: ID!\n    title: String!\n    body: String\n    author: User!\n  }\n\n  type Query {\n    users: [User!]!\n    user(id: ID!): User\n    posts: [Post!]!\n  }\n\n  type Mutation {\n    createUser(name: String!, email: String!): User!\n    deleteUser(id: ID!): Boolean!\n  }\n`;",
          video: { youtubeId: "ed8SzALpx1Q", title: "GraphQL Schema" },
        },
        {
          id: "be-api-p3s2",
          title: "Resolvers & Apollo Server",
          content:
            "Resolvers map schema fields to data. Each resolver receives (parent, args, context, info). parent is the parent object. args are query arguments. context carries auth/DB connections. Set up Apollo Server with typeDefs and resolvers.",
          codeExample:
            "const { ApolloServer } = require('@apollo/server');\nconst { startStandaloneServer } = require('@apollo/server/standalone');\n\nconst resolvers = {\n  Query: {\n    users: () => User.find(),\n    user: (_, { id }) => User.findById(id),\n  },\n  Mutation: {\n    createUser: async (_, { name, email }) => {\n      return User.create({ name, email });\n    },\n    deleteUser: async (_, { id }) => {\n      await User.findByIdAndDelete(id);\n      return true;\n    },\n  },\n  User: {\n    posts: (user) => Post.find({ userId: user.id }),\n  },\n};\n\nconst server = new ApolloServer({ typeDefs, resolvers });\nconst { url } = await startStandaloneServer(server, { listen: { port: 4000 } });\nconsole.log(`Server at ${url}`);",
          video: { youtubeId: "ed8SzALpx1Q", title: "GraphQL Resolvers" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "be-api-p3s3",
          title: "Queries & Mutations from Client",
          content:
            "Clients send POST requests to /graphql with a query or mutation string. The client requests only the fields it needs. Variables pass dynamic values. Fragments reuse field selections. Use Apollo Client, urql, or fetch() from the frontend.",
          codeExample:
            "// GraphQL query from client (fetch)\nconst GET_USERS = `\n  query GetUsers {\n    users {\n      id\n      name\n      email\n      posts { title }\n    }\n  }\n`;\n\nconst response = await fetch('http://localhost:4000/graphql', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ query: GET_USERS })\n});\nconst { data } = await response.json();\nconsole.log(data.users);\n\n// Mutation with variables\nconst CREATE_USER = `\n  mutation Create($name: String!, $email: String!) {\n    createUser(name: $name, email: $email) { id name }\n  }\n`;",
          video: { youtubeId: "ed8SzALpx1Q", title: "GraphQL Client Queries" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does HATEOAS mean in REST?",
      options: [
        "A security standard",
        "Hypermedia As The Engine Of Application State — links in responses",
        "An authentication method",
        "A caching strategy",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is over-fetching?",
      options: [
        "Sending too many requests",
        "Getting more data than needed from an endpoint",
        "Using POST for reads",
        "Too many query parameters",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What GraphQL type represents a list of non-null strings?",
      options: ["String!", "[String!]!", "[String]", "Array<String>"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the N+1 problem in GraphQL?",
      options: [
        "Having N+1 schemas",
        "Making 1 query + N additional queries for nested data",
        "Too many mutations",
        "Schema depth limit",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which response code should a validation error return?",
      options: ["500", "400 or 422", "404", "200"],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "be-api-t1",
      title: "Build a Paginated REST API",
      description:
        "Build GET /api/v1/products with pagination (?page, ?limit), filtering (?category), and sorting (?sortBy). Return { data, pagination: { page, limit, total } }.",
      starterCode:
        "const express = require('express');\nconst app = express();\nconst products = [\n  { id: 1, name: 'Laptop', category: 'electronics', price: 999 },\n  { id: 2, name: 'Phone', category: 'electronics', price: 499 },\n  { id: 3, name: 'T-Shirt', category: 'clothing', price: 29 },\n];\n\napp.get('/api/v1/products', (req, res) => {\n  // implement pagination, filtering, sorting\n});\n\napp.listen(3000);",
      hints: [
        "Parse page and limit from req.query",
        "Filter array with .filter() for category",
        "Use .sort() for sorting, then .slice(skip, skip+limit)",
      ],
    },
    {
      id: "be-api-t2",
      title: "REST Error Handling",
      description:
        "Create an AppError class with statusCode. Add error middleware that returns { error: message } with the right status. Create a route that throws 404 when user not found.",
      starterCode:
        "const express = require('express');\nconst app = express();\n\nclass AppError extends Error {\n  // add statusCode\n}\n\nconst users = [{ id: 1, name: 'Alice' }];\n\napp.get('/users/:id', (req, res, next) => {\n  // throw AppError if not found\n});\n\n// error middleware\n\napp.listen(3000);",
      hints: [
        "class AppError extends Error { constructor(msg, code) { super(msg); this.statusCode = code; } }",
        "Use next(new AppError('Not found', 404)) in route",
        "Error middleware has 4 params: (err, req, res, next)",
      ],
    },
    {
      id: "be-api-t3",
      title: "Simple GraphQL API",
      description:
        "Build a GraphQL API with type Book (id, title, author) and Query { books, book(id) } and Mutation { addBook(title, author) }.",
      starterCode:
        "const { ApolloServer } = require('@apollo/server');\nconst { startStandaloneServer } = require('@apollo/server/standalone');\n\nlet books = [\n  { id: '1', title: 'Clean Code', author: 'Robert Martin' }\n];\n\n// Define typeDefs\nconst typeDefs = ``;\n\n// Define resolvers\nconst resolvers = {};\n\nconst server = new ApolloServer({ typeDefs, resolvers });\nawait startStandaloneServer(server);",
      hints: [
        "type Book { id: ID!, title: String!, author: String! }",
        "Query: books: [Book!]!, book(id: ID!): Book",
        "Mutation: addBook(title: String!, author: String!): Book!",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: Authentication & Security ──────────────────────────────────────

const be_module4: CModule = {
  id: "be-auth",
  title: "Module 4: Authentication & Security",
  outcome:
    "Implement JWT auth, OAuth, and protect APIs against common attacks.",
  isLocked: true,
  parts: [
    {
      id: "be-auth-p1",
      title: "Part 1: JWT & Sessions",
      description: "JSON Web Tokens, signing, verification, refresh tokens.",
      videoUrl: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
      notes:
        "JWT & SESSIONS\n\nJWT (JSON Web Token): Header.Payload.Signature. Signed with a secret or RSA key. Stateless — server doesn't store sessions. Verify on every request. Access tokens: short-lived (15 min). Refresh tokens: long-lived (7 days), stored in HttpOnly cookie. bcrypt for hashing passwords: bcrypt.hash(password, 10), bcrypt.compare(). Sessions: stateful, stored server-side in Redis or a DB. Cookies vs Authorization header for token transport.",
      docs: [
        { label: "JWT.io — Debugger & Docs", url: "https://jwt.io/" },
        { label: "bcrypt npm", url: "https://www.npmjs.com/package/bcrypt" },
      ],
      partQuiz: [
        {
          question: "What are the 3 parts of a JWT?",
          options: [
            "User.Data.Signature",
            "Header.Payload.Signature",
            "Token.User.Expiry",
            "Auth.Claims.Key",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Why should access tokens be short-lived?",
          options: [
            "To save memory",
            "To limit damage if stolen",
            "They are larger",
            "Performance",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Where should refresh tokens be stored?",
          options: [
            "localStorage",
            "sessionStorage",
            "HttpOnly cookie",
            "URL parameter",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does bcrypt.hash(password, 10) do?",
          options: [
            "Encrypts the password",
            "Hashes the password with 10 salt rounds",
            "Signs a JWT",
            "Validates the password",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What makes JWT stateless?",
          options: [
            "Tokens are stored in DB",
            "All info is in the token; server doesn't store state",
            "Tokens never expire",
            "Server uses memory",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-auth-p1s1",
          title: "Password Hashing with bcrypt",
          content:
            "Never store plain text passwords. bcrypt uses salted hashing — even identical passwords produce different hashes. Cost factor (salt rounds) controls speed: 10 is a good default. bcrypt.hash() hashes. bcrypt.compare() verifies. Store the hash, never the original password.",
          codeExample:
            "const bcrypt = require('bcrypt');\n\n// Hash on signup\nasync function hashPassword(password) {\n  const saltRounds = 10;\n  return bcrypt.hash(password, saltRounds);\n}\n\n// Compare on login\nasync function checkPassword(plain, hash) {\n  return bcrypt.compare(plain, hash);\n}\n\n// In a signup route\napp.post('/auth/signup', async (req, res) => {\n  const { email, password, name } = req.body;\n  const hashedPwd = await hashPassword(password);\n  const user = await User.create({ email, name, password: hashedPwd });\n  res.status(201).json({ id: user.id, email: user.email });\n});",
          video: { youtubeId: "7Q17ubqLfaM", title: "bcrypt Password Hashing" },
        },
        {
          id: "be-auth-p1s2",
          title: "JWT Sign & Verify",
          content:
            "jwt.sign(payload, secret, options) creates a token. jwt.verify(token, secret) validates and decodes. Always set expiry. Store JWT_SECRET in .env, never hardcode. Extract token from Authorization: Bearer <token> header. Create an auth middleware that attaches user to req.",
          codeExample:
            "const jwt = require('jsonwebtoken');\nconst JWT_SECRET = process.env.JWT_SECRET;\n\n// Create token\nfunction createToken(userId) {\n  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15m' });\n}\n\n// Verify middleware\nfunction requireAuth(req, res, next) {\n  const auth = req.headers.authorization;\n  if (!auth?.startsWith('Bearer ')) {\n    return res.status(401).json({ error: 'No token' });\n  }\n  try {\n    const token = auth.split(' ')[1];\n    req.user = jwt.verify(token, JWT_SECRET);\n    next();\n  } catch {\n    res.status(401).json({ error: 'Invalid token' });\n  }\n}",
          video: { youtubeId: "7Q17ubqLfaM", title: "JWT Implementation" },
          flowchart: "if-else",
        },
        {
          id: "be-auth-p1s3",
          title: "Access & Refresh Token Flow",
          content:
            "Login returns short-lived access token (15 min) + long-lived refresh token (7 days). Refresh token stored in HttpOnly cookie (not accessible via JS). When access token expires, use /auth/refresh endpoint to get a new one. Refresh tokens stored in DB for revocation support.",
          codeExample:
            "// Login endpoint\napp.post('/auth/login', async (req, res) => {\n  const user = await User.findOne({ email: req.body.email });\n  if (!user || !await bcrypt.compare(req.body.password, user.password)) {\n    return res.status(401).json({ error: 'Invalid credentials' });\n  }\n  const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '15m' });\n  const refreshToken = jwt.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: '7d' });\n  // Store refresh token in httpOnly cookie\n  res.cookie('refreshToken', refreshToken, {\n    httpOnly: true, secure: true, sameSite: 'strict', maxAge: 7*24*60*60*1000\n  });\n  res.json({ accessToken });\n});",
          video: {
            youtubeId: "7Q17ubqLfaM",
            title: "Access and Refresh Tokens",
          },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "be-auth-p2",
      title: "Part 2: OAuth & Social Login",
      description:
        "OAuth 2.0 Authorization Code flow, Google/GitHub login with Passport.js.",
      videoUrl: "https://www.youtube.com/watch?v=ZV5yTm4pT8g",
      notes:
        "OAUTH 2.0\n\nOAuth 2.0 lets users grant third-party apps access without sharing passwords. Authorization Code Flow (for web apps): 1) Redirect to provider. 2) User grants permission. 3) Provider redirects back with code. 4) Exchange code for access token. 5) Use token to get user data. Passport.js: middleware that handles many OAuth strategies. Use passport-google-oauth20, passport-github2. Google/GitHub tokens let you call their APIs on behalf of the user.",
      docs: [
        { label: "OAuth 2.0 Overview", url: "https://oauth.net/2/" },
        { label: "Passport.js Docs", url: "https://www.passportjs.org/docs/" },
      ],
      partQuiz: [
        {
          question: "What problem does OAuth 2.0 solve?",
          options: [
            "Password hashing",
            "Letting users grant access without sharing passwords",
            "Database encryption",
            "API rate limiting",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "In Authorization Code Flow, what is the 'code' used for?",
          options: [
            "Identifying the user",
            "Exchanging for an access token",
            "Encrypting data",
            "Creating a session",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a callback URL in OAuth?",
          options: [
            "Error handler URL",
            "The URL provider redirects to after authorization",
            "The API endpoint",
            "The logout URL",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Passport.js provide?",
          options: [
            "A database ORM",
            "Authentication middleware strategies for Node.js",
            "An API gateway",
            "A session store",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is an OAuth scope?",
          options: [
            "API URL pattern",
            "Permissions being requested (e.g., read:email)",
            "Token expiry",
            "Redirect URL",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-auth-p2s1",
          title: "OAuth 2.0 Authorization Code Flow",
          content:
            "Step 1: Redirect user to provider with client_id, redirect_uri, scope, state. Step 2: User logs in and grants permission. Step 3: Provider redirects to redirect_uri with code. Step 4: Backend exchanges code for access_token via POST to token endpoint. Step 5: Use access_token to call provider's API (e.g., get user profile).",
          codeExample:
            "// OAuth flow overview (conceptual)\n\n// Step 1: Redirect to Google\nGET https://accounts.google.com/o/oauth2/auth\n  ?client_id=YOUR_CLIENT_ID\n  &redirect_uri=http://localhost:3000/auth/google/callback\n  &response_type=code\n  &scope=openid email profile\n  &state=random_csrf_token\n\n// Step 3: Google redirects to your callback\nGET /auth/google/callback?code=AUTH_CODE&state=...\n\n// Step 4: Exchange code for token\nPOST https://oauth2.googleapis.com/token\n  { client_id, client_secret, code, redirect_uri, grant_type: 'authorization_code' }\n// Returns: { access_token, id_token, refresh_token }",
          video: { youtubeId: "ZV5yTm4pT8g", title: "OAuth 2.0 Explained" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "be-auth-p2s2",
          title: "Google OAuth with Passport.js",
          content:
            "Install passport, passport-google-oauth20. Configure strategy with clientID, clientSecret, callbackURL. Implement verify callback: find or create user in DB. Serialize/deserialize user for session. Protect routes with passport.authenticate('google').",
          codeExample:
            "const passport = require('passport');\nconst GoogleStrategy = require('passport-google-oauth20').Strategy;\n\npassport.use(new GoogleStrategy({\n  clientID: process.env.GOOGLE_CLIENT_ID,\n  clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n  callbackURL: '/auth/google/callback'\n}, async (accessToken, refreshToken, profile, done) => {\n  // Find or create user\n  let user = await User.findOne({ googleId: profile.id });\n  if (!user) {\n    user = await User.create({\n      googleId: profile.id,\n      email: profile.emails[0].value,\n      name: profile.displayName\n    });\n  }\n  return done(null, user);\n}));\n\n// Routes\napp.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));\napp.get('/auth/google/callback',\n  passport.authenticate('google', { failureRedirect: '/login' }),\n  (req, res) => res.redirect('/dashboard'));",
          video: {
            youtubeId: "ZV5yTm4pT8g",
            title: "Passport.js Google OAuth",
          },
          flowchart: "if-else",
        },
        {
          id: "be-auth-p2s3",
          title: "Combining JWT with OAuth",
          content:
            "After OAuth callback, create a JWT for your app (not the OAuth token). Store googleId or githubId in your User model. Return your own JWT — this decouples your auth from the provider. This way your app works consistently whether users sign up with email or OAuth.",
          codeExample:
            "// In Passport verify callback — after finding/creating user:\napp.get('/auth/google/callback',\n  passport.authenticate('google', { session: false }),\n  (req, res) => {\n    // Create our own JWT\n    const accessToken = jwt.sign(\n      { userId: req.user.id, email: req.user.email },\n      process.env.JWT_SECRET,\n      { expiresIn: '1h' }\n    );\n    // Return token (or set as cookie)\n    res.redirect(`/auth/success?token=${accessToken}`);\n    // In production: use HttpOnly cookie instead\n  }\n);",
          video: { youtubeId: "ZV5yTm4pT8g", title: "JWT + OAuth" },
        },
      ],
    },
    {
      id: "be-auth-p3",
      title: "Part 3: Input Validation & SQL Injection Prevention",
      description: "Sanitization, parameterized queries, XSS, rate limiting.",
      videoUrl: "https://www.youtube.com/watch?v=WdpozrmR6i4",
      notes:
        "SECURITY\n\nSQL Injection: attacker injects SQL via user input. Always use parameterized queries (? placeholders in pg/mysql). ORMs (Prisma, Sequelize) handle this automatically. XSS (Cross-Site Scripting): attacker injects JS into pages. Sanitize HTML. Set Content-Security-Policy. NoSQL Injection: sanitize MongoDB queries. Input validation: joi or zod schema validation. Rate limiting: express-rate-limit. Helmet.js: sets security headers. CORS: configure carefully — whitelist origins.",
      docs: [
        {
          label: "OWASP Top 10 Security Risks",
          url: "https://owasp.org/www-project-top-ten/",
        },
        {
          label: "express-validator Docs",
          url: "https://express-validator.github.io/docs/",
        },
      ],
      partQuiz: [
        {
          question: "How do you prevent SQL injection?",
          options: [
            "Use HTTPS",
            "Use parameterized queries",
            "Encode output",
            "Use CORS",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Helmet.js do?",
          options: [
            "Encrypts the database",
            "Sets security-related HTTP headers",
            "Validates input",
            "Hashes passwords",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is CORS?",
          options: [
            "A hashing algorithm",
            "Cross-Origin Resource Sharing — controls which origins can access the API",
            "A session storage method",
            "An OAuth flow",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does express-rate-limit prevent?",
          options: [
            "SQL injection",
            "XSS",
            "Brute-force and DDoS attacks",
            "CSRF",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What library provides schema-based input validation in Node?",
          options: ["helmet", "cors", "joi or zod", "passport"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-auth-p3s1",
          title: "SQL Injection Prevention",
          content:
            "SQL injection happens when user input is directly concatenated into SQL queries. Always use parameterized queries or an ORM. Parameterized: pass values separately from the query string — the DB driver handles escaping.",
          codeExample:
            "// DANGEROUS - SQL injection vulnerability!\nconst query = `SELECT * FROM users WHERE email = '${req.body.email}'`;\n// Attacker sends: ' OR 1=1 --\n\n// SAFE - parameterized query (node-postgres)\nconst { rows } = await pool.query(\n  'SELECT * FROM users WHERE email = $1',\n  [req.body.email]  // value passed separately\n);\n\n// SAFE - Prisma (ORM handles it)\nconst user = await prisma.user.findUnique({\n  where: { email: req.body.email }\n});\n\n// SAFE - Mongoose (ORM handles it)\nconst user = await User.findOne({ email: req.body.email });",
          video: {
            youtubeId: "WdpozrmR6i4",
            title: "SQL Injection Prevention",
          },
          flowchart: "if-else",
        },
        {
          id: "be-auth-p3s2",
          title: "Input Validation with Joi/Zod",
          content:
            "Validate all incoming data before processing. Joi and Zod define schemas and validate against them. Return 400 on validation errors. Never trust client input. Validate types, required fields, lengths, formats (email, UUID).",
          codeExample:
            "const Joi = require('joi');\n\nconst userSchema = Joi.object({\n  name: Joi.string().min(2).max(50).required(),\n  email: Joi.string().email().required(),\n  age: Joi.number().integer().min(0).max(120),\n  role: Joi.string().valid('user', 'admin').default('user'),\n});\n\n// Validate in route\napp.post('/users', async (req, res) => {\n  const { error, value } = userSchema.validate(req.body);\n  if (error) {\n    return res.status(400).json({\n      error: error.details[0].message\n    });\n  }\n  // Use 'value' (sanitized) not req.body\n  const user = await User.create(value);\n  res.status(201).json(user);\n});",
          video: { youtubeId: "WdpozrmR6i4", title: "Input Validation" },
        },
        {
          id: "be-auth-p3s3",
          title: "Helmet, CORS & Rate Limiting",
          content:
            "Helmet sets 14 security headers (CSP, HSTS, X-Frame-Options, etc.) — add it early. CORS: use the cors package, configure allowedOrigins. Rate limiting: express-rate-limit with windowMs and max settings. Apply strict limits to auth endpoints to prevent brute force.",
          codeExample:
            "const helmet = require('helmet');\nconst cors = require('cors');\nconst rateLimit = require('express-rate-limit');\n\n// Security headers\napp.use(helmet());\n\n// CORS - only allow trusted origins\napp.use(cors({\n  origin: ['https://myapp.com', 'http://localhost:3000'],\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  credentials: true\n}));\n\n// Rate limit - global\napp.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));\n\n// Strict limit on auth routes\nconst authLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 10,\n  message: { error: 'Too many attempts. Try again in 15 minutes.' }\n});\napp.use('/auth', authLimiter);",
          video: {
            youtubeId: "WdpozrmR6i4",
            title: "Helmet, CORS, Rate Limiting",
          },
          flowchart: "compilation-pipeline",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the purpose of salting a password before hashing?",
      options: [
        "Makes hash faster",
        "Ensures identical passwords produce different hashes",
        "Adds encryption",
        "Compresses the hash",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is CSRF?",
      options: [
        "Cross-Site Request Forgery — forces authenticated users to perform unintended actions",
        "A SQL attack",
        "An XSS variant",
        "A brute-force attack",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "Which JWT header field specifies the algorithm?",
      options: ["payload.alg", "header.alg", "header.typ", "claims.alg"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What HTTP header carries a Bearer token?",
      options: ["Content-Type", "Authorization", "X-Auth-Token", "Cookie"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does SameSite=Strict on a cookie do?",
      options: [
        "Prevents all cross-origin requests",
        "Prevents cookie from being sent in cross-site requests",
        "Encrypts the cookie",
        "Makes cookie session-only",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "be-auth-t1",
      title: "JWT Auth System",
      description:
        "Build POST /auth/signup (hash password, return user) and POST /auth/login (verify password, return JWT). Add requireAuth middleware for GET /profile.",
      starterCode:
        "const express = require('express');\nconst bcrypt = require('bcrypt');\nconst jwt = require('jsonwebtoken');\nconst app = express();\napp.use(express.json());\n\nconst JWT_SECRET = 'dev-secret';\nconst users = [];\n\n// POST /auth/signup\n// POST /auth/login\n// middleware requireAuth\n// GET /profile (protected)\n\napp.listen(3000);",
      hints: [
        "Hash with bcrypt.hash(password, 10) on signup",
        "On login: bcrypt.compare(plain, hashed)",
        "jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' })",
      ],
    },
    {
      id: "be-auth-t2",
      title: "Input Validation Middleware",
      description:
        "Write a validate(schema) middleware factory using Joi that validates req.body against the schema and returns 400 on errors. Apply it to POST /users.",
      starterCode:
        "const express = require('express');\nconst Joi = require('joi');\nconst app = express();\napp.use(express.json());\n\nfunction validate(schema) {\n  return (req, res, next) => {\n    // validate req.body, call next() or return 400\n  };\n}\n\nconst userSchema = Joi.object({\n  name: Joi.string().min(2).required(),\n  email: Joi.string().email().required(),\n});\n\napp.post('/users', validate(userSchema), (req, res) => {\n  res.status(201).json(req.body);\n});\n\napp.listen(3000);",
      hints: [
        "Call schema.validate(req.body)",
        "If error, return res.status(400).json({ error: error.details[0].message })",
        "Otherwise call next()",
      ],
    },
    {
      id: "be-auth-t3",
      title: "Rate-Limited Auth Endpoint",
      description:
        "Set up Helmet and CORS (allow localhost:3000). Add a strict rate limiter (3 requests per minute) on POST /auth/login that returns a friendly error on limit.",
      starterCode:
        "const express = require('express');\nconst helmet = require('helmet');\nconst cors = require('cors');\nconst rateLimit = require('express-rate-limit');\nconst app = express();\n\n// Add helmet\n// Add cors for localhost:3000\n// Create rate limiter: 3 per minute with message\n\napp.post('/auth/login', /* limiter */ (req, res) => {\n  res.json({ token: 'fake-token' });\n});\n\napp.listen(3000);",
      hints: [
        "app.use(helmet()) adds all security headers",
        "cors({ origin: 'http://localhost:3000' })",
        "rateLimit({ windowMs: 60*1000, max: 3, message: { error: '...' } })",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: Deployment & Scalability ───────────────────────────────────────

const be_module5: CModule = {
  id: "be-deployment",
  title: "Module 5: Deployment & Scalability",
  outcome:
    "Containerize apps with Docker, set up CI/CD, and scale with Redis caching.",
  isLocked: true,
  parts: [
    {
      id: "be-deploy-p1",
      title: "Part 1: Docker & Containers",
      description: "Dockerfile, images, containers, docker-compose.",
      videoUrl: "https://www.youtube.com/watch?v=3c-iBn73dDE",
      notes:
        "DOCKER & CONTAINERS\n\nDocker packages your app and all its dependencies into a portable container. Dockerfile: FROM (base image), WORKDIR, COPY, RUN, EXPOSE, CMD. docker build -t myapp:latest . builds an image. docker run -p 3000:3000 myapp starts a container. docker-compose.yml orchestrates multiple services (app, db, redis). .dockerignore excludes node_modules. Multi-stage builds: separate build and runtime stages to minimize final image size.",
      docs: [
        { label: "Docker Documentation", url: "https://docs.docker.com/" },
        {
          label: "Docker Compose Docs",
          url: "https://docs.docker.com/compose/",
        },
      ],
      partQuiz: [
        {
          question: "What is a Docker container?",
          options: [
            "A virtual machine",
            "A lightweight isolated runtime environment",
            "A build tool",
            "A cloud service",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What file defines how to build a Docker image?",
          options: ["docker.json", "Dockerfile", "compose.yml", ".dockerenv"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does docker-compose do?",
          options: [
            "Builds a single container",
            "Orchestrates multiple services together",
            "Deploys to cloud",
            "Monitors containers",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does -p 3000:3000 mean in docker run?",
          options: [
            "Exposes port 3000 internally only",
            "Maps host port 3000 to container port 3000",
            "Runs 3000 instances",
            "Limits memory to 3000MB",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What should .dockerignore contain?",
          options: [
            "All source files",
            "node_modules, .git, .env, build artifacts",
            "Dockerfile",
            "Nothing",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-deploy-p1s1",
          title: "Writing a Dockerfile",
          content:
            "FROM sets the base image. WORKDIR sets the working directory inside the container. COPY copies files. RUN executes commands at build time. EXPOSE documents which port the app uses. CMD is the default command to run the container. Use .dockerignore to exclude unnecessary files.",
          codeExample:
            '# Dockerfile for Node.js Express app\nFROM node:18-alpine\n\n# Set working directory\nWORKDIR /app\n\n# Copy package files first (for layer caching)\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Copy source code\nCOPY . .\n\n# Expose port (documentation only)\nEXPOSE 3000\n\n# Start the app\nCMD ["node", "index.js"]\n\n# .dockerignore\n# node_modules\n# .git\n# .env\n# *.log',
          video: { youtubeId: "3c-iBn73dDE", title: "Writing a Dockerfile" },
          flowchart: "compiler-flow",
        },
        {
          id: "be-deploy-p1s2",
          title: "Docker Commands & Workflow",
          content:
            "Build: docker build -t app:latest . Run: docker run -p 3000:3000 --env-file .env app:latest. List containers: docker ps. Stop: docker stop <id>. Remove: docker rm <id>. Logs: docker logs <id>. Shell into container: docker exec -it <id> sh.",
          codeExample:
            "# Build image\ndocker build -t myapp:latest .\n\n# Run container\ndocker run -p 3000:3000 --env-file .env -d myapp:latest\n\n# View running containers\ndocker ps\n\n# View logs\ndocker logs -f <container_id>\n\n# Shell into running container\ndocker exec -it <container_id> sh\n\n# Stop and remove\ndocker stop <container_id>\ndocker rm <container_id>\n\n# Remove image\ndocker rmi myapp:latest",
          video: { youtubeId: "3c-iBn73dDE", title: "Docker Commands" },
        },
        {
          id: "be-deploy-p1s3",
          title: "docker-compose for Multi-Service Apps",
          content:
            "docker-compose.yml defines multiple services (app, database, redis). Services can reference each other by service name. Volumes persist data. depends_on sets startup order. docker compose up -d starts everything. docker compose down stops it all.",
          codeExample:
            "# docker-compose.yml\nversion: '3.8'\nservices:\n  app:\n    build: .\n    ports:\n      - '3000:3000'\n    environment:\n      DATABASE_URL: postgresql://postgres:pass@db:5432/mydb\n      REDIS_URL: redis://redis:6379\n    depends_on:\n      - db\n      - redis\n\n  db:\n    image: postgres:15-alpine\n    environment:\n      POSTGRES_PASSWORD: pass\n      POSTGRES_DB: mydb\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\n  redis:\n    image: redis:7-alpine\n\nvolumes:\n  pgdata:",
          video: { youtubeId: "3c-iBn73dDE", title: "docker-compose" },
          flowchart: "storage-hierarchy",
        },
      ],
    },
    {
      id: "be-deploy-p2",
      title: "Part 2: CI/CD Pipelines",
      description:
        "GitHub Actions, automated testing, building, and deployment.",
      videoUrl: "https://www.youtube.com/watch?v=R8_veQiYBjI",
      notes:
        "CI/CD PIPELINES\n\nCI (Continuous Integration): automatically test and build code on every push. CD (Continuous Deployment): automatically deploy to production. GitHub Actions: YAML workflows in .github/workflows/. Trigger on push, pull_request, or schedule. Jobs run steps: checkout, install, lint, test, build, deploy. Secrets: stored in GitHub Settings > Secrets, accessed as ${{ secrets.MY_SECRET }}. Artifacts: save build output between jobs. Cache: speed up installs with action/cache.",
      docs: [
        {
          label: "GitHub Actions Docs",
          url: "https://docs.github.com/en/actions",
        },
        {
          label: "GitHub Actions Marketplace",
          url: "https://github.com/marketplace?type=actions",
        },
      ],
      partQuiz: [
        {
          question: "What does CI stand for?",
          options: [
            "Container Integration",
            "Continuous Integration",
            "Code Inspection",
            "Cloud Infrastructure",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Where are GitHub Actions workflows defined?",
          options: [
            ".github/actions/",
            ".github/workflows/",
            "ci/",
            "scripts/",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you access a GitHub secret in a workflow?",
          options: [
            "process.env.SECRET",
            "${{ secrets.SECRET_NAME }}",
            "env.SECRET_NAME",
            "github.secret.NAME",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What event typically triggers a CI pipeline?",
          options: [
            "On file save",
            "On every commit to any branch",
            "On push or pull_request",
            "On deployment only",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does CD (Continuous Deployment) do?",
          options: [
            "Runs tests only",
            "Automatically deploys passing builds to production",
            "Scans for security issues",
            "Manages database migrations",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-deploy-p2s1",
          title: "GitHub Actions Basics",
          content:
            "A workflow YAML file in .github/workflows/ defines automation. on: specifies triggers (push, pull_request). jobs: defines parallel jobs. steps: sequential commands within a job. uses: references an Action from the marketplace. run: executes a shell command.",
          codeExample:
            "# .github/workflows/ci.yml\nname: CI Pipeline\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: '18'\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Run linter\n        run: npm run lint\n\n      - name: Run tests\n        run: npm test",
          video: { youtubeId: "R8_veQiYBjI", title: "GitHub Actions CI" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "be-deploy-p2s2",
          title: "Testing in CI",
          content:
            "Run tests automatically on every push. Use jest for unit/integration tests. Coverage reports with jest --coverage. Store test results as artifacts. Fail the pipeline if tests fail (non-zero exit code). Matrix builds: test on multiple Node.js versions.",
          codeExample:
            "# Extended CI with coverage and matrix\njobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: ['18.x', '20.x']\n\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node-version }}\n          cache: 'npm'\n\n      - run: npm ci\n      - run: npm test -- --coverage\n\n      - name: Upload coverage\n        uses: actions/upload-artifact@v4\n        with:\n          name: coverage-${{ matrix.node-version }}\n          path: coverage/",
          video: {
            youtubeId: "R8_veQiYBjI",
            title: "CI Testing with GitHub Actions",
          },
          flowchart: "loop",
        },
        {
          id: "be-deploy-p2s3",
          title: "CD — Deploying to Production",
          content:
            "After CI passes, CD deploys automatically. Use environment: production to require approvals. Build Docker image, push to Docker Hub or GHCR. SSH deploy to server or trigger Railway/Render/Fly.io deploy. Store credentials in GitHub Secrets, never hardcode.",
          codeExample:
            "# CD — Build & push Docker image on main push\n  build-and-push:\n    runs-on: ubuntu-latest\n    needs: test  # only run if tests pass\n    if: github.ref == 'refs/heads/main'\n\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Login to Docker Hub\n        uses: docker/login-action@v3\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_TOKEN }}\n\n      - name: Build and push\n        uses: docker/build-push-action@v5\n        with:\n          push: true\n          tags: myuser/myapp:latest\n\n      - name: Deploy to server\n        run: |\n          ssh deploy@myserver 'docker pull myuser/myapp:latest && docker-compose up -d'",
          video: { youtubeId: "R8_veQiYBjI", title: "CD with GitHub Actions" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "be-deploy-p3",
      title: "Part 3: Caching with Redis & Scaling",
      description:
        "Redis caching patterns, session storage, horizontal scaling.",
      videoUrl: "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
      notes:
        "REDIS & SCALING\n\nRedis is an in-memory data store: blazing fast, supports strings, hashes, lists, sets, sorted sets, streams. Used for: caching DB query results, session storage, rate limiting, pub/sub, job queues. Cache-Aside pattern: check cache → miss → query DB → set cache with TTL. Horizontal scaling: run multiple app instances behind a load balancer. Stateless apps (JWT, not sessions) scale horizontally easily. Process manager: PM2 with cluster mode uses all CPU cores.",
      docs: [
        { label: "Redis Documentation", url: "https://redis.io/docs/" },
        { label: "ioredis GitHub", url: "https://github.com/redis/ioredis" },
      ],
      partQuiz: [
        {
          question: "What is Redis primarily stored in?",
          options: ["Disk", "Memory (RAM)", "SSD", "Network"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the Cache-Aside pattern?",
          options: [
            "Pre-loading all data",
            "Check cache first, fallback to DB on miss, then cache the result",
            "Writing to cache only",
            "Invalidating cache on every request",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does TTL mean in caching?",
          options: [
            "Time To Load",
            "Time To Live — how long a cache entry stays",
            "Total Transfer Limit",
            "Token Timeout Level",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is horizontal scaling?",
          options: [
            "Adding more CPU to one server",
            "Running more instances behind a load balancer",
            "Upgrading RAM",
            "Using a faster database",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does PM2 cluster mode do?",
          options: [
            "Manages Docker containers",
            "Spawns multiple Node.js processes using all CPU cores",
            "Connects to Redis",
            "Runs migrations",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "be-deploy-p3s1",
          title: "Redis Basics & Data Types",
          content:
            "Connect with ioredis. SET key value EX seconds (with TTL). GET key returns value or null. DEL key removes it. INCR atomically increments — great for rate limiting. HSET/HGET for hash maps. LPUSH/RPOP for queues. EXPIRE sets TTL on existing key.",
          codeExample:
            "const Redis = require('ioredis');\nconst redis = new Redis(process.env.REDIS_URL);\n\n// String with TTL\nawait redis.set('session:abc', JSON.stringify(userData), 'EX', 3600);\nconst data = await redis.get('session:abc');\n\n// Atomic counter (rate limiting)\nawait redis.incr('hits:user:123');  // auto-creates at 0\nconst hits = await redis.get('hits:user:123');\n\n// Hash map\nawait redis.hset('user:123', 'name', 'Alice', 'role', 'admin');\nconst name = await redis.hget('user:123', 'name');\n\n// Expiry\nawait redis.expire('user:123', 86400); // 24h",
          video: { youtubeId: "jgpVdJB2sKQ", title: "Redis Basics" },
        },
        {
          id: "be-deploy-p3s2",
          title: "Cache-Aside Pattern",
          content:
            "Cache-Aside: 1) Check Redis for key. 2) If hit, return cached data. 3) If miss, query DB, store in Redis with TTL, return data. Choose TTL based on how often data changes. Invalidate/delete cache keys when data is updated. Never cache sensitive data without careful consideration.",
          codeExample:
            "async function getUserById(id) {\n  const cacheKey = `user:${id}`;\n\n  // 1. Check cache\n  const cached = await redis.get(cacheKey);\n  if (cached) {\n    return JSON.parse(cached);  // cache hit!\n  }\n\n  // 2. Cache miss — query DB\n  const user = await User.findById(id).lean();\n  if (!user) return null;\n\n  // 3. Store in cache for 1 hour\n  await redis.set(cacheKey, JSON.stringify(user), 'EX', 3600);\n\n  return user;\n}\n\n// Invalidate on update\nasync function updateUser(id, data) {\n  const user = await User.findByIdAndUpdate(id, data, { new: true });\n  await redis.del(`user:${id}`);  // bust cache\n  return user;\n}",
          video: { youtubeId: "jgpVdJB2sKQ", title: "Cache-Aside Pattern" },
          flowchart: "if-else",
        },
        {
          id: "be-deploy-p3s3",
          title: "Horizontal Scaling & PM2",
          content:
            "Horizontal scaling: add more app instances. Requires stateless apps (JWT, not server-side sessions). Load balancer (Nginx, AWS ALB) distributes traffic. PM2 cluster mode: pm2 start app.js -i max starts one process per CPU core. Shared state (sessions, locks) must live in Redis, not memory.",
          codeExample:
            "# PM2 cluster mode\npm2 start index.js --name myapp -i max\npm2 list\npm2 reload myapp   # zero-downtime reload\npm2 stop myapp\n\n# ecosystem.config.js\nmodule.exports = {\n  apps: [{\n    name: 'myapp',\n    script: 'index.js',\n    instances: 'max',\n    exec_mode: 'cluster',\n    env: {\n      NODE_ENV: 'production',\n      PORT: 3000\n    }\n  }]\n};\npm2 start ecosystem.config.js\n\n# Nginx load balancer config\n# upstream app { server localhost:3000; server localhost:3001; }\n# server { location / { proxy_pass http://app; } }",
          video: { youtubeId: "jgpVdJB2sKQ", title: "Scaling with PM2" },
          flowchart: "storage-hierarchy",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "What is the difference between a Docker image and a container?",
      options: [
        "Same thing",
        "Image is the blueprint; container is a running instance",
        "Container is stored; image runs",
        "Images are larger",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'needs: test' in GitHub Actions mean?",
      options: [
        "Runs in parallel with test",
        "Only runs after the test job succeeds",
        "Imports the test job",
        "Skips test",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which Redis command atomically increments a counter?",
      options: ["ADD", "COUNT", "INCR", "INC"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Why should Node.js app instances be stateless?",
      options: [
        "Performance",
        "So any instance can handle any request without shared memory state",
        "Security",
        "Simplicity",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does multi-stage Docker build achieve?",
      options: [
        "Faster builds only",
        "Smaller final image by separating build and runtime stages",
        "Multiple containers",
        "Parallel builds",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "be-deploy-t1",
      title: "Write a Production Dockerfile",
      description:
        "Write a Dockerfile for an Express app (node:18-alpine, WORKDIR /app, copy package.json first, npm ci --only=production, copy source, EXPOSE 3000, CMD node index.js). Add a .dockerignore.",
      starterCode:
        "# Dockerfile\n# Use node:18-alpine\n# Set WORKDIR to /app\n# Copy package.json first for layer caching\n# RUN npm ci --only=production\n# Copy remaining source\n# EXPOSE 3000\n# Start the app\n\n# .dockerignore contents (as a comment below):\n# node_modules\n# .git\n# .env",
      hints: [
        "FROM node:18-alpine, WORKDIR /app",
        "COPY package*.json ./ then RUN npm ci",
        'COPY . . then CMD ["node", "index.js"]',
      ],
    },
    {
      id: "be-deploy-t2",
      title: "GitHub Actions CI Workflow",
      description:
        "Write a GitHub Actions workflow that runs on push to main: checkout code, setup Node 18, npm ci, npm test. Add caching for node_modules using actions/cache.",
      starterCode:
        "# .github/workflows/ci.yml\nname: CI\n\non:\n  push:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      # checkout\n      # setup node 18\n      # cache node_modules\n      # npm ci\n      # npm test",
      hints: [
        "uses: actions/checkout@v4, then actions/setup-node@v4 with node-version: '18'",
        "Cache: actions/cache with path: ~/.npm and key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}",
        "run: npm ci && npm test",
      ],
    },
    {
      id: "be-deploy-t3",
      title: "Redis Cache Middleware",
      description:
        "Write an Express middleware factory cache(ttl) that caches GET responses in Redis. If a cached response exists, return it. Otherwise, call next(), intercept the response, and cache it.",
      starterCode:
        "const redis = require('ioredis').createClient();\n\nfunction cache(ttlSeconds) {\n  return async (req, res, next) => {\n    const key = `cache:${req.url}`;\n    // check redis for cached response\n    // if hit: return cached\n    // if miss: intercept res.json, cache result, then respond\n  };\n}\n\napp.get('/users', cache(300), async (req, res) => {\n  const users = await User.find();\n  res.json(users);\n});",
      hints: [
        "const cached = await redis.get(key); if (cached) return res.json(JSON.parse(cached))",
        "Override res.json: const originalJson = res.json.bind(res); res.json = async (data) => { await redis.set(key, JSON.stringify(data), 'EX', ttlSeconds); return originalJson(data); }",
        "Call next() after overriding res.json",
      ],
    },
  ] as CTestProblem[],
};

// ─── Exported Course ───────────────────────────────────────────────────────────

export const BACKEND_DEVELOPER_COURSE: CModule[] = [
  be_module0,
  be_module1,
  be_module2,
  be_module3,
  be_module4,
  be_module5,
];

export const BACKEND_DEVELOPER_ROADMAP_ENTRY = {
  id: "backend-developer-course",
  title: "Backend Developer",
  icon: "⚙️",
  color: "from-green-500/20 to-emerald-500/10",
  tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  description:
    "Node.js, Express, databases, REST & GraphQL APIs, auth, Docker & CI/CD — 5 structured modules to job-ready.",
  level: "Beginner to Advanced",
  isCourse: true as const,
  topics: [],
};

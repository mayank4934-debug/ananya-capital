import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const fe_module0: CModule = {
  id: "frontend-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "frontend-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Frontend Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO FRONTEND DEVELOPMENT!

Hey! I'm absolutely thrilled to be your companion on this Frontend Development adventure! 🎨 Building things people actually see and interact with is one of the most rewarding skills in tech. I'll be with you every step, from your first HTML tag to deploying a beautiful React app!

COURSE OVERVIEW
Frontend development is the art and science of building what users see in their browsers. You'll master HTML for structure, CSS for visual design, JavaScript for interactivity, and React for building modern web apps. Frontend developers are in massive demand — this course prepares you for real jobs at tech companies, startups, and freelance work.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write HTML, CSS, or JS code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~40 hours
This is a comprehensive frontend course. Dedicate 1–2 hours per day and you'll be job-ready in about 4–5 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist in the subsection below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "frontend-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Frontend Development course:

1. HTML Fundamentals — Document structure, semantic elements, forms, accessibility
2. CSS Styling — Selectors, Flexbox, Grid, animations, responsive design
3. JavaScript Core — Variables, functions, DOM manipulation, events, async JS
4. DOM & Events — Advanced DOM, event handling, localStorage, fetch API
5. React — Components, hooks, state management, routing, deployment
6. Advanced Topics — Performance, testing, TypeScript basics, CI/CD
7. Projects — Real-world portfolio projects to showcase your skills`,
          codeExample: "",
        },
        {
          id: "frontend-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Hands-on exercises in parts where you write actual code

Theory-only parts (like "How the web works") do NOT have coding questions — only parts that teach you to write HTML, CSS, or JS include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "frontend-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what frontend development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Frontend Development journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: HTML Foundations ───────────────────────────────────────────────

const fe_module1: CModule = {
  id: "fe-html",
  title: "Module 1: HTML Foundations",
  outcome: "Build well-structured, accessible web pages using semantic HTML.",
  isLocked: false,
  parts: [
    {
      id: "fe-html-p1",
      title: "Part 1: Web Basics",
      description:
        "How the web works, browsers, HTTP, and HTML document structure.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
      notes:
        "WEB BASICS\n\nThe web uses HTTP/HTTPS to transfer HTML, CSS, and JS between servers and browsers. A URL has a protocol, domain, and path. Browsers parse HTML into a DOM tree, apply CSS, and execute JS to render pages.",
      docs: [
        {
          label: "MDN: How the Web Works",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
        },
        {
          label: "MDN: HTML Basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
        },
      ],
      partQuiz: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which protocol is used to load web pages?",
          options: ["FTP", "HTTP", "SMTP", "SSH"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the DOM?",
          options: [
            "Document Object Model",
            "Data Object Method",
            "Display Object Map",
            "Dynamic Output Manager",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which tag is the root of an HTML document?",
          options: ["<body>", "<head>", "<html>", "<main>"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style System",
            "Colorful Style Script",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-html-p1s1",
          title: "How the Web Works",
          content:
            "When you type a URL, the browser sends an HTTP request to a server. The server responds with HTML. The browser parses HTML, fetches linked CSS/JS, and renders the page. Understanding this request-response cycle is fundamental to web development.",
          video: { youtubeId: "qz0aGYrrlhU", title: "How the Web Works" },
          flowchart: "compiler-flow",
        },
        {
          id: "fe-html-p1s2",
          title: "HTML Document Structure",
          content:
            "Every HTML file starts with <!DOCTYPE html>, then <html>, <head> (metadata, title, links), and <body> (visible content). The <head> contains <meta charset>, <meta name='viewport'>, and <title>. Always include the viewport meta tag for responsive design.",
          codeExample:
            '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>',
          video: { youtubeId: "qz0aGYrrlhU", title: "HTML Document Structure" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fe-html-p1s3",
          title: "Semantic HTML",
          content:
            "Semantic elements convey meaning: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>. Using semantic HTML improves SEO and accessibility. Avoid <div> soup — use the most descriptive element available.",
          codeExample:
            '<header><nav><a href="/">Home</a></nav></header>\n<main>\n  <article>\n    <h1>Post Title</h1>\n    <p>Content here</p>\n  </article>\n</main>\n<footer><p>© 2025</p></footer>',
          video: { youtubeId: "qz0aGYrrlhU", title: "Semantic HTML" },
        },
      ],
    },
    {
      id: "fe-html-p2",
      title: "Part 2: Forms & Tables",
      description: "HTML forms, input types, validation, and data tables.",
      videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      notes:
        "FORMS & TABLES\n\nForms collect user input via <form action method>. Input types: text, email, password, number, checkbox, radio, file, submit. Use <label for> to associate labels. Tables use <table>, <thead>, <tbody>, <tr>, <th>, <td>. Use tables for tabular data only, not for layout.",
      docs: [
        {
          label: "MDN: HTML Forms",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
        },
        {
          label: "MDN: HTML Tables",
          url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables",
        },
      ],
      partQuiz: [
        {
          question: "Which attribute links a <label> to an <input>?",
          options: ["name", "for", "id", "class"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What input type creates a password field?",
          options: ["text", "secure", "password", "hidden"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which tag defines a table header cell?",
          options: ["<td>", "<th>", "<thead>", "<tr>"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What attribute makes a form field required?",
          options: ["mandatory", "required", "validate", "must"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which HTTP method is used for sensitive form data?",
          options: ["GET", "POST", "PUT", "PATCH"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-html-p2s1",
          title: "Form Elements",
          content:
            "A form groups inputs for submission. The action attribute sets the destination URL; method (GET or POST) controls how data is sent. Use GET for searches (data in URL), POST for sensitive data (hidden in request body). Always associate <label> with <input> via matching for and id.",
          codeExample:
            '<form action="/submit" method="POST">\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required />\n  <button type="submit">Submit</button>\n</form>',
          video: { youtubeId: "pQN-pnXPaVg", title: "HTML Forms Tutorial" },
        },
        {
          id: "fe-html-p2s2",
          title: "Input Types & Validation",
          content:
            "HTML5 provides many input types: text, email, number, date, checkbox, radio, file, range. Built-in validation attributes: required, minlength, maxlength, min, max, pattern. The pattern attribute accepts a regex. Browser validation runs before form submission.",
          codeExample:
            '<input type="email" required />\n<input type="number" min="1" max="100" />\n<input type="text" pattern="[A-Za-z]+" />',
          video: { youtubeId: "pQN-pnXPaVg", title: "HTML Input Types" },
          flowchart: "if-else",
        },
        {
          id: "fe-html-p2s3",
          title: "HTML Tables",
          content:
            "Tables display data in rows and columns. Use <thead> for header rows, <tbody> for data rows, and <tfoot> for summary rows. The colspan and rowspan attributes merge cells. Never use tables for page layout — that's CSS's job.",
          codeExample:
            "<table>\n  <thead><tr><th>Name</th><th>Score</th></tr></thead>\n  <tbody>\n    <tr><td>Alice</td><td>95</td></tr>\n    <tr><td>Bob</td><td>87</td></tr>\n  </tbody>\n</table>",
          video: { youtubeId: "pQN-pnXPaVg", title: "HTML Tables" },
        },
      ],
    },
    {
      id: "fe-html-p3",
      title: "Part 3: HTML5 Features",
      description:
        "Media elements, canvas, SVG, localStorage, and modern HTML APIs.",
      videoUrl: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
      notes:
        "HTML5 FEATURES\n\nHTML5 added: <video>, <audio> for media; <canvas> for drawing; <svg> for vector graphics; localStorage/sessionStorage for client-side storage; Geolocation API; drag-and-drop; custom data attributes (data-*).\n\nMedia: <video src controls autoplay loop>. Audio: <audio src controls>. Use <source> for multiple formats.",
      docs: [
        {
          label: "MDN: HTML5",
          url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        },
        {
          label: "MDN: Web Storage API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
        },
      ],
      partQuiz: [
        {
          question: "Which HTML5 element is used to embed video?",
          options: ["<media>", "<movie>", "<video>", "<embed>"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Where does localStorage store data?",
          options: ["Server", "Database", "Browser", "Cookies"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What attribute stores custom data on any HTML element?",
          options: ["custom-*", "data-*", "attr-*", "meta-*"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which element is used for 2D drawing via JavaScript?",
          options: ["<svg>", "<draw>", "<canvas>", "<picture>"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the localStorage max storage size approximately?",
          options: ["4KB", "50KB", "5MB", "500MB"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-html-p3s1",
          title: "Audio & Video",
          content:
            "HTML5 embeds media natively without plugins. The <video> element supports controls, autoplay, loop, and muted attributes. Use multiple <source> elements for browser compatibility (mp4, webm). The <audio> element works the same way for sound.",
          codeExample:
            '<video controls width="640">\n  <source src="movie.mp4" type="video/mp4" />\n  <source src="movie.webm" type="video/webm" />\n  Your browser doesn\'t support video.\n</video>',
          video: { youtubeId: "kUMe1FH4CHE", title: "HTML5 Video & Audio" },
        },
        {
          id: "fe-html-p3s2",
          title: "localStorage & sessionStorage",
          content:
            "localStorage persists data across browser sessions until explicitly cleared. sessionStorage clears when the tab is closed. Both use key-value strings (JSON.stringify/parse for objects). Max ~5MB. Use for user preferences, cached data, and drafts.",
          codeExample:
            "// Save\nlocalStorage.setItem('theme', 'dark');\n// Read\nconst theme = localStorage.getItem('theme');\n// Remove\nlocalStorage.removeItem('theme');\n// Objects\nlocalStorage.setItem('user', JSON.stringify({name: 'Alice'}));",
          video: { youtubeId: "kUMe1FH4CHE", title: "Web Storage API" },
        },
        {
          id: "fe-html-p3s3",
          title: "data-* Attributes & Canvas",
          content:
            "Custom data-* attributes store extra information on HTML elements without affecting display. Access via element.dataset.key. The <canvas> element provides a 2D drawing context via JavaScript — useful for charts, games, and visualizations.",
          codeExample:
            "<button data-id=\"42\" data-action=\"delete\">Delete</button>\n\n<script>\n  btn.addEventListener('click', () => {\n    console.log(btn.dataset.id); // '42'\n  });\n</script>",
          video: {
            youtubeId: "kUMe1FH4CHE",
            title: "HTML5 Canvas & data attributes",
          },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which semantic element wraps the main site navigation?",
      options: ["<header>", "<nav>", "<menu>", "<section>"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What tag creates a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which attribute makes an image accessible?",
      options: ["title", "alt", "src", "name"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does the viewport meta tag control?",
      options: [
        "Page title",
        "Responsive scaling on mobile",
        "SEO keywords",
        "Font size",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which input type shows a date picker?",
      options: ["text", "datetime", "date", "calendar"],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fe-html-t1",
      title: "Semantic Page Layout",
      description:
        "Create a complete HTML page with header, nav, main, article, and footer. Include a navigation with 3 links.",
      starterCode:
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <title>My Page</title>\n</head>\n<body>\n  <!-- Add header, nav, main, article, footer -->\n</body>\n</html>',
      hints: [
        "Use <header> for the top section",
        "Use <nav> with <a> links inside",
        "Wrap content in <main> and <article>",
      ],
    },
    {
      id: "fe-html-t2",
      title: "Contact Form",
      description:
        "Build a contact form with name (text), email (email), message (textarea), and a submit button. All fields required.",
      starterCode: "<form>\n  <!-- name, email, message, submit -->\n</form>",
      hints: [
        "Use <label for> matched to <input id>",
        "Add required attribute to all inputs",
        "Use <textarea> for multi-line text",
      ],
    },
    {
      id: "fe-html-t3",
      title: "Data Table",
      description:
        "Create a table with 3 columns (Name, Role, XP) and 4 data rows. Include a proper thead and tbody.",
      starterCode: "<table>\n  <!-- Add thead and tbody -->\n</table>",
      hints: [
        "Use <thead><tr><th> for headers",
        "Use <tbody><tr><td> for data rows",
        "Add border attribute or CSS for visibility",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: CSS & Styling ──────────────────────────────────────────────────

const fe_module2: CModule = {
  id: "fe-css",
  title: "Module 2: CSS & Styling",
  outcome:
    "Style web pages with modern CSS including Flexbox, Grid, and responsive design.",
  isLocked: true,
  parts: [
    {
      id: "fe-css-p1",
      title: "Part 1: CSS Basics",
      description: "Selectors, box model, colors, typography, and specificity.",
      videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      notes: `CSS BASICS\n\nCSS selectors: element (p), class (.btn), ID (#header), attribute ([type="text"]), pseudo-class (:hover), pseudo-element (::before). Box model: content + padding + border + margin. box-sizing: border-box makes width include padding and border. Specificity: inline > ID > class > element.`,
      docs: [
        {
          label: "MDN: CSS Reference",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
        },
        {
          label: "CSS Tricks: Box Model",
          url: "https://css-tricks.com/the-css-box-model/",
        },
      ],
      partQuiz: [
        {
          question: "Which CSS property controls text size?",
          options: ["text-size", "font-size", "size", "text-style"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'box-sizing: border-box' do?",
          options: [
            "Adds a border",
            "Includes padding+border in width",
            "Removes margins",
            "Resets box model",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which has highest specificity?",
          options: ["element", "class", "ID", "inline style"],
          correct: 3,
          xp: 10,
        },
        {
          question: "How do you select an element with class 'card'?",
          options: ["#card", ".card", "card", "*card"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which property sets space inside an element's border?",
          options: ["margin", "padding", "border", "gap"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-css-p1s1",
          title: "Selectors & Specificity",
          content:
            "CSS selectors target elements: tag (p), class (.btn), ID (#app), combinators (div > p), pseudo-classes (:hover, :focus). Specificity determines which rule wins: inline > ID > class > element. When specificity ties, the last rule wins (cascade).",
          codeExample:
            "/* Element */ p { color: black; }\n/* Class */  .btn { background: blue; }\n/* ID */     #header { font-size: 24px; }\n/* Hover */  .btn:hover { opacity: 0.8; }",
          video: { youtubeId: "1Rs2ND1ryYc", title: "CSS Selectors" },
          flowchart: "if-else",
        },
        {
          id: "fe-css-p1s2",
          title: "Box Model",
          content:
            "Every element is a box: content + padding (inside border) + border + margin (outside border). Default box-sizing: content-box means width only counts content. Set box-sizing: border-box globally so padding and border are included in declared width — this prevents layout surprises.",
          codeExample:
            "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;\n  padding: 16px;\n  border: 2px solid #ccc;\n  margin: 8px;\n}",
          video: { youtubeId: "1Rs2ND1ryYc", title: "CSS Box Model" },
          flowchart: "memory-hierarchy",
        },
        {
          id: "fe-css-p1s3",
          title: "Typography & Colors",
          content:
            "Typography: font-family, font-size, font-weight, line-height, letter-spacing, text-align. Use system font stacks or Google Fonts. Colors: named, hex (#ff0000), rgb(), hsl(), oklch(). CSS variables (custom properties) make theming easy: --primary: #007bff, then color: var(--primary).",
          codeExample:
            ":root {\n  --primary: #007bff;\n  --text: #333;\n}\n\nbody {\n  font-family: system-ui, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  color: var(--text);\n}",
          video: { youtubeId: "1Rs2ND1ryYc", title: "CSS Typography & Colors" },
        },
      ],
    },
    {
      id: "fe-css-p2",
      title: "Part 2: Layouts — Flexbox & Grid",
      description: "Modern CSS layout with Flexbox and CSS Grid.",
      videoUrl: "https://www.youtube.com/watch?v=phWxA89Dy94",
      notes:
        "FLEXBOX & GRID\n\nFlexbox: one-dimensional. Container: display:flex, flex-direction, justify-content (main axis), align-items (cross axis), flex-wrap. Children: flex-grow, flex-shrink, flex-basis, align-self.\n\nCSS Grid: two-dimensional. Container: display:grid, grid-template-columns, grid-template-rows, gap. Children: grid-column, grid-row.",
      docs: [
        {
          label: "CSS Tricks: Flexbox Guide",
          url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
        {
          label: "CSS Tricks: Grid Guide",
          url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
        },
      ],
      partQuiz: [
        {
          question: "Which CSS property creates a flex container?",
          options: [
            "display: flex",
            "flex: auto",
            "layout: flex",
            "position: flex",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which property aligns flex items on the main axis?",
          options: [
            "align-items",
            "align-content",
            "justify-content",
            "flex-align",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you create 3 equal columns in CSS Grid?",
          options: [
            "columns: 3",
            "grid-template-columns: 1fr 1fr 1fr",
            "flex: 3",
            "grid-columns: 3",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'flex: 1' mean on a flex child?",
          options: [
            "Flex child is 1px",
            "Takes 1 unit of available space",
            "Sets flex-basis to 1",
            "Fixes width to 100%",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which property adds space between grid/flex items?",
          options: ["spacing", "margin-between", "gap", "padding"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-css-p2s1",
          title: "Flexbox",
          content:
            "Flexbox is ideal for one-dimensional layouts (rows or columns). Set display: flex on a container. justify-content controls spacing on the main axis (row by default): flex-start, center, space-between, space-around. align-items aligns items on the cross axis: stretch, center, flex-start.",
          codeExample:
            ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n\n.item {\n  flex: 1; /* grow equally */\n}",
          video: { youtubeId: "phWxA89Dy94", title: "CSS Flexbox Tutorial" },
          flowchart: "if-else",
        },
        {
          id: "fe-css-p2s2",
          title: "CSS Grid",
          content:
            "CSS Grid handles two-dimensional layouts. Define columns with grid-template-columns. Use fr units for flexible fractions: 1fr 2fr 1fr creates 3 columns where the middle is twice as wide. gap adds space between cells. Use grid-column and grid-row to span cells.",
          codeExample:
            ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.hero {\n  grid-column: 1 / -1; /* spans full width */\n}",
          video: { youtubeId: "phWxA89Dy94", title: "CSS Grid Tutorial" },
        },
        {
          id: "fe-css-p2s3",
          title: "Positioning",
          content:
            "CSS position: static (default, normal flow), relative (offset from normal position), absolute (removed from flow, positioned to nearest relative ancestor), fixed (relative to viewport), sticky (sticks when scrolling past threshold). Use z-index to control stacking order for positioned elements.",
          codeExample:
            ".header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.tooltip {\n  position: absolute;\n  top: -30px;\n  left: 0;\n}",
          video: { youtubeId: "phWxA89Dy94", title: "CSS Positioning" },
          flowchart: "storage-hierarchy",
        },
      ],
    },
    {
      id: "fe-css-p3",
      title: "Part 3: Advanced CSS",
      description:
        "Responsive design, animations, transitions, and CSS variables.",
      videoUrl: "https://www.youtube.com/watch?v=srvUrASNj0s",
      notes:
        "ADVANCED CSS\n\nResponsive: media queries — @media (max-width: 768px) { ... }. Mobile-first: write base styles for small screens, use min-width to enhance for larger screens. Transitions: transition: property duration easing. Animations: @keyframes + animation: name duration iteration. CSS custom properties: --var and var(--var).",
      docs: [
        {
          label: "MDN: Media Queries",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",
        },
        {
          label: "MDN: CSS Animations",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations",
        },
      ],
      partQuiz: [
        {
          question: "What is mobile-first CSS design?",
          options: [
            "Start with desktop, shrink for mobile",
            "Write base styles for mobile, enhance for larger screens",
            "Use only mobile fonts",
            "Disable desktop styling",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which CSS property creates smooth transitions?",
          options: ["animate", "transition", "transform", "motion"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What syntax declares a CSS custom property?",
          options: [
            "$var: value",
            "var: --value",
            "--var: value",
            "const --var: value",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which at-rule creates CSS animations?",
          options: ["@animation", "@keyframes", "@motion", "@transition"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What media query targets screens up to 768px wide?",
          options: [
            "@media min-width: 768px",
            "@media (max-width: 768px)",
            "@media screen 768",
            "@media width <= 768",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-css-p3s1",
          title: "Responsive Design & Media Queries",
          content:
            "Mobile-first: write styles for small screens, then use min-width media queries to enhance for larger screens. Common breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl). Use relative units: rem for font-size, % and vw for widths.",
          codeExample:
            ".card {\n  width: 100%; /* mobile */\n}\n\n@media (min-width: 768px) {\n  .card {\n    width: 50%; /* tablet */\n  }\n}\n\n@media (min-width: 1024px) {\n  .card {\n    width: 33.333%; /* desktop */\n  }\n}",
          video: { youtubeId: "srvUrASNj0s", title: "Responsive CSS" },
          flowchart: "if-else",
        },
        {
          id: "fe-css-p3s2",
          title: "Transitions & Animations",
          content:
            "Transitions animate between two states on a trigger (hover, focus). Specify which property, duration, and easing. Animations run automatically using @keyframes. For performance, only animate transform and opacity — these run on the GPU and don't trigger layout recalculation.",
          codeExample:
            ".btn {\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n.btn:hover { transform: scale(1.05); }\n\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n.card { animation: fadeIn 0.3s ease; }",
          video: {
            youtubeId: "srvUrASNj0s",
            title: "CSS Transitions & Animations",
          },
        },
        {
          id: "fe-css-p3s3",
          title: "CSS Custom Properties",
          content:
            "CSS custom properties (variables) defined on :root are globally accessible. Change one variable to retheme the entire app. They work in calc(), inherit, and can be updated by JavaScript. Use them for colors, spacing, and font sizes.",
          codeExample:
            ":root {\n  --primary: #007bff;\n  --radius: 8px;\n  --spacing: 16px;\n}\n\n.btn {\n  background: var(--primary);\n  border-radius: var(--radius);\n  padding: var(--spacing);\n}",
          video: { youtubeId: "srvUrASNj0s", title: "CSS Custom Properties" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which display value enables flexbox?",
      options: ["block", "inline", "flex", "grid"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does z-index control?",
      options: ["Transparency", "Zoom level", "Stacking order", "Border size"],
      correct: 2,
      xp: 10,
    },
    {
      question: "How are fr units used in CSS Grid?",
      options: [
        "Fixed pixels",
        "Font ratios",
        "Flexible fractions of available space",
        "Frame rates",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which property makes text not wrap to next line?",
      options: [
        "overflow: hidden",
        "white-space: nowrap",
        "display: inline",
        "text-overflow: clip",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'position: sticky' do?",
      options: [
        "Removes from flow",
        "Sticks to viewport always",
        "Sticks after scrolling past threshold",
        "Centers element",
      ],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fe-css-t1",
      title: "Responsive Card Grid",
      description:
        "Create a responsive 3-column card grid. Each card has title, description, and a button. Stack to 1 column on mobile.",
      starterCode:
        '<!-- Write HTML + CSS -->\n<div class="grid">\n  <!-- 3 cards here -->\n</div>',
      hints: [
        "Use display: grid with grid-template-columns",
        "Use @media for mobile single-column",
        "Style cards with padding, border-radius, shadow",
      ],
    },
    {
      id: "fe-css-t2",
      title: "Flexbox Nav",
      description:
        "Build a navigation bar with logo on the left and 4 links on the right using Flexbox.",
      starterCode:
        '<nav>\n  <div class="logo">Brand</div>\n  <!-- nav links -->\n</nav>',
      hints: [
        "display: flex with justify-content: space-between",
        "Put links in a <ul> with flex on it",
        "Add hover styles with transition",
      ],
    },
    {
      id: "fe-css-t3",
      title: "CSS Animation",
      description:
        "Create a button that scales up on hover using transition and has an entrance fade-in animation.",
      starterCode: '<button class="btn">Click Me</button>',
      hints: [
        "Use transition: transform 0.2s",
        "Use @keyframes fadeIn with opacity 0→1",
        "Apply animation: fadeIn 0.4s ease on .btn",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: JavaScript Core ────────────────────────────────────────────────

const fe_module3: CModule = {
  id: "fe-js",
  title: "Module 3: JavaScript Core",
  outcome:
    "Write modern JavaScript for DOM manipulation, events, and async operations.",
  isLocked: true,
  parts: [
    {
      id: "fe-js-p1",
      title: "Part 1: JS Fundamentals",
      description: "Variables, data types, functions, scope, and closures.",
      videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      notes: `JS FUNDAMENTALS\n\nVariables: const (immutable binding), let (block-scoped), avoid var. Types: string, number, boolean, null, undefined, object, symbol. Functions: declaration, expression, arrow functions. Scope: global, function, block. Closures: inner function retains access to outer function's variables even after outer returns.`,
      docs: [
        {
          label: "MDN: JavaScript Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        },
        { label: "javascript.info", url: "https://javascript.info/" },
      ],
      partQuiz: [
        {
          question: "Which keyword creates a block-scoped constant?",
          options: ["var", "let", "const", "def"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does typeof null return in JavaScript?",
          options: ["null", "undefined", "object", "string"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is a closure?",
          options: [
            "A loop that closes",
            "A function accessing outer scope variables",
            "A class constructor",
            "An error handler",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Arrow functions don't have their own:",
          options: ["parameters", "return statement", "this binding", "scope"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the output of: console.log(typeof undefined)?",
          options: ["object", "null", "undefined", "void"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-js-p1s1",
          title: "Variables & Data Types",
          content:
            "Use const by default (prevents reassignment), let when you need to reassign, never var (function-scoped, hoisted). JS types: string ('hello'), number (42, 3.14), boolean (true/false), null (intentional absence), undefined (unassigned), object, array, function. Use typeof to inspect types.",
          codeExample:
            "const name = 'Alice';    // string\nlet score = 95;          // number\nconst active = true;     // boolean\nconst data = null;       // intentional null\nlet result;              // undefined\n\nconsole.log(typeof name); // 'string'",
          video: { youtubeId: "W6NZfCO5SIk", title: "JS Variables & Types" },
        },
        {
          id: "fe-js-p1s2",
          title: "Functions & Arrow Functions",
          content:
            "Function declaration: function add(a, b) { return a + b; }. Function expression: const add = function(a, b) { return a + b; }. Arrow function: const add = (a, b) => a + b. Arrow functions don't have their own this — important for methods. Default parameters: function greet(name = 'World').",
          codeExample:
            "// Arrow function\nconst square = n => n * n;\n\n// With multiple params\nconst add = (a, b) => a + b;\n\n// Default params\nconst greet = (name = 'World') => `Hello, ${name}!`;\n\nconsole.log(greet()); // Hello, World!",
          video: { youtubeId: "W6NZfCO5SIk", title: "JS Functions" },
        },
        {
          id: "fe-js-p1s3",
          title: "Closures & Scope",
          content:
            "Scope defines where variables are accessible. Block scope: variables declared with let/const inside {} only exist there. Closure: when a function is defined inside another function, it retains access to the outer function's variables even after the outer function has returned. Useful for factory functions and data privacy.",
          codeExample:
            "function makeCounter() {\n  let count = 0; // private variable\n  return {\n    increment: () => ++count,\n    get: () => count,\n  };\n}\n\nconst c = makeCounter();\nc.increment(); // 1\nc.increment(); // 2\nconsole.log(c.get()); // 2",
          video: { youtubeId: "W6NZfCO5SIk", title: "JS Closures" },
          flowchart: "storage-classes-flow",
        },
      ],
    },
    {
      id: "fe-js-p2",
      title: "Part 2: DOM & Events",
      description:
        "DOM querying, manipulation, event listeners, and event propagation.",
      videoUrl: "https://www.youtube.com/watch?v=5fb2aPlgoys",
      notes: `DOM & EVENTS\n\nDOM: document.querySelector('#id'), .querySelectorAll('.class'). Modify: element.textContent, .innerHTML, .style.color, .classList.add/remove/toggle. Create: document.createElement('div'), parent.appendChild(el). Events: element.addEventListener('click', fn). Event object: e.target, e.preventDefault(), e.stopPropagation(). Delegation: add one listener on parent.`,
      docs: [
        {
          label: "MDN: DOM API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        },
        {
          label: "MDN: Events",
          url: "https://developer.mozilla.org/en-US/docs/Web/Events",
        },
      ],
      partQuiz: [
        {
          question: "Which method selects the first matching element?",
          options: [
            "getElementById",
            "querySelector",
            "getElement",
            "findElement",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does e.preventDefault() do?",
          options: [
            "Stops event bubbling",
            "Prevents default browser action",
            "Removes event listener",
            "Cancels animation",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you add a class to an element?",
          options: [
            "el.class.add()",
            "el.classList.add()",
            "el.addClassName()",
            "el.style.class =",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is event delegation?",
          options: [
            "Deleting events",
            "Adding listener on parent for child events",
            "Passing events to another function",
            "Cloning events",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which property gives the element that triggered the event?",
          options: ["e.source", "e.origin", "e.target", "e.element"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-js-p2s1",
          title: "DOM Selection & Manipulation",
          content:
            "Query elements: querySelector (first match), querySelectorAll (all matches as NodeList). Modify content: textContent (safe, no HTML), innerHTML (parses HTML). Change styles: element.style.color = 'red' or classList.add/remove/toggle. Create and insert elements with createElement, appendChild, and prepend.",
          codeExample:
            "const btn = document.querySelector('#btn');\nconst list = document.querySelectorAll('.item');\n\nbtn.textContent = 'Click me';\nbtn.classList.add('active');\n\nconst el = document.createElement('li');\nel.textContent = 'New item';\ndocument.querySelector('ul').appendChild(el);",
          video: { youtubeId: "5fb2aPlgoys", title: "DOM Manipulation" },
        },
        {
          id: "fe-js-p2s2",
          title: "Event Listeners",
          content:
            "Use addEventListener to attach event handlers. The event object contains target (element that triggered), currentTarget (element with listener), type (event name). Common events: click, input, change, submit, keydown, mouseover, DOMContentLoaded. Remove listeners with removeEventListener (requires same function reference).",
          codeExample:
            "document.querySelector('#btn').addEventListener('click', (e) => {\n  console.log('clicked:', e.target);\n  e.preventDefault(); // stop form submit / link nav\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM ready');\n});",
          video: { youtubeId: "5fb2aPlgoys", title: "JavaScript Events" },
          flowchart: "if-else",
        },
        {
          id: "fe-js-p2s3",
          title: "Event Delegation & Propagation",
          content:
            "Events bubble up from child to parent. Use stopPropagation() to stop bubbling. Event delegation: instead of adding listeners to every child, add ONE listener to the parent and check e.target. This is efficient and works for dynamically added elements.",
          codeExample:
            "// Delegation: one listener handles all list items\ndocument.querySelector('#list').addEventListener('click', (e) => {\n  if (e.target.matches('li')) {\n    e.target.classList.toggle('done');\n  }\n});",
          video: { youtubeId: "5fb2aPlgoys", title: "Event Delegation" },
        },
      ],
    },
    {
      id: "fe-js-p3",
      title: "Part 3: Modern JS (ES6+)",
      description:
        "Destructuring, spread, promises, async/await, modules, and fetch API.",
      videoUrl: "https://www.youtube.com/watch?v=WZQc7RUAg18",
      notes: `MODERN JS\n\nDestructuring: const { name, age } = user; const [a, b] = arr. Spread: [...arr, 4], {...obj, key: val}. Rest: function fn(...args). Template literals: \`Hello \${name}\`. Optional chaining: user?.address?.city. Nullish coalescing: value ?? 'default'. Modules: import/export. fetch returns a Promise.`,
      docs: [
        {
          label: "MDN: ES6 Features",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        },
        {
          label: "MDN: Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        },
      ],
      partQuiz: [
        {
          question: "What does the spread operator (...) do?",
          options: [
            "Copies a function",
            "Spreads array/object elements",
            "Declares variables",
            "Imports a module",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method returns a Promise in JS?",
          options: ["setTimeout", "fetch", "querySelector", "console.log"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does async/await do?",
          options: [
            "Creates synchronous code",
            "Makes async code look synchronous",
            "Blocks the main thread",
            "Imports async modules",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does optional chaining (?.) do?",
          options: [
            "Creates optional parameters",
            "Safely accesses nested properties",
            "Chains promises",
            "Declares optional variables",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which ES6 feature extracts values from objects/arrays?",
          options: [
            "Spread",
            "Destructuring",
            "Template literals",
            "Rest parameters",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-js-p3s1",
          title: "Destructuring & Spread",
          content:
            "Destructuring extracts values: const { name, age } = user, or const [first, ...rest] = arr. Spread copies arrays/objects: const newArr = [...arr, 5]; const newObj = {...obj, key: 'val'}. These patterns are everywhere in modern React and API response handling.",
          codeExample:
            "const user = { name: 'Alice', age: 25, city: 'NY' };\nconst { name, age } = user;\n\nconst nums = [1, 2, 3];\nconst [first, ...rest] = nums; // first=1, rest=[2,3]\n\nconst updated = { ...user, age: 26 }; // new obj, updated age",
          video: {
            youtubeId: "WZQc7RUAg18",
            title: "ES6 Destructuring & Spread",
          },
        },
        {
          id: "fe-js-p3s2",
          title: "Promises & async/await",
          content:
            "A Promise represents a future value. fetch() returns a Promise. Chain with .then()/.catch() or use async/await for cleaner code. async functions always return a Promise. await pauses execution until the Promise resolves. Always use try/catch with await for error handling.",
          codeExample:
            "// async/await style\nasync function getUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) throw new Error('Not found');\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}",
          video: { youtubeId: "WZQc7RUAg18", title: "Promises & async/await" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "fe-js-p3s3",
          title: "ES6 Modules",
          content:
            "Modules split code into files. Named exports: export const fn = () => {}. Default export: export default class App {}. Import: import { fn } from './utils'; import App from './App'. Modules are always in strict mode. Use import() for dynamic (lazy) loading. Vite and webpack handle module bundling for browsers.",
          codeExample:
            "// utils.js\nexport const add = (a, b) => a + b;\nexport const PI = 3.14159;\n\n// main.js\nimport { add, PI } from './utils.js';\nconsole.log(add(2, 3)); // 5",
          video: { youtubeId: "WZQc7RUAg18", title: "ES6 Modules" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the difference between == and ===?",
      options: [
        "No difference",
        "=== checks type too",
        "== is stricter",
        "=== is for objects only",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does Array.map() return?",
      options: [
        "The same array modified",
        "A new array with transformed items",
        "A boolean",
        "Undefined",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does JSON.parse() do?",
      options: [
        "Converts JS object to string",
        "Converts JSON string to JS object",
        "Validates JSON",
        "Fetches JSON",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which method removes the last array element?",
      options: ["shift()", "pop()", "splice(-1)", "remove()"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is NaN in JavaScript?",
      options: [
        "Null and nothing",
        "Not a Number type",
        "A syntax error",
        "An empty object",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fe-js-t1",
      title: "Todo List DOM App",
      description:
        "Build a todo list: input + button to add items, click item to mark done (strikethrough), delete button per item. No frameworks.",
      starterCode:
        '<!-- HTML -->\n<input id="inp" placeholder="Add todo..." />\n<button id="add">Add</button>\n<ul id="list"></ul>\n\n<script>\n  // Add click handler to #add\n  // Create li with text + delete btn on click\n</script>',
      hints: [
        "Use createElement and appendChild",
        "Add click listener on parent ul for delegation",
        "Toggle 'done' class for strikethrough",
      ],
    },
    {
      id: "fe-js-t2",
      title: "Fetch & Display Data",
      description:
        "Fetch users from https://jsonplaceholder.typicode.com/users and display their name and email in a list.",
      starterCode:
        "async function loadUsers() {\n  // fetch from the URL\n  // display each user's name + email\n}\nloadUsers();",
      hints: [
        "Use await fetch(url) then await res.json()",
        "Loop over the array with forEach or map",
        "Create elements and append to the DOM",
      ],
    },
    {
      id: "fe-js-t3",
      title: "Counter with Closure",
      description:
        "Create a counter using closures that exposes increment, decrement, and reset. Display current count in the DOM.",
      starterCode:
        "function makeCounter(initial = 0) {\n  // Return object with increment, decrement, reset\n}\n\nconst counter = makeCounter();\n// Wire up buttons and display",
      hints: [
        "Keep count in the outer function's scope",
        "Return functions that modify count",
        "Update DOM textContent on each action",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: React & Frameworks ────────────────────────────────────────────

const fe_module4: CModule = {
  id: "fe-react",
  title: "Module 4: React & Frameworks",
  outcome:
    "Build dynamic single-page apps using React with hooks and state management.",
  isLocked: true,
  parts: [
    {
      id: "fe-react-p1",
      title: "Part 1: React Basics",
      description: "Components, JSX, props, and rendering lists.",
      videoUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk",
      notes: `REACT BASICS\n\nReact builds UIs as a tree of components. JSX is HTML-like syntax in JS: <div className="card">. Functional components: const App = () => <h1>Hello</h1>. Props pass data down: <Card title="Hi" />. Lists: arr.map(item => <li key={item.id}>{item.name}</li>). Always add key prop to list items.`,
      docs: [
        {
          label: "React Docs: Components",
          url: "https://react.dev/learn/your-first-component",
        },
        {
          label: "React Docs: JSX",
          url: "https://react.dev/learn/writing-markup-with-jsx",
        },
      ],
      partQuiz: [
        {
          question: "What is JSX?",
          options: [
            "A JS compiler",
            "HTML-like syntax in JS",
            "A React library",
            "A CSS preprocessor",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Why is the key prop required in lists?",
          options: [
            "Styling",
            "Performance: helps React identify changes",
            "Required for JSX",
            "Makes items clickable",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you pass data to a child component?",
          options: ["Via state", "Via props", "Via context", "Via events"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What attribute replaces 'class' in JSX?",
          options: ["cls", "class", "className", "styleClass"],
          correct: 2,
          xp: 10,
        },
        {
          question: "A React component name must start with:",
          options: [
            "lowercase",
            "underscore",
            "uppercase letter",
            "dollar sign",
          ],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-react-p1s1",
          title: "Components & JSX",
          content:
            "A React component is a function that returns JSX. JSX looks like HTML but: use className not class, style is an object, all tags must close. Expressions go in curly braces: {name}. Components compose by nesting: <App> contains <Header> contains <Nav>. Keep components small and focused.",
          codeExample:
            'function Greeting({ name }: { name: string }) {\n  return (\n    <div className="greeting">\n      <h1>Hello, {name}!</h1>\n    </div>\n  );\n}\n\n// Usage\n<Greeting name="Alice" />',
          video: { youtubeId: "SqcY0GlETPk", title: "React Components & JSX" },
        },
        {
          id: "fe-react-p1s2",
          title: "Props",
          content:
            "Props (properties) pass data from parent to child components. Props are read-only — never mutate them. Destructure props in the parameter: function Card({ title, description }). Default props with JavaScript defaults: function Card({ title = 'Default' }). Use TypeScript interfaces to type props.",
          codeExample:
            "interface CardProps {\n  title: string;\n  description?: string;\n}\n\nfunction Card({ title, description = 'No description' }: CardProps) {\n  return (\n    <div>\n      <h2>{title}</h2>\n      <p>{description}</p>\n    </div>\n  );\n}",
          video: { youtubeId: "SqcY0GlETPk", title: "React Props" },
        },
        {
          id: "fe-react-p1s3",
          title: "Rendering Lists",
          content:
            "Use .map() to render lists. Always provide a unique key prop — React uses it to efficiently update only changed items. Use item IDs as keys, not array indices (indices cause bugs with reordering). Filter before mapping to show subsets.",
          codeExample:
            "const users = [{id:1,name:'Alice'},{id:2,name:'Bob'}];\n\nfunction UserList() {\n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}",
          video: { youtubeId: "SqcY0GlETPk", title: "React Lists & Keys" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "fe-react-p2",
      title: "Part 2: React Advanced",
      description:
        "useState, useEffect, useRef, custom hooks, and component patterns.",
      videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
      notes: `REACT HOOKS\n\nuseState: const [value, setValue] = useState(initial). setState with callback when new state depends on old: setValue(prev => prev + 1). useEffect: runs after render, cleanup with return function, dependency array controls when it re-runs. useRef: mutable reference that doesn't trigger re-render. Custom hooks: functions starting with 'use'.`,
      docs: [
        {
          label: "React Docs: useState",
          url: "https://react.dev/reference/react/useState",
        },
        {
          label: "React Docs: useEffect",
          url: "https://react.dev/reference/react/useEffect",
        },
      ],
      partQuiz: [
        {
          question: "What triggers a component to re-render?",
          options: [
            "Any function call",
            "State or prop change",
            "useRef update",
            "CSS change",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When does useEffect with [] run?",
          options: [
            "On every render",
            "Once after mount",
            "Before each render",
            "Only on unmount",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does the callback form of setState do?",
          options: [
            "Runs async",
            "Ensures stale state is avoided",
            "Batches updates",
            "Skips re-render",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a custom hook?",
          options: [
            "A DOM hook",
            "A function starting with 'use' that uses React hooks",
            "A lifecycle method",
            "A component wrapper",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does useRef store?",
          options: [
            "DOM element or mutable value without triggering re-render",
            "State",
            "Props",
            "Context",
          ],
          correct: 0,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-react-p2s1",
          title: "useState",
          content:
            "useState declares state in functional components. Returns [currentValue, setter]. Calling the setter triggers a re-render. Never mutate state directly — always use the setter. For state based on previous state, use the callback form to avoid stale closures.",
          codeExample:
            "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(prev => prev + 1)}>+</button>\n    </div>\n  );\n}",
          video: { youtubeId: "4UZrsTqkcW4", title: "useState Hook" },
        },
        {
          id: "fe-react-p2s2",
          title: "useEffect",
          content:
            "useEffect runs side effects after rendering. Empty dependency array []: runs once on mount. Array with values [count]: runs when those values change. No array: runs on every render. Return a cleanup function to cancel subscriptions, timers, or event listeners on unmount.",
          codeExample:
            "import { useEffect, useState } from 'react';\n\nfunction Timer() {\n  const [s, setS] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => setS(p => p+1), 1000);\n    return () => clearInterval(id); // cleanup\n  }, []); // run once on mount\n  return <p>{s}s</p>;\n}",
          video: { youtubeId: "4UZrsTqkcW4", title: "useEffect Hook" },
          flowchart: "variable-lifecycle",
        },
        {
          id: "fe-react-p2s3",
          title: "Custom Hooks",
          content:
            "Custom hooks extract reusable stateful logic. Name starts with 'use'. They can call other hooks. Examples: useLocalStorage, useFetch, useDebounce. This pattern avoids code duplication and makes components cleaner.",
          codeExample:
            "function useLocalStorage<T>(key: string, init: T) {\n  const [val, setVal] = useState<T>(() => {\n    const s = localStorage.getItem(key);\n    return s ? JSON.parse(s) : init;\n  });\n  const save = (v: T) => {\n    setVal(v);\n    localStorage.setItem(key, JSON.stringify(v));\n  };\n  return [val, save] as const;\n}",
          video: { youtubeId: "4UZrsTqkcW4", title: "Custom React Hooks" },
        },
      ],
    },
    {
      id: "fe-react-p3",
      title: "Part 3: State Management",
      description:
        "Context API, useReducer, React Query, and global state patterns.",
      videoUrl: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
      notes:
        "STATE MANAGEMENT\n\nContext API: createContext, Provider, useContext — avoids prop drilling for global state. useReducer: like Redux but built-in — dispatch actions, pure reducer function returns new state. React Query: server state (useQuery, useMutation), automatic caching and revalidation. Rule of thumb: local state → useState, shared UI → Context, server data → React Query.",
      docs: [
        {
          label: "React Docs: Context",
          url: "https://react.dev/learn/passing-data-deeply-with-context",
        },
        {
          label: "TanStack Query Docs",
          url: "https://tanstack.com/query/latest",
        },
      ],
      partQuiz: [
        {
          question: "What problem does Context API solve?",
          options: [
            "Async state",
            "Prop drilling",
            "API calls",
            "CSS theming only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does useReducer take as arguments?",
          options: [
            "state and action",
            "reducer and initial state",
            "dispatch and type",
            "action and payload",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does React Query cache?",
          options: [
            "Component renders",
            "Server state / API responses",
            "User events",
            "CSS variables",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When should you use Context vs useState?",
          options: [
            "Always use Context",
            "Context for shared state, useState for local",
            "useState is always better",
            "They are the same",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does the dispatch function do in useReducer?",
          options: [
            "Directly mutates state",
            "Sends an action to the reducer",
            "Fetches data",
            "Re-renders all components",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-react-p3s1",
          title: "Context API",
          content:
            "Context avoids prop drilling by making values accessible to any descendant without passing through intermediary components. Create a context, wrap with Provider, consume with useContext. Best for: theme, auth, language, user preferences. Don't use for frequently changing state — it re-renders all consumers.",
          codeExample:
            "const ThemeCtx = createContext('light');\n\nfunction App() {\n  return (\n    <ThemeCtx.Provider value=\"dark\">\n      <Page />\n    </ThemeCtx.Provider>\n  );\n}\n\nfunction Page() {\n  const theme = useContext(ThemeCtx);\n  return <div className={theme}>...</div>;\n}",
          video: { youtubeId: "5LrDIWkK_Bc", title: "React Context API" },
        },
        {
          id: "fe-react-p3s2",
          title: "useReducer",
          content:
            "useReducer is for complex state with multiple sub-values or when next state depends on previous. Takes a reducer (pure function: (state, action) => newState) and initial state. dispatch(action) sends actions to the reducer. Pair with Context for global state management without external libraries.",
          codeExample:
            "type Action = { type: 'INC' } | { type: 'DEC' } | { type: 'RESET' };\n\nfunction reducer(state: number, action: Action): number {\n  switch (action.type) {\n    case 'INC': return state + 1;\n    case 'DEC': return state - 1;\n    case 'RESET': return 0;\n  }\n}\n\nconst [count, dispatch] = useReducer(reducer, 0);",
          video: { youtubeId: "5LrDIWkK_Bc", title: "useReducer Hook" },
          flowchart: "switch-flow",
        },
        {
          id: "fe-react-p3s3",
          title: "React Query (TanStack Query)",
          content:
            "React Query manages server state: fetching, caching, and synchronizing. useQuery fetches data with automatic caching, staleTime, and refetch on focus. useMutation handles create/update/delete with optimistic updates. QueryClient wraps the app. This is the standard for ICP canister data fetching.",
          codeExample:
            "const { data, isLoading, error } = useQuery({\n  queryKey: ['users'],\n  queryFn: () => actor.getUsers(),\n  enabled: !!actor,\n});\n\nconst mutation = useMutation({\n  mutationFn: (name: string) => actor.createUser(name),\n  onSuccess: () => queryClient.invalidateQueries(['users']),\n});",
          video: { youtubeId: "5LrDIWkK_Bc", title: "React Query Tutorial" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does React's virtual DOM do?",
      options: [
        "Renders CSS",
        "Diffs changes before updating real DOM",
        "Stores component state",
        "Handles routing",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the purpose of React.StrictMode?",
      options: [
        "Production optimization",
        "Catches side effects in development",
        "Disables warnings",
        "Enables TypeScript",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What hook accesses context in a functional component?",
      options: ["useContext", "useGlobal", "readContext", "getContext"],
      correct: 0,
      xp: 10,
    },
    {
      question: "When does React re-render a component?",
      options: [
        "Every second",
        "On every mouse move",
        "When state or props change",
        "On page scroll",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is conditional rendering in React?",
      options: [
        "Showing/hiding elements based on state",
        "Async rendering",
        "Rendering on condition of screen size",
        "Server-side rendering",
      ],
      correct: 0,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fe-react-t1",
      title: "React Todo App",
      description:
        "Build a todo app with: add todos, mark complete, delete, filter (all/active/done). Use useState only.",
      starterCode:
        "function TodoApp() {\n  // state: todos array, input, filter\n  // render: input+button, filter buttons, todo list\n  return <div />\n}",
      hints: [
        "useState for todos: [{id, text, done}]",
        "Use filter to show subset of todos",
        "Toggle done with map + spread",
      ],
    },
    {
      id: "fe-react-t2",
      title: "Custom useFetch Hook",
      description:
        "Create a useFetch(url) hook that returns { data, loading, error }. Use it in a component to display GitHub user data.",
      starterCode:
        "function useFetch(url: string) {\n  // useState for data, loading, error\n  // useEffect to fetch\n  // return { data, loading, error }\n}",
      hints: [
        "useState for data/loading/error",
        "useEffect with [url] dependency",
        "Use async IIFE inside useEffect",
      ],
    },
    {
      id: "fe-react-t3",
      title: "Theme Context",
      description:
        "Create a ThemeContext with light/dark toggle. Wrap App in Provider. A button in any child component should toggle the theme and apply it as a class on the body.",
      starterCode:
        "const ThemeContext = createContext({ theme: 'light', toggle: () => {} });\n// Create Provider component\n// Create useTheme hook",
      hints: [
        "useState in Provider for current theme",
        "Pass value={{ theme, toggle }} to Provider",
        "useContext in child, apply document.body.className = theme",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: Advanced Frontend ──────────────────────────────────────────────

const fe_module5: CModule = {
  id: "fe-advanced",
  title: "Module 5: Advanced Frontend",
  outcome:
    "Build, test, optimize, and deploy production-ready frontend applications.",
  isLocked: true,
  parts: [
    {
      id: "fe-adv-p1",
      title: "Part 1: Build Tools",
      description: "Vite, npm/pnpm, TypeScript, linting, and project setup.",
      videoUrl: "https://www.youtube.com/watch?v=89NJdbYTgJ8",
      notes:
        "BUILD TOOLS\n\nVite: lightning-fast dev server using native ES modules. Build: pnpm build bundles and minifies. TypeScript: static typing for JS — catches errors at compile time. ESLint: finds problems. Prettier: formats code. tsconfig.json controls TS compilation. package.json scripts: dev, build, lint, test.",
      docs: [
        { label: "Vite Docs", url: "https://vitejs.dev/guide/" },
        {
          label: "TypeScript Docs",
          url: "https://www.typescriptlang.org/docs/",
        },
      ],
      partQuiz: [
        {
          question: "What is Vite primarily used for?",
          options: [
            "CSS processing",
            "Fast frontend dev server and bundler",
            "Testing",
            "Database management",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which TypeScript type allows any value?",
          options: ["unknown", "never", "any", "void"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does ESLint do?",
          options: [
            "Bundles JS",
            "Formats code",
            "Finds code problems and style violations",
            "Compiles TypeScript",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What file configures TypeScript?",
          options: [
            "eslint.json",
            "vite.config.ts",
            "tsconfig.json",
            "babel.config.js",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What command creates a new Vite project?",
          options: [
            "vite new",
            "npm create vite@latest",
            "npx create-vite",
            "vite init",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-adv-p1s1",
          title: "Vite & npm/pnpm",
          content:
            "Vite is the modern standard for frontend tooling: instant dev server (no bundling), fast HMR, and optimized production builds. Use pnpm for faster, disk-efficient package management. Key commands: pnpm install, pnpm dev, pnpm build, pnpm preview.",
          codeExample:
            "# Create a React + TypeScript project\nnpm create vite@latest my-app -- --template react-ts\ncd my-app\npnpm install\npnpm dev",
          video: { youtubeId: "89NJdbYTgJ8", title: "Vite Setup Guide" },
        },
        {
          id: "fe-adv-p1s2",
          title: "TypeScript Essentials",
          content:
            "TypeScript adds static types to JavaScript. Interfaces define object shapes. Union types: string | number. Generic types: Array<T>. Utility types: Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>. Never use any — use unknown and type guard instead. TypeScript errors are caught at build time, not runtime.",
          codeExample:
            "interface User {\n  id: number;\n  name: string;\n  email?: string; // optional\n}\n\ntype Status = 'active' | 'inactive' | 'pending';\n\nfunction getUser(id: number): Promise<User> {\n  return fetch(`/api/users/${id}`).then(r => r.json());\n}",
          video: {
            youtubeId: "89NJdbYTgJ8",
            title: "TypeScript for Beginners",
          },
          flowchart: "data-types-hierarchy",
        },
        {
          id: "fe-adv-p1s3",
          title: "ESLint & Prettier",
          content:
            "ESLint catches bugs and enforces coding standards. Prettier auto-formats code consistently. Configure via .eslintrc and .prettierrc. Run: pnpm lint to check, pnpm fix to auto-fix. Pre-commit hooks (Husky + lint-staged) run these automatically before every commit.",
          codeExample:
            "// .eslintrc.cjs\nmodule.exports = {\n  rules: {\n    'no-unused-vars': 'error',\n    'prefer-const': 'warn',\n  }\n};\n\n// .prettierrc\n{\n  \"semi\": true,\n  \"singleQuote\": true,\n  \"printWidth\": 80\n}",
          video: { youtubeId: "89NJdbYTgJ8", title: "ESLint & Prettier Setup" },
        },
      ],
    },
    {
      id: "fe-adv-p2",
      title: "Part 2: Testing",
      description:
        "Unit testing with Vitest, component testing, and accessibility testing.",
      videoUrl: "https://www.youtube.com/watch?v=7r4xVDI2vho",
      notes:
        "TESTING\n\nVitest: fast unit testing for Vite projects. React Testing Library: tests components from user perspective. Key functions: render, screen.getByRole/Text/Label, userEvent.click, fireEvent. Test structure: describe() groups, it()/test() individual tests, expect() assertions. Coverage: aim for 80%+ on critical logic. Accessibility testing: jest-axe.",
      docs: [
        { label: "Vitest Docs", url: "https://vitest.dev/" },
        {
          label: "Testing Library Docs",
          url: "https://testing-library.com/docs/react-testing-library/intro/",
        },
      ],
      partQuiz: [
        {
          question:
            "What testing philosophy does React Testing Library promote?",
          options: [
            "Test implementation details",
            "Test from the user's perspective",
            "Test only snapshots",
            "Test only hooks",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which function asserts a value in Vitest?",
          options: ["assert()", "check()", "expect()", "verify()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does screen.getByRole() query by?",
          options: ["CSS class", "ARIA role", "Test ID", "Tag name"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a unit test?",
          options: [
            "Tests the whole app",
            "Tests one function/component in isolation",
            "Tests the database",
            "Tests the network",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does test coverage measure?",
          options: [
            "Speed of tests",
            "Percentage of code executed by tests",
            "Number of test files",
            "Test quality",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-adv-p2s1",
          title: "Unit Testing with Vitest",
          content:
            "Vitest is the natural testing framework for Vite projects — same config, fast execution. Write tests in .test.ts files. describe() groups related tests. it() or test() defines a single test case. expect() makes assertions. Run: pnpm test. Run with coverage: pnpm test --coverage.",
          codeExample:
            "import { describe, it, expect } from 'vitest';\n\nfunction add(a: number, b: number) { return a + b; }\n\ndescribe('add', () => {\n  it('adds two numbers', () => {\n    expect(add(2, 3)).toBe(5);\n  });\n  it('handles negatives', () => {\n    expect(add(-1, 1)).toBe(0);\n  });\n});",
          video: { youtubeId: "7r4xVDI2vho", title: "Vitest Tutorial" },
        },
        {
          id: "fe-adv-p2s2",
          title: "React Testing Library",
          content:
            "Test React components from the user's perspective. render() mounts the component. screen queries find elements: getByRole (button, heading), getByText, getByLabelText. userEvent simulates real user interactions. Avoid testing implementation details — test what the user sees and does.",
          codeExample:
            "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ntest('counter increments', async () => {\n  render(<Counter />);\n  expect(screen.getByText('0')).toBeInTheDocument();\n  await userEvent.click(screen.getByRole('button', { name: '+' }));\n  expect(screen.getByText('1')).toBeInTheDocument();\n});",
          video: { youtubeId: "7r4xVDI2vho", title: "React Testing Library" },
          flowchart: "if-else",
        },
        {
          id: "fe-adv-p2s3",
          title: "Mocking & Async Tests",
          content:
            "Mock external dependencies to isolate the unit under test. vi.mock() mocks modules. vi.fn() creates mock functions. For async tests, use async/await and waitFor() to wait for DOM updates. For API calls, mock fetch or use MSW (Mock Service Worker) to intercept HTTP requests.",
          codeExample:
            "import { vi } from 'vitest';\n\n// Mock a module\nvi.mock('./api', () => ({\n  getUser: vi.fn().mockResolvedValue({ id: 1, name: 'Alice' }),\n}));\n\ntest('shows user name', async () => {\n  render(<UserCard id={1} />);\n  expect(await screen.findByText('Alice')).toBeInTheDocument();\n});",
          video: { youtubeId: "7r4xVDI2vho", title: "Mocking in Vitest" },
        },
      ],
    },
    {
      id: "fe-adv-p3",
      title: "Part 3: Performance & Deployment",
      description:
        "Web vitals, optimization techniques, and deploying to production.",
      videoUrl: "https://www.youtube.com/watch?v=AQK3igPzhiI",
      notes:
        "PERFORMANCE & DEPLOYMENT\n\nCore Web Vitals: LCP (Largest Contentful Paint <2.5s), FID/INP (<200ms), CLS (<0.1). Optimize: lazy loading images, code splitting (lazy + Suspense), memoization (useMemo, useCallback, React.memo), virtualization (large lists). Deploy: Vercel/Netlify for static apps. ICP: dfx deploy.",
      docs: [
        { label: "Web Vitals", url: "https://web.dev/vitals/" },
        {
          label: "React: Performance",
          url: "https://react.dev/learn/render-and-commit",
        },
      ],
      partQuiz: [
        {
          question: "What does LCP measure?",
          options: [
            "Load CPU Performance",
            "Largest Contentful Paint timing",
            "Link Call Performance",
            "Layout Cumulative Paint",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does React.memo do?",
          options: [
            "Memoizes expensive computations",
            "Prevents re-render if props unchanged",
            "Caches API calls",
            "Delays rendering",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is code splitting?",
          options: [
            "Splitting CSS from JS",
            "Splitting app into lazy-loaded chunks",
            "Breaking functions into smaller ones",
            "Splitting tests from code",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which hook memoizes a callback function?",
          options: ["useMemo", "useCallback", "useRef", "useDeferredValue"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is CLS (Cumulative Layout Shift)?",
          options: [
            "CPU usage metric",
            "A measure of visual stability (elements moving)",
            "Cache load speed",
            "CSS loading time",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "fe-adv-p3s1",
          title: "Performance Optimization",
          content:
            "React.memo prevents re-renders when props haven't changed. useMemo caches expensive computations: useMemo(() => compute(data), [data]). useCallback caches functions passed as props. Code split with lazy(() => import('./Page')) + Suspense for loading states. Use the React DevTools Profiler to find bottlenecks.",
          codeExample:
            "// Memoize component\nconst HeavyList = React.memo(({ items }) => (\n  <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>\n));\n\n// Code split a route\nconst Dashboard = lazy(() => import('./pages/Dashboard'));\n\n<Suspense fallback={<Spinner />}>\n  <Dashboard />\n</Suspense>",
          video: { youtubeId: "AQK3igPzhiI", title: "React Performance" },
          flowchart: "processor-flow",
        },
        {
          id: "fe-adv-p3s2",
          title: "Core Web Vitals",
          content:
            "Google's Core Web Vitals are the key UX metrics. LCP (loading): optimize images with lazy loading, WebP format, proper sizing. CLS (stability): always set width/height on images and embeds to prevent layout shifts. INP (interactivity): keep JS main thread work under 50ms, defer non-critical scripts.",
          codeExample:
            '// Lazy image loading\n<img src="hero.webp" loading="lazy" width="800" height="400" alt="Hero" />\n\n// Preload critical resources in <head>\n<link rel="preload" href="/fonts/inter.woff2" as="font" crossOrigin />',
          video: { youtubeId: "AQK3igPzhiI", title: "Core Web Vitals" },
        },
        {
          id: "fe-adv-p3s3",
          title: "Deployment",
          content:
            "For standard web apps: Vercel (git push → auto deploy) or Netlify. Build command: pnpm build, output: dist/. For ICP canister apps: dfx deploy deploys frontend as an asset canister. Environment variables: .env.local for local, configure in hosting dashboard for production. Always test the production build locally first: pnpm preview.",
          codeExample:
            "# Build for production\npnpm build\n\n# Preview production build locally\npnpm preview\n\n# Deploy to ICP\ndfx deploy --network ic\n\n# Or deploy to Vercel\nvercel deploy --prod",
          video: { youtubeId: "AQK3igPzhiI", title: "Frontend Deployment" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is tree shaking?",
      options: [
        "Removing unused code from bundle",
        "Sorting component tree",
        "DOM traversal technique",
        "CSS animation",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "Which metric measures interactivity responsiveness?",
      options: ["LCP", "CLS", "INP", "TTFB"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the purpose of a service worker?",
      options: [
        "Background tasks, offline caching, push notifications",
        "Server rendering",
        "CSS processing",
        "Image optimization",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What does the dist/ folder contain?",
      options: [
        "Source code",
        "Test files",
        "Production build output",
        "Dependencies",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is progressive enhancement?",
      options: [
        "Adding animations",
        "Starting with basic HTML, then enhancing with CSS+JS",
        "Only serving modern browsers",
        "Server-side rendering",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "fe-adv-t1",
      title: "TypeScript Interfaces",
      description:
        "Define interfaces for a Blog app: Post (id, title, content, author, tags, createdAt), Comment (id, postId, text, author), and a function getPostSummary(post: Post) that returns title + first 100 chars.",
      starterCode:
        "// Define Post interface\n// Define Comment interface\n// Write getPostSummary function\n",
      hints: [
        "Use optional (?) for non-required fields",
        "Use string[] for tags array",
        "Return type annotation: function fn(): string",
      ],
    },
    {
      id: "fe-adv-t2",
      title: "Write Unit Tests",
      description:
        "Write Vitest tests for a formatDate(date: Date): string function that returns 'Jan 15, 2025'. Test: valid date, current year, edge cases.",
      starterCode:
        "import { describe, it, expect } from 'vitest';\nimport { formatDate } from './utils';\n\ndescribe('formatDate', () => {\n  // write tests here\n});",
      hints: [
        "Test with new Date('2025-01-15')",
        "Use expect().toBe() for exact match",
        "Test at least 3 different dates",
      ],
    },
    {
      id: "fe-adv-t3",
      title: "Optimize a React List",
      description:
        "Wrap a large list component in React.memo. Add useMemo to memoize an expensive filter operation. Add useCallback to memoize a handler passed to list items.",
      starterCode:
        "// ListItem component (to be wrapped in memo)\nconst ListItem = ({ item, onDelete }) => <li>{item.name}</li>;\n\nfunction ItemList({ items, search }) {\n  // Add useMemo for filtering, useCallback for handler\n}",
      hints: [
        "React.memo(ListItem)",
        "const filtered = useMemo(() => items.filter(...), [items, search])",
        "const handleDelete = useCallback((id) => ..., [])",
      ],
    },
  ] as CTestProblem[],
};

// ─── Exported Course ──────────────────────────────────────────────────────────

export const FRONTEND_DEVELOPER_COURSE: CModule[] = [
  fe_module0,
  fe_module1,
  fe_module2,
  fe_module3,
  fe_module4,
  fe_module5,
];

export const FRONTEND_DEVELOPER_ROADMAP_ENTRY = {
  id: "frontend-developer-course",
  title: "Frontend Developer",
  icon: "🎨",
  color: "from-pink-500/20 to-rose-500/10",
  tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  description:
    "HTML, CSS, JS, React & deployment — 5 structured modules to job-ready.",
  level: "Beginner to Advanced",
  isCourse: true as const,
  topics: [],
};

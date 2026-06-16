export interface CodeExample {
  language: string;
  code: string;
  output?: string;
  label?: string;
  runnable?: boolean;
}

export interface DocSection {
  id: string;
  heading: string;
  content: string;
  codeExamples?: CodeExample[];
}

export interface DocTopic {
  id: string;
  domain: string;
  title: string;
  breadcrumb: string[];
  /** Legacy single-paragraph content (used when sections[] is absent) */
  content: string;
  /** Legacy single code example (used when sections[] is absent) */
  codeExample: CodeExample;
  // ── Rich format fields (optional, new) ──────────────────────────────────
  sections?: DocSection[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  readTime?: string;
  summary?: string;
  prerequisites?: string[];
  relatedTopics?: string[];
  commonMistakes?: string[];
  bestPractices?: string[];
}

export const DOC_TOPICS: DocTopic[] = [
  // ── Frontend ────────────────────────────────────────────────────────────────
  {
    id: "frontend-html-semantic",
    domain: "Frontend",
    title: "HTML & Semantic Elements",
    breadcrumb: ["Frontend", "HTML & Semantic Elements"],
    content:
      "Semantic HTML elements clearly describe their meaning to both the browser and the developer. Tags like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> give structure to documents in a way that <div> and <span> cannot.\n\nUsing semantic elements improves accessibility because screen readers understand the document structure. Search engines also rank pages higher when they use meaningful markup. A <button> is focusable and keyboard-navigable by default, whereas a <div onClick> is not.\n\nAlways prefer the element that most accurately describes the content. Use <article> for self-contained content like blog posts, <section> for grouped related content, and <nav> only for navigation links. Avoid nesting block elements inside inline elements.",
    codeExample: {
      language: "HTML",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Semantic Page</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>Understanding Semantic HTML</h1>
      <p>Semantic tags improve SEO and accessibility.</p>
    </article>
    <aside>Related Links</aside>
  </main>
  <footer>© 2026 Code & Crush</footer>
</body>
</html>`,
    },
  },
  {
    id: "frontend-css-flexbox-grid",
    domain: "Frontend",
    title: "CSS Flexbox & Grid",
    breadcrumb: ["Frontend", "CSS Flexbox & Grid"],
    content:
      "CSS Flexbox and Grid are the two primary layout models in modern web design. Flexbox is one-dimensional — it controls items along a row or column. Grid is two-dimensional — it manages both rows and columns simultaneously.\n\nUse Flexbox for navigation bars, card rows, and centering single elements. Use Grid for full-page layouts, dashboard panels, and any design that needs both row and column alignment.\n\nFlexbox key properties: display:flex, flex-direction, justify-content (main axis), align-items (cross axis), gap, flex-wrap. Grid key properties: display:grid, grid-template-columns, grid-template-rows, grid-column, grid-row, place-items.\n\nCombining both is common — a Grid page layout where each cell uses Flexbox for its internal content arrangement.",
    codeExample: {
      language: "CSS",
      code: `/* Flexbox navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* Grid page layout */
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Center anything */
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    },
  },
  {
    id: "frontend-react-hooks",
    domain: "Frontend",
    title: "React Hooks (useState, useEffect)",
    breadcrumb: ["Frontend", "React Hooks"],
    content:
      "React Hooks let you use state and side effects inside function components. useState returns a state variable and a setter function. Each call to the setter triggers a re-render with the new value.\n\nuseEffect runs after every render by default. Provide a dependency array to limit when it runs: an empty array [] means run once on mount; [value] means run whenever value changes. Always return a cleanup function to cancel subscriptions, timers, or event listeners.\n\nRules of Hooks: only call hooks at the top level — never inside loops, conditionals, or nested functions. Only call hooks in React function components or custom hooks. Breaking these rules causes unpredictable behavior.",
    codeExample: {
      language: "TypeScript",
      code: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(id); // cleanup
  }, [running]);

  return (
    <div>
      <p>{seconds}s elapsed</p>
      <button onClick={() => setRunning(r => !r)}>
        {running ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}`,
    },
  },

  // ── Frontend rich topics ─────────────────────────────────────────────────────
  {
    id: "html-basics",
    domain: "Frontend",
    title: "HTML Basics",
    breadcrumb: ["Frontend", "HTML Basics"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "HTML is the skeleton of every web page. Understanding elements, attributes, nesting rules, and semantic meaning is the foundation of everything you build on the web.",
    prerequisites: ["Basic computer skills", "Text editor setup"],
    relatedTopics: ["css-fundamentals", "dom-manipulation"],
    content:
      "HTML (HyperText Markup Language) defines the structure and meaning of web content. An HTML document is a tree of elements. Each element has an opening tag, optional content, and a closing tag: `<p>Hello</p>`. Void elements (no content) self-close: `<img />`, `<br />`, `<input />`.\n\nAttributes add metadata: `<a href='https://example.com' target='_blank'>Link</a>`. The `id` attribute must be unique per page. The `class` attribute targets elements for CSS and JavaScript.",
    codeExample: {
      language: "html",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My First Page</title>
</head>
<body>
  <header>
    <h1>Code &amp; Crush</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#courses">Courses</a>
    </nav>
  </header>
  <main id="about">
    <h2>About Us</h2>
    <p>Learn coding with your <strong>AI study companion</strong>.</p>
    <img src="logo.png" alt="Code and Crush logo" width="200" />
  </main>
  <footer>
    <p>&copy; 2026 Code &amp; Crush</p>
  </footer>
</body>
</html>`,
      output:
        "Browser renders structured page with header, main content, and footer",
      runnable: false,
    },
    sections: [
      {
        id: "html-basics-structure",
        heading: "Document Structure",
        content:
          "Every HTML page starts with `<!DOCTYPE html>` (tells the browser to use HTML5). The `<html>` root wraps two children: `<head>` (metadata, not visible) and `<body>` (visible content).\n\n`<head>` contains `<meta charset='UTF-8'>` (character encoding), `<meta name='viewport'>` (mobile scaling), `<title>` (browser tab label), `<link>` (CSS stylesheets), and `<script>` (JavaScript). Always include charset and viewport meta tags.\n\nSearch engines and screen readers parse this structure to understand page content. Missing or incorrect structure causes SEO and accessibility failures.",
        codeExamples: [
          {
            language: "html",
            label: "Correct head setup",
            code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Learn CS with AI" />
  <title>Code &amp; Crush – Your AI Study Companion</title>
  <link rel="stylesheet" href="styles.css" />
</head>`,
            output:
              "Page title shows in browser tab; meta description appears in Google results",
            runnable: false,
          },
        ],
      },
      {
        id: "html-basics-forms",
        heading: "Forms and Input Elements",
        content:
          "HTML forms collect user input and submit data to a server or JavaScript handler. Key form elements: `<input>` (text, email, password, checkbox, radio, file, number), `<textarea>` (multi-line text), `<select>` + `<option>` (dropdown), `<button type='submit'>` (submit form).\n\nAlways pair inputs with `<label for='inputId'>` — this improves accessibility and click area. Use `required`, `minlength`, `maxlength`, `pattern`, and `type='email'` for built-in HTML5 validation. The `name` attribute is sent as the form field key.",
      },
    ],
    commonMistakes: [
      "Missing alt attribute on images — breaks accessibility and SEO",
      "Using `<br>` for spacing instead of CSS margin/padding — structural misuse",
      "Nesting block elements (div, p, section) inside inline elements (span, a) — invalid HTML",
    ],
    bestPractices: [
      "Always include lang attribute on html tag: <html lang='en'> for accessibility",
      "Use semantic elements (header, nav, main, section, article, footer) over generic divs",
      "Validate HTML with validator.w3.org to catch nesting errors and missing attributes",
    ],
  },
  {
    id: "css-fundamentals",
    domain: "Frontend",
    title: "CSS Fundamentals",
    breadcrumb: ["Frontend", "CSS Fundamentals"],
    difficulty: "Beginner" as const,
    readTime: "8 min",
    summary:
      "CSS controls the visual presentation of HTML. Understanding selectors, the cascade, specificity, and the box model is essential before writing any layout.",
    prerequisites: ["HTML Basics"],
    relatedTopics: ["css-layout", "dom-manipulation"],
    content:
      "CSS (Cascading Style Sheets) applies visual styles to HTML elements. A rule has a selector and a declaration block: `p { color: red; font-size: 16px; }`. Styles cascade — later rules override earlier ones at the same specificity.\n\nThe box model: every element is a rectangle with content, padding (inside border), border, and margin (outside border). `box-sizing: border-box` makes width include padding and border — set it globally.",
    codeExample: {
      language: "css",
      code: `/* Global reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Typography scale */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #1a1a2e;
  background: #f8f9fa;
}

h1 { font-size: 2.5rem; font-weight: 700; }
h2 { font-size: 1.75rem; }

/* Card component */
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}`,
      output: "Clean card with hover shadow renders on screen",
      runnable: false,
    },
    sections: [
      {
        id: "css-selectors-specificity",
        heading: "Selectors and Specificity",
        content:
          "Selectors target elements: `p` (type), `.card` (class), `#hero` (id), `[type='email']` (attribute). Combinators: `div p` (descendant), `div > p` (direct child), `p + span` (adjacent sibling). Pseudo-classes: `:hover`, `:focus`, `:nth-child(2n)`, `:not(.active)`.\n\nSpecificity determines which rule wins: inline style (1,0,0,0) > ID (0,1,0,0) > class/attribute/pseudo-class (0,0,1,0) > element (0,0,0,1). When specificity ties, the later rule in the source wins. Avoid `!important` — it breaks the natural cascade.",
        codeExamples: [
          {
            language: "css",
            label: "Common selector patterns",
            code: `/* State variants */
.btn { background: #6c5ce7; color: white; }
.btn:hover { background: #5a4dd6; }
.btn:focus-visible { outline: 2px solid #6c5ce7; outline-offset: 2px; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Pseudo-elements */
.label::before { content: "→ "; }

/* Attribute selector */
input[type="email"] { border: 2px solid #6c5ce7; }

/* Descendant with state */
.nav a.active { font-weight: 700; border-bottom: 2px solid #6c5ce7; }`,
            output: "Buttons and nav links style correctly with state variants",
            runnable: false,
          },
        ],
      },
      {
        id: "css-variables",
        heading: "CSS Custom Properties (Variables)",
        content:
          "CSS custom properties store reusable values: `--color-primary: oklch(0.65 0.2 280)`. Reference with `var(--color-primary)`. Define globals on `:root`, override locally on specific selectors.\n\nCustom properties are live — JavaScript can update them and the UI responds instantly. They cascade and inherit just like regular CSS properties, making them ideal for theming (dark mode: `.dark { --bg: #0d0d0d; }`).",
      },
    ],
    commonMistakes: [
      "Not setting box-sizing: border-box globally — widths behave unexpectedly",
      "Using IDs for styling — high specificity causes maintenance headaches; use classes",
      "Hardcoding pixel values everywhere — use rem/em/% for scalable, accessible sizing",
    ],
    bestPractices: [
      "Use CSS custom properties for all colors and spacing — makes theming trivial",
      "Always style :focus-visible for keyboard accessibility, never remove outlines with outline:none",
      "Prefer class-based selectors over element selectors for component styles — more portable",
    ],
  },
  {
    id: "js-variables",
    domain: "Frontend",
    title: "JavaScript Variables",
    breadcrumb: ["Frontend", "JavaScript Variables"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "JavaScript has three ways to declare variables. Understanding const, let, and the block-scoping rules prevents hoisting bugs and accidental mutation.",
    prerequisites: ["HTML Basics", "Basic programming concepts"],
    relatedTopics: ["js-functions", "dom-manipulation"],
    content:
      "JavaScript has three declaration keywords: `var` (function-scoped, hoisted, legacy — avoid), `let` (block-scoped, reassignable), `const` (block-scoped, cannot be reassigned — the binding is constant, not the value). Prefer `const` by default; use `let` only when you need to reassign.\n\nJavaScript has seven primitive types: string, number, bigint, boolean, undefined, null, and symbol. Everything else is an object (arrays, functions, dates). `typeof null === 'object'` is a historic bug.",
    codeExample: {
      language: "javascript",
      code: `// const vs let
const PI = 3.14159;
// PI = 3;  // TypeError — cannot reassign

const user = { name: "Mayank", age: 20 };
user.age = 21;  // OK — mutating the object is allowed
// user = {};   // TypeError — reassigning the binding

let score = 0;
score += 10;  // OK

// Block scoping
{
  let blockVar = "only inside block";
  const blockConst = 42;
}
// console.log(blockVar);  // ReferenceError

// Type coercion gotchas
console.log(1 + "2");   // "12" (string concat)
console.log("3" - 1);   // 2  (numeric coercion)
console.log(null == undefined);   // true (loose)
console.log(null === undefined);  // false (strict)`,
      output: '21\n"12"\n2\ntrue\nfalse',
      runnable: true,
    },
    sections: [
      {
        id: "js-vars-destructuring",
        heading: "Destructuring and Spread",
        content:
          "Destructuring extracts values from arrays and objects into variables: `const { name, age } = user;` — `const [first, ...rest] = array;`. Rename on extraction: `const { name: userName } = user;`. Provide defaults: `const { theme = 'light' } = config;`.\n\nThe spread operator `...` expands iterables. Copy arrays: `[...arr]`. Merge objects: `{ ...defaults, ...overrides }`. Pass array as function arguments: `Math.max(...nums)`. The rest parameter `...args` collects remaining arguments into an array.",
        codeExamples: [
          {
            language: "javascript",
            label: "Destructuring patterns",
            code: `const student = { name: "Mayank", gpa: 3.9, city: "Delhi" };

// Object destructuring with rename and default
const { name: studentName, gpa, grade = "A" } = student;
console.log(studentName, gpa, grade);  // Mayank 3.9 A

// Array destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first, second, rest);  // 10 20 [30, 40, 50]

// Merge objects with spread
const updated = { ...student, gpa: 4.0, year: 2 };
console.log(updated.gpa);  // 4.0`,
            output: "Mayank 3.9 A\n10 20 [30, 40, 50]\n4.0",
            runnable: true,
          },
        ],
      },
      {
        id: "js-vars-scope-hoisting",
        heading: "Scope and Hoisting",
        content:
          "Hoisting moves declarations to the top of their scope at parse time. `var` declarations are hoisted and initialized to `undefined`. `function` declarations are fully hoisted. `let` and `const` are hoisted but not initialized — accessing them before declaration throws a ReferenceError (the 'temporal dead zone').\n\nClosure: inner functions retain access to variables in their outer scope even after the outer function returns. This is how React hooks, event handlers, and callbacks work.",
      },
    ],
    commonMistakes: [
      "Using var in modern code — scoping surprises; use const/let always",
      "Using == (loose equality) instead of === (strict) — '0' == false is true",
      "Mutating function parameters that are objects — modifies the caller's data",
    ],
    bestPractices: [
      "Default to const; only use let when you know the variable will be reassigned",
      "Always use === for comparisons — loose equality has too many surprising edge cases",
      "Destructure function parameters to make required fields explicit: function({ name, age }) {}",
    ],
  },
  {
    id: "js-functions",
    domain: "Frontend",
    title: "JavaScript Functions",
    breadcrumb: ["Frontend", "JavaScript Functions"],
    difficulty: "Beginner" as const,
    readTime: "8 min",
    summary:
      "Functions are first-class citizens in JavaScript. Arrow functions, closures, async/await, and higher-order array methods are the core tools of modern JS.",
    prerequisites: ["JavaScript Variables"],
    relatedTopics: ["dom-manipulation", "react-components"],
    content:
      "JavaScript functions can be defined as declarations (`function foo() {}`), expressions (`const foo = function() {}`), or arrow functions (`const foo = () => {}`). Arrow functions do not have their own `this` — they inherit `this` from the enclosing scope, which is why they are preferred in React event handlers and callbacks.\n\nFunctions are first-class objects: pass them as arguments, return them, and store them in variables. This enables higher-order functions and functional array methods.",
    codeExample: {
      language: "javascript",
      code: `// Arrow vs regular function (this binding)
const timer = {
  name: "Countdown",
  start() {
    // Arrow function inherits this from start()
    setTimeout(() => {
      console.log(\`\${this.name} done!\`);  // Countdown done!
    }, 100);
  }
};
timer.start();

// Higher-order array methods
const scores = [85, 42, 92, 67, 78, 55, 96];
const passed = scores.filter(s => s >= 60);         // [85, 92, 67, 78, 96]
const grades = passed.map(s => s >= 90 ? 'A' : 'B'); // ['B', 'A', 'B', 'B', 'A']
const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;

console.log(passed, grades, avg.toFixed(1));`,
      output:
        "Countdown done!\n[85, 92, 67, 78, 96] ['B', 'A', 'B', 'B', 'A'] 73.6",
      runnable: true,
    },
    sections: [
      {
        id: "js-functions-async",
        heading: "Async/Await and Promises",
        content:
          "A Promise represents a value that will be available in the future. `.then(cb)` runs on success, `.catch(cb)` on failure, `.finally(cb)` always. `async function` always returns a Promise. `await` pauses execution inside an async function until the Promise resolves.\n\nAlways use try/catch around await to handle rejections. For parallel operations use `Promise.all([p1, p2])` — resolves when ALL promises resolve, rejects if ANY rejects. `Promise.allSettled` resolves when all complete regardless of individual outcomes.",
        codeExamples: [
          {
            language: "javascript",
            label: "Async/await with error handling",
            code: `async function fetchUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err.message);
    return null;
  }
}

// Parallel fetch
async function loadDashboard(userId) {
  const [user, courses] = await Promise.all([
    fetchUser(userId),
    fetch('/api/courses').then(r => r.json())
  ]);
  return { user, courses };
}`,
            output:
              "User and courses fetched in parallel; errors handled gracefully",
            runnable: false,
          },
        ],
      },
      {
        id: "js-functions-closures",
        heading: "Closures and Currying",
        content:
          "A closure captures variables from its surrounding scope. This is used for data encapsulation, factory functions, and memoization. Every time you use `useState` in React or `useCallback`, closures are at work.\n\nCurrying transforms a function with multiple arguments into a chain of single-argument functions: `add(1)(2)` instead of `add(1, 2)`. Partial application pre-fills some arguments, returning a function that accepts the rest — useful for creating specialized versions of generic functions.",
      },
    ],
    commonMistakes: [
      "Not handling Promise rejections — unhandled rejections crash Node.js processes",
      "Using for...in to iterate arrays — iterates prototype properties too; use for...of or forEach",
      "Forgetting that await only works inside async functions — wraps in IIFE if needed at top level",
    ],
    bestPractices: [
      "Prefer async/await over .then chains for readability — easier to add error handling",
      "Use Promise.all for parallel independent fetches — dramatically faster than sequential awaits",
      "Name your functions (even arrow functions assigned to const) for better stack traces",
    ],
  },
  {
    id: "dom-manipulation",
    domain: "Frontend",
    title: "DOM Manipulation",
    breadcrumb: ["Frontend", "DOM Manipulation"],
    difficulty: "Beginner" as const,
    readTime: "8 min",
    summary:
      "The DOM is the live tree of HTML elements that JavaScript can read and modify. Understanding selectors, events, and efficient updates is essential before using any framework.",
    prerequisites: [
      "HTML Basics",
      "JavaScript Variables",
      "JavaScript Functions",
    ],
    relatedTopics: ["js-functions", "react-components"],
    content:
      "The DOM (Document Object Model) represents the HTML page as a tree of Node objects. JavaScript manipulates this tree to change what the user sees without reloading the page.\n\nSelect elements: `document.querySelector('.btn')` (first match), `document.querySelectorAll('li')` (all matches, returns NodeList). Create: `document.createElement('div')`. Append: `parent.appendChild(child)` or `parent.append(text, element)`. Remove: `element.remove()`.",
    codeExample: {
      language: "javascript",
      code: `// Build a dynamic list
const ul = document.querySelector('#todo-list');

function addTodo(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  btn.addEventListener('click', () => li.remove());

  li.appendChild(btn);
  ul.appendChild(li);
}

// Event delegation — one listener for all list items
ul.addEventListener('click', (event) => {
  const item = event.target.closest('.todo-item');
  if (item && event.target.tagName !== 'BUTTON') {
    item.classList.toggle('done');
  }
});

addTodo('Learn HTML');
addTodo('Master CSS');
addTodo('Write JavaScript');`,
      output:
        "Three todo items added with click-to-complete and delete functionality",
      runnable: false,
    },
    sections: [
      {
        id: "dom-events",
        heading: "Events and Event Delegation",
        content:
          "Events bubble up from the target element through its ancestors. `addEventListener(event, handler, options)` attaches a listener. `event.target` is the element that triggered the event; `event.currentTarget` is the element with the listener attached.\n\nEvent delegation attaches ONE listener to a parent instead of many listeners on each child. When clicks bubble up, check `event.target.closest('.selector')` to identify which child was clicked. This is more performant and automatically handles dynamically added children.",
        codeExamples: [
          {
            language: "javascript",
            label: "Event delegation pattern",
            code: `// ONE listener handles ALL current and future buttons
document.querySelector('.action-list').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const id = btn.dataset.id;

  if (action === 'edit') openEditModal(id);
  if (action === 'delete') deleteItem(id);
  if (action === 'complete') markComplete(id);
});`,
            output: "All action buttons handled by a single delegated listener",
            runnable: false,
          },
        ],
      },
      {
        id: "dom-performance",
        heading: "Efficient DOM Updates",
        content:
          "DOM reads and writes are expensive. Batch DOM writes: read all values first, then write. Accessing `offsetWidth` or `scrollTop` after a write forces a synchronous layout recalculation (layout thrashing).\n\nFor large lists, use `DocumentFragment` to build the entire structure off-document, then append once. Use `IntersectionObserver` for lazy loading images instead of scroll event listeners. Use `requestAnimationFrame` for animations.",
      },
    ],
    commonMistakes: [
      "Using innerHTML to set user content — XSS risk; use textContent for plain text",
      "Adding event listeners inside loops — each creates a new function; use delegation instead",
      "Not removing event listeners when elements are removed — memory leak",
    ],
    bestPractices: [
      "Use event delegation for lists and dynamic content — one listener beats hundreds",
      "Prefer classList.add/remove/toggle over className string manipulation",
      "Cache frequently-accessed DOM references in variables — querySelector is not free",
    ],
  },
  {
    id: "react-components",
    domain: "Frontend",
    title: "React Components",
    breadcrumb: ["Frontend", "React Components"],
    difficulty: "Intermediate" as const,
    readTime: "8 min",
    summary:
      "React components are the building blocks of React UIs. Understanding props, composition, conditional rendering, and list rendering covers 80% of what you need to build any React app.",
    prerequisites: ["JavaScript Functions", "HTML Basics"],
    relatedTopics: ["react-hooks", "dom-manipulation"],
    content:
      "A React component is a JavaScript function that accepts `props` (an object of inputs) and returns JSX (a syntax extension that looks like HTML). Components compose — you build complex UIs by combining simple ones.\n\nProps flow top-down (parent → child). To pass data up, pass a callback function as a prop. Children are passed as `props.children`. Keep components small and single-purpose — if a component does more than one thing, split it.",
    codeExample: {
      language: "tsx",
      code: `interface CourseCardProps {
  title: string;
  progress: number;   // 0-100
  enrolled: boolean;
  onEnroll: () => void;
}

function CourseCard({ title, progress, enrolled, onEnroll }: CourseCardProps) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      {enrolled ? (
        <div className="progress-bar">
          <div style={{ width: \`\${progress}%\` }} className="fill" />
          <span>{progress}% complete</span>
        </div>
      ) : (
        <button onClick={onEnroll} className="btn-enroll">
          Enroll Now
        </button>
      )}
    </div>
  );
}

// Usage
<CourseCard
  title="Programming in C"
  progress={42}
  enrolled={true}
  onEnroll={() => handleEnroll('c-programming')}
/>`,
      output:
        "Card renders with progress bar or enroll button based on enrolled state",
      runnable: false,
    },
    sections: [
      {
        id: "react-components-lists",
        heading: "Lists and Conditional Rendering",
        content:
          "Render lists with `.map()`: `items.map(item => <Item key={item.id} {...item} />)`. The `key` prop must be a stable, unique string or number per item — React uses it to track which items changed. Never use array index as key for reorderable or deletable lists.\n\nConditional rendering: `{condition && <Component />}` (renders nothing if false), `{condition ? <A /> : <B />}` (either/or), or an early return before the main JSX.",
        codeExamples: [
          {
            language: "tsx",
            label: "List with conditional empty state",
            code: `interface Task { id: string; title: string; done: boolean; }

function TaskList({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.done ? 'done' : ''}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}`,
            output:
              "Empty state or list renders depending on tasks array length",
            runnable: false,
          },
        ],
      },
      {
        id: "react-components-composition",
        heading: "Composition and props.children",
        content:
          "`props.children` receives nested JSX. This enables wrapper/container components: `<Card><p>Content here</p></Card>`. The Card component renders its children wherever it places `{children}`.\n\nSlot pattern: pass named JSX as props: `<Modal header={<Title />} footer={<Actions />}>`. This is more explicit than children for complex layouts. Prefer composition over prop drilling — if you're passing props through 3+ levels, consider Context or component composition.",
      },
    ],
    commonMistakes: [
      "Using array index as key for lists with deletion/reordering — causes subtle UI bugs",
      "Placing JSX logic inline until components become unreadable — extract to named components",
      "Not TypeScript-typing props interfaces — prop errors only caught at runtime",
    ],
    bestPractices: [
      "Keep components under 100 lines — extract any reusable piece immediately",
      "Co-locate component with its styles and tests in a single folder",
      "Use TypeScript interfaces for all props — documents the API and catches errors at compile time",
    ],
  },
  {
    id: "react-hooks",
    domain: "Frontend",
    title: "React Hooks",
    breadcrumb: ["Frontend", "React Hooks"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Hooks are the modern React API for state and side effects in function components. Mastering useState, useEffect, useCallback, useMemo, and custom hooks covers all everyday patterns.",
    prerequisites: ["React Components", "JavaScript Functions"],
    relatedTopics: ["react-components", "js-functions"],
    content:
      "React Hooks let function components manage state and side effects. `useState(initialValue)` returns `[value, setter]`. `useEffect(fn, deps)` runs side effects after render — fetching data, subscriptions, timers. Always clean up in the effect's return function.\n\nRules of Hooks: call hooks only at the top level (not inside conditionals or loops) and only in React functions or custom hooks.",
    codeExample: {
      language: "tsx",
      code: `import { useState, useEffect, useCallback } from 'react';

interface Post { id: number; title: string; }

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/posts');
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      setPosts(await res.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error} <button onClick={fetchPosts}>Retry</button></p>;
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}`,
      output:
        "Posts fetched on mount; loading/error states handled; retry on error",
      runnable: false,
    },
    sections: [
      {
        id: "react-hooks-performance",
        heading: "useMemo and useCallback",
        content:
          "`useCallback(fn, deps)` memoizes a function — returns the same function reference unless dependencies change. Prevents child components that accept callbacks from re-rendering unnecessarily when the parent re-renders.\n\n`useMemo(() => expensiveComputation(a, b), [a, b])` memoizes a computed value. Only recomputes when `a` or `b` changes. Don't overuse — the memoization itself has overhead. Apply when profiling shows a specific bottleneck.",
        codeExamples: [
          {
            language: "tsx",
            label: "useCallback to stabilize handler",
            code: `import { useState, useCallback, memo } from 'react';

const TodoItem = memo(function TodoItem({
  text, onDelete
}: { text: string; onDelete: () => void }) {
  console.log('render:', text);  // won't log on parent re-render
  return <li>{text} <button onClick={onDelete}>X</button></li>;
});

function TodoApp() {
  const [todos, setTodos] = useState(['Learn React', 'Build app']);
  const [count, setCount] = useState(0);

  const handleDelete = useCallback((idx: number) => {
    setTodos(prev => prev.filter((_, i) => i !== idx));
  }, []);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {todos.map((t, i) => (
        <TodoItem key={t} text={t} onDelete={() => handleDelete(i)} />
      ))}
    </>
  );
}`,
            output: "TodoItems don't re-render when counter increments",
            runnable: false,
          },
        ],
      },
      {
        id: "react-hooks-custom",
        heading: "Custom Hooks",
        content:
          "Extract repeated Hook logic into a custom hook — a function whose name starts with `use`. Custom hooks can call other hooks internally. They let you share stateful logic between components without changing component hierarchy.\n\nExamples: `useLocalStorage(key, initial)` — syncs state to localStorage. `useDebounce(value, delay)` — returns a debounced version of a value. `useFetch(url)` — wraps fetch with loading/error state.",
      },
    ],
    commonMistakes: [
      "Missing dependencies in useEffect array — causes stale closures and missed updates",
      "Setting state inside useEffect with no dependency array — infinite re-render loop",
      "Overusing useMemo/useCallback before profiling — premature optimization adds complexity",
    ],
    bestPractices: [
      "Use the eslint-plugin-react-hooks rules — they catch missing deps and rule violations automatically",
      "Extract data-fetching logic into custom hooks (useUser, useCourses) — keeps components clean",
      "Put the cleanup function in every useEffect that subscribes or starts a timer",
    ],
  },
  {
    id: "css-layout",
    domain: "Frontend",
    title: "CSS Layout: Flexbox & Grid",
    breadcrumb: ["Frontend", "CSS Layout"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Flexbox and Grid are the two pillars of modern CSS layout. Flexbox handles one-dimensional flow; Grid controls two-dimensional structure. Using both together covers every layout need.",
    prerequisites: ["CSS Fundamentals"],
    relatedTopics: ["css-fundamentals", "react-components"],
    content:
      "Flexbox (one-dimensional) and Grid (two-dimensional) eliminate float hacks and table layouts. Set `display: flex` or `display: grid` on a container to activate the respective model.\n\nFlexbox main-axis direction is set by `flex-direction` (row by default). `justify-content` aligns items on the main axis; `align-items` on the cross axis. `gap` sets spacing between items. Children can grow/shrink with `flex: 1` (shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0`).",
    codeExample: {
      language: "css",
      code: `/* === FLEXBOX === */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 24px;
  height: 64px;
}

.card-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.card-row > * { flex: 1 1 280px; } /* grow, shrink, min-width */

/* === GRID === */
.page-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 64px 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
}

.sidebar { grid-area: sidebar; }
.main    { grid-area: main; padding: 32px; }

/* Responsive: collapse to single column */
@media (max-width: 768px) {
  .page-layout {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main" "footer";
  }
  .sidebar { display: none; }
}`,
      output: "Two-column layout collapses to single column on mobile",
      runnable: false,
    },
    sections: [
      {
        id: "css-grid-advanced",
        heading: "CSS Grid Advanced Patterns",
        content:
          "`grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))` creates a responsive grid that automatically fills columns of at least 200px — no media queries needed for the grid itself. `auto-fill` creates as many columns as fit; `auto-fit` also collapses empty columns.\n\n`grid-column: 1 / -1` spans all columns (useful for headers and full-width elements). `place-items: center` (shorthand for `align-items: center; justify-items: center`) centers grid items in their cells.",
        codeExamples: [
          {
            language: "css",
            label: "Auto-responsive card grid",
            code: `/* Cards fill the width, minimum 240px each — no breakpoints! */
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  padding: 24px;
}

/* Full-width banner inside the grid */
.banner {
  grid-column: 1 / -1;
  background: var(--color-primary);
  padding: 24px;
  border-radius: 12px;
}

/* Perfect center a loading spinner */
.spinner-wrapper {
  display: grid;
  place-items: center;
  height: 200px;
}`,
            output:
              "Responsive grid adapts from 1 to 4+ columns based on viewport width",
            runnable: false,
          },
        ],
      },
      {
        id: "css-responsive",
        heading: "Responsive Design with Media Queries",
        content:
          "Design mobile-first: write base styles for small screens, then use `@media (min-width: 768px)` to add styles for larger screens. This produces less CSS than desktop-first (overriding large-screen styles for small ones).\n\nCommon breakpoints: 480px (large phones), 768px (tablets), 1024px (small desktops), 1280px (large desktops). Use CSS custom properties for spacing that changes at breakpoints to avoid repeating rules.",
      },
    ],
    commonMistakes: [
      "Using Flexbox for two-dimensional layouts — it's one-dimensional; use Grid instead",
      "Forgetting flex-wrap: wrap — items overflow off-screen on small viewports",
      "Using fixed pixel widths on flex/grid children instead of minmax() or flex: 1",
    ],
    bestPractices: [
      "Design mobile-first — add complexity with min-width media queries, not max-width",
      "Use gap instead of margin for spacing between flex/grid children — cleaner and more predictable",
      "Combine Grid for page macro-layout with Flexbox for component micro-layout",
    ],
  },

  // ── Backend ──────────────────────────────────────────────────────────────────
  {
    id: "backend-nodejs-event-loop",
    domain: "Backend",
    title: "Node.js Event Loop",
    breadcrumb: ["Backend", "Node.js Event Loop"],
    content:
      "Node.js runs on a single thread, yet handles thousands of concurrent connections through its event loop. The event loop continuously checks a queue of callbacks and executes them one at a time. Long-running synchronous code blocks this loop, freezing all other requests.\n\nPhases of the event loop: timers (setTimeout/setInterval callbacks), I/O callbacks, idle/prepare, poll (wait for I/O), check (setImmediate), close callbacks. Microtasks (Promise callbacks, queueMicrotask) run between each phase.\n\nAlways prefer async/await or callbacks for I/O operations. Never use CPU-intensive synchronous code in request handlers — offload to worker threads or a job queue instead.",
    codeExample: {
      language: "JavaScript",
      code: `// Async I/O — non-blocking
const fs = require('fs/promises');

async function readFile(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    return data;
  } catch (err) {
    throw new Error(\`Failed to read \${path}: \${err.message}\`);
  }
}

// Event loop order demo
console.log('1: sync');
setTimeout(() => console.log('3: timer'), 0);
Promise.resolve().then(() => console.log('2: microtask'));
console.log('4: sync end');
// Output: 1, 4, 2, 3`,
    },
  },
  {
    id: "backend-rest-api",
    domain: "Backend",
    title: "REST API Design",
    breadcrumb: ["Backend", "REST API Design"],
    content:
      "REST (Representational State Transfer) is an architectural style for building web APIs using HTTP. A RESTful API uses resources identified by URLs and HTTP verbs to express intent: GET retrieves, POST creates, PUT/PATCH updates, DELETE removes.\n\nKey principles: stateless (each request is self-contained), uniform interface (consistent URL conventions), resource-based (nouns in URLs, not verbs). Use plural nouns: /users not /getUser. Nest related resources: /users/:id/posts.\n\nHTTP status codes carry meaning — 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error. Version your API: /api/v1/users. Document every endpoint with examples.",
    codeExample: {
      language: "JavaScript",
      code: `const express = require('express');
const router = express.Router();

// GET /api/v1/users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json({ data: users, count: users.length });
});

// GET /api/v1/users/:id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json({ data: user });
});

// POST /api/v1/users
router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ data: user });
});`,
    },
  },
  {
    id: "backend-jwt-auth",
    domain: "Backend",
    title: "JWT Authentication",
    breadcrumb: ["Backend", "JWT Authentication"],
    content:
      "JSON Web Tokens (JWT) are a compact, URL-safe way to represent claims between two parties. A JWT has three parts separated by dots: header (algorithm), payload (claims), and signature. The server signs the token with a secret; the client stores it and sends it in the Authorization header on each request.\n\nJWTs are stateless — the server doesn't store session data. This makes them ideal for microservices and horizontal scaling. The payload is base64-encoded, not encrypted — never store sensitive data in it.\n\nAlways set an expiry (exp claim). Use short-lived access tokens (15min) with refresh tokens for persistent sessions. Validate the signature on every request. Store tokens in httpOnly cookies to prevent XSS access, not in localStorage.",
    codeExample: {
      language: "JavaScript",
      code: `const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// Create token
function createToken(userId) {
  return jwt.sign(
    { sub: userId, iat: Date.now() },
    SECRET,
    { expiresIn: '15m' }
  );
}

// Verify middleware
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}`,
    },
  },

  // ── Python ───────────────────────────────────────────────────────────────────
  {
    id: "python-functions-scope",
    domain: "Python",
    title: "Python Functions & Scope",
    breadcrumb: ["Python", "Functions & Scope"],
    content:
      "Functions in Python are first-class objects — they can be assigned to variables, passed as arguments, and returned from other functions. Define a function with def and optionally annotate types. Default arguments are evaluated once at function definition time, not each call.\n\nPython follows the LEGB scoping rule: Local, Enclosing, Global, Built-in. A variable lookup starts in the innermost scope and moves outward. Use global to modify a module-level variable from inside a function. Use nonlocal to modify a variable in the enclosing (but not global) scope.\n\nLambda creates anonymous single-expression functions. Use them for short callbacks, but prefer named functions for anything more than one line.",
    codeExample: {
      language: "Python",
      code: `# Type-annotated function
def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

# First-class: pass functions as arguments
def apply(func, value):
    return func(value)

double = lambda x: x * 2
print(apply(double, 5))  # 10

# Closure and nonlocal
def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print(counter())  # 1
print(counter())  # 2`,
    },
  },
  {
    id: "python-list-comprehensions",
    domain: "Python",
    title: "List Comprehensions",
    breadcrumb: ["Python", "List Comprehensions"],
    content:
      "List comprehensions provide a concise way to create lists based on existing iterables. The syntax is [expression for item in iterable if condition]. They are more readable and usually faster than equivalent for-loops because they are optimized at the C level.\n\nDictionary comprehensions use {k: v for k, v in iterable} and set comprehensions use {expr for item in iterable}. Generator expressions use (expr for item in iterable) — they are lazy and memory-efficient for large datasets.\n\nAvoid nested comprehensions deeper than two levels — they hurt readability. For complex transformations, a regular loop with descriptive variable names is clearer.",
    codeExample: {
      language: "Python",
      code: `# Basic list comprehension
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Nested (2D matrix flatten)
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [n for row in matrix for n in row]

# Dict comprehension
word_len = {word: len(word) for word in ["python","java","rust"]}

# Generator (lazy, memory-efficient)
total = sum(x**2 for x in range(1_000_000))

# Set comprehension (unique values)
unique_lengths = {len(w) for w in ["hi","hello","hey","world"]}`,
    },
  },
  // ── Python rich topics ──────────────────────────────────────────────────────
  {
    id: "python-basics",
    domain: "Python",
    title: "Python Basics",
    breadcrumb: ["Python", "Python Basics"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Python is a readable, beginner-friendly language. This topic covers its execution model, indentation rules, print/input, and basic data types.",
    prerequisites: ["Basic programming concepts", "Text editor / IDE setup"],
    relatedTopics: ["python-variables", "python-functions"],
    content:
      "Python is an interpreted, dynamically typed language known for its clean syntax. Programs are executed line by line by the CPython interpreter. Indentation (4 spaces by convention) defines code blocks — there are no curly braces.\n\nPython has five built-in scalar types: int (arbitrary precision integer), float (64-bit decimal), complex (2+3j), bool (True/False), and str (immutable unicode text). Use type() to inspect a value's type and isinstance() for type checks in code.",
    codeExample: {
      language: "Python",
      code: `# Hello World and basic I/O
print("Hello, World!")          # Hello, World!

name = "Mayank"
print(f"Welcome, {name}!")

# Built-in types
age = 21          # int
gpa = 3.85        # float
passed = True     # bool
city = "Delhi"    # str

print(type(age))  # <class 'int'>
print(type(gpa))  # <class 'float'>

# Dynamic typing — reassign freely
x = 10
x = "now a string"
print(x)  # now a string`,
      output:
        "Hello, World!\nWelcome, Mayank!\n<class 'int'>\n<class 'float'>\nnow a string",
      runnable: true,
    },
    sections: [
      {
        id: "python-basics-execution",
        heading: "How Python Executes Code",
        content:
          "CPython compiles your source file to bytecode (.pyc files cached in __pycache__/) and then runs that bytecode on the Python Virtual Machine. This happens transparently every time you run a script.\n\nThe REPL (Read-Eval-Print Loop) lets you type Python expressions interactively — great for exploration. Start it by running `python` with no arguments. `python script.py` runs a file. `python -c 'print(42)'` runs a one-liner.\n\nModule system: any `.py` file is a module. Import with `import math` or `from math import sqrt`. The `__name__ == '__main__'` guard lets a file work both as a module and as a standalone script.",
        codeExamples: [
          {
            language: "Python",
            label: "Module guard pattern",
            code: `# utils.py
def add(a, b):
    return a + b

# Only runs when executed directly, not when imported
if __name__ == "__main__":
    result = add(3, 4)
    print(f"3 + 4 = {result}")  # 3 + 4 = 7`,
            output: "3 + 4 = 7",
            runnable: true,
          },
        ],
      },
      {
        id: "python-basics-operators",
        heading: "Operators and Expressions",
        content:
          "Python arithmetic: +, -, *, / (true division, always float), // (floor division), % (modulo), ** (power). Integer division with // truncates toward negative infinity: -7 // 2 == -4.\n\nComparison operators return booleans: ==, !=, <, >, <=, >=. Python allows chained comparisons: `0 < x < 10`. Logical operators: `and`, `or`, `not` (not &&, ||, !).\n\nWalrus operator := (Python 3.8+) assigns inside expressions — useful in while loops and comprehensions to avoid duplicate computation.",
      },
    ],
    commonMistakes: [
      "Forgetting that `/` always returns float — use `//` for integer division",
      "Mixing tabs and spaces for indentation — always use 4 spaces consistently",
      "Comparing with `==` to None instead of `is None` — use `is` for singleton checks",
    ],
    bestPractices: [
      "Follow PEP 8 style guide — 4-space indentation, snake_case names, 79-char line limit",
      "Use f-strings (f'Hello {name}') for string formatting — cleaner than .format() or %",
      "Run `python -m py_compile script.py` to check syntax without executing the script",
    ],
  },
  {
    id: "python-variables",
    domain: "Python",
    title: "Variables & Data Types",
    breadcrumb: ["Python", "Variables & Data Types"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Python variables are labels attached to objects. Understanding mutability, type coercion, and the None type prevents common bugs.",
    prerequisites: ["Python Basics"],
    relatedTopics: ["python-lists", "python-dicts"],
    content:
      "In Python, variables are references to objects, not containers. Assignment (`x = 5`) makes `x` point to the integer object `5`. Multiple variables can point to the same object — check with `is` (identity) vs `==` (equality).\n\nPython has mutable (list, dict, set) and immutable (int, float, str, tuple) types. Immutable objects cannot be changed in place — operations create new objects. This distinction matters when passing arguments to functions.",
    codeExample: {
      language: "Python",
      code: `# Variables are references
a = [1, 2, 3]
b = a           # b points to the SAME list
b.append(4)
print(a)        # [1, 2, 3, 4] — a changed too!

c = a.copy()    # c is a shallow copy
c.append(5)
print(a)        # [1, 2, 3, 4] — a unchanged

# None is the absence of value
result = None
if result is None:
    print("No result yet")

# Multiple assignment / unpacking
x, y, z = 1, 2, 3
first, *rest = [10, 20, 30, 40]
print(first, rest)  # 10 [20, 30, 40]`,
      output: "[1, 2, 3, 4]\n[1, 2, 3, 4]\nNo result yet\n10 [20, 30, 40]",
      runnable: true,
    },
    sections: [
      {
        id: "python-vars-scope",
        heading: "Variable Scope (LEGB)",
        content:
          "Python resolves names using the LEGB rule: Local → Enclosing → Global → Built-in. A lookup starts in the innermost scope and expands outward until found.\n\nUse `global varname` inside a function to modify a module-level variable. Use `nonlocal varname` to modify a variable in the nearest enclosing (non-global) scope. Without these declarations, assignment always creates a new local variable.",
        codeExamples: [
          {
            language: "Python",
            label: "LEGB scope demo",
            code: `count = 0  # global

def increment():
    global count
    count += 1

increment()
increment()
print(count)  # 2

def outer():
    msg = "hello"
    def inner():
        nonlocal msg
        msg = "world"
    inner()
    print(msg)  # world

outer()`,
            output: "2\nworld",
            runnable: true,
          },
        ],
      },
      {
        id: "python-vars-types",
        heading: "Type Conversion & Checking",
        content:
          "Explicit type conversion (casting): `int('42')`, `float('3.14')`, `str(100)`, `bool(0)` → False. Python is strongly typed — it does not silently convert between types like JavaScript (except numeric promotions: int + float → float).\n\n`isinstance(x, int)` returns True if x is an int or a subclass of int — preferred over `type(x) == int` because it handles inheritance correctly. Use `isinstance(x, (int, float))` to check multiple types at once.",
      },
    ],
    commonMistakes: [
      "Comparing with `is` instead of `==` for value equality — `is` checks identity, not value",
      "Mutating a list/dict passed to a function without knowing it modifies the caller's data",
      "Using `== None` instead of `is None` — the latter is correct for singleton checks",
    ],
    bestPractices: [
      "Use `is None` / `is not None` for None checks — never `== None`",
      "Prefer explicit type annotations (x: int = 0) for function parameters and return values",
      "Use `copy.deepcopy()` when you need a fully independent copy of nested structures",
    ],
  },
  {
    id: "python-lists",
    domain: "Python",
    title: "Lists in Python",
    breadcrumb: ["Python", "Lists"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Lists are Python's most used data structure — ordered, mutable, and heterogeneous. Mastering indexing, slicing, and list methods is essential.",
    prerequisites: ["Python Variables & Data Types"],
    relatedTopics: ["python-dicts", "python-functions"],
    content:
      "A Python list is an ordered, mutable sequence that can hold any mix of types. Create with square brackets: `nums = [1, 2, 3]`. Lists are zero-indexed. Negative indices count from the end: `nums[-1]` is the last element.\n\nSlicing extracts sub-lists: `nums[1:3]` (index 1 up to but not including 3), `nums[::-1]` (reversed copy). Slicing never raises an IndexError even if bounds exceed the list length.",
    codeExample: {
      language: "Python",
      code: `fruits = ["apple", "banana", "cherry", "date"]

# Indexing and slicing
print(fruits[0])       # apple
print(fruits[-1])      # date
print(fruits[1:3])     # ['banana', 'cherry']
print(fruits[::-1])    # reversed copy

# Mutation methods
fruits.append("elderberry")   # add to end
fruits.insert(1, "avocado")   # insert at index
fruits.remove("banana")       # remove first match
popped = fruits.pop()         # remove and return last

# Useful operations
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(sorted(nums))           # sorted copy
print(min(nums), max(nums))   # 1 9
print(nums.count(1))          # 2 occurrences`,
      output:
        "apple\ndate\n['banana', 'cherry']\n['date', 'cherry', 'banana', 'apple']\n[1, 1, 2, 3, 4, 5, 6, 9]\n1 9\n2",
      runnable: true,
    },
    sections: [
      {
        id: "python-lists-comprehensions",
        heading: "List Comprehensions",
        content:
          "List comprehensions create new lists concisely: `[expr for item in iterable if condition]`. They are more readable than equivalent for-loops and run faster because the loop runs in C under the hood.\n\nNested comprehensions flatten 2D structures: `[n for row in matrix for n in row]`. For very large sequences, use a generator expression `(expr for ...)` to avoid building the whole list in memory.",
        codeExamples: [
          {
            language: "Python",
            label: "Comprehension patterns",
            code: `# Squares of even numbers 0-9
evens_sq = [x**2 for x in range(10) if x % 2 == 0]
print(evens_sq)   # [0, 4, 16, 36, 64]

# Flatten a 2-D list
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [n for row in matrix for n in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Transform strings
words = ["hello", "world", "python"]
upper = [w.upper() for w in words if len(w) > 4]
print(upper)  # ['HELLO', 'WORLD', 'PYTHON']`,
            output:
              "[0, 4, 16, 36, 64]\n[1, 2, 3, 4, 5, 6, 7, 8, 9]\n['HELLO', 'WORLD', 'PYTHON']",
            runnable: true,
          },
        ],
      },
      {
        id: "python-lists-sorting",
        heading: "Sorting and Searching",
        content:
          "`sorted(iterable)` returns a new sorted list (non-destructive). `list.sort()` sorts in place. Both accept a `key` function: `sorted(words, key=len)` sorts by length. Add `reverse=True` for descending order.\n\n`in` operator for membership: `'apple' in fruits` runs in O(n). For fast O(1) lookup convert to a set: `fruit_set = set(fruits)`. Use `bisect` module for binary search on already-sorted lists.",
      },
    ],
    commonMistakes: [
      "Using `list.sort()` when you need the original unchanged — use `sorted()` for a copy",
      "Iterating over a list while modifying it — iterate over a copy: `for item in list[:]:`",
      "Using `list.append()` in a loop to build results when a comprehension is cleaner and faster",
    ],
    bestPractices: [
      "Prefer `enumerate(list)` over `range(len(list))` when you need both index and value",
      "Use `zip(list1, list2)` to iterate over two lists in parallel without manual indexing",
      "Unpack fixed-length lists with tuple unpacking: `a, b, c = [1, 2, 3]`",
    ],
  },
  {
    id: "python-dicts",
    domain: "Python",
    title: "Dictionaries in Python",
    breadcrumb: ["Python", "Dictionaries"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Dictionaries are Python's key-value store, backed by a hash table for O(1) average lookups. They are ordered (Python 3.7+) and mutable.",
    prerequisites: ["Python Variables & Data Types", "Python Lists"],
    relatedTopics: ["python-functions", "python-oop"],
    content:
      "A dictionary maps unique keys to values. Create with curly braces: `d = {'name': 'Alice', 'age': 25}` or `dict(name='Alice', age=25)`. Keys must be hashable (strings, ints, tuples) — lists and dicts cannot be keys.\n\nAccess with `d['key']` (raises KeyError if missing) or `d.get('key', default)` (returns default instead). As of Python 3.7 dicts maintain insertion order.",
    codeExample: {
      language: "Python",
      code: `student = {"name": "Mayank", "age": 20, "gpa": 3.9}

# Access
print(student["name"])              # Mayank
print(student.get("grade", "N/A"))  # N/A (safe)

# Mutation
student["age"] = 21
student["college"] = "IIT Delhi"
del student["gpa"]

# Iteration
for key, value in student.items():
    print(f"{key}: {value}")

# Dict comprehension
scores = {"Alice": 88, "Bob": 72, "Carol": 95}
grade = {k: "A" if v >= 90 else "B" if v >= 80 else "C"
         for k, v in scores.items()}
print(grade)  # {'Alice': 'B', 'Bob': 'C', 'Carol': 'A'}`,
      output:
        "Mayank\nN/A\nname: Mayank\nage: 21\ncollege: IIT Delhi\n{'Alice': 'B', 'Bob': 'C', 'Carol': 'A'}",
      runnable: true,
    },
    sections: [
      {
        id: "python-dicts-methods",
        heading: "Essential Dict Methods",
        content:
          "`dict.keys()`, `dict.values()`, `dict.items()` return view objects — they reflect changes to the dict in real time. Convert to lists if you need a snapshot: `list(d.keys())`.\n\n`dict.update(other)` merges another dict (overwriting duplicates). Python 3.9+ merge operator: `merged = d1 | d2`. `dict.setdefault(key, default)` inserts the default only if key is absent — useful for grouping patterns. `collections.defaultdict(list)` eliminates the need for setdefault entirely.",
        codeExamples: [
          {
            language: "Python",
            label: "Grouping with defaultdict",
            code: `from collections import defaultdict

words = ["apple", "ant", "banana", "bat", "cherry"]
by_letter = defaultdict(list)
for w in words:
    by_letter[w[0]].append(w)

print(dict(by_letter))
# {'a': ['apple', 'ant'], 'b': ['banana', 'bat'], 'c': ['cherry']}`,
            output:
              "{'a': ['apple', 'ant'], 'b': ['banana', 'bat'], 'c': ['cherry']}",
            runnable: true,
          },
        ],
      },
      {
        id: "python-dicts-nested",
        heading: "Nested Dictionaries & JSON",
        content:
          "Dictionaries nest naturally and map directly to JSON. Use `json.dumps(d)` to serialize a dict to a JSON string and `json.loads(text)` to parse it back. `json.dump(d, file)` writes to a file; `json.load(file)` reads it.\n\nFor deeply nested access, use `dict.get` chains: `d.get('user', {}).get('name')`. Python's `**` unpacking merges dicts inline: `{**defaults, **overrides}`.",
      },
    ],
    commonMistakes: [
      "Using `d['key']` instead of `d.get('key')` when the key might be absent — KeyError crashes the program",
      "Iterating over `d.keys()` while deleting keys — raises RuntimeError; iterate over `list(d.keys())`",
      "Using a list as a dict key — lists are unhashable; use a tuple instead",
    ],
    bestPractices: [
      "Use `dict.get(key, default)` for safe access with a fallback value",
      "Use `collections.Counter` for frequency counting instead of manual dict loops",
      "Prefer `{**d1, **d2}` (Python 3.5+) or `d1 | d2` (Python 3.9+) to merge dicts",
    ],
  },
  {
    id: "python-functions",
    domain: "Python",
    title: "Functions in Python",
    breadcrumb: ["Python", "Functions"],
    difficulty: "Beginner" as const,
    readTime: "8 min",
    summary:
      "Functions are first-class objects in Python. Understanding parameters, return values, closures, and decorators unlocks powerful patterns.",
    prerequisites: ["Python Variables & Data Types", "Python Lists"],
    relatedTopics: ["python-oop", "python-exceptions"],
    content:
      "Define functions with `def`. Parameters can have default values, be positional-only (before `/`), keyword-only (after `*`), or accept arbitrary counts (*args for positional, **kwargs for keyword). Type annotations document intent without enforcement.\n\nFunctions are first-class: assign to variables, pass as arguments, return from other functions. `lambda x: x*2` creates an anonymous single-expression function — useful for short callbacks but prefer named functions for clarity.",
    codeExample: {
      language: "Python",
      code: `# Type-annotated function with default
def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

print(greet("Mayank"))             # Hello, Mayank!
print(greet("Alice", "Hi"))        # Hi, Alice!

# *args and **kwargs
def summarize(*args, sep: str = ", ") -> str:
    return sep.join(str(a) for a in args)

print(summarize(1, 2, 3))          # 1, 2, 3
print(summarize("a", "b", sep="-"))  # a-b

# Higher-order function
def apply(func, values):
    return [func(v) for v in values]

result = apply(lambda x: x**2, [1, 2, 3, 4])
print(result)  # [1, 4, 9, 16]`,
      output: "Hello, Mayank!\nHi, Alice!\n1, 2, 3\na-b\n[1, 4, 9, 16]",
      runnable: true,
    },
    sections: [
      {
        id: "python-functions-closures",
        heading: "Closures and nonlocal",
        content:
          "A closure is a function that captures variables from its enclosing scope even after that scope has finished. The captured variables live on in the closure's `__closure__` attribute.\n\nUse `nonlocal` inside a nested function to modify (not just read) a variable in the enclosing scope. Closures are the foundation of decorators, factory functions, and callback patterns.",
        codeExamples: [
          {
            language: "Python",
            label: "Counter factory using closure",
            code: `def make_counter(start: int = 0):
    count = start
    def increment(step: int = 1):
        nonlocal count
        count += step
        return count
    return increment

counter = make_counter(10)
print(counter())    # 11
print(counter(5))   # 16
print(counter())    # 17`,
            output: "11\n16\n17",
            runnable: true,
          },
        ],
      },
      {
        id: "python-functions-decorators",
        heading: "Decorators",
        content:
          "A decorator is a function that wraps another function to add behaviour. The `@decorator` syntax is shorthand for `func = decorator(func)`. Use `functools.wraps(func)` inside decorators to preserve the wrapped function's name and docstring.\n\nCommon uses: logging, timing, authentication, caching (`@functools.lru_cache`), retry logic. Stack multiple decorators — they apply bottom-up.",
      },
    ],
    commonMistakes: [
      "Using mutable default arguments like `def f(items=[])` — the list is created once and shared across all calls",
      "Capturing loop variables in closures — all closures see the final value; use default arg `lambda i=i:` to snapshot",
      "Forgetting to call a decorator with parentheses when it takes arguments: `@retry(3)` not `@retry`",
    ],
    bestPractices: [
      "Use `None` as the default for mutable parameters and create the object inside the function body",
      "Apply `@functools.lru_cache(maxsize=128)` to pure functions with repeated inputs for free memoization",
      "Keep functions small and single-purpose — if it needs extensive comments explaining steps, split it",
    ],
  },
  {
    id: "python-oop",
    domain: "Python",
    title: "Classes & OOP in Python",
    breadcrumb: ["Python", "Classes & OOP"],
    difficulty: "Intermediate" as const,
    readTime: "10 min",
    summary:
      "Python's object-oriented model uses classes as blueprints for objects. Mastering __init__, inheritance, encapsulation, polymorphism, and dunder methods is essential for maintainable Python code.",
    prerequisites: ["Python Functions", "Python Variables & Data Types"],
    relatedTopics: ["python-exceptions", "python-file-io"],
    content:
      "A class is a blueprint for objects. The `__init__` method initialises instance attributes; `self` refers to the current instance. Class attributes are shared across all instances while instance attributes are unique per object.\n\nInheritance lets a child class extend a parent. Use `super()` to call the parent's `__init__`. Dunder (magic) methods like `__str__`, `__repr__`, `__len__`, and `__eq__` integrate objects with Python built-ins. Use `@dataclass` to auto-generate boilerplate.",
    codeExample: {
      language: "Python",
      code: `from dataclasses import dataclass

@dataclass
class Animal:
    name: str
    sound: str

    def speak(self) -> str:
        return f"{self.name} says {self.sound}"

class Dog(Animal):
    def __init__(self, name: str):
        super().__init__(name, "Woof")

    def fetch(self, item: str) -> str:
        return f"{self.name} fetched the {item}!"

dog = Dog("Buddy")
print(dog.speak())        # Buddy says Woof
print(dog.fetch("ball"))  # Buddy fetched the ball!
print(repr(dog))          # Dog(name='Buddy', sound='Woof')`,
      output:
        "Buddy says Woof\nBuddy fetched the ball!\nDog(name='Buddy', sound='Woof')",
      runnable: true,
    },
    sections: [
      {
        id: "python-oop-classes",
        heading: "Defining Classes and Encapsulation",
        content:
          "Use `@property` to add validation to attribute access. Single underscore `_attr` is a convention for 'protected', while double underscore `__attr` triggers name mangling to `_ClassName__attr`.\n\nClass attributes (defined at class level) are shared; instance attributes (set in `__init__`) are per-object. `@classmethod` receives the class as first arg (`cls`); `@staticmethod` receives no implicit first arg.",
        codeExamples: [
          {
            language: "Python",
            label: "Property with validation",
            code: `class BankAccount:
    def __init__(self, owner: str, balance: float = 0):
        self.owner = owner
        self.__balance = balance  # private

    @property
    def balance(self) -> float:
        return self.__balance

    def deposit(self, amount: float):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.__balance += amount

acc = BankAccount("Alice", 1000)
acc.deposit(500)
print(acc.balance)  # 1500`,
            output: "1500",
            runnable: true,
          },
        ],
      },
      {
        id: "python-oop-inheritance",
        heading: "Inheritance and Polymorphism",
        content:
          "Python supports multiple inheritance. The MRO (Method Resolution Order) resolves which method to call — inspect with `ClassName.__mro__`. Abstract base classes (`from abc import ABC, abstractmethod`) formally define interfaces; subclasses must implement `@abstractmethod` methods.\n\nDuck typing means Python checks behaviour, not type — if it has a `speak()` method, you can call it regardless of class.",
        codeExamples: [
          {
            language: "Python",
            label: "Abstract base class",
            code: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...

    def describe(self) -> str:
        return f"{type(self).__name__} area={self.area():.2f}"

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): import math; return math.pi * self.r**2

class Rectangle(Shape):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return self.w * self.h

for s in [Circle(5), Rectangle(4, 6)]:
    print(s.describe())`,
            output: "Circle area=78.54\nRectangle area=24.00",
            runnable: true,
          },
        ],
      },
    ],
    commonMistakes: [
      "Using mutable default arguments in __init__ (e.g., items=[]) — shared across all instances",
      "Forgetting super().__init__() in child class — parent state not initialized",
      "Not implementing __repr__ — debugging is painful without a meaningful string representation",
    ],
    bestPractices: [
      "Use @dataclass for simple data containers to eliminate boilerplate",
      "Prefer composition over inheritance for code reuse — favour has-a over is-a",
      "Use ABC and @abstractmethod to enforce interface contracts across class hierarchies",
    ],
  },
  {
    id: "python-file-io",
    domain: "Python",
    title: "File I/O in Python",
    breadcrumb: ["Python", "File I/O"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Python makes reading and writing files simple. The with statement ensures files are always closed, and pathlib provides a clean object-oriented path API.",
    prerequisites: ["Python Functions", "Python Exceptions"],
    relatedTopics: ["python-exceptions", "python-oop"],
    content:
      "Open files with `open(path, mode)`. Modes: `'r'` (read, default), `'w'` (write, truncates), `'a'` (append), `'b'` suffix for binary (`'rb'`, `'wb'`). Always use the `with` statement — it automatically closes the file even if an exception occurs.\n\n`pathlib.Path` is the modern way to work with paths. It works on Windows, Mac, and Linux. Combine paths with the `/` operator: `Path('data') / 'users.csv'`.",
    codeExample: {
      language: "Python",
      code: `from pathlib import Path

# Write a file
output = Path("notes.txt")
output.write_text("Line 1\\nLine 2\\nLine 3")

# Read entire file
text = output.read_text()
print(text)

# Read line by line (memory efficient for large files)
with open("notes.txt") as f:
    for line in f:
        print(line.strip())

# Work with paths
data_dir = Path("data")
data_dir.mkdir(exist_ok=True)

for p in Path(".").glob("*.txt"):
    print(p.name, p.stat().st_size)`,
      output: "Line 1\nLine 2\nLine 3\nLine 1\nLine 2\nLine 3\nnotes.txt 20",
      runnable: true,
    },
    sections: [
      {
        id: "python-fileio-json-csv",
        heading: "JSON and CSV Files",
        content:
          "JSON: `json.dump(data, f)` writes, `json.load(f)` reads. Use `indent=2` for pretty printing. `json.dumps()` / `json.loads()` work with strings instead of files.\n\nCSV: use the `csv` module. `csv.reader(f)` iterates rows as lists. `csv.DictReader(f)` maps each row to a dict using the header row as keys — much more readable. `csv.writer` / `csv.DictWriter` for writing.",
        codeExamples: [
          {
            language: "Python",
            label: "JSON read and write",
            code: `import json
from pathlib import Path

data = {"students": [{"name": "Mayank", "gpa": 3.9}]}

# Write JSON
path = Path("data.json")
path.write_text(json.dumps(data, indent=2))

# Read JSON
loaded = json.loads(path.read_text())
print(loaded["students"][0]["name"])  # Mayank`,
            output: "Mayank",
            runnable: true,
          },
        ],
      },
      {
        id: "python-fileio-errors",
        heading: "Handling File Errors",
        content:
          "Common file exceptions: `FileNotFoundError` (path doesn't exist), `PermissionError` (no access), `IsADirectoryError` (tried to open a directory as a file). Always wrap file operations in try/except when the path comes from user input.\n\n`Path.exists()` and `Path.is_file()` let you check before opening. Use `Path.stat()` to get modification time, size, and other metadata without opening the file.",
      },
    ],
    commonMistakes: [
      "Not using `with open(...)` — forgetting to close files leaks file descriptors",
      "Opening in write mode `'w'` when you meant append `'a'` — silently overwrites existing content",
      "Reading large files with `f.read()` — loads everything into RAM; iterate lines instead",
    ],
    bestPractices: [
      "Always use `pathlib.Path` for path manipulation — it handles OS differences automatically",
      "Use `with open(path, encoding='utf-8')` explicitly — avoids locale-dependent encoding bugs",
      "Use `tempfile.NamedTemporaryFile` for temporary files — they clean up automatically",
    ],
  },
  {
    id: "python-exceptions",
    domain: "Python",
    title: "Exception Handling in Python",
    breadcrumb: ["Python", "Exception Handling"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Exceptions are Python's error mechanism. Proper use of try/except/finally, custom exception classes, and context managers makes code robust and maintainable.",
    prerequisites: ["Python Functions", "Python OOP"],
    relatedTopics: ["python-file-io", "python-oop"],
    content:
      "Python uses exceptions for error handling. A `try` block contains code that might fail; `except ExceptionType as e` catches specific errors; `else` runs if no exception occurred; `finally` always runs regardless.\n\nAlways catch specific exceptions, not bare `except:` which masks bugs and catches keyboard interrupts. The exception hierarchy lets you catch broad types (Exception catches almost all runtime errors) or narrow ones (ValueError, TypeError, KeyError).",
    codeExample: {
      language: "Python",
      code: `def safe_divide(a: float, b: float) -> float:
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")
        return 0.0
    except TypeError as e:
        raise ValueError(f"Inputs must be numbers: {e}") from e
    else:
        print(f"Result: {result}")
        return result
    finally:
        print("Division attempted")

safe_divide(10, 2)   # Result: 5.0, then Division attempted
safe_divide(5, 0)    # Cannot divide by zero, then Division attempted`,
      output:
        "Result: 5.0\nDivision attempted\nCannot divide by zero\nDivision attempted",
      runnable: true,
    },
    sections: [
      {
        id: "python-exc-custom",
        heading: "Custom Exception Classes",
        content:
          "Define custom exceptions by subclassing `Exception` (or a more specific built-in). Add extra attributes to carry context. Use a hierarchy of exceptions for your domain — catch the base type when you want to handle any sub-type.\n\n`raise ExceptionType(message) from original_exc` chains exceptions — the original cause is preserved in `__cause__` and shown in the traceback, making debugging much easier.",
        codeExamples: [
          {
            language: "Python",
            label: "Custom exception hierarchy",
            code: `class AppError(Exception):
    """Base for all app errors."""

class ValidationError(AppError):
    def __init__(self, field: str, message: str):
        self.field = field
        super().__init__(f"{field}: {message}")

class NotFoundError(AppError):
    pass

try:
    raise ValidationError("email", "must contain @")
except ValidationError as e:
    print(f"Validation failed - {e.field}: {e}")
except AppError as e:
    print(f"App error: {e}")`,
            output: "Validation failed - email: email: must contain @",
            runnable: true,
          },
        ],
      },
      {
        id: "python-exc-context-managers",
        heading: "Context Managers",
        content:
          "The `with` statement calls `__enter__` at the start and `__exit__` at the end (even on exception). This is the pattern behind `open()`, database connections, locks, and network sessions.\n\nCreate your own context manager with `contextlib.contextmanager` — yield once in a `try/finally` block. Or implement `__enter__` and `__exit__` on a class. This ensures cleanup always runs.",
      },
    ],
    commonMistakes: [
      "Catching `Exception` or bare `except:` — masks bugs; always catch the narrowest type you expect",
      "Swallowing exceptions silently with `except: pass` — errors disappear, bugs multiply",
      "Not using `raise ... from e` when re-raising — loses the original traceback context",
    ],
    bestPractices: [
      "Use `logging.exception('msg')` inside except blocks to capture the full traceback",
      "Raise exceptions at the detection site; catch them only where you can meaningfully handle them",
      "Prefer context managers over manual try/finally for resource cleanup",
    ],
  },

  // ── C Programming ───────────────────────────────────────────────────────────
  {
    id: "c-variables-data-types",
    domain: "C Programming",
    title: "Variables & Data Types in C",
    breadcrumb: ["C Programming", "Variables & Data Types"],
    content:
      "C is a statically typed language — every variable must be declared with a type before use. Fundamental types include int (integer), float (single-precision decimal), double (double-precision decimal), char (single character), and void (no value).\n\nThe size of these types is platform-dependent. Use sizeof(type) to check. Common sizes: int is 4 bytes, char is 1 byte, double is 8 bytes. Modifiers like unsigned, long, and short adjust range and size.\n\nVariables in C must be declared before any statements in a block (in C89). In C99 and later they can be declared anywhere. Always initialise variables before reading them — uninitialized variables hold garbage values in C.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int main() {
    int age = 20;
    float gpa = 3.85f;
    double pi = 3.14159265358979;
    char grade = 'A';
    unsigned int count = 0;

    printf("Age: %d\\n", age);
    printf("GPA: %.2f\\n", gpa);
    printf("Pi: %.10f\\n", pi);
    printf("Grade: %c\\n", grade);

    // sizeof
    printf("int size: %zu bytes\\n", sizeof(int));
    printf("double size: %zu bytes\\n", sizeof(double));

    return 0;
}`,
    },
  },
  {
    id: "c-control-flow",
    domain: "C Programming",
    title: "Control Flow in C",
    breadcrumb: ["C Programming", "Control Flow"],
    content:
      "C provides several control flow constructs. Conditional branching uses if, else if, else, and switch. The switch statement compares an integer or character expression against case labels and requires break to prevent fall-through.\n\nLooping constructs: for (counter-controlled), while (condition-controlled), do-while (executes at least once). Use break to exit a loop early, continue to skip the rest of the current iteration, and goto to jump to a labelled statement (avoid in modern code).\n\nNested loops are common for processing 2D arrays or generating combinations. Always ensure loop termination conditions are reachable to avoid infinite loops.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int main() {
    // for loop — print 1..5
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    // while with break
    int n = 100;
    while (n > 1) {
        if (n % 2 == 0) n /= 2;
        else n = 3 * n + 1;
        if (n == 1) break;
    }

    // switch
    char ch = 'B';
    switch (ch) {
        case 'A': printf("Excellent\\n"); break;
        case 'B': printf("Good\\n");      break;
        default:  printf("Try harder\\n");
    }
    return 0;
}`,
    },
  },
  // ── Java ──────────────────────────────────────────────────────────────────────
  {
    id: "java-classes-objects",
    domain: "Java",
    title: "Java Classes & Objects",
    breadcrumb: ["Java", "Classes & Objects"],
    content:
      "Java is a strongly typed, object-oriented language where everything (except primitives) is an object. A class is a template that defines fields (state) and methods (behavior). An object is a runtime instance of a class created with the new keyword.\n\nAccess modifiers control visibility: public (anywhere), protected (package + subclasses), package-private (default, same package), private (class only). Encapsulation means keeping fields private and exposing them through public getters/setters.\n\nConstructors initialise an object's state. The this keyword refers to the current instance. Java supports constructor overloading and method overloading — multiple signatures with different parameter types or counts.",
    codeExample: {
      language: "Java",
      code: `public class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    public double getBalance() { return balance; }

    @Override
    public String toString() {
        return owner + ": $" + balance;
    }
}`,
    },
  },
  {
    id: "java-collections",
    domain: "Java",
    title: "Java Collections Framework",
    breadcrumb: ["Java", "Collections Framework"],
    content:
      "The Java Collections Framework provides interfaces and implementations for common data structures. Core interfaces: Collection, List, Set, Map, Queue, Deque.\n\nCommon implementations: ArrayList (dynamic array, O(1) access), LinkedList (doubly linked, O(1) insert/delete at ends), HashSet (O(1) lookup, no order), TreeSet (sorted, O(log n)), HashMap (O(1) key lookup), TreeMap (sorted keys), PriorityQueue (min-heap by default).\n\nAlways program to the interface (List<String> list = new ArrayList<>()). Use Collections utility methods: sort, shuffle, unmodifiableList, frequency. Iterators provide a safe way to remove elements during traversal.",
    codeExample: {
      language: "Java",
      code: `import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        // ArrayList
        List<String> list = new ArrayList<>(List.of("banana","apple","cherry"));
        Collections.sort(list);
        System.out.println(list); // [apple, banana, cherry]

        // HashMap
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.getOrDefault("Charlie", 0); // 0

        // Iterate with entrySet
        for (Map.Entry<String,Integer> e : scores.entrySet()) {
            System.out.println(e.getKey() + ": " + e.getValue());
        }

        // HashSet — uniqueness
        Set<Integer> unique = new HashSet<>(List.of(1,2,2,3,3,3));
        System.out.println(unique.size()); // 3
    }
}`,
    },
  },
  {
    id: "java-streams",
    domain: "Java",
    title: "Java Streams",
    breadcrumb: ["Java", "Java Streams"],
    content:
      "Java Streams (java.util.stream) provide a declarative way to process sequences of data. A stream pipeline has a source, zero or more intermediate operations (lazy), and one terminal operation (eager, triggers processing).\n\nIntermediate operations: filter, map, flatMap, sorted, distinct, limit, skip, peek. Terminal operations: collect, forEach, reduce, count, findFirst, anyMatch, allMatch, noneMatch, min, max.\n\nStreams don't store data — they process elements on demand. Parallel streams use the ForkJoinPool for concurrent processing, but add overhead for small datasets. Always use Collectors.toList(), toSet(), groupingBy(), or joining() to collect results.",
    codeExample: {
      language: "Java",
      code: `import java.util.*;
import java.util.stream.*;

public class StreamDemo {
    public static void main(String[] args) {
        List<String> names = List.of("Alice","Bob","Charlie","Anna","Brian");

        // Filter, map, collect
        List<String> aNames = names.stream()
            .filter(n -> n.startsWith("A"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());
        System.out.println(aNames); // [ALICE, ANNA]

        // Reduce
        int totalLength = names.stream()
            .mapToInt(String::length)
            .sum();

        // Group by first letter
        Map<Character, List<String>> grouped = names.stream()
            .collect(Collectors.groupingBy(n -> n.charAt(0)));
    }
}`,
    },
  },

  // ── Data Science ────────────────────────────────────────────────────────────
  {
    id: "ds-numpy",
    domain: "Data Science",
    title: "NumPy Arrays",
    breadcrumb: ["Data Science", "NumPy Arrays"],
    content:
      "NumPy is the foundation of scientific computing in Python. Its core object is the ndarray — a homogeneous, multidimensional array of fixed-size elements. NumPy operations are vectorized: they apply element-wise without explicit Python loops, making them orders of magnitude faster.\n\nCreate arrays with np.array(), np.zeros(), np.ones(), np.arange(), np.linspace(), or np.random. Shapes describe dimensions: (3,) is 1D with 3 elements; (3,4) is a 3×4 matrix. Reshape with .reshape(), transpose with .T.\n\nBoolean indexing selects elements by condition. Broadcasting automatically expands arrays with compatible shapes during operations — no need to manually resize.",
    codeExample: {
      language: "Python",
      code: `import numpy as np

# Create arrays
a = np.array([1, 2, 3, 4, 5])
matrix = np.zeros((3, 4))
rng = np.arange(0, 10, 2)  # [0,2,4,6,8]

# Vectorized operations (no loop needed)
squared = a ** 2           # [1,4,9,16,25]
normalized = (a - a.mean()) / a.std()

# 2D operations
m = np.array([[1,2],[3,4],[5,6]])
print(m.shape)   # (3, 2)
print(m.T)       # transpose (2,3)
print(m.sum(axis=0))  # column sums

# Boolean indexing
data = np.random.randn(100)
outliers = data[np.abs(data) > 2]`,
    },
  },
  {
    id: "ds-pandas",
    domain: "Data Science",
    title: "Pandas DataFrames",
    breadcrumb: ["Data Science", "Pandas DataFrames"],
    content:
      "Pandas provides two main data structures: Series (1D labeled array) and DataFrame (2D labeled table). A DataFrame is like a spreadsheet or SQL table — each column is a Series with a shared index.\n\nLoad data with pd.read_csv(), read_json(), read_excel(). Explore with .head(), .info(), .describe(), .shape. Select columns with df['col'] or df[['a','b']]. Filter rows with boolean masks: df[df['age'] > 18].\n\nGroupBy aggregates data: df.groupby('city').agg({'sales': 'sum'}). Merge joins two DataFrames like SQL: pd.merge(df1, df2, on='id', how='left'). Handle missing values with .fillna(), .dropna(), or .interpolate().",
    codeExample: {
      language: "Python",
      code: `import pandas as pd

df = pd.DataFrame({
    'name': ['Alice','Bob','Charlie','Diana'],
    'age': [25, 30, 22, 28],
    'score': [88, 72, 95, 81]
})

# Filter and select
high = df[df['score'] >= 80][['name','score']]

# Add computed column
df['grade'] = df['score'].apply(
    lambda s: 'A' if s >= 90 else 'B' if s >= 80 else 'C'
)

# Aggregation
stats = df.groupby('grade').agg(
    count=('name','count'),
    avg_age=('age','mean')
)
print(stats)`,
    },
  },
  {
    id: "ds-matplotlib",
    domain: "Data Science",
    title: "Data Visualization with Matplotlib",
    breadcrumb: ["Data Science", "Matplotlib"],
    content:
      "Matplotlib is Python's foundational plotting library. Every plot starts with a Figure containing one or more Axes. The pyplot interface (plt) provides MATLAB-like convenience functions.\n\nCommon plot types: plt.plot() for line charts, plt.scatter() for scatter plots, plt.bar() / plt.barh() for bar charts, plt.hist() for histograms, plt.pie() for pie charts, plt.boxplot() for box plots.\n\nCustomize with labels (plt.xlabel, plt.ylabel, plt.title), legends (plt.legend), and styles (plt.style.use). Seaborn builds on Matplotlib to produce statistical plots with less code. Always call plt.tight_layout() before plt.savefig() to avoid clipped labels.",
    codeExample: {
      language: "Python",
      code: `import matplotlib.pyplot as plt
import numpy as np

fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# Line chart
x = np.linspace(0, 2 * np.pi, 100)
axes[0].plot(x, np.sin(x), label='sin')
axes[0].plot(x, np.cos(x), label='cos')
axes[0].set_title('Trig Functions')
axes[0].legend()

# Histogram
data = np.random.normal(50, 10, 1000)
axes[1].hist(data, bins=30, color='steelblue', edgecolor='white')
axes[1].set_title('Normal Distribution')
axes[1].set_xlabel('Value')

plt.tight_layout()
plt.savefig('chart.png', dpi=150)
plt.show()`,
    },
  },

  // ── Machine Learning ────────────────────────────────────────────────────────
  {
    id: "ml-supervised",
    domain: "Machine Learning",
    title: "Supervised Learning Basics",
    breadcrumb: ["Machine Learning", "Supervised Learning"],
    content:
      "Supervised learning trains a model on labelled data — pairs of inputs (features) and known outputs (labels). The model learns a mapping function and generalises to new, unseen inputs. Two main tasks: regression (predicting continuous values) and classification (predicting discrete classes).\n\nThe workflow: collect data, explore (EDA), preprocess (normalise, encode categoricals, handle missing values), split into train/validation/test sets, choose a model, train, evaluate metrics, tune hyperparameters, deploy.\n\nKey metrics: for regression — MAE, RMSE, R². For classification — accuracy, precision, recall, F1-score, AUC-ROC. Never evaluate on training data — always use held-out test sets to measure generalisation.",
    codeExample: {
      language: "Python",
      code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

iris = load_iris()
X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)

preds = model.predict(X_test)
print(classification_report(y_test, preds,
      target_names=iris.target_names))`,
    },
  },
  // ── DevOps ──────────────────────────────────────────────────────────────────
  {
    id: "devops-docker",
    domain: "DevOps",
    title: "Docker Containers",
    breadcrumb: ["DevOps", "Docker Containers"],
    difficulty: "Intermediate",
    readTime: "10 min",
    summary:
      "Docker packages applications and their dependencies into portable containers that run consistently across any environment, eliminating 'works on my machine' problems.",
    prerequisites: [
      "Linux basics",
      "Command line proficiency",
      "Basic networking",
    ],
    relatedTopics: ["devops-cicd", "devops-linux", "cloud-vms-containers"],
    content:
      "Docker packages an application and all its dependencies into a portable container that runs consistently across environments. A Dockerfile defines the container image — base image, dependencies, source code, and startup command.\n\nKey concepts: Image (read-only template), Container (running instance of an image), Registry (repository of images, e.g., Docker Hub), Volume (persistent storage), Network (communication between containers).\n\nBest practices: use official base images, pin versions, minimise layers by combining RUN commands, use .dockerignore to exclude unnecessary files, run as a non-root user for security, and use multi-stage builds to keep production images small.",
    codeExample: {
      language: "Dockerfile",
      code: `# Multi-stage build: Node.js app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS runner
# Non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=appuser:appgroup . .
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]`,
    },
    sections: [
      {
        id: "devops-docker-intro",
        heading: "What is Docker?",
        content:
          "Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. Before Docker, developers had to deal with dependency conflicts between environments — the classic 'it works on my machine' problem.\n\nDocker solves this by packaging everything an application needs — code, runtime, system tools, system libraries, settings — into a standardized unit called a container. Containers are isolated from each other and from the host OS, yet share the OS kernel, making them far more lightweight than virtual machines.",
      },
      {
        id: "devops-docker-concepts",
        heading: "Core Concepts: Images, Containers, Volumes",
        content:
          "An **Image** is a read-only template used to create containers. It's built from a Dockerfile and each instruction in the Dockerfile creates a layer in the image. Layers are cached and shared between images, saving disk space and speeding up builds.\n\nA **Container** is a runnable instance of an image. You can create, start, stop, move, or delete containers using the Docker CLI. Containers are isolated by Linux namespaces and cgroups. When a container is deleted, its filesystem changes are lost unless persisted to a **Volume**.\n\nVolumes store data outside the container lifecycle. They persist when containers are removed and can be shared between multiple containers. Use named volumes (docker volume create mydata) or bind mounts (map host directory into container).",
        codeExamples: [
          {
            language: "Dockerfile",
            label: "Basic Node.js Dockerfile",
            code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`,
            runnable: false,
          },
        ],
      },
      {
        id: "devops-docker-compose",
        heading: "Docker Compose: Multi-Container Apps",
        content:
          "Real applications rarely run as a single container. Docker Compose lets you define and run multi-container applications using a single YAML file. You describe services, networks, and volumes, then bring the whole stack up with `docker compose up`.\n\nCompose automatically creates a network and allows services to communicate by name — your `web` service can reach your `db` service at hostname `db`. This mirrors production infrastructure in a local environment with a single command.",
        codeExamples: [
          {
            language: "YAML",
            label: "docker-compose.yml",
            code: `version: '3.9'
services:
  web:
    build: .
    ports: ["3000:3000"]
    environment:
      DATABASE_URL: postgres://user:pass@db:5432/mydb
    depends_on: [db]
  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
volumes:
  pgdata:`,
            output: "Services started: web on :3000, db on :5432",
            runnable: false,
          },
        ],
      },
      {
        id: "devops-docker-multistage",
        heading: "Multi-Stage Builds for Production",
        content:
          "Multi-stage builds let you use multiple FROM statements in a Dockerfile, each starting a new build stage. You can selectively copy artifacts from one stage to another, leaving behind everything you don't need in the final image. This dramatically reduces production image size by excluding build tools, dev dependencies, and intermediate files.\n\nFor a typical Node.js app, the final image might be 100MB instead of 800MB. Smaller images mean faster deploys, reduced attack surface, and lower storage costs.",
      },
    ],
    commonMistakes: [
      "Running containers as root — always add a non-root USER instruction",
      "Copying node_modules from host into image — always run npm install inside the container",
      "Not using .dockerignore — bloats context and slows builds",
      "Using latest tag in production — pin to specific versions for reproducibility",
    ],
    bestPractices: [
      "Use multi-stage builds to keep production images lean",
      "One process per container — don't run your app and nginx in the same container",
      "Store secrets in environment variables or Docker Secrets, never bake them into images",
      "Pin base image digests for security-critical applications",
    ],
  },
  {
    id: "devops-cicd",
    domain: "DevOps",
    title: "CI/CD Pipelines",
    breadcrumb: ["DevOps", "CI/CD Pipelines"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "CI/CD automates the process of integrating code changes, running tests, and deploying to production — enabling teams to ship software faster and with fewer bugs.",
    prerequisites: [
      "Git & GitHub",
      "Basic shell scripting",
      "Testing fundamentals",
    ],
    relatedTopics: ["devops-docker", "devops-git", "devops-monitoring"],
    content:
      "Continuous Integration (CI) automatically builds and tests code whenever a developer pushes to a shared repository. This catches integration errors early. Continuous Delivery (CD) automatically deploys validated builds to staging or production environments.\n\nA typical CI/CD pipeline: code push → trigger pipeline → install dependencies → run lint/typecheck → run unit tests → build artifact → run integration tests → deploy to staging → run smoke tests → deploy to production.\n\nGitHub Actions, GitLab CI, CircleCI, and Jenkins are popular CI/CD platforms. Store secrets in environment variables, never in code. Use branch protection rules to require passing CI before merging. Blue-green deployments and canary releases minimise downtime and risk.",
    codeExample: {
      language: "YAML",
      code: `# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test -- --coverage

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Deploy to production"`,
    },
    sections: [
      {
        id: "cicd-why",
        heading: "Why CI/CD Matters",
        content:
          "Before CI/CD, developers would work in isolation for days or weeks, then try to merge their changes. Integration hell — where merging diverged branches causes cascading conflicts — was common. CI solves this by integrating code frequently (at least daily) and running automated checks immediately.\n\nCD extends this by automating the deployment pipeline. Instead of a manual release process taking hours or days, teams can deploy multiple times per day with confidence because every change has passed automated gates. Companies like Netflix, Amazon, and Google deploy thousands of times per day.",
      },
      {
        id: "cicd-github-actions",
        heading: "GitHub Actions Deep Dive",
        content:
          "GitHub Actions workflows are defined in YAML files inside `.github/workflows/`. A workflow has triggers (`on:`), jobs, and steps. Jobs run in parallel by default; use `needs:` to chain them sequentially.\n\nSteps can use pre-built actions (`uses: actions/checkout@v4`) or run shell commands (`run: npm test`). Actions encapsulate reusable logic. The GitHub Marketplace has thousands of community actions for Docker builds, cloud deploys, Slack notifications, and more.\n\nSecrets are stored encrypted in repository settings and injected as environment variables: `${{ secrets.API_KEY }}`. Never print secrets in logs — GitHub automatically redacts known secrets, but be careful with dynamic values.",
        codeExamples: [
          {
            language: "YAML",
            label: "Parallel test + deploy workflow",
            code: `jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run lint && npm test

  build-docker:
    runs-on: ubuntu-latest
    needs: lint-and-test
    steps:
      - uses: actions/checkout@v4
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: myapp:\${GITHUB_SHA}`,
            runnable: false,
          },
        ],
      },
      {
        id: "cicd-deployment-strategies",
        heading: "Deployment Strategies",
        content:
          "**Blue-Green Deployment**: Run two identical environments (blue = current prod, green = new version). Switch traffic to green instantly when ready. Roll back by switching back to blue. Zero downtime, instant rollback.\n\n**Canary Release**: Route a small percentage of traffic (e.g., 5%) to the new version. Monitor metrics (error rate, latency). Gradually increase traffic. If issues arise, roll back only the canary. This exposes real users to the change while limiting blast radius.\n\n**Rolling Update**: Gradually replace old pod/instance with new ones. At any point both versions exist. Good for stateless services. Default Kubernetes deployment strategy.",
      },
    ],
    commonMistakes: [
      "Not caching dependencies (npm ci) — makes pipelines unnecessarily slow",
      "Deploying without running tests — defeats the purpose of CI",
      "Storing secrets in code or workflow files — use repository secrets instead",
      "Not setting up branch protection — allows merging without passing CI",
    ],
    bestPractices: [
      "Fail fast — run the quickest checks (lint, typecheck) before slow ones (integration tests)",
      "Keep pipelines under 10 minutes — longer pipelines reduce adoption",
      "Use matrix builds to test across multiple Node/Python/Java versions simultaneously",
      "Add status badges to your README so team can see pipeline health at a glance",
    ],
  },
  {
    id: "devops-git",
    domain: "DevOps",
    title: "Git & Version Control",
    breadcrumb: ["DevOps", "Git & Version Control"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "Git is the foundation of modern software development — understanding branching strategies, rebasing, and Git workflows is essential for any engineer.",
    prerequisites: ["Command line basics", "Text editor usage"],
    relatedTopics: ["devops-cicd", "devops-docker"],
    content:
      "Git tracks changes to files over time, enabling collaboration, history review, and safe experimentation. Every Git repository has commits (snapshots), branches (parallel lines of development), and remotes (shared repositories on servers like GitHub).\n\nBranching strategy: use feature branches (feature/add-login), merge via pull requests with code review, delete branches after merging. Keep main/master always deployable. GitFlow, GitHub Flow, and Trunk-Based Development are common branching strategies.\n\nPowerful Git commands: git rebase (replay commits on top of another branch, cleaner history), git cherry-pick (apply a specific commit to a branch), git bisect (binary search for the commit that introduced a bug), git stash (temporarily shelve changes).",
    codeExample: {
      language: "Dockerfile",
      code: `# Git workflow commands
git init                       # initialise repo
git clone <url>                # clone remote repo
git checkout -b feature/xyz    # create + switch branch
git add -p                     # interactively stage hunks
git commit -m "feat: add login"# commit with message
git push origin feature/xyz    # push branch to remote
git fetch --all --prune        # fetch + clean stale branches
git rebase main                # replay commits onto main
git log --oneline --graph      # visual branch history
git bisect start               # start bug-finding session`,
    },
    sections: [
      {
        id: "git-fundamentals",
        heading: "Git Fundamentals: Commits, Branches, Merges",
        content:
          "A Git commit is a snapshot of your entire repository at a point in time. Each commit has a unique SHA hash, author, timestamp, and parent commit(s). Commits form a directed acyclic graph — the history of your project.\n\nBranches are lightweight pointers to commits. Creating a branch is just writing a 40-character string — it's essentially free. This encourages frequent branching for features, experiments, and bug fixes. `HEAD` is a special pointer to the currently checked-out commit.\n\nMerging combines changes from two branches. Fast-forward merge (when no divergence) just moves the branch pointer forward. Three-way merge creates a merge commit when branches have diverged. Rebase replays your commits on top of the target branch, producing a linear history.",
      },
      {
        id: "git-workflows",
        heading: "Git Workflows for Teams",
        content:
          "**GitHub Flow** is simple: main is always deployable. Create a branch for each feature/fix, open a pull request, get review, merge, deploy. Works well for continuous deployment.\n\n**GitFlow** is more structured: main (production), develop (integration), feature/* (new features), release/* (release prep), hotfix/* (urgent production fixes). Good for versioned software with scheduled releases.\n\n**Trunk-Based Development** — everyone commits to main (or very short-lived branches). Requires strong feature flags, robust CI, and high test coverage. Enables the fastest delivery velocity.",
        codeExamples: [
          {
            language: "Dockerfile",
            label: "Git aliases for productivity",
            code: `# ~/.gitconfig
[alias]
  lg = log --oneline --graph --decorate
  co = checkout
  br = branch
  st = status
  undo = reset HEAD~1 --mixed
  fixup = commit --fixup
  please = push --force-with-lease`,
            runnable: false,
          },
        ],
      },
    ],
    commonMistakes: [
      "Committing directly to main — always use feature branches and pull requests",
      "Writing vague commit messages like 'fix bug' — be specific: 'fix: resolve null pointer in user login'",
      "Force pushing to shared branches — use --force-with-lease and never force push to main",
      "Large infrequent commits — commit small, logical units of work frequently",
    ],
    bestPractices: [
      "Follow Conventional Commits format: feat:, fix:, docs:, refactor: for readable history",
      "Use git commit --amend only before pushing — amending shared history causes conflicts",
      "Set up a .gitignore before first commit — adding it later still leaves files in history",
      "Use git blame and git log -- <file> to understand why code was written a certain way",
    ],
  },
  {
    id: "devops-linux",
    domain: "DevOps",
    title: "Linux for DevOps",
    breadcrumb: ["DevOps", "Linux"],
    difficulty: "Beginner",
    readTime: "10 min",
    summary:
      "Linux powers over 90% of servers and all cloud VMs. DevOps engineers must be comfortable navigating the filesystem, managing processes, and automating tasks with shell scripts.",
    prerequisites: ["Basic computing concepts", "What an operating system is"],
    relatedTopics: [
      "devops-docker",
      "devops-monitoring",
      "cloud-vms-containers",
    ],
    content:
      "Linux is the operating system that runs almost all servers, containers, and cloud infrastructure. The shell (bash/zsh) is the primary interface for DevOps work. Key areas: filesystem navigation, file permissions, process management, networking, and shell scripting.\n\nFile permissions: each file has owner, group, and other permissions (read=4, write=2, execute=1). chmod 755 sets rwxr-xr-x. chown changes ownership. Use sudo for elevated commands.\n\nProcess management: ps aux lists running processes. top/htop shows live resource usage. kill -9 <pid> force-kills a process. systemctl manages services (start, stop, restart, status, enable). journalctl reads system logs.",
    codeExample: {
      language: "Dockerfile",
      code: `# Essential Linux commands for DevOps
ls -lah /var/log          # list files with sizes
grep -r "ERROR" /var/log  # search recursively
tail -f app.log           # follow log in real-time
df -h                     # disk usage
free -h                   # memory usage
netstat -tulpn            # open ports and processes
ps aux | grep node        # find node processes
chmod +x deploy.sh        # make script executable
ssh -i ~/.ssh/key user@host # connect via SSH
scp file.tar.gz user@host:/tmp # copy file to server
rsync -avz src/ user@host:/dest # sync directory`,
    },
    sections: [
      {
        id: "linux-filesystem",
        heading: "Linux Filesystem Structure",
        content:
          "Linux uses a single root filesystem starting at `/`. Key directories:\n- `/etc` — system configuration files (nginx, systemd, hosts)\n- `/var` — variable data: logs (`/var/log`), caches, databases\n- `/usr` — user binaries (`/usr/bin`) and libraries (`/usr/lib`)\n- `/home` — user home directories\n- `/tmp` — temporary files, cleared on reboot\n- `/proc` — virtual filesystem showing running processes and kernel parameters\n- `/dev` — device files (disks, terminals)\n\nEverything in Linux is a file — devices, processes, sockets. This uniform interface is what makes shell scripting so powerful.",
      },
      {
        id: "linux-scripting",
        heading: "Shell Scripting for Automation",
        content:
          "Shell scripts automate repetitive tasks. A bash script starts with a shebang (`#!/bin/bash`) and can contain variables, conditionals, loops, and function calls.\n\nKey patterns: `$?` checks the exit code of the last command (0 = success). `set -e` exits script on any error. `set -o pipefail` catches pipe failures. Use `$(command)` for command substitution. `$1`, `$2` are positional arguments.",
        codeExamples: [
          {
            language: "Dockerfile",
            label: "Bash deployment script",
            code: `#!/bin/bash
set -e
set -o pipefail

APP_NAME="myapp"
VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

echo "Deploying $APP_NAME v$VERSION..."
docker pull "myregistry/$APP_NAME:$VERSION"
docker stop "$APP_NAME" || true
docker rm "$APP_NAME" || true
docker run -d --name "$APP_NAME" \\
  -p 3000:3000 \\
  "myregistry/$APP_NAME:$VERSION"
echo "Deployed successfully!"`,
            runnable: false,
          },
        ],
      },
    ],
    commonMistakes: [
      "Not using set -e in scripts — script continues after errors silently",
      "Hardcoding paths like /home/user — use $HOME or relative paths for portability",
      "Running everything as root in production — creates unnecessary security risk",
      "Not quoting variables — unquoted $VAR breaks on values with spaces",
    ],
    bestPractices: [
      "Use shellcheck to lint bash scripts for common errors",
      "Always redirect stderr: command 2>&1 | tee output.log",
      "Use cron for scheduled tasks: crontab -e to edit, 0 2 * * * for 2am daily",
      "Set up SSH key-based authentication — disable password login on servers",
    ],
  },
  {
    id: "devops-monitoring",
    domain: "DevOps",
    title: "Monitoring & Observability",
    breadcrumb: ["DevOps", "Monitoring"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "Observability gives you visibility into what your system is doing in production. The three pillars — metrics, logs, and traces — help you detect, diagnose, and resolve incidents faster.",
    prerequisites: ["Docker Containers", "Basic networking", "REST APIs"],
    relatedTopics: ["devops-cicd", "devops-linux", "cloud-serverless"],
    content:
      "Observability is the ability to infer the internal state of a system from its external outputs. The three pillars are metrics (quantitative measurements over time), logs (discrete events with context), and traces (request flows across services).\n\nPrometheus scrapes metrics from services and stores time-series data. Grafana visualizes Prometheus metrics with dashboards. Alertmanager sends alerts when metrics breach thresholds. The ELK Stack (Elasticsearch, Logstash, Kibana) or Loki for log aggregation. Jaeger or Zipkin for distributed tracing.\n\nKey metrics to track: error rate, latency (p50, p95, p99 percentiles), throughput (requests per second), saturation (resource utilization). The RED method (Rate, Errors, Duration) works for services. The USE method (Utilization, Saturation, Errors) works for resources.",
    codeExample: {
      language: "YAML",
      code: `# prometheus.yml — scrape config
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'node-app'
    static_configs:
      - targets: ['app:3000']
    metrics_path: /metrics

  - job_name: 'postgres'
    static_configs:
      - targets: ['postgres-exporter:9187']

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']`,
    },
    sections: [
      {
        id: "monitoring-metrics",
        heading: "Metrics with Prometheus and Grafana",
        content:
          "Prometheus uses a pull model — it scrapes metric endpoints at configured intervals. Applications expose metrics at `/metrics` in the Prometheus text format. The `prom-client` library (Node.js) or `prometheus_client` (Python) make this easy.\n\nMetric types: Counter (monotonically increasing — request count, errors), Gauge (can go up or down — active connections, memory), Histogram (samples observations into buckets — request duration), Summary (similar to Histogram but calculates quantiles on client side).\n\nGrafana connects to Prometheus as a data source and lets you build dashboards. Key panels: time-series graphs, stat (single number), heatmap, and alerting panels. Set up alerting rules to notify on Slack, PagerDuty, or email when error rate spikes.",
      },
      {
        id: "monitoring-logs",
        heading: "Structured Logging",
        content:
          "Logs are the backbone of debugging production issues. Always emit structured logs (JSON) rather than unstructured strings — they're queryable. Include fields: timestamp, level (INFO/WARN/ERROR), message, request_id (correlation ID), service name, and relevant context.\n\nGood log levels: DEBUG (verbose, dev only), INFO (significant events), WARN (unexpected but handled), ERROR (operation failed, needs attention), FATAL (app cannot continue). Log at WARN or ERROR in production — DEBUG floods storage.\n\nCentralized logging: ship logs to Elasticsearch (via Logstash or Filebeat) or use a managed service like Datadog, Papertrail, or CloudWatch Logs. The key is being able to search across all services by correlation ID to trace a request end-to-end.",
      },
    ],
    commonMistakes: [
      "Monitoring only uptime — track error rates and latency percentiles too",
      "Setting alert thresholds too low — alert fatigue causes teams to ignore real incidents",
      "Logging sensitive data (passwords, tokens) — scrub PII from logs",
      "Not using correlation IDs — impossible to trace a request across microservices",
    ],
    bestPractices: [
      "Use structured JSON logging from day one — unstructured logs are hard to query at scale",
      "Track the four golden signals: latency, traffic, errors, saturation",
      "Set up synthetic monitoring — scheduled tests that hit key user journeys",
      "Define SLOs (Service Level Objectives) before incidents happen, not after",
    ],
  },

  // ── Android ──────────────────────────────────────────────────────────────────
  {
    id: "android-activity-lifecycle",
    domain: "Android",
    title: "Activity Lifecycle",
    breadcrumb: ["Android", "Activity Lifecycle"],
    content:
      "An Activity represents a single screen in an Android app. Android manages its lifecycle through callbacks: onCreate (initialise UI), onStart (becomes visible), onResume (interactive, in foreground), onPause (partially hidden), onStop (no longer visible), onDestroy (killed by system or finish()).\n\nonCreate receives a Bundle with saved state. Save temporary UI state in onSaveInstanceState; restore it in onCreate or onRestoreInstanceState. Use ViewModel to survive configuration changes like screen rotation without re-fetching data.\n\nThe back stack manages activity navigation. startActivity() pushes a new activity; finish() pops it. Modern Android favors single-activity architecture with Fragments and Jetpack Navigation over multiple activities.",
    codeExample: {
      language: "Kotlin",
      code: `class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private val viewModel: MainViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        viewModel.data.observe(this) { items ->
            // Update UI safely — runs on main thread
            adapter.submitList(items)
        }
    }

    override fun onResume() {
        super.onResume()
        // Start sensors, animations, timers
    }

    override fun onPause() {
        super.onPause()
        // Stop sensors, save draft data
    }
}`,
    },
  },
  {
    id: "android-room",
    domain: "Android",
    title: "Room Database",
    breadcrumb: ["Android", "Room Database"],
    content:
      "Room is Android's abstraction layer over SQLite. It eliminates boilerplate SQL while providing compile-time query verification. Three core components: Entity (@Entity annotated data class = table), DAO (@Dao interface with query methods), Database (@Database abstract class that ties them together).\n\nRooms queries return LiveData or Flow for reactive updates — UI automatically refreshes when data changes. Always perform database operations off the main thread using coroutines (suspend functions) or RxJava.\n\nRoom supports relations (one-to-many, many-to-many) via @Relation, @Embedded, and junction tables. Migrations handle schema changes between app versions — always define migrations to avoid data loss on update.",
    codeExample: {
      language: "Kotlin",
      code: `@Entity(tableName = "tasks")
data class Task(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val title: String,
    val isDone: Boolean = false
)

@Dao
interface TaskDao {
    @Query("SELECT * FROM tasks ORDER BY id DESC")
    fun getAllTasks(): Flow<List<Task>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTask(task: Task)

    @Delete
    suspend fun deleteTask(task: Task)
}

@Database(entities = [Task::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun taskDao(): TaskDao
}`,
    },
  },

  // ── Android new topics ───────────────────────────────────────────────────────
  {
    id: "android-activities",
    domain: "Android",
    title: "Activities & Intents",
    breadcrumb: ["Android", "Activities & Intents"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "Activities are the building blocks of Android UIs. Intents are the messaging objects that let activities communicate, start services, and pass data between components.",
    prerequisites: [
      "Kotlin basics",
      "Android Studio setup",
      "Activity Lifecycle",
    ],
    relatedTopics: [
      "android-intents",
      "android-layouts",
      "android-permissions",
    ],
    content:
      "An Activity is a single screen with a user interface. Every Android app has at least one Activity. Activities are declared in AndroidManifest.xml and one must be marked as the launcher activity with an intent-filter for MAIN action and LAUNCHER category.\n\nAn Intent is a messaging object that requests an action from another component. Explicit intents specify the target component by class name. Implicit intents declare a general action and let the system find a matching component.\n\nPassing data between activities: use putExtra() to attach data to an intent and getStringExtra()/getIntExtra() to retrieve it in the receiving activity. For returning results, use the Activity Result API with registerForActivityResult().",
    codeExample: {
      language: "Kotlin",
      code: `// Start another Activity with data
val intent = Intent(this, DetailActivity::class.java).apply {
    putExtra("ITEM_ID", item.id)
    putExtra("ITEM_NAME", item.name)
}
startActivity(intent)

// Receive data in DetailActivity
class DetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val itemId = intent.getStringExtra("ITEM_ID")
        val itemName = intent.getStringExtra("ITEM_NAME")
        // Use itemId and itemName...
    }
}

// Implicit intent — open a URL
val webIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://example.com"))
startActivity(webIntent)`,
      output: "DetailActivity opens with received data",
    },
    sections: [
      {
        id: "android-activities-lifecycle",
        heading: "Activity Lifecycle Callbacks",
        content:
          "Android manages Activity instances through a well-defined lifecycle. Understanding when each callback fires is critical for avoiding crashes, memory leaks, and data loss.\n\nonCreate() — initialize UI, bind views, observe LiveData. Called once when activity is first created.\nonStart() — activity becomes visible but not interactive.\nonResume() — activity is in the foreground and interactive. Start camera, location, etc. here.\nonPause() — user is leaving; activity partly obscured. Save draft data, pause animations.\nonStop() — activity is completely hidden. Release heavy resources.\nonDestroy() — final cleanup. Called before the activity is destroyed.",
      },
      {
        id: "android-intents-types",
        heading: "Explicit vs Implicit Intents",
        content:
          "**Explicit Intents** directly name the target component. Use these to start activities within your own app — you know exactly which component to start.\n\n**Implicit Intents** declare an action without specifying a component. Android finds matching apps via the intent filter system. Common actions: ACTION_VIEW (open URL, display data), ACTION_SEND (share content), ACTION_DIAL (open phone dialer), ACTION_PICK (pick from gallery).\n\nAlways check if any app can handle your implicit intent with `resolveActivity()` — crashing on devices without a matching app is a common bug.",
        codeExamples: [
          {
            language: "Kotlin",
            label: "Safe implicit intent with check",
            code: `// Always check before starting implicit intent
val shareIntent = Intent(Intent.ACTION_SEND).apply {
    type = "text/plain"
    putExtra(Intent.EXTRA_TEXT, "Check out Code & Crush!")
}
if (shareIntent.resolveActivity(packageManager) != null) {
    startActivity(Intent.createChooser(shareIntent, "Share via"))
}`,
            runnable: false,
          },
        ],
      },
    ],
    commonMistakes: [
      "Starting heavy operations in onCreate — use ViewModel and coroutines for async work",
      "Not handling savedInstanceState — UI state is lost on rotation if not saved",
      "Passing large objects via Intent — pass IDs and load data in the receiving activity",
      "Forgetting to declare activities in AndroidManifest.xml",
    ],
    bestPractices: [
      "Use the Activity Result API instead of deprecated startActivityForResult()",
      "Keep Activities thin — delegate business logic to ViewModels",
      "Use NavController for in-app navigation instead of direct Activity starts",
      "Declare android:exported=false for activities not meant to be launched by other apps",
    ],
  },
  {
    id: "android-intents",
    domain: "Android",
    title: "Android Intents Deep Dive",
    breadcrumb: ["Android", "Intents"],
    difficulty: "Intermediate",
    readTime: "7 min",
    summary:
      "Intents are the glue of Android — they let components communicate, share data across apps, and invoke system features like the camera, location, and phone dialer.",
    prerequisites: ["Activities & Intents", "Kotlin basics"],
    relatedTopics: ["android-activities", "android-permissions"],
    content:
      "Beyond starting activities, intents power Android's component model. Broadcast intents (sendBroadcast) communicate system and app events. PendingIntents wrap an intent for deferred execution — used by notifications, alarms, and widgets.\n\nIntent filters in AndroidManifest.xml declare what intents a component can handle. Apps can register to handle file types, URL schemes, or custom actions — this is how 'Open with' dialogs work.\n\nDeep links map URLs to specific screens in your app. Configure them with <intent-filter> including ACTION_VIEW and a <data> element with scheme/host/path. Modern deep linking uses App Links (HTTP/HTTPS) for security.",
    codeExample: {
      language: "Kotlin",
      code: `// Pending Intent for notification action
val actionIntent = Intent(context, NotificationReceiver::class.java).apply {
    action = "ACTION_MARK_READ"
    putExtra("NOTIFICATION_ID", notifId)
}
val pendingIntent = PendingIntent.getBroadcast(
    context, 0, actionIntent,
    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
)

// Notification with action
NotificationCompat.Builder(context, CHANNEL_ID)
    .setContentTitle("New Message")
    .setContentText("You have a new message")
    .addAction(R.drawable.ic_check, "Mark Read", pendingIntent)
    .build()`,
      output: "Notification appears with Mark Read action button",
    },
    sections: [
      {
        id: "android-intents-broadcast",
        heading: "Broadcast Receivers",
        content:
          "BroadcastReceiver listens for system-wide and app-specific broadcast intents. Common system broadcasts: BOOT_COMPLETED, CONNECTIVITY_CHANGE, BATTERY_LOW, ACTION_POWER_CONNECTED. Register in manifest for static receivers or programmatically for dynamic (context-aware) receivers.\n\nFor security, use LocalBroadcastManager for app-internal broadcasts — these can't be intercepted by other apps. For cross-app broadcasts, use permissions to restrict receivers.",
      },
    ],
    commonMistakes: [
      "Using FLAG_MUTABLE PendingIntents without a strict security review — always prefer FLAG_IMMUTABLE",
      "Registering manifest receivers for broadcasts deprecated in newer Android versions",
      "Not unregistering dynamic BroadcastReceivers in onStop/onDestroy — causes memory leaks",
    ],
    bestPractices: [
      "Use WorkManager instead of AlarmManager + BroadcastReceiver for background work",
      "Prefer explicit intents for in-app navigation to avoid intent hijacking",
      "Test deep links with adb shell am start to verify routing before release",
    ],
  },
  {
    id: "android-layouts",
    domain: "Android",
    title: "Layouts & Jetpack Compose",
    breadcrumb: ["Android", "Layouts"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "Android layouts define the visual structure of your app. ConstraintLayout is the gold standard for XML, while Jetpack Compose offers a modern declarative approach.",
    prerequisites: ["Kotlin basics", "Activities & Intents"],
    relatedTopics: ["android-recyclerview", "android-activities"],
    content:
      "XML layouts describe UI structure declaratively. View types: TextView, ImageView, Button, EditText, RecyclerView. Layout types: ConstraintLayout (powerful, flat hierarchy), LinearLayout (simple row/column), FrameLayout (overlapping views), MotionLayout (animations).\n\nConstraintLayout uses constraints to position views relative to each other and the parent. Use the visual editor in Android Studio or write constraints manually: app:layout_constraintTop_toBottomOf, app:layout_constraintStart_toStartOf.\n\nJetpack Compose is the modern UI toolkit — declarative, no XML, state-driven. Composables are Kotlin functions annotated with @Composable. State: remember{} for local state, rememberSaveable{} survives rotation, ViewModel for shared state.",
    codeExample: {
      language: "Kotlin",
      code: `// Jetpack Compose — Card with interaction
@Composable
fun ProductCard(product: Product, onClick: (Product) -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
            .clickable { onClick(product) },
        elevation = CardDefaults.cardElevation(4.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            AsyncImage(
                model = product.imageUrl,
                contentDescription = product.name,
                modifier = Modifier.fillMaxWidth().height(180.dp),
                contentScale = ContentScale.Crop
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(text = product.name, style = MaterialTheme.typography.titleMedium)
            Text(text = "₹\${product.price}", color = MaterialTheme.colorScheme.primary)
        }
    }
}`,
      output: "Material card with image, name, and price renders on screen",
    },
    sections: [
      {
        id: "android-layouts-constraint",
        heading: "ConstraintLayout Best Practices",
        content:
          "ConstraintLayout achieves complex layouts without nesting. Every view needs horizontal and vertical constraints — unconstrained views snap to position (0,0). Use chains (horizontal/vertical) to distribute views evenly. Barriers adapt to the widest/tallest sibling. Guidelines provide fixed anchor lines.\n\nAvoid deeply nested layouts — they hurt rendering performance. ConstraintLayout handles in a single pass what nested LinearLayouts take multiple passes to measure.",
      },
      {
        id: "android-compose-state",
        heading: "State in Jetpack Compose",
        content:
          "In Compose, UI is a function of state. When state changes, Compose recomposes (re-runs) only the affected composables. Use `remember` to survive recompositions. Use `rememberSaveable` to survive configuration changes.\n\nHoist state — lift state up to the lowest common ancestor. Composables that accept state and callbacks (rather than owning state) are more reusable. For complex state, use ViewModel and StateFlow/LiveData.",
      },
    ],
    commonMistakes: [
      "Deeply nesting LinearLayouts — use ConstraintLayout or Compose instead",
      "Calling expensive operations inside composable functions — use LaunchedEffect or remember",
      "Not specifying content descriptions on images — hurts accessibility",
    ],
    bestPractices: [
      "Use Material Design 3 (Material You) components from compose-material3",
      "Migrate to Compose incrementally — ComposeView lets you embed Compose in XML and vice versa",
      "Use LazyColumn/LazyRow in Compose instead of RecyclerView — they're equivalent and Compose-native",
    ],
  },
  {
    id: "android-recyclerview",
    domain: "Android",
    title: "RecyclerView & Adapters",
    breadcrumb: ["Android", "RecyclerView"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "RecyclerView efficiently displays large scrollable lists by recycling off-screen view holders. ListAdapter with DiffUtil is the modern, performant way to build lists.",
    prerequisites: ["Kotlin basics", "Activities & Intents", "Layouts"],
    relatedTopics: ["android-layouts", "android-activities"],
    content:
      "RecyclerView is Android's efficient list/grid component. It recycles (reuses) ViewHolder objects as you scroll, avoiding the memory waste of ListView. Key components: RecyclerView (view), RecyclerView.Adapter (data binding), RecyclerView.ViewHolder (view cache), LayoutManager (positions items).\n\nBest practice: use ListAdapter with DiffUtil for automatic, animated updates when the dataset changes. DiffUtil computes minimal diff on a background thread and dispatches targeted notifyItemChanged/Inserted/Removed calls.\n\nFor grid layouts use GridLayoutManager. For horizontal scrolling use LinearLayoutManager(HORIZONTAL). For staggered grids use StaggeredGridLayoutManager.",
    codeExample: {
      language: "Kotlin",
      code: `class UserAdapter : ListAdapter<User, UserAdapter.ViewHolder>(DIFF_CALLBACK) {

    class ViewHolder(val binding: ItemUserBinding)
        : RecyclerView.ViewHolder(binding.root)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        ViewHolder(ItemUserBinding.inflate(
            LayoutInflater.from(parent.context), parent, false))

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val user = getItem(position)
        holder.binding.name.text = user.name
        holder.binding.root.setOnClickListener { onUserClick(user) }
    }

    companion object {
        val DIFF_CALLBACK = object : DiffUtil.ItemCallback<User>() {
            override fun areItemsTheSame(a: User, b: User) = a.id == b.id
            override fun areContentsTheSame(a: User, b: User) = a == b
        }
    }
}`,
      output: "Smooth scrollable list with animated updates when data changes",
    },
    sections: [
      {
        id: "android-recyclerview-setup",
        heading: "Setting Up RecyclerView",
        content:
          "To use RecyclerView: 1) Add it to your layout XML with an id. 2) Create an item layout XML for each row/card. 3) Create a ViewHolder class that binds view references. 4) Create an Adapter that creates and binds ViewHolders. 5) Set adapter and LayoutManager on the RecyclerView.\n\nWith ViewBinding: `val binding = ItemUserBinding.inflate(...)`. This is type-safe and eliminates `findViewById` calls. Access views directly: `binding.userName.text = user.name`.",
      },
    ],
    commonMistakes: [
      "Calling notifyDataSetChanged() — use DiffUtil instead for animated partial updates",
      "Doing work in onBindViewHolder beyond simple view population — it's called frequently",
      "Not recycling click listeners — set them in onBindViewHolder, not onCreateViewHolder",
    ],
    bestPractices: [
      "Use ConcatAdapter to combine multiple adapters (header + list + footer) in one RecyclerView",
      "Prefetch items off-screen with setInitialPrefetchItemCount on nested RecyclerViews",
      "In Compose, prefer LazyColumn/LazyRow which are idiomatic alternatives",
    ],
  },
  {
    id: "android-permissions",
    domain: "Android",
    title: "Android Permissions",
    breadcrumb: ["Android", "Permissions"],
    difficulty: "Intermediate",
    readTime: "7 min",
    summary:
      "Android's permission system protects user privacy. Runtime permissions (API 23+) require explicit user approval for dangerous permissions like location, camera, and contacts.",
    prerequisites: ["Activities & Intents", "Kotlin basics"],
    relatedTopics: ["android-activities", "android-intents"],
    content:
      "Android permissions are divided into normal (granted automatically at install, like INTERNET) and dangerous (require runtime approval, like ACCESS_FINE_LOCATION, CAMERA, READ_CONTACTS).\n\nFor runtime permissions: check if permission is already granted with checkSelfPermission(). If not, request it with requestPermissions(). Handle the result in onRequestPermissionsResult() (old API) or use the Activity Result API's RequestPermission contract (new).\n\nAndroid 12+ introduces more granular location permissions (COARSE vs FINE). Android 13+ added per-media permissions (READ_MEDIA_IMAGES vs READ_EXTERNAL_STORAGE). Always request minimum necessary permissions and explain why before requesting.",
    codeExample: {
      language: "Kotlin",
      code: `// Modern permission request with Activity Result API
class CameraFragment : Fragment() {
    private val requestCameraPermission =
        registerForActivityResult(ActivityResultContracts.RequestPermission()) { granted ->
            if (granted) {
                openCamera()
            } else {
                showPermissionRationale()
            }
        }

    private fun checkAndRequestCamera() {
        when {
            ContextCompat.checkSelfPermission(
                requireContext(), Manifest.permission.CAMERA
            ) == PackageManager.PERMISSION_GRANTED -> openCamera()

            shouldShowRequestPermissionRationale(Manifest.permission.CAMERA) ->
                showRationaleDialog() // user previously denied

            else -> requestCameraPermission.launch(Manifest.permission.CAMERA)
        }
    }
}`,
      output: "Permission dialog shown to user; camera opens if granted",
    },
    sections: [
      {
        id: "android-permissions-best",
        heading: "Permission Best Practices",
        content:
          "Request permissions contextually — when the user takes an action that requires them, not at app launch. Users are much more likely to grant permissions when they understand why.\n\nHandle denial gracefully. If denied without rationale (permanent denial), direct users to Settings. If denied with rationale (second time asking), explain the feature impact and offer an alternative.\n\nScoped storage (Android 10+) restricts broad file access. Use MediaStore for media files and the Storage Access Framework (SAF) for document access instead of direct file paths.",
      },
    ],
    commonMistakes: [
      "Requesting all permissions at app launch — request only when needed, contextually",
      "Not handling the case where the user selects 'Don't ask again'",
      "Using deprecated requestPermissions/onRequestPermissionsResult — use Activity Result API",
    ],
    bestPractices: [
      "Show a rationale dialog before requesting a permission that users might find surprising",
      "Request only the minimum permissions needed — prefer COARSE location over FINE when possible",
      "Test your permission flows on Android 11+ where users can grant one-time permissions",
    ],
  },

  // ── iOS ───────────────────────────────────────────────────────────────────────
  {
    id: "ios-swift-fundamentals",
    domain: "iOS",
    title: "Swift Fundamentals",
    breadcrumb: ["iOS", "Swift Fundamentals"],
    content:
      "Swift is Apple's modern, type-safe programming language for iOS, macOS, watchOS, and tvOS. It features type inference, optionals, value types (structs/enums), and powerful generics.\n\nOptionals (?) express the absence of a value. Safely unwrap with if let, guard let, or nil coalescing (??). Force unwrap (!) only when you are certain the value exists — crashes otherwise. Use Optional chaining (a?.b?.c) to safely traverse chains of optional properties.\n\nSwift's value semantics with structs and enums makes code predictable — mutations are local. Use classes (reference types) only when identity or shared mutable state is required. Swift's protocols enable powerful polymorphism without deep inheritance hierarchies.",
    codeExample: {
      language: "Swift",
      code: `// Struct with computed property
struct Circle {
    var radius: Double
    var area: Double { .pi * radius * radius }
}

// Enum with associated values
enum Result<T> {
    case success(T)
    case failure(Error)
}

// Optional safe handling
func loadUser(id: String) -> String? {
    guard !id.isEmpty else { return nil }
    return "User_\(id)"
}

let user = loadUser(id: "42") ?? "Guest"
print(user) // User_42

// Protocol
protocol Describable {
    var description: String { get }
}

extension Circle: Describable {
    var description: String { "Circle r=\(radius)" }
}`,
    },
  },
  {
    id: "ios-swiftui",
    domain: "iOS",
    title: "SwiftUI Views",
    breadcrumb: ["iOS", "SwiftUI Views"],
    content:
      "SwiftUI is Apple's declarative UI framework. Views are value types (structs) that conform to the View protocol and implement a body computed property. SwiftUI re-renders only what changed — making UIs efficient by default.\n\n@State stores local mutable state inside a view. @Binding shares mutable state between parent and child. @ObservedObject and @StateObject observe external ObservableObject classes. @EnvironmentObject injects objects deep into the hierarchy.\n\nLayout containers: VStack (vertical), HStack (horizontal), ZStack (layered), LazyVStack/LazyHStack (virtualized for long lists), List (scrollable list with automatic reuse), Grid (two-dimensional). Modifiers like .padding(), .foregroundColor(), .font(), and .frame() customize appearance.",
    codeExample: {
      language: "Swift",
      code: `import SwiftUI

struct TaskListView: View {
    @StateObject private var vm = TaskViewModel()

    var body: some View {
        NavigationStack {
            List(vm.tasks) { task in
                HStack {
                    Image(systemName: task.done
                          ? "checkmark.circle.fill" : "circle")
                        .foregroundColor(task.done ? .green : .gray)
                    Text(task.title)
                        .strikethrough(task.done)
                }
                .onTapGesture { vm.toggle(task) }
            }
            .navigationTitle("Tasks")
            .toolbar {
                Button("Add", action: vm.addSample)
            }
        }
    }
}`,
    },
  },
  {
    id: "ios-core-data",
    domain: "iOS",
    title: "Core Data",
    breadcrumb: ["iOS", "Core Data"],
    content:
      "Core Data is Apple's object graph and persistence framework. It manages the lifecycle of model objects, tracks changes, and persists data to SQLite (default), binary, or in-memory stores. Core Data is not a database ORM — it is an object graph manager that happens to persist.\n\nKey components: NSManagedObjectContext (scratchpad for changes), NSPersistentContainer (sets up the stack), NSFetchRequest (query), NSPredicate (filter conditions), NSSortDescriptor (sorting).\n\nIn SwiftUI, use @FetchRequest to automatically fetch and refresh data. The viewContext is the main thread context for UI. Use background contexts for heavy operations. Always save the context after mutations: try context.save().",
    codeExample: {
      language: "Swift",
      code: `import CoreData
import SwiftUI

struct TaskListView: View {
    @Environment(\.managedObjectContext) private var ctx

    @FetchRequest(
        entity: Task.entity(),
        sortDescriptors: [NSSortDescriptor(
            keyPath: \Task.createdAt, ascending: false
        )]
    ) var tasks: FetchedResults<Task>

    var body: some View {
        List(tasks) { task in
            Text(task.title ?? "Untitled")
        }
        .toolbar {
            Button("Add") { addTask() }
        }
    }

    func addTask() {
        let t = Task(context: ctx)
        t.title = "New Task"
        t.createdAt = Date()
        try? ctx.save()
    }
}`,
    },
  },

  // ── iOS new topics ────────────────────────────────────────────────────────────
  {
    id: "ios-swift-basics",
    domain: "iOS",
    title: "Swift Basics",
    breadcrumb: ["iOS", "Swift Basics"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "Swift is Apple's safe, fast, and expressive language. Its type system, optionals, and value semantics prevent entire classes of bugs found in Objective-C.",
    prerequisites: ["Xcode setup", "Basic programming concepts"],
    relatedTopics: ["ios-uikit", "ios-view-controllers", "ios-auto-layout"],
    content:
      "Swift combines the safety of modern languages with the performance of compiled code. Variables (`var`) are mutable; constants (`let`) are immutable — prefer `let` by default. Type inference reduces verbosity while maintaining strong typing.\n\nOptionals handle the absence of value safely. `String?` means 'this might be nil'. Unwrap with `if let`, `guard let`, or `??` (nil-coalescing). Force unwrapping with `!` crashes if nil — use only when certain.\n\nSwift collections: Array (ordered, allows duplicates), Set (unordered, unique), Dictionary (key-value pairs). All are value types — copying creates an independent instance.",
    codeExample: {
      language: "Swift",
      code: `// Variables and constants
let name = "Code & Crush"      // constant
var score = 0                  // mutable

// Optionals
var username: String? = nil
if let user = username {
    print("Hello, \\(user)")
} else {
    print("Guest")              // "Guest"
}

// Closures (like lambdas)
let numbers = [3, 1, 4, 1, 5, 9]
let sorted = numbers.sorted { $0 < $1 }
let doubled = numbers.map { $0 * 2 }
print(doubled)   // [6, 2, 8, 2, 10, 18]

// Error handling
enum AppError: Error {
    case networkFailure
    case notFound
}
func fetchUser(id: Int) throws -> String {
    guard id > 0 else { throw AppError.notFound }
    return "User_\\(id)"
}
let user = try? fetchUser(id: 1)  // Optional`,
      output: "Guest\n[6, 2, 8, 2, 10, 18]",
    },
    sections: [
      {
        id: "ios-swift-types",
        heading: "Swift Type System",
        content:
          "Swift's type system distinguishes between value types (structs, enums, tuples — copied on assignment) and reference types (classes — shared reference). This distinction is fundamental.\n\nStructs are preferred for most types because they're safer — mutations are local and you never have aliasing bugs. Use classes when you need identity semantics (reference equality), inheritance, or Objective-C interoperability.\n\nEnums in Swift are powerful — they can have associated values: `case success(String)`, `case failure(Error)`. Pattern matching with `switch` is exhaustive and elegant.",
      },
      {
        id: "ios-swift-protocols",
        heading: "Protocols and Extensions",
        content:
          "Protocols define interfaces (like Java interfaces or TypeScript interfaces). A type conforms to a protocol by implementing its requirements. Protocol-Oriented Programming (POP) is Swift's preferred design paradigm over class inheritance.\n\nExtensions add functionality to existing types — even types you don't own (like String or Int). You can extend a type to conform to a protocol, add computed properties, and add methods.",
        codeExamples: [
          {
            language: "Swift",
            label: "Protocol conformance",
            code: `protocol Greetable {
    var name: String { get }
    func greet() -> String
}

extension Greetable {
    func greet() -> String { "Hello, \\(name)!" }  // default impl
}

struct Person: Greetable {
    let name: String
}

let p = Person(name: "Mayank")
print(p.greet())  // "Hello, Mayank!"`,
            output: "Hello, Mayank!",
            runnable: false,
          },
        ],
      },
    ],
    commonMistakes: [
      "Force unwrapping optionals with ! — use if let or guard let instead",
      "Mutating structs in closures — capture with [weak self] for classes, not needed for structs",
      "Using var when let would suffice — prefer let for safety and intent clarity",
    ],
    bestPractices: [
      "Use guard let for early exit patterns — keeps the happy path unindented",
      "Prefer structs over classes for data models — value semantics prevent aliasing bugs",
      "Use Codable protocol for JSON serialization — avoid manual parsing",
    ],
  },
  {
    id: "ios-uikit",
    domain: "iOS",
    title: "UIKit Fundamentals",
    breadcrumb: ["iOS", "UIKit"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "UIKit is Apple's imperative UI framework for iOS. Understanding UIView, UIViewController, and Auto Layout is essential even as SwiftUI matures.",
    prerequisites: ["Swift Basics", "Xcode setup"],
    relatedTopics: [
      "ios-view-controllers",
      "ios-auto-layout",
      "ios-swift-basics",
    ],
    content:
      "UIKit uses an imperative approach — you create views, configure properties, and respond to events. The view hierarchy is a tree of UIView objects. UIViewController manages a single screen's views and lifecycle.\n\nKey UIView properties: frame (position + size in superview), bounds (position + size in own space), backgroundColor, alpha, hidden, layer (CALayer for animations and shadows).\n\nAuto Layout constrains views using rules rather than fixed frames — views resize and reposition automatically for different screen sizes. Define constraints programmatically (NSLayoutConstraint or SnapKit) or in Interface Builder.",
    codeExample: {
      language: "Swift",
      code: `// Programmatic UIKit view setup
class ProfileViewController: UIViewController {
    private let avatarView: UIImageView = {
        let iv = UIImageView()
        iv.contentMode = .scaleAspectFill
        iv.clipsToBounds = true
        iv.layer.cornerRadius = 40
        iv.translatesAutoresizingMaskIntoConstraints = false
        return iv
    }()

    private let nameLabel: UILabel = {
        let lbl = UILabel()
        lbl.font = .boldSystemFont(ofSize: 22)
        lbl.translatesAutoresizingMaskIntoConstraints = false
        return lbl
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        view.addSubview(avatarView)
        view.addSubview(nameLabel)
        NSLayoutConstraint.activate([
            avatarView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 24),
            avatarView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            avatarView.widthAnchor.constraint(equalToConstant: 80),
            avatarView.heightAnchor.constraint(equalToConstant: 80),
            nameLabel.topAnchor.constraint(equalTo: avatarView.bottomAnchor, constant: 12),
            nameLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        ])
    }
}`,
      output: "Profile screen renders with circular avatar and name label",
    },
    sections: [
      {
        id: "ios-uikit-responder",
        heading: "Responder Chain & Events",
        content:
          "UIKit uses a Responder Chain to route events. When a touch event occurs, UIKit starts at the touched view and walks up the hierarchy until a responder handles it. UIView, UIViewController, UIApplication, and AppDelegate are all UIResponders.\n\nTarget-action pattern: addTarget(_:action:for:) wires UI controls to event handlers. @IBAction in IB-connected code. For gestures: UITapGestureRecognizer, UISwipeGestureRecognizer, UIPanGestureRecognizer — add to any UIView.",
      },
    ],
    commonMistakes: [
      "Setting translatesAutoresizingMaskIntoConstraints = true when using Auto Layout — always set to false",
      "Updating UI from background threads — always dispatch to main thread",
      "Not calling super in lifecycle methods like viewDidLoad, viewWillAppear",
    ],
    bestPractices: [
      "Use UIStackView to eliminate manual constraints for row/column layouts",
      "Use safeAreaLayoutGuide anchors to avoid overlapping status bar and home indicator",
      "Consider migrating new screens to SwiftUI — UIHostingController embeds SwiftUI in UIKit",
    ],
  },
  {
    id: "ios-view-controllers",
    domain: "iOS",
    title: "View Controllers & Navigation",
    breadcrumb: ["iOS", "View Controllers"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "UIViewController manages a screen of content. UINavigationController, UITabBarController, and modern techniques like Coordinator pattern organize multi-screen apps.",
    prerequisites: ["UIKit Fundamentals", "Swift Basics"],
    relatedTopics: ["ios-uikit", "ios-auto-layout", "ios-data-persistence"],
    content:
      "UIViewController is the building block of iOS navigation. Every screen you see is managed by a ViewController. The lifecycle: viewDidLoad (one-time setup), viewWillAppear (before visible), viewDidAppear (after visible), viewWillDisappear, viewDidDisappear.\n\nUINavigationController manages a stack of ViewControllers. push new controllers with pushViewController, pop with popViewController or the back button. UITabBarController shows multiple tabs at the bottom.\n\nModern navigation with UIKit: use Storyboard Segues for simple flows, or programmatic navigation (instantiating VCs directly) for better testability and dependency injection.",
    codeExample: {
      language: "Swift",
      code: `// Programmatic navigation with dependency injection
class HomeViewController: UIViewController {
    private let apiService: APIService

    init(apiService: APIService) {
        self.apiService = apiService
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) { fatalError() }

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Home"

        // Navigate to detail
        let detailBtn = UIBarButtonItem(
            title: "Details",
            style: .plain,
            target: self,
            action: #selector(openDetail)
        )
        navigationItem.rightBarButtonItem = detailBtn
    }

    @objc private func openDetail() {
        let detailVC = DetailViewController(apiService: apiService)
        navigationController?.pushViewController(detailVC, animated: true)
    }
}`,
      output:
        "HomeViewController pushes DetailViewController onto navigation stack",
    },
    sections: [
      {
        id: "ios-viewcontrollers-coordinator",
        heading: "Coordinator Pattern",
        content:
          "The Coordinator pattern separates navigation logic from ViewControllers. A Coordinator holds references to child coordinators and knows how to present new screens. ViewControllers delegate navigation decisions to their coordinator via protocols or closures.\n\nThis makes ViewControllers more reusable (they don't know how to navigate — only what to display) and easier to test. It also makes complex flows (onboarding, deep linking) easier to manage centrally.",
      },
    ],
    commonMistakes: [
      "Not retaining child coordinators — they get deallocated immediately",
      "Massive ViewControllers with hundreds of lines — extract to separate classes",
      "Using Storyboard segues for complex flows — hard to inject dependencies",
    ],
    bestPractices: [
      "Inject dependencies through init (not through properties set after init)",
      "Use viewWillAppear to refresh data that might change while another VC was on screen",
      "Prefer loading views programmatically for better diff readability in code reviews",
    ],
  },
  {
    id: "ios-auto-layout",
    domain: "iOS",
    title: "Auto Layout",
    breadcrumb: ["iOS", "Auto Layout"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "Auto Layout calculates view frames dynamically based on constraints — enabling your app to look great on iPhone SE, iPhone 15 Pro Max, and iPad simultaneously.",
    prerequisites: ["UIKit Fundamentals"],
    relatedTopics: ["ios-view-controllers", "ios-uikit"],
    content:
      "Auto Layout uses a constraint satisfaction system. You define rules (constraints) like 'this button is 16pt from the left edge' and 'this label is 8pt below the image'. The layout engine solves the constraint system and sets frames.\n\nEvery view needs enough constraints to determine its position (x, y) and size (width, height). Under-constrained views show warnings. Over-constrained views break one constraint (shown in red) to resolve conflicts.\n\nKey constraint types: pin (distance to edge), equal (same width/height), aspect ratio, center (in superview or relative). Use UILayoutGuide for grouping without extra views.",
    codeExample: {
      language: "Swift",
      code: `// Auto Layout with NSLayoutConstraint API
func setupConstraints() {
    // Always set this for programmatic constraints
    titleLabel.translatesAutoresizingMaskIntoConstraints = false
    subtitleLabel.translatesAutoresizingMaskIntoConstraints = false

    NSLayoutConstraint.activate([
        // Pin to safe area
        titleLabel.topAnchor.constraint(
            equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 24),
        titleLabel.leadingAnchor.constraint(
            equalTo: view.leadingAnchor, constant: 20),
        titleLabel.trailingAnchor.constraint(
            equalTo: view.trailingAnchor, constant: -20),

        // Below title with spacing
        subtitleLabel.topAnchor.constraint(
            equalTo: titleLabel.bottomAnchor, constant: 8),
        subtitleLabel.leadingAnchor.constraint(
            equalTo: titleLabel.leadingAnchor),
        subtitleLabel.trailingAnchor.constraint(
            equalTo: titleLabel.trailingAnchor),
    ])
}`,
      output: "Views position correctly on all device sizes",
    },
    sections: [
      {
        id: "ios-autolayout-stackview",
        heading: "UIStackView for Simplified Layouts",
        content:
          "UIStackView manages a row or column of views without individual constraints. Axis (horizontal/vertical), distribution (fill, equalSpacing, fillEqually), alignment (fill, center, leading/trailing), and spacing are the only properties you need. Add/remove arranged subviews and the stack automatically updates.\n\nNest stack views for complex layouts — a vertical stack containing horizontal stacks creates grid-like layouts with minimal constraints.",
      },
    ],
    commonMistakes: [
      "Mixing frame-based layout with Auto Layout on the same view",
      "Creating conflicting constraints — watch for red constraint errors in Xcode",
      "Not setting content hugging and compression resistance for dynamic text",
    ],
    bestPractices: [
      "Use UIStackView for simple row/column arrangements — eliminates most constraints",
      "Set a minimum height constraint on UITableViewCell for consistent cell sizing",
      "Use priority (1-1000) to resolve conflicts rather than removing constraints",
    ],
  },
  {
    id: "ios-data-persistence",
    domain: "iOS",
    title: "Data Persistence on iOS",
    breadcrumb: ["iOS", "Data Persistence"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "iOS offers multiple persistence options: UserDefaults for preferences, Keychain for secrets, Core Data for complex object graphs, and SQLite/Realm for relational data.",
    prerequisites: ["Swift Basics", "UIKit Fundamentals"],
    relatedTopics: ["ios-swift-basics", "ios-view-controllers"],
    content:
      "iOS provides a tiered persistence system. UserDefaults stores small amounts of key-value data (settings, preferences). Keychain stores sensitive data (passwords, tokens) with hardware-backed security. FileManager handles documents and caches.\n\nFor structured data: Core Data provides an object graph with relationships, fetching, and optional CloudKit sync. SQLite via GRDB or FMDB for pure relational queries. Realm for a simpler ORM-like experience.\n\nFor modern apps, SwiftData (iOS 17+) replaces Core Data with a macro-based, Swift-native API. Annotate your model with @Model and queries use Swift's type-safe macro system.",
    codeExample: {
      language: "Swift",
      code: `// UserDefaults — preferences
UserDefaults.standard.set("dark", forKey: "theme")
let theme = UserDefaults.standard.string(forKey: "theme") ?? "light"

// Keychain — sensitive data
import Security
func saveToken(_ token: String) {
    let data = token.data(using: .utf8)!
    let query: [CFString: Any] = [
        kSecClass: kSecClassGenericPassword,
        kSecAttrAccount: "authToken",
        kSecValueData: data
    ]
    SecItemDelete(query as CFDictionary)     // delete existing
    SecItemAdd(query as CFDictionary, nil)   // add new
}

// SwiftData (iOS 17+) — structured models
import SwiftData

@Model class Task {
    var title: String
    var isCompleted: Bool = false
    var createdAt: Date = Date()

    init(title: String) { self.title = title }
}`,
      output:
        "Theme preference saved; token stored securely in Keychain; Task model created",
    },
    sections: [
      {
        id: "ios-coredata-setup",
        heading: "Core Data Setup and Patterns",
        content:
          "Core Data requires a persistent container setup. In SwiftUI apps, inject the viewContext via @Environment. Use @FetchRequest to automatically display and update fetched data.\n\nAlways perform Core Data operations on the correct context. The viewContext is main-thread-only for UI. Use newBackgroundContext() or performBackgroundTask for heavy operations. Save explicitly after mutations: try context.save().",
      },
    ],
    commonMistakes: [
      "Storing sensitive data in UserDefaults — use Keychain for passwords and tokens",
      "Performing Core Data saves on background thread using viewContext — use background context",
      "Not handling NSPersistentStoreLoadingError — the store can fail to load on corrupted data",
    ],
    bestPractices: [
      "Use property wrappers like @AppStorage (SwiftUI) for UserDefaults access",
      "Migrate to SwiftData for new iOS 17+ projects — cleaner, Swift-native API",
      "Always test persistence across app restarts, not just in-memory during one session",
    ],
  },

  // ── Cybersecurity new topics ─────────────────────────────────────────────────
  {
    id: "cyber-encryption",
    domain: "Cybersecurity",
    title: "Encryption & Cryptography",
    breadcrumb: ["Cybersecurity", "Encryption"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "Cryptography is the foundation of digital security. Understanding symmetric encryption, asymmetric encryption, and hashing helps you protect data in transit and at rest.",
    prerequisites: ["Basic networking", "REST API basics"],
    relatedTopics: [
      "cyber-auth-security",
      "cyber-network-security",
      "cyber-sql-injection",
    ],
    content:
      "Encryption transforms readable plaintext into unreadable ciphertext using a key. Two main types: Symmetric encryption uses the same key for both operations (AES-256, fast, ideal for bulk data). Asymmetric encryption uses a public key to encrypt and a private key to decrypt (RSA, ECC — used for key exchange and digital signatures).\n\nHashing is not encryption — it is a one-way transformation (SHA-256, bcrypt). Hashes verify integrity and store passwords. Always use bcrypt or Argon2 for passwords — MD5 and SHA-1 are cryptographically broken.\n\nHTTPS uses TLS which combines asymmetric key exchange with symmetric bulk encryption. Always use TLS 1.2+ and store secrets in environment variables or a secrets manager, never in source code.",
    codeExample: {
      language: "JavaScript",
      code: `const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Password hashing (bcrypt, cost factor 12)
async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}
async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

// Symmetric encryption (AES-256-GCM)
function encrypt(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([
    cipher.update(text, 'utf8'), cipher.final()
  ]);
  return { iv: iv.toString('hex'), data: encrypted.toString('hex'),
           tag: cipher.getAuthTag().toString('hex') };
}`,
      output: "Returns encrypted object with iv, data, and auth tag",
    },
    sections: [
      {
        id: "cyber-encryption-concepts",
        heading: "Symmetric vs Asymmetric Encryption",
        content:
          "**Symmetric encryption** (AES, ChaCha20) uses the same key to encrypt and decrypt. It's fast and efficient for large data. The challenge: how do you securely share the key with the recipient?\n\n**Asymmetric encryption** (RSA, ECC, X25519) solves key distribution. Anyone can encrypt with your public key; only you can decrypt with your private key. It's slow — used for key exchange and signatures, not bulk data.\n\n**TLS combines both**: asymmetric crypto performs the handshake and establishes a shared secret, then symmetric crypto encrypts the actual data stream. This is why HTTPS is secure.",
      },
      {
        id: "cyber-encryption-password",
        heading: "Secure Password Storage",
        content:
          "Never store passwords in plaintext or with fast hashes (MD5, SHA-1, SHA-256). Attackers can crack these in minutes using GPU-accelerated rainbow tables.\n\nUse bcrypt, Argon2id, or scrypt — adaptive hashing algorithms designed to be slow and memory-intensive, making brute force computationally expensive. The work factor (cost) makes them progressively harder to crack as hardware improves. Bcrypt with cost factor 12 takes ~250ms on modern hardware — acceptable for login but devastating for brute force.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "Bcrypt password verification",
            code: `const bcrypt = require('bcrypt');

// During registration
const hash = await bcrypt.hash(plainPassword, 12);
await db.query('INSERT INTO users (email, hash) VALUES ($1, $2)', [email, hash]);

// During login
const user = await db.query('SELECT hash FROM users WHERE email = $1', [email]);
const valid = await bcrypt.compare(plainPassword, user.rows[0].hash);
if (!valid) throw new Error('Invalid credentials');`,
            output:
              "Secure password verified — no timing attacks, no rainbow tables",
            runnable: false,
          },
        ],
      },
    ],
    commonMistakes: [
      "Using MD5 or SHA-1 for password hashing — they're cryptographically broken",
      "Storing encryption keys alongside encrypted data — defeats the purpose",
      "Generating weak random values with Math.random() for security — use crypto.randomBytes()",
      "Using ECB mode in symmetric encryption — patterns leak through ciphertext",
    ],
    bestPractices: [
      "Use Argon2id as the primary password hashing algorithm for new projects",
      "Rotate encryption keys periodically and store them in a proper secrets manager",
      "Always use authenticated encryption (AES-GCM, ChaCha20-Poly1305) — detects tampering",
      "Never roll your own cryptography — use established libraries",
    ],
  },
  {
    id: "cyber-sql-injection",
    domain: "Cybersecurity",
    title: "SQL Injection Prevention",
    breadcrumb: ["Cybersecurity", "SQL Injection"],
    difficulty: "Beginner",
    readTime: "7 min",
    summary:
      "SQL injection is the #1 web vulnerability. It lets attackers read, modify, or delete database contents by injecting SQL into unparameterized queries.",
    prerequisites: ["Basic SQL", "Web development basics"],
    relatedTopics: ["cyber-xss", "cyber-encryption", "cyber-auth-security"],
    content:
      "SQL Injection (SQLi) occurs when an attacker inserts malicious SQL code into an input field that is directly concatenated into a database query. The database executes the injected SQL, allowing attackers to bypass authentication, read sensitive data, modify or delete records, or execute admin operations.\n\nExample: a login query SELECT * FROM users WHERE username='$input' — if input is ' OR '1'='1, the query always returns true, granting access without a valid password.\n\nPrevention: always use parameterised queries (prepared statements) — the database treats user input as data, never as code. ORMs like Sequelize or Hibernate use parameterisation by default.",
    codeExample: {
      language: "JavaScript",
      code: `// VULNERABLE — never do this
const query = \`SELECT * FROM users WHERE username='\${req.body.user}'\`;

// SAFE — parameterised query (Node.js + pg)
const { rows } = await pool.query(
  'SELECT * FROM users WHERE username = $1 AND password_hash = $2',
  [req.body.username, hashedPassword]
);

// SAFE — with an ORM (Sequelize)
const user = await User.findOne({
  where: {
    username: req.body.username,  // automatically parameterised
    passwordHash: hashedPassword
  }
});`,
      output: "Parameterized query safely passes user input as data, not code",
    },
    sections: [
      {
        id: "sqli-types",
        heading: "Types of SQL Injection",
        content:
          "**Classic SQLi**: attacker can see query results directly — extracts data immediately.\n\n**Blind SQLi**: no direct output, but attacker infers data by asking yes/no questions — slower but equally dangerous. Boolean-based (response changes with true/false condition) and time-based (SLEEP() delays reveal information).\n\n**Second-order SQLi**: malicious payload stored in DB and executed later when retrieved and used in another query — harder to detect.",
      },
    ],
    commonMistakes: [
      "String concatenating user input into SQL — even with escaping, there are edge cases",
      "Trusting that ORM is magic protection — raw query methods still vulnerable",
      "Not applying principle of least privilege — DB user should only have SELECT/INSERT/UPDATE, not DROP",
    ],
    bestPractices: [
      "Always use parameterized queries or ORMs with bound parameters",
      "Run the application DB user with minimum required permissions",
      "Use SAST tools (SonarQube, Semgrep) to scan for injection vulnerabilities in CI",
    ],
  },
  {
    id: "cyber-xss",
    domain: "Cybersecurity",
    title: "XSS & CSRF Attacks",
    breadcrumb: ["Cybersecurity", "XSS & CSRF"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "XSS injects malicious scripts into pages. CSRF tricks authenticated users into performing unintended actions. Both are in the OWASP Top 10.",
    prerequisites: ["HTML & JavaScript basics", "HTTP cookies"],
    relatedTopics: ["cyber-sql-injection", "cyber-auth-security"],
    content:
      "Cross-Site Scripting (XSS) injects malicious scripts into web pages viewed by other users. Stored XSS saves the payload to the database; Reflected XSS bounces it off the server; DOM XSS manipulates the DOM via JavaScript.\n\nPrevention: escape/encode all user-provided output before rendering. Use textContent instead of innerHTML. Set a strict Content Security Policy (CSP) header. Use HttpOnly cookies so scripts cannot access session tokens.\n\nCross-Site Request Forgery (CSRF) tricks an authenticated user's browser into sending unauthorized requests. Prevention: CSRF tokens (synchronizer token pattern), SameSite cookie attribute (Lax or Strict), and Origin/Referer header validation.",
    codeExample: {
      language: "JavaScript",
      code: `// XSS Prevention: use textContent, not innerHTML
const userInput = '<script>alert("xss")</script>';
// UNSAFE
element.innerHTML = userInput;   // executes script!
// SAFE
element.textContent = userInput; // renders as plain text

// CSP Header (Express)
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self'");
  next();
});

// CSRF Token middleware
const csrf = require('csurf');
app.use(csrf({ cookie: { httpOnly: true, sameSite: 'strict' } }));`,
      output: "Script tag rendered as text; CSP prevents unauthorized scripts",
    },
    sections: [
      {
        id: "xss-csp",
        heading: "Content Security Policy",
        content:
          "CSP is a browser security feature that controls which resources a page can load. A strict CSP prevents XSS even if an attacker injects a script tag, because the browser refuses to execute scripts not explicitly allowed by the policy.\n\nStart restrictive: `default-src 'self'` allows only same-origin resources. Add specific allowlists as needed. Use `report-uri` to log violations without enforcing (Content-Security-Policy-Report-Only) before going live with enforcement.",
      },
    ],
    commonMistakes: [
      "Using innerHTML with any user-supplied content — always use textContent or DOMPurify",
      "Setting session cookies without HttpOnly and Secure flags",
      "Not validating the Origin header on state-changing API endpoints",
    ],
    bestPractices: [
      "Use DOMPurify library when you must render HTML user content safely",
      "Set cookies with SameSite=Strict for authentication cookies",
      "Use nonce-based CSP for inline scripts rather than 'unsafe-inline'",
    ],
  },
  {
    id: "cyber-auth-security",
    domain: "Cybersecurity",
    title: "Authentication Security",
    breadcrumb: ["Cybersecurity", "Authentication Security"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "Authentication is the gatekeeper of your application. Weak authentication is responsible for a huge proportion of breaches — MFA, secure session management, and rate limiting are essential.",
    prerequisites: ["JWT Authentication", "Encryption basics"],
    relatedTopics: ["cyber-encryption", "cyber-xss", "cyber-network-security"],
    content:
      "Authentication verifies who a user is. Common vulnerabilities: weak passwords (enforce minimum complexity and check against breach databases), credential stuffing (attackers use leaked username/password pairs from other breaches), and brute force (automated guessing attacks).\n\nDefenses: rate limiting login attempts, account lockout after N failures, CAPTCHA for suspicious patterns, multi-factor authentication (TOTP, WebAuthn/Passkeys). MFA dramatically reduces account takeover risk.\n\nSession management: generate cryptographically random session IDs, rotate session ID after login (prevents session fixation), set session expiry, invalidate server-side on logout. JWT: use short expiry (15min) with refresh token rotation.",
    codeExample: {
      language: "JavaScript",
      code: `// Rate limiting login with express-rate-limit
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 10,                     // max 10 attempts per window
  message: { error: 'Too many login attempts. Try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/auth/login', loginLimiter, async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user || !await bcrypt.compare(password, user.passwordHash)) {
    // Same error for wrong email AND wrong password (prevent enumeration)
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // Rotate session ID after successful login
  req.session.regenerate(() => {
    req.session.userId = user.id;
    res.json({ success: true });
  });
});`,
      output:
        "Login endpoint secured with rate limiting and session regeneration",
    },
    sections: [
      {
        id: "auth-mfa",
        heading: "Multi-Factor Authentication (MFA)",
        content:
          "MFA requires two or more factors: something you know (password), something you have (TOTP app, hardware key), something you are (biometrics). Even if a password is leaked, MFA prevents login.\n\nTOTP (Time-based One-Time Password) — used by Google Authenticator, Authy. A 6-digit code changes every 30 seconds based on a shared secret and current time. Libraries: `speakeasy` (Node.js), `pyotp` (Python).\n\nWebAuthn/Passkeys are the future — cryptographic challenge-response using the device's secure enclave. No passwords to phish or leak. Major platforms now support passkeys natively.",
      },
    ],
    commonMistakes: [
      "Using the same error message for wrong email vs wrong password — prevents user enumeration but this is actually GOOD practice",
      "Not rate limiting password reset endpoints — common attack vector",
      "Storing session data in cookies without signing or encryption",
    ],
    bestPractices: [
      "Implement MFA for all privileged accounts at minimum",
      "Check passwords against the Have I Been Pwned API during registration",
      "Use OAuth 2.0 / OIDC for user authentication instead of building it from scratch",
    ],
  },
  {
    id: "cyber-network-security",
    domain: "Cybersecurity",
    title: "Network Security Fundamentals",
    breadcrumb: ["Cybersecurity", "Network Security"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "Network security protects data in transit and the infrastructure it traverses. Understanding firewalls, VPNs, TLS, and common network attacks is essential for any backend engineer.",
    prerequisites: ["Basic networking", "TCP/IP basics"],
    relatedTopics: ["cyber-encryption", "cyber-auth-security"],
    content:
      "Network security encompasses controls to prevent unauthorized access to data as it travels across networks. Key concepts: defense in depth (multiple layers), least privilege (minimum necessary access), and zero trust (verify everything, trust nothing).\n\nCommon network attacks: Man-in-the-middle (MITM) — attacker intercepts traffic between two parties. Prevented by TLS with certificate pinning. DDoS — overwhelming a service with traffic. Mitigated by CDNs, rate limiting, WAFs. DNS spoofing — redirecting DNS queries to malicious servers. DNSSEC and DNS-over-HTTPS protect against this.\n\nFirewalls filter traffic by IP, port, and protocol. Web Application Firewalls (WAF) specifically protect HTTP traffic. VPNs encrypt traffic between networks. Network segmentation isolates sensitive systems.",
    codeExample: {
      language: "YAML",
      code: `# nginx security headers configuration
server {
    listen 443 ssl http2;
    server_name example.com;

    # TLS configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;

    # Security headers
    add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy strict-origin-when-cross-origin;

    # Rate limiting zone
    limit_req zone=login burst=10 nodelay;
}`,
      output: "nginx configured with TLS 1.3, HSTS, and security headers",
    },
    sections: [
      {
        id: "network-tls",
        heading: "TLS/HTTPS Deep Dive",
        content:
          "TLS (Transport Layer Security) is the protocol behind HTTPS. It provides confidentiality (encryption), integrity (tamper detection via MACs), and authentication (server certificate). The TLS handshake establishes a shared symmetric key using asymmetric cryptography.\n\nAlways enforce HTTPS with HSTS (HTTP Strict Transport Security). Redirect all HTTP to HTTPS. Enable TLS 1.2 and 1.3 only — disable older versions. Use A+ rated cipher suites. Test with SSL Labs (ssllabs.com/ssltest/).",
      },
    ],
    commonMistakes: [
      "Accepting self-signed certificates in production — creates MITM vulnerability",
      "Using HTTP for any production traffic — always enforce HTTPS",
      "Leaving unused ports open — audit with nmap and close what's not needed",
    ],
    bestPractices: [
      "Use Let's Encrypt for free, auto-renewing TLS certificates",
      "Enable HSTS with preload to permanently force HTTPS in browsers",
      "Segment your network — database servers should not be accessible from the internet",
    ],
  },

  // ── Blockchain new topics ─────────────────────────────────────────────────────
  {
    id: "blockchain-basics",
    domain: "Blockchain",
    title: "Blockchain Fundamentals",
    breadcrumb: ["Blockchain", "Fundamentals"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "A blockchain is a distributed, tamper-evident ledger. Understanding its core properties — decentralization, immutability, and consensus — is essential before writing any smart contract.",
    prerequisites: ["Cryptography basics", "Networking fundamentals"],
    relatedTopics: [
      "blockchain-smart-contracts",
      "blockchain-consensus",
      "blockchain-wallets",
    ],
    content:
      "A blockchain is a distributed ledger — a chain of blocks where each block contains transactions, a timestamp, and a cryptographic hash of the previous block. Changing any block invalidates all subsequent blocks, making the chain tamper-evident.\n\nConsensus mechanisms ensure all nodes agree on the valid chain: Proof of Work (miners compete to solve puzzles — energy-intensive, Bitcoin), Proof of Stake (validators stake coins — energy-efficient, Ethereum 2.0).\n\nKey properties: decentralization (no single authority), immutability (records cannot be altered), transparency (all transactions are public), and security (cryptographic hashing and digital signatures).",
    codeExample: {
      language: "JavaScript",
      code: `const crypto = require('crypto');

class Block {
  constructor(index, data, previousHash) {
    this.index = index;
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.computeHash();
  }

  computeHash() {
    return crypto.createHash('sha256')
      .update(this.index + this.timestamp +
              JSON.stringify(this.data) + this.previousHash)
      .digest('hex');
  }
}

const genesis = new Block(0, { amount: 0 }, '0');
const block1 = new Block(1, { from:'Alice', to:'Bob', amount:5 }, genesis.hash);
console.log('Valid chain:', block1.previousHash === genesis.hash);`,
      output: "Valid chain: true",
    },
    sections: [
      {
        id: "blockchain-how-works",
        heading: "How Blockchain Works",
        content:
          "Each block in a blockchain contains: a block header (index, timestamp, previous hash, nonce), the Merkle root of all transactions in the block, and the transactions themselves. The Merkle tree allows efficient verification of individual transactions without downloading the full block.\n\nWhen a new transaction is broadcast to the network, nodes validate it and add it to a mempool (memory pool) of pending transactions. Miners/validators select transactions from the mempool, bundle them into a block, and propose it to the network. Once consensus is reached, the block is appended to the chain.",
      },
      {
        id: "blockchain-applications",
        heading: "Real-World Applications",
        content:
          "**Cryptocurrencies**: Bitcoin (store of value), Ethereum (programmable money and smart contracts), Stablecoins (USDC, DAI — pegged to fiat).\n\n**DeFi (Decentralized Finance)**: trading, lending, and borrowing without intermediaries. Uniswap (automated market maker), Compound (lending), MakerDAO (decentralized stablecoin).\n\n**NFTs**: non-fungible tokens prove ownership of unique digital assets. ERC-721 standard. Used for digital art, gaming assets, music rights.\n\n**Supply Chain**: track goods provenance — Walmart uses blockchain to trace food supply chains, reducing contamination investigation from days to seconds.",
      },
    ],
    commonMistakes: [
      "Thinking blockchain solves every data problem — it's a specific tool for trustless, decentralized scenarios",
      "Conflating blockchain with cryptocurrency — blockchain is the technology, crypto is one application",
      "Ignoring gas costs when designing smart contracts — every operation costs ETH",
    ],
    bestPractices: [
      "Understand the trade-offs: decentralization + security comes at the cost of speed and scalability",
      "Start with testnets (Sepolia, Mumbai) — never deploy to mainnet without extensive testing",
      "Use established standards (ERC-20, ERC-721) instead of custom token implementations",
    ],
  },
  {
    id: "blockchain-smart-contracts",
    domain: "Blockchain",
    title: "Smart Contracts",
    breadcrumb: ["Blockchain", "Smart Contracts"],
    difficulty: "Intermediate",
    readTime: "10 min",
    summary:
      "Smart contracts are self-executing programs on the blockchain. Once deployed, they run exactly as written — no intermediary, no possibility of downtime or censorship.",
    prerequisites: ["Blockchain Fundamentals", "Basic programming"],
    relatedTopics: ["blockchain-basics", "blockchain-defi"],
    content:
      "Smart contracts are self-executing programs stored on a blockchain that automatically enforce terms of an agreement when predefined conditions are met. Once deployed, they are immutable and execute deterministically.\n\nEthereum is the most popular smart contract platform, using the EVM (Ethereum Virtual Machine). Smart contracts are written in Solidity (or Vyper), compiled to bytecode, and deployed via a transaction. Each execution costs gas — a fee paid in ETH.\n\nUse cases: DeFi, NFTs (ERC-721), DAOs, supply chain tracking, and decentralized exchanges. Audit code thoroughly before deployment — smart contract bugs cannot be patched after deployment.",
    codeExample: {
      language: "Solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleVoting {
    mapping(string => uint) public votes;
    mapping(address => bool) public hasVoted;
    string[] public candidates;

    constructor(string[] memory _candidates) {
        candidates = _candidates;
    }

    function vote(string memory candidate) external {
        require(!hasVoted[msg.sender], "Already voted");
        bool valid = false;
        for (uint i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i])) ==
                keccak256(bytes(candidate))) {
                valid = true; break;
            }
        }
        require(valid, "Invalid candidate");
        votes[candidate]++;
        hasVoted[msg.sender] = true;
    }
}`,
      output: "Smart contract deployed; vote() executes on-chain automatically",
    },
    sections: [
      {
        id: "smart-contracts-security",
        heading: "Smart Contract Security",
        content:
          "Smart contract bugs are catastrophic — deployed contracts cannot be patched, and bugs can result in millions of dollars being stolen or locked forever.\n\n**Reentrancy**: the most infamous vulnerability (The DAO hack, $60M). A malicious contract re-enters your function before state is updated. Prevention: Checks-Effects-Interactions pattern — check conditions, update state, then call external contracts.\n\n**Integer overflow/underflow**: use Solidity 0.8+ which has built-in overflow checks, or OpenZeppelin's SafeMath for older versions.\n\n**Access control**: only authorized addresses should call privileged functions. Use OpenZeppelin's Ownable or AccessControl.",
        codeExamples: [
          {
            language: "Solidity",
            label: "Reentrancy-safe withdrawal",
            code: `// VULNERABLE: external call before state update
function withdraw() external {
    uint amount = balances[msg.sender];
    (bool ok,) = msg.sender.call{value: amount}("");  // reentrancy here!
    require(ok);
    balances[msg.sender] = 0;  // too late!
}

// SAFE: Checks-Effects-Interactions
function withdraw() external {
    uint amount = balances[msg.sender];  // Check
    balances[msg.sender] = 0;           // Effect (state update FIRST)
    (bool ok,) = msg.sender.call{value: amount}("");  // Interaction last
    require(ok, "Transfer failed");
}`,
            runnable: false,
          },
        ],
      },
    ],
    commonMistakes: [
      "Deploying to mainnet without a professional audit for contracts holding significant value",
      "Using tx.origin for access control — vulnerable to phishing attacks, use msg.sender",
      "Ignoring gas optimizations — expensive contracts price out users",
    ],
    bestPractices: [
      "Use OpenZeppelin's audited contract implementations as base classes",
      "Implement a time delay (timelock) for privileged admin operations",
      "Write comprehensive tests with Hardhat or Foundry before deployment",
    ],
  },
  {
    id: "blockchain-consensus",
    domain: "Blockchain",
    title: "Consensus Mechanisms",
    breadcrumb: ["Blockchain", "Consensus"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "Consensus mechanisms solve the Byzantine Generals Problem — how can distributed, potentially untrusted nodes agree on a single truth without a central coordinator?",
    prerequisites: ["Blockchain Fundamentals"],
    relatedTopics: ["blockchain-basics", "blockchain-smart-contracts"],
    content:
      "Consensus is how all nodes in a blockchain network agree on the state of the ledger. The Byzantine Generals Problem asks: how can distributed parties with potentially malicious actors agree on a decision?\n\nProof of Work (PoW) — miners compete to solve a cryptographic puzzle. The first to find a solution broadcasts the block. Other nodes verify quickly (verification is asymmetrically cheap). Requires massive compute power — protects by making attacks prohibitively expensive. Bitcoin uses PoW.\n\nProof of Stake (PoS) — validators lock (stake) cryptocurrency as collateral. Selected pseudo-randomly (weighted by stake) to propose blocks. Slashing penalises dishonest validators by burning their stake. Ethereum 2.0 uses PoS. Much more energy efficient.",
    codeExample: {
      language: "JavaScript",
      code: `// Simplified Proof of Work demonstration
class BlockchainPoW {
  constructor(difficulty = 4) {
    this.difficulty = difficulty;  // leading zeros required
  }

  mine(block) {
    const target = '0'.repeat(this.difficulty);
    block.nonce = 0;
    while (!block.hash.startsWith(target)) {
      block.nonce++;
      block.hash = this.computeHash(block);
    }
    console.log(\`Mined! Nonce: \${block.nonce}, Hash: \${block.hash}\`);
    return block;
  }

  computeHash(block) {
    const crypto = require('crypto');
    return crypto.createHash('sha256')
      .update(JSON.stringify(block)).digest('hex');
  }
}`,
      output: "Mined! Nonce: 14823, Hash: 0000a3f2...",
    },
    sections: [
      {
        id: "consensus-comparison",
        heading: "PoW vs PoS vs DPoS",
        content:
          "**PoW (Bitcoin)**: Battle-tested security, but uses enormous energy (entire country-level consumption). Very expensive to attack — need 51% of global hashrate. Decentralized but tends toward mining pool centralization.\n\n**PoS (Ethereum 2.0)**: 99.95% less energy than PoW. Validators stake 32 ETH minimum. Slashing for double-voting. Trade-off: 'rich get richer' concern, though mitigated by randomized selection.\n\n**DPoS (EOS, TRON)**: Token holders vote for a small set of delegates (~21) who validate. Very fast (millisecond finality) but highly centralized. Good for enterprise applications where throughput matters most.",
      },
    ],
    commonMistakes: [
      "Assuming any consensus mechanism is 100% secure — all have attack vectors and trade-offs",
      "Confusing 'consensus' with 'finality' — some PoW chains require 6+ confirmations for irreversibility",
    ],
    bestPractices: [
      "Choose consensus based on your needs: PoS for general dApps, PoA for private chains, DPoS for high throughput",
      "Always wait for sufficient block confirmations before treating a transaction as final",
    ],
  },
  {
    id: "blockchain-wallets",
    domain: "Blockchain",
    title: "Crypto Wallets & Key Management",
    breadcrumb: ["Blockchain", "Wallets"],
    difficulty: "Beginner",
    readTime: "7 min",
    summary:
      "A crypto wallet doesn't store coins — it stores private keys. Understanding HD wallets, key derivation, and Web3 wallet integration is essential for dApp development.",
    prerequisites: ["Blockchain Fundamentals", "Cryptography basics"],
    relatedTopics: ["blockchain-basics", "blockchain-defi"],
    content:
      "A blockchain wallet manages cryptographic key pairs. The private key (256-bit random number) proves ownership — whoever has it controls the funds. The public key is derived from the private key. The wallet address is derived from the public key (Ethereum: last 20 bytes of Keccak-256 hash of public key).\n\nHD (Hierarchical Deterministic) wallets use a single seed phrase (12-24 words, BIP-39 standard) to derive an unlimited number of key pairs deterministically. Back up the seed phrase — lose it and funds are gone forever.\n\nWallet types: hot wallets (MetaMask, Trust Wallet — connected to internet, convenient but less secure), cold wallets (Ledger, Trezor — hardware security, air-gapped, safest for large amounts).",
    codeExample: {
      language: "JavaScript",
      code: `const { ethers } = require('ethers');

// Generate a new random wallet
const wallet = ethers.Wallet.createRandom();
console.log('Address:', wallet.address);
console.log('Private Key:', wallet.privateKey);
console.log('Mnemonic:', wallet.mnemonic.phrase);

// Connect MetaMask (browser)
async function connectWallet() {
  if (!window.ethereum) throw new Error('MetaMask not installed');
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}

// Sign a message (proves ownership without transaction)
async function signMessage(signer, message) {
  return signer.signMessage(message);
}`,
      output: "Address: 0x1234..., Mnemonic: 12 words generated",
    },
    sections: [
      {
        id: "wallets-security",
        heading: "Wallet Security Best Practices",
        content:
          "The seed phrase is the master key to all derived accounts. Never share it, never store it digitally in plain text, never type it into a website. Write it on paper and store in multiple secure physical locations (safe deposit box, etc.).\n\nFor development: use `.env` files to store private keys for test wallets only. Never put production private keys in code or environment files committed to git. Use hardware wallets or KMS (AWS KMS, HashiCorp Vault) for production deployments.",
      },
    ],
    commonMistakes: [
      "Storing seed phrases in cloud notes, screenshots, or email — easily compromised",
      "Using the same wallet for development testing and real funds",
      "Not verifying contract addresses before approving transactions",
    ],
    bestPractices: [
      "Use a hardware wallet for any significant cryptocurrency holdings",
      "Enable a passphrase (25th word) for additional security on top of the seed phrase",
      "Regularly audit wallet approvals with tools like revoke.cash",
    ],
  },
  {
    id: "blockchain-defi",
    domain: "Blockchain",
    title: "DeFi Fundamentals",
    breadcrumb: ["Blockchain", "DeFi"],
    difficulty: "Advanced",
    readTime: "10 min",
    summary:
      "DeFi recreates traditional financial services — trading, lending, borrowing — using smart contracts on public blockchains, removing intermediaries entirely.",
    prerequisites: ["Smart Contracts", "Blockchain Basics", "Wallets"],
    relatedTopics: ["blockchain-smart-contracts", "blockchain-wallets"],
    content:
      "DeFi (Decentralized Finance) uses smart contracts to replicate financial services without banks or brokers. Key protocols: Uniswap (automated market maker — swap tokens via liquidity pools), Compound/Aave (lending — earn interest by supplying assets, borrow by overcollateralizing), MakerDAO (mint DAI stablecoin against collateral).\n\nAMMs use the constant product formula (x * y = k) instead of order books. Liquidity providers deposit token pairs and earn fees. Impermanent loss occurs when pool token prices diverge significantly from when you deposited.\n\nFlash loans are uncollateralized loans that must be borrowed and repaid in the same transaction. Used for arbitrage, collateral swaps, and liquidations — a uniquely blockchain-native primitive.",
    codeExample: {
      language: "Solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

// Simplified liquidity pool (AMM x*y=k)
contract SimpleAMM {
    IERC20 public tokenA;
    IERC20 public tokenB;
    uint256 public reserveA;
    uint256 public reserveB;

    function getAmountOut(uint256 amountIn, uint256 rIn, uint256 rOut)
        public pure returns (uint256) {
        // Constant product formula with 0.3% fee
        uint256 amountInWithFee = amountIn * 997;
        return (amountInWithFee * rOut) / (rIn * 1000 + amountInWithFee);
    }
}`,
      output: "AMM calculates swap output using constant product formula",
    },
    sections: [
      {
        id: "defi-risks",
        heading: "DeFi Risks",
        content:
          "**Smart contract risk**: bugs can drain funds. Most major DeFi hacks exploit contract vulnerabilities. Always check audit status before interacting with significant funds.\n\n**Oracle manipulation**: price oracles report asset prices to contracts. Manipulating spot price on a DEX can trick protocols using it as a price oracle. Use time-weighted average prices (TWAP) instead of spot prices.\n\n**Liquidation risk**: if collateral value drops, positions get liquidated. Monitor health factor and maintain buffer. Keep stablecoins ready to add collateral quickly.",
      },
    ],
    commonMistakes: [
      "Providing liquidity without understanding impermanent loss",
      "Using smart contract protocols without checking their audit status and history",
      "Ignoring gas costs — some DeFi operations are prohibitively expensive on Ethereum mainnet",
    ],
    bestPractices: [
      "Start with small amounts to understand mechanics before committing significant funds",
      "Use Layer 2 (Arbitrum, Optimism, Base) for DeFi — same protocols, 100x lower fees",
      "Monitor positions regularly — DeFi markets are 24/7 and highly volatile",
    ],
  },

  // ── Cloud new topics ──────────────────────────────────────────────────────────
  {
    id: "cloud-basics",
    domain: "Cloud",
    title: "Cloud Computing Basics",
    breadcrumb: ["Cloud", "Cloud Basics"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "Cloud computing delivers computing services over the internet. Understanding the service models (IaaS, PaaS, SaaS), major providers, and shared responsibility model is your foundation.",
    prerequisites: ["Networking basics", "Linux fundamentals"],
    relatedTopics: [
      "cloud-vms-containers",
      "cloud-serverless",
      "cloud-storage",
    ],
    content:
      "Cloud computing provides on-demand access to shared computing resources (servers, storage, networking, databases) over the internet, billed by usage. Three service models: IaaS (Infrastructure as a Service — you manage OS and up; cloud manages hardware), PaaS (Platform as a Service — you manage app and data; cloud manages runtime and OS), SaaS (Software as a Service — you just use the software).\n\nMajor cloud providers: AWS (largest, broadest service catalog), Microsoft Azure (strong enterprise/Microsoft ecosystem integration), Google Cloud Platform (strong in AI/ML, Kubernetes). Most organizations use multi-cloud or hybrid strategies.\n\nShared Responsibility Model: the cloud provider secures the infrastructure (hardware, hypervisor, physical data centers). You secure what runs on it (OS configuration, network settings, application security, data encryption).",
    codeExample: {
      language: "YAML",
      code: `# AWS CLI — common operations
# Configure credentials
aws configure

# EC2 — list running instances
aws ec2 describe-instances \\
  --filters Name=instance-state-name,Values=running \\
  --query 'Reservations[].Instances[].{ID:InstanceId,Type:InstanceType,IP:PublicIpAddress}'

# S3 — sync local directory to bucket
aws s3 sync ./dist s3://my-website-bucket --delete

# Lambda — invoke a function
aws lambda invoke \\
  --function-name my-function \\
  --payload '{"key": "value"}' \\
  response.json`,
      output: "Cloud resources listed and managed via CLI",
    },
    sections: [
      {
        id: "cloud-pricing",
        heading: "Cloud Pricing Models",
        content:
          "**On-Demand**: pay per second/hour with no commitment. Most flexible, highest per-unit cost. Good for unpredictable workloads.\n\n**Reserved Instances**: commit to 1 or 3 years for 30-70% discount. Best for stable, predictable workloads.\n\n**Spot/Preemptible**: bid on spare capacity at 60-90% discount. Can be reclaimed with 2 minutes notice. Ideal for batch jobs, CI runners, and fault-tolerant workloads.\n\n**Savings Plans**: flexible commitment by spend amount per hour. AWS and GCP offer these as a simpler alternative to reserved instances.",
      },
    ],
    commonMistakes: [
      "Leaving resources running that aren't needed — cloud cost sprawl can be enormous",
      "Storing credentials in application code — use IAM roles and environment variables",
      "Using a single availability zone — replicate across AZs for high availability",
    ],
    bestPractices: [
      "Set up billing alerts to catch unexpected cost spikes immediately",
      "Use Infrastructure as Code (Terraform, CloudFormation) — manual clicks are not repeatable",
      "Tag all resources with project, environment, and owner for cost attribution",
    ],
  },
  {
    id: "cloud-vms-containers",
    domain: "Cloud",
    title: "VMs vs Containers in the Cloud",
    breadcrumb: ["Cloud", "VMs & Containers"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "Virtual machines and containers are the two main compute primitives in the cloud. Understanding their trade-offs determines your architecture, cost, and operational complexity.",
    prerequisites: ["Cloud Basics", "Docker Containers"],
    relatedTopics: ["cloud-basics", "cloud-serverless", "devops-docker"],
    content:
      "Virtual Machines (VMs) emulate complete hardware environments. Each VM has its own OS kernel. Strong isolation — VM escape vulnerabilities are rare. Slow startup (minutes). High resource overhead (each VM needs full OS). AWS EC2, Azure VMs, Google Compute Engine.\n\nContainers share the host OS kernel. Lighter (MBs vs GBs), faster startup (milliseconds), more efficient resource utilization. Less isolation than VMs. Perfect for microservices. Docker containers, managed via Kubernetes (EKS, AKS, GKE) or managed container services (AWS ECS, Azure Container Apps).\n\nChoose VMs for: GPU workloads, specialized OS requirements, maximum isolation, legacy applications. Choose containers for: microservices, frequent deploys, resource efficiency, stateless workloads.",
    codeExample: {
      language: "YAML",
      code: `# AWS ECS Task Definition (container on cloud)
{
  "family": "web-app",
  "containerDefinitions": [{
    "name": "web",
    "image": "123456789.dkr.ecr.ap-south-1.amazonaws.com/web:latest",
    "portMappings": [{ "containerPort": 3000 }],
    "memory": 512,
    "cpu": 256,
    "environment": [
      { "name": "NODE_ENV", "value": "production" }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "/ecs/web-app",
        "awslogs-region": "ap-south-1"
      }
    }
  }],
  "requiresCompatibilities": ["FARGATE"],
  "networkMode": "awsvpc"
}`,
      output: "Container task definition registered in ECS",
    },
    sections: [
      {
        id: "cloud-kubernetes",
        heading: "Managed Kubernetes (EKS, GKE, AKS)",
        content:
          "Kubernetes manages containerized workloads at scale. Instead of managing K8s control plane yourself, use managed services: AWS EKS, Google GKE, or Azure AKS. They handle control plane availability, upgrades, and patching.\n\nWith managed K8s: you define Deployments (how many replicas, which image), Services (stable endpoints), Ingresses (HTTP routing), and ConfigMaps/Secrets (configuration). The control plane schedules your pods onto worker nodes.",
      },
    ],
    commonMistakes: [
      "Over-provisioning VMs when containers would be more cost-effective",
      "Running stateful workloads (databases) in containers without proper persistent volume setup",
    ],
    bestPractices: [
      "Use managed container services (Fargate, Cloud Run) to avoid managing node infrastructure",
      "Right-size your containers — over-allocating CPU/memory wastes money at scale",
    ],
  },
  {
    id: "cloud-load-balancing",
    domain: "Cloud",
    title: "Load Balancing & Auto Scaling",
    breadcrumb: ["Cloud", "Load Balancing"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "Load balancing distributes traffic across multiple instances for reliability and performance. Auto scaling adjusts capacity dynamically based on demand.",
    prerequisites: ["Cloud Basics", "VMs & Containers"],
    relatedTopics: [
      "cloud-vms-containers",
      "cloud-serverless",
      "devops-monitoring",
    ],
    content:
      "A load balancer distributes incoming requests across a pool of backend instances. Benefits: no single point of failure, even load distribution, health checking (removes unhealthy instances), SSL termination, and sticky sessions.\n\nTypes: Application Load Balancer (Layer 7, HTTP/HTTPS, path-based routing, header-based routing), Network Load Balancer (Layer 4, TCP/UDP, ultra-low latency, static IP), Global Load Balancer (routes to nearest region).\n\nAuto Scaling adjusts the number of instances based on metrics. Scale out (add instances) when CPU > 70%, scale in (remove) when CPU < 30%. Target tracking policies are simplest — just set the desired metric value and AWS adjusts automatically.",
    codeExample: {
      language: "YAML",
      code: `# AWS Auto Scaling Group (CloudFormation)
WebServerASG:
  Type: AWS::AutoScaling::AutoScalingGroup
  Properties:
    MinSize: 2
    MaxSize: 10
    DesiredCapacity: 3
    TargetGroupARNs: [!Ref ALBTargetGroup]
    LaunchTemplate:
      LaunchTemplateId: !Ref LaunchTemplate
      Version: !GetAtt LaunchTemplate.LatestVersionNumber

ScalingPolicy:
  Type: AWS::AutoScaling::ScalingPolicy
  Properties:
    AutoScalingGroupName: !Ref WebServerASG
    PolicyType: TargetTrackingScaling
    TargetTrackingConfiguration:
      PredefinedMetricSpecification:
        PredefinedMetricType: ASGAverageCPUUtilization
      TargetValue: 60.0`,
      output:
        "Auto Scaling Group maintains CPU at ~60% by adjusting instance count",
    },
    sections: [
      {
        id: "cloud-health-checks",
        heading: "Health Checks and Circuit Breakers",
        content:
          "Load balancers continuously health check backends. An unhealthy instance (failing health checks) is removed from rotation automatically, preventing requests from going to broken servers. Configure appropriate health check endpoints — a simple `/health` endpoint that returns 200 is standard practice.\n\nCircuit breakers (at application layer) prevent cascading failures. If a downstream service is failing, the circuit opens and subsequent calls fail fast instead of waiting for timeouts. Use libraries like resilience4j (Java) or opossum (Node.js).",
      },
    ],
    commonMistakes: [
      "Not configuring health checks — load balancer sends traffic to crashed instances",
      "Scaling only on CPU — memory pressure and request queue depth matter too",
      "Setting scale-in too aggressive — instances terminate before draining in-flight requests",
    ],
    bestPractices: [
      "Implement graceful shutdown — drain connections before terminating instances",
      "Use connection draining (deregistration delay) on target groups",
      "Test auto scaling with load tests before production — misconfigured scaling policies can cause thrashing",
    ],
  },
  {
    id: "cloud-storage",
    domain: "Cloud",
    title: "Cloud Storage Solutions",
    breadcrumb: ["Cloud", "Storage"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "Cloud offers multiple storage types: object storage for files, block storage for VMs, file storage for shared filesystems, and managed databases — each optimized for different use cases.",
    prerequisites: ["Cloud Basics"],
    relatedTopics: ["cloud-basics", "cloud-vms-containers"],
    content:
      "Cloud storage comes in several types: Object Storage (S3, GCS, Azure Blob) — stores files as objects with metadata. Infinitely scalable, highly durable (11 nines). Best for static files, backups, data lakes. Block Storage (EBS, Azure Disk) — raw block device attached to VM, like a hard drive. Low latency, used for OS volumes and databases. File Storage (EFS, Azure Files) — POSIX-compliant shared filesystem mountable by multiple instances.\n\nManaged databases are also 'storage': RDS (managed relational), DynamoDB (managed NoSQL), ElastiCache (managed Redis), CloudSearch (managed Elasticsearch).\n\nData lifecycle: automatically transition objects between storage tiers based on age. Frequently accessed → Standard. Infrequent → Standard-IA (lower cost). Archive → Glacier (minutes to retrieve). Deep Archive (hours to retrieve). Huge cost savings for logs and backups.",
    codeExample: {
      language: "JavaScript",
      code: `const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({ region: 'ap-south-1' });

// Upload file with metadata
async function uploadFile(bucket, key, buffer, contentType) {
  await s3.send(new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    Metadata: { 'uploaded-by': 'app', 'version': '1.0' },
    ServerSideEncryption: 'AES256',
  }));
}

// Presigned URL — let client upload directly to S3
async function getUploadUrl(bucket, key) {
  const { createPresignedPost } = require('@aws-sdk/s3-presigned-post');
  return createPresignedPost(s3, {
    Bucket: bucket,
    Key: key,
    Expires: 300,  // 5 minutes
    Conditions: [['content-length-range', 0, 5 * 1024 * 1024]],  // max 5MB
  });
}`,
      output:
        "File uploaded to S3 with encryption; presigned URL valid for 5 minutes",
    },
    sections: [
      {
        id: "cloud-storage-security",
        heading: "Storage Security",
        content:
          "Never make S3 buckets publicly accessible unless intentionally serving public static files. Use bucket policies and IAM policies to restrict access. Enable server-side encryption (SSE-S3 or SSE-KMS) for all buckets by default.\n\nUse presigned URLs to give clients temporary direct access to upload/download files without exposing credentials. Generate presigned URLs server-side and send to clients — they expire automatically.",
      },
    ],
    commonMistakes: [
      "Making S3 buckets publicly readable — a leading cause of data breaches",
      "Not enabling versioning for critical data — protects against accidental deletion",
      "Using block storage (EBS) where object storage (S3) would be cheaper and more scalable",
    ],
    bestPractices: [
      "Enable S3 server access logging and CloudTrail for audit trails",
      "Use lifecycle rules to automatically delete temporary files and archive old data",
      "Enable MFA Delete on S3 buckets containing critical data",
    ],
  },
  {
    id: "cloud-serverless",
    domain: "Cloud",
    title: "Serverless Architecture",
    breadcrumb: ["Cloud", "Serverless"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "Serverless lets you run code without managing servers. You focus on business logic; the cloud handles scaling, availability, and infrastructure — billing per invocation.",
    prerequisites: ["Cloud Basics", "REST APIs"],
    relatedTopics: [
      "cloud-basics",
      "cloud-vms-containers",
      "cloud-load-balancing",
    ],
    content:
      "Serverless computing lets you run code without provisioning or managing servers. AWS Lambda, Google Cloud Functions, and Azure Functions are triggered by events: HTTP requests, file uploads, database changes, schedules, and message queues.\n\nFunctions are stateless — store state in databases or storage. Cold starts (first invocation delay) occur when a function hasn't run recently. Mitigate with provisioned concurrency or keep-warm strategies.\n\nServerless pricing: pay only for invocations and compute time. Zero cost when idle. Perfect for infrequent, bursty workloads. AWS Lambda free tier: 1M invocations/month and 400,000 GB-seconds compute.",
    codeExample: {
      language: "JavaScript",
      code: `// AWS Lambda handler (Node.js)
exports.handler = async (event) => {
  const { httpMethod, path, body } = event;
  const data = body ? JSON.parse(body) : {};

  if (httpMethod === 'POST' && path === '/users') {
    const userId = await createUser(data);
    return {
      statusCode: 201,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: userId })
    };
  }

  if (httpMethod === 'GET' && path.startsWith('/users/')) {
    const userId = path.split('/')[2];
    const user = await getUser(userId);
    if (!user) return { statusCode: 404, body: JSON.stringify({ error: 'Not found' }) };
    return { statusCode: 200, body: JSON.stringify(user) };
  }

  return { statusCode: 404, body: JSON.stringify({ error: 'Route not found' }) };
};`,
      output:
        "Lambda handler routes requests; auto-scales from 0 to 10,000 concurrent executions",
    },
    sections: [
      {
        id: "serverless-patterns",
        heading: "Serverless Architecture Patterns",
        content:
          "**API + Lambda**: API Gateway routes HTTP requests to Lambda functions. Each function handles one endpoint or one resource. Zero server management, auto-scales to millions of requests.\n\n**Event-driven processing**: S3 trigger → Lambda processes uploaded file. DynamoDB stream → Lambda syncs to search index. SQS queue → Lambda processes messages in batches.\n\n**Scheduled tasks**: CloudWatch Events/EventBridge rules trigger Lambda on a cron schedule — database cleanup, report generation, heartbeats.\n\n**Step Functions**: orchestrate multiple Lambda functions in sequence or parallel. Visual workflow. Handles retries, error catching, and parallel branches without custom coordination code.",
      },
    ],
    commonMistakes: [
      "Designing serverless functions that need persistent in-memory state — they're stateless by nature",
      "Ignoring cold start latency for latency-sensitive applications",
      "Lambda function timeouts set too short — invocations time out before completing",
    ],
    bestPractices: [
      "Keep Lambda packages small — smaller packages cold start faster",
      "Use Lambda Layers for shared dependencies to avoid including them in every function",
      "Set appropriate memory (also affects CPU allocation) — profile to find the sweet spot",
    ],
  },

  // ── AI/ML Engineering new topics ─────────────────────────────────────────────
  {
    id: "aiml-deployment",
    domain: "AI/ML Engineer",
    title: "Model Deployment",
    breadcrumb: ["AI/ML Engineer", "Model Deployment"],
    difficulty: "Advanced",
    readTime: "10 min",
    summary:
      "Deploying ML models to production requires serving infrastructure, versioning, monitoring, and strategies for handling the unique challenges of ML systems.",
    prerequisites: ["Python basics", "REST APIs", "Docker Containers"],
    relatedTopics: ["aiml-mlops", "aiml-apis", "aiml-data-pipelines"],
    content:
      "Deploying an ML model means making it available for inference. Common patterns: REST API wrapper (Flask/FastAPI), batch prediction jobs, real-time streaming inference, and edge deployment.\n\nModel serving: FastAPI + Uvicorn for simple cases. TensorFlow Serving, TorchServe, or Triton Inference Server for high-throughput production. Managed services: AWS SageMaker, Google Vertex AI, Hugging Face Inference Endpoints.\n\nKey considerations: model size (affects latency and cost), batching (group multiple requests for GPU efficiency), model versioning (A/B testing, gradual rollout), and inference hardware (CPU vs GPU vs TPU trade-offs).",
    codeExample: {
      language: "Python",
      code: `from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="ML Model API")

# Load model once at startup (not per request)
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

class PredictionRequest(BaseModel):
    features: list[float]

class PredictionResponse(BaseModel):
    prediction: float
    confidence: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    X = np.array(request.features).reshape(1, -1)
    X_scaled = scaler.transform(X)
    prediction = model.predict(X_scaled)[0]
    proba = model.predict_proba(X_scaled).max()
    return PredictionResponse(
        prediction=float(prediction),
        confidence=float(proba)
    )

@app.get("/health")
async def health():
    return {"status": "healthy", "model_loaded": model is not None}`,
      output:
        "Model API serves predictions at /predict; health check at /health",
    },
    sections: [
      {
        id: "aiml-deployment-challenges",
        heading: "Production ML Challenges",
        content:
          "ML systems have unique production challenges beyond regular software:\n\n**Training-serving skew**: if your preprocessing in training differs from serving, predictions will be wrong. Solve by sharing the same preprocessing pipeline code.\n\n**Model drift**: real-world data changes over time; model performance degrades. Monitor prediction distributions and retrain when drift is detected.\n\n**Latency vs accuracy trade-offs**: larger models are more accurate but slower. Use model distillation, quantization, or ONNX conversion to optimize inference speed.",
      },
    ],
    commonMistakes: [
      "Loading the model inside the request handler — loads on every request, catastrophically slow",
      "Not versioning models — can't roll back when a new model performs worse",
      "No monitoring — silent degradation goes undetected until users complain",
    ],
    bestPractices: [
      "Use model registries (MLflow, W&B) to version and track all deployed models",
      "Implement shadow mode deployment — run new model in parallel without serving predictions to users",
      "Monitor input data distributions in production to detect covariate shift",
    ],
  },
  {
    id: "aiml-mlops",
    domain: "AI/ML Engineer",
    title: "MLOps Fundamentals",
    breadcrumb: ["AI/ML Engineer", "MLOps"],
    difficulty: "Advanced",
    readTime: "9 min",
    summary:
      "MLOps applies DevOps principles to machine learning — automating the ML lifecycle from data to deployment with reproducibility, monitoring, and continuous retraining.",
    prerequisites: ["Model Deployment", "CI/CD Pipelines", "Docker Containers"],
    relatedTopics: ["aiml-deployment", "aiml-data-pipelines"],
    content:
      "MLOps (Machine Learning Operations) is the practice of unifying ML development and operations. It addresses the unique challenges of ML systems: data dependencies, model experimentation, training pipelines, and model monitoring.\n\nCore components: experiment tracking (MLflow, Weights & Biases — log parameters, metrics, artifacts), feature stores (Feast, Tecton — share features across models), model registry (versioning, staging, production promotion), ML pipelines (Airflow, Kubeflow, ZenML — orchestrate data → train → evaluate → deploy steps).\n\nCI/CD for ML: data validation (Great Expectations), model evaluation gates (must beat baseline before deploying), automated retraining triggers (scheduled or drift-triggered).",
    codeExample: {
      language: "Python",
      code: `import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# MLflow experiment tracking
mlflow.set_experiment("credit-scoring")

with mlflow.start_run():
    # Log hyperparameters
    n_estimators = 100
    max_depth = 5
    mlflow.log_params({"n_estimators": n_estimators, "max_depth": max_depth})

    # Train
    model = RandomForestClassifier(
        n_estimators=n_estimators, max_depth=max_depth
    )
    model.fit(X_train, y_train)

    # Log metrics
    acc = accuracy_score(y_test, model.predict(X_test))
    mlflow.log_metric("accuracy", acc)

    # Log model artifact
    mlflow.sklearn.log_model(
        model, "model",
        registered_model_name="credit-risk-model"
    )
    print(f"Accuracy: {acc:.4f}, Run: {mlflow.active_run().info.run_id}")`,
      output: "Accuracy: 0.9234, Run: a1b2c3d4... — tracked in MLflow UI",
    },
    sections: [
      {
        id: "mlops-retraining",
        heading: "Automated Retraining Pipelines",
        content:
          "Models degrade over time as the real world changes (concept drift). Automated retraining maintains model quality.\n\nTriggers: scheduled (weekly retraining regardless), performance-based (retrain when accuracy drops below threshold), data-based (retrain when data drift detected above threshold).\n\nPipeline steps: 1) Ingest new data. 2) Run data validation. 3) Feature engineering. 4) Train new model. 5) Evaluate against current production model. 6) If better, deploy (with shadow/canary). 7) Monitor new model.",
      },
    ],
    commonMistakes: [
      "Treating ML pipelines like regular code pipelines — data versioning and model lineage require additional tooling",
      "No experiment tracking — can't reproduce results or compare runs",
    ],
    bestPractices: [
      "Track every experiment — disk is cheap, reproduced research is not",
      "Version your data alongside your models — knowing exactly what data produced a model is critical",
    ],
  },
  {
    id: "aiml-apis",
    domain: "AI/ML Engineer",
    title: "AI APIs & Integration",
    breadcrumb: ["AI/ML Engineer", "AI APIs"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "The major AI providers offer powerful APIs. Knowing how to integrate OpenAI, Anthropic, and Gemini APIs — with streaming, function calling, and error handling — is essential for building AI-powered apps.",
    prerequisites: ["REST APIs", "Python or JavaScript basics"],
    relatedTopics: ["aiml-llms", "aiml-data-pipelines"],
    content:
      "AI APIs provide access to large language models, image generation, speech, and embeddings without managing infrastructure. Major providers: OpenAI (GPT-4o, DALL-E, Whisper, text-embedding-3-small), Anthropic (Claude Sonnet 4.5, Claude Haiku for cost-efficiency), Google (Gemini, Gemma, text-embedding-004).\n\nKey patterns: streaming responses (don't wait for full response — stream tokens as they generate), function calling/tool use (let the model call your functions), system prompts (set context and constraints), and structured output (JSON mode guarantees parseable output).\n\nCost management: tokens = cost. Use cheaper models for classification/routing, expensive models for generation. Cache frequent responses. Use Claude Haiku or GPT-4o-mini for high-volume use cases.",
    codeExample: {
      language: "Python",
      code: `import anthropic
import json

client = anthropic.Anthropic()

# Streaming response
def stream_chat(message: str):
    with client.messages.stream(
        model="claude-sonnet-4-5",
        max_tokens=1024,
        messages=[{"role": "user", "content": message}]
    ) as stream:
        for text in stream.text_stream:
            print(text, end="", flush=True)

# Function calling / tool use
tools = [{
    "name": "get_weather",
    "description": "Get current weather for a city",
    "input_schema": {
        "type": "object",
        "properties": {"city": {"type": "string"}},
        "required": ["city"]
    }
}]

response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=256,
    tools=tools,
    messages=[{"role": "user", "content": "What's the weather in Mumbai?"}]
)
if response.stop_reason == "tool_use":
    tool_call = response.content[0]
    city = tool_call.input["city"]
    print(f"Model wants to call get_weather({city})")`,
      output:
        "Model streams response token by token; tool use detected for weather query",
    },
    sections: [
      {
        id: "aiml-apis-cost",
        heading: "Cost Optimization for AI APIs",
        content:
          "AI API costs scale with token usage. Strategies to reduce cost:\n\n**Model routing**: use cheap models (Haiku, GPT-4o-mini) for simple tasks (classification, summarization) and expensive models (Claude Sonnet, GPT-4o) only for complex generation.\n\n**Prompt caching**: Anthropic and OpenAI support caching the system prompt across requests — pay once, reuse for free. Essential for large context windows.\n\n**Response caching**: cache identical or near-identical queries with semantic similarity search (embeddings + vector DB).\n\n**Prompt compression**: LLMLingua and similar tools compress prompts by removing redundant tokens while preserving meaning.",
      },
    ],
    commonMistakes: [
      "Not setting max_tokens — model runs to maximum context length, burning budget",
      "Parsing LLM output with regex instead of using JSON mode or structured outputs",
      "No retry logic for rate limits — always implement exponential backoff",
    ],
    bestPractices: [
      "Use structured outputs (JSON mode) when you need parseable data from LLMs",
      "Log all API calls with input/output tokens for cost monitoring",
      "Set up budget alerts on API accounts to prevent unexpected charges",
    ],
  },
  {
    id: "aiml-data-pipelines",
    domain: "AI/ML Engineer",
    title: "Data Pipelines for ML",
    breadcrumb: ["AI/ML Engineer", "Data Pipelines"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "Machine learning is only as good as its data. ETL pipelines, feature engineering, data validation, and versioning are the unglamorous but critical work that determines model quality.",
    prerequisites: ["Python basics", "NumPy & Pandas", "SQL basics"],
    relatedTopics: ["aiml-mlops", "aiml-deployment"],
    content:
      "A data pipeline for ML transforms raw data into features ready for model training. Stages: ingestion (from databases, APIs, files, streams), validation (schema checks, distribution checks), transformation (cleaning, normalization, encoding), feature engineering (creating new informative features), and storage (feature store or training dataset).\n\nTools: Apache Airflow (workflow orchestration), Apache Spark (distributed processing), dbt (SQL-based transformations), Great Expectations (data quality tests), Pandas + Scikit-learn pipelines (small/medium data).\n\nData versioning: DVC (Data Version Control) tracks datasets and model artifacts in git-like fashion. Essential for reproducibility — you need to know exactly what data trained a model.",
    codeExample: {
      language: "Python",
      code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer

# Scikit-learn pipeline — prevents data leakage
numeric_features = ['age', 'income', 'credit_score']
categorical_features = ['occupation', 'loan_purpose']

numeric_transformer = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler()),
])

categorical_transformer = Pipeline([
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore', sparse_output=False)),
])

preprocessor = ColumnTransformer([
    ('num', numeric_transformer, numeric_features),
    ('cat', categorical_transformer, categorical_features),
])

# Full pipeline including model
from sklearn.ensemble import GradientBoostingClassifier
full_pipeline = Pipeline([
    ('preprocessor', preprocessor),
    ('classifier', GradientBoostingClassifier(n_estimators=100))
])

full_pipeline.fit(X_train, y_train)  # scaler only fits on training data
score = full_pipeline.score(X_test, y_test)`,
      output:
        "Pipeline prevents data leakage; preprocessing fitted only on training data",
    },
    sections: [
      {
        id: "data-pipelines-validation",
        heading: "Data Validation and Quality",
        content:
          "Data quality issues silently degrade model performance. Common issues: missing values, outliers, schema violations, distribution shift, duplicate rows, and mislabeled data.\n\nGreat Expectations defines expectations (tests) for data: `expect_column_values_to_be_between`, `expect_column_to_not_have_nulls`, `expect_column_mean_to_be_between`. Run these in CI to catch data quality issues before they reach training.",
      },
    ],
    commonMistakes: [
      "Fitting preprocessing (scaler, imputer) on the full dataset before train/test split — causes data leakage",
      "No data validation — silent quality issues corrupt training data and degrade models",
    ],
    bestPractices: [
      "Use sklearn Pipelines to bundle preprocessing with models — prevents leakage and simplifies deployment",
      "Version your training datasets with DVC alongside your model code",
    ],
  },
  {
    id: "aiml-llms",
    domain: "AI/ML Engineer",
    title: "Large Language Models",
    breadcrumb: ["AI/ML Engineer", "Large Language Models"],
    difficulty: "Intermediate",
    readTime: "9 min",
    summary:
      "LLMs are transformer-based models trained on massive text corpora. Understanding their capabilities, limitations, and how to work with them effectively is foundational for AI engineering.",
    prerequisites: ["Python basics", "API basics"],
    relatedTopics: ["aiml-apis", "aiml-data-pipelines", "aiml-deployment"],
    content:
      "Large Language Models (LLMs) are transformer-based neural networks trained on massive text corpora to predict the next token in a sequence. This simple objective leads to emergent capabilities: reasoning, code generation, translation, and summarization.\n\nTransformer architecture relies on self-attention — each token attends to all other tokens to build context-rich representations. Scale (model size, data, compute) drives capability — GPT-4, Claude, Gemini, and LLaMA are prominent examples.\n\nLLMs are accessed via APIs (OpenAI, Anthropic, Gemini). Key parameters: temperature (randomness — 0 for deterministic, 1+ for creative), max_tokens, top_p. LLMs hallucinate — they generate plausible but false information. Ground outputs with retrieval (RAG) or structured prompting.",
    codeExample: {
      language: "Python",
      code: `import anthropic

client = anthropic.Anthropic()

def chat(user_message: str, system: str = "") -> str:
    message = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=1024,
        system=system or "You are a helpful assistant.",
        messages=[{"role": "user", "content": user_message}]
    )
    return message.content[0].text

reply = chat(
    "Explain gradient descent in 3 sentences",
    system="You are a machine learning professor. Be concise."
)
print(reply)`,
      output:
        "Gradient descent minimizes a function by iteratively moving in the direction of steepest descent...",
    },
    sections: [
      {
        id: "llm-fine-tuning",
        heading: "Fine-Tuning vs Prompting",
        content:
          "When do you fine-tune vs use clever prompts?\n\n**Use prompting first** — it's faster, cheaper, and requires no training data. Few-shot examples in the prompt can dramatically improve quality. Most production AI use cases can be solved with good prompts.\n\n**Fine-tune when**: you need consistent output format/style, domain-specific knowledge not in training data, much shorter prompts needed (reducing cost), or you need a smaller/cheaper model to match a larger model's quality on a specific task.\n\nFine-tuning options: full fine-tuning (expensive, requires significant data), LoRA/QLoRA (parameter-efficient, adapts small matrices, state-of-the-art for LLMs), instruction tuning (format: input/output pairs teaching the model a task).",
      },
    ],
    commonMistakes: [
      "Using high temperature for factual tasks — use temperature 0 for deterministic, fact-based outputs",
      "Ignoring LLM hallucination risk — always validate factual claims with RAG or tool calls",
    ],
    bestPractices: [
      "Start with prompting before fine-tuning — 80% of problems can be solved with better prompts",
      "Use RAG to ground LLMs in facts — dramatically reduces hallucination for knowledge tasks",
    ],
  },

  // ── Game Dev new topics ───────────────────────────────────────────────────────
  {
    id: "gamedev-loop",
    domain: "Game Dev",
    title: "The Game Loop",
    breadcrumb: ["Game Dev", "The Game Loop"],
    difficulty: "Beginner",
    readTime: "7 min",
    summary:
      "The game loop is the heartbeat of every game — an infinite loop that reads input, updates game state, and renders the result, targeting 60 times per second.",
    prerequisites: [
      "Basic programming concepts",
      "Object-oriented programming",
    ],
    relatedTopics: ["gamedev-physics", "gamedev-sprites", "gamedev-collision"],
    content:
      "The game loop is the central mechanism of any game: continuously process input, update game state, render, repeat. A typical game targets 60 FPS — each frame must complete in under 16.67 milliseconds.\n\nFixed timestep: physics and game logic run at a fixed rate (e.g., 50Hz) regardless of render framerate. Rendering interpolates between physics states for smooth visuals. Unity's Update() runs per frame; FixedUpdate() runs at the physics rate.\n\nDelta time: multiply movement by delta time (time since last frame) so motion is frame-rate independent. A character moving `speed * deltaTime` moves at the same rate on 30fps and 120fps.",
    codeExample: {
      language: "C#",
      code: `// Unity game loop examples
public class Player : MonoBehaviour
{
    [SerializeField] private float speed = 5f;
    private Rigidbody2D rb;

    void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update: runs every render frame (variable rate)
    void Update()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");
        // Frame-rate independent movement
        transform.Translate(new Vector3(h, v, 0) * speed * Time.deltaTime);
    }

    // FixedUpdate: runs at fixed physics rate (50Hz default)
    void FixedUpdate()
    {
        // Physics operations belong here
        // rb.AddForce, rb.velocity assignments etc.
    }

    // LateUpdate: runs after all Updates (good for cameras)
    void LateUpdate()
    {
        // Camera.main.transform.position = ...
    }
}`,
      output:
        "Player moves smoothly at 5 units/second regardless of frame rate",
    },
    sections: [
      {
        id: "gamedev-loop-performance",
        heading: "Game Loop Performance",
        content:
          "Performance in games is about consistency, not just average speed. A single frame taking 100ms creates a visible stutter even if average FPS is 60. Profile regularly with Unity Profiler or browser DevTools.\n\nExpensive operations to avoid every frame: physics overlap tests, string allocations (garbage collection), GameObject.Find() calls, GetComponent() calls. Cache references in Awake/Start, pool objects instead of Destroy/Instantiate.\n\nCulling: only update entities the player can see. Spatial partitioning (quad trees, spatial hashing) makes finding nearby entities O(log n) instead of O(n).",
      },
    ],
    commonMistakes: [
      "Not multiplying movement by Time.deltaTime — movement speed tied to frame rate",
      "Doing physics in Update instead of FixedUpdate — causes jitter",
      "Calling GetComponent every frame — cache it in Awake",
    ],
    bestPractices: [
      "Use object pooling for frequently spawned/destroyed objects (bullets, particles, enemies)",
      "Profile on target hardware early — mobile GPU performance varies enormously",
      "Keep Update methods lean — offload expensive work to coroutines or Jobs system",
    ],
  },
  {
    id: "gamedev-physics",
    domain: "Game Dev",
    title: "Game Physics",
    breadcrumb: ["Game Dev", "Physics"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "Game physics simulate real-world forces — gravity, friction, collisions, and impulses — to make movement feel natural and satisfying.",
    prerequisites: ["The Game Loop", "Basic math"],
    relatedTopics: ["gamedev-loop", "gamedev-collision"],
    content:
      "Unity uses PhysX for physics simulation. Rigidbody (3D) and Rigidbody2D components make objects respond to forces, torques, and collisions. Always modify physics objects in FixedUpdate, not Update.\n\nForce modes: ForceMode.Force (constant force over time), ForceMode.Impulse (instant velocity change), ForceMode.Acceleration (ignores mass), ForceMode.VelocityChange (instant, ignores mass). For jumping: use ForceMode.Impulse for responsive feel.\n\nPhysics materials (PhysicsMaterial2D) control friction and bounciness. Layer-based collision matrix in Physics Settings controls which layers collide with which.",
    codeExample: {
      language: "C#",
      code: `using UnityEngine;

public class BallBounce : MonoBehaviour
{
    private Rigidbody2D rb;

    void Awake() => rb = GetComponent<Rigidbody2D>();

    // Physics in FixedUpdate
    void FixedUpdate()
    {
        // Cap max speed
        if (rb.velocity.magnitude > 15f)
            rb.velocity = rb.velocity.normalized * 15f;
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Coin"))
        {
            GameManager.Instance.AddScore(10);
            Destroy(other.gameObject);
        }
    }

    void OnCollisionEnter2D(Collision2D col)
    {
        if (col.gameObject.CompareTag("Wall"))
            rb.velocity = Vector2.Reflect(rb.velocity, col.contacts[0].normal);
    }
}`,
      output: "Ball bounces off walls and collects coins with score tracking",
    },
    sections: [
      {
        id: "gamedev-physics-optimization",
        heading: "Physics Optimization",
        content:
          "Physics is one of the most expensive systems in games. Optimization strategies:\n\n**Simplify colliders**: use Box/Circle colliders instead of Mesh colliders for gameplay objects. Mesh colliders are accurate but expensive.\n\n**Sleep**: Rigidbodies that are still automatically 'sleep' (stop being simulated) until disturbed. Don't disable sleep mode unless necessary.\n\n**Fixed timestep**: increasing Fixed Timestep in Project Settings reduces physics calculations per second — trades accuracy for performance. For mobile, 0.03 (33Hz) vs default 0.02 (50Hz) can help.",
      },
    ],
    commonMistakes: [
      "Modifying Rigidbody velocity directly every frame — creates jittery, unrealistic movement",
      "Using MeshCollider for all objects — use primitive colliders and composites",
      "Zero gravity scale on Rigidbody2D but expecting falling — check component settings",
    ],
    bestPractices: [
      "For precise platformer physics, control velocity directly rather than using forces",
      "Use constraints (Freeze Rotation Z) on 2D characters to prevent unwanted spinning",
      "Physics materials on surfaces are cleaner than code-based friction adjustments",
    ],
  },
  {
    id: "gamedev-collision",
    domain: "Game Dev",
    title: "Collision Detection",
    breadcrumb: ["Game Dev", "Collision Detection"],
    difficulty: "Intermediate",
    readTime: "7 min",
    summary:
      "Collision detection determines when game objects overlap. Understanding the difference between colliders, triggers, raycasts, and overlap tests is essential for game mechanics.",
    prerequisites: ["Game Physics", "The Game Loop"],
    relatedTopics: ["gamedev-physics", "gamedev-loop"],
    content:
      "Unity provides several collision detection methods: Physics callbacks (OnCollisionEnter, OnCollisionStay, OnCollisionExit for physical collisions), Trigger callbacks (OnTriggerEnter, OnTriggerStay, OnTriggerExit for overlap zones without physics response), and Physics queries (Physics2D.Raycast, Physics2D.OverlapCircle, Physics2D.OverlapBox for proactive checks).\n\nRaycasts shoot an invisible ray from a point in a direction and report the first (or all) objects hit. Use for: line-of-sight checks, ground detection, shooting, and mouse picking.\n\nContinuous collision detection (CCD) for fast-moving objects prevents tunneling — where an object moves so fast it passes through a collider in one frame.",
    codeExample: {
      language: "C#",
      code: `using UnityEngine;

public class GroundDetection : MonoBehaviour
{
    [SerializeField] private LayerMask groundLayer;
    [SerializeField] private float groundCheckRadius = 0.1f;
    [SerializeField] private Transform groundCheck;

    private bool isGrounded;

    void Update()
    {
        // Overlap circle check for ground detection
        isGrounded = Physics2D.OverlapCircle(
            groundCheck.position,
            groundCheckRadius,
            groundLayer
        );
    }

    // Raycast for shootingn
    void Shoot()
    {
        Vector2 dir = transform.right;
        RaycastHit2D hit = Physics2D.Raycast(transform.position, dir, 10f);
        if (hit.collider != null)
        {
            Debug.Log("Hit: " + hit.collider.name + " at " + hit.distance + "m");
            hit.collider.GetComponent<IDamageable>()?.TakeDamage(10);
        }
    }
}`,
      output:
        "Ground detection uses OverlapCircle; shooting uses Raycast for precision",
    },
    sections: [
      {
        id: "collision-layers",
        heading: "Layer-Based Collision Matrix",
        content:
          "Unity's Layer Collision Matrix (Physics 2D Settings) controls which layers interact physically. This is key for optimization and game logic:\n\n- Player collides with Ground, Enemies, and Collectibles\n- Bullets collide with Enemies and Ground but not with each other or the Player\n- Enemies don't collide with each other (prevents pileup)\n\nFiltering by layer is much more efficient than checking object tags in collision callbacks.",
      },
    ],
    commonMistakes: [
      "Using OnCollisionEnter when you want a trigger zone — add IsTrigger to the collider",
      "Not setting up layer collision matrix — everything collides with everything, causing performance issues",
      "Not using CCD for fast-moving projectiles — bullets can pass through thin walls",
    ],
    bestPractices: [
      "Use composite colliders for tilemaps instead of individual tile colliders",
      "Put ground checks (OverlapCircle) on a child empty GameObject at the character's feet",
      "Cache LayerMask in Awake as a field — don't call LayerMask.GetMask every frame",
    ],
  },
  {
    id: "gamedev-sprites",
    domain: "Game Dev",
    title: "Sprites & 2D Animation",
    breadcrumb: ["Game Dev", "Sprites & Animation"],
    difficulty: "Beginner",
    readTime: "7 min",
    summary:
      "Sprites are 2D images rendered in the game world. The Unity Animator, Sprite Atlas, and sprite sheet animation workflow brings 2D characters to life.",
    prerequisites: ["The Game Loop", "Unity basics"],
    relatedTopics: ["gamedev-loop", "gamedev-physics"],
    content:
      "A sprite is a 2D image (PNG with transparency) rendered in the game scene. Unity's SpriteRenderer component displays sprites. Multiple sprites in a spritesheet atlas are sliced in the Sprite Editor.\n\nAnimations: Unity's Animator component + Animator Controller defines a state machine of animations. States are individual animations (idle, run, jump). Transitions between states are triggered by Animator parameters (bool, int, float, trigger).\n\nSprite Atlas: packs multiple sprites into a single texture for fewer draw calls. Essential for performance on mobile.",
    codeExample: {
      language: "C#",
      code: `using UnityEngine;

public class PlayerAnimator : MonoBehaviour
{
    private Animator animator;
    private Rigidbody2D rb;

    // Animator parameter hashes (faster than strings)
    private static readonly int SpeedHash = Animator.StringToHash("Speed");
    private static readonly int IsGroundedHash = Animator.StringToHash("IsGrounded");
    private static readonly int JumpHash = Animator.StringToHash("Jump");

    void Awake()
    {
        animator = GetComponent<Animator>();
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        // Drive animator from physics state
        animator.SetFloat(SpeedHash, Mathf.Abs(rb.velocity.x));
        animator.SetBool(IsGroundedHash, IsGrounded());

        // Flip sprite based on movement direction
        float h = Input.GetAxisRaw("Horizontal");
        if (h != 0)
            transform.localScale = new Vector3(Mathf.Sign(h), 1, 1);
    }

    public void TriggerJump()
    {
        animator.SetTrigger(JumpHash);
    }
}`,
      output:
        "Animator smoothly transitions between idle/run/jump based on Rigidbody velocity",
    },
    sections: [
      {
        id: "sprites-performance",
        heading: "Sprite Performance",
        content:
          "Draw calls are the primary mobile performance bottleneck. Each unique material = 1+ draw calls. Sprite Atlas batches sprites sharing the same atlas into 1 draw call.\n\nDynamic batching: Unity automatically batches small meshes (sprites under 900 vertices) sharing the same material. Static batching: mark stationary objects as Static — Unity bakes them together at build time.",
      },
    ],
    commonMistakes: [
      "Not using Sprite Atlas — each sprite becomes a separate draw call",
      "Using string names for Animator parameters instead of hashed integers — minor but measurable",
    ],
    bestPractices: [
      "Pack all sprites for a character or scene into one Sprite Atlas",
      "Use Animator parameter hashes (Animator.StringToHash) for performance-critical code",
    ],
  },
  {
    id: "gamedev-audio",
    domain: "Game Dev",
    title: "Game Audio",
    breadcrumb: ["Game Dev", "Audio"],
    difficulty: "Beginner",
    readTime: "6 min",
    summary:
      "Audio is 50% of the game experience. Sound effects, music, and spatial audio create immersion. Unity's AudioSource and AudioMixer make audio management professional.",
    prerequisites: ["The Game Loop", "Unity basics"],
    relatedTopics: ["gamedev-loop", "gamedev-sprites"],
    content:
      "Unity's audio system: AudioSource plays audio clips. AudioListener (on the camera) is the 'ears'. Spatial audio: 3D sounds get quieter as the listener moves away — set AudioSource Spatial Blend to 1 for 3D.\n\nAudioMixer groups audio into buses (SFX, Music, UI) with master volume control. Mix volumes independently. Apply effects (reverb, EQ, compression) per group. Route all AudioSources to their group via the Output field.\n\nAudio performance: use compressed formats (MP3/OGG) for music (large files, streamed). Use uncompressed PCM for short SFX (loaded in memory, instant play). Load on demand for large banks; preload frequently used clips.",
    codeExample: {
      language: "C#",
      code: `using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager Instance { get; private set; }

    [SerializeField] private AudioSource musicSource;
    [SerializeField] private AudioSource sfxSource;

    [Header("SFX Clips")]
    [SerializeField] private AudioClip jumpClip;
    [SerializeField] private AudioClip coinClip;
    [SerializeField] private AudioClip deathClip;

    void Awake()
    {
        if (Instance != null) { Destroy(gameObject); return; }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    public void PlaySFX(AudioClip clip, float volume = 1f)
    {
        sfxSource.PlayOneShot(clip, volume);
    }

    public void PlayJump()   => PlaySFX(jumpClip);
    public void PlayCoin()   => PlaySFX(coinClip, 0.8f);
    public void PlayDeath()  => PlaySFX(deathClip);

    public void SetMusicVolume(float v) => musicSource.volume = v;
}`,
      output:
        "Singleton AudioManager plays SFX without interrupting other sounds",
    },
    sections: [
      {
        id: "audio-best",
        heading: "Professional Audio Practices",
        content:
          "Use PlayOneShot for overlapping sounds (multiple coin pickups at once). Play music in a dedicated AudioSource with loop=true. Use AudioMixer exposed parameters to adjust volumes from code — Unity's AudioMixer.SetFloat() connects to UI volume sliders.\n\nNormalize all audio assets to -6dB to prevent clipping when multiple sounds play simultaneously. Silence is as important as sound — don't fill every moment with audio.",
      },
    ],
    commonMistakes: [
      "Using audioSource.Play() for SFX — stops previous sound of the same source",
      "Not using AudioMixer — no volume control, no effects grouping",
      "Not calling DontDestroyOnLoad on the AudioManager — music restarts on scene change",
    ],
    bestPractices: [
      "Use PlayOneShot for sound effects that should overlap",
      "Implement an audio bus hierarchy: Master > Music, Master > SFX > Player, SFX > World",
      "Store PlayerPrefs volume settings and restore them on startup",
    ],
  },

  // ── UI/UX Designer new topics ─────────────────────────────────────────────────
  {
    id: "uidesign-principles",
    domain: "UI/UX Designer",
    title: "UX Design Principles",
    breadcrumb: ["UI/UX Designer", "UX Principles"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "Great UX is invisible — users accomplish goals without friction. Understanding Gestalt, Hick's Law, Fitts's Law, and Jakob's Law gives you a principled foundation for every design decision.",
    prerequisites: ["Basic design interest"],
    relatedTopics: [
      "uidesign-typography",
      "uidesign-color",
      "uidesign-wireframing",
    ],
    content:
      "User Experience Design is the practice of designing products that provide meaningful, relevant experiences to users. UX encompasses every touchpoint: how users find the product, onboard, accomplish tasks, and return.\n\nKey UX laws: Fitts's Law (larger, closer targets are faster to click — make hit targets generous, especially on mobile). Hick's Law (more choices = longer decision time — simplify navigation, reduce options). Miller's Law (short-term memory holds 7±2 items — chunk information). Jakob's Law (users spend most time on other sites — follow platform conventions).\n\nGestalt principles explain visual perception: proximity (nearby elements feel grouped), similarity (similar elements feel related), continuation (eyes follow lines and curves), and closure (brains complete incomplete shapes).",
    codeExample: {
      language: "CSS",
      code: `/* Visual Hierarchy with type scale */
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-4xl: 2.25rem;
}

/* 8pt spacing grid */
.card { padding: 24px; gap: 16px; }
.button { padding: 12px 24px; border-radius: 8px; }

/* Minimum touch target (44px x 44px) */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
      output: "Consistent spacing grid with accessible touch targets",
    },
    sections: [
      {
        id: "ux-user-research",
        heading: "User Research Methods",
        content:
          "Design without research is guesswork. Key methods:\n\n**User interviews** (qualitative) — structured conversations revealing mental models, pain points, and goals. Ask 'why' to uncover underlying motivations. 5-8 users reveal 80% of usability issues.\n\n**Usability testing** — observe real users attempting tasks. Task completion rate, time on task, and error rate are objective metrics. Moderated (you're present) vs. unmoderated (users complete remotely).\n\n**Card sorting** — users organize topics into categories, revealing their mental model for information architecture.\n\n**Analytics** — quantitative behavior data (heatmaps, funnel analysis, session recordings). Answers 'what' but not 'why' — pair with qualitative research.",
      },
      {
        id: "ux-user-flows",
        heading: "User Flows & Information Architecture",
        content:
          "User flows map the paths users take through your product to accomplish goals. A flow has: entry point → decision points → actions → outcomes. Document happy paths (success) and unhappy paths (errors, edge cases).\n\nInformation Architecture (IA) organizes content so users can find it. Methods: tree testing (validate IA without visual design), card sorting (discover natural groupings), and sitemap diagramming.\n\nNavigation patterns: top navigation (6-7 items max), sidebar navigation (12-15 items, sectioned), bottom navigation mobile (5 items max), hamburger menu (hides navigation — use only when space is premium).",
      },
    ],
    commonMistakes: [
      "Designing for yourself instead of your users — you are not the user",
      "Testing only with colleagues — they know the product too well to represent real users",
      "Skipping user research under time pressure — problems found in research are 100x cheaper than problems found in production",
    ],
    bestPractices: [
      "Test early and often — even paper prototypes reveal fundamental usability issues",
      "Document user personas and keep them visible to the team during design",
      "Prioritize tasks by frequency × importance — design for what users do most first",
    ],
  },
  {
    id: "uidesign-typography",
    domain: "UI/UX Designer",
    title: "Typography in UI Design",
    breadcrumb: ["UI/UX Designer", "Typography"],
    difficulty: "Beginner",
    readTime: "7 min",
    summary:
      "Typography is the visual representation of language. Well-chosen typefaces, scales, and spacing guide the reader's eye, establish hierarchy, and reinforce brand identity.",
    prerequisites: ["Basic design interest"],
    relatedTopics: ["uidesign-color", "uidesign-principles"],
    content:
      "Typography guides hierarchy and reading experience. A type system needs: a display font for headlines (personality, expressive), a body font for reading (neutral, legible at small sizes), and optionally a monospace for code.\n\nType scale: use a modular scale (1.25 ratio: 12, 15, 19, 24, 30, 38, 48px). Base is 16px. Line height: 1.5 for body text (comfortable reading), 1.2 for headings (tight, impactful). Max line length: 65-80 characters — beyond this, readers lose their place.\n\nFont pairing: pair fonts with contrast — a geometric sans-serif display with a humanist sans-serif body. Avoid pairing similar fonts (two geometric sans-serifs) — no contrast, no interest.",
    codeExample: {
      language: "CSS",
      code: `/* Type system */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Modular scale (1.25) */
  --text-xs:   0.64rem;  /* 10px */
  --text-sm:   0.8rem;   /* 13px */
  --text-base: 1rem;     /* 16px */
  --text-lg:   1.25rem;  /* 20px */
  --text-xl:   1.563rem; /* 25px */
  --text-2xl:  1.953rem; /* 31px */
  --text-3xl:  2.441rem; /* 39px */
  --text-4xl:  3.052rem; /* 49px */
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
}

h1 { font-family: var(--font-display); font-size: var(--text-4xl); line-height: 1.1; }
p  { max-width: 65ch; }  /* optimal line length */`,
      output: "Consistent type scale with optimal reading width",
    },
    sections: [
      {
        id: "typography-accessibility",
        heading: "Typography Accessibility",
        content:
          "Accessible typography ensures all users can read your content. WCAG AA requires 4.5:1 contrast ratio for normal text, 3:1 for large text (18px+ regular or 14px+ bold). Use tools like the WebAIM Contrast Checker or browser DevTools accessibility panel.\n\nMinimum font sizes: 16px for body text (browser default), 14px minimum for secondary/caption text. Never use 10px or 12px for anything important — many users have reduced vision.\n\nDon't rely on color alone to convey information — also use icons, patterns, or text labels for accessibility.",
      },
    ],
    commonMistakes: [
      "Using more than 3 font families — creates visual chaos, not richness",
      "Setting line-height to 1 for body text — hard to read, lines feel crowded",
      "Using pure black (#000) text on pure white (#fff) — harsh, creates eyestrain; use #1a1a1a on #fafafa",
    ],
    bestPractices: [
      "Use a type scale tool like typescale.com to generate a harmonious scale",
      "Load fonts with font-display: swap to avoid invisible text while fonts load",
      "Set a meaningful base size (16-18px) and scale from there",
    ],
  },
  {
    id: "uidesign-color",
    domain: "UI/UX Designer",
    title: "Color Theory for UI",
    breadcrumb: ["UI/UX Designer", "Color Theory"],
    difficulty: "Beginner",
    readTime: "8 min",
    summary:
      "Color communicates meaning before a single word is read. A strategic color system uses a limited palette with semantic meaning — primary, surface, semantic, and neutral tones.",
    prerequisites: ["Basic design interest"],
    relatedTopics: ["uidesign-typography", "uidesign-principles"],
    content:
      "Color theory in UI design focuses on communication, not aesthetics alone. Colors carry meaning: blue (trust, calm), green (success, nature), red (danger, error), yellow/amber (warning, energy), purple (creativity, premium).\n\nA UI color system has roles: Primary (brand, CTAs), Secondary (supporting actions), Surface (backgrounds, cards), Neutral (text, borders), Semantic (success=green, error=red, warning=amber, info=blue). Define 2-3 shades per role (light, base, dark).\n\nThe 60-30-10 rule: 60% dominant color (background), 30% secondary (cards, sidebars), 10% accent (CTAs, highlights). Never use more than 3 hues in a single UI view — visual chaos.",
    codeExample: {
      language: "CSS",
      code: `/* Semantic color system */
:root {
  /* Brand */
  --color-primary-50:  oklch(97% 0.02 264);
  --color-primary-500: oklch(55% 0.20 264);
  --color-primary-900: oklch(25% 0.15 264);

  /* Semantic */
  --color-success: oklch(65% 0.18 145);  /* green */
  --color-error:   oklch(60% 0.22 25);   /* red */
  --color-warning: oklch(75% 0.18 75);   /* amber */
  --color-info:    oklch(65% 0.17 240);  /* blue */

  /* Neutrals */
  --color-surface:     oklch(99% 0.005 264);
  --color-on-surface:  oklch(20% 0.01 264);
  --color-muted:       oklch(60% 0.01 264);
  --color-border:      oklch(88% 0.01 264);
}`,
      output:
        "Semantic color tokens apply meaning consistently across all components",
    },
    sections: [
      {
        id: "color-dark-mode",
        heading: "Dark Mode Color Design",
        content:
          "Dark mode is not simply inverting colors. A dark theme uses darker background colors but NOT pure black (#000) — very dark grays (oklch(10-15% 0.01 hue)) are easier on the eyes and show elevation depth.\n\nElevation in dark mode is communicated by surface color lightness: lower surfaces are darker, higher surfaces (modals, cards on top) are slightly lighter. The opposite of light mode.\n\nUse `prefers-color-scheme: dark` media query or a data-theme attribute. Define separate token values for light and dark — don't try to use the same values for both.",
      },
    ],
    commonMistakes: [
      "Using raw color values throughout — always use semantic tokens (--color-primary, not #3b82f6)",
      "Creating dark mode by inverting colors — always design a proper dark palette",
      "Not testing color contrast — use DevTools accessibility panel to verify ratios",
    ],
    bestPractices: [
      "Use OKLCH color space for perceptually uniform palettes",
      "Define semantic tokens (--color-success) that reference scale tokens (--color-green-500)",
      "Always check color combinations in both light and dark themes",
    ],
  },
  {
    id: "uidesign-wireframing",
    domain: "UI/UX Designer",
    title: "Wireframing & Prototyping",
    breadcrumb: ["UI/UX Designer", "Wireframing"],
    difficulty: "Beginner",
    readTime: "7 min",
    summary:
      "Wireframes define structure and flow before visual design begins. Prototypes simulate interactivity to validate ideas with users before any code is written.",
    prerequisites: ["UX Principles"],
    relatedTopics: ["uidesign-principles", "uidesign-accessibility"],
    content:
      "Wireframing is the practice of creating simplified, low-fidelity representations of UI to define layout, structure, and flow before investing in visual design. Good wireframes show: information hierarchy, content placement, navigation structure, and key interactions.\n\nFidelity levels: Low-fi (paper sketches — fast, disposable, great for early exploration), Mid-fi (digital wireframes, Figma/Balsamiq — no colors/images, focus on layout), High-fi (polished mockups — accurate representation, ready for dev handoff).\n\nFigma is the industry standard tool. Components and auto-layout make wireframes maintainable. Prototyping in Figma connects frames with interactions — simulates navigation without code.",
    codeExample: {
      language: "CSS",
      code: `/* Wireframe-to-code: common layout patterns */

/* Card grid — often wireframed as boxes */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* List with avatar pattern */
.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
}
.avatar { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; }
.list-item-text { flex: 1; min-width: 0; }

/* Sidebar + main layout */
.page-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}`,
      output: "Common wireframe patterns translated to responsive CSS layouts",
    },
    sections: [
      {
        id: "wireframing-figma",
        heading: "Figma Essentials for Wireframing",
        content:
          "Figma is a browser-based design tool with real-time collaboration. Key features for wireframing:\n\n**Auto Layout**: frames that behave like CSS flexbox — children resize and reflow automatically. Essential for components that must adapt to content.\n\n**Components**: reusable elements with overrides. Button component with variants (primary/secondary/ghost, sizes, states). Change one master component and all instances update.\n\n**Prototyping**: connect frames with click interactions, overlays, and transitions. Share the prototype link with stakeholders for feedback without writing code.",
      },
    ],
    commonMistakes: [
      "Starting with high-fidelity too early — spending time on colors before validating structure",
      "Not using Figma components — redesigning the same button 50 times",
      "Wireframing without content — use realistic text and content lengths, not Lorem ipsum",
    ],
    bestPractices: [
      "Use the 8pt grid in Figma (Preferences > Nudge: 8px) for consistent spacing",
      "Name your layers descriptively — messy Figma files slow down dev handoff",
      "Create a component library for your design system before starting any screens",
    ],
  },
  {
    id: "uidesign-accessibility",
    domain: "UI/UX Designer",
    title: "Accessibility in UI Design",
    breadcrumb: ["UI/UX Designer", "Accessibility"],
    difficulty: "Intermediate",
    readTime: "8 min",
    summary:
      "Accessible design ensures your product works for everyone — including people with visual, motor, hearing, and cognitive disabilities. WCAG 2.2 defines the standards.",
    prerequisites: ["UX Principles", "Typography", "Color Theory"],
    relatedTopics: ["uidesign-principles", "uidesign-color"],
    content:
      "Accessibility (a11y) is the practice of designing products usable by people with disabilities. WCAG (Web Content Accessibility Guidelines) 2.2 defines standards at three levels: A (minimum), AA (standard, legally required in many jurisdictions), AAA (enhanced).\n\nFour principles (POUR): Perceivable (users can access all information), Operable (UI components are operable by keyboard), Understandable (content and operation are understandable), Robust (compatible with current and future assistive technologies).\n\nKey WCAG AA requirements: 4.5:1 text contrast, 3:1 large text and UI components, keyboard navigation for all interactive elements, visible focus indicators, alt text for images, captions for video, no content triggered by hover only.",
    codeExample: {
      language: "CSS",
      code: `/* Accessible focus styles — don't remove outline! */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip-to-content link for keyboard users */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  background: var(--color-primary-500);
  color: white;
  padding: 8px 16px;
  border-radius: 0 0 8px 8px;
  z-index: 9999;
  font-weight: 600;
  text-decoration: none;
}
.skip-link:focus { top: 0; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`,
      output:
        "Focus styles visible; skip link helps keyboard users bypass navigation",
    },
    sections: [
      {
        id: "a11y-aria",
        heading: "ARIA Roles and Semantic HTML",
        content:
          "The first rule of ARIA: don't use ARIA if a native HTML element already has the semantics. `<button>` is natively focusable with keyboard. `<input>` has built-in label association. `<nav>`, `<main>`, `<header>`, `<footer>` define landmark regions that screen readers announce.\n\nARIA is for complex custom components: `role='dialog'` for modals, `aria-expanded` for accordions, `aria-live='polite'` for dynamic content updates, `aria-label` for icon-only buttons.\n\nFocus management: when a modal opens, focus must move inside it. When closed, focus returns to the trigger. This is critical — without it, keyboard users lose their position in the page.",
      },
    ],
    commonMistakes: [
      "Removing outline on :focus globally — keyboard users lose all navigation feedback",
      "Using color alone to convey status (red = error) without text or icon",
      "Not testing with a screen reader — VoiceOver (macOS), NVDA (Windows), TalkBack (Android)",
    ],
    bestPractices: [
      "Run automated accessibility checks with axe-core or Lighthouse — catches ~30% of issues automatically",
      "Include keyboard navigation and screen reader testing in your QA checklist",
      "Design focus states as carefully as hover states — keyboard users deserve equal experience",
    ],
  },

  // ── C Programming (rich topics) ─────────────────────────────────────────────
  {
    id: "c-memory",
    domain: "C Programming",
    title: "Memory in Computer Systems",
    breadcrumb: ["C Programming", "Module 1", "Memory"],
    difficulty: "Beginner" as const,
    readTime: "6 min",
    summary:
      "Memory is where a running program stores its data. Understanding RAM, ROM, cache, and the memory hierarchy is essential before writing any C program.",
    prerequisites: ["Basic computer concepts"],
    relatedTopics: ["c-processor", "c-storage", "c-variables"],
    content:
      "Memory is the workspace of a running computer. The CPU can only directly process data that is in RAM (Random Access Memory) — it is fast, volatile (loses data when powered off), and temporary.\n\nThe memory hierarchy from fastest/smallest to slowest/largest: CPU Registers → Cache (L1/L2/L3) → RAM → Secondary Storage (SSD/HDD). Each level is progressively slower and larger. C programs work primarily in RAM, but understanding this hierarchy helps write cache-friendly code.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // Stack memory — automatically managed
    int x = 42;
    char name[20] = "Code & Crush";

    // Heap memory — manually managed with malloc/free
    int *arr = (int *)malloc(5 * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    for (int i = 0; i < 5; i++) arr[i] = i * 10;
    printf("Heap value: %d\\n", arr[3]);  // 30
    free(arr);  // always free heap memory

    printf("Stack int: %d\\n", x);
    printf("Stack string: %s\\n", name);
    return 0;
}`,
      output: "Heap value: 30\nStack int: 42\nStack string: Code & Crush",
      runnable: true,
    },
    sections: [
      {
        id: "c-memory-types",
        heading: "Types of Memory: RAM, ROM, Cache",
        content:
          "**RAM (Random Access Memory)** is volatile main memory. When you declare a variable in C, it lives in RAM. Modern computers have 4–64 GB of RAM. **ROM (Read-Only Memory)** stores firmware that persists without power — like BIOS/UEFI. You cannot write to ROM from normal C programs.\n\n**Cache memory** sits between the CPU and RAM. L1 cache (~32 KB, inside CPU core) is the fastest. L2 (~256 KB) and L3 (4–64 MB, shared) are progressively larger and slower. The CPU automatically loads memory into cache lines (64 bytes). Accessing elements sequentially (row-major order in 2D arrays) is cache-friendly and much faster than random access.",
        codeExamples: [
          {
            language: "C",
            label: "Stack vs heap memory demonstration",
            code: `#include <stdio.h>
#include <stdlib.h>

void demo() {
    int stack_var = 100;   // lives on the stack
    int *heap_var = (int *)malloc(sizeof(int));
    *heap_var = 200;       // lives on the heap

    printf("Stack addr: %p, value: %d\\n", (void*)&stack_var, stack_var);
    printf("Heap  addr: %p, value: %d\\n", (void*)heap_var, *heap_var);
    free(heap_var);
}

int main() { demo(); return 0; }`,
            output:
              "Stack addr: 0x7ffd..., value: 100\nHeap  addr: 0x55d3..., value: 200",
            runnable: true,
          },
        ],
      },
      {
        id: "c-memory-layout",
        heading: "C Program Memory Layout",
        content:
          "A compiled C program's memory is divided into segments: **Text segment** — read-only machine code. **Data segment** — global and static variables (initialized). **BSS segment** — uninitialized globals (zero-filled). **Stack** — local variables, function call frames, grows downward. **Heap** — dynamic memory (malloc/free), grows upward.\n\nStack overflows occur when recursion is too deep or local arrays are too large. Heap fragmentation happens when you allocate and free many small chunks. Understanding these segments helps diagnose segfaults and memory bugs.",
      },
    ],
    commonMistakes: [
      "Forgetting to free heap memory — causes memory leaks that grow over time",
      "Accessing freed memory (use-after-free) — undefined behavior, likely a crash",
      "Assuming stack memory persists after a function returns — it is overwritten",
    ],
    bestPractices: [
      "Every malloc() must have exactly one corresponding free()",
      "Set pointers to NULL after freeing to prevent use-after-free bugs",
      "Prefer stack allocation for small, short-lived data; use heap for large or long-lived data",
    ],
  },
  {
    id: "c-processor",
    domain: "C Programming",
    title: "The Processor (CPU)",
    breadcrumb: ["C Programming", "Module 1", "Processor"],
    difficulty: "Beginner" as const,
    readTime: "5 min",
    summary:
      "The CPU is the brain of the computer. Understanding the fetch-decode-execute cycle, registers, and how C code becomes machine instructions helps you write efficient programs.",
    prerequisites: ["c-memory"],
    relatedTopics: ["c-memory", "c-io-devices", "c-assembler-compiler"],
    content:
      "The CPU executes machine instructions in a continuous cycle: **Fetch** (load next instruction from memory into instruction register), **Decode** (determine what operation to perform), **Execute** (perform the operation using the ALU or control unit).\n\nModern CPUs have multiple cores (each with its own registers and L1/L2 cache), branch prediction, and pipelining — executing multiple instructions simultaneously at different stages. A C compiler generates machine code optimized for this architecture.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>
#include <time.h>

/* Demonstrates how CPU-bound operations differ from memory-bound */
int main() {
    long long sum = 0;
    clock_t start = clock();

    // CPU-bound: pure arithmetic in registers
    for (long long i = 0; i < 1000000000LL; i++) {
        sum += i;
    }

    clock_t end = clock();
    double seconds = (double)(end - start) / CLOCKS_PER_SEC;
    printf("Sum: %lld\\n", sum);
    printf("Time: %.3f seconds\\n", seconds);
    return 0;
}`,
      output: "Sum: 499999999500000000\nTime: 0.312 seconds",
      runnable: true,
    },
    sections: [
      {
        id: "c-processor-registers",
        heading: "Registers and the ALU",
        content:
          "Registers are the CPU's internal storage — the fastest memory in the system (~1 cycle access). A typical CPU has 16–32 general-purpose registers plus special-purpose ones: **Program Counter (PC)** — address of next instruction. **Stack Pointer (SP)** — top of the call stack. **Instruction Register (IR)** — currently executing instruction.\n\nThe **ALU (Arithmetic Logic Unit)** performs addition, subtraction, bitwise operations, and comparisons. When you write `a + b` in C, the compiler generates instructions to load `a` and `b` into registers, perform the addition in the ALU, and store the result.",
        codeExamples: [
          {
            language: "C",
            label: "Seeing generated assembly (conceptually)",
            code: `/* This C code:
   int add(int a, int b) { return a + b; }

   Compiles to roughly this x86-64 assembly:
   add:
       mov  eax, edi    ; load first arg into register
       add  eax, esi    ; add second arg (ALU operation)
       ret              ; return (value in eax)
*/
#include <stdio.h>
int add(int a, int b) { return a + b; }
int main() {
    printf("%d\\n", add(3, 4));  // 7
    return 0;
}`,
            output: "7",
            runnable: true,
          },
        ],
      },
      {
        id: "c-processor-pipeline",
        heading: "Pipelining and Performance",
        content:
          "Pipelining overlaps the fetch-decode-execute stages of multiple instructions. While one instruction executes, the next is being decoded, and the one after is being fetched — improving throughput. A branch (if/else, loop) can disrupt the pipeline because the CPU doesn't know which instruction to fetch next.\n\nModern CPUs use **branch prediction** to guess which way a branch will go and speculatively execute ahead. A mispredicted branch flushes the pipeline, costing 10–20 cycles. Writing predictable code (sorted data, early returns) is branch-prediction-friendly.",
      },
    ],
    commonMistakes: [
      "Assuming all operations take the same time — division is 5-90x slower than addition",
      "Ignoring branch prediction — random data in if-conditions causes many mispredictions",
      "Not considering cache effects — accessing memory in sequential order is much faster",
    ],
    bestPractices: [
      "Use compiler optimization flags (-O2, -O3) — the compiler knows CPU architecture better than you",
      "Profile before optimizing — measure what is actually slow before guessing",
      "Keep inner loops simple — the CPU pipeline thrives on predictable, simple operations",
    ],
  },
  {
    id: "c-io-devices",
    domain: "C Programming",
    title: "Input/Output Devices",
    breadcrumb: ["C Programming", "Module 1", "I/O Devices"],
    difficulty: "Beginner" as const,
    readTime: "5 min",
    summary:
      "I/O devices connect the computer to the outside world. In C, the standard I/O library (stdio.h) abstracts keyboard input, screen output, and file access through a unified interface.",
    prerequisites: ["c-memory", "c-processor"],
    relatedTopics: ["c-variables", "c-data-types", "c-storage"],
    content:
      "Input devices (keyboard, mouse, microphone, sensors) feed data to the CPU. Output devices (monitor, printer, speakers) present results to users. Storage devices (SSD, HDD) are both input and output.\n\nIn C, all I/O is abstracted through **streams** — a sequence of bytes flowing to/from a device. Three standard streams exist at program start: `stdin` (keyboard), `stdout` (screen), `stderr` (error messages). Functions in `<stdio.h>` like `printf`, `scanf`, `fgets`, and `fputc` work with these streams.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int main() {
    // Output to stdout
    printf("Enter your name: ");

    // Input from stdin
    char name[50];
    fgets(name, sizeof(name), stdin);  // safer than scanf for strings

    // printf to stdout
    printf("Hello, %s", name);

    // fprintf to stderr (errors go here)
    fprintf(stderr, "Debug: name read successfully\\n");

    // Formatted integer input
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old.\\n", age);

    return 0;
}`,
      output:
        "Enter your name: Alice\nHello, Alice\nEnter your age: 20\nYou are 20 years old.",
      runnable: true,
    },
    sections: [
      {
        id: "c-io-streams",
        heading: "Streams and Buffering",
        content:
          'A **stream** is an abstraction over a data source/destination. stdout is **line-buffered** when connected to a terminal — output is flushed when a newline is written. When redirected to a file, it becomes **fully buffered** (flushed only when full or when `fclose`/`fflush` is called).\n\nThis is why `printf("Starting...")` with no newline might not appear before a crash — the buffer was never flushed. Call `fflush(stdout)` to force output, or always end output lines with `\\n`.',
        codeExamples: [
          {
            language: "C",
            label: "Reading a line safely with fgets",
            code: `#include <stdio.h>
#include <string.h>

int main() {
    char line[100];
    printf("Enter a line: ");
    fgets(line, sizeof(line), stdin);

    // fgets includes the newline — remove it
    line[strcspn(line, "\\n")] = '\\0';

    printf("You entered: [%s]\\n", line);
    return 0;
}`,
            output: "Enter a line: Hello World\nYou entered: [Hello World]",
            runnable: true,
          },
        ],
      },
      {
        id: "c-io-file",
        heading: "File I/O in C",
        content:
          'Files are treated as streams in C. Use `fopen()` to open a file (returns a `FILE*`), `fprintf`/`fscanf`/`fgets`/`fputs` to read/write, and `fclose()` to close. Always check that `fopen` did not return NULL before using the pointer.\n\nFile modes: `"r"` (read), `"w"` (write, creates/truncates), `"a"` (append), `"r+"` (read+write). Binary variants: `"rb"`, `"wb"` — important on Windows where text mode translates newlines.',
      },
    ],
    commonMistakes: [
      'Using scanf("%s") — no buffer length limit, causes buffer overflow; use fgets instead',
      "Not checking the return value of fopen — file may not exist or have wrong permissions",
      "Mixing scanf and fgets — scanf leaves newlines in the buffer that confuse fgets",
    ],
    bestPractices: [
      "Always use fgets instead of gets() — gets() was removed from C11 due to buffer overflow risk",
      "Check fopen() return for NULL before reading or writing",
      "Use fflush(stdout) before reading input to ensure prompts appear before the cursor",
    ],
  },
  {
    id: "c-storage",
    domain: "C Programming",
    title: "Storage Devices",
    breadcrumb: ["C Programming", "Module 1", "Storage"],
    difficulty: "Beginner" as const,
    readTime: "5 min",
    summary:
      "Secondary storage (HDD, SSD, USB) provides persistent, non-volatile data storage. In C, you interact with storage through the file system using stdio.h and POSIX functions.",
    prerequisites: ["c-io-devices"],
    relatedTopics: ["c-io-devices", "c-os-concepts"],
    content:
      "Unlike RAM (volatile, fast, expensive), secondary storage is persistent, slower, and cheaper per byte. **HDD (Hard Disk Drive)** uses spinning magnetic platters — sequential access is fast, random access is slow (~10ms seek). **SSD (Solid State Drive)** uses flash memory — much faster random access (~0.1ms), no moving parts.\n\nIn C, you access storage through the operating system's file system API. The `<stdio.h>` library provides portable file I/O. For lower-level access, POSIX systems offer `open()`, `read()`, `write()`, `close()` from `<unistd.h>`.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int main() {
    // Writing to a file (storage)
    FILE *fp = fopen("data.txt", "w");
    if (!fp) { perror("fopen"); return 1; }

    fprintf(fp, "Name: Alice\\n");
    fprintf(fp, "Score: 95\\n");
    fclose(fp);

    // Reading back from storage
    fp = fopen("data.txt", "r");
    if (!fp) { perror("fopen"); return 1; }

    char buf[128];
    while (fgets(buf, sizeof(buf), fp) != NULL) {
        printf("%s", buf);
    }
    fclose(fp);
    return 0;
}`,
      output: "Name: Alice\nScore: 95",
      runnable: true,
    },
    sections: [
      {
        id: "c-storage-types",
        heading: "HDD vs SSD vs Flash",
        content:
          "**HDD**: magnetic storage, 7200 RPM typical. Sequential throughput ~150 MB/s. Random IOPS ~100. Cheap per GB. Good for bulk archival storage.\n\n**SSD (SATA)**: flash storage. Sequential ~500 MB/s. Random IOPS ~50,000. 5-10x faster than HDD for random access. What most laptops use today.\n\n**NVMe SSD**: flash over PCIe bus. Sequential 3000–7000 MB/s. Random IOPS ~500,000. Fastest consumer storage. Standard in modern dev machines.\n\nFor C programs, the bottleneck is rarely the storage type — it's the OS buffering and system call overhead. The kernel caches disk reads in RAM (page cache), so reading the same file repeatedly is fast after the first time.",
        codeExamples: [
          {
            language: "C",
            label: "Binary file read/write",
            code: `#include <stdio.h>

typedef struct { int id; float score; } Student;

int main() {
    Student s = {1, 95.5f};

    // Write binary data to storage
    FILE *fp = fopen("student.bin", "wb");
    fwrite(&s, sizeof(Student), 1, fp);
    fclose(fp);

    // Read binary data from storage
    Student loaded;
    fp = fopen("student.bin", "rb");
    fread(&loaded, sizeof(Student), 1, fp);
    fclose(fp);

    printf("ID: %d, Score: %.1f\\n", loaded.id, loaded.score);
    return 0;
}`,
            output: "ID: 1, Score: 95.5",
            runnable: true,
          },
        ],
      },
      {
        id: "c-storage-buffer",
        heading: "Buffering and Flushing",
        content:
          "The C standard library buffers file writes in memory before writing to disk. This improves performance by batching many small writes into fewer large ones. The buffer is flushed automatically when it fills up, when `fclose()` is called, or when you call `fflush(fp)`.\n\nAlways call `fclose()` when done — it flushes the buffer and releases the file handle. If your program crashes before fclose, buffered data may be lost. For critical data, call `fflush()` after each write or use unbuffered I/O with `setvbuf(fp, NULL, _IONBF, 0)`.",
      },
    ],
    commonMistakes: [
      "Not calling fclose() — data in the buffer may not be written to disk",
      "Opening files in text mode for binary data — newline translation corrupts binary files on Windows",
      "Hardcoding file paths — use relative paths or environment variables for portability",
    ],
    bestPractices: [
      "Always pair fopen() with fclose() — use a goto-cleanup pattern for multiple resources",
      'Use binary mode ("rb", "wb") for non-text files to avoid newline translation issues',
      "Check return values of fread/fwrite — they may write fewer bytes than requested",
    ],
  },
  {
    id: "c-os-concepts",
    domain: "C Programming",
    title: "Operating System Concepts",
    breadcrumb: ["C Programming", "Module 1", "OS Concepts"],
    difficulty: "Beginner" as const,
    readTime: "6 min",
    summary:
      "The OS manages hardware resources and provides services to programs. Every C program runs under an OS that handles process scheduling, memory management, and I/O abstraction.",
    prerequisites: ["c-memory", "c-processor"],
    relatedTopics: ["c-storage", "c-assembler-compiler"],
    content:
      "An Operating System is system software that manages hardware resources (CPU, memory, I/O) and provides a stable environment for application programs. Key functions: **process management** (creating, scheduling, terminating processes), **memory management** (virtual memory, isolation between processes), **file system** (organizing storage), **device drivers** (abstracting hardware differences).\n\nEvery C program is a **process** — an instance of a running program with its own memory space, CPU registers, and file descriptors. Processes are isolated; one process cannot directly access another's memory. The OS kernel mediates all access to hardware.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>   /* POSIX: getpid, sleep */

int main() {
    // Get current process ID (assigned by OS)
    printf("My PID: %d\\n", getpid());

    // getenv reads environment variables managed by OS
    char *path = getenv("PATH");
    printf("PATH starts with: %.40s...\\n", path ? path : "(null)");

    // system() asks OS to run a shell command
    int ret = system("echo Hello from shell");
    printf("Shell exit code: %d\\n", ret);

    return 0;
}`,
      output:
        "My PID: 12345\nPATH starts with: /usr/local/sbin:/usr/local/bin...\nHello from shell\nShell exit code: 0",
      runnable: true,
    },
    sections: [
      {
        id: "c-os-processes",
        heading: "Processes and the Kernel",
        content:
          "A **process** is a running program. The OS assigns it a unique PID (process identifier), allocates virtual address space, and schedules it on the CPU. The OS context-switches between processes thousands of times per second, giving each the illusion of a dedicated CPU.\n\nThe **kernel** is the core of the OS running in privileged mode. When your C program calls `printf`, it eventually issues a **system call** (write) that crosses from user mode into kernel mode. The kernel performs the actual I/O and returns. System calls are the only way user programs access hardware — direct hardware access is prohibited.",
        codeExamples: [
          {
            language: "C",
            label: "Process creation with fork() (POSIX)",
            code: `#include <stdio.h>
#include <unistd.h>

int main() {
    pid_t pid = fork();  /* OS creates a child process */

    if (pid == 0) {
        /* Child process */
        printf("Child PID: %d\\n", getpid());
    } else if (pid > 0) {
        /* Parent process */
        printf("Parent PID: %d, child is: %d\\n", getpid(), pid);
    } else {
        perror("fork failed");
    }
    return 0;
}`,
            output: "Parent PID: 1001, child is: 1002\nChild PID: 1002",
            runnable: true,
          },
        ],
      },
      {
        id: "c-os-virtual-memory",
        heading: "Virtual Memory",
        content:
          "Virtual memory gives each process the illusion of a large, private address space (4 GB on 32-bit, 128 TB on 64-bit), regardless of actual RAM. The OS maps virtual addresses to physical RAM pages using a **page table**. Pages not in RAM are stored on disk (swap) and loaded on demand.\n\nFor C programmers: the address you see (e.g., from `&variable`) is a virtual address. Two processes with the same virtual address point to different physical memory. This isolation means one buggy process cannot corrupt another's memory.",
      },
    ],
    commonMistakes: [
      "Thinking programs access hardware directly — all hardware access goes through OS system calls",
      "Assuming sizeof(pointer) == 4 — on 64-bit OS, pointers are 8 bytes",
      "Ignoring exit codes — the OS passes the return value of main() to the parent process",
    ],
    bestPractices: [
      "Return 0 from main() for success, non-zero for errors — this is a POSIX convention",
      "Use perror() or strerror(errno) to print OS error messages with context",
      "Understand that fork(), exec(), wait() are the foundation of how shells run programs",
    ],
  },
  {
    id: "c-assembler-compiler",
    domain: "C Programming",
    title: "Assembler, Compiler, Interpreter, Loader & Linker",
    breadcrumb: ["C Programming", "Module 1", "Assembler & Compiler"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Understanding how C source code becomes a running program — through preprocessing, compilation, assembly, linking, and loading — is fundamental to every C programmer.",
    prerequisites: ["c-os-concepts", "c-processor"],
    relatedTopics: ["c-data-types", "c-variables"],
    content:
      "The journey from C source code to a running program has five stages:\n1. **Preprocessor** — expands `#include`, `#define`, `#ifdef` macros before compilation.\n2. **Compiler** — translates C source to assembly language (`.s` file), checking syntax and types.\n3. **Assembler** — converts assembly to machine code object files (`.o`).\n4. **Linker** — combines object files and libraries into a single executable, resolving symbol references.\n5. **Loader** — the OS loads the executable into memory and starts execution at `main()`.",
    codeExample: {
      language: "C",
      code: `/* hello.c */
#include <stdio.h>     /* Preprocessor: paste stdio.h contents here */

#define GREETING "Hello, World!"   /* Preprocessor: text substitution */

int main() {
    printf("%s\\n", GREETING);
    return 0;
}

/* Compilation pipeline (run these commands):
   gcc -E hello.c -o hello.i    # 1. Preprocess only
   gcc -S hello.i -o hello.s    # 2. Compile to assembly
   gcc -c hello.s -o hello.o    # 3. Assemble to object
   gcc hello.o -o hello         # 4. Link to executable
   ./hello                      # 5. Loader runs it
*/`,
      output: "Hello, World!",
      runnable: true,
    },
    sections: [
      {
        id: "c-compiler-stages",
        heading: "Compiler Pipeline in Detail",
        content:
          "**Preprocessing** (`gcc -E`): The preprocessor performs textual substitutions. `#include <stdio.h>` is replaced with the full contents of the header file. `#define PI 3.14159` replaces every occurrence of `PI` with the literal. Conditional compilation (`#ifdef DEBUG`) includes or excludes code blocks.\n\n**Compilation** (`gcc -S`): The compiler performs lexical analysis (tokenizing), syntax analysis (building an AST), semantic analysis (type checking), optimization (dead code elimination, constant folding), and finally code generation (outputting assembly).\n\n**Assembly** (`gcc -c`): The assembler converts human-readable assembly mnemonics (`mov eax, 1`) into binary machine code. The result is a **relocatable object file** (`.o`) — machine code where absolute addresses are not yet resolved.",
        codeExamples: [
          {
            language: "C",
            label: "Preprocessor directives example",
            code: `#include <stdio.h>

#define MAX_SIZE 100
#define SQUARE(x) ((x) * (x))   /* macro with argument */

#ifdef DEBUG
  #define LOG(msg) printf("[DEBUG] %s\\n", msg)
#else
  #define LOG(msg) /* nothing */
#endif

int main() {
    int arr[MAX_SIZE];
    printf("SQUARE(5) = %d\\n", SQUARE(5));   // 25
    LOG("Initialized array");
    return 0;
}`,
            output: "SQUARE(5) = 25",
            runnable: true,
          },
        ],
      },
      {
        id: "c-linker-loader",
        heading: "Linker and Loader",
        content:
          "The **linker** resolves symbols across object files and libraries. When you call `printf()`, your code references a symbol defined in the C standard library (`libc`). The linker finds that symbol and records its address. It produces the final executable with all addresses resolved.\n\nStatic linking embeds library code into the executable — larger binary but no runtime dependency. Dynamic linking references shared libraries (`.so`/`.dll`) that are loaded at runtime — smaller binary, libraries can be updated independently.\n\nThe **loader** (part of the OS) maps the executable's segments into virtual memory, loads required shared libraries, resolves dynamic symbols, and transfers control to `main()`.",
      },
    ],
    commonMistakes: [
      "Confusing compilation errors (syntax) with linker errors (undefined symbols) — they need different fixes",
      "Not understanding that #define macros have no type safety — use const or inline functions instead",
      "Assuming compiled code is portable — you must recompile for different CPU architectures",
    ],
    bestPractices: [
      "Use gcc -Wall -Wextra to enable all warnings — treat warnings as errors with -Werror",
      "Always use -g flag during development for debug symbols; use -O2 for release builds",
      "Prefer const variables over #define for numeric constants — they respect scope and type",
    ],
  },
  {
    id: "c-data-types",
    domain: "C Programming",
    title: "Fundamental Data Types in C",
    breadcrumb: ["C Programming", "Module 1", "Data Types"],
    difficulty: "Beginner" as const,
    readTime: "6 min",
    summary:
      "C's fundamental types — int, char, float, double, and their modifiers — are the building blocks of every C program. Understanding sizes and ranges prevents overflow bugs.",
    prerequisites: ["c-assembler-compiler"],
    relatedTopics: ["c-variables", "c-operators"],
    content:
      "C is statically typed: every variable has a declared type that determines how many bytes it occupies and how the bits are interpreted. Fundamental types:\n- `char` — 1 byte, stores a single character or small integer (-128 to 127 or 0 to 255).\n- `int` — typically 4 bytes, range ±2 billion.\n- `float` — 4 bytes, single-precision decimal (~7 significant digits).\n- `double` — 8 bytes, double-precision decimal (~15 significant digits).\n- `void` — no value, used for functions returning nothing and generic pointers.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>
#include <limits.h>   /* INT_MAX, CHAR_MAX, etc. */
#include <float.h>    /* FLT_MAX, DBL_MAX */

int main() {
    /* Basic types with sizeof */
    printf("char:   %zu byte,  max=%d\\n",  sizeof(char),   CHAR_MAX);
    printf("int:    %zu bytes, max=%d\\n",  sizeof(int),    INT_MAX);
    printf("long:   %zu bytes, max=%ld\\n", sizeof(long),   LONG_MAX);
    printf("float:  %zu bytes, max=%.2e\\n",sizeof(float),  FLT_MAX);
    printf("double: %zu bytes, max=%.2e\\n",sizeof(double), DBL_MAX);

    /* Signed vs unsigned */
    unsigned int big = 4294967295U;  /* 2^32 - 1 */
    printf("unsigned int max: %u\\n", big);

    /* Integer overflow — wraps around */
    int maxval = INT_MAX;
    printf("INT_MAX + 1 = %d\\n", maxval + 1);  /* undefined behavior! */
    return 0;
}`,
      output:
        "char:   1 byte,  max=127\nint:    4 bytes, max=2147483647\nlong:   8 bytes, max=9223372036854775807\nfloat:  4 bytes, max=3.40e+38\ndouble: 8 bytes, max=1.80e+308\nunsigned int max: 4294967295\nINT_MAX + 1 = -2147483648",
      runnable: true,
    },
    sections: [
      {
        id: "c-types-modifiers",
        heading: "Type Modifiers: signed, unsigned, short, long",
        content:
          "Modifiers adjust the range and size of basic types:\n- `unsigned int` — 0 to 4,294,967,295 (all 32 bits for magnitude, no sign bit).\n- `short int` — 2 bytes, ±32,767.\n- `long long int` — 8 bytes, ±9.2 × 10^18.\n- `long double` — 12 or 16 bytes (platform-dependent), extended precision.\n\nFor portable code, `<stdint.h>` provides exact-width types: `int8_t`, `uint16_t`, `int32_t`, `uint64_t`. Use these when you need a specific bit width, e.g., for network protocols or binary file formats.",
        codeExamples: [
          {
            language: "C",
            label: "stdint.h for portable exact-width types",
            code: `#include <stdio.h>
#include <stdint.h>

int main() {
    int8_t  a = 127;         /* exactly 8 bits signed */
    uint16_t b = 65535;      /* exactly 16 bits unsigned */
    int32_t  c = -2147483648;
    uint64_t d = 18446744073709551615ULL;  /* 2^64 - 1 */

    printf("int8:   %d\\n", a);
    printf("uint16: %u\\n", b);
    printf("int32:  %d\\n", c);
    printf("uint64: %llu\\n", (unsigned long long)d);
    return 0;
}`,
            output:
              "int8:   127\nuint16: 65535\nint32:  -2147483648\nuint64: 18446744073709551615",
            runnable: true,
          },
        ],
      },
      {
        id: "c-types-floating",
        heading: "Floating-Point Precision",
        content:
          "Floating-point numbers are stored in IEEE 754 format: a sign bit, exponent, and mantissa. This representation cannot exactly represent most decimal fractions — `0.1 + 0.2` in floating-point is not exactly `0.3`.\n\nNever compare floats with `==`. Instead, check if the absolute difference is smaller than an epsilon: `fabs(a - b) < 1e-9`. Use `double` by default for precision; use `float` only when memory or speed is critical (e.g., graphics, embedded systems).",
      },
    ],
    commonMistakes: [
      "Comparing floating-point values with == — use fabs(a-b) < epsilon instead",
      "Using int for values that can exceed 2 billion — use long long instead",
      "Assuming sizeof(int) == 4 on all platforms — use stdint.h types for portability",
    ],
    bestPractices: [
      "Use <stdint.h> types (int32_t, uint8_t) when exact bit width matters",
      "Use double by default for floating-point; only use float when performance/memory is critical",
      "Include <limits.h> and <float.h> to check platform-specific ranges in portable code",
    ],
  },
  {
    id: "c-variables",
    domain: "C Programming",
    title: "Variables, Memory Locations & Storage Classes",
    breadcrumb: ["C Programming", "Module 1", "Variables"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "Variables are named memory locations. C's storage classes (auto, static, register, extern) control a variable's lifetime, scope, and where it lives in memory.",
    prerequisites: ["c-data-types", "c-memory"],
    relatedTopics: ["c-data-types", "c-operators", "c-functions"],
    content:
      "A variable is a named memory location that holds a value of a specific type. Declaring `int count = 0;` asks the compiler to reserve 4 bytes of memory, name it `count`, and initialize it to zero.\n\n**Scope** determines where a variable is visible. Local variables exist only within their declaring block. Global variables are visible throughout the file. **Lifetime** determines how long a variable persists: local variables die when their function returns; static variables persist for the program's lifetime.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int global_count = 0;  /* global: visible everywhere, lives for program lifetime */

void increment() {
    static int call_count = 0;  /* static local: persists between calls */
    call_count++;
    global_count++;
    printf("Call #%d, global=%d\\n", call_count, global_count);
}

int main() {
    int local = 42;        /* auto: lives only in main */
    register int fast = 0; /* hint to store in CPU register */

    increment();  /* Call #1, global=1 */
    increment();  /* Call #2, global=2 */
    increment();  /* Call #3, global=3 */

    printf("local=%d\\n", local);
    return 0;
}`,
      output:
        "Call #1, global=1\nCall #2, global=2\nCall #3, global=3\nlocal=42",
      runnable: true,
    },
    sections: [
      {
        id: "c-variables-storage-classes",
        heading: "Storage Classes: auto, static, register, extern",
        content:
          "**auto** (default for local variables) — stored on the stack, created when the block is entered, destroyed when exited. You rarely write `auto` explicitly.\n\n**static** (local) — stored in the data/BSS segment, initialized once, persists for the entire program lifetime. Retains its value between function calls.\n\n**static** (global/function) — limits visibility to the current translation unit (file). Use this to create private module-level state.\n\n**extern** — declares that a variable is defined in another translation unit. Allows sharing globals across files.\n\n**register** — a hint to the compiler to store the variable in a CPU register. Modern compilers mostly ignore this; the compiler optimizes better on its own.",
        codeExamples: [
          {
            language: "C",
            label: "Static variable retains value between calls",
            code: `#include <stdio.h>

int next_id() {
    static int id = 0;  /* initialized once; persists across calls */
    return ++id;
}

int main() {
    printf("ID: %d\\n", next_id());  /* ID: 1 */
    printf("ID: %d\\n", next_id());  /* ID: 2 */
    printf("ID: %d\\n", next_id());  /* ID: 3 */
    return 0;
}`,
            output: "ID: 1\nID: 2\nID: 3",
            runnable: true,
          },
        ],
      },
      {
        id: "c-variables-initialization",
        heading: "Variable Initialization and Undefined Behavior",
        content:
          "**Always initialize variables.** Uninitialized local variables contain whatever garbage bytes happen to be in that memory location — reading them is **undefined behavior** (the C standard says the program can do anything, including appearing to work, crash, or produce wrong results).\n\nGlobal and static variables are zero-initialized by the C runtime before `main()` runs. Local variables are not. Tools like Valgrind, AddressSanitizer (`-fsanitize=address`), and UBSan (`-fsanitize=undefined`) detect uninitialized memory reads.",
      },
    ],
    commonMistakes: [
      "Using an uninitialized local variable — contains garbage, causes undefined behavior",
      "Confusing static local (persists between calls) with static global (file-private visibility)",
      "Using global variables for everything — creates tight coupling; prefer function parameters",
    ],
    bestPractices: [
      "Initialize every variable at declaration: int count = 0; not int count;",
      "Use static for file-private globals to encapsulate module state",
      "Compile with -fsanitize=address,undefined during development to catch memory bugs early",
    ],
  },
  {
    id: "c-operators",
    domain: "C Programming",
    title: "Operators, Expressions & Precedence",
    breadcrumb: ["C Programming", "Module 2", "Operators"],
    difficulty: "Beginner" as const,
    readTime: "7 min",
    summary:
      "C has a rich set of operators: arithmetic, relational, logical, bitwise, assignment, and the ternary operator. Operator precedence determines evaluation order.",
    prerequisites: ["c-variables", "c-data-types"],
    relatedTopics: ["c-conditionals", "c-loops", "c-variables"],
    content:
      "An **expression** combines variables, constants, and operators to produce a value. C has over 45 operators grouped by type: **arithmetic** (`+`, `-`, `*`, `/`, `%`), **relational** (`==`, `!=`, `<`, `>`, `<=`, `>=`), **logical** (`&&`, `||`, `!`), **bitwise** (`&`, `|`, `^`, `~`, `<<`, `>>`), **assignment** (`=`, `+=`, `-=`, etc.), and **special** (ternary `?:`, comma `,`, sizeof, address-of `&`, dereference `*`).",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    /* Arithmetic */
    printf("%d + %d = %d\\n", a, b, a + b);   /* 13 */
    printf("%d / %d = %d\\n", a, b, a / b);   /* 3  (integer division!) */
    printf("%d %% %d = %d\\n", a, b, a % b);  /* 1  (remainder) */

    /* Relational and logical */
    printf("(a>b && b>0) = %d\\n", (a > b && b > 0));  /* 1 (true) */

    /* Bitwise */
    printf("a & b = %d\\n", a & b);   /* 10: 1010 & 0011 = 0010 = 2 */
    printf("a | b = %d\\n", a | b);   /* 10: 1010 | 0011 = 1011 = 11 */
    printf("a << 1 = %d\\n", a << 1); /* 20 (multiply by 2) */
    printf("a >> 1 = %d\\n", a >> 1); /* 5  (divide by 2) */

    /* Ternary */
    int max = (a > b) ? a : b;
    printf("max = %d\\n", max);  /* 10 */

    return 0;
}`,
      output:
        "10 + 3 = 13\n10 / 3 = 3\n10 % 3 = 1\n(a>b && b>0) = 1\na & b = 2\na | b = 11\na << 1 = 20\na >> 1 = 5\nmax = 10",
      runnable: true,
    },
    sections: [
      {
        id: "c-operators-precedence",
        heading: "Operator Precedence and Associativity",
        content:
          "Precedence determines which operator binds more tightly in an expression without parentheses. From highest to lowest (selected): `()` `[]` `->` `.` → unary `!` `~` `++` `--` `*` `&` → `*` `/` `%` → `+` `-` → `<<` `>>` → `<` `<=` `>` `>=` → `==` `!=` → `&` → `^` → `|` → `&&` → `||` → `?:` → `=` `+=` etc.\n\nAssociativity handles ties (same precedence): most operators are left-to-right. Assignment operators are right-to-left (`a = b = 5` assigns 5 to b, then b to a). **When in doubt, use parentheses** — they make intent explicit and prevent bugs.",
        codeExamples: [
          {
            language: "C",
            label: "Precedence surprises and fixes",
            code: `#include <stdio.h>

int main() {
    int x = 2, y = 3, z = 4;

    /* Precedence surprise: * before + */
    printf("%d\\n", x + y * z);        /* 14, not 20 */
    printf("%d\\n", (x + y) * z);      /* 20 with parens */

    /* Bit shift precedence trap */
    printf("%d\\n", 1 << 2 + 1);       /* 8 (+ has higher prec than <<!) */
    printf("%d\\n", (1 << 2) + 1);     /* 5 */

    /* Short-circuit evaluation */
    int n = 0;
    if (n != 0 && 10 / n > 1) { /* safe: right side not evaluated if n==0 */
        printf("big\\n");
    }
    return 0;
}`,
            output: "14\n20\n8\n5",
            runnable: true,
          },
        ],
      },
      {
        id: "c-operators-type-conversion",
        heading: "Type Conversion and Mixed Expressions",
        content:
          "When operands have different types, C performs **implicit type promotion**: smaller integer types are promoted to `int`; in mixed int/float expressions, the int is converted to float.\n\n`int / int` performs **integer division** (truncates toward zero): `7 / 2 == 3`. To get floating-point division, at least one operand must be float: `7.0 / 2 == 3.5` or `(float)7 / 2`.\n\n**Explicit casts** `(type)expression` force a conversion: `(double)a / b`. Be careful: casting a large `int` to `char` truncates to 8 bits.",
      },
    ],
    commonMistakes: [
      "Integer division: writing 5/2 and expecting 2.5 — result is 2; cast to (double)5/2 for 2.5",
      "Confusing = (assignment) with == (comparison) in conditions — both compile silently",
      "Forgetting short-circuit evaluation: a() || b() — b() is not called if a() is true",
    ],
    bestPractices: [
      "Use parentheses to make precedence explicit, especially mixing bitwise and arithmetic operators",
      "Enable -Wall to catch = vs == mistakes and other common operator errors",
      "Avoid side effects inside expressions (e.g., i++ in multiple places) — evaluation order is unspecified",
    ],
  },
  {
    id: "c-conditionals",
    domain: "C Programming",
    title: "Conditional Branching in C",
    breadcrumb: ["C Programming", "Module 2", "Conditionals"],
    difficulty: "Beginner" as const,
    readTime: "6 min",
    summary:
      "if/else and switch allow programs to make decisions. Mastering conditional logic — including nested conditions and the switch fall-through — is essential for control flow.",
    prerequisites: ["c-operators"],
    relatedTopics: ["c-loops", "c-operators"],
    content:
      "Conditional branching executes different code paths based on runtime conditions. C provides:\n- `if / else if / else` — general-purpose branching on any boolean expression.\n- `switch` — multi-way branching on an integer or character value; more readable than a chain of `if-else` when testing a single variable against many values.\n- Ternary operator `(cond) ? a : b` — inline conditional expression.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int main() {
    int score = 75;

    /* if-else chain */
    char grade;
    if (score >= 90)      grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else                  grade = 'F';
    printf("Score %d -> Grade %c\\n", score, grade);  /* Grade C */

    /* switch with fall-through prevention */
    int day = 3;
    switch (day) {
        case 1: printf("Monday\\n");    break;
        case 2: printf("Tuesday\\n");   break;
        case 3: printf("Wednesday\\n"); break;
        case 6: /* fall-through intentional */
        case 7: printf("Weekend!\\n");  break;
        default: printf("Unknown\\n");
    }

    /* Nested if */
    int x = 5, y = 10;
    if (x > 0) {
        if (y > 0) printf("Both positive\\n");
        else       printf("Only x positive\\n");
    }
    return 0;
}`,
      output: "Score 75 -> Grade C\nWednesday\nBoth positive",
      runnable: true,
    },
    sections: [
      {
        id: "c-conditionals-switch",
        heading: "switch Statement and Fall-Through",
        content:
          "The `switch` statement evaluates an integer expression and jumps to the matching `case` label. **Fall-through** is a key C feature: without a `break`, execution continues into the next case. This is sometimes intentional (sharing code for multiple cases) but usually a bug.\n\nAlways include a `default` case to handle unexpected values. `switch` only works with integer types (`int`, `char`, `enum`) — not floats or strings. For strings, use `strcmp()` in an if-else chain.",
        codeExamples: [
          {
            language: "C",
            label: "Intentional fall-through with comment",
            code: `#include <stdio.h>

void classify(int n) {
    switch (n % 3) {
        case 0:
            printf("%d is divisible by 3\\n", n);
            break;
        case 1: /* fall-through intentional */
        case 2:
            printf("%d is NOT divisible by 3\\n", n);
            break;
    }
}

int main() {
    classify(9);   /* divisible by 3 */
    classify(10);  /* not divisible */
    classify(11);  /* not divisible */
    return 0;
}`,
            output:
              "9 is divisible by 3\n10 is NOT divisible by 3\n11 is NOT divisible by 3",
            runnable: true,
          },
        ],
      },
      {
        id: "c-conditionals-nested",
        heading: "Nested Conditions and the Dangling Else",
        content:
          "Nested `if` statements work but can become hard to read. The **dangling else** problem: in `if (a) if (b) X; else Y;` — the `else` belongs to the nearest `if` (the inner one), not the outer one. Always use braces `{}` around `if` bodies to make nesting explicit and avoid this ambiguity.\n\nFor complex multi-condition logic, consider extracting the condition into a named boolean variable or a helper function — it makes the intent readable.",
      },
    ],
    commonMistakes: [
      "Forgetting break in switch — accidentally falls through into the next case",
      "Using = instead of == in if conditions — if (x = 5) is always true and assigns 5",
      "Not using braces — if (cond) x++; y++; — y++ always executes, not just when cond is true",
    ],
    bestPractices: [
      "Always use braces {} even for single-statement if bodies — prevents accidental fall-through bugs",
      "Add a default case to every switch even if you don't expect it — helps catch bugs",
      "Use switch over long if-else chains when testing the same variable against many values",
    ],
  },
  {
    id: "c-loops",
    domain: "C Programming",
    title: "Iteration and Loops in C",
    breadcrumb: ["C Programming", "Module 2", "Loops"],
    difficulty: "Beginner" as const,
    readTime: "6 min",
    summary:
      "for, while, and do-while loops repeat code. break exits early, continue skips the current iteration. Choosing the right loop makes code cleaner and less error-prone.",
    prerequisites: ["c-conditionals", "c-operators"],
    relatedTopics: ["c-arrays-strings", "c-functions"],
    content:
      "Loops repeat a block of code while a condition is true:\n- `for` — best when the number of iterations is known or you have a counter.\n- `while` — best when you loop until an event occurs (e.g., reading input until EOF).\n- `do-while` — executes the body **at least once** before checking the condition.\n\nLoop control: `break` exits the loop immediately. `continue` skips the rest of the current iteration and goes to the next. `goto` (avoid it) jumps to a label — only acceptable as a cleanup jump in C.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

int main() {
    /* for loop: sum 1..100 */
    int sum = 0;
    for (int i = 1; i <= 100; i++) sum += i;
    printf("Sum 1..100 = %d\\n", sum);   /* 5050 */

    /* while loop: Collatz sequence */
    int n = 27, steps = 0;
    while (n != 1) {
        n = (n % 2 == 0) ? n / 2 : 3 * n + 1;
        steps++;
    }
    printf("Collatz(27): %d steps\\n", steps); /* 111 steps */

    /* do-while: validate input simulation */
    int attempt = 0;
    do {
        attempt++;
        printf("Attempt %d\\n", attempt);
    } while (attempt < 3);

    /* break and continue */
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) continue;   /* skip even */
        if (i > 7)      break;      /* stop after 7 */
        printf("%d ", i);
    }
    printf("\\n");  /* 1 3 5 7 */

    return 0;
}`,
      output:
        "Sum 1..100 = 5050\nCollatz(27): 111 steps\nAttempt 1\nAttempt 2\nAttempt 3\n1 3 5 7",
      runnable: true,
    },
    sections: [
      {
        id: "c-loops-nested",
        heading: "Nested Loops and Multi-Dimensional Iteration",
        content:
          "Nested loops iterate over 2D structures. The outer loop index changes slowly; the inner loop index changes quickly. A common pattern is printing a multiplication table or traversing a 2D array.\n\nFor **nested break**: a `break` only exits the **innermost** loop. To break out of nested loops, use a flag variable or `goto` (the latter is one of the rare acceptable uses of `goto` in C).",
        codeExamples: [
          {
            language: "C",
            label: "Multiplication table with nested loops",
            code: `#include <stdio.h>

int main() {
    /* 3x3 multiplication table */
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%3d", i * j);
        }
        printf("\\n");
    }
    return 0;
}`,
            output: "  1  2  3\n  2  4  6\n  3  6  9",
            runnable: true,
          },
        ],
      },
      {
        id: "c-loops-infinite",
        heading: "Infinite Loops and Loop Termination",
        content:
          "An infinite loop runs forever unless broken out of with `break`, a `return`, or the process being killed. The idiomatic C infinite loop is `for(;;)` or `while(1)`. These are valid — embedded systems often use them as the main event loop.\n\nEnsure every loop has a reachable termination condition. Common bugs: forgetting to increment the counter (`i++`), incorrect condition direction (`>` instead of `<`), or modifying the loop variable inside the body in unexpected ways.",
      },
    ],
    commonMistakes: [
      "Off-by-one errors: using < vs <= — decide if the bound is inclusive or exclusive",
      "Modifying the loop counter inside the loop body — leads to skipping or infinite loops",
      "Using int for very large loop counts — use long long for counts exceeding 2 billion",
    ],
    bestPractices: [
      "Declare loop counter inside the for statement (for (int i=0...)) to limit its scope",
      "Prefer for loops when iteration count is known; while when looping until an event",
      "Extract complex loop bodies into functions to keep loops readable and testable",
    ],
  },
  {
    id: "c-arrays-strings",
    domain: "C Programming",
    title: "Arrays, Strings & Multi-Dimensional Arrays",
    breadcrumb: ["C Programming", "Module 3", "Arrays & Strings"],
    difficulty: "Intermediate" as const,
    readTime: "8 min",
    summary:
      "Arrays store sequences of same-type elements. Strings in C are null-terminated char arrays. Understanding memory layout and the string.h library is essential.",
    prerequisites: ["c-loops", "c-variables", "c-data-types"],
    relatedTopics: ["c-pointers", "c-functions", "c-structures-unions"],
    content:
      "An **array** is a contiguous block of memory holding a fixed number of elements of the same type. Declared as `type name[size]`. Elements are accessed by zero-based index: `arr[0]` through `arr[n-1]`. The array name is a pointer to its first element.\n\nA **string** in C is a `char` array terminated by a null byte (`'\\0'`). String literals like `\"hello\"` are stored with an implicit null terminator. The `<string.h>` library provides functions for string manipulation.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>
#include <string.h>

int main() {
    /* 1D array */
    int scores[5] = {85, 92, 78, 95, 88};
    int total = 0;
    for (int i = 0; i < 5; i++) total += scores[i];
    printf("Average: %.1f\\n", (double)total / 5);  /* 87.6 */

    /* String operations */
    char greeting[50] = "Hello";
    strcat(greeting, ", World!");       /* concatenate */
    printf("Length: %zu\\n", strlen(greeting)); /* 13 */
    printf("%s\\n", greeting);

    /* String comparison */
    char a[] = "apple", b[] = "banana";
    printf("strcmp: %d\\n", strcmp(a, b));  /* negative: 'a' < 'b' */

    /* 2D array (matrix) */
    int matrix[2][3] = {{1,2,3},{4,5,6}};
    for (int r = 0; r < 2; r++) {
        for (int c = 0; c < 3; c++) printf("%d ", matrix[r][c]);
        printf("\\n");
    }
    return 0;
}`,
      output:
        "Average: 87.6\nLength: 13\nHello, World!\nstrcmp: -1\n1 2 3\n4 5 6",
      runnable: true,
    },
    sections: [
      {
        id: "c-arrays-memory",
        heading: "Arrays and Memory Layout",
        content:
          "Array elements are stored **contiguously** in memory. `int arr[5]` occupies 20 consecutive bytes (4 bytes per int). `arr[i]` is equivalent to `*(arr + i)` — the compiler adds `i * sizeof(element)` to the base address.\n\nC does **not** perform bounds checking — accessing `arr[10]` on a 5-element array accesses memory beyond the array, causing undefined behavior (buffer overflow). This is a common source of security vulnerabilities. Always validate indices or use safer constructs.",
        codeExamples: [
          {
            language: "C",
            label: "Linear search and bubble sort",
            code: `#include <stdio.h>

int linear_search(int arr[], int n, int key) {
    for (int i = 0; i < n; i++)
        if (arr[i] == key) return i;
    return -1;
}

void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int tmp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = tmp;
            }
}

int main() {
    int data[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    bubble_sort(data, n);
    for (int i = 0; i < n; i++) printf("%d ", data[i]);
    printf("\\n");  /* 11 12 22 25 34 64 90 */
    printf("Found 25 at index: %d\\n", linear_search(data, n, 25));
    return 0;
}`,
            output: "11 12 22 25 34 64 90\nFound 25 at index: 3",
            runnable: true,
          },
        ],
      },
      {
        id: "c-strings-functions",
        heading: "string.h Functions",
        content:
          "Key `<string.h>` functions:\n- `strlen(s)` — length of string (not counting null terminator).\n- `strcpy(dst, src)` — copy src into dst (ensure dst is large enough!).\n- `strncpy(dst, src, n)` — safer copy, limits bytes copied.\n- `strcat(dst, src)` — append src to dst.\n- `strcmp(a, b)` — compare two strings; returns 0 if equal, negative if a < b, positive if a > b.\n- `strchr(s, c)` — find first occurrence of character c.\n- `strstr(haystack, needle)` — find substring.\n\nFor safer alternatives, use `snprintf` instead of `sprintf`, and `strncpy` / `strncat` to prevent buffer overflows.",
      },
    ],
    commonMistakes: [
      "Accessing arr[n] on an n-element array — index n is out of bounds (valid range: 0..n-1)",
      'Not leaving room for null terminator: char s[5] = "hello" — needs 6 bytes',
      "Using == to compare strings — always use strcmp(); == compares pointer addresses",
    ],
    bestPractices: [
      "Use sizeof(arr)/sizeof(arr[0]) to compute array length (avoids hardcoding size)",
      "Always pass array size to functions — C arrays decay to pointers losing size information",
      "Use snprintf instead of sprintf to prevent buffer overflows when building strings",
    ],
  },
  {
    id: "c-structures-unions",
    domain: "C Programming",
    title: "Structures, Unions & Enumerated Types",
    breadcrumb: ["C Programming", "Module 3", "Structures & Unions"],
    difficulty: "Intermediate" as const,
    readTime: "7 min",
    summary:
      "struct groups related data of different types. union overlays multiple types in the same memory. enum creates named integer constants for readable code.",
    prerequisites: ["c-arrays-strings", "c-data-types"],
    relatedTopics: ["c-functions", "c-pointers", "c-arrays-strings"],
    content:
      "A **struct** (structure) groups variables of different types under one name, creating a composite data type. Each member has its own memory location within the struct.\n\nA **union** allocates enough memory for its **largest** member. All members share that memory — writing to one member overwrites the others. Used for memory-efficient type variants (like a tagged union / variant type).\n\nAn **enum** defines a set of named integer constants, making code more readable than bare integer literals.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int  roll;
    float gpa;
} Student;

typedef enum { MON=1, TUE, WED, THU, FRI, SAT, SUN } Weekday;

typedef union {
    int   i_val;
    float f_val;
    char  c_val;
} Data;

int main() {
    /* struct */
    Student s = {"Alice", 101, 3.9f};
    printf("Name: %s, Roll: %d, GPA: %.1f\\n", s.name, s.roll, s.gpa);

    /* enum */
    Weekday today = WED;
    printf("Day %d\\n", today);  /* 3 */

    /* union — shares memory */
    Data d;
    d.i_val = 42;
    printf("int: %d\\n", d.i_val);
    d.f_val = 3.14f;
    printf("float: %.2f (int now garbage: %d)\\n", d.f_val, d.i_val);

    /* array of structs */
    Student roster[2] = {{"Bob", 102, 3.5f}, {"Carol", 103, 3.7f}};
    for (int i = 0; i < 2; i++)
        printf("%s: %.1f\\n", roster[i].name, roster[i].gpa);

    return 0;
}`,
      output:
        "Name: Alice, Roll: 101, GPA: 3.9\nDay 3\nint: 42\nfloat: 3.14 (int now garbage: 1078523331)\nBob: 3.5\nCarol: 3.7",
      runnable: true,
    },
    sections: [
      {
        id: "c-struct-memory",
        heading: "Struct Memory Layout and Padding",
        content:
          "The compiler may insert **padding bytes** between struct members to align them to their natural alignment (e.g., `int` must start at a 4-byte-aligned address). This means `sizeof(struct)` may be larger than the sum of member sizes.\n\nExample: `struct { char c; int n; }` — `c` is 1 byte, then 3 bytes of padding, then `n` is 4 bytes = 8 bytes total (not 5). Use `__attribute__((packed))` (GCC) or `#pragma pack(1)` to eliminate padding, but this may hurt performance or cause bus errors on some architectures.",
        codeExamples: [
          {
            language: "C",
            label: "Struct padding demonstration",
            code: `#include <stdio.h>

struct Padded {
    char  c;    /* 1 byte + 3 padding */
    int   n;    /* 4 bytes */
    char  d;    /* 1 byte + 3 padding */
};  /* total: 12, not 6 */

struct Packed {
    int   n;    /* 4 bytes */
    char  c;    /* 1 byte */
    char  d;    /* 1 byte + 2 padding */
};  /* total: 8 (better layout) */

int main() {
    printf("Padded: %zu bytes\\n", sizeof(struct Padded));  /* 12 */
    printf("Packed: %zu bytes\\n", sizeof(struct Packed));  /* 8 */
    return 0;
}`,
            output: "Padded: 12 bytes\nPacked: 8 bytes",
            runnable: true,
          },
        ],
      },
      {
        id: "c-struct-pointers",
        heading: "Struct Pointers and the Arrow Operator",
        content:
          "When working with pointers to structs, use the arrow operator `->` instead of dereferencing and then using the dot: `ptr->member` is equivalent to `(*ptr).member`.\n\nPassing large structs to functions by value copies all their bytes. For efficiency (and to allow modification), pass a pointer: `void print_student(Student *s)`. Use `const Student *s` when you want pointer efficiency but don't need to modify the struct.",
      },
    ],
    commonMistakes: [
      "Comparing structs with == — C doesn't support it; compare member-by-member",
      "Forgetting that union members share memory — writing one overwrites others",
      "Not using typedef — writing 'struct Student s' everywhere instead of 'Student s'",
    ],
    bestPractices: [
      "Order struct members from largest to smallest to minimize padding and struct size",
      "Use typedef struct { ... } Name; to avoid writing 'struct' keyword everywhere",
      "Pass large structs by pointer (const T*) to avoid expensive copies in function calls",
    ],
  },
  {
    id: "c-functions",
    domain: "C Programming",
    title: "Functions in C",
    breadcrumb: ["C Programming", "Module 4", "Functions"],
    difficulty: "Intermediate" as const,
    readTime: "8 min",
    summary:
      "Functions decompose programs into reusable units. Understanding declaration vs definition, call by value vs reference, and recursion is essential for writing modular C code.",
    prerequisites: ["c-loops", "c-arrays-strings"],
    relatedTopics: ["c-pointers", "c-structures-unions", "c-variables"],
    content:
      "A **function** is a named block of code that performs a specific task and can be called from anywhere in the program. Functions promote code reuse and make programs easier to understand and maintain.\n\n**Declaration (prototype)** tells the compiler the function's return type and parameter types — must appear before the first call. **Definition** provides the actual body. In C, parameters are passed by **value** (a copy is made) — modifying a parameter does not affect the caller's variable. To modify the caller's variable, pass a pointer.",
    codeExample: {
      language: "C",
      code: `#include <stdio.h>

/* Function declaration (prototype) */
int factorial(int n);
void swap(int *a, int *b);
double average(int arr[], int size);

int main() {
    printf("5! = %d\\n", factorial(5));  /* 120 */

    int x = 10, y = 20;
    swap(&x, &y);
    printf("After swap: x=%d, y=%d\\n", x, y);  /* x=20, y=10 */

    int data[] = {85, 92, 78, 95, 88};
    printf("Average: %.1f\\n", average(data, 5));  /* 87.6 */

    return 0;
}

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);  /* recursive call */
}

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

double average(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) sum += arr[i];
    return (double)sum / size;
}`,
      output: "5! = 120\nAfter swap: x=20, y=10\nAverage: 87.6",
      runnable: true,
    },
    sections: [
      {
        id: "c-functions-call-types",
        heading: "Call by Value vs Call by Reference",
        content:
          "**Call by value**: C always passes arguments by value — the function receives a copy of the argument. Modifying the copy doesn't affect the original. This is safe but inefficient for large data structures.\n\n**Call by reference** (simulated in C via pointers): pass the **address** of a variable with `&`. The function receives a pointer and can modify the original through it with `*`. This is how `scanf(\"%d\", &n)` works — it modifies `n` in the caller.\n\nFor arrays: the array name decays to a pointer to the first element — they're always passed by reference effectively.",
        codeExamples: [
          {
            language: "C",
            label: "Value vs pointer parameter behavior",
            code: `#include <stdio.h>

void try_change_value(int n) {
    n = 999;  /* only modifies local copy */
}

void actually_change(int *p) {
    *p = 999;  /* modifies caller's variable */
}

int main() {
    int val = 42;
    try_change_value(val);
    printf("After try_change: %d\\n", val);  /* still 42 */

    actually_change(&val);
    printf("After actually_change: %d\\n", val);  /* 999 */
    return 0;
}`,
            output: "After try_change: 42\nAfter actually_change: 999",
            runnable: true,
          },
        ],
      },
      {
        id: "c-functions-recursion",
        heading: "Recursive Functions",
        content:
          "A function that calls itself is **recursive**. Every recursive function needs: a **base case** (terminates recursion), and a **recursive case** (reduces the problem toward the base case).\n\nRecursion uses the call stack — each call pushes a new frame with local variables and return address. Too many calls (no base case or problem doesn't reduce) causes a **stack overflow**. Recursive solutions are elegant for tree traversal, divide-and-conquer, and mathematical definitions — but iterative solutions are often more efficient and avoid stack overflow risks.",
      },
    ],
    commonMistakes: [
      "Missing function prototype before the call — compiler assumes wrong return type (pre-C99 behavior)",
      "Returning a pointer to a local variable — the local is destroyed when function returns",
      "Forgetting the base case in recursion — causes infinite recursion and stack overflow",
    ],
    bestPractices: [
      "Keep functions short and focused on one task — aim for under 30 lines",
      "Use const for pointer parameters that should not be modified: const int *arr",
      "Prefer iteration over recursion for performance-critical code or when depth is large",
    ],
  },
  {
    id: "c-pointers",
    domain: "C Programming",
    title: "Pointers in C",
    breadcrumb: ["C Programming", "Module 5", "Pointers"],
    difficulty: "Advanced" as const,
    readTime: "10 min",
    summary:
      "Pointers store memory addresses. They enable dynamic memory, efficient array passing, and function pointers. Mastering pointers is the key to mastering C.",
    prerequisites: ["c-functions", "c-arrays-strings", "c-memory"],
    relatedTopics: ["c-functions", "c-structures-unions", "c-memory"],
    content:
      'A **pointer** is a variable that stores a memory address. Declare with `*`: `int *p;`. Get the address of a variable with `&`: `p = &x;`. Dereference (get the value at the address) with `*`: `printf("%d", *p);`.\n\nPointers enable: passing large data structures efficiently (no copy), dynamic memory allocation (`malloc/free`), function pointers (callbacks), and building data structures like linked lists and trees.',
    codeExample: {
      language: "C",
      code: `#include <stdio.h>
#include <stdlib.h>

/* Pointer basics */
void demo_basics() {
    int x = 42;
    int *p = &x;        /* p points to x */
    printf("x = %d\\n", x);
    printf("&x = %p\\n", (void*)&x);
    printf("p = %p\\n", (void*)p);
    printf("*p = %d\\n", *p);    /* 42: dereference */
    *p = 100;                    /* modify x through pointer */
    printf("x now = %d\\n", x);  /* 100 */
}

/* Pointer arithmetic on arrays */
void demo_array_pointer() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;  /* arr decays to &arr[0] */
    for (int i = 0; i < 5; i++) {
        printf("%d ", *(ptr + i));  /* same as arr[i] */
    }
    printf("\\n");
}

int main() {
    demo_basics();
    demo_array_pointer();
    return 0;
}`,
      output:
        "x = 42\n&x = 0x7ffd...\np = 0x7ffd...\n*p = 42\nx now = 100\n10 20 30 40 50",
      runnable: true,
    },
    sections: [
      {
        id: "c-pointers-arithmetic",
        heading: "Pointer Arithmetic and Arrays",
        content:
          "Adding an integer `n` to a pointer advances it by `n * sizeof(pointed_type)` bytes. So for `int *p`, `p + 1` moves 4 bytes forward — pointing to the next `int`. This is why array indexing works: `arr[i]` is exactly `*(arr + i)`.\n\nPointer subtraction gives the number of elements between two pointers (same array). Comparing pointers with `<`, `>` is valid only when both point into the same array. Never do arithmetic on pointers to different objects.",
        codeExamples: [
          {
            language: "C",
            label: "Pointer to struct with arrow operator",
            code: `#include <stdio.h>
#include <stdlib.h>

typedef struct { char name[20]; int age; } Person;

int main() {
    /* Heap-allocated struct via pointer */
    Person *p = (Person *)malloc(sizeof(Person));
    if (!p) return 1;

    /* Arrow operator: p->field is (*p).field */
    snprintf(p->name, sizeof(p->name), "Alice");
    p->age = 22;

    printf("%s is %d years old\\n", p->name, p->age);
    free(p);
    return 0;
}`,
            output: "Alice is 22 years old",
            runnable: true,
          },
        ],
      },
      {
        id: "c-pointers-functions",
        heading: "Pointers to Functions",
        content:
          "A **function pointer** stores the address of a function. Declare as: `return_type (*ptr_name)(param_types);`. Call via: `(*ptr)(args)` or simply `ptr(args)`. Function pointers enable callbacks, strategy patterns, and dispatch tables.\n\nPointers to pointers (`int **p`) are used for dynamic 2D arrays and functions that need to modify a pointer (e.g., `malloc`-like functions). `const` with pointers: `const int *p` (can't change pointed value), `int * const p` (can't change the pointer itself), `const int * const p` (neither).",
      },
    ],
    commonMistakes: [
      "Dereferencing a NULL pointer — immediate crash (segfault); always check malloc return",
      "Returning a pointer to a local variable — the stack frame is gone when the function returns",
      "Forgetting to free() dynamically allocated memory — causes memory leaks over time",
    ],
    bestPractices: [
      "Initialize all pointers to NULL; check for NULL before dereferencing",
      "Match every malloc() with exactly one free(); use tools like Valgrind to verify",
      "Prefer passing const pointers to large structs to avoid copies while signaling read-only intent",
    ],
  },

  // ── Data Science (rich topics) ───────────────────────────────────────────────
  {
    id: "numpy-arrays",
    domain: "Data Science",
    title: "NumPy Arrays",
    breadcrumb: ["Data Science", "NumPy Arrays"],
    difficulty: "Beginner" as const,
    readTime: "8 min",
    summary:
      "NumPy's ndarray is the foundation of scientific Python. Vectorized operations, broadcasting, and advanced indexing make numerical computation orders of magnitude faster than pure Python loops.",
    prerequisites: ["Python Basics", "Python Lists"],
    relatedTopics: ["pandas-dataframes", "matplotlib-charts"],
    content:
      "NumPy provides the ndarray — a homogeneous, multidimensional array that stores elements of a single type contiguously in memory. Operations on ndarrays are vectorized: they apply to every element without a Python-level loop, delegating work to optimised C/Fortran routines.\n\nCreate arrays with `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`, or `np.linspace()`. Inspect with `.shape`, `.dtype`, `.ndim`, and `.size`. Reshape with `.reshape()`, transpose with `.T`.",
    codeExample: {
      language: "Python",
      code: `import numpy as np

a = np.array([1, 2, 3, 4, 5], dtype=float)
matrix = np.zeros((3, 4))
rng = np.arange(0, 10, 2)   # [0 2 4 6 8]

# Vectorized — no loop needed
squared = a ** 2             # [1. 4. 9. 16. 25.]
normed  = (a - a.mean()) / a.std()

# 2-D
m = np.array([[1, 2, 3], [4, 5, 6]])
print(m.shape)          # (2, 3)
print(m.sum(axis=0))    # column sums: [5 7 9]
print(m.T.shape)        # (3, 2)

# Boolean indexing
data = np.random.randn(1000)
outliers = data[np.abs(data) > 2]
print(len(outliers))    # ~45`,
      output: "(2, 3)\n[5 7 9]\n(3, 2)\n~45",
      runnable: true,
    },
    sections: [
      {
        id: "numpy-arrays-creation",
        heading: "Array Creation & Shape",
        content:
          "Beyond basic constructors, `np.random.randn(m, n)` fills with standard-normal values; `np.random.randint(low, high, size)` fills with integers. `np.linspace(start, stop, num)` produces evenly-spaced floats including both endpoints — useful for plotting.\n\n`reshape(-1, 1)` infers the missing dimension automatically. `np.concatenate([a, b], axis=0)` stacks vertically; `np.stack` adds a new axis. Understand row-major (C) vs column-major (F) order when interfacing with other libraries.",
        codeExamples: [
          {
            language: "Python",
            label: "Shape manipulation",
            code: `import numpy as np

x = np.arange(12)
print(x.reshape(3, 4))   # 3 rows, 4 cols
print(x.reshape(2, -1))  # 2 rows, auto cols = 6

# Stack two 1-D arrays as columns
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
combined = np.column_stack([a, b])
print(combined.shape)    # (3, 2)`,
            output: "[[0 1 2 3]...]\n[[0 1 2 3 4 5]...]\n(3, 2)",
            runnable: true,
          },
        ],
      },
      {
        id: "numpy-arrays-broadcast",
        heading: "Broadcasting & Universal Functions",
        content:
          "Broadcasting applies operations between arrays of different shapes by virtually extending the smaller array. Rules: trailing dimensions must match or be 1. `a + 10` broadcasts the scalar; `(3,4) + (4,)` broadcasts the row across each of the 3 rows.\n\nUniversal functions (ufuncs) like `np.sqrt`, `np.exp`, `np.log`, `np.sin` apply element-wise and are far faster than `math` module equivalents on arrays.",
      },
    ],
    commonMistakes: [
      "Using Python lists in place of arrays — list operations are 10-100x slower for numerical work",
      "Confusing `.copy()` and view — slices return views; modifying them changes the original array",
      "Ignoring dtype — mixing int and float arrays silently upcasts; always check `.dtype`",
    ],
    bestPractices: [
      "Prefer vectorized operations over Python loops — a single NumPy call is faster than any loop",
      "Use `np.random.default_rng(seed)` for reproducible random arrays in modern NumPy",
      "Profile with `%timeit` in Jupyter to confirm that a vectorized approach is actually faster",
    ],
  },
  {
    id: "pandas-dataframes",
    domain: "Data Science",
    title: "Pandas DataFrames",
    breadcrumb: ["Data Science", "Pandas DataFrames"],
    difficulty: "Beginner" as const,
    readTime: "9 min",
    summary:
      "Pandas DataFrames are the workhorse of data analysis in Python. Learn to load, slice, filter, aggregate, and join tabular data efficiently.",
    prerequisites: ["NumPy Arrays", "Python Basics"],
    relatedTopics: ["data-cleaning", "matplotlib-charts"],
    content:
      "A DataFrame is a 2-D labelled table where each column is a Series backed by a NumPy array. Rows share a common index (default: 0, 1, 2 …). Columns can hold different dtypes.\n\nLoad data with `pd.read_csv()`, `pd.read_json()`, or `pd.read_excel()`. Inspect with `.head()`, `.info()`, `.describe()`, and `.shape`. Select a column with `df['col']` (Series) or `df[['a', 'b']]` (DataFrame). Filter rows with boolean masks: `df[df['score'] >= 80]`.",
    codeExample: {
      language: "Python",
      code: `import pandas as pd

df = pd.DataFrame({
    'name':  ['Alice', 'Bob', 'Charlie', 'Diana'],
    'score': [88, 72, 95, 81],
    'city':  ['Delhi', 'Mumbai', 'Delhi', 'Mumbai'],
})

# Boolean filter + column select
top = df[df['score'] >= 80][['name', 'score']]
print(top)

# Add computed column
df['grade'] = df['score'].apply(
    lambda s: 'A' if s >= 90 else 'B' if s >= 80 else 'C'
)

# Aggregation
stats = df.groupby('city').agg(
    count=('name', 'count'),
    avg=('score', 'mean')
)
print(stats)`,
      output:
        "   name  score\n0  Alice     88\n2  Charlie   95\n3  Diana     81\n\n        count   avg\ncity\nDelhi       2  91.5\nMumbai      2  76.5",
      runnable: true,
    },
    sections: [
      {
        id: "pandas-indexing",
        heading: "Indexing: loc, iloc, and Masks",
        content:
          "`df.loc[row_label, col_label]` selects by label. `df.iloc[row_int, col_int]` selects by integer position. Both accept slices and lists. Boolean masks compose with `&` (and), `|` (or), `~` (not) — always wrap conditions in parentheses.\n\n`.query()` accepts a string expression: `df.query('score >= 80 and city == \"Delhi\"')` — readable for complex filters. Avoid chained indexing (`df['a']['b'] = v`) — it may modify a copy; use `.loc` for all assignments.",
        codeExamples: [
          {
            language: "Python",
            label: "loc vs iloc",
            code: `import pandas as pd

df = pd.DataFrame({'x': [10, 20, 30], 'y': [4, 5, 6]},
                  index=['a', 'b', 'c'])

print(df.loc['b', 'x'])     # 20  — label
print(df.iloc[1, 0])        # 20  — position
print(df.loc['a':'b', 'x']) # 10, 20  — label slice (inclusive)
print(df.iloc[0:2, 0])      # 10, 20  — position slice (exclusive end)`,
            output: "20\n20\na    10\nb    20\na    10\nb    20",
            runnable: true,
          },
        ],
      },
      {
        id: "pandas-merge",
        heading: "Merging and Joining DataFrames",
        content:
          "`pd.merge(left, right, on='key', how='inner')` performs SQL-style joins. `how` options: `'inner'` (matching rows only), `'left'` (all left rows), `'right'`, `'outer'` (all rows). Join on multiple keys with `on=['k1', 'k2']`.\n\n`pd.concat([df1, df2], axis=0)` stacks rows. `axis=1` stacks columns side-by-side. Use `ignore_index=True` when concatenating to reset the index.",
      },
    ],
    commonMistakes: [
      "Chained indexing for assignment (`df['a']['b'] = v`) — silently modifies a copy; use `.loc`",
      "Forgetting `.copy()` when subsetting — modifications to a slice propagate back to the original",
      "Using `iterrows()` for row-wise logic — it's slow; use vectorized `.apply()` or NumPy operations",
    ],
    bestPractices: [
      "Call `.info()` first on any new DataFrame to check dtypes and null counts before analysis",
      "Use `.copy()` when creating a new DataFrame from a slice to avoid SettingWithCopyWarning",
      "Prefer `.query()` for readable multi-condition filters over nested boolean expressions",
    ],
  },
  {
    id: "data-cleaning",
    domain: "Data Science",
    title: "Data Cleaning",
    breadcrumb: ["Data Science", "Data Cleaning"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Real-world data is messy. Data cleaning — handling missing values, fixing dtypes, removing duplicates, and dealing with outliers — typically takes 60–80% of a data scientist's time.",
    prerequisites: ["Pandas DataFrames", "NumPy Arrays"],
    relatedTopics: ["feature-engineering", "statistical-analysis"],
    content:
      "Data cleaning transforms raw, inconsistent data into a reliable dataset fit for analysis or modelling. Common issues: missing values (NaN), wrong data types (numbers stored as strings), duplicate rows, inconsistent category names ('Male' vs 'male'), and outliers.\n\nPandas tools: `.isnull().sum()` counts nulls per column. `.fillna(value)` fills them. `.dropna(subset=['col'])` drops rows with nulls in specific columns. `.astype(dtype)` converts types. `.str.strip().str.lower()` normalises strings.",
    codeExample: {
      language: "Python",
      code: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'age':    [25, None, 30, 999, 22],
    'gender': ['Male', 'female', 'Male', 'FEMALE', None],
    'score':  [88, 72, None, 91, 85],
})

# 1. Inspect nulls
print(df.isnull().sum())

# 2. Fix string inconsistency
df['gender'] = df['gender'].str.strip().str.lower()

# 3. Fill missing values
df['score'] = df['score'].fillna(df['score'].median())
df['age']   = df['age'].fillna(df['age'].median())

# 4. Replace obvious outlier
df.loc[df['age'] > 120, 'age'] = np.nan

# 5. Drop remaining nulls
df.dropna(inplace=True)
print(df)`,
      output:
        "age      1\ngender   1\nscore    1\ndtype: int64\n\n   age gender  score\n0 25.0   male   88.0\n1 27.0 female   80.0\n2 30.0   male   80.0\n4 22.0 female   85.0",
      runnable: true,
    },
    sections: [
      {
        id: "data-cleaning-types",
        heading: "Fixing Data Types",
        content:
          "Incorrect dtypes prevent aggregations and slow down computations. Convert with `.astype()`: `df['age'].astype(int)`. Convert date strings with `pd.to_datetime(df['date'])`. Use `pd.to_numeric(df['col'], errors='coerce')` to convert a column to numeric, turning non-convertible values into NaN rather than raising an error.\n\nCategory dtype (`df['col'].astype('category')`) saves memory for low-cardinality columns (e.g., gender, grade) and speeds up `.groupby()` operations.",
        codeExamples: [
          {
            language: "Python",
            label: "Type conversion patterns",
            code: `import pandas as pd

df = pd.DataFrame({
    'amount':  ['10', '20', 'N/A', '30'],
    'date':    ['2024-01-01', '2024-01-15', '2024-02-01', None],
    'country': ['IN', 'US', 'IN', 'UK'],
})

df['amount']  = pd.to_numeric(df['amount'], errors='coerce')
df['date']    = pd.to_datetime(df['date'])
df['country'] = df['country'].astype('category')

print(df.dtypes)
# amount     float64
# date    datetime64
# country   category`,
            output:
              "amount     float64\ndate    datetime64[ns]\ncountry   category",
            runnable: true,
          },
        ],
      },
      {
        id: "data-cleaning-outliers",
        heading: "Outlier Detection & Handling",
        content:
          "IQR method: values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR are outliers. Z-score method: values more than 3 standard deviations from the mean. Use domain knowledge to decide whether to drop, cap (winsorize), or impute outliers.\n\nFor skewed distributions, log transformation reduces the influence of extreme values before modelling: `np.log1p(df['col'])` (log(1+x), safe for zero values).",
      },
    ],
    commonMistakes: [
      "Dropping rows with any null without checking — may discard majority of the dataset if nulls are sparse",
      "Imputing with mean when the column is skewed — median or mode is more robust",
      "Fixing issues after train/test split instead of before — introduces data leakage through fitted imputers",
    ],
    bestPractices: [
      "Build a cleaning pipeline with `sklearn.pipeline.Pipeline` so the same steps apply to new data",
      "Log all cleaning decisions and row counts before/after each step for reproducibility",
      "Visualise distributions (histograms, boxplots) before and after cleaning to validate changes",
    ],
  },
  {
    id: "matplotlib-charts",
    domain: "Data Science",
    title: "Matplotlib Charts",
    breadcrumb: ["Data Science", "Matplotlib Charts"],
    difficulty: "Beginner" as const,
    readTime: "8 min",
    summary:
      "Matplotlib is Python's core plotting library. Mastering Figures, Axes, and the most common chart types lets you turn raw data into clear, publishable visualisations.",
    prerequisites: ["NumPy Arrays", "Pandas DataFrames"],
    relatedTopics: ["statistical-analysis", "feature-engineering"],
    content:
      "Every Matplotlib plot lives inside a `Figure` (the canvas) containing one or more `Axes` (individual plots). The pyplot API (`plt`) wraps Figure/Axes for convenience. For publication-quality or subplot-heavy figures, use the explicit object-oriented API: `fig, ax = plt.subplots()`.\n\nCommon chart types: `ax.plot()` — line; `ax.scatter()` — scatter; `ax.bar()` / `ax.barh()` — bar; `ax.hist()` — histogram; `ax.boxplot()` — box; `ax.pie()` — pie. Always add labels: `ax.set_xlabel()`, `ax.set_ylabel()`, `ax.set_title()`, `ax.legend()`.",
    codeExample: {
      language: "Python",
      code: `import matplotlib.pyplot as plt
import numpy as np

fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# Line chart
x = np.linspace(0, 2 * np.pi, 200)
axes[0].plot(x, np.sin(x), label='sin')
axes[0].plot(x, np.cos(x), label='cos', linestyle='--')
axes[0].set_title('Trig Functions')
axes[0].legend()
axes[0].grid(alpha=0.3)

# Histogram
data = np.random.normal(50, 10, 1000)
axes[1].hist(data, bins=30, color='steelblue',
             edgecolor='white', alpha=0.8)
axes[1].axvline(data.mean(), color='red', linestyle='--',
                label=f'mean={data.mean():.1f}')
axes[1].set_title('Score Distribution')
axes[1].legend()

plt.tight_layout()
plt.savefig('charts.png', dpi=150)
plt.show()`,
      output:
        "Two charts saved to charts.png: trig function line chart and score histogram",
      runnable: false,
    },
    sections: [
      {
        id: "matplotlib-subplots",
        heading: "Subplots and Figure Layout",
        content:
          "`plt.subplots(rows, cols)` returns a Figure and an array of Axes. Access individual axes: `axes[0, 1]` for row 0, column 1. `plt.tight_layout()` auto-adjusts spacing to prevent label overlap — always call it before saving.\n\n`gridspec` provides fine control over subplot sizes: `GridSpec(2, 2)` with `width_ratios` and `height_ratios`. `plt.subplot_mosaic('AB;CC')` uses an ASCII art string to define irregular layouts.",
        codeExamples: [
          {
            language: "Python",
            label: "2×2 subplot grid",
            code: `import matplotlib.pyplot as plt
import numpy as np

fig, axes = plt.subplots(2, 2, figsize=(8, 6))
axes = axes.flatten()  # easier 1-D indexing

titles = ['Line', 'Scatter', 'Bar', 'Histogram']
for i, ax in enumerate(axes):
    ax.set_title(titles[i])
    data = np.random.randn(50)
    if i == 0: ax.plot(data)
    elif i == 1: ax.scatter(range(50), data, s=10)
    elif i == 2: ax.bar(range(10), np.abs(data[:10]))
    else:        ax.hist(data, bins=15)

plt.tight_layout()
plt.show()`,
            output: "2×2 grid of line, scatter, bar, and histogram charts",
            runnable: false,
          },
        ],
      },
      {
        id: "matplotlib-styling",
        heading: "Styling and Seaborn Integration",
        content:
          "Apply a consistent style with `plt.style.use('seaborn-v0_8-whitegrid')` or `plt.rcParams` for persistent settings. Seaborn (`import seaborn as sns`) builds on Matplotlib with statistical plots: `sns.histplot`, `sns.boxplot`, `sns.heatmap`, `sns.pairplot`. Since Seaborn returns Matplotlib Axes, you can mix both APIs freely.\n\n`sns.heatmap(df.corr(), annot=True, fmt='.2f', cmap='coolwarm')` is the canonical way to visualise a correlation matrix.",
      },
    ],
    commonMistakes: [
      "Calling plt.show() inside a loop — only the last figure renders; build all subplots first",
      "Not calling tight_layout() before savefig — axis labels get clipped in saved images",
      "Using default figure size (6.4×4.8 in) for multi-panel figures — always set figsize explicitly",
    ],
    bestPractices: [
      "Use the object-oriented API (fig, ax = plt.subplots()) for anything beyond a quick throwaway plot",
      "Always save with plt.savefig('fig.png', dpi=150, bbox_inches='tight') for crisp exports",
      "Label every axis and every line/bar — a chart without labels communicates nothing",
    ],
  },
  {
    id: "statistical-analysis",
    domain: "Data Science",
    title: "Statistical Analysis",
    breadcrumb: ["Data Science", "Statistical Analysis"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Statistical analysis turns raw observations into actionable insights. Descriptive statistics, hypothesis testing, and correlation analysis are the core toolkit for every data scientist.",
    prerequisites: ["NumPy Arrays", "Pandas DataFrames", "Matplotlib Charts"],
    relatedTopics: ["feature-engineering", "ml-linear-regression"],
    content:
      "Descriptive statistics summarise a dataset: mean (average), median (middle value), mode (most frequent), variance (spread), standard deviation, and quantiles. NumPy and Pandas expose all of these as methods.\n\nInferential statistics test hypotheses about populations from samples. The t-test compares two group means. ANOVA compares three or more groups. Chi-squared tests independence of categorical variables. The p-value is the probability of observing the result (or more extreme) if the null hypothesis is true — by convention p < 0.05 rejects the null.",
    codeExample: {
      language: "Python",
      code: `import numpy as np
import pandas as pd
from scipy import stats

# Descriptive stats
data = np.array([88, 72, 95, 81, 90, 67, 78, 85, 92, 74])
print(f"Mean: {data.mean():.1f}")
print(f"Median: {np.median(data):.1f}")
print(f"Std: {data.std():.1f}")
print(f"IQR: {np.percentile(data, 75) - np.percentile(data, 25):.1f}")

# Two-sample t-test
groupA = np.array([85, 90, 78, 92, 88])
groupB = np.array([72, 68, 75, 70, 74])
t_stat, p_value = stats.ttest_ind(groupA, groupB)
print(f"\\nt={t_stat:.2f}, p={p_value:.4f}")
if p_value < 0.05:
    print("Significant difference (p < 0.05)")`,
      output:
        "Mean: 82.2\nMedian: 83.0\nStd: 8.9\nIQR: 14.8\n\nt=4.89, p=0.0012\nSignificant difference (p < 0.05)",
      runnable: true,
    },
    sections: [
      {
        id: "stats-correlation",
        heading: "Correlation and Covariance",
        content:
          "Pearson correlation (r) measures the linear relationship between two continuous variables. r = 1 is perfect positive correlation; r = −1 is perfect negative; r = 0 means no linear relationship. It does NOT imply causation.\n\nSpearman correlation is rank-based — more robust to outliers and non-linear monotonic relationships. Use `stats.spearmanr()`. Pandas `.corr()` on a DataFrame computes pairwise Pearson by default; pass `method='spearman'` for Spearman.",
        codeExamples: [
          {
            language: "Python",
            label: "Correlation matrix heatmap",
            code: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.DataFrame({
    'hours_studied': [1, 2, 3, 4, 5, 6, 7],
    'exam_score':    [55, 60, 65, 70, 78, 85, 92],
    'sleep_hours':   [8, 7, 7, 6, 6, 5, 5],
})

corr = df.corr()
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', vmin=-1, vmax=1)
plt.title('Correlation Matrix')
plt.tight_layout()
plt.show()`,
            output:
              "Heatmap showing strong positive correlation between hours_studied and exam_score",
            runnable: false,
          },
        ],
      },
      {
        id: "stats-distributions",
        heading: "Probability Distributions",
        content:
          "The normal (Gaussian) distribution is characterised by mean μ and standard deviation σ. The 68-95-99.7 rule: ~68% of data falls within 1σ, 95% within 2σ, 99.7% within 3σ. Test normality with `stats.shapiro()` (small samples) or `stats.kstest()`.\n\nOther key distributions: Poisson (count of events in an interval), Binomial (success/fail with fixed probability), Exponential (time between events). `scipy.stats` provides PDF, CDF, and random sampling for each.",
      },
    ],
    commonMistakes: [
      "Confusing statistical significance with practical significance — a tiny effect can be highly significant with large n",
      "Using Pearson correlation on non-linear relationships — check a scatter plot first",
      "Performing multiple tests without correction — increases false-positive rate; use Bonferroni or FDR",
    ],
    bestPractices: [
      "Always visualise data before running statistical tests — summary statistics hide distribution shape",
      "Report effect size (Cohen's d, r²) alongside p-values to communicate practical importance",
      "Use confidence intervals instead of (or alongside) p-values for a richer view of uncertainty",
    ],
  },
  {
    id: "feature-engineering",
    domain: "Data Science",
    title: "Feature Engineering",
    breadcrumb: ["Data Science", "Feature Engineering"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Feature engineering transforms raw data into informative inputs that machine learning models can learn from. Good features often matter more than model choice.",
    prerequisites: ["Data Cleaning", "Statistical Analysis"],
    relatedTopics: ["ml-linear-regression", "ml-classification"],
    content:
      "Feature engineering bridges raw data and ML models. It includes: encoding categorical variables (one-hot, label, ordinal), scaling numerical features (normalisation, standardisation), creating interaction terms, extracting components from datetime (hour, day-of-week), and binning continuous variables.\n\nScikit-learn's `sklearn.preprocessing` module provides `StandardScaler` (zero mean, unit variance), `MinMaxScaler` (0–1 range), `LabelEncoder`, and `OneHotEncoder`. Always fit scalers on training data only, then `transform` both train and test sets.",
    codeExample: {
      language: "Python",
      code: `import pandas as pd
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

df = pd.DataFrame({
    'age':    [25, 32, 22, 45, 28],
    'salary': [50000, 80000, 40000, 120000, 60000],
    'city':   ['Delhi', 'Mumbai', 'Delhi', 'Bangalore', 'Mumbai'],
})

num_features = ['age', 'salary']
cat_features = ['city']

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), num_features),
    ('cat', OneHotEncoder(sparse_output=False), cat_features),
])

X_transformed = preprocessor.fit_transform(df)
print(X_transformed.shape)  # (5, 5) = 2 num + 3 cities`,
      output: "(5, 5)",
      runnable: true,
    },
    sections: [
      {
        id: "feature-encoding",
        heading: "Encoding Categorical Variables",
        content:
          "One-hot encoding converts a column with k unique values into k binary columns. Use it for nominal categories (no order). Beware: high-cardinality columns (e.g., zip codes) produce thousands of features — use target encoding or embeddings instead.\n\nOrdinal encoding maps categories to integers preserving order (small=1, medium=2, large=3). Label encoding maps arbitrary text to integers but implies a numeric ordering that ML models may misinterpret — only safe for tree-based models.",
        codeExamples: [
          {
            language: "Python",
            label: "One-hot vs ordinal encoding",
            code: `import pandas as pd

df = pd.DataFrame({
    'color':    ['red', 'blue', 'green', 'blue'],
    'size':     ['small', 'large', 'medium', 'small'],
})

# One-hot (nominal)
encoded = pd.get_dummies(df['color'], prefix='color')
print(encoded)

# Ordinal (ordered)
size_map = {'small': 1, 'medium': 2, 'large': 3}
df['size_ord'] = df['size'].map(size_map)
print(df[['size', 'size_ord']])`,
            output:
              "   color_blue  color_green  color_red\n0       0         0         1\n...\n\n     size  size_ord\n0   small         1\n1   large         3",
            runnable: true,
          },
        ],
      },
      {
        id: "feature-scaling",
        heading: "Scaling and Normalisation",
        content:
          "Many algorithms (linear regression, SVM, KNN, neural networks) are sensitive to feature scale. StandardScaler subtracts the mean and divides by standard deviation — output has zero mean and unit variance. MinMaxScaler scales to [0, 1]. RobustScaler uses median and IQR — better when outliers are present.\n\nTree-based models (decision trees, random forests, XGBoost) are scale-invariant — you don't need to scale for them. Always scale after splitting to avoid data leakage from test statistics.",
      },
    ],
    commonMistakes: [
      "Fitting the scaler on the entire dataset before splitting — leaks test-set statistics into training",
      "One-hot encoding high-cardinality features — creates too many sparse columns; use target or frequency encoding",
      "Dropping all rows with NaN before encoding — lose data; impute instead",
    ],
    bestPractices: [
      "Use sklearn Pipeline to bundle preprocessing and model — ensures consistent transforms at inference",
      "Check feature importances after training to see which engineered features were useful",
      "Generate interaction features (col_a * col_b) for linear models where domain knowledge suggests synergy",
    ],
  },

  // ── Machine Learning (rich topics) ──────────────────────────────────────────
  {
    id: "ml-linear-regression",
    domain: "Machine Learning",
    title: "Linear Regression",
    breadcrumb: ["Machine Learning", "Linear Regression"],
    difficulty: "Beginner" as const,
    readTime: "9 min",
    summary:
      "Linear regression predicts a continuous output as a weighted sum of input features. It is the simplest supervised learning model and the foundation of understanding more complex algorithms.",
    prerequisites: ["Statistical Analysis", "Feature Engineering"],
    relatedTopics: ["ml-classification", "ml-model-evaluation"],
    content:
      "Linear regression models the relationship between features X and a continuous target y as: ŷ = w₀ + w₁x₁ + w₂x₂ + … + wₙxₙ. Training finds weights w that minimise the mean squared error (MSE) between predictions and true values.\n\nScikit-learn's `LinearRegression` uses the analytical least-squares solution (no hyperparameters). `Ridge` and `Lasso` add regularisation — Ridge (L2) shrinks coefficients; Lasso (L1) drives some to exactly zero, performing feature selection.",
    codeExample: {
      language: "Python",
      code: `import numpy as np
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler

# Synthetic data: score ~ 2*hours + noise
np.random.seed(42)
hours = np.random.uniform(1, 10, 100).reshape(-1, 1)
score = 5 * hours.ravel() + 50 + np.random.randn(100) * 5

X_tr, X_te, y_tr, y_te = train_test_split(hours, score, test_size=0.2)

scaler = StandardScaler()
X_tr = scaler.fit_transform(X_tr)
X_te = scaler.transform(X_te)

model = LinearRegression()
model.fit(X_tr, y_tr)
preds = model.predict(X_te)

print(f"R²:   {r2_score(y_te, preds):.3f}")
print(f"RMSE: {mean_squared_error(y_te, preds, squared=False):.2f}")
print(f"Coef: {model.coef_[0]:.2f}")`,
      output: "R²:   0.972\nRMSE: 4.83\nCoef: 4.98",
      runnable: true,
    },
    sections: [
      {
        id: "linear-reg-assumptions",
        heading: "Assumptions and Diagnostics",
        content:
          "Linear regression has four key assumptions: linearity (y is linear in X), independence (residuals are independent), homoscedasticity (residuals have constant variance), and normality (residuals are normally distributed). Violating these affects the validity of coefficient standard errors and p-values.\n\nDiagnostics: residual plot (residuals vs ŷ should scatter randomly around 0 — any pattern indicates non-linearity or heteroscedasticity). QQ plot of residuals checks normality. Variance Inflation Factor (VIF > 10) flags multicollinearity.",
        codeExamples: [
          {
            language: "Python",
            label: "Residual plot",
            code: `import matplotlib.pyplot as plt

residuals = y_te - preds
fig, axes = plt.subplots(1, 2, figsize=(10, 4))

# Residuals vs fitted
axes[0].scatter(preds, residuals, alpha=0.6)
axes[0].axhline(0, color='red', linestyle='--')
axes[0].set_xlabel('Fitted values')
axes[0].set_ylabel('Residuals')
axes[0].set_title('Residual Plot')

# Distribution of residuals
axes[1].hist(residuals, bins=20, edgecolor='white')
axes[1].set_title('Residual Distribution')
plt.tight_layout()
plt.show()`,
            output: "Residuals scatter randomly around 0 — good model fit",
            runnable: false,
          },
        ],
      },
      {
        id: "linear-reg-regularisation",
        heading: "Ridge and Lasso Regularisation",
        content:
          "Regularisation adds a penalty to large coefficients to prevent overfitting. Ridge (alpha * Σwᵢ²) shrinks all coefficients proportionally. Lasso (alpha * Σ|wᵢ|) drives some to exactly zero — automatic feature selection.\n\nChoose alpha with cross-validation: `RidgeCV(alphas=[0.01, 0.1, 1, 10])` tries each and picks the best. Large alpha = more regularisation = simpler model. ElasticNet combines L1 and L2 penalties.",
      },
    ],
    commonMistakes: [
      "Not scaling features before regularised regression — Ridge/Lasso penalise features unequally",
      "Interpreting R² alone — a high R² on training data may indicate overfitting; check test R²",
      "Including target-derived features — creates leakage; the model will appear perfect but fail in production",
    ],
    bestPractices: [
      "Always check residual plots — a non-random pattern reveals model misspecification",
      "Use cross-validation (cv=5) to select regularisation strength alpha reliably",
      "Standardise features before fitting Ridge or Lasso so the penalty treats all features equally",
    ],
  },
  {
    id: "ml-classification",
    domain: "Machine Learning",
    title: "Classification",
    breadcrumb: ["Machine Learning", "Classification"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Classification assigns inputs to discrete categories. Logistic regression, decision trees, SVM, and random forests are the most widely used classifiers in industry.",
    prerequisites: ["Feature Engineering", "ml-linear-regression"],
    relatedTopics: ["ml-decision-trees", "ml-model-evaluation"],
    content:
      "Classification predicts a discrete class label (spam/not-spam, digit 0–9, disease/healthy). Binary classification has two classes; multi-class has three or more.\n\nLogistic regression outputs a probability using the sigmoid function — the most interpretable baseline. For non-linear boundaries, decision trees and random forests work well. SVM finds the maximum-margin hyperplane. Always start with logistic regression as a baseline before using complex models.",
    codeExample: {
      language: "Python",
      code: `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score

data = load_breast_cancer()
X_tr, X_te, y_tr, y_te = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42, stratify=data.target
)

scaler = StandardScaler()
X_tr = scaler.fit_transform(X_tr)
X_te = scaler.transform(X_te)

# Logistic regression baseline
lr = LogisticRegression(max_iter=1000)
lr.fit(X_tr, y_tr)
preds = lr.predict(X_te)
print(classification_report(y_te, preds, target_names=data.target_names))
print(f"AUC-ROC: {roc_auc_score(y_te, lr.predict_proba(X_te)[:,1]):.3f}")`,
      output:
        "              precision    recall  f1-score\n   malignant      0.95      0.93      0.94\n   benign         0.96      0.97      0.97\nAUC-ROC: 0.991",
      runnable: true,
    },
    sections: [
      {
        id: "classification-metrics",
        heading: "Evaluation Metrics for Classification",
        content:
          "Accuracy = correct / total — misleading for imbalanced classes (99% healthy patients: predicting 'healthy' always gives 99% accuracy but is useless). Precision = TP / (TP + FP) — of predicted positives, how many are correct? Recall = TP / (TP + FN) — of actual positives, how many were found? F1 = harmonic mean of precision and recall — best single metric for imbalanced classes.\n\nAUC-ROC measures the model's ability to rank positives above negatives — 0.5 is random, 1.0 is perfect. The confusion matrix reveals all four error types at once.",
        codeExamples: [
          {
            language: "Python",
            label: "Confusion matrix with Seaborn",
            code: `from sklearn.metrics import confusion_matrix
import seaborn as sns, matplotlib.pyplot as plt

cm = confusion_matrix(y_te, preds)
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=data.target_names,
            yticklabels=data.target_names)
plt.ylabel('True label')
plt.xlabel('Predicted label')
plt.title('Confusion Matrix')
plt.show()`,
            output: "Heatmap showing TP, FP, FN, TN counts per class",
            runnable: false,
          },
        ],
      },
      {
        id: "classification-imbalance",
        heading: "Handling Class Imbalance",
        content:
          "When one class is rare, models default to predicting the majority class. Solutions: class_weight='balanced' in sklearn — upweights minority class in the loss. SMOTE (Synthetic Minority Oversampling Technique) from `imbalanced-learn` generates synthetic minority samples. Undersampling removes majority samples.\n\nAlways use stratified splits (`stratify=y`) to maintain class proportions in train/test sets when classes are imbalanced.",
      },
    ],
    commonMistakes: [
      "Reporting only accuracy on imbalanced datasets — it's meaningless; use F1 and AUC-ROC",
      "Not stratifying the train/test split — one set may have very few minority samples",
      "Scaling test data with test-set statistics — fit scaler on training data only",
    ],
    bestPractices: [
      "Train a logistic regression baseline first — its interpretable coefficients reveal useful patterns",
      "Use cross_val_score with cv=5 for robust evaluation instead of a single train/test split",
      "Plot the ROC curve to choose the probability threshold that best balances precision and recall",
    ],
  },
  {
    id: "ml-decision-trees",
    domain: "Machine Learning",
    title: "Decision Trees",
    breadcrumb: ["Machine Learning", "Decision Trees"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Decision trees split data by feature thresholds to build an interpretable model. Random forests and gradient boosting extend trees into the most powerful tabular ML algorithms.",
    prerequisites: ["ml-classification", "Feature Engineering"],
    relatedTopics: ["ml-overfitting", "ml-model-evaluation"],
    content:
      "A decision tree recursively partitions data by choosing the feature and threshold that best separates classes (measured by Gini impurity or entropy for classification; MSE for regression). The result is a flowchart of yes/no decisions.\n\nSingle trees are prone to overfitting — they memorise training data. Ensemble methods fix this: Random Forest trains many trees on random subsets of data and features, then averages predictions. Gradient Boosting (XGBoost, LightGBM) trains trees sequentially, each correcting errors of the previous.",
    codeExample: {
      language: "Python",
      code: `from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
import numpy as np

iris = load_iris()
X_tr, X_te, y_tr, y_te = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42, stratify=iris.target
)

# Single tree (max_depth limits overfitting)
dt = DecisionTreeClassifier(max_depth=3, random_state=42)
dt.fit(X_tr, y_tr)
print("Tree accuracy:", dt.score(X_te, y_te))
print(export_text(dt, feature_names=iris.feature_names))

# Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_tr, y_tr)
cv = cross_val_score(rf, iris.data, iris.target, cv=5)
print(f"RF CV: {cv.mean():.3f} ± {cv.std():.3f}")`,
      output:
        "Tree accuracy: 0.933\n|--- petal length (cm) <= 2.45\n|   |--- class: 0\n...\nRF CV: 0.967 ± 0.021",
      runnable: true,
    },
    sections: [
      {
        id: "trees-feature-importance",
        heading: "Feature Importance",
        content:
          "Random forests expose `.feature_importances_` — an array of importance scores (sum to 1) indicating how much each feature reduced impurity across all trees. This is a powerful model-inherent feature selection tool.\n\nPlot importances sorted descending with a bar chart. Top features drive the model's predictions. Features with near-zero importance can be dropped to reduce training time without hurting accuracy.",
        codeExamples: [
          {
            language: "Python",
            label: "Feature importance bar chart",
            code: `import matplotlib.pyplot as plt
import numpy as np

importances = rf.feature_importances_
indices = np.argsort(importances)[::-1]
names   = np.array(iris.feature_names)[indices]

plt.figure(figsize=(6, 4))
plt.bar(range(len(names)), importances[indices], color='steelblue')
plt.xticks(range(len(names)), names, rotation=30)
plt.title('Random Forest Feature Importances')
plt.tight_layout()
plt.show()`,
            output:
              "Bar chart showing petal length as the most important feature",
            runnable: false,
          },
        ],
      },
      {
        id: "trees-hyperparams",
        heading: "Key Hyperparameters",
        content:
          "For `DecisionTreeClassifier`: `max_depth` (limits tree size, main overfitting control), `min_samples_split` (minimum samples to split a node), `min_samples_leaf` (minimum samples in a leaf).\n\nFor `RandomForestClassifier`: `n_estimators` (more trees = better, diminishing returns after 200), `max_features` ('sqrt' default for classification), `max_depth` (also limits individual trees). Tune with `GridSearchCV` or `RandomizedSearchCV`.",
      },
    ],
    commonMistakes: [
      "Training a deep unlimited tree and wondering why it overfits — always set max_depth",
      "Using feature importances from a single tree — they're noisy; use a forest's aggregate importances",
      "Not checking for multicollinearity — correlated features split importance between themselves unfairly",
    ],
    bestPractices: [
      "Start with default Random Forest — it's robust and rarely needs extensive tuning",
      "Visualise the tree (max_depth=3) for interpretability before deploying a complex model",
      "Use XGBoost or LightGBM for state-of-the-art tabular performance with gradient boosting",
    ],
  },
  {
    id: "ml-neural-networks",
    domain: "Machine Learning",
    title: "Neural Networks",
    breadcrumb: ["Machine Learning", "Neural Networks"],
    difficulty: "Advanced" as const,
    readTime: "10 min",
    summary:
      "Neural networks are composed of layers of interconnected neurons that learn complex patterns through backpropagation. They power image recognition, NLP, and most modern AI.",
    prerequisites: ["ml-classification", "Feature Engineering"],
    relatedTopics: ["ml-overfitting", "ml-model-evaluation"],
    content:
      "A neural network is a stack of layers, each performing a linear transformation followed by a non-linear activation function. The input layer receives features; hidden layers extract representations; the output layer produces predictions. Backpropagation computes gradients of the loss with respect to weights; gradient descent updates them.\n\nKey activations: ReLU (`max(0, x)`) for hidden layers — fast and avoids vanishing gradients. Sigmoid (0–1 output) for binary classification output. Softmax (probabilities summing to 1) for multi-class output.",
    codeExample: {
      language: "Python",
      code: `import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report

digits = load_digits()
X_tr, X_te, y_tr, y_te = train_test_split(
    digits.data, digits.target, test_size=0.2, random_state=42
)

scaler = StandardScaler()
X_tr = scaler.fit_transform(X_tr)
X_te = scaler.transform(X_te)

mlp = MLPClassifier(
    hidden_layer_sizes=(128, 64),
    activation='relu',
    max_iter=500,
    random_state=42,
    early_stopping=True,
    validation_fraction=0.1,
)
mlp.fit(X_tr, y_tr)
print(classification_report(y_te, mlp.predict(X_te)))`,
      output:
        "              precision    recall  f1-score\n           0       0.99      1.00      0.99\n...\n    accuracy                       0.97",
      runnable: true,
    },
    sections: [
      {
        id: "nn-architecture",
        heading: "Architecture Design",
        content:
          "Layer width and depth are the primary architecture choices. Wider layers (more neurons) increase capacity per layer. Deeper networks learn more hierarchical features. Start small: 2 hidden layers with 64–256 neurons is a solid baseline for most tabular tasks.\n\nBatch Normalisation normalises layer inputs, stabilising training and allowing higher learning rates. Dropout randomly zeros neuron outputs during training — a powerful regulariser. Common dropout rates: 0.2–0.5 for fully-connected layers.",
        codeExamples: [
          {
            language: "Python",
            label: "Learning curve (loss over epochs)",
            code: `import matplotlib.pyplot as plt

plt.figure(figsize=(7, 4))
plt.plot(mlp.loss_curve_, label='Train loss')
if hasattr(mlp, 'validation_scores_'):
    plt.plot([-v for v in mlp.validation_scores_],
             label='Val loss', linestyle='--')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title('MLP Training Curve')
plt.legend()
plt.tight_layout()
plt.show()`,
            output:
              "Loss curve showing training and validation loss decreasing over epochs",
            runnable: false,
          },
        ],
      },
      {
        id: "nn-optimisation",
        heading: "Optimisers and Learning Rates",
        content:
          "Stochastic Gradient Descent (SGD) updates weights using one mini-batch at a time. Adam (`adaptive moment estimation`) adapts the learning rate per parameter — the default choice for most tasks. Learning rate is the most important hyperparameter: too high causes divergence; too low causes slow or stuck training.\n\nLearning rate scheduling: ReduceLROnPlateau (reduce when val loss plateaus) and cosine annealing are common strategies. `early_stopping=True` in sklearn stops training when validation loss stops improving.",
      },
    ],
    commonMistakes: [
      "Not scaling inputs — neural networks are extremely sensitive to feature scale",
      "Using sigmoid/tanh in hidden layers for deep networks — they saturate and kill gradients; use ReLU",
      "Training without a validation set — no way to detect overfitting during training",
    ],
    bestPractices: [
      "Always scale inputs to zero mean and unit variance (or 0–1) before training",
      "Use early stopping with a patience of 10–20 epochs to prevent overfitting automatically",
      "For non-tabular data (images, text, audio) switch to PyTorch or TensorFlow for GPU-accelerated deep learning",
    ],
  },
  {
    id: "ml-model-evaluation",
    domain: "Machine Learning",
    title: "Model Evaluation",
    breadcrumb: ["Machine Learning", "Model Evaluation"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Model evaluation measures how well a model generalises to unseen data. Cross-validation, proper metrics, and leakage-free pipelines are essential for trustworthy results.",
    prerequisites: ["ml-classification", "ml-linear-regression"],
    relatedTopics: ["ml-overfitting", "feature-engineering"],
    content:
      "A model that memorises training data scores perfectly in training but fails on new data — this is overfitting. Proper evaluation uses held-out data the model never saw during training.\n\nk-fold cross-validation splits data into k equal folds; the model trains on k−1 folds and evaluates on the remaining fold, rotating k times. This gives k scores whose mean and standard deviation indicate both performance and variance. `StratifiedKFold` preserves class proportions — use for classification.",
    codeExample: {
      language: "Python",
      code: `from sklearn.model_selection import (
    cross_val_score, StratifiedKFold, learning_curve
)
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
import numpy as np
import matplotlib.pyplot as plt

data = load_breast_cancer()
X, y = data.data, data.target

rf = RandomForestClassifier(n_estimators=100, random_state=42)
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

scores = cross_val_score(rf, X, y, cv=cv, scoring='roc_auc')
print(f"AUC-ROC: {scores.mean():.3f} ± {scores.std():.3f}")

# Learning curve
train_sz, train_sc, val_sc = learning_curve(
    rf, X, y, cv=cv, scoring='roc_auc',
    train_sizes=np.linspace(0.1, 1.0, 8), n_jobs=-1
)
plt.plot(train_sz, val_sc.mean(axis=1), label='Validation')
plt.plot(train_sz, train_sc.mean(axis=1), label='Train')
plt.legend(); plt.xlabel('Training set size'); plt.ylabel('AUC-ROC')
plt.title('Learning Curve'); plt.tight_layout(); plt.show()`,
      output: "AUC-ROC: 0.994 ± 0.006\nLearning curve plot saved",
      runnable: false,
    },
    sections: [
      {
        id: "eval-hyperparameter",
        heading: "Hyperparameter Tuning",
        content:
          "`GridSearchCV` exhaustively searches all combinations of hyperparameters. `RandomizedSearchCV` samples a fixed number of random combinations — much faster for many parameters. Both use cross-validation internally.\n\n`Pipeline` + `GridSearchCV` is the correct pattern: the pipeline ensures preprocessing is re-fit on each fold's training data, preventing leakage. Example: `Pipeline([('scaler', StandardScaler()), ('clf', SVC())])` with `param_grid={'clf__C': [0.1, 1, 10]}`.",
        codeExamples: [
          {
            language: "Python",
            label: "GridSearchCV with Pipeline",
            code: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', SVC(probability=True)),
])

param_grid = {
    'clf__C':      [0.1, 1, 10],
    'clf__kernel': ['rbf', 'linear'],
}

grid = GridSearchCV(pipe, param_grid, cv=5, scoring='roc_auc', n_jobs=-1)
grid.fit(X, y)
print("Best params:", grid.best_params_)
print(f"Best AUC:   {grid.best_score_:.3f}")`,
            output:
              "Best params: {'clf__C': 1, 'clf__kernel': 'rbf'}\nBest AUC:   0.996",
            runnable: false,
          },
        ],
      },
      {
        id: "eval-leakage",
        heading: "Data Leakage",
        content:
          "Data leakage occurs when information from outside the training set is used to train the model, producing unrealistically optimistic evaluation scores. Common leakage sources: fitting scalers or encoders on the full dataset before splitting; including features that contain future information (target leakage); using the test set to select features or hyperparameters.\n\nPrevention: always split data first, then fit all transformers inside a cross-validation loop (Pipeline handles this automatically). Never touch the test set until final evaluation.",
      },
    ],
    commonMistakes: [
      "Evaluating on training data — always use a held-out test set or cross-validation",
      "Fitting preprocessing (scalers, encoders) on the full dataset before splitting — classic leakage",
      "Choosing the model with the best test score and reporting it as unbiased — use a validation set for model selection, test set only for final report",
    ],
    bestPractices: [
      "Use Pipeline to bundle preprocessing and model — prevents leakage in cross-validation",
      "Report mean ± std from cross-validation rather than a single train/test split",
      "Keep your test set truly held-out — only look at it once, at the very end",
    ],
  },
  {
    id: "ml-overfitting",
    domain: "Machine Learning",
    title: "Overfitting & Regularisation",
    breadcrumb: ["Machine Learning", "Overfitting"],
    difficulty: "Intermediate" as const,
    readTime: "9 min",
    summary:
      "Overfitting is the central challenge of machine learning. Understanding the bias-variance tradeoff and applying regularisation techniques keeps models generalising well to new data.",
    prerequisites: ["ml-model-evaluation", "ml-linear-regression"],
    relatedTopics: ["ml-neural-networks", "ml-decision-trees"],
    content:
      "Overfitting occurs when a model learns the training data — including its noise — too well, failing to generalise. Signs: training accuracy >> validation accuracy; learning curve shows a wide gap between train and val scores.\n\nBias-variance tradeoff: high bias (underfitting) — model is too simple to capture the pattern. High variance (overfitting) — model is too complex and fits noise. The goal is the sweet spot with low bias and low variance. Regularisation adds a penalty for model complexity to shift the balance.",
    codeExample: {
      language: "Python",
      code: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.pipeline import Pipeline

np.random.seed(0)
X = np.sort(np.random.uniform(0, 1, 30)).reshape(-1, 1)
y = np.sin(2 * np.pi * X.ravel()) + np.random.randn(30) * 0.2

x_plot = np.linspace(0, 1, 200).reshape(-1, 1)
fig, axes = plt.subplots(1, 3, figsize=(12, 4))

for ax, deg, title in zip(axes, [1, 9, 9], ['Underfit d=1','Overfit d=9','Ridge d=9']):
    if title.startswith('Ridge'):
        pipe = Pipeline([('poly', PolynomialFeatures(deg)),
                         ('reg', Ridge(alpha=1.0))])
    else:
        pipe = Pipeline([('poly', PolynomialFeatures(deg)),
                         ('reg', LinearRegression())])
    pipe.fit(X, y)
    ax.scatter(X, y, s=20)
    ax.plot(x_plot, pipe.predict(x_plot), color='red')
    ax.set_title(title)

plt.tight_layout(); plt.show()`,
      output:
        "Three subplots showing underfitting (linear), overfitting (degree-9), and well-regularised (Ridge degree-9)",
      runnable: false,
    },
    sections: [
      {
        id: "overfit-detection",
        heading: "Detecting Overfitting",
        content:
          "The most reliable detector is a learning curve: plot training and validation score vs training set size. Overfitting: training score high, validation score low — gap persists even with more data. Underfitting: both scores low — more data won't help; increase model complexity.\n\nOther signals: validation loss starts increasing while training loss continues decreasing (in neural networks); model performs perfectly in training but poorly on new examples.",
        codeExamples: [
          {
            language: "Python",
            label: "Diagnosing with validation curves",
            code: `from sklearn.model_selection import validation_curve
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_breast_cancer
import numpy as np, matplotlib.pyplot as plt

data = load_breast_cancer()
depths = range(1, 20)
tr_sc, val_sc = validation_curve(
    DecisionTreeClassifier(random_state=0), data.data, data.target,
    param_name='max_depth', param_range=depths, cv=5, scoring='accuracy'
)

plt.plot(depths, tr_sc.mean(axis=1),  label='Train')
plt.plot(depths, val_sc.mean(axis=1), label='Validation')
plt.xlabel('max_depth'); plt.ylabel('Accuracy')
plt.legend(); plt.title('Validation Curve'); plt.show()`,
            output:
              "Curve showing validation accuracy peaking around depth 4-5, then declining as tree overfits",
            runnable: false,
          },
        ],
      },
      {
        id: "overfit-remedies",
        heading: "Regularisation Techniques",
        content:
          "Linear models: Ridge (L2) and Lasso (L1) penalties shrink coefficients. Neural networks: Dropout randomly zeros activations; L2 weight decay in the optimizer; Early stopping halts training when validation loss plateaus. Trees: limit `max_depth`, `min_samples_leaf`, and `min_samples_split`. Ensembles: averaging multiple models (bagging) reduces variance.\n\nData augmentation artificially increases training set size — standard for images (flips, crops, rotations). Cross-validation combined with held-out test evaluation gives an honest picture of generalisation.",
      },
    ],
    commonMistakes: [
      "Tuning hyperparameters on the test set — inflates performance metrics; use a validation set",
      "Adding more features without regularisation — more features = more overfitting risk",
      "Confusing low training error with a good model — always measure on held-out data",
    ],
    bestPractices: [
      "Plot learning curves early — they instantly reveal whether you have an overfitting or underfitting problem",
      "Default to Ridge regression and max_depth-limited trees before trying complex models",
      "Use early stopping in neural network training — it's free regularisation with no hyperparameter cost",
    ],
  },

  // ── Backend (extended topics) ────────────────────────────────────────────────
  {
    id: "rest-apis",
    domain: "Backend",
    title: "REST APIs",
    breadcrumb: ["Backend", "REST APIs"],
    difficulty: "Beginner",
    readTime: "6 min",
    summary:
      "REST is an architectural style for web services that uses HTTP verbs, resource-based URLs, and stateless requests to build scalable, predictable APIs.",
    prerequisites: ["HTTP basics", "JSON"],
    relatedTopics: ["http-methods", "express-routing", "auth-basics"],
    content:
      "REST (Representational State Transfer) is the most widely used style for building web APIs. It defines resources as URLs and uses standard HTTP verbs to act on them. A RESTful API is stateless — every request carries all the information needed to process it, with no server-side session required.\n\nGood REST design uses plural nouns (/users, /posts), nests related resources (/users/:id/posts), and returns meaningful HTTP status codes (200 OK, 201 Created, 404 Not Found, 500 Server Error).",
    codeExample: {
      language: "JavaScript",
      code: `// Express REST API — CRUD for /api/users
const express = require('express');
const app = express();
app.use(express.json());

const users = [{ id: 1, name: 'Alice' }];

app.get('/api/users', (req, res) => res.json(users));

app.post('/api/users', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === +req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  users.splice(idx, 1);
  res.status(204).send();
});

app.listen(3000);`,
    },
    sections: [
      {
        id: "rest-apis-principles",
        heading: "Core REST Principles",
        content:
          "REST is built on six constraints: **statelessness**, **client-server separation**, **uniform interface**, **cacheability**, **layered system**, and **code-on-demand** (optional). Statelessness is the most important — each HTTP request must contain everything needed to process it.\n\nThe uniform interface means: resources are identified by URIs, resources are manipulated through representations, and messages are self-descriptive. In practice, teams implement these three and often skip HATEOAS.",
        codeExamples: [
          {
            language: "text",
            label: "RESTful URL conventions",
            code: `GET    /api/v1/users          → list all users
GET    /api/v1/users/42       → get user 42
POST   /api/v1/users          → create a user
PUT    /api/v1/users/42       → replace user 42
PATCH  /api/v1/users/42       → update fields of user 42
DELETE /api/v1/users/42       → delete user 42
GET    /api/v1/users/42/posts → posts belonging to user 42`,
          },
        ],
      },
      {
        id: "rest-apis-status-codes",
        heading: "HTTP Status Codes",
        content:
          "Status codes tell the client what happened. **2xx** means success: 200 OK, 201 Created, 204 No Content. **4xx** is client error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity. **5xx** is server error: 500 Internal Server Error, 503 Service Unavailable.\n\nAlways return the correct code — never send 200 with `{ success: false }` in the body. Clients rely on status codes to decide how to handle the response.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "Correct status code usage",
            code: `app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: 'name and email are required' });

  const exists = await User.findByEmail(email);
  if (exists)
    return res.status(409).json({ error: 'Email already in use' });

  const user = await User.create({ name, email });
  res.status(201).json({ data: user }); // 201, not 200
});`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Using verbs in URLs (/getUser, /createPost) — use nouns and HTTP verbs instead",
      "Returning 200 OK for errors — always use the correct 4xx/5xx status code",
      "Ignoring versioning until it's too late — start with /api/v1/ from day one",
    ],
    bestPractices: [
      "Use plural nouns for resource collections: /users, /orders, /products",
      "Wrap all responses in a consistent envelope: { data, meta, error }",
      "Document every endpoint with request/response examples before building the client",
    ],
  },

  {
    id: "http-methods",
    domain: "Backend",
    title: "HTTP Methods",
    breadcrumb: ["Backend", "HTTP Methods"],
    difficulty: "Beginner",
    readTime: "5 min",
    summary:
      "HTTP defines standard verbs — GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS — each with a specific semantic meaning for interacting with resources.",
    prerequisites: ["REST APIs"],
    relatedTopics: ["rest-apis", "express-routing"],
    content:
      "HTTP methods (also called verbs) define the intended action for a request. GET retrieves without side effects, POST creates, PUT replaces, PATCH updates fields, DELETE removes. Idempotent methods produce the same result no matter how many times they are called — GET, PUT, and DELETE are idempotent; POST is not.\n\nUsing the correct method matters for caching (GET responses can be cached), browser behaviour (forms only natively support GET and POST), and API predictability.",
    codeExample: {
      language: "JavaScript",
      code: `// All five core methods on the same resource
const router = express.Router();

router.get('/:id',    (req, res) => res.json({ action: 'read', id: req.params.id }));
router.post('/',      (req, res) => res.status(201).json({ action: 'create', body: req.body }));
router.put('/:id',    (req, res) => res.json({ action: 'replace', id: req.params.id }));
router.patch('/:id',  (req, res) => res.json({ action: 'partial update', id: req.params.id }));
router.delete('/:id', (req, res) => res.status(204).send());`,
    },
    sections: [
      {
        id: "http-methods-safe-idempotent",
        heading: "Safe vs Idempotent Methods",
        content:
          "A **safe** method has no side effects — calling it doesn't change server state. Only GET and HEAD are safe. An **idempotent** method can be called multiple times and the result is the same as calling it once. GET, HEAD, PUT, and DELETE are idempotent.\n\nThis distinction matters for retry logic. A client can safely retry GET and PUT after a network error. Retrying POST may create duplicate resources.",
        codeExamples: [
          {
            language: "text",
            label: "Safety & idempotency table",
            code: `Method   Safe?  Idempotent?  Common Use
GET      Yes    Yes          Read a resource or list
POST     No     No           Create a resource
PUT      No     Yes          Replace a full resource
PATCH    No     No*          Update specific fields
DELETE   No     Yes          Remove a resource
HEAD     Yes    Yes          Check resource existence`,
          },
        ],
      },
      {
        id: "http-methods-content-type",
        heading: "Request Bodies & Content-Type",
        content:
          "GET and DELETE requests should not carry a body. POST, PUT, and PATCH carry a body describing the resource. The `Content-Type` header tells the server how to parse it: `application/json` for REST APIs, `multipart/form-data` for file uploads, `application/x-www-form-urlencoded` for HTML forms.\n\nAlways set `Accept: application/json` on the client. Validate the Content-Type header on the server before parsing the body.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "fetch with correct headers",
            code: `const res = await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ name: 'Alice', email: 'alice@example.com' }),
});
const { data } = await res.json();`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Using POST for everything — other methods carry semantic meaning that clients and proxies rely on",
      "Treating PUT and PATCH the same — PUT replaces the whole resource; PATCH updates only provided fields",
      "Sending a body with GET — it is technically allowed but ignored by most servers and proxies",
    ],
    bestPractices: [
      "Use GET for reads — it's cacheable and safe to retry automatically",
      "Use 204 No Content (not 200) for successful DELETE responses with no body",
      "Validate Content-Type in middleware before parsing request bodies",
    ],
  },

  {
    id: "nodejs-basics",
    domain: "Backend",
    title: "Node.js Basics",
    breadcrumb: ["Backend", "Node.js Basics"],
    difficulty: "Beginner",
    readTime: "6 min",
    summary:
      "Node.js runs JavaScript on the server using a non-blocking, event-driven I/O model that makes it ideal for high-concurrency web applications.",
    prerequisites: ["JavaScript fundamentals"],
    relatedTopics: ["express-routing", "express-middleware", "error-handling"],
    content:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine. It executes JavaScript outside the browser and provides built-in modules for file system (fs), HTTP, path, streams, and more. Node.js uses an event loop for non-blocking I/O — while waiting for disk or network operations, it can process other tasks, enabling high concurrency on a single thread.\n\nThe CommonJS module system (require/module.exports) is the original format; ES Modules (import/export) are now also supported.",
    codeExample: {
      language: "JavaScript",
      code: `// Simple HTTP server without any framework
const http = require('http');
const fs   = require('fs/promises');

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const html = await fs.readFile('./index.html', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Listening on port 3000'));`,
      output: "Listening on port 3000",
    },
    sections: [
      {
        id: "nodejs-modules",
        heading: "Modules & require()",
        content:
          "Node.js organises code into modules. Each file is its own module — variables are private unless explicitly exported. With CommonJS, export using `module.exports = value` and import using `require('./path')`. With ES Modules, use `export` and `import`.\n\nBuilt-in modules like `path`, `fs`, `os`, and `crypto` require no installation. Third-party packages are installed via npm/pnpm. The `node_modules` folder holds all installed packages; never commit it to git.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "CommonJS module pattern",
            code: `// math.js — exporting
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
module.exports = { add, multiply };

// app.js — importing
const { add, multiply } = require('./math');
console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20`,
            output: "5\n20",
          },
        ],
      },
      {
        id: "nodejs-async",
        heading: "Async I/O & Promises",
        content:
          "Node.js I/O is non-blocking by default. Functions that involve disk or network access accept callbacks or return Promises. Use `async/await` for readable asynchronous code. The `util.promisify` helper converts older callback-based functions to Promise-returning ones.\n\nAlways handle Promise rejections — an unhandled rejection crashes the process in modern Node versions.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "async/await file read",
            code: `const fs = require('fs/promises');

async function loadConfig(filePath) {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Config error:', err.message);
    return {};
  }
}

loadConfig('./config.json').then(cfg => console.log(cfg));`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Running CPU-intensive code on the main thread — it blocks the event loop and stalls all requests",
      "Not handling Promise rejections — unhandled rejections crash the process in Node 15+",
      "Using synchronous fs methods (fs.readFileSync) in request handlers — blocks every other request",
    ],
    bestPractices: [
      "Always use async fs/promises — never synchronous variants in server handlers",
      "Set process.on('unhandledRejection') to log and exit gracefully on unexpected failures",
      "Separate devDependencies from production ones in package.json",
    ],
  },

  {
    id: "express-routing",
    domain: "Backend",
    title: "Express Routing",
    breadcrumb: ["Backend", "Express Routing"],
    difficulty: "Beginner",
    readTime: "5 min",
    summary:
      "Express routing maps HTTP method + URL patterns to handler functions. Routers let you organise handlers by resource and compose them in the main app.",
    prerequisites: ["nodejs-basics", "http-methods"],
    relatedTopics: ["express-middleware", "rest-apis", "error-handling"],
    content:
      "Express is the most popular Node.js web framework. Its routing system maps HTTP method + URL path pairs to handler functions. A handler receives `req` (request), `res` (response), and optionally `next`. Route parameters (`:id`) and query strings (`?page=2`) are accessed via `req.params` and `req.query`.\n\nExpress.Router() creates a mini-app for a specific resource. Mount routers with `app.use('/api/users', usersRouter)` to keep the main app.js clean.",
    codeExample: {
      language: "JavaScript",
      code: `const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => res.send('Hello World'));

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const { fields } = req.query;
  res.json({ id, fields });
});

const usersRouter = express.Router();
usersRouter.get('/',  (req, res) => res.json({ users: [] }));
usersRouter.post('/', (req, res) => res.status(201).json(req.body));
app.use('/api/users', usersRouter);

app.listen(3000);`,
    },
    sections: [
      {
        id: "express-routing-params",
        heading: "Route Parameters & Wildcards",
        content:
          "Named parameters use a colon prefix (`:id`, `:slug`). Optional parameters end in `?`. Wildcard segments use `*`. Express matches routes in the order they are defined — put specific routes before wildcard routes. A catch-all `app.use('*', handler)` at the bottom handles unmatched routes and should return 404.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "router.param for shared lookups",
            code: `router.param('userId', async (req, res, next, id) => {
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  req.user = user; // attach for downstream handlers
  next();
});

router.get('/:userId', (req, res) => res.json(req.user));
router.put('/:userId', (req, res) => { /* req.user already loaded */ });`,
          },
        ],
      },
      {
        id: "express-routing-organisation",
        heading: "Organising Routes",
        content:
          "The recommended pattern is one Router file per resource in a `routes/` directory. Each router file exports the router and is mounted in app.js with a base path.\n\nGroup related routes and share middleware at the router level using `router.use(middleware)`. This scopes the middleware to only that resource, avoiding accidental application to unrelated routes.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "routes/users.js pattern",
            code: `// routes/users.js
const express = require('express');
const router  = express.Router();
const { auth } = require('../middleware/auth');

router.use(auth); // applied to ALL user routes

router.get('/',      listUsers);
router.post('/',     createUser);
router.get('/:id',   getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

// app.js
app.use('/api/v1/users', require('./routes/users'));`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Defining catch-all routes before specific ones — Express matches in order; put specific routes first",
      "Forgetting app.use(express.json()) — without it, req.body is undefined for JSON payloads",
      "Putting all routes in app.js — use Router() files per resource for maintainability",
    ],
    bestPractices: [
      "Use express.Router() for every resource and mount with a versioned base path (/api/v1/resource)",
      "Use router.param() for shared parameter lookups to avoid repetition across handlers",
      "Always define a 404 fallback route at the bottom of app.js",
    ],
  },

  {
    id: "express-middleware",
    domain: "Backend",
    title: "Express Middleware",
    breadcrumb: ["Backend", "Express Middleware"],
    difficulty: "Intermediate",
    readTime: "6 min",
    summary:
      "Middleware are functions that run between a request arriving and a response being sent. They handle logging, authentication, validation, parsing, and error handling.",
    prerequisites: ["express-routing"],
    relatedTopics: ["express-routing", "auth-basics", "error-handling"],
    content:
      "In Express, middleware is any function with the signature `(req, res, next)`. Calling `next()` passes control to the next middleware; not calling it ends the chain. Middleware can modify `req` and `res`, short-circuit with `res.send()`, or call `next(error)` to jump to error-handling middleware.\n\nMiddleware is applied globally with `app.use()` (affects every request) or locally as a route argument. Order matters — middleware runs top to bottom.",
    codeExample: {
      language: "JavaScript",
      code: `const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Custom logging middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// Route-scoped auth
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  req.user = verifyToken(token);
  next();
};

app.get('/protected', auth, (req, res) => {
  res.json({ user: req.user });
});

// Error middleware — 4 params, defined LAST
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal Server Error' });
});`,
    },
    sections: [
      {
        id: "express-middleware-types",
        heading: "Types of Middleware",
        content:
          "**Application middleware** (`app.use()`) runs on every request. **Router middleware** (`router.use()`) is scoped to a Router instance. **Route middleware** is passed directly to a route handler. **Error middleware** has four parameters `(err, req, res, next)` and only runs when `next(error)` is called.\n\nCommon third-party middleware: `morgan` (logging), `helmet` (security headers), `cors` (Cross-Origin Resource Sharing), `express-rate-limit` (rate limiting).",
        codeExamples: [
          {
            language: "JavaScript",
            label: "Common third-party middleware",
            code: `const helmet    = require('helmet');
const cors      = require('cors');
const morgan    = require('morgan');
const rateLimit = require('express-rate-limit');

app.use(helmet());
app.use(cors({ origin: 'https://myapp.com' }));
app.use(morgan('combined'));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);`,
          },
        ],
      },
      {
        id: "express-middleware-order",
        heading: "Composing & Ordering Middleware",
        content:
          "Body parsers must run before handlers that read `req.body`. Auth middleware must run before handlers that check `req.user`. Logging runs first. Error middleware is defined last — Express identifies it by the four-parameter signature.\n\nCompose multiple middleware into an array for a route: `app.get('/admin', [auth, requireAdmin], handler)`.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "Correct middleware ordering",
            code: `app.use(express.json());      // 1. parse body
app.use(morgan('dev'));        // 2. log request
app.use('/api', router);      // 3. route handling
app.use(notFoundHandler);     // 4. 404 fallback
app.use(errorHandler);        // 5. error handler LAST`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Not calling next() — the request hangs indefinitely with no response sent",
      "Defining error middleware with only 3 params — Express won't treat it as error middleware",
      "Placing route handlers before body parser middleware — req.body will be undefined",
    ],
    bestPractices: [
      "Keep each middleware function focused on a single concern (logging, auth, validation)",
      "Use next(error) to forward errors to the error handler instead of try/catch in every handler",
      "Place helmet() and cors() first so security headers are applied to every response",
    ],
  },

  {
    id: "database-connections",
    domain: "Backend",
    title: "Database Connections",
    breadcrumb: ["Backend", "Database Connections"],
    difficulty: "Intermediate",
    readTime: "6 min",
    summary:
      "Connecting Node.js to a database requires a client library, a connection string, and a connection pool. Proper setup prevents exhausted connections and data leaks.",
    prerequisites: ["nodejs-basics", "express-routing"],
    relatedTopics: ["rest-apis", "error-handling", "auth-basics"],
    content:
      "Node.js connects to databases via driver packages. For PostgreSQL use `pg` (node-postgres) or an ORM like Prisma/Sequelize. For MongoDB use `mongoose`. The connection string includes host, port, database name, username, and password — always loaded from environment variables, never hardcoded.\n\nA connection pool maintains a set of reusable database connections. Creating a new TCP connection per request is too slow; a pool of 5–20 connections is reused across hundreds of concurrent requests.",
    codeExample: {
      language: "JavaScript",
      code: `const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

async function getUsers() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT id, name FROM users');
    return rows;
  } finally {
    client.release(); // always release back to pool
  }
}

process.on('SIGTERM', () => pool.end());`,
    },
    sections: [
      {
        id: "db-env-security",
        heading: "Environment Variables & Security",
        content:
          "Database credentials must never appear in source code. Store them in a `.env` file (never committed to git), load with the `dotenv` package, and access via `process.env.DATABASE_URL`. In production, inject secrets through the deployment platform.\n\nA typical connection string: `postgresql://user:password@host:5432/dbname`. Always use parameterised queries — never string-concatenate user input into SQL.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "dotenv setup",
            code: `require('dotenv').config(); // before anything else

const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.query('SELECT 1')
  .then(() => console.log('DB connected'))
  .catch(err => { console.error(err); process.exit(1); });`,
          },
        ],
      },
      {
        id: "db-transactions",
        heading: "Transactions",
        content:
          "A transaction groups multiple SQL statements into an atomic unit — either all succeed or all roll back. Always wrap multi-step write operations in a transaction to prevent partial updates.\n\nWith `pg`, acquire a client, run `BEGIN`, execute statements, then `COMMIT` or `ROLLBACK` in the catch block. Always release the client in `finally`.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "Transaction pattern",
            code: `async function transfer(fromId, toId, amount) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(
      'UPDATE accounts SET balance = balance - \$1 WHERE id = \$2',
      [amount, fromId]
    );
    await client.query(
      'UPDATE accounts SET balance = balance + \$1 WHERE id = \$2',
      [amount, toId]
    );
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Hardcoding database credentials in source code — use environment variables always",
      "Forgetting client.release() after a query — pool connections are exhausted quickly",
      "Not using transactions for multi-step writes — a crash mid-way leaves data inconsistent",
    ],
    bestPractices: [
      "Create the pool once at startup and export it — never create a new pool per request",
      "Always use parameterised queries — never string-concatenate user input into SQL",
      "Test the database connection on app startup and exit early if it fails",
    ],
  },

  {
    id: "auth-basics",
    domain: "Backend",
    title: "Authentication Basics",
    breadcrumb: ["Backend", "Authentication Basics"],
    difficulty: "Intermediate",
    readTime: "7 min",
    summary:
      "Authentication verifies who a user is. The two most common patterns for APIs are session-based auth (server stores state) and token-based auth with JWT (stateless).",
    prerequisites: ["express-middleware", "http-methods"],
    relatedTopics: ["express-middleware", "error-handling", "rest-apis"],
    content:
      'Authentication answers "who are you?" while authorisation answers "what can you do?". For web APIs, common approaches are: session cookies (server stores session ID), JWT tokens (server issues a signed token, client sends it in headers), and OAuth2/OIDC (delegate to Google, GitHub, etc.).\n\nFor new projects, JWT is widely adopted: it is stateless, works across microservices, and encodes roles and permissions directly in the token payload.',
    codeExample: {
      language: "JavaScript",
      code: `const jwt    = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.JWT_SECRET;

async function register(email, password) {
  const hash = await bcrypt.hash(password, 12);
  await db.query(
    'INSERT INTO users(email, password_hash) VALUES(\$1, \$2)',
    [email, hash]
  );
}

async function login(email, password) {
  const { rows } = await db.query(
    'SELECT * FROM users WHERE email = \$1', [email]
  );
  const user = rows[0];
  if (!user || !(await bcrypt.compare(password, user.password_hash)))
    throw new Error('Invalid credentials');
  return jwt.sign({ sub: user.id, email }, SECRET, { expiresIn: '1h' });
}

function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}`,
    },
    sections: [
      {
        id: "auth-password-hashing",
        heading: "Password Hashing",
        content:
          "Never store plain-text passwords. Hash passwords with `bcrypt`, `argon2`, or `scrypt` before saving to the database. These algorithms are slow by design — they resist brute-force attacks. Do not use MD5, SHA1, or SHA256 for passwords — they are too fast.\n\n`bcrypt.hash(password, saltRounds)` — use a cost factor of at least 10–12. `bcrypt.compare(plain, hash)` checks a candidate password without exposing the hash.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "bcrypt hash and compare",
            code: `const bcrypt = require('bcrypt');

const hash = await bcrypt.hash('myP@ssword123', 12);
// Stored hash: '$2b$12$...' — never store the original

const match = await bcrypt.compare('myP@ssword123', hash); // true
const wrong = await bcrypt.compare('wrong', hash);          // false`,
          },
        ],
      },
      {
        id: "auth-jwt-flow",
        heading: "JWT Token Flow",
        content:
          "The JWT flow: (1) Client sends credentials → server verifies → server signs a JWT → sends token back. (2) Client stores token and sends `Authorization: Bearer <token>` on each request. (3) Server verifies signature → grants access if valid.\n\nUse short-lived access tokens (15min–1hr) combined with long-lived refresh tokens. Refresh tokens are stored in httpOnly cookies and exchanged for new access tokens transparently.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "Refresh token endpoint",
            code: `const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

app.post('/api/auth/refresh', (req, res) => {
  const rt = req.cookies.refreshToken;
  if (!rt) return res.status(401).json({ error: 'No refresh token' });
  try {
    const { sub } = jwt.verify(rt, REFRESH_SECRET);
    const newAccess = jwt.sign({ sub }, SECRET, { expiresIn: '15m' });
    res.json({ accessToken: newAccess });
  } catch {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Storing plain-text or MD5-hashed passwords — use bcrypt/argon2 always",
      "Setting no expiry on JWTs — a stolen token is valid forever; always set expiresIn",
      "Storing JWTs in localStorage — accessible to XSS; use httpOnly cookies for tokens",
    ],
    bestPractices: [
      "Use bcrypt with cost factor 12 for password hashing",
      "Issue short-lived access tokens (15min) paired with secure httpOnly refresh tokens",
      "Rate-limit login endpoints to prevent brute-force credential stuffing attacks",
    ],
  },

  {
    id: "error-handling",
    domain: "Backend",
    title: "Error Handling",
    breadcrumb: ["Backend", "Error Handling"],
    difficulty: "Intermediate",
    readTime: "5 min",
    summary:
      "Proper error handling means distinguishing operational errors (expected) from programmer errors (bugs), sending useful HTTP responses, and never crashing the server silently.",
    prerequisites: ["express-middleware", "express-routing"],
    relatedTopics: ["express-middleware", "rest-apis", "auth-basics"],
    content:
      "Error handling in Express uses a special four-parameter middleware `(err, req, res, next)`. Call `next(error)` from any route or middleware to reach it. Define it last in app.js after all routes.\n\nDistinguish between operational errors (bad input, resource not found, DB down) and programmer errors (undefined is not a function). Operational errors return structured JSON responses. Programmer errors should crash the process and let a process manager restart it.",
    codeExample: {
      language: "JavaScript",
      code: `class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new AppError('User not found', 404);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// Central error handler — MUST be last
app.use((err, req, res, next) => {
  const status  = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal Server Error';
  console.error(err);
  res.status(status).json({ error: message });
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
  process.exit(1);
});`,
    },
    sections: [
      {
        id: "error-handling-async",
        heading: "Async Error Handling",
        content:
          "With async route handlers, uncaught errors do not automatically reach Express's error middleware — you must call `next(err)` in a try/catch, or use an `asyncHandler` wrapper.\n\nA common pattern wraps handlers in a function that catches rejected promises and forwards them to `next`. This avoids writing try/catch in every handler.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "asyncHandler wrapper",
            code: `const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.get('/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new AppError('Not found', 404);
  res.json(user);
  // no try/catch needed
}));`,
          },
        ],
      },
      {
        id: "error-handling-validation",
        heading: "Input Validation Errors",
        content:
          "Validation errors are operational — the user sent bad data. Return a 400 or 422 with a clear description of what is wrong. Libraries like `zod` or `express-validator` validate at the middleware layer before the handler runs.\n\nReturn a structured error body listing every invalid field. Never expose internal details (stack traces, DB query text) in error responses.",
        codeExamples: [
          {
            language: "JavaScript",
            label: "Validation middleware with zod",
            code: `const { z } = require('zod');

const schema = z.object({
  name:  z.string().min(2).max(100),
  email: z.string().email(),
});

function validate(s) {
  return (req, res, next) => {
    const r = s.safeParse(req.body);
    if (!r.success)
      return res.status(422).json({ errors: r.error.flatten().fieldErrors });
    req.body = r.data;
    next();
  };
}

router.post('/', validate(schema), createUser);`,
          },
        ],
      },
    ],
    commonMistakes: [
      "Swallowing errors silently with empty catch blocks — always log or rethrow",
      "Exposing stack traces in API responses — log internally, return generic messages to clients",
      "Not calling next(err) in async handlers — the error is lost and the request hangs",
    ],
    bestPractices: [
      "Use a custom AppError class with statusCode to distinguish operational from server errors",
      "Wrap all async handlers with asyncHandler() to avoid boilerplate try/catch",
      "Set up process.on('unhandledRejection') and crash + restart — silent failures are worse",
    ],
  },
];

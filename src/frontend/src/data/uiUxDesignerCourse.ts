import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const uiux_module0 = {
  id: "uiux-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "uiux-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to UI/UX Design! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO UI/UX DESIGN!

Hey! I'm so excited to be your companion on this UI/UX Design journey! 🎨 Design is where empathy meets creativity meets technology. You'll learn to craft experiences that make people's lives easier and more enjoyable — and companies pay extremely well for that skill!

COURSE OVERVIEW
UI/UX Design is the discipline of creating digital products that are both beautiful and functional. UI (User Interface) focuses on visual design — colors, typography, spacing, components. UX (User Experience) focuses on the user's journey — research, wireframes, usability, information architecture. Together they ensure products are both usable and delightful. This course prepares you to use industry-standard tools like Figma and build a portfolio that gets you hired.

HOW THIS COURSE WORKS
This course has 3 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), and a Quiz (15 MCQs to test your knowledge). UI/UX is a design-focused discipline, so parts focus on concepts, tools, and visual thinking rather than programming. After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~30 hours
This is a focused UI/UX course. Dedicate 1–2 hours per day and you'll have a portfolio-ready design skill set in about 3–4 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "uiux-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this UI/UX Designer course:

1. Design Principles — Visual hierarchy, C.A.R.P., color theory, typography, grid systems
2. User Research — User interviews, surveys, personas, empathy mapping, journey maps
3. Wireframing — Low-fidelity sketches, information architecture, user flows, wireframe tools
4. Prototyping — High-fidelity mockups, interactive prototypes, micro-interactions
5. Figma — Components, auto-layout, variants, design tokens, prototype mode
6. Design Systems — Component libraries, style guides, design tokens, documentation
7. Portfolio — Case studies, presenting your process, handoff to developers`,
          codeExample: "",
        },
        {
          id: "uiux-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning

UI/UX Design is primarily a visual and conceptual discipline. This course does not include traditional coding questions — instead, it focuses on design principles, tools, and process thinking that are tested through quizzes.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "uiux-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what UI/UX design is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part testing your design knowledge
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your UI/UX Design journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Design Basics ──────────────────────────────────────────────────

const uiux_module1 = {
  id: "uiux-design-basics",
  title: "Module 1: Design Basics",
  outcome:
    "Understand foundational design principles, color theory, typography, and grid systems.",
  isLocked: false,
  parts: [
    {
      id: "uiux-m1-p1",
      title: "Part 1: Design Principles & Color Theory",
      description:
        "Core visual design principles and how color shapes user perception.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=_Hp_dI0__FA",
      notes:
        "Good design rests on timeless principles: contrast, alignment, repetition, and proximity (C.A.R.P.). Color theory governs how hues interact, evoke emotion, and guide attention. Understanding the color wheel, harmony schemes, and accessibility contrast ratios is essential before touching any tool.",
      docs: [
        {
          label: "Nielsen Norman Group — Design Principles",
          url: "https://www.nngroup.com/articles/principles-visual-design/",
        },
        {
          label: "WCAG Contrast Checker",
          url: "https://webaim.org/resources/contrastchecker/",
        },
      ],
      partQuiz: [
        {
          question:
            "Which design principle groups related elements visually close together?",
          options: ["Contrast", "Alignment", "Proximity", "Repetition"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What is the minimum WCAG AA contrast ratio for normal body text?",
          options: ["2:1", "3:1", "4.5:1", "7:1"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "Which color scheme uses three evenly spaced colors on the color wheel?",
          options: ["Analogous", "Complementary", "Triadic", "Monochromatic"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "uiux-m1-p1s1",
          title: "Core Design Principles (C.A.R.P.)",
          content:
            "The four foundational principles of visual design are Contrast, Alignment, Repetition, and Proximity. Contrast draws attention by making different elements look different — use it for hierarchy. Alignment creates order; every element should be visually connected to something else on the page. Repetition builds consistency — reuse colors, fonts, and shapes to unify a design. Proximity groups related items together, reducing cognitive load. Together, these four principles form the backbone of every successful UI.",
          codeExample:
            "/* CSS demonstrating C.A.R.P. principles */\n\n/* CONTRAST — heading vs body text */\nh1 { font-size: 2.5rem; font-weight: 700; color: #1a1a2e; }\np  { font-size: 1rem;   font-weight: 400; color: #555; }\n\n/* ALIGNMENT — all content left-aligned on a grid */\n.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }\n\n/* REPETITION — consistent card style */\n.card {\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  background: #fff;\n}\n\n/* PROXIMITY — related label + input grouped */\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;   /* tight gap within the field group */\n  margin-bottom: 20px; /* larger gap between fields */\n}",
          video: {
            youtubeId: "_Hp_dI0__FA",
            title: "Design Principles Explained",
          },
          flowchart: "if-else",
        },
        {
          id: "uiux-m1-p1s2",
          title: "Color Theory & Accessible Palettes",
          content:
            "Color theory begins with the color wheel: primary (red, yellow, blue), secondary, and tertiary colors. Harmony schemes include complementary (opposite hues — high contrast), analogous (adjacent hues — harmonious), triadic (three equidistant hues — vibrant), and monochromatic (one hue with varied lightness — subtle). In digital design, use HSL or OKLCH for perceptual uniformity. Always check contrast ratios: WCAG AA requires 4.5:1 for normal text and 3:1 for large text. Tools: Coolors, Adobe Color, and the Chrome DevTools Accessibility panel.",
          codeExample:
            "/* Accessible color palette using CSS custom properties */\n:root {\n  /* Brand colors */\n  --color-primary:    oklch(55% 0.20 250);  /* vivid blue */\n  --color-secondary:  oklch(55% 0.18 180);  /* teal */\n  --color-accent:     oklch(65% 0.22 60);   /* amber */\n\n  /* Semantic tokens */\n  --color-background: oklch(98% 0.005 250);\n  --color-surface:    oklch(100% 0 0);\n  --color-text:       oklch(20% 0.02 250);  /* contrast 14:1 on bg */\n  --color-text-muted: oklch(50% 0.02 250);  /* contrast 4.7:1 on bg */\n\n  /* State colors */\n  --color-success: oklch(55% 0.18 145);\n  --color-error:   oklch(55% 0.22 30);\n  --color-warning: oklch(70% 0.18 75);\n}\n\n/* Usage */\n.button-primary {\n  background: var(--color-primary);\n  color: #fff; /* always verify contrast of text on primary */\n}",
          video: {
            youtubeId: "_Hp_dI0__FA",
            title: "Color Theory for Designers",
          },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "uiux-m1-p2",
      title: "Part 2: Typography & Grids",
      description:
        "Typographic hierarchy, font pairing, and responsive grid systems.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=yom0nogFN3k",
      notes:
        "Typography shapes readability and personality. A strong type scale, clear hierarchy, and purposeful font pairings elevate every design. Grid systems — from CSS Grid to 12-column layouts — provide the invisible structure that makes interfaces feel balanced and orderly.",
      docs: [
        { label: "Google Fonts", url: "https://fonts.google.com/" },
        {
          label: "MDN CSS Grid Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
        },
      ],
      partQuiz: [
        {
          question:
            "What is the recommended minimum body text size for web readability?",
          options: ["10px", "12px", "16px", "20px"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "Which CSS property controls the spacing between individual characters?",
          options: [
            "line-height",
            "word-spacing",
            "letter-spacing",
            "font-kerning",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "How many columns does the standard Bootstrap/Material Design grid use?",
          options: ["6", "8", "10", "12"],
          correct: 3,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "uiux-m1-p2s1",
          title: "Typographic Hierarchy & Font Pairing",
          content:
            "Typographic hierarchy uses size, weight, color, and spacing to guide the reader's eye — display heading → section heading → subheading → body → caption. A good type scale follows a ratio (1.25 Major Third or 1.333 Perfect Fourth). Font pairing works best when contrasting a serif with a sans-serif or a display font with a neutral body font. Limit to two typefaces per project. Key metrics: line-height 1.4–1.7× for body, line length 50–75 characters (ch units), and letter-spacing 0.01–0.05em for headings.",
          codeExample:
            "/* Typographic scale — Perfect Fourth ratio (×1.333) */\n:root {\n  --text-xs:   0.75rem;   /* 12px — captions */\n  --text-sm:   0.875rem;  /* 14px — labels */\n  --text-base: 1rem;      /* 16px — body */\n  --text-lg:   1.125rem;  /* 18px — lead */\n  --text-xl:   1.333rem;  /* ~21px — h3 */\n  --text-2xl:  1.778rem;  /* ~28px — h2 */\n  --text-3xl:  2.369rem;  /* ~38px — h1 */\n  --text-4xl:  3.157rem;  /* ~51px — display */\n\n  --font-display: 'Playfair Display', serif;\n  --font-body:    'Inter', sans-serif;\n}\n\nbody    { font-family: var(--font-body); font-size: var(--text-base); line-height: 1.6; }\nh1      { font-family: var(--font-display); font-size: var(--text-3xl); line-height: 1.15; letter-spacing: -0.02em; }\nh2      { font-size: var(--text-2xl); line-height: 1.25; }\n.prose  { max-width: 65ch; } /* optimal line length */",
          video: {
            youtubeId: "yom0nogFN3k",
            title: "Typography for UI Design",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "uiux-m1-p2s2",
          title: "Grid Systems & Spacing",
          content:
            "Grid systems impose visual order on layouts. The 12-column grid is the industry standard because 12 is divisible by 2, 3, 4, and 6 — enabling flexible column combinations. CSS Grid and Flexbox are the native tools. Spacing systems use a base unit (commonly 4px or 8px) scaled as multiples: 4, 8, 12, 16, 24, 32, 48, 64. Gutters (gaps between columns) are typically 16–32px on desktop. Use a consistent spacing scale and never use arbitrary values.",
          codeExample:
            "/* 12-column CSS Grid layout */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n/* Responsive column spans */\n.col-12 { grid-column: span 12; } /* full width */\n.col-8  { grid-column: span 8;  } /* content */\n.col-4  { grid-column: span 4;  } /* sidebar */\n.col-6  { grid-column: span 6;  } /* half */\n.col-4-responsive {\n  grid-column: span 12; /* mobile: full */\n}\n@media (min-width: 768px) {\n  .col-4-responsive { grid-column: span 6; }  /* tablet: half */\n}\n@media (min-width: 1024px) {\n  .col-4-responsive { grid-column: span 4; }  /* desktop: third */\n}\n\n/* 8px spacing system */\n.spacing {\n  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;\n  --space-4: 16px; --space-6: 24px; --space-8: 32px;\n}",
          video: {
            youtubeId: "yom0nogFN3k",
            title: "Grid Systems for Web Design",
          },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "Which C.A.R.P. principle creates visual hierarchy by making elements look distinctly different?",
      options: ["Alignment", "Repetition", "Proximity", "Contrast"],
      correct: 3,
      xp: 10,
    },
    {
      question:
        "What line-height range is recommended for comfortable body text readability?",
      options: ["1.0–1.2", "1.4–1.7", "1.9–2.2", "2.5–3.0"],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What base unit is most commonly used in an 8px spacing system?",
      options: ["4px", "8px", "10px", "16px"],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "uiux-m1-test1",
      title: "Build a Design Token System",
      description:
        "Create a CSS file that defines a complete design token system using CSS custom properties. It must include: a color palette with at least 5 semantic tokens (background, surface, text, primary, error), a typographic scale with 5 size steps, and a spacing scale with 6 steps based on a 4px or 8px base unit.",
      starterCode:
        ":root {\n  /* Color tokens */\n  /* TODO: define --color-background, --color-surface, --color-text, --color-primary, --color-error */\n\n  /* Typography scale (use rem) */\n  /* TODO: define --text-sm, --text-base, --text-lg, --text-xl, --text-2xl */\n\n  /* Spacing scale */\n  /* TODO: define --space-1 through --space-6 using 4px or 8px base */\n}\n",
      hints: [
        "Use oklch() or hsl() for color tokens to keep them perceptually uniform",
        "Start your type scale at 0.875rem (14px) and use a 1.25 or 1.333 ratio per step",
        "For spacing: --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-6:24px; --space-8:32px",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: UX Research & Wireframing ──────────────────────────────────────

const uiux_module2 = {
  id: "uiux-ux-research-wireframing",
  title: "Module 2: UX Research & Wireframing",
  outcome:
    "Conduct user research, create wireframes, and build interactive prototypes in Figma.",
  isLocked: true,
  parts: [
    {
      id: "uiux-m2-p1",
      title: "Part 1: User Research Methods",
      description:
        "Interviews, surveys, usability testing, and synthesizing user insights.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=2pGHLAoNGNM",
      notes:
        "UX research grounds design decisions in real user needs rather than assumptions. Qualitative methods (interviews, contextual inquiry) reveal the 'why'; quantitative methods (surveys, analytics) reveal the 'what' and 'how many'. Synthesis techniques like affinity mapping and personas turn raw data into actionable insights.",
      docs: [
        {
          label: "Nielsen Norman Group — UX Research Methods",
          url: "https://www.nngroup.com/articles/which-ux-research-methods/",
        },
        {
          label: "Google Design Sprint Kit",
          url: "https://designsprintkit.withgoogle.com/",
        },
      ],
      partQuiz: [
        {
          question:
            "Which research method provides the deepest qualitative insight into user motivations?",
          options: [
            "Online survey",
            "A/B test",
            "In-depth user interview",
            "Heatmap analysis",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is an affinity diagram used for?",
          options: [
            "Generating color palettes",
            "Grouping and clustering research observations by theme",
            "Measuring page load speed",
            "Designing wireframes",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a user persona represent?",
          options: [
            "A real registered user of the product",
            "A fictional character representing a segment of target users",
            "The product owner's preferences",
            "An internal team stakeholder",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "uiux-m2-p1s1",
          title: "Qualitative & Quantitative Research",
          content:
            "UX research methods split into two categories. Qualitative research explores attitudes, motivations, and behaviors — techniques include moderated user interviews (5–8 participants is often enough to surface key patterns), contextual inquiry (observing users in their natural environment), and diary studies. Quantitative research measures and counts — surveys, analytics, A/B tests, and click-tracking yield statistically significant data. The best projects combine both: use qualitative to discover problems and quantitative to validate the scope.",
          codeExample:
            "// Sample interview question guide (JS object for a UX study)\nconst interviewGuide = {\n  intro: [\n    'Tell me a bit about yourself and how you use [product].'\n  ],\n  coreTasks: [\n    'Walk me through the last time you tried to [key task].',\n    'What was going through your mind at that point?',\n    'Was there a moment where you felt stuck or confused?',\n  ],\n  painPoints: [\n    'What is the most frustrating part of your current workflow?',\n    'If you had a magic wand, what one thing would you change?',\n  ],\n  closing: [\n    'Is there anything else you would like me to know?'\n  ],\n};\n\n// Affinity map cluster (simplified data structure)\nconst affinityMap = [\n  {\n    theme: 'Onboarding Confusion',\n    observations: [\n      'P1: Did not understand what to do on first screen',\n      'P3: Skipped tutorial entirely',\n      'P5: Asked \"where do I start?\"',\n    ],\n  },\n];",
          video: { youtubeId: "2pGHLAoNGNM", title: "UX Research Methods" },
          flowchart: "if-else",
        },
        {
          id: "uiux-m2-p1s2",
          title: "Personas & User Journey Maps",
          content:
            "Personas are archetypal user profiles derived from research — they include name, photo, demographics, goals, frustrations, and behaviors. A good persona captures the 'why' behind user actions. User journey maps visualize the end-to-end experience of a persona completing a goal: stages → actions → thoughts → emotions → pain points → opportunities. Both artifacts align teams around a shared understanding of the user before any pixel is designed.",
          codeExample:
            "// User persona data model\nconst persona = {\n  name: 'Priya Sharma',\n  age: 24,\n  occupation: 'Computer Science Student',\n  goals: [\n    'Land a frontend internship within 6 months',\n    'Build a portfolio of real projects',\n  ],\n  frustrations: [\n    'Overwhelming number of resources with no clear path',\n    'Tutorials that teach syntax but not how to think',\n  ],\n  behaviors: {\n    learningStyle: 'visual + hands-on',\n    devices: ['laptop', 'mobile'],\n    studyHours: '2-3 hrs/day on weekdays',\n  },\n  quote: '\"I just want someone to show me the path — not the entire map at once.\"',\n};\n\n// Journey map stage\nconst journeyStage = {\n  stage: 'Onboarding',\n  actions: ['Visits landing page', 'Reads features', 'Clicks Sign Up'],\n  thoughts: ['Does this match my level?', 'Will I waste money?'],\n  emotions: 'curious → anxious',\n  painPoints: ['No free trial visible', 'Sign-up form asks too much'],\n  opportunities: ['Add free starter tier CTA', 'Simplify form to email+password only'],\n};",
          video: { youtubeId: "2pGHLAoNGNM", title: "Personas & Journey Maps" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "uiux-m2-p2",
      title: "Part 2: Wireframes & Prototypes in Figma",
      description:
        "Low-fidelity wireframes, high-fidelity mockups, and interactive prototypes using Figma.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
      notes:
        "Wireframes are the skeleton of a UI — they focus on layout, hierarchy, and functionality without visual noise. Figma is the industry-standard tool for designing, prototyping, and collaborating. Auto Layout, components, and variants let you build reusable design systems that scale.",
      docs: [
        {
          label: "Figma Learn — Basics",
          url: "https://help.figma.com/hc/en-us/categories/360002051613",
        },
        {
          label: "Figma Community Files",
          url: "https://www.figma.com/community",
        },
      ],
      partQuiz: [
        {
          question: "What is the primary purpose of a low-fidelity wireframe?",
          options: [
            "Showcase final visual design",
            "Define information architecture and layout without visual distraction",
            "Test color palettes",
            "Demonstrate animation to developers",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "In Figma, which feature allows elements to resize and reflow automatically when content changes?",
          options: ["Constraints", "Auto Layout", "Grids", "Variants"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Figma component variant used for?",
          options: [
            "Storing font assets",
            "Creating different states or sizes of the same component",
            "Exporting assets for Android",
            "Managing page transitions",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "uiux-m2-p2s1",
          title: "Wireframing: From Sketch to Structure",
          content:
            "Wireframing progresses through three fidelity levels. Lo-fi wireframes (pen-and-paper or grayscale boxes) focus purely on layout, navigation, and content hierarchy — completed in minutes to explore multiple ideas quickly. Mid-fi wireframes add real content, spacing, and interaction cues but no color. Hi-fi mockups match the final visual design. Start lo-fi and iterate fast before investing in polish. In Figma, use frames at device resolution, a 12-column grid, and placeholder content blocks (rectangles, lorem text) to stay focused on structure.",
          codeExample:
            "// Wireframe component inventory (React-style, for planning)\n// Define what UI components a screen needs before opening Figma\n\nconst dashboardWireframe = {\n  layout: 'sidebar + main content',\n  header: {\n    left: 'Logo',\n    center: 'Search bar',\n    right: ['Notifications icon', 'Avatar'],\n  },\n  sidebar: [\n    { icon: 'home',     label: 'Dashboard' },\n    { icon: 'roadmap',  label: 'Roadmap'   },\n    { icon: 'problems', label: 'Problems'  },\n  ],\n  mainContent: [\n    { type: 'stat-cards',    count: 4, layout: 'row' },\n    { type: 'progress-bar',  label: 'Course progress' },\n    { type: 'recent-list',   label: 'Recent activity', rows: 5 },\n    { type: 'chart',         label: 'XP over time' },\n  ],\n};\n\n// Annotation notes for the developer handoff\nconst annotations = [\n  { component: 'stat-cards', note: 'Animate count-up on page load' },\n  { component: 'progress-bar', note: 'Tooltip on hover showing % and hours left' },\n];",
          video: { youtubeId: "FTFaQWZBqQ8", title: "Wireframing in Figma" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "uiux-m2-p2s2",
          title: "Interactive Prototyping in Figma",
          content:
            "Figma's Prototype panel turns static frames into clickable, interactive flows. Connect frames with interaction triggers (On Click, On Hover, While Pressing) and transition animations (Smart Animate, Slide, Dissolve). Use Overlays for modals and drawers. Prototype for: stakeholder demos, user testing sessions, and developer reference. Smart Animate smoothly transitions matching layers between frames — name layers identically across frames to enable it. Always test your prototype on a real device before sharing.",
          codeExample:
            "// Figma prototype flow — conceptual mapping\n// (This shows how to think about flows before building them)\n\nconst prototypeFlow = [\n  {\n    from: 'Frame: Login',\n    trigger: 'On Click → Login Button',\n    animation: 'Smart Animate, 300ms, Ease Out',\n    to: 'Frame: Dashboard',\n  },\n  {\n    from: 'Frame: Dashboard',\n    trigger: 'On Click → + New Project',\n    animation: 'Slide Up, 250ms, Ease',\n    to: 'Overlay: New Project Modal',\n  },\n  {\n    from: 'Overlay: New Project Modal',\n    trigger: 'On Click → Cancel',\n    animation: 'Slide Down, 200ms',\n    to: 'Frame: Dashboard',  // closes overlay\n  },\n  {\n    from: 'Overlay: New Project Modal',\n    trigger: 'On Click → Create',\n    animation: 'Smart Animate, 300ms',\n    to: 'Frame: Project Detail',\n  },\n];\n\n// Tip: use Figma variables for dynamic prototype states\n// Variables can store booleans/numbers to show/hide layers conditionally",
          video: { youtubeId: "FTFaQWZBqQ8", title: "Prototyping in Figma" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "How many participants are typically sufficient for qualitative usability testing to reveal major issues?",
      options: ["1–2", "5–8", "20–30", "100+"],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What does Figma's Smart Animate feature require to work correctly?",
      options: [
        "Identical frame sizes",
        "Matching layer names between the two connected frames",
        "Auto Layout on every element",
        "Components from the same library",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "In UX research, what is a user journey map primarily used to visualize?",
      options: [
        "The technical architecture of a product",
        "A user's end-to-end experience including emotions and pain points",
        "The color and typography choices for each screen",
        "The team's sprint timeline",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "uiux-m2-test1",
      title: "Define a User Persona",
      description:
        "Write a JavaScript object representing a UX persona for a student who wants to learn programming. The object must include: name, age, occupation, at least 2 goals, at least 2 frustrations, a behaviors object (learningStyle, devices, studyHours), and a representative quote.",
      starterCode:
        "const persona = {\n  name: '',\n  age: 0,\n  occupation: '',\n  goals: [],\n  frustrations: [],\n  behaviors: {\n    learningStyle: '',\n    devices: [],\n    studyHours: '',\n  },\n  quote: '',\n};\n\nconsole.log(persona);\n",
      hints: [
        "Think about a real student you know — what are their actual learning goals?",
        "Frustrations should be specific: not 'it's hard' but 'I can't find a clear path to a job'",
        "The quote should sound like something the person would actually say, in first person",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: UI Implementation ──────────────────────────────────────────────

const uiux_module3 = {
  id: "uiux-ui-implementation",
  title: "Module 3: UI Implementation",
  outcome:
    "Build scalable design systems, reusable components, and conduct usability testing before developer handoff.",
  isLocked: true,
  parts: [
    {
      id: "uiux-m3-p1",
      title: "Part 1: Design Systems & Components",
      description:
        "Atomic design methodology, component libraries, and design tokens for scalable UIs.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=wc5krC28ynQ",
      notes:
        "A design system is a collection of reusable components and guidelines that allow teams to build consistent interfaces faster. Atomic design breaks UI into atoms → molecules → organisms → templates → pages. Design tokens are the single source of truth for values like colors, spacing, and typography.",
      docs: [
        { label: "Material Design System", url: "https://m3.material.io/" },
        {
          label: "Storybook — Component Documentation",
          url: "https://storybook.js.org/",
        },
      ],
      partQuiz: [
        {
          question:
            "In Atomic Design, which level combines atoms to form a functional UI unit?",
          options: ["Organism", "Template", "Molecule", "Page"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the main benefit of design tokens?",
          options: [
            "They speed up animation performance",
            "They provide a single source of truth for design values like color and spacing",
            "They replace the need for a component library",
            "They are only used in mobile apps",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which tool is most commonly used to document and showcase component design systems?",
          options: ["Figma alone", "Storybook", "CodePen", "Adobe XD"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "uiux-m3-p1s1",
          title: "Atomic Design & Component Architecture",
          content:
            "Brad Frost's Atomic Design breaks interfaces into five levels: Atoms (smallest units — buttons, labels, inputs), Molecules (atoms combined — search bar = input + button), Organisms (complex sections — navbar, card grid), Templates (page layouts without real content), and Pages (templates with real content). This methodology keeps components focused, reusable, and easy to test. In practice, most design systems use 3 layers: primitives (atoms), components (molecules + organisms), and patterns (templates).",
          codeExample:
            "// Atomic Design in React\n\n// ATOM — Button primitive\nconst Button = ({ variant = 'primary', size = 'md', children, onClick }) => (\n  <button\n    className={`btn btn-${variant} btn-${size}`}\n    onClick={onClick}\n  >\n    {children}\n  </button>\n);\n\n// ATOM — Input primitive\nconst Input = ({ placeholder, value, onChange }) => (\n  <input\n    className='input'\n    placeholder={placeholder}\n    value={value}\n    onChange={onChange}\n  />\n);\n\n// MOLECULE — SearchBar (Input + Button)\nconst SearchBar = ({ onSearch }) => {\n  const [query, setQuery] = React.useState('');\n  return (\n    <div className='search-bar'>\n      <Input placeholder='Search...' value={query} onChange={e => setQuery(e.target.value)} />\n      <Button onClick={() => onSearch(query)}>Search</Button>\n    </div>\n  );\n};\n\n// ORGANISM — Header (Logo + Nav + SearchBar)\nconst Header = () => (\n  <header className='header'>\n    <Logo />\n    <Nav />\n    <SearchBar onSearch={console.log} />\n  </header>\n);",
          video: {
            youtubeId: "wc5krC28ynQ",
            title: "Atomic Design & Design Systems",
          },
          flowchart: "if-else",
        },
        {
          id: "uiux-m3-p1s2",
          title: "Design Tokens & Component Variants",
          content:
            "Design tokens are named values that store design decisions: colors, spacing, typography, shadows, and border radii. They create a contract between design and code — change a token once and it updates everywhere. In code, tokens live as CSS custom properties or a JSON/JS object. Component variants allow one component to express multiple states (default, hover, active, disabled, error) or styles (primary, secondary, ghost, danger). In Figma, use Variants; in code, use a prop-based approach like CVA (class-variance-authority) or styled-components with a `variant` prop.",
          codeExample:
            "// Design tokens as JS object (design → code contract)\nexport const tokens = {\n  color: {\n    primary:   'oklch(55% 0.20 250)',\n    secondary: 'oklch(55% 0.18 180)',\n    danger:    'oklch(55% 0.22 30)',\n    text:      'oklch(20% 0.02 250)',\n    muted:     'oklch(60% 0.02 250)',\n    surface:   'oklch(98% 0.005 250)',\n  },\n  spacing: { 1:4, 2:8, 3:12, 4:16, 6:24, 8:32, 12:48, 16:64 },\n  radius:  { sm:'4px', md:'8px', lg:'12px', full:'9999px' },\n  shadow:  { sm:'0 1px 3px rgba(0,0,0,.1)', md:'0 4px 12px rgba(0,0,0,.12)' },\n};\n\n// Button variants using class-variance-authority (CVA)\nimport { cva } from 'class-variance-authority';\n\nconst buttonVariants = cva(\n  'inline-flex items-center justify-center rounded-md font-medium transition-colors',\n  {\n    variants: {\n      variant: {\n        primary: 'bg-primary text-white hover:bg-primary/90',\n        secondary: 'bg-secondary text-white hover:bg-secondary/90',\n        ghost: 'bg-transparent hover:bg-muted',\n        danger: 'bg-danger text-white hover:bg-danger/90',\n      },\n      size: {\n        sm: 'h-8 px-3 text-sm',\n        md: 'h-10 px-4 text-base',\n        lg: 'h-12 px-6 text-lg',\n      },\n    },\n    defaultVariants: { variant: 'primary', size: 'md' },\n  }\n);",
          video: {
            youtubeId: "wc5krC28ynQ",
            title: "Design Tokens & Variants",
          },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "uiux-m3-p2",
      title: "Part 2: Usability Testing & Handoff",
      description:
        "Conducting usability tests, analyzing results, and preparing developer handoff in Figma.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=nYCJTea1AUQ",
      notes:
        "Usability testing validates designs with real users before developers write a single line of code. It uncovers usability issues that surveys and analytics cannot. Developer handoff translates the final design into precise specifications — measurements, tokens, assets, and interaction notes — so developers can build exactly what was designed.",
      docs: [
        {
          label: "Nielsen Norman — Usability Testing 101",
          url: "https://www.nngroup.com/articles/usability-testing-101/",
        },
        {
          label: "Figma Dev Mode",
          url: "https://help.figma.com/hc/en-us/articles/15023124644247",
        },
      ],
      partQuiz: [
        {
          question:
            "In a think-aloud usability test, what does the participant do?",
          options: [
            "Write down feedback after the session",
            "Verbalize their thoughts while completing tasks",
            "Rate the design on a scale of 1–10",
            "Watch the facilitator demonstrate the product",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the System Usability Scale (SUS)?",
          options: [
            "A Figma plugin for measuring spacing",
            "A 10-question standardized questionnaire that produces a usability score",
            "A tool for automated accessibility testing",
            "A design token naming convention",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Figma Dev Mode primarily provide to developers?",
          options: [
            "A way to write CSS in Figma",
            "Inspect panel with exact measurements, tokens, and exportable assets",
            "A live preview of the deployed website",
            "Git integration for design version control",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "uiux-m3-p2s1",
          title: "Conducting Usability Tests",
          content:
            "Usability testing observes real users attempting real tasks on your product or prototype. The facilitator sets up tasks (not instructions — 'Find a Python course', not 'Click the Roadmap tab'), observes without interfering, and takes notes. Think-aloud protocol (participants verbalize thoughts) provides rich qualitative data. After testing 5 participants you'll have identified most major usability issues. Quantitative metrics to capture: task completion rate, time on task, error rate, and post-test SUS score. Severity ratings (Critical/High/Medium/Low) prioritize fixes.",
          codeExample:
            "// Usability test session tracker (data structure)\nconst testSession = {\n  participant: { id: 'P3', age: 22, techLevel: 'intermediate' },\n  tasks: [\n    {\n      task: 'Find and enroll in a Python course',\n      completed: true,\n      timeSeconds: 47,\n      errors: 1,\n      observations: [\n        'Clicked Roadmap tab correctly',\n        'Did not notice the Enroll button — looked for it for 15 seconds',\n        'Eventually found it after scrolling down',\n      ],\n    },\n    {\n      task: 'Take a quiz for Module 1',\n      completed: false,\n      timeSeconds: 90,\n      errors: 3,\n      observations: [\n        'Confused by the module unlock system',\n        '\"I don't understand why it says locked\"',\n      ],\n    },\n  ],\n  susScore: 67.5, // score under 68 = below average usability\n  findings: [\n    { severity: 'High',   issue: 'Enroll button not visible on load — below fold' },\n    { severity: 'Critical', issue: 'Module lock state not explained to new users' },\n  ],\n};",
          video: {
            youtubeId: "nYCJTea1AUQ",
            title: "How to Conduct Usability Testing",
          },
          flowchart: "loop",
        },
        {
          id: "uiux-m3-p2s2",
          title: "Developer Handoff in Figma",
          content:
            "Developer handoff is the process of communicating the final design to engineers with enough precision that they can build it without guessing. In Figma, Dev Mode lets developers inspect any element for exact dimensions, spacing, colors (mapped to tokens), font properties, and CSS/SwiftUI/Jetpack Compose code snippets. Best practices: use components everywhere (not detached instances), apply styles (not hardcoded values), annotate interactions with notes, export assets at 1x/2x/3x, and create a handoff checklist. Zeplin and Supernova are alternatives to Figma Dev Mode.",
          codeExample:
            "// Handoff checklist as code comments — annotating a component\n\n/**\n * Button Component — Handoff Spec\n *\n * Variants: primary | secondary | ghost | danger\n * Sizes:    sm (32px) | md (40px) | lg (48px)\n *\n * Tokens used:\n *   background: --color-primary       (#3B5BDB)\n *   text:       --color-on-primary    (#FFFFFF)\n *   radius:     --radius-md           (8px)\n *   padding:    --space-3 --space-4   (12px 16px)\n *   font:       --text-sm, weight 500 (14px, medium)\n *\n * States:\n *   Default  → bg: primary\n *   Hover    → bg: primary/90, transform: translateY(-1px)\n *   Active   → bg: primary/80, transform: translateY(0)\n *   Disabled → opacity: 0.4, cursor: not-allowed\n *   Loading  → spinner replaces text, pointer-events: none\n *\n * Interaction:\n *   Click triggers ripple animation (200ms ease-out)\n *   Focus-visible shows 2px outline offset 2px in --color-primary\n *\n * Assets: none (icon via lucide-react)\n */",
          video: {
            youtubeId: "nYCJTea1AUQ",
            title: "Figma Dev Mode & Handoff",
          },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "In Atomic Design, which level represents a full page layout with placeholder content?",
      options: ["Molecule", "Organism", "Template", "Page"],
      correct: 2,
      xp: 10,
    },
    {
      question: "A SUS score of 80+ indicates what level of usability?",
      options: ["Poor", "Below average", "Above average / good", "Excellent"],
      correct: 3,
      xp: 10,
    },
    {
      question:
        "What should a designer do before passing a design to developers?",
      options: [
        "Remove all components and flatten layers",
        "Ensure all elements use components and named tokens, not hardcoded values",
        "Export the entire file as PNG",
        "Convert all text to outlines",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "uiux-m3-test1",
      title: "Write a Usability Test Task Script",
      description:
        "Create a JavaScript object for a usability test session plan for a study app. It must include: at least 3 tasks (as scenario-based prompts, not instructions), metrics to measure for each task (completion, time, errors), and at least 2 post-test questions. Tasks must be worded as realistic goals, not UI directions.",
      starterCode:
        "const testPlan = {\n  productName: 'Code & Crush',\n  participantProfile: '',\n  tasks: [\n    // Each task: { id, scenario, successCriteria, metrics: ['completion','time','errors'] }\n  ],\n  postTestQuestions: [\n    // SUS questions or custom questions\n  ],\n};\n\nconsole.log(JSON.stringify(testPlan, null, 2));\n",
      hints: [
        "Tasks should read like real goals: 'You want to start learning Python. Find a course and begin the first module.' — NOT 'Click the Roadmap tab'",
        "successCriteria defines what 'completed' means: e.g., 'User reaches Module 1 lesson 1 screen'",
        "Include at least one SUS question: 'I thought the system was easy to use' (Strongly Disagree → Strongly Agree)",
      ],
    },
  ] as CTestProblem[],
};

// ─── Assembled Course ─────────────────────────────────────────────────────────

export const UIUX_DESIGNER_COURSE = {
  id: "uiux-designer-course",
  name: "UI/UX Designer",
  description:
    "Master design principles, UX research, wireframing, design systems, and developer handoff to become a professional UI/UX Designer.",
  icon: "🎨",
  color: "from-pink-600 to-purple-600",
  totalModules: 3,
  certificate: {
    title: "UI/UX Designer Certificate",
    description:
      "Awarded for completing all 3 modules of the UI/UX Designer course.",
  },
  modules: [
    uiux_module0,
    uiux_module1,
    uiux_module2,
    uiux_module3,
  ] as unknown as CModule[],
};

export const UIUX_DESIGNER_ROADMAP_ENTRY = {
  id: "uiux-designer",
  name: "UI/UX Designer",
  icon: "🎨",
  color: "from-pink-600 to-purple-600",
  description:
    "Learn design principles, user research, Figma prototyping, design systems, and usability testing for professional UI/UX roles.",
  topics: [
    {
      title: "Design Principles & Color Theory",
      videoId: "_Hp_dI0__FA",
      duration: "40 min",
    },
    {
      title: "Typography & Grid Systems",
      videoId: "yom0nogFN3k",
      duration: "35 min",
    },
    {
      title: "User Research Methods",
      videoId: "2pGHLAoNGNM",
      duration: "45 min",
    },
    {
      title: "Wireframes & Prototypes in Figma",
      videoId: "FTFaQWZBqQ8",
      duration: "50 min",
    },
    {
      title: "Design Systems & Components",
      videoId: "wc5krC28ynQ",
      duration: "45 min",
    },
    {
      title: "Usability Testing & Handoff",
      videoId: "nYCJTea1AUQ",
      duration: "40 min",
    },
  ],
  courseId: "uiux-designer-course",
};

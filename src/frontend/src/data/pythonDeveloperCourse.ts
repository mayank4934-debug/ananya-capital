import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const py_module0: CModule = {
  id: "python-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "python-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Python Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO PYTHON DEVELOPMENT!

Hey! I'm so excited to be your coding companion on this Python journey! 🐍 Python is one of the most beginner-friendly AND most powerful languages out there — used by Google, Netflix, NASA, and countless others. I'll be right here to guide you from your very first print() to building full applications!

COURSE OVERVIEW
Python is the world's most popular programming language, and for good reason — it's readable, versatile, and powerful. Whether you want to build web apps, automate tasks, analyze data, or get into AI/ML, Python is the gateway. This course takes you from absolute basics all the way to object-oriented programming and real projects.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write Python code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~30 hours
This is a focused Python course. Dedicate 1–2 hours per day and you'll be writing real Python apps in about 3 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "python-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Python Development course:

1. Python Basics — Setup, syntax, variables, data types, print & input
2. Variables & I/O — Type conversion, string operations, user interaction
3. Control Flow — If/else, loops (for/while), break/continue, comprehensions
4. Functions — Defining functions, parameters, scope, lambda, decorators
5. Data Structures — Lists, tuples, sets, dictionaries, and operations on each
6. OOP — Classes, objects, inheritance, polymorphism, encapsulation
7. File I/O & Modules — Reading/writing files, standard library, custom modules
8. Capstone Projects — Real-world Python programs to solidify your skills`,
          codeExample: "",
        },
        {
          id: "python-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Hands-on Python exercises in parts where you write code

Theory-only parts do NOT have coding questions. Only parts where you write actual Python code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "python-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what Python is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Python journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Python Basics ──────────────────────────────────────────────────

const py_module1: CModule = {
  id: "py-basics",
  title: "Module 1: Python Basics",
  outcome:
    "Write Python programs using core syntax, data types, and control flow.",
  isLocked: false,
  parts: [
    {
      id: "py-basics-p1",
      title: "Part 1: Python Setup & Syntax",
      description:
        "Installing Python, REPL, print, variables, and basic syntax.",
      videoUrl: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      notes:
        "PYTHON SETUP & SYNTAX\n\nPython uses indentation (4 spaces) instead of curly braces. Install via python.org or use python3. Run scripts with python3 file.py or use the REPL. print() outputs to console. Variables are dynamically typed — no declaration needed. Use # for comments and triple quotes for multi-line strings.",
      docs: [
        {
          label: "Python Docs: Getting Started",
          url: "https://docs.python.org/3/tutorial/index.html",
        },
        {
          label: "Python Docs: Introduction",
          url: "https://docs.python.org/3/tutorial/introduction.html",
        },
      ],
      partQuiz: [
        {
          question: "How do you run a Python script from the terminal?",
          options: [
            "run file.py",
            "python3 file.py",
            "execute file.py",
            "py run file.py",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the correct Python comment syntax?",
          options: ["// comment", "/* comment */", "# comment", "-- comment"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Python uses __ for code blocks instead of {}.",
          options: ["parentheses", "indentation", "brackets", "colons only"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you print 'Hello' in Python?",
          options: [
            "echo('Hello')",
            "console.log('Hello')",
            "print('Hello')",
            "log('Hello')",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which keyword declares a variable in Python?",
          options: ["var", "let", "const", "No keyword — just assign"],
          correct: 3,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-basics-p1s1",
          title: "Installing Python & REPL",
          content:
            "Download Python 3.x from python.org. The REPL (Read-Eval-Print Loop) lets you run Python interactively — type python3 in the terminal. Scripts are .py files run with python3 script.py. Use virtual environments (python3 -m venv env) to isolate project dependencies.",
          codeExample:
            "# In terminal:\n# python3  → opens REPL\n# python3 hello.py  → runs script\n\n# Create virtual env\npython3 -m venv env\nsource env/bin/activate  # Mac/Linux\nenv\\Scripts\\activate     # Windows",
          video: {
            youtubeId: "rfscVS0vtbw",
            title: "Python Installation & Setup",
          },
          flowchart: "compiler-flow",
        },
        {
          id: "py-basics-p1s2",
          title: "Variables & Basic Syntax",
          content:
            "Python variables are dynamically typed — assign and go. Naming: snake_case by convention. Multiple assignment: a, b = 1, 2. Type checking: type(x). Indentation (4 spaces) defines code blocks — Python enforces this strictly.",
          codeExample:
            "name = 'Alice'      # string\nage = 25            # int\nheight = 1.75       # float\nactive = True       # bool\n\n# Multiple assignment\nx, y, z = 1, 2, 3\nprint(type(name))   # <class 'str'>",
          video: { youtubeId: "rfscVS0vtbw", title: "Python Variables" },
        },
        {
          id: "py-basics-p1s3",
          title: "print() & String Formatting",
          content:
            "print() outputs to stdout. f-strings (Python 3.6+) are the preferred way to format strings: f'Hello {name}'. Use \\n for newline, \\t for tab. str() converts values to strings. input() reads a line from the user.",
          codeExample:
            "name = 'Alice'\nage = 25\n\n# f-string (preferred)\nprint(f'Hello, {name}! You are {age} years old.')\n\n# .format()\nprint('Hello, {}!'.format(name))\n\n# input\nuser = input('Enter your name: ')\nprint(f'Hi, {user}!')",
          video: {
            youtubeId: "rfscVS0vtbw",
            title: "Python print & f-strings",
          },
        },
      ],
    },
    {
      id: "py-basics-p2",
      title: "Part 2: Data Types & Control Flow",
      description:
        "int, float, str, bool, if/elif/else, and comparison operators.",
      videoUrl: "https://www.youtube.com/watch?v=DZwmZ8Usvnk",
      notes:
        "DATA TYPES & CONTROL FLOW\n\nPython types: int, float, str, bool, NoneType. Operators: +, -, *, /, // (floor div), % (modulo), ** (power). Comparison: ==, !=, <, >, <=, >=. Logical: and, or, not. Conditional: if condition: ... elif condition: ... else: ...",
      docs: [
        {
          label: "Python Docs: Data Types",
          url: "https://docs.python.org/3/library/stdtypes.html",
        },
        {
          label: "Python Docs: Control Flow",
          url: "https://docs.python.org/3/tutorial/controlflow.html",
        },
      ],
      partQuiz: [
        {
          question: "What does 7 // 2 return in Python?",
          options: ["3.5", "3", "4", "2"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the Python keyword for 'else if'?",
          options: ["else if", "elseif", "elif", "otherwise"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 'not True' evaluate to?",
          options: ["True", "False", "None", "Error"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What type is None in Python?",
          options: ["bool", "int", "NoneType", "undefined"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 2 ** 3 return?",
          options: ["6", "5", "8", "9"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-basics-p2s1",
          title: "Numeric Types & Operators",
          content:
            "int: whole numbers; float: decimals; complex: 1+2j. Arithmetic: +, -, *, /, // (floor), % (modulo), ** (power). int() and float() convert between types. Division always returns float: 5/2 = 2.5. Use // for integer division: 5//2 = 2.",
          codeExample:
            "x = 10\ny = 3\nprint(x + y)   # 13\nprint(x / y)   # 3.333...\nprint(x // y)  # 3  (floor div)\nprint(x % y)   # 1  (modulo)\nprint(x ** y)  # 1000 (power)\nprint(int(3.9)) # 3",
          video: {
            youtubeId: "DZwmZ8Usvnk",
            title: "Python Numbers & Operators",
          },
          flowchart: "memory-hierarchy",
        },
        {
          id: "py-basics-p2s2",
          title: "Booleans & Comparisons",
          content:
            "bool values: True, False. Comparison operators return booleans. Logical operators: and (both true), or (at least one true), not (flip). In Python, 0, '', None, [], {} are all falsy. Everything else is truthy. Use bool() to check.",
          codeExample:
            "x = 10\nprint(x > 5)          # True\nprint(x == 10)        # True\nprint(x != 5)         # True\nprint(x > 5 and x < 20)  # True\nprint(bool(0))        # False\nprint(bool('hello'))  # True",
          video: { youtubeId: "DZwmZ8Usvnk", title: "Python Booleans" },
        },
        {
          id: "py-basics-p2s3",
          title: "if / elif / else",
          content:
            "Conditions must end with a colon. The body must be indented. Python has no switch — use elif chains. One-liner: x = 'yes' if condition else 'no'. Short-circuit evaluation: Python stops evaluating 'and' as soon as it finds False.",
          codeExample:
            "score = 85\n\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\nprint(f'Grade: {grade}')  # Grade: B\n\n# Ternary\nresult = 'pass' if score >= 60 else 'fail'",
          video: { youtubeId: "DZwmZ8Usvnk", title: "Python if/elif/else" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "py-basics-p3",
      title: "Part 3: Functions & Scope",
      description:
        "Defining functions, parameters, return values, and variable scope.",
      videoUrl: "https://www.youtube.com/watch?v=9Os0o3wzS_I",
      notes:
        "FUNCTIONS & SCOPE\n\nDefine with def name(params): body. Return values with return. Default params: def fn(x=10). *args for variable positional args, **kwargs for keyword args. Scope: LEGB rule — Local, Enclosing, Global, Built-in. Use global keyword to modify global vars inside a function.",
      docs: [
        {
          label: "Python Docs: Functions",
          url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
        },
        {
          label: "Real Python: Functions",
          url: "https://realpython.com/defining-your-own-python-function/",
        },
      ],
      partQuiz: [
        {
          question: "Which keyword defines a function in Python?",
          options: ["function", "func", "def", "fn"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does *args capture?",
          options: [
            "Keyword arguments",
            "All variable positional arguments",
            "One argument",
            "Default arguments",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the LEGB rule in Python?",
          options: [
            "List, Enum, Global, Built-in",
            "Local, Enclosing, Global, Built-in scope order",
            "A loop type",
            "A naming convention",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a function return if no return statement?",
          options: ["0", "False", "None", "Error"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does **kwargs capture?",
          options: [
            "All positional args",
            "All keyword arguments as a dict",
            "One kwarg",
            "Default args",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-basics-p3s1",
          title: "Defining & Calling Functions",
          content:
            "Use def to define a function. Parameters are listed in parentheses. Call by passing arguments. Default parameter values make arguments optional. Functions are first-class objects — they can be assigned to variables and passed as arguments.",
          codeExample:
            "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))           # Hello, Alice!\nprint(greet('Bob', 'Hi'))      # Hi, Bob!\n\n# First-class function\nsay = greet\nprint(say('Charlie'))          # Hello, Charlie!",
          video: { youtubeId: "9Os0o3wzS_I", title: "Python Functions" },
        },
        {
          id: "py-basics-p3s2",
          title: "*args & **kwargs",
          content:
            "Use *args to accept any number of positional arguments (stored as tuple). Use **kwargs for keyword arguments (stored as dict). Combine them: def fn(*args, **kwargs). This is the basis for many Python library APIs.",
          codeExample:
            "def total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3, 4))  # 10\n\ndef info(**kwargs):\n    for k, v in kwargs.items():\n        print(f'{k}: {v}')\n\ninfo(name='Alice', age=25)  # name: Alice / age: 25",
          video: { youtubeId: "9Os0o3wzS_I", title: "args and kwargs" },
          flowchart: "storage-hierarchy",
        },
        {
          id: "py-basics-p3s3",
          title: "Scope & Closures",
          content:
            "Python resolves names via LEGB: Local → Enclosing → Global → Built-in. Use global x to modify a global variable inside a function. Closures: an inner function that captures variables from its enclosing scope. They power decorators and factory functions.",
          codeExample:
            "count = 0\n\ndef increment():\n    global count\n    count += 1\n\nincrement()\nprint(count)  # 1\n\n# Closure example\ndef multiplier(factor):\n    def multiply(x):\n        return x * factor  # captures 'factor'\n    return multiply\n\ndouble = multiplier(2)\nprint(double(5))  # 10",
          video: { youtubeId: "9Os0o3wzS_I", title: "Python Scope & Closures" },
          flowchart: "storage-classes-flow",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does f'Hello {name}' do?",
      options: [
        "Escapes name",
        "Interpolates name into the string",
        "Creates a file",
        "Calls a function",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which is the correct way to check equality in Python?",
      options: ["=", "===", "==", "equals()"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does type() return?",
      options: [
        "A string name",
        "The class of the object",
        "A boolean",
        "The size",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What happens if you don't indent a code block?",
      options: ["Nothing", "Warning", "IndentationError", "Runs anyway"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which operator raises a number to a power?",
      options: ["^", "pow", "**", "#"],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "py-basics-t1",
      title: "Grade Calculator",
      description:
        "Write a function grade(score) that returns 'A' (>=90), 'B' (>=80), 'C' (>=70), 'D' (>=60), or 'F'. Print the grade for scores 95, 82, 71, 55.",
      starterCode:
        "def grade(score):\n    # return the letter grade\n    pass\n\nfor s in [95, 82, 71, 55]:\n    print(f'{s}: {grade(s)}')",
      hints: [
        "Use if/elif/else with >= comparisons",
        "Check highest threshold first (90, then 80, etc.)",
        "Return the letter string from each branch",
      ],
    },
    {
      id: "py-basics-t2",
      title: "Sum of Arguments",
      description:
        "Write a function total(*numbers) that accepts any count of numbers and returns their sum. Also write a function describe(**info) that prints each key: value pair.",
      starterCode:
        "def total(*numbers):\n    pass\n\ndef describe(**info):\n    pass\n\nprint(total(1, 2, 3, 4, 5))  # 15\ndescribe(name='Alice', role='Dev')",
      hints: [
        "Use sum() on the args tuple",
        "Use .items() to iterate kwargs",
        "f-string for printing key: value",
      ],
    },
    {
      id: "py-basics-t3",
      title: "Counter Closure",
      description:
        "Write a make_counter() function that returns a counter function. Each call increments and returns the count starting from 0.",
      starterCode:
        "def make_counter():\n    # Use closure to keep track of count\n    pass\n\ncounter = make_counter()\nprint(counter())  # 1\nprint(counter())  # 2\nprint(counter())  # 3",
      hints: [
        "Keep count in outer function scope",
        "Use nonlocal count inside inner function",
        "Return the inner function",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Data Structures & Algorithms ───────────────────────────────────

const py_module2: CModule = {
  id: "py-ds",
  title: "Module 2: Data Structures & Algorithms",
  outcome:
    "Use Python's built-in data structures and implement sorting/searching algorithms.",
  isLocked: true,
  parts: [
    {
      id: "py-ds-p1",
      title: "Part 1: Lists, Tuples, Sets & Dicts",
      description: "Python's core collection types and their operations.",
      videoUrl: "https://www.youtube.com/watch?v=W8KRzm-HUcc",
      notes:
        "COLLECTIONS\n\nList: mutable, ordered — [1,2,3]. Tuple: immutable, ordered — (1,2,3). Set: mutable, unordered, unique — {1,2,3}. Dict: key-value pairs — {'key': val}. List comprehensions: [x*2 for x in lst if x>0]. Dict comprehensions: {k: v for k, v in pairs}. Use len(), in, not in on all collections.",
      docs: [
        {
          label: "Python Docs: Lists",
          url: "https://docs.python.org/3/tutorial/datastructures.html",
        },
        {
          label: "Python Docs: Dictionaries",
          url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
        },
      ],
      partQuiz: [
        {
          question: "Which Python collection is immutable?",
          options: ["list", "dict", "tuple", "set"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does list.append() do?",
          options: [
            "Inserts at index 0",
            "Adds to the end",
            "Removes last",
            "Sorts the list",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you access a dict value by key?",
          options: [
            "d.get(key) or d[key]",
            "d.find(key)",
            "d.value(key)",
            "d->key",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What does a set guarantee about its elements?",
          options: [
            "Sorted order",
            "Duplicates allowed",
            "All unique",
            "Index-based access",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is a list comprehension?",
          options: [
            "A comment in a list",
            "Compact syntax to create a list from an iterable",
            "A loop over a list",
            "A sorted list",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-ds-p1s1",
          title: "Lists & List Comprehensions",
          content:
            "Lists are ordered, mutable collections. Key methods: append, extend, insert, remove, pop, sort, reverse, index. Slicing: lst[1:4], lst[::-1] (reverse). List comprehensions are compact: [expr for item in iterable if condition].",
          codeExample:
            "fruits = ['apple', 'banana', 'cherry']\nfruits.append('date')\nfruits.remove('banana')\nprint(fruits[0])     # apple\nprint(fruits[-1])    # date\n\n# List comprehension\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)  # [1, 4, 9, 16, 25]",
          video: { youtubeId: "W8KRzm-HUcc", title: "Python Lists" },
          flowchart: "loop",
        },
        {
          id: "py-ds-p1s2",
          title: "Tuples & Sets",
          content:
            "Tuples are immutable — use them for fixed data like coordinates or DB rows. Packing/unpacking: x, y = (1, 2). Sets are unordered unique collections — great for membership tests (O(1)) and removing duplicates. Set operations: union (|), intersection (&), difference (-).",
          codeExample:
            "point = (3, 4)  # tuple\nx, y = point\n\nprimes = {2, 3, 5, 7}\nprint(3 in primes)   # True\nprint(len(primes))   # 4\n\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)  # {2, 3} intersection\nprint(a | b)  # {1, 2, 3, 4} union",
          video: { youtubeId: "W8KRzm-HUcc", title: "Python Tuples & Sets" },
        },
        {
          id: "py-ds-p1s3",
          title: "Dictionaries",
          content:
            "Dicts store key-value pairs. Keys must be hashable. Access: d[key] (raises KeyError if missing) or d.get(key, default). Iteration: d.keys(), d.values(), d.items(). Dict comprehension: {k: v for k, v in items}. Python 3.7+ dicts preserve insertion order.",
          codeExample:
            "student = {'name': 'Alice', 'grade': 'A', 'score': 95}\nprint(student['name'])           # Alice\nprint(student.get('age', 0))    # 0 (default)\n\n# Update\nstudent['score'] = 97\n\n# Iterate\nfor key, val in student.items():\n    print(f'{key}: {val}')",
          video: { youtubeId: "W8KRzm-HUcc", title: "Python Dictionaries" },
        },
      ],
    },
    {
      id: "py-ds-p2",
      title: "Part 2: String Manipulation",
      description: "String methods, slicing, regex, and formatting techniques.",
      videoUrl: "https://www.youtube.com/watch?v=k9TUPpGqYTo",
      notes:
        "STRING MANIPULATION\n\nStrings are immutable sequences. Methods: upper(), lower(), strip(), split(), join(), replace(), find(), startswith(), endswith(), format(). Slicing: s[start:stop:step]. Multiline: triple quotes. Raw strings: r'no\\escape'. Regex: import re, then re.search(), re.findall(), re.sub().",
      docs: [
        {
          label: "Python Docs: str methods",
          url: "https://docs.python.org/3/library/stdtypes.html#string-methods",
        },
        {
          label: "Python Docs: re module",
          url: "https://docs.python.org/3/library/re.html",
        },
      ],
      partQuiz: [
        {
          question: "What does 'hello'.upper() return?",
          options: ["hello", "HELLO", "Hello", "Error"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you split a string by spaces?",
          options: ["s.split(' ')", "s.break()", "s.divide()", "s.slice()"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What does ','.join(['a','b','c']) return?",
          options: ["a,b,c", "[a,b,c]", "a b c", "abc"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is s[::-1] in Python?",
          options: [
            "First character",
            "Last character",
            "Reversed string",
            "Every other char",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which module provides regex in Python?",
          options: ["regex", "re", "pattern", "match"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-ds-p2s1",
          title: "String Methods",
          content:
            "Python strings have many built-in methods. strip() removes whitespace from both ends. split() splits into a list; join() is the inverse. replace() swaps substrings. find() returns the index (-1 if not found). startswith/endswith check prefixes/suffixes.",
          codeExample:
            "s = '  Hello, World!  '\nprint(s.strip())           # 'Hello, World!'\nprint(s.lower())           # '  hello, world!  '\nwords = 'a,b,c'.split(',') # ['a','b','c']\nprint('-'.join(words))     # 'a-b-c'\nprint(s.replace('World', 'Python'))\nprint('hello'.find('ll'))  # 2",
          video: { youtubeId: "k9TUPpGqYTo", title: "Python String Methods" },
        },
        {
          id: "py-ds-p2s2",
          title: "Slicing & Formatting",
          content:
            "String slicing: s[start:stop:step]. Negative indices count from end. s[::-1] reverses a string. f-strings support expressions: f'{x*2}', format specs: f'{pi:.2f}', padding: f'{name:>10}'. Use textwrap.dedent for indented multiline strings.",
          codeExample:
            "s = 'Python'\nprint(s[0:3])    # Pyt\nprint(s[-3:])    # hon\nprint(s[::-1])   # nohtyP\n\npi = 3.14159\nprint(f'{pi:.2f}')       # 3.14\nprint(f'{'hi':>10}')    # '        hi'",
          video: { youtubeId: "k9TUPpGqYTo", title: "Python String Slicing" },
          flowchart: "if-else",
        },
        {
          id: "py-ds-p2s3",
          title: "Regex with re module",
          content:
            "import re for regular expressions. re.search(pattern, string) returns a match object or None. re.findall returns all matches as a list. re.sub replaces matches. Use r'' raw strings for patterns. Common patterns: \\d (digit), \\w (word char), \\s (whitespace), . (any), + (one or more), * (zero or more).",
          codeExample:
            "import re\n\ntext = 'Phone: 123-456-7890'\nphone = re.search(r'\\d{3}-\\d{3}-\\d{4}', text)\nif phone:\n    print(phone.group())  # 123-456-7890\n\nemails = re.findall(r'\\w+@\\w+\\.\\w+', 'a@b.com c@d.org')\nprint(emails)  # ['a@b.com', 'c@d.org']",
          video: { youtubeId: "k9TUPpGqYTo", title: "Python Regex" },
        },
      ],
    },
    {
      id: "py-ds-p3",
      title: "Part 3: Sorting & Searching Algorithms",
      description:
        "Linear search, binary search, bubble sort, and sorted() built-ins.",
      videoUrl: "https://www.youtube.com/watch?v=kgBjXUE_Nwc",
      notes:
        "SORTING & SEARCHING\n\nLinear search: O(n) — check each element. Binary search: O(log n) — requires sorted list, halve search space each step. Python built-ins: sorted() returns new list, list.sort() sorts in-place. Key argument: sorted(lst, key=lambda x: x[1]). Bubble sort: O(n²) — repeatedly swap adjacent out-of-order elements.",
      docs: [
        {
          label: "Python Docs: Sorting HowTo",
          url: "https://docs.python.org/3/howto/sorting.html",
        },
        {
          label: "Python Docs: bisect",
          url: "https://docs.python.org/3/library/bisect.html",
        },
      ],
      partQuiz: [
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does sorted() return?",
          options: [
            "Sorts in-place",
            "A new sorted list",
            "A sorted tuple",
            "None",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Binary search requires the list to be:",
          options: ["Unique", "Sorted", "Even length", "Non-empty"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the worst-case time of bubble sort?",
          options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
          correct: 3,
          xp: 10,
        },
        {
          question: "How do you sort by a custom key in Python?",
          options: [
            "sorted(lst, compare=fn)",
            "sorted(lst, key=fn)",
            "sort.by(lst, fn)",
            "lst.sort(with=fn)",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-ds-p3s1",
          title: "Linear & Binary Search",
          content:
            "Linear search scans each element — O(n). Binary search divides the sorted array in half each step — O(log n). Python's bisect module provides binary search built-ins. Always prefer built-in 'in' operator or bisect for production code.",
          codeExample:
            "# Linear search\ndef linear_search(lst, target):\n    for i, val in enumerate(lst):\n        if val == target:\n            return i\n    return -1\n\n# Binary search\ndef binary_search(lst, target):\n    lo, hi = 0, len(lst) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if lst[mid] == target: return mid\n        elif lst[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1",
          video: {
            youtubeId: "kgBjXUE_Nwc",
            title: "Search Algorithms in Python",
          },
          flowchart: "loop",
        },
        {
          id: "py-ds-p3s2",
          title: "Bubble Sort",
          content:
            "Bubble sort compares adjacent elements and swaps them if out of order. Repeat n-1 passes. It is O(n²) — only use for learning. Python's built-in sorted() uses Timsort (O(n log n)) and should be used in practice.",
          codeExample:
            "def bubble_sort(lst):\n    n = len(lst)\n    for i in range(n):\n        for j in range(n - i - 1):\n            if lst[j] > lst[j+1]:\n                lst[j], lst[j+1] = lst[j+1], lst[j]\n    return lst\n\nprint(bubble_sort([64, 25, 12, 22, 11]))\n# [11, 12, 22, 25, 64]",
          video: { youtubeId: "kgBjXUE_Nwc", title: "Bubble Sort Python" },
          flowchart: "loop",
        },
        {
          id: "py-ds-p3s3",
          title: "Python sorted() & Custom Keys",
          content:
            "sorted(iterable, key=fn, reverse=True) is the Pythonic way to sort. key= accepts any callable. Use lambda for inline: sorted(lst, key=lambda x: x[1]). sort() modifies the list in-place; sorted() returns a new list. operator.itemgetter and attrgetter are faster alternatives to lambda.",
          codeExample:
            "students = [('Alice', 95), ('Bob', 87), ('Carol', 92)]\n\n# Sort by score desc\nranked = sorted(students, key=lambda s: s[1], reverse=True)\nprint(ranked)  # [('Alice',95), ('Carol',92), ('Bob',87)]\n\n# Sort strings case-insensitive\nwords = ['Banana', 'apple', 'Cherry']\nprint(sorted(words, key=str.lower))",
          video: {
            youtubeId: "kgBjXUE_Nwc",
            title: "Python sorted() Tutorial",
          },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "How do you remove duplicates from a list in one line?",
      options: [
        "list.unique()",
        "list(set(lst))",
        "list.dedupe()",
        "sorted(lst)",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does dict.get(key, default) do when key is missing?",
      options: [
        "Raises KeyError",
        "Returns None",
        "Returns default",
        "Returns 0",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the output of [x for x in range(5) if x % 2 == 0]?",
      options: ["[1,3]", "[0,2,4]", "[0,1,2,3,4]", "[2,4]"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which string method splits a CSV line by comma?",
      options: ["split(',')", "slice(',')", "cut(',')", "divide(',')"],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is a hash map equivalent in Python?",
      options: ["list", "tuple", "dict", "set"],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "py-ds-t1",
      title: "Word Frequency Counter",
      description:
        "Write a function word_count(text) that returns a dict of each word and its frequency. Ignore case. Test with 'Hello world hello Python world world'.",
      starterCode:
        "def word_count(text):\n    # split, lowercase, count\n    pass\n\nresult = word_count('Hello world hello Python world world')\nprint(result)",
      hints: [
        "Lowercase and split the string",
        "Use a dict and check if key exists",
        "Or use collections.Counter for bonus",
      ],
    },
    {
      id: "py-ds-t2",
      title: "Find Second Largest",
      description:
        "Write a function second_largest(lst) that returns the second largest unique number. Return None if the list has fewer than 2 unique values.",
      starterCode:
        "def second_largest(lst):\n    pass\n\nprint(second_largest([3, 1, 4, 1, 5, 9, 2, 6]))  # 6\nprint(second_largest([5, 5, 5]))  # None",
      hints: [
        "Convert to a set to remove duplicates",
        "Sort and pick index -2",
        "Handle edge case: len(unique) < 2",
      ],
    },
    {
      id: "py-ds-t3",
      title: "Binary Search Implementation",
      description:
        "Implement binary_search(lst, target) that returns the index or -1. Write test cases for: found in middle, found at start, found at end, not found.",
      starterCode:
        "def binary_search(lst, target):\n    lo, hi = 0, len(lst) - 1\n    # implement\n    pass\n\ndata = [2, 5, 8, 12, 16, 23, 38, 56]\nprint(binary_search(data, 23))   # 5\nprint(binary_search(data, 10))   # -1",
      hints: [
        "Use while lo <= hi",
        "mid = (lo + hi) // 2",
        "Return mid when lst[mid] == target",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: OOP & Modules ──────────────────────────────────────────────────

const py_module3: CModule = {
  id: "py-oop",
  title: "Module 3: OOP & Modules",
  outcome:
    "Design Python programs using classes, inheritance, and standard library modules.",
  isLocked: true,
  parts: [
    {
      id: "py-oop-p1",
      title: "Part 1: Classes & Objects",
      description: "Defining classes, __init__, instance methods, and self.",
      videoUrl: "https://www.youtube.com/watch?v=apACNr7DC_s",
      notes:
        "CLASSES & OBJECTS\n\nclass Name: indented body. __init__(self, ...) is the constructor. self is the instance. Instance attributes: self.name = name. Methods are functions inside a class that take self. Class attributes shared by all instances. Use __str__ for string representation. @staticmethod and @classmethod for alternate constructors.",
      docs: [
        {
          label: "Python Docs: Classes",
          url: "https://docs.python.org/3/tutorial/classes.html",
        },
        {
          label: "Real Python: OOP",
          url: "https://realpython.com/python3-object-oriented-programming/",
        },
      ],
      partQuiz: [
        {
          question: "What is __init__ in Python?",
          options: [
            "A module",
            "The class constructor called on instantiation",
            "A built-in function",
            "A loop keyword",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'self' refer to in a method?",
          options: [
            "The class",
            "The current instance",
            "The parent class",
            "A global variable",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you create an instance of class Dog?",
          options: ["Dog.new()", "new Dog()", "Dog()", "create Dog()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does __str__ define?",
          options: [
            "How to compare objects",
            "String representation of the object",
            "Iteration behavior",
            "Attribute access",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a class attribute?",
          options: [
            "An attribute only on one instance",
            "An attribute shared by all instances",
            "A private variable",
            "A method",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-oop-p1s1",
          title: "Defining Classes",
          content:
            "A class is a blueprint for objects. __init__ sets up instance attributes. self is always the first parameter of instance methods. Create an object by calling the class like a function. Access attributes and methods with dot notation.",
          codeExample:
            "class Dog:\n    species = 'Canis lupus'  # class attr\n\n    def __init__(self, name, age):\n        self.name = name   # instance attr\n        self.age = age\n\n    def bark(self):\n        return f'{self.name} says Woof!'\n\nrex = Dog('Rex', 3)\nprint(rex.bark())         # Rex says Woof!\nprint(Dog.species)        # Canis lupus",
          video: {
            youtubeId: "apACNr7DC_s",
            title: "Python Classes & Objects",
          },
        },
        {
          id: "py-oop-p1s2",
          title: "Instance Methods & __str__",
          content:
            "Methods are functions defined inside a class. They always receive self as the first argument. __str__ controls what print(obj) shows. __repr__ is for developer-friendly representation. Use @property for computed attributes with getter/setter semantics.",
          codeExample:
            "class Circle:\n    PI = 3.14159\n\n    def __init__(self, radius):\n        self.radius = radius\n\n    def area(self):\n        return self.PI * self.radius ** 2\n\n    def __str__(self):\n        return f'Circle(r={self.radius})'\n\nc = Circle(5)\nprint(c)           # Circle(r=5)\nprint(c.area())    # 78.53975",
          video: { youtubeId: "apACNr7DC_s", title: "Python Instance Methods" },
        },
        {
          id: "py-oop-p1s3",
          title: "Static & Class Methods",
          content:
            "@staticmethod doesn't receive self or cls — it's a utility attached to the class namespace. @classmethod receives cls (the class itself) and is used for alternate constructors. Both are called on the class: MyClass.method().",
          codeExample:
            "class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    @staticmethod\n    def from_fahrenheit(f):\n        return Temperature((f - 32) * 5/9)\n\n    @classmethod\n    def freezing(cls):\n        return cls(0)\n\nt = Temperature.from_fahrenheit(212)\nprint(t.celsius)  # 100.0",
          video: {
            youtubeId: "apACNr7DC_s",
            title: "Static and Class Methods",
          },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "py-oop-p2",
      title: "Part 2: Inheritance & Polymorphism",
      description:
        "Inheriting from base classes, overriding methods, and duck typing.",
      videoUrl: "https://www.youtube.com/watch?v=Cn7AkDb4pIU",
      notes:
        "INHERITANCE\n\nclass Child(Parent): inherits all attributes and methods. super().__init__() calls the parent constructor. Override methods by redefining them in the child. Multiple inheritance: class C(A, B). isinstance() checks the type hierarchy. Duck typing: if it has the method, Python will call it — no interface required.",
      docs: [
        {
          label: "Python Docs: Inheritance",
          url: "https://docs.python.org/3/tutorial/classes.html#inheritance",
        },
        {
          label: "Real Python: Inheritance",
          url: "https://realpython.com/inheritance-composition-python/",
        },
      ],
      partQuiz: [
        {
          question: "How do you inherit from a class in Python?",
          options: [
            "class Child extends Parent",
            "class Child(Parent)",
            "class Child: Parent",
            "child = inherit(Parent)",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does super().__init__() do?",
          options: [
            "Creates a new object",
            "Calls the parent class constructor",
            "Resets the object",
            "Creates a copy",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is duck typing?",
          options: [
            "A type-checking method",
            "If an object has the required method, Python uses it regardless of type",
            "A naming convention",
            "An error-handling technique",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you check if obj is an instance of MyClass?",
          options: [
            "type(obj) == MyClass",
            "isinstance(obj, MyClass)",
            "obj.type is MyClass",
            "obj instanceof MyClass",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Method overriding means:",
          options: [
            "Deleting a parent method",
            "Redefining a parent method in the child class",
            "Calling two methods at once",
            "Renaming a method",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-oop-p2s1",
          title: "Inheritance Basics",
          content:
            "Child class inherits all methods of the parent. Call super() to access parent methods. Override by redefining the method in the child — Python resolves via MRO (Method Resolution Order). issubclass() checks class hierarchy.",
          codeExample:
            "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return 'Some sound'\n\nclass Cat(Animal):\n    def speak(self):   # override\n        return f'{self.name} says Meow!'\n\nclass Kitten(Cat):\n    def speak(self):\n        return super().speak() + ' (tiny)'\n\nk = Kitten('Luna')\nprint(k.speak())  # Luna says Meow! (tiny)",
          video: { youtubeId: "Cn7AkDb4pIU", title: "Python Inheritance" },
        },
        {
          id: "py-oop-p2s2",
          title: "Polymorphism & Duck Typing",
          content:
            "Polymorphism: same interface, different behavior. A function that calls .speak() works on any object that has speak() — Python doesn't check the type. Abstract base classes (abc.ABC) can enforce that subclasses implement required methods.",
          codeExample:
            "class Duck:\n    def sound(self): return 'Quack'\n\nclass Dog:\n    def sound(self): return 'Woof'\n\ndef make_sound(animal):  # duck typing\n    print(animal.sound())\n\nmake_sound(Duck())  # Quack\nmake_sound(Dog())   # Woof — works!",
          video: { youtubeId: "Cn7AkDb4pIU", title: "Polymorphism in Python" },
          flowchart: "if-else",
        },
        {
          id: "py-oop-p2s3",
          title: "Special Methods (Dunder)",
          content:
            "Dunder (double-underscore) methods customize Python behavior. __len__ for len(), __getitem__ for [], __eq__ for ==, __lt__ for <, __add__ for +. Implementing these makes your class work seamlessly with Python built-ins.",
          codeExample:
            "class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __add__(self, other):\n        return Vector(self.x+other.x, self.y+other.y)\n\n    def __repr__(self):\n        return f'Vector({self.x}, {self.y})'\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1 + v2)  # Vector(4, 6)",
          video: { youtubeId: "Cn7AkDb4pIU", title: "Python Dunder Methods" },
        },
      ],
    },
    {
      id: "py-oop-p3",
      title: "Part 3: Python Standard Library & pip",
      description:
        "os, sys, datetime, json, collections, and installing packages with pip.",
      videoUrl: "https://www.youtube.com/watch?v=j2RojClTxGo",
      notes:
        "STANDARD LIBRARY & PIP\n\nos: file/dir operations. sys: interpreter state, argv. datetime: date/time arithmetic. json: encode/decode JSON. collections: Counter, defaultdict, deque, namedtuple. pathlib: modern path handling. pip install package installs from PyPI. requirements.txt lists project dependencies.",
      docs: [
        {
          label: "Python Standard Library",
          url: "https://docs.python.org/3/library/",
        },
        {
          label: "PyPI — Package Index",
          url: "https://pypi.org/",
        },
      ],
      partQuiz: [
        {
          question: "Which module handles JSON in Python?",
          options: ["js", "json", "jsonify", "data"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does collections.Counter do?",
          options: [
            "Counts loops",
            "Counts occurrences of elements",
            "Increments a variable",
            "Counts lines in a file",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you install a package in Python?",
          options: [
            "python install pkg",
            "pip install pkg",
            "import install pkg",
            "get pkg",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does os.path.join() do?",
          options: [
            "Joins strings",
            "Builds a file path correctly for the OS",
            "Merges directories",
            "Imports a path module",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What file lists project dependencies?",
          options: [
            "package.json",
            "requirements.txt",
            "deps.txt",
            "packages.py",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-oop-p3s1",
          title: "os, sys & pathlib",
          content:
            "os module: os.getcwd(), os.listdir(), os.makedirs(), os.path.join(). pathlib (modern): Path('.') / 'subdir' / 'file.txt'. sys.argv has CLI arguments; sys.exit() terminates. sys.path lists directories Python searches for modules.",
          codeExample:
            "import os\nfrom pathlib import Path\n\nprint(os.getcwd())          # current dir\nfiles = os.listdir('.')    # list files\n\n# pathlib (preferred)\np = Path('data') / 'output.txt'\np.parent.mkdir(parents=True, exist_ok=True)\nprint(p.suffix)   # .txt\nprint(p.stem)     # output",
          video: { youtubeId: "j2RojClTxGo", title: "Python os & pathlib" },
        },
        {
          id: "py-oop-p3s2",
          title: "json & datetime",
          content:
            "json.dumps() converts Python object → JSON string. json.loads() parses JSON string → Python object. Use indent=2 for pretty-printing. datetime.now() gets current time. timedelta for arithmetic. strftime/strptime for formatting and parsing.",
          codeExample:
            "import json\nfrom datetime import datetime, timedelta\n\ndata = {'name': 'Alice', 'scores': [95, 87]}\njson_str = json.dumps(data, indent=2)\nprint(json_str)\n\nparsed = json.loads(json_str)\nprint(parsed['name'])  # Alice\n\nnow = datetime.now()\ntomorrow = now + timedelta(days=1)\nprint(now.strftime('%Y-%m-%d'))",
          video: {
            youtubeId: "j2RojClTxGo",
            title: "Python json and datetime",
          },
        },
        {
          id: "py-oop-p3s3",
          title: "pip & Virtual Environments",
          content:
            "pip install package installs from PyPI. pip freeze > requirements.txt saves dependencies. pip install -r requirements.txt restores them. Always use virtual environments (venv or virtualenv) to isolate project packages. Popular packages: requests, numpy, pandas, flask, pytest.",
          codeExample:
            "# Create and activate venv\npython3 -m venv env\nsource env/bin/activate\n\n# Install packages\npip install requests pandas\n\n# Save dependencies\npip freeze > requirements.txt\n\n# Install from file\npip install -r requirements.txt\n\n# Deactivate\ndeactivate",
          video: {
            youtubeId: "j2RojClTxGo",
            title: "pip and Virtual Environments",
          },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the MRO (Method Resolution Order)?",
      options: [
        "A sorting algorithm",
        "The order Python searches for methods in the class hierarchy",
        "A module system",
        "An error type",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does @property do?",
      options: [
        "Makes a method static",
        "Allows a method to be accessed like an attribute",
        "Marks a class as abstract",
        "Exports a class attribute",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "How do you parse a JSON string in Python?",
      options: [
        "json.parse()",
        "json.loads()",
        "json.decode()",
        "parse(json_str)",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is collections.defaultdict?",
      options: [
        "A sorted dict",
        "A dict that provides a default value for missing keys",
        "An ordered dict",
        "A frozen dict",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does __repr__ define?",
      options: [
        "How to print in a loop",
        "Official string representation for developers",
        "The repr module",
        "Reset functionality",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "py-oop-t1",
      title: "Bank Account Class",
      description:
        "Create a BankAccount class with __init__(owner, balance=0), deposit(amount), withdraw(amount) (reject if insufficient), and __str__. Create a SavingsAccount subclass that adds interest(rate) method.",
      starterCode:
        "class BankAccount:\n    def __init__(self, owner, balance=0):\n        pass\n\n    def deposit(self, amount):\n        pass\n\n    def withdraw(self, amount):\n        pass\n\n    def __str__(self):\n        pass\n\nclass SavingsAccount(BankAccount):\n    def interest(self, rate):\n        pass",
      hints: [
        "Store balance as self.balance",
        "Raise ValueError if withdraw > balance",
        "Call super().__init__ in SavingsAccount",
      ],
    },
    {
      id: "py-oop-t2",
      title: "Shape Area Calculator",
      description:
        "Create a Shape base class with area() method. Create Circle(radius) and Rectangle(width, height) subclasses. Use polymorphism to print areas of a list containing both types.",
      starterCode:
        "import math\n\nclass Shape:\n    def area(self):\n        return 0\n\nclass Circle(Shape):\n    pass\n\nclass Rectangle(Shape):\n    pass\n\nshapes = [Circle(5), Rectangle(4, 6), Circle(3)]\nfor s in shapes:\n    print(f'{type(s).__name__}: {s.area():.2f}')",
      hints: [
        "Circle area: math.pi * r ** 2",
        "Rectangle area: width * height",
        "Override area() in each subclass",
      ],
    },
    {
      id: "py-oop-t3",
      title: "Config File Parser",
      description:
        "Write config_to_json(data_dict) using json module. Also write load_config(path) using pathlib to read a JSON file and return the parsed dict. Handle FileNotFoundError.",
      starterCode:
        "import json\nfrom pathlib import Path\n\ndef config_to_json(data_dict):\n    pass\n\ndef load_config(path):\n    pass\n\nprint(config_to_json({'host': 'localhost', 'port': 8080}))",
      hints: [
        "Use json.dumps with indent=2",
        "Use Path(path).read_text()",
        "Wrap in try/except FileNotFoundError",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: Advanced Python ────────────────────────────────────────────────

const py_module4: CModule = {
  id: "py-advanced",
  title: "Module 4: Advanced Python",
  outcome:
    "Use decorators, generators, file I/O, exception handling, and concurrency.",
  isLocked: true,
  parts: [
    {
      id: "py-adv-p1",
      title: "Part 1: File I/O & Exception Handling",
      description:
        "Reading/writing files, context managers, and try/except/finally.",
      videoUrl: "https://www.youtube.com/watch?v=Uh2ebFW8OYM",
      notes:
        "FILE I/O & EXCEPTIONS\n\nOpen files with open(path, mode). Modes: 'r' (read), 'w' (write/overwrite), 'a' (append), 'rb'/'wb' (binary). Always use with statement — it auto-closes files. Exceptions: try: ... except ValueError as e: ... else: (no error) ... finally: (always runs). Raise: raise ValueError('message'). Create custom exceptions by subclassing Exception.",
      docs: [
        {
          label: "Python Docs: Files",
          url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
        },
        {
          label: "Python Docs: Exceptions",
          url: "https://docs.python.org/3/tutorial/errors.html",
        },
      ],
      partQuiz: [
        {
          question: "What does the 'with' statement do when opening files?",
          options: [
            "Reads the file",
            "Automatically closes the file on exit",
            "Locks the file",
            "Creates a copy",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which mode opens a file for appending?",
          options: ["'w'", "'r'", "'a'", "'x'"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 'finally' block do?",
          options: [
            "Runs only if no exception",
            "Always runs, exception or not",
            "Re-raises the exception",
            "Logs the exception",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you raise a custom exception?",
          options: [
            "throw ValueError('msg')",
            "raise ValueError('msg')",
            "error ValueError('msg')",
            "except ValueError('msg')",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does readlines() return?",
          options: [
            "A single string",
            "A list of strings, one per line",
            "A generator",
            "An integer",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-adv-p1s1",
          title: "Reading & Writing Files",
          content:
            "Use open() with a context manager (with statement). read() reads the entire file as a string. readlines() returns a list of lines. write() writes a string. For CSV use the csv module; for JSON use the json module.",
          codeExample:
            "# Read a file\nwith open('data.txt', 'r') as f:\n    content = f.read()\n    # or: lines = f.readlines()\n\n# Write a file\nwith open('output.txt', 'w') as f:\n    f.write('Hello, Python!\\n')\n    f.write('Second line\\n')\n\n# Append\nwith open('log.txt', 'a') as f:\n    f.write('new entry\\n')",
          video: { youtubeId: "Uh2ebFW8OYM", title: "Python File I/O" },
        },
        {
          id: "py-adv-p1s2",
          title: "try / except / finally",
          content:
            "Wrap risky code in try. Catch specific exceptions in except clauses — be specific, not bare except. else runs if no exception. finally always runs — use for cleanup. Catch multiple: except (TypeError, ValueError) as e.",
          codeExample:
            "def parse_int(s):\n    try:\n        result = int(s)\n    except ValueError as e:\n        print(f'Error: {e}')\n        return None\n    else:\n        print('Parsed OK')\n        return result\n    finally:\n        print('Done')\n\nprint(parse_int('42'))   # Parsed OK / Done / 42\nprint(parse_int('abc'))  # Error... / Done / None",
          video: {
            youtubeId: "Uh2ebFW8OYM",
            title: "Python Exception Handling",
          },
          flowchart: "if-else",
        },
        {
          id: "py-adv-p1s3",
          title: "Custom Exceptions",
          content:
            "Create custom exceptions by subclassing Exception (or a more specific built-in). Add custom attributes in __init__. Use them to make errors meaningful and catchable by library users. Always document which exceptions a function can raise.",
          codeExample:
            "class InsufficientFundsError(Exception):\n    def __init__(self, amount, balance):\n        self.amount = amount\n        self.balance = balance\n        super().__init__(\n            f'Cannot withdraw {amount}: balance is {balance}'\n        )\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(amount, balance)\n    return balance - amount",
          video: {
            youtubeId: "Uh2ebFW8OYM",
            title: "Python Custom Exceptions",
          },
        },
      ],
    },
    {
      id: "py-adv-p2",
      title: "Part 2: Decorators & Generators",
      description:
        "Higher-order functions, decorators, yield, and generator expressions.",
      videoUrl: "https://www.youtube.com/watch?v=MjHpMCIvwsY",
      notes:
        "DECORATORS & GENERATORS\n\nDecorator: a function that wraps another function to add behavior. Syntax: @decorator before a function def. Use functools.wraps to preserve metadata. Generator: a function with yield that lazily produces values. Generator expressions: (x*2 for x in range(100)). Use for large data that shouldn't be all in memory at once.",
      docs: [
        {
          label: "Python Docs: Decorators",
          url: "https://www.python.org/dev/peps/pep-0318/",
        },
        {
          label: "Python Docs: Generators",
          url: "https://docs.python.org/3/howto/functional.html#generators",
        },
      ],
      partQuiz: [
        {
          question: "What does a decorator do?",
          options: [
            "Formats a class",
            "Wraps a function to add behavior",
            "Imports a module",
            "Compiles Python code",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'yield' do in a generator?",
          options: [
            "Returns and terminates the function",
            "Pauses execution and produces a value",
            "Imports a value",
            "Creates a list",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Why use generators over lists for large data?",
          options: [
            "Generators are faster for small data",
            "Generators produce values lazily, saving memory",
            "Generators are immutable",
            "Generators support indexing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does @functools.wraps do in a decorator?",
          options: [
            "Adds logging",
            "Preserves the wrapped function's name and docstring",
            "Caches results",
            "Validates arguments",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a generator expression?",
          options: [
            "A list comprehension",
            "A compact generator using () instead of []",
            "A class with yield",
            "An async generator",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-adv-p2s1",
          title: "Decorators",
          content:
            "A decorator is a function that takes a function and returns a new function. The @syntax is syntactic sugar for fn = decorator(fn). Use functools.wraps to preserve the original function's __name__ and __doc__. Common use cases: logging, timing, authentication, caching.",
          codeExample:
            "import functools\nimport time\n\ndef timer(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f'{func.__name__} took {time.time()-start:.3f}s')\n        return result\n    return wrapper\n\n@timer\ndef slow():\n    time.sleep(0.1)\n\nslow()  # slow took 0.100s",
          video: { youtubeId: "MjHpMCIvwsY", title: "Python Decorators" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "py-adv-p2s2",
          title: "Generators & yield",
          content:
            "A generator function uses yield instead of return. Calling it returns a generator object — values are computed lazily. next() gets the next value. for loops call next() automatically. Generator expressions: (expr for x in iterable). Use itertools for advanced patterns.",
          codeExample:
            "def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nprint([next(fib) for _ in range(8)])\n# [0, 1, 1, 2, 3, 5, 8, 13]\n\n# Generator expression\nevens = (x for x in range(1000) if x % 2 == 0)\nprint(next(evens))  # 0 (lazy!)",
          video: { youtubeId: "MjHpMCIvwsY", title: "Python Generators" },
          flowchart: "loop",
        },
        {
          id: "py-adv-p2s3",
          title: "functools & itertools",
          content:
            "functools: partial() for partial application, lru_cache for memoization, reduce(). itertools: chain(), product(), combinations(), permutations(), islice(). These modules are the power tools of functional Python — learn them to write concise, efficient code.",
          codeExample:
            "from functools import lru_cache, partial\nfrom itertools import chain, islice\n\n@lru_cache(maxsize=128)\ndef fib(n):\n    if n < 2: return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(50))  # fast!\n\ndouble = partial(lambda a, b: a * b, 2)\nprint(double(5))  # 10\n\nprint(list(islice(chain([1,2],[3,4]), 3)))  # [1,2,3]",
          video: { youtubeId: "MjHpMCIvwsY", title: "functools & itertools" },
        },
      ],
    },
    {
      id: "py-adv-p3",
      title: "Part 3: Concurrency & Threading",
      description: "threading, multiprocessing, asyncio, and the GIL.",
      videoUrl: "https://www.youtube.com/watch?v=IEEhzQoKtQU",
      notes:
        "CONCURRENCY\n\nThreading: threading.Thread(target=fn). Good for I/O-bound tasks (network, file). The GIL prevents true parallel CPU execution in CPython. Multiprocessing: separate processes with their own memory — bypasses GIL, good for CPU-bound tasks. asyncio: event loop + async/await for async I/O. concurrent.futures: ThreadPoolExecutor and ProcessPoolExecutor for easy parallelism.",
      docs: [
        {
          label: "Python Docs: threading",
          url: "https://docs.python.org/3/library/threading.html",
        },
        {
          label: "Python Docs: asyncio",
          url: "https://docs.python.org/3/library/asyncio.html",
        },
      ],
      partQuiz: [
        {
          question: "What is the GIL in Python?",
          options: [
            "A garbage collector",
            "Global Interpreter Lock — limits one thread to run at a time in CPython",
            "A global import library",
            "A debug mode",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What type of tasks benefit most from threading?",
          options: ["CPU-bound", "I/O-bound", "Memory-bound", "GPU-bound"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does await do in asyncio?",
          options: [
            "Blocks the program",
            "Suspends the coroutine until result is ready",
            "Creates a thread",
            "Handles exceptions",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which bypasses the GIL for CPU-bound tasks?",
          options: [
            "threading",
            "asyncio",
            "multiprocessing",
            "concurrent.futures.Thread",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is an async function in Python?",
          options: [
            "A function that runs in a thread",
            "A coroutine defined with async def",
            "A non-blocking import",
            "A function using multiprocessing",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-adv-p3s1",
          title: "Threading",
          content:
            "threading.Thread runs a function concurrently. Use join() to wait for completion. Good for I/O-bound tasks (downloading, file reading). The GIL means only one thread executes Python bytecode at a time, but I/O releases the GIL. Use threading.Lock to prevent race conditions on shared data.",
          codeExample:
            "import threading\nimport time\n\ndef task(name):\n    print(f'{name} started')\n    time.sleep(1)\n    print(f'{name} done')\n\nthreads = [threading.Thread(target=task, args=(f'T{i}',)) for i in range(3)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint('All done')",
          video: { youtubeId: "IEEhzQoKtQU", title: "Python Threading" },
        },
        {
          id: "py-adv-p3s2",
          title: "asyncio & async/await",
          content:
            "asyncio is for async I/O: define coroutines with async def, await coroutines with await. asyncio.run() starts the event loop. asyncio.gather() runs multiple coroutines concurrently. Perfect for web scraping, API calls, and servers without blocking.",
          codeExample:
            "import asyncio\n\nasync def fetch(url):\n    await asyncio.sleep(1)  # simulate I/O\n    return f'data from {url}'\n\nasync def main():\n    results = await asyncio.gather(\n        fetch('url1'),\n        fetch('url2'),\n        fetch('url3'),\n    )\n    print(results)\n\nasyncio.run(main())",
          video: { youtubeId: "IEEhzQoKtQU", title: "Python asyncio" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "py-adv-p3s3",
          title: "multiprocessing & concurrent.futures",
          content:
            "multiprocessing spawns separate processes — each has its own GIL and memory. Use for CPU-intensive tasks (image processing, math). concurrent.futures.ProcessPoolExecutor gives a simpler API. ThreadPoolExecutor is the thread equivalent.",
          codeExample:
            "from concurrent.futures import ProcessPoolExecutor, ThreadPoolExecutor\n\ndef cpu_task(n):\n    return sum(i*i for i in range(n))\n\n# CPU-bound: use processes\nwith ProcessPoolExecutor(max_workers=4) as ex:\n    results = list(ex.map(cpu_task, [10**5]*4))\n\n# I/O-bound: use threads\nwith ThreadPoolExecutor(max_workers=8) as ex:\n    futures = [ex.submit(cpu_task, 1000) for _ in range(8)]",
          video: { youtubeId: "IEEhzQoKtQU", title: "Python multiprocessing" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is a context manager used for?",
      options: [
        "Managing context menus",
        "Ensuring setup/teardown logic via with statement",
        "Defining class methods",
        "Threading context",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does @lru_cache do?",
      options: [
        "Creates a loop cache",
        "Caches function results based on arguments",
        "Logs function calls",
        "Limits recursion",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which exception is raised for wrong type?",
      options: ["ValueError", "TypeError", "AttributeError", "KeyError"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does a generator save compared to a list?",
      options: [
        "Time",
        "Memory — values produced lazily",
        "Code length",
        "Complexity",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which is the correct way to start an asyncio event loop?",
      options: [
        "async.start(main())",
        "asyncio.run(main())",
        "await main()",
        "loop.run(main)",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "py-adv-t1",
      title: "File Word Counter",
      description:
        "Write a function count_words(filename) that reads a file and returns a dict of word frequencies. Handle FileNotFoundError by returning an empty dict.",
      starterCode:
        "def count_words(filename):\n    # Read file, split words, count\n    pass\n\nresult = count_words('sample.txt')\nprint(result)",
      hints: [
        "Use 'with open()' and readlines()",
        "Split each line and lowercase words",
        "Use try/except FileNotFoundError",
      ],
    },
    {
      id: "py-adv-t2",
      title: "Timing Decorator",
      description:
        "Write a @timer decorator that prints how long a function took. Use functools.wraps. Test it on a function that sums 1 million numbers.",
      starterCode:
        "import time\nimport functools\n\ndef timer(func):\n    pass\n\n@timer\ndef sum_million():\n    return sum(range(1_000_000))\n\nresult = sum_million()\nprint(f'Result: {result}')",
      hints: [
        "Record time.time() before and after calling func",
        "Use @functools.wraps(func) inside timer",
        "Print f'{func.__name__} took {elapsed:.4f}s'",
      ],
    },
    {
      id: "py-adv-t3",
      title: "Fibonacci Generator",
      description:
        "Write a fibonacci_gen() generator that yields Fibonacci numbers infinitely. Then write a function first_n_fibs(n) using islice to get the first n values.",
      starterCode:
        "from itertools import islice\n\ndef fibonacci_gen():\n    # yield Fibonacci numbers forever\n    pass\n\ndef first_n_fibs(n):\n    pass\n\nprint(first_n_fibs(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]",
      hints: [
        "Start with a, b = 0, 1 and yield a each iteration",
        "Use while True with a, b = b, a+b",
        "islice(fibonacci_gen(), n) returns first n values",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: Python for Web & Automation ────────────────────────────────────

const py_module5: CModule = {
  id: "py-web",
  title: "Module 5: Python for Web & Automation",
  outcome:
    "Build web APIs with Flask/FastAPI, scrape websites, and automate tasks with scripts.",
  isLocked: true,
  parts: [
    {
      id: "py-web-p1",
      title: "Part 1: Flask & FastAPI Basics",
      description: "Building REST APIs with Flask and FastAPI.",
      videoUrl: "https://www.youtube.com/watch?v=Z1RJmh_OqeA",
      notes:
        "FLASK & FASTAPI\n\nFlask: lightweight WSGI framework. Routes: @app.route('/path', methods=['GET','POST']). Return JSON: jsonify(). Request data: request.json, request.args. Run: app.run(debug=True). FastAPI: modern ASGI framework with automatic validation and docs. Decorators: @app.get(), @app.post(). Type hints power automatic request parsing and OpenAPI docs.",
      docs: [
        {
          label: "Flask Docs",
          url: "https://flask.palletsprojects.com/",
        },
        {
          label: "FastAPI Docs",
          url: "https://fastapi.tiangolo.com/",
        },
      ],
      partQuiz: [
        {
          question: "Which decorator creates a Flask route?",
          options: ["@route()", "@app.route()", "@flask.path()", "@url()"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does jsonify() do in Flask?",
          options: [
            "Parses JSON",
            "Converts a Python dict to a JSON response",
            "Imports JSON",
            "Validates JSON",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a major advantage of FastAPI?",
          options: [
            "It is older",
            "Automatic validation and OpenAPI docs from type hints",
            "It uses Django's ORM",
            "No async support",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you read JSON body in Flask?",
          options: [
            "request.body",
            "request.json",
            "request.data()",
            "flask.body()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is WSGI?",
          options: [
            "A Python database driver",
            "Web Server Gateway Interface — spec for Python web apps",
            "A testing framework",
            "A deployment tool",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-web-p1s1",
          title: "Flask Hello World",
          content:
            "Flask is a minimal WSGI web framework. Create an app instance, define routes with @app.route, and run with app.run(). Each route function returns a response — a string, tuple, or Response object. Use debug=True in development for auto-reload and error pages.",
          codeExample:
            "from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello, World!'\n\n@app.route('/api/greet', methods=['GET'])\ndef greet():\n    name = request.args.get('name', 'World')\n    return jsonify({'message': f'Hello, {name}!'})\n\nif __name__ == '__main__':\n    app.run(debug=True)",
          video: { youtubeId: "Z1RJmh_OqeA", title: "Flask Tutorial" },
          flowchart: "compiler-flow",
        },
        {
          id: "py-web-p1s2",
          title: "Flask REST API",
          content:
            "REST APIs use HTTP methods semantically: GET (read), POST (create), PUT/PATCH (update), DELETE (remove). Handle different methods with methods=['GET','POST']. Use request.json to parse JSON bodies. Return appropriate status codes: jsonify(data), 201.",
          codeExample:
            "from flask import Flask, jsonify, request\n\napp = Flask(__name__)\nitems = []\n\n@app.route('/items', methods=['GET'])\ndef get_items():\n    return jsonify(items)\n\n@app.route('/items', methods=['POST'])\ndef add_item():\n    data = request.json\n    items.append(data)\n    return jsonify(data), 201\n\n@app.route('/items/<int:idx>', methods=['DELETE'])\ndef delete_item(idx):\n    items.pop(idx)\n    return '', 204",
          video: { youtubeId: "Z1RJmh_OqeA", title: "Flask REST API" },
        },
        {
          id: "py-web-p1s3",
          title: "FastAPI Introduction",
          content:
            "FastAPI uses Python type hints for automatic validation and generates interactive docs at /docs. Define Pydantic models for request bodies. It's async-native with ASGI. Install: pip install fastapi uvicorn. Run: uvicorn main:app --reload.",
          codeExample:
            "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.get('/')\ndef read_root():\n    return {'Hello': 'World'}\n\n@app.post('/items/')\ndef create_item(item: Item):\n    return {'item': item, 'status': 'created'}\n\n# Run: uvicorn main:app --reload",
          video: { youtubeId: "Z1RJmh_OqeA", title: "FastAPI Tutorial" },
        },
      ],
    },
    {
      id: "py-web-p2",
      title: "Part 2: Web Scraping with BeautifulSoup",
      description:
        "Fetching web pages with requests and parsing HTML with BeautifulSoup.",
      videoUrl: "https://www.youtube.com/watch?v=XVv6mJpFOb0",
      notes:
        "WEB SCRAPING\n\nrequests.get(url) fetches a page. Check response.status_code. BeautifulSoup parses HTML: soup = BeautifulSoup(html, 'html.parser'). Find elements: soup.find('tag'), soup.find_all('tag'), soup.select('CSS selector'). Get text: el.get_text(). Get attributes: el['href']. Respect robots.txt and rate limit your requests.",
      docs: [
        {
          label: "BeautifulSoup Docs",
          url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
        },
        {
          label: "requests Docs",
          url: "https://requests.readthedocs.io/",
        },
      ],
      partQuiz: [
        {
          question: "Which library fetches web pages in Python?",
          options: ["fetch", "requests", "urllib2 only", "httpget"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does soup.find_all('a') return?",
          options: [
            "First anchor tag",
            "All anchor tags as a list",
            "Anchor text",
            "All hrefs",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "How do you get the text content of a BeautifulSoup element?",
          options: ["el.innerText", "el.get_text()", "el.text()", "el.content"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does response.status_code == 200 mean?",
          options: ["Error", "Redirect", "Success", "Not found"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is robots.txt?",
          options: [
            "A Python library",
            "A file that tells scrapers which pages to avoid",
            "A sitemap format",
            "An HTML template",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-web-p2s1",
          title: "requests Library",
          content:
            "requests makes HTTP calls simple. GET: requests.get(url, params={}, headers={}). POST: requests.post(url, json={}). Response: .status_code, .text, .json(), .content (bytes). Use sessions for persistent cookies: with requests.Session() as s. Handle timeouts: get(url, timeout=5).",
          codeExample:
            "import requests\n\nresponse = requests.get('https://api.github.com/users/octocat')\nprint(response.status_code)  # 200\ndata = response.json()\nprint(data['name'])  # The Octocat\n\n# With params\nres = requests.get('https://httpbin.org/get', params={'q': 'python'})\nprint(res.json()['args'])  # {'q': 'python'}",
          video: { youtubeId: "XVv6mJpFOb0", title: "Python requests library" },
        },
        {
          id: "py-web-p2s2",
          title: "BeautifulSoup Parsing",
          content:
            "BeautifulSoup parses HTML and XML. Navigators: find(tag), find_all(tag), select(css_selector). Attributes: tag['href'], tag.get('class'). Text: tag.get_text(strip=True). Navigate: tag.parent, tag.children, tag.next_sibling. Use 'html.parser' (built-in) or 'lxml' (faster, pip install lxml).",
          codeExample:
            "from bs4 import BeautifulSoup\nimport requests\n\nhtml = requests.get('https://books.toscrape.com/').text\nsoup = BeautifulSoup(html, 'html.parser')\n\n# All book titles\nfor title in soup.select('article.product_pod h3 a'):\n    print(title.get('title'))\n\n# Specific element\nh1 = soup.find('h1')\nprint(h1.get_text(strip=True))",
          video: { youtubeId: "XVv6mJpFOb0", title: "BeautifulSoup Tutorial" },
          flowchart: "loop",
        },
        {
          id: "py-web-p2s3",
          title: "Scraping Best Practices",
          content:
            "Always check robots.txt before scraping. Add delays between requests (time.sleep). Set a User-Agent header. Handle errors: check status code, use try/except. Save data to CSV or JSON with pandas or the csv module. For JS-rendered pages, use Selenium or Playwright instead of requests.",
          codeExample:
            "import requests, time, csv\nfrom bs4 import BeautifulSoup\n\nHEADERS = {'User-Agent': 'MyBot/1.0'}\n\ndef scrape_page(url):\n    try:\n        res = requests.get(url, headers=HEADERS, timeout=5)\n        res.raise_for_status()  # raises on 4xx/5xx\n        return BeautifulSoup(res.text, 'html.parser')\n    except requests.RequestException as e:\n        print(f'Error: {e}')\n        return None",
          video: {
            youtubeId: "XVv6mJpFOb0",
            title: "Web Scraping Best Practices",
          },
        },
      ],
    },
    {
      id: "py-web-p3",
      title: "Part 3: Automation with Selenium & Scripts",
      description: "Browser automation with Selenium and building CLI scripts.",
      videoUrl: "https://www.youtube.com/watch?v=lTypMlU2HgU",
      notes:
        "AUTOMATION\n\nSelenium controls a browser programmatically: click, type, navigate. Use WebDriver (ChromeDriver). Find elements: find_element(By.ID, 'id'), By.CSS_SELECTOR, By.XPATH. Explicit waits: WebDriverWait + EC.presence_of_element_located. CLI scripts: argparse for argument parsing. Schedule tasks with schedule library or cron.",
      docs: [
        {
          label: "Selenium Python Docs",
          url: "https://selenium-python.readthedocs.io/",
        },
        {
          label: "Python argparse Docs",
          url: "https://docs.python.org/3/library/argparse.html",
        },
      ],
      partQuiz: [
        {
          question: "What does Selenium automate?",
          options: [
            "Python scripts",
            "Browser interactions",
            "File operations",
            "APIs",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which module creates CLI argument parsers?",
          options: ["sys", "argparse", "click-only", "optparse-only"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is WebDriverWait used for?",
          options: [
            "Pausing execution",
            "Waiting for elements to appear before interacting",
            "Slowing down automation",
            "Loading drivers",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does driver.find_element(By.ID, 'btn') do?",
          options: [
            "Creates a button",
            "Finds an element with id='btn'",
            "Clicks a button",
            "Removes an element",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which is the Python standard library for CLI args?",
          options: ["click", "fire", "argparse", "docopt"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "py-web-p3s1",
          title: "Selenium Basics",
          content:
            "Install: pip install selenium. Use webdriver-manager to auto-download drivers. Open browser: driver = webdriver.Chrome(). Navigate: driver.get(url). Interact: find_element, click(), send_keys(). Always close: driver.quit(). Use headless mode for servers.",
          codeExample:
            "from selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.chrome.options import Options\n\noptions = Options()\noptions.add_argument('--headless')  # no UI\ndriver = webdriver.Chrome(options=options)\n\ndriver.get('https://example.com')\ntitle = driver.find_element(By.TAG_NAME, 'h1')\nprint(title.text)  # Example Domain\ndriver.quit()",
          video: {
            youtubeId: "lTypMlU2HgU",
            title: "Selenium Python Tutorial",
          },
        },
        {
          id: "py-web-p3s2",
          title: "WebDriverWait & Form Automation",
          content:
            "Explicit waits are essential — the page may not be ready instantly. WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, 'form'))). Fill forms with send_keys(). Submit with .submit() or click a button. Take screenshots: driver.save_screenshot('screen.png').",
          codeExample:
            "from selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nwait = WebDriverWait(driver, 10)\n\n# Wait for element\ninput_box = wait.until(EC.presence_of_element_located((By.NAME, 'q')))\ninput_box.send_keys('Python automation')\ninput_box.submit()\n\n# Wait for results\nwait.until(EC.title_contains('Python'))\nprint(driver.title)",
          video: { youtubeId: "lTypMlU2HgU", title: "Selenium Waits & Forms" },
          flowchart: "loop",
        },
        {
          id: "py-web-p3s3",
          title: "CLI Scripts with argparse",
          content:
            "argparse turns Python scripts into proper CLI tools. Define arguments with add_argument(). Positional args (required) vs optional (--flag). Use choices=[] to restrict values, type=int to auto-convert. Access: args = parser.parse_args(), then args.name.",
          codeExample:
            "import argparse\n\nparser = argparse.ArgumentParser(description='Image resizer')\nparser.add_argument('input', help='Input file path')\nparser.add_argument('--width', type=int, default=800)\nparser.add_argument('--format', choices=['jpg','png','webp'], default='jpg')\n\nargs = parser.parse_args()\nprint(f'Resizing {args.input} to {args.width}px as .{args.format}')",
          video: { youtubeId: "lTypMlU2HgU", title: "Python argparse CLI" },
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What HTTP status code means 'Not Found'?",
      options: ["200", "201", "404", "500"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which method in requests sends a POST request?",
      options: [
        "requests.post()",
        "requests.send()",
        "requests.submit()",
        "requests.create()",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What does soup.select('p.intro') match?",
      options: [
        "All p tags",
        "p tags with class 'intro'",
        "The first p only",
        "All elements with class intro",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is Pydantic used for in FastAPI?",
      options: [
        "Database ORM",
        "Data validation and serialization via type hints",
        "Routing",
        "Authentication",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "How do you run a FastAPI app?",
      options: [
        "python app.py",
        "flask run",
        "uvicorn main:app --reload",
        "fastapi start",
      ],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "py-web-t1",
      title: "Flask Todo API",
      description:
        "Build a Flask REST API with GET /todos (list all), POST /todos (create), DELETE /todos/<id> (remove). Store todos in a list. Return JSON responses with correct status codes.",
      starterCode:
        "from flask import Flask, jsonify, request\n\napp = Flask(__name__)\ntodos = []\n\n@app.route('/todos', methods=['GET'])\ndef get_todos():\n    pass\n\n@app.route('/todos', methods=['POST'])\ndef add_todo():\n    pass\n\n@app.route('/todos/<int:idx>', methods=['DELETE'])\ndef delete_todo(idx):\n    pass\n\nif __name__ == '__main__':\n    app.run(debug=True)",
      hints: [
        "Return jsonify(todos) for GET",
        "request.json gets the POST body",
        "Return '', 204 for successful DELETE",
      ],
    },
    {
      id: "py-web-t2",
      title: "Scrape Book Titles",
      description:
        "Scrape the first 5 book titles and prices from https://books.toscrape.com/ using requests and BeautifulSoup. Print them as 'Title: $Price'.",
      starterCode:
        "import requests\nfrom bs4 import BeautifulSoup\n\nurl = 'https://books.toscrape.com/'\n\n# Fetch and parse the page\n# Find all article.product_pod elements\n# Extract title and price from each",
      hints: [
        "soup.select('article.product_pod') finds all books",
        "Title: el.find('h3').find('a')['title']",
        "Price: el.find('p', class_='price_color').get_text()",
      ],
    },
    {
      id: "py-web-t3",
      title: "CLI Backup Script",
      description:
        "Write a CLI script using argparse with arguments: --source (dir to backup), --dest (destination dir), and --ext (file extension to copy, e.g. 'py'). Copy matching files using shutil.",
      starterCode:
        "import argparse\nimport shutil\nfrom pathlib import Path\n\nparser = argparse.ArgumentParser(description='File backup script')\n# Add --source, --dest, --ext arguments\n\nargs = parser.parse_args()\n\n# Copy files matching the extension from source to dest",
      hints: [
        "Use add_argument('--source', required=True)",
        "Path(source).glob(f'*.{ext}') finds matching files",
        "shutil.copy(src, dest) copies a file",
      ],
    },
  ] as CTestProblem[],
};

// ─── Exported Course ───────────────────────────────────────────────────────────

export const PYTHON_DEVELOPER_COURSE: CModule[] = [
  py_module0,
  py_module1,
  py_module2,
  py_module3,
  py_module4,
  py_module5,
];

export const PYTHON_DEVELOPER_ROADMAP_ENTRY = {
  id: "python-developer-course",
  title: "Python Developer",
  icon: "🐍",
  color: "from-yellow-500/20 to-green-500/10",
  tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  description:
    "Python basics, OOP, data structures, web APIs & automation — 5 structured modules to job-ready.",
  level: "Beginner to Advanced",
  isCourse: true as const,
  topics: [],
};

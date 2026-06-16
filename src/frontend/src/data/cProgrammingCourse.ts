import type { DocLink } from "./roadmaps";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CQuizQuestion {
  question: string;
  options: string[];
  correct: number;
  xp: number;
}

export interface CQuizProgrammingQuestion {
  id: string;
  question: string;
  description: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
  xp: number;
}

export interface CTestProblem {
  id: string;
  title: string;
  description: string;
  starterCode: string;
  expectedOutput?: string;
  hints: string[];
}

export interface CProgrammingQuestion {
  title: string;
  description: string;
  starterCode: string;
  hints: string[];
  sampleInput?: string;
  sampleOutput?: string;
}

export interface CSubsection {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  programmingQuestion?: CProgrammingQuestion;
  video?: { youtubeId: string; title: string };
  flowchart?: string;
}

export interface CPart {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  notes: string;
  docs: DocLink[];
  partQuiz: CQuizQuestion[];
  partProgrammingQuestions?: CQuizProgrammingQuestion[];
  subsections?: CSubsection[];
  /** true = part teaches actual code writing; false = theory/concepts only, no programming quiz */
  hasCodingContent?: boolean;
}

export interface CModule {
  id: string;
  title: string;
  outcome: string;
  isLocked: boolean;
  parts: CPart[];
  moduleQuiz: CQuizQuestion[];
  moduleProgrammingQuestions?: CQuizProgrammingQuestion[];
  moduleTest: CTestProblem[];
}

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const module0: CModule = {
  id: "c-programming-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "c-programming-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Programming in C! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO PROGRAMMING IN C!

Hey there! I'm so excited to be your coding companion on this C programming journey! 💙 C is the grandfather of modern programming — once you understand it, every other language makes so much more sense. I'll be right here with you every step of the way, cheering you on!

COURSE OVERVIEW
C is one of the most powerful and foundational programming languages ever created. It runs the Linux kernel, embedded systems, game engines, and countless critical applications. Learning C teaches you how computers actually work — memory management, pointers, and low-level operations that most modern languages hide from you. This course takes you from zero to confident with a real, structured learning path.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write actual code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~35 hours
This is a comprehensive C programming course. Dedicate 1–2 hours per day and you'll be done in about 3–4 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist in the subsection below, then scroll down to Module 1 to begin your journey. Your companion will guide you through every lesson! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "c-programming-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this C Programming course:

1. Computer Basics — How computers work, memory, processor, I/O devices
2. C Syntax & I/O — Variables, data types, input/output, operators
3. Control Flow — Conditions, loops, switch statements
4. Arrays & Strings — Single & multidimensional arrays, string functions
5. Functions & Recursion — Function design, scope, recursive algorithms
6. Pointers & Memory — Pointer arithmetic, dynamic memory allocation
7. Structures & File I/O — Structs, unions, reading/writing files
8. Final Projects — Putting it all together with real C programs`,
          codeExample: "",
        },
        {
          id: "c-programming-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Hands-on programming tasks (20 XP each) in parts where you write actual C code

Theory-only parts (like "How a CPU works") do NOT have coding questions — only parts that teach you to write code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• There is no time limit on lessons — learn at your own pace
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "c-programming-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what C is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your C programming journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Introduction & Basics ─────────────────────────────────────────

const module1: CModule = {
  id: "c-intro",
  title: "Module 1: Introduction & Basics",
  outcome: "Develop Simple Algorithms for Arithmetic and Logical Problems.",
  isLocked: false,
  parts: [
    {
      id: "c-intro-p1",
      title: "Part 1: Computer System Components",
      description:
        "Memory, Processor, I/O Devices, Storage, OS, Assembler, Compiler, Interpreter, Loader and Linker.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=zOjov-2OZ0E",
      notes: `COMPUTER SYSTEM OVERVIEW
========================

A computer system consists of hardware and software working together to process information.

HARDWARE COMPONENTS
--------------------
• Memory (RAM): Volatile storage that holds data and instructions currently in use. Measured in GB. Faster access than disk.
• Processor (CPU): The brain of the computer. Executes instructions, performs arithmetic, logic and control operations. Clock speed in GHz.
• I/O Devices: Input (keyboard, mouse, scanner) send data to CPU. Output (monitor, printer, speaker) receive data from CPU.
• Storage: Non-volatile — HDD (magnetic, slower, cheap) or SSD (flash, faster, costlier). Holds OS, programs, and files permanently.
• Motherboard: Main circuit board connecting all components via buses.

SOFTWARE LAYERS
---------------
• Operating System (OS): Manages hardware resources, provides a user interface, and runs programs. Examples: Windows, Linux, macOS. Key functions: process management, memory management, file system, I/O management.

LANGUAGE PROCESSING TOOLS
--------------------------
• Assembler: Translates Assembly language (mnemonics like MOV, ADD) into machine code (binary). One-to-one translation.
• Compiler: Translates an entire high-level program (like C) into machine code in one pass. Output is an executable file. Errors shown after full compilation. Examples: GCC, Clang.
• Interpreter: Translates and executes code line-by-line at runtime. Slower but easier to debug. Examples: Python interpreter, JavaScript engines.
• Loader: Part of OS that loads an executable file from disk into RAM and prepares it for execution. Resolves addresses.
• Linker: Combines multiple object files (.o) and library files into a single executable. Resolves external symbol references (e.g., printf from libc).

COMPILATION PROCESS (C Program)
---------------------------------
Source Code (.c) → Preprocessor → Expanded Source → Compiler → Assembly Code (.s) → Assembler → Object Code (.o) → Linker → Executable

KEY DISTINCTION
---------------
• Compiler vs Interpreter: Compiler produces a standalone executable (faster execution). Interpreter needs to be present at runtime (slower, more portable).
• Loader vs Linker: Linker works at compile-time to combine files. Loader works at runtime to bring executable into memory.`,
      docs: [
        {
          label: "C Reference Manual (cppreference)",
          url: "https://en.cppreference.com/w/c",
        },
        {
          label: "GCC Online Documentation",
          url: "https://gcc.gnu.org/onlinedocs/",
        },
        {
          label: "How Computers Work – Khan Academy",
          url: "https://www.khanacademy.org/computing/computer-science/how-computers-work2",
        },
        {
          label: "Operating Systems Overview – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/introduction-of-operating-system-set-1/",
        },
      ],
      partQuiz: [
        {
          question:
            "Which component of a computer is responsible for executing instructions?",
          options: ["RAM", "Hard Disk", "CPU (Processor)", "Monitor"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What type of memory is RAM?",
          options: [
            "Non-volatile",
            "Permanent storage",
            "Volatile (loses data when powered off)",
            "Read-only",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does a Compiler do?",
          options: [
            "Executes code line by line",
            "Translates entire source code to machine code at once",
            "Connects object files into an executable",
            "Loads programs into memory",
          ],
          correct: 1,
          xp: 15,
        },
        {
          question:
            "Which tool combines multiple object files into one executable?",
          options: ["Compiler", "Assembler", "Interpreter", "Linker"],
          correct: 3,
          xp: 15,
        },
        {
          question: "What is the role of the Loader in a computer system?",
          options: [
            "Compiles source code",
            "Links object files",
            "Loads executable into RAM for execution",
            "Interprets scripts",
          ],
          correct: 2,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m1p1s1",
          title: "Memory",
          content:
            "Memory is where data and instructions are stored while a program runs. RAM (Random Access Memory) is volatile — it loses data when power is off. ROM (Read-Only Memory) stores firmware permanently. Cache memory is ultra-fast memory inside the CPU for frequently used data. Understanding memory types helps you write efficient programs that use storage wisely.",
          video: {
            youtubeId: "p3q5zWCw8J4",
            title: "Computer Memory Explained",
          },
          flowchart: "memory-hierarchy",
        },
        {
          id: "m1p1s2",
          title: "Processor (CPU)",
          content:
            "The CPU (Central Processing Unit) is the brain of a computer. It has three main parts: the ALU (Arithmetic Logic Unit) performs calculations, the Control Unit fetches and decodes instructions, and Registers are tiny ultra-fast storage inside the CPU. The clock speed (measured in GHz) determines how many operations the CPU can do per second. Modern CPUs have multiple cores to run tasks in parallel.",
          video: { youtubeId: "FZGugFqdr60", title: "CPU Processor Explained" },
          flowchart: "processor-flow",
        },
        {
          id: "m1p1s3",
          title: "I/O Devices",
          content:
            "Input devices let users send data to the computer — keyboard, mouse, microphone, and scanner are common examples. Output devices let the computer send information to the user — monitor, printer, and speakers are key examples. Some devices like touchscreens are both input and output. I/O devices are managed by device drivers that translate between hardware and the operating system.",
          video: {
            youtubeId: "ewp8-7yZfds",
            title: "Input & Output Devices Explained",
          },
          flowchart: "io-device-flow",
        },
        {
          id: "m1p1s4",
          title: "Storage",
          content:
            "Storage holds data permanently, unlike RAM. Hard Disk Drives (HDD) use spinning magnetic platters and are slower but cheaper. Solid State Drives (SSD) use flash memory, are faster, and more durable. Primary storage (RAM) is directly accessible by the CPU; secondary storage (HDD/SSD) requires data to be loaded into RAM first. USB drives and CDs are removable secondary storage devices.",
          video: {
            youtubeId: "wteUW2sL7bc",
            title: "Storage Devices in Computer Science",
          },
          flowchart: "storage-hierarchy",
        },
        {
          id: "m1p1s5",
          title: "Operating System",
          content:
            "The Operating System (OS) is software that manages all computer hardware and software resources. The kernel is the core of the OS — it handles process management (running programs), memory management (allocating RAM), and the file system (organizing data on disk). Examples include Windows, Linux, and macOS. When you write a C program, the OS loads it into memory and provides system calls for I/O operations.",
          video: {
            youtubeId: "9GDX-IyZ_C8",
            title: "Operating System Introduction",
          },
          flowchart: "os-flow",
        },
        {
          id: "m1p1s6",
          title: "Assembler",
          content:
            "An assembler converts assembly language code into machine code (binary). Assembly language uses mnemonics like MOV, ADD, and JMP that correspond directly to CPU instructions. Each CPU architecture has its own assembly language. Assembly is rarely used today but understanding it helps you appreciate what happens below C. C compilers generate assembly as an intermediate step before producing machine code.",
          video: {
            youtubeId: "wA2oMonu7f4",
            title: "Compiler vs Interpreter vs Assembler",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "m1p1s7",
          title: "Compiler",
          content:
            "A compiler translates high-level source code (like C) into machine code in one complete pass. The compilation process has phases: Lexical Analysis (tokenizing), Syntax Analysis (parsing), Semantic Analysis (type checking), Intermediate Code Generation, Optimization, and Code Generation. The result is an executable file. GCC is the most popular C compiler. Compiled programs run faster than interpreted ones because translation happens before execution.",
          video: { youtubeId: "wA2oMonu7f4", title: "How Compilers Work" },
          flowchart: "compiler-flow",
        },
        {
          id: "m1p1s8",
          title: "Interpreter",
          content:
            "An interpreter translates and executes source code line by line, without producing a separate executable. Python and JavaScript use interpreters. The advantage is immediate execution and easier debugging — you see errors as the program runs. The disadvantage is slower execution compared to compiled code. C uses a compiler, not an interpreter, which is why C programs are very fast.",
          video: { youtubeId: "wA2oMonu7f4", title: "Compiler vs Interpreter" },
        },
        {
          id: "m1p1s9",
          title: "Loader",
          content:
            "The loader is a part of the OS that loads an executable program into memory so it can run. When you type ./program in the terminal, the loader reads the executable file, allocates memory, copies the code and data into RAM, and transfers control to the program's entry point (main function in C). Loaders handle relocatable code — adjusting memory addresses to match where the program is actually loaded.",
          video: {
            youtubeId: "wA2oMonu7f4",
            title: "Loader and Linker Explained",
          },
          flowchart: "loader-linker-flow",
        },
        {
          id: "m1p1s10",
          title: "Linker",
          content:
            "The linker combines multiple object files (.o files) and library files into a single executable. When you include stdio.h and use printf(), the linker connects your object code to the compiled printf() code from the C standard library. Static linking includes library code directly in your executable. Dynamic linking keeps libraries separate and links at runtime, resulting in a smaller executable that shares libraries between programs.",
          video: { youtubeId: "wA2oMonu7f4", title: "Linker and Loader in C" },
        },
      ],
    },
    {
      id: "c-intro-p2",
      title: "Part 2: Algorithm Representation",
      description:
        "Flowcharts, Pseudo Code, Source Code, and the journey from idea to program.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=6hfOvs8pY1k",
      notes: `ALGORITHMS AND THEIR REPRESENTATION
=====================================

WHAT IS AN ALGORITHM?
---------------------
An algorithm is a finite, ordered set of well-defined instructions to solve a problem or accomplish a task. Properties:
• Finiteness: Must terminate after a finite number of steps.
• Definiteness: Each step must be precise and unambiguous.
• Input: Zero or more inputs.
• Output: One or more outputs.
• Effectiveness: Each step must be basic enough to be done in finite time.

FLOWCHARTS
-----------
A visual diagram using standardized symbols:
• Oval/Rounded Rectangle: Start / End (Terminal)
• Rectangle: Process (calculation, assignment)
• Diamond: Decision (Yes/No or True/False branch)
• Parallelogram: Input / Output
• Arrow: Flow of control

Example — Find larger of two numbers:
  START → Input A, B → Is A > B? → Yes: Print A → END
                                 → No:  Print B → END

PSEUDOCODE
-----------
A human-readable description of an algorithm using plain English mixed with programming constructs. No strict syntax rules.

Example:
  BEGIN
    READ num1, num2
    IF num1 > num2 THEN
      PRINT num1, "is larger"
    ELSE
      PRINT num2, "is larger"
    END IF
  END

FROM ALGORITHM TO SOURCE CODE
------------------------------
1. Understand the problem clearly.
2. Design the algorithm (pseudocode or flowchart).
3. Write source code in a programming language (C, Python, etc.).
4. Compile/run and test.
5. Debug if output is incorrect.

Source code is the human-readable form of a program written in a language like C. It is then compiled into machine code the computer can execute.

GOOD ALGORITHM CHARACTERISTICS
--------------------------------
• Correctness — produces correct output for all valid inputs.
• Efficiency — uses minimal time and memory.
• Clarity — easy to understand and maintain.`,
      docs: [
        {
          label: "Algorithm – Wikipedia",
          url: "https://en.wikipedia.org/wiki/Algorithm",
        },
        {
          label: "Flowchart Guide – Lucidchart",
          url: "https://www.lucidchart.com/pages/what-is-a-flowchart-tutorial",
        },
        {
          label: "Pseudocode – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/",
        },
      ],
      partQuiz: [
        {
          question: "Which shape represents a Decision in a flowchart?",
          options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which shape represents Input/Output in a flowchart?",
          options: ["Rectangle", "Diamond", "Oval", "Parallelogram"],
          correct: 3,
          xp: 10,
        },
        {
          question: "Pseudocode is:",
          options: [
            "Machine-readable code",
            "A strict programming language",
            "A human-readable algorithm description without strict syntax",
            "Binary instructions",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is NOT a required property of an algorithm?",
          options: [
            "Finiteness",
            "Definiteness",
            "Use of loops",
            "At least one output",
          ],
          correct: 2,
          xp: 15,
        },
        {
          question:
            "What comes immediately after writing pseudocode in the development process?",
          options: [
            "Testing",
            "Writing source code",
            "Compilation",
            "Deployment",
          ],
          correct: 1,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m1p2s1",
          title: "What is an Algorithm",
          content:
            "An algorithm is a step-by-step procedure to solve a problem. A good algorithm must be finite (terminates), definite (each step is clear), and effective (feasible with available resources). Algorithms are independent of programming languages — you can implement the same algorithm in C, Python, or Java. Before writing code, designing a clear algorithm saves time and prevents logical errors.",
          video: {
            youtubeId: "6hfOvs8pY1k",
            title: "What is an Algorithm? Introduction",
          },
          flowchart: "algorithm-flow",
        },
        {
          id: "m1p2s2",
          title: "Flowchart",
          content:
            "A flowchart is a visual diagram of an algorithm using standard symbols. Ovals represent Start/End, Rectangles represent process steps, Diamonds represent decisions (yes/no), and Parallelograms represent input/output. Example: to find the maximum of two numbers A and B — Start, Input A and B, check if A is greater than B, if Yes print A otherwise print B, End.",
          video: {
            youtubeId: "yh53XNMvBd4",
            title: "Flowchart Programming Tutorial",
          },
          flowchart: "if-else",
        },
        {
          id: "m1p2s3",
          title: "Pseudo Code",
          content:
            "Pseudo code is an informal, human-readable description of an algorithm using simple English-like statements. It uses constructs like IF/ELSE, WHILE, FOR, INPUT, OUTPUT but is not tied to any specific language syntax. Example for sum of N numbers: INPUT N, SET sum=0, FOR i=1 TO N: sum = sum + i, PRINT sum. Pseudo code bridges the gap between algorithm design and actual programming.",
          video: {
            youtubeId: "Rg-fL7_bVbo",
            title: "Pseudocode Tutorial for Beginners",
          },
          flowchart: "loop",
        },
        {
          id: "m1p2s4",
          title: "From Algorithm to Program",
          content:
            "Translating an algorithm to a C program involves mapping each algorithmic step to C syntax. A PRINT step becomes printf(), an INPUT step becomes scanf(), a loop becomes for/while, and a decision becomes if/else. The key is understanding the algorithm completely before translating. Writing clean, readable code that mirrors your algorithm makes debugging and maintenance much easier.",
          video: { youtubeId: "6hfOvs8pY1k", title: "From Algorithm to Code" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "c-intro-p3",
      title: "Part 3: Programming Basics in C",
      description:
        "Structure of a C program, standard I/O, fundamental data types, variables, memory, and storage classes.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
      notes: `BASICS OF C PROGRAMMING
========================

STRUCTURE OF A C PROGRAM
--------------------------
#include <stdio.h>      // Preprocessor directive — includes standard I/O library

int main() {            // main() is the entry point of every C program
    printf("Hello!");   // Statement — prints to console
    return 0;           // Returns 0 to OS (0 = success)
}

SYNTAX vs LOGICAL ERRORS
--------------------------
• Syntax Error: Violation of grammar rules — caught by compiler. Example: missing semicolon, undeclared variable.
• Logical Error: Program compiles and runs but produces wrong result. Must be found by testing.
• Object Code: Machine code produced by compiler from source code (.o file).
• Executable Code: Final runnable file after linking all object files.

STANDARD I/O IN C
------------------
• printf(): Output — printf("Sum = %d\\n", sum);
• scanf(): Input  — scanf("%d", &num);
Format specifiers: %d (int), %f (float), %c (char), %s (string), %lf (double)
Escape sequences: \\n (newline), \\t (tab), \\\\ (backslash)

FUNDAMENTAL DATA TYPES
-----------------------
| Type    | Size     | Range                    | Format |
|---------|----------|--------------------------|--------|
| int     | 4 bytes  | -2,147,483,648 to +2,147,483,647 | %d |
| float   | 4 bytes  | ~±3.4 × 10^38 (6 digits)   | %f |
| double  | 8 bytes  | ~±1.7 × 10^308 (15 digits) | %lf|
| char    | 1 byte   | -128 to 127 (ASCII)      | %c |
| void    | —        | No value / no return     | — |

VARIABLES AND MEMORY
---------------------
• A variable is a named memory location that stores a value.
• Declaration: int age;  (reserves memory)
• Initialization: int age = 20;  (reserves + assigns value)
• Rule: Must be declared before use. Names: letters, digits, underscore; cannot start with digit.

STORAGE CLASSES
----------------
• auto: Default for local variables. Created when block is entered, destroyed when exited.
• register: Hint to compiler to store in CPU register (faster access). Cannot take address.
• static: Retains value between function calls. Initialized only once.
• extern: Declares a variable defined in another file. Used for global scope across files.

Example:
  void counter() {
      static int count = 0;  // retains value across calls
      count++;
      printf("%d\\n", count);
  }`,
      docs: [
        {
          label: "C Data Types – cppreference",
          url: "https://en.cppreference.com/w/c/language/type",
        },
        {
          label: "C Storage Classes – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/storage-classes-in-c/",
        },
        {
          label: "C Programming Tutorial – Tutorialspoint",
          url: "https://www.tutorialspoint.com/cprogramming/index.htm",
        },
        {
          label: "W3Schools: C Variables",
          url: "https://www.w3schools.com/c/c_variables.php",
        },
      ],
      partQuiz: [
        {
          question: "What is the entry point function of every C program?",
          options: ["start()", "begin()", "main()", "run()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which format specifier is used for a float in printf()?",
          options: ["%d", "%c", "%s", "%f"],
          correct: 3,
          xp: 10,
        },
        {
          question: "A variable declared with 'static' inside a function:",
          options: [
            "Is accessible globally",
            "Loses its value after function returns",
            "Retains its value between calls",
            "Cannot be modified",
          ],
          correct: 2,
          xp: 15,
        },
        {
          question: "What does the 'extern' storage class indicate?",
          options: [
            "Variable stored in CPU register",
            "Variable defined in another file",
            "Variable with no value",
            "Local variable",
          ],
          correct: 1,
          xp: 15,
        },
        {
          question: "Which data type occupies 1 byte of memory in C?",
          options: ["int", "float", "double", "char"],
          correct: 3,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m1p3s1",
          title: "Structure of a C Program",
          content:
            "Every C program has a standard structure. The preprocessor directives (#include) come first — they tell the compiler to include header files like stdio.h for I/O functions. The main() function is the entry point — execution always starts here. Inside main(), you write statements ending with semicolons. The return 0 statement signals successful program completion to the OS. Comments (// single-line, /* multi-line */) make code readable.",
          codeExample:
            "#include <stdio.h>\n\n// This is a comment\nint main() {\n    // Program statements go here\n    return 0; // 0 means success\n}",
          video: {
            youtubeId: "Bozz3p-HHSA",
            title: "Structure of a C Program",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "m1p3s2",
          title: "First C Program — Hello World",
          content:
            "The classic first program prints a message to the screen. printf() is the print function from stdio.h. The string argument goes in double quotes. \\n is the newline escape character — it moves the cursor to the next line. Every statement in C ends with a semicolon. Forgetting a semicolon is one of the most common beginner mistakes.",
          codeExample:
            '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
          programmingQuestion: {
            title: "Write your first C program",
            description:
              "Write a C program that prints 'Hello, Code & Crush!' to the screen.",
            starterCode:
              "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}",
            hints: [
              "Use printf() to print text",
              "String literals go inside double quotes",
              "Add \\n at the end for a newline",
            ],
            sampleOutput: "Hello, Code & Crush!",
          },
          video: {
            youtubeId: "Bozz3p-HHSA",
            title: "Hello World in C — First C Program",
          },
        },
        {
          id: "m1p3s3",
          title: "Syntax vs Logical Errors",
          content:
            "A syntax error is when you break the grammatical rules of C — missing semicolons, mismatched braces, undefined variables. The compiler catches these and the program will not compile. A logical error is when the program compiles and runs but produces the wrong answer. Logical errors are harder to find because the compiler does not report them. Testing with known inputs helps catch logical errors.",
          video: {
            youtubeId: "Bozz3p-HHSA",
            title: "Syntax vs Logical Errors in C",
          },
        },
        {
          id: "m1p3s4",
          title: "Object Code and Executable Code",
          content:
            "When you compile a C file, the compiler first produces an object file (.o) containing machine code but with unresolved references to library functions. The linker then combines the object file with library code to produce the final executable. Understanding this process helps when dealing with compilation errors vs linker errors.",
          video: {
            youtubeId: "Bozz3p-HHSA",
            title: "Compilation Process in C",
          },
        },
        {
          id: "m1p3s5",
          title: "Components of C Language",
          content:
            "C programs are built from: Keywords (reserved words like int, if, while, return — cannot be used as variable names), Identifiers (names you choose for variables and functions), Constants (fixed values like 42 or 3.14), Operators (+, -, *, /, == etc.), and Separators (semicolons, braces, commas). C is case-sensitive — int, Int, and INT are three different things.",
          video: {
            youtubeId: "Bozz3p-HHSA",
            title: "Components of C Language",
          },
        },
        {
          id: "m1p3s6",
          title: "Standard I/O in C",
          content:
            "printf() outputs formatted text to the screen. scanf() reads formatted input from the keyboard. Format specifiers tell these functions what type of data to handle: %d for integers, %f for floats, %c for characters, %s for strings. In scanf(), variable addresses are passed using the & operator. Always match the format specifier to the variable type.",
          codeExample:
            '#include <stdio.h>\n\nint main() {\n    int age;\n    printf("Enter your age: ");\n    scanf("%d", &age);\n    printf("You are %d years old\\n", age);\n    return 0;\n}',
          programmingQuestion: {
            title: "Read and print a number",
            description:
              "Write a C program that reads an integer from the user and prints it back in the format: You entered: X",
            starterCode:
              "#include <stdio.h>\n\nint main() {\n    int num;\n    // Read an integer\n    \n    // Print it back\n    \n    return 0;\n}",
            hints: [
              'Use scanf("%d", &num) to read an integer',
              "Use printf() with %d format specifier",
              'The format should be: printf("You entered: %d\\n", num)',
            ],
            sampleInput: "42",
            sampleOutput: "You entered: 42",
          },
          video: {
            youtubeId: "Bozz3p-HHSA",
            title: "Standard I/O in C: printf and scanf",
          },
        },
        {
          id: "m1p3s7",
          title: "Fundamental Data Types",
          content:
            "C provides these built-in data types: int (4 bytes, whole numbers), float (4 bytes, decimal numbers), double (8 bytes, higher precision decimals), char (1 byte, single character), void (no value). Use int for counting, float/double for measurements, char for single characters. Always choose the smallest type that fits your data to save memory.",
          codeExample:
            "int count = 10;\nfloat price = 9.99f;\ndouble pi = 3.14159265358979;\nchar grade = 'A';\nprintf(\"%d %.2f %.5f %c\\n\", count, price, pi, grade);",
          programmingQuestion: {
            title: "Declare and print different data types",
            description:
              "Declare variables of types int, float, and char. Assign them values and print each one with an appropriate label.",
            starterCode:
              "#include <stdio.h>\n\nint main() {\n    // Declare an int named age with value 20\n    \n    // Declare a float named gpa with value 3.75\n    \n    // Declare a char named grade with value A\n    \n    // Print all three\n    \n    return 0;\n}",
            hints: [
              "Use int, float, char keywords to declare",
              "Use %d for int, %f for float, %c for char in printf",
              "Float literals can be written as 3.75f",
            ],
            sampleOutput: "Age: 20\nGPA: 3.75\nGrade: A",
          },
          video: {
            youtubeId: "AJi4nnNvePQ",
            title: "Data Types in C Explained",
          },
          flowchart: "data-types-hierarchy",
        },
        {
          id: "m1p3s8",
          title: "Variables and Memory Locations",
          content:
            "A variable is a named location in memory that stores a value. Declaration reserves memory. Initialization sets the initial value. Uninitialized variables in C contain garbage values — always initialize before use. The & operator gives you the memory address of a variable. Variable names must start with a letter or underscore and cannot be keywords.",
          codeExample:
            '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("Value: %d\\n", x);\n    printf("Address: %p\\n", (void*)&x);\n    x = 20;\n    printf("New value: %d\\n", x);\n    return 0;\n}',
          programmingQuestion: {
            title: "Swap two variables",
            description:
              "Write a C program that reads two integers, swaps their values using a temporary variable, and prints them after swapping.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int a, b, temp;\n    printf("Enter two numbers: ");\n    scanf("%d %d", &a, &b);\n    // Swap a and b using temp\n    \n    printf("After swap: a=%d, b=%d\\n", a, b);\n    return 0;\n}',
            hints: [
              "Store a in temp: temp = a",
              "Then set a = b",
              "Then set b = temp",
            ],
            sampleInput: "5 10",
            sampleOutput: "After swap: a=10, b=5",
          },
          video: {
            youtubeId: "dJNFqa8nFRY",
            title: "Variables and Memory in C",
          },
          flowchart: "variable-lifecycle",
        },
        {
          id: "m1p3s9",
          title: "Storage Classes",
          content:
            "Storage classes define the scope, lifetime, and visibility of variables. auto (default for local variables) lives only inside the function. register is stored in CPU register for speed. static persists between function calls and is initialized once. extern declares a variable defined elsewhere. Understanding storage classes is key to managing variable lifetimes in larger programs.",
          video: { youtubeId: "Bozz3p-HHSA", title: "Storage Classes in C" },
          flowchart: "storage-classes-flow",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which tool translates Assembly language into machine code?",
      options: ["Compiler", "Interpreter", "Assembler", "Linker"],
      correct: 2,
      xp: 15,
    },
    {
      question: "In a flowchart, which symbol is used for Start/End?",
      options: ["Rectangle", "Diamond", "Parallelogram", "Oval"],
      correct: 3,
      xp: 10,
    },
    {
      question: "What is the correct way to read an integer in C?",
      options: [
        "scanf('%d', num)",
        'scanf("%d", num)',
        'scanf("%d", &num)',
        'input("%d", &num)',
      ],
      correct: 2,
      xp: 15,
    },
    {
      question:
        "Which storage class retains a local variable's value between function calls?",
      options: ["auto", "register", "extern", "static"],
      correct: 3,
      xp: 15,
    },
    {
      question: "A syntax error in C is detected by:",
      options: [
        "The programmer during review",
        "The OS at runtime",
        "The compiler during compilation",
        "The linker",
      ],
      correct: 2,
      xp: 10,
    },
  ],
  moduleTest: [
    {
      id: "c-intro-t1",
      title: "Hello World",
      description:
        "Write a complete C program that prints 'Hello, World!' to the console. Your program must include the necessary header file and have the correct main function structure.",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}",
      expectedOutput: "Hello, World!",
      hints: [
        "Use printf() function to print text to the console.",
        "Don't forget to include the <stdio.h> header at the top.",
        "The string should be exactly 'Hello, World!' followed by a newline character \\n.",
      ],
    },
    {
      id: "c-intro-t2",
      title: "Sum of Two Numbers",
      description:
        "Write a C program that reads two integers from the user and prints their sum. Use scanf() to read input and printf() to display the result.",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int a, b, sum;\n    // Read two integers from user\n    \n    // Calculate sum\n    \n    // Print result\n    \n    return 0;\n}",
      expectedOutput: "Enter two numbers: Sum = <result>",
      hints: [
        'Use scanf("%d %d", &a, &b) to read two integers.',
        "Calculate sum as: sum = a + b;",
        'Use printf("Sum = %d\\n", sum) to display the result.',
      ],
    },
    {
      id: "c-intro-t3",
      title: "Temperature Conversion",
      description:
        "Write a C program that reads a temperature in Celsius and converts it to Fahrenheit. Formula: F = (C × 9/5) + 32. Use float data type for accuracy.",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    float celsius, fahrenheit;\n    // Read Celsius temperature\n    \n    // Convert to Fahrenheit using formula: F = (C * 9/5) + 32\n    \n    // Print result with 2 decimal places\n    \n    return 0;\n}",
      expectedOutput: "Temperature in Fahrenheit: <result>",
      hints: [
        'Use scanf("%f", &celsius) to read a float value.',
        "The conversion formula is: fahrenheit = (celsius * 9.0/5.0) + 32;",
        'Use printf("%.2f\\n", fahrenheit) to print with 2 decimal places.',
      ],
    },
  ],
};

// ─── Module 2: Operators & Control Flow ──────────────────────────────────────

const module2: CModule = {
  id: "c-operators",
  title: "Module 2: Operators & Control Flow",
  outcome: "Apply loop, decision making constructs to solve a given problem.",
  isLocked: true,
  parts: [
    {
      id: "c-ops-p1",
      title: "Part 1: Arithmetic Expressions & Operators",
      description:
        "Operators, Precedence, Type Conversion, Bit Operations, Assignment Operators.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=8-lOHGMmgqE",
      notes: `OPERATORS IN C
===============

ARITHMETIC OPERATORS
---------------------
+  Addition        a + b
-  Subtraction     a - b
*  Multiplication  a * b
/  Division        a / b  (integer division if both operands are int)
%  Modulo          a % b  (remainder)

Example: 7 / 2 = 3 (int), 7.0 / 2 = 3.5 (float), 7 % 2 = 1

RELATIONAL OPERATORS
---------------------
>   Greater than       ==  Equal to
<   Less than          !=  Not equal to
>=  Greater or equal   <=  Less or equal
Returns 1 (true) or 0 (false)

LOGICAL OPERATORS
------------------
&&  Logical AND — true only if both operands are true
||  Logical OR  — true if at least one operand is true
!   Logical NOT — reverses the truth value

Short-circuit evaluation: In A && B, if A is false, B is never evaluated.

BITWISE OPERATORS
------------------
&   Bitwise AND    |   Bitwise OR    ^   Bitwise XOR
~   Bitwise NOT    <<  Left shift    >>  Right shift

Example: 5 & 3 → 0101 & 0011 = 0001 = 1
         5 | 3 → 0101 | 0011 = 0111 = 7
         5 << 1 → multiply by 2 = 10

ASSIGNMENT OPERATORS
---------------------
=   Simple assignment      +=  Add and assign
-=  Subtract and assign    *=  Multiply and assign
/=  Divide and assign      %=  Modulo and assign

OPERATOR PRECEDENCE (High → Low)
----------------------------------
1. () Parentheses
2. ++, -- (unary), ! (NOT), ~ (bitwise NOT)
3. *, /, %
4. +, -
5. <<, >> (bit shift)
6. <, <=, >, >=
7. ==, !=
8. & (bitwise AND)
9. ^ (bitwise XOR)
10. | (bitwise OR)
11. && (logical AND)
12. || (logical OR)
13. ?: (ternary)
14. =, +=, -= etc. (assignment)

TYPE CONVERSION
----------------
• Implicit (automatic): int + float → float. Lower type promoted to higher.
• Explicit (cast): (float) a / b forces float division.

Example: int a = 5; float result = (float) a / 2; // result = 2.5`,
      docs: [
        {
          label: "C Operator Precedence – cppreference",
          url: "https://en.cppreference.com/w/c/language/operator_precedence",
        },
        {
          label: "Bitwise Operators in C – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/",
        },
        {
          label: "Type Casting in C – Tutorialspoint",
          url: "https://www.tutorialspoint.com/cprogramming/c_type_casting.htm",
        },
      ],
      partQuiz: [
        {
          question: "What is the result of 10 % 3 in C?",
          options: ["3", "1", "0", "4"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the result of 5 & 3 (bitwise AND)?",
          options: ["8", "7", "1", "2"],
          correct: 2,
          xp: 15,
        },
        {
          question: "Which operator has the highest precedence in C?",
          options: [
            "* (multiplication)",
            "= (assignment)",
            "() (parentheses)",
            "&& (logical AND)",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does the left shift operator << do?",
          options: [
            "Divides by 2",
            "Multiplies by 2 for each shift",
            "Finds remainder",
            "Performs bitwise OR",
          ],
          correct: 1,
          xp: 15,
        },
        {
          question: "In C, what is the result of 7 / 2 when both are integers?",
          options: ["3.5", "3", "4", "2"],
          correct: 1,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m2p1s1",
          title: "Arithmetic Operators",
          content:
            "C provides five arithmetic operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulus — remainder). Integer division truncates: 7/2 = 3, not 3.5. Use 7.0/2 for true division. The modulus operator only works with integers: 7%3 = 1.",
          codeExample:
            'int a=10, b=3;\nprintf("%d %d %d %d %d\\n", a+b, a-b, a*b, a/b, a%b);\n// Output: 13 7 30 3 1',
          programmingQuestion: {
            title: "Simple calculator",
            description:
              "Write a program that reads two integers and prints their sum, difference, product, quotient (integer division), and remainder.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Print sum, difference, product, quotient, remainder\n    \n    return 0;\n}',
            hints: [
              "Use +, -, *, /, % operators",
              "Print each result on a separate line",
              "Integer division truncates decimals",
            ],
            sampleInput: "10 3",
            sampleOutput:
              "Sum: 13\nDifference: 7\nProduct: 30\nQuotient: 3\nRemainder: 1",
          },
          video: {
            youtubeId: "8jLOx1hD3_o",
            title: "Arithmetic Operators in C",
          },
        },
        {
          id: "m2p1s2",
          title: "Relational Operators",
          content:
            "Relational operators compare two values and return 1 (true) or 0 (false). Operators: == (equal), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal). Common mistake: using = (assignment) instead of == (comparison) inside conditions.",
          video: {
            youtubeId: "8jLOx1hD3_o",
            title: "Relational Operators in C",
          },
          flowchart: "if-else",
        },
        {
          id: "m2p1s3",
          title: "Mixed Operands and Type Conversion",
          content:
            "When you mix int and float in an expression, C automatically converts the int to float — this is implicit type conversion. To force a conversion, use explicit casting: (float)7/2 gives 3.5. Casting to int truncates decimals: (int)3.9 = 3. Always use correct format specifiers in scanf.",
          video: { youtubeId: "8jLOx1hD3_o", title: "Type Conversion in C" },
          flowchart: "type-conversion-flow",
        },
        {
          id: "m2p1s4",
          title: "Logical Operators",
          content:
            "Logical operators combine boolean expressions. && (AND) is true only if both operands are true. || (OR) is true if at least one operand is true. ! (NOT) flips true to false. C uses short-circuit evaluation: in a && b, if a is false, b is never evaluated.",
          programmingQuestion: {
            title: "Check eligibility",
            description:
              "Write a program that reads age and marks. Print Eligible if age >= 18 AND marks >= 60, otherwise print Not Eligible.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int age, marks;\n    scanf("%d %d", &age, &marks);\n    // Check both conditions with &&\n    \n    return 0;\n}',
            hints: [
              "Use if with && to check both conditions",
              "age >= 18 && marks >= 60",
              "Use else for Not Eligible",
            ],
            sampleInput: "20 75",
            sampleOutput: "Eligible",
          },
          video: { youtubeId: "8jLOx1hD3_o", title: "Logical Operators in C" },
        },
        {
          id: "m2p1s5",
          title: "Bit Operations",
          content:
            "Bitwise operators work at the binary level. & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift). Example: 5 & 3 = 101 & 011 = 001 = 1. Left shift multiplies by 2: 1<<3 = 8. Right shift divides by 2: 8>>1 = 4.",
          video: { youtubeId: "8jLOx1hD3_o", title: "Bitwise Operators in C" },
          flowchart: "bitwise-ops-flow",
        },
        {
          id: "m2p1s6",
          title: "Assignment Operators",
          content:
            "The basic assignment operator = stores a value in a variable. Compound assignment operators: += (add and assign), -= (subtract), *= (multiply), /= (divide), %= (modulus). Example: x += 5 is the same as x = x + 5. These make code shorter and clearer.",
          video: {
            youtubeId: "8jLOx1hD3_o",
            title: "Assignment Operators in C",
          },
        },
        {
          id: "m2p1s7",
          title: "Operator Precedence and Associativity",
          content:
            "Operator precedence determines which operation executes first. Multiplication/division have higher precedence than addition/subtraction. Parentheses override precedence. Associativity determines order for equal-precedence operators: most are left-to-right, but assignment is right-to-left. Always use parentheses when in doubt.",
          programmingQuestion: {
            title: "Evaluate expressions",
            description:
              "Read three integers a, b, c and print: the result of a + b * c (no extra parentheses) and (a + b) * c.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    scanf("%d %d %d", &a, &b, &c);\n    // Print a + b * c\n    \n    // Print (a + b) * c\n    \n    return 0;\n}',
            hints: [
              "Multiplication happens before addition",
              "Use (a+b)*c to force addition first",
              "Use printf with %d",
            ],
            sampleInput: "2 3 4",
            sampleOutput: "Without parentheses: 14\nWith parentheses: 20",
          },
          video: {
            youtubeId: "8jLOx1hD3_o",
            title: "Operator Precedence in C",
          },
          flowchart: "operator-precedence-flow",
        },
      ],
    },
    {
      id: "c-ops-p2",
      title: "Part 2: Conditional Branching",
      description: "Applying if, else if, switch statements and nesting.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=lYFe2RJYHhI",
      notes: `CONDITIONAL BRANCHING IN C
===========================

IF STATEMENT
-------------
if (condition) {
    // executes if condition is true
}

IF-ELSE
--------
if (marks >= 50) {
    printf("Pass");
} else {
    printf("Fail");
}

IF-ELSE IF-ELSE (Ladder)
-------------------------
if (marks >= 90)      printf("Grade A");
else if (marks >= 75) printf("Grade B");
else if (marks >= 60) printf("Grade C");
else                  printf("Grade D");

NESTED IF
----------
if (age >= 18) {
    if (hasID) {
        printf("Entry allowed");
    } else {
        printf("Need ID");
    }
}

SWITCH STATEMENT
-----------------
switch (expression) {
    case value1:
        // code
        break;     // IMPORTANT: break prevents fall-through
    case value2:
        // code
        break;
    default:
        // runs if no case matches
}

Example — Day of week:
switch (day) {
    case 1: printf("Monday"); break;
    case 2: printf("Tuesday"); break;
    default: printf("Invalid day");
}

SWITCH vs IF-ELSE
------------------
• switch: Best for discrete integer/character values. Cleaner for many cases.
• if-else: Best for ranges, complex conditions, or non-integer comparisons.
• switch CANNOT use float or string comparisons.
• Fall-through: Without break, execution continues into next case.

TERNARY OPERATOR
-----------------
condition ? expr_if_true : expr_if_false;
Example: max = (a > b) ? a : b;`,
      docs: [
        {
          label: "C if Statement – cppreference",
          url: "https://en.cppreference.com/w/c/language/if",
        },
        {
          label: "C switch Statement – cppreference",
          url: "https://en.cppreference.com/w/c/language/switch",
        },
        {
          label: "Decision Making in C – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/decision-making-c-c-else-nested-else/",
        },
      ],
      partQuiz: [
        {
          question:
            "What happens in a switch statement if a 'break' is missing?",
          options: [
            "Compilation error",
            "Execution stops",
            "Fall-through to next case",
            "Default is executed",
          ],
          correct: 2,
          xp: 15,
        },
        {
          question:
            "Which of these cannot be used as a switch expression in C?",
          options: ["int", "char", "float", "short"],
          correct: 2,
          xp: 15,
        },
        {
          question:
            'What is the output: int x = 5; printf("%d", (x > 3) ? 10 : 20);',
          options: ["5", "3", "10", "20"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "Which clause in a switch statement executes when no case matches?",
          options: ["else", "otherwise", "default", "base"],
          correct: 2,
          xp: 10,
        },
        {
          question: "In an if-else if ladder, how many branches can execute?",
          options: [
            "All of them",
            "None",
            "Only the first matching one",
            "Only the last one",
          ],
          correct: 2,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m2p2s1",
          title: "if Statement",
          content:
            "The if statement executes a block of code only when a condition is true. The condition is any expression that evaluates to non-zero (true) or zero (false). Braces are optional for single statements but always recommended. The if block is skipped entirely when the condition is false.",
          codeExample: 'if (x > 0) {\n    printf("Positive\\n");\n}',
          programmingQuestion: {
            title: "Check positive number",
            description:
              "Write a program that reads an integer and prints Positive if it is greater than zero.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Print Positive if n > 0\n    \n    return 0;\n}',
            hints: [
              "Use if (n > 0)",
              "Use printf inside the if block",
              "No else needed",
            ],
            sampleInput: "5",
            sampleOutput: "Positive",
          },
          video: { youtubeId: "aPdCBVRRnbM", title: "if Statement in C" },
        },
        {
          id: "m2p2s2",
          title: "if-else Statement",
          content:
            "The if-else statement executes one block when the condition is true and another when it is false. The else block only runs when the if condition is false. You can chain multiple conditions using else if.",
          codeExample:
            'if (n % 2 == 0) {\n    printf("Even\\n");\n} else {\n    printf("Odd\\n");\n}',
          programmingQuestion: {
            title: "Even or Odd",
            description:
              "Write a program that reads an integer and prints Even or Odd.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    \n    return 0;\n}',
            hints: [
              "Use n % 2 to find the remainder",
              "If remainder is 0, it is even",
              "Use if-else to handle both cases",
            ],
            sampleInput: "7",
            sampleOutput: "Odd",
          },
          video: { youtubeId: "aPdCBVRRnbM", title: "if-else in C" },
          flowchart: "if-else",
        },
        {
          id: "m2p2s3",
          title: "Nested if-else",
          content:
            "You can nest if-else statements inside each other to handle multiple conditions. The if-else if-else ladder is common for categorization. Keep nesting shallow — deeply nested code is hard to read.",
          programmingQuestion: {
            title: "Grade calculator",
            description:
              "Read a score (0-100) and print the grade: A (>=90), B (>=80), C (>=70), D (>=60), F (below 60).",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int score;\n    scanf("%d", &score);\n    \n    return 0;\n}',
            hints: [
              "Start with if (score >= 90)",
              "Use else if for each lower grade",
              "Final else handles F",
            ],
            sampleInput: "85",
            sampleOutput: "Grade: B",
          },
          video: { youtubeId: "aPdCBVRRnbM", title: "Nested if-else in C" },
          flowchart: "nested-if-flow",
        },
        {
          id: "m2p2s4",
          title: "switch Statement",
          content:
            "The switch statement selects one of many code blocks based on the value of an expression. Each case needs a break statement — without it, execution falls through to the next case. The default case handles values not matched by any case.",
          codeExample:
            'switch (day) {\n    case 1: printf("Monday"); break;\n    case 2: printf("Tuesday"); break;\n    default: printf("Other day");\n}',
          programmingQuestion: {
            title: "Day of the week",
            description:
              "Read a number 1-7 and print the day name. Print Invalid for other numbers.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int day;\n    scanf("%d", &day);\n    \n    return 0;\n}',
            hints: [
              "Use switch(day) with case 1 through 7",
              "Add break after each case",
              "Use default for invalid input",
            ],
            sampleInput: "3",
            sampleOutput: "Wednesday",
          },
          video: { youtubeId: "aPdCBVRRnbM", title: "switch Statement in C" },
          flowchart: "switch-flow",
        },
      ],
    },
    {
      id: "c-ops-p3",
      title: "Part 3: Iteration and Loops",
      description:
        "while, do-while, for loops, break, continue, and goto statements.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=igCMjywN_qg",
      notes: `LOOPS IN C
===========

WHILE LOOP
-----------
Checks condition BEFORE executing body. May execute zero times.
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}
// Output: 1 2 3 4 5

DO-WHILE LOOP
--------------
Executes body FIRST, then checks condition. Always runs at least once.
int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);
// Use case: menu-driven programs (show menu first, then check choice)

FOR LOOP
---------
Best when number of iterations is known.
for (initialization; condition; update) {
    // body
}
for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}

MULTIPLE LOOP VARIABLES
------------------------
for (int i = 0, j = 10; i < j; i++, j--) {
    printf("i=%d j=%d\\n", i, j);
}

NESTED LOOPS
-------------
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d ", i * j);
    }
    printf("\\n");
}

LOOP CONTROL STATEMENTS
------------------------
• break: Immediately exits the innermost loop or switch.
  for (int i = 0; i < 10; i++) {
      if (i == 5) break;  // stops at 5
  }

• continue: Skips current iteration, jumps to next.
  for (int i = 0; i < 10; i++) {
      if (i % 2 == 0) continue;  // skips even numbers
      printf("%d ", i);  // prints odd: 1 3 5 7 9
  }

• goto: Jumps to a labelled statement. Avoid in structured code — makes code hard to read.
  goto label;
  ...
  label:
      printf("Jumped here");

WHEN TO USE WHICH LOOP
-----------------------
• for: Known iteration count (iterate 10 times, loop over array)
• while: Unknown count, check first (read until EOF)
• do-while: At least one execution guaranteed (menu, input validation)`,
      docs: [
        {
          label: "C while Statement – cppreference",
          url: "https://en.cppreference.com/w/c/language/while",
        },
        {
          label: "C for Statement – cppreference",
          url: "https://en.cppreference.com/w/c/language/for",
        },
        {
          label: "Loops in C – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/loops-in-c-and-cpp/",
        },
      ],
      partQuiz: [
        {
          question: "Which loop always executes its body at least once?",
          options: ["for", "while", "do-while", "goto"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does the 'continue' statement do inside a loop?",
          options: [
            "Exits the loop",
            "Restarts the program",
            "Skips the rest of current iteration and moves to next",
            "Breaks out of nested loops",
          ],
          correct: 2,
          xp: 15,
        },
        {
          question:
            'How many times does this execute: for(int i=0; i<0; i++) printf("Hi");',
          options: ["Infinite", "1", "0", "Error"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            'What is the output of: int i=0; while(i<3){i++;} printf("%d", i);',
          options: ["0", "2", "3", "4"],
          correct: 2,
          xp: 15,
        },
        {
          question:
            "Which statement transfers control unconditionally to a labelled statement?",
          options: ["break", "continue", "return", "goto"],
          correct: 3,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m2p3s1",
          title: "while Loop",
          content:
            "The while loop repeats a block of code as long as a condition is true. The condition is checked before each iteration. You must update the loop variable inside the loop to avoid an infinite loop.",
          codeExample:
            'int i = 1;\nwhile (i <= 5) {\n    printf("%d ", i);\n    i++;\n}\n// Output: 1 2 3 4 5',
          programmingQuestion: {
            title: "Print 1 to N",
            description:
              "Read N and print all integers from 1 to N on a single line separated by spaces using a while loop.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n, i = 1;\n    scanf("%d", &n);\n    // Use while loop\n    \n    return 0;\n}',
            hints: [
              "Condition: i <= n",
              "Print i then do i++",
              "Initialize i=1 before the loop",
            ],
            sampleInput: "5",
            sampleOutput: "1 2 3 4 5",
          },
          video: { youtubeId: "XqXGV3RwJKI", title: "while Loop in C" },
          flowchart: "loop",
        },
        {
          id: "m2p3s2",
          title: "do-while Loop",
          content:
            "The do-while loop is like while, but the condition is checked AFTER the loop body executes. This guarantees the loop body runs at least once — useful for menus and input validation.",
          codeExample:
            'int num;\ndo {\n    printf("Enter positive number: ");\n    scanf("%d", &num);\n} while (num <= 0);',
          programmingQuestion: {
            title: "Sum until zero",
            description:
              "Keep reading integers and adding them to a sum until the user enters 0. Print the total sum.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int num, sum = 0;\n    // do-while: read num, add to sum, repeat while num != 0\n    \n    printf("Sum: %d\\n", sum);\n    return 0;\n}',
            hints: [
              "Use do { scanf... sum+=num; } while(num != 0)",
              "Initialize sum = 0 before the loop",
              "The last 0 should not be added",
            ],
            sampleInput: "3 5 2 0",
            sampleOutput: "Sum: 10",
          },
          video: { youtubeId: "XqXGV3RwJKI", title: "do-while Loop in C" },
          flowchart: "do-while",
        },
        {
          id: "m2p3s3",
          title: "for Loop",
          content:
            "The for loop combines initialization, condition, and update in one line. Perfect when you know the exact number of iterations. Nested for loops create patterns and process 2D arrays.",
          codeExample:
            'for (int i = 1; i <= 5; i++) {\n    printf("%d ", i);\n}',
          programmingQuestion: {
            title: "Multiplication table",
            description:
              "Read a number N and print its multiplication table from 1 to 10 using a for loop.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Print n*1, n*2, ..., n*10\n    \n    return 0;\n}',
            hints: [
              "Use for(i=1; i<=10; i++)",
              "Print n*i in each iteration",
              "Format: N x i = result",
            ],
            sampleInput: "5",
            sampleOutput: "5 x 1 = 5\n5 x 2 = 10\n5 x 10 = 50",
          },
          video: { youtubeId: "XqXGV3RwJKI", title: "for Loop in C" },
          flowchart: "for-loop",
        },
        {
          id: "m2p3s4",
          title: "Multiple Loop Variables",
          content:
            "A for loop can manage multiple variables in its initialization and update sections, separated by commas. Useful when you need two counters moving in opposite directions. Example: for (int i=0, j=10; i<j; i++, j--) processes a sequence from both ends.",
          video: {
            youtubeId: "XqXGV3RwJKI",
            title: "Multiple Variables in for Loop — C",
          },
          flowchart: "for-loop",
        },
        {
          id: "m2p3s5",
          title: "break Statement",
          content:
            "The break statement immediately exits the nearest enclosing loop or switch. Execution continues after the loop. Useful for early termination when a condition is met — like finding a target in a search.",
          programmingQuestion: {
            title: "Find first multiple",
            description:
              "Read N and M. Print the first multiple of M that is greater than N, then stop.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n, m;\n    scanf("%d %d", &n, &m);\n    for (int i = n+1; ; i++) {\n        // If i is a multiple of m, print and break\n        \n    }\n    return 0;\n}',
            hints: [
              "Check if i % m == 0",
              "Use printf to print i",
              "Use break after printing",
            ],
            sampleInput: "10 3",
            sampleOutput: "12",
          },
          video: {
            youtubeId: "XqXGV3RwJKI",
            title: "break and continue in C Loops",
          },
        },
        {
          id: "m2p3s6",
          title: "continue Statement",
          content:
            "The continue statement skips the rest of the current iteration and jumps to the next. Use continue to skip unwanted values — like skipping even numbers in a loop.",
          programmingQuestion: {
            title: "Print odd numbers",
            description:
              "Print all odd numbers from 1 to N using a for loop and the continue statement.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        // If even, continue; else print\n        \n    }\n    return 0;\n}',
            hints: [
              "Check if i%2 == 0, then continue",
              'Otherwise printf("%d ", i)',
              "continue skips to the next i++",
            ],
            sampleInput: "10",
            sampleOutput: "1 3 5 7 9",
          },
          video: { youtubeId: "XqXGV3RwJKI", title: "continue Statement in C" },
          flowchart: "break-continue-flow",
        },
        {
          id: "m2p3s7",
          title: "goto Statement",
          content:
            "The goto statement performs an unconditional jump to a labeled statement. While valid C, goto is discouraged because it creates hard-to-follow code. Always prefer structured control (break, continue, return) over goto.",
          video: { youtubeId: "XqXGV3RwJKI", title: "goto Statement in C" },
          flowchart: "break-continue-flow",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the result of !0 in C?",
      options: ["0", "1", "-1", "undefined"],
      correct: 1,
      xp: 10,
    },
    {
      question: 'What will be the output: int x = 10; x += 5; printf("%d", x);',
      options: ["5", "10", "15", "50"],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "Which loop is best suited when the number of iterations is known in advance?",
      options: ["while", "do-while", "for", "goto"],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "In a switch statement, what is the purpose of the 'default' case?",
      options: [
        "It is mandatory",
        "Handles all unmatched cases",
        "Executes first",
        "Replaces break",
      ],
      correct: 1,
      xp: 15,
    },
    {
      question: "What does the 'break' statement do in a loop?",
      options: [
        "Skips current iteration",
        "Pauses the loop",
        "Exits the loop immediately",
        "Goes to next case",
      ],
      correct: 2,
      xp: 15,
    },
  ],
  moduleTest: [
    {
      id: "c-ops-t1",
      title: "Multiplication Table",
      description:
        "Write a C program that reads a number n from the user and prints its multiplication table from 1 to 10 using a for loop.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    printf("Enter a number: ");\n    // Read the number\n    \n    // Use a for loop to print multiplication table\n    \n    return 0;\n}`,
      expectedOutput: "n × 1 = n\nn × 2 = 2n\n...\nn × 10 = 10n",
      hints: [
        'Use scanf("%d", &n) to read the number.',
        "Loop from 1 to 10 using: for(int i = 1; i <= 10; i++)",
        'Inside the loop, print: printf("%d x %d = %d\\n", n, i, n*i);',
      ],
    },
    {
      id: "c-ops-t2",
      title: "Even or Odd",
      description:
        "Write a C program that reads an integer and prints whether it is Even or Odd using the modulo operator and an if-else statement.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    // Read the number\n    \n    // Check if even or odd and print result\n    \n    return 0;\n}`,
      expectedOutput: "<num> is Even / Odd",
      hints: [
        "A number is even if num % 2 == 0, odd otherwise.",
        "Use if (num % 2 == 0) to check for even.",
        'Use printf("%d is Even\\n", num) or printf("%d is Odd\\n", num).',
      ],
    },
    {
      id: "c-ops-t3",
      title: "Factorial of a Number",
      description:
        "Write a C program to compute the factorial of a non-negative integer n entered by the user. Print the result. (Hint: 5! = 5×4×3×2×1 = 120)",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    long long factorial = 1;\n    printf("Enter a non-negative integer: ");\n    // Read n\n    \n    // Compute factorial using a loop\n    \n    // Print result\n    \n    return 0;\n}`,
      expectedOutput: "Factorial of n = <result>",
      hints: [
        "Use a for loop: for(int i = 1; i <= n; i++) factorial *= i;",
        "Use long long to handle large factorials.",
        "The factorial of 0 is 1 (edge case to handle).",
      ],
    },
  ],
};

// ─── Module 3: Arrays, Strings & Structures ──────────────────────────────────

const module3: CModule = {
  id: "c-arrays",
  title: "Module 3: Arrays, Strings & Structures",
  outcome:
    "Implement arrays, structures and union to formulate algorithms and programs and apply it for searching and sorting problems.",
  isLocked: true,
  parts: [
    {
      id: "c-arr-p1",
      title: "Part 1: Arrays, Strings, Structures, Union & Enum",
      description:
        "Array notation, multi-dimensional arrays, character arrays, strings, structures, union, enumerated data types, and array of structures.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=AT14lCXuMKI",
      notes: `ARRAYS IN C
============

DECLARATION & INITIALIZATION
------------------------------
int marks[5];                     // Declares array of 5 ints
int marks[5] = {90, 85, 78, 92, 88};  // Initialize at declaration
int marks[] = {90, 85, 78, 92};   // Size inferred (4 elements)

ACCESSING ELEMENTS
-------------------
marks[0] = 90;    // Index starts from 0
marks[4] = 88;    // Last element is at index n-1
// Accessing out of bounds causes undefined behavior!

MULTI-DIMENSIONAL ARRAYS
--------------------------
int matrix[3][4];          // 3 rows, 4 columns
int mat[2][3] = {{1,2,3},{4,5,6}};
// Access: mat[row][col] → mat[1][2] = 6

CHARACTER ARRAYS AND STRINGS
------------------------------
char name[10] = "Alice";    // String stored as char array
// Strings end with null character '\\0'
// "Alice" = {'A','l','i','c','e','\\0'}
printf("%s", name);         // %s for string output

String functions (string.h):
  strlen(str)      — length (not counting '\\0')
  strcpy(dest,src) — copy string
  strcat(dest,src) — concatenate
  strcmp(s1,s2)    — compare (0 = equal)

STRUCTURES
-----------
Group variables of different types under one name.
struct Student {
    char name[50];
    int rollNo;
    float marks;
};
struct Student s1 = {"Alice", 101, 95.5};
printf("%s scored %.1f\\n", s1.name, s1.marks);

Access: s1.name (dot notation), ptr->name (arrow for pointer)

ARRAY OF STRUCTURES
--------------------
struct Student class[30];    // Array of 30 Student records
class[0].rollNo = 1;

UNION
------
Like a structure but all members share the SAME memory location.
Only one member can hold a value at a time. Memory = size of largest member.
union Data {
    int i;
    float f;
    char c;
};
union Data d; d.f = 3.14;  // Only d.f is valid now

ENUMERATED DATA TYPES (enum)
------------------------------
Assign names to integer constants for readability.
enum Day {MON=1, TUE, WED, THU, FRI, SAT, SUN};
enum Day today = WED;       // today = 3
printf("%d", today);        // prints 3`,
      docs: [
        {
          label: "C Arrays – cppreference",
          url: "https://en.cppreference.com/w/c/language/array",
        },
        {
          label: "C Structures – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/structures-c/",
        },
        {
          label: "C String Functions – Tutorialspoint",
          url: "https://www.tutorialspoint.com/c_standard_library/string_h.htm",
        },
        {
          label: "Union in C – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/union-c/",
        },
      ],
      partQuiz: [
        {
          question: "What is the index of the first element of an array in C?",
          options: ["1", "-1", "0", "Depends on declaration"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What character terminates a string in C?",
          options: ["'\\n'", "'\\t'", "'\\0'", "' ' (space)"],
          correct: 2,
          xp: 10,
        },
        {
          question: "How does a union differ from a structure?",
          options: [
            "Union has more memory",
            "All members share the same memory location in union",
            "Union cannot have functions",
            "Structure doesn't allow int members",
          ],
          correct: 1,
          xp: 15,
        },
        {
          question: "Which string function copies one string into another?",
          options: ["strcat()", "strcmp()", "strlen()", "strcpy()"],
          correct: 3,
          xp: 10,
        },
        {
          question:
            "What is the memory size of union { int i; char c; double d; }?",
          options: [
            "Size of int",
            "Size of char",
            "Size of double (largest)",
            "Sum of all sizes",
          ],
          correct: 2,
          xp: 15,
        },
      ],
      subsections: [
        {
          id: "m3p1s1",
          title: "Array Notation and Representation",
          content:
            "An array is a collection of elements of the same type stored in contiguous memory. Declare with: int arr[5]; — creates 5 integers. Array indices start at 0. Accessing arr[5] on a 5-element array is undefined behavior — one of the most common C bugs.",
          codeExample:
            'int arr[5] = {10, 20, 30, 40, 50};\nprintf("%d\\n", arr[0]); // 10\nprintf("%d\\n", arr[4]); // 50',
          programmingQuestion: {
            title: "Array sum and average",
            description:
              "Read 5 integers into an array, then print their sum and average.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int arr[5], sum = 0;\n    for(int i=0;i<5;i++) scanf("%d", &arr[i]);\n    // Calculate sum\n    \n    printf("Sum: %d, Average: %.1f\\n", sum, (float)sum/5);\n    return 0;\n}',
            hints: [
              "Loop and add each arr[i] to sum",
              "Cast sum to float before dividing",
              "Format: %.1f for one decimal",
            ],
            sampleInput: "1 2 3 4 5",
            sampleOutput: "Sum: 15, Average: 3.0",
          },
          video: {
            youtubeId: "YuGOU8iOUkk",
            title: "Arrays in C — Notation and Representation",
          },
          flowchart: "array-declaration-flow",
        },
        {
          id: "m3p1s2",
          title: "Manipulating Array Elements",
          content:
            "Array elements are accessed using bracket notation: arr[index]. The name of the array is a pointer to its first element — arr is equivalent to &arr[0]. This is key for passing arrays to functions.",
          programmingQuestion: {
            title: "Reverse an array",
            description:
              "Read N integers into an array, then print them in reverse order.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[100];\n    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);\n    // Print array in reverse\n    \n    return 0;\n}',
            hints: [
              "Start from index n-1 and go down to 0",
              "Use for(i=n-1; i>=0; i--)",
              "Print arr[i] with a space",
            ],
            sampleInput: "5\n1 2 3 4 5",
            sampleOutput: "5 4 3 2 1",
          },
          video: {
            youtubeId: "YuGOU8iOUkk",
            title: "Manipulating Arrays in C",
          },
        },
        {
          id: "m3p1s3",
          title: "Multi-dimensional Arrays",
          content:
            "A 2D array is an array of arrays — like a table with rows and columns. Declare: int matrix[rows][cols]; Access element: matrix[i][j]. Stored in row-major order in memory.",
          codeExample:
            'int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nfor(int i=0;i<3;i++) {\n    for(int j=0;j<3;j++)\n        printf("%d ", mat[i][j]);\n    printf("\\n");\n}',
          programmingQuestion: {
            title: "Matrix diagonal sum",
            description:
              "Read a 3x3 matrix and print the sum of its main diagonal elements.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int mat[3][3];\n    for(int i=0;i<3;i++)\n        for(int j=0;j<3;j++)\n            scanf("%d", &mat[i][j]);\n    int sum = 0;\n    // Sum diagonal: mat[0][0]+mat[1][1]+mat[2][2]\n    \n    printf("Diagonal sum: %d\\n", sum);\n    return 0;\n}',
            hints: [
              "Diagonal elements have equal row and column index",
              "Add mat[i][i] for i=0,1,2",
              "Simple loop or manual addition",
            ],
            sampleInput: "1 2 3\n4 5 6\n7 8 9",
            sampleOutput: "Diagonal sum: 15",
          },
          video: {
            youtubeId: "YuGOU8iOUkk",
            title: "Multi-dimensional Arrays in C",
          },
          flowchart: "multidim-array-flow",
        },
        {
          id: "m3p1s4",
          title: "Character Arrays and Strings",
          content:
            "A string in C is a character array ending with a null terminator (\\0). String functions from string.h: strlen() (length), strcpy() (copy), strcat() (concatenate), strcmp() (compare). Never use == to compare strings — use strcmp() instead.",
          video: {
            youtubeId: "YuGOU8iOUkk",
            title: "Character Arrays and Strings in C",
          },
          flowchart: "string-ops-flow",
        },
        {
          id: "m3p1s5",
          title: "Structures",
          content:
            "A structure groups variables of different types under one name. Access members with the dot operator. Structures model real-world objects — a student has a name, roll number, and grade.",
          codeExample:
            'struct Student {\n    char name[50];\n    int roll;\n    float gpa;\n};\nstruct Student s;\nprintf("%s: %d\\n", s.name, s.roll);',
          programmingQuestion: {
            title: "Student record",
            description:
              "Define a Student structure with name (string), roll number (int), and marks (float). Read and print one student.",
            starterCode:
              "#include <stdio.h>\n\nstruct Student {\n    // Add name, roll, marks fields\n};\n\nint main() {\n    struct Student s;\n    // Read and print student data\n    \n    return 0;\n}",
            hints: [
              "Use char name[50] for the name field",
              'Use scanf("%s", s.name) — no & for char array',
              "Use dot operator: s.roll, s.marks",
            ],
            sampleInput: "Alice 101 85.5",
            sampleOutput: "Name: Alice, Roll: 101, Marks: 85.50",
          },
          video: {
            youtubeId: "VQrSVHdKTQo",
            title: "Structures in C Explained",
          },
          flowchart: "structure-flow",
        },
        {
          id: "m3p1s6",
          title: "Union",
          content:
            "A union is like a structure but all members share the same memory location. The size of a union equals its largest member. At any time, only one member holds a valid value. Unions are used for memory-efficient storage when only one field is needed at a time.",
          video: { youtubeId: "VQrSVHdKTQo", title: "Union in C" },
          flowchart: "union-vs-struct-flow",
        },
        {
          id: "m3p1s7",
          title: "Enumerated Data Types",
          content:
            "An enum assigns names to integer constants, making code more readable. Declare: enum Color { RED, GREEN, BLUE }; — RED=0, GREEN=1, BLUE=2 by default. Enums make code self-documenting — instead of if (status == 2) you write if (status == CLOSED).",
          video: { youtubeId: "VQrSVHdKTQo", title: "Enum in C Programming" },
        },
        {
          id: "m3p1s8",
          title: "Array of Structures",
          content:
            "An array of structures stores multiple records of the same type. Declare: struct Student students[30]; Access the third student's name: students[2].name. Iterate with a for loop — the foundation for simple in-memory databases in C.",
          video: {
            youtubeId: "VQrSVHdKTQo",
            title: "Array of Structures in C",
          },
          flowchart: "array-of-structs-flow",
        },
      ],
    },
    {
      id: "c-arr-p2",
      title: "Part 2: Searching and Sorting Algorithms",
      description: "Linear Search and Bubble Sort with implementation in C.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=mGYB7bLHqA8",
      notes: `SEARCHING AND SORTING IN C
===========================

LINEAR SEARCH
--------------
Search each element one by one from start to end.
Time Complexity: O(n) — must check all n elements in worst case.
Best case: O(1) — found at first position.

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;  // Return index if found
    }
    return -1;  // Not found
}

Usage: int pos = linearSearch(arr, 5, 78);

Advantages: Simple, works on unsorted data.
Disadvantage: Slow for large arrays.

BUBBLE SORT
------------
Repeatedly compare adjacent elements and swap if out of order.
After each pass, the largest unsorted element "bubbles" to its correct position.
Time Complexity: O(n²) — worst and average case.
Best case: O(n) — with optimization flag.

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int swapped = 0;
        for (int j = 0; j < n-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;  // Array already sorted — optimization
    }
}

EXAMPLE TRACE (Bubble Sort on [64, 34, 25, 12, 22])
------------------------------------------------------
Pass 1: [34, 25, 12, 22, 64] — 64 placed at end
Pass 2: [25, 12, 22, 34, 64] — 34 placed
Pass 3: [12, 22, 25, 34, 64] — 25 placed
Sorted! [12, 22, 25, 34, 64]

COMPARISON TABLE
-----------------
| Algorithm     | Best  | Avg   | Worst | Stable | In-place |
|---------------|-------|-------|-------|--------|----------|
| Linear Search | O(1)  | O(n)  | O(n)  | —      | —        |
| Bubble Sort   | O(n)  | O(n²) | O(n²) | Yes    | Yes      |`,
      docs: [
        {
          label: "Sorting Algorithms – Wikipedia",
          url: "https://en.wikipedia.org/wiki/Sorting_algorithm",
        },
        {
          label: "Linear Search – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/linear-search/",
        },
        {
          label: "Bubble Sort – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/bubble-sort/",
        },
        {
          label: "Visualizing Sorting – VisuAlgo",
          url: "https://visualgo.net/en/sorting",
        },
      ],
      partQuiz: [
        {
          question: "What is the worst-case time complexity of Linear Search?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "After the first complete pass of Bubble Sort on an array of n elements, which element is guaranteed to be in its correct position?",
          options: [
            "Smallest element",
            "First element",
            "Largest element",
            "Middle element",
          ],
          correct: 2,
          xp: 15,
        },
        {
          question:
            "What is the best-case time complexity of optimized Bubble Sort?",
          options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
          correct: 2,
          xp: 15,
        },
        {
          question:
            "What does Linear Search return if the element is NOT found?",
          options: ["0", "NULL", "-1", "The last index"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the key operation in Bubble Sort?",
          options: [
            "Comparing non-adjacent elements",
            "Comparing and swapping adjacent elements",
            "Dividing array into halves",
            "Using a pivot element",
          ],
          correct: 1,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m3p2s1",
          title: "Linear Search",
          content:
            "Linear search sequentially checks each element until the target is found or the array ends. Time complexity: O(n). Works on unsorted arrays. Simple to implement but inefficient for large datasets.",
          codeExample:
            "int linearSearch(int arr[], int n, int target) {\n    for (int i = 0; i < n; i++)\n        if (arr[i] == target) return i;\n    return -1;\n}",
          programmingQuestion: {
            title: "Implement linear search",
            description:
              "Read N integers and a target. Print the index of the target if found, or -1 if not found.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[100], target;\n    for(int i=0;i<n;i++) scanf("%d", &arr[i]);\n    scanf("%d", &target);\n    int found = -1;\n    // Search for target\n    \n    printf("%d\\n", found);\n    return 0;\n}',
            hints: [
              "Loop through each element",
              "If arr[i] == target, set found=i and break",
              "If loop ends without finding, found stays -1",
            ],
            sampleInput: "5\n10 20 30 40 50\n30",
            sampleOutput: "2",
          },
          video: { youtubeId: "YuGOU8iOUkk", title: "Linear Search in C" },
          flowchart: "linear-search",
        },
        {
          id: "m3p2s2",
          title: "Bubble Sort",
          content:
            "Bubble sort repeatedly compares adjacent elements and swaps them if in wrong order. After each pass, the largest unsorted element moves to its correct position. Time complexity: O(n^2). Great for learning sorting concepts.",
          codeExample:
            "for(int i=0;i<n-1;i++)\n    for(int j=0;j<n-i-1;j++)\n        if(arr[j]>arr[j+1]) {\n            int temp=arr[j];\n            arr[j]=arr[j+1];\n            arr[j+1]=temp;\n        }",
          programmingQuestion: {
            title: "Sort with bubble sort",
            description:
              "Read N integers, sort them in ascending order using bubble sort, and print the sorted array.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[100];\n    for(int i=0;i<n;i++) scanf("%d", &arr[i]);\n    // Bubble sort\n    \n    for(int i=0;i<n;i++) printf("%d ", arr[i]);\n    return 0;\n}',
            hints: [
              "Outer loop: for(i=0;i<n-1;i++)",
              "Inner loop: for(j=0;j<n-i-1;j++)",
              "Swap if arr[j] > arr[j+1] using temp",
            ],
            sampleInput: "5\n64 34 25 12 22",
            sampleOutput: "12 22 25 34 64",
          },
          video: { youtubeId: "YuGOU8iOUkk", title: "Bubble Sort in C" },
          flowchart: "bubble-sort-flow",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "How do you access the element at row 2, column 3 of a 2D array 'mat'?",
      options: ["mat[3][2]", "mat[2][3]", "mat[2,3]", "mat(2,3)"],
      correct: 1,
      xp: 15,
    },
    {
      question:
        "What is the correct way to find the length of a string 'str' in C?",
      options: ["str.length()", "sizeof(str)", "strlen(str)", "str.size()"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What keyword is used to define a structure in C?",
      options: ["class", "record", "struct", "group"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which searching algorithm requires the array to be sorted?",
      options: [
        "Linear Search",
        "Bubble Sort",
        "Sequential Search",
        "Binary Search",
      ],
      correct: 3,
      xp: 15,
    },
    {
      question:
        "In a structure 'struct Point { int x; int y; } p;', how do you access x?",
      options: ["p->x", "p[x]", "p.x", "Point.x"],
      correct: 2,
      xp: 10,
    },
  ],
  moduleTest: [
    {
      id: "c-arr-t1",
      title: "Find Maximum in Array",
      description:
        "Write a C program that reads n integers into an array and finds and prints the maximum value. Read n from the user first.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    printf("Enter number of elements: ");\n    // Read n\n    \n    // Read n elements into array\n    \n    // Find maximum element\n    int max = arr[0];\n    // Compare with remaining elements\n    \n    printf("Maximum = %d\\n", max);\n    return 0;\n}`,
      expectedOutput: "Maximum = <largest element>",
      hints: [
        "Initialize max = arr[0] before the loop.",
        "Loop from index 1 to n-1, comparing each element to max.",
        "If arr[i] > max, update: max = arr[i];",
      ],
    },
    {
      id: "c-arr-t2",
      title: "Linear Search",
      description:
        "Write a C program that reads an array of n integers and a search key from the user. Use linear search to find the key and print its position (1-based), or 'Not found' if absent.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n, key, arr[100], found = -1;\n    // Read n and array elements\n    \n    printf("Enter search key: ");\n    // Read key\n    \n    // Perform linear search\n    \n    if (found != -1)\n        printf("Found at position %d\\n", found + 1);\n    else\n        printf("Not found\\n");\n    return 0;\n}`,
      expectedOutput: "Found at position X / Not found",
      hints: [
        "Use a for loop to compare each arr[i] with key.",
        "If arr[i] == key, set found = i and break.",
        "After the loop, if found == -1, the element was not found.",
      ],
    },
    {
      id: "c-arr-t3",
      title: "Bubble Sort",
      description:
        "Write a C program to sort an array of n integers using Bubble Sort and print the sorted array.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int n, arr[100];\n    // Read n and array elements\n    \n    // Bubble Sort: two nested loops\n    // Outer loop: i from 0 to n-2\n    // Inner loop: j from 0 to n-2-i\n    // Swap arr[j] and arr[j+1] if arr[j] > arr[j+1]\n    \n    printf("Sorted array: ");\n    // Print sorted array\n    \n    return 0;\n}`,
      expectedOutput: "Sorted array: <elements in ascending order>",
      hints: [
        "Outer loop: for(int i = 0; i < n-1; i++)",
        "Inner loop: for(int j = 0; j < n-1-i; j++)",
        "Swap using temp: int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;",
      ],
    },
  ],
};

// ─── Module 4: Functions ─────────────────────────────────────────────────────

const module4: CModule = {
  id: "c-functions",
  title: "Module 4: Functions",
  outcome:
    "Decompose a Problem into Functions and Synthesize a Complete Program Using Divide and Conquer Approach.",
  isLocked: true,
  parts: [
    {
      id: "c-func-p1",
      title: "Part 1: Functions in C",
      description:
        "Types of functions, passing arrays, call by value, call by reference, and recursive functions.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=9GkJfGOlxBs",
      notes: `FUNCTIONS IN C
===============

WHY FUNCTIONS?
--------------
• Divide a large program into smaller, manageable modules.
• Avoid code repetition — write once, call many times.
• Easier debugging and maintenance.
• Divide and conquer approach: break problem → solve each part → combine.

FUNCTION SYNTAX
----------------
return_type function_name(parameter_list) {
    // body
    return value;
}

Example:
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);  // Function call
    printf("%d", result);    // 8
}

TYPES OF FUNCTIONS
-------------------
1. No arguments, no return value: void greet() { printf("Hi"); }
2. Arguments, no return value:    void display(int n) { printf("%d", n); }
3. No arguments, with return:     int getInput() { int x; scanf("%d",&x); return x; }
4. Arguments and return value:    int add(int a, int b) { return a+b; }

FUNCTION PROTOTYPE (Declaration)
----------------------------------
Declared before main() so compiler knows the function signature.
int add(int, int);   // Prototype
int main() { ... }
int add(int a, int b) { return a + b; }   // Definition

CALL BY VALUE vs CALL BY REFERENCE
-------------------------------------
• Call by Value: A COPY of the argument is passed. Changes inside function do NOT affect original.
  void increment(int x) { x++; }   // x++ only affects local copy
  
• Call by Reference: Address (pointer) is passed. Changes DIRECTLY affect the original variable.
  void increment(int *x) { (*x)++; }  // Modifies actual variable
  int n = 5;  increment(&n);  // n is now 6

PASSING ARRAYS TO FUNCTIONS
-----------------------------
Arrays are always passed by reference (address of first element).
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
}
int main() {
    int nums[] = {1, 2, 3, 4, 5};
    printArray(nums, 5);   // No & needed — array name IS the address
}

RECURSIVE FUNCTIONS
--------------------
A function that calls itself. Must have:
1. Base case — condition that stops recursion.
2. Recursive case — problem reduced towards base case.

int factorial(int n) {
    if (n == 0 || n == 1) return 1;  // Base case
    return n * factorial(n - 1);     // Recursive case
}
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

CALL STACK
-----------
Each recursive call adds a new frame to the call stack. Excessive recursion causes Stack Overflow. Always ensure base case is reachable.`,
      docs: [
        {
          label: "C Functions – cppreference",
          url: "https://en.cppreference.com/w/c/language/functions",
        },
        {
          label: "Recursion in C – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/recursion/",
        },
        {
          label: "Functions in C – Tutorialspoint",
          url: "https://www.tutorialspoint.com/cprogramming/c_functions.htm",
        },
        {
          label: "Call by Value vs Reference – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/difference-between-call-by-value-and-call-by-reference/",
        },
      ],
      partQuiz: [
        {
          question: "What is the purpose of a function prototype in C?",
          options: [
            "To define the function body",
            "To tell the compiler about function signature before its definition",
            "To call the function",
            "To include a library",
          ],
          correct: 1,
          xp: 15,
        },
        {
          question: "In call by value, what is passed to the function?",
          options: [
            "Address of the variable",
            "A pointer to the variable",
            "A copy of the variable's value",
            "The variable itself",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the base case in recursion?",
          options: [
            "The last recursive call",
            "A condition that stops further recursion",
            "The first call to the function",
            "When the stack overflows",
          ],
          correct: 1,
          xp: 15,
        },
        {
          question: "How are arrays passed to functions in C?",
          options: [
            "By value (copy)",
            "By reference (address)",
            "Not possible",
            "By index",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "What is the return type of a function that does not return any value?",
          options: ["int", "null", "void", "empty"],
          correct: 2,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m4p1s1",
          title: "Introduction to Functions",
          content:
            "A function is a named, reusable block of code. Functions implement DRY (Don't Repeat Yourself) — write once, call many times. Every C program has at least one function: main(). A function has a return type, name, parameters, and a body.",
          video: {
            youtubeId: "dSalQLT7R4Y",
            title: "Introduction to Functions in C",
          },
          flowchart: "function-call",
        },
        {
          id: "m4p1s2",
          title: "Types of Functions",
          content:
            "Functions are categorized by parameters and return values: void with no params, void with params, return with no params, return with params. The function prototype declares the signature before main() so the compiler knows what to expect.",
          codeExample:
            'int add(int a, int b) {\n    return a + b;\n}\nint main() {\n    printf("%d\\n", add(3, 4)); // 7\n}',
          programmingQuestion: {
            title: "Write a max function",
            description:
              "Write a function max(int a, int b) that returns the larger of two integers. Read two integers and print the maximum.",
            starterCode:
              '#include <stdio.h>\n\n// Define max function here\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("Max: %d\\n", max(a, b));\n    return 0;\n}',
            hints: [
              "Function signature: int max(int a, int b)",
              "Use if (a > b) return a; else return b;",
              "Or: return (a > b) ? a : b;",
            ],
            sampleInput: "7 3",
            sampleOutput: "Max: 7",
          },
          video: { youtubeId: "dSalQLT7R4Y", title: "Types of Functions in C" },
        },
        {
          id: "m4p1s3",
          title: "Functions with Arrays",
          content:
            "Arrays are passed to functions by reference (as a pointer). The function receives the array's address — changes inside the function affect the original. Always pass the array size separately.",
          codeExample:
            'void printArray(int arr[], int n) {\n    for(int i=0;i<n;i++)\n        printf("%d ", arr[i]);\n}',
          programmingQuestion: {
            title: "Array max with function",
            description:
              "Write findMax(int arr[], int n) that returns the maximum element. Read 5 integers and print the max.",
            starterCode:
              '#include <stdio.h>\n\nint findMax(int arr[], int n) {\n    // Find and return maximum\n}\n\nint main() {\n    int arr[5];\n    for(int i=0;i<5;i++) scanf("%d",&arr[i]);\n    printf("Max: %d\\n", findMax(arr, 5));\n    return 0;\n}',
            hints: [
              "Initialize max = arr[0]",
              "Loop from 1 to n-1, update max if arr[i] > max",
              "Return max at the end",
            ],
            sampleInput: "3 7 2 9 1",
            sampleOutput: "Max: 9",
          },
          video: {
            youtubeId: "dSalQLT7R4Y",
            title: "Functions with Arrays in C",
          },
        },
        {
          id: "m4p1s4",
          title: "Call by Value",
          content:
            "In call by value, a copy of the argument is passed. Changes inside the function do NOT affect the original variable. This is the default in C for primitive types. Use call by value when you do not want the function to modify the original.",
          codeExample:
            'void tryChange(int x) {\n    x = 100; // only changes the copy\n}\nint main() {\n    int n = 5;\n    tryChange(n);\n    printf("%d\\n", n); // still 5\n}',
          programmingQuestion: {
            title: "Demonstrate call by value",
            description:
              "Write a function double_val(int x) that doubles x inside the function. Show that the original variable is unchanged.",
            starterCode:
              '#include <stdio.h>\n\nvoid double_val(int x) {\n    x = x * 2;\n    printf("Inside function: %d\\n", x);\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    double_val(n);\n    printf("Outside function: %d\\n", n);\n    return 0;\n}',
            hints: [
              "Just run the code as-is to see call by value",
              "Inside: x is a copy, so changing it does not affect n",
              "n remains unchanged outside",
            ],
            sampleInput: "5",
            sampleOutput: "Inside function: 10\nOutside function: 5",
          },
          video: { youtubeId: "dSalQLT7R4Y", title: "Call by Value in C" },
          flowchart: "function-call",
        },
        {
          id: "m4p1s5",
          title: "Call by Reference",
          content:
            "In call by reference, you pass the address (pointer) of the variable. The function can modify the original through dereferencing. This is how functions return multiple results. Syntax: void swap(int *a, int *b); Call with: swap(&x, &y).",
          codeExample:
            "void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}",
          programmingQuestion: {
            title: "Swap using call by reference",
            description:
              "Write a function swap(int *a, int *b) that swaps two integers. Read two integers, call swap, and print them after swapping.",
            starterCode:
              '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    // Swap *a and *b\n}\n\nint main() {\n    int x, y;\n    scanf("%d %d", &x, &y);\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);\n    return 0;\n}',
            hints: ["Use int temp = *a", "Then *a = *b", "Then *b = temp"],
            sampleInput: "5 10",
            sampleOutput: "10 5",
          },
          video: { youtubeId: "dSalQLT7R4Y", title: "Call by Reference in C" },
          flowchart: "call-by-value-ref-flow",
        },
        {
          id: "m4p1s6",
          title: "Passing Arrays to Functions",
          content:
            "When passing arrays, you pass the array name (pointer) and size. Modifications persist after the function returns — this is the key difference from scalars.",
          programmingQuestion: {
            title: "Fill array with squares",
            description:
              "Write fillSquares(int arr[], int n) that sets arr[i] = i*i. Print the resulting array.",
            starterCode:
              '#include <stdio.h>\n\nvoid fillSquares(int arr[], int n) {\n    // Fill arr[i] = i * i\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[100];\n    fillSquares(arr, n);\n    for(int i=0;i<n;i++) printf("%d ",arr[i]);\n    return 0;\n}',
            hints: [
              "Loop from i=0 to n-1",
              "Set arr[i] = i * i",
              "Changes persist after function returns",
            ],
            sampleInput: "5",
            sampleOutput: "0 1 4 9 16",
          },
          video: {
            youtubeId: "dSalQLT7R4Y",
            title: "Passing Arrays to Functions in C",
          },
          flowchart: "array-passing-flow",
        },
        {
          id: "m4p1s7",
          title: "Recursive Functions",
          content:
            "A recursive function calls itself to solve a smaller version of the problem. Every recursion must have a base case (to stop) and a recursive case. Classic: factorial(n) = n * factorial(n-1), base: factorial(0) = 1.",
          codeExample:
            "int factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n-1);\n}",
          programmingQuestion: {
            title: "Recursive Fibonacci",
            description:
              "Write recursive fibonacci(n) that returns the nth Fibonacci number. fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2).",
            starterCode:
              '#include <stdio.h>\n\nint fibonacci(int n) {\n    // Base cases and recursive case\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("Fibonacci(%d) = %d\\n", n, fibonacci(n));\n    return 0;\n}',
            hints: [
              "Base cases: if n==0 return 0; if n==1 return 1",
              "Recursive: return fibonacci(n-1) + fibonacci(n-2)",
              "This is slow for large n but correct",
            ],
            sampleInput: "7",
            sampleOutput: "Fibonacci(7) = 13",
          },
          video: {
            youtubeId: "dSalQLT7R4Y",
            title: "Recursive Functions in C",
          },
          flowchart: "recursion-stack-flow",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "Which approach does breaking a problem into functions represent?",
      options: [
        "Object-Oriented",
        "Divide and Conquer",
        "Dynamic Programming",
        "Greedy",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What happens if a recursive function has no base case?",
      options: [
        "It returns 0",
        "It compiles with a warning",
        "It causes infinite recursion/stack overflow",
        "Nothing — it stops on its own",
      ],
      correct: 2,
      xp: 15,
    },
    {
      question: "In call by reference, the function receives:",
      options: [
        "A copy of the value",
        "The return value",
        "The memory address of the variable",
        "A static copy",
      ],
      correct: 2,
      xp: 15,
    },
    {
      question: "To swap two variables using a function, you should use:",
      options: [
        "Call by value",
        "Call by reference (pointers)",
        "Global variables only",
        "Return statement",
      ],
      correct: 1,
      xp: 15,
    },
    {
      question: "What is the recursive case in computing factorial(n)?",
      options: [
        "return 1",
        "return n",
        "return n * factorial(n-1)",
        "return factorial(0)",
      ],
      correct: 2,
      xp: 10,
    },
  ],
  moduleTest: [
    {
      id: "c-func-t1",
      title: "Recursive Factorial",
      description:
        "Write a C program with a recursive function int factorial(int n) that computes n!. In main(), read n and print the factorial.",
      starterCode: `#include <stdio.h>\n\n// Write the recursive factorial function here\n\n\nint main() {\n    int n;\n    printf("Enter a non-negative integer: ");\n    scanf("%d", &n);\n    printf("Factorial of %d = %lld\\n", n, factorial(n));\n    return 0;\n}`,
      expectedOutput: "Factorial of n = <result>",
      hints: [
        "Base case: if (n == 0 || n == 1) return 1;",
        "Recursive case: return n * factorial(n - 1);",
        "Use long long return type for large values.",
      ],
    },
    {
      id: "c-func-t2",
      title: "Reverse a String Using a Function",
      description:
        "Write a function void reverseString(char str[]) that reverses a string in-place. Call it from main() and print the reversed string.",
      starterCode: `#include <stdio.h>\n#include <string.h>\n\n// Write reverseString function here\n// Swap characters from both ends moving towards center\n\n\nint main() {\n    char str[100];\n    printf("Enter a string: ");\n    scanf("%s", str);\n    reverseString(str);\n    printf("Reversed: %s\\n", str);\n    return 0;\n}`,
      expectedOutput: "Reversed: <reversed string>",
      hints: [
        "Find length using strlen(str).",
        "Use two pointers: left = 0, right = len-1, swap while left < right.",
        "Swap: char temp = str[left]; str[left] = str[right]; str[right] = temp;",
      ],
    },
    {
      id: "c-func-t3",
      title: "Binary Search as a Function",
      description:
        "Write a function int binarySearch(int arr[], int n, int key) that performs binary search on a sorted array. Return the index or -1 if not found. Test it in main().",
      starterCode: `#include <stdio.h>\n\n// Write binarySearch function\n// Maintain low, high, mid pointers\n// Compare mid element with key\n\n\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\n    int n = 10, key;\n    printf("Enter search key: ");\n    scanf("%d", &key);\n    int result = binarySearch(arr, n, key);\n    if (result != -1)\n        printf("Found at index %d\\n", result);\n    else\n        printf("Not found\\n");\n    return 0;\n}`,
      expectedOutput: "Found at index X / Not found",
      hints: [
        "Initialize: int low = 0, high = n-1;",
        "Loop: while(low <= high) { int mid = (low+high)/2; ... }",
        "If arr[mid] == key return mid; if arr[mid] < key low = mid+1; else high = mid-1;",
      ],
    },
  ],
};

// ─── Module 5: Pointers ───────────────────────────────────────────────────────

const module5: CModule = {
  id: "c-pointers",
  title: "Module 5: Pointers",
  outcome: "Apply the concept of pointers to develop algorithms and programs.",
  isLocked: true,
  parts: [
    {
      id: "c-ptr-p1",
      title: "Part 1: Pointers in C",
      description:
        "Pointer declarations, operations, pointer arrays, arrays of pointers, structures with pointers, passing pointers to functions.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=zuegQmMdy8M",
      notes: `POINTERS IN C
==============

WHAT IS A POINTER?
------------------
A pointer is a variable that stores the MEMORY ADDRESS of another variable.
int x = 10;
int *p = &x;   // p holds the address of x
// &x = "address of x" (e.g., 0x7ffd1234)
// *p = "value at address p" = 10 (dereference)

DECLARATION
------------
int *p;        // Pointer to int
float *fp;     // Pointer to float
char *cp;      // Pointer to char
void *vp;      // Void pointer — generic, can point to any type

BASIC OPERATIONS
-----------------
int a = 20;
int *ptr = &a;
printf("%p", ptr);   // Address (e.g., 0x7ffd...)
printf("%d", *ptr);  // Value = 20 (dereferencing)
*ptr = 50;           // Changes a to 50

POINTER ARITHMETIC
-------------------
int arr[] = {10, 20, 30, 40, 50};
int *p = arr;       // Points to arr[0]
p++;                // Now points to arr[1] (advances by sizeof(int) = 4 bytes)
printf("%d", *p);   // 20

p + 2 points to arr[2]. p - q gives number of elements between two pointers.
Valid operations: +, -, ++, -- (adding an integer to a pointer)

NULL POINTER
-------------
int *p = NULL;   // Points to nothing (address 0)
Always check before dereferencing: if (p != NULL) { ... }

POINTERS AND ARRAYS
--------------------
Array name IS a pointer to the first element.
int arr[5] = {1,2,3,4,5};
int *p = arr;     // same as &arr[0]
*(p + i) == arr[i]   // Both access same element
p[i] == arr[i]       // Pointer indexing works same as array indexing

ARRAY OF POINTERS
------------------
char *names[] = {"Alice", "Bob", "Charlie"};
// Array where each element is a pointer to a string
printf("%s", names[1]);   // "Bob"

POINTERS TO STRUCTURES
------------------------
struct Student s = {"Alice", 101};
struct Student *ptr = &s;
printf("%s", ptr->name);   // Use -> for pointer to struct
// ptr->name same as (*ptr).name

PASSING POINTERS TO FUNCTIONS
-------------------------------
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int x = 5, y = 10;
swap(&x, &y);   // After: x = 10, y = 5

DOUBLE POINTERS
----------------
int x = 10;
int *p = &x;
int **pp = &p;   // Pointer to a pointer
printf("%d", **pp);   // 10`,
      docs: [
        {
          label: "C Pointers – cppreference",
          url: "https://en.cppreference.com/w/c/language/pointer",
        },
        {
          label: "Pointers in C – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/",
        },
        {
          label: "C Pointer Tutorial – Tutorialspoint",
          url: "https://www.tutorialspoint.com/cprogramming/c_pointers.htm",
        },
        {
          label: "Pointers and Arrays – Stanford CS Education",
          url: "http://cslibrary.stanford.edu/106/",
        },
      ],
      partQuiz: [
        {
          question: "What does the '&' operator do in C?",
          options: [
            "Dereferences a pointer",
            "Performs bitwise AND",
            "Returns the address of a variable",
            "Declares a pointer",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What does the '*' operator do when applied to a pointer variable?",
          options: [
            "Declares a pointer",
            "Multiplies values",
            "Accesses the value at the pointer's address (dereference)",
            "Returns pointer address",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "If int *p points to arr[0] and p++, what does p now point to?",
          options: [
            "arr[0] still",
            "arr[1]",
            "arr[-1]",
            "One byte after arr[0]",
          ],
          correct: 1,
          xp: 15,
        },
        {
          question:
            "What operator is used to access a structure member through a pointer?",
          options: [". (dot)", "* (star)", "-> (arrow)", "& (ampersand)"],
          correct: 2,
          xp: 15,
        },
        {
          question: "What is a NULL pointer?",
          options: [
            "A pointer to value 0",
            "A pointer that has not been assigned a type",
            "A pointer that doesn't point to any valid memory location",
            "A dangling pointer",
          ],
          correct: 2,
          xp: 10,
        },
      ],
      subsections: [
        {
          id: "m5p1s1",
          title: "Pointer Declarations",
          content:
            "A pointer is a variable that stores a memory address. Declare with *: int *ptr; The & operator gets an address: ptr = &x. The * (dereference) operator accesses the value: *ptr gives x's value. Always initialize pointers before use to avoid segmentation faults.",
          codeExample:
            'int x = 42;\nint *ptr = &x;\nprintf("Value: %d\\n", *ptr);  // 42\nprintf("Address: %p\\n", ptr);',
          programmingQuestion: {
            title: "Basic pointer operations",
            description:
              "Declare an integer, store its address in a pointer, print the value through the pointer, then modify through the pointer and print the variable again.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int num = 10;\n    int *ptr;\n    // Point ptr to num\n    \n    printf("Value via pointer: %d\\n", *ptr);\n    *ptr = 20;\n    printf("After modification: %d\\n", num);\n    return 0;\n}',
            hints: [
              "Use ptr = &num to point to num",
              "*ptr = 20 changes the value at the address",
              "num and *ptr refer to the same location",
            ],
            sampleOutput: "Value via pointer: 10\nAfter modification: 20",
          },
          video: {
            youtubeId: "zuegQmMdy8M",
            title: "Pointers in C — Declarations and Basics",
          },
          flowchart: "pointer-ops",
        },
        {
          id: "m5p1s2",
          title: "Passing Pointers to Functions",
          content:
            "Passing a pointer allows the function to modify the original variable — call by reference. The function receives the address and uses * to read/write. Essential for functions that need to return multiple values.",
          programmingQuestion: {
            title: "Increment via pointer",
            description:
              "Write increment(int *n) that adds 1 to *n. Read an integer, call increment, and print the result.",
            starterCode:
              '#include <stdio.h>\n\nvoid increment(int *n) {\n    // Add 1 to *n\n}\n\nint main() {\n    int x;\n    scanf("%d", &x);\n    increment(&x);\n    printf("%d\\n", x);\n    return 0;\n}',
            hints: [
              "(*n)++ increments the value",
              "Or: *n = *n + 1",
              "Call with increment(&x) to pass address",
            ],
            sampleInput: "5",
            sampleOutput: "6",
          },
          video: {
            youtubeId: "zuegQmMdy8M",
            title: "Passing Pointers to Functions in C",
          },
        },
        {
          id: "m5p1s3",
          title: "Pointer Arithmetic",
          content:
            "You can perform arithmetic on pointers. ptr++ moves to the next element. ptr-- moves to the previous. Subtracting two pointers gives the number of elements between them. arr[i] is equivalent to *(arr + i).",
          codeExample:
            'int arr[5] = {10,20,30,40,50};\nint *p = arr;\nfor(int i=0;i<5;i++) {\n    printf("%d ", *p);\n    p++;\n}',
          programmingQuestion: {
            title: "Traverse with pointer arithmetic",
            description:
              "Use a pointer (not array indexing) to print all N array elements and their sum.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[100];\n    for(int i=0;i<n;i++) scanf("%d",&arr[i]);\n    int *p = arr;\n    int sum = 0;\n    // Use *p and p++ to traverse\n    \n    printf("Sum: %d\\n", sum);\n    return 0;\n}',
            hints: [
              "Use *p to get value, then p++ to advance",
              "Loop n times",
              "sum += *p before incrementing",
            ],
            sampleInput: "5\n1 2 3 4 5",
            sampleOutput: "1 2 3 4 5\nSum: 15",
          },
          video: { youtubeId: "zuegQmMdy8M", title: "Pointer Arithmetic in C" },
          flowchart: "pointer-arithmetic-flow",
        },
        {
          id: "m5p1s4",
          title: "Pointer Arrays",
          content:
            "An array of pointers: each element is a pointer. Declare: int *arr[5]; Each pointer can point to a different integer or array. Arrays of char pointers are commonly used for arrays of strings with varying lengths.",
          video: { youtubeId: "zuegQmMdy8M", title: "Pointer Arrays in C" },
          flowchart: "array-of-pointers-flow",
        },
        {
          id: "m5p1s5",
          title: "Arrays of Pointers",
          content:
            "An array of char pointers is the standard way to store multiple strings in C. Each pointer points to a string literal. The strings do not need to be the same length, saving memory.",
          codeExample:
            'char *fruits[] = {"Apple", "Banana", "Cherry", NULL};\nfor(int i=0; fruits[i] != NULL; i++)\n    printf("%s\\n", fruits[i]);',
          programmingQuestion: {
            title: "Print strings via pointer array",
            description:
              "Declare an array of 3 string pointers. Read 3 words and print them using the pointer array.",
            starterCode:
              '#include <stdio.h>\n\nint main() {\n    char words[3][50];\n    char *ptrs[3];\n    for(int i=0;i<3;i++) {\n        scanf("%s", words[i]);\n        ptrs[i] = words[i];\n    }\n    // Print using ptrs[i]\n    \n    return 0;\n}',
            hints: [
              "Use ptrs[i] to access each string",
              'printf("%s\\n", ptrs[i]) prints the string',
              "Loop i from 0 to 2",
            ],
            sampleInput: "Hello World Pointers",
            sampleOutput: "Hello\nWorld\nPointers",
          },
          video: { youtubeId: "zuegQmMdy8M", title: "Arrays of Pointers in C" },
          flowchart: "array-of-pointers-flow",
        },
        {
          id: "m5p1s6",
          title: "Structures and Pointers",
          content:
            "A pointer to a structure allows efficient passing without copying. Access members using the arrow operator (->): ptr->name is equivalent to (*ptr).name. Pointer to struct is the foundation for linked lists, trees, and graphs.",
          codeExample:
            'struct Point { int x, y; };\nstruct Point p = {3, 4};\nstruct Point *ptr = &p;\nprintf("%d %d\\n", ptr->x, ptr->y);',
          programmingQuestion: {
            title: "Modify struct via pointer",
            description:
              "Define a Point struct with x and y. Write translate(struct Point *p, int dx, int dy) that adds dx and dy. Read a point, translate by (3,4), and print.",
            starterCode:
              '#include <stdio.h>\n\nstruct Point {\n    int x, y;\n};\n\nvoid translate(struct Point *p, int dx, int dy) {\n    // Add dx to p->x, dy to p->y\n}\n\nint main() {\n    struct Point pt;\n    scanf("%d %d", &pt.x, &pt.y);\n    translate(&pt, 3, 4);\n    printf("(%d, %d)\\n", pt.x, pt.y);\n    return 0;\n}',
            hints: [
              "Use p->x += dx",
              "Use p->y += dy",
              "Pass &pt to the function",
            ],
            sampleInput: "1 2",
            sampleOutput: "(4, 6)",
          },
          video: {
            youtubeId: "zuegQmMdy8M",
            title: "Structures and Pointers in C",
          },
          flowchart: "struct-pointer-flow",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "Which of these correctly declares a pointer to an integer named 'p'?",
      options: ["int p*;", "pointer int p;", "int *p;", "*int p;"],
      correct: 2,
      xp: 10,
    },
    {
      question:
        'What is the output: int x=5; int *p=&x; *p=10; printf("%d",x);',
      options: ["5", "address", "10", "undefined"],
      correct: 2,
      xp: 15,
    },
    {
      question:
        "How do you pass a variable to a function so the function can modify it?",
      options: [
        "Pass by value",
        "Pass the variable name",
        "Pass its address using &",
        "Pass return value",
      ],
      correct: 2,
      xp: 15,
    },
    {
      question:
        "What is the relationship between an array name and a pointer in C?",
      options: [
        "They are completely different",
        "Array name is a constant pointer to the first element",
        "Array name stores all elements",
        "Pointer cannot point to array",
      ],
      correct: 1,
      xp: 15,
    },
    {
      question:
        "What is pointer arithmetic? Moving p by 1 on int* advances by:",
      options: ["1 byte", "2 bytes", "sizeof(int) bytes", "Depends on OS"],
      correct: 2,
      xp: 10,
    },
  ],
  moduleTest: [
    {
      id: "c-ptr-t1",
      title: "Swap Using Pointers",
      description:
        "Write a C program with a function void swap(int *a, int *b) that swaps two integers using pointers. Demonstrate in main() by printing values before and after.",
      starterCode: `#include <stdio.h>\n\n// Write swap function using pointers\nvoid swap(int *a, int *b) {\n    // Use a temp variable to swap *a and *b\n    \n}\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x = %d, y = %d\\n", x, y);\n    swap(&x, &y);\n    printf("After:  x = %d, y = %d\\n", x, y);\n    return 0;\n}`,
      expectedOutput: "Before: x = 10, y = 20\nAfter:  x = 20, y = 10",
      hints: [
        "Dereference the pointers: int temp = *a;",
        "*a = *b; then *b = temp; to complete the swap.",
        "Call with addresses: swap(&x, &y);",
      ],
    },
    {
      id: "c-ptr-t2",
      title: "String Length Using Pointer",
      description:
        "Write a function int strLen(char *str) that finds the length of a string using pointer arithmetic (do NOT use strlen()). Count characters until '\\0'.",
      starterCode: `#include <stdio.h>\n\n// Write strLen function using pointer\nint strLen(char *str) {\n    int count = 0;\n    // Move pointer until null terminator found\n    // Increment count for each character\n    \n    return count;\n}\n\nint main() {\n    char s[] = "Hello, World!";\n    printf("Length = %d\\n", strLen(s));\n    return 0;\n}`,
      expectedOutput: "Length = 13",
      hints: [
        "Use a while loop: while (*str != '\\0') { count++; str++; }",
        "Each str++ moves to the next character.",
        "Stop when *str == '\\0' (null terminator).",
      ],
    },
    {
      id: "c-ptr-t3",
      title: "Pointer Arithmetic Demo",
      description:
        "Write a C program that uses a pointer to traverse an integer array and print each element. Also print the address of each element to see how pointer arithmetic works.",
      starterCode: `#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5;\n    int *p = arr;  // Point to first element\n    \n    printf("Element  Address\\n");\n    // Use pointer arithmetic to print each element and its address\n    // Loop n times, printing *p and p, then p++\n    \n    return 0;\n}`,
      expectedOutput: "Element  Address\n10  0x...\n20  0x...\n...",
      hints: [
        "Use a for loop with p++ to advance the pointer.",
        'Print element: printf("%d", *p);',
        'Print address: printf("%p", (void*)p);',
      ],
    },
  ],
};

// ─── Exported Course ──────────────────────────────────────────────────────────

export const C_PROGRAMMING_COURSE: CModule[] = [
  module0,
  module1,
  module2,
  module3,
  module4,
  module5,
];

// ─── Roadmap Entry ────────────────────────────────────────────────────────────
// This object is compatible with the Roadmap interface in roadmaps.ts.
// topics is left empty because the C programming course uses a modular
// structure (CModule[]) accessed via C_PROGRAMMING_COURSE instead.

export const C_PROGRAMMING_ROADMAP_ENTRY = {
  id: "c-programming",
  title: "Programming in C",
  icon: "🔵",
  color: "from-cyan-500/20 to-blue-500/10",
  tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  description:
    "Master C programming from fundamentals to pointers through 5 structured modules.",
  level: "Beginner to Advanced",
  topics: [] as import("./roadmaps").RoadmapTopic[],
  isCourse: true as const,
};

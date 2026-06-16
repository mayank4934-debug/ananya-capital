// Part Quiz Data — 15 MCQ + 2 Programming Questions per module part
// Keyed by partId (e.g., "c-module1-part1")

export interface PartMCQ {
  id: string;
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
  xp: 5;
}

export interface PartProgrammingQuestion {
  id: string;
  title: string;
  description: string;
  examples: { input: string; output: string }[];
  starterCode: string;
  languageId: number; // Judge0 language ID (50 = C)
  languageLabel: string;
  hints: [string, string, string];
  solutionKeywords: string[];
  xp: 20;
}

export interface PartQuizData {
  mcqs: PartMCQ[];
  programmingQuestions: PartProgrammingQuestion[];
}

// Helper
function mcq(
  id: string,
  question: string,
  options: [string, string, string, string],
  correct: 0 | 1 | 2 | 3,
  explanation: string,
): PartMCQ {
  return { id, question, options, correct, explanation, xp: 5 };
}

function pq(
  id: string,
  title: string,
  description: string,
  examples: { input: string; output: string }[],
  starterCode: string,
  languageId: number,
  languageLabel: string,
  hints: [string, string, string],
  solutionKeywords: string[],
): PartProgrammingQuestion {
  return {
    id,
    title,
    description,
    examples,
    starterCode,
    languageId,
    languageLabel,
    hints,
    solutionKeywords,
    xp: 20,
  };
}

// ─── C Module 1 Part 1: Computer System Components ───────────────────────────
const C_M1_P1: PartQuizData = {
  mcqs: [
    mcq(
      "cm1p1-1",
      "Which component of a computer temporarily stores data that the CPU is actively using?",
      ["Hard Disk", "RAM (Memory)", "ROM", "SSD"],
      1,
      "RAM (Random Access Memory) is volatile memory that stores data the CPU is actively working with.",
    ),
    mcq(
      "cm1p1-2",
      "What is the primary function of the CPU?",
      [
        "Store data permanently",
        "Connect to the internet",
        "Process instructions and perform calculations",
        "Display graphics on screen",
      ],
      2,
      "The CPU (Central Processing Unit) is the brain of the computer — it processes instructions and performs calculations.",
    ),
    mcq(
      "cm1p1-3",
      "Which device is an example of an Output device?",
      ["Keyboard", "Mouse", "Microphone", "Monitor"],
      3,
      "A monitor displays output from the computer, making it an output device.",
    ),
    mcq(
      "cm1p1-4",
      "What does ROM stand for?",
      [
        "Random Only Memory",
        "Read Only Memory",
        "Readable Output Memory",
        "Random Operation Memory",
      ],
      1,
      "ROM stands for Read Only Memory — it is non-volatile and cannot be written to during normal operation.",
    ),
    mcq(
      "cm1p1-5",
      "Which type of storage is non-volatile?",
      ["RAM", "Cache", "Hard Disk Drive", "CPU Register"],
      2,
      "Hard Disk Drives (HDD/SSD) are non-volatile — they retain data even when powered off.",
    ),
    mcq(
      "cm1p1-6",
      "What is the role of an Operating System?",
      [
        "Perform arithmetic operations",
        "Manage hardware and software resources",
        "Compile source code",
        "Only manage files",
      ],
      1,
      "An OS manages hardware resources, runs programs, and provides a user interface.",
    ),
    mcq(
      "cm1p1-7",
      "Which component translates assembly language into machine code?",
      ["Compiler", "Interpreter", "Assembler", "Linker"],
      2,
      "An Assembler converts assembly language (mnemonics) into binary machine code.",
    ),
    mcq(
      "cm1p1-8",
      "What does a Compiler do?",
      [
        "Executes code line by line",
        "Translates the entire source code to machine code at once",
        "Links object files together",
        "Loads programs into memory",
      ],
      1,
      "A Compiler translates the entire source program into machine code before execution.",
    ),
    mcq(
      "cm1p1-9",
      "How does an Interpreter differ from a Compiler?",
      [
        "It produces faster executables",
        "It executes code line-by-line without creating a separate executable",
        "It requires less memory",
        "It works only with C programs",
      ],
      1,
      "An Interpreter translates and executes code one statement at a time, without creating a separate object file.",
    ),
    mcq(
      "cm1p1-10",
      "What is the function of a Linker?",
      [
        "Debug the source code",
        "Combine multiple object files into a single executable",
        "Convert assembly to machine code",
        "Manage runtime memory",
      ],
      1,
      "A Linker combines compiled object files and resolves external references to produce a final executable.",
    ),
    mcq(
      "cm1p1-11",
      "Which unit measures CPU processing speed?",
      ["Bytes", "Megahertz (MHz) or Gigahertz (GHz)", "Pixels", "Decibels"],
      1,
      "CPU speed is measured in clock cycles per second — MHz or GHz.",
    ),
    mcq(
      "cm1p1-12",
      "A Loader's job is to:",
      [
        "Translate source code",
        "Link object files",
        "Load the executable program into RAM for execution",
        "Debug runtime errors",
      ],
      2,
      "A Loader places the executable program into main memory (RAM) so the CPU can execute it.",
    ),
    mcq(
      "cm1p1-13",
      "Which is the fastest memory in a computer system?",
      ["RAM", "Hard Disk", "CPU Cache/Registers", "USB Storage"],
      2,
      "CPU registers and cache are the fastest memory, located on or closest to the CPU chip.",
    ),
    mcq(
      "cm1p1-14",
      "What type of device is a keyboard?",
      ["Output device", "Processing device", "Input device", "Storage device"],
      2,
      "A keyboard is an input device — it sends data to the computer.",
    ),
    mcq(
      "cm1p1-15",
      "The term 'volatile memory' means:",
      [
        "Memory that explodes",
        "Memory that retains data without power",
        "Memory that loses data when power is off",
        "Memory used only by the OS",
      ],
      2,
      "Volatile memory (like RAM) loses all stored data when the power supply is cut off.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm1p1-pq1",
      "System Info Printer",
      "Write a C program that prints the sizes of common data types on the system using sizeof(). Print the size of int, float, double, and char.",
      [
        {
          input: "(none)",
          output:
            "int: 4 bytes\nfloat: 4 bytes\ndouble: 8 bytes\nchar: 1 bytes",
        },
      ],
      `#include <stdio.h>

int main() {
    // Print sizes of data types using sizeof()
    printf("int: %lu bytes\\n", sizeof(int));
    // Add float, double, char below
    
    return 0;
}`,
      50,
      "C",
      [
        "Use the sizeof() operator — it returns the size in bytes of a type.",
        'Format: printf("%lu bytes", sizeof(type)); — %lu is for unsigned long (size_t).',
        `printf("float: %lu bytes\\n", sizeof(float));\nprintf("double: %lu bytes\\n", sizeof(double));\nprintf("char: %lu bytes\\n", sizeof(char));`,
      ],
      ["sizeof", "printf", "float", "double", "char"],
    ),
    pq(
      "cm1p1-pq2",
      "Binary Number Printer",
      "Write a C program that reads an integer n from input and prints whether it is positive, negative, or zero.",
      [
        { input: "5", output: "Positive" },
        { input: "-3", output: "Negative" },
        { input: "0", output: "Zero" },
      ],
      `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // Check if n is positive, negative, or zero
    
    return 0;
}`,
      50,
      "C",
      [
        "Use an if-else chain to check if n > 0, n < 0, or n == 0.",
        "Structure: if(n > 0) then Positive, else if(n < 0) then Negative, else Zero.",
        `if(n > 0) printf("Positive\\n");\nelse if(n < 0) printf("Negative\\n");\nelse printf("Zero\\n");`,
      ],
      ["if", "else", "printf", "scanf", "Positive", "Negative", "Zero"],
    ),
  ],
};

// ─── C Module 1 Part 2: Algorithms and Flowcharts ────────────────────────────
const C_M1_P2: PartQuizData = {
  mcqs: [
    mcq(
      "cm1p2-1",
      "An algorithm is best described as:",
      [
        "A programming language",
        "A step-by-step procedure to solve a problem",
        "A type of computer hardware",
        "A software application",
      ],
      1,
      "An algorithm is a finite, well-defined sequence of steps for solving a specific problem.",
    ),
    mcq(
      "cm1p2-2",
      "What does a diamond shape represent in a flowchart?",
      ["Process/computation", "Start/End", "Decision (Yes/No)", "Input/Output"],
      2,
      "A diamond (rhombus) shape in a flowchart represents a decision point with Yes/No branches.",
    ),
    mcq(
      "cm1p2-3",
      "Which shape represents Input/Output in a flowchart?",
      ["Rectangle", "Diamond", "Oval/Rounded rectangle", "Parallelogram"],
      3,
      "A parallelogram represents input or output operations in a standard flowchart.",
    ),
    mcq(
      "cm1p2-4",
      "Pseudocode is:",
      [
        "A type of compiled language",
        "Actual machine code",
        "An informal high-level description of an algorithm",
        "Assembly language",
      ],
      2,
      "Pseudocode uses plain language mixed with programming constructs to describe algorithm logic.",
    ),
    mcq(
      "cm1p2-5",
      "What is the time complexity of a simple for-loop that iterates n times?",
      ["O(1)", "O(n²)", "O(n)", "O(log n)"],
      2,
      "A single loop running n times has linear time complexity — O(n).",
    ),
    mcq(
      "cm1p2-6",
      "Which property must every algorithm have?",
      [
        "Infinite steps",
        "Finiteness — it must terminate",
        "Use recursion",
        "Be written in C",
      ],
      1,
      "An algorithm must always terminate after a finite number of steps.",
    ),
    mcq(
      "cm1p2-7",
      "What does the oval/terminal shape represent in a flowchart?",
      ["Decision", "Process", "Start or End", "Connector"],
      2,
      "Oval or rounded rectangles mark the Start and End (terminal) points of a flowchart.",
    ),
    mcq(
      "cm1p2-8",
      "Source code is:",
      [
        "Binary machine code",
        "Human-readable instructions written in a programming language",
        "The output of a linker",
        "RAM contents",
      ],
      1,
      "Source code is the human-readable text written by programmers in a programming language.",
    ),
    mcq(
      "cm1p2-9",
      "The process of converting source code into machine code is called:",
      ["Interpretation", "Linking", "Compilation", "Loading"],
      2,
      "Compilation is the process that transforms source code into machine-readable object code.",
    ),
    mcq(
      "cm1p2-10",
      "Which of the following is NOT a characteristic of a good algorithm?",
      ["Definiteness", "Finiteness", "Ambiguity", "Effectiveness"],
      2,
      "A good algorithm must be unambiguous — each step must be clearly and precisely defined.",
    ),
    mcq(
      "cm1p2-11",
      "In algorithm design, 'input' refers to:",
      [
        "Output the algorithm produces",
        "The zero or more quantities fed into the algorithm",
        "The hardware it runs on",
        "The source code file",
      ],
      1,
      "An algorithm may take zero or more inputs — these are the quantities supplied to it from outside.",
    ),
    mcq(
      "cm1p2-12",
      "What is the purpose of a flowchart?",
      [
        "To write actual code",
        "To visualize the logic/flow of a program before coding",
        "To compile source code",
        "To manage memory",
      ],
      1,
      "Flowcharts provide a visual representation of an algorithm's logic, aiding in design and communication.",
    ),
    mcq(
      "cm1p2-13",
      "Step-by-step instructions that can be mechanically followed are called:",
      ["Heuristics", "Algorithms", "Bugs", "Variables"],
      1,
      "Algorithms are step-by-step, mechanical procedures — they can be followed without creativity or insight.",
    ),
    mcq(
      "cm1p2-14",
      "Which of these represents a valid algorithm step for finding the maximum of two numbers?",
      [
        "If A is green, then A is max",
        "If A > B then Max = A, else Max = B",
        "Always set Max = A",
        "Random pick between A and B",
      ],
      1,
      "A valid deterministic step compares A and B and assigns the larger to Max.",
    ),
    mcq(
      "cm1p2-15",
      "Object code is:",
      [
        "High-level source code",
        "Assembly mnemonics",
        "Machine-readable binary produced by the compiler",
        "Pseudocode",
      ],
      2,
      "Object code is the binary output from a compiler — not yet a complete executable (needs linking).",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm1p2-pq1",
      "Swap Two Numbers",
      "Write a C program that takes two integers as input and swaps them using a temporary variable, then prints the swapped values.",
      [{ input: "3 7", output: "a = 7\nb = 3" }],
      `#include <stdio.h>

int main() {
    int a, b, temp;
    scanf("%d %d", &a, &b);
    // Swap a and b using temp
    
    printf("a = %d\\n", a);
    printf("b = %d\\n", b);
    return 0;
}`,
      50,
      "C",
      [
        "Use a temporary variable: store a in temp, copy b to a, copy temp to b.",
        "Three lines: temp = a; a = b; b = temp;",
        "temp = a;\na = b;\nb = temp;",
      ],
      ["temp", "scanf", "printf"],
    ),
    pq(
      "cm1p2-pq2",
      "Sum of N Numbers",
      "Write a C program that reads an integer n, then reads n integers and prints their sum.",
      [{ input: "3\n1 2 3", output: "Sum = 6" }],
      `#include <stdio.h>

int main() {
    int n, i, num, sum = 0;
    scanf("%d", &n);
    for(i = 0; i < n; i++) {
        scanf("%d", &num);
        // Add num to sum
    }
    printf("Sum = %d\\n", sum);
    return 0;
}`,
      50,
      "C",
      [
        "Inside the loop, accumulate the sum: sum = sum + num;",
        "Use sum += num; inside the for loop body.",
        "sum += num;  // or: sum = sum + num;",
      ],
      ["sum", "scanf", "for", "printf"],
    ),
  ],
};

// ─── C Module 1 Part 3: C Programming Basics ─────────────────────────────────
const C_M1_P3: PartQuizData = {
  mcqs: [
    mcq(
      "cm1p3-1",
      "Which header file is required for printf() and scanf() in C?",
      ["<stdlib.h>", "<string.h>", "<stdio.h>", "<math.h>"],
      2,
      "<stdio.h> (Standard Input/Output) provides printf(), scanf(), and other I/O functions.",
    ),
    mcq(
      "cm1p3-2",
      "What is the correct syntax for the main function in C?",
      [
        "void main() {}",
        "int main() { return 0; }",
        "function main() {}",
        "def main():",
      ],
      1,
      "The standard C main function signature is int main() { ... return 0; }",
    ),
    mcq(
      "cm1p3-3",
      "Which data type stores a single character in C?",
      ["int", "string", "char", "byte"],
      2,
      "The char data type stores a single character (1 byte) in C.",
    ),
    mcq(
      "cm1p3-4",
      "What format specifier is used to print an integer with printf()?",
      ["%f", "%s", "%c", "%d"],
      3,
      "%d is the format specifier for printing decimal integers in printf().",
    ),
    mcq(
      "cm1p3-5",
      "A syntax error in C occurs when:",
      [
        "The program crashes at runtime",
        "The code violates grammar rules of C",
        "The output is incorrect",
        "Memory runs out",
      ],
      1,
      "Syntax errors occur when code violates C's grammar rules — the compiler detects these before running.",
    ),
    mcq(
      "cm1p3-6",
      "What is a variable in C?",
      [
        "A fixed constant value",
        "A named memory location that stores a value",
        "A function call",
        "A loop counter only",
      ],
      1,
      "A variable is a named storage location in memory that can hold different values during execution.",
    ),
    mcq(
      "cm1p3-7",
      "Which storage class in C has the default scope of a function?",
      ["extern", "static", "register", "auto"],
      3,
      "auto is the default storage class for local variables in C — they are created when the function is entered.",
    ),
    mcq(
      "cm1p3-8",
      "What does \\n in a printf() string mean?",
      ["Tab character", "Backslash", "Newline character", "Null terminator"],
      2,
      "\\n is the escape sequence for newline — it moves the cursor to the next line.",
    ),
    mcq(
      "cm1p3-9",
      "What is the size of an int on most 32-bit systems?",
      ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      2,
      "On most 32-bit systems, int is 4 bytes (32 bits).",
    ),
    mcq(
      "cm1p3-10",
      "The & operator in scanf() is used to:",
      [
        "Perform bitwise AND",
        "Pass the address of a variable so scanf can store the input",
        "Declare a reference",
        "Compare two values",
      ],
      1,
      "& gives the memory address of a variable — scanf needs the address to write the input value there.",
    ),
    mcq(
      "cm1p3-11",
      "Which of these is a valid C variable name?",
      ["2count", "my-var", "_score", "float"],
      2,
      "Variable names can start with a letter or underscore. 2count starts with a digit (invalid); my-var uses a hyphen (invalid); float is a keyword.",
    ),
    mcq(
      "cm1p3-12",
      "A logical error in C means:",
      [
        "The compiler rejects the code",
        "The program compiles but produces wrong results",
        "The program crashes with a segfault",
        "The linker fails",
      ],
      1,
      "Logical errors produce incorrect output despite the program compiling and running without crashes.",
    ),
    mcq(
      "cm1p3-13",
      "What is the purpose of the return 0; statement in main()?",
      [
        "Exit with an error code",
        "Indicate successful program execution to the OS",
        "Print zero to console",
        "Restart the program",
      ],
      1,
      "return 0; in main() signals to the operating system that the program completed successfully.",
    ),
    mcq(
      "cm1p3-14",
      "Which keyword declares a floating-point variable in C?",
      ["double", "float", "Both float and double", "decimal"],
      2,
      "Both float and double declare floating-point variables — float is single precision, double is double precision.",
    ),
    mcq(
      "cm1p3-15",
      "What is the difference between printf() and scanf()?",
      [
        "printf reads input, scanf produces output",
        "printf produces output, scanf reads input",
        "They do the same thing",
        "printf is for files only",
      ],
      1,
      "printf() outputs formatted text to stdout; scanf() reads formatted input from stdin.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm1p3-pq1",
      "Hello World with Variables",
      "Write a C program that declares an integer age = 20 and a character grade = 'A', then prints: Age: 20, Grade: A",
      [{ input: "(none)", output: "Age: 20\nGrade: A" }],
      `#include <stdio.h>

int main() {
    int age = 20;
    char grade = 'A';
    // Print age and grade
    
    return 0;
}`,
      50,
      "C",
      [
        "Use printf with %d for the integer and %c for the character.",
        "Two printf calls: one for age using %d, one for grade using %c.",
        `printf("Age: %d\\n", age);\nprintf("Grade: %c\\n", grade);`,
      ],
      ["printf", "age", "grade", "%d", "%c"],
    ),
    pq(
      "cm1p3-pq2",
      "Simple Calculator",
      "Write a C program that reads two integers from input and prints their sum, difference, and product.",
      [{ input: "4 3", output: "Sum: 7\nDiff: 1\nProduct: 12" }],
      `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Print sum, difference, and product
    
    return 0;
}`,
      50,
      "C",
      [
        "Calculate three results: a+b (sum), a-b (diff), a*b (product).",
        "Use three printf statements, one for each operation.",
        `printf("Sum: %d\\n", a + b);\nprintf("Diff: %d\\n", a - b);\nprintf("Product: %d\\n", a * b);`,
      ],
      ["printf", "scanf", "+", "-", "*", "Sum", "Diff", "Product"],
    ),
  ],
};

// ─── C Module 2 Part 1: Operators and Expressions ────────────────────────────
const C_M2_P1: PartQuizData = {
  mcqs: [
    mcq(
      "cm2p1-1",
      "What is the result of 10 % 3 in C?",
      ["3", "1", "0", "3.33"],
      1,
      "The modulo operator % returns the remainder of division. 10 / 3 = 3 remainder 1, so 10 % 3 = 1.",
    ),
    mcq(
      "cm2p1-2",
      "Which operator has the highest precedence in C?",
      [
        "+ (addition)",
        "* (multiplication)",
        "() (parentheses/function call)",
        "= (assignment)",
      ],
      2,
      "Parentheses () have the highest precedence — expressions inside are evaluated first.",
    ),
    mcq(
      "cm2p1-3",
      "What does the expression x++ do in C?",
      [
        "Decrements x by 1",
        "Increments x by 1 before using it",
        "Uses x then increments by 1",
        "Multiplies x by 2",
      ],
      2,
      "x++ is post-increment — it uses the current value of x, then increments x by 1.",
    ),
    mcq(
      "cm2p1-4",
      "What is the result of the expression 5 > 3 in C?",
      ["5", "3", "1 (true)", "0 (false)"],
      2,
      "Relational operators return 1 for true and 0 for false in C. 5 > 3 is true, so the result is 1.",
    ),
    mcq(
      "cm2p1-5",
      "What does the && operator represent?",
      ["Bitwise AND", "Logical AND", "Bitwise OR", "Logical NOT"],
      1,
      "&& is the logical AND operator — it returns true only if both operands are true.",
    ),
    mcq(
      "cm2p1-6",
      "What is type conversion (casting) in C?",
      [
        "Changing a variable's name",
        "Converting a value from one data type to another",
        "Deleting a variable",
        "Declaring a new type",
      ],
      1,
      "Type conversion converts a value from one data type to another, either implicitly or explicitly.",
    ),
    mcq(
      "cm2p1-7",
      "What is the result of (int)3.7 in C?",
      ["4", "3", "3.7", "Error"],
      1,
      "Explicit casting to int truncates the decimal part. (int)3.7 = 3.",
    ),
    mcq(
      "cm2p1-8",
      "Which operator is used for bitwise AND in C?",
      ["&&", "&", "||", "|"],
      1,
      "& is the bitwise AND operator. && is the logical AND operator.",
    ),
    mcq(
      "cm2p1-9",
      "What is the associativity of the assignment operator (=) in C?",
      [
        "Left to right",
        "Right to left",
        "No associativity",
        "Depends on context",
      ],
      1,
      "The assignment operator = is right-associative: a = b = 5 means a = (b = 5).",
    ),
    mcq(
      "cm2p1-10",
      "What does i-- do?",
      [
        "Subtracts 2 from i",
        "Uses i then decrements by 1",
        "Decrements i then uses it",
        "Sets i to 0",
      ],
      1,
      "i-- is post-decrement — the current value is used in the expression, then i is decremented by 1.",
    ),
    mcq(
      "cm2p1-11",
      "The expression !0 evaluates to:",
      ["0", "1", "-1", "Undefined"],
      1,
      "! is the logical NOT operator. !0 = 1 (since 0 is false, NOT false = true = 1).",
    ),
    mcq(
      "cm2p1-12",
      "In C, what is the precedence of * compared to +?",
      [
        "+ has higher precedence",
        "* has higher precedence",
        "They have equal precedence",
        "It depends on operands",
      ],
      1,
      "Multiplication * has higher precedence than addition +, so 2 + 3 * 4 = 14, not 20.",
    ),
    mcq(
      "cm2p1-13",
      "What is the result of 1 | 2 in C (bitwise OR)?",
      ["0", "1", "3", "2"],
      2,
      "1 in binary = 01, 2 in binary = 10. 01 | 10 = 11 = 3.",
    ),
    mcq(
      "cm2p1-14",
      "Mixed-type arithmetic in C (int + float) results in:",
      [
        "Always int",
        "Always float",
        "Compiler error",
        "Result is float after implicit conversion",
      ],
      3,
      "When int and float are mixed, C implicitly promotes the int to float before the operation.",
    ),
    mcq(
      "cm2p1-15",
      "What does the ternary operator ?: do?",
      [
        "Performs three additions",
        "A shorthand if-else that returns one of two values",
        "Bitwise operation on three values",
        "Compares three variables",
      ],
      1,
      "The ternary operator (condition ? value_if_true : value_if_false) is a compact if-else expression.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm2p1-pq1",
      "Arithmetic Operations",
      "Write a C program that reads two integers a and b, then prints their sum, difference, product, quotient (integer division), and remainder.",
      [{ input: "10 3", output: "Sum=13\nDiff=7\nProd=30\nQuot=3\nRem=1" }],
      `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Print all 5 operations
    
    return 0;
}`,
      50,
      "C",
      [
        "Use five printf statements for +, -, *, /, and % operators.",
        "Integer division in C truncates decimals. 10/3 = 3, not 3.33.",
        `printf("Sum=%d\\nDiff=%d\\nProd=%d\\nQuot=%d\\nRem=%d\\n", a+b, a-b, a*b, a/b, a%b);`,
      ],
      ["printf", "scanf", "+", "-", "*", "/", "%", "Sum", "Diff", "Prod"],
    ),
    pq(
      "cm2p1-pq2",
      "Bitwise Operations Checker",
      "Write a C program that reads two integers and prints the result of bitwise AND (&), OR (|), and XOR (^) operations on them.",
      [{ input: "5 3", output: "AND=1\nOR=7\nXOR=6" }],
      `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Compute and print bitwise AND, OR, XOR
    
    return 0;
}`,
      50,
      "C",
      [
        "Use the &, |, and ^ operators for bitwise AND, OR, and XOR.",
        "5 = 101 in binary, 3 = 011. AND = 001 = 1, OR = 111 = 7, XOR = 110 = 6.",
        `printf("AND=%d\\nOR=%d\\nXOR=%d\\n", a & b, a | b, a ^ b);`,
      ],
      ["printf", "scanf", "&", "|", "^", "AND", "OR", "XOR"],
    ),
  ],
};

// ─── C Module 2 Part 2: Conditional Branching ────────────────────────────────
const C_M2_P2: PartQuizData = {
  mcqs: [
    mcq(
      "cm2p2-1",
      "What does an if-else statement do in C?",
      [
        "Repeats code a fixed number of times",
        "Executes different code blocks based on a condition",
        "Defines a function",
        "Declares a variable",
      ],
      1,
      "if-else executes one block if the condition is true, and another (optional) block if it's false.",
    ),
    mcq(
      "cm2p2-2",
      "In a switch statement, what does the 'break' keyword do?",
      [
        "Ends the entire program",
        "Exits the switch block after a case executes",
        "Continues to the next iteration",
        "Skips the current case",
      ],
      1,
      "break exits the switch statement. Without break, execution 'falls through' to the next case.",
    ),
    mcq(
      "cm2p2-3",
      "What is 'fall-through' in a switch statement?",
      [
        "The program crashes",
        "Execution continues to the next case after matching",
        "The default case runs",
        "All cases run simultaneously",
      ],
      1,
      "Fall-through means when a case has no break, execution continues into the next case automatically.",
    ),
    mcq(
      "cm2p2-4",
      "Which is the correct syntax for a nested if in C?",
      [
        "if(a) { if(b) { } } else { }",
        "if(a, b) { }",
        "nested if(a)(b) { }",
        "if a and b then",
      ],
      0,
      "Nested ifs use proper braces: if(outer) { if(inner) { ... } } else { ... }",
    ),
    mcq(
      "cm2p2-5",
      "The 'default' case in a switch statement:",
      [
        "Always executes",
        "Executes when no other case matches",
        "Is mandatory",
        "Runs before other cases",
      ],
      1,
      "The default case is optional and runs when no other case value matches the switch expression.",
    ),
    mcq(
      "cm2p2-6",
      "What happens if you forget the 'else' in an if statement?",
      [
        "Compile error",
        "Runtime error",
        "The if block is simply optional; nothing happens if condition is false",
        "The condition defaults to true",
      ],
      2,
      "else is optional. Without it, if the condition is false, nothing happens and execution continues.",
    ),
    mcq(
      "cm2p2-7",
      "What type of value can a switch expression have in C?",
      [
        "float or double only",
        "Any type",
        "Integer or character (integral type)",
        "String",
      ],
      2,
      "A switch expression must be an integer or character type — float, double, and strings are not allowed.",
    ),
    mcq(
      "cm2p2-8",
      "Which evaluates a chain of conditions most efficiently?",
      [
        "Multiple separate if statements",
        "if-else if-else chain",
        "Nested switch inside if",
        "Multiple while loops",
      ],
      1,
      "An if-else if-else chain is more efficient for multiple conditions because once a true branch is found, the rest are skipped.",
    ),
    mcq(
      "cm2p2-9",
      "What does if(0) evaluate to?",
      ["True", "False", "Error", "Depends on the system"],
      1,
      "In C, 0 is false. if(0) condition is always false — the if block never executes.",
    ),
    mcq(
      "cm2p2-10",
      "Which of the following is correct to check if x is between 1 and 10 inclusive?",
      [
        "if(1 < x < 10)",
        "if(x >= 1 && x <= 10)",
        "if(x in [1,10])",
        "if(1 <= x =< 10)",
      ],
      1,
      "Use logical AND (&&) to combine two conditions: x >= 1 AND x <= 10.",
    ),
    mcq(
      "cm2p2-11",
      'What is the output of: if(5 > 3) printf("A"); else printf("B");',
      ["B", "AB", "A", "Neither"],
      2,
      "5 > 3 is true, so the if block executes and prints 'A'.",
    ),
    mcq(
      "cm2p2-12",
      "The else-if ladder is used when:",
      [
        "You have only one condition",
        "You need to check multiple mutually exclusive conditions",
        "You want infinite repetition",
        "You need a switch statement",
      ],
      1,
      "else-if ladders handle multiple mutually exclusive conditions — only one branch can execute.",
    ),
    mcq(
      "cm2p2-13",
      "In C, any non-zero value in an if condition is treated as:",
      ["False", "True", "Zero", "An error"],
      1,
      "In C, any non-zero value is treated as true in a boolean context.",
    ),
    mcq(
      "cm2p2-14",
      "What is the syntax for a switch case in C?",
      ["case x:", "when x:", "case(x):", "switch case x:"],
      0,
      "switch case syntax: case value: (with a colon, no parentheses around the value).",
    ),
    mcq(
      "cm2p2-15",
      "How can you write 'if a is not equal to b' in C?",
      ["if(a <> b)", "if(a != b)", "if(not a == b)", "if(a ~= b)"],
      1,
      "!= is the 'not equal' relational operator in C.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm2p2-pq1",
      "Grade Calculator",
      "Write a C program that reads an integer score (0-100) and prints the grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).",
      [
        { input: "85", output: "Grade: B" },
        { input: "55", output: "Grade: F" },
      ],
      `#include <stdio.h>

int main() {
    int score;
    scanf("%d", &score);
    // Print grade based on score
    
    return 0;
}`,
      50,
      "C",
      [
        "Use an if-else if-else chain to check score ranges from highest to lowest.",
        "Check >= 90 for A, >= 80 for B, >= 70 for C, >= 60 for D, else F.",
        `if(score >= 90) printf("Grade: A\\n");\nelse if(score >= 80) printf("Grade: B\\n");\nelse if(score >= 70) printf("Grade: C\\n");\nelse if(score >= 60) printf("Grade: D\\n");\nelse printf("Grade: F\\n");`,
      ],
      ["if", "else", "printf", "scanf", "Grade"],
    ),
    pq(
      "cm2p2-pq2",
      "Day Name Printer",
      "Write a C program that reads an integer (1-7) and uses a switch statement to print the day name (1=Monday, ..., 7=Sunday).",
      [
        { input: "1", output: "Monday" },
        { input: "7", output: "Sunday" },
      ],
      `#include <stdio.h>

int main() {
    int day;
    scanf("%d", &day);
    switch(day) {
        // Add cases 1-7 with break and default
    }
    return 0;
}`,
      50,
      "C",
      [
        'Use case 1: printf("Monday\\n"); break; and continue for 2-7, plus default: printf("Invalid\\n");',
        "Don't forget the break; after each case to prevent fall-through.",
        `case 1: printf("Monday\\n"); break;\ncase 2: printf("Tuesday\\n"); break;\n/* ...continue for 3-7 */\ndefault: printf("Invalid\\n");`,
      ],
      ["switch", "case", "break", "default", "printf", "scanf", "Monday"],
    ),
  ],
};

// ─── C Module 2 Part 3: Loops ─────────────────────────────────────────────────
const C_M2_P3: PartQuizData = {
  mcqs: [
    mcq(
      "cm2p3-1",
      "Which loop is guaranteed to execute its body at least once?",
      ["for loop", "while loop", "do-while loop", "None of the above"],
      2,
      "The do-while loop checks the condition after the body executes, so it always runs at least once.",
    ),
    mcq(
      "cm2p3-2",
      "What does the 'break' statement do inside a loop?",
      [
        "Skips the current iteration",
        "Exits the loop immediately",
        "Resets the loop counter",
        "Terminates the program",
      ],
      1,
      "break immediately exits the enclosing loop, continuing execution after the loop.",
    ),
    mcq(
      "cm2p3-3",
      "What does the 'continue' statement do in a loop?",
      [
        "Exits the loop",
        "Terminates the program",
        "Skips the rest of the current iteration and goes to next",
        "Restarts the loop from beginning",
      ],
      2,
      "continue skips the remaining statements in the current iteration and proceeds to the loop's next iteration.",
    ),
    mcq(
      "cm2p3-4",
      "What is an infinite loop?",
      [
        "A loop that runs exactly 100 times",
        "A loop whose condition never becomes false",
        "A loop with break inside",
        "A nested loop",
      ],
      1,
      "An infinite loop runs indefinitely because its condition is always true (or never evaluated to false).",
    ),
    mcq(
      "cm2p3-5",
      'What is the output of: for(int i=0; i<3; i++) printf("%d ", i);',
      ["1 2 3 ", "0 1 2 ", "0 1 2 3 ", "Error"],
      1,
      "The loop starts at i=0, runs while i<3 (i.e., for i=0,1,2), printing '0 1 2 '.",
    ),
    mcq(
      "cm2p3-6",
      "Which loop is best when the number of iterations is known in advance?",
      ["while loop", "do-while loop", "for loop", "goto loop"],
      2,
      "The for loop is ideal when the number of iterations is known — it conveniently combines init, condition, and update.",
    ),
    mcq(
      "cm2p3-7",
      "What does 'goto' do in C?",
      [
        "Terminates the program",
        "Jumps to a labeled statement elsewhere in the code",
        "Creates a new function",
        "Allocates memory",
      ],
      1,
      "goto jumps unconditionally to a label defined elsewhere in the same function. Its use is generally discouraged.",
    ),
    mcq(
      "cm2p3-8",
      "How many times does the body of 'while(0)' execute?",
      [
        "Once",
        "Zero times (never)",
        "Infinite times",
        "Depends on condition inside",
      ],
      1,
      "while(0) — the condition is immediately false, so the body never executes.",
    ),
    mcq(
      "cm2p3-9",
      "In a for loop: for(init; condition; update), what happens when condition is false?",
      [
        "The loop restarts",
        "The update runs one more time",
        "The loop exits",
        "init runs again",
      ],
      2,
      "When the condition evaluates to false, the for loop terminates immediately.",
    ),
    mcq(
      "cm2p3-10",
      "What is a nested loop?",
      [
        "A loop that only runs once",
        "A loop placed inside another loop",
        "A loop with break inside",
        "A loop using goto",
      ],
      1,
      "A nested loop is a loop inside another loop's body — used for 2D patterns, matrices, etc.",
    ),
    mcq(
      "cm2p3-11",
      "What does: int i = 5; while(i > 0) { i--; } — result in for i?",
      ["i = 5", "i = 1", "i = 0", "i = -1"],
      2,
      "The loop decrements i from 5 down while i > 0. It exits when i becomes 0.",
    ),
    mcq(
      "cm2p3-12",
      "Which of these is a valid for loop initialization?",
      [
        "for(x = 0, y = 0; x < 5; x++)",
        "for x in range(5):",
        "for(x; 0; 5)",
        "for(int x = 1; x != 10; x = x * 2)",
      ],
      0,
      "Multiple initializations in a for loop use comma separation: for(x = 0, y = 0; ...; ...)",
    ),
    mcq(
      "cm2p3-13",
      "What is the difference between while and do-while?",
      [
        "while can have break, do-while cannot",
        "do-while tests condition before execution",
        "while tests condition before, do-while tests after",
        "They are identical",
      ],
      2,
      "while tests the condition BEFORE each iteration; do-while tests AFTER, ensuring at least one execution.",
    ),
    mcq(
      "cm2p3-14",
      "To print numbers 1 to 10, the loop condition should be:",
      ["i < 10", "i <= 10", "i != 11", "Both i<=10 and i!=11 work"],
      3,
      "Both i <= 10 and i != 11 correctly loop from 1 to 10 (assuming i starts at 1 and increments by 1).",
    ),
    mcq(
      "cm2p3-15",
      "What is the time complexity of a loop that runs n² times?",
      ["O(n)", "O(log n)", "O(n²)", "O(2n)"],
      2,
      "A nested loop where each runs n times results in n² total iterations — O(n²) complexity.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm2p3-pq1",
      "Factorial Calculator",
      "Write a C program that reads a non-negative integer n and prints its factorial using a for loop. (0! = 1)",
      [
        { input: "5", output: "120" },
        { input: "0", output: "1" },
      ],
      `#include <stdio.h>

int main() {
    int n, i;
    long long fact = 1;
    scanf("%d", &n);
    // Compute factorial using a for loop
    
    printf("%lld\\n", fact);
    return 0;
}`,
      50,
      "C",
      [
        "Multiply fact by each number from 1 to n using a for loop: for(i=1; i<=n; i++).",
        "Inside the loop: fact = fact * i; (or fact *= i;).",
        "for(i = 1; i <= n; i++) fact *= i;",
      ],
      ["for", "fact", "*=", "printf", "scanf", "lld"],
    ),
    pq(
      "cm2p3-pq2",
      "Prime Number Checker",
      "Write a C program that reads an integer n (n > 1) and prints 'Prime' if it is prime, otherwise 'Not Prime'.",
      [
        { input: "7", output: "Prime" },
        { input: "12", output: "Not Prime" },
      ],
      `#include <stdio.h>

int main() {
    int n, i, isPrime = 1;
    scanf("%d", &n);
    for(i = 2; i * i <= n; i++) {
        if(n % i == 0) {
            isPrime = 0;
            break;
        }
    }
    // Print result
    
    return 0;
}`,
      50,
      "C",
      [
        "After the loop, check isPrime flag. If isPrime == 1, print 'Prime', else 'Not Prime'.",
        'Use if-else: if(isPrime) printf("Prime\\n"); else printf("Not Prime\\n");',
        `if(isPrime) printf("Prime\\n");\nelse printf("Not Prime\\n");`,
      ],
      ["isPrime", "printf", "Prime", "Not Prime"],
    ),
  ],
};

// ─── C Module 3: Arrays & Structures ─────────────────────────────────────────
const C_M3_P1: PartQuizData = {
  mcqs: [
    mcq(
      "cm3p1-1",
      "In C, arrays are:",
      [
        "Dynamic collections",
        "Fixed-size collections of elements of the same type",
        "Linked lists",
        "Pointers only",
      ],
      1,
      "Arrays in C are fixed-size, contiguous collections of elements all of the same data type.",
    ),
    mcq(
      "cm3p1-2",
      "What is the index of the first element in a C array?",
      ["1", "0", "-1", "Depends on declaration"],
      1,
      "C arrays are 0-indexed — the first element is at index 0.",
    ),
    mcq(
      "cm3p1-3",
      "How do you declare an integer array of size 5 in C?",
      ["int arr[5];", "array int arr(5);", "int[5] arr;", "arr = int[5]"],
      0,
      "C array declaration syntax: type name[size]; — int arr[5]; declares 5 integers.",
    ),
    mcq(
      "cm3p1-4",
      "A string in C is stored as:",
      [
        "A list type",
        "An array of chars terminated by '\\0'",
        "A pointer to a string object",
        "An int array",
      ],
      1,
      "Strings in C are character arrays ending with the null terminator '\\0'.",
    ),
    mcq(
      "cm3p1-5",
      "What header is needed for string functions like strlen() and strcpy()?",
      ["<stdio.h>", "<stdlib.h>", "<string.h>", "<strings.h>"],
      2,
      "<string.h> provides standard string manipulation functions in C.",
    ),
    mcq(
      "cm3p1-6",
      "What does 'struct' do in C?",
      [
        "Creates a class with methods",
        "Defines a custom data type grouping different types",
        "Creates an array",
        "Imports a library",
      ],
      1,
      "struct defines a user-defined composite data type that groups related variables of different types.",
    ),
    mcq(
      "cm3p1-7",
      "What is a union in C?",
      [
        "Similar to struct but all members share the same memory location",
        "An array of structs",
        "A special function",
        "A pointer type",
      ],
      0,
      "A union allows multiple members to share the same memory — only one member can hold a value at a time.",
    ),
    mcq(
      "cm3p1-8",
      "The size of a union is:",
      [
        "Sum of all member sizes",
        "Size of the smallest member",
        "Size of the largest member",
        "Fixed at 4 bytes",
      ],
      2,
      "A union's size equals the size of its largest member, since all members share that memory.",
    ),
    mcq(
      "cm3p1-9",
      "What is a 2D array in C?",
      [
        "Two separate arrays",
        "An array of arrays (matrix)",
        "A pointer to a pointer",
        "A struct with two fields",
      ],
      1,
      "A 2D array is an array of arrays — it represents a matrix with rows and columns.",
    ),
    mcq(
      "cm3p1-10",
      "Linear search has time complexity:",
      ["O(log n)", "O(1)", "O(n)", "O(n²)"],
      2,
      "Linear search checks each element one by one in the worst case — O(n) time.",
    ),
    mcq(
      "cm3p1-11",
      "Bubble sort works by:",
      [
        "Dividing and conquering",
        "Selecting minimum and placing it",
        "Repeatedly swapping adjacent elements that are out of order",
        "Using a hash table",
      ],
      2,
      "Bubble sort repeatedly compares and swaps adjacent elements until the array is sorted.",
    ),
    mcq(
      "cm3p1-12",
      "What is an enumerated data type (enum) in C?",
      [
        "A type for storing decimals",
        "A user-defined type with named integer constants",
        "A pointer type",
        "A string type",
      ],
      1,
      "enum defines a set of named integer constants for improved code readability.",
    ),
    mcq(
      "cm3p1-13",
      "Out-of-bounds array access in C:",
      [
        "Always causes a compile error",
        "Is detected at runtime",
        "Causes undefined behavior",
        "Is ignored by the compiler",
      ],
      2,
      "C does not check array bounds — accessing out-of-bounds memory causes undefined behavior.",
    ),
    mcq(
      "cm3p1-14",
      "An array of structures in C is:",
      [
        "Not allowed",
        "A single struct variable",
        "Multiple struct instances stored in an array",
        "A pointer to a struct",
      ],
      2,
      "You can create arrays of structs: struct Point pts[10]; stores 10 Point structs.",
    ),
    mcq(
      "cm3p1-15",
      "To access a member of a struct variable in C, you use:",
      ["-> operator", ":: operator", ". (dot) operator", "* operator"],
      2,
      "The dot (.) operator accesses struct members: myStruct.memberName.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm3p1-pq1",
      "Array Sum and Average",
      "Write a C program that reads 5 integers into an array, then prints their sum and average (as a float).",
      [{ input: "2 4 6 8 10", output: "Sum=30\nAvg=6.00" }],
      `#include <stdio.h>

int main() {
    int arr[5], i, sum = 0;
    for(i = 0; i < 5; i++) scanf("%d", &arr[i]);
    // Calculate sum and print avg
    
    return 0;
}`,
      50,
      "C",
      [
        "Loop through the array to compute the sum, then divide by 5.0 for float average.",
        "Use %d for sum and %.2f for average. Cast: (float)sum / 5.",
        `for(i = 0; i < 5; i++) sum += arr[i];\nprintf("Sum=%d\\nAvg=%.2f\\n", sum, (float)sum/5);`,
      ],
      ["sum", "printf", "scanf", "for", "%.2f", "Sum", "Avg"],
    ),
    pq(
      "cm3p1-pq2",
      "Student Record",
      "Define a struct Student with name (char[50]), roll (int), and marks (float). Create one instance, read its values, and print them.",
      [
        {
          input: "Alice 101 95.5",
          output: "Name: Alice\nRoll: 101\nMarks: 95.50",
        },
      ],
      `#include <stdio.h>

struct Student {
    char name[50];
    int roll;
    float marks;
};

int main() {
    struct Student s;
    scanf("%s %d %f", s.name, &s.roll, &s.marks);
    // Print student details
    
    return 0;
}`,
      50,
      "C",
      [
        "Access struct members using dot notation: s.name, s.roll, s.marks.",
        "Use %s for string, %d for int, %.2f for float in printf.",
        `printf("Name: %s\\nRoll: %d\\nMarks: %.2f\\n", s.name, s.roll, s.marks);`,
      ],
      ["struct", "printf", "scanf", "Name", "Roll", "Marks", ".name", ".roll"],
    ),
  ],
};

// ─── C Module 4: Functions ────────────────────────────────────────────────────
const C_M4_P1: PartQuizData = {
  mcqs: [
    mcq(
      "cm4p1-1",
      "What is a function in C?",
      [
        "A loop construct",
        "A self-contained block of code that performs a specific task",
        "A data type",
        "An operator",
      ],
      1,
      "A function is a named, reusable block of code that performs a specific task and can be called from other parts of the program.",
    ),
    mcq(
      "cm4p1-2",
      "What is the difference between call-by-value and call-by-reference?",
      [
        "No difference",
        "Call-by-value copies the argument; call-by-reference passes the actual memory address",
        "Call-by-reference makes a copy",
        "C only supports call-by-value",
      ],
      1,
      "Call-by-value passes a copy; changes inside the function don't affect the original. Call-by-reference passes the address.",
    ),
    mcq(
      "cm4p1-3",
      "A function that calls itself is called:",
      [
        "A loop function",
        "A recursive function",
        "An iterative function",
        "A static function",
      ],
      1,
      "A recursive function is one that calls itself — it needs a base case to avoid infinite recursion.",
    ),
    mcq(
      "cm4p1-4",
      "What keyword is used to return a value from a function?",
      ["exit", "break", "return", "yield"],
      2,
      "The return keyword exits a function and optionally passes a value back to the caller.",
    ),
    mcq(
      "cm4p1-5",
      "What is a function prototype in C?",
      [
        "The function body",
        "A declaration that tells the compiler the function's name, return type, and parameters",
        "A function call",
        "A macro",
      ],
      1,
      "A function prototype is a forward declaration — it informs the compiler about a function before its full definition.",
    ),
    mcq(
      "cm4p1-6",
      "What is the base case in recursion?",
      [
        "The first recursive call",
        "The condition that stops the recursive calls",
        "The function declaration",
        "A parameter",
      ],
      1,
      "The base case is the condition in a recursive function that causes it to stop calling itself.",
    ),
    mcq(
      "cm4p1-7",
      "When you pass an array to a function in C:",
      [
        "A copy of the entire array is made",
        "Only the first element is passed",
        "The array's base address (pointer) is passed",
        "It causes a compile error",
      ],
      2,
      "Arrays in C are passed by reference (their base address) — the function can modify the original array.",
    ),
    mcq(
      "cm4p1-8",
      "What is the return type of a function that doesn't return any value?",
      ["int", "null", "void", "empty"],
      2,
      "void indicates that the function returns no value.",
    ),
    mcq(
      "cm4p1-9",
      "What happens if a recursive function has no base case?",
      [
        "It returns 0 by default",
        "It runs forever, causing a stack overflow",
        "It compiles with a warning",
        "It returns NULL",
      ],
      1,
      "Without a base case, recursion continues indefinitely, exhausting the call stack and causing a stack overflow.",
    ),
    mcq(
      "cm4p1-10",
      "Local variables in a function:",
      [
        "Are accessible from all functions",
        "Are destroyed after the function returns",
        "Persist between function calls",
        "Are always static",
      ],
      1,
      "Local (auto) variables have function scope — they are created when the function is called and destroyed when it returns.",
    ),
    mcq(
      "cm4p1-11",
      "Which function type in C returns no value and takes no parameters?",
      ["int func(int a)", "void func(void)", "float func()", "char* func(int)"],
      1,
      "void func(void) — void return type means no value returned; void parameter means no arguments.",
    ),
    mcq(
      "cm4p1-12",
      "What is the Fibonacci recursive call for F(n)?",
      ["F(n) + F(n-1)", "F(n-1) * F(n-2)", "F(n-1) + F(n-2)", "F(n+1) - F(n)"],
      2,
      "Fibonacci is defined as F(n) = F(n-1) + F(n-2), with base cases F(0)=0, F(1)=1.",
    ),
    mcq(
      "cm4p1-13",
      "The keyword 'static' in a function variable means:",
      [
        "The variable is const",
        "The variable persists between function calls",
        "The variable is global",
        "The function cannot be called",
      ],
      1,
      "A static local variable retains its value between function calls — it is initialized only once.",
    ),
    mcq(
      "cm4p1-14",
      "Passing a pointer to a function allows:",
      [
        "Only reading the value",
        "Only writing a new value",
        "Modifying the original variable through dereferencing",
        "Nothing — same as value",
      ],
      2,
      "Passing a pointer lets the function modify the original variable by dereferencing the pointer.",
    ),
    mcq(
      "cm4p1-15",
      "The scope of a function parameter is:",
      [
        "Global",
        "Local to the function body",
        "Available to all functions in the file",
        "Only the calling function",
      ],
      1,
      "Function parameters are local variables — they exist only within the function's body.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm4p1-pq1",
      "Recursive Factorial",
      "Write a C program with a recursive function int factorial(int n) that returns n!. Read n from input and print the result.",
      [
        { input: "5", output: "120" },
        { input: "0", output: "1" },
      ],
      `#include <stdio.h>

// Recursive factorial function
int factorial(int n) {
    // Add base case and recursive call
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d\\n", factorial(n));
    return 0;
}`,
      50,
      "C",
      [
        "Base case: if n == 0 (or n == 1), return 1. Recursive case: return n * factorial(n-1).",
        "if(n <= 1) return 1; else return n * factorial(n-1);",
        "int factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n - 1);\n}",
      ],
      ["factorial", "return", "if", "n-1", "n *"],
    ),
    pq(
      "cm4p1-pq2",
      "Swap Using Pointers",
      "Write a C function void swap(int *a, int *b) that swaps two integers using pointers. Read two integers, swap them, and print the result.",
      [{ input: "3 7", output: "a=7 b=3" }],
      `#include <stdio.h>

void swap(int *a, int *b) {
    // Swap values using a temporary variable
}

int main() {
    int x, y;
    scanf("%d %d", &x, &y);
    swap(&x, &y);
    printf("a=%d b=%d\\n", x, y);
    return 0;
}`,
      50,
      "C",
      [
        "Use a temporary variable and dereference the pointers: int temp = *a; *a = *b; *b = temp;",
        "Don't forget the * to dereference — without it, you'd swap the addresses, not the values.",
        "int temp = *a;\n*a = *b;\n*b = temp;",
      ],
      ["swap", "*a", "*b", "temp", "printf", "scanf", "&x", "&y"],
    ),
  ],
};

// ─── C Module 5: Pointers ─────────────────────────────────────────────────────
const C_M5_P1: PartQuizData = {
  mcqs: [
    mcq(
      "cm5p1-1",
      "What is a pointer in C?",
      [
        "A variable that stores another variable's value",
        "A variable that stores the memory address of another variable",
        "A function parameter",
        "A string variable",
      ],
      1,
      "A pointer is a variable that holds the memory address (location) of another variable.",
    ),
    mcq(
      "cm5p1-2",
      "Which operator is used to get the address of a variable?",
      ["*", "&", "->", "::"],
      1,
      "The & (address-of) operator returns the memory address of a variable.",
    ),
    mcq(
      "cm5p1-3",
      "Which operator is used to dereference a pointer?",
      ["&", "::", "->", "*"],
      3,
      "The * (dereference) operator accesses the value stored at the address a pointer points to.",
    ),
    mcq(
      "cm5p1-4",
      "How do you declare a pointer to an integer in C?",
      ["pointer int p;", "int p*;", "int *p;", "int &p;"],
      2,
      "Pointer declaration: int *p; — the * indicates p is a pointer to an integer.",
    ),
    mcq(
      "cm5p1-5",
      "What is a NULL pointer?",
      [
        "A pointer to 0",
        "A pointer that doesn't point to any valid memory location",
        "An uninitialized pointer",
        "A pointer to a function",
      ],
      1,
      "A NULL pointer has the value NULL (typically 0) and doesn't point to any valid memory address.",
    ),
    mcq(
      "cm5p1-6",
      "What is pointer arithmetic?",
      [
        "Multiplying two pointers",
        "Adding/subtracting integers to move a pointer to different array elements",
        "Dividing memory addresses",
        "Comparing two pointers with *",
      ],
      1,
      "Pointer arithmetic (p+1, p++, etc.) moves the pointer by the size of the type it points to.",
    ),
    mcq(
      "cm5p1-7",
      "An array name in C is:",
      [
        "A copy of the array",
        "A pointer to the first element of the array",
        "An integer index",
        "A struct member",
      ],
      1,
      "In C, an array name acts as a constant pointer to the first element — arr == &arr[0].",
    ),
    mcq(
      "cm5p1-8",
      "What is a pointer to a pointer?",
      [
        "A regular pointer",
        "A pointer that stores the address of another pointer",
        "An array of pointers",
        "A function pointer",
      ],
      1,
      "A pointer to a pointer (int **pp) stores the address of another pointer variable.",
    ),
    mcq(
      "cm5p1-9",
      "What happens when you access memory through a dangling pointer?",
      [
        "Always returns 0",
        "Causes well-defined behavior",
        "Causes undefined behavior (possible crash)",
        "The compiler catches it",
      ],
      2,
      "A dangling pointer points to freed/invalid memory — accessing it causes undefined behavior.",
    ),
    mcq(
      "cm5p1-10",
      "How do you access a struct member through a pointer?",
      [
        "(*ptr).member or ptr->member",
        "ptr.member",
        "*ptr[member]",
        "ptr::member",
      ],
      0,
      "Both (*ptr).member and ptr->member access a struct member through a pointer. -> is the shorthand.",
    ),
    mcq(
      "cm5p1-11",
      "What does malloc() do in C?",
      [
        "Declares a static array",
        "Dynamically allocates memory on the heap and returns a pointer",
        "Frees memory",
        "Copies memory",
      ],
      1,
      "malloc() dynamically allocates the requested bytes on the heap and returns a void pointer.",
    ),
    mcq(
      "cm5p1-12",
      "After using free() on a pointer, you should:",
      [
        "Use the pointer immediately",
        "Set the pointer to NULL to avoid dangling pointer issues",
        "Allocate more memory",
        "Call malloc() again with the same pointer",
      ],
      1,
      "After free(), set the pointer to NULL to prevent accidental use of the now-invalid address.",
    ),
    mcq(
      "cm5p1-13",
      "Which of these correctly passes a pointer to a function?",
      ["func(x)", "func(&x) with void func(int *p)", "func(*x)", "func(&&x)"],
      1,
      "Pass &x to send the address; the function receives int *p and can modify x via *p.",
    ),
    mcq(
      "cm5p1-14",
      "What is the size of any pointer on a 64-bit system?",
      ["4 bytes", "2 bytes", "8 bytes", "Depends on the type it points to"],
      2,
      "On a 64-bit system, all pointers are 8 bytes (64 bits) regardless of the pointed-to type.",
    ),
    mcq(
      "cm5p1-15",
      "What does ptr++ do to a pointer ptr?",
      [
        "Increments the value at the address by 1",
        "Moves the pointer to the next element (by sizeof the type)",
        "Adds 1 to the raw address value",
        "Makes ptr point to NULL",
      ],
      1,
      "ptr++ advances the pointer by sizeof(*ptr) bytes — moving to the next element in memory.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm5p1-pq1",
      "Pointer Basics",
      "Write a C program that declares an integer x = 42, creates a pointer to it, prints the value using the pointer, then modifies x to 100 through the pointer and prints the new value.",
      [{ input: "(none)", output: "Value: 42\nNew Value: 100" }],
      `#include <stdio.h>

int main() {
    int x = 42;
    int *ptr = &x;
    // Print value through pointer
    // Change x to 100 via pointer
    // Print new value
    return 0;
}`,
      50,
      "C",
      [
        'Use *ptr to dereference and read/write the value. printf("Value: %d\\n", *ptr);',
        "To modify x through the pointer: *ptr = 100;",
        `printf("Value: %d\\n", *ptr);\n*ptr = 100;\nprintf("New Value: %d\\n", *ptr);`,
      ],
      ["ptr", "*ptr", "printf", "Value", "New Value"],
    ),
    pq(
      "cm5p1-pq2",
      "Array Sum Using Pointers",
      "Write a C program that reads 5 integers into an array and uses pointer arithmetic to compute and print their sum.",
      [{ input: "1 2 3 4 5", output: "Sum=15" }],
      `#include <stdio.h>

int main() {
    int arr[5], i, sum = 0;
    int *ptr = arr;
    for(i = 0; i < 5; i++) scanf("%d", arr + i);
    // Use pointer arithmetic to sum the elements
    
    printf("Sum=%d\\n", sum);
    return 0;
}`,
      50,
      "C",
      [
        "Use *(ptr + i) to access each element. Loop from i=0 to 4 adding *(ptr+i) to sum.",
        "for(i=0; i<5; i++) sum += *(ptr + i);",
        "for(i = 0; i < 5; i++) sum += *(ptr + i);",
      ],
      ["ptr", "*", "sum", "scanf", "printf", "Sum"],
    ),
  ],
};

// ─── Generic fallback questions ───────────────────────────────────────────────
const GENERIC_PART_QUIZ: PartQuizData = {
  mcqs: [
    mcq(
      "gen-1",
      "What does 'compile' mean in programming?",
      [
        "Run the program",
        "Translate source code to machine code",
        "Write the source code",
        "Test the program",
      ],
      1,
      "Compilation translates human-readable source code into machine code that the computer can execute.",
    ),
    mcq(
      "gen-2",
      "What is a bug in software?",
      [
        "A feature request",
        "An error or flaw in a program",
        "A type of compiler",
        "A design pattern",
      ],
      1,
      "A bug is an error or unintended behavior in a program that causes it to produce incorrect results.",
    ),
    mcq(
      "gen-3",
      "What is debugging?",
      [
        "Writing code",
        "The process of finding and fixing bugs",
        "Compiling code",
        "Testing performance",
      ],
      1,
      "Debugging is the process of identifying and correcting errors in source code.",
    ),
    mcq(
      "gen-4",
      "Which of these is a programming paradigm?",
      [
        "Binary",
        "Object-Oriented Programming (OOP)",
        "Assembly",
        "Machine Code",
      ],
      1,
      "OOP is a programming paradigm based on objects containing data and methods.",
    ),
    mcq(
      "gen-5",
      "What is a variable?",
      [
        "A fixed value",
        "A named storage location in memory",
        "A type of loop",
        "A function",
      ],
      1,
      "A variable is a named memory location that stores a value which can change during execution.",
    ),
  ],
  programmingQuestions: [
    pq(
      "gen-pq1",
      "Hello World",
      "Write a C program that prints 'Hello, World!' to the console.",
      [{ input: "(none)", output: "Hello, World!" }],
      `#include <stdio.h>

int main() {
    // Print Hello, World!
    return 0;
}`,
      50,
      "C",
      [
        "Use printf() to print text to the console.",
        'printf("Hello, World!\\n");',
        `printf("Hello, World!\\n");`,
      ],
      ["printf", "Hello"],
    ),
    pq(
      "gen-pq2",
      "Even or Odd",
      "Write a C program that reads an integer and prints 'Even' if it is divisible by 2, otherwise 'Odd'.",
      [
        { input: "4", output: "Even" },
        { input: "7", output: "Odd" },
      ],
      `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // Check even or odd
    return 0;
}`,
      50,
      "C",
      [
        "Use the modulo operator: n % 2 == 0 means even.",
        'if(n % 2 == 0) printf("Even\\n"); else printf("Odd\\n");',
        `if(n % 2 == 0) printf("Even\\n"); else printf("Odd\\n");`,
      ],
      ["if", "else", "printf", "Even", "Odd", "%"],
    ),
  ],
};

// ─── C Module 3 Part 2: Structures, Union, Enum ───────────────────────────────
const C_M3_P2: PartQuizData = {
  mcqs: [
    mcq(
      "cm3p2-1",
      "What keyword defines a structure in C?",
      ["class", "struct", "record", "object"],
      1,
      "struct is the keyword used to define a structure in C.",
    ),
    mcq(
      "cm3p2-2",
      "How do you access a struct member?",
      ["->", "::", ".", ":"],
      2,
      "The dot operator (.) accesses struct members via a variable.",
    ),
    mcq(
      "cm3p2-3",
      "Which stores different types but shares memory?",
      ["struct", "array", "union", "pointer"],
      2,
      "union allocates shared memory for all its members.",
    ),
    mcq(
      "cm3p2-4",
      "What is size of union with int(4) and char(1)?",
      ["5 bytes", "4 bytes", "1 byte", "8 bytes"],
      1,
      "union size equals its largest member — here, int is 4 bytes.",
    ),
    mcq(
      "cm3p2-5",
      "What does enum define?",
      ["A function", "Named integer constants", "A loop", "A pointer"],
      1,
      "enum defines a set of named integer constants.",
    ),
    mcq(
      "cm3p2-6",
      "Default starting value of enum?",
      ["1", "0", "-1", "Undefined"],
      1,
      "By default the first enum constant has value 0.",
    ),
    mcq(
      "cm3p2-7",
      "What does typedef do?",
      [
        "Creates new type",
        "Renames a function",
        "Allocates memory",
        "Declares variable",
      ],
      0,
      "typedef creates an alias for an existing data type.",
    ),
    mcq(
      "cm3p2-8",
      "How to access struct via pointer?",
      ["ptr.member", "ptr->member", "*ptr.member", "ptr::member"],
      1,
      "The arrow operator (->) accesses struct members via a pointer.",
    ),
    mcq(
      "cm3p2-9",
      "Declare array of 5 Student structs:",
      ["Student s[5]", "struct Student s[5]", "Student[] s", "s struct[5]"],
      1,
      "struct Student s[5] declares an array of 5 Student structs.",
    ),
    mcq(
      "cm3p2-10",
      "Can a struct contain another struct?",
      ["No", "Yes", "Only with union", "Only with pointers"],
      1,
      "Structs can be nested — a struct member can be another struct.",
    ),
    mcq(
      "cm3p2-11",
      "What is self-referential struct?",
      [
        "Struct with function",
        "Struct with pointer to itself",
        "Struct in union",
        "Struct with array",
      ],
      1,
      "A self-referential struct contains a pointer to the same struct type.",
    ),
    mcq(
      "cm3p2-12",
      "Which can hold int or float but not both?",
      ["struct", "array", "union", "enum"],
      2,
      "union holds only one member at a time in shared memory.",
    ),
    mcq(
      "cm3p2-13",
      "enum Color {RED, GREEN, BLUE}; GREEN value?",
      ["0", "1", "2", "3"],
      1,
      "GREEN is the second constant; enum starts at 0, so GREEN=1.",
    ),
    mcq(
      "cm3p2-14",
      "Struct vs union: key difference?",
      [
        "Structs are faster",
        "Structs store all members separately",
        "Unions are larger",
        "No difference",
      ],
      1,
      "struct stores all members separately; union shares a single memory block.",
    ),
    mcq(
      "cm3p2-15",
      "typedef struct { int x; } Point; declares:",
      ["A variable", "A type alias Point", "A function", "An array"],
      1,
      "typedef struct { ... } Point creates the type alias Point.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm3p2-pq1",
      "Student Record",
      "Define a struct Student with name and marks. Input and print one student.",
      [{ input: "Alice 95", output: "Name: Alice, Marks: 95" }],
      `#include <stdio.h>
struct Student { char name[50]; int marks; };
int main() {
    struct Student s;
    scanf("%s %d", s.name, &s.marks);
    // print name and marks
    return 0;
}`,
      50,
      "C",
      [
        "Use scanf to read name and marks into the struct.",
        'printf("Name: %s, Marks: %d\\n", s.name, s.marks);',
        'printf("Name: %s, Marks: %d\\n", s.name, s.marks);',
      ],
      ["struct", "printf", "name", "marks"],
    ),
    pq(
      "cm3p2-pq2",
      "Union Size Demo",
      "Declare a union with int and char. Print which is larger.",
      [{ input: "(none)", output: "Union size: 4" }],
      `#include <stdio.h>
union Data { int i; char c; };
int main() {
    // print size of union Data
    return 0;
}`,
      50,
      "C",
      [
        "Use sizeof() to get the union size.",
        'printf("Union size: %lu\\n", sizeof(union Data));',
        'printf("Union size: %lu\\n", sizeof(union Data));',
      ],
      ["sizeof", "union", "printf"],
    ),
  ],
};

// ─── C Module 3 Part 3: Searching and Sorting ────────────────────────────────
const C_M3_P3: PartQuizData = {
  mcqs: [
    mcq(
      "cm3p3-1",
      "Linear search worst-case complexity?",
      ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      2,
      "Linear search scans each element once, so O(n) worst case.",
    ),
    mcq(
      "cm3p3-2",
      "Bubble sort compares adjacent elements and:",
      ["Inserts them", "Swaps if out of order", "Deletes them", "Shifts them"],
      1,
      "Bubble sort swaps adjacent elements if they are in the wrong order.",
    ),
    mcq(
      "cm3p3-3",
      "Bubble sort worst-case complexity?",
      ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      2,
      "Bubble sort has O(n²) time complexity in the worst case.",
    ),
    mcq(
      "cm3p3-4",
      "How many passes does bubble sort need?",
      ["1", "n", "n-1", "n/2"],
      2,
      "Bubble sort requires n-1 passes to guarantee sorted order.",
    ),
    mcq(
      "cm3p3-5",
      "Linear search works on:",
      ["Only sorted arrays", "Any array", "Only integers", "Only linked lists"],
      1,
      "Linear search works on any array regardless of order.",
    ),
    mcq(
      "cm3p3-6",
      "What is best case for linear search?",
      ["O(n)", "O(1)", "O(log n)", "O(n²)"],
      1,
      "Best case is O(1) when the target is the first element.",
    ),
    mcq(
      "cm3p3-7",
      "After 1st pass of bubble sort on [5,3,1,4]?",
      ["[3,1,4,5]", "[1,3,4,5]", "[5,3,1,4]", "[3,5,1,4]"],
      0,
      "After first pass, largest element 5 bubbles to the end.",
    ),
    mcq(
      "cm3p3-8",
      "Bubble sort is stable?",
      ["No", "Yes", "Depends on input", "Only for strings"],
      1,
      "Bubble sort is stable — equal elements maintain their relative order.",
    ),
    mcq(
      "cm3p3-9",
      "Linear search returns -1 when:",
      [
        "Array is empty",
        "Element found",
        "Element not found",
        "Array unsorted",
      ],
      2,
      "Linear search returns -1 to indicate the element was not found.",
    ),
    mcq(
      "cm3p3-10",
      "Which sort is simplest to implement?",
      ["Merge sort", "Quick sort", "Bubble sort", "Heap sort"],
      2,
      "Bubble sort is the simplest sorting algorithm to implement.",
    ),
    mcq(
      "cm3p3-11",
      "Space complexity of bubble sort?",
      ["O(n)", "O(n²)", "O(1)", "O(log n)"],
      2,
      "Bubble sort sorts in-place, requiring O(1) extra space.",
    ),
    mcq(
      "cm3p3-12",
      "Which is best for small sorted arrays?",
      ["Bubble sort", "Merge sort", "Quick sort", "Heap sort"],
      0,
      "Bubble sort is efficient for nearly sorted small arrays.",
    ),
    mcq(
      "cm3p3-13",
      "Linear search time for sorted array?",
      ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      2,
      "Linear search is still O(n) even on sorted arrays.",
    ),
    mcq(
      "cm3p3-14",
      "Two elements swap in bubble sort when:",
      ["Left < Right", "Left > Right", "They are equal", "Right is 0"],
      1,
      "Swap occurs when the left element is greater than the right.",
    ),
    mcq(
      "cm3p3-15",
      "After sorting [3,1,2] with bubble sort: result?",
      ["[1,2,3]", "[3,2,1]", "[1,3,2]", "[2,1,3]"],
      0,
      "Bubble sort produces ascending order: [1,2,3].",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm3p3-pq1",
      "Linear Search",
      "Search for value in array; print index or -1.",
      [{ input: "5 3 7 1 9 4\n7", output: "Found at index 2" }],
      `#include <stdio.h>
int main() {
    int arr[5], n, target;
    scanf("%d %d %d %d %d %d", &arr[0],&arr[1],&arr[2],&arr[3],&arr[4]);
    scanf("%d", &target);
    // search target in arr
    return 0;
}`,
      50,
      "C",
      [
        "Loop through array and compare each element with target.",
        'if(arr[i]==target) printf("Found at index %d\\n",i);',
        'if(arr[i]==target){printf("Found at index %d\\n",i);found=1;} if(!found) printf("-1\\n");',
      ],
      ["for", "if", "printf", "Found"],
    ),
    pq(
      "cm3p3-pq2",
      "Bubble Sort",
      "Sort array of 5 integers in ascending order.",
      [{ input: "5 3 8 1 4", output: "1 3 4 5 8" }],
      `#include <stdio.h>
int main() {
    int a[5];
    for(int i=0;i<5;i++) scanf("%d",&a[i]);
    // bubble sort
    return 0;
}`,
      50,
      "C",
      [
        "Use nested loops: outer n-1 times, inner swap adjacent if larger.",
        "if(a[j]>a[j+1]){int t=a[j];a[j]=a[j+1];a[j+1]=t;}",
        "for(i=0;i<4;i++) for(j=0;j<4-i;j++) if(a[j]>a[j+1]){swap}",
      ],
      ["for", "if", "swap", "printf"],
    ),
  ],
};

// ─── C Module 4 Part 2: Recursion and Arrays in Functions ────────────────────
const C_M4_P2: PartQuizData = {
  mcqs: [
    mcq(
      "cm4p2-1",
      "Recursion means a function calls:",
      ["Another function", "Itself", "main()", "printf"],
      1,
      "Recursion is when a function calls itself to solve a smaller problem.",
    ),
    mcq(
      "cm4p2-2",
      "What stops infinite recursion?",
      ["Loop", "Base case", "Return type", "Pointer"],
      1,
      "A base case is the condition that stops recursive calls.",
    ),
    mcq(
      "cm4p2-3",
      "factorial(0) base case returns?",
      ["0", "1", "-1", "undefined"],
      1,
      "By definition, 0! = 1, so factorial(0) returns 1.",
    ),
    mcq(
      "cm4p2-4",
      "factorial(4) recursive call is?",
      ["4*factorial(3)", "factorial(4-1)", "Both A and B", "Neither"],
      2,
      "factorial(4) = 4 * factorial(3) which is same as factorial(4-1).",
    ),
    mcq(
      "cm4p2-5",
      "fib(0)=0,fib(1)=1, fib(5)=?",
      ["3", "5", "8", "4"],
      1,
      "Fibonacci: fib(5)=fib(4)+fib(3)=3+2=5.",
    ),
    mcq(
      "cm4p2-6",
      "Array passed to function is:",
      [
        "Copied",
        "Passed by reference",
        "Passed by value",
        "Converted to pointer",
      ],
      1,
      "Arrays are passed as pointers, so changes affect the original.",
    ),
    mcq(
      "cm4p2-7",
      "To modify array in function, pass:",
      ["int arr", "int arr[]", "int* arr", "Both B and C"],
      3,
      "Both int arr[] and int* arr work for passing an array.",
    ),
    mcq(
      "cm4p2-8",
      "Each recursive call creates a new:",
      ["Global variable", "Stack frame", "Heap block", "File"],
      1,
      "Each recursive call gets its own stack frame with local variables.",
    ),
    mcq(
      "cm4p2-9",
      "Stack overflow occurs when:",
      [
        "Array is large",
        "Recursion too deep",
        "Pointer is null",
        "File not found",
      ],
      1,
      "Too many nested recursive calls exhaust the call stack.",
    ),
    mcq(
      "cm4p2-10",
      "Time complexity of naive fibonacci recursion?",
      ["O(n)", "O(n log n)", "O(2^n)", "O(n²)"],
      2,
      "Naive recursive fibonacci has exponential O(2^n) time complexity.",
    ),
    mcq(
      "cm4p2-11",
      "Function returning largest array element needs:",
      ["Array and size", "Only array", "Only size", "A pointer"],
      0,
      "You need both the array and its size to find the maximum.",
    ),
    mcq(
      "cm4p2-12",
      "sum(n) = n + sum(n-1); base case?",
      ["sum(1)=1", "sum(0)=0", "sum(-1)=0", "sum(n)=n"],
      1,
      "sum(0)=0 is the correct base case for sum of n natural numbers.",
    ),
    mcq(
      "cm4p2-13",
      "Tail recursion means recursive call is:",
      [
        "First in function",
        "Last in function",
        "Inside a loop",
        "Inside if-else",
      ],
      1,
      "In tail recursion the recursive call is the last operation.",
    ),
    mcq(
      "cm4p2-14",
      "Passing 2D array to function signature:",
      ["f(int a[][COLS])", "f(int a[])", "f(int** a)", "f(int a[ROWS])"],
      0,
      "2D arrays need column size in function parameter: int a[][COLS].",
    ),
    mcq(
      "cm4p2-15",
      "Indirect recursion means:",
      [
        "A calls A",
        "A calls B which calls A",
        "A calls B only",
        "No base case",
      ],
      1,
      "Indirect recursion: function A calls B, which calls back to A.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm4p2-pq1",
      "Factorial Recursion",
      "Write recursive function to compute n!.",
      [{ input: "5", output: "120" }],
      `#include <stdio.h>
int factorial(int n) {
    // base case and recursive case
}
int main() {
    int n; scanf("%d",&n);
    printf("%d\\n", factorial(n));
    return 0;
}`,
      50,
      "C",
      [
        "If n==0 return 1, else return n*factorial(n-1).",
        "if(n==0) return 1;",
        "int factorial(int n){if(n==0)return 1; return n*factorial(n-1);}",
      ],
      ["factorial", "return", "if"],
    ),
    pq(
      "cm4p2-pq2",
      "Array Sum Function",
      "Write function sumArray returning sum of array.",
      [{ input: "5\n1 2 3 4 5", output: "15" }],
      `#include <stdio.h>
int sumArray(int arr[], int n) {
    // return sum of all elements
}
int main() {
    int n, arr[100];
    scanf("%d",&n);
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    printf("%d\\n", sumArray(arr,n));
    return 0;
}`,
      50,
      "C",
      [
        "Loop through array and accumulate sum.",
        "int sum=0; for(int i=0;i<n;i++) sum+=arr[i];",
        "int sum=0; for(int i=0;i<n;i++) sum+=arr[i]; return sum;",
      ],
      ["sumArray", "for", "return", "sum"],
    ),
  ],
};

// ─── C Module 5 Part 2: Pointer Arrays, Struct Pointers ──────────────────────
const C_M5_P2: PartQuizData = {
  mcqs: [
    mcq(
      "cm5p2-1",
      "int *arr[5] declares:",
      [
        "Pointer to array",
        "Array of 5 int pointers",
        "2D array",
        "Array pointer",
      ],
      1,
      "int *arr[5] declares an array of 5 pointers to int.",
    ),
    mcq(
      "cm5p2-2",
      "(*ptr).member is same as:",
      ["ptr.member", "ptr->member", "&ptr.member", "ptr[0].member"],
      1,
      "(*ptr).member and ptr->member are equivalent.",
    ),
    mcq(
      "cm5p2-3",
      "Struct pointer arrow operator is:",
      ["::", "->", ".*", "->*"],
      1,
      "The -> operator accesses struct members through a pointer.",
    ),
    mcq(
      "cm5p2-4",
      "char *words[3] is:",
      [
        "2D char array",
        "Array of 3 string pointers",
        "Pointer to char",
        "Char pointer array",
      ],
      1,
      "char *words[3] is an array of 3 pointers to char (strings).",
    ),
    mcq(
      "cm5p2-5",
      "To allocate struct dynamically use:",
      ["malloc(sizeof(struct S))", "new S()", "alloc(S)", "create(S)"],
      0,
      "malloc(sizeof(struct S)) allocates memory for a struct.",
    ),
    mcq(
      "cm5p2-6",
      "struct Node *next; creates:",
      ["Array", "Self-referential link", "Global variable", "Recursive struct"],
      1,
      "A pointer to same struct type creates a self-referential/linked structure.",
    ),
    mcq(
      "cm5p2-7",
      "int (*fptr)(int) declares:",
      ["Array of functions", "Function pointer", "Pointer to int", "Int array"],
      1,
      "int (*fptr)(int) declares a function pointer taking and returning int.",
    ),
    mcq(
      "cm5p2-8",
      "To call function via pointer: fptr = &add; call?",
      ["fptr(3)", "(*fptr)(3)", "Both A and B", "add(fptr)"],
      2,
      "Both fptr(3) and (*fptr)(3) are valid function pointer calls.",
    ),
    mcq(
      "cm5p2-9",
      "Array name is a pointer to:",
      ["Last element", "Random element", "First element", "Middle element"],
      2,
      "An array name points to its first element (index 0).",
    ),
    mcq(
      "cm5p2-10",
      "ptr++ on int pointer moves by:",
      ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      2,
      "int pointer arithmetic increments by sizeof(int) = 4 bytes.",
    ),
    mcq(
      "cm5p2-11",
      "Pointer to pointer int **pp stores:",
      [
        "Address of int",
        "Address of int pointer",
        "Value of int",
        "Array of ints",
      ],
      1,
      "A double pointer int **pp stores the address of an int pointer.",
    ),
    mcq(
      "cm5p2-12",
      "free() is used to:",
      [
        "Allocate memory",
        "Release malloc'd memory",
        "Initialize pointer",
        "Copy pointer",
      ],
      1,
      "free() releases heap memory previously allocated with malloc.",
    ),
    mcq(
      "cm5p2-13",
      "NULL pointer comparison: if(ptr==NULL)?",
      [
        "Syntax error",
        "Check if pointer is uninitialized",
        "Always true",
        "Always false",
      ],
      1,
      "Comparing with NULL checks whether the pointer holds no valid address.",
    ),
    mcq(
      "cm5p2-14",
      "char *argv[] in main() is:",
      ["Int array", "Array of string pointers", "Char value", "File pointer"],
      1,
      "char *argv[] is an array of string (char pointer) arguments.",
    ),
    mcq(
      "cm5p2-15",
      "Dangling pointer points to:",
      ["Null", "Freed/invalid memory", "Another pointer", "Array element"],
      1,
      "A dangling pointer points to memory that has been freed.",
    ),
  ],
  programmingQuestions: [
    pq(
      "cm5p2-pq1",
      "Struct Pointer",
      "Create a struct Point. Use pointer to print x and y.",
      [{ input: "3 7", output: "x=3, y=7" }],
      `#include <stdio.h>
struct Point { int x; int y; };
int main() {
    struct Point p;
    struct Point *ptr = &p;
    scanf("%d %d", &p.x, &p.y);
    // print using ptr->
    return 0;
}`,
      50,
      "C",
      [
        "Use ptr->x and ptr->y to access members.",
        'printf("x=%d, y=%d\\n", ptr->x, ptr->y);',
        'printf("x=%d, y=%d\\n", ptr->x, ptr->y);',
      ],
      ["ptr", "->", "printf", "x=", "y="],
    ),
    pq(
      "cm5p2-pq2",
      "Array of Pointers",
      "Store 3 strings in pointer array and print them.",
      [{ input: "(none)", output: "apple\nbanana\ncherry" }],
      `#include <stdio.h>
int main() {
    char *fruits[3] = {"apple", "banana", "cherry"};
    // print each string
    return 0;
}`,
      50,
      "C",
      [
        "Loop through array using index and printf each string.",
        'for(int i=0;i<3;i++) printf("%s\\n", fruits[i]);',
        'for(int i=0;i<3;i++) printf("%s\\n", fruits[i]);',
      ],
      ["fruits", "printf", "for"],
    ),
  ],
};

// ─── Python Module 1 Part 1: Python Basics ───────────────────────────────────
const PY_M1_P1: PartQuizData = {
  mcqs: [
    mcq(
      "pym1p1-1",
      "Python uses ___ for code blocks.",
      ["{}", "()", "Indentation", "[]"],
      2,
      "Python uses indentation (whitespace) to define code blocks.",
    ),
    mcq(
      "pym1p1-2",
      "Which prints text in Python?",
      ["echo()", "console.log()", "print()", "write()"],
      2,
      "print() is the built-in function to display output in Python.",
    ),
    mcq(
      "pym1p1-3",
      "Read user input with:",
      ["read()", "input()", "scanf()", "cin"],
      1,
      "input() reads a string from standard input in Python.",
    ),
    mcq(
      "pym1p1-4",
      "type(3.14) returns:",
      ["int", "str", "float", "double"],
      2,
      "3.14 is a float literal; type() returns <class 'float'>.",
    ),
    mcq(
      "pym1p1-5",
      "Python comment symbol?",
      ["//", "#", "/*", "--"],
      1,
      "Python uses # to start single-line comments.",
    ),
    mcq(
      "pym1p1-6",
      "Which is a valid variable name?",
      ["2name", "my-var", "_score", "class"],
      2,
      "_score is valid; names can't start with digit or contain hyphens.",
    ),
    mcq(
      "pym1p1-7",
      "bool(0) evaluates to:",
      ["True", "False", "0", "None"],
      1,
      "0 is falsy in Python; bool(0) returns False.",
    ),
    mcq(
      "pym1p1-8",
      "x = '5'; type is?",
      ["int", "float", "str", "bool"],
      2,
      "Single or double quotes create a str in Python.",
    ),
    mcq(
      "pym1p1-9",
      "Python is ___ typed.",
      ["Statically", "Dynamically", "Weakly", "Strongly statically"],
      1,
      "Python uses dynamic typing — types are checked at runtime.",
    ),
    mcq(
      "pym1p1-10",
      "Convert string '42' to int:",
      ["convert('42')", "int('42')", "Integer('42')", "parse('42')"],
      1,
      "int() converts a string to an integer in Python.",
    ),
    mcq(
      "pym1p1-11",
      "print(type(True)) outputs?",
      ["bool", "Boolean", "int", "<class 'bool'>"],
      3,
      "type() returns the class object; printing gives <class 'bool'>.",
    ),
    mcq(
      "pym1p1-12",
      "Multiple assignment: a,b = 1,2; b=?",
      ["1", "2", "(1,2)", "Error"],
      1,
      "Tuple unpacking assigns b=2.",
    ),
    mcq(
      "pym1p1-13",
      "None is Python's equivalent of:",
      ["0", "False", "null/null", "Undefined"],
      2,
      "None represents the absence of a value, similar to null.",
    ),
    mcq(
      "pym1p1-14",
      "f-string syntax?",
      ["'text'", "f'text {var}'", "format('text')", "'text'.format()"],
      1,
      "f-strings use f'...' with {variable} for interpolation.",
    ),
    mcq(
      "pym1p1-15",
      "Integer division operator in Python?",
      ["/ ", "//", "%", "**"],
      1,
      "// performs integer (floor) division in Python.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym1p1-pq1",
      "Greeting",
      "Read a name, print 'Hello, <name>!'",
      [{ input: "Alice", output: "Hello, Alice!" }],
      `name = input()
# print greeting
`,
      71,
      "Python",
      [
        "Use input() then print with f-string.",
        "print(f'Hello, {name}!')",
        "name = input(); print(f'Hello, {name}!')",
      ],
      ["input", "print", "name"],
    ),
    pq(
      "pym1p1-pq2",
      "Type Checker",
      "Read a number, print its type: int or float.",
      [
        { input: "42", output: "int" },
        { input: "3.14", output: "float" },
      ],
      `val = input()
# determine if int or float and print type
`,
      71,
      "Python",
      [
        "Try int(), if ValueError try float().",
        "try: int(val); print('int') except: print('float')",
        "try:\\n  int(val)\\n  print('int')\\nexcept ValueError:\\n  print('float')",
      ],
      ["int", "float", "print", "try", "except"],
    ),
  ],
};

// ─── Python Module 1 Part 2: Python Operators ────────────────────────────────
const PY_M1_P2: PartQuizData = {
  mcqs: [
    mcq(
      "pym1p2-1",
      "2 ** 3 in Python equals?",
      ["6", "8", "9", "5"],
      1,
      "** is the exponentiation operator; 2**3 = 8.",
    ),
    mcq(
      "pym1p2-2",
      "10 % 3 equals?",
      ["3", "1", "0", "2"],
      1,
      "Modulo: 10 % 3 = 1 (remainder after division).",
    ),
    mcq(
      "pym1p2-3",
      "== checks?",
      ["Assignment", "Equality", "Identity", "Membership"],
      1,
      "== tests value equality between two objects.",
    ),
    mcq(
      "pym1p2-4",
      "not True evaluates to?",
      ["True", "False", "None", "Error"],
      1,
      "not negates a boolean: not True is False.",
    ),
    mcq(
      "pym1p2-5",
      "x = 5; x += 3; x is?",
      ["5", "3", "8", "15"],
      2,
      "x += 3 is shorthand for x = x + 3 = 8.",
    ),
    mcq(
      "pym1p2-6",
      "'a' in 'cat' returns?",
      ["True", "False", "'a'", "1"],
      0,
      "in tests membership; 'a' is in 'cat', so True.",
    ),
    mcq(
      "pym1p2-7",
      "is operator checks?",
      ["Value equality", "Identity (same object)", "Type", "Membership"],
      1,
      "is tests if two variables point to the same object in memory.",
    ),
    mcq(
      "pym1p2-8",
      "True and False =?",
      ["True", "False", "None", "Error"],
      1,
      "and: both must be True; True and False = False.",
    ),
    mcq(
      "pym1p2-9",
      "5 != 5 evaluates to?",
      ["True", "False", "0", "Error"],
      1,
      "!= is not-equal; 5 != 5 is False.",
    ),
    mcq(
      "pym1p2-10",
      "3 > 2 > 1 in Python?",
      ["Error", "False", "True", "2"],
      2,
      "Python supports chained comparisons: 3>2>1 is True.",
    ),
    mcq(
      "pym1p2-11",
      "4 // 3 = ?",
      ["1.33", "1", "0", "2"],
      1,
      "Integer division: 4 // 3 = 1.",
    ),
    mcq(
      "pym1p2-12",
      "or returns first truthy value?",
      ["No", "Yes", "Only True", "Depends"],
      1,
      "or short-circuits and returns the first truthy operand.",
    ),
    mcq(
      "pym1p2-13",
      "x = 10; x //= 3; x = ?",
      ["3", "3.3", "4", "2"],
      0,
      "x //= 3 means x = x // 3 = 10 // 3 = 3.",
    ),
    mcq(
      "pym1p2-14",
      "not in tests?",
      ["Absence", "Presence", "Type", "Identity"],
      0,
      "not in tests whether an element is absent from a sequence.",
    ),
    mcq(
      "pym1p2-15",
      "Comparison operator precedence vs arithmetic?",
      [
        "Same",
        "Comparison higher",
        "Arithmetic higher",
        "Equal but left-to-right",
      ],
      2,
      "Arithmetic operators have higher precedence than comparisons.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym1p2-pq1",
      "Calculator",
      "Read two numbers and operator (+,-,*,/), print result.",
      [{ input: "10 3 +", output: "13" }],
      `a, b, op = input().split()
a, b = float(a), float(b)
# compute and print result
`,
      71,
      "Python",
      [
        "Use if/elif to handle each operator.",
        "if op=='+': print(int(a+b)) elif op=='-': print(int(a-b))",
        "if op=='+':print(int(a+b))\nelif op=='-':print(int(a-b))\nelif op=='*':print(int(a*b))\nelif op=='/':print(int(a/b))",
      ],
      ["if", "elif", "print", "op"],
    ),
    pq(
      "pym1p2-pq2",
      "Even/Odd/Zero",
      "Read integer, print Even, Odd, or Zero.",
      [
        { input: "4", output: "Even" },
        { input: "7", output: "Odd" },
        { input: "0", output: "Zero" },
      ],
      `n = int(input())
# check and print Even, Odd, or Zero
`,
      71,
      "Python",
      [
        "Use % 2 to check even/odd, and == 0 for zero.",
        "if n==0: print('Zero') elif n%2==0: print('Even') else: print('Odd')",
        "if n==0:print('Zero')\nelif n%2==0:print('Even')\nelse:print('Odd')",
      ],
      ["if", "elif", "else", "print", "Even", "Odd", "Zero"],
    ),
  ],
};

// ─── Python Module 2 Part 1: Control Flow ────────────────────────────────────
const PY_M2_P1: PartQuizData = {
  mcqs: [
    mcq(
      "pym2p1-1",
      "elif is short for:",
      ["else if", "else elif", "end if", "extra if"],
      0,
      "elif stands for 'else if' in Python.",
    ),
    mcq(
      "pym2p1-2",
      "range(5) generates:",
      ["1 to 5", "0 to 5", "0 to 4", "1 to 4"],
      2,
      "range(5) produces 0,1,2,3,4 — five values starting at 0.",
    ),
    mcq(
      "pym2p1-3",
      "Which skips to next iteration?",
      ["break", "continue", "pass", "return"],
      1,
      "continue skips the remaining code in the current iteration.",
    ),
    mcq(
      "pym2p1-4",
      "for i in range(2,6): last i?",
      ["6", "5", "4", "2"],
      1,
      "range(2,6) stops before 6, so last value is 5.",
    ),
    mcq(
      "pym2p1-5",
      "while True loop exits with:",
      ["continue", "break", "pass", "return"],
      1,
      "break exits a loop immediately.",
    ),
    mcq(
      "pym2p1-6",
      "pass statement does:",
      [
        "Breaks loop",
        "Nothing (placeholder)",
        "Skips iteration",
        "Ends function",
      ],
      1,
      "pass is a no-operation placeholder used where syntax requires a statement.",
    ),
    mcq(
      "pym2p1-7",
      "for..else runs else when?",
      ["Loop breaks", "Loop completes without break", "Always", "Never"],
      1,
      "The else clause of a for loop runs if no break occurred.",
    ),
    mcq(
      "pym2p1-8",
      "range(0,10,2) generates?",
      ["0,2,4,6,8,10", "0,2,4,6,8", "1,3,5,7,9", "0,1,2"],
      1,
      "range(0,10,2) = 0,2,4,6,8 — step 2, stop before 10.",
    ),
    mcq(
      "pym2p1-9",
      "Nested if with multiple conditions use:",
      ["and/or", "nested elif", "both", "switch"],
      2,
      "Both and/or operators and nested elif can handle complex conditions.",
    ),
    mcq(
      "pym2p1-10",
      "Ternary expression syntax?",
      ["x if cond else y", "cond ? x : y", "if cond: x", "x when cond"],
      0,
      "Python ternary: value_if_true if condition else value_if_false.",
    ),
    mcq(
      "pym2p1-11",
      "while loop checks condition:",
      ["Once", "After each iteration", "Before each iteration", "Never"],
      2,
      "while evaluates the condition before each iteration.",
    ),
    mcq(
      "pym2p1-12",
      "do-while equivalent in Python?",
      ["while True + break", "for loop", "No equivalent", "do: ... while"],
      0,
      "Use while True with a break at the end to mimic do-while.",
    ),
    mcq(
      "pym2p1-13",
      "for i in 'hi': iterates over?",
      ["Words", "Characters", "Bytes", "Lines"],
      1,
      "Iterating over a string yields individual characters.",
    ),
    mcq(
      "pym2p1-14",
      "enumerate(['a','b']) yields?",
      ["Indices only", "(index, value) pairs", "Values only", "Reversed list"],
      1,
      "enumerate returns (index, value) tuples for each element.",
    ),
    mcq(
      "pym2p1-15",
      "range(5,0,-1) produces?",
      ["5,4,3,2,1", "1,2,3,4,5", "5,4,3,2", "4,3,2,1"],
      0,
      "range(5,0,-1) counts down: 5,4,3,2,1.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym2p1-pq1",
      "FizzBuzz",
      "Print 1-20: Fizz(3), Buzz(5), FizzBuzz(both).",
      [{ input: "(none)", output: "1\n2\nFizz\n4\nBuzz\nFizz..." }],
      `for i in range(1, 21):
    # print FizzBuzz pattern
    pass
`,
      71,
      "Python",
      [
        "Check divisibility by 15 first, then 3, then 5.",
        "if i%15==0: print('FizzBuzz') elif i%3==0: print('Fizz') elif i%5==0: print('Buzz') else: print(i)",
        "for i in range(1,21):\n  if i%15==0:print('FizzBuzz')\n  elif i%3==0:print('Fizz')\n  elif i%5==0:print('Buzz')\n  else:print(i)",
      ],
      ["for", "if", "elif", "FizzBuzz", "Fizz", "Buzz", "print"],
    ),
    pq(
      "pym2p1-pq2",
      "Sum Until Zero",
      "Read numbers until 0, print sum.",
      [{ input: "3\n5\n2\n0", output: "10" }],
      `total = 0
# read and sum numbers until 0
print(total)
`,
      71,
      "Python",
      [
        "Use while True, break when input is 0.",
        "n=int(input()); if n==0: break; total+=n",
        "while True:\n  n=int(input())\n  if n==0:break\n  total+=n",
      ],
      ["while", "break", "input", "total", "print"],
    ),
  ],
};

// ─── Python Module 2 Part 2: Functions ───────────────────────────────────────
const PY_M2_P2: PartQuizData = {
  mcqs: [
    mcq(
      "pym2p2-1",
      "Define a function with keyword:",
      ["function", "def", "func", "fn"],
      1,
      "def keyword defines a function in Python.",
    ),
    mcq(
      "pym2p2-2",
      "Default argument: def f(x=5): f() uses x=?",
      ["0", "None", "5", "Error"],
      2,
      "If no argument passed, default value 5 is used.",
    ),
    mcq(
      "pym2p2-3",
      "*args collects:",
      ["Keyword args", "Positional args as tuple", "Dict args", "No args"],
      1,
      "*args collects extra positional arguments into a tuple.",
    ),
    mcq(
      "pym2p2-4",
      "**kwargs collects:",
      ["Positional args", "Keyword args as dict", "List of args", "No args"],
      1,
      "**kwargs collects keyword arguments into a dictionary.",
    ),
    mcq(
      "pym2p2-5",
      "lambda x: x*2 is?",
      ["Class", "Anonymous function", "Decorator", "Generator"],
      1,
      "lambda creates a small anonymous (unnamed) function.",
    ),
    mcq(
      "pym2p2-6",
      "return without value returns?",
      ["0", "False", "None", "Error"],
      2,
      "A bare return statement (or no return) returns None.",
    ),
    mcq(
      "pym2p2-7",
      "Functions are ___ in Python.",
      ["Primitives", "First-class objects", "Only callable", "Static"],
      1,
      "Functions are first-class objects; assignable to variables.",
    ),
    mcq(
      "pym2p2-8",
      "Scope: variable inside function is?",
      ["Global", "Local", "Both", "Module-level"],
      1,
      "Variables defined inside a function have local scope.",
    ),
    mcq(
      "pym2p2-9",
      "global keyword does what?",
      [
        "Creates variable",
        "Accesses global var inside function",
        "Deletes variable",
        "Imports module",
      ],
      1,
      "global declares that a variable inside a function refers to the global scope.",
    ),
    mcq(
      "pym2p2-10",
      "Recursive function must have?",
      ["Loop", "Base case", "Global variable", "Return type"],
      1,
      "A base case prevents infinite recursion.",
    ),
    mcq(
      "pym2p2-11",
      "f = lambda a,b: a+b; f(2,3)?",
      ["23", "5", "2+3", "Error"],
      1,
      "lambda a,b: a+b adds two values; f(2,3) = 5.",
    ),
    mcq(
      "pym2p2-12",
      "A function can return multiple values as?",
      ["List", "Tuple", "Both", "Only single value"],
      2,
      "Python functions can return a tuple (multiple values) or a list.",
    ),
    mcq(
      "pym2p2-13",
      "def f(): pass — calling f() returns?",
      ["0", "''", "None", "Error"],
      2,
      "A function with only pass returns None.",
    ),
    mcq(
      "pym2p2-14",
      "Higher-order function:",
      ["Uses loops", "Takes/returns functions", "Has *args", "Is a class"],
      1,
      "Higher-order functions accept or return other functions.",
    ),
    mcq(
      "pym2p2-15",
      "Docstring is placed:",
      ["After return", "After def line", "Before def", "At module start"],
      1,
      "A docstring triple-quoted string goes right after the def line.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym2p2-pq1",
      "Power Function",
      "Write function power(base, exp) using recursion.",
      [{ input: "2 10", output: "1024" }],
      `def power(base, exp):
    # base case and recursive case
    pass

b, e = map(int, input().split())
print(power(b, e))
`,
      71,
      "Python",
      [
        "If exp==0 return 1, else return base * power(base, exp-1).",
        "if exp==0: return 1",
        "def power(b,e):\n  if e==0:return 1\n  return b*power(b,e-1)",
      ],
      ["def", "power", "return", "if"],
    ),
    pq(
      "pym2p2-pq2",
      "Kwargs Greeting",
      "Function greet(**info) prints name and city.",
      [{ input: "(none)", output: "Hello Alice from Paris" }],
      `def greet(**info):
    # print greeting using info dict
    pass

greet(name="Alice", city="Paris")
`,
      71,
      "Python",
      [
        "Access info['name'] and info['city'] in the function.",
        "print(f\"Hello {info['name']} from {info['city']}\")",
        "def greet(**info): print(f\"Hello {info['name']} from {info['city']}\")",
      ],
      ["def", "greet", "print", "name", "city"],
    ),
  ],
};

// ─── Python Module 3 Part 1: Data Structures ─────────────────────────────────
const PY_M3_P1: PartQuizData = {
  mcqs: [
    mcq(
      "pym3p1-1",
      "List is ___ in Python.",
      ["Immutable", "Mutable", "Fixed-size", "Static"],
      1,
      "Lists are mutable — elements can be added, removed, or changed.",
    ),
    mcq(
      "pym3p1-2",
      "Tuple vs list: key difference?",
      [
        "Tuple faster",
        "Tuple is immutable",
        "Tuple sorted",
        "Tuple no duplicates",
      ],
      1,
      "Tuples are immutable; their elements cannot be changed after creation.",
    ),
    mcq(
      "pym3p1-3",
      "dict['key'] raises ___ if missing?",
      ["ValueError", "IndexError", "KeyError", "TypeError"],
      2,
      "Accessing a missing key in a dict raises KeyError.",
    ),
    mcq(
      "pym3p1-4",
      "Set stores:",
      [
        "Ordered duplicates",
        "Unordered unique values",
        "Key-value pairs",
        "Indexed items",
      ],
      1,
      "Sets store unique, unordered elements.",
    ),
    mcq(
      "pym3p1-5",
      "List comprehension: [x*2 for x in range(3)]?",
      ["[0,2,4]", "[2,4,6]", "[1,2,3]", "[0,1,2]"],
      0,
      "range(3) gives 0,1,2; doubled: [0,2,4].",
    ),
    mcq(
      "pym3p1-6",
      "dict.get('k', 0) returns when 'k' missing?",
      ["None", "KeyError", "0", "False"],
      2,
      "get() returns the default (0 here) when the key is absent.",
    ),
    mcq(
      "pym3p1-7",
      "append() vs extend() on list?",
      [
        "Both add one",
        "append adds one item, extend adds iterable",
        "extend adds one",
        "No difference",
      ],
      1,
      "append() adds a single item; extend() adds all items from an iterable.",
    ),
    mcq(
      "pym3p1-8",
      "len({'a':1,'b':2}) =?",
      ["1", "2", "4", "0"],
      1,
      "len() on a dict returns number of key-value pairs.",
    ),
    mcq(
      "pym3p1-9",
      "list[-1] accesses?",
      ["First element", "Last element", "Middle element", "Error"],
      1,
      "Negative index -1 accesses the last element.",
    ),
    mcq(
      "pym3p1-10",
      "Remove duplicate values using?",
      ["list()", "set()", "dict()", "tuple()"],
      1,
      "Converting to a set removes duplicates.",
    ),
    mcq(
      "pym3p1-11",
      "a = [1,2]; b = a; b[0]=9; a[0]=?",
      ["1", "9", "Error", "0"],
      1,
      "b=a shares the same reference; modifying b changes a too.",
    ),
    mcq(
      "pym3p1-12",
      "Sorted dict by value uses?",
      [
        "sorted(d)",
        "sorted(d.items(),key=lambda x:x[1])",
        "d.sort()",
        "sorted(d.values())",
      ],
      1,
      "sorted() with key=lambda x:x[1] sorts by dict values.",
    ),
    mcq(
      "pym3p1-13",
      "s = {1,2,3}; s.add(2); len(s)?",
      ["4", "3", "2", "Error"],
      1,
      "Sets ignore duplicate additions; len remains 3.",
    ),
    mcq(
      "pym3p1-14",
      "Slice [1:4] on [0,1,2,3,4,5]?",
      ["[1,2,3,4]", "[1,2,3]", "[0,1,2,3]", "[2,3,4]"],
      1,
      "Slice [1:4] returns indices 1,2,3 — stops before index 4.",
    ),
    mcq(
      "pym3p1-15",
      "dict.items() returns?",
      ["Keys only", "Values only", "(key,value) pairs", "Count"],
      2,
      "dict.items() returns view of (key, value) pairs.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym3p1-pq1",
      "Word Frequency",
      "Count frequency of each word in a sentence.",
      [{ input: "hello world hello", output: "hello: 2\nworld: 1" }],
      `text = input().split()
freq = {}
# build frequency dict and print sorted
`,
      71,
      "Python",
      [
        "Loop words, increment freq[word] for each occurrence.",
        "for w in text: freq[w] = freq.get(w,0) + 1",
        "for w in text:freq[w]=freq.get(w,0)+1\nfor k,v in sorted(freq.items()):print(f'{k}: {v}')",
      ],
      ["freq", "get", "for", "print"],
    ),
    pq(
      "pym3p1-pq2",
      "List Comprehension Filter",
      "Print squares of even numbers 1-10.",
      [{ input: "(none)", output: "[4, 16, 36, 64, 100]" }],
      `# one-liner list comprehension
`,
      71,
      "Python",
      [
        "Use [x**2 for x in range(1,11) if x%2==0].",
        "[x**2 for x in range(1,11) if x%2==0]",
        "print([x**2 for x in range(1,11) if x%2==0])",
      ],
      ["print", "range", "for", "if", "**"],
    ),
  ],
};

// ─── Python Module 3 Part 2: Strings and Files ───────────────────────────────
const PY_M3_P2: PartQuizData = {
  mcqs: [
    mcq(
      "pym3p2-1",
      "'hello'.upper() returns?",
      ["hello", "HELLO", "Hello", "hELLO"],
      1,
      "upper() converts all characters to uppercase.",
    ),
    mcq(
      "pym3p2-2",
      "'  hi  '.strip() returns?",
      ["'  hi  '", "'hi'", "' hi '", "'hi  '"],
      1,
      "strip() removes leading and trailing whitespace.",
    ),
    mcq(
      "pym3p2-3",
      "f-string inserts variable with:",
      ["${var}", "%(var)s", "{var}", "[[var]]"],
      2,
      "f-strings use {variable} inside f'...' to embed values.",
    ),
    mcq(
      "pym3p2-4",
      "'cat,dog'.split(',') returns?",
      ["'cat' 'dog'", "['cat','dog']", "('cat','dog')", "cat dog"],
      1,
      "split() returns a list of substrings.",
    ),
    mcq(
      "pym3p2-5",
      "open() default mode?",
      ["'w'", "'a'", "'r'", "'rb'"],
      2,
      "Default mode is 'r' — read text.",
    ),
    mcq(
      "pym3p2-6",
      "with open() ensures?",
      [
        "File stays open",
        "File auto-closes",
        "File is faster",
        "File is binary",
      ],
      1,
      "with statement guarantees the file is closed after the block.",
    ),
    mcq(
      "pym3p2-7",
      "file.read() returns?",
      ["List of lines", "Entire file as string", "First line", "Nothing"],
      1,
      "read() reads the entire file content as a single string.",
    ),
    mcq(
      "pym3p2-8",
      "file.readlines() returns?",
      ["String", "List of lines", "Generator", "Dict"],
      1,
      "readlines() returns a list where each element is one line.",
    ),
    mcq(
      "pym3p2-9",
      "'hello'[1:3] returns?",
      ["'he'", "'el'", "'ell'", "'hel'"],
      1,
      "Slice [1:3] returns characters at indices 1 and 2: 'el'.",
    ),
    mcq(
      "pym3p2-10",
      "'ab' * 3 returns?",
      ["'ab3'", "'ababab'", "['ab','ab','ab']", "Error"],
      1,
      "String repetition: 'ab' * 3 = 'ababab'.",
    ),
    mcq(
      "pym3p2-11",
      "'hello'.replace('l','r') returns?",
      ["'herro'", "'hello'", "'helo'", "Error"],
      0,
      "replace() substitutes all occurrences: 'herro'.",
    ),
    mcq(
      "pym3p2-12",
      "'Hello World'.lower() ?",
      ["'HELLO WORLD'", "'hello world'", "'Hello World'", "'hELLO wORLD'"],
      1,
      "lower() converts entire string to lowercase.",
    ),
    mcq(
      "pym3p2-13",
      "Write mode 'w' does what to existing file?",
      ["Appends", "Overwrites", "Reads", "Raises error"],
      1,
      "Mode 'w' overwrites the file if it already exists.",
    ),
    mcq(
      "pym3p2-14",
      "','.join(['a','b','c']) returns?",
      ["'a,b,c'", "['a,b,c']", "'abc'", "'a b c'"],
      0,
      "join() concatenates list elements with the separator.",
    ),
    mcq(
      "pym3p2-15",
      "'Python'.startswith('Py') ?",
      ["False", "True", "'Py'", "None"],
      1,
      "startswith() returns True if string begins with the given prefix.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym3p2-pq1",
      "Reverse Words",
      "Reverse the order of words in a sentence.",
      [{ input: "hello world python", output: "python world hello" }],
      `sentence = input()
# reverse word order and print
`,
      71,
      "Python",
      [
        "Split into list, reverse, then join.",
        "words = sentence.split(); words.reverse(); print(' '.join(words))",
        "print(' '.join(sentence.split()[::-1]))",
      ],
      ["split", "join", "reverse", "print"],
    ),
    pq(
      "pym3p2-pq2",
      "Count Vowels",
      "Count vowels in input string.",
      [{ input: "Hello World", output: "3" }],
      `text = input().lower()
# count vowels and print count
`,
      71,
      "Python",
      [
        "Loop through characters and check if in 'aeiou'.",
        "count = sum(1 for c in text if c in 'aeiou')",
        "count=sum(1 for c in text if c in 'aeiou'); print(count)",
      ],
      ["for", "in", "sum", "print", "aeiou"],
    ),
  ],
};

// ─── Python Module 4 Part 1: OOP ─────────────────────────────────────────────
const PY_M4_P1: PartQuizData = {
  mcqs: [
    mcq(
      "pym4p1-1",
      "Define a class with keyword:",
      ["class", "def", "object", "struct"],
      0,
      "class keyword defines a new class in Python.",
    ),
    mcq(
      "pym4p1-2",
      "__init__ is called:",
      [
        "Never",
        "When class is imported",
        "When object is created",
        "When method is called",
      ],
      2,
      "__init__ is the constructor, called automatically on object creation.",
    ),
    mcq(
      "pym4p1-3",
      "self refers to:",
      ["Class itself", "Current instance", "Parent class", "Module"],
      1,
      "self refers to the current object instance.",
    ),
    mcq(
      "pym4p1-4",
      "Inheritance syntax?",
      ["class B(A)", "class B extends A", "class B inherits A", "B = class(A)"],
      0,
      "Python inheritance: class Child(Parent):.",
    ),
    mcq(
      "pym4p1-5",
      "super() calls:",
      [
        "Self methods",
        "Parent class methods",
        "Static methods",
        "Built-in functions",
      ],
      1,
      "super() provides access to parent class methods and __init__.",
    ),
    mcq(
      "pym4p1-6",
      "Polymorphism means:",
      [
        "Multiple inheritance",
        "Same interface, different behavior",
        "Private methods",
        "Static methods",
      ],
      1,
      "Polymorphism allows different classes to share the same interface.",
    ),
    mcq(
      "pym4p1-7",
      "Name mangling __attr makes it:",
      ["Public", "Private (name-mangled)", "Protected", "Static"],
      1,
      "Double underscore triggers name mangling for encapsulation.",
    ),
    mcq(
      "pym4p1-8",
      "@staticmethod does NOT receive?",
      ["cls", "self", "Both cls and self", "Arguments"],
      1,
      "Static methods don't receive self (or cls).",
    ),
    mcq(
      "pym4p1-9",
      "@classmethod receives as first arg?",
      ["self", "cls", "args", "obj"],
      1,
      "Class methods receive cls (the class itself) as first argument.",
    ),
    mcq(
      "pym4p1-10",
      "isinstance(obj, MyClass) checks?",
      [
        "obj type is int",
        "obj is instance of MyClass",
        "obj has attribute",
        "obj is None",
      ],
      1,
      "isinstance() checks if obj is an instance of MyClass or subclass.",
    ),
    mcq(
      "pym4p1-11",
      "__str__ method is used for?",
      ["Comparison", "String representation", "Arithmetic", "Iteration"],
      1,
      "__str__ defines how an object is converted to a human-readable string.",
    ),
    mcq(
      "pym4p1-12",
      "Class variable is shared by:",
      ["Only one instance", "All instances", "Only subclasses", "Only methods"],
      1,
      "Class variables are shared across all instances of the class.",
    ),
    mcq(
      "pym4p1-13",
      "Overriding a method means?",
      [
        "Calling parent method",
        "Replacing parent method in child",
        "Deleting method",
        "Adding new method",
      ],
      1,
      "Method overriding replaces a parent method with a child's version.",
    ),
    mcq(
      "pym4p1-14",
      "Abstract class cannot be?",
      ["Inherited", "Instantiated", "Extended", "Defined"],
      1,
      "Abstract classes cannot be instantiated directly.",
    ),
    mcq(
      "pym4p1-15",
      "Encapsulation means?",
      [
        "Inheriting classes",
        "Hiding data inside class",
        "Multiple inheritance",
        "Using decorators",
      ],
      1,
      "Encapsulation bundles data and methods and restricts direct access.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym4p1-pq1",
      "Animal Classes",
      "Create Animal base class and Dog subclass with speak().",
      [{ input: "(none)", output: "Woof!" }],
      `class Animal:
    def speak(self):
        pass  # override in subclass

class Dog(Animal):
    # override speak
    pass

d = Dog()
print(d.speak())
`,
      71,
      "Python",
      [
        "Override speak() in Dog to return 'Woof!'.",
        "def speak(self): return 'Woof!'",
        "class Dog(Animal):\n  def speak(self): return 'Woof!'\nprint(Dog().speak())",
      ],
      ["class", "def", "speak", "return", "Woof"],
    ),
    pq(
      "pym4p1-pq2",
      "Counter Class",
      "Class Counter with increment(), decrement(), and get().",
      [{ input: "(none)", output: "2" }],
      `class Counter:
    def __init__(self):
        self.count = 0
    # add increment, decrement, get methods

c = Counter()
c.increment()
c.increment()
c.increment()
c.decrement()
print(c.get())
`,
      71,
      "Python",
      [
        "increment adds 1, decrement subtracts 1, get returns count.",
        "def increment(self): self.count += 1",
        "def increment(self):self.count+=1\ndef decrement(self):self.count-=1\ndef get(self):return self.count",
      ],
      ["def", "increment", "decrement", "get", "count", "return"],
    ),
  ],
};

// ─── Python Module 4 Part 2: Modules and Error Handling ──────────────────────
const PY_M4_P2: PartQuizData = {
  mcqs: [
    mcq(
      "pym4p2-1",
      "Import specific function syntax?",
      [
        "import math.sqrt",
        "from math import sqrt",
        "include math",
        "use math.sqrt",
      ],
      1,
      "from math import sqrt imports just the sqrt function.",
    ),
    mcq(
      "pym4p2-2",
      "__name__ == '__main__' means?",
      [
        "Module imported",
        "Script run directly",
        "Class defined",
        "Error occurred",
      ],
      1,
      "__name__ equals '__main__' only when the script is run directly.",
    ),
    mcq(
      "pym4p2-3",
      "try block runs code that might?",
      ["Always succeed", "Raise an exception", "Be imported", "Be a function"],
      1,
      "try wraps code that might raise an exception.",
    ),
    mcq(
      "pym4p2-4",
      "except ValueError catches?",
      ["All errors", "File errors", "Value conversion errors", "Syntax errors"],
      2,
      "ValueError is raised for invalid value operations like int('abc').",
    ),
    mcq(
      "pym4p2-5",
      "finally block runs?",
      ["Only on error", "Only on success", "Always", "Never on error"],
      2,
      "finally always executes regardless of whether an exception occurred.",
    ),
    mcq(
      "pym4p2-6",
      "raise keyword does what?",
      [
        "Catches exception",
        "Throws exception",
        "Ignores exception",
        "Logs exception",
      ],
      1,
      "raise manually throws an exception.",
    ),
    mcq(
      "pym4p2-7",
      "Custom exception inherits from?",
      ["object", "Exception", "BaseError", "Error"],
      1,
      "Custom exceptions should inherit from Exception.",
    ),
    mcq(
      "pym4p2-8",
      "import math; math.pi ?",
      ["3", "3.14159...", "'pi'", "Error"],
      1,
      "math.pi provides the float value of π ≈ 3.14159.",
    ),
    mcq(
      "pym4p2-9",
      "except clause can catch multiple with?",
      ["except A, B", "except (A, B)", "except A or B", "except A|B"],
      1,
      "Use a tuple: except (ValueError, TypeError): to catch multiple.",
    ),
    mcq(
      "pym4p2-10",
      "os.path.join() is used to?",
      ["Import modules", "Join file path parts", "Join lists", "Merge dicts"],
      1,
      "os.path.join() builds platform-safe file paths.",
    ),
    mcq(
      "pym4p2-11",
      "import alias: import numpy as np?",
      ["Error", "Creates alias np", "Imports twice", "Renames file"],
      1,
      "as creates an alias, so numpy is accessed as np.",
    ),
    mcq(
      "pym4p2-12",
      "sys.argv contains?",
      [
        "Environment vars",
        "Command-line arguments",
        "Module list",
        "Function args",
      ],
      1,
      "sys.argv is a list of command-line argument strings.",
    ),
    mcq(
      "pym4p2-13",
      "except without specific exception catches?",
      ["Nothing", "Only ValueError", "All exceptions", "Only RuntimeError"],
      2,
      "A bare except: catches all exceptions (not recommended in practice).",
    ),
    mcq(
      "pym4p2-14",
      "else in try/except runs when?",
      [
        "Exception raised",
        "No exception raised",
        "Finally runs",
        "Import fails",
      ],
      1,
      "The else clause runs if no exception was raised in the try block.",
    ),
    mcq(
      "pym4p2-15",
      "ZeroDivisionError raised by?",
      ["0 + 1", "1 / 0", "int('a')", "None.x"],
      1,
      "1/0 raises ZeroDivisionError at runtime.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym4p2-pq1",
      "Safe Division",
      "Handle ZeroDivisionError when dividing two numbers.",
      [
        { input: "10 2", output: "5.0" },
        { input: "5 0", output: "Error: division by zero" },
      ],
      `a, b = map(int, input().split())
try:
    # divide a by b
    pass
except ZeroDivisionError:
    print("Error: division by zero")
`,
      71,
      "Python",
      [
        "Put division inside try, catch ZeroDivisionError.",
        "print(a / b)",
        "try:\n  print(a/b)\nexcept ZeroDivisionError:\n  print('Error: division by zero')",
      ],
      ["try", "except", "ZeroDivisionError", "print"],
    ),
    pq(
      "pym4p2-pq2",
      "Custom Exception",
      "Raise NegativeError if input number is negative.",
      [
        { input: "-5", output: "NegativeError: negative number" },
        { input: "3", output: "OK: 3" },
      ],
      `class NegativeError(Exception):
    pass

n = int(input())
try:
    # raise NegativeError if n < 0
    pass
except NegativeError as e:
    print(f"NegativeError: {e}")
`,
      71,
      "Python",
      [
        "Use if n < 0: raise NegativeError('negative number').",
        "if n < 0: raise NegativeError('negative number')",
        "if n<0:raise NegativeError('negative number')\nprint(f'OK: {n}')",
      ],
      ["raise", "NegativeError", "if", "print", "except"],
    ),
  ],
};

// ─── Python Module 5 Part 1: Advanced Python ─────────────────────────────────
const PY_M5_P1: PartQuizData = {
  mcqs: [
    mcq(
      "pym5p1-1",
      "Decorator wraps a function to:",
      ["Delete it", "Add behavior", "Copy it", "Import it"],
      1,
      "Decorators add functionality to a function without modifying it.",
    ),
    mcq(
      "pym5p1-2",
      "@decorator syntax is equivalent to?",
      ["f = decorator(f)", "f.decorate()", "import decorator", "decorator = f"],
      0,
      "@decorator is syntactic sugar for f = decorator(f).",
    ),
    mcq(
      "pym5p1-3",
      "yield keyword creates a:",
      ["Function", "Generator", "Class", "Decorator"],
      1,
      "yield turns a function into a generator that produces values lazily.",
    ),
    mcq(
      "pym5p1-4",
      "next() on generator:",
      [
        "Restarts it",
        "Gets next yielded value",
        "Returns all values",
        "Raises StopIteration always",
      ],
      1,
      "next() advances the generator and returns the next yielded value.",
    ),
    mcq(
      "pym5p1-5",
      "Generator vs list: memory?",
      ["Generator uses more", "Same", "Generator uses less", "Depends on OS"],
      2,
      "Generators produce values lazily — they don't store all values in memory.",
    ),
    mcq(
      "pym5p1-6",
      "map(f, lst) applies f to:",
      ["First element", "All elements", "Last element", "Odd indices"],
      1,
      "map() applies a function to every element in the iterable.",
    ),
    mcq(
      "pym5p1-7",
      "filter(f, lst) keeps elements where f returns?",
      ["False", "None", "True", "Any value"],
      2,
      "filter() keeps elements for which the function returns True.",
    ),
    mcq(
      "pym5p1-8",
      "List comprehension [x for x in range(5) if x>2]?",
      ["[3,4]", "[2,3,4]", "[3,4,5]", "[0,1,2]"],
      0,
      "x>2 filters to 3,4 from range(5)=[0,1,2,3,4].",
    ),
    mcq(
      "pym5p1-9",
      "Dict comprehension {k:v for k,v in d.items()} creates?",
      ["List", "New dict", "Set", "Tuple"],
      1,
      "Dict comprehension produces a new dictionary.",
    ),
    mcq(
      "pym5p1-10",
      "functools.reduce(f,[1,2,3]) applies f?",
      ["Once", "Cumulatively left to right", "Right to left", "Randomly"],
      1,
      "reduce() applies function cumulatively from left to right.",
    ),
    mcq(
      "pym5p1-11",
      "@property allows accessing method as?",
      ["Function call", "Attribute", "Class variable", "Static member"],
      1,
      "@property lets a method be accessed like an attribute (no parentheses).",
    ),
    mcq(
      "pym5p1-12",
      "Closure is a function that:",
      [
        "Is a class",
        "Captures enclosing scope variables",
        "Has no return",
        "Uses yield",
      ],
      1,
      "A closure remembers variables from its enclosing scope.",
    ),
    mcq(
      "pym5p1-13",
      "Generator expression vs list comp?",
      ["()  vs  []", "{}  vs  []", "() vs {}", "Both use []"],
      0,
      "Generator expressions use () while list comprehensions use [].",
    ),
    mcq(
      "pym5p1-14",
      "@staticmethod vs @classmethod: cls arg?",
      ["Both receive", "Only @classmethod", "Only @staticmethod", "Neither"],
      1,
      "Only @classmethod receives cls as the first argument.",
    ),
    mcq(
      "pym5p1-15",
      "zip([1,2],[3,4]) produces?",
      ["[(1,3),(2,4)]", "[1,2,3,4]", "[[1,3],[2,4]]", "(1,2,3,4)"],
      0,
      "zip pairs elements: [(1,3),(2,4)].",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym5p1-pq1",
      "Timer Decorator",
      "Write decorator that prints execution time of a function.",
      [{ input: "(none)", output: "Result: 25\nTime: ..." }],
      `import time

def timer(func):
    def wrapper(*args, **kwargs):
        # record start, call func, record end, print time
        pass
    return wrapper

@timer
def square(n):
    return n * n

print("Result:", square(5))
`,
      71,
      "Python",
      [
        "Use time.time() before and after the function call.",
        "start = time.time(); result = func(*args,**kwargs); print(time.time()-start)",
        "start=time.time()\nresult=func(*args,**kwargs)\nprint(f'Time: {time.time()-start:.4f}s')\nreturn result",
      ],
      ["def", "wrapper", "time", "return", "func"],
    ),
    pq(
      "pym5p1-pq2",
      "Fibonacci Generator",
      "Write generator yielding first n fibonacci numbers.",
      [{ input: "7", output: "0 1 1 2 3 5 8" }],
      `def fib_gen(n):
    # yield fibonacci numbers
    pass

n = int(input())
print(*fib_gen(n))
`,
      71,
      "Python",
      [
        "Track a and b; yield a, then update a,b=b,a+b.",
        "a,b=0,1; yield a; a,b=b,a+b",
        "def fib_gen(n):\n  a,b=0,1\n  for _ in range(n):\n    yield a\n    a,b=b,a+b",
      ],
      ["yield", "def", "fib_gen", "for", "range"],
    ),
  ],
};

// ─── Python Module 5 Part 2: Libraries (NumPy, Pandas) ───────────────────────
const PY_M5_P2: PartQuizData = {
  mcqs: [
    mcq(
      "pym5p2-1",
      "numpy is imported typically as?",
      ["np", "num", "npy", "numpy"],
      0,
      "Convention: import numpy as np.",
    ),
    mcq(
      "pym5p2-2",
      "np.array([1,2,3]) creates?",
      ["List", "ndarray", "Tuple", "Dict"],
      1,
      "np.array() creates a NumPy ndarray object.",
    ),
    mcq(
      "pym5p2-3",
      "np.zeros((2,3)) shape?",
      ["2 rows 3 cols", "3 rows 2 cols", "6 elements flat", "Error"],
      0,
      "np.zeros((2,3)) creates a 2×3 matrix of zeros.",
    ),
    mcq(
      "pym5p2-4",
      "arr.shape on 1D array of 5 elements?",
      ["(5,)", "[5]", "5", "(1,5)"],
      0,
      "Shape of 1D array with 5 elements is the tuple (5,).",
    ),
    mcq(
      "pym5p2-5",
      "pandas is imported typically as?",
      ["pd", "pan", "pnd", "pandas"],
      0,
      "Convention: import pandas as pd.",
    ),
    mcq(
      "pym5p2-6",
      "pd.DataFrame() creates?",
      ["Array", "Table-like structure", "List", "Series"],
      1,
      "DataFrame is pandas' 2D labeled data structure (like a table).",
    ),
    mcq(
      "pym5p2-7",
      "df.head() shows?",
      ["Last 5 rows", "First 5 rows", "All rows", "Column names only"],
      1,
      "head() returns the first 5 rows by default.",
    ),
    mcq(
      "pym5p2-8",
      "df.iloc[0] selects?",
      [
        "Column 0",
        "Row at integer position 0",
        "First column header",
        "Index label 0",
      ],
      1,
      "iloc uses integer-based position; iloc[0] is first row.",
    ),
    mcq(
      "pym5p2-9",
      "df.loc['a'] selects by?",
      ["Position", "Label/index name", "Column", "Shape"],
      1,
      "loc uses label-based indexing.",
    ),
    mcq(
      "pym5p2-10",
      "np.arange(0,10,2) produces?",
      ["[0,2,4,6,8,10]", "[0,2,4,6,8]", "[2,4,6,8,10]", "[1,3,5,7,9]"],
      1,
      "arange(0,10,2) = [0,2,4,6,8] — step 2, stops before 10.",
    ),
    mcq(
      "pym5p2-11",
      "arr.reshape(2,3) requires total elements?",
      ["2", "3", "5", "6"],
      3,
      "reshape(2,3) requires 2×3=6 elements.",
    ),
    mcq(
      "pym5p2-12",
      "df['col'].mean() computes?",
      ["Max", "Median", "Arithmetic mean", "Mode"],
      2,
      "mean() computes the arithmetic average of a Series.",
    ),
    mcq(
      "pym5p2-13",
      "np.dot(A,B) computes?",
      ["Element-wise mult", "Matrix/dot product", "Sum", "Difference"],
      1,
      "np.dot() computes the matrix (dot) product.",
    ),
    mcq(
      "pym5p2-14",
      "df.dropna() does?",
      ["Fills NaN", "Removes rows with NaN", "Counts NaN", "Does nothing"],
      1,
      "dropna() removes rows containing any NaN values.",
    ),
    mcq(
      "pym5p2-15",
      "arr * 2 on numpy array?",
      ["Error", "Doubles each element", "Repeats array", "Appends array"],
      1,
      "NumPy broadcasts scalar operations element-wise.",
    ),
  ],
  programmingQuestions: [
    pq(
      "pym5p2-pq1",
      "NumPy Statistics",
      "Create array, compute mean and sum.",
      [{ input: "(none)", output: "Sum: 15\nMean: 3.0" }],
      `import numpy as np
arr = np.array([1, 2, 3, 4, 5])
# print sum and mean
`,
      71,
      "Python",
      [
        "Use arr.sum() and arr.mean().",
        "print('Sum:', arr.sum()); print('Mean:', arr.mean())",
        "print('Sum:', arr.sum())\nprint('Mean:', arr.mean())",
      ],
      ["np", "array", "sum", "mean", "print"],
    ),
    pq(
      "pym5p2-pq2",
      "Pandas DataFrame",
      "Create DataFrame from dict, print first 2 rows.",
      [
        {
          input: "(none)",
          output: "   name  age\n0  Alice   25\n1    Bob   30",
        },
      ],
      `import pandas as pd
data = {'name': ['Alice', 'Bob', 'Charlie'], 'age': [25, 30, 35]}
df = pd.DataFrame(data)
# print first 2 rows
`,
      71,
      "Python",
      [
        "Use df.head(2) to get first 2 rows.",
        "print(df.head(2))",
        "print(df.head(2))",
      ],
      ["pd", "DataFrame", "head", "print"],
    ),
  ],
};

// ─── Export the PART_QUIZZES record ──────────────────────────────────────────
export const PART_QUIZZES: Record<string, PartQuizData> = {
  "c-module1-part1": C_M1_P1,
  "c-module1-part2": C_M1_P2,
  "c-module1-part3": C_M1_P3,
  "c-module2-part1": C_M2_P1,
  "c-module2-part2": C_M2_P2,
  "c-module2-part3": C_M2_P3,
  "c-module3-part1": C_M3_P1,
  "c-module3-part2": C_M3_P2,
  "c-module3-part3": C_M3_P3,
  "c-module4-part1": C_M4_P1,
  "c-module4-part2": C_M4_P2,
  "c-module5-part1": C_M5_P1,
  "c-module5-part2": C_M5_P2,
  "python-module1-part1": PY_M1_P1,
  "python-module1-part2": PY_M1_P2,
  "python-module2-part1": PY_M2_P1,
  "python-module2-part2": PY_M2_P2,
  "python-module3-part1": PY_M3_P1,
  "python-module3-part2": PY_M3_P2,
  "python-module4-part1": PY_M4_P1,
  "python-module4-part2": PY_M4_P2,
  "python-module5-part1": PY_M5_P1,
  "python-module5-part2": PY_M5_P2,
  // Generic fallback for any domain part
  generic: GENERIC_PART_QUIZ,
};

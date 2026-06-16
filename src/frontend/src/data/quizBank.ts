import type {
  CQuizProgrammingQuestion,
  CQuizQuestion,
} from "./cProgrammingCourse";

// ─── Quiz Bank ────────────────────────────────────────────────────────────────
// 15 MCQs + 2 programming questions per topic category.
// Used as fallback/supplement when part.partQuiz has fewer than 15 questions.

export interface FullQuiz {
  mcqs: CQuizQuestion[];
  programming: CQuizProgrammingQuestion[];
}

// ─── C Programming ────────────────────────────────────────────────────────────

export const C_COMPUTER_SYSTEM_QUIZ: FullQuiz = {
  mcqs: [
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
      xp: 10,
    },
    {
      question:
        "Which tool combines multiple object files into one executable?",
      options: ["Compiler", "Assembler", "Interpreter", "Linker"],
      correct: 3,
      xp: 10,
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
    {
      question: "Which of the following is an example of secondary storage?",
      options: ["Cache memory", "RAM", "CPU registers", "Hard Disk Drive"],
      correct: 3,
      xp: 10,
    },
    {
      question: "What does an Interpreter do differently from a Compiler?",
      options: [
        "Converts to machine code first",
        "Translates and executes code line-by-line at runtime",
        "Produces an .exe file",
        "Only works with Python",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is Cache memory?",
      options: [
        "Permanent disk storage",
        "Ultra-fast memory inside/near the CPU for frequently used data",
        "A type of ROM",
        "Virtual memory on disk",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which phase of compilation checks for type errors?",
      options: [
        "Lexical Analysis",
        "Code Generation",
        "Semantic Analysis",
        "Linking",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is an Assembler?",
      options: [
        "A high-level language compiler",
        "Software that translates assembly language to machine code",
        "A program loader",
        "An OS scheduler",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What is the correct order of the compilation process for a C program?",
      options: [
        "Compile → Link → Preprocess → Assemble",
        "Preprocess → Compile → Assemble → Link",
        "Link → Compile → Assemble → Preprocess",
        "Assemble → Compile → Link → Preprocess",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which of the following is NOT a function of the Operating System?",
      options: [
        "Memory management",
        "File system management",
        "Compiling programs",
        "Process scheduling",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is ROM?",
      options: [
        "Volatile memory used by running programs",
        "Read-Only Memory that stores permanent firmware",
        "A type of CPU cache",
        "Random Output Memory",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What type of storage is faster — HDD or SSD?",
      options: ["HDD", "SSD", "Both are equal", "Depends on the RAM"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does the ALU (Arithmetic Logic Unit) do inside a CPU?",
      options: [
        "Fetches instructions from memory",
        "Performs arithmetic and logical calculations",
        "Manages I/O devices",
        "Stores the OS kernel",
      ],
      correct: 1,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-sys-prog-1",
      question: "Print System Info",
      description:
        "Write a C program that prints 'Hello, Computer System!' to the screen. This tests your ability to use printf.",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    // Print a welcome message\n    \n    return 0;\n}",
      expectedOutput: "Hello, Computer System!",
      hint: "Use printf() with the exact string followed by \\n",
      xp: 25,
    },
    {
      id: "c-sys-prog-2",
      question: "Data Types Demo",
      description:
        "Declare an integer variable called 'age' with value 20, and print: 'My age is 20'. Tests basic variable declaration and printf with %d.",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int age = 20;\n    // Print the age\n    \n    return 0;\n}",
      expectedOutput: "My age is 20",
      hint: 'Use printf("My age is %d", age); — %d is the format specifier for integers',
      xp: 25,
    },
  ],
};

export const C_ALGORITHMS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What is a flowchart?",
      options: [
        "A type of chart showing water flow",
        "A visual representation of an algorithm using symbols",
        "A code comment diagram",
        "A debugging tool",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which symbol in a flowchart represents a decision?",
      options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is Pseudocode?",
      options: [
        "Fake code that doesn't compile",
        "An informal high-level description of an algorithm in plain language",
        "Assembly language",
        "A compiled language",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is an algorithm?",
      options: [
        "A type of data structure",
        "A step-by-step procedure to solve a problem",
        "A programming language",
        "A compiler directive",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which flowchart symbol represents start/end?",
      options: ["Diamond", "Rectangle", "Oval/Rounded Rectangle", "Arrow"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does 'source code' mean?",
      options: [
        "Machine-readable binary code",
        "Human-readable code written by programmers",
        "Compiled executable code",
        "Assembly language code",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the difference between algorithm and program?",
      options: [
        "They are the same",
        "An algorithm is a plan; a program is the algorithm implemented in a programming language",
        "A program is language-independent",
        "An algorithm runs on a computer directly",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does SEQUENCE mean in algorithm design?",
      options: [
        "Repeating steps",
        "Making decisions",
        "Executing steps one after another in order",
        "Calling functions",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the purpose of the OUTPUT step in an algorithm?",
      options: [
        "To store data permanently",
        "To display results or send data to the user",
        "To loop through data",
        "To define variables",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does SELECTION mean in programming?",
      options: [
        "Choosing a data type",
        "Making a decision using if/else/switch",
        "Selecting a variable",
        "Picking a sorting algorithm",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is ITERATION in algorithms?",
      options: [
        "Jumping to a function",
        "Making a decision",
        "Repeating a block of code",
        "Declaring variables",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which of these is a correct step in writing an algorithm?",
      options: [
        "Use complex math formulas",
        "Define clear inputs, process steps, and expected output",
        "Write the code first then plan",
        "Use machine code instructions",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the main goal of algorithm design?",
      options: [
        "To write the shortest code",
        "To solve a problem correctly and efficiently",
        "To use the most data structures",
        "To minimize comments",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "In pseudocode, what does 'IF condition THEN ... ELSE ... END IF' represent?",
      options: [
        "A loop",
        "A function call",
        "A conditional/selection structure",
        "A data type declaration",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "What is the time complexity of finding the maximum element in an unsorted array of n elements?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-algo-prog-1",
      question: "Find Maximum of Two Numbers",
      description:
        "Write a C program that reads two integers and prints the larger one. For inputs 10 and 20, output should be: 'Maximum is 20'",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    // Find and print the maximum\n    \n    return 0;\n}",
      expectedOutput: "Maximum is 20",
      hint: "Use an if-else statement: if (a > b) then print a else print b",
      xp: 25,
    },
    {
      id: "c-algo-prog-2",
      question: "Sum of Numbers 1 to N",
      description:
        "Write a C program to calculate the sum of numbers from 1 to 5. Output should be: 'Sum = 15'",
      starterCode:
        '#include <stdio.h>\n\nint main() {\n    int n = 5, sum = 0;\n    // Calculate sum using a loop\n    \n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
      expectedOutput: "Sum = 15",
      hint: "Use a for loop: for(i=1; i<=n; i++) sum += i;",
      xp: 25,
    },
  ],
};

export const C_BASICS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What is the correct syntax to include standard I/O in C?",
      options: [
        "#import stdio.h",
        "#include <stdio.h>",
        "import stdio",
        "using stdio;",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the return type of the main() function in C?",
      options: ["void", "char", "int", "float"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which format specifier is used to print an integer in C?",
      options: ["%f", "%c", "%s", "%d"],
      correct: 3,
      xp: 10,
    },
    {
      question: "What does 'return 0;' in main() indicate?",
      options: [
        "An error occurred",
        "Successful program execution",
        "The program loops again",
        "Memory is freed",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which of these is a valid variable name in C?",
      options: ["2count", "my-var", "_total", "class"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the size of an 'int' in C on most 32-bit systems?",
      options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which keyword is used to declare a constant in C?",
      options: ["const", "final", "static", "readonly"],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is a syntax error?",
      options: [
        "An error that occurs at runtime",
        "A logical mistake in the program",
        "A violation of the grammar rules of the language",
        "A memory leak",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is a logical error?",
      options: [
        "Program doesn't compile",
        "Program crashes at runtime",
        "Program compiles and runs but gives wrong results",
        "Missing semicolon",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is object code?",
      options: [
        "Human-readable source code",
        "Machine code produced by the compiler from source code",
        "Python byte code",
        "Assembly language",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which C standard I/O function reads input from the keyboard?",
      options: ["printf()", "puts()", "scanf()", "gets() only"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is a storage class in C?",
      options: [
        "A class that stores data structures",
        "A specifier that defines scope, lifetime, and default initial value of a variable",
        "A type of pointer",
        "A C++ concept",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the 'auto' storage class in C?",
      options: [
        "Global variables",
        "Static variables",
        "Local variables with automatic duration (default)",
        "External variables",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does the 'static' keyword do to a local variable?",
      options: [
        "Makes it accessible globally",
        "Makes it keep its value between function calls",
        "Deletes it after use",
        "Makes it a pointer",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What is the correct way to print a float with 2 decimal places in C?",
      options: [
        'printf("%d", x)',
        'printf("%.2f", x)',
        'printf("%s", x)',
        'printf("%2d", x)',
      ],
      correct: 1,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-basics-prog-1",
      question: "Hello World",
      description:
        "Write the classic Hello World program in C. Output exactly: Hello, World!",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    // Print Hello, World!\n    \n    return 0;\n}",
      expectedOutput: "Hello, World!",
      hint: 'Use printf("Hello, World!\\n");',
      xp: 20,
    },
    {
      id: "c-basics-prog-2",
      question: "Declare and Print Variables",
      description:
        "Declare an integer 'x = 42' and a float 'pi = 3.14'. Print them as: 'x = 42, pi = 3.14'",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int x = 42;\n    float pi = 3.14;\n    // Print both values\n    \n    return 0;\n}",
      expectedOutput: "x = 42, pi = 3.14",
      hint: 'Use printf("x = %d, pi = %.2f\\n", x, pi);',
      xp: 25,
    },
  ],
};

export const C_OPERATORS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What does the modulus operator '%' return?",
      options: [
        "The quotient of division",
        "The remainder of integer division",
        "The percentage value",
        "The absolute value",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the result of 5 + 3 * 2 in C?",
      options: ["16", "11", "10", "13"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does the '==' operator do?",
      options: [
        "Assigns a value",
        "Checks equality",
        "Compares by reference",
        "Increments a variable",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does '&&' represent in C?",
      options: [
        "Bitwise AND",
        "Logical AND",
        "Concatenation",
        "Address-of operator",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the result of 7 % 3?",
      options: ["2", "3", "1", "0"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does the '!' operator do in C?",
      options: [
        "Bitwise NOT",
        "Factorial",
        "Logical NOT (negation)",
        "String terminator",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is implicit type conversion (type coercion)?",
      options: [
        "Explicit casting using (type)",
        "Automatic conversion of one type to another by the compiler",
        "A runtime error",
        "A compile warning",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the result of (int)3.9 in C?",
      options: ["4", "3", "3.9", "Error"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which operator has the highest precedence in C?",
      options: [
        "+ (addition)",
        "* (multiplication)",
        "() (parentheses)",
        "= (assignment)",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does the post-increment operator 'x++' do?",
      options: [
        "Increments x before using it",
        "Increments x after using the current value",
        "Doubles x",
        "Adds 1 permanently to x in memory",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the result of 1 << 2 (left bitwise shift)?",
      options: ["1", "2", "4", "8"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the ternary operator in C?",
      options: [
        "condition ? value_if_true : value_if_false",
        "if(cond) val1 else val2",
        "switch(cond){case val1: case val2:}",
        "for(;;) {break;}",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question:
        "What is the associativity of the assignment operator '=' in C?",
      options: [
        "Left-to-right",
        "Right-to-left",
        "No associativity",
        "Both directions",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does '|' (pipe) do in C?",
      options: ["Logical OR", "Bitwise OR", "String concatenation", "Division"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the result of !0 in C?",
      options: ["0", "1", "-1", "Error"],
      correct: 1,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-ops-prog-1",
      question: "Arithmetic Operations",
      description:
        "Write a C program that prints the result of: 10 + 3, 10 - 3, 10 * 3, 10 / 3, 10 % 3. Output should be: '13 7 30 3 1' (each on same line separated by spaces)",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n    // Print results\n    \n    return 0;\n}",
      expectedOutput: "13 7 30 3 1",
      hint: 'Use printf("%d %d %d %d %d\\n", a+b, a-b, a*b, a/b, a%b);',
      xp: 25,
    },
    {
      id: "c-ops-prog-2",
      question: "Check Even or Odd",
      description:
        "Write a C program to check if 7 is even or odd. Output: 'Odd'",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int n = 7;\n    // Check even or odd and print\n    \n    return 0;\n}",
      expectedOutput: "Odd",
      hint: "If n % 2 == 0 it's Even, otherwise Odd. Use if-else.",
      xp: 25,
    },
  ],
};

export const C_CONTROL_FLOW_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What does an 'if' statement do?",
      options: [
        "Loops until a condition is false",
        "Executes a block of code only if a condition is true",
        "Defines a function",
        "Declares a variable",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the 'switch' statement used for?",
      options: [
        "To iterate over arrays",
        "To select one of many code blocks based on a variable's value",
        "To swap two variables",
        "To declare multiple variables",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What happens if no 'break' is placed in a switch case?",
      options: [
        "Compilation error",
        "The program skips all remaining cases",
        "Fall-through: execution continues into the next case",
        "Program terminates",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the 'default' case in a switch statement?",
      options: [
        "It must always be present",
        "It executes when no other case matches",
        "It's the first case",
        "It breaks the loop",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does a 'while' loop do?",
      options: [
        "Executes exactly once",
        "Executes a block while a condition is true, checking BEFORE each iteration",
        "Executes a block while condition is false",
        "Only loops 10 times",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the key difference between 'while' and 'do-while'?",
      options: [
        "do-while always runs at least once; while may not run at all",
        "while always runs at least once; do-while may not",
        "They are identical",
        "do-while is faster",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What does 'break' do inside a loop?",
      options: [
        "Skips the current iteration",
        "Exits the loop immediately",
        "Pauses execution",
        "Resets the loop counter",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'continue' do inside a loop?",
      options: [
        "Exits the loop",
        "Skips the rest of the current iteration and goes to the next one",
        "Pauses the loop",
        "Restarts the loop from beginning",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'goto' do in C?",
      options: [
        "Calls a function",
        "Jumps to a labelled statement in the code (generally discouraged)",
        "Creates a loop",
        "Returns from a function",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "How many times does 'for(int i=0; i<5; i++)' loop?",
      options: ["4", "5", "6", "Infinite"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a nested if statement?",
      options: [
        "An if inside another if",
        "An if inside a loop",
        "An else without an if",
        "Multiple conditions in one if",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What are multiple loop variables in C?",
      options: [
        "Only one variable allowed per loop",
        "You can declare and use multiple variables in a for loop (e.g., for(i=0, j=10; ...))",
        "Multiple loops stacked",
        "Arrays used in loops",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is an infinite loop?",
      options: [
        "A loop that never starts",
        "A loop whose condition never becomes false",
        "A loop that runs exactly 100 times",
        "A loop with break inside",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "In 'for(;;)', what does the empty condition mean?",
      options: [
        "The loop runs once",
        "The condition is always false",
        "The condition is always true (infinite loop)",
        "Compilation error",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "What output does 'for(int i=1; i<=3; i++) printf(\"%d \", i);' produce?",
      options: ["1 2 3 4 ", "0 1 2 ", "1 2 3 ", "2 3 4 "],
      correct: 2,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-ctrl-prog-1",
      question: "Multiplication Table",
      description:
        "Write a C program to print the multiplication table of 3 (from 3×1 to 3×5). Output format: '3 6 9 12 15' (space-separated on one line)",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    // Print multiplication table of 3\n    \n    return 0;\n}",
      expectedOutput: "3 6 9 12 15",
      hint: 'Use a for loop: for(int i=1; i<=5; i++) printf("%d ", 3*i);',
      xp: 25,
    },
    {
      id: "c-ctrl-prog-2",
      question: "Grade Classification",
      description:
        "Write a C program with score=75. Using if-else if: print 'A' if >=90, 'B' if >=80, 'C' if >=70, 'D' if >=60, else 'F'.",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int score = 75;\n    // Classify and print grade\n    \n    return 0;\n}",
      expectedOutput: "C",
      hint: 'Use if-else if chain: if(score>=90) printf("A"); else if(score>=80) ...',
      xp: 25,
    },
  ],
};

export const C_ARRAYS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "How do you declare an integer array of 5 elements in C?",
      options: [
        "int arr[5];",
        "array int[5];",
        "int arr = [5];",
        "int[5] arr;",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is the index of the first element in a C array?",
      options: ["1", "-1", "0", "Depends on declaration"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is a 2D array in C used for?",
      options: [
        "Storing a single row of data",
        "Representing a matrix or table of data",
        "Creating dynamic memory",
        "Storing functions",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "How do you access element at row 2, column 3 of a 2D array 'mat'?",
      options: ["mat[3][2]", "mat[2][3]", "mat(2,3)", "mat.2.3"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a string in C?",
      options: [
        "A built-in string type",
        "An array of characters terminated by '\\0'",
        "A dynamic array",
        "A linked list of chars",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does strlen() return?",
      options: [
        "Size of array in bytes",
        "Number of characters excluding the null terminator",
        "Total memory used",
        "Number including null terminator",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a structure in C?",
      options: [
        "A single data type",
        "A user-defined data type that groups different data types under one name",
        "An array of same type",
        "A function pointer",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a union in C?",
      options: [
        "Same as structure",
        "A user-defined type where all members share the same memory location",
        "An array of structs",
        "A linked list",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is an enumerated data type (enum) in C?",
      options: [
        "An array of integers",
        "A user-defined type consisting of named integer constants",
        "A struct with one field",
        "A boolean type",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is an array of structures?",
      options: [
        "An array where each element is a struct",
        "A struct inside another struct",
        "A dynamic array",
        "A 2D character array",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is the time complexity of Linear Search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is Bubble Sort?",
      options: [
        "A sorting algorithm that sorts by selection",
        "A sorting algorithm that repeatedly swaps adjacent elements if they are in wrong order",
        "A search algorithm",
        "A linked list operation",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the worst-case time complexity of Bubble Sort?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 2,
      xp: 10,
    },
    {
      question: "How do you access a struct member using a pointer?",
      options: [
        "ptr.member",
        "ptr->member or (*ptr).member",
        "*ptr.member",
        "ptr[member]",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the size of a union in C?",
      options: [
        "Sum of all member sizes",
        "Size of the smallest member",
        "Size of the largest member",
        "Always 4 bytes",
      ],
      correct: 2,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-arr-prog-1",
      question: "Sum of Array Elements",
      description:
        "Write a C program to find the sum of {1, 2, 3, 4, 5}. Output: 'Sum = 15'",
      starterCode:
        '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5, sum = 0;\n    // Sum all elements\n    \n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
      expectedOutput: "Sum = 15",
      hint: "Use a for loop to add each element: for(i=0; i<n; i++) sum += arr[i];",
      xp: 25,
    },
    {
      id: "c-arr-prog-2",
      question: "Linear Search",
      description:
        "Write a C program to search for 3 in {1, 2, 3, 4, 5}. Output: 'Found at index 2'",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5, target = 3;\n    // Search for target\n    \n    return 0;\n}",
      expectedOutput: "Found at index 2",
      hint: 'Loop through array, if arr[i] == target, printf("Found at index %d\\n", i); break;',
      xp: 25,
    },
  ],
};

export const C_FUNCTIONS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What is a function in C?",
      options: [
        "A variable declaration",
        "A reusable block of code that performs a specific task",
        "An array of operations",
        "A compiler directive",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a function prototype/declaration in C?",
      options: [
        "The full function body",
        "A declaration that tells the compiler the function's name, return type, and parameters",
        "A comment above a function",
        "The main() function",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is 'call by value' in C?",
      options: [
        "The function modifies the original variable",
        "A copy of the argument is passed; changes don't affect the original",
        "Passing a pointer",
        "Returning a value",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is 'call by reference' in C?",
      options: [
        "Passing a copy of the variable",
        "Passing the address/pointer so the function can modify the original",
        "Returning the variable",
        "Using global variables",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a recursive function?",
      options: [
        "A function that calls another function",
        "A function that calls itself to solve a smaller version of the same problem",
        "A function with no parameters",
        "A static function",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the base case in recursion?",
      options: [
        "The first call to the function",
        "The condition that stops the recursion to prevent infinite calls",
        "The return value",
        "The function declaration",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "How do you pass an array to a function in C?",
      options: [
        "By value (entire array is copied)",
        "By passing the array name (which is a pointer to the first element)",
        "Using a keyword 'array'",
        "Arrays cannot be passed to functions",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does a void return type mean?",
      options: [
        "The function returns 0",
        "The function doesn't return any value",
        "The function returns a pointer",
        "Error type",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is function scope?",
      options: [
        "Variables declared inside a function are only accessible within that function",
        "Global variables declared in a function",
        "The size of the function's stack frame",
        "The number of parameters",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is the Divide and Conquer approach?",
      options: [
        "Using multiple functions",
        "Breaking a problem into smaller subproblems, solving them, and combining results",
        "A sorting algorithm",
        "Using pointers",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the factorial of 5 (5!)?",
      options: ["25", "120", "60", "20"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'extern' keyword do for a function?",
      options: [
        "Makes a local function",
        "Declares a function defined in another file/translation unit",
        "Creates a static function",
        "Deletes a function",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a library function in C?",
      options: [
        "A function you write",
        "Pre-built functions provided by the C standard library (e.g., printf, scanf, strlen)",
        "A function pointer",
        "A recursive function",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What happens if a recursive function has no base case?",
      options: [
        "It returns 0",
        "Infinite recursion causing a stack overflow",
        "It compiles but runs once",
        "Nothing happens",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the return type of printf()?",
      options: [
        "void",
        "char",
        "int (returns number of characters printed)",
        "float",
      ],
      correct: 2,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-func-prog-1",
      question: "Function: Factorial",
      description:
        "Write a C program using a function 'factorial(int n)' to calculate factorial of 5. Output: '120'",
      starterCode:
        '#include <stdio.h>\n\nint factorial(int n) {\n    // Implement factorial\n    \n}\n\nint main() {\n    printf("%d\\n", factorial(5));\n    return 0;\n}',
      expectedOutput: "120",
      hint: "Base case: if(n <= 1) return 1; Recursive: return n * factorial(n-1);",
      xp: 30,
    },
    {
      id: "c-func-prog-2",
      question: "Call by Reference: Swap",
      description:
        "Write a C program using a swap function with pointers to swap a=5 and b=10. Output: 'a=10 b=5'",
      starterCode:
        '#include <stdio.h>\n\nvoid swap(int *x, int *y) {\n    // Swap using pointers\n    \n}\n\nint main() {\n    int a = 5, b = 10;\n    swap(&a, &b);\n    printf("a=%d b=%d\\n", a, b);\n    return 0;\n}',
      expectedOutput: "a=10 b=5",
      hint: "int temp = *x; *x = *y; *y = temp;",
      xp: 30,
    },
  ],
};

export const C_POINTERS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What is a pointer in C?",
      options: [
        "A variable that stores a value",
        "A variable that stores the memory address of another variable",
        "A reference to a struct",
        "An array index",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "How do you declare a pointer to an integer?",
      options: ["int ptr;", "pointer int ptr;", "int *ptr;", "int &ptr;"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does the '&' operator do?",
      options: [
        "Bitwise AND",
        "Returns the address (memory location) of a variable",
        "Dereferences a pointer",
        "Logical AND",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What does the '*' operator do when used with a pointer variable?",
      options: [
        "Multiplies",
        "Declares a pointer",
        "Dereferences the pointer (accesses the value at that address)",
        "Increments the pointer",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is a NULL pointer?",
      options: [
        "A pointer pointing to address 0/nothing",
        "An uninitialized pointer",
        "A pointer to a null character",
        "A pointer to NULL function",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is pointer arithmetic?",
      options: [
        "Multiplying two pointers",
        "Performing mathematical operations on pointer values (incrementing moves by the size of pointed type)",
        "Subtracting pointer from integer",
        "Dividing memory addresses",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is an array of pointers?",
      options: [
        "A 2D array",
        "An array where each element is a pointer",
        "A pointer to an array",
        "A struct with pointers",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'int **ptr' declare?",
      options: [
        "A pointer to an int",
        "A double int",
        "A pointer to a pointer to an int",
        "An error",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "How is a pointer to a structure member accessed?",
      options: ["ptr.member", "ptr->member", "*ptr[member]", "ptr:member"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a dangling pointer?",
      options: [
        "A NULL pointer",
        "A pointer that points to memory that has already been freed/deallocated",
        "An uninitialised pointer",
        "A const pointer",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'malloc()' do?",
      options: [
        "Frees memory",
        "Dynamically allocates memory on the heap and returns a void pointer",
        "Declares an array",
        "Copies memory",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'free()' do?",
      options: [
        "Frees a variable from scope",
        "Releases dynamically allocated memory back to the heap",
        "Clears array values",
        "Deletes a pointer variable",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the relationship between arrays and pointers in C?",
      options: [
        "No relationship",
        "Array name is a constant pointer to the first element",
        "Pointers can't point to arrays",
        "Arrays are passed by value always",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'void *' (void pointer) represent?",
      options: [
        "A pointer to nothing (invalid)",
        "A generic pointer that can point to any data type",
        "A pointer with no address",
        "A null pointer",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "If ptr points to an int at address 1000, what address does ptr+1 point to (on a 32-bit system with 4-byte int)?",
      options: ["1001", "1002", "1004", "1008"],
      correct: 2,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "c-ptr-prog-1",
      question: "Pointer Basics",
      description:
        "Write a C program: declare int x=10, use a pointer to it, and print the value through the pointer. Output: 'Value via pointer: 10'",
      starterCode:
        "#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    // Print value using pointer\n    \n    return 0;\n}",
      expectedOutput: "Value via pointer: 10",
      hint: 'Use printf("Value via pointer: %d\\n", *ptr);',
      xp: 25,
    },
    {
      id: "c-ptr-prog-2",
      question: "Dynamic Memory Allocation",
      description:
        "Write a C program to allocate an int with malloc, store 42, print it, then free it. Output: '42'",
      starterCode:
        "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 42;\n    // Print the value\n    \n    free(ptr);\n    return 0;\n}",
      expectedOutput: "42",
      hint: 'Use printf("%d\\n", *ptr); to print the value stored at ptr.',
      xp: 30,
    },
  ],
};

// ─── Frontend Development ─────────────────────────────────────────────────────

export const FE_HTML_CSS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Hyperlink Text Markup Language",
        "HighText Machine Language",
        "Hyperlink Transfer Markup Language",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<heading>", "<head>"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Cascading Simple Sheets",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which CSS property controls text color?",
      options: ["font-color", "text-color", "color", "foreground"],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "Which HTML attribute specifies an alternate text for an image?",
      options: ["src", "title", "alt", "href"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the CSS box model?",
      options: [
        "A 3D modeling tool",
        "Content, Padding, Border, Margin structure of every HTML element",
        "A Bootstrap grid",
        "A CSS animation",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which CSS property makes an element flexible?",
      options: [
        "display: block",
        "display: flex",
        "position: fixed",
        "float: left",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a CSS selector?",
      options: [
        "A JavaScript function",
        "A pattern used to select elements to apply styles",
        "An HTML attribute",
        "A file extension",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'position: absolute' do in CSS?",
      options: [
        "Positions relative to parent",
        "Removes from flow, positioned relative to nearest positioned ancestor",
        "Fixes to viewport",
        "Centers element",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the difference between 'class' and 'id' in HTML?",
      options: [
        "No difference",
        "id is unique per page; class can be reused on multiple elements",
        "class is unique; id can be reused",
        "id is only for JavaScript",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is CSS Grid?",
      options: [
        "A deprecated layout method",
        "A 2D layout system for creating complex grid-based layouts",
        "Only for images",
        "A JavaScript library",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is responsive design?",
      options: [
        "Fast loading websites",
        "Design that adapts to different screen sizes using media queries",
        "Animated websites",
        "Server-side rendering",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a CSS media query?",
      options: [
        "A CSS function",
        "A way to apply styles conditionally based on device properties like screen width",
        "A JavaScript API",
        "An HTML tag",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the purpose of 'z-index' in CSS?",
      options: [
        "Zooming",
        "Controls the stacking order of overlapping elements",
        "Zero-based indexing",
        "Element ID",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is semantic HTML?",
      options: [
        "HTML that uses only <div> and <span>",
        "HTML that uses meaningful tags like <nav>, <article>, <section> to describe content",
        "HTML with inline styles",
        "HTML without CSS",
      ],
      correct: 1,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "fe-html-prog-1",
      question: "HTML Structure",
      description:
        "Create a valid HTML structure with a title 'My Page' and a heading 'Hello World'. The output should be proper HTML.",
      starterCode:
        "<!DOCTYPE html>\n<html>\n<head>\n    <!-- Add title -->\n</head>\n<body>\n    <!-- Add h1 heading -->\n</body>\n</html>",
      expectedOutput: "<!DOCTYPE html><html>...</html>",
      hint: "Use <title>My Page</title> in head, and <h1>Hello World</h1> in body",
      xp: 20,
    },
    {
      id: "fe-html-prog-2",
      question: "CSS Flexbox Center",
      description:
        "Write CSS to center a div both horizontally and vertically using Flexbox on a container.",
      starterCode:
        ".container {\n    /* Add flexbox centering */\n    height: 100vh;\n}",
      expectedOutput:
        ".container { display: flex; justify-content: center; align-items: center; }",
      hint: "Use display: flex; justify-content: center; align-items: center;",
      xp: 25,
    },
  ],
};

// ─── Python ────────────────────────────────────────────────────────────────────

export const PYTHON_BASICS_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "How do you create a list in Python?",
      options: ["{1,2,3}", "(1,2,3)", "[1,2,3]", "<1,2,3>"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the output of len('Hello')?",
      options: ["4", "5", "6", "Error"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "fun", "def", "func"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does 'self' refer to in a Python class method?",
      options: [
        "The class itself",
        "The parent class",
        "The current instance of the class",
        "A static variable",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which Python data structure is immutable?",
      options: ["list", "dict", "set", "tuple"],
      correct: 3,
      xp: 10,
    },
    {
      question: "What does 'range(1, 6)' generate?",
      options: ["1 to 5", "1 to 6", "0 to 5", "0 to 6"],
      correct: 0,
      xp: 10,
    },
    {
      question: "How do you handle exceptions in Python?",
      options: ["try/catch", "try/except", "try/error", "error/handle"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a Python dictionary?",
      options: [
        "An ordered list",
        "An immutable sequence",
        "A key-value pair collection",
        "A set of unique values",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is a list comprehension?",
      options: [
        "A list of functions",
        "A concise way to create lists: [expr for item in iterable]",
        "A sorted list",
        "A list with conditions only",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does 'import' do in Python?",
      options: [
        "Exports a module",
        "Loads a module to use its functions and classes",
        "Creates a new file",
        "Declares a variable",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is OOP (Object-Oriented Programming)?",
      options: [
        "A type of database",
        "A paradigm based on classes and objects",
        "A functional programming style",
        "A Python-only concept",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is inheritance in Python?",
      options: [
        "Copying code between files",
        "A mechanism where a class can acquire properties and methods of another class",
        "Multiple assignment",
        "A decorator pattern",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does __init__() do in a Python class?",
      options: [
        "Deletes the object",
        "Initializes (constructs) the object when it's created",
        "Makes the class abstract",
        "Imports dependencies",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a decorator in Python?",
      options: [
        "A CSS concept in Python",
        "A function that modifies or wraps another function",
        "A class variable",
        "A loop shortcut",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the difference between a list and a tuple?",
      options: [
        "No difference",
        "Lists are mutable; tuples are immutable",
        "Tuples are faster at all operations",
        "Lists use {} and tuples use []",
      ],
      correct: 1,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "py-prog-1",
      question: "FizzBuzz",
      description:
        "Write Python code: for numbers 1 to 10, print 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, 'FizzBuzz' if both, else print the number.",
      starterCode:
        "# FizzBuzz 1 to 10\nfor i in range(1, 11):\n    # Add conditions here\n    pass",
      expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz",
      hint: "Check divisibility with % — if i % 15 == 0: FizzBuzz, elif i % 3 == 0: Fizz, elif i % 5 == 0: Buzz",
      xp: 25,
    },
    {
      id: "py-prog-2",
      question: "List Operations",
      description:
        "Create a list [3, 1, 4, 1, 5, 9, 2, 6], sort it, remove duplicates, and print the sorted unique list: [1, 2, 3, 4, 5, 6, 9]",
      starterCode:
        "nums = [3, 1, 4, 1, 5, 9, 2, 6]\n# Sort and remove duplicates\n",
      expectedOutput: "[1, 2, 3, 4, 5, 6, 9]",
      hint: "Use sorted(set(nums)) to get sorted unique elements, then print it",
      xp: 25,
    },
  ],
};

// ─── Generic Topic Quiz (fallback for all other topics) ──────────────────────

export const GENERIC_FULL_QUIZ: FullQuiz = {
  mcqs: [
    {
      question: "What does 'API' stand for?",
      options: [
        "Application Programming Interface",
        "Automated Process Integration",
        "Application Process Instance",
        "Advanced Programming Input",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does 'DRY' stand for in programming?",
      options: [
        "Do Repeat Yourself",
        "Don't Repeat Yourself",
        "Dynamic Resource Yielding",
        "Data Retrieval Yield",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which data structure follows LIFO?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a version control system?",
      options: [
        "A tool to manage file versions and collaboration history",
        "A server framework",
        "A testing library",
        "A database",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is the purpose of a primary key in a database?",
      options: [
        "To sort data",
        "Uniquely identify each record in a table",
        "To index all columns",
        "To store passwords",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "HyperText Template Protocol",
        "High Traffic Transfer Protocol",
        "Home Text Transfer Protocol",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is a REST API?",
      options: [
        "A database",
        "An architecture style for APIs using HTTP methods",
        "A JavaScript framework",
        "A testing tool",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is agile methodology?",
      options: [
        "Waterfall development",
        "Iterative, incremental software development with sprints",
        "A specific programming language",
        "A CI/CD pipeline",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a design pattern?",
      options: [
        "A UI color scheme",
        "Reusable solution to a commonly occurring software design problem",
        "A CSS framework",
        "A testing strategy",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What is the difference between synchronous and asynchronous code?",
      options: [
        "No difference",
        "Sync waits for completion; async continues without waiting",
        "Async is always faster",
        "Sync is only for databases",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is 'Big O notation' used for?",
      options: [
        "Writing big code",
        "Describing the time/space complexity of an algorithm",
        "Denoting large numbers",
        "Measuring file sizes",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is unit testing?",
      options: [
        "Testing the entire app at once",
        "Testing individual units/functions in isolation",
        "Load testing",
        "Manual testing",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is continuous integration (CI)?",
      options: [
        "Manual code review",
        "Automating code integration, testing, and validation on every commit",
        "A branching strategy",
        "A deployment server",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a stack overflow in programming?",
      options: [
        "A popular Q&A website only",
        "When a program uses more memory on the call stack than allocated (e.g., infinite recursion)",
        "A type of database error",
        "An HTML error",
      ],
      correct: 1,
      xp: 10,
    },
  ],
  programming: [
    {
      id: "generic-prog-1",
      question: "Reverse a String",
      description:
        "Write a solution to reverse the string 'hello'. Output: 'olleh'",
      starterCode: '# Reverse a string\ns = "hello"\n# Your solution here\n',
      expectedOutput: "olleh",
      hint: "In Python: print(s[::-1]) — slicing with step -1 reverses a string",
      xp: 20,
    },
    {
      id: "generic-prog-2",
      question: "Check Palindrome",
      description: "Check if 'racecar' is a palindrome. Output: 'True'",
      starterCode: '# Check palindrome\ns = "racecar"\n# Your solution here\n',
      expectedOutput: "True",
      hint: "A palindrome reads the same forwards and backwards: print(s == s[::-1])",
      xp: 25,
    },
  ],
};

// ─── Topic ID → Full Quiz mapping ─────────────────────────────────────────────

const PART_QUIZ_BANK: Record<string, FullQuiz> = {
  // C Programming parts
  "c-intro-p1": C_COMPUTER_SYSTEM_QUIZ,
  "c-intro-p2": C_ALGORITHMS_QUIZ,
  "c-intro-p3": C_BASICS_QUIZ,
  "c-ops-p1": C_OPERATORS_QUIZ,
  "c-ops-p2": C_OPERATORS_QUIZ,
  "c-ops-p3": C_CONTROL_FLOW_QUIZ,
  "c-arrays-p1": C_ARRAYS_QUIZ,
  "c-functions-p1": C_FUNCTIONS_QUIZ,
  "c-pointers-p1": C_POINTERS_QUIZ,
  // Frontend
  "fe-html-css": FE_HTML_CSS_QUIZ,
  // Python
  "py-basics": PYTHON_BASICS_QUIZ,
};

/**
 * Get a full quiz (15 MCQs + 2 programming questions) for a given part.
 * Falls back to the generic quiz bank if no specific quiz exists.
 */
export function getFullQuizForPart(
  partId: string,
  partTitle: string,
  existingMcqs: CQuizQuestion[],
  existingProgQuestions?: CQuizProgrammingQuestion[],
): FullQuiz {
  // Use specific bank if available
  const specific = PART_QUIZ_BANK[partId];
  if (specific) return specific;

  // Detect category from partTitle / partId keywords
  const lower = `${partId} ${partTitle}`.toLowerCase();

  if (lower.includes("pointer")) return C_POINTERS_QUIZ;
  if (lower.includes("function") || lower.includes("recursion"))
    return C_FUNCTIONS_QUIZ;
  if (
    lower.includes("array") ||
    lower.includes("struct") ||
    lower.includes("sort") ||
    lower.includes("search")
  )
    return C_ARRAYS_QUIZ;
  if (
    lower.includes("loop") ||
    lower.includes("iteration") ||
    lower.includes("condition") ||
    lower.includes("branch") ||
    lower.includes("switch")
  )
    return C_CONTROL_FLOW_QUIZ;
  if (
    lower.includes("operator") ||
    lower.includes("expression") ||
    lower.includes("arithmetic")
  )
    return C_OPERATORS_QUIZ;
  if (
    lower.includes("basic") ||
    lower.includes("variable") ||
    lower.includes("data type") ||
    lower.includes("i/o") ||
    lower.includes("input")
  )
    return C_BASICS_QUIZ;
  if (
    lower.includes("algorithm") ||
    lower.includes("flowchart") ||
    lower.includes("pseudo")
  )
    return C_ALGORITHMS_QUIZ;
  if (
    lower.includes("computer") ||
    lower.includes("system") ||
    lower.includes("memory") ||
    lower.includes("compiler") ||
    lower.includes("processor")
  )
    return C_COMPUTER_SYSTEM_QUIZ;
  if (
    lower.includes("html") ||
    lower.includes("css") ||
    lower.includes("frontend") ||
    lower.includes("web") ||
    lower.includes("react")
  )
    return FE_HTML_CSS_QUIZ;
  if (
    lower.includes("python") ||
    lower.includes("django") ||
    lower.includes("flask")
  )
    return PYTHON_BASICS_QUIZ;

  // Merge existing questions with generic to reach 15
  const merged = [...existingMcqs, ...GENERIC_FULL_QUIZ.mcqs].slice(0, 15);
  const mergedProg =
    existingProgQuestions && existingProgQuestions.length >= 2
      ? existingProgQuestions.slice(0, 2)
      : GENERIC_FULL_QUIZ.programming;

  return {
    mcqs: merged.length >= 15 ? merged : GENERIC_FULL_QUIZ.mcqs,
    programming: mergedProg,
  };
}

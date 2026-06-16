export interface TestCase {
  input: string;
  expected: string;
}

export interface PracticeProgram {
  id: string;
  domain: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  language: string;
  starterCode: string;
  expectedOutput: string;
  testCases: TestCase[];
  hints: string[];
}

export const PRACTICE_DOMAINS = [
  "All",
  "Frontend",
  "Python",
  "Backend",
  "Java",
  "Data Science",
  "Full Stack",
  "Programming in C",
  "Machine Learning",
  "DevOps",
  "Android",
  "iOS",
  "Cybersecurity",
  "Blockchain",
  "Cloud",
  "Game Dev",
  "UI/UX",
] as const;

export type PracticeDomain = (typeof PRACTICE_DOMAINS)[number];

export const PRACTICE_PROGRAMS: PracticeProgram[] = [
  // ── Frontend ────────────────────────────────────────────────────────────────
  {
    id: "fe-01",
    domain: "Frontend",
    title: "Responsive Button Builder",
    difficulty: "Easy",
    description:
      "Create a button element with class 'btn-primary', text 'Click Me', and write a function `handleClick()` that returns the string 'Button clicked!'.",
    language: "javascript",
    starterCode: `// Create a button and handle click
function handleClick() {
  // Return 'Button clicked!'
}

console.log(handleClick());`,
    expectedOutput: "Button clicked!",
    testCases: [{ input: "handleClick()", expected: "Button clicked!" }],
    hints: [
      "A simple function should return a string literal.",
      "Use the return keyword followed by 'Button clicked!'.",
      "function handleClick() { return 'Button clicked!'; }",
    ],
  },
  {
    id: "fe-02",
    domain: "Frontend",
    title: "JavaScript Calculator",
    difficulty: "Medium",
    description:
      "Write a function `calculate(a, op, b)` that takes two numbers and an operator (+, -, *, /) and returns the result. Handle division by zero by returning 'Error'.",
    language: "javascript",
    starterCode: `function calculate(a, op, b) {
  // Implement the calculator
}

console.log(calculate(10, '+', 5));
console.log(calculate(10, '/', 0));`,
    expectedOutput: "15\nError",
    testCases: [
      { input: "calculate(10, '+', 5)", expected: "15" },
      { input: "calculate(10, '/', 0)", expected: "Error" },
    ],
    hints: [
      "Use a switch statement or if/else to handle each operator.",
      "For division, check if b === 0 before dividing.",
      "switch(op) { case '+': return a + b; case '-': return a - b; ... }",
    ],
  },
  {
    id: "fe-03",
    domain: "Frontend",
    title: "Array Filter & Map",
    difficulty: "Medium",
    description:
      "Given an array of numbers, write a function `processArray(arr)` that filters out odd numbers and doubles the remaining even numbers. Return the resulting array joined by commas.",
    language: "javascript",
    starterCode: `function processArray(arr) {
  // Filter evens, double them, return as comma-separated string
}

console.log(processArray([1, 2, 3, 4, 5, 6]));`,
    expectedOutput: "4,8,12",
    testCases: [
      { input: "processArray([1, 2, 3, 4, 5, 6])", expected: "4,8,12" },
    ],
    hints: [
      "Use array.filter() to keep only even numbers (n % 2 === 0).",
      "Chain .map(n => n * 2) after filter to double each number.",
      "arr.filter(n => n % 2 === 0).map(n => n * 2).join(',')",
    ],
  },
  {
    id: "fe-04",
    domain: "Frontend",
    title: "DOM Event Counter",
    difficulty: "Hard",
    description:
      "Write a function `makeCounter()` that returns an object with `increment()`, `decrement()`, and `value()` methods. The counter starts at 0.",
    language: "javascript",
    starterCode: `function makeCounter() {
  // Return an object with increment, decrement, value methods
}

const counter = makeCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value());`,
    expectedOutput: "1",
    testCases: [{ input: "counter after +2 -1", expected: "1" }],
    hints: [
      "Use closure: define a `count` variable inside the function.",
      "Return an object literal with three method properties.",
      "let count = 0; return { increment: () => count++, decrement: () => count--, value: () => count };",
    ],
  },

  // ── Python ───────────────────────────────────────────────────────────────────
  {
    id: "py-01",
    domain: "Python",
    title: "Fibonacci Sequence",
    difficulty: "Easy",
    description:
      "Write a function `fibonacci(n)` that returns the nth Fibonacci number (0-indexed). fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(6) = 8.",
    language: "python",
    starterCode: `def fibonacci(n):
    # Return the nth Fibonacci number
    pass

print(fibonacci(6))
print(fibonacci(0))`,
    expectedOutput: "8\n0",
    testCases: [
      { input: "fibonacci(6)", expected: "8" },
      { input: "fibonacci(0)", expected: "0" },
    ],
    hints: [
      "Base cases: if n == 0 return 0, if n == 1 return 1.",
      "For n > 1, return fibonacci(n-1) + fibonacci(n-2) (recursive approach).",
      "Or use iteration with two variables tracking the last two numbers.",
    ],
  },
  {
    id: "py-02",
    domain: "Python",
    title: "OOP: BankAccount Class",
    difficulty: "Medium",
    description:
      "Create a `BankAccount` class with `balance` initialized to 0. Add methods: `deposit(amount)` (adds to balance), `withdraw(amount)` (deducts if sufficient, else prints 'Insufficient funds'), and `get_balance()` (returns balance).",
    language: "python",
    starterCode: `class BankAccount:
    # Implement deposit, withdraw, get_balance
    pass

acc = BankAccount()
acc.deposit(100)
acc.withdraw(30)
print(acc.get_balance())`,
    expectedOutput: "70",
    testCases: [{ input: "deposit(100), withdraw(30)", expected: "70" }],
    hints: [
      "Use __init__ to set self.balance = 0.",
      "In withdraw, check if amount <= self.balance before deducting.",
      "def get_balance(self): return self.balance",
    ],
  },
  {
    id: "py-03",
    domain: "Python",
    title: "Word Frequency Counter",
    difficulty: "Medium",
    description:
      "Write a function `word_count(text)` that returns a dictionary with each word as a key and its count as value. Convert to lowercase and split by spaces.",
    language: "python",
    starterCode: `def word_count(text):
    # Count frequency of each word
    pass

result = word_count("hello world hello python world world")
print(result['world'])`,
    expectedOutput: "3",
    testCases: [{ input: "count of 'world'", expected: "3" }],
    hints: [
      "Split the text: words = text.lower().split()",
      "Use a dictionary and loop: counts[word] = counts.get(word, 0) + 1",
      "Or use collections.Counter(words) for a one-liner.",
    ],
  },
  {
    id: "py-04",
    domain: "Python",
    title: "File Data Parser",
    difficulty: "Hard",
    description:
      "Write a function `parse_csv_line(line)` that takes a comma-separated string and returns a list of stripped values. Input: '  Alice , 25 , Engineer  ' → ['Alice', '25', 'Engineer']",
    language: "python",
    starterCode: `def parse_csv_line(line):
    # Split by comma and strip whitespace from each value
    pass

result = parse_csv_line("  Alice , 25 , Engineer  ")
print(result)`,
    expectedOutput: "['Alice', '25', 'Engineer']",
    testCases: [
      {
        input: "parse_csv_line('  Alice , 25 , Engineer  ')",
        expected: "['Alice', '25', 'Engineer']",
      },
    ],
    hints: [
      "Split the line by comma: parts = line.split(',')",
      "Strip each part: [p.strip() for p in parts]",
      "return [p.strip() for p in line.split(',')]",
    ],
  },

  // ── Backend ──────────────────────────────────────────────────────────────────
  {
    id: "be-01",
    domain: "Backend",
    title: "REST API Route Logic",
    difficulty: "Easy",
    description:
      "Write a function `getStatusCode(method, resource)` that returns the correct HTTP status code: GET→200, POST→201, DELETE→204, unknown→404.",
    language: "javascript",
    starterCode: `function getStatusCode(method, resource) {
  // Return the correct HTTP status code
}

console.log(getStatusCode('GET', '/users'));
console.log(getStatusCode('POST', '/users'));
console.log(getStatusCode('PATCH', '/users'));`,
    expectedOutput: "200\n201\n404",
    testCases: [
      { input: "GET", expected: "200" },
      { input: "POST", expected: "201" },
      { input: "PATCH", expected: "404" },
    ],
    hints: [
      "Use a switch or object map: const codes = { GET: 200, POST: 201, DELETE: 204 }",
      "Return codes[method] ?? 404 for unknowns.",
      "const map = {GET:200,POST:201,DELETE:204}; return map[method] || 404;",
    ],
  },
  {
    id: "be-02",
    domain: "Backend",
    title: "JWT Token Validator",
    difficulty: "Medium",
    description:
      "Write a function `isTokenValid(token)` that checks if a JWT-like token string has exactly 3 parts separated by dots and each part is non-empty. Return true or false.",
    language: "javascript",
    starterCode: `function isTokenValid(token) {
  // Check if token has 3 non-empty dot-separated parts
}

console.log(isTokenValid('header.payload.signature'));
console.log(isTokenValid('invalid.token'));`,
    expectedOutput: "true\nfalse",
    testCases: [
      { input: "header.payload.signature", expected: "true" },
      { input: "invalid.token", expected: "false" },
    ],
    hints: [
      "Split by '.': const parts = token.split('.')",
      "Check: parts.length === 3 && parts.every(p => p.length > 0)",
      "return token.split('.').filter(p => p).length === 3;",
    ],
  },
  {
    id: "be-03",
    domain: "Backend",
    title: "Middleware Pipeline",
    difficulty: "Hard",
    description:
      "Write a function `runMiddleware(fns, value)` that applies an array of functions sequentially, passing the result of each to the next. Like a pipe/compose chain.",
    language: "javascript",
    starterCode: `function runMiddleware(fns, value) {
  // Apply each function in sequence
}

const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;

console.log(runMiddleware([double, addTen, square], 5));`,
    expectedOutput: "400",
    testCases: [
      { input: "double(5)=10, addTen(10)=20, square(20)=400", expected: "400" },
    ],
    hints: [
      "Use Array.reduce: fns.reduce((acc, fn) => fn(acc), value)",
      "Start with the initial value and apply each function to the accumulator.",
      "return fns.reduce((acc, fn) => fn(acc), value);",
    ],
  },

  // ── Java ─────────────────────────────────────────────────────────────────────
  {
    id: "java-01",
    domain: "Java",
    title: "Reverse a String",
    difficulty: "Easy",
    description:
      "Write a Java-style solution using JavaScript: implement `reverseString(s)` that reverses a string without using built-in reverse methods.",
    language: "javascript",
    starterCode: `function reverseString(s) {
  // Reverse the string without .reverse()
  let result = '';
  // Loop from end to start
}

console.log(reverseString('Hello'));
console.log(reverseString('Java'));`,
    expectedOutput: "olleH\navaJ",
    testCases: [
      { input: "reverseString('Hello')", expected: "olleH" },
      { input: "reverseString('Java')", expected: "avaJ" },
    ],
    hints: [
      "Loop from i = s.length - 1 down to 0.",
      "Concatenate s[i] to result in each iteration.",
      "for (let i = s.length - 1; i >= 0; i--) result += s[i];",
    ],
  },
  {
    id: "java-02",
    domain: "Java",
    title: "Bubble Sort Implementation",
    difficulty: "Medium",
    description:
      "Implement `bubbleSort(arr)` that sorts an array of numbers in ascending order using the bubble sort algorithm. Return the sorted array as a comma-separated string.",
    language: "javascript",
    starterCode: `function bubbleSort(arr) {
  // Implement bubble sort in-place
  // Return arr.join(',')
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
    expectedOutput: "11,12,22,25,34,64,90",
    testCases: [
      { input: "[64,34,25,12,22,11,90]", expected: "11,12,22,25,34,64,90" },
    ],
    hints: [
      "Use nested loops: outer for passes, inner for comparisons.",
      "If arr[j] > arr[j+1], swap them using a temp variable.",
      "for (let i = 0; i < n-1; i++) for (let j = 0; j < n-i-1; j++) if (arr[j] > arr[j+1]) swap",
    ],
  },
  {
    id: "java-03",
    domain: "Java",
    title: "Stack Data Structure",
    difficulty: "Hard",
    description:
      "Implement a `Stack` class with `push(val)`, `pop()` (returns and removes top), `peek()` (returns top without removing), and `isEmpty()`. Use an array internally.",
    language: "javascript",
    starterCode: `class Stack {
  // Implement push, pop, peek, isEmpty
}

const s = new Stack();
s.push(1); s.push(2); s.push(3);
console.log(s.pop());
console.log(s.peek());
console.log(s.isEmpty());`,
    expectedOutput: "3\n2\nfalse",
    testCases: [
      { input: "pop after 3 pushes", expected: "3" },
      { input: "peek after pop", expected: "2" },
    ],
    hints: [
      "Use this.items = [] in the constructor.",
      "push adds to the end: this.items.push(val). pop removes from end: return this.items.pop().",
      "peek returns this.items[this.items.length - 1]",
    ],
  },

  // ── Data Science ─────────────────────────────────────────────────────────────
  {
    id: "ds-01",
    domain: "Data Science",
    title: "Calculate Mean & Median",
    difficulty: "Easy",
    description:
      "Write `stats(arr)` that returns an object with `mean` (average) and `median` (middle value when sorted). For even-length arrays, median = average of two middle values. Round to 2 decimal places.",
    language: "javascript",
    starterCode: `function stats(arr) {
  // Calculate and return { mean, median }
}

const result = stats([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(result.mean);
console.log(result.median);`,
    expectedOutput: "3.88\n3.5",
    testCases: [
      { input: "mean of [3,1,4,1,5,9,2,6]", expected: "3.88" },
      { input: "median of [3,1,4,1,5,9,2,6]", expected: "3.5" },
    ],
    hints: [
      "Mean: sum all values and divide by length.",
      "Median: sort the array first, then find the middle index.",
      "For even length: (sorted[mid-1] + sorted[mid]) / 2",
    ],
  },
  {
    id: "ds-02",
    domain: "Data Science",
    title: "Data Filtering Pipeline",
    difficulty: "Medium",
    description:
      "Given an array of student objects {name, score}, write `topStudents(students, threshold)` that returns names of students with score >= threshold, sorted alphabetically.",
    language: "javascript",
    starterCode: `function topStudents(students, threshold) {
  // Filter by score, return sorted names array joined by comma
}

const data = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 72 },
  { name: 'Charlie', score: 91 },
  { name: 'Diana', score: 88 }
];
console.log(topStudents(data, 85));`,
    expectedOutput: "Alice,Charlie,Diana",
    testCases: [{ input: "threshold 85", expected: "Alice,Charlie,Diana" }],
    hints: [
      "Filter: students.filter(s => s.score >= threshold)",
      "Map to names: .map(s => s.name)",
      "Sort alphabetically: .sort() then .join(',')",
    ],
  },

  // ── Full Stack ────────────────────────────────────────────────────────────────
  {
    id: "fs-01",
    domain: "Full Stack",
    title: "API Response Formatter",
    difficulty: "Medium",
    description:
      "Write `formatApiResponse(data, status)` that wraps data in a standard API response object: { success: boolean, status: number, data: any, timestamp: string }. success = true if status < 400.",
    language: "javascript",
    starterCode: `function formatApiResponse(data, status) {
  // Return standardized API response object
}

const res = formatApiResponse({ user: 'Alice' }, 200);
console.log(res.success);
console.log(res.status);`,
    expectedOutput: "true\n200",
    testCases: [
      { input: "status 200", expected: "success: true" },
      { input: "status 404", expected: "success: false" },
    ],
    hints: [
      "success = status < 400",
      "Use new Date().toISOString() for timestamp.",
      "return { success: status < 400, status, data, timestamp: new Date().toISOString() }",
    ],
  },

  // ── Programming in C ─────────────────────────────────────────────────────────
  {
    id: "c-01",
    domain: "Programming in C",
    title: "Factorial Using Recursion",
    difficulty: "Easy",
    description:
      "Write a C program that calculates the factorial of a number using recursion. The function `factorial(n)` should return n! where factorial(0) = 1 and factorial(n) = n * factorial(n-1). Print factorial(5) and factorial(0).",
    language: "c",
    starterCode: `#include <stdio.h>

// Recursive factorial function
int factorial(int n) {
    // Base case: factorial of 0 is 1
    // Recursive case: n * factorial(n-1)
    // Write your code here
}

int main() {
    printf("%d\\n", factorial(5));
    printf("%d\\n", factorial(0));
    return 0;
}`,
    expectedOutput: "120\n1",
    testCases: [
      { input: "factorial(5)", expected: "120" },
      { input: "factorial(0)", expected: "1" },
    ],
    hints: [
      "Base case: if (n == 0) return 1;",
      "Recursive case: return n * factorial(n - 1);",
      "Every recursive function needs a base case to stop the recursion — without it, you get infinite recursion.",
    ],
  },
  {
    id: "c-02",
    domain: "Programming in C",
    title: "Pointer Swap Simulation",
    difficulty: "Medium",
    description:
      "Write a C program that swaps two integer values using pointers. Implement a `swap(int *a, int *b)` function that takes pointers and swaps the values at those addresses. Print the values before and after swapping.",
    language: "c",
    starterCode: `#include <stdio.h>

// Swap using pointers (pass by reference)
void swap(int *a, int *b) {
    // Use a temp variable to swap *a and *b
    // Write your code here
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("%d\\n", x);  // Should print 20
    printf("%d\\n", y);  // Should print 10
    return 0;
}`,
    expectedOutput: "20\n10",
    testCases: [{ input: "swap {x:10, y:20}", expected: "x=20, y=10" }],
    hints: [
      "Use a temporary variable: int temp = *a;",
      "Then: *a = *b; and *b = temp;",
      "The * operator dereferences a pointer to access the value at that address.",
    ],
  },
  {
    id: "c-03",
    domain: "Programming in C",
    title: "Array Operations",
    difficulty: "Medium",
    description:
      "Write a C program that finds the sum, maximum, and minimum of an integer array. Given the array {3, 7, 1, 9, 4, 6}, print 'sum=X max=Y min=Z'.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int arr[] = {3, 7, 1, 9, 4, 6};
    int n = 6;
    int sum = 0, max = arr[0], min = arr[0];
    
    // Loop through array to find sum, max, min
    // Write your code here
    
    printf("sum=%d max=%d min=%d\\n", sum, max, min);
    return 0;
}`,
    expectedOutput: "sum=30 max=9 min=1",
    testCases: [{ input: "[3,7,1,9,4,6]", expected: "sum=30 max=9 min=1" }],
    hints: [
      "Use a for loop: for (int i = 0; i < n; i++) to iterate through arr[i].",
      "Inside the loop: sum += arr[i]; and check if arr[i] > max or arr[i] < min.",
      "Initialize max = arr[0] and min = arr[0] before the loop, then compare each element.",
    ],
  },
  {
    id: "c-04",
    domain: "Programming in C",
    title: "String Palindrome Check",
    difficulty: "Easy",
    description:
      "Write a C program that checks if a string is a palindrome (reads the same forwards and backwards). For the string 'racecar' print 'YES', for 'Hello' print 'NO'. Use string.h functions.",
    language: "c",
    starterCode: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "racecar";
    char str2[] = "Hello";
    
    // Check each string: compare with its reverse
    // Use strlen() to get length
    // Write your code here
    
    return 0;
}`,
    expectedOutput: "YES\nNO",
    testCases: [
      { input: "'racecar'", expected: "YES" },
      { input: "'Hello'", expected: "NO" },
    ],
    hints: [
      "Get the string length with strlen(str). Use a loop to compare str[i] with str[len-1-i].",
      "If all character pairs match, it's a palindrome. Use a flag variable set to 1 (true), and set it to 0 if a mismatch is found.",
      "Loop from i=0 to i < len/2, comparing str[i] and str[len-1-i].",
    ],
  },

  // ── C-05: Hello World and basic printf ──────────────────────────────────────
  {
    id: "c-05",
    domain: "Programming in C",
    title: "Hello World & Basic I/O",
    difficulty: "Easy",
    description:
      "Write a C program that declares an integer variable `age = 20` and a float variable `gpa = 8.5`. Print: 'Hello, World!' on the first line, then 'Age: 20' on the second line, and 'GPA: 8.50' on the third line. This covers basic printf, variables, and format specifiers.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    // Declare variables
    int age = 20;
    float gpa = 8.5;
    
    // Print Hello, World!
    // Print Age using %d format specifier
    // Print GPA using %.2f format specifier
    // Write your code here
    
    return 0;
}`,
    expectedOutput: "Hello, World!\nAge: 20\nGPA: 8.50",
    testCases: [
      { input: "age=20, gpa=8.5", expected: "Hello, World!" },
      { input: "int format %d", expected: "Age: 20" },
      { input: "float format %.2f", expected: "GPA: 8.50" },
    ],
    hints: [
      'Use printf("Hello, World!\\n"); to print text with a newline.',
      "Use %d for integers and %.2f for floats with 2 decimal places.",
      'printf("Age: %d\\n", age); and printf("GPA: %.2f\\n", gpa);',
    ],
  },

  // ── C-06: Simple Calculator ──────────────────────────────────────────────────
  {
    id: "c-06",
    domain: "Programming in C",
    title: "Simple Calculator",
    difficulty: "Easy",
    description:
      "Write a C program that reads two integers and an operator character (+, -, *, /) from the user using scanf. Perform the operation and print the result. For division by zero, print 'Error: Division by zero'. Test with input: 10 + 5.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int a, b;
    char op;
    
    // Read input: scanf("%d %c %d", &a, &op, &b);
    scanf("%d %c %d", &a, &op, &b);
    
    // Use if/else or switch to handle +, -, *, /
    // Handle division by zero case
    // Write your code here
    
    return 0;
}`,
    expectedOutput: "15",
    testCases: [
      { input: "10 + 5", expected: "15" },
      { input: "10 / 0", expected: "Error: Division by zero" },
    ],
    hints: [
      "Use a switch statement on the operator: switch(op) { case '+': ... }",
      'For division, check if b == 0 before dividing: if (b == 0) printf("Error: Division by zero\\n");',
      "Each case prints the result: case '+': printf(\"%d\\n\", a + b); break;",
    ],
  },

  // ── C-07: Temperature Converter ──────────────────────────────────────────────
  {
    id: "c-07",
    domain: "Programming in C",
    title: "Temperature Converter",
    difficulty: "Easy",
    description:
      "Write a C program to convert temperature from Celsius to Fahrenheit and Kelvin. Formula: F = (C * 9/5) + 32 and K = C + 273.15. Given celsius = 100.0, print the Fahrenheit and Kelvin values rounded to 2 decimal places.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    float celsius = 100.0;
    float fahrenheit, kelvin;
    
    // Apply formulas: F = (C * 9/5) + 32, K = C + 273.15
    // Write your code here
    
    printf("Fahrenheit: %.2f\\n", fahrenheit);
    printf("Kelvin: %.2f\\n", kelvin);
    return 0;
}`,
    expectedOutput: "Fahrenheit: 212.00\nKelvin: 373.15",
    testCases: [
      { input: "celsius=100.0", expected: "Fahrenheit: 212.00" },
      { input: "celsius=100.0", expected: "Kelvin: 373.15" },
    ],
    hints: [
      "Use float arithmetic: fahrenheit = (celsius * 9.0 / 5.0) + 32;",
      "Use 9.0/5.0 (not 9/5) to avoid integer division truncation in C.",
      "kelvin = celsius + 273.15; — then print with %.2f format.",
    ],
  },

  // ── C-08: Even/Odd Checker ───────────────────────────────────────────────────
  {
    id: "c-08",
    domain: "Programming in C",
    title: "Even/Odd & Positive/Negative Checker",
    difficulty: "Easy",
    description:
      "Write a C program that checks a number and prints whether it is Even or Odd, and also Positive, Negative, or Zero. Test with number = 7: print 'Odd' and 'Positive'. Test with number = -4: print 'Even' and 'Negative'.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int num1 = 7;
    int num2 = -4;
    
    // Check num1: use modulus operator % to test even/odd
    // Use if/else for positive/negative/zero
    // Write your code here for num1
    
    // Write your code here for num2
    
    return 0;
}`,
    expectedOutput: "Odd\nPositive\nEven\nNegative",
    testCases: [
      { input: "num=7", expected: "Odd" },
      { input: "num=7", expected: "Positive" },
      { input: "num=-4", expected: "Even" },
      { input: "num=-4", expected: "Negative" },
    ],
    hints: [
      "Use the modulus operator: if (num % 2 == 0) it's Even, else Odd.",
      "For positive/negative: if (num > 0) print 'Positive', else if (num < 0) print 'Negative', else 'Zero'.",
      "You can use nested if/else statements or separate conditions for each check.",
    ],
  },

  // ── C-09: Grade Calculator ────────────────────────────────────────────────────
  {
    id: "c-09",
    domain: "Programming in C",
    title: "Grade Calculator with Switch",
    difficulty: "Easy",
    description:
      "Write a C program that assigns a letter grade based on a score. Use a switch statement on score/10: 10 or 9 → 'A', 8 → 'B', 7 → 'C', 6 → 'D', else → 'F'. Test with score = 85 (prints 'B') and score = 55 (prints 'F').",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int score1 = 85;
    int score2 = 55;
    
    // Use switch(score/10) to determine grade
    // case 10: case 9: → 'A'
    // case 8: → 'B', case 7: → 'C', case 6: → 'D'
    // default: → 'F'
    // Write your code for score1 here
    
    // Write your code for score2 here
    
    return 0;
}`,
    expectedOutput: "B\nF",
    testCases: [
      { input: "score=85", expected: "B" },
      { input: "score=55", expected: "F" },
    ],
    hints: [
      "Divide the score by 10 to get a single digit: switch(score / 10)",
      "Use fall-through for 'A': case 10: case 9: printf(\"A\\n\"); break;",
      'The default case handles scores below 60: default: printf("F\\n"); break;',
    ],
  },

  // ── C-10: Number Pattern with Loops ─────────────────────────────────────────
  {
    id: "c-10",
    domain: "Programming in C",
    title: "Number Pattern with Nested Loops",
    difficulty: "Easy",
    description:
      "Write a C program that prints a right triangle number pattern using nested for loops. For n=4, print:\n1\n1 2\n1 2 3\n1 2 3 4\nEach row i prints numbers from 1 to i.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int n = 4;
    
    // Outer loop: controls rows (i from 1 to n)
    // Inner loop: controls columns (j from 1 to i)
    // Print each number followed by a space, then newline after each row
    // Write your code here
    
    return 0;
}`,
    expectedOutput: "1 \n1 2 \n1 2 3 \n1 2 3 4 ",
    testCases: [
      { input: "n=4, row 1", expected: "1" },
      { input: "n=4, row 3", expected: "1 2 3" },
    ],
    hints: [
      "Use two nested for loops: for(i=1; i<=n; i++) { for(j=1; j<=i; j++) { ... } }",
      'Inside the inner loop: printf("%d ", j); to print number and space.',
      'After the inner loop ends, print a newline: printf("\\n");',
    ],
  },

  // ── C-11: Sum of Series ───────────────────────────────────────────────────────
  {
    id: "c-11",
    domain: "Programming in C",
    title: "Sum of Series with While Loop",
    difficulty: "Medium",
    description:
      "Write a C program using a while loop to compute the sum of the series: 1 + 1/2 + 1/3 + ... + 1/n for n = 10. This demonstrates accumulator pattern, type casting, and while loop. Print the result rounded to 4 decimal places.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int n = 10;
    int i = 1;
    float sum = 0.0;
    
    // Use a while loop: while (i <= n)
    // Add (float)1/i (or 1.0/i) to sum
    // Increment i
    // Write your code here
    
    printf("Sum = %.4f\\n", sum);
    return 0;
}`,
    expectedOutput: "Sum = 2.9290",
    testCases: [{ input: "n=10", expected: "2.9290" }],
    hints: [
      "Use while (i <= n) { sum += 1.0 / i; i++; } — the 1.0 forces float division.",
      "If you write 1/i in C with int i, integer division gives 0 for i>1. Cast it: (float)1/i.",
      "The accumulator pattern: sum starts at 0 and each iteration adds the next term.",
    ],
  },

  // ── C-12: Fibonacci Sequence ─────────────────────────────────────────────────
  {
    id: "c-12",
    domain: "Programming in C",
    title: "Fibonacci Sequence with For Loop",
    difficulty: "Easy",
    description:
      "Write a C program that prints the first 10 Fibonacci numbers on one line separated by spaces. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Use a for loop with two tracking variables.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int n = 10;
    int a = 0, b = 1, next;
    
    // Print first Fibonacci number
    printf("%d ", a);
    // Print second Fibonacci number
    printf("%d ", b);
    
    // Use a for loop to compute and print the remaining numbers
    // next = a + b, then shift: a = b, b = next
    // Write your code here
    
    printf("\\n");
    return 0;
}`,
    expectedOutput: "0 1 1 2 3 5 8 13 21 34 ",
    testCases: [
      { input: "first 10 fibonacci", expected: "0 1 1 2 3 5 8 13 21 34" },
    ],
    hints: [
      "Start with a=0 and b=1. In each loop iteration, compute next = a + b.",
      "After printing next, shift: a = b; b = next;",
      "Loop runs from i=2 to i<n (since first two are already printed).",
    ],
  },

  // ── C-13: Array Bubble Sort ───────────────────────────────────────────────────
  {
    id: "c-13",
    domain: "Programming in C",
    title: "Array Bubble Sort",
    difficulty: "Medium",
    description:
      "Write a C program that sorts an integer array using the Bubble Sort algorithm. Given arr[] = {64, 34, 25, 12, 22, 11, 90}, sort it in ascending order and print all elements separated by spaces.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    int i, j, temp;
    
    // Bubble sort: nested loops
    // Outer loop: i from 0 to n-1
    // Inner loop: j from 0 to n-i-2
    // If arr[j] > arr[j+1], swap them using temp
    // Write your code here
    
    // Print sorted array
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}`,
    expectedOutput: "11 12 22 25 34 64 90 ",
    testCases: [
      {
        input: "{64,34,25,12,22,11,90}",
        expected: "11 12 22 25 34 64 90",
      },
    ],
    hints: [
      "Outer loop: for(i=0; i<n-1; i++) — each pass places the largest remaining element at the end.",
      "Inner loop: for(j=0; j<n-i-1; j++) — compare arr[j] and arr[j+1].",
      "Swap: if(arr[j] > arr[j+1]) { temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; }",
    ],
  },

  // ── C-14: String Length Without strlen ───────────────────────────────────────
  {
    id: "c-14",
    domain: "Programming in C",
    title: "String Length Without strlen",
    difficulty: "Easy",
    description:
      "Write a C program that calculates the length of a string without using the strlen() function. Use a while loop to count characters until the null terminator '\\0' is reached. Test with 'Hello' (length 5) and 'Programming' (length 11).",
    language: "c",
    starterCode: `#include <stdio.h>

// Function to find string length without strlen
int myStrlen(char str[]) {
    int count = 0;
    // Use while loop: while (str[count] != '\\0') count++
    // Write your code here
    return count;
}

int main() {
    char s1[] = "Hello";
    char s2[] = "Programming";
    
    printf("%d\\n", myStrlen(s1));
    printf("%d\\n", myStrlen(s2));
    return 0;
}`,
    expectedOutput: "5\n11",
    testCases: [
      { input: 'myStrlen("Hello")', expected: "5" },
      { input: 'myStrlen("Programming")', expected: "11" },
    ],
    hints: [
      "A C string always ends with a null character '\\0'. Use this as the loop condition.",
      "while (str[count] != '\\0') { count++; } — each iteration advances one character.",
      "You can also write it as: while (str[count]) count++; since '\\0' is 0 (false).",
    ],
  },

  // ── C-15: Structure Student Record ───────────────────────────────────────────
  {
    id: "c-15",
    domain: "Programming in C",
    title: "Structure: Student Record",
    difficulty: "Medium",
    description:
      "Define a C structure `Student` with fields: name (char[50]), rollNo (int), and marks (float). Create two Student variables, assign values, and print them. This covers struct definition, member access with dot operator, and formatted output.",
    language: "c",
    starterCode: `#include <stdio.h>
#include <string.h>

// Define the Student structure
struct Student {
    // Add fields: char name[50], int rollNo, float marks
    // Write your code here
};

int main() {
    struct Student s1, s2;
    
    // Assign values to s1: name="Alice", rollNo=101, marks=92.5
    strcpy(s1.name, "Alice");
    s1.rollNo = 101;
    s1.marks = 92.5;
    
    // Assign values to s2: name="Bob", rollNo=102, marks=78.0
    // Write your code here
    
    // Print both students: "Name: Alice, Roll: 101, Marks: 92.50"
    printf("Name: %s, Roll: %d, Marks: %.2f\\n", s1.name, s1.rollNo, s1.marks);
    // Write your code to print s2 here
    
    return 0;
}`,
    expectedOutput:
      "Name: Alice, Roll: 101, Marks: 92.50\nName: Bob, Roll: 102, Marks: 78.00",
    testCases: [
      { input: "s1 data", expected: "Name: Alice, Roll: 101, Marks: 92.50" },
      { input: "s2 data", expected: "Name: Bob, Roll: 102, Marks: 78.00" },
    ],
    hints: [
      "Define structure fields inside the braces: struct Student { char name[50]; int rollNo; float marks; };",
      "Use the dot operator to access members: s2.rollNo = 102; s2.marks = 78.0;",
      'Use strcpy(s2.name, "Bob"); to copy string into char array — you can\'t use = for strings.',
    ],
  },

  // ── C-16: Union Data Type Demo ────────────────────────────────────────────────
  {
    id: "c-16",
    domain: "Programming in C",
    title: "Union vs Struct: Size Comparison",
    difficulty: "Medium",
    description:
      "Write a C program that defines a struct and a union with the same three fields (int i, float f, char c[20]). Print the size of each using sizeof(). The union size equals the largest member, while struct size is the sum of all members (with alignment).",
    language: "c",
    starterCode: `#include <stdio.h>

// Define a struct with int, float, char[20]
struct DataStruct {
    int i;
    float f;
    char c[20];
};

// Define a union with the same fields
union DataUnion {
    int i;
    float f;
    char c[20];
};

int main() {
    printf("Size of struct: %lu\\n", sizeof(struct DataStruct));
    printf("Size of union: %lu\\n", sizeof(union DataUnion));
    
    // In a union, all members share the same memory
    union DataUnion u;
    u.i = 42;
    printf("Union int: %d\\n", u.i);
    u.f = 3.14f;  // This overwrites the int!
    printf("Union float: %.2f\\n", u.f);
    
    return 0;
}`,
    expectedOutput:
      "Size of struct: 28\nSize of union: 20\nUnion int: 42\nUnion float: 3.14",
    testCases: [
      { input: "sizeof union", expected: "20" },
      { input: "u.i = 42", expected: "Union int: 42" },
    ],
    hints: [
      "A union's size = size of its largest member. Here char c[20] is 20 bytes, so union is 20 bytes.",
      "A struct allocates separate memory for each field; size = sum of all fields (plus padding for alignment).",
      "When you assign u.f = 3.14, it overwrites u.i because they share the same memory location.",
    ],
  },

  // ── C-17: Function with Return Value ─────────────────────────────────────────
  {
    id: "c-17",
    domain: "Programming in C",
    title: "Function with Return Value",
    difficulty: "Easy",
    description:
      "Write a C program with three functions: `add(a, b)` returns sum, `multiply(a, b)` returns product, and `power(base, exp)` returns base raised to exp using a loop. Call each from main and print the results for (5,3).",
    language: "c",
    starterCode: `#include <stdio.h>

// Function to add two integers
int add(int a, int b) {
    // Return a + b
    // Write your code here
}

// Function to multiply two integers
int multiply(int a, int b) {
    // Return a * b
    // Write your code here
}

// Function to compute base^exp using a loop (not recursion)
int power(int base, int exp) {
    int result = 1;
    // Use a for loop to multiply base by itself exp times
    // Write your code here
    return result;
}

int main() {
    printf("%d\\n", add(5, 3));       // 8
    printf("%d\\n", multiply(5, 3));  // 15
    printf("%d\\n", power(5, 3));     // 125
    return 0;
}`,
    expectedOutput: "8\n15\n125",
    testCases: [
      { input: "add(5,3)", expected: "8" },
      { input: "multiply(5,3)", expected: "15" },
      { input: "power(5,3)", expected: "125" },
    ],
    hints: [
      "Functions in C: return_type function_name(parameters) { ... return value; }",
      "For power: use for(int i=0; i<exp; i++) { result *= base; }",
      "Each function returns the computed value with the return statement.",
    ],
  },

  // ── C-18: Recursive Power Function ────────────────────────────────────────────
  {
    id: "c-18",
    domain: "Programming in C",
    title: "Recursive Power Function",
    difficulty: "Medium",
    description:
      "Write a C program that calculates base^exponent using recursion. The recursive rule: power(base, 0) = 1 (base case), power(base, n) = base * power(base, n-1). Test with power(2,8)=256 and power(3,4)=81.",
    language: "c",
    starterCode: `#include <stdio.h>

// Recursive power function
int power(int base, int exp) {
    // Base case: any number to power 0 is 1
    // Recursive case: base * power(base, exp-1)
    // Write your code here
}

int main() {
    printf("%d\\n", power(2, 8));   // 256
    printf("%d\\n", power(3, 4));   // 81
    return 0;
}`,
    expectedOutput: "256\n81",
    testCases: [
      { input: "power(2,8)", expected: "256" },
      { input: "power(3,4)", expected: "81" },
    ],
    hints: [
      "Base case: if (exp == 0) return 1; — anything raised to 0 is 1.",
      "Recursive case: return base * power(base, exp - 1);",
      "Trace power(2,3): 2 * power(2,2) → 2 * 2 * power(2,1) → 2 * 2 * 2 * power(2,0) → 2*2*2*1 = 8.",
    ],
  },

  // ── C-19: Pointer Arithmetic ─────────────────────────────────────────────────
  {
    id: "c-19",
    domain: "Programming in C",
    title: "Pointer Arithmetic & Array Traversal",
    difficulty: "Medium",
    description:
      "Write a C program that demonstrates pointer arithmetic by traversing an array using a pointer instead of an index. Given int arr[] = {10, 20, 30, 40, 50}, use a pointer ptr = arr and increment it to print each element.",
    language: "c",
    starterCode: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = 5;
    int *ptr = arr;  // ptr points to the first element
    
    // Use a for loop with ptr++ to traverse the array
    // Print each element using *ptr (dereference)
    // Write your code here
    
    return 0;
}`,
    expectedOutput: "10\n20\n30\n40\n50",
    testCases: [
      { input: "arr[0] via pointer", expected: "10" },
      { input: "arr[4] via pointer", expected: "50" },
    ],
    hints: [
      "ptr++ moves the pointer to the next int in memory (advances by sizeof(int) bytes).",
      'Use *ptr to dereference: printf("%d\\n", *ptr); gives the value at the pointer\'s address.',
      'Loop: for(int i=0; i<n; i++) { printf("%d\\n", *ptr); ptr++; }',
    ],
  },

  // ── C-20: Dynamic Memory with malloc ─────────────────────────────────────────
  {
    id: "c-20",
    domain: "Programming in C",
    title: "Dynamic Memory Allocation with malloc",
    difficulty: "Hard",
    description:
      "Write a C program that dynamically allocates an array of n integers using malloc(). Fill the array with values 1*2, 2*2, 3*2, ..., n*2 (i.e., doubles of 1 to n). Print each element, then free the memory. For n=5, output: 2 4 6 8 10.",
    language: "c",
    starterCode: `#include <stdio.h>
#include <stdlib.h>  // Required for malloc and free

int main() {
    int n = 5;
    int *arr;
    
    // Allocate memory for n integers: arr = (int*)malloc(n * sizeof(int))
    // Write your code here
    
    // Check if allocation succeeded: if (arr == NULL) { printf("Memory error\\n"); return 1; }
    // Write your code here
    
    // Fill array: arr[i] = (i+1) * 2
    // Write your code here
    
    // Print array elements separated by spaces
    // Write your code here
    
    // Free the allocated memory: free(arr)
    // Write your code here
    
    printf("\\n");
    return 0;
}`,
    expectedOutput: "2 4 6 8 10 ",
    testCases: [
      { input: "n=5, arr[0]", expected: "2" },
      { input: "n=5, arr[4]", expected: "10" },
    ],
    hints: [
      "malloc returns a void pointer: int *arr = (int*)malloc(n * sizeof(int));",
      "Always check if malloc returned NULL (allocation failure): if(arr == NULL) handle error.",
      "After use, free the memory: free(arr); — this prevents memory leaks.",
    ],
  },

  // ── Machine Learning ─────────────────────────────────────────────────────────
  {
    id: "ml-01",
    domain: "Machine Learning",
    title: "Linear Regression Prediction",
    difficulty: "Medium",
    description:
      "Implement `linearPredict(slope, intercept, x)` that returns the predicted y value using y = mx + b. Round to 2 decimal places.",
    language: "javascript",
    starterCode: `function linearPredict(slope, intercept, x) {
  // y = slope * x + intercept
}

console.log(linearPredict(2.5, 1.0, 4));
console.log(linearPredict(0.5, 3.0, 10));`,
    expectedOutput: "11\n8",
    testCases: [
      { input: "2.5*4 + 1.0", expected: "11" },
      { input: "0.5*10 + 3.0", expected: "8" },
    ],
    hints: [
      "Apply the linear equation: y = slope * x + intercept",
      "Use parseFloat(result.toFixed(2)) to round.",
      "return parseFloat((slope * x + intercept).toFixed(2));",
    ],
  },
  {
    id: "ml-02",
    domain: "Machine Learning",
    title: "Normalize Data (Min-Max)",
    difficulty: "Hard",
    description:
      "Write `normalize(arr)` that applies min-max normalization: each value becomes (x - min) / (max - min). Return values rounded to 2 decimals, joined by commas.",
    language: "javascript",
    starterCode: `function normalize(arr) {
  // Apply min-max normalization
  // Return comma-separated rounded values
}

console.log(normalize([10, 20, 30, 40, 50]));`,
    expectedOutput: "0,0.25,0.5,0.75,1",
    testCases: [{ input: "[10,20,30,40,50]", expected: "0,0.25,0.5,0.75,1" }],
    hints: [
      "Find min and max: Math.min(...arr), Math.max(...arr)",
      "Apply formula: (x - min) / (max - min) for each element",
      "Round with parseFloat(val.toFixed(2))",
    ],
  },

  // ── DevOps ───────────────────────────────────────────────────────────────────
  {
    id: "devops-01",
    domain: "DevOps",
    title: "Semver Version Comparison",
    difficulty: "Medium",
    description:
      "Write `compareVersions(v1, v2)` that compares two semver strings (e.g. '1.2.3'). Return 1 if v1 > v2, -1 if v1 < v2, 0 if equal.",
    language: "javascript",
    starterCode: `function compareVersions(v1, v2) {
  // Compare semantic version strings
  // Return 1, -1, or 0
}

console.log(compareVersions('2.0.0', '1.9.9'));
console.log(compareVersions('1.0.0', '1.0.0'));`,
    expectedOutput: "1\n0",
    testCases: [
      { input: "'2.0.0' vs '1.9.9'", expected: "1" },
      { input: "'1.0.0' vs '1.0.0'", expected: "0" },
    ],
    hints: [
      "Split both by '.': const p1 = v1.split('.').map(Number)",
      "Compare each part sequentially.",
      "if (p1[i] > p2[i]) return 1; if (p1[i] < p2[i]) return -1;",
    ],
  },

  // ── Cybersecurity ────────────────────────────────────────────────────────────
  {
    id: "sec-01",
    domain: "Cybersecurity",
    title: "Password Strength Checker",
    difficulty: "Medium",
    description:
      "Write `checkPassword(pwd)` that returns 'Weak', 'Medium', or 'Strong'. Strong: length >= 12, has uppercase, lowercase, digit, and special char. Medium: length >= 8 and 3/4 criteria. Else Weak.",
    language: "javascript",
    starterCode: `function checkPassword(pwd) {
  // Check password strength
  // Return 'Weak', 'Medium', or 'Strong'
}

console.log(checkPassword('abc'));
console.log(checkPassword('Hello123'));
console.log(checkPassword('Secure@Pass2024'));`,
    expectedOutput: "Weak\nMedium\nStrong",
    testCases: [
      { input: "'abc'", expected: "Weak" },
      { input: "'Hello123'", expected: "Medium" },
      { input: "'Secure@Pass2024'", expected: "Strong" },
    ],
    hints: [
      "Check criteria with regex: /[A-Z]/.test(pwd), /[0-9]/.test(pwd), /[^a-zA-Z0-9]/.test(pwd)",
      "Count how many criteria pass and combine with length check.",
      "Score 4 criteria + length>=12 → Strong; Score 3 + length>=8 → Medium",
    ],
  },

  // ── Blockchain ───────────────────────────────────────────────────────────────
  {
    id: "chain-01",
    domain: "Blockchain",
    title: "Simple Hash Function",
    difficulty: "Hard",
    description:
      "Write `simpleHash(data)` that creates a deterministic numeric hash from a string using a djb2-style algorithm: start with 5381, for each char do hash = hash * 33 + charCode. Return the final hash as a hex string.",
    language: "javascript",
    starterCode: `function simpleHash(data) {
  let hash = 5381;
  // For each character, update hash
  // Return hash.toString(16)
}

console.log(simpleHash('hello'));
console.log(simpleHash('hello') === simpleHash('hello'));`,
    expectedOutput: "true",
    testCases: [
      {
        input: "simpleHash('hello') === simpleHash('hello')",
        expected: "true",
      },
    ],
    hints: [
      "Loop through each character: for (const ch of data)",
      "Update: hash = (hash * 33 + ch.charCodeAt(0)) >>> 0",
      "The >>> 0 ensures unsigned 32-bit integer",
    ],
  },

  // ── Cloud ────────────────────────────────────────────────────────────────────
  {
    id: "cloud-01",
    domain: "Cloud",
    title: "Retry with Backoff",
    difficulty: "Hard",
    description:
      "Write `withRetry(fn, maxRetries)` that calls fn() up to maxRetries times. If fn() throws, wait (simulate with sync counter) and retry. Return the result or throw after max retries. Test with a function that succeeds on the 3rd call.",
    language: "javascript",
    starterCode: `function withRetry(fn, maxRetries) {
  // Try calling fn() up to maxRetries times
  // Return result or throw last error
}

let attempts = 0;
const unstable = () => {
  attempts++;
  if (attempts < 3) throw new Error('fail');
  return 'success';
};

console.log(withRetry(unstable, 5));`,
    expectedOutput: "success",
    testCases: [{ input: "function succeeds on 3rd try", expected: "success" }],
    hints: [
      "Use a for loop from 0 to maxRetries.",
      "Wrap fn() in try/catch; save the error and retry.",
      "If loop completes without success, throw the last error.",
    ],
  },

  // ── Game Dev ─────────────────────────────────────────────────────────────────
  {
    id: "game-01",
    domain: "Game Dev",
    title: "Collision Detection (AABB)",
    difficulty: "Medium",
    description:
      "Write `checkCollision(rectA, rectB)` where each rect is {x, y, width, height}. Return true if the rectangles overlap (AABB collision).",
    language: "javascript",
    starterCode: `function checkCollision(rectA, rectB) {
  // Return true if rectangles overlap (AABB)
}

const a = { x: 0, y: 0, width: 50, height: 50 };
const b = { x: 30, y: 30, width: 50, height: 50 };
const c = { x: 100, y: 100, width: 50, height: 50 };

console.log(checkCollision(a, b));
console.log(checkCollision(a, c));`,
    expectedOutput: "true\nfalse",
    testCases: [
      { input: "overlapping rects", expected: "true" },
      { input: "non-overlapping rects", expected: "false" },
    ],
    hints: [
      "Two rects do NOT collide if one is completely to the left, right, above, or below the other.",
      "No collision if: a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y",
      "Return the negation of the no-collision condition.",
    ],
  },

  // ── UI/UX ────────────────────────────────────────────────────────────────────
  {
    id: "uiux-01",
    domain: "UI/UX",
    title: "Color Contrast Ratio",
    difficulty: "Hard",
    description:
      "Write `contrastRatio(l1, l2)` where l1 and l2 are relative luminance values (0-1). Formula: (lighter + 0.05) / (darker + 0.05). Return rounded to 2 decimal places.",
    language: "javascript",
    starterCode: `function contrastRatio(l1, l2) {
  // Calculate WCAG contrast ratio
  // Return rounded to 2 decimal places
}

console.log(contrastRatio(1, 0));    // white on black
console.log(contrastRatio(0.5, 0.2));`,
    expectedOutput: "21\n2.33",
    testCases: [
      { input: "l1=1, l2=0 (white/black)", expected: "21" },
      { input: "l1=0.5, l2=0.2", expected: "2.33" },
    ],
    hints: [
      "Determine lighter and darker: const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1]",
      "Apply formula: (hi + 0.05) / (lo + 0.05)",
      "Round: parseFloat(ratio.toFixed(2))",
    ],
  },

  // ── Android ──────────────────────────────────────────────────────────────────
  {
    id: "android-01",
    domain: "Android",
    title: "Activity Lifecycle Simulator",
    difficulty: "Medium",
    description:
      "Simulate Android Activity lifecycle. Create an `Activity` class with methods: `onCreate()`, `onStart()`, `onResume()`, `onPause()`, `onStop()`, `onDestroy()`. Each logs its name. Call them in order and capture output.",
    language: "javascript",
    starterCode: `class Activity {
  onCreate()  { console.log('onCreate'); }
  onStart()   { /* implement */ }
  onResume()  { /* implement */ }
  onPause()   { /* implement */ }
  onStop()    { /* implement */ }
  onDestroy() { /* implement */ }
}

const a = new Activity();
a.onCreate(); a.onStart(); a.onResume();`,
    expectedOutput: "onCreate\nonStart\nonResume",
    testCases: [
      {
        input: "three lifecycle calls",
        expected: "onCreate\nonStart\nonResume",
      },
    ],
    hints: [
      "Each method should call console.log with its own name.",
      "onStart() { console.log('onStart'); }",
      "The pattern is identical for each lifecycle method.",
    ],
  },

  // ── iOS ──────────────────────────────────────────────────────────────────────
  {
    id: "ios-01",
    domain: "iOS",
    title: "Swift-Style Optional Handling",
    difficulty: "Medium",
    description:
      "Simulate Swift optionals in JS. Write `safeGet(obj, key)` that returns the value if it exists and is not null/undefined, otherwise returns 'nil'. Also write `safeChain(obj, ...keys)` for nested access.",
    language: "javascript",
    starterCode: `function safeGet(obj, key) {
  // Return value or 'nil'
}

const user = { name: 'Alice', address: null };
console.log(safeGet(user, 'name'));
console.log(safeGet(user, 'address'));
console.log(safeGet(user, 'email'));`,
    expectedOutput: "Alice\nnil\nnil",
    testCases: [
      { input: "existing key", expected: "Alice" },
      { input: "null value", expected: "nil" },
      { input: "missing key", expected: "nil" },
    ],
    hints: [
      "Check: obj[key] != null (covers both null and undefined)",
      "return obj[key] != null ? obj[key] : 'nil'",
      "The ?? operator can help: return obj[key] ?? 'nil' (but null returns 'nil' this way)",
    ],
  },
];

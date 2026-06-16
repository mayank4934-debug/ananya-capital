import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const java_module0: CModule = {
  id: "java-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "java-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Java Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO JAVA DEVELOPMENT!

Hey! I'm so excited to be your companion on this Java Development journey! ☕ Java is one of the most widely used programming languages in the world — it powers Android apps, enterprise backends, big data pipelines, and countless mission-critical systems. Once you know Java, doors open everywhere!

COURSE OVERVIEW
Java is a strongly-typed, object-oriented language known for its "write once, run anywhere" philosophy. This course takes you from Java syntax and OOP fundamentals all the way through the Collections framework, multithreading and concurrency, file I/O, Spring Boot for backend development, and real-world project work. Java is the language of choice for backend engineering at most large enterprises and is a top interview language.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write Java code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~35 hours
This is a structured Java course. Dedicate 1–2 hours per day and you'll be building Spring Boot applications in about 4 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "java-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Java Development course:

1. Java Basics — JVM, JDK, syntax, variables, data types, operators, control flow
2. OOP — Classes, objects, inheritance, polymorphism, encapsulation, abstraction, interfaces
3. Collections — ArrayList, LinkedList, HashMap, HashSet, Generics, Iterators
4. Multithreading — Threads, Runnable, synchronization, locks, ExecutorService, CompletableFuture
5. File I/O — Streams, Readers/Writers, NIO, serialization, exception handling
6. Spring Boot — REST controllers, JPA/Hibernate, Spring Security, dependency injection
7. Projects — Build a complete REST API with Spring Boot, MySQL, and JWT authentication`,
          codeExample: "",
        },
        {
          id: "java-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Java programming exercises in coding parts

Theory-only parts do NOT have coding questions. Only parts where you write actual Java code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "java-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what Java development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Java Development journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Java Basics ────────────────────────────────────────────────────

const java_module1: CModule = {
  id: "java-basics",
  title: "Module 1: Java Basics",
  outcome:
    "Write Java programs using core syntax, data types, control flow, and methods.",
  isLocked: false,
  parts: [
    {
      id: "java-m1-p1",
      title: "Part 1: Java Setup & Syntax",
      description:
        "Installing JDK, compiling and running Java programs, variables, and basic syntax.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=eIrMbAQSU34",
      notes: `JAVA SETUP & SYNTAX

Java programs are compiled to bytecode (.class files) by the Java Compiler (javac) and run on the Java Virtual Machine (JVM). Install the JDK (Java Development Kit) — not just the JRE — to compile code.

Every Java program starts execution in the main method:
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

Key rules:
• File name must match the public class name
• Statements end with semicolons
• Java is case-sensitive
• Curly braces define code blocks

Data Types:
• int (32-bit integer), long (64-bit), double (floating point), boolean, char, String
• Variables must be declared with a type: int x = 5;
• String is a class, not a primitive — String name = "Alice";`,
      docs: [],
      partQuiz: [
        {
          question: "What is the JVM?",
          options: [
            "Java Virtual Machine — runs Java bytecode",
            "Java Variable Manager",
            "Just-in-time Version Manager",
            "Java Validation Module",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What command compiles a Java file?",
          options: [
            "java Hello.java",
            "javac Hello.java",
            "compile Hello",
            "jdk Hello.java",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the entry point of a Java program?",
          options: ["start()", "init()", "main(String[] args)", "run()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you print to the console in Java?",
          options: [
            "print('Hello')",
            "console.log('Hello')",
            "System.out.println('Hello')",
            "printf('Hello')",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which data type stores a whole number in Java?",
          options: ["float", "double", "int", "char"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Java files must have the same name as the:",
          options: ["main method", "public class", "package", "import"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'static' mean in the main method signature?",
          options: [
            "The method can only be called once",
            "The method belongs to the class, not an instance",
            "The method cannot be overridden",
            "The method returns nothing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you declare a constant in Java?",
          options: [
            "const int X = 5;",
            "final int X = 5;",
            "static int X = 5;",
            "readonly int X = 5;",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which of these is a valid Java variable name?",
          options: ["2name", "my-var", "myVar", "class"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the size of an int in Java?",
          options: ["16 bits", "32 bits", "64 bits", "8 bits"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which keyword exits a loop immediately?",
          options: ["exit", "stop", "break", "return"],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you start a single-line comment in Java?",
          options: ["#", "--", "//", "/*"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the default value of an uninitialized int field?",
          options: ["null", "undefined", "0", "-1"],
          correct: 2,
          xp: 10,
        },
        {
          question: "String in Java is:",
          options: [
            "A primitive type",
            "A class (object)",
            "A keyword",
            "An interface",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which operator checks value AND type equality in Java?",
          options: ["=", "==", "equals()", "==="],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "java-m1-p1-s1",
          title: "Installing the JDK",
          content: `Java Development Kit (JDK) includes the compiler (javac), the JVM, and standard libraries. Download the latest LTS version from oracle.com or use OpenJDK (adoptium.net). Verify installation by running 'java -version' and 'javac -version' in the terminal.`,
          codeExample: `// Compile: javac Hello.java
// Run: java Hello
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        },
        {
          id: "java-m1-p1-s2",
          title: "Variables & Data Types",
          content:
            "Java is strongly and statically typed \u2014 every variable must be declared with a type. Primitives store values directly; reference types (like String) store addresses. Use final to declare constants.",
          codeExample: `int age = 25;
double price = 9.99;
boolean isActive = true;
char grade = 'A';
String name = "Alice";
final int MAX = 100; // constant`,
        },
        {
          id: "java-m1-p1-s3",
          title: "Reading User Input",
          content:
            "Use Scanner to read input from the console. Import java.util.Scanner, create a new Scanner(System.in), then call nextInt(), nextDouble(), or nextLine() to read values.",
          codeExample: `import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello, " + name);
        sc.close();
    }
}`,
        },
      ],
    },
  ],
  moduleQuiz: [] as CQuizQuestion[],
  moduleTest: [] as CTestProblem[],
};

// ─── Module 2: OOP in Java ────────────────────────────────────────────────────

const java_module2: CModule = {
  id: "java-oop",
  title: "Module 2: Object-Oriented Programming",
  outcome:
    "Design and implement Java programs using classes, inheritance, interfaces, and polymorphism.",
  isLocked: true,
  parts: [
    {
      id: "java-m2-p1",
      title: "Part 1: Classes & Objects",
      description:
        "Defining classes, creating objects, constructors, and encapsulation.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=pTB0EiLXUC8",
      notes: `CLASSES & OBJECTS

A class is a blueprint; an object is an instance. Use 'new' to create objects. Constructors initialize fields. Getters and setters enforce encapsulation.

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}

Person p = new Person("Alice", 30);
System.out.println(p.getName()); // Alice`,
      docs: [],
      partQuiz: [
        {
          question: "What keyword creates a new object?",
          options: ["create", "new", "make", "instantiate"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a constructor?",
          options: [
            "A method that destroys objects",
            "A special method that initializes an object",
            "A static method",
            "An interface method",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Encapsulation means:",
          options: [
            "Inheriting from a parent class",
            "Hiding internal state and exposing only needed interface",
            "Overriding methods",
            "Using interfaces",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "The 'private' keyword:",
          options: [
            "Makes a member accessible everywhere",
            "Makes a member accessible only within its class",
            "Prevents inheritance",
            "Makes a method abstract",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which keyword refers to the current object?",
          options: ["self", "this", "current", "me"],
          correct: 1,
          xp: 10,
        },
        {
          question: "A default constructor has:",
          options: [
            "No parameters",
            "One parameter",
            "Return type void",
            "Static keyword",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Getter methods are also called:",
          options: ["Mutators", "Accessors", "Constructors", "Destructors"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'public' access modifier mean?",
          options: [
            "Only same package",
            "Only subclasses",
            "Accessible from anywhere",
            "Only same class",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Method overloading means:",
          options: [
            "Same name, different parameters",
            "Same name, same parameters in subclass",
            "Hiding a parent method",
            "Implementing an interface",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Static members belong to:",
          options: [
            "Each object instance",
            "The class itself",
            "Subclasses only",
            "Interfaces",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which is NOT a Java access modifier?",
          options: ["public", "private", "protected", "internal"],
          correct: 3,
          xp: 10,
        },
        {
          question: "An abstract class:",
          options: [
            "Cannot have any methods",
            "Can be instantiated directly",
            "Cannot be instantiated directly and may have abstract methods",
            "Must implement all interface methods",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Java supports multiple inheritance via:",
          options: [
            "extends keyword with multiple classes",
            "implements keyword for interfaces",
            "abstract classes",
            "final keyword",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "super() in a constructor calls:",
          options: [
            "The current class constructor",
            "The parent class constructor",
            "An interface method",
            "A static method",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "@Override annotation indicates:",
          options: [
            "The method is new",
            "The method overrides a parent method",
            "The method is deprecated",
            "The method is abstract",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "java-m2-p1-s1",
          title: "Defining Classes",
          content: `A class defines the structure (fields) and behavior (methods) of objects. Access modifiers control visibility. Use 'this' to refer to the current instance.`,
          codeExample: `public class Car {
    private String brand;
    private int year;

    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    public String getBrand() { return brand; }
    public int getYear() { return year; }

    @Override
    public String toString() {
        return brand + " (" + year + ")";
    }
}`,
        },
        {
          id: "java-m2-p1-s2",
          title: "Inheritance",
          content: `Use 'extends' to inherit from a parent class. Subclasses inherit all public/protected fields and methods. Use 'super' to call the parent constructor or methods.`,
          codeExample: `public class ElectricCar extends Car {
    private int range;

    public ElectricCar(String brand, int year, int range) {
        super(brand, year);
        this.range = range;
    }

    public int getRange() { return range; }
}`,
        },
        {
          id: "java-m2-p1-s3",
          title: "Interfaces",
          content: `Interfaces define contracts (method signatures) without implementation. A class can implement multiple interfaces. Use 'default' methods to add implementation to interfaces.`,
          codeExample: `interface Drawable {
    void draw(); // abstract method
    default String getColor() { return "black"; } // default method
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}`,
        },
      ],
    },
  ],
  moduleQuiz: [] as CQuizQuestion[],
  moduleTest: [] as CTestProblem[],
};

// ─── Module 3: Collections & Generics ────────────────────────────────────────

const java_module3: CModule = {
  id: "java-collections",
  title: "Module 3: Collections & Generics",
  outcome:
    "Use Java Collections framework and generics to write flexible, type-safe data structures.",
  isLocked: true,
  parts: [
    {
      id: "java-m3-p1",
      title: "Part 1: Lists & Maps",
      description:
        "ArrayList, LinkedList, HashMap, HashSet and their time complexities.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=dzFoq2qxp_I",
      notes: `JAVA COLLECTIONS

The Collections Framework provides ready-made data structures. Key interfaces:
• List — ordered, allows duplicates (ArrayList, LinkedList)
• Set — no duplicates (HashSet, TreeSet)
• Map — key-value pairs (HashMap, TreeMap)

ArrayList<String> list = new ArrayList<>();
list.add("Alice");
list.add("Bob");
list.get(0); // "Alice"

HashMap<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.get("Alice"); // 95

Generics enforce type safety at compile time:
List<Integer> nums = new ArrayList<>(); // only Integers allowed`,
      docs: [],
      partQuiz: [
        {
          question: "ArrayList is backed by:",
          options: ["A linked list", "An array", "A tree", "A hash table"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which collection does NOT allow duplicates?",
          options: ["ArrayList", "LinkedList", "HashSet", "ArrayDeque"],
          correct: 2,
          xp: 10,
        },
        {
          question: "HashMap key lookup is:",
          options: ["O(n)", "O(log n)", "O(1) average", "O(n²)"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does List.get(i) return?",
          options: [
            "The element at index i",
            "The first element",
            "The last element",
            "A sublist",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "TreeMap stores keys in:",
          options: [
            "Insertion order",
            "Sorted (natural) order",
            "Random order",
            "Hash order",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Generics in Java provide:",
          options: [
            "Runtime type checking",
            "Compile-time type safety",
            "Faster execution",
            "Memory management",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method removes all elements from a collection?",
          options: ["delete()", "removeAll()", "clear()", "empty()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "LinkedList is efficient for:",
          options: [
            "Random access by index",
            "Insertions/deletions at ends",
            "Sorting",
            "Searching by key",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Collections.sort() requires elements to implement:",
          options: ["Cloneable", "Serializable", "Comparable", "Iterable"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is an Iterator?",
          options: [
            "A type of loop",
            "An object to traverse a collection",
            "A sorting algorithm",
            "A generic type",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "List.size() returns:",
          options: [
            "Max capacity",
            "Number of elements",
            "Index of last element",
            "Memory used",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "HashMap.entrySet() returns:",
          options: [
            "All keys",
            "All values",
            "All key-value pairs as Set<Map.Entry>",
            "A sorted map",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which is the thread-safe equivalent of ArrayList?",
          options: [
            "HashSet",
            "LinkedList",
            "Vector or CopyOnWriteArrayList",
            "ArrayDeque",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Stack follows which principle?",
          options: ["FIFO", "LIFO", "Priority order", "Sorted order"],
          correct: 1,
          xp: 10,
        },
        {
          question: "The diamond operator <> allows:",
          options: [
            "Empty generic type declaration",
            "Type inference for generics",
            "Multiple type parameters",
            "Raw types",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "java-m3-p1-s1",
          title: "ArrayList vs LinkedList",
          content:
            "ArrayList uses a dynamic array \u2014 O(1) random access, O(n) insertions in middle. LinkedList uses doubly-linked nodes \u2014 O(1) insertions at head/tail, O(n) random access. Use ArrayList for most cases; LinkedList when you have frequent insertions/deletions at ends.",
          codeExample: `List<String> arrayList = new ArrayList<>();
arrayList.add("A");
arrayList.add("B");
System.out.println(arrayList.get(0)); // A

List<String> linkedList = new LinkedList<>();
linkedList.add("X");
((LinkedList<String>) linkedList).addFirst("Y"); // efficient`,
        },
        {
          id: "java-m3-p1-s2",
          title: "HashMap & HashSet",
          content:
            "HashMap stores key-value pairs with O(1) average get/put. HashSet is backed by a HashMap and stores unique elements. Iterating a HashMap uses entrySet() for key-value pairs.",
          codeExample: `Map<String, Integer> map = new HashMap<>();
map.put("one", 1);
map.put("two", 2);

for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " = " + e.getValue());
}

Set<String> set = new HashSet<>(Arrays.asList("a", "b", "a"));
System.out.println(set.size()); // 2 (no duplicates)`,
        },
        {
          id: "java-m3-p1-s3",
          title: "Generics",
          content:
            "Generics let you write type-safe, reusable code. The type parameter T is replaced at compile time. Wildcards (?) allow flexible method signatures.",
          codeExample: `// Generic class
class Pair<A, B> {
    A first; B second;
    Pair(A first, B second) { this.first = first; this.second = second; }
}

Pair<String, Integer> p = new Pair<>("age", 25);
System.out.println(p.first + ": " + p.second);`,
        },
      ],
    },
  ],
  moduleQuiz: [] as CQuizQuestion[],
  moduleTest: [] as CTestProblem[],
};

// ─── Module 4: Multithreading & I/O ──────────────────────────────────────────

const java_module4: CModule = {
  id: "java-threads-io",
  title: "Module 4: Multithreading & File I/O",
  outcome:
    "Write concurrent Java programs using threads and handle files with I/O streams.",
  isLocked: true,
  parts: [
    {
      id: "java-m4-p1",
      title: "Part 1: Threads & Concurrency",
      description:
        "Creating threads, synchronization, locks, and the ExecutorService.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=r_MbozD32eo",
      notes: `THREADS & CONCURRENCY

Java supports multithreading natively. Create threads by extending Thread or implementing Runnable.

// Using Runnable (preferred)
Runnable task = () -> System.out.println("Running in thread: " + Thread.currentThread().getName());
Thread t = new Thread(task);
t.start();

// Using ExecutorService (production preferred)
ExecutorService exec = Executors.newFixedThreadPool(4);
exec.submit(() -> processData());
exec.shutdown();

Synchronization prevents race conditions:
synchronized (lock) { sharedCounter++; }

Or use atomic classes:
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();`,
      docs: [],
      partQuiz: [
        {
          question: "Which method starts a thread?",
          options: ["run()", "execute()", "start()", "begin()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Runnable vs Thread: Runnable is preferred because:",
          options: [
            "It's faster",
            "Java only supports single inheritance; using Runnable allows extending other classes",
            "It auto-starts",
            "It handles exceptions",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "A race condition occurs when:",
          options: [
            "A thread waits too long",
            "Multiple threads access shared data without proper synchronization",
            "A thread throws an exception",
            "A thread is not started",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which class provides a thread pool?",
          options: [
            "ThreadGroup",
            "ExecutorService",
            "Runnable",
            "ThreadLocal",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "volatile keyword ensures:",
          options: [
            "Thread safety for all operations",
            "A variable is always read from main memory",
            "A method is synchronized",
            "A field is immutable",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Deadlock occurs when:",
          options: [
            "A thread runs forever",
            "Two threads wait for each other's locks",
            "A thread is interrupted",
            "An exception is thrown",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "AtomicInteger is used for:",
          options: [
            "Thread-safe integer operations without locking",
            "Creating thread pools",
            "Scheduling tasks",
            "File locking",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Thread.sleep(1000) pauses for:",
          options: ["1 second", "100ms", "1 minute", "1 nanosecond"],
          correct: 0,
          xp: 10,
        },
        {
          question: "CompletableFuture is used for:",
          options: [
            "Synchronous operations",
            "Asynchronous programming with callbacks",
            "Thread pools",
            "File reading",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method waits for a Future's result?",
          options: ["start()", "run()", "get()", "await()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "ConcurrentHashMap is:",
          options: [
            "Slower than HashMap",
            "Thread-safe HashMap alternative",
            "Same as Hashtable",
            "An unordered set",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "wait() and notify() must be called within:",
          options: [
            "A static method",
            "A synchronized block",
            "A thread's run()",
            "An interface",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Thread states include:",
          options: [
            "NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED",
            "RUNNING, STOPPED, PAUSED",
            "STARTED, RUNNING, DONE",
            "ACTIVE, SLEEPING, DEAD",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "ReentrantLock advantage over synchronized:",
          options: [
            "Faster always",
            "Try-lock, fairness policy, multiple conditions",
            "No deadlocks",
            "No need to release",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which returns a value from a thread?",
          options: ["Runnable", "Callable", "Thread subclass", "Executor"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "java-m4-p1-s1",
          title: "Creating Threads",
          content:
            "Two main ways: extend Thread (limits inheritance) or implement Runnable (preferred). Lambdas make Runnable concise. Use Thread.currentThread().getName() to identify threads.",
          codeExample: `// Lambda Runnable
Thread t = new Thread(() -> {
    for (int i = 0; i < 5; i++) {
        System.out.println(Thread.currentThread().getName() + ": " + i);
    }
}, "Worker-1");
t.start();
t.join(); // wait for completion`,
        },
        {
          id: "java-m4-p1-s2",
          title: "Synchronization",
          content:
            "Use synchronized to prevent race conditions on shared resources. Synchronized can be applied to methods or blocks. The lock object is the monitor.",
          codeExample: `class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}`,
        },
        {
          id: "java-m4-p1-s3",
          title: "File I/O",
          content:
            "Use BufferedReader/BufferedWriter for text files (efficient). Use FileInputStream/FileOutputStream for binary. Try-with-resources auto-closes streams.",
          codeExample: `// Reading a file
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
}

// Writing a file
try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
    writer.write("Hello, File!");
}`,
        },
      ],
    },
  ],
  moduleQuiz: [] as CQuizQuestion[],
  moduleTest: [] as CTestProblem[],
};

// ─── Module 5: Spring Boot ────────────────────────────────────────────────────

const java_module5: CModule = {
  id: "java-spring-boot",
  title: "Module 5: Spring Boot & Projects",
  outcome: "Build REST APIs with Spring Boot, JPA, and Spring Security.",
  isLocked: true,
  parts: [
    {
      id: "java-m5-p1",
      title: "Part 1: Spring Boot Basics",
      description:
        "Spring Boot project setup, REST controllers, dependency injection.",
      hasCodingContent: true,
      videoUrl: "https://www.youtube.com/watch?v=9SGDpanrc8U",
      notes: `SPRING BOOT BASICS

Spring Boot removes boilerplate configuration for Spring apps. Create a project at start.spring.io.

@RestController marks a class as a REST API controller.
@GetMapping, @PostMapping, @PutMapping, @DeleteMapping map HTTP methods.
@RequestBody deserializes JSON to Java objects.
@PathVariable extracts values from the URL.

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public List<User> getAll() { return userService.findAll(); }

    @PostMapping
    public User create(@RequestBody User user) { return userService.save(user); }

    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) { return userService.findById(id); }
}

Spring IoC Container manages beans (objects). Use @Autowired or constructor injection to get dependencies.`,
      docs: [],
      partQuiz: [
        {
          question: "@RestController combines:",
          options: [
            "@Component + @RequestMapping",
            "@Controller + @ResponseBody",
            "@Service + @Repository",
            "@Bean + @Autowired",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "@GetMapping maps to:",
          options: ["HTTP POST", "HTTP PUT", "HTTP GET", "HTTP DELETE"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Dependency injection in Spring means:",
          options: [
            "Manually creating objects",
            "Spring manages and provides object dependencies",
            "Importing libraries",
            "Using static methods",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "@Entity annotation marks:",
          options: [
            "A REST controller",
            "A Spring bean",
            "A JPA entity (database table)",
            "A configuration class",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "application.properties is used to:",
          options: [
            "Write Java code",
            "Configure Spring Boot properties",
            "Define REST endpoints",
            "Store test data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "@RequestBody reads:",
          options: [
            "URL path variables",
            "Query parameters",
            "Request body JSON as Java object",
            "Response headers",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "JPA (Jakarta Persistence API) is used for:",
          options: [
            "REST API design",
            "Mapping Java objects to database tables",
            "Security configuration",
            "Unit testing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Spring Data JPA's findById() returns:",
          options: ["T", "Optional<T>", "List<T>", "Future<T>"],
          correct: 1,
          xp: 10,
        },
        {
          question: "@Service annotation marks:",
          options: [
            "A controller",
            "A business logic bean",
            "A database repository",
            "A configuration",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "HTTP status 201 means:",
          options: ["OK", "Not Found", "Created", "Unauthorized"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Spring Security is used for:",
          options: [
            "Database connections",
            "Authentication and authorization",
            "Logging",
            "Caching",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "JWT stands for:",
          options: [
            "Java Web Toolkit",
            "JSON Web Token",
            "Java Wrapper Type",
            "JavaScript Worker Thread",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "@Transactional ensures:",
          options: [
            "Thread safety",
            "Database operations run in a transaction",
            "Lazy loading",
            "Auto-rollback on startup",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "ResponseEntity<T> allows:",
          options: [
            "Only body response",
            "Controlling HTTP status code + headers + body",
            "Only status code",
            "Streaming data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "spring-boot-starter-web includes:",
          options: [
            "Only a web server",
            "Tomcat, Spring MVC, Jackson for JSON",
            "Just Jackson",
            "Spring Security",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "java-m5-p1-s1",
          title: "Creating a Spring Boot Project",
          content:
            "Use Spring Initializr (start.spring.io) to generate a project with your chosen dependencies. Essential starters: spring-boot-starter-web (REST), spring-boot-starter-data-jpa (ORM), spring-boot-starter-security (auth). The @SpringBootApplication annotation bootstraps the whole application.",
          codeExample: `@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`,
        },
        {
          id: "java-m5-p1-s2",
          title: "JPA & Repositories",
          content:
            "Annotate your model class with @Entity and @Id. Extend JpaRepository<T, ID> to get CRUD methods for free \u2014 no SQL needed. Spring Data JPA also supports custom query methods by method name.",
          codeExample: `@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    // getters + setters
}

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}`,
        },
        {
          id: "java-m5-p1-s3",
          title: "Exception Handling",
          content:
            "Use @ControllerAdvice and @ExceptionHandler to handle exceptions globally. Return appropriate HTTP status codes \u2014 404 for not found, 400 for bad input, 500 for server errors.",
          codeExample: `@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneral(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .body("An error occurred: " + ex.getMessage());
    }
}`,
        },
      ],
    },
  ],
  moduleQuiz: [] as CQuizQuestion[],
  moduleTest: [] as CTestProblem[],
};

// ─── Exported Course ──────────────────────────────────────────────────────────

export const JAVA_DEVELOPER_COURSE: CModule[] = [
  java_module0,
  java_module1,
  java_module2,
  java_module3,
  java_module4,
  java_module5,
];

export const JAVA_DEVELOPER_ROADMAP_ENTRY = {
  id: "java-developer-course",
  title: "Java Developer",
  icon: "☕",
  color: "from-orange-500/20 to-red-500/10",
  tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  description:
    "Java basics, OOP, Collections, Multithreading, Spring Boot — 5 structured modules to job-ready.",
  level: "Beginner to Advanced",
  isCourse: true as const,
  topics: [],
};

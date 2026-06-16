import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const ios_module0 = {
  id: "ios-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "ios-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to iOS Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO IOS DEVELOPMENT!

Hey! I'm so excited to be your companion on this iOS Development adventure! 🍎 Building for Apple's platform is one of the most rewarding things in mobile development — millions of iPhone and iPad users are waiting for your app. Let's make it happen!

COURSE OVERVIEW
iOS development is the craft of building applications for iPhone, iPad, and other Apple devices. You'll learn Swift (Apple's elegant, powerful language), UIKit for traditional interface building, SwiftUI for the modern declarative approach, Core Data for local persistence, networking with URLSession and Combine, and the complete App Store submission process.

HOW THIS COURSE WORKS
This course has 3 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write Swift/iOS code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~40 hours
This is a comprehensive iOS course. Dedicate 1–2 hours per day and you'll be submitting your first app to the App Store in about 4–5 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "ios-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this iOS Development course:

1. Swift Basics — Variables, constants, types, control flow, functions, closures
2. iOS Fundamentals — UIKit, View Controllers, Storyboards, Auto Layout, navigation
3. UIKit — Table views, collection views, custom cells, animations
4. SwiftUI — Declarative UI, state management, previews, and navigation
5. Networking — URLSession, REST APIs, Combine, Codable, error handling
6. App Store Publishing — Certificates, provisioning profiles, TestFlight, submission`,
          codeExample: "",
        },
        {
          id: "ios-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Swift/iOS exercises in coding parts

Theory-only parts do NOT have coding questions. Only parts where you write Swift code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "ios-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what iOS development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your iOS Development journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Swift Basics ────────────────────────────────────────────────────

const ios_module1 = {
  id: "ios-swift-basics",
  title: "Module 1: Swift Basics",
  outcome:
    "Write Swift programs using core syntax, optionals, closures, and protocols.",
  isLocked: false,
  parts: [
    {
      id: "ios-m1-p1",
      title: "Part 1: Swift Syntax",
      description:
        "Variables, constants, types, control flow, and functions in Swift.",
      videoUrl: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
      notes:
        "Swift is Apple's modern, type-safe language. Understanding var/let, strong typing, and control flow is the foundation for all iOS development.",
      docs: [
        {
          label: "Swift Documentation",
          url: "https://docs.swift.org/swift-book/",
        },
        {
          label: "Swift Playground",
          url: "https://developer.apple.com/swift-playgrounds/",
        },
      ],
      partQuiz: [
        {
          question: "Which keyword declares a constant in Swift?",
          options: ["var", "let", "const", "val"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is Swift's string interpolation syntax?",
          options: ["${value}", "\\(value)", "#{value}", "%s"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which loop guarantees at least one execution?",
          options: ["for-in", "while", "repeat-while", "do-while"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "ios-m1-p1-prog1",
          title: "FizzBuzz in Swift",
          description:
            "Write a Swift function fizzBuzz(n: Int) -> [String] that returns an array of FizzBuzz values from 1 to n.",
          starterCode:
            "func fizzBuzz(n: Int) -> [String] {\n    var result: [String] = []\n    // Your code here\n    return result\n}\nprint(fizzBuzz(n: 15))\n",
          hints: [
            "Use a for loop: for i in 1...n",
            "Check divisibility with the % operator",
            "Append 'Fizz', 'Buzz', 'FizzBuzz', or String(i) to result",
          ],
          language: "swift",
        },
      ],
      subsections: [
        {
          id: "ios-m1-p1s1",
          title: "Variables, Constants & Types",
          content:
            "Use var for mutable values and let for constants. Swift infers types automatically, but you can annotate explicitly. Type safety prevents accidental misuse.",
          codeExample:
            '// Variables and constants\nvar score = 0\nlet appName: String = "Code & Crush"\nvar temperature: Double = 36.6\nvar isLoggedIn: Bool = false\n\n// Type inference\nvar count = 10          // inferred as Int\nvar price = 9.99        // inferred as Double\nlet greeting = "Hello" // inferred as String\n\n// String interpolation\nprint("Score: \\(score), App: \\(appName)")\n\n// Tuples\nlet coordinates = (x: 10, y: 20)\nprint("x: \\(coordinates.x)")',
          video: { youtubeId: "comQ1-x2a1Q", title: "Swift Variables & Types" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ios-m1-p1s2",
          title: "Control Flow & Functions",
          content:
            "Swift's if/else, switch, for-in, and while loops drive program logic. Functions use func keyword, support default parameters, multiple return values via tuples, and argument labels.",
          codeExample:
            '// Control flow\nlet grade = 85\nif grade >= 90 {\n    print("A")\n} else if grade >= 80 {\n    print("B")\n} else {\n    print("C")\n}\n\n// Switch (exhaustive)\nswitch grade {\ncase 90...100: print("Excellent")\ncase 70..<90:  print("Good")\ndefault:       print("Needs work")\n}\n\n// For-in loop\nfor i in 1...5 { print(i) }\n\n// Function with default param\nfunc greet(name: String, greeting: String = "Hello") -> String {\n    return "\\(greeting), \\(name)!"\n}\nprint(greet(name: "Alice"))',
          video: {
            youtubeId: "comQ1-x2a1Q",
            title: "Control Flow & Functions",
          },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "ios-m1-p2",
      title: "Part 2: Optionals & Closures",
      description:
        "Safe nil handling with optionals, guard, and functional closures.",
      videoUrl: "https://www.youtube.com/watch?v=wYkjBRFNjKE",
      notes:
        "Optionals are Swift's way of representing the absence of a value safely. Closures are self-contained function blocks used heavily in iOS for callbacks and higher-order functions.",
      docs: [
        {
          label: "Swift Optionals Guide",
          url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/#Optionals",
        },
        {
          label: "Swift Closures",
          url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/",
        },
      ],
      partQuiz: [
        {
          question: "What does the '?' after a type mean in Swift?",
          options: ["Force unwrap", "Optional type", "Generic", "Protocol"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'guard let' do when the condition fails?",
          options: [
            "Continues execution",
            "Executes the else block and exits scope",
            "Throws an error",
            "Returns nil",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a trailing closure syntax used for?",
          options: [
            "Declaring classes",
            "Passing a closure as the last argument outside parentheses",
            "Error handling",
            "Protocol conformance",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "ios-m1-p2-prog1",
          title: "Safe username lookup",
          description:
            "Write a Swift function findUser(id: Int, users: [Int: String]) -> String that returns the username or 'Unknown' if not found. Use optional binding.",
          starterCode:
            'func findUser(id: Int, users: [Int: String]) -> String {\n    // Use optional binding to safely unwrap\n    return ""\n}\nlet users = [1: "Alice", 2: "Bob"]\nprint(findUser(id: 1, users: users)) // Alice\nprint(findUser(id: 9, users: users)) // Unknown\n',
          hints: [
            "Use if let name = users[id] to safely unwrap the optional",
            "Return name inside the if-let block",
            "Return 'Unknown' in the else block",
          ],
          language: "swift",
        },
      ],
      subsections: [
        {
          id: "ios-m1-p2s1",
          title: "Optionals & Safe Unwrapping",
          content:
            "An Optional<T> wraps a value that may be nil. Use if let or guard let for safe unwrapping. Avoid force-unwrap (!) unless you are 100% certain. The nil-coalescing operator ?? provides a default value.",
          codeExample:
            '// Optional declaration\nvar username: String? = nil\nusername = "Alice"\n\n// if let — safe unwrap\nif let name = username {\n    print("Hello, \\(name)")\n} else {\n    print("No user")\n}\n\n// guard let — early exit\nfunc greetUser(_ name: String?) {\n    guard let name = name else {\n        print("No name provided")\n        return\n    }\n    print("Hi, \\(name)!")\n}\n\n// Nil-coalescing\nlet display = username ?? "Guest"\nprint(display)  // Alice\n\n// Optional chaining\nlet length = username?.count  // Int? — nil if username is nil\nprint(length ?? 0)',
          video: { youtubeId: "wYkjBRFNjKE", title: "Swift Optionals" },
          flowchart: "if-else",
        },
        {
          id: "ios-m1-p2s2",
          title: "Closures & Higher-Order Functions",
          content:
            "Closures capture values from surrounding context. Use them as callbacks, with map/filter/reduce, and in async APIs. Trailing closure syntax makes code more readable.",
          codeExample:
            '// Basic closure\nlet add: (Int, Int) -> Int = { a, b in a + b }\nprint(add(3, 4)) // 7\n\n// Trailing closure\nfunc operate(a: Int, b: Int, action: (Int, Int) -> Int) -> Int {\n    return action(a, b)\n}\nlet result = operate(a: 10, b: 3) { $0 - $1 }\nprint(result) // 7\n\n// Higher-order functions\nlet scores = [85, 42, 93, 67, 78]\nlet passing = scores.filter { $0 >= 70 }\nlet doubled = scores.map { $0 * 2 }\nlet total = scores.reduce(0) { $0 + $1 }\nprint(passing) // [85, 93, 78]\nprint(total)   // 365\n\n// @escaping closure (for async)\nfunc fetchData(completion: @escaping (String) -> Void) {\n    DispatchQueue.main.asyncAfter(deadline: .now() + 1) {\n        completion("Data loaded")\n    }\n}',
          video: { youtubeId: "wYkjBRFNjKE", title: "Swift Closures" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which Swift keyword is used to declare an immutable value?",
      options: ["var", "let", "final", "const"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What operator provides a default value for an optional?",
      options: ["!!", "??", "||", "->"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does map() do on a Swift array?",
      options: [
        "Filters elements",
        "Transforms each element and returns a new array",
        "Sorts the array",
        "Removes duplicates",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ios-m1-test1",
      title: "Student Grade Calculator",
      description:
        "Write a Swift function calculateGrade(scores: [Int]) -> String that computes the average of scores and returns 'A' (>=90), 'B' (>=80), 'C' (>=70), or 'F' otherwise. Handle empty arrays by returning 'N/A'.",
      starterCode:
        'func calculateGrade(scores: [Int]) -> String {\n    // Handle empty array, compute average, return grade\n    return ""\n}\nprint(calculateGrade(scores: [95, 88, 92])) // A\nprint(calculateGrade(scores: []))           // N/A\n',
      hints: [
        "Check scores.isEmpty first and return 'N/A'",
        "Use reduce(0, +) to sum then divide by scores.count",
        "Use if/else or switch to map the average to a grade letter",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: iOS UI ──────────────────────────────────────────────────────────

const ios_module2 = {
  id: "ios-ui",
  title: "Module 2: iOS UI Development",
  outcome: "Build native iOS interfaces with UIKit and SwiftUI.",
  isLocked: true,
  parts: [
    {
      id: "ios-m2-p1",
      title: "Part 1: UIKit Basics",
      description:
        "View hierarchy, Auto Layout, UIViewController, and common controls.",
      videoUrl: "https://www.youtube.com/watch?v=09TeUXjzpKs",
      notes:
        "UIKit is Apple's foundational UI framework. Understanding the view hierarchy, Auto Layout constraints, and the UIViewController lifecycle is essential for building iOS apps.",
      docs: [
        {
          label: "UIKit Documentation",
          url: "https://developer.apple.com/documentation/uikit",
        },
        {
          label: "Auto Layout Guide",
          url: "https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/",
        },
      ],
      partQuiz: [
        {
          question: "What is the root view of every UIViewController?",
          options: ["UIWindow", "view", "contentView", "rootView"],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which UIViewController lifecycle method is called after the view loads?",
          options: [
            "viewDidLoad()",
            "viewWillAppear()",
            "init()",
            "loadView()",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What does Auto Layout use to position views?",
          options: [
            "Frames only",
            "Constraints",
            "Springs and struts",
            "Flexbox",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "ios-m2-p1-prog1",
          title: "Build a login screen programmatically",
          description:
            "Write a UIViewController subclass 'LoginViewController' that programmatically adds a UILabel ('Welcome Back'), a UITextField (placeholder 'Email'), and a UIButton ('Login') to its view with basic layout.",
          starterCode:
            "import UIKit\n\nclass LoginViewController: UIViewController {\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        // Add label, textField, and button\n    }\n\n}\n",
          hints: [
            "Create views: let titleLabel = UILabel(), let emailField = UITextField(), let loginButton = UIButton(type: .system)",
            "Set properties like text, placeholder, translatesAutoresizingMaskIntoConstraints = false",
            "Add subviews then activate NSLayoutConstraint.activate([...]) with centerX, centerY, width anchors",
          ],
          language: "swift",
        },
      ],
      subsections: [
        {
          id: "ios-m2-p1s1",
          title: "View Hierarchy & UIViewController",
          content:
            "Every UIViewController has a root UIView. Views are arranged in a tree hierarchy — parent views contain child views. viewDidLoad() is the primary setup point; viewWillAppear() runs before every appearance.",
          codeExample:
            'import UIKit\n\nclass ProfileViewController: UIViewController {\n\n    // Create views as properties\n    private let nameLabel = UILabel()\n    private let avatarView = UIImageView()\n    private let followButton = UIButton(type: .system)\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        view.backgroundColor = .systemBackground\n        setupViews()\n        setupConstraints()\n    }\n\n    override func viewWillAppear(_ animated: Bool) {\n        super.viewWillAppear(animated)\n        // Refresh data each time view appears\n    }\n\n    private func setupViews() {\n        nameLabel.text = "Alice"\n        nameLabel.font = .boldSystemFont(ofSize: 20)\n        view.addSubview(nameLabel)\n        view.addSubview(avatarView)\n    }\n}',
          video: { youtubeId: "09TeUXjzpKs", title: "UIViewController Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ios-m2-p1s2",
          title: "Auto Layout & Constraints",
          content:
            "Auto Layout uses constraints to define relationships between views. Set translatesAutoresizingMaskIntoConstraints = false, then activate anchor-based constraints. Constraint priorities allow flexible layouts.",
          codeExample:
            "// Programmatic Auto Layout\nprivate func setupConstraints() {\n    nameLabel.translatesAutoresizingMaskIntoConstraints = false\n    avatarView.translatesAutoresizingMaskIntoConstraints = false\n\n    NSLayoutConstraint.activate([\n        // Avatar: centered horizontally, top margin\n        avatarView.centerXAnchor.constraint(equalTo: view.centerXAnchor),\n        avatarView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 32),\n        avatarView.widthAnchor.constraint(equalToConstant: 80),\n        avatarView.heightAnchor.constraint(equalToConstant: 80),\n\n        // Label: below avatar\n        nameLabel.topAnchor.constraint(equalTo: avatarView.bottomAnchor, constant: 16),\n        nameLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),\n    ])\n}",
          video: { youtubeId: "09TeUXjzpKs", title: "Auto Layout Constraints" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "ios-m2-p2",
      title: "Part 2: SwiftUI",
      description:
        "Declarative UI, state management, and navigation in SwiftUI.",
      videoUrl: "https://www.youtube.com/watch?v=bqu6BquVi2M",
      notes:
        "SwiftUI is Apple's modern declarative UI framework. Views are structs that describe the UI as a function of state — when state changes, SwiftUI re-renders the affected views automatically.",
      docs: [
        {
          label: "SwiftUI Documentation",
          url: "https://developer.apple.com/documentation/swiftui",
        },
        {
          label: "SwiftUI Tutorials",
          url: "https://developer.apple.com/tutorials/swiftui",
        },
      ],
      partQuiz: [
        {
          question:
            "What property wrapper makes a SwiftUI view re-render on value change?",
          options: ["@Binding", "@State", "@Environment", "@Published"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which SwiftUI container stacks views horizontally?",
          options: ["VStack", "ZStack", "HStack", "Group"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does @ObservableObject enable in SwiftUI?",
          options: [
            "Local state only",
            "Sharing mutable state across views",
            "Network calls",
            "Animation",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "ios-m2-p2-prog1",
          title: "Counter App in SwiftUI",
          description:
            "Write a SwiftUI view 'CounterView' with a Text showing a count and two Buttons: '+' (increments) and '-' (decrements, min 0). Use @State for the count.",
          starterCode:
            "import SwiftUI\n\nstruct CounterView: View {\n    // Declare state\n    var body: some View {\n        // Build UI\n    }\n}\n",
          hints: [
            "Declare @State private var count = 0",
            'Use VStack { Text("\\(count)"), HStack { Button("+") { count += 1 }, Button("-") { ... } } }',
            "In the decrement button: if count > 0 { count -= 1 }",
          ],
          language: "swift",
        },
      ],
      subsections: [
        {
          id: "ios-m2-p2s1",
          title: "Views, State & Data Flow",
          content:
            "@State stores local mutable state in a view. @Binding passes a reference to state down to child views. @ObservedObject and @StateObject share state across the view hierarchy using ObservableObject classes.",
          codeExample:
            'import SwiftUI\n\n// Simple counter with @State\nstruct CounterView: View {\n    @State private var count = 0\n\n    var body: some View {\n        VStack(spacing: 20) {\n            Text("Count: \\(count)")\n                .font(.largeTitle)\n            HStack {\n                Button("-") { if count > 0 { count -= 1 } }\n                    .font(.title)\n                Button("+") { count += 1 }\n                    .font(.title)\n            }\n        }\n    }\n}\n\n// Passing state with @Binding\nstruct ToggleRow: View {\n    @Binding var isOn: Bool\n    var body: some View {\n        Toggle("Enable notifications", isOn: $isOn)\n    }\n}',
          video: {
            youtubeId: "bqu6BquVi2M",
            title: "SwiftUI State & Data Flow",
          },
          flowchart: "if-else",
        },
        {
          id: "ios-m2-p2s2",
          title: "Lists, Navigation & Modifiers",
          content:
            "List renders scrollable rows from a data collection. NavigationStack manages a push/pop view hierarchy. View modifiers (font, padding, foregroundColor) customize appearance in a composable chain.",
          codeExample:
            'import SwiftUI\n\nstruct Course: Identifiable {\n    let id = UUID()\n    let title: String\n    let icon: String\n}\n\nstruct CourseListView: View {\n    let courses = [\n        Course(title: "Swift Basics", icon: "swift"),\n        Course(title: "UIKit", icon: "iphone"),\n        Course(title: "SwiftUI", icon: "sparkles"),\n    ]\n\n    var body: some View {\n        NavigationStack {\n            List(courses) { course in\n                NavigationLink(destination: Text(course.title)) {\n                    Label(course.title, systemImage: course.icon)\n                        .font(.headline)\n                        .padding(.vertical, 4)\n                }\n            }\n            .navigationTitle("iOS Roadmap")\n        }\n    }\n}',
          video: {
            youtubeId: "bqu6BquVi2M",
            title: "SwiftUI Lists & Navigation",
          },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "In which UIViewController lifecycle method should you set up subviews?",
      options: ["viewWillAppear", "viewDidLoad", "viewDidAppear", "init"],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What does translatesAutoresizingMaskIntoConstraints = false enable?",
      options: [
        "Springs and struts layout",
        "Programmatic Auto Layout with anchors",
        "Interface Builder mode",
        "Dynamic fonts",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "In SwiftUI, which modifier applies spacing around a view?",
      options: [".margin()", ".padding()", ".spacing()", ".inset()"],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ios-m2-test1",
      title: "SwiftUI Profile Card",
      description:
        "Write a SwiftUI view 'ProfileCard' that displays a circular avatar (use Circle with a background color), a name in bold large title, a subtitle in secondary color, and a 'Follow' button that toggles to 'Following' when tapped.",
      starterCode:
        "import SwiftUI\n\nstruct ProfileCard: View {\n    let name: String\n    let subtitle: String\n    // Add state for follow toggle\n    var body: some View {\n        // Build the card\n    }\n}\n",
      hints: [
        "Use @State private var isFollowing = false for the toggle",
        "Use Circle().fill(.blue).frame(width:80, height:80) for avatar",
        "Button(isFollowing ? 'Following' : 'Follow') { isFollowing.toggle() }",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Data & Publishing ──────────────────────────────────────────────

const ios_module3 = {
  id: "ios-data-publishing",
  title: "Module 3: Data & App Publishing",
  outcome:
    "Persist data with Core Data, consume REST APIs, and publish to the App Store.",
  isLocked: true,
  parts: [
    {
      id: "ios-m3-p1",
      title: "Part 1: Core Data & APIs",
      description:
        "Persist data locally with Core Data and fetch remote data with URLSession.",
      videoUrl: "https://www.youtube.com/watch?v=O7u9nYWjvKk",
      notes:
        "Most iOS apps need persistent storage and network data. Core Data provides a SQLite-backed object graph, while URLSession handles all HTTP communication.",
      docs: [
        {
          label: "Core Data Documentation",
          url: "https://developer.apple.com/documentation/coredata",
        },
        {
          label: "URLSession Documentation",
          url: "https://developer.apple.com/documentation/foundation/urlsession",
        },
      ],
      partQuiz: [
        {
          question:
            "What is the Core Data persistent store coordinator responsible for?",
          options: [
            "UI rendering",
            "Mediating between managed object context and the store",
            "Network calls",
            "Push notifications",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which URLSession method sends a data task for a URL request?",
          options: [
            "dataTask(with:completionHandler:)",
            "request(url:)",
            "fetch(url:)",
            "get(url:)",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question:
            "What Swift protocol is used to decode JSON into model structs?",
          options: ["NSCoding", "Decodable", "Serializable", "Mappable"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "ios-m3-p1-prog1",
          title: "Decode a JSON API response",
          description:
            "Write a Swift struct 'Post' conforming to Decodable with fields: id (Int), title (String), body (String). Write a function fetchPosts(completion: @escaping ([Post]) -> Void) using URLSession to fetch from 'https://jsonplaceholder.typicode.com/posts'.",
          starterCode:
            "import Foundation\n\nstruct Post: Decodable {\n    // Define id, title, body\n}\n\nfunc fetchPosts(completion: @escaping ([Post]) -> Void) {\n    // Use URLSession to fetch and decode\n}\n",
          hints: [
            "struct Post: Decodable { let id: Int; let title: String; let body: String }",
            "Create URL, call URLSession.shared.dataTask(with: url) { data, _, _ in ... }",
            "Use JSONDecoder().decode([Post].self, from: data) inside the completion and call completion(posts)",
          ],
          language: "swift",
        },
      ],
      subsections: [
        {
          id: "ios-m3-p1s1",
          title: "Core Data Fundamentals",
          content:
            "Core Data manages an object graph persisted to SQLite. The stack has three key components: NSManagedObjectContext (working area), NSPersistentStoreCoordinator (bridge), and NSPersistentStore (disk). Use NSFetchRequest to query entities.",
          codeExample:
            'import CoreData\nimport UIKit\n\n// Access the persistent container (AppDelegate or custom PersistenceController)\nlet context = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext\n\n// Create a new managed object (assumes \'Task\' entity defined in .xcdatamodel)\nfunc createTask(title: String) {\n    let task = NSEntityDescription.insertNewObject(forEntityName: "Task", into: context)\n    task.setValue(title, forKey: "title")\n    task.setValue(Date(), forKey: "createdAt")\n    do {\n        try context.save()\n        print("Saved task: \\(title)")\n    } catch {\n        print("Save error: \\(error)")\n    }\n}\n\n// Fetch all tasks\nfunc fetchTasks() -> [NSManagedObject] {\n    let request = NSFetchRequest<NSManagedObject>(entityName: "Task")\n    request.sortDescriptors = [NSSortDescriptor(key: "createdAt", ascending: false)]\n    return (try? context.fetch(request)) ?? []\n}',
          video: { youtubeId: "O7u9nYWjvKk", title: "Core Data Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ios-m3-p1s2",
          title: "Networking with URLSession",
          content:
            "URLSession handles HTTP/HTTPS requests. Use dataTask for GET/POST requests. Combine URLSession with Codable structs for JSON decoding. Always dispatch UI updates to the main thread.",
          codeExample:
            'import Foundation\n\n// Codable model\nstruct User: Codable {\n    let id: Int\n    let name: String\n    let email: String\n}\n\n// GET request with URLSession\nfunc fetchUsers(completion: @escaping (Result<[User], Error>) -> Void) {\n    guard let url = URL(string: "https://jsonplaceholder.typicode.com/users") else { return }\n\n    URLSession.shared.dataTask(with: url) { data, response, error in\n        if let error = error {\n            completion(.failure(error))\n            return\n        }\n        guard let data = data else { return }\n        do {\n            let users = try JSONDecoder().decode([User].self, from: data)\n            DispatchQueue.main.async { completion(.success(users)) }\n        } catch {\n            completion(.failure(error))\n        }\n    }.resume()\n}',
          video: { youtubeId: "O7u9nYWjvKk", title: "URLSession Networking" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ios-m3-p2",
      title: "Part 2: App Store Publishing",
      description:
        "Certificates, provisioning profiles, TestFlight, and App Store submission.",
      videoUrl: "https://www.youtube.com/watch?v=DLvdZtTAJrE",
      notes:
        "Publishing to the App Store requires an Apple Developer account, proper code signing, an archived build, and passing App Store Review Guidelines.",
      docs: [
        {
          label: "App Store Connect Help",
          url: "https://developer.apple.com/app-store-connect/",
        },
        {
          label: "App Review Guidelines",
          url: "https://developer.apple.com/app-store/review/guidelines/",
        },
      ],
      partQuiz: [
        {
          question: "What is a provisioning profile?",
          options: [
            "A build configuration",
            "A file linking your app, certificate, and devices/entitlements",
            "An Xcode scheme",
            "A Git branch",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is TestFlight used for?",
          options: [
            "Unit testing",
            "Beta distribution of iOS apps before App Store release",
            "Continuous integration",
            "UI testing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What Xcode action creates an .ipa for submission?",
          options: ["Build", "Run", "Archive", "Analyze"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "ios-m3-p2-prog1",
          title: "App Store metadata checklist",
          description:
            "Write a Swift struct 'AppStoreMetadata' with fields: appName (String), bundleID (String), version (String), buildNumber (Int), and keywords ([String]). Write a function validate() -> [String] that returns an array of validation errors (e.g., 'Version must follow semver', 'Keywords must not exceed 10').",
          starterCode:
            "struct AppStoreMetadata {\n    let appName: String\n    let bundleID: String\n    let version: String\n    let buildNumber: Int\n    let keywords: [String]\n\n    func validate() -> [String] {\n        var errors: [String] = []\n        // Add validation rules\n        return errors\n    }\n}\n",
          hints: [
            "Check appName.isEmpty and add 'App name is required' if true",
            "Check keywords.count > 10 and add 'Keywords must not exceed 10'",
            "Use a simple semver check: version.split(separator: '.').count == 3",
          ],
          language: "swift",
        },
      ],
      subsections: [
        {
          id: "ios-m3-p2s1",
          title: "Code Signing & Certificates",
          content:
            "Code signing proves your app comes from a trusted developer. You need a Development certificate (for testing), a Distribution certificate (for App Store), and a provisioning profile that ties the app bundle ID to allowed devices/entitlements.",
          codeExample:
            "// Steps to set up code signing in Xcode:\n// 1. Open project settings → Signing & Capabilities\n// 2. Enable 'Automatically manage signing' (recommended)\n// 3. Select your Team from the dropdown\n// 4. Xcode generates provisioning profiles automatically\n\n// Checking bundle identifier in Info.plist:\n// CFBundleIdentifier: com.yourcompany.appname\n\n// For manual signing:\n// - Download .cer from Apple Developer portal\n// - Double-click to add to Keychain\n// - Create provisioning profile on developer.apple.com\n// - Download and double-click .mobileprovision\n\n// Verify signing from terminal:\n// codesign -dv --verbose=4 YourApp.app",
          video: { youtubeId: "DLvdZtTAJrE", title: "Code Signing" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ios-m3-p2s2",
          title: "TestFlight & App Store Submission",
          content:
            "Archive your app in Xcode (Product → Archive), then use Organizer to distribute. Upload to App Store Connect for TestFlight beta testing. After beta approval, submit for App Store Review with metadata, screenshots, and privacy details.",
          codeExample:
            '// App Store submission checklist (pseudocode comments)\n\n// 1. Increment version and build number in project settings\n//    Version: 1.0.0 (user-facing)\n//    Build: 1 (App Store Connect tracking)\n\n// 2. Archive: Product → Archive in Xcode\n//    Ensure scheme is set to Release, not Debug\n\n// 3. Distribute via Organizer:\n//    - App Store Connect → Upload\n//    - Include bitcode: YES (for older devices)\n//    - Strip Swift symbols: YES\n\n// 4. App Store Connect setup:\n//    - App name, subtitle, description, keywords\n//    - Screenshots: 6.7", 6.5", 5.5" required\n//    - Privacy policy URL (mandatory)\n//    - Age rating, pricing\n\n// 5. Submit for Review\n//    - Review time: typically 24-48 hours\n//    - Common rejections: crashes, broken links, guideline violations',
          video: { youtubeId: "DLvdZtTAJrE", title: "App Store Submission" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does NSManagedObjectContext.save() do?",
      options: [
        "Fetches data",
        "Persists in-memory changes to the store",
        "Deletes all objects",
        "Resets the context",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which HTTP method is used to retrieve data from a REST API?",
      options: ["POST", "PUT", "GET", "PATCH"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What must you provide when submitting to the App Store?",
      options: [
        "Source code",
        "Screenshots and privacy policy URL",
        "Unit tests",
        "A signed APK",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ios-m3-test1",
      title: "Fetch & Display GitHub Users",
      description:
        "Write a Swift struct 'GitHubUser' conforming to Decodable with fields: login (String), id (Int), avatar_url (String). Write a function fetchGitHubUser(username: String, completion: @escaping (Result<GitHubUser, Error>) -> Void) that fetches from 'https://api.github.com/users/{username}'.",
      starterCode:
        "import Foundation\n\nstruct GitHubUser: Decodable {\n    // Define login, id, avatar_url\n}\n\nfunc fetchGitHubUser(username: String, completion: @escaping (Result<GitHubUser, Error>) -> Void) {\n    // Build URL, use URLSession, decode response\n}\n",
      hints: [
        'Use URL(string: "https://api.github.com/users/\\(username)") for the URL',
        "Use URLSession.shared.dataTask(with: url) { data, _, error in ... }",
        "Decode with JSONDecoder().decode(GitHubUser.self, from: data) and wrap in .success() or .failure()",
      ],
    },
  ] as CTestProblem[],
};

// ─── Assembled Course ──────────────────────────────────────────────────────────

export const IOS_COURSE = {
  id: "ios-development-course",
  name: "iOS Development",
  description:
    "Build native iOS apps with Swift, UIKit, SwiftUI, Core Data, and ship to the App Store.",
  icon: "🍎",
  color: "from-gray-800 to-gray-600",
  totalModules: 3,
  certificate: {
    title: "iOS Development Certificate",
    description:
      "Awarded for completing all 3 modules of the iOS Development course.",
  },
  modules: [
    ios_module0,
    ios_module1,
    ios_module2,
    ios_module3,
  ] as unknown as CModule[],
};

export const IOS_ROADMAP_ENTRY = {
  id: "ios",
  name: "iOS Development",
  icon: "🍎",
  color: "from-gray-800 to-gray-600",
  description: "Build native iPhone and iPad apps with Swift and SwiftUI.",
  topics: [
    {
      title: "Swift Language Fundamentals",
      videoId: "comQ1-x2a1Q",
      duration: "45 min",
    },
    {
      title: "Optionals, Closures & Protocols",
      videoId: "wYkjBRFNjKE",
      duration: "40 min",
    },
    {
      title: "UIKit & Auto Layout",
      videoId: "09TeUXjzpKs",
      duration: "50 min",
    },
    {
      title: "SwiftUI & State Management",
      videoId: "bqu6BquVi2M",
      duration: "55 min",
    },
    {
      title: "Core Data & Networking",
      videoId: "O7u9nYWjvKk",
      duration: "45 min",
    },
    {
      title: "App Store Publishing",
      videoId: "DLvdZtTAJrE",
      duration: "30 min",
    },
  ],
  courseId: "ios-development-course",
};

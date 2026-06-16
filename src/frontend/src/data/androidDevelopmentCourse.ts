import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const android_module0 = {
  id: "android-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "android-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Android Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO ANDROID DEVELOPMENT!

Hey! I'm so excited to be your companion on this Android Development journey! 🤖 Billions of people use Android every day — and you're about to learn how to build the apps they love. From your first Activity to publishing on Google Play, I'll be right here with you!

COURSE OVERVIEW
Android development is the craft of building mobile applications for the world's most popular mobile platform. You'll learn Kotlin (the modern language of choice for Android), Android Studio (the official IDE), Jetpack components (the building blocks of modern Android), MVVM architecture for clean code, Room for local databases, Retrofit for networking, and the full Google Play publishing process.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write Kotlin/Android code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~40 hours
This is a comprehensive Android course. Dedicate 1–2 hours per day and you'll be publishing your first Android app in about 4–5 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "android-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Android Development course:

1. Java/Kotlin Basics — Kotlin syntax, OOP, null safety, coroutines
2. Android Fundamentals — Activities, Intents, Fragments, layouts, resources
3. UI Design — RecyclerView, ConstraintLayout, Jetpack Compose, themes
4. Data Storage — Room database, SharedPreferences, file I/O
5. APIs & Networking — Retrofit, REST APIs, Coroutines, LiveData/ViewModel
6. Publishing — Signing, ProGuard, Google Play Store submission`,
          codeExample: "",
        },
        {
          id: "android-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Kotlin/Android coding exercises in coding parts

Theory-only parts do NOT have coding questions. Only parts where you write actual Kotlin or Android code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "android-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what Android development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Android Development journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Android Basics ─────────────────────────────────────────────────

const android_module1 = {
  id: "android-basics",
  title: "Module 1: Android Basics",
  outcome:
    "Understand Android architecture, set up Android Studio, and build your first app.",
  isLocked: false,
  parts: [
    {
      id: "android-m1-p1",
      title: "Part 1: Java/Kotlin Intro",
      description: "Core Java and Kotlin syntax for Android development.",
      videoUrl: "https://www.youtube.com/watch?v=F9UC9DY-vIU",
      notes:
        "Kotlin is the preferred language for Android; it is concise, null-safe, and fully interoperable with Java.",
      docs: [
        { label: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html" },
        {
          label: "Java for Android",
          url: "https://developer.android.com/studio/write/java8-support",
        },
      ],
      partQuiz: [
        {
          question: "Which language is recommended for Android development?",
          options: ["Java", "Kotlin", "Swift", "Dart"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you declare a nullable variable in Kotlin?",
          options: [
            "var x: String",
            "var x: String?",
            "var x: String!",
            "nullable x: String",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a data class in Kotlin?",
          options: [
            "A class with only functions",
            "A class that auto-generates equals/hashCode/toString",
            "An abstract class",
            "A singleton object",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does the 'val' keyword mean in Kotlin?",
          options: [
            "Mutable variable",
            "Immutable (read-only) variable",
            "Nullable variable",
            "Local variable",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a lambda in Kotlin?",
          options: [
            "A named class",
            "An anonymous function passed as a value",
            "An interface",
            "A data type",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m1-p1-prog1",
          title: "Write a Kotlin data class",
          description:
            "Write a Kotlin data class 'User' with properties: name (String), age (Int), and email (String?). Then create an instance with name='Alice', age=25, email=null.",
          starterCode: "// Define User data class and create an instance\n",
          hints: [
            "Use 'data class User(val name: String, val age: Int, val email: String?)'",
            'Create instance with: val user = User(name = "Alice", age = 25, email = null)',
            "Data classes auto-generate toString() so println(user) shows all fields",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m1-p1s1",
          title: "Kotlin Syntax Basics",
          content:
            "Kotlin uses val (immutable) and var (mutable) for variables. Type inference means the compiler deduces types. String templates use ${variable} for interpolation.",
          codeExample:
            '// Kotlin basics\nval name: String = "Alice"    // immutable\nvar age = 25                   // type inferred as Int\nval greeting = "Hello, $name! You are $age years old."\n\n// Nullable types\nvar email: String? = null\nval length = email?.length ?: 0  // safe call + Elvis operator\n\n// Functions\nfun add(a: Int, b: Int): Int = a + b\n\n// When expression (switch equivalent)\nval result = when (age) {\n    in 0..17 -> "Minor"\n    in 18..64 -> "Adult"\n    else -> "Senior"\n}',
          video: { youtubeId: "F9UC9DY-vIU", title: "Kotlin Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m1-p1s2",
          title: "Classes & Objects",
          content:
            "Kotlin classes are final by default (use 'open' to allow inheritance). Data classes auto-generate equals, hashCode, copy, and toString. Object declarations create singletons.",
          codeExample:
            '// Classes in Kotlin\ndata class User(val name: String, val age: Int)\n\nopen class Animal(val name: String) {\n    open fun sound() = "..."\n}\n\nclass Dog(name: String) : Animal(name) {\n    override fun sound() = "Woof!"\n}\n\n// Singleton\nobject DatabaseConfig {\n    val url = "jdbc:sqlite:app.db"\n    fun connect() { println("Connecting to $url") }\n}\n\n// Usage\nval user = User("Alice", 25)\nval copy = user.copy(age = 26)\nDatabaseConfig.connect()',
          video: { youtubeId: "F9UC9DY-vIU", title: "Kotlin Classes" },
          flowchart: "if-else",
        },
        {
          id: "android-m1-p1s3",
          title: "Collections & Lambdas",
          content:
            "Kotlin collections (List, Map, Set) have functional operators: map, filter, forEach, reduce. Lambdas are concise anonymous functions used with higher-order functions.",
          codeExample:
            '// Collections and lambdas\nval numbers = listOf(1, 2, 3, 4, 5)\nval doubled = numbers.map { it * 2 }\nval evens = numbers.filter { it % 2 == 0 }\nval sum = numbers.reduce { acc, n -> acc + n }\n\n// MutableList\nval items = mutableListOf("a", "b", "c")\nitems.add("d")\n\n// Map\nval scores = mapOf("Alice" to 95, "Bob" to 87)\nscores.forEach { (name, score) -> println("$name: $score") }\n\n// Higher-order function\nfun operate(x: Int, op: (Int) -> Int): Int = op(x)\nval result = operate(5) { it * it }  // 25',
          video: { youtubeId: "F9UC9DY-vIU", title: "Collections & Lambdas" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m1-p2",
      title: "Part 2: Android Studio Setup",
      description:
        "Install Android Studio, configure SDK, and explore the IDE.",
      videoUrl: "https://www.youtube.com/watch?v=EknEIzswvC0",
      notes:
        "Android Studio is the official IDE built on IntelliJ IDEA; it provides emulator, layout editor, and profiling tools for Android development.",
      docs: [
        {
          label: "Android Studio Install Guide",
          url: "https://developer.android.com/studio/install",
        },
        {
          label: "Android SDK Docs",
          url: "https://developer.android.com/studio/releases/platforms",
        },
      ],
      partQuiz: [
        {
          question: "What is the Android SDK?",
          options: [
            "A testing tool",
            "A set of libraries and tools to build Android apps",
            "An IDE plugin",
            "A version control system",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What file defines app dependencies in Android?",
          options: [
            "AndroidManifest.xml",
            "build.gradle",
            "settings.xml",
            "app.config",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the Android Virtual Device (AVD)?",
          options: [
            "A physical phone",
            "An emulator for testing apps",
            "A debugging tool",
            "A layout editor",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is Gradle in Android development?",
          options: [
            "A UI framework",
            "A build automation system",
            "A version control tool",
            "A testing library",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Where are app resources (layouts, strings) stored?",
          options: [
            "src/main/java",
            "res/ directory",
            "build/ directory",
            "assets/main",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m1-p2-prog1",
          title: "Add a dependency in build.gradle",
          description:
            "Write the build.gradle (app-level) dependency block to add Retrofit 2.9.0 and Gson converter 2.9.0 to an Android project.",
          starterCode:
            "// app/build.gradle\ndependencies {\n    // Add Retrofit and Gson converter dependencies here\n}\n",
          hints: [
            "Use implementation 'com.squareup.retrofit2:retrofit:2.9.0'",
            "Add implementation 'com.squareup.retrofit2:converter-gson:2.9.0'",
            "Dependencies go inside the dependencies { } block without quotes around the block",
          ],
          language: "groovy",
        },
      ],
      subsections: [
        {
          id: "android-m1-p2s1",
          title: "Installing Android Studio",
          content:
            "Download Android Studio from developer.android.com/studio. During setup, install the Android SDK, SDK Tools, and a default emulator image. Minimum: 8GB RAM, 4GB disk.",
          codeExample:
            "// Android Studio project structure\nMyApp/\n├── app/\n│   ├── src/\n│   │   ├── main/\n│   │   │   ├── java/com/example/myapp/\n│   │   │   │   └── MainActivity.kt\n│   │   │   ├── res/\n│   │   │   │   ├── layout/activity_main.xml\n│   │   │   │   ├── values/strings.xml\n│   │   │   │   └── drawable/\n│   │   │   └── AndroidManifest.xml\n│   └── build.gradle    // app-level\n├── build.gradle        // project-level\n└── settings.gradle",
          video: { youtubeId: "EknEIzswvC0", title: "Android Studio Install" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m1-p2s2",
          title: "Build System & Gradle",
          content:
            "Gradle manages dependencies, build variants, and compilation. The project-level build.gradle sets global configs; the app-level build.gradle sets SDK versions and dependencies.",
          codeExample:
            "// app/build.gradle\nplugins {\n    id 'com.android.application'\n    id 'kotlin-android'\n}\nandroid {\n    compileSdk 34\n    defaultConfig {\n        applicationId \"com.example.myapp\"\n        minSdk 24\n        targetSdk 34\n        versionCode 1\n        versionName \"1.0\"\n    }\n    buildTypes {\n        release {\n            minifyEnabled true\n            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt')\n        }\n    }\n}\ndependencies {\n    implementation 'androidx.core:core-ktx:1.12.0'\n    implementation 'androidx.appcompat:appcompat:1.6.1'\n}",
          video: { youtubeId: "EknEIzswvC0", title: "Gradle Build System" },
          flowchart: "if-else",
        },
        {
          id: "android-m1-p2s3",
          title: "Emulator & Device Setup",
          content:
            "AVD Manager creates virtual devices with different API levels and screen sizes. For real devices, enable Developer Options and USB Debugging. Use adb for direct device interaction.",
          codeExample:
            "# ADB (Android Debug Bridge) commands\nadb devices              # list connected devices\nadb install myapp.apk    # install APK\nadb logcat               # view device logs\nadb shell                # open device shell\nadb push file.txt /sdcard/  # copy file to device\nadb pull /sdcard/file.txt . # copy file from device\n\n# Filter logcat by tag\nadb logcat -s MyTag:D\n\n# Clear app data\nadb shell pm clear com.example.myapp\n\n# Start an activity\nadb shell am start -n com.example.myapp/.MainActivity",
          video: { youtubeId: "EknEIzswvC0", title: "Emulator & ADB" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m1-p3",
      title: "Part 3: First Android App",
      description:
        "Activity lifecycle, intents, and AndroidManifest fundamentals.",
      videoUrl: "https://www.youtube.com/watch?v=p0wFtEKcKRs",
      notes:
        "Android apps are built around Activities; understanding the lifecycle (onCreate, onStart, onResume, onPause, onStop, onDestroy) is fundamental to building stable apps.",
      docs: [
        {
          label: "Activity Lifecycle",
          url: "https://developer.android.com/guide/components/activities/activity-lifecycle",
        },
        {
          label: "AndroidManifest.xml",
          url: "https://developer.android.com/guide/topics/manifest/manifest-intro",
        },
      ],
      partQuiz: [
        {
          question: "What method is called first when an Activity starts?",
          options: ["onStart()", "onResume()", "onCreate()", "onInit()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is an Intent in Android?",
          options: [
            "A UI component",
            "A message object used to start components",
            "A database query",
            "A permission request",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What file declares app components like Activities?",
          options: [
            "build.gradle",
            "strings.xml",
            "AndroidManifest.xml",
            "MainActivity.kt",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "Which lifecycle method is called when the Activity is visible but not focused?",
          options: ["onCreate()", "onStart()", "onPause()", "onStop()"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you start another Activity?",
          options: [
            "open Activity()",
            "startActivity(Intent(...))",
            "launch(Activity())",
            "navigate(Activity())",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m1-p3-prog1",
          title: "Create an Activity with intent",
          description:
            "Write a MainActivity that has a button. When clicked, it starts a SecondActivity passing a String extra 'message' with value 'Hello from Main'. Show the received message in SecondActivity using a TextView.",
          starterCode:
            "// MainActivity.kt\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        // Add button click listener to start SecondActivity\n    }\n}\n// SecondActivity.kt\nclass SecondActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_second)\n        // Retrieve and display the message\n    }\n}\n",
          hints: [
            'Use Intent(this, SecondActivity::class.java) then putExtra("message", "Hello from Main")',
            "Call startActivity(intent) to launch SecondActivity",
            'In SecondActivity use intent.getStringExtra("message") to retrieve the value',
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m1-p3s1",
          title: "Activity Lifecycle",
          content:
            "Lifecycle: onCreate (initialize) → onStart (visible) → onResume (interactive) → onPause (partially hidden) → onStop (hidden) → onDestroy (finished). Override these to manage resources properly.",
          codeExample:
            "class MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        // Initialize views and data\n    }\n    override fun onStart() {\n        super.onStart()\n        // Activity becomes visible\n    }\n    override fun onResume() {\n        super.onResume()\n        // Activity is in foreground, start animations/sensors\n    }\n    override fun onPause() {\n        super.onPause()\n        // Save draft data, pause media\n    }\n    override fun onStop() {\n        super.onStop()\n        // Release heavy resources\n    }\n    override fun onDestroy() {\n        super.onDestroy()\n        // Final cleanup\n    }\n}",
          video: { youtubeId: "p0wFtEKcKRs", title: "Activity Lifecycle" },
          flowchart: "if-else",
        },
        {
          id: "android-m1-p3s2",
          title: "Intents & Navigation",
          content:
            "Explicit intents target a specific component. Implicit intents declare an action (VIEW, SEND) and the system finds a matching app. Pass data via putExtra/getExtra.",
          codeExample:
            '// Explicit Intent\nval intent = Intent(this, DetailActivity::class.java)\nintent.putExtra("userId", 42)\nintent.putExtra("userName", "Alice")\nstartActivity(intent)\n\n// Retrieve in DetailActivity\nval userId = intent.getIntExtra("userId", -1)\nval userName = intent.getStringExtra("userName")\n\n// Implicit Intent: open URL\nval webIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://example.com"))\nstartActivity(webIntent)\n\n// Share text\nval shareIntent = Intent(Intent.ACTION_SEND).apply {\n    type = "text/plain"\n    putExtra(Intent.EXTRA_TEXT, "Check this out!")\n}\nstartActivity(Intent.createChooser(shareIntent, "Share via"))',
          video: { youtubeId: "p0wFtEKcKRs", title: "Intents" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m1-p3s3",
          title: "AndroidManifest & Permissions",
          content:
            "AndroidManifest.xml declares all components (activities, services, receivers) and required permissions. Runtime permissions (API 23+) must be requested from the user at runtime.",
          codeExample:
            '<!-- AndroidManifest.xml -->\n<manifest xmlns:android="http://schemas.android.com/apk/res/android">\n    <uses-permission android:name="android.permission.INTERNET"/>\n    <uses-permission android:name="android.permission.CAMERA"/>\n    <application\n        android:label="@string/app_name"\n        android:icon="@mipmap/ic_launcher">\n        <activity android:name=".MainActivity"\n            android:exported="true">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN"/>\n                <category android:name="android.intent.category.LAUNCHER"/>\n            </intent-filter>\n        </activity>\n        <activity android:name=".DetailActivity"/>\n    </application>\n</manifest>',
          video: { youtubeId: "p0wFtEKcKRs", title: "Manifest & Permissions" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What keyword makes a variable immutable in Kotlin?",
      options: ["var", "val", "const", "final"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which lifecycle method should you initialize views in?",
      options: ["onStart()", "onResume()", "onCreate()", "onInit()"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the purpose of AndroidManifest.xml?",
      options: [
        "Store app data",
        "Define UI layouts",
        "Declare components and permissions",
        "Manage Gradle dependencies",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does 'adb logcat' do?",
      options: [
        "Install APK",
        "Open device shell",
        "View real-time device logs",
        "Clear app data",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "How do you pass data between Activities?",
      options: [
        "Global variables",
        "SharedPreferences only",
        "Intent extras (putExtra/getExtra)",
        "Database only",
      ],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "android-m1-test1",
      title: "Build a Two-Screen App",
      description:
        "Write Kotlin code for a MainActivity with an EditText and a Button. When clicked, pass the text to SecondActivity and display it in a TextView. Handle the case where the EditText is empty by showing a Toast.",
      starterCode:
        "// MainActivity.kt\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        // TODO: Find views, set click listener, validate and navigate\n    }\n}\n",
      hints: [
        "Use findViewById<EditText>(R.id.editText) and findViewById<Button>(R.id.button)",
        "Check if editText.text.toString().isBlank() and show Toast.makeText(...).show()",
        "Create Intent, putExtra the text, then call startActivity(intent)",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: UI & Layouts ───────────────────────────────────────────────────

const android_module2 = {
  id: "android-ui-layouts",
  title: "Module 2: UI & Layouts",
  outcome:
    "Build responsive Android UIs using XML layouts, RecyclerView, and Material Design.",
  isLocked: true,
  parts: [
    {
      id: "android-m2-p1",
      title: "Part 1: XML Layouts",
      description: "ConstraintLayout, LinearLayout, and View binding.",
      videoUrl: "https://www.youtube.com/watch?v=AJSKBnMnKiU",
      notes:
        "XML layouts define the visual structure of Android screens; ConstraintLayout is the recommended layout for flat, performant view hierarchies.",
      docs: [
        {
          label: "ConstraintLayout Guide",
          url: "https://developer.android.com/training/constraint-layout",
        },
        {
          label: "View Binding",
          url: "https://developer.android.com/topic/libraries/view-binding",
        },
      ],
      partQuiz: [
        {
          question:
            "Which layout is recommended for complex, flat hierarchies?",
          options: [
            "LinearLayout",
            "RelativeLayout",
            "ConstraintLayout",
            "FrameLayout",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does View Binding do?",
          options: [
            "Binds data to views",
            "Generates type-safe references to layout views",
            "Inflates layouts automatically",
            "Connects ViewModel to View",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What attribute sets a view's width to fill its parent?",
          options: ["wrap_content", "match_parent", "fill_parent", "0dp"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which XML attribute adds spacing inside a view's border?",
          options: ["margin", "padding", "spacing", "inset"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a FrameLayout used for?",
          options: [
            "Horizontal layouts",
            "Stacking views on top of each other",
            "Grid layouts",
            "Scrollable content",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m2-p1-prog1",
          title: "Enable and use View Binding",
          description:
            "Enable View Binding in build.gradle and rewrite a MainActivity to use binding instead of findViewById. The layout has a TextView (id: tvGreeting) and a Button (id: btnClick).",
          starterCode:
            "// app/build.gradle - enable viewBinding\n// android { buildFeatures { viewBinding true } }\n\n// MainActivity.kt\nclass MainActivity : AppCompatActivity() {\n    // Declare binding variable\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        // Inflate binding and set content view\n        // Set button click listener using binding\n    }\n}\n",
          hints: [
            "Add buildFeatures { viewBinding = true } inside the android block in build.gradle",
            "Declare private lateinit var binding: ActivityMainBinding",
            "Use binding = ActivityMainBinding.inflate(layoutInflater) then setContentView(binding.root)",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m2-p1s1",
          title: "ConstraintLayout",
          content:
            "ConstraintLayout positions views relative to each other or the parent using constraints. Use 0dp (MATCH_CONSTRAINT) with start/end constraints for full-width views. Chains link multiple views.",
          codeExample:
            '<!-- ConstraintLayout example -->\n<androidx.constraintlayout.widget.ConstraintLayout\n    xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent">\n\n    <TextView\n        android:id="@+id/tvTitle"\n        android:layout_width="0dp"\n        android:layout_height="wrap_content"\n        android:text="Hello Android"\n        android:textSize="24sp"\n        app:layout_constraintTop_toTopOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        android:layout_margin="16dp"/>\n\n    <Button\n        android:id="@+id/btnSubmit"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Submit"\n        app:layout_constraintTop_toBottomOf="@id/tvTitle"\n        app:layout_constraintEnd_toEndOf="parent"\n        android:layout_margin="16dp"/>\n</androidx.constraintlayout.widget.ConstraintLayout>',
          video: { youtubeId: "AJSKBnMnKiU", title: "ConstraintLayout" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m2-p1s2",
          title: "LinearLayout & ScrollView",
          content:
            "LinearLayout arranges children horizontally or vertically. Use weight to distribute space proportionally. ScrollView wraps a single child to enable scrolling.",
          codeExample:
            '<!-- Vertical LinearLayout in a ScrollView -->\n<ScrollView\n    android:layout_width="match_parent"\n    android:layout_height="match_parent">\n\n    <LinearLayout\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:orientation="vertical"\n        android:padding="16dp">\n\n        <EditText\n            android:layout_width="match_parent"\n            android:layout_height="wrap_content"\n            android:hint="Name"\n            android:layout_marginBottom="8dp"/>\n\n        <EditText\n            android:layout_width="match_parent"\n            android:layout_height="wrap_content"\n            android:hint="Email"\n            android:inputType="textEmailAddress"/>\n\n        <Button\n            android:layout_width="match_parent"\n            android:layout_height="wrap_content"\n            android:layout_weight="1"\n            android:text="Submit"/>\n    </LinearLayout>\n</ScrollView>',
          video: { youtubeId: "AJSKBnMnKiU", title: "LinearLayout" },
          flowchart: "if-else",
        },
        {
          id: "android-m2-p1s3",
          title: "View Binding",
          content:
            "View Binding generates a binding class for each layout file with type-safe references to all views with IDs. Replaces error-prone findViewById calls.",
          codeExample:
            '// Enable in build.gradle\n// android { buildFeatures { viewBinding = true } }\n\nclass MainActivity : AppCompatActivity() {\n    private lateinit var binding: ActivityMainBinding\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        binding = ActivityMainBinding.inflate(layoutInflater)\n        setContentView(binding.root)\n\n        // Type-safe view access\n        binding.tvGreeting.text = "Hello, World!"\n        binding.btnSubmit.setOnClickListener {\n            val input = binding.etName.text.toString()\n            binding.tvGreeting.text = "Hello, $input!"\n        }\n    }\n}',
          video: { youtubeId: "AJSKBnMnKiU", title: "View Binding" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m2-p2",
      title: "Part 2: RecyclerView",
      description:
        "Adapter pattern, ViewHolder, and DiffUtil for efficient lists.",
      videoUrl: "https://www.youtube.com/watch?v=0virzNRo4n0",
      notes:
        "RecyclerView efficiently displays large lists by recycling off-screen views; the Adapter + ViewHolder pattern separates data from UI.",
      docs: [
        {
          label: "RecyclerView Guide",
          url: "https://developer.android.com/guide/topics/ui/layout/recyclerview",
        },
        {
          label: "DiffUtil Docs",
          url: "https://developer.android.com/reference/androidx/recyclerview/widget/DiffUtil",
        },
      ],
      partQuiz: [
        {
          question: "What is the role of a RecyclerView Adapter?",
          options: [
            "Handle click events",
            "Bind data to ViewHolder views",
            "Manage layout managers",
            "Cache views automatically",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a ViewHolder do?",
          options: [
            "Holds layout XML",
            "Caches view references to avoid repeated findViewByIds",
            "Manages scroll state",
            "Binds the adapter to the RecyclerView",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is DiffUtil used for?",
          options: [
            "Diff two layouts",
            "Calculate list differences to animate updates efficiently",
            "Compare two adapters",
            "Measure view sizes",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which LayoutManager stacks items in a list?",
          options: [
            "GridLayoutManager",
            "LinearLayoutManager",
            "StaggeredGridLayoutManager",
            "FlexboxLayoutManager",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What method is called to create new ViewHolder instances?",
          options: [
            "onBindViewHolder",
            "onCreateViewHolder",
            "getItemCount",
            "onAttachRecyclerView",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m2-p2-prog1",
          title: "Create a RecyclerView Adapter",
          description:
            "Write a Kotlin RecyclerView.Adapter for a list of 'Contact' data classes (name: String, phone: String). Each item shows name in a TextView (tvName) and phone in another (tvPhone).",
          starterCode:
            "data class Contact(val name: String, val phone: String)\n\nclass ContactAdapter(private val contacts: List<Contact>) :\n    RecyclerView.Adapter<ContactAdapter.ContactViewHolder>() {\n\n    // Define ViewHolder class\n    // Implement onCreateViewHolder\n    // Implement onBindViewHolder\n    // Implement getItemCount\n}\n",
          hints: [
            "Inner class ContactViewHolder(view: View) : RecyclerView.ViewHolder(view) with val tvName and tvPhone",
            "onCreateViewHolder: inflate item layout and return ContactViewHolder(view)",
            "onBindViewHolder: val contact = contacts[position]; holder.tvName.text = contact.name",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m2-p2s1",
          title: "Adapter & ViewHolder Pattern",
          content:
            "Adapter connects data to RecyclerView. ViewHolder holds references to item views to avoid slow repeated lookups. onCreateViewHolder inflates item layout; onBindViewHolder populates data.",
          codeExample:
            "data class Movie(val title: String, val year: Int)\n\nclass MovieAdapter(private val movies: List<Movie>) :\n    RecyclerView.Adapter<MovieAdapter.MovieViewHolder>() {\n\n    class MovieViewHolder(view: View) : RecyclerView.ViewHolder(view) {\n        val tvTitle: TextView = view.findViewById(R.id.tvTitle)\n        val tvYear: TextView = view.findViewById(R.id.tvYear)\n    }\n\n    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MovieViewHolder {\n        val view = LayoutInflater.from(parent.context)\n            .inflate(R.layout.item_movie, parent, false)\n        return MovieViewHolder(view)\n    }\n\n    override fun onBindViewHolder(holder: MovieViewHolder, position: Int) {\n        val movie = movies[position]\n        holder.tvTitle.text = movie.title\n        holder.tvYear.text = movie.year.toString()\n    }\n\n    override fun getItemCount() = movies.size\n}",
          video: { youtubeId: "0virzNRo4n0", title: "RecyclerView Adapter" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m2-p2s2",
          title: "Click Listeners & Interactions",
          content:
            "Pass a lambda callback to the adapter for item clicks. Use setOnClickListener inside onBindViewHolder. For long-press, use setOnLongClickListener.",
          codeExample:
            '// Adapter with click callback\nclass MovieAdapter(\n    private val movies: List<Movie>,\n    private val onItemClick: (Movie) -> Unit\n) : RecyclerView.Adapter<MovieAdapter.MovieViewHolder>() {\n\n    override fun onBindViewHolder(holder: MovieViewHolder, position: Int) {\n        val movie = movies[position]\n        holder.tvTitle.text = movie.title\n        holder.itemView.setOnClickListener {\n            onItemClick(movie)\n        }\n    }\n    // ...\n}\n\n// In Activity\nval adapter = MovieAdapter(movieList) { movie ->\n    Toast.makeText(this, "Clicked: ${movie.title}", Toast.LENGTH_SHORT).show()\n    startActivity(Intent(this, DetailActivity::class.java)\n        .putExtra("title", movie.title))\n}\nrecyclerView.adapter = adapter',
          video: { youtubeId: "0virzNRo4n0", title: "RecyclerView Clicks" },
          flowchart: "if-else",
        },
        {
          id: "android-m2-p2s3",
          title: "DiffUtil & ListAdapter",
          content:
            "DiffUtil calculates minimal changes between two lists for efficient updates. ListAdapter wraps DiffUtil automatically. Avoid calling notifyDataSetChanged() on large lists.",
          codeExample:
            "// ListAdapter with DiffUtil\nclass MovieListAdapter : ListAdapter<Movie, MovieListAdapter.MovieViewHolder>(\n    object : DiffUtil.ItemCallback<Movie>() {\n        override fun areItemsTheSame(old: Movie, new: Movie) = old.id == new.id\n        override fun areContentsTheSame(old: Movie, new: Movie) = old == new\n    }\n) {\n    class MovieViewHolder(private val binding: ItemMovieBinding) :\n        RecyclerView.ViewHolder(binding.root) {\n        fun bind(movie: Movie) {\n            binding.tvTitle.text = movie.title\n        }\n    }\n    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =\n        MovieViewHolder(ItemMovieBinding.inflate(LayoutInflater.from(parent.context), parent, false))\n\n    override fun onBindViewHolder(holder: MovieViewHolder, position: Int) =\n        holder.bind(getItem(position))\n}\n// Update list: adapter.submitList(newList)",
          video: { youtubeId: "0virzNRo4n0", title: "DiffUtil & ListAdapter" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m2-p3",
      title: "Part 3: Material Design Components",
      description:
        "Toolbar, BottomNavigationView, Snackbar, and Material theming.",
      videoUrl: "https://www.youtube.com/watch?v=wr2qvB0HWRk",
      notes:
        "Material Design 3 provides a comprehensive design system with consistent components; using the Material library ensures platform-native look and feel.",
      docs: [
        { label: "Material Design 3", url: "https://m3.material.io/" },
        {
          label: "Material Components Android",
          url: "https://github.com/material-components/material-components-android",
        },
      ],
      partQuiz: [
        {
          question: "Which component replaces the legacy ActionBar?",
          options: ["AppBar", "Toolbar", "NavigationBar", "ActionToolbar"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Snackbar used for?",
          options: [
            "Persistent alerts",
            "Brief messages with an optional action",
            "Dialog replacement",
            "Navigation drawer",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which Material component shows app navigation at the bottom?",
          options: [
            "BottomSheet",
            "TabLayout",
            "BottomNavigationView",
            "NavigationDrawer",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does FAB stand for?",
          options: [
            "Fixed Action Bar",
            "Floating Action Button",
            "Fast App Builder",
            "Fragment Action Block",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you apply a Material theme to your app?",
          options: [
            "Extend Theme.AppCompat only",
            "Extend Theme.MaterialComponents or Theme.Material3",
            "Add material=true to manifest",
            "Import material.xml",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m2-p3-prog1",
          title: "Show a Snackbar with action",
          description:
            "Write Kotlin code to show a Snackbar on a FloatingActionButton click. The Snackbar should say 'Item deleted' with an 'UNDO' action that shows a Toast saying 'Undone!'.",
          starterCode:
            "// In Activity or Fragment\n// binding.fab is your FloatingActionButton\n// binding.root is the CoordinatorLayout\nbinding.fab.setOnClickListener {\n    // Show Snackbar with undo action\n}\n",
          hints: [
            'Use Snackbar.make(binding.root, "Item deleted", Snackbar.LENGTH_LONG)',
            'Chain .setAction("UNDO") { Toast.makeText(this, "Undone!", Toast.LENGTH_SHORT).show() }',
            "Call .show() at the end of the Snackbar builder chain",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m2-p3s1",
          title: "Toolbar & AppBarLayout",
          content:
            "Toolbar replaces ActionBar for flexible customization. AppBarLayout enables scroll-aware behavior. Use setSupportActionBar(toolbar) to connect Toolbar as the ActionBar.",
          codeExample:
            '<!-- AppBar with Toolbar -->\n<com.google.android.material.appbar.AppBarLayout\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content">\n    <com.google.android.material.appbar.MaterialToolbar\n        android:id="@+id/toolbar"\n        android:layout_width="match_parent"\n        android:layout_height="?attr/actionBarSize"\n        android:background="?attr/colorPrimary"\n        app:title="My App"\n        app:titleTextColor="@color/white"/>\n</com.google.android.material.appbar.AppBarLayout>\n\n// In Activity\nsetSupportActionBar(binding.toolbar)\nsupportActionBar?.setDisplayHomeAsUpEnabled(true)\nbinding.toolbar.setNavigationOnClickListener { onBackPressed() }',
          video: { youtubeId: "wr2qvB0HWRk", title: "Toolbar & AppBar" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m2-p3s2",
          title: "BottomNavigationView & Tabs",
          content:
            "BottomNavigationView provides navigation between top-level destinations. Use with NavController for automatic back stack management. TabLayout works with ViewPager2 for swiped tabs.",
          codeExample:
            '// BottomNavigationView setup\nbinding.bottomNav.setOnItemSelectedListener { item ->\n    when (item.itemId) {\n        R.id.navHome -> showFragment(HomeFragment())\n        R.id.navSearch -> showFragment(SearchFragment())\n        R.id.navProfile -> showFragment(ProfileFragment())\n    }\n    true\n}\n\n// With Navigation Component\nval navController = findNavController(R.id.navHostFragment)\nbinding.bottomNav.setupWithNavController(navController)\n\n// TabLayout + ViewPager2\nval adapter = ViewPagerAdapter(this)\nbinding.viewPager.adapter = adapter\nTabLayoutMediator(binding.tabLayout, binding.viewPager) { tab, pos ->\n    tab.text = when(pos) { 0 -> "Home"; 1 -> "News"; else -> "Profile" }\n}.attach()',
          video: { youtubeId: "wr2qvB0HWRk", title: "BottomNav & Tabs" },
          flowchart: "if-else",
        },
        {
          id: "android-m2-p3s3",
          title: "Material Theming & Components",
          content:
            "Material 3 theming uses colorScheme tokens (primary, secondary, surface) defined in themes.xml. MaterialCardView, MaterialButton, TextInputLayout provide consistent, accessible components.",
          codeExample:
            '<!-- res/values/themes.xml -->\n<style name="Theme.MyApp" parent="Theme.Material3.DayNight">\n    <item name="colorPrimary">@color/purple_500</item>\n    <item name="colorOnPrimary">@color/white</item>\n    <item name="colorSecondary">@color/teal_200</item>\n    <item name="colorSurface">@color/white</item>\n</style>\n\n<!-- Material Card -->\n<com.google.android.material.card.MaterialCardView\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    app:cardCornerRadius="12dp"\n    app:cardElevation="4dp"\n    android:layout_margin="8dp">\n    <!-- Card content -->\n</com.google.android.material.card.MaterialCardView>\n\n// Snackbar\nSnackbar.make(view, "Changes saved", Snackbar.LENGTH_LONG)\n    .setAction("UNDO") { /* undo */ }\n    .show()',
          video: { youtubeId: "wr2qvB0HWRk", title: "Material Theming" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "Which layout is best for flat, complex UIs with no nested views?",
      options: [
        "LinearLayout",
        "RelativeLayout",
        "ConstraintLayout",
        "TableLayout",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does onCreateViewHolder() return?",
      options: ["A View", "A ViewHolder", "An Adapter", "A Layout"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What benefit does View Binding have over findViewById?",
      options: [
        "Faster rendering",
        "Null-safe, type-safe view references",
        "Automatic layout inflation",
        "Better memory usage",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which Material component is best for brief, dismissable messages?",
      options: ["Toast", "Dialog", "Snackbar", "AlertDialog"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does DiffUtil.ItemCallback.areItemsTheSame() check?",
      options: [
        "If item contents are equal",
        "If two items represent the same object (by ID)",
        "If item positions are same",
        "If items have the same view type",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "android-m2-test1",
      title: "Build a Movie List Screen",
      description:
        "Create a RecyclerView that shows a list of Movie objects (title, year, rating). Use ListAdapter with DiffUtil, View Binding for the item layout, and show a Snackbar with the movie title when an item is clicked.",
      starterCode:
        "data class Movie(val id: Int, val title: String, val year: Int, val rating: Float)\n\n// TODO: Create MovieAdapter extending ListAdapter\n// TODO: Implement ViewHolder with View Binding\n// TODO: Set up RecyclerView in Activity with LinearLayoutManager\n// TODO: Show Snackbar on item click\n",
      hints: [
        "Extend ListAdapter<Movie, MovieAdapter.MovieViewHolder>(MovieDiffCallback())",
        "In ViewHolder, use ItemMovieBinding.bind(itemView) if binding is already inflated",
        "Pass onItemClick lambda to adapter; call Snackbar.make(root, movie.title, LENGTH_SHORT).show()",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Data & Storage ─────────────────────────────────────────────────

const android_module3 = {
  id: "android-data-storage",
  title: "Module 3: Data & Storage",
  outcome:
    "Store app data with SharedPreferences, SQLite/Room, and fetch remote data with Retrofit.",
  isLocked: true,
  parts: [
    {
      id: "android-m3-p1",
      title: "Part 1: SharedPreferences",
      description: "Key-value storage for settings and small data.",
      videoUrl: "https://www.youtube.com/watch?v=pE5ZGSj8E2w",
      notes:
        "SharedPreferences stores primitive key-value pairs persistently; use DataStore (Preferences DataStore) for coroutine-based, type-safe storage.",
      docs: [
        {
          label: "SharedPreferences Guide",
          url: "https://developer.android.com/training/data-storage/shared-preferences",
        },
        {
          label: "DataStore Guide",
          url: "https://developer.android.com/topic/libraries/architecture/datastore",
        },
      ],
      partQuiz: [
        {
          question: "What type of data does SharedPreferences store?",
          options: [
            "Files and images",
            "Primitive key-value pairs",
            "SQL tables",
            "JSON objects only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What do you call to save data in SharedPreferences?",
          options: [
            "prefs.save()",
            "editor.commit() or editor.apply()",
            "prefs.write()",
            "prefs.flush()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the difference between commit() and apply()?",
          options: [
            "No difference",
            "commit() is synchronous; apply() is asynchronous",
            "apply() requires API 28+",
            "commit() returns void",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which modern alternative to SharedPreferences is recommended?",
          options: [
            "SQLite",
            "Room",
            "Preferences DataStore",
            "ContentProvider",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you get a SharedPreferences instance?",
          options: [
            "new SharedPreferences()",
            "getSharedPreferences(name, mode)",
            "SharedPreferences.getInstance()",
            "context.prefs()",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m3-p1-prog1",
          title: "Save and load user settings",
          description:
            "Write Kotlin code to save a user's name (String) and dark mode preference (Boolean) to SharedPreferences, and load them back with defaults ('Guest' and false).",
          starterCode:
            '// Save settings\nfun saveSettings(context: Context, name: String, darkMode: Boolean) {\n    // Use SharedPreferences to save name and darkMode\n}\n\n// Load settings\nfun loadSettings(context: Context): Pair<String, Boolean> {\n    // Return Pair(name, darkMode) with defaults\n    return Pair("", false)\n}\n',
          hints: [
            'val prefs = context.getSharedPreferences("settings", Context.MODE_PRIVATE)',
            'Use prefs.edit().putString("name", name).putBoolean("darkMode", darkMode).apply()',
            'Load with prefs.getString("name", "Guest") and prefs.getBoolean("darkMode", false)',
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m3-p1s1",
          title: "Reading & Writing SharedPreferences",
          content:
            "Get SharedPreferences with getSharedPreferences(name, mode). Use Editor to write: putString, putInt, putBoolean. Always call apply() or commit() to persist changes.",
          codeExample:
            '// Write to SharedPreferences\nval prefs = getSharedPreferences("AppSettings", Context.MODE_PRIVATE)\nprefs.edit().apply {\n    putString("username", "Alice")\n    putInt("loginCount", 5)\n    putBoolean("notifications", true)\n    putFloat("volume", 0.8f)\n    apply()  // async; use commit() if you need synchronous\n}\n\n// Read from SharedPreferences\nval username = prefs.getString("username", "Guest")  // default: Guest\nval loginCount = prefs.getInt("loginCount", 0)\nval notifications = prefs.getBoolean("notifications", true)\n\n// Remove a key\nprefs.edit().remove("username").apply()\n\n// Clear all\nprefs.edit().clear().apply()',
          video: { youtubeId: "pE5ZGSj8E2w", title: "SharedPreferences" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m3-p1s2",
          title: "Preferences DataStore",
          content:
            "DataStore replaces SharedPreferences with Kotlin coroutines and Flow. PreferencesDataStore offers async, non-blocking reads/writes; ProtoDataStore uses Protocol Buffers for typed data.",
          codeExample:
            '// build.gradle\n// implementation \'androidx.datastore:datastore-preferences:1.0.0\'\n\nimport androidx.datastore.preferences.core.*\nimport androidx.datastore.preferences.preferencesDataStore\n\nval Context.dataStore by preferencesDataStore(name = "settings")\n\nobject PreferencesKeys {\n    val USERNAME = stringPreferencesKey("username")\n    val DARK_MODE = booleanPreferencesKey("dark_mode")\n}\n\n// Write\nsuspend fun saveUsername(context: Context, name: String) {\n    context.dataStore.edit { prefs ->\n        prefs[PreferencesKeys.USERNAME] = name\n    }\n}\n\n// Read as Flow\nval usernameFlow: Flow<String> = context.dataStore.data\n    .map { prefs -> prefs[PreferencesKeys.USERNAME] ?: "Guest" }',
          video: { youtubeId: "pE5ZGSj8E2w", title: "DataStore" },
          flowchart: "if-else",
        },
        {
          id: "android-m3-p1s3",
          title: "Settings Screen with PreferenceFragmentCompat",
          content:
            "Use PreferenceFragmentCompat and a preference XML to build a Settings UI automatically. Material preferences handle persistence, summaries, and change callbacks.",
          codeExample:
            '<!-- res/xml/preferences.xml -->\n<PreferenceScreen xmlns:app="http://schemas.android.com/apk/res-auto">\n    <SwitchPreferenceCompat\n        app:key="dark_mode"\n        app:title="Dark Mode"\n        app:summary="Enable dark theme"\n        app:defaultValue="false"/>\n    <ListPreference\n        app:key="language"\n        app:title="Language"\n        app:entries="@array/languages"\n        app:entryValues="@array/lang_codes"/>\n    <EditTextPreference\n        app:key="username"\n        app:title="Display Name"\n        app:dialogTitle="Enter your name"/>\n</PreferenceScreen>\n\n// SettingsFragment.kt\nclass SettingsFragment : PreferenceFragmentCompat() {\n    override fun onCreatePreferences(savedInstanceState: Bundle?, rootKey: String?) {\n        setPreferencesFromResource(R.xml.preferences, rootKey)\n    }\n}',
          video: { youtubeId: "pE5ZGSj8E2w", title: "Settings Screen" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m3-p2",
      title: "Part 2: SQLite & Room",
      description: "Local relational database with Room ORM.",
      videoUrl: "https://www.youtube.com/watch?v=bOd3wO0uFr8",
      notes:
        "Room provides an abstraction layer over SQLite with compile-time query verification, LiveData/Flow support, and automatic migration helpers.",
      docs: [
        {
          label: "Room Persistence Library",
          url: "https://developer.android.com/training/data-storage/room",
        },
        {
          label: "Room Migration Guide",
          url: "https://developer.android.com/training/data-storage/room/migrating-db-versions",
        },
      ],
      partQuiz: [
        {
          question: "What is Room?",
          options: [
            "A UI component",
            "An ORM abstraction layer over SQLite",
            "A networking library",
            "A background task library",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What annotation marks a Room entity?",
          options: ["@Table", "@Entity", "@Model", "@Schema"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does @Dao stand for?",
          options: [
            "Data Application Object",
            "Data Access Object",
            "Database Async Operation",
            "Data Action Override",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "What return type allows Room queries to emit updates automatically?",
          options: [
            "List<T>",
            "LiveData<T> or Flow<T>",
            "Cursor",
            "Observable<T>",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What annotation defines the primary key in a Room Entity?",
          options: ["@Key", "@Id", "@PrimaryKey", "@Unique"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m3-p2-prog1",
          title: "Create a Room Entity and DAO",
          description:
            "Write a Room @Entity class 'Note' with id (auto-generated Int primary key), title (String), and content (String). Then write a @Dao interface with insert, delete, and getAll (returning Flow<List<Note>>) methods.",
          starterCode:
            "// Note.kt\n// Define Room Entity\n\n// NoteDao.kt\n// Define DAO interface\n",
          hints: [
            '@Entity(tableName = "notes") data class Note(@PrimaryKey(autoGenerate = true) val id: Int = 0, val title: String, val content: String)',
            "@Dao interface NoteDao { @Insert suspend fun insert(note: Note) }",
            '@Delete suspend fun delete(note: Note) and @Query("SELECT * FROM notes") fun getAll(): Flow<List<Note>>',
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m3-p2s1",
          title: "Entity, DAO & Database",
          content:
            "Entity maps to a database table. DAO (Data Access Object) defines query methods. Database class annotated with @Database ties entities and DAOs together.",
          codeExample:
            '@Entity(tableName = "notes")\ndata class Note(\n    @PrimaryKey(autoGenerate = true) val id: Int = 0,\n    val title: String,\n    val content: String,\n    val timestamp: Long = System.currentTimeMillis()\n)\n\n@Dao\ninterface NoteDao {\n    @Insert(onConflict = OnConflictStrategy.REPLACE)\n    suspend fun insert(note: Note)\n\n    @Delete\n    suspend fun delete(note: Note)\n\n    @Query("SELECT * FROM notes ORDER BY timestamp DESC")\n    fun getAll(): Flow<List<Note>>\n\n    @Query("SELECT * FROM notes WHERE id = :noteId")\n    suspend fun getById(noteId: Int): Note?\n}\n\n@Database(entities = [Note::class], version = 1, exportSchema = false)\nabstract class AppDatabase : RoomDatabase() {\n    abstract fun noteDao(): NoteDao\n}',
          video: { youtubeId: "bOd3wO0uFr8", title: "Room Entity & DAO" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m3-p2s2",
          title: "Database Instance & Repository",
          content:
            "Create a singleton Database instance. A Repository class abstracts the data source from the ViewModel, decoupling UI from storage implementation.",
          codeExample:
            '// Singleton Database\nval db = Room.databaseBuilder(\n    applicationContext,\n    AppDatabase::class.java,\n    "app_database"\n).build()\n\n// Repository pattern\nclass NoteRepository(private val noteDao: NoteDao) {\n    val allNotes: Flow<List<Note>> = noteDao.getAll()\n\n    suspend fun insert(note: Note) = noteDao.insert(note)\n    suspend fun delete(note: Note) = noteDao.delete(note)\n}\n\n// ViewModel uses repository\nclass NoteViewModel(private val repo: NoteRepository) : ViewModel() {\n    val notes = repo.allNotes.asLiveData()\n\n    fun addNote(title: String, content: String) = viewModelScope.launch {\n        repo.insert(Note(title = title, content = content))\n    }\n}',
          video: { youtubeId: "bOd3wO0uFr8", title: "Repository Pattern" },
          flowchart: "if-else",
        },
        {
          id: "android-m3-p2s3",
          title: "Room Migrations & Relations",
          content:
            "Handle schema changes with Migration objects to avoid data loss. @Relation defines one-to-many or many-to-many relationships between entities.",
          codeExample:
            '// Migration from version 1 to 2 (add column)\nval MIGRATION_1_2 = object : Migration(1, 2) {\n    override fun migrate(database: SupportSQLiteDatabase) {\n        database.execSQL("ALTER TABLE notes ADD COLUMN isPinned INTEGER NOT NULL DEFAULT 0")\n    }\n}\n\n// Add to database builder\nRoom.databaseBuilder(context, AppDatabase::class.java, "app_db")\n    .addMigrations(MIGRATION_1_2)\n    .build()\n\n// Relation: User with their Notes\ndata class UserWithNotes(\n    @Embedded val user: User,\n    @Relation(\n        parentColumn = "userId",\n        entityColumn = "authorId"\n    )\n    val notes: List<Note>\n)\n\n// DAO query for relation\n@Transaction\n@Query("SELECT * FROM users")\nfun getUsersWithNotes(): Flow<List<UserWithNotes>>',
          video: { youtubeId: "bOd3wO0uFr8", title: "Room Migrations" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m3-p3",
      title: "Part 3: Retrofit & APIs",
      description: "HTTP networking with Retrofit, Gson, and coroutines.",
      videoUrl: "https://www.youtube.com/watch?v=4JGvDUlfk7Y",
      notes:
        "Retrofit turns REST API endpoints into type-safe Kotlin interface methods; combined with coroutines, it provides clean async networking without callbacks.",
      docs: [
        { label: "Retrofit Docs", url: "https://square.github.io/retrofit/" },
        { label: "OkHttp Docs", url: "https://square.github.io/okhttp/" },
      ],
      partQuiz: [
        {
          question: "What is Retrofit?",
          options: [
            "An image loading library",
            "A type-safe HTTP client for Android",
            "A local database",
            "A testing framework",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What annotation marks a GET request in Retrofit?",
          options: ["@Request", "@GET", "@Http", "@Fetch"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does @Path do in a Retrofit interface?",
          options: [
            "Sets request headers",
            "Replaces a URL path segment with a variable",
            "Adds query parameters",
            "Sets the base URL",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is OkHttp in relation to Retrofit?",
          options: [
            "An alternative to Retrofit",
            "The underlying HTTP client Retrofit uses",
            "A JSON parser",
            "A caching library",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a suspend function used for in Retrofit?",
          options: [
            "Pausing network calls",
            "Async API calls using Kotlin coroutines",
            "Caching responses",
            "Retrying failed requests",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m3-p3-prog1",
          title: "Create a Retrofit API interface",
          description:
            "Write a Retrofit API interface 'NewsApi' with a suspend GET method 'getTopHeadlines' that takes a String 'country' as a @Query parameter and returns a 'NewsResponse' data class.",
          starterCode:
            '// NewsApi.kt\ninterface NewsApi {\n    // Define the getTopHeadlines endpoint\n}\n\n// Create Retrofit instance with base URL "https://newsapi.org/v2/"\nobject RetrofitInstance {\n    // Build and expose newsApi\n}\n',
          hints: [
            '@GET("top-headlines") suspend fun getTopHeadlines(@Query("country") country: String): NewsResponse',
            "Use Retrofit.Builder().baseUrl(BASE_URL).addConverterFactory(GsonConverterFactory.create()).build()",
            "val api: NewsApi = retrofit.create(NewsApi::class.java)",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m3-p3s1",
          title: "Retrofit Setup & API Interface",
          content:
            "Define an interface with annotated methods (@GET, @POST, @PUT, @DELETE). Use @Path for URL segments, @Query for query params, @Body for request body. Create a Retrofit singleton.",
          codeExample:
            '// API Interface\ninterface ApiService {\n    @GET("users/{id}")\n    suspend fun getUser(@Path("id") userId: Int): User\n\n    @GET("posts")\n    suspend fun getPosts(@Query("page") page: Int, @Query("limit") limit: Int): List<Post>\n\n    @POST("posts")\n    suspend fun createPost(@Body post: Post): Post\n\n    @DELETE("posts/{id}")\n    suspend fun deletePost(@Path("id") id: Int): Response<Unit>\n}\n\n// Retrofit singleton\nobject RetrofitInstance {\n    private val retrofit = Retrofit.Builder()\n        .baseUrl("https://jsonplaceholder.typicode.com/")\n        .addConverterFactory(GsonConverterFactory.create())\n        .build()\n    val api: ApiService by lazy { retrofit.create(ApiService::class.java) }\n}',
          video: { youtubeId: "4JGvDUlfk7Y", title: "Retrofit Setup" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m3-p3s2",
          title: "Coroutines with Retrofit",
          content:
            "Suspend functions make Retrofit calls non-blocking. Use viewModelScope.launch in ViewModel. Wrap calls in try-catch or use a sealed Result class to handle errors.",
          codeExample:
            '// ViewModel with Retrofit + coroutines\nclass PostViewModel : ViewModel() {\n    private val _posts = MutableLiveData<List<Post>>()\n    val posts: LiveData<List<Post>> = _posts\n\n    private val _error = MutableLiveData<String>()\n    val error: LiveData<String> = _error\n\n    fun loadPosts() {\n        viewModelScope.launch {\n            try {\n                val result = RetrofitInstance.api.getPosts(page = 1, limit = 20)\n                _posts.value = result\n            } catch (e: HttpException) {\n                _error.value = "HTTP Error: ${e.code()}"\n            } catch (e: IOException) {\n                _error.value = "Network error. Check connection."\n            }\n        }\n    }\n}',
          video: { youtubeId: "4JGvDUlfk7Y", title: "Retrofit + Coroutines" },
          flowchart: "if-else",
        },
        {
          id: "android-m3-p3s3",
          title: "Interceptors & Headers",
          content:
            "OkHttp Interceptors add headers (like auth tokens) to every request. Logging interceptors print request/response details during development. Caching interceptors reduce redundant network calls.",
          codeExample:
            '// OkHttp interceptor for auth token\nval authInterceptor = Interceptor { chain ->\n    val original = chain.request()\n    val token = PreferenceManager.getDefaultSharedPreferences(context)\n        .getString("auth_token", "")\n    val request = original.newBuilder()\n        .header("Authorization", "Bearer $token")\n        .header("Accept", "application/json")\n        .build()\n    chain.proceed(request)\n}\n\nval okHttpClient = OkHttpClient.Builder()\n    .addInterceptor(authInterceptor)\n    .addInterceptor(HttpLoggingInterceptor().apply {\n        level = if (BuildConfig.DEBUG)\n            HttpLoggingInterceptor.Level.BODY\n        else HttpLoggingInterceptor.Level.NONE\n    })\n    .connectTimeout(30, TimeUnit.SECONDS)\n    .build()\n\nRetrofit.Builder().client(okHttpClient).baseUrl(BASE_URL).build()',
          video: { youtubeId: "4JGvDUlfk7Y", title: "OkHttp Interceptors" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does apply() do in SharedPreferences.Editor?",
      options: [
        "Reads preferences",
        "Saves changes synchronously",
        "Saves changes asynchronously in background",
        "Clears all preferences",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which Room annotation auto-generates the primary key?",
      options: [
        "@Key(auto=true)",
        "@PrimaryKey(autoGenerate = true)",
        "@AutoId",
        "@GeneratedKey",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What Retrofit annotation sends data in the request body?",
      options: ["@Query", "@Path", "@Body", "@Field"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the recommended coroutine scope in ViewModel?",
      options: ["GlobalScope", "lifecycleScope", "viewModelScope", "MainScope"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does @Transaction in Room ensure?",
      options: [
        "Auto migration",
        "Multiple queries execute atomically",
        "Background thread execution",
        "Query caching",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "android-m3-test1",
      title: "Notes App with Room + Retrofit Sync",
      description:
        "Write the Room Entity, DAO, and Repository for a Note. Add a Retrofit call to fetch notes from a remote API. In the ViewModel, load remote notes and save them locally, then expose them via Flow.",
      starterCode:
        '@Entity(tableName = "notes")\ndata class Note(@PrimaryKey val id: Int, val title: String, val body: String)\n\n// TODO: Implement NoteDao, NoteRepository, NoteApi interface, and NoteViewModel\n',
      hints: [
        'NoteDao needs @Insert, @Query("SELECT * FROM notes") fun getAll(): Flow<List<Note>>',
        'NoteApi: @GET("posts") suspend fun fetchNotes(): List<Note>',
        "In ViewModel: fetch remote notes in viewModelScope, insert each into Room, then observe the Flow",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: Advanced Android ───────────────────────────────────────────────

const android_module4 = {
  id: "android-advanced",
  title: "Module 4: Advanced Android",
  outcome:
    "Build modern UIs with Jetpack Compose, implement MVVM architecture, and handle background tasks.",
  isLocked: true,
  parts: [
    {
      id: "android-m4-p1",
      title: "Part 1: Jetpack Compose",
      description:
        "Declarative UI with Compose, state management, and navigation.",
      videoUrl: "https://www.youtube.com/watch?v=cDabx3SjuOY",
      notes:
        "Jetpack Compose is Android's modern declarative UI toolkit; composable functions describe UI as a function of state, making UIs reactive and concise.",
      docs: [
        {
          label: "Compose Docs",
          url: "https://developer.android.com/jetpack/compose/documentation",
        },
        {
          label: "Compose Samples",
          url: "https://github.com/android/compose-samples",
        },
      ],
      partQuiz: [
        {
          question: "What annotation marks a Composable function?",
          options: ["@UI", "@Compose", "@Composable", "@View"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 'remember' do in Compose?",
          options: [
            "Saves data to disk",
            "Retains state across recompositions",
            "Caches API responses",
            "Remembers navigation history",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What triggers a recomposition in Compose?",
          options: [
            "User scrolling",
            "State changes observed by composables",
            "Activity resume",
            "Fragment transactions",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a LazyColumn in Compose?",
          options: [
            "A slow column layout",
            "A lazily-composed scrollable column (like RecyclerView)",
            "A column with animations",
            "A full-screen column",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does 'hoist state' mean in Compose?",
          options: [
            "Moving state up to parent composable",
            "Saving state to ViewModel",
            "Using remember to preserve state",
            "Storing state in a singleton",
          ],
          correct: 0,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m4-p1-prog1",
          title: "Build a Counter with Compose",
          description:
            "Write a Composable 'CounterScreen' with a Text showing the count and a Button that increments it. State should be hoisted: CounterScreen takes count (Int) and onIncrement (() -> Unit) as parameters.",
          starterCode:
            "@Composable\nfun CounterScreen(count: Int, onIncrement: () -> Unit) {\n    // Build the UI with Column, Text showing count, and a Button\n}\n\n// Parent composable managing state:\n@Composable\nfun CounterApp() {\n    // Declare state and pass to CounterScreen\n}\n",
          hints: [
            "In CounterApp: var count by remember { mutableStateOf(0) }",
            "Pass CounterScreen(count = count, onIncrement = { count++ })",
            'In CounterScreen: Column { Text("Count: $count"); Button(onClick = onIncrement) { Text("Increment") } }',
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m4-p1s1",
          title: "Composable Functions & State",
          content:
            "Composable functions emit UI declaratively. State (mutableStateOf) triggers recomposition when changed. remember retains state across recompositions. rememberSaveable survives configuration changes.",
          codeExample:
            '@Composable\nfun GreetingCard(name: String) {\n    var expanded by remember { mutableStateOf(false) }\n\n    Card(\n        modifier = Modifier\n            .fillMaxWidth()\n            .padding(16.dp)\n            .clickable { expanded = !expanded }\n    ) {\n        Column(modifier = Modifier.padding(16.dp)) {\n            Text(\n                text = "Hello, $name!",\n                style = MaterialTheme.typography.headlineMedium\n            )\n            if (expanded) {\n                Text(\n                    text = "Welcome to Compose!",\n                    style = MaterialTheme.typography.bodyMedium,\n                    modifier = Modifier.padding(top = 8.dp)\n                )\n            }\n        }\n    }\n}',
          video: { youtubeId: "cDabx3SjuOY", title: "Composable & State" },
          flowchart: "if-else",
        },
        {
          id: "android-m4-p1s2",
          title: "Layouts & Modifiers",
          content:
            "Compose layouts: Column (vertical), Row (horizontal), Box (stacked), LazyColumn (scrollable list). Modifiers chain UI attributes: size, padding, background, clickable, clip.",
          codeExample:
            '@Composable\nfun ProfileCard(user: User) {\n    Row(\n        modifier = Modifier\n            .fillMaxWidth()\n            .padding(16.dp)\n            .background(MaterialTheme.colorScheme.surfaceVariant, RoundedCornerShape(12.dp))\n            .padding(12.dp),\n        verticalAlignment = Alignment.CenterVertically\n    ) {\n        AsyncImage(\n            model = user.avatarUrl,\n            contentDescription = "Avatar",\n            modifier = Modifier.size(56.dp).clip(CircleShape)\n        )\n        Spacer(modifier = Modifier.width(12.dp))\n        Column {\n            Text(user.name, style = MaterialTheme.typography.titleMedium)\n            Text(user.email, style = MaterialTheme.typography.bodySmall,\n                color = MaterialTheme.colorScheme.onSurfaceVariant)\n        }\n    }\n}',
          video: { youtubeId: "cDabx3SjuOY", title: "Compose Layouts" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m4-p1s3",
          title: "Navigation in Compose",
          content:
            "Use NavController and NavHost for Compose navigation. Define routes as strings or sealed classes. Pass arguments via route templates. navigate() pushes new destinations.",
          codeExample:
            '// Navigation setup\nsealed class Screen(val route: String) {\n    object Home : Screen("home")\n    object Detail : Screen("detail/{itemId}") {\n        fun createRoute(id: Int) = "detail/$id"\n    }\n}\n\n@Composable\nfun AppNavigation() {\n    val navController = rememberNavController()\n    NavHost(navController, startDestination = Screen.Home.route) {\n        composable(Screen.Home.route) {\n            HomeScreen { id -> navController.navigate(Screen.Detail.createRoute(id)) }\n        }\n        composable(\n            Screen.Detail.route,\n            arguments = listOf(navArgument("itemId") { type = NavType.IntType })\n        ) { backStackEntry ->\n            val id = backStackEntry.arguments?.getInt("itemId") ?: return@composable\n            DetailScreen(itemId = id, onBack = { navController.popBackStack() })\n        }\n    }\n}',
          video: { youtubeId: "cDabx3SjuOY", title: "Compose Navigation" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m4-p2",
      title: "Part 2: MVVM Architecture",
      description: "ViewModel, LiveData, and clean architecture patterns.",
      videoUrl: "https://www.youtube.com/watch?v=ijXjCtCXcN4",
      notes:
        "MVVM separates UI (View) from business logic (ViewModel) from data (Model/Repository); ViewModel survives configuration changes, preventing memory leaks.",
      docs: [
        {
          label: "ViewModel Guide",
          url: "https://developer.android.com/topic/libraries/architecture/viewmodel",
        },
        {
          label: "Architecture Guide",
          url: "https://developer.android.com/topic/architecture",
        },
      ],
      partQuiz: [
        {
          question: "What does ViewModel survive?",
          options: [
            "App process death",
            "Configuration changes (rotation)",
            "Low memory kills",
            "Battery optimization",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the difference between LiveData and StateFlow?",
          options: [
            "No difference",
            "LiveData is lifecycle-aware; StateFlow is a Kotlin coroutines-based hot flow",
            "StateFlow requires API 26+",
            "LiveData supports coroutines natively",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the Repository pattern?",
          options: [
            "Direct database access from ViewModel",
            "An abstraction layer between ViewModel and data sources",
            "A network-only data source",
            "A caching strategy",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Where should you NOT put UI logic in MVVM?",
          options: ["ViewModel", "Repository", "Model", "Activity/Fragment"],
          correct: 3,
          xp: 10,
        },
        {
          question: "What does viewModelScope.launch do?",
          options: [
            "Creates a new ViewModel",
            "Launches a coroutine tied to the ViewModel lifecycle",
            "Launches a background service",
            "Schedules a WorkManager task",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m4-p2-prog1",
          title: "Implement a ViewModel with StateFlow",
          description:
            "Write a 'SearchViewModel' that holds a StateFlow<String> for the search query and a StateFlow<List<String>> for filtered results. When query changes, filter a hardcoded list of names.",
          starterCode:
            'class SearchViewModel : ViewModel() {\n    private val allNames = listOf("Alice", "Bob", "Charlie", "David", "Eve")\n    // Declare _query and _results as MutableStateFlow\n    // Expose as StateFlow (read-only)\n    // Add a function to update the query and filter results\n}\n',
          hints: [
            'private val _query = MutableStateFlow("") and val query: StateFlow<String> = _query',
            "private val _results = MutableStateFlow(allNames) and val results: StateFlow<List<String>> = _results",
            "fun onQueryChange(q: String) { _query.value = q; _results.value = allNames.filter { it.contains(q, ignoreCase = true) } }",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m4-p2s1",
          title: "ViewModel & LiveData",
          content:
            "ViewModel stores UI-related data that survives configuration changes. LiveData notifies observers only when the lifecycle is active, preventing crashes from updating destroyed views.",
          codeExample:
            "class UserViewModel : ViewModel() {\n    private val _user = MutableLiveData<User>()\n    val user: LiveData<User> = _user\n\n    private val _isLoading = MutableLiveData(false)\n    val isLoading: LiveData<Boolean> = _isLoading\n\n    fun loadUser(id: Int) {\n        _isLoading.value = true\n        viewModelScope.launch {\n            try {\n                val result = repository.getUser(id)\n                _user.postValue(result)\n            } catch (e: Exception) {\n                // handle error\n            } finally {\n                _isLoading.postValue(false)\n            }\n        }\n    }\n}\n\n// In Activity/Fragment\nviewModel.user.observe(viewLifecycleOwner) { user ->\n    binding.tvName.text = user.name\n}",
          video: { youtubeId: "ijXjCtCXcN4", title: "ViewModel & LiveData" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m4-p2s2",
          title: "StateFlow & SharedFlow",
          content:
            "StateFlow is a hot flow that always holds a current value (replaces LiveData in Compose). SharedFlow is used for one-time events (navigation, toasts). Collect in lifecycleScope.",
          codeExample:
            'class TaskViewModel : ViewModel() {\n    private val _tasks = MutableStateFlow<List<Task>>(emptyList())\n    val tasks: StateFlow<List<Task>> = _tasks.asStateFlow()\n\n    // One-time events via SharedFlow\n    private val _events = MutableSharedFlow<String>()\n    val events: SharedFlow<String> = _events.asSharedFlow()\n\n    fun deleteTask(task: Task) {\n        viewModelScope.launch {\n            repository.delete(task)\n            _events.emit("Task deleted")\n        }\n    }\n}\n\n// In Fragment - collect StateFlow\nlifecycleScope.launch {\n    repeatOnLifecycle(Lifecycle.State.STARTED) {\n        viewModel.tasks.collect { tasks -> adapter.submitList(tasks) }\n    }\n}\n// Collect SharedFlow events\nlifecycleScope.launch {\n    viewModel.events.collect { msg -> Snackbar.make(view, msg, LENGTH_SHORT).show() }\n}',
          video: { youtubeId: "ijXjCtCXcN4", title: "StateFlow & SharedFlow" },
          flowchart: "if-else",
        },
        {
          id: "android-m4-p2s3",
          title: "Dependency Injection with Hilt",
          content:
            "Hilt (built on Dagger) provides dependency injection in Android. @HiltAndroidApp, @AndroidEntryPoint, @HiltViewModel, and @Inject annotations wire components automatically.",
          codeExample:
            '// Application class\n@HiltAndroidApp\nclass MyApp : Application()\n\n// Module providing dependencies\n@Module\n@InstallIn(SingletonComponent::class)\nobject AppModule {\n    @Provides\n    @Singleton\n    fun provideDatabase(@ApplicationContext ctx: Context): AppDatabase =\n        Room.databaseBuilder(ctx, AppDatabase::class.java, "db").build()\n\n    @Provides\n    fun provideNoteDao(db: AppDatabase): NoteDao = db.noteDao()\n}\n\n// ViewModel with Hilt injection\n@HiltViewModel\nclass NoteViewModel @Inject constructor(\n    private val repository: NoteRepository\n) : ViewModel() { /* ... */ }\n\n// Activity\n@AndroidEntryPoint\nclass MainActivity : AppCompatActivity() {\n    private val viewModel: NoteViewModel by viewModels()\n}',
          video: { youtubeId: "ijXjCtCXcN4", title: "Hilt DI" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m4-p3",
      title: "Part 3: Background Tasks",
      description:
        "WorkManager, coroutines, and services for background processing.",
      videoUrl: "https://www.youtube.com/watch?v=pe_yqM16hPQ",
      notes:
        "WorkManager is the recommended API for deferrable, guaranteed background work; it respects battery optimizations and survives app restarts.",
      docs: [
        {
          label: "WorkManager Guide",
          url: "https://developer.android.com/topic/libraries/architecture/workmanager",
        },
        {
          label: "Background Work Guide",
          url: "https://developer.android.com/guide/background",
        },
      ],
      partQuiz: [
        {
          question: "Which API is recommended for guaranteed background work?",
          options: [
            "AsyncTask (deprecated)",
            "Thread + Handler",
            "WorkManager",
            "JobScheduler directly",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is a Foreground Service used for?",
          options: [
            "UI rendering",
            "Long-running operations requiring a persistent notification",
            "One-time background tasks",
            "Alarm scheduling",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What constraint can you add to a WorkManager request?",
          options: [
            "Only internet constraint",
            "Network, battery, storage constraints",
            "Time-of-day constraint only",
            "Wi-Fi only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Dispatchers.IO provide?",
          options: [
            "Main thread dispatcher",
            "A coroutine dispatcher optimized for I/O (disk, network)",
            "A background service dispatcher",
            "A UI dispatcher",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does chaining WorkManager tasks with .then() create?",
          options: [
            "Parallel tasks",
            "Sequential task chains",
            "Repeated tasks",
            "Periodic tasks",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m4-p3-prog1",
          title: "Create a WorkManager Worker",
          description:
            "Write a WorkManager Worker class 'SyncWorker' that simulates syncing data (delay 1 second using Thread.sleep) and returns Result.success() on completion or Result.failure() on exception.",
          starterCode:
            "class SyncWorker(context: Context, params: WorkerParameters) :\n    Worker(context, params) {\n    override fun doWork(): Result {\n        // Simulate sync work, return success or failure\n    }\n}\n\n// Schedule SyncWorker with network required constraint\nfun scheduleSyncWork(context: Context) {\n    // Build WorkRequest with NetworkType.CONNECTED constraint\n    // Enqueue with WorkManager\n}\n",
          hints: [
            "In doWork(): return try { Thread.sleep(1000); Result.success() } catch (e: Exception) { Result.failure() }",
            "val constraints = Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build()",
            "val request = OneTimeWorkRequestBuilder<SyncWorker>().setConstraints(constraints).build()",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m4-p3s1",
          title: "Coroutines & Dispatchers",
          content:
            "Kotlin coroutines provide lightweight concurrency. Dispatchers.Main for UI, Dispatchers.IO for network/disk, Dispatchers.Default for CPU-intensive tasks. Use withContext to switch dispatchers.",
          codeExample:
            "// Coroutine dispatchers\nclass DataRepository(private val api: ApiService, private val dao: NoteDao) {\n    suspend fun syncNotes() = withContext(Dispatchers.IO) {\n        val remote = api.fetchNotes()  // network call on IO\n        dao.insertAll(remote)           // database write on IO\n    }\n}\n\n// ViewModel launching coroutines\nclass MainViewModel : ViewModel() {\n    fun loadData() {\n        viewModelScope.launch {\n            // Runs on Main by default\n            _isLoading.value = true\n            withContext(Dispatchers.IO) {\n                repository.syncNotes()  // IO work\n            }\n            _isLoading.value = false   // Back on Main\n        }\n    }\n}",
          video: { youtubeId: "pe_yqM16hPQ", title: "Coroutines" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m4-p3s2",
          title: "WorkManager",
          content:
            "WorkManager handles guaranteed, deferrable background work with constraints (network, battery, charging). OneTimeWorkRequest for single runs; PeriodicWorkRequest for recurring tasks.",
          codeExample:
            '// Define Worker\nclass UploadWorker(ctx: Context, params: WorkerParameters) : CoroutineWorker(ctx, params) {\n    override suspend fun doWork(): Result {\n        return try {\n            val fileUri = inputData.getString("file_uri") ?: return Result.failure()\n            apiService.uploadFile(fileUri)\n            Result.success()\n        } catch (e: Exception) {\n            if (runAttemptCount < 3) Result.retry() else Result.failure()\n        }\n    }\n}\n\n// Schedule with constraints\nval constraints = Constraints.Builder()\n    .setRequiredNetworkType(NetworkType.CONNECTED)\n    .setRequiresBatteryNotLow(true)\n    .build()\nval uploadRequest = OneTimeWorkRequestBuilder<UploadWorker>()\n    .setConstraints(constraints)\n    .setInputData(workDataOf("file_uri" to "content://..."))\n    .build()\nWorkManager.getInstance(context).enqueue(uploadRequest)',
          video: { youtubeId: "pe_yqM16hPQ", title: "WorkManager" },
          flowchart: "if-else",
        },
        {
          id: "android-m4-p3s3",
          title: "Foreground Services",
          content:
            "Foreground Services run long operations (music playback, GPS tracking) with a persistent notification. Call startForeground() with a Notification immediately after onStartCommand().",
          codeExample:
            'class MusicService : Service() {\n    private val channelId = "music_channel"\n\n    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {\n        val notification = NotificationCompat.Builder(this, channelId)\n            .setContentTitle("Now Playing")\n            .setContentText("Song Title")\n            .setSmallIcon(R.drawable.ic_music)\n            .build()\n        startForeground(1, notification)  // Must call immediately\n\n        // Start music playback here\n        return START_STICKY\n    }\n\n    override fun onBind(intent: Intent?) = null\n}\n\n// Start service from Activity\nval serviceIntent = Intent(this, MusicService::class.java)\nstartForegroundService(serviceIntent)\n\n// Stop\nstopService(serviceIntent)',
          video: { youtubeId: "pe_yqM16hPQ", title: "Foreground Services" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What annotation is required for a Compose function?",
      options: ["@UI", "@Component", "@Composable", "@Screen"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does 'state hoisting' achieve in Compose?",
      options: [
        "Better performance",
        "Makes composables stateless and reusable",
        "Eliminates recompositions",
        "Stores state in ViewModel automatically",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which WorkManager class supports coroutines inside doWork()?",
      options: ["Worker", "CoroutineWorker", "AsyncWorker", "SuspendWorker"],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What is the benefit of ViewModel over storing data in Activity?",
      options: [
        "Faster UI rendering",
        "Survives configuration changes like screen rotation",
        "Automatic data persistence",
        "Built-in network handling",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "What Compose function creates a scrollable list similar to RecyclerView?",
      options: [
        "ScrollableColumn",
        "LazyColumn",
        "RecyclerColumn",
        "ListComposable",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "android-m4-test1",
      title: "MVVM Notes App with Compose",
      description:
        "Write a Compose-based Notes app with: a ViewModel holding a StateFlow<List<Note>>, a LazyColumn displaying notes, a TextField and Button to add new notes, and a click handler to delete notes.",
      starterCode:
        "data class Note(val id: Int, val text: String)\n\nclass NoteViewModel : ViewModel() {\n    // TODO: StateFlow for notes\n    // TODO: addNote(text: String)\n    // TODO: deleteNote(note: Note)\n}\n\n@Composable\nfun NotesScreen(viewModel: NoteViewModel = viewModel()) {\n    // TODO: Collect notes StateFlow\n    // TODO: TextField for new note input\n    // TODO: Button to add note\n    // TODO: LazyColumn for note list\n}\n",
      hints: [
        "private val _notes = MutableStateFlow<List<Note>>(emptyList()); val notes = _notes.asStateFlow()",
        "Collect with val notes by viewModel.notes.collectAsState()",
        "LazyColumn { items(notes) { note -> Text(note.text, Modifier.clickable { viewModel.deleteNote(note) }) } }",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: Publishing & Best Practices ────────────────────────────────────

const android_module5 = {
  id: "android-publishing",
  title: "Module 5: Publishing & Best Practices",
  outcome:
    "Test Android apps, sign and publish to Google Play, and optimize app performance.",
  isLocked: true,
  parts: [
    {
      id: "android-m5-p1",
      title: "Part 1: Testing Android Apps",
      description:
        "Unit tests, instrumentation tests, and UI tests with Espresso.",
      videoUrl: "https://www.youtube.com/watch?v=EkfVL5vCDmo",
      notes:
        "Android testing has three levels: unit tests (JVM), integration tests (with Android components), and UI tests (Espresso/Compose UI testing) run on emulators.",
      docs: [
        {
          label: "Android Testing Guide",
          url: "https://developer.android.com/training/testing",
        },
        {
          label: "Compose Testing Docs",
          url: "https://developer.android.com/jetpack/compose/testing",
        },
      ],
      partQuiz: [
        {
          question: "Where do unit tests run in Android?",
          options: [
            "On a physical device",
            "On the JVM (local machine)",
            "On an emulator only",
            "On the Android SDK",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What library is used for UI tests in traditional Android?",
          options: ["Robolectric", "JUnit5", "Espresso", "Mockito"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does @Mock do in Mockito?",
          options: [
            "Runs tests in isolation",
            "Creates a mock object that mimics a class",
            "Marks a test method",
            "Injects dependencies",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a UI test's advantage over unit tests?",
          options: [
            "Faster to run",
            "Tests actual user interactions on a real or emulated device",
            "No Android SDK needed",
            "Tests only logic",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            'What does `composeTestRule.onNodeWithText("Click").performClick()` do?',
          options: [
            "Checks if a node exists",
            "Simulates a click on a node with text 'Click'",
            "Asserts a view is visible",
            "Takes a screenshot",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m5-p1-prog1",
          title: "Write a ViewModel unit test",
          description:
            "Write a JUnit test class 'CounterViewModelTest' that tests a CounterViewModel with: addOne() increments count by 1, and initial count is 0. Use Mockito's @Mock and verify the ViewModel's StateFlow.",
          starterCode:
            "// CounterViewModel.kt\nclass CounterViewModel : ViewModel() {\n    private val _count = MutableStateFlow(0)\n    val count: StateFlow<Int> = _count.asStateFlow()\n    fun addOne() { _count.value++ }\n}\n\n// CounterViewModelTest.kt\n@RunWith(JUnit4::class)\nclass CounterViewModelTest {\n    // TODO: Test initial state is 0\n    // TODO: Test addOne() increments count\n}\n",
          hints: [
            "Instantiate ViewModel directly: private val viewModel = CounterViewModel()",
            "@Test fun `initial count is zero`() { assertEquals(0, viewModel.count.value) }",
            "@Test fun `addOne increments count`() { viewModel.addOne(); assertEquals(1, viewModel.count.value) }",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m5-p1s1",
          title: "Unit Testing with JUnit & Mockito",
          content:
            "Unit tests in test/ folder run on JVM without Android framework. Use JUnit4/5 for assertions. Mockito creates mock dependencies. MockK is the Kotlin-first mocking library.",
          codeExample:
            '// Unit test for Repository\nclass NoteRepositoryTest {\n    @Mock private lateinit var noteDao: NoteDao\n    private lateinit var repository: NoteRepository\n\n    @Before\n    fun setup() {\n        MockitoAnnotations.openMocks(this)\n        repository = NoteRepository(noteDao)\n    }\n\n    @Test\n    fun `insert note calls dao insert`() = runTest {\n        val note = Note(1, "Test", "Content")\n        repository.insert(note)\n        verify(noteDao).insert(note)  // Verify DAO was called\n    }\n\n    @Test\n    fun `delete note calls dao delete`() = runTest {\n        val note = Note(1, "Test", "Content")\n        repository.delete(note)\n        verify(noteDao).delete(note)\n    }\n}',
          video: { youtubeId: "EkfVL5vCDmo", title: "Unit Testing" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m5-p1s2",
          title: "Espresso UI Tests",
          content:
            "Espresso tests run on devices/emulators in androidTest/ folder. ViewMatchers find views, ViewActions interact with them, ViewAssertions verify state.",
          codeExample:
            '@RunWith(AndroidJUnit4::class)\nclass MainActivityTest {\n    @get:Rule\n    val activityRule = ActivityScenarioRule(MainActivity::class.java)\n\n    @Test\n    fun typeNameAndClickButton_showsGreeting() {\n        // Type into EditText\n        onView(withId(R.id.etName))\n            .perform(typeText("Alice"), closeSoftKeyboard())\n\n        // Click button\n        onView(withId(R.id.btnGreet)).perform(click())\n\n        // Assert greeting is shown\n        onView(withId(R.id.tvGreeting))\n            .check(matches(withText("Hello, Alice!")))\n    }\n\n    @Test\n    fun emptyName_showsError() {\n        onView(withId(R.id.btnGreet)).perform(click())\n        onView(withText("Name cannot be empty")).check(matches(isDisplayed()))\n    }\n}',
          video: { youtubeId: "EkfVL5vCDmo", title: "Espresso Tests" },
          flowchart: "if-else",
        },
        {
          id: "android-m5-p1s3",
          title: "Compose UI Testing",
          content:
            "Compose provides ComposeTestRule for testing composables. Use onNode(matcher) to find nodes by text, content description, or tag. performClick() triggers interactions; assertIsDisplayed() verifies state.",
          codeExample:
            '@RunWith(AndroidJUnit4::class)\nclass NotesScreenTest {\n    @get:Rule\n    val composeTestRule = createComposeRule()\n\n    @Test\n    fun addNote_appearsInList() {\n        val viewModel = NoteViewModel()\n        composeTestRule.setContent {\n            NotesScreen(viewModel = viewModel)\n        }\n\n        // Type in the text field\n        composeTestRule.onNodeWithTag("noteInput").performTextInput("Buy groceries")\n\n        // Click add button\n        composeTestRule.onNodeWithText("Add").performClick()\n\n        // Verify note appears in list\n        composeTestRule.onNodeWithText("Buy groceries").assertIsDisplayed()\n    }\n}',
          video: { youtubeId: "EkfVL5vCDmo", title: "Compose Testing" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m5-p2",
      title: "Part 2: App Signing & Publishing",
      description:
        "Keystore, release builds, and Google Play Store submission.",
      videoUrl: "https://www.youtube.com/watch?v=5Y_E7xvEWjU",
      notes:
        "Every Android app must be signed with a keystore before publishing; Google Play App Signing manages your key securely and enables key rotation.",
      docs: [
        {
          label: "Sign Your App",
          url: "https://developer.android.com/studio/publish/app-signing",
        },
        {
          label: "Google Play Publishing",
          url: "https://developer.android.com/distribute/googleplay/start",
        },
      ],
      partQuiz: [
        {
          question: "What is a keystore used for in Android?",
          options: [
            "Storing passwords",
            "Signing the app to verify its authenticity",
            "Encrypting network traffic",
            "Storing API keys",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "What is the difference between debug and release build types?",
          options: [
            "No difference",
            "Release is signed with your keystore and optimized with ProGuard/R8",
            "Debug is faster",
            "Release includes all debug symbols",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does R8 do in a release build?",
          options: [
            "Adds debugging info",
            "Shrinks, obfuscates, and optimizes bytecode",
            "Signs the APK",
            "Runs unit tests",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What format does Google Play now prefer over APK?",
          options: ["AAR", "JAR", "AAB (Android App Bundle)", "ZIP"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What is the minimum requirement before uploading to Google Play?",
          options: [
            "At least 10 reviews",
            "Completed store listing with signed AAB/APK",
            "Published website",
            "100 beta testers",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m5-p2-prog1",
          title: "Configure release signing in build.gradle",
          description:
            "Write the build.gradle signingConfigs and buildTypes blocks to create a 'release' build that uses a keystore file 'release.jks' with store password from a local.properties file.",
          starterCode:
            "// app/build.gradle\nandroid {\n    // TODO: Add signingConfigs for release\n    // TODO: Configure buildTypes.release to use signingConfig\n}\n",
          hints: [
            "signingConfigs { release { storeFile file('../release.jks'); storePassword '...' ; keyAlias '...'; keyPassword '...' } }",
            "Load from properties: def props = new Properties(); props.load(file('../local.properties').newDataInputStream())",
            "In buildTypes { release { signingConfig signingConfigs.release; minifyEnabled true } }",
          ],
          language: "groovy",
        },
      ],
      subsections: [
        {
          id: "android-m5-p2s1",
          title: "Generating a Keystore",
          content:
            "Generate a keystore with keytool or Android Studio's Generate Signed Bundle wizard. Keep the keystore and passwords safe — if lost, you cannot update your app on Google Play.",
          codeExample:
            "# Generate keystore via command line\nkeytool -genkey -v \\\n  -keystore release-key.jks \\\n  -alias my-app-key \\\n  -keyalg RSA \\\n  -keysize 2048 \\\n  -validity 10000\n\n# Verify keystore contents\nkeytool -list -v -keystore release-key.jks -alias my-app-key\n\n# app/build.gradle - signing config\n# android {\n#   signingConfigs {\n#     release {\n#       storeFile file('../release-key.jks')\n#       storePassword System.getenv('KEYSTORE_PASSWORD')\n#       keyAlias 'my-app-key'\n#       keyPassword System.getenv('KEY_PASSWORD')\n#     }\n#   }\n# }",
          video: { youtubeId: "5Y_E7xvEWjU", title: "Keystore & Signing" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m5-p2s2",
          title: "Building a Release AAB",
          content:
            "Android App Bundle (AAB) is the preferred publishing format. Google Play uses it to generate optimized APKs per device. Build with Gradle: ./gradlew bundleRelease.",
          codeExample:
            "# Build release AAB\n./gradlew bundleRelease\n# Output: app/build/outputs/bundle/release/app-release.aab\n\n# Build release APK (for direct distribution)\n./gradlew assembleRelease\n# Output: app/build/outputs/apk/release/app-release.apk\n\n# Verify the AAB with bundletool\nbundletool build-apks \\\n  --bundle=app-release.aab \\\n  --output=myapp.apks \\\n  --ks=release-key.jks \\\n  --ks-pass=pass:yourpassword \\\n  --ks-key-alias=my-app-key \\\n  --key-pass=pass:yourkeypassword\n\n# Install on connected device for testing\nbundletool install-apks --apks=myapp.apks",
          video: { youtubeId: "5Y_E7xvEWjU", title: "Release Build" },
          flowchart: "if-else",
        },
        {
          id: "android-m5-p2s3",
          title: "Google Play Store Submission",
          content:
            "Create a Play Console account ($25 one-time fee). Complete store listing: title, description, screenshots (2+ per form factor), icon (512x512), feature graphic (1024x500), and content rating.",
          codeExample:
            '// Pre-launch checklist\n// 1. App targets current minSdk (min 23 recommended) and latest targetSdk\n// 2. ProGuard/R8 enabled for release build\n// 3. All permissions declared in Manifest are necessary and justified\n// 4. App does not crash on first launch (check Firebase Crashlytics)\n// 5. Data safety form completed (GDPR compliance)\n// 6. Privacy policy URL provided if app collects data\n// 7. Content rating questionnaire completed\n// 8. Screenshots: phone (1080x1920), 7" tablet, 10" tablet\n// 9. Feature graphic: 1024x500 px\n// 10. App icon: 512x512 px, no rounded corners (Play adds them)\n\n// Versioning in build.gradle\ndefaultConfig {\n    versionCode 5        // Increment for each release\n    versionName "2.1.0"  // Semantic version shown to users\n}',
          video: { youtubeId: "5Y_E7xvEWjU", title: "Play Store Publishing" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "android-m5-p3",
      title: "Part 3: Performance Optimization",
      description: "Profiling, memory leaks, and battery optimization.",
      videoUrl: "https://www.youtube.com/watch?v=ZffMCJdA5Qc",
      notes:
        "Android performance optimization involves eliminating jank (dropped frames), preventing memory leaks (LeakCanary), and reducing battery drain with efficient background work.",
      docs: [
        {
          label: "Android Performance",
          url: "https://developer.android.com/topic/performance",
        },
        { label: "LeakCanary", url: "https://square.github.io/leakcanary/" },
      ],
      partQuiz: [
        {
          question: "What causes 'jank' in Android apps?",
          options: [
            "High memory usage",
            "Frames taking longer than 16ms to render (below 60fps)",
            "Slow network calls",
            "Large APK size",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What tool detects memory leaks in Android apps?",
          options: ["Android Profiler", "LeakCanary", "StrictMode", "Lint"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does StrictMode detect?",
          options: [
            "Memory leaks",
            "Network calls or disk I/O on the main thread",
            "Slow rendering",
            "Battery drain",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Baseline Profile do?",
          options: [
            "Profiles CPU usage",
            "Pre-compiles critical code paths for faster app startup",
            "Sets minimum API level",
            "Measures battery usage",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which is the best way to load images efficiently in Android?",
          options: [
            "BitmapFactory directly",
            "Coil or Glide image loading libraries",
            "Manual HTTP download + ImageView",
            "AsyncTask + BitmapFactory",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "android-m5-p3-prog1",
          title: "Add StrictMode for development",
          description:
            "Write code to enable StrictMode in an Application class that detects disk reads/writes on main thread and network calls on main thread, and penalizes with a log and flash (for debug builds only).",
          starterCode:
            "class MyApp : Application() {\n    override fun onCreate() {\n        super.onCreate()\n        // Enable StrictMode only for debug builds\n    }\n}\n",
          hints: [
            "Wrap in if (BuildConfig.DEBUG) { ... } to avoid enabling in production",
            "StrictMode.setThreadPolicy(StrictMode.ThreadPolicy.Builder().detectDiskReads().detectNetwork().penaltyLog().build())",
            "StrictMode.setVmPolicy(StrictMode.VmPolicy.Builder().detectLeakedSqlLiteObjects().detectLeakedClosableObjects().penaltyLog().build())",
          ],
          language: "kotlin",
        },
      ],
      subsections: [
        {
          id: "android-m5-p3s1",
          title: "Android Profiler & Tracing",
          content:
            "Android Studio Profiler shows CPU, memory, network, and energy usage in real time. System Trace records method calls and frame rendering. Target 60fps (16ms/frame) for smooth UI.",
          codeExample:
            '// Enable tracing in code\nimport android.os.Trace\n\nfun loadData() {\n    Trace.beginSection("loadData")  // Start trace\n    try {\n        // Heavy operation here\n        val data = processLargeList(items)\n    } finally {\n        Trace.endSection()  // Always end in finally\n    }\n}\n\n// StrictMode to catch main-thread violations during development\nif (BuildConfig.DEBUG) {\n    StrictMode.setThreadPolicy(\n        StrictMode.ThreadPolicy.Builder()\n            .detectDiskReads()\n            .detectDiskWrites()\n            .detectNetwork()  // No network on main thread!\n            .penaltyLog()\n            .penaltyFlashScreen()\n            .build()\n    )\n}',
          video: { youtubeId: "ZffMCJdA5Qc", title: "Profiling" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "android-m5-p3s2",
          title: "Memory Leaks & LeakCanary",
          content:
            "Common leaks: anonymous inner classes holding Activity reference, static references to Context, unregistered listeners. LeakCanary detects and reports heap leaks automatically.",
          codeExample:
            "// Common memory leak: anonymous Runnable holding Activity ref\n// BAD:\nhandler.postDelayed(object : Runnable {\n    override fun run() { updateUI() }  // Holds Activity ref!\n}, 5000)\n\n// GOOD: Use WeakReference\nclass SafeRunnable(activity: MainActivity) : Runnable {\n    private val ref = WeakReference(activity)\n    override fun run() { ref.get()?.updateUI() }\n}\n\n// GOOD: Cancel in onDestroy\nprivate val runnable = Runnable { updateUI() }\noverride fun onCreate(...) { handler.postDelayed(runnable, 5000) }\noverride fun onDestroy() { super.onDestroy(); handler.removeCallbacks(runnable) }\n\n// LeakCanary - just add to build.gradle, it works automatically:\n// debugImplementation 'com.squareup.leakcanary:leakcanary-android:2.12'",
          video: { youtubeId: "ZffMCJdA5Qc", title: "Memory Leaks" },
          flowchart: "if-else",
        },
        {
          id: "android-m5-p3s3",
          title: "Battery & Network Optimization",
          content:
            "Use WorkManager for background tasks to respect Doze mode. Batch network requests. Use lazy image loading (Coil/Glide). Cache responses with OkHttp. Avoid waking the CPU unnecessarily.",
          codeExample:
            '// Coil for efficient image loading\n// implementation \'io.coil-kt:coil:2.5.0\'\nimport coil.load\n\nbinding.ivAvatar.load(user.avatarUrl) {\n    crossfade(true)\n    placeholder(R.drawable.ic_user_placeholder)\n    error(R.drawable.ic_user_error)\n    transformations(CircleCropTransformation())\n}\n\n// OkHttp caching\nval cacheDir = File(context.cacheDir, "http_cache")\nval cache = Cache(cacheDir, 10 * 1024 * 1024)  // 10MB cache\nval okHttpClient = OkHttpClient.Builder()\n    .cache(cache)\n    .addInterceptor { chain ->\n        val request = if (isNetworkAvailable)\n            chain.request().newBuilder().header("Cache-Control", "max-age=60").build()\n        else\n            chain.request().newBuilder().header("Cache-Control", "only-if-cached, max-stale=86400").build()\n        chain.proceed(request)\n    }.build()',
          video: { youtubeId: "ZffMCJdA5Qc", title: "Battery Optimization" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "Which folder contains instrumentation tests that run on a device?",
      options: ["test/", "androidTest/", "instrumented/", "devTest/"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What command builds a release Android App Bundle?",
      options: [
        "./gradlew buildRelease",
        "./gradlew bundleRelease",
        "./gradlew assembleRelease",
        "./gradlew releaseBundle",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is jank in Android performance?",
      options: [
        "A type of memory leak",
        "Stuttering caused by frames taking more than 16ms",
        "Battery drain from background tasks",
        "Slow network response",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does LeakCanary do?",
      options: [
        "Prevents network leaks",
        "Detects and reports memory leaks automatically",
        "Monitors battery usage",
        "Finds unused resources",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the preferred publishing format for Google Play?",
      options: ["APK", "AAR", "JAR", "AAB (Android App Bundle)"],
      correct: 3,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "android-m5-test1",
      title: "Release-Ready App Checklist",
      description:
        "Write Kotlin/Gradle code to: (1) configure release signing in build.gradle, (2) enable R8 minification, (3) add LeakCanary as a debug-only dependency, (4) write a unit test asserting a ViewModel's initial state is empty.",
      starterCode:
        "// 1. app/build.gradle - add signing and minification\n// 2. Add LeakCanary debug dependency\n// 3. Write a ViewModel unit test\n\nclass AppViewModel : ViewModel() {\n    private val _items = MutableStateFlow<List<String>>(emptyList())\n    val items: StateFlow<List<String>> = _items.asStateFlow()\n}\n\nclass AppViewModelTest {\n    // TODO: Test initial items list is empty\n}\n",
      hints: [
        "In buildTypes.release: minifyEnabled true; proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'",
        "debugImplementation 'com.squareup.leakcanary:leakcanary-android:2.12'",
        "@Test fun `initial items is empty`() { val vm = AppViewModel(); assertTrue(vm.items.value.isEmpty()) }",
      ],
    },
  ] as CTestProblem[],
};

// ─── Course Assembly ───────────────────────────────────────────────────────────

export const ANDROID_COURSE = {
  id: "android-development-course",
  name: "Android Development",
  icon: "🤖",
  color: "#3ddc84",
  description:
    "Master Android development with Kotlin, Jetpack Compose, MVVM architecture, Room, Retrofit, and Google Play publishing.",
  modules: [
    android_module0,
    android_module1,
    android_module2,
    android_module3,
    android_module4,
    android_module5,
  ] as unknown as CModule[],
  timeLimit: 30,
  allowChat: false,
};

export const ANDROID_ROADMAP_ENTRY = {
  id: "android-development",
  name: "Android Development",
  icon: "🤖",
  color: "#3ddc84",
  description:
    "Build native Android apps with Kotlin, Jetpack Compose, MVVM, Room database, and publish to Google Play.",
  courseId: "android-development-course",
  domains: [
    "Java/Kotlin Fundamentals",
    "UI & Layouts (XML + Compose)",
    "Data & Storage (Room + Retrofit)",
    "Advanced Android (MVVM + WorkManager)",
    "Testing, Signing & Performance",
  ],
};

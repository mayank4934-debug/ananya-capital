import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const gamedev_module0 = {
  id: "gamedev-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "gamedev-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Game Development! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO GAME DEVELOPMENT!

Hey! I'm SO excited to be your companion on this Game Development journey! 🎮 Making games is literally one of the most fun things you can do as a developer — and it teaches you everything: physics, graphics, AI, networking, audio, and more. Let's build something amazing together!

COURSE OVERVIEW
Game development is the process of designing and building interactive experiences. This course focuses on Unity (the world's most popular game engine) and C# scripting. You'll learn the core game loop, physics simulation, 2D and 3D game mechanics, UI systems, audio integration, multiplayer basics, and how to publish your games. The skills you learn here also transfer to VR/AR development.

HOW THIS COURSE WORKS
This course has 3 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write C# game scripts). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~40 hours
This is a fun, hands-on game dev course. Dedicate 1–2 hours per day and you'll have published your first game in about 4–5 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "gamedev-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Game Development course:

1. Game Design Basics — Core game loop, player motivation, level design, balancing mechanics
2. Unity/Godot Fundamentals — Editor navigation, GameObjects, components, scenes, prefabs
3. 2D Games — 2D physics, sprites, tilemaps, animations, camera control
4. 3D Games — 3D transforms, mesh rendering, lights, materials, first/third-person controllers
5. Physics & AI — Rigidbody physics, raycasting, collision detection, NavMesh pathfinding
6. Publishing — Build settings, optimization, platform-specific exports, itch.io/Play Store`,
          codeExample: "",
        },
        {
          id: "gamedev-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — C# game scripting exercises in coding parts

Pure design/theory parts (like "Game Design Principles") do NOT have coding questions. Only parts where you write actual C# scripts include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "gamedev-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what game development is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in scripting topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Game Development journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Game Dev Basics ────────────────────────────────────────────────

const gamedev_module1 = {
  id: "gamedev-basics",
  title: "Module 1: Game Dev Basics",
  outcome:
    "Understand core game design principles and get started with Unity and C# scripting.",
  isLocked: false,
  parts: [
    {
      id: "gamedev-m1-p1",
      title: "Part 1: Game Design Principles",
      description:
        "Core game loop, player motivation, level design, and balancing mechanics.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=G8AT01tuyrk",
      notes:
        "Game design is the art of creating rules and systems that produce meaningful experiences. The core game loop — input, process, feedback — drives every playable moment. Solid level design, balanced difficulty, and reward systems keep players engaged.",
      docs: [
        {
          label: "Game Developer Magazine",
          url: "https://www.gamedeveloper.com/",
        },
        { label: "Unity Learn — Game Design", url: "https://learn.unity.com/" },
      ],
      partQuiz: [
        {
          question: "What is the 'core game loop'?",
          options: [
            "The main menu of a game",
            "The repeated cycle of player input, game processing, and feedback",
            "The storyline from start to finish",
            "The code that runs in the background",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which concept describes gradually increasing difficulty to keep players engaged?",
          options: [
            "Procedural generation",
            "Dynamic difficulty scaling",
            "Difficulty curve",
            "Player onboarding",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does 'player agency' mean in game design?",
          options: [
            "The game's AI controlling NPCs",
            "The set of meaningful choices available to the player",
            "The frame rate of the game",
            "The number of levels in a game",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "gamedev-m1-p1s1",
          title: "Core Game Loop & Player Motivation",
          content:
            "The core game loop is the fundamental repeating cycle: the player takes an action, the game responds, and feedback is given. Every game—from Tetris to open-world RPGs—is built on this loop. Player motivation is driven by intrinsic rewards (mastery, challenge, curiosity) and extrinsic rewards (points, achievements, unlocks). Designers balance challenge against skill using the flow state model to keep players in a zone of optimal engagement.",
          codeExample:
            "// Pseudocode: Core game loop\n\nfunction gameLoop() {\n  while (gameRunning) {\n    // 1. Process input\n    const input = getPlayerInput();  // keyboard / controller / touch\n\n    // 2. Update game state\n    updatePlayer(input);\n    updateEnemies();\n    checkCollisions();\n    updateScore();\n\n    // 3. Render frame\n    clearScreen();\n    drawBackground();\n    drawSprites();\n    drawUI();  // score, health, lives\n\n    // 4. Wait for next frame (60 FPS = ~16ms per frame)\n    await sleep(1000 / 60);\n  }\n}\n\ngameLoop();",
          video: {
            youtubeId: "G8AT01tuyrk",
            title: "Core Game Loop Explained",
          },
          flowchart: "loop",
        },
        {
          id: "gamedev-m1-p1s2",
          title: "Level Design & Balancing",
          content:
            "Level design guides the player through a curated experience — introducing mechanics safely, escalating challenge, and rewarding exploration. Good levels follow the '3 Cs': Character (what the player can do), Camera (what the player can see), and Controls (how the player interacts). Balancing ensures no single strategy is dominant; playtesting data and analytics help tune difficulty, economy, and pacing.",
          codeExample:
            '// Level progression data model (JSON)\n\nconst levels = [\n  {\n    id: 1,\n    name: "Tutorial Meadow",\n    mechanics: ["movement", "jump"],   // introduce basics only\n    enemies: 2,\n    enemySpeed: 1.0,\n    playerLives: 5,\n    timeLimit: null,                   // no pressure on first level\n  },\n  {\n    id: 2,\n    name: "Forest Gauntlet",\n    mechanics: ["movement", "jump", "attack"],\n    enemies: 6,\n    enemySpeed: 1.3,\n    playerLives: 3,\n    timeLimit: 120,\n  },\n  {\n    id: 3,\n    name: "Boss Lair",\n    mechanics: ["movement", "jump", "attack", "dodge"],\n    enemies: 1,     // boss fight — quality over quantity\n    enemySpeed: 2.0,\n    playerLives: 3,\n    timeLimit: 180,\n  },\n];\n\n// Balance check: ensure difficulty increases smoothly\nlevels.forEach((lvl, i) => {\n  if (i > 0) console.assert(lvl.enemies >= levels[i - 1].enemies, `Level ${lvl.id} should be harder`);\n});',
          video: {
            youtubeId: "G8AT01tuyrk",
            title: "Level Design Fundamentals",
          },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "gamedev-m1-p2",
      title: "Part 2: Unity & C# Intro",
      description:
        "Unity editor overview, GameObjects, Components, and writing your first C# script.",
      videoUrl: "https://www.youtube.com/watch?v=XtQMytORBmM",
      notes:
        "Unity is the world's most widely used game engine. Everything in a Unity scene is a GameObject; behaviours are added via Components. C# scripts extend MonoBehaviour and hook into Unity's lifecycle methods: Awake, Start, Update, and FixedUpdate.",
      docs: [
        {
          label: "Unity Manual",
          url: "https://docs.unity3d.com/Manual/index.html",
        },
        {
          label: "Unity C# Scripting Reference",
          url: "https://docs.unity3d.com/ScriptReference/",
        },
      ],
      partQuiz: [
        {
          question: "What is a GameObject in Unity?",
          options: [
            "A C# class that renders graphics",
            "The base entity in a Unity scene that holds Components",
            "A pre-built prefab asset",
            "A type of shader",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which Unity lifecycle method is called once per frame?",
          options: ["Awake()", "Start()", "Update()", "OnEnable()"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does the Transform component control?",
          options: [
            "Texture rendering",
            "Position, rotation, and scale of a GameObject",
            "Physics collisions",
            "Audio playback",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "gamedev-m1-p2-prog1",
          title: "Player Movement Script",
          description:
            "Write a Unity C# MonoBehaviour script PlayerMovement that moves the player left/right using arrow keys at a speed of 5 units/second, and jumps when Space is pressed (apply upward force of 7). Use Rigidbody2D for physics.",
          starterCode:
            "using UnityEngine;\n\npublic class PlayerMovement : MonoBehaviour\n{\n    public float speed = 5f;\n    public float jumpForce = 7f;\n    private Rigidbody2D rb;\n\n    void Start()\n    {\n        // Get the Rigidbody2D component\n    }\n\n    void Update()\n    {\n        // Handle horizontal movement\n        // Handle jump on Space key\n    }\n}\n",
          hints: [
            "Use GetComponent<Rigidbody2D>() in Start() to cache the rigidbody.",
            'For movement: float move = Input.GetAxis("Horizontal"); rb.velocity = new Vector2(move * speed, rb.velocity.y);',
            "For jump: if (Input.GetKeyDown(KeyCode.Space)) rb.velocity = new Vector2(rb.velocity.x, jumpForce);",
          ],
          language: "csharp",
        },
      ],
      subsections: [
        {
          id: "gamedev-m1-p2s1",
          title: "Unity Editor & GameObjects",
          content:
            "The Unity editor is split into five main windows: Scene (visual editing), Game (play preview), Hierarchy (all GameObjects in the scene), Inspector (properties of selected object), and Project (assets). A GameObject is an empty container; it does nothing on its own until you attach Components. Common components: Transform (always present), Rigidbody (physics), Collider (collision detection), SpriteRenderer (2D rendering), MeshRenderer (3D rendering), AudioSource (sound), and custom C# scripts.",
          codeExample:
            '// C#: Accessing and modifying components at runtime\n\nusing UnityEngine;\n\npublic class Example : MonoBehaviour\n{\n    void Start()\n    {\n        // Get a component on this GameObject\n        Rigidbody2D rb = GetComponent<Rigidbody2D>();\n        rb.gravityScale = 2f;\n\n        // Find a child GameObject by name\n        Transform child = transform.Find("Sword");\n\n        // Find any GameObject in the scene by tag\n        GameObject player = GameObject.FindWithTag("Player");\n\n        // Instantiate a prefab at a position\n        // GameObject prefab = assigned in Inspector\n        // Instantiate(prefab, new Vector3(0, 0, 0), Quaternion.identity);\n\n        // Enable / disable a component\n        GetComponent<SpriteRenderer>().enabled = false;\n    }\n}',
          video: { youtubeId: "XtQMytORBmM", title: "Unity Editor Overview" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "gamedev-m1-p2s2",
          title: "C# MonoBehaviour & Lifecycle",
          content:
            "All Unity scripts inherit from MonoBehaviour, which connects your code to the engine's event system. Key lifecycle methods: Awake() — called when the object is first created (before Start), Start() — called before the first frame update, Update() — called every frame (use for input/logic), FixedUpdate() — called at fixed intervals (use for physics), OnCollisionEnter2D() / OnTriggerEnter2D() — collision events. Avoid expensive operations in Update(); cache component references in Awake() or Start().",
          codeExample:
            'using UnityEngine;\n\npublic class LifecycleDemo : MonoBehaviour\n{\n    private Rigidbody2D rb;\n    private SpriteRenderer sr;\n\n    // Called once when the object is created (before Start)\n    void Awake()\n    {\n        rb = GetComponent<Rigidbody2D>();   // cache — avoid GetComponent in Update\n        sr = GetComponent<SpriteRenderer>();\n        Debug.Log("Awake: " + gameObject.name);\n    }\n\n    // Called before the first frame\n    void Start()\n    {\n        rb.gravityScale = 1.5f;\n        Debug.Log("Start");\n    }\n\n    // Called every frame (~60/s)\n    void Update()\n    {\n        float h = Input.GetAxis("Horizontal");\n        transform.Translate(Vector2.right * h * 5f * Time.deltaTime);\n    }\n\n    // Called at fixed physics timestep (0.02s)\n    void FixedUpdate()\n    {\n        // Physics calculations go here\n    }\n\n    // Triggered when colliding with a trigger collider\n    void OnTriggerEnter2D(Collider2D other)\n    {\n        if (other.CompareTag("Coin"))\n        {\n            Destroy(other.gameObject);\n            GameManager.Instance.AddScore(10);\n        }\n    }\n}',
          video: { youtubeId: "XtQMytORBmM", title: "MonoBehaviour Lifecycle" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What are the three stages of the core game loop?",
      options: [
        "Load, Play, Save",
        "Input, Process, Feedback",
        "Design, Build, Test",
        "Start, Update, Render",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "In Unity, which method is called once before the first frame and is used for initialization?",
      options: ["Awake()", "Start()", "Update()", "FixedUpdate()"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What component is ALWAYS present on every Unity GameObject?",
      options: ["Rigidbody", "Collider", "Transform", "SpriteRenderer"],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "gamedev-m1-test1",
      title: "Score Manager",
      description:
        "Write a Unity C# MonoBehaviour class ScoreManager with a static Instance property (singleton), an int Score field, an AddScore(int points) method that increments Score, and a ResetScore() method. Log the score to the console in AddScore.",
      starterCode:
        "using UnityEngine;\n\npublic class ScoreManager : MonoBehaviour\n{\n    public static ScoreManager Instance;\n    public int Score { get; private set; }\n\n    void Awake()\n    {\n        // Set up singleton\n    }\n\n    public void AddScore(int points)\n    {\n        // Increment score and log it\n    }\n\n    public void ResetScore()\n    {\n        // Reset score to 0\n    }\n}\n",
      hints: [
        "In Awake(), set Instance = this; so other scripts can call ScoreManager.Instance.AddScore(10);",
        'In AddScore: Score += points; Debug.Log("Score: " + Score);',
        "In ResetScore: Score = 0;",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Building Games ─────────────────────────────────────────────────

const gamedev_module2 = {
  id: "gamedev-building-games",
  title: "Module 2: Building Games",
  outcome:
    "Implement 2D game mechanics, physics, and collision systems in Unity.",
  isLocked: true,
  parts: [
    {
      id: "gamedev-m2-p1",
      title: "Part 1: 2D Game Mechanics",
      description:
        "Sprites, animation, tilemaps, camera follow, and enemy AI basics.",
      videoUrl: "https://www.youtube.com/watch?v=on9nwbZngyw",
      notes:
        "2D game mechanics involve managing sprites and animations with Unity's Animator, building levels with Tilemaps, and implementing smooth camera follow. Enemy AI can be created with state machines — idle, patrol, chase, attack.",
      docs: [
        {
          label: "Unity 2D Game Dev Guide",
          url: "https://docs.unity3d.com/Manual/Unity2D.html",
        },
        {
          label: "Unity Tilemap Documentation",
          url: "https://docs.unity3d.com/Manual/class-Tilemap.html",
        },
      ],
      partQuiz: [
        {
          question:
            "What Unity feature is used to switch between animation states (e.g., idle to run)?",
          options: [
            "Animator Controller",
            "Timeline",
            "Particle System",
            "NavMesh",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question:
            "Which component is used to build tile-based 2D levels in Unity?",
          options: [
            "SpriteRenderer",
            "Tilemap",
            "MeshRenderer",
            "PolygonCollider2D",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a common simple enemy AI pattern using states?",
          options: [
            "Pathfinding graph",
            "Finite State Machine (FSM)",
            "Neural network",
            "Genetic algorithm",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "gamedev-m2-p1-prog1",
          title: "Camera Follow Script",
          description:
            "Write a Unity C# script CameraFollow that makes the camera smoothly follow a target Transform. Add a public Transform target and a float smoothSpeed = 0.125f. In LateUpdate, lerp the camera position toward the target position (keep Z = -10).",
          starterCode:
            "using UnityEngine;\n\npublic class CameraFollow : MonoBehaviour\n{\n    public Transform target;\n    public float smoothSpeed = 0.125f;\n    public Vector3 offset = new Vector3(0, 1, -10);\n\n    void LateUpdate()\n    {\n        // Smoothly move camera toward target + offset\n    }\n}\n",
          hints: [
            "Calculate desiredPosition = target.position + offset;",
            "Use Vector3.Lerp(transform.position, desiredPosition, smoothSpeed) for smooth follow.",
            "Assign the result to transform.position each LateUpdate.",
          ],
          language: "csharp",
        },
      ],
      subsections: [
        {
          id: "gamedev-m2-p1s1",
          title: "Sprites, Animation & Tilemaps",
          content:
            "A Sprite is a 2D texture displayed via SpriteRenderer. Unity's Animator component plays Animation Clips and transitions between states based on parameters (bool, float, int, trigger). The Animator Controller is a visual state machine — drag clips in, draw transition arrows, and set conditions. Tilemaps let you paint tile assets onto a grid to build levels efficiently; pair with a TilemapCollider2D for automatic collision generation.",
          codeExample:
            'using UnityEngine;\n\npublic class PlayerAnimator : MonoBehaviour\n{\n    private Animator anim;\n    private Rigidbody2D rb;\n\n    void Awake()\n    {\n        anim = GetComponent<Animator>();\n        rb   = GetComponent<Rigidbody2D>();\n    }\n\n    void Update()\n    {\n        float speed = Mathf.Abs(rb.velocity.x);\n\n        // Set float parameter — Animator transitions Idle↔Run when speed crosses threshold\n        anim.SetFloat("Speed", speed);\n\n        // Set bool parameter — triggers Jump animation\n        bool isGrounded = CheckGrounded();\n        anim.SetBool("IsGrounded", isGrounded);\n\n        // Flip sprite based on movement direction\n        if (rb.velocity.x > 0.1f)  transform.localScale = new Vector3( 1, 1, 1);\n        if (rb.velocity.x < -0.1f) transform.localScale = new Vector3(-1, 1, 1);\n    }\n\n    bool CheckGrounded()\n    {\n        // Raycast downward to detect ground\n        return Physics2D.Raycast(transform.position, Vector2.down, 0.6f, LayerMask.GetMask("Ground"));\n    }\n}',
          video: { youtubeId: "on9nwbZngyw", title: "2D Sprites & Animation" },
          flowchart: "if-else",
        },
        {
          id: "gamedev-m2-p1s2",
          title: "Enemy AI with State Machines",
          content:
            "A Finite State Machine (FSM) models enemy behaviour as a set of discrete states (Idle, Patrol, Chase, Attack) with defined transitions. In Unity, implement this with an enum and a switch statement in Update. For patrol, move the enemy between two waypoints; for chase, move toward the player when within detection range; for attack, play an attack animation when in melee range.",
          codeExample:
            'using UnityEngine;\n\npublic class EnemyAI : MonoBehaviour\n{\n    enum State { Idle, Patrol, Chase, Attack }\n    State currentState = State.Patrol;\n\n    public Transform player;\n    public float detectionRange = 5f;\n    public float attackRange = 1f;\n    public float speed = 2f;\n\n    Transform[] waypoints;  // assign in Inspector\n    int waypointIndex = 0;\n\n    void Update()\n    {\n        float distToPlayer = Vector2.Distance(transform.position, player.position);\n\n        // Transition logic\n        if (distToPlayer <= attackRange)      currentState = State.Attack;\n        else if (distToPlayer <= detectionRange) currentState = State.Chase;\n        else                                  currentState = State.Patrol;\n\n        // Behaviour\n        switch (currentState)\n        {\n            case State.Patrol:  Patrol();  break;\n            case State.Chase:   Chase();   break;\n            case State.Attack:  Attack();  break;\n        }\n    }\n\n    void Patrol()\n    {\n        Transform target = waypoints[waypointIndex];\n        transform.position = Vector2.MoveTowards(transform.position, target.position, speed * Time.deltaTime);\n        if (Vector2.Distance(transform.position, target.position) < 0.1f)\n            waypointIndex = (waypointIndex + 1) % waypoints.Length;\n    }\n\n    void Chase()  => transform.position = Vector2.MoveTowards(transform.position, player.position, speed * 1.5f * Time.deltaTime);\n    void Attack() => Debug.Log("Enemy attacks!");\n}',
          video: { youtubeId: "on9nwbZngyw", title: "Enemy AI State Machine" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "gamedev-m2-p2",
      title: "Part 2: Physics & Collisions",
      description:
        "Rigidbody2D, colliders, triggers, raycasting, and physics layers.",
      videoUrl: "https://www.youtube.com/watch?v=KbtcEVCM7bw",
      notes:
        "Unity's 2D physics engine (Box2D) simulates real-world forces. Rigidbody2D drives motion; Collider2D defines shape. Triggers detect overlap without physical response. Raycasting is used for line-of-sight checks, ground detection, and hit scanning.",
      docs: [
        {
          label: "Unity Physics 2D",
          url: "https://docs.unity3d.com/Manual/Physics2DReference.html",
        },
        {
          label: "Rigidbody2D Scripting API",
          url: "https://docs.unity3d.com/ScriptReference/Rigidbody2D.html",
        },
      ],
      partQuiz: [
        {
          question:
            "What is the difference between a Collider and a Trigger in Unity?",
          options: [
            "Colliders are 3D, Triggers are 2D",
            "Colliders produce physical responses; Triggers detect overlap without physical response",
            "Triggers are faster to compute than colliders",
            "Colliders are used only for the player",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which Rigidbody2D constraint prevents a character from rotating when hit?",
          options: [
            "FreezePosition",
            "FreezeRotation",
            "Kinematic mode",
            "Interpolate",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Physics2D.Raycast() return?",
          options: [
            "A bool indicating if anything was hit",
            "A RaycastHit2D struct with hit information",
            "An array of all objects in range",
            "The distance to the nearest wall",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "gamedev-m2-p2-prog1",
          title: "Collectible Coin with Trigger",
          description:
            "Write a Unity C# script Coin. When the Player enters its trigger collider, add 10 to a static Score field on the ScoreManager singleton and destroy the coin GameObject. Use OnTriggerEnter2D.",
          starterCode:
            "using UnityEngine;\n\npublic class Coin : MonoBehaviour\n{\n    void OnTriggerEnter2D(Collider2D other)\n    {\n        // Check if it's the player\n        // Add score\n        // Destroy this coin\n    }\n}\n",
          hints: [
            'Use other.CompareTag("Player") to check if the colliding object is the player.',
            "Call ScoreManager.Instance.AddScore(10); to award points.",
            "Call Destroy(gameObject); to remove the coin from the scene.",
          ],
          language: "csharp",
        },
      ],
      subsections: [
        {
          id: "gamedev-m2-p2s1",
          title: "Rigidbody2D & Colliders",
          content:
            "Rigidbody2D makes a GameObject respond to physics forces — gravity, velocity, and impulses. Body types: Dynamic (full physics), Kinematic (script-controlled, no gravity), Static (immovable). Collider shapes: BoxCollider2D, CircleCollider2D, PolygonCollider2D, CapsuleCollider2D. Freeze Rotation Z in constraints to prevent characters from tipping. Use Interpolate to smooth visual movement between physics steps. Physics Material 2D controls friction and bounciness.",
          codeExample:
            'using UnityEngine;\n\npublic class PhysicsDemo : MonoBehaviour\n{\n    private Rigidbody2D rb;\n\n    void Awake() => rb = GetComponent<Rigidbody2D>();\n\n    void Start()\n    {\n        // Rigidbody settings\n        rb.gravityScale = 1f;\n        rb.constraints  = RigidbodyConstraints2D.FreezeRotation;  // prevent tipping\n        rb.interpolation = RigidbodyInterpolation2D.Interpolate;   // smooth visual\n    }\n\n    // Apply force — good for explosions\n    public void Explode(Vector2 direction)\n        => rb.AddForce(direction * 500f, ForceMode2D.Impulse);\n\n    // Direct velocity — good for platformer movement\n    public void Move(float horizontal)\n        => rb.velocity = new Vector2(horizontal * 5f, rb.velocity.y);\n\n    // Collision callback — physical contact\n    void OnCollisionEnter2D(Collision2D col)\n        => Debug.Log("Hit: " + col.gameObject.name);\n\n    // Trigger callback — overlap detection (no physics response)\n    void OnTriggerEnter2D(Collider2D other)\n        => Debug.Log("Overlapping: " + other.name);\n}',
          video: { youtubeId: "KbtcEVCM7bw", title: "Rigidbody & Colliders" },
          flowchart: "if-else",
        },
        {
          id: "gamedev-m2-p2s2",
          title: "Raycasting & Physics Layers",
          content:
            "Raycasting casts an invisible ray from an origin in a direction and reports what it hits first. Uses: ground detection (raycast down from player feet), line of sight (enemy to player), bullet hit scanning. Physics Layers let you control which objects collide with which — assign layers in the Inspector and configure the Layer Collision Matrix in Project Settings → Physics 2D. Use LayerMask bitmasks in scripts to filter raycast targets.",
          codeExample:
            'using UnityEngine;\n\npublic class RaycastExamples : MonoBehaviour\n{\n    [SerializeField] LayerMask groundLayer;\n    [SerializeField] LayerMask enemyLayer;\n\n    // Ground detection — cast ray downward from feet\n    bool IsGrounded()\n    {\n        RaycastHit2D hit = Physics2D.Raycast(\n            transform.position + Vector3.down * 0.5f,  // origin: just below centre\n            Vector2.down,                               // direction\n            0.2f,                                       // max distance\n            groundLayer                                 // only hit ground layer\n        );\n        Debug.DrawRay(transform.position, Vector2.down * 0.7f, Color.green);  // visualise in Scene view\n        return hit.collider != null;\n    }\n\n    // Line-of-sight check — enemy to player\n    bool CanSeePlayer(Transform player)\n    {\n        Vector2 dir = (player.position - transform.position).normalized;\n        RaycastHit2D hit = Physics2D.Raycast(transform.position, dir, 8f);\n        return hit.collider != null && hit.collider.CompareTag("Player");\n    }\n\n    // Circle cast — wider detection area\n    void DetectNearbyEnemies()\n    {\n        Collider2D[] hits = Physics2D.OverlapCircleAll(transform.position, 3f, enemyLayer);\n        foreach (var h in hits) Debug.Log("Enemy nearby: " + h.name);\n    }\n}',
          video: { youtubeId: "KbtcEVCM7bw", title: "Raycasting & Layers" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "In Unity's 2D physics, which body type is fully simulated by gravity and forces?",
      options: ["Kinematic", "Static", "Dynamic", "Trigger"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What callback is fired when a trigger collider is entered?",
      options: [
        "OnCollisionEnter2D",
        "OnTriggerStay2D",
        "OnTriggerEnter2D",
        "OnCollisionStay2D",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does Physics2D.OverlapCircleAll() return?",
      options: [
        "The closest collider to the origin",
        "An array of all colliders within the circle radius",
        "A bool indicating overlap",
        "The total area of overlap",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "gamedev-m2-test1",
      title: "Damage System",
      description:
        "Write a Unity C# MonoBehaviour Health with a public int maxHealth = 100, a private int currentHealth field, a TakeDamage(int amount) method that reduces health (clamped to 0), a Heal(int amount) method (clamped to maxHealth), and a bool IsDead property. Log 'Player died!' when health reaches 0.",
      starterCode:
        "using UnityEngine;\n\npublic class Health : MonoBehaviour\n{\n    public int maxHealth = 100;\n    private int currentHealth;\n\n    void Start()\n    {\n        // Initialize currentHealth\n    }\n\n    public void TakeDamage(int amount)\n    {\n        // Reduce health, clamp to 0, log death\n    }\n\n    public void Heal(int amount)\n    {\n        // Increase health, clamp to maxHealth\n    }\n\n    public bool IsDead => currentHealth <= 0;\n}\n",
      hints: [
        "In Start(): currentHealth = maxHealth;",
        'TakeDamage: currentHealth = Mathf.Max(0, currentHealth - amount); if (IsDead) Debug.Log("Player died!");',
        "Heal: currentHealth = Mathf.Min(maxHealth, currentHealth + amount);",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Advanced Game Dev ──────────────────────────────────────────────

const gamedev_module3 = {
  id: "gamedev-advanced",
  title: "Module 3: Advanced Game Dev",
  outcome:
    "Implement multiplayer networking and prepare your game for publishing on major platforms.",
  isLocked: true,
  parts: [
    {
      id: "gamedev-m3-p1",
      title: "Part 1: Multiplayer & Networking",
      description:
        "Client-server architecture, Unity Netcode for GameObjects, synchronisation, and lag compensation.",
      videoUrl: "https://www.youtube.com/watch?v=3yuBOB3VrCk",
      notes:
        "Multiplayer games rely on a client-server model where one authoritative host processes game state and clients send inputs. Unity Netcode for GameObjects (NGO) provides NetworkObject, NetworkVariable, and ServerRpc/ClientRpc for synchronized gameplay.",
      docs: [
        {
          label: "Unity Netcode for GameObjects",
          url: "https://docs-multiplayer.unity3d.com/netcode/current/about/",
        },
        {
          label: "Unity Multiplayer Networking",
          url: "https://unity.com/products/netcode",
        },
      ],
      partQuiz: [
        {
          question:
            "In a client-server model, which machine holds the authoritative game state?",
          options: [
            "Each client independently",
            "The server",
            "The player with the lowest ping",
            "A cloud database",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a NetworkVariable do in Unity Netcode?",
          options: [
            "Stores save data locally",
            "Automatically syncs a value from server to all clients",
            "Compresses textures for network transfer",
            "Handles lobby matchmaking",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is 'lag compensation' in multiplayer games?",
          options: [
            "Reducing the server tick rate",
            "Rewinding game state to account for network latency when validating hits",
            "Increasing player speed to match latency",
            "Muting players with high ping",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "gamedev-m3-p1-prog1",
          title: "Synchronized Score with NetworkVariable",
          description:
            "Write a Unity C# NetworkBehaviour class NetworkScore. Add a NetworkVariable<int> Score (read by all, written by server). Add a ServerRpc method AddScoreServerRpc(int points) that increments Score. Add an OnEnable/OnDisable listener that logs score changes to the console.",
          starterCode:
            "using Unity.Netcode;\nusing UnityEngine;\n\npublic class NetworkScore : NetworkBehaviour\n{\n    public NetworkVariable<int> Score = new NetworkVariable<int>(\n        0,\n        NetworkVariableReadPermission.Everyone,\n        NetworkVariableWritePermission.Server\n    );\n\n    public override void OnNetworkSpawn()\n    {\n        // Subscribe to Score changes\n    }\n\n    [ServerRpc(RequireOwnership = false)]\n    public void AddScoreServerRpc(int points)\n    {\n        // Increment Score on server\n    }\n}\n",
          hints: [
            'In OnNetworkSpawn(): Score.OnValueChanged += (oldVal, newVal) => Debug.Log($"Score: {newVal}");',
            "In AddScoreServerRpc: Score.Value += points;",
            "Remember: only the server can write to a NetworkVariable with Server write permission.",
          ],
          language: "csharp",
        },
      ],
      subsections: [
        {
          id: "gamedev-m3-p1s1",
          title: "Client-Server Architecture",
          content:
            "In multiplayer games, the server is the single source of truth. Clients send inputs (e.g., 'move left', 'shoot') to the server via RPCs (Remote Procedure Calls); the server validates and updates game state, then broadcasts the result to all clients. Client-side prediction lets the local client apply input immediately while awaiting server confirmation, reducing perceived latency. Reconciliation corrects any mismatch between predicted and authoritative state.",
          codeExample:
            "// Conceptual flow: Client-Server with client-side prediction\n\n// CLIENT side\nfunction handleInput(input) {\n  // 1. Apply locally (prediction — feels instant)\n  localPlayer.applyInput(input);\n  localInputBuffer.push({ seq: seqNum++, input, timestamp: Date.now() });\n\n  // 2. Send to server\n  socket.emit('playerInput', { seq: seqNum, input });\n}\n\n// SERVER side\nsocket.on('playerInput', ({ seq, input }) => {\n  // 3. Validate and process authoritatively\n  const newState = physics.simulate(serverPlayer, input);\n  serverPlayer.state = newState;\n\n  // 4. Broadcast authoritative state to all clients\n  io.emit('stateUpdate', { playerId, state: newState, seq });\n});\n\n// CLIENT — reconciliation\nsocket.on('stateUpdate', ({ state, seq }) => {\n  // 5. Find matching prediction in buffer\n  const idx = localInputBuffer.findIndex(b => b.seq === seq);\n  localInputBuffer.splice(0, idx + 1); // discard acknowledged inputs\n\n  // 6. If mismatch, snap to server state and re-apply buffered inputs\n  if (!statesMatch(localPlayer.state, state)) {\n    localPlayer.state = state;\n    localInputBuffer.forEach(b => localPlayer.applyInput(b.input)); // replay\n  }\n});",
          video: {
            youtubeId: "3yuBOB3VrCk",
            title: "Client-Server Architecture",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "gamedev-m3-p1s2",
          title: "Unity Netcode — NetworkObject & RPCs",
          content:
            "Unity Netcode for GameObjects (NGO) synchronises multiplayer games. Attach NetworkObject to any GameObject that needs network identity. NetworkBehaviour is the base class for networked scripts (replaces MonoBehaviour). NetworkVariable<T> auto-syncs values server → clients. ServerRpc methods run on the server when called from a client; ClientRpc methods run on all clients when called from the server.",
          codeExample:
            'using Unity.Netcode;\nusing UnityEngine;\n\npublic class NetworkPlayer : NetworkBehaviour\n{\n    // Synced health — server writes, all clients read\n    public NetworkVariable<int> Health = new NetworkVariable<int>(100);\n\n    // Synced position (optional: Unity\'s NetworkTransform handles this automatically)\n    // public NetworkVariable<Vector3> Position = new NetworkVariable<Vector3>();\n\n    void Update()\n    {\n        if (!IsOwner) return;   // only the owning client handles local input\n        if (Input.GetKeyDown(KeyCode.Space))\n            ShootServerRpc();   // ask server to process shot\n    }\n\n    // Runs on SERVER when called from owning client\n    [ServerRpc]\n    void ShootServerRpc()\n    {\n        Debug.Log($"Server: {OwnerClientId} fired!");\n        SpawnBulletClientRpc();   // tell all clients to show bullet\n    }\n\n    // Runs on ALL CLIENTS when called from server\n    [ClientRpc]\n    void SpawnBulletClientRpc()\n    {\n        Debug.Log("All clients: show bullet VFX");\n        // Instantiate bullet prefab locally for visual feedback\n    }\n\n    public override void OnNetworkSpawn()\n    {\n        Health.OnValueChanged += (old, newVal) =>\n            Debug.Log($"Health changed: {old} → {newVal}");\n    }\n}',
          video: { youtubeId: "3yuBOB3VrCk", title: "Unity Netcode Basics" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "gamedev-m3-p2",
      title: "Part 2: Publishing Games",
      description:
        "Build settings, platform optimisation, app store submission, and monetisation.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=V5UxNMTmNl8",
      notes:
        "Publishing a game involves configuring build settings for the target platform (PC, Android, iOS, WebGL), optimising performance (batching, texture compression, object pooling), and submitting to stores with proper metadata, screenshots, and ratings.",
      docs: [
        {
          label: "Unity Build Settings",
          url: "https://docs.unity3d.com/Manual/BuildSettings.html",
        },
        {
          label: "Google Play Console",
          url: "https://play.google.com/console/",
        },
        {
          label: "Apple Developer — App Store Connect",
          url: "https://appstoreconnect.apple.com/",
        },
      ],
      partQuiz: [
        {
          question:
            "Which Unity build target would you choose to release your game as a browser playable demo?",
          options: ["Standalone (Windows)", "Android", "WebGL", "tvOS"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What technique reduces draw calls by combining multiple meshes into one?",
          options: [
            "Texture atlasing",
            "Static batching",
            "LOD (Level of Detail)",
            "Occlusion culling",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is 'object pooling' in game optimisation?",
          options: [
            "Storing assets in cloud storage",
            "Pre-allocating reusable objects instead of instantiating/destroying repeatedly",
            "Merging multiple GameObjects into one",
            "Reducing polygon count on 3D meshes",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "gamedev-m3-p2-prog1",
          title: "Simple Object Pool",
          description:
            "Write a Unity C# MonoBehaviour ObjectPool<T> where T is a Component. The pool initialises with a prefab and a size. GetObject() returns an inactive pooled object (activated); ReturnObject(T obj) deactivates it back to the pool. Use a Queue<T> internally.",
          starterCode:
            "using System.Collections.Generic;\nusing UnityEngine;\n\npublic class ObjectPool<T> : MonoBehaviour where T : Component\n{\n    [SerializeField] private T prefab;\n    [SerializeField] private int poolSize = 20;\n    private Queue<T> pool = new Queue<T>();\n\n    void Start()\n    {\n        // Pre-instantiate poolSize objects, deactivate them\n    }\n\n    public T GetObject()\n    {\n        // Return an inactive object from the pool (activate it first)\n    }\n\n    public void ReturnObject(T obj)\n    {\n        // Deactivate and return to pool\n    }\n}\n",
          hints: [
            "In Start(): for (int i = 0; i < poolSize; i++) { var o = Instantiate(prefab); o.gameObject.SetActive(false); pool.Enqueue(o); }",
            "In GetObject(): var obj = pool.Dequeue(); obj.gameObject.SetActive(true); return obj;",
            "In ReturnObject(): obj.gameObject.SetActive(false); pool.Enqueue(obj);",
          ],
          language: "csharp",
        },
      ],
      subsections: [
        {
          id: "gamedev-m3-p2s1",
          title: "Build Settings & Platform Targets",
          content:
            "Unity's Build Settings (File → Build Settings) let you choose the target platform: Standalone (Windows/Mac/Linux), Android, iOS, or WebGL. Switch platform to reimport assets with platform-specific compression. Player Settings configure app name, bundle ID, icon, splash screen, orientation, and permissions. For Android: minimum API level, keystore signing for Play Store release. For iOS: provisioning profile, Xcode project exported for App Store Connect submission.",
          codeExample:
            '// Unity Build Settings checklist (C# editor script)\n#if UNITY_EDITOR\nusing UnityEditor;\nusing UnityEngine;\n\npublic class BuildHelper : MonoBehaviour\n{\n    [MenuItem("Build/Android Release")]\n    static void BuildAndroid()\n    {\n        // Configure player settings\n        PlayerSettings.applicationIdentifier = "com.yourstudio.yourgame";\n        PlayerSettings.productName           = "My Awesome Game";\n        PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel24; // Android 7.0+\n        PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevel33;\n        PlayerSettings.Android.useCustomKeystore = true;\n        PlayerSettings.Android.keystoreName = "path/to/your.keystore";\n        // PlayerSettings.Android.keystorePass = ...  // don\'t hardcode in production!\n\n        // Build\n        BuildPlayerOptions opts = new BuildPlayerOptions\n        {\n            scenes   = new[] { "Assets/Scenes/MainMenu.unity", "Assets/Scenes/Game.unity" },\n            locationPathName = "Builds/Android/MyGame.aab",\n            target   = BuildTarget.Android,\n            options  = BuildOptions.None,\n        };\n        BuildPipeline.BuildPlayer(opts);\n    }\n}\n#endif',
          video: { youtubeId: "V5UxNMTmNl8", title: "Unity Build & Publish" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "gamedev-m3-p2s2",
          title: "Optimisation & Monetisation",
          content:
            "Performance targets: mobile games aim for 60 FPS within a 200ms frame budget. Key techniques: static batching (combine non-moving objects), texture atlasing (merge small textures to reduce draw calls), object pooling (reuse bullets/enemies), Level of Detail (LOD — swap high-poly for low-poly at distance), occlusion culling (skip rendering hidden objects). Monetisation models: premium (one-time purchase), freemium with IAP (in-app purchases for cosmetics/currency), ad-supported (rewarded ads for extra lives), and subscription.",
          codeExample:
            "// Object Pooling — avoid Instantiate/Destroy every frame\n\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class BulletPool : MonoBehaviour\n{\n    public static BulletPool Instance;\n    [SerializeField] GameObject bulletPrefab;\n    [SerializeField] int initialSize = 30;\n\n    Queue<GameObject> pool = new Queue<GameObject>();\n\n    void Awake()\n    {\n        Instance = this;\n        for (int i = 0; i < initialSize; i++)\n        {\n            var b = Instantiate(bulletPrefab);\n            b.SetActive(false);\n            pool.Enqueue(b);\n        }\n    }\n\n    public GameObject Get(Vector3 pos, Quaternion rot)\n    {\n        var b = pool.Count > 0 ? pool.Dequeue() : Instantiate(bulletPrefab);\n        b.transform.SetPositionAndRotation(pos, rot);\n        b.SetActive(true);\n        return b;\n    }\n\n    public void Return(GameObject b)\n    {\n        b.SetActive(false);\n        pool.Enqueue(b);\n    }\n}\n\n// Usage in Gun.cs — no garbage from Instantiate!\n// BulletPool.Instance.Get(firePoint.position, firePoint.rotation);",
          video: { youtubeId: "V5UxNMTmNl8", title: "Game Optimisation Tips" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "In Unity Netcode, which attribute marks a method to execute on the server when called from a client?",
      options: [
        "[ClientRpc]",
        "[ServerRpc]",
        "[NetworkMethod]",
        "[RemoteCall]",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which Unity build target produces a browser-playable game?",
      options: ["Standalone", "Android", "WebGL", "tvOS"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What problem does object pooling solve in games?",
      options: [
        "Reduces polygon count",
        "Eliminates GC pressure from frequent Instantiate/Destroy calls",
        "Synchronises multiplayer state",
        "Compresses textures at runtime",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "gamedev-m3-test1",
      title: "Spawn Manager with Object Pool",
      description:
        "Write a Unity C# MonoBehaviour SpawnManager that spawns an enemy prefab every 3 seconds using a simple array-based pool of size 10. GetEnemy() returns the first inactive enemy in the array (sets it active); ReturnEnemy(GameObject e) deactivates it. Use InvokeRepeating in Start to call SpawnEnemy every 3 seconds.",
      starterCode:
        "using UnityEngine;\n\npublic class SpawnManager : MonoBehaviour\n{\n    [SerializeField] GameObject enemyPrefab;\n    private GameObject[] pool;\n\n    void Start()\n    {\n        // Create pool of 10 enemies, deactivated\n        // Call SpawnEnemy every 3 seconds\n    }\n\n    void SpawnEnemy()\n    {\n        // Get an inactive enemy from pool and place it at a random X (-5 to 5), Y = 5\n    }\n\n    public GameObject GetEnemy()\n    {\n        // Return first inactive enemy in pool\n        return null;\n    }\n\n    public void ReturnEnemy(GameObject e) { e.SetActive(false); }\n}\n",
      hints: [
        'In Start: pool = new GameObject[10]; for each, Instantiate, SetActive(false), then InvokeRepeating("SpawnEnemy", 1f, 3f);',
        "In GetEnemy: foreach (var e in pool) { if (!e.activeInHierarchy) { e.SetActive(true); return e; } } return null;",
        "In SpawnEnemy: var e = GetEnemy(); if (e != null) e.transform.position = new Vector3(Random.Range(-5f, 5f), 5f, 0);",
      ],
    },
  ] as CTestProblem[],
};

// ─── Assembled Course ─────────────────────────────────────────────────────────

export const GAME_DEV_COURSE = {
  id: "game-development-course",
  name: "Game Development",
  description:
    "Learn game design, Unity C# scripting, 2D physics, multiplayer networking, and publish your own games.",
  icon: "🎮",
  color: "from-violet-700 to-indigo-600",
  totalModules: 3,
  certificate: {
    title: "Game Development Certificate",
    description:
      "Awarded for completing all 3 modules of the Game Development course.",
  },
  modules: [
    gamedev_module0,
    gamedev_module1,
    gamedev_module2,
    gamedev_module3,
  ] as unknown as CModule[],
};

export const GAME_DEV_ROADMAP_ENTRY = {
  id: "game-development",
  name: "Game Development",
  icon: "🎮",
  color: "from-violet-700 to-indigo-600",
  description:
    "Build 2D and 3D games with Unity & C#, implement multiplayer, and publish to major platforms.",
  topics: [
    {
      title: "Game Design Principles & Core Loop",
      videoId: "G8AT01tuyrk",
      duration: "40 min",
    },
    {
      title: "Unity Editor & C# Basics",
      videoId: "XtQMytORBmM",
      duration: "50 min",
    },
    {
      title: "2D Mechanics, Animation & Tilemaps",
      videoId: "on9nwbZngyw",
      duration: "45 min",
    },
    {
      title: "Physics, Collisions & Raycasting",
      videoId: "KbtcEVCM7bw",
      duration: "40 min",
    },
    {
      title: "Multiplayer & Unity Netcode",
      videoId: "3yuBOB3VrCk",
      duration: "55 min",
    },
    {
      title: "Publishing & Optimisation",
      videoId: "V5UxNMTmNl8",
      duration: "35 min",
    },
  ],
  courseId: "game-development-course",
};

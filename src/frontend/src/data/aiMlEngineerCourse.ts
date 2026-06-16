import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const aiml_module0 = {
  id: "aiml-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "aiml-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to AI/ML Engineering! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO AI/ML ENGINEERING!

Hey! I'm beyond excited to be your companion on this AI/ML Engineering journey! 🤖✨ You're stepping into one of the most transformative fields in human history. From building neural networks to deploying LLMs to production, this course will make you a true AI engineer!

COURSE OVERVIEW
AI/ML Engineering combines the science of machine learning with the engineering discipline needed to deploy and operate intelligent systems at scale. You'll study essential mathematics and statistics, Python for AI workflows, classical and deep learning algorithms, natural language processing, and MLOps — the practice of deploying and monitoring ML models in production. AI/ML engineers are among the most sought-after and highest-paid professionals in the industry.

HOW THIS COURSE WORKS
This course has 3 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you implement AI algorithms). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~50 hours
This is the most rigorous course in the roadmap — it spans math, ML theory, deep learning, NLP, and production deployment. Dedicate 1–2 hours per day and you'll be an AI engineer in about 6–7 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "aiml-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this AI/ML Engineer course:

1. Math & Stats — Linear algebra, calculus, probability theory, statistics for ML
2. Python for AI — NumPy, Pandas, scikit-learn, Jupyter notebooks, data pipelines
3. Classical ML — Supervised & unsupervised learning, feature engineering, evaluation metrics
4. Deep Learning — Neural networks, CNNs, RNNs, TensorFlow/Keras, PyTorch
5. NLP — Text processing, transformers, BERT, GPT architectures, prompt engineering
6. MLOps — Model versioning, CI/CD for ML, Docker deployment, monitoring in production
7. Production Deployment — REST APIs for models, A/B testing, scaling ML systems`,
          codeExample: "",
        },
        {
          id: "aiml-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — AI/ML implementation exercises in coding parts

Math-heavy theory parts may not have coding questions. Only parts where you implement algorithms or write Python ML code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "aiml-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what AI/ML engineering is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your AI/ML Engineering journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: AI Fundamentals ────────────────────────────────────────────────

const aiml_module1 = {
  id: "aiml-fundamentals",
  title: "Module 1: AI Fundamentals",
  outcome:
    "Understand the landscape of AI, ML, and Deep Learning, and use Python libraries for AI workflows.",
  isLocked: false,
  parts: [
    {
      id: "aiml-m1-p1",
      title: "Part 1: AI vs ML vs DL",
      description:
        "Understand the hierarchy of AI, ML, and Deep Learning with real-world examples.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=WSbgixdC9g8",
      notes:
        "Artificial Intelligence is the broad field of making machines intelligent. Machine Learning is a subset where systems learn from data without being explicitly programmed. Deep Learning is a subset of ML using multi-layer neural networks. Each layer of the hierarchy is more specialized and data-hungry than the one above.",
      docs: [
        { label: "Google AI Education", url: "https://ai.google/education/" },
        {
          label: "IBM — What is AI?",
          url: "https://www.ibm.com/topics/artificial-intelligence",
        },
      ],
      partQuiz: [
        {
          question:
            "Which is the correct hierarchy from broadest to most specific?",
          options: [
            "DL → ML → AI",
            "ML → DL → AI",
            "AI → ML → DL",
            "AI → DL → ML",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "What distinguishes Machine Learning from traditional programming?",
          options: [
            "ML uses more code",
            "ML learns patterns from data instead of following explicit rules",
            "ML only works with images",
            "ML requires no data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Deep Learning is most commonly associated with which type of model?",
          options: [
            "Decision Trees",
            "Linear Regression",
            "Neural Networks",
            "K-Means Clustering",
          ],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "aiml-m1-p1s1",
          title: "Artificial Intelligence Overview",
          content:
            "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It encompasses reasoning, learning, problem-solving, perception, and language understanding. AI can be narrow (task-specific, like a chess engine) or general (hypothetical human-level reasoning). Early AI used hand-crafted rules; modern AI uses data-driven learning. Applications span healthcare, finance, robotics, and natural language processing.",
          codeExample:
            "# Classic rule-based AI (pre-ML era)\ndef diagnose(symptoms):\n    rules = {\n        ('fever', 'cough'): 'Flu',\n        ('fever', 'rash'):  'Measles',\n        ('cough',):         'Cold',\n    }\n    for pattern, diagnosis in rules.items():\n        if all(s in symptoms for s in pattern):\n            return diagnosis\n    return 'Unknown'\n\nprint(diagnose(['fever', 'cough']))  # Flu\n# Problem: rules don't scale — too many edge cases\n# Solution: let the machine learn rules FROM data (ML)",
          video: {
            youtubeId: "WSbgixdC9g8",
            title: "What is Artificial Intelligence?",
          },
          flowchart: "if-else",
        },
        {
          id: "aiml-m1-p1s2",
          title: "Machine Learning & Deep Learning",
          content:
            "Machine Learning algorithms find patterns in labelled data (supervised), unlabelled data (unsupervised), or via reward signals (reinforcement learning). Algorithms include linear/logistic regression, decision trees, SVMs, and ensemble methods. Deep Learning uses layered artificial neural networks inspired by the brain. Each layer learns increasingly abstract features. DL excels at images, audio, and text but requires large datasets and GPUs.",
          codeExample:
            "# ML vs DL — a concrete comparison\n\n# Traditional ML: hand-craft features, then train model\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.preprocessing import StandardScaler\n\n# You manually engineer features (e.g., pixel statistics)\nX_train_features = extract_features(X_train)   # manual step\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train_features, y_train)\n\n# Deep Learning: learns features automatically\nimport torch.nn as nn\n\nclass SimpleCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(1, 32, kernel_size=3)  # learns edge detectors\n        self.conv2 = nn.Conv2d(32, 64, kernel_size=3) # learns shapes\n        self.fc    = nn.Linear(64 * 5 * 5, 10)        # learns classes\n\n    def forward(self, x):\n        x = torch.relu(self.conv1(x))\n        x = torch.relu(self.conv2(x))\n        return self.fc(x.view(x.size(0), -1))\n# DL automatically extracts features from raw pixels",
          video: { youtubeId: "WSbgixdC9g8", title: "ML vs Deep Learning" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "aiml-m1-p2",
      title: "Part 2: Python AI Libraries",
      description:
        "NumPy, Pandas, Scikit-learn, PyTorch, and TensorFlow essentials for AI/ML.",
      videoUrl: "https://www.youtube.com/watch?v=7eh4d6sabA0",
      notes:
        "Python is the dominant language for AI/ML. NumPy handles numerical arrays, Pandas manages structured data, Scikit-learn provides classical ML algorithms, and PyTorch/TensorFlow are the leading deep learning frameworks. Mastering these libraries is the foundation of every AI engineer's toolkit.",
      docs: [
        { label: "NumPy Documentation", url: "https://numpy.org/doc/" },
        {
          label: "Scikit-learn User Guide",
          url: "https://scikit-learn.org/stable/user_guide.html",
        },
        { label: "PyTorch Docs", url: "https://pytorch.org/docs/stable/" },
      ],
      partQuiz: [
        {
          question:
            "Which library provides N-dimensional array operations optimized for numerical computing?",
          options: ["Pandas", "Matplotlib", "NumPy", "Seaborn"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the primary data structure in Pandas?",
          options: ["ndarray", "tensor", "DataFrame", "Series only"],
          correct: 2,
          xp: 10,
        },
        {
          question:
            "Which deep learning framework uses dynamic computation graphs by default?",
          options: ["TensorFlow 1.x", "Keras standalone", "PyTorch", "Theano"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "aiml-m1-p2-prog1",
          title: "Normalize a NumPy Array",
          description:
            "Write a function normalize(arr) that takes a 1-D NumPy array and returns it min-max normalized so every value falls in [0, 1]. Formula: (x - min) / (max - min).",
          starterCode:
            "import numpy as np\n\ndef normalize(arr):\n    # Return min-max normalized array\n    pass\n\ndata = np.array([10, 20, 30, 40, 50])\nprint(normalize(data))  # [0.  0.25  0.5  0.75  1.]\n",
          hints: [
            "Use arr.min() and arr.max() to get boundaries",
            "Apply the formula element-wise: (arr - arr.min()) / (arr.max() - arr.min())",
            "NumPy broadcasts arithmetic over entire arrays without loops",
          ],
          xp: 20,
        },
      ],
      subsections: [
        {
          id: "aiml-m1-p2s1",
          title: "NumPy & Pandas Essentials",
          content:
            "NumPy's ndarray is the backbone of scientific computing in Python — it supports vectorised operations, broadcasting, and linear algebra. Pandas builds on NumPy to offer labeled DataFrames for tabular data manipulation: loading CSVs, handling missing values, groupby aggregations, and merging datasets. Before feeding data to any ML model, you will preprocess it with these two libraries.",
          codeExample:
            "import numpy as np\nimport pandas as pd\n\n# --- NumPy basics ---\narr = np.array([1, 2, 3, 4, 5], dtype=np.float32)\nprint(arr.mean(), arr.std())   # 3.0, 1.414\n\n# Matrix operations\nA = np.array([[1,2],[3,4]])\nB = np.linalg.inv(A)           # matrix inverse\nprint(A @ B)                   # identity matrix\n\n# --- Pandas basics ---\ndf = pd.read_csv('data.csv')\nprint(df.info())               # dtypes, non-null counts\nprint(df.describe())           # min/max/mean/std\n\n# Handle missing values\ndf['age'].fillna(df['age'].median(), inplace=True)\ndf.dropna(subset=['label'], inplace=True)\n\n# Feature engineering\ndf['bmi'] = df['weight'] / (df['height'] ** 2)\ngrouped = df.groupby('category')['score'].mean()\nprint(grouped)",
          video: { youtubeId: "7eh4d6sabA0", title: "NumPy & Pandas for AI" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "aiml-m1-p2s2",
          title: "Scikit-learn & PyTorch Intro",
          content:
            "Scikit-learn provides a uniform API for classical ML: fit(), predict(), and score() work the same across all algorithms. It includes preprocessing, pipelines, cross-validation, and metrics. PyTorch is the framework of choice for research and production deep learning — tensors run on GPU, autograd computes gradients automatically, and nn.Module provides composable layers. The training loop follows: forward pass → compute loss → backward pass → optimizer step.",
          codeExample:
            "# --- Scikit-learn: train a classifier in 5 lines ---\nfrom sklearn.datasets import load_iris\nfrom sklearn.ensemble import GradientBoostingClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nX, y = load_iris(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nclf = GradientBoostingClassifier()\nclf.fit(X_train, y_train)\nprint(accuracy_score(y_test, clf.predict(X_test)))  # ~0.97\n\n# --- PyTorch: training loop skeleton ---\nimport torch, torch.nn as nn\n\nmodel     = SimpleMLP(input_dim=4, hidden=16, output_dim=3)\noptimizer = torch.optim.Adam(model.parameters(), lr=1e-3)\ncriterion = nn.CrossEntropyLoss()\n\nfor epoch in range(100):\n    optimizer.zero_grad()          # 1. clear gradients\n    logits = model(X_tensor)       # 2. forward pass\n    loss   = criterion(logits, y_tensor)  # 3. compute loss\n    loss.backward()                # 4. backprop\n    optimizer.step()               # 5. update weights\n    if epoch % 10 == 0:\n        print(f'Epoch {epoch}: loss={loss.item():.4f}')",
          video: { youtubeId: "7eh4d6sabA0", title: "Scikit-learn & PyTorch" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Deep Learning is a subset of which field?",
      options: [
        "Robotics",
        "Machine Learning",
        "Expert Systems",
        "Computer Vision only",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which Python library is best suited for tabular data manipulation and analysis?",
      options: ["NumPy", "PyTorch", "Pandas", "Matplotlib"],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "In a PyTorch training loop, what must you do before calling loss.backward()?",
      options: [
        "Call model.eval()",
        "Call optimizer.zero_grad()",
        "Call torch.save()",
        "Call model.train() only",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "aiml-m1-test1",
      title: "Build a Simple Linear Classifier",
      description:
        "Using scikit-learn, load the breast cancer dataset, split it 80/20, train a LogisticRegression model, and print the test accuracy. Your solution should print a float between 0 and 1.",
      starterCode:
        "from sklearn.datasets import load_breast_cancer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\n# Load dataset\n# Split into train/test\n# Train model\n# Print accuracy\n",
      hints: [
        "Use load_breast_cancer(return_X_y=True) to get X, y",
        "train_test_split(X, y, test_size=0.2, random_state=42)",
        "LogisticRegression(max_iter=1000) avoids convergence warnings; call .fit() then accuracy_score(y_test, model.predict(X_test))",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Building AI Systems ───────────────────────────────────────────

const aiml_module2 = {
  id: "aiml-building-ai-systems",
  title: "Module 2: Building AI Systems",
  outcome:
    "Train and fine-tune models, and engineer effective prompts for large language models.",
  isLocked: true,
  parts: [
    {
      id: "aiml-m2-p1",
      title: "Part 1: Training & Fine-tuning Models",
      description:
        "Data pipelines, hyperparameter tuning, transfer learning, and fine-tuning pre-trained models.",
      videoUrl: "https://www.youtube.com/watch?v=1waHlpKiNyY",
      notes:
        "Training a model involves defining an architecture, choosing a loss function, and iteratively updating weights via gradient descent. Fine-tuning starts from a pre-trained model (like ResNet or BERT) and adapts it to a new task with far less data and compute than training from scratch.",
      docs: [
        {
          label: "Hugging Face — Fine-tuning Guide",
          url: "https://huggingface.co/docs/transformers/training",
        },
        {
          label: "PyTorch Transfer Learning Tutorial",
          url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",
        },
      ],
      partQuiz: [
        {
          question:
            "What is the purpose of a validation set during model training?",
          options: [
            "To train the model faster",
            "To monitor generalization and tune hyperparameters without touching the test set",
            "To replace the test set",
            "To store model checkpoints",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is transfer learning?",
          options: [
            "Copying code from one project to another",
            "Reusing a model trained on one task as the starting point for a different task",
            "Transferring data between databases",
            "Moving a model from CPU to GPU",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which technique helps prevent overfitting by randomly deactivating neurons during training?",
          options: [
            "Batch Normalization",
            "Dropout",
            "L1 Regularization",
            "Early Stopping",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "aiml-m2-p1-prog1",
          title: "Train/Validation Split & Accuracy",
          description:
            "Write a function evaluate_model(model, X, y, test_size=0.2) using scikit-learn that splits the data, fits the model on the training portion, and returns the validation accuracy as a float.",
          starterCode:
            "from sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\ndef evaluate_model(model, X, y, test_size=0.2):\n    # Split, fit, and return validation accuracy\n    pass\n\n# Quick test\nfrom sklearn.datasets import load_iris\nfrom sklearn.tree import DecisionTreeClassifier\nX, y = load_iris(return_X_y=True)\nprint(evaluate_model(DecisionTreeClassifier(), X, y))  # ~0.93\n",
          hints: [
            "Use train_test_split(X, y, test_size=test_size, random_state=42)",
            "Call model.fit(X_train, y_train) then model.predict(X_val)",
            "Return accuracy_score(y_val, predictions)",
          ],
          xp: 20,
        },
      ],
      subsections: [
        {
          id: "aiml-m2-p1s1",
          title: "Training Pipelines & Hyperparameter Tuning",
          content:
            "A training pipeline covers data ingestion, preprocessing (scaling, encoding), model definition, loss selection, optimizer configuration, and the training loop. Hyperparameters (learning rate, batch size, architecture depth) are set before training and tuned via grid search, random search, or Bayesian optimisation. Track experiments with tools like MLflow or Weights & Biases. Regularisation techniques (dropout, L2, early stopping) combat overfitting.",
          codeExample:
            "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.model_selection import GridSearchCV\n\n# Build a preprocessing + model pipeline\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('svm',    SVC()),\n])\n\n# Define hyperparameter grid\nparam_grid = {\n    'svm__C':      [0.1, 1, 10],\n    'svm__kernel': ['rbf', 'linear'],\n    'svm__gamma':  ['scale', 'auto'],\n}\n\n# 5-fold cross-validated grid search\nsearch = GridSearchCV(pipe, param_grid, cv=5, scoring='accuracy', n_jobs=-1)\nsearch.fit(X_train, y_train)\n\nprint('Best params:', search.best_params_)\nprint('CV accuracy:', search.best_score_)\nprint('Test accuracy:', search.score(X_test, y_test))",
          video: {
            youtubeId: "1waHlpKiNyY",
            title: "Training Pipelines & Hyperparameter Tuning",
          },
          flowchart: "loop",
        },
        {
          id: "aiml-m2-p1s2",
          title: "Transfer Learning & Fine-tuning",
          content:
            "Pre-trained models encode general knowledge from large datasets. Transfer learning reuses these weights for a new task. Strategies: feature extraction (freeze all layers, train only the new head) or full fine-tuning (update all weights with a small learning rate). Hugging Face Transformers makes fine-tuning BERT, GPT-2, and vision models accessible with a few lines of code. Use a learning rate scheduler and gradient clipping for stable fine-tuning.",
          codeExample:
            "import torch\nimport torch.nn as nn\nimport torchvision.models as models\n\n# 1. Load a pre-trained ResNet-50\nresnet = models.resnet50(pretrained=True)\n\n# 2. Feature extraction: freeze all layers\nfor param in resnet.parameters():\n    param.requires_grad = False\n\n# 3. Replace final layer for 10-class task\nresnet.fc = nn.Linear(resnet.fc.in_features, 10)\n\n# Only the new head is trainable\noptimizer = torch.optim.Adam(resnet.fc.parameters(), lr=1e-3)\n\n# 4. After initial training, unfreeze for fine-tuning\nfor param in resnet.parameters():\n    param.requires_grad = True\n\n# Use smaller LR to avoid destroying pre-trained features\noptimizer = torch.optim.Adam([\n    {'params': resnet.layer4.parameters(), 'lr': 1e-4},\n    {'params': resnet.fc.parameters(),     'lr': 1e-3},\n])",
          video: {
            youtubeId: "1waHlpKiNyY",
            title: "Transfer Learning & Fine-tuning",
          },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "aiml-m2-p2",
      title: "Part 2: LLMs & Prompt Engineering",
      description:
        "How large language models work, and techniques for writing effective prompts.",
      videoUrl: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
      notes:
        "Large Language Models (LLMs) like GPT-4 and Claude are transformer-based models trained on vast text corpora. Prompt engineering is the practice of crafting inputs that elicit the best model outputs without retraining. Techniques include zero-shot, few-shot, chain-of-thought, and role prompting.",
      docs: [
        {
          label: "OpenAI Prompt Engineering Guide",
          url: "https://platform.openai.com/docs/guides/prompt-engineering",
        },
        {
          label: "Anthropic Claude Docs",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
        },
      ],
      partQuiz: [
        {
          question: "What is 'few-shot prompting'?",
          options: [
            "Training the model on a few examples",
            "Providing a few input-output examples in the prompt to guide the model",
            "Limiting the model to short outputs",
            "Querying the model multiple times",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which prompting technique asks the model to explain its reasoning step by step?",
          options: [
            "Zero-shot",
            "Role prompting",
            "Chain-of-thought",
            "Temperature sampling",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does a higher 'temperature' setting do in an LLM?",
          options: [
            "Makes responses faster",
            "Increases randomness and creativity of outputs",
            "Reduces token usage",
            "Makes the model more deterministic",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "aiml-m2-p2-prog1",
          title: "Build a Few-Shot Prompt",
          description:
            "Write a Python function build_few_shot_prompt(task_description, examples, user_query) that constructs a few-shot prompt string. examples is a list of dicts with 'input' and 'output' keys. Return the complete prompt string ready to send to an LLM.",
          starterCode:
            "def build_few_shot_prompt(task_description, examples, user_query):\n    # Build and return the prompt string\n    pass\n\nexamples = [\n    {'input': 'The food was terrible.', 'output': 'Negative'},\n    {'input': 'I loved the movie!',     'output': 'Positive'},\n]\nprint(build_few_shot_prompt(\n    'Classify sentiment as Positive or Negative.',\n    examples,\n    'The service was slow but food was great.'\n))\n",
          hints: [
            "Start with the task description on the first line",
            'For each example, append \'Input: {e["input"]}\\nOutput: {e["output"]}\'',
            "End with 'Input: {user_query}\\nOutput:' to signal the model where to respond",
          ],
          xp: 20,
        },
      ],
      subsections: [
        {
          id: "aiml-m2-p2s1",
          title: "How LLMs Work",
          content:
            "LLMs are transformer models trained on next-token prediction over internet-scale text. The attention mechanism lets every token attend to every other token in the context window. After pre-training, models are aligned via RLHF (Reinforcement Learning from Human Feedback) to follow instructions safely. Key concepts: tokens (sub-word units), context window (max input length), temperature (randomness), top-p sampling, and system prompts.",
          codeExample:
            "# Calling an LLM via OpenAI API\nfrom openai import OpenAI\n\nclient = OpenAI(api_key='YOUR_KEY')\n\nresponse = client.chat.completions.create(\n    model='gpt-4o',\n    messages=[\n        {'role': 'system',  'content': 'You are a helpful coding tutor.'},\n        {'role': 'user',    'content': 'Explain recursion in 2 sentences.'},\n    ],\n    temperature=0.7,    # 0=deterministic, 2=very random\n    max_tokens=200,\n    top_p=0.95,         # nucleus sampling threshold\n)\n\nreply = response.choices[0].message.content\nprint(reply)\n\n# Token counting before sending\nimport tiktoken\nenc = tiktoken.encoding_for_model('gpt-4o')\ntokens = enc.encode('Hello, how are you?')\nprint(f'Token count: {len(tokens)}')",
          video: { youtubeId: "zjkBMFhNj_g", title: "How LLMs Work" },
          flowchart: "if-else",
        },
        {
          id: "aiml-m2-p2s2",
          title: "Prompt Engineering Techniques",
          content:
            "Zero-shot prompting gives no examples and relies on the model's training. Few-shot prompting provides input-output examples to steer the format. Chain-of-thought (CoT) prompts the model to reason step by step before answering — dramatically improves multi-step reasoning. Role prompting assigns a persona to shape tone and expertise. Retrieval-Augmented Generation (RAG) injects relevant documents into the prompt to ground answers in facts.",
          codeExample:
            '# Zero-shot\nprompt_zero = \'Classify the sentiment: "The product broke after one day."\\nSentiment:\'\n\n# Few-shot\nprompt_few = """Classify sentiment as Positive or Negative.\n\nInput: The food was amazing!\nOutput: Positive\n\nInput: The delivery was late and broken.\nOutput: Negative\n\nInput: Decent quality but overpriced.\nOutput:"""\n\n# Chain-of-thought\nprompt_cot = """Solve step by step:\nIf a train travels 120 km in 2 hours, then slows to 60 km/h for 1 hour,\nwhat is the total distance?\nThink step by step:"""\n\n# Role prompting\nprompt_role = """You are a senior data scientist reviewing code.\nIdentify bugs and suggest improvements in this snippet:\n\ndef mean(lst):\n    return sum(lst) / len(lst)\n"""\n\n# RAG — inject context\nretrieved_doc = fetch_relevant_docs(user_query)  # vector DB lookup\nprompt_rag = f"Context:\\n{retrieved_doc}\\n\\nQuestion: {user_query}\\nAnswer:"',
          video: {
            youtubeId: "zjkBMFhNj_g",
            title: "Prompt Engineering Techniques",
          },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question:
        "What is the main advantage of transfer learning over training from scratch?",
      options: [
        "It requires more data",
        "It reuses pre-trained weights, reducing data and compute requirements",
        "It always achieves higher accuracy",
        "It eliminates the need for a GPU",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Chain-of-thought prompting primarily improves model performance on which type of task?",
      options: [
        "Image classification",
        "Simple keyword lookup",
        "Multi-step reasoning and math problems",
        "Sentiment analysis",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question:
        "In fine-tuning, why should you use a smaller learning rate than during pre-training?",
      options: [
        "To make training faster",
        "To preserve pre-trained knowledge and avoid catastrophic forgetting",
        "To increase batch size",
        "To reduce model size",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "aiml-m2-test1",
      title: "Few-Shot Prompt Constructor",
      description:
        "Write a Python function build_prompt(system, examples, query) that returns a single string: the system message, then each example as 'Q: ...\\nA: ...', then 'Q: {query}\\nA:'. Print the result for a sentiment task with 2 examples.",
      starterCode:
        "def build_prompt(system, examples, query):\n    # Return the complete prompt string\n    pass\n\nexamples = [\n    ('Great product!', 'Positive'),\n    ('Terrible quality.', 'Negative'),\n]\nprint(build_prompt(\n    'You are a sentiment classifier.',\n    examples,\n    'It works but could be better.'\n))\n",
      hints: [
        "Start with f'System: {system}\\n\\n'",
        "Join each example with '\\n'.join(f'Q: {q}\\nA: {a}' for q, a in examples)",
        "Append '\\nQ: {query}\\nA:' at the end to elicit the model's response",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: AI in Production ───────────────────────────────────────────────

const aiml_module3 = {
  id: "aiml-in-production",
  title: "Module 3: AI in Production",
  outcome:
    "Deploy ML models with MLOps best practices and apply AI ethics and safety principles.",
  isLocked: true,
  parts: [
    {
      id: "aiml-m3-p1",
      title: "Part 1: MLOps & Model Deployment",
      description:
        "CI/CD for ML, model serving, monitoring, and drift detection in production.",
      videoUrl: "https://www.youtube.com/watch?v=9BgIDqAzfuA",
      notes:
        "MLOps applies DevOps principles to machine learning. It covers versioning data and models, automating training pipelines, deploying models as APIs, and monitoring them for performance degradation. Tools like MLflow, DVC, and FastAPI are central to modern MLOps workflows.",
      docs: [
        {
          label: "MLflow Documentation",
          url: "https://mlflow.org/docs/latest/index.html",
        },
        { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com/" },
        {
          label: "Google Cloud Vertex AI",
          url: "https://cloud.google.com/vertex-ai/docs",
        },
      ],
      partQuiz: [
        {
          question: "What does model drift refer to in production AI systems?",
          options: [
            "The model moving to a new server",
            "A gradual degradation in model performance as real-world data distributions change",
            "The model being retrained too often",
            "Memory leaks in the inference server",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which tool is commonly used for experiment tracking and model registry in MLOps?",
          options: ["Docker", "MLflow", "Kubernetes", "Nginx"],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "What is the primary purpose of containerising an ML model with Docker?",
          options: [
            "To speed up training",
            "To ensure reproducibility and portability across environments",
            "To reduce model size",
            "To add authentication",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "aiml-m3-p1-prog1",
          title: "Serve a Model with FastAPI",
          description:
            "Write a minimal FastAPI app that loads a scikit-learn model from 'model.pkl' and exposes a POST /predict endpoint. The request body has a field 'features' (list of floats) and the response returns {'prediction': int}.",
          starterCode:
            "from fastapi import FastAPI\nfrom pydantic import BaseModel\nimport joblib\nimport numpy as np\n\napp = FastAPI()\nmodel = joblib.load('model.pkl')  # pre-trained classifier\n\nclass PredictRequest(BaseModel):\n    features: list[float]\n\n@app.post('/predict')\ndef predict(req: PredictRequest):\n    # Convert features to numpy, run inference, return prediction\n    pass\n",
          hints: [
            "Convert req.features to np.array([req.features]) — shape (1, n_features)",
            "Call model.predict(X) which returns an array; take index [0]",
            "Return {'prediction': int(prediction)}",
          ],
          xp: 20,
        },
      ],
      subsections: [
        {
          id: "aiml-m3-p1s1",
          title: "MLOps Pipelines & Model Versioning",
          content:
            "MLOps standardises the path from experiment to production. Version your data with DVC, track experiments with MLflow (parameters, metrics, artifacts), and register champion models in a Model Registry. CI/CD pipelines automatically retrain and evaluate models when new data arrives. Infrastructure as Code (Terraform) provisions GPU instances reproducibly. Feature stores (Feast, Tecton) serve consistent features to both training and inference.",
          codeExample:
            "import mlflow\nimport mlflow.sklearn\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\nmlflow.set_experiment('iris-classification')\n\nwith mlflow.start_run():\n    # Log hyperparameters\n    n_estimators = 100\n    mlflow.log_param('n_estimators', n_estimators)\n    mlflow.log_param('max_depth', 5)\n\n    # Train\n    model = RandomForestClassifier(n_estimators=n_estimators, max_depth=5)\n    model.fit(X_train, y_train)\n\n    # Log metrics\n    acc = accuracy_score(y_test, model.predict(X_test))\n    mlflow.log_metric('test_accuracy', acc)\n\n    # Log model artifact\n    mlflow.sklearn.log_model(model, 'rf-model')\n\nprint(f'Logged run — accuracy: {acc:.3f}')\n# View in MLflow UI: mlflow ui",
          video: {
            youtubeId: "9BgIDqAzfuA",
            title: "MLOps & Model Versioning",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "aiml-m3-p1s2",
          title: "Model Serving & Monitoring",
          content:
            "Serving models as REST APIs (FastAPI, TorchServe, TF Serving) decouples inference from the application. Containerise with Docker, orchestrate with Kubernetes for scaling. Monitor prediction distributions for data drift (Evidently, WhyLabs), latency, and error rates with Prometheus/Grafana. Set up alerting for accuracy drops. Shadow deployments and A/B testing safely validate new models before full rollout.",
          codeExample:
            "# FastAPI model server\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\nimport joblib, numpy as np, time\n\napp   = FastAPI(title='Iris Classifier API')\nmodel = joblib.load('iris_model.pkl')\n\nclass Features(BaseModel):\n    sepal_length: float\n    sepal_width:  float\n    petal_length: float\n    petal_width:  float\n\nclass Prediction(BaseModel):\n    label: int\n    class_name: str\n    latency_ms: float\n\nCLASS_NAMES = ['setosa', 'versicolor', 'virginica']\n\n@app.post('/predict', response_model=Prediction)\ndef predict(f: Features):\n    start = time.perf_counter()\n    X = np.array([[f.sepal_length, f.sepal_width, f.petal_length, f.petal_width]])\n    label = int(model.predict(X)[0])\n    return Prediction(\n        label=label,\n        class_name=CLASS_NAMES[label],\n        latency_ms=(time.perf_counter() - start) * 1000,\n    )\n# Run: uvicorn server:app --reload\n# Docs: http://localhost:8000/docs",
          video: {
            youtubeId: "9BgIDqAzfuA",
            title: "Model Serving & Monitoring",
          },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "aiml-m3-p2",
      title: "Part 2: AI Ethics & Safety",
      description:
        "Fairness, bias mitigation, explainability, and responsible AI deployment.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=59bMh59JQDo",
      notes:
        "AI ethics ensures that AI systems are fair, transparent, accountable, and safe. Bias in training data leads to discriminatory outcomes. Explainability tools like SHAP and LIME help stakeholders understand model decisions. Regulatory frameworks (EU AI Act) are making responsible AI a legal requirement.",
      docs: [
        {
          label: "Google Responsible AI Practices",
          url: "https://ai.google/responsibility/responsible-ai-practices/",
        },
        { label: "SHAP Documentation", url: "https://shap.readthedocs.io/" },
        {
          label: "EU AI Act Overview",
          url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        },
      ],
      partQuiz: [
        {
          question: "What is 'algorithmic bias' in AI?",
          options: [
            "A bug in the training code",
            "Systematic unfair outcomes caused by biased training data or model design",
            "The model being too slow",
            "Overfitting to the training set",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "SHAP values are used primarily for what purpose?",
          options: [
            "Speeding up model inference",
            "Explaining individual model predictions by quantifying each feature's contribution",
            "Reducing model size",
            "Generating adversarial examples",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which principle states that AI decisions should be understandable and auditable by humans?",
          options: [
            "Scalability",
            "Explainability / Transparency",
            "Latency",
            "Regularisation",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      partProgrammingQuestions: [
        {
          id: "aiml-m3-p2-prog1",
          title: "Detect Label Imbalance",
          description:
            "Write a function check_balance(y) that takes a list or NumPy array of class labels and returns a dict mapping each class label to its percentage (0–100, rounded to 1 decimal). Warn if any class has less than 10%.",
          starterCode:
            "import numpy as np\n\ndef check_balance(y):\n    # Return {label: percentage} and print a warning for minority classes\n    pass\n\nlabels = [0]*80 + [1]*15 + [2]*5\nprint(check_balance(labels))\n# Expected: {0: 80.0, 1: 15.0, 2: 5.0}\n# Warning: class 2 is underrepresented (5.0%)\n",
          hints: [
            "Use np.unique(y, return_counts=True) to get labels and their counts",
            "Percentage = count / len(y) * 100 — round to 1 decimal",
            "Iterate the result dict and print a warning when percentage < 10",
          ],
          xp: 20,
        },
      ],
      subsections: [
        {
          id: "aiml-m3-p2s1",
          title: "Fairness & Bias Mitigation",
          content:
            "AI bias arises from unrepresentative training data, proxy variables, or flawed labelling. Types include historical bias (past discrimination encoded in data), representation bias (underrepresented groups), and measurement bias (inconsistent data collection). Mitigation strategies: re-sample to balance classes, re-weight examples, use fairness constraints during training (Fairlearn), perform disaggregated evaluation across demographic groups, and audit models with third-party tools.",
          codeExample:
            "import pandas as pd\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\n# Load hiring dataset\ndf = pd.read_csv('hiring.csv')  # features: skills, education, gender\nX = df.drop(columns=['hired', 'gender'])\ny = df['hired']\n\n# Train model\nmodel = LogisticRegression()\nmodel.fit(X, y)\n\n# Disaggregated evaluation (fairness audit)\nfor gender, group in df.groupby('gender'):\n    X_g = group.drop(columns=['hired', 'gender'])\n    y_g = group['hired']\n    preds = model.predict(X_g)\n    print(f'\\n--- Gender: {gender} ---')\n    print(classification_report(y_g, preds))\n\n# If accuracy gap > 5%, investigate bias\n# Solutions: re-sample minority, adjust decision threshold per group,\n# or use Fairlearn's ExponentiatedGradient with DemographicParity constraint",
          video: { youtubeId: "59bMh59JQDo", title: "AI Fairness & Bias" },
          flowchart: "if-else",
        },
        {
          id: "aiml-m3-p2s2",
          title: "Explainability & Responsible Deployment",
          content:
            "Explainability bridges the gap between model accuracy and stakeholder trust. SHAP (SHapley Additive exPlanations) assigns each feature a contribution value per prediction — globally for feature importance, locally for individual decisions. LIME creates local linear approximations. Responsible deployment includes documenting model cards (purpose, limitations, training data), implementing human-in-the-loop review for high-stakes decisions, and complying with regulations like GDPR and the EU AI Act.",
          codeExample:
            "import shap\nimport numpy as np\nfrom sklearn.ensemble import GradientBoostingClassifier\n\n# Train a model\nmodel = GradientBoostingClassifier().fit(X_train, y_train)\n\n# Create SHAP explainer\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer.shap_values(X_test)\n\n# --- Global feature importance ---\nshap.summary_plot(shap_values, X_test, feature_names=feature_names)\n\n# --- Local explanation for one prediction ---\nidx = 0\nprint('Prediction:', model.predict([X_test[idx]])[0])\nshap.force_plot(\n    explainer.expected_value,\n    shap_values[idx],\n    X_test[idx],\n    feature_names=feature_names,\n)\n\n# Model Card essentials:\n# model_card = {\n#   'model_details': {'name': 'Loan Approval v1.2', 'type': 'GBM'},\n#   'intended_use': 'Assist loan officers — not autonomous decisions',\n#   'limitations': 'Trained on 2018–2022 data; may not reflect current economy',\n#   'fairness_metrics': {'demographic_parity_gap': 0.03},\n# }",
          video: {
            youtubeId: "59bMh59JQDo",
            title: "AI Explainability & Responsible AI",
          },
          flowchart: "compilation-pipeline",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the main purpose of a Model Registry in MLOps?",
      options: [
        "To store training data",
        "To version, stage, and manage the lifecycle of trained model artifacts",
        "To monitor user traffic",
        "To generate synthetic data",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which tool generates SHAP values to explain individual predictions of tree-based models?",
      options: [
        "Pandas Profiling",
        "LIME only",
        "shap.TreeExplainer",
        "TensorBoard",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "Disaggregated evaluation in AI fairness means:",
      options: [
        "Training separate models per group",
        "Evaluating model performance broken down by demographic subgroups to detect disparate impact",
        "Removing sensitive features from the dataset",
        "Using ensemble models",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "aiml-m3-test1",
      title: "Feature Importance Reporter",
      description:
        "Train a RandomForestClassifier on the breast cancer dataset and print the top 5 most important features with their importance scores, sorted descending. Use feature_importances_ and the dataset's feature_names.",
      starterCode:
        "from sklearn.datasets import load_breast_cancer\nfrom sklearn.ensemble import RandomForestClassifier\nimport numpy as np\n\ndata = load_breast_cancer()\nX, y = data.data, data.target\nfeature_names = data.feature_names\n\n# Train model\n# Get top-5 features by importance\n# Print: 'feature_name: importance_score' sorted descending\n",
      hints: [
        "After fitting, access model.feature_importances_ — a numpy array of length n_features",
        "Use np.argsort(importances)[::-1][:5] to get indices of top-5 features",
        "Zip with feature_names and print each pair formatted to 4 decimal places",
      ],
    },
  ] as CTestProblem[],
};

// ─── Assembled Course ─────────────────────────────────────────────────────────

export const AIML_ENGINEER_COURSE = {
  id: "aiml-engineer-course",
  name: "AI/ML Engineer",
  description:
    "Master AI fundamentals, model training and fine-tuning, LLM prompt engineering, MLOps deployment, and responsible AI practices.",
  icon: "🤖",
  color: "from-violet-700 to-purple-500",
  totalModules: 3,
  certificate: {
    title: "AI/ML Engineer Certificate",
    description:
      "Awarded for completing all 3 modules of the AI/ML Engineer course.",
  },
  modules: [
    aiml_module0,
    aiml_module1,
    aiml_module2,
    aiml_module3,
  ] as unknown as CModule[],
};

export const AIML_ENGINEER_ROADMAP_ENTRY = {
  id: "aiml-engineer",
  name: "AI/ML Engineer",
  icon: "🤖",
  color: "from-violet-700 to-purple-500",
  description:
    "Build and deploy intelligent systems — from ML fundamentals and deep learning to LLMs, MLOps, and responsible AI.",
  topics: [
    {
      title: "AI vs ML vs Deep Learning",
      videoId: "WSbgixdC9g8",
      duration: "40 min",
    },
    {
      title: "Python AI Libraries (NumPy, Pandas, PyTorch)",
      videoId: "7eh4d6sabA0",
      duration: "45 min",
    },
    {
      title: "Training & Fine-tuning Models",
      videoId: "1waHlpKiNyY",
      duration: "50 min",
    },
    {
      title: "LLMs & Prompt Engineering",
      videoId: "zjkBMFhNj_g",
      duration: "45 min",
    },
    {
      title: "MLOps & Model Deployment",
      videoId: "9BgIDqAzfuA",
      duration: "50 min",
    },
    { title: "AI Ethics & Safety", videoId: "59bMh59JQDo", duration: "40 min" },
  ],
  courseId: "aiml-engineer-course",
};

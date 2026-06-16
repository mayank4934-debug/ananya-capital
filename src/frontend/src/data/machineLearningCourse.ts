import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const ml_module0: CModule = {
  id: "machine-learning-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "machine-learning-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Machine Learning! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO MACHINE LEARNING!

Hey! I'm beyond excited to be your companion on this Machine Learning journey! 🤖 ML is one of the most transformative technologies of our time — powering recommendation systems, self-driving cars, medical diagnostics, and so much more. Let's explore it together!

COURSE OVERVIEW
Machine Learning is a branch of AI where systems learn patterns from data without being explicitly programmed. You'll study the mathematical foundations (linear algebra, calculus, statistics), Python for ML (NumPy, Pandas, scikit-learn), classical algorithms (regression, decision trees, SVM, clustering), and neural networks and deep learning. This course prepares you for ML engineering roles and research.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you implement ML algorithms). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~45 hours
This is a deep, rigorous course. Dedicate 1–2 hours per day and you'll be building real ML models in about 5–6 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "machine-learning-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Machine Learning course:

1. Math Foundations — Linear algebra, calculus, probability, statistics for ML
2. Python for ML — NumPy, Pandas, Matplotlib, scikit-learn setup
3. Classical ML Algorithms — Linear regression, logistic regression, decision trees, SVM, clustering
4. Neural Networks — Perceptrons, backpropagation, activation functions
5. Deep Learning — CNNs, RNNs, TensorFlow/Keras for training models
6. Projects — Real-world ML projects: image classification, NLP, tabular prediction`,
          codeExample: "",
        },
        {
          id: "machine-learning-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Hands-on exercises in parts where you implement ML algorithms

Math-heavy theory parts may not have coding questions. Only parts where you write actual Python ML code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "machine-learning-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what machine learning is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Machine Learning journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: ML Foundations ─────────────────────────────────────────────────

const ml_module1: CModule = {
  id: "ml-foundations",
  title: "Module 1: ML Foundations",
  outcome: "Understand ML types, core math, and Python libraries for ML.",
  isLocked: false,
  parts: [
    {
      id: "ml-m1-p1",
      title: "Part 1: ML Types",
      description: "Supervised, unsupervised, and reinforcement learning.",
      hasCodingContent: false,
      videoUrl: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
      notes:
        "Machine learning is categorized into supervised (labeled data), unsupervised (unlabeled), and reinforcement learning (reward-based).",
      docs: [
        {
          label: "Google ML Crash Course",
          url: "https://developers.google.com/machine-learning/crash-course",
        },
        {
          label: "Scikit-learn Docs",
          url: "https://scikit-learn.org/stable/user_guide.html",
        },
      ],
      partQuiz: [
        {
          question: "Which ML type uses labeled training data?",
          options: [
            "Unsupervised",
            "Supervised",
            "Reinforcement",
            "Semi-supervised",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which algorithm groups similar data without labels?",
          options: ["Linear Regression", "Decision Tree", "K-Means", "SVM"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is overfitting?",
          options: [
            "Model too simple",
            "Model memorizes training data",
            "Underfitting",
            "Data leakage",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the purpose of a test set?",
          options: [
            "Train the model",
            "Tune hyperparameters",
            "Evaluate generalization",
            "Augment data",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which learning type trains via rewards?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "Transfer"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m1-p1s1",
          title: "Supervised Learning",
          content:
            "Supervised learning maps inputs to outputs using labeled examples. Classification predicts categories; regression predicts continuous values.",
          codeExample:
            "# Supervised: predict house price from features\nfrom sklearn.linear_model import LinearRegression\nX = [[1000], [1500], [2000]]\ny = [200000, 300000, 400000]\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[1750]]))",
          video: { youtubeId: "ukzFI9rgwfU", title: "Supervised Learning" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m1-p1s2",
          title: "Unsupervised Learning",
          content:
            "Unsupervised learning finds structure in unlabeled data. Clustering groups similar points; dimensionality reduction compresses features.",
          codeExample:
            "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1,2],[1,4],[3,2],[8,7],[9,8]])\nkmeans = KMeans(n_clusters=2, random_state=0).fit(X)\nprint(kmeans.labels_)",
          video: { youtubeId: "ukzFI9rgwfU", title: "Unsupervised Learning" },
          flowchart: "if-else",
        },
        {
          id: "ml-m1-p1s3",
          title: "Train/Test Split & Overfitting",
          content:
            "Split data into training (80%) and test (20%) sets. Overfitting: high train accuracy, low test accuracy. Use cross-validation to detect it.",
          codeExample:
            "from sklearn.model_selection import train_test_split\nX = [[i] for i in range(100)]\ny = [i*2 for i in range(100)]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint(len(X_train), len(X_test))",
          video: { youtubeId: "ukzFI9rgwfU", title: "Train/Test Split" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ml-m1-p2",
      title: "Part 2: Math Basics",
      description: "Linear algebra, calculus, and probability for ML.",
      videoUrl: "https://www.youtube.com/watch?v=mSMDP_pdjL4",
      notes:
        "ML relies on vectors/matrices (linear algebra), gradients (calculus), and probability for uncertainty modeling.",
      docs: [
        {
          label: "3Blue1Brown: Linear Algebra",
          url: "https://www.3blue1brown.com/topics/linear-algebra",
        },
        {
          label: "Khan Academy: Calculus",
          url: "https://www.khanacademy.org/math/calculus-1",
        },
      ],
      partQuiz: [
        {
          question: "What is a dot product used for in ML?",
          options: [
            "Sorting data",
            "Measuring similarity",
            "Counting rows",
            "Splitting data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a gradient represent?",
          options: [
            "Loss value",
            "Direction of steepest ascent",
            "Learning rate",
            "Matrix rank",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is gradient descent?",
          options: [
            "Finding max loss",
            "Iteratively minimizing loss",
            "Computing gradients",
            "Batch processing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a matrix transpose?",
          options: [
            "Inverse matrix",
            "Rows become columns",
            "Diagonal extraction",
            "Scalar product",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which function maps values to 0-1 range?",
          options: ["ReLU", "Sigmoid", "Tanh", "Softmax"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m1-p2s1",
          title: "Vectors & Matrices",
          content:
            "Vectors represent data points; matrices represent datasets or transformations. Matrix multiplication is the foundation of neural networks.",
          codeExample:
            "import numpy as np\nv = np.array([1, 2, 3])\nM = np.array([[1,2],[3,4],[5,6]])\nprint('Dot:', np.dot(v[:2], v[1:3]))\nprint('Transpose:\\n', M.T)\nprint('MatMul:\\n', M.T @ M)",
          video: { youtubeId: "mSMDP_pdjL4", title: "Vectors & Matrices" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m1-p2s2",
          title: "Gradients & Optimization",
          content:
            "Gradient descent updates model weights by moving in the direction opposite to the gradient of the loss function.",
          codeExample:
            "# Manual gradient descent for y = x^2\nx = 10.0\nlr = 0.1\nfor i in range(20):\n    grad = 2 * x  # derivative of x^2\n    x -= lr * grad\n    if i % 5 == 0:\n        print(f'Step {i}: x={x:.4f}, loss={x**2:.4f}')",
          video: { youtubeId: "mSMDP_pdjL4", title: "Gradient Descent" },
          flowchart: "loop",
        },
        {
          id: "ml-m1-p2s3",
          title: "Activation Functions",
          content:
            "Activation functions add non-linearity. Sigmoid: 0-1 for binary output. ReLU: max(0,x) for hidden layers. Softmax: probability distribution for multi-class.",
          codeExample:
            "import numpy as np\ndef sigmoid(x): return 1 / (1 + np.exp(-x))\ndef relu(x): return np.maximum(0, x)\ndef softmax(x): return np.exp(x) / np.sum(np.exp(x))\nx = np.array([-2, -1, 0, 1, 2])\nprint('Sigmoid:', sigmoid(x).round(3))\nprint('ReLU:   ', relu(x))\nprint('Softmax:', softmax(x).round(3))",
          video: { youtubeId: "mSMDP_pdjL4", title: "Activation Functions" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "ml-m1-p3",
      title: "Part 3: Python Libraries",
      description: "Scikit-learn, NumPy, Pandas for ML pipelines.",
      videoUrl: "https://www.youtube.com/watch?v=0Lt9w-BxKFQ",
      notes:
        "Scikit-learn provides a consistent API for ML models; NumPy handles math; Pandas manages data.",
      docs: [
        {
          label: "Scikit-learn API",
          url: "https://scikit-learn.org/stable/modules/classes.html",
        },
        {
          label: "Pandas User Guide",
          url: "https://pandas.pydata.org/docs/user_guide/index.html",
        },
      ],
      partQuiz: [
        {
          question: "What does fit() do in scikit-learn?",
          options: [
            "Predicts output",
            "Trains the model",
            "Evaluates accuracy",
            "Splits data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which scikit-learn function standardizes features?",
          options: [
            "Normalizer",
            "StandardScaler",
            "MinMaxScaler",
            "Binarizer",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Pipeline in sklearn do?",
          options: [
            "Runs in parallel",
            "Chains preprocessing and model steps",
            "Plots results",
            "Evaluates metrics",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you evaluate classification accuracy?",
          options: [
            "r2_score",
            "mean_squared_error",
            "accuracy_score",
            "log_loss",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does cross_val_score return?",
          options: [
            "Single accuracy",
            "Array of scores per fold",
            "Confusion matrix",
            "Feature importances",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m1-p3s1",
          title: "Scikit-learn Basics",
          content:
            "Every sklearn estimator follows: fit(X, y) → predict(X) → score(X, y). This consistent API makes switching models trivial.",
          codeExample:
            "from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\nknn = KNeighborsClassifier(n_neighbors=3)\nknn.fit(X_tr, y_tr)\nprint('Accuracy:', knn.score(X_te, y_te))",
          video: { youtubeId: "0Lt9w-BxKFQ", title: "Scikit-learn Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m1-p3s2",
          title: "Feature Scaling",
          content:
            "StandardScaler: zero mean, unit variance. MinMaxScaler: scales to [0,1]. Always fit on training data only, then transform both train and test.",
          codeExample:
            "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nX_train = np.array([[1,100],[2,200],[3,300]])\nX_test = np.array([[4,400]])\nscaler = StandardScaler()\nX_train_s = scaler.fit_transform(X_train)\nX_test_s = scaler.transform(X_test)\nprint('Scaled train:\\n', X_train_s)",
          video: { youtubeId: "0Lt9w-BxKFQ", title: "Feature Scaling" },
          flowchart: "if-else",
        },
        {
          id: "ml-m1-p3s3",
          title: "Pipelines & Cross-Validation",
          content:
            "Pipeline chains scaler + model. cross_val_score runs k-fold CV to get robust performance estimates without data leakage.",
          codeExample:
            "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\npipe = Pipeline([('scaler', StandardScaler()), ('svm', SVC())])\nscores = cross_val_score(pipe, X, y, cv=5)\nprint('CV scores:', scores.round(3))\nprint('Mean:', scores.mean().round(3))",
          video: { youtubeId: "0Lt9w-BxKFQ", title: "Pipelines" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which ML type requires labeled data?",
      options: [
        "Unsupervised",
        "Supervised",
        "Reinforcement",
        "Self-supervised",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does StandardScaler do?",
      options: [
        "Normalizes to [0,1]",
        "Zero mean, unit variance",
        "Removes outliers",
        "Encodes categories",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is overfitting?",
      options: [
        "Low bias, high variance",
        "Model too simple",
        "High bias, low variance",
        "Low training error",
      ],
      correct: 0,
      xp: 10,
    },
    {
      question: "What is gradient descent used for?",
      options: [
        "Data cleaning",
        "Minimizing loss function",
        "Feature selection",
        "Cross-validation",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does cross_val_score measure?",
      options: [
        "Training accuracy",
        "Generalization via k-fold CV",
        "Loss function",
        "Feature importance",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ml-m1-test1",
      title: "Build a Classifier with Sklearn Pipeline",
      description:
        "Create a Pipeline with StandardScaler and KNeighborsClassifier. Train on Iris data, run 5-fold cross-validation, and print the mean accuracy.",
      starterCode:
        "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\n\n# Build pipeline and run 5-fold CV\n# Print mean accuracy\n",
      hints: [
        "Use Pipeline([('scaler', StandardScaler()), ('knn', KNeighborsClassifier())])",
        "Use cross_val_score(pipe, X, y, cv=5)",
        "Print scores.mean()",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Supervised Learning ────────────────────────────────────────────

const ml_module2: CModule = {
  id: "ml-supervised",
  title: "Module 2: Supervised Learning",
  outcome: "Implement linear regression, decision trees, and SVMs.",
  isLocked: true,
  parts: [
    {
      id: "ml-m2-p1",
      title: "Part 1: Linear Regression",
      description: "Fit lines to data, evaluate with MSE and R².",
      videoUrl: "https://www.youtube.com/watch?v=nk2CQITm_eo",
      notes:
        "Linear regression models the relationship between features and a continuous target by fitting a straight line.",
      docs: [
        {
          label: "sklearn: LinearRegression",
          url: "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html",
        },
        {
          label: "StatQuest: Linear Regression",
          url: "https://www.youtube.com/@statquest",
        },
      ],
      partQuiz: [
        {
          question: "What does linear regression predict?",
          options: [
            "Categories",
            "Continuous values",
            "Clusters",
            "Probabilities",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What metric measures average squared prediction error?",
          options: ["R²", "MAE", "MSE", "Accuracy"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does R² = 1 mean?",
          options: ["Perfect fit", "No fit", "Overfit", "50% explained"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is regularization used for?",
          options: [
            "Speed up training",
            "Reduce overfitting",
            "Increase bias",
            "Scale features",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which regression adds L1 penalty?",
          options: ["Ridge", "Lasso", "ElasticNet", "Linear"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m2-p1s1",
          title: "Simple Linear Regression",
          content:
            "Linear regression finds coefficients w such that y ≈ w·X + b minimizing mean squared error.",
          codeExample:
            "from sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\nX = np.array([[1],[2],[3],[4],[5]])\ny = [2.1, 3.9, 6.2, 7.8, 10.1]\nmodel = LinearRegression().fit(X, y)\npred = model.predict(X)\nprint('MSE:', mean_squared_error(y, pred).round(3))\nprint('R2: ', r2_score(y, pred).round(3))",
          video: { youtubeId: "nk2CQITm_eo", title: "Linear Regression" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m2-p1s2",
          title: "Multiple Features",
          content:
            "Multiple linear regression uses several features. Feature scaling improves convergence. Check multicollinearity with correlation matrix.",
          codeExample:
            "from sklearn.datasets import load_diabetes\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\nX, y = load_diabetes(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\nmodel = LinearRegression().fit(X_tr, y_tr)\nprint('Test R2:', model.score(X_te, y_te).round(3))",
          video: { youtubeId: "nk2CQITm_eo", title: "Multiple Regression" },
          flowchart: "if-else",
        },
        {
          id: "ml-m2-p1s3",
          title: "Ridge & Lasso Regularization",
          content:
            "Ridge (L2) shrinks all weights. Lasso (L1) can zero out weights for feature selection. Use alpha to control regularization strength.",
          codeExample:
            "from sklearn.linear_model import Ridge, Lasso\nfrom sklearn.datasets import load_diabetes\nfrom sklearn.model_selection import train_test_split\nX, y = load_diabetes(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\nfor Model, name in [(Ridge, 'Ridge'), (Lasso, 'Lasso')]:\n    m = Model(alpha=1.0).fit(X_tr, y_tr)\n    print(f'{name} R2: {m.score(X_te, y_te):.3f}')",
          video: { youtubeId: "nk2CQITm_eo", title: "Regularization" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ml-m2-p2",
      title: "Part 2: Decision Trees",
      description: "Tree-based classification and regression.",
      videoUrl: "https://www.youtube.com/watch?v=RmajweUFKvM",
      notes:
        "Decision trees split data on feature thresholds to minimize impurity; they're interpretable but prone to overfitting.",
      docs: [
        {
          label: "sklearn: Decision Trees",
          url: "https://scikit-learn.org/stable/modules/tree.html",
        },
        {
          label: "sklearn: Random Forest",
          url: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html",
        },
      ],
      partQuiz: [
        {
          question: "What metric does Decision Tree use to split?",
          options: ["MSE only", "Gini or Entropy", "R²", "Accuracy"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you prevent Decision Tree overfitting?",
          options: [
            "Increase depth",
            "Limit max_depth",
            "Remove features",
            "Add more data only",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Random Forest?",
          options: [
            "Single deep tree",
            "Ensemble of decision trees",
            "Gradient boosted trees",
            "Neural network",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does feature_importances_ return?",
          options: [
            "Correlation values",
            "Relative importance of each feature",
            "P-values",
            "Weights",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is bagging in Random Forest?",
          options: [
            "Pruning trees",
            "Training trees on random data subsets",
            "Boosting residuals",
            "Dropout",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m2-p2s1",
          title: "Decision Tree Classifier",
          content:
            "Decision trees recursively split on the feature+threshold that maximizes information gain (entropy) or minimizes Gini impurity.",
          codeExample:
            "from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\ntree = DecisionTreeClassifier(max_depth=3, random_state=42)\ntree.fit(X_tr, y_tr)\nprint('Accuracy:', tree.score(X_te, y_te))",
          video: { youtubeId: "RmajweUFKvM", title: "Decision Trees" },
          flowchart: "if-else",
        },
        {
          id: "ml-m2-p2s2",
          title: "Random Forest",
          content:
            "Random Forest builds many trees on random data subsets and averages predictions, reducing variance (overfitting) significantly.",
          codeExample:
            "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X_tr, y_tr)\nprint('Accuracy:', rf.score(X_te, y_te))\nprint('Feature importances:', rf.feature_importances_.round(3))",
          video: { youtubeId: "RmajweUFKvM", title: "Random Forest" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m2-p2s3",
          title: "Hyperparameter Tuning",
          content:
            "GridSearchCV exhaustively tries hyperparameter combinations with cross-validation to find the best settings.",
          codeExample:
            "from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nparam_grid = {'n_estimators': [50, 100], 'max_depth': [3, 5, None]}\ngrid = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)\ngrid.fit(X, y)\nprint('Best params:', grid.best_params_)\nprint('Best score: ', grid.best_score_.round(3))",
          video: { youtubeId: "RmajweUFKvM", title: "Grid Search" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ml-m2-p3",
      title: "Part 3: SVMs",
      description: "Support Vector Machines for classification.",
      videoUrl: "https://www.youtube.com/watch?v=efR1C6CvhmE",
      notes:
        "SVMs find the maximum-margin hyperplane separating classes; kernel trick handles non-linear boundaries.",
      docs: [
        {
          label: "sklearn: SVM",
          url: "https://scikit-learn.org/stable/modules/svm.html",
        },
        {
          label: "sklearn: SVC",
          url: "https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html",
        },
      ],
      partQuiz: [
        {
          question: "What does SVM maximize?",
          options: [
            "Accuracy",
            "Margin between classes",
            "Number of support vectors",
            "Feature count",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What are support vectors?",
          options: [
            "All training points",
            "Points closest to the decision boundary",
            "Outliers",
            "Test samples",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which kernel handles non-linear data?",
          options: ["Linear", "RBF", "Constant", "Identity"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does C parameter control?",
          options: [
            "Kernel type",
            "Margin vs misclassification tradeoff",
            "Learning rate",
            "Feature count",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When is SVM slower?",
          options: [
            "Small datasets",
            "Large datasets with many samples",
            "Binary classification",
            "Normalized data",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m2-p3s1",
          title: "SVM Classifier",
          content:
            "SVC with linear kernel works for linearly separable data. The C parameter trades off margin width vs classification errors.",
          codeExample:
            "from sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\npipe = Pipeline([('scaler', StandardScaler()), ('svm', SVC(kernel='linear'))])\npipe.fit(X_tr, y_tr)\nprint('Accuracy:', pipe.score(X_te, y_te))",
          video: { youtubeId: "efR1C6CvhmE", title: "SVM Classifier" },
          flowchart: "if-else",
        },
        {
          id: "ml-m2-p3s2",
          title: "Kernel Trick",
          content:
            "The RBF kernel maps data to higher dimensions implicitly, enabling non-linear classification without computing the transformation explicitly.",
          codeExample:
            "from sklearn.svm import SVC\nfrom sklearn.datasets import make_moons\nfrom sklearn.model_selection import train_test_split\nX, y = make_moons(n_samples=200, noise=0.15, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\nfor kernel in ['linear', 'rbf', 'poly']:\n    svm = SVC(kernel=kernel).fit(X_tr, y_tr)\n    print(f'{kernel}: {svm.score(X_te, y_te):.3f}')",
          video: { youtubeId: "efR1C6CvhmE", title: "Kernel Trick" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m2-p3s3",
          title: "Classification Metrics",
          content:
            "Beyond accuracy: precision (correct positives), recall (found positives), F1 (harmonic mean). Use confusion matrix to analyze errors.",
          codeExample:
            "from sklearn.metrics import classification_report, confusion_matrix\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2)\nsvm = SVC().fit(X_tr, y_tr)\npred = svm.predict(X_te)\nprint(classification_report(y_te, pred))\nprint('Confusion matrix:\\n', confusion_matrix(y_te, pred))",
          video: { youtubeId: "efR1C6CvhmE", title: "Classification Metrics" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does R² = 0 mean for linear regression?",
      options: ["Perfect fit", "Predicts mean only", "Negative fit", "Overfit"],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which ensemble method uses bootstrap sampling?",
      options: ["Boosting", "Stacking", "Bagging / Random Forest", "Voting"],
      correct: 2,
      xp: 10,
    },
    {
      question: "Which kernel is best for non-linear SVM?",
      options: ["Linear", "RBF", "Constant", "Sigmoid always"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does Lasso regularization do differently than Ridge?",
      options: [
        "Larger penalty",
        "Can zero out features",
        "Faster training",
        "Uses L2 norm",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does precision measure?",
      options: [
        "All positives found",
        "Correct positive predictions ratio",
        "F1 score",
        "Recall",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ml-m2-test1",
      title: "Compare Classifiers",
      description:
        "Train a Decision Tree, Random Forest, and SVM on the Iris dataset. Print each model's test accuracy.",
      starterCode:
        "from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Train each model and print accuracy\n",
      hints: [
        "Create each model with default params and call .fit(X_tr, y_tr)",
        "Use .score(X_te, y_te) to get accuracy",
        "Print model name + accuracy in a loop or individually",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Unsupervised Learning ──────────────────────────────────────────

const ml_module3: CModule = {
  id: "ml-unsupervised",
  title: "Module 3: Unsupervised Learning",
  outcome: "Apply K-Means clustering, PCA, and anomaly detection.",
  isLocked: true,
  parts: [
    {
      id: "ml-m3-p1",
      title: "Part 1: K-Means Clustering",
      description: "Partition data into k clusters by minimizing inertia.",
      videoUrl: "https://www.youtube.com/watch?v=4b5d3muPQmA",
      notes:
        "K-Means assigns each point to its nearest centroid and iterates until centroids stabilize.",
      docs: [
        {
          label: "sklearn: KMeans",
          url: "https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html",
        },
        {
          label: "sklearn: Clustering Guide",
          url: "https://scikit-learn.org/stable/modules/clustering.html",
        },
      ],
      partQuiz: [
        {
          question: "What does K-Means minimize?",
          options: [
            "Entropy",
            "Inertia (sum of squared distances to centroid)",
            "Silhouette score",
            "Variance",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the elbow method used for?",
          options: [
            "Feature selection",
            "Choosing optimal k",
            "Scaling data",
            "Evaluating clusters",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does WCSS stand for?",
          options: [
            "Within-Cluster Sum of Squares",
            "Weighted Class Sample Score",
            "Within-Class Standard Score",
            "Weighted Centroid Sum",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Which metric evaluates cluster quality without labels?",
          options: ["Accuracy", "F1 score", "Silhouette score", "R²"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is a centroid?",
          options: [
            "Edge point of cluster",
            "Mean position of cluster points",
            "Outlier point",
            "Label vector",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m3-p1s1",
          title: "K-Means Algorithm",
          content:
            "K-Means: initialize k centroids, assign points to nearest centroid, recompute centroids, repeat until convergence.",
          codeExample:
            "from sklearn.cluster import KMeans\nfrom sklearn.datasets import make_blobs\nimport numpy as np\nX, _ = make_blobs(n_samples=300, centers=3, random_state=42)\nkmeans = KMeans(n_clusters=3, random_state=42)\nkmeans.fit(X)\nprint('Labels:', kmeans.labels_[:10])\nprint('Centroids:\\n', kmeans.cluster_centers_.round(2))\nprint('Inertia:', kmeans.inertia_.round(2))",
          video: { youtubeId: "4b5d3muPQmA", title: "K-Means" },
          flowchart: "loop",
        },
        {
          id: "ml-m3-p1s2",
          title: "Elbow Method",
          content:
            "Plot WCSS (inertia) vs k; the 'elbow' where improvement slows suggests the optimal number of clusters.",
          codeExample:
            "from sklearn.cluster import KMeans\nfrom sklearn.datasets import make_blobs\nX, _ = make_blobs(n_samples=300, centers=4, random_state=42)\ninertias = []\nfor k in range(1, 11):\n    km = KMeans(n_clusters=k, random_state=42)\n    km.fit(X)\n    inertias.append(km.inertia_)\nfor k, w in enumerate(inertias, 1):\n    print(f'k={k}: inertia={w:.0f}')",
          video: { youtubeId: "4b5d3muPQmA", title: "Elbow Method" },
          flowchart: "if-else",
        },
        {
          id: "ml-m3-p1s3",
          title: "Silhouette Score",
          content:
            "Silhouette score ranges from -1 to 1; higher is better. It measures how similar a point is to its own cluster vs neighboring clusters.",
          codeExample:
            "from sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\nfrom sklearn.datasets import make_blobs\nX, _ = make_blobs(n_samples=200, centers=3, random_state=42)\nfor k in range(2, 6):\n    km = KMeans(n_clusters=k, random_state=42).fit(X)\n    score = silhouette_score(X, km.labels_)\n    print(f'k={k}: silhouette={score:.3f}')",
          video: { youtubeId: "4b5d3muPQmA", title: "Silhouette Score" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
    {
      id: "ml-m3-p2",
      title: "Part 2: PCA",
      description:
        "Dimensionality reduction with Principal Component Analysis.",
      videoUrl: "https://www.youtube.com/watch?v=FgakZw6K1QQ",
      notes:
        "PCA finds orthogonal directions of maximum variance, compressing data while retaining most information.",
      docs: [
        {
          label: "sklearn: PCA",
          url: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html",
        },
        {
          label: "sklearn: Decomposition",
          url: "https://scikit-learn.org/stable/modules/decomposition.html",
        },
      ],
      partQuiz: [
        {
          question: "What does PCA reduce?",
          options: ["Samples", "Features / dimensions", "Labels", "Model size"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is explained_variance_ratio_?",
          options: [
            "Total variance",
            "Fraction of variance each component explains",
            "PCA score",
            "Feature importance",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Should you scale before PCA?",
          options: [
            "No, never",
            "Yes, always standardize first",
            "Only for regression",
            "Only for large datasets",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What are principal components?",
          options: [
            "Original features",
            "Orthogonal directions of max variance",
            "Cluster labels",
            "Residuals",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When is PCA most useful?",
          options: [
            "Small datasets",
            "High-dimensional correlated features",
            "Binary classification",
            "Time series",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m3-p2s1",
          title: "PCA Basics",
          content:
            "PCA transforms features into principal components ordered by variance explained. n_components controls how many to keep.",
          codeExample:
            "from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nX_s = StandardScaler().fit_transform(X)\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X_s)\nprint('Original shape:', X.shape)\nprint('Reduced shape:', X_pca.shape)\nprint('Variance explained:', pca.explained_variance_ratio_.round(3))",
          video: { youtubeId: "FgakZw6K1QQ", title: "PCA" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m3-p2s2",
          title: "Choosing Components",
          content:
            "Cumulative explained variance shows how many components retain X% of information. Typically aim for 95% variance retained.",
          codeExample:
            "from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.datasets import load_digits\nimport numpy as np\nX, _ = load_digits(return_X_y=True)\nX_s = StandardScaler().fit_transform(X)\npca = PCA()\npca.fit(X_s)\ncumvar = np.cumsum(pca.explained_variance_ratio_)\nfor threshold in [0.90, 0.95, 0.99]:\n    n = np.argmax(cumvar >= threshold) + 1\n    print(f'{threshold*100:.0f}% variance: {n} components')",
          video: { youtubeId: "FgakZw6K1QQ", title: "PCA Components" },
          flowchart: "loop",
        },
        {
          id: "ml-m3-p2s3",
          title: "PCA for Visualization",
          content:
            "Project high-dimensional data to 2D with PCA for scatter plots. Colors by label reveal cluster structure in the data.",
          codeExample:
            "from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nX_pca = PCA(n_components=2).fit_transform(StandardScaler().fit_transform(X))\nfor label, name in enumerate(['setosa','versicolor','virginica']):\n    mask = y == label\n    print(f'{name}: mean PC1={X_pca[mask,0].mean():.2f}, PC2={X_pca[mask,1].mean():.2f}')",
          video: { youtubeId: "FgakZw6K1QQ", title: "PCA Visualization" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "ml-m3-p3",
      title: "Part 3: Anomaly Detection",
      description: "Detect outliers with Isolation Forest and LOF.",
      videoUrl: "https://www.youtube.com/watch?v=piF6D6CQxUw",
      notes:
        "Anomaly detection identifies data points that deviate significantly from normal patterns without labels.",
      docs: [
        {
          label: "sklearn: Isolation Forest",
          url: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html",
        },
        {
          label: "sklearn: Outlier Detection",
          url: "https://scikit-learn.org/stable/modules/outlier_detection.html",
        },
      ],
      partQuiz: [
        {
          question: "What score does Isolation Forest assign to anomalies?",
          options: ["Positive", "Negative (-1)", "Zero", "Greater than 1"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is contamination= in Isolation Forest?",
          options: [
            "Data noise",
            "Expected fraction of outliers",
            "Number of trees",
            "Feature count",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does LOF measure?",
          options: [
            "Cluster distance",
            "Local density deviation",
            "Tree depth",
            "Covariance",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is an anomaly?",
          options: [
            "Majority class sample",
            "Point deviating from normal distribution",
            "Feature with high variance",
            "Balanced class",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "Which method is best for high-dimensional anomaly detection?",
          options: ["K-Means", "Isolation Forest", "PCA alone", "LOF always"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m3-p3s1",
          title: "Isolation Forest",
          content:
            "Isolation Forest isolates anomalies by randomly partitioning data; anomalies need fewer splits and get score -1.",
          codeExample:
            "from sklearn.ensemble import IsolationForest\nimport numpy as np\nnp.random.seed(42)\nX_normal = np.random.normal(0, 1, (100, 2))\nX_anom = np.array([[5, 5], [-5, 5], [5, -5]])\nX = np.vstack([X_normal, X_anom])\nif_ = IsolationForest(contamination=0.03, random_state=42)\npreds = if_.fit_predict(X)\nprint('Anomalies detected:', (preds == -1).sum())",
          video: { youtubeId: "piF6D6CQxUw", title: "Isolation Forest" },
          flowchart: "if-else",
        },
        {
          id: "ml-m3-p3s2",
          title: "Local Outlier Factor",
          content:
            "LOF computes local density deviation of a point relative to its neighbors; points with lower density than neighbors are outliers.",
          codeExample:
            "from sklearn.neighbors import LocalOutlierFactor\nimport numpy as np\nnp.random.seed(42)\nX = np.r_[np.random.randn(50, 2) + [2, 2],\n           np.random.randn(50, 2) + [-2, -2],\n           [[8, 0], [0, 8]]]\nlof = LocalOutlierFactor(n_neighbors=20)\npreds = lof.fit_predict(X)\nprint('Outliers found:', (preds == -1).sum())",
          video: { youtubeId: "piF6D6CQxUw", title: "Local Outlier Factor" },
          flowchart: "loop",
        },
        {
          id: "ml-m3-p3s3",
          title: "Evaluating Anomaly Detection",
          content:
            "Use precision/recall when labels exist. Without labels, compare against domain knowledge or use ROC-AUC with synthetic anomalies.",
          codeExample:
            "from sklearn.ensemble import IsolationForest\nfrom sklearn.metrics import classification_report\nimport numpy as np\nnp.random.seed(42)\nX = np.r_[np.random.randn(95, 2), np.random.uniform(-6,6,(5,2))]\ntrue_labels = np.r_[np.ones(95), -np.ones(5)].astype(int)\nif_ = IsolationForest(contamination=0.05, random_state=42)\npred = if_.fit_predict(X)\nprint(classification_report(true_labels, pred, target_names=['normal','anomaly']))",
          video: { youtubeId: "piF6D6CQxUw", title: "Anomaly Evaluation" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is inertia in K-Means?",
      options: [
        "Cluster count",
        "Sum of squared distances to centroids",
        "Silhouette score",
        "Centroid position",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Why must you scale before PCA?",
      options: [
        "To speed training",
        "To prevent high-variance features dominating",
        "To remove nulls",
        "To encode categories",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does Isolation Forest predict for outliers?",
      options: ["1", "0", "-1", "NaN"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is the silhouette score range?",
      options: ["0 to 1", "-1 to 1", "0 to infinity", "-infinity to 0"],
      correct: 1,
      xp: 10,
    },
    {
      question: "How many components does PCA(n_components=0.95) keep?",
      options: [
        "95 components",
        "Components explaining 95% variance",
        "5% of features",
        "95 samples",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ml-m3-test1",
      title: "Cluster and Visualize",
      description:
        "Use K-Means with k=3 on make_blobs data. Print the silhouette score and each centroid's coordinates.",
      starterCode:
        "from sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\nfrom sklearn.datasets import make_blobs\n\nX, _ = make_blobs(n_samples=300, centers=3, random_state=42)\n\n# Fit KMeans with k=3\n# Print silhouette score\n# Print centroids\n",
      hints: [
        "Use KMeans(n_clusters=3, random_state=42).fit(X)",
        "Use silhouette_score(X, kmeans.labels_)",
        "Print kmeans.cluster_centers_",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: Deep Learning ───────────────────────────────────────────────────

const ml_module4: CModule = {
  id: "ml-deep-learning",
  title: "Module 4: Deep Learning",
  outcome: "Build neural networks, CNNs, and RNNs with PyTorch/Keras.",
  isLocked: true,
  parts: [
    {
      id: "ml-m4-p1",
      title: "Part 1: Neural Networks",
      description: "Layers, backpropagation, and training with Keras.",
      videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
      notes:
        "Neural networks stack layers of weighted connections; backpropagation computes gradients to minimize loss.",
      docs: [
        { label: "Keras Docs", url: "https://keras.io/guides/" },
        { label: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" },
      ],
      partQuiz: [
        {
          question: "What does a hidden layer do?",
          options: [
            "Stores data",
            "Learns intermediate representations",
            "Outputs predictions",
            "Normalizes input",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is backpropagation?",
          options: [
            "Forward pass",
            "Computing gradients via chain rule",
            "Dropout",
            "Batch normalization",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What loss function is used for binary classification?",
          options: [
            "MSE",
            "Binary cross-entropy",
            "Categorical cross-entropy",
            "Hinge loss",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does Dropout do during training?",
          options: [
            "Adds noise",
            "Randomly zeros out neurons",
            "Normalizes activations",
            "Clips gradients",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is an epoch?",
          options: [
            "One batch update",
            "One full pass through training data",
            "Validation step",
            "Learning rate cycle",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m4-p1s1",
          title: "Building a Neural Network",
          content:
            "Stack Dense layers with activation functions. Compile with optimizer and loss. Train with model.fit().",
          codeExample:
            "# Keras sequential model (conceptual)\n# from tensorflow import keras\n# model = keras.Sequential([\n#     keras.layers.Dense(64, activation='relu', input_shape=(4,)),\n#     keras.layers.Dense(32, activation='relu'),\n#     keras.layers.Dense(3, activation='softmax')\n# ])\n# model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])\n# model.fit(X_train, y_train, epochs=20, validation_split=0.2)\nprint('Neural network: Dense(64) -> Dense(32) -> Dense(3, softmax)')",
          video: { youtubeId: "aircAruvnKk", title: "Neural Networks" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m4-p1s2",
          title: "Backpropagation",
          content:
            "Backprop computes dL/dW for each layer via chain rule, then optimizer updates weights W = W - lr * dL/dW.",
          codeExample:
            "# Manual backprop for 1-layer network\nimport numpy as np\nnp.random.seed(42)\nX = np.array([[0,0],[0,1],[1,0],[1,1]])\ny = np.array([[0],[1],[1],[0]])  # XOR\nW = np.random.randn(2, 1) * 0.1\nb = np.zeros((1,))\nfor _ in range(1000):\n    pred = 1 / (1 + np.exp(-(X @ W + b)))\n    loss = -np.mean(y * np.log(pred+1e-7) + (1-y) * np.log(1-pred+1e-7))\n    dW = X.T @ (pred - y) / len(X)\n    W -= 0.1 * dW\nprint('Final loss:', loss.round(4))",
          video: { youtubeId: "aircAruvnKk", title: "Backpropagation" },
          flowchart: "loop",
        },
        {
          id: "ml-m4-p1s3",
          title: "Regularization in NNs",
          content:
            "Dropout randomly deactivates neurons during training. L2 weight decay penalizes large weights. Both reduce overfitting.",
          codeExample:
            "# Keras with Dropout (conceptual)\n# model = keras.Sequential([\n#     keras.layers.Dense(128, activation='relu'),\n#     keras.layers.Dropout(0.3),\n#     keras.layers.Dense(64, activation='relu'),\n#     keras.layers.Dropout(0.3),\n#     keras.layers.Dense(1, activation='sigmoid')\n# ])\n# model.compile(optimizer='adam', loss='binary_crossentropy')\nprint('Dropout(0.3) drops 30% of neurons each training step')",
          video: { youtubeId: "aircAruvnKk", title: "Regularization" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "ml-m4-p2",
      title: "Part 2: CNNs",
      description: "Convolutional Neural Networks for image recognition.",
      videoUrl: "https://www.youtube.com/watch?v=YRhxdVk_sIs",
      notes:
        "CNNs use convolutional filters to detect local patterns in images, enabling translation-invariant feature learning.",
      docs: [
        {
          label: "CS231n: CNNs",
          url: "https://cs231n.github.io/convolutional-networks/",
        },
        {
          label: "Keras Conv2D",
          url: "https://keras.io/api/layers/convolution_layers/convolution2d/",
        },
      ],
      partQuiz: [
        {
          question: "What does a convolutional filter detect?",
          options: [
            "Global patterns",
            "Local spatial patterns",
            "Temporal patterns",
            "Color histograms",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is max pooling used for?",
          options: [
            "Increase feature map size",
            "Downsample and retain strong activations",
            "Add non-linearity",
            "Normalize features",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the purpose of Flatten in a CNN?",
          options: [
            "Reduce channels",
            "Convert 2D feature maps to 1D vector",
            "Apply dropout",
            "Add batch norm",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does transfer learning reuse?",
          options: [
            "Training data",
            "Pre-trained model weights",
            "Loss function",
            "Optimizer state",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which architecture won ImageNet 2012?",
          options: ["VGG", "AlexNet", "ResNet", "LeNet"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m4-p2s1",
          title: "CNN Architecture",
          content:
            "CNN = Conv2D → ReLU → MaxPool (repeated) → Flatten → Dense. Each conv layer detects increasingly complex patterns.",
          codeExample:
            "# Keras CNN for image classification (conceptual)\n# model = keras.Sequential([\n#     keras.layers.Conv2D(32, (3,3), activation='relu', input_shape=(28,28,1)),\n#     keras.layers.MaxPooling2D((2,2)),\n#     keras.layers.Conv2D(64, (3,3), activation='relu'),\n#     keras.layers.MaxPooling2D((2,2)),\n#     keras.layers.Flatten(),\n#     keras.layers.Dense(64, activation='relu'),\n#     keras.layers.Dense(10, activation='softmax')\n# ])\nprint('CNN: Conv → Pool → Conv → Pool → Flatten → Dense')",
          video: { youtubeId: "YRhxdVk_sIs", title: "CNN Architecture" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m4-p2s2",
          title: "Feature Maps & Pooling",
          content:
            "Convolving a 32×32 image with a 3×3 filter produces a 30×30 feature map. MaxPool(2×2) halves spatial dimensions.",
          codeExample:
            "import numpy as np\n# Simulate 2D convolution\ndef conv2d(image, kernel):\n    kh, kw = kernel.shape\n    oh, ow = image.shape[0]-kh+1, image.shape[1]-kw+1\n    out = np.zeros((oh, ow))\n    for i in range(oh):\n        for j in range(ow):\n            out[i,j] = np.sum(image[i:i+kh, j:j+kw] * kernel)\n    return out\nimg = np.random.rand(5, 5)\nkern = np.array([[0,-1,0],[-1,4,-1],[0,-1,0]])  # edge filter\nprint('Output shape:', conv2d(img, kern).shape)",
          video: { youtubeId: "YRhxdVk_sIs", title: "Convolutions" },
          flowchart: "loop",
        },
        {
          id: "ml-m4-p2s3",
          title: "Transfer Learning",
          content:
            "Load a pretrained model (ResNet, VGG), freeze base layers, replace the head, train only the new layers on your dataset.",
          codeExample:
            "# Transfer learning with MobileNet (conceptual)\n# import tensorflow as tf\n# base = tf.keras.applications.MobileNetV2(input_shape=(224,224,3),\n#     include_top=False, weights='imagenet')\n# base.trainable = False\n# model = tf.keras.Sequential([\n#     base,\n#     tf.keras.layers.GlobalAveragePooling2D(),\n#     tf.keras.layers.Dense(2, activation='softmax')\n# ])\nprint('Transfer learning: pretrained base + custom head')",
          video: { youtubeId: "YRhxdVk_sIs", title: "Transfer Learning" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "ml-m4-p3",
      title: "Part 3: RNNs",
      description: "Recurrent networks for sequences and time series.",
      videoUrl: "https://www.youtube.com/watch?v=LHXXI4-IEns",
      notes:
        "RNNs process sequential data by maintaining hidden state across time steps; LSTMs solve the vanishing gradient problem.",
      docs: [
        {
          label: "Keras LSTM",
          url: "https://keras.io/api/layers/recurrent_layers/lstm/",
        },
        {
          label: "Illustrated RNN/LSTM",
          url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
        },
      ],
      partQuiz: [
        {
          question: "What makes RNNs suitable for sequences?",
          options: [
            "Convolutional filters",
            "Hidden state passed across timesteps",
            "Attention mechanism",
            "Pooling layers",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What problem do LSTMs solve?",
          options: [
            "Overfitting",
            "Vanishing gradient in long sequences",
            "Class imbalance",
            "High dimensionality",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does return_sequences=True do in LSTM?",
          options: [
            "Returns last state only",
            "Returns output at every timestep",
            "Stacks LSTM layers",
            "Resets state",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which architecture uses attention instead of RNN?",
          options: ["CNN", "Transformer", "Autoencoder", "GAN"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is BPTT?",
          options: [
            "Back Propagation Through Time",
            "Batch Processing of Training Tasks",
            "Binary Prediction Tree",
            "Bidirectional Training",
          ],
          correct: 0,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m4-p3s1",
          title: "RNN Basics",
          content:
            "An RNN cell takes (input, hidden_state) and outputs new hidden state, enabling memory of previous inputs in a sequence.",
          codeExample:
            "import numpy as np\n# Simple RNN cell\ndef rnn_cell(x, h, Wx, Wh, b):\n    return np.tanh(Wx @ x + Wh @ h + b)\nnp.random.seed(0)\nWx, Wh, b = np.random.randn(4,3), np.random.randn(4,4), np.zeros(4)\nh = np.zeros(4)\nsequence = [np.random.randn(3) for _ in range(5)]\nfor t, x in enumerate(sequence):\n    h = rnn_cell(x, h, Wx, Wh, b)\n    print(f't={t}: h={h.round(2)}')",
          video: { youtubeId: "LHXXI4-IEns", title: "RNN Basics" },
          flowchart: "loop",
        },
        {
          id: "ml-m4-p3s2",
          title: "LSTM Architecture",
          content:
            "LSTM adds forget, input, output gates to control what to remember/forget, allowing gradients to flow through long sequences.",
          codeExample:
            "# Keras LSTM for sequence classification (conceptual)\n# model = keras.Sequential([\n#     keras.layers.Embedding(vocab_size, 64),\n#     keras.layers.LSTM(64, return_sequences=True),\n#     keras.layers.LSTM(32),\n#     keras.layers.Dense(1, activation='sigmoid')\n# ])\n# model.compile(optimizer='adam', loss='binary_crossentropy')\nprint('LSTM gates: forget, input, output — each controlled by sigmoid')",
          video: { youtubeId: "LHXXI4-IEns", title: "LSTM" },
          flowchart: "if-else",
        },
        {
          id: "ml-m4-p3s3",
          title: "Time Series Forecasting",
          content:
            "Reshape time series into sliding windows (X: past n steps, y: next step). Train LSTM to predict the next value.",
          codeExample:
            "import numpy as np\n# Create sliding window dataset\ndef create_dataset(data, window=5):\n    X, y = [], []\n    for i in range(len(data) - window):\n        X.append(data[i:i+window])\n        y.append(data[i+window])\n    return np.array(X), np.array(y)\nts = np.sin(np.linspace(0, 20, 200))\nX, y = create_dataset(ts, window=10)\nprint('X shape:', X.shape, 'y shape:', y.shape)",
          video: { youtubeId: "LHXXI4-IEns", title: "Time Series" },
          flowchart: "compilation-pipeline",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does Dropout(0.5) do?",
      options: [
        "Halves learning rate",
        "Drops 50% of neurons randomly during training",
        "Halves batch size",
        "Normalizes by 0.5",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the role of Conv2D in a CNN?",
      options: [
        "Flatten features",
        "Detect local spatial patterns",
        "Downsample activations",
        "Apply fully-connected weights",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What solves vanishing gradient in RNNs?",
      options: ["Dropout", "Batch Normalization", "LSTM gates", "ReLU only"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What is transfer learning?",
      options: [
        "Training from scratch",
        "Reusing pretrained model weights",
        "Data augmentation",
        "Ensemble learning",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does binary cross-entropy measure?",
      options: [
        "Regression error",
        "Log loss for binary classification",
        "Distance between centroids",
        "Gradient norm",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ml-m4-test1",
      title: "Sliding Window for Time Series",
      description:
        "Write a function create_sequences(data, window) that returns X (shape: samples x window) and y (next value). Test with a sine wave of 100 points and window=10.",
      starterCode:
        "import numpy as np\n\ndef create_sequences(data, window):\n    X, y = [], []\n    # Your code: loop and append windows\n    return np.array(X), np.array(y)\n\ndata = np.sin(np.linspace(0, 10, 100))\nX, y = create_sequences(data, window=10)\nprint('X shape:', X.shape)  # expect (90, 10)\nprint('y shape:', y.shape)  # expect (90,)\n",
      hints: [
        "Loop i from 0 to len(data) - window",
        "X.append(data[i:i+window]) and y.append(data[i+window])",
        "Return np.array(X), np.array(y)",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: ML in Production ───────────────────────────────────────────────

const ml_module5: CModule = {
  id: "ml-production",
  title: "Module 5: ML in Production",
  outcome: "Deploy models, apply MLOps practices, and compete on Kaggle.",
  isLocked: true,
  parts: [
    {
      id: "ml-m5-p1",
      title: "Part 1: Model Deployment",
      description: "Save, load, and serve ML models as APIs.",
      videoUrl: "https://www.youtube.com/watch?v=b3G9IUGFv2A",
      notes:
        "Deployment bridges research and production: save models with joblib/pickle, serve via REST APIs.",
      docs: [
        {
          label: "Flask Docs",
          url: "https://flask.palletsprojects.com/en/2.3.x/",
        },
        { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com/" },
      ],
      partQuiz: [
        {
          question: "Which Python library saves sklearn models?",
          options: ["pickle only", "joblib or pickle", "json", "yaml"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a REST API?",
          options: [
            "Database query language",
            "HTTP-based interface for services",
            "Model training loop",
            "Feature pipeline",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What format is best for serving predictions?",
          options: ["CSV", "JSON", "Binary", "XML always"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does model versioning help with?",
          options: [
            "Training speed",
            "Rolling back to previous model versions",
            "Feature engineering",
            "Data cleaning",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is model drift?",
          options: [
            "Slow training",
            "Model accuracy degrading as data distribution changes",
            "Memory leak",
            "Version conflict",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m5-p1s1",
          title: "Saving & Loading Models",
          content:
            "Use joblib.dump() to save and joblib.load() to restore. Always save the preprocessor alongside the model.",
          codeExample:
            "import joblib\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\npipe = Pipeline([('scaler', StandardScaler()), ('svm', SVC())])\npipe.fit(X, y)\n\njoblib.dump(pipe, 'model.joblib')\nloaded = joblib.load('model.joblib')\nprint('Loaded prediction:', loaded.predict(X[:1]))",
          video: { youtubeId: "b3G9IUGFv2A", title: "Saving Models" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m5-p1s2",
          title: "Flask API for ML",
          content:
            "Create a /predict endpoint that receives JSON features, loads the model, returns predictions as JSON.",
          codeExample:
            "# Flask ML API (conceptual)\n# from flask import Flask, request, jsonify\n# import joblib\n# import numpy as np\n#\n# app = Flask(__name__)\n# model = joblib.load('model.joblib')\n#\n# @app.route('/predict', methods=['POST'])\n# def predict():\n#     data = request.json['features']\n#     pred = model.predict([data])\n#     return jsonify({'prediction': int(pred[0])})\n#\n# if __name__ == '__main__':\n#     app.run(port=5000)\nprint('POST /predict -> {features: [1.2, 3.4, 5.6, 7.8]} -> {prediction: 0}')",
          video: { youtubeId: "b3G9IUGFv2A", title: "Flask API" },
          flowchart: "if-else",
        },
        {
          id: "ml-m5-p1s3",
          title: "Docker for ML",
          content:
            "Containerize your ML app with Docker: Dockerfile specifies Python version, installs dependencies, copies code, runs the server.",
          codeExample:
            '# Dockerfile for ML API\n# FROM python:3.11-slim\n# WORKDIR /app\n# COPY requirements.txt .\n# RUN pip install -r requirements.txt\n# COPY . .\n# EXPOSE 5000\n# CMD ["python", "app.py"]\n\n# Build and run:\n# docker build -t ml-api .\n# docker run -p 5000:5000 ml-api\nprint(\'Docker packages app + dependencies into a portable container\')',
          video: { youtubeId: "b3G9IUGFv2A", title: "Docker for ML" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ml-m5-p2",
      title: "Part 2: MLOps",
      description: "CI/CD for ML, experiment tracking, and monitoring.",
      videoUrl: "https://www.youtube.com/watch?v=NgWujOrCZFo",
      notes:
        "MLOps applies DevOps principles to ML: version data/models, track experiments, automate retraining.",
      docs: [
        {
          label: "MLflow Docs",
          url: "https://mlflow.org/docs/latest/index.html",
        },
        { label: "DVC Docs", url: "https://dvc.org/doc" },
      ],
      partQuiz: [
        {
          question: "What does MLflow track?",
          options: [
            "Docker images",
            "Experiments, parameters, metrics, artifacts",
            "Database queries",
            "Frontend deployments",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is DVC used for?",
          options: [
            "Model training",
            "Data versioning",
            "API deployment",
            "Hyperparameter search",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a feature store?",
          options: [
            "Cloud bucket",
            "Centralized repository of reusable features",
            "Model registry",
            "Training dataset",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What triggers retraining in MLOps?",
          options: [
            "Random schedule only",
            "Data drift or performance degradation",
            "Manual only",
            "Version bump",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is A/B testing in ML deployment?",
          options: [
            "Unit testing models",
            "Routing traffic to compare model versions",
            "Cross-validation",
            "Hyperparameter tuning",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m5-p2s1",
          title: "Experiment Tracking with MLflow",
          content:
            "MLflow.start_run() logs parameters, metrics, and artifacts. Compare runs in the MLflow UI to select the best model.",
          codeExample:
            "# MLflow experiment tracking (conceptual)\n# import mlflow\n# from sklearn.ensemble import RandomForestClassifier\n# from sklearn.datasets import load_iris\n# from sklearn.model_selection import cross_val_score\n#\n# X, y = load_iris(return_X_y=True)\n# with mlflow.start_run():\n#     n_est = 100\n#     mlflow.log_param('n_estimators', n_est)\n#     rf = RandomForestClassifier(n_estimators=n_est)\n#     score = cross_val_score(rf, X, y, cv=5).mean()\n#     mlflow.log_metric('cv_accuracy', score)\n#     print('Logged run with accuracy:', score)\nprint('MLflow: log_param + log_metric + log_artifact per run')",
          video: { youtubeId: "NgWujOrCZFo", title: "MLflow" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m5-p2s2",
          title: "Data Versioning with DVC",
          content:
            "DVC tracks large data files in Git using pointers. dvc add data.csv → git commit tracks the data version without storing it in Git.",
          codeExample:
            "# DVC workflow (terminal commands, conceptual)\n# git init && dvc init\n# dvc add data/train.csv      # creates data/train.csv.dvc\n# git add data/train.csv.dvc .gitignore\n# git commit -m 'track training data v1'\n# dvc push                    # push data to remote storage\n# dvc pull                    # restore data on another machine\nprint('DVC: version data like Git versions code')",
          video: { youtubeId: "NgWujOrCZFo", title: "DVC" },
          flowchart: "if-else",
        },
        {
          id: "ml-m5-p2s3",
          title: "Model Monitoring",
          content:
            "Monitor prediction drift (output distribution shift) and data drift (input distribution shift) to trigger automated retraining.",
          codeExample:
            "import numpy as np\nfrom scipy import stats\n\ndef detect_drift(reference, production, threshold=0.05):\n    stat, p_value = stats.ks_2samp(reference, production)\n    drift = p_value < threshold\n    return drift, p_value\n\nreference = np.random.normal(0, 1, 1000)\nproduction_ok = np.random.normal(0, 1, 200)\nproduction_drifted = np.random.normal(2, 1, 200)\n\nprint('No drift:', detect_drift(reference, production_ok))\nprint('Drift detected:', detect_drift(reference, production_drifted))",
          video: { youtubeId: "NgWujOrCZFo", title: "Model Monitoring" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ml-m5-p3",
      title: "Part 3: Kaggle Projects",
      description: "End-to-end ML projects using Kaggle workflows.",
      videoUrl: "https://www.youtube.com/watch?v=GJsBTnJjuSU",
      notes:
        "Kaggle competitions develop real-world ML skills: EDA, feature engineering, ensembling, and leaderboard optimization.",
      docs: [
        { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
        { label: "Kaggle API Docs", url: "https://www.kaggle.com/docs/api" },
      ],
      partQuiz: [
        {
          question: "What is EDA?",
          options: [
            "Model evaluation",
            "Exploratory Data Analysis",
            "External Data Augmentation",
            "Ensemble Design Architecture",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is feature engineering?",
          options: [
            "Collecting data",
            "Creating new features from existing ones",
            "Normalizing input",
            "Removing features",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Kaggle kernel/notebook?",
          options: [
            "Python package",
            "Cloud-hosted code environment",
            "Dataset format",
            "Submission type",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is ensembling in Kaggle?",
          options: [
            "Submitting one model",
            "Combining predictions from multiple models",
            "Cross-validation only",
            "Data leakage",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What metric is common in classification competitions?",
          options: ["MSE", "R²", "ROC-AUC", "RMSE"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ml-m5-p3s1",
          title: "EDA Workflow",
          content:
            "EDA: check shape, dtypes, nulls, distributions, correlations, and target balance before modeling.",
          codeExample:
            "import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\ndf = pd.DataFrame({\n    'age': np.random.randint(18, 65, 200),\n    'income': np.random.normal(50000, 15000, 200),\n    'score': np.random.rand(200),\n    'target': np.random.randint(0, 2, 200)\n})\n\nprint('Shape:', df.shape)\nprint('Nulls:\\n', df.isnull().sum())\nprint('Target balance:\\n', df['target'].value_counts(normalize=True))\nprint('Numeric stats:\\n', df.describe().round(2))",
          video: { youtubeId: "GJsBTnJjuSU", title: "EDA" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ml-m5-p3s2",
          title: "Feature Engineering",
          content:
            "Create interaction features, log-transform skewed columns, encode categoricals with label/one-hot encoding.",
          codeExample:
            "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'price': [100, 10000, 500, 50000, 200],\n    'category': ['A', 'B', 'A', 'C', 'B'],\n    'age': [1, 5, 2, 10, 3]\n})\n\n# Log transform skewed feature\ndf['log_price'] = np.log1p(df['price'])\n\n# Interaction feature\ndf['price_per_age'] = df['price'] / df['age']\n\n# One-hot encode\ndf = pd.get_dummies(df, columns=['category'])\nprint(df.head())",
          video: { youtubeId: "GJsBTnJjuSU", title: "Feature Engineering" },
          flowchart: "if-else",
        },
        {
          id: "ml-m5-p3s3",
          title: "Ensembling & Submission",
          content:
            "Average or stack predictions from multiple models. Use cross-validated out-of-fold predictions to avoid leakage.",
          codeExample:
            "import numpy as np\nfrom sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import cross_val_predict\nX, y = load_breast_cancer(return_X_y=True)\nmodels = [\n    RandomForestClassifier(n_estimators=50, random_state=42),\n    GradientBoostingClassifier(n_estimators=50, random_state=42),\n    LogisticRegression(max_iter=500)\n]\npreds = [cross_val_predict(m, X, y, cv=5, method='predict_proba')[:,1] for m in models]\nensemble = np.mean(preds, axis=0)\nfrom sklearn.metrics import roc_auc_score\nprint('Ensemble ROC-AUC:', roc_auc_score(y, ensemble).round(4))",
          video: { youtubeId: "GJsBTnJjuSU", title: "Ensembling" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does joblib.dump() do?",
      options: [
        "Trains model",
        "Saves model to disk",
        "Deletes model",
        "Evaluates model",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does MLflow log_metric track?",
      options: [
        "Source code",
        "Numerical performance metrics per run",
        "Data files",
        "Docker images",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is model drift?",
      options: [
        "Slow inference",
        "Accuracy degradation due to data distribution change",
        "Memory issue",
        "Version conflict",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is log1p transformation used for?",
      options: [
        "Encoding categories",
        "Reducing skewness in positive features",
        "Normalizing labels",
        "Removing outliers",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is ensembling?",
      options: [
        "Single best model",
        "Combining multiple model predictions",
        "Cross-validation",
        "Hyperparameter tuning",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ml-m5-test1",
      title: "End-to-End ML Pipeline",
      description:
        "On the breast cancer dataset: split data, build a Pipeline (StandardScaler + RandomForest), compute 5-fold CV accuracy, save with joblib, reload and predict on test set.",
      starterCode:
        "import joblib\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split, cross_val_score\n\nX, y = load_breast_cancer(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# 1. Build Pipeline\n# 2. Run 5-fold CV, print mean accuracy\n# 3. Save pipeline to 'ml_pipeline.joblib'\n# 4. Load and print test accuracy\n",
      hints: [
        "Pipeline([('scaler', StandardScaler()), ('rf', RandomForestClassifier())])",
        "cross_val_score(pipe, X_tr, y_tr, cv=5).mean()",
        "joblib.dump(pipe, 'ml_pipeline.joblib'); loaded = joblib.load('ml_pipeline.joblib')",
      ],
    },
  ] as CTestProblem[],
};

// ─── Course Assembly ───────────────────────────────────────────────────────────

export const ML_COURSE = {
  id: "machine-learning-course",
  name: "Machine Learning",
  modules: [
    ml_module0,
    ml_module1,
    ml_module2,
    ml_module3,
    ml_module4,
    ml_module5,
  ],
  certificate: {
    title: "Machine Learning Certificate",
    description:
      "Awarded for completing all 5 modules of the Machine Learning course.",
  },
};

export const ML_ROADMAP_ENTRY = {
  id: "machine-learning-course",
  title: "Machine Learning",
  icon: "🤖",
  color: "from-purple-500/20 to-pink-500/10",
  tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  description: "Master ML algorithms, deep learning, and model deployment.",
  topics: [] as [],
  isCourse: true as const,
  certificate: { title: "Machine Learning Certificate" },
};

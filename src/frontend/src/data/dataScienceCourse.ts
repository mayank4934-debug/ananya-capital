import type {
  CModule,
  CQuizQuestion,
  CTestProblem,
} from "./cProgrammingCourse";

// ─── Module 0: Orientation ────────────────────────────────────────────────────

const ds_module0: CModule = {
  id: "data-science-module0",
  title: "Module 0: Getting Started",
  outcome:
    "Understand the course structure, learning path, how modules unlock, how quizzes work, and what XP you earn",
  isLocked: false,
  parts: [
    {
      id: "data-science-module0-orientation",
      title: "Course Orientation",
      description:
        "Welcome to Data Science! Your companion will guide you through everything you need to know before you start.",
      videoUrl: "",
      hasCodingContent: false,
      notes: `WELCOME TO DATA SCIENCE!

Hey! I'm so thrilled to be your companion on this Data Science journey! 📊 Data is the new oil — and data scientists are the engineers who refine it into gold. From exploratory analysis to machine learning models, I'll guide you every step of the way!

COURSE OVERVIEW
Data Science is the field of extracting insights and predictions from data. You'll use Python with powerful libraries like NumPy and Pandas for data manipulation, Matplotlib and Seaborn for visualization, statistics for interpretation, and scikit-learn for building ML models. Data scientists are among the most sought-after professionals across every industry.

HOW THIS COURSE WORKS
This course has 5 modules, each unlocking after you complete the previous one. Each module has several Parts. Every Part contains: a Video (watch to learn), a Lesson (read for deeper understanding), a Documentation link (open in-app for reference), a Quiz (15 MCQs to test your knowledge), and Coding Questions (in parts where you write Python/data science code). After all parts, there's a Module Test. Complete the test to unlock the next module!

HOW YOU EARN
• 5 XP per correct MCQ answer in quizzes
• 20 XP per completed coding question
• Badges for completing each module
• SP (Study Points) for in-app purchases
• GCoins for daily challenges and streaks

ESTIMATED COMPLETION TIME: ~40 hours
This is a comprehensive data science course. Dedicate 1–2 hours per day and you'll be analyzing real datasets in about 4–5 weeks.

WHAT TO DO NEXT
Complete the Getting Started checklist below, then scroll down to Module 1 to begin! 🚀`,
      docs: [],
      partQuiz: [],
      partProgrammingQuestions: [],
      subsections: [
        {
          id: "data-science-module0-learning-path",
          title: "Your Learning Path",
          content: `Here's the complete roadmap for this Data Science course:

1. Python Basics — Python syntax, variables, data types, control flow
2. NumPy & Pandas — Arrays, DataFrames, data cleaning, manipulation
3. Data Visualization — Matplotlib, Seaborn, Plotly for charts and graphs
4. Statistics — Descriptive stats, probability, distributions, hypothesis testing
5. ML Basics — Regression, classification, clustering with scikit-learn
6. Projects — End-to-end data science projects with real-world datasets`,
          codeExample: "",
        },
        {
          id: "data-science-module0-module-structure",
          title: "How Modules Work",
          content: `Each module in this course is broken into Parts. Here's how a typical Part is structured:

• Video — A curated video explaining the concept visually
• Lesson — In-depth readable content you can study at your own pace
• Documentation — In-app reference material for that topic
• Quiz — 15 multiple-choice questions (5 XP each) to reinforce learning
• Coding Questions — Hands-on Python/data exercises in coding parts

Theory-only parts (like statistics concepts) may not have coding questions. Only parts where you write actual Python or data manipulation code include programming exercises.

Module Unlock Rules:
• Module 1 is always unlocked and ready to start
• Each subsequent module unlocks after you pass the previous module's test
• You can retake quizzes to improve your score`,
          codeExample: "",
        },
        {
          id: "data-science-module0-checklist",
          title: "Getting Started Checklist",
          content: `Complete these steps before heading to Module 1:

1. Read the course overview above — understand what data science is and why it matters
2. Meet your study companion — they'll guide you through every lesson with hints and encouragement
3. Understand how modules unlock — complete one module's test to access the next
4. Know how quizzes work — 15 MCQs per part, plus coding questions in coding topics
5. Check your XP progress bar in the sidebar — it grows as you complete lessons and quizzes
6. You're all set! Head to Module 1 below to begin your Data Science journey 🎉`,
          codeExample: "",
        },
      ],
    },
  ],
  moduleQuiz: [],
  moduleTest: [],
};

// ─── Module 1: Python for Data Science ────────────────────────────────────────

const ds_module1: CModule = {
  id: "ds-python-basics",
  title: "Module 1: Python for Data Science",
  outcome: "Use NumPy arrays, Pandas DataFrames, and data cleaning techniques.",
  isLocked: false,
  parts: [
    {
      id: "ds-m1-p1",
      title: "Part 1: NumPy Basics",
      description: "Arrays, vectorized operations, indexing.",
      videoUrl: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
      notes:
        "NumPy provides fast n-dimensional arrays and vectorized math without slow Python loops.",
      docs: [
        { label: "NumPy Official Docs", url: "https://numpy.org/doc/" },
        {
          label: "NumPy Quickstart",
          url: "https://numpy.org/doc/stable/user/quickstart.html",
        },
      ],
      partQuiz: [
        {
          question: "What is the core object in NumPy?",
          options: ["list", "ndarray", "DataFrame", "Series"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which function creates a zero-filled array?",
          options: ["np.empty()", "np.zeros()", "np.ones()", "np.full()"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does np.arange(0, 10, 2) produce?",
          options: ["[0,2,4,6,8]", "[0,2,4,6,8,10]", "[2,4,6,8]", "[0,2,4,6]"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is broadcasting in NumPy?",
          options: [
            "Sending data over network",
            "Operations between arrays of different shapes",
            "Copying arrays",
            "Sorting arrays",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which indexing selects rows where values > 3?",
          options: ["arr[>3]", "arr[arr>3]", "arr.where(3)", "arr.filter(3)"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does np.dot(a, b) compute?",
          options: [
            "Element-wise product",
            "Matrix multiplication",
            "Array sum",
            "Transpose",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the shape of np.zeros((3,4))?",
          options: ["(4,3)", "(3,4)", "(12,)", "(3,)"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method reshapes an array?",
          options: [
            "arr.resize()",
            "arr.reshape()",
            "arr.rearrange()",
            "arr.transform()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does arr.dtype return?",
          options: [
            "Array shape",
            "Array size",
            "Data type of elements",
            "Memory address",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which function stacks arrays vertically?",
          options: ["np.hstack()", "np.vstack()", "np.concat()", "np.join()"],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m1-p1s1",
          title: "Creating NumPy Arrays",
          content:
            "Create arrays with np.array(), np.zeros(), np.ones(), np.arange(), and np.linspace(). NumPy arrays are typed and stored in contiguous memory for fast access.",
          codeExample:
            "import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\nzeros = np.zeros((3, 3))\nones = np.ones((2, 4))\nrange_arr = np.arange(0, 10, 2)\nlinear = np.linspace(0, 1, 5)\nprint(arr.shape, arr.dtype)",
          video: { youtubeId: "QUT1VHiLmmI", title: "NumPy Arrays" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m1-p1s2",
          title: "Indexing & Slicing",
          content:
            "Index with arr[i], slice with arr[start:stop:step], and use boolean masks arr[arr > 3] for conditional selection.",
          codeExample:
            "a = np.array([10, 20, 30, 40, 50])\nprint(a[1])       # 20\nprint(a[1:4])     # [20 30 40]\nprint(a[::2])     # [10 30 50]\nprint(a[a > 25])  # [30 40 50]\n\nm = np.array([[1,2],[3,4]])\nprint(m[0, 1])    # 2",
          video: { youtubeId: "QUT1VHiLmmI", title: "NumPy Indexing" },
          flowchart: "if-else",
        },
        {
          id: "ds-m1-p1s3",
          title: "Vectorized Operations",
          content:
            "NumPy operations apply element-wise without loops. Broadcasting lets arrays of different shapes interact automatically.",
          codeExample:
            "a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a + b)        # [5 7 9]\nprint(a * 2)        # [2 4 6]\nprint(np.sqrt(a))   # [1. 1.41 1.73]\nprint(np.dot(a, b)) # 32 (dot product)\n\nmatrix = np.array([[1,2,3],[4,5,6]])\nprint(matrix + 10)  # broadcasting scalar",
          video: { youtubeId: "QUT1VHiLmmI", title: "NumPy Vectorization" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m1-p2",
      title: "Part 2: Pandas DataFrames",
      description: "DataFrames, Series, read CSV, select, filter.",
      videoUrl: "https://www.youtube.com/watch?v=ZyhVh-qRZPA",
      notes:
        "Pandas DataFrames are 2D labeled tables; Series are 1D columns—the primary structures for tabular data analysis.",
      docs: [
        { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
        {
          label: "Pandas Getting Started",
          url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html",
        },
      ],
      partQuiz: [
        {
          question: "How do you read a CSV file with Pandas?",
          options: [
            "pd.load_csv()",
            "pd.read_csv()",
            "pd.open_csv()",
            "pd.import_csv()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does df.head() return?",
          options: ["Last 5 rows", "All rows", "First 5 rows", "Column names"],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you select a single column?",
          options: ["df.col", "df['col']", "df[col]", "df.get(col)"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does df.shape return?",
          options: [
            "Column names",
            "(rows, columns) tuple",
            "Data types",
            "Index values",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you filter rows where age > 25?",
          options: [
            "df.filter(age>25)",
            "df[df['age']>25]",
            "df.where('age>25')",
            "df.query('age>25')",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is df.describe() used for?",
          options: [
            "Delete data",
            "Summary statistics",
            "Plot a chart",
            "Sort data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method counts non-null values per column?",
          options: ["df.count()", "df.notna()", "df.notnull()", "df.info()"],
          correct: 0,
          xp: 10,
        },
        {
          question: "How do you group by a column and sum?",
          options: [
            "df.sum(col)",
            "df.groupby('col')['val'].sum()",
            "df.aggregate(col)",
            "df.pivot(col)",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is df.loc used for?",
          options: [
            "Label-based indexing",
            "Integer-based indexing",
            "Column creation",
            "Sorting",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "How do you merge two DataFrames on a key?",
          options: [
            "df1.join(df2)",
            "pd.merge(df1, df2, on='key')",
            "df1.concat(df2)",
            "pd.append(df1, df2)",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m1-p2s1",
          title: "Creating & Reading DataFrames",
          content:
            "Create a DataFrame from a dict or read from CSV/Excel. Use df.head(), df.info(), df.describe(), and df.shape to explore data.",
          codeExample:
            "import pandas as pd\n\ndf = pd.DataFrame({\n    'name': ['Alice','Bob','Charlie'],\n    'age': [25, 30, 28],\n    'score': [88, 92, 76]\n})\nprint(df.head())\nprint(df.shape)\nprint(df.dtypes)\n\n# Read from file\ncsv_df = pd.read_csv('data.csv')\ncsv_df.info()",
          video: { youtubeId: "ZyhVh-qRZPA", title: "Pandas DataFrames" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m1-p2s2",
          title: "Selecting & Filtering",
          content:
            "Select columns with df['col'] or df[['a','b']]. Use df.loc[row, col] for label-based access, df.iloc[i, j] for positional. Filter with boolean masks.",
          codeExample:
            "# Select one column\nages = df['age']\n\n# Select multiple columns\nsubset = df[['name', 'score']]\n\n# Filter rows\nhigh = df[df['score'] > 80]\n\n# loc: label-based\ndf.loc[0, 'name']  # 'Alice'\n\n# iloc: position-based\ndf.iloc[1, 2]  # 92",
          video: { youtubeId: "ZyhVh-qRZPA", title: "Pandas Filtering" },
          flowchart: "if-else",
        },
        {
          id: "ds-m1-p2s3",
          title: "GroupBy & Aggregation",
          content:
            "GroupBy splits data into groups and applies aggregate functions. Use .sum(), .mean(), .count(), .agg() for flexible summaries.",
          codeExample:
            "data = pd.DataFrame({\n    'dept': ['Sales','Sales','Eng','Eng'],\n    'salary': [60000, 65000, 90000, 95000]\n})\n\n# Mean salary by department\nprint(data.groupby('dept')['salary'].mean())\n\n# Multiple aggregations\nprint(data.groupby('dept')['salary'].agg(['min','max','mean']))\n\n# Apply a function\ndata['bonus'] = data['salary'].apply(lambda x: x * 0.1)",
          video: { youtubeId: "ZyhVh-qRZPA", title: "Pandas GroupBy" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m1-p3",
      title: "Part 3: Data Cleaning",
      description: "Handle missing values, duplicates, type conversion.",
      videoUrl: "https://www.youtube.com/watch?v=bDhvCp3_lYw",
      notes:
        "Real-world data is messy; cleaning handles nulls, duplicates, wrong types, and outliers before analysis.",
      docs: [
        {
          label: "Pandas: Working with Missing Data",
          url: "https://pandas.pydata.org/docs/user_guide/missing_data.html",
        },
        {
          label: "Real Python: Data Cleaning",
          url: "https://realpython.com/python-data-cleaning-numpy-pandas/",
        },
      ],
      partQuiz: [
        {
          question: "How do you count null values per column?",
          options: [
            "df.count()",
            "df.isnull().sum()",
            "df.na_count()",
            "df.nulls()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method drops rows with any null?",
          options: [
            "df.remove_na()",
            "df.dropna()",
            "df.drop_nulls()",
            "df.clean()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you fill nulls with zero?",
          options: [
            "df.fill(0)",
            "df.fillna(0)",
            "df.replace_na(0)",
            "df.set_null(0)",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method removes duplicate rows?",
          options: [
            "df.unique()",
            "df.drop_duplicates()",
            "df.dedupe()",
            "df.distinct()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you rename a column?",
          options: [
            "df.col_name = 'new'",
            "df.rename(columns={'old':'new'})",
            "df['old'].name='new'",
            "df.set_column('old','new')",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does df.astype(int) do?",
          options: [
            "Rounds values",
            "Converts column to int type",
            "Filters integers",
            "Creates integer index",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you reset DataFrame index?",
          options: [
            "df.reindex()",
            "df.reset_index()",
            "df.new_index()",
            "df.index = range(len(df))",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does df.duplicated() return?",
          options: [
            "Duplicate values",
            "Boolean Series marking duplicate rows",
            "Count of duplicates",
            "Unique rows",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you replace a specific value?",
          options: [
            "df.swap()",
            "df.replace(old, new)",
            "df.update()",
            "df.change()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which method converts string column to datetime?",
          options: [
            "pd.to_date()",
            "pd.to_datetime()",
            "df.parse_dates()",
            "df.as_datetime()",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m1-p3s1",
          title: "Handling Missing Values",
          content:
            "Detect nulls with df.isnull().sum(). Drop with dropna() or fill with fillna(). Choose strategy based on context: fill with mean for numeric, mode for categorical.",
          codeExample:
            "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'age': [25, np.nan, 30, np.nan],\n    'city': ['NY', 'LA', None, 'SF']\n})\n\nprint(df.isnull().sum())\ndf['age'].fillna(df['age'].mean(), inplace=True)\ndf.dropna(subset=['city'], inplace=True)\nprint(df)",
          video: { youtubeId: "bDhvCp3_lYw", title: "Handling Missing Data" },
          flowchart: "if-else",
        },
        {
          id: "ds-m1-p3s2",
          title: "Duplicates & Type Conversion",
          content:
            "Remove duplicates with drop_duplicates(). Convert column types with astype() or pd.to_datetime(). Wrong types cause silent calculation errors.",
          codeExample:
            "df = pd.DataFrame({\n    'id': [1, 2, 2, 3],\n    'price': ['10.5', '20.0', '20.0', '15.3'],\n    'date': ['2024-01-01', '2024-01-02', '2024-01-02', '2024-01-03']\n})\n\n# Drop duplicates\ndf = df.drop_duplicates()\n\n# Convert types\ndf['price'] = df['price'].astype(float)\ndf['date'] = pd.to_datetime(df['date'])\nprint(df.dtypes)",
          video: { youtubeId: "bDhvCp3_lYw", title: "Data Type Conversion" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m1-p3s3",
          title: "Renaming & Reshaping",
          content:
            "Rename columns with rename(). Reset index with reset_index(). Use melt() to convert wide to long format, pivot_table() for summaries.",
          codeExample:
            "df.rename(columns={'old_name': 'new_name'}, inplace=True)\ndf = df.reset_index(drop=True)\n\n# Wide to long\nlong = pd.melt(df, id_vars=['id'], value_vars=['q1','q2','q3'],\n               var_name='quarter', value_name='sales')\n\n# Pivot table\npivot = df.pivot_table(values='sales', index='region',\n                       columns='product', aggfunc='sum')",
          video: { youtubeId: "bDhvCp3_lYw", title: "Reshaping Data" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which NumPy function creates evenly spaced values?",
      options: ["np.range()", "np.linspace()", "np.space()", "np.evenly()"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does df.info() show?",
      options: [
        "Statistical summary",
        "Column types and null counts",
        "Row values",
        "Index",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "How do you select rows 2–5 by position?",
      options: ["df.loc[2:5]", "df.iloc[2:5]", "df[2:5]", "df.rows[2:5]"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does fillna(df['col'].mean()) do?",
      options: [
        "Removes nulls",
        "Fills nulls with column mean",
        "Replaces zeros",
        "Rounds values",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which NumPy operation is element-wise?",
      options: ["np.dot(a,b)", "a + b", "np.cross(a,b)", "np.linalg.inv(a)"],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ds-m1-test1",
      title: "Clean a Sales Dataset",
      description:
        "Given a DataFrame with missing prices and duplicate order IDs, fill nulls with the column mean and remove duplicates. Print the cleaned shape.",
      starterCode:
        "import pandas as pd\nimport numpy as np\n\ndata = {\n    'order_id': [1, 2, 2, 3, 4],\n    'price': [100, np.nan, 200, 150, np.nan]\n}\ndf = pd.DataFrame(data)\n\n# 1. Fill null prices with mean\n# 2. Drop duplicate order_ids\n# 3. Print df.shape\n",
      hints: [
        "Use df['price'].fillna(df['price'].mean(), inplace=True)",
        "Use df.drop_duplicates(subset=['order_id'], inplace=True)",
        "Print df.shape at the end",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 2: Data Visualization ─────────────────────────────────────────────

const ds_module2: CModule = {
  id: "ds-visualization",
  title: "Module 2: Data Visualization",
  outcome: "Create charts with Matplotlib, Seaborn, and Plotly.",
  isLocked: true,
  parts: [
    {
      id: "ds-m2-p1",
      title: "Part 1: Matplotlib",
      description: "Line, bar, scatter, histogram charts.",
      videoUrl: "https://www.youtube.com/watch?v=UO98lJQ3QGI",
      notes:
        "Matplotlib is the foundational Python visualization library; all other libraries build on its API.",
      docs: [
        {
          label: "Matplotlib Docs",
          url: "https://matplotlib.org/stable/contents.html",
        },
        {
          label: "Matplotlib Tutorials",
          url: "https://matplotlib.org/stable/tutorials/index.html",
        },
      ],
      partQuiz: [
        {
          question: "What function creates a figure and axes?",
          options: [
            "plt.figure()",
            "plt.subplots()",
            "plt.axes()",
            "plt.create()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you show a plot?",
          options: [
            "plt.display()",
            "plt.show()",
            "plt.render()",
            "plt.view()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which plot is best for frequency distribution?",
          options: ["Line", "Scatter", "Histogram", "Pie"],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you set a plot title?",
          options: [
            "ax.title('text')",
            "ax.set_title('text')",
            "plt.title_set()",
            "plt.heading()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does figsize=(10,6) control?",
          options: [
            "Font size",
            "Figure dimensions",
            "Axis limits",
            "Line width",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you save a plot to a file?",
          options: [
            "plt.export()",
            "plt.save()",
            "plt.savefig('file.png')",
            "plt.write()",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which argument adds a label for the legend?",
          options: ["title=", "label=", "name=", "legend="],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does ax.bar() create?",
          options: ["Line chart", "Bar chart", "Scatter plot", "Histogram"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you set x-axis label?",
          options: [
            "ax.xlabel()",
            "ax.set_xlabel()",
            "plt.x_label()",
            "ax.label_x()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is dpi= in savefig?",
          options: [
            "Data per inch",
            "Dots per inch (resolution)",
            "Depth per image",
            "Display pixel index",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m2-p1s1",
          title: "Basic Charts",
          content:
            "Use plt.subplots() to get figure and axes. Call ax.plot(), ax.bar(), ax.scatter(), or ax.hist(). Always add labels and a title for clarity.",
          codeExample:
            "import matplotlib.pyplot as plt\nimport numpy as np\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 1, 7, 3]\n\nfig, ax = plt.subplots(figsize=(8, 4))\nax.plot(x, y, marker='o', color='steelblue', label='Values')\nax.set_title('Line Chart')\nax.set_xlabel('X')\nax.set_ylabel('Y')\nax.legend()\nplt.tight_layout()\nplt.show()",
          video: { youtubeId: "UO98lJQ3QGI", title: "Matplotlib Basics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m2-p1s2",
          title: "Bar & Histogram Charts",
          content:
            "Bar charts compare categories; histograms show numeric distributions. Use bins= to control histogram granularity. Add grid lines for readability.",
          codeExample:
            "categories = ['A', 'B', 'C', 'D']\nvalues = [23, 45, 12, 67]\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 4))\n\n# Bar chart\naxes[0].bar(categories, values, color='coral')\naxes[0].set_title('Category Sales')\n\n# Histogram\ndata = np.random.normal(50, 15, 1000)\naxes[1].hist(data, bins=30, color='steelblue', edgecolor='white')\naxes[1].set_title('Score Distribution')\n\nplt.tight_layout()\nplt.show()",
          video: { youtubeId: "UO98lJQ3QGI", title: "Bar and Histogram" },
          flowchart: "if-else",
        },
        {
          id: "ds-m2-p1s3",
          title: "Subplots & Saving",
          content:
            "Use plt.subplots(rows, cols) for multi-panel figures. plt.tight_layout() fixes overlap. plt.savefig('name.png', dpi=300) saves at high resolution.",
          codeExample:
            "fig, axes = plt.subplots(2, 3, figsize=(14, 8))\n\nfor i, ax in enumerate(axes.flat):\n    data = np.random.randn(100)\n    ax.hist(data, bins=20)\n    ax.set_title(f'Sample {i+1}')\n\nplt.suptitle('Multiple Distributions', fontsize=14)\nplt.tight_layout()\nplt.savefig('distributions.png', dpi=300, bbox_inches='tight')\nprint('Saved!')",
          video: { youtubeId: "UO98lJQ3QGI", title: "Subplots" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m2-p2",
      title: "Part 2: Seaborn",
      description: "Statistical plots: heatmap, boxplot, pairplot.",
      videoUrl: "https://www.youtube.com/watch?v=6GUZXDef2U0",
      notes:
        "Seaborn wraps Matplotlib with better defaults and statistical chart types like heatmaps and violin plots.",
      docs: [
        { label: "Seaborn Docs", url: "https://seaborn.pydata.org/" },
        {
          label: "Seaborn Gallery",
          url: "https://seaborn.pydata.org/examples/index.html",
        },
      ],
      partQuiz: [
        {
          question: "What does sns.heatmap() visualize?",
          options: [
            "Time series",
            "Geographic data",
            "2D data as colored grid",
            "Network graphs",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which Seaborn function shows pairwise relationships?",
          options: [
            "sns.relplot()",
            "sns.pairplot()",
            "sns.jointplot()",
            "sns.catplot()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does annot=True do in heatmap?",
          options: [
            "Adds annotations to file",
            "Shows values in cells",
            "Animates chart",
            "Adds axis labels",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which plot shows outliers clearly?",
          options: ["Line plot", "Bar chart", "Box plot", "Scatter plot"],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you set a Seaborn theme?",
          options: [
            "sns.set_style()",
            "sns.theme()",
            "sns.apply_style()",
            "sns.format()",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What does hue= parameter add?",
          options: [
            "Color palette",
            "Color coding by a category",
            "Transparency",
            "Line style",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which plot shows distribution density?",
          options: [
            "sns.barplot()",
            "sns.kdeplot()",
            "sns.countplot()",
            "sns.lineplot()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does df.corr() compute?",
          options: [
            "Sum of columns",
            "Pearson correlation matrix",
            "Covariance matrix",
            "Column types",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which Seaborn function counts categorical frequencies?",
          options: [
            "sns.barplot()",
            "sns.countplot()",
            "sns.catplot()",
            "sns.histplot()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a violin plot show?",
          options: [
            "Wind speed",
            "Distribution shape + quartiles",
            "Only quartiles",
            "Only mean",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m2-p2s1",
          title: "Correlation Heatmap",
          content:
            "df.corr() returns the pairwise correlation matrix. sns.heatmap(df.corr(), annot=True, cmap='coolwarm') visualizes it. Values near 1 or -1 indicate strong relationships.",
          codeExample:
            "import seaborn as sns\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\n    'age': [25,30,35,28,45],\n    'income': [50000,70000,90000,60000,110000],\n    'score': [80,85,70,88,75]\n})\n\nfig, ax = plt.subplots(figsize=(6,5))\nsns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt='.2f', ax=ax)\nax.set_title('Correlation Matrix')\nplt.tight_layout()\nplt.show()",
          video: { youtubeId: "6GUZXDef2U0", title: "Seaborn Heatmap" },
          flowchart: "if-else",
        },
        {
          id: "ds-m2-p2s2",
          title: "Box & Violin Plots",
          content:
            "Box plots show median, quartiles, and outliers. Violin plots add distribution shape. Both are excellent for comparing groups. Use hue= for categorical color coding.",
          codeExample:
            "import seaborn as sns\nimport matplotlib.pyplot as plt\n\ntips = sns.load_dataset('tips')\n\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\n\nsns.boxplot(data=tips, x='day', y='total_bill', hue='sex', ax=axes[0])\naxes[0].set_title('Box Plot')\n\nsns.violinplot(data=tips, x='day', y='total_bill', ax=axes[1])\naxes[1].set_title('Violin Plot')\n\nplt.tight_layout()\nplt.show()",
          video: { youtubeId: "6GUZXDef2U0", title: "Box and Violin" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m2-p2s3",
          title: "Pairplot for Exploration",
          content:
            "sns.pairplot() generates a grid of scatter plots for all numeric pairs plus histograms on the diagonal. Essential for exploratory data analysis.",
          codeExample:
            "import seaborn as sns\nimport matplotlib.pyplot as plt\n\niris = sns.load_dataset('iris')\n\nsns.pairplot(iris, hue='species', diag_kind='kde',\n             plot_kws={'alpha': 0.6})\nplt.suptitle('Iris Pairplot', y=1.02)\nplt.show()\n\n# Key observation: setosa is clearly separable",
          video: { youtubeId: "6GUZXDef2U0", title: "Seaborn Pairplot" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m2-p3",
      title: "Part 3: Plotly & Interactive Charts",
      description: "Interactive plots with Plotly Express.",
      videoUrl: "https://www.youtube.com/watch?v=GGL6U0k8WYA",
      notes:
        "Plotly creates interactive browser-based charts with zoom, hover, and filters—ideal for dashboards and reports.",
      docs: [
        { label: "Plotly Python Docs", url: "https://plotly.com/python/" },
        {
          label: "Plotly Express Docs",
          url: "https://plotly.com/python/plotly-express/",
        },
      ],
      partQuiz: [
        {
          question: "Which module is used for quick Plotly charts?",
          options: [
            "plotly.graph_objects",
            "plotly.express",
            "plotly.charts",
            "plotly.dash",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you create an interactive scatter plot?",
          options: ["px.point()", "px.scatter()", "px.dot()", "px.plot()"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does fig.show() do?",
          options: [
            "Saves to file",
            "Displays plot in browser/notebook",
            "Clears plot",
            "Exports JSON",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which parameter adds hover tooltips?",
          options: ["tooltip=", "hover_data=", "info=", "labels="],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is Dash used for?",
          options: [
            "Database queries",
            "CLI tools",
            "Interactive web dashboards",
            "ETL pipelines",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "How do you create an animated chart in Plotly?",
          options: [
            "animation=True",
            "animate=col",
            "animation_frame=",
            "px.animate()",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "Which Plotly function creates a choropleth map?",
          options: ["px.map()", "px.choropleth()", "px.geo()", "px.world()"],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you export a Plotly chart as HTML?",
          options: [
            "fig.to_html()",
            "fig.write_html('file.html')",
            "fig.export('html')",
            "fig.save_html()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does color= in px.scatter() control?",
          options: [
            "Background color",
            "Data points colored by a column",
            "Axis color",
            "Title color",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which chart type is best for parts of a whole?",
          options: ["Line", "Bar", "Pie", "Histogram"],
          correct: 2,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m2-p3s1",
          title: "Plotly Express Basics",
          content:
            "Import plotly.express as px. Use px.scatter(), px.line(), px.bar(), px.histogram(). Pass a DataFrame and column names. fig.show() renders an interactive chart.",
          codeExample:
            "import plotly.express as px\nimport pandas as pd\n\ndf = px.data.gapminder().query('year == 2007')\n\nfig = px.scatter(\n    df, x='gdpPercap', y='lifeExp',\n    size='pop', color='continent',\n    hover_name='country', log_x=True,\n    title='GDP vs Life Expectancy (2007)'\n)\nfig.show()",
          video: { youtubeId: "GGL6U0k8WYA", title: "Plotly Express" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m2-p3s2",
          title: "Interactive Line & Bar Charts",
          content:
            "px.line() for time-series, px.bar() for categories. Add hover_data= for extra tooltip info. Update layout with fig.update_layout() for titles and themes.",
          codeExample:
            "import plotly.express as px\n\ndf = px.data.stocks()\n\nfig = px.line(\n    df, x='date', y=['GOOG','AAPL','AMZN'],\n    title='Stock Prices Over Time',\n    labels={'value': 'Price ($)', 'variable': 'Company'}\n)\nfig.update_layout(hovermode='x unified')\nfig.show()",
          video: { youtubeId: "GGL6U0k8WYA", title: "Plotly Line Charts" },
          flowchart: "loop",
        },
        {
          id: "ds-m2-p3s3",
          title: "Animations & Exporting",
          content:
            "Add animation_frame= for time-based animations. Export with fig.write_html() for sharing or fig.write_image() for static files.",
          codeExample:
            "import plotly.express as px\n\ndf = px.data.gapminder()\n\nfig = px.scatter(\n    df, x='gdpPercap', y='lifeExp',\n    animation_frame='year',\n    animation_group='country',\n    size='pop', color='continent',\n    hover_name='country', log_x=True,\n    title='World Development 1952-2007'\n)\nfig.update_layout(transition_duration=500)\n\n# Export\nfig.write_html('dashboard.html')\nprint('Dashboard exported!')",
          video: { youtubeId: "GGL6U0k8WYA", title: "Plotly Animation" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What does plt.tight_layout() do?",
      options: [
        "Stretches axes",
        "Fixes subplot overlap",
        "Removes margins",
        "Zooms in",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which Seaborn function is best for correlation?",
      options: [
        "sns.lineplot()",
        "sns.heatmap()",
        "sns.barplot()",
        "sns.stripplot()",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What makes Plotly different from Matplotlib?",
      options: [
        "Faster rendering",
        "Interactive browser-based charts",
        "More chart types",
        "Better for print",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Which chart shows data distribution shape?",
      options: ["Bar chart", "Line chart", "Histogram", "Pie chart"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does hue= add in Seaborn?",
      options: [
        "Color by category",
        "Data labels",
        "Transparency",
        "Line weight",
      ],
      correct: 0,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ds-m2-test1",
      title: "Sales Visualization",
      description:
        "Create a bar chart showing monthly sales totals using Matplotlib. Label axes and add a title.",
      starterCode:
        "import matplotlib.pyplot as plt\n\nmonths = ['Jan','Feb','Mar','Apr','May','Jun']\nsales = [12000, 15000, 9000, 18000, 14000, 20000]\n\n# Create bar chart with labeled axes and title\nfig, ax = plt.subplots(figsize=(8,5))\n# ... your code here ...\nplt.show()\n",
      hints: [
        "Use ax.bar(months, sales) for the bar chart",
        "Add ax.set_xlabel('Month'), ax.set_ylabel('Sales ($)'), ax.set_title('...')",
        "Add ax.grid(axis='y', alpha=0.3) for readability",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 3: Statistics & Math ──────────────────────────────────────────────

const ds_module3: CModule = {
  id: "ds-statistics",
  title: "Module 3: Statistics & Math",
  outcome:
    "Apply descriptive stats, probability, and hypothesis testing to data.",
  isLocked: true,
  parts: [
    {
      id: "ds-m3-p1",
      title: "Part 1: Descriptive Statistics",
      description: "Mean, median, mode, variance, std dev.",
      videoUrl: "https://www.youtube.com/watch?v=zRUliXuwJCQ",
      notes:
        "Descriptive statistics summarize dataset properties: central tendency (mean, median, mode) and spread (variance, std dev).",
      docs: [
        {
          label: "scipy.stats Docs",
          url: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        },
        {
          label: "Khan Academy: Statistics",
          url: "https://www.khanacademy.org/math/statistics-probability",
        },
      ],
      partQuiz: [
        {
          question: "What is the mean of [2, 4, 6, 8]?",
          options: ["4", "5", "6", "4.5"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the median of [1, 3, 5, 7, 9]?",
          options: ["3", "5", "7", "4"],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which measure is most affected by outliers?",
          options: ["Median", "Mode", "Mean", "Range"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is variance?",
          options: [
            "Average of values",
            "Average squared deviation from the mean",
            "Median spread",
            "Standard deviation squared away",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is standard deviation?",
          options: [
            "Mean distance from zero",
            "Square root of variance",
            "Variance squared",
            "Sum of differences",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does df.describe() show?",
          options: [
            "Null counts",
            "Count, mean, std, min, quartiles, max",
            "Column types",
            "Unique values",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a percentile?",
          options: [
            "Fraction of data",
            "Value below which X% of data falls",
            "Variance percentage",
            "Sorted rank",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which central tendency is best for skewed data?",
          options: ["Mean", "Mode", "Median", "Variance"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the interquartile range (IQR)?",
          options: ["Q3 - Q1", "Q2 - Q1", "Max - Min", "Q4 - Q2"],
          correct: 0,
          xp: 10,
        },
        {
          question: "What does a box plot show?",
          options: [
            "Mean only",
            "Median, IQR, outliers",
            "Mode only",
            "All raw values",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m3-p1s1",
          title: "Central Tendency",
          content:
            "Mean = sum/n. Median = middle value (less affected by outliers). Mode = most frequent value. Use median for skewed distributions like income data.",
          codeExample:
            "import numpy as np\nfrom scipy import stats\n\ndata = [10, 20, 20, 30, 40, 100]  # 100 is an outlier\n\nprint('Mean:  ', np.mean(data))    # 36.67 (affected by outlier)\nprint('Median:', np.median(data))  # 25.0 (robust)\nprint('Mode:  ', stats.mode(data).mode[0])  # 20\n\n# With Pandas\nimport pandas as pd\ns = pd.Series(data)\nprint(s.describe())",
          video: { youtubeId: "zRUliXuwJCQ", title: "Central Tendency" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m3-p1s2",
          title: "Spread & Variability",
          content:
            "Variance measures average squared deviation. Std deviation is its square root (same units as data). IQR = Q3 - Q1, robust to outliers. Use np.var(), np.std(), np.percentile().",
          codeExample:
            "import numpy as np\n\ndata = np.array([12, 15, 14, 10, 18, 11, 16, 13])\n\nprint('Variance:', np.var(data))\nprint('Std Dev: ', np.std(data))\nprint('Min:     ', np.min(data))\nprint('Max:     ', np.max(data))\n\nq1 = np.percentile(data, 25)\nq3 = np.percentile(data, 75)\niqr = q3 - q1\nprint('IQR:     ', iqr)",
          video: { youtubeId: "zRUliXuwJCQ", title: "Spread and Variance" },
          flowchart: "if-else",
        },
        {
          id: "ds-m3-p1s3",
          title: "Distribution Shapes",
          content:
            "Normal distribution: symmetric, mean=median=mode. Skew: positive (tail right), negative (tail left). Kurtosis measures tail heaviness. Use scipy.stats to compute these.",
          codeExample:
            "from scipy import stats\nimport numpy as np\n\nnormal_data = np.random.normal(50, 10, 1000)\nskewed_data = np.random.exponential(20, 1000)\n\nprint('Normal skew:  ', stats.skew(normal_data))\nprint('Skewed skew:  ', stats.skew(skewed_data))\nprint('Normal kurt:  ', stats.kurtosis(normal_data))\n\n# Check normality\nstat, p = stats.shapiro(normal_data[:50])\nprint('Shapiro p-value:', p, '(normal if > 0.05)')",
          video: { youtubeId: "zRUliXuwJCQ", title: "Distributions" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m3-p2",
      title: "Part 2: Probability",
      description: "Probability rules, Bayes theorem, distributions.",
      videoUrl: "https://www.youtube.com/watch?v=uzkc-qNVoOk",
      notes:
        "Probability quantifies uncertainty: P(A) = favorable/total. Bayes theorem updates beliefs with new evidence.",
      docs: [
        {
          label: "StatQuest: Probability",
          url: "https://www.youtube.com/@statquest",
        },
        {
          label: "Khan Academy: Probability",
          url: "https://www.khanacademy.org/math/statistics-probability/probability-library",
        },
      ],
      partQuiz: [
        {
          question: "What is P(A or B) for mutually exclusive events?",
          options: [
            "P(A) * P(B)",
            "P(A) + P(B)",
            "P(A) - P(B)",
            "1 - P(A)P(B)",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is P(A and B) for independent events?",
          options: ["P(A) + P(B)", "P(A) / P(B)", "P(A) * P(B)", "P(A|B)"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does conditional probability P(A|B) mean?",
          options: [
            "P(A) given B has occurred",
            "P(A) times P(B)",
            "P(A) without B",
            "P(B) given A",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is the sum of all probabilities in a distribution?",
          options: ["0", "0.5", "1", "Depends on data"],
          correct: 2,
          xp: 10,
        },
        {
          question: "Bayes theorem updates which probability?",
          options: [
            "Prior probability",
            "Posterior probability",
            "Joint probability",
            "Marginal probability",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What distribution models coin flips?",
          options: ["Normal", "Poisson", "Binomial", "Exponential"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the expected value?",
          options: [
            "Most likely value",
            "Weighted average of all outcomes",
            "Maximum probability",
            "Median of distribution",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does the 68-95-99.7 rule describe?",
          options: [
            "Tax rates",
            "Standard deviations in a normal distribution",
            "Sample sizes",
            "P-value thresholds",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the complement of event A?",
          options: ["P(A) + 1", "1 - P(A)", "P(A) / 2", "P(B)"],
          correct: 1,
          xp: 10,
        },
        {
          question: "What distribution models rare events per time unit?",
          options: ["Binomial", "Normal", "Uniform", "Poisson"],
          correct: 3,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m3-p2s1",
          title: "Probability Fundamentals",
          content:
            "P(event) = favorable outcomes / total outcomes. Complement: P(not A) = 1 - P(A). Addition rule: P(A or B) = P(A) + P(B) - P(A and B). Multiplication (independent): P(A and B) = P(A) * P(B).",
          codeExample:
            "# Die roll probabilities\ntotal = 6\n\np_even = 3/6  # {2,4,6}\np_gt4  = 2/6  # {5,6}\np_even_or_gt4 = p_even + p_gt4 - 1/6  # {6} overlap\n\nprint(f'P(even) = {p_even:.2f}')\nprint(f'P(>4) = {p_gt4:.2f}')\nprint(f'P(even or >4) = {p_even_or_gt4:.2f}')\n\n# Two coin flips: P(HH) = P(H)*P(H) for independent\nprint(f'P(HH) = {0.5 * 0.5}')",
          video: { youtubeId: "uzkc-qNVoOk", title: "Probability Basics" },
          flowchart: "if-else",
        },
        {
          id: "ds-m3-p2s2",
          title: "Probability Distributions",
          content:
            "Binomial: n trials, probability p. Normal: continuous bell curve, parameterized by mean and std. Poisson: events per interval. Use scipy.stats for CDF/PDF calculations.",
          codeExample:
            "from scipy import stats\nimport numpy as np\n\n# Binomial: 10 coin flips, P(heads=7)\nbinom_p = stats.binom.pmf(7, n=10, p=0.5)\nprint(f'P(7 heads in 10 flips) = {binom_p:.4f}')\n\n# Normal: P(X < 1.96) for standard normal\nnorm_p = stats.norm.cdf(1.96)\nprint(f'P(Z < 1.96) = {norm_p:.4f}')  # ≈ 0.975\n\n# Poisson: avg 3 customers/min, P(exactly 5)\npoisson_p = stats.poisson.pmf(5, mu=3)\nprint(f'P(5 customers) = {poisson_p:.4f}')",
          video: {
            youtubeId: "uzkc-qNVoOk",
            title: "Probability Distributions",
          },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m3-p2s3",
          title: "Bayes Theorem",
          content:
            "P(A|B) = P(B|A) * P(A) / P(B). Prior P(A) is updated with evidence B to get posterior P(A|B). Fundamental in spam filters, medical diagnosis, and ML.",
          codeExample:
            "# Medical test example\n# Disease prevalence (prior)\np_disease = 0.01\n\n# Test sensitivity: P(positive | disease) = 0.95\np_pos_given_disease = 0.95\n\n# False positive rate: P(positive | no disease) = 0.05\np_pos_given_no_disease = 0.05\n\n# Total P(positive)\np_positive = (p_pos_given_disease * p_disease +\n              p_pos_given_no_disease * (1 - p_disease))\n\n# Bayes: P(disease | positive)\np_disease_given_pos = (p_pos_given_disease * p_disease) / p_positive\nprint(f'P(disease|positive test) = {p_disease_given_pos:.3f}')  # ~0.16",
          video: { youtubeId: "uzkc-qNVoOk", title: "Bayes Theorem" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m3-p3",
      title: "Part 3: Hypothesis Testing",
      description: "p-values, t-test, chi-square, A/B testing.",
      videoUrl: "https://www.youtube.com/watch?v=0oc49DyA3hU",
      notes:
        "Hypothesis testing determines if observed differences are statistically significant or just due to chance.",
      docs: [
        {
          label: "scipy.stats: Hypothesis Tests",
          url: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        },
        {
          label: "StatQuest: Hypothesis Testing",
          url: "https://www.youtube.com/@statquest",
        },
      ],
      partQuiz: [
        {
          question: "What is the null hypothesis (H0)?",
          options: [
            "There is an effect",
            "No effect or difference exists",
            "The alternative hypothesis",
            "Sample mean",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does p < 0.05 mean?",
          options: [
            "Effect is 5% likely",
            "Reject H0 at 5% significance level",
            "Accept H0",
            "Sample size is 5%",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a Type I error?",
          options: [
            "False negative",
            "False positive (rejecting true H0)",
            "Low p-value",
            "High variance",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which test compares means of two independent groups?",
          options: [
            "Chi-square test",
            "ANOVA",
            "Independent t-test",
            "Correlation test",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does chi-square test check?",
          options: [
            "Mean differences",
            "Independence between categorical variables",
            "Variance equality",
            "Sample size",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is statistical power?",
          options: [
            "p-value size",
            "Probability of detecting a real effect",
            "Sample mean",
            "Effect size",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a confidence interval?",
          options: [
            "Exact parameter value",
            "Range likely to contain the true parameter",
            "P-value range",
            "Sample range",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is effect size?",
          options: [
            "P-value magnitude",
            "Practical significance of a difference",
            "Sample size",
            "Variance ratio",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which test compares means of 3+ groups?",
          options: ["t-test", "Chi-square", "ANOVA", "Pearson test"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does a two-tailed test check?",
          options: [
            "One direction",
            "Both directions (greater or less)",
            "Only equality",
            "Correlation",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m3-p3s1",
          title: "p-values & Significance",
          content:
            "p-value = probability of observing results as extreme as measured, assuming H0 is true. Reject H0 if p < alpha (typically 0.05). Smaller p = stronger evidence against H0.",
          codeExample:
            "from scipy import stats\nimport numpy as np\n\n# Is mean different from 100?\ndata = np.random.normal(102, 10, 30)\n\nt_stat, p_value = stats.ttest_1samp(data, popmean=100)\nprint(f'T-statistic: {t_stat:.3f}')\nprint(f'P-value: {p_value:.4f}')\n\nif p_value < 0.05:\n    print('Reject H0: mean differs from 100')\nelse:\n    print('Fail to reject H0')",
          video: {
            youtubeId: "0oc49DyA3hU",
            title: "p-values and Significance",
          },
          flowchart: "if-else",
        },
        {
          id: "ds-m3-p3s2",
          title: "t-Test & Chi-Square",
          content:
            "Independent t-test compares two group means. Chi-square tests independence between categorical variables. Both return (statistic, p_value).",
          codeExample:
            "from scipy import stats\nimport numpy as np\n\n# t-test: Do groups A and B have different means?\ngroup_a = np.random.normal(50, 10, 50)\ngroup_b = np.random.normal(55, 10, 50)\n\nt, p = stats.ttest_ind(group_a, group_b)\nprint(f'Two-sample t-test: t={t:.3f}, p={p:.4f}')\n\n# Chi-square: Is product preference independent of gender?\nobserved = [[30, 20], [25, 35]]\nchi2, p_chi, dof, expected = stats.chi2_contingency(observed)\nprint(f'Chi-square: chi2={chi2:.3f}, p={p_chi:.4f}')",
          video: { youtubeId: "0oc49DyA3hU", title: "t-Test and Chi-Square" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m3-p3s3",
          title: "A/B Testing Framework",
          content:
            "A/B test = controlled experiment comparing two versions. Steps: define metric → set sample size (power analysis) → run test → compute p-value → decide. Avoid peeking early.",
          codeExample:
            "from scipy import stats\nimport numpy as np\n\n# A/B test: Which landing page converts better?\nnp.random.seed(42)\n\n# Control: 5% conversion rate, 1000 visitors\ncontrol = np.random.binomial(1, 0.05, 1000)\n\n# Variant: 6% conversion rate, 1000 visitors\nvariant = np.random.binomial(1, 0.06, 1000)\n\nprint(f'Control rate:  {control.mean():.3f}')\nprint(f'Variant rate:  {variant.mean():.3f}')\n\nt, p = stats.ttest_ind(control, variant)\nprint(f'p-value: {p:.4f}')\nprint('Significant!' if p < 0.05 else 'Not significant')",
          video: { youtubeId: "0oc49DyA3hU", title: "A/B Testing" },
          flowchart: "loop",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "Which measure is robust to outliers?",
      options: ["Mean", "Variance", "Median", "Range"],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does a small p-value suggest?",
      options: [
        "H0 is true",
        "Strong evidence against H0",
        "Large sample size",
        "High variance",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Bayes theorem helps compute which probability?",
      options: ["Prior", "Posterior", "Joint", "Marginal"],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is the 68-95-99.7 rule for?",
      options: [
        "Sample sizes",
        "Normal distribution std deviations",
        "Percentiles only",
        "Confidence intervals",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question:
        "Which test checks if two categorical variables are independent?",
      options: ["t-test", "ANOVA", "Chi-square", "Pearson r"],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ds-m3-test1",
      title: "Hypothesis Test on Sales Data",
      description:
        "You have sales data for two regions. Use a t-test to determine if their mean sales are significantly different.",
      starterCode:
        "from scipy import stats\nimport numpy as np\n\nnorth = np.array([120, 145, 132, 161, 140, 155, 128, 138])\nsouth = np.array([105, 118, 112, 125, 110, 130, 108, 115])\n\n# Perform independent t-test\n# Print t-statistic, p-value, and your conclusion\n",
      hints: [
        "Use stats.ttest_ind(north, south)",
        "Unpack as t_stat, p_value = stats.ttest_ind(...)",
        "Conclude: if p < 0.05 print 'Significant difference', else 'No significant difference'",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 4: Machine Learning Basics ────────────────────────────────────────

const ds_module4: CModule = {
  id: "ds-ml-basics",
  title: "Module 4: Machine Learning Basics",
  outcome: "Apply supervised, unsupervised learning, and evaluate models.",
  isLocked: true,
  parts: [
    {
      id: "ds-m4-p1",
      title: "Part 1: Supervised Learning",
      description: "Linear regression, logistic regression, decision trees.",
      videoUrl: "https://www.youtube.com/watch?v=NWONeJKn6kc",
      notes:
        "Supervised learning trains a model on labeled data to predict outputs for unseen inputs.",
      docs: [
        {
          label: "scikit-learn: Supervised Learning",
          url: "https://scikit-learn.org/stable/supervised_learning.html",
        },
        { label: "scikit-learn Docs", url: "https://scikit-learn.org/stable/" },
      ],
      partQuiz: [
        {
          question: "What is supervised learning?",
          options: [
            "Learning without labels",
            "Learning from labeled input-output pairs",
            "Clustering data",
            "Reducing dimensions",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which algorithm predicts a continuous value?",
          options: [
            "Logistic Regression",
            "K-Means",
            "Linear Regression",
            "PCA",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is train_test_split used for?",
          options: [
            "Normalizing data",
            "Splitting data into training and testing sets",
            "Cross-validation",
            "Feature selection",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which metric measures regression accuracy?",
          options: ["Accuracy", "F1 score", "Mean Squared Error", "Precision"],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does fit() do in scikit-learn?",
          options: [
            "Tests the model",
            "Trains the model on data",
            "Predicts output",
            "Normalizes features",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is overfitting?",
          options: [
            "Model too simple",
            "Model memorizes training data, fails on new data",
            "Missing features",
            "High bias",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which tree method handles classification?",
          options: [
            "LinearRegression",
            "DecisionTreeClassifier",
            "Ridge",
            "SVR",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does predict() return?",
          options: [
            "Training score",
            "Model coefficients",
            "Predictions for new data",
            "Feature importance",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the purpose of StandardScaler?",
          options: [
            "Normalize target values",
            "Scale features to mean=0, std=1",
            "Remove outliers",
            "Encode categories",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is regularization?",
          options: [
            "Removing duplicate data",
            "Penalty on model complexity to prevent overfitting",
            "Scaling features",
            "Splitting data",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m4-p1s1",
          title: "Linear & Logistic Regression",
          content:
            "Linear regression predicts continuous values. Logistic regression predicts probabilities for binary classification. Both follow the fit() / predict() API in scikit-learn.",
          codeExample:
            "from sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nimport numpy as np\n\n# Linear regression\nX = np.array([[1],[2],[3],[4],[5]])\ny = np.array([2, 4, 5, 4, 6])\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = LinearRegression().fit(X_train, y_train)\nprint('Predictions:', model.predict(X_test))\nprint('Score:', model.score(X_test, y_test))",
          video: { youtubeId: "NWONeJKn6kc", title: "Linear Regression" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m4-p1s2",
          title: "Decision Trees & Random Forest",
          content:
            "Decision trees split data on features to minimize impurity. Random Forest combines many trees via bagging. feature_importances_ shows which features matter most.",
          codeExample:
            "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\niris = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(\n    iris.data, iris.target, test_size=0.2, random_state=42)\n\ndt = DecisionTreeClassifier(max_depth=3).fit(X_train, y_train)\nrf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X_train, y_train)\n\nprint('DT accuracy:', dt.score(X_test, y_test))\nprint('RF accuracy:', rf.score(X_test, y_test))\nprint('Feature importance:', rf.feature_importances_)",
          video: {
            youtubeId: "NWONeJKn6kc",
            title: "Decision Trees Random Forest",
          },
          flowchart: "if-else",
        },
        {
          id: "ds-m4-p1s3",
          title: "Preprocessing Pipeline",
          content:
            "Pipelines chain preprocessing and model training. StandardScaler() scales features. LabelEncoder/OneHotEncoder handles categorical variables. Avoids data leakage.",
          codeExample:
            "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\n\ndata = load_breast_cancer()\nX_train, X_test, y_train, y_test = train_test_split(\n    data.data, data.target, test_size=0.2, random_state=42)\n\npipeline = Pipeline([\n    ('scaler', StandardScaler()),\n    ('model', LogisticRegression(max_iter=1000))\n])\npipeline.fit(X_train, y_train)\nprint('Pipeline accuracy:', pipeline.score(X_test, y_test))",
          video: { youtubeId: "NWONeJKn6kc", title: "ML Pipeline" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m4-p2",
      title: "Part 2: Unsupervised Learning",
      description: "K-Means clustering, PCA dimensionality reduction.",
      videoUrl: "https://www.youtube.com/watch?v=EItlUEPCIzM",
      notes:
        "Unsupervised learning finds patterns without labels: clustering groups similar data, PCA reduces dimensions.",
      docs: [
        {
          label: "scikit-learn: Clustering",
          url: "https://scikit-learn.org/stable/modules/clustering.html",
        },
        {
          label: "scikit-learn: Decomposition",
          url: "https://scikit-learn.org/stable/modules/decomposition.html",
        },
      ],
      partQuiz: [
        {
          question: "What does K-Means require as input?",
          options: [
            "Labels",
            "Number of clusters K",
            "Decision boundary",
            "Training split",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is the inertia in K-Means?",
          options: [
            "Number of clusters",
            "Sum of squared distances to cluster centers",
            "Algorithm speed",
            "Feature count",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does PCA stand for?",
          options: [
            "Principal Component Analysis",
            "Primary Clustering Algorithm",
            "Predictive Component Array",
            "Partial Correlation Analysis",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is the elbow method for?",
          options: [
            "Finding optimal features",
            "Choosing optimal K in K-Means",
            "Reducing variance",
            "Selecting principal components",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does explained_variance_ratio_ show in PCA?",
          options: [
            "Cluster count",
            "Fraction of variance each component explains",
            "Feature importance",
            "Eigenvalues",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which is an unsupervised task?",
          options: [
            "Spam classification",
            "Fraud detection",
            "Customer segmentation",
            "Image recognition",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does DBSCAN identify that K-Means can't?",
          options: [
            "Clusters of any shape",
            "K centroids",
            "Labeled classes",
            "Regression targets",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is dimensionality reduction used for?",
          options: [
            "Adding features",
            "Reducing features while retaining information",
            "Normalizing data",
            "Imputing values",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "In K-Means, what is a centroid?",
          options: [
            "Original data point",
            "Center of a cluster",
            "Outlier",
            "Feature weight",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is t-SNE used for?",
          options: [
            "Regression",
            "High-dimensional data visualization",
            "Clustering",
            "Feature selection",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m4-p2s1",
          title: "K-Means Clustering",
          content:
            "K-Means partitions data into K clusters by minimizing distance to centroids. Choose K with the elbow method: plot inertia vs K and find the bend.",
          codeExample:
            "from sklearn.cluster import KMeans\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Generate sample data\nnp.random.seed(42)\nX = np.vstack([np.random.normal(loc, 0.5, (50, 2))\n               for loc in [[0,0],[3,3],[0,3]]])\n\n# Elbow method\ninertias = []\nfor k in range(1, 8):\n    km = KMeans(n_clusters=k, random_state=42, n_init=10)\n    km.fit(X)\n    inertias.append(km.inertia_)\n\n# Fit with K=3\nkm = KMeans(n_clusters=3, random_state=42, n_init=10).fit(X)\nprint('Labels:', km.labels_[:10])",
          video: { youtubeId: "EItlUEPCIzM", title: "K-Means Clustering" },
          flowchart: "loop",
        },
        {
          id: "ds-m4-p2s2",
          title: "PCA Dimensionality Reduction",
          content:
            "PCA finds directions of maximum variance. Use it to visualize high-dimensional data or reduce noise before modeling. n_components controls how many components to keep.",
          codeExample:
            "from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.datasets import load_digits\n\ndigits = load_digits()\nX = StandardScaler().fit_transform(digits.data)\n\n# Reduce 64 features to 2 for visualization\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X)\nprint('Original shape:', X.shape)\nprint('Reduced shape:', X_pca.shape)\nprint('Variance explained:', pca.explained_variance_ratio_.sum())",
          video: { youtubeId: "EItlUEPCIzM", title: "PCA" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m4-p2s3",
          title: "Clustering Applications",
          content:
            "Customer segmentation, anomaly detection, and document grouping are common clustering applications. Always scale features before clustering and visualize results.",
          codeExample:
            "from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nimport numpy as np\n\n# Customer segmentation\nnp.random.seed(0)\ncustomers = np.column_stack([\n    np.random.normal(500, 200, 200),  # spending\n    np.random.normal(30, 10, 200),    # visits/month\n])\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(customers)\n\nkm = KMeans(n_clusters=3, random_state=42, n_init=10)\nlabels = km.fit_predict(X_scaled)\n\nfor seg in range(3):\n    seg_data = customers[labels == seg]\n    print(f'Segment {seg}: avg_spend={seg_data[:,0].mean():.0f}')",
          video: { youtubeId: "EItlUEPCIzM", title: "Clustering Applications" },
          flowchart: "if-else",
        },
      ],
    },
    {
      id: "ds-m4-p3",
      title: "Part 3: Model Evaluation",
      description: "Accuracy, precision, recall, F1, cross-validation.",
      videoUrl: "https://www.youtube.com/watch?v=85dtiMz9tSo",
      notes:
        "Model evaluation measures how well a model generalizes; accuracy alone is misleading for imbalanced classes.",
      docs: [
        {
          label: "scikit-learn: Model Evaluation",
          url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
        },
        {
          label: "Kaggle: Model Validation",
          url: "https://www.kaggle.com/learn/intermediate-machine-learning",
        },
      ],
      partQuiz: [
        {
          question: "What is accuracy?",
          options: [
            "TP/(TP+FP)",
            "Correct predictions / total predictions",
            "TP/(TP+FN)",
            "F1 score",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is precision?",
          options: [
            "All correct predictions",
            "TP/(TP+FP) — correct positive predictions",
            "TP/(TP+FN)",
            "Overall accuracy",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is recall (sensitivity)?",
          options: [
            "TP/(TP+FP)",
            "TN/(TN+FP)",
            "TP/(TP+FN) — catching all positives",
            "Accuracy on positives",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What is the F1 score?",
          options: [
            "Accuracy * Precision",
            "Harmonic mean of precision and recall",
            "Precision + Recall",
            "Precision / Recall",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is cross-validation?",
          options: [
            "Testing on training data",
            "Splitting data K ways to evaluate generalization",
            "Hyperparameter search",
            "Feature selection",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does ROC-AUC measure?",
          options: [
            "Regression error",
            "Model's ability to distinguish classes",
            "Training speed",
            "Feature count",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a confusion matrix?",
          options: [
            "Model architecture",
            "Table showing TP/FP/TN/FN counts",
            "Loss function",
            "Accuracy over epochs",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When is recall more important than precision?",
          options: [
            "Spam detection",
            "Product recommendations",
            "Cancer screening (minimize false negatives)",
            "Search results",
          ],
          correct: 2,
          xp: 10,
        },
        {
          question: "What does GridSearchCV find?",
          options: [
            "Best features",
            "Optimal hyperparameters via grid search",
            "Best train/test split",
            "Optimal model type",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is data leakage?",
          options: [
            "Missing values",
            "Test data information leaking into training",
            "Model overfitting",
            "Scaling errors",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m4-p3s1",
          title: "Classification Metrics",
          content:
            "Accuracy is misleading for imbalanced classes. Use classification_report() for precision, recall, and F1 per class. Confusion matrix shows TP/FP/TN/FN breakdown.",
          codeExample:
            "from sklearn.metrics import (classification_report,\n    confusion_matrix, accuracy_score)\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\n\ndata = load_breast_cancer()\nX_train, X_test, y_train, y_test = train_test_split(\n    data.data, data.target, test_size=0.2, random_state=42)\n\nmodel = RandomForestClassifier(random_state=42).fit(X_train, y_train)\ny_pred = model.predict(X_test)\n\nprint(f'Accuracy: {accuracy_score(y_test, y_pred):.3f}')\nprint(confusion_matrix(y_test, y_pred))\nprint(classification_report(y_test, y_pred))",
          video: { youtubeId: "85dtiMz9tSo", title: "Classification Metrics" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m4-p3s2",
          title: "Cross-Validation",
          content:
            "K-Fold cross-validation splits data K times. Each fold is used as validation once. cross_val_score() returns K scores — their mean and std indicate generalization.",
          codeExample:
            "from sklearn.model_selection import cross_val_score, KFold\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nimport numpy as np\n\niris = load_iris()\nmodel = RandomForestClassifier(random_state=42)\n\n# 5-fold cross-validation\nscores = cross_val_score(model, iris.data, iris.target,\n                         cv=5, scoring='accuracy')\nprint(f'CV Scores: {scores}')\nprint(f'Mean: {scores.mean():.3f} ± {scores.std():.3f}')",
          video: { youtubeId: "85dtiMz9tSo", title: "Cross-Validation" },
          flowchart: "loop",
        },
        {
          id: "ds-m4-p3s3",
          title: "Hyperparameter Tuning",
          content:
            "GridSearchCV exhaustively searches hyperparameter combinations. RandomizedSearchCV samples randomly — faster for large spaces. Both use cross-validation internally.",
          codeExample:
            "from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\niris = load_iris()\n\nparam_grid = {\n    'n_estimators': [50, 100, 200],\n    'max_depth': [3, 5, None],\n    'min_samples_split': [2, 5]\n}\n\ngs = GridSearchCV(RandomForestClassifier(random_state=42),\n                  param_grid, cv=5, scoring='accuracy')\ngs.fit(iris.data, iris.target)\nprint('Best params:', gs.best_params_)\nprint('Best score: ', gs.best_score_)",
          video: { youtubeId: "85dtiMz9tSo", title: "Hyperparameter Tuning" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the scikit-learn API pattern?",
      options: [
        "create → run → evaluate",
        "fit → predict → score",
        "load → transform → export",
        "train → validate → deploy",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does K-Means minimize?",
      options: [
        "Number of features",
        "Sum of squared distances to centroids",
        "Classification error",
        "P-value",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "When should you use median over mean?",
      options: [
        "Never",
        "Symmetric data",
        "Skewed or outlier-heavy data",
        "Small samples only",
      ],
      correct: 2,
      xp: 10,
    },
    {
      question: "What does cross_val_score() return?",
      options: [
        "One accuracy value",
        "K accuracy scores for K folds",
        "Best hyperparameters",
        "Confusion matrix",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is PCA primarily used for?",
      options: [
        "Classification",
        "Anomaly detection",
        "Dimensionality reduction",
        "Feature scaling",
      ],
      correct: 2,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ds-m4-test1",
      title: "Iris Classifier",
      description:
        "Load the Iris dataset, split it 80/20, train a Random Forest, and print accuracy, precision, recall, and F1 score.",
      starterCode:
        "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report\n\niris = load_iris()\n\n# 1. Split data 80/20\n# 2. Train RandomForestClassifier\n# 3. Predict on test set\n# 4. Print classification_report\n",
      hints: [
        "X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=42)",
        "model = RandomForestClassifier(random_state=42).fit(X_train, y_train)",
        "print(classification_report(y_test, model.predict(X_test)))",
      ],
    },
  ] as CTestProblem[],
};

// ─── Module 5: Real-World Data Projects ───────────────────────────────────────

const ds_module5: CModule = {
  id: "ds-real-world",
  title: "Module 5: Real-World Data Projects",
  outcome: "Execute EDA, feature engineering, and an end-to-end ML pipeline.",
  isLocked: true,
  parts: [
    {
      id: "ds-m5-p1",
      title: "Part 1: EDA on Datasets",
      description: "Exploratory data analysis workflow.",
      videoUrl: "https://www.youtube.com/watch?v=xi0vhXFPegw",
      notes:
        "EDA uncovers data quality issues, distributions, and relationships before any modeling.",
      docs: [
        {
          label: "Kaggle: EDA Guide",
          url: "https://www.kaggle.com/learn/data-visualization",
        },
        {
          label: "Real Python: EDA with Pandas",
          url: "https://realpython.com/pandas-dataframe/",
        },
      ],
      partQuiz: [
        {
          question: "What is the first step in EDA?",
          options: [
            "Train a model",
            "Understand data structure and types",
            "Apply machine learning",
            "Normalize features",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does df.corr() show?",
          options: [
            "Column names",
            "Pairwise correlation coefficients",
            "Missing values",
            "Data types",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a univariate analysis?",
          options: [
            "Analysis of two variables",
            "Analysis of one variable at a time",
            "Multivariate regression",
            "Clustering",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "How do you detect outliers visually?",
          options: [
            "Histogram only",
            "Box plot or scatter plot",
            "Bar chart",
            "Pie chart",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does skewness indicate?",
          options: [
            "Missing values",
            "Asymmetry in data distribution",
            "Correlation strength",
            "Variance",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Which Pandas method shows unique value counts?",
          options: [
            "df.unique()",
            "df['col'].value_counts()",
            "df['col'].count()",
            "df.nunique()",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a bivariate analysis?",
          options: [
            "Two variables analyzed together",
            "Single variable",
            "All variables simultaneously",
            "Time series analysis",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "Why normalize features before modeling?",
          options: [
            "To reduce rows",
            "To ensure features have equal scale",
            "To remove nulls",
            "To encode categories",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does a scatter matrix show?",
          options: [
            "Confusion matrix",
            "All pairwise scatter plots",
            "Correlation only",
            "Cluster assignments",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is data profiling?",
          options: [
            "Model training",
            "Systematic summary of dataset quality and structure",
            "Feature engineering",
            "Deploying models",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m5-p1s1",
          title: "EDA Checklist",
          content:
            "Start every project with: shape, dtypes, missing values, basic stats, unique counts, and distributions. This reveals data quality issues before any analysis.",
          codeExample:
            "import pandas as pd\nimport numpy as np\n\ndef eda_summary(df):\n    print('=== Shape ===', df.shape)\n    print('\\n=== Types ===\\n', df.dtypes)\n    print('\\n=== Missing Values ===\\n', df.isnull().sum())\n    print('\\n=== Basic Stats ===\\n', df.describe())\n    print('\\n=== Unique Counts ===')\n    for col in df.select_dtypes('object').columns:\n        print(f'  {col}: {df[col].nunique()} unique values')\n\n# Usage\ndf = pd.read_csv('titanic.csv')  # or any dataset\neda_summary(df)",
          video: { youtubeId: "xi0vhXFPegw", title: "EDA Process" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m5-p1s2",
          title: "Distribution & Correlation Analysis",
          content:
            "Plot histograms for numeric distributions, value_counts() for categorical. Compute df.corr() and visualize with a heatmap to find relationships worth modeling.",
          codeExample:
            "import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n# Load a dataset\ntips = sns.load_dataset('tips')\n\n# Numeric distributions\nfig, axes = plt.subplots(1, 3, figsize=(14, 4))\nfor ax, col in zip(axes, ['total_bill','tip','size']):\n    ax.hist(tips[col], bins=20)\n    ax.set_title(f'{col} distribution')\nplt.tight_layout()\nplt.show()\n\n# Correlation heatmap\nsns.heatmap(tips.corr(numeric_only=True), annot=True, cmap='coolwarm')\nplt.show()",
          video: { youtubeId: "xi0vhXFPegw", title: "Distribution Analysis" },
          flowchart: "if-else",
        },
        {
          id: "ds-m5-p1s3",
          title: "Outlier Detection",
          content:
            "Use IQR method: outliers are values < Q1-1.5*IQR or > Q3+1.5*IQR. Z-score > 3 also flags outliers. Box plots visualize outlier positions clearly.",
          codeExample:
            "import numpy as np\nimport pandas as pd\n\ndef detect_outliers_iqr(series):\n    q1 = series.quantile(0.25)\n    q3 = series.quantile(0.75)\n    iqr = q3 - q1\n    lower = q1 - 1.5 * iqr\n    upper = q3 + 1.5 * iqr\n    return series[(series < lower) | (series > upper)]\n\ndata = pd.Series([10,12,11,13,100,9,11,12,10,150])\noutliers = detect_outliers_iqr(data)\nprint('Outliers:', outliers.values)",
          video: { youtubeId: "xi0vhXFPegw", title: "Outlier Detection" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m5-p2",
      title: "Part 2: Feature Engineering",
      description: "Create, encode, and transform features.",
      videoUrl: "https://www.youtube.com/watch?v=9yl6-HEY7_s",
      notes:
        "Feature engineering creates informative inputs from raw data—the quality of features determines model ceiling.",
      docs: [
        {
          label: "Kaggle: Feature Engineering",
          url: "https://www.kaggle.com/learn/feature-engineering",
        },
        {
          label: "scikit-learn: Preprocessing",
          url: "https://scikit-learn.org/stable/modules/preprocessing.html",
        },
      ],
      partQuiz: [
        {
          question: "What is one-hot encoding?",
          options: [
            "Scaling features to [0,1]",
            "Converting categorical to binary columns",
            "Log transformation",
            "Removing duplicates",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When do you apply log transformation?",
          options: [
            "Normally distributed data",
            "Skewed data to reduce skewness",
            "Binary data",
            "Categorical data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is feature selection?",
          options: [
            "Creating new features",
            "Choosing most relevant features for the model",
            "Scaling features",
            "Encoding features",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is binning (discretization)?",
          options: [
            "Removing outliers",
            "Converting continuous values into discrete bins",
            "One-hot encoding",
            "Normalizing ranges",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does polynomial features add?",
          options: [
            "More rows",
            "Interaction and polynomial terms",
            "Encoded categories",
            "Normalized values",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When should you use MinMaxScaler?",
          options: [
            "Gaussian features",
            "When you need values in [0,1] range",
            "Categorical data",
            "Tree-based models",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is feature importance in tree models?",
          options: [
            "Number of features",
            "How much each feature reduces impurity",
            "Feature correlation",
            "Feature scale",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is target encoding?",
          options: [
            "Encoding the output",
            "Replacing categories with mean target value",
            "Label encoding",
            "Binary encoding",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Why create interaction features?",
          options: [
            "Reduce dimensions",
            "Capture relationships between features",
            "Handle missing values",
            "Scale data",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does LabelEncoder do?",
          options: [
            "One-hot encodes",
            "Assigns integer labels to categories",
            "Normalizes numerics",
            "Removes nulls",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m5-p2s1",
          title: "Encoding Categorical Variables",
          content:
            "Label encoding assigns integers; one-hot encoding creates binary columns. Use LabelEncoder for ordinal, get_dummies() or OneHotEncoder for nominal categories.",
          codeExample:
            "import pandas as pd\nfrom sklearn.preprocessing import LabelEncoder, OneHotEncoder\n\ndf = pd.DataFrame({'color': ['red','blue','green','red','blue']})\n\n# Label encoding (ordinal)\nle = LabelEncoder()\ndf['color_le'] = le.fit_transform(df['color'])\n\n# One-hot encoding\ndf_ohe = pd.get_dummies(df[['color']], prefix='color')\nprint(df_ohe.head())\n\n# With scikit-learn\nimport numpy as np\nohe = OneHotEncoder(sparse_output=False)\nprint(ohe.fit_transform(df[['color']]))",
          video: { youtubeId: "9yl6-HEY7_s", title: "Encoding Features" },
          flowchart: "if-else",
        },
        {
          id: "ds-m5-p2s2",
          title: "Transformations & Scaling",
          content:
            "Log transformation reduces right skew. MinMaxScaler maps to [0,1]. StandardScaler gives mean=0, std=1. Always fit scalers on training data only to prevent leakage.",
          codeExample:
            "import numpy as np\nimport pandas as pd\nfrom sklearn.preprocessing import MinMaxScaler, StandardScaler\n\nincome = pd.Series([20000, 45000, 60000, 200000, 35000])\n\n# Log transform to reduce skew\nlog_income = np.log1p(income)  # log(1 + x), handles zero\n\n# MinMax scaling\nscaler = MinMaxScaler()\nscaled = scaler.fit_transform(income.values.reshape(-1,1))\n\nprint('Original:', income.values)\nprint('Log:     ', log_income.values.round(2))\nprint('MinMax:  ', scaled.flatten().round(3))",
          video: { youtubeId: "9yl6-HEY7_s", title: "Feature Scaling" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m5-p2s3",
          title: "Creating New Features",
          content:
            "Combine existing features to capture domain knowledge. Extract date components, create ratios, bin continuous values, and add interaction terms.",
          codeExample:
            "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'signup_date': pd.to_datetime(['2023-01-15','2023-06-20','2024-01-01']),\n    'revenue': [1200, 800, 1500],\n    'cost': [300, 400, 200]\n})\n\n# Extract date features\ndf['signup_month'] = df['signup_date'].dt.month\ndf['signup_year'] = df['signup_date'].dt.year\ndf['days_since_signup'] = (pd.Timestamp.now() - df['signup_date']).dt.days\n\n# Derived ratio feature\ndf['profit_margin'] = (df['revenue'] - df['cost']) / df['revenue']\nprint(df[['revenue','cost','profit_margin','days_since_signup']])",
          video: { youtubeId: "9yl6-HEY7_s", title: "Feature Creation" },
          flowchart: "loop",
        },
      ],
    },
    {
      id: "ds-m5-p3",
      title: "Part 3: End-to-End ML Pipeline",
      description: "Full workflow from raw data to deployed model.",
      videoUrl: "https://www.youtube.com/watch?v=Mr4waorJ4LI",
      notes:
        "An end-to-end pipeline takes raw data through cleaning, EDA, feature engineering, training, evaluation, and saving a model.",
      docs: [
        {
          label: "scikit-learn: Pipeline Docs",
          url: "https://scikit-learn.org/stable/modules/pipeline.html",
        },
        {
          label: "Kaggle: ML Pipeline Tutorial",
          url: "https://www.kaggle.com/learn/intermediate-machine-learning",
        },
      ],
      partQuiz: [
        {
          question: "What is the purpose of joblib.dump()?",
          options: [
            "Load data",
            "Save a trained model to disk",
            "Export features",
            "Profile memory",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "In a full pipeline, what comes after EDA?",
          options: [
            "Deploy",
            "Feature engineering",
            "Training first",
            "Testing",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does ColumnTransformer handle?",
          options: [
            "Target encoding",
            "Different preprocessing for different columns",
            "Model selection",
            "Data loading",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question:
            "What is the difference between validation set and test set?",
          options: [
            "Same thing",
            "Validation tunes model; test gives final unbiased evaluation",
            "Test is larger",
            "Validation runs first, test runs after deploy",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "Why serialize a trained model?",
          options: [
            "Speed up training",
            "Save and reload without retraining",
            "Improve accuracy",
            "Reduce file size",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does learning_curve show?",
          options: [
            "Hyperparameter space",
            "Training vs validation scores by sample size",
            "Feature importances",
            "Class distribution",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What is a baseline model?",
          options: [
            "Most complex model",
            "Simple benchmark to beat with ML",
            "Default sklearn model",
            "Validation score",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "When is a model ready for deployment?",
          options: [
            "Training accuracy > 99%",
            "Consistent performance on held-out test data",
            "After 100 epochs",
            "When training loss = 0",
          ],
          correct: 1,
          xp: 10,
        },
        {
          question: "What does fit_transform() do vs fit() + transform()?",
          options: [
            "Same result, fit_transform is faster",
            "Different results",
            "fit_transform can only be used on training data",
            "fit_transform is only for scalers",
          ],
          correct: 0,
          xp: 10,
        },
        {
          question: "What is data drift?",
          options: [
            "Missing values increasing",
            "Statistical properties of live data changing from training data",
            "Model accuracy declining",
            "Feature scaling issues",
          ],
          correct: 1,
          xp: 10,
        },
      ] as CQuizQuestion[],
      subsections: [
        {
          id: "ds-m5-p3s1",
          title: "Building the Pipeline",
          content:
            "Combine ColumnTransformer for preprocessing with a model in a single Pipeline. Prevents data leakage since transformers are fitted only on training data.",
          codeExample:
            "from sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.ensemble import GradientBoostingClassifier\n\nnumeric_features = ['age', 'income']\ncategorical_features = ['city', 'education']\n\npreprocessor = ColumnTransformer([\n    ('num', StandardScaler(), numeric_features),\n    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)\n])\n\npipeline = Pipeline([\n    ('preprocessor', preprocessor),\n    ('model', GradientBoostingClassifier(n_estimators=100))\n])\n\n# pipeline.fit(X_train, y_train)\n# score = pipeline.score(X_test, y_test)\nprint('Pipeline created successfully')",
          video: { youtubeId: "Mr4waorJ4LI", title: "ML Pipeline" },
          flowchart: "compilation-pipeline",
        },
        {
          id: "ds-m5-p3s2",
          title: "Training & Evaluation",
          content:
            "Train with fit(), evaluate with classification_report(). Use cross_val_score() for robust estimates. Compare against a simple baseline (e.g., predict most common class).",
          codeExample:
            "from sklearn.datasets import load_wine\nfrom sklearn.model_selection import train_test_split, cross_val_score\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report\nfrom sklearn.dummy import DummyClassifier\nimport numpy as np\n\ndata = load_wine()\nX_train, X_test, y_train, y_test = train_test_split(\n    data.data, data.target, test_size=0.2, random_state=42)\n\n# Baseline\nbaseline = DummyClassifier(strategy='most_frequent').fit(X_train, y_train)\nprint(f'Baseline: {baseline.score(X_test, y_test):.3f}')\n\n# Model\nmodel = RandomForestClassifier(random_state=42).fit(X_train, y_train)\ncv_scores = cross_val_score(model, data.data, data.target, cv=5)\nprint(f'RF CV: {cv_scores.mean():.3f} ± {cv_scores.std():.3f}')",
          video: {
            youtubeId: "Mr4waorJ4LI",
            title: "Model Training Evaluation",
          },
          flowchart: "loop",
        },
        {
          id: "ds-m5-p3s3",
          title: "Saving & Loading Models",
          content:
            "Serialize the entire pipeline with joblib.dump(). Load with joblib.load() and call predict() directly — no retraining needed. Version your models with timestamps.",
          codeExample:
            "import joblib\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom datetime import datetime\n\niris = load_iris()\nX_train, X_test, y_train, y_test = train_test_split(\n    iris.data, iris.target, test_size=0.2, random_state=42)\n\nmodel = RandomForestClassifier(random_state=42).fit(X_train, y_train)\n\n# Save\nfilename = f'iris_rf_{datetime.now().strftime(\"%Y%m%d\")}.pkl'\njoblib.dump(model, filename)\nprint(f'Model saved to {filename}')\n\n# Load\nloaded_model = joblib.load(filename)\nprint('Test accuracy:', loaded_model.score(X_test, y_test))",
          video: { youtubeId: "Mr4waorJ4LI", title: "Saving Models" },
          flowchart: "if-else",
        },
      ],
    },
  ],
  moduleQuiz: [
    {
      question: "What is the main goal of EDA?",
      options: [
        "Train models faster",
        "Understand data before modeling",
        "Deploy models",
        "Reduce memory usage",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "Why fit scalers only on training data?",
      options: [
        "Faster computation",
        "Prevent test information from leaking into training",
        "Better accuracy",
        "Reduce features",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is one-hot encoding used for?",
      options: [
        "Numeric normalization",
        "Converting categories to binary features",
        "Log transformation",
        "Feature selection",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What does joblib.dump() do?",
      options: [
        "Load data",
        "Serialize and save a model",
        "Dump training logs",
        "Reset model",
      ],
      correct: 1,
      xp: 10,
    },
    {
      question: "What is a baseline model?",
      options: [
        "Most complex model",
        "Simple benchmark to compare ML models against",
        "Pre-trained model",
        "Default parameters",
      ],
      correct: 1,
      xp: 10,
    },
  ] as CQuizQuestion[],
  moduleTest: [
    {
      id: "ds-m5-test1",
      title: "End-to-End Titanic Classifier",
      description:
        "Using the Titanic-style dataset, build a pipeline: encode the 'sex' column, scale 'age' and 'fare', train a RandomForest, and print cross-validation accuracy.",
      starterCode:
        "import pandas as pd\nimport numpy as np\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\n\n# Sample data\nnp.random.seed(42)\nn = 200\ndf = pd.DataFrame({\n    'age': np.random.normal(35, 12, n),\n    'fare': np.random.exponential(30, n),\n    'sex': np.random.choice(['male','female'], n),\n    'survived': np.random.binomial(1, 0.4, n)\n})\n\nX = df[['age','fare','sex']]\ny = df['survived']\n\n# Build pipeline and print 5-fold CV accuracy\n",
      hints: [
        "Use ColumnTransformer: StandardScaler for ['age','fare'], OneHotEncoder for ['sex']",
        "Build Pipeline([('preprocessor', ...), ('model', RandomForestClassifier())])",
        "cross_val_score(pipeline, X, y, cv=5) — print mean score",
      ],
    },
  ] as CTestProblem[],
};

// ─── Exports ──────────────────────────────────────────────────────────────────

export const DATA_SCIENCE_COURSE: CModule[] = [
  ds_module0,
  ds_module1,
  ds_module2,
  ds_module3,
  ds_module4,
  ds_module5,
];

export const DATA_SCIENCE_ROADMAP_ENTRY = {
  id: "data-science-course",
  title: "Data Science",
  icon: "📊",
  color: "from-blue-500/20 to-cyan-500/10",
  tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  description:
    "NumPy, Pandas, Visualization, Statistics, ML, End-to-End Projects",
  topics: [],
  isCourse: true as const,
  certificate: { title: "Data Science Certificate" },
};

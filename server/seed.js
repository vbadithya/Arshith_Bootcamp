import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Generate Admin Hash for default password: Admin@Arshith2026!
const adminPasswordHash = bcrypt.hashSync('Admin@Arshith2026!', 10);

const initialAdmin = {
  adminId: 'ARB-ADMIN-001',
  passwordHash: adminPasswordHash,
  name: 'Arshith Boot Camp Administrator',
  email: 'admin@arshithbootcamp.com',
  role: 'admin',
  createdAt: '2026-01-01T00:00:00.000Z',
  lastLogin: '2026-10-01T15:00:00.000Z'
};

const initialCourses = [
  {
    id: "python-programming",
    title: "Python Programming",
    slug: "python-programming",
    category: "Programming",
    level: "Beginner to Intermediate",
    duration: "40 hours",
    rating: 4.9,
    studentsCount: "14.2k",
    studentsNumeric: 14200,
    price: 999,
    isFree: false,
    bestseller: true,
    progress: 47,
    status: "published",
    featured: true,
    certificateAvailable: true,
    sequentialLearning: true,
    iconBg: "bg-blue-50 border-2 border-blue-200 text-blue-600",
    iconType: "python",
    introVideoUrl: "https://www.youtube.com/embed/kqtD5dpn9C8",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Master Python from absolute scratch based on Python for Everybody curriculum.",
    description: "Master Python from absolute scratch! Based on the world-renowned 'Python for Everybody' curriculum by Dr. Charles Severance, cover variables, conditionals, loops, functions, data structures, files, regex, web services, OOP, and databases.",
    instructor: {
      name: "Dr. Ananya Sharma & Dr. Charles Severance",
      role: "Lead Educators @ Arshith Boot Camp & Authors of Python for Everybody",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    prerequisites: "No prior programming experience required.",
    skills: ["Python 3", "OOP", "File I/O", "SQLite", "Automation", "Regular Expressions", "Web Scraping"],
    whatYouWillLearn: [
      "Computer hardware architecture, interpreter vs compiler, and Python syntax foundations",
      "Variables, expressions, PEMDAS order of operations, and input handling",
      "Conditional execution, Boolean logic, and try/except exception catching",
      "Function definition, parameters, fruitful vs void functions, and scope",
      "Iteration patterns: while/for loops, break, continue, accumulators, min/max search",
      "Data Structures: Strings, Lists, Dictionaries, and Tuples (DSU pattern & list comprehensions)",
      "File persistence: reading/writing text files and parsing mbox log data",
      "Regular expressions (re module) for pattern searching and data extraction",
      "Networked programming (HTTP, sockets, urllib) and Web Scraping (BeautifulSoup)",
      "Web Services: Parsing XML (ElementTree) and JSON data formats",
      "Object-Oriented Programming: Classes, instances, self, constructors, and inheritance",
      "Databases: Relational data modeling, SQL queries, and SQLite (sqlite3) integration"
    ],
    modules: [
      {
        id: "py-mod-1",
        title: "Module 01 — Introduction to Python & Computer Architecture",
        description: "Overview of Python language, computer hardware architecture (CPU, Main vs Secondary Memory), interpreter vs compiler, reserved words, and writing your first program.",
        completed: true,
        order: 1,
        published: true,
        readingMaterial: {
          introduction: "Welcome to Python Programming! Based on Chapter 1 of 'Python for Everybody', programming is the art of telling a computer what to do next.",
          objectives: [
            "Understand computer hardware architecture: CPU, Main Memory (RAM), Secondary Memory (Disk), Input/Output devices, and Network connections",
            "Differentiate between high-level interpreted languages (Python) and machine code (0s and 1s)",
            "Learn Python's 35 reserved keywords and syntax rules",
            "Write and execute your first script (hello.py) using the print() function"
          ],
          sections: [
            {
              heading: "Computer Hardware Architecture",
              text: "To write effective software, you must understand the basic hardware components inside modern computers: CPU, RAM, Secondary Memory, I/O Devices, Network."
            }
          ],
          codeExamples: [
            {
              title: "Hello World Script (hello.py)",
              code: "print('Hello world!')",
              explanation: "print() outputs string text to standard output."
            }
          ],
          keyTakeaways: [
            "Programming is orchestrating CPU, Main Memory, and Storage resources.",
            "Python is an interpreted, high-level language with 35 reserved words."
          ]
        },
        quiz: {
          id: "py-quiz-1",
          title: "Module 01 Quiz — Architecture & Syntax",
          passingScore: 70,
          timeLimitMinutes: 15,
          maxAttempts: 3,
          published: true,
          questions: [
            {
              id: "q1",
              type: "multiple-choice",
              questionText: "Which hardware component directly executes instructions in a computer?",
              options: ["Main Memory (RAM)", "Central Processing Unit (CPU)", "Secondary Memory (Disk)", "Network Interface Card"],
              correctAnswer: 1,
              marks: 10,
              explanation: "The CPU is the brain of the computer that continuously executes instructions."
            },
            {
              id: "q2",
              type: "true-false",
              questionText: "Python is an interpreted language that translates code line-by-line during runtime.",
              options: ["True", "False"],
              correctAnswer: 0,
              marks: 10,
              explanation: "Python uses an interpreter to execute source code directly."
            }
          ]
        }
      },
      {
        id: "py-mod-2",
        title: "Module 02 — Variables, Expressions and Statements",
        description: "Values, data types (int, float, str), assignment statements, variable naming rules, arithmetic operators, and user input.",
        completed: true,
        order: 2,
        published: true,
        readingMaterial: {
          introduction: "Based on Chapter 2 of 'Python for Everybody', variables are named symbolic references pointing to stored values in memory.",
          objectives: [
            "Identify primitive data types: int, float, str, and bool",
            "Master variable assignment statements (=)",
            "Understand operators (+, -, *, /, //, %, **) and operands"
          ],
          sections: [
            {
              heading: "Values and Data Types",
              text: "Values are basic units of data manipulated by programs (int, float, str, bool)."
            }
          ],
          codeExamples: [
            {
              title: "Variable Assignment",
              code: "x = 10\ny = 3.14\nprint(type(x))",
              explanation: "Assigns values and inspects data type using type()."
            }
          ],
          keyTakeaways: [
            "Variables reference objects stored in RAM.",
            "PEMDAS defines standard operator precedence."
          ]
        },
        quiz: {
          id: "py-quiz-2",
          title: "Module 02 Quiz — Variables & Expressions",
          passingScore: 70,
          timeLimitMinutes: 15,
          maxAttempts: 3,
          published: true,
          questions: [
            {
              id: "q3",
              type: "multiple-choice",
              questionText: "What is the output of 1 + 2 * 3 in Python?",
              options: ["9", "7", "6", "12"],
              correctAnswer: 1,
              marks: 10,
              explanation: "Multiplication has higher precedence than addition (2 * 3 = 6; 1 + 6 = 7)."
            }
          ]
        }
      }
    ],
    finalTest: {
  "id": "ds-final-test",
  "title": "Data Science & AI Specialist Comprehensive Certification Exam",
  "description": "Official 25-Question Final Certification Exam covering Python, NumPy, Pandas, EDA, Statistics, Machine Learning Algorithms, Feature Engineering, Deep Learning, Transformers, LLMs, and Deployment.",
  "passingScore": 80,
  "timeLimitMinutes": 60,
  "maxAttempts": 3,
  "published": true,
  "questions": [
    {
      "id": "q1",
      "questionText": "What is the primary first step in the CRISP-DM Data Science project lifecycle?",
      "options": [
        "Training Random Forest models",
        "Business Understanding — clarifying business goals and project requirements",
        "Writing docker container files",
        "Performing PCA feature reduction"
      ],
      "correctAnswer": 1,
      "explanation": "CRISP-DM begins with Business Understanding to define objectives and success criteria before data collection or modeling."
    },
    {
      "id": "q2",
      "questionText": "Which type of Machine Learning task operates on unlabeled data to discover hidden patterns and groupings?",
      "options": [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Linear Regression"
      ],
      "correctAnswer": 1,
      "explanation": "Unsupervised Learning algorithms (e.g. K-Means, DBSCAN) cluster or reduce dimensions of unlabeled data without target labels."
    },
    {
      "id": "q3",
      "questionText": "What will `[x * 2 for x in range(5) if x % 2 != 0]` produce in Python?",
      "options": [
        "[0, 2, 4, 6, 8]",
        "[2, 6]",
        "[1, 3]",
        "[4, 8]"
      ],
      "correctAnswer": 1,
      "explanation": "`range(5)` yields 0, 1, 2, 3, 4. Odd values are 1 and 3. Multiplying by 2 produces `[2, 6]`."
    },
    {
      "id": "q4",
      "questionText": "Which Python statement block prevents unhandled runtime exceptions from crashing an application?",
      "options": [
        "try / except",
        "if / else",
        "do / catch",
        "while / break"
      ],
      "correctAnswer": 0,
      "explanation": "`try / except` blocks catch exceptions gracefully during execution."
    },
    {
      "id": "q5",
      "questionText": "Why do NumPy vector operations execute significantly faster than standard Python `for` loops?",
      "options": [
        "NumPy bypasses operating system memory limits",
        "NumPy stores homogeneous data in contiguous memory blocks and executes pre-compiled C routines",
        "NumPy uses cloud network servers for all additions",
        "NumPy ignores decimal precision"
      ],
      "correctAnswer": 1,
      "explanation": "NumPy arrays are homogeneous contiguous memory blocks operating via optimized compiled C routines without Python loop overhead."
    },
    {
      "id": "q6",
      "questionText": "What NumPy mechanism allows arithmetic operations between arrays of different dimensions?",
      "options": [
        "Broadcasting",
        "Reshaping",
        "Slicing",
        "Concat"
      ],
      "correctAnswer": 0,
      "explanation": "Broadcasting implicitly stretches smaller array dimensions across larger compatible array dimensions."
    },
    {
      "id": "q7",
      "questionText": "What is the key difference between `.loc[]` and `.iloc[]` in Pandas?",
      "options": [
        ".loc uses explicit labels; .iloc uses integer index positions",
        ".loc is for rows only; .iloc is for columns only",
        ".loc is faster than .iloc",
        ".loc operates on NumPy arrays; .iloc operates on lists"
      ],
      "correctAnswer": 0,
      "explanation": "`.loc` indexes using label names (`.loc['row_a', 'col_b']`), whereas `.iloc` uses 0-based integer positions (`.iloc[0, 1]`)."
    },
    {
      "id": "q8",
      "questionText": "Which Pandas merge join type preserves ONLY rows that have matching keys in BOTH input DataFrames?",
      "options": [
        "Left Join",
        "Right Join",
        "Outer Join",
        "Inner Join"
      ],
      "correctAnswer": 3,
      "explanation": "An `inner` join includes only records where the merge key exists in both left and right DataFrames."
    },
    {
      "id": 9,
      "questionText": "Under Tukey's box plot rule, how are extreme outliers mathematically identified using Quartiles (Q1, Q3) and Interquartile Range (IQR)?",
      "options": [
        "Values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR",
        "Values outside Mean +/- 1 Standard Deviation",
        "Values below 0 or above 100",
        "Values matching missing NaNs"
      ],
      "correctAnswer": 0,
      "explanation": "Outliers are points lying outside the lower fence $Q_1 - 1.5 \\times \\text{IQR}$ or upper fence $Q_3 + 1.5 \\times \\text{IQR}$."
    },
    {
      "id": "q10",
      "questionText": "Which chart is best suited for visual inspection of bivariate relationships between two continuous numerical variables?",
      "options": [
        "Scatter Plot",
        "Pie Chart",
        "Bar Graph",
        "Violin Plot"
      ],
      "correctAnswer": 0,
      "explanation": "Scatter plots map individual data points on X-Y axes to reveal correlation patterns, clusters, and non-linear trends."
    },
    {
      "id": "q11",
      "questionText": "What statistical chart displays color-coded correlation coefficient matrices in Seaborn?",
      "options": [
        "sns.heatmap()",
        "sns.barplot()",
        "sns.histplot()",
        "sns.boxplot()"
      ],
      "correctAnswer": 0,
      "explanation": "`sns.heatmap(df.corr(), annot=True)` renders color-indexed matrices of pairwise correlation coefficients."
    },
    {
      "id": "q12",
      "questionText": "Under the Empirical Rule for Normal Distributions, what percentage of data falls within 2 standard deviations (+/- 2 sigma) of the mean?",
      "options": [
        "68%",
        "95%",
        "99.7%",
        "50%"
      ],
      "correctAnswer": 1,
      "explanation": "In a Normal distribution, approximately 68% of data falls within $\\pm 1\\sigma$, 95% within $\\pm 2\\sigma$, and 99.7% within $\\pm 3\\sigma$."
    },
    {
      "id": "q13",
      "questionText": "What is a Type I Error in statistical hypothesis testing?",
      "options": [
        "Failing to reject a false Null Hypothesis",
        "Incorrectly rejecting a true Null Hypothesis (False Positive)",
        "Dividing by zero in standard deviation calculation",
        "Using a sample size less than 30"
      ],
      "correctAnswer": 1,
      "explanation": "A Type I Error ($alpha$) occurs when a researcher rejects a Null Hypothesis that is actually true in reality."
    },
    {
      "id": "q14",
      "questionText": "What issue occurs when predictor variables in a regression model are highly correlated with one another?",
      "options": [
        "Multicollinearity",
        "Underfitting",
        "Homoscedasticity",
        "Data Drift"
      ],
      "correctAnswer": 0,
      "explanation": "Multicollinearity occurs when independent features are strongly correlated, inflating parameter estimate variance."
    },
    {
      "id": "q15",
      "questionText": "What characterizes an Overfitted Machine Learning model?",
      "options": [
        "High training error and high testing error",
        "Very low training error, but high error on unseen validation/test data",
        "Equal performance on both training and test data",
        "Inability to learn simple linear relationships"
      ],
      "correctAnswer": 1,
      "explanation": "Overfitting (high variance) happens when a model memorizes noise in the training set and fails to generalize to test data."
    },
    {
      "id": "q16",
      "questionText": "Why should `train_test_split()` be performed BEFORE applying preprocessing scalers or encoders?",
      "options": [
        "To prevent Data Leakage from held-out test data statistics into the training model",
        "Because Scikit-Learn functions fail on unpartitioned data",
        "To speed up GPU compute execution",
        "To automatically drop missing values"
      ],
      "correctAnswer": 0,
      "explanation": "Fitting transformers on the complete dataset leaks test statistics (mean, std, categories) into training folds, yielding overly optimistic evaluation scores."
    },
    {
      "id": "q17",
      "questionText": "What metric measures the proportion of total target variance explained by a regression model?",
      "options": [
        "R-Squared (R^2)",
        "Mean Absolute Error (MAE)",
        "Precision",
        "Confusion Matrix"
      ],
      "correctAnswer": 0,
      "explanation": "R-squared ($R^2$, Coefficient of Determination) quantifies the proportion of target variance explained by model features (0 to 1)."
    },
    {
      "id": "q18",
      "questionText": "What key functional property distinguishes Lasso Regression (L1 regularization) from Ridge Regression (L2)?",
      "options": [
        "Lasso shrinks redundant feature weights to exact zero, performing automatic feature selection",
        "Lasso requires no feature scaling",
        "Ridge performs feature selection while Lasso does not",
        "Lasso can only be used for classification"
      ],
      "correctAnswer": 0,
      "explanation": "Lasso uses absolute weight penalties ($L_1$), forcing irrelevant feature coefficients to zero and producing sparse models."
    },
    {
      "id": "q19",
      "questionText": "What mathematical activation function squashes raw linear regression outputs into probability values between 0 and 1 for binary classification?",
      "options": [
        "Sigmoid Function",
        "ReLU Function",
        "Linear Identity",
        "Step Function"
      ],
      "correctAnswer": 0,
      "explanation": "The Sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ converts linear values into valid probabilities between 0.0 and 1.0."
    },
    {
      "id": "q20",
      "questionText": "How does Random Forest reduce model variance compared to a single deep Decision Tree?",
      "options": [
        "By averaging predictions from an ensemble of diverse trees trained on bootstrap samples and random feature subsets (Bagging)",
        "By enforcing linear equations on decision boundaries",
        "By eliminating cross-validation",
        "By increasing single tree depth to infinity"
      ],
      "correctAnswer": 0,
      "explanation": "Random Forest combines Bagging (Bootstrap Aggregation) with feature space randomization, averaging tree outputs to reduce variance."
    },
    {
      "id": "q21",
      "questionText": "What clustering algorithm clusters based on spatial density and automatically isolates noise points without requiring pre-specified cluster count K?",
      "options": [
        "DBSCAN",
        "K-Means",
        "Logistic Regression",
        "Hierarchical Agglomerative"
      ],
      "correctAnswer": 0,
      "explanation": "DBSCAN clusters core points based on density parameters (eps, min_samples) and labels sparse noise points as -1."
    },
    {
      "id": "q22",
      "questionText": "What is the primary purpose of Principal Component Analysis (PCA)?",
      "options": [
        "Dimensionality Reduction: projecting high-dimensional features into uncorrelated orthogonal components while maximizing variance retention",
        "One-Hot Encoding categorical variables",
        "Imputing missing values",
        "Generating synthetic image samples"
      ],
      "correctAnswer": 0,
      "explanation": "PCA transforms correlated features into linearly uncorrelated principal components sorted by explained variance."
    },
    {
      "id": "q23",
      "questionText": "Which metric is calculated as the harmonic mean of Precision and Recall: 2 * (Precision * Recall) / (Precision + Recall)?",
      "options": [
        "F1-Score",
        "Accuracy",
        "Specificity",
        "Mean Absolute Error"
      ],
      "correctAnswer": 0,
      "explanation": "F1-Score provides a balanced harmonic mean of Precision and Recall, ideal for evaluating imbalanced classification tasks."
    },
    {
      "id": "q24",
      "questionText": "When One-Hot Encoding a categorical variable with K unique categories, how many binary dummy columns should be retained to prevent the Dummy Variable Trap?",
      "options": [
        "K - 1 columns",
        "K columns",
        "K + 1 columns",
        "1 column"
      ],
      "correctAnswer": 0,
      "explanation": "Retaining $K-1$ dummy variables (`drop='first'`) prevents perfect multicollinearity, as the $K$-th category is implied when all $K-1$ dummies are zero."
    },
    {
      "id": "q25",
      "questionText": "Which mathematical equation specifies the Self-Attention mechanism powering modern Transformer and Large Language Models (LLMs)?",
      "options": [
        "Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V",
        "Attention(X) = W*X + b",
        "Attention(Y) = max(0, Y)",
        "Attention(Q, K, V) = Q + K - V"
      ],
      "correctAnswer": 0,
      "explanation": "Self-Attention computes dot products between Queries ($Q$) and Keys ($K$), scales by $\\sqrt{d_k}$, applies Softmax, and weights Values ($V$)."
    }
  ]
},
  finalProject: {
      id: "py-final-project",
      title: "Automated Log Parser & Database Analytics Suite",
      description: "Build an automated CLI tool in Python that reads server log files, extracts IP addresses and user agents using regular expressions, calculates frequency statistics, and persists data into SQLite.",
      requirements: [
        "Read log files from disk using try/except file error handling",
        "Use regular expressions (re module) to extract IP addresses and timestamps",
        "Store word and IP frequency distributions using Python dictionaries",
        "Create an SQLite database schema with tables for Logs and Analytics",
        "Export final report summary as JSON and text format"
      ],
      instructions: "Upload your Python script (.py), sample dataset, and SQLite database file or submit GitHub Repository URL and video demo link.",
      allowedFileTypes: [".zip", ".py", ".pdf"],
      maxFileSizeMb: 50,
      githubUrlAllowed: true,
      liveProjectUrlAllowed: true,
      passingScore: 75,
      published: true
    }
  },
  {
    id: "sql-mastery",
    title: "SQL & Relational Databases",
    slug: "sql-mastery",
    category: "SQL",
    level: "All Levels",
    duration: "25 hours",
    rating: 4.8,
    studentsCount: "11.5k",
    studentsNumeric: 11500,
    price: 799,
    isFree: false,
    bestseller: false,
    progress: 100,
    status: "published",
    featured: true,
    certificateAvailable: true,
    sequentialLearning: true,
    iconBg: "bg-emerald-50 border-2 border-emerald-200 text-emerald-600",
    iconType: "database",
    introVideoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Master SQL queries, table joins, aggregations, database design, indexing, and normalization.",
    description: "Master SQL queries, table joins, aggregations, database design, indexing, and normalization. Hands-on exercises with PostgreSQL and SQLite.",
    instructor: {
      name: "Rohan Varma",
      role: "Senior Database Architect @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    prerequisites: "Basic computer familiarity.",
    skills: ["SQL", "PostgreSQL", "SQLite", "Database Design", "Indexing", "Joins"],
    whatYouWillLearn: [
      "Relational Database Management Concepts (RDBMS)",
      "Data Definition Language (DDL) and Data Manipulation Language (DML)",
      "Complex Queries, Filtering (WHERE, HAVING), and Grouping (GROUP BY)",
      "Table Joins: INNER, LEFT, RIGHT, FULL OUTER, and CROSS JOINs",
      "Database Normalization (1NF, 2NF, 3NF) and Schema Design"
    ],
    modules: [
      {
        id: "sql-mod-1",
        title: "Module 01 — RDBMS Fundamentals & SQL Syntax",
        description: "Introduction to relational databases, tables, rows, columns, primary keys, foreign keys, and basic SELECT queries.",
        completed: true,
        order: 1,
        published: true,
        readingMaterial: {
          introduction: "SQL (Structured Query Language) is the standard language for relational database management systems.",
          objectives: ["Understand relational tables", "Master SELECT, WHERE, and ORDER BY"],
          sections: [{ heading: "SQL Basics", text: "Tables hold data organized in rows and columns." }],
          codeExamples: [{ title: "Basic SELECT Query", code: "SELECT * FROM users WHERE active = 1;", explanation: "Fetches active users." }],
          keyTakeaways: ["Primary keys uniquely identify rows."]
        },
        quiz: {
          id: "sql-quiz-1",
          title: "Module 01 Quiz — SQL Fundamentals",
          passingScore: 70,
          timeLimitMinutes: 15,
          maxAttempts: 3,
          published: true,
          questions: [
            {
              id: "sq1",
              type: "multiple-choice",
              questionText: "Which SQL clause is used to filter records?",
              options: ["GROUP BY", "WHERE", "ORDER BY", "SELECT"],
              correctAnswer: 1,
              marks: 10
            }
          ]
        }
      }
    ],
    finalTest: {
      id: "sql-final-test",
      title: "SQL & RDBMS Certification Exam",
      description: "Advanced assessment on joins, subqueries, indexing, transactions, and ER modeling.",
      passingScore: 80,
      timeLimitMinutes: 30,
      maxAttempts: 2,
      published: true,
      questions: [
        {
          id: "sqt1",
          type: "multiple-choice",
          questionText: "Which join returns all rows from the left table and matching rows from the right table?",
          options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
          correctAnswer: 1,
          marks: 20
        }
      ]
    },
    finalProject: {
      id: "sql-final-project",
      title: "E-Commerce Relational Database Design & Query Suite",
      description: "Design a normalized 3NF database schema for an e-commerce platform including customers, orders, inventory, and payments.",
      requirements: ["Draw ER diagram", "Write DDL scripts", "Write 10 analytical queries"],
      instructions: "Submit SQL script file and ER diagram documentation.",
      allowedFileTypes: [".sql", ".zip", ".pdf"],
      maxFileSizeMb: 20,
      githubUrlAllowed: true,
      liveProjectUrlAllowed: false,
      passingScore: 80,
      published: true
    }
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    slug: "web-development",
    category: "Web Development",
    level: "Intermediate",
    duration: "60 hours",
    rating: 4.9,
    studentsCount: "18.9k",
    studentsNumeric: 18900,
    price: 1499,
    isFree: false,
    bestseller: true,
    progress: 20,
    status: "published",
    featured: true,
    certificateAvailable: true,
    sequentialLearning: true,
    iconBg: "bg-purple-50 border-2 border-purple-200 text-purple-600",
    iconType: "layout",
    introVideoUrl: "https://www.youtube.com/embed/nu_pCVPKzTk",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Build modern responsive web applications with HTML5, CSS3, Tailwind, React, Node.js, Express, and MongoDB.",
    description: "Build modern responsive web applications with HTML5, CSS3, Tailwind, React, Node.js, Express, and MongoDB. Complete full-stack bootcamp.",
    instructor: {
      name: "Vikramaditya Rao",
      role: "Lead Full Stack Architect @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    prerequisites: "Basic programming understanding.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    whatYouWillLearn: [
      "Responsive Web Design with HTML5, CSS Grid, Flexbox, and Tailwind CSS",
      "Modern ES6+ JavaScript, Async/Await, and DOM manipulation",
      "React Component Architecture, Hooks, Context API, and State Management",
      "Node.js & Express RESTful API Development",
      "MongoDB database modeling with Mongoose"
    ],
    modules: [
  {
    "id": "web-mod-1",
    "title": "Module 01 — Introduction to Web Development & Internet Fundamentals",
    "description": "How websites work, browsers, servers, HTTP/HTTPS, domains, hosting, client-server architecture, developer tools.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Web development is the process of creating, building, deploying, and maintaining websites and web applications. Before learning HTML, CSS, JavaScript, React, or backend technologies, it is important to understand how the web actually works. This module introduces the fundamental concepts behind modern websites, including client-server architecture, browsers, servers, HTTP/HTTPS, URLs, domains, DNS, web hosting, static/dynamic sites, developer tools, and client storage.",
      "objectives": [
        "Explain how the World Wide Web works and differentiate it from the Internet.",
        "Understand client-server architecture and the roles of browsers and web servers.",
        "Describe how HTTP and HTTPS function, including URL structure and DNS resolution.",
        "Differentiate between static and dynamic websites and frontend vs backend.",
        "Utilize browser Developer Tools to inspect HTML, CSS, network requests, and console errors."
      ],
      "sections": [
        {
          "title": "1. Module Overview & Learning Objectives",
          "content": "This module introduces the fundamental concepts behind modern websites. Learners will understand how websites work, how browsers communicate with servers via HTTP/HTTPS, URLs, domains, DNS, web hosting, frontend vs backend, static vs dynamic sites, and browser Developer Tools.",
          "bullets": [
            "Explain how the World Wide Web works and differentiate it from the Internet.",
            "Understand client-server architecture and the roles of browsers and web servers.",
            "Describe how HTTP and HTTPS function, including URL structure and DNS resolution.",
            "Differentiate between static and dynamic websites and frontend vs backend.",
            "Utilize browser Developer Tools to inspect HTML, CSS, network requests, and console errors."
          ]
        },
        {
          "title": "2. Internet vs World Wide Web & Website Fundamentals",
          "content": "The Internet is the global network infrastructure that connects computers, servers, and devices. The World Wide Web (WWW) is a service operating on top of the Internet that allows users to access interconnected web pages.",
          "table": {
            "headers": [
              "Feature",
              "Internet",
              "World Wide Web (WWW)"
            ],
            "rows": [
              [
                "Definition",
                "Global network infrastructure",
                "Service running over the Internet"
              ],
              [
                "Scope",
                "Connects devices and networks",
                "Connects web pages & web resources"
              ],
              [
                "Protocols",
                "Uses TCP/IP, IP, FTP, SMTP, etc.",
                "Primarily uses HTTP/HTTPS"
              ],
              [
                "Services",
                "Supports email, file transfer, streaming",
                "Provides websites & web applications"
              ]
            ]
          },
          "bullets": [
            "A Website is a collection of related web pages (HTML, CSS, JS, images, APIs) under a domain.",
            "A Web Application is an interactive website processing user input (e.g., e-commerce, banking, LMS, social media)."
          ]
        },
        {
          "title": "3. How Websites Work & Browser Rendering Pipeline",
          "content": "When a user enters a URL into a browser, a sequence of events occurs: URL processing → DNS Resolution → TCP/TLS Connection → HTTP Request → Server Processing → HTTP Response → Browser Parsing & Rendering.",
          "bullets": [
            "HTML Parsing creates the DOM (Document Object Model).",
            "CSS Parsing creates the CSSOM (CSS Object Model).",
            "DOM + CSSOM combine into the Render Tree.",
            "Layout determines geometry; Paint renders pixels to screen."
          ]
        },
        {
          "title": "4. Web Servers & Client-Server Architecture",
          "content": "Web applications rely on client-server architecture. The Client (browser) sends requests, and the Server (software like Nginx, Apache, Node.js) processes requests and returns resources (HTML, CSS, JS, JSON).",
          "bullets": [
            "Client Request: 'Give me product details for ID 25.'",
            "Server Logic: Queries database, formats JSON/HTML.",
            "Server Response: Returns HTTP status 200 OK with payload to the client."
          ]
        },
        {
          "title": "5. Frontend vs Backend Development",
          "content": "Frontend focuses on user interfaces and interactions in the browser using HTML, CSS, JavaScript, and React. Backend focuses on server-side logic, databases, authentication, and REST APIs using Node.js, Express, Python, or SQL.",
          "table": {
            "headers": [
              "Aspect",
              "Frontend",
              "Backend"
            ],
            "rows": [
              [
                "Execution Environment",
                "Runs in user browser",
                "Runs on web server / cloud"
              ],
              [
                "Core Responsibilities",
                "UI design, forms, responsiveness, animations",
                "Business logic, database, APIs, authentication"
              ],
              [
                "Technologies",
                "HTML5, CSS3, JavaScript, React",
                "Node.js, Express, PostgreSQL, MongoDB"
              ],
              [
                "Primary Data Output",
                "DOM elements, rendered UI",
                "JSON data, HTTP status codes"
              ]
            ]
          }
        },
        {
          "title": "6. URLs & URL Components",
          "content": "A Uniform Resource Locator (URL) identifies the location of a web resource. Example: https://www.example.com/products?id=25",
          "bullets": [
            "Protocol (https://): Specifies how communication occurs securely.",
            "Domain (example.com): Human-readable address mapped to an IP address.",
            "Path (/products): Identifies a specific route or server resource.",
            "Query Parameters (?id=25): Key-value pairs passing extra data to the server."
          ]
        },
        {
          "title": "7. HTTP, HTTPS & HTTP Methods",
          "content": "HTTP (HyperText Transfer Protocol) governs client-server communication. HTTPS adds TLS encryption to protect passwords, payments, and tokens.",
          "bullets": [
            "GET: Retrieve data from server (e.g., GET /products).",
            "POST: Submit or create data (e.g., POST /login).",
            "PUT: Replace an entire resource (e.g., PUT /products/25).",
            "PATCH: Partially update a resource (e.g., PATCH /products/25).",
            "DELETE: Remove a resource (e.g., DELETE /products/25)."
          ]
        },
        {
          "title": "8. HTTP Responses & Status Codes",
          "content": "Servers reply with numerical status codes indicating request results:",
          "bullets": [
            "2xx Success: 200 OK, 201 Created, 204 No Content",
            "3xx Redirection: 301 Moved Permanently, 302 Found, 304 Not Modified",
            "4xx Client Error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found",
            "5xx Server Error: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable"
          ]
        },
        {
          "title": "9. Domains, Subdomains & DNS Resolution",
          "content": "Domains (example.com) replace hard-to-remember IP addresses (e.g., 203.0.113.10). Subdomains (api.example.com, blog.example.com) organize sub-services. DNS (Domain Name System) maps domains to IPs via DNS Resolvers and Root/TLD servers.",
          "bullets": [
            "TLD (Top-Level Domain): .com, .org, .edu, .in",
            "Subdomain: www.example.com, api.example.com",
            "IPv4 (192.168.1.1) vs IPv6 (2001:db8::1) addressing"
          ]
        },
        {
          "title": "10. Web Hosting & Hosting Models",
          "content": "Web hosting provides server infrastructure to store and serve files online.",
          "bullets": [
            "Shared Hosting: Multiple sites share one server's resources.",
            "VPS (Virtual Private Server): Dedicated virtualized CPU/RAM allocation.",
            "Dedicated Hosting: Entire physical server reserved for one client.",
            "Cloud Hosting: Scalable instances (AWS, GCP, Azure, Vercel).",
            "Serverless: Execution on-demand without managing server OS directly."
          ]
        },
        {
          "title": "11. Static vs Dynamic Websites & Architecture",
          "content": "Static sites serve fixed pre-built HTML/CSS files. Dynamic sites compute content on-the-fly using databases and backend servers.",
          "bullets": [
            "Static: Fast, secure, simple hosting, ideal for portfolios and docs.",
            "Dynamic: Interactive, user accounts, personal recommendations, e-commerce.",
            "Modern Stack Architecture: Client (React) ↔ REST API (Node/Express) ↔ Database (PostgreSQL/MongoDB)."
          ]
        },
        {
          "title": "12. Browser Developer Tools Deep-Dive",
          "content": "Browser DevTools (F12 or Ctrl+Shift+I) are essential for debugging:",
          "bullets": [
            "Elements Panel: Inspect and edit live HTML DOM & CSS Styles.",
            "Console Panel: Inspect JS logs, errors, execute test scripts.",
            "Network Panel: Monitor HTTP requests, methods, status codes, payload & timings.",
            "Sources Panel: Debug JS with breakpoints and source maps.",
            "Application Panel: Inspect LocalStorage, SessionStorage, Cookies & Cache."
          ]
        },
        {
          "title": "13. Client-Side Browser Storage",
          "content": "Web applications store non-sensitive state on the client:",
          "bullets": [
            "LocalStorage: Data persists across browser restarts until cleared (`localStorage.setItem('user', 'Alex')`).",
            "SessionStorage: Data cleared automatically when the browser tab closes.",
            "Security Warning: Storage is accessible via JS and vulnerable to XSS; never store secret passwords or confidential keys here!"
          ]
        },
        {
          "title": "14. Complete Request Lifecycle & Dev Workflow",
          "content": "The end-to-end lifecycle spans 14 steps from user URL entry to full page render. The development workflow involves requirements → design → HTML/CSS/JS → frontend framework → backend API → database → testing → deployment → monitoring.",
          "bullets": [
            "Core Tools: VS Code, Git/GitHub, Node.js, Web Browsers, Cloud Hosting.",
            "Real-world apps in E-commerce, Banking, Education, and Social Media."
          ]
        },
        {
          "title": "15. Practice & Interview Questions Summary",
          "content": "Mastering these 56 core topics prepares learners for entry-level technical interviews and practical full-stack projects.",
          "bullets": [
            "Q: What happens when typing a URL into a browser? (DNS -> TCP/TLS -> HTTP GET -> Server processing -> Render Tree)",
            "Q: Difference between HTTP and HTTPS? (TLS encryption protecting sensitive credentials)",
            "Q: Purpose of HTTP status 404 vs 500? (404 is client requested unknown resource, 500 is server runtime failure)"
          ]
        }
      ],
      "codeExamples": [
        {
          "title": "Mini Practical Activity: Creating and Inspecting First Webpage",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>My First Webpage</title>\n    <style>\n        body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 2rem; }\n        h1 { color: #38bdf8; }\n        .card { background: #1e293b; padding: 1.5rem; border-radius: 12px; border: 1px solid #334155; }\n    </style>\n</head>\n<body>\n    <div class=\"card\">\n        <h1>Welcome to Web Development</h1>\n        <p>This is my first webpage demonstrating client-side rendering.</p>\n        <button onclick=\"console.log('Button clicked!')\">Test Console</button>\n    </div>\n</body>\n</html>",
          "explanation": "Save as index.html, open in Google Chrome, press F12, and inspect the DOM in Elements and logs in Console."
        },
        {
          "title": "Inspecting HTTP Requests with Fetch API",
          "code": "// Fetching product details from a REST API\nfetch('https://api.example.com/products/25', {\n    method: 'GET',\n    headers: {\n        'Accept': 'application/json'\n    }\n})\n.then(response => {\n    console.log('HTTP Status Code:', response.status); // e.g. 200\n    return response.json();\n})\n.then(data => console.log('Payload:', data))\n.catch(error => console.error('Network Error:', error));",
          "explanation": "This asynchronous JS call sends an HTTP GET request to a remote server and logs response metadata."
        },
        {
          "title": "Browser Storage API Usage",
          "code": "// Storing user preferences in LocalStorage\nlocalStorage.setItem('theme', 'dark');\n\n// Retrieving user preference\nconst currentTheme = localStorage.getItem('theme');\nconsole.log('Stored Theme:', currentTheme); // Outputs: \"dark\"\n\n// SessionStorage example (persists only for current tab session)\nsessionStorage.setItem('activeTab', 'dashboard');",
          "explanation": "LocalStorage persists indefinitely in the browser, while SessionStorage expires when the tab closes."
        }
      ],
      "bestPractices": [
        "Always enforce HTTPS in production to encrypt client-server communication.",
        "Structure URLs cleanly with logical paths (/products/25) and relevant query parameters.",
        "Utilize proper HTTP methods (GET for retrieval, POST for creation, DELETE for removal).",
        "Inspect the Network and Console panels frequently during development to catch errors early.",
        "Never store sensitive secrets, passwords, or raw tokens in client-side LocalStorage."
      ],
      "commonMistakes": [
        "Confusing the Internet (network infrastructure) with the World Wide Web (http/web service).",
        "Storing sensitive user credentials in browser LocalStorage where XSS scripts can access them.",
        "Ignoring HTTP status codes and treating all API errors as generic 500 failures.",
        "Assuming changes made inside browser DevTools modify source files permanently.",
        "Failing to optimize network requests leading to high latency and poor user experience."
      ],
      "practiceExercises": [
        {
          "title": "Web Request Lifecycle Simulation",
          "task": "Diagram or detail step-by-step the journey of a user visiting https://shop.example.com/item?id=99 from DNS lookup to final screen paint.",
          "solution": "1. Browser checks cache / DNS resolver for shop.example.com -> Returns IP 198.51.100.4. 2. Establishes TCP/TLS handshake. 3. Sends GET /item?id=99 HTTP request. 4. Server queries database for item 99. 5. Server returns 200 OK with HTML/CSS. 6. Browser parses HTML/CSS, constructs DOM/CSSOM, runs layout and paint."
        },
        {
          "title": "DevTools Network Inspection Challenge",
          "task": "Open Chrome DevTools on any live news or shopping site, navigate to the Network tab, filter by 'Fetch/XHR', and identify 3 key request parameters (URL, HTTP Method, Status Code).",
          "solution": "Expected observation: URL (e.g. https://api.site.com/v1/feed), Method (GET), Status Code (200 OK), Content-Type (application/json)."
        }
      ],
      "keyTakeaways": [
        "The Web operates on a Client-Server model powered by HTTP/HTTPS protocols over the global Internet.",
        "Browsers parse HTML and CSS to create the DOM/CSSOM, building the render tree for visual output.",
        "DNS translates human-friendly domain names (example.com) into machine IP addresses.",
        "HTTP Request methods (GET, POST, PUT, DELETE) and Response Status Codes (2xx, 4xx, 5xx) govern API communications.",
        "Browser Developer Tools (F12) are indispensable for inspecting DOM, CSS, JavaScript errors, and network traffic."
      ],
      "mcqs": [
        {
          "id": "mod1-q1",
          "question": "What is the primary difference between the Internet and the World Wide Web (WWW)?",
          "options": [
            "The Internet is a programming language, while the Web is a database.",
            "The Internet is the hardware network infrastructure; the Web is an HTTP service running on top of it.",
            "The Internet only handles emails, while the Web only handles video streaming.",
            "There is no difference; both terms refer to the exact same software protocol."
          ],
          "correctAnswer": 1,
          "explanation": "The Internet is the global physical and logical network infrastructure, while the World Wide Web is a web service operating over HTTP/HTTPS."
        },
        {
          "id": "mod1-q2",
          "question": "Which HTTP status code group indicates a client-side error, such as requesting a page that does not exist?",
          "options": [
            "2xx (e.g., 200 OK)",
            "3xx (e.g., 301 Moved)",
            "4xx (e.g., 404 Not Found)",
            "5xx (e.g., 500 Internal Error)"
          ],
          "correctAnswer": 2,
          "explanation": "4xx status codes (like 404 Not Found or 401 Unauthorized) represent errors originating from client requests."
        },
        {
          "id": "mod1-q3",
          "question": "What is the main function of the Domain Name System (DNS)?",
          "options": [
            "To encrypt passwords sent across the web",
            "To translate human-readable domain names (like google.com) into numerical IP addresses",
            "To host HTML files on cloud servers",
            "To render CSS styles in the web browser"
          ],
          "correctAnswer": 1,
          "explanation": "DNS acts as the Internet's phonebook, converting domain names into numerical IP addresses so browsers can locate servers."
        },
        {
          "id": "mod1-q4",
          "question": "In the URL 'https://example.com/shop?category=shoes', which part represents the Query Parameter?",
          "options": [
            "https://",
            "example.com",
            "/shop",
            "?category=shoes"
          ],
          "correctAnswer": 3,
          "explanation": "'?category=shoes' is the query parameter used to pass key-value data to the web server."
        },
        {
          "id": "mod1-q5",
          "question": "Why should sensitive data like passwords NOT be stored in browser LocalStorage?",
          "options": [
            "LocalStorage is deleted every 5 minutes automatically.",
            "LocalStorage cannot store strings or numbers.",
            "LocalStorage is accessible by JavaScript in the browser and is vulnerable to Cross-Site Scripting (XSS).",
            "LocalStorage can only be read by web servers, not browsers."
          ],
          "correctAnswer": 2,
          "explanation": "LocalStorage is stored unencrypted in the browser and accessible to client-side scripts, making it vulnerable to XSS attacks."
        }
      ]
    }
  },
  {
    "id": "web-mod-2",
    "title": "Module 02 — HTML5 — Web Page Structure",
    "description": "HTML syntax, semantic elements, headings, links, images, tables, forms, multimedia, accessibility, SEO basics.",
    "completed": true,
    "readingMaterial": {
      "introduction": "HTML5 is the standard markup language used to structure content on the web. It provides the structural foundation on which websites and web applications are built. While CSS controls visual presentation and JavaScript provides interactivity, HTML defines the structure and semantic meaning of webpage content.",
      "objectives": [
        "Explain what HTML is and create a valid HTML5 document structure.",
        "Understand elements, tags, void elements, attributes, and correct nesting rules.",
        "Structure pages with headings (H1-H6), paragraphs, formatting tags, lists, and tables.",
        "Build accessible HTML forms with diverse input types, labels, and built-in validation.",
        "Utilize semantic HTML5 tags (<header>, <nav>, <main>, <article>, <section>, <footer>) for SEO and web accessibility."
      ],
      "sections": [
        {
          "title": "1. Module Overview & Learning Objectives",
          "content": "This module covers HTML syntax, document structure, headings, links, images, lists, tables, forms, multimedia, semantic elements, accessibility fundamentals, SEO basics, and best practices for writing modern HTML5.",
          "bullets": [
            "Create valid HTML5 documents with proper doctype and viewport declarations.",
            "Structure web content using headings, paragraphs, lists, and accessible data tables.",
            "Create internal, external, email, telephone, and bookmark hyperlinks.",
            "Embed images with alt attributes and multimedia (<audio>, <video>, <iframe>).",
            "Implement semantic HTML5 structural tags for search engine optimization and screen reader compatibility."
          ]
        },
        {
          "title": "2. What Is HTML? & Core Web Technologies",
          "content": "HTML (HyperText Markup Language) describes the structure of a webpage. Modern web development relies on three core technologies working together.",
          "table": {
            "headers": [
              "Technology",
              "Primary Role",
              "Example Output"
            ],
            "rows": [
              [
                "HTML5",
                "Structure and semantic meaning",
                "DOM elements, text hierarchy, forms"
              ],
              [
                "CSS3",
                "Presentation and visual styling",
                "Colors, typography, Flexbox/Grid layouts"
              ],
              [
                "JavaScript (ES6+)",
                "Behavior and interactivity",
                "Dynamic DOM updates, API requests, state"
              ]
            ]
          }
        },
        {
          "title": "3. Basic HTML5 Document Structure & Elements",
          "content": "An HTML5 document starts with <!DOCTYPE html> followed by <html>, <head>, and <body>. Elements consist of opening tags, content, and closing tags, or self-closing void elements (<img/>, <input/>, <br/>).",
          "bullets": [
            "<!DOCTYPE html>: Specifies the HTML5 standard to the browser.",
            "<html lang='en'>: Declares the root element and primary document language.",
            "<head>: Contains metadata, character set (<meta charset='UTF-8'>), title, and linked stylesheets.",
            "<body>: Contains all visible webpage content displayed to the user."
          ]
        },
        {
          "title": "4. Headings, Paragraphs & Text Formatting",
          "content": "HTML provides six heading levels (<h1> to <h6>) for content hierarchy, paragraph elements (<p>), and inline text formatting tags.",
          "bullets": [
            "<h1> to <h6>: Heading hierarchy (use one <h1> per page for primary topic).",
            "<strong>: Indicates strong importance (bold text rendered semantically).",
            "<em>: Represents structural emphasis (italicized).",
            "<mark>: Highlights text; <small>: Legal/fine print; <del>/<ins>: Revisions."
          ]
        },
        {
          "title": "5. Links & Anchor Attributes",
          "content": "Hyperlinks are created with <a> tags and the href attribute. Links can be external, internal paths, email mailto, telephone tel, or page fragment bookmarks (#section-id).",
          "bullets": [
            "External Link: <a href='https://example.com' target='_blank' rel='noopener noreferrer'>Visit</a>",
            "Page Fragment Link: <a href='#contact'>Jump to Contact</a>",
            "Security Best Practice: Use rel='noopener noreferrer' when opening links in new tabs (_blank)."
          ]
        },
        {
          "title": "6. Images & Image Optimization",
          "content": "Images are embedded using <img> void tags with src, alt, width, height, and loading attributes.",
          "bullets": [
            "src: Path to image file (JPEG, PNG, WebP, SVG).",
            "alt: Descriptive alternative text for screen readers and SEO.",
            "loading='lazy': Defers loading offscreen images until scrolled near the viewport."
          ]
        },
        {
          "title": "7. Lists & Tabular Data Structures",
          "content": "HTML supports Unordered Lists (<ul>), Ordered Lists (<ol>), Description Lists (<dl>), and data Tables (<table>).",
          "bullets": [
            "<ul> and <ol>: Contain list item (<li>) elements.",
            "<dl>: Contains description terms (<dt>) and description data (<dd>).",
            "Tables: Consist of <caption>, <thead>, <tbody>, <tfoot>, <tr> (rows), <th> (headers), and <td> (data cells)."
          ]
        },
        {
          "title": "8. Forms, Inputs & Form Validation",
          "content": "Forms (<form>) collect user input using interactive controls (<input>, <select>, <textarea>, <button>).",
          "table": {
            "headers": [
              "Input Type",
              "Use Case",
              "Validation Attributes"
            ],
            "rows": [
              [
                "text / search",
                "Single line text, search queries",
                "required, minlength, maxlength"
              ],
              [
                "email",
                "Email addresses (browser validated)",
                "required, pattern"
              ],
              [
                "password",
                "Masked security credentials",
                "required, minlength"
              ],
              [
                "number",
                "Numeric quantities",
                "min, max, step"
              ],
              [
                "date / time",
                "Native date/time picker",
                "min, max"
              ],
              [
                "checkbox / radio",
                "Option selection controls",
                "checked"
              ]
            ]
          }
        },
        {
          "title": "9. Multimedia & Embedded Content",
          "content": "HTML5 provides native media playback via <audio> and <video> elements with controls, autoplay, loop, and poster attributes. External widgets are embedded via <iframe>.",
          "bullets": [
            "<video controls poster='cover.jpg'><source src='video.mp4' type='video/mp4'></video>",
            "<audio controls><source src='podcast.mp3' type='audio/mpeg'></audio>",
            "<iframe src='...' title='Embedded map or video'></iframe>"
          ]
        },
        {
          "title": "10. Semantic HTML5 Structural Elements",
          "content": "Semantic elements convey explicit meaning to browsers, search engines, and screen readers instead of unsemantic generic <div> tags.",
          "bullets": [
            "<header>: Introductory page/section header, logos, and titles.",
            "<nav>: Major site navigation link blocks.",
            "<main>: Primary unique content container for the document.",
            "<section>: Thematic grouping of content with a heading.",
            "<article>: Self-contained reusable component (blog post, product card).",
            "<aside>: Sidebar or tangential related content.",
            "<footer>: Page/section footer with copyright, links, and contact info."
          ]
        },
        {
          "title": "11. Web Accessibility (a11y) Fundamentals",
          "content": "Accessibility ensures websites can be navigated by all users, including those using screen readers or keyboard navigation.",
          "bullets": [
            "Always associate form inputs with explicit <label for='input-id'> elements.",
            "Ensure all interactive elements (<button>, <a>, <input>) are keyboard focusable via Tab key.",
            "Provide descriptive link text (e.g. 'Read Web Dev Guide') instead of 'Click Here'.",
            "Use <figure> and <figcaption> to pair images with textual captions."
          ]
        },
        {
          "title": "12. Search Engine Optimization (SEO) & Metadata",
          "content": "HTML metadata in the <head> guides search engine indexing and responsive rendering.",
          "bullets": [
            "<title>: Primary page title displayed in search result titles and browser tabs.",
            "<meta name='description'>: Concise summary snippet for search result listings.",
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>: Essential responsive scaling.",
            "<html lang='en'>: Explicit document language specification."
          ]
        },
        {
          "title": "13. HTML Best Practices & Common Pitfalls",
          "content": "Writing clean, professional HTML requires avoiding anti-patterns.",
          "bullets": [
            "Avoid using <div> for everything when semantic tags (<nav>, <article>) exist.",
            "Never use headings (<h1>-<h6>) purely to increase text size—use CSS for visual styling.",
            "Do not use tables for page layout—reserve tables strictly for tabular datasets.",
            "Always supply alt text for informative images; use alt='' for purely decorative graphics."
          ]
        },
        {
          "title": "14. Practice & Interview Questions Summary",
          "content": "Mastering HTML5 structural principles prepares developers for technical evaluations.",
          "bullets": [
            "Q: Difference between <section> and <article>? (<article> is self-contained/distributable; <section> is a thematic group).",
            "Q: Why is <meta name='viewport'> critical? (It sets page width to device screen width and disables unwanted mobile auto-zoom).",
            "Q: What is the difference between <button> and <a>? (<button> triggers page actions/scripts; <a> navigates to URLs)."
          ]
        }
      ],
      "codeExamples": [
        {
          "title": "Complete Semantic HTML5 Webpage Structure",
          "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"Professional HTML5 semantic webpage example.\">\n    <title>Web Development Course Landing Page</title>\n</head>\n<body>\n    <header>\n        <h1>Web Development Academy</h1>\n        <nav>\n            <a href=\"#overview\">Overview</a>\n            <a href=\"#modules\">Modules</a>\n            <a href=\"#enroll\">Enroll</a>\n        </nav>\n    </header>\n\n    <main>\n        <section id=\"overview\">\n            <h2>Course Overview</h2>\n            <p>Master modern web development from HTML5 structure to full-stack deployment.</p>\n        </section>\n\n        <section id=\"modules\">\n            <h2>Course Curriculum</h2>\n            <article>\n                <h3>Module 01: Web Fundamentals</h3>\n                <p>Learn client-server architecture, HTTP/HTTPS, and browser rendering.</p>\n            </article>\n            <article>\n                <h3>Module 02: HTML5 Structure</h3>\n                <p>Master semantic elements, forms, multimedia, and web accessibility.</p>\n            </article>\n        </section>\n    </main>\n\n    <footer>\n        <p>&copy; 2026 Web Development Academy. All rights reserved.</p>\n    </footer>\n</body>\n</html>",
          "explanation": "Demonstrates standard HTML5 document layout using header, nav, main, section, article, and footer tags."
        },
        {
          "title": "Accessible HTML5 Registration Form with Validation",
          "code": "<form action=\"/api/register\" method=\"POST\">\n    <fieldset>\n        <legend>Student Registration</legend>\n\n        <div>\n            <label for=\"fullname\">Full Name:</label>\n            <input type=\"text\" id=\"fullname\" name=\"fullname\" required minlength=\"3\" placeholder=\"Alex Johnson\">\n        </div>\n\n        <div>\n            <label for=\"useremail\">Email Address:</label>\n            <input type=\"email\" id=\"useremail\" name=\"useremail\" required placeholder=\"alex@example.com\">\n        </div>\n\n        <div>\n            <label for=\"track\">Select Learning Track:</label>\n            <select id=\"track\" name=\"track\" required>\n                <option value=\"\">-- Choose Track --</option>\n                <option value=\"frontend\">Frontend Development</option>\n                <option value=\"fullstack\">Full-Stack Development</option>\n            </select>\n        </div>\n\n        <div>\n            <label for=\"comments\">Background Notes:</label>\n            <textarea id=\"comments\" name=\"comments\" rows=\"4\"></textarea>\n        </div>\n\n        <button type=\"submit\">Submit Registration</button>\n    </fieldset>\n</form>",
          "explanation": "Utilizes explicit <label for> matching, input validation attributes (required, minlength, type='email'), and fieldsets."
        }
      ],
      "bestPractices": [
        "Always use semantic HTML5 elements (<header>, <nav>, <main>, <article>, <footer>) over generic <div> tags.",
        "Ensure every form input has an associated <label for='input-id'> element for screen reader accessibility.",
        "Provide clear, descriptive alt attributes for all informative images.",
        "Include <meta name='viewport' content='width=device-width, initial-scale=1.0'> on every webpage.",
        "Maintain a logical heading hierarchy (one <h1> per page, followed sequentially by <h2>, <h3>)."
      ],
      "commonMistakes": [
        "Using <div> and <span> tags exclusively for page layout without semantic meaning.",
        "Using heading elements (<h1>-<h6>) simply to make text larger instead of using CSS font-size.",
        "Creating forms without proper <label> tags, breaking keyboard accessibility and screen readers.",
        "Using HTML <table> elements to create whole page layouts instead of CSS Flexbox or Grid.",
        "Omitting the alt attribute on <img> elements or filling it with generic words like 'image'."
      ],
      "practiceExercises": [
        {
          "title": "HTML5 Course Landing Page Project",
          "task": "Create a complete HTML5 landing page with header, nav bar, hero section, curriculum list, pricing table, registration form, and footer using pure semantic HTML.",
          "solution": "Page includes <!DOCTYPE html>, <html lang='en'>, <head> metadata, <header> with <nav>, <main> with multiple <section> blocks, <table> for pricing, <form> with input controls, and <footer>."
        },
        {
          "title": "Accessible Data Table Challenge",
          "task": "Build a course schedule table with <caption>, <thead>, <tbody>, <th> with scope='col', and <td> cells.",
          "solution": "<table><caption>Weekly Class Schedule</caption><thead><tr><th scope='col'>Day</th><th scope='col'>Topic</th></tr></thead><tbody><tr><td>Monday</td><td>HTML5 Forms</td></tr></tbody></table>"
        }
      ],
      "keyTakeaways": [
        "HTML defines the structural foundation and semantic meaning of web content.",
        "Semantic tags (<header>, <nav>, <main>, <article>) enhance SEO and screen reader accessibility.",
        "Forms require associated <label> elements and native validation attributes for usability.",
        "Proper heading hierarchy and image alt text are critical for web accessibility compliance.",
        "HTML structure works hand-in-hand with CSS styling and JavaScript behavior."
      ],
      "mcqs": [
        {
          "id": "mod2-q1",
          "question": "Which semantic HTML5 element should be used to enclose the primary navigation links of a website?",
          "options": [
            "<header>",
            "<nav>",
            "<section>",
            "<aside>"
          ],
          "correctAnswer": 1,
          "explanation": "The <nav> element is specifically designated for major block navigation links across a website."
        },
        {
          "id": "mod2-q2",
          "question": "What is the primary purpose of the 'alt' attribute on an <img> element?",
          "options": [
            "To specify the CSS background color of the image",
            "To provide alternative text for screen readers and when the image fails to load",
            "To rotate the image by 90 degrees",
            "To automatically resize the image to full screen"
          ],
          "correctAnswer": 1,
          "explanation": "The alt attribute provides a textual description of the image for web accessibility and fallbacks."
        },
        {
          "id": "mod2-q3",
          "question": "Which HTML attribute prevents a user from submitting a form if a specific input field is empty?",
          "options": [
            "disabled",
            "readonly",
            "required",
            "validate"
          ],
          "correctAnswer": 2,
          "explanation": "The 'required' attribute enforces built-in browser form validation before submission."
        },
        {
          "id": "mod2-q4",
          "question": "Why is it recommended to use <button type='submit'> instead of <div onclick='...'> for form submissions?",
          "options": [
            "Buttons automatically load external CSS stylesheets.",
            "Buttons provide native keyboard focus (Tab/Enter) and accessible ARIA roles out of the box.",
            "<div> tags cannot execute JavaScript click events.",
            "Buttons make the web server run faster."
          ],
          "correctAnswer": 1,
          "explanation": "Native <button> elements provide built-in keyboard accessibility and screen reader support without manual JavaScript hackery."
        },
        {
          "id": "mod2-q5",
          "question": "What is the function of the declaration <meta name='viewport' content='width=device-width, initial-scale=1.0'>?",
          "options": [
            "It sets the website language to English.",
            "It configures the viewport width to match the screen width of the device for responsive design.",
            "It imports Google Fonts automatically.",
            "It disables JavaScript execution on mobile devices."
          ],
          "correctAnswer": 1,
          "explanation": "The viewport meta tag ensures the browser renders the page at the device's physical screen width, enabling responsive CSS layouts."
        }
      ]
    }
  },
  {
    "id": "web-mod-3",
    "title": "Module 03 — CSS3 — Styling & Responsive Design",
    "description": "Selectors, box model, colors, typography, positioning, Flexbox, Grid, media queries, responsive layouts.",
    "completed": true,
    "readingMaterial": {
      "introduction": "CSS3 (Cascading Style Sheets) styles HTML elements, controlling layout geometry through the Box Model, Flexbox, CSS Grid, and Media Queries for fully responsive mobile-first web applications.",
      "objectives": [
        "Master the CSS Box Model (margin, border, padding, content width)",
        "Build 1D layouts with Flexbox and 2D layouts with CSS Grid",
        "Apply mobile-first responsive design using CSS Media Queries (@media)"
      ],
      "sections": [
        {
          "heading": "The CSS Box Model",
          "text": "Every element is a rectangular box comprising content, padding, border, and margin. Setting `box-sizing: border-box;` includes padding and border within total element width."
        },
        {
          "heading": "Flexbox vs CSS Grid",
          "text": "Flexbox is designed for 1D row or column layouts (`flex-direction: row`). CSS Grid is built for 2D complex grid layouts (`grid-template-columns: repeat(3, 1fr)`)."
        }
      ],
      "codeExamples": [
        {
          "title": "Responsive Flexbox Center Layout",
          "code": ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}",
          "explanation": "Flexbox centers elements horizontally and vertically, wrapping into a column on screens narrower than 768px."
        }
      ],
      "bestPractices": [
        "Always apply `box-sizing: border-box;` globally using universal selectors.",
        "Design mobile-first by writing base styles for small screens and expanding using min-width media queries."
      ],
      "commonMistakes": [
        "Hardcoding static pixel widths (`width: 1200px`) causing horizontal scrollbars on mobile devices."
      ],
      "practiceExercise": {
        "title": "Center a Card Component",
        "problem": "Use Flexbox to center a div horizontally and vertically inside a full-height container.",
        "solutionCode": ".parent { display: flex; justify-content: center; align-items: center; min-height: 100vh; }"
      },
      "keyTakeaways": [
        "Flexbox aligns items in 1 dimension; CSS Grid aligns items in 2 dimensions.",
        "Media queries enable adaptive layouts across desktop, tablet, and mobile screens."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "What CSS property ensures padding and borders are included in an element's total calculated width?",
          "options": [
            "box-sizing: border-box;",
            "box-sizing: content-box;",
            "margin: 0;",
            "display: inline;"
          ],
          "correctAnswer": 0,
          "explanation": "border-box includes padding and border in width calculations."
        },
        {
          "id": 2,
          "question": "Which Flexbox property aligns items along the primary main axis?",
          "options": [
            "align-items",
            "justify-content",
            "flex-wrap",
            "align-content"
          ],
          "correctAnswer": 1,
          "explanation": "justify-content handles alignment along the main axis."
        },
        {
          "id": 3,
          "question": "Which CSS Grid property specifies a 3-column layout with equal fractional widths?",
          "options": [
            "grid-template-columns: 1fr 1fr 1fr;",
            "grid-columns: 3;",
            "flex: 3;",
            "display: grid-3;"
          ],
          "correctAnswer": 0,
          "explanation": "grid-template-columns: 1fr 1fr 1fr creates 3 equal-width columns."
        },
        {
          "id": 4,
          "question": "Which CSS media query targets screen widths smaller than or equal to 768px?",
          "options": [
            "@media (max-width: 768px)",
            "@media (min-width: 768px)",
            "@screen 768",
            "@device 768px"
          ],
          "correctAnswer": 0,
          "explanation": "@media (max-width: 768px) applies styles to viewports up to 768px wide."
        },
        {
          "id": 5,
          "question": "What positioning type positions an element relative to the browser viewport, keeping it fixed during scrolling?",
          "options": [
            "position: absolute;",
            "position: fixed;",
            "position: relative;",
            "position: static;"
          ],
          "correctAnswer": 1,
          "explanation": "position: fixed positions an element relative to the viewport window."
        }
      ],
      "references": [
        {
          "title": "MDN CSS Flexbox Guide",
          "url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
        }
      ]
    }
  },
  {
    "id": "web-mod-4",
    "title": "Module 04 — Modern CSS & UI Design",
    "description": "Advanced layouts, transitions, animations, variables, reusable components, responsive UI, modern design principles.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Modern CSS introduces CSS custom properties (variables), smooth CSS transitions, keyframe animations, glassmorphism, and modern UI design principles to build sleek, state-of-the-art visual interfaces.",
      "objectives": [
        "Declare and use CSS Custom Properties (Variables) for theme management",
        "Create smooth interactive hover states and `@keyframes` animations",
        "Apply modern design aesthetics (glassmorphism, subtle micro-animations, curated color palettes)"
      ],
      "sections": [
        {
          "heading": "CSS Custom Properties (Variables)",
          "text": "CSS variables (`:root { --primary: #10b981; }`) allow declaring reusable color tokens, typography scales, and spacing values across stylesheets, enabling effortless dark mode switching."
        },
        {
          "heading": "Transitions & Keyframe Animations",
          "text": "CSS transitions smoothly animate state changes (e.g. `transition: transform 0.3s ease`). Keyframe animations (`@keyframes`) define multi-step custom web animations."
        }
      ],
      "codeExamples": [
        {
          "title": "CSS Custom Properties & Hover Animation",
          "code": ":root {\n  --brand-color: #6366f1;\n}\n\n.card {\n  background: var(--brand-color);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 25px rgba(0,0,0,0.3);\n}",
          "explanation": "Applies CSS variables and a subtle micro-animation transform on card hover."
        }
      ],
      "bestPractices": [
        "Use CSS variables for theme colors to enable quick global design updates.",
        "Keep micro-animations subtle (duration under 300ms) to enhance UI feel without causing lag."
      ],
      "commonMistakes": [
        "Animating layout properties like `width` or `margin` causing browser repaint lag; animate `transform` and `opacity` instead."
      ],
      "practiceExercise": {
        "title": "Create a Pulsing Button",
        "problem": "Define a CSS @keyframes animation that scales a button slightly in a continuous loop.",
        "solutionCode": "@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } } .btn { animation: pulse 2s infinite; }"
      },
      "keyTakeaways": [
        "CSS Variables simplify design system maintenance.",
        "Hardware-accelerated CSS properties (`transform`, `opacity`) ensure 60fps animations."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "How do you reference a CSS custom property (variable) named '--accent-color'?",
          "options": [
            "var(--accent-color)",
            "get(--accent-color)",
            "$accent-color",
            "attr(--accent-color)"
          ],
          "correctAnswer": 0,
          "explanation": "CSS variables are accessed using the var() function."
        },
        {
          "id": 2,
          "question": "Which CSS properties are hardware-accelerated for smooth 60fps animations?",
          "options": [
            "transform and opacity",
            "width and height",
            "margin and padding",
            "top and left"
          ],
          "correctAnswer": 0,
          "explanation": "transform and opacity are GPU-accelerated and do not trigger layout reflow."
        },
        {
          "id": 3,
          "question": "Where are global CSS variables typically defined to ensure page-wide availability?",
          "options": [
            ":root selector",
            "body tag only",
            "@media block",
            "* selector"
          ],
          "correctAnswer": 0,
          "explanation": ":root represents the highest-level element in the document tree."
        },
        {
          "id": 4,
          "question": "Which CSS rule is used to create multi-step keyframe web animations?",
          "options": [
            "@keyframes",
            "@animation",
            "@transition",
            "@frames"
          ],
          "correctAnswer": 0,
          "explanation": "@keyframes defines animation frames and properties over time."
        },
        {
          "id": 5,
          "question": "What CSS property creates translucent glassmorphism background effects?",
          "options": [
            "backdrop-filter: blur(10px);",
            "filter: drop-shadow();",
            "opacity: 0.5;",
            "box-shadow: glass;"
          ],
          "correctAnswer": 0,
          "explanation": "backdrop-filter applies graphical blur effects to elements behind glass layers."
        }
      ],
      "references": [
        {
          "title": "MDN CSS Custom Properties",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
        }
      ]
    }
  },
  {
    "id": "web-mod-5",
    "title": "Module 05 — JavaScript Fundamentals",
    "description": "Variables, data types, operators, conditions, loops, functions, arrays, objects, scope, error handling.",
    "completed": true,
    "readingMaterial": {
      "introduction": "JavaScript is the core programming language of the web. It enables dynamic user interactions, data processing, object-oriented state management, and algorithmic control flow.",
      "objectives": [
        "Understand JavaScript data types, scope (let vs const vs var), and hoisting",
        "Master functions, arrow syntax, array iteration methods (map, filter, reduce)",
        "Implement robust control flow and error handling with try/catch blocks"
      ],
      "sections": [
        {
          "heading": "Variables & Scope: let, const, and var",
          "text": "`const` declares block-scoped reassignable-immutable variables; `let` declares block-scoped reassignable variables. Avoid legacy `var` due to function-scope hoisting quirks."
        },
        {
          "heading": "Array Iteration Methods",
          "text": "Functional array methods like `.map()`, `.filter()`, and `.reduce()` transform and filter arrays immutably without mutating original source arrays."
        }
      ],
      "codeExamples": [
        {
          "title": "Array Transformation with Map & Filter",
          "code": "const prices = [10, 25, 40, 100];\nconst discountedHighPrices = prices\n  .filter(p => p >= 25)\n  .map(p => p * 0.9);\nconsole.log(discountedHighPrices); // [22.5, 36, 90]",
          "explanation": "Filters prices >= 25 and applies a 10% discount to matching elements."
        }
      ],
      "bestPractices": [
        "Prefer `const` by default; use `let` only when variable reassignment is required.",
        "Use strict equality (`===`) instead of loose equality (`==`) to avoid unintended type coercion."
      ],
      "commonMistakes": [
        "Mutating arrays directly with `.sort()` or `.push()` when immutability is intended."
      ],
      "practiceExercise": {
        "title": "Filter Even Numbers",
        "problem": "Write a function that accepts an array of numbers and returns only the even numbers using .filter().",
        "solutionCode": "const getEvens = arr => arr.filter(n => n % 2 === 0);"
      },
      "keyTakeaways": [
        "let and const enforce block scope.",
        "Functional array methods (.map, .filter) enable declarative data transformation."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "Which keyword declares a block-scoped variable that CANNOT be reassigned?",
          "options": [
            "const",
            "let",
            "var",
            "static"
          ],
          "correctAnswer": 0,
          "explanation": "const enforces block scope and prevents reassignment."
        },
        {
          "id": 2,
          "question": "What does the strict equality operator (===) compare in JavaScript?",
          "options": [
            "Values only",
            "Values and Data Types",
            "Memory Addresses only",
            "String Lengths"
          ],
          "correctAnswer": 1,
          "explanation": "=== checks both value equality and data type equality without type coercion."
        },
        {
          "id": 3,
          "question": "Which array method returns a brand-new array containing transformed elements?",
          "options": [
            ".forEach()",
            ".map()",
            ".push()",
            ".splice()"
          ],
          "correctAnswer": 1,
          "explanation": ".map() creates a new array populated with results of calling a function on every element."
        },
        {
          "id": 4,
          "question": "What is the result of `typeof null` in JavaScript?",
          "options": [
            "'null'",
            "'object'",
            "'undefined'",
            "'boolean'"
          ],
          "correctAnswer": 1,
          "explanation": "typeof null returns 'object' due to a historical JavaScript design implementation."
        },
        {
          "id": 5,
          "question": "Which block catches runtime errors in JavaScript?",
          "options": [
            "try { ... } catch (err) { ... }",
            "if error { ... }",
            "do { ... } catch",
            "assert { ... }"
          ],
          "correctAnswer": 0,
          "explanation": "try...catch blocks handle runtime exceptions without application crash."
        }
      ],
      "references": [
        {
          "title": "MDN JavaScript First Steps",
          "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"
        }
      ]
    }
  },
  {
    "id": "web-mod-6",
    "title": "Module 06 — Advanced JavaScript & DOM",
    "description": "ES6+, destructuring, spread/rest, modules, DOM manipulation, events, forms, browser APIs, local storage.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Advanced JavaScript focuses on ES6+ syntax (Destructuring, Spread/Rest, Modules) and DOM (Document Object Model) manipulation to create interactive user interfaces and persist local state.",
      "objectives": [
        "Utilize ES6+ destructuring, spread/rest operators (`...`), and ES Modules (`import/export`)",
        "Manipulate DOM nodes dynamically and attach event listeners using Event Delegation",
        "Persist user data across browser refreshes with Web Storage (`localStorage`)"
      ],
      "sections": [
        {
          "heading": "DOM Manipulation & Event Listener Delegation",
          "text": "The DOM tree represents HTML in memory. Event delegation attaches a single event listener to a parent container to manage child element events efficiently."
        },
        {
          "heading": "Web Storage API: localStorage",
          "text": "`localStorage.setItem('key', JSON.stringify(data))` stores key-value string data persistently in the browser across sessions."
        }
      ],
      "codeExamples": [
        {
          "title": "DOM Event Delegation & LocalStorage",
          "code": "const list = document.querySelector('#item-list');\n\nlist.addEventListener('click', (e) => {\n  if (e.target.matches('.delete-btn')) {\n    e.target.closest('li').remove();\n    localStorage.setItem('itemsCount', list.children.length);\n  }\n});",
          "explanation": "Deletes item elements using event delegation and syncs item count to localStorage."
        }
      ],
      "bestPractices": [
        "Use Event Delegation for dynamically generated list items instead of adding listeners to individual nodes.",
        "Always parse items retrieved from `localStorage` using `JSON.parse()`."
      ],
      "commonMistakes": [
        "Storing raw object references in `localStorage` without converting them via `JSON.stringify()`."
      ],
      "practiceExercise": {
        "title": "Save Object to LocalStorage",
        "problem": "Save a user profile object `{ name: 'Alice', age: 25 }` to localStorage under key 'user'.",
        "solutionCode": "localStorage.setItem('user', JSON.stringify({ name: 'Alice', age: 25 }));"
      },
      "keyTakeaways": [
        "Event Delegation improves memory efficiency.",
        "LocalStorage persists string data in browser storage."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "Which ES6 syntax allows extracting properties from objects into distinct variables?",
          "options": [
            "Object Destructuring",
            "Array Slicing",
            "Spread Syntax",
            "Module Import"
          ],
          "correctAnswer": 0,
          "explanation": "Destructuring `const { name, age } = user;` extracts object properties cleanly."
        },
        {
          "id": 2,
          "question": "What operator (`...`) expands array elements or object properties into new containers?",
          "options": [
            "Spread Operator",
            "Rest Parameter",
            "Ternary Operator",
            "Optional Chaining"
          ],
          "correctAnswer": 0,
          "explanation": "The spread operator expands iterable items into elements."
        },
        {
          "id": 3,
          "question": "What method adds a new DOM element inside a parent container?",
          "options": [
            "parent.appendChild(child)",
            "parent.addNode(child)",
            "parent.insert(child)",
            "parent.push(child)"
          ],
          "correctAnswer": 0,
          "explanation": "appendChild adds a node to the end of a parent element's child list."
        },
        {
          "id": 4,
          "question": "How do you store a JavaScript object in `localStorage`?",
          "options": [
            "localStorage.setItem('k', JSON.stringify(obj))",
            "localStorage.set('k', obj)",
            "localStorage.write('k', obj)",
            "localStorage.push(obj)"
          ],
          "correctAnswer": 0,
          "explanation": "LocalStorage stores strings; objects must be serialized via JSON.stringify."
        },
        {
          "id": 5,
          "question": "What is Event Delegation in DOM scripting?",
          "options": [
            "Attaching a single event listener to a parent element to handle events triggered on child elements",
            "Delegating event execution to a Web Worker background thread",
            "Deleting all event listeners on page unload",
            "Preventing default form submit behaviors"
          ],
          "correctAnswer": 0,
          "explanation": "Event delegation leverages event bubbling to handle child events from a parent listener."
        }
      ],
      "references": [
        {
          "title": "MDN DOM Introduction",
          "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
        }
      ]
    }
  },
  {
    "id": "web-mod-7",
    "title": "Module 07 — Asynchronous JavaScript & APIs",
    "description": "Callbacks, Promises, async/await, Fetch API, JSON, REST APIs, API integration, error handling.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Asynchronous JavaScript manages non-blocking operations like fetching remote REST API data using Promises and `async/await` syntax without freezing the browser UI thread.",
      "objectives": [
        "Understand the JavaScript Event Loop, Callbacks, and Promises (`resolve/reject`)",
        "Fetch data asynchronously using `async/await` and the `fetch()` API",
        "Handle API request errors, HTTP status codes, and JSON parsing gracefully"
      ],
      "sections": [
        {
          "heading": "Promises & Async / Await Syntax",
          "text": "`async/await` is syntactic sugar over Promises. Marking a function `async` allows using `await` before asynchronous calls, writing non-blocking code in a linear synchronous-looking format."
        },
        {
          "heading": "Consuming REST APIs with fetch()",
          "text": "The Fetch API sends HTTP requests. Checking `if (!response.ok)` catches 404/500 HTTP status errors before attempting `response.json()`."
        }
      ],
      "codeExamples": [
        {
          "title": "Async / Await API Fetching with Error Handling",
          "code": "async function fetchUserData(userId) {\n  try {\n    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);\n    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);\n    const data = await res.json();\n    console.log('User:', data.name);\n  } catch (err) {\n    console.error('Fetch failed:', err.message);\n  }\n}",
          "explanation": "Uses async/await with try/catch to handle network requests and HTTP status codes cleanly."
        }
      ],
      "bestPractices": [
        "Always check `response.ok` when using `fetch()`, because HTTP 404/500 errors do not reject Promises automatically.",
        "Wrap `await` calls inside `try...catch` blocks to capture network timeouts."
      ],
      "commonMistakes": [
        "Forgetting to `await` `response.json()`, resulting in a pending Promise object instead of parsed data."
      ],
      "practiceExercise": {
        "title": "Fetch API Data",
        "problem": "Write an async function that fetches posts from `https://jsonplaceholder.typicode.com/posts/1` and logs the post title.",
        "solutionCode": "async function getPost() { const r = await fetch('https://jsonplaceholder.typicode.com/posts/1'); const d = await r.json(); console.log(d.title); }"
      },
      "keyTakeaways": [
        "async/await makes asynchronous code clean and readable.",
        "fetch() returns a Promise resolving to a Response object."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "What state is a JavaScript Promise in before it settles as resolved or rejected?",
          "options": [
            "Pending",
            "Fulfilled",
            "Rejected",
            "Settled"
          ],
          "correctAnswer": 0,
          "explanation": "A Promise starts in the 'pending' state."
        },
        {
          "id": 2,
          "question": "What keyword can ONLY be used inside functions marked with the `async` keyword?",
          "options": [
            "await",
            "yield",
            "defer",
            "promise"
          ],
          "correctAnswer": 0,
          "explanation": "await pauses async function execution until a Promise settles."
        },
        {
          "id": 3,
          "question": "Does the native `fetch()` API automatically reject its Promise on HTTP 404 Not Found status?",
          "options": [
            "No, it resolves normally; response.ok must be checked",
            "Yes, it rejects instantly",
            "It crashes the script",
            "It re-sends the request"
          ],
          "correctAnswer": 0,
          "explanation": "fetch() only rejects on network failures; HTTP 404/500 responses still resolve."
        },
        {
          "id": 4,
          "question": "Which JavaScript method converts a JSON string into a native object?",
          "options": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "Object.parse()"
          ],
          "correctAnswer": 0,
          "explanation": "JSON.parse() parses a JSON string into JavaScript objects."
        },
        {
          "id": 5,
          "question": "What architecture uses HTTP verbs (GET, POST, PUT, DELETE) to manage web resources?",
          "options": [
            "REST API",
            "GraphQL API",
            "WebSockets",
            "SOAP Protocol"
          ],
          "correctAnswer": 0,
          "explanation": "RESTful architecture uses standard HTTP methods for resource CRUD actions."
        }
      ],
      "references": [
        {
          "title": "MDN Using Fetch",
          "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
        }
      ]
    }
  },
  {
    "id": "web-mod-8",
    "title": "Module 08 — Git, GitHub & Web Development Workflow",
    "description": "Git fundamentals, repositories, branches, commits, pull requests, GitHub, collaboration, version control.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Git is the industry-standard distributed version control system. Combined with GitHub, developers track file changes, manage feature branches, perform code reviews via Pull Requests, and collaborate seamlessly.",
      "objectives": [
        "Initialize Git repositories and manage staging, commits, and status (`git status`, `git commit`)",
        "Create, merge, and resolve conflicts across feature branches (`git branch`, `git checkout`)",
        "Push local code to GitHub, manage remotes (`git push`), and collaborate via Pull Requests"
      ],
      "sections": [
        {
          "heading": "Git Workflow: Staging & Committing",
          "text": "Git tracks local file changes through three states: Working Directory -> Staging Area (`git add`) -> Local Repository (`git commit -m 'message'`)."
        },
        {
          "heading": "Branching & GitHub Pull Requests",
          "text": "Branching isolation allows developers to build features on separate branches (`git checkout -b feature-name`) before creating Pull Requests on GitHub for team code review and merging into `main`."
        }
      ],
      "codeExamples": [
        {
          "title": "Standard Git Feature Branch Workflow",
          "code": "# Create and switch to a feature branch\ngit checkout -b feature/login-page\n\n# Stage and commit changes\ngit add .\ngit commit -m \"Add responsive login form and styles\"\n\n# Push branch to remote GitHub repository\ngit push -u origin feature/login-page",
          "explanation": "Demonstrates creating a feature branch, committing changes, and pushing to GitHub."
        }
      ],
      "bestPractices": [
        "Write clear, imperative commit messages (e.g. 'Fix navigation bar bug on mobile').",
        "Never commit sensitive API keys or database passwords; add them to `.gitignore`."
      ],
      "commonMistakes": [
        "Committing large `node_modules/` folders to Git repositories instead of listing them in `.gitignore`."
      ],
      "practiceExercise": {
        "title": "Create a Git Commit",
        "problem": "Stage all modified files and create a commit with message 'Initial project setup'.",
        "solutionCode": "git add . && git commit -m \"Initial project setup\""
      },
      "keyTakeaways": [
        "Git tracks source code revision history locally.",
        "GitHub hosts remote repositories and facilitates collaborative Pull Requests."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "Which command initializes a brand-new local Git repository in the current folder?",
          "options": [
            "git init",
            "git start",
            "git create",
            "git clone"
          ],
          "correctAnswer": 0,
          "explanation": "git init initializes a new empty Git repository."
        },
        {
          "id": 2,
          "question": "What Git command moves modified files from Working Directory to the Staging Area?",
          "options": [
            "git add .",
            "git commit",
            "git stage",
            "git push"
          ],
          "correctAnswer": 0,
          "explanation": "git add stages changes for the next commit."
        },
        {
          "id": 3,
          "question": "Which file prevents specified files (like node_modules or .env) from being tracked by Git?",
          "options": [
            ".gitignore",
            ".gitkeep",
            "package.json",
            "README.md"
          ],
          "correctAnswer": 0,
          "explanation": ".gitignore specifies untracked files that Git should ignore."
        },
        {
          "id": 4,
          "question": "What command creates and immediately switches to a new Git branch?",
          "options": [
            "git checkout -b branch-name",
            "git new branch-name",
            "git branch -create branch-name",
            "git switch -make branch-name"
          ],
          "correctAnswer": 0,
          "explanation": "git checkout -b creates and switches to a new branch."
        },
        {
          "id": 5,
          "question": "How do developers request code review before merging feature branches into main on GitHub?",
          "options": [
            "Pull Request (PR)",
            "Push Notification",
            "Merge Request Commit",
            "Fork Branch"
          ],
          "correctAnswer": 0,
          "explanation": "Pull Requests let developers review and discuss changes before merging."
        }
      ],
      "references": [
        {
          "title": "Git Official Documentation",
          "url": "https://git-scm.com/doc"
        }
      ]
    }
  },
  {
    "id": "web-mod-9",
    "title": "Module 09 — Frontend Development with React",
    "description": "React fundamentals, components, JSX, props, state, events, conditional rendering, lists, forms.",
    "completed": true,
    "readingMaterial": {
      "introduction": "React is a component-driven JavaScript library for building single-page user interfaces. It uses JSX syntax and state management (`useState`) to update the DOM efficiently via Virtual DOM diffing.",
      "objectives": [
        "Understand React component architecture, JSX syntax, and props passing",
        "Manage interactive component state using the `useState` Hook",
        "Render dynamic lists with array mapping and conditional rendering"
      ],
      "sections": [
        {
          "heading": "JSX & Component Props",
          "text": "JSX allows writing HTML-like tags inside JavaScript. Components accept inputs called `props`, making UIs modular, reusable, and predictable."
        },
        {
          "heading": "Component State with useState",
          "text": "State represents dynamic data that changes over time. Calling `useState(initialValue)` returns current state and an updater function (`const [count, setCount] = useState(0)`)."
        }
      ],
      "codeExamples": [
        {
          "title": "React Counter Component with useState",
          "code": "import React, { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className=\"p-4 border rounded-xl\">\n      <p>Current Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
          "explanation": "Manages counter state with React's useState hook and updates UI on click."
        }
      ],
      "bestPractices": [
        "Keep components small, focused, and reusable.",
        "Always provide a unique `key` prop when rendering lists with `.map()`."
      ],
      "commonMistakes": [
        "Mutating state directly (`state.count = 5`) instead of using setter functions (`setCount(5)`)."
      ],
      "practiceExercise": {
        "title": "Build a Toggle Component",
        "problem": "Create a React component that toggles text visibility on button click using useState.",
        "solutionCode": "function Toggle() { const [show, setShow] = useState(false); return <button onClick={()=>setShow(!show)}>{show ? \"Hide\" : \"Show\"}</button>; }"
      },
      "keyTakeaways": [
        "Props pass data down; State manages local component changes.",
        "Virtual DOM re-renders efficiently when state updates."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "What syntax allows writing HTML-like markup inside JavaScript files in React?",
          "options": [
            "JSX",
            "HTML5",
            "TypeScript",
            "JSON"
          ],
          "correctAnswer": 0,
          "explanation": "JSX (JavaScript XML) is a syntax extension for React."
        },
        {
          "id": 2,
          "question": "Which React Hook declares local dynamic state variables inside functional components?",
          "options": [
            "useState",
            "useEffect",
            "useContext",
            "useRef"
          ],
          "correctAnswer": 0,
          "explanation": "useState creates component state and its updater function."
        },
        {
          "id": 3,
          "question": "How are read-only properties passed down from a parent React component to a child component?",
          "options": [
            "Via Props",
            "Via State",
            "Via Global Window",
            "Via CSS classes"
          ],
          "correctAnswer": 0,
          "explanation": "Props pass data downwards from parent to child components."
        },
        {
          "id": 4,
          "question": "Why must list elements rendered via `.map()` have a unique `key` prop in React?",
          "options": [
            "To help React identify which items have changed, added, or removed for efficient Virtual DOM diffing",
            "To apply CSS styles to individual items",
            "To prevent JavaScript memory leaks",
            "To enable automatic list sorting"
          ],
          "correctAnswer": 0,
          "explanation": "Unique key props optimize reconciliation performance during list re-renders."
        },
        {
          "id": 5,
          "question": "What happens when a React component's state or props change?",
          "options": [
            "The component re-renders to reflect updated state in UI",
            "The browser window reloads",
            "The database is deleted",
            "State resets to initial values"
          ],
          "correctAnswer": 0,
          "explanation": "React re-renders components whenever state or props change."
        }
      ],
      "references": [
        {
          "title": "React Official Documentation",
          "url": "https://react.dev/"
        }
      ]
    }
  },
  {
    "id": "web-mod-10",
    "title": "Module 10 — Advanced React & Modern Frontend Development",
    "description": "Hooks, Context API, routing, reusable components, API integration, state management, performance optimization.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Advanced React covers side-effect management (`useEffect`), global state with Context API, multi-page client routing with React Router, and performance optimization.",
      "objectives": [
        "Manage side effects, subscriptions, and API calls using the `useEffect` Hook",
        "Share global application state across component trees using React Context API",
        "Implement SPA client-side routing using React Router (`Routes`, `Route`, `Link`)"
      ],
      "sections": [
        {
          "heading": "The useEffect Hook & Dependency Array",
          "text": "`useEffect(() => { ... }, [dependencies])` manages side effects (data fetching, DOM updates). An empty dependency array `[]` runs the effect once on initial component mount."
        },
        {
          "heading": "Global State with Context API & Routing",
          "text": "Context API solves prop-drilling by providing a global data provider. React Router enables seamless multi-page client-side navigation without full browser reloads."
        }
      ],
      "codeExamples": [
        {
          "title": "API Data Fetching with useEffect Hook",
          "code": "import React, { useState, useEffect } from 'react';\n\nexport default function UserList() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/users')\n      .then(res => res.json())\n      .then(data => setUsers(data));\n  }, []); // Empty array runs once on mount\n\n  return (\n    <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>\n  );\n}",
          "explanation": "Fetches user data asynchronously on component mount using useEffect."
        }
      ],
      "bestPractices": [
        "Always specify correct variables in the `useEffect` dependency array to prevent infinite re-render loops.",
        "Use Context API for global state like authentication or dark theme preferences."
      ],
      "commonMistakes": [
        "Omitting dependency arrays in `useEffect`, causing side effects to trigger on every single render."
      ],
      "practiceExercise": {
        "title": "Create a Document Title Effect",
        "problem": "Write a useEffect hook that updates `document.title` whenever a `score` state variable changes.",
        "solutionCode": "useEffect(() => { document.title = `Score: ${score}`; }, [score]);"
      },
      "keyTakeaways": [
        "useEffect manages component lifecycles and side effects.",
        "React Router enables fast client-side navigation."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "Which Hook handles side effects like data fetching or DOM subscriptions in React?",
          "options": [
            "useEffect",
            "useState",
            "useMemo",
            "useReducer"
          ],
          "correctAnswer": 0,
          "explanation": "useEffect manages side effects in functional components."
        },
        {
          "id": 2,
          "question": "When does a `useEffect` hook with an empty dependency array `[]` execute?",
          "options": [
            "Only once after initial component mount",
            "On every single component re-render",
            "When the component unmounts only",
            "Never"
          ],
          "correctAnswer": 0,
          "explanation": "An empty dependency array causes useEffect to run once after the initial render."
        },
        {
          "id": 3,
          "question": "What React feature resolves 'prop-drilling' by passing data globally through component trees?",
          "options": [
            "Context API (useContext)",
            "Redux Saga",
            "Local State",
            "Props Spreading"
          ],
          "correctAnswer": 0,
          "explanation": "Context API shares state across component trees without manual prop drilling."
        },
        {
          "id": 4,
          "question": "Which component in React Router v6 defines individual route mappings?",
          "options": [
            "<Route path='/' element={<Home />} />",
            "<Link href='/'>",
            "<Navigate to='/'>",
            "<Switch path='/'>"
          ],
          "correctAnswer": 0,
          "explanation": "<Route> pairs URL paths with React element views."
        },
        {
          "id": 5,
          "question": "What Hook memoizes expensive mathematical calculation results across re-renders?",
          "options": [
            "useMemo",
            "useCallback",
            "useRef",
            "useEffect"
          ],
          "correctAnswer": 0,
          "explanation": "useMemo caches calculated values to optimize performance."
        }
      ],
      "references": [
        {
          "title": "React Router Documentation",
          "url": "https://reactrouter.com/"
        }
      ]
    }
  },
  {
    "id": "web-mod-11",
    "title": "Module 11 — UI/UX & Professional Frontend Projects",
    "description": "Design principles, responsive interfaces, accessibility, UX patterns, dashboards, e-commerce interfaces, portfolio development.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Professional Frontend Development blends technical code with User Experience (UX) design principles, implementing visual hierarchy, responsive layouts, web accessibility standards (WCAG), and production portfolio projects.",
      "objectives": [
        "Apply key UI/UX design principles: visual hierarchy, typography contrast, whitespace, and micro-interactions",
        "Implement Web Accessibility Standards (WCAG 2.1 compliance, focus management, ARIA roles)",
        "Build production-ready frontend projects (dashboards, e-commerce storefronts, portfolios)"
      ],
      "sections": [
        {
          "heading": "Visual Hierarchy & Whitespace",
          "text": "Effective UIs use font sizing, color contrast, and generous whitespace to guide user attention naturally toward primary call-to-action (CTA) elements."
        },
        {
          "heading": "Web Accessibility (WCAG)",
          "text": "Accessibility ensures web applications are usable by everyone, including people with visual, auditory, or motor impairments, using keyboard navigation and screen-reader compliant contrast."
        }
      ],
      "codeExamples": [
        {
          "title": "Accessible Card Component with ARIA Attributes",
          "code": "<article className=\"card p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-md\">\n  <h3 className=\"text-xl font-bold text-white mb-2\">Portfolio Project</h3>\n  <p className=\"text-sm text-slate-300 mb-4\">Responsive full-stack web application.</p>\n  <a href=\"/project\" aria-label=\"View Portfolio Project Details\" className=\"px-4 py-2 bg-emerald-500 text-slate-950 font-bold rounded-lg\">\n    View Case Study\n  </a>\n</article>",
          "explanation": "Uses semantic <article> and explicit aria-label for screen reader accessibility."
        }
      ],
      "bestPractices": [
        "Ensure color contrast ratios meet WCAG AA standards (minimum 4.5:1 ratio for normal text).",
        "Make all interactive elements accessible via keyboard Navigation (Tab key focus states)."
      ],
      "commonMistakes": [
        "Removing CSS focus outlines (`outline: none`) without providing custom accessible focus indicators."
      ],
      "practiceExercise": {
        "title": "Create Focus State",
        "problem": "Add a high-visibility ring outline to buttons when focused via keyboard Tab navigation.",
        "solutionCode": ".btn:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }"
      },
      "keyTakeaways": [
        "Good UX minimizes cognitive load for users.",
        "Accessibility is a fundamental requirement, not an optional feature."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "What minimum contrast ratio is required by WCAG AA standards for normal text?",
          "options": [
            "4.5:1",
            "2.0:1",
            "10:1",
            "1:1"
          ],
          "correctAnswer": 0,
          "explanation": "WCAG AA requires at least 4.5:1 contrast for regular text size."
        },
        {
          "id": 2,
          "question": "What accessibility attribute provides additional descriptive context for screen readers when visible text is insufficient?",
          "options": [
            "aria-label",
            "alt-title",
            "screen-reader-text",
            "src-desc"
          ],
          "correctAnswer": 0,
          "explanation": "aria-label specifies a string label for assistive technologies."
        },
        {
          "id": 3,
          "question": "What design principle uses size, weight, and color to direct user focus to important elements first?",
          "options": [
            "Visual Hierarchy",
            "Data Normalization",
            "Flexbox Wrapping",
            "DOM Bubbling"
          ],
          "correctAnswer": 0,
          "explanation": "Visual hierarchy structures visual elements in order of importance."
        },
        {
          "id": 4,
          "question": "Why should developers avoid setting `outline: none;` without custom focus styles?",
          "options": [
            "It breaks keyboard navigation for visually impaired users relying on Tab focus indicators",
            "It prevents CSS Grid from rendering",
            "It causes React state errors",
            "It disables button click events"
          ],
          "correctAnswer": 0,
          "explanation": "Removing outlines hides focus states needed for keyboard accessibility."
        },
        {
          "id": 5,
          "question": "What is an important UX practice when submitting asynchronous forms?",
          "options": [
            "Disabling the submit button and showing a loading spinner during request execution",
            "Refreshing the browser immediately",
            "Clearing all fields before the request completes",
            "Closing the browser window"
          ],
          "correctAnswer": 0,
          "explanation": "Showing loading states prevents duplicate form submissions and confirms action progress."
        }
      ],
      "references": [
        {
          "title": "W3C Web Accessibility Initiative (WAI)",
          "url": "https://www.w3.org/WAI/"
        }
      ]
    }
  },
  {
    "id": "web-mod-12",
    "title": "Module 12 — Backend Development with Node.js",
    "description": "Node.js fundamentals, npm, modules, file system, environment variables, server creation, Express.js.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Node.js brings JavaScript to the server, providing an event-driven non-blocking I/O runtime. Express.js simplifies server creation, HTTP routing, and middleware processing for scalable backend development.",
      "objectives": [
        "Understand Node.js asynchronous event-driven non-blocking I/O runtime architecture",
        "Use npm package management, CommonJS (`require`) and ES Modules (`import`), and `dotenv` environment configuration",
        "Build HTTP REST servers and custom middleware using Express.js"
      ],
      "sections": [
        {
          "heading": "Node.js Event Loop & Non-Blocking I/O",
          "text": "Node.js uses a single-threaded event loop to handle concurrent asynchronous requests without spawning threads per connection, yielding high backend performance for I/O-intensive workloads."
        },
        {
          "heading": "Express.js Server Creation & Middleware",
          "text": "Express simplifies backend development. Middleware functions (`(req, res, next) => { ... }`) execute sequentially, transforming request objects or handling error logic before responses are sent."
        }
      ],
      "codeExamples": [
        {
          "title": "Basic Express.js HTTP Server",
          "code": "const express = require('express');\nconst app = express();\nconst PORT = process.env.PORT || 5000;\n\napp.use(express.json()); // Body parser middleware\n\napp.get('/api/health', (req, res) => {\n  res.status(200).json({ status: 'OK', message: 'Backend Server Operational' });\n});\n\napp.listen(PORT, () => console.log(`Server running on port ${PORT}`));",
          "explanation": "Initializes an Express server with JSON body parser and a health-check endpoint."
        }
      ],
      "bestPractices": [
        "Store secret API keys, database credentials, and ports inside `.env` environment files.",
        "Always parse incoming JSON request bodies using `app.use(express.json())`."
      ],
      "commonMistakes": [
        "Blocking the Node.js event loop with long-running synchronous CPU calculations."
      ],
      "practiceExercise": {
        "title": "Create Express Route",
        "problem": "Write an Express GET route '/api/info' returning JSON `{ version: '1.0.0' }`.",
        "solutionCode": "app.get('/api/info', (req, res) => res.json({ version: '1.0.0' }));"
      },
      "keyTakeaways": [
        "Node.js runs JavaScript server-side using the V8 engine.",
        "Express middleware processes requests sequentially."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "What is Node.js built upon?",
          "options": [
            "Google Chrome V8 JavaScript Engine",
            "Python Interpreter",
            "Java Virtual Machine",
            "WebAssembly Engine"
          ],
          "correctAnswer": 0,
          "explanation": "Node.js executes JavaScript server-side using Chrome's V8 engine."
        },
        {
          "id": 2,
          "question": "What is the primary function of Node.js Package Manager (npm)?",
          "options": [
            "Installing, managing, and sharing third-party JavaScript libraries and dependencies",
            "Compiling CSS into HTML",
            "Managing SQL database indexes",
            "Configuring DNS domains"
          ],
          "correctAnswer": 0,
          "explanation": "npm manages project packages and dependencies via package.json."
        },
        {
          "id": 3,
          "question": "Which Express middleware parses incoming requests with JSON payloads?",
          "options": [
            "app.use(express.json())",
            "app.use(express.parse())",
            "app.use(express.body())",
            "app.use(express.text())"
          ],
          "correctAnswer": 0,
          "explanation": "express.json() parses incoming JSON request bodies."
        },
        {
          "id": 4,
          "question": "How do you access environment variables loaded from a `.env` file in Node.js?",
          "options": [
            "process.env.VARIABLE_NAME",
            "window.env.VARIABLE_NAME",
            "global.VARIABLE_NAME",
            "env.get('VARIABLE_NAME')"
          ],
          "correctAnswer": 0,
          "explanation": "Environment variables are accessible on process.env in Node."
        },
        {
          "id": 5,
          "question": "What parameter in Express middleware functions passes control to the next middleware function in line?",
          "options": [
            "next()",
            "continue()",
            "proceed()",
            "forward()"
          ],
          "correctAnswer": 0,
          "explanation": "Calling next() passes request control to the next middleware."
        }
      ],
      "references": [
        {
          "title": "Express.js Official Guide",
          "url": "https://expressjs.com/"
        }
      ]
    }
  },
  {
    "id": "web-mod-13",
    "title": "Module 13 — REST APIs & Backend Application Development",
    "description": "Express routing, middleware, controllers, authentication basics, validation, error handling, REST API architecture.",
    "completed": true,
    "readingMaterial": {
      "introduction": "REST (Representational State Transfer) architecture structures backend web APIs using HTTP verbs (GET, POST, PUT, DELETE) and JSON payloads, using controller patterns and error-handling middleware.",
      "objectives": [
        "Design RESTful URL endpoint schemas following industry naming conventions",
        "Implement modular Express router controllers (`express.Router()`) and request validation",
        "Build centralized error-handling middleware to return consistent HTTP error responses"
      ],
      "sections": [
        {
          "heading": "RESTful URL Naming & HTTP Methods",
          "text": "REST APIs map CRUD operations to HTTP methods: `GET /api/products` (read list), `POST /api/products` (create), `PUT /api/products/:id` (update), and `DELETE /api/products/:id` (delete)."
        },
        {
          "heading": "Centralized Error Handling Middleware",
          "text": "Centralized error middleware `(err, req, res, next) => { ... }` intercepts all backend runtime exceptions, logging errors and returning standard JSON status codes."
        }
      ],
      "codeExamples": [
        {
          "title": "Modular Express Router Controller",
          "code": "const express = require('express');\nconst router = express.Router();\n\n// GET /api/users\nrouter.get('/', (req, res) => {\n  res.json([{ id: 1, name: 'Alice' }]);\n});\n\n// POST /api/users\nrouter.post('/', (req, res) => {\n  const { name } = req.body;\n  if (!name) return res.status(400).json({ error: 'Name is required' });\n  res.status(201).json({ id: Date.now(), name });\n});\n\nmodule.exports = router;",
          "explanation": "Defines modular Express routes for user resource endpoints."
        }
      ],
      "bestPractices": [
        "Use noun-based plural URLs (`/api/users`) rather than action verbs (`/api/getUsers`).",
        "Return appropriate HTTP status codes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)."
      ],
      "commonMistakes": [
        "Returning HTTP 200 OK status codes when returning error JSON payloads."
      ],
      "practiceExercise": {
        "title": "Build a DELETE Route",
        "problem": "Create an Express DELETE route `/api/items/:id` that responds with status 200 and `{ message: 'Item deleted' }`.",
        "solutionCode": "router.delete('/items/:id', (req, res) => res.status(200).json({ message: 'Item deleted' }));"
      },
      "keyTakeaways": [
        "REST APIs use standard HTTP verbs for CRUD operations.",
        "Express Routers keep backend routes organized and modular."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "Which HTTP method should be used to create a brand-new resource in a REST API?",
          "options": [
            "POST",
            "GET",
            "PUT",
            "DELETE"
          ],
          "correctAnswer": 0,
          "explanation": "POST requests create new resources in REST APIs."
        },
        {
          "id": 2,
          "question": "What HTTP status code signifies that a resource was successfully created?",
          "options": [
            "201 Created",
            "200 OK",
            "301 Moved",
            "400 Bad Request"
          ],
          "correctAnswer": 0,
          "explanation": "HTTP 201 Created indicates successful resource creation."
        },
        {
          "id": 3,
          "question": "How do you extract URL path parameters (e.g. `/api/users/:id`) in Express?",
          "options": [
            "req.params.id",
            "req.query.id",
            "req.body.id",
            "req.header.id"
          ],
          "correctAnswer": 0,
          "explanation": "req.params contains route parameters matched in path strings."
        },
        {
          "id": 4,
          "question": "Which HTTP method is idempotent and completely replaces an existing target resource?",
          "options": [
            "PUT",
            "POST",
            "PATCH",
            "CONNECT"
          ],
          "correctAnswer": 0,
          "explanation": "PUT replaces target resource representations completely."
        },
        {
          "id": 5,
          "question": "What feature in Express allows grouping route handlers into modular separate file files?",
          "options": [
            "express.Router()",
            "express.Cluster()",
            "express.Server()",
            "express.Module()"
          ],
          "correctAnswer": 0,
          "explanation": "express.Router() creates modular, mountable route handlers."
        }
      ],
      "references": [
        {
          "title": "RESTful API Design Best Practices",
          "url": "https://restfulapi.net/"
        }
      ]
    }
  },
  {
    "id": "web-mod-14",
    "title": "Module 14 — Databases & Data Management",
    "description": "SQL fundamentals, MySQL/PostgreSQL, tables, relationships, CRUD, joins, indexes, MongoDB and NoSQL concepts.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Databases persist application data. This module covers Relational SQL databases (PostgreSQL/MySQL schema tables, foreign key relationships, JOINs) and NoSQL Document databases (MongoDB, Mongoose ORM).",
      "objectives": [
        "Master SQL CRUD operations (SELECT, INSERT, UPDATE, DELETE) and JOIN operations",
        "Design relational database schemas with primary/foreign key relationships",
        "Work with NoSQL document stores (MongoDB) and Mongoose models in Node.js"
      ],
      "sections": [
        {
          "heading": "Relational SQL vs NoSQL Document Databases",
          "text": "SQL databases structure data in strict tables with relations and ACID transactions. NoSQL databases (MongoDB) store flexible JSON-like BSON documents."
        },
        {
          "heading": "SQL JOIN Operations",
          "text": "SQL `INNER JOIN` matches rows in both tables. `LEFT JOIN` returns all records from the left table and matched records from the right table."
        }
      ],
      "codeExamples": [
        {
          "title": "SQL JOIN Query & Mongoose Schema",
          "code": "-- SQL Inner Join Query\nSELECT users.name, orders.total_price\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;\n\n// Mongoose MongoDB Model\nconst mongoose = require('mongoose');\nconst ProductSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  price: { type: Number, required: true }\n});\nmodule.exports = mongoose.model('Product', ProductSchema);",
          "explanation": "Demonstrates SQL relational JOIN querying alongside Mongoose MongoDB document model definitions."
        }
      ],
      "bestPractices": [
        "Create database Indexes on frequently queried foreign key fields to speed up SELECT queries.",
        "Always sanitize database queries or use ORMs/parameterized queries to prevent SQL Injection attacks."
      ],
      "commonMistakes": [
        "Storing unhashed plain-text passwords inside user table columns."
      ],
      "practiceExercise": {
        "title": "Write a SQL SELECT Query",
        "problem": "Write a SQL query selecting name and email from users table where age is greater than 21.",
        "solutionCode": "SELECT name, email FROM users WHERE age > 21;"
      },
      "keyTakeaways": [
        "SQL databases use rigid tables and relationships; NoSQL stores flexible documents.",
        "JOIN queries combine data across relational tables."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "Which SQL clause filters records based on specified search criteria?",
          "options": [
            "WHERE",
            "GROUP BY",
            "ORDER BY",
            "SELECT"
          ],
          "correctAnswer": 0,
          "explanation": "WHERE filters rows matching conditions."
        },
        {
          "id": 2,
          "question": "What key uniquely identifies each record in a SQL table?",
          "options": [
            "Primary Key",
            "Foreign Key",
            "Index Key",
            "Unique Pointer"
          ],
          "correctAnswer": 0,
          "explanation": "A Primary Key uniquely identifies each row in a database table."
        },
        {
          "id": 3,
          "question": "Which SQL JOIN returns all rows from the left table and matched rows from the right table?",
          "options": [
            "LEFT JOIN",
            "INNER JOIN",
            "RIGHT JOIN",
            "FULL OUTER JOIN"
          ],
          "correctAnswer": 0,
          "explanation": "LEFT JOIN retains all left table rows regardless of right table matches."
        },
        {
          "id": 4,
          "question": "What format does MongoDB use to store data documents internally?",
          "options": [
            "BSON (Binary JSON)",
            "XML",
            "CSV",
            "Plain Text"
          ],
          "correctAnswer": 0,
          "explanation": "MongoDB stores document records in BSON format."
        },
        {
          "id": 5,
          "question": "What is Mongoose in Node.js development?",
          "options": [
            "An Object Data Modeling (ODM) library for MongoDB and Node.js",
            "A CSS styling framework",
            "An Express routing package",
            "A React state library"
          ],
          "correctAnswer": 0,
          "explanation": "Mongoose provides schema-based data modeling for MongoDB in Node."
        }
      ],
      "references": [
        {
          "title": "MongoDB Developer Documentation",
          "url": "https://www.mongodb.com/docs/"
        }
      ]
    }
  },
  {
    "id": "web-mod-15",
    "title": "Module 15 — Authentication, Security & Full-Stack Integration",
    "description": "Login/register, password hashing, JWT, sessions, authorization, CORS, validation, common web security practices.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Full-Stack Security protects applications against vulnerabilities (XSS, CSRF, SQL Injection). This module covers user authentication (bcrypt password hashing, JSON Web Tokens), authorization middleware, and CORS policies.",
      "objectives": [
        "Hash user passwords securely using `bcrypt` before database storage",
        "Implement stateless token authentication with JSON Web Tokens (JWT)",
        "Configure CORS (Cross-Origin Resource Sharing) and HTTP security headers"
      ],
      "sections": [
        {
          "heading": "Password Hashing with Bcrypt & Salt",
          "text": "Never store plain-text passwords. `bcrypt.hash(password, saltRounds)` applies a one-way cryptographic hash with salt, making rainbow-table attacks ineffective."
        },
        {
          "heading": "JWT (JSON Web Token) Authentication",
          "text": "JWTs provide stateless authentication. Upon login, the server signs a JWT payload returned to the client, which attaches the token (`Authorization: Bearer <token>`) to subsequent API requests."
        }
      ],
      "codeExamples": [
        {
          "title": "JWT Authentication Middleware in Express",
          "code": "const jwt = require('jsonwebtoken');\n\nfunction authenticateToken(req, res, next) {\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1];\n  if (!token) return res.sendStatus(401);\n\n  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {\n    if (err) return res.sendStatus(403);\n    req.user = user;\n    next();\n  });\n}",
          "explanation": "Verifies incoming JWT bearer tokens in request headers to protect API endpoints."
        }
      ],
      "bestPractices": [
        "Always hash passwords with `bcrypt` (minimum 10-12 salt rounds) before saving to databases.",
        "Store JWT secrets strictly in environment variables (`.env`)."
      ],
      "commonMistakes": [
        "Storing plain-text passwords or secret keys in GitHub source code."
      ],
      "practiceExercise": {
        "title": "Sign a JWT Token",
        "problem": "Sign a JWT payload `{ userId: 123 }` using secret 'mysecret' with a 1-hour expiration.",
        "solutionCode": "const token = jwt.sign({ userId: 123 }, 'mysecret', { expiresIn: '1h' });"
      },
      "keyTakeaways": [
        "Passwords must be hashed with salt prior to storage.",
        "JWT enables stateless full-stack API authentication."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "Which cryptographic hashing library is recommended for hashing user passwords in Node.js?",
          "options": [
            "bcrypt",
            "md5",
            "sha1",
            "base64"
          ],
          "correctAnswer": 0,
          "explanation": "bcrypt is specifically designed for password hashing with salted work factors."
        },
        {
          "id": 2,
          "question": "What three parts comprise a JSON Web Token (JWT)?",
          "options": [
            "Header, Payload, Signature",
            "Username, Password, Secret",
            "Client, Server, Database",
            "Key, Value, Expiry"
          ],
          "correctAnswer": 0,
          "explanation": "A JWT consists of Header, Payload, and Signature separated by dots."
        },
        {
          "id": 3,
          "question": "What HTTP header typically carries a JWT bearer token from client to server?",
          "options": [
            "Authorization",
            "Content-Type",
            "Accept-Token",
            "User-Agent"
          ],
          "correctAnswer": 0,
          "explanation": "The Authorization header carries 'Bearer <token>' credentials."
        },
        {
          "id": 4,
          "question": "What security policy prevents browser scripts on domain A from making unauthorized requests to domain B?",
          "options": [
            "CORS (Cross-Origin Resource Sharing)",
            "DOM Policy",
            "JWT Filter",
            "DNS Lookup"
          ],
          "correctAnswer": 0,
          "explanation": "CORS controls cross-origin HTTP access policies in web browsers."
        },
        {
          "id": 5,
          "question": "What HTTP response status code indicates an invalid or expired authentication token?",
          "options": [
            "401 Unauthorized / 403 Forbidden",
            "200 OK",
            "404 Not Found",
            "500 Internal Error"
          ],
          "correctAnswer": 0,
          "explanation": "HTTP 401/403 indicate unauthenticated or unauthorized access."
        }
      ],
      "references": [
        {
          "title": "JWT.io Introduction",
          "url": "https://jwt.io/introduction"
        }
      ]
    }
  },
  {
    "id": "web-mod-16",
    "title": "Module 16 — Full-Stack Web Development Project",
    "description": "React frontend + Node/Express backend + database + authentication + APIs + complete production-style application.",
    "completed": true,
    "readingMaterial": {
      "introduction": "Full-Stack Integration connects a React frontend with a Node/Express REST API backend and a database layer, establishing state synchronization, authentication persistence, and end-to-end CRUD features.",
      "objectives": [
        "Connect React frontend state (`fetch`/`axios`) to Express Node backend REST API endpoints",
        "Implement persistent client-side user sessions with JWT stored in HTTP-only cookies or state",
        "Build a complete production-grade full-stack web application"
      ],
      "sections": [
        {
          "heading": "Full-Stack Architecture & Data Flow",
          "text": "User actions in the React UI trigger HTTP fetch requests to Express API routes. Express validates input, interacts with the database (MongoDB/SQL), and returns JSON data to React to update state."
        },
        {
          "heading": "State Synchronization & Error Toast Notifications",
          "text": "Handling loading states, network errors, and optimistic state updates ensures a responsive user experience during async API operations."
        }
      ],
      "codeExamples": [
        {
          "title": "React Full-Stack API Integration Call",
          "code": "async function handleCreateProduct(productData, token) {\n  const res = await fetch('/api/products', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': `Bearer ${token}` \n    },\n    body: JSON.stringify(productData)\n  });\n  const data = await res.json();\n  return data;\n}",
          "explanation": "Sends an authenticated POST request from React frontend to Express backend API."
        }
      ],
      "bestPractices": [
        "Keep API endpoint URLs organized in a dedicated frontend `services/api.js` file.",
        "Always display loading spinners and user-friendly error messages during network calls."
      ],
      "commonMistakes": [
        "Hardcoding local development backend URLs (`http://localhost:5000`) directly in frontend components."
      ],
      "practiceExercise": {
        "title": "Handle API Error Response",
        "problem": "Check if response is not ok and throw an error message extracted from backend JSON.",
        "solutionCode": "if (!res.ok) { const err = await res.json(); throw new Error(err.message || 'API Request Failed'); }"
      },
      "keyTakeaways": [
        "React manages UI component state; Express manages business logic & data persistence.",
        "Clean full-stack applications decouple frontend views from backend services."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "What tech stack combines MongoDB, Express.js, React, and Node.js?",
          "options": [
            "MERN Stack",
            "LAMP Stack",
            "MEAN Stack",
            "Django Stack"
          ],
          "correctAnswer": 0,
          "explanation": "MERN stack stands for MongoDB, Express, React, and Node.js."
        },
        {
          "id": 2,
          "question": "Where should backend API base URLs be stored in frontend production builds?",
          "options": [
            "Environment variables (process.env.VITE_API_URL)",
            "Hardcoded in every component file",
            "In HTML alt tags",
            "In CSS stylesheets"
          ],
          "correctAnswer": 0,
          "explanation": "Environment variables allow switching API base URLs between local and production."
        },
        {
          "id": 3,
          "question": "What is an Optimistic UI Update in full-stack web applications?",
          "options": [
            "Updating the UI immediately assuming the API request will succeed, and rolling back if it fails",
            "Disabling all user clicks permanently",
            "Fetching data before the user clicks",
            "Reloading the entire page on every click"
          ],
          "correctAnswer": 0,
          "explanation": "Optimistic updates improve perceived performance by updating UI state immediately."
        },
        {
          "id": 4,
          "question": "What component pattern decouples API calls from React UI view components?",
          "options": [
            "Service / API Abstraction Layer",
            "CSS Grid Layer",
            "State Hoisting",
            "Bcrypt Hashing"
          ],
          "correctAnswer": 0,
          "explanation": "API service modules encapsulate HTTP fetch logic away from JSX component views."
        },
        {
          "id": 5,
          "question": "What HTTP method should a full-stack client send to update a specific record field?",
          "options": [
            "PATCH or PUT",
            "GET",
            "POST",
            "OPTION"
          ],
          "correctAnswer": 0,
          "explanation": "PATCH updates partial fields; PUT replaces the target resource."
        }
      ],
      "references": [
        {
          "title": "Full Stack Open Course Guide",
          "url": "https://fullstackopen.com/en/"
        }
      ]
    }
  },
  {
    "id": "web-mod-17",
    "title": "Module 17 — Deployment, DevOps Basics & Capstone Project",
    "description": "Production build, environment variables, hosting, domain, deployment, CI/CD basics, monitoring, optimization, final project.",
    "completed": true,
    "readingMaterial": {
      "introduction": "The Capstone Project culminates the Web Development course. It covers optimizing production bundles (`npm run build`), configuring hosting platforms (Vercel, Render, Netlify), setting up custom DNS domains, CI/CD, and monitoring.",
      "objectives": [
        "Optimize and bundle React frontend and Express backend for production deployment",
        "Deploy full-stack applications to cloud platforms (Vercel, Netlify, Render, Railway)",
        "Configure custom DNS domains, SSL certificates, environment variables, and basic CI/CD pipelines"
      ],
      "sections": [
        {
          "heading": "Production Build & Asset Optimization",
          "text": "Running `npm run build` transpiles, minifies, and bundles JavaScript, CSS, and HTML assets into compressed `dist/` files optimized for lightning-fast CDN delivery."
        },
        {
          "heading": "Cloud Deployment & Continuous Integration (CI/CD)",
          "text": "Hosting frontend apps on Vercel/Netlify and Node backends on Render/Railway with connected GitHub repositories enables automated CI/CD deployments on every git push."
        }
      ],
      "codeExamples": [
        {
          "title": "Vercel / Render Environment Variable & Build Script",
          "code": "// package.json build scripts\n{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"preview\": \"vite preview\",\n    \"start\": \"node server/index.js\"\n  }\n}",
          "explanation": "Standard npm production build and startup scripts configured for cloud deployment."
        }
      ],
      "bestPractices": [
        "Never check secrets or API keys into public repositories; configure environment variables on the cloud hosting dashboard.",
        "Test production build outputs locally (`npm run preview`) before deploying."
      ],
      "commonMistakes": [
        "Deploying development mode builds containing unminified code and source maps."
      ],
      "practiceExercise": {
        "title": "Test Local Production Preview",
        "problem": "Execute Vite build command and preview the production bundle locally.",
        "solutionCode": "npm run build && npm run preview"
      },
      "keyTakeaways": [
        "Production builds minify and bundle assets for fast loading.",
        "CI/CD pipelines deploy GitHub commits to production cloud servers automatically."
      ],
      "mcqs": [
        {
          "id": 1,
          "question": "What command creates a minified, production-optimized static asset build in Vite/React?",
          "options": [
            "npm run build",
            "npm start",
            "npm test",
            "npm init"
          ],
          "correctAnswer": 0,
          "explanation": "npm run build bundles and minifies assets for production deployment."
        },
        {
          "id": 2,
          "question": "Which cloud platform is specifically optimized for automated frontend deployment directly from GitHub?",
          "options": [
            "Vercel / Netlify",
            "MySQL Server",
            "Localhost",
            "Git Terminal"
          ],
          "correctAnswer": 0,
          "explanation": "Vercel and Netlify provide seamless, automated frontend deployment from GitHub."
        },
        {
          "id": 3,
          "question": "What does CI/CD stand for in modern software development workflows?",
          "options": [
            "Continuous Integration / Continuous Deployment",
            "Client Interface / Code Design",
            "Computer Infrastructure / Cloud Database",
            "Central Inspection / Custom Domain"
          ],
          "correctAnswer": 0,
          "explanation": "CI/CD stands for Continuous Integration and Continuous Deployment."
        },
        {
          "id": 4,
          "question": "Where should production database connection URIs be specified when deploying to cloud hosts like Render or Vercel?",
          "options": [
            "In the cloud host's Environment Variables dashboard settings",
            "Hardcoded inside index.html",
            "In a public GitHub commit",
            "In CSS variables"
          ],
          "correctAnswer": 0,
          "explanation": "Cloud host environment variable settings store production secrets securely."
        },
        {
          "id": 5,
          "question": "What tool checks code quality and formatting before committing code in production teams?",
          "options": [
            "ESLint & Prettier",
            "Docker Engine",
            "Bcrypt",
            "Postman"
          ],
          "correctAnswer": 0,
          "explanation": "ESLint and Prettier enforce code quality and formatting rules across team codebases."
        }
      ],
      "references": [
        {
          "title": "Vercel Deployment Guide",
          "url": "https://vercel.com/docs"
        }
      ]
    }
  }
],
    finalTest: {
      id: "web-final-test",
      title: "Full Stack Development Certification Exam",
      description: "Testing React components, hooks, Express API routes, and database modeling.",
      passingScore: 75,
      timeLimitMinutes: 45,
      maxAttempts: 2,
      published: true,
      questions: [
        {
          id: "webt1",
          type: "multiple-choice",
          questionText: "Which React hook is used to manage local component state?",
          options: ["useEffect", "useState", "useContext", "useRef"],
          correctAnswer: 1,
          marks: 20
        }
      ]
    },
    finalProject: {
      id: "web-final-project",
      title: "SaaS Learning Management Portal Platform",
      description: "Develop a full-stack MERN/PERN web application with user authentication, course management, video player, and admin dashboard.",
      requirements: ["React frontend with Tailwind", "Node/Express backend REST API", "Authentication with JWT", "Responsive UI"],
      instructions: "Deploy app to live host (Vercel/Netlify/Render) and submit GitHub repo link.",
      allowedFileTypes: [".zip", ".pdf"],
      maxFileSizeMb: 50,
      githubUrlAllowed: true,
      liveProjectUrlAllowed: true,
      passingScore: 80,
      published: true
    }
  },
  {
    id: "data-science-ai",
    title: "Data Science & AI Foundations",
    slug: "data-science-ai",
    category: "AI",
    level: "Intermediate to Advanced",
    duration: "50 hours",
    rating: 4.9,
    studentsCount: "9.8k",
    studentsNumeric: 9800,
    price: 1999,
    isFree: false,
    bestseller: false,
    progress: 0,
    status: "published",
    featured: false,
    certificateAvailable: true,
    sequentialLearning: true,
    iconBg: "bg-amber-50 border-2 border-amber-200 text-amber-600",
    iconType: "brain",
    introVideoUrl: "https://www.youtube.com/embed/aircAruvnKk",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Learn Python for Data Analysis, NumPy, Pandas, Matplotlib, Scikit-Learn, and Neural Networks.",
    description: "Learn Python for Data Analysis, NumPy, Pandas, Matplotlib, Scikit-Learn, and Neural Networks. Complete AI pipeline.",
    instructor: {
      name: "Dr. Ananya Sharma",
      role: "AI Research Scientist @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    prerequisites: "Python Programming fundamentals.",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Machine Learning"],
    whatYouWillLearn: [
      "Data Manipulation with NumPy & Pandas",
      "Exploratory Data Analysis (EDA) and Visualization",
      "Supervised Learning: Linear/Logistic Regression, Decision Trees, Random Forests",
      "Unsupervised Learning: K-Means Clustering and PCA",
      "Intro to Deep Learning with PyTorch/TensorFlow"
    ],
    modules: [
        {
                "id": "ds-mod-1",
                "title": "Module 01 — Introduction to AI and Data Science",
                "description": "Overview of Data Science pipeline, Machine Learning paradigms (Supervised, Unsupervised, Reinforcement), and AI industry applications.",
                "completed": true,
                "order": 1,
                "published": true,
                "readingMaterial": {
                        "introduction": "Artificial Intelligence (AI) and Data Science are two of the most important fields in modern technology. Organizations generate enormous amounts of data through websites, applications, sensors, transactions, social media, business operations, and connected devices. Data Science provides the methods required to collect, process, analyze, visualize, and interpret this information, while Artificial Intelligence enables computer systems to perform tasks that traditionally require human intelligence.",
                        "objectives": [
                                "Understand the meaning and importance of Artificial Intelligence and Data Science",
                                "Explain the relationship between AI, ML, Deep Learning, and Data Science",
                                "Describe the complete 9-step Data Science pipeline (Problem Definition to Monitoring)",
                                "Differentiate between structured, semi-structured, and unstructured data",
                                "Understand Supervised, Unsupervised, and Reinforcement Learning paradigms",
                                "Identify common machine learning tasks: classification, regression, clustering, and anomaly detection",
                                "Understand AI industry applications across Healthcare, Finance, Retail, Manufacturing, Transportation & GenAI",
                                "Recognize the importance of data quality, model evaluation, and responsible AI principles"
                        ],
                        "sections": [
                                {
                                        "heading": "3. What is Artificial Intelligence?",
                                        "text": "Artificial Intelligence is the field of computing concerned with building systems capable of performing tasks that normally require aspects of human intelligence, such as learning from information, recognizing patterns, understanding language, making predictions, and solving problems.",
                                        "bulletPoints": [
                                                "Learning from information & recognizing complex patterns",
                                                "Understanding human language (NLP) & image recognition (Computer Vision)",
                                                "Making predictions, solving optimization problems, and generating new content (Generative AI)",
                                                "Traditional rule-based IF-THEN logic vs Machine Learning pattern-based models"
                                        ]
                                },
                                {
                                        "heading": "4. What is Data Science?",
                                        "text": "Data Science is an interdisciplinary field that combines Statistics, Mathematics, Programming, Machine Learning, Data Engineering, Data Visualization, and Domain Knowledge to extract useful information and insights from data. The goal is to transform raw data into actionable business intelligence.",
                                        "bulletPoints": [
                                                "Combines quantitative statistics, computing algorithms, and domain expertise",
                                                "Converts raw unstructured/structured facts into strategic decision support",
                                                "Answers key questions: Which products sell best? Which customers churn? Where is demand rising?"
                                        ]
                                },
                                {
                                        "heading": "5. AI, Machine Learning, Deep Learning & Data Science Hierarchy",
                                        "text": "These terms are closely related but not identical. Artificial Intelligence is the broad umbrella of intelligent systems. Machine Learning is a subset of AI where systems learn patterns from data. Deep Learning is a subset of ML using multi-layer neural networks. Data Science overlaps all these fields by utilizing statistical and ML tools for data analysis."
                                },
                                {
                                        "heading": "6. Data Categorization: Structured, Unstructured & Semi-Structured",
                                        "text": "Data is a collection of facts, observations, or measurements. Data exists in 3 primary structural forms:",
                                        "bulletPoints": [
                                                "Structured Data: Organized in predefined rows and columns (e.g., SQL tables, CSV spreadsheets).",
                                                "Unstructured Data: No fixed tabular layout (e.g., Images, Videos, Audio recordings, Social media text).",
                                                "Semi-Structured Data: Contains organizational tags without rigid tables (e.g., JSON, XML, HTML)."
                                        ],
                                        "table": {
                                                "headers": [
                                                        "Data Type",
                                                        "Structure",
                                                        "Common Examples",
                                                        "Primary Storage"
                                                ],
                                                "rows": [
                                                        [
                                                                "Structured",
                                                                "Fixed Rows & Columns",
                                                                "Customer SQL Records, Transactions",
                                                                "RDBMS / PostgreSQL"
                                                        ],
                                                        [
                                                                "Semi-Structured",
                                                                "Key-Value / Tags",
                                                                "JSON payload, XML feeds, HTML",
                                                                "NoSQL / MongoDB"
                                                        ],
                                                        [
                                                                "Unstructured",
                                                                "No Rigid Schema",
                                                                "Images, Video files, PDF text",
                                                                "Data Lakes / Object Storage"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "7 - 16. The 9-Step Data Science Pipeline",
                                        "text": "A successful Data Science project follows an interconnected workflow:",
                                        "bulletPoints": [
                                                "Step 1 — Problem Definition: Define business problem, target metric, and ML formulation.",
                                                "Step 2 — Data Collection: Gather data from databases, APIs, web scraping, logs, or sensors.",
                                                "Step 3 — Data Cleaning: Fix missing values, duplicates, outliers, and invalid data types.",
                                                "Step 4 — Exploratory Data Analysis (EDA): Examine distributions, correlations, and visual trends.",
                                                "Step 5 — Feature Engineering: Transform raw variables into informative predictor inputs.",
                                                "Step 6 — Model Building: Select algorithms (Regression, Classification, Clustering) and fit models.",
                                                "Step 7 — Model Evaluation: Assess performance using train/validation/test splits and metrics.",
                                                "Step 8 — Deployment: Integrate trained model into web apps, REST APIs, or microservices.",
                                                "Step 9 — Monitoring & Maintenance: Track prediction drift over time and retrain as data changes."
                                        ]
                                },
                                {
                                        "heading": "17 - 25. Machine Learning Paradigms",
                                        "text": "Machine Learning is divided into three core learning paradigms:",
                                        "bulletPoints": [
                                                "Supervised Learning: Trained on labeled data (Input -> Known Target). Includes Classification (discrete labels like Spam/Ham) and Regression (continuous outputs like Price).",
                                                "Unsupervised Learning: Discovers patterns in unlabeled data. Includes Clustering (K-Means), Dimensionality Reduction (PCA), and Anomaly Detection.",
                                                "Reinforcement Learning: An Agent interacts with an Environment, taking Actions, observing States, and receiving Rewards to learn an optimal decision policy."
                                        ],
                                        "table": {
                                                "headers": [
                                                        "Paradigm",
                                                        "Training Data",
                                                        "Core Objective",
                                                        "Primary Examples"
                                                ],
                                                "rows": [
                                                        [
                                                                "Supervised",
                                                                "Labeled (X + y)",
                                                                "Predict target value",
                                                                "Spam Filter, House Prices"
                                                        ],
                                                        [
                                                                "Unsupervised",
                                                                "Unlabeled (X)",
                                                                "Discover inherent structure",
                                                                "Customer Segmentation, PCA"
                                                        ],
                                                        [
                                                                "Reinforcement",
                                                                "State & Rewards",
                                                                "Maximize long-term reward",
                                                                "Robotics, Game Playing AI"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "26 - 36. AI Industry Applications & Emerging Tech",
                                        "text": "AI and Data Science power real-world applications across major industries:",
                                        "bulletPoints": [
                                                "Healthcare: Medical image analysis, disease detection, patient risk prediction, drug discovery.",
                                                "Finance: Fraud detection, credit scoring, transaction monitoring, algorithmic trading.",
                                                "Retail & E-Commerce: Recommendation engines, demand forecasting, inventory optimization.",
                                                "Manufacturing & Logistics: Sensor predictive maintenance, supply chain route optimization.",
                                                "Natural Language Processing (NLP): Chatbots, translation, sentiment analysis, text summarization.",
                                                "Computer Vision: Object detection, facial recognition, autonomous vehicle perception.",
                                                "Generative AI & LLMs: Large Language Models (GPT, Gemini) generating text, code, audio, and images."
                                        ]
                                },
                                {
                                        "heading": "37 - 42. Data Quality & Responsible AI Principles",
                                        "text": "Models are heavily influenced by input data quality ('Better data -> better predictions'). Responsible AI requires embedding core ethical principles into development:",
                                        "bulletPoints": [
                                                "Fairness: Testing models to prevent unwanted bias across demographic groups.",
                                                "Transparency & Explainability: Understanding how model predictions are made.",
                                                "Privacy & Security: Protecting sensitive personal data and securing models against attacks.",
                                                "Reliability & Human Oversight: Testing under realistic conditions and incorporating human review for high-impact decisions."
                                        ]
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "1. Rule-Based Filtering vs Machine Learning Email Classification",
                                        "code": "import numpy as np\nfrom sklearn.feature_extraction.text import CountVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\n\n# Sample Email Corpus & Labels (1 = Spam, 0 = Not Spam)\nemails = [\n    \"Win free prize money now click link\",\n    \"Project team meeting scheduled tomorrow at 10am\",\n    \"Exclusive discount offer buy now\",\n    \"Attached is the monthly financial report\"\n]\nlabels = [1, 0, 1, 0]\n\n# Vectorize text features into numerical matrix\nvectorizer = CountVectorizer()\nX = vectorizer.fit_transform(emails)\n\n# Train Naive Bayes Classification Model\nmodel = MultinomialNB().fit(X, labels)\nprint(\"Model Training Complete! Accuracy:\", model.score(X, labels))",
                                        "explanation": "Demonstrates how raw text is converted into numerical matrices for statistical machine learning."
                                },
                                {
                                        "title": "2. Semi-Structured JSON Parsing into Structured Pandas DataFrame",
                                        "code": "import json\nimport pandas as pd\n\n# Semi-structured JSON customer activity logs\njson_data = '''[\n  {\"customer_id\": 101, \"name\": \"Rahul\", \"city\": \"Bengaluru\", \"spending\": 12500},\n  {\"customer_id\": 102, \"name\": \"Priya\", \"city\": \"Mumbai\", \"spending\": 34000}\n]'''\n\n# Parse semi-structured JSON and transform to tabular DataFrame\ndata = json.loads(json_data)\ndf = pd.DataFrame(data)\nprint(df)",
                                        "explanation": "Converts semi-structured JSON documents into structured columns and rows for data analysis."
                                }
                        ],
                        "practiceExercise": {
                                "title": "Classify Machine Learning Tasks",
                                "problem": "Identify whether each scenario uses Supervised, Unsupervised, or Reinforcement Learning:\n1. Predicting next month's sales revenue based on past 5 years of data.\n2. Grouping 10,000 credit card users into 4 distinct spending personas.\n3. Training a virtual chess agent to select moves by playing against itself.",
                                "solutionCode": "1. Sales Revenue Prediction -> Supervised Learning (Regression)\n2. User Persona Grouping -> Unsupervised Learning (Clustering)\n3. Virtual Chess Agent -> Reinforcement Learning (Agent & Reward Policy)"
                        },
                        "keyTakeaways": [
                                "Artificial Intelligence is the broad domain; Machine Learning and Deep Learning are specialized techniques.",
                                "Data Science transforms raw structured, semi-structured, and unstructured data into strategic decisions.",
                                "The 9-step pipeline guides data projects from problem formulation through modeling to production deployment.",
                                "Supervised (labeled target), Unsupervised (pattern discovery), and Reinforcement (rewards) form the 3 ML paradigms.",
                                "Responsible AI prioritizes Data Quality, Fairness, Privacy, Transparency, and Human Oversight."
                        ],
                        "references": [
                                {
                                        "title": "IBM Data Science & AI Foundations",
                                        "url": "https://www.ibm.com/topics/data-science"
                                },
                                {
                                        "title": "Scikit-Learn Machine Learning Guide",
                                        "url": "https://scikit-learn.org/stable/user_guide.html"
                                }
                        ]
                }
        },
        {
                "id": "ds-mod-2",
                "title": "Module 02 — Python for Data Science",
                "description": "Master essential Python data structures, list comprehensions, lambda functions, map/filter, control flow, and data handling libraries.",
                "completed": true,
                "order": 2,
                "published": true,
                "readingMaterial": {
                        "introduction": "Python is one of the most widely used programming languages in Data Science, Artificial Intelligence, Machine Learning, automation, and scientific computing. Its simple syntax, extensive ecosystem, and large collection of libraries (NumPy, Pandas) make Python particularly suitable for working with data, performing statistical analytics, and developing predictive machine learning pipelines.",
                        "objectives": [
                                "Understand Python syntax, indentation rules, comments, and dynamic typing",
                                "Work with built-in data types: int, float, bool, str, list, tuple, set, dict, NoneType",
                                "Master arithmetic, comparison, logical, assignment, and membership (in / not in) operators",
                                "Implement conditional control flow (if / elif / else) and loops (for, while, range, break, continue, pass)",
                                "Define reusable functions with positional, keyword, and default parameters",
                                "Apply functional programming tools: lambda functions, map(), filter(), and list/dictionary comprehensions",
                                "Perform string manipulation, exception handling (try / except / finally), and file I/O operations (TXT, CSV, JSON)",
                                "Understand the foundational role of NumPy and Pandas in the Data Science workflow"
                        ],
                        "sections": [
                                {
                                        "heading": "3. Why Python for Data Science?",
                                        "text": "Python provides a combination of simple syntax, extensive data libraries, strong community support, and rapid development capabilities. A typical Data Science workflow progresses seamlessly: Raw Data -> Python -> Pandas/NumPy -> Data Cleaning -> Analysis -> Visualization -> Machine Learning -> Prediction."
                                },
                                {
                                        "heading": "4 - 8. Python Syntax, Variables & Built-In Data Types",
                                        "text": "Python uses indentation (4 spaces) rather than curly braces {} to define code blocks. Variables act as dynamic references to values. Built-in data types include integers (whole numbers), floats (decimals), booleans (True/False), strings (text), lists, tuples, sets, dictionaries, and NoneType. Explicit type conversion functions include int(), float(), str(), bool(), list(), tuple(), and set()."
                                },
                                {
                                        "heading": "9 - 15. Operators, Conditionals & Loops",
                                        "text": "Operators perform arithmetic (+, -, *, /, //, %, **), comparison (==, !=, >, <, >=, <=), logical (and, or, not), and membership (in, not in) operations. Conditional statements (if, elif, else) and loops (for, while, range()) direct execution flow. Keywords break (terminates loop), continue (skips iteration), and pass (placeholder) control loop execution."
                                },
                                {
                                        "heading": "16 - 19. Python Data Structures (Lists, Tuples, Sets, Dictionaries)",
                                        "text": "Lists are ordered, mutable collections. Tuples are ordered, immutable collections. Sets store unique, unordered elements (ideal for deduplication and set operations like union/intersection). Dictionaries store key-value pairs (dict.keys(), dict.values(), dict.items(), dict.get()).",
                                        "table": {
                                                "headers": [
                                                        "Data Structure",
                                                        "Mutability",
                                                        "Ordering",
                                                        "Syntax Example",
                                                        "Primary Data Use Case"
                                                ],
                                                "rows": [
                                                        [
                                                                "List",
                                                                "Mutable",
                                                                "Ordered",
                                                                "[10, 20, 30]",
                                                                "Dynamic data collections"
                                                        ],
                                                        [
                                                                "Tuple",
                                                                "Immutable",
                                                                "Ordered",
                                                                "(10, 20)",
                                                                "Fixed coordinates & records"
                                                        ],
                                                        [
                                                                "Set",
                                                                "Mutable",
                                                                "Unordered",
                                                                "{1, 2, 3}",
                                                                "Unique filtering & membership"
                                                        ],
                                                        [
                                                                "Dictionary",
                                                                "Mutable",
                                                                "Key-Value Pairs",
                                                                "{'age': 24}",
                                                                "Structured record lookup"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "20 - 32. Functional Programming: Lambda, Map, Filter & Comprehensions",
                                        "text": "Python supports functional data transformation: Lambda expressions (anonymous single-line functions), map() (applies transform across iterable), filter() (selects items matching boolean criteria), and List/Dictionary Comprehensions ([x*2 for x in data if x > 10]) which offer concise, high-performance syntax."
                                },
                                {
                                        "heading": "34 - 38. Exception Handling, File I/O & Modules",
                                        "text": "Exception handling (try, except, else, finally) prevents program crashes during file or network errors. Context managers (with open('data.csv', 'r') as file) ensure proper file resource closure. Modules (import math, import csv, import json) expose standard library utilities."
                                },
                                {
                                        "heading": "39 - 53. NumPy, Pandas & Data Processing Patterns",
                                        "text": "NumPy provides vectorized N-dimensional arrays (ndarray) for linear algebra and high-speed numerical operations. Pandas provides DataFrames and Series for tabular data wrangling, indexing, filtering, and aggregation. Automation scripts combine file management (os.listdir()) and JSON API parsing with Pandas analytics."
                                },
                                {
                                        "heading": "54 - 58. Best Practices & Common Mistakes",
                                        "text": "Write readable code with explicit variable names, break complex code into functions, validate inputs, handle exceptions gracefully, and leverage vectorization in NumPy/Pandas rather than manual slow Python loops."
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "1. Functional Data Cleaning with List Comprehensions & String Methods",
                                        "code": "names = [\" rahul \", \"PRIYA\", \" Arun \", \"SNEHA \"]\nclean_names = [name.strip().title() for name in names]\nprint(\"Cleaned Names:\", clean_names)\n\nscores = [65, 85, 92, 78, 88, 55]\nhigh_scores = [s for s in scores if s >= 80]\nprint(\"High Scores (>=80):\", high_scores)",
                                        "explanation": "Trims whitespace, capitalizes names, and filters numerical scores using functional list comprehensions."
                                },
                                {
                                        "title": "2. Tabular Data Filtering & Aggregation with Pandas",
                                        "code": "import pandas as pd\n\n# Create student performance dataset\nstudents = [\n    {\"name\": \"Rahul\", \"score\": 85, \"city\": \"Bengaluru\"},\n    {\"name\": \"Priya\", \"score\": 92, \"city\": \"Mumbai\"},\n    {\"name\": \"Arun\", \"score\": 76, \"city\": \"Delhi\"},\n    {\"name\": \"Sneha\", \"score\": 88, \"city\": \"Bengaluru\"}\n]\n\n# Load into Pandas DataFrame\ndf = pd.DataFrame(students)\n\n# Filter students from Bengaluru with score >= 80\nbg_top = df[(df[\"city\"] == \"Bengaluru\") & (df[\"score\"] >= 80)]\nprint(bg_top)",
                                        "explanation": "Loads dictionary records into Pandas DataFrame and executes multi-condition boolean filtering."
                                }
                        ],
                        "practiceExercise": {
                                "title": "Mini Project: Student Performance Analyzer",
                                "problem": "Write a Python script that takes a list of student records: [{'name': 'Rahul', 'score': 85}, {'name': 'Priya', 'score': 92}, {'name': 'Arun', 'score': 76}], computes the average score using list comprehension and sum()/len(), and assigns grades ('A+' for >=90, 'A' for >=80, 'B' for >=70).",
                                "solutionCode": "students = [{'name': 'Rahul', 'score': 85}, {'name': 'Priya', 'score': 92}, {'name': 'Arun', 'score': 76}]\nscores = [s['score'] for s in students]\navg_score = sum(scores) / len(scores)\nprint(f\"Average Score: {avg_score:.2f}\")\nfor s in students:\n    g = 'A+' if s['score']>=90 else ('A' if s['score']>=80 else 'B')\n    print(f\"{s['name']}: Grade {g}\")"
                        },
                        "keyTakeaways": [
                                "Python's simple syntax and massive library ecosystem (NumPy, Pandas) make it the primary language for Data Science.",
                                "Mastering built-in data structures (Lists, Tuples, Sets, Dictionaries) is essential for handling raw data payloads.",
                                "List comprehensions, lambda expressions, map(), and filter() provide concise and efficient functional data processing.",
                                "File I/O (CSV, JSON) and exception handling (try-except) ensure robust data ingestion pipelines.",
                                "NumPy arrays and Pandas DataFrames form the analytical foundation for Machine Learning and AI workflows."
                        ],
                        "references": [
                                {
                                        "title": "Official Python 3 Documentation",
                                        "url": "https://docs.python.org/3/tutorial/"
                                },
                                {
                                        "title": "Pandas User Guide & Data Structures",
                                        "url": "https://pandas.pydata.org/docs/user_guide/index.html"
                                }
                        ]
                }
        },
        {
                "id": "ds-mod-3",
                "title": "Module 03 — NumPy for Vectorized Computing",
                "description": "Multi-dimensional array operations, broadcasting, indexing, slicing, linear algebra methods, and high-performance numerical computation.",
                "completed": true,
                "order": 3,
                "published": true,
                "readingMaterial": {
                        "introduction": "NumPy, short for Numerical Python, is one of the fundamental libraries in the Python Data Science ecosystem. It provides efficient multidimensional arrays (ndarray) and a large collection of mathematical, statistical, and linear algebra operations. While standard Python lists process elements sequentially, NumPy processes large numerical collections using vectorized operations in compiled C memory, serving as the computational backbone for Pandas, Scikit-Learn, and Deep Learning frameworks.",
                        "objectives": [
                                "Understand the purpose of NumPy and the architectural differences between Python lists and NumPy ndarrays",
                                "Create 1D, 2D, and 3D arrays using array(), zeros(), ones(), full(), arange(), linspace(), and eye()",
                                "Inspect array attributes: shape, ndim, size, and data type (dtype / astype)",
                                "Master array indexing, 2D grid slicing, boolean masking (filtering), and value modification",
                                "Apply vectorized element-wise arithmetic, scalar operations, and broadcasting rules across mismatched dimensions",
                                "Execute matrix operations: transposition (.T), dot product (np.dot), matrix multiplication (@), determinant, inverse, and linear equations (np.linalg.solve)",
                                "Perform axis-based aggregation (sum, mean, std, var, min, max, argmin, argmax) along axis=0 and axis=1",
                                "Handle missing data (NaN / np.isnan / np.nanmean) and differentiate between array views and independent copies (.copy())"
                        ],
                        "sections": [
                                {
                                        "heading": "3 - 6. What is NumPy & Why Vectorization Matters",
                                        "text": "NumPy introduces the N-dimensional array object (ndarray). Unlike Python lists that store pointers to objects, NumPy arrays store data in contiguous memory blocks. This enables vectorization — executing math operations across entire arrays without explicit Python loops.",
                                        "bulletPoints": [
                                                "Contiguous Memory Allocation: Fast C-level execution avoiding Python object overhead.",
                                                "Vectorized Math: Expression like 'arr * 2' doubles all elements simultaneously.",
                                                "Core Data Science Foundation: Underpins Pandas DataFrames, Scikit-Learn features, and PyTorch tensors."
                                        ]
                                },
                                {
                                        "heading": "7 - 13. Array Creation & Structural Attributes",
                                        "text": "NumPy supports 0D scalars, 1D vectors, 2D matrices, and 3D+ tensors. Key attributes include .shape (dimensions), .ndim (number of axes), .size (total elements), and .dtype.",
                                        "bulletPoints": [
                                                "np.zeros((rows, cols)) / np.ones((rows, cols)): Creates arrays populated with 0.0 or 1.0.",
                                                "np.arange(start, stop, step): Generates sequence of numbers over a step interval.",
                                                "np.linspace(start, stop, num): Generates 'num' evenly spaced values over a range.",
                                                "np.eye(N): Generates an N x N Identity Matrix with ones on the main diagonal."
                                        ],
                                        "table": {
                                                "headers": [
                                                        "Creation Function",
                                                        "Syntax Example",
                                                        "Output Shape",
                                                        "Common Data Use Case"
                                                ],
                                                "rows": [
                                                        [
                                                                "np.array()",
                                                                "np.array([1, 2, 3])",
                                                                "(3,)",
                                                                "Convert Python list to ndarray"
                                                        ],
                                                        [
                                                                "np.zeros()",
                                                                "np.zeros((3, 4))",
                                                                "(3, 4)",
                                                                "Initialize weights or canvas grid"
                                                        ],
                                                        [
                                                                "np.arange()",
                                                                "np.arange(0, 10, 2)",
                                                                "(5,)",
                                                                "Generate stepped iteration indexes"
                                                        ],
                                                        [
                                                                "np.linspace()",
                                                                "np.linspace(0, 1, 5)",
                                                                "(5,)",
                                                                "Generate continuous plot samples"
                                                        ],
                                                        [
                                                                "np.eye()",
                                                                "np.eye(3)",
                                                                "(3, 3)",
                                                                "Linear algebra identity matrix"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "14 - 21. Indexing, 2D Slicing & Boolean Indexing",
                                        "text": "Array elements are accessed via zero-based indexing (arr[row, col]). Slicing extracts sub-regions (arr[0:2, 1:3]). Boolean indexing (arr[arr > 25]) filters array values directly based on conditional criteria."
                                },
                                {
                                        "heading": "22 - 26. Vectorization & Broadcasting Rules",
                                        "text": "Broadcasting permits arithmetic between arrays of different shapes without copying data. Two dimensions are compatible when they are equal, or one of them is 1. Dimensions align from the trailing axis backwards."
                                },
                                {
                                        "heading": "27 - 32. Reshaping, Transposition & Array Stacking",
                                        "text": "Arrays are reshaped using arr.reshape(rows, cols) provided total size remains constant. Transposition (arr.T) swaps rows and columns. Arrays can be concatenated or stacked vertically (np.vstack) and horizontally (np.hstack)."
                                },
                                {
                                        "heading": "33 - 39. Mathematical Functions, Aggregation & Axis Operations",
                                        "text": "NumPy provides fast math (np.sqrt, np.exp, np.log) and statistical aggregations (np.sum, np.mean, np.median, np.std, np.var). Aggregation across axis=0 operates down columns, while axis=1 operates across rows. np.argmin() and np.argmax() return the index positions of minimum/maximum values."
                                },
                                {
                                        "heading": "40 - 46. Linear Algebra & System Solving (np.linalg)",
                                        "text": "The np.linalg module provides linear algebra routines: Matrix multiplication (@ or np.dot), Determinant (np.linalg.det), Matrix Inverse (np.linalg.inv), Euclidean Vector Norm (np.linalg.norm), and linear equation solving (np.linalg.solve(A, b))."
                                },
                                {
                                        "heading": "47 - 58. Missing Values (NaN), Views vs Copies & Ecosystem Role",
                                        "text": "Missing data is represented as np.nan, handled via nan-safe functions (np.nanmean, np.nanmedian). Slicing creates a view (modifying it changes original array); use .copy() for independent arrays. NumPy connects raw numerical data to Pandas DataFrames and Machine Learning feature matrices."
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "1. Vectorized Broadcasting & Data Feature Normalization",
                                        "code": "import numpy as np\n\n# Sample feature matrix: 3 samples, 3 features (e.g. Age, Income, Score)\ndata = np.array([\n    [25, 50000, 75],\n    [30, 60000, 85],\n    [35, 75000, 95]\n])\n\n# Calculate mean per feature column (axis=0)\nmeans = np.mean(data, axis=0)\nstd_devs = np.std(data, axis=0)\n\n# Vectorized Z-Score Normalization via Broadcasting: (X - mu) / sigma\nnormalized_data = (data - means) / std_devs\nprint(\"Column Means:\", means)\nprint(\"Z-Score Normalized Matrix:\\n\", np.round(normalized_data, 2))",
                                        "explanation": "Demonstrates column-wise aggregation (axis=0) and vectorized broadcasting for data normalization."
                                },
                                {
                                        "title": "2. Linear Algebra System Solver (np.linalg.solve)",
                                        "code": "import numpy as np\n\n# Solve system of linear equations:\n# 2x + 1y = 5\n# 1x + 3y = 6\nA = np.array([[2, 1], [1, 3]])\nb = np.array([5, 6])\n\n# Solve for x and y\nsolution = np.linalg.solve(A, b)\nprint(\"Solution Vector [x, y]:\", solution)\n\n# Verify via matrix multiplication (A @ x)\nverification = A @ solution\nprint(\"Verification (A @ solution):\", verification)",
                                        "explanation": "Solves linear equation system Ax = b using NumPy's high-performance linalg solver."
                                }
                        ],
                        "practiceExercise": {
                                "title": "Student Marks Matrix & Axis Analysis",
                                "problem": "Create a 4x3 NumPy matrix representing 4 students across 3 subjects:\nmarks = np.array([[85, 90, 78], [72, 88, 91], [90, 95, 89], [65, 70, 75]])\nCalculate: 1. Average mark for each student (row-wise), 2. Average mark for each subject (column-wise), 3. The overall highest mark.",
                                "solutionCode": "import numpy as np\nmarks = np.array([[85, 90, 78], [72, 88, 91], [90, 95, 89], [65, 70, 75]])\nstudent_avg = np.mean(marks, axis=1)\nsubject_avg = np.mean(marks, axis=0)\nhighest_mark = np.max(marks)\nprint(\"Student Averages (axis=1):\", student_avg)\nprint(\"Subject Averages (axis=0):\", subject_avg)\nprint(\"Overall Highest Mark:\", highest_mark)"
                        },
                        "keyTakeaways": [
                                "NumPy ndarrays store numbers in contiguous memory for high-speed vectorized C computation.",
                                "Array creation functions (arange, linspace, zeros, ones, eye) generate structured numerical grids easily.",
                                "Broadcasting enables seamless arithmetic across arrays of compatible shapes without memory duplication.",
                                "Understanding axis=0 (down columns) and axis=1 (across rows) is essential for multidimensional statistical operations.",
                                "Linear algebra routines (np.linalg.solve, @ dot product, inv, det) power machine learning model math."
                        ],
                        "references": [
                                {
                                        "title": "NumPy Official Documentation & Quickstart",
                                        "url": "https://numpy.org/doc/stable/user/quickstart.html"
                                },
                                {
                                        "title": "NumPy Array Programming Guide",
                                        "url": "https://numpy.org/doc/stable/user/basics.html"
                                }
                        ]
                }
        },
        {
                "id": "ds-mod-4",
                "title": "Module 04 — Pandas DataFrames and Series",
                "description": "Core Pandas data structures, importing CSV/JSON/Excel files, indexing, selecting, filtering, grouping, and aggregation.",
                "completed": true,
                "order": 4,
                "published": true,
                "readingMaterial": {
                        "introduction": "Pandas is one of the most important Python libraries for data manipulation, data analysis, and tabular data processing. It provides powerful data structures—Series (one-dimensional labeled data) and DataFrames (two-dimensional labeled tabular data)—and high-level functions that streamline data importing, inspecting, indexing, selecting, filtering, grouping, aggregating, and exporting across data science workflows.",
                        "objectives": [
                                "Understand Series (1D) and DataFrame (2D) core Pandas architectures",
                                "Import and export datasets across CSV (read_csv), JSON (read_json), and Excel (read_excel) file formats",
                                "Inspect datasets using head(), tail(), info(), describe(), .shape, and .dtypes",
                                "Perform label-based (loc[]) and position-based (iloc[]) row and column selections",
                                "Filter data using single and multiple conditions (& / | / isin / query())",
                                "Add, modify, rename, and drop columns and reset DataFrame indexes",
                                "Detect and handle missing values (isna(), dropna(), fillna()) and remove duplicates (drop_duplicates())",
                                "Execute multi-dimensional grouping with groupby(), apply aggregation metrics (.agg()), and perform merges/concatenations"
                        ],
                        "sections": [
                                {
                                        "heading": "3 - 9. What is Pandas & Series Data Structure",
                                        "text": "Pandas (import pandas as pd) is built on top of Python's numerical ecosystem to handle structured tabular data. A Series is a 1D labeled array supporting index-based access, element-wise arithmetic, and statistical methods (.mean(), .median(), .std()).",
                                        "bulletPoints": [
                                                "Series Architecture: 1D array with explicit data labels (index) and typed values.",
                                                "Element-Wise Operations: Arithmetic like 'series * 2' applies across all elements.",
                                                "Statistical Methods: Built-in mean(), median(), min(), max(), and std() functions."
                                        ]
                                },
                                {
                                        "heading": "10 - 17. DataFrame Structure & Dataset Inspection",
                                        "text": "A DataFrame is a 2D labeled table composed of Rows (records), Columns (variables), and Indexes. First-step inspection methods include df.head(n), df.tail(n), df.info() (memory, dtypes, null counts), and df.describe() (statistical distribution).",
                                        "table": {
                                                "headers": [
                                                        "Inspection Method",
                                                        "Output Summary",
                                                        "Primary Data Use Case"
                                                ],
                                                "rows": [
                                                        [
                                                                "df.head(n)",
                                                                "First n rows of DataFrame",
                                                                "Quick visual structure check"
                                                        ],
                                                        [
                                                                "df.info()",
                                                                "Dtypes, memory, null counts",
                                                                "Identify column types & missing values"
                                                        ],
                                                        [
                                                                "df.describe()",
                                                                "Mean, std, min, max, percentiles",
                                                                "Numerical statistical distribution"
                                                        ],
                                                        [
                                                                "df.shape",
                                                                "(Rows, Columns) tuple",
                                                                "Dataset dimensions verification"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "18 - 23. File I/O Tools: CSV, JSON & Excel Data Sources",
                                        "text": "Pandas supports file I/O: pd.read_csv() (with sep, usecols, parse_dates), pd.read_json(), and pd.read_excel() (with sheet_name). Processed data can be saved via df.to_csv('out.csv', index=False), df.to_json(), or df.to_excel().",
                                        "table": {
                                                "headers": [
                                                        "Data Format",
                                                        "Import Function",
                                                        "Export Function",
                                                        "Common Use Case"
                                                ],
                                                "rows": [
                                                        [
                                                                "CSV",
                                                                "pd.read_csv('file.csv')",
                                                                "df.to_csv('out.csv')",
                                                                "Tabular log & database exports"
                                                        ],
                                                        [
                                                                "JSON",
                                                                "pd.read_json('file.json')",
                                                                "df.to_json('out.json')",
                                                                "Web API data payloads"
                                                        ],
                                                        [
                                                                "Excel",
                                                                "pd.read_excel('file.xlsx')",
                                                                "df.to_excel('out.xlsx')",
                                                                "Business spreadsheet reports"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "24 - 27. Row & Column Selection: loc[] vs iloc[]",
                                        "text": "Selecting a single column df['Name'] returns a Series; selecting multiple columns df[['Name', 'Score']] returns a DataFrame. df.loc[] performs label-based selection, while df.iloc[] performs position-based index selection."
                                },
                                {
                                        "heading": "28 - 33. Multi-Condition Filtering & Data Sorting",
                                        "text": "Filter rows using boolean conditions with parentheses: df[(df['Age'] > 20) & (df['Score'] > 80)]. Use df['City'].isin([...]) for multi-value matching, df.query() for string-based queries, and df.sort_values(by, ascending=False) for sorting."
                                },
                                {
                                        "heading": "34 - 38. Column Transformations & Index Management",
                                        "text": "Create calculated columns (df['Total'] = df['Price'] * df['Qty']), rename columns (df.rename(columns={...})), drop columns (df.drop(columns=[...])), and reset DataFrame indexes (df.reset_index(drop=True))."
                                },
                                {
                                        "heading": "39 - 47. Data Cleaning: Missing Values, Duplicates & Datetime",
                                        "text": "Detect missing data with df.isna().sum(). Handle nulls via df.dropna() or df.fillna(df['col'].mean()). Remove duplicates via df.drop_duplicates(). Convert dates using pd.to_datetime() and extract .dt.year, .dt.month, .dt.day. Apply custom functions using df['col'].apply(fn)."
                                },
                                {
                                        "heading": "48 - 58. GroupBy, Aggregations, Merging & Pivot Tables",
                                        "text": "Group data using df.groupby('Dept')['Salary'].agg(['mean', 'min', 'max']). Use transform() to broadcast group statistics back to original rows. Merge datasets via pd.merge(customers, orders, on='id', how='left') and build multi-dimensional summaries using pd.pivot_table() and pd.crosstab()."
                                },
                                {
                                        "heading": "59 - 80. Analytics Workflow & Machine Learning Preparation",
                                        "text": "Pandas acts as the bridge connecting raw messy files to Machine Learning models by separating predictor feature matrices (X = df[['Age', 'Income']]) and target labels (y = df['Target'])."
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "1. Complete Data Cleaning & Missing Value Processing",
                                        "code": "import pandas as pd\nimport numpy as np\n\n# Raw messy dataset with nulls and duplicates\nraw_data = {\n    \"Customer\": [\"Alice\", \"Bob\", \"Charlie\", \"Alice\", \"David\"],\n    \"Age\": [22, np.nan, 24, 22, 29],\n    \"Score\": [85, 90, np.nan, 85, 78]\n}\ndf = pd.DataFrame(raw_data)\n\n# 1. Remove duplicate records\ndf = df.drop_duplicates()\n\n# 2. Impute missing numerical values with column medians\ndf[\"Age\"] = df[\"Age\"].fillna(df[\"Age\"].median())\ndf[\"Score\"] = df[\"Score\"].fillna(df[\"Score\"].mean())\nprint(\"Cleaned DataFrame:\\n\", df)",
                                        "explanation": "Demonstrates deduplication and statistical null value imputation across DataFrame columns."
                                },
                                {
                                        "title": "2. Multi-Group Data Aggregation & Pivot Table Analysis",
                                        "code": "import pandas as pd\n\n# Retail sales dataset\nsales_data = {\n    \"Category\": [\"Grocery\", \"Grocery\", \"Natural\", \"Grocery\", \"Natural\"],\n    \"City\": [\"Bengaluru\", \"Mumbai\", \"Bengaluru\", \"Mumbai\", \"Bengaluru\"],\n    \"Sales\": [800, 1500, 750, 1050, 950]\n}\ndf = pd.DataFrame(sales_data)\n\n# GroupBy multi-aggregation\nsummary = df.groupby([\"Category\", \"City\"])[\"Sales\"].agg([\"sum\", \"mean\", \"count\"])\nprint(\"GroupBy Summary:\\n\", summary)\n\n# Pivot Table creation\npivot = pd.pivot_table(df, values=\"Sales\", index=\"Category\", columns=\"City\", aggfunc=\"sum\", fill_value=0)\nprint(\"\\nPivot Table:\\n\", pivot)",
                                        "explanation": "Groups sales data by multiple categorical dimensions and calculates a cross-tabulated pivot table."
                                }
                        ],
                        "practiceExercise": {
                                "title": "Student Performance & Grade Analyzer",
                                "problem": "Given a DataFrame: df = pd.DataFrame({'Name': ['Alice', 'Bob', 'Charlie', 'David'], 'Math': [85, 72, 90, 65], 'Science': [88, 75, 92, 70]}), calculate an 'Average' column across Math & Science, filter students with Average > 80, and export result to a CSV format.",
                                "solutionCode": "import pandas as pd\ndf = pd.DataFrame({'Name': ['Alice', 'Bob', 'Charlie', 'David'], 'Math': [85, 72, 90, 65], 'Science': [88, 75, 92, 70]})\ndf['Average'] = df[['Math', 'Science']].mean(axis=1)\nhigh_performers = df[df['Average'] > 80]\nprint(\"High Performers:\\n\", high_performers)\n# high_performers.to_csv('high_performers.csv', index=False)"
                        },
                        "keyTakeaways": [
                                "Series (1D) and DataFrames (2D) are the core Pandas data structures for tabular data manipulation.",
                                "File I/O functions (read_csv, read_json, read_excel, to_csv) enable seamless ingestion and export.",
                                "Use loc[] for label-based selection and iloc[] for integer position selection.",
                                "Data cleaning tools (isna(), fillna(), dropna(), drop_duplicates()) ensure data quality before modeling.",
                                "GroupBy (.groupby()), multi-aggregations (.agg()), and Pivot Tables provide fast business intelligence summaries."
                        ],
                        "references": [
                                {
                                        "title": "Official Pandas Documentation",
                                        "url": "https://pandas.pydata.org/docs/user_guide/index.html"
                                },
                                {
                                        "title": "Pandas 10-Minute Quickstart Guide",
                                        "url": "https://pandas.pydata.org/docs/user_guide/10min.html"
                                }
                        ]
                }
        },
        {
                "id": "ds-mod-5",
                "title": "Module 05 — Data Cleaning and Preprocessing",
                "description": "Handling missing values, duplicated records, outlier detection, data transformations, string operations, and data type casting.",
                "completed": false,
                "order": 5,
                "published": true,
                "readingMaterial": {
                        "introduction": "Data Cleaning and Preprocessing is one of the most critical stages in a Data Science and Machine Learning workflow. Real-world raw datasets are messy, incomplete, and noisy. They contain missing values, duplicate records, incorrect data types, extreme outliers, and inconsistent categorical strings. Preprocessing transforms raw unrefined data into high-quality, analysis-ready datasets for statistical modeling and predictive machine learning algorithms.",
                        "objectives": [
                                "Understand the essential role of data preprocessing in Machine Learning and analytical reliability",
                                "Detect and handle missing values (isna(), dropna(), mean/median/mode imputation, ffill, bfill)",
                                "Identify and eliminate duplicate records (duplicated(), drop_duplicates(subset=[...]))",
                                "Detect outliers using Interquartile Range (IQR = Q3 - Q1) and Z-score (Z = (x - mu) / sigma) methods",
                                "Perform safe data type conversion (astype(), pd.to_numeric(), pd.to_datetime())",
                                "Standardize inconsistent text (str.strip(), str.lower(), str.title(), str.replace(), str.contains())",
                                "Apply numerical transformations (log1p), Min-Max Normalization [0, 1], and Standard Scaler (Z-Score)",
                                "Prevent Data Leakage by fitting preprocessing pipelines (Scikit-Learn Pipeline & SimpleImputer) on training data only"
                        ],
                        "sections": [
                                {
                                        "heading": "3 - 6. Why Data Cleaning Matters & Quality Inspection",
                                        "text": "Garbage in, garbage out: poor quality data produces flawed statistical models and unreliable predictions. Initial data inspection involves df.shape, df.columns, df.dtypes, df.info(), and df.describe() to pinpoint missing values, wrong data types, and anomalies.",
                                        "table": {
                                                "headers": [
                                                        "Data Quality Problem",
                                                        "Example Scenario",
                                                        "Primary Remediation Strategy"
                                                ],
                                                "rows": [
                                                        [
                                                                "Missing Values",
                                                                "Age = NaN / Null",
                                                                "Mean/Median Imputation or dropna()"
                                                        ],
                                                        [
                                                                "Duplicate Records",
                                                                "Same customer record twice",
                                                                "df.drop_duplicates(subset=['ID'])"
                                                        ],
                                                        [
                                                                "Invalid Values",
                                                                "Age = -10 or Quantity = -5",
                                                                "Domain validation filter or pd.NA"
                                                        ],
                                                        [
                                                                "Outliers",
                                                                "Salary = 50,000,000 in general staff",
                                                                "IQR bounds or Z-Score capping"
                                                        ],
                                                        [
                                                                "Inconsistent Strings",
                                                                "'Bengaluru' vs 'bangalore'",
                                                                "str.strip().str.title() & mapping"
                                                        ],
                                                        [
                                                                "Wrong Data Types",
                                                                "'25' stored as string object",
                                                                "pd.to_numeric(errors='coerce')"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "7 - 14. Missing Value Detection & Imputation Strategies",
                                        "text": "Detect missing data with df.isna().sum() and percentage df.isna().mean() * 100. Drop missing values via df.dropna() or impute numerical values using column mean/median (df['Age'].fillna(df['Age'].median())). Categorical missing values use mode or 'Unknown'. Time-series data uses forward fill (ffill) or backward fill (bfill)."
                                },
                                {
                                        "heading": "15 - 18. Duplicate Records & Logical Data Validation",
                                        "text": "Identify duplicates via df.duplicated().sum() and eliminate them using df.drop_duplicates(subset=['ID']). Validate business logic (e.g. df[(df['Age'] < 0) | (df['Age'] > 120)]) to catch impossible data entries."
                                },
                                {
                                        "heading": "19 - 24. Outlier Detection: IQR & Z-Score Methods",
                                        "text": "An outlier is an observation unusually distant from other values. The IQR method calculates IQR = Q3 - Q1, defining lower bound Q1 - 1.5*IQR and upper bound Q3 + 1.5*IQR. The Z-Score method calculates Z = (x - mu) / sigma, flagging values with |Z| > 3. Strategies include keeping, log-transforming, capping (winsorizing), or dropping.",
                                        "table": {
                                                "headers": [
                                                        "Detection Method",
                                                        "Mathematical Formula",
                                                        "Optimal Dataset Distribution"
                                                ],
                                                "rows": [
                                                        [
                                                                "IQR Method",
                                                                "Q1 - 1.5*IQR to Q3 + 1.5*IQR",
                                                                "Robust against skewed distributions & extreme values"
                                                        ],
                                                        [
                                                                "Z-Score Method",
                                                                "Z = (x - mu) / sigma (|Z| > 3)",
                                                                "Approximately normally distributed Gaussian data"
                                                        ],
                                                        [
                                                                "Domain Bounds",
                                                                "Known business constraints (e.g. Age > 0)",
                                                                "Fixed physical/logical rules"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "25 - 29. Data Type Casting & Datetime Conversion",
                                        "text": "Inspect dtypes via df.dtypes. Cast valid numbers using df['Col'].astype(int/float) or use pd.to_numeric(df['Col'], errors='coerce') to set invalid entries to NaN. Parse dates with pd.to_datetime(df['Date'], errors='coerce') and extract .dt.year, .dt.month, .dt.day."
                                },
                                {
                                        "heading": "30 - 36. String Normalization & Categorical Cleaning",
                                        "text": "Clean inconsistent text using pandas string accessors: .str.strip() (removes extra spaces), .str.title() / .str.lower(), .str.replace('old', 'new'), and .str.contains('pattern', na=False). Map synonyms using dict replacement (df['City'].replace({'Bangalore': 'Bengaluru'}))."
                                },
                                {
                                        "heading": "37 - 41. Feature Scaling: Normalization vs Standardization",
                                        "text": "Log transformation (np.log1p(x)) reduces right skewness. Min-Max Normalization scales values to [0, 1] using x' = (x - xmin)/(xmax - xmin). Standardization scales values to Mean=0 and StdDev=1 using Z = (x - mu)/sigma (StandardScaler).",
                                        "table": {
                                                "headers": [
                                                        "Scaling Method",
                                                        "Formula",
                                                        "Output Range",
                                                        "Machine Learning Relevance"
                                                ],
                                                "rows": [
                                                        [
                                                                "Min-Max Normalization",
                                                                "(x - xmin) / (xmax - xmin)",
                                                                "[0, 1]",
                                                                "Algorithms bounded by scale (KNN, Neural Networks)"
                                                        ],
                                                        [
                                                                "Standardization (Z-Score)",
                                                                "(x - mu) / sigma",
                                                                "Mean=0, StdDev=1",
                                                                "Linear Models, SVMs, PCA, Logistic Regression"
                                                        ],
                                                        [
                                                                "Log Transformation",
                                                                "np.log1p(x)",
                                                                "Unskewed continuous",
                                                                "Heavy right-skewed data (Income, Revenue)"
                                                        ]
                                                ]
                                        }
                                },
                                {
                                        "heading": "50 - 54. Data Leakage & Scikit-Learn Pipelines",
                                        "text": "Data leakage occurs when test set information influences training transformations. Avoid leakage by splitting dataset into train/test FIRST, then fitting imputers and scalers on train set ONLY, applying fitted transforms to test set. Scikit-Learn Pipeline([('imputer', SimpleImputer()), ('scaler', StandardScaler())]) automates this safely."
                                },
                                {
                                        "heading": "55 - 60. Preprocessing Best Practices & Reference Formulas",
                                        "text": "Always understand data before deleting records, preserve raw copies (df.copy()), validate after cleaning, document transformations, and prevent leakage."
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "1. End-to-End Data Cleaning Pipeline",
                                        "code": "import pandas as pd\nimport numpy as np\n\n# Messy raw customer dataset\nraw_data = {\n    \"Name\": [\" Alice \", \"BOB\", \"alice\", \"Charlie\", \"David\"],\n    \"Age\": [25, 30, np.nan, 28, 150],\n    \"City\": [\"Bangalore\", \"HYDERABAD\", \"bangalore\", np.nan, \"Chennai\"],\n    \"Salary\": [50000, 60000, 55000, np.nan, 70000]\n}\ndf = pd.DataFrame(raw_data)\n\n# 1. Remove duplicates\ndf = df.drop_duplicates()\n\n# 2. Clean text fields\ndf[\"Name\"] = df[\"Name\"].str.strip().str.title()\ndf[\"City\"] = df[\"City\"].str.strip().str.title().replace({\"Bangalore\": \"Bengaluru\"})\n\n# 3. Validate age outliers (>120 -> NaN)\ndf.loc[(df[\"Age\"] < 0) | (df[\"Age\"] > 120), \"Age\"] = np.nan\n\n# 4. Impute missing numerical values with median\ndf[\"Age\"] = df[\"Age\"].fillna(df[\"Age\"].median())\ndf[\"Salary\"] = df[\"Salary\"].fillna(df[\"Salary\"].median())\ndf[\"City\"] = df[\"City\"].fillna(\"Unknown\")\n\nprint(\"Cleaned & Validated DataFrame:\\n\", df)",
                                        "explanation": "Executes a complete 4-step data cleaning pipeline: deduplication, string standardization, outlier validation, and median imputation."
                                },
                                {
                                        "title": "2. IQR Outlier Detection & Scikit-Learn Feature Scaling",
                                        "code": "import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\n\n# Generate sample numerical distribution\ndata = pd.DataFrame({\"Salary\": [45000, 50000, 52000, 48000, 51000, 150000]})\n\n# Calculate IQR boundaries\nQ1 = data[\"Salary\"].quantile(0.25)\nQ3 = data[\"Salary\"].quantile(0.75)\nIQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\noutliers = data[(data[\"Salary\"] < lower_bound) | (data[\"Salary\"] > upper_bound)]\nprint(\"Detected Outliers via IQR:\\n\", outliers)\n\n# Apply StandardScaler\nscaler = StandardScaler()\ndata[\"Salary_Scaled\"] = scaler.fit_transform(data[[\"Salary\"]])\nprint(\"\\nScaled Dataset:\\n\", data)",
                                        "explanation": "Identifies statistical outliers via IQR method and standardizes feature values using Scikit-Learn StandardScaler."
                                }
                        ],
                        "practiceExercise": {
                                "title": "Messy Dataset Cleaning Challenge",
                                "problem": "Given a messy DataFrame with names ' john ', 'SARAH ', missing ages [25, NaN, 30], and salary string '$50000', clean string names to titlecase, impute age with median, strip '$' from salary, and convert salary to float.",
                                "solutionCode": "import pandas as pd, numpy as np\ndf = pd.DataFrame({'Name': [' john ', 'SARAH '], 'Age': [25, np.nan], 'Salary': ['$50000', '$60000']})\ndf['Name'] = df['Name'].str.strip().str.title()\ndf['Age'] = df['Age'].fillna(df['Age'].median())\ndf['Salary'] = df['Salary'].str.replace('$', '', regex=False).astype(float)\nprint(df)"
                        },
                        "keyTakeaways": [
                                "Data cleaning (imputation, deduplication, type casting) consumes 70% of a data scientist's workflow.",
                                "IQR (Q3-Q1) and Z-score methods identify statistical outliers without assuming rigid removal rules.",
                                "Text standardization (strip, title, replace) fixes inconsistent categorical representations.",
                                "Min-Max Normalization [0, 1] and Z-Score Standardization (Mean=0, StdDev=1) scale features appropriately.",
                                "Fit preprocessing transformations on training data ONLY to prevent catastrophic data leakage."
                        ],
                        "references": [
                                {
                                        "title": "Scikit-Learn Preprocessing Guide",
                                        "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
                                },
                                {
                                        "title": "Pandas Data Cleaning Best Practices",
                                        "url": "https://pandas.pydata.org/docs/user_guide/missing_data.html"
                                }
                        ]
                }
        },
        {
  "id": "ds-mod-6",
  "title": "Module 06 — Data Visualization (Matplotlib & Seaborn)",
  "description": "Creating line plots, bar charts, scatter plots, histograms, heatmaps, box plots, and customizing plots for data storytelling.",
  "completed": false,
  "order": 6,
  "published": true,
  "readingMaterial": {
    "introduction": "Data Visualization is the process of representing data graphically so that patterns, trends, relationships, distributions, and anomalies can be understood instantly. In Data Science and Machine Learning, visualization plays an essential role in Exploratory Data Analysis (EDA), statistical validation, model evaluation, and business decision-making. Matplotlib provides foundational low-level chart control, while Seaborn offers high-level statistical plotting integrated directly with Pandas DataFrames.",
    "objectives": [
      "Understand the role of data visualization in Data Science and Exploratory Data Analysis (EDA)",
      "Master Matplotlib pyplot workflows, figure sizing, custom axes, legends, and annotations",
      "Master Seaborn statistical visualizations (scatter plots, line plots, bar charts, count plots, box plots, violin plots, heatmaps, and pair plots)",
      "Create and interpret Line Plots, Bar Charts, Scatter Plots, Histograms (with KDE), Box Plots, and Heatmaps",
      "Customize chart titles, axis labels, legends, grid lines, label rotation, and figure dimensions",
      "Construct multi-panel layout dashboards using Matplotlib plt.subplots()",
      "Export high-resolution raster images (PNG 300 DPI) and vector graphics (SVG format) for web and publication",
      "Apply Data Storytelling principles to select the optimal chart for specific analytical questions and business insights"
    ],
    "sections": [
      {
        "heading": "1 - 4. Overview, Objectives & Chart Selection Matrix",
        "text": "Data Visualization transforms raw numbers into intuitive visual insights. Choosing the right visualization depends on the data type and the specific analytical question being asked.",
        "table": {
          "headers": [
            "Chart Type",
            "Primary Purpose",
            "Best Use Case Scenario",
            "Recommended Library"
          ],
          "rows": [
            [
              "Line Plot",
              "Trends over continuous sequence",
              "Monthly revenue, stock prices, time series",
              "Matplotlib / Seaborn"
            ],
            [
              "Bar Chart",
              "Compare discrete categories",
              "Category sales, regional performance, counts",
              "Matplotlib / Seaborn"
            ],
            [
              "Scatter Plot",
              "Relationship between 2 variables",
              "Height vs Weight, Study hours vs Score",
              "Matplotlib / Seaborn"
            ],
            [
              "Histogram",
              "Distribution & frequency of continuous data",
              "Age distribution, income spread, exam marks",
              "Matplotlib / Seaborn"
            ],
            [
              "Box Plot",
              "Distribution, median, quartiles & outliers",
              "Salary distribution by department, anomaly checks",
              "Matplotlib / Seaborn"
            ],
            [
              "Heatmap",
              "Matrix intensity & feature correlation",
              "Correlation matrices, confusion matrices",
              "Seaborn"
            ],
            [
              "Violin Plot",
              "Distribution shape + Box plot summary",
              "Detailed category distribution comparison",
              "Seaborn"
            ],
            [
              "Count Plot",
              "Frequency count of categorical variables",
              "Employees per department, survey choices",
              "Seaborn"
            ],
            [
              "Pair Plot",
              "Pairwise numerical relationships across dataset",
              "Multi-variable Exploratory Data Analysis (EDA)",
              "Seaborn"
            ]
          ]
        }
      },
      {
        "heading": "5 - 13. Matplotlib Fundamentals: Workflow, Figure Sizing & Categorical Charts",
        "text": "Matplotlib is Python's core plotting library imported via `import matplotlib.pyplot as plt`. A typical workflow involves creating a figure (`plt.figure(figsize=(10, 6))`), plotting data (`plt.plot()`, `plt.bar()`, `plt.barh()`), adding titles (`plt.title()`), labels (`plt.xlabel()`, `plt.ylabel()`), legends (`plt.legend()`), and displaying (`plt.show()`). Grouped bar charts use `numpy.arange()` to offset bar positions cleanly."
      },
      {
        "heading": "14 - 19. Scatter Plots, Histograms & Box Plot Outlier Analysis",
        "text": "Scatter plots reveal positive, negative, non-linear, or clustered relationships between numerical variables. Histograms divide numerical data into continuous interval 'bins' to highlight data skewness and central tendency. Box plots summarize key distribution metrics: minimum, Q1 (25th percentile), median (50th percentile), Q3 (75th percentile), maximum (whiskers = 1.5 * IQR), and individual statistical outliers plotted beyond whiskers."
      },
      {
        "heading": "20 - 22. Heatmaps & Correlation Matrix Analysis",
        "text": "Heatmaps map numerical matrix values to color intensities. Calculating correlation via `df.corr(numeric_only=True)` produces values between -1.0 (strong negative linear relationship), 0.0 (no linear relationship), and +1.0 (strong positive linear relationship). Seaborn's `sns.heatmap(correlation, annot=True)` displays formatted correlation values cleanly."
      },
      {
        "heading": "23 - 34. Seaborn Statistical Plotting Library",
        "text": "Seaborn builds on top of Matplotlib and integrates directly with Pandas DataFrames. It simplifies adding categorical variables via the `hue` parameter (`sns.scatterplot(data=df, x='Age', y='Salary', hue='Department')`), overlaying Kernel Density Estimation (KDE) curves on histograms (`sns.histplot(kde=True)`), comparing category distributions via Violin Plots (`sns.violinplot()`), and generating dataset-wide pairwise relationships using `sns.pairplot(df)`.",
        "table": {
          "headers": [
            "Seaborn Function",
            "Input Arguments",
            "Visual Output Description"
          ],
          "rows": [
            [
              "sns.scatterplot()",
              "data=df, x, y, hue",
              "Scatter plot color-coded by categorical group"
            ],
            [
              "sns.lineplot()",
              "data=df, x, y, hue",
              "Line chart with automated confidence intervals"
            ],
            [
              "sns.barplot()",
              "data=df, x, y, estimator",
              "Bar chart showing category mean / summary statistic"
            ],
            [
              "sns.countplot()",
              "data=df, x or y",
              "Bar chart showing total row counts per category"
            ],
            [
              "sns.histplot()",
              "data=df, x, bins, kde=True",
              "Histogram with smooth Kernel Density Estimation curve"
            ],
            [
              "sns.boxplot()",
              "data=df, x, y, hue",
              "Category-wise box plots for outlier comparison"
            ],
            [
              "sns.violinplot()",
              "data=df, x, y",
              "KDE distribution shape merged with box plot markers"
            ],
            [
              "sns.heatmap()",
              "data=corr, annot=True, fmt='.2f'",
              "Color-coded correlation / matrix grid with text values"
            ],
            [
              "sns.pairplot()",
              "data=df, hue",
              "Matrix of scatter plots and histograms for all numerical features"
            ]
          ]
        }
      },
      {
        "heading": "35 - 43. Chart Customization, Subplots & Vector SVG Export",
        "text": "Customization enhances clarity and presentation quality. Set descriptive titles (`plt.title('Monthly Sales Trend — 2026', fontsize=16)`), label axes (`plt.xlabel()`), add subtle grid lines (`plt.grid(True, alpha=0.3)`), rotate long x-axis ticks (`plt.xticks(rotation=45, ha='right')`), annotate critical data points (`plt.annotate()`), and create multi-chart layouts using `fig, axes = plt.subplots(2, 2, figsize=(10, 8))`. Save plots cleanly as PNG (`plt.savefig('chart.png', dpi=300, bbox_inches='tight')`) or vector graphics (`plt.savefig('chart.svg', format='svg')`)."
      },
      {
        "heading": "44 - 48. Data Storytelling & Chart Selection Workflow",
        "text": "Data Storytelling connects data to business insights through a structured workflow: Question -> Data -> Visualization -> Pattern -> Interpretation -> Insight. Use SVG diagrams below to guide visualization selection."
      },
      {
        "heading": "49 - 53. Visualization Best Practices, Mistakes & Library Comparison",
        "text": "Adhere to best practices: keep charts simple, use descriptive titles, label all axes, avoid visual clutter, preserve accurate scale baseline, and avoid misleading pie charts or missing legends.",
        "table": {
          "headers": [
            "Feature / Dimension",
            "Matplotlib",
            "Seaborn"
          ],
          "rows": [
            [
              "Abstraction Level",
              "Low-level explicit canvas & elements",
              "High-level statistical abstractions"
            ],
            [
              "Pandas Integration",
              "Requires manual series passing",
              "Native DataFrame integration (`data=df`)"
            ],
            [
              "Statistical Estimation",
              "Manual calculation required",
              "Automated (means, CI, KDE, aggregations)"
            ],
            [
              "Default Aesthetic",
              "Basic standard styling",
              "Modern curated themes & color palettes"
            ],
            [
              "Customization Depth",
              "Complete pixel-level control",
              "Customizable directly or via underlying Matplotlib axes"
            ]
          ]
        }
      },
      {
        "heading": "54 - 58. Practice Exercises, Interview Preparation & Mini Project",
        "text": "Practice exercises include building line plots, grouped bar charts, correlation heatmaps, multi-panel subplots, and exporting publication-quality SVG files. Mini project involves conducting full EDA visualization on a 7-column sales dataset."
      }
    ],
    "codeExamples": [
      {
        "title": "1. Complete Matplotlib Multi-Panel Subplot Dashboard",
        "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Sample dataset\nmonths = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\"]\nsales = [12000, 15000, 14000, 18000, 21000, 24000]\ncategories = [\"Fruits\", \"Veggies\", \"Oils\", \"Spices\"]\ncat_sales = [250, 320, 180, 270]\nages = [21, 22, 23, 25, 26, 27, 29, 30, 31, 32, 35, 36, 38, 40]\n\n# Create 2x2 Subplots figure\nfig, axes = plt.subplots(2, 2, figsize=(12, 10))\n\n# Subplot 1: Line Plot\naxes[0, 0].plot(months, sales, marker=\"o\", color=\"#0284c7\", linestyle=\"--\")\naxes[0, 0].set_title(\"Monthly Sales Trend\", fontsize=12)\naxes[0, 0].set_xlabel(\"Month\")\naxes[0, 0].set_ylabel(\"Sales (₹)\")\naxes[0, 0].grid(True, alpha=0.3)\n\n# Subplot 2: Bar Chart\naxes[0, 1].bar(categories, cat_sales, color=\"#10b981\")\naxes[0, 1].set_title(\"Category Sales Comparison\", fontsize=12)\naxes[0, 1].set_xlabel(\"Category\")\naxes[0, 1].set_ylabel(\"Units Sold\")\n\n# Subplot 3: Histogram\naxes[1, 0].hist(ages, bins=5, color=\"#f59e0b\", edgecolor=\"black\")\naxes[1, 0].set_title(\"Age Distribution\", fontsize=12)\naxes[1, 0].set_xlabel(\"Age Group\")\naxes[1, 0].set_ylabel(\"Frequency\")\n\n# Subplot 4: Box Plot\naxes[1, 1].boxplot(sales, patch_artist=True, boxprops=dict(facecolor=\"#8b5cf6\"))\naxes[1, 1].set_title(\"Sales Outlier Distribution\", fontsize=12)\naxes[1, 1].set_ylabel(\"Sales (₹)\")\n\nplt.tight_layout()\nplt.savefig(\"dashboard.png\", dpi=300, bbox_inches=\"tight\")\nplt.show()",
        "explanation": "Creates a 2x2 grid dashboard using plt.subplots(), styling 4 distinct plot types, setting labels, grids, layout formatting, and exporting to PNG."
      },
      {
        "title": "2. Seaborn Statistical EDA Pipeline & Correlation Heatmap",
        "code": "import pandas as pd\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Sample DataFrame\ndata = {\n    \"Age\": [25, 30, 35, 40, 45, 50, 55, 60],\n    \"Salary\": [45000, 52000, 61000, 68000, 75000, 83000, 92000, 105000],\n    \"Experience\": [2, 5, 8, 12, 15, 18, 22, 25],\n    \"Department\": [\"IT\", \"HR\", \"IT\", \"Finance\", \"IT\", \"Finance\", \"HR\", \"IT\"]\n}\ndf = pd.DataFrame(data)\n\n# 1. Scatter plot with hue and linear regression fit\nplt.figure(figsize=(8, 5))\nsns.scatterplot(data=df, x=\"Experience\", y=\"Salary\", hue=\"Department\", s=100)\nplt.title(\"Experience vs Salary by Department\", fontsize=14)\nplt.grid(True, alpha=0.3)\nplt.show()\n\n# 2. Correlation Matrix Heatmap\nplt.figure(figsize=(7, 5))\ncorrelation = df[[\"Age\", \"Salary\", \"Experience\"]].corr()\nsns.heatmap(correlation, annot=True, cmap=\"Blues\", fmt=\".2f\", linewidths=1)\nplt.title(\"Numerical Feature Correlation Matrix\", fontsize=14)\nplt.show()",
        "explanation": "Demonstrates Seaborn integration with Pandas DataFrames to visualize multi-category scatter relationships and plot formatted correlation heatmaps."
      }
    ],
    "bestPractices": [
      "Keep charts simple and uncluttered — let the data speak clearly without unnecessary decorations",
      "Always provide clear, descriptive titles and explicit axis labels with units (e.g. Sales in ₹)",
      "Add legends whenever plotting multiple series or hue categories to eliminate ambiguity",
      "Use subtle grid lines (alpha=0.3) to aid visual estimation without distracting from data trends",
      "Rotate long categorical labels (plt.xticks(rotation=45, ha='right')) to prevent overlapping text",
      "Choose colormaps thoughtfully (e.g. sequential gradients for heatmaps, qualitative palettes for categories)",
      "Always inspect and handle outliers before interpreting distribution metrics",
      "Export charts in vector SVG format for scalable web rendering and publication graphics"
    ],
    "commonMistakes": [
      "Using pie charts for datasets with many categories, making part-to-whole visual judgment inaccurate",
      "Omitting axis labels or chart titles, rendering visualizations ambiguous to viewers",
      "Truncating or manipulating y-axis scales, creating deceptive visual distortions of underlying values",
      "Overplotting dense datasets without adding transparency (alpha) or sample aggregation",
      "Attempting to present too many variables in a single crowded chart instead of using subplots",
      "Assuming statistical correlation implies direct causality between two variables"
    ],
    "practiceExercise": {
      "instructions": "Perform a complete Data Visualization workflow on a multi-category sales dataset using Matplotlib and Seaborn.",
      "tasks": [
        "1. Create a line plot displaying monthly revenue trends with custom markers ('o'), dashed line style ('--'), and annotated peak sales point.",
        "2. Build a grouped bar chart comparing sales across 4 product categories for 2025 vs 2026 using np.arange() offsets.",
        "3. Generate a Seaborn histplot with an overlaid KDE curve to inspect order amount distributions.",
        "4. Calculate a feature correlation matrix (df.corr()) and render a Seaborn heatmap with numerical annotations (annot=True, fmt='.2f').",
        "5. Assemble a 2x2 subplot dashboard and save the final figure as both a high-resolution PNG (300 DPI) and scalable SVG file."
      ]
    },
    "keyTakeaways": [
      "Data Visualization transforms raw numbers into intuitive graphical evidence for EDA, modeling, and business reporting.",
      "Matplotlib provides detailed low-level figure control, canvas customization, and subplot layouts.",
      "Seaborn delivers high-level statistical functions (scatter with hue, boxplot, violinplot, pairplot, heatmap) that integrate seamlessly with Pandas DataFrames.",
      "Effective chart selection is essential: Line Plots for time trends, Bar Charts for category comparison, Scatter Plots for relationships, Histograms/Box Plots for distributions, and Heatmaps for matrix correlations.",
      "Data Storytelling connects technical charts to actionable insights, driving evidence-based decision making."
    ],
    "references": [
      {
        "title": "Matplotlib Official Documentation",
        "url": "https://matplotlib.org/stable/contents.html"
      },
      {
        "title": "Seaborn Official Documentation",
        "url": "https://seaborn.pydata.org/"
      }
    ]
  }
},
  {
  "id": "ds-mod-7",
  "title": "Module 07 — Statistics & Probability Fundamentals",
  "description": "Descriptive statistics (mean, median, std dev, variance), probability distributions, hypothesis testing, p-values, and confidence intervals.",
  "completed": false,
  "order": 7,
  "published": true,
  "readingMaterial": {
    "introduction": "Statistics and Probability form the mathematical bedrock of Data Science and Machine Learning. Statistics provides methods to summarize, analyze, and infer patterns from data, while probability offers a quantitative framework for reasoning under uncertainty. These concepts enable data scientists to evaluate sample metrics, perform hypothesis testing, assess p-values, and quantify prediction confidence intervals.",
    "objectives": [
      "Differentiate population parameters (μ, σ) from sample statistics (x̄, s)",
      "Calculate measures of central tendency (Mean, Median, Mode) and dispersion (Range, Variance, Standard Deviation, IQR, Percentiles)",
      "Master Probability Fundamentals, Sample Spaces, Conditional Probability, and Bayes' Theorem",
      "Analyze Discrete (Bernoulli, Binomial, Poisson) and Continuous (Normal, Uniform) Probability Distributions",
      "Apply the Empirical 68-95-99.7 Rule, Z-scores, and the Central Limit Theorem (CLT)",
      "Formulate Statistical Hypotheses (Null H₀ vs Alternative H₁) and evaluate Significance Levels (α = 0.05)",
      "Interpret P-Values, calculate Confidence Intervals, and prevent Type I (False Positive) & Type II (False Negative) errors",
      "Perform Hypothesis Tests in Python using SciPy (One-Sample t-test, Independent 2-Sample t-test, Paired t-test, Chi-Square test, ANOVA)"
    ],
    "sections": [
      {
        "heading": "1 - 6. Overview, Objectives & Population vs Sample Fundamentals",
        "text": "Statistics is divided into Descriptive Statistics (summarizing observed data) and Inferential Statistics (drawing population conclusions from sample data). A population includes all individuals of interest, while a sample is a representative subset used for analysis.",
        "table": {
          "headers": [
            "Statistical Concept",
            "Population Metric",
            "Sample Metric",
            "Python Function"
          ],
          "rows": [
            [
              "Mean (Average)",
              "μ (Mu)",
              "x̄ (x-bar)",
              "np.mean(x) / df['col'].mean()"
            ],
            [
              "Variance",
              "σ² (Sigma squared)",
              "s² (Sample variance)",
              "np.var(x, ddof=1)"
            ],
            [
              "Standard Deviation",
              "σ (Sigma)",
              "s (Sample std dev)",
              "np.std(x, ddof=1)"
            ],
            [
              "Size / Count",
              "N (Total population size)",
              "n (Sample subset size)",
              "len(x) / count()"
            ],
            [
              "Proportion",
              "P",
              "p̂ (p-hat)",
              "df['col'].value_counts(normalize=True)"
            ]
          ]
        }
      },
      {
        "heading": "7 - 14. Measures of Central Tendency: Mean, Median & Mode",
        "text": "Central tendency describes the central value of a distribution. Arithmetic Mean (μ = Σx / N) is best for symmetric data without extreme values. Median (middle value of sorted data) is robust against outliers and heavily skewed data (such as income or housing prices). Mode is the most frequent value, suitable for categorical features.",
        "table": {
          "headers": [
            "Measure",
            "Mathematical Formula / Rule",
            "Optimal Data Scenario",
            "Sensitivity to Outliers"
          ],
          "rows": [
            [
              "Mean",
              "μ = Σ x_i / N",
              "Symmetric numerical data",
              "High (strongly shifted by extreme values)"
            ],
            [
              "Median",
              "Middle element of ordered sequence",
              "Skewed continuous data (Income, Sales)",
              "Low (robust metric)"
            ],
            [
              "Mode",
              "Most frequent observation",
              "Categorical strings or discrete metrics",
              "None"
            ]
          ]
        }
      },
      {
        "heading": "15 - 23. Measures of Dispersion, IQR & Percentiles",
        "text": "Dispersion measures data spread. Range = Max - Min. Population Variance σ² = Σ(x - μ)² / N, while Sample Variance s² = Σ(x - x̄)² / (n - 1) uses Bessel's correction (n - 1). Standard deviation s = √s² returns spread in original units. The Interquartile Range IQR = Q3 - Q1 measures middle 50% spread. Percentiles indicate values below which a specified percentage of observations fall."
      },
      {
        "heading": "24 - 32. Probability Theory, Conditional Probability & Bayes' Theorem",
        "text": "Probability ranges between 0.0 (impossible) and 1.0 (certain). Addition rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Conditional probability: P(A|B) = P(A ∩ B) / P(B). Bayes' Theorem allows updating prior probabilities based on new evidence: P(A|B) = [P(B|A) * P(A)] / P(B), forming the basis for Naive Bayes classification and medical diagnostics."
      },
      {
        "heading": "33 - 42. Probability Distributions: Discrete & Continuous",
        "text": "Discrete variables take countable values (Bernoulli, Binomial P(X=k) = (n k) p^k (1-p)^(n-k), Poisson). Continuous variables take real-valued intervals (Uniform, Normal Distribution). The Normal Distribution is symmetric around mean μ. The Empirical Rule states ~68% of data falls within μ ± 1σ, ~95% within μ ± 2σ, and ~99.7% within μ ± 3σ. Z-Score z = (x - μ) / σ standardizes observations.",
        "table": {
          "headers": [
            "Distribution Name",
            "Variable Type",
            "Key Parameters",
            "Real-World Application"
          ],
          "rows": [
            [
              "Bernoulli",
              "Discrete binary",
              "p (success probability)",
              "Single coin toss, single click (1/0)"
            ],
            [
              "Binomial",
              "Discrete count",
              "n (trials), p (probability)",
              "Number of conversions out of 100 users"
            ],
            [
              "Poisson",
              "Discrete rate",
              "λ (average rate per interval)",
              "Website traffic requests per minute"
            ],
            [
              "Continuous Uniform",
              "Continuous interval",
              "a (min), b (max)",
              "Random number generator between [0, 1]"
            ],
            [
              "Normal (Gaussian)",
              "Continuous bell-curve",
              "μ (mean), σ (std dev)",
              "Heights, exam scores, measurement errors"
            ],
            [
              "Standard Normal",
              "Continuous (Z)",
              "μ = 0, σ = 1",
              "Z-score hypothesis testing baseline"
            ]
          ]
        }
      },
      {
        "heading": "43 - 46. Central Limit Theorem (CLT) & Standard Error",
        "text": "The Central Limit Theorem (CLT) states that as sample size n increases (typically n ≥ 30), the sampling distribution of the sample mean x̄ approaches a normal distribution, regardless of the population distribution shape. The Standard Error of the mean SE = s / √n measures sample mean variability."
      },
      {
        "heading": "47 - 54. Hypothesis Testing Framework & Error Analysis",
        "text": "Hypothesis testing evaluates claims: Null Hypothesis H₀ (no effect/difference) vs Alternative Hypothesis H₁ (significant effect). Significance level α (commonly 0.05) sets the risk threshold for Type I error (rejecting true H₀ / false positive). Type II error β represents failing to reject false H₀ (false negative). Power = 1 - β.",
        "table": {
          "headers": [
            "Statistical Decision",
            "H₀ is True in Reality",
            "H₀ is False in Reality"
          ],
          "rows": [
            [
              "Reject H₀",
              "Type I Error (False Positive, α)",
              "Correct Decision (True Positive, 1 - β)"
            ],
            [
              "Fail to Reject H₀",
              "Correct Decision (True Negative, 1 - α)",
              "Type II Error (False Negative, β)"
            ]
          ]
        }
      },
      {
        "heading": "55 - 58. Confidence Intervals & Parameter Estimation",
        "text": "A 95% Confidence Interval provides a range of plausible values for a population mean: x̄ ± z* (s / √n). If sampling is repeated 95% of constructed intervals contain true population mean μ. Prediction intervals account for individual variance and are wider than confidence intervals."
      },
      {
        "heading": "59 - 63. Common Statistical Tests & SciPy Implementations",
        "text": "Choose appropriate tests based on variables: One-sample t-test (compare sample mean to value), Independent 2-sample t-test (compare 2 groups), Paired t-test (before vs after), Chi-Square test (categorical independence), and One-Way ANOVA (compare 3+ group means).",
        "table": {
          "headers": [
            "Statistical Test",
            "Scipy Function Call",
            "Data Condition / Requirement"
          ],
          "rows": [
            [
              "1-Sample t-test",
              "scipy.stats.ttest_1samp(data, popmean)",
              "Compare sample mean to known reference value"
            ],
            [
              "Independent 2-Sample t-test",
              "scipy.stats.ttest_ind(group1, group2)",
              "Compare continuous means of 2 independent groups"
            ],
            [
              "Paired t-test",
              "scipy.stats.ttest_rel(before, after)",
              "Compare matched pairs (pre-test vs post-test)"
            ],
            [
              "Chi-Square Test",
              "scipy.stats.chi2_contingency(table)",
              "Analyze association between 2 categorical variables"
            ],
            [
              "One-Way ANOVA",
              "scipy.stats.f_oneway(g1, g2, g3)",
              "Compare continuous means across 3+ independent groups"
            ]
          ]
        }
      }
    ],
    "codeExamples": [
      {
        "title": "1. Descriptive Statistics, Z-Scores & Quartile Analysis in Python",
        "code": "import numpy as np\nimport pandas as pd\nfrom scipy import stats\n\n# Sample continuous dataset (e.g. Daily Customer Spend in ₹)\nspend = [100, 120, 115, 95, 250, 300, 110, 105, 125, 130, 990]\n\n# 1. Central Tendency & Dispersion\nmean_val = np.mean(spend)\nmedian_val = np.median(spend)\nvar_val = np.var(spend, ddof=1) # Sample variance\nstd_val = np.std(spend, ddof=1)   # Sample standard deviation\n\n# 2. Quartiles & IQR\nQ1 = np.percentile(spend, 25)\nQ3 = np.percentile(spend, 75)\nIQR = Q3 - Q1\n\n# 3. Z-Score Outlier Flagging\nz_scores = stats.zscore(spend)\noutliers = [val for val, z in zip(spend, z_scores) if abs(z) > 2.0]\n\nprint(f\"Mean: {mean_val:.2f}, Median: {median_val:.2f}\")\nprint(f\"Std Dev: {std_val:.2f}, IQR: {IQR:.2f}\")\nprint(f\"Flagged Outliers (|Z| > 2.0): {outliers}\")",
        "explanation": "Calculates sample mean, median, sample variance, standard deviation, IQR, and flags extreme outliers using SciPy zscore."
      },
      {
        "title": "2. Hypothesis Testing Pipeline with SciPy (t-test & Chi-Square)",
        "code": "from scipy import stats\nimport pandas as pd\n\n# Scenario 1: Independent 2-Sample t-test (Mobile vs Desktop Conversion spend)\nmobile_spend = [45, 50, 55, 60, 52, 48, 58]\ndesktop_spend = [65, 70, 68, 72, 75, 80, 71]\n\nt_stat, p_val_t = stats.ttest_ind(mobile_spend, desktop_spend)\nprint(\"T-test p-value:\", p_val_t)\nif p_val_t < 0.05:\n    print(\"Conclusion: Reject H0 - Significant difference in spend between platforms.\")\n\n# Scenario 2: Chi-Square Test of Independence (Device Type vs Purchase Action)\ncontingency_matrix = [\n    [120, 80],  # Mobile: [Purchased, Abandoned]\n    [150, 50]   # Desktop: [Purchased, Abandoned]\n]\nchi2, p_val_chi2, dof, expected = stats.chi2_contingency(contingency_matrix)\nprint(\"\\nChi-Square p-value:\", p_val_chi2)\nif p_val_chi2 < 0.05:\n    print(\"Conclusion: Reject H0 - Device type is significantly associated with purchase action.\")",
        "explanation": "Runs an independent 2-sample t-test to evaluate group means and a Chi-Square test of independence to assess categorical relationships."
      }
    ],
    "bestPractices": [
      "Always inspect distribution shape (histogram / Q-Q plot) before picking mean vs median or parametric vs non-parametric tests",
      "Formulate Null (H₀) and Alternative (H₁) hypotheses explicitly prior to running statistical tests",
      "Define significance level α (typically 0.05) beforehand to prevent confirmation bias or p-hacking",
      "Distinguish between statistical significance (p < 0.05) and practical business significance (effect size)",
      "Always report confidence intervals alongside point estimates to communicate measurement uncertainty",
      "Ensure sufficient sample size (n ≥ 30) for Central Limit Theorem assumptions to hold reliably"
    ],
    "commonMistakes": [
      "Mistaking p-value as the probability that the null hypothesis is true",
      "Confusing Population parameters (μ, σ) with Sample statistics (x̄, s)",
      "Using the mean to describe heavily skewed distributions containing severe outliers",
      "Confusing Type I error (False Positive) with Type II error (False Negative)",
      "P-hacking: running dozens of tests until an arbitrary p < 0.05 occurs by random chance"
    ],
    "practiceExercise": {
      "instructions": "Perform descriptive statistical analysis and hypothesis testing on a sample customer dataset in Python.",
      "tasks": [
        "1. Calculate mean, median, sample variance, standard deviation, and 90th percentile for customer purchase amounts.",
        "2. Compute Z-scores for each observation and identify potential outliers (|Z| > 2.5).",
        "3. Conduct a one-sample t-test (scipy.stats.ttest_1samp) to evaluate if average spend differs from reference ₹100 (α=0.05).",
        "4. Calculate a 95% confidence interval for the population mean purchase amount.",
        "5. Execute an independent 2-sample t-test comparing purchase amounts between mobile and desktop users."
      ]
    },
    "keyTakeaways": [
      "Descriptive statistics summarize existing data, while Inferential statistics allow generalization to populations.",
      "The Normal Distribution and Empirical Rule (68-95-99.7%) govern standard continuous phenomena, with Z-scores standardizing deviations.",
      "The Central Limit Theorem ensures sample means follow a normal distribution as sample size n grows.",
      "Hypothesis testing evaluates p-values against significance threshold α (0.05) to accept or reject H₀.",
      "Confidence intervals express the range of plausible values for a population parameter."
    ],
    "references": [
      {
        "title": "SciPy Stats Module API Reference",
        "url": "https://docs.scipy.org/doc/scipy/reference/stats.html"
      },
      {
        "title": "NIST Engineering Statistics Handbook",
        "url": "https://www.itl.nist.gov/div898/handbook/"
      }
    ]
  }
},
  {
  "id": "ds-mod-8",
  "title": "Module 08 — Exploratory Data Analysis (EDA)",
  "description": "End-to-end data exploration, univariate/bivariate analysis, correlation matrices, feature relationships, and insights extraction.",
  "completed": false,
  "order": 8,
  "published": true,
  "readingMaterial": {
    "introduction": "Exploratory Data Analysis (EDA) is the systematic process of examining, summarizing, visualizing, and understanding a dataset before applying statistical models or Machine Learning algorithms. EDA combines statistics, visualization, domain knowledge, and critical thinking to uncover data structure, assess quality, detect anomalies, analyze distributions, investigate correlations, and extract actionable business insights.",
    "objectives": [
      "Master end-to-end Exploratory Data Analysis (EDA) workflows using Pandas, Matplotlib, and Seaborn",
      "Inspect dataset structure, dimensions, data types, missing value percentages, and duplicate records",
      "Perform Univariate Analysis on numerical features (histograms, KDE plots, box plots, skewness) and categorical features (count plots, frequency tables)",
      "Execute Bivariate and Multivariate Analysis to examine feature interactions, scatter patterns, and cross-tabulations",
      "Calculate Pearson and Spearman Correlation Matrices, render heatmaps, and avoid correlation vs causation fallacies",
      "Identify and investigate outliers using Interquartile Range (IQR = Q3 - Q1) and Z-score thresholds",
      "Conduct time-series EDA, detect potential Data Leakage, and perform domain-guided Feature Engineering",
      "Extract actionable business insights and construct comprehensive 14-part EDA technical reports"
    ],
    "sections": [
      {
        "heading": "1 - 6. Overview, Objectives & The 13-Step EDA Workflow",
        "text": "EDA is an iterative investigative process preceding Machine Learning modeling. It distinguishes itself from Data Cleaning by focusing on uncovering patterns, distributions, and feature relationships rather than simply fixing data errors. The workflow moves logically from raw dataset loading to structure inspection, quality checks, univariate/bivariate/multivariate analysis, correlation heatmaps, outlier investigation, and insight extraction.",
        "table": {
          "headers": [
            "EDA Stage",
            "Primary Analytical Task",
            "Pandas / Seaborn Method",
            "Output / Insight Goal"
          ],
          "rows": [
            [
              "1. Dataset Structure",
              "Inspect dimensions & data types",
              "df.shape, df.info(), df.dtypes",
              "Understand rows, columns, memory & schema"
            ],
            [
              "2. Quality Assessment",
              "Detect missing values & duplicates",
              "df.isnull().sum(), df.duplicated()",
              "Quantify completeness & record uniqueness"
            ],
            [
              "3. Descriptive Summary",
              "Calculate central tendency & spread",
              "df.describe(include='all')",
              "Summary statistics for numerical & categorical features"
            ],
            [
              "4. Univariate Analysis",
              "Analyze individual variable distribution",
              "plt.hist(), sns.kdeplot(), countplot()",
              "Assess skewness, frequency, peaks & range"
            ],
            [
              "5. Bivariate Analysis",
              "Examine pairs of variables",
              "sns.scatterplot(), boxplot(), crosstab()",
              "Uncover category differences & feature trends"
            ],
            [
              "6. Correlation Analysis",
              "Measure numerical feature association",
              "df.corr(), sns.heatmap(annot=True)",
              "Identify multi-collinearity & strong feature signals"
            ],
            [
              "7. Outlier Detection",
              "Locate extreme numerical anomalies",
              "IQR bounds, Z-score (scipy.stats)",
              "Flag rare events, errors, or extreme outliers"
            ],
            [
              "8. Insight Extraction",
              "Synthesize findings into decisions",
              "Analytical reporting & feature selection",
              "Guide data preprocessing & model architecture"
            ]
          ]
        }
      },
      {
        "heading": "7 - 14. Dataset Loading, Inspection & Feature Categorization",
        "text": "Load datasets via `pd.read_csv()`. Inspect records using `df.head()`, `df.tail()`, and random `df.sample(5)`. Check exact matrix dimensions with `df.shape` (rows, columns) and inspect data types with `df.info()`. Separate features into numerical (`df.select_dtypes(include='number')`) and categorical (`df.select_dtypes(include=['object', 'category'])`) to apply appropriate statistical methods."
      },
      {
        "heading": "15 - 17. Data Quality Audit: Missing Values & Duplicate Records",
        "text": "Calculate missing value counts (`df.isnull().sum()`) and percentage proportions (`df.isnull().mean() * 100`). Identify duplicate rows via `df.duplicated().sum()`. Investigate duplicate origins prior to deletion (`df.drop_duplicates()`), as repeated entries can reflect valid business occurrences."
      },
      {
        "heading": "18 - 25. Univariate Analysis: Numerical Distributions & Categorical Frequencies",
        "text": "Univariate analysis evaluates one feature at a time. For continuous numerical variables, construct Histograms (`plt.hist(bins=20)`), Kernel Density Estimation plots (`sns.kdeplot()`), and Box Plots (`sns.boxplot()`) to inspect center, spread, skewness, and tails. For categorical features, generate frequency counts (`df['col'].value_counts()`), proportion tables (`normalize=True`), and Count Plots (`sns.countplot()`)."
      },
      {
        "heading": "26 - 35. Bivariate, GroupBy & Multivariate Feature Exploration",
        "text": "Bivariate analysis examines relationships between two features: Scatter Plots (`sns.scatterplot()`) for Numerical vs Numerical, Box Plots / Violin Plots (`sns.boxplot()`) for Categorical vs Numerical, and Cross-tabulations (`pd.crosstab()`) for Categorical vs Categorical. GroupBy aggregation (`df.groupby('Region')['Spending'].agg(['mean', 'median', 'std', 'count'])`) extracts multi-level category summaries."
      },
      {
        "heading": "36 - 41. Pearson & Spearman Correlation Analysis & Heatmaps",
        "text": "Correlation measures numerical association ranging between -1.0 (inverse relationship), 0.0 (no linear association), and +1.0 (positive relationship). Pearson correlation measures linear relationships, while Spearman rank correlation measures monotonic associations. Visualize matrices using `sns.heatmap(df.corr(), annot=True, fmt='.2f')`. CRITICAL RULE: Correlation does not imply causation.",
        "table": {
          "headers": [
            "Correlation Type",
            "Mathematical Metric",
            "Best Applied Scenario",
            "Sensitivity to Non-Linearity / Outliers"
          ],
          "rows": [
            [
              "Pearson Correlation (r)",
              "Linear covariance / standard deviation product",
              "Continuous normally distributed linear features",
              "High sensitivity to non-linear trends & extreme outliers"
            ],
            [
              "Spearman Rank Correlation (ρ)",
              "Monotonic relationship on ranked values",
              "Ordinal data or non-linear monotonic features",
              "Robust against continuous outliers"
            ],
            [
              "Kendall Tau (τ)",
              "Pairwise concordant / discordant counting",
              "Small sample sizes with tied rank values",
              "High statistical robustness"
            ]
          ]
        }
      },
      {
        "heading": "42 - 46. Outlier Detection: IQR Method, Z-Score & Distribution Skewness",
        "text": "Outliers are extreme observations distant from the main distribution. The IQR method flags values outside `[Q1 - 1.5*IQR, Q3 + 1.5*IQR]`. Z-score detection flags observations with `|Z| > 3`. Assess skewness (`df.skew()`): positive skew indicates long right tail (Income, Sales), while negative skew indicates long left tail."
      },
      {
        "heading": "47 - 54. Time-Series EDA, Feature Engineering & Data Leakage Awareness",
        "text": "Convert date columns using `pd.to_datetime()` to analyze trend, seasonality, and periodic spikes. Engineer temporal features (`.dt.year`, `.dt.month`, `.dt.dayofweek`, `.dt.is_weekend`). Audit features for Data Leakage—ensuring future target information (e.g. Cancellation Date in Churn prediction) is never included in training features."
      },
      {
        "heading": "55 - 63. Visualization Selection Matrix & Best Practices",
        "text": "Select visualizations based on analytical goals. Adhere to best practices: inspect data before modeling, review distributions beyond simple averages, check missing data patterns, avoid automatic outlier deletion without domain context, and communicate clear analytical insights.",
        "table": {
          "headers": [
            "Analytical Question",
            "Recommended Visualization",
            "Primary Python Tool"
          ],
          "rows": [
            [
              "Single Continuous Distribution",
              "Histogram / KDE Plot",
              "plt.hist() / sns.kdeplot()"
            ],
            [
              "Distribution Summary & Outliers",
              "Box Plot / Violin Plot",
              "sns.boxplot() / sns.violinplot()"
            ],
            [
              "Categorical Frequencies",
              "Bar Chart / Count Plot",
              "sns.countplot()"
            ],
            [
              "Two Continuous Variables",
              "Scatter Plot",
              "sns.scatterplot()"
            ],
            [
              "Numerical by Categorical Group",
              "Box Plot / Grouped Bar Chart",
              "sns.boxplot(x='Category', y='Value')"
            ],
            [
              "Two Categorical Variables",
              "Stacked Bar / Heatmap Crosstab",
              "pd.crosstab() + sns.heatmap()"
            ],
            [
              "Feature Correlation Grid",
              "Annotated Heatmap",
              "sns.heatmap(df.corr(), annot=True)"
            ],
            [
              "Multi-Feature Pairwise Grid",
              "Pair Plot Matrix",
              "sns.pairplot(df)"
            ],
            [
              "Temporal Trends",
              "Line Plot over Time",
              "plt.plot(df['Date'], df['Value'])"
            ]
          ]
        }
      },
      {
        "heading": "64 - 69. Mini-Project, 14-Part Report Template & Module Summary",
        "text": "Apply end-to-end EDA on customer sales datasets (Age, Income, Region, Orders, Spending, Satisfaction) and compile reports using the 14-part structure: Executive Summary, Quality Audit, Descriptive Stats, Univariate/Bivariate Analysis, Correlations, Outliers, Key Insights, and Modeling Recommendations."
      }
    ],
    "codeExamples": [
      {
        "title": "1. End-to-End Automated EDA Pipeline in Python",
        "code": "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Sample Customer Dataset\nnp.random.seed(42)\ndata = {\n    \"Customer_ID\": [f\"CUST_{i:04d}\" for i in range(1, 101)],\n    \"Age\": np.random.randint(18, 65, 100),\n    \"Gender\": np.random.choice([\"Male\", \"Female\"], 100),\n    \"Region\": np.random.choice([\"North\", \"South\", \"East\", \"West\"], 100),\n    \"Income\": np.random.normal(55000, 15000, 100),\n    \"Spending\": np.random.normal(3000, 800, 100),\n    \"Satisfaction\": np.random.randint(1, 6, 100)\n}\ndf = pd.DataFrame(data)\n\n# 1. Structure & Quality Audit\nprint(\"Shape:\", df.shape)\nprint(\"\\nMissing Values:\\n\", df.isnull().sum())\nprint(\"Duplicates:\", df.duplicated().sum())\nprint(\"\\nStatistical Summary:\\n\", df.describe())\n\n# 2. Correlation Matrix Heatmap\nplt.figure(figsize=(8, 5))\nnum_df = df.select_dtypes(include=\"number\")\nsns.heatmap(num_df.corr(), annot=True, cmap=\"coolwarm\", fmt=\".2f\")\nplt.title(\"Customer Feature Correlation Matrix\")\nplt.tight_layout()\nplt.show()",
        "explanation": "Executes an end-to-end dataset quality audit, descriptive statistics summary, feature selection, and correlation matrix visualization."
      },
      {
        "title": "2. Bivariate GroupBy & Outlier Detection Pipeline",
        "code": "import pandas as pd\nimport numpy as np\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n# 1. Bivariate GroupBy Aggregation\nregion_summary = df.groupby([\"Region\", \"Gender\"])[\"Spending\"].agg(\n    [\"count\", \"mean\", \"median\", \"std\", \"min\", \"max\"]\n).reset_index()\nprint(\"Region & Gender Spending Summary:\\n\", region_summary)\n\n# 2. IQR Outlier Bounds Calculation\nQ1 = df[\"Spending\"].quantile(0.25)\nQ3 = df[\"Spending\"].quantile(0.75)\nIQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\noutliers = df[(df[\"Spending\"] < lower_bound) | (df[\"Spending\"] > upper_bound)]\nprint(f\"\\nDetected Spending Outliers ({len(outliers)} records):\\n\", outliers[[\"Customer_ID\", \"Spending\"]])\n\n# 3. Categorical vs Numerical Boxplot\nplt.figure(figsize=(8, 5))\nsns.boxplot(data=df, x=\"Region\", y=\"Spending\", hue=\"Gender\")\nplt.title(\"Spending Distribution across Regions by Gender\")\nplt.show()",
        "explanation": "Computes multi-level GroupBy statistical aggregations, detects outliers via 1.5*IQR bounds, and plots category-wise comparative box plots."
      }
    ],
    "bestPractices": [
      "Always inspect raw dataset structure, data types, missing counts, and shape before starting any data analysis",
      "Combine numerical metrics (mean, median, std, skewness) with visual charts (histograms, box plots) for thorough univariate exploration",
      "Use median and IQR for skewed distributions, reserving mean and standard deviation for symmetric continuous features",
      "Check cross-tabulations and GroupBy aggregations to discover subtle category segment differences",
      "Visualize correlation matrices using Seaborn heatmaps with numerical text annotations (annot=True)",
      "Remember that correlation measures association—never infer causality without experimental domain validation",
      "Audit feature sets for Data Leakage to ensure target information is not inadvertently exposed",
      "Structure EDA findings into a clean, reproducible 14-part technical report with actionable recommendations"
    ],
    "commonMistakes": [
      "Jumping directly to Machine Learning model training without exploring dataset quality and distributions",
      "Relying solely on overall averages, which obscure skewness, multi-modal peaks, and segment differences",
      "Ignoring missing value patterns or dropping incomplete rows without evaluating missingness proportion",
      "Automatically deleting outliers without investigating whether they represent genuine high-value business cases",
      "Confusing Pearson correlation (linear) with Spearman rank correlation (monotonic)",
      "Creating dozens of arbitrary charts without linking them to specific analytical questions or business goals"
    ],
    "practiceExercise": {
      "instructions": "Conduct an end-to-end Exploratory Data Analysis on a 10-column customer sales dataset in Python.",
      "tasks": [
        "1. Inspect dataset dimensions, data types, missing value percentages, and total duplicate records.",
        "2. Perform univariate analysis on Income and Spending using histograms with overlaid KDE curves and box plots.",
        "3. Generate a cross-tabulation table between Customer Region and Purchase Category with row proportions.",
        "4. Calculate Pearson correlation matrix across all numerical features and plot an annotated heatmap.",
        "5. Flag potential Spending outliers using the IQR method (Q1 - 1.5*IQR, Q3 + 1.5*IQR) and summarize findings."
      ]
    },
    "keyTakeaways": [
      "EDA is an investigative process combining descriptive statistics, visualization, and domain knowledge to understand data.",
      "Univariate analysis explores single feature distributions, Bivariate compares pairs, and Multivariate evaluates multi-feature interactions.",
      "Correlation heatmaps quickly highlight strong feature associations, while IQR and Z-scores locate potential outliers.",
      "EDA identifies data quality issues, missing values, duplicates, and data leakage before Machine Learning modeling.",
      "The ultimate objective of EDA is converting raw data observations into validated, actionable business insights."
    ],
    "references": [
      {
        "title": "Pandas User Guide — Exploratory Data Analysis",
        "url": "https://pandas.pydata.org/docs/user_guide/index.html"
      },
      {
        "title": "Seaborn Data Visualization Gallery",
        "url": "https://seaborn.pydata.org/examples/index.html"
      }
    ]
  }
},
  {
  "id": "ds-mod-9",
  "title": "Module 09 — Machine Learning Fundamentals & Scikit-Learn",
  "description": "Machine Learning workflow, train/test splitting, estimator API syntax, baseline models, and fit/predict paradigms.",
  "completed": false,
  "order": 9,
  "published": true,
  "readingMaterial": {
    "introduction": "Machine Learning (ML) is a subfield of Artificial Intelligence that enables computers to learn patterns from data and make predictions or decisions without explicit rule programming. Scikit-Learn provides a standard Python library with a clean, consistent Estimator API for preprocessing, train/test splitting, baseline benchmarking, model training using fit(), prediction via predict(), cross-validation, and pipeline automation.",
    "objectives": [
      "Differentiate Traditional Rule-Based Programming from Machine Learning data-driven paradigms",
      "Categorize ML problems into Supervised Learning (Regression vs Classification), Unsupervised Learning (Clustering, Dimensionality Reduction), and Reinforcement Learning",
      "Extract feature matrix X and target vector y from raw tabular datasets",
      "Master train/test splitting using Scikit-Learn train_test_split() with stratified sampling for imbalanced classes",
      "Understand Scikit-Learn's Estimator API lifecycle: fit(), predict(), transform(), and fit_transform()",
      "Establish baseline reference benchmarks using DummyClassifier and DummyRegressor",
      "Train and evaluate Linear Regression (MAE, MSE, R²) and Logistic Regression (Accuracy, Precision, Recall, F1-score, Confusion Matrix)",
      "Diagnose Overfitting vs Underfitting, navigate the Bias-Variance trade-off, and build reproducible Scikit-Learn Pipelines and ColumnTransformers"
    ],
    "sections": [
      {
        "heading": "1 - 5. Overview, Objectives & ML Paradigms",
        "text": "Machine Learning shifts programming from explicit rules (Input + Rules -> Output) to data-driven pattern discovery (Input + Output -> Learning Algorithm -> Model -> Predictions). ML is categorized into Supervised Learning (predicting continuous numerical target Y via Regression or discrete category label via Classification), Unsupervised Learning (clustering, pattern discovery without Y), and Reinforcement Learning (agent-environment interaction).",
        "table": {
          "headers": [
            "ML Paradigm",
            "Target Variable (y)",
            "Primary Goal",
            "Example Algorithms"
          ],
          "rows": [
            [
              "Supervised: Regression",
              "Continuous Numerical (Price, Sales)",
              "Predict continuous numerical value",
              "Linear Regression, Ridge, DecisionTreeRegressor"
            ],
            [
              "Supervised: Classification",
              "Discrete Categorical (Spam/Not Spam)",
              "Predict class label or probability",
              "Logistic Regression, DecisionTreeClassifier, Random Forest"
            ],
            [
              "Unsupervised Learning",
              "None (Unlabeled dataset)",
              "Discover hidden patterns & clusters",
              "K-Means, DBSCAN, PCA, Agglomerative Clustering"
            ],
            [
              "Reinforcement Learning",
              "Reward Signals",
              "Optimize sequential decision-making",
              "Q-Learning, Deep Q-Networks (DQN), PPO"
            ]
          ]
        }
      },
      {
        "heading": "6 - 9. The End-to-End ML Workflow & Feature/Target Matrix Setup",
        "text": "The ML workflow follows a disciplined pipeline: Problem Definition -> Data Collection -> EDA -> Data Preprocessing -> Feature/Target Extraction -> Train/Test Split -> Baseline Model -> Candidate Training -> Evaluation -> Hyperparameter Tuning -> Final Deployment. Features (X) comprise input variables, while Target (y) represents the outcome column."
      },
      {
        "heading": "10 - 15. Scikit-Learn Architecture & The Unified Estimator API",
        "text": "Scikit-Learn (`sklearn`) provides a standardized Estimator API across all algorithms. The lifecycle follows four primary methods: 1) Instantiate `model = Model()`, 2) Train model parameters using `model.fit(X_train, y_train)`, 3) Generate predictions via `predictions = model.predict(X_test)`, and 4) Transform features using `scaler.transform(X_test)` or `fit_transform()`. Preprocessing scalers and encoders MUST be fitted ONLY on training data to prevent data leakage."
      },
      {
        "heading": "16 - 22. Dataset Splitting, Validation & Stratified Sampling",
        "text": "Separate datasets using `train_test_split(X, y, test_size=0.2, random_state=42)`. Use `random_state` to ensure reproducible data splits. For classification problems—especially with imbalanced class distributions—pass `stratify=y` to preserve identical class proportions across training (80%) and testing (20%) subsets."
      },
      {
        "heading": "23 - 25. Establishing Baseline Models: Dummy Classifiers & Regressors",
        "text": "Before evaluating complex ML models, establish a simple baseline to set performance minimums. Scikit-Learn provides `DummyRegressor(strategy='mean')` (predicting training mean) and `DummyClassifier(strategy='most_frequent')` (predicting majority class). Complex algorithms must significantly outperform baselines to justify model complexity.",
        "table": {
          "headers": [
            "Baseline Estimator",
            "Strategy Parameter",
            "Baseline Prediction Behavior",
            "Benchmarking Use Case"
          ],
          "rows": [
            [
              "DummyRegressor",
              "strategy='mean'",
              "Predicts training set mean for all samples",
              "Regression baseline for MAE / MSE comparison"
            ],
            [
              "DummyRegressor",
              "strategy='median'",
              "Predicts training set median for all samples",
              "Regression baseline robust to target outliers"
            ],
            [
              "DummyClassifier",
              "strategy='most_frequent'",
              "Predicts majority class for all samples",
              "Classification baseline for accuracy comparison"
            ],
            [
              "DummyClassifier",
              "strategy='stratified'",
              "Generates random predictions following class distribution",
              "Classification baseline for imbalanced targets"
            ]
          ]
        }
      },
      {
        "heading": "26 - 30. Regression & Classification Evaluation Metrics",
        "text": "Evaluate Regression using Mean Absolute Error (MAE = Σ|y - y_hat| / n), Mean Squared Error (MSE = Σ(y - y_hat)² / n), and R² Score (R² = 1 - SS_res / SS_tot). Evaluate Classification using Accuracy, Precision (TP / (TP + FP)), Recall (TP / (TP + FN)), F1-Score (2 * Precision * Recall / (Precision + Recall)), and Confusion Matrix."
      },
      {
        "heading": "31 - 34. Overfitting, Underfitting & The Bias-Variance Trade-Off",
        "text": "Overfitting occurs when a model memorizes training noise (High Variance), achieving 99% training accuracy but failing on test data (70% test accuracy). Underfitting occurs when a model is too simplistic to capture patterns (High Bias), performing poorly on both sets. Generalization measures how accurately a model predicts unseen test data."
      },
      {
        "heading": "35 - 40. Preprocessing Pipelines & ColumnTransformers",
        "text": "Features require scaling and encoding. Standardize numerical features via `StandardScaler()` ($Z = \frac{x - mu}{sigma}$). One-hot encode categorical features via `OneHotEncoder(handle_unknown='ignore')`. Combine numerical and categorical preprocessing using `ColumnTransformer` and build end-to-end reproducible pipelines using `sklearn.pipeline.Pipeline`."
      },
      {
        "heading": "41 - 48. Cross-Validation, Hyperparameter Tuning & Residual Error Analysis",
        "text": "Model parameters (weights, coefficients) are learned during `fit()`, whereas Hyperparameters (tree depth, regularization alpha, number of neighbors) are set before training. Estimate model performance using K-Fold Cross-Validation (`cross_val_score(cv=5)`). Tune hyperparameters using `GridSearchCV` or `RandomizedSearchCV`. Conduct residual error analysis ($e_i = y_i - hat{y}_i$) to diagnose systematic model flaws."
      },
      {
        "heading": "49 - 59. End-to-End Architecture, Best Practices & Mini-Project",
        "text": "Build production-ready ML pipelines following the architecture: Data Preparation -> EDA -> Feature Engineering -> Train/Test Split -> Baseline -> Pipeline Construction -> Fit -> Predict -> Cross-Validation -> Hyperparameter Tuning -> Deployment. Complete the Customer Churn Prediction mini-project using Logistic Regression, Decision Trees, and Random Forests."
      }
    ],
    "codeExamples": [
      {
        "title": "1. End-to-End Classification Pipeline with ColumnTransformer & Scikit-Learn",
        "code": "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report, confusion_matrix\n\n# Sample Customer Churn Dataset\nnp.random.seed(42)\ndata = {\n    \"Age\": np.random.randint(18, 65, 200),\n    \"Income\": np.random.normal(55000, 15000, 200),\n    \"Tenure\": np.random.randint(1, 10, 200),\n    \"ContractType\": np.random.choice([\"Month-to-Month\", \"One-Year\", \"Two-Year\"], 200),\n    \"Churn\": np.random.choice([0, 1], 200, p=[0.75, 0.25])\n}\ndf = pd.DataFrame(data)\n\n# 1. Feature & Target Extraction\nX = df[[\"Age\", \"Income\", \"Tenure\", \"ContractType\"]]\ny = df[\"Churn\"]\n\n# 2. Stratified Train/Test Split\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\n\n# 3. ColumnTransformer for Numerical & Categorical Features\nnum_features = [\"Age\", \"Income\", \"Tenure\"]\ncat_features = [\"ContractType\"]\n\npreprocessor = ColumnTransformer([\n    (\"num\", StandardScaler(), num_features),\n    (\"cat\", OneHotEncoder(handle_unknown=\"ignore\"), cat_features)\n])\n\n# 4. Pipeline Construction\nclf = Pipeline([\n    (\"preprocessor\", preprocessor),\n    (\"classifier\", LogisticRegression(max_iter=1000))\n])\n\n# 5. Fit, Predict & Evaluate\nclf.fit(X_train, y_train)\ny_pred = clf.predict(X_test)\n\nprint(f\"Test Accuracy: {accuracy_score(y_test, y_pred):.4f}\")\nprint(\"\\nClassification Report:\\n\", classification_report(y_test, y_pred))\nprint(\"Confusion Matrix:\\n\", confusion_matrix(y_test, y_pred))",
        "explanation": "Constructs a robust Scikit-Learn classification pipeline using ColumnTransformer for mixed-type features, fitting scaling and encoding on training data only."
      },
      {
        "title": "2. Linear Regression Workflow & Model Evaluation Metrics",
        "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\n\n# Sample House Price Dataset\nnp.random.seed(42)\nX_data = np.random.rand(100, 3) * 100 # SqFt, Bedrooms, Age\ny_data = X_data[:, 0] * 300 + X_data[:, 1] * 5000 - X_data[:, 2] * 200 + np.random.randn(100) * 5000\n\nX_train, X_test, y_train, y_test = train_test_split(X_data, y_data, test_size=0.2, random_state=42)\n\n# Train Linear Regression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\n\n# Calculate Metrics\nmae = mean_absolute_error(y_test, y_pred)\nmse = mean_squared_error(y_test, y_pred)\nr2 = r2_score(y_test, y_pred)\n\nprint(f\"Linear Regression Evaluation:\")\nprint(f\"MAE: ₹{mae:.2f}\")\nprint(f\"MSE: {mse:.2f}\")\nprint(f\"R² Score: {r2:.4f}\")",
        "explanation": "Demonstrates the fit/predict workflow for continuous target regression and evaluates model performance using MAE, MSE, and R² score."
      }
    ],
    "bestPractices": [
      "Always define problem type (Regression vs Classification) and establish a baseline model before training complex algorithms",
      "Split dataset into training and testing sets BEFORE fitting any scaling, encoding, or feature transformation steps",
      "Use stratified sampling (stratify=y) in train_test_split for classification problems with imbalanced targets",
      "Fit scalers (StandardScaler) and encoders (OneHotEncoder) on X_train ONLY, applying learned transforms to X_test",
      "Use Scikit-Learn Pipelines and ColumnTransformers to prevent data leakage and maintain clean, reproducible workflows",
      "Select evaluation metrics aligned with business outcomes (e.g. Recall for medical diagnosis/churn, Precision for spam detection)",
      "Diagnose overfitting by comparing training set performance against cross-validation and test set performance",
      "Perform error analysis on prediction residuals (y - y_hat) to discover systematic model weaknesses"
    ],
    "commonMistakes": [
      "Fitting feature scalers or imputers on the ENTIRE dataset before train/test split, causing severe Data Leakage",
      "Evaluating models on the exact same dataset used for training, leading to deceptively high accuracy scores",
      "Ignoring class imbalance and relying solely on accuracy for classification problems",
      "Failing to establish a baseline model (DummyClassifier / DummyRegressor) to benchmark algorithm improvements",
      "Repeatedly tuning hyperparameters against the test set instead of using K-Fold Cross-Validation",
      "Confusing model parameters (learned weights) with model hyperparameters (set prior to fit)"
    ],
    "practiceExercise": {
      "instructions": "Build a complete Scikit-Learn classification workflow for Customer Churn prediction in Python.",
      "tasks": [
        "1. Extract feature matrix X (Age, Income, Tenure, Support_Calls) and target vector y (Churn).",
        "2. Split dataset into 80% training and 20% testing sets using train_test_split with stratify=y and random_state=42.",
        "3. Instantiate a DummyClassifier baseline (strategy='most_frequent') and compute baseline test accuracy.",
        "4. Construct a Scikit-Learn Pipeline combining StandardScaler and LogisticRegression(max_iter=1000).",
        "5. Fit the pipeline on X_train, predict on X_test, and print Classification Report, Confusion Matrix, and ROC-AUC score."
      ]
    },
    "keyTakeaways": [
      "Machine Learning shifts development from explicit manual rules to data-driven learning algorithms.",
      "Scikit-Learn provides a uniform Estimator API pattern across all algorithms: Instantiate -> fit() -> predict().",
      "Train/Test splitting isolates unseen test data, while Stratified Sampling preserves class proportions.",
      "Baseline models (DummyClassifier, DummyRegressor) establish mandatory performance minimums.",
      "Pipelines and ColumnTransformers automate feature scaling, categorical encoding, and model fitting cleanly without data leakage."
    ],
    "references": [
      {
        "title": "Scikit-Learn Official User Guide",
        "url": "https://scikit-learn.org/stable/user_guide.html"
      },
      {
        "title": "Scikit-Learn API Reference",
        "url": "https://scikit-learn.org/stable/modules/classes.html"
      }
    ]
  }
},
  {
  "id": "ds-mod-10",
  "title": "Module 10 — Linear & Ridge/Lasso Regression",
  "description": "Simple and multiple linear regression, cost functions (MSE/RMSE), gradient descent, and L1/L2 regularization (Lasso & Ridge).",
  "completed": false,
  "order": 10,
  "published": true,
  "readingMaterial": {
    "introduction": "Regression is a foundational supervised Machine Learning technique for predicting continuous numerical values (such as house prices, sales revenue, customer spend, and delivery times). This module explores Simple Linear Regression, Multiple Linear Regression, Cost Functions (MSE, RMSE, MAE), Gradient Descent optimization, Normal Equations, and Regularization techniques (Ridge L2, Lasso L1, and Elastic Net) to control model complexity and prevent overfitting.",
    "objectives": [
      "Understand the difference between Supervised Classification (discrete categories) and Regression (continuous continuous target outputs)",
      "Formulate Simple Linear Regression (y = β₀ + β₁x) and Multiple Linear Regression (y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ)",
      "Interpret Intercepts (β₀), Slopes/Coefficients (β₁), and calculate Prediction Residual Errors (eᵢ = yᵢ - ŷᵢ)",
      "Quantify prediction loss using Mean Squared Error (MSE), Root Mean Squared Error (RMSE), and Mean Absolute Error (MAE)",
      "Understand Gradient Descent optimization, Learning Rate α tuning, Batch/Stochastic/Mini-Batch variants, and Analytical Normal Equations",
      "Diagnose Multicollinearity and Overfitting in Linear Regression models",
      "Apply L2 Regularization (Ridge Regression) to shrink coefficients and stabilize correlated features",
      "Apply L1 Regularization (Lasso Regression) to enforce sparsity and perform automated feature selection",
      "Build reproducible Scikit-Learn Pipelines with StandardScaler and cross-validated alpha selection (RidgeCV, LassoCV, ElasticNet)"
    ],
    "sections": [
      {
        "heading": "1 - 4. Overview, Objectives & Classification vs Regression",
        "text": "Regression predicts continuous numerical outputs (e.g. Price, Temperature, Revenue) whereas Classification predicts discrete categorical labels (e.g. Spam/Ham, Churn/No Churn). Regression constructs a fitting hyper-plane through continuous feature space.",
        "table": {
          "headers": [
            "ML Task",
            "Target Data Type",
            "Output Example",
            "Evaluation Metrics",
            "Common Algorithms"
          ],
          "rows": [
            [
              "Regression",
              "Continuous Numerical",
              "House Price (₹75,00,000), Delivery Time (28.5 mins)",
              "MSE, RMSE, MAE, R² Score",
              "Linear Regression, Ridge, Lasso, ElasticNet"
            ],
            [
              "Classification",
              "Discrete Categorical",
              "Customer Churn (Yes/No), Email (Spam/Ham)",
              "Accuracy, Precision, Recall, F1, ROC-AUC",
              "Logistic Regression, Decision Trees, Random Forest"
            ]
          ]
        }
      },
      {
        "heading": "5 - 11. Simple & Multiple Linear Regression Equations & Matrix Formulation",
        "text": "Simple Linear Regression models target y with a single feature x: y = β₀ + β₁x. Intercept β₀ represents the baseline output when x=0, while Slope β₁ represents the change in y per unit increase in x. Multiple Linear Regression incorporates n features: y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ. In matrix notation: Y = Xβ + ε."
      },
      {
        "heading": "12 - 19. Prediction Residuals, Loss Functions (MSE, RMSE, MAE) & R²",
        "text": "Residual eᵢ = yᵢ - ŷᵢ is the difference between observed and predicted values. Cost functions quantify overall model error. Mean Squared Error MSE = (1/n) Σ(yᵢ - ŷᵢ)² squares errors to penalize larger deviations. RMSE = √MSE restores original target units. Mean Absolute Error MAE = (1/n) Σ|yᵢ - ŷᵢ| provides an un-squared linear average error. R² Score measures proportion of variance explained.",
        "table": {
          "headers": [
            "Regression Loss / Metric",
            "Mathematical Formula",
            "Unit of Measurement",
            "Sensitivity to Outliers"
          ],
          "rows": [
            [
              "Mean Squared Error (MSE)",
              "MSE = (1/n) Σ (yᵢ - ŷᵢ)²",
              "Squared Target Units (₹²)",
              "Very High (squared penalty on large errors)"
            ],
            [
              "Root Mean Squared Error (RMSE)",
              "RMSE = √MSE",
              "Original Target Units (₹)",
              "High (directly reflects MSE penalty in original scale)"
            ],
            [
              "Mean Absolute Error (MAE)",
              "MAE = (1/n) Σ |yᵢ - ŷᵢ|",
              "Original Target Units (₹)",
              "Moderate (linear penalty without squaring)"
            ],
            [
              "Coefficient of Determination (R²)",
              "R² = 1 - (SS_res / SS_tot)",
              "Dimensionless Ratio [0.0 to 1.0]",
              "Dependent on underlying residual sum of squares"
            ]
          ]
        }
      },
      {
        "heading": "20 - 25. Optimization: Gradient Descent & Normal Equation",
        "text": "Gradient Descent updates parameters iteratively in the opposite direction of the loss gradient: θ := θ - α (∂J/∂θ). Learning Rate α dictates step size: too small leads to slow convergence; too large causes overshooting. Batch GD uses all samples, Stochastic GD uses 1 sample per step, and Mini-Batch GD uses small batches. Analytical Ordinary Least Squares calculates β = (XᵀX)⁻¹XᵀY."
      },
      {
        "heading": "26 - 30. Overfitting & L2 Regularization (Ridge Regression)",
        "text": "Complex linear models with many features risk overfitting training noise. Regularization adds a complexity penalty to the cost function: Loss = MSE + Penalty. L2 Regularization (Ridge Regression) adds penalized squared coefficients: Loss = MSE + λ Σ βⱼ². Ridge shrinks coefficients toward zero without setting them strictly to zero, stabilizing models against multicollinearity."
      },
      {
        "heading": "31 - 36. L1 Regularization (Lasso Regression) & Feature Selection",
        "text": "L1 Regularization (Lasso Regression) adds absolute coefficient penalties: Loss = MSE + λ Σ |βⱼ|. Unlike Ridge, Lasso can shrink uninformative feature coefficients EXACTLY to zero (βⱼ = 0), performing automated feature selection. Regularization strength is controlled by `alpha` in Scikit-Learn.",
        "table": {
          "headers": [
            "Regularization Feature",
            "L2 Regularization (Ridge)",
            "L1 Regularization (Lasso)",
            "Elastic Net"
          ],
          "rows": [
            [
              "Penalty Term",
              "λ Σ βⱼ² (Squared magnitudes)",
              "λ Σ |βⱼ| (Absolute magnitudes)",
              "r·λ Σ |βⱼ| + ((1-r)/2)·λ Σ βⱼ²"
            ],
            [
              "Coefficient Effect",
              "Shrinks coefficients smoothly toward zero",
              "Drives uninformative coefficients exactly to 0",
              "Combines feature selection & smooth shrinkage"
            ],
            [
              "Sparsity (Zero Weights)",
              "No (retains all features with small weights)",
              "Yes (produces sparse models)",
              "Yes (if L1 ratio > 0)"
            ],
            [
              "Handling Multicollinearity",
              "Excellent (distributes weights across correlated features)",
              "Selects one feature arbitrarily from correlated group",
              "Robust balance across correlated groups"
            ],
            [
              "Scikit-Learn Class",
              "from sklearn.linear_model import Ridge",
              "from sklearn.linear_model import Lasso",
              "from sklearn.linear_model import ElasticNet"
            ]
          ]
        }
      },
      {
        "heading": "37 - 40. Feature Scaling, Elastic Net & Hyperparameter Tuning",
        "text": "Feature scaling (`StandardScaler`) is MANDATORY before Ridge, Lasso, or Elastic Net regularization because unscaled features with large ranges face unequal penalties. Elastic Net combines L1 and L2 penalties via `l1_ratio`. Select optimal alpha using cross-validation classes: `RidgeCV`, `LassoCV`, and `ElasticNetCV`."
      },
      {
        "heading": "41 - 48. Multicollinearity, Bias-Variance Balance & Residual Analysis",
        "text": "Multicollinearity occurs when predictors are highly correlated, causing unstable standard errors. Ridge regression resolves multicollinearity. Regularization balances the Bias-Variance trade-off by introducing slight bias to achieve substantial variance reduction. Inspect residual plots (eᵢ vs ŷᵢ) to verify constant variance (homoscedasticity) and linearity."
      },
      {
        "heading": "49 - 56. Best Practices, Mini-Project & Module Summary",
        "text": "Build robust regression models: scale features in Pipelines, tune alpha via cross-validation, evaluate MAE/RMSE/R² metrics, analyze residuals, and compare Linear, Ridge, and Lasso baselines on real-world datasets."
      }
    ],
    "codeExamples": [
      {
        "title": "1. Linear, Ridge, Lasso & ElasticNet Benchmarking Pipeline",
        "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\n\n# Generate Synthetic Dataset\nnp.random.seed(42)\nX_raw = np.random.rand(150, 5) * 100\ny_raw = 15*X_raw[:, 0] + 0.5*X_raw[:, 1] - 5*X_raw[:, 2] + np.random.randn(150)*10\n\nX_train, X_test, y_train, y_test = train_test_split(X_raw, y_raw, test_size=0.2, random_state=42)\n\nmodels = {\n    \"Linear Regression\": LinearRegression(),\n    \"Ridge (L2, α=1.0)\": Ridge(alpha=1.0),\n    \"Lasso (L1, α=0.1)\": Lasso(alpha=0.1),\n    \"ElasticNet (α=0.1, l1=0.5)\": ElasticNet(alpha=0.1, l1_ratio=0.5)\n}\n\nresults = []\nfor name, model in models.items():\n    pipe = Pipeline([(\"scaler\", StandardScaler()), (\"reg\", model)])\n    pipe.fit(X_train, y_train)\n    y_pred = pipe.predict(X_test)\n    \n    mae = mean_absolute_error(y_test, y_pred)\n    rmse = mean_squared_error(y_test, y_pred) ** 0.5\n    r2 = r2_score(y_test, y_pred)\n    results.append({\"Model\": name, \"MAE\": mae, \"RMSE\": rmse, \"R²\": r2})\n\nresults_df = pd.DataFrame(results)\nprint(\"Regression Model Comparison:\\n\", results_df.to_string(index=False))",
        "explanation": "Builds a comparative Scikit-Learn regression pipeline benchmarking Ordinary Linear Regression, Ridge, Lasso, and ElasticNet with standardized feature scaling."
      },
      {
        "title": "2. Cross-Validated Regularization Strength Tuning (RidgeCV & LassoCV)",
        "code": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.linear_model import RidgeCV, LassoCV\n\n# Generate sample dataset\nnp.random.seed(42)\nX_sample = np.random.randn(100, 10)\ny_sample = 3 * X_sample[:, 0] - 2 * X_sample[:, 1] + np.random.randn(100) * 0.5\n\nX_train, X_test, y_train, y_test = train_test_split(X_sample, y_sample, test_size=0.2, random_state=42)\n\n# 1. RidgeCV Alpha Search\nalphas = np.logspace(-3, 3, 50)\nridge_cv = make_pipeline(StandardScaler(), RidgeCV(alphas=alphas, cv=5))\nridge_cv.fit(X_train, y_train)\n\n# 2. LassoCV Alpha Search\nlasso_cv = make_pipeline(StandardScaler(), LassoCV(alphas=alphas, cv=5, random_state=42))\nlasso_cv.fit(X_train, y_train)\n\nprint(f\"Optimal Ridge Alpha: {ridge_cv.named_steps['ridgecv'].alpha_:.4f}\")\nprint(f\"Optimal Lasso Alpha: {lasso_cv.named_steps['lassocv'].alpha_:.4f}\")",
        "explanation": "Automatically finds optimal L1 and L2 regularization strength parameters (alpha) using 5-fold cross-validation classes RidgeCV and LassoCV."
      }
    ],
    "bestPractices": [
      "Always standard scale numerical features (StandardScaler) inside a Pipeline before fitting Ridge, Lasso, or Elastic Net regularized models",
      "Evaluate regression models using multiple metrics: MAE for linear scale error, RMSE to detect large outliers, and R² for variance explained",
      "Tune regularization hyperparameter `alpha` using cross-validation (RidgeCV / LassoCV) rather than selecting values arbitrarily",
      "Use Lasso regression when feature selection is desired, as L1 regularization zero-weights uninformative predictors",
      "Use Ridge regression when dealing with correlated features (multicollinearity) to shrink coefficients smoothly",
      "Inspect prediction residual distribution plots (residuals vs predicted values) to check for non-linearity or heteroscedasticity",
      "Never compute preprocessing transformations on the entire dataset prior to train/test split to prevent data leakage",
      "Do not interpret regression coefficients as causal mechanisms without rigorous experimental domain validation"
    ],
    "commonMistakes": [
      "Fitting regularized models (Ridge/Lasso) on unscaled features, resulting in unequal penalty application",
      "Relying exclusively on R² score while ignoring MAE, RMSE, or high residual variance",
      "Assuming high multicollinearity ruins prediction accuracy—it destabilizes individual coefficient interpretation, which Ridge resolves",
      "Arbitrarily choosing alpha parameters without cross-validation tuning",
      "Confusing L1 regularization (Lasso absolute penalty) with L2 regularization (Ridge squared penalty)",
      "Evaluating models on training data instead of held-out test data"
    ],
    "practiceExercise": {
      "instructions": "Build, evaluate, and compare Linear, Ridge, and Lasso Regression models on a House Price dataset in Python.",
      "tasks": [
        "1. Extract continuous numerical features (Area, Bedrooms, Bathrooms, Age, Distance) and target variable (Price).",
        "2. Perform train/test split (80% train, 20% test, random_state=42).",
        "3. Construct a Scikit-Learn Pipeline combining StandardScaler and Ordinary LinearRegression.",
        "4. Train RidgeCV and LassoCV pipelines with 5-fold cross-validation across alphas = np.logspace(-3, 3, 50).",
        "5. Compare MAE, RMSE, and R² metrics across Linear, Ridge, and Lasso models on the held-out test set."
      ]
    },
    "keyTakeaways": [
      "Linear Regression models continuous numerical outputs by fitting an optimal straight line/hyperplane minimizing residual sum of squares.",
      "MSE and RMSE penalize large errors heavily due to squaring, while MAE offers an un-squared linear error metric.",
      "Gradient Descent optimizes model weights iteratively, while the Normal Equation solves parameters analytically.",
      "Ridge Regression (L2 penalty λ Σ βⱼ²) shrinks weights smoothly to handle multicollinearity and prevent overfitting.",
      "Lasso Regression (L1 penalty λ Σ |βⱼ|) forces uninformative weights to zero, providing built-in feature selection."
    ],
    "references": [
      {
        "title": "Scikit-Learn Linear Models Documentation",
        "url": "https://scikit-learn.org/stable/modules/linear_model.html"
      },
      {
        "title": "An Introduction to Statistical Learning (ISLR) — Linear & Regularized Regression",
        "url": "https://www.statlearning.com/"
      }
    ]
  }
},
  {
  "id": "ds-mod-11",
  "title": "Module 11 — Classification Algorithms",
  "description": "Logistic Regression, Decision Trees, Random Forests, K-Nearest Neighbors (KNN), Support Vector Machines (SVM), and Naive Bayes.",
  "completed": false,
  "order": 11,
  "published": true,
  "readingMaterial": {
    "introduction": "Classification is a fundamental Supervised Machine Learning task used to predict discrete category labels (such as Spam vs Legitimate, Churn vs Retained, or Disease vs Healthy). This module explores six core classification algorithms: Logistic Regression, Decision Trees, Random Forests, K-Nearest Neighbors (KNN), Support Vector Machines (SVM), and Naive Bayes. Learners will master mathematical decision boundaries, probability estimation, distance metrics, kernel tricks, and multi-metric evaluation.",
    "objectives": [
      "Distinguish Classification (predicting discrete category labels) from Regression (predicting continuous numerical outputs)",
      "Categorize classification tasks into Binary, Multiclass, and Multilabel problem structures",
      "Formulate Logistic Regression using the Sigmoid activation function σ(z) = 1 / (1 + e⁻ᶻ) and probability decision thresholds",
      "Build Decision Tree classifiers using Gini Impurity and Entropy split criteria while controlling tree depth to prevent overfitting",
      "Apply Ensemble Learning via Random Forests (Bootstrap Aggregation / Bagging) and evaluate Gini Feature Importance",
      "Implement distance-based classification using K-Nearest Neighbors (KNN) and standard scaling for Euclidean space",
      "Construct Support Vector Machines (SVM) using max-margin hyperplanes, soft-margin C penalties, and non-linear RBF kernel tricks",
      "Apply Naive Bayes classifiers (Gaussian, Multinomial, Bernoulli) using Bayes' Theorem and conditional feature independence",
      "Evaluate classifiers using Confusion Matrices, Accuracy, Precision, Recall, F1-Score, ROC-AUC, and Precision-Recall curves"
    ],
    "sections": [
      {
        "heading": "1 - 5. Overview, Objectives & Classification Paradigms",
        "text": "Classification models map input features X to discrete categorical targets Y. Binary Classification handles 2 classes (Spam/Not Spam), Multiclass handles 3+ mutually exclusive classes (Cat/Dog/Bird), and Multilabel permits multiple simultaneous tags per sample (Genre tags).",
        "table": {
          "headers": [
            "Classification Problem Type",
            "Target Class Structure",
            "Example Application",
            "Output Format"
          ],
          "rows": [
            [
              "Binary Classification",
              "2 Mutually Exclusive Classes (0 vs 1)",
              "Email Spam Filter, Credit Fraud Detection",
              "Single probability score / binary class"
            ],
            [
              "Multiclass Classification",
              "3+ Mutually Exclusive Classes",
              "Handwritten Digit Recognition (0-9)",
              "Softmax probability distribution over N classes"
            ],
            [
              "Multilabel Classification",
              "Multiple Non-Exclusive Tags",
              "Article Topic Tagging (Tech, AI, Politics)",
              "Multi-hot binary indicator array"
            ]
          ]
        }
      },
      {
        "heading": "6 - 11. Logistic Regression & Sigmoid Probability Mapping",
        "text": "Logistic Regression maps continuous linear combinations z = β₀ + Σ βⱼxⱼ into probability scores between 0.0 and 1.0 using the Sigmoid/Logistic function: σ(z) = 1 / (1 + e⁻ᶻ). Convert probabilities to predictions using a threshold (default 0.5): p ≥ 0.5 -> Class 1. Predict probabilities via `predict_proba()`."
      },
      {
        "heading": "12 - 18. Decision Trees: Impurity Split Criteria & Overfitting Control",
        "text": "Decision Trees partition feature space recursively using decision rules. Node purity is measured via Gini Impurity (1 - Σ pₖ²) or Entropy (-Σ pₖ log₂ pₖ). Prevent overfitting by pruning tree depth using `max_depth`, `min_samples_split`, and `min_samples_leaf`."
      },
      {
        "heading": "19 - 23. Random Forests & Ensemble Feature Importance",
        "text": "Random Forest is a Bootstrap Aggregated (Bagged) ensemble of Decision Trees. Randomness is introduced via bootstrap row sampling and random feature subset selection at each split. Trees vote on final predictions, drastically reducing single-tree variance. Extract `feature_importances_` to identify dominant features."
      },
      {
        "heading": "24 - 29. K-Nearest Neighbors (KNN) & Distance Metric Scaling",
        "text": "KNN classifies samples based on majority voting among the K nearest training samples in feature space using Euclidean Distance: d = √(Σ (xᵢ - yᵢ)²). Feature scaling (`StandardScaler`) is MANDATORY to prevent high-magnitude features from dominating distances. Choose K via cross-validation."
      },
      {
        "heading": "30 - 36. Support Vector Machines (SVM), Margins & Kernel Tricks",
        "text": "SVM constructs an optimal maximum-margin hyperplane wᵀx + b = 0 separating classes. Support Vectors are boundary points defining margin width. Soft-margin parameter `C` controls misclassification penalties. Non-linear classification projects features into higher dimensions using Kernel tricks: RBF K(x, y) = exp(-γ ||x - y||²), Polynomial, and Linear.",
        "table": {
          "headers": [
            "Classifier Algorithm",
            "Core Mathematical Mechanism",
            "Feature Scaling Needed?",
            "Best Use Case Scenario"
          ],
          "rows": [
            [
              "Logistic Regression",
              "Sigmoid curve probability mapping",
              "Yes (for gradient convergence & regularization)",
              "Linearly separable binary/multiclass problems with probabilities"
            ],
            [
              "Decision Tree",
              "Recursive feature splitting via Gini/Entropy",
              "No (scale-invariant tree splits)",
              "Interpretable rule-based non-linear classification"
            ],
            [
              "Random Forest",
              "Ensemble majority voting over bagged trees",
              "No (scale-invariant tree splits)",
              "High-dimensional tabular datasets with non-linear feature interactions"
            ],
            [
              "K-Nearest Neighbors (KNN)",
              "K-majority voting over Euclidean distance",
              "Yes (CRITICAL for distance calculations)",
              "Small to medium low-noise datasets"
            ],
            [
              "Support Vector Machine (SVM)",
              "Max-margin hyperplane with RBF kernels",
              "Yes (CRITICAL for margin calculation)",
              "Complex high-dimensional non-linear boundaries"
            ],
            [
              "Naive Bayes",
              "Bayes' theorem with conditional independence",
              "No (for GaussianNB/MultinomialNB)",
              "Text classification, spam filters, fast probabilistic baselines"
            ]
          ]
        }
      },
      {
        "heading": "37 - 41. Naive Bayes Classifiers & Bayes' Theorem",
        "text": "Naive Bayes applies Bayes' Theorem: P(Y|X) = [P(X|Y)P(Y)] / P(X), assuming conditional independence among features given class Y. Use `GaussianNB` for continuous numerical features, `MultinomialNB` for term frequencies, and `BernoulliNB` for binary feature indicators."
      },
      {
        "heading": "42 - 56. Classification Metrics: Confusion Matrix, Precision, Recall, F1 & ROC-AUC",
        "text": "Do NOT rely solely on Accuracy for imbalanced datasets! Build Confusion Matrices (TP, TN, FP - Type I error, FN - Type II error). Calculate Precision = TP / (TP + FP) (minimizing false positives), Recall = TP / (TP + FN) (minimizing false negatives), and F1-Score = 2 * (P * R) / (P + R). Summarize ranking using ROC-AUC curves.",
        "table": {
          "headers": [
            "Evaluation Metric",
            "Mathematical Formula",
            "Primary Focus",
            "Optimal Business Use Case"
          ],
          "rows": [
            [
              "Accuracy",
              "(TP + TN) / Total",
              "Overall correct prediction ratio",
              "Balanced class distributions"
            ],
            [
              "Precision",
              "TP / (TP + FP)",
              "Minimizing False Positives (FP)",
              "Spam detection, loan approval (avoid false alarms)"
            ],
            [
              "Recall (Sensitivity)",
              "TP / (TP + FN)",
              "Minimizing False Negatives (FN)",
              "Medical diagnosis, fraud detection (avoid missing positive cases)"
            ],
            [
              "F1-Score",
              "2 · (Precision · Recall) / (Precision + Recall)",
              "Harmonic mean of Precision & Recall",
              "Imbalanced datasets requiring balanced precision/recall"
            ],
            [
              "ROC-AUC Score",
              "Area under True Positive Rate vs False Positive Rate",
              "Threshold-independent ranking capability",
              "Comprehensive classifier ranking evaluation"
            ]
          ]
        }
      },
      {
        "heading": "57 - 70. Algorithm Selection, Pipelines, Mini-Project & Summary",
        "text": "Select classifiers based on data scale, non-linearity, and interpretability. Build end-to-end Scikit-Learn Pipelines with `ColumnTransformer`, execute 5-fold cross-validation, tune hyperparameters via `GridSearchCV`, and complete the 6-algorithm Customer Churn benchmarking mini-project."
      }
    ],
    "codeExamples": [
      {
        "title": "1. 6-Algorithm Classification Benchmarking Pipeline",
        "code": "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.naive_bayes import GaussianNB\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score\n\n# Generate Synthetic Dataset\nnp.random.seed(42)\nX_raw = np.random.randn(200, 4)\ny_raw = (X_raw[:, 0] + X_raw[:, 1]*0.5 > 0).astype(int)\n\nX_train, X_test, y_train, y_test = train_test_split(X_raw, y_raw, test_size=0.2, random_state=42, stratify=y_raw)\n\nclassifiers = {\n    \"Logistic Regression\": LogisticRegression(),\n    \"Decision Tree\": DecisionTreeClassifier(max_depth=5, random_state=42),\n    \"Random Forest\": RandomForestClassifier(n_estimators=100, random_state=42),\n    \"KNN (K=5)\": KNeighborsClassifier(n_neighbors=5),\n    \"SVM (RBF Kernel)\": SVC(kernel=\"rbf\", probability=True),\n    \"Naive Bayes\": GaussianNB()\n}\n\nresults = []\nfor name, clf in classifiers.items():\n    pipe = Pipeline([(\"scaler\", StandardScaler()), (\"model\", clf)])\n    pipe.fit(X_train, y_train)\n    y_pred = pipe.predict(X_test)\n    \n    results.append({\n        \"Algorithm\": name,\n        \"Accuracy\": accuracy_score(y_test, y_pred),\n        \"Precision\": precision_score(y_test, y_pred, zero_division=0),\n        \"Recall\": recall_score(y_test, y_pred, zero_division=0),\n        \"F1-Score\": f1_score(y_test, y_pred, zero_division=0)\n    })\n\nresults_df = pd.DataFrame(results)\nprint(\"Classifier Performance Benchmarking:\\n\", results_df.to_string(index=False))",
        "explanation": "Constructs a unified Scikit-Learn evaluation pipeline comparing 6 core classification algorithms across Accuracy, Precision, Recall, and F1-score."
      },
      {
        "title": "2. Random Forest GridSearchCV & Classification Report",
        "code": "from sklearn.model_selection import GridSearchCV, train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import classification_report, confusion_matrix\nimport numpy as np\n\nnp.random.seed(42)\nX_data = np.random.randn(150, 5)\ny_data = np.random.choice([0, 1], 150, p=[0.7, 0.3])\n\nX_train, X_test, y_train, y_test = train_test_split(X_data, y_data, test_size=0.2, random_state=42, stratify=y_data)\n\nparam_grid = {\n    \"n_estimators\": [50, 100],\n    \"max_depth\": [3, 5, None],\n    \"min_samples_split\": [2, 5]\n}\n\ngrid_search = GridSearchCV(\n    RandomForestClassifier(random_state=42),\n    param_grid,\n    cv=5,\n    scoring=\"f1\"\n)\ngrid_search.fit(X_train, y_train)\n\nbest_rf = grid_search.best_estimator_\ny_pred = best_rf.predict(X_test)\n\nprint(\"Best Parameters:\", grid_search.best_params_)\nprint(\"\\nClassification Report:\\n\", classification_report(y_test, y_pred))\nprint(\"Confusion Matrix:\\n\", confusion_matrix(y_test, y_pred))",
        "explanation": "Tunes Random Forest hyperparameters via 5-fold cross-validated GridSearchCV optimizing for F1-score and prints detailed metric summaries."
      }
    ],
    "bestPractices": [
      "Never rely on accuracy alone for imbalanced datasets—evaluate Precision, Recall, F1-Score, and Confusion Matrices",
      "Apply StandardScaler before fitting distance-based classifiers (KNN, SVM) and gradient-based models (Logistic Regression)",
      "Prune Decision Trees using `max_depth` and `min_samples_leaf` to prevent overfitting high-variance training noise",
      "Use Random Forest ensembles to capture complex non-linear feature interactions without manual scaling",
      "Optimize decision thresholds based on business domain costs (e.g. lower threshold to boost Recall for medical diagnosis)",
      "Fit all feature scalers and encoders on X_train ONLY before transforming X_test inside Scikit-Learn Pipelines",
      "Tune model hyperparameters using K-Fold Cross-Validation (`GridSearchCV` / `RandomizedSearchCV`)",
      "Evaluate ROC-AUC scores for threshold-independent classifier ranking performance"
    ],
    "commonMistakes": [
      "Evaluating imbalanced classification models using accuracy alone, which masks total failure on minority classes",
      "Fitting KNN or SVM classifiers without scaling continuous features first, allowing large-scale variables to distort distances",
      "Allowing Decision Trees to grow infinitely deep, resulting in severe training set overfitting",
      "Confusing Precision (minimizing false positives) with Recall (minimizing false negatives)",
      "Fitting preprocessing scalers on the entire dataset prior to train/test split, causing severe Data Leakage",
      "Ignoring feature correlation when interpreting Logistic Regression coefficients"
    ],
    "practiceExercise": {
      "instructions": "Train, evaluate, and compare 6 classification algorithms on a Customer Churn dataset in Python.",
      "tasks": [
        "1. Extract customer features (Age, Tenure, MonthlySpend, SupportCalls) and target binary class (Churn: 0/1).",
        "2. Perform stratified 80/20 train/test split (`stratify=y`, `random_state=42`).",
        "3. Construct Scikit-Learn Pipelines for Logistic Regression, Decision Tree, Random Forest, KNN, SVM, and Naive Bayes.",
        "4. Train all 6 models on X_train and generate predictions on held-out X_test.",
        "5. Compile a comparison table of Accuracy, Precision, Recall, F1-Score, and plot Confusion Matrices for the top 2 models."
      ]
    },
    "keyTakeaways": [
      "Classification models map continuous/categorical inputs to discrete target class predictions.",
      "Logistic Regression estimates class probabilities using the Sigmoid curve: σ(z) = 1 / (1 + e⁻ᶻ).",
      "Decision Trees split feature space recursively using Gini Impurity, while Random Forests ensemble multiple trees to reduce variance.",
      "KNN relies on Euclidean distance voting (requiring scaling), while SVM maximizes hyperplane decision margins.",
      "Evaluate classifiers using Precision, Recall, F1-Score, and Confusion Matrices to handle imbalanced real-world targets effectively."
    ],
    "references": [
      {
        "title": "Scikit-Learn Supervised Classification Documentation",
        "url": "https://scikit-learn.org/stable/supervised_learning.html"
      },
      {
        "title": "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron",
        "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/"
      }
    ]
  }
},
  {
  "id": "ds-mod-12",
  "title": "Module 12 — Unsupervised Learning & Clustering",
  "description": "K-Means clustering, Hierarchical clustering, DBSCAN, and Dimensionality Reduction using Principal Component Analysis (PCA).",
  "completed": false,
  "order": 12,
  "published": true,
  "readingMaterial": {
    "introduction": "Unsupervised Learning discovers inherent patterns, hidden groupings, and structures in unlabeled datasets without target labels. This module explores four fundamental algorithms: K-Means Clustering, Hierarchical Agglomerative Clustering, Density-Based Spatial Clustering of Applications with Noise (DBSCAN), and Principal Component Analysis (PCA) for dimensionality reduction.",
    "objectives": [
      "Distinguish Supervised Learning (labeled targets) from Unsupervised Learning (unlabeled structure discovery)",
      "Calculate Euclidean distance metrics and apply mandatory feature scaling (StandardScaler) for distance-based clustering",
      "Partition data into K distinct clusters using K-Means centroids, Inertia loss optimization, and prediction methods",
      "Determine optimal cluster count K using the Elbow Method (Inertia curve inflection) and Silhouette Score analysis",
      "Construct Hierarchical Agglomerative Clusters, evaluate Linkage methods (Ward, Complete, Average, Single), and plot Dendrograms",
      "Perform Density-Based Spatial Clustering (DBSCAN) to identify arbitrary-shaped clusters and noise/outlier points without specifying K",
      "Understand Principal Component Analysis (PCA) mathematically: Covariance matrices, Eigenvalues, Eigenvectors, and Explained Variance Ratios",
      "Reduce high-dimensional feature spaces for 2D/3D visualization and build hybrid PCA + K-Means clustering pipelines"
    ],
    "sections": [
      {
        "heading": "1 - 5. Overview, Objectives & Supervised vs Unsupervised Learning",
        "text": "Unsupervised Learning processes unlabeled datasets X to discover underlying distribution structures. The primary tasks are Clustering (partitioning samples into cohesive groups) and Dimensionality Reduction (compressing feature dimensions while preserving variance).",
        "table": {
          "headers": [
            "Task Dimension",
            "Supervised Learning",
            "Unsupervised Learning"
          ],
          "rows": [
            [
              "Dataset Requirement",
              "Features X + Target Labels Y",
              "Features X only (Unlabeled)"
            ],
            [
              "Primary Goal",
              "Learn predictive mapping function f(X) -> Y",
              "Discover hidden groupings, density & variance patterns"
            ],
            [
              "Core Tasks",
              "Classification & Regression",
              "Clustering & Dimensionality Reduction"
            ],
            [
              "Evaluation Metric",
              "Accuracy, Precision, Recall, MAE, MSE, R²",
              "Silhouette Score, Inertia, Explained Variance, Domain Validation"
            ],
            [
              "Primary Algorithms",
              "Linear/Logistic Regression, Trees, Random Forest, SVM",
              "K-Means, Agglomerative Clustering, DBSCAN, PCA"
            ]
          ]
        }
      },
      {
        "heading": "6 - 9. Distance Metrics, Similarity & Mandatory Feature Scaling",
        "text": "Clustering algorithms rely on distance metrics such as Euclidean Distance: d(A, B) = √(Σ (xᵢ - yᵢ)²). Features with large numerical ranges (e.g. Income ₹50,000 vs Age 30) will dominate distance calculations. Feature scaling (`StandardScaler` Z = (x - μ) / σ) is MANDATORY before clustering."
      },
      {
        "heading": "10 - 15. K-Means Clustering: Centroids, Within-Cluster Loss & Inference",
        "text": "K-Means partitions data into K clusters by minimizing Within-Cluster Sum of Squares (Inertia Loss): J = Σ Σ ||xᵢ - μₖ||². The algorithm iteratively: 1) Initializes K centroids, 2) Assigns points to nearest centroid, 3) Updates centroids to cluster means, until convergence."
      },
      {
        "heading": "16 - 22. Selecting K: Elbow Method, Silhouette Score & K-Means Limits",
        "text": "Select optimal cluster count K using the Elbow Method (locating the inflection point on an Inertia vs K plot) and Silhouette Score s(i) = [b(i) - a(i)] / max(a(i), b(i)), which measures cohesion vs separation between -1.0 and +1.0. K-Means assumes spherical clusters of equal size."
      },
      {
        "heading": "23 - 30. Hierarchical Agglomerative Clustering & Dendrograms",
        "text": "Hierarchical Agglomerative Clustering merges nearby points bottom-up into a cluster tree (Dendrogram). Linkage criteria define cluster distance: Ward (minimizes within-cluster variance increase), Complete (maximum pairwise distance), Average (mean distance), and Single (minimum distance)."
      },
      {
        "heading": "31 - 37. DBSCAN: Density-Based Clustering & Noise Detection",
        "text": "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups dense regions defined by radius `eps` and `min_samples`. It categorizes points as Core Points (dense centers), Border Points (cluster edges), or Noise Points (-1 label, outliers). DBSCAN finds arbitrary cluster shapes without specifying K.",
        "table": {
          "headers": [
            "Algorithm",
            "Requires Cluster Count K?",
            "Cluster Shape Capability",
            "Outlier / Noise Handling",
            "Scikit-Learn Class"
          ],
          "rows": [
            [
              "K-Means",
              "Yes (Specified beforehand)",
              "Spherical / Convex clusters only",
              "Poor (forces outliers into nearest centroid)",
              "from sklearn.cluster import KMeans"
            ],
            [
              "Hierarchical",
              "Optional (Dendrogram linkage cut)",
              "Hierarchical / Multi-level nested groups",
              "Moderate (isolated branches)",
              "from sklearn.cluster import AgglomerativeClustering"
            ],
            [
              "DBSCAN",
              "No (Discovers cluster count automatically)",
              "Arbitrary / Non-convex dense shapes",
              "Excellent (flags sparse points as Noise = -1)",
              "from sklearn.cluster import DBSCAN"
            ]
          ]
        }
      },
      {
        "heading": "38 - 47. Principal Component Analysis (PCA) & Explained Variance",
        "text": "PCA reduces feature dimensions by transforming correlated features into orthogonal Principal Components ordered by variance captured. PCA computes Covariance Matrix Σ, Eigenvalues λᵢ, and Eigenvectors. Cumulative Explained Variance Ratio determines components retaining desired variance (e.g. 95%)."
      },
      {
        "heading": "48 - 61. Hybrid PCA + Clustering Pipelines, Applications & Summary",
        "text": "Combine PCA feature compression with K-Means clustering for customer segmentation. Evaluate clusters using Silhouette Scores, analyze segment centroids, and build end-to-end unsupervised pipelines in Scikit-Learn."
      }
    ],
    "codeExamples": [
      {
        "title": "1. K-Means Elbow Method & Silhouette Analysis Pipeline",
        "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\n\n# Generate Synthetic Customer Data\nnp.random.seed(42)\nX_raw = np.random.randn(300, 4) * 100 + [50, 50000, 5, 200]\n\n# 1. Mandatory Scaling\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X_raw)\n\n# 2. Elbow Method & Silhouette Evaluation\ninertias = []\nsilhouette_scores = []\nK_range = range(2, 8)\n\nfor k in K_range:\n    kmeans = KMeans(n_clusters=k, random_state=42, n_init=\"auto\")\n    labels = kmeans.fit_predict(X_scaled)\n    inertias.append(kmeans.inertia_)\n    silhouette_scores.append(silhouette_score(X_scaled, labels))\n\nfor k, inertia, sil in zip(K_range, inertias, silhouette_scores):\n    print(f\"K={k}: Inertia={inertia:.2f}, Silhouette Score={sil:.4f}\")",
        "explanation": "Scales features using StandardScaler, executes K-Means across cluster range K=2..7, and computes Inertia and Silhouette scores to select optimal clusters."
      },
      {
        "title": "2. Hybrid PCA Dimensionality Reduction + K-Means Pipeline",
        "code": "import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nfrom sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\n\n# Generate High-Dimensional Dataset\nnp.random.seed(42)\nX_high = np.random.randn(200, 10)\n\n# 1. Scale & Apply PCA\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X_high)\n\npca = PCA(n_components=0.95) # Retain 95% variance\nX_pca = pca.fit_transform(X_scaled)\n\nprint(f\"Original Dimensions: {X_high.shape[1]}\")\nprint(f\"PCA Reduced Dimensions: {X_pca.shape[1]}\")\nprint(\"Explained Variance Ratio per Component:\", pca.explained_variance_ratio_)\nprint(f\"Total Cumulative Variance: {sum(pca.explained_variance_ratio_):.4f}\")\n\n# 2. Fit K-Means on PCA Components\nkmeans = KMeans(n_clusters=3, random_state=42, n_init=\"auto\")\ncluster_labels = kmeans.fit_predict(X_pca)\nscore = silhouette_score(X_pca, cluster_labels)\nprint(f\"Silhouette Score on PCA Reduced Space: {score:.4f}\")",
        "explanation": "Standardizes high-dimensional inputs, applies PCA to preserve 95% total variance, fits K-Means clustering on principal components, and evaluates Silhouette performance."
      }
    ],
    "bestPractices": [
      "Always apply StandardScaler to continuous numerical features prior to distance-based clustering (K-Means, Hierarchical, DBSCAN) or variance-based PCA",
      "Combine the Elbow Method (Inertia inflection) with Silhouette Scores (cohesion vs separation) to evaluate optimal cluster count K",
      "Use DBSCAN when cluster shapes are non-convex, density varies, or explicit noise/outlier detection (-1 label) is required",
      "Examine Cumulative Explained Variance Ratios when selecting the number of PCA principal components (e.g. retaining 95% total variance)",
      "Standardize features before fitting PCA because PCA is variance-seeking and unscaled large-range variables distort principal components",
      "Validate discovered clusters by calculating group feature means (`df.groupby('Cluster').mean()`) to extract meaningful domain segments",
      "Be cautious when using PCA before clustering, as PCA maximizes overall variance rather than cluster separation",
      "Never compute preprocessing transformations on test sets when evaluating supervised downstream tasks following unsupervised feature reduction"
    ],
    "commonMistakes": [
      "Fitting K-Means or DBSCAN on unscaled features, allowing high-magnitude variables to dominate Euclidean distance calculations",
      "Assuming K-Means can discover non-spherical or crescent-shaped clusters—use DBSCAN or Spectral Clustering instead",
      "Arbitrarily choosing K without checking Inertia Elbow curves or Silhouette Scores",
      "Applying PCA without standardizing features first, resulting in principal components dominated by raw feature scale rather than true variance",
      "Treating cluster ID numbers (0, 1, 2) as ordered continuous metrics in downstream supervised models"
    ],
    "practiceExercise": {
      "instructions": "Build an end-to-end Customer Segmentation and Dimensionality Reduction pipeline using PCA and K-Means in Python.",
      "tasks": [
        "1. Load 5 customer features (Age, Income, SpendingScore, OrderFrequency, AvgOrderValue) and standardize using StandardScaler.",
        "2. Calculate Inertia and Silhouette Scores for K-Means across K = 2 to 8 to identify optimal customer segments.",
        "3. Fit PCA preserving 90% cumulative variance and transform feature matrix into principal components.",
        "4. Train K-Means (n_clusters=4) on PCA-transformed components and append cluster assignments to DataFrame.",
        "5. Calculate group feature means per cluster (`df.groupby('Cluster').mean()`) and define business segment profiles."
      ]
    },
    "keyTakeaways": [
      "Unsupervised Learning discovers inherent patterns, cluster groupings, and feature structures from unlabeled data.",
      "K-Means partitions data into K clusters around centroids by minimizing Within-Cluster Sum of Squares (Inertia).",
      "Hierarchical Agglomerative Clustering builds bottom-up Dendrogram trees, while DBSCAN groups dense regions and flags Noise (-1).",
      "PCA transforms correlated features into orthogonal Principal Components ordered by Explained Variance Ratio.",
      "Feature scaling (StandardScaler) is mandatory before distance-based clustering and variance-seeking PCA."
    ],
    "references": [
      {
        "title": "Scikit-Learn Clustering Documentation",
        "url": "https://scikit-learn.org/stable/modules/clustering.html"
      },
      {
        "title": "Scikit-Learn Decompositions (PCA) Documentation",
        "url": "https://scikit-learn.org/stable/modules/decomposition.html"
      }
    ]
  }
},
  {
  "id": "ds-mod-13",
  "title": "Module 13 — Model Evaluation Metrics & Validation",
  "description": "Confusion matrix, Accuracy, Precision, Recall, F1-Score, ROC-AUC curve, and k-Fold Cross-Validation strategies.",
  "completed": false,
  "order": 13,
  "published": true,
  "readingMaterial": {
    "introduction": "Evaluating model performance correctly ensures models generalize cleanly to unobserved real-world data rather than simply memorizing training set noise. This module explores classification metric evaluation (Confusion Matrices, Accuracy, Precision, Recall, F1-Score, ROC Curves, AUC), decision threshold tuning, and validation strategies (k-Fold Cross-Validation, Stratified K-Fold, and Data Leakage prevention via Scikit-Learn Pipelines).",
    "objectives": [
      "Distinguish Training Performance from Generalization Performance on held-out test data",
      "Construct and interpret Confusion Matrices: True Positives (TP), True Negatives (TN), False Positives (FP - Type I Error), and False Negatives (FN - Type II Error)",
      "Calculate Accuracy, Precision, Recall (Sensitivity), and F1-Score (Harmonic Mean)",
      "Understand why Accuracy fails on imbalanced datasets and select domain-appropriate metrics",
      "Evaluate classification threshold trade-offs and compute ROC Curves and Area Under Curve (ROC-AUC)",
      "Implement K-Fold Cross-Validation and Stratified K-Fold Cross-Validation using Scikit-Learn `cross_val_score`",
      "Prevent Data Leakage by encapsulating feature scalers and models inside Scikit-Learn Pipelines",
      "Compare multiple candidate classifiers using cross-validated scoring and build reproducible model validation systems"
    ],
    "sections": [
      {
        "heading": "1 - 4. Overview, Objectives & Train/Validation/Test Partitioning",
        "text": "Models must be evaluated on unseen data to quantify generalization. Partition datasets into Training (80% for parameter learning), Validation (for hyperparameter tuning and model selection), and Test sets (held-out final benchmark).",
        "table": {
          "headers": [
            "Dataset Partition",
            "Primary Purpose",
            "Access Frequency During ML Development"
          ],
          "rows": [
            [
              "Training Set",
              "Train model weights and parameters via fit()",
              "Used repeatedly in training loops"
            ],
            [
              "Validation Set",
              "Compare candidate architectures & tune hyperparameters",
              "Used iteratively during model selection / cross-validation"
            ],
            [
              "Held-Out Test Set",
              "Final unbiased estimation of generalization performance",
              "Evaluated ONCE at the end of the project"
            ]
          ]
        }
      },
      {
        "heading": "5 - 7. Classification Prediction Outcomes & The Confusion Matrix",
        "text": "Predictions fall into 4 outcomes: True Positive (TP: Actual=1, Pred=1), True Negative (TN: Actual=0, Pred=0), False Positive (FP: Actual=0, Pred=1, Type I Error), and False Negative (FN: Actual=1, Pred=0, Type II Error). A Confusion Matrix organizes these counts into a 2x2 grid.",
        "table": {
          "headers": [
            "Confusion Matrix Element",
            "Prediction vs Actual Reality",
            "Statistical Error Type",
            "Domain Impact Scenario"
          ],
          "rows": [
            [
              "True Positive (TP)",
              "Predicted Positive, Actually Positive",
              "Correct Classification",
              "Correctly flagged fraud transaction"
            ],
            [
              "False Positive (FP)",
              "Predicted Positive, Actually Negative",
              "Type I Error (False Alarm)",
              "Legitimate email sent to Spam folder"
            ],
            [
              "False Negative (FN)",
              "Predicted Negative, Actually Positive",
              "Type II Error (Missed Detection)",
              "Undetected medical condition / missed fraud"
            ],
            [
              "True Negative (TN)",
              "Predicted Negative, Actually Negative",
              "Correct Classification",
              "Normal transaction approved smoothly"
            ]
          ]
        }
      },
      {
        "heading": "8 - 10. Accuracy & The Imbalanced Dataset Trap",
        "text": "Accuracy = (TP + TN) / (TP + TN + FP + FN). Accuracy works well for balanced classes, but is DECEPTIVE for imbalanced datasets (e.g. 99% Negative, 1% Positive). A naive model predicting 0 for all samples achieves 99% accuracy while missing 100% of positive cases."
      },
      {
        "heading": "11 - 18. Precision, Recall, F1-Score & Harmonic Mean Justification",
        "text": "Precision = TP / (TP + FP) measures positive prediction quality (critical when False Positives are costly, e.g. spam filters). Recall = TP / (TP + FN) measures positive coverage (critical when False Negatives are costly, e.g. disease screening). F1-Score = 2 * (Precision * Recall) / (Precision + Recall) combines both metrics using the Harmonic Mean, penalizing extreme imbalances.",
        "table": {
          "headers": [
            "Metric Name",
            "Mathematical Formula",
            "Core Question Answered",
            "Primary Focus Application"
          ],
          "rows": [
            [
              "Accuracy",
              "(TP + TN) / Total",
              "How many total predictions were correct?",
              "Balanced binary / multiclass targets"
            ],
            [
              "Precision",
              "TP / (TP + FP)",
              "Of all positive predictions, how many were true?",
              "Spam filtering, loan approvals (low False Positives)"
            ],
            [
              "Recall (Sensitivity)",
              "TP / (TP + FN)",
              "Of all actual positives, how many were detected?",
              "Medical screening, fraud detection (low False Negatives)"
            ],
            [
              "F1-Score",
              "2 · (Precision · Recall) / (Precision + Recall)",
              "How well are Precision and Recall balanced?",
              "Imbalanced datasets requiring dual optimization"
            ]
          ]
        }
      },
      {
        "heading": "19 - 21. Scikit-Learn Metric Functions & Classification Reports",
        "text": "Scikit-Learn provides `accuracy_score()`, `precision_score()`, `recall_score()`, `f1_score()`, `confusion_matrix()`, and `ConfusionMatrixDisplay()`. The `classification_report()` generates per-class precision, recall, F1, and support counts."
      },
      {
        "heading": "22 - 28. ROC Curve, AUC & Threshold Trade-Offs",
        "text": "The Receiver Operating Characteristic (ROC) curve plots True Positive Rate (TPR = Recall) against False Positive Rate (FPR = FP / (FP + TN)) across varying probability thresholds. Area Under Curve (ROC-AUC) ranges from 0.5 (random chance) to 1.0 (perfect classification). Compute via `roc_auc_score(y_test, y_prob)`."
      },
      {
        "heading": "29 - 31. Classification Thresholds & Precision-Recall Trade-Off",
        "text": "Classifiers output probabilities mapped to classes via a threshold (default 0.50). Lowering the threshold increases Recall (detecting more positive cases) at the cost of lower Precision (more false alarms). Adjust thresholds based on business domain costs."
      },
      {
        "heading": "32 - 39. K-Fold & Stratified K-Fold Cross-Validation",
        "text": "K-Fold Cross-Validation splits training data into K folds, evaluating the model K times so every sample serves as validation once. Mean CV score = (1/K) Σ Sᵢ. Use `StratifiedKFold` for classification to preserve target class proportions across all K folds."
      },
      {
        "heading": "40 - 47. Preventing Data Leakage with Pipelines & Domain Metric Selection",
        "text": "Data Leakage occurs when test/validation data influences training transformations (e.g. standardizing full dataset before splitting). Scikit-Learn `Pipeline` encapsulates preprocessing so fit() operates on training folds only. Match metrics to business objectives: Medical -> Recall, Spam -> Precision, Imbalanced Fraud -> F1 / ROC-AUC."
      },
      {
        "heading": "48 - 55. Mini-Project, Validation Checklist & Summary",
        "text": "Execute multi-metric evaluation across Logistic Regression, Random Forest, and SVM classifiers using 5-fold Stratified Cross-Validation, confusion matrices, ROC curves, and the 13-point model validation checklist."
      }
    ],
    "codeExamples": [
      {
        "title": "1. Comprehensive Classification Evaluation Pipeline (Metrics, Confusion Matrix & ROC-AUC)",
        "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import (\n    accuracy_score, precision_score, recall_score, f1_score,\n    confusion_matrix, ConfusionMatrixDisplay, roc_curve, roc_auc_score, classification_report\n)\n\n# Generate Imbalanced Dataset\nnp.random.seed(42)\nX_raw = np.random.randn(300, 4)\ny_raw = np.random.choice([0, 1], 300, p=[0.8, 0.2]) # 80:20 imbalanced\n\nX_train, X_test, y_train, y_test = train_test_split(X_raw, y_raw, test_size=0.2, random_state=42, stratify=y_raw)\n\n# Scale and Fit Model\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\nmodel = LogisticRegression()\nmodel.fit(X_train_scaled, y_train)\n\ny_pred = model.predict(X_test_scaled)\ny_prob = model.predict_proba(X_test_scaled)[:, 1]\n\n# 1. Print Standard Metrics\nprint(f\"Accuracy:  {accuracy_score(y_test, y_pred):.4f}\")\nprint(f\"Precision: {precision_score(y_test, y_pred, zero_division=0):.4f}\")\nprint(f\"Recall:    {recall_score(y_test, y_pred, zero_division=0):.4f}\")\nprint(f\"F1-Score:  {f1_score(y_test, y_pred, zero_division=0):.4f}\")\nprint(f\"ROC-AUC:   {roc_auc_score(y_test, y_prob):.4f}\")\n\n# 2. Detailed Classification Report\nprint(\"\\nClassification Report:\\n\", classification_report(y_test, y_pred))",
        "explanation": "Computes complete evaluation metrics (Accuracy, Precision, Recall, F1, ROC-AUC) and prints formatted classification reports on held-out test data."
      },
      {
        "title": "2. Stratified 5-Fold Cross-Validation Pipeline Comparison",
        "code": "from sklearn.model_selection import StratifiedKFold, cross_val_score\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.svm import SVC\nimport numpy as np\nimport pandas as pd\n\nnp.random.seed(42)\nX_data = np.random.randn(250, 5)\ny_data = np.random.choice([0, 1], 250, p=[0.75, 0.25])\n\n# Stratified K-Fold setup\nskf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\n\nmodels = {\n    \"Logistic Regression\": LogisticRegression(),\n    \"Random Forest\": RandomForestClassifier(n_estimators=100, random_state=42),\n    \"SVM (RBF)\": SVC(kernel=\"rbf\")\n}\n\nfor name, clf in models.items():\n    pipe = Pipeline([(\"scaler\", StandardScaler()), (\"model\", clf)])\n    scores = cross_val_score(pipe, X_data, y_data, cv=skf, scoring=\"f1\")\n    print(f\"{name:20s} | Mean F1: {scores.mean():.4f} | Std Dev: {scores.std():.4f}\")",
        "explanation": "Evaluates multiple classifiers using Stratified 5-Fold Cross-Validation on F1-score, encapsulating feature scaling inside Pipelines to prevent data leakage."
      }
    ],
    "bestPractices": [
      "Never evaluate classification models on training data alone—always measure performance on held-out test sets or cross-validation folds",
      "Avoid relying exclusively on Accuracy for imbalanced datasets; evaluate Precision, Recall, F1-Score, and ROC-AUC",
      "Use `StratifiedKFold` cross-validation for classification problems to preserve class proportions across all validation folds",
      "Encapsulate preprocessing scalers and classifiers inside Scikit-Learn `Pipeline` objects to prevent data leakage during cross-validation",
      "Select metrics aligned with domain risks: Recall for medical screening/fraud (low FN), Precision for spam/loan approvals (low FP)",
      "Inspect Confusion Matrices (TP, TN, FP, FN) to understand specific error types beyond single scalar metrics",
      "Evaluate ROC-AUC scores using probability predictions (`predict_proba`) for threshold-independent classifier ranking",
      "Keep held-out test sets completely untouched until final model verification after hyperparameter tuning"
    ],
    "commonMistakes": [
      "Reporting 99% accuracy on an imbalanced dataset where the model simply predicts the majority class for all samples",
      "Preprocessing or scaling the entire dataset before train/test splitting, introducing severe Data Leakage",
      "Tuning hyperparameters directly against the held-out test set, causing indirect test set overfitting",
      "Ignoring the Precision-Recall trade-off when adjusting decision thresholds",
      "Confusing Type I errors (False Positives / False Alarms) with Type II errors (False Negatives / Missed Cases)",
      "Using standard K-Fold instead of StratifiedKFold for severely imbalanced classification datasets"
    ],
    "practiceExercise": {
      "instructions": "Perform comprehensive multi-metric evaluation and cross-validation on a Customer Churn classifier in Python.",
      "tasks": [
        "1. Load 5 customer features and binary target (Churn: 0/1) and perform stratified 80/20 train/test split.",
        "2. Train a Logistic Regression model inside a StandardScaler Pipeline.",
        "3. Generate predictions and print Confusion Matrix, Accuracy, Precision, Recall, F1-Score, and ROC-AUC.",
        "4. Plot the ROC Curve showing True Positive Rate vs False Positive Rate across probability thresholds.",
        "5. Execute 5-fold StratifiedKFold cross-validation on the pipeline and compare mean F1-Score against a Random Forest baseline."
      ]
    },
    "keyTakeaways": [
      "Model evaluation measures generalization performance on unseen test data to detect overfitting.",
      "The Confusion Matrix categorizes predictions into True Positives, True Negatives, False Positives (Type I), and False Negatives (Type II).",
      "Precision measures positive prediction quality, Recall measures positive coverage, and F1-Score calculates their harmonic mean.",
      "ROC Curves plot TPR vs FPR, with AUC summarizing ranking capability from 0.5 (random) to 1.0 (perfect).",
      "Stratified K-Fold Cross-Validation and Pipelines ensure reliable, leakage-free performance estimation."
    ],
    "references": [
      {
        "title": "Scikit-Learn Model Evaluation & Metrics Documentation",
        "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
      },
      {
        "title": "Scikit-Learn Cross-Validation Guide",
        "url": "https://scikit-learn.org/stable/modules/cross_validation.html"
      }
    ]
  }
},
  {
                "id": "ds-mod-14",
                "title": "Module 14 — Feature Engineering & Hyperparameter Tuning",
                "description": "One-hot encoding, feature scaling (StandardScaler/MinMaxScaler), feature selection, GridSearch process, and RandomSearch CV.",
                "completed": false,
                "readingMaterial": {
                        "introduction": "Feature engineering transforms raw variables into informative representations that maximize algorithm learning efficiency.",
                        "objectives": [
                                "Encode categorical text features using One-Hot Encoding and Label Encoding",
                                "Standardize and normalize continuous variables with StandardScaler and MinMaxScaler",
                                "Tune model hyper-parameters systematically with GridSearchCV and RandomizedSearchCV"
                        ],
                        "sections": [
                                {
                                        "heading": "Automated Hyperparameter Optimization",
                                        "text": "GridSearchCV evaluates all combinations in a parameter grid across cross-validation folds to pinpoint parameter sets yielding top performance."
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "GridSearchCV Hyperparameter Optimization",
                                        "code": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nparam_grid = {'n_estimators': [10, 50, 100], 'max_depth': [3, 5, 10]}\ngrid = GridSearchCV(RandomForestClassifier(), param_grid, cv=3)\ngrid.fit(X, y)\nprint(\"Best Parameters Found:\", grid.best_params_)",
                                        "explanation": "Searches parameter grid to identify optimal number of estimators and tree depth."
                                }
                        ],
                        "bestPractices": [
                                "Build Scikit-Learn Pipelines to bundle preprocessors and model estimators cleanly."
                        ],
                        "commonMistakes": [
                                "Scaling continuous variables before running categorical One-Hot Encoding."
                        ],
                        "practiceExercise": {
                                "title": "One-Hot Encode Pandas Column",
                                "problem": "Use pd.get_dummies() to create dummy binary columns for a categorical column.",
                                "solutionCode": "pd.get_dummies(df, columns=['Category'])"
                        },
                        "keyTakeaways": [
                                "Feature engineering and parameter tuning provide the largest accuracy gains in Machine Learning competitions."
                        ],
                        "references": [
                                {
                                        "title": "Scikit-Learn Pipeline & Feature Union",
                                        "url": "https://scikit-learn.org/stable/modules/compose.html"
                                }
                        ]
                }
        },
        {
                "id": "ds-mod-15",
                "title": "Module 15 — Introduction to AI Applications & LLMs",
                "description": "Overview of Artificial Intelligence, Deep Learning basics, Neural Networks, Transformers, Large Language Models (LLMs), and Prompt Engineering.",
                "completed": false,
                "readingMaterial": {
                        "introduction": "Modern Artificial Intelligence extends statistical Machine Learning with Artificial Neural Networks, Deep Learning architectures, and Transformer models.",
                        "objectives": [
                                "Understand Perceptrons, Neural Network Layers, Activation Functions (ReLU, Softmax), and Backpropagation",
                                "Learn Transformer Attention Mechanisms powering modern LLMs (GPT, Gemini, Claude)",
                                "Master Prompt Engineering techniques: Few-shot prompting, Chain-of-Thought, and RAG architectures"
                        ],
                        "sections": [
                                {
                                        "heading": "The Transformer Architecture Revolution",
                                        "text": "Introduced in 2017 ('Attention Is All You Need'), Transformers utilize self-attention mechanisms to process text tokens in parallel, replacing sequential RNNs."
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "Calling AI Inference API in Python",
                                        "code": "import json\n# Conceptual representation of AI prompt execution\ndef call_llm(prompt):\n    return f\"AI Response to: '{prompt}' -> Structured Data Analysis Complete!\"\nprint(call_llm(\"Summarize customer churn key drivers\"))",
                                        "explanation": "Demonstrates sending prompt query to Large Language Model API."
                                }
                        ],
                        "bestPractices": [
                                "Give clear role, context, instructions, and output format constraints when writing prompts."
                        ],
                        "commonMistakes": [
                                "Expecting Generative AI models to perform precise mathematical calculations without tool calling."
                        ],
                        "practiceExercise": {
                                "title": "Design Few-Shot Prompt",
                                "problem": "Write a structured prompt template containing 2 input-output examples for sentiment analysis.",
                                "solutionCode": "prompt = \"Classify sentiment:\\nInput: Great product -> Sentiment: Positive\\nInput: Slow shipping -> Sentiment: Negative\\nInput: Works okay -> Sentiment:\""
                        },
                        "keyTakeaways": [
                                "Generative AI and LLMs empower Data Scientists to process unstructured text, audio, and vision at scale."
                        ],
                        "references": [
                                {
                                        "title": "Attention Is All You Need Paper",
                                        "url": "https://arxiv.org/abs/1706.03762"
                                }
                        ]
                }
        },
        {
                "id": "ds-mod-16",
                "title": "Module 16 — AI Data Science Capstone Project",
                "description": "Comprehensive end-to-end AI project combining data ingestion, cleaning, EDA, model training, hyperparameter tuning, evaluation, and deployment.",
                "completed": false,
                "readingMaterial": {
                        "introduction": "The Capstone Project synthesizes all skills acquired across the Boot Camp into a production-grade end-to-end Machine Learning system.",
                        "objectives": [
                                "Ingest and inspect real-world multi-table business dataset",
                                "Perform data cleaning, feature engineering, and exploratory visual analysis",
                                "Train multiple ML classification/regression algorithms and tune hyperparameters",
                                "Package final model into a REST API endpoint for production inference"
                        ],
                        "sections": [
                                {
                                        "heading": "Capstone Workflow Milestones",
                                        "text": "Phase 1: Problem Definition & Data Wrangling -> Phase 2: EDA & Feature Pipeline -> Phase 3: Model Benchmarking & Selection -> Phase 4: Model Evaluation & Reporting."
                                }
                        ],
                        "codeExamples": [
                                {
                                        "title": "Saving Fitted Model Artifact with Joblib",
                                        "code": "import joblib\nfrom sklearn.ensemble import RandomForestClassifier\nimport numpy as np\nX = np.random.randn(100, 4)\ny = np.random.randint(0, 2, 100)\nmodel = RandomForestClassifier().fit(X, y)\njoblib.dump(model, 'ai_churn_model.pkl')\nprint(\"Model successfully saved to ai_churn_model.pkl!\")",
                                        "explanation": "Serializes trained model weights into a binary joblib file for API deployment."
                                }
                        ],
                        "bestPractices": [
                                "Version control data preprocessing transformers alongside model weight binaries."
                        ],
                        "commonMistakes": [
                                "Failing to monitor deployed models for data drift and prediction degradation over time."
                        ],
                        "practiceExercise": {
                                "title": "Load Joblib Model",
                                "problem": "Load the saved binary model using joblib.load('ai_churn_model.pkl') and run predict().",
                                "solutionCode": "import joblib; loaded_model = joblib.load('ai_churn_model.pkl'); loaded_model.predict(X_new)"
                        },
                        "keyTakeaways": [
                                "Completing the Capstone demonstrates full-stack Data Science and AI engineering competency."
                        ],
                        "references": [
                                {
                                        "title": "Joblib Persistence Documentation",
                                        "url": "https://joblib.readthedocs.io/"
                                }
                        ]
                }
        }
],
    finalTest: {
      id: "ds-final-test",
      title: "Data Science & AI Specialist Certification Exam",
      description: "Testing statistical modeling, feature engineering, classification evaluation metrics, and hyperparameter tuning.",
      passingScore: 80,
      timeLimitMinutes: 45,
      maxAttempts: 2,
      published: true,
      questions: [
        {
          id: "dst1",
          type: "multiple-choice",
          questionText: "What metric is best suited for imbalanced classification tasks?",
          options: ["Accuracy", "F1-Score / ROC-AUC", "Mean Squared Error", "R-squared"],
          correctAnswer: 1,
          marks: 20
        }
      ]
    },
    finalProject: {
      id: "ds-final-project",
      title: "Customer Churn Prediction & Model Deployment",
      description: "Build an end-to-end Machine Learning pipeline to predict customer churn using Pandas, Scikit-Learn, and FastAPI.",
      requirements: ["Exploratory Data Analysis notebook", "Feature engineering & preprocessing", "Model training (Random Forest/XGBoost)", "Evaluation report"],
      instructions: "Submit Jupyter Notebook (.ipynb) and GitHub repository.",
      allowedFileTypes: [".ipynb", ".zip", ".pdf"],
      maxFileSizeMb: 50,
      githubUrlAllowed: true,
      liveProjectUrlAllowed: true,
      passingScore: 80,
      published: true
    }
  }
];

const initialStudents = [
  {
    id: "std-001",
    name: "Arshith Kumar",
    email: "arshith@arshithbootcamp.com",
    role: "student",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    joinDate: "2026-01-15T00:00:00.000Z",
    lastActivity: "2026-10-01T14:20:00.000Z",
    enrolledCourses: ["python-programming", "sql-mastery", "web-development", "data-science-ai"],
    progressMap: {
      "python-programming": { progress: 47, completedModules: ["py-mod-1", "py-mod-2"], quizzesPassed: ["py-quiz-1", "py-quiz-2"], finalTestPassed: false, projectStatus: "Not Submitted" },
      "sql-mastery": { progress: 100, completedModules: ["sql-mod-1"], quizzesPassed: ["sql-quiz-1"], finalTestPassed: true, projectStatus: "Approved" },
      "web-development": { progress: 20, completedModules: ["web-mod-1"], quizzesPassed: ["web-quiz-1"], finalTestPassed: false, projectStatus: "Not Submitted" },
      "data-science-ai": { progress: 0, completedModules: [], quizzesPassed: [], finalTestPassed: false, projectStatus: "Not Submitted" }
    }
  },
  {
    id: "std-002",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    role: "student",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    joinDate: "2026-02-10T00:00:00.000Z",
    lastActivity: "2026-09-28T10:15:00.000Z",
    enrolledCourses: ["python-programming", "web-development"],
    progressMap: {
      "python-programming": { progress: 80, completedModules: ["py-mod-1", "py-mod-2"], quizzesPassed: ["py-quiz-1", "py-quiz-2"], finalTestPassed: true, projectStatus: "Submitted" },
      "web-development": { progress: 60, completedModules: ["web-mod-1"], quizzesPassed: ["web-quiz-1"], finalTestPassed: false, projectStatus: "Not Submitted" }
    }
  },
  {
    id: "std-003",
    name: "Rahul Verma",
    email: "rahul.v@example.com",
    role: "student",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    joinDate: "2026-03-01T00:00:00.000Z",
    lastActivity: "2026-09-30T16:45:00.000Z",
    enrolledCourses: ["sql-mastery"],
    progressMap: {
      "sql-mastery": { progress: 100, completedModules: ["sql-mod-1"], quizzesPassed: ["sql-quiz-1"], finalTestPassed: true, projectStatus: "Approved" }
    }
  }
];

const initialCertificates = [
  {
    id: "ABC-2026-PY0128",
    certificateId: "ABC-2026-PY0128",
    studentId: "std-001",
    studentName: "Arshith Kumar",
    studentEmail: "arshith@arshithbootcamp.com",
    courseId: "python-programming",
    courseTitle: "Python Programming",
    issueDate: "October 1, 2026",
    createdAt: "2026-10-01T10:00:00.000Z",
    instructorName: "Dr. Ananya Sharma",
    grade: "98% Distinction",
    status: "active",
    skills: ["Python 3", "OOP", "File I/O", "SQLite", "Automation"]
  },
  {
    id: "ARB-SQL-2026-000102",
    certificateId: "ARB-SQL-2026-000102",
    studentId: "std-003",
    studentName: "Rahul Verma",
    studentEmail: "rahul.v@example.com",
    courseId: "sql-mastery",
    courseTitle: "SQL & Relational Databases",
    issueDate: "September 30, 2026",
    createdAt: "2026-09-30T16:00:00.000Z",
    instructorName: "Rohan Varma",
    grade: "95% Distinction",
    status: "active",
    skills: ["SQL", "PostgreSQL", "Database Design", "Joins"]
  }
];

const initialProjectSubmissions = [
  {
    id: "sub-001",
    studentId: "std-002",
    studentName: "Priya Sharma",
    courseId: "python-programming",
    courseTitle: "Python Programming",
    projectTitle: "Automated Log Parser & Database Analytics Suite",
    status: "Submitted",
    githubUrl: "https://github.com/priyasharma/python-log-parser",
    liveProjectUrl: "https://log-parser-demo.streamlit.app",
    screenshots: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"],
    submittedAt: "2026-09-29T14:30:00.000Z",
    score: null,
    feedback: "",
    history: [
      { status: "Submitted", timestamp: "2026-09-29T14:30:00.000Z", note: "Initial submission by student" }
    ]
  },
  {
    id: "sub-002",
    studentId: "std-001",
    studentName: "Arshith Kumar",
    courseId: "sql-mastery",
    courseTitle: "SQL & Relational Databases",
    projectTitle: "E-Commerce Relational Database Design & Query Suite",
    status: "Approved",
    githubUrl: "https://github.com/arshithkumar/ecommerce-sql-db",
    liveProjectUrl: "",
    screenshots: ["https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80"],
    submittedAt: "2026-09-25T11:00:00.000Z",
    score: 95,
    feedback: "Excellent schema design with complete 3NF normalization and optimized index creation.",
    reviewedAt: "2026-09-26T09:15:00.000Z",
    history: [
      { status: "Submitted", timestamp: "2026-09-25T11:00:00.000Z", note: "Initial submission by student" },
      { status: "Approved", timestamp: "2026-09-26T09:15:00.000Z", note: "Approved with score 95/100" }
    ]
  }
];

const initialActivityLogs = [
  {
    id: "log-001",
    adminId: "ARB-ADMIN-001",
    action: "ADMIN_LOGIN",
    target: "Admin Portal",
    details: "Successful administrator authentication",
    timestamp: "2026-10-01T15:00:00.000Z",
    ipAddress: "127.0.0.1",
    device: "Windows Desktop Chrome"
  },
  {
    id: "log-002",
    adminId: "ARB-ADMIN-001",
    action: "CERTIFICATE_GENERATED",
    target: "Certificate ABC-2026-PY0128",
    details: "Issued Python Programming certificate to Arshith Kumar",
    timestamp: "2026-10-01T10:00:00.000Z",
    ipAddress: "127.0.0.1",
    device: "Windows Desktop Chrome"
  }
];

const dbData = {
  admin: initialAdmin,
  courses: initialCourses,
  students: initialStudents,
  certificates: initialCertificates,
  projectSubmissions: initialProjectSubmissions,
  activityLogs: initialActivityLogs
};

fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf-8');
console.log('Database successfully seeded at:', DB_FILE);

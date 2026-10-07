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
      id: "py-final-test",
      title: "Python Programming Final Certification Exam",
      description: "Comprehensive exam testing computer architecture, variables, conditionals, functions, data structures, and SQLite integration.",
      passingScore: 80,
      timeLimitMinutes: 45,
      maxAttempts: 2,
      published: true,
      questions: [
        {
          id: "ft1",
          type: "multiple-choice",
          questionText: "Which keyword is used to define a custom function in Python?",
          options: ["func", "function", "def", "define"],
          correctAnswer: 2,
          marks: 20
        },
        {
          id: "ft2",
          type: "multiple-choice",
          questionText: "What data structure uses key-value pairs in Python?",
          options: ["List", "Tuple", "Dictionary", "Set"],
          correctAnswer: 2,
          marks: 20
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
        id: "web-mod-1",
        title: "Module 01 — Modern HTML5 & CSS3 Architecture",
        description: "Semantic HTML tags, CSS Flexbox, Grid, CSS Variables, and Mobile-First Responsive Design.",
        completed: true,
        order: 1,
        published: true,
        readingMaterial: {
          introduction: "HTML5 and CSS3 form the foundational presentation tier of the web.",
          objectives: ["Understand semantic HTML tags", "Master CSS Flexbox and Grid"],
          sections: [{ heading: "Flexbox Layout", text: "Flexbox provides 1D alignment along main and cross axes." }],
          codeExamples: [{ title: "Flex Center", code: "display: flex; justify-content: center; align-items: center;", explanation: "Centers elements inside container." }],
          keyTakeaways: ["Use semantic HTML elements for accessibility."]
        },
        quiz: {
          id: "web-quiz-1",
          title: "Module 01 Quiz — HTML5 & CSS3",
          passingScore: 70,
          timeLimitMinutes: 15,
          maxAttempts: 3,
          published: true,
          questions: [
            {
              id: "wq1",
              type: "multiple-choice",
              questionText: "Which CSS layout mode is designed for one-dimensional layouts?",
              options: ["Grid", "Flexbox", "Float", "Table"],
              correctAnswer: 1,
              marks: 10
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
        id: "ds-mod-1",
        title: "Module 01 — Data Science & Machine Learning Pipeline",
        description: "Overview of Data Science pipeline, Machine Learning paradigms (Supervised, Unsupervised, Reinforcement), and AI industry applications.",
        completed: true,
        order: 1,
        published: true,
        readingMaterial: {
          introduction: "Data Science extracts actionable business insights from raw structured and unstructured datasets.",
          objectives: ["Understand Data Science Lifecycle", "Difference between AI, ML, and Deep Learning"],
          sections: [{ heading: "AI vs ML", text: "AI is the broad domain; ML is statistical learning from data." }],
          codeExamples: [{ title: "Import Test", code: "import numpy as np\nimport pandas as pd", explanation: "Imports key DS libraries." }],
          keyTakeaways: ["EDA is critical before model training."]
        },
        quiz: {
          id: "ds-quiz-1",
          title: "Module 01 Quiz — Data Science Principles",
          passingScore: 70,
          timeLimitMinutes: 15,
          maxAttempts: 3,
          published: true,
          questions: [
            {
              id: "dsq1",
              type: "multiple-choice",
              questionText: "Which Python library is primarily used for multi-dimensional array processing?",
              options: ["Pandas", "NumPy", "Matplotlib", "Requests"],
              correctAnswer: 1,
              marks: 10
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

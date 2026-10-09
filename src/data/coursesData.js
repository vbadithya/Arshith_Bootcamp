export const INITIAL_COURSES = [
  {
    id: "python-programming",
    title: "Python Programming",
    category: "Programming",
    level: "Beginner to Intermediate",
    duration: "40 hours",
    rating: 4.9,
    studentsCount: "14.2k",
    studentsNumeric: 14200,
    price: 999,
    isFree: false,
    bestseller: true,
    progress: 47, // 7/15 completed
    iconBg: "bg-blue-50 border 2 border-blue-200 text-blue-600",
    iconType: "python",
    introVideoUrl: "https://www.youtube.com/embed/kqtD5dpn9C8",
    description: "Master Python from absolute scratch! Based on the world-renowned 'Python for Everybody' curriculum by Dr. Charles Severance, cover variables, conditionals, loops, functions, data structures, files, regex, web services, OOP, and databases.",
    instructor: {
      name: "Dr. Ananya Sharma & Dr. Charles Severance",
      role: "Lead Educators @ Arshith Boot Camp & Authors of Python for Everybody",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
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
]
  }
];

export const CATEGORIES = [
  "All Categories",
  "Programming",
  "SQL",
  "Web Development",
  "AI"
];

export const STUDENT_PROFILE = {
  name: "Arshith Kumar",
  email: "arshith@arshithbootcamp.com",
  role: "Learner",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
  joinDate: "January 2026",
  completedCoursesCount: 1,
  enrolledCoursesCount: 4,
  certificatesEarned: 1
};

export const SAMPLE_CERTIFICATES = [
  {
    id: "ABC-2026-PY0128",
    courseId: "python-programming",
    courseTitle: "Python Programming",
    studentName: "Arshith Kumar",
    issueDate: "October 1, 2026",
    instructorName: "Dr. Ananya Sharma",
    grade: "98% Distinction",
    skills: ["Python 3", "OOP", "File I/O", "SQLite", "Automation"]
  }
];

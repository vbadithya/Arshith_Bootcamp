import fs from 'fs';

export const SQL_WEB_DS_MCQS = {
  "sql-mod-1": [
    {
      id: 1,
      question: "What does the acronym RDBMS stand for in modern software engineering?",
      options: [
        "Relational Database Management System",
        "Realtime Data Byte Management Software",
        "Recursive Database Memory Storage",
        "Remote Document Backup System"
      ],
      correctAnswer: 0,
      explanation: "RDBMS stands for Relational Database Management System, a system that manages data stored in relational tables using SQL."
    },
    {
      id: 2,
      question: "In a relational database table, what does each individual horizontal row (record) represent?",
      options: [
        "A specific column property or attribute definition",
        "A single, discrete entity instance (e.g., a specific student or transaction)",
        "An indexed primary key constraint",
        "A database schema migration log"
      ],
      correctAnswer: 1,
      explanation: "In relational architecture, columns define attributes while rows (tuples) store discrete individual records of entities."
    },
    {
      id: 3,
      question: "What is the defining characteristic of a Primary Key in a relational table?",
      options: [
        "It allows duplicate values but cannot contain strings",
        "It must uniquely identify every row and cannot contain NULL values",
        "It is optional and only used for sorting queries",
        "It must reference a column in an external table"
      ],
      correctAnswer: 1,
      explanation: "A Primary Key uniquely distinguishes each record in a table, guaranteeing uniqueness and strictly prohibiting NULL values."
    },
    {
      id: 4,
      question: "Which SQL command is universally used to retrieve or query data from one or more database tables?",
      options: [
        "RETRIEVE",
        "GET",
        "SELECT",
        "EXTRACT"
      ],
      correctAnswer: 2,
      explanation: "The SELECT statement is the standard declarative SQL query command used to project and retrieve data from database tables."
    },
    {
      id: 5,
      question: "Why is SQL categorized as a declarative language rather than an imperative procedural language?",
      options: [
        "The developer specifies what data to retrieve rather than the step-by-step algorithms for how to fetch it",
        "It can only declare variables without executing computations",
        "It does not require a database engine to execute queries",
        "It cannot be compiled into machine instructions"
      ],
      correctAnswer: 0,
      explanation: "Declarative programming specifies the desired output ('what'), leaving query planning and algorithmic retrieval ('how') to the database engine optimizer."
    }
  ],
  "sql-mod-2": [
    {
      id: 1,
      question: "Which category of SQL statements includes commands like CREATE, ALTER, and DROP to manage schema structures?",
      options: [
        "Data Manipulation Language (DML)",
        "Data Definition Language (DDL)",
        "Transaction Control Language (TCL)",
        "Data Control Language (DCL)"
      ],
      correctAnswer: 1,
      explanation: "Data Definition Language (DDL) manages schema structures such as creating, altering, and dropping tables, indexes, and constraints."
    },
    {
      id: 2,
      question: "What is the fundamental difference between CHAR(n) and VARCHAR(n) data types in SQL?",
      options: [
        "VARCHAR(n) allocates fixed memory regardless of input length, whereas CHAR(n) is variable",
        "CHAR(n) is fixed-length padded with spaces, whereas VARCHAR(n) stores variable-length strings up to n characters",
        "CHAR(n) only stores uppercase letters",
        "VARCHAR(n) cannot be indexed in relational tables"
      ],
      correctAnswer: 1,
      explanation: "CHAR(n) always reserves exactly n characters using space padding, while VARCHAR(n) dynamically adjusts storage to string length up to n."
    },
    {
      id: 3,
      question: "In PostgreSQL, what does the SERIAL pseudo-type do when defining a primary key column?",
      options: [
        "It converts text strings into serialized binary blobs",
        "It automatically creates a sequence generator that increments integer IDs for each new inserted row",
        "It enforces encryption on the column",
        "It prevents duplicate rows from being inserted into foreign tables"
      ],
      correctAnswer: 1,
      explanation: "SERIAL creates an underlying auto-incrementing sequence object, assigning sequential integers (1, 2, 3...) to new rows automatically."
    },
    {
      id: 4,
      question: "What integrity guarantee does the NOT NULL column constraint provide in a database table?",
      options: [
        "It ensures that the column only contains positive integers",
        "It prevents rows from being inserted or updated without providing an explicit value for that column",
        "It forces all text values to be lowercase",
        "It ensures the value is unique across all rows"
      ],
      correctAnswer: 1,
      explanation: "The NOT NULL constraint guarantees that every record must possess a valid, non-null value for that specific attribute."
    },
    {
      id: 5,
      question: "Why is NUMERIC(p, s) or DECIMAL preferred over FLOAT for storing monetary financial amounts?",
      options: [
        "FLOAT uses binary approximation leading to IEEE 754 rounding inaccuracies, while NUMERIC guarantees exact decimal precision",
        "NUMERIC uses half the storage space of FLOAT",
        "FLOAT cannot be used with arithmetic operators (+, -, *)",
        "Database engines do not allow financial columns to be named with FLOAT"
      ],
      correctAnswer: 0,
      explanation: "Binary floating-point types (FLOAT/REAL) introduce rounding drift due to IEEE 754 representations, whereas NUMERIC/DECIMAL guarantees exact precision."
    }
  ],
  "sql-mod-3": [
    {
      id: 1,
      question: "Why is specifying explicit column names in a SELECT query considered a best practice over SELECT * in production?",
      options: [
        "SELECT * is deprecated in modern SQL-92 standards",
        "Explicit columns reduce network I/O, decrease memory consumption, and safeguard code against unexpected schema alterations",
        "SELECT * cannot be combined with a WHERE filter",
        "Relational databases disable query caching when SELECT * is executed"
      ],
      correctAnswer: 1,
      explanation: "Explicit column selection minimizes bandwidth and memory consumption, prevents schema drift issues, and allows query optimizers to utilize covering indexes."
    },
    {
      id: 2,
      question: "What is the function of the AS keyword in a SQL SELECT statement?",
      options: [
        "It permanently renames the column in the physical database disk schema",
        "It assigns a temporary alias name to an expression or column in the returned query result set",
        "It filters rows based on case-insensitive patterns",
        "It converts data types during query compilation"
      ],
      correctAnswer: 1,
      explanation: "The AS keyword creates an alias for a column or expression in query output without altering the underlying table structure."
    },
    {
      id: 3,
      question: "Given the query: SELECT title, price, price * 0.18 AS tax FROM courses;, what type of column is tax?",
      options: [
        "A persistent stored disk column",
        "A derived (computed) column calculated on the fly during query evaluation",
        "A foreign key column referencing the tax rates table",
        "An indexed clustered column"
      ],
      correctAnswer: 1,
      explanation: "Derived columns are computed dynamically in runtime memory using arithmetic expressions during query execution."
    },
    {
      id: 4,
      question: "What will be the output of SELECT 10 / 4; in SQL engines that perform integer arithmetic?",
      options: [
        "2.5",
        "2 (integer truncation)",
        "2.0",
        "Syntax Error"
      ],
      correctAnswer: 1,
      explanation: "When both operands in a division are integers, SQL engines perform integer division, truncating the fractional part to produce 2."
    },
    {
      id: 5,
      question: "How can you concatenate two string columns or literals in standard SQL and PostgreSQL?",
      options: [
        "column1 + column2",
        "column1 & column2",
        "column1 || column2 (or CONCAT function)",
        "column1 . column2"
      ],
      correctAnswer: 2,
      explanation: "Standard ANSI SQL and PostgreSQL use the double-pipe operator (||) or the CONCAT() function for string concatenation."
    }
  ],
  "sql-mod-4": [
    {
      id: 1,
      question: "At what stage of SQL query processing is the WHERE clause evaluated?",
      options: [
        "After aggregate functions and GROUP BY groups are formed",
        "Before row aggregation occurs, filtering individual candidate rows from the source tables",
        "After ORDER BY sorts the final output",
        "After LIMIT slices the result set"
      ],
      correctAnswer: 1,
      explanation: "The WHERE clause acts as a row-level filter executed before grouping and aggregation (HAVING filters after aggregation)."
    },
    {
      id: 2,
      question: "Which SQL condition correctly filters for records where the email column does not have an assigned value?",
      options: [
        "WHERE email = NULL",
        "WHERE email == \"\"",
        "WHERE email IS NULL",
        "WHERE email EQUALS NULL"
      ],
      correctAnswer: 2,
      explanation: "In SQL three-valued logic, NULL represents unknown data and cannot be compared with '='. You must use 'IS NULL' or 'IS NOT NULL'."
    },
    {
      id: 3,
      question: "What pattern does the query WHERE title LIKE 'Py%' match in SQL?",
      options: [
        "Any string that contains the characters 'Py' anywhere in the text",
        "Any string that starts with 'Py' followed by zero or more characters",
        "Any string that ends with 'Py'",
        "Exactly the two-letter string 'Py'"
      ],
      correctAnswer: 1,
      explanation: "The '%' wildcard matches zero, one, or multiple characters. Placing it after 'Py' matches strings starting with 'Py'."
    },
    {
      id: 4,
      question: "What is the primary advantage of using the IN operator over multiple OR statements?",
      options: [
        "It provides cleaner, more readable syntax and allows dynamic subquery matching",
        "OR operators cannot be evaluated by relational query optimizers",
        "IN only works on numeric integer data types",
        "IN forces the database to sort the rows in ascending order"
      ],
      correctAnswer: 0,
      explanation: "The IN operator simplifies multi-value matching into clean readable code and seamlessly accepts subquery result sets."
    },
    {
      id: 5,
      question: "In PostgreSQL, what is the key difference between the LIKE and ILIKE operators?",
      options: [
        "ILIKE performs case-insensitive pattern matching, whereas LIKE is case-sensitive",
        "ILIKE only matches integer numeric columns",
        "ILIKE is strictly reserved for regular expression regex syntax",
        "ILIKE cannot use the % wildcard character"
      ],
      correctAnswer: 0,
      explanation: "ILIKE is PostgreSQL's case-insensitive matching operator, making 'Python' and 'python' evaluate as identical matches."
    }
  ],
  "sql-mod-5": [
    {
      id: 1,
      question: "What is the default sorting direction in SQL when the ORDER BY clause does not explicitly declare ASC or DESC?",
      options: [
        "Descending (DESC)",
        "Ascending (ASC)",
        "Random insertion order",
        "Clustered primary key index order"
      ],
      correctAnswer: 1,
      explanation: "SQL specifies ASC (ascending: lowest to highest, A to Z) as the default sorting order when omitted."
    },
    {
      id: 2,
      question: "In multi-column sorting: ORDER BY department ASC, salary DESC;, how does the database order the rows?",
      options: [
        "It sorts primarily by department alphabetically; for rows with the same department, it sorts by salary highest to lowest",
        "It sorts by salary first, and ignores department entirely",
        "It sorts alternating rows between department and salary",
        "It produces a syntax error because two directions cannot be specified"
      ],
      correctAnswer: 0,
      explanation: "SQL sorts hierarchically: rows are ordered first by department ascending; ties within the same department are broken by salary descending."
    },
    {
      id: 3,
      question: "Why is it critical to combine a deterministic ORDER BY clause whenever using LIMIT and OFFSET for pagination?",
      options: [
        "Without ORDER BY, the database does not guarantee row order, leading to missing or duplicated records across paginated views",
        "SQL syntax throws a compiler exception if LIMIT is used without ORDER BY",
        "LIMIT cannot return fewer than 10 rows without ORDER BY",
        "ORDER BY is required to compute the total number of pages"
      ],
      correctAnswer: 0,
      explanation: "Relational tables are unordered mathematical sets. Without explicit ORDER BY, physical retrieval order may change between queries, scrambling pagination."
    },
    {
      id: 4,
      question: "To fetch page 3 of a data grid with a page size of 20 items per page, what are the appropriate LIMIT and OFFSET values?",
      options: [
        "LIMIT 20 OFFSET 60",
        "LIMIT 20 OFFSET 40",
        "LIMIT 40 OFFSET 20",
        "LIMIT 3 OFFSET 20"
      ],
      correctAnswer: 1,
      explanation: "Pagination formula: OFFSET = (PageNumber - 1) * PageSize. For Page 3 with 20 items: (3 - 1) * 20 = 40, so LIMIT 20 OFFSET 40."
    },
    {
      id: 5,
      question: "How are NULL values ordered by default in PostgreSQL when sorting with ORDER BY column ASC?",
      options: [
        "They are always converted to 0",
        "They appear last by default (or can be configured with NULLS FIRST / NULLS LAST)",
        "They cause the query to fail with an exception",
        "They are automatically excluded from query results"
      ],
      correctAnswer: 1,
      explanation: "In PostgreSQL, ORDER BY ASC places NULL values last by default, while ORDER BY DESC places them first, customizable with NULLS FIRST/LAST."
    }
  ],
  "web-mod-1": [
    {
      id: 1,
      question: "What is the primary role of the Domain Name System (DNS) in web architecture?",
      options: [
        "Translating human-friendly domain names (e.g. example.com) into machine-routable IP addresses",
        "Storing HTML web pages on distributed web server disks",
        "Encrypting user passwords using SSL certificates",
        "Compiling JavaScript code before browser execution"
      ],
      correctAnswer: 0,
      explanation: "DNS acts as the phonebook of the Internet, resolving domain names entered by users into numerical IP addresses needed by network routers."
    },
    {
      id: 2,
      question: "In the HTTP protocol, what does the 404 status code signify to the client?",
      options: [
        "The client is unauthorized to view the resource",
        "The requested URL/resource could not be found on the server",
        "The server crashed due to an unhandled internal exception",
        "The client submitted an invalid JSON payload syntax"
      ],
      correctAnswer: 1,
      explanation: "HTTP 404 Not Found indicates that the client was able to communicate with the server, but the server could not locate the requested resource."
    },
    {
      id: 3,
      question: "What is the fundamental difference between HTTP GET and POST request methods?",
      options: [
        "GET requests retrieve data and should be idempotent with parameters in the URL, whereas POST submits data in the request body to alter server state",
        "GET can only transfer JSON data, while POST only transfers HTML",
        "POST requests are always unencrypted, whereas GET is automatically encrypted",
        "GET requests do not generate server log entries"
      ],
      correctAnswer: 0,
      explanation: "GET is a safe, idempotent method intended for data retrieval, while POST sends payloads in the body intended to create or mutate server state."
    },
    {
      id: 4,
      question: "What three core technologies form the foundation of client-side web browser rendering?",
      options: [
        "Python (backend), SQL (database), and Docker (containers)",
        "HTML (semantic structure), CSS (visual styling), and JavaScript (client-side interactivity)",
        "C++ (engine), Rust (memory), and Bash (terminal)",
        "JSON (storage), XML (markup), and YAML (configuration)"
      ],
      correctAnswer: 1,
      explanation: "HTML provides the document structure (DOM), CSS provides styling and presentation, and JavaScript enables dynamic interactivity and logic."
    },
    {
      id: 5,
      question: "What happens during the initial TCP 3-Way Handshake before an HTTP exchange can occur?",
      options: [
        "The client and server exchange SYN, SYN-ACK, and ACK packets to establish a synchronized, reliable connection",
        "The browser downloads all CSS files and renders the DOM tree",
        "The server verifies the user's login session token",
        "The database executes pending schema migrations"
      ],
      correctAnswer: 0,
      explanation: "TCP establishes reliable connection transport via SYN (synchronize), SYN-ACK (synchronize-acknowledge), and ACK (acknowledge) packets."
    }
  ],
  "ds-mod-1": [
    {
      id: 1,
      question: "What represents the correct hierarchical nesting relationship between AI, Machine Learning, and Deep Learning?",
      options: [
        "Deep Learning ⊃ Machine Learning ⊃ Artificial Intelligence",
        "Artificial Intelligence ⊃ Machine Learning ⊃ Deep Learning",
        "Machine Learning ⊃ Deep Learning ⊃ Artificial Intelligence",
        "Artificial Intelligence and Machine Learning are mutually exclusive fields"
      ],
      correctAnswer: 1,
      explanation: "Artificial Intelligence is the broad umbrella discipline; Machine Learning is a subset focusing on learning from data; Deep Learning is a specialized subfield of ML using multi-layered neural networks."
    },
    {
      id: 2,
      question: "What is the primary distinction between Supervised Learning and Unsupervised Learning?",
      options: [
        "Supervised learning trains models on labeled ground-truth targets (features + target), whereas unsupervised learning finds hidden patterns in unlabeled data",
        "Supervised learning does not require computer processors",
        "Unsupervised learning only works on image computer vision datasets",
        "Supervised learning models can never overfit training data"
      ],
      correctAnswer: 0,
      explanation: "Supervised learning maps inputs X to known labels y, whereas unsupervised learning discovers intrinsic groupings, patterns, or clusters in unlabeled data."
    },
    {
      id: 3,
      question: "What is the purpose of Exploratory Data Analysis (EDA) in the Data Science lifecycle?",
      options: [
        "Writing unit test suites for deployment pipelines",
        "Inspecting distributions, detecting missing values, identifying outliers, and understanding feature correlations prior to modeling",
        "Deploying models to production cloud Kubernetes clusters",
        "Compiling Python source code to C binaries for speed"
      ],
      correctAnswer: 1,
      explanation: "EDA allows practitioners to visually and statistically explore datasets to understand patterns, uncover anomalies, test hypotheses, and guide feature engineering."
    },
    {
      id: 4,
      question: "Why are Jupyter Notebooks (.ipynb) the preferred development interface for data scientists?",
      options: [
        "They provide an interactive REPL environment allowing inline execution, markdown documentation, and instant data visualizations",
        "They run faster than compiled C++ executables",
        "They automatically fix data quality anomalies without user code",
        "They eliminate the need to install external libraries like NumPy and Pandas"
      ],
      correctAnswer: 0,
      explanation: "Jupyter provides a cell-based computational notebook blending code execution, mathematical formulas, explanatory narrative, and rich visualization charts."
    },
    {
      id: 5,
      question: "In a machine learning classification task with heavily imbalanced classes (e.g., 99% negative, 1% positive), why is raw Accuracy misleading?",
      options: [
        "A naive model predicting negative 100% of the time achieves 99% accuracy while failing to detect a single positive case",
        "Accuracy cannot be expressed as a mathematical percentage",
        "Accuracy is only applicable to continuous regression problems",
        "Scikit-Learn disallows accuracy scoring on classification models"
      ],
      correctAnswer: 0,
      explanation: "With extreme class imbalance, a model that classifies everything as the majority class produces deceptive high accuracy despite zero predictive utility for the minority class (hence Precision, Recall, and ROC-AUC are used)."
    }
  ]
};

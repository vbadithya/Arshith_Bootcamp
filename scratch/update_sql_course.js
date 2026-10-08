import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sqlModules = [
  {
    id: "sql-mod-1",
    title: "Module 01 — Introduction to SQL & Databases",
    description: "Learn what SQL is, relational database fundamentals, RDBMS engines (PostgreSQL, MySQL, SQLite), primary keys, relationships, and applications across software development, data analytics, data science, and AI.",
    completed: true,
    order: 1,
    published: true,
    readingMaterial: {
      introduction: "Welcome to Module 1 of the SQL Course! Structured Query Language (SQL) is the universal, domain-specific standard language used to define, query, and manipulate data stored inside Relational Database Management Systems (RDBMS). Databases store data in structured tables composed of rows (records) and columns (fields).",
      objectives: [
        "Understand what SQL is and why it is essential across Software Engineering, Data Analytics, Data Science, and AI/ML",
        "Define Database, Relational Database, and RDBMS (Relational Database Management System)",
        "Understand SQL vs Database Engine vs DBMS architecture",
        "Master table concepts: Rows (records), Columns (fields), and Primary Keys",
        "Understand relationships between relational tables",
        "Learn key advantages of SQL: declarative syntax, ACID compliance, data integrity, and high-performance indexing"
      ],
      sections: [
        {
          heading: "What is SQL & RDBMS?",
          text: "A Relational Database is a collection of data items organized into set-formalized tables. RDBMS (such as PostgreSQL, MySQL, SQLite, Oracle, and MS SQL Server) is the software engine that manages relational databases, executes SQL queries, and enforces data integrity."
        },
        {
          heading: "SQL Applications in Modern Technology",
          text: "SQL is applied everywhere in modern tech stack:",
          bulletPoints: [
            "Software Development: Storing user profiles, orders, transactions, and session states.",
            "Data Analytics: Extracting metrics, aggregating business KPIs, cohort analysis, and executive dashboards.",
            "Data Science & AI: Data extraction, feature engineering, dataset preprocessing, and loading clean datasets into Pandas or AI models."
          ]
        }
      ],
      codeExamples: [
        {
          title: "First SQL Query — Querying All Columns",
          code: `-- Select all columns and rows from students table\nSELECT * FROM students;`,
          explanation: "SELECT * retrieves all fields and records from the specified database table."
        }
      ],
      bestPractices: [
        "Write SQL keywords in UPPERCASE (SELECT, FROM, WHERE) for clarity and readability.",
        "Always terminate SQL statements with a semicolon (;)."
      ],
      commonMistakes: [
        "Confusing SQL (the query language) with RDBMS software engines like MySQL or PostgreSQL."
      ],
      practiceExercise: {
        title: "Relational Concepts Check",
        problem: "Write a SQL query that retrieves all columns from a table named 'courses'.",
        solutionCode: "SELECT * FROM courses;"
      },
      keyTakeaways: [
        "SQL is declarative: you specify WHAT data you want, and the database engine decides HOW to retrieve it.",
        "Tables store data in rows (records) and columns (fields) linked by Primary and Foreign Keys."
      ],
      references: [
        { title: "PostgreSQL Official Tutorial", url: "https://www.postgresql.org/docs/current/tutorial-sql.html" }
      ]
    }
  },
  {
    id: "sql-mod-2",
    title: "Module 02 — SQL Syntax, Keywords & Data Types",
    description: "Master SQL statement syntax, reserved keywords, naming standards, comments, case sensitivity, statement termination, and core data types (INT, VARCHAR, TIMESTAMP, BOOLEAN, NULL).",
    completed: true,
    order: 2,
    published: true,
    readingMaterial: {
      introduction: "SQL syntax follows precise grammatical rules. Statements consist of keywords, identifiers (table and column names), operators, literals, comments, and data type specifications.",
      objectives: [
        "Understand SQL statements, clauses, keywords, and reserved words",
        "Learn table and column identifier naming conventions",
        "Use single-line (--) and multi-line (/* */) comments",
        "Understand SQL case sensitivity and statement termination with semicolons (;)",
        "Master numeric data types: INT, BIGINT, DECIMAL(p,s), FLOAT",
        "Master character/string data types: CHAR(n), VARCHAR(n), TEXT",
        "Master date/time data types: DATE, TIME, TIMESTAMP",
        "Understand Boolean data types (TRUE, FALSE) and the NULL state"
      ],
      sections: [
        {
          heading: "SQL Data Types Matrix",
          text: "Choosing the correct data type optimizes database storage and query performance:",
          table: {
            headers: ["Category", "Data Type", "Example Literal", "Description"],
            rows: [
              ["Numeric", "INT / INTEGER", "42, -100", "Whole numbers without decimals"],
              ["Numeric", "DECIMAL(10,2)", "199.99", "Exact fixed-point currency numbers"],
              ["String", "VARCHAR(100)", "'John Doe'", "Variable length string up to n characters"],
              ["Date/Time", "TIMESTAMP", "'2026-10-03 09:30:00'", "Combined date and time stamp"],
              ["Logical", "BOOLEAN", "TRUE, FALSE", "Logical boolean flag"]
            ]
          }
        },
        {
          heading: "SQL Keywords & Reserved Words Rule",
          text: "Keywords like SELECT, FROM, WHERE, CREATE, ALTER are reserved by the SQL parser and cannot be used as unquoted table or column variable names."
        }
      ],
      codeExamples: [
        {
          title: "SQL Query with Comments and Data Types",
          code: `-- Select student name and age fields from students table\nSELECT name, age FROM students;\n\n/* \n   Multi-line Comment:\n   Queries active students registered in 2026\n*/\nSELECT * FROM students WHERE is_active = TRUE;`,
          explanation: "Demonstrates single-line and multi-line comments alongside clean clause formatting."
        }
      ],
      bestPractices: [
        "Use snake_case for table and column identifiers (e.g. first_name, order_date).",
        "Avoid using SQL reserved words as column or table names."
      ],
      commonMistakes: [
        "Confusing NULL with 0 or empty string ''; NULL signifies the absence of any value."
      ],
      practiceExercise: {
        title: "Select Specific Columns",
        problem: "Write a query selecting name and email from the students table.",
        solutionCode: "SELECT name, email FROM students;"
      },
      keyTakeaways: [
        "Semicolons (;) mark statement boundaries.",
        "Data types enforce domain integrity on table columns."
      ],
      references: [
        { title: "PostgreSQL Data Types Manual", url: "https://www.postgresql.org/docs/current/datatype.html" }
      ]
    }
  },
  {
    id: "sql-mod-3",
    title: "Module 03 — DDL: Creating & Managing Database Structures",
    description: "Learn Data Definition Language (DDL) statements: CREATE DATABASE, CREATE TABLE, ALTER TABLE (ADD, MODIFY, DROP COLUMN), RENAME TABLE, DROP TABLE, and TRUNCATE TABLE.",
    completed: true,
    order: 3,
    published: true,
    readingMaterial: {
      introduction: "Data Definition Language (DDL) is the sub-category of SQL statements used to define, alter, and delete database structures such as databases, tables, and columns.",
      objectives: [
        "Create databases using CREATE DATABASE statement",
        "Create structured tables using CREATE TABLE statement",
        "Alter existing tables using ALTER TABLE (ADD, MODIFY, RENAME, DROP COLUMN)",
        "Rename table objects using RENAME TABLE",
        "Delete entire tables using DROP TABLE",
        "Wipe table rows while keeping structure intact using TRUNCATE TABLE",
        "Differentiate between DROP vs TRUNCATE vs DELETE"
      ],
      sections: [
        {
          heading: "DDL Commands Summary",
          text: "Overview of core DDL commands:",
          bulletPoints: [
            "CREATE: Instantiates a new database, table, view, or index structure.",
            "ALTER: Modifies existing object definitions (adding/removing columns).",
            "DROP: Removes the target structure and all its data permanently from the database.",
            "TRUNCATE: Instantly removes all rows from a table while maintaining structure and constraints."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Creating and Modifying Tables (DDL)",
          code: `-- Create a new students table\nCREATE TABLE students (\n    student_id INT,\n    name VARCHAR(100),\n    age INT\n);\n\n-- Add a new column to existing table\nALTER TABLE students ADD COLUMN email VARCHAR(150);\n\n-- Rename table\nRENAME TABLE students TO student_records;`,
          explanation: "Demonstrates DDL CREATE, ALTER ADD COLUMN, and RENAME TABLE."
        }
      ],
      bestPractices: [
        "Double-check backup state before running DROP TABLE or TRUNCATE TABLE in production."
      ],
      commonMistakes: [
        "Using DROP TABLE when you only intended to clear table rows (TRUNCATE TABLE)."
      ],
      practiceExercise: {
        title: "Create Students Schema",
        problem: "Write a SQL query creating a 'students' table with student_id (INT), name (VARCHAR(100)), and age (INT).",
        solutionCode: "CREATE TABLE students (student_id INT, name VARCHAR(100), age INT);"
      },
      keyTakeaways: [
        "DDL statements modify database schemas.",
        "TRUNCATE removes all rows faster than DELETE while preserving table structure."
      ],
      references: [
        { title: "PostgreSQL DDL Manual", url: "https://www.postgresql.org/docs/current/ddl.html" }
      ]
    }
  },
  {
    id: "sql-mod-4",
    title: "Module 04 — Constraints & Keys",
    description: "Master column and table constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, DEFAULT, CHECK, AUTO_INCREMENT / IDENTITY, referential integrity, and ON DELETE CASCADE.",
    completed: true,
    order: 4,
    published: true,
    readingMaterial: {
      introduction: "Constraints are rules enforced on table data columns to ensure accuracy, reliability, and referential integrity across related tables in a relational database.",
      objectives: [
        "Understand why constraints are required for data integrity",
        "Define PRIMARY KEY constraint (uniquely identifies each record, cannot be NULL)",
        "Define FOREIGN KEY constraint linking child tables to parent primary keys",
        "Apply UNIQUE, NOT NULL, DEFAULT, and CHECK constraints",
        "Use AUTO_INCREMENT / IDENTITY / SERIAL for synthetic auto-number keys",
        "Understand composite primary keys (multiple column keys)",
        "Enforce referential integrity with ON DELETE CASCADE and ON UPDATE CASCADE"
      ],
      sections: [
        {
          heading: "Core SQL Constraints",
          text: "Primary constraints used in relational schema design:",
          table: {
            headers: ["Constraint", "Function", "Behavior"],
            rows: [
              ["PRIMARY KEY", "Unique record identifier", "Combines UNIQUE + NOT NULL automatically"],
              ["FOREIGN KEY", "Relational link to parent table", "Enforces referential integrity"],
              ["UNIQUE", "Prevents duplicate values", "Allows single NULL value"],
              ["NOT NULL", "Prevents empty NULL states", "Requires valid value on insert"],
              ["CHECK", "Validates Boolean condition", "e.g. CHECK (age >= 18)"],
              ["DEFAULT", "Assigns fallback value", "Supplies value if omitted on insert"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Table Creation with Constraints & Foreign Keys",
          code: `-- Parent Table: Departments\nCREATE TABLE departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(100) NOT NULL UNIQUE\n);\n\n-- Child Table: Students with Foreign Key Constraint\nCREATE TABLE students (\n    student_id INT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(150) UNIQUE,\n    age INT CHECK (age >= 18),\n    dept_id INT,\n    FOREIGN KEY (dept_id) REFERENCES departments(dept_id) ON DELETE CASCADE\n);`,
          explanation: "Defines primary keys, check constraints, unique fields, and a foreign key with ON DELETE CASCADE."
        }
      ],
      bestPractices: [
        "Always define a Primary Key on every relational database table.",
        "Use ON DELETE CASCADE when child records should be automatically purged alongside parent records."
      ],
      commonMistakes: [
        "Attempting to insert a child record with a Foreign Key value that does not exist in the parent table."
      ],
      practiceExercise: {
        title: "Constraint Schema Construction",
        problem: "Create a students table with student_id PRIMARY KEY, name NOT NULL, email UNIQUE, and age CHECK (age >= 18).",
        solutionCode: "CREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE, age INT CHECK (age >= 18));"
      },
      keyTakeaways: [
        "Constraints safeguard database quality by rejecting illegal data inputs.",
        "Foreign Keys enforce referential integrity between parent and child tables."
      ],
      references: [
        { title: "PostgreSQL Constraints Documentation", url: "https://www.postgresql.org/docs/current/ddl-constraints.html" }
      ]
    }
  },
  {
    id: "sql-mod-5",
    title: "Module 05 — DML: INSERT, UPDATE & DELETE",
    description: "Learn Data Manipulation Language (DML): INSERT INTO, bulk record inserts, INSERT INTO SELECT, UPDATE with WHERE, DELETE with WHERE, risks of unconstrained updates, and DML vs DDL.",
    completed: true,
    order: 5,
    published: true,
    readingMaterial: {
      introduction: "Data Manipulation Language (DML) statements modify row data stored inside database tables: inserting new records, updating existing column values, and deleting unwanted rows.",
      objectives: [
        "Insert single and multiple records using INSERT INTO ... VALUES",
        "Copy data between tables using INSERT INTO ... SELECT",
        "Modify row values using UPDATE ... SET ... WHERE",
        "Update multiple columns simultaneously",
        "Remove specific records using DELETE FROM ... WHERE",
        "Understand the extreme risk of running UPDATE or DELETE without a WHERE clause",
        "Distinguish DML (row-level data changes) vs DDL (structure-level schema changes)"
      ],
      sections: [
        {
          heading: "The Danger of Unconstrained UPDATE and DELETE",
          text: "If you omit the WHERE clause in an UPDATE statement (e.g. UPDATE students SET status = 'Inactive';), ALL rows in the table will be updated. Similarly, DELETE FROM students; without WHERE deletes every single record in the table!"
        }
      ],
      codeExamples: [
        {
          title: "INSERT, UPDATE, and DELETE DML Queries",
          code: `-- 1. Insert a single student record\nINSERT INTO students (student_id, name, age) VALUES (1, 'Rahul', 21);\n\n-- 2. Bulk insert multiple records\nINSERT INTO students (student_id, name, age) VALUES \n(2, 'Priya', 22),\n(3, 'Arshith', 20);\n\n-- 3. Update specific student record\nUPDATE students \nSET age = 22, name = 'Rahul Sharma' \nWHERE student_id = 1;\n\n-- 4. Delete specific student record\nDELETE FROM students \nWHERE student_id = 1;`,
          explanation: "Shows exact DML statements for creating, updating, and removing table rows safely."
        }
      ],
      bestPractices: [
        "Always execute a SELECT * query with the same WHERE clause first to verify target rows before running UPDATE or DELETE."
      ],
      commonMistakes: [
        "Forgetting the WHERE clause when running UPDATE or DELETE."
      ],
      practiceExercise: {
        title: "DML Operations Test",
        problem: "Write statements to: 1) Insert Rahul (1, 'Rahul', 21), 2) Update Rahul's age to 22, 3) Delete Rahul where student_id = 1.",
        solutionCode: "INSERT INTO students (student_id, name, age) VALUES (1, 'Rahul', 21);\nUPDATE students SET age = 22 WHERE student_id = 1;\nDELETE FROM students WHERE student_id = 1;"
      },
      keyTakeaways: [
        "INSERT INTO adds new rows.",
        "UPDATE modifies existing row values.",
        "DELETE removes specific rows matching WHERE criteria."
      ],
      references: [
        { title: "PostgreSQL Data Manipulation Manual", url: "https://www.postgresql.org/docs/current/dml.html" }
      ]
    }
  },
  {
    id: "sql-mod-6",
    title: "Module 06 — SELECT Statement: Retrieving Data",
    description: "Master the SELECT statement: syntax, selecting specific columns, table and column aliases (AS), multi-column selection, basic query formatting, and understanding query result sets.",
    completed: true,
    order: 6,
    published: true,
    readingMaterial: {
      introduction: "The SELECT statement is the most frequently used SQL command. It retrieves specified data columns and candidate rows from one or more database tables into a virtual tabular result set.",
      objectives: [
        "Master SELECT syntax and projection",
        "Understand performance implications of SELECT * vs selecting specific columns",
        "Use column aliases (AS) to create clean header labels",
        "Use table aliases to shorten complex table references",
        "Select multiple columns and derived calculated fields",
        "Format SQL queries for maximum readability"
      ],
      sections: [
        {
          heading: "Column Projection & Aliasing",
          text: "Projection refers to choosing which table attributes to return in the result set. Column Aliasing (AS) renames output header labels without modifying underlying database table schema."
        }
      ],
      codeExamples: [
        {
          title: "SELECT Queries with Column Aliases",
          code: `-- Fetch all columns\nSELECT * FROM students;\n\n-- Fetch specific columns\nSELECT name, age FROM students;\n\n-- Fetch columns with custom Alias labels\nSELECT \n    name AS student_full_name, \n    age AS student_age,\n    age * 365 AS age_in_days\nFROM students;`,
          explanation: "Demonstrates column selection, derived column calculations, and custom aliases with AS."
        }
      ],
      bestPractices: [
        "Explicitly list required columns instead of using SELECT * in production applications."
      ],
      commonMistakes: [
        "Misspelling column names causing 'column does not exist' SQL error."
      ],
      practiceExercise: {
        title: "Column Aliasing Exercise",
        problem: "Write a SELECT query retrieving 'name' as 'student_name' and 'age' from 'students'.",
        solutionCode: "SELECT name AS student_name, age FROM students;"
      },
      keyTakeaways: [
        "SELECT projects desired attributes into the query output.",
        "AS renames column headers in the output result set."
      ],
      references: [
        { title: "PostgreSQL SELECT Queries Guide", url: "https://www.postgresql.org/docs/current/queries-select-lists.html" }
      ]
    }
  },
  {
    id: "sql-mod-7",
    title: "Module 07 — Filtering Data with WHERE & Operators",
    description: "Filter datasets with the WHERE clause, comparison operators (=, <>, >, <, >=, <=), logical operators (AND, OR, NOT), operator precedence, IN, BETWEEN, LIKE wildcards (% and _), and IS NULL / IS NOT NULL.",
    completed: true,
    order: 7,
    published: true,
    readingMaterial: {
      introduction: "The WHERE clause restricts query outputs to rows that satisfy specified boolean conditions. Filtering allows database engines to isolate targeted data efficiently.",
      objectives: [
        "Use comparison operators: =, <>, !=, >, <, >=, <=",
        "Combine conditions using logical operators: AND, OR, NOT",
        "Understand Operator Precedence rules: AND takes precedence over OR (AND > OR)",
        "Use parentheses () to override precedence explicitly",
        "Filter ranges using BETWEEN ... AND ...",
        "Filter discrete value sets using IN ('val1', 'val2') and NOT IN",
        "Perform text pattern matching using LIKE with wildcards (% for multi-char, _ for single-char)",
        "Handle missing data using IS NULL and IS NOT NULL",
        "Understand EXISTS and NOT EXISTS subquery operators"
      ],
      sections: [
        {
          heading: "Logical Operator Precedence (AND > OR)",
          text: "In SQL execution rules, the AND operator is evaluated before the OR operator. Always use parentheses when combining AND & OR to prevent logical bugs."
        },
        {
          heading: "Wildcard Character Details",
          text: "Pattern matching wildcards:",
          table: {
            headers: ["Wildcard", "Function", "Example", "Matches"],
            rows: [
              ["%", "Substitute for sequence of 0 or more characters", "LIKE 'Mar%'", "Mark, Martin, Margaret"],
              ["_", "Substitute for exactly one single character", "LIKE 'Mar_'", "Mark, Mary, Marl"],
              ["IN", "Matches any value inside discrete set", "IN (10, 20, 30)", "10 or 20 or 30"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Complex Filtering Queries with Operators",
          code: `-- 1. Filter using comparison and logical operators\nSELECT * FROM students \nWHERE age > 20 AND (department = 'CS' OR department = 'IT');\n\n-- 2. Range filtering with BETWEEN\nSELECT * FROM students \nWHERE age BETWEEN 18 AND 25;\n\n-- 3. Pattern matching with LIKE wildcards\nSELECT * FROM students \nWHERE name LIKE 'A%'; -- Names starting with 'A'\n\n-- 4. Null value checks\nSELECT * FROM students \nWHERE email IS NOT NULL;`,
          explanation: "Combines comparison operators, parentheses, range filtering, wildcards, and null checks."
        }
      ],
      bestPractices: [
        "Always use parentheses when mixing AND and OR in WHERE clause conditions.",
        "Use IS NULL or IS NOT NULL (never use = NULL or != NULL)."
      ],
      commonMistakes: [
        "Assuming OR evaluates before AND without parentheses.",
        "Using = NULL which always returns UNKNOWN/False in SQL 3-valued logic."
      ],
      practiceExercise: {
        title: "Filtering Practice",
        problem: "Write queries to: 1) Find students where age > 20, 2) Find students with age BETWEEN 18 AND 25, 3) Find students whose name starts with 'A'.",
        solutionCode: "SELECT * FROM students WHERE age > 20;\nSELECT * FROM students WHERE age BETWEEN 18 AND 25;\nSELECT * FROM students WHERE name LIKE 'A%';"
      },
      keyTakeaways: [
        "WHERE filters rows based on boolean conditions.",
        "AND > OR precedence rules require explicit parentheses.",
        "% matches multi-character wildcards; _ matches single characters."
      ],
      references: [
        { title: "PostgreSQL Pattern Matching Docs", url: "https://www.postgresql.org/docs/current/functions-matching.html" }
      ]
    }
  },
  {
    id: "sql-mod-8",
    title: "Module 08 — DISTINCT, ORDER BY & LIMIT",
    description: "Learn DISTINCT duplicate removal, ORDER BY sorting (ASC/DESC), sorting text/numbers/dates across multiple columns, LIMIT clauses, TOP/FETCH alternatives, and pagination.",
    completed: true,
    order: 8,
    published: true,
    readingMaterial: {
      introduction: "Once data is retrieved and filtered, queries often require sorting, duplicate value removal, and row count restrictions for user interface pagination.",
      objectives: [
        "Remove duplicate output rows using SELECT DISTINCT",
        "Sort results using ORDER BY in Ascending (ASC) or Descending (DESC) order",
        "Sort by multiple columns (e.g. ORDER BY department ASC, salary DESC)",
        "Sort text strings, numeric values, and timestamp dates",
        "Restrict output row count using LIMIT (or TOP / FETCH FIRST)",
        "Implement database pagination using LIMIT and OFFSET",
        "Combine WHERE + ORDER BY + LIMIT into unified analytical queries"
      ],
      sections: [
        {
          heading: "Pagination Mechanics",
          text: "To paginate query results on web applications, combine LIMIT (rows per page) with OFFSET (starting row index): LIMIT page_size OFFSET (page_number - 1) * page_size."
        }
      ],
      codeExamples: [
        {
          title: "Distinct Values, Sorting, and Pagination",
          code: `-- 1. Select distinct department list\nSELECT DISTINCT department FROM employees;\n\n-- 2. Sort by salary descending\nSELECT * FROM employees \nORDER BY salary DESC;\n\n-- 3. Top 5 highest paid employees (LIMIT)\nSELECT * FROM employees \nORDER BY salary DESC \nLIMIT 5;\n\n-- 4. Paginate Page 2 (10 items per page)\nSELECT * FROM employees \nORDER BY employee_id ASC \nLIMIT 10 OFFSET 10;`,
          explanation: "Demonstrates DISTINCT, multi-column sorting, top-N ranking, and pagination."
        }
      ],
      bestPractices: [
        "Always include an explicit ORDER BY clause when using LIMIT to ensure deterministic output order."
      ],
      commonMistakes: [
        "Forgetting DESC when ranking highest values (ORDER BY defaults to ASC)."
      ],
      practiceExercise: {
        title: "Distinct & Top-N Query",
        problem: "Write queries to: 1) Get distinct departments from employees, 2) Get top 5 highest paid employees.",
        solutionCode: "SELECT DISTINCT department FROM employees;\nSELECT * FROM employees ORDER BY salary DESC LIMIT 5;"
      },
      keyTakeaways: [
        "SELECT DISTINCT eliminates duplicate row tuples.",
        "ORDER BY sorts output; LIMIT restricts maximum row count."
      ],
      references: [
        { title: "PostgreSQL Sorting & Pagination Guide", url: "https://www.postgresql.org/docs/current/queries-limit.html" }
      ]
    }
  },
  {
    id: "sql-mod-9",
    title: "Module 09 — Aggregate Functions, GROUP BY & HAVING",
    description: "Master aggregate functions: COUNT(), COUNT(*), COUNT(DISTINCT), SUM(), AVG(), MIN(), MAX(), grouping data with GROUP BY, filtering groups with HAVING, and WHERE vs HAVING differences.",
    completed: true,
    order: 9,
    published: true,
    readingMaterial: {
      introduction: "Aggregate functions compute a single summary value from multiple input rows. Combining aggregate functions with GROUP BY and HAVING enables multi-dimensional business intelligence analytics.",
      objectives: [
        "Understand aggregate functions: COUNT(), SUM(), AVG(), MIN(), MAX()",
        "Differentiate COUNT(*) vs COUNT(column_name) vs COUNT(DISTINCT column_name)",
        "Group summary results by categorical columns using GROUP BY",
        "Group by multiple columns",
        "Filter aggregated summary groups using the HAVING clause",
        "Understand key differences between WHERE (filters rows BEFORE grouping) and HAVING (filters summary groups AFTER grouping)",
        "Combine GROUP BY + HAVING + ORDER BY into executive reporting queries"
      ],
      sections: [
        {
          heading: "WHERE vs HAVING Comparison Matrix",
          text: "Crucial distinctions between WHERE and HAVING:",
          table: {
            headers: ["Feature", "WHERE Clause", "HAVING Clause"],
            rows: [
              ["Execution Stage", "Evaluates BEFORE GROUP BY", "Evaluates AFTER GROUP BY"],
              ["Target Unit", "Individual database table rows", "Aggregated summary groups"],
              ["Aggregate Functions", "CANNOT contain aggregate functions", "CAN contain aggregate functions"],
              ["Primary Role", "Filters raw records", "Filters grouped summaries"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Aggregate Functions, GROUP BY and HAVING Queries",
          code: `-- 1. Simple aggregate count\nSELECT COUNT(*) FROM employees;\n\n-- 2. Department average salary with GROUP BY\nSELECT department, AVG(salary) AS avg_salary \nFROM employees \nGROUP BY department;\n\n-- 3. Filter departments with more than 5 employees using HAVING\nSELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_salary \nFROM employees \nGROUP BY department \nHAVING COUNT(*) > 5 \nORDER BY avg_salary DESC;`,
          explanation: "Demonstrates COUNT, AVG, GROUP BY department, HAVING threshold filtering, and sorting."
        }
      ],
      bestPractices: [
        "Always include any non-aggregated column listed in SELECT within the GROUP BY clause."
      ],
      commonMistakes: [
        "Using WHERE with aggregate functions (e.g. WHERE AVG(salary) > 50000 causes SQL syntax error; use HAVING instead)."
      ],
      practiceExercise: {
        title: "Group By & Having Query",
        problem: "Write queries to: 1) Count total employees, 2) Calculate average salary per department, 3) Find departments where COUNT(*) > 5.",
        solutionCode: "SELECT COUNT(*) FROM employees;\nSELECT department, AVG(salary) FROM employees GROUP BY department;\nSELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;"
      },
      keyTakeaways: [
        "Aggregate functions collapse multiple rows into single summary scalar values.",
        "WHERE filters rows before grouping; HAVING filters summary groups after grouping."
      ],
      references: [
        { title: "PostgreSQL Aggregate Functions Manual", url: "https://www.postgresql.org/docs/current/tutorial-agg.html" }
      ]
    }
  },
  {
    id: "sql-mod-10",
    title: "Module 10 — SQL Joins & Relationships",
    description: "Master relational table joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, SELF JOIN, CROSS JOIN, table relationship types (1:1, 1:N, N:M), join conditions, and handling NULLs.",
    completed: true,
    order: 10,
    published: true,
    readingMaterial: {
      introduction: "Normalized databases store entities across separate specialized tables linked by Primary Keys and Foreign Keys. SQL Joins combine attributes from two or more tables into a unified analytical view.",
      objectives: [
        "Understand relational cardinality: One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (N:M)",
        "Understand Primary Key and Foreign Key links",
        "Master INNER JOIN (returns rows with matching keys in both tables)",
        "Master LEFT JOIN / LEFT OUTER JOIN (returns all left rows, matching right rows, NULL fallback)",
        "Master RIGHT JOIN / RIGHT OUTER JOIN",
        "Master FULL OUTER JOIN (returns all rows from both tables)",
        "Understand SELF JOIN (joining a table to itself) and CROSS JOIN (Cartesian product)",
        "Join 3 or more tables simultaneously",
        "Handle NULL values in outer joins"
      ],
      sections: [
        {
          heading: "SQL Join Types Matrix",
          text: "Visual guide to relational join types:",
          table: {
            headers: ["Join Type", "Matched Rows", "Unmatched Left Rows", "Unmatched Right Rows"],
            rows: [
              ["INNER JOIN", "Included", "Excluded", "Excluded"],
              ["LEFT JOIN", "Included", "Included (with NULLs)", "Excluded"],
              ["RIGHT JOIN", "Included", "Excluded", "Included (with NULLs)"],
              ["FULL OUTER JOIN", "Included", "Included (with NULLs)", "Included (with NULLs)"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "INNER JOIN and LEFT JOIN Examples",
          code: `-- 1. INNER JOIN connecting students and courses\nSELECT \n    students.name AS student_name, \n    courses.course_name \nFROM students \nINNER JOIN courses ON students.course_id = courses.course_id;\n\n-- 2. LEFT JOIN including students without enrolled courses\nSELECT \n    students.name AS student_name, \n    courses.course_name \nFROM students \nLEFT JOIN courses ON students.course_id = courses.course_id;`,
          explanation: "INNER JOIN returns matching pairs; LEFT JOIN preserves all students regardless of enrollment status."
        }
      ],
      bestPractices: [
        "Use explicit ANSI JOIN syntax (INNER JOIN ... ON ...) rather than implicit comma joins in WHERE."
      ],
      commonMistakes: [
        "Omitting the join condition ON clause causing an accidental massive Cartesian Cross Join."
      ],
      practiceExercise: {
        title: "Relational Join Exercise",
        problem: "Write an INNER JOIN query retrieving student name and course_name from students and courses tables.",
        solutionCode: "SELECT students.name, courses.course_name FROM students INNER JOIN courses ON students.course_id = courses.course_id;"
      },
      keyTakeaways: [
        "JOINs combine data columns across relational tables.",
        "INNER JOIN requires key matches in both tables; LEFT JOIN preserves all left table records."
      ],
      references: [
        { title: "PostgreSQL Joins Documentation", url: "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-FROM" }
      ]
    }
  },
  {
    id: "sql-mod-11",
    title: "Module 11 — Subqueries, UNION & Advanced Querying",
    description: "Master subqueries (WHERE, SELECT, FROM), single & multi-row subqueries, IN / EXISTS subqueries, correlated subqueries, set operators (UNION, UNION ALL, INTERSECT, EXCEPT), and Common Table Expressions (CTEs).",
    completed: true,
    order: 11,
    published: true,
    readingMaterial: {
      introduction: "Subqueries (nested queries enclosed in parentheses) allow query outputs to feed dynamically into outer SQL statements. Set operators combine query result sets, while CTEs simplify complex logic.",
      objectives: [
        "Write subqueries in WHERE, SELECT, and FROM clauses",
        "Master single-row subqueries returning scalar values",
        "Master multiple-row subqueries using IN, ANY, and ALL",
        "Use EXISTS and NOT EXISTS subquery validation",
        "Understand Correlated Subqueries (inner query references outer query row)",
        "Combine result sets using UNION (distinct) and UNION ALL (duplicates preserved)",
        "Use INTERSECT and EXCEPT / MINUS set operators",
        "Introduction to Common Table Expressions (WITH cte AS (...))"
      ],
      sections: [
        {
          heading: "UNION vs UNION ALL",
          text: "UNION combines query outputs while eliminating duplicate rows (requires expensive sort/deduplication). UNION ALL combines outputs preserving all rows instantly."
        }
      ],
      codeExamples: [
        {
          title: "Subquery, CTE, and UNION Queries",
          code: `-- 1. Subquery in WHERE clause (Employees earning above average)\nSELECT name, salary \nFROM employees \nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- 2. Common Table Expression (CTE)\nWITH AvgSalaryCTE AS (\n    SELECT AVG(salary) AS avg_sal FROM employees\n)\nSELECT e.name, e.salary \nFROM employees e, AvgSalaryCTE a \nWHERE e.salary > a.avg_sal;\n\n-- 3. UNION ALL set operator\nSELECT name, 'Student' AS role FROM students\nUNION ALL\nSELECT name, 'Instructor' AS role FROM instructors;`,
          explanation: "Demonstrates scalar subqueries, readable WITH CTEs, and UNION ALL set combination."
        }
      ],
      bestPractices: [
        "Use WITH CTEs instead of deeply nested subqueries to improve code readability.",
        "Prefer UNION ALL over UNION when you know result sets are disjoint."
      ],
      commonMistakes: [
        "Writing a subquery in WHERE with = when the subquery returns multiple rows (causes 'subquery returned more than 1 row' error; use IN instead)."
      ],
      practiceExercise: {
        title: "Subquery Filter Test",
        problem: "Write a subquery retrieving employee names and salaries where salary > (SELECT AVG(salary) FROM employees).",
        solutionCode: "SELECT name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
      },
      keyTakeaways: [
        "Subqueries nest queries inside larger outer SQL statements.",
        "CTEs (WITH clause) clarify complex multi-step analytical pipelines."
      ],
      references: [
        { title: "PostgreSQL CTEs Documentation", url: "https://www.postgresql.org/docs/current/queries-with.html" }
      ]
    }
  },
  {
    id: "sql-mod-12",
    title: "Module 12 — SQL Functions & Conditional Logic",
    description: "Learn built-in scalar functions: String (CONCAT, UPPER, LOWER, LENGTH, SUBSTRING, TRIM, REPLACE), Numeric (ROUND, CEILING, FLOOR, ABS), Date/Time, and Conditional Logic (CASE statements, COALESCE).",
    completed: true,
    order: 12,
    published: true,
    readingMaterial: {
      introduction: "Scalar functions manipulate individual column values row-by-row. Conditional logic using the CASE statement introduces if-then-else decision making directly inside SQL queries.",
      objectives: [
        "Master string functions: CONCAT(), UPPER(), LOWER(), LENGTH(), SUBSTRING(), TRIM(), REPLACE()",
        "Master numeric functions: ROUND(), CEILING(), FLOOR(), ABS()",
        "Master date/time functions: CURRENT_DATE, AGE(), EXTRACT(YEAR/MONTH/DAY from date)",
        "Write Simple and Searched CASE statements inside SELECT queries",
        "Combine CASE statements with Aggregate functions for pivot reporting",
        "Handle missing NULL values cleanly using COALESCE(val, fallback)"
      ],
      sections: [
        {
          heading: "Conditional Logic: The CASE Statement",
          text: "Syntax of searched CASE statement:",
          codeExamples: [
            {
              title: "Searched CASE Statement Example",
              code: `SELECT \n    name, \n    salary,\n    CASE \n        WHEN salary >= 50000 THEN 'High'\n        WHEN salary >= 30000 THEN 'Medium'\n        ELSE 'Low'\n    END AS salary_category\nFROM employees;`,
              explanation: "Categorizes employee salaries into High, Medium, or Low tiers."
            }
          ]
        }
      ],
      codeExamples: [
        {
          title: "String Functions and COALESCE",
          code: `-- String formatting and concatenation\nSELECT \n    UPPER(CONCAT(first_name, ' ', last_name)) AS full_name_upper,\n    LENGTH(email) AS email_length,\n    COALESCE(phone_number, 'N/A') AS contact_phone\nFROM customers;`,
          explanation: "Demonstrates UPPER, CONCAT, LENGTH, and COALESCE fallback handling."
        }
      ],
      bestPractices: [
        "Use COALESCE to supply user-friendly fallbacks for NULL fields in report outputs."
      ],
      commonMistakes: [
        "Forgetting the END keyword when closing a CASE statement."
      ],
      practiceExercise: {
        title: "CASE Statement Exercise",
        problem: "Write a query categorizing salaries into 'High' (>=50000), 'Medium' (>=30000), and 'Low' (ELSE).",
        solutionCode: "SELECT name, salary, CASE WHEN salary >= 50000 THEN 'High' WHEN salary >= 30000 THEN 'Medium' ELSE 'Low' END AS salary_category FROM employees;"
      },
      keyTakeaways: [
        "Scalar functions transform column values row-by-row.",
        "CASE statements bring if-then-else conditional branching into SQL queries."
      ],
      references: [
        { title: "PostgreSQL String Functions Manual", url: "https://www.postgresql.org/docs/current/functions-string.html" }
      ]
    }
  },
  {
    id: "sql-mod-13",
    title: "Module 13 — Views, Indexes & Database Optimization",
    description: "Learn Database Views (create, query, drop), Indexing strategies (single-column, composite, unique), index trade-offs, query performance optimization, and inspecting EXPLAIN execution plans.",
    completed: true,
    order: 13,
    published: true,
    readingMaterial: {
      introduction: "As database tables scale to millions of records, query optimization becomes critical. Views save reusable query abstractions, while Indexes drastically accelerate data lookup speed.",
      objectives: [
        "Understand Database Views (virtual saved tables)",
        "Create, query, update, and drop views using CREATE VIEW and DROP VIEW",
        "Understand what Indexes are and how B-Tree indexes speed up searches",
        "Create single-column, composite, and unique indexes using CREATE INDEX",
        "Understand trade-offs: Indexes speed up SELECT, but slightly slow down INSERT/UPDATE/DELETE",
        "Identify when NOT to create an index (small tables, rarely queried columns)",
        "Analyze query performance using EXPLAIN and EXPLAIN ANALYZE"
      ],
      sections: [
        {
          heading: "How B-Tree Indexes Work",
          text: "Without an index, searching for a specific record requires a full table scan O(N). A B-Tree index maintains a balanced search tree mapping index keys to physical disk pointers, reducing lookup time to logarithmic O(log N)."
        }
      ],
      codeExamples: [
        {
          title: "Views, Indexes, and Query Execution Plans",
          code: `-- 1. Create virtual view for active employee summary\nCREATE VIEW employee_summary AS \nSELECT name, department, salary \nFROM employees \nWHERE is_active = TRUE;\n\n-- 2. Query saved view as if it were a table\nSELECT * FROM employee_summary WHERE salary > 40000;\n\n-- 3. Create single-column index on employee name\nCREATE INDEX idx_employee_name ON employees(name);\n\n-- 4. Inspect query execution plan\nEXPLAIN ANALYZE SELECT * FROM employees WHERE name = 'Rahul';`,
          explanation: "Demonstrates CREATE VIEW, CREATE INDEX, and EXPLAIN ANALYZE performance inspection."
        }
      ],
      bestPractices: [
        "Index Foreign Key columns and columns frequently used in WHERE, JOIN, and ORDER BY clauses."
      ],
      commonMistakes: [
        "Over-indexing tables—creating dozens of unused indexes degrades INSERT and UPDATE speed."
      ],
      practiceExercise: {
        title: "Views & Indexing Exercise",
        problem: "Write statements to: 1) Create view 'employee_summary', 2) Create index 'idx_employee_name' on employees(name).",
        solutionCode: "CREATE VIEW employee_summary AS SELECT name, department, salary FROM employees;\nCREATE INDEX idx_employee_name ON employees(name);"
      },
      keyTakeaways: [
        "Views save complex queries as reusable virtual tables.",
        "Indexes turn slow O(N) full table scans into lightning-fast O(log N) lookups."
      ],
      references: [
        { title: "PostgreSQL Indexing Manual", url: "https://www.postgresql.org/docs/current/indexes.html" }
      ]
    }
  },
  {
    id: "sql-mod-14",
    title: "Module 14 — Transactions, TCL & Database Security",
    description: "Master Transaction Control Language (TCL): BEGIN, COMMIT, ROLLBACK, SAVEPOINT, ACID properties (Atomicity, Consistency, Isolation, Durability), DCL commands (GRANT, REVOKE), roles, and SQL Injection defense.",
    completed: true,
    order: 14,
    published: true,
    readingMaterial: {
      introduction: "Database Transactions group multiple SQL statements into a single, atomic unit of work. TCL guarantees data consistency, while Data Control Language (DCL) manages security and permissions.",
      objectives: [
        "Understand what a Transaction is and the complete transaction lifecycle",
        "Master TCL commands: COMMIT (save permanently) and ROLLBACK (undo changes)",
        "Use SAVEPOINT for partial transaction rollbacks",
        "Master the 4 ACID Properties: Atomicity, Consistency, Isolation, Durability",
        "Introduction to Data Control Language (DCL): GRANT and REVOKE permissions",
        "Manage database users, roles, and principle of least privilege",
        "Understand SQL Injection security vulnerabilities and defense using parameterized queries"
      ],
      sections: [
        {
          heading: "The 4 ACID Properties of Database Transactions",
          table: {
            headers: ["Property", "Definition", "Guarantee"],
            rows: [
              ["Atomicity", "All-or-nothing execution", "If one statement fails, the entire transaction rolls back"],
              ["Consistency", "Valid state transitions", "Data must satisfy all schema constraints before and after"],
              ["Isolation", "Concurrent transaction independence", "Transactions execute without interfering with one another"],
              ["Durability", "Permanent committed persistence", "Committed transactions survive system crashes"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Bank Account Transfer Transaction & DCL Permissions",
          code: `-- 1. Bank Money Transfer Transaction\nBEGIN TRANSACTION;\n\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 2;\n\n-- If both updates succeed, commit permanently\nCOMMIT;\n-- If any error occurs, rollback: ROLLBACK;\n\n-- 2. DCL Permissions Management\nGRANT SELECT, INSERT ON database_name.table_name TO 'username'@'localhost';\nREVOKE INSERT ON database_name.table_name FROM 'username'@'localhost';`,
          explanation: "Demonstrates atomic transaction commit/rollback and GRANT/REVOKE DCL security commands."
        }
      ],
      bestPractices: [
        "Wrap multi-table financial or inventory updates inside explicit BEGIN ... COMMIT transaction blocks.",
        "Always use parameterized queries to prevent SQL Injection attacks."
      ],
      commonMistakes: [
        "Assuming changes are rollbackable after executing COMMIT; once committed, changes cannot be undone with ROLLBACK."
      ],
      practiceExercise: {
        title: "TCL & Security Check",
        problem: "Write statements demonstrating COMMIT and ROLLBACK transaction control.",
        solutionCode: "COMMIT;\nROLLBACK;"
      },
      keyTakeaways: [
        "Transactions enforce ACID guarantees across multi-statement workflows.",
        "COMMIT saves changes permanently; ROLLBACK reverts to the last committed state."
      ],
      references: [
        { title: "PostgreSQL Transactions Manual", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" }
      ]
    }
  },
  {
    id: "sql-mod-15",
    title: "Module 15 — SQL for Data Analytics, Python & AI + Final Project",
    description: "Master SQL for Data Analytics, SQL + Python integration (sqlite3, Pandas read_sql), AI-assisted SQL workflows (NL-to-SQL, query generation, explain, debug, optimize), and the E-Commerce Sales Database Capstone Project.",
    completed: true,
    order: 15,
    published: true,
    readingMaterial: {
      introduction: "Welcome to the final capstone module! Combine everything you have learned: advanced analytical querying, connecting Python to SQL databases, leveraging AI assistance safely, and building an end-to-end E-Commerce Sales Database Project.",
      objectives: [
        "Conduct SQL Data Analytics: Cohorts, customer churn, revenue trends, and employee performance",
        "Integrate SQL with Python using sqlite3 and Pandas read_sql() workflows",
        "Leverage AI-Assisted SQL: Natural Language to SQL, AI query generation, explanation, debugging, and optimization",
        "Understand AI SQL privacy and verification best practices",
        "Build the Final Project: E-Commerce Sales Database Schema, Queries, Views, and Executive Reports"
      ],
      sections: [
        {
          heading: "Python + SQL & Pandas Analytics Pipeline",
          text: "Connecting Python scripts directly to relational databases using sqlite3 and Pandas:",
          codeExamples: [
            {
              title: "Python + SQLite + Pandas Integration",
              code: `import sqlite3\nimport pandas as pd\n\n# 1. Connect to SQLite database\nconn = sqlite3.connect('ecommerce.db')\n\n# 2. Execute SQL analytical query directly into Pandas DataFrame\nquery = '''\nSELECT p.category, SUM(oi.quantity * oi.unit_price) AS total_revenue\nFROM order_items oi\nJOIN products p ON oi.product_id = p.id\nGROUP BY p.category\nORDER BY total_revenue DESC;\n'''\n\ndf = pd.read_sql_query(query, conn)\nprint("Category Revenue Summary:")\nprint(df)\n\nconn.close()`,
              explanation: "Loads SQL query results directly into Pandas DataFrame for statistical visualization."
            }
          ]
        },
        {
          heading: "Final Project — E-Commerce Sales Database",
          text: "Project Requirements & Schema Design:",
          bulletPoints: [
            "Create relational tables: customers, products, orders, order_items, payments, employees.",
            "Define primary keys, foreign keys, auto-increments, and check constraints.",
            "Insert sample records for customers, products, and orders.",
            "Write analytical queries: Calculate total revenue, top-selling products, average order value (AOV), and customer order counts.",
            "Create reusable Views and B-Tree Indexes for fast query execution."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Final Capstone Analytics Query",
          code: `-- Final Project: Top 5 Highest Value Customers\nSELECT \n    c.customer_id,\n    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,\n    COUNT(DISTINCT o.order_id) AS total_orders,\n    SUM(oi.quantity * oi.unit_price) AS total_spent\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nJOIN order_items oi ON o.order_id = oi.order_id\nGROUP BY c.customer_id, c.first_name, c.last_name\nHAVING SUM(oi.quantity * oi.unit_price) > 500\nORDER BY total_spent DESC\nLIMIT 5;`,
          explanation: "Combines 3-table JOINs, CONCAT, COUNT(DISTINCT), SUM, GROUP BY, HAVING, ORDER BY, and LIMIT."
        }
      ],
      bestPractices: [
        "Always validate AI-generated SQL queries against database schemas before executing in production.",
        "Clean network data streams and handle NULLs before passing data into AI analytics models."
      ],
      commonMistakes: [
        "Blindly trusting AI-generated SQL queries without inspecting EXPLAIN query execution plans."
      ],
      practiceExercise: {
        title: "Final Capstone Query Test",
        problem: "Write a SQL query retrieving category and total revenue (SUM(quantity * unit_price)) from order_items joined with products grouped by category.",
        solutionCode: "SELECT p.category, SUM(oi.quantity * oi.unit_price) AS total_revenue FROM order_items oi JOIN products p ON oi.product_id = p.id GROUP BY p.category ORDER BY total_revenue DESC;"
      },
      keyTakeaways: [
        "Python + SQL + Pandas creates a complete data science and reporting pipeline.",
        "AI tools accelerate SQL query writing when backed by manual validation.",
        "Congratulations! You have completed the 15-Module SQL Learning Curriculum!"
      ],
      references: [
        { title: "Pandas read_sql Documentation", url: "https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_sql.html" },
        { title: "Arshith Boot Camp Final Certification Portal", url: "https://www.arshithbootcamp.com" }
      ]
    }
  }
];

// 1. Update server/data/db.json
const dbPath = path.join(__dirname, '../server/data/db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const sqlDbCourse = dbData.courses.find(c => c.id === 'sql-mastery' || c.category === 'SQL');
if (sqlDbCourse) {
  sqlDbCourse.duration = "35 hours";
  sqlDbCourse.description = "Master SQL & Relational Databases with our 15-module curriculum covering DDL, DML, WHERE filtering, ORDER BY, aggregate functions, GROUP BY, HAVING, JOINS, Subqueries, CTEs, Views, Indexes, Transactions (TCL), DCL security, Python integration, and AI-assisted SQL.";
  sqlDbCourse.whatYouWillLearn = [
    "Introduction to SQL, Databases, RDBMS, and Data Types",
    "Data Definition Language (DDL): CREATE, ALTER, DROP, TRUNCATE",
    "Constraints: Primary Key, Foreign Key, UNIQUE, CHECK, NOT NULL",
    "Data Manipulation Language (DML): INSERT, UPDATE, DELETE",
    "SELECT queries, Projection, Column/Table Aliases (AS)",
    "Filtering with WHERE, Comparison/Logical Operators, LIKE, IN, BETWEEN",
    "Sorting (ORDER BY ASC/DESC), Distinct values, LIMIT & Pagination",
    "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX), GROUP BY & HAVING",
    "Relational Joins: INNER, LEFT, RIGHT, FULL OUTER, SELF, CROSS JOIN",
    "Subqueries, Common Table Expressions (CTEs), UNION & UNION ALL",
    "Scalar Functions (String, Math, Date) & Conditional CASE Statements",
    "Views, B-Tree Indexes, EXPLAIN performance tuning & ACID Transactions",
    "Data Analytics, Python sqlite3 + Pandas integration & AI-Assisted SQL"
  ];
  sqlDbCourse.modules = sqlModules;
}

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log('Successfully updated server/data/db.json with 15 SQL modules!');

// 2. Update src/data/coursesData.js
const coursesDataPath = path.join(__dirname, '../src/data/coursesData.js');
let coursesCode = fs.readFileSync(coursesDataPath, 'utf8');

const sqlCourseRegex = /id:\s*"sql-data-analysis",[\s\S]*?modules:\s*\[[\s\S]*?\]\s*\}/;

const newSqlCourseCode = `id: "sql-data-analysis",
    title: "SQL & Relational Databases",
    category: "SQL",
    level: "All Levels",
    duration: "35 hours",
    rating: 4.9,
    studentsCount: "14.8k",
    studentsNumeric: 14800,
    price: 0,
    isFree: true,
    bestseller: true,
    progress: 20,
    iconBg: "bg-cyan-50 border-2 border-cyan-200 text-cyan-600",
    iconType: "database",
    introVideoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Master Relational Databases & SQL with our comprehensive 15-module curriculum based on the complete SQL manual. Covers DDL, DML, filtering, aggregation, Joins, Subqueries, CTEs, Views, Indexes, Transactions, DCL security, Python integration, AI-assisted SQL, and Capstone E-Commerce Project.",
    instructor: {
      name: "Siddharth Nair & Dr. Ananya Sharma",
      role: "Principal Data Architect @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    whatYouWillLearn: [
      "Introduction to SQL, Databases, RDBMS, and Data Types",
      "Data Definition Language (DDL): CREATE, ALTER, DROP, TRUNCATE",
      "Constraints: Primary Key, Foreign Key, UNIQUE, CHECK, NOT NULL",
      "Data Manipulation Language (DML): INSERT, UPDATE, DELETE",
      "SELECT queries, Projection, Column/Table Aliases (AS)",
      "Filtering with WHERE, Comparison/Logical Operators, LIKE, IN, BETWEEN",
      "Sorting (ORDER BY ASC/DESC), Distinct values, LIMIT & Pagination",
      "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX), GROUP BY & HAVING",
      "Relational Joins: INNER, LEFT, RIGHT, FULL OUTER, SELF, CROSS JOIN",
      "Subqueries, Common Table Expressions (CTEs), UNION & UNION ALL",
      "Scalar Functions (String, Math, Date) & Conditional CASE Statements",
      "Views, B-Tree Indexes, EXPLAIN performance tuning & ACID Transactions",
      "Data Analytics, Python sqlite3 + Pandas integration & AI-Assisted SQL"
    ],
    modules: ${JSON.stringify(sqlModules, null, 6)}
  }`;

coursesCode = coursesCode.replace(sqlCourseRegex, newSqlCourseCode);
fs.writeFileSync(coursesDataPath, coursesCode, 'utf8');
console.log('Successfully updated src/data/coursesData.js with 15 SQL modules!');

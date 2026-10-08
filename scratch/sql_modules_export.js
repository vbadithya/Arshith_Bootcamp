export function buildSqlModules() {
  return [
    {
      id: "sql-mod-1",
      title: "Module 01 — Introduction to SQL & Databases",
      description: "Learn what SQL is, relational database architecture, RDBMS engines (PostgreSQL, MySQL, SQLite), primary keys, table relationships, and applications across Software Engineering, Data Analytics, Data Science, and AI.",
      completed: false,
      order: 1,
      published: true,
      readingMaterial: {
        introduction: "Welcome to Module 1 of the SQL Course! Structured Query Language (SQL) is the universal, domain-specific standard language used to define, query, manage, and manipulate data stored inside Relational Database Management Systems (RDBMS). In modern computing, data is the most valuable asset. Relational databases store information in structured tables composed of rows (records) and columns (fields), creating a clear, scalable model for data storage.",
        objectives: [
          "Understand what SQL is and why it is essential across Software Engineering, Data Analytics, Data Science, and AI/ML",
          "Define Database, Relational Database, and RDBMS (Relational Database Management System)",
          "Understand the architectural difference between SQL (language), RDBMS (engine), and DBMS (database management system)",
          "Master table anatomy: Rows (records/tuples), Columns (fields/attributes), and Primary Keys",
          "Understand relationships between relational tables (One-to-One, One-to-Many, Many-to-Many)",
          "Learn the key advantages of SQL: declarative query syntax, ACID compliance, data integrity constraints, and high-performance indexing"
        ],
        sections: [
          {
            heading: "What is SQL & Relational Database Architecture?",
            text: "A Database is an organized collection of structured data stored electronically. A Relational Database organizes data into formal tables consisting of rows and columns. An RDBMS (such as PostgreSQL, MySQL, SQLite, Oracle, or MS SQL Server) is the underlying software engine that executes SQL statements, handles multi-user concurrency, manages disk storage, and enforces security constraints."
          },
          {
            heading: "Tables, Rows, Columns & Primary Keys",
            text: "The fundamental building block of an RDBMS is the Table:",
            bulletPoints: [
              "Columns (Fields / Attributes): Define the type of data stored (e.g. student_id, first_name, email, age).",
              "Rows (Records / Tuples): Represent individual data instances (e.g. Rahul Sharma, age 21).",
              "Primary Key: A special column (or set of columns) that uniquely identifies every row in a table. Primary keys cannot contain duplicate or NULL values."
            ],
            table: {
              headers: ["Concept", "Alternative Term", "Description", "Example in Students Table"],
              rows: [
                ["Table", "Entity / Relation", "Collection of related data records", "students"],
                ["Column", "Field / Attribute", "Vertical data attribute specification", "email VARCHAR(100)"],
                ["Row", "Record / Tuple", "Horizontal individual entry", "1 | Rahul | rahul@example.com"],
                ["Primary Key", "Unique Identifier", "Uniquely identifies each table row", "student_id = 1"]
              ]
            }
          },
          {
            heading: "SQL Applications in Modern Tech Stacks",
            text: "SQL skills are required across all technical domains:",
            bulletPoints: [
              "Software Engineering: Storing user accounts, authentication credentials, e-commerce orders, and transactional states.",
              "Data Analytics & BI: Aggregating business KPIs, calculating revenue growth, tracking customer churn, and feeding Tableau/Power BI dashboards.",
              "Data Science & AI: Extracting raw data streams, performing SQL data cleaning, building training feature sets, and piping datasets into Python Pandas or Machine Learning models."
            ]
          }
        ],
        codeExamples: [
          {
            title: "First SQL Query — Retrieving All Records from a Table",
            code: `-- Querying all columns and rows from the students table
SELECT * FROM students;

-- Querying specific attributes
SELECT student_id, name, email FROM students;`,
            explanation: "SELECT * instructs the database engine to retrieve all fields from the target table. Specifying column names (student_id, name, email) projects only desired attributes."
          }
        ],
        bestPractices: [
          "Write SQL keywords in UPPERCASE (SELECT, FROM, WHERE) to distinguish language commands from table identifiers.",
          "Always terminate SQL statements with a semicolon (;).",
          "Choose descriptive, lower_snake_case names for table and column identifiers."
        ],
        commonMistakes: [
          "Confusing SQL (the declarative query language) with RDBMS database software engines like MySQL, PostgreSQL, or SQLite."
        ],
        practiceExercise: {
          title: "Relational Structure Check",
          problem: "Write a SQL query that retrieves all columns from a table named 'courses'.",
          solutionCode: "SELECT * FROM courses;"
        },
        keyTakeaways: [
          "SQL is declarative: you specify WHAT data you want, and the database engine decides HOW to fetch it.",
          "Relational databases organize data into rows and columns linked by Primary and Foreign Keys.",
          "RDBMS software engines enforce data integrity, ACID compliance, and concurrency."
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
      completed: false,
      order: 2,
      published: true,
      readingMaterial: {
        introduction: "SQL syntax follows precise grammatical and lexical rules. A SQL statement is composed of clauses, keywords, identifiers (table and column names), operators, expressions, literals, comments, and data type declarations. Choosing appropriate data types ensures efficient disk storage and prevents data corruption.",
        objectives: [
          "Deconstruct SQL statement anatomy: Clauses, Keywords, Identifiers, Literals, and Expressions",
          "Learn table and column identifier naming conventions and reserved words rules",
          "Use single-line (--) and multi-line (/* */) comments to document queries",
          "Understand SQL case sensitivity conventions and statement termination with semicolons (;)",
          "Master numeric data types: INT, BIGINT, DECIMAL(p,s), FLOAT",
          "Master character and string data types: CHAR(n), VARCHAR(n), TEXT",
          "Master date and time data types: DATE, TIME, TIMESTAMP",
          "Understand Boolean data types (TRUE, FALSE) and the NULL state"
        ],
        sections: [
          {
            heading: "SQL Data Types Reference Matrix",
            text: "Every column in a relational table must be assigned a fixed data type:",
            table: {
              headers: ["Category", "Data Type", "Example Literal", "Description & Usage"],
              rows: [
                ["Integer", "INT / INTEGER", "42, -100", "Whole numbers without decimals (-2B to +2B range)"],
                ["Big Integer", "BIGINT", "9223372036854775807", "Large whole numbers for auto-increment IDs"],
                ["Fixed Decimal", "DECIMAL(10,2)", "199.99", "Exact numbers for money/currency calculations"],
                ["Floating Point", "FLOAT / DOUBLE", "3.14159265", "Approximate real numbers for scientific values"],
                ["Variable String", "VARCHAR(100)", "'Rahul Sharma'", "Variable-length text string up to n characters"],
                ["Unlimited Text", "TEXT", "'Long description...'", "Arbitrarily long text passages"],
                ["Date", "DATE", "'2026-10-03'", "Calendar date (Year-Month-Day)"],
                ["Timestamp", "TIMESTAMP", "'2026-10-03 09:30:00'", "Combined date and clock time"],
                ["Logical", "BOOLEAN", "TRUE, FALSE", "Logical true/false flag"],
                ["Null State", "NULL", "NULL", "Represents missing, unknown, or unassigned data"]
              ]
            }
          },
          {
            heading: "SQL Reserved Words & Naming Rules",
            text: "SQL keywords like SELECT, FROM, WHERE, CREATE, ALTER, TABLE, and DROP are reserved words. They cannot be used as unquoted table or column names. Identifiers should use letters, numbers, and underscores in snake_case (e.g., student_id, created_at)."
          }
        ],
        codeExamples: [
          {
            title: "SQL Query with Comments and Data Types",
            code: `-- Single-line comment: Query active students
SELECT name, age FROM students;

/* 
   Multi-line comment:
   Filter active students registered with valid email addresses
*/
SELECT 
    student_id, 
    name, 
    email 
FROM students 
WHERE is_active = TRUE;`,
            explanation: "Shows single-line (--) and multi-line (/* */) comments, formatting, and boolean filtering."
          }
        ],
        bestPractices: [
          "Use snake_case for table and column names (e.g. order_item_id, total_amount).",
          "Never use reserved keywords like 'date', 'user', or 'table' as column names.",
          "Use DECIMAL(p,s) instead of FLOAT for currency values to avoid rounding errors."
        ],
        commonMistakes: [
          "Confusing NULL with 0 or empty string ''; NULL represents an unassigned missing state, whereas 0 is a valid numeric value."
        ],
        practiceExercise: {
          title: "Select Specific Columns",
          problem: "Write a SQL query that retrieves 'name' and 'email' from the 'students' table.",
          solutionCode: "SELECT name, email FROM students;"
        },
        keyTakeaways: [
          "Semicolons (;) terminate SQL statements.",
          "Data types restrict allowed values and optimize database storage efficiency.",
          "NULL indicates missing or unknown data."
        ],
        references: [
          { title: "PostgreSQL Data Types Documentation", url: "https://www.postgresql.org/docs/current/datatype.html" }
        ]
      }
    },
    {
      id: "sql-mod-3",
      title: "Module 03 — DDL: Creating & Managing Database Structures",
      description: "Learn Data Definition Language (DDL) statements: CREATE DATABASE, CREATE TABLE, ALTER TABLE (ADD, MODIFY, DROP COLUMN), RENAME TABLE, DROP TABLE, and TRUNCATE TABLE.",
      completed: false,
      order: 3,
      published: true,
      readingMaterial: {
        introduction: "Data Definition Language (DDL) encompasses the subset of SQL commands used to create, modify, rename, and delete physical database structures including databases, tables, columns, indexes, and views. DDL statements directly modify the database catalog schema.",
        objectives: [
          "Create new databases using the CREATE DATABASE statement",
          "Define structured relational tables using CREATE TABLE statement",
          "Modify existing tables using ALTER TABLE (ADD COLUMN, MODIFY/ALTER COLUMN, DROP COLUMN)",
          "Rename database tables using RENAME TABLE",
          "Permanently delete tables and schema definitions using DROP TABLE",
          "Instantly clear table rows while maintaining schema using TRUNCATE TABLE",
          "Compare the critical differences between DROP TABLE, TRUNCATE TABLE, and DELETE"
        ],
        sections: [
          {
            heading: "Core DDL Commands Reference",
            text: "Summary of DDL commands:",
            bulletPoints: [
              "CREATE DATABASE dbname;: Instantiates a new isolated database container.",
              "CREATE TABLE tablename (...);: Defines a new relational table schema.",
              "ALTER TABLE tablename ADD COLUMN colname datatype;: Extends an existing table schema with a new column.",
              "ALTER TABLE tablename DROP COLUMN colname;: Removes a column and all its stored data.",
              "RENAME TABLE old_name TO new_name;: Renames a database table object.",
              "TRUNCATE TABLE tablename;: Fast operation that purges all rows from a table while keeping structure intact.",
              "DROP TABLE tablename;: Completely deletes the table, its schema definition, indexes, and all stored data."
            ]
          },
          {
            heading: "Comparing DROP TABLE vs TRUNCATE TABLE vs DELETE",
            table: {
              headers: ["Command", "Category", "Effect on Structure", "Effect on Data", "Speed"],
              rows: [
                ["DROP TABLE", "DDL", "Deletes entire structure", "Deletes all data", "Instant"],
                ["TRUNCATE TABLE", "DDL", "Preserves structure", "Deletes all data rows", "Ultra-fast"],
                ["DELETE FROM", "DML", "Preserves structure", "Deletes filtered/all rows", "Slower (row-by-row)"]
              ]
            }
          }
        ],
        codeExamples: [
          {
            title: "Creating, Altering, and Truncating Tables (DDL)",
            code: `-- 1. Create a new students table
CREATE TABLE students (
    student_id INT,
    name VARCHAR(100),
    age INT
);

-- 2. Add email column to students table
ALTER TABLE students ADD COLUMN email VARCHAR(150);

-- 3. Modify age column data type
ALTER TABLE students MODIFY COLUMN age SMALLINT;

-- 4. Rename table
RENAME TABLE students TO student_records;

-- 5. Empty table rows while preserving structure
TRUNCATE TABLE student_records;`,
            explanation: "Demonstrates DDL CREATE TABLE, ALTER TABLE (ADD and MODIFY), RENAME TABLE, and TRUNCATE TABLE."
          }
        ],
        bestPractices: [
          "Always verify database backups before running DROP TABLE or TRUNCATE TABLE commands in production environments."
        ],
        commonMistakes: [
          "Using DROP TABLE when you only intended to clear table rows (TRUNCATE TABLE)."
        ],
        practiceExercise: {
          title: "Create Students Schema",
          problem: "Write a SQL statement creating a 'students' table with student_id (INT), name (VARCHAR(100)), and age (INT).",
          solutionCode: "CREATE TABLE students (student_id INT, name VARCHAR(100), age INT);"
        },
        keyTakeaways: [
          "DDL statements build and modify database schema structures.",
          "TRUNCATE clears table rows much faster than DELETE while preserving the table schema."
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
      completed: false,
      order: 4,
      published: true,
      readingMaterial: {
        introduction: "Database constraints are rules declared on columns or tables that restrict the type of data inserted or updated. Constraints enforce domain integrity, entity integrity, and referential integrity across relational tables.",
        objectives: [
          "Understand why constraints are required to prevent data corruption",
          "Define PRIMARY KEY constraint (uniquely identifies each record, implicitly NOT NULL)",
          "Define FOREIGN KEY constraint linking child tables to parent table primary keys",
          "Apply UNIQUE, NOT NULL, DEFAULT, and CHECK constraints",
          "Use AUTO_INCREMENT / IDENTITY / SERIAL for synthetic auto-number keys",
          "Understand composite primary keys (keys spanning multiple columns)",
          "Enforce referential integrity with ON DELETE CASCADE and ON UPDATE CASCADE"
        ],
        sections: [
          {
            heading: "Core SQL Constraints Guide",
            table: {
              headers: ["Constraint", "Type", "Enforced Rule", "Example Use Case"],
              rows: [
                ["PRIMARY KEY", "Entity", "Uniquely identifies rows; no NULLs or duplicates", "student_id INT PRIMARY KEY"],
                ["FOREIGN KEY", "Referential", "Ensures values exist in parent table PK", "FOREIGN KEY (dept_id) REFERENCES departments(id)"],
                ["UNIQUE", "Domain", "Prevents duplicate values in column", "email VARCHAR(100) UNIQUE"],
                ["NOT NULL", "Domain", "Rejects NULL / unassigned entries", "name VARCHAR(100) NOT NULL"],
                ["CHECK", "Domain", "Validates Boolean expression", "CHECK (age >= 18)"],
                ["DEFAULT", "Domain", "Supplies fallback if value is omitted", "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"]
              ]
            }
          },
          {
            heading: "Referential Integrity & ON DELETE CASCADE",
            text: "When a parent table record is deleted, Foreign Keys can automatically handle child records. ON DELETE CASCADE automatically deletes all dependent child table rows when the parent record is deleted, keeping relational data consistent."
          }
        ],
        codeExamples: [
          {
            title: "Relational Schema with Constraints & Foreign Keys",
            code: `-- Parent Table: Departments
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE
);

-- Child Table: Students with Foreign Key & Check Constraints
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT CHECK (age >= 18),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id) ON DELETE CASCADE
);`,
            explanation: "Defines primary keys, check constraints, unique fields, and a foreign key with ON DELETE CASCADE."
          }
        ],
        bestPractices: [
          "Always define a Primary Key on every relational database table.",
          "Use Foreign Keys with ON DELETE CASCADE when child entries should not exist without a parent."
        ],
        commonMistakes: [
          "Inserting a child table record with a Foreign Key value that does not exist in the parent table (causes Foreign Key Violation Error)."
        ],
        practiceExercise: {
          title: "Constraint Schema Construction",
          problem: "Create a students table with student_id PRIMARY KEY, name NOT NULL, email UNIQUE, and age CHECK (age >= 18).",
          solutionCode: "CREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE, age INT CHECK (age >= 18));"
        },
        keyTakeaways: [
          "Constraints protect database quality by rejecting invalid data inputs.",
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
      completed: false,
      order: 5,
      published: true,
      readingMaterial: {
        introduction: "Data Manipulation Language (DML) consists of SQL statements that manipulate row data stored inside database tables: inserting new records, modifying existing column values, and removing unwanted rows.",
        objectives: [
          "Insert single and multiple records using INSERT INTO ... VALUES",
          "Copy records between tables using INSERT INTO ... SELECT",
          "Modify existing column values using UPDATE ... SET ... WHERE",
          "Update multiple columns simultaneously",
          "Remove specific records using DELETE FROM ... WHERE",
          "Understand the extreme risk of running UPDATE or DELETE without a WHERE clause",
          "Distinguish DML (row data changes) vs DDL (structure schema changes)"
        ],
        sections: [
          {
            heading: "The Danger of Unconstrained UPDATE and DELETE",
            text: "If you omit the WHERE clause in an UPDATE statement (e.g., UPDATE students SET status = 'Inactive';), ALL rows in the table will be updated. Similarly, running DELETE FROM students; without a WHERE clause purges every single row in the table!"
          }
        ],
        codeExamples: [
          {
            title: "INSERT, UPDATE, and DELETE DML Operations",
            code: `-- 1. Insert a single student record
INSERT INTO students (student_id, name, age) VALUES (1, 'Rahul', 21);

-- 2. Bulk insert multiple records
INSERT INTO students (student_id, name, age) VALUES 
(2, 'Priya', 22),
(3, 'Arshith', 20);

-- 3. Update specific student record
UPDATE students 
SET age = 22, name = 'Rahul Sharma' 
WHERE student_id = 1;

-- 4. Delete specific student record
DELETE FROM students 
WHERE student_id = 1;`,
            explanation: "Shows exact DML statements for creating, updating, and removing table rows safely."
          }
        ],
        bestPractices: [
          "Always run a SELECT query with the same WHERE clause first to verify target rows before executing UPDATE or DELETE."
        ],
        commonMistakes: [
          "Accidentally omitting the WHERE clause in UPDATE or DELETE statements."
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
      completed: false,
      order: 6,
      published: true,
      readingMaterial: {
        introduction: "The SELECT statement is the primary SQL command used to retrieve data from database tables. It projects chosen attributes into a virtual result table.",
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
            text: "Projection refers to selecting specific table columns. Column Aliasing (AS) renames output header labels without modifying underlying database table schemas."
          }
        ],
        codeExamples: [
          {
            title: "SELECT Queries with Column Aliases",
            code: `-- Fetch all columns
SELECT * FROM students;

-- Fetch specific columns
SELECT name, age FROM students;

-- Fetch columns with custom Alias labels & calculated expression
SELECT 
    name AS student_full_name, 
    age AS student_age,
    age * 365 AS age_in_days
FROM students;`,
            explanation: "Demonstrates column selection, derived calculations, and aliases with AS."
          }
        ],
        bestPractices: [
          "Explicitly list required columns instead of using SELECT * in production applications."
        ],
        commonMistakes: [
          "Misspelling column names causing 'column does not exist' error."
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
      completed: false,
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
            text: "In SQL execution rules, AND is evaluated before OR. Always use parentheses when combining AND & OR to prevent logical bugs."
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
            code: `-- 1. Filter using comparison and logical operators
SELECT * FROM students 
WHERE age > 20 AND (department = 'CS' OR department = 'IT');

-- 2. Range filtering with BETWEEN
SELECT * FROM students 
WHERE age BETWEEN 18 AND 25;

-- 3. Pattern matching with LIKE wildcards
SELECT * FROM students 
WHERE name LIKE 'A%'; -- Names starting with 'A'

-- 4. Null value checks
SELECT * FROM students 
WHERE email IS NOT NULL;`,
            explanation: "Combines comparison operators, parentheses, range filtering, wildcards, and null checks."
          }
        ],
        bestPractices: [
          "Always use parentheses when mixing AND and OR in WHERE conditions.",
          "Use IS NULL or IS NOT NULL (never use = NULL)."
        ],
        commonMistakes: [
          "Assuming OR evaluates before AND without parentheses."
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
      completed: false,
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
            code: `-- 1. Select distinct department list
SELECT DISTINCT department FROM employees;

-- 2. Sort by salary descending
SELECT * FROM employees 
ORDER BY salary DESC;

-- 3. Top 5 highest paid employees (LIMIT)
SELECT * FROM employees 
ORDER BY salary DESC 
LIMIT 5;

-- 4. Paginate Page 2 (10 items per page)
SELECT * FROM employees 
ORDER BY employee_id ASC 
LIMIT 10 OFFSET 10;`,
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
      completed: false,
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
            code: `-- 1. Simple aggregate count
SELECT COUNT(*) FROM employees;

-- 2. Department average salary with GROUP BY
SELECT department, AVG(salary) AS avg_salary 
FROM employees 
GROUP BY department;

-- 3. Filter departments with more than 5 employees using HAVING
SELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_salary 
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 5 
ORDER BY avg_salary DESC;`,
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
      completed: false,
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
            code: `-- 1. INNER JOIN connecting students and courses
SELECT 
    students.name AS student_name, 
    courses.course_name 
FROM students 
INNER JOIN courses ON students.course_id = courses.course_id;

-- 2. LEFT JOIN including students without enrolled courses
SELECT 
    students.name AS student_name, 
    courses.course_name 
FROM students 
LEFT JOIN courses ON students.course_id = courses.course_id;`,
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
      completed: false,
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
            code: `-- 1. Subquery in WHERE clause (Employees earning above average)
SELECT name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 2. Common Table Expression (CTE)
WITH AvgSalaryCTE AS (
    SELECT AVG(salary) AS avg_sal FROM employees
)
SELECT e.name, e.salary 
FROM employees e, AvgSalaryCTE a 
WHERE e.salary > a.avg_sal;

-- 3. UNION ALL set operator
SELECT name, 'Student' AS role FROM students
UNION ALL
SELECT name, 'Instructor' AS role FROM instructors;`,
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
      completed: false,
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
                code: `SELECT 
    name, 
    salary,
    CASE 
        WHEN salary >= 50000 THEN 'High'
        WHEN salary >= 30000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_category
FROM employees;`,
                explanation: "Categorizes employee salaries into High, Medium, or Low tiers."
              }
            ]
          }
        ],
        codeExamples: [
          {
            title: "String Functions and COALESCE",
            code: `-- String formatting and concatenation
SELECT 
    UPPER(CONCAT(first_name, ' ', last_name)) AS full_name_upper,
    LENGTH(email) AS email_length,
    COALESCE(phone_number, 'N/A') AS contact_phone
FROM customers;`,
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
      completed: false,
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
            code: `-- 1. Create virtual view for active employee summary
CREATE VIEW employee_summary AS 
SELECT name, department, salary 
FROM employees 
WHERE is_active = TRUE;

-- 2. Query saved view as if it were a table
SELECT * FROM employee_summary WHERE salary > 40000;

-- 3. Create single-column index on employee name
CREATE INDEX idx_employee_name ON employees(name);

-- 4. Inspect query execution plan
EXPLAIN ANALYZE SELECT * FROM employees WHERE name = 'Rahul';`,
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
      completed: false,
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
            code: `-- 1. Bank Money Transfer Transaction
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- If both updates succeed, commit permanently
COMMIT;
-- If any error occurs, rollback: ROLLBACK;

-- 2. DCL Permissions Management
GRANT SELECT, INSERT ON database_name.table_name TO 'username'@'localhost';
REVOKE INSERT ON database_name.table_name FROM 'username'@'localhost';`,
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
      completed: false,
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
                code: `import sqlite3
import pandas as pd

# 1. Connect to SQLite database
conn = sqlite3.connect('ecommerce.db')

# 2. Execute SQL analytical query directly into Pandas DataFrame
query = '''
SELECT p.category, SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
GROUP BY p.category
ORDER BY total_revenue DESC;
'''

df = pd.read_sql_query(query, conn)
print("Category Revenue Summary:")
print(df)

conn.close()`,
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
            code: `-- Final Project: Top 5 Highest Value Customers
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    COUNT(DISTINCT o.order_id) AS total_orders,
    SUM(oi.quantity * oi.unit_price) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING SUM(oi.quantity * oi.unit_price) > 500
ORDER BY total_spent DESC
LIMIT 5;`,
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
}

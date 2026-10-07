const fs = require('fs');

const enrichedModules = [
  {
    id: "sql-mod-1",
    title: "Module 01 — Introduction to SQL & Databases",
    description: "Learn what SQL is, relational database architecture, RDBMS engines (PostgreSQL, MySQL, SQLite), primary keys, table relationships, and applications across Software Engineering, Data Analytics, Data Science, and AI.",
    completed: false,
    order: 1,
    published: true,
    readingMaterial: {
      introduction: "Welcome to Module 1! Structured Query Language (SQL) is the standard, domain-specific programming language used worldwide to interact with Relational Database Management Systems (RDBMS). In modern enterprise applications, data is stored in structured tables composed of rows (records) and columns (fields). SQL allows developers, data analysts, and software engineers to create, read, update, and manipulate millions of records safely and efficiently.",
      objectives: [
        "Understand the difference between relational databases (RDBMS) and non-relational databases (NoSQL)",
        "Learn the architecture of Relational Databases: Tables, Columns, Rows, Schemas, and Keys",
        "Compare major commercial and open-source database engines: PostgreSQL, MySQL, SQLite, and SQL Server",
        "Understand Client-Server database architecture vs embedded file-based databases",
        "Identify primary key constraints and fundamental table-to-table relationships",
        "Master basic SQL query structure and execution flow"
      ],
      sections: [
        {
          heading: "1. What is a Relational Database System (RDBMS)?",
          text: "A Relational Database organizes data into formal tables composed of rows and columns. Each row represents a unique entity instance (such as a Customer or Order), while each column represents a named attribute (such as email, price, or timestamp). Relationships between tables are established using Key constraints.",
          bulletPoints: [
            "Table (Relation): A two-dimensional grid of rows and columns containing structured data.",
            "Record (Tuple/Row): A single horizontal entry representing one entity instance.",
            "Field (Attribute/Column): A vertical column defining a specific data point with a strict data type.",
            "Primary Key (PK): A unique identifier assigned to every row to guarantee entity uniqueness.",
            "Foreign Key (FK): A column referencing the Primary Key of another table to build entity relationships."
          ],
          table: {
            headers: ["RDBMS Engine", "Type", "Best Use Case", "Key Feature"],
            rows: [
              ["PostgreSQL", "Open Source", "Enterprise & Analytics", "JSONB, Advanced Indexing, ACID Compliant"],
              ["MySQL", "Open Source", "Web Applications", "High Read Speeds, Replication, Wide Adoption"],
              ["SQLite", "Embedded File", "Mobile & Lightweight Apps", "Zero Config, Single-File Database"],
              ["Microsoft SQL Server", "Commercial", "Enterprise Windows Ecosystem", "T-SQL, Deep SSMS Tooling Integration"]
            ]
          }
        },
        {
          heading: "2. SQL Command Categories Overview",
          text: "SQL statements are categorized into 5 functional sub-languages based on their operational purpose:",
          bulletPoints: [
            "DDL (Data Definition Language): Defines and alters database structure (CREATE, ALTER, DROP, TRUNCATE).",
            "DML (Data Manipulation Language): Modifies record data (INSERT, UPDATE, DELETE).",
            "DQL (Data Query Language): Retrieves data from tables (SELECT).",
            "DCL (Data Control Language): Controls security and access permissions (GRANT, REVOKE).",
            "TCL (Transaction Control Language): Manages transaction state and integrity (COMMIT, ROLLBACK, SAVEPOINT)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Connecting to Database & Running Your First SQL Query",
          code: `-- Verification Query: Retrieve database engine version
SELECT version();

-- View current active database and user identity
SELECT current_database(), current_user;`,
          explanation: "These utility queries verify your active RDBMS connection, session user, and engine version prior to executing schema definition or data manipulation commands."
        }
      ],
      practiceExercise: {
        title: "Database Concept Identification",
        problem: "Identify which SQL command sub-language (DDL, DML, DQL, DCL, TCL) each of the following statements belongs to: 1. CREATE TABLE, 2. INSERT INTO, 3. SELECT, 4. COMMIT, 5. GRANT.",
        solutionCode: `-- Answer:
-- 1. CREATE TABLE -> DDL (Data Definition Language)
-- 2. INSERT INTO  -> DML (Data Manipulation Language)
-- 3. SELECT       -> DQL (Data Query Language)
-- 4. COMMIT       -> TCL (Transaction Control Language)
-- 5. GRANT        -> DCL (Data Control Language)`
      },
      keyTakeaways: [
        "SQL is declarative: You specify WHAT data you need, and the RDBMS query planner determines HOW to fetch it.",
        "Relational tables enforce data integrity using schemas, data types, and primary/foreign key constraints.",
        "PostgreSQL and MySQL are standard open-source enterprise databases, while SQLite provides zero-config file storage.",
        "DDL modifies structure, DML modifies data rows, and DQL fetches data."
      ]
    }
  },
  {
    id: "sql-mod-2",
    title: "Module 02 — SQL Syntax, Keywords & Data Types",
    description: "Master fundamental SQL syntax rules, keywords, identifier naming conventions, comment styles, and standard data types (Numeric, Character, Date/Time, Boolean).",
    completed: false,
    order: 2,
    published: true,
    readingMaterial: {
      introduction: "Writing clean, efficient SQL requires a thorough understanding of language syntax conventions, keywords, and data types. In SQL, data types dictate what kind of value a column can store, how much disk storage it requires, and what mathematical or string operations can be executed on it.",
      objectives: [
        "Master standard SQL syntax rules: Case sensitivity, reserved keywords, and statements",
        "Understand single-line (--) and multi-line (/* */) SQL comment conventions",
        "Choose correct Numeric data types: INT, BIGINT, DECIMAL(p,s), FLOAT",
        "Distinguish Character types: CHAR(n), VARCHAR(n), and TEXT",
        "Handle Date and Time types: DATE, TIME, TIMESTAMP, and TIMESTAMPTZ",
        "Avoid common data type implicit conversion bugs and storage bloat"
      ],
      sections: [
        {
          heading: "1. Core SQL Syntax Rules & Naming Conventions",
          text: "SQL code is generally case-insensitive regarding keywords (SELECT is identical to select), but standard industry best practice dictates writing SQL keywords in UPPERCASE and table/column identifiers in lowercase snake_case.",
          bulletPoints: [
            "Keywords in UPPERCASE: SELECT, FROM, WHERE, CREATE TABLE.",
            "Identifiers in snake_case: user_account, order_date, total_amount.",
            "Semicolon Terminator: Standard SQL statements end with a semicolon (;).",
            "Comments: Use -- for single-line notes and /* ... */ for multi-line documentation block."
          ]
        },
        {
          heading: "2. SQL Standard Data Types Matrix",
          text: "Selecting the precise data type ensures data integrity, prevents truncation errors, and optimizes database memory footprint.",
          table: {
            headers: ["Category", "Data Type", "Description & Usage", "Storage Size"],
            rows: [
              ["Integer", "INT / INTEGER", "Standard 32-bit signed integer (-2B to +2B)", "4 Bytes"],
              ["Big Integer", "BIGINT", "64-bit integer for large IDs and counters", "8 Bytes"],
              ["Decimal", "DECIMAL(p, s)", "Exact fixed-point decimal (e.g. Financial currency)", "Variable"],
              ["Fixed String", "CHAR(n)", "Fixed length string padded with spaces up to n", "n Bytes"],
              ["Variable String", "VARCHAR(n)", "Variable length text up to n characters", "Actual length + 1B"],
              ["Unlimited Text", "TEXT", "Unlimited length character strings", "Variable"],
              ["Date & Time", "TIMESTAMP", "Combined calendar date and time of day", "8 Bytes"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Demonstrating Data Types in Table Definition",
          code: `-- Creating a robust product inventory table with explicit data types
CREATE TABLE products (
    product_id BIGINT PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    sku CHAR(12) UNIQUE NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
          explanation: "DECIMAL(10,2) stores up to 10 total digits with 2 digits after the decimal point (ideal for monetary values like 99999999.99). VARCHAR(150) allows variable text lengths without wasting disk space."
        }
      ],
      practiceExercise: {
        title: "Choosing Optimal Data Types",
        problem: "Design column definitions for a 'customers' table containing: customer_id (large unique number), email (up to 255 chars), account_balance (exact money amount), created_date (date only).",
        solutionCode: `-- Solution:
CREATE TABLE customers (
    customer_id BIGINT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    account_balance DECIMAL(12, 2) DEFAULT 0.00,
    created_date DATE DEFAULT CURRENT_DATE
);`
      },
      keyTakeaways: [
        "Always use UPPERCASE for SQL keywords to improve code readability.",
        "Use DECIMAL(p,s) for money and monetary values—NEVER use FLOAT or REAL due to IEEE floating-point rounding errors.",
        "VARCHAR(n) saves storage over fixed CHAR(n) for variable-length strings like emails and names.",
        "TIMESTAMP DEFAULT CURRENT_TIMESTAMP automatically logs record creation times."
      ]
    }
  },
  {
    id: "sql-mod-3",
    title: "Module 03 — DDL: Creating & Managing Database Structures",
    description: "Learn Data Definition Language (DDL) commands: CREATE TABLE, ALTER TABLE, DROP TABLE, TRUNCATE TABLE, and RENAME TABLE.",
    completed: false,
    order: 3,
    published: true,
    readingMaterial: {
      introduction: "Data Definition Language (DDL) consists of SQL statements used to define, alter, and manage database schema objects. DDL statements directly modify the database structural catalog, and in most database systems, DDL operations auto-commit immediately.",
      objectives: [
        "Master the syntax for CREATE TABLE with column definitions and default values",
        "Modify existing schema structures using ALTER TABLE (ADD, DROP, RENAME, MODIFY column)",
        "Understand structural deletion with DROP TABLE vs data removal with TRUNCATE TABLE",
        "Compare TRUNCATE TABLE vs DELETE FROM in performance, logging, and auto-increment reset",
        "Learn schema management best practices in production software engineering"
      ],
      sections: [
        {
          heading: "1. Core DDL Commands Reference",
          text: "DDL commands dictate the layout of database tables, indexes, and views.",
          bulletPoints: [
            "CREATE TABLE: Allocates a new relational table with defined columns, data types, and rules.",
            "ALTER TABLE: Modifies column specifications, adds constraints, or drops existing columns on live tables.",
            "DROP TABLE: Permanently deletes the table structure along with all stored data records.",
            "TRUNCATE TABLE: Instantly removes all rows from a table while keeping the table structure intact."
          ],
          table: {
            headers: ["Command", "Target", "Deletes Schema?", "Speed", "Rollback Ability"],
            rows: [
              ["DROP TABLE", "Table & Data", "YES", "Instant", "No (Auto-commits in most DBs)"],
              ["TRUNCATE TABLE", "Data Rows Only", "NO", "Extremely Fast", "No (Bypasses row logs)"],
              ["DELETE FROM", "Data Rows Only", "NO", "Slower (Row-by-row)", "Yes (Logged in Transaction)"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Complete DDL Workflow: CREATE, ALTER, and TRUNCATE",
          code: `-- Step 1: Create initial employees table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2)
);

-- Step 2: Alter table to add department and hire_date columns
ALTER TABLE employees 
ADD COLUMN department VARCHAR(50) DEFAULT 'General',
ADD COLUMN hire_date DATE DEFAULT CURRENT_DATE;

-- Step 3: Modify existing salary column to enforce default value
ALTER TABLE employees 
ALTER COLUMN salary SET DEFAULT 30000.00;

-- Step 4: Drop a column no longer needed
ALTER TABLE employees 
DROP COLUMN last_name;`,
          explanation: "ALTER TABLE permits incremental schema evolution without having to drop and recreate existing production tables."
        }
      ],
      practiceExercise: {
        title: "Schema Modification Challenge",
        problem: "Write SQL DDL commands to: 1. Create a table 'courses' with course_id (INT PK) and course_title (VARCHAR 100). 2. Alter 'courses' to add a price column (DECIMAL 8,2). 3. Truncate the table.",
        solutionCode: `-- 1. Create Table
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_title VARCHAR(100) NOT NULL
);

-- 2. Alter Table
ALTER TABLE courses ADD COLUMN price DECIMAL(8, 2) DEFAULT 0.00;

-- 3. Truncate Table
TRUNCATE TABLE courses;`
      },
      keyTakeaways: [
        "DDL statement changes are structural and generally auto-committed immediately.",
        "TRUNCATE TABLE is significantly faster than DELETE FROM for clearing tables because it deallocates data pages instead of scanning rows.",
        "Use ALTER TABLE to evolve live database schemas safely."
      ]
    }
  },
  {
    id: "sql-mod-4",
    title: "Module 04 — Constraints & Keys",
    description: "Deep dive into Primary Keys, Foreign Keys, NOT NULL, UNIQUE, CHECK, and DEFAULT constraints to enforce data integrity.",
    completed: false,
    order: 4,
    published: true,
    readingMaterial: {
      introduction: "Integrity constraints are rules enforced by the database engine to guarantee that data inserted or updated inside tables remains accurate, consistent, and valid. Constraints prevent invalid data entry at the database level regardless of application code logic.",
      objectives: [
        "Master Primary Key (PK) constraints and composite primary keys",
        "Understand Foreign Key (FK) relationships and referential integrity",
        "Configure CASCADE actions: ON DELETE CASCADE and ON UPDATE CASCADE",
        "Enforce NOT NULL and UNIQUE constraints across single and multiple columns",
        "Write custom business validation rules using CHECK constraints",
        "Set automatic initial values using DEFAULT constraints"
      ],
      sections: [
        {
          heading: "1. Types of Database Constraints",
          text: "Database constraints safeguard data quality and establish logical connections between entities.",
          bulletPoints: [
            "PRIMARY KEY: Uniquely identifies each record. Cannot contain NULL values.",
            "FOREIGN KEY: Ensures values in a child column match a Primary Key in the parent table.",
            "UNIQUE: Guarantees all values in a column are distinct, while permitting a single NULL.",
            "NOT NULL: Prevents missing or NULL values from being saved in a column.",
            "CHECK: Validates that column data satisfies a specific logical expression (e.g., age >= 18).",
            "DEFAULT: Supplies a default fallback value if no value is explicitly provided during INSERT."
          ],
          table: {
            headers: ["Constraint", "Allows NULL?", "Allows Duplicates?", "Max per Table"],
            rows: [
              ["PRIMARY KEY", "NO", "NO", "Exactly 1"],
              ["UNIQUE", "YES (1 NULL)", "NO", "Multiple"],
              ["FOREIGN KEY", "YES", "YES", "Multiple"],
              ["NOT NULL", "NO", "YES", "Multiple"],
              ["CHECK", "YES", "YES", "Multiple"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Relational Schema with Primary Key, Foreign Key & CHECK Constraints",
          code: `-- Parent Table: Departments
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL UNIQUE
);

-- Child Table: Staff members linked via Foreign Key with ON DELETE CASCADE
CREATE TABLE staff (
    staff_id INT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 18 AND age <= 70),
    salary DECIMAL(10, 2) CHECK (salary > 0),
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);`,
          explanation: "ON DELETE CASCADE ensures that if a department is deleted, all staff belonging to that department are automatically cleaned up, preserving referential integrity."
        }
      ],
      practiceExercise: {
        title: "Constraint Creation Challenge",
        problem: "Create an 'orders' table with order_id (PK), customer_id (FK to customers table), order_total (must be positive > 0), and status (DEFAULT 'Pending').",
        solutionCode: `CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_total DECIMAL(10, 2) CHECK (order_total > 0),
    status VARCHAR(20) DEFAULT 'Pending',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE RESTRICT
);`
      },
      keyTakeaways: [
        "Primary Keys uniquely identify rows and cannot be NULL.",
        "Foreign Keys enforce Referential Integrity between parent and child tables.",
        "CHECK constraints validate business rules directly inside the RDBMS engine.",
        "ON DELETE CASCADE automatically removes orphaned child records when parent rows are deleted."
      ]
    }
  },
  {
    id: "sql-mod-5",
    title: "Module 05 — DML: INSERT, UPDATE & DELETE",
    description: "Master Data Manipulation Language (DML) commands: INSERT INTO, UPDATE, DELETE FROM, and UPSERT operations.",
    completed: false,
    order: 5,
    published: true,
    readingMaterial: {
      introduction: "Data Manipulation Language (DML) is used to insert new records, modify existing column values, and delete rows from relational tables. Unlike DDL structural changes, DML statements modify data row contents and run inside transaction boundaries.",
      objectives: [
        "Insert single and bulk multiple records using INSERT INTO",
        "Copy data between tables using INSERT INTO ... SELECT",
        "Safely update column values using UPDATE with explicit WHERE filtering",
        "Prevent catastrophic full-table data corruption during UPDATE and DELETE operations",
        "Delete specific rows using DELETE FROM with WHERE conditions",
        "Master UPSERT (INSERT ... ON CONFLICT DO UPDATE) operations"
      ],
      sections: [
        {
          heading: "1. DML Operations Syntax & Best Practices",
          text: "Executing DML without explicit WHERE clauses is one of the most common causes of accidental data loss in software applications.",
          bulletPoints: [
            "Single Row INSERT: Specifies explicit columns and values for a single entity record.",
            "Bulk INSERT: Supplies multiple comma-separated value tuples in a single network query call.",
            "UPDATE with WHERE: Modifies target records matching the filter condition.",
            "DELETE with WHERE: Removes specified rows matching the logical condition."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Comprehensive DML: INSERT, Bulk INSERT, UPDATE & DELETE",
          code: `-- 1. Single Row INSERT
INSERT INTO products (product_id, product_name, unit_price)
VALUES (101, 'Mechanical Keyboard', 89.99);

-- 2. Bulk Multi-row INSERT
INSERT INTO products (product_id, product_name, unit_price)
VALUES 
    (102, 'Ergonomic Mouse', 45.50),
    (103, '4K Monitor', 320.00),
    (104, 'USB-C Cable', 12.00);

-- 3. Safe UPDATE with WHERE Clause
UPDATE products
SET unit_price = unit_price * 0.90, stock_quantity = 50
WHERE unit_price > 50.00;

-- 4. Selective DELETE with WHERE Clause
DELETE FROM products
WHERE product_id = 104;`,
          explanation: "ALWAYS run a SELECT query with the exact same WHERE condition prior to executing UPDATE or DELETE to preview affected rows!"
        }
      ],
      practiceExercise: {
        title: "Updating & Deleting Records Safely",
        problem: "Write SQL statements to: 1. Increase salary by 10% for employees in the 'Engineering' department. 2. Delete all employees whose hire_date is prior to '2020-01-01'.",
        solutionCode: `-- 1. Salary Increase
UPDATE employees
SET salary = salary * 1.10
WHERE department = 'Engineering';

-- 2. Delete Old Records
DELETE FROM employees
WHERE hire_date < '2020-01-01';`
      },
      keyTakeaways: [
        "Never run UPDATE or DELETE without a WHERE clause unless you explicitly intend to modify or wipe the entire table!",
        "Bulk INSERTs drastically improve application throughput compared to executing single INSERTs in loops.",
        "Always execute a preview SELECT query before executing destructive UPDATE or DELETE statements."
      ]
    }
  },
  {
    id: "sql-mod-6",
    title: "Module 06 — SELECT Statement: Retrieving Data",
    description: "Master Data Query Language (DQL): Column projection, aliases (AS), calculated fields, string concatenation, and SQL statement execution order.",
    completed: false,
    order: 6,
    published: true,
    readingMaterial: {
      introduction: "The SELECT statement is the foundational command of Data Query Language (DQL). It enables users to retrieve specific columns, compute calculated expressions, apply column aliases, and format outputs for analysis and application APIs.",
      objectives: [
        "Understand the logical query processing order of SQL clauses",
        "Select all columns (SELECT *) vs explicit column selection (Projection)",
        "Assign descriptive column and table aliases using the AS keyword",
        "Perform arithmetic operations directly inside SELECT expressions",
        "Concatenate text columns and handle NULL output formatting"
      ],
      sections: [
        {
          heading: "1. Logical Query Processing Order",
          text: "Although you write SELECT first, the RDBMS database engine evaluates clauses in a strict logical sequence:",
          bulletPoints: [
            "1. FROM: Identifies target tables and joins.",
            "2. WHERE: Filters individual data rows.",
            "3. GROUP BY: Groups filtered rows into aggregated buckets.",
            "4. HAVING: Filters aggregated group buckets.",
            "5. SELECT: Evaluates expressions, projection, and aliases.",
            "6. ORDER BY: Sorts final output rows.",
            "7. LIMIT / OFFSET: Restricts row return count."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Projection, Column Aliases & Computed Fields",
          code: `-- Retrieving specific fields with mathematical expressions and custom aliases
SELECT 
    product_name AS "Product Name",
    unit_price AS "Original Price",
    unit_price * 0.85 AS "Discounted Price (15% Off)",
    stock_quantity * unit_price AS "Total Inventory Value"
FROM products;`,
          explanation: "Computed fields calculate dynamic values on-the-fly without altering underlying table data stored on disk."
        }
      ],
      practiceExercise: {
        title: "Calculated SELECT Query",
        problem: "Write a SELECT query on an 'employees' table returning full_name, monthly_salary, and an annual_bonus column calculated as 15% of annual salary (monthly_salary * 12 * 0.15).",
        solutionCode: `SELECT 
    full_name,
    monthly_salary,
    (monthly_salary * 12 * 0.15) AS annual_bonus
FROM employees;`
      },
      keyTakeaways: [
        "Avoid using SELECT * in production code—explicitly name required columns to reduce bandwidth and memory overhead.",
        "Column aliases assigned with AS improve API response readability.",
        "SQL evaluates FROM before SELECT, meaning column aliases created in SELECT cannot be referenced inside WHERE clauses."
      ]
    }
  },
  {
    id: "sql-mod-7",
    title: "Module 07 — Filtering Data with WHERE & Operators",
    description: "Filter query results using comparison operators, logical operators (AND, OR, NOT), IN, BETWEEN, LIKE pattern matching, and NULL handling.",
    completed: false,
    order: 7,
    published: true,
    readingMaterial: {
      introduction: "The WHERE clause restricts query output to records that satisfy explicit boolean criteria. Mastering WHERE clause operators allows data analysts and engineers to filter massive tables down to exact actionable records.",
      objectives: [
        "Use comparison operators (=, <>, !=, <, >, <=, >=)",
        "Combine complex boolean logic using AND, OR, and NOT with parentheses",
        "Filter continuous numeric and date ranges using BETWEEN ... AND ...",
        "Match against lists of values using the IN operator",
        "Perform pattern matching with wildcards using LIKE and ILIKE (% and _)",
        "Correctly test for missing values using IS NULL and IS NOT NULL"
      ],
      sections: [
        {
          heading: "1. SQL Filtering Operators Matrix",
          text: "Filtering operators evaluate boolean TRUE, FALSE, or UNKNOWN (when NULL is involved).",
          table: {
            headers: ["Operator", "Syntax Example", "Description"],
            rows: [
              ["BETWEEN", "salary BETWEEN 40000 AND 80000", "Inclusive range test (includes endpoints)"],
              ["IN", "department IN ('HR', 'IT', 'Sales')", "Matches any value inside explicit list"],
              ["LIKE", "name LIKE 'A%'", "Pattern match: % matches 0+ chars, _ matches 1 char"],
              ["IS NULL", "email IS NULL", "Tests if a column contains a missing NULL value"],
              ["AND / OR", "(age > 21) AND (status = 'Active')", "Combines boolean expressions with precedence control"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Complex WHERE Filtering Query",
          code: `-- Retrieve active employees hired after 2021 in IT or Finance with salary over 60,000
SELECT employee_id, first_name, department, salary, hire_date
FROM employees
WHERE (department IN ('IT', 'Finance'))
  AND salary >= 60000.00
  AND hire_date >= '2021-01-01'
  AND email IS NOT NULL;`,
          explanation: "Parentheses ensure that logical OR/IN criteria are evaluated prior to AND logic."
        }
      ],
      practiceExercise: {
        title: "Pattern & Null Filtering Challenge",
        problem: "Write a query to find all customers whose first_name starts with 'J', live in 'NY' or 'CA', and have phone_number specified (not NULL).",
        solutionCode: `SELECT * 
FROM customers
WHERE first_name LIKE 'J%'
  AND state IN ('NY', 'CA')
  AND phone_number IS NOT NULL;`
      },
      keyTakeaways: [
        "Never use '= NULL' or '!= NULL' in SQL—always use IS NULL or IS NOT NULL.",
        "The LIKE wildcard % matches any string sequence, while _ matches exactly one single character.",
        "Use parentheses when combining AND and OR operators to prevent logical evaluation ambiguity."
      ]
    }
  },
  {
    id: "sql-mod-8",
    title: "Module 08 — DISTINCT, ORDER BY & LIMIT",
    description: "Eliminate duplicate rows with DISTINCT, sort query results using ORDER BY (ASC/DESC), and implement pagination with LIMIT and OFFSET.",
    completed: false,
    order: 8,
    published: true,
    readingMaterial: {
      introduction: "Data presentation requires sorting, deduplication, and result set pagination. The DISTINCT keyword removes duplicate rows, ORDER BY sorts outputs ascending or descending, and LIMIT/OFFSET controls pagination for web applications.",
      objectives: [
        "Eliminate duplicate result set rows using SELECT DISTINCT",
        "Sort data ascending (ASC) and descending (DESC) across multiple columns",
        "Sort outputs using expressions, column aliases, or NULL position overrides",
        "Restrict result row count using LIMIT (or TOP in SQL Server)",
        "Implement multi-page web pagination using LIMIT and OFFSET"
      ],
      sections: [
        {
          heading: "1. Sorting & Pagination Syntax Guide",
          text: "Combining ORDER BY with LIMIT ensures predictable, reproducible query outputs.",
          bulletPoints: [
            "SELECT DISTINCT: Scans result tuples and keeps unique combinations only.",
            "ORDER BY col1 ASC, col2 DESC: Primary sort on col1 ascending; tie-breaker sort on col2 descending.",
            "LIMIT n OFFSET m: Returns n records skipping the first m rows (Page 2 = LIMIT 10 OFFSET 10)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Deduplication, Multi-Column Sorting & Pagination",
          code: `-- 1. Fetch unique departments
SELECT DISTINCT department FROM employees;

-- 2. Top 5 highest paid software engineers with pagination (Page 1)
SELECT employee_id, first_name, salary
FROM employees
WHERE department = 'Engineering'
ORDER BY salary DESC, first_name ASC
LIMIT 5 OFFSET 0;`,
          explanation: "OFFSET 0 fetches the first page of 5 items. Page 2 uses LIMIT 5 OFFSET 5."
        }
      ],
      practiceExercise: {
        title: "Top Products Pagination Challenge",
        problem: "Write a query to retrieve the 3rd to 7th most expensive products in stock (order by unit_price DESC, skip first 2).",
        solutionCode: `SELECT product_id, product_name, unit_price
FROM products
ORDER BY unit_price DESC
LIMIT 5 OFFSET 2;`
      },
      keyTakeaways: [
        "DISTINCT operates across ALL projected columns in the SELECT clause.",
        "Always pair LIMIT/OFFSET pagination queries with an explicit ORDER BY clause to guarantee consistent ordering.",
        "ORDER BY is evaluated near the end of query processing, allowing reference to column aliases."
      ]
    }
  },
  {
    id: "sql-mod-9",
    title: "Module 09 — Aggregate Functions, GROUP BY & HAVING",
    description: "Perform data analytics using aggregate functions (COUNT, SUM, AVG, MIN, MAX), group rows with GROUP BY, and filter aggregates with HAVING.",
    completed: false,
    order: 9,
    published: true,
    readingMaterial: {
      introduction: "Aggregation transforms detailed transaction logs into executive summaries and analytical metrics. SQL aggregate functions calculate mathematical summaries over sets of rows, while GROUP BY categorizes summary statistics into subsets.",
      objectives: [
        "Master the 5 standard aggregate functions: COUNT, SUM, AVG, MIN, and MAX",
        "Understand the difference between COUNT(*) and COUNT(column_name)",
        "Group records by one or multiple categorical columns using GROUP BY",
        "Filter aggregated group metrics using the HAVING clause",
        "Distinguish between WHERE (row filter) and HAVING (group filter)"
      ],
      sections: [
        {
          heading: "1. Aggregate Functions Summary Table",
          text: "Aggregate functions ignore NULL values except for COUNT(*).",
          table: {
            headers: ["Function", "Description", "Handles NULLs?"],
            rows: [
              ["COUNT(*)", "Counts total number of rows in set", "Includes NULL rows"],
              ["COUNT(col)", "Counts total non-NULL values in col", "Ignores NULLs"],
              ["SUM(col)", "Calculates mathematical sum of numbers", "Ignores NULLs"],
              ["AVG(col)", "Calculates arithmetic mean value", "Ignores NULLs"],
              ["MIN(col) / MAX(col)", "Returns lowest or highest value", "Ignores NULLs"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Grouping & Aggregations with HAVING Clause",
          code: `-- Calculate average salary and total head count per department, filtering for departments with > 3 employees and avg salary > 50,000
SELECT 
    department,
    COUNT(employee_id) AS total_staff,
    ROUND(AVG(salary), 2) AS average_salary,
    SUM(salary) AS total_payroll
FROM employees
WHERE is_active = TRUE
GROUP BY department
HAVING COUNT(employee_id) > 3 AND AVG(salary) > 50000.00
ORDER BY average_salary DESC;`,
          explanation: "WHERE filters active staff FIRST, GROUP BY groups remaining rows by department, and HAVING filters calculated department aggregates."
        }
      ],
      practiceExercise: {
        title: "Sales Analytics Aggregation",
        problem: "Write a query on an 'orders' table returning customer_id, order_count, and total_spent for customers who have placed more than 5 orders.",
        solutionCode: `SELECT 
    customer_id,
    COUNT(order_id) AS order_count,
    SUM(order_total) AS total_spent
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) > 5
ORDER BY total_spent DESC;`
      },
      keyTakeaways: [
        "WHERE filters individual rows BEFORE grouping; HAVING filters aggregated results AFTER grouping.",
        "Every non-aggregated column selected in a SELECT statement MUST be included in the GROUP BY clause.",
        "COUNT(column) ignores NULL values, whereas COUNT(*) counts all rows."
      ]
    }
  },
  {
    id: "sql-mod-10",
    title: "Module 10 — SQL Joins & Relationships",
    description: "Combine data across multiple relational tables using INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN.",
    completed: false,
    order: 10,
    published: true,
    readingMaterial: {
      introduction: "Relational database normalization splits information into separate tables to reduce redundancy. SQL Joins allow developers to query and recombine rows across multiple tables based on related key columns.",
      objectives: [
        "Understand relational table join mechanics and ON join conditions",
        "Master INNER JOIN for retrieving matching records between tables",
        "Master LEFT (OUTER) JOIN for preserving all rows from the left table",
        "Understand RIGHT JOIN and FULL OUTER JOIN for complete table coverage",
        "Use CROSS JOIN to generate Cartesian products",
        "Execute SELF JOIN to query hierarchical or self-referencing entity data"
      ],
      sections: [
        {
          heading: "1. Visual SQL Joins Matrix",
          text: "Choosing the correct join type determines whether unmatched rows are retained or discarded.",
          table: {
            headers: ["Join Type", "Matching Behavior", "Unmatched Left Rows?", "Unmatched Right Rows?"],
            rows: [
              ["INNER JOIN", "Returns rows with matching keys in BOTH tables", "Discarded", "Discarded"],
              ["LEFT JOIN", "Returns ALL left rows + matched right rows", "Retained (Right columns NULL)", "Discarded"],
              ["RIGHT JOIN", "Returns ALL right rows + matched left rows", "Discarded", "Retained (Left columns NULL)"],
              ["FULL OUTER JOIN", "Returns ALL rows from both tables", "Retained", "Retained"],
              ["CROSS JOIN", "Cartesian product (m × n total combinations)", "All combinations", "All combinations"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Multi-Table INNER JOIN & LEFT JOIN Query",
          code: `-- Fetch customer order details including customers with NO orders (LEFT JOIN)
SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    o.order_id,
    o.order_date,
    COALESCE(o.order_total, 0.00) AS total_amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
ORDER BY c.customer_id;`,
          explanation: "COALESCE replaces NULL order amounts with 0.00 for customers who have not placed any orders."
        }
      ],
      practiceExercise: {
        title: "Employee Manager Self Join",
        problem: "Given an 'employees' table with columns (emp_id, emp_name, manager_id), write a query displaying each employee name alongside their manager's name.",
        solutionCode: `SELECT 
    e.emp_name AS "Employee Name",
    m.emp_name AS "Manager Name"
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;`
      },
      keyTakeaways: [
        "INNER JOIN discards unmatched rows; LEFT JOIN preserves all left table records.",
        "Always qualify column names with table aliases (e.g. c.customer_id) to eliminate ambiguity errors.",
        "Use COALESCE to handle NULL values introduced by outer joins gracefully."
      ]
    }
  },
  {
    id: "sql-mod-11",
    title: "Module 11 — Subqueries, UNION & Advanced Querying",
    description: "Write subqueries (scalar, multi-row, correlated), Common Table Expressions (CTEs), UNION, UNION ALL, and set operations.",
    completed: false,
    order: 11,
    published: true,
    readingMaterial: {
      introduction: "Subqueries and Common Table Expressions (CTEs) enable modular, multi-level SQL querying. They allow you to feed the output of an inner query directly into an outer query or break complex analytical problems down into clean, maintainable blocks.",
      objectives: [
        "Write scalar subqueries returning a single value",
        "Use multi-row subqueries with IN, ANY, and ALL operators",
        "Master Correlated Subqueries using EXISTS and NOT EXISTS",
        "Write clean, readable modular queries using Common Table Expressions (WITH CTE AS)",
        "Combine queries using UNION and UNION ALL set operators"
      ],
      sections: [
        {
          heading: "1. Subqueries vs Common Table Expressions (CTEs)",
          text: "CTEs offer superior readability and maintainability over nested subqueries.",
          bulletPoints: [
            "Scalar Subquery: Returns a single value (1 row, 1 col), usable in WHERE or SELECT.",
            "Multi-row Subquery: Returns a single column list, usable with IN or EXISTS.",
            "CTE (WITH clause): Defines a named temporary query result set accessible within the main query."
          ]
        }
      ],
      codeExamples: [
        {
          title: "CTE (WITH Clause) & UNION ALL Query",
          code: `-- Step 1: Define CTE calculating high-value customers
WITH high_value_customers AS (
    SELECT customer_id, SUM(order_total) AS total_spent
    FROM orders
    GROUP BY customer_id
    HAVING SUM(order_total) > 1000.00
)
-- Step 2: Query main table using CTE results
SELECT c.customer_id, c.first_name, hvc.total_spent
FROM customers c
INNER JOIN high_value_customers hvc ON c.customer_id = hvc.customer_id
ORDER BY hvc.total_spent DESC;`,
          explanation: "CTEs keep complex analytical queries structured and easier to read and debug."
        }
      ],
      practiceExercise: {
        title: "Subquery Salary Challenge",
        problem: "Write a query to find all employees whose salary is above the overall company average salary.",
        solutionCode: `SELECT employee_id, first_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees
)
ORDER BY salary DESC;`
      },
      keyTakeaways: [
        "CTEs (WITH clause) dramatically improve SQL code readability compared to nested inline subqueries.",
        "UNION ALL is faster than UNION because it skips the extra deduplication pass.",
        "EXISTS terminates evaluation as soon as a match is found, making it highly efficient for subqueries."
      ]
    }
  },
  {
    id: "sql-mod-12",
    title: "Module 12 — SQL Functions & Conditional Logic",
    description: "Utilize built-in SQL functions for strings, math, date/time, and construct conditional logic using CASE WHEN expressions.",
    completed: false,
    order: 12,
    published: true,
    readingMaterial: {
      introduction: "Built-in scalar functions allow developers to transform text data, perform math calculations, format dates, and execute conditional if-then-else branching directly inside SQL queries using CASE WHEN expressions.",
      objectives: [
        "Manipulate strings using UPPER, LOWER, LENGTH, SUBSTRING, REPLACE, TRIM, and CONCAT",
        "Perform mathematical operations using ROUND, CEIL, FLOOR, and ABS",
        "Extract date parts and compute date differences using EXTRACT, DATE_ADD, and DATEDIFF",
        "Construct conditional logic branching using CASE WHEN ... THEN ... ELSE ... END",
        "Handle missing values gracefully using COALESCE and NULLIF"
      ],
      sections: [
        {
          heading: "1. Built-in SQL Scalar Functions Matrix",
          text: "Scalar functions accept an input value and return a single transformed value per row.",
          table: {
            headers: ["Category", "Function", "Example", "Result"],
            rows: [
              ["String", "CONCAT(a, ' ', b)", "CONCAT('John', ' ', 'Doe')", "'John Doe'"],
              ["String", "SUBSTRING(str, pos, len)", "SUBSTRING('Database', 1, 4)", "'Data'"],
              ["Math", "ROUND(num, decimals)", "ROUND(123.456, 2)", "123.46"],
              ["Date", "EXTRACT(part FROM date)", "EXTRACT(YEAR FROM NOW())", "2026"],
              ["Null Handling", "COALESCE(val1, val2)", "COALESCE(phone, 'N/A')", "'N/A' (if phone NULL)"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "CASE WHEN Conditional Logic & Date Functions",
          code: `-- Classify employees into salary tiers and format full name
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    salary,
    EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM hire_date) AS years_of_service,
    CASE 
        WHEN salary >= 90000 THEN 'Executive Tier'
        WHEN salary >= 60000 THEN 'Senior Tier'
        WHEN salary >= 40000 THEN 'Mid-Level Tier'
        ELSE 'Junior Tier'
    END AS salary_bracket
FROM employees
ORDER BY salary DESC;`,
          explanation: "CASE WHEN evaluates conditions sequentially and returns the matching THEN result."
        }
      ],
      practiceExercise: {
        title: "Conditional Status Logic",
        problem: "Write a query on a 'products' table creating an 'inventory_status' column: 'Out of Stock' if stock_quantity = 0, 'Low Stock' if stock_quantity <= 10, and 'In Stock' otherwise.",
        solutionCode: `SELECT 
    product_id,
    product_name,
    stock_quantity,
    CASE 
        WHEN stock_quantity = 0 THEN 'Out of Stock'
        WHEN stock_quantity <= 10 THEN 'Low Stock'
        ELSE 'In Stock'
    END AS inventory_status
FROM products;`
      },
      keyTakeaways: [
        "CASE WHEN provides powerful inline conditional logic for custom data formatting.",
        "COALESCE returns the first non-NULL argument in its parameter list.",
        "Date functions differ slightly between RDBMS engines (e.g. EXTRACT in Postgres vs YEAR() in MySQL)."
      ]
    }
  },
  {
    id: "sql-mod-13",
    title: "Module 13 — Views, Indexes & Database Optimization",
    description: "Create and maintain Database Views, construct B-Tree Indexes, analyze query execution plans with EXPLAIN, and optimize performance.",
    completed: false,
    order: 13,
    published: true,
    readingMaterial: {
      introduction: "As database tables scale to millions of rows, query performance and abstraction become paramount. Database Views encapsulate complex join logic into reusable virtual tables, while B-Tree Indexes accelerate read lookup speeds by avoiding expensive sequential full table scans.",
      objectives: [
        "Create, update, and manage virtual Database Views (CREATE VIEW)",
        "Understand B-Tree Indexes and how they speed up SELECT queries",
        "Create single-column, unique, and composite multi-column indexes",
        "Analyze query execution plans using EXPLAIN and EXPLAIN ANALYZE",
        "Avoid indexing pitfalls: Write performance overhead and index fragmentation"
      ],
      sections: [
        {
          heading: "1. How B-Tree Indexes Speed Up Queries",
          text: "Without an index, the database engine must perform a Sequential Full Table Scan (checking every single row on disk). A B-Tree Index provides a sorted lookup tree, reducing search complexity from O(N) to O(log N).",
          bulletPoints: [
            "Full Table Scan: O(N) complexity—scans millions of disk blocks.",
            "B-Tree Index Scan: O(log N) complexity—traverses tree nodes directly to target row pointers.",
            "Write Penalty: Every INSERT, UPDATE, or DELETE requires updating both table data AND index trees."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Creating Views & B-Tree Indexes with EXPLAIN Analysis",
          code: `-- 1. Create reusable database view for executive reporting
CREATE VIEW vw_department_summary AS
SELECT 
    d.dept_name,
    COUNT(e.emp_id) AS staff_count,
    ROUND(AVG(e.salary), 2) AS avg_salary
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name;

-- 2. Create composite index on customer_id and order_date for instant order lookups
CREATE INDEX idx_orders_customer_date 
ON orders (customer_id, order_date DESC);

-- 3. Analyze query plan using EXPLAIN
EXPLAIN SELECT * FROM orders WHERE customer_id = 4501;`,
          explanation: "EXPLAIN displays whether the query planner uses an Index Scan or a Full Table Scan."
        }
      ],
      practiceExercise: {
        title: "Index Design Challenge",
        problem: "Write DDL statements to: 1. Create a view 'vw_active_users' showing users with status = 'Active'. 2. Create a unique index on email column in 'users' table.",
        solutionCode: `-- 1. Create View
CREATE VIEW vw_active_users AS
SELECT user_id, username, email, created_at
FROM users
WHERE status = 'Active';

-- 2. Create Unique Index
CREATE UNIQUE INDEX idx_users_email ON users (email);`
      },
      keyTakeaways: [
        "Views provide abstraction, security, and query reusability without duplicating underlying table data.",
        "Indexes speed up SELECT queries but add performance overhead during INSERT, UPDATE, and DELETE operations.",
        "Always index Foreign Keys and columns frequently used inside WHERE, JOIN, and ORDER BY clauses."
      ]
    }
  },
  {
    id: "sql-mod-14",
    title: "Module 14 — Transactions, TCL & Database Security",
    description: "Understand ACID properties, manage transaction controls (BEGIN, COMMIT, ROLLBACK, SAVEPOINT), set isolation levels, and secure databases against SQL Injection.",
    completed: false,
    order: 14,
    published: true,
    readingMaterial: {
      introduction: "Database transactions ensure data consistency across multiple multi-step operations (e.g. transferring money between two bank accounts). Transaction Control Language (TCL) and ACID properties guarantee that data remains safe even during system crashes, network glitches, or concurrent updates.",
      objectives: [
        "Understand the 4 ACID properties: Atomicity, Consistency, Isolation, and Durability",
        "Control transaction lifecycles using BEGIN, COMMIT, and ROLLBACK",
        "Set intermediate rollback checkpoints using SAVEPOINT",
        "Understand Transaction Isolation Levels and concurrency anomalies (Dirty Reads, Non-repeatable Reads, Phantom Reads)",
        "Implement DCL security permissions (GRANT, REVOKE) and prevent SQL Injection attacks"
      ],
      sections: [
        {
          heading: "1. The ACID Properties Explained",
          text: "ACID principles define the core gold standard for reliable relational database processing.",
          bulletPoints: [
            "Atomicity: All operations in a transaction complete successfully, or EVERYTHING is rolled back ('All-or-Nothing').",
            "Consistency: Transactions move the database from one valid state to another, preserving all integrity constraints.",
            "Isolation: Concurrent transactions execute independently without interfering with each other's uncommitted data.",
            "Durability: Once a transaction commits, its changes persist permanently on disk even during power failures."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Bank Account Transfer Transaction with ROLLBACK & SAVEPOINT",
          code: `-- Start Transaction
BEGIN;

-- Step 1: Deduct $500 from Account A
UPDATE bank_accounts 
SET balance = balance - 500.00 
WHERE account_id = 101 AND balance >= 500.00;

-- Set Savepoint after deduction
SAVEPOINT after_deduction;

-- Step 2: Credit $500 to Account B
UPDATE bank_accounts 
SET balance = balance + 500.00 
WHERE account_id = 202;

-- Check system state: Commit if successful, otherwise Rollback
COMMIT;`,
          explanation: "If any step fails or an exception occurs, executing ROLLBACK restores both bank account balances back to their initial state."
        }
      ],
      practiceExercise: {
        title: "DCL Security & Roles",
        problem: "Write SQL DCL commands to: 1. Create a user 'analyst_bob'. 2. Grant SELECT privileges on table 'orders' to 'analyst_bob'. 3. Revoke DELETE privileges on all tables.",
        solutionCode: `-- 1. Create User (Syntax varies by engine)
CREATE USER analyst_bob WITH PASSWORD 'SecurePass123!';

-- 2. Grant SELECT Permission
GRANT SELECT ON orders TO analyst_bob;

-- 3. Revoke DELETE Permission
REVOKE DELETE ON orders FROM analyst_bob;`
      },
      keyTakeaways: [
        "ACID properties guarantee financial and transactional data integrity.",
        "Transactions guarantee All-or-Nothing execution—COMMIT saves changes; ROLLBACK discards them.",
        "Always use parameterized queries in application code to prevent catastrophic SQL Injection vulnerabilities."
      ]
    }
  },
  {
    id: "sql-mod-15",
    title: "Module 15 — SQL for Data Analytics, Python & AI + Final Project",
    description: "Master Advanced Window Functions (ROW_NUMBER, RANK, LAG, LEAD, PARTITION BY), Python sqlite3/Pandas integration, AI-assisted SQL query generation, and complete the Capstone E-Commerce Project.",
    completed: false,
    order: 15,
    published: true,
    readingMaterial: {
      introduction: "Welcome to the final capstone module! In modern tech stacks, SQL connects directly with Python data analysis libraries (Pandas, SQLAlchemy, sqlite3) and AI assistants. In this module, you will master advanced Window Functions and build a full production E-Commerce analytical database project from scratch.",
      objectives: [
        "Master SQL Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD()",
        "Use OVER (PARTITION BY ... ORDER BY ...) for analytical grouping without row collapsing",
        "Connect Python to SQL databases using sqlite3 and Pandas pd.read_sql_query()",
        "Leverage AI tools for automated query generation, optimization, and debugging",
        "Build the Complete E-Commerce Capstone Analytical Project"
      ],
      sections: [
        {
          heading: "1. Advanced Window Functions Overview",
          text: "Unlike GROUP BY, which collapses rows into summary groups, Window Functions compute calculations across a set of table rows related to the current row WITHOUT collapsing individual rows.",
          bulletPoints: [
            "ROW_NUMBER(): Assigns a unique sequential integer (1, 2, 3...) to rows within a partition.",
            "RANK(): Assigns ranking with gaps for tied values (1, 2, 2, 4...).",
            "DENSE_RANK(): Assigns ranking WITHOUT gaps for tied values (1, 2, 2, 3...).",
            "LAG(col, n): Fetches value from n rows BEFORE the current row (great for Month-over-Month growth).",
            "LEAD(col, n): Fetches value from n rows AFTER the current row."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Window Functions: ROW_NUMBER & Month-over-Month Growth with LAG",
          code: `-- 1. Rank employees by salary within each department
SELECT 
    employee_id,
    first_name,
    department,
    salary,
    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_salary_rank
FROM employees;

-- 2. Calculate Month-over-Month Sales Growth using LAG
WITH monthly_sales AS (
    SELECT 
        EXTRACT(MONTH FROM order_date) as sales_month,
        SUM(order_total) as monthly_revenue
    FROM orders
    GROUP BY EXTRACT(MONTH FROM order_date)
)
SELECT 
    sales_month,
    monthly_revenue,
    LAG(monthly_revenue, 1) OVER (ORDER BY sales_month) as prev_month_revenue,
    ROUND(((monthly_revenue - LAG(monthly_revenue, 1) OVER (ORDER BY sales_month)) / LAG(monthly_revenue, 1) OVER (ORDER BY sales_month)) * 100, 2) as mom_growth_pct
FROM monthly_sales;`,
          explanation: "Window functions execute calculations relative to neighboring rows while retaining every row in the output."
        },
        {
          title: "Python SQLite & Pandas Integration",
          code: `# Python Integration Script
import sqlite3
import pandas as pd

# 1. Connect to SQLite Database
conn = sqlite3.connect('ecommerce.db')

# 2. Execute SQL query directly into Pandas DataFrame
query = """
SELECT c.customer_id, c.email, COUNT(o.order_id) as total_orders, SUM(o.order_total) as total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id
ORDER BY total_spent DESC;
"""

df = pd.read_sql_query(query, conn)
print("Top Customer Analytics:")
print(df.head())

conn.close()`,
          explanation: "Pandas pd.read_sql_query seamlessly bridge SQL databases into Python data science workflows."
        }
      ],
      practiceExercise: {
        title: "Capstone E-Commerce Analytical Project Challenge",
        problem: "Write a SQL query that finds the top 2 highest spending customers in EACH country using ROW_NUMBER() or DENSE_RANK().",
        solutionCode: `WITH customer_spending AS (
    SELECT 
        country,
        customer_id,
        first_name,
        SUM(order_total) as total_spent,
        DENSE_RANK() OVER (PARTITION BY country ORDER BY SUM(order_total) DESC) as country_rank
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY country, customer_id, first_name
)
SELECT country, customer_id, first_name, total_spent
FROM customer_spending
WHERE country_rank <= 2
ORDER BY country, country_rank;`
      },
      keyTakeaways: [
        "Window Functions calculate values over a row set without collapsing rows.",
        "LAG and LEAD enable effortless time-series and period-over-period comparison calculations.",
        "Pandas pd.read_sql_query enables seamless Python data analysis pipelines.",
        "Congratulations! You have completed the comprehensive 15-module SQL Curriculum!"
      ]
    }
  }
];

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');
if (sqlCourseInDb) {
  sqlCourseInDb.modules = enrichedModules;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Successfully updated server/data/db.json with 15 enriched SQL modules!');
} else {
  console.error('Could not find SQL course in db.json!');
}

// Update src/data/coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let coursesDataContent = fs.readFileSync(coursesDataPath, 'utf8');

const sqlCourseIndex = coursesDataContent.indexOf('sql-data-analysis');
const webCourseIndex = coursesDataContent.indexOf('web-development');

if (sqlCourseIndex !== -1 && webCourseIndex !== -1) {
  const beforeSql = coursesDataContent.slice(0, sqlCourseIndex);
  const afterSql = coursesDataContent.slice(webCourseIndex);
  
  // Find where modules array starts inside sql block
  const sqlSlice = coursesDataContent.slice(sqlCourseIndex, webCourseIndex);
  const modulesKeywordIndex = sqlSlice.indexOf('modules: [');
  
  if (modulesKeywordIndex !== -1) {
    const headerPart = sqlSlice.slice(0, modulesKeywordIndex + 'modules: ['.length);
    const newModulesJson = JSON.stringify(enrichedModules, null, 6);
    // Remove the wrapping outer brackets from JSON string
    const formattedModulesJs = newModulesJson.slice(1, -1);
    
    // Find closing bracket of modules array in sqlSlice before web-development
    const lastBracketIndex = sqlSlice.lastIndexOf(']');
    
    const newSqlBlock = headerPart + '\n' + formattedModulesJs + '\n    ],\n  },\n  {\n    id: "';
    
    coursesDataContent = beforeSql + newSqlBlock + afterSql;
    fs.writeFileSync(coursesDataPath, coursesDataContent, 'utf8');
    console.log('Successfully updated src/data/coursesData.js with 15 enriched SQL modules!');
  }
}

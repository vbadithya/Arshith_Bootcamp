const fs = require('fs');

const ultraModules = [
  {
    id: "sql-mod-1",
    title: "Module 01 — Introduction to SQL & Databases",
    description: "Master relational database concepts, RDBMS engines (PostgreSQL, MySQL, SQLite, SQL Server), client-server architecture, table schemas, primary keys, and SQL command categories (DDL, DML, DQL, DCL, TCL).",
    completed: false,
    order: 1,
    published: true,
    readingMaterial: {
      introduction: "Welcome to the SQL & Relational Databases Mastery Course! Structured Query Language (SQL) is the universal, industry-standard language used by software engineers, data analysts, data scientists, and DevOps professionals to communicate with Relational Database Management Systems (RDBMS). Data powers modern applications—from e-commerce platforms and banking systems to mobile apps and AI pipelines. Understanding how data is stored, structured, and queried is one of the most critical foundational skills in computer science.",
      objectives: [
        "Understand why relational databases are preferred over flat files (CSV, Excel) for concurrent, transactional data management",
        "Master the core structural components of an RDBMS: Databases, Schemas, Tables, Rows (Tuples), and Columns (Fields)",
        "Explore client-server database architecture versus embedded file-based databases",
        "Compare top enterprise RDBMS engines: PostgreSQL, MySQL, SQLite, Microsoft SQL Server, and Oracle",
        "Understand Primary Key (PK) and Foreign Key (FK) concepts for enforcing entity and referential integrity",
        "Categorize SQL statements into DDL, DML, DQL, DCL, and TCL sub-languages",
        "Execute basic system and session inspection queries"
      ],
      sections: [
        {
          heading: "1. Why Use Relational Databases Instead of Flat Files?",
          text: "Early applications stored data in flat text files (CSV, TSV). However, flat files suffer from severe limitations: data redundancy, lack of structural enforcement, data corruption during concurrent writes, slow search performance (O(N) full scans), and zero transaction safety. Relational databases solve these issues by storing data in structured tables linked by logical key relationships and managed by a centralized engine that guarantees data integrity.",
          bulletPoints: [
            "Data Integrity & Constraints: Prevents duplicate records, invalid data types, and orphaned data.",
            "ACID Transaction Safety: Ensures all database transactions complete fully or roll back completely.",
            "High-Speed Indexing: B-Tree indexes allow instant lookups across billions of rows in milliseconds.",
            "Concurrent Multi-User Access: Row-level locking allows thousands of users to read and write simultaneously.",
            "Fine-Grained Security: Role-based security controls who can view or modify specific tables and columns."
          ]
        },
        {
          heading: "2. Relational Database Architecture & Terminology",
          text: "In an RDBMS, data is organized into a strict logical hierarchy: Database -> Schema -> Table -> Rows & Columns.",
          bulletPoints: [
            "Table (Relation): A two-dimensional collection of related data entries organized in rows and columns.",
            "Row (Record / Tuple): A single horizontal entry in a table representing one unique entity instance.",
            "Column (Attribute / Field): A named vertical column containing data of a specific declared data type.",
            "Primary Key (PK): A column (or set of columns) that uniquely identifies every single row in a table.",
            "Foreign Key (FK): A column in one table that references the Primary Key of another table to link related entities."
          ],
          table: {
            headers: ["RDBMS Engine", "Architecture Type", "Primary Use Case", "Key Distinction"],
            rows: [
              ["PostgreSQL", "Client-Server (Open Source)", "Enterprise & Advanced Analytics", "Rich JSONB support, ACID compliance, custom data types"],
              ["MySQL", "Client-Server (Open Source)", "Web Applications (WordPress, LAMP)", "Blazing fast read speeds, widespread web hosting support"],
              ["SQLite", "Embedded File-based DB", "Mobile Apps (iOS/Android), IoT, Local Dev", "Zero server config, entire database stored in a single file"],
              ["Microsoft SQL Server", "Client-Server (Commercial)", "Enterprise Windows Ecosystem", "Deep SSMS tooling, T-SQL extensions, enterprise support"],
              ["Oracle Database", "Client-Server (Commercial)", "Mission-Critical Financial Systems", "Extreme transaction volume scale, PL/SQL engine"]
            ]
          }
        },
        {
          heading: "3. Breakdown of SQL Sub-Languages",
          text: "SQL is divided into 5 functional sub-languages based on operational purpose:",
          bulletPoints: [
            "DDL (Data Definition Language): Structural commands to create, modify, or delete database objects (CREATE, ALTER, DROP, TRUNCATE).",
            "DML (Data Manipulation Language): Commands to add, change, or remove data records (INSERT, UPDATE, DELETE).",
            "DQL (Data Query Language): Commands used to query and retrieve data from tables (SELECT).",
            "DCL (Data Control Language): Commands to manage security, roles, and access permissions (GRANT, REVOKE).",
            "TCL (Transaction Control Language): Commands to manage transaction state and rollback safety (COMMIT, ROLLBACK, SAVEPOINT)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "System Information & Version Verification Queries",
          code: `-- 1. Query current database engine version
SELECT version();

-- 2. Query currently connected database name, active user, and client port
SELECT 
    current_database() AS active_db,
    current_user AS session_user,
    inet_server_port() AS server_port;

-- 3. Display current server system timestamp
SELECT CURRENT_TIMESTAMP AS server_time;`,
          explanation: "These utility queries verify server connection parameters, active user credentials, and database engine properties."
        }
      ],
      practiceExercise: {
        title: "Identify SQL Sub-Language Categories",
        problem: "Classify each of the following 6 SQL statements into DDL, DML, DQL, DCL, or TCL: 1. CREATE TABLE, 2. SELECT *, 3. UPDATE employees, 4. COMMIT, 5. GRANT SELECT, 6. DROP TABLE.",
        solutionCode: `-- Correct Classifications:
-- 1. CREATE TABLE -> DDL (Data Definition Language)
-- 2. SELECT *      -> DQL (Data Query Language)
-- 3. UPDATE        -> DML (Data Manipulation Language)
-- 4. COMMIT        -> TCL (Transaction Control Language)
-- 5. GRANT SELECT  -> DCL (Data Control Language)
-- 6. DROP TABLE    -> DDL (Data Definition Language)`
      },
      keyTakeaways: [
        "SQL is a declarative language: You declare WHAT data you want, and the RDBMS query optimizer calculates the execution plan.",
        "Relational tables enforce data consistency using strict data types, schemas, and primary/foreign key constraints.",
        "Use PostgreSQL for enterprise features, MySQL for web apps, and SQLite for embedded/mobile applications.",
        "DDL alters database structures, DML modifies rows, DQL fetches rows, DCL controls security, and TCL manages transactions."
      ]
    }
  },
  {
    id: "sql-mod-2",
    title: "Module 02 — SQL Syntax, Keywords & Data Types",
    description: "Master fundamental SQL syntax rules, reserved keywords, code formatting standards, comments, and comprehensive data types (Integer, Decimal, VarChar, Text, Timestamp, Boolean, and JSONB).",
    completed: false,
    order: 2,
    published: true,
    readingMaterial: {
      introduction: "To write maintainable, bug-free SQL, you must master SQL code syntax conventions and data types. Choosing the correct data type for each column ensures data accuracy, optimizes memory and disk storage, speeds up index scans, and prevents silent truncation or arithmetic rounding errors.",
      objectives: [
        "Master SQL syntax rules: Casing rules, identifiers, and statement terminators (;)",
        "Write clean, readable SQL code using industry-standard formatting conventions",
        "Understand single-line (--) and multi-line (/* */) comments",
        "Choose appropriate Numeric data types: INT, BIGINT, DECIMAL(p,s), FLOAT",
        "Distinguish Character types: CHAR(n), VARCHAR(n), and TEXT",
        "Master Temporal data types: DATE, TIME, TIMESTAMP, and TIMESTAMPTZ",
        "Understand Boolean, UUID, and JSONB data types"
      ],
      sections: [
        {
          heading: "1. Core SQL Syntax Rules & Formatting Guidelines",
          text: "SQL is technically case-insensitive regarding keywords (select is identical to SELECT). However, software engineering standards mandate specific formatting conventions for team readability:",
          bulletPoints: [
            "UPPERCASE for SQL Keywords: SELECT, FROM, WHERE, GROUP BY, CREATE TABLE.",
            "lowercase_snake_case for Table & Column Identifiers: user_accounts, order_date, total_amount.",
            "Semicolon Terminator (;): Explicitly terminates each SQL statement.",
            "Indentation: Indent clauses onto separate lines for complex queries.",
            "Single Quotes ('') for Text & Date Literals: WHERE status = 'Active' AND hire_date = '2026-01-15'."
          ]
        },
        {
          heading: "2. SQL Data Types Deep Dive",
          text: "Every column in a relational table must be assigned a fixed data type.",
          table: {
            headers: ["Category", "Data Type", "Description & Range", "Storage Size", "Best Practice Use Case"],
            rows: [
              ["Integer", "SMALLINT", "16-bit integer (-32,768 to 32,767)", "2 Bytes", "Small status codes, age, month numbers"],
              ["Integer", "INT / INTEGER", "32-bit signed integer (-2.1B to +2.1B)", "4 Bytes", "Standard auto-increment IDs, quantity"],
              ["Integer", "BIGINT", "64-bit integer (-9 Quintillion to +9 Quintillion)", "8 Bytes", "Large customer IDs, transaction logs"],
              ["Decimal", "DECIMAL(p,s)", "Exact fixed-point number (Precision p, Scale s)", "Variable", "Financial transactions, currency (NEVER use Float!)"],
              ["Float", "DOUBLE PRECISION", "IEEE 754 floating point (approximate)", "8 Bytes", "Scientific metrics, GPS coordinates"],
              ["String", "CHAR(n)", "Fixed length string padded with trailing spaces", "n Bytes", "Fixed codes (e.g. ISO Country Code 'US', SKU)"],
              ["String", "VARCHAR(n)", "Variable length string up to n characters", "Actual + 1B", "Emails, usernames, product titles"],
              ["String", "TEXT", "Unlimited length character text", "Variable", "Blog posts, comments, full descriptions"],
              ["Temporal", "DATE", "Calendar date (YYYY-MM-DD)", "4 Bytes", "Birthdays, hire dates, invoice dates"],
              ["Temporal", "TIMESTAMPTZ", "Date & time with explicit UTC timezone offset", "8 Bytes", "Global order logs, audit trails, event timestamps"]
            ]
          }
        },
        {
          heading: "3. Critical Financial Data Type Rule: DECIMAL vs FLOAT",
          text: "Never store currency or monetary values in FLOAT or DOUBLE PRECISION columns! Floating-point numbers use binary representation (IEEE 754) which introduces floating-point rounding errors (e.g., 0.1 + 0.2 = 0.30000000000000004). Always use DECIMAL(precision, scale) or NUMERIC(precision, scale) for money.",
          bulletPoints: [
            "DECIMAL(10, 2): Stores up to 10 total digits, with exactly 2 digits after the decimal point (e.g. $99,999,999.99).",
            "DECIMAL(18, 4): Ideal for financial exchange rates requiring 4 decimal places."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Comprehensive E-Commerce Table Schema with Optimal Data Types",
          code: `-- Create an e-commerce user profiles table enforcing explicit data types
CREATE TABLE user_profiles (
    user_id BIGINT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    account_balance DECIMAL(12, 2) DEFAULT 0.00,
    country_code CHAR(2) NOT NULL,
    bio TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    birth_date DATE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);`,
          explanation: "BIGINT is selected for user_id to support scalability, VARCHAR(255) for email, CHAR(2) for ISO country codes, DECIMAL(12,2) for exact currency, and TIMESTAMPTZ for global time alignment."
        }
      ],
      practiceExercise: {
        title: "Designing an Order Items Schema",
        problem: "Write a CREATE TABLE statement for an 'order_items' table with: item_id (64-bit integer PK), order_id (64-bit integer), product_sku (fixed 10 char code), unit_price (exact monetary value up to $99,999.99), quantity (standard integer), and added_at (timestamp with timezone).",
        solutionCode: `CREATE TABLE order_items (
    item_id BIGINT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_sku CHAR(10) NOT NULL,
    unit_price DECIMAL(7, 2) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);`
      },
      keyTakeaways: [
        "Always write SQL keywords in UPPERCASE and table/column names in lowercase_snake_case.",
        "Use DECIMAL(p,s) for monetary values—NEVER use FLOAT or DOUBLE due to binary rounding errors.",
        "VARCHAR(n) optimizes storage for variable text, while CHAR(n) is ideal for fixed length codes.",
        "TIMESTAMPTZ stores timestamps in UTC, preventing timezone conversion bugs in global applications."
      ]
    }
  },
  {
    id: "sql-mod-3",
    title: "Module 03 — DDL: Creating & Managing Database Structures",
    description: "Master Data Definition Language (DDL) operations: CREATE TABLE, ALTER TABLE (ADD, DROP, RENAME, MODIFY), DROP TABLE, TRUNCATE TABLE, and structural management.",
    completed: false,
    order: 3,
    published: true,
    readingMaterial: {
      introduction: "Data Definition Language (DDL) encompasses SQL commands that construct, modify, and drop database structural objects (tables, schemas, indexes, views). DDL statements alter the database data dictionary, and in most database systems, DDL operations execute with implicit auto-commit.",
      objectives: [
        "Construct tables using CREATE TABLE with IF NOT EXISTS safeguards",
        "Evolve live table schemas using ALTER TABLE (ADD COLUMN, DROP COLUMN, RENAME COLUMN, ALTER TYPE)",
        "Understand structural deletion with DROP TABLE (CASCADE vs RESTRICT)",
        "Master data wiping with TRUNCATE TABLE",
        "Compare TRUNCATE TABLE vs DELETE FROM vs DROP TABLE across 6 structural metrics",
        "Execute clean schema migration workflows"
      ],
      sections: [
        {
          heading: "1. Core DDL Command Reference",
          text: "DDL statements dictate table architectures and structural metadata:",
          bulletPoints: [
            "CREATE TABLE: Defines a new table structure with columns, types, and constraints.",
            "ALTER TABLE: Modifies an existing table schema on live databases without losing data.",
            "DROP TABLE: Permanently deletes the table structure AND all contained data rows.",
            "TRUNCATE TABLE: Removes all data rows from a table instantly while retaining the table structure."
          ]
        },
        {
          heading: "2. In-Depth Architectural Comparison: TRUNCATE vs DELETE vs DROP",
          text: "Choosing between TRUNCATE, DELETE, and DROP is a frequent topic in senior technical interviews:",
          table: {
            headers: ["Metric", "TRUNCATE TABLE", "DELETE FROM", "DROP TABLE"],
            rows: [
              ["Primary Action", "Deletes ALL data rows instantly", "Deletes specific or all data rows", "Deletes entire Table & Schema"],
              ["SQL Sub-Language", "DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DDL (Data Definition Language)"],
              ["WHERE Clause?", "NO (Always affects entire table)", "YES (Filters specific rows)", "NO"],
              ["Execution Speed", "Extremely Fast (O(1) page deallocation)", "Slower (O(N) row-by-row scan)", "Instant (Removes catalog entry)"],
              ["Transaction Logging", "Minimal (Logs page deallocations)", "Full (Logs every deleted row)", "Minimal"],
              ["Auto-Increment Counter", "Resets counter back to 1", "Does NOT reset counter", "N/A (Table is destroyed)"],
              ["Rollback Capability", "No in MySQL; Yes in PostgreSQL", "Yes (Can be rolled back in transaction)", "No in MySQL; Yes in PostgreSQL"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Complete Schema Lifecycle: CREATE, ALTER, and TRUNCATE Script",
          code: `-- Step 1: Create initial employees table
CREATE TABLE IF NOT EXISTS employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2)
);

-- Step 2: Alter table to add department, hire_date, and email columns
ALTER TABLE employees 
ADD COLUMN department VARCHAR(50) DEFAULT 'General',
ADD COLUMN hire_date DATE DEFAULT CURRENT_DATE,
ADD COLUMN email VARCHAR(100);

-- Step 3: Modify column constraint to NOT NULL
ALTER TABLE employees 
ALTER COLUMN email SET NOT NULL;

-- Step 4: Rename a column
ALTER TABLE employees 
RENAME COLUMN first_name TO given_name;

-- Step 5: Fast data wipe
TRUNCATE TABLE employees;`,
          explanation: "ALTER TABLE permits incremental database schema evolution without dropping existing production tables."
        }
      ],
      practiceExercise: {
        title: "Schema Evolution Exercise",
        problem: "Write DDL statements to: 1. Create a table 'courses' with course_id (INT PK) and title (VARCHAR 100). 2. Add a column 'is_published' (BOOLEAN default FALSE). 3. Rename 'title' to 'course_title'. 4. Drop the 'is_published' column.",
        solutionCode: `-- 1. Create Table
CREATE TABLE IF NOT EXISTS courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);

-- 2. Add Column
ALTER TABLE courses ADD COLUMN is_published BOOLEAN DEFAULT FALSE;

-- 3. Rename Column
ALTER TABLE courses RENAME COLUMN title TO course_title;

-- 4. Drop Column
ALTER TABLE courses DROP COLUMN is_published;`
      },
      keyTakeaways: [
        "DDL operations alter structural metadata and auto-commit immediately in most database engines.",
        "TRUNCATE TABLE is vastly superior to DELETE FROM for wiping large tables because it deallocates data pages directly.",
        "Always use IF NOT EXISTS with CREATE TABLE and IF EXISTS with DROP TABLE to write idempotent deployment scripts."
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
      introduction: "Integrity constraints are rules defined on database columns to guarantee that data inserted, updated, or maintained inside tables remains accurate, consistent, and valid. Constraints enforce business rules at the database engine level, safeguarding data regardless of application layer bugs.",
      objectives: [
        "Understand Entity Integrity (Primary Keys) and Referential Integrity (Foreign Keys)",
        "Construct single-column and composite Primary Keys",
        "Configure Foreign Keys with CASCADE actions: ON DELETE CASCADE, ON DELETE SET NULL, ON DELETE RESTRICT",
        "Enforce NOT NULL and UNIQUE constraints across single and multiple columns",
        "Write custom business validation rules using CHECK constraints",
        "Set dynamic and static fallback values using DEFAULT constraints"
      ],
      sections: [
        {
          heading: "1. Core Database Constraints Summary",
          text: "Constraints enforce data rules directly inside the RDBMS engine:",
          bulletPoints: [
            "PRIMARY KEY (PK): Uniquely identifies each row. Cannot contain NULLs.",
            "FOREIGN KEY (FK): References a Primary Key in a parent table to build entity relationships.",
            "UNIQUE: Guarantees all column values are distinct, permitting a single NULL value.",
            "NOT NULL: Prevents missing or NULL values from being saved in a column.",
            "CHECK: Validates that column data satisfies a boolean logical expression (e.g. price > 0).",
            "DEFAULT: Automatically supplies a fallback value if no value is provided during INSERT."
          ],
          table: {
            headers: ["Constraint", "Allows NULL?", "Allows Duplicates?", "Max per Table", "Primary Purpose"],
            rows: [
              ["PRIMARY KEY", "NO", "NO", "Exactly 1", "Uniquely identifies table rows"],
              ["UNIQUE", "YES (1 NULL)", "NO", "Multiple", "Enforces distinct values (e.g. Email, SSN)"],
              ["FOREIGN KEY", "YES", "YES", "Multiple", "Enforces referential integrity to parent table"],
              ["NOT NULL", "NO", "YES", "Multiple", "Guarantees mandatory data presence"],
              ["CHECK", "YES", "YES", "Multiple", "Validates custom business domain logic"]
            ]
          }
        },
        {
          heading: "2. Foreign Key Cascade Actions Explained",
          text: "Foreign Keys define what happens to child records when a parent record is deleted or updated:",
          bulletPoints: [
            "ON DELETE CASCADE: Automatically deletes all child rows when the referenced parent row is deleted.",
            "ON DELETE SET NULL: Sets the foreign key column in child rows to NULL when parent is deleted.",
            "ON DELETE RESTRICT / NO ACTION: Blocks deletion of parent row if any child rows exist (Default safety)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Multi-Table Relational Schema with Constraints & Cascade Actions",
          code: `-- Parent Table: Departments
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE
);

-- Child Table: Employees with Foreign Key, CHECK, and DEFAULT constraints
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 18 AND age <= 70),
    salary DECIMAL(10, 2) CHECK (salary > 0),
    status VARCHAR(20) DEFAULT 'Active' CHECK (status IN ('Active', 'On Leave', 'Terminated')),
    dept_id INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_employee_dept 
        FOREIGN KEY (dept_id) 
        REFERENCES departments(dept_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);`,
          explanation: "ON DELETE RESTRICT prevents deleting a department if employees are currently assigned to it, preserving referential integrity."
        }
      ],
      practiceExercise: {
        title: "Composite Primary Key & Constraint Challenge",
        problem: "Write a CREATE TABLE statement for a 'student_courses' enrollment table containing: student_id (INT), course_id (INT), enrollment_date (DATE default current date), and grade (CHAR(1) check in ('A','B','C','D','F')). Set a composite primary key on (student_id, course_id).",
        solutionCode: `CREATE TABLE student_courses (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    grade CHAR(1) CHECK (grade IN ('A', 'B', 'C', 'D', 'F')),
    PRIMARY KEY (student_id, course_id)
);`
      },
      keyTakeaways: [
        "Primary Keys uniquely identify every row and can never contain NULL values.",
        "Foreign Keys enforce Referential Integrity between parent and child tables.",
        "CHECK constraints validate business rules directly inside the database engine.",
        "Use ON DELETE CASCADE with caution—ON DELETE RESTRICT is safer for preventing accidental data loss."
      ]
    }
  },
  {
    id: "sql-mod-5",
    title: "Module 05 — DML: INSERT, UPDATE & DELETE",
    description: "Master Data Manipulation Language (DML): Single and bulk INSERT INTO, UPDATE with WHERE filtering, DELETE FROM, and UPSERT (ON CONFLICT DO UPDATE) operations.",
    completed: false,
    order: 5,
    published: true,
    readingMaterial: {
      introduction: "Data Manipulation Language (DML) statements are used to add, update, and remove data rows inside relational tables. Unlike DDL structural operations, DML statements modify data row contents and execute within recoverable transaction boundaries.",
      objectives: [
        "Insert single and multi-row records using INSERT INTO",
        "Copy data between tables using INSERT INTO ... SELECT",
        "Safely update existing records using UPDATE with explicit WHERE filtering",
        "Prevent catastrophic full-table data corruption during UPDATE and DELETE commands",
        "Delete target records using DELETE FROM with WHERE conditions",
        "Master UPSERT (INSERT ... ON CONFLICT DO UPDATE / ON DUPLICATE KEY UPDATE) operations"
      ],
      sections: [
        {
          heading: "1. DML Statement Syntax & Execution Patterns",
          text: "Executing DML without explicit WHERE filtering is a leading cause of production data corruption.",
          bulletPoints: [
            "Single Row INSERT: Adds one record specifying target columns and values.",
            "Bulk Multi-Row INSERT: Inserts hundreds of rows in a single network query call for high performance.",
            "INSERT INTO ... SELECT: Queries data from a source table and inserts it directly into a target table.",
            "UPDATE with WHERE: Modifies specified column values for matching rows.",
            "DELETE with WHERE: Removes matching rows from a table."
          ]
        },
        {
          heading: "2. The UPSERT Pattern Explained",
          text: "An UPSERT attempts to INSERT a new record, but if a Primary Key or UNIQUE constraint conflict occurs, it automatically falls back to an UPDATE instead.",
          bulletPoints: [
            "PostgreSQL Syntax: INSERT INTO table VALUES (...) ON CONFLICT (id) DO UPDATE SET col = val;",
            "MySQL Syntax: INSERT INTO table VALUES (...) ON DUPLICATE KEY UPDATE col = val;"
          ]
        }
      ],
      codeExamples: [
        {
          title: "Comprehensive DML: Bulk INSERT, UPDATE, DELETE & UPSERT",
          code: `-- 1. Bulk Multi-Row INSERT
INSERT INTO products (product_id, product_name, unit_price, stock_quantity)
VALUES 
    (101, 'Mechanical Keyboard', 89.99, 45),
    (102, 'Ergonomic Mouse', 45.50, 120),
    (103, '4K Monitor', 320.00, 15);

-- 2. Safe UPDATE with WHERE Clause
UPDATE products
SET unit_price = unit_price * 0.90,
    stock_quantity = stock_quantity + 10
WHERE unit_price > 50.00;

-- 3. UPSERT Pattern (Insert or Update on Conflict)
INSERT INTO products (product_id, product_name, unit_price, stock_quantity)
VALUES (101, 'Mechanical Keyboard RGB', 95.00, 50)
ON CONFLICT (product_id) 
DO UPDATE SET 
    unit_price = EXCLUDED.unit_price,
    stock_quantity = EXCLUDED.stock_quantity;

-- 4. Selective DELETE with WHERE
DELETE FROM products WHERE stock_quantity = 0;`,
          explanation: "EXCLUDED references the proposed insert values during an ON CONFLICT DO UPDATE operation."
        }
      ],
      practiceExercise: {
        title: "Updating Inventory & Deleting Inactive Accounts",
        problem: "Write SQL DML queries to: 1. Increase unit_price by 5% for all products in category 'Electronics'. 2. Delete all user accounts where status = 'Inactive' and last_login < '2024-01-01'.",
        solutionCode: `-- 1. Salary / Price Update
UPDATE products
SET unit_price = unit_price * 1.05
WHERE category = 'Electronics';

-- 2. Delete Inactive Users
DELETE FROM users
WHERE status = 'Inactive' AND last_login < '2024-01-01';`
      },
      keyTakeaways: [
        "NEVER execute UPDATE or DELETE without a WHERE clause unless you explicitly intend to modify or wipe the entire table!",
        "Bulk INSERTs drastically improve application throughput compared to single-row INSERT loops.",
        "Always execute a preview SELECT query with the exact same WHERE condition prior to executing UPDATE or DELETE commands."
      ]
    }
  },
  {
    id: "sql-mod-6",
    title: "Module 06 — SELECT Statement: Retrieving Data",
    description: "Master Data Query Language (DQL): Column projection, aliases (AS), computed fields, arithmetic expressions, string concatenation, and SQL statement logical execution order.",
    completed: false,
    order: 6,
    published: true,
    readingMaterial: {
      introduction: "The SELECT statement is the foundational command of Data Query Language (DQL). It allows users to retrieve specific columns, compute calculated expressions, assign aliases, and format outputs for business reporting and application APIs.",
      objectives: [
        "Understand the 7-step logical query processing order of SQL clauses",
        "Select specific columns (Projection) vs SELECT * anti-patterns",
        "Assign descriptive column and table aliases using the AS keyword",
        "Perform arithmetic calculations directly inside SELECT expressions",
        "Concatenate text columns and format output strings"
      ],
      sections: [
        {
          heading: "1. The 7-Step Logical Query Execution Order",
          text: "Although you write SELECT first, the RDBMS engine evaluates clauses in a strict logical sequence:",
          bulletPoints: [
            "1. FROM: Identifies target tables and evaluates JOINs.",
            "2. WHERE: Filters individual data rows prior to grouping.",
            "3. GROUP BY: Groups filtered rows into summary buckets.",
            "4. HAVING: Filters aggregated group summary buckets.",
            "5. SELECT: Computes expressions, projection, and column aliases.",
            "6. DISTINCT: Deduplicates result tuples.",
            "7. ORDER BY: Sorts final result rows.",
            "8. LIMIT / OFFSET: Restricts row output count."
          ]
        },
        {
          heading: "2. Column Projection vs SELECT * Anti-Pattern",
          text: "Using SELECT * retrieves every single column from disk. In production software engineering, SELECT * is considered an anti-pattern because it increases network bandwidth, degrades query performance, breaks application column mappings when tables change, and prevents index-only scans.",
          bulletPoints: [
            "Always explicitly list required columns: SELECT user_id, email, status FROM users;"
          ]
        }
      ],
      codeExamples: [
        {
          title: "Projection, Column Aliases & Computed Financial Fields",
          code: `-- Retrieve employee compensation metrics with calculated expressions and aliases
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    salary AS monthly_salary,
    salary * 12 AS annual_gross_salary,
    (salary * 12) * 0.15 AS estimated_tax_deduction,
    (salary * 12) * 0.85 AS net_annual_take_home
FROM employees
WHERE is_active = TRUE;`,
          explanation: "Computed fields calculate dynamic values on-the-fly without altering underlying table data on disk."
        }
      ],
      practiceExercise: {
        title: "Calculated Product Revenue Query",
        problem: "Write a SELECT query on a 'products' table returning product_name, unit_price, stock_quantity, and a total_inventory_value column (unit_price * stock_quantity) for products with stock_quantity > 0.",
        solutionCode: `SELECT 
    product_name,
    unit_price,
    stock_quantity,
    (unit_price * stock_quantity) AS total_inventory_value
FROM products
WHERE stock_quantity > 0;`
      },
      keyTakeaways: [
        "Avoid using SELECT * in production—explicitly specify required columns to optimize network and memory performance.",
        "The RDBMS evaluates FROM before SELECT, meaning column aliases created in SELECT cannot be referenced inside WHERE clauses.",
        "Column aliases assigned with AS make API response payloads clean and readable."
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
      introduction: "The WHERE clause restricts query output to rows that satisfy explicit boolean filtering criteria. Mastering WHERE clause operators allows data analysts and engineers to filter massive multi-million row datasets down to exact actionable insights.",
      objectives: [
        "Use comparison operators (=, <>, !=, <, >, <=, >=)",
        "Combine boolean logic using AND, OR, and NOT with explicit parentheses",
        "Filter numeric and date ranges using BETWEEN ... AND ...",
        "Match against explicit lists using the IN operator",
        "Perform pattern matching using LIKE & ILIKE wildcards (% and _)",
        "Correctly test for missing values using IS NULL and IS NOT NULL"
      ],
      sections: [
        {
          heading: "1. SQL Filtering Operators Reference Matrix",
          text: "Filtering operators evaluate boolean TRUE, FALSE, or UNKNOWN (when NULL values are encountered):",
          table: {
            headers: ["Operator", "Syntax Example", "Description & Behavior"],
            rows: [
              ["BETWEEN", "salary BETWEEN 40000 AND 80000", "Inclusive range test (includes lower and upper bounds)"],
              ["IN", "department IN ('HR', 'IT', 'Sales')", "Matches any value matching an element in the explicit list"],
              ["LIKE", "email LIKE '%@gmail.com'", "Pattern match: % matches 0+ characters, _ matches 1 character"],
              ["ILIKE", "name ILIKE 'john%'", "Case-insensitive pattern match (PostgreSQL specific)"],
              ["IS NULL", "phone_number IS NULL", "Tests if a column contains a missing NULL value"],
              ["AND / OR", "(age >= 21) AND (status = 'Active')", "Combines boolean expressions with explicit operator precedence"]
            ]
          }
        },
        {
          heading: "2. Three-Valued Logic (3VL) & NULL Handling Rules",
          text: "In SQL, comparing anything to NULL using standard equality operators (= NULL or != NULL) yields UNKNOWN, which evaluates as FALSE in WHERE clauses. You MUST use IS NULL or IS NOT NULL.",
          bulletPoints: [
            "WRONG: WHERE phone_number = NULL (Returns zero rows always!)",
            "CORRECT: WHERE phone_number IS NULL",
            "COALESCE(phone_number, 'N/A'): Replaces NULL with 'N/A' fallback."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Complex Multi-Criteria WHERE Filtering Query",
          code: `-- Retrieve active employees hired after 2021 in IT or Finance earning between $60k and $120k with verified email
SELECT employee_id, first_name, department, salary, hire_date
FROM employees
WHERE (department IN ('IT', 'Finance'))
  AND salary BETWEEN 60000.00 AND 120000.00
  AND hire_date >= '2021-01-01'
  AND email IS NOT NULL;`,
          explanation: "Parentheses ensure that logical OR/IN criteria are evaluated prior to AND conditions."
        }
      ],
      practiceExercise: {
        title: "Pattern & Null Filtering Exercise",
        problem: "Write a query to find all customers whose first_name starts with 'J' or 'M', live in state 'NY', 'CA', or 'TX', and have a valid phone_number specified (not NULL).",
        solutionCode: `SELECT * 
FROM customers
WHERE (first_name LIKE 'J%' OR first_name LIKE 'M%')
  AND state IN ('NY', 'CA', 'TX')
  AND phone_number IS NOT NULL;`
      },
      keyTakeaways: [
        "Never use '= NULL' or '!= NULL' in SQL—always use IS NULL or IS NOT NULL.",
        "The LIKE wildcard % matches any string sequence, while _ matches exactly one single character.",
        "Always wrap OR conditions in parentheses when combining them with AND conditions."
      ]
    }
  },
  {
    id: "sql-mod-8",
    title: "Module 08 — DISTINCT, ORDER BY & LIMIT",
    description: "Eliminate duplicate rows with DISTINCT, sort query results using ORDER BY (ASC/DESC), and implement web pagination with LIMIT and OFFSET.",
    completed: false,
    order: 8,
    published: true,
    readingMaterial: {
      introduction: "Data presentation requires sorting, deduplication, and pagination. The DISTINCT keyword eliminates duplicate rows from query outputs, ORDER BY sorts results ascending or descending, and LIMIT/OFFSET powers pagination for web applications.",
      objectives: [
        "Eliminate duplicate result set rows using SELECT DISTINCT",
        "Sort data ascending (ASC) and descending (DESC) across multiple columns",
        "Sort outputs using expressions, column aliases, or NULL position overrides (NULLS FIRST / LAST)",
        "Restrict result row count using LIMIT (or TOP in SQL Server)",
        "Implement multi-page web pagination using offset math (LIMIT n OFFSET m)"
      ],
      sections: [
        {
          heading: "1. Sorting & Pagination Mechanics",
          text: "Combining ORDER BY with LIMIT guarantees deterministic output results:",
          bulletPoints: [
            "SELECT DISTINCT: Compares entire output tuples and keeps unique combinations only.",
            "ORDER BY col1 ASC, col2 DESC: Primary sort on col1 ascending; tie-breaker on col2 descending.",
            "NULLS FIRST / NULLS LAST: Overrides where NULL values appear in sorted results.",
            "LIMIT n OFFSET m: Returns n records skipping the first m records (Page 1 = OFFSET 0, Page 2 = OFFSET 10)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Deduplication, Multi-Column Sorting & Web Pagination Query",
          code: `-- 1. Fetch unique departments
SELECT DISTINCT department FROM employees;

-- 2. Fetch top 5 highest paid software engineers with pagination (Page 1)
SELECT employee_id, first_name, salary
FROM employees
WHERE department = 'Engineering'
ORDER BY salary DESC, first_name ASC
LIMIT 5 OFFSET 0;

-- 3. Fetch Page 2 (Items 6 to 10)
SELECT employee_id, first_name, salary
FROM employees
WHERE department = 'Engineering'
ORDER BY salary DESC, first_name ASC
LIMIT 5 OFFSET 5;`,
          explanation: "OFFSET 0 retrieves page 1. Page 2 uses OFFSET 5 (skipping 5 records)."
        }
      ],
      practiceExercise: {
        title: "Top Products Pagination Exercise",
        problem: "Write a query to retrieve the 3rd to 7th most expensive products in stock (order by unit_price DESC, skip first 2).",
        solutionCode: `SELECT product_id, product_name, unit_price
FROM products
WHERE stock_quantity > 0
ORDER BY unit_price DESC
LIMIT 5 OFFSET 2;`
      },
      keyTakeaways: [
        "DISTINCT operates across ALL projected columns in the SELECT clause.",
        "Always pair LIMIT/OFFSET queries with explicit ORDER BY clauses to guarantee consistent ordering.",
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
      introduction: "Aggregation transforms detailed transaction logs into executive summaries and analytical metrics. SQL aggregate functions calculate mathematical summaries over sets of rows, while GROUP BY categorizes summary statistics into analytical subsets.",
      objectives: [
        "Master the 5 standard aggregate functions: COUNT, SUM, AVG, MIN, and MAX",
        "Understand the difference between COUNT(*) and COUNT(column_name)",
        "Group records by one or multiple categorical columns using GROUP BY",
        "Filter aggregated group metrics using the HAVING clause",
        "Distinguish between WHERE (row filter) and HAVING (group filter)"
      ],
      sections: [
        {
          heading: "1. Aggregate Functions Summary Matrix",
          text: "Aggregate functions ignore NULL values except for COUNT(*):",
          table: {
            headers: ["Function", "Description", "Handles NULL Values?"],
            rows: [
              ["COUNT(*)", "Counts total number of rows in result set", "Includes NULL rows"],
              ["COUNT(col)", "Counts total non-NULL values in specific column", "Ignores NULLs"],
              ["COUNT(DISTINCT col)", "Counts total unique non-NULL values in column", "Ignores NULLs"],
              ["SUM(col)", "Calculates mathematical sum of numeric values", "Ignores NULLs"],
              ["AVG(col)", "Calculates arithmetic mean value", "Ignores NULLs"],
              ["MIN(col) / MAX(col)", "Returns lowest or highest value in set", "Ignores NULLs"]
            ]
          }
        },
        {
          heading: "2. Crucial Rule: WHERE vs HAVING",
          text: "Understanding when to use WHERE versus HAVING is critical:",
          bulletPoints: [
            "WHERE filters individual rows BEFORE aggregation takes place (cannot contain aggregate functions).",
            "HAVING filters group buckets AFTER aggregation takes place (contains aggregate functions like COUNT(id) > 5)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Grouping & Aggregations with HAVING Clause",
          code: `-- Calculate average salary and total payroll per department for active staff with > 3 employees and avg salary > 50,000
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
        title: "Customer Order Aggregation Exercise",
        problem: "Write a query on an 'orders' table returning customer_id, order_count, and total_spent for customers who have placed more than 5 orders and spent over $500 in total.",
        solutionCode: `SELECT 
    customer_id,
    COUNT(order_id) AS order_count,
    SUM(order_total) AS total_spent
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) > 5 AND SUM(order_total) > 500.00
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
      introduction: "Relational database normalization splits information into separate tables to eliminate data redundancy. SQL Joins allow software engineers and analysts to query and recombine rows across multiple tables based on related key columns.",
      objectives: [
        "Understand relational table join mechanics and ON join conditions",
        "Master INNER JOIN for retrieving matching records between tables",
        "Master LEFT (OUTER) JOIN for preserving all records from the left table",
        "Understand RIGHT JOIN and FULL OUTER JOIN for complete table coverage",
        "Use CROSS JOIN to generate Cartesian products",
        "Execute SELF JOIN to query hierarchical entity data (e.g., Employee-Manager)"
      ],
      sections: [
        {
          heading: "1. Visual SQL Joins Comparison Matrix",
          text: "Selecting the correct join type determines whether unmatched rows are retained or discarded:",
          table: {
            headers: ["Join Type", "Matching Condition Behavior", "Unmatched Left Rows?", "Unmatched Right Rows?"],
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
        title: "Employee Manager Self Join Exercise",
        problem: "Given an 'employees' table with columns (emp_id, emp_name, manager_id), write a query displaying each employee name alongside their manager's name (including employees without managers).",
        solutionCode: `SELECT 
    e.emp_name AS "Employee Name",
    COALESCE(m.emp_name, 'Top Executive / No Manager') AS "Manager Name"
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
    description: "Write scalar, multi-row, and correlated subqueries, Common Table Expressions (CTEs), UNION, UNION ALL, and set operations.",
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
          text: "CTEs offer superior readability and maintainability over nested subqueries:",
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
        title: "Subquery Salary Exercise",
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
          heading: "1. Built-in SQL Scalar Functions Reference Matrix",
          text: "Scalar functions accept an input value and return a single transformed value per row:",
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
        title: "Conditional Status Logic Exercise",
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
        title: "Index Design Exercise",
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
          text: "ACID principles define the core gold standard for reliable relational database processing:",
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
        title: "DCL Security & Roles Exercise",
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

// 1. Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');
if (sqlCourseInDb) {
  sqlCourseInDb.modules = ultraModules;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Successfully updated server/data/db.json with 15 ultra-enriched SQL modules!');
}

// 2. Update src/data/coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlCourseIndex = content.indexOf('sql-data-analysis');
const webCourseIndex = content.indexOf('web-development');

if (sqlCourseIndex !== -1 && webCourseIndex !== -1) {
  const beforeSql = content.slice(0, sqlCourseIndex);
  const afterSql = content.slice(webCourseIndex);
  
  const sqlSlice = content.slice(sqlCourseIndex, webCourseIndex);
  const modulesKeywordIndex = sqlSlice.indexOf('modules: [');
  
  if (modulesKeywordIndex !== -1) {
    const headerPart = sqlSlice.slice(0, modulesKeywordIndex + 'modules: ['.length);
    const newModulesJson = JSON.stringify(ultraModules, null, 6);
    const formattedModulesJs = newModulesJson.slice(1, -1);
    
    const newSqlBlock = headerPart + '\n' + formattedModulesJs + '\n    ],\n  },\n  {\n    id: "';
    
    content = beforeSql + newSqlBlock + afterSql;
    fs.writeFileSync(coursesDataPath, content, 'utf8');
    console.log('Successfully updated src/data/coursesData.js with 15 ultra-enriched SQL modules!');
  }
}

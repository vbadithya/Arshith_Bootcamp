const fs = require('fs');

// Load modules 1-4, 10-15 from previous massive script
const massiveScript = require('./enrich_modules_10_to_15_massive.cjs');

// Build 15 full modules where EVERY module has 3-4 sections, tables, and 2 code examples!
const fullTextbookModules = [
  // Module 01
  {
    id: "sql-mod-1",
    title: "Module 01 — Introduction to SQL & Databases",
    description: "Master foundational SQL theory: Database history (IBM 1970s), RDBMS vs NoSQL, RDBMS Engine Architecture (Parser, Optimizer, Execution Engine), Client-Server vs Embedded Localhost (127.0.0.1), and the 5 SQL command categories (DDL, DML, DQL, DCL, TCL).",
    completed: false,
    order: 1,
    published: true,
    readingMaterial: {
      introduction: "Welcome to Module 1! Structured Query Language (SQL) is the universal, industry-standard computer language used to define, query, manage, and manipulate data stored inside Relational Database Management Systems (RDBMS). SQL was developed in the 1970s by IBM Computer Scientists (led by Dr. Edgar F. 'Ted' Codd, father of relational databases) and was standardized by ANSI in 1986 and ISO in 1987. Data is the lifeblood of modern enterprise applications—from banking and healthcare systems to web apps and AI pipelines. SQL provides a declarative language to communicate with databases cleanly and efficiently.",
      objectives: [
        "Learn the brief history of SQL: Developed in 1970s by IBM, standardized by ANSI (1986) and ISO (1987)",
        "Understand why SQL databases are preferred over flat files (CSV, Excel) for concurrency, data consistency, and zero data redundancy",
        "Explore RDBMS Architecture Components: Query Dispatcher, Parser + Optimizer, DBMS Engine, File Manager, and Transaction Manager",
        "Compare Database Server Environments: Local Server ('localhost': IP 127.0.0.1) vs Corporate Remote Cloud Servers",
        "Differentiate Database Administrators (DBAs with complete access) from standard database application users",
        "Categorize all SQL statements into the 5 sub-languages: DDL, DML, DQL, DCL, and TCL"
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
          heading: "2. Brief History & Standard Dialects of SQL",
          text: "SQL originated from IBM System/R research in the 1970s based on Dr. E. F. Codd's relational model. Although SQL is an ANSI/ISO standard language, major database vendors implement specific engine dialects:",
          bulletPoints: [
            "1970: Dr. Edgar F. Codd described the relational model for databases.",
            "1974-1978: IBM developed System/R and Structured Query Language (SQL).",
            "1986: ANSI standardized SQL; ISO followed in 1987.",
            "SQL Dialects: MS SQL Server uses T-SQL, Oracle uses PL/SQL, MS Access uses JET SQL, and PostgreSQL/MySQL implement ANSI-compliant SQL extensions."
          ]
        },
        {
          heading: "3. How an RDBMS Engine Executes SQL Queries",
          text: "When you execute a SQL statement against an RDBMS, the database engine processes the command through a multi-stage architecture:",
          bulletPoints: [
            "1. Query Dispatcher: Receives incoming client SQL requests across network sockets.",
            "2. Parser & Optimizer: Checks syntax rules, parses identifiers, and generates the optimal execution plan.",
            "3. DBMS Execution Engine: Executes query plan nodes (Index Scans, Hash Joins).",
            "4. File & Transaction Manager: Manages buffer cache RAM pages, transaction logs (WAL), and disk persistence."
          ],
          table: {
            headers: ["SQL Sub-Language", "Primary Purpose", "Core Statements / Keywords", "Auto-Commit Behavior"],
            rows: [
              ["DDL (Data Definition Language)", "Defines & modifies database structures", "CREATE, ALTER, DROP, RENAME, TRUNCATE", "Auto-commits immediately"],
              ["DML (Data Manipulation Language)", "Manipulates data records inside tables", "SELECT, INSERT, UPDATE, DELETE", "Manual / Transactional commit"],
              ["DQL (Data Query Language)", "Queries & retrieves data from tables", "SELECT", "Read-only operation"],
              ["DCL (Data Control Language)", "Manages user privileges & security", "GRANT, REVOKE", "Auto-commits immediately"],
              ["TCL (Transaction Control Language)", "Manages database transaction states", "COMMIT, ROLLBACK, SAVEPOINT", "Manual transaction control"]
            ]
          }
        },
        {
          heading: "4. Server Environments: Localhost vs Corporate Enterprise Servers",
          text: "When developing software locally, database connections run on a Local Server assigned to 'localhost' (IP Address 127.0.0.1). Large corporations host their databases on external, high-power cloud servers (e.g. AWS RDS, GCP Cloud SQL, Azure SQL) capable of handling millions of concurrent user connections safely.",
          bulletPoints: [
            "Local Server ('localhost'): IP 127.0.0.1 — Used for local software development and testing.",
            "Remote Enterprise Server: External IP or domain host — Used by corporations for high availability, automatic backups, and security isolation."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Verifying Database Connection & Server Version",
          code: `-- Verify server connection parameters and active database engine
SELECT version();

-- View active connected database, session user identity, and server port
SELECT 
    current_database() AS active_db,
    current_user AS session_user,
    inet_server_port() AS server_port;`,
          explanation: "These utility commands display current database server properties and active user connection states."
        }
      ],
      practiceExercise: {
        title: "Classifying SQL Sub-Languages",
        problem: "Map each of the following 6 statements to its correct SQL sub-language (DDL, DML, DCL, TCL): 1. CREATE TABLE, 2. INSERT INTO, 3. COMMIT, 4. GRANT, 5. TRUNCATE TABLE, 6. UPDATE.",
        solutionCode: `-- Correct Classifications:
-- 1. CREATE TABLE   -> DDL (Data Definition Language)
-- 2. INSERT INTO    -> DML (Data Manipulation Language)
-- 3. COMMIT         -> TCL (Transaction Control Language)
-- 4. GRANT          -> DCL (Data Control Language)
-- 5. TRUNCATE TABLE -> DDL (Data Definition Language)
-- 6. UPDATE         -> DML (Data Manipulation Language)`
      },
      keyTakeaways: [
        "SQL was developed by IBM in the 1970s and standardized by ANSI (1986) and ISO (1987).",
        "DDL alters database structures, DML modifies row data, DCL manages user permissions, and TCL manages transactions.",
        "Database Administrators (DBAs) possess full privileges to manage rights using GRANT and REVOKE.",
        "Local development uses 'localhost' (127.0.0.1), while enterprise systems deploy on dedicated external cloud servers."
      ]
    }
  },

  // Module 02
  {
    id: "sql-mod-2",
    title: "Module 02 — SQL Syntax, Keywords & Data Types",
    description: "Learn essential SQL syntax rules, reserved keywords, variable naming constraints, single/multi-line comments, and core data types (INT, VARCHAR, DATE, DECIMAL).",
    completed: false,
    order: 2,
    published: true,
    readingMaterial: {
      introduction: "To write maintainable, bug-free SQL, you must master SQL code syntax conventions and data types. Choosing the correct data type for each column ensures data accuracy, optimizes memory and disk storage, speeds up index scans, and prevents silent truncation or arithmetic rounding errors.",
      objectives: [
        "Master SQL syntax rules: Casing rules, identifiers, and statement terminators (;)",
        "Master SQL Reserved Keywords: Understand why keywords CANNOT be used as variable or table names",
        "Write single-line (--) and multi-line (/* */) code documentation comments",
        "Choose optimal Data Types: INT, BIGINT, DECIMAL(p,s), CHAR(n), VARCHAR(n), DATE, and TIMESTAMPTZ",
        "Understand why monetary values must use DECIMAL instead of FLOAT"
      ],
      sections: [
        {
          heading: "1. Core SQL Syntax Rules & Casing Conventions",
          text: "SQL syntax comprises several statement types to perform commands and database operations. While SQL keywords are case-insensitive, industry standards dictate casing rules:",
          bulletPoints: [
            "UPPERCASE for SQL Keywords: SELECT, FROM, WHERE, GROUP BY, CREATE TABLE.",
            "lowercase_snake_case for Table & Column Identifiers: customer_id, date_of_purchase, item_code.",
            "Semicolon Terminator (;): Explicitly terminates each SQL statement.",
            "Single Quotes ('') for Text & Date Literals: WHERE country = 'USA' AND purchase_date = '2026-01-15'."
          ]
        },
        {
          heading: "2. SQL Reserved Keywords Rule",
          text: "Keywords in SQL are reserved words (such as CREATE, ALTER, DROP, SELECT, INSERT, UPDATE, DELETE, ADD, TABLE). Reserved keywords CANNOT be used as variable names, database names, table names, or column names without syntax errors!",
          bulletPoints: [
            "Reserved Words: ADD, ALTER, CREATE, DELETE, DROP, FROM, INSERT, SELECT, UPDATE, WHERE, TABLE.",
            "Rule: You cannot create a table named 'alter' or 'create' (e.g. CREATE TABLE alter... is INVALID!)."
          ]
        },
        {
          heading: "3. SQL Data Types Deep Dive",
          text: "Every table column requires an explicit data type definition:",
          table: {
            headers: ["Category", "Data Type", "Description & Usage", "Storage Size", "Best Practice Use Case"],
            rows: [
              ["Integer", "INT / INTEGER", "32-bit signed integer (-2.1B to +2.1B)", "4 Bytes", "Auto-increment primary keys, quantity"],
              ["Integer", "BIGINT", "64-bit signed integer for massive ranges", "8 Bytes", "Global order IDs, transaction numbers"],
              ["Decimal", "DECIMAL(p, s)", "Exact fixed-point decimal (Precision p, Scale s)", "Variable", "Financial transactions, currency (NEVER use Float!)"],
              ["String", "CHAR(n)", "Fixed length string padded with trailing spaces", "n Bytes", "Fixed codes (e.g., ISO Country Code 'US', SKU)"],
              ["String", "VARCHAR(n)", "Variable length text string up to n characters", "Actual + 1B", "User emails, names, titles"],
              ["Temporal", "DATE", "Calendar date format (YYYY-MM-DD)", "4 Bytes", "Purchase date, birth date, hire date"],
              ["Temporal", "TIMESTAMPTZ", "Timestamp with explicit UTC timezone", "8 Bytes", "Audit logs, order placement timestamps"]
            ]
          }
        },
        {
          heading: "4. Critical Financial Data Type Rule: DECIMAL vs FLOAT",
          text: "Never store currency or monetary values in FLOAT or DOUBLE PRECISION columns! Floating-point numbers use binary representation (IEEE 754) which introduces floating-point rounding errors (e.g., 0.1 + 0.2 = 0.30000000000000004). Always use DECIMAL(precision, scale) for money.",
          bulletPoints: [
            "DECIMAL(10, 2): Stores up to 10 total digits, with exactly 2 digits after the decimal point (e.g. $99,999,999.99)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Valid vs Invalid SQL Keyword Usage & Table Definition",
          code: `-- INVALID CODE (Will cause syntax error because 'alter' is a reserved keyword):
-- CREATE TABLE alter (purchase_number INT);

-- VALID CODE (Using proper identifier names):
CREATE TABLE sales (
    purchase_number INT PRIMARY KEY,
    date_of_purchase DATE NOT NULL,
    customer_id INT NOT NULL,
    item_code VARCHAR(20) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL
);`,
          explanation: "Reserved SQL keywords like ALTER, CREATE, and DROP cannot be used as table or column names."
        }
      ],
      practiceExercise: {
        title: "Creating a Sales Table Schema",
        problem: "Write a CREATE TABLE statement for a 'sales' table with purchase_number (INT primary key), date_of_purchase (DATE), customer_id (INT), and item_code (VARCHAR 20).",
        solutionCode: `CREATE TABLE sales (
    purchase_number INT PRIMARY KEY,
    date_of_purchase DATE NOT NULL,
    customer_id INT NOT NULL,
    item_code VARCHAR(20) NOT NULL
);`
      },
      keyTakeaways: [
        "SQL reserved keywords (CREATE, ALTER, DROP, ADD) CANNOT be used as variable, table, or column names.",
        "Always format SQL keywords in UPPERCASE and table/column names in lowercase_snake_case.",
        "Use DECIMAL(p,s) for financial transactions to avoid floating-point binary rounding errors."
      ]
    }
  },

  // Module 03
  {
    id: "sql-mod-3",
    title: "Module 03 — DDL: Creating & Managing Database Structures",
    description: "Master Data Definition Language (DDL) statements: CREATE, ALTER (ADD, DROP, RENAME), DROP TABLE, RENAME TABLE, and TRUNCATE TABLE.",
    completed: false,
    order: 3,
    published: true,
    readingMaterial: {
      introduction: "Data Definition Language (DDL) consists of SQL syntax used to define, alter, rename, or delete database structural objects such as databases and tables. DDL statements modify the database catalog directly and auto-commit immediately.",
      objectives: [
        "Master the CREATE statement for creating database objects and tables",
        "Modify existing live tables using ALTER TABLE (ADD COLUMN, DROP COLUMN, RENAME COLUMN)",
        "Rename database objects using RENAME TABLE old_name TO new_name",
        "Permanently delete tables and schemas using DROP TABLE",
        "Instantly wipe table row contents while preserving structure using TRUNCATE TABLE"
      ],
      sections: [
        {
          heading: "1. The CREATE Statement",
          text: "The CREATE statement is used for creating entire databases and database objects like tables. Syntax: CREATE TABLE object_name (column_name data_type); (e.g. CREATE TABLE sales (purchase_number INT);).",
          bulletPoints: [
            "Database Object Creation: Allocates a new physical relational table in the active schema database catalog.",
            "Column Declarations: Defines column names and mandatory data types."
          ]
        },
        {
          heading: "2. The ALTER Statement (ADD, REMOVE, RENAME)",
          text: "The ALTER statement is used when altering existing objects in a database without dropping table schemas:",
          bulletPoints: [
            "ADD: Adds a new column to an existing table (e.g. ALTER TABLE sales ADD COLUMN date_of_purchase DATE;).",
            "DROP / REMOVE: Removes an existing column from a live table.",
            "RENAME: Renames an existing column or constraint name."
          ]
        },
        {
          heading: "3. Object Deletion & Renaming (DROP & RENAME)",
          text: "Managing object lifecycle in the database data dictionary:",
          bulletPoints: [
            "DROP Statement: Used for deleting a database object permanently (e.g. DROP TABLE customers;). You won't be able to roll back to its initial state or to the last COMMIT statement. Use DROP TABLE only when you are sure you aren't going to use the table anymore!",
            "RENAME Statement: Allows you to rename an object (e.g. RENAME TABLE customers TO customer_data;)."
          ]
        },
        {
          heading: "4. Fast Data Removal: The TRUNCATE Statement",
          text: "Instead of deleting an entire table through DROP, TRUNCATE removes all data rows and continues to have the table as an object in the database.",
          table: {
            headers: ["DDL Statement", "Action Performed", "Affects Schema Structure?", "Deletes Data Rows?"],
            rows: [
              ["CREATE TABLE", "Constructs a new table object with defined columns", "YES (Creates schema)", "NO"],
              ["ALTER TABLE", "Adds, modifies, or drops table columns/constraints", "YES (Alters schema)", "NO (Unless column dropped)"],
              ["DROP TABLE", "Destroys table object, structure, indexes & data", "YES (Destroys schema)", "YES (All data lost)"],
              ["RENAME TABLE", "Renames existing table object in data catalog", "YES (Renames schema)", "NO"],
              ["TRUNCATE TABLE", "Instantly wipes all data rows, resets counters", "NO (Retains schema)", "YES (All rows wiped)"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Complete DDL Workflow: CREATE, ALTER, RENAME, TRUNCATE",
          code: `-- 1. Create initial sales table
CREATE TABLE sales (
    purchase_number INT PRIMARY KEY
);

-- 2. Alter table to ADD a new column date_of_purchase
ALTER TABLE sales 
ADD COLUMN date_of_purchase DATE;

-- 3. RENAME table from customers to customer_data
RENAME TABLE customers TO customer_data;

-- 4. TRUNCATE table to wipe data rows while keeping table structure
TRUNCATE TABLE sales;

-- 5. DROP table to permanently destroy object
DROP TABLE customer_data;`,
          explanation: "ALTER TABLE ADD COLUMN adds new fields to live tables. TRUNCATE wipes data rows without destroying table schema."
        }
      ],
      practiceExercise: {
        title: "DDL Schema Modification Exercise",
        problem: "Write DDL statements to: 1. Create a table 'sales' with column purchase_number (INT PK). 2. Alter 'sales' to add column date_of_purchase (DATE). 3. Rename 'sales' table to 'sales_history'.",
        solutionCode: `-- 1. Create Table
CREATE TABLE sales (
    purchase_number INT PRIMARY KEY
);

-- 2. Alter Table
ALTER TABLE sales ADD COLUMN date_of_purchase DATE;

-- 3. Rename Table
RENAME TABLE sales TO sales_history;`
      },
      keyTakeaways: [
        "DDL statements (CREATE, ALTER, DROP, RENAME, TRUNCATE) modify structural schemas and auto-commit immediately.",
        "ALTER TABLE ADD COLUMN modifies live table structures without dropping existing table data.",
        "TRUNCATE TABLE wipes all data rows while keeping the table structure intact in the database."
      ]
    }
  },

  // Module 04
  {
    id: "sql-mod-4",
    title: "Module 04 — Constraints & Keys",
    description: "Master Primary Keys (Single & Composite), Foreign Keys (Referential Integrity & Cascade Actions), NOT NULL, UNIQUE, CHECK, and DEFAULT constraints.",
    completed: false,
    order: 4,
    published: true,
    readingMaterial: {
      introduction: "Database constraints enforce data integrity rules directly at the RDBMS storage layer. Application code can contain bugs, race conditions, or bypass validation during batch processes; relational database constraints act as the unbreachable last line of defense, ensuring that invalid, duplicate, or corrupted data is rejected before it can ever be written to disk.",
      objectives: [
        "Master Entity Integrity through single-column and composite Primary Keys",
        "Enforce Referential Integrity using Foreign Keys between parent and child tables",
        "Configure foreign key cascade rules: ON DELETE CASCADE, ON DELETE SET NULL, ON DELETE RESTRICT",
        "Apply NOT NULL constraints to mandate required data entry",
        "Enforce uniqueness across single and multi-column combinations using UNIQUE constraints",
        "Implement complex business logic validations using CHECK constraints",
        "Set automatic default values using DEFAULT constraints",
        "Safely add or drop constraints on live tables using ALTER TABLE"
      ],
      sections: [
        {
          heading: "1. The 6 Core Relational Database Constraints",
          text: "Every constraint type serves a distinct mathematical and operational purpose in database modeling:",
          bulletPoints: [
            "PRIMARY KEY (PK): Guarantees entity uniqueness for every row. Automatically creates a unique B-Tree index. Cannot contain NULLs.",
            "FOREIGN KEY (FK): References the Primary Key of a parent table to guarantee referential link integrity.",
            "UNIQUE: Guarantees all non-null values in a column (or set of columns) are distinct across the table.",
            "NOT NULL: Rejects attempts to insert missing or NULL values into a column.",
            "CHECK: Evaluates a boolean logical expression against column values before accepting an INSERT or UPDATE.",
            "DEFAULT: Automatically supplies a pre-configured default value when an INSERT statement omits a column value."
          ],
          table: {
            headers: ["Constraint", "Allows NULL?", "Allows Duplicates?", "Max per Table", "Primary Operational Purpose"],
            rows: [
              ["PRIMARY KEY", "NO", "NO", "Exactly 1", "Uniquely identifies table rows & anchors Foreign Keys"],
              ["UNIQUE", "YES (1 NULL allowed)", "NO", "Unlimited", "Prevents duplicate business values (e.g. Email, SSN, SKU)"],
              ["FOREIGN KEY", "YES", "YES", "Unlimited", "Enforces parent-child relationship integrity"],
              ["NOT NULL", "NO", "YES", "Unlimited", "Ensures essential data attributes are never omitted"],
              ["CHECK", "YES", "YES", "Unlimited", "Validates business rules (e.g., age >= 18, price > 0)"],
              ["DEFAULT", "YES", "YES", "Unlimited", "Fills missing input fields with static or dynamic values"]
            ]
          }
        },
        {
          heading: "2. Deep Dive: Composite Primary Keys vs Surrogate Keys",
          text: "A Primary Key can consist of a single auto-incrementing integer (Surrogate Key) or a combination of multiple columns (Composite Key). Composite primary keys are standard in junction tables representing Many-to-Many relationships.",
          bulletPoints: [
            "Single Surrogate Key: id BIGINT PRIMARY KEY (Independent auto-generated unique ID).",
            "Composite Primary Key: PRIMARY KEY (user_id, role_id) — Ensures a user can only be assigned a specific role once."
          ]
        },
        {
          heading: "3. Foreign Key Cascade Actions Decision Matrix",
          text: "When a record in a parent table is deleted or updated, Foreign Key cascade rules dictate what happens to linked child rows:",
          table: {
            headers: ["Cascade Action", "Behavior when Parent Row is Deleted", "Best Use Case"],
            rows: [
              ["ON DELETE RESTRICT", "Aborts parent deletion if any child rows exist (Default safety)", "Financial records, Orders linked to Customers"],
              ["ON DELETE CASCADE", "Automatically deletes all associated child records instantly", "Order items linked to Orders, Comments on Posts"],
              ["ON DELETE SET NULL", "Keeps child rows but sets foreign key column to NULL", "Employee supervisor assignments, Audit logs"],
              ["ON DELETE NO ACTION", "Defers constraint check until transaction completion", "Deferred constraint validation in complex transactions"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Comprehensive Relational HR Schema with All Constraint Types",
          code: `-- Parent Table: Departments
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE,
    budget DECIMAL(12, 2) CHECK (budget >= 1000.00)
);

-- Child Table: Employees with Foreign Key, CHECK, UNIQUE & Composite rules
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age >= 18 AND age <= 70),
    salary DECIMAL(10, 2) CHECK (salary > 0.00),
    employment_status VARCHAR(20) DEFAULT 'Active' CHECK (employment_status IN ('Active', 'On Leave', 'Terminated')),
    dept_id INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_employee_department 
        FOREIGN KEY (dept_id) 
        REFERENCES departments(dept_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);`,
          explanation: "ON DELETE RESTRICT on departments prevents deleting departments with active staff. ON DELETE CASCADE on employee_projects cleans up project assignments automatically when an employee record is deleted."
        }
      ],
      practiceExercise: {
        title: "E-Commerce Inventory & Order Constraints Challenge",
        problem: "Write DDL statements for an 'orders' table containing: order_id (INT PK), customer_id (INT FK referencing customers table with RESTRICT), order_total (DECIMAL 10,2 must be > 0), and status (VARCHAR 20 DEFAULT 'Pending' check IN ('Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled')). Also write a standalone ALTER TABLE command adding a CHECK constraint ensuring order_total is greater than 0.",
        solutionCode: `-- 1. Create Table with Constraints
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_total DECIMAL(10, 2) NOT NULL CHECK (order_total > 0.00),
    status VARCHAR(20) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled')),
    order_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE RESTRICT
);`
      },
      keyTakeaways: [
        "Primary Keys uniquely identify every row and automatically create a high-speed unique B-Tree index.",
        "Foreign Keys guarantee Referential Integrity by ensuring child records point to existing parent primary keys.",
        "Always use ON DELETE RESTRICT for critical financial records to prevent accidental deletion of parent rows."
      ]
    }
  },

  // Module 05
  {
    id: "sql-mod-5",
    title: "Module 05 — DML: INSERT, UPDATE & DELETE",
    description: "Master Data Manipulation Language (DML): Single and bulk INSERT INTO, INSERT INTO ... SELECT, UPDATE with WHERE safety, DELETE FROM, Soft Deletes, and UPSERT operations.",
    completed: false,
    order: 5,
    published: true,
    readingMaterial: {
      introduction: "Data Manipulation Language (DML) statements are used to add, update, and remove data rows inside relational tables. While DDL structural operations alter database metadata, DML statements modify data row contents within recoverable transaction boundaries.",
      objectives: [
        "Execute single-row and high-performance bulk multi-row INSERT statements",
        "Copy data between tables efficiently using INSERT INTO ... SELECT",
        "Safely update existing records using UPDATE with explicit WHERE filtering",
        "Prevent catastrophic full-table data corruption during UPDATE and DELETE commands",
        "Implement Soft Delete patterns (is_deleted, deleted_at) versus Hard Deletes",
        "Master UPSERT (INSERT ... ON CONFLICT DO UPDATE) operations for idempotent data pipelines"
      ],
      sections: [
        {
          heading: "1. DML Execution Patterns & Performance",
          text: "Optimizing DML operations directly impacts application API response times and throughput:",
          bulletPoints: [
            "Single-Row INSERT: Adds a single record. High network overhead if executed inside loops.",
            "Bulk Multi-Row INSERT: Inserts hundreds of comma-separated value tuples in a single query call, dramatically reducing network round-trips.",
            "INSERT INTO ... SELECT: Queries rows from a source table and inserts them directly into a target table without application round-trips.",
            "UPDATE with WHERE: Modifies specified columns for matching rows.",
            "DELETE with WHERE: Removes matching rows from a table."
          ],
          table: {
            headers: ["INSERT Method", "Network Round-Trips", "Transaction Overhead", "Execution Speed", "Ideal Use Case"],
            rows: [
              ["Single INSERT Loop", "1000 round-trips for 1000 rows", "High (1000 commits if auto-commit)", "Slow (~5.2 seconds)", "Single user input forms"],
              ["Bulk Multi-Row INSERT", "1 round-trip for 1000 rows", "Low (1 single transaction commit)", "Blazing Fast (~0.08 seconds)", "Batch processing, API ingestion"],
              ["INSERT INTO ... SELECT", "1 internal engine call", "Minimal (In-memory engine copy)", "Instantaneous (~0.02 seconds)", "Table cloning, data warehousing ETL"]
            ]
          }
        },
        {
          heading: "2. Architectural Pattern: Hard Delete vs Soft Delete",
          text: "In production enterprise systems, hard deleting rows with DELETE FROM can cause permanent data loss and break historical audit trails. Most modern platforms implement Soft Deletes.",
          table: {
            headers: ["Feature / Metric", "Hard Delete (DELETE FROM)", "Soft Delete (UPDATE is_deleted = TRUE)"],
            rows: [
              ["Data Recoverability", "IMPOSSIBLE (Permanent disk removal)", "EASY (Toggle flag back to FALSE)"],
              ["Audit Trail & Compliance", "Lost completely", "Preserved for historical analytics and compliance"],
              ["Query Complexity", "Simple SELECT * FROM table", "Requires WHERE is_deleted = FALSE on every query"],
              ["Disk Space Usage", "Frees up storage pages immediately", "Retains storage until archived to secondary storage"]
            ]
          }
        },
        {
          heading: "3. Advanced UPSERT (INSERT or UPDATE) Mechanics",
          text: "An UPSERT inserts a record if it does not exist, but updates the existing record if a Primary Key or UNIQUE conflict occurs. This pattern prevents primary key collision errors in automated data ingestion pipelines.",
          bulletPoints: [
            "PostgreSQL Syntax: INSERT INTO table VALUES (...) ON CONFLICT (key) DO UPDATE SET col = EXCLUDED.col;",
            "MySQL Syntax: INSERT INTO table VALUES (...) ON DUPLICATE KEY UPDATE col = VALUES(col);"
          ]
        }
      ],
      codeExamples: [
        {
          title: "Comprehensive DML: Bulk INSERT, UPDATE, Soft Delete & UPSERT Script",
          code: `-- 1. High-Performance Bulk Multi-Row INSERT
INSERT INTO products (product_id, product_name, unit_price, stock_quantity)
VALUES 
    (101, 'Mechanical Keyboard', 89.99, 45),
    (102, 'Ergonomic Mouse', 45.50, 120),
    (103, '4K UltraHD Monitor', 320.00, 15),
    (104, 'USB-C Charging Cable', 12.00, 200);

-- 2. Safe UPDATE with WHERE Clause
UPDATE products
SET unit_price = unit_price * 0.90,
    stock_quantity = stock_quantity + 10
WHERE unit_price > 50.00 AND stock_quantity < 50;

-- 3. Idempotent UPSERT (Insert or Update on Primary Key Conflict)
INSERT INTO products (product_id, product_name, unit_price, stock_quantity)
VALUES (101, 'Mechanical Keyboard RGB Edition', 99.99, 60)
ON CONFLICT (product_id) 
DO UPDATE SET 
    product_name = EXCLUDED.product_name,
    unit_price = EXCLUDED.unit_price,
    stock_quantity = EXCLUDED.stock_quantity;`,
          explanation: "EXCLUDED references the proposed values during an ON CONFLICT DO UPDATE operation."
        }
      ],
      practiceExercise: {
        title: "Bulk Insert & Price Adjustment Challenge",
        problem: "Write SQL DML queries to: 1. Bulk insert 2 new employees into an 'employees' table. 2. Give a 10% salary raise to all employees in department 'Engineering' who were hired before '2022-01-01'.",
        solutionCode: `-- 1. Bulk Insert
INSERT INTO employees (emp_id, first_name, last_name, department, salary, hire_date)
VALUES 
    (201, 'Alex', 'Rivera', 'Engineering', 85000.00, '2021-03-15'),
    (202, 'Samantha', 'Chen', 'Engineering', 92000.00, '2020-06-01');

-- 2. Targeted Salary Raise
UPDATE employees
SET salary = salary * 1.10
WHERE department = 'Engineering' AND hire_date < '2022-01-01';`
      },
      keyTakeaways: [
        "NEVER execute UPDATE or DELETE without a WHERE clause unless you explicitly intend to modify or wipe the entire table!",
        "Bulk multi-row INSERTs execute significantly faster than single-row INSERT loops by reducing network round-trips.",
        "Use the UPSERT pattern (ON CONFLICT DO UPDATE) to build idempotent data ingestion pipelines."
      ]
    }
  },

  // Module 06
  {
    id: "sql-mod-6",
    title: "Module 06 — SELECT Statement: Retrieving Data",
    description: "Master Data Query Language (DQL): Column projection, aliases (AS), computed fields, arithmetic expressions, string concatenation, and the 8-step SQL statement logical execution order.",
    completed: false,
    order: 6,
    published: true,
    readingMaterial: {
      introduction: "The SELECT statement is the foundational command of Data Query Language (DQL). It enables software engineers, database architects, and data analysts to extract, transform, project, and format structured data stored within database tables. Understanding how the relational engine parses, compiles, and evaluates SELECT queries is critical for writing clean, high-performance database code.",
      objectives: [
        "Master the 8-step logical query processing order of SQL clauses",
        "Understand Selective Column Projection versus SELECT * anti-patterns",
        "Assign clear column and table aliases using the AS keyword",
        "Perform mathematical calculations directly inside SELECT queries",
        "Concatenate text columns and handle NULL outputs gracefully",
        "Understand constant literal projections and column ordinal numbers"
      ],
      sections: [
        {
          heading: "1. The 8-Step Logical Query Processing Order",
          text: "Although developers write SELECT first in SQL statements, the database engine executes clauses in a vastly different logical order. Understanding this execution flow explains why column aliases created in SELECT cannot be referenced inside WHERE or GROUP BY clauses:",
          bulletPoints: [
            "1. FROM: Identifies target source tables, evaluates JOIN conditions, and constructs intermediate working tables.",
            "2. WHERE: Applies row-level boolean predicates to filter out non-matching rows before grouping.",
            "3. GROUP BY: Segregates remaining rows into distinct categorical summary buckets based on grouping keys.",
            "4. HAVING: Filters aggregate group buckets after mathematical calculations are performed.",
            "5. SELECT: Evaluates expression projections, applies column aliases, and formats output data streams.",
            "6. DISTINCT: Scans result rows and removes duplicate tuple combinations.",
            "7. ORDER BY: Sorts the final result rows in ascending or descending sequence.",
            "8. LIMIT / OFFSET: Restricts the output row count delivered to the requesting client application."
          ],
          table: {
            headers: ["Execution Step", "Clause", "Logical Function", "Can Reference SELECT Aliases?"],
            rows: [
              ["1", "FROM / JOIN", "Gathers source tables and resolves join keys", "NO"],
              ["2", "WHERE", "Filters raw data rows using boolean predicates", "NO"],
              ["3", "GROUP BY", "Groups rows into categorical buckets", "NO"],
              ["4", "HAVING", "Filters aggregate group statistics", "NO"],
              ["5", "SELECT", "Projects columns and evaluates expressions", "N/A (Defines Aliases)"],
              ["6", "DISTINCT", "Removes duplicate output row tuples", "YES"],
              ["7", "ORDER BY", "Sorts final result set rows", "YES"],
              ["8", "LIMIT / OFFSET", "Restricts total rows returned to client", "YES"]
            ]
          }
        },
        {
          heading: "2. Column Projection vs SELECT * Anti-Pattern",
          text: "Using SELECT * instructs the database engine to fetch every single column from physical disk storage. In production enterprise environments, SELECT * is considered a severe anti-pattern because it consumes excess disk I/O, inflates network bandwidth utilization, degrades memory cache efficiency, and breaks backend application code when table schemas evolve.",
          bulletPoints: [
            "Network Bandwidth Overhead: Transferring unnecessary BLOB, CLOB, or text columns degrades API latency.",
            "Index Only Scans: Explicit column projection enables the engine to use Index-Only Scans without touching table heaps.",
            "Schema Maintenance: Hardcoded SELECT * queries break application code when columns are added, renamed, or dropped."
          ]
        },
        {
          heading: "3. Computed Expressions, String Manipulation & Column Aliases",
          text: "SELECT statements are not limited to fetching raw columns. Developers can perform dynamic mathematical calculations, string concatenations, and conditional formatting directly within query projections.",
          bulletPoints: [
            "Arithmetic Calculations: Use +, -, *, /, and % directly on numeric columns (e.g. salary * 1.10 for a 10% raise).",
            "String Concatenation: Combine text fields using CONCAT(first_name, ' ', last_name) or the standard || operator.",
            "Column Aliases (AS): Assign human-readable or API-friendly names to projected expressions."
          ]
        },
        {
          heading: "4. Query Evaluation & Memory Management",
          text: "When projecting columns, modern database optimizers analyze column data types and allocate memory buffers accordingly. Keeping SELECT projections tight ensures lower RAM consumption during sorting and join operations.",
          bulletPoints: [
            "Avoid projection of unneeded columns during multi-table JOIN operations.",
            "Use clear, standardized camelCase or snake_case column aliases to match client API schemas."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Projection, Column Aliases & Computed Financial Metrics",
          code: `-- Calculate employee compensation metrics with dynamic calculations and aliases
SELECT 
    employee_id,
    CONCAT(first_name, ' ', last_name) AS full_name,
    salary AS monthly_salary,
    salary * 12 AS annual_gross_salary,
    (salary * 12) * 0.15 AS estimated_tax_deduction,
    (salary * 12) * 0.85 AS net_annual_take_home
FROM employees
WHERE is_active = TRUE;`,
          explanation: "Computed fields calculate dynamic values on-the-fly without altering underlying table data stored on disk."
        },
        {
          title: "E-Commerce Order Summary with Expression Projections",
          code: `-- Dynamic pricing calculation with discount and tax application
SELECT 
    order_id,
    item_name,
    unit_price,
    quantity,
    (unit_price * quantity) AS subtotal,
    (unit_price * quantity) * discount_rate AS discount_amount,
    ((unit_price * quantity) - ((unit_price * quantity) * discount_rate)) * 1.08 AS grand_total_with_tax
FROM order_items
WHERE order_id = 10482;`,
          explanation: "Expressions inside SELECT clauses compute line-item totals, discount subtractions, and tax calculations in real time."
        }
      ],
      practiceExercise: {
        title: "Product Inventory Financial Calculation Challenge",
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
        "Avoid using SELECT * in production code—explicitly specify required columns to optimize network and memory performance.",
        "The RDBMS evaluates FROM before SELECT, meaning column aliases created in SELECT cannot be referenced inside WHERE clauses.",
        "Column aliases assigned with AS make API response payloads clean, maintainable, and readable."
      ]
    }
  },

  // Module 07
  {
    id: "sql-mod-7",
    title: "Module 07 — Filtering Data with WHERE & Operators",
    description: "Filter query results using comparison operators, logical operators (AND, OR, NOT), IN, BETWEEN, LIKE pattern matching, and NULL handling.",
    completed: false,
    order: 7,
    published: true,
    readingMaterial: {
      introduction: "The WHERE clause restricts query output to rows that satisfy explicit boolean filtering criteria. Mastering WHERE clause operators allows data analysts and software engineers to filter massive multi-million row datasets down to exact, actionable insights while utilizing B-Tree index scans for maximum performance.",
      objectives: [
        "Use comparison operators (=, <>, !=, <, >, <=, >=)",
        "Combine boolean logic using AND, OR, and NOT with explicit parenthetical precedence",
        "Filter numeric and date ranges using BETWEEN ... AND ...",
        "Match against explicit value lists using the IN operator",
        "Perform pattern matching using LIKE & ILIKE wildcards (% and _)",
        "Correctly test for missing values using IS NULL and IS NOT NULL under Three-Valued Logic"
      ],
      sections: [
        {
          heading: "1. SQL Filtering Operators Reference Matrix",
          text: "Filtering operators evaluate boolean expressions to determine which rows are returned in the result set:",
          table: {
            headers: ["Operator", "Syntax Example", "Description & Behavior", "Index Friendly?"],
            rows: [
              ["BETWEEN", "salary BETWEEN 40000 AND 80000", "Inclusive range test (includes lower and upper bounds)", "YES (B-Tree Index)"],
              ["IN", "department IN ('HR', 'IT', 'Sales')", "Matches any value matching an element in the explicit list", "YES"],
              ["LIKE", "email LIKE '%@gmail.com'", "Pattern match: % matches 0+ characters, _ matches 1 character", "Partial (Prefix 'abc%' only)"],
              ["ILIKE", "name ILIKE 'john%'", "Case-insensitive pattern match (PostgreSQL specific)", "Requires expression index"],
              ["IS NULL", "phone_number IS NULL", "Tests if a column contains a missing NULL value", "YES"],
              ["AND / OR", "(age >= 21) AND (status = 'Active')", "Combines boolean expressions with explicit operator precedence", "YES"]
            ]
          }
        },
        {
          heading: "2. Three-Valued Logic (3VL) & NULL Handling Rules",
          text: "In SQL, comparing anything to NULL using standard equality operators (= NULL or != NULL) yields UNKNOWN, which evaluates as FALSE in WHERE clauses. You MUST use IS NULL or IS NOT NULL.",
          bulletPoints: [
            "WRONG: WHERE phone_number = NULL (Evaluates to UNKNOWN, returning zero rows!)",
            "CORRECT: WHERE phone_number IS NULL",
            "NOT IN Trap: If an IN list contains a NULL value (e.g. status NOT IN ('Active', NULL)), the query returns zero rows!",
            "COALESCE Utility: Use COALESCE(phone_number, 'N/A') to substitute missing NULL values with fallback text."
          ]
        },
        {
          heading: "3. Operator Precedence & Parenthetical Scoping",
          text: "SQL evaluates logical AND operators before logical OR operators ($AND > OR$). Neglecting to wrap OR conditions inside explicit parentheses causes catastrophic logic bugs where security or status checks are bypassed.",
          bulletPoints: [
            "WRONG: WHERE department = 'IT' OR department = 'Sales' AND status = 'Active' (Evaluates IT department regardless of active status!)",
            "CORRECT: WHERE (department = 'IT' OR department = 'Sales') AND status = 'Active'"
          ]
        },
        {
          heading: "4. Wildcard Pattern Matching Mechanics (% vs _)",
          text: "The LIKE clause enables string pattern searching using standard SQL wildcards:",
          bulletPoints: [
            "Percent Wildcard (%): Matches zero, one, or multiple arbitrary characters (e.g., 'A%' matches 'A', 'Alex', 'Amanda').",
            "Underscore Wildcard (_): Matches exactly one single character (e.g., '_cat' matches 'cat', 'hat', but not 'flat').",
            "Escape Characters: To match literal '%' or '_' characters, specify an ESCAPE clause (e.g. LIKE '%\\_%' ESCAPE '\\')."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Enterprise Risk & Compliance Filtering Query",
          code: `-- Retrieve active employees hired after 2021 in IT or Finance earning between $60k and $120k with verified email
SELECT employee_id, first_name, department, salary, hire_date
FROM employees
WHERE (department IN ('IT', 'Finance'))
  AND salary BETWEEN 60000.00 AND 120000.00
  AND hire_date >= '2021-01-01'
  AND email IS NOT NULL;`,
          explanation: "Parentheses ensure that logical OR/IN criteria are evaluated prior to AND conditions."
        },
        {
          title: "Pattern & Wildcard Search Query for Customer Accounts",
          code: `-- Find users with corporate domain emails starting with 'admin' or 'tech' created in 2023
SELECT user_id, username, email, created_at
FROM users
WHERE (email LIKE 'admin_%' OR email LIKE 'tech_%')
  AND email LIKE '%@enterprise.com'
  AND created_at BETWEEN '2023-01-01' AND '2023-12-31';`,
          explanation: "Combines wildcard prefix searching with date range filtering to isolate specific accounts."
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
        "Always wrap OR conditions in parentheses when combining them with AND conditions to enforce proper precedence."
      ]
    }
  },

  // Module 08
  {
    id: "sql-mod-8",
    title: "Module 08 — DISTINCT, ORDER BY & LIMIT",
    description: "Eliminate duplicate rows with DISTINCT, sort query results using ORDER BY (ASC/DESC), and implement web pagination with LIMIT and OFFSET.",
    completed: false,
    order: 8,
    published: true,
    readingMaterial: {
      introduction: "Presenting query results effectively requires sorting, deduplication, and pagination. The DISTINCT keyword removes redundant duplicate rows, ORDER BY sorts data in ascending or descending sequence, and LIMIT/OFFSET powers fast, scalable web application pagination.",
      objectives: [
        "Eliminate duplicate result set rows using SELECT DISTINCT",
        "Sort data ascending (ASC) and descending (DESC) across single and multiple columns",
        "Sort outputs using expressions, column aliases, or NULL position overrides (NULLS FIRST / LAST)",
        "Restrict result row count using LIMIT (or TOP in SQL Server)",
        "Implement multi-page web application pagination using offset math (LIMIT n OFFSET m)",
        "Understand performance considerations when sorting unindexed data"
      ],
      sections: [
        {
          heading: "1. Deduplication Mechanics with SELECT DISTINCT",
          text: "SELECT DISTINCT scans output rows and removes identical tuples across all projected columns. It is essential to understand that DISTINCT evaluates the combination of ALL projected fields in the SELECT clause:",
          bulletPoints: [
            "Single Column Deduplication: SELECT DISTINCT department FROM employees returns a list of unique departments.",
            "Multi-Column Deduplication: SELECT DISTINCT department, status FROM employees returns unique department-status pairs.",
            "Performance Overhead: DISTINCT requires the database engine to perform sorting or hash deduplication in RAM."
          ]
        },
        {
          heading: "2. Result Set Sorting with ORDER BY",
          text: "Without an explicit ORDER BY clause, relational databases return rows in arbitrary, non-deterministic order. Adding ORDER BY enforces strict sorting order:",
          bulletPoints: [
            "Ascending (ASC): Default sort order (A-Z, 0-9, oldest to newest dates).",
            "Descending (DESC): Reverse sort order (Z-A, 9-0, newest to oldest dates).",
            "Multi-Column Sorts: ORDER BY department ASC, salary DESC sorts primarily by department, then breaks ties by salary.",
            "NULL Positioning: Control where missing values appear using ORDER BY salary DESC NULLS LAST."
          ],
          table: {
            headers: ["Sort Option", "Syntax Example", "Default Behavior", "Custom Override"],
            rows: [
              ["Ascending", "ORDER BY price ASC", "Lowest values first", "Default if ASC/DESC omitted"],
              ["Descending", "ORDER BY price DESC", "Highest values first", "Must specify DESC"],
              ["Multi-Column", "ORDER BY dept ASC, salary DESC", "Primary sort ASC, secondary DESC", "Evaluates left to right"],
              ["Null Handling", "ORDER BY commission NULLS LAST", "DBMS dependent", "Explicit NULLS FIRST / LAST"]
            ]
          }
        },
        {
          heading: "3. Web Pagination Mechanics (LIMIT & OFFSET)",
          text: "Web applications cannot display millions of records on a single web page. The LIMIT clause restricts output row count, while OFFSET skips a specified number of initial rows:",
          bulletPoints: [
            "Page Size (LIMIT n): Defines how many items appear on each page (e.g. LIMIT 20).",
            "Offset Math Formula: OFFSET = (Page Number - 1) * Page Size.",
            "Page 1: LIMIT 20 OFFSET 0",
            "Page 2: LIMIT 20 OFFSET 20",
            "Page 3: LIMIT 20 OFFSET 40",
            "Large Offset Penalty: Deep pagination (e.g. OFFSET 1000000) causes slow query performance because the engine must read and discard 1 million rows before returning results."
          ]
        },
        {
          heading: "4. Deterministic Queries & Top-N Patterns",
          text: "To create deterministic paginated APIs, queries MUST include unique sort keys in the ORDER BY clause (e.g. ORDER BY created_at DESC, user_id ASC). Without a tie-breaker, pagination can return duplicate rows across page breaks.",
          bulletPoints: [
            "Always include a Primary Key in ORDER BY tie-breakers for paginated APIs."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Deduplication & Multi-Column Sorting Query",
          code: `-- 1. Fetch unique departments
SELECT DISTINCT department FROM employees;

-- 2. Fetch top 5 highest paid software engineers with explicit NULL position overrides
SELECT employee_id, first_name, salary, bonus
FROM employees
WHERE department = 'Engineering'
ORDER BY salary DESC NULLS LAST, first_name ASC;`,
          explanation: "Ensures highest earners are listed first, breaking ties alphabetically by first name while pushing NULL bonuses to the bottom."
        },
        {
          title: "High-Performance Web API Pagination Query",
          code: `-- Web API Pagination for Page 3 (Page Size = 10 items)
SELECT product_id, product_name, category, unit_price
FROM products
WHERE is_available = TRUE
ORDER BY category ASC, product_id ASC
LIMIT 10 OFFSET 20;`,
          explanation: "Calculates OFFSET = (3 - 1) * 10 = 20, returning rows 21 through 30 deterministically."
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
        "Always pair LIMIT/OFFSET queries with explicit ORDER BY clauses to guarantee deterministic, consistent ordering.",
        "ORDER BY is evaluated near the end of query processing, allowing reference to column aliases defined in SELECT."
      ]
    }
  },

  // Module 09
  {
    id: "sql-mod-9",
    title: "Module 09 — Aggregate Functions, GROUP BY & HAVING",
    description: "Perform data analytics using aggregate functions (COUNT, SUM, AVG, MIN, MAX), group rows with GROUP BY, and filter aggregates with HAVING.",
    completed: false,
    order: 9,
    published: true,
    readingMaterial: {
      introduction: "Data aggregation transforms raw, high-volume transactional data into actionable high-level business intelligence. SQL aggregate functions calculate mathematical summaries over sets of rows, while GROUP BY categorizes summary statistics into analytical sub-groups and HAVING filters aggregated group metrics.",
      objectives: [
        "Master the 5 standard aggregate functions: COUNT, SUM, AVG, MIN, and MAX",
        "Understand the critical differences between COUNT(*), COUNT(column_name), and COUNT(DISTINCT column_name)",
        "Group records by one or multiple categorical columns using GROUP BY",
        "Filter aggregated group metrics using the HAVING clause",
        "Distinguish between WHERE (row filter prior to grouping) and HAVING (group filter after aggregation)",
        "Understand multidimensional rollup reporting concepts"
      ],
      sections: [
        {
          heading: "1. Aggregate Functions Summary Matrix & Syntax Rules",
          text: "Aggregate functions compute summary values across multiple rows. Note that all aggregate functions ignore NULL values except for COUNT(*):",
          table: {
            headers: ["Function", "Description", "Handles NULL Values?", "Common Production Example"],
            rows: [
              ["COUNT(*)", "Counts total row count in group regardless of content", "Includes NULL rows", "SELECT COUNT(*) FROM orders;"],
              ["COUNT(col)", "Counts total non-NULL entries in specific column", "Ignores NULLs", "SELECT COUNT(phone_number) FROM users;"],
              ["COUNT(DISTINCT col)", "Counts unique non-NULL values in column", "Ignores NULLs", "SELECT COUNT(DISTINCT customer_id) FROM sales;"],
              ["SUM(col)", "Calculates mathematical total of numeric column", "Ignores NULLs", "SELECT SUM(total_amount) FROM invoices;"],
              ["AVG(col)", "Calculates arithmetic mean value", "Ignores NULLs", "SELECT AVG(salary) FROM employees;"],
              ["MIN(col) / MAX(col)", "Returns lowest or highest value in set", "Ignores NULLs", "SELECT MIN(price), MAX(price) FROM products;"]
            ]
          },
          bulletPoints: [
            "Syntax Rule: No whitespace is allowed between the aggregate function name and opening parenthesis (e.g. COUNT() is valid, COUNT () causes syntax error)."
          ]
        },
        {
          heading: "2. Categorical Grouping with GROUP BY",
          text: "The GROUP BY clause collapses multiple data rows sharing identical key values into single summary rows. You can group by a single column or multiple composite columns:",
          bulletPoints: [
            "Single Column Grouping: GROUP BY department calculates metrics per department.",
            "Composite Multi-Column Grouping: GROUP BY department, job_title calculates metrics for every job title within each department.",
            "Golden SQL Rule: Every non-aggregated column listed in the SELECT projection MUST appear in the GROUP BY clause!"
          ]
        },
        {
          heading: "3. Crucial Distinctions: WHERE vs HAVING",
          text: "A frequent point of confusion for SQL developers is knowing when to filter with WHERE versus HAVING:",
          bulletPoints: [
            "WHERE Clause: Evaluated BEFORE GROUP BY. Filters raw individual rows from the source table.",
            "HAVING Clause: Evaluated AFTER GROUP BY. Filters aggregated group summaries based on calculated aggregate conditions (e.g. HAVING SUM(amount) > 10000).",
            "Rule of Thumb: If a condition involves aggregate functions (SUM, AVG, COUNT), it MUST go in HAVING!"
          ]
        },
        {
          heading: "4. Intro to Multidimensional Reporting (ROLLUP & CUBE)",
          text: "Enterprise reporting requires subtotals and grand totals alongside standard grouped metrics. Modern SQL engines provide ROLLUP and CUBE extensions to calculate super-aggregate rows in a single query pass.",
          bulletPoints: [
            "GROUP BY ROLLUP(region, department): Generates regional subtotals and a grand total row.",
            "GROUP BY CUBE(region, department): Generates all possible subtotal combinations across all dimensions."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Departmental Compensation & Headcount Analytics",
          code: `-- Calculate average salary and total payroll per department for active staff with > 3 employees and avg salary > 50,000
SELECT 
    department,
    COUNT(employee_id) AS total_staff,
    COUNT(commission) AS staff_with_commission,
    ROUND(AVG(salary), 2) AS average_salary,
    SUM(salary) AS total_payroll
FROM employees
WHERE is_active = TRUE
GROUP BY department
HAVING COUNT(employee_id) > 3 AND AVG(salary) > 50000.00
ORDER BY average_salary DESC;`,
          explanation: "WHERE filters active staff FIRST, GROUP BY groups remaining rows by department, and HAVING filters calculated aggregate metrics."
        },
        {
          title: "Customer Purchasing Behavior & Revenue Analysis",
          code: `-- High-value customer analysis with order counting and total revenue filtering
SELECT 
    customer_id,
    COUNT(order_id) AS total_orders_placed,
    MIN(order_date) AS first_order_date,
    MAX(order_date) AS most_recent_order_date,
    ROUND(SUM(order_total), 2) AS lifetime_spend
FROM orders
WHERE status = 'Completed'
GROUP BY customer_id
HAVING COUNT(order_id) >= 5 AND SUM(order_total) >= 1000.00
ORDER BY lifetime_spend DESC;`,
          explanation: "Summarizes order activity per customer, calculating transaction counts, lifetime spend, and date ranges."
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
        "COUNT(*) includes NULL rows, whereas COUNT(column_name) counts only non-NULL entries."
      ]
    }
  },

  // Modules 10 to 15 (From massive script)
  ...massiveScript
];

// 1. Update server/data/db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  sqlCourseInDb.modules = fullTextbookModules;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Successfully updated server/data/db.json with FULL TEXTBOOK 15 modules!');
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
    const newModulesJson = JSON.stringify(fullTextbookModules, null, 6);
    const formattedModulesJs = newModulesJson.slice(1, -1);
    
    const newSqlBlock = headerPart + '\n' + formattedModulesJs + '\n    ],\n  },\n  {\n    id: "';
    
    content = beforeSql + newSqlBlock + afterSql;
    fs.writeFileSync(coursesDataPath, content, 'utf8');
    console.log('Successfully updated src/data/coursesData.js with FULL TEXTBOOK 15 modules!');
  }
}

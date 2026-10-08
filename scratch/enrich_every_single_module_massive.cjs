const fs = require('fs');

const massive15Modules = [
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
  {
    id: "sql-mod-4",
    title: "Module 04 — Constraints & Keys",
    description: "Master Primary Keys, Foreign Keys, Referential Integrity, ON DELETE CASCADE, Data Integrity categories (Entity, Domain, Referential, User-Defined), NOT NULL, UNIQUE, CHECK, and DEFAULT constraints.",
    completed: false,
    order: 4,
    published: true,
    readingMaterial: {
      introduction: "Database constraints enforce data integrity rules directly at the RDBMS storage layer. Constraints guarantee that inserted or updated data remains valid, accurate, and consistent across all application operations.",
      objectives: [
        "Master Data Integrity categories: Entity Integrity, Domain Integrity, Referential Integrity, User-Defined Integrity",
        "Master Primary Keys (PK) for entity uniqueness",
        "Master Foreign Keys (FK) for referential integrity between parent and child tables",
        "Understand ON DELETE CASCADE behavior on Foreign Keys",
        "Apply NOT NULL, UNIQUE, CHECK, and DEFAULT constraints"
      ],
      sections: [
        {
          heading: "1. 4 Categories of Data Integrity",
          text: "Relational database systems enforce 4 distinct categories of data integrity:",
          bulletPoints: [
            "Entity Integrity: Ensures there are no duplicate rows in a table (enforced via Primary Keys).",
            "Domain Integrity: Enforces valid entries for a given column by restricting type, format, or value range (enforced via Data Types, CHECK constraints, NOT NULL).",
            "Referential Integrity: Ensures rows cannot be deleted or orphaned if referenced by child table records (enforced via Foreign Keys).",
            "User-Defined Integrity: Enforces specific business domain rules that do not fall into entity, domain, or referential integrity."
          ]
        },
        {
          heading: "2. Foreign Key Constraints & ON DELETE CASCADE",
          text: "A Foreign Key links a column in a child table to a Primary Key in a parent table. The ON DELETE CASCADE clause specifies referential cleanup behavior:",
          bulletPoints: [
            "ON DELETE CASCADE: If a specific value from the parent table's primary key has been deleted, all the records from the child table referring to this value will be removed as well automatically!",
            "Example: If Customer ID 4 is deleted from Customers table, all sales records in Sales table belonging to Customer 4 are automatically deleted."
          ],
          table: {
            headers: ["Constraint", "Allows NULL?", "Allows Duplicates?", "Primary Purpose"],
            rows: [
              ["PRIMARY KEY", "NO", "NO", "Uniquely identifies rows in a table (Entity Integrity)"],
              ["FOREIGN KEY", "YES", "YES", "Links child table rows to parent table primary key (Referential Integrity)"],
              ["UNIQUE", "YES (1 NULL)", "NO", "Guarantees all column values are distinct"],
              ["NOT NULL", "NO", "YES", "Ensures mandatory data presence (Domain Integrity)"],
              ["CHECK", "YES", "YES", "Validates range/domain conditions (Domain Integrity)"]
            ]
          }
        },
        {
          heading: "3. Primary Key & Unique Constraints",
          text: "Primary keys and Unique keys ensure distinct identification of table rows:",
          bulletPoints: [
            "PRIMARY KEY: Uniquely identifies each row/record in a database table. Cannot be NULL.",
            "UNIQUE KEY: Ensures that all the values in a column are different.",
            "DEFAULT Constraint: Provides a default value for a column when none is specified.",
            "CHECK Constraint: Ensures that all values in a column satisfy certain conditions."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Foreign Key Definition with ON DELETE CASCADE",
          code: `-- Parent Table: Customers
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Child Table: Sales with Foreign Key and ON DELETE CASCADE
CREATE TABLE sales (
    purchase_number INT PRIMARY KEY,
    date_of_purchase DATE NOT NULL,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) 
        REFERENCES customers(customer_id) 
        ON DELETE CASCADE
);`,
          explanation: "ON DELETE CASCADE guarantees that deleting a customer automatically cleans up all associated sales records."
        }
      ],
      practiceExercise: {
        title: "Foreign Key Cascade Challenge",
        problem: "Create a 'sales' table with purchase_number (INT PK), customer_id (INT FK referencing customers table with ON DELETE CASCADE).",
        solutionCode: `CREATE TABLE sales (
    purchase_number INT PRIMARY KEY,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);`
      },
      keyTakeaways: [
        "Entity Integrity ensures no duplicate rows exist; Referential Integrity ensures child records reference existing parent keys.",
        "Primary Keys uniquely identify every row in a table and cannot contain NULL values.",
        "Foreign Keys enforce Referential Integrity between parent and child tables.",
        "ON DELETE CASCADE automatically deletes child records when their parent row is deleted."
      ]
    }
  },
  {
    id: "sql-mod-5",
    title: "Module 05 — DML: INSERT, UPDATE & DELETE",
    description: "Master Data Manipulation Language (DML): SELECT, INSERT INTO ... VALUES, INSERT INTO ... SELECT, UPDATE ... SET ... WHERE, DELETE FROM ... WHERE, and the ultimate DROP vs TRUNCATE vs DELETE comparison.",
    completed: false,
    order: 5,
    published: true,
    readingMaterial: {
      introduction: "Data Manipulation Language (DML) statements allow us to manipulate and manage the actual data rows stored inside database tables. The 4 core DML statements are SELECT, INSERT, UPDATE, and DELETE.",
      objectives: [
        "Master INSERT INTO ... VALUES to insert data into tables",
        "Copy data between tables using INSERT INTO ... SELECT",
        "Renew existing data values using UPDATE ... SET ... WHERE",
        "Remove records using DELETE FROM ... WHERE",
        "Master the ultimate comparison: DROP vs TRUNCATE vs DELETE (Performance, Logging, Auto-Increment counter resetting)"
      ],
      sections: [
        {
          heading: "1. Core DML Statements Syntax Overview",
          text: "DML statements alter data records inside tables:",
          bulletPoints: [
            "SELECT ... FROM ...: Used to query and retrieve data from database objects like tables.",
            "INSERT INTO ... VALUES ...: Used to insert data into tables (e.g. INSERT INTO sales (purchase_number, date_of_purchase) VALUES (1, '2017-10-11');).",
            "INSERT INTO ... SELECT ...: Inserts data query results from one table directly into a new target table.",
            "UPDATE ... SET ... WHERE ...: Allows you to renew existing data of your tables. WARNING: If you don't provide a WHERE condition, ALL rows of the table will be updated!",
            "DELETE FROM ... WHERE ...: Removes specific records row-by-row from a table."
          ]
        },
        {
          heading: "2. Ultimate Comparison: DROP vs TRUNCATE vs DELETE",
          text: "Understanding the exact architectural differences between DROP, TRUNCATE, and DELETE is one of the most vital concepts in database administration:",
          table: {
            headers: ["Metric / Feature", "DROP TABLE", "TRUNCATE TABLE", "DELETE FROM"],
            rows: [
              ["What is Deleted?", "Deletes Data + Table Structure + Indexes + Constraints", "Deletes ALL Data rows (Keeps structure)", "Deletes specific or all Data rows (Keeps structure)"],
              ["SQL Sub-Language", "DDL (Data Definition Language)", "DDL (Data Definition Language)", "DML (Data Manipulation Language)"],
              ["WHERE Clause Allowed?", "NO", "NO", "YES (Can specify precisely what to remove)"],
              ["Execution Approach & Speed", "Instant (Removes catalog object)", "Extremely Fast (O(1) page deallocation)", "Slower (Removes records row by row)"],
              ["Auto-Increment Counter", "N/A (Table destroyed)", "RESETS auto-increment counter back to 1!", "Does NOT reset counter (Next insert gets 11, 12...)"],
              ["Rollback Capability", "Cannot be undone / rolled back", "Cannot be undone in most engines", "Can be undone using TCL ROLLBACK (within transaction)"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Complete DML & Auto-Increment Counter Reset Demonstration",
          code: `-- 1. Insert Data into Sales
INSERT INTO sales (purchase_number, date_of_purchase) 
VALUES (1, '2017-10-11'), (2, '2017-10-27');

-- 2. Insert Data INTO a New Table from existing table
INSERT INTO sales_archive (purchase_number, date_of_purchase)
SELECT purchase_number, date_of_purchase 
FROM sales 
WHERE date_of_purchase < '2017-10-20';

-- 3. UPDATE Statement with WHERE clause
UPDATE sales 
SET date_of_purchase = '2017-12-12' 
WHERE purchase_number = 1;

-- 4. DELETE specific row
DELETE FROM sales WHERE purchase_number = 1;

-- 5. TRUNCATE resets auto-increment values back to 1
TRUNCATE TABLE sales;`,
          explanation: "UPDATE without WHERE alters all table rows. TRUNCATE resets auto-increment counters back to 1, whereas DELETE does not."
        }
      ],
      practiceExercise: {
        title: "DML Operations & Table Cleanup Challenge",
        problem: "Write SQL DML statements to: 1. Insert purchase_number = 1 and date_of_purchase = '2017-10-11' into table 'sales'. 2. Update date_of_purchase to '2017-12-12' for purchase_number = 1. 3. Delete record where purchase_number = 1.",
        solutionCode: `-- 1. INSERT
INSERT INTO sales (purchase_number, date_of_purchase) VALUES (1, '2017-10-11');

-- 2. UPDATE
UPDATE sales SET date_of_purchase = '2017-12-12' WHERE purchase_number = 1;

-- 3. DELETE
DELETE FROM sales WHERE purchase_number = 1;`
      },
      keyTakeaways: [
        "If you omit the WHERE clause in an UPDATE or DELETE statement, ALL rows in the table will be updated or deleted!",
        "TRUNCATE delivers output much quicker than DELETE because it deallocates storage pages instead of removing records row by row.",
        "TRUNCATE resets auto-increment values back to 1; DELETE does NOT reset auto-increment counters."
      ]
    }
  },
  {
    id: "sql-mod-6",
    title: "Module 06 — SELECT Statement: Retrieving Data",
    description: "Master Data Query Language (DQL): SELECT ... FROM ..., wildcard * operator, extracting data portions from large datasets, and column projection.",
    completed: false,
    order: 6,
    published: true,
    readingMaterial: {
      introduction: "The SELECT statement allows us to query and extract data from database objects like tables. In production systems containing millions of rows, SELECT enables you to extract precisely the fraction of data required.",
      objectives: [
        "Master SELECT column_1, column_2 FROM table_name syntax",
        "Understand the wildcard character * (SELECT * FROM table_name)",
        "Understand why extracting specific columns is essential for large multi-million row datasets",
        "Pair SELECT with FROM when extracting information from relational tables"
      ],
      sections: [
        {
          heading: "1. The SELECT ... FROM ... Syntax",
          text: "When extracting information from a database, SELECT always goes with FROM:",
          bulletPoints: [
            "Syntax: SELECT column_1, column_2, ..., column_n FROM table_name;",
            "Wildcard *: SELECT * FROM employees; — The asterisk (*) is a wildcard character meaning 'all' and 'everything'.",
            "Extracting Data Portions: Imagine a table with 2 million rows of data. SELECT allows you to extract only a specific portion of the table satisfying given criteria, saving memory and bandwidth."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Column Projection vs Wildcard SELECT Query",
          code: `-- 1. Extract specific columns (first_name, last_name)
SELECT first_name, last_name 
FROM employees;

-- 2. Extract all columns using wildcard *
SELECT * 
FROM employees;`,
          explanation: "Explicit column selection reduces network overhead compared to SELECT * when querying large tables."
        }
      ],
      practiceExercise: {
        title: "Basic SELECT Query Exercise",
        problem: "Write a SELECT query to retrieve first_name and last_name from table 'employees'.",
        solutionCode: `SELECT first_name, last_name FROM employees;`
      },
      keyTakeaways: [
        "The SELECT statement allows you to extract a fraction of an entire data set.",
        "The asterisk (*) wildcard character represents 'all' and 'everything'.",
        "When extracting information, SELECT is always paired with FROM."
      ]
    }
  },
  {
    id: "sql-mod-7",
    title: "Module 07 — Filtering Data with WHERE & Operators",
    description: "Master data filtering using WHERE, AND, OR, Operator Precedence (AND > OR), Wildcards (% and _), BETWEEN ... AND ..., NOT BETWEEN, IS NULL, IS NOT NULL, and Comparison Operators.",
    completed: false,
    order: 7,
    published: true,
    readingMaterial: {
      introduction: "The WHERE clause allows us to set conditions upon which we specify what part of the data we want to retrieve from the database. Combining WHERE with logical and comparison operators allows exact dataset filtering.",
      objectives: [
        "Filter data rows using WHERE conditions",
        "Combine conditions using AND (both conditions required) and OR (either condition required)",
        "Master Logical Operator Precedence: AND > OR (AND is ALWAYS applied first!)",
        "Master Wildcard Characters: % (sequence of characters) and _ (single character)",
        "Filter continuous intervals using BETWEEN ... AND ... (endpoints included!) and NOT BETWEEN",
        "Filter missing values using IS NULL and IS NOT NULL",
        "Use comparison operators (=, >, >=, <, <=, <>, !=)"
      ],
      sections: [
        {
          heading: "1. Logical Operators & Operator Precedence (AND > OR)",
          text: "In SQL, linking operators allow combining conditions in the WHERE clause:",
          bulletPoints: [
            "AND: Binds SQL to meet BOTH conditions enlisted in the WHERE clause simultaneously. Narrows query output.",
            "OR: Binds SQL to meet EITHER condition. Broadens query output.",
            "OPERATOR PRECEDENCE (AND > OR): An SQL rule stating that in query execution, the operator AND is ALWAYS applied first, while OR is applied second! Regardless of the order written in code, SQL starts by evaluating conditions around AND first unless parentheses () are used to override precedence."
          ],
          table: {
            headers: ["Operator", "Symbol / Syntax", "Description & Precedence Rule"],
            rows: [
              ["AND", "condition_1 AND condition_2", "Both conditions must be TRUE simultaneously. Applied FIRST (AND > OR)."],
              ["OR", "condition_1 OR condition_2", "Either condition can be TRUE. Applied SECOND after AND."],
              ["Wildcard %", "LIKE 'Mar%'", "Substitute for a sequence of characters (e.g., Mark, Martin, Margaret)."],
              ["Wildcard _", "LIKE 'Mar_'", "Matches a single character (e.g., Mark, Mary, Marl)."],
              ["BETWEEN", "BETWEEN '1990-01-01' AND '2000-01-01'", "Inclusive interval filter (endpoints '1990-01-01' AND '2000-01-01' ARE included!)."],
              ["NOT BETWEEN", "NOT BETWEEN val1 AND val2", "Interval composed of two parts: below first value OR above second value (endpoints NOT included)."],
              ["IS NULL / NOT NULL", "IS NULL / IS NOT NULL", "Tests for missing NULL values in a field."],
              ["Comparison", "=, >, >=, <, <=, <>, !=", "Compares values. <> and != mean 'not equal / different from'."]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Demonstrating Operator Precedence, Wildcards & BETWEEN Queries",
          code: `-- 1. Operator Precedence: AND > OR (AND executes first!)
SELECT * FROM employees 
WHERE first_name = 'Denis' AND (gender = 'M' OR gender = 'F');

-- 2. Wildcard Characters: % (sequence) vs _ (single char)
SELECT * FROM employees WHERE first_name LIKE 'Mar%';  -- Mark, Martin, Margaret
SELECT * FROM employees WHERE first_name LIKE 'Mar_';  -- Mark, Mary, Marl

-- 3. BETWEEN ... AND ... (Inclusive of endpoints!)
SELECT * FROM employees 
WHERE hire_date BETWEEN '1990-01-01' AND '2000-01-01';

-- 4. NOT BETWEEN ... AND ... (Outer intervals, endpoints excluded!)
SELECT * FROM employees 
WHERE hire_date NOT BETWEEN '1990-01-01' AND '2000-01-01';

-- 5. IS NOT NULL / IS NULL
SELECT * FROM employees WHERE email IS NOT NULL;`,
          explanation: "AND has higher precedence than OR. BETWEEN includes boundary dates, whereas NOT BETWEEN excludes them."
        }
      ],
      practiceExercise: {
        title: "Filtering Hire Dates & Names Challenge",
        problem: "Write SQL queries to: 1. Select all employees hired BETWEEN '1990-01-01' AND '2000-01-01'. 2. Select all employees whose first_name starts with 'Mar' followed by exactly one character.",
        solutionCode: `-- 1. BETWEEN Query
SELECT * FROM employees WHERE hire_date BETWEEN '1990-01-01' AND '2000-01-01';

-- 2. Single Char Wildcard Query
SELECT * FROM employees WHERE first_name LIKE 'Mar_';`
      },
      keyTakeaways: [
        "Logical Operator Precedence rule: AND is ALWAYS evaluated before OR (AND > OR). Use parentheses () to override.",
        "Wildcard % matches any character sequence; wildcard _ matches exactly one single character.",
        "BETWEEN '1990-01-01' AND '2000-01-01' INCLUDES both boundary dates in the result set.",
        "Use IS NULL and IS NOT NULL to filter missing data rows."
      ]
    }
  },
  {
    id: "sql-mod-8",
    title: "Module 08 — DISTINCT, ORDER BY & LIMIT",
    description: "Master deduplication with SELECT DISTINCT, sorting using ORDER BY (ASC/DESC), and row restriction using LIMIT.",
    completed: false,
    order: 8,
    published: true,
    readingMaterial: {
      introduction: "Data presentation requires sorting, deduplication, and pagination. SELECT DISTINCT extracts unique values, ORDER BY sorts outputs, and LIMIT restricts the total returned row count.",
      objectives: [
        "Select all distinct, different data values using SELECT DISTINCT",
        "Sort outputs ascending or descending using ORDER BY",
        "Restrict row counts using LIMIT number at the end of statements"
      ],
      sections: [
        {
          heading: "1. Deduplication & Pagination Mechanics",
          text: "Deduplication and limiting syntax rules:",
          bulletPoints: [
            "SELECT DISTINCT: Selects all distinct, different data values from designated columns.",
            "LIMIT number: Restricts output row count. Placed at the very end of the statement: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT number;"
          ]
        }
      ],
      codeExamples: [
        {
          title: "SELECT DISTINCT & LIMIT Query",
          code: `-- 1. Extract distinct first names
SELECT DISTINCT first_name 
FROM employees;

-- 2. Fetch top 5 employees with LIMIT
SELECT * FROM employees 
ORDER BY hire_date DESC 
LIMIT 5;`,
          explanation: "SELECT DISTINCT removes duplicate first names. LIMIT 5 restricts output to 5 rows."
        }
      ],
      practiceExercise: {
        title: "Distinct Names & Limit Challenge",
        problem: "Write a query retrieving distinct job_titles from 'employees' table, ordered alphabetically, limited to 10 rows.",
        solutionCode: `SELECT DISTINCT job_title 
FROM employees 
ORDER BY job_title ASC 
LIMIT 10;`
      },
      keyTakeaways: [
        "SELECT DISTINCT selects all distinct, different data values from specified columns.",
        "LIMIT number must be placed at the very end of the SQL query statement."
      ]
    }
  },
  {
    id: "sql-mod-9",
    title: "Module 09 — Aggregate Functions, GROUP BY & HAVING",
    description: "Master aggregate functions (COUNT, SUM, MIN, MAX, AVG), COUNT(DISTINCT), GROUP BY positioning, HAVING, and the ultimate WHERE vs HAVING comparison.",
    completed: false,
    order: 9,
    published: true,
    readingMaterial: {
      introduction: "Aggregate functions perform mathematical summaries over multiple rows of a single column, returning a single output value. Combining aggregate functions with GROUP BY and HAVING enables powerful business analytics.",
      objectives: [
        "Master the 5 core Aggregate Functions: COUNT(), SUM(), MIN(), MAX(), AVG()",
        "Understand why parentheses after COUNT() must start IMMEDIATELY after the keyword without whitespace",
        "Combine COUNT with DISTINCT -> COUNT(DISTINCT column_name)",
        "Group results using GROUP BY (placed after WHERE and before ORDER BY)",
        "Filter aggregated groups using HAVING",
        "Master the ultimate comparison: WHERE vs HAVING"
      ],
      sections: [
        {
          heading: "1. Core Aggregate Functions & COUNT Syntax Rule",
          text: "Aggregate functions are applied on multiple rows of a single column and return a single output value. They ignore NULL values unless told not to:",
          bulletPoints: [
            "COUNT(): Counts the number of non-null records in a field.",
            "Syntax Rule: The parentheses after COUNT() must start RIGHT AFTER the keyword, NOT after a whitespace! (e.g. SELECT COUNT(column_name) is VALID; SELECT COUNT (column_name) may cause syntax errors).",
            "COUNT(DISTINCT col): Counts unique non-null values.",
            "SUM(): Sums all non-null values in a column.",
            "MIN() / MAX(): Returns minimum or maximum value from the list.",
            "AVG(): Calculates arithmetic average of all non-null values in a column."
          ]
        },
        {
          heading: "2. Ultimate Comparison: WHERE vs HAVING",
          text: "The placement and execution order of WHERE versus HAVING is fundamental:",
          bulletPoints: [
            "WHERE: Allows us to set conditions that refer to subsets of INDIVIDUAL ROWS BEFORE grouping. CANNOT use aggregate functions within its conditions!",
            "GROUP BY: Re-organizes output into summary groups.",
            "HAVING: Refines and filters output from GROUP BY blocks. Applied AFTER grouping. CAN have conditions with aggregate functions!",
            "Rule: You cannot have both an aggregated and a non-aggregated condition in the HAVING clause (non-aggregated general conditions belong in WHERE!).",
            "Complete Query Order: SELECT ... FROM ... WHERE (general row conditions) -> GROUP BY (grouping output) -> HAVING (aggregate group conditions) -> ORDER BY -> LIMIT."
          ],
          table: {
            headers: ["Feature / Metric", "WHERE Clause", "HAVING Clause"],
            rows: [
              ["Condition Target", "Filters subsets of INDIVIDUAL ROWS", "Filters aggregated GROUP BY summary blocks"],
              ["Can use Aggregate Functions?", "NO (Cannot contain COUNT, SUM, AVG)", "YES (Can contain COUNT(id) > 5, AVG(salary) > 50k)"],
              ["Execution Sequence", "Evaluated BEFORE GROUP BY grouping", "Evaluated AFTER GROUP BY grouping"],
              ["General Conditions", "Place all general row filters here", "Do NOT mix non-aggregated general conditions here"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Complete Aggregation & WHERE vs HAVING Query",
          code: `-- Complete Query displaying execution order: WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT
SELECT 
    department,
    COUNT(employee_id) AS staff_count,
    COUNT(DISTINCT job_title) AS unique_roles,
    ROUND(AVG(salary), 2) AS avg_salary,
    SUM(salary) AS total_payroll
FROM employees
WHERE is_active = TRUE                     -- WHERE: General row condition (BEFORE GROUP BY)
GROUP BY department                        -- GROUP BY: Re-organizes output into groups
HAVING COUNT(employee_id) > 3              -- HAVING: Aggregate group condition (AFTER GROUP BY)
  AND AVG(salary) > 50000.00
ORDER BY avg_salary DESC                   -- ORDER BY: Sorts final grouped output
LIMIT 5;`,
          explanation: "WHERE filters active staff rows before grouping. HAVING filters department aggregate averages after grouping."
        }
      ],
      practiceExercise: {
        title: "Department Payroll Aggregation Exercise",
        problem: "Write a query returning department and AVG(salary) for active employees (is_active = TRUE) where AVG(salary) > 60000, grouped by department and ordered by AVG(salary) DESC.",
        solutionCode: `SELECT 
    department, 
    AVG(salary) AS avg_salary
FROM employees
WHERE is_active = TRUE
GROUP BY department
HAVING AVG(salary) > 60000.00
ORDER BY avg_salary DESC;`
      },
      keyTakeaways: [
        "Parentheses after COUNT() must start immediately after the keyword without whitespace.",
        "Aggregate functions ignore NULL values unless told not to.",
        "WHERE filters individual rows BEFORE GROUP BY (cannot contain aggregate functions).",
        "HAVING filters aggregated summary groups AFTER GROUP BY (can contain aggregate functions)."
      ]
    }
  },
  {
    id: "sql-mod-10",
    title: "Module 10 — SQL Joins & Relationships",
    description: "Master relational theory, normalization (1NF, 2NF, 3NF), and multi-table joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN.",
    completed: false,
    order: 10,
    published: true,
    readingMaterial: {
      introduction: "Relational database normalization breaks large flat files down into smaller, logical entities (Tables) connected by Foreign Key relationships. SQL Joins allow software developers and data analysts to reconstruct related data rows across multiple tables on-the-fly.",
      objectives: [
        "Understand Relational Database Normalization and Foreign Key mapping",
        "Master INNER JOIN for retrieving intersecting records between multiple tables",
        "Master LEFT (OUTER) JOIN for preserving all rows from the primary left table",
        "Understand RIGHT JOIN and FULL OUTER JOIN for complete set coverage",
        "Use CROSS JOIN to generate Cartesian products for grids and matrix generation",
        "Execute SELF JOIN to query hierarchical data (Employee-Manager, Parent-Child Categories)"
      ],
      sections: [
        {
          heading: "1. Inner Joins & Multi-Table Querying",
          text: "An INNER JOIN evaluates an ON join condition and returns ONLY the rows where a matching key exists in BOTH tables ($A \\cap B$).",
          bulletPoints: [
            "Syntax: SELECT * FROM orders o JOIN customers c ON o.customer_id = c.customer_id;",
            "Multi-Table Joins: Chain multiple JOIN clauses to link 3, 4, or 5 tables in a single query."
          ]
        },
        {
          heading: "2. Outer Joins & Anti-Join Pattern",
          text: "Outer joins retain rows even when no matching key exists in the joined table:",
          bulletPoints: [
            "LEFT JOIN: Returns ALL rows from the left table. Unmatched right table columns return NULL.",
            "Anti-Join Pattern: Use LEFT JOIN ... WHERE right.id IS NULL to isolate unmatched records."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Multi-Table Join & Anti-Join Query",
          code: `-- 1. Multi-table Join
SELECT o.order_id, c.first_name, p.product_name, oi.unit_price
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;

-- 2. Anti-Join: Customers without orders
SELECT c.customer_id, c.first_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;`,
          explanation: "Anti-join isolates customers with zero order history by checking WHERE o.order_id IS NULL."
        }
      ],
      practiceExercise: {
        title: "Customer Order Join Exercise",
        problem: "Write a query displaying first_name, last_name, and order_date joining 'customers' and 'orders' with a LEFT JOIN.",
        solutionCode: `SELECT c.first_name, c.last_name, o.order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;`
      },
      keyTakeaways: [
        "INNER JOIN discards unmatched rows; LEFT JOIN preserves all records from the primary left table.",
        "Use Anti-Join (LEFT JOIN ... WHERE right.id IS NULL) to locate unmatched records."
      ]
    }
  },
  {
    id: "sql-mod-11",
    title: "Module 11 — Subqueries, UNION & Advanced Querying",
    description: "Master subqueries (Scalar, Multi-Row, Correlated EXISTS/NOT EXISTS), Common Table Expressions (CTEs), UNION, UNION ALL, INTERSECT, and EXCEPT set operators.",
    completed: false,
    order: 11,
    published: true,
    readingMaterial: {
      introduction: "Subqueries and Common Table Expressions (CTEs) enable modular, multi-level query engineering—allowing you to feed the output of an inner query directly into an outer query.",
      objectives: [
        "Master Scalar Subqueries returning a single value inside SELECT or WHERE",
        "Write Multi-row Subqueries using IN, NOT IN, ANY, and ALL operators",
        "Understand Correlated Subqueries and short-circuit evaluation of EXISTS / NOT EXISTS",
        "Construct modular, readable queries using Common Table Expressions (WITH CTE AS)",
        "Combine dataset result sets using UNION and UNION ALL set operators"
      ],
      sections: [
        {
          heading: "1. CTEs & Set Operators",
          text: "CTEs and set operations streamline analytical queries:",
          bulletPoints: [
            "CTE (WITH clause): Defines a named temporary result set defined using a WITH clause.",
            "UNION vs UNION ALL: UNION deduplicates output rows (slower); UNION ALL appends all rows directly (faster)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "CTE & UNION ALL Query",
          code: `-- 1. CTE Definition
WITH high_value_sales AS (
    SELECT customer_id, SUM(order_total) AS total
    FROM orders
    GROUP BY customer_id
    HAVING SUM(order_total) > 1000.00
)
SELECT c.first_name, hvs.total
FROM customers c
JOIN high_value_sales hvs ON c.customer_id = hvs.customer_id;

-- 2. UNION ALL
SELECT email FROM customers_active
UNION ALL
SELECT email FROM customers_archive;`,
          explanation: "CTEs keep complex analytical queries readable. UNION ALL appends streams without deduplication overhead."
        }
      ],
      practiceExercise: {
        title: "Subquery Salary Exercise",
        problem: "Write a query retrieving employee_id and salary for employees earning more than the average salary.",
        solutionCode: `SELECT employee_id, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);`
      },
      keyTakeaways: [
        "CTEs (WITH clause) improve code readability over deeply nested inline subqueries.",
        "UNION ALL is faster than UNION because it skips the extra deduplication pass."
      ]
    }
  },
  {
    id: "sql-mod-12",
    title: "Module 12 — SQL Functions & Conditional Logic",
    description: "Master scalar functions for string manipulation, date arithmetic, mathematical calculations, COALESCE/NULLIF null handling, and CASE WHEN conditional logic.",
    completed: false,
    order: 12,
    published: true,
    readingMaterial: {
      introduction: "Built-in SQL scalar functions enable developers to transform, format, and evaluate data on-the-fly inside queries. Combining scalar functions with CASE WHEN conditional branching allows executing complex business logic inside the engine.",
      objectives: [
        "Manipulate strings using UPPER, LOWER, LENGTH, SUBSTRING, REPLACE, TRIM, and CONCAT_WS",
        "Perform mathematical operations using ROUND, CEIL, FLOOR, and ABS",
        "Master date arithmetic using EXTRACT, AGE, and INTERVAL",
        "Construct conditional logic branching using CASE WHEN ... THEN ... ELSE ... END",
        "Prevent Division-by-Zero errors using NULLIF and manage fallbacks using COALESCE"
      ],
      sections: [
        {
          heading: "1. CASE WHEN & Division-by-Zero Protection",
          text: "Handling conditional branching and division safety:",
          bulletPoints: [
            "CASE WHEN: Evaluates sequential conditions and returns matching THEN values.",
            "NULLIF(val1, val2): Returns NULL if val1 = val2. Prevents Division-by-Zero: val / NULLIF(qty, 0)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "CASE WHEN & Safe Division Query",
          code: `-- CASE WHEN logic with safe NULLIF division
SELECT 
    product_name,
    stock_quantity,
    total_revenue,
    COALESCE(total_revenue / NULLIF(units_sold, 0), 0.00) AS avg_revenue_per_unit,
    CASE 
        WHEN stock_quantity = 0 THEN 'Out of Stock'
        WHEN stock_quantity <= 10 THEN 'Low Stock'
        ELSE 'In Stock'
    END AS inventory_status
FROM products;`,
          explanation: "NULLIF prevents division by zero errors, and CASE WHEN dynamically categorizes inventory status."
        }
      ],
      practiceExercise: {
        title: "Product Category Tier Exercise",
        problem: "Write a query creating a 'price_tier' column: 'High' if unit_price >= 100, 'Medium' if unit_price >= 50, and 'Low' otherwise.",
        solutionCode: `SELECT 
    product_name, 
    unit_price,
    CASE 
        WHEN unit_price >= 100 THEN 'High'
        WHEN unit_price >= 50 THEN 'Medium'
        ELSE 'Low'
    END AS price_tier
FROM products;`
      },
      keyTakeaways: [
        "Always guard division operations using NULLIF(denominator, 0) to prevent runtime Division-by-Zero errors.",
        "COALESCE returns the first non-NULL value in its parameter list."
      ]
    }
  },
  {
    id: "sql-mod-13",
    title: "Module 13 — Views, Indexes & Database Optimization",
    description: "Create and maintain Database Views, construct B-Tree Indexes, analyze query execution plans with EXPLAIN / EXPLAIN ANALYZE, and optimize performance.",
    completed: false,
    order: 13,
    published: true,
    readingMaterial: {
      introduction: "As production database tables grow to millions of rows, performance tuning and architectural abstraction become paramount. Database Views encapsulate complex join logic, while B-Tree Indexes accelerate read lookup speeds.",
      objectives: [
        "Create virtual Database Views (CREATE VIEW)",
        "Master B-Tree Index search complexity O(log N) vs full table scan O(N)",
        "Analyze query execution plans using EXPLAIN ANALYZE"
      ],
      sections: [
        {
          heading: "1. Indexing & Execution Plans",
          text: "B-Tree indexes speed up read lookups by maintaining a sorted tree structure:",
          bulletPoints: [
            "B-Tree Index: Reduces search complexity from O(N) full table scan down to O(log N).",
            "EXPLAIN ANALYZE: Displays whether a query executes a Seq Scan or an Index Scan."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Create View & Index Query",
          code: `-- 1. Create View
CREATE VIEW vw_active_employees AS
SELECT employee_id, first_name, department, salary
FROM employees
WHERE is_active = TRUE;

-- 2. Create Composite B-Tree Index
CREATE INDEX idx_emp_dept_salary ON employees (department, salary DESC);

-- 3. Diagnostic EXPLAIN
EXPLAIN ANALYZE SELECT * FROM vw_active_employees WHERE department = 'Engineering';`,
          explanation: "EXPLAIN ANALYZE confirms if the query engine utilizes idx_emp_dept_salary during execution."
        }
      ],
      practiceExercise: {
        title: "Index Creation Challenge",
        problem: "Write a DDL statement creating a composite index named 'idx_orders_cust_date' on table 'orders' for columns (customer_id, order_date DESC).",
        solutionCode: `CREATE INDEX idx_orders_cust_date ON orders (customer_id, order_date DESC);`
      },
      keyTakeaways: [
        "Views provide query reusability, security abstraction, and simplified join logic.",
        "B-Tree indexes reduce search complexity from O(N) scans to O(log N) lookups."
      ]
    }
  },
  {
    id: "sql-mod-14",
    title: "Module 14 — Transactions, TCL & Database Security",
    description: "Understand ACID properties, Transaction Control Language (TCL: COMMIT, ROLLBACK), Savepoints, DCL security (GRANT, REVOKE), and SQL Injection defense.",
    completed: false,
    order: 14,
    published: true,
    readingMaterial: {
      introduction: "Database transactions guarantee data consistency across multi-step operations. Transaction Control Language (TCL) statements COMMIT and ROLLBACK allow managing transaction states so that changes are saved or undone safely.",
      objectives: [
        "Understand the 4 ACID properties: Atomicity, Consistency, Isolation, and Durability",
        "Master the COMMIT statement: Save transaction state permanently so other users access modified versions; committed states accrue",
        "Master the ROLLBACK clause: Take a step back, undo non-committed changes, and revert to the last COMMIT state",
        "Understand why you CANNOT restore data to a state corresponding to an earlier COMMIT once committed",
        "Manage rights using DCL GRANT and REVOKE for local servers (127.0.0.1) and DB administrators"
      ],
      sections: [
        {
          heading: "1. TCL: COMMIT & ROLLBACK Lifecycle",
          text: "Not every change you make to a database is saved automatically:",
          bulletPoints: [
            "the COMMIT statement: Related to INSERT, UPDATE, DELETE. Will save the changes you've made permanently and let other users have access to the modified version of the database. Used to save the state of data at the moment of execution. Committed states can accrue over time.",
            "the ROLLBACK clause: Allows you to take a step back and undo any changes you have made that you don't want to be saved permanently. Reverts to the state corresponding to the last time you executed COMMIT. The last non-committed change(s) will not count.",
            "IRREVERSIBLE COMMIT RULE: Once COMMIT is executed, changes cannot be undone! You CANNOT restore data to a state corresponding to an earlier COMMIT using ROLLBACK."
          ]
        },
        {
          heading: "2. DCL: Database Administrators & Rights (GRANT / REVOKE)",
          text: "Database administrators are people who have complete rights to a database and can grant or revoke user privileges:",
          bulletPoints: [
            "the GRANT statement: Gives (or grants) certain permissions to users (complete or partial access). Syntax: GRANT type_of_permission ON database_name.table_name TO 'username'@'localhost';",
            "Local Server ('localhost'): IP Address 127.0.0.1 — Assigned to local users. Big companies and corporations host databases on external, more powerful cloud servers.",
            "the REVOKE clause: Used to revoke permissions and privileges of database users—the exact opposite of GRANT. Syntax: REVOKE type_of_permission ON database_name.table_name FROM 'username'@'localhost';"
          ],
          table: {
            headers: ["TCL / DCL Statement", "Sub-Language", "Primary Purpose", "Reversibility Rule"],
            rows: [
              ["COMMIT", "TCL", "Saves DML transaction changes permanently to DB", "IRREVERSIBLE once executed!"],
              ["ROLLBACK", "TCL", "Undoes uncommitted changes back to last COMMIT state", "Reverts uncommitted DML statements"],
              ["GRANT", "DCL", "Grants specific permissions on tables to user@host", "Can be undone using REVOKE"],
              ["REVOKE", "DCL", "Revokes permissions and privileges from user@host", "Can be granted back using GRANT"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "COMMIT, ROLLBACK & DCL Privilege Commands",
          code: `-- 1. Transaction Block with COMMIT
UPDATE customers 
SET last_name = 'Johnson' 
WHERE customer_id = 4;
COMMIT; -- Changes saved permanently!

-- 2. Transaction Block with ROLLBACK (Undoes uncommitted change)
UPDATE customers 
SET last_name = 'Smith' 
WHERE customer_id = 4;
ROLLBACK; -- Reverts last_name back to 'Johnson' (last COMMIT state!)

-- 3. DCL GRANT Permission
GRANT SELECT, INSERT ON company_db.sales TO 'john'@'localhost';

-- 4. DCL REVOKE Permission
REVOKE INSERT ON company_db.sales FROM 'john'@'localhost';`,
          explanation: "COMMIT saves changes permanently. ROLLBACK reverts to the last COMMIT checkpoint. GRANT/REVOKE manage user access rights."
        }
      ],
      practiceExercise: {
        title: "Transaction Rollback & Grant Exercise",
        problem: "Write SQL commands to: 1. Update customer_id = 4 last_name to 'Johnson'. 2. Commit transaction. 3. Grant SELECT permission on table 'sales' to user 'analyst'@'localhost'.",
        solutionCode: `-- 1 & 2. Update and Commit
UPDATE customers SET last_name = 'Johnson' WHERE customer_id = 4;
COMMIT;

-- 3. DCL Grant
GRANT SELECT ON sales TO 'analyst'@'localhost';`
      },
      keyTakeaways: [
        "COMMIT saves transaction changes permanently so other users can access the modified version.",
        "ROLLBACK undoes changes back to the state of the last non-committed execution or last COMMIT.",
        "Once a COMMIT statement is executed, you CANNOT restore data to an earlier state using ROLLBACK.",
        "Database Administrators use GRANT and REVOKE to manage complete or partial user access rights."
      ]
    }
  },
  {
    id: "sql-mod-15",
    title: "Module 15 — SQL for Data Analytics, Python & AI + Final Project",
    description: "Master Advanced Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, Running Totals), Python sqlite3/Pandas data pipelines, AI-assisted SQL engineering, and complete the Capstone E-Commerce Project.",
    completed: false,
    order: 15,
    published: true,
    readingMaterial: {
      introduction: "Welcome to the final capstone module! SQL powers advanced business intelligence analytics using Window Functions and integrates directly with Python data science pipelines (Pandas, sqlite3) and AI code assistants.",
      objectives: [
        "Master SQL Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD()",
        "Use OVER (PARTITION BY ... ORDER BY ...) for analytical calculations without row collapsing",
        "Calculate Month-over-Month (MoM) Growth and Cumulative Running Totals",
        "Connect Python to SQL databases using sqlite3 and Pandas pd.read_sql_query()",
        "Execute the Complete E-Commerce Capstone Business Intelligence Project"
      ],
      sections: [
        {
          heading: "1. Advanced Window Functions Overview",
          text: "Unlike GROUP BY, which collapses individual rows into summary group tuples, Window Functions compute calculations across a set of table rows related to the current row WITHOUT collapsing individual row identities.",
          bulletPoints: [
            "ROW_NUMBER(): Assigns a unique sequential integer (1, 2, 3...) to rows within each partition.",
            "RANK(): Assigns ranking with gaps for tied values (e.g. 1, 2, 2, 4...).",
            "DENSE_RANK(): Assigns ranking WITHOUT gaps for tied values (e.g. 1, 2, 2, 3...).",
            "LAG(col, offset): Fetches column values from N rows BEFORE the current row (great for Month-over-Month growth).",
            "LEAD(col, offset): Fetches column values from N rows AFTER the current row."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Window Functions & Python SQLite Pipeline",
          code: `-- 1. Month-over-Month Sales Growth using LAG()
WITH monthly_sales AS (
    SELECT EXTRACT(MONTH FROM order_date) as sales_month, SUM(order_total) as monthly_revenue
    FROM orders GROUP BY EXTRACT(MONTH FROM order_date)
)
SELECT 
    sales_month,
    monthly_revenue,
    LAG(monthly_revenue, 1) OVER (ORDER BY sales_month) as prev_month_revenue,
    ROUND(((monthly_revenue - LAG(monthly_revenue, 1) OVER (ORDER BY sales_month)) / NULLIF(LAG(monthly_revenue, 1) OVER (ORDER BY sales_month), 0)) * 100, 2) as mom_growth_pct
FROM monthly_sales;`,
          explanation: "LAG calculates period-over-period percentage growth without collapsing individual row streams."
        }
      ],
      practiceExercise: {
        title: "Capstone Ranking Exercise",
        problem: "Write a query using DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) to rank employees within their department.",
        solutionCode: `SELECT 
    employee_id, first_name, department, salary,
    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;`
      },
      keyTakeaways: [
        "Window Functions calculate values over a row partition WITHOUT collapsing individual row identities.",
        "LAG() and LEAD() enable effortless period-over-period time-series analytics.",
        "Pandas pd.read_sql_query seamlessly connects SQL databases to Python data pipelines.",
        "Congratulations! You have completed the comprehensive 15-module SQL Curriculum!"
      ]
    }
  }
];

// 1. Update server/data/db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  sqlCourseInDb.modules = massive15Modules;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Successfully updated server/data/db.json with massive 15 modules!');
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
    const newModulesJson = JSON.stringify(massive15Modules, null, 6);
    const formattedModulesJs = newModulesJson.slice(1, -1);
    
    const newSqlBlock = headerPart + '\n' + formattedModulesJs + '\n    ],\n  },\n  {\n    id: "';
    
    content = beforeSql + newSqlBlock + afterSql;
    fs.writeFileSync(coursesDataPath, content, 'utf8');
    console.log('Successfully updated src/data/coursesData.js with massive 15 modules!');
  }
}

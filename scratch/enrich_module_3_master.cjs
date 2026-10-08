const fs = require('fs');

const masterModule3 = {
  id: "sql-mod-3",
  title: "Module 03 — DDL: Creating & Managing Database Structures",
  description: "Master Data Definition Language (DDL) architecture: CREATE DATABASE, CREATE SCHEMA, CREATE TABLE, Generated Columns, Temporary Tables (CTAS), zero-downtime ALTER TABLE migrations (ADD, DROP, RENAME, ALTER TYPE), and structural destruction mechanics (DROP TABLE vs TRUNCATE TABLE vs DELETE FROM).",
  completed: false,
  order: 3,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 3! Data Definition Language (DDL) is the sub-language of SQL responsible for defining, altering, managing, and destroying relational database structures—including databases, schemas, tables, views, indexes, and constraints. Unlike DML (which manipulates row data inside tables), DDL statements modify the system catalog (data dictionary) and physical storage allocations on disk. Mastering DDL is essential for database architects, software engineers, and DevOps professionals who design resilient database schemas and manage production schema migrations.",
    objectives: [
      "Master DDL statement fundamentals: CREATE, ALTER, DROP, TRUNCATE, and RENAME",
      "Understand System Catalogs & Data Dictionaries (pg_catalog, information_schema)",
      "Provision Databases & Multi-Tenant Schemas (CREATE DATABASE, CREATE SCHEMA, SET search_path)",
      "Configure Character Encodings (UTF8, UTF8MB4) and Collations (Case/Accent Sensitivity)",
      "Design Production Tables (CREATE TABLE) with Column Defaults, Identity Sequences, and Generated Stored Columns",
      "Utilize Temporary Tables (CREATE TEMP TABLE) and CTAS (CREATE TABLE AS SELECT) for ETL pipelines",
      "Execute Zero-Downtime Database Schema Migrations (ALTER TABLE ADD, DROP, RENAME, ALTER TYPE USING)",
      "Deconstruct Storage Page Mechanics: DROP TABLE vs TRUNCATE TABLE vs DELETE FROM",
      "Understand Transactional DDL (PostgreSQL) vs Immediate Auto-Commit DDL (MySQL, Oracle)"
    ],
    sections: [
      {
        heading: "1. Data Definition Language (DDL) & The Relational Data Dictionary",
        text: "When you execute a DDL statement, the database engine updates internal system metadata tables known as the System Catalog or Data Dictionary (e.g., `information_schema.tables`, `pg_class`, `pg_attribute`). DDL statements alter table schemas, physical page layouts, and index definitions.",
        bulletPoints: [
          "Transactional DDL vs Auto-Commit DDL:",
          "• PostgreSQL: Supports fully transactional DDL! You can execute `CREATE TABLE` or `ALTER TABLE` inside a `BEGIN...COMMIT` block. If an error occurs, `ROLLBACK` restores the previous schema state perfectly.",
          "• MySQL / Oracle: DDL statements issue an implicit `COMMIT` immediately before and after execution. DDL operations CANNOT be rolled back in MySQL or Oracle!",
          "Metadata Locking (AccessExclusiveLock): Executing `ALTER TABLE` or `DROP TABLE` acquires an exclusive lock on the table. While a DDL lock is held, all concurrent client `SELECT`, `INSERT`, `UPDATE`, and `DELETE` queries are blocked in a queue. Minimizing lock duration is crucial for zero-downtime production migrations.",
          "Defensive DDL Guard Clauses: Always use `IF EXISTS` and `IF NOT EXISTS` in migration scripts to prevent script execution crashes (e.g. `CREATE TABLE IF NOT EXISTS users (...)`, `DROP TABLE IF EXISTS audit_logs`)."
        ],
        table: {
          headers: ["DDL Keyword", "Primary Functional Target", "Metadata Catalog Action", "Can Be Rolled Back? (Postgres)"],
          rows: [
            ["CREATE DATABASE", "Database Instance Allocation", "Creates physical directory & tablespace", "NO (Must run outside transaction)"],
            ["CREATE SCHEMA", "Logical Namespace Partition", "Adds entry to pg_namespace catalog", "YES"],
            ["CREATE TABLE", "Table Definition & Heap Creation", "Adds entry to pg_class & allocates disk pages", "YES"],
            ["ALTER TABLE", "Schema Structure Modification", "Updates column attributes & acquires metadata lock", "YES"],
            ["DROP TABLE", "Permanent Table Destruction", "Removes catalog entries & deletes disk pages", "YES"],
            ["TRUNCATE TABLE", "Fast Page Storage Reset", "Deallocates heap storage pages instantly", "YES"]
          ]
        }
      },
      {
        heading: "2. Database & Schema Creation: Encodings, Collations & Multi-Tenancy",
        text: "Creating a production database requires specifying physical storage parameters, character encodings, and collations:",
        bulletPoints: [
          "Character Encodings (UTF8 / UTF8MB4): UTF-8 is the universal standard for web applications, supporting international languages, accents, and symbols. MySQL requires `utf8mb4` to fully support 4-byte UTF-8 characters including modern Emojis.",
          "Collations (String Comparison Rules): Governs how string values are sorted, compared, and matched:",
          "• `en_US.UTF-8` or `utf8mb4_bin`: Case-sensitive string matching ('Admin' != 'admin').",
          "• `utf8mb4_unicode_ci`: Case-insensitive (`_ci`) string matching ('Admin' == 'admin').",
          "Multi-Tenant Logical Isolation (CREATE SCHEMA): A single database container can host multiple logical namespaces called Schemas. Using schemas isolates microservice data or multi-tenant customer accounts without needing separate database servers:",
          "• `CREATE SCHEMA tenant_a;`, `CREATE SCHEMA tenant_b;`",
          "• `SET search_path TO tenant_a, public;` (Directs default query resolution to the `tenant_a` schema)."
        ]
      },
      {
        heading: "3. Complete Table Creation Anatomy (CREATE TABLE, CTAS & Temp Tables)",
        text: "The `CREATE TABLE` command defines column names, data types, default values, sequences, and computed generated columns:",
        bulletPoints: [
          "Column Default Values: `DEFAULT CURRENT_TIMESTAMP` automatically stamps creation dates; `DEFAULT 'Pending'` populates default status strings when values are omitted during INSERT operations.",
          "Identity Sequences (ANSI Standard): `GENERATED ALWAYS AS IDENTITY` replaces legacy proprietary auto-increment types (`SERIAL`), automatically generating sequential numbers (1, 2, 3...).",
          "Generated Stored Columns: Automatically computes values on-the-fly or persists them on disk:",
          "• Syntax: `total_price NUMERIC(10,2) GENERATED ALWAYS AS (unit_price * quantity) STORED`",
          "• The engine calculates `total_price` automatically upon INSERT or UPDATE. Client applications cannot manually overwrite generated columns!",
          "Create Table As Select (CTAS): Copies existing table data and structure into a new table instantly:",
          "• `CREATE TABLE archived_orders AS SELECT * FROM orders WHERE order_date < '2025-01-01';`",
          "Session Temporary Tables (CREATE TEMP TABLE):",
          "• Temporary tables exist only for the duration of a client database connection session. They are automatically dropped when the connection closes, making them perfect for complex ETL data transformations."
        ],
        table: {
          headers: ["Table Creation Strategy", "Syntax Pattern", "Persistence Lifecycle", "Common Enterprise Application"],
          rows: [
            ["Standard Table", "CREATE TABLE users (...)", "Permanent Disk Heap", "Core domain entity tables"],
            ["Generated Stored Column", "col GENERATED ALWAYS AS (expr) STORED", "Permanent Calculated Field", "Invoice subtotals, tax totals"],
            ["CTAS (Data Copy)", "CREATE TABLE copy AS SELECT...", "Permanent Disk Heap", "Data warehouse snapshots, backups"],
            ["Temporary Table", "CREATE TEMP TABLE stage_data (...)", "Session-scoped (RAM/Disk)", "ETL staging, reporting pipelines"],
            ["On-Commit Drop Temp", "CREATE TEMP TABLE t (...) ON COMMIT DROP", "Transaction-scoped", "Multi-step stored procedures"]
          ]
        }
      },
      {
        heading: "4. Zero-Downtime Schema Alterations (ALTER TABLE)",
        text: "As software applications evolve, database table structures must adapt without disrupting active production traffic. The `ALTER TABLE` statement modifies existing table definitions:",
        bulletPoints: [
          "Adding Columns (ADD COLUMN):",
          "• `ALTER TABLE employees ADD COLUMN middle_name VARCHAR(50) NULL;`",
          "• Rule: When adding a `NOT NULL` column to a table with existing rows, you MUST provide a `DEFAULT` value (e.g. `ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'Active'`), otherwise the migration crashes.",
          "Dropping Columns (DROP COLUMN):",
          "• `ALTER TABLE employees DROP COLUMN IF EXISTS middle_name CASCADE;` (`CASCADE` drops dependent views or foreign keys automatically).",
          "Renaming Columns & Tables (RENAME):",
          "• `ALTER TABLE employees RENAME COLUMN surname TO last_name;`",
          "• `ALTER TABLE employees RENAME TO staff_members;`",
          "Altering Data Types (ALTER COLUMN TYPE / USING):",
          "• Changing data types (e.g. converting `VARCHAR` to `INTEGER`) can cause data truncation errors.",
          "• PostgreSQL Explicit Conversion: `ALTER TABLE products ALTER COLUMN code TYPE INT USING (code::integer);`"
        ]
      },
      {
        heading: "5. Structural Destruction & Storage Page Deallocation: DROP vs TRUNCATE vs DELETE",
        text: "Understanding the low-level engine differences between `DROP TABLE`, `TRUNCATE TABLE`, and `DELETE FROM` is essential to prevent catastrophic data loss and storage bloat:",
        table: {
          headers: ["Operation Aspect", "DROP TABLE", "TRUNCATE TABLE", "DELETE FROM"],
          rows: [
            ["SQL Category", "DDL (Data Definition Language)", "DDL (Data Definition Language)", "DML (Data Manipulation Language)"],
            ["Target Effect", "Destroys table schema, columns, metadata & data", "Deallocates all data storage pages; retains table schema", "Removes specific filtered rows or all rows"],
            ["WHERE Clause Support?", "NO", "NO", "YES (Filters specific target rows)"],
            ["Execution Speed", "Instant", "Ultra-Fast (Deallocates disk pages at once)", "Slow (Scans rows sequentially)"],
            ["WAL Log Overhead", "Minimal metadata log entries", "Minimal page deallocation log entries", "High (Writes undo/redo logs per row)"],
            ["Auto-Increment Reset?", "Resets (Table destroyed)", "RESETS sequence back to 1", "Does NOT reset sequence counter"],
            ["Storage Page Retention", "Deallocates all disk pages", "Deallocates all disk pages instantly", "Keeps empty pages allocated (Heap bloat)"],
            ["Trigger Execution", "Fires DROP event triggers", "Fires TRUNCATE triggers (Does not fire row triggers)", "Fires BEFORE/AFTER DELETE row triggers"]
          ]
        },
        bulletPoints: [
          "Safety Warning: Executing `DROP TABLE` or `TRUNCATE TABLE` in production permanently destroys data. Always test DDL scripts in sandbox environments first!"
        ]
      }
    ],
    codeExamples: [
      {
        title: "Multi-Tenant Schema Setup & Table Creation with Generated Columns",
        code: `-- 1. Provision a dedicated logical schema for tenant isolation
CREATE SCHEMA IF NOT EXISTS ecommerce_tenant_a;
SET search_path TO ecommerce_tenant_a, public;

-- 2. Create production orders table with defaults, identity, and generated stored column
CREATE TABLE IF NOT EXISTS orders (
    order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id INT NOT NULL,
    order_status VARCHAR(30) NOT NULL DEFAULT 'Pending',
    
    -- Pricing components
    unit_price NUMERIC(10, 2) NOT NULL CHECK (unit_price >= 0),
    quantity INT NOT NULL CHECK (quantity > 0),
    discount_amount NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    
    -- Generated Stored Column: Calculated automatically by the RDBMS engine!
    net_total NUMERIC(10, 2) GENERATED ALWAYS AS ((unit_price * quantity) - discount_amount) STORED,
    
    order_timestamp TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create a Data Warehouse Analytics Snapshot using CTAS (Create Table As Select)
CREATE TABLE orders_high_value_archive AS 
SELECT order_id, customer_id, net_total, order_timestamp
FROM orders
WHERE net_total >= 1000.00;`,
        explanation: "Demonstrates creating isolated multi-tenant schemas, generated stored columns for calculated invoice totals, and archiving data with CTAS."
      },
      {
        title: "Zero-Downtime Safe Schema Migration Script (ALTER TABLE & TRUNCATE)",
        code: `-- Wrap migration in a transaction block (PostgreSQL supports Transactional DDL!)
BEGIN TRANSACTION;

-- Step 1: Safely add a new column with a default value for existing rows
ALTER TABLE orders 
ADD COLUMN IF NOT EXISTS payment_method VARCHAR(50) NOT NULL DEFAULT 'Credit Card';

-- Step 2: Rename an outdated column cleanly
ALTER TABLE orders 
RENAME COLUMN order_timestamp TO created_at;

-- Step 3: Modify column type with explicit USING conversion expression
ALTER TABLE orders 
ALTER COLUMN order_status TYPE VARCHAR(50);

-- Step 4: Drop legacy temporary staging table using TRUNCATE then DROP
TRUNCATE TABLE orders_high_value_archive; -- Instantly deallocates disk pages
DROP TABLE IF EXISTS orders_high_value_archive CASCADE;

COMMIT; -- Commit schema migration atomically to disk!`,
        explanation: "Demonstrates transactional DDL schema migration using ALTER TABLE (ADD, RENAME, TYPE USING), TRUNCATE page resetting, and atomic COMMIT execution."
      }
    ],
    bestPractices: [
      "Always wrap schema migrations in explicit transaction blocks (`BEGIN...COMMIT`) when using PostgreSQL.",
      "Use `IF EXISTS` and `IF NOT EXISTS` guard clauses in all DDL migration scripts to guarantee idempotent execution.",
      "Always provide a `DEFAULT` value when adding a `NOT NULL` column to an existing table with rows.",
      "Use `TRUNCATE TABLE` instead of `DELETE FROM table` when clearing large staging tables to deallocate storage pages instantly.",
      "Never execute DDL schema changes during peak production traffic hours without testing lock durations."
    ],
    commonMistakes: [
      "Executing `DELETE FROM table` to clear millions of rows, causing high WAL transaction log overhead and disk heap bloat.",
      "Forgetting that MySQL and Oracle auto-commit DDL immediately, preventing `ROLLBACK` if a migration script fails midway.",
      "Executing `ALTER TABLE ... ADD COLUMN NOT NULL` without a default value on populated tables, causing migration failure.",
      "Attempting to manually write or update a `GENERATED ALWAYS AS (...) STORED` column in an `INSERT` or `UPDATE` statement."
    ],
    practiceExercise: {
      title: "DDL Migration & Table Management Challenge",
      problem: "Perform the following two tasks:\n1. Compare `DROP TABLE`, `TRUNCATE TABLE`, and `DELETE FROM` across three criteria:\n   a. Ability to use a `WHERE` clause\n   b. Execution speed on 5 million rows\n   c. Impact on Auto-Increment sequence counters\n\n2. Write a SQL DDL script that performs the following:\n   a. Creates a table `products_v1` with `product_id` (BIGINT IDENTITY), `name` (VARCHAR 100), `cost` (NUMERIC 10,2), `tax` (NUMERIC 10,2), and a generated stored column `total_cost` (`cost + tax`).\n   b. Alters `products_v1` to add a new column `category` (VARCHAR 50) defaulting to 'General'.\n   c. Renames `products_v1` to `products_master`.",
      solutionCode: `-- Exercise 1 Comparison Answers:
-- a. WHERE Clause    : Supported ONLY by DELETE FROM. Not supported by DROP or TRUNCATE.
-- b. Execution Speed : TRUNCATE and DROP are instant (deallocate disk pages). DELETE is slow (scans row-by-row).
-- c. Sequence Reset  : TRUNCATE resets auto-increment counters back to 1. DELETE does NOT reset counters.

-- Exercise 2 DDL Script Answer:
BEGIN TRANSACTION;

-- Step a: Create products_v1 table with generated stored column
CREATE TABLE products_v1 (
    product_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cost NUMERIC(10, 2) NOT NULL,
    tax NUMERIC(10, 2) NOT NULL,
    total_cost NUMERIC(10, 2) GENERATED ALWAYS AS (cost + tax) STORED
);

-- Step b: Alter table to add category column with default value
ALTER TABLE products_v1 
ADD COLUMN category VARCHAR(50) NOT NULL DEFAULT 'General';

-- Step c: Rename table to products_master
ALTER TABLE products_v1 RENAME TO products_master;

COMMIT;`
    },
    keyTakeaways: [
      "DDL commands (CREATE, ALTER, DROP, TRUNCATE, RENAME) modify the database system catalog and physical storage page layouts.",
      "PostgreSQL supports Transactional DDL (`BEGIN...COMMIT`), while MySQL/Oracle execute implicit immediate auto-commits.",
      "Generated Stored Columns automatically compute calculated values upon INSERT/UPDATE without manual application coding.",
      "`TRUNCATE TABLE` deallocates storage pages instantly and resets sequence counters back to 1, whereas `DELETE FROM` scans rows individually.",
      "Always use `IF EXISTS` / `IF NOT EXISTS` and test DDL lock durations to execute zero-downtime production schema migrations."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod3Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-3');
  if (mod3Idx !== -1) {
    sqlCourseInDb.modules[mod3Idx] = masterModule3;
  } else {
    sqlCourseInDb.modules[2] = masterModule3;
  }
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 3!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod3Index = content.indexOf('"id": "sql-mod-3"');
const sqlMod4Index = content.indexOf('"id": "sql-mod-4"');

if (sqlMod3Index !== -1 && sqlMod4Index !== -1) {
  const mod3Start = content.lastIndexOf('{', sqlMod3Index);
  const mod4Start = content.lastIndexOf('{', sqlMod4Index);
  
  const beforeMod3 = content.slice(0, mod3Start);
  const afterMod3 = content.slice(mod4Start);
  
  const formattedMod3 = JSON.stringify(masterModule3, null, 6);
  
  content = beforeMod3 + formattedMod3 + ',\n\n      ' + afterMod3;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 3!');
}

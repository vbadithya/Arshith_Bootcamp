const fs = require('fs');

const masterModule4 = {
  id: "sql-mod-4",
  title: "Module 04 — Constraints & Keys",
  description: "Master Relational Database Integrity: Column vs Table-Level Constraints, PRIMARY KEY (Single & Composite), UNIQUE Constraints (and NULL handling rules), FOREIGN KEY Referential Integrity with ON DELETE / ON UPDATE Cascading Actions (CASCADE, RESTRICT, SET NULL, SET DEFAULT), CHECK Constraints, NOT NULL, DEFAULT, and Deferred Constraint Validation (DEFERRABLE INITIALLY DEFERRED).",
  completed: false,
  order: 4,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 4! Constraints are the fundamental rules enforced by a Relational Database Management System (RDBMS) to guarantee Data Integrity across all database operations. Without constraints, databases degrade into chaotic stores of dirty, orphaned, duplicate, or corrupted data. Constraints operate directly inside the storage engine, enforcing Domain Integrity, Entity Integrity, and Referential Integrity automatically—regardless of what buggy code backend applications or external clients attempt to execute.",
    objectives: [
      "Differentiate the 3 Pillars of Database Integrity: Entity Integrity, Referential Integrity, and Domain Integrity",
      "Understand Column-Level vs Table-Level Constraint syntax and Named Constraints (CONSTRAINT pk_name)",
      "Master PRIMARY KEY Constraints: Single-column surrogate keys vs Composite Primary Keys in junction tables",
      "Evaluate UNIQUE Constraints: Deduplication rules, B-Tree index creation, and NULL handling behavior",
      "Master FOREIGN KEY Constraints: Parent-Child table relationships and Referential Cascading Actions (RESTRICT, CASCADE, SET NULL, SET DEFAULT)",
      "Implement Domain Integrity with CHECK Constraints, NOT NULL, and DEFAULT expressions",
      "Manage Production Constraints: Adding/dropping constraints via ALTER TABLE, NOT VALID pattern, and Deferred Constraints (DEFERRABLE INITIALLY DEFERRED)"
    ],
    sections: [
      {
        heading: "1. The 3 Pillars of Relational Data Integrity",
        text: "Relational database systems enforce three distinct layers of data integrity to prevent data corruption:",
        bulletPoints: [
          "1. Entity Integrity: Ensures that every row in a table is uniquely identifiable and non-null. Enforced by PRIMARY KEY constraints.",
          "2. Referential Integrity: Ensures that relationships between tables remain consistent, preventing 'orphaned child records' (e.g. an order referencing a customer ID that does not exist). Enforced by FOREIGN KEY constraints.",
          "3. Domain Integrity: Restricts valid values, formats, and ranges for a specific column. Enforced by NOT NULL, CHECK, DEFAULT, and DATA TYPE definitions."
        ],
        table: {
          headers: ["Constraint Type", "Integrity Level", "Core Function / Rule", "Automatically Creates Index?"],
          rows: [
            ["PRIMARY KEY", "Entity Integrity", "Uniquely identifies each row; Implies NOT NULL + UNIQUE", "YES (Clustered or B-Tree Index)"],
            ["UNIQUE", "Entity Integrity", "Prevents duplicate values; Allows NULLs under ANSI rules", "YES (Unique B-Tree Index)"],
            ["FOREIGN KEY", "Referential Integrity", "Enforces parent-child table key matching & cascading actions", "NO (Requires explicit index!)"],
            ["NOT NULL", "Domain Integrity", "Forbids missing or undefined NULL entries", "NO"],
            ["CHECK", "Domain Integrity", "Enforces custom boolean logic expressions (e.g. price > 0)", "NO"],
            ["DEFAULT", "Domain Integrity", "Supplies fallback values when columns are omitted during INSERT", "NO"]
          ]
        }
      },
      {
        heading: "2. PRIMARY KEY & UNIQUE Constraints",
        text: "Entity integrity requires that rows can be uniquely identified and retrieved without ambiguity:",
        bulletPoints: [
          "PRIMARY KEY Constraints:",
          "• A table can have at most ONE Primary Key.",
          "• Implicity enforces `NOT NULL` and `UNIQUE` on all key columns.",
          "• Single-Column Key: Usually an auto-incrementing integer (`BIGINT IDENTITY`) or a 128-bit `UUID`.",
          "• Composite Primary Key: Composed of two or more columns combined (e.g. `PRIMARY KEY (order_id, product_id)` in an `order_items` junction table).",
          "UNIQUE Constraints:",
          "• A table can have MULTIPLE Unique constraints.",
          "• Prevents duplicate non-null entries (e.g. `email VARCHAR(255) UNIQUE`).",
          "• ANSI NULL Rule: Standard SQL allows multiple `NULL` values in a UNIQUE column because `NULL != NULL` in relational logic. (Note: Microsoft SQL Server restricts UNIQUE columns to a single NULL unless filtered indexes are used)."
        ]
      },
      {
        heading: "3. FOREIGN KEY Constraints & Referential Cascading Actions",
        text: "FOREIGN KEY constraints establish logical parent-child links between tables. When a parent row is modified or deleted, the database engine enforces referential actions on related child records:",
        table: {
          headers: ["Cascading Option", "ON DELETE Behavior", "ON UPDATE Behavior", "Recommended Enterprise Use Case"],
          rows: [
            ["RESTRICT / NO ACTION", "Blocks parent deletion if child records exist (Throws Error)", "Blocks parent key change if child records exist", "Default setting; protects critical historical audit data"],
            ["CASCADE", "Automatically deletes all child records when parent is deleted", "Automatically updates child foreign keys to match parent key", "Junction tables, invoice line items, order line items"],
            ["SET NULL", "Sets child foreign key column to NULL when parent is deleted", "Sets child foreign key column to NULL when parent key updates", "Nullable ownership (e.g. assigning task to deleted employee)"],
            ["SET DEFAULT", "Sets child foreign key to column DEFAULT value upon parent delete", "Sets child foreign key to column DEFAULT value upon parent update", "Fallback category assignments (e.g. reassigning to 'General' category)"]
          ]
        },
        bulletPoints: [
          "Crucial Foreign Key Performance Rule: Relational database engines DO NOT automatically create indexes on FOREIGN KEY columns! You MUST explicitly create a B-Tree index on foreign key columns (e.g. `CREATE INDEX idx_orders_customer ON orders(customer_id);`) to prevent full table scans and severe lock escalation during JOINs and parent DELETE operations."
        ]
      },
      {
        heading: "4. Domain Integrity: CHECK, NOT NULL & DEFAULT Constraints",
        text: "Domain constraints enforce business validation rules directly inside the storage engine:",
        bulletPoints: [
          "NOT NULL: Guarantees that a column cannot store missing or undefined values.",
          "DEFAULT: Supplies an automatic fallback value when an INSERT statement omits the column (`DEFAULT 'Pending'`, `DEFAULT CURRENT_TIMESTAMP`).",
          "CHECK Constraints: Evaluates a boolean expression on every INSERT or UPDATE operation. If the expression evaluates to FALSE, the transaction aborts with a constraint violation error:",
          "• Single-Column Check: `salary NUMERIC(10,2) CHECK (salary >= 0)`",
          "• Pattern Matching Check: `email VARCHAR(255) CHECK (email LIKE '%@%.%')`",
          "• Multi-Column Cross-Field Check: `CHECK (end_date >= start_date)` (Enforces that event end dates cannot precede start dates)."
        ]
      },
      {
        heading: "5. Constraint Management & Deferred Transaction Validation",
        text: "In high-throughput enterprise environments, constraints must be added or managed without locking tables or breaking complex transactions:",
        bulletPoints: [
          "Named Constraints Syntax: Always assign explicit, descriptive names to constraints (e.g. `CONSTRAINT fk_orders_customers FOREIGN KEY (customer_id) REFERENCES customers(customer_id)`). Named constraints ensure clear debugging error messages and allow clean dropping via `ALTER TABLE orders DROP CONSTRAINT fk_orders_customers;`.",
          "Deferred Constraint Validation (DEFERRABLE):",
          "• Standard constraints are evaluated immediately after every individual SQL statement.",
          "• `DEFERRABLE INITIALLY DEFERRED` instructs the engine to delay foreign key validation until the final `COMMIT` statement of a transaction.",
          "• Critical for circular table dependencies (e.g., Table A references Table B, and Table B references Table A) or bulk ETL data loading.",
          "Zero-Lock Migration Pattern (NOT VALID): In PostgreSQL, adding a constraint to a table with 50 million rows can lock the table for minutes while validating existing data. The `NOT VALID` pattern solves this:",
          "• Step 1: `ALTER TABLE orders ADD CONSTRAINT fk_cust FOREIGN KEY (customer_id) REFERENCES customers(customer_id) NOT VALID;` (Acquires a split-second lock, validating new rows only).",
          "• Step 2: `ALTER TABLE orders VALIDATE CONSTRAINT fk_cust;` (Scans existing data in the background without blocking concurrent writes!)."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Multi-Table E-Commerce Schema with Composite Keys & Referential Cascading",
        code: `-- 1. Parent Customers Table
CREATE TABLE customers (
    customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) CONSTRAINT uq_customers_email UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    account_status VARCHAR(20) DEFAULT 'Active' 
        CONSTRAINT chk_customer_status CHECK (account_status IN ('Active', 'Suspended', 'Closed')),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Parent Orders Table referencing Customers
CREATE TABLE orders (
    order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    -- Named Foreign Key with RESTRICT rule (cannot delete customer if active orders exist!)
    customer_id INT NOT NULL,
    order_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    order_status VARCHAR(30) DEFAULT 'Pending',
    
    CONSTRAINT fk_orders_customers 
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id) 
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Essential Index on Foreign Key column to optimize JOINs and parent deletions
CREATE INDEX idx_orders_customer_id ON orders(customer_id);

-- 3. Child Order Line Items Table with Composite Primary Key & CASCADE deletion rule
CREATE TABLE order_items (
    order_id BIGINT NOT NULL,
    line_item_id INT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    unit_price NUMERIC(10, 2) NOT NULL CONSTRAINT chk_item_price CHECK (unit_price > 0),
    quantity INT NOT NULL CONSTRAINT chk_item_qty CHECK (quantity > 0),
    
    -- Composite Primary Key combining order_id and line_item_id
    CONSTRAINT pk_order_items PRIMARY KEY (order_id, line_item_id),
    
    -- Named Foreign Key with CASCADE rule (deleting order automatically deletes line items!)
    CONSTRAINT fk_items_orders 
        FOREIGN KEY (order_id) REFERENCES orders(order_id) 
        ON DELETE CASCADE
);`,
        explanation: "Demonstrates Entity Integrity (Primary Keys & Composite Keys), Referential Integrity with ON DELETE RESTRICT and CASCADE rules, B-Tree FK indexing, and Domain Integrity CHECK constraints."
      },
      {
        title: "Deferred Constraints & Zero-Lock NOT VALID Production Migrations",
        code: `-- 1. Deferred Constraint Validation inside a Transaction Block
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    featured_book_id INT -- Circular reference to books table
);

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author_id INT NOT NULL
);

-- Add Deferrable Foreign Key constraint to solve circular insertion dependency
ALTER TABLE authors 
ADD CONSTRAINT fk_authors_books 
FOREIGN KEY (featured_book_id) REFERENCES books(book_id)
DEFERRABLE INITIALLY DEFERRED;

BEGIN TRANSACTION;
-- Deferred validation allows inserting author before book exists within the same transaction!
INSERT INTO authors (author_id, name, featured_book_id) VALUES (1, 'Dr. Edgar Codd', 101);
INSERT INTO books (book_id, title, author_id) VALUES (101, 'Relational Database Model', 1);
COMMIT; -- Engine validates foreign key integrity at COMMIT time!

-- 2. Zero-Lock PostgreSQL Migration Pattern for 10M Row Tables
-- Step 1: Add constraint without validating existing rows (Split-second lock!)
ALTER TABLE books 
ADD CONSTRAINT fk_books_authors 
FOREIGN KEY (author_id) REFERENCES authors(author_id) 
NOT VALID;

-- Step 2: Validate existing rows in background without blocking production reads/writes
ALTER TABLE books VALIDATE CONSTRAINT fk_books_authors;`,
        explanation: "Demonstrates solving circular key dependencies with DEFERRABLE INITIALLY DEFERRED and running zero-downtime production migrations using NOT VALID and VALIDATE CONSTRAINT."
      }
    ],
    bestPractices: [
      "Always assign explicit names to constraints (e.g. CONSTRAINT fk_orders_customers) for clear error logging and easy ALTER TABLE maintenance.",
      "Always explicitly create a B-Tree index on FOREIGN KEY columns; relational engines do NOT index foreign keys automatically.",
      "Use ON DELETE RESTRICT (the default) for critical historical records like invoices and customer profiles to prevent accidental deletion.",
      "Use ON DELETE CASCADE only for tightly coupled child entity tables like order line items or shopping cart items.",
      "Utilize the `NOT VALID` and `VALIDATE CONSTRAINT` two-step pattern when adding constraints to massive production tables to prevent lock contention."
    ],
    commonMistakes: [
      "Assuming relational engines automatically index Foreign Key columns, leading to slow JOIN performance and severe table lock escalation.",
      "Using `ON DELETE CASCADE` on critical parent tables, accidentally wiping out thousands of historical orders when a customer record is deleted.",
      "Forgetting that standard ANSI SQL allows multiple `NULL` values in a `UNIQUE` column because `NULL != NULL` in relational logic.",
      "Adding un-deferred circular foreign keys between two tables, making it impossible to insert initial seed data into either table."
    ],
    practiceExercise: {
      title: "Referential Integrity & Cascading Action Challenge",
      problem: "Perform the following two tasks:\n1. Choose the correct foreign key ON DELETE cascading action (RESTRICT, CASCADE, or SET NULL) for each scenario:\n   a. Deleting a `Customer` record when related `Orders` exist.\n   b. Deleting an `Order` record when related `Order_Line_Items` exist.\n   c. Deleting an `Employee` record assigned as a `Manager` to other employees.\n\n2. Write a SQL DDL statement to create a table `event_schedules` with:\n   a. `schedule_id` (BIGINT PRIMARY KEY IDENTITY)\n   b. `event_name` (VARCHAR 100 NOT NULL)\n   c. `start_time` (TIMESTAMPTZ NOT NULL)\n   d. `end_time` (TIMESTAMPTZ NOT NULL)\n   e. A multi-column CHECK constraint ensuring `end_time > start_time`.",
      solutionCode: `-- Exercise 1 Cascading Action Answers:
-- a. Deleting Customer with Orders      -> RESTRICT / NO ACTION (Prevents deleting customer with transaction history)
-- b. Deleting Order with Order Line Items-> CASCADE (Automatically cleans up orphan line items)
-- c. Deleting Employee who is Manager    -> SET NULL (Clears manager reference without deleting managed employees)

-- Exercise 2 Table Creation Answer:
CREATE TABLE event_schedules (
    schedule_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    
    -- Multi-column CHECK constraint enforcing temporal logic
    CONSTRAINT chk_event_times CHECK (end_time > start_time)
);`
    },
    keyTakeaways: [
      "Relational constraints enforce Entity Integrity (PRIMARY KEY, UNIQUE), Referential Integrity (FOREIGN KEY), and Domain Integrity (NOT NULL, CHECK, DEFAULT).",
      "FOREIGN KEY columns require explicit B-Tree indexing to ensure high-speed JOINs and prevent parent deletion locks.",
      "Use `ON DELETE RESTRICT` for historical audit data and `ON DELETE CASCADE` for dependent child line-item records.",
      "CHECK constraints enforce custom multi-column business logic directly within the storage engine.",
      "`DEFERRABLE INITIALLY DEFERRED` delays foreign key checking until transaction `COMMIT`, solving circular table insertion dependencies."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod4Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-4');
  if (mod4Idx !== -1) {
    sqlCourseInDb.modules[mod4Idx] = masterModule4;
  } else {
    sqlCourseInDb.modules[3] = masterModule4;
  }
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 4!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod4Index = content.indexOf('"id": "sql-mod-4"');
const sqlMod5Index = content.indexOf('"id": "sql-mod-5"');

if (sqlMod4Index !== -1 && sqlMod5Index !== -1) {
  const mod4Start = content.lastIndexOf('{', sqlMod4Index);
  const mod5Start = content.lastIndexOf('{', sqlMod5Index);
  
  const beforeMod4 = content.slice(0, mod4Start);
  const afterMod4 = content.slice(mod5Start);
  
  const formattedMod4 = JSON.stringify(masterModule4, null, 6);
  
  content = beforeMod4 + formattedMod4 + ',\n\n      ' + afterMod4;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 4!');
}

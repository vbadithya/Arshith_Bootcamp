const fs = require('fs');

const masterModule5 = {
  id: "sql-mod-5",
  title: "Module 05 — DML: INSERT, UPDATE & DELETE",
  description: "Master Data Manipulation Language (DML): Single & Bulk Batch INSERT INTO, RETURNING clause, INSERT INTO ... SELECT, WHERE Safety Controls in UPDATE & DELETE, UPDATE ... JOIN, Hard Deletes vs Soft Deletes (is_deleted, partial indexes), and Atomic UPSERT operations (INSERT ... ON CONFLICT DO UPDATE, MERGE INTO).",
  completed: false,
  order: 5,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 5! Data Manipulation Language (DML) encompasses the core SQL commands used to insert, modify, update, and delete data records stored inside relational database tables. While DDL defines the empty schema containers, DML manages the live data state of the application. DML operations acquire Row-Level Exclusive Locks (X-Locks) and generate Write-Ahead Logging (WAL) entries to guarantee ACID transaction safety. Mastering DML statements—including bulk insertions, multi-table updates, soft delete patterns, and atomic UPSERT operations—is essential for building high-concurrency backend web applications and ETL data pipelines.",
    objectives: [
      "Master single-row and high-performance multi-row batch INSERT INTO statements",
      "Retrieve auto-generated primary keys instantly using the RETURNING clause",
      "Execute bulk data ingestion using INSERT INTO ... SELECT from staging tables",
      "Master UPDATE statement syntax, multi-column expressions, and WHERE safety safeguards",
      "Perform multi-table updates using UPDATE ... FROM / JOIN queries",
      "Compare Hard Deletes (DELETE FROM) versus Soft Deletes (is_deleted, deleted_at timestamps)",
      "Implement Partial Unique Indexes to handle soft-deleted record re-registration",
      "Master Atomic UPSERT operations using PostgreSQL INSERT ... ON CONFLICT (DO UPDATE / DO NOTHING)",
      "Execute ANSI standard MERGE INTO statements for data warehouse synchronization"
    ],
    sections: [
      {
        heading: "1. Data Insertion (INSERT INTO) & Bulk Data Pipeline Operations",
        text: "The `INSERT INTO` command adds new data rows to a table. In high-throughput enterprise applications, how you structure INSERT statements dramatically impacts database I/O performance:",
        bulletPoints: [
          "Single-Row INSERT: Inserts one row per network round-trip. (Anti-pattern when inserting thousands of rows due to network latency).",
          "Multi-Row Batch INSERT: Combines hundreds of rows into a single SQL statement: `INSERT INTO users (name, email) VALUES ('Alice', 'a@test.com'), ('Bob', 'b@test.com'), ('Carol', 'c@test.com');`. Reduces network overhead by up to 90%!",
          "The RETURNING Clause (PostgreSQL / Oracle / SQL Server OUTPUT):",
          "• By default, `INSERT` returns only the count of inserted rows (e.g., `INSERT 0 1`).",
          "• Adding `RETURNING id, created_at` instructs the engine to return the auto-generated primary key and default values instantly without requiring a second `SELECT` query.",
          "Bulk Copying with INSERT INTO ... SELECT:",
          "• Ingests filtered data streams directly from a source table into a target table: `INSERT INTO archived_orders (order_id, total) SELECT id, amount FROM orders WHERE status = 'Completed';`"
        ],
        table: {
          headers: ["Insertion Pattern", "Syntax Pattern", "Network Round-Trips", "Best Application Scenario"],
          rows: [
            ["Single-Row Insert", "INSERT INTO t (c) VALUES (v1);", "1 round-trip per row", "Single user signup or form submission"],
            ["Multi-Row Batch Insert", "INSERT INTO t (c) VALUES (v1), (v2)...;", "1 round-trip per batch", "Bulk CSV upload, batch event logging"],
            ["INSERT with RETURNING", "INSERT INTO t (c) VALUES (v) RETURNING id;", "1 round-trip total", "API creating child records needing new Parent ID"],
            ["INSERT INTO ... SELECT", "INSERT INTO target SELECT * FROM source;", "0 network round-trips (Server internal)", "ETL staging, database archiving pipelines"],
            ["COPY / Bulk Loader", "COPY t FROM '/path/file.csv' WITH CSV;", "Internal direct file read", "Importing gigabytes of raw data files"]
          ]
        }
      },
      {
        heading: "2. Data Modification (UPDATE) & WHERE Safety Safeguards",
        text: "The `UPDATE` command modifies existing column values in table rows matching specific filter criteria:",
        bulletPoints: [
          "CATASTROPHIC ACCIDENT WARNING: Executing `UPDATE users SET status = 'Inactive';` WITHOUT a `WHERE` clause modifies EVERY SINGLE ROW in the table! Always test `WHERE` clause filters using a `SELECT` statement first before executing an `UPDATE`.",
          "Multi-Column Updates & Arithmetic Expressions: Modify multiple columns simultaneously using calculated expressions:",
          "• `UPDATE products SET unit_price = unit_price * 1.10, updated_at = CURRENT_TIMESTAMP WHERE category_id = 4;`",
          "Multi-Table Updates (UPDATE ... FROM / JOIN): Update target table rows based on join matches in secondary reference tables:",
          "• `UPDATE employees e SET salary = salary + 5000 FROM departments d WHERE e.department_id = d.id AND d.name = 'Engineering';`",
          "The RETURNING Clause on UPDATE: `UPDATE accounts SET balance = balance - 100 WHERE id = 5 RETURNING id, balance;` returns the updated row values instantly."
        ]
      },
      {
        heading: "3. Hard Deletes vs Soft Deletes",
        text: "Removing data records from a relational database requires choosing between permanent destruction and logical archiving:",
        table: {
          headers: ["Deletion Strategy", "SQL Implementation Pattern", "Physical Heap Impact", "Data Recoverability"],
          rows: [
            ["Hard Delete (DELETE)", "DELETE FROM users WHERE user_id = 42;", "Removes row tuple permanently from disk page heap", "NO recovery (Requires restoring database backup)"],
            ["Soft Delete (UPDATE)", "UPDATE users SET is_deleted = TRUE, deleted_at = CURRENT_TIMESTAMP WHERE user_id = 42;", "Retains row tuple on disk; updates boolean status flag", "INSTANT recovery (`UPDATE users SET is_deleted = FALSE`)"]
          ]
        },
        bulletPoints: [
          "Why Enterprises Prefer Soft Deletes:",
          "1. Audit & Regulatory Compliance: Financial, healthcare, and security standards require audit trails of all user accounts and transactions.",
          "2. Accidental Deletion Recovery: Reversing an accidental deletion is a simple `UPDATE` query.",
          "3. Referential Integrity Protection: Prevents foreign key constraint violation errors when deleting parent rows referenced by historical child orders.",
          "Handling UNIQUE Constraints with Soft Deletes (Partial Indexes):",
          "• Problem: If a soft-deleted user has `email = 'alex@test.com'`, a new user attempting to register with `'alex@test.com'` will crash due to the `UNIQUE` email constraint!",
          "• Solution: Use a Partial Unique Index in PostgreSQL: `CREATE UNIQUE INDEX uq_active_users_email ON users(email) WHERE is_deleted = FALSE;` This allows new active users to register while preserving soft-deleted historical rows!"
        ]
      },
      {
        heading: "4. Atomic UPSERT Mechanics (INSERT ... ON CONFLICT / MERGE)",
        text: "In concurrent multi-threaded web applications, checking if a record exists with a `SELECT` and then issuing an `INSERT` or `UPDATE` causes severe Race Conditions. An UPSERT ('Update or Insert') performs this atomically in a single statement:",
        bulletPoints: [
          "PostgreSQL UPSERT (INSERT ... ON CONFLICT):",
          "• ON CONFLICT DO UPDATE (Update existing record):",
          "  `INSERT INTO user_stats (user_id, login_count) VALUES (42, 1) ON CONFLICT (user_id) DO UPDATE SET login_count = user_stats.login_count + EXCLUDED.login_count;`",
          "• Note: `EXCLUDED` is a special pseudo-table referencing the values attempted in the `INSERT` clause.",
          "• ON CONFLICT DO NOTHING (Idempotent write operation):",
          "  `INSERT INTO newsletter_subscribers (email) VALUES ('user@test.com') ON CONFLICT (email) DO NOTHING;` (Silently skips insertion if email already exists, preventing duplicate key errors).",
          "ANSI Standard MERGE INTO (SQL Server, Oracle, PostgreSQL 15+):",
          "• Synchronizes a target table with a source dataset based on join key matching:",
          "  `MERGE INTO inventory t USING staging_inventory s ON (t.product_id = s.product_id) WHEN MATCHED THEN UPDATE SET t.stock = t.stock + s.stock WHEN NOT MATCHED THEN INSERT (product_id, stock) VALUES (s.product_id, s.stock);`"
        ]
      }
    ],
    codeExamples: [
      {
        title: "Bulk Ingestion with RETURNING, Archive SELECT & UPDATE FROM",
        code: `-- 1. Single batch INSERT returning auto-generated Primary Key IDs instantly
INSERT INTO products (product_name, category, unit_price, stock_quantity)
VALUES 
    ('Mechanical Keyboard', 'Electronics', 120.00, 50),
    ('Ergonomic Mouse', 'Electronics', 65.50, 100),
    ('USB-C Hub', 'Electronics', 45.00, 200)
RETURNING product_id, product_name, created_at;

-- 2. Bulk Copy Archiving using INSERT INTO ... SELECT
INSERT INTO archived_products (product_id, product_name, unit_price, archived_at)
SELECT product_id, product_name, unit_price, CURRENT_TIMESTAMP
FROM products
WHERE stock_quantity = 0;

-- 3. Multi-table UPDATE using UPDATE ... FROM join
UPDATE products p
SET unit_price = p.unit_price * 0.85, -- Apply 15% clearance discount
    updated_at = CURRENT_TIMESTAMP
FROM categories c
WHERE p.category_id = c.category_id
  AND c.category_name = 'Clearance Items'
RETURNING p.product_id, p.product_name, p.unit_price;`,
        explanation: "Demonstrates batch insertion with immediate key retrieval via RETURNING, bulk archiving with INSERT INTO SELECT, and cross-table updates with UPDATE FROM."
      },
      {
        title: "Atomic UPSERT (ON CONFLICT), Soft Delete & Partial Unique Index",
        code: `-- 1. Create table with Soft Delete flag and Partial Unique Index
CREATE TABLE user_accounts (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at TIMESTAMPTZ NULL
);

-- Partial Unique Index: Enforces unique email ONLY among active non-deleted users!
CREATE UNIQUE INDEX uq_active_user_email 
ON user_accounts(email) 
WHERE is_deleted = FALSE;

-- 2. Soft Delete Execution (Preserves record for compliance)
UPDATE user_accounts
SET is_deleted = TRUE, 
    deleted_at = CURRENT_TIMESTAMP
WHERE user_id = 104;

-- 3. Atomic UPSERT (Insert new user visit or update existing visit count)
CREATE TABLE user_page_views (
    user_id INT PRIMARY KEY,
    view_count INT NOT NULL DEFAULT 1,
    last_visit TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user_page_views (user_id, view_count, last_visit)
VALUES (104, 1, CURRENT_TIMESTAMP)
ON CONFLICT (user_id) 
DO UPDATE SET 
    view_count = user_page_views.view_count + 1,
    last_visit = EXCLUDED.last_visit
RETURNING user_id, view_count, last_visit;`,
        explanation: "Demonstrates soft deletes with partial unique indexes, and atomic UPSERT handling using INSERT ... ON CONFLICT DO UPDATE SET EXCLUDED."
      }
    ],
    bestPractices: [
      "Always test `WHERE` clause filters using a `SELECT` statement before executing an `UPDATE` or `DELETE` statement.",
      "Use multi-row batch `INSERT INTO` (or `COPY`) instead of looping single-row inserts to eliminate network latency.",
      "Use `RETURNING id` on `INSERT` operations to obtain newly generated primary keys without extra database queries.",
      "Prefer Soft Deletes (`is_deleted = TRUE`) over Hard Deletes (`DELETE FROM`) for core domain entities to preserve audit compliance.",
      "Combine Soft Deletes with Partial Unique Indexes (`WHERE is_deleted = FALSE`) to allow re-registration of historical unique identifiers.",
      "Use atomic `UPSERT` (`ON CONFLICT DO UPDATE`) to prevent concurrent race conditions in high-volume API endpoints."
    ],
    commonMistakes: [
      "Executing `UPDATE table SET column = val;` without a `WHERE` clause, accidentally overwriting every row in the production table.",
      "Executing `DELETE FROM table;` to clear data, generating massive WAL log overhead and keeping disk page heaps allocated.",
      "Issuing a `SELECT` followed by an `INSERT`/`UPDATE` in application code instead of using an atomic `UPSERT`, causing duplicate key race condition crashes.",
      "Forgetting to create a Partial Unique Index when implementing soft deletes, causing duplicate key conflicts when users re-register."
    ],
    practiceExercise: {
      title: "DML Operations & Atomic UPSERT Challenge",
      problem: "Perform the following two tasks:\n1. Compare Hard Delete (`DELETE FROM`) versus Soft Delete (`UPDATE ... SET is_deleted = TRUE`) across three dimensions:\n   a. Data recoverability\n   b. Regulatory audit compliance\n   c. Impact on foreign key referential integrity\n\n2. Write a SQL statement that performs an atomic UPSERT on a `product_stock` table (`product_id` PRIMARY KEY, `quantity` INT):\n   a. Attempts to insert `product_id = 501` with `quantity = 10`.\n   b. If `product_id` 501 already exists, adds 10 to the existing `quantity`.\n   c. Returns the updated `product_id` and new `quantity` using the `RETURNING` clause.",
      solutionCode: `-- Exercise 1 Comparison Answers:
-- a. Recoverability : Hard Delete requires restoring database backups. Soft Delete recovers instantly with an UPDATE query.
-- b. Audit Compliance: Hard Delete destroys audit logs. Soft Delete preserves full historic records for compliance.
-- c. FK Integrity   : Hard Delete causes FK constraint errors or cascades. Soft Delete maintains referential integrity intact.

-- Exercise 2 Atomic UPSERT Solution:
INSERT INTO product_stock (product_id, quantity)
VALUES (501, 10)
ON CONFLICT (product_id) 
DO UPDATE SET quantity = product_stock.quantity + EXCLUDED.quantity
RETURNING product_id, quantity;`
    },
    keyTakeaways: [
      "DML statements (INSERT, UPDATE, DELETE) mutate live table state, acquire Exclusive Locks (X-Locks), and record WAL logs.",
      "Use `RETURNING id` on INSERT/UPDATE statements to retrieve generated primary keys in a single network round-trip.",
      "Soft Deletes (`is_deleted = TRUE`) preserve historical audit compliance and prevent foreign key breakage; pair with Partial Unique Indexes.",
      "Atomic UPSERT (`INSERT ... ON CONFLICT DO UPDATE`) eliminates application-level race conditions during concurrent writes.",
      "Always verify `WHERE` clause filters prior to executing `UPDATE` or `DELETE` statements to avoid overwriting production data."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod5Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-5');
  if (mod5Idx !== -1) {
    sqlCourseInDb.modules[mod5Idx] = masterModule5;
  } else {
    sqlCourseInDb.modules[4] = masterModule5;
  }
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 5!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod5Index = content.indexOf('"id": "sql-mod-5"');
const sqlMod6Index = content.indexOf('"id": "sql-mod-6"');

if (sqlMod5Index !== -1 && sqlMod6Index !== -1) {
  const mod5Start = content.lastIndexOf('{', sqlMod5Index);
  const mod6Start = content.lastIndexOf('{', sqlMod6Index);
  
  const beforeMod5 = content.slice(0, mod5Start);
  const afterMod5 = content.slice(mod6Start);
  
  const formattedMod5 = JSON.stringify(masterModule5, null, 6);
  
  content = beforeMod5 + formattedMod5 + ',\n\n      ' + afterMod5;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 5!');
}

const fs = require('fs');

const masterModule13 = {
  id: "sql-mod-13",
  title: "Module 13 — Views, Indexes & Database Optimization",
  description: "Master Database Performance Engineering & Architecture: Standard Virtual Views (CREATE VIEW, Updatable Views, Security Column Masking), Materialized Views (CREATE MATERIALIZED VIEW, REFRESH MATERIALIZED VIEW CONCURRENTLY), B-Tree Index Architecture (Root, Branch, Leaf TIDs, O(log N) logarithmic search), Composite Multi-Column Indexes, Leftmost Prefix Rule, Unique Indexes, Partial / Filtered Indexes (WHERE clause scoped), Expression / Functional Indexes (UPPER/LOWER), Specialized Indexes (Hash, GIN for JSONB, GiST), Cost-Based Optimizer (CBO Table Statistics), EXPLAIN ANALYZE Plan Inspection (Seq Scan, Index Scan, Index-Only Scan, Bitmap Heap Scan), Index Write Penalties, and Unused Index Cleanup.",
  completed: false,
  order: 13,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 13! As enterprise database tables grow to millions or billions of rows, query performance engineering becomes the top priority for database architects, system engineers, and backend developers. Unindexed queries cause high CPU utilization, disk I/O bottlenecks, and slow application latency. Views encapsulate complex query logic, Materialized Views cache expensive aggregate calculations physically on disk, and B-Tree Indexes enable sub-millisecond data lookups. Mastering indexing strategy, query execution plan analysis (`EXPLAIN ANALYZE`), and SARGable optimization is essential for senior database engineers.",
    objectives: [
      "Master Standard Virtual Views (CREATE VIEW): Encapsulating complex joins, simplifying query code, and enforcing column security masking",
      "Understand Updatable Virtual Views and rules for issuing INSERT/UPDATE statements through views",
      "Master Materialized Views (CREATE MATERIALIZED VIEW): Caching expensive aggregate summaries with zero-downtime background updates (REFRESH MATERIALIZED VIEW CONCURRENTLY)",
      "Deconstruct B-Tree Index Architecture: Root nodes, branch nodes, leaf node TIDs, and logarithmic $O(\\log N)$ search complexity",
      "Design Composite Multi-Column Indexes and enforce the strict Leftmost Prefix Rule",
      "Implement Specialized Indexes: Unique Indexes, Partial Filtered Indexes, Expression Functional Indexes, and GIN Indexes for JSONB",
      "Deconstruct the Cost-Based Optimizer (CBO) and table statistics (ANALYZE, column histograms, distinct value counts)",
      "Analyze Query Execution Plans using EXPLAIN ANALYZE (Seq Scan, Index Scan, Index-Only Scan, Bitmap Heap Scan)",
      "Evaluate Index Maintenance Overhead: Understanding INSERT/UPDATE/DELETE write penalties and dropping bloated unused indexes"
    ],
    sections: [
      {
        heading: "1. Virtual Views vs Materialized Views Architecture",
        text: "Views encapsulate complex SQL queries into reusable virtual tables:",
        table: {
          headers: ["View Type", "Physical Storage", "Query Execution Behavior", "Data Freshness", "Primary Enterprise Scenario"],
          rows: [
            ["Standard Virtual View", "Virtual (Stores SQL text in catalog)", "Executes underlying SQL query on-the-fly every time view is queried", "Always 100% Real-Time", "Simplifying complex joins & masking sensitive columns"],
            ["Materialized View", "Physical Disk Heap (Caches result rows on disk)", "Reads cached physical rows directly from disk pages without re-running query", "Snapshot (Updated via REFRESH MATERIALIZED VIEW)", "High-volume analytical dashboards & complex aggregate caching"]
          ]
        },
        bulletPoints: [
          "Security Column Masking: Virtual Views allow granting users access to calculated or masked fields without exposing raw table columns (e.g. `SELECT id, name, 'XXX-XX-' || RIGHT(ssn, 4) AS masked_ssn FROM employees`).",
          "Refreshing Materialized Views:",
          "• `REFRESH MATERIALIZED VIEW view_name;` (Default: Acquires an exclusive lock, blocking concurrent client read queries while refreshing).",
          "• `REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;` (Zero-Downtime Refresh: Updates cached rows in the background without blocking concurrent client reads; requires a unique index on the materialized view!)."
        ]
      },
      {
        heading: "2. Relational Index Architecture & B-Tree Mechanics",
        text: "An index is a specialized data structure (typically a self-balancing B-Tree) that stores column values in sorted order alongside Tuple IDs (TIDs/CTIDs) pointing to physical table heap blocks:",
        bulletPoints: [
          "B-Tree Search Complexity: Navigating a B-Tree index requires $O(\\log N)$ operations. Looking up a row in a 10,000,000 row table requires only ~3 to 4 index page reads!",
          "Composite Multi-Column Indexes & The Leftmost Prefix Rule:",
          "• A composite index created on `(country, state, city)` is sorted primarily by `country`, then `state`, then `city`.",
          "• Leftmost Prefix Rule: Queries filtering by `country` or `(country, state)` use the index. Queries filtering ONLY by `city` CANNOT use the index because the leftmost lead column (`country`) is omitted!",
          "Partial Indexes (Filtered Indexes):",
          "• `CREATE INDEX idx_active_users ON users (email) WHERE is_active = TRUE;`",
          "• Indexes ONLY matching rows, saving up to 90% of disk space and reducing index maintenance write penalties!",
          "Expression Indexes (Functional Indexes):",
          "• `CREATE INDEX idx_upper_email ON users (UPPER(email));` enables non-SARGable function calls like `WHERE UPPER(email) = 'TEST@GMAIL.COM'` to use B-Tree index lookups!",
          "GIN (Generalized Inverted Index): Specialized index for multi-value types (JSONB documents, array columns, full-text search)."
        ],
        table: {
          headers: ["Index Pattern", "Syntax Example", "Disk RAM Footprint", "Primary Enterprise Use Case"],
          rows: [
            ["Standard B-Tree", "CREATE INDEX idx_email ON users(email);", "Full (Indexes 100% of rows)", "Primary keys, foreign keys, exact equality lookups"],
            ["Composite Index", "CREATE INDEX idx_c_s ON users(country, state);", "Full (Multi-column keys)", "Multi-column filtering respecting Leftmost Prefix"],
            ["Partial Index", "CREATE INDEX idx ON users(email) WHERE active=TRUE;", "Tiny (Indexes filtered subset)", "Indexing active accounts or unfulfilled orders"],
            ["Expression Index", "CREATE INDEX idx ON users(LOWER(email));", "Full (Pre-computed expression)", "Case-insensitive searches or calculated formulas"],
            ["GIN Index", "CREATE INDEX idx ON users USING gin(preferences);", "Variable", "Fast key/value searches inside JSONB documents"]
          ]
        }
      },
      {
        heading: "3. Analyzing Execution Plans with EXPLAIN ANALYZE",
        text: "The `EXPLAIN ANALYZE` command executes a SQL statement and outputs the Cost-Based Optimizer's execution plan detailing physical scan nodes, estimated costs, and real timing metrics:",
        table: {
          headers: ["Scan Node Type", "Execution Behavior", "Performance Level", "When Engine Chooses Node"],
          rows: [
            ["Sequential Scan (Seq Scan)", "Scans 100% of table heap pages row-by-row", "Slow on large tables ($O(N)$)", "Un-indexed tables or fetching >20% of rows"],
            ["Index Scan", "Navigates B-Tree index to fetch table heap pages", "Ultra-Fast ($O(\\log N)$)", "Selective lookups on indexed columns"],
            ["Index Only Scan", "Fetches rows directly from B-Tree RAM pages (Skips heap)", "Fastest Possible", "All requested SELECT columns exist in index"],
            ["Bitmap Index Scan", "Scans index to build bitmap of matching pages, then reads heap", "Very Fast", "Combining multiple indexes or range queries"]
          ]
        },
        bulletPoints: [
          "Understanding Plan Cost Notation: `cost=0.00..450.12 rows=105 width=32`",
          "• `0.00`: Startup cost (cost to fetch first row).",
          "• `450.12`: Total estimated cost (CPU + Disk I/O units) to complete the node.",
          "• `rows=105`: Estimated number of rows output by the node.",
          "• `width=32`: Average byte width per returned row tuple."
        ]
      },
      {
        heading: "4. Index Maintenance Overhead & Storage Engineering Trade-Offs",
        text: "While indexes accelerate SELECT read queries, they impose storage and write penalties:",
        bulletPoints: [
          "Write Penalty: Every `INSERT`, `UPDATE`, or `DELETE` statement must update the main table heap AND all associated B-Tree index structures. Over-indexing tables degrades write throughput.",
          "Unused Index Cleanup: Monitor index usage via system catalogs (`pg_stat_user_indexes`) and drop unused or redundant indexes to free up RAM buffer pool memory."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Creating Virtual & Materialized Views with Concurrent Refresh",
        code: `-- 1. Standard Virtual View encapsulating multi-table customer summary
CREATE OR REPLACE VIEW v_customer_order_summary AS
SELECT 
    c.customer_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    c.email,
    COUNT(o.order_id) AS total_orders_placed,
    COALESCE(SUM(o.order_total), 0.00) AS lifetime_spend
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.email;

-- 2. Materialized View caching heavy monthly sales analytics on disk
CREATE MATERIALIZED VIEW mv_monthly_sales_summary AS
SELECT 
    DATE_TRUNC('month', order_date) AS sales_month,
    COUNT(order_id) AS order_count,
    SUM(order_total) AS gross_revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- Unique index required for zero-downtime concurrent refreshes!
CREATE UNIQUE INDEX uq_mv_monthly_sales ON mv_monthly_sales_summary (sales_month);

-- Refresh Materialized View concurrently in background without blocking reads
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_sales_summary;`,
        explanation: "Demonstrates Virtual Views for query encapsulation, Materialized Views for caching expensive aggregates, and zero-downtime background refreshes."
      },
      {
        title: "Advanced B-Tree Indexing Strategies & EXPLAIN ANALYZE Inspection",
        code: `-- 1. Composite B-Tree Index respecting Leftmost Prefix Rule
CREATE INDEX idx_orders_customer_status_date 
ON orders (customer_id, order_status, order_date DESC);

-- 2. Partial Index (Filters active records only)
CREATE INDEX idx_pending_orders 
ON orders (order_id) 
WHERE order_status = 'Pending';

-- 3. Expression Index for case-insensitive search
CREATE INDEX idx_users_lower_email 
ON users (LOWER(email));

-- 4. Inspecting Query Execution Plan with EXPLAIN ANALYZE
EXPLAIN ANALYZE
SELECT order_id, order_date, order_total
FROM orders
WHERE customer_id = 10482
  AND order_status = 'Pending'
ORDER BY order_date DESC;`,
        explanation: "Demonstrates composite indexes, partial indexes, expression indexes, and inspecting physical scan nodes using EXPLAIN ANALYZE."
      }
    ],
    bestPractices: [
      "Always create B-Tree indexes on Foreign Key columns to accelerate JOINs and avoid lock escalation.",
      "Place the most selective column first in composite indexes to respect the Leftmost Prefix Rule.",
      "Use Partial Indexes (`WHERE is_active = TRUE`) to keep index sizes small and save RAM buffer memory.",
      "Use Materialized Views for heavy reporting dashboards, refreshing them on a scheduled background cron job.",
      "Always analyze query execution plans with `EXPLAIN ANALYZE` to identify Sequential Scans and non-SARGable predicates."
    ],
    commonMistakes: [
      "Over-indexing tables with 15+ indexes, severely degrading `INSERT`, `UPDATE`, and `DELETE` write throughput.",
      "Creating a composite index on `(A, B, C)` and attempting to query by `C` alone, violating the Leftmost Prefix Rule.",
      "Assuming Virtual Views improve query performance; Virtual Views execute their underlying SQL query on-the-fly every time.",
      "Forgetting to create a unique index on a Materialized View, preventing `REFRESH MATERIALIZED VIEW CONCURRENTLY`."
    ],
    practiceExercise: {
      title: "Indexing Strategy & EXPLAIN ANALYZE Challenge",
      problem: "Perform the following two tasks:\n1. Explain why a query `SELECT * FROM users WHERE state = 'NY'` CANNOT use a composite B-Tree index created on `(last_name, first_name, state)`.\n\n2. Write a SQL DDL statement to create a Partial B-Tree Index named `idx_unpaid_invoices` on an `invoices` table (`customer_id`, `due_date`) that indexes ONLY rows where `status = 'Unpaid'`.",
      solutionCode: `-- Exercise 1 Explanation:
-- Leftmost Prefix Rule Violation: A composite index on (last_name, first_name, state) is sorted 
-- primarily by last_name. Querying by 'state' alone skips the leftmost lead columns, forcing a Sequential Scan.

-- Exercise 2 Partial Index Solution:
CREATE INDEX idx_unpaid_invoices 
ON invoices (customer_id, due_date) 
WHERE status = 'Unpaid';`
    },
    keyTakeaways: [
      "Virtual Views simplify query code; Materialized Views cache aggregate results physically on disk pages.",
      "B-Tree Indexes provide $O(\\log N)$ lookup performance by storing ordered keys alongside heap page pointers.",
      "Composite indexes require queries to filter by the Leftmost Prefix column to utilize the index.",
      "Partial Indexes (`WHERE condition`) reduce disk and RAM footprints by indexing only matching rows.",
      "`EXPLAIN ANALYZE` reveals whether the database engine executes an Index Scan, Index-Only Scan, or Sequential Scan."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod13Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-13');
  if (mod13Idx !== -1) sqlCourseInDb.modules[mod13Idx] = masterModule13;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 13!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod13Index = content.indexOf('"id": "sql-mod-13"');
const sqlMod14Index = content.indexOf('"id": "sql-mod-14"');

if (sqlMod13Index !== -1 && sqlMod14Index !== -1) {
  const mod13Start = content.lastIndexOf('{', sqlMod13Index);
  const mod14Start = content.lastIndexOf('{', sqlMod14Index);
  
  const beforeMod13 = content.slice(0, mod13Start);
  const afterMod13 = content.slice(mod14Start);
  
  const formattedMod13 = JSON.stringify(masterModule13, null, 6);
  
  content = beforeMod13 + formattedMod13 + ',\n\n      ' + afterMod13;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 13!');
}

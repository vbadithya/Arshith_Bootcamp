const fs = require('fs');

const masterModule8 = {
  id: "sql-mod-8",
  title: "Module 08 — DISTINCT, ORDER BY & LIMIT",
  description: "Master Result Set Presentation & Pagination Architecture: Single & Multi-Column SELECT DISTINCT Deduplication, Memory Allocation (work_mem Hash vs Sort Aggregates), PostgreSQL DISTINCT ON (expression), Deterministic Multi-Column ORDER BY Sorting (ASC/DESC), Custom CASE Statement Priority Sorting, Expression Sorting, NULL Positioning (NULLS FIRST / NULLS LAST), ANSI FETCH FIRST n ROWS ONLY, Web API Pagination Mechanics (LIMIT n OFFSET m), Deep Pagination Penalty Analysis, Keyset / Cursor-Based Composite Tuple Pagination (WHERE (created_at, id) < (:last_time, :last_id)), and Top-N Tie-Breaking Strategies.",
  completed: false,
  order: 8,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 8! Formatting, ordering, deduplicating, and controlling result set output is a core requirement for database presentation layers, analytical reporting engines, and high-concurrency web application APIs. The DISTINCT keyword eliminates redundant duplicate row tuples from output streams, ORDER BY sorts result sets deterministically according to explicit ordering rules, and LIMIT/OFFSET powers multi-page web application pagination. Mastering output formatting and understanding low-level sorting algorithms (Hash Aggregates vs Sort Aggregates in RAM `work_mem` buffer memory) is essential for database software engineers and system architects.",
    objectives: [
      "Master Tuple Deduplication using SELECT DISTINCT across single and multiple composite columns",
      "Deconstruct RAM Memory Allocation: Hash Aggregates vs Sort Aggregates in work_mem memory",
      "Utilize PostgreSQL SELECT DISTINCT ON (expression) to retain the top row per unique group",
      "Understand Deterministic Result Set Sorting using multi-column ORDER BY (ASC vs DESC)",
      "Execute Custom Priority Sorting using CASE WHEN statements (e.g. Urgent -> High -> Normal)",
      "Control NULL Positioning in sorted outputs using NULLS FIRST and NULLS LAST overrides",
      "Compare Vendor Pagination Syntax: LIMIT / OFFSET vs ANSI SQL FETCH FIRST n ROWS ONLY",
      "Analyze the Deep Pagination Performance Penalty of OFFSET-based queries on large tables",
      "Implement Keyset / Cursor-Based Composite Tuple Pagination (WHERE (created_at, id) < (:last_time, :last_id)) for sub-millisecond API response feeds",
      "Implement Deterministic Top-N Query Patterns with Primary Key tie-breaking rules"
    ],
    sections: [
      {
        heading: "1. Deduplication Mechanics: SELECT DISTINCT, Memory Allocation & DISTINCT ON",
        text: "Relational table queries often return duplicate row tuples when projecting specific subset columns. The DISTINCT keyword instructs the database engine to perform deduplication:",
        bulletPoints: [
          "Single-Column Deduplication: `SELECT DISTINCT department FROM employees;` scans output rows and returns unique department strings.",
          "Multi-Column Tuple Deduplication: `SELECT DISTINCT department, status FROM employees;` compares the combined tuple value across all projected columns.",
          "Engine Memory Allocation (work_mem):",
          "• Hash Aggregates: The engine builds an in-memory hash table of unique tuple keys inside RAM (`work_mem`). Ideal for unsorted data.",
          "• Sort Aggregates: The engine sorts output rows first, then scans sequentially to drop adjacent duplicates. Used when data is pre-sorted by an index.",
          "• Spill to Disk (External Sort): If deduplication memory exceeds `work_mem`, the engine spills temporary work files to disk, drastically increasing query latency.",
          "PostgreSQL DISTINCT ON (expression):",
          "• Standard ANSI SQL `DISTINCT` operates on ALL projected columns in `SELECT`.",
          "• PostgreSQL `DISTINCT ON (department)` evaluates uniqueness based ONLY on the specified group key, while allowing you to project other un-deduplicated columns!",
          "• Must be paired with `ORDER BY department, salary DESC` to control which specific row per group is retained (e.g., retrieving the highest-paid employee per department in a single query pass)."
        ],
        table: {
          headers: ["Deduplication Method", "Syntax Example", "RAM Memory Strategy", "Primary Enterprise Use Case"],
          rows: [
            ["Single-Column DISTINCT", "SELECT DISTINCT category FROM products;", "Hash Aggregate (work_mem)", "Populating UI dropdown selection lists"],
            ["Multi-Column DISTINCT", "SELECT DISTINCT city, state FROM addresses;", "Tuple Hash Aggregate", "Extracting unique geographical regions"],
            ["PostgreSQL DISTINCT ON", "SELECT DISTINCT ON (dept) dept, name, salary...", "Sort Aggregate with ORDER BY", "Retrieving top record per categorical group"]
          ]
        }
      },
      {
        heading: "2. Advanced Result Set Sorting: Expressions, Custom Priority & NULL Positioning",
        text: "Without an explicit `ORDER BY` clause, relational database engines return rows in arbitrary, non-deterministic order based on physical disk page storage. Adding `ORDER BY` enforces strict sorting order:",
        bulletPoints: [
          "Multi-Column Precedence ($A \\rightarrow B \\rightarrow C$): `ORDER BY department ASC, salary DESC, employee_id ASC` sorts primarily by department alphabetically, breaks ties by highest salary, and breaks secondary ties by primary key ID.",
          "Custom Priority Sorting (CASE Statements): Sort rows by business priority rules rather than alphabetical or numerical order:",
          "• `ORDER BY CASE priority WHEN 'Critical' THEN 1 WHEN 'High' THEN 2 WHEN 'Medium' THEN 3 ELSE 4 END, created_at DESC;`",
          "Sorting by Calculated Expressions & Aliases: Because `ORDER BY` executes in Step 7 (AFTER `SELECT` in Step 5), you can sort by calculated aliases: `SELECT salary * 12 AS annual_pay FROM employees ORDER BY annual_pay DESC;`.",
          "Explicit NULL Positioning (NULLS FIRST / NULLS LAST):",
          "• Relational engines differ in default NULL sorting (PostgreSQL puts NULLs last in ASC, first in DESC; MySQL puts NULLs first in ASC).",
          "• Explicit Overrides: `ORDER BY bonus DESC NULLS LAST` guarantees missing bonus rows appear at the bottom of executive compensation reports!",
          "• MySQL Workaround: In MySQL (which lacks native NULLS LAST), use boolean sorting: `ORDER BY (bonus IS NULL) ASC, bonus DESC`."
        ],
        table: {
          headers: ["Sorting Option", "Syntax Pattern", "Engine Execution Rule", "Custom Override / Workaround"],
          rows: [
            ["Ascending Sort", "ORDER BY price ASC", "Lowest values first (A-Z, 0-9)", "Default if ASC/DESC omitted"],
            ["Descending Sort", "ORDER BY price DESC", "Highest values first (Z-A, 9-0)", "Must explicitly specify DESC"],
            ["Custom Priority Sort", "ORDER BY CASE status WHEN 'Urgent' THEN 1...", "Evaluates CASE expression per row", "Sorts by custom integer rank"],
            ["Explicit NULL Positioning", "ORDER BY bonus DESC NULLS LAST", "Forces NULLs to top or bottom", "MySQL: ORDER BY (col IS NULL) ASC"]
          ]
        }
      },
      {
        heading: "3. Web API Pagination: Offset-Based vs Keyset Cursor-Based Pagination",
        text: "Web, mobile, and API applications present large datasets across multi-page views (Page 1, Page 2, Page 3...). Two primary strategies exist for implementing database pagination:",
        bulletPoints: [
          "1. Offset-Based Pagination (LIMIT n OFFSET m / ANSI FETCH FIRST):",
          "• `LIMIT n` (or `FETCH FIRST n ROWS ONLY`): Page Size (number of items returned per page, e.g., `LIMIT 20`).",
          "• `OFFSET m`: Skip Count, calculated as `OFFSET = (PageNumber - 1) * PageSize`.",
          "• Page 1: `LIMIT 20 OFFSET 0` | Page 2: `LIMIT 20 OFFSET 20` | Page 3: `LIMIT 20 OFFSET 40`.",
          "• THE DEEP PAGINATION PERFORMANCE PENALTY: When requesting Page 10,000 (`OFFSET 200000 LIMIT 20`), the database engine MUST read, parse, sort, and discard 200,000 rows from disk before returning the 20 target rows! Query execution latency degrades exponentially.",
          "2. Keyset / Cursor-Based Composite Tuple Pagination (High-Performance Alternative):",
          "• Remembers the last seen composite tuple `(created_at, id)` from the bottom of the previous feed page:",
          "• Syntax: `WHERE (created_at, article_id) < (:last_created_at, :last_article_id) ORDER BY created_at DESC, article_id DESC LIMIT 20;`",
          "• Uses a composite B-Tree index scan to jump directly to target rows in sub-milliseconds ($O(\\log N)$ complexity), regardless of page depth! Page 10,000 executes just as fast as Page 1!"
        ],
        table: {
          headers: ["Pagination Strategy", "Syntax Pattern", "Page 1 Latency", "Page 10,000 Latency", "Best Enterprise Application"],
          rows: [
            ["Offset-Based Pagination", "LIMIT 20 OFFSET 200000", "Sub-millisecond", "Very Slow (Scans & discards 200k rows)", "Simple admin dashboards, small datasets"],
            ["Keyset / Cursor Pagination", "WHERE (created_at, id) < (:t, :id)...", "Sub-millisecond", "Sub-millisecond ($O(\\log N)$ B-Tree lookup)", "Infinite scroll feeds, mobile APIs, high-volume apps"]
          ]
        }
      },
      {
        heading: "4. Deterministic Top-N Queries & Tie-Breaking Strategies",
        text: "When requesting Top-N items (e.g. Top 5 Best-Selling Products), queries MUST be deterministic:",
        bulletPoints: [
          "Non-Deterministic Sorting Trap: If 10 products share the exact same `sales_count = 100`, executing `ORDER BY sales_count DESC LIMIT 5` will return 5 arbitrary products. Subsequent API calls can return different items across page breaks!",
          "Deterministic Tie-Breaker Rule: ALWAYS append the unique Primary Key as the final tie-breaker column in `ORDER BY`: `ORDER BY sales_count DESC, product_id ASC LIMIT 5;`. This guarantees 100% deterministic, consistent pagination output across all client sessions."
        ]
      }
    ],
    codeExamples: [
      {
        title: "PostgreSQL DISTINCT ON, Custom CASE Priority Sorting & NULLS LAST",
        code: `-- 1. PostgreSQL DISTINCT ON: Retrieve highest-paid active employee per department
SELECT DISTINCT ON (e.department)
    e.department,
    e.employee_id,
    e.first_name,
    e.last_name,
    e.salary,
    e.bonus
FROM enterprise_employees AS e
WHERE e.is_active = TRUE
-- ORDER BY MUST start with the DISTINCT ON column(s), followed by target sort rules
ORDER BY e.department ASC, e.salary DESC NULLS LAST, e.employee_id ASC;

-- 2. Custom Business Priority Sorting using CASE WHEN statements
SELECT 
    ticket_id,
    title,
    priority_level,
    created_at
FROM support_tickets
WHERE status != 'Resolved'
ORDER BY 
    CASE priority_level
        WHEN 'Urgent'   THEN 1
        WHEN 'High'     THEN 2
        WHEN 'Medium'   THEN 3
        WHEN 'Low'      THEN 4
        ELSE 5
    END ASC,
    created_at ASC,
    ticket_id ASC;`,
        explanation: "Demonstrates PostgreSQL DISTINCT ON (department) combined with ORDER BY department ASC, salary DESC NULLS LAST, and custom business priority sorting using CASE WHEN expressions."
      },
      {
        title: "High-Performance API Pagination: Offset vs Composite Keyset Cursor",
        code: `-- Strategy 1: Standard Offset-Based Pagination for Web Dashboard (Page 4, Page Size = 25)
-- Offset Math: (4 - 1) * 25 = 75
SELECT product_id, product_name, category, unit_price
FROM products
WHERE is_available = TRUE
ORDER BY category ASC, product_id ASC
LIMIT 25 OFFSET 75;

-- Strategy 2: High-Performance Composite Keyset Cursor Pagination for Mobile Feeds
-- Remembers last (created_at, article_id) tuple from the bottom of the previous page
SELECT 
    article_id,
    title,
    author_name,
    created_at
FROM articles
WHERE is_published = TRUE
  -- Composite Tuple Comparison utilizing B-Tree Index (created_at DESC, article_id DESC)
  AND (created_at, article_id) < ('2026-10-01 14:30:00+00'::timestamptz, 10482)
ORDER BY created_at DESC, article_id DESC
LIMIT 25;`,
        explanation: "Compares standard Offset-Based Pagination (LIMIT 25 OFFSET 75) with high-performance Composite Keyset Cursor Pagination utilizing tuple comparison (created_at, article_id) < (:time, :id)."
      }
    ],
    bestPractices: [
      "Always include an explicit `ORDER BY` clause when using `LIMIT`/`OFFSET`; without `ORDER BY`, result row ordering is non-deterministic.",
      "Always append a unique Primary Key as a final tie-breaker column in `ORDER BY` to guarantee consistent pagination across API pages.",
      "Use `NULLS LAST` (or `NULLS FIRST`) explicitly to prevent engine-dependent default NULL sorting in analytical reports.",
      "Use Keyset Cursor-Based Pagination (`WHERE (created_at, id) < (:time, :id)`) instead of `OFFSET` for high-volume mobile APIs and infinite scroll feeds.",
      "Leverage PostgreSQL `DISTINCT ON (column)` to retrieve the top record per categorical group cleanly."
    ],
    commonMistakes: [
      "Using `LIMIT` and `OFFSET` without an `ORDER BY` clause, causing API endpoints to return arbitrary rows that change randomly.",
      "Relying on deep `OFFSET` pagination (`OFFSET 500000`), forcing the database engine to read and discard half a million rows on every request.",
      "Forgetting tie-breaker columns in `ORDER BY`, causing duplicate or missing items across paginated web pages when values match.",
      "Assuming `DISTINCT` applies to only the first column listed in `SELECT`; `DISTINCT` evaluates the combination of ALL projected columns."
    ],
    practiceExercise: {
      title: "Result Formatting & Keyset Pagination Challenge",
      problem: "Perform the following two tasks:\n1. Calculate the exact `OFFSET` value required for Page 7 when the Page Size (`LIMIT`) is set to 25 items per page.\n\n2. Write a SQL query for a mobile app feed that retrieves the 15 most recently published articles (`article_id`, `title`, `published_at`) that were published *before* '2026-10-01 12:00:00+00', using Keyset Cursor Pagination.",
      solutionCode: `-- Exercise 1 Offset Calculation Solution:
-- Formula: OFFSET = (PageNumber - 1) * PageSize
-- OFFSET = (7 - 1) * 25 = 6 * 25 = 150.
-- SQL Clause: LIMIT 25 OFFSET 150.

-- Exercise 2 Keyset Cursor Query Solution:
SELECT article_id, title, published_at
FROM articles
WHERE published_at < '2026-10-01 12:00:00+00'
ORDER BY published_at DESC, article_id DESC
LIMIT 15;`
    },
    keyTakeaways: [
      "DISTINCT operates across all projected columns; PostgreSQL `DISTINCT ON (expression)` retains the first row per unique group.",
      "`ORDER BY` executes in Step 7 of query processing, allowing sorting by calculated column aliases.",
      "Use `NULLS FIRST` or `NULLS LAST` to control missing value positions explicitly.",
      "Offset-Based Pagination (`LIMIT n OFFSET m`) suffers from performance degradation at deep offsets.",
      "Keyset Cursor Pagination (`WHERE (created_at, id) < (:time, :id)`) utilizes B-Tree indexes for $O(\\log N)$ sub-millisecond pagination at any page depth."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod8Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-8');
  if (mod8Idx !== -1) sqlCourseInDb.modules[mod8Idx] = masterModule8;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 8!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod8Index = content.indexOf('"id": "sql-mod-8"');
const sqlMod9Index = content.indexOf('"id": "sql-mod-9"');

if (sqlMod8Index !== -1 && sqlMod9Index !== -1) {
  const mod8Start = content.lastIndexOf('{', sqlMod8Index);
  const mod9Start = content.lastIndexOf('{', sqlMod9Index);
  
  const beforeMod8 = content.slice(0, mod8Start);
  const afterMod8 = content.slice(mod9Start);
  
  const formattedMod8 = JSON.stringify(masterModule8, null, 6);
  
  content = beforeMod8 + formattedMod8 + ',\n\n      ' + afterMod8;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 8!');
}

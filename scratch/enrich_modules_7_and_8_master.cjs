const fs = require('fs');

const masterModule7 = {
  id: "sql-mod-7",
  title: "Module 07 — Filtering Data with WHERE & Operators",
  description: "Master Row-Level Data Filtering: SARGable Queries vs Non-SARGable Index Traps, Functional B-Tree Expression Indexes, Comparison Operators (=, <>, !=, <, >, <=, >=), Inclusive Ranges (BETWEEN ... AND ...), Set Membership (IN, NOT IN), Three-Valued Logic (3VL: TRUE, FALSE, UNKNOWN), IS NULL / IS NOT NULL, Null-Safe Equality (IS DISTINCT FROM), The Catastrophic NOT IN (..., NULL) Trap, Boolean Precedence (NOT > AND > OR), Short-Circuit Evaluation, Pattern Matching (LIKE, ILIKE, %, _), Wildcard Escaping, and POSIX Regular Expressions (~, ~*).",
  completed: false,
  order: 7,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 7! The WHERE clause is the primary mechanism for restricting query result sets to rows that satisfy explicit boolean filtering criteria. In relational database engines, the WHERE clause is evaluated during Step 2 of the 8-step logical execution pipeline—filtering raw table heap rows *before* any grouping, aggregate calculations, or sorting take place. Mastering WHERE clause operators, Three-Valued Logic (3VL), parenthetical boolean precedence, and SARGable index optimization is essential for writing high-performance database queries across multi-million row datasets.",
    objectives: [
      "Master the WHERE clause role in Step 2 of the 8-step logical execution pipeline",
      "Understand SARGable Queries (Search Argumentable): Writing predicates that utilize B-Tree index scans",
      "Avoid Non-SARGable Index Traps: Why wrapping columns in functions (UPPER(), YEAR()) forces full table scans",
      "Utilize Expression Indexes (CREATE INDEX ... ON UPPER(col)) to optimize non-SARGable functions",
      "Master Comparison Operators (=, <>, !=, <, >, <=, >=) and Range Filtering (BETWEEN ... AND ...)",
      "Evaluate Set Membership with IN and analyze the catastrophic NOT IN (..., NULL) trap",
      "Deconstruct Three-Valued Logic (3VL): Handling TRUE, FALSE, and UNKNOWN with IS NULL and IS DISTINCT FROM",
      "Enforce Boolean Operator Precedence (NOT > AND > OR) using explicit parenthetical scoping",
      "Master String Pattern Matching: LIKE, ILIKE, Percent (%), Underscore (_), ESCAPE clauses, and POSIX Regex (~, ~*)"
    ],
    sections: [
      {
        heading: "1. SARGable Queries vs Non-SARGable Index Traps & Expression Indexes",
        text: "A query predicate is SARGable (Search Argumentable) if the database optimizer can use an existing B-Tree index to navigate directly to matching rows ($O(\\log N)$ complexity). Writing non-SARGable queries forces the engine to perform slow Full Table Scans ($O(N)$ complexity) on millions of rows:",
        table: {
          headers: ["Predicate Category", "Non-SARGable Syntax (Index Disabled!)", "SARGable Syntax (B-Tree Index Active!)", "Performance Impact"],
          rows: [
            ["Function on Column", "WHERE UPPER(email) = 'USER@TEST.COM'", "WHERE email = 'user@test.com'", "SARGable is ~1,000x faster"],
            ["Date Part Function", "WHERE YEAR(created_at) = 2026", "WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'", "SARGable utilizes date index"],
            ["Math on Column", "WHERE salary * 12 > 120000", "WHERE salary > 10000", "SARGable isolates column"],
            ["Wildcard Prefix", "WHERE name LIKE '%Smith'", "WHERE name LIKE 'Smith%'", "Leading % forces full scan"]
          ]
        },
        bulletPoints: [
          "Golden Rule of Index Utilization: NEVER wrap indexed column names inside functions (e.g. `UPPER(col)`, `DATE(col)`, `ROUND(col)`) on the left-hand side of a WHERE predicate! Always isolate the bare column on the left side of the operator.",
          "Functional Expression Indexes: If an application MUST perform case-insensitive queries like `UPPER(email)`, you can create a Functional Expression Index in PostgreSQL: `CREATE INDEX idx_users_upper_email ON users (UPPER(email));`. This allows non-SARGable function calls to use a dedicated pre-computed B-Tree index!"
        ]
      },
      {
        heading: "2. Comparison, Range & Set Membership Operators Matrix",
        text: "Filtering operators evaluate boolean expressions to determine which rows are returned:",
        table: {
          headers: ["Operator", "Syntax Pattern", "Description & Behavior", "Index Friendly?"],
          rows: [
            ["Comparison", "salary >= 75000.00", "Standard equality and inequality comparisons (=, <>, !=, <, >, <=, >=)", "YES (B-Tree Index)"],
            ["BETWEEN ... AND", "hire_date BETWEEN '2025-01-01' AND '2025-12-31'", "Inclusive range test (includes both lower and upper endpoints)", "YES"],
            ["IN (List)", "department IN ('IT', 'Finance', 'Security')", "Matches any row value that matches an element in the explicit list", "YES"],
            ["NOT IN", "status NOT IN ('Terminated', 'Archived')", "Excludes rows matching any list element (DANGER if list contains NULL!)", "YES (Unless NULL is present)"],
            ["IS NULL / IS NOT NULL", "phone_number IS NULL", "Tests if a column contains a missing NULL value", "YES (In modern RDBMS)"],
            ["IS DISTINCT FROM", "col1 IS DISTINCT FROM col2", "Null-safe equality comparison (returns TRUE even if one value is NULL)", "YES"]
          ]
        }
      },
      {
        heading: "3. Three-Valued Logic (3VL) & The NOT IN (..., NULL) Trap",
        text: "In standard binary computer logic, expressions evaluate to either TRUE or FALSE. Relational SQL uses Three-Valued Logic (3VL), introducing a third state: UNKNOWN (resulting from operations on NULL values):",
        bulletPoints: [
          "3VL Truth Tables:",
          "• `TRUE AND UNKNOWN` -> `UNKNOWN` | `TRUE OR UNKNOWN` -> `TRUE`",
          "• `FALSE AND UNKNOWN` -> `FALSE` | `FALSE OR UNKNOWN` -> `UNKNOWN`",
          "• `NOT (UNKNOWN)` -> `UNKNOWN`",
          "Why 'col = NULL' Fails: Comparing anything to NULL using `= NULL` or `!= NULL` yields `UNKNOWN`, which evaluates as `FALSE` in WHERE clauses, returning zero rows!",
          "Null-Safe Equality (IS DISTINCT FROM): Evaluates whether two values are distinct, handling NULLs gracefully without yielding UNKNOWN (`NULL IS DISTINCT FROM NULL` returns `FALSE`; `5 IS DISTINCT FROM NULL` returns `TRUE`).",
          "THE CATASTROPHIC 'NOT IN (..., NULL)' TRAP:",
          "• Consider: `WHERE status NOT IN ('Active', 'Pending', NULL)`",
          "• Internally, SQL expands `NOT IN` to: `status != 'Active' AND status != 'Pending' AND status != NULL`.",
          "• Because `status != NULL` evaluates to `UNKNOWN`, the entire `AND` expression evaluates to `UNKNOWN`/`FALSE` for EVERY ROW in the table! The query returns ZERO rows unconditionally!",
          "• Solution: Always filter out NULLs before using `NOT IN` (or use `NOT EXISTS`)."
        ]
      },
      {
        heading: "4. Boolean Logic Precedence & Parenthetical Scoping",
        text: "When combining multiple filtering conditions, operator precedence determines the order of evaluation:",
        bulletPoints: [
          "Operator Precedence Order: `NOT` is evaluated first, `AND` is evaluated second, and `OR` is evaluated third ($NOT > AND > OR$).",
          "Catastrophic Security Logic Bug Example:",
          "• Query: `WHERE department = 'IT' OR department = 'Sales' AND status = 'Active'`",
          "• Because `AND` takes precedence over `OR`, SQL evaluates this as: `department = 'IT' OR (department = 'Sales' AND status = 'Active')`!",
          "• Consequence: ALL employees in the IT department are returned, INCLUDING terminated/inactive IT employees! Security checks are completely bypassed.",
          "• Correct Scoped Query: `WHERE (department = 'IT' OR department = 'Sales') AND status = 'Active'`.",
          "Short-Circuit Evaluation: Relational engines evaluate boolean expressions left-to-right and stop as soon as the result is guaranteed (e.g. if the left side of `AND` is `FALSE`, the right side is skipped)."
        ]
      },
      {
        heading: "5. Pattern Matching Mechanics: LIKE, ILIKE, Wildcards & Regex",
        text: "Searching text data requires flexible pattern matching operators:",
        bulletPoints: [
          "Percent Wildcard (%): Matches zero, one, or multiple arbitrary characters (`'A%'` matches `'A'`, `'Alex'`, `'Amanda'`).",
          "Underscore Wildcard (_): Matches exactly one single character (`'_cat'` matches `'cat'`, `'hat'`, but NOT `'flat'`).",
          "LIKE vs ILIKE:",
          "• `LIKE`: Case-sensitive pattern matching (`'admin%'` does NOT match `'Admin'`).",
          "• `ILIKE`: Case-insensitive pattern matching (PostgreSQL extension: `'admin%'` matches `'Admin'`, `'ADMIN'`).",
          "Escaping Wildcards: To search for literal `%` or `_` characters inside text, specify an `ESCAPE` clause:",
          "• `WHERE discount_code LIKE '10\%' ESCAPE '\'` (Matches literal string `'10%'`).",
          "Regular Expression Matching (~ and ~*): PostgreSQL provides POSIX regex operators:",
          "• `WHERE email ~ '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'` (Enforces regex email validation)."
        ]
      }
    ],
    codeExamples: [
      {
        title: "SARGable Enterprise Risk & Compliance Filtering Query",
        code: `-- Retrieve active employees hired in 2025/2026 in IT or Finance earning between $60k and $120k with verified email
SELECT 
    e.employee_id, 
    e.first_name, 
    e.department, 
    e.salary, 
    e.hire_date
FROM enterprise_employees AS e
WHERE 
    -- 1. SARGable Date Range (Avoids YEAR(hire_date) index trap!)
    e.hire_date >= '2025-01-01' AND e.hire_date <= '2026-12-31'
    
    -- 2. Explicit Parentheses enforcing OR precedence
    AND (e.department IN ('IT', 'Finance', 'Security'))
    
    -- 3. Inclusive Range Filtering
    AND (e.salary BETWEEN 60000.00 AND 120000.00)
    
    -- 4. Explicit NULL check
    AND (e.email IS NOT NULL);`,
        explanation: "Demonstrates SARGable date range predicates, parenthetical scoping surrounding OR/IN conditions, inclusive range filtering with BETWEEN, and IS NOT NULL testing."
      },
      {
        title: "Pattern Matching, Wildcard Escaping & POSIX Regex Security Filtering",
        code: `-- 1. Case-insensitive wildcard pattern matching with ILIKE
SELECT user_id, username, email
FROM users
WHERE email ILIKE 'admin_%@enterprise.com';

-- 2. Escaping literal percent (%) and underscore (_) characters
SELECT promo_id, promo_code, discount_percentage
FROM promotions
WHERE promo_code LIKE 'SUMMER\_2026\_10\%' ESCAPE '\';

-- 3. Advanced POSIX Regular Expression matching in PostgreSQL
SELECT user_id, email, phone_number
FROM users
WHERE email ~* '^[a-z0-9._%+-]+@(tech|cyber|dev)\.io$'
  AND phone_number IS NOT NULL;`,
        explanation: "Demonstrates case-insensitive ILIKE pattern matching, escaping literal wildcards with ESCAPE '\\', and POSIX regex email domain validation using ~*."
      }
    ],
    bestPractices: [
      "Always write SARGable predicates: keep indexed columns bare on the left side of operators (e.g. `col >= '2026-01-01'` instead of `YEAR(col) = 2026`).",
      "Always wrap `OR` conditions inside explicit parentheses when combining them with `AND` conditions.",
      "Never use `= NULL` or `!= NULL`; always use `IS NULL` or `IS NOT NULL`.",
      "Be extremely cautious with `NOT IN` subqueries; if the subquery returns even a single `NULL`, the entire query returns zero rows. Use `NOT EXISTS` instead.",
      "Avoid leading wildcards in `LIKE` queries (e.g. `LIKE '%search'`) unless necessary, as leading wildcards disable B-Tree index scans."
    ],
    commonMistakes: [
      "Wrapping indexed columns in functions (e.g. `WHERE UPPER(email) = 'TEST@GMAIL.COM'`), forcing the engine to perform full table scans on millions of rows.",
      "Neglecting parenthetical scoping in `WHERE dept = 'IT' OR dept = 'Sales' AND status = 'Active'`, accidentally bypassing security filters for IT staff.",
      "Executing `WHERE status NOT IN ('Active', NULL)`, causing the query to return zero rows unconditionally due to Three-Valued Logic.",
      "Using standard `=` to compare NULL values (`WHERE phone = NULL`), which yields `UNKNOWN`/`FALSE` and fails to retrieve NULL records."
    ],
    practiceExercise: {
      title: "SARGable Predicates & Three-Valued Logic Challenge",
      problem: "Perform the following two tasks:\n1. Rewrite the following non-SARGable query so that it becomes SARGable and can utilize a B-Tree index on `created_at`:\n   `SELECT * FROM orders WHERE YEAR(created_at) = 2026 AND MONTH(created_at) = 6;` \n\n2. Explain why the query `SELECT * FROM products WHERE category_id NOT IN (1, 2, NULL);` returns zero rows, and write the corrected query using `IS NOT NULL` or `NOT EXISTS`.",
      solutionCode: `-- Exercise 1 SARGable Rewrite Solution:
SELECT * 
FROM orders 
WHERE created_at >= '2026-06-01' 
  AND created_at < '2026-07-01';

-- Exercise 2 Explanation & Solution:
-- Explanation: NOT IN expands to: category_id != 1 AND category_id != 2 AND category_id != NULL.
-- Because category_id != NULL evaluates to UNKNOWN under 3VL, the entire AND chain evaluates to UNKNOWN/FALSE for all rows!

-- Corrected Query Solution:
SELECT * 
FROM products 
WHERE category_id NOT IN (1, 2) 
  AND category_id IS NOT NULL;`
    },
    keyTakeaways: [
      "The WHERE clause runs in Step 2 of query execution, filtering raw rows before grouping or aggregation.",
      "SARGable queries keep indexed columns bare on the left side of operators, enabling $O(\\log N)$ B-Tree index scans.",
      "SQL uses Three-Valued Logic (3VL: TRUE, FALSE, UNKNOWN). Always use `IS NULL` or `IS NOT NULL` instead of `= NULL`.",
      "Never include `NULL` in `NOT IN` lists, or the query will unconditionally return zero rows.",
      "Operator precedence is `NOT > AND > OR`. Always use explicit parentheses around `OR` conditions."
    ]
  }
};

const masterModule8 = {
  id: "sql-mod-8",
  title: "Module 08 — DISTINCT, ORDER BY & LIMIT",
  description: "Master Result Set Presentation: Single & Multi-Column SELECT DISTINCT Deduplication, PostgreSQL DISTINCT ON (expression), Deterministic Multi-Column ORDER BY Sorting (ASC/DESC), Expression Sorting, NULL Positioning (NULLS FIRST / NULLS LAST), Deterministic Web API Pagination Mechanics (LIMIT n OFFSET m), Keyset Cursor Pagination (WHERE id > last_id), and Top-N Ranking Strategies.",
  completed: false,
  order: 8,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 8! Formatting and controlling result set output is essential for data presentation, reporting analytics, and high-performance web applications. The DISTINCT keyword eliminates redundant duplicate rows from output streams, ORDER BY sorts result tuples deterministically, and LIMIT/OFFSET powers paginated web application APIs. Mastering output formatting and understanding low-level sorting algorithms (Sort Aggregates vs Hash Aggregates in RAM buffer memory) is critical for database software engineers.",
    objectives: [
      "Master Tuple Deduplication using SELECT DISTINCT across single and multiple columns",
      "Utilize PostgreSQL SELECT DISTINCT ON (expression) to retain the first row per group",
      "Understand Deterministic Result Set Sorting using ORDER BY (ASC vs DESC)",
      "Sort query outputs by expressions, calculated aliases, and custom field values",
      "Control NULL Positioning in sorted outputs using NULLS FIRST and NULLS LAST overrides",
      "Master Web API Pagination Mechanics using LIMIT (Page Size) and OFFSET (Skip Count)",
      "Evaluate Deep Pagination Performance Penalties and implement Keyset Cursor-Based Pagination",
      "Implement Deterministic Top-N Query Patterns with primary key tie-breakers"
    ],
    sections: [
      {
        heading: "1. Deduplication Mechanics: SELECT DISTINCT & DISTINCT ON",
        text: "Relational tables can return duplicate row tuples when projecting specific subset columns. The DISTINCT keyword forces the database engine to perform deduplication:",
        bulletPoints: [
          "Single-Column Deduplication: `SELECT DISTINCT department FROM employees;` returns unique category names.",
          "Multi-Column Tuple Deduplication: `SELECT DISTINCT department, status FROM employees;` compares the combined tuple value across all projected columns.",
          "Engine Execution Cost: Deduplication requires the engine to perform a Hash Aggregate or Sort Aggregate in RAM (`work_mem`), adding CPU and memory overhead.",
          "PostgreSQL DISTINCT ON (expression):",
          "• Standard ANSI SQL DISTINCT operates on ALL projected columns in SELECT.",
          "• PostgreSQL `DISTINCT ON (department)` evaluates uniqueness based ONLY on the specified key, while allowing you to select other columns!",
          "• Must be paired with `ORDER BY department, salary DESC` to control which row per distinct group is retained (e.g., retrieving the highest-paid employee per department in a single query)."
        ],
        table: {
          headers: ["Deduplication Pattern", "Syntax Example", "Engine Sorting Strategy", "Primary Use Case"],
          rows: [
            ["Single-Column DISTINCT", "SELECT DISTINCT category FROM products;", "Hash / Sort Aggregate", "Fetching dropdown selection lists"],
            ["Multi-Column DISTINCT", "SELECT DISTINCT city, state FROM addresses;", "Tuple Hash Aggregate", "Finding unique geographical regions"],
            ["PostgreSQL DISTINCT ON", "SELECT DISTINCT ON (dept) dept, name, salary...", "Sort Aggregate with ORDER BY", "Retrieving top record per category group"]
          ]
        }
      },
      {
        heading: "2. Result Set Sorting with ORDER BY & NULL Positioning",
        text: "Without an explicit `ORDER BY` clause, relational database engines return rows in arbitrary, non-deterministic order. Adding `ORDER BY` enforces strict sorting order:",
        bulletPoints: [
          "Ascending (ASC): Default sort order (A-Z, 0-9, oldest to newest dates).",
          "Descending (DESC): Reverse sort order (Z-A, 9-0, newest to oldest dates).",
          "Multi-Column Sorting: `ORDER BY department ASC, salary DESC` sorts primarily by department alphabetically, then breaks ties within each department by highest salary first.",
          "Sorting by Expressions & Aliases: Because `ORDER BY` executes in Step 7 (AFTER `SELECT` in Step 5), you can sort by calculated aliases: `SELECT salary * 12 AS annual_pay FROM employees ORDER BY annual_pay DESC;`.",
          "Explicit NULL Positioning (NULLS FIRST / NULLS LAST):",
          "• Relational engines differ in default NULL sorting (PostgreSQL puts NULLs last in ASC, first in DESC).",
          "• Overrides: Explicitly force NULL positioning: `ORDER BY bonus DESC NULLS LAST` guarantees missing bonus rows appear at the very bottom of executive compensation reports!"
        ],
        table: {
          headers: ["Sort Option", "Syntax Example", "Default Behavior", "Custom Override"],
          rows: [
            ["Ascending", "ORDER BY price ASC", "Lowest values first", "Default if ASC/DESC omitted"],
            ["Descending", "ORDER BY price DESC", "Highest values first", "Must specify DESC"],
            ["Multi-Column", "ORDER BY dept ASC, salary DESC", "Primary sort ASC, secondary DESC", "Evaluates left to right"],
            ["Null Handling", "ORDER BY bonus NULLS LAST", "DBMS dependent", "Explicit NULLS FIRST / LAST"]
          ]
        }
      },
      {
        heading: "3. Web Pagination Mechanics: Offset vs Keyset Cursor Pagination",
        text: "Web and mobile applications present large datasets across multi-page views (Page 1, Page 2, Page 3...). Two primary strategies exist for implementing database pagination:",
        bulletPoints: [
          "1. Offset-Based Pagination (LIMIT n OFFSET m):",
          "• `LIMIT n`: Page Size (number of items returned per page, e.g., `LIMIT 20`).",
          "• `OFFSET m`: Skip Count, calculated as `OFFSET = (PageNumber - 1) * PageSize`.",
          "• Page 1: `LIMIT 20 OFFSET 0` | Page 2: `LIMIT 20 OFFSET 20` | Page 3: `LIMIT 20 OFFSET 40`.",
          "• THE DEEP PAGINATION PENALTY: When requesting Page 10,000 (`OFFSET 200000 LIMIT 20`), the engine MUST read, sort, and discard 200,000 rows from disk before returning the 20 target rows! Query latency degrades exponentially.",
          "2. Keyset / Cursor-Based Pagination (High-Performance Alternative):",
          "• Remembers the last seen primary key/timestamp from the previous page: `WHERE id > 1048 ORDER BY id ASC LIMIT 20;`.",
          "• Uses B-Tree index range scans to jump directly to target rows in sub-milliseconds ($O(\\log N)$), regardless of page depth!"
        ],
        table: {
          headers: ["Pagination Strategy", "Syntax Pattern", "Performance on Page 1", "Performance on Page 10,000", "Best Enterprise Use Case"],
          rows: [
            ["Offset-Based Pagination", "LIMIT 20 OFFSET 200000", "Ultra-Fast (sub-ms)", "Very Slow (Scans 200k discarded rows)", "Simple admin dashboards, small datasets"],
            ["Keyset / Cursor Pagination", "WHERE id > 1048 ORDER BY id LIMIT 20", "Ultra-Fast (sub-ms)", "Ultra-Fast (sub-ms B-Tree lookup)", "Infinite scroll feeds, high-volume mobile APIs"]
          ]
        }
      },
      {
        heading: "4. Deterministic Top-N Queries & Tie-Breaking Rules",
        text: "When requesting Top-N items (e.g. Top 5 Best-Selling Products), queries MUST be deterministic:",
        bulletPoints: [
          "Non-Deterministic Sorting Trap: If 10 products share the exact same `sales_count = 100`, executing `ORDER BY sales_count DESC LIMIT 5` will return 5 arbitrary products. Subsequent API calls can return different items across page breaks!",
          "Deterministic Tie-Breaker Rule: ALWAYS append the unique Primary Key as the final tie-breaker column in `ORDER BY`: `ORDER BY sales_count DESC, product_id ASC LIMIT 5;`. This guarantees 100% deterministic, consistent pagination output."
        ]
      }
    ],
    codeExamples: [
      {
        title: "PostgreSQL DISTINCT ON, Multi-Column Sorting & Custom NULL Positioning",
        code: `-- 1. Fetch unique departments using standard DISTINCT
SELECT DISTINCT department FROM employees;

-- 2. PostgreSQL DISTINCT ON: Retrieve highest-paid employee per department in a single query!
SELECT DISTINCT ON (department)
    department,
    employee_id,
    first_name,
    last_name,
    salary,
    bonus
FROM employees
WHERE is_active = TRUE
-- ORDER BY MUST start with the DISTINCT ON column(s), followed by sort criteria
ORDER BY department ASC, salary DESC NULLS LAST, employee_id ASC;`,
        explanation: "Demonstrates standard DISTINCT, and PostgreSQL DISTINCT ON (department) combined with ORDER BY department ASC, salary DESC NULLS LAST to find top earners per department."
      },
      {
        title: "High-Performance Web API Pagination: Offset vs Keyset Cursor",
        code: `-- Strategy 1: Offset-Based Pagination for Web Dashboard (Page 3, Page Size = 10)
-- Offset Math: (3 - 1) * 10 = 20
SELECT product_id, product_name, category, unit_price
FROM products
WHERE is_available = TRUE
ORDER BY category ASC, product_id ASC
LIMIT 10 OFFSET 20;

-- Strategy 2: High-Performance Keyset Cursor Pagination for Mobile Infinite Scroll
-- Remembers last product_id (1048) from previous feed page
SELECT product_id, product_name, category, unit_price
FROM products
WHERE is_available = TRUE
  AND product_id > 1048
ORDER BY product_id ASC
LIMIT 10;`,
        explanation: "Compares standard Offset-Based Pagination (LIMIT 10 OFFSET 20) with high-performance Keyset Cursor Pagination (WHERE product_id > 1048 LIMIT 10)."
      }
    ],
    bestPractices: [
      "Always include an explicit `ORDER BY` clause when using `LIMIT`/`OFFSET`; without `ORDER BY`, result row ordering is non-deterministic.",
      "Always append a unique Primary Key as a final tie-breaker column in `ORDER BY` to guarantee consistent pagination across API pages.",
      "Use `NULLS LAST` (or `NULLS FIRST`) explicitly to prevent engine-dependent default NULL sorting in analytical reports.",
      "Use Keyset Cursor-Based Pagination (`WHERE id > last_seen_id`) instead of `OFFSET` for high-volume mobile APIs and infinite scroll feeds.",
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
      "Keyset Cursor Pagination (`WHERE id > last_id`) utilizes B-Tree indexes for $O(\\log N)$ sub-millisecond pagination at any page depth."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod7Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-7');
  if (mod7Idx !== -1) sqlCourseInDb.modules[mod7Idx] = masterModule7;
  
  const mod8Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-8');
  if (mod8Idx !== -1) sqlCourseInDb.modules[mod8Idx] = masterModule8;
  
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Modules 7 & 8!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod7Index = content.indexOf('"id": "sql-mod-7"');
const sqlMod8Index = content.indexOf('"id": "sql-mod-8"');
const sqlMod9Index = content.indexOf('"id": "sql-mod-9"');

if (sqlMod7Index !== -1 && sqlMod8Index !== -1 && sqlMod9Index !== -1) {
  const mod7Start = content.lastIndexOf('{', sqlMod7Index);
  const mod8Start = content.lastIndexOf('{', sqlMod8Index);
  const mod9Start = content.lastIndexOf('{', sqlMod9Index);
  
  const beforeMod7 = content.slice(0, mod7Start);
  const afterMod8 = content.slice(mod9Start);
  
  const formattedMod7 = JSON.stringify(masterModule7, null, 6);
  const formattedMod8 = JSON.stringify(masterModule8, null, 6);
  
  content = beforeMod7 + formattedMod7 + ',\n\n      ' + formattedMod8 + ',\n\n      ' + afterMod8;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Modules 7 & 8!');
}

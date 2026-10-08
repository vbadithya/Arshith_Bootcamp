const fs = require('fs');

const masterModule7 = {
  id: "sql-mod-7",
  title: "Module 07 — Filtering Data with WHERE & Operators",
  description: "Master Row-Level Data Filtering: SARGable Queries vs Non-SARGable Index Traps, Comparison Operators (=, <>, !=, <, >, <=, >=), Inclusive Ranges (BETWEEN ... AND ...), Set Membership (IN, NOT IN), Three-Valued Logic (3VL: TRUE, FALSE, UNKNOWN), IS NULL / IS NOT NULL, The NOT IN (..., NULL) Trap, Boolean Precedence (NOT > AND > OR), Short-Circuiting, Pattern Matching (LIKE, ILIKE, %, _), Wildcard Escaping, and Regex (~).",
  completed: false,
  order: 7,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 7! The WHERE clause is the primary mechanism for restricting query result sets to rows that satisfy explicit boolean filtering criteria. In relational database engines, the WHERE clause is evaluated during Step 2 of the 8-step logical execution pipeline—filtering raw table heap rows *before* any grouping, aggregate calculations, or sorting take place. Mastering WHERE clause operators, Three-Valued Logic (3VL), parenthetical boolean precedence, and SARGable index optimization is essential for writing high-performance database queries across multi-million row datasets.",
    objectives: [
      "Master the WHERE clause role in Step 2 of the 8-step logical execution pipeline",
      "Understand SARGable Queries (Search Argumentable): Writing predicates that utilize B-Tree index scans",
      "Avoid Non-SARGable Index Traps: Why wrapping columns in functions (UPPER(), YEAR()) forces full table scans",
      "Master Comparison Operators (=, <>, !=, <, >, <=, >=) and Range Filtering (BETWEEN ... AND ...)",
      "Evaluate Set Membership with IN and analyze the catastrophic NOT IN (..., NULL) trap",
      "Deconstruct Three-Valued Logic (3VL): Handling TRUE, FALSE, and UNKNOWN with IS NULL / IS NOT NULL",
      "Enforce Boolean Operator Precedence (NOT > AND > OR) using explicit parenthetical scoping",
      "Master String Pattern Matching: LIKE, ILIKE, Percent (%), Underscore (_), ESCAPE clauses, and Regex (~)"
    ],
    sections: [
      {
        heading: "1. SARGable Queries vs Non-SARGable Index Traps",
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
          "Golden Rule of Index Utilization: NEVER wrap indexed column names inside functions (e.g. `UPPER(col)`, `DATE(col)`, `ROUND(col)`) on the left-hand side of a WHERE predicate! Always isolate the bare column on the left side of the operator."
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

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod7Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-7');
  if (mod7Idx !== -1) {
    sqlCourseInDb.modules[mod7Idx] = masterModule7;
  } else {
    sqlCourseInDb.modules[6] = masterModule7;
  }
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 7!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod7Index = content.indexOf('"id": "sql-mod-7"');
const sqlMod8Index = content.indexOf('"id": "sql-mod-8"');

if (sqlMod7Index !== -1 && sqlMod8Index !== -1) {
  const mod7Start = content.lastIndexOf('{', sqlMod7Index);
  const mod8Start = content.lastIndexOf('{', sqlMod8Index);
  
  const beforeMod7 = content.slice(0, mod7Start);
  const afterMod7 = content.slice(mod8Start);
  
  const formattedMod7 = JSON.stringify(masterModule7, null, 6);
  
  content = beforeMod7 + formattedMod7 + ',\n\n      ' + afterMod7;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 7!');
}

const fs = require('fs');

const masterModule10 = {
  id: "sql-mod-10",
  title: "Module 10 — SQL Joins & Relationships",
  description: "Master Relational Normalization (1NF, 2NF, 3NF), Entity Relationships (1:1, 1:N, N:M), Multi-Table Joins: INNER JOIN, LEFT (OUTER) JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN (Cartesian Product), SELF JOIN (Hierarchical Tree Trees), Anti-Join Pattern (LEFT JOIN ... WHERE right.id IS NULL), Join Execution Algorithms (Nested Loop, Hash Join, Sort-Merge Join), and Foreign Key B-Tree Indexing Optimization.",
  completed: false,
  order: 10,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 10! Relational database normalization breaks flat data files down into logical, non-redundant tables connected by primary and foreign key relationships. SQL Joins allow software developers, database architects, and data analysts to reconstruct related data across multiple tables on-the-fly. Understanding how the relational engine parses join conditions and selects physical join algorithms (Nested Loop, Hash Join, Sort-Merge Join) is essential for writing high-performance multi-table queries.",
    objectives: [
      "Master Relational Database Normalization: First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF)",
      "Analyze Entity Relationships: One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (N:M) with Junction Tables",
      "Master INNER JOIN: Returning intersecting records matching ON join predicates ($A \\cap B$)",
      "Master LEFT (OUTER) JOIN: Preserving all rows from the primary left table ($A \\cup (A \\cap B)$)",
      "Evaluate RIGHT JOIN and FULL OUTER JOIN for complete relational set coverage",
      "Execute CROSS JOIN to generate Cartesian product grids and matrix datasets",
      "Master SELF JOIN to query hierarchical data trees (Employee-Manager, Parent-Child Categories)",
      "Utilize the Anti-Join Pattern (LEFT JOIN ... WHERE right.id IS NULL) to locate unmatched records",
      "Deconstruct RDBMS Join Algorithms: Nested Loop Join, Hash Join, and Sort-Merge Join"
    ],
    sections: [
      {
        heading: "1. Relational Database Normalization & Entity Relationships",
        text: "Database normalization organizes tables to reduce data redundancy and eliminate update, insertion, and deletion anomalies:",
        bulletPoints: [
          "First Normal Form (1NF): Atomic values per column (no repeating groups or comma-separated lists in a single cell).",
          "Second Normal Form (2NF): Meets 1NF, and all non-key attributes are fully functionally dependent on the entire Primary Key (eliminating partial key dependencies).",
          "Third Normal Form (3NF): Meets 2NF, and no non-key attribute depends on another non-key attribute (eliminating transitive dependencies: 'A -> B -> C').",
          "Entity Relationship Models:",
          "• One-to-One (1:1): Primary key of Table A maps to Primary Key of Table B (e.g., User -> User Profile).",
          "• One-to-Many (1:N): Foreign key on Table B references Primary Key of Table A (e.g., Customer -> Orders).",
          "• Many-to-Many (N:M): Implemented using a Bridge/Junction Table containing Foreign Keys referencing both parent tables (e.g., Students <-> Courses via `student_courses` junction table)."
        ],
        table: {
          headers: ["Normalization Level", "Core Requirement Rule", "Anomaly Eliminated", "Enterprise Example"],
          rows: [
            ["1NF (First Normal Form)", "Atomic cells, unique row order, no array strings", "Repeating group redundancy", "Splitting 'NY, CA' into separate rows"],
            ["2NF (Second Normal Form)", "1NF + No partial dependencies on composite keys", "Partial key update anomalies", "Moving product description out of order_items"],
            ["3NF (Third Normal Form)", "2NF + No transitive dependencies between non-keys", "Transitive update anomalies", "Moving zip_code city/state to zip_code table"]
          ]
        }
      },
      {
        heading: "2. The Multi-Table Join Family Matrix",
        text: "SQL Joins combine columns from one or more tables based on matching join keys defined in the `ON` clause:",
        table: {
          headers: ["Join Type", "Venn Set Equivalent", "Unmatched Left Rows?", "Unmatched Right Rows?", "Common Production Use Case"],
          rows: [
            ["INNER JOIN", "Intersection ($A \\cap B$)", "EXCLUDED (Dropped)", "EXCLUDED (Dropped)", "Fetching orders with valid customer profiles"],
            ["LEFT (OUTER) JOIN", "Left Set ($A \\cup (A \\cap B)$)", "RETAINED (Filled with NULL)", "EXCLUDED (Dropped)", "Fetching all customers and their optional orders"],
            ["RIGHT (OUTER) JOIN", "Right Set ($B \\cup (A \\cap B)$)", "EXCLUDED (Dropped)", "RETAINED (Filled with NULL)", "Equivalent to inverted LEFT JOIN (rarely used)"],
            ["FULL OUTER JOIN", "Union ($A \\cup B$)", "RETAINED (Filled with NULL)", "RETAINED (Filled with NULL)", "Reconciling data between 2 financial ledgers"],
            ["CROSS JOIN", "Cartesian Product ($A \\times B$)", "ALL combinations", "ALL combinations", "Generating test matrix grids (Color x Size)"],
            ["SELF JOIN", "Hierarchical Graph", "Depends on Join Type", "Depends on Join Type", "Querying Employee-Manager or Parent-Child trees"]
          ]
        },
        bulletPoints: [
          "Crucial Join Predicate Rule: Always place join conditions in the `ON` clause (`ON o.customer_id = c.id`), NOT in the `WHERE` clause! Placing outer join predicates in `WHERE` implicitly converts a `LEFT JOIN` into an `INNER JOIN`."
        ]
      },
      {
        heading: "3. SELF JOIN & The Anti-Join Pattern",
        text: "Two specialized join patterns solve common software engineering requirements:",
        bulletPoints: [
          "SELF JOIN (Table Joined to Itself): Used when rows inside a table hold foreign keys referencing other rows in the SAME table (e.g. Employee reporting to Manager):",
          "• Syntax: `SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.employee_id;`",
          "Anti-Join Pattern (Locating Missing Records):",
          "• Combines a `LEFT JOIN` with a `WHERE right_table.key IS NULL` check to instantly identify unmatched records:",
          "• Example: `SELECT c.customer_id, c.name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;` (Finds customers who have NEVER placed an order!)."
        ]
      },
      {
        heading: "4. Physical Join Algorithms: Nested Loop, Hash Join & Sort-Merge Join",
        text: "The Cost-Based Optimizer (CBO) evaluates table sizes and index structures to choose one of three physical join algorithms:",
        bulletPoints: [
          "1. Nested Loop Join: Iterates outer table rows and searches for matches in the inner table. Ultra-fast ($O(N \\log M)$) when the inner join column has a B-Tree index!",
          "2. Hash Join: Builds an in-memory hash table of the smaller dataset in RAM (`work_mem`), then probes the hash table with rows from the larger dataset ($O(N + M)$). Ideal for large un-indexed tables.",
          "3. Sort-Merge Join: Sorts both datasets on join keys, then merges matching streams ($O(N \\log N + M \\log M)$). Ideal when datasets are pre-sorted by B-Tree indexes."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Multi-Table INNER & LEFT JOIN with Anti-Join Missing Record Analysis",
        code: `-- 1. Multi-Table INNER JOIN linking 3 tables (Orders, Customers, Products)
SELECT 
    o.order_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    p.product_name,
    oi.quantity,
    (oi.unit_price * oi.quantity) AS line_total
FROM orders AS o
INNER JOIN customers AS c ON o.customer_id = c.customer_id
INNER JOIN order_items AS oi ON o.order_id = oi.order_id
INNER JOIN products AS p ON oi.product_id = p.product_id
WHERE o.order_date >= '2026-01-01';

-- 2. Anti-Join Pattern: Find active products that have NEVER been ordered
SELECT 
    p.product_id,
    p.product_name,
    p.unit_price,
    p.stock_quantity
FROM products AS p
LEFT JOIN order_items AS oi ON p.product_id = oi.product_id
WHERE oi.order_id IS NULL -- Anti-join condition!
  AND p.is_active = TRUE;`,
        explanation: "Demonstrates chaining multiple INNER JOINs across 4 tables, and executing the Anti-Join pattern (LEFT JOIN ... WHERE IS NULL) to locate un-purchased inventory."
      },
      {
        title: "SELF JOIN for Org Charts & CROSS JOIN for Matrix Product Variants",
        code: `-- 1. SELF JOIN for Hierarchical Employee-Manager Organization Chart
SELECT 
    e.employee_id,
    e.full_name AS employee_name,
    e.job_title,
    COALESCE(m.full_name, '=== TOP EXECUTIVE ===') AS manager_name
FROM employees AS e
LEFT JOIN employees AS m ON e.manager_id = m.employee_id
ORDER BY e.employee_id ASC;

-- 2. CROSS JOIN for Generating Complete Product SKU Combinations (Color x Size)
SELECT 
    c.color_name,
    s.size_code,
    c.color_name || '-' || s.size_code AS generated_sku_variant
FROM product_colors AS c
CROSS JOIN product_sizes AS s;`,
        explanation: "Demonstrates SELF JOIN mapping employees to managers within a single table, and CROSS JOIN generating Cartesian product variant grids."
      }
    ],
    bestPractices: [
      "Always assign short, meaningful table aliases (e.g. `FROM orders AS o`) and prefix all projected columns.",
      "Always explicitly create a B-Tree index on FOREIGN KEY columns to enable $O(N \\log M)$ Nested Loop joins.",
      "Place join predicates in the `ON` clause, NOT in `WHERE`; filtering outer join columns in `WHERE` converts `LEFT JOIN` to `INNER JOIN`.",
      "Use the Anti-Join pattern (`LEFT JOIN ... WHERE right.id IS NULL`) for ultra-fast missing record identification.",
      "Verify query execution plans with `EXPLAIN ANALYZE` to ensure the optimizer selects Hash Joins or Index-backed Nested Loops."
    ],
    commonMistakes: [
      "Omitting the `ON` clause in a join, accidentally executing a `CROSS JOIN` Cartesian Product on multi-million row tables.",
      "Placing filtering predicates on the right table of a `LEFT JOIN` inside `WHERE`, accidentally stripping outer join rows.",
      "Joining un-indexed foreign key columns, forcing the database engine to fall back to slow full table scans.",
      "Attempting to normalize database tables beyond 3NF prematurely, causing excessive join overhead on simple queries."
    ],
    practiceExercise: {
      title: "Join Identification & Anti-Join Challenge",
      problem: "Perform the following two tasks:\n1. Choose the correct join type (INNER JOIN, LEFT JOIN, CROSS JOIN, or SELF JOIN) for each scenario:\n   a. Querying a table of `categories` to display parent category names alongside sub-category names.\n   b. Generating a grid of all possible t-shirt color (5 colors) and size (4 sizes) combinations.\n   c. Retrieving all registered customers, including those who have not placed any orders.\n\n2. Write a SQL Anti-Join query returning all `customer_id` and `email` addresses from a `customers` table for customers who do NOT exist in a `newsletters` subscription table.",
      solutionCode: `-- Exercise 1 Join Selection Answers:
-- a. Parent-Child Categories -> SELF JOIN
-- b. All Color x Size Grids -> CROSS JOIN (5 x 4 = 20 total rows)
-- c. All Customers + Optional -> LEFT JOIN

-- Exercise 2 Anti-Join Query Answer:
SELECT 
    c.customer_id, 
    c.email
FROM customers AS c
LEFT JOIN newsletters AS n ON c.email = n.email
WHERE n.email IS NULL;`
    },
    keyTakeaways: [
      "Relational Normalization (1NF, 2NF, 3NF) eliminates data redundancy and update anomalies.",
      "INNER JOIN returns intersecting rows ($A \\cap B$); LEFT JOIN preserves all left table rows ($A$).",
      "SELF JOIN links rows within the same table to query organizational trees and parent-child hierarchies.",
      "The Anti-Join pattern (`LEFT JOIN ... WHERE right.id IS NULL`) identifies missing or unlinked records efficiently.",
      "Database optimizers choose physical join algorithms (Nested Loop, Hash Join, Sort-Merge Join) based on table size and B-Tree indexes."
    ]
  }
};

const masterModule11 = {
  id: "sql-mod-11",
  title: "Module 11 — Subqueries, UNION & Advanced Querying",
  description: "Master Advanced Querying Architectures: Scalar Subqueries, Multi-Row Subqueries (IN, ANY, ALL), Correlated Subqueries (EXISTS vs NOT EXISTS), Common Table Expressions (CTEs - WITH clause), Recursive CTEs (WITH RECURSIVE for Graphs & Trees), and Set Operators (UNION, UNION ALL, INTERSECT, EXCEPT/MINUS).",
  completed: false,
  order: 11,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 11! As business logic becomes more sophisticated, single-table SELECT statements are insufficient. Advanced SQL querying techniques allow software developers and data engineers to break complex analytical tasks down into modular, maintainable query structures. Subqueries (nested queries), Correlated Subqueries, Common Table Expressions (CTEs with the `WITH` clause), Recursive CTEs for graph traversal, and Set Operators (`UNION`, `INTERSECT`, `EXCEPT`) provide the complete toolkit for enterprise data engineering.",
    objectives: [
      "Master Subquery Categories: Scalar Subqueries, Multi-Row Subqueries, and Multi-Column Subqueries",
      "Evaluate Multi-Row Comparison Operators: IN, NOT IN, ANY / SOME, and ALL",
      "Master Correlated Subqueries and optimize existence checks using EXISTS and NOT EXISTS",
      "Refactor complex nested queries into clean Common Table Expressions (CTEs) using the WITH clause",
      "Execute Graph & Tree Traversal using Recursive CTEs (WITH RECURSIVE)",
      "Master Set Operators: UNION (deduplicated) vs UNION ALL (high-performance retain all)",
      "Compare INTERSECT and EXCEPT / MINUS set operators across datasets",
      "Analyze subquery performance overhead and optimizer flattening rules"
    ],
    sections: [
      {
        heading: "1. Subquery Classifications: Scalar, Multi-Row & Multi-Column",
        text: "A subquery is a nested `SELECT` query embedded inside an outer SQL statement (inside `SELECT`, `FROM`, `WHERE`, or `HAVING` clauses):",
        table: {
          headers: ["Subquery Type", "Returned Structure", "Valid Placement", "Allowed Operators"],
          rows: [
            ["Scalar Subquery", "Single Cell (1 Row, 1 Column)", "SELECT, WHERE, HAVING", "=, <, >, <=, >=, <>"],
            ["Multi-Row Subquery", "Single Column (N Rows, 1 Column)", "WHERE, HAVING", "IN, NOT IN, ANY, ALL"],
            ["Multi-Column Subquery", "Table Grid (N Rows, M Columns)", "FROM (Derived Table), WHERE (row constructor)", "IN, EXISTS, FROM alias"]
          ]
        },
        bulletPoints: [
          "Multi-Row Operators (ANY & ALL):",
          "• `WHERE salary > ANY (SELECT salary FROM employees WHERE dept = 'IT')`: Returns TRUE if salary exceeds AT LEAST ONE IT salary (equivalent to `> MIN()`).",
          "• `WHERE salary > ALL (SELECT salary FROM employees WHERE dept = 'IT')`: Returns TRUE if salary exceeds EVERY SINGLE IT salary (equivalent to `> MAX()`)."
        ]
      },
      {
        heading: "2. Correlated Subqueries & The EXISTS vs IN Optimization",
        text: "Unlike independent subqueries (which execute once and pass static values to the outer query), a Correlated Subquery references columns from the outer query, re-evaluating once for EVERY ROW processed by the outer query:",
        bulletPoints: [
          "Correlated Subquery Mechanism: `WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department)` (Calculates department-specific averages dynamically per row!).",
          "EXISTS vs IN Performance Optimization:",
          "• `EXISTS (subquery)`: Returns TRUE as soon as the subquery finds a SINGLE matching row, short-circuiting execution immediately.",
          "• `IN (subquery)`: Builds the complete result list before evaluating the predicate.",
          "• Golden Rule: Use `EXISTS` and `NOT EXISTS` instead of `IN` / `NOT IN` when testing for record existence across large child tables. `EXISTS` short-circuits instantly and avoids the `NOT IN (..., NULL)` trap!"
        ]
      },
      {
        heading: "3. Common Table Expressions (CTEs - WITH Clause) & Recursive CTEs",
        text: "Common Table Expressions (CTEs) define named temporary result sets using the `WITH` clause, replacing unreadable nested subqueries with clean, modular code blocks:",
        bulletPoints: [
          "Standard CTE Syntax: `WITH dept_averages AS (SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department) SELECT * FROM employees e JOIN dept_averages d ON e.department = d.department WHERE e.salary > d.avg_sal;`",
          "Multiple Chained CTEs: You can chain multiple CTEs separated by commas (`WITH cte1 AS (...), cte2 AS (...)`).",
          "Recursive CTEs (WITH RECURSIVE):",
          "• Used to query hierarchical graph structures (org charts, bill of materials, category trees, network routing).",
          "• Structure: Consists of an **Anchor Member** (base query), `UNION ALL`, and a **Recursive Member** referencing the CTE name until a termination condition is met."
        ]
      },
      {
        heading: "4. Set Operators: UNION, UNION ALL, INTERSECT & EXCEPT",
        text: "Set operators combine result sets from two or more independent `SELECT` queries vertically into a single output stream:",
        table: {
          headers: ["Set Operator", "Venn Set Equivalent", "Deduplication Behavior", "Performance Impact"],
          rows: [
            ["UNION", "Set Union ($A \\cup B$)", "REMOVES duplicate rows (Performs Sort/Hash)", "Higher CPU/RAM cost"],
            ["UNION ALL", "Multiset Union ($A + B$)", "RETAINS all duplicate rows (Appends directly)", "Ultra-Fast (Zero sorting overhead)"],
            ["INTERSECT", "Set Intersection ($A \\cap B$)", "Returns ONLY rows present in BOTH sets", "Performs Hash/Sort deduplication"],
            ["EXCEPT / MINUS", "Set Difference ($A - B$)", "Returns rows in Set A NOT present in Set B", "Performs Hash/Sort deduplication"]
          ]
        },
        bulletPoints: [
          "Set Operator Rules: All queries combined with set operators MUST have the exact same number of projected columns, and corresponding columns MUST share compatible data types."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Modular Analytics with Chained CTEs & EXISTS Existence Checking",
        code: `-- Modular CTEs analyzing high-value active customers and product sales
WITH high_value_orders AS (
    SELECT order_id, customer_id, order_total
    FROM orders
    WHERE order_total >= 1000.00
      AND order_date >= '2026-01-01'
),
customer_summary AS (
    SELECT 
        customer_id, 
        COUNT(order_id) AS premium_order_count,
        SUM(order_total) AS total_premium_spend
    FROM high_value_orders
    GROUP BY customer_id
)
SELECT 
    c.customer_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    cs.premium_order_count,
    cs.total_premium_spend
FROM customers AS c
JOIN customer_summary AS cs ON c.customer_id = cs.customer_id
-- Use EXISTS for short-circuit existence checking
WHERE EXISTS (
    SELECT 1 FROM support_tickets AS t 
    WHERE t.customer_id = c.customer_id AND t.status = 'Resolved'
)
ORDER BY cs.total_premium_spend DESC;`,
        explanation: "Demonstrates modular chained CTEs (high_value_orders, customer_summary) and using EXISTS for fast short-circuit subquery existence checking."
      },
      {
        title: "Recursive CTE Org Chart & Set Operators (UNION ALL vs EXCEPT)",
        code: `-- 1. Recursive CTE: Traversing complete Org Chart hierarchy starting from CEO
WITH RECURSIVE org_chart AS (
    -- Anchor Member: Find top CEO (manager_id IS NULL)
    SELECT employee_id, full_name, manager_id, 1 AS management_level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive Member: Join employees to org_chart on manager_id
    SELECT e.employee_id, e.full_name, e.manager_id, o.management_level + 1
    FROM employees AS e
    JOIN org_chart AS o ON e.manager_id = o.employee_id
)
SELECT * FROM org_chart ORDER BY management_level ASC, employee_id ASC;

-- 2. Set Operators: Compare US vs European Customer lists
SELECT email, country FROM us_customers
UNION ALL -- Fast append without deduplication!
SELECT email, country FROM eu_customers

EXCEPT -- Exclude customers who are in the opt-out suppression list

SELECT email, country FROM marketing_suppression_list;`,
        explanation: "Demonstrates graph traversal using WITH RECURSIVE to generate organizational hierarchy levels, and combining datasets vertically using UNION ALL and EXCEPT."
      }
    ],
    bestPractices: [
      "Use Common Table Expressions (CTEs) with `WITH` instead of deeply nested subqueries to improve code readability and maintainability.",
      "Prefer `EXISTS` and `NOT EXISTS` over `IN` / `NOT IN` for subquery existence checks; `EXISTS` short-circuits instantly and avoids NULL traps.",
      "Always prefer `UNION ALL` over `UNION` when you know result sets are disjoint or when duplicates are acceptable, eliminating unneeded sorting overhead.",
      "Ensure all queries combined with `UNION`, `INTERSECT`, or `EXCEPT` project identical column counts and matching data types.",
      "Use `WITH RECURSIVE` for tree structures (org charts, category hierarchies, bill of materials)."
    ],
    commonMistakes: [
      "Using `UNION` instead of `UNION ALL`, forcing the database engine to perform expensive sort/hash deduplication unnecessarily.",
      "Using `NOT IN (subquery)` when the subquery can return `NULL` values, causing the outer query to return zero rows unconditionally.",
      "Creating infinite loops in `WITH RECURSIVE` by failing to specify a proper join termination condition.",
      "Writing deeply nested un-aliased subqueries in `FROM` clauses, making code impossible to read or debug."
    ],
    practiceExercise: {
      title: "CTE & Set Operator Refactoring Challenge",
      problem: "Perform the following two tasks:\n1. State the difference between `UNION` and `UNION ALL` across performance and duplicate retention.\n\n2. Refactor the following nested subquery into a clean CTE using the `WITH` clause:\n   `SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = 'Engineering');`",
      solutionCode: `-- Exercise 1 Answers:
-- UNION     : Retains unique rows only, performing RAM sort/hash deduplication (Slower).
-- UNION ALL : Retains ALL rows including duplicates, appending streams directly (Fastest).

-- Exercise 2 CTE Refactoring Solution:
WITH eng_avg AS (
    SELECT AVG(salary) AS avg_salary
    FROM employees
    WHERE department = 'Engineering'
)
SELECT e.*
FROM employees AS e, eng_avg AS a
WHERE e.salary > a.avg_salary;`
    },
    keyTakeaways: [
      "Subqueries can be Scalar (1 cell), Multi-Row (1 column), or Derived Tables (multi-column grid).",
      "`EXISTS` and `NOT EXISTS` short-circuit execution on the first match, outperforming `IN` on large subqueries.",
      "Common Table Expressions (CTEs) with `WITH` make complex queries modular, readable, and maintainable.",
      "`WITH RECURSIVE` enables graph and tree hierarchy traversal (org charts, category trees).",
      "`UNION ALL` appends datasets vertically without sorting overhead; `UNION` removes duplicates."
    ]
  }
};

const masterModule12 = {
  id: "sql-mod-12",
  title: "Module 12 — SQL Functions & Conditional Logic",
  description: "Master Built-in SQL Functions & Expression Logic: String Functions (LENGTH, SUBSTRING, REPLACE, TRIM, POSITION, UPPER/LOWER), Mathematical Functions (ROUND, TRUNC, CEIL, FLOOR, ABS, MOD), Date/Time Functions (CURRENT_DATE, EXTRACT, DATE_TRUNC, AGE), Conditional Logic (Simple CASE, Searched CASE WHEN), and Null Handling Functions (COALESCE, NULLIF, NVL).",
  completed: false,
  order: 12,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 12! Built-in SQL functions and conditional expressions allow database developers and analysts to perform powerful data transformations, string parsing, mathematical rounding, date-time arithmetic, and dynamic branching logic directly inside the database engine. Processing transformations on the database server minimizes network bandwidth usage and offloads processing from application servers. Mastering string, math, date-time, CASE expressions, and COALESCE functions is essential for enterprise database engineering.",
    objectives: [
      "Master String Transformation Functions: LENGTH, SUBSTRING, REPLACE, TRIM, POSITION, UPPER, LOWER, and LPAD/RPAD",
      "Master Mathematical & Numeric Functions: ROUND, TRUNC, CEIL, FLOOR, ABS, MOD, and POWER",
      "Master Date & Time Manipulation: CURRENT_DATE, CURRENT_TIMESTAMP, EXTRACT(field FROM date), DATE_TRUNC(), and AGE()",
      "Implement Dynamic Branching Logic using Searched CASE WHEN ... THEN ... ELSE ... END expressions",
      "Implement Simple CASE Expressions for discrete value mapping",
      "Master Null Handling Functions: COALESCE(val1, val2, ...), NULLIF(val1, val2), and NVL/IFNULL",
      "Utilize Functions inside SELECT projections, WHERE filters, and ORDER BY clauses"
    ],
    sections: [
      {
        heading: "1. String Parsing & Transformation Functions",
        text: "String functions manipulate textual column data for cleaning, parsing, and formatting output streams:",
        table: {
          headers: ["String Function", "Syntax Example", "Output Result", "Primary Enterprise Use Case"],
          rows: [
            ["LENGTH(str)", "LENGTH('Database')", "8", "Validating password/input string lengths"],
            ["SUBSTRING(str, start, len)", "SUBSTRING('ABCDEF', 2, 3)", "'BCD'", "Parsing fixed-format codes or serial numbers"],
            ["REPLACE(str, old, new)", "REPLACE('v1.0', '1.0', '2.0')", "'v2.0'", "Cleaning domain names or URL paths"],
            ["TRIM(str)", "TRIM('  hello  ')", "'hello'", "Stripping leading/trailing whitespace"],
            ["POSITION(sub IN str)", "POSITION('@' IN email)", "6", "Locating delimiter positions"],
            ["UPPER(str) / LOWER(str)", "UPPER('admin')", "'ADMIN'", "Standardizing string casing for comparison"],
            ["LPAD(str, len, pad)", "LPAD('42', 5, '0')", "'00042'", "Formatting fixed-width invoice numbers"]
          ]
        }
      },
      {
        heading: "2. Mathematical & Numeric Functions",
        text: "Numeric functions perform rounding, truncation, and absolute value calculations on integer and decimal columns:",
        table: {
          headers: ["Numeric Function", "Syntax Example", "Output Result", "Description / Behavior"],
          rows: [
            ["ROUND(num, decimals)", "ROUND(125.456, 2)", "125.46", "Rounds to specified decimal places"],
            ["TRUNC(num, decimals)", "TRUNC(125.456, 2)", "125.45", "Truncates digits without rounding"],
            ["CEIL(num) / CEILING", "CEIL(4.1)", "5", "Rounds up to next integer"],
            ["FLOOR(num)", "FLOOR(4.9)", "4", "Rounds down to lower integer"],
            ["ABS(num)", "ABS(-42.5)", "42.5", "Returns positive absolute magnitude"],
            ["MOD(n, m)", "MOD(10, 3)", "1", "Returns remainder of division"]
          ]
        }
      },
      {
        heading: "3. Temporal (Date & Time) Manipulation Functions",
        text: "Temporal functions process timestamps, calculate elapsed intervals, and bucket dates into time series intervals:",
        bulletPoints: [
          "CURRENT_DATE & CURRENT_TIMESTAMP: Returns current session date and timezone-aware timestamp.",
          "EXTRACT(field FROM timestamp): Extracts date components (e.g. `EXTRACT(YEAR FROM created_at)`, `EXTRACT(DOW FROM created_at)` for Day of Week).",
          "DATE_TRUNC('unit', timestamp): Truncates timestamp to specified precision (e.g. `DATE_TRUNC('month', created_at)` rounds all timestamps in June 2026 to `'2026-06-01 00:00:00'`). Crucial for monthly time-series analytics!",
          "AGE(timestamp1, timestamp2): Calculates precise elapsed duration intervals between two dates (e.g. `AGE(CURRENT_DATE, birth_date)` returns `'34 years 5 months 12 days'`)."
        ]
      },
      {
        heading: "4. Conditional Expressions (CASE) & Null Handling (COALESCE, NULLIF)",
        text: "Conditional expressions provide `if-then-else` branching logic directly inside SQL queries:",
        bulletPoints: [
          "Searched CASE Expression (Most Versatile):",
          "• Syntax: `CASE WHEN salary > 100000 THEN 'Executive' WHEN salary > 60000 THEN 'Senior' ELSE 'Junior' END AS tier`",
          "• Evaluates boolean conditions sequentially; returns the `THEN` value of the first matching `TRUE` condition.",
          "Simple CASE Expression: Evaluates discrete matches: `CASE department_id WHEN 1 THEN 'IT' WHEN 2 THEN 'HR' ELSE 'Other' END`.",
          "COALESCE(val1, val2, ...): Returns the FIRST NON-NULL value in a list of arguments. Used to substitute fallback values for missing data: `COALESCE(phone_number, mobile_number, 'N/A')`.",
          "NULLIF(val1, val2): Returns `NULL` if `val1 == val2`; otherwise returns `val1`. Prevents division-by-zero errors: `total / NULLIF(count, 0)`."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Complex String Parsing, Date Truncation & Searched CASE Expressions",
        code: `-- 1. Extract email domain and standardize text formatting
SELECT 
    user_id,
    email,
    LOWER(SUBSTRING(email FROM POSITION('@' IN email) + 1)) AS email_domain,
    LPAD(user_id::text, 8, '0') AS formatted_account_code
FROM users;

-- 2. Monthly Revenue Time-Series Analytics with Searched CASE classification
SELECT 
    DATE_TRUNC('month', o.order_date) AS sales_month,
    COUNT(o.order_id) AS total_orders,
    ROUND(SUM(o.order_total), 2) AS gross_revenue,
    
    -- Searched CASE statement categorizing monthly performance tiers
    CASE 
        WHEN SUM(o.order_total) >= 100000.00 THEN 'Platinum Month'
        WHEN SUM(o.order_total) >= 50000.00  THEN 'Gold Month'
        ELSE 'Standard Month'
    END AS performance_tier
FROM orders AS o
WHERE o.order_date >= '2026-01-01'
GROUP BY DATE_TRUNC('month', o.order_date)
ORDER BY sales_month ASC;`,
        explanation: "Demonstrates string parsing (SUBSTRING, POSITION), padding (LPAD), date truncation for time-series grouping (DATE_TRUNC), and Searched CASE statement tiering."
      },
      {
        title: "Temporal Math (AGE, EXTRACT) & Null Handling (COALESCE, NULLIF)",
        code: `-- 1. Calculate employee tenure and age intervals
SELECT 
    employee_id,
    first_name || ' ' || last_name AS full_name,
    hire_date,
    AGE(CURRENT_DATE, hire_date) AS exact_tenure_duration,
    EXTRACT(YEAR FROM AGE(CURRENT_DATE, hire_date)) AS years_employed
FROM enterprise_employees;

-- 2. Null handling with COALESCE fallback values and safe division with NULLIF
SELECT 
    p.product_name,
    COALESCE(p.secondary_email, p.primary_email, 'no-email@company.com') AS contact_email,
    p.total_sales_revenue,
    p.units_sold,
    -- NULLIF prevents division by zero if units_sold is 0!
    ROUND(p.total_sales_revenue / NULLIF(p.units_sold, 0), 2) AS avg_unit_price
FROM products AS p;`,
        explanation: "Demonstrates date interval arithmetic using AGE and EXTRACT, fallbacks with COALESCE, and safe division using NULLIF."
      }
    ],
    bestPractices: [
      "Use `DATE_TRUNC('month', date)` to bucket timestamps for clean time-series trend reports.",
      "Use Searched `CASE WHEN` expressions to categorize metrics dynamically inside SELECT projections.",
      "Always use `COALESCE(col, fallback)` to replace missing NULL values with human-readable text.",
      "Use `NULLIF(denominator, 0)` when dividing columns to prevent production division-by-zero crashes.",
      "Remember that functions applied to indexed columns in `WHERE` predicates disable SARGable B-Tree index scans."
    ],
    commonMistakes: [
      "Forgetting the `END` keyword in `CASE` expressions, causing SQL parser syntax errors.",
      "Using `SUBSTRING` without checking string length bounds, causing truncation bugs.",
      "Confusing `COALESCE` (returns first non-null) with `NULLIF` (returns NULL if args match).",
      "Using `ROUND()` on floating-point `REAL` columns instead of `NUMERIC`, causing floating-point binary representation artifacts."
    ],
    practiceExercise: {
      title: "Date Functions & CASE Expression Challenge",
      problem: "Perform the following two tasks:\n1. Write a SQL query using `COALESCE` that returns `work_phone`, `mobile_phone`, or 'No Phone On File' in order of preference.\n\n2. Write a SQL SELECT query on an `orders` table returning `order_id`, `order_total`, and a column `shipping_speed` calculated via `CASE`:\n   • 'Express' if `order_total >= 200`\n   • 'Priority' if `order_total >= 100`\n   • 'Standard' for all other amounts.",
      solutionCode: `-- Exercise 1 COALESCE Solution:
SELECT COALESCE(work_phone, mobile_phone, 'No Phone On File') AS contact_phone
FROM contacts;

-- Exercise 2 CASE Query Solution:
SELECT 
    order_id,
    order_total,
    CASE 
        WHEN order_total >= 200.00 THEN 'Express'
        WHEN order_total >= 100.00 THEN 'Priority'
        ELSE 'Standard'
    END AS shipping_speed
FROM orders;`
    },
    keyTakeaways: [
      "Built-in SQL functions perform string, math, and date transformations on the database server.",
      "`DATE_TRUNC('unit', date)` truncates timestamps to specified units (month, day, year) for time-series grouping.",
      "Searched `CASE WHEN ... THEN ... ELSE ... END` provides versatile if-then-else branching logic.",
      "`COALESCE(a, b, c)` returns the first non-null argument in a list.",
      "`NULLIF(a, b)` returns NULL if arguments match, preventing division-by-zero errors."
    ]
  }
};

const masterModule13 = {
  id: "sql-mod-13",
  title: "Module 13 — Views, Indexes & Database Optimization",
  description: "Master Database Performance Engineering: Standard Virtual Views (CREATE VIEW), Materialized Views (CREATE MATERIALIZED VIEW, REFRESH MATERIALIZED VIEW), Indexing Architecture (B-Tree Indexes, Composite Indexes, Unique Indexes, Partial Indexes, Expression Indexes), Query Optimization (EXPLAIN ANALYZE execution plans), Sequential Scans vs Index Scans, Index Costs, and SARGability.",
  completed: false,
  order: 13,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 13! As database tables grow to millions or billions of rows, query performance engineering becomes the top priority for database architects and software engineers. Unindexed queries cause high CPU usage, disk I/O bottlenecks, and slow application latency. Views simplify complex query architectures, Materialized Views cache expensive aggregate calculations on disk, and B-Tree Indexes enable sub-millisecond data lookups. Mastering indexing strategy, query execution plan analysis (`EXPLAIN ANALYZE`), and SARGable optimization is essential for senior database engineers.",
    objectives: [
      "Master Standard Virtual Views (CREATE VIEW): Simplifying complex joins and abstracting security permissions",
      "Master Materialized Views (CREATE MATERIALIZED VIEW): Caching expensive aggregate reports with REFRESH MATERIALIZED VIEW",
      "Deconstruct Index Architecture: B-Tree Index balanced tree structure ($O(\\log N)$ lookup complexity)",
      "Design Composite Multi-Column Indexes and enforce Leftmost Prefix rules",
      "Implement Unique Indexes, Partial Indexes (WHERE clause scoped), and Expression Indexes",
      "Analyze Query Execution Plans using EXPLAIN ANALYZE (Seq Scan vs Index Scan vs Bitmap Heap Scan)",
      "Evaluate Index Overhead: Understanding INSERT/UPDATE/DELETE write penalties",
      "Identify and eliminate unindexed Foreign Keys and Non-SARGable query traps"
    ],
    sections: [
      {
        heading: "1. Virtual Views vs Materialized Views",
        text: "Views encapsulate complex SQL queries into reusable virtual tables:",
        table: {
          headers: ["View Type", "Storage Implementation", "Query Execution Behavior", "Data Freshness", "Primary Enterprise Scenario"],
          rows: [
            ["Standard Virtual View", "Virtual (Stores SQL query definition in catalog)", "Executes underlying SQL query on-the-fly every time view is queried", "Always 100% Real-Time", "Simplifying complex joins & masking sensitive columns"],
            ["Materialized View", "Physical Disk Heap (Caches result rows on disk)", "Reads cached physical rows directly from disk pages without re-running query", "Snapshot (Updated via REFRESH MATERIALIZED VIEW)", "High-volume analytical dashboards & complex aggregation"]
          ]
        },
        bulletPoints: [
          "Refreshing Materialized Views: `REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;` updates cached rows in the background without blocking concurrent client read queries (requires a unique index on the materialized view)."
        ]
      },
      {
        heading: "2. Relational Index Architecture & B-Tree Mechanics",
        text: "An index is a specialized data structure (typically a self-balancing B-Tree) that stores column values in sorted order alongside pointers to physical table heap page locations (TIDs/CTIDs):",
        bulletPoints: [
          "B-Tree Search Complexity: Navigating a B-Tree index requires $O(\\log N)$ operations. Looking up a row in a 10,000,000 row table requires only ~3 to 4 index page reads!",
          "Composite Multi-Column Indexes (Leftmost Prefix Rule):",
          "• Index on `(country, state, city)` is ordered primarily by `country`, then `state`, then `city`.",
          "• Leftmost Prefix Rule: Queries filtering by `country` or `(country, state)` use the index. Queries filtering ONLY by `city` CANNOT use the index because the leftmost column is omitted!",
          "Partial Indexes (Filtered Indexes):",
          "• `CREATE INDEX idx_active_users ON users (email) WHERE is_active = TRUE;`",
          "• Indexes ONLY matching rows, saving disk space and reducing index maintenance overhead!",
          "Expression Indexes (Functional Indexes):",
          "• `CREATE INDEX idx_upper_email ON users (UPPER(email));` enables non-SARGable function calls like `WHERE UPPER(email) = 'TEST@GMAIL.COM'` to use B-Tree index lookups!"
        ]
      },
      {
        heading: "3. Analyzing Execution Plans with EXPLAIN ANALYZE",
        text: "The `EXPLAIN ANALYZE` command executes a SQL statement and outputs the Cost-Based Optimizer's execution plan detailing physical scan nodes and execution timings:",
        table: {
          headers: ["Scan Node Type", "Execution Behavior", "Performance Level", "When Engine Chooses Node"],
          rows: [
            ["Sequential Scan (Seq Scan)", "Scans 100% of table heap pages row-by-row", "Slow on large tables ($O(N)$)", "Un-indexed tables or fetching >20% of rows"],
            ["Index Scan", "Navigates B-Tree index to fetch table heap rows", "Ultra-Fast ($O(\\log N)$)", "Selective lookups on indexed columns"],
            ["Index Only Scan", "Fetches rows directly from B-Tree RAM pages (Skips heap)", "Fastest Possible", "All requested SELECT columns exist in index"],
            ["Bitmap Index Scan", "Scans index to build bitmap of matching pages, then reads heap", "Very Fast", "Combining multiple indexes or range queries"]
          ]
        }
      },
      {
        heading: "4. Index Maintenance Overhead & Optimization Trade-Offs",
        text: "While indexes accelerate SELECT read queries, they impose storage and write penalties:",
        bulletPoints: [
          "Write Penalty: Every `INSERT`, `UPDATE`, or `DELETE` statement must update the main table heap AND all associated B-Tree index structures. Over-indexing tables degrades write throughput.",
          "Unused Index Cleanup: Monitor index usage via system catalogs (`pg_stat_user_indexes`) and drop unused indexes to free up RAM buffer memory."
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

const masterModule14 = {
  id: "sql-mod-14",
  title: "Module 14 — Transactions, TCL & Database Security",
  description: "Master Database Reliability & Security Engineering: ACID Properties (Atomicity, Consistency, Isolation, Durability), Transaction Control Language (BEGIN, COMMIT, ROLLBACK, SAVEPOINT), Concurrency Anomalies (Dirty Reads, Non-Repeatable Reads, Phantom Reads, Serialization Anomalies), Transaction Isolation Levels (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE), Explicit Row Locking (SELECT ... FOR UPDATE), and Database Security (DCL GRANT, REVOKE, RBAC, Row-Level Security RLS).",
  completed: false,
  order: 14,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 14! In modern multi-user enterprise applications, thousands of client transactions execute concurrently against the database server. Ensuring data correctness requires robust Transaction Control Language (TCL), strict concurrency isolation levels, explicit row locking, and fine-grained security role permissions. Transactions guarantee ACID properties (Atomicity, Consistency, Isolation, Durability)—ensuring multi-step operations (like bank funds transfers) either succeed 100% or fail safely with zero data corruption. Mastering TCL transactions, concurrency control, and Role-Based Access Security (RBAC) is mandatory for enterprise backend engineers.",
    objectives: [
      "Master the 4 ACID Guarantees: Atomicity, Consistency, Isolation, and Durability",
      "Execute Transaction Control Language (TCL) commands: BEGIN / START TRANSACTION, COMMIT, ROLLBACK, and SAVEPOINT",
      "Analyze Concurrency Anomalies: Dirty Reads, Non-Repeatable Reads, Phantom Reads, and Serialization Anomalies",
      "Deconstruct the 4 ANSI Transaction Isolation Levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, and SERIALIZABLE",
      "Master Explicit Row Locking using SELECT ... FOR UPDATE to prevent concurrency race conditions",
      "Implement Database Access Security using DCL statements (GRANT, REVOKE) and Role-Based Access Control (RBAC)",
      "Configure PostgreSQL Row-Level Security (RLS) policies for multi-tenant data isolation"
    ],
    sections: [
      {
        heading: "1. The 4 ACID Properties of Relational Database Systems",
        text: "ACID is the set of database engine guarantees that ensure transactional reliability:",
        bulletPoints: [
          "1. Atomicity ('All-or-Nothing'): Ensures that all SQL statements within a transaction boundary complete successfully. If any statement fails, the engine rolls back ALL changes, leaving the database in its original state.",
          "2. Consistency: Guarantees that a transaction transforms the database from one valid state to another, strictly obeying all schema constraints (NOT NULL, UNIQUE, CHECK, Foreign Keys).",
          "3. Isolation: Ensures that concurrently executing transactions do not interfere with or observe incomplete transient states of other transactions.",
          "4. Durability: Guarantees that once a transaction commits, its modifications are permanently written to Write-Ahead Logs (WAL) and disk storage, surviving power failures or crashes."
        ]
      },
      {
        heading: "2. Transaction Control Language (TCL) & Savepoints",
        text: "TCL manages transactional boundaries and state modifications:",
        bulletPoints: [
          "BEGIN / START TRANSACTION: Marks the starting boundary of an explicit multi-query transaction.",
          "COMMIT: Permanently writes all uncommitted transactional state changes to disk storage.",
          "ROLLBACK: Aborts the transaction and reverts all uncommitted modifications back to the initial state.",
          "SAVEPOINT name & ROLLBACK TO name:",
          "• Creates intermediate checkpoints within a long multi-step transaction.",
          "• Allows rolling back partial failures to a specific savepoint without aborting the entire transaction!"
        ]
      },
      {
        heading: "3. Concurrency Anomalies & Transaction Isolation Levels",
        text: "When multiple transactions execute concurrently, isolation level settings determine protection against concurrency anomalies:",
        table: {
          headers: ["Isolation Level", "Dirty Read", "Non-Repeatable Read", "Phantom Read", "Serialization Anomaly", "Performance / Concurrency"],
          rows: [
            ["READ UNCOMMITTED", "Possible", "Possible", "Possible", "Possible", "Highest concurrency (No read locks)"],
            ["READ COMMITTED (Postgres Default)", "Prevented", "Possible", "Possible", "Possible", "High performance (Default in most RDBMS)"],
            ["REPEATABLE READ", "Prevented", "Prevented", "Prevented (In Postgres)", "Possible", "Medium concurrency (Snapshot isolation)"],
            ["SERIALIZABLE", "Prevented", "Prevented", "Prevented", "Prevented", "Lowest concurrency (Strict serial ordering)"]
          ]
        },
        bulletPoints: [
          "Anomaly Definitions:",
          "• Dirty Read: Reading uncommitted data modified by another concurrent transaction (which might subsequently roll back!).",
          "• Non-Repeatable Read: Re-reading a row within the same transaction yields DIFFERENT column values because another transaction committed an UPDATE.",
          "• Phantom Read: Re-executing a range query within the same transaction yields NEW rows because another transaction committed an INSERT.",
          "Pessimistic Row Locking (SELECT ... FOR UPDATE): Locks target rows with an Exclusive Lock (X-Lock), forcing concurrent transactions to wait until the current transaction commits."
        ]
      },
      {
        heading: "4. Database Security: DCL (GRANT / REVOKE), RBAC & Row-Level Security (RLS)",
        text: "Securing database access requires enforcing Principle of Least Privilege security models:",
        bulletPoints: [
          "Role-Based Access Control (RBAC):",
          "• `CREATE ROLE app_service_user WITH LOGIN PASSWORD 'SecurePass123!';`",
          "• `GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO app_service_user;`",
          "• `REVOKE DELETE ON ALL TABLES IN SCHEMA public FROM app_service_user;` (Prevents application service account from deleting data).",
          "Row-Level Security (RLS in PostgreSQL):",
          "• Enforces fine-grained security policies directly inside the storage engine, restricting which rows a specific user or tenant can view:",
          "• `ALTER TABLE tenant_data ENABLE ROW LEVEL SECURITY;`",
          "• `CREATE POLICY tenant_isolation_policy ON tenant_data FOR ALL USING (tenant_id = current_setting('app.current_tenant_id'));`"
        ]
      }
    ],
    codeExamples: [
      {
        title: "Atomic Bank Transfer Transaction with Savepoints & Row Locking",
        code: `-- Bank Account Transfer with Pessimistic Row Locking and Savepoints
BEGIN TRANSACTION;

-- Step 1: Explicit Row Locking (SELECT FOR UPDATE) to prevent concurrent balance modifications
SELECT account_id, balance 
FROM bank_accounts 
WHERE account_id IN (101, 202) 
FOR UPDATE;

-- Step 2: Deduct $500 from Sender (Account 101)
UPDATE bank_accounts 
SET balance = balance - 500.00 
WHERE account_id = 101 AND balance >= 500.00;

-- Set a Savepoint before secondary operation
SAVEPOINT transfer_deducted;

-- Step 3: Credit $500 to Recipient (Account 202)
UPDATE bank_accounts 
SET balance = balance + 500.00 
WHERE account_id = 202;

-- Step 4: Verify recipient update succeeded; if failed, rollback to savepoint!
-- Otherwise, commit the atomic transaction permanently
COMMIT;`,
        explanation: "Demonstrates an atomic financial transaction using SELECT FOR UPDATE row locking, balance deduction validation, SAVEPOINT creation, and permanent COMMIT."
      },
      {
        title: "Role-Based Access Security (DCL) & Row-Level Security (RLS) Setup",
        code: `-- 1. Provision Restricted Role-Based Application User (DCL)
CREATE ROLE analyst_read_only WITH LOGIN PASSWORD 'AnalystPass2026!';

-- Grant schema access and read-only SELECT permissions
GRANT USAGE ON SCHEMA public TO analyst_read_only;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO analyst_read_only;
REVOKE INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public FROM analyst_read_only;

-- 2. Enable PostgreSQL Row-Level Security (RLS) for Multi-Tenant Data Isolation
ALTER TABLE customer_orders ENABLE ROW LEVEL SECURITY;

-- Create policy restricting users to viewing ONLY their own tenant records!
CREATE POLICY tenant_order_isolation_policy ON customer_orders
    FOR ALL
    TO app_service_user
    USING (tenant_id = current_setting('app.current_tenant_id'));`,
        explanation: "Demonstrates DCL security setup (GRANT, REVOKE), provision of restricted read-only roles, and enabling PostgreSQL Row-Level Security (RLS)."
      }
    ],
    bestPractices: [
      "Keep explicit transaction boundaries (`BEGIN...COMMIT`) as short as possible to minimize row lock holding durations.",
      "Always use `SELECT ... FOR UPDATE` when reading financial balances that will be updated in the same transaction.",
      "Use `READ COMMITTED` (the default) for standard web workloads, and `SERIALIZABLE` or `REPEATABLE READ` for high-precision financial ledgers.",
      "Never connect web applications using the DBA 'postgres' or 'root' superuser accounts; always create restricted application service roles.",
      "Implement PostgreSQL Row-Level Security (RLS) for multi-tenant applications to prevent cross-tenant data leakage bugs."
    ],
    commonMistakes: [
      "Holding an open transaction during an external HTTP API network call, stalling database connection pools and acquiring long row locks.",
      "Reading balance data with a plain `SELECT` before updating, allowing concurrent threads to cause Race Condition overdrafts.",
      "Confusing `ROLLBACK` (reverts all transaction changes) with `ROLLBACK TO SAVEPOINT` (reverts changes back to intermediate checkpoint).",
      "Granting `ALL PRIVILEGES` to application database users, creating severe security vulnerabilities if SQL Injection occurs."
    ],
    practiceExercise: {
      title: "ACID & Concurrency Anomalies Challenge",
      problem: "Perform the following two tasks:\n1. Match each concurrency anomaly to its definition:\n   a. Dirty Read\n   b. Non-Repeatable Read\n   c. Phantom Read\n   • i. Re-reading a row yields different column values committed by another transaction.\n   • ii. Reading uncommitted data that may subsequently be rolled back.\n   • iii. Re-executing a range query returns new rows inserted by another committed transaction.\n\n2. Write a SQL DCL script that creates a role `billing_app`, grants `SELECT`, `INSERT`, `UPDATE` on table `invoices`, and explicitly revokes `DELETE` permissions.",
      solutionCode: `-- Exercise 1 Anomaly Matching Answers:
-- a. Dirty Read          -> ii. Reading uncommitted data that may be rolled back.
-- b. Non-Repeatable Read -> i. Re-reading a row yields different column values.
-- c. Phantom Read        -> iii. Range query returns new inserted rows.

-- Exercise 2 DCL Script Answer:
CREATE ROLE billing_app WITH LOGIN PASSWORD 'BillingSecret2026!';
GRANT SELECT, INSERT, UPDATE ON TABLE invoices TO billing_app;
REVOKE DELETE ON TABLE invoices FROM billing_app;`
    },
    keyTakeaways: [
      "ACID properties (Atomicity, Consistency, Isolation, Durability) guarantee relational transaction reliability.",
      "TCL commands (BEGIN, COMMIT, ROLLBACK, SAVEPOINT) define multi-query atomic boundaries.",
      "`SELECT FOR UPDATE` acquires pessimistic row locks to prevent concurrent race conditions.",
      "Isolation levels (READ COMMITTED, REPEATABLE READ, SERIALIZABLE) control trade-offs between concurrency speed and anomaly protection.",
      "DCL (GRANT, REVOKE) and Row-Level Security (RLS) enforce Principle of Least Privilege database security."
    ]
  }
};

const masterModule15 = {
  id: "sql-mod-15",
  title: "Module 15 — SQL for Data Analytics, Python & AI + Final Project",
  description: "Master Advanced Data Analytics & AI Integration: Window Functions (ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), NTILE(), SUM() OVER (...)), PARTITION BY & Window Framing (ROWS BETWEEN ...), Python Integration (sqlite3, psycopg2, SQLAlchemy, pandas.read_sql), SQL with AI & Vector Databases (Text-to-SQL, pgvector embeddings), and Comprehensive End-to-End Capstone Project.",
  completed: false,
  order: 15,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 15, the capstone module of the SQL & Relational Databases curriculum! Modern data engineering extends far beyond standard CRUD queries. Advanced analytical engineering relies on Window Functions (`OVER (PARTITION BY ...)`), running totals, period-over-period trend analysis (`LAG`/`LEAD`), Python data science integration (`pandas`, `SQLAlchemy`), and AI Vector Search (`pgvector`). This module synthesizes all curriculum topics into production-grade analytics skills and concludes with a comprehensive capstone final project.",
    objectives: [
      "Master Window Functions: OVER (PARTITION BY ... ORDER BY ...)",
      "Evaluate Ranking Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), and NTILE(n)",
      "Master Navigation Window Functions: LAG(col, offset) and LEAD(col, offset) for period-over-period growth analysis",
      "Calculate Cumulative Running Totals and Moving Averages using Window Framing (ROWS BETWEEN ...)",
      "Integrate SQL with Python Data Science Stacks: sqlite3, psycopg2, SQLAlchemy Engine, and pandas.read_sql()",
      "Explore AI Vector Databases: Storing AI embeddings and performing similarity searches with pgvector",
      "Complete a Comprehensive Capstone Final Project synthesizing DDL, DML, Joins, Aggregation, CTEs, and Window Functions"
    ],
    sections: [
      {
        heading: "1. Advanced Window Functions & Ranking Mechanics",
        text: "Unlike standard aggregate functions (which collapse rows into summary groups), Window Functions calculate aggregate calculations across a subset of rows (a 'window') while preserving individual row identities:",
        table: {
          headers: ["Window Function", "Syntax Pattern", "Tie-Handling Behavior", "Primary Analytics Scenario"],
          rows: [
            ["ROW_NUMBER()", "ROW_NUMBER() OVER (ORDER BY sales DESC)", "Sequential integers (1, 2, 3, 4); breaks ties arbitrarily", "Pagination & deduplicating duplicate rank rows"],
            ["RANK()", "RANK() OVER (ORDER BY score DESC)", "Gaps in rank sequence on ties (1, 2, 2, 4)", "Official competition leaderboards"],
            ["DENSE_RANK()", "DENSE_RANK() OVER (ORDER BY score DESC)", "No gaps in rank sequence on ties (1, 2, 2, 3)", "Financial bonus tiers and product rankings"],
            ["NTILE(n)", "NTILE(4) OVER (ORDER BY spend DESC)", "Divides dataset into n equal bucket quartiles (1 to 4)", "Customer segmentation & cohort quartile analysis"]
          ]
        },
        bulletPoints: [
          "Window Function Clause: `FUNCTION() OVER (PARTITION BY category ORDER BY sales DESC)`",
          "• `PARTITION BY`: Segregates rows into independent calculation windows (similar to GROUP BY, but rows are not collapsed!).",
          "• `ORDER BY`: Defines row calculation sequence within each partition."
        ]
      },
      {
        heading: "2. Navigation Functions & Cumulative Moving Windows",
        text: "Analyzing business growth trends requires comparing row values against preceding or following records:",
        bulletPoints: [
          "LAG(column, offset, default): Accesses data from a PREVIOUS row in the partition (e.g. `LAG(monthly_sales, 1)` retrieves previous month's revenue to calculate Month-over-Month growth %).",
          "LEAD(column, offset, default): Accesses data from a FOLLOWING row in the partition.",
          "Cumulative Running Totals & Moving Averages (Window Framing):",
          "• `SUM(order_total) OVER (PARTITION BY customer_id ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)`",
          "• Calculates a cumulative lifetime spend total that updates dynamically row-by-row!"
        ]
      },
      {
        heading: "3. Python Integration: pandas, SQLAlchemy & psycopg2",
        text: "Modern data science workflows connect Python scripts directly to relational database engines:",
        bulletPoints: [
          "SQLAlchemy Engine: The industry-standard Python Object Relational Mapper (ORM) connection bridge (`create_engine('postgresql://user:pass@host:5432/dbname')`).",
          "Pandas Integration (pandas.read_sql): Executes SQL queries directly into Pandas DataFrames for immediate analysis and visualization: `df = pd.read_sql(query, engine)`."
        ]
      },
      {
        heading: "4. SQL for AI & Vector Search (pgvector Embeddings)",
        text: "AI and Large Language Model (LLM) applications utilize relational databases extended with vector search capabilities:",
        bulletPoints: [
          "pgvector Extension: PostgreSQL extension for storing high-dimensional vector embeddings generated by OpenAI/Gemini models (`CREATE EXTENSION vector;`).",
          "Cosine Distance Similarity Search: `SELECT document_text FROM vector_store ORDER BY embedding <=> '[0.015, -0.023, ...]' LIMIT 5;` (Performs ultra-fast Retrieval Augmented Generation (RAG) vector searches directly inside SQL!)."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Window Functions: ROW_NUMBER(), MoM Growth with LAG() & Running Totals",
        code: `-- 1. Top 2 Highest Paid Employees per Department using DENSE_RANK()
WITH ranked_employees AS (
    SELECT 
        e.employee_id,
        e.first_name || ' ' || e.last_name AS employee_name,
        e.department,
        e.salary,
        DENSE_RANK() OVER (PARTITION BY e.department ORDER BY e.salary DESC) AS salary_rank
    FROM enterprise_employees AS e
)
SELECT * FROM ranked_employees WHERE salary_rank <= 2;

-- 2. Month-over-Month (MoM) Revenue Growth % using LAG() and Cumulative Running Totals
WITH monthly_revenue AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS sales_month,
        SUM(order_total) AS gross_revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT 
    sales_month,
    gross_revenue,
    -- Retrieve previous month's revenue using LAG()
    LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC) AS previous_month_revenue,
    
    -- Calculate MoM Growth Percentage
    ROUND(((gross_revenue - LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC)) / 
           NULLIF(LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC), 0)) * 100, 2) AS mom_growth_pct,
           
    -- Cumulative Lifetime Running Total
    SUM(gross_revenue) OVER (ORDER BY sales_month ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total_revenue
FROM monthly_revenue
ORDER BY sales_month ASC;`,
        explanation: "Demonstrates DENSE_RANK() partitioned by department, calculating Month-over-Month revenue growth % using LAG(), and computing cumulative running totals with window framing."
      },
      {
        title: "Python Integration (SQLAlchemy + Pandas) & pgvector AI Search",
        code: `# Python Pipeline: Querying SQL database into Pandas DataFrame
import pandas as pd
from sqlalchemy import create_engine

# 1. Establish SQLAlchemy database connection engine
engine = create_engine('postgresql://analytics_user:SecurePass2026!@localhost:5432/enterprise_db')

# 2. Execute SQL query directly into Pandas DataFrame
query = """
SELECT 
    DATE_TRUNC('month', order_date) AS month,
    COUNT(order_id) AS total_orders,
    SUM(order_total) AS total_revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month ASC;
"""
df = pd.read_sql(query, engine)
print(df.head())

-- PostgreSQL pgvector: AI Vector Distance Similarity Search for RAG Applications
-- SELECT top 3 most semantically similar documents to an input AI embedding
SELECT 
    doc_id,
    content_text,
    1 - (embedding <=> '[0.0152, -0.0234, 0.0891, ...]'::vector) AS cosine_similarity
FROM ai_knowledge_base
ORDER BY embedding <=> '[0.0152, -0.0234, 0.0891, ...]'::vector ASC
LIMIT 3;`,
        explanation: "Demonstrates connecting Python (Pandas/SQLAlchemy) to SQL databases, and executing AI vector cosine similarity searches using pgvector."
      }
    ],
    bestPractices: [
      "Use `DENSE_RANK()` when ranking items with ties if you want consecutive rank numbers without gaps.",
      "Use `ROW_NUMBER()` inside a CTE to deduplicate rows or select top N items per partition.",
      "Always use `NULLIF()` when calculating growth percentages with `LAG()` to prevent division-by-zero crashes.",
      "Use `pandas.read_sql(query, engine)` for seamless Python data science and visualization workflows.",
      "Leverage `pgvector` in PostgreSQL for high-performance AI vector similarity searches directly within your relational database."
    ],
    commonMistakes: [
      "Confusing `RANK()` (leaves gaps on ties: 1, 2, 2, 4) with `DENSE_RANK()` (no gaps: 1, 2, 2, 3).",
      "Attempting to use Window Functions inside `WHERE` or `HAVING` clauses (Window functions execute in Step 5 `SELECT`; use a CTE to filter window output!).",
      "Forgetting to specify `ORDER BY` inside `OVER (...)` when calculating cumulative running totals or ranking.",
      "Loading entire multi-gigabyte tables into Pandas RAM instead of performing aggregation inside SQL first."
    ],
    practiceExercise: {
      title: "Window Functions & Capstone Analytics Challenge",
      problem: "Perform the following two tasks:\n1. Compare `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()` when ranking three employees with salaries `$100k, $100k, $80k`.\n\n2. Write a SQL query using `ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC)` inside a CTE to retrieve the most recent single order placed by every customer.",
      solutionCode: `-- Exercise 1 Ranking Output Answers:
-- Employee A ($100k): ROW_NUMBER = 1 | RANK = 1 | DENSE_RANK = 1
-- Employee B ($100k): ROW_NUMBER = 2 | RANK = 1 | DENSE_RANK = 1
-- Employee C ($80k) : ROW_NUMBER = 3 | RANK = 3 | DENSE_RANK = 2

-- Exercise 2 Most Recent Customer Order CTE Solution:
WITH ranked_customer_orders AS (
    SELECT 
        order_id,
        customer_id,
        order_date,
        order_total,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
    FROM orders
)
SELECT order_id, customer_id, order_date, order_total
FROM ranked_customer_orders
WHERE rn = 1;`
    },
    keyTakeaways: [
      "Window functions (`OVER (PARTITION BY ... ORDER BY ...)`) compute analytics across row subsets while preserving individual row identities.",
      "`DENSE_RANK()` ranks items without sequence gaps; `ROW_NUMBER()` assigns unique sequential integers.",
      "`LAG()` and `LEAD()` enable Period-over-Period trend analysis and growth percentage calculations.",
      "Python integration (`SQLAlchemy`, `pandas`) bridges relational databases with data science and machine learning pipelines.",
      "PostgreSQL `pgvector` enables AI vector similarity search directly alongside structured relational data."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  sqlCourseInDb.modules[9] = masterModule10;
  sqlCourseInDb.modules[10] = masterModule11;
  sqlCourseInDb.modules[11] = masterModule12;
  sqlCourseInDb.modules[12] = masterModule13;
  sqlCourseInDb.modules[13] = masterModule14;
  sqlCourseInDb.modules[14] = masterModule15;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Modules 10-15!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod10Index = content.indexOf('"id": "sql-mod-10"');
const webDevIndex = content.indexOf('id: "web-development"');

if (sqlMod10Index !== -1 && webDevIndex !== -1) {
  const mod10Start = content.lastIndexOf('{', sqlMod10Index);
  const webDevStart = content.lastIndexOf('{', webDevIndex);
  
  const beforeMod10 = content.slice(0, mod10Start);
  const afterSqlModules = content.slice(webDevStart);
  
  const modules10To15 = [masterModule10, masterModule11, masterModule12, masterModule13, masterModule14, masterModule15];
  const formattedModules = JSON.stringify(modules10To15, null, 6).slice(1, -1);
  
  content = beforeMod10 + formattedModules.trim() + '\n    ],\n  },\n  ' + afterSqlModules;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Modules 10-15!');
}

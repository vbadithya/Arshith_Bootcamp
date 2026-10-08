const fs = require('fs');

const masterModule11 = {
  id: "sql-mod-11",
  title: "Module 11 — Subqueries, UNION & Advanced Querying",
  description: "Master Advanced Querying Architectures: Subquery Classification (Scalar, Multi-Row, Multi-Column Row Constructors), Multi-Row Operators (IN, NOT IN, ANY/SOME, ALL), Correlated Subqueries, Existence Optimization (EXISTS vs NOT EXISTS), Common Table Expressions (CTEs - WITH clause, AS MATERIALIZED optimization fences), Recursive CTEs (WITH RECURSIVE for Graphs, Trees & Cycle Detection), and Set Operators (UNION, UNION ALL, INTERSECT, EXCEPT/MINUS).",
  completed: false,
  order: 11,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 11! As business requirements become more complex, simple single-table SELECT queries are insufficient. Advanced SQL querying techniques allow software developers and data engineers to break complex analytical tasks down into clean, modular, and maintainable query structures. Subqueries (nested queries), Correlated Subqueries, Common Table Expressions (CTEs with the `WITH` clause), Recursive CTEs for graph traversal, and Set Operators (`UNION`, `INTERSECT`, `EXCEPT`) provide the complete toolkit for enterprise data engineering.",
    objectives: [
      "Master Subquery Classifications: Scalar Subqueries, Multi-Row Subqueries, and Multi-Column Row Constructors",
      "Evaluate Multi-Row Comparison Operators: IN, NOT IN, ANY / SOME, and ALL",
      "Master Correlated Subqueries and optimize existence checks using EXISTS and NOT EXISTS",
      "Avoid the catastrophic NOT IN (..., NULL) trap by preferring NOT EXISTS",
      "Refactor complex nested queries into clean Common Table Expressions (CTEs) using the WITH clause",
      "Control CTE Materialization Optimization Fences (AS MATERIALIZED vs AS NOT MATERIALIZED)",
      "Execute Graph & Tree Traversal using Recursive CTEs (WITH RECURSIVE) with Cycle Detection",
      "Master Set Operators: UNION (deduplicated) vs UNION ALL (high-performance retain all)",
      "Compare INTERSECT and EXCEPT / MINUS set operators across datasets"
    ],
    sections: [
      {
        heading: "1. Subquery Architecture & Classification",
        text: "A subquery is a nested `SELECT` query embedded inside an outer SQL statement (inside `SELECT`, `FROM`, `WHERE`, or `HAVING` clauses):",
        table: {
          headers: ["Subquery Category", "Returned Cell Structure", "Placement Location", "Supported Operators"],
          rows: [
            ["Scalar Subquery", "Single Cell (1 Row, 1 Column)", "SELECT, WHERE, HAVING", "=, <, >, <=, >=, <>"],
            ["Multi-Row Subquery", "Single Column (N Rows, 1 Column)", "WHERE, HAVING", "IN, NOT IN, ANY / SOME, ALL"],
            ["Multi-Column Row Constructor", "Row Vector (1 Row, N Columns)", "WHERE (col1, col2) IN (...)", "IN, =, <>"],
            ["Derived Table Subquery", "Table Grid (N Rows, M Columns)", "FROM (Must have table alias)", "JOIN, SELECT *"]
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
          "• `IN (subquery)`: Builds the complete result list in memory before evaluating the predicate.",
          "• Golden Rule: Use `EXISTS` and `NOT EXISTS` instead of `IN` / `NOT IN` when testing for record existence across large child tables. `EXISTS` short-circuits instantly and avoids the `NOT IN (..., NULL)` trap!"
        ]
      },
      {
        heading: "3. Common Table Expressions (CTEs - WITH Clause) & Recursive CTEs",
        text: "Common Table Expressions (CTEs) define named temporary result sets using the `WITH` clause, replacing unreadable nested subqueries with clean, modular code blocks:",
        bulletPoints: [
          "Standard CTE Syntax: `WITH dept_averages AS (SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department) SELECT * FROM employees e JOIN dept_averages d ON e.department = d.department WHERE e.salary > d.avg_sal;`",
          "Multiple Chained CTEs: You can chain multiple CTEs separated by commas (`WITH cte1 AS (...), cte2 AS (...)`).",
          "CTE Materialization Optimization Fences (PostgreSQL 12+):",
          "• `WITH cte AS MATERIALIZED (...)`: Forces the engine to evaluate the CTE into a physical temporary RAM storage block once.",
          "• `WITH cte AS NOT MATERIALIZED (...)`: Allows the query optimizer to inline the CTE directly into the main query tree for join optimizations.",
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
      "Subqueries can be Scalar (1 cell), Multi-Row (1 column), Row Constructors, or Derived Tables.",
      "`EXISTS` and `NOT EXISTS` short-circuit execution on the first match, outperforming `IN` on large subqueries.",
      "Common Table Expressions (CTEs) with `WITH` make complex queries modular, readable, and maintainable.",
      "`WITH RECURSIVE` enables graph and tree hierarchy traversal (org charts, category trees).",
      "`UNION ALL` appends datasets vertically without sorting overhead; `UNION` removes duplicates."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod11Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-11');
  if (mod11Idx !== -1) sqlCourseInDb.modules[mod11Idx] = masterModule11;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 11!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod11Index = content.indexOf('"id": "sql-mod-11"');
const sqlMod12Index = content.indexOf('"id": "sql-mod-12"');

if (sqlMod11Index !== -1 && sqlMod12Index !== -1) {
  const mod11Start = content.lastIndexOf('{', sqlMod11Index);
  const mod12Start = content.lastIndexOf('{', sqlMod12Index);
  
  const beforeMod11 = content.slice(0, mod11Start);
  const afterMod11 = content.slice(mod12Start);
  
  const formattedMod11 = JSON.stringify(masterModule11, null, 6);
  
  content = beforeMod11 + formattedMod11 + ',\n\n      ' + afterMod11;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 11!');
}

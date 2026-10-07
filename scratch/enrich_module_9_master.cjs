const fs = require('fs');

const masterModule9 = {
  id: "sql-mod-9",
  title: "Module 09 — Aggregate Functions, GROUP BY & HAVING",
  description: "Master Data Analytics & Aggregation Architecture: The 5 Core Aggregate Functions (COUNT(*), COUNT(col), COUNT(DISTINCT col), SUM, AVG, MIN, MAX), Whitespace Syntax Rules, NULL Handling Mechanics, Conditional Aggregation (FILTER (WHERE ...)), Categorical Grouping (GROUP BY Single & Composite Keys), The Golden Rule of SQL Aggregation, WHERE vs HAVING Execution Order, and Multidimensional Enterprise Reporting (ROLLUP, CUBE, GROUPING SETS).",
  completed: false,
  order: 9,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 9! Data aggregation transforms high-volume, detailed transactional logs into executive financial summaries, key performance indicators (KPIs), and analytical business intelligence. SQL aggregate functions perform mathematical calculations across sets of rows, while the GROUP BY clause categorizes records into analytical sub-groups and the HAVING clause filters aggregated group metrics. Mastering aggregation, understanding NULL handling rules, and writing multidimensional reports (using ROLLUP and CUBE) is fundamental for data analysts, financial engineers, and backend developers.",
    objectives: [
      "Master the 5 Standard Aggregate Functions: COUNT(*), COUNT(column), COUNT(DISTINCT column), SUM, AVG, MIN, and MAX",
      "Deconstruct NULL Handling Mechanics: Why aggregate functions ignore NULLs (and how AVG divides by non-NULL count)",
      "Enforce Aggregate Whitespace Syntax Rules: Preventing parser errors with strict function syntax",
      "Implement Conditional Aggregation using the ANSI SQL FILTER (WHERE condition) clause",
      "Group records by single and multi-column composite keys using GROUP BY",
      "Enforce The Golden Rule of SQL Aggregation: Resolving 'Expression not in GROUP BY key' errors",
      "Distinguish WHERE (row filtering before grouping) from HAVING (group filtering after aggregation)",
      "Master Multidimensional Super-Aggregate Reporting: GROUP BY ROLLUP, CUBE, and GROUPING SETS"
    ],
    sections: [
      {
        heading: "1. The 5 Core Aggregate Functions & NULL Handling Rules",
        text: "Aggregate functions take a collection of row values as input and return a single summary value as output. Note that all aggregate functions ignore NULL values except for `COUNT(*)`:",
        table: {
          headers: ["Aggregate Function", "Description", "NULL Handling Behavior", "Enterprise Production Example"],
          rows: [
            ["COUNT(*)", "Counts total raw rows in the group regardless of content", "Includes NULL rows", "SELECT COUNT(*) FROM orders;"],
            ["COUNT(col)", "Counts total non-NULL values in a specific column", "Ignores NULLs", "SELECT COUNT(phone_number) FROM users;"],
            ["COUNT(DISTINCT col)", "Counts unique non-NULL values in a column", "Ignores NULLs", "SELECT COUNT(DISTINCT customer_id) FROM sales;"],
            ["SUM(col)", "Calculates mathematical sum of numeric column", "Ignores NULLs", "SELECT SUM(total_amount) FROM invoices;"],
            ["AVG(col)", "Calculates arithmetic mean value", "Ignores NULLs", "SELECT AVG(salary) FROM employees;"],
            ["MIN(col) / MAX(col)", "Returns lowest or highest value in set (numbers, dates, text)", "Ignores NULLs", "SELECT MIN(price), MAX(price) FROM products;"]
          ]
        },
        bulletPoints: [
          "Crucial AVG() NULL Trap: `AVG(salary)` divides the total sum by the count of NON-NULL salary entries, NOT total table rows! If 4 employees earn $100k and 1 employee has a `NULL` salary, `AVG()` computes `$400k / 4 = $100k`, NOT `$400k / 5 = $80k`. If you want NULLs treated as zero, use `AVG(COALESCE(salary, 0))`.",
          "Whitespace Syntax Rule: No whitespace is allowed between the aggregate function name and the opening parenthesis (e.g. `COUNT(*)` is valid; `COUNT (*)` causes a syntax error in strict database parsers).",
          "Conditional Aggregation (FILTER Clause): ANSI SQL and PostgreSQL allow embedding a `WHERE` condition directly inside an aggregate function:",
          "• Syntax: `SUM(order_total) FILTER (WHERE status = 'Completed') AS completed_revenue`",
          "• Computes status-specific subtotals in a single query pass without requiring multiple subqueries!"
        ]
      },
      {
        heading: "2. Categorical Grouping (GROUP BY) & The Golden Rule of SQL",
        text: "The `GROUP BY` clause collapses multiple data rows sharing identical key values into single summary rows (evaluated during Step 3 of query execution):",
        bulletPoints: [
          "Single-Column Grouping: `GROUP BY department` aggregates rows by unique department names.",
          "Composite Multi-Column Grouping: `GROUP BY region, department` aggregates rows by unique combinations of region and department.",
          "THE GOLDEN RULE OF SQL AGGREGATION:",
          "• Every non-aggregated column listed in the `SELECT` projection list MUST be explicitly included in the `GROUP BY` clause!",
          "• Invalid Query: `SELECT department, job_title, AVG(salary) FROM employees GROUP BY department;` (Crashes with `job_title must appear in the GROUP BY clause` because `job_title` has multiple values per department!).",
          "• Valid Query: `SELECT department, job_title, AVG(salary) FROM employees GROUP BY department, job_title;`."
        ]
      },
      {
        heading: "3. Group Filtering with HAVING vs Row Filtering with WHERE",
        text: "Understanding when to filter using `WHERE` versus `HAVING` is a fundamental requirement for writing correct SQL queries:",
        table: {
          headers: ["Filtering Aspect", "WHERE Clause", "HAVING Clause"],
          rows: [
            ["Execution Pipeline Stage", "Step 2 (Executes BEFORE GROUP BY)", "Step 4 (Executes AFTER GROUP BY)"],
            ["Target Filter Object", "Raw individual table heap rows", "Aggregated group summary buckets"],
            ["Can Use Aggregate Functions?", "NO (e.g., WHERE SUM(salary) > 50000 causes Syntax Error)", "YES (e.g., HAVING SUM(salary) > 50000)"],
            ["Can Use B-Tree Indexes?", "YES (Scans indexed raw table columns)", "NO (Filters calculated group summary statistics)"],
            ["Performance Best Practice", "Filter out unneeded rows early to reduce grouping RAM load", "Use ONLY for conditions involving aggregate functions"]
          ]
        },
        bulletPoints: [
          "Combining WHERE and HAVING for Maximum Performance:",
          "• Always use `WHERE` to filter raw rows first (e.g. `WHERE is_active = TRUE`), reducing the volume of rows that must be processed in RAM during the `GROUP BY` step.",
          "• Use `HAVING` solely to filter aggregate group totals (e.g. `HAVING COUNT(employee_id) > 5`)."
        ]
      },
      {
        heading: "4. Multidimensional Enterprise Reporting (ROLLUP, CUBE & GROUPING SETS)",
        text: "Enterprise financial dashboards require subtotals and grand totals alongside standard grouped metrics. Modern SQL engines provide super-aggregate extensions:",
        bulletPoints: [
          "1. GROUP BY ROLLUP(region, department):",
          "• Generates hierarchical subtotals and a grand total row in a single query pass!",
          "• Produces 3 grouping levels: `(region, department)`, `(region)`, and `()` (Grand Total).",
          "2. GROUP BY CUBE(region, department):",
          "• Generates ALL possible subtotal combinations across all listed dimensions.",
          "• Produces 4 grouping levels: `(region, department)`, `(region)`, `(department)`, and `()` (Grand Total).",
          "3. GROUP BY GROUPING SETS ((region), (department)):",
          "• Explicitly defines exact subtotal dimensions to compute without generating unneeded combinations.",
          "4. Identifying Subtotal Rows with GROUPING():",
          "• The `GROUPING(column)` function returns `1` if a column is aggregated into a subtotal/grand total row, and `0` for regular rows. Use `CASE WHEN GROUPING(region) = 1 THEN 'All Regions' ELSE region END` to format clean report headers!"
        ],
        table: {
          headers: ["Super-Aggregate Clause", "Generated Subtotal Combinations", "Primary Enterprise Use Case"],
          rows: [
            ["ROLLUP (A, B)", "(A, B), (A), ()", "Hierarchical organizational sales reports (Year -> Quarter -> Month)"],
            ["CUBE (A, B)", "(A, B), (A), (B), ()", "Multidimensional OLAP data cube analysis"],
            ["GROUPING SETS ((A), (B))", "(A), (B)", "Custom summary dashboards skipping intermediate hierarchies"]
          ]
        }
      }
    ],
    codeExamples: [
      {
        title: "Departmental Compensation Analytics & Headcount Audit with FILTER & HAVING",
        code: `-- Calculate comprehensive departmental metrics with conditional aggregates and HAVING filters
SELECT 
    e.department,
    
    -- Row counts (COUNT(*) vs COUNT(col) vs COUNT(DISTINCT col))
    COUNT(*) AS total_staff_count,
    COUNT(e.commission) AS staff_receiving_commission,
    COUNT(DISTINCT e.job_title) AS unique_job_titles_count,
    
    -- Conditional Aggregation using ANSI SQL FILTER (WHERE ...)
    SUM(e.salary) FILTER (WHERE e.is_full_time = TRUE) AS full_time_payroll,
    SUM(e.salary) FILTER (WHERE e.is_full_time = FALSE) AS part_time_payroll,
    
    -- Standard Aggregates
    ROUND(AVG(e.salary), 2) AS average_monthly_salary,
    MIN(e.salary) AS lowest_salary,
    MAX(e.salary) AS highest_salary
FROM enterprise_employees AS e
WHERE e.is_active = TRUE -- Step 2: Filter active staff BEFORE grouping
GROUP BY e.department  -- Step 3: Group remaining rows by department
HAVING COUNT(*) >= 3    -- Step 4: Filter departments with at least 3 active staff
   AND AVG(e.salary) > 4000.00
ORDER BY average_monthly_salary DESC;`,
        explanation: "Demonstrates WHERE filtering active staff, grouping by department, conditional aggregation with FILTER (WHERE ...), aggregate calculations, and group-level filtering with HAVING."
      },
      {
        title: "Multidimensional Executive Financial Reporting using ROLLUP & GROUPING()",
        code: `-- Executive Financial Report with Regional Subtotals and Grand Total
SELECT 
    -- Use GROUPING() to label Subtotal and Grand Total rows cleanly
    CASE WHEN GROUPING(s.region) = 1 THEN '=== GRAND TOTAL ===' ELSE s.region END AS region_label,
    CASE WHEN GROUPING(s.department) = 1 THEN '--- Region Subtotal ---' ELSE s.department END AS dept_label,
    
    COUNT(s.sale_id) AS total_transactions,
    ROUND(SUM(s.sale_amount), 2) AS total_revenue,
    ROUND(AVG(s.sale_amount), 2) AS avg_transaction_value
FROM regional_sales AS s
WHERE s.sale_date >= '2026-01-01'
-- GROUP BY ROLLUP generates (region, department), (region), and () grand total!
GROUP BY ROLLUP(s.region, s.department)
ORDER BY s.region NULLS LAST, s.department NULLS LAST;`,
        explanation: "Demonstrates generating hierarchical sales subtotals and grand totals using GROUP BY ROLLUP, and formatting summary headers using the GROUPING() helper function."
      }
    ],
    bestPractices: [
      "Remember The Golden Rule of SQL: Every non-aggregated column selected in `SELECT` MUST appear in `GROUP BY`.",
      "Use `WHERE` to filter raw rows *before* grouping to reduce memory overhead in RAM buffer pools.",
      "Use `HAVING` solely for conditions that involve aggregate functions (`SUM()`, `AVG()`, `COUNT()`).",
      "Use `COALESCE(salary, 0)` inside `AVG()` if missing `NULL` salaries should be treated as `$0` in average calculations.",
      "Leverage `FILTER (WHERE condition)` inside aggregate functions for clean, high-performance conditional reporting.",
      "Use `GROUP BY ROLLUP` and `GROUPING()` to generate executive subtotals and grand totals in a single database query pass."
    ],
    commonMistakes: [
      "Attempting to use aggregate functions inside a `WHERE` clause (e.g. `WHERE SUM(salary) > 50000`), causing syntax compilation errors.",
      "Selecting non-aggregated columns without including them in `GROUP BY`, triggering `Expression not in GROUP BY key` crashes.",
      "Forgetting that `AVG()` ignores `NULL` values, leading to skewed arithmetic mean calculations in financial reports.",
      "Adding whitespace between aggregate function names and parentheses (e.g. `COUNT (*)`), breaking strict SQL parsers."
    ],
    practiceExercise: {
      title: "Aggregation & Multidimensional Reporting Challenge",
      problem: "Perform the following two tasks:\n1. Explain why the following query fails with an error and provide the corrected SQL code:\n   `SELECT department, region, SUM(salary) FROM employees WHERE SUM(salary) > 100000 GROUP BY department;` \n\n2. Write a SQL query on an `orders` table (`region`, `category`, `order_total`) that generates regional subtotals and a grand total of `SUM(order_total)` using `GROUP BY ROLLUP`.",
      solutionCode: `-- Exercise 1 Explanation & Correction:
-- Failure Reasons:
-- 1. 'region' is selected in SELECT but missing from GROUP BY (Violates Golden Rule of SQL).
-- 2. SUM(salary) > 100000 is placed in WHERE instead of HAVING (Aggregate functions cannot go in WHERE).

-- Corrected Query:
SELECT department, region, SUM(salary) AS total_payroll
FROM employees
GROUP BY department, region
HAVING SUM(salary) > 100000;

-- Exercise 2 Multidimensional ROLLUP Query:
SELECT 
    COALESCE(region, 'GRAND TOTAL') AS region,
    COALESCE(category, 'Regional Subtotal') AS category,
    SUM(order_total) AS total_revenue
FROM orders
GROUP BY ROLLUP(region, category);`
    },
    keyTakeaways: [
      "Aggregate functions (COUNT, SUM, AVG, MIN, MAX) summarize multiple rows into a single output value while ignoring NULLs (except COUNT(*)).",
      "The Golden Rule of SQL: Every non-aggregated column in `SELECT` MUST be included in the `GROUP BY` clause.",
      "`WHERE` filters raw rows BEFORE grouping in Step 2; `HAVING` filters aggregated group metrics AFTER grouping in Step 4.",
      "Use `FILTER (WHERE condition)` inside aggregate functions for clean conditional summary metrics.",
      "`GROUP BY ROLLUP` and `CUBE` compute hierarchical subtotals and grand totals in a single high-performance query pass."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod9Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-9');
  if (mod9Idx !== -1) sqlCourseInDb.modules[mod9Idx] = masterModule9;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 9!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod9Index = content.indexOf('"id": "sql-mod-9"');
const sqlMod10Index = content.indexOf('"id": "sql-mod-10"');

if (sqlMod9Index !== -1 && sqlMod10Index !== -1) {
  const mod9Start = content.lastIndexOf('{', sqlMod9Index);
  const mod10Start = content.lastIndexOf('{', sqlMod10Index);
  
  const beforeMod9 = content.slice(0, mod9Start);
  const afterMod9 = content.slice(mod10Start);
  
  const formattedMod9 = JSON.stringify(masterModule9, null, 6);
  
  content = beforeMod9 + formattedMod9 + ',\n\n      ' + afterMod9;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 9!');
}

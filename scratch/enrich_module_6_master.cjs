const fs = require('fs');

const masterModule6 = {
  id: "sql-mod-6",
  title: "Module 06 — SELECT Statement: Retrieving Data",
  description: "Master Data Query Language (DQL): Declarative Querying, the 8-step Logical Query Processing Order (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT), Selective Column Projection vs SELECT * Anti-Pattern, Computed Arithmetic Fields, Division-by-Zero Protection (NULLIF), String Concatenation (||, CONCAT), Constant Literals, Table Aliases, and Index-Only Scan Optimization.",
  completed: false,
  order: 6,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 6! The SELECT statement is the foundational command of Data Query Language (DQL). It enables software engineers, database architects, and data analysts to extract, project, compute, transform, and format structured data streams stored within database tables. SQL is a declarative language—meaning you specify *what* data you require, while the database engine's Cost-Based Optimizer (CBO) determines *how* to execute the retrieval using index scans, table heap scans, or hash joins. Mastering SELECT statement projection, logical processing order, and expression evaluation is critical for writing performant, enterprise-grade database queries.",
    objectives: [
      "Master the Declarative Nature of SQL: Distinguishing query intent from physical execution strategy",
      "Deconstruct the 8-Step Logical Query Processing Order of SQL clauses",
      "Understand why SELECT column aliases cannot be referenced in WHERE or GROUP BY clauses",
      "Evaluate Selective Column Projection vs the severe SELECT * production anti-pattern",
      "Perform Mathematical Calculations and Computed Field Projections (+, -, *, /, %)",
      "Prevent Division-by-Zero Runtime Crashes using NULLIF(denominator, 0)",
      "Concatenate String Columns using standard || operators, CONCAT(), and CONCAT_WS()",
      "Project Constant Literals and assign human-readable Column & Table Aliases (AS)",
      "Optimize Query Performance using Index-Only Scans and RAM Buffer Management"
    ],
    sections: [
      {
        heading: "1. The Declarative Model & The 8-Step Logical Query Execution Order",
        text: "Although developers write `SELECT` first at the top of a SQL query, the database engine processes clauses in a completely different logical order. Understanding this execution pipeline explains key SQL syntax rules and scoping constraints:",
        bulletPoints: [
          "1. FROM & JOINs: Identifies target source tables, evaluates join conditions, and builds an intermediate working table set.",
          "2. WHERE: Applies row-level boolean predicates to filter out non-matching rows before grouping.",
          "3. GROUP BY: Segregates remaining rows into distinct categorical summary buckets based on grouping keys.",
          "4. HAVING: Filters aggregate group buckets after mathematical calculations are performed.",
          "5. SELECT: Evaluates expression projections, applies column aliases, and formats output data streams.",
          "6. DISTINCT: Scans result rows and removes duplicate tuple combinations.",
          "7. ORDER BY: Sorts the final result rows in ascending or descending sequence.",
          "8. LIMIT / OFFSET: Restricts the output row count delivered to the requesting client application."
        ],
        table: {
          headers: ["Execution Order", "SQL Clause", "Logical Function", "Can Reference SELECT Aliases?"],
          rows: [
            ["Step 1", "FROM / JOIN", "Gathers source tables and resolves join keys", "NO"],
            ["Step 2", "WHERE", "Filters raw data rows using boolean predicates", "NO"],
            ["Step 3", "GROUP BY", "Groups rows into categorical buckets", "NO"],
            ["Step 4", "HAVING", "Filters aggregate group statistics", "NO"],
            ["Step 5", "SELECT", "Projects columns and evaluates computed expressions", "N/A (Defines Aliases)"],
            ["Step 6", "DISTINCT", "Removes duplicate output row tuples", "YES"],
            ["Step 7", "ORDER BY", "Sorts final result set rows", "YES"],
            ["Step 8", "LIMIT / OFFSET", "Restricts total rows returned to client", "YES"]
          ]
        },
        bulletPoints: [
          "Why WHERE Cannot See SELECT Aliases: Because step 2 (`WHERE`) runs BEFORE step 5 (`SELECT`), column aliases created in `SELECT` do not exist yet when `WHERE` is evaluated! Attempting to write `WHERE annual_salary > 50000` (where `annual_salary` is an alias created in SELECT) results in a `Column Does Not Exist` error.",
          "Why ORDER BY CAN See SELECT Aliases: Because step 7 (`ORDER BY`) runs AFTER step 5 (`SELECT`), `ORDER BY` can freely sort results using aliases created in `SELECT`."
        ]
      },
      {
        heading: "2. Column Projection vs The SELECT * Production Anti-Pattern",
        text: "Column projection specifies which fields are retrieved from physical disk storage. Using `SELECT *` fetches every single column defined on a table:",
        table: {
          headers: ["Query Projection Strategy", "Disk & RAM Impact", "Network Latency", "Production Resilience"],
          rows: [
            ["SELECT *", "High (Reads entire table heap pages into RAM)", "High (Transfers unneeded text/BLOB bytes)", "Fragile (Breaks when schema columns change)"],
            ["Explicit Projection (SELECT col1, col2)", "Low (Reads only required columns; enables Index-Only Scans)", "Low (Transfers minimal required payload bytes)", "Resilient (Un-affected by table schema alterations)"]
          ]
        },
        bulletPoints: [
          "Why SELECT * Is a Severe Enterprise Anti-Pattern:",
          "1. Destroys Index-Only Scans: If a B-Tree index contains `(id, email)`, a query requesting `SELECT id, email` is served instantly from index memory. `SELECT *` forces the engine to perform expensive disk heap lookups for all other unindexed columns.",
          "2. Inflates Network Bandwidth & Latency: Fetching unneeded `TEXT`, `JSONB`, or `BYTEA` columns increases network payload sizes by orders of magnitude.",
          "3. Breaks Backend Application Code: If a migration adds or re-orders columns, positional code relying on `SELECT *` will parse incorrect data fields."
        ]
      },
      {
        heading: "3. Computed Fields, Arithmetic Math & Division-by-Zero Protection",
        text: "SELECT projections can perform dynamic mathematical calculations directly on column values:",
        bulletPoints: [
          "Arithmetic Math Operators: Use `+`, `-`, `*`, `/`, and `%` on numeric columns (e.g., `unit_price * quantity AS subtotal`).",
          "Division-by-Zero Protection (NULLIF):",
          "• Dividing by zero causes relational query execution to crash with a `division by zero` error.",
          "• Solution: Wrap denominators in `NULLIF(denominator, 0)`. The `NULLIF(a, b)` function returns `NULL` if `a == b`, preventing crashes because any number divided by `NULL` safely yields `NULL` instead of an error!",
          "• Example: `SELECT total_revenue / NULLIF(total_orders, 0) AS avg_order_value;`",
          "Constant Literal Projections: Project static values, strings, or current timestamps alongside column data (e.g., `SELECT 'USD' AS currency_code, 0.08 AS sales_tax_rate`)."
        ]
      },
      {
        heading: "4. String Concatenation & Formatting",
        text: "Combining textual columns is a common requirement for generating display names, addresses, and API response streams:",
        bulletPoints: [
          "ANSI Standard Concatenation Operator (||): Combines strings directly: `first_name || ' ' || last_name AS full_name`. Note: If any operand is `NULL`, standard `||` returns `NULL`.",
          "CONCAT() Function: Concatenates arguments while converting `NULL` values to empty strings automatically: `CONCAT(first_name, ' ', last_name)`.",
          "CONCAT_WS() Function (Concatenate With Separator): Formats strings with a specified separator as the first argument, skipping `NULL` entries: `CONCAT_WS(', ', city, state, country)` yields `'New York, NY, USA'`."
        ]
      },
      {
        heading: "5. Table Aliases & Index-Only Scan Optimization",
        text: "Assigning table aliases simplifies multi-table queries and improves code legibility:",
        bulletPoints: [
          "Table Aliases (AS): Assign short identifiers to tables in the `FROM` clause: `FROM enterprise_employees AS e`. Once defined, prefix all projected columns with the table alias (`e.employee_id`, `e.first_name`) to eliminate column ambiguity errors.",
          "Index-Only Scan Optimization: When a SELECT query projects ONLY columns present in a B-Tree index, the database engine executes an Index-Only Scan. The engine fetches results directly from high-speed RAM index pages without touching physical disk table heaps!"
        ]
      }
    ],
    codeExamples: [
      {
        title: "Computed Financial Projections, Division-by-Zero Protection & String Formatting",
        code: `-- Calculate comprehensive employee compensation metrics with dynamic calculations and safe division
SELECT 
    e.employee_id,
    
    -- String Concatenation using CONCAT_WS
    CONCAT_WS(' ', e.first_name, e.last_name) AS full_name,
    
    e.department,
    e.salary AS monthly_salary,
    
    -- Arithmetic Calculations
    e.salary * 12 AS annual_gross_salary,
    (e.salary * 12) * 0.15 AS estimated_tax_deduction,
    (e.salary * 12) * 0.85 AS net_annual_take_home,
    
    -- Division-by-Zero Protection using NULLIF
    ROUND(e.sales_volume / NULLIF(e.deals_closed, 0), 2) AS avg_deal_size,
    
    -- Constant Literal Projection
    'USD' AS currency
FROM enterprise_employees AS e
WHERE e.is_active = TRUE;`,
        explanation: "Demonstrates table aliases (e), string concatenation with CONCAT_WS, computed financial fields, division-by-zero protection using NULLIF, and constant literal projections."
      },
      {
        title: "E-Commerce Multi-Item Pricing Projections with Tax & Discounts",
        code: `-- Calculate detailed line-item subtotals, discount subtractions, and tax calculations
SELECT 
    oi.order_id,
    oi.item_name,
    oi.unit_price,
    oi.quantity,
    
    -- Computed Subtotal
    (oi.unit_price * oi.quantity) AS raw_subtotal,
    
    -- Computed Discount Amount
    ROUND((oi.unit_price * oi.quantity) * oi.discount_rate, 2) AS discount_savings,
    
    -- Net Total after Discount
    ROUND((oi.unit_price * oi.quantity) * (1 - oi.discount_rate), 2) AS net_subtotal,
    
    -- Grand Total including 8% Sales Tax
    ROUND(((oi.unit_price * oi.quantity) * (1 - oi.discount_rate)) * 1.08, 2) AS grand_total_with_tax
FROM order_items AS oi
WHERE oi.order_id = 10482;`,
        explanation: "Computes line-item totals, dynamic percentage discounts, and sales tax additions directly inside query projections."
      }
    ],
    bestPractices: [
      "Avoid using `SELECT *` in production code; explicitly specify required columns to enable Index-Only Scans and conserve bandwidth.",
      "Always use `NULLIF(denominator, 0)` when dividing numeric columns to prevent unexpected runtime `division by zero` crashes.",
      "Assign short, intuitive table aliases (e.g., `FROM orders AS o`) and prefix all projected columns (`o.order_id`) to prevent ambiguity.",
      "Remember the 8-step logical execution order: `FROM` runs first, `WHERE` runs second, and `SELECT` runs fifth.",
      "Use `CONCAT()` or `CONCAT_WS()` instead of `||` when concatenating strings that may contain `NULL` values."
    ],
    commonMistakes: [
      "Attempting to reference a `SELECT` column alias inside a `WHERE` or `GROUP BY` clause, causing a `Column Does Not Exist` error.",
      "Using `SELECT *` in high-volume production APIs, degrading query performance and breaking code when schemas evolve.",
      "Performing division without `NULLIF`, causing catastrophic production query crashes when zero values occur.",
      "Using standard `||` string concatenation on nullable columns, causing the entire concatenated result to evaluate to `NULL`."
    ],
    practiceExercise: {
      title: "Logical Execution Order & Expression Projection Challenge",
      problem: "Perform the following two tasks:\n1. State whether each of the following 4 SQL clauses can reference a column alias created in the `SELECT` clause, and explain why based on the 8-step execution order:\n   a. WHERE\n   b. GROUP BY\n   c. ORDER BY\n   d. LIMIT\n\n2. Write a SQL SELECT query on a `sales_reps` table returning:\n   a. `rep_id`\n   b. Full name concatenated (`first_name` and `last_name` separated by space)\n   c. `total_revenue` divided by `clients_served` (with protection against division-by-zero), aliased as `revenue_per_client`\n   d. Constant literal string 'Q4-2026' aliased as `reporting_period`.",
      solutionCode: `-- Exercise 1 Answers:
-- a. WHERE    : NO  (WHERE executes in Step 2; SELECT executes later in Step 5)
-- b. GROUP BY : NO  (GROUP BY executes in Step 3; SELECT executes later in Step 5)
-- c. ORDER BY : YES (ORDER BY executes in Step 7; AFTER SELECT in Step 5)
-- d. LIMIT    : YES (LIMIT executes in Step 8; AFTER SELECT in Step 5)

-- Exercise 2 SQL Query Answer:
SELECT 
    sr.rep_id,
    CONCAT_WS(' ', sr.first_name, sr.last_name) AS full_name,
    ROUND(sr.total_revenue / NULLIF(sr.clients_served, 0), 2) AS revenue_per_client,
    'Q4-2026' AS reporting_period
FROM sales_reps AS sr;`
    },
    keyTakeaways: [
      "SQL is declarative: you specify *what* data to retrieve, while the Cost-Based Optimizer determines *how* to execute the query.",
      "The 8-Step Execution Order is: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT.",
      "`SELECT *` is a severe production anti-pattern that destroys Index-Only Scans and inflates network payload sizes.",
      "Wrap denominators in `NULLIF(denominator, 0)` to prevent production query crashes from division-by-zero errors.",
      "Column aliases defined in SELECT can be used in ORDER BY and LIMIT clauses, but CANNOT be used in WHERE or GROUP BY."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod6Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-6');
  if (mod6Idx !== -1) {
    sqlCourseInDb.modules[mod6Idx] = masterModule6;
  } else {
    sqlCourseInDb.modules[5] = masterModule6;
  }
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 6!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod6Index = content.indexOf('"id": "sql-mod-6"');
const sqlMod7Index = content.indexOf('"id": "sql-mod-7"');

if (sqlMod6Index !== -1 && sqlMod7Index !== -1) {
  const mod6Start = content.lastIndexOf('{', sqlMod6Index);
  const mod7Start = content.lastIndexOf('{', sqlMod7Index);
  
  const beforeMod6 = content.slice(0, mod6Start);
  const afterMod6 = content.slice(mod7Start);
  
  const formattedMod6 = JSON.stringify(masterModule6, null, 6);
  
  content = beforeMod6 + formattedMod6 + ',\n\n      ' + afterMod6;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 6!');
}

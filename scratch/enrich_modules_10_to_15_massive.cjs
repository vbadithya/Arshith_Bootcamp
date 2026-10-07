const fs = require('fs');

// We load existing modules 1-9 from db.json to preserve them
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const existingSql = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

const modules1To9 = existingSql.modules.slice(0, 9);

const massiveModules10To15 = [
  {
    id: "sql-mod-10",
    title: "Module 10 — SQL Joins & Relationships",
    description: "Master relational theory, normalization (1NF, 2NF, 3NF), and multi-table joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and SELF JOIN for hierarchical organizational data.",
    completed: false,
    order: 10,
    published: true,
    readingMaterial: {
      introduction: "Relational database normalization breaks large flat files down into smaller, logical entities (Tables) connected by Foreign Key relationships. SQL Joins allow software developers and data analysts to reconstruct related data rows across multiple tables on-the-fly. Mastering joins is fundamental to relational database engineering.",
      objectives: [
        "Understand Relational Database Normalization (1NF, 2NF, 3NF) and Foreign Key mapping",
        "Master INNER JOIN for retrieving intersecting records between multiple tables",
        "Master LEFT (OUTER) JOIN for preserving all rows from the primary left table",
        "Understand RIGHT JOIN and FULL OUTER JOIN for complete set coverage",
        "Use CROSS JOIN to generate Cartesian products for grids and matrix generation",
        "Execute SELF JOIN to query hierarchical data (Employee-Manager, Parent-Child Categories)",
        "Optimize join execution using indexed foreign keys and join algorithms (Hash Join, Nested Loop)"
      ],
      sections: [
        {
          heading: "1. Inner Joins & Multi-Table Querying",
          text: "An INNER JOIN evaluates an ON join condition and returns ONLY the rows where a matching key exists in BOTH the left and right tables ($A \\cap B$). If a row in table A has no matching key in table B, that row is excluded from the output.",
          bulletPoints: [
            "Explicit JOIN Syntax: SELECT * FROM orders o JOIN customers c ON o.customer_id = c.customer_id;",
            "Multi-Table Joins: Chain multiple JOIN clauses to link 3, 4, or 5 tables in a single query.",
            "Table Aliases: Always assign short table aliases (e.g., c for customers, o for orders) to prevent column ambiguity errors."
          ]
        },
        {
          heading: "2. Outer Joins (Left, Right, Full) & Anti-Join Pattern",
          text: "Outer joins retain rows even when no matching key exists in the joined table:",
          bulletPoints: [
            "LEFT JOIN ($A \\cup (A \\cap B)$): Returns ALL rows from the left table. If no match exists on the right, right table columns return NULL.",
            "RIGHT JOIN ($B \\cup (A \\cap B)$): Returns ALL rows from the right table. (Engineers generally rewrite RIGHT JOINs as equivalent LEFT JOINs for code consistency).",
            "FULL OUTER JOIN ($A \\cup B$): Returns ALL records from both tables, filling unmatched fields with NULL.",
            "Anti-Join Pattern: Use LEFT JOIN ... WHERE right.id IS NULL to instantly locate unmatched records (e.g. Customers who have NEVER placed an order)."
          ],
          table: {
            headers: ["Join Type", "Venn Set Equivalent", "Unmatched Left Rows?", "Unmatched Right Rows?", "Common Production Use Case"],
            rows: [
              ["INNER JOIN", "A ∩ B", "Discarded", "Discarded", "Fetching orders with verified customer details"],
              ["LEFT JOIN", "A ∪ (A ∩ B)", "Retained (Right cols NULL)", "Discarded", "Listing all registered users + their orders (if any)"],
              ["RIGHT JOIN", "B ∪ (A ∩ B)", "Discarded", "Retained (Left cols NULL)", "Rarely used; rewritten as LEFT JOIN"],
              ["FULL OUTER JOIN", "A ∪ B", "Retained", "Retained", "Comparing two external dataset snapshots"],
              ["CROSS JOIN", "A × B", "All combinations", "All combinations", "Generating full product size/color variant matrix"]
            ]
          }
        },
        {
          heading: "3. Special Joins: Cross Join & Self Join",
          text: "CROSS JOIN generates a Cartesian product where every row in Table A is combined with every row in Table B ($M \\times N$ total rows). SELF JOIN joins a table to itself using distinct aliases, which is essential for querying hierarchical datasets like organizational employee-manager trees or threaded comments.",
          bulletPoints: [
            "CROSS JOIN: SELECT * FROM sizes CROSS JOIN colors; (Returns 3 sizes × 4 colors = 12 total variant combinations).",
            "SELF JOIN: SELECT e.name AS Employee, m.name AS Manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.emp_id;"
          ]
        },
        {
          heading: "4. RDBMS Join Execution Algorithms",
          text: "The database query optimizer selects from 3 primary join execution algorithms depending on table sizes and index availability:",
          table: {
            headers: ["Algorithm", "Mechanism", "Best Suited For", "Indexing Requirement"],
            rows: [
              ["Nested Loop Join", "For each row in outer table, scans inner table", "Small datasets or indexed foreign keys", "Highly benefits from Index on Foreign Key"],
              ["Hash Join", "Hashes smaller table into memory RAM, scans larger table", "Large unindexed tables in analytics", "No index required (Memory heavy)"],
              ["Sort-Merge Join", "Sorts both tables on join key, then merges matches", "Pre-sorted indexed data or range joins", "Index on join key accelerates sorting"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Multi-Table E-Commerce Join Query (5 Tables)",
          code: `-- Retrieve complete order fulfillment details joining 5 tables
SELECT 
    o.order_id,
    o.order_date,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.email,
    p.product_name,
    p.sku,
    oi.quantity,
    oi.unit_price,
    (oi.quantity * oi.unit_price) AS line_item_total,
    s.shipping_status,
    s.tracking_number
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id
LEFT JOIN shipments s ON o.order_id = s.order_id
WHERE o.order_date >= '2026-01-01'
ORDER BY o.order_date DESC, o.order_id;`,
          explanation: "INNER JOINs connect mandatory order details, while LEFT JOIN on shipments ensures orders awaiting shipment are still included with NULL shipping status."
        },
        {
          title: "Anti-Join & Self Join Queries",
          code: `-- 1. Anti-Join: Find all registered customers who have NEVER placed an order
SELECT c.customer_id, c.first_name, c.email, c.created_at
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;

-- 2. Self Join: Organizational Hierarchy Query
SELECT 
    e.emp_id AS "Employee ID",
    e.first_name AS "Employee Name",
    e.job_title AS "Job Title",
    COALESCE(m.first_name, 'Executive Management') AS "Reports To Manager"
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id
ORDER BY e.emp_id;`,
          explanation: "The anti-join filters for o.order_id IS NULL to isolate inactive users. The self-join aliases employees twice as 'e' and 'm' to resolve manager hierarchies."
        }
      ],
      practiceExercise: {
        title: "Multi-Table Join & Unmatched Filtering Challenge",
        problem: "Write a SQL query joining 'products' and 'order_items' to find: 1. All products that have NEVER been ordered by any customer. 2. Return product_id, product_name, unit_price, and category.",
        solutionCode: `SELECT 
    p.product_id,
    p.product_name,
    p.unit_price,
    p.category
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
WHERE oi.item_id IS NULL
ORDER BY p.product_name;`
      },
      keyTakeaways: [
        "INNER JOIN discards unmatched rows; LEFT JOIN preserves all records from the primary left table.",
        "Use the Anti-Join pattern (LEFT JOIN ... WHERE right.id IS NULL) to locate unmatched records.",
        "Always index Foreign Key columns to allow the RDBMS query engine to use fast Nested Loop and Index Scans during joins.",
        "Use SELF JOIN with distinct table aliases to query hierarchical entity structures like employee-manager relationships."
      ]
    }
  },
  {
    id: "sql-mod-11",
    title: "Module 11 — Subqueries, UNION & Advanced Querying",
    description: "Master subqueries (Scalar, Multi-Row, Correlated EXISTS/NOT EXISTS), Common Table Expressions (CTEs), UNION, UNION ALL, INTERSECT, and EXCEPT set operators.",
    completed: false,
    order: 11,
    published: true,
    readingMaterial: {
      introduction: "As business analytical requirements grow in complexity, single-level SQL queries become insufficient. Subqueries and Common Table Expressions (CTEs) enable modular, multi-level query engineering—allowing you to feed the output of an inner query directly into an outer query or break complex problems down into structured, maintainable blocks.",
      objectives: [
        "Master Scalar Subqueries returning a single value inside SELECT or WHERE",
        "Write Multi-row Subqueries using IN, NOT IN, ANY, and ALL operators",
        "Understand Correlated Subqueries and the short-circuit evaluation of EXISTS / NOT EXISTS",
        "Construct modular, readable queries using Common Table Expressions (WITH CTE AS)",
        "Combine dataset result sets using UNION, UNION ALL, INTERSECT, and EXCEPT set operators"
      ],
      sections: [
        {
          heading: "1. Subquery Classification & Mechanics",
          text: "A subquery is a SELECT query nested inside another statement. Subqueries are categorized by their return signature and execution relationship:",
          bulletPoints: [
            "Scalar Subquery: Returns exactly 1 row and 1 column. Usable anywhere a single literal value is expected.",
            "Multi-Row Subquery: Returns a single column containing multiple rows. Usable with IN, NOT IN, ANY, ALL.",
            "Derived Table (Subquery in FROM): Acts as an inline temporary table requiring an explicit table alias.",
            "Correlated Subquery: References columns from the outer query. Executes once per candidate row evaluated by the outer query."
          ],
          table: {
            headers: ["Subquery Type", "Return Signature", "Allowed Operators", "Execution Model", "Primary Best Practice Use Case"],
            rows: [
              ["Scalar Subquery", "1 Row, 1 Column", "=, <, >, <=, >=, !=", "Executed once globally", "Comparing values against table-wide AVG, MAX, MIN"],
              ["Multi-Row Subquery", "N Rows, 1 Column", "IN, NOT IN, ANY, ALL", "Executed once globally", "Filtering IDs against a list returned by another query"],
              ["Correlated Subquery", "N Rows, N Columns", "EXISTS, NOT EXISTS", "Executed once PER outer row", "Checking entity presence in child tables with short-circuiting"],
              ["Derived Table", "N Rows, N Columns", "SELECT, JOIN", "Executed once into temp table", "Aggregating data before performing secondary joins"]
            ]
          }
        },
        {
          heading: "2. Correlated Subqueries & EXISTS vs IN Pitfall",
          text: "EXISTS evaluates whether a subquery returns ANY rows, terminating evaluation as soon as a single match is found (short-circuit evaluation).",
          bulletPoints: [
            "EXISTS vs IN: Use EXISTS for correlated checks across indexed foreign keys—it is significantly faster than IN on large datasets.",
            "NOT IN Pitfall: If a subquery used with NOT IN returns a single NULL value, the entire NOT IN expression evaluates to UNKNOWN and returns ZERO rows! Always use NOT EXISTS instead."
          ]
        },
        {
          heading: "3. Common Table Expressions (CTEs - WITH Clause)",
          text: "A Common Table Expression (CTE) defines a named temporary result set defined using a WITH clause. CTEs dramatically improve query readability over deeply nested inline subqueries.",
          bulletPoints: [
            "Single CTE Syntax: WITH department_payroll AS (SELECT dept_id, SUM(salary) AS total FROM employees GROUP BY dept_id) SELECT * FROM department_payroll;",
            "Chained CTEs: Define multiple comma-separated CTEs where subsequent CTEs reference earlier ones."
          ]
        },
        {
          heading: "4. SQL Set Operators (UNION, INTERSECT, EXCEPT)",
          text: "Set operators combine rows from two or more independent SELECT queries into a single result set. Both queries MUST have identical column counts and matching data types:",
          table: {
            headers: ["Set Operator", "Mathematical Set Representation", "Deduplication Action?", "Performance Characteristic"],
            rows: [
              ["UNION", "A ∪ B", "YES (Deduplicates output rows)", "Slower (Requires deduplication sort/hash pass)"],
              ["UNION ALL", "A ∪ B (with duplicates)", "NO (Preserves all rows)", "Blazing Fast (Directly appends streams)"],
              ["INTERSECT", "A ∩ B", "YES (Returns common rows)", "Requires sorting pass"],
              ["EXCEPT / MINUS", "A - B", "YES (Returns rows in A not in B)", "Requires sorting pass"]
            ]
          }
        }
      ],
      codeExamples: [
        {
          title: "Multi-Stage Chained CTE & Correlated EXISTS Query",
          code: `-- Step 1: Define chained CTEs for executive revenue analytics
WITH regional_sales AS (
    SELECT 
        c.country,
        COUNT(o.order_id) AS order_count,
        SUM(o.order_total) AS gross_revenue
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.country
),
top_performing_regions AS (
    SELECT country, gross_revenue
    FROM regional_sales
    WHERE gross_revenue > 50000.00
)
-- Step 2: Main query joining CTE with customer directory
SELECT 
    c.customer_id,
    c.first_name,
    c.country,
    tpr.gross_revenue AS region_total_revenue
FROM customers c
JOIN top_performing_regions tpr ON c.country = tpr.country
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.customer_id = c.customer_id AND o.order_total > 1000.00
)
ORDER BY tpr.gross_revenue DESC, c.customer_id;`,
          explanation: "Chained CTEs structure complex multi-step analytics. EXISTS short-circuits to verify if the customer has placed at least one high-value order."
        },
        {
          title: "UNION ALL & EXCEPT Set Operations",
          code: `-- 1. Combine Active Customers and Archival Customers using UNION ALL
SELECT customer_id, email, 'Active Database' AS source_db FROM customers_active
UNION ALL
SELECT customer_id, email, 'Archive Database' AS source_db FROM customers_archive;

-- 2. EXCEPT: Find customers who bought in 2024 but bought NOTHING in 2025
SELECT customer_id FROM orders WHERE EXTRACT(YEAR FROM order_date) = 2024
EXCEPT
SELECT customer_id FROM orders WHERE EXTRACT(YEAR FROM order_date) = 2025;`,
          explanation: "UNION ALL appends streams without deduplication overhead. EXCEPT isolates customer IDs present in 2024 who have no records in 2025."
        }
      ],
      practiceExercise: {
        title: "Subquery & CTE Analytical Challenge",
        problem: "Write a query using a CTE named 'high_salary_dept' that calculates the average salary per department, and then returns all employees whose salary is higher than their respective department's average salary.",
        solutionCode: `WITH dept_avg AS (
    SELECT department, AVG(salary) AS avg_dept_salary
    FROM employees
    GROUP BY department
)
SELECT 
    e.employee_id,
    e.first_name,
    e.department,
    e.salary,
    ROUND(da.avg_dept_salary, 2) AS dept_average
FROM employees e
JOIN dept_avg da ON e.department = da.department
WHERE e.salary > da.avg_dept_salary
ORDER BY e.department, e.salary DESC;`
      },
      keyTakeaways: [
        "CTEs (WITH clause) dramatically improve code readability and maintainability compared to nested inline subqueries.",
        "Prefer EXISTS over IN for correlated subqueries because EXISTS short-circuits as soon as a single match is found.",
        "Beware of NOT IN with subqueries that can return NULL values—it will cause the query to return zero rows!",
        "Always use UNION ALL instead of UNION when you know output sets are disjoint to avoid unnecessary deduplication sort overhead."
      ]
    }
  },
  {
    id: "sql-mod-12",
    title: "Module 12 — SQL Functions & Conditional Logic",
    description: "Master scalar functions for string manipulation, date arithmetic, mathematical calculations, COALESCE/NULLIF null handling, and CASE WHEN conditional logic.",
    completed: false,
    order: 12,
    published: true,
    readingMaterial: {
      introduction: "Built-in SQL scalar functions enable developers and data analysts to clean, transform, format, and evaluate data on-the-fly inside queries. Combining scalar functions with CASE WHEN conditional branching allows you to execute complex business logic directly inside the database engine before delivering results to application APIs.",
      objectives: [
        "Manipulate text strings using UPPER, LOWER, LENGTH, SUBSTRING, REPLACE, TRIM, and CONCAT_WS",
        "Perform mathematical operations using ROUND, TRUNC, CEIL, FLOOR, ABS, and MOD",
        "Master date arithmetic and component extraction using EXTRACT, AGE, DATE_ADD, and DATEDIFF",
        "Construct conditional logic branching using Searched CASE WHEN ... THEN ... ELSE ... END",
        "Prevent Division-by-Zero errors using NULLIF and manage fallbacks using COALESCE"
      ],
      sections: [
        {
          heading: "1. Comprehensive String Manipulation Functions",
          text: "String functions transform character data inside SELECT and WHERE clauses:",
          bulletPoints: [
            "CONCAT_WS(sep, s1, s2): Concatenates strings with a specified separator (e.g. CONCAT_WS(' ', first, last)).",
            "SUBSTRING(string FROM start FOR length): Extracts a sub-string from text.",
            "REPLACE(string, target, replacement): Replaces all occurrences of a target sub-string.",
            "TRIM(string): Removes leading and trailing whitespace spaces.",
            "POSITION(substring IN string): Returns the 1-based character index of a sub-string."
          ]
        },
        {
          heading: "2. Date & Time Manipulation Matrix",
          text: "Managing temporal data is essential for business intelligence reporting:",
          table: {
            headers: ["Function / Syntax", "Description", "Example Syntax", "Returned Output"],
            rows: [
              ["CURRENT_DATE", "System calendar date", "SELECT CURRENT_DATE;", "'2026-10-03'"],
              ["CURRENT_TIMESTAMP", "System timestamp with time", "SELECT CURRENT_TIMESTAMP;", "'2026-10-03 14:30:00+00'"],
              ["EXTRACT(field FROM timestamp)", "Extracts specific sub-part (YEAR, MONTH, DAY, DOW)", "EXTRACT(MONTH FROM order_date)", "10 (October)"],
              ["AGE(timestamp1, timestamp2)", "Calculates exact interval duration between dates", "AGE(CURRENT_DATE, birth_date)", "'28 years 4 mins'"],
              ["INTERVAL", "Adds or subtracts explicit time durations", "CURRENT_DATE - INTERVAL '30 days'", "'2026-09-03'"]
            ]
          }
        },
        {
          heading: "3. Conditional Logic: CASE WHEN & NULL Handling",
          text: "CASE WHEN provides inline if-then-else logical branching inside SQL statements:",
          bulletPoints: [
            "Searched CASE Syntax: CASE WHEN condition1 THEN res1 WHEN condition2 THEN res2 ELSE fallback END",
            "COALESCE(val1, val2, ...): Evaluates arguments in order and returns the FIRST non-NULL value.",
            "NULLIF(val1, val2): Returns NULL if val1 equals val2, otherwise returns val1. Essential for preventing Division-by-Zero errors: amount / NULLIF(quantity, 0)."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Customer Tiering & Automated Communication Query",
          code: `-- Customer loyalty tiering query with string formatting and CASE WHEN logic
SELECT 
    customer_id,
    CONCAT_WS(' ', UPPER(last_name), first_name) AS formatted_name,
    email,
    EXTRACT(YEAR FROM CURRENT_DATE) - EXTRACT(YEAR FROM created_at) AS account_tenure_years,
    total_spent,
    CASE 
        WHEN total_spent >= 10000.00 THEN 'VIP Platinum Member'
        WHEN total_spent >= 5000.00 THEN 'Gold Preferred Member'
        WHEN total_spent >= 1000.00 THEN 'Silver Member'
        ELSE 'Standard Member'
    END AS customer_loyalty_tier,
    COALESCE(phone_number, 'No Phone Registered') AS contact_phone
FROM customer_analytics
ORDER BY total_spent DESC;`,
          explanation: "CONCAT_WS formats names cleanly, EXTRACT calculates account age, CASE WHEN assigns tier labels, and COALESCE handles missing phone numbers."
        },
        {
          title: "Preventing Division-by-Zero with NULLIF & COALESCE",
          code: `-- Calculate Average Revenue Per Unit safely without Division-by-Zero errors
SELECT 
    product_id,
    product_name,
    total_revenue,
    units_sold,
    COALESCE(total_revenue / NULLIF(units_sold, 0), 0.00) AS avg_revenue_per_unit
FROM product_sales_summary;`,
          explanation: "If units_sold is 0, NULLIF(units_sold, 0) returns NULL. Dividing by NULL yields NULL, which COALESCE converts safely to 0.00."
        }
      ],
      practiceExercise: {
        title: "Quarterly Revenue & Inventory Tiering Exercise",
        problem: "Write a SELECT query on a 'products' table returning product_name, stock_quantity, unit_price, and an 'inventory_risk' column: 'CRITICAL OUT OF STOCK' if stock_quantity = 0, 'LOW STOCK WARNING' if stock_quantity <= 10, and 'HEALTHY INVENTORY' otherwise. Also format unit_price rounded to 1 decimal place.",
        solutionCode: `SELECT 
    product_name,
    stock_quantity,
    ROUND(unit_price, 1) AS rounded_price,
    CASE 
        WHEN stock_quantity = 0 THEN 'CRITICAL OUT OF STOCK'
        WHEN stock_quantity <= 10 THEN 'LOW STOCK WARNING'
        ELSE 'HEALTHY INVENTORY'
    END AS inventory_risk
FROM products
ORDER BY stock_quantity ASC;`
      },
      keyTakeaways: [
        "Use Searched CASE WHEN statements for complex multi-condition logic branching inside SELECT expressions.",
        "Always guard division operations using NULLIF(denominator, 0) to prevent application-crashing Division-by-Zero runtime errors.",
        "COALESCE returns the first non-NULL value in its argument list—ideal for setting default fallback values.",
        "EXTRACT(part FROM timestamp) extracts specific date components (YEAR, MONTH, DAY, DAYOFWEEK) for business intelligence grouping."
      ]
    }
  },
  {
    id: "sql-mod-13",
    title: "Module 13 — Views, Indexes & Database Optimization",
    description: "Create and maintain Database Views, construct B-Tree Indexes, analyze query execution plans with EXPLAIN / EXPLAIN ANALYZE, and optimize performance.",
    completed: false,
    order: 13,
    published: true,
    readingMaterial: {
      introduction: "As production database tables grow to millions or billions of rows, query performance tuning and architectural abstraction become paramount. Database Views encapsulate complex join logic into reusable virtual tables, while B-Tree Indexes accelerate read search speeds by avoiding expensive full table scans.",
      objectives: [
        "Create, update, and manage virtual Database Views (CREATE VIEW)",
        "Understand Materialized Views and disk caching mechanisms (REFRESH MATERIALIZED VIEW)",
        "Master B-Tree Index data structures and $O(\\log N)$ search complexity",
        "Construct single-column, unique, and composite multi-column indexes",
        "Understand the Leftmost Prefix Rule for composite indexes",
        "Analyze query execution plans using EXPLAIN and EXPLAIN ANALYZE",
        "Identify and fix Sequential Scans, missing indexes, and index write penalties"
      ],
      sections: [
        {
          heading: "1. Database Views & Materialized Views",
          text: "A View is a virtual table defined as a saved SELECT query in the database catalog. It contains no data of its own (unless materialized):",
          bulletPoints: [
            "Security Abstraction: Grant users access to a View containing non-sensitive columns while restricting access to underlying base tables.",
            "Query Simplification: Encapsulates 5-table JOINs into a single clean SELECT * FROM view_name.",
            "Materialized View: Executes the underlying query and caches result rows physically on disk. Must be refreshed periodically using REFRESH MATERIALIZED VIEW."
          ]
        },
        {
          heading: "2. How B-Tree Indexes Speed Up Queries",
          text: "Without an index, the database engine must perform a Full Table Scan (checking every single row on disk $O(N)$). A B-Tree (Balanced Tree) Index maintains a sorted lookup tree, reducing search complexity to $O(\\log N)$.",
          table: {
            headers: ["Scan Type", "Algorithmic Complexity", "Disk Pages Checked (1 Million Rows)", "Execution Speed"],
            rows: [
              ["Full Table Scan (Seq Scan)", "O(N)", "Checks all 1,000,000 row blocks on disk", "Slow (~850ms)"],
              ["B-Tree Index Scan", "O(log N)", "Checks ~3 to 4 tree level nodes", "Instantaneous (~1.2ms)"],
              ["Index Only Scan", "O(log N)", "Fetches data directly from index without touching table pages", "Ultra Fast (~0.4ms)"]
            ]
          }
        },
        {
          heading: "3. Composite Indexes & Leftmost Prefix Rule",
          text: "A Composite Index spans multiple columns (e.g. CREATE INDEX idx_orders ON orders (country, status, order_date)). The Leftmost Prefix Rule dictates that the index can only be used by queries that filter by the leftmost columns in order:",
          bulletPoints: [
            "INDEX (a, b, c) WILL be used for: WHERE a = 1 | WHERE a = 1 AND b = 2 | WHERE a = 1 AND b = 2 AND c = 3.",
            "INDEX (a, b, c) WILL NOT be used for: WHERE b = 2 | WHERE c = 3 | WHERE b = 2 AND c = 3."
          ]
        },
        {
          heading: "4. Query Execution Plan Diagnostics (EXPLAIN ANALYZE)",
          text: "Prefixing a query with EXPLAIN ANALYZE executes the statement and returns a detailed execution tree:",
          bulletPoints: [
            "Seq Scan: Indicates a Full Table Scan—signal to add a missing index on the WHERE filter column.",
            "Index Scan: Indicates the query engine successfully navigated a B-Tree index to locate target rows.",
            "Cost (cost=0.42..8.44): Estimated I/O computation units calculated by the query planner."
          ]
        }
      ],
      codeExamples: [
        {
          title: "Creating Views & Composite Indexes with EXPLAIN Diagnostics",
          code: `-- 1. Create reusable executive reporting View
CREATE VIEW vw_monthly_department_metrics AS
SELECT 
    d.dept_name,
    COUNT(e.emp_id) AS total_employees,
    ROUND(AVG(e.salary), 2) AS average_salary,
    SUM(e.salary) AS total_payroll
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name;

-- 2. Create Composite B-Tree Index respecting Leftmost Prefix Rule
CREATE INDEX idx_employees_dept_status_salary 
ON employees (dept_id, employment_status, salary DESC);

-- 3. Diagnose Query Execution Plan using EXPLAIN ANALYZE
EXPLAIN ANALYZE 
SELECT employee_id, first_name, salary 
FROM employees 
WHERE dept_id = 4 AND employment_status = 'Active' 
ORDER BY salary DESC;`,
          explanation: "EXPLAIN ANALYZE verifies that the query uses an Index Scan on idx_employees_dept_status_salary instead of scanning full table pages."
        }
      ],
      practiceExercise: {
        title: "Index & View Optimization Challenge",
        problem: "Write DDL statements to: 1. Create a View named 'vw_high_priority_orders' showing order_id, customer_id, order_total, and order_date for orders with status = 'Pending' and order_total > 500.00. 2. Write a CREATE INDEX statement creating a composite index on 'orders' table for columns (status, order_total).",
        solutionCode: `-- 1. Create View
CREATE VIEW vw_high_priority_orders AS
SELECT order_id, customer_id, order_total, order_date
FROM orders
WHERE status = 'Pending' AND order_total > 500.00;

-- 2. Create Composite Index
CREATE INDEX idx_orders_status_total 
ON orders (status, order_total DESC);`
      },
      keyTakeaways: [
        "Views provide architectural abstraction, simplified querying, and column-level security.",
        "B-Tree Indexes reduce search complexity from O(N) full table scans down to O(log N) tree lookups.",
        "Respect the Leftmost Prefix Rule when designing multi-column composite indexes.",
        "Always run EXPLAIN ANALYZE to verify that slow queries are using Index Scans instead of Sequential Scans."
      ]
    }
  },
  {
    id: "sql-mod-14",
    title: "Module 14 — Transactions, TCL & Database Security",
    description: "Understand ACID properties, manage transaction control (BEGIN, COMMIT, ROLLBACK, SAVEPOINT), set isolation levels, and secure databases against SQL Injection using DCL (GRANT, REVOKE).",
    completed: false,
    order: 14,
    published: true,
    readingMaterial: {
      introduction: "Database transactions guarantee data consistency across complex multi-step operations (such as transferring funds between bank accounts). Transaction Control Language (TCL) and ACID properties guarantee that data remains safe even during system hardware crashes, network disruptions, or heavy concurrent multi-user access.",
      objectives: [
        "Understand the 4 ACID properties: Atomicity, Consistency, Isolation, and Durability",
        "Control transaction lifecycles using BEGIN, COMMIT, and ROLLBACK",
        "Set intermediate error recovery checkpoints using SAVEPOINT and ROLLBACK TO",
        "Understand Concurrency Anomalies: Dirty Reads, Non-Repeatable Reads, and Phantom Reads",
        "Master the 4 Transaction Isolation Levels",
        "Implement Data Control Language security (GRANT, REVOKE, Roles)",
        "Prevent SQL Injection vulnerabilities using Parameterized Queries"
      ],
      sections: [
        {
          heading: "1. The 4 ACID Guarantees Explained",
          text: "ACID principles represent the gold standard for enterprise relational data processing:",
          bulletPoints: [
            "Atomicity: 'All-or-Nothing' completion. Every statement in a transaction succeeds, or EVERYTHING is completely rolled back.",
            "Consistency: Transactions move the database from one valid state to another, preserving all schemas, keys, and CHECK constraints.",
            "Isolation: Concurrent transactions execute independently without inspecting each other's uncommitted data.",
            "Durability: Once a transaction executes COMMIT, its changes are permanently written to disk logs (Write-Ahead Logging WAL) and survive power failures."
          ]
        },
        {
          heading: "2. Concurrency Anomalies & Isolation Levels Matrix",
          text: "Multiple users reading and writing simultaneously can cause concurrency anomalies depending on the configured Isolation Level:",
          table: {
            headers: ["Isolation Level", "Dirty Read Risk?", "Non-Repeatable Read Risk?", "Phantom Read Risk?", "Performance Impact"],
            rows: [
              ["READ UNCOMMITTED", "YES (Reads dirty uncommitted data)", "YES", "YES", "Fastest (No read locks)"],
              ["READ COMMITTED (Default)", "NO (Reads committed data only)", "YES", "YES", "Standard Enterprise Balance"],
              ["REPEATABLE READ", "NO", "NO (Row values stay locked)", "YES (In some RDBMS engines)", "Slower (Longer row locks)"],
              ["SERIALIZABLE", "NO", "NO", "NO (Full strict serial order)", "Slowest (High lock contention)"]
            ]
          }
        },
        {
          heading: "3. Database Security & DCL Permissions",
          text: "Data Control Language (DCL) manages role access permissions:",
          bulletPoints: [
            "GRANT privilege ON object TO role; — Grants explicit permissions (SELECT, INSERT, UPDATE, DELETE).",
            "REVOKE privilege ON object FROM role; — Removes access permissions.",
            "SQL Injection Defense: Always use Parameterized Prepared Statements (e.g. db.query('SELECT * FROM users WHERE id = $1', [userId])) in application code—NEVER concatenate raw input strings!"
          ]
        }
      ],
      codeExamples: [
        {
          title: "Production Bank Account Transfer Transaction with SAVEPOINT & Error Recovery",
          code: `-- Start Transaction Block
BEGIN;

-- Step 1: Deduct $500 from Sender Account (101)
UPDATE bank_accounts 
SET balance = balance - 500.00 
WHERE account_id = 101 AND balance >= 500.00;

-- Create intermediate Savepoint checkpoint
SAVEPOINT after_sender_deduction;

-- Step 2: Credit $500 to Receiver Account (202)
UPDATE bank_accounts 
SET balance = balance + 500.00 
WHERE account_id = 202;

-- Step 3: Log transaction audit trail
INSERT INTO transaction_logs (sender_id, receiver_id, amount, status)
VALUES (101, 202, 500.00, 'COMPLETED');

-- Commit transaction changes permanently to disk
COMMIT;`,
          explanation: "If an error occurs before COMMIT, executing ROLLBACK restores all account balances back to their exact state prior to BEGIN."
        },
        {
          title: "DCL Security Script: Role Creation & Privilege Assignment",
          code: `-- 1. Create Application Roles
CREATE ROLE read_only_analyst;
CREATE ROLE application_backend;

-- 2. Grant Table Permissions
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only_analyst;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO application_backend;

-- 3. Create User and Assign Role
CREATE USER app_server_user WITH PASSWORD 'StrongSecretPass2026!';
GRANT application_backend TO app_server_user;

-- 4. Revoke Destructive Permissions
REVOKE DROP, TRUNCATE ON ALL TABLES IN SCHEMA public FROM application_backend;`,
          explanation: "Role-Based Access Control (RBAC) ensures backend applications only possess necessary DML permissions while revoking destructive DDL privileges."
        }
      ],
      practiceExercise: {
        title: "Transaction & Role Security Challenge",
        problem: "Write a SQL script that: 1. Starts a transaction. 2. Deducts 1 unit of stock_quantity from 'products' for product_id = 50. 3. Inserts a new order into 'orders' table for customer_id = 12. 4. Commits the transaction. 5. Write a DCL command granting SELECT and INSERT permissions on table 'orders' to role 'sales_clerk'.",
        solutionCode: `-- 1. Transaction Block
BEGIN;

UPDATE products
SET stock_quantity = stock_quantity - 1
WHERE product_id = 50 AND stock_quantity >= 1;

INSERT INTO orders (customer_id, order_total, status)
VALUES (12, 150.00, 'Processing');

COMMIT;

-- 2. DCL Privilege Grant
GRANT SELECT, INSERT ON orders TO sales_clerk;`
      },
      keyTakeaways: [
        "ACID properties (Atomicity, Consistency, Isolation, Durability) guarantee transactional safety.",
        "Transactions are All-or-Nothing: COMMIT saves changes permanently; ROLLBACK restores previous state.",
        "READ COMMITTED is the standard enterprise isolation level balancing concurrency and consistency.",
        "Always prevent SQL Injection by using Parameterized Prepared Statements in backend application code."
      ]
    }
  },
  {
    id: "sql-mod-15",
    title: "Module 15 — SQL for Data Analytics, Python & AI + Final Project",
    description: "Master Advanced Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, Running Totals), Python sqlite3/Pandas data pipelines, AI-assisted SQL engineering, and complete the Capstone E-Commerce BI Project.",
    completed: false,
    order: 15,
    published: true,
    readingMaterial: {
      introduction: "Welcome to the final capstone module! In modern enterprise data stacks, SQL powers advanced business intelligence analytics using Window Functions and integrates directly with Python data science pipelines (Pandas, sqlite3, SQLAlchemy) and AI code generators. In this final module, you will master window functions and construct a complete E-Commerce Analytical Data Warehouse from scratch.",
      objectives: [
        "Master SQL Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD()",
        "Use OVER (PARTITION BY ... ORDER BY ... WINDOW_FRAME) for analytical calculations without row collapsing",
        "Calculate Month-over-Month (MoM) Growth, Running Totals, and Moving Averages",
        "Connect Python to SQL databases using sqlite3 and Pandas pd.read_sql_query()",
        "Leverage AI code assistants for query writing, debugging, and execution tuning",
        "Execute the Complete E-Commerce Capstone Business Intelligence Project"
      ],
      sections: [
        {
          heading: "1. Advanced Window Functions Overview",
          text: "Unlike GROUP BY, which collapses individual rows into summary group tuples, Window Functions compute calculations across a set of table rows related to the current row WITHOUT collapsing individual row identities.",
          bulletPoints: [
            "ROW_NUMBER(): Assigns a unique sequential integer (1, 2, 3...) to rows within each partition.",
            "RANK(): Assigns ranking with gaps for tied values (e.g. 1, 2, 2, 4...).",
            "DENSE_RANK(): Assigns ranking WITHOUT gaps for tied values (e.g. 1, 2, 2, 3...).",
            "LAG(col, offset): Fetches column values from N rows BEFORE the current row (great for Month-over-Month comparison).",
            "LEAD(col, offset): Fetches column values from N rows AFTER the current row.",
            "Running Total: SUM(amount) OVER (PARTITION BY user_id ORDER BY transaction_date)."
          ],
          table: {
            headers: ["Window Function", "Category", "Row Collapsing?", "Primary Analytical Use Case"],
            rows: [
              ["ROW_NUMBER()", "Ranking", "NO", "Identifying top N records per category (e.g. Top 2 orders per user)"],
              ["DENSE_RANK()", "Ranking", "NO", "Leaderboards with tight rank numbering without gaps"],
              ["LAG(col, 1)", "Value Offset", "NO", "Calculating Month-over-Month (MoM) revenue growth %"],
              ["LEAD(col, 1)", "Value Offset", "NO", "Comparing current row metrics with subsequent periods"],
              ["SUM() OVER()", "Aggregate Window", "NO", "Calculating cumulative running total financial balances"]
            ]
          }
        },
        {
          heading: "2. Python SQL Integration Pipeline (sqlite3 & Pandas)",
          text: "Python and SQL work together seamlessly in modern data science stacks. You can run SQL queries directly inside Python and load output rows into Pandas DataFrames for visualization and machine learning:",
          bulletPoints: [
            "sqlite3: Built-in Python library for connecting to SQLite relational databases.",
            "pd.read_sql_query(query, conn): Executes SQL query and loads result rows directly into a Pandas DataFrame.",
            "df.to_sql('table_name', conn): Exports processed Pandas DataFrames back into SQL tables."
          ]
        },
        {
          heading: "3. Complete Capstone E-Commerce BI Analytics Project",
          text: "The capstone project combines schema creation, data ingestion, joins, aggregations, window functions, and business analytics into a unified production analytics pipeline."
        }
      ],
      codeExamples: [
        {
          title: "Advanced Window Functions: Top-N Ranking & MoM Growth",
          code: `-- 1. Rank employees by salary within each department using DENSE_RANK()
SELECT 
    employee_id,
    first_name,
    department,
    salary,
    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_salary_rank
FROM employees;

-- 2. Calculate Month-over-Month Sales Growth & Cumulative Running Total Revenue using LAG & SUM
WITH monthly_sales AS (
    SELECT 
        EXTRACT(MONTH FROM order_date) as sales_month,
        SUM(order_total) as monthly_revenue
    FROM orders
    GROUP BY EXTRACT(MONTH FROM order_date)
)
SELECT 
    sales_month,
    monthly_revenue,
    LAG(monthly_revenue, 1) OVER (ORDER BY sales_month) as prev_month_revenue,
    ROUND(((monthly_revenue - LAG(monthly_revenue, 1) OVER (ORDER BY sales_month)) / NULLIF(LAG(monthly_revenue, 1) OVER (ORDER BY sales_month), 0)) * 100, 2) as mom_growth_pct,
    SUM(monthly_revenue) OVER (ORDER BY sales_month) as cumulative_running_total
FROM monthly_sales;`,
          explanation: "DENSE_RANK assigns salary positions per department. LAG calculates period-over-period percentage growth. SUM() OVER calculates cumulative YTD revenue."
        },
        {
          title: "Complete Python SQLite & Pandas Data Analysis Pipeline Script",
          code: `# Python Integration Script
import sqlite3
import pandas as pd

# 1. Connect to SQLite Database
conn = sqlite3.connect('ecommerce_analytics.db')

# 2. Execute SQL query directly into Pandas DataFrame
sql_query = """
WITH customer_analytics AS (
    SELECT 
        c.customer_id,
        c.email,
        c.country,
        COUNT(o.order_id) as total_orders,
        SUM(o.order_total) as total_spent,
        DENSE_RANK() OVER (PARTITION BY c.country ORDER BY SUM(o.order_total) DESC) as country_rank
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.email, c.country
)
SELECT country, customer_id, email, total_orders, total_spent
FROM customer_analytics
WHERE country_rank <= 2
ORDER BY country, total_spent DESC;
"""

df = pd.read_sql_query(sql_query, conn)
print("--- Top 2 Customers per Country DataFrame ---")
print(df.head(10))

conn.close()`,
          explanation: "Pandas pd.read_sql_query bridges relational database queries directly into Data Science and Machine Learning pipelines."
        }
      ],
      practiceExercise: {
        title: "Capstone Analytical Query Challenge",
        problem: "Write a SQL query using Window Functions that calculates a 7-day moving average of daily sales revenue from an 'orders' table (order_date, order_total).",
        solutionCode: `WITH daily_sales AS (
    SELECT 
        CAST(order_date AS DATE) as sales_date,
        SUM(order_total) as daily_revenue
    FROM orders
    GROUP BY CAST(order_date AS DATE)
)
SELECT 
    sales_date,
    daily_revenue,
    ROUND(AVG(daily_revenue) OVER (
        ORDER BY sales_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ), 2) as moving_avg_7_day
FROM daily_sales
ORDER BY sales_date;`
      },
      keyTakeaways: [
        "Window Functions calculate values over a row partition WITHOUT collapsing individual row identities.",
        "Use ROW_NUMBER() or DENSE_RANK() with PARTITION BY to solve Top-N per category problems.",
        "LAG() and LEAD() enable effortless period-over-period time-series analytics.",
        "Pandas pd.read_sql_query seamlessly connects SQL databases to Python data pipelines.",
        "Congratulations! You have completed the comprehensive 15-module SQL Curriculum!"
      ]
    }
  }
];

const completeCurriculum = [...modules1To9, ...massiveModules10To15];

// 1. Update server/data/db.json
if (existingSql) {
  existingSql.modules = completeCurriculum;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Successfully updated server/data/db.json with massive Modules 10-15 content!');
}

// 2. Update src/data/coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlCourseIndex = content.indexOf('sql-data-analysis');
const webCourseIndex = content.indexOf('web-development');

if (sqlCourseIndex !== -1 && webCourseIndex !== -1) {
  const beforeSql = content.slice(0, sqlCourseIndex);
  const afterSql = content.slice(webCourseIndex);
  
  const sqlSlice = content.slice(sqlCourseIndex, webCourseIndex);
  const modulesKeywordIndex = sqlSlice.indexOf('modules: [');
  
  if (modulesKeywordIndex !== -1) {
    const headerPart = sqlSlice.slice(0, modulesKeywordIndex + 'modules: ['.length);
    const newModulesJson = JSON.stringify(completeCurriculum, null, 6);
    const formattedModulesJs = newModulesJson.slice(1, -1);
    
    const newSqlBlock = headerPart + '\n' + formattedModulesJs + '\n    ],\n  },\n  {\n    id: "';
    
    content = beforeSql + newSqlBlock + afterSql;
    fs.writeFileSync(coursesDataPath, content, 'utf8');
    console.log('Successfully updated src/data/coursesData.js with massive Modules 10-15 content!');
  }
}

module.exports = massiveModules10To15;


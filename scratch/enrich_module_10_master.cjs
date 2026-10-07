const fs = require('fs');

const masterModule10 = {
  id: "sql-mod-10",
  title: "Module 10 — SQL Joins & Relationships",
  description: "Master Relational Normalization (1NF, 2NF, 3NF, BCNF), Relational Algebra (Selection, Projection, Join), Entity Relationships (1:1, 1:N, N:M Junction Tables), Complete Join Family: INNER JOIN, Non-Equi Joins, LEFT (OUTER) JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN (Cartesian Product), SELF JOIN (Hierarchical Trees), Anti-Join Pattern (LEFT JOIN ... WHERE right.id IS NULL), Semi-Join Pattern (EXISTS), RDBMS Physical Join Algorithms (Nested Loop, Hash Join, Sort-Merge Join), and Foreign Key B-Tree Indexing Optimization.",
  completed: false,
  order: 10,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 10! Relational database normalization breaks flat, redundant data files down into logical, atomic tables connected by Primary and Foreign Key relationships. SQL Joins allow software developers, database architects, and data engineers to reconstruct related data across multiple tables on-the-fly. Understanding how the relational engine parses join conditions and selects physical join algorithms (Nested Loop, Hash Join, Sort-Merge Join) is essential for writing high-performance multi-table queries across enterprise datasets.",
    objectives: [
      "Master Relational Normalization: 1NF (Atomicity), 2NF (Partial Key Dependencies), 3NF (Transitive Dependencies), and Boyce-Codd Normal Form (BCNF)",
      "Analyze Relational Algebra Operations: Selection (σ), Projection (π), Cartesian Product (×), and Natural Join (⋈)",
      "Map Entity Relationships: One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (N:M) with Composite Key Junction Tables",
      "Master INNER JOIN & Non-Equi Joins: Joining on equality predicates and numeric range bounds (BETWEEN)",
      "Master LEFT (OUTER) JOIN: Preserving all rows from the primary left table ($A \\cup (A \\cap B)$)",
      "Evaluate RIGHT JOIN and FULL OUTER JOIN for complete relational set coverage",
      "Execute CROSS JOIN to generate Cartesian product grids and matrix datasets",
      "Master SELF JOIN to query hierarchical data trees (Employee-Manager, Parent-Child Categories)",
      "Utilize Anti-Join (LEFT JOIN ... WHERE right.id IS NULL) and Semi-Join (EXISTS) patterns",
      "Deconstruct RDBMS Join Algorithms: Nested Loop Join, Hash Join, and Sort-Merge Join"
    ],
    sections: [
      {
        heading: "1. Relational Algebra, Normalization & Anomaly Elimination",
        text: "Database normalization organizes tables according to Dr. Edgar F. Codd's Relational Algebra to eliminate insertion, update, and deletion anomalies:",
        bulletPoints: [
          "Relational Algebra Operators:",
          "• Selection ($\sigma$): Filters rows matching a predicate (equivalent to SQL `WHERE`).",
          "• Projection ($\pi$): Selects specific columns (equivalent to SQL `SELECT col1, col2`).",
          "• Cartesian Product ($\\times$): Generates all paired combinations (equivalent to SQL `CROSS JOIN`).",
          "• Natural Join ($\\bowtie$): Combines rows sharing matching key attributes.",
          "Database Normalization Levels:",
          "• First Normal Form (1NF): Atomic values per cell (no array strings or comma-separated values). Every row must have a unique Primary Key.",
          "• Second Normal Form (2NF): Meets 1NF, and all non-key attributes are fully functionally dependent on the ENTIRE Primary Key (eliminates partial key dependencies on composite keys).",
          "• Third Normal Form (3NF): Meets 2NF, and no non-key attribute depends on another non-key attribute (eliminates transitive dependencies: $A \\rightarrow B \\rightarrow C$).",
          "• Boyce-Codd Normal Form (BCNF): A stricter version of 3NF ensuring every determinant is a super key."
        ],
        table: {
          headers: ["Normalization Level", "Core Requirement Rule", "Anomaly Eliminated", "Enterprise Example Solution"],
          rows: [
            ["1NF (First Normal Form)", "Atomic cells; unique primary key", "Repeating group redundancy", "Splitting 'NY, CA' array cell into 2 separate rows"],
            ["2NF (Second Normal Form)", "1NF + No partial dependencies on composite keys", "Partial key update anomalies", "Moving product description out of order_items table"],
            ["3NF (Third Normal Form)", "2NF + No transitive dependencies between non-keys", "Transitive update anomalies", "Moving zip_code city/state into a separate zip_codes table"],
            ["BCNF (Boyce-Codd)", "3NF + Every determinant is a candidate super key", "Overlapping composite key anomalies", "Splitting complex multi-instructor course schedules"]
          ]
        }
      },
      {
        heading: "2. Entity Relationships & Junction Tables (1:1, 1:N, N:M)",
        text: "Relational data modeling connects business entities through key relationships:",
        bulletPoints: [
          "One-to-One (1:1): Primary key of Table A maps to Primary Key of Table B (e.g. `users` <-> `user_profiles`). Used to isolate sensitive or rarely-accessed columns.",
          "One-to-Many (1:N): Foreign key on child Table B references Primary Key of parent Table A (e.g. `customers` <-> `orders`). The foundational relationship in relational databases.",
          "Many-to-Many (N:M): Implemented using a dedicated Bridge/Junction Table containing Foreign Keys referencing both parent tables (e.g. `students` <-> `courses` via `student_courses` junction table with composite key `PRIMARY KEY (student_id, course_id)`)."
        ]
      },
      {
        heading: "3. Complete SQL Join Family & Execution Semantics",
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
          "Non-Equi Joins: Joining tables on inequality or range predicates instead of exact key equality (e.g., `ON e.salary BETWEEN g.min_salary AND g.max_salary`).",
          "Anti-Join Pattern (Locating Missing Records): Combines `LEFT JOIN` with `WHERE right.key IS NULL` to identify unmatched records (e.g. Customers who have NEVER placed an order).",
          "Semi-Join Pattern: Uses `WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id)` to test matching existence without multiplying outer row cardinality."
        ]
      },
      {
        heading: "4. Physical Join Execution Algorithms: RDBMS Engine Internals",
        text: "The Cost-Based Optimizer (CBO) evaluates table sizes, join predicates, and index structures to select one of three physical join algorithms:",
        bulletPoints: [
          "1. Nested Loop Join: Iterates outer table rows and searches for matches in the inner table. Ultra-fast ($O(N \\log M)$) when the inner join column has a B-Tree index!",
          "2. Hash Join: Builds an in-memory hash table of the smaller dataset in RAM (`work_mem`), then probes the hash table with rows from the larger dataset ($O(N + M)$). Ideal for large un-indexed tables.",
          "3. Sort-Merge Join: Sorts both datasets on join keys, then merges matching streams ($O(N \\log N + M \\log M)$). Ideal when datasets are pre-sorted by B-Tree indexes.",
          "CRITICAL INDEXING RULE: Always create explicit B-Tree indexes on all Foreign Key columns to allow the optimizer to choose sub-millisecond B-Tree Nested Loop joins!"
        ]
      }
    ],
    codeExamples: [
      {
        title: "Multi-Table INNER JOIN, Non-Equi Range Join & Anti-Join Pattern",
        code: `-- 1. Multi-Table INNER JOIN with Non-Equi Salary Grade Range Join
SELECT 
    e.employee_id,
    e.first_name || ' ' || e.last_name AS employee_name,
    e.salary,
    g.grade_level AS salary_grade
FROM enterprise_employees AS e
-- Non-Equi Join on salary range bounds!
INNER JOIN salary_grades AS g 
    ON e.salary BETWEEN g.min_salary AND g.max_salary
WHERE e.is_active = TRUE;

-- 2. Anti-Join Pattern: Identify Active Customers with NO Order History
SELECT 
    c.customer_id,
    c.email,
    c.created_at
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL -- Anti-join condition: Unmatched left records!
  AND c.account_status = 'Active';`,
        explanation: "Demonstrates Non-Equi range joins (BETWEEN), multi-table INNER JOINs, and the Anti-Join pattern to locate un-purchasing customers."
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
      "Relational Normalization (1NF, 2NF, 3NF, BCNF) eliminates data redundancy and update anomalies.",
      "INNER JOIN returns intersecting rows ($A \\cap B$); LEFT JOIN preserves all left table rows ($A$).",
      "SELF JOIN links rows within the same table to query organizational trees and parent-child hierarchies.",
      "The Anti-Join pattern (`LEFT JOIN ... WHERE right.id IS NULL`) identifies missing or unlinked records efficiently.",
      "Database optimizers choose physical join algorithms (Nested Loop, Hash Join, Sort-Merge Join) based on table size and B-Tree indexes."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod10Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-10');
  if (mod10Idx !== -1) sqlCourseInDb.modules[mod10Idx] = masterModule10;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 10!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod10Index = content.indexOf('"id": "sql-mod-10"');
const sqlMod11Index = content.indexOf('"id": "sql-mod-11"');

if (sqlMod10Index !== -1 && sqlMod11Index !== -1) {
  const mod10Start = content.lastIndexOf('{', sqlMod10Index);
  const mod11Start = content.lastIndexOf('{', sqlMod11Index);
  
  const beforeMod10 = content.slice(0, mod10Start);
  const afterMod10 = content.slice(mod11Start);
  
  const formattedMod10 = JSON.stringify(masterModule10, null, 6);
  
  content = beforeMod10 + formattedMod10 + ',\n\n      ' + afterMod10;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 10!');
}

// scratch/build_4_sql_question_papers.mjs
// Generates 4 distinct SQL Question Papers assigned by student name in alphabetical order:
// Set A: A-F
// Set B: G-L
// Set C: M-R
// Set D: S-Z

export const SQL_QUESTION_PAPERS = [
  {
    id: "qp-sql-set-a",
    paperCode: "SQL-QP-SETA",
    groupName: "Alphabetical Group A–F",
    letterRange: "A-F",
    studentNamePattern: "Candidate first name starting with A, B, C, D, E, or F",
    title: "Paper 1 (Set A): Database Architecture, Relational Modeling & Core DDL/DML",
    subtitle: "Covers Core DDL/DML, Constraints, Foreign Keys, Null Handling & Relational Schema Design",
    timeLimitMinutes: 45,
    passingScore: 70,
    totalMarks: 100,
    questions: [
      {
        id: "sql-a-1",
        questionNumber: 1,
        topic: "Foreign Key Constraints & Cascade Operations",
        questionText: "When creating a Foreign Key constraint with 'ON DELETE CASCADE', what occurs in the child table when a parent row is deleted?",
        codeSnippet: "ALTER TABLE order_items\nADD CONSTRAINT fk_orders\nFOREIGN KEY (order_id) REFERENCES orders(id)\nON DELETE CASCADE;",
        options: [
          "The child rows in 'order_items' have their order_id column automatically set to NULL",
          "All matching child rows in 'order_items' are automatically deleted along with the parent order row",
          "The database engine raises an error and blocks the deletion of the parent order row",
          "The parent order row is deleted, but the child rows remain in 'order_items' as orphaned records"
        ],
        correctAnswer: 1,
        explanation: "ON DELETE CASCADE specifies that when a row in the referenced parent table is deleted, all matching referencing rows in the child table are automatically deleted as well."
      },
      {
        id: "sql-a-2",
        questionNumber: 2,
        topic: "Data Types & Storage Efficiency",
        questionText: "What is the primary operational difference between CHAR(20) and VARCHAR(20) data types in SQL databases?",
        codeSnippet: null,
        options: [
          "CHAR(20) stores variable length strings, while VARCHAR(20) pads strings with spaces to 20 bytes",
          "CHAR(20) is a fixed-length string padded with spaces to 20 characters regardless of input length; VARCHAR(20) stores variable length strings up to 20 characters plus a length byte",
          "CHAR(20) allows storing up to 20 MB of text, whereas VARCHAR(20) allows only 20 characters",
          "VARCHAR(20) supports unicode characters, while CHAR(20) supports binary data only"
        ],
        correctAnswer: 1,
        explanation: "CHAR(n) is fixed-width and right-pads short strings with trailing spaces to 'n' characters. VARCHAR(n) allocates only the necessary bytes for the string length plus overhead bytes."
      },
      {
        id: "sql-a-3",
        questionNumber: 3,
        topic: "3-Valued Logic & NULL Comparison",
        questionText: "What is the evaluated boolean result of the expression 'WHERE status = NULL' in ANSI SQL?",
        codeSnippet: "SELECT * FROM employees WHERE status = NULL;",
        options: [
          "TRUE for all rows where status is NULL",
          "FALSE for all rows, but syntax error is thrown",
          "UNKNOWN (Evaluating to NULL/FALSE), returning 0 rows because NULL cannot be compared with '='",
          "TRUE for rows where status contains an empty string ''"
        ],
        correctAnswer: 2,
        explanation: "In SQL 3-valued logic, NULL represents an unknown value. Any equality comparison with NULL (including NULL = NULL) evaluates to UNKNOWN, which resolves to false in WHERE filters. IS NULL must be used instead."
      },
      {
        id: "sql-a-4",
        questionNumber: 4,
        topic: "DDL vs DML Execution Differences",
        questionText: "Which statement accurately describes the difference between TRUNCATE TABLE and DELETE FROM table without a WHERE clause?",
        codeSnippet: "TRUNCATE TABLE logs;\n-- vs --\nDELETE FROM logs;",
        options: [
          "DELETE is a DDL command that resets identity counters; TRUNCATE is a DML command that logs each row deletion individually",
          "TRUNCATE is a DDL command that deallocates data pages instantly with minimal logging and resets identity seeds; DELETE is a DML command that deletes rows one by one",
          "TRUNCATE can be executed on tables referenced by active Foreign Keys, while DELETE cannot",
          "DELETE locks the entire database instance, while TRUNCATE locks only the target row"
        ],
        correctAnswer: 1,
        explanation: "TRUNCATE is a DDL operation that deallocates data pages directly, minimizing transaction log overhead and resetting auto-increment counters. DELETE is DML and logs each deleted tuple individually."
      },
      {
        id: "sql-a-5",
        questionNumber: 5,
        topic: "INSERT INTO SELECT Data Migration",
        questionText: "Which SQL command correctly copies active customer records from the 'prospects' table into the 'customers' table?",
        codeSnippet: null,
        options: [
          "COPY INTO customers FROM prospects WHERE is_active = 1;",
          "INSERT INTO customers (name, email) SELECT name, email FROM prospects WHERE is_active = 1;",
          "UPDATE customers SET (name, email) = (SELECT name, email FROM prospects WHERE is_active = 1);",
          "SELECT INTO customers (name, email) FROM prospects WHERE is_active = 1;"
        ],
        correctAnswer: 1,
        explanation: "The standard ANSI SQL syntax for inserting query results into an existing target table is 'INSERT INTO target_table (cols) SELECT cols FROM source_table WHERE condition'."
      },
      {
        id: "sql-a-6",
        questionNumber: 6,
        topic: "UNIQUE vs PRIMARY KEY Constraints",
        questionText: "How do UNIQUE constraints differ from PRIMARY KEY constraints in relational databases?",
        codeSnippet: null,
        options: [
          "A table can have multiple UNIQUE constraints and they allow NULL values (depending on RDBMS standards); a table can have only ONE PRIMARY KEY constraint which strictly forbids NULLs",
          "UNIQUE constraints create clustered indexes automatically, whereas PRIMARY KEY constraints never create indexes",
          "PRIMARY KEY constraints allow up to 5 NULL values per table, whereas UNIQUE constraints allow none",
          "There is no functional difference; UNIQUE and PRIMARY KEY are aliases for the exact same constraint"
        ],
        correctAnswer: 0,
        explanation: "A table is limited to one PRIMARY KEY (which automatically enforces NOT NULL). A table can define multiple UNIQUE constraints, which allow NULL values (in standard SQL, multiple NULLs are allowed since NULL != NULL)."
      },
      {
        id: "sql-a-7",
        questionNumber: 7,
        topic: "ALTER TABLE Column Addition",
        questionText: "What happens when you execute an ALTER TABLE statement adding a NOT NULL column with a DEFAULT value to a table with 100,000 existing rows?",
        codeSnippet: "ALTER TABLE users ADD COLUMN tier_level VARCHAR(20) DEFAULT 'Standard' NOT NULL;",
        options: [
          "The statement fails with an error because existing rows contain NULL for the new column",
          "The column is added and all 100,000 existing rows are populated with the default value 'Standard'",
          "The column is added, but only future INSERT statements will receive 'Standard'",
          "The table is duplicated into a temporary file and existing rows are deleted"
        ],
        correctAnswer: 1,
        explanation: "Adding a column with DEFAULT 'Standard' NOT NULL populates all existing rows with 'Standard', satisfying the NOT NULL requirement across the table."
      },
      {
        id: "sql-a-8",
        questionNumber: 8,
        topic: "UPDATE with Subqueries",
        questionText: "What will be the result of executing the following UPDATE query?",
        codeSnippet: "UPDATE products\nSET price = price * 1.10\nWHERE category_id IN (SELECT id FROM categories WHERE name = 'Electronics');",
        options: [
          "Increases the price by 10% for all products belonging to the 'Electronics' category",
          "Decreases the price of 'Electronics' products by 10%",
          "Fails because subqueries are strictly forbidden inside UPDATE statements",
          "Updates category names to 1.10 in the categories table"
        ],
        correctAnswer: 0,
        explanation: "The query uses an IN clause with a scalar subquery to find category IDs named 'Electronics', and increases the matching products' prices by 10% (price * 1.10)."
      },
      {
        id: "sql-a-9",
        questionNumber: 9,
        topic: "LIKE Wildcards & Escaping",
        questionText: "Which LIKE pattern correctly matches product codes that start with 'AB_', where '_' is a literal underscore character and not a single-character wildcard?",
        codeSnippet: null,
        options: [
          "WHERE code LIKE 'AB_%'",
          "WHERE code LIKE 'AB\\_%' ESCAPE '\\'",
          "WHERE code LIKE 'AB*%'",
          "WHERE code LIKE 'AB[1-9]%'"
        ],
        correctAnswer: 1,
        explanation: "In SQL LIKE clauses, '_' is a single-character wildcard. To match a literal underscore, it must be escaped (e.g. 'AB\\_%') with an explicit ESCAPE '\\' declaration."
      },
      {
        id: "sql-a-10",
        questionNumber: 10,
        topic: "COALESCE & NULL Handling",
        questionText: "What value is returned by COALESCE(NULL, NULL, 'Default Value', 'Secondary Value')?",
        codeSnippet: "SELECT COALESCE(NULL, NULL, 'Default Value', 'Secondary Value') AS result;",
        options: [
          "NULL",
          "'Default Value'",
          "'Secondary Value'",
          "An array containing both 'Default Value' and 'Secondary Value'"
        ],
        correctAnswer: 1,
        explanation: "COALESCE returns the first non-NULL expression in its list of arguments. Here, the first two arguments are NULL, so it evaluates and returns 'Default Value'."
      },
      {
        id: "sql-a-11",
        questionNumber: 11,
        topic: "Referential Integrity Violations",
        questionText: "What error occurs if an application attempts to insert a record into 'orders' with customer_id = 999 when customer_id 999 does not exist in 'customers'?",
        codeSnippet: null,
        options: [
          "Check Constraint Violation",
          "Foreign Key / Referential Integrity Constraint Violation",
          "Unique Key Violation",
          "Deadlock Timeout Exception"
        ],
        correctAnswer: 1,
        explanation: "Inserting a referencing foreign key value that does not exist in the referenced parent table violates Foreign Key (Referential Integrity) constraints."
      },
      {
        id: "sql-a-12",
        questionNumber: 12,
        topic: "CHECK Constraints Logic",
        questionText: "Which statement best describes the evaluation of a CHECK constraint on row insertion?",
        codeSnippet: "ALTER TABLE accounts ADD CONSTRAINT chk_balance CHECK (balance >= 0);",
        options: [
          "The row is accepted if the expression evaluates to TRUE or UNKNOWN (NULL); it is rejected only if it evaluates to FALSE",
          "The row is accepted only if the expression evaluates strictly to TRUE; NULL balance values trigger an immediate error",
          "CHECK constraints run asynchronously in background cron jobs",
          "CHECK constraints are enforced only during DELETE operations"
        ],
        correctAnswer: 0,
        explanation: "In SQL standards, a CHECK constraint allows the insert/update if the predicate evaluates to TRUE or UNKNOWN (NULL). It fails only if the condition evaluates explicitly to FALSE."
      },
      {
        id: "sql-a-13",
        questionNumber: 13,
        topic: "Date Filtering Functions",
        questionText: "Which ANSI SQL function extracts the calendar year from a timestamp column named 'created_at'?",
        codeSnippet: "SELECT EXTRACT(YEAR FROM created_at) FROM orders;",
        options: [
          "YEAROF(created_at)",
          "EXTRACT(YEAR FROM created_at)",
          "GET_YEAR(created_at)",
          "DATE_TO_YEAR(created_at)"
        ],
        correctAnswer: 1,
        explanation: "The ANSI SQL standard function for extracting sub-fields (such as YEAR, MONTH, DAY) from date/timestamp values is EXTRACT(field FROM timestamp)."
      },
      {
        id: "sql-a-14",
        questionNumber: 14,
        topic: "Logical Operator Precedence",
        questionText: "In SQL WHERE clauses, what is the evaluation precedence among NOT, AND, and OR operators?",
        codeSnippet: "SELECT * FROM items WHERE status = 'A' OR status = 'B' AND price < 50;",
        options: [
          "OR is evaluated first, followed by AND, followed by NOT",
          "Left-to-right evaluation regardless of operator keywords",
          "NOT is evaluated first, followed by AND, followed by OR",
          "AND and OR have equal precedence and evaluate right-to-left"
        ],
        correctAnswer: 2,
        explanation: "In standard SQL operator precedence: NOT has highest precedence, followed by AND, and finally OR. Parentheses should be used to override default precedence."
      },
      {
        id: "sql-a-15",
        questionNumber: 15,
        topic: "Identity & Auto Increment Sequences",
        questionText: "What happens to auto-increment identity sequence values when an INSERT transaction fails and rolls back?",
        codeSnippet: null,
        options: [
          "The sequence generator rolls back to its previous number, ensuring zero gaps in sequence",
          "The generated sequence number is consumed and lost, leaving a gap in the identity sequence",
          "The entire database table is locked until a manual sequence repair script is executed",
          "The database converts the column to a random GUID"
        ],
        correctAnswer: 1,
        explanation: "Sequence generators operate outside of transaction rollback boundaries for performance and concurrency. If an INSERT rolls back, the generated number is discarded, resulting in sequential gaps."
      },
      {
        id: "sql-a-16",
        questionNumber: 16,
        topic: "ORDER BY & NULL Sorting Behavior",
        questionText: "By default in ANSI SQL, where are NULL values sorted when executing ORDER BY column ASC?",
        codeSnippet: "SELECT name, score FROM students ORDER BY score ASC;",
        options: [
          "NULL values are discarded from the result set entirely",
          "NULL values are placed at the beginning or end depending on RDBMS (e.g. PostgreSQL places NULLs last for ASC, MySQL/SQL Server place NULLs first for ASC)",
          "NULL values cause the query execution to fail with a sorting error",
          "NULL values are automatically converted to zero"
        ],
        correctAnswer: 1,
        explanation: "ANSI SQL allows RDBMS implementations to determine default NULL ordering (or explicit NULLS FIRST / NULLS LAST). In PostgreSQL ASC defaults to NULLS LAST, while MySQL/SQL Server place NULLs first."
      },
      {
        id: "sql-a-17",
        questionNumber: 17,
        topic: "CASCADE vs RESTRICT Constraints",
        questionText: "When dropping a parent table referenced by foreign keys, what does the RESTRICT option enforce?",
        codeSnippet: "DROP TABLE categories RESTRICT;",
        options: [
          "Drops the parent table and automatically drops all dependent child tables",
          "Aborts the drop operation if any dependent objects or foreign key constraints reference the table",
          "Converts the table to a temporary read-only state for 24 hours",
          "Deletes only rows that have no matching foreign keys"
        ],
        correctAnswer: 1,
        explanation: "RESTRICT (the default in SQL standard) blocks the deletion of a schema object if any dependent objects (such as foreign key constraints or views) reference it."
      },
      {
        id: "sql-a-18",
        questionNumber: 18,
        topic: "CASE Expressions Syntax",
        questionText: "What will be the output value of the following searched CASE expression when grade = 85?",
        codeSnippet: "SELECT CASE \n  WHEN grade >= 90 THEN 'A'\n  WHEN grade >= 80 THEN 'B'\n  WHEN grade >= 70 THEN 'C'\n  ELSE 'F'\nEND AS letter_grade;",
        options: [
          "'A'",
          "'B'",
          "'C'",
          "'B' and 'C'"
        ],
        correctAnswer: 1,
        explanation: "CASE expressions evaluate WHEN conditions sequentially. For grade = 85, the first condition (>= 90) is false, and the second condition (>= 80) is true, returning 'B' immediately."
      },
      {
        id: "sql-a-19",
        questionNumber: 19,
        topic: "View Materialization & Updateability",
        questionText: "Which factor prevents a SQL view from being directly updateable via UPDATE or INSERT operations?",
        codeSnippet: null,
        options: [
          "The view definition includes an INNER JOIN between two tables",
          "The view definition contains aggregate functions (SUM, COUNT), GROUP BY, or DISTINCT clauses",
          "The view contains more than 3 columns",
          "The view is queried by more than one user concurrently"
        ],
        correctAnswer: 1,
        explanation: "Views containing aggregate functions, GROUP BY, DISTINCT, HAVING, or UNION cannot map modified view rows 1-to-1 back to underlying base table rows, rendering them non-updateable."
      },
      {
        id: "sql-a-20",
        questionNumber: 20,
        topic: "Database Normalization (3NF)",
        questionText: "What condition must a table satisfy to be in Third Normal Form (3NF)?",
        codeSnippet: null,
        options: [
          "It must be in 2NF and contain no transitive functional dependencies (non-key attributes must depend strictly on the primary key)",
          "It must contain no duplicate rows regardless of primary key definitions",
          "It must store all data in a single JSON column without indexes",
          "Every column in the table must be a foreign key pointing to another table"
        ],
        correctAnswer: 0,
        explanation: "Third Normal Form (3NF) requires the table to be in 2NF and have no transitive dependencies: every non-prime attribute must depend non-transitively directly on the primary key ('the key, the whole key, and nothing but the key')."
      }
    ]
  },
  {
    id: "qp-sql-set-b",
    paperCode: "SQL-QP-SETB",
    groupName: "Alphabetical Group G–L",
    letterRange: "G-L",
    studentNamePattern: "Candidate first name starting with G, H, I, J, K, or L",
    title: "Paper 2 (Set B): Advanced Multi-Table JOINs, Aggregations & Grouping Sets",
    subtitle: "Covers INNER/LEFT/RIGHT/FULL/CROSS/SELF JOINs, GROUP BY, HAVING, ROLLUP & CUBE Aggregations",
    timeLimitMinutes: 45,
    passingScore: 70,
    totalMarks: 100,
    questions: [
      {
        id: "sql-b-1",
        questionNumber: 1,
        topic: "INNER vs LEFT JOIN Behavior",
        questionText: "How does a LEFT OUTER JOIN differ from an INNER JOIN when querying 'customers' LEFT JOIN 'orders'?",
        codeSnippet: "SELECT c.name, o.order_date \nFROM customers c \nLEFT JOIN orders o ON c.id = o.customer_id;",
        options: [
          "INNER JOIN returns all customers even if they have no orders; LEFT JOIN returns only customers with orders",
          "LEFT JOIN returns ALL rows from 'customers', filling missing 'orders' columns with NULL if no match exists; INNER JOIN returns ONLY customers that have matching orders",
          "LEFT JOIN automatically deletes orders that have no matching customer",
          "INNER JOIN operates only on primary keys, while LEFT JOIN operates on text columns"
        ],
        correctAnswer: 1,
        explanation: "LEFT OUTER JOIN preserves all rows from the left table ('customers'). If a left row has no match in the right table ('orders'), NULL is produced for right-table attributes. INNER JOIN discards non-matching rows."
      },
      {
        id: "sql-b-2",
        questionNumber: 2,
        topic: "RIGHT JOIN Equivalence",
        questionText: "Which statement is semantically identical to: 'SELECT * FROM tableA a RIGHT JOIN tableB b ON a.id = b.a_id'?",
        codeSnippet: null,
        options: [
          "SELECT * FROM tableB b LEFT JOIN tableA a ON a.id = b.a_id",
          "SELECT * FROM tableA a INNER JOIN tableB b ON a.id = b.a_id",
          "SELECT * FROM tableA a FULL JOIN tableB b ON a.id = b.a_id",
          "SELECT * FROM tableB b CROSS JOIN tableA a"
        ],
        correctAnswer: 0,
        explanation: "Swapping table positions in a RIGHT JOIN converts it into a LEFT JOIN ('tableB LEFT JOIN tableA'), preserving all rows from tableB."
      },
      {
        id: "sql-b-3",
        questionNumber: 3,
        topic: "FULL OUTER JOIN Mechanics",
        questionText: "When executing a FULL OUTER JOIN between Table A (10 rows) and Table B (10 rows), where 6 rows match on the join key, how many rows are returned in the result set?",
        codeSnippet: null,
        options: [
          "6 rows",
          "10 rows",
          "14 rows (6 matching + 4 unmatched from A + 4 unmatched from B)",
          "20 rows"
        ],
        correctAnswer: 2,
        explanation: "FULL OUTER JOIN returns all matching rows (6) plus unmatched rows from the left table (10 - 6 = 4) and unmatched rows from the right table (10 - 6 = 4), yielding 6 + 4 + 4 = 14 rows."
      },
      {
        id: "sql-b-4",
        questionNumber: 4,
        topic: "CROSS JOIN Cartesian Product",
        questionText: "If Table A contains 5 rows and Table B contains 20 rows, how many rows will be produced by a CROSS JOIN without a WHERE clause?",
        codeSnippet: "SELECT * FROM TableA CROSS JOIN TableB;",
        options: [
          "25 rows",
          "100 rows (5 x 20 Cartesian product)",
          "20 rows",
          "5 rows"
        ],
        correctAnswer: 1,
        explanation: "A CROSS JOIN produces a Cartesian product combining every row of the first table with every row of the second table ($5 \times 20 = 100$ rows)."
      },
      {
        id: "sql-b-5",
        questionNumber: 5,
        topic: "SELF JOIN Hierarchical Queries",
        questionText: "What query correctly pairs each employee's name with their manager's name from a single 'employees' table containing (emp_id, name, manager_id)?",
        codeSnippet: null,
        options: [
          "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.emp_id;",
          "SELECT e.name AS employee, m.name AS manager FROM employees e INNER JOIN employees m ON e.emp_id = m.emp_id;",
          "SELECT name, manager_id FROM employees WHERE emp_id = manager_id;",
          "SELECT CROSS JOIN employees ON manager_id = emp_id;"
        ],
        correctAnswer: 0,
        explanation: "A SELF JOIN joins a table to itself using aliases ('e' for employee, 'm' for manager), linking e.manager_id = m.emp_id."
      },
      {
        id: "sql-b-6",
        questionNumber: 6,
        topic: "WHERE vs HAVING Filtering Sequence",
        questionText: "What is the key functional difference between the WHERE clause and the HAVING clause in a GROUP BY query?",
        codeSnippet: "SELECT department_id, COUNT(*) \nFROM employees \nWHERE salary > 50000 \nGROUP BY department_id \nHAVING COUNT(*) > 5;",
        options: [
          "WHERE filters individual rows BEFORE grouping and aggregation occur; HAVING filters aggregated groups AFTER grouping is performed",
          "HAVING filters individual rows before grouping; WHERE filters aggregated groups after grouping",
          "WHERE can contain aggregate functions like SUM(), whereas HAVING cannot",
          "There is no difference; WHERE and HAVING are completely interchangeable"
        ],
        correctAnswer: 0,
        explanation: "WHERE filters raw candidate rows prior to grouping. HAVING filters summarized group rows after the GROUP BY and aggregate functions have been evaluated."
      },
      {
        id: "sql-b-7",
        questionNumber: 7,
        topic: "COUNT(*) vs COUNT(column) & NULLs",
        questionText: "Given a table with 5 rows where column 'bonus' contains values: [100, 200, NULL, 300, NULL]. What are the results of COUNT(*) vs COUNT(bonus)?",
        codeSnippet: null,
        options: [
          "COUNT(*) = 5, COUNT(bonus) = 3",
          "COUNT(*) = 3, COUNT(bonus) = 5",
          "COUNT(*) = 5, COUNT(bonus) = 5",
          "COUNT(*) = 3, COUNT(bonus) = 3"
        ],
        correctAnswer: 0,
        explanation: "COUNT(*) counts total row records regardless of NULLs (5 rows). COUNT(column) counts non-NULL values in that specific column (3 non-NULL bonus values)."
      },
      {
        id: "sql-b-8",
        questionNumber: 8,
        topic: "GROUP BY Rules & Non-Aggregated Columns",
        questionText: "Why does the following SQL statement trigger an execution error in standard SQL engines?",
        codeSnippet: "SELECT department_id, job_title, AVG(salary)\nFROM employees\nGROUP BY department_id;",
        options: [
          "AVG() cannot be calculated on salary columns",
          "'job_title' appears in the SELECT list but is neither enclosed in an aggregate function nor listed in the GROUP BY clause",
          "department_id must be cast to string before grouping",
          "The query lacks an explicit ORDER BY clause"
        ],
        correctAnswer: 1,
        explanation: "In standard SQL, every column in the SELECT list that is not wrapped inside an aggregate function MUST be explicitly included in the GROUP BY clause."
      },
      {
        id: "sql-b-9",
        questionNumber: 9,
        topic: "GROUP BY ROLLUP Hierarchical Subtotals",
        questionText: "What subtotal combinations are calculated when executing GROUP BY ROLLUP (region, year, category)?",
        codeSnippet: null,
        options: [
          "(region, year, category), (region, year), (region), and Grand Total ()",
          "Only (region, year, category) and Grand Total ()",
          "(category), (year), (region) independently without combinations",
          "All $2^3 = 8$ possible combinations of region, year, and category"
        ],
        correctAnswer: 0,
        explanation: "ROLLUP generates progressive hierarchical subtotals from left to right: (N+1) grouping sets: (A, B, C), (A, B), (A), and Grand Total ()."
      },
      {
        id: "sql-b-10",
        questionNumber: 10,
        topic: "GROUP BY CUBE Combinations",
        questionText: "How many distinct grouping sets does GROUP BY CUBE (dept, location) generate?",
        codeSnippet: null,
        options: [
          "2 sets: (dept, location) and Grand Total ()",
          "4 sets: (dept, location), (dept), (location), and Grand Total ()",
          "3 sets: (dept), (location), and Grand Total ()",
          "8 sets"
        ],
        correctAnswer: 1,
        explanation: "CUBE produces all $2^n$ possible grouping set combinations for $n$ columns. For 2 columns, $2^2 = 4$ grouping sets: (dept, location), (dept), (location), and ()."
      },
      {
        id: "sql-b-11",
        questionNumber: 11,
        topic: "USING Clause vs ON Clause",
        questionText: "What is the effect of using the USING(department_id) clause in a JOIN query?",
        codeSnippet: "SELECT * FROM employees JOIN departments USING(department_id);",
        options: [
          "It joins the tables on employees.department_id = departments.department_id and coalesces department_id to a single column in SELECT *",
          "It performs a cross join ignoring department_id",
          "It requires department_id to be a primary key in both tables",
          "It creates an index on department_id before joining"
        ],
        correctAnswer: 0,
        explanation: "USING(col) simplifies joins where the join column has the exact same name in both tables, returning the join column only once when SELECT * is used."
      },
      {
        id: "sql-b-12",
        questionNumber: 12,
        topic: "Handling NULLs in AVG() & SUM()",
        questionText: "Given a column with values [10, 20, NULL, 30], what is the result of SELECT AVG(val)?",
        codeSnippet: null,
        options: [
          "15.0 (60 divided by 4 rows)",
          "20.0 (60 divided by 3 non-NULL rows)",
          "NULL (because NULL invalidates arithmetic averages)",
          "0.0"
        ],
        correctAnswer: 1,
        explanation: "SQL aggregate functions (except COUNT(*)) ignore NULL values entirely. The sum is 60 and the count of non-NULL values is 3, yielding an average of $60 / 3 = 20.0$."
      },
      {
        id: "sql-b-13",
        questionNumber: 13,
        topic: "Conditional Aggregations (Pivot)",
        questionText: "What technique counts the number of high-value orders (amount > 1000) per region in a single SQL query?",
        codeSnippet: null,
        options: [
          "SELECT region, COUNT(CASE WHEN amount > 1000 THEN 1 END) FROM orders GROUP BY region;",
          "SELECT region, SUM(amount > 1000) FROM orders WHERE amount > 1000 GROUP BY region;",
          "SELECT region, HAVING(amount > 1000) FROM orders GROUP BY region;",
          "SELECT region, COUNT(*) WHERE amount > 1000 GROUP BY region;"
        ],
        correctAnswer: 0,
        explanation: "Combining COUNT(CASE WHEN condition THEN 1 END) or SUM(CASE WHEN condition THEN 1 ELSE 0 END) performs conditional aggregation (pivoting) per group."
      },
      {
        id: "sql-b-14",
        questionNumber: 14,
        topic: "HAVING Clause with Multiple Conditions",
        questionText: "Which HAVING clause filters departments where the average salary exceeds 60,000 AND the total headcount is at least 10?",
        codeSnippet: null,
        options: [
          "WHERE AVG(salary) > 60000 AND COUNT(*) >= 10",
          "HAVING AVG(salary) > 60000 AND COUNT(*) >= 10",
          "HAVING salary > 60000 AND headcount >= 10",
          "GROUP BY HAVING AVG(salary) > 60000"
        ],
        correctAnswer: 1,
        explanation: "Aggregate conditions filtering summarized groups belong in the HAVING clause: HAVING AVG(salary) > 60000 AND COUNT(*) >= 10."
      },
      {
        id: "sql-b-15",
        questionNumber: 15,
        topic: "Non-Equi JOINs & Range Matching",
        questionText: "What type of JOIN uses operators like BETWEEN or >= instead of '=' to match employee salaries against salary grade bands?",
        codeSnippet: "SELECT e.name, g.grade_level \nFROM employees e \nJOIN salary_grades g ON e.salary BETWEEN g.min_salary AND g.max_salary;",
        options: [
          "Equi-Join",
          "Non-Equi Join",
          "Self Join",
          "Natural Join"
        ],
        correctAnswer: 1,
        explanation: "A Non-Equi Join joins tables based on inequality conditions (such as BETWEEN, >=, <), commonly used for tax brackets, date ranges, and grade bands."
      },
      {
        id: "sql-b-16",
        questionNumber: 16,
        topic: "UNION vs UNION ALL Performance",
        questionText: "Why is UNION ALL faster than UNION when combining two result sets of 500,000 rows each?",
        codeSnippet: null,
        options: [
          "UNION ALL sorts and deduplicates the merged dataset; UNION skips deduplication",
          "UNION performs a costly distinct sorting/hashing pass to eliminate duplicate rows; UNION ALL simply appends result sets without checking duplicates",
          "UNION ALL runs in memory while UNION writes temporary files to disk",
          "UNION ALL can only be executed on primary key columns"
        ],
        correctAnswer: 1,
        explanation: "UNION requires deduplication (sorting/hashing) to remove duplicate rows across sets. UNION ALL appends the sets directly without duplicate checks, making it much faster."
      },
      {
        id: "sql-b-17",
        questionNumber: 17,
        topic: "INTERSECT & EXCEPT Set Operations",
        questionText: "What does the EXCEPT (or MINUS) set operator return when executing: 'Query A EXCEPT Query B'?",
        codeSnippet: null,
        options: [
          "All rows present in Query B but absent in Query A",
          "All distinct rows present in Query A that DO NOT appear in Query B",
          "All rows present in both Query A and Query B",
          "All rows from Query A and Query B combined with duplicates"
        ],
        correctAnswer: 1,
        explanation: "EXCEPT (MINUS) returns distinct rows from the left result set (Query A) that do not exist in the right result set (Query B)."
      },
      {
        id: "sql-b-18",
        questionNumber: 18,
        topic: "LEFT JOIN ON Filter vs WHERE Filter",
        questionText: "What is the structural difference between placing a filter condition in the ON clause vs placing it in the WHERE clause during a LEFT JOIN?",
        codeSnippet: "-- Query 1: ON condition\nSELECT * FROM A LEFT JOIN B ON A.id = B.a_id AND B.status = 'Active';\n\n-- Query 2: WHERE condition\nSELECT * FROM A LEFT JOIN B ON A.id = B.a_id WHERE B.status = 'Active';",
        options: [
          "Query 1 keeps all rows from A (unmatched B rows get NULLs); Query 2 effectively converts the LEFT JOIN into an INNER JOIN by filtering out NULL B.status rows",
          "Query 1 and Query 2 produce identical execution plans and results",
          "Query 1 throws a syntax error because status belongs in WHERE",
          "Query 2 preserves all rows from A while Query 1 discards A rows"
        ],
        correctAnswer: 0,
        explanation: "Placing 'B.status = Active' in the ON clause filters matching B rows before joining (preserving all A rows). Placing it in WHERE filters after joining, discarding NULL B rows and turning the LEFT JOIN into an INNER JOIN."
      },
      {
        id: "sql-b-19",
        questionNumber: 19,
        topic: "Aggregations in Correlated Scalar Subqueries",
        questionText: "What does the following query calculate for each employee?",
        codeSnippet: "SELECT e.name, e.salary, \n       e.salary - (SELECT AVG(salary) FROM employees WHERE dept_id = e.dept_id) AS diff\nFROM employees e;",
        options: [
          "The overall average salary across the entire company",
          "The difference between the employee's salary and their own department's average salary",
          "The total payroll budget of the employee's department",
          "A syntax error because AVG() cannot be correlated"
        ],
        correctAnswer: 1,
        explanation: "The scalar correlated subquery calculates the average salary for the specific employee's department (e.dept_id), subtracting it from the employee's individual salary."
      },
      {
        id: "sql-b-20",
        questionNumber: 20,
        topic: "String Aggregation (STRING_AGG)",
        questionText: "Which ANSI SQL standard function concatenates string values from multiple rows into a single string per group?",
        codeSnippet: "SELECT dept_id, STRING_AGG(employee_name, ', ' ORDER BY hire_date) FROM employees GROUP BY dept_id;",
        options: [
          "GROUP_CONCAT() or STRING_AGG()",
          "CONCAT_ALL()",
          "MERGE_STRINGS()",
          "SUM_TEXT()"
        ],
        correctAnswer: 0,
        explanation: "STRING_AGG() (ANSI SQL / PostgreSQL / SQL Server) and GROUP_CONCAT() (MySQL/SQLite) aggregate column string values across rows in a group into a delimiter-separated string."
      }
    ]
  },
  {
    id: "qp-sql-set-c",
    paperCode: "SQL-QP-SETC",
    groupName: "Alphabetical Group M–R",
    letterRange: "M-R",
    studentNamePattern: "Candidate first name starting with M, N, O, P, Q, or R",
    title: "Paper 3 (Set C): Subqueries, CTEs, Window Functions & Analytical SQL",
    subtitle: "Covers ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, Common Table Expressions & Subqueries",
    timeLimitMinutes: 45,
    passingScore: 70,
    totalMarks: 100,
    questions: [
      {
        id: "sql-c-1",
        questionNumber: 1,
        topic: "Window Functions: ROW_NUMBER vs RANK vs DENSE_RANK",
        questionText: "If three employees tie for the highest salary (100k), what rank numbers are assigned to the subsequent employee (90k) by ROW_NUMBER(), RANK(), and DENSE_RANK() respectively?",
        codeSnippet: null,
        options: [
          "ROW_NUMBER assigns 4, RANK assigns 4, DENSE_RANK assigns 2",
          "ROW_NUMBER assigns 1, RANK assigns 2, DENSE_RANK assigns 3",
          "ROW_NUMBER assigns 4, RANK assigns 2, DENSE_RANK assigns 4",
          "ROW_NUMBER assigns 2, RANK assigns 4, DENSE_RANK assigns 2"
        ],
        correctAnswer: 0,
        explanation: "For tied top 3 values (100k): ROW_NUMBER yields unique sequence [1, 2, 3] so next is 4. RANK yields [1, 1, 1] and skips positions, assigning 4 to next. DENSE_RANK yields [1, 1, 1] without gaps, assigning 2 to next."
      },
      {
        id: "sql-c-2",
        questionNumber: 2,
        topic: "PARTITION BY vs ORDER BY in OVER Clause",
        questionText: "What is the purpose of the PARTITION BY clause inside a window function OVER() specification?",
        codeSnippet: "SELECT name, dept_id, salary,\n       AVG(salary) OVER (PARTITION BY dept_id) as dept_avg\nFROM employees;",
        options: [
          "It sorts the final query output by department ID",
          "It divides result set rows into separate partition groups across which the window function evaluates independently",
          "It deletes duplicate rows in each department",
          "It restricts the query to return only 1 row per department"
        ],
        correctAnswer: 1,
        explanation: "PARTITION BY divides the input rowset into partitions. The window function is computed independently for each partition, preserving all original detail rows in the final output."
      },
      {
        id: "sql-c-3",
        questionNumber: 3,
        topic: "LAG and LEAD Functions",
        questionText: "What does the LAG(sales_amount, 1) OVER (ORDER BY sale_date) window function return for a given row?",
        codeSnippet: null,
        options: [
          "The sales_amount of the subsequent row in chronological order",
          "The sales_amount of the immediately preceding row in chronological order (or NULL for the first row)",
          "The average sales_amount of all previous rows combined",
          "The maximum sales_amount in the table"
        ],
        correctAnswer: 1,
        explanation: "LAG(col, offset) accesses data from a preceding row at a specified physical offset prior to the current position within the window partition."
      },
      {
        id: "sql-c-4",
        questionNumber: 4,
        topic: "Common Table Expressions (CTEs)",
        questionText: "What is a primary architectural benefit of Common Table Expressions (WITH clause) compared to deeply nested subqueries?",
        codeSnippet: "WITH regional_sales AS (\n    SELECT region, SUM(amount) AS total_sales FROM sales GROUP BY region\n)\nSELECT * FROM regional_sales WHERE total_sales > 100000;",
        options: [
          "CTEs are stored permanently on disk as physical tables",
          "CTEs improve code readability, modularity, and can be referenced multiple times within the same parent statement",
          "CTEs disable transaction logging to make queries run 100x faster",
          "CTEs automatically create primary keys on all CTE columns"
        ],
        correctAnswer: 1,
        explanation: "CTEs provide a clean named temporary result set defined using WITH that improves SQL readability, modular structure, and reusability within a single execution."
      },
      {
        id: "sql-c-5",
        questionNumber: 5,
        topic: "Recursive CTE Structure",
        questionText: "What two SELECT queries must be combined with UNION ALL inside a Recursive CTE (WITH RECURSIVE)?",
        codeSnippet: "WITH RECURSIVE org_tree AS (\n    -- Query 1\n    SELECT emp_id, manager_id, name FROM employees WHERE manager_id IS NULL\n    UNION ALL\n    -- Query 2\n    SELECT e.emp_id, e.manager_id, e.name \n    FROM employees e JOIN org_tree t ON e.manager_id = t.emp_id\n)\nSELECT * FROM org_tree;",
        options: [
          "The Anchor Member (initial base case) and the Recursive Member (referencing the CTE name)",
          "The Primary Key query and the Foreign Key query",
          "The Aggregate query and the Grouping query",
          "The Update query and the Delete query"
        ],
        correctAnswer: 0,
        explanation: "A Recursive CTE requires an Anchor Member (base non-recursive query) UNION ALLed with a Recursive Member that references the CTE itself until recursion terminates."
      },
      {
        id: "sql-c-6",
        questionNumber: 6,
        topic: "Correlated Subqueries Execution",
        questionText: "Why can correlated subqueries exhibit poor performance ($O(N^2)$ time complexity) on large datasets?",
        codeSnippet: "SELECT * FROM orders o \nWHERE amount > (SELECT AVG(amount) FROM orders WHERE customer_id = o.customer_id);",
        options: [
          "Correlated subqueries lock the entire database server on every row read",
          "The subquery references outer query column values ('o.customer_id') and must be re-evaluated once for EVERY candidate row processed by the outer query",
          "Correlated subqueries disable all indexes on the outer table",
          "Correlated subqueries convert all integers into floating point numbers"
        ],
        correctAnswer: 1,
        explanation: "A correlated subquery relies on outer query values. Conceptual evaluation requires executing the subquery once per candidate row of the outer table unless optimized to a join by the query optimizer."
      },
      {
        id: "sql-c-7",
        questionNumber: 7,
        topic: "EXISTS vs IN Semantics",
        questionText: "Which statement accurately describes the evaluation behavior of EXISTS (subquery)?",
        codeSnippet: "SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
        options: [
          "EXISTS returns true as soon as the subquery yields at least one matching row, short-circuiting further evaluation for that outer row",
          "EXISTS calculates the total sum of all rows returned by the subquery",
          "EXISTS returns false if the subquery contains any NULL values",
          "EXISTS requires the subquery to return all table columns"
        ],
        correctAnswer: 0,
        explanation: "EXISTS tests for row existence. As soon as the subquery produces a single matching row, EXISTS short-circuits to TRUE without scanning remaining subquery rows for that outer record."
      },
      {
        id: "sql-c-8",
        questionNumber: 8,
        topic: "NOT IN NULL Trap",
        questionText: "Why does the query 'WHERE id NOT IN (SELECT manager_id FROM employees)' return zero rows if ANY manager_id in the subquery is NULL?",
        codeSnippet: null,
        options: [
          "NOT IN with a list containing NULL evaluates to 'NOT (id = val1 OR id = NULL)', which resolves to UNKNOWN (false) for every row",
          "The SQL engine crashes when encountering NULL in IN lists",
          "NOT IN requires all column data types to be fixed-width CHAR",
          "Subqueries are not allowed inside NOT IN clauses"
        ],
        correctAnswer: 0,
        explanation: "If the subquery result contains NULL, 'x NOT IN (1, 2, NULL)' expands to '(x != 1 AND x != 2 AND x != NULL)'. Since 'x != NULL' is UNKNOWN, the whole AND condition evaluates to UNKNOWN, returning 0 rows. NOT EXISTS avoids this trap."
      },
      {
        id: "sql-c-9",
        questionNumber: 9,
        topic: "Derived Tables in FROM Clause",
        questionText: "What syntax requirement is mandatory when using a subquery in the FROM clause (Derived Table)?",
        codeSnippet: "SELECT avg_salary FROM (SELECT dept_id, AVG(salary) AS avg_salary FROM employees GROUP BY dept_id) AS dept_summary;",
        options: [
          "The derived subquery MUST be assigned a table alias (e.g. 'AS dept_summary')",
          "The subquery must contain a WHERE clause",
          "The subquery cannot contain GROUP BY clauses",
          "The outer query must use a UNION operator"
        ],
        correctAnswer: 0,
        explanation: "ANSI SQL requires subqueries in the FROM clause (derived tables) to have an explicit table alias so that outer SELECT expressions can reference its columns."
      },
      {
        id: "sql-c-10",
        questionNumber: 10,
        topic: "Cumulative Running Totals",
        questionText: "Which window function specification correctly calculates a cumulative running total of 'amount' sorted by 'order_date'?",
        codeSnippet: null,
        options: [
          "SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
          "SUM(amount) OVER (PARTITION BY amount)",
          "TOTAL(amount) OVER (ORDER BY order_date)",
          "CUMULATIVE_SUM(amount) BY order_date"
        ],
        correctAnswer: 0,
        explanation: "SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) accumulates values from the first row of the partition up to the current row."
      },
      {
        id: "sql-c-11",
        questionNumber: 11,
        topic: "Window Frame: ROWS vs RANGE",
        questionText: "What is the difference between ROWS BETWEEN and RANGE BETWEEN in SQL window frames?",
        codeSnippet: null,
        options: [
          "ROWS operates on physical row offsets; RANGE operates on logical value offsets of the ORDER BY column (treating duplicate values as a single peer group)",
          "ROWS works only on text columns; RANGE works only on integer columns",
          "ROWS requires a GROUP BY clause; RANGE requires a HAVING clause",
          "There is no difference; ROWS and RANGE produce identical results for tied values"
        ],
        correctAnswer: 0,
        explanation: "ROWS defines window frame bounds based on physical row counts (e.g., 2 rows before). RANGE defines bounds based on value ranges of the ORDER BY key, grouping duplicate peer values together."
      },
      {
        id: "sql-c-12",
        questionNumber: 12,
        topic: "FIRST_VALUE and LAST_VALUE Window Frame",
        questionText: "Why does LAST_VALUE(salary) OVER (ORDER BY hire_date) return the CURRENT row's salary instead of the last salary in the partition unless frame bounds are modified?",
        codeSnippet: null,
        options: [
          "Default window frame with ORDER BY is 'RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW', capping the frame at the current row",
          "LAST_VALUE is a deprecated function that behaves like FIRST_VALUE",
          "LAST_VALUE works only when salary is indexed",
          "LAST_VALUE evaluates in reverse alphabetical order"
        ],
        correctAnswer: 0,
        explanation: "The default window frame when ORDER BY is supplied is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. Thus the 'last' value in the frame is the current row. To get the true partition end, use 'ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING'."
      },
      {
        id: "sql-c-13",
        questionNumber: 13,
        topic: "NTILE Quantile Distribution",
        questionText: "What does NTILE(4) OVER (ORDER BY test_score DESC) do when applied to 100 student exam scores?",
        codeSnippet: null,
        options: [
          "Divides the ordered score records into 4 equal quartiles (1 to 4), assigning 1 to top 25% students and 4 to bottom 25%",
          "Multiplies each student score by 4",
          "Returns only students whose score ends in 4",
          "Calculates 4th degree polynomial averages"
        ],
        correctAnswer: 0,
        explanation: "NTILE(n) divides an ordered partition into 'n' roughly equal buckets (quartiles for 4, percentiles for 100), assigning bucket numbers 1 through n."
      },
      {
        id: "sql-c-14",
        questionNumber: 14,
        topic: "ANY / SOME vs ALL Subquery Comparison",
        questionText: "What condition makes 'WHERE salary > ALL (SELECT salary FROM employees WHERE dept_id = 5)' evaluate to true?",
        codeSnippet: null,
        options: [
          "The candidate salary must be greater than the MAXIMUM salary in department 5",
          "The candidate salary must be greater than the MINIMUM salary in department 5",
          "The candidate salary must be equal to the average salary in department 5",
          "The candidate salary must match at least one salary in department 5"
        ],
        correctAnswer: 0,
        explanation: "'> ALL (subquery)' requires the value to be strictly greater than EVERY value returned by the subquery (i.e. greater than the maximum value)."
      },
      {
        id: "sql-c-15",
        questionNumber: 15,
        topic: "Scalar Subquery Requirements",
        questionText: "What error occurs if a subquery placed in the SELECT column list returns 2 rows instead of 1 row?",
        codeSnippet: "SELECT name, (SELECT order_id FROM orders WHERE customer_id = c.id) FROM customers c;",
        options: [
          "Subquery returns more than 1 row (Scalar Subquery Violation)",
          "Division by zero error",
          "Table deadlock exception",
          "Infinite loop timeout"
        ],
        correctAnswer: 0,
        explanation: "A subquery placed where a single scalar value is expected (such as in the SELECT column expression list) must return at most 1 row and 1 column. Returning multiple rows causes a runtime scalar subquery error."
      },
      {
        id: "sql-c-16",
        questionNumber: 16,
        topic: "Chaining Multiple CTEs",
        questionText: "How are multiple CTEs declared within a single WITH statement?",
        codeSnippet: "WITH dept_totals AS (\n    SELECT dept_id, SUM(salary) AS total_pay FROM employees GROUP BY dept_id\n),\ncompany_avg AS (\n    SELECT AVG(total_pay) AS avg_dept_pay FROM dept_totals\n)\nSELECT * FROM dept_totals WHERE total_pay > (SELECT avg_dept_pay FROM company_avg);",
        options: [
          "Comma-separated list under a single WITH keyword",
          "Repeating the WITH keyword for every CTE definition",
          "Separated by semicolons",
          "Using UNION ALL between CTE blocks"
        ],
        correctAnswer: 0,
        explanation: "Multiple CTEs are defined sequentially separated by commas following a single WITH keyword. Subsequent CTEs can reference previously defined CTEs."
      },
      {
        id: "sql-c-17",
        questionNumber: 17,
        topic: "Window Functions Placement Restrictions",
        questionText: "Where are window functions allowed to be placed in a SQL query block?",
        codeSnippet: null,
        options: [
          "Only in SELECT and ORDER BY clauses (NOT in WHERE or HAVING clauses directly)",
          "Only in WHERE and HAVING clauses",
          "Only in FROM and GROUP BY clauses",
          "Window functions can be placed anywhere without restriction"
        ],
        correctAnswer: 0,
        explanation: "Window functions execute AFTER WHERE, GROUP BY, and HAVING phases. Therefore, they are allowed only in the SELECT list and ORDER BY clause. To filter by a window function result, wrap it in a CTE or derived table."
      },
      {
        id: "sql-c-18",
        questionNumber: 18,
        topic: "Moving Average Calculation",
        questionText: "Which window frame specification computes a 3-day moving average (current day plus 2 preceding days)?",
        codeSnippet: null,
        options: [
          "AVG(daily_sales) OVER (ORDER BY sale_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)",
          "AVG(daily_sales) OVER (ORDER BY sale_date ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING)",
          "MOVING_AVG(daily_sales, 3)",
          "SUM(daily_sales) / 3 OVER (PARTITION BY sale_date)"
        ],
        correctAnswer: 0,
        explanation: "'ROWS BETWEEN 2 PRECEDING AND CURRENT ROW' includes 3 physical rows in the window frame (2 previous + current), calculating the exact 3-period moving average."
      },
      {
        id: "sql-c-19",
        questionNumber: 19,
        topic: "Top-N Per Group Analytical Pattern",
        questionText: "Which pattern correctly fetches the top 2 highest-paid employees inside EACH department?",
        codeSnippet: "WITH ranked_emps AS (\n    SELECT name, dept_id, salary,\n           DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rnk\n    FROM employees\n)\nSELECT * FROM ranked_emps WHERE rnk <= 2;",
        options: [
          "Using DENSE_RANK() PARTITION BY dept_id ORDER BY salary DESC in a CTE, then filtering WHERE rnk <= 2",
          "SELECT TOP 2 * FROM employees GROUP BY dept_id",
          "SELECT * FROM employees WHERE salary = MAX(salary) GROUP BY dept_id",
          "ORDER BY salary DESC LIMIT 2 PARTITION BY dept_id"
        ],
        correctAnswer: 0,
        explanation: "The standard SQL pattern for Top-N per group uses DENSE_RANK() or ROW_NUMBER() partitioned by group and ordered by metric, filtered in an outer query or CTE."
      },
      {
        id: "sql-c-20",
        questionNumber: 20,
        topic: "Anti-Join Pattern (Unmatched Rows)",
        questionText: "What query pattern retrieves customers who have NEVER placed an order?",
        codeSnippet: null,
        options: [
          "SELECT c.id, c.name FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL;",
          "SELECT c.id, c.name FROM customers c INNER JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL;",
          "SELECT c.id, c.name FROM customers c CROSS JOIN orders o;",
          "SELECT c.id, c.name FROM customers c WHERE c.id = orders.customer_id;"
        ],
        correctAnswer: 0,
        explanation: "The Anti-Join pattern performs a LEFT JOIN from customers to orders and filters 'WHERE orders.id IS NULL', isolating customer records with zero matching orders."
      }
    ]
  },
  {
    id: "qp-sql-set-d",
    paperCode: "SQL-QP-SETD",
    groupName: "Alphabetical Group S–Z",
    letterRange: "S-Z",
    studentNamePattern: "Candidate first name starting with S, T, U, V, W, X, Y, or Z",
    title: "Paper 4 (Set D): Query Performance Optimization, Indexing, ACID & Transactions",
    subtitle: "Covers B-Tree/Clustered Indexes, ACID Properties, Transaction Isolation Levels, Deadlocks & Triggers",
    timeLimitMinutes: 45,
    passingScore: 70,
    totalMarks: 100,
    questions: [
      {
        id: "sql-d-1",
        questionNumber: 1,
        topic: "B-Tree Index Architecture",
        questionText: "In a standard B-Tree index structure, what data is stored inside the leaf nodes?",
        codeSnippet: null,
        options: [
          "The indexed key values along with pointers/row identifiers (or full row data for clustered index) to locate table records",
          "Only raw binary hash values of table primary keys",
          "Unordered string text copies of table descriptions",
          "Transaction log checkpoints"
        ],
        correctAnswer: 0,
        explanation: "B-Tree leaf nodes contain sorted index key values paired with row locators (tuple IDs/pointers or clustered row data) allowing logarithmic $O(\log N)$ search traversal."
      },
      {
        id: "sql-d-2",
        questionNumber: 2,
        topic: "Clustered vs Non-Clustered Indexes",
        questionText: "How does a Clustered Index fundamentally differ from a Non-Clustered Index?",
        codeSnippet: null,
        options: [
          "A Clustered Index physically dictates the storage order of table data rows on disk (thus only 1 per table); a Non-Clustered Index is a separate structure pointing to table data (multiple per table)",
          "Non-Clustered Indexes store physical rows on disk; Clustered Indexes store pointers",
          "A table can have up to 250 Clustered Indexes and only 1 Non-Clustered Index",
          "Clustered Indexes slow down SELECT queries but speed up INSERTs"
        ],
        correctAnswer: 0,
        explanation: "A Clustered Index sorts and stores table data rows physically on disk according to key order (1 per table). A Non-Clustered Index maintains a separate B-Tree structure storing keys and row locators."
      },
      {
        id: "sql-d-3",
        questionNumber: 3,
        topic: "Composite Indexes & Left-Prefix Rule",
        questionText: "Given a composite index INDEX idx_user_loc (country, state, city), which WHERE clause CANNOT utilize this index effectively?",
        codeSnippet: null,
        options: [
          "WHERE country = 'USA' AND state = 'CA'",
          "WHERE country = 'USA'",
          "WHERE city = 'San Francisco' AND state = 'CA' (without specifying country)",
          "WHERE country = 'USA' AND state = 'CA' AND city = 'San Francisco'"
        ],
        correctAnswer: 2,
        explanation: "Composite B-Tree indexes follow the Left-Prefix Rule. Searches must specify leading index columns ('country'). A query filtering only on 'city' and 'state' skips the leading 'country' column, preventing index lookup."
      },
      {
        id: "sql-d-4",
        questionNumber: 4,
        topic: "Index Scan vs Index Seek",
        questionText: "In database query execution plans, why is an 'Index Seek' operation preferred over an 'Index Scan'?",
        codeSnippet: null,
        options: [
          "An Index Seek navigates B-Tree pointer levels directly to pinpoint specific matching rows; an Index Scan reads through the entire index page by page",
          "An Index Scan uses CPU cache while an Index Seek reads from tape storage",
          "An Index Seek converts tables to XML format",
          "There is no difference; Seek and Scan are identical operations"
        ],
        correctAnswer: 0,
        explanation: "Index Seek traverses B-Tree branches directly to target specific key values in $O(\log N)$ steps. Index Scan inspects every leaf page of the index sequentially ($O(N)$), consuming more I/O."
      },
      {
        id: "sql-d-5",
        questionNumber: 5,
        topic: "Covering Indexes & Key Lookups",
        questionText: "What is a 'Covering Index' and why does it eliminate 'Key Lookup / Bookmark Lookup' overhead?",
        codeSnippet: "CREATE INDEX idx_emp_dept_sal ON employees (department_id) INCLUDE (salary, name);",
        options: [
          "It is an index containing ALL columns required by a query, allowing the database engine to satisfy the query entirely from the index without reading table pages",
          "It is an index that encrypts database passwords",
          "It is an index created exclusively on temporary tables",
          "It is an index that covers multiple database instances across network nodes"
        ],
        correctAnswer: 0,
        explanation: "A Covering Index contains all columns referenced in SELECT, WHERE, and JOIN clauses of a query. The engine fulfills the request directly from index pages, skipping table page lookups."
      },
      {
        id: "sql-d-6",
        questionNumber: 6,
        topic: "ACID Properties Definition",
        questionText: "Which ACID property guarantees that once a transaction is committed, its changes persist permanently even in the event of a system crash or power outage?",
        codeSnippet: null,
        options: [
          "Atomicity",
          "Consistency",
          "Isolation",
          "Durability"
        ],
        correctAnswer: 3,
        explanation: "Durability guarantees that once a transaction commits, recorded changes are written to non-volatile transaction logs/disk and survive subsequent system crashes."
      },
      {
        id: "sql-d-7",
        questionNumber: 7,
        topic: "READ UNCOMMITTED & Dirty Reads",
        questionText: "What concurrency anomaly can occur under the READ UNCOMMITTED transaction isolation level?",
        codeSnippet: null,
        options: [
          "Dirty Reads (reading uncommitted data modifications made by another concurrent transaction that might later roll back)",
          "Lost Updates only",
          "Strict Serializability enforcement",
          "Automatic schema modifications"
        ],
        correctAnswer: 0,
        explanation: "READ UNCOMMITTED allows reading dirty (uncommitted) data modified by active concurrent transactions. If the writing transaction rolls back, the reading transaction has acted on invalid data."
      },
      {
        id: "sql-d-8",
        questionNumber: 8,
        topic: "READ COMMITTED & Non-Repeatable Reads",
        questionText: "What anomaly occurs when Transaction A reads a row, Transaction B updates and COMMITS that row, and Transaction A re-reads the row obtaining different values?",
        codeSnippet: null,
        options: [
          "Dirty Read",
          "Non-Repeatable Read (Fuzzy Read)",
          "Phantom Read",
          "Deadlock Exception"
        ],
        correctAnswer: 1,
        explanation: "A Non-Repeatable Read occurs under READ COMMITTED when re-reading a row yields updated column values because another transaction committed changes between reads."
      },
      {
        id: "sql-d-9",
        questionNumber: 9,
        topic: "REPEATABLE READ & Phantom Reads",
        questionText: "What is a 'Phantom Read' anomaly under the REPEATABLE READ isolation level?",
        codeSnippet: null,
        options: [
          "Transaction A executes a range query (e.g. WHERE age > 30), Transaction B INSERTS a new row matching that condition and commits, and Transaction A re-executes the query seeing new 'phantom' rows",
          "Reading data from a deleted database table",
          "A transaction reading its own uncommitted updates",
          "An index corrupted by power outage"
        ],
        correctAnswer: 0,
        explanation: "Phantom Reads occur when a concurrent transaction inserts new records matching a range query criteria. Re-running the range query in the first transaction reveals newly inserted 'phantom' rows."
      },
      {
        id: "sql-d-10",
        questionNumber: 10,
        topic: "SERIALIZABLE Isolation Level",
        questionText: "How does the SERIALIZABLE isolation level prevent all transaction concurrency anomalies (Dirty Reads, Non-Repeatable Reads, Phantom Reads)?",
        codeSnippet: null,
        options: [
          "By using range locks or Optimistic Concurrency Control (SSI) to ensure concurrent transaction execution yields results equivalent to executing transactions serially one after another",
          "By converting all relational tables into flat text files",
          "By disabling transaction rollbacks completely",
          "By enforcing a 1-second sleep delay between every SQL query"
        ],
        correctAnswer: 0,
        explanation: "SERIALIZABLE is the highest isolation level. It uses strict range locking or Serializable Snapshot Isolation (SSI) to guarantee execution outcomes match a strict serial sequential ordering."
      },
      {
        id: "sql-d-11",
        questionNumber: 11,
        topic: "SAVEPOINT & Partial Rollback",
        questionText: "What command allows rolling back a portion of a transaction to a specific intermediate checkpoint without discarding the entire transaction?",
        codeSnippet: "BEGIN TRANSACTION;\nINSERT INTO logs VALUES (1);\nSAVEPOINT sp1;\nINSERT INTO logs VALUES (2);\nROLLBACK TO SAVEPOINT sp1;\nCOMMIT;",
        options: [
          "ROLLBACK TO SAVEPOINT sp1;",
          "RESTORE CHECKPOINT sp1;",
          "UNDO TO sp1;",
          "CANCEL STATEMENT sp1;"
        ],
        correctAnswer: 0,
        explanation: "SAVEPOINT creates a named marker within a transaction. 'ROLLBACK TO SAVEPOINT name' undoes modifications executed after that marker while keeping earlier statements intact for COMMIT."
      },
      {
        id: "sql-d-12",
        questionNumber: 12,
        topic: "Deadlock Handling Strategies",
        questionText: "What action does a SQL Database Engine take when a Deadlock is detected between two concurrent transactions?",
        codeSnippet: null,
        options: [
          "It chooses one transaction as the 'Deadlock Victim', terminates it, and rolls back its work so the other transaction can complete",
          "It pauses both transactions indefinitely until a user restarts the server",
          "It merges both transactions into a single combined transaction",
          "It deletes the tables involved in the deadlock"
        ],
        correctAnswer: 0,
        explanation: "When a deadlock cycle is detected by the lock manager, the database engine selects a transaction (usually the one least costly to undo) as a deadlock victim, aborted with an error so the remaining transaction can proceed."
      },
      {
        id: "sql-d-13",
        questionNumber: 13,
        topic: "Database Triggers (BEFORE vs AFTER)",
        questionText: "Which type of trigger is executed PRIOR to writing data changes to disk, allowing input data validation or transformation?",
        codeSnippet: "CREATE TRIGGER trg_check_salary\nBEFORE INSERT ON employees\nFOR EACH ROW\nEXECUTE FUNCTION validate_salary();",
        options: [
          "BEFORE Trigger",
          "AFTER Trigger",
          "INSTEAD OF Trigger",
          "EVENT Trigger"
        ],
        correctAnswer: 0,
        explanation: "A BEFORE trigger executes prior to committing row modifications, making it ideal for validating constraints, sanitizing input values, or aborting invalid operations before disk write."
      },
      {
        id: "sql-d-14",
        questionNumber: 14,
        topic: "Stored Procedures vs Functions",
        questionText: "What is a key difference between Stored Procedures and User-Defined Functions (UDFs) in relational SQL databases?",
        codeSnippet: null,
        options: [
          "Stored Procedures can execute transaction control statements (COMMIT/ROLLBACK) and return multiple result sets; UDFs cannot modify database state or manage transactions",
          "UDFs can execute DDL commands while Stored Procedures cannot",
          "Stored Procedures cannot take input parameters",
          "UDFs are stored on client machines while Stored Procedures store on server"
        ],
        correctAnswer: 0,
        explanation: "Stored Procedures can perform full data modification, transaction control (COMMIT/ROLLBACK), and return multiple result sets. Pure SQL Functions (UDFs) are restricted from side-effects like transaction commits."
      },
      {
        id: "sql-d-15",
        questionNumber: 15,
        topic: "Execution Plans: Hash Join vs Nested Loop",
        questionText: "When does a Query Optimizer typically choose a Hash Join over a Nested Loop Join?",
        codeSnippet: null,
        options: [
          "When joining two large, unsorted datasets where build and probe hash tables in memory are faster than performing millions of index lookups",
          "When joining a 5-row table with a 10-row indexed table",
          "When executing queries with NO JOIN conditions",
          "When memory is completely exhausted"
        ],
        correctAnswer: 0,
        explanation: "Hash Joins excel at joining large, unsorted datasets. The optimizer builds an in-memory hash table on the smaller input, probing it with rows from the larger input, outperforming nested loops."
      },
      {
        id: "sql-d-16",
        questionNumber: 16,
        topic: "Partial / Filtered Indexes",
        questionText: "What benefit does a Filtered (Partial) Index provide: 'CREATE INDEX idx_unpaid ON orders(customer_id) WHERE is_paid = false'?",
        codeSnippet: null,
        options: [
          "Reduces index size and maintenance overhead by indexing ONLY rows that satisfy the WHERE condition (unpaid orders)",
          "Encrypts customer IDs for unpaid orders",
          "Prevents unpaid orders from being updated",
          "Deletes paid orders automatically"
        ],
        correctAnswer: 0,
        explanation: "A Filtered / Partial Index indexes a subset of table rows matching a predicate. It saves storage space and index maintenance CPU overhead while accelerating queries filtering on that predicate."
      },
      {
        id: "sql-d-17",
        questionNumber: 17,
        topic: "SARGable Queries & Index Usage",
        questionText: "Which WHERE clause expression is SARGable (Search Argument Able) and can effectively utilize a standard index on 'hire_date'?",
        codeSnippet: null,
        options: [
          "WHERE hire_date >= '2025-01-01' AND hire_date < '2026-01-01'",
          "WHERE EXTRACT(YEAR FROM hire_date) = 2025",
          "WHERE DATE_FORMAT(hire_date, '%Y') = '2025'",
          "WHERE YEAR(hire_date) = 2025"
        ],
        correctAnswer: 0,
        explanation: "Wrapping indexed columns inside functions (e.g. YEAR(hire_date)) renders expressions non-SARGable, forcing full table scans. Using raw column range comparisons ('hire_date >= ...') allows index seeking."
      },
      {
        id: "sql-d-18",
        questionNumber: 18,
        topic: "Shared Locks (S) vs Exclusive Locks (X)",
        questionText: "What is the lock compatibility rule between Shared Locks (S) and Exclusive Locks (X) during concurrent queries?",
        codeSnippet: null,
        options: [
          "Multiple transactions can hold Shared Locks (S) concurrently on the same row; an Exclusive Lock (X) blocks ALL other Shared and Exclusive locks",
          "Exclusive Locks allow multiple concurrent writers",
          "Shared Locks block other Shared Locks",
          "Locks apply only to temporary views"
        ],
        correctAnswer: 0,
        explanation: "Shared (S) locks for reading are mutually compatible. Exclusive (X) locks for writing require exclusive access, blocking all other S and X locks on that resource."
      },
      {
        id: "sql-d-19",
        questionNumber: 19,
        topic: "Function-Based / Expression Indexes",
        questionText: "How can a database optimize case-insensitive search queries like: 'WHERE LOWER(email) = 'user@example.com''?",
        codeSnippet: null,
        options: [
          "By creating an Expression / Function-Based Index: CREATE INDEX idx_lower_email ON users (LOWER(email));",
          "By converting the database into a CSV file",
          "By removing the email column from the primary key",
          "By running ANALYZE TABLE every 5 seconds"
        ],
        correctAnswer: 0,
        explanation: "An Expression / Function-Based index evaluates and indexes computed values (such as LOWER(email)), allowing the query optimizer to perform index seeks for function-wrapped queries."
      },
      {
        id: "sql-d-20",
        questionNumber: 20,
        topic: "Database Connection Pooling",
        questionText: "Why do enterprise web applications use Database Connection Pools (e.g. PgBouncer, HikariCP)?",
        codeSnippet: null,
        options: [
          "To reuse a warm cache of established database connections, avoiding the high latency overhead of opening/authenticating TCP sockets on every HTTP request",
          "To bypass database user password authentication",
          "To automatically compress SQL source code into zip files",
          "To store user passwords in local browser storage"
        ],
        correctAnswer: 0,
        explanation: "Opening TCP database connections involves expensive SSL/TLS handshakes and process allocations. Connection pooling maintains reusable open connections, dramatically reducing latency."
      }
    ]
  }
];

// Helper to determine Paper Set based on student name in alphabetical order
export function getPaperSetForStudent(studentName = '') {
  if (!studentName || typeof studentName !== 'string') {
    return SQL_QUESTION_PAPERS[0];
  }
  const cleanName = studentName.trim().toUpperCase();
  const firstLetter = cleanName.charAt(0);

  if (firstLetter >= 'A' && firstLetter <= 'F') {
    return SQL_QUESTION_PAPERS[0]; // Set A
  } else if (firstLetter >= 'G' && firstLetter <= 'L') {
    return SQL_QUESTION_PAPERS[1]; // Set B
  } else if (firstLetter >= 'M' && firstLetter <= 'R') {
    return SQL_QUESTION_PAPERS[2]; // Set C
  } else if (firstLetter >= 'S' && firstLetter <= 'Z') {
    return SQL_QUESTION_PAPERS[3]; // Set D
  }
  return SQL_QUESTION_PAPERS[0]; // Default Set A
}

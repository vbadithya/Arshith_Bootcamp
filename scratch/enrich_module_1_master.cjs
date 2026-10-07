const fs = require('fs');

const masterModule1 = {
  id: "sql-mod-1",
  title: "Module 01 — Introduction to SQL & Databases",
  description: "Master foundational relational database engineering: Dr. Edgar F. Codd's Relational Theory, RDBMS vs Flat Files vs NoSQL, deep RDBMS Engine Architecture (Parser, AST, Cost-Based Optimizer, Execution Engine, WAL, Buffer Pool), Localhost (127.0.0.1) vs Enterprise Cloud Servers, Connection Strings, DBA Security Roles, and complete breakdown of the 5 SQL Sub-Languages (DDL, DML, DQL, DCL, TCL).",
  completed: false,
  order: 1,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 1! Structured Query Language (SQL) is the universal, industry-standard computer language used to define, query, manage, and manipulate structured data stored inside Relational Database Management Systems (RDBMS). Developed in the early 1970s by IBM Computer Scientists (led by Dr. Edgar F. 'Ted' Codd, father of relational databases) and standardized by ANSI in 1986 and ISO in 1987, SQL remains the bedrock of software engineering, financial tech, healthcare architectures, data science, and cloud analytics. Data is the core asset of modern software applications; SQL provides the declarative language to interact with database engines safely, efficiently, and concurrently.",
    objectives: [
      "Master the history of relational databases: Dr. Edgar F. Codd (1970), System/R at IBM, ANSI (1986) & ISO (1987) standards evolution",
      "Understand why relational databases outperform flat files (CSV, TSV, Excel) in concurrency, data integrity, B-Tree index speeds, and ACID transactions",
      "Deconstruct RDBMS Engine Architecture: Query Dispatcher, Parser & AST, Logical Planner, Cost-Based Optimizer (CBO), Execution Nodes, WAL, and Buffer Pool RAM",
      "Compare Database Server Environments: Local Host ('localhost': IP 127.0.0.1, Port 5432/3306) vs Managed Enterprise Cloud Clusters (AWS RDS, GCP Cloud SQL, Azure SQL)",
      "Analyze Database Security & Roles: Database Administrators (DBAs with SUPERUSER access) vs Application Accounts vs Read-Only Business Analysts",
      "Master the 5 core SQL Sub-Languages: Data Definition Language (DDL), Data Manipulation Language (DML), Data Query Language (DQL), Data Control Language (DCL), and Transaction Control Language (TCL)",
      "Evaluate major SQL Vendor Dialects: PostgreSQL (PL/pgSQL, JSONB), MySQL/MariaDB (InnoDB engine), Microsoft SQL Server (T-SQL), and Oracle Database (PL/SQL)"
    ],
    sections: [
      {
        heading: "1. Relational Database Theory vs Flat Files & NoSQL Systems",
        text: "Before relational databases, applications stored data in simple flat text files (CSV, TSV, JSON). Flat files suffer from catastrophic enterprise limitations: severe data redundancy, zero structural type enforcement, high vulnerability to file corruption during concurrent multi-user writes, slow full table scans (O(N) search complexity), and zero transaction safety. Relational databases solve these issues by organizing data into structured tables linked by logical key relationships (Primary and Foreign Keys) managed by a centralized engine that guarantees mathematical data integrity.",
        bulletPoints: [
          "Elimination of Data Redundancy: Normalization divides data into logical entities (e.g. Customers, Orders) to eliminate duplicate records.",
          "Structural Type Enforcement: Columns require strict data types (INTEGER, VARCHAR, TIMESTAMP, NUMERIC) and constraints (NOT NULL, UNIQUE, CHECK).",
          "ACID Transaction Safety: Ensures all multi-step business transactions complete 100% or roll back completely without partial state corruption.",
          "High-Speed B-Tree Indexing: B-Tree indexes enable sub-millisecond lookups across multi-billion row tables (O(log N) search complexity).",
          "Concurrent Multi-User Locking: Fine-grained row-level locking allows thousands of concurrent users to read and write without thread deadlock or file lock errors."
        ],
        table: {
          headers: ["Database Paradigm", "Data Model / Format", "Primary Strength", "Weakness / Trade-off", "Popular Enterprise Engine"],
          rows: [
            ["Relational Database (RDBMS)", "Structured Tables (Rows & Columns)", "ACID compliance, complex JOINs, strict schema", "Requires schema design upfront", "PostgreSQL, MySQL, MS SQL Server, Oracle"],
            ["NoSQL Document Store", "Semi-Structured (JSON / BSON)", "Flexible schema, rapid rapid prototyping", "Weak JOIN support, eventual consistency", "MongoDB, Couchbase"],
            ["NoSQL Key-Value Store", "Hash Map (Key -> Value)", "Ultra-fast in-memory caching (sub-ms speed)", "No complex query capabilities", "Redis, Memcached"],
            ["NoSQL Column-Family", "Wide Column Rows", "Massive write throughput across petabytes", "Complex query syntax, eventual consistency", "Apache Cassandra, ScyllaDB"],
            ["Flat Text File", "CSV / TSV / Excel", "Simple, human-readable file format", "No concurrency, data corruption, slow search", "Local Filesystem"]
          ]
        }
      },
      {
        heading: "2. Deep Dive: RDBMS Engine Architecture & Internal Execution Pipeline",
        text: "When an application sends a SQL string over a network socket connection to an RDBMS server, the database engine processes the command through a sophisticated multi-stage pipeline before touching disk storage:",
        bulletPoints: [
          "1. Network Listener & Connection Handler: Receives TCP packets from the client application connection pool and validates user authentication credentials.",
          "2. Query Parser & AST Generator: Checks SQL string syntax rules, resolves table/column identifiers, and generates an Abstract Syntax Tree (AST).",
          "3. Logical Planner & Preprocessor: Validates user permissions, expands database views, and constructs an unoptimized logical query tree.",
          "4. Cost-Based Optimizer (CBO): Evaluates hundreds of candidate execution strategies, analyzes table statistics (column histograms, index density), and chooses the physical execution plan with the lowest estimated CPU/IO cost.",
          "5. Physical Execution Engine: Executes query plan operators (Sequential Table Scans, B-Tree Index Scans, Hash Joins, Nested Loops, Bitmaps).",
          "6. Transaction Manager & Write-Ahead Logger (WAL): Guarantees durablity by recording change vectors into WAL disk logs before writing modified data pages to RAM buffer pools.",
          "7. Buffer Pool RAM Manager: Manages in-memory data page caches (8KB or 16KB pages), using LRU (Least Recently Used) algorithms to minimize disk read latency."
        ],
        table: {
          headers: ["Engine Component", "Primary Architectural Responsibility", "Input Stage", "Output Artifact"],
          rows: [
            ["Query Parser", "Grammar validation & lexical tokenization", "Raw SQL Text String", "Abstract Syntax Tree (AST)"],
            ["Query Rewriter", "View expansion, rule enforcement & constant folding", "Abstract Syntax Tree", "Logical Query Plan"],
            ["Cost-Based Optimizer", "Scans table stats to find lowest cost execution path", "Logical Query Plan", "Physical Execution Plan"],
            ["Execution Engine", "Iterates through plan nodes to process rows", "Physical Plan Nodes", "Result Row Set Stream"],
            ["WAL Manager", "Persists transaction logs to disk before memory write", "Transaction Modifies", "Append-Only Log File on Disk"],
            ["Buffer Pool", "Caches data pages in RAM to accelerate reads/writes", "Disk Page Blocks", "In-Memory Cached Page Blocks"]
          ]
        }
      },
      {
        heading: "3. Complete Categorization of the 5 SQL Sub-Languages",
        text: "SQL is not a monolithic language; it is divided into 5 distinct functional sub-languages based on operation type and engine behavior:",
        table: {
          headers: ["SQL Sub-Language", "Primary Purpose", "Core Statements / Keywords", "Auto-Commit Behavior", "Target Audience"],
          rows: [
            ["DDL (Data Definition Language)", "Defines, alters, and drops database schemas, tables, indexes, and constraints", "CREATE, ALTER, DROP, TRUNCATE, RENAME", "Auto-commits immediately (in MySQL/Oracle)", "Database Architects & DBAs"],
            ["DML (Data Manipulation Language)", "Inserts, updates, deletes, and modifies data records inside tables", "INSERT, UPDATE, DELETE, MERGE", "Transactional (Requires explicit COMMIT/ROLLBACK)", "Backend Software Engineers"],
            ["DQL (Data Query Language)", "Queries and retrieves selective data streams from single or multiple tables", "SELECT", "Read-only (No state mutation on disk)", "Data Analysts & Engineers"],
            ["DCL (Data Control Language)", "Grants and revokes user access permissions and role-based security controls", "GRANT, REVOKE", "Auto-commits immediately", "Security Engineers & DBAs"],
            ["TCL (Transaction Control Language)", "Manages transactional boundaries, multi-query atomic units, and savepoints", "COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION", "Controls transaction state explicitly", "Backend Engineers & Financial Developers"]
          ]
        },
        bulletPoints: [
          "Critical Difference: DROP vs TRUNCATE vs DELETE:",
          "• DROP TABLE: Destroys the table definition, schema, indexes, and all data permanently from disk storage.",
          "• TRUNCATE TABLE: A fast DDL operation that deallocates all data storage pages at once, resetting auto-increment counters back to 1. Cannot be rolled back in some engines.",
          "• DELETE FROM: A DML operation that removes rows individually, writing undo logs for every row deleted. Does NOT reset auto-increment counters."
        ]
      },
      {
        heading: "4. Database Server Infrastructure: Localhost vs Enterprise Cloud Servers",
        text: "Understanding database host deployment topologies is critical for building web applications:",
        bulletPoints: [
          "Local Server Environment ('localhost'): Uses loopback IP address 127.0.0.1. The database server runs on your developer laptop or desktop machine. Typical default TCP ports include PostgreSQL (5432), MySQL (3306), MS SQL Server (1433), and MongoDB (27017). Local servers are used for rapid development, unit testing, and sandbox experimentation.",
          "Managed Enterprise Cloud Clusters: Large enterprise applications deploy databases on cloud infrastructure (e.g. Amazon Web Services RDS / Aurora, Google Cloud Platform Cloud SQL, Microsoft Azure SQL Database). Cloud clusters feature multi-region availability zones, automated point-in-time automated backups, read-replicas for horizontal scaling, and encrypted connection pools.",
          "Connection Strings: Applications establish database connections using a standardized connection URI string: postgresql://username:password@hostname:5432/databasename?sslmode=require",
          "Role-Based Access Control (RBAC): Superusers (DBAs) possess unrestricted schema control. Production application services connect using dedicated service accounts granted limited permissions (SELECT, INSERT, UPDATE on specific tables only) to mitigate SQL injection risk."
        ]
      },
      {
        heading: "5. Standard SQL Dialects & Vendor Implementations",
        text: "While ANSI (American National Standards Institute) and ISO (International Organization for Standardization) govern core SQL specifications, major database vendors maintain unique extensions and features:",
        bulletPoints: [
          "PostgreSQL: The world's most advanced open-source relational database. Known for strict ANSI compliance, native JSONB support, custom data types, PostGIS spatial queries, and PL/pgSQL procedural code.",
          "MySQL / MariaDB: The most popular web server database powering Linux-Apache-MySQL-PHP (LAMP) and WordPress stacks. Uses the high-performance InnoDB transactional storage engine.",
          "Microsoft SQL Server: Enterprise database system widely used in corporate Windows environments. Uses T-SQL (Transact-SQL) featuring built-in TRY...CATCH error blocks and stored procedures.",
          "Oracle Database: Enterprise powerhouse for global financial institutions, airlines, and logistics. Uses PL/SQL, advanced partitioning, and multi-tenant container architecture."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Database Engine Diagnostics & Environment Session Metadata",
        code: `-- 1. Query database engine version and build parameters
SELECT version();

-- 2. Inspect active database, session user identity, client IP, and server port
SELECT 
    current_database() AS active_database_name,
    current_user AS active_session_user,
    session_user AS original_login_user,
    inet_client_addr() AS client_ip_address,
    inet_server_port() AS database_server_port,
    current_setting('server_encoding') AS database_encoding;

-- 3. Check database uptime and active connection counts
SELECT 
    datname AS database_name,
    numbackends AS active_concurrent_connections,
    xact_commit AS committed_transactions,
    xact_rollback AS rolled_back_transactions
FROM pg_stat_database
WHERE datname = current_database();`,
        explanation: "Diagnostic SQL queries inspect database server uptime, active user sessions, connection pools, and encoding properties."
      },
      {
        title: "Full Workflow: Schema Definition (DDL), Data Insert (DML) & Privilege Control (DCL)",
        code: `-- Step 1: DDL — Create a secure production schema and table
CREATE TABLE enterprise_employees (
    employee_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary NUMERIC(10, 2) CHECK (salary > 0),
    hire_date DATE DEFAULT CURRENT_DATE
);

-- Step 2: DML — Insert initial seed records inside a transaction
BEGIN TRANSACTION;

INSERT INTO enterprise_employees (full_name, email, department, salary)
VALUES 
    ('Dr. Edgar Codd', 'edgar.codd@ibm.research.com', 'Research', 145000.00),
    ('Ada Lovelace', 'ada.lovelace@analytics.org', 'Engineering', 160000.00);

COMMIT; -- TCL: Commit changes permanently to disk

-- Step 3: DQL — Query inserted records
SELECT employee_id, full_name, department, salary 
FROM enterprise_employees 
WHERE department = 'Engineering';

-- Step 4: DCL — Create read-only role and grant SELECT privileges
CREATE ROLE analyst_read_only WITH LOGIN PASSWORD 'SecurePass123!';
GRANT SELECT ON enterprise_employees TO analyst_read_only;`,
        explanation: "Demonstrates an end-to-end relational database workflow combining DDL table creation, DML data population, TCL transaction commit, DQL querying, and DCL role-based access control."
      }
    ],
    bestPractices: [
      "Always design database schemas with normalization principles (1NF, 2NF, 3NF) before writing production queries.",
      "Never connect web applications using the 'postgres' or 'root' DBA superuser account; always provision restricted service roles.",
      "Understand the difference between TRUNCATE (fast DDL page reset) and DELETE (row-by-row DML logging).",
      "Use explicit column names in SELECT statements instead of SELECT * to avoid network latency and memory overhead."
    ],
    commonMistakes: [
      "Assuming flat CSV files are an acceptable substitute for enterprise database storage during multi-user concurrent writes.",
      "Executing 'DELETE FROM table' without a WHERE clause, wiping out all table records accidentally.",
      "Attempting to use '= NULL' instead of 'IS NULL' when filtering missing data values."
    ],
    practiceExercise: {
      title: "Classifying SQL Sub-Languages & Engine Concepts",
      problem: "Perform the following two exercises:\n1. Categorize each statement into its correct sub-language (DDL, DML, DQL, DCL, TCL):\n   a. CREATE TABLE customers (...)\n   b. INSERT INTO orders VALUES (...)\n   c. COMMIT;\n   d. GRANT SELECT ON products TO app_user;\n   e. TRUNCATE TABLE audit_logs;\n   f. SELECT * FROM users WHERE status = 'Active';\n\n2. Explain why TRUNCATE TABLE is significantly faster than DELETE FROM on a table with 10 million rows.",
      solutionCode: `-- Exercise 1 Answers:
-- a. CREATE TABLE       -> DDL (Data Definition Language)
-- b. INSERT INTO         -> DML (Data Manipulation Language)
-- c. COMMIT              -> TCL (Transaction Control Language)
-- d. GRANT               -> DCL (Data Control Language)
-- e. TRUNCATE TABLE      -> DDL (Data Definition Language)
-- f. SELECT              -> DQL (Data Query Language)

-- Exercise 2 Answer:
-- TRUNCATE TABLE is a DDL command that deallocates data storage pages directly on disk in a single operation, 
-- writing minimal log entries and resetting auto-increment counters back to 1.
-- DELETE FROM is a DML command that scans every row individually, generates undo/redo transaction log entries 
-- for all 10 million rows, and does NOT deallocate disk storage pages or reset auto-increment counters.`
    },
    keyTakeaways: [
      "SQL is the declarative industry-standard language developed by IBM in 1970s and standardized by ANSI/ISO.",
      "Relational Databases (RDBMS) solve flat-file limitations by enforcing data integrity, ACID transaction safety, and sub-millisecond B-Tree indexing.",
      "The RDBMS engine pipeline includes the Parser (AST), Logical Planner, Cost-Based Optimizer (CBO), Physical Execution Engine, Write-Ahead Logger (WAL), and RAM Buffer Pool.",
      "SQL commands are categorized into 5 sub-languages: DDL (structure), DML (records), DQL (retrieval), DCL (security), and TCL (transactions).",
      "Localhost (127.0.0.1) servers provide local developer sandboxes, while corporate cloud clusters manage enterprise availability and replication."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod1Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-1');
  if (mod1Idx !== -1) {
    sqlCourseInDb.modules[mod1Idx] = masterModule1;
  } else {
    sqlCourseInDb.modules[0] = masterModule1;
  }
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 1!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod1Index = content.indexOf('"id": "sql-mod-1"');
const sqlMod2Index = content.indexOf('"id": "sql-mod-2"');

if (sqlMod1Index !== -1 && sqlMod2Index !== -1) {
  // find start of mod 1 object
  const mod1Start = content.lastIndexOf('{', sqlMod1Index);
  const mod2Start = content.lastIndexOf('{', sqlMod2Index);
  
  const beforeMod1 = content.slice(0, mod1Start);
  const afterMod1 = content.slice(mod2Start);
  
  const formattedMod1 = JSON.stringify(masterModule1, null, 6);
  
  content = beforeMod1 + formattedMod1 + ',\n\n      ' + afterMod1;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 1!');
}

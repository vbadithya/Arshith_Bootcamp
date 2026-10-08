const fs = require('fs');

const masterModule14 = {
  id: "sql-mod-14",
  title: "Module 14 — Transactions, TCL & Database Security",
  description: "Master Database Reliability & Security Engineering: ACID Properties (Atomicity, Consistency, Isolation, Durability), Write-Ahead Logging (WAL), Multi-Version Concurrency Control (MVCC tuple xmin/xmax), Transaction Control Language (BEGIN, COMMIT, ROLLBACK, SAVEPOINT), Concurrency Anomalies (Dirty Reads, Non-Repeatable Reads, Phantom Reads, Serialization Anomalies), Transaction Isolation Levels (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE), Pessimistic Row Locking (SELECT ... FOR UPDATE), Database Security (DCL GRANT, REVOKE, RBAC Principle of Least Privilege), and PostgreSQL Row-Level Security (RLS) Multi-Tenant Isolation.",
  completed: false,
  order: 14,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 14! In modern multi-user enterprise applications, thousands of client transactions execute concurrently against the database server. Ensuring data correctness requires robust Transaction Control Language (TCL), strict concurrency isolation levels, explicit row locking, and fine-grained security role permissions. Transactions guarantee ACID properties (Atomicity, Consistency, Isolation, Durability)—ensuring multi-step operations (like bank funds transfers or inventory allocation) either succeed 100% or fail safely with zero data corruption. Mastering TCL transactions, MVCC concurrency control, and Role-Based Access Security (RBAC) is mandatory for enterprise backend engineers.",
    objectives: [
      "Master the 4 ACID Guarantees: Atomicity, Consistency, Isolation, and Durability",
      "Understand Write-Ahead Logging (WAL) and Multi-Version Concurrency Control (MVCC xmin/xmax tuple versions)",
      "Execute Transaction Control Language (TCL) commands: BEGIN / START TRANSACTION, COMMIT, ROLLBACK, and SAVEPOINT",
      "Analyze Concurrency Anomalies: Dirty Reads, Non-Repeatable Reads, Phantom Reads, and Serialization Anomalies",
      "Deconstruct the 4 ANSI Transaction Isolation Levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, and SERIALIZABLE",
      "Master Explicit Row Locking using SELECT ... FOR UPDATE to eliminate application-level race conditions",
      "Implement Database Access Security using DCL statements (GRANT, REVOKE) and Role-Based Access Control (RBAC)",
      "Configure PostgreSQL Row-Level Security (RLS) policies for multi-tenant data isolation"
    ],
    sections: [
      {
        heading: "1. The 4 ACID Properties & Relational Engine Guarantees",
        text: "ACID is the set of database engine guarantees that ensure transactional reliability across concurrent operations:",
        bulletPoints: [
          "1. Atomicity ('All-or-Nothing'): Ensures that all SQL statements within a transaction boundary complete successfully. If any statement fails, the engine rolls back ALL changes, leaving the database in its original state.",
          "2. Consistency: Guarantees that a transaction transforms the database from one valid state to another, strictly obeying all schema constraints (NOT NULL, UNIQUE, CHECK, Foreign Keys).",
          "3. Isolation (MVCC): Ensures that concurrently executing transactions do not interfere with or observe incomplete transient states of other transactions. PostgreSQL and MySQL achieve isolation using Multi-Version Concurrency Control (MVCC), maintaining multiple version tuples (`xmin`, `xmax`) in RAM/heap memory.",
          "4. Durability: Guarantees that once a transaction commits, its modifications are permanently written to Write-Ahead Logs (WAL) and disk storage (`fsync`), surviving power failures or system crashes."
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
        heading: "3. Concurrency Anomalies & The 4 ANSI Isolation Levels",
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

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod14Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-14');
  if (mod14Idx !== -1) sqlCourseInDb.modules[mod14Idx] = masterModule14;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 14!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod14Index = content.indexOf('"id": "sql-mod-14"');
const sqlMod15Index = content.indexOf('"id": "sql-mod-15"');

if (sqlMod14Index !== -1 && sqlMod15Index !== -1) {
  const mod14Start = content.lastIndexOf('{', sqlMod14Index);
  const mod15Start = content.lastIndexOf('{', sqlMod15Index);
  
  const beforeMod14 = content.slice(0, mod14Start);
  const afterMod14 = content.slice(mod15Start);
  
  const formattedMod14 = JSON.stringify(masterModule14, null, 6);
  
  content = beforeMod14 + formattedMod14 + ',\n\n      ' + afterMod14;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 14!');
}

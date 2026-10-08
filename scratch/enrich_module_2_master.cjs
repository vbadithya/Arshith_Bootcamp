const fs = require('fs');

const masterModule2 = {
  id: "sql-mod-2",
  title: "Module 02 — SQL Syntax, Keywords & Data Types",
  description: "Master SQL lexical rules, uppercase keyword conventions, single/multi-line comments, identifier quoting rules, and the complete relational Data Type System: Integers (SMALLINT, INT, BIGINT), Financial Fixed-Point Decimals (NUMERIC/DECIMAL), Floating-Point (REAL, DOUBLE PRECISION), Strings (CHAR, VARCHAR, TEXT), Timestamps (TIMESTAMP, TIMESTAMPTZ, INTERVAL), Booleans, JSONB, UUIDs, and Type Casting (CAST, ::).",
  completed: false,
  order: 2,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 2! Writing professional SQL requires a crystal-clear understanding of SQL lexical syntax, reserved keywords, identifier naming rules, and the relational Data Type System. Every column in a relational database table must be assigned a specific data type during table creation. The choice of data type governs the range of valid values, physical storage footprint on disk, memory alignment in RAM, indexing speed, and mathematical precision. Choosing appropriate data types is the fundamental first step in relational database schema design.",
    objectives: [
      "Master SQL lexical rules: Case sensitivity, statement terminators (;), and whitespace indentation conventions",
      "Understand Identifier Quoting Conventions: ANSI double quotes (\"col\"), MySQL backticks (`col`), and SQL Server brackets ([col])",
      "Differentiate Single-Line comments (-- or #) from Multi-Line block comments (/* ... */)",
      "Identify SQL Reserved Keywords (SELECT, FROM, WHERE, GROUP, ORDER, JOIN) and escaping rules",
      "Master Numeric Data Types: Fixed-width Integers (SMALLINT, INT, BIGINT), Auto-Incrementing Sequences (SERIAL/IDENTITY), Fixed-Point Decimals (NUMERIC/DECIMAL), and Approximate Floating-Point (REAL, DOUBLE PRECISION)",
      "Evaluate Character & Text Types: Fixed-Length CHAR(n), Variable-Length VARCHAR(n), and Extended Out-of-Page TEXT / CLOB",
      "Master Temporal Data Types: DATE, TIME, TIMESTAMP, TIMESTAMPTZ (UTC offset handling), and INTERVAL durations",
      "Explore Modern Enterprise Data Types: BOOLEAN, JSONB (Binary JSON with GIN indexing), UUID (128-bit microservice keys), and BYTEA/BLOB",
      "Perform Explicit Type Conversion using ANSI CAST(expr AS target_type) and PostgreSQL shorthand (expr::target_type)"
    ],
    sections: [
      {
        heading: "1. SQL Lexical Structure, Case Sensitivity & Quoting Rules",
        text: "SQL statements consist of lexical tokens: keywords, identifiers, literals, operators, and special characters. While standard SQL keywords are case-insensitive, professional database engineers strictly follow industry formatting standards to maintain clean, readable code bases.",
        bulletPoints: [
          "Keyword Uppercasing Best Practice: Write all SQL keywords in UPPERCASE (e.g. SELECT, FROM, WHERE, INNER JOIN) and table/column names in lowercase (e.g. users, order_id).",
          "Statement Semicolon Terminator (;): Terminates individual SQL statements. Required when executing multi-statement batch scripts or API transactions.",
          "Case Sensitivity of Identifiers: SQL keywords are case-insensitive (`select` equals `SELECT`). However, table and column name case sensitivity depends on the operating system file system (Linux vs Windows) and database configuration (e.g., MySQL `lower_case_table_names`).",
          "Identifier Quoting Rules: Unquoted identifiers are automatically folded to lowercase (in PostgreSQL) or uppercase (in Oracle). To preserve mixed-case or use reserved words as identifiers, wrap them in engine-specific quotes:",
          "• ANSI SQL & PostgreSQL: Use double quotes -> SELECT \"First Name\" FROM \"User Accounts\";",
          "• MySQL / MariaDB: Use backticks -> SELECT `first name` FROM `user accounts`;",
          "• Microsoft SQL Server: Use square brackets -> SELECT [first name] FROM [user accounts];",
          "Single Quote Literal Rule: String literals and dates MUST always be enclosed in SINGLE QUOTES ('John Doe', '2026-10-03'). Double quotes are reserved for identifiers."
        ],
        table: {
          headers: ["SQL Lexical Element", "Syntax Example", "Standard Convention", "Engine Execution Rule"],
          rows: [
            ["Reserved Keywords", "SELECT, FROM, WHERE, JOIN", "ALWAYS UPPERCASE", "Case-insensitive"],
            ["Table & Column Names", "users, employee_id, total_amount", "lowercase_snake_case", "Folds case unless quoted"],
            ["Quoted Identifiers", "\"First Name\", `order-id`, [Zip]", "Avoid mixed case if possible", "Preserves exact case & spaces"],
            ["String Literals", "'Jane Smith', 'Active'", "Always Single Quotes ('')", "Case-sensitive string value"],
            ["Numeric Literals", "42, 199.99, -15.50", "Unquoted numbers", "Parsed directly as Int/Decimal"],
            ["Single-Line Comments", "-- Filter active records", "Double-dash prefix (--)", "Ignored by SQL parser"],
            ["Multi-Line Comments", "/* Block explanation */", "Slash-asterisk wrapper", "Ignored across multiple lines"]
          ]
        }
      },
      {
        heading: "2. The Numeric Data Type System: Integer, Fixed-Point Decimal & Floating-Point",
        text: "Relational engines provide distinct numeric types tailored for storage efficiency and mathematical accuracy:",
        bulletPoints: [
          "Fixed-Width Integers:",
          "• SMALLINT (2 Bytes): Range -32,768 to +32,767. Used for small status codes, month numbers, or age.",
          "• INT / INTEGER (4 Bytes): Range ~-2.14 Billion to +2.14 Billion. Standard default for surrogate keys and counts.",
          "• BIGINT (8 Bytes): Range ~-9 Quintillion to +9 Quintillion. Required for high-volume primary keys (e.g. global transactions, log event IDs).",
          "• Auto-Increment Sequences: SERIAL (PostgreSQL), AUTO_INCREMENT (MySQL), or IDENTITY (MS SQL) automatically generate incrementing integer keys.",
          "Fixed-Point Exact Decimals — DECIMAL(p, s) / NUMERIC(p, s):",
          "• Precision (p): Total count of significant digits across the entire number (both left and right of the decimal point).",
          "• Scale (s): Count of digits to the right of the decimal point (e.g. NUMERIC(10, 2) stores up to $99,999,999.99).",
          "• MANDATORY FOR MONEY: Always use NUMERIC/DECIMAL for financial calculations, account balances, and pricing. It guarantees exact decimal precision with zero rounding error.",
          "Approximate Floating-Point — REAL (4 Bytes) & DOUBLE PRECISION (8 Bytes):",
          "• Stores floating-point numbers according to IEEE 754 binary floating-point standards.",
          "• FORBIDDEN FOR CURRENCY: Floating-point math exhibits binary rounding artifacts (e.g. 0.1 + 0.2 = 0.30000000000000004). Use ONLY for scientific measurements, GPS coordinates, or statistical data where approximate precision is acceptable."
        ],
        table: {
          headers: ["Numeric Type", "Storage Size", "Valid Range / Format", "Exact vs Approximate", "Best Enterprise Use Case"],
          rows: [
            ["SMALLINT", "2 Bytes", "-32,768 to +32,767", "Exact Integer", "Status codes, month numbers (1-12)"],
            ["INTEGER (INT)", "4 Bytes", "-2.14B to +2.14B", "Exact Integer", "Standard primary keys, user IDs"],
            ["BIGINT", "8 Bytes", "-9.22E18 to +9.22E18", "Exact Integer", "Global transaction IDs, audit logs"],
            ["DECIMAL(12,2)", "Variable (5-9B)", "Up to 10 digits left, 2 right", "Exact Fixed-Point", "Financial balances, prices, salaries"],
            ["REAL (FLOAT4)", "4 Bytes", "6 decimal digits precision", "Approximate Float", "Scientific readings, temperature"],
            ["DOUBLE PRECISION", "8 Bytes", "15 decimal digits precision", "Approximate Float", "Geospatial coordinates, physics models"]
          ]
        }
      },
      {
        heading: "3. Character & Text Data Types: CHAR, VARCHAR, and Extended TEXT",
        text: "String data types manage textual information with different memory alignment and storage characteristics:",
        bulletPoints: [
          "Fixed-Length String — CHAR(n):",
          "• Allocates exactly n bytes on disk regardless of actual text length.",
          "• If the input string is shorter than n, the engine pads trailing blank spaces (e.g. CHAR(5) storing 'US' pads 3 spaces: 'US   ').",
          "• Ideal for fixed-length codes: Country ISO Codes ('USA', 'IND'), State Codes ('NY', 'CA'), or Hash Digests (SHA-256).",
          "Variable-Length String — VARCHAR(n):",
          "• Stores variable-length text up to a maximum limit of n characters.",
          "• Stores only actual character bytes plus a 1 or 2 byte length prefix. No space padding occurs.",
          "• Standard default for names, email addresses, usernames, and street addresses.",
          "Unlimited Extended Text — TEXT / CLOB:",
          "• Stores large blocks of text (blog posts, JSON documents, HTML bodies, raw logs) up to 1GB or 4GB in size.",
          "• TOAST Storage Engine (PostgreSQL): When text exceeds 2KB, PostgreSQL automatically compresses and stores the text out-of-page in TOAST (The Oversized-Attribute Storage Technique) tables to keep main data pages small and index scans fast."
        ]
      },
      {
        heading: "4. Temporal & Advanced Enterprise Data Types",
        text: "Modern relational databases provide rich data types for time tracking, document storage, and distributed architectures:",
        bulletPoints: [
          "DATE: Stores calendar date (Year, Month, Day: YYYY-MM-DD) across 4 bytes.",
          "TIME: Stores clock time of day (Hours, Minutes, Seconds, Microseconds: HH:MI:SS.ms) across 8 bytes.",
          "TIMESTAMP (without timezone): Stores date and time combined (YYYY-MM-DD HH:MI:SS). Vulnerable to timezone ambiguity bugs across global servers.",
          "TIMESTAMPTZ (TIMESTAMP WITH TIME ZONE): Industry standard for global backend applications. Converts incoming client timestamps into UTC (Coordinated Universal Time) for storage on disk, and automatically converts UTC back to the client's local session timezone upon retrieval.",
          "INTERVAL: Represents elapsed time durations (e.g. INTERVAL '1 year 2 months', INTERVAL '3 hours 30 minutes').",
          "BOOLEAN: Stores logical truth values (TRUE, FALSE, UNKNOWN/NULL) across 1 byte. (Note: MySQL implements BOOLEAN as TINYINT(1) where 1 = TRUE and 0 = FALSE).",
          "JSONB (Binary JSON): Stores binary-formatted JSON documents inside relational tables. Supports indexing via GIN (Generalized Inverted Index) for ultra-fast nested JSON key lookups.",
          "UUID (Universally Unique Identifier): 128-bit globally unique identifier formatted as 32 hexadecimal digits (e.g. `550e8400-e29b-41d4-a716-446655440000`). Essential for distributed microservice architectures to prevent primary key collision errors."
        ],
        table: {
          headers: ["Temporal / Enterprise Type", "Storage Size", "Format Example", "Timezone Awareness", "Production Application"],
          rows: [
            ["DATE", "4 Bytes", "2026-10-03", "None", "Birth dates, hire dates, holidays"],
            ["TIME", "8 Bytes", "14:30:00.00", "None", "Store opening hours, scheduled jobs"],
            ["TIMESTAMP", "8 Bytes", "2026-10-03 14:30:00", "No Timezone Offset", "Local events, offline log entries"],
            ["TIMESTAMPTZ", "8 Bytes", "2026-10-03 14:30:00+00", "Stored in UTC", "Global transaction logs, API timestamps"],
            ["INTERVAL", "16 Bytes", "3 days 04:00:00", "Duration", "Subscription validity, session timeout"],
            ["JSONB", "Variable", "{\"role\": \"admin\"}", "Structured JSON", "Semi-structured document attributes"],
            ["UUID", "16 Bytes", "550e8400-e29b-41d4...", "N/A", "Microservice cross-system entity keys"]
          ]
        }
      },
      {
        heading: "5. Explicit vs Implicit Type Conversion (Casting)",
        text: "When performing queries or comparisons across different data types, relational engines perform type coercion:",
        bulletPoints: [
          "Implicit Coercion: The database engine automatically converts data types when compatible (e.g. comparing INTEGER 10 to NUMERIC 10.00).",
          "Explicit Type Casting: Forces data conversion explicitly using standard ANSI syntax or vendor shortcuts:",
          "• ANSI Standard: CAST(expression AS target_type) -> CAST('2026-10-03' AS DATE), CAST(price AS VARCHAR)",
          "• PostgreSQL Shorthand: expression::target_type -> '2026-10-03'::DATE, price::NUMERIC(10,2)",
          "Data Conversion Failures:",
          "• Numeric Overflow Error: Attempting to insert 99999 into a NUMERIC(4,2) column.",
          "• String Truncation Error: Attempting to insert a 20-character string into a VARCHAR(10) column (`STRING DATA RIGHT TRUNCATION`)."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Enterprise Table Definition with Comprehensive Data Types & Constraints",
        code: `-- Create a complete production user accounts table incorporating diverse data types
CREATE TABLE enterprise_users (
    -- Surrogate Primary Key using 128-bit UUID
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Integer sequence for internal sequential billing invoice numbers
    account_number BIGINT GENERATED ALWAYS AS IDENTITY UNIQUE,
    
    -- Fixed-length string for 2-character country ISO codes
    country_code CHAR(2) NOT NULL DEFAULT 'US',
    
    -- Variable-length strings with strict length boundaries
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    
    -- Exact fixed-point decimal for wallet balance (never use FLOAT for currency!)
    wallet_balance NUMERIC(12, 2) NOT NULL DEFAULT 0.00 CHECK (wallet_balance >= 0.00),
    
    -- Boolean status flag
    is_verified BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- Binary JSON document for flexible user preference settings
    user_preferences JSONB DEFAULT '{"theme": "dark", "notifications": true}'::jsonb,
    
    -- Timestamp with Timezone (stored in UTC)
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMPTZ NULL
);`,
        explanation: "Demonstrates production database schema design using UUIDs, BIGINT sequences, CHAR(2), VARCHAR, exact NUMERIC currency, BOOLEAN, JSONB, and TIMESTAMPTZ."
      },
      {
        title: "Type Conversion (CAST), String Formatting & Temporal Math Queries",
        code: `-- 1. Explicit Type Casting using ANSI CAST and PostgreSQL :: operator
SELECT 
    CAST('1250.75' AS NUMERIC(10, 2)) AS parsed_amount,
    '2026-10-03'::DATE AS parsed_date,
    CAST(CURRENT_TIMESTAMP AS VARCHAR) AS timestamp_text;

-- 2. Calculating temporal intervals and subscription expiry dates
SELECT 
    email,
    created_at AS subscription_start,
    created_at + INTERVAL '30 days' AS subscription_expiration_date,
    CURRENT_TIMESTAMP - created_at AS account_age_duration
FROM enterprise_users;

-- 3. Querying nested JSONB document attributes using JSON operators
SELECT 
    email,
    user_preferences->>'theme' AS selected_theme,
    (user_preferences->>'notifications')::BOOLEAN AS notifications_enabled
FROM enterprise_users
WHERE user_preferences->>'theme' = 'dark';`,
        explanation: "Illustrates explicit type casting with CAST and ::, date-time interval math, and extracting typed fields from binary JSONB documents."
      }
    ],
    bestPractices: [
      "Always use uppercase for SQL keywords (SELECT, FROM, WHERE) and lowercase_snake_case for table/column identifiers.",
      "Always use NUMERIC or DECIMAL for financial balances and monetary amounts; NEVER use FLOAT or DOUBLE PRECISION for currency.",
      "Use TIMESTAMPTZ (Timestamp with Time Zone) for all application timestamps to prevent global timezone conversion bugs.",
      "Use CHAR(n) only when text entries have a guaranteed fixed character length (e.g. State codes 'NY', ISO country codes 'US'). Use VARCHAR(n) for variable text.",
      "Single quotes ('text') are for string literals; double quotes (\"identifier\") are for reserved or mixed-case database identifiers."
    ],
    commonMistakes: [
      "Using double quotes around string literals (e.g. WHERE name = \"John\"), causing syntax errors in ANSI-compliant SQL engines.",
      "Storing financial values as FLOAT or REAL, leading to floating-point binary rounding errors in accounting reports.",
      "Storing dates as plain VARCHAR strings ('10/03/2026') instead of native DATE or TIMESTAMPTZ data types, preventing index optimization and date math.",
      "Forgetting that MySQL BOOLEAN is an alias for TINYINT(1), where 1 = TRUE and 0 = FALSE."
    ],
    practiceExercise: {
      title: "Data Type Selection & Type Conversion Challenge",
      problem: "Perform the following two tasks:\n1. Recommend the exact SQL data type (with precision/scale if applicable) for each of the following 6 real-world attributes:\n   a. Account Balance ($99,999,999.99)\n   b. US State Abbreviation ('NY', 'CA')\n   c. User Age (0 to 120)\n   d. User Profile Bio (up to 5,000 words)\n   e. User Account Creation Date & Time (Global App)\n   f. Microservice Transaction ID (`a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11`)\n\n2. Write a SQL SELECT query that converts a string literal '499.99' to a NUMERIC(10,2) type, and calculates an expiration date 1 year after '2026-01-01'.",
      solutionCode: `-- Exercise 1 Data Type Recommendations:
-- a. Account Balance     -> NUMERIC(10, 2) or DECIMAL(10, 2) [Exact fixed-point decimal]
-- b. State Abbreviation  -> CHAR(2) [Fixed length 2 characters]
-- c. User Age            -> SMALLINT [2 bytes, range -32,768 to 32,767]
-- d. Profile Bio         -> TEXT [Unlimited variable-length text]
-- e. Creation Date & Time-> TIMESTAMPTZ [Timestamp with timezone stored in UTC]
-- f. Transaction ID      -> UUID [128-bit globally unique key]

-- Exercise 2 SQL Query Answer:
SELECT 
    CAST('499.99' AS NUMERIC(10, 2)) AS price_numeric,
    '2026-01-01'::DATE + INTERVAL '1 year' AS expiration_date;`
    },
    keyTakeaways: [
      "SQL keywords should be written in UPPERCASE, while identifiers use lowercase_snake_case.",
      "Single quotes ('') define string literals, while double quotes (\"\"), backticks (``), or brackets ([]) quote identifiers.",
      "Financial amounts MUST use NUMERIC/DECIMAL; floating-point types (FLOAT/REAL) exhibit dangerous binary rounding errors.",
      "TIMESTAMPTZ stores timestamps in UTC and converts automatically to client session timezones.",
      "PostgreSQL supports advanced modern enterprise types like binary JSONB documents and 128-bit UUIDs."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod2Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-2');
  if (mod2Idx !== -1) {
    sqlCourseInDb.modules[mod2Idx] = masterModule2;
  } else {
    sqlCourseInDb.modules[1] = masterModule2;
  }
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 2!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod2Index = content.indexOf('"id": "sql-mod-2"');
const sqlMod3Index = content.indexOf('"id": "sql-mod-3"');

if (sqlMod2Index !== -1 && sqlMod3Index !== -1) {
  const mod2Start = content.lastIndexOf('{', sqlMod2Index);
  const mod3Start = content.lastIndexOf('{', sqlMod3Index);
  
  const beforeMod2 = content.slice(0, mod2Start);
  const afterMod2 = content.slice(mod3Start);
  
  const formattedMod2 = JSON.stringify(masterModule2, null, 6);
  
  content = beforeMod2 + formattedMod2 + ',\n\n      ' + afterMod2;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 2!');
}

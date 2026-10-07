const fs = require('fs');

const masterModule12 = {
  id: "sql-mod-12",
  title: "Module 12 — SQL Functions & Conditional Logic",
  description: "Master Built-in SQL Functions & Expression Architecture: Deterministic vs Non-Deterministic Functions, String Functions (LENGTH, SUBSTRING, REPLACE, TRIM, POSITION, UPPER, LOWER, INITCAP, LPAD/RPAD, REGEXP_REPLACE), Mathematical Functions (ROUND, TRUNC, CEIL, FLOOR, ABS, MOD, POWER), Date/Time Functions (CURRENT_DATE, EXTRACT, DATE_TRUNC time-series bucketing, AGE, INTERVAL math), Conditional Expressions (Simple CASE, Searched CASE WHEN ... THEN ... ELSE ... END), and Null Handling Functions (COALESCE, NULLIF, NVL, IFNULL).",
  completed: false,
  order: 12,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 12! Built-in SQL functions and conditional expressions allow database developers, software architects, and data analysts to perform powerful data transformations, string parsing, mathematical rounding, date-time arithmetic, and dynamic branching logic directly inside the database engine. Processing transformations on the database server minimizes network bandwidth usage, accelerates API latency, and offloads compute from application servers. Mastering string, math, date-time, CASE expressions, and COALESCE functions is essential for enterprise database engineering.",
    objectives: [
      "Differentiate Deterministic Functions (UPPER, ABS) from Non-Deterministic Functions (NOW, RANDOM)",
      "Master String Transformation Functions: LENGTH, SUBSTRING, REPLACE, TRIM, POSITION, UPPER, LOWER, INITCAP, and LPAD/RPAD",
      "Perform Pattern Replacement using Regular Expressions (REGEXP_REPLACE)",
      "Master Mathematical & Numeric Functions: ROUND, TRUNC, CEIL, FLOOR, ABS, MOD, and POWER",
      "Master Date & Time Manipulation: CURRENT_DATE, CURRENT_TIMESTAMP, EXTRACT(field FROM date), DATE_TRUNC(), and AGE()",
      "Bucket Timestamps into Time-Series Analytics Intervals using DATE_TRUNC('month', timestamp)",
      "Implement Dynamic Branching Logic using Searched CASE WHEN ... THEN ... ELSE ... END expressions",
      "Implement Simple CASE Expressions for discrete value mapping",
      "Master Null Handling Functions: COALESCE(val1, val2, ...), NULLIF(val1, val2), and Vendor Equivalents (NVL, IFNULL)"
    ],
    sections: [
      {
        heading: "1. Function Processing Architecture & Determinism",
        text: "Built-in SQL functions perform transformations on column values. Understanding function determinism governs how the relational engine optimizes queries:",
        bulletPoints: [
          "Deterministic Functions: Functions that always return the exact same output value given the same input arguments (e.g. `UPPER('admin')`, `ROUND(12.5)`). Allowed inside Functional Expression Indexes (`CREATE INDEX ... ON UPPER(email)`).",
          "Non-Deterministic Functions: Functions whose output varies across executions or system clock ticks (e.g. `CURRENT_TIMESTAMP`, `RANDOM()`, `UUID_GENERATE_V4()`). Cannot be used inside static expression indexes because output values change dynamically."
        ]
      },
      {
        heading: "2. String Parsing & Transformation Functions Matrix",
        text: "String functions manipulate textual column data for cleaning, parsing, and formatting output streams:",
        table: {
          headers: ["String Function", "Syntax Pattern", "Output Example", "Primary Enterprise Use Case"],
          rows: [
            ["LENGTH(str)", "LENGTH('Database')", "8", "Validating password/input string lengths"],
            ["SUBSTRING(str, start, len)", "SUBSTRING('ABCDEF', 2, 3)", "'BCD'", "Parsing fixed-format codes or serial numbers"],
            ["REPLACE(str, old, new)", "REPLACE('v1.0', '1.0', '2.0')", "'v2.0'", "Cleaning domain names or URL paths"],
            ["TRIM(str)", "TRIM('  hello  ')", "'hello'", "Stripping leading/trailing whitespace"],
            ["POSITION(sub IN str)", "POSITION('@' IN email)", "6", "Locating delimiter positions"],
            ["UPPER(str) / LOWER(str)", "UPPER('admin')", "'ADMIN'", "Standardizing string casing for comparison"],
            ["INITCAP(str)", "INITCAP('john doe')", "'John Doe'", "Formatting human proper names"],
            ["LPAD(str, len, pad)", "LPAD('42', 5, '0')", "'00042'", "Formatting fixed-width invoice numbers"],
            ["REGEXP_REPLACE()", "REGEXP_REPLACE(phone, '\\D', '', 'g')", "'5551234567'", "Stripping non-numeric characters from phone strings"]
          ]
        }
      },
      {
        heading: "3. Mathematical & Numeric Functions Matrix",
        text: "Numeric functions perform rounding, truncation, and absolute value calculations on integer and decimal columns:",
        table: {
          headers: ["Numeric Function", "Syntax Pattern", "Output Example", "Description / Behavior"],
          rows: [
            ["ROUND(num, decimals)", "ROUND(125.456, 2)", "125.46", "Rounds to specified decimal places"],
            ["TRUNC(num, decimals)", "TRUNC(125.456, 2)", "125.45", "Truncates digits without rounding"],
            ["CEIL(num) / CEILING", "CEIL(4.1)", "5", "Rounds up to next integer"],
            ["FLOOR(num)", "FLOOR(4.9)", "4", "Rounds down to lower integer"],
            ["ABS(num)", "ABS(-42.5)", "42.5", "Returns positive absolute magnitude"],
            ["MOD(n, m)", "MOD(10, 3)", "1", "Returns remainder of division"],
            ["POWER(base, exp)", "POWER(2, 3)", "8", "Calculates base raised to exponent"]
          ]
        }
      },
      {
        heading: "4. Temporal (Date & Time) Manipulation & Time-Series Bucketing",
        text: "Temporal functions process timestamps, calculate elapsed intervals, and bucket dates into time-series intervals:",
        bulletPoints: [
          "CURRENT_DATE & CURRENT_TIMESTAMP: Returns current session date and timezone-aware timestamp.",
          "EXTRACT(field FROM timestamp): Extracts date components (e.g. `EXTRACT(YEAR FROM created_at)`, `EXTRACT(DOW FROM created_at)` for Day of Week).",
          "DATE_TRUNC('unit', timestamp): Truncates timestamp to specified precision (e.g. `DATE_TRUNC('month', created_at)` rounds all timestamps in June 2026 to `'2026-06-01 00:00:00'`). Crucial for monthly time-series analytics!",
          "AGE(timestamp1, timestamp2): Calculates precise elapsed duration intervals between two dates (e.g. `AGE(CURRENT_DATE, birth_date)` returns `'34 years 5 months 12 days'`).",
          "Date Interval Arithmetic: Add or subtract explicit interval durations: `CURRENT_TIMESTAMP + INTERVAL '30 days'` or `order_date - INTERVAL '2 hours'`."
        ]
      },
      {
        heading: "5. Conditional Expressions (CASE) & Null Handling (COALESCE, NULLIF)",
        text: "Conditional expressions provide `if-then-else` branching logic directly inside SQL queries:",
        bulletPoints: [
          "Searched CASE Expression (Most Versatile):",
          "• Syntax: `CASE WHEN salary > 100000 THEN 'Executive' WHEN salary > 60000 THEN 'Senior' ELSE 'Junior' END AS tier`",
          "• Evaluates boolean conditions sequentially; returns the `THEN` value of the first matching `TRUE` condition.",
          "Simple CASE Expression: Evaluates discrete matches: `CASE department_id WHEN 1 THEN 'IT' WHEN 2 THEN 'HR' ELSE 'Other' END`.",
          "COALESCE(val1, val2, ...): Returns the FIRST NON-NULL value in a list of arguments. Used to substitute fallback values for missing data: `COALESCE(phone_number, mobile_number, 'N/A')`.",
          "NULLIF(val1, val2): Returns `NULL` if `val1 == val2`; otherwise returns `val1`. Prevents division-by-zero errors: `total / NULLIF(count, 0)`.",
          "Vendor Compatibility Matrix: `COALESCE` and `NULLIF` are standard ANSI SQL. Oracle uses `NVL(a, b)`, MySQL uses `IFNULL(a, b)`, and SQL Server uses `ISNULL(a, b)`."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Complex String Parsing, Regex Replacement & Date Truncation",
        code: `-- 1. Extract email domain, strip non-numeric phone chars, and format account codes
SELECT 
    user_id,
    email,
    -- Extract domain name after '@' character
    LOWER(SUBSTRING(email FROM POSITION('@' IN email) + 1)) AS email_domain,
    -- Strip non-numeric characters from phone numbers using Regex
    REGEXP_REPLACE(phone_number, '\D', '', 'g') AS clean_phone_digits,
    -- Format zero-padded fixed-width account code
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
        explanation: "Demonstrates string parsing (SUBSTRING, POSITION), REGEXP_REPLACE phone cleaning, padding (LPAD), date truncation for time-series grouping (DATE_TRUNC), and Searched CASE statement tiering."
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

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod12Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-12');
  if (mod12Idx !== -1) sqlCourseInDb.modules[mod12Idx] = masterModule12;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 12!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod12Index = content.indexOf('"id": "sql-mod-12"');
const sqlMod13Index = content.indexOf('"id": "sql-mod-13"');

if (sqlMod12Index !== -1 && sqlMod13Index !== -1) {
  const mod12Start = content.lastIndexOf('{', sqlMod12Index);
  const mod13Start = content.lastIndexOf('{', sqlMod13Index);
  
  const beforeMod12 = content.slice(0, mod12Start);
  const afterMod12 = content.slice(mod13Start);
  
  const formattedMod12 = JSON.stringify(masterModule12, null, 6);
  
  content = beforeMod12 + formattedMod12 + ',\n\n      ' + afterMod12;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 12!');
}

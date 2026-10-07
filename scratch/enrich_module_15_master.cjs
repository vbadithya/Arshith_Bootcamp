const fs = require('fs');

const masterModule15 = {
  id: "sql-mod-15",
  title: "Module 15 — SQL for Data Analytics, Python & AI + Final Project",
  description: "Master Advanced Data Analytics & AI Integration Architecture: Window Functions (ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE(), FIRST_VALUE, LAST_VALUE), PARTITION BY & Window Framing (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW), Navigation Functions (LAG, LEAD for MoM / YoY Growth %), Python Data Science Integration (psycopg2, sqlite3, SQLAlchemy create_engine, pandas.read_sql), SQL for AI & Vector Databases (pgvector extension, Cosine Distance <=> for RAG), and Comprehensive Capstone Final Project.",
  completed: false,
  order: 15,
  published: true,
  readingMaterial: {
    introduction: "Welcome to Module 15, the capstone master module of the SQL & Relational Databases curriculum! Modern enterprise data engineering extends far beyond standard CRUD queries. Advanced analytical engineering relies on Window Functions (`OVER (PARTITION BY ...)`), cumulative running totals, Period-over-Period trend analysis (`LAG`/`LEAD`), Python data science stack integration (`pandas`, `SQLAlchemy`), and AI Vector Search (`pgvector`). This module synthesizes all curriculum topics into production-grade analytics skills and concludes with a comprehensive capstone final project.",
    objectives: [
      "Master Window Functions: OVER (PARTITION BY ... ORDER BY ...)",
      "Deconstruct Ranking Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), and NTILE(n)",
      "Master Navigation Window Functions: LAG(col, offset) and LEAD(col, offset) for Month-over-Month (MoM) and Year-over-Year (YoY) growth analysis",
      "Calculate Cumulative Running Totals and Moving Averages using Window Framing (ROWS BETWEEN ...)",
      "Integrate SQL with Python Data Science Stacks: sqlite3, psycopg2, SQLAlchemy Engine, and pandas.read_sql()",
      "Explore AI Vector Databases: Storing LLM embeddings and performing similarity searches with pgvector (Cosine Distance <=>)",
      "Complete a Comprehensive Capstone Final Project synthesizing DDL, DML, Joins, Aggregation, CTEs, and Window Functions"
    ],
    sections: [
      {
        heading: "1. Advanced Window Functions & Ranking Mechanics",
        text: "Unlike standard aggregate functions (which collapse multiple rows into single summary groups), Window Functions calculate aggregate metrics across a subset of rows (a 'window') while preserving individual row identities:",
        table: {
          headers: ["Window Function", "Syntax Pattern", "Tie-Handling Behavior", "Primary Analytics Scenario"],
          rows: [
            ["ROW_NUMBER()", "ROW_NUMBER() OVER (ORDER BY sales DESC)", "Sequential integers (1, 2, 3, 4); breaks ties arbitrarily", "Pagination & deduplicating top-1 item per partition"],
            ["RANK()", "RANK() OVER (ORDER BY score DESC)", "Gaps in rank sequence on ties (1, 2, 2, 4)", "Official competition leaderboards"],
            ["DENSE_RANK()", "DENSE_RANK() OVER (ORDER BY score DESC)", "No gaps in rank sequence on ties (1, 2, 2, 3)", "Financial bonus tiers and product rankings"],
            ["NTILE(n)", "NTILE(4) OVER (ORDER BY spend DESC)", "Divides dataset into n equal bucket quartiles (1 to 4)", "Customer segmentation & cohort quartile analysis"]
          ]
        },
        bulletPoints: [
          "Window Function Structure: `FUNCTION() OVER (PARTITION BY category ORDER BY sales DESC)`",
          "• `PARTITION BY`: Segregates rows into independent calculation windows (similar to GROUP BY, but rows are NOT collapsed!).",
          "• `ORDER BY`: Defines row calculation sequence within each partition.",
          "Window Function Execution Stage: Window functions execute during Step 5 (`SELECT`) of the 8-step logical query pipeline—AFTER `WHERE`, `GROUP BY`, and `HAVING` have executed!"
        ]
      },
      {
        heading: "2. Navigation Functions & Cumulative Moving Window Framing",
        text: "Analyzing business growth trends requires comparing row values against preceding or following records within a partition:",
        bulletPoints: [
          "LAG(column, offset, default): Accesses data from a PREVIOUS row in the partition (e.g. `LAG(monthly_sales, 1)` retrieves previous month's revenue to calculate Month-over-Month growth %).",
          "LEAD(column, offset, default): Accesses data from a FOLLOWING row in the partition.",
          "Window Framing Specifications (ROWS BETWEEN ...):",
          "• Cumulative Running Total: `SUM(order_total) OVER (PARTITION BY customer_id ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)` (Calculates a cumulative lifetime spend total that updates dynamically row-by-row!).",
          "• 3-Period Moving Average: `AVG(sales) OVER (ORDER BY sales_month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)` (Smooths out short-term fluctuations in financial metrics)."
        ],
        table: {
          headers: ["Window Frame Specification", "Syntax Pattern", "Frame Boundary Covered", "Primary Analytical Use Case"],
          rows: [
            ["Cumulative Running Total", "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW", "From partition start to current row", "Lifetime account spend, cumulative customer revenue"],
            ["Moving Average", "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW", "Current row plus 2 preceding rows", "3-month rolling sales average"],
            ["Centered Window", "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING", "1 row before, current row, 1 row after", "Smoothing volatile sensor / stock price data"]
          ]
        }
      },
      {
        heading: "3. Python Data Science Integration: pandas, SQLAlchemy & psycopg2",
        text: "Modern data science workflows connect Python scripts directly to relational database engines for automated reporting pipelines:",
        bulletPoints: [
          "SQLAlchemy Engine: The industry-standard Python Object Relational Mapper (ORM) connection bridge (`create_engine('postgresql://user:pass@host:5432/dbname')`).",
          "Pandas Integration (pandas.read_sql): Executes SQL queries directly into Pandas DataFrames for immediate data analysis, statistical modeling, and charting: `df = pd.read_sql(query, engine)`.",
          "Performance Optimization: Always perform filtering and aggregation inside the SQL database engine before loading the result set into Pandas RAM memory."
        ]
      },
      {
        heading: "4. SQL for AI, LLMs & Vector Databases (pgvector Embeddings)",
        text: "AI and Large Language Model (LLM) applications utilize relational databases extended with vector search capabilities:",
        bulletPoints: [
          "pgvector Extension: PostgreSQL extension for storing high-dimensional vector embeddings generated by AI models (`CREATE EXTENSION vector;`).",
          "Vector Data Type: `embedding vector(1536)` (Stores 1536-dimensional floating-point vectors representing semantic meaning).",
          "Cosine Distance Similarity Search Operator (<=>):",
          "• `SELECT document_text FROM vector_store ORDER BY embedding <=> '[0.015, -0.023, ...]' LIMIT 5;`",
          "• Performs ultra-fast Retrieval Augmented Generation (RAG) vector searches directly inside SQL queries!"
        ]
      },
      {
        heading: "5. Comprehensive Capstone Final Project Architecture",
        text: "The capstone project synthesizes all 15 modules into an end-to-end database solution:",
        bulletPoints: [
          "Step 1: Schema Design (DDL) — Multi-tenant schema with identity columns, generated stored columns, and CHECK constraints.",
          "Step 2: Data Ingestion (DML) — Multi-row batch insertions and atomic UPSERT (`ON CONFLICT DO UPDATE`) handling.",
          "Step 3: Relational Querying — Multi-table INNER/LEFT JOINs and Anti-Joins.",
          "Step 4: Advanced Analytics — Chained CTEs, Window Functions (`DENSE_RANK`, `LAG`, running totals), and `GROUP BY ROLLUP` subtotals.",
          "Step 5: Python Integration — Exporting analytical DataFrames for executive presentation."
        ]
      }
    ],
    codeExamples: [
      {
        title: "Window Functions: DENSE_RANK(), MoM Growth with LAG() & Running Totals",
        code: `-- 1. Top 2 Highest Paid Employees per Department using DENSE_RANK()
WITH ranked_employees AS (
    SELECT 
        e.employee_id,
        e.first_name || ' ' || e.last_name AS employee_name,
        e.department,
        e.salary,
        DENSE_RANK() OVER (PARTITION BY e.department ORDER BY e.salary DESC) AS salary_rank
    FROM enterprise_employees AS e
)
SELECT * FROM ranked_employees WHERE salary_rank <= 2;

-- 2. Month-over-Month (MoM) Revenue Growth % using LAG() and Cumulative Running Totals
WITH monthly_revenue AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS sales_month,
        SUM(order_total) AS gross_revenue
    FROM orders
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT 
    sales_month,
    gross_revenue,
    -- Retrieve previous month's revenue using LAG()
    LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC) AS previous_month_revenue,
    
    -- Calculate MoM Growth Percentage
    ROUND(((gross_revenue - LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC)) / 
           NULLIF(LAG(gross_revenue, 1) OVER (ORDER BY sales_month ASC), 0)) * 100, 2) AS mom_growth_pct,
           
    -- Cumulative Lifetime Running Total
    SUM(gross_revenue) OVER (ORDER BY sales_month ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total_revenue
FROM monthly_revenue
ORDER BY sales_month ASC;`,
        explanation: "Demonstrates DENSE_RANK() partitioned by department, calculating Month-over-Month revenue growth % using LAG(), and computing cumulative running totals with window framing."
      },
      {
        title: "Python Integration (SQLAlchemy + Pandas) & pgvector AI Search",
        code: `# Python Pipeline: Querying SQL database into Pandas DataFrame
import pandas as pd
from sqlalchemy import create_engine

# 1. Establish SQLAlchemy database connection engine
engine = create_engine('postgresql://analytics_user:SecurePass2026!@localhost:5432/enterprise_db')

# 2. Execute SQL query directly into Pandas DataFrame
query = """
SELECT 
    DATE_TRUNC('month', order_date) AS month,
    COUNT(order_id) AS total_orders,
    SUM(order_total) AS total_revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month ASC;
"""
df = pd.read_sql(query, engine)
print(df.head())

-- PostgreSQL pgvector: AI Vector Distance Similarity Search for RAG Applications
-- SELECT top 3 most semantically similar documents to an input AI embedding
SELECT 
    doc_id,
    content_text,
    1 - (embedding <=> '[0.0152, -0.0234, 0.0891, ...]'::vector) AS cosine_similarity
FROM ai_knowledge_base
ORDER BY embedding <=> '[0.0152, -0.0234, 0.0891, ...]'::vector ASC
LIMIT 3;`,
        explanation: "Demonstrates connecting Python (Pandas/SQLAlchemy) to SQL databases, and executing AI vector cosine similarity searches using pgvector."
      }
    ],
    bestPractices: [
      "Use `DENSE_RANK()` when ranking items with ties if you want consecutive rank numbers without gaps.",
      "Use `ROW_NUMBER()` inside a CTE to deduplicate rows or select top N items per partition.",
      "Always use `NULLIF()` when calculating growth percentages with `LAG()` to prevent division-by-zero crashes.",
      "Use `pandas.read_sql(query, engine)` for seamless Python data science and visualization workflows.",
      "Leverage `pgvector` in PostgreSQL for high-performance AI vector similarity searches directly within your relational database."
    ],
    commonMistakes: [
      "Confusing `RANK()` (leaves gaps on ties: 1, 2, 2, 4) with `DENSE_RANK()` (no gaps: 1, 2, 2, 3).",
      "Attempting to use Window Functions inside `WHERE` or `HAVING` clauses (Window functions execute in Step 5 `SELECT`; use a CTE to filter window output!).",
      "Forgetting to specify `ORDER BY` inside `OVER (...)` when calculating cumulative running totals or ranking.",
      "Loading entire multi-gigabyte tables into Pandas RAM instead of performing aggregation inside SQL first."
    ],
    practiceExercise: {
      title: "Window Functions & Capstone Analytics Challenge",
      problem: "Perform the following two tasks:\n1. Compare `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()` when ranking three employees with salaries `$100k, $100k, $80k`.\n\n2. Write a SQL query using `ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC)` inside a CTE to retrieve the most recent single order placed by every customer.",
      solutionCode: `-- Exercise 1 Ranking Output Answers:
-- Employee A ($100k): ROW_NUMBER = 1 | RANK = 1 | DENSE_RANK = 1
-- Employee B ($100k): ROW_NUMBER = 2 | RANK = 1 | DENSE_RANK = 1
-- Employee C ($80k) : ROW_NUMBER = 3 | RANK = 3 | DENSE_RANK = 2

-- Exercise 2 Most Recent Customer Order CTE Solution:
WITH ranked_customer_orders AS (
    SELECT 
        order_id,
        customer_id,
        order_date,
        order_total,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
    FROM orders
)
SELECT order_id, customer_id, order_date, order_total
FROM ranked_customer_orders
WHERE rn = 1;`
    },
    keyTakeaways: [
      "Window functions (`OVER (PARTITION BY ... ORDER BY ...)`) compute analytics across row subsets while preserving individual row identities.",
      "`DENSE_RANK()` ranks items without sequence gaps; `ROW_NUMBER()` assigns unique sequential integers.",
      "`LAG()` and `LEAD()` enable Period-over-Period trend analysis and growth percentage calculations.",
      "Python integration (`SQLAlchemy`, `pandas`) bridges relational databases with data science and machine learning pipelines.",
      "PostgreSQL `pgvector` enables AI vector similarity search directly alongside structured relational data."
    ]
  }
};

// Update db.json
const dbPath = './server/data/db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const sqlCourseInDb = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

if (sqlCourseInDb) {
  const mod15Idx = sqlCourseInDb.modules.findIndex(m => m.id === 'sql-mod-15');
  if (mod15Idx !== -1) sqlCourseInDb.modules[mod15Idx] = masterModule15;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Updated db.json with Master Module 15!');
}

// Update coursesData.js
const coursesDataPath = './src/data/coursesData.js';
let content = fs.readFileSync(coursesDataPath, 'utf8');

const sqlMod15Index = content.indexOf('"id": "sql-mod-15"');
const webDevIndex = content.indexOf('id: "web-development"');

if (sqlMod15Index !== -1 && webDevIndex !== -1) {
  const mod15Start = content.lastIndexOf('{', sqlMod15Index);
  const webDevStart = content.lastIndexOf('{', webDevIndex);
  
  const beforeMod15 = content.slice(0, mod15Start);
  const afterSqlModules = content.slice(webDevStart);
  
  const formattedMod15 = JSON.stringify(masterModule15, null, 6);
  
  content = beforeMod15 + formattedMod15 + '\n    ],\n  },\n  ' + afterSqlModules;
  fs.writeFileSync(coursesDataPath, content, 'utf8');
  console.log('Updated coursesData.js with Master Module 15!');
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read scratch modules
import { buildSqlModules } from './sql_modules_export.js';

const sqlModules = buildSqlModules();

const coursesDataPath = path.join(__dirname, '../src/data/coursesData.js');

// Dynamically import existing coursesData by converting to temp file or reading
const tempFile = path.join(__dirname, 'temp_courses.js');

let fileContent = fs.readFileSync(coursesDataPath, 'utf8');

// Replace the sql-data-analysis object cleanly
// Find start of sql-data-analysis course
const startIndex = fileContent.indexOf('id: "sql-data-analysis"');
if (startIndex !== -1) {
  // Find opening brace before id
  const courseStart = fileContent.lastIndexOf('{', startIndex);
  
  // Find next course in array: id: "web-development"
  const nextCourseIndex = fileContent.indexOf('id: "web-development"', startIndex);
  const courseEnd = fileContent.lastIndexOf('}', nextCourseIndex);

  const updatedSqlCourse = `{
    id: "sql-data-analysis",
    title: "SQL & Relational Databases",
    category: "SQL",
    level: "All Levels",
    duration: "35 hours",
    rating: 4.9,
    studentsCount: "14.8k",
    studentsNumeric: 14800,
    price: 0,
    isFree: true,
    bestseller: true,
    progress: 0,
    iconBg: "bg-cyan-50 border-2 border-cyan-200 text-cyan-600",
    iconType: "database",
    introVideoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Master Relational Databases & SQL with our comprehensive 15-module curriculum based on the complete SQL manual. Covers DDL, DML, filtering, aggregation, Joins, Subqueries, CTEs, Views, Indexes, Transactions, DCL security, Python integration, AI-assisted SQL, and Capstone E-Commerce Project.",
    instructor: {
      name: "Siddharth Nair & Dr. Ananya Sharma",
      role: "Principal Data Architect @ Arshith Boot Camp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    whatYouWillLearn: [
      "Introduction to SQL, Databases, RDBMS, and Data Types",
      "Data Definition Language (DDL): CREATE, ALTER, DROP, TRUNCATE",
      "Constraints: Primary Key, Foreign Key, UNIQUE, CHECK, NOT NULL",
      "Data Manipulation Language (DML): INSERT, UPDATE, DELETE",
      "SELECT queries, Projection, Column/Table Aliases (AS)",
      "Filtering with WHERE, Comparison/Logical Operators, LIKE, IN, BETWEEN",
      "Sorting (ORDER BY ASC/DESC), Distinct values, LIMIT & Pagination",
      "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX), GROUP BY & HAVING",
      "Relational Joins: INNER, LEFT, RIGHT, FULL OUTER, SELF, CROSS JOIN",
      "Subqueries, Common Table Expressions (CTEs), UNION & UNION ALL",
      "Scalar Functions (String, Math, Date) & Conditional CASE Statements",
      "Views, B-Tree Indexes, EXPLAIN performance tuning & ACID Transactions",
      "Data Analytics, Python sqlite3 + Pandas integration & AI-Assisted SQL"
    ],
    modules: ${JSON.stringify(sqlModules, null, 6)}
  }`;

  const newFileContent = fileContent.substring(0, courseStart) + updatedSqlCourse + fileContent.substring(courseEnd + 1);
  fs.writeFileSync(coursesDataPath, newFileContent, 'utf8');
  console.log("Successfully replaced sql-data-analysis in coursesData.js!");
} else {
  console.error("Could not locate sql-data-analysis in coursesData.js");
}

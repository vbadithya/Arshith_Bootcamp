import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Update server/data/db.json
const dbPath = path.join(__dirname, '../server/data/db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const sqlDbCourse = dbData.courses.find(c => c.id === 'sql-mastery' || c.category === 'SQL');
if (sqlDbCourse) {
  sqlDbCourse.progress = 0;
  if (sqlDbCourse.modules) {
    sqlDbCourse.modules.forEach(m => {
      m.completed = false;
    });
  }
}

// Update students progress for SQL in db.json
if (dbData.students) {
  dbData.students.forEach(student => {
    if (student.progressMap) {
      if (student.progressMap['sql-mastery']) {
        student.progressMap['sql-mastery'] = {
          progress: 0,
          completedModules: [],
          quizzesPassed: [],
          finalTestPassed: false,
          projectStatus: "Not Submitted"
        };
      }
      if (student.progressMap['sql-data-analysis']) {
        student.progressMap['sql-data-analysis'] = {
          progress: 0,
          completedModules: [],
          quizzesPassed: [],
          finalTestPassed: false,
          projectStatus: "Not Submitted"
        };
      }
    }
  });
}

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log('Successfully set SQL course progress to 0 and all modules completed: false in db.json!');

// 2. Update scratch/sql_modules_export.js so completed is false for all modules
const exportPath = path.join(__dirname, 'sql_modules_export.js');
let exportCode = fs.readFileSync(exportPath, 'utf8');
exportCode = exportCode.replace(/completed:\s*true/g, 'completed: false');
fs.writeFileSync(exportPath, exportCode, 'utf8');
console.log('Successfully set all modules completed: false in sql_modules_export.js!');

// 3. Update src/data/coursesData.js
const cleanScriptPath = path.join(__dirname, 'clean_courses_data.js');
let cleanCode = fs.readFileSync(cleanScriptPath, 'utf8');
cleanCode = cleanCode.replace(/progress:\s*20/g, 'progress: 0');
fs.writeFileSync(cleanScriptPath, cleanCode, 'utf8');

// Run clean_courses_data logic
const coursesDataPath = path.join(__dirname, '../src/data/coursesData.js');
let fileContent = fs.readFileSync(coursesDataPath, 'utf8');

const startIndex = fileContent.indexOf('id: "sql-data-analysis"');
if (startIndex !== -1) {
  const courseStart = fileContent.lastIndexOf('{', startIndex);
  const nextCourseIndex = fileContent.indexOf('id: "web-development"', startIndex);
  const courseEnd = fileContent.lastIndexOf('}', nextCourseIndex);

  // Import modules
  const { buildSqlModules } = await import('./sql_modules_export.js');
  const sqlModules = buildSqlModules();
  sqlModules.forEach(m => m.completed = false);

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
  console.log('Successfully set SQL course progress to 0% and all 15 modules to completed: false in coursesData.js!');
}

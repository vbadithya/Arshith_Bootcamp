// scratch/apply_4_sql_papers.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SQL_QUESTION_PAPERS } from './build_4_sql_question_papers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sqlFinalTestObj = {
  id: "sql-final-test",
  title: "SQL Masterclass Certification Exam (4 Student Paper Sets)",
  description: "Official certification exam series featuring 4 comprehensive question paper sets assigned dynamically by student candidate name in alphabetical order (A-F, G-L, M-R, S-Z).",
  passingScore: 70,
  timeLimitMinutes: 45,
  totalMarks: 100,
  published: true,
  questionPapers: SQL_QUESTION_PAPERS,
  questions: SQL_QUESTION_PAPERS[0].questions
};

// 1. Update server/data/db.json
const dbPath = path.join(rootDir, 'server', 'data', 'db.json');
if (fs.existsSync(dbPath)) {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  const sqlCourse = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');
  if (sqlCourse) {
    sqlCourse.finalTest = sqlFinalTestObj;
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log(`Updated server/data/db.json for course ${sqlCourse.id} successfully.`);
  } else {
    console.error('SQL course not found in db.json');
  }
}

// scratch/apply_to_courses_data_sql_exact.mjs
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

const filePath = path.join(rootDir, 'src', 'data', 'coursesData.js');
let code = fs.readFileSync(filePath, 'utf8');

const targetIdx = code.indexOf('id: "sql-data-analysis"');
if (targetIdx !== -1) {
  const nextCourseIdx = code.indexOf('id: "web-development"', targetIdx);
  if (nextCourseIdx !== -1) {
    const insertPos = code.lastIndexOf('],', nextCourseIdx);
    if (insertPos > targetIdx) {
      const ftString = ',\n    finalTest: ' + JSON.stringify(sqlFinalTestObj, null, 6).replace(/\n/g, '\n    ');
      code = code.slice(0, insertPos + 1) + ftString + code.slice(insertPos + 1);
      fs.writeFileSync(filePath, code, 'utf8');
      console.log('Successfully added finalTest with 4 Question Papers to src/data/coursesData.js!');
    }
  }
} else {
  console.error('Target course not found in coursesData.js');
}

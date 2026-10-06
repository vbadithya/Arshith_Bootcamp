// scratch/apply_4_papers_to_courses.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PYTHON_QUESTION_PAPERS } from './generate_4_question_papers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Update server/data/db.json
const dbPath = path.join(rootDir, 'server', 'data', 'db.json');
if (fs.existsSync(dbPath)) {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  const pyCourse = db.courses.find(c => c.id === 'python-programming');
  if (pyCourse) {
    if (!pyCourse.finalTest) pyCourse.finalTest = {};
    pyCourse.finalTest.title = "Python Programming Master Certification Exam (4 Student Paper Sets)";
    pyCourse.finalTest.description = "Official certification exam series featuring 4 comprehensive question papers set for specific candidates. Select your assigned paper set to proceed.";
    pyCourse.finalTest.passingScore = 80;
    pyCourse.finalTest.timeLimitMinutes = 45;
    pyCourse.finalTest.totalMarks = 100;
    pyCourse.finalTest.published = true;
    pyCourse.finalTest.questionPapers = PYTHON_QUESTION_PAPERS;
    pyCourse.finalTest.questions = PYTHON_QUESTION_PAPERS[0].questions;
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log('Updated server/data/db.json successfully.');
  }
}

// 2. Update src/data/coursesData.js
const coursesDataPath = path.join(rootDir, 'src', 'data', 'coursesData.js');
let coursesCode = fs.readFileSync(coursesDataPath, 'utf8');

// Replace lines 9111 to 9521 with new finalTest structure
const startMarker = '    finalTest: {';
const startIndex = coursesCode.indexOf(startMarker);
const endMarker = '    id: "sql-data-analysis",';
const endIndex = coursesCode.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  // Find the closing brace of python course right before sql-data-analysis
  const closingBraceIndex = coursesCode.lastIndexOf('},', endIndex);
  if (closingBraceIndex > startIndex) {
    const finalTestObj = {
      id: "py-final-test",
      title: "Python Programming Master Certification Exam (4 Student Paper Sets)",
      description: "Official certification exam series featuring 4 comprehensive question papers set for specific candidates. Select your assigned paper set to proceed.",
      passingScore: 80,
      timeLimitMinutes: 45,
      totalMarks: 100,
      published: true,
      questionPapers: PYTHON_QUESTION_PAPERS,
      questions: PYTHON_QUESTION_PAPERS[0].questions
    };

    const finalTestStr = '    finalTest: ' + JSON.stringify(finalTestObj, null, 6).replace(/\n/g, '\n    ') + '\n  ';
    const newCoursesCode = coursesCode.slice(0, startIndex) + finalTestStr + coursesCode.slice(closingBraceIndex);
    fs.writeFileSync(coursesDataPath, newCoursesCode, 'utf8');
    console.log('Updated src/data/coursesData.js successfully.');
  } else {
    console.error('Could not find proper closing brace for python final test.');
  }
} else {
  console.error('Could not locate markers in coursesData.js:', { startIndex, endIndex });
}

// 3. Update server/seed.js
const seedPath = path.join(rootDir, 'server', 'seed.js');
if (fs.existsSync(seedPath)) {
  let seedCode = fs.readFileSync(seedPath, 'utf8');
  const seedStartIdx = seedCode.indexOf('    finalTest: {');
  const seedEndIdx = seedCode.indexOf('sql-mastery');
  const seedCloseIdx = seedCode.lastIndexOf('},', seedEndIdx);
  if (seedStartIdx !== -1 && seedEndIdx !== -1 && seedCloseIdx > seedStartIdx) {
    const finalTestObj = {
      id: "py-final-test",
      title: "Python Programming Master Certification Exam (4 Student Paper Sets)",
      description: "Official certification exam series featuring 4 comprehensive question papers set for specific candidates. Select your assigned paper set to proceed.",
      passingScore: 80,
      timeLimitMinutes: 45,
      totalMarks: 100,
      published: true,
      questionPapers: PYTHON_QUESTION_PAPERS,
      questions: PYTHON_QUESTION_PAPERS[0].questions
    };
    const ftStr = '    finalTest: ' + JSON.stringify(finalTestObj, null, 6).replace(/\n/g, '\n    ') + '\n  ';
    seedCode = seedCode.slice(0, seedStartIdx) + ftStr + seedCode.slice(seedCloseIdx);
    fs.writeFileSync(seedPath, seedCode, 'utf8');
    console.log('Updated server/seed.js successfully.');
  }
}


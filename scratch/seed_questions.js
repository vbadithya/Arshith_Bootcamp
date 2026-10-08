import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SQL_QUESTION_BANK } from '../server/data/sqlQuestionBank.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFile = path.join(__dirname, '..', 'server', 'data', 'db.json');

const db = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));

// Initialize quiz structures
db.questionBank = SQL_QUESTION_BANK;

if (!db.quizAttempts) {
  db.quizAttempts = [];
}

if (!db.finalTestAttempts) {
  db.finalTestAttempts = [];
}

if (!db.finalTestActiveSessions) {
  db.finalTestActiveSessions = {};
}

// Update the SQL course finalTest metadata in db.json
const sqlCourse = db.courses?.find(c => c.id === 'sql-data-analysis');
if (sqlCourse) {
  sqlCourse.finalTest = {
    id: 'sql-final-assessment',
    title: 'SQL Final Assessment',
    description: 'Comprehensive 45-minute SQL evaluation testing all 15 modules with 25 questions.',
    passingScore: 60, // 60% pass threshold
    timeLimitMinutes: 45,
    maxAttempts: 99,
    published: true,
    totalQuestions: 25
  };
  
  // Ensure every module has quiz metadata
  sqlCourse.modules?.forEach((mod, idx) => {
    mod.quiz = {
      id: `sql-quiz-${mod.id}`,
      title: `${mod.title} Quiz`,
      passingScore: 70, // 70% pass threshold (4 out of 5)
      totalQuestions: 5,
      published: true
    };
  });
}

fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf-8');
console.log('Successfully updated db.json with 100 question bank and quiz metadata!');

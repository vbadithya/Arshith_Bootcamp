import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('Fetching clean db.json from HEAD and origin/main...');
const headJsonStr = execSync('git show HEAD:server/data/db.json', { cwd: rootDir, maxBuffer: 50 * 1024 * 1024 }).toString('utf8');
const originJsonStr = execSync('git show origin/main:server/data/db.json', { cwd: rootDir, maxBuffer: 50 * 1024 * 1024 }).toString('utf8');

const headDb = JSON.parse(headJsonStr);
const originDb = JSON.parse(originJsonStr);

console.log('Merging databases...');
// We start with originDb (which contains all comprehensive SQL curriculum and quizzes)
const mergedDb = { ...originDb };

// 1. Preserve or merge courses:
// Ensure each course in mergedDb has its 3 projects from headDb
mergedDb.courses = originDb.courses.map(course => {
  const headCourse = headDb.courses.find(c => c.id === course.id);
  if (headCourse && headCourse.projects && headCourse.projects.length > 0) {
    course.projects = headCourse.projects;
  }
  return course;
});

// Also check if any courses exist in headDb but not originDb
headDb.courses.forEach(hc => {
  if (!mergedDb.courses.some(c => c.id === hc.id)) {
    mergedDb.courses.push(hc);
  }
});

// 2. Add Project tables and logs from headDb:
mergedDb.projectSubmissions = headDb.projectSubmissions || [];
mergedDb.projectConfig = headDb.projectConfig || {
  projectSubmissionEmail: "admin@arshithbootcamp.com",
  maxProjectsPerCourse: 3,
  allowedDomains: ["github.com"],
  notificationEnabled: true
};
mergedDb.emailLogs = headDb.emailLogs || [];

// 3. Keep quiz submissions, analytics, or any new tables from originDb:
if (originDb.quizSubmissions) mergedDb.quizSubmissions = originDb.quizSubmissions;
if (originDb.quizAnalytics) mergedDb.quizAnalytics = originDb.quizAnalytics;

// 4. Save merged db.json
const dbPath = path.join(rootDir, 'server', 'data', 'db.json');
fs.writeFileSync(dbPath, JSON.stringify(mergedDb, null, 2), 'utf8');
console.log('Successfully merged db.json! Validating JSON parse...');
JSON.parse(fs.readFileSync(dbPath, 'utf8'));
console.log('db.json is 100% valid JSON and fully merged with projects and curriculum!');

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COURSE_PROJECTS_MAP } from './seed_3_course_projects.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const coursesDataPath = path.join(rootDir, 'src', 'data', 'coursesData.js');
let content = fs.readFileSync(coursesDataPath, 'utf8');

// Replace the conflict block in coursesData.js
const conflictStart = content.indexOf('<<<<<<< HEAD');
const conflictEnd = content.indexOf('>>>>>>> origin/main');

if (conflictStart !== -1 && conflictEnd !== -1) {
  const afterConflictIdx = content.indexOf('\n', conflictEnd) + 1;
  
  // Format sql projects
  const sqlProjectsJson = '    projects: ' + JSON.stringify(COURSE_PROJECTS_MAP['sql-mastery'], null, 6).replace(/\n/g, '\n    ') + ',\n';
  
  const originPart = `    finalTest: {
          "id": "sql-final-test",
          "title": "SQL Masterclass Certification Exam (4 Student Paper Sets)",
          "description": "Official certification exam series featuring 4 comprehensive question paper sets assigned dynamically by student candidate name in alphabetical order (A-F, G-L, M-R, S-Z).",
          "passingScore": 70,
`;

  content = content.slice(0, conflictStart) + sqlProjectsJson + originPart + content.slice(afterConflictIdx);
  console.log('Resolved conflict in coursesData.js for sql-data-analysis');
} else {
  console.log('No conflict markers found in coursesData.js');
}

// Now ensure python-programming has projects:
if (!content.includes('prj-py-1')) {
  const pyIdx = content.indexOf('id: "python-programming"');
  if (pyIdx !== -1) {
    const pyProjectsJson = '\n    projects: ' + JSON.stringify(COURSE_PROJECTS_MAP['python-programming'], null, 6).replace(/\n/g, '\n    ') + ',';
    // Insert after title or duration
    const insertAfter = content.indexOf('modules: [', pyIdx);
    if (insertAfter !== -1) {
      content = content.slice(0, insertAfter) + pyProjectsJson.trim() + ',\n    ' + content.slice(insertAfter);
      console.log('Injected projects into python-programming');
    }
  }
}

// Ensure web-development has projects:
if (!content.includes('prj-web-1')) {
  const webIdx = content.indexOf('id: "web-development"');
  if (webIdx !== -1) {
    const webProjectsJson = '\n    projects: ' + JSON.stringify(COURSE_PROJECTS_MAP['web-development'], null, 6).replace(/\n/g, '\n    ') + ',';
    const insertAfter = content.indexOf('modules: [', webIdx);
    if (insertAfter !== -1) {
      content = content.slice(0, insertAfter) + webProjectsJson.trim() + ',\n    ' + content.slice(insertAfter);
      console.log('Injected projects into web-development');
    }
  }
}

// Ensure ai-data-science has projects:
if (!content.includes('prj-ai-1')) {
  const aiIdx = content.indexOf('id: "ai-data-science"');
  if (aiIdx !== -1) {
    const aiProjectsJson = '\n    projects: ' + JSON.stringify(COURSE_PROJECTS_MAP['data-science-ai'], null, 6).replace(/\n/g, '\n    ') + ',';
    const insertAfter = content.indexOf('modules: [', aiIdx);
    if (insertAfter !== -1) {
      content = content.slice(0, insertAfter) + aiProjectsJson.trim() + ',\n    ' + content.slice(insertAfter);
      console.log('Injected projects into ai-data-science');
    }
  }
}

fs.writeFileSync(coursesDataPath, content, 'utf8');
console.log('Finished processing coursesData.js');

// scratch/inject_projects_into_frontend_courses.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COURSE_PROJECTS_MAP } from './seed_3_course_projects.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const coursesDataPath = path.join(rootDir, 'src', 'data', 'coursesData.js');
let content = fs.readFileSync(coursesDataPath, 'utf8');

// For each course in COURSE_PROJECTS_MAP, check if 'projects:' is present. If not, add before 'finalTest:' or at the end of the course object.
// We can use a clean JSON replacer or regex injection.
Object.entries(COURSE_PROJECTS_MAP).forEach(([courseId, projects]) => {
  const courseIdPattern = new RegExp(`id:\\s*["']${courseId}["']`);
  const match = content.match(courseIdPattern);
  if (match) {
    const courseStartIdx = match.index;
    // Find finalTest or finalProject or end of this course
    const finalTestIdx = content.indexOf('finalTest:', courseStartIdx);
    if (finalTestIdx !== -1 && finalTestIdx < courseStartIdx + 600000) {
      if (!content.slice(courseStartIdx, finalTestIdx).includes('projects:')) {
        const projectsJson = '    projects: ' + JSON.stringify(projects, null, 6).replace(/\n/g, '\n    ') + ',\n';
        content = content.slice(0, finalTestIdx) + projectsJson + content.slice(finalTestIdx);
        console.log(`Injected projects for ${courseId}`);
      }
    }
  }
});

fs.writeFileSync(coursesDataPath, content, 'utf8');
console.log('Finished updating coursesData.js with projects.');

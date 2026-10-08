// scratch/inject_projects_into_seed.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COURSE_PROJECTS_MAP } from './seed_3_course_projects.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const seedPath = path.join(rootDir, 'server', 'seed.js');
let seedCode = fs.readFileSync(seedPath, 'utf8');

// For each course in seedCode, inject projects
Object.entries(COURSE_PROJECTS_MAP).forEach(([courseId, projects]) => {
  const courseIdPattern = new RegExp(`id:\\s*["']${courseId}["']`);
  const match = seedCode.match(courseIdPattern);
  if (match) {
    const courseStartIdx = match.index;
    const finalTestIdx = seedCode.indexOf('finalTest:', courseStartIdx);
    if (finalTestIdx !== -1 && finalTestIdx < courseStartIdx + 600000) {
      if (!seedCode.slice(courseStartIdx, finalTestIdx).includes('projects:')) {
        const projectsJson = '    projects: ' + JSON.stringify(projects, null, 6).replace(/\n/g, '\n    ') + ',\n';
        seedCode = seedCode.slice(0, finalTestIdx) + projectsJson + seedCode.slice(finalTestIdx);
        console.log(`Injected projects into seed for ${courseId}`);
      }
    }
  }
});

fs.writeFileSync(seedPath, seedCode, 'utf8');
console.log('Finished updating seed.js with projects.');

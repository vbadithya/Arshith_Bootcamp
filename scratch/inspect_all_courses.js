const fs = require('fs');

const coursesDataContent = fs.readFileSync('src/data/coursesData.js', 'utf8');

// Match all courses
const cMatch = coursesDataContent.match(/export const coursesData = (\[[\s\S]*?\]);\s*export const getAllCourses/);
if (!cMatch) {
  console.log("Could not find coursesData array directly");
}

// Let's evaluate or inspect
const lines = coursesDataContent.split('\n');
lines.forEach((line, idx) => {
  if (line.match(/^\s*id:\s*["'][^"']+["'],?\s*$/) || line.match(/^\s*title:\s*["'][^"']+["'],?\s*$/)) {
    if (lines[idx-1] && lines[idx-1].includes('{') && (lines[idx-2] && (lines[idx-2].includes('[') || lines[idx-2].includes('coursesData')))) {
      console.log(`Line ${idx+1}:`, line.trim());
    }
  }
});

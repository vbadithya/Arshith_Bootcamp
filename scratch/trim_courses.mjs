import fs from 'fs';

const c = fs.readFileSync('src/data/coursesData.js', 'utf8');
const marker = 'export const SAMPLE_CERTIFICATES =';
const idx = c.indexOf(marker);
if (idx === -1) {
  console.log("Marker not found!");
  process.exit(1);
}

// Find the first ]; after marker
const endIdx = c.indexOf('];', idx);
if (endIdx === -1) {
  console.log("End marker ]; not found!");
  process.exit(1);
}

const clean = c.substring(0, endIdx + 2) + '\n';
fs.writeFileSync('src/data/coursesData.js', clean, 'utf8');
console.log("Successfully trimmed coursesData.js to endIdx", endIdx + 2);

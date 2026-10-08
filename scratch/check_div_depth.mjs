import fs from 'fs';

const code = fs.readFileSync('src/pages/LearningPage.jsx', 'utf8');
const lines = code.split('\n');

const examLines = lines.slice(759, 1263); // 0-indexed: lines 760 to 1263
let depth = 0;
examLines.forEach((l, idx) => {
  const lineNo = 760 + idx;
  const opens = (l.match(/<div(\s|>)/g) || []).length;
  const closes = (l.match(/<\/div>/g) || []).length;
  depth += (opens - closes);
  if (opens > 0 || closes > 0) {
    // console.log(`Line ${lineNo}: opens ${opens}, closes ${closes}, depth = ${depth}`);
  }
});
console.log('Final div depth inside isExamMode:', depth);

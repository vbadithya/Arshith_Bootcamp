import fs from 'fs';
import { PYTHON_FINAL_TEST } from './python_final_test.mjs';

// 1. Compute zigzag questions
const original = [...PYTHON_FINAL_TEST.questions];
const zigzag = [];
let left = 0;
let right = original.length - 1;
while (left <= right) {
  if (left === right) {
    zigzag.push(original[left]);
  } else {
    zigzag.push(original[left]);
    zigzag.push(original[right]);
  }
  left++;
  right--;
}

zigzag.forEach((q, idx) => {
  q.questionNumber = idx + 1;
});

const updatedFinalTest = {
  ...PYTHON_FINAL_TEST,
  questions: zigzag
};

// 2. Save updated python_final_test.mjs
const mjsContent = `export const PYTHON_FINAL_TEST = ${JSON.stringify(updatedFinalTest, null, 2)};\n`;
fs.writeFileSync('scratch/python_final_test.mjs', mjsContent, 'utf8');
console.log("Updated scratch/python_final_test.mjs with zigzag questions");

// 3. Update src/data/coursesData.js
let c = fs.readFileSync('src/data/coursesData.js', 'utf8');
const cStart = c.indexOf('    finalTest: {');
const cEndTarget = '    title: "SQL for Data Analysis",';
const cEnd = c.indexOf(cEndTarget, cStart);

if (cStart !== -1 && cEnd !== -1) {
  const testJsonStr = JSON.stringify(updatedFinalTest, null, 4);
  const before = c.substring(0, cStart);
  const after = c.substring(cEnd + cEndTarget.length);
  c = before + `    finalTest: ${testJsonStr}\n  },\n  {\n    id: "sql-data-analysis",\n    title: "SQL for Data Analysis",` + after;
  fs.writeFileSync('src/data/coursesData.js', c, 'utf8');
  console.log("Updated src/data/coursesData.js with zigzag finalTest");
} else {
  console.error("Could not find finalTest bounds in src/data/coursesData.js");
}

// 4. Update server/seed.js
let s = fs.readFileSync('server/seed.js', 'utf8');
const sStart = s.indexOf('    finalTest: {');
const sEndTarget = '      id: "py-final-project",';
const sEnd = s.indexOf(sEndTarget, sStart);

if (sStart !== -1 && sEnd !== -1) {
  const testJsonStr = JSON.stringify(updatedFinalTest, null, 4);
  const before = s.substring(0, sStart);
  const after = s.substring(sEnd);
  s = before + `    finalTest: ${testJsonStr},\n    finalProject: {\n` + after;
  fs.writeFileSync('server/seed.js', s, 'utf8');
  console.log("Updated server/seed.js with zigzag finalTest");
} else {
  console.error("Could not find finalTest bounds in server/seed.js");
}

console.log("Completed zigzag data injection.");

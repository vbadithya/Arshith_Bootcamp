import fs from 'fs';
import { PYTHON_FINAL_TEST } from './python_final_test.mjs';

// Format PYTHON_FINAL_TEST as pretty JSON string with 4 spaces
const testJsonStr = JSON.stringify(PYTHON_FINAL_TEST, null, 4);

// 1. Fix src/data/coursesData.js
let c = fs.readFileSync('src/data/coursesData.js', 'utf8');

// Find start of finalTest: in coursesData.js
const startFinalTest = c.indexOf('    finalTest: {');
if (startFinalTest === -1) {
  console.log("Could not find start of finalTest in coursesData.js");
} else {
  // Find where sql-data-analysis starts after startFinalTest
  const sqlTarget = '    title: "SQL for Data Analysis",';
  const endSlice = c.indexOf(sqlTarget, startFinalTest);
  if (endSlice === -1) {
    console.log("Could not find sqlTarget after startFinalTest");
  } else {
    // We want to replace from startFinalTest to endSlice + sqlTarget.length with:
    // `    finalTest: ${testJsonStr}\n  },\n  {\n    id: "sql-data-analysis",\n    title: "SQL for Data Analysis",`
    const before = c.substring(0, startFinalTest);
    const after = c.substring(endSlice + sqlTarget.length);
    c = before + `    finalTest: ${testJsonStr}\n  },\n  {\n    id: "sql-data-analysis",\n    title: "SQL for Data Analysis",` + after;
    fs.writeFileSync('src/data/coursesData.js', c, 'utf8');
    console.log("Successfully restored and inserted complete finalTest in src/data/coursesData.js!");
  }
}

// 2. Fix server/seed.js
let s = fs.readFileSync('server/seed.js', 'utf8');

const sStartFinalTest = s.indexOf('    finalTest: {');
if (sStartFinalTest === -1) {
  console.log("Could not find start of finalTest in server/seed.js");
} else {
  const sProjTarget = '      id: "py-final-project",';
  const sEndSlice = s.indexOf(sProjTarget, sStartFinalTest);
  if (sEndSlice === -1) {
    console.log("Could not find sProjTarget after sStartFinalTest");
  } else {
    const sBefore = s.substring(0, sStartFinalTest);
    const sAfter = s.substring(sEndSlice);
    s = sBefore + `    finalTest: ${testJsonStr},\n    finalProject: {\n` + sAfter;
    fs.writeFileSync('server/seed.js', s, 'utf8');
    console.log("Successfully restored and inserted complete finalTest in server/seed.js!");
  }
}

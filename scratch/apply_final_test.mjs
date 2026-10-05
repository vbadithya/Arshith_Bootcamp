import fs from 'fs';
import { PYTHON_FINAL_TEST } from './python_final_test.mjs';

// 1. Update src/data/coursesData.js
let coursesData = fs.readFileSync('src/data/coursesData.js', 'utf8');

// In coursesData.js, python-programming modules array ends right before sql-data-analysis
// We want to insert finalTest right after modules: [ ... ] for python-programming
// Find the boundary between python-programming and sql-data-analysis
const pyEndBoundary = coursesData.indexOf('id: "sql-data-analysis"');
if (pyEndBoundary === -1) {
  console.error("Could not find sql-data-analysis boundary in coursesData.js");
  process.exit(1);
}

// Check if finalTest already exists in python course in coursesData.js
const pySlice = coursesData.slice(0, pyEndBoundary);
if (pySlice.includes('finalTest:')) {
  console.log("finalTest already exists in coursesData.js python course");
} else {
  // Find the end of python modules array: '      }\n    ]\n  },'
  const targetStr = '    ]\n  },\n  {\n    id: "sql-data-analysis"';
  const targetStrCRLF = '    ]\r\n  },\r\n  {\r\n    id: "sql-data-analysis"';
  
  const testJson = JSON.stringify(PYTHON_FINAL_TEST, null, 4).split('\n').map(line => '    ' + line).join('\n').trim();
  
  if (coursesData.includes(targetStr)) {
    coursesData = coursesData.replace(targetStr, `    ],\n    finalTest: ${testJson}\n  },\n  {\n    id: "sql-data-analysis"`);
    console.log("Inserted finalTest into coursesData.js (LF)");
  } else if (coursesData.includes(targetStrCRLF)) {
    coursesData = coursesData.replace(targetStrCRLF, `    ],\r\n    finalTest: ${testJson}\r\n  },\r\n  {\r\n    id: "sql-data-analysis"`);
    console.log("Inserted finalTest into coursesData.js (CRLF)");
  } else {
    // Regex match
    const regex = /(modules:\s*\[[\s\S]*?\n\s*\])(\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*["']sql-data-analysis["'])/;
    if (regex.test(coursesData)) {
      coursesData = coursesData.replace(regex, `$1,\n    finalTest: ${testJson}$2`);
      console.log("Inserted finalTest into coursesData.js (Regex)");
    } else {
      console.error("Could not match insertion point for finalTest in coursesData.js");
    }
  }
  fs.writeFileSync('src/data/coursesData.js', coursesData, 'utf8');
}

// 2. Update server/seed.js
let seed = fs.readFileSync('server/seed.js', 'utf8');
// In seed.js, python finalTest is:
// finalTest: {
//   id: "py-final-test",
//   ...
// },
// finalProject: { ...
const seedFinalTestRegex = /finalTest:\s*\{[\s\S]*?id:\s*["']py-final-test["'][\s\S]*?\},\s*\n\s*finalProject:/;
if (seedFinalTestRegex.test(seed)) {
  const testJson = JSON.stringify(PYTHON_FINAL_TEST, null, 4).split('\n').map(line => '    ' + line).join('\n').trim();
  seed = seed.replace(seedFinalTestRegex, `finalTest: ${testJson},\n    finalProject:`);
  fs.writeFileSync('server/seed.js', seed, 'utf8');
  console.log("Replaced finalTest in server/seed.js with 25 tough questions");
} else {
  console.log("Could not find seedFinalTestRegex in server/seed.js");
}

console.log("Done updating data files.");

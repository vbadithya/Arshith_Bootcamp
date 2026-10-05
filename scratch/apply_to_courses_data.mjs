import fs from 'fs';
import { SQL_WEB_DS_MCQS } from './sql_web_ds_mcqs.mjs';

// Read coursesData.js
let coursesData = fs.readFileSync('src/data/coursesData.js', 'utf8');

// For each module in SQL_WEB_DS_MCQS
for (const [modId, mcqs] of Object.entries(SQL_WEB_DS_MCQS)) {
  const modPattern = new RegExp(`id:\\s*["']${modId}["'][\\s\\S]*?readingMaterial:\\s*\\{([\\s\\S]*?)(?:\\n\\s*\\}[\\s\\S]*?\\})`);
  const match = coursesData.match(modPattern);
  if (!match) {
    console.log(`Warning: Could not find readingMaterial for ${modId} in coursesData.js`);
    continue;
  }
  
  // Check if mcqs already present
  if (match[0].includes('mcqs:')) {
    console.log(`Module ${modId} already has mcqs`);
    continue;
  }

  // Find references: [ ... ] or the end of readingMaterial
  // In coursesData.js, readingMaterial ends with references: [ ... ] \n        }
  const refPattern = new RegExp(`(id:\\s*["']${modId}["'][\\s\\S]*?references:\\s*\\[[\\s\\S]*?\\])(\\s*\\n\\s*\\})`);
  if (!coursesData.match(refPattern)) {
    console.log(`Could not find references closing for ${modId}`);
    continue;
  }

  const mcqJson = JSON.stringify(mcqs, null, 12).trim();
  const replacement = `$1,\n          mcqs: ${mcqJson}$2`;
  coursesData = coursesData.replace(refPattern, replacement);
  console.log(`Successfully injected MCQs for ${modId} in coursesData.js`);
}

fs.writeFileSync('src/data/coursesData.js', coursesData, 'utf8');
console.log('Finished updating src/data/coursesData.js');

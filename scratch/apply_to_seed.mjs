import fs from 'fs';
import { SQL_WEB_DS_MCQS } from './sql_web_ds_mcqs.mjs';

let seed = fs.readFileSync('server/seed.js', 'utf8');

const targets = ['sql-mod-1', 'web-mod-1', 'ds-mod-1'];

for (const modId of targets) {
  const mcqs = SQL_WEB_DS_MCQS[modId];
  if (!mcqs) continue;

  const pattern = new RegExp(`(id:\\s*["']${modId}["'][\\s\\S]*?keyTakeaways:\\s*\\[[\\s\\S]*?\\])(\\s*\\n\\s*\\})`);
  if (!seed.match(pattern)) {
    console.log(`Could not find keyTakeaways pattern for ${modId} in seed.js`);
    continue;
  }

  const mcqJson = JSON.stringify(mcqs, null, 10).trim();
  const replacement = `$1,\n          mcqs: ${mcqJson}$2`;
  seed = seed.replace(pattern, replacement);
  console.log(`Injected MCQs for ${modId} into server/seed.js`);
}

fs.writeFileSync('server/seed.js', seed, 'utf8');
console.log('Finished updating server/seed.js');

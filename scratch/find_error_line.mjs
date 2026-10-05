import fs from 'fs';

const c = fs.readFileSync('src/data/coursesData.js', 'utf8');

// Use native dynamic import data URL to get exact line and column of the syntax error!
const b64 = Buffer.from(c).toString('base64');
try {
  await import(`data:text/javascript;base64,${b64}`);
  console.log("NO SYNTAX ERROR in coursesData.js!");
} catch (e) {
  console.log("Error message:", e.message);
  console.log("Error stack:", e.stack);
}

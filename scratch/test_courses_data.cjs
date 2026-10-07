const fs = require('fs');

try {
  const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
  console.log('coursesData.js file length:', content.length, 'bytes');
  console.log('Includes sql-data-analysis?', content.includes('sql-data-analysis'));
  console.log('Includes Module 01 — Introduction to SQL?', content.includes('Module 01 — Introduction to SQL'));
  console.log('Includes Module 15 — SQL for Data Analytics?', content.includes('Module 15 — SQL for Data Analytics'));
} catch (e) {
  console.error('Error reading coursesData.js:', e);
}

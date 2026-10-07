const fs = require('fs');

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
console.log('Includes sql-data-analysis?', content.includes('sql-data-analysis'));
console.log('Includes sql-mastery?', content.includes('sql-mastery'));

const matches = content.match(/id:\s*"([^"]+)"/g);
console.log('All IDs:', matches);

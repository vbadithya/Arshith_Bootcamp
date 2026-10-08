const fs = require('fs');

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
const sqlIndex = content.indexOf('sql-data-analysis');
const sqlBlock = content.slice(sqlIndex, sqlIndex + 50000);

const completedMatches = sqlBlock.match(/completed:\s*(true|false)/g);
console.log('SQL course completed flags in coursesData.js:', completedMatches);

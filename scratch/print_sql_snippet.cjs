const fs = require('fs');

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
const sqlIndex = content.indexOf('sql-data-analysis');
console.log(content.slice(sqlIndex, sqlIndex + 2000));

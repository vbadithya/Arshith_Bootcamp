const fs = require('fs');

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
const sqlIndex = content.indexOf('sql-data-analysis');
const sqlSlice = content.slice(sqlIndex, sqlIndex + 5000);

console.log(sqlSlice.slice(1000, 3000));

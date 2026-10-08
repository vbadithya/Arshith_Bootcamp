const fs = require('fs');

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
const sqlIndex = content.indexOf('sql-data-analysis');
const sqlSlice = content.slice(sqlIndex, sqlIndex + 50000);

const isCompletedMatches = sqlSlice.match(/completed:\s*false/g);
console.log('Total completed: false in SQL course:', isCompletedMatches ? isCompletedMatches.length : 0);

const isCompletedTrueMatches = sqlSlice.match(/completed:\s*true/g);
console.log('Total completed: true in SQL course:', isCompletedTrueMatches ? isCompletedTrueMatches.length : 0);

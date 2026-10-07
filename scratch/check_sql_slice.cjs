const fs = require('fs');

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
const sqlIndex = content.indexOf('sql-data-analysis');
const nextCourseIndex = content.indexOf('web-development');
const sqlSlice = content.slice(sqlIndex, nextCourseIndex);

const modMatches = sqlSlice.match(/title:\s*"Module\s*\d+/g);
console.log('Module titles found in SQL slice:', modMatches);
const completedTrue = sqlSlice.match(/completed:\s*true/g);
console.log('completed: true count:', completedTrue ? completedTrue.length : 0);
const completedFalse = sqlSlice.match(/completed:\s*false/g);
console.log('completed: false count:', completedFalse ? completedFalse.length : 0);

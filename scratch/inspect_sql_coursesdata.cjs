const fs = require('fs');

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
const sqlIndex = content.indexOf('id: "sql-data-analysis"');
const nextCourseIndex = content.indexOf('id: "web-development"');
const sqlSlice = content.slice(sqlIndex, nextCourseIndex);

console.log('SQL slice length:', sqlSlice.length);
const progressMatch = sqlSlice.match(/progress:\s*(\d+)/);
console.log('Progress in coursesData.js:', progressMatch ? progressMatch[1] : 'not found');
const moduleCount = (sqlSlice.match(/id:\s*"sql-mod-/g) || []).length;
console.log('Module count in coursesData.js:', moduleCount);
const completedCount = (sqlSlice.match(/completed:\s*true/g) || []).length;
console.log('Completed count in coursesData.js:', completedCount);

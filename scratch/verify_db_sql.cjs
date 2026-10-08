const fs = require('fs');

const db = JSON.parse(fs.readFileSync('./server/data/db.json', 'utf8'));
const sqlCourse = db.courses.find(c => c.id.includes('sql') || c.title.toLowerCase().includes('sql'));

console.log('DB SQL Course:', {
  id: sqlCourse.id,
  title: sqlCourse.title,
  progress: sqlCourse.progress,
  totalModules: sqlCourse.modules.length,
  completedModules: sqlCourse.modules.filter(m => m.completed).length,
  uncompletedModules: sqlCourse.modules.filter(m => !m.completed).length
});

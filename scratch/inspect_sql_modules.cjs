const fs = require('fs');

const db = JSON.parse(fs.readFileSync('./server/data/db.json', 'utf8'));
const sqlDb = db.courses.find(c => c.id === 'sql-mastery');

console.log('=== DB SQL MODULES OVERVIEW ===');
if (sqlDb && sqlDb.modules) {
  sqlDb.modules.forEach(m => {
    const rm = m.readingMaterial || {};
    console.log(`Module ID: ${m.id} | Title: "${m.title}"`);
    console.log(`  Intro length: ${rm.introduction ? rm.introduction.length : 0} chars`);
    console.log(`  Objectives count: ${rm.objectives ? rm.objectives.length : 0}`);
    console.log(`  Sections count: ${rm.sections ? rm.sections.length : 0}`);
    console.log(`  Code Examples count: ${rm.codeExamples ? rm.codeExamples.length : 0}`);
    console.log(`  Key Takeaways count: ${rm.keyTakeaways ? rm.keyTakeaways.length : 0}`);
    console.log(`  Practice Exercises count: ${rm.practiceExercises ? rm.practiceExercises.length : 0}`);
    console.log('--------------------------------------------------');
  });
}

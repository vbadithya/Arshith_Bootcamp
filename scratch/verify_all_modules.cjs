const fs = require('fs');

const db = JSON.parse(fs.readFileSync('./server/data/db.json', 'utf8'));
const sqlCourse = db.courses.find(c => c.id === 'sql-mastery' || c.id === 'sql-data-analysis');

console.log(`SQL Course Found: ${sqlCourse.title}`);
console.log(`Total Modules: ${sqlCourse.modules.length}\n`);

sqlCourse.modules.forEach((mod, idx) => {
  const rm = mod.readingMaterial;
  const numSections = rm.sections ? rm.sections.length : 0;
  const numCodeEx = rm.codeExamples ? rm.codeExamples.length : 0;
  const numObjectives = rm.objectives ? rm.objectives.length : 0;
  const textLength = JSON.stringify(rm).length;
  console.log(`Mod ${(idx + 1).toString().padStart(2, '0')}: ${mod.title} | ${numSections} Sections | ${numCodeEx} Code Ex | ${numObjectives} Objectives | ${textLength} chars`);
});

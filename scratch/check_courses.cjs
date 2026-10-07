const fs = require('fs');

const db = JSON.parse(fs.readFileSync('./server/data/db.json', 'utf8'));
console.log('--- DB COURSES ---');
db.courses.forEach(c => {
  const completedMods = c.modules ? c.modules.filter(m => m.completed).length : 0;
  const totalMods = c.modules ? c.modules.length : 0;
  console.log(`Course ID: ${c.id} | Title: "${c.title}" | Progress: ${c.progress}% | Completed Modules: ${completedMods}/${totalMods}`);
});

const content = fs.readFileSync('./src/data/coursesData.js', 'utf8');
console.log('\n--- COURSESDATA.JS ---');
const courseBlocks = content.split(/id:\s*"/).slice(1);
courseBlocks.forEach(block => {
  const idMatch = block.match(/^([^"]+)"/);
  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const progressMatch = block.match(/progress:\s*(\d+)/);
  const completedModsCount = (block.match(/completed:\s*true/g) || []).length;
  const totalModsCount = (block.match(/completed:\s*(true|false)/g) || []).length;
  if (idMatch && titleMatch) {
    console.log(`Course ID: ${idMatch[1]} | Title: "${titleMatch[1]}" | Progress: ${progressMatch ? progressMatch[1] : 0}% | Completed Modules: ${completedModsCount}/${totalModsCount}`);
  }
});

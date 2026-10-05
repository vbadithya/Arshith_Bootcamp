import fs from 'fs';

const db = JSON.parse(fs.readFileSync('server/data/db.json', 'utf8'));

db.courses.forEach((course, cIdx) => {
  console.log(`Course ${cIdx + 1}: ${course.id} - "${course.title}" (${course.modules ? course.modules.length : 0} modules)`);
  if (course.modules) {
    let withMcq = 0;
    let withoutMcq = 0;
    course.modules.forEach((mod, mIdx) => {
      const mcqCount = mod.readingMaterial && mod.readingMaterial.mcqs ? mod.readingMaterial.mcqs.length : 0;
      if (mcqCount > 0) withMcq++;
      else withoutMcq++;
      console.log(`  Module ${mIdx + 1} (${mod.id}): ${mod.title} -> ${mcqCount} MCQs`);
    });
    console.log(`  => Total with MCQs: ${withMcq}, without: ${withoutMcq}\n`);
  }
});

import { INITIAL_COURSES } from '../src/data/coursesData.js';

INITIAL_COURSES.forEach((course, cIdx) => {
  console.log(`Course ${cIdx + 1}: ${course.id} - "${course.title}" (${course.modules ? course.modules.length : 0} modules)`);
  if (course.modules) {
    let withMcq = 0;
    let withoutMcq = 0;
    course.modules.forEach((mod, mIdx) => {
      const mcqCount = mod.readingMaterial && mod.readingMaterial.mcqs ? mod.readingMaterial.mcqs.length : 0;
      if (mcqCount > 0) withMcq++;
      else withoutMcq++;
    });
    console.log(`   -> Modules with MCQs: ${withMcq}, without MCQs: ${withoutMcq}`);
    if (withoutMcq > 0) {
      course.modules.forEach((mod, mIdx) => {
        const mcqCount = mod.readingMaterial && mod.readingMaterial.mcqs ? mod.readingMaterial.mcqs.length : 0;
        if (mcqCount === 0) {
          console.log(`      * Missing MCQ: Module ${mIdx + 1} (${mod.id}): "${mod.title}"`);
        }
      });
    }
  }
});

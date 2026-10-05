import { PYTHON_FINAL_TEST } from './python_final_test.mjs';

const original = [...PYTHON_FINAL_TEST.questions];
const zigzag = [];
let left = 0;
let right = original.length - 1;
while (left <= right) {
  if (left === right) {
    zigzag.push(original[left]);
  } else {
    zigzag.push(original[left]);
    zigzag.push(original[right]);
  }
  left++;
  right--;
}

zigzag.forEach((q, idx) => {
  q.questionNumber = idx + 1;
  console.log(`Q${idx + 1}: [${q.moduleRef}] ${q.topic}`);
});

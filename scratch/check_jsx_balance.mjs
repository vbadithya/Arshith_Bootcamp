import fs from 'fs';

const content = fs.readFileSync('src/pages/LearningPage.jsx', 'utf8');
const lines = content.split('\n');

let balance = 0;
for (let i = 758; i < 1264; i++) {
  const line = lines[i];
  // Simple check for unclosed curly braces in JSX
  for (let ch of line) {
    if (ch === '{') balance++;
    if (ch === '}') balance--;
  }
}
console.log('Curly brace balance between line 759 and 1264:', balance);

let tagStack = [];
for (let i = 758; i < 1264; i++) {
  const line = lines[i];
  const tags = line.match(/<\/?([a-zA-Z0-9]+)[^>]*\/?>/g) || [];
  for (let tag of tags) {
    if (tag.endsWith('/>')) continue;
    if (tag.startsWith('</')) {
      const tagName = tag.match(/<\/([a-zA-Z0-9]+)/)[1];
      const last = tagStack.pop();
      if (last !== tagName) {
        console.log(`Line ${i+1}: Mismatched closing tag </${tagName}>, expected </${last}>`);
      }
    } else {
      const tagName = tag.match(/<([a-zA-Z0-9]+)/)[1];
      tagStack.push(tagName);
    }
  }
}
console.log('Unclosed tags at line 1264:', tagStack);

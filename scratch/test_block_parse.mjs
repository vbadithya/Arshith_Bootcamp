import { parse } from '@babel/parser';
import fs from 'fs';

const code = fs.readFileSync('src/pages/LearningPage.jsx', 'utf8');
const lines = code.split('\n');

// Try parsing line 555 to 1513 wrapped in fragment
const block = '<>' + lines.slice(554, 1513).join('\n') + '</>';

try {
  parse(block, { plugins: ['jsx'] });
  console.log('Block parsed successfully!');
} catch (e) {
  console.log('Block error at line', e.loc.line, 'col', e.loc.column, ':', e.message);
  const errLine = block.split('\n')[e.loc.line - 1];
  console.log('Line was:', errLine);
}

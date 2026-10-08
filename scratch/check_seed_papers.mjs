import fs from 'fs';
const content = fs.readFileSync('server/seed.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('"id": "qp-') || l.includes('paperCode')) {
    console.log((i+1) + ': ' + l.trim());
  }
});

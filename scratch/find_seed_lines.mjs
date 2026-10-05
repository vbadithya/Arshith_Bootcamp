import fs from 'fs';

const c = fs.readFileSync('server/seed.js', 'utf8');
const lines = c.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('id: "sql-') || l.includes('id: "web-') || l.includes('id: "data-science-') || l.includes('id: "ds-')) {
    console.log(idx + 1, l.trim());
  }
});

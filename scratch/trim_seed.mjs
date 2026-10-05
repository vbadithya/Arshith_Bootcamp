import fs from 'fs';

const s = fs.readFileSync('server/seed.js', 'utf8');
const marker = "console.log('Database successfully seeded at:', DB_FILE);";
const idx = s.indexOf(marker);
if (idx === -1) {
  console.log("Marker not found in seed.js");
  process.exit(1);
}

const clean = s.substring(0, idx + marker.length) + '\n';
fs.writeFileSync('server/seed.js', clean, 'utf8');
console.log("Successfully trimmed server/seed.js!");

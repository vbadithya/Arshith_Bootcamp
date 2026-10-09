import json

# Load current DB
curr_db = json.load(open('server/data/db.json', encoding='utf-8'))

# Load Chanukya's DB
ch_db = json.load(open('chanukya_db.json', encoding='utf-16'))

# Extract Web Dev and AI courses
ch_web = next(c for c in ch_db['courses'] if c['id'] == 'web-development')
ch_ai = next(c for c in ch_db['courses'] if c['id'] == 'data-science-ai')

merged = []
for c in curr_db['courses']:
    if c['id'] == 'web-development':
        merged.append(ch_web)
    elif c['id'] == 'data-science-ai':
        merged.append(ch_ai)
    else:
        merged.append(c)

curr_db['courses'] = merged

# Save merged DB
with open('server/data/db.json', 'w', encoding='utf-8') as f:
    json.dump(curr_db, f, indent=2)

# Save coursesData.js
js_content = 'export const INITIAL_COURSES = ' + json.dumps(merged, indent=2) + ';\nexport const COURSES = INITIAL_COURSES;\n'

old_content = open('old_coursesData.js', encoding='utf-16').read()
categories_start = old_content.find('export const CATEGORIES')
js_content += old_content[categories_start:]

with open('src/data/coursesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

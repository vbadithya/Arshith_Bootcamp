// scratch/add_3_python_projects.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

export const PYTHON_3_PROJECTS = [
  {
    id: "py-proj-1",
    projectNumber: 1,
    title: "Project 1: Automated Server Log Analyzer & Summary Report",
    subtitle: "Module 08 & 09 — Strings, File I/O & Dictionaries",
    difficulty: "Beginner",
    estimatedTime: "1 – 2 Hours",
    pageLength: "1 – 2 Pages",
    description: "Build a lightweight Python script that opens a web server log file (access.log), parses HTTP status codes and IP addresses, computes error statistics, and writes a clean executive summary report (log_summary.txt).",
    objectives: [
      "Open and read files safely using context managers ('with open')",
      "Parse and sanitize log text using string split() and strip() methods",
      "Accumulate frequency counts using Python dictionaries",
      "Format and write analytical metrics into an output file"
    ],
    requirements: [
      "Read all lines from a sample access.log file",
      "Extract client IP address and HTTP status code from each line",
      "Count total requests, unique IP count, and tally of status codes (200, 404, 500)",
      "Output a formatted summary report to 'log_summary.txt'"
    ],
    starterCode: `# Project 1: Automated Server Log File Analyzer
# File: log_analyzer.py

def analyze_logs(log_filepath, report_filepath):
    status_counts = {}
    unique_ips = set()
    total_requests = 0

    print(f"Reading log file: {log_filepath}...")
    
    with open(log_filepath, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            total_requests += 1
            parts = line.split()
            
            # Extract IP and HTTP Status Code
            ip = parts[0]
            status_code = parts[-2] if len(parts) >= 2 else "UNKNOWN"
            
            unique_ips.add(ip)
            status_counts[status_code] = status_counts.get(status_code, 0) + 1

    # Write executive summary report
    with open(report_filepath, 'w', encoding='utf-8') as out:
        out.write("=========================================\\n")
        out.write("       WEB SERVER LOG SUMMARY REPORT      \\n")
        out.write("=========================================\\n")
        out.write(f"Total Requests Processed : {total_requests}\\n")
        out.write(f"Unique Client IPs        : {len(unique_ips)}\\n\\n")
        out.write("HTTP Status Code Breakdown:\\n")
        for code, count in sorted(status_counts.items()):
            pct = (count / total_requests) * 100
            out.write(f"  - Status {code}: {count} requests ({pct:.1f}%)\\n")
        out.write("=========================================\\n")
        
    print(f"Report generated successfully: {report_filepath}")

if __name__ == '__main__':
    # Sample run
    analyze_logs('sample_access.log', 'log_summary.txt')
`,
    expectedOutput: `=========================================
       WEB SERVER LOG SUMMARY REPORT      
=========================================
Total Requests Processed : 120
Unique Client IPs        : 34

HTTP Status Code Breakdown:
  - Status 200: 98 requests (81.7%)
  - Status 404: 17 requests (14.2%)
  - Status 500: 5 requests (4.2%)
=========================================`
  },
  {
    id: "py-proj-2",
    projectNumber: 2,
    title: "Project 2: Student Grade Tracker & CGPA Calculator",
    subtitle: "Module 06, 07 & 11 — Functions, Dictionaries & OOP",
    difficulty: "Beginner to Intermediate",
    estimatedTime: "2 Hours",
    pageLength: "1 – 2 Pages",
    description: "Design an Object-Oriented student grading system. Define a Student class that models candidates, stores subject scores, calculates percentage and CGPA, and outputs a formatted terminal grade sheet.",
    objectives: [
      "Construct a clean Student class with __init__ and instance methods",
      "Manage subject-to-mark mappings using nested dictionaries",
      "Implement a deterministic CGPA calculation method (10-point scale)",
      "Format terminal table output with f-string alignment"
    ],
    requirements: [
      "Class Student with attributes: name, roll_no, subjects (dictionary of subject -> mark)",
      "Method add_mark(subject, score) with validation (0 to 100)",
      "Method get_cgpa() returning 10-point grade point average",
      "Method generate_report_card() printing an aligned terminal report"
    ],
    starterCode: `# Project 2: Student Grade Tracker & CGPA Calculator
# File: grade_tracker.py

class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll_no = roll_no
        self.marks = {}

    def add_mark(self, subject, score):
        if not (0 <= score <= 100):
            raise ValueError(f"Score {score} must be between 0 and 100.")
        self.marks[subject] = score

    def get_average(self):
        if not self.marks:
            return 0.0
        return sum(self.marks.values()) / len(self.marks)

    def get_cgpa(self):
        # 10-point scale: Percentage / 9.5
        avg = self.get_average()
        return round(min(10.0, avg / 9.5), 2)

    def print_report_card(self):
        print("\\n" + "=" * 45)
        print(f"       STUDENT ACADEMIC REPORT CARD        ")
        print("=" * 45)
        print(f"Candidate Name : {self.name}")
        print(f"Roll Number    : {self.roll_no}")
        print("-" * 45)
        print(f"{'Subject':<25} {'Score':>10} {'Status':>8}")
        print("-" * 45)
        for sub, score in self.marks.items():
            status = "PASS" if score >= 40 else "FAIL"
            print(f"{sub:<25} {score:>10} {status:>8}")
        print("-" * 45)
        print(f"Percentage Score : {self.get_average():.1f}%")
        print(f"Cumulative CGPA  : {self.get_cgpa()} / 10.0")
        print("=" * 45)

if __name__ == '__main__':
    s = Student("Arshith Kumar", "2026-PY-101")
    s.add_mark("Python Programming", 96)
    s.add_mark("Data Structures", 92)
    s.add_mark("Database Management", 94)
    s.add_mark("Computer Networks", 88)
    s.print_report_card()
`,
    expectedOutput: `=============================================
       STUDENT ACADEMIC REPORT CARD        
=============================================
Candidate Name : Arshith Kumar
Roll Number    : 2026-PY-101
---------------------------------------------
Subject                       Score   Status
---------------------------------------------
Python Programming               96     PASS
Data Structures                  92     PASS
Database Management              94     PASS
Computer Networks                88     PASS
---------------------------------------------
Percentage Score : 92.5%
Cumulative CGPA  : 9.74 / 10.0
=============================================`
  },
  {
    id: "py-proj-3",
    projectNumber: 3,
    title: "Project 3: SQLite Contact Book & Search Utility",
    subtitle: "Module 10 & 15 — Exceptions & SQLite Database Connectivity",
    difficulty: "Intermediate",
    estimatedTime: "2 – 3 Hours",
    pageLength: "1 – 2 Pages",
    description: "Develop a persistent command-line address book backed by SQLite. Create a contacts table, insert and validate candidate entries, query records using parameterized search filters, and handle duplicate errors gracefully.",
    objectives: [
      "Establish SQLite database connection and cursor lifecycle with sqlite3",
      "Execute DDL statements to create tables with UNIQUE constraints",
      "Prevent SQL Injection vulnerabilities using parameterized '?' queries",
      "Implement interactive CLI menu for inserting and searching contacts"
    ],
    requirements: [
      "Table 'contacts' with columns: id (INTEGER PRIMARY KEY), name (TEXT), email (TEXT UNIQUE), phone (TEXT)",
      "Function add_contact(name, email, phone) handling sqlite3.IntegrityError for duplicate emails",
      "Function search_contacts(keyword) searching name or email via LIKE ? queries",
      "Automatic connection commit and proper connection close"
    ],
    starterCode: `# Project 3: SQLite Contact Book & Search Utility
# File: contacts_app.py

import sqlite3

class ContactBook:
    def __init__(self, db_file="contacts.db"):
        self.conn = sqlite3.connect(db_file)
        self.cursor = self.conn.cursor()
        self.setup_table()

    def setup_table(self):
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                phone TEXT NOT NULL
            )
        ''')
        self.conn.commit()

    def add_contact(self, name, email, phone):
        try:
            self.cursor.execute('''
                INSERT INTO contacts (name, email, phone)
                VALUES (?, ?, ?)
            ''', (name, email, phone))
            self.conn.commit()
            print(f"✓ Contact '{name}' added successfully.")
            return True
        except sqlite3.IntegrityError:
            print(f"✗ Error: Email '{email}' already exists in database.")
            return False

    def search_contacts(self, keyword):
        query = "%" + keyword.strip() + "%"
        self.cursor.execute('''
            SELECT id, name, email, phone FROM contacts
            WHERE name LIKE ? OR email LIKE ?
            ORDER BY name ASC
        ''', (query, query))
        rows = self.cursor.fetchall()
        
        print(f"\\nSearch results for '{keyword}' ({len(rows)} found):")
        print("-" * 50)
        for r in rows:
            print(f"ID: {r[0]} | Name: {r[1]} | Email: {r[2]} | Phone: {r[3]}")
        print("-" * 50)
        return rows

    def close(self):
        self.conn.close()

if __name__ == '__main__':
    cb = ContactBook()
    cb.add_contact("Arshith Kumar", "arshith@example.com", "+91-9876543210")
    cb.add_contact("Bhavana Kolla", "bhavana@example.com", "+91-9876543211")
    cb.add_contact("Chandan Verma", "chandan@example.com", "+91-9876543212")
    cb.search_contacts("Arshith")
    cb.close()
`,
    expectedOutput: `✓ Contact 'Arshith Kumar' added successfully.
✓ Contact 'Bhavana Kolla' added successfully.
✓ Contact 'Chandan Verma' added successfully.

Search results for 'Arshith' (1 found):
--------------------------------------------------
ID: 1 | Name: Arshith Kumar | Email: arshith@example.com | Phone: +91-9876543210
--------------------------------------------------`
  }
];

// Update src/data/coursesData.js
const { INITIAL_COURSES, CATEGORIES, STUDENT_PROFILE, SAMPLE_CERTIFICATES } = await import('../src/data/coursesData.js');

const updatedCourses = INITIAL_COURSES.map(c => {
  if (c.id === 'python-programming') {
    return {
      ...c,
      projects: PYTHON_3_PROJECTS
    };
  }
  return c;
});

const coursesDataPath = path.join(rootDir, 'src', 'data', 'coursesData.js');
const exportString = `export const INITIAL_COURSES = ${JSON.stringify(updatedCourses, null, 2)};\n\n` +
  `export const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};\n\n` +
  `export const STUDENT_PROFILE = ${JSON.stringify(STUDENT_PROFILE, null, 2)};\n\n` +
  `export const SAMPLE_STUDENT = STUDENT_PROFILE;\n\n` +
  `export const SAMPLE_CERTIFICATES = ${JSON.stringify(SAMPLE_CERTIFICATES, null, 2)};\n\n` +
  `export const COURSES = INITIAL_COURSES;\n`;

fs.writeFileSync(coursesDataPath, exportString, 'utf8');
console.log('src/data/coursesData.js updated with 3 Python projects.');

// Update server/data/db.json
const dbPath = path.join(rootDir, 'server', 'data', 'db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const pyDbCourse = db.courses.find(c => c.id === 'python-programming');
if (pyDbCourse) {
  pyDbCourse.projects = PYTHON_3_PROJECTS;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('server/data/db.json updated with 3 Python projects.');
}

// Update server/seed.js
const seedPath = path.join(rootDir, 'server', 'seed.js');
fs.writeFileSync(seedPath, `// Database Seed Data\nexport const initialData = ${JSON.stringify(db, null, 2)};\n`, 'utf8');
console.log('server/seed.js updated with 3 Python projects.');

console.log('Successfully injected 3 small Python projects!');

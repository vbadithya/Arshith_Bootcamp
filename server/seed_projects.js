import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'data', 'db.json');

const DEFAULT_PROJECTS_MAP = {
  'python-programming': [
    {
      id: 'proj-python-1',
      courseId: 'python-programming',
      projectNumber: 1,
      title: 'Python Interactive Calculator & Unit Converter',
      shortDescription: 'Build a CLI-based interactive financial & measurement unit converter supporting menu options, error handling, and file logging.',
      detailedDescription: 'In this project, you will build a Python console application that performs mathematical calculations, temperature/currency unit conversions, and logs calculation history to a local text file using file I/O and try/except blocks.',
      objective: 'Master Python fundamentals including functions, input parsing, loops, exception handling, and file operations.',
      requirements: [
        'Implement an interactive CLI loop using while loops and break conditions.',
        'Create modular functions for calculation algorithms and unit conversion.',
        'Use try/except blocks to catch ZeroDivisionError and ValueError on user input.',
        'Save calculation history to a history.txt log file with timestamps.'
      ],
      technologies: ['Python 3', 'CLI Architecture', 'File I/O', 'Datetime', 'Exception Handling'],
      expectedOutput: 'A clean, bug-free Python script (calculator.py) with structured functions and calculation log output.',
      difficulty: 'Beginner',
      estimatedTime: '2–3 Days',
      submissionInstructions: '1. Complete calculator.py locally. 2. Push repository to GitHub. 3. Submit GitHub URL.',
      resources: 'https://docs.python.org/3/tutorial/controlflow.html',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-python-2',
      courseId: 'python-programming',
      projectNumber: 2,
      title: 'CLI Task & Expense Management System',
      shortDescription: 'Create an object-oriented task and expense manager using JSON file persistence and list/dictionary data structures.',
      detailedDescription: 'Build an OOP-driven Python application that allows users to create, categorize, update, search, and delete tasks and daily expenses. Data must be serialized to JSON files.',
      objective: 'Apply Object-Oriented Programming (Classes, Methods, Enums) and JSON data serialization in Python.',
      requirements: [
        'Design Task and Expense classes with properties (id, title, category, amount, status, date).',
        'Implement CRUD operations for tasks and expenses.',
        'Persist and load records from data.json file.',
        'Filter tasks by completion status and summarize expenses by category.'
      ],
      technologies: ['Python 3', 'OOP', 'JSON Serialization', 'Data Structures', 'Modules'],
      expectedOutput: 'An executable Python application with CLI menu interface and persistent JSON storage.',
      difficulty: 'Intermediate',
      estimatedTime: '3–4 Days',
      submissionInstructions: 'Upload complete project folder with README.md to GitHub and paste repository link.',
      resources: 'https://docs.python.org/3/library/json.html',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-python-3',
      courseId: 'python-programming',
      projectNumber: 3,
      title: 'API & Web Scraping Data Dashboard',
      shortDescription: 'Fetch web data using urllib/requests & BeautifulSoup, process XML/JSON payloads, and store records into SQLite database.',
      detailedDescription: 'Build an automated Python data pipeline that scrapes live course or weather data, parses JSON/XML responses, and inserts structured records into a relational SQLite database.',
      objective: 'Demonstrate proficiency in network programming, web scraping, API parsing, and relational SQL database storage.',
      requirements: [
        'Fetch remote web API data using requests/urllib.',
        'Parse HTML DOM tree using BeautifulSoup or XML/JSON structures.',
        'Create SQLite tables using sqlite3 and perform insert/select queries.',
        'Generate summary analytical statistics printed to stdout or written to CSV.'
      ],
      technologies: ['Python 3', 'BeautifulSoup4', 'Requests / urllib', 'SQLite3', 'SQL Queries'],
      expectedOutput: 'Complete Python scraping & database script with database file (.sqlite3) schema and documentation.',
      difficulty: 'Advanced',
      estimatedTime: '4–5 Days',
      submissionInstructions: 'Commit project code and database initialization script to GitHub repository.',
      resources: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  'web-development-bootcamp': [
    {
      id: 'proj-web-1',
      courseId: 'web-development-bootcamp',
      projectNumber: 1,
      title: 'Personal Portfolio Website',
      shortDescription: 'Build a responsive personal portfolio website with HTML5 semantic elements, CSS3 flexbox/grid, and JavaScript interactivity.',
      detailedDescription: 'Design and code a modern personal portfolio featuring a Hero section, About Me, Skills showcase, Projects gallery, and an interactive Contact form.',
      objective: 'Master HTML5 semantic layout structure, CSS flexbox and grid responsiveness, and DOM manipulation.',
      requirements: [
        'Semantic HTML5 structure (header, main, section, nav, footer).',
        'Responsive layout using CSS media queries (mobile, tablet, desktop).',
        'Interactive contact form validation using JavaScript.',
        'Dark mode / Light mode theme toggle option.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox & Grid', 'Responsive Design'],
      expectedOutput: 'Fully responsive portfolio website hosted or stored in GitHub repository.',
      difficulty: 'Beginner',
      estimatedTime: '2–3 Days',
      submissionInstructions: 'Push HTML/CSS/JS code to GitHub and submit repository URL.',
      resources: 'https://developer.mozilla.org/en-US/docs/Learn',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-web-2',
      courseId: 'web-development-bootcamp',
      projectNumber: 2,
      title: 'Responsive Company Landing Page',
      shortDescription: 'Create a high-converting corporate landing page with custom CSS styling, animations, and modal dialogs.',
      detailedDescription: 'Construct a professional business landing page including features section, pricing cards, customer testimonials, and smooth scrolling navigation.',
      objective: 'Demonstrate modern CSS UI design, responsive layout patterns, and CSS keyframe animations.',
      requirements: [
        'Pixel-perfect responsive design across screen sizes.',
        'Custom interactive component modal dialogs and dropdown menus.',
        'Smooth scroll navigation and subtle CSS hover transitions.',
        'Clean typography and color palette.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animations', 'UX Best Practices'],
      expectedOutput: 'Clean, production-grade landing page repository with responsive layout.',
      difficulty: 'Intermediate',
      estimatedTime: '3–4 Days',
      submissionInstructions: 'Upload code to GitHub repository and submit link.',
      resources: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-web-3',
      courseId: 'web-development-bootcamp',
      projectNumber: 3,
      title: 'Multi-page E-Commerce Web Application',
      shortDescription: 'Build a multi-page web app with product catalog, search filtering, dynamic shopping cart, and checkout modal.',
      detailedDescription: 'Develop an end-to-end frontend web application featuring a home page, product listing with category filter & search, cart item management using LocalStorage, and simulated checkout.',
      objective: 'Master state management with LocalStorage, dynamic DOM rendering, and SPA-style routing concepts.',
      requirements: [
        'Dynamic rendering of product items from JSON data.',
        'Real-time product category filtering and keyword search input.',
        'Shopping cart state saved in LocalStorage (add, remove, quantity update).',
        'Order checkout summary modal with form validation.'
      ],
      technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'LocalStorage API', 'DOM Manipulation'],
      expectedOutput: 'Complete e-commerce web app repository with full shopping cart workflow.',
      difficulty: 'Advanced',
      estimatedTime: '4–5 Days',
      submissionInstructions: 'Submit GitHub repository URL with clear README instructions.',
      resources: 'https://javascript.info/localstorage',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  'react-js-mastery': [
    {
      id: 'proj-react-1',
      courseId: 'react-js-mastery',
      projectNumber: 1,
      title: 'Interactive Calculator & Unit Converter App',
      shortDescription: 'Build a React component-driven calculator and unit converter with state management and reusable UI components.',
      detailedDescription: 'Develop a modern React application that performs standard calculations and metric unit conversions using useState, custom hooks, and modular UI components.',
      objective: 'Learn React component hierarchy, JSX syntax, state hooks, and event handling.',
      requirements: [
        'Break UI into modular React components (Button, Display, Keypad).',
        'Use useState for internal state management.',
        'Support keyboard key events and clear error handling.',
        'Style components cleanly using CSS modules or TailwindCSS.'
      ],
      technologies: ['React.js', 'JSX', 'useState Hook', 'TailwindCSS / CSS', 'ES6 Modules'],
      expectedOutput: 'React single-page application repository.',
      difficulty: 'Beginner',
      estimatedTime: '2–3 Days',
      submissionInstructions: 'Push React project repository to GitHub and submit repository link.',
      resources: 'https://react.dev/learn',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-react-2',
      courseId: 'react-js-mastery',
      projectNumber: 2,
      title: 'To-Do & Task Management Application',
      shortDescription: 'Create a feature-rich React task management app with category filters, priority tags, search, and LocalStorage persistence.',
      detailedDescription: 'Build a productivity application allowing users to create, edit, prioritize, filter, and mark tasks as completed. Persist state across browser reloads.',
      objective: 'Master React state management, useEffect hook, controlled inputs, and component lifecycle.',
      requirements: [
        'Full CRUD operations for tasks (create, read, update, delete).',
        'Filter tasks by status (All, Active, Completed) and search query.',
        'Use useEffect to sync state with browser LocalStorage.',
        'Add smooth animation transitions on task addition/deletion.'
      ],
      technologies: ['React.js', 'useEffect & useState', 'LocalStorage API', 'Lucide Icons'],
      expectedOutput: 'Interactive React task manager repository.',
      difficulty: 'Intermediate',
      estimatedTime: '3–4 Days',
      submissionInstructions: 'Commit code to GitHub and submit repository link.',
      resources: 'https://react.dev/reference/react/useEffect',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-react-3',
      courseId: 'react-js-mastery',
      projectNumber: 3,
      title: 'API-based Weather & Finance Web Application',
      shortDescription: 'Develop a multi-view React dashboard consuming external REST APIs using Context API or React Router.',
      detailedDescription: 'Build a real-time web application that fetches live weather forecasts or financial stock ticker data from public REST APIs, featuring interactive charts or detail cards.',
      objective: 'Master API integration (fetch/axios), async state handling (loading/error), Context API, and React Router navigation.',
      requirements: [
        'Fetch data from live REST API with loading spinner and error notifications.',
        'Implement Context API or custom hooks for global state.',
        'Use React Router for multi-page client routing.',
        'Responsive layout for mobile and desktop screens.'
      ],
      technologies: ['React.js', 'Context API', 'React Router', 'Fetch API / Axios', 'TailwindCSS'],
      expectedOutput: 'Complete React web application repository.',
      difficulty: 'Advanced',
      estimatedTime: '4–5 Days',
      submissionInstructions: 'Submit GitHub repository URL.',
      resources: 'https://react.dev/learn/passing-data-deeply-with-context',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  'data-science-ai': [
    {
      id: 'proj-ds-1',
      courseId: 'data-science-ai',
      projectNumber: 1,
      title: 'Exploratory Data Analysis (EDA) Notebook',
      shortDescription: 'Perform comprehensive exploratory data analysis on a real-world dataset using Pandas, NumPy, and Seaborn.',
      detailedDescription: 'Clean, transform, and analyze a dataset to uncover patterns, correlation matrices, missing values handling, and distribution plots.',
      objective: 'Master data cleaning, statistical analysis, and data visualization in Python data science stack.',
      requirements: ['Data cleaning & missing value imputation', 'Statistical aggregations', 'Data visualizations', 'Analytical summary text'],
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib / Seaborn', 'Jupyter Notebook'],
      expectedOutput: 'Jupyter Notebook (.ipynb) with documented findings on GitHub.',
      difficulty: 'Beginner',
      estimatedTime: '2–3 Days',
      submissionInstructions: 'Push Jupyter Notebook to GitHub repository and submit URL.',
      resources: 'https://pandas.pydata.org/docs/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-ds-2',
      courseId: 'data-science-ai',
      projectNumber: 2,
      title: 'Predictive Machine Learning Model',
      shortDescription: 'Build, train, and evaluate a supervised Machine Learning model using Scikit-Learn.',
      detailedDescription: 'Construct a Machine Learning pipeline for classification or regression. Preprocess data, train models, tune hyperparameters, and evaluate performance using confusion matrix and ROC-AUC.',
      objective: 'Master model building, feature engineering, and performance evaluation.',
      requirements: ['Feature scaling and encoding', 'Model training & cross-validation', 'Hyperparameter tuning', 'Evaluation metrics report'],
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'ML Algorithms'],
      expectedOutput: 'ML model pipeline script/notebook on GitHub.',
      difficulty: 'Intermediate',
      estimatedTime: '3–4 Days',
      submissionInstructions: 'Submit GitHub repository URL containing model code and README.',
      resources: 'https://scikit-learn.org/stable/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-ds-3',
      courseId: 'data-science-ai',
      projectNumber: 3,
      title: 'Interactive Data Visualization Dashboard',
      shortDescription: 'Build an interactive web dashboard presenting machine learning predictions and data insights.',
      detailedDescription: 'Create a Streamlit or Plotly web application allowing users to interactively filter data, adjust input parameters, and visualize model predictions in real time.',
      objective: 'Deploy machine learning models and visualizations into interactive web applications.',
      requirements: ['Interactive filters & charts', 'Real-time model inference', 'Responsive web UI layout', 'Documentation'],
      technologies: ['Python', 'Streamlit / Plotly', 'Pandas', 'Machine Learning'],
      expectedOutput: 'Interactive dashboard application repository on GitHub.',
      difficulty: 'Advanced',
      estimatedTime: '4–5 Days',
      submissionInstructions: 'Commit dashboard app code to GitHub and submit repository URL.',
      resources: 'https://streamlit.io/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  'ui-ux-design': [
    {
      id: 'proj-uiux-1',
      courseId: 'ui-ux-design',
      projectNumber: 1,
      title: 'Mobile App Wireframe & Design System',
      shortDescription: 'Create high-fidelity mobile app wireframes and a design system in Figma.',
      detailedDescription: 'Design user personas, user flow diagrams, component library (buttons, cards, inputs), and key mobile screens for a utility app.',
      objective: 'Master visual hierarchy, typography scales, color theory, and component design systems.',
      requirements: ['User persona & user journey map', 'Reusable design system components', 'Low & high-fidelity mobile screens'],
      technologies: ['Figma', 'UI/UX Design Systems', 'Wireframing', 'Color Theory'],
      expectedOutput: 'Design documentation and link to public GitHub repository with design assets.',
      difficulty: 'Beginner',
      estimatedTime: '2–3 Days',
      submissionInstructions: 'Include Figma export assets and documentation in GitHub repository.',
      resources: 'https://www.figma.com/best-practices/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-uiux-2',
      courseId: 'ui-ux-design',
      projectNumber: 2,
      title: 'Responsive E-Commerce Design Prototype',
      shortDescription: 'Design an interactive prototype for a multi-device e-commerce platform.',
      detailedDescription: 'Build interactive prototypes for desktop and mobile e-commerce experiences including homepage, product details, cart, and checkout workflow.',
      objective: 'Master responsive UI design, micro-interactions, and usability prototyping.',
      requirements: ['Desktop and mobile layouts', 'Interactive clickable prototype links', 'Micro-interaction animations'],
      technologies: ['Figma', 'Prototyping', 'Responsive UI', 'Usability Testing'],
      expectedOutput: 'Complete prototype specification repository on GitHub.',
      difficulty: 'Intermediate',
      estimatedTime: '3–4 Days',
      submissionInstructions: 'Submit GitHub repository URL.',
      resources: 'https://material.io/design',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-uiux-3',
      courseId: 'ui-ux-design',
      projectNumber: 3,
      title: 'SaaS Dashboard UX Redesign & Case Study',
      shortDescription: 'Perform UX audit, user research, and complete redesign case study for an analytics dashboard.',
      detailedDescription: 'Conduct usability evaluations, define problem statements, build interactive dashboard UI prototypes, and publish a comprehensive UX case study report.',
      objective: 'Demonstrate end-to-end UX research, problem solving, UI design, and case study presentation.',
      requirements: ['UX audit & heuristic evaluation', 'Information architecture map', 'High-fidelity dashboard screens', 'Case study write-up'],
      technologies: ['Figma', 'UX Research', 'Dashboard UI', 'Case Study Writing'],
      expectedOutput: 'Complete UX case study repository on GitHub.',
      difficulty: 'Advanced',
      estimatedTime: '4–5 Days',
      submissionInstructions: 'Submit GitHub repository link containing case study Markdown report and design files.',
      resources: 'https://www.nngroup.com/articles/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  'cyber-security': [
    {
      id: 'proj-sec-1',
      courseId: 'cyber-security',
      projectNumber: 1,
      title: 'Network Vulnerability Scanner & Report',
      shortDescription: 'Perform network vulnerability scanning and produce security audit documentation.',
      detailedDescription: 'Use security tools to scan target ports, identify open services, assess configuration weaknesses, and author a professional security vulnerability report.',
      objective: 'Understand network security scanning principles, port mapping, and vulnerability assessment.',
      requirements: ['Port scan & service identification', 'Vulnerability assessment', 'Risk classification matrix', 'Remediation guide'],
      technologies: ['Nmap / Security Tools', 'Network Security', 'Report Writing'],
      expectedOutput: 'Vulnerability assessment report in Markdown/PDF inside GitHub repository.',
      difficulty: 'Beginner',
      estimatedTime: '2–3 Days',
      submissionInstructions: 'Submit GitHub repository URL.',
      resources: 'https://nmap.org/book/man.html',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-sec-2',
      courseId: 'cyber-security',
      projectNumber: 2,
      title: 'Secure Authentication & Encryption System',
      shortDescription: 'Implement secure password hashing, JWT session verification, and AES data encryption.',
      detailedDescription: 'Develop a secure backend authentication module incorporating salted password hashing (Bcrypt), JWT token expiration, and AES data encryption at rest.',
      objective: 'Apply cryptographic algorithms, secure token authentication, and defense-in-depth principles.',
      requirements: ['Bcrypt password hashing with salt', 'JWT token generation & validation', 'AES encryption/decryption module', 'Input sanitization'],
      technologies: ['Node.js / Python', 'Cryptography', 'JWT', 'Bcrypt', 'App Security'],
      expectedOutput: 'Secure authentication backend module repository on GitHub.',
      difficulty: 'Intermediate',
      estimatedTime: '3–4 Days',
      submissionInstructions: 'Upload code to GitHub repository and submit link.',
      resources: 'https://owasp.org/www-project-top-ten/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'proj-sec-3',
      courseId: 'cyber-security',
      projectNumber: 3,
      title: 'Penetration Testing & Security Audit Case Study',
      shortDescription: 'Conduct simulated web application security audit and write mitigation patches.',
      detailedDescription: 'Identify OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, Broken Auth) in a controlled environment, write exploit proofs-of-concept, and patch the codebase.',
      objective: 'Master web penetration testing methodology and secure coding practices.',
      requirements: ['OWASP Top 10 vulnerability audit', 'Exploit proof-of-concept explanation', 'Code fixes and patch implementations'],
      technologies: ['Penetration Testing', 'Web Security', 'OWASP Top 10', 'Secure Coding'],
      expectedOutput: 'Security audit report and patched codebase repository on GitHub.',
      difficulty: 'Advanced',
      estimatedTime: '4–5 Days',
      submissionInstructions: 'Submit GitHub repository link.',
      resources: 'https://owasp.org/www-community/vulnerabilities/',
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]
};

try {
  const dbData = fs.readFileSync(DB_FILE, 'utf-8');
  const db = JSON.parse(dbData);

  if (!db.settings) {
    db.settings = { projectSubmissionEmail: 'admin@arshithbootcamp.com' };
  } else if (!db.settings.projectSubmissionEmail) {
    db.settings.projectSubmissionEmail = 'admin@arshithbootcamp.com';
  }

  if (!db.projectSubmissions) {
    db.projectSubmissions = [];
  }

  let updatedCount = 0;
  (db.courses || []).forEach(course => {
    const defaultProjs = DEFAULT_PROJECTS_MAP[course.id] || DEFAULT_PROJECTS_MAP['python-programming'];
    if (!course.projects || course.projects.length === 0) {
      course.projects = defaultProjs.map((p, idx) => ({
        ...p,
        id: `proj-${course.id}-${idx + 1}-${Date.now().toString().slice(-4)}`,
        courseId: course.id,
        projectNumber: idx + 1
      }));
      updatedCount++;
    }
  });

  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  console.log(`Successfully seeded 3 projects for ${updatedCount} courses into db.json`);
} catch (err) {
  console.error('Error seeding projects into db.json:', err);
}

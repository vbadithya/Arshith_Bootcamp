// scratch/seed_3_course_projects.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

export const COURSE_PROJECTS_MAP = {
  "python-programming": [
    {
      id: "prj-py-1",
      courseId: "python-programming",
      projectNumber: 1,
      title: "Automated Web Scraper & Telemetry Pipeline",
      shortDescription: "Build a robust web scraper to extract structured data, validate schema, and export cleaned CSV/JSON datasets.",
      detailedDescription: "Develop an automated data ingestion pipeline in Python that extracts, normalizes, and validates web data. Implement comprehensive error handling for HTTP timeouts and HTTP 429 rate limiting, process structured elements with BeautifulSoup, and generate clean datasets.",
      objective: "Master HTTP request lifecycles, DOM traversal with BeautifulSoup, exception handling, and data persistence in JSON/CSV formats.",
      requirements: [
        "Fetch web content using requests or urllib with custom User-Agent headers",
        "Parse complex HTML structures, handle pagination, and extract target fields",
        "Implement try/except blocks to gracefully catch connection timeouts and status errors",
        "Save cleaned, structured data into both output.json and output.csv",
        "Include a README.md documenting installation, usage, and schema definitions"
      ],
      technologies: ["Python 3", "Requests", "BeautifulSoup4", "JSON", "CSV", "Regular Expressions"],
      expectedOutput: "A functional Python script or CLI tool that extracts multi-page web content and produces clean, structured JSON and CSV files ready for downstream analysis.",
      difficulty: "Beginner",
      estimatedTime: "2–3 Days",
      submissionInstructions: "1. Complete the project in your local development environment.\n2. Upload all source code and documentation to a public GitHub repository.\n3. Ensure your repository includes a comprehensive README.md with execution instructions.\n4. Submit your GitHub repository URL below for review.",
      resources: [
        { title: "Python Requests Documentation", url: "https://requests.readthedocs.io/" },
        { title: "BeautifulSoup4 Documentation", url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/" }
      ],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-py-2",
      courseId: "python-programming",
      projectNumber: 2,
      title: "Multi-Threaded Server & CLI Chat Application",
      shortDescription: "Engineer a concurrent client-server networking application using low-level sockets and threading.",
      detailedDescription: "Build an event-driven networking suite comprising a multi-client server and interactive command-line client. Manage concurrent connections using Python's threading library, implement clean protocol framing, and enforce graceful disconnections.",
      objective: "Deepen understanding of network stream sockets, thread synchronization, broadcast protocols, and daemon thread lifecycles.",
      requirements: [
        "Create a TCP server utilizing socket and threading modules to handle multiple simultaneous clients",
        "Implement message broadcasting so messages sent by one client are delivered to all connected peers",
        "Handle client connection drops and SIGINT terminations without crashing the server",
        "Implement dedicated commands such as /users, /help, and /quit",
        "Include unit tests or integration test scripts for socket communication"
      ],
      technologies: ["Python 3", "Sockets", "Threading", "Concurrency", "OOP", "TCP/IP"],
      expectedOutput: "A server executable and client script capable of sustaining multiple simultaneous active connections with realtime message delivery across network sockets.",
      difficulty: "Intermediate",
      estimatedTime: "3–4 Days",
      submissionInstructions: "1. Complete the project in your local development environment.\n2. Upload all source code and documentation to a public GitHub repository.\n3. Ensure your repository includes instructions for launching the server and connecting multiple clients.\n4. Submit your GitHub repository URL below for review.",
      resources: [
        { title: "Python Socket Programming HOWTO", url: "https://docs.python.org/3/howto/sockets.html" }
      ],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-py-3",
      courseId: "python-programming",
      projectNumber: 3,
      title: "Full-Stack RESTful API & SQLite Persistence Engine",
      shortDescription: "Architect a production-ready REST API with JWT authentication, relational SQLite storage, and ACID transactions.",
      detailedDescription: "Construct a modular web service backend with parameterized SQLite queries, password hashing, JWT bearer token authentication, role-based access control, and comprehensive endpoint documentation.",
      objective: "Synthesize complete full-stack backend development, SQLite database normalization, ACID transaction boundaries, and secure API architecture.",
      requirements: [
        "Design 3NF relational database schema with foreign keys and index optimization",
        "Implement CRUD endpoints with strict JSON request validation and HTTP status codes",
        "Secure user passwords using bcrypt and issue JWT authentication tokens",
        "Use parameterized SQL queries exclusively to neutralize SQL injection vulnerabilities",
        "Provide thorough test suite covering authorization, edge cases, and transaction rollbacks"
      ],
      technologies: ["Python 3", "SQLite3", "FastAPI / Flask", "JWT", "Bcrypt", "REST API", "Pytest"],
      expectedOutput: "A fully functional, tested REST API service with persistent SQLite database storage, automated schema migrations, and secure authentication.",
      difficulty: "Advanced",
      estimatedTime: "5–7 Days",
      submissionInstructions: "1. Complete the project in your local development environment.\n2. Upload all source code and documentation to a public GitHub repository.\n3. Ensure your repository includes an API specification and curl/Postman testing examples.\n4. Submit your GitHub repository URL below for review.",
      resources: [
        { title: "SQLite3 Python Documentation", url: "https://docs.python.org/3/library/sqlite3.html" }
      ],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    }
  ],

  "sql-mastery": [
    {
      id: "prj-sql-1",
      courseId: "sql-mastery",
      projectNumber: 1,
      title: "E-Commerce Relational Database Schema & Data Ingestion",
      shortDescription: "Design a complete 3NF normalized schema for an e-commerce platform and populate with relational seed data.",
      detailedDescription: "Create a scalable relational database architecture representing customers, products, categories, orders, order items, and payment transactions. Implement primary keys, foreign keys, CHECK constraints, and default values.",
      objective: "Demonstrate database design principles, entity-relationship modeling, 3NF normalization, and data integrity constraints.",
      requirements: [
        "Design at least 6 interconnected tables conforming to 3NF standards",
        "Enforce referential integrity using FOREIGN KEY constraints with ON DELETE RESTRICT / CASCADE",
        "Create sample data insertion scripts (INSERT INTO) with realistic retail datasets",
        "Write validation queries verifying constraint enforcement"
      ],
      technologies: ["SQL", "PostgreSQL / SQLite", "Data Modeling", "DDL", "DML", "Constraints"],
      expectedOutput: "A schema.sql file containing complete CREATE TABLE statements and a seed.sql file with realistic data.",
      difficulty: "Beginner",
      estimatedTime: "2–3 Days",
      submissionInstructions: "1. Upload schema.sql and seed.sql to your GitHub repository.\n2. Include an ER diagram image or text description in README.md.\n3. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-sql-2",
      courseId: "sql-mastery",
      projectNumber: 2,
      title: "Business Intelligence Analytics & Window Functions Suite",
      shortDescription: "Formulate analytical reporting queries using window functions, CTEs, and multidimensional aggregations.",
      detailedDescription: "Develop a suite of business intelligence queries calculating monthly recurring revenue (MRR), customer cohort retention, running sales totals, moving averages, and top-N ranking per product category.",
      objective: "Master Common Table Expressions (CTEs), window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD), and complex GROUP BY aggregations.",
      requirements: [
        "Compute month-over-month revenue growth using LAG() window functions",
        "Calculate 7-day moving averages of daily orders and customer lifetime value (LTV)",
        "Identify high-value churn risks using recency and frequency segmentation CTEs",
        "Structure each query with clean formatting, comments, and benchmark output"
      ],
      technologies: ["SQL", "Window Functions", "CTEs", "Analytics", "Aggregations"],
      expectedOutput: "A comprehensive analytics.sql suite containing documented, performant business queries.",
      difficulty: "Intermediate",
      estimatedTime: "3–4 Days",
      submissionInstructions: "1. Push your SQL query files and execution outputs to GitHub.\n2. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-sql-3",
      courseId: "sql-mastery",
      projectNumber: 3,
      title: "High-Volume Database Optimization & Trigger Auditing Suite",
      shortDescription: "Optimize slow queries using indexes, analyze EXPLAIN query plans, and implement automated audit triggers.",
      detailedDescription: "Analyze and optimize execution plans for slow-running queries. Create B-tree and composite indexes, implement database triggers that automatically log record modifications into an audit_logs table, and write stored procedures/transactions.",
      objective: "Master database performance tuning, indexing trade-offs, EXPLAIN query plan analysis, and database audit automation.",
      requirements: [
        "Provide before-and-after query execution plans using EXPLAIN QUERY PLAN",
        "Create strategic composite indexes reducing sequential table scans",
        "Implement AFTER INSERT/UPDATE/DELETE triggers that record changes to an audit table",
        "Wrap financial state transitions in ACID transactions with savepoints"
      ],
      technologies: ["SQL", "Indexing", "EXPLAIN Plans", "Triggers", "Transactions", "Performance Tuning"],
      expectedOutput: "A production database optimization report and trigger suite script demonstrating measurable performance gains.",
      difficulty: "Advanced",
      estimatedTime: "4–5 Days",
      submissionInstructions: "1. Upload optimization scripts, before/after EXPLAIN logs, and trigger definitions to GitHub.\n2. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    }
  ],

  "web-development": [
    {
      id: "prj-web-1",
      courseId: "web-development",
      projectNumber: 1,
      title: "Responsive Developer Portfolio & Interactive Showcase",
      shortDescription: "Build a modern, fully responsive personal portfolio website with theme toggling and project showcases.",
      detailedDescription: "Create a modern, responsive personal developer portfolio website. Implement semantic HTML5, modern CSS flexbox/grid layouts, responsive typography, dark/light theme switching, and interactive navigation.",
      objective: "Master semantic HTML, responsive web design principles, CSS layout systems, and vanilla JavaScript DOM manipulation.",
      requirements: [
        "Fully responsive layout supporting mobile, tablet, and desktop viewports",
        "Interactive dark mode / light mode theme toggle with preference persistence in localStorage",
        "Interactive project gallery with category filtering and modal details",
        "Contact form with client-side regex input validation",
        "Clean, semantic HTML5 structure with accessibility best practices"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox & Grid"],
      expectedOutput: "A published, responsive personal portfolio website hosted on GitHub Pages or Vercel.",
      difficulty: "Beginner",
      estimatedTime: "2–3 Days",
      submissionInstructions: "1. Upload your complete project source code to GitHub.\n2. Deploy the website live using GitHub Pages, Vercel, or Netlify.\n3. Submit your GitHub repository URL and live project link below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-web-2",
      courseId: "web-development",
      projectNumber: 2,
      title: "Interactive Task & Sprint Management Dashboard",
      shortDescription: "Develop a Kanban task management application with drag-and-drop, state persistence, and filtering.",
      detailedDescription: "Build an interactive Kanban-style task management web application. Enable creating, editing, tagging, prioritizing, and deleting tasks across backlog, in-progress, and completed columns with persistent local storage.",
      objective: "Master advanced JavaScript state management, event delegation, drag-and-drop APIs, and dynamic DOM rendering.",
      requirements: [
        "Drag-and-drop or interactive column transition between task status lanes",
        "Search filtering, priority sorting (Low/Medium/High), and category tags",
        "Complete data persistence using browser localStorage",
        "Modal dialogs for task creation and inline editing with validation",
        "Responsive interface optimized for touch and desktop"
      ],
      technologies: ["HTML5", "Tailwind CSS / Vanilla CSS", "JavaScript (ES6+)", "DOM API", "LocalStorage"],
      expectedOutput: "A functional, state-persistent task management application with zero external framework dependencies.",
      difficulty: "Intermediate",
      estimatedTime: "3–4 Days",
      submissionInstructions: "1. Upload source code to GitHub.\n2. Include deployment link if available.\n3. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-web-3",
      courseId: "web-development",
      projectNumber: 3,
      title: "Full-Stack SaaS E-Commerce Web Application",
      shortDescription: "Engineer a comprehensive full-stack e-commerce web application with cart management and REST API backend.",
      detailedDescription: "Architect an end-to-end e-commerce web application. Features include a dynamic product catalog, interactive cart management, client-side routing, and a secure Node/Express REST API backend with order persistence.",
      objective: "Demonstrate full-stack engineering proficiency combining client-side UI, server-side REST API architecture, and database persistence.",
      requirements: [
        "Component-driven frontend with catalog browsing, search, and category filtering",
        "Cart management state supporting quantity adjustments, coupon codes, and checkout summaries",
        "Express.js backend providing REST endpoints for products, orders, and authentication",
        "Proper error handling, loading states, and toast notification feedback",
        "Modular architecture with environment configuration"
      ],
      technologies: ["React / Modern JS", "Node.js", "Express", "REST API", "CSS", "State Management"],
      expectedOutput: "A full-stack web application with client UI and backend server repository.",
      difficulty: "Advanced",
      estimatedTime: "5–6 Days",
      submissionInstructions: "1. Upload your project to GitHub.\n2. Document installation and startup in README.md.\n3. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    }
  ],

  "data-science-ai": [
    {
      id: "prj-ds-1",
      courseId: "data-science-ai",
      projectNumber: 1,
      title: "Exploratory Data Analysis & Statistical Telemetry Dashboard",
      shortDescription: "Conduct comprehensive EDA on a real-world dataset, clean anomalies, and synthesize statistical visualizations.",
      detailedDescription: "Perform end-to-end Exploratory Data Analysis on a complex multivariate dataset. Handle missing values and outliers, compute correlation matrices, and generate insightful statistical visualizations.",
      objective: "Master Pandas data wrangling, data hygiene, NumPy operations, and data visualization libraries.",
      requirements: [
        "Load and clean raw dataset: impute or remove missing values and detect outliers",
        "Perform univariate, bivariate, and multivariate statistical analyses",
        "Generate correlation heatmaps, distribution plots, and boxplots",
        "Synthesize actionable business insights based on empirical data findings"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      expectedOutput: "A documented Jupyter Notebook (.ipynb) with clean data cleaning pipelines and visual charts.",
      difficulty: "Beginner",
      estimatedTime: "3–4 Days",
      submissionInstructions: "1. Upload your Jupyter Notebook (.ipynb) and dataset to GitHub.\n2. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-ds-2",
      courseId: "data-science-ai",
      projectNumber: 2,
      title: "End-to-End Supervised Machine Learning Pipeline",
      shortDescription: "Build, cross-validate, and evaluate predictive machine learning models with Scikit-Learn.",
      detailedDescription: "Develop an end-to-end Machine Learning classification and regression pipeline. Perform feature engineering, categorical encoding, feature scaling, model cross-validation, hyperparameter tuning with GridSearchCV, and evaluate metrics.",
      objective: "Master machine learning modeling workflows, cross-validation, feature engineering, and model evaluation metrics.",
      requirements: [
        "Implement feature engineering, One-Hot Encoding, and StandardScaler transformation",
        "Train baseline and advanced models (Random Forest, Logistic Regression, XGBoost)",
        "Perform k-fold cross-validation and hyperparameter optimization",
        "Evaluate using Confusion Matrix, ROC-AUC, Precision, Recall, and F1-score",
        "Serialize top-performing model artifact using joblib"
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Model Evaluation", "Joblib"],
      expectedOutput: "A machine learning pipeline notebook with serialized model file and evaluation comparison report.",
      difficulty: "Intermediate",
      estimatedTime: "4–5 Days",
      submissionInstructions: "1. Push your project code, notebook, and saved model artifact to GitHub.\n2. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    },
    {
      id: "prj-ds-3",
      courseId: "data-science-ai",
      projectNumber: 3,
      title: "Production AI Model Inference Service & REST Deployment",
      shortDescription: "Deploy a trained machine learning model as a real-time RESTful inference microservice.",
      detailedDescription: "Package and deploy a trained AI predictive model as a production-ready REST API. Implement payload schema validation with Pydantic, low-latency prediction endpoints, input logging, and containerization instructions.",
      objective: "Bridge machine learning engineering and production deployment via API microservices.",
      requirements: [
        "Build a FastAPI or Flask microservice serving the trained model",
        "Implement strict request payload validation with Pydantic models",
        "Return real-time predictions with confidence scores and latency metrics",
        "Include unit tests testing edge-case inference inputs",
        "Provide Dockerfile or requirements.txt for reproducible deployment"
      ],
      technologies: ["Python", "FastAPI / Flask", "Pydantic", "Docker", "Machine Learning Deployment"],
      expectedOutput: "A deployable inference microservice repository with API documentation and prediction endpoints.",
      difficulty: "Advanced",
      estimatedTime: "5–7 Days",
      submissionInstructions: "1. Upload your microservice repository to GitHub.\n2. Submit your GitHub repository URL below.",
      resources: [],
      status: "active",
      createdAt: "2026-10-01T00:00:00.000Z",
      updatedAt: "2026-10-01T00:00:00.000Z"
    }
  ]
};

// Also copy to alias keys if course id variants exist
COURSE_PROJECTS_MAP["sql-data-analysis"] = COURSE_PROJECTS_MAP["sql-mastery"].map(p => ({ ...p, courseId: "sql-data-analysis", id: p.id.replace("sql-", "sqlda-") }));
COURSE_PROJECTS_MAP["ai-data-science"] = COURSE_PROJECTS_MAP["data-science-ai"].map(p => ({ ...p, courseId: "ai-data-science", id: p.id.replace("ds-", "aids-") }));

// 1. Update server/data/db.json
const dbPath = path.join(rootDir, 'server', 'data', 'db.json');
if (fs.existsSync(dbPath)) {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  if (!db.settings) {
    db.settings = {
      projectSubmissionEmail: "admin@arshithbootcamp.com",
      emailNotificationsEnabled: true
    };
  }

  if (!db.emailLogs) db.emailLogs = [];

  // Attach projects array of exactly 3 to each course
  (db.courses || []).forEach(course => {
    const projects = COURSE_PROJECTS_MAP[course.id] || COURSE_PROJECTS_MAP["python-programming"].map((p, i) => ({
      ...p,
      id: `prj-${course.id}-${i + 1}`,
      courseId: course.id,
      title: `${course.title} Project ${i + 1}`,
      projectNumber: i + 1
    }));

    course.projects = projects.slice(0, 3);
  });

  // Ensure initial students have projectsProgress map
  (db.students || []).forEach(student => {
    if (!student.progressMap) student.progressMap = {};
    Object.keys(student.progressMap).forEach(courseId => {
      const pm = student.progressMap[courseId];
      if (!pm.projectsProgress) {
        pm.projectsProgress = {};
      }
    });
  });

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Successfully updated server/data/db.json with 3 projects per course.');
}

// 2. Update src/data/coursesData.js
const coursesDataPath = path.join(rootDir, 'src', 'data', 'coursesData.js');
if (fs.existsSync(coursesDataPath)) {
  // We can write a clean injector that attaches projects to INITIAL_COURSES
  console.log('CoursesData path ready for projects injection.');
}

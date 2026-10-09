import express from 'express';
import { getDb, saveDb, logActivity } from '../db.js';
import { verifyAdminToken } from '../middleware/auth.js';
import { sendProjectSubmissionEmails, sendProjectReviewEmail, getAdminSubmissionEmail } from '../utils/emailService.js';

const router = express.Router();

// Helper to validate GitHub repository URL
export function isValidGithubUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+(\/.*)?$/;
  return githubRegex.test(trimmed);
}

// Helper to update overall student course progress
export function updateStudentCourseProgress(db, studentId, courseId) {
  const student = (db.students || []).find(s => s.id === studentId);
  const course = (db.courses || []).find(c => c.id === courseId);
  if (!student || !course) return;

  if (!student.progressMap) student.progressMap = {};
  if (!student.progressMap[courseId]) {
    student.progressMap[courseId] = {
      progress: 0,
      completedModules: [],
      quizzesPassed: [],
      finalTestPassed: false,
      projectStatus: 'Not Started'
    };
  }

  const pMap = student.progressMap[courseId];
  const totalModules = (course.modules || []).length || 1;
  const completedModCount = (pMap.completedModules || []).length;
  
  // Calculate module completion percentage (60% weight)
  const moduleProgress = (completedModCount / totalModules) * 60;

  // Calculate project completion percentage (40% weight)
  const courseProjects = course.projects || [];
  const submissions = (db.projectSubmissions || []).filter(s => s.studentId === studentId && s.courseId === courseId);
  
  let approvedProjects = 0;
  let submittedProjects = 0;

  courseProjects.forEach(proj => {
    const sub = submissions.find(s => s.projectId === proj.id);
    if (sub) {
      if (sub.status === 'Approved') {
        approvedProjects += 1;
        submittedProjects += 1;
      } else if (sub.status === 'Submitted' || sub.status === 'Under Review') {
        submittedProjects += 1;
      }
    }
  });

  const totalProjects = Math.max(courseProjects.length, 3);
  // Approved projects give full weight, submitted projects give partial weight
  const projectProgress = (approvedProjects / totalProjects) * 40 + ((submittedProjects - approvedProjects) / totalProjects) * 20;

  const totalProgress = Math.min(100, Math.round(moduleProgress + projectProgress));
  pMap.progress = totalProgress;

  if (approvedProjects >= totalProjects && completedModCount >= totalModules) {
    pMap.completed = true;
    pMap.completedAt = new Date().toISOString();
  }
}

// ==========================================
// ADMIN PROJECT MANAGEMENT ROUTES
// ==========================================

// Get all projects for a specific course
router.get('/admin/courses/:courseId/projects', verifyAdminToken, (req, res) => {
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });

  res.json({
    success: true,
    courseId: course.id,
    courseTitle: course.title,
    projects: course.projects || [],
    maxAllowed: 3,
    canAddMore: (course.projects || []).length < 3
  });
});

// Add a project to a course (ENFORCES EXACTLY MAX 3 PROJECTS PER COURSE)
router.post('/admin/courses/:courseId/projects', verifyAdminToken, (req, res) => {
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });

  if (!course.projects) course.projects = [];

  // Enforce maximum 3 projects per course requirement
  if (course.projects.length >= 3) {
    return res.status(400).json({
      success: false,
      message: 'Each course can contain a maximum of 3 projects.'
    });
  }

  const {
    title,
    shortDescription,
    detailedDescription,
    objective,
    requirements,
    technologies,
    expectedOutput,
    difficulty,
    estimatedTime,
    submissionInstructions,
    resources,
    active
  } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: 'Project title is required.' });
  }

  const nextProjectNumber = course.projects.length + 1;
  const newProject = {
    id: `proj-${course.id}-${nextProjectNumber}-${Date.now().toString().slice(-4)}`,
    courseId: course.id,
    projectNumber: nextProjectNumber,
    title: title.trim(),
    shortDescription: shortDescription || descriptionSnippet(detailedDescription),
    detailedDescription: detailedDescription || objective || '',
    objective: objective || shortDescription || '',
    requirements: Array.isArray(requirements) ? requirements : (requirements ? String(requirements).split('\n').filter(Boolean) : []),
    technologies: Array.isArray(technologies) ? technologies : (technologies ? String(technologies).split(',').map(t => t.trim()).filter(Boolean) : []),
    expectedOutput: expectedOutput || 'Complete responsive source code in a public GitHub repository.',
    difficulty: difficulty || 'Intermediate',
    estimatedTime: estimatedTime || '2–3 Days',
    submissionInstructions: submissionInstructions || '1. Complete project locally. 2. Upload to GitHub. 3. Submit repository URL here.',
    resources: resources || '',
    active: active !== undefined ? Boolean(active) : true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  course.projects.push(newProject);
  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'PROJECT_CREATED',
    target: `Course: ${course.title}`,
    details: `Added Project ${nextProjectNumber}: ${newProject.title}`
  });

  res.status(201).json({
    success: true,
    message: 'Project created successfully.',
    project: newProject,
    projects: course.projects,
    canAddMore: course.projects.length < 3
  });
});

// Helper for description fallback snippet
function descriptionSnippet(text) {
  if (!text) return 'Build a hands-on course project to demonstrate key technical skills.';
  return text.length > 120 ? text.slice(0, 117) + '...' : text;
}

// Edit existing project
router.put('/admin/courses/:courseId/projects/:projectId', verifyAdminToken, (req, res) => {
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });

  if (!course.projects) course.projects = [];
  const index = course.projects.findIndex(p => p.id === req.params.projectId);
  if (index === -1) return res.status(404).json({ success: false, message: 'Project not found.' });

  const existing = course.projects[index];
  const updatedProject = {
    ...existing,
    ...req.body,
    id: existing.id,
    courseId: course.id,
    projectNumber: existing.projectNumber,
    requirements: Array.isArray(req.body.requirements) ? req.body.requirements : (req.body.requirements ? String(req.body.requirements).split('\n').filter(Boolean) : existing.requirements),
    technologies: Array.isArray(req.body.technologies) ? req.body.technologies : (req.body.technologies ? String(req.body.technologies).split(',').map(t => t.trim()).filter(Boolean) : existing.technologies),
    updatedAt: new Date().toISOString()
  };

  course.projects[index] = updatedProject;
  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'PROJECT_EDITED',
    target: `Course: ${course.title}`,
    details: `Updated Project ${existing.projectNumber}: ${updatedProject.title}`
  });

  res.json({
    success: true,
    message: 'Project updated successfully.',
    project: updatedProject,
    projects: course.projects
  });
});

// Delete project from a course
router.delete('/admin/courses/:courseId/projects/:projectId', verifyAdminToken, (req, res) => {
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });

  if (!course.projects) course.projects = [];
  const index = course.projects.findIndex(p => p.id === req.params.projectId);
  if (index === -1) return res.status(404).json({ success: false, message: 'Project not found.' });

  const deleted = course.projects.splice(index, 1)[0];

  // Re-number remaining projects sequentially 1..N
  course.projects.forEach((p, idx) => {
    p.projectNumber = idx + 1;
  });

  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'PROJECT_DELETED',
    target: `Course: ${course.title}`,
    details: `Deleted project: ${deleted.title}`
  });

  res.json({
    success: true,
    message: 'Project deleted successfully.',
    projects: course.projects,
    canAddMore: course.projects.length < 3
  });
});

// Reorder projects in a course
router.put('/admin/courses/:courseId/projects/reorder', verifyAdminToken, (req, res) => {
  const { projectIds } = req.body;
  if (!Array.isArray(projectIds)) {
    return res.status(400).json({ success: false, message: 'projectIds array is required.' });
  }

  const db = getDb();
  const course = (db.courses || []).find(c => c.id === req.params.courseId);
  if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });

  const currentProjects = course.projects || [];
  const reordered = [];

  projectIds.forEach((id, idx) => {
    const proj = currentProjects.find(p => p.id === id);
    if (proj) {
      proj.projectNumber = idx + 1;
      reordered.push(proj);
    }
  });

  // Attach any missing projects
  currentProjects.forEach(p => {
    if (!reordered.some(r => r.id === p.id)) {
      p.projectNumber = reordered.length + 1;
      reordered.push(p);
    }
  });

  course.projects = reordered;
  saveDb(db);

  res.json({
    success: true,
    message: 'Projects reordered successfully.',
    projects: course.projects
  });
});

// ==========================================
// ADMIN SUBMISSIONS & REVIEW ROUTES
// ==========================================

// Get all project submissions with course & candidate filters
router.get('/admin/projects/submissions', verifyAdminToken, (req, res) => {
  const db = getDb();
  let submissions = db.projectSubmissions || [];

  const { courseId, status, search } = req.query;

  if (courseId && courseId !== 'all') {
    submissions = submissions.filter(s => s.courseId === courseId);
  }

  if (status && status !== 'all') {
    submissions = submissions.filter(s => s.status === status);
  }

  if (search) {
    const q = search.toLowerCase().trim();
    submissions = submissions.filter(s =>
      (s.studentName && s.studentName.toLowerCase().includes(q)) ||
      (s.studentEmail && s.studentEmail.toLowerCase().includes(q)) ||
      (s.githubUrl && s.githubUrl.toLowerCase().includes(q)) ||
      (s.projectTitle && s.projectTitle.toLowerCase().includes(q))
    );
  }

  res.json({
    success: true,
    submissions,
    total: submissions.length,
    settings: {
      projectSubmissionEmail: getAdminSubmissionEmail()
    }
  });
});

// Review Project Submission (Approve / Needs Changes)
router.post('/admin/projects/submissions/:id/review', verifyAdminToken, (req, res) => {
  const { status, reviewerComments, score } = req.body;
  const validStatuses = ['Approved', 'Needs Changes', 'Under Review', 'Submitted'];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid review status. Allowed values: Approved, Needs Changes, Under Review.'
    });
  }

  const db = getDb();
  if (!db.projectSubmissions) db.projectSubmissions = [];

  const subIndex = db.projectSubmissions.findIndex(s => s.id === req.params.id);
  if (subIndex === -1) {
    return res.status(404).json({ success: false, message: 'Project submission not found.' });
  }

  const sub = db.projectSubmissions[subIndex];
  sub.status = status;
  sub.reviewerComments = reviewerComments || '';
  sub.score = score !== undefined ? Number(score) : sub.score;
  sub.reviewedAt = new Date().toISOString();

  if (!sub.history) sub.history = [];
  sub.history.push({
    action: `REVIEW_${status.toUpperCase().replace(/\s+/g, '_')}`,
    status,
    reviewerComments: reviewerComments || '',
    timestamp: new Date().toISOString()
  });

  // Recalculate student course progress
  updateStudentCourseProgress(db, sub.studentId, sub.courseId);

  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: `PROJECT_REVIEW_${status.toUpperCase().replace(/\s+/g, '_')}`,
    target: `Submission: ${sub.id}`,
    details: `Reviewed project submission for ${sub.studentName} (${sub.projectTitle}) -> ${status}`
  });

  // Send review notification email to candidate
  sendProjectReviewEmail({
    submission: sub,
    status,
    reviewerComments: reviewerComments || ''
  }).catch(err => console.error('Email review notify error:', err));

  res.json({
    success: true,
    message: `Project submission status updated to ${status}. Notification dispatched to candidate.`,
    submission: sub
  });
});

// Resend notification email manually
router.post('/admin/projects/submissions/:id/resend-email', verifyAdminToken, (req, res) => {
  const db = getDb();
  const sub = (db.projectSubmissions || []).find(s => s.id === req.params.id);
  if (!sub) return res.status(404).json({ success: false, message: 'Submission not found.' });

  const course = (db.courses || []).find(c => c.id === sub.courseId);
  const student = (db.students || []).find(s => s.id === sub.studentId) || { name: sub.studentName, email: sub.studentEmail };
  const project = course?.projects?.find(p => p.id === sub.projectId) || { title: sub.projectTitle, projectNumber: sub.projectNumber };

  sendProjectSubmissionEmails({ submission: sub, course, project, student })
    .then(result => {
      res.json({ success: true, message: 'Email notification resent successfully.', result });
    })
    .catch(err => {
      res.status(500).json({ success: false, message: 'Failed to resend email.', error: err.message });
    });
});

// Get Admin Settings (e.g. projectSubmissionEmail)
router.get('/admin/settings', verifyAdminToken, (req, res) => {
  const db = getDb();
  res.json({
    success: true,
    settings: {
      projectSubmissionEmail: getAdminSubmissionEmail(),
      ...(db.settings || {})
    }
  });
});

// Update Admin Settings (projectSubmissionEmail)
router.put('/admin/settings', verifyAdminToken, (req, res) => {
  const { projectSubmissionEmail } = req.body;
  if (!projectSubmissionEmail || !projectSubmissionEmail.includes('@')) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  const db = getDb();
  if (!db.settings) db.settings = {};

  db.settings.projectSubmissionEmail = projectSubmissionEmail.trim();
  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'SETTINGS_UPDATED',
    target: 'Admin Settings',
    details: `Updated project submission email recipient to ${projectSubmissionEmail.trim()}`
  });

  res.json({
    success: true,
    message: 'Admin settings updated successfully.',
    settings: db.settings
  });
});

// ==========================================
// CANDIDATE PUBLIC & PROTECTED ROUTES
// ==========================================

// Get active projects for a course
router.get('/courses/:courseId/projects', (req, res) => {
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === req.params.courseId || c.slug === req.params.courseId);
  if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });

  const activeProjects = (course.projects || []).filter(p => p.active !== false);
  res.json({
    success: true,
    courseId: course.id,
    courseTitle: course.title,
    projects: activeProjects
  });
});

// Get single project detail by ID
router.get('/projects/:projectId', (req, res) => {
  const db = getDb();
  let foundProject = null;
  let foundCourse = null;

  (db.courses || []).forEach(c => {
    (c.projects || []).forEach(p => {
      if (p.id === req.params.projectId) {
        foundProject = p;
        foundCourse = c;
      }
    });
  });

  if (!foundProject) {
    return res.status(404).json({ success: false, message: 'Project not found.' });
  }

  res.json({
    success: true,
    project: foundProject,
    course: {
      id: foundCourse.id,
      title: foundCourse.title
    }
  });
});

// Candidate submits a project
router.post('/projects/:projectId/submit', (req, res) => {
  const { studentId, githubUrl, liveUrl, candidateComments } = req.body;

  // 1. Validate GitHub URL strictly
  if (!githubUrl || !isValidGithubUrl(githubUrl)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid GitHub repository URL.'
    });
  }

  const db = getDb();
  const student = (db.students || []).find(s => s.id === (studentId || 'STU-001'));
  if (!student) {
    return res.status(404).json({ success: false, message: 'Candidate account not found.' });
  }

  // Find target project and course
  let targetProject = null;
  let targetCourse = null;

  (db.courses || []).forEach(c => {
    (c.projects || []).forEach(p => {
      if (p.id === req.params.projectId) {
        targetProject = p;
        targetCourse = c;
      }
    });
  });

  if (!targetProject || !targetCourse) {
    return res.status(404).json({ success: false, message: 'Invalid project or course.' });
  }

  // 2. Validate course enrollment connection requirement
  const isEnrolled = (student.enrolledCourses || []).includes(targetCourse.id);
  if (!isEnrolled) {
    return res.status(403).json({
      success: false,
      message: `You are not enrolled in ${targetCourse.title}. Please enroll to submit projects.`
    });
  }

  if (!db.projectSubmissions) db.projectSubmissions = [];

  // Check existing submission for this student and project
  const existingSubIndex = db.projectSubmissions.findIndex(
    s => s.studentId === student.id && s.projectId === targetProject.id
  );

  if (existingSubIndex !== -1) {
    const existingSub = db.projectSubmissions[existingSubIndex];

    // Prevent duplicate submission unless status is "Needs Changes"
    if (existingSub.status !== 'Needs Changes') {
      return res.status(400).json({
        success: false,
        message: `Project already submitted with status: ${existingSub.status}. Duplicate submissions are prevented.`
      });
    }

    // Reopening submission for "Needs Changes" -> Maintain history!
    const submissionId = existingSub.id;
    const previousHistory = existingSub.history || [];

    const updatedSub = {
      ...existingSub,
      githubUrl: githubUrl.trim(),
      liveUrl: liveUrl ? liveUrl.trim() : '',
      candidateComments: candidateComments ? candidateComments.trim() : '',
      status: 'Submitted',
      submittedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      history: [
        ...previousHistory,
        {
          action: 'RESUBMITTED_BY_CANDIDATE',
          status: 'Submitted',
          githubUrl: githubUrl.trim(),
          candidateComments: candidateComments ? candidateComments.trim() : '',
          timestamp: new Date().toISOString()
        }
      ]
    };

    db.projectSubmissions[existingSubIndex] = updatedSub;

    // Recalculate candidate course progress
    updateStudentCourseProgress(db, student.id, targetCourse.id);

    // Save submission to database FIRST
    saveDb(db);

    // Send emails SECOND
    sendProjectSubmissionEmails({
      submission: updatedSub,
      course: targetCourse,
      project: targetProject,
      student
    }).catch(err => console.error('Email dispatch error:', err));

    return res.json({
      success: true,
      message: 'Project resubmitted successfully.',
      submission: updatedSub
    });
  }

  // First time submission
  const newSubmission = {
    id: `sub-${targetCourse.id}-${targetProject.projectNumber}-${Date.now()}`,
    projectId: targetProject.id,
    projectNumber: targetProject.projectNumber,
    projectTitle: targetProject.title,
    courseId: targetCourse.id,
    courseTitle: targetCourse.title,
    studentId: student.id,
    studentName: student.name,
    studentEmail: student.email,
    githubUrl: githubUrl.trim(),
    liveUrl: liveUrl ? liveUrl.trim() : '',
    candidateComments: candidateComments ? candidateComments.trim() : '',
    status: 'Submitted',
    submittedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    history: [
      {
        action: 'SUBMITTED_BY_CANDIDATE',
        status: 'Submitted',
        githubUrl: githubUrl.trim(),
        candidateComments: candidateComments ? candidateComments.trim() : '',
        timestamp: new Date().toISOString()
      }
    ]
  };

  db.projectSubmissions.unshift(newSubmission);

  // Recalculate candidate course progress
  updateStudentCourseProgress(db, student.id, targetCourse.id);

  // 1. SAVE TO DATABASE FIRST
  saveDb(db);

  // 2. ATTEMPT EMAIL DISPATCH SECOND
  sendProjectSubmissionEmails({
    submission: newSubmission,
    course: targetCourse,
    project: targetProject,
    student
  }).catch(err => console.error('Email dispatch error:', err));

  res.status(201).json({
    success: true,
    message: 'Project submitted successfully.',
    submission: newSubmission
  });
});

// Get candidate submissions for a specific course
router.get('/students/:studentId/courses/:courseId/project-submissions', (req, res) => {
  const db = getDb();
  const submissions = (db.projectSubmissions || []).filter(
    s => s.studentId === req.params.studentId && s.courseId === req.params.courseId
  );

  res.json({
    success: true,
    submissions
  });
});

export default router;

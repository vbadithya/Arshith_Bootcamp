import express from 'express';
import { getDb, saveDb, logActivity } from '../db.js';
import { verifyAdminToken } from '../middleware/auth.js';
import { 
  sendAdminSubmissionEmail, 
  sendCandidateConfirmationEmail, 
  sendCandidateApprovalEmail, 
  sendCandidateNeedsChangesEmail 
} from '../services/emailService.js';

const router = express.Router();

// Strict GitHub repository URL validation regex:
// Matches: https://github.com/username/repository or https://www.github.com/username/repository (with optional trailing slash)
const GITHUB_URL_REGEX = /^https:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/i;

// =========================================================================
// 1. CANDIDATE / PUBLIC PROJECT ENDPOINTS
// =========================================================================

/**
 * Get all active projects for a course (Candidate view)
 */
router.get('/courses/:courseId/projects', (req, res) => {
  const { courseId } = req.params;
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId || c.slug === courseId);

  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  const projects = (course.projects || []).filter(p => p.status !== 'inactive');
  res.json({ success: true, projects, courseTitle: course.title });
});

/**
 * Get single project details
 */
router.get('/courses/:courseId/projects/:projectId', (req, res) => {
  const { courseId, projectId } = req.params;
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId || c.slug === courseId);

  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  const project = (course.projects || []).find(p => p.id === projectId);
  if (!project) {
    return res.status(404).json({ success: false, message: 'Project not found.' });
  }

  res.json({ success: true, project, courseTitle: course.title });
});

/**
 * Get candidate submissions for a course
 */
router.get('/courses/:courseId/submissions/:candidateId', (req, res) => {
  const { courseId, candidateId } = req.params;
  const db = getDb();

  const submissions = (db.projectSubmissions || []).filter(
    s => s.courseId === courseId && s.candidateId === candidateId
  );

  res.json({ success: true, submissions });
});

/**
 * Candidate Submit Project (GitHub URL)
 */
router.post('/courses/:courseId/projects/:projectId/submit', async (req, res) => {
  const { courseId, projectId } = req.params;
  const {
    candidateId = 'std-001',
    candidateName = 'Arshith Kumar',
    candidateEmail = 'arshith@arshithbootcamp.com',
    githubUrl,
    liveUrl,
    candidateComments
  } = req.body;

  // 1. Validate GitHub URL
  if (!githubUrl || typeof githubUrl !== 'string' || !githubUrl.trim()) {
    return res.status(400).json({ success: false, message: 'Please enter a valid GitHub repository URL.' });
  }

  const trimmedGithubUrl = githubUrl.trim();
  if (!GITHUB_URL_REGEX.test(trimmedGithubUrl)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid GitHub repository URL (e.g., https://github.com/username/project-name).'
    });
  }

  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId || c.slug === courseId);
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  const project = (course.projects || []).find(p => p.id === projectId);
  if (!project) {
    return res.status(404).json({ success: false, message: 'Project not found in this course.' });
  }

  // 2. Validate Candidate Enrollment
  const student = (db.students || []).find(s => s.id === candidateId || s.email === candidateEmail);
  if (student && student.enrolledCourses && !student.enrolledCourses.includes(course.id)) {
    return res.status(403).json({ success: false, message: 'You are not enrolled in this course.' });
  }

  if (!db.projectSubmissions) db.projectSubmissions = [];

  // 3. Check for existing submission to prevent duplicate accidental submissions
  const existingIndex = db.projectSubmissions.findIndex(
    s => s.projectId === projectId && s.courseId === course.id && (s.candidateId === candidateId || s.candidateEmail === candidateEmail)
  );

  let submission = null;
  const now = new Date().toISOString();

  if (existingIndex !== -1) {
    const existing = db.projectSubmissions[existingIndex];

    // If currently Submitted or Approved, disallow duplicate
    if (existing.status === 'Submitted' || existing.status === 'Under Review') {
      return res.status(400).json({
        success: false,
        message: `This project has already been submitted and is currently ${existing.status}. Please await administrator review.`
      });
    }

    if (existing.status === 'Approved') {
      return res.status(400).json({
        success: false,
        message: 'This project has already been reviewed and Approved.'
      });
    }

    // If status was 'Needs Changes' (or rejected), allow resubmission and maintain history
    if (!existing.history) existing.history = [];
    existing.history.push({
      status: existing.status,
      githubUrl: existing.githubUrl,
      liveUrl: existing.liveUrl,
      candidateComments: existing.candidateComments,
      reviewerComments: existing.reviewerComments,
      timestamp: existing.updatedAt || existing.submittedAt
    });

    existing.githubUrl = trimmedGithubUrl;
    existing.liveUrl = (liveUrl && liveUrl.trim()) || '';
    existing.candidateComments = (candidateComments && candidateComments.trim()) || '';
    existing.status = 'Submitted';
    existing.updatedAt = now;
    existing.reviewedAt = null;
    existing.reviewerComments = '';

    submission = existing;
  } else {
    // New submission record
    submission = {
      id: `sub-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
      projectId: project.id,
      projectNumber: project.projectNumber || 1,
      projectTitle: project.title,
      courseId: course.id,
      courseTitle: course.title,
      candidateId: student ? student.id : candidateId,
      candidateName: student ? student.name : candidateName,
      candidateEmail: student ? student.email : candidateEmail,
      githubUrl: trimmedGithubUrl,
      liveUrl: (liveUrl && liveUrl.trim()) || '',
      candidateComments: (candidateComments && candidateComments.trim()) || '',
      status: 'Submitted',
      score: null,
      submittedAt: now,
      updatedAt: now,
      reviewedAt: null,
      reviewerComments: '',
      history: []
    };

    db.projectSubmissions.unshift(submission);
  }

  // 4. Update student's progressMap
  if (student) {
    if (!student.progressMap) student.progressMap = {};
    if (!student.progressMap[course.id]) {
      student.progressMap[course.id] = {
        progress: 0,
        completedModules: [],
        quizzesPassed: [],
        finalTestPassed: false,
        projectStatus: 'Submitted',
        projectsProgress: {}
      };
    }

    if (!student.progressMap[course.id].projectsProgress) {
      student.progressMap[course.id].projectsProgress = {};
    }
    student.progressMap[course.id].projectsProgress[project.id] = 'Submitted';
    student.progressMap[course.id].projectStatus = 'Submitted';
  }

  // 5. Save to database
  saveDb(db);

  logActivity({
    adminId: 'SYSTEM',
    action: 'PROJECT_SUBMITTED',
    target: `Project: ${project.title}`,
    details: `Candidate ${candidateName} (${candidateEmail}) submitted GitHub repo: ${trimmedGithubUrl}`
  });

  // 6. Asynchronous email notifications with robust failure protection
  try {
    // Notification to admin
    await sendAdminSubmissionEmail({
      candidateName: submission.candidateName,
      candidateEmail: submission.candidateEmail,
      courseTitle: course.title,
      projectTitle: project.title,
      projectNumber: project.projectNumber || 1,
      githubUrl: trimmedGithubUrl,
      liveUrl: submission.liveUrl,
      candidateComments: submission.candidateComments,
      submissionDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    });

    // Confirmation to candidate
    await sendCandidateConfirmationEmail({
      candidateName: submission.candidateName,
      candidateEmail: submission.candidateEmail,
      courseTitle: course.title,
      projectTitle: project.title,
      githubUrl: trimmedGithubUrl,
      submissionDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    });
  } catch (emailErr) {
    console.warn('[PROJECT SUBMISSION] Email notification notice (submission preserved safely):', emailErr.message);
  }

  res.status(201).json({
    success: true,
    message: 'Project submitted successfully. Your submission has been recorded for review.',
    submission
  });
});

// =========================================================================
// 2. ADMIN PROJECT MANAGEMENT (EXACTLY 3 PROJECTS PER COURSE)
// =========================================================================

/**
 * Get course projects (Admin view)
 */
router.get('/admin/courses/:courseId/projects', verifyAdminToken, (req, res) => {
  const { courseId } = req.params;
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  res.json({
    success: true,
    projects: course.projects || [],
    courseTitle: course.title,
    count: (course.projects || []).length,
    canAddMore: (course.projects || []).length < 3
  });
});

/**
 * Add a project to course (Enforces MAXIMUM 3 PROJECTS PER COURSE)
 */
router.post('/admin/courses/:courseId/projects', verifyAdminToken, (req, res) => {
  const { courseId } = req.params;
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  if (!course.projects) course.projects = [];

  // Enforce strictly maximum 3 projects per course
  if (course.projects.length >= 3) {
    return res.status(400).json({
      success: false,
      message: 'Each course can contain a maximum of 3 projects. Please edit or delete an existing project.'
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
    difficulty = 'Beginner',
    estimatedTime = '2–3 Days',
    submissionInstructions,
    resources = [],
    status = 'active'
  } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ success: false, message: 'Project title is required.' });
  }

  const nextNumber = course.projects.length + 1;
  const newProject = {
    id: `prj-${course.id}-${Date.now()}`,
    courseId: course.id,
    projectNumber: nextNumber,
    title: title.trim(),
    shortDescription: (shortDescription && shortDescription.trim()) || '',
    detailedDescription: (detailedDescription && detailedDescription.trim()) || (shortDescription && shortDescription.trim()) || '',
    objective: (objective && objective.trim()) || 'Build a functional project implementing core course skills.',
    requirements: Array.isArray(requirements) ? requirements : (requirements ? requirements.split('\n').filter(Boolean) : []),
    technologies: Array.isArray(technologies) ? technologies : (technologies ? technologies.split(',').map(s => s.trim()).filter(Boolean) : []),
    expectedOutput: (expectedOutput && expectedOutput.trim()) || 'A functional GitHub repository with documented README.',
    difficulty,
    estimatedTime,
    submissionInstructions: submissionInstructions || 'Complete the project and submit your public GitHub repository URL.',
    resources: Array.isArray(resources) ? resources : [],
    status: status === 'inactive' ? 'inactive' : 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  course.projects.push(newProject);
  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'PROJECT_CREATED',
    target: `Course: ${course.title}`,
    details: `Created Project #${nextNumber}: ${newProject.title}`
  });

  res.json({
    success: true,
    message: 'Project created successfully.',
    project: newProject,
    canAddMore: course.projects.length < 3
  });
});

/**
 * Edit a course project
 */
router.put('/admin/courses/:courseId/projects/:projectId', verifyAdminToken, (req, res) => {
  const { courseId, projectId } = req.params;
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  const project = (course.projects || []).find(p => p.id === projectId);
  if (!project) {
    return res.status(404).json({ success: false, message: 'Project not found.' });
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
    status
  } = req.body;

  if (title) project.title = title.trim();
  if (shortDescription !== undefined) project.shortDescription = shortDescription.trim();
  if (detailedDescription !== undefined) project.detailedDescription = detailedDescription.trim();
  if (objective !== undefined) project.objective = objective.trim();
  if (requirements !== undefined) {
    project.requirements = Array.isArray(requirements) ? requirements : requirements.split('\n').filter(Boolean);
  }
  if (technologies !== undefined) {
    project.technologies = Array.isArray(technologies) ? technologies : technologies.split(',').map(s => s.trim()).filter(Boolean);
  }
  if (expectedOutput !== undefined) project.expectedOutput = expectedOutput.trim();
  if (difficulty !== undefined) project.difficulty = difficulty;
  if (estimatedTime !== undefined) project.estimatedTime = estimatedTime;
  if (submissionInstructions !== undefined) project.submissionInstructions = submissionInstructions;
  if (resources !== undefined) project.resources = Array.isArray(resources) ? resources : [];
  if (status !== undefined) project.status = status;
  project.updatedAt = new Date().toISOString();

  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'PROJECT_UPDATED',
    target: `Course: ${course.title}`,
    details: `Updated Project #${project.projectNumber}: ${project.title}`
  });

  res.json({ success: true, message: 'Project updated successfully.', project });
});

/**
 * Delete a course project (Re-indexes remaining project numbers)
 */
router.delete('/admin/courses/:courseId/projects/:projectId', verifyAdminToken, (req, res) => {
  const { courseId, projectId } = req.params;
  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId);

  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  const initialCount = (course.projects || []).length;
  course.projects = (course.projects || []).filter(p => p.id !== projectId);

  if (course.projects.length === initialCount) {
    return res.status(404).json({ success: false, message: 'Project not found.' });
  }

  // Re-index remaining projects to maintain clean 1, 2, 3 sequence
  course.projects.forEach((p, idx) => {
    p.projectNumber = idx + 1;
  });

  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'PROJECT_DELETED',
    target: `Course: ${course.title}`,
    details: `Deleted project ${projectId}. Total remaining: ${course.projects.length}`
  });

  res.json({
    success: true,
    message: 'Project deleted successfully. You can now add another project.',
    projects: course.projects,
    canAddMore: course.projects.length < 3
  });
});

/**
 * Reorder course projects
 */
router.post('/admin/courses/:courseId/projects/reorder', verifyAdminToken, (req, res) => {
  const { courseId } = req.params;
  const { projectIds } = req.body; // Array of project IDs in new order

  if (!Array.isArray(projectIds)) {
    return res.status(400).json({ success: false, message: 'projectIds array is required.' });
  }

  const db = getDb();
  const course = (db.courses || []).find(c => c.id === courseId);
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found.' });
  }

  const projectsMap = new Map((course.projects || []).map(p => [p.id, p]));
  const reordered = [];

  projectIds.forEach((id, idx) => {
    if (projectsMap.has(id)) {
      const p = projectsMap.get(id);
      p.projectNumber = idx + 1;
      p.updatedAt = new Date().toISOString();
      reordered.push(p);
      projectsMap.delete(id);
    }
  });

  // Append any remaining
  projectsMap.forEach((p) => {
    p.projectNumber = reordered.length + 1;
    reordered.push(p);
  });

  course.projects = reordered;
  saveDb(db);

  res.json({ success: true, message: 'Projects reordered successfully.', projects: course.projects });
});

// =========================================================================
// 3. ADMIN PROJECT SUBMISSION DASHBOARD & REVIEW
// =========================================================================

/**
 * Get all project submissions with filtering and search
 */
router.get('/admin/projects/submissions', verifyAdminToken, (req, res) => {
  const { courseId, status, search } = req.query;
  const db = getDb();
  let submissions = db.projectSubmissions || [];

  if (courseId && courseId !== 'all') {
    submissions = submissions.filter(s => s.courseId === courseId);
  }

  if (status && status !== 'all') {
    submissions = submissions.filter(s => s.status === status);
  }

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    submissions = submissions.filter(s => 
      (s.candidateName && s.candidateName.toLowerCase().includes(q)) ||
      (s.candidateEmail && s.candidateEmail.toLowerCase().includes(q)) ||
      (s.projectTitle && s.projectTitle.toLowerCase().includes(q)) ||
      (s.githubUrl && s.githubUrl.toLowerCase().includes(q))
    );
  }

  res.json({ success: true, submissions });
});

/**
 * Get single project submission details with history
 */
router.get('/admin/projects/submissions/:id', verifyAdminToken, (req, res) => {
  const db = getDb();
  const sub = (db.projectSubmissions || []).find(s => s.id === req.params.id);
  if (!sub) return res.status(404).json({ success: false, message: 'Project submission not found.' });

  // Look up project instructions
  const course = (db.courses || []).find(c => c.id === sub.courseId);
  const project = course ? (course.projects || []).find(p => p.id === sub.projectId) : null;

  res.json({ success: true, submission: sub, project, courseTitle: course?.title });
});

/**
 * Admin Review Submission (Approve or Request Changes)
 */
router.post('/admin/projects/submissions/:id/review', verifyAdminToken, async (req, res) => {
  const { status, score, reviewerComments } = req.body;
  const validStatuses = ['Approved', 'Needs Changes', 'Under Review'];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid review status. Allowed: Approved, Needs Changes, Under Review.' });
  }

  const db = getDb();
  const sub = (db.projectSubmissions || []).find(s => s.id === req.params.id);
  if (!sub) return res.status(404).json({ success: false, message: 'Project submission not found.' });

  sub.status = status;
  if (score !== undefined) sub.score = Number(score);
  sub.reviewerComments = (reviewerComments && reviewerComments.trim()) || '';
  sub.reviewedAt = new Date().toISOString();

  if (!sub.history) sub.history = [];
  sub.history.push({
    status,
    score: sub.score,
    reviewerComments: sub.reviewerComments,
    timestamp: new Date().toISOString()
  });

  // Update student's progressMap
  const student = (db.students || []).find(s => s.id === sub.candidateId || s.email === sub.candidateEmail);
  if (student && student.progressMap && student.progressMap[sub.courseId]) {
    const pm = student.progressMap[sub.courseId];
    if (!pm.projectsProgress) pm.projectsProgress = {};
    pm.projectsProgress[sub.projectId] = status;

    // Check if all 3 projects of this course are approved
    const course = (db.courses || []).find(c => c.id === sub.courseId);
    if (course && course.projects && course.projects.length >= 3) {
      const allApproved = course.projects.every(p => pm.projectsProgress[p.id] === 'Approved');
      if (allApproved) {
        pm.projectStatus = 'Approved';
      } else {
        pm.projectStatus = status;
      }
    } else {
      pm.projectStatus = status;
    }
  }

  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: `PROJECT_REVIEW_${status.toUpperCase().replace(/\s+/g, '_')}`,
    target: `Submission: ${sub.id}`,
    details: `Candidate: ${sub.candidateName} -> ${status}. Feedback: ${sub.reviewerComments || 'None'}`
  });

  // Dispatch email notification to candidate
  try {
    if (status === 'Approved') {
      await sendCandidateApprovalEmail({
        candidateName: sub.candidateName,
        candidateEmail: sub.candidateEmail,
        courseTitle: sub.courseTitle,
        projectTitle: sub.projectTitle,
        score: sub.score,
        reviewerComments: sub.reviewerComments
      });
    } else if (status === 'Needs Changes') {
      await sendCandidateNeedsChangesEmail({
        candidateName: sub.candidateName,
        candidateEmail: sub.candidateEmail,
        courseTitle: sub.courseTitle,
        projectTitle: sub.projectTitle,
        reviewerComments: sub.reviewerComments
      });
    }
  } catch (emailErr) {
    console.warn('[PROJECT REVIEW] Email notification error (review stored safely):', emailErr.message);
  }

  res.json({
    success: true,
    message: `Project submission status updated to ${status}. Notification dispatched.`,
    submission: sub
  });
});

/**
 * Resend Email Notification for a Submission
 */
router.post('/admin/projects/submissions/:id/resend-email', verifyAdminToken, async (req, res) => {
  const db = getDb();
  const sub = (db.projectSubmissions || []).find(s => s.id === req.params.id);
  if (!sub) return res.status(404).json({ success: false, message: 'Submission not found.' });

  try {
    if (sub.status === 'Approved') {
      await sendCandidateApprovalEmail({
        candidateName: sub.candidateName,
        candidateEmail: sub.candidateEmail,
        courseTitle: sub.courseTitle,
        projectTitle: sub.projectTitle,
        score: sub.score,
        reviewerComments: sub.reviewerComments
      });
    } else if (sub.status === 'Needs Changes') {
      await sendCandidateNeedsChangesEmail({
        candidateName: sub.candidateName,
        candidateEmail: sub.candidateEmail,
        courseTitle: sub.courseTitle,
        projectTitle: sub.projectTitle,
        reviewerComments: sub.reviewerComments
      });
    } else {
      // Resend admin notification or candidate confirmation
      await sendAdminSubmissionEmail({
        candidateName: sub.candidateName,
        candidateEmail: sub.candidateEmail,
        courseTitle: sub.courseTitle,
        projectTitle: sub.projectTitle,
        projectNumber: sub.projectNumber || 1,
        githubUrl: sub.githubUrl,
        liveUrl: sub.liveUrl,
        candidateComments: sub.candidateComments,
        submissionDate: sub.submittedAt
      });
    }

    res.json({ success: true, message: 'Notification email successfully resent.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to dispatch email: ' + err.message });
  }
});

// =========================================================================
// 4. ADMIN SETTINGS (PROJECT SUBMISSION EMAIL CONFIGURATION)
// =========================================================================

/**
 * Get admin project settings
 */
router.get('/admin/settings/project-config', verifyAdminToken, (req, res) => {
  const db = getDb();
  const settingsObj = {
    projectSubmissionEmail: db.settings?.projectSubmissionEmail || 'admin@arshithbootcamp.com',
    emailNotificationsEnabled: db.settings?.emailNotificationsEnabled ?? true
  };
  res.json({
    success: true,
    settings: settingsObj,
    config: settingsObj
  });
});

/**
 * Update project submission email configuration
 */
router.put('/admin/settings/project-config', verifyAdminToken, (req, res) => {
  const { projectSubmissionEmail, emailNotificationsEnabled } = req.body;

  if (projectSubmissionEmail && !projectSubmissionEmail.includes('@')) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  const db = getDb();
  if (!db.settings) db.settings = {};

  if (projectSubmissionEmail) db.settings.projectSubmissionEmail = projectSubmissionEmail.trim();
  if (emailNotificationsEnabled !== undefined) db.settings.emailNotificationsEnabled = Boolean(emailNotificationsEnabled);

  saveDb(db);

  logActivity({
    adminId: req.admin.adminId,
    action: 'SETTINGS_UPDATED',
    target: 'Project Submission Settings',
    details: `Updated submission email to: ${db.settings.projectSubmissionEmail}`
  });

  res.json({
    success: true,
    message: 'Project settings updated successfully.',
    settings: db.settings,
    config: db.settings
  });
});

export default router;

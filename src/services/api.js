// API Service for Arshith Boot Camp Backend Integration

const API_BASE = '/api';

let adminToken = localStorage.getItem('arb_admin_token') || null;

export function setAdminToken(token, remember = true) {
  adminToken = token;
  if (token) {
    if (remember) {
      localStorage.setItem('arb_admin_token', token);
    } else {
      sessionStorage.setItem('arb_admin_token', token);
    }
  } else {
    localStorage.removeItem('arb_admin_token');
    sessionStorage.removeItem('arb_admin_token');
  }
}

export function getAdminToken() {
  return adminToken || localStorage.getItem('arb_admin_token') || sessionStorage.getItem('arb_admin_token');
}

async function request(url, options = {}) {
  const token = getAdminToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(`${API_BASE}${url}`, {
      ...options,
      headers
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'An error occurred during API request.');
    }
    return data;
  } catch (err) {
    console.error(`API Error on ${url}:`, err);
    throw err;
  }
}

export const api = {
  // Admin Auth
  adminLogin: (adminId, password, remember = true) => 
    request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ adminId, password })
    }).then(res => {
      if (res.token) setAdminToken(res.token, remember);
      return res;
    }),

  adminLogout: () => 
    request('/admin/logout', { method: 'POST' })
      .finally(() => setAdminToken(null)),

  getAdminProfile: () => request('/admin/me'),

  changeAdminPassword: (currentPassword, newPassword, confirmPassword) =>
    request('/admin/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword, confirmPassword })
    }),

  updateAdminProfile: (name, email) =>
    request('/admin/profile', {
      method: 'PUT',
      body: JSON.stringify({ name, email })
    }),

  // Public Courses
  getPublicCourses: () => request('/courses'),
  getPublicCourse: (id) => request(`/courses/${id}`),

  // Admin Courses
  getAdminCourses: () => request('/admin/courses'),
  createCourse: (courseData) => request('/admin/courses', { method: 'POST', body: JSON.stringify(courseData) }),
  updateCourse: (id, courseData) => request(`/admin/courses/${id}`, { method: 'PUT', body: JSON.stringify(courseData) }),
  duplicateCourse: (id) => request(`/admin/courses/${id}/duplicate`, { method: 'POST' }),
  deleteCourse: (id, archiveOnly = false) => request(`/admin/courses/${id}?archiveOnly=${archiveOnly}`, { method: 'DELETE' }),

  // Modules & Content
  addModule: (courseId, moduleData) => request(`/admin/courses/${courseId}/modules`, { method: 'POST', body: JSON.stringify(moduleData) }),
  updateModule: (courseId, moduleId, moduleData) => request(`/admin/courses/${courseId}/modules/${moduleId}`, { method: 'PUT', body: JSON.stringify(moduleData) }),
  deleteModule: (courseId, moduleId) => request(`/admin/courses/${courseId}/modules/${moduleId}`, { method: 'DELETE' }),
  updateQuiz: (courseId, moduleId, quizData) => request(`/admin/courses/${courseId}/modules/${moduleId}/quiz`, { method: 'PUT', body: JSON.stringify(quizData) }),
  updateFinalTest: (courseId, testData) => request(`/admin/courses/${courseId}/final-test`, { method: 'PUT', body: JSON.stringify(testData) }),
  updateFinalProject: (courseId, projectData) => request(`/admin/courses/${courseId}/final-project`, { method: 'PUT', body: JSON.stringify(projectData) }),

  // Students & Enrollments
  getStudents: () => request('/admin/students'),
  getStudentDetails: (id) => request(`/admin/students/${id}`),
  updateStudentStatus: (id, status) => request(`/admin/students/${id}/status`, { method: 'POST', body: JSON.stringify({ status }) }),
  resetStudentPassword: (id) => request(`/admin/students/${id}/reset-password`, { method: 'POST' }),
  enrollStudent: (studentId, courseId) => request('/admin/enrollments', { method: 'POST', body: JSON.stringify({ studentId, courseId }) }),
  removeEnrollment: (studentId, courseId) => request(`/admin/enrollments/${studentId}/${courseId}`, { method: 'DELETE' }),

  // Course-specific Projects (Candidate)
  getCourseProjects: (courseId) => request(`/courses/${courseId}/projects`),
  getProjectDetails: (courseId, projectId) => request(`/courses/${courseId}/projects/${projectId}`),
  getCandidateSubmissions: (courseId, candidateId) => request(`/courses/${courseId}/submissions/${candidateId}`),
  submitProject: (courseId, projectId, submissionData) =>
    request(`/courses/${courseId}/projects/${projectId}/submit`, {
      method: 'POST',
      body: JSON.stringify(submissionData)
    }),

  // Course-specific Projects (Admin Management)
  getAdminCourseProjects: (courseId) => request(`/admin/courses/${courseId}/projects`),
  createAdminProject: (courseId, projectData) =>
    request(`/admin/courses/${courseId}/projects`, {
      method: 'POST',
      body: JSON.stringify(projectData)
    }),
  updateAdminProject: (courseId, projectId, projectData) =>
    request(`/admin/courses/${courseId}/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(projectData)
    }),
  deleteAdminProject: (courseId, projectId) =>
    request(`/admin/courses/${courseId}/projects/${projectId}`, {
      method: 'DELETE'
    }),
  reorderAdminProjects: (courseId, projectIds) =>
    request(`/admin/courses/${courseId}/projects/reorder`, {
      method: 'POST',
      body: JSON.stringify({ projectIds })
    }),

  // Project Submissions (Admin Review)
  getProjectSubmissions: (params) => {
    const qs = params ? `?${new URLSearchParams(params).toString()}` : '';
    return request(`/admin/projects/submissions${qs}`);
  },
  getProjectSubmissionDetails: (id) => request(`/admin/projects/submissions/${id}`),
  reviewProjectSubmission: (id, status, reviewerComments, score) => 
    request(`/admin/projects/submissions/${id}/review`, {
      method: 'POST',
      body: JSON.stringify({ status, reviewerComments, feedback: reviewerComments, score })
    }),
  resendProjectSubmissionEmail: (id) =>
    request(`/admin/projects/submissions/${id}/resend-email`, {
      method: 'POST'
    }),

  // Project Settings
  getProjectConfig: () => request('/admin/settings/project-config'),
  updateProjectConfig: (configData) =>
    request('/admin/settings/project-config', {
      method: 'PUT',
      body: JSON.stringify(configData)
    }),

  // Certificates
  getCertificates: () => request('/admin/certificates'),
  checkCertificateEligibility: (studentId, courseId) => 
    request('/admin/certificates/check-eligibility', {
      method: 'POST',
      body: JSON.stringify({ studentId, courseId })
    }),
  generateCertificate: (studentId, courseId, grade, forceOverride = false) =>
    request('/admin/certificates/generate', {
      method: 'POST',
      body: JSON.stringify({ studentId, courseId, grade, forceOverride })
    }),
  revokeCertificate: (id) => request(`/admin/certificates/${id}/revoke`, { method: 'POST' }),
  restoreCertificate: (id) => request(`/admin/certificates/${id}/restore`, { method: 'POST' }),
  verifyPublicCertificate: (id) => request(`/certificates/verify/${id}`),

  // Analytics & Audit Logs
  getAnalytics: () => request('/admin/analytics'),
  getActivityLogs: () => request('/admin/activity-logs'),

  // Module Quizzes & Final Test System
  getModuleQuiz: (moduleId) => request(`/quizzes/module/${moduleId}`),
  submitModuleQuiz: (moduleId, data) => request(`/quizzes/module/${moduleId}/submit`, { method: 'POST', body: JSON.stringify(data) }),
  getModuleQuizAttempts: (moduleId, userId) => request(`/quizzes/module/${moduleId}/attempts?userId=${userId || ''}`),

  startFinalTest: (data = {}) => request('/final-test/start', { method: 'POST', body: JSON.stringify(data) }),
  submitFinalTest: (data) => request('/final-test/submit', { method: 'POST', body: JSON.stringify(data) }),
  getFinalTestAttempts: (userId) => request(`/final-test/attempts?userId=${userId || ''}`),

  // Admin Quiz System Management & Analytics
  getAdminQuestions: () => request('/admin/questions'),
  createAdminQuestion: (questionData) => request('/admin/questions', { method: 'POST', body: JSON.stringify(questionData) }),
  updateAdminQuestion: (id, questionData) => request(`/admin/questions/${id}`, { method: 'PUT', body: JSON.stringify(questionData) }),
  deleteAdminQuestion: (id) => request(`/admin/questions/${id}`, { method: 'DELETE' }),
  getQuizAnalytics: () => request('/admin/quiz-analytics')
};


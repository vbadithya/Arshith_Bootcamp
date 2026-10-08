// Using Node built-in fetch

const BASE_URL = 'http://localhost:5000/api';

async function runTests() {
  console.log('--- STARTING VERIFICATION OF COURSE PROJECTS SYSTEM ---');

  // 1. Health check
  const hRes = await fetch(`${BASE_URL}/health`);
  const health = await hRes.json();
  console.log('1. Health check:', health.status === 'ok' ? 'PASS' : 'FAIL');

  // 2. Candidate fetch projects for python-programming
  const pRes = await fetch(`${BASE_URL}/courses/python-programming/projects`);
  const pData = await pRes.json();
  console.log(`2. Candidate fetch projects (python-programming): Found ${pData.projects?.length} projects.`, pData.projects?.length === 3 ? 'PASS' : 'FAIL');

  // 3. Admin login to get JWT token
  const loginRes = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adminId: 'ARB-ADMIN-001', password: 'Admin@Arshith2026!' })
  });
  const loginData = await loginRes.json();
  const token = loginData.token;
  console.log('3. Admin Authentication:', token ? 'PASS' : 'FAIL');

  // 4. Test Enforcing Max 3 Projects per course:
  // python-programming already has 3 projects. Attempting to add a 4th project must fail!
  const add4thRes = await fetch(`${BASE_URL}/admin/courses/python-programming/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title: 'Illegal 4th Project',
      shortDescription: 'Should be blocked',
      objective: 'Testing 3 projects limit'
    })
  });
  const add4thData = await add4thRes.json();
  console.log('4. Max 3 Projects Enforcement (4th project blocked):', add4thRes.status === 400 && add4thData.message.includes('maximum of 3 projects') ? 'PASS' : 'FAIL');

  // 5. Test GitHub URL Validation on submission
  const firstProject = pData.projects[0];
  const testCandidateId = 'ARB-TEST-' + Date.now();
  const testCandidateEmail = 'candidate-' + Date.now() + '@example.com';
  const invalidUrlRes = await fetch(`${BASE_URL}/courses/python-programming/projects/${firstProject.id}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      candidateId: testCandidateId,
      candidateName: 'Test Candidate',
      candidateEmail: testCandidateEmail,
      githubUrl: 'https://gitlab.com/invalid/repo'
    })
  });
  const invalidUrlData = await invalidUrlRes.json();
  console.log('5. GitHub URL Validation (non-github rejected):', invalidUrlRes.status === 400 && invalidUrlData.message.includes('valid GitHub') ? 'PASS' : 'FAIL');

  // 6. Test Valid Project Submission
  const validSubmitRes = await fetch(`${BASE_URL}/courses/python-programming/projects/${firstProject.id}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      candidateId: testCandidateId,
      candidateName: 'Test Candidate',
      candidateEmail: testCandidateEmail,
      githubUrl: 'https://github.com/testcandidate/python-portfolio',
      liveUrl: 'https://python-portfolio.vercel.app',
      candidateComments: 'Implemented all responsive features and clean code.'
    })
  });
  const validSubmitData = await validSubmitRes.json();
  console.log('6. Valid Project Submission:', validSubmitRes.status === 201 && validSubmitData.success ? 'PASS' : 'FAIL');
  const submissionId = validSubmitData.submission?.id;

  // 7. Test Duplicate Submission Prevention
  const duplicateRes = await fetch(`${BASE_URL}/courses/python-programming/projects/${firstProject.id}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      candidateId: testCandidateId,
      candidateName: 'Test Candidate',
      candidateEmail: testCandidateEmail,
      githubUrl: 'https://github.com/testcandidate/python-portfolio'
    })
  });
  const duplicateData = await duplicateRes.json();
  console.log('7. Duplicate Response:', duplicateRes.status, duplicateData);
  console.log('7. Duplicate Submission Prevention (blocked):', duplicateRes.status === 400 && (duplicateData.message?.includes('already been submitted') || duplicateData.message?.includes('already submitted')) ? 'PASS' : 'FAIL');

  // 8. Admin Review: Set to "Needs Changes"
  const needsChangesRes = await fetch(`${BASE_URL}/admin/projects/submissions/${submissionId}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      status: 'Needs Changes',
      reviewerComments: 'Please improve the mobile responsiveness and resubmit.'
    })
  });
  const needsChangesData = await needsChangesRes.json();
  console.log('8. Admin Review ("Needs Changes"):', needsChangesData.success && needsChangesData.submission?.status === 'Needs Changes' ? 'PASS' : 'FAIL');

  // 9. Candidate Resubmission after "Needs Changes" (must be allowed and save history)
  const resubmitRes = await fetch(`${BASE_URL}/courses/python-programming/projects/${firstProject.id}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      candidateId: testCandidateId,
      candidateName: 'Test Candidate',
      candidateEmail: testCandidateEmail,
      githubUrl: 'https://github.com/testcandidate/python-portfolio-v2',
      candidateComments: 'Fixed all mobile responsive breakpoints!'
    })
  });
  const resubmitData = await resubmitRes.json();
  const hasHistory = resubmitData.submission?.history?.length > 0;
  console.log('9. Candidate Resubmission + History Tracking:', resubmitData.success && hasHistory ? 'PASS' : 'FAIL');

  // 10. Admin Review: Set to "Approved"
  const approveRes = await fetch(`${BASE_URL}/admin/projects/submissions/${submissionId}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      status: 'Approved',
      reviewerComments: 'Mobile responsiveness looks great now! Approved.'
    })
  });
  const approveData = await approveRes.json();
  console.log('10. Admin Review ("Approved"):', approveData.success && approveData.submission?.status === 'Approved' ? 'PASS' : 'FAIL');

  // 11. Test Resend Notification Email Endpoint
  const resendEmailRes = await fetch(`${BASE_URL}/admin/projects/submissions/${submissionId}/resend-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  const resendEmailData = await resendEmailRes.json();
  console.log('11. Resend Notification Email Endpoint:', resendEmailData.success ? 'PASS' : 'FAIL');

  // 12. Test Admin Project Settings (Configuring Submission Email)
  const updateConfigRes = await fetch(`${BASE_URL}/admin/settings/project-config`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      projectSubmissionEmail: 'reviewer@arshithbootcamp.com'
    })
  });
  const updateConfigData = await updateConfigRes.json();
  console.log('12. Project Submission Email Setting Updated:', updateConfigData.success && updateConfigData.config.projectSubmissionEmail === 'reviewer@arshithbootcamp.com' ? 'PASS' : 'FAIL');

  console.log('--- ALL AUTOMATED VERIFICATION CHECKS COMPLETED ---');
}

runTests().catch(err => {
  console.error('Test error:', err);
});

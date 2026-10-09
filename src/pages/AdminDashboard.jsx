import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, BookOpen, Layers, FileText, HelpCircle, GraduationCap, 
  FolderCheck, Award, BarChart3, Settings, LogOut, Plus, Edit3, Trash2, 
  Copy, Eye, CheckCircle2, XCircle, AlertTriangle, Search, Filter, RefreshCw, 
  UserCheck, Shield, ChevronRight, Lock, Save, ExternalLink, Download, FileSpreadsheet,
  Check, X, AlertCircle, Clock, Calendar, CheckSquare, Sparkles, User, ArrowUpRight, Menu,
  FolderGit2, Github, ArrowUp, ArrowDown, Mail, Send
} from 'lucide-react';
import { api } from '../services/api';

export default function AdminDashboard({ admin, onLogout, onCourseDataChanged }) {
  // Sidebar tab state
  const [activeSection, setActiveSection] = useState('dashboard'); // 'dashboard' | 'courses' | 'content' | 'assessments' | 'students' | 'projects' | 'certificates' | 'analytics' | 'settings'
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Core Database Data States
  const [analytics, setAnalytics] = useState(null);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [projectSubmissions, setProjectSubmissions] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [activityLogs, setActivityLogs] = useState([]);
  const [adminSettings, setAdminSettings] = useState({ projectSubmissionEmail: 'admin@arshithbootcamp.com' });
  const [loadingData, setLoadingData] = useState(true);

  // Modals & Sub-views State
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null); // null = new course, object = edit

  // Course Builder / Manage Content State
  const [builderCourse, setBuilderCourse] = useState(null);

  // Module Modal
  const [moduleModalOpen, setModuleModalOpen] = useState(false);
  const [editingModule, setEditingModule] = useState(null);

  // Project Management Modal (Admin Course Builder)
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Quiz Modal
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [editingQuizModule, setEditingQuizModule] = useState(null);

  // Project Submissions Filters & Review Modal
  const [submissionFilterCourse, setSubmissionFilterCourse] = useState('all');
  const [submissionFilterStatus, setSubmissionFilterStatus] = useState('all');
  const [submissionSearch, setSubmissionSearch] = useState('');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [resendingEmail, setResendingEmail] = useState(false);

  // Certificate Generation Modal
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCertStudent, setSelectedCertStudent] = useState('');
  const [selectedCertCourse, setSelectedCertCourse] = useState('');
  const [certGrade, setCertGrade] = useState('96% Distinction');
  const [forceCertOverride, setForceCertOverride] = useState(false);

  // Delete Confirmation Modal
  const [deleteConfirmModal, setDeleteConfirmModal] = useState({ open: false, type: '', id: '', title: '' });

  // Notifications / Toast Feedback
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Load backend data
  const refreshAllData = async () => {
    setLoadingData(true);
    try {
      const [anRes, crRes, stRes, prRes, ceRes, lgRes, stgRes] = await Promise.all([
        api.getAnalytics(),
        api.getAdminCourses(),
        api.getStudents(),
        api.getProjectSubmissionsList({
          courseId: submissionFilterCourse,
          status: submissionFilterStatus,
          search: submissionSearch
        }),
        api.getCertificates(),
        api.getActivityLogs(),
        api.getAdminSettings()
      ]);

      if (anRes.success) setAnalytics(anRes.overview);
      if (crRes.success) {
        setCourses(crRes.courses);
        if (onCourseDataChanged) onCourseDataChanged(crRes.courses);
      }
      if (stRes.success) setStudents(stRes.students);
      if (prRes.success) setProjectSubmissions(prRes.submissions);
      if (ceRes.success) setCertificates(ceRes.certificates);
      if (lgRes.success) setActivityLogs(lgRes.logs);
      if (stgRes.success && stgRes.settings) setAdminSettings(stgRes.settings);
    } catch (err) {
      showToast(err.message || 'Failed to load backend data', 'error');
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    refreshAllData();
  }, [submissionFilterCourse, submissionFilterStatus, submissionSearch]);

  // Handlers for Course Management
  const handleSaveCourseSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const coursePayload = {
      title: formData.get('title'),
      category: formData.get('category'),
      level: formData.get('level'),
      duration: formData.get('duration'),
      price: Number(formData.get('price')),
      isFree: formData.get('isFree') === 'true',
      status: formData.get('status'),
      featured: formData.get('featured') === 'true',
      shortDescription: formData.get('shortDescription'),
      description: formData.get('description'),
      prerequisites: formData.get('prerequisites'),
      skills: formData.get('skills') ? formData.get('skills').split(',').map(s => s.trim()) : []
    };

    try {
      if (editingCourse) {
        const res = await api.updateCourse(editingCourse.id, coursePayload);
        showToast(res.message || 'Course updated successfully');
      } else {
        const res = await api.createCourse(coursePayload);
        showToast(res.message || 'New course published successfully');
      }
      setCourseModalOpen(false);
      setEditingCourse(null);
      refreshAllData();
    } catch (err) {
      showToast(err.message || 'Failed to save course', 'error');
    }
  };

  const handleDuplicateCourse = async (id) => {
    try {
      const res = await api.duplicateCourse(id);
      showToast(res.message || 'Course duplicated');
      refreshAllData();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirmModal.open) return;
    try {
      if (deleteConfirmModal.type === 'course') {
        await api.deleteCourse(deleteConfirmModal.id, false);
        showToast('Course permanently deleted');
      } else if (deleteConfirmModal.type === 'archive-course') {
        await api.deleteCourse(deleteConfirmModal.id, true);
        showToast('Course archived successfully');
      } else if (deleteConfirmModal.type === 'module') {
        await api.deleteModule(builderCourse.id, deleteConfirmModal.id);
        showToast('Module deleted');
      } else if (deleteConfirmModal.type === 'project') {
        await api.deleteAdminProject(builderCourse.id, deleteConfirmModal.id);
        showToast('Project deleted');
      } else if (deleteConfirmModal.type === 'certificate') {
        await api.revokeCertificate(deleteConfirmModal.id);
        showToast('Certificate revoked');
      }
      setDeleteConfirmModal({ open: false, type: '', id: '', title: '' });
      refreshAllData();
      if (builderCourse) {
        const updated = await api.getPublicCourse(builderCourse.id);
        if (updated.success) setBuilderCourse(updated.course);
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Module Submit
  const handleSaveModuleSubmit = async (e) => {
    e.preventDefault();
    if (!builderCourse) return;
    const formData = new FormData(e.target);
    const modPayload = {
      title: formData.get('title'),
      description: formData.get('description'),
      published: formData.get('published') === 'true'
    };

    try {
      if (editingModule) {
        await api.updateModule(builderCourse.id, editingModule.id, modPayload);
        showToast('Module updated successfully');
      } else {
        await api.addModule(builderCourse.id, modPayload);
        showToast('Module added to course');
      }
      setModuleModalOpen(false);
      setEditingModule(null);
      const res = await api.getPublicCourse(builderCourse.id);
      if (res.success) setBuilderCourse(res.course);
      refreshAllData();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Project Admin Save / Edit (Enforces Max 3 Projects)
  const handleSaveProjectSubmit = async (e) => {
    e.preventDefault();
    if (!builderCourse) return;
    const formData = new FormData(e.target);
    const projectPayload = {
      title: formData.get('title'),
      shortDescription: formData.get('shortDescription'),
      detailedDescription: formData.get('detailedDescription'),
      objective: formData.get('objective'),
      requirements: formData.get('requirements'),
      technologies: formData.get('technologies'),
      expectedOutput: formData.get('expectedOutput'),
      difficulty: formData.get('difficulty'),
      estimatedTime: formData.get('estimatedTime'),
      submissionInstructions: formData.get('submissionInstructions'),
      active: formData.get('active') === 'true'
    };

    try {
      if (editingProject) {
        await api.updateAdminProject(builderCourse.id, editingProject.id, projectPayload);
        showToast('Project details updated successfully');
      } else {
        await api.createAdminProject(builderCourse.id, projectPayload);
        showToast('Project added to course (Max 3 per course)');
      }
      setProjectModalOpen(false);
      setEditingProject(null);

      const res = await api.getPublicCourse(builderCourse.id);
      if (res.success) setBuilderCourse(res.course);
      refreshAllData();
    } catch (err) {
      showToast(err.message || 'Failed to save project', 'error');
    }
  };

  // Reorder Projects
  const handleMoveProject = async (projId, direction) => {
    if (!builderCourse || !builderCourse.projects) return;
    const projs = [...builderCourse.projects];
    const index = projs.findIndex(p => p.id === projId);
    if (index === -1) return;

    if (direction === 'up' && index > 0) {
      const temp = projs[index];
      projs[index] = projs[index - 1];
      projs[index - 1] = temp;
    } else if (direction === 'down' && index < projs.length - 1) {
      const temp = projs[index];
      projs[index] = projs[index + 1];
      projs[index + 1] = temp;
    }

    const newOrderIds = projs.map(p => p.id);
    try {
      await api.reorderAdminProjects(builderCourse.id, newOrderIds);
      const res = await api.getPublicCourse(builderCourse.id);
      if (res.success) setBuilderCourse(res.course);
      showToast('Projects reordered successfully');
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Review Project Submission (Approve / Needs Changes)
  const handleReviewProjectSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSubmission) return;
    const formData = new FormData(e.target);
    const status = formData.get('status');
    const reviewerComments = formData.get('reviewerComments');
    const score = formData.get('score');

    try {
      await api.reviewProjectSubmissionStatus(selectedSubmission.id, status, reviewerComments, score);
      showToast(`Project status updated to "${status}". Email notification sent.`);
      setReviewModalOpen(false);
      setSelectedSubmission(null);
      refreshAllData();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Resend Email Notification
  const handleResendEmail = async (subId) => {
    setResendingEmail(true);
    try {
      await api.resendSubmissionEmail(subId);
      showToast('Email notification resent successfully!');
    } catch (err) {
      showToast(err.message || 'Failed to resend email.', 'error');
    } finally {
      setResendingEmail(false);
    }
  };

  // Admin Settings Update (Project Email Recipient)
  const handleSaveSettingsSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectSubmissionEmail = formData.get('projectSubmissionEmail');

    try {
      const res = await api.updateAdminSettings({ projectSubmissionEmail });
      showToast(res.message || 'Admin settings updated successfully!');
      if (res.settings) setAdminSettings(res.settings);
    } catch (err) {
      showToast(err.message || 'Failed to update settings', 'error');
    }
  };

  // Certificate Generate Submit
  const handleGenerateCertificateSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCertStudent || !selectedCertCourse) {
      showToast('Select student and course.', 'error');
      return;
    }

    try {
      const res = await api.generateCertificate(selectedCertStudent, selectedCertCourse, certGrade, forceCertOverride);
      showToast(res.message || 'Certificate generated successfully!');
      setCertModalOpen(false);
      refreshAllData();
    } catch (err) {
      showToast(err.message || 'Unable to generate certificate.', 'error');
    }
  };

  // Password Change Handler
  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const currentPassword = formData.get('currentPassword');
    const newPassword = formData.get('newPassword');
    const confirmPassword = formData.get('confirmPassword');

    try {
      const res = await api.changeAdminPassword(currentPassword, newPassword, confirmPassword);
      showToast(res.message || 'Password changed successfully');
      e.target.reset();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Course Management', icon: BookOpen, badge: courses.length },
    { id: 'content', label: 'Content & Modules', icon: Layers },
    { id: 'assessments', label: 'Quizzes & Tests', icon: HelpCircle },
    { id: 'students', label: 'Student Management', icon: GraduationCap, badge: students.length },
    { id: 'projects', label: 'Project Submissions', icon: FolderCheck, badge: projectSubmissions.filter(p => p.status === 'Submitted').length },
    { id: 'certificates', label: 'Certificate Manager', icon: Award, badge: certificates.length },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
    { id: 'settings', label: 'Admin Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FAFDFB] font-sans flex flex-col md:flex-row">
      
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-2xl shadow-xl border-2 flex items-center gap-3 text-xs font-bold animate-bounce ${
          toast.type === 'error' 
            ? 'bg-rose-50 border-rose-300 text-rose-800' 
            : 'bg-emerald-50 border-emerald-300 text-emerald-900'
        }`}>
          {toast.type === 'error' ? <AlertCircle className="w-5 h-5 text-rose-600" /> : <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Mobile Sidebar Toggle Header */}
      <div className="md:hidden bg-brand-900 text-white px-4 py-3 border-b-2 border-brand-800 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-400" />
          <span className="font-black text-sm">Arshith Admin Portal</span>
        </div>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 text-slate-200 hover:bg-brand-800 rounded-xl"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Admin Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-brand-900 text-slate-300 flex flex-col border-r-4 border-brand-800 transform transition-transform duration-200 md:static md:translate-x-0 ${
        mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        
        {/* Brand Header */}
        <div className="p-6 border-b border-brand-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-800 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-black text-white tracking-tight">ARSHITH BOOT CAMP</h1>
              <p className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">Admin Control Center</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-black transition-all ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 shadow-lg border-2 border-emerald-300'
                    : 'text-slate-300 hover:bg-brand-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                    isActive ? 'bg-slate-950 text-emerald-300' : 'bg-brand-800 text-emerald-400 border border-brand-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Admin User Footer Profile */}
        <div className="p-4 border-t border-brand-800 space-y-3">
          <div className="flex items-center justify-between bg-brand-950 p-3 rounded-2xl border border-brand-800">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-brand-800 text-emerald-400 font-black flex items-center justify-center text-xs shrink-0">
                A
              </div>
              <div className="truncate">
                <p className="text-xs font-black text-white truncate">{admin?.name || 'Administrator'}</p>
                <p className="text-[10px] text-emerald-400 font-mono font-semibold truncate">{admin?.adminId || 'ARB-ADMIN-001'}</p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="p-2 text-slate-400 hover:text-rose-400 rounded-xl hover:bg-brand-900 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full overflow-x-hidden space-y-8">
        
        {/* Top Operational Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-6 rounded-3xl dark-bezel">
          <div>
            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Single Source of Truth Database
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 capitalize">
              {activeSection.replace('-', ' ')}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={refreshAllData}
              disabled={loadingData}
              className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center gap-1.5 border border-slate-300"
            >
              <RefreshCw className={`w-4 h-4 text-slate-600 ${loadingData ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            {activeSection === 'courses' && (
              <button
                onClick={() => {
                  setEditingCourse(null);
                  setCourseModalOpen(true);
                }}
                className="px-5 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md border-2 border-brand-900 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Course</span>
              </button>
            )}

            {activeSection === 'certificates' && (
              <button
                onClick={() => setCertModalOpen(true)}
                className="px-5 py-2.5 text-xs font-black text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md border-2 border-amber-900 flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Issue Certificate</span>
              </button>
            )}
          </div>
        </div>

        {/* SECTION 1: DASHBOARD OVERVIEW */}
        {activeSection === 'dashboard' && (
          <div className="space-y-8">
            
            {/* Overview Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-white rounded-3xl p-6 dark-bezel space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Total Courses</span>
                  <BookOpen className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">{analytics?.totalCourses || courses.length}</p>
                <p className="text-xs text-emerald-700 font-bold">{analytics?.publishedCourses || courses.length} Published</p>
              </div>

              <div className="bg-white rounded-3xl p-6 dark-bezel space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Enrolled Students</span>
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">{analytics?.totalStudents || students.length}</p>
                <p className="text-xs text-slate-500 font-bold">{analytics?.totalEnrollments || 42} Active Enrollments</p>
              </div>

              <div className="bg-white rounded-3xl p-6 dark-bezel space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Pending Projects</span>
                  <FolderCheck className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-amber-600">{analytics?.pendingSubmissions || projectSubmissions.filter(p => p.status === 'Submitted').length}</p>
                <p className="text-xs text-slate-500 font-bold">Review Required</p>
              </div>

              <div className="bg-white rounded-3xl p-6 dark-bezel space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Certificates Issued</span>
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">{analytics?.totalCertificates || certificates.length}</p>
                <p className="text-xs text-emerald-700 font-bold">100% Verified Credentials</p>
              </div>

            </div>

            {/* Quick Actions & Recent Streams */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Courses Snapshot */}
              <div className="bg-white rounded-3xl dark-bezel p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-black text-slate-900">Active Boot Camp Courses</h3>
                  <button onClick={() => setActiveSection('courses')} className="text-xs font-bold text-brand-700 hover:underline">View All</button>
                </div>
                <div className="divide-y divide-slate-100 text-xs font-bold">
                  {courses.slice(0, 4).map(c => (
                    <div key={c.id} className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-black text-slate-900">{c.title}</p>
                        <span className="text-[10px] text-slate-400">{c.category} • {c.modules?.length || 0} Modules • {c.projects?.length || 0}/3 Projects</span>
                      </div>
                      <span className={`px-2.5 py-1 text-[10px] font-black rounded-full uppercase ${
                        c.status === 'published' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {c.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Audit Stream */}
              <div className="bg-white rounded-3xl dark-bezel p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-black text-slate-900">Recent Admin Activity Audit Log</h3>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">Live Stream</span>
                </div>
                <div className="space-y-3 text-xs">
                  {activityLogs.slice(0, 5).map(log => (
                    <div key={log.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <Shield className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900">{log.action}</p>
                        <p className="text-slate-600 text-[11px]">{log.target} — {log.details}</p>
                        <span className="text-[10px] text-slate-400">{new Date(log.timestamp).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* SECTION 2: COURSE MANAGEMENT & BUILDER (REQUIREMENT #23 - PROJECT MANAGEMENT IN COURSE EDIT) */}
        {(activeSection === 'courses' || activeSection === 'content') && (
          <div className="space-y-6">
            
            {builderCourse ? (
              /* Interactive Course Builder View */
              <div className="space-y-6 animate-fade-in">
                
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl dark-bezel">
                  <button
                    onClick={() => setBuilderCourse(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    ← Back to All Courses
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingModule(null);
                        setModuleModalOpen(true);
                      }}
                      className="px-4 py-2 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl border-2 border-brand-900 flex items-center gap-2 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Module</span>
                    </button>

                    {/* Add Project Button (Disabled if 3 projects already exist) */}
                    {(builderCourse.projects || []).length < 3 ? (
                      <button
                        onClick={() => {
                          setEditingProject(null);
                          setProjectModalOpen(true);
                        }}
                        className="px-4 py-2 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl border-2 border-emerald-500 flex items-center gap-2 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Project ({(builderCourse.projects || []).length}/3)</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="px-4 py-2 text-xs font-black text-slate-400 bg-slate-100 border-2 border-slate-300 rounded-xl cursor-not-allowed flex items-center gap-1.5"
                        title="Each course can contain a maximum of 3 projects."
                      >
                        <span>Max 3 Projects Reached</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Course Hierarchy Card */}
                <div className="bg-white rounded-3xl dark-bezel p-6 space-y-6">
                  
                  <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">{builderCourse.title} Content & Projects</h2>
                      <p className="text-xs text-slate-500">Manage curriculum modules, module quizzes, and the 3 course-specific projects</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                        {builderCourse.modules?.length || 0} Modules
                      </span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                        {(builderCourse.projects || []).length} / 3 Projects
                      </span>
                    </div>
                  </div>

                  {/* ==========================================
                     PROJECTS SECTION INSIDE COURSE BUILDER (REQUIREMENT #23 & #3)
                     ========================================== */}
                  <div className="p-6 bg-slate-50 rounded-3xl border-2 border-emerald-200 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div>
                        <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                          <FolderGit2 className="w-4 h-4 text-emerald-600" />
                          <span>Course Projects (Maximum 3 Projects)</span>
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {(builderCourse.projects || []).length >= 3 
                            ? 'Each course can contain a maximum of 3 projects.' 
                            : `You have defined ${(builderCourse.projects || []).length} of 3 maximum projects for this course.`}
                        </p>
                      </div>

                      {(builderCourse.projects || []).length < 3 ? (
                        <button
                          onClick={() => {
                            setEditingProject(null);
                            setProjectModalOpen(true);
                          }}
                          className="px-3.5 py-1.5 text-xs font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl border border-emerald-500 flex items-center gap-1.5 shadow-xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Project</span>
                        </button>
                      ) : (
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 text-[11px] font-extrabold rounded-full border border-amber-300">
                          Max 3 Limit Reached
                        </span>
                      )}
                    </div>

                    {/* Projects List with Edit, Delete, Move Up, Move Down */}
                    <div className="space-y-3">
                      {(builderCourse.projects || []).map((proj, pIdx) => (
                        <div key={proj.id} className="bg-white p-4 rounded-2xl border-2 border-slate-200 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-xl bg-emerald-700 text-white font-black text-xs flex items-center justify-center">
                                P{proj.projectNumber || pIdx + 1}
                              </span>
                              <div>
                                <h4 className="text-sm font-black text-slate-900">{proj.title}</h4>
                                <p className="text-xs text-slate-500 max-w-lg truncate">{proj.shortDescription}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                              {/* Reorder Move Up */}
                              <button
                                onClick={() => handleMoveProject(proj.id, 'up')}
                                disabled={pIdx === 0}
                                className="p-1.5 text-slate-600 hover:bg-slate-100 disabled:opacity-30 rounded-lg border border-slate-200"
                                title="Move Up"
                              >
                                <ArrowUp className="w-3.5 h-3.5" />
                              </button>

                              {/* Reorder Move Down */}
                              <button
                                onClick={() => handleMoveProject(proj.id, 'down')}
                                disabled={pIdx === (builderCourse.projects?.length || 1) - 1}
                                className="p-1.5 text-slate-600 hover:bg-slate-100 disabled:opacity-30 rounded-lg border border-slate-200"
                                title="Move Down"
                              >
                                <ArrowDown className="w-3.5 h-3.5" />
                              </button>

                              {/* Edit Project */}
                              <button
                                onClick={() => {
                                  setEditingProject(proj);
                                  setProjectModalOpen(true);
                                }}
                                className="px-3 py-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1"
                              >
                                <Edit3 className="w-3.5 h-3.5 text-brand-600" />
                                <span>Edit</span>
                              </button>

                              {/* Delete Project */}
                              <button
                                onClick={() => setDeleteConfirmModal({ open: true, type: 'project', id: proj.id, title: proj.title })}
                                className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                                title="Delete Project"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-slate-500 font-semibold border-t border-slate-100">
                            <span>Difficulty: <strong className="text-slate-800">{proj.difficulty || 'Intermediate'}</strong></span>
                            <span>Time: <strong className="text-slate-800">{proj.estimatedTime || '2-3 Days'}</strong></span>
                            <span>Tech: <strong className="text-brand-700">{Array.isArray(proj.technologies) ? proj.technologies.join(', ') : proj.technologies}</strong></span>
                            <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                              proj.active !== false ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-500'
                            }`}>
                              {proj.active !== false ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modules Accordion / Tree */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-black text-slate-900 border-b border-slate-100 pb-2">Modules List</h3>
                    {builderCourse.modules?.map((mod, idx) => (
                      <div key={mod.id} className="border-2 border-slate-200 rounded-2xl p-5 bg-white space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-xl bg-brand-900 text-white font-black text-xs flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <div>
                              <h3 className="text-sm font-black text-slate-900">{mod.title}</h3>
                              <p className="text-xs text-slate-500 max-w-xl">{mod.description}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setEditingQuizModule(mod);
                                setQuizModalOpen(true);
                              }}
                              className="px-3 py-1.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-xl border border-amber-200 flex items-center gap-1.5"
                            >
                              <HelpCircle className="w-3.5 h-3.5" />
                              <span>Configure Quiz</span>
                            </button>

                            <button
                              onClick={() => {
                                setEditingModule(mod);
                                setModuleModalOpen(true);
                              }}
                              className="p-2 text-slate-600 hover:bg-slate-200 rounded-lg"
                              title="Edit Module"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => setDeleteConfirmModal({ open: true, type: 'module', id: mod.id, title: mod.title })}
                              className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                              title="Delete Module"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ) : (
              /* All Courses Table View */
              <div className="bg-white rounded-3xl dark-bezel p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h2 className="text-lg font-black text-slate-900">All Boot Camp Courses ({courses.length})</h2>
                  <span className="text-xs font-bold text-slate-500">Single Source of Truth Database</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                        <th className="py-3 px-4">Course</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Level</th>
                        <th className="py-3 px-4">Modules</th>
                        <th className="py-3 px-4">Projects</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-bold">
                      {courses.map((course) => (
                        <tr key={course.id} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 font-black text-slate-900">
                            <div>
                              <span>{course.title}</span>
                              <span className="block text-[10px] font-semibold text-slate-400">ID: {course.id}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-brand-700">{course.category}</td>
                          <td className="py-4 px-4 text-slate-600">{course.level}</td>
                          <td className="py-4 px-4 text-slate-600">{course.modules?.length || 0} Modules</td>
                          <td className="py-4 px-4 text-emerald-700">{(course.projects || []).length} / 3 Projects</td>
                          <td className="py-4 px-4">
                            <span className={`px-2.5 py-1 text-[10px] font-black rounded-full uppercase ${
                              course.status === 'published' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 
                              course.status === 'archived' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                            }`}>
                              {course.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right space-x-1">
                            <button
                              onClick={() => setBuilderCourse(course)}
                              className="px-2.5 py-1.5 text-[11px] font-extrabold text-white bg-brand-900 hover:bg-brand-800 rounded-xl"
                              title="Manage Content & 3 Projects"
                            >
                              Manage Content
                            </button>

                            <button
                              onClick={() => {
                                setEditingCourse(course);
                                setCourseModalOpen(true);
                              }}
                              className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg"
                              title="Edit Course"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => handleDuplicateCourse(course.id)}
                              className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg"
                              title="Duplicate Course"
                            >
                              <Copy className="w-4 h-4" />
                            </button>

                            <button
                              onClick={() => setDeleteConfirmModal({ open: true, type: 'archive-course', id: course.id, title: course.title })}
                              className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                              title="Archive Course"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        )}

        {/* SECTION 3: STUDENT MANAGEMENT */}
        {activeSection === 'students' && (
          <div className="bg-white rounded-3xl dark-bezel p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Enrolled Students ({students.length})</h2>
              <span className="text-xs font-semibold text-slate-500">Student Accounts & Progress Tracking</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Enrolled Courses</th>
                    <th className="py-3 px-4">Overall Progress</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-bold">
                  {students.map((student) => {
                    const enrolledCount = student.enrolledCourses?.length || 0;
                    const sampleProgress = student.progressMap?.['python-programming']?.progress || 47;
                    return (
                      <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full object-cover border" />
                            <div>
                              <p className="font-black text-slate-900">{student.name}</p>
                              <p className="text-[10px] font-semibold text-slate-400">{student.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-1 text-[10px] font-black rounded-full uppercase ${
                            student.status === 'active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-700">{enrolledCount} Courses</td>
                        <td className="py-4 px-4">
                          <div className="w-32 bg-slate-100 rounded-full h-2 overflow-hidden border">
                            <div className="bg-brand-600 h-full" style={{ width: `${sampleProgress}%` }}></div>
                          </div>
                          <span className="text-[10px] text-slate-500">{sampleProgress}% Completed</span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-2">
                          <button
                            onClick={async () => {
                              const newStatus = student.status === 'active' ? 'deactivated' : 'active';
                              await api.updateStudentStatus(student.id, newStatus);
                              showToast(`Student status updated to ${newStatus}`);
                              refreshAllData();
                            }}
                            className="px-3 py-1 text-[11px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl"
                          >
                            {student.status === 'active' ? 'Deactivate' : 'Activate'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 4: PROJECT SUBMISSION REVIEWS (REQUIREMENTS #18, #19, #20, #28) */}
        {activeSection === 'projects' && (
          <div className="bg-white rounded-3xl dark-bezel p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-black text-slate-900">Candidate Project Submissions ({projectSubmissions.length})</h2>
                <p className="text-xs font-semibold text-slate-500">
                  Submissions are sent to configured email: <strong className="text-brand-700">{adminSettings.projectSubmissionEmail}</strong>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-black rounded-full border border-amber-200">
                  {projectSubmissions.filter(s => s.status === 'Submitted' || s.status === 'Under Review').length} Pending Review
                </span>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Filter Course</label>
                <select
                  value={submissionFilterCourse}
                  onChange={(e) => setSubmissionFilterCourse(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                >
                  <option value="all">All Courses</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Filter Status</label>
                <select
                  value={submissionFilterStatus}
                  onChange={(e) => setSubmissionFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="Submitted">Submitted / Under Review</option>
                  <option value="Approved">Approved</option>
                  <option value="Needs Changes">Needs Changes</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Search Candidate / GitHub</label>
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={submissionSearch}
                    onChange={(e) => setSubmissionSearch(e.target.value)}
                    placeholder="Search candidate, email, github..."
                    className="w-full pl-8 pr-3 py-2 text-xs font-semibold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submissions Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Candidate</th>
                    <th className="py-3 px-4">Course & Project</th>
                    <th className="py-3 px-4">GitHub Repository</th>
                    <th className="py-3 px-4">Submitted Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-bold">
                  {projectSubmissions.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400 font-semibold">
                        No project submissions found matching the selected filters.
                      </td>
                    </tr>
                  ) : (
                    projectSubmissions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-4 font-black text-slate-900">
                          <div>
                            <span>{sub.studentName}</span>
                            <span className="block text-[10px] font-semibold text-slate-400">{sub.studentEmail}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-slate-900">Project {sub.projectNumber}: {sub.projectTitle}</p>
                          <span className="text-[10px] text-brand-700 font-semibold">{sub.courseTitle}</span>
                        </td>
                        <td className="py-4 px-4">
                          <a
                            href={sub.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-600 hover:underline font-mono truncate max-w-xs block flex items-center gap-1"
                          >
                            <Github className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{sub.githubUrl}</span>
                          </a>
                        </td>
                        <td className="py-4 px-4 text-slate-600">{new Date(sub.submittedAt).toLocaleDateString()}</td>
                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-1 text-[10px] font-black rounded-full uppercase ${
                            sub.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                            sub.status === 'Needs Changes' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-1">
                          <button
                            onClick={() => {
                              setSelectedSubmission(sub);
                              setReviewModalOpen(true);
                            }}
                            className="px-3 py-1.5 text-xs font-extrabold text-white bg-brand-900 hover:bg-brand-800 rounded-xl"
                          >
                            Review Submission
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 5: CERTIFICATE MANAGEMENT */}
        {activeSection === 'certificates' && (
          <div className="bg-white rounded-3xl dark-bezel p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Issued Certificates ({certificates.length})</h2>
              <span className="text-xs font-semibold text-slate-500">Unique Verified Credentials</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Certificate ID</th>
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4">Issue Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-bold">
                  {certificates.map((cert) => (
                    <tr key={cert.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4 font-black text-emerald-700">{cert.certificateId}</td>
                      <td className="py-4 px-4 text-slate-900">{cert.studentName}</td>
                      <td className="py-4 px-4 text-slate-700">{cert.courseTitle}</td>
                      <td className="py-4 px-4 text-slate-500">{cert.issueDate}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2.5 py-1 text-[10px] font-black rounded-full uppercase ${
                          cert.status === 'active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}>
                          {cert.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right space-x-2">
                        {cert.status === 'active' ? (
                          <button
                            onClick={() => setDeleteConfirmModal({ open: true, type: 'certificate', id: cert.id, title: cert.certificateId })}
                            className="px-3 py-1 text-[11px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl"
                          >
                            Revoke
                          </button>
                        ) : (
                          <button
                            onClick={async () => {
                              await api.restoreCertificate(cert.id);
                              showToast('Certificate restored');
                              refreshAllData();
                            }}
                            className="px-3 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl"
                          >
                            Restore
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 6: ANALYTICS & REPORTS */}
        {activeSection === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-3xl dark-bezel space-y-3">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Course Analytics</h3>
                <p className="text-3xl font-black text-slate-900">{courses.length}</p>
                <p className="text-xs text-slate-600">Active Boot Camp Courses in DB</p>
              </div>

              <div className="bg-white p-6 rounded-3xl dark-bezel space-y-3">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Student Completion Rate</h3>
                <p className="text-3xl font-black text-emerald-600">75%</p>
                <p className="text-xs text-slate-600">Average completion rate across enrolled courses</p>
              </div>

              <div className="bg-white p-6 rounded-3xl dark-bezel space-y-3">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Verification Requests</h3>
                <p className="text-3xl font-black text-brand-900">{certificates.length}</p>
                <p className="text-xs text-slate-600">Issued tamper-proof credentials</p>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 7: ADMIN SETTINGS & PROFILE (REQUIREMENTS #16 & #28 - PROJECT EMAIL RECIPIENT SETTING) */}
        {activeSection === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Admin Profile & Security */}
            <div className="bg-white rounded-3xl dark-bezel p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-black text-slate-900 pb-4 border-b border-slate-100">
                Admin Security & Password
              </h2>

              <form onSubmit={handlePasswordChangeSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    required
                    className="w-full px-4 py-2.5 text-xs font-semibold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    required
                    placeholder="Min 8 chars, uppercase, number, symbol"
                    className="w-full px-4 py-2.5 text-xs font-semibold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    className="w-full px-4 py-2.5 text-xs font-semibold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-black text-white bg-brand-900 hover:bg-brand-800 rounded-xl border-2 border-brand-800"
                >
                  Update Admin Password
                </button>
              </form>
            </div>

            {/* Project Submissions Email Notification Settings */}
            <div className="bg-white rounded-3xl dark-bezel p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-black text-slate-900 pb-4 border-b border-slate-100 flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-600" />
                <span>Project Submission Email Configuration</span>
              </h2>

              <form onSubmit={handleSaveSettingsSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Submissions Recipient Email Address
                  </label>
                  <input
                    type="email"
                    name="projectSubmissionEmail"
                    required
                    defaultValue={adminSettings.projectSubmissionEmail || 'admin@arshithbootcamp.com'}
                    placeholder="e.g. submissions@arshithbootcamp.com"
                    className="w-full px-4 py-2.5 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                  <p className="text-[11px] text-slate-500 font-medium mt-1">
                    All candidate GitHub project submissions will be dispatched to this designated email address.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl border-2 border-emerald-500 shadow-md flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Email Configuration</span>
                </button>
              </form>
            </div>

          </div>
        )}

      </main>

      {/* CREATE / EDIT COURSE MODAL */}
      {courseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 dark-bezel relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setCourseModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-black text-slate-900 mb-4">
              {editingCourse ? `Edit Course — ${editingCourse.title}` : 'Publish New Boot Camp Course'}
            </h2>

            <form onSubmit={handleSaveCourseSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Course Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingCourse?.title || ''}
                  className="w-full px-4 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                  <select
                    name="category"
                    defaultValue={editingCourse?.category || 'Programming'}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  >
                    <option value="Programming">Programming</option>
                    <option value="SQL">SQL</option>
                    <option value="Web Development">Web Development</option>
                    <option value="AI">AI</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Status</label>
                  <select
                    name="status"
                    defaultValue={editingCourse?.status || 'published'}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Level</label>
                  <input
                    type="text"
                    name="level"
                    defaultValue={editingCourse?.level || 'Beginner'}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    defaultValue={editingCourse?.duration || '30 hours'}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={editingCourse?.price ?? 999}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Is Free?</label>
                  <select
                    name="isFree"
                    defaultValue={editingCourse?.isFree ? 'true' : 'false'}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  >
                    <option value="false">Paid Course</option>
                    <option value="true">Free Course</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Short Description</label>
                <textarea
                  name="shortDescription"
                  rows={2}
                  defaultValue={editingCourse?.shortDescription || ''}
                  className="w-full px-3 py-2 text-xs font-semibold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Description</label>
                <textarea
                  name="description"
                  rows={3}
                  defaultValue={editingCourse?.description || ''}
                  className="w-full px-3 py-2 text-xs font-semibold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl border-2 border-brand-900 shadow-md"
              >
                Save Course Data
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODULE MODAL */}
      {moduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 dark-bezel relative">
            <button onClick={() => setModuleModalOpen(false)} className="absolute top-4 right-4 p-1 text-slate-400">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900 mb-4">
              {editingModule ? 'Edit Module' : 'Add New Module'}
            </h3>

            <form onSubmit={handleSaveModuleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Module Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingModule?.title || ''}
                  placeholder="e.g. Module 03 — Data Structures"
                  className="w-full px-4 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Module Description</label>
                <textarea
                  name="description"
                  rows={3}
                  defaultValue={editingModule?.description || ''}
                  className="w-full px-4 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-black text-white bg-brand-900 rounded-xl"
              >
                Save Module
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
         CREATE / EDIT PROJECT MODAL (REQUIREMENTS #2, #3, #23)
         ========================================== */}
      {projectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 dark-bezel relative max-h-[90vh] overflow-y-auto space-y-4">
            <button onClick={() => setProjectModalOpen(false)} className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Course Project Builder (Max 3)
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-2">
                {editingProject ? `Edit Project — ${editingProject.title}` : `Add Project ${((builderCourse?.projects || []).length + 1)} of 3`}
              </h3>
            </div>

            <form onSubmit={handleSaveProjectSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Project Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingProject?.title || ''}
                  placeholder="e.g. Interactive Portfolio / Calculator Application"
                  className="w-full px-4 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Short Description</label>
                <textarea
                  name="shortDescription"
                  rows={2}
                  defaultValue={editingProject?.shortDescription || ''}
                  placeholder="Brief summary displayed on project list cards..."
                  className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Project Objective</label>
                <textarea
                  name="objective"
                  rows={2}
                  defaultValue={editingProject?.objective || ''}
                  placeholder="Explain what the candidate needs to build..."
                  className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mandatory Requirements (One per line)</label>
                <textarea
                  name="requirements"
                  rows={3}
                  defaultValue={Array.isArray(editingProject?.requirements) ? editingProject.requirements.join('\n') : (editingProject?.requirements || '')}
                  placeholder="Requirement 1&#10;Requirement 2&#10;Requirement 3"
                  className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-mono text-[11px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Technologies Expected (Comma separated)</label>
                  <input
                    type="text"
                    name="technologies"
                    defaultValue={Array.isArray(editingProject?.technologies) ? editingProject.technologies.join(', ') : (editingProject?.technologies || '')}
                    placeholder="e.g. HTML5, CSS3, JavaScript"
                    className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Difficulty Level</label>
                  <select
                    name="difficulty"
                    defaultValue={editingProject?.difficulty || 'Intermediate'}
                    className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-bold"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Estimated Completion Time</label>
                  <input
                    type="text"
                    name="estimatedTime"
                    defaultValue={editingProject?.estimatedTime || '2–3 Days'}
                    placeholder="e.g. 2–3 Days"
                    className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Status</label>
                  <select
                    name="active"
                    defaultValue={editingProject?.active !== false ? 'true' : 'false'}
                    className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-bold"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Expected Deliverable Output</label>
                <textarea
                  name="expectedOutput"
                  rows={2}
                  defaultValue={editingProject?.expectedOutput || 'Complete responsive web application source code in GitHub repository.'}
                  className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Submission Instructions</label>
                <textarea
                  name="submissionInstructions"
                  rows={2}
                  defaultValue={editingProject?.submissionInstructions || '1. Complete project locally. 2. Push to GitHub. 3. Submit repository URL.'}
                  className="w-full px-3 py-2 bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl border-2 border-emerald-500 shadow-md"
              >
                Save Project Details
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
         PROJECT REVIEW MODAL (REQUIREMENTS #18 & #19)
         ========================================== */}
      {reviewModalOpen && selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 dark-bezel relative space-y-4 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setReviewModalOpen(false)} className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            
            <div>
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-[10px] font-black uppercase rounded-full border border-brand-200">
                Admin Evaluation Review
              </span>
              <h3 className="text-base font-black text-slate-900 mt-1">Review Candidate Submission</h3>
            </div>

            {/* Candidate & Project Card info */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <p className="font-bold text-slate-900">Candidate: <strong className="text-brand-900">{selectedSubmission.studentName}</strong> ({selectedSubmission.studentEmail})</p>
              <p className="text-slate-700 font-semibold">Course: {selectedSubmission.courseTitle}</p>
              <p className="text-slate-700 font-semibold">Project: Project {selectedSubmission.projectNumber}: {selectedSubmission.projectTitle}</p>
              
              <div className="pt-2 border-t border-slate-200 space-y-1">
                <a
                  href={selectedSubmission.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 font-mono font-bold hover:underline flex items-center gap-1 truncate"
                >
                  <Github className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">GitHub: {selectedSubmission.githubUrl}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>

                {selectedSubmission.liveUrl && (
                  <a
                    href={selectedSubmission.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-mono font-bold hover:underline flex items-center gap-1 truncate"
                  >
                    🔗 Live Demo: {selectedSubmission.liveUrl}
                  </a>
                )}
              </div>

              {selectedSubmission.candidateComments && (
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 mt-2 text-slate-600">
                  <span className="font-bold text-[11px] text-slate-500 uppercase block">Candidate Notes:</span>
                  <p className="italic mt-0.5">{selectedSubmission.candidateComments}</p>
                </div>
              )}
            </div>

            {/* Review Form */}
            <form onSubmit={handleReviewProjectSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Review Decision Status *</label>
                <select
                  name="status"
                  defaultValue={selectedSubmission.status === 'Needs Changes' ? 'Needs Changes' : 'Approved'}
                  className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                >
                  <option value="Approved">Approved ✓</option>
                  <option value="Needs Changes">Needs Changes (Request Update) ⚠️</option>
                  <option value="Under Review">Under Review ⏳</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reviewer Comments / Feedback <span className="text-slate-400 font-normal">(Sent to candidate via email)</span>
                </label>
                <textarea
                  name="reviewerComments"
                  rows={3}
                  defaultValue={selectedSubmission.reviewerComments || ''}
                  placeholder="Provide feedback or specific changes requested..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-medium"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleResendEmail(selectedSubmission.id)}
                  disabled={resendingEmail}
                  className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 flex items-center gap-1.5 w-full sm:w-auto justify-center"
                >
                  <Send className="w-3.5 h-3.5 text-brand-600" />
                  <span>{resendingEmail ? 'Sending...' : 'Resend Email'}</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-black text-white bg-brand-900 hover:bg-brand-800 rounded-xl shadow-md border-2 border-brand-800 w-full sm:w-auto justify-center"
                >
                  Save Review & Notify Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GENERATE CERTIFICATE MODAL */}
      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 dark-bezel relative space-y-4">
            <button onClick={() => setCertModalOpen(false)} className="absolute top-4 right-4 p-1 text-slate-400">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-black text-slate-900">Generate Student Certificate</h3>

            <form onSubmit={handleGenerateCertificateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Student</label>
                <select
                  value={selectedCertStudent}
                  onChange={(e) => setSelectedCertStudent(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                >
                  <option value="">Select Student...</option>
                  {students.map(s => (
                    <option key={s.id} value={s.id}>{s.name} ({s.email})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Course</label>
                <select
                  value={selectedCertCourse}
                  onChange={(e) => setSelectedCertCourse(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                >
                  <option value="">Select Course...</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Grade / Distinction</label>
                <input
                  type="text"
                  value={certGrade}
                  onChange={(e) => setCertGrade(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <input
                  type="checkbox"
                  checked={forceCertOverride}
                  onChange={(e) => setForceCertOverride(e.target.checked)}
                  id="forceOverrideCheck"
                />
                <label htmlFor="forceOverrideCheck" className="cursor-pointer">Admin Manual Override Eligibility Check</label>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-black text-white bg-brand-900 rounded-xl"
              >
                Issue Certificate
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRMATION DELETE MODAL */}
      {deleteConfirmModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 dark-bezel text-center space-y-4">
            <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-base font-black text-slate-900">Are you sure?</h3>
            <p className="text-xs text-slate-600">
              Action targeting <strong>{deleteConfirmModal.title}</strong> cannot be undone.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteConfirmModal({ open: false, type: '', id: '', title: '' })}
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 text-xs font-black text-white bg-rose-600 rounded-xl"
              >
                Confirm Action
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

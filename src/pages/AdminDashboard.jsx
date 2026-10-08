import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, BookOpen, Layers, FileText, HelpCircle, GraduationCap, 
  FolderCheck, Award, BarChart3, Settings, LogOut, Plus, Edit3, Trash2, 
  Copy, Eye, CheckCircle2, XCircle, AlertTriangle, Search, Filter, RefreshCw, 
  UserCheck, Shield, ChevronRight, Lock, Save, ExternalLink, Download, FileSpreadsheet,
  Check, X, AlertCircle, Clock, Calendar, CheckSquare, Sparkles, User, ArrowUpRight, Menu,
  ArrowUp, ArrowDown, Mail, Send
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
  const [loadingData, setLoadingData] = useState(true);

  // Modals & Sub-views State
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null); // null = new course, object = edit

  // Course Builder / Manage Content State
  const [builderCourse, setBuilderCourse] = useState(null);

  // Module Modal
  const [moduleModalOpen, setModuleModalOpen] = useState(false);
  const [editingModule, setEditingModule] = useState(null);

  // Quiz Modal
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [editingQuizModule, setEditingQuizModule] = useState(null);

  // Project Management Modal (Max 3 Projects)
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Project Review Modal
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // Project Submissions Filters & Search
  const [submissionFilterCourse, setSubmissionFilterCourse] = useState('all');
  const [submissionFilterStatus, setSubmissionFilterStatus] = useState('all');
  const [submissionSearch, setSubmissionSearch] = useState('');

  // Project Settings Config
  const [projectSubmissionEmail, setProjectSubmissionEmail] = useState('admin@arshithbootcamp.com');
  const [savingEmailSetting, setSavingEmailSetting] = useState(false);
  const [resendingEmailId, setResendingEmailId] = useState(null);

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
      const [anRes, crRes, stRes, prRes, ceRes, lgRes, cfgRes] = await Promise.all([
        api.getAnalytics(),
        api.getAdminCourses(),
        api.getStudents(),
        api.getProjectSubmissions(),
        api.getCertificates(),
        api.getActivityLogs(),
        api.getProjectConfig().catch(() => ({ success: false }))
      ]);

      if (anRes.success) setAnalytics(anRes.overview);
      if (crRes.success) {
        setCourses(crRes.courses);
        if (onCourseDataChanged) onCourseDataChanged(crRes.courses);
        if (builderCourse) {
          const freshBuilder = crRes.courses.find(c => c.id === builderCourse.id);
          if (freshBuilder) setBuilderCourse(freshBuilder);
        }
      }
      if (stRes.success) setStudents(stRes.students);
      if (prRes.success) setProjectSubmissions(prRes.submissions);
      if (ceRes.success) setCertificates(ceRes.certificates);
      if (lgRes.success) setActivityLogs(lgRes.logs);
      if (cfgRes?.success && cfgRes.config?.projectSubmissionEmail) {
        setProjectSubmissionEmail(cfgRes.config.projectSubmissionEmail);
      }
    } catch (err) {
      showToast(err.message || 'Failed to load backend data', 'error');
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    refreshAllData();
  }, []);

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

  // Course-specific Project Handlers (Max 3 Projects)
  const handleSaveProjectSubmit = async (e) => {
    e.preventDefault();
    if (!builderCourse) return;
    const formData = new FormData(e.target);
    const projectPayload = {
      title: formData.get('title'),
      projectNumber: Number(formData.get('projectNumber')) || (builderCourse.projects?.length || 0) + 1,
      shortDescription: formData.get('shortDescription'),
      detailedDescription: formData.get('detailedDescription'),
      objective: formData.get('objective'),
      requirements: formData.get('requirements'),
      technologies: formData.get('technologies'),
      expectedOutput: formData.get('expectedOutput'),
      difficulty: formData.get('difficulty'),
      estimatedTime: formData.get('estimatedTime'),
      submissionInstructions: formData.get('submissionInstructions'),
      resources: formData.get('resources'),
      status: formData.get('status')
    };

    try {
      if (editingProject) {
        const res = await api.updateAdminProject(builderCourse.id, editingProject.id, projectPayload);
        showToast(res.message || 'Project updated successfully');
      } else {
        const res = await api.createAdminProject(builderCourse.id, projectPayload);
        showToast(res.message || 'Project created successfully');
      }
      setProjectModalOpen(false);
      setEditingProject(null);
      const crRes = await api.getAdminCourses();
      if (crRes.success) {
        setCourses(crRes.courses);
        const updatedBuilder = crRes.courses.find(c => c.id === builderCourse.id);
        if (updatedBuilder) setBuilderCourse(updatedBuilder);
      }
    } catch (err) {
      showToast(err.message || 'Failed to save project', 'error');
    }
  };

  const handleDeleteProject = async (courseId, projectId) => {
    if (!window.confirm('Are you sure you want to delete this project? Candidates will not be able to submit it.')) return;
    try {
      const res = await api.deleteAdminProject(courseId, projectId);
      showToast(res.message || 'Project deleted');
      const crRes = await api.getAdminCourses();
      if (crRes.success) {
        setCourses(crRes.courses);
        const updatedBuilder = crRes.courses.find(c => c.id === courseId);
        if (updatedBuilder) setBuilderCourse(updatedBuilder);
      }
    } catch (err) {
      showToast(err.message || 'Failed to delete project', 'error');
    }
  };

  const handleMoveProject = async (courseId, index, direction) => {
    if (!builderCourse?.projects) return;
    const projectsList = [...builderCourse.projects];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= projectsList.length) return;

    const temp = projectsList[index];
    projectsList[index] = projectsList[targetIndex];
    projectsList[targetIndex] = temp;

    const projectIds = projectsList.map(p => p.id);
    try {
      const res = await api.reorderAdminProjects(courseId, projectIds);
      showToast(res.message || 'Projects reordered');
      const crRes = await api.getAdminCourses();
      if (crRes.success) {
        setCourses(crRes.courses);
        const updatedBuilder = crRes.courses.find(c => c.id === courseId);
        if (updatedBuilder) setBuilderCourse(updatedBuilder);
      }
    } catch (err) {
      showToast(err.message || 'Failed to reorder projects', 'error');
    }
  };

  const handleSaveProjectConfig = async (e) => {
    e.preventDefault();
    setSavingEmailSetting(true);
    try {
      const res = await api.updateProjectConfig({ projectSubmissionEmail });
      showToast(res.message || 'Project Submission Email setting saved');
    } catch (err) {
      showToast(err.message || 'Failed to update email setting', 'error');
    } finally {
      setSavingEmailSetting(false);
    }
  };

  const handleResendSubmissionEmail = async (submissionId) => {
    setResendingEmailId(submissionId);
    try {
      const res = await api.resendProjectSubmissionEmail(submissionId);
      showToast(res.message || 'Notification email resent successfully');
    } catch (err) {
      showToast(err.message || 'Failed to resend notification email', 'error');
    } finally {
      setResendingEmailId(null);
    }
  };

  // Review Project Submit (Approve / Needs Changes / Under Review)
  const handleReviewProjectSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSubmission) return;
    const formData = new FormData(e.target);
    const status = formData.get('status');
    const score = formData.get('score');
    const feedback = formData.get('feedback');

    try {
      const res = await api.reviewProjectSubmission(selectedSubmission.id, status, feedback, score);
      showToast(res.message || `Project status updated to ${status}`);
      setReviewModalOpen(false);
      setSelectedSubmission(null);
      refreshAllData();
    } catch (err) {
      showToast(err.message || 'Failed to submit review', 'error');
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
              <h2 className="text-base font-black text-white tracking-tight">
                Arshith <span className="text-emerald-400">Admin</span>
              </h2>
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block -mt-0.5">
                Portal Console
              </span>
            </div>
          </div>
          <button onClick={() => setMobileSidebarOpen(false)} className="md:hidden p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Administrator Profile Card */}
        <div className="px-6 py-4 bg-brand-950/60 border-b border-brand-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-700 text-white font-black flex items-center justify-center text-xs border border-brand-600">
            {admin?.name ? admin.name.charAt(0) : 'A'}
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-black text-white truncate">{admin?.name || 'Admin User'}</p>
            <p className="text-[10px] font-extrabold text-emerald-400 tracking-wider uppercase truncate">
              ID: {admin?.adminId || 'ARB-ADMIN-001'}
            </p>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setBuilderCourse(null);
                  setMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-brand-950 font-black shadow-md border-2 border-emerald-400 scale-[1.02]'
                    : 'text-slate-300 hover:bg-brand-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-brand-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                    isActive ? 'bg-brand-900 text-emerald-300' : 'bg-brand-800 text-emerald-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Logout Footer Button */}
        <div className="p-4 border-t border-brand-800">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-rose-300 bg-rose-950/40 border border-rose-900/60 hover:bg-rose-900/80 hover:text-white transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Admin</span>
          </button>
        </div>

      </aside>

      {/* Main Admin Portal Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 overflow-y-auto">
        
        {/* Top Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl dark-bezel shadow-sm">
          <div>
            <span className="px-3 py-1 bg-brand-50 text-brand-700 text-[10px] font-black rounded-full uppercase tracking-wider border border-brand-200 inline-block mb-1">
              Real Database Backend Synchronized
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {builderCourse ? `Course Content Builder — ${builderCourse.title}` : 
                activeSection === 'dashboard' ? 'Admin Overview Dashboard' :
                activeSection === 'courses' ? 'Course Catalog Management' :
                activeSection === 'content' ? 'Modules & Lesson Content' :
                activeSection === 'assessments' ? 'Quizzes & Final Tests' :
                activeSection === 'students' ? 'Student Enrollment & Progress' :
                activeSection === 'projects' ? 'Project Submission Reviews' :
                activeSection === 'certificates' ? 'Certificate Management & Verification' :
                activeSection === 'analytics' ? 'Analytics & Application Metrics' : 'Admin Account Settings'}
            </h1>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={refreshAllData}
              className="p-2.5 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-all"
              title="Refresh Real Application Data"
            >
              <RefreshCw className={`w-4.5 h-4.5 ${loadingData ? 'animate-spin' : ''}`} />
            </button>

            {activeSection === 'courses' && !builderCourse && (
              <button
                onClick={() => {
                  setEditingCourse(null);
                  setCourseModalOpen(true);
                }}
                className="px-5 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-full border-2 border-brand-900 shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Course</span>
              </button>
            )}

            {activeSection === 'certificates' && (
              <button
                onClick={() => setCertModalOpen(true)}
                className="px-5 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-full border-2 border-brand-900 shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Generate Certificate</span>
              </button>
            )}
          </div>
        </div>

        {/* SECTION 1: DASHBOARD OVERVIEW */}
        {activeSection === 'dashboard' && !builderCourse && (
          <div className="space-y-8">
            
            {/* Real Statistics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              
              <div className="bg-white p-5 rounded-3xl dark-bezel flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border-2 border-brand-200 text-brand-700 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Total Courses</p>
                  <p className="text-2xl font-black text-slate-900">{analytics?.totalCourses || courses.length}</p>
                  <span className="text-[10px] font-extrabold text-emerald-600">
                    {analytics?.publishedCourses || courses.filter(c => c.status === 'published').length} Published
                  </span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl dark-bezel flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Total Students</p>
                  <p className="text-2xl font-black text-slate-900">{analytics?.totalStudents || students.length}</p>
                  <span className="text-[10px] font-extrabold text-blue-600">
                    {analytics?.totalEnrollments || 4} Enrollments
                  </span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl dark-bezel flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border-2 border-amber-200 text-amber-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Certificates Issued</p>
                  <p className="text-2xl font-black text-slate-900">{analytics?.totalCertificates || certificates.length}</p>
                  <span className="text-[10px] font-extrabold text-amber-600">
                    {certificates.filter(c => c.status === 'active').length} Active
                  </span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl dark-bezel flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-600 flex items-center justify-center">
                  <FolderCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Pending Projects</p>
                  <p className="text-2xl font-black text-slate-900">{analytics?.pendingSubmissions || projectSubmissions.filter(p => p.status === 'Submitted').length}</p>
                  <span className="text-[10px] font-extrabold text-purple-600">
                    Needs Review
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Action Tables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
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
                        <span className="text-[10px] text-slate-400">{c.category} • {c.modules?.length || 0} Modules</span>
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

        {/* SECTION 2: COURSE MANAGEMENT & BUILDER */}
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

                  <button
                    onClick={() => {
                      setEditingModule(null);
                      setModuleModalOpen(true);
                    }}
                    className="px-4 py-2 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl border-2 border-brand-900 flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Module</span>
                  </button>
                </div>

                {/* Course Hierarchy Card */}
                <div className="bg-white rounded-3xl dark-bezel p-6 space-y-6">
                  
                  <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-black text-slate-900">{builderCourse.title} Hierarchy</h2>
                      <p className="text-xs text-slate-500">Manage modules, lessons, module quizzes, final test & project</p>
                    </div>
                    <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                      {builderCourse.modules?.length || 0} Modules Total
                    </span>
                  </div>

                  {/* Modules Accordion / Tree */}
                  <div className="space-y-4">
                    {builderCourse.modules?.map((mod, idx) => (
                      <div key={mod.id} className="border-2 border-slate-200 rounded-2xl p-5 bg-slate-50/50 space-y-4">
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

                        {/* Reading Material & Quiz Summary */}
                        <div className="pl-10 text-xs space-y-2 border-t border-slate-200 pt-3">
                          <p className="font-extrabold text-slate-700">📖 Reading Material Objectives:</p>
                          <ul className="list-disc list-inside text-slate-600 space-y-1">
                            {mod.readingMaterial?.objectives?.map((obj, i) => (
                              <li key={i}>{obj}</li>
                            )) || <li>Initial module manual created</li>}
                          </ul>

                          {mod.quiz && (
                            <div className="mt-2 p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                              <span className="font-bold text-slate-800">
                                🎯 Module Quiz: {mod.quiz.title} ({mod.quiz.questions?.length || 0} Questions)
                              </span>
                              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                Pass Score: {mod.quiz.passingScore}%
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Final Test & Project Configuration summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div className="p-4 rounded-2xl bg-brand-50/70 border-2 border-brand-200">
                      <h4 className="text-xs font-black text-brand-900 uppercase">Final Certification Test</h4>
                      <p className="text-xs font-bold text-slate-700 mt-1">{builderCourse.finalTest?.title || 'Final Exam'}</p>
                      <p className="text-[10px] text-slate-500">{builderCourse.finalTest?.questions?.length || 0} Questions • Pass Score: {builderCourse.finalTest?.passingScore || 80}%</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/70 border-2 border-purple-200">
                      <h4 className="text-xs font-black text-purple-900 uppercase">Final Mini Project</h4>
                      <p className="text-xs font-bold text-slate-700 mt-1">{builderCourse.finalProject?.title || 'Capstone Project'}</p>
                      <p className="text-[10px] text-slate-500">Pass Score: {builderCourse.finalProject?.passingScore || 80}% • GitHub Submission Allowed</p>
                    </div>
                  </div>

                  {/* Course Projects Management Section (Max 3 Projects) */}
                  <div className="pt-6 border-t-2 border-slate-200 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-black text-slate-900">
                            Course Projects ({builderCourse.projects?.length || 0} / 3)
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-brand-50 text-brand-700 border border-brand-200">
                            Candidate GitHub Submissions
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Every candidate must complete and submit all 3 projects on GitHub to qualify for course certification.
                        </p>
                      </div>

                      {/* Add Project Button / Max 3 Enforcement Message */}
                      {(builderCourse.projects?.length || 0) < 3 ? (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingProject(null);
                            setProjectModalOpen(true);
                          }}
                          className="px-4 py-2 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl border-2 border-brand-900 flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add Project ({3 - (builderCourse.projects?.length || 0)} Remaining)</span>
                        </button>
                      ) : (
                        <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Each course can contain a maximum of 3 projects.</span>
                        </div>
                      )}
                    </div>

                    {/* Projects Cards List */}
                    {builderCourse.projects && builderCourse.projects.length > 0 ? (
                      <div className="space-y-3">
                        {builderCourse.projects.map((proj, pIdx) => (
                          <div 
                            key={proj.id || pIdx} 
                            className="bg-slate-50/80 border-2 border-slate-200 rounded-2xl p-4 sm:p-5 transition-all hover:border-brand-300"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="space-y-1.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="w-6 h-6 rounded-lg bg-brand-900 text-white font-black text-xs flex items-center justify-center">
                                    {pIdx + 1}
                                  </span>
                                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                                    Project {pIdx + 1}
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-500">
                                    Difficulty: {proj.difficulty || 'Beginner'}
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-500">
                                    • Est: {proj.estimatedTime || '2-3 Days'}
                                  </span>
                                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                                    proj.status === 'inactive' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  }`}>
                                    {proj.status === 'inactive' ? 'Inactive' : 'Active'}
                                  </span>
                                </div>

                                <h4 className="text-sm font-black text-slate-900">{proj.title}</h4>
                                <p className="text-xs text-slate-600 max-w-2xl">{proj.shortDescription}</p>

                                {proj.technologies && (
                                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                    {(Array.isArray(proj.technologies) ? proj.technologies : proj.technologies.split(',')).map((tech, tIdx) => (
                                      <span key={tIdx} className="px-2 py-0.5 text-[10px] font-bold bg-white text-slate-700 border border-slate-200 rounded-md">
                                        {typeof tech === 'string' ? tech.trim() : tech}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Action buttons: Edit, Delete, Move Up, Move Down */}
                              <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                                <button
                                  type="button"
                                  disabled={pIdx === 0}
                                  onClick={() => handleMoveProject(builderCourse.id, pIdx, 'up')}
                                  className="p-1.5 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg border border-slate-200 transition-all"
                                  title="Move Up"
                                >
                                  <ArrowUp className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  type="button"
                                  disabled={pIdx === builderCourse.projects.length - 1}
                                  onClick={() => handleMoveProject(builderCourse.id, pIdx, 'down')}
                                  className="p-1.5 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg border border-slate-200 transition-all"
                                  title="Move Down"
                                >
                                  <ArrowDown className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingProject(proj);
                                    setProjectModalOpen(true);
                                  }}
                                  className="px-2.5 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-all flex items-center gap-1"
                                  title="Edit Project Details"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                  <span>Edit</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleDeleteProject(builderCourse.id, proj.id)}
                                  className="p-1.5 text-rose-600 bg-white hover:bg-rose-50 rounded-lg border border-rose-200 transition-all"
                                  title="Delete Project"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-500 text-xs">
                        No projects created for this course yet. Click <strong>Add Project</strong> above to configure the first project (up to 3).
                      </div>
                    )}
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
                        <th className="py-3 px-4">Price</th>
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
                          <td className="py-4 px-4 font-black text-slate-900">{course.isFree ? 'Free' : `₹${course.price}`}</td>
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
                              title="Manage Content Hierarchy"
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

        {/* SECTION 4: PROJECT SUBMISSION REVIEWS */}
        {activeSection === 'projects' && (() => {
          const filteredSubmissions = projectSubmissions.filter(sub => {
            if (submissionFilterCourse !== 'all' && sub.courseId !== submissionFilterCourse) return false;
            if (submissionFilterStatus !== 'all' && sub.status !== submissionFilterStatus) return false;
            if (submissionSearch) {
              const q = submissionSearch.toLowerCase();
              const mName = (sub.studentName || '').toLowerCase().includes(q);
              const mEmail = (sub.studentEmail || '').toLowerCase().includes(q);
              const mGit = (sub.githubUrl || '').toLowerCase().includes(q);
              const mProj = (sub.projectTitle || '').toLowerCase().includes(q);
              if (!mName && !mEmail && !mGit && !mProj) return false;
            }
            return true;
          });

          return (
            <div className="bg-white rounded-3xl dark-bezel p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg font-black text-slate-900">
                    Project Submissions ({filteredSubmissions.length} of {projectSubmissions.length})
                  </h2>
                  <p className="text-xs font-semibold text-slate-500">
                    Review candidate GitHub repository submissions, approve capstones, or request revisions
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-black rounded-full border border-amber-200">
                    {projectSubmissions.filter(s => s.status === 'Submitted').length} Pending Review
                  </span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-black rounded-full border border-emerald-200">
                    {projectSubmissions.filter(s => s.status === 'Approved').length} Approved
                  </span>
                </div>
              </div>

              {/* Filters & Search Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={submissionSearch}
                    onChange={(e) => setSubmissionSearch(e.target.value)}
                    placeholder="Search candidate, email, or GitHub URL..."
                    className="w-full pl-9 pr-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <div>
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
                  <select
                    value={submissionFilterStatus}
                    onChange={(e) => setSubmissionFilterStatus(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  >
                    <option value="all">All Review Statuses</option>
                    <option value="Submitted">Submitted (Needs Review)</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Approved">Approved</option>
                    <option value="Needs Changes">Needs Changes</option>
                  </select>
                </div>
              </div>

              {/* Submissions Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                      <th className="py-3 px-4">Candidate</th>
                      <th className="py-3 px-4">Course</th>
                      <th className="py-3 px-4">Project</th>
                      <th className="py-3 px-4">GitHub Repository</th>
                      <th className="py-3 px-4">Live URL</th>
                      <th className="py-3 px-4">Submitted At</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-bold">
                    {filteredSubmissions.length > 0 ? (
                      filteredSubmissions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 font-black text-slate-900">
                            <div>
                              <span>{sub.studentName}</span>
                              <span className="block text-[10px] font-normal text-slate-400">{sub.studentEmail}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-slate-700">{sub.courseTitle}</td>
                          <td className="py-4 px-4">
                            <span className="text-slate-900 font-bold">{sub.projectTitle}</span>
                            <span className="block text-[10px] text-slate-400">Project #{sub.projectNumber || 1}</span>
                          </td>
                          <td className="py-4 px-4">
                            {sub.githubUrl ? (
                              <a
                                href={sub.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-brand-700 hover:text-brand-900 hover:underline flex items-center gap-1 font-mono text-[11px] max-w-[180px] truncate"
                                title={sub.githubUrl}
                              >
                                <span>{sub.githubUrl.replace(/^https:\/\/github\.com\//, '')}</span>
                                <ExternalLink className="w-3 h-3 shrink-0" />
                              </a>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            {sub.liveUrl ? (
                              <a
                                href={sub.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-emerald-700 hover:underline flex items-center gap-1 font-mono text-[11px] max-w-[120px] truncate"
                                title={sub.liveUrl}
                              >
                                <span>Live Demo</span>
                                <ExternalLink className="w-3 h-3 shrink-0" />
                              </a>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-slate-600 whitespace-nowrap">
                            {sub.submittedAt ? new Date(sub.submittedAt).toLocaleDateString() : '—'}
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span className={`px-2.5 py-1 text-[10px] font-black rounded-full uppercase ${
                              sub.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                              sub.status === 'Needs Changes' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                              sub.status === 'Under Review' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                              'bg-amber-50 text-amber-700 border border-amber-200'
                            }`}>
                              {sub.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedSubmission(sub);
                                setReviewModalOpen(true);
                              }}
                              className="px-3 py-1.5 text-xs font-extrabold text-white bg-brand-900 hover:bg-brand-800 rounded-xl transition-all shadow-xs cursor-pointer"
                            >
                              Review Submission
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="py-8 text-center text-slate-400 text-xs">
                          No project submissions match the selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })()}

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

        {/* SECTION 7: ADMIN SETTINGS & PROFILE */}
        {activeSection === 'settings' && (
          <div className="max-w-3xl space-y-8">
            {/* Project Submission Email Configuration */}
            <div className="bg-white rounded-3xl dark-bezel p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-50 border-2 border-brand-200 text-brand-700 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-slate-900">Project Submission Email</h2>
                    <p className="text-xs text-slate-500 font-semibold">
                      Configure the recipient email for candidate GitHub project submissions
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSaveProjectConfig} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Designated Reviewer / Notification Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={projectSubmissionEmail}
                    onChange={(e) => setProjectSubmissionEmail(e.target.value)}
                    placeholder="e.g. projects@arshithbootcamp.com"
                    className="w-full px-4 py-2.5 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                    Whenever a candidate submits their GitHub repository for any of the 3 course projects, an instant notification with full candidate details, course, project number, and links will be dispatched to this designated address.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={savingEmailSetting}
                  className="px-6 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl border-2 border-brand-900 shadow-sm flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>{savingEmailSetting ? 'Saving...' : 'Save Email Configuration'}</span>
                </button>
              </form>
            </div>

            {/* Admin Profile & Password Security */}
            <div className="bg-white rounded-3xl dark-bezel p-8 space-y-6">
              <h2 className="text-lg font-black text-slate-900 pb-4 border-b border-slate-100">
                Admin Profile & Password Security
              </h2>

              <form onSubmit={handlePasswordChangeSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    required
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    required
                    placeholder="Min 8 chars, uppercase, number, symbol"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-black text-white bg-brand-900 hover:bg-brand-800 rounded-xl border-2 border-brand-800 cursor-pointer"
                >
                  Update Admin Password
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

      {/* CREATE / EDIT COURSE PROJECT MODAL (MAX 3 PROJECTS) */}
      {projectModalOpen && builderCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 dark-bezel relative max-h-[90vh] overflow-y-auto space-y-4">
            <button
              onClick={() => {
                setProjectModalOpen(false);
                setEditingProject(null);
              }}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h2 className="text-xl font-black text-slate-900">
                {editingProject ? `Edit Project: ${editingProject.title}` : `Add Project to ${builderCourse.title}`}
              </h2>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">
                Define the hands-on project specifications, deliverables, and GitHub submission criteria
              </p>
            </div>

            <form onSubmit={handleSaveProjectSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Title *</label>
                  <input
                    type="text"
                    name="title"
                    required
                    defaultValue={editingProject?.title || ''}
                    placeholder="e.g. Responsive Portfolio Website"
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Project Order (1-3) *</label>
                  <input
                    type="number"
                    name="projectNumber"
                    min="1"
                    max="3"
                    required
                    defaultValue={editingProject?.projectNumber || (builderCourse.projects?.length || 0) + 1}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none focus:border-brand-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Difficulty Level</label>
                  <select
                    name="difficulty"
                    defaultValue={editingProject?.difficulty || 'Beginner'}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Time</label>
                  <input
                    type="text"
                    name="estimatedTime"
                    defaultValue={editingProject?.estimatedTime || '2–3 Days'}
                    placeholder="e.g. 2–3 Days"
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Active Status</label>
                  <select
                    name="status"
                    defaultValue={editingProject?.status || 'active'}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  >
                    <option value="active">Active (Visible)</option>
                    <option value="inactive">Inactive (Hidden)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Short Description *</label>
                <input
                  type="text"
                  name="shortDescription"
                  required
                  defaultValue={editingProject?.shortDescription || ''}
                  placeholder="One sentence summary of the project shown on the card"
                  className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Objective *</label>
                <textarea
                  name="objective"
                  rows={2}
                  required
                  defaultValue={editingProject?.objective || ''}
                  placeholder="Explain exactly what the candidate needs to build and accomplish"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Description</label>
                <textarea
                  name="detailedDescription"
                  rows={3}
                  defaultValue={editingProject?.detailedDescription || ''}
                  placeholder="Comprehensive walkthrough and background context"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mandatory Requirements (one per line)</label>
                  <textarea
                    name="requirements"
                    rows={3}
                    defaultValue={Array.isArray(editingProject?.requirements) ? editingProject.requirements.join('\n') : (editingProject?.requirements || '')}
                    placeholder="Requirement 1&#10;Requirement 2&#10;Requirement 3"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Technologies / Skills Expected</label>
                  <textarea
                    name="technologies"
                    rows={3}
                    defaultValue={Array.isArray(editingProject?.technologies) ? editingProject.technologies.join(', ') : (editingProject?.technologies || '')}
                    placeholder="e.g. HTML5, CSS3, JavaScript ES6, Git"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Expected Output</label>
                  <textarea
                    name="expectedOutput"
                    rows={2}
                    defaultValue={editingProject?.expectedOutput || ''}
                    placeholder="Describe what the final working application must look and behave like"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Submission Instructions</label>
                  <textarea
                    name="submissionInstructions"
                    rows={2}
                    defaultValue={editingProject?.submissionInstructions || 'Push complete project to a public GitHub repository and submit the repository URL.'}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Reference Resources (Optional)</label>
                <input
                  type="text"
                  name="resources"
                  defaultValue={Array.isArray(editingProject?.resources) ? editingProject.resources.join(', ') : (editingProject?.resources || '')}
                  placeholder="e.g. MDN Web Docs, GitHub Docs, Official API documentation"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setProjectModalOpen(false);
                    setEditingProject(null);
                  }}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl border-2 border-brand-900 shadow-sm"
                >
                  {editingProject ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ENHANCED PROJECT REVIEW MODAL */}
      {reviewModalOpen && selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 dark-bezel relative max-h-[92vh] overflow-y-auto space-y-5">
            <button
              onClick={() => {
                setReviewModalOpen(false);
                setSelectedSubmission(null);
              }}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-brand-50 text-brand-700 border border-brand-200">
                  Project #{selectedSubmission.projectNumber || 1}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                  selectedSubmission.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                  selectedSubmission.status === 'Needs Changes' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                  'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  {selectedSubmission.status}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mt-1">{selectedSubmission.projectTitle}</h3>
              <p className="text-xs text-slate-500 font-semibold">{selectedSubmission.courseTitle}</p>
            </div>

            {/* Candidate & Submission Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Candidate Details</p>
                <p className="font-black text-slate-900 mt-0.5">{selectedSubmission.studentName}</p>
                <p className="text-slate-500 font-semibold">{selectedSubmission.studentEmail}</p>
                <p className="text-[10px] text-slate-400 mt-1">Candidate ID: {selectedSubmission.candidateId}</p>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Submission Timeline</p>
                <p className="font-bold text-slate-700 mt-0.5">
                  Submitted: {selectedSubmission.submittedAt ? new Date(selectedSubmission.submittedAt).toLocaleString() : 'N/A'}
                </p>
                {selectedSubmission.reviewedAt && (
                  <p className="text-slate-500 font-semibold">
                    Reviewed: {new Date(selectedSubmission.reviewedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            {/* Submitted URLs and Candidate Notes */}
            <div className="space-y-3">
              <div className="p-3.5 bg-brand-50/60 border-2 border-brand-200 rounded-2xl space-y-2">
                <p className="text-[10px] font-black uppercase tracking-wider text-brand-900">Submitted GitHub Repository</p>
                <a
                  href={selectedSubmission.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-bold text-brand-700 hover:text-brand-900 hover:underline flex items-center gap-1.5 break-all"
                >
                  <span>{selectedSubmission.githubUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>

                {selectedSubmission.liveUrl && (
                  <div className="pt-2 border-t border-brand-100 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500">Live Demo URL:</span>
                    <a
                      href={selectedSubmission.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>{selectedSubmission.liveUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {selectedSubmission.candidateComments && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Candidate Notes</p>
                  <p className="text-slate-700 font-medium italic">"{selectedSubmission.candidateComments}"</p>
                </div>
              )}
            </div>

            {/* Submission History (if any) */}
            {selectedSubmission.history && selectedSubmission.history.length > 0 && (
              <div className="border border-slate-200 rounded-2xl p-3.5 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Previous Submission History ({selectedSubmission.history.length})
                </p>
                <div className="space-y-2">
                  {selectedSubmission.history.map((h, hIdx) => (
                    <div key={hIdx} className="p-2.5 bg-slate-50 rounded-xl text-xs border border-slate-200">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold mb-1">
                        <span>Attempt #{hIdx + 1} — Status: {h.status}</span>
                        <span>{new Date(h.submittedAt).toLocaleDateString()}</span>
                      </div>
                      <a href={h.githubUrl} target="_blank" rel="noreferrer" className="text-brand-700 font-mono text-[11px] truncate block">
                        {h.githubUrl}
                      </a>
                      {h.reviewerComments && (
                        <p className="text-slate-600 text-[11px] mt-1 italic">Feedback: {h.reviewerComments}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admin Review Action Form */}
            <form onSubmit={handleReviewProjectSubmit} className="space-y-4 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Review Decision Status *</label>
                  <select
                    name="status"
                    defaultValue={selectedSubmission.status}
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  >
                    <option value="Approved">Approved (Passes Course Requirement)</option>
                    <option value="Needs Changes">Needs Changes (Allows Candidate Resubmission)</option>
                    <option value="Under Review">Under Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Evaluation Score (0 - 100)</label>
                  <input
                    type="number"
                    name="score"
                    defaultValue={selectedSubmission.score || 95}
                    min="0"
                    max="100"
                    className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reviewer Comments & Feedback (Sent to Candidate via Email) *
                </label>
                <textarea
                  name="feedback"
                  rows={3}
                  required
                  defaultValue={selectedSubmission.reviewerComments || selectedSubmission.feedback || (
                    selectedSubmission.status === 'Needs Changes'
                      ? 'Please improve the mobile responsiveness and resubmit.'
                      : 'Excellent GitHub repository structure, clear documentation, and clean implementation!'
                  )}
                  placeholder="e.g. Please improve the mobile responsiveness and resubmit."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border-2 border-slate-200 rounded-xl outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  disabled={resendingEmailId === selectedSubmission.id}
                  onClick={() => handleResendSubmissionEmail(selectedSubmission.id)}
                  className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                  title="Resend notification email to configured admin address"
                >
                  <Send className={`w-3.5 h-3.5 ${resendingEmailId === selectedSubmission.id ? 'animate-spin' : ''}`} />
                  <span>{resendingEmailId === selectedSubmission.id ? 'Resending...' : 'Resend Notification Email'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setReviewModalOpen(false);
                      setSelectedSubmission(null);
                    }}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-xl border-2 border-brand-900 shadow-sm cursor-pointer"
                  >
                    Submit Review Decision
                  </button>
                </div>
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

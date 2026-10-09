import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, CheckCircle, Circle, Award, Download, 
  ChevronRight, ChevronLeft, BookOpen, ExternalLink, 
  Code, Sparkles, AlertTriangle, CheckSquare, HelpCircle, FileText,
  FolderGit2, Github, Send, Clock, AlertCircle, RefreshCw, X
} from 'lucide-react';
import { generateCoursePDF } from '../utils/pdfGenerator';
import { api } from '../services/api';
import CourseProjectsModal from '../components/CourseProjectsModal';

export default function LearningPage({ 
  course, 
  activeModuleId, 
  onBack, 
  onToggleModuleComplete, 
  onViewCertificate 
}) {
  const [currentModule, setCurrentModule] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  // Final 25-Question Exam State
  const [showFinalExam, setShowFinalExam] = useState(false);
  const [finalAnswers, setFinalAnswers] = useState({});
  const [isFinalSubmitted, setIsFinalSubmitted] = useState(false);

  // Course Projects State
  const [showProjectsSection, setShowProjectsSection] = useState(false);
  const [courseProjects, setCourseProjects] = useState([]);
  const [projectSubmissions, setProjectSubmissions] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  
  // Submission Form State
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [candidateComments, setCandidateComments] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [submissionSuccessMsg, setSubmissionSuccessMsg] = useState('');

  // Fetch course projects & candidate submissions from backend
  const fetchProjectsAndSubmissions = async () => {
    if (!course || !course.id) return;
    try {
      const pRes = await api.getCourseProjects(course.id);
      if (pRes.success && pRes.projects) {
        setCourseProjects(pRes.projects);
      }
    } catch (e) {
      console.warn('Failed to fetch course projects from backend:', e);
      if (course.projects) setCourseProjects(course.projects);
    }

    try {
      const sRes = await api.getStudentSubmissions('STU-001', course.id);
      if (sRes.success && sRes.submissions) {
        setProjectSubmissions(sRes.submissions);
      }
    } catch (e) {
      console.warn('Failed to fetch student submissions:', e);
    }
  };

  useEffect(() => {
    fetchProjectsAndSubmissions();

    if (!course || !course.modules || course.modules.length === 0) return;

    if (activeModuleId) {
      const mod = course.modules.find(m => m.id === activeModuleId);
      if (mod) {
        setCurrentModule(mod);
        setShowSolution(false);
        setQuizAnswers({});
        setShowFinalExam(false);
        setShowProjectsSection(false);
        return;
      }
    }

    // Default to first module
    setCurrentModule(course.modules[0]);
    setShowSolution(false);
    setQuizAnswers({});
    setShowFinalExam(false);
    setShowProjectsSection(false);
  }, [course, activeModuleId]);

  if (!course) return null;

  const currentModuleIndex = course.modules?.findIndex(m => m.id === currentModule?.id) ?? 0;
  const completedCount = course.modules?.filter(m => m.completed).length || 0;
  const totalCount = course.modules?.length || 1;

  // Projects Stats
  const activeProjectsList = courseProjects.filter(p => p.active !== false);
  const approvedProjectsCount = activeProjectsList.filter(p => {
    const sub = projectSubmissions.find(s => s.projectId === p.id);
    return sub && sub.status === 'Approved';
  }).length;

  const submittedProjectsCount = activeProjectsList.filter(p => {
    const sub = projectSubmissions.find(s => s.projectId === p.id);
    return sub && (sub.status === 'Approved' || sub.status === 'Submitted' || sub.status === 'Under Review');
  }).length;

  const isCourseFullyCompleted = (course.progress === 100 || completedCount === totalCount) && (activeProjectsList.length === 0 || approvedProjectsCount >= activeProjectsList.length || submittedProjectsCount >= activeProjectsList.length);

  // Module reading material shorthand
  const rm = currentModule?.readingMaterial;

  // Final Exam Helper Calculations
  const finalQuestions = course.finalTest?.questions || [];
  const finalScore = finalQuestions.filter((q, idx) => finalAnswers[idx] === q.correctAnswer).length;
  const finalPct = finalQuestions.length ? Math.round((finalScore / finalQuestions.length) * 100) : 0;
  const isFinalPassed = finalPct >= 80;

  // Navigation Handlers for Modules
  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModule(course.modules[currentModuleIndex - 1]);
      setShowSolution(false);
      setQuizAnswers({});
      setShowFinalExam(false);
      setShowProjectsSection(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentModuleIndex < (course.modules?.length || 1) - 1) {
      setCurrentModule(course.modules[currentModuleIndex + 1]);
      setShowSolution(false);
      setQuizAnswers({});
      setShowFinalExam(false);
      setShowProjectsSection(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMarkComplete = () => {
    if (currentModule && onToggleModuleComplete) {
      onToggleModuleComplete(course.id, currentModule.id);
    }
  };

  // Validate GitHub URL helper
  const validateGithubUrlInput = (urlStr) => {
    if (!urlStr || !urlStr.trim()) {
      return 'Please enter a valid GitHub repository URL.';
    }
    const trimmed = urlStr.trim();
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+(\/.*)?$/;
    if (!githubRegex.test(trimmed)) {
      return 'Please enter a valid GitHub repository URL.';
    }
    return '';
  };

  // Open Project Details Modal
  const handleOpenProjectDetails = (proj) => {
    setSelectedProject(proj);
    const existingSub = projectSubmissions.find(s => s.projectId === proj.id);
    if (existingSub) {
      setGithubUrl(existingSub.githubUrl || '');
      setLiveUrl(existingSub.liveUrl || '');
      setCandidateComments(existingSub.candidateComments || '');
    } else {
      setGithubUrl('');
      setLiveUrl('');
      setCandidateComments('');
    }
    setValidationError('');
    setSubmissionSuccessMsg('');
    setShowProjectModal(true);
  };

  // Initiate Submission (Step 1: Open Confirmation)
  const handleInitiateSubmission = (e) => {
    e.preventDefault();
    const err = validateGithubUrlInput(githubUrl);
    if (err) {
      setValidationError(err);
      return;
    }
    setValidationError('');
    setShowConfirmModal(true);
  };

  // Final Submit Project (Step 2: Submit to Backend)
  const handleConfirmSubmitProject = async () => {
    if (!selectedProject) return;
    setShowConfirmModal(false);
    setSubmitting(true);
    setValidationError('');

    try {
      const res = await api.submitProject(selectedProject.id, {
        studentId: 'STU-001',
        githubUrl,
        liveUrl,
        candidateComments
      });

      if (res.success) {
        setSubmissionSuccessMsg('Project submitted successfully.');
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        await fetchProjectsAndSubmissions();
        setTimeout(() => {
          setShowProjectModal(false);
          setSubmissionSuccessMsg('');
        }, 1800);
      } else {
        setValidationError(res.message || 'Unable to submit the project. Please try again.');
      }
    } catch (err) {
      console.error('Project submission error:', err);
      setValidationError(err.message || 'Unable to submit the project. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getSubmissionForProject = (projId) => {
    return projectSubmissions.find(s => s.projectId === projId);
  };

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full text-xs font-black flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> Approved</span>;
      case 'Submitted':
      case 'Under Review':
        return <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/40 rounded-full text-xs font-black flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Submitted</span>;
      case 'Needs Changes':
        return <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full text-xs font-black flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> Needs Changes</span>;
      default:
        return <span className="px-3 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded-full text-xs font-black">Not Started</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Bar */}
      <header className="bg-slate-900 border-b-2 border-brand-900 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1.5 text-xs font-extrabold border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Exit Boot Camp Player</span>
          </button>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div>
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">{course.title}</span>
            <h2 className="text-sm font-black text-white truncate max-w-xs sm:max-w-md">
              {showProjectsSection 
                ? `Course Projects (${activeProjectsList.length})` 
                : showFinalExam 
                ? course.finalTest?.title 
                : currentModule?.title}
            </h2>
          </div>
        </div>

        {/* Progress Tracker Widget */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Boot Camp Progress</p>
              <p className="text-xs font-black text-emerald-400">
                {completedCount}/{totalCount} Modules • {submittedProjectsCount}/{activeProjectsList.length || 3} Projects
              </p>
            </div>
            <div className="w-28 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => {
              try {
                if (!course) {
                  alert("Course PDF is currently unavailable.");
                  return;
                }
                generateCoursePDF(course);
              } catch (err) {
                console.error("Course PDF download error:", err);
                alert("Course PDF is currently unavailable.");
              }
            }}
            className="px-3 py-1.5 text-xs font-extrabold text-white bg-brand-900 hover:bg-brand-800 border border-brand-700 rounded-lg flex items-center gap-1.5"
            title="Download Complete Course Manual PDF"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Course PDF</span>
          </button>

          {isCourseFullyCompleted && (
            <button
              onClick={() => onViewCertificate(course.id)}
              className="px-4 py-1.5 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Get Certificate</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 grid lg:grid-cols-12 overflow-hidden">
        
        {/* Left Sidebar: Modules List (4 Cols) */}
        <div className="lg:col-span-4 bg-slate-900/90 border-r border-slate-800 overflow-y-auto max-h-[calc(100vh-60px)] p-4 space-y-4">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-black">
              <span className="text-slate-300 uppercase">Boot Camp Progression</span>
              <span className="text-emerald-400">{course.progress}% Completed</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          {/* Modules Tree */}
          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Curriculum Modules</p>
            {course.modules?.map((mod, idx) => {
              const isSelected = !showFinalExam && !showProjectsSection && currentModule?.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setCurrentModule(mod);
                    setShowSolution(false);
                    setQuizAnswers({});
                    setShowFinalExam(false);
                    setShowProjectsSection(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all border ${
                    isSelected
                      ? 'bg-brand-600 text-white border-brand-500 font-bold shadow-lg'
                      : mod.completed
                      ? 'bg-slate-900/80 text-emerald-300 border-slate-800/80 hover:bg-slate-800'
                      : 'bg-slate-900/40 text-slate-300 border-slate-800/60 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {mod.completed ? (
                      <CheckCircle className={`w-4.5 h-4.5 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                    ) : (
                      <Circle className={`w-4.5 h-4.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                    )}
                    <span className="text-xs font-bold truncate">
                      {mod.title}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono opacity-80 shrink-0 ml-1">
                    {mod.completed ? '✓' : `M${idx + 1}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Course Projects Navigation Button */}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setShowProjectsSection(true);
                setShowFinalExam(false);
                setCurrentModule(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all border ${
                showProjectsSection
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-xl'
                  : 'bg-emerald-950/40 text-emerald-300 border-emerald-800/80 hover:bg-emerald-900/60 font-bold'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <FolderGit2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <div>
                  <span className="text-xs font-black block truncate">Course Projects</span>
                  <span className="text-[10px] text-emerald-200/80 font-normal">
                    {submittedProjectsCount} of {activeProjectsList.length || 3} Submitted
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-900/60 rounded border border-emerald-700 text-emerald-200 shrink-0">
                3 PROJS
              </span>
            </button>
          </div>

          {/* Final Comprehensive Exam Button */}
          {course.finalTest && (
            <button
              onClick={() => {
                setShowFinalExam(true);
                setShowProjectsSection(false);
                setCurrentModule(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all border mt-2 ${
                showFinalExam
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-xl'
                  : 'bg-amber-950/40 text-amber-300 border-amber-800/80 hover:bg-amber-900/60 font-bold'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="w-5 h-5 shrink-0 text-amber-400" />
                <div>
                  <span className="text-xs font-black block truncate">Final Certification Exam</span>
                  <span className="text-[10px] text-amber-200/80 font-normal">25 Comprehensive MCQs</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-900/60 rounded border border-amber-700 text-amber-200 shrink-0">
                EXAM
              </span>
            </button>
          )}
        </div>

        {/* Right Main Stage: Projects Section OR Final Exam OR Reading Material */}
        <div className="lg:col-span-8 p-4 sm:p-8 overflow-y-auto space-y-8 max-w-4xl mx-auto w-full">

          {showProjectsSection ? (
            /* ==========================================
               PROJECTS SECTION (REQUIREMENTS #4, #5, #14)
               ========================================== */
            <div className="space-y-8">
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500 space-y-4 shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-800/60 pb-3">
                  <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase rounded-full tracking-wider">
                    Practical Course Projects
                  </span>
                  <span className="text-xs font-bold text-emerald-300">
                    Mandatory 3 Course-Specific Projects
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">{course.title} Projects</h1>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Each candidate must complete all 3 projects below and submit their GitHub repository links. Submitted repository links will be evaluated by the review team.
                </p>

                {/* Progress Summary Card */}
                <div className="bg-slate-900/90 p-4 rounded-2xl border border-emerald-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Project Submission Progress</p>
                    <p className="text-sm font-black text-white mt-0.5">
                      {submittedProjectsCount} of {activeProjectsList.length || 3} Submitted ({approvedProjectsCount} Approved)
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {activeProjectsList.map((p, idx) => {
                      const sub = getSubmissionForProject(p.id);
                      const isApproved = sub && sub.status === 'Approved';
                      const isSubmitted = sub && (sub.status === 'Submitted' || sub.status === 'Under Review');
                      const isNeedsChanges = sub && sub.status === 'Needs Changes';

                      return (
                        <div
                          key={p.id}
                          className={`px-3 py-1 rounded-lg text-xs font-black border flex items-center gap-1 ${
                            isApproved
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                              : isSubmitted
                              ? 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                              : isNeedsChanges
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                              : 'bg-slate-800 text-slate-400 border-slate-700'
                          }`}
                        >
                          <span>P{idx + 1}</span>
                          {isApproved ? '✓' : isSubmitted ? '⏳' : isNeedsChanges ? '⚠️' : '○'}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Projects Grid List */}
              <div className="space-y-6">
                {activeProjectsList.map((project) => {
                  const sub = getSubmissionForProject(project.id);
                  const status = sub ? sub.status : 'Not Started';

                  return (
                    <div
                      key={project.id}
                      className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 hover:border-brand-500/50 transition-all space-y-4 shadow-md"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest">
                            PROJECT {project.projectNumber}
                          </span>
                          <h3 className="text-xl font-black text-white">{project.title}</h3>
                        </div>

                        <div>
                          {renderStatusBadge(status)}
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 font-medium leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs">
                        <div className="flex items-center gap-4 text-slate-400 font-bold">
                          <span>Difficulty: <strong className="text-white">{project.difficulty || 'Intermediate'}</strong></span>
                          <span>Est. Time: <strong className="text-white">{project.estimatedTime || '2-3 Days'}</strong></span>
                        </div>

                        <button
                          onClick={() => handleOpenProjectDetails(project)}
                          className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs rounded-full shadow-md transition-all flex items-center gap-2 border border-brand-400"
                        >
                          <FolderGit2 className="w-4 h-4" />
                          <span>{sub ? 'View / Update Submission' : 'View Project'}</span>
                        </button>
                      </div>

                      {/* Display Submitted Details if exists */}
                      {sub && (
                        <div className="mt-3 p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1.5">
                          <div className="flex items-center justify-between text-slate-400 text-[11px]">
                            <span>Submitted URL:</span>
                            <span>{new Date(sub.submittedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <a
                            href={sub.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-emerald-400 hover:underline truncate block font-bold flex items-center gap-1.5"
                          >
                            <Github className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{sub.githubUrl}</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>

                          {sub.status === 'Needs Changes' && sub.reviewerComments && (
                            <div className="mt-2 p-2.5 bg-amber-950/60 border border-amber-500/50 rounded-xl text-amber-200">
                              <p className="font-extrabold text-[11px] uppercase tracking-wide">Reviewer Feedback:</p>
                              <p className="mt-0.5">{sub.reviewerComments}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : showFinalExam && course.finalTest ? (
            /* ==========================================
               FINAL EXAM STAGE
               ========================================== */
            <div className="space-y-8">
              {/* Exam Banner Header */}
              <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 rounded-3xl p-6 border-2 border-amber-500 space-y-3 shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-800/60 pb-3">
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase rounded-full tracking-wider">
                    Comprehensive Final Exam
                  </span>
                  <span className="text-xs font-bold text-amber-300">
                    25 Questions • Passing Score: 80%
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">{course.finalTest.title}</h1>
                <p className="text-xs text-amber-200/90 leading-relaxed">{course.finalTest.description}</p>
              </div>

              {/* Exam Form & Questions */}
              <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 border-b border-slate-800 pb-4">
                  <span>Questions Answered: <strong className="text-amber-400">{Object.keys(finalAnswers).length} / {finalQuestions.length}</strong></span>
                  {isFinalSubmitted && (
                    <span className="text-emerald-400 font-extrabold">
                      Final Score: {finalScore} / {finalQuestions.length} ({finalPct}%)
                    </span>
                  )}
                </div>

                {/* Score Summary Box after Submission */}
                {isFinalSubmitted && (
                  <div className={`p-6 rounded-2xl border-2 text-center space-y-3 ${
                    isFinalPassed
                      ? 'bg-emerald-950/80 border-emerald-400 text-emerald-100'
                      : 'bg-amber-950/80 border-amber-500 text-amber-100'
                  }`}>
                    <h3 className="text-xl font-black">
                      {isFinalPassed
                        ? '🎉 CONGRATULATIONS! EXAM PASSED ✓'
                        : '⚠️ EXAM RESULT: REVIEW NEEDED'}
                    </h3>
                    <p className="text-xs font-medium">
                      You scored {finalScore} out of {finalQuestions.length} correct ({finalPct}%). Passing score threshold is 80%.
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                      {isFinalPassed && (
                        <button
                          onClick={() => onViewCertificate(course.id)}
                          className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-full shadow-lg flex items-center gap-2 mx-auto"
                        >
                          <Award className="w-4 h-4 text-slate-950" />
                          <span>Claim Official Certificate</span>
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setFinalAnswers({});
                          setIsFinalSubmitted(false);
                        }}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-full border border-slate-700"
                      >
                        Retake Exam
                      </button>
                    </div>
                  </div>
                )}

                {/* 25 Questions List */}
                <div className="space-y-6">
                  {finalQuestions.map((q, qIdx) => {
                    const selectedOpt = finalAnswers[qIdx];
                    const isAnswered = selectedOpt !== undefined;
                    const isCorrect = selectedOpt === q.correctAnswer;

                    return (
                      <div key={q.id || qIdx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                        <h5 className="text-sm font-bold text-white flex items-start gap-2">
                          <span className="px-2 py-0.5 bg-amber-950 text-amber-300 text-xs font-mono rounded font-bold border border-amber-800">Q{qIdx + 1}</span>
                          <span>{q.questionText || q.question}</span>
                        </h5>

                        <div className="grid sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt, optIdx) => {
                            const isThisSelected = selectedOpt === optIdx;
                            const isThisCorrect = optIdx === q.correctAnswer;

                            let btnStyle = "bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800";
                            if (isFinalSubmitted) {
                              if (isThisCorrect) {
                                btnStyle = "bg-emerald-950 text-emerald-300 border-emerald-500 font-bold";
                              } else if (isThisSelected) {
                                btnStyle = "bg-red-950 text-red-300 border-red-500 font-bold";
                              } else {
                                btnStyle = "bg-slate-950/40 text-slate-500 border-slate-900 opacity-40";
                              }
                            } else if (isThisSelected) {
                              btnStyle = "bg-amber-950/80 text-amber-200 border-amber-500 font-bold shadow-sm";
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isFinalSubmitted}
                                onClick={() => {
                                  setFinalAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
                                }}
                                className={`p-3 rounded-xl text-xs text-left transition-all border flex items-start gap-2 ${btnStyle}`}
                              >
                                <span className="font-mono font-bold shrink-0">{String.fromCharCode(65 + optIdx)}.</span>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isFinalSubmitted && (
                          <div className={`p-3 rounded-xl text-xs space-y-1 mt-2 ${isCorrect ? 'bg-emerald-950/40 text-emerald-200 border border-emerald-800' : 'bg-amber-950/40 text-amber-200 border border-amber-800'}`}>
                            <p className="font-bold">{isCorrect ? '✓ Correct Answer!' : `× Incorrect (Correct: ${String.fromCharCode(65 + q.correctAnswer)}. ${q.options[q.correctAnswer]})`}</p>
                            <p className="text-[11px] opacity-90">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Submit Button */}
                {!isFinalSubmitted && (
                  <div className="pt-4 border-t border-slate-800 text-center">
                    <button
                      onClick={() => {
                        setIsFinalSubmitted(true);
                        if (isFinalPassed) {
                          confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
                        }
                      }}
                      disabled={Object.keys(finalAnswers).length < finalQuestions.length}
                      className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-slate-950 font-black text-xs rounded-full shadow-xl transition-all border-2 border-amber-500 flex items-center gap-2 mx-auto"
                    >
                      <CheckCircle className="w-4 h-4 text-slate-950" />
                      <span>Submit Final Certification Exam ({Object.keys(finalAnswers).length} / {finalQuestions.length})</span>
                    </button>
                    {Object.keys(finalAnswers).length < finalQuestions.length && (
                      <p className="text-[11px] text-slate-400 mt-2 font-medium">Please answer all 25 questions to submit your exam.</p>
                    )}
                  </div>
                )}

              </div>
            </div>
          ) : (
            /* ==========================================
               MODULE READING MANUAL STAGE
               ========================================== */
            <div className="space-y-8">
              
              {/* Module Title Banner */}
              <div className="bg-slate-900 rounded-3xl p-6 border-2 border-brand-900 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-brand-900 text-emerald-300 text-[10px] font-black uppercase rounded-full border border-brand-800">
                    Reading Material Manual
                  </span>
                  <span className="text-xs font-bold text-slate-400">Course Progress: {course.progress}%</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">{currentModule?.title}</h1>
                <p className="text-xs text-slate-400 font-medium">{currentModule?.description}</p>
              </div>

              {/* Completed Celebration Banner */}
              {isCourseFullyCompleted && (
                <div className="bg-gradient-to-r from-emerald-950 via-brand-900 to-slate-900 p-6 rounded-3xl border-2 border-emerald-400 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                    🎉
                  </div>
                  <h3 className="text-2xl font-black text-white">Congratulations! Course Requirements Completed!</h3>
                  <p className="text-xs text-emerald-200 font-medium max-w-lg mx-auto">
                    You have completed modules and project requirements for {course.title}. Take the 25-question Final Certification Exam or claim your official certificate!
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => onViewCertificate(course.id)}
                      className="px-6 py-3 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg flex items-center gap-2"
                    >
                      <Award className="w-4 h-4 text-slate-950" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Reading Material Content Sections */}
              {rm && (
                <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8 text-slate-200">
                  
                  {/* Introduction */}
                  {rm.introduction && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                        <BookOpen className="w-5 h-5" />
                        <span>1. Introduction</span>
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300 font-normal">
                        {rm.introduction}
                      </p>
                    </div>
                  )}

                  {/* Objectives */}
                  {rm.objectives && rm.objectives.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                        <CheckSquare className="w-5 h-5" />
                        <span>2. What You Will Learn</span>
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs font-semibold">
                        {rm.objectives.map((obj, idx) => (
                          <li key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-slate-300 flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Dynamic Sections */}
                  {rm.sections && rm.sections.length > 0 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-black text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                        <FileText className="w-5 h-5" />
                        <span>3. Core Concepts & Topics</span>
                      </h3>

                      {rm.sections.map((sec, idx) => (
                        <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                          <h4 className="text-base font-extrabold text-white">{sec.heading || sec.title}</h4>
                          <p className="text-xs leading-relaxed text-slate-300 font-normal">{sec.text || sec.content}</p>
                          
                          {sec.bulletPoints && (
                            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-2 font-medium">
                              {sec.bulletPoints.map((bp, bIdx) => (
                                <li key={bIdx}>{bp}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Code Examples */}
                  {rm.codeExamples && rm.codeExamples.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-black text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                        <Code className="w-5 h-5" />
                        <span>4. Hands-on Code Example</span>
                      </h3>

                      {rm.codeExamples.map((ex, idx) => (
                        <div key={idx} className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden space-y-3 p-4">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800/80 pb-2">
                            <span>{ex.title || 'Source Code Snippet'}</span>
                            <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-emerald-400">PYTHON 3</span>
                          </div>
                          
                          <pre className="bg-slate-900 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
                            <code>{ex.code}</code>
                          </pre>
                          
                          {ex.explanation && (
                            <p className="text-xs text-slate-400 italic">
                              Note: {ex.explanation}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Takeaways */}
                  {rm.keyTakeaways && rm.keyTakeaways.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                        <Sparkles className="w-5 h-5" />
                        <span>5. Key Takeaways</span>
                      </h3>
                      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs font-medium text-slate-300">
                        {rm.keyTakeaways.map((kt, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{kt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Module Mark as Complete Action */}
                  <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      onClick={handlePrev}
                      disabled={currentModuleIndex === 0}
                      className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 font-bold text-xs rounded-xl flex items-center gap-1.5 border border-slate-700 w-full sm:w-auto justify-center"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Module</span>
                    </button>

                    <button
                      onClick={handleMarkComplete}
                      className={`px-6 py-3 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 border w-full sm:w-auto justify-center ${
                        currentModule?.completed
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-700 hover:bg-emerald-900'
                          : 'bg-emerald-500 text-slate-950 border-emerald-400 hover:bg-emerald-400 font-black'
                      }`}
                    >
                      <CheckCircle className="w-4.5 h-4.5" />
                      <span>{currentModule?.completed ? 'Module Completed ✓' : 'Mark Module as Complete'}</span>
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={currentModuleIndex === (course.modules?.length || 1) - 1}
                      className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 font-bold text-xs rounded-xl flex items-center gap-1.5 border border-slate-700 w-full sm:w-auto justify-center"
                    >
                      <span>Next Module</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

        </div>
      </div>

      {/* ==========================================
         PROJECT DETAILS & SUBMISSION MODAL (REQUIREMENTS #6, #7, #8, #10)
         ========================================== */}
      {showProjectModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 border-2 border-emerald-500/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full text-[10px] font-black uppercase tracking-wider">
                  PROJECT {selectedProject.projectNumber} OF 3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-1">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setShowProjectModal(false)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Details Content */}
            <div className="space-y-5 text-xs text-slate-300">
              
              {/* Objective */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">Project Objective</h4>
                <p className="leading-relaxed font-medium bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
                  {selectedProject.objective || selectedProject.detailedDescription}
                </p>
              </div>

              {/* Requirements */}
              {selectedProject.requirements && selectedProject.requirements.length > 0 && (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">Mandatory Requirements</h4>
                  <ul className="space-y-1.5 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    {selectedProject.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">Expected Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 text-emerald-300 border border-slate-700 rounded-lg font-mono font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Expected Output */}
              {selectedProject.expectedOutput && (
                <div className="space-y-1.5">
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">Expected Deliverable Output</h4>
                  <p className="leading-relaxed font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {selectedProject.expectedOutput}
                  </p>
                </div>
              )}

              {/* Submission Instructions */}
              <div className="space-y-1.5 bg-brand-950/40 p-4 rounded-2xl border border-brand-800/80 text-brand-200">
                <h4 className="text-xs font-black uppercase tracking-wider text-emerald-300">Submission Instructions</h4>
                <p className="leading-relaxed">
                  1. Complete the project application on your local machine.<br />
                  2. Push your complete code to a public GitHub repository.<br />
                  3. Verify the repository contains all source code and documentation.<br />
                  4. Paste the GitHub repository URL below and click Submit Project.
                </p>
              </div>

              {/* Existing Submission Details or Reviewer Feedback */}
              {(() => {
                const sub = getSubmissionForProject(selectedProject.id);
                if (!sub) return null;

                return (
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-white">Current Submission Status:</span>
                      {renderStatusBadge(sub.status)}
                    </div>

                    {sub.status === 'Needs Changes' && sub.reviewerComments && (
                      <div className="p-3.5 bg-amber-950/80 border-2 border-amber-500 rounded-2xl text-amber-200 space-y-1">
                        <p className="font-black text-xs uppercase tracking-wider flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-amber-400" />
                          <span>Reviewer Feedback (Action Required):</span>
                        </p>
                        <p className="text-xs font-semibold leading-relaxed">{sub.reviewerComments}</p>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Submission Form */}
              {(() => {
                const sub = getSubmissionForProject(selectedProject.id);
                const isSubmittedAndLocked = sub && (sub.status === 'Submitted' || sub.status === 'Under Review' || sub.status === 'Approved');

                if (isSubmittedAndLocked) {
                  return (
                    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
                      <p className="font-extrabold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" />
                        <span>Project Submitted Successfully</span>
                      </p>
                      <p className="text-slate-400">
                        Submitted GitHub URL: <strong className="text-white font-mono">{sub.githubUrl}</strong>
                      </p>
                      <p className="text-slate-400 text-[11px]">
                        Submitted Date: {new Date(sub.submittedAt).toLocaleString()}
                      </p>
                      <p className="text-[11px] text-slate-500 italic mt-1">
                        Normal duplicate submissions are disabled while under review or approved. If reviewer requests changes, you will be allowed to resubmit.
                      </p>
                    </div>
                  );
                }

                return (
                  <form onSubmit={handleInitiateSubmission} className="space-y-4 pt-2 border-t border-slate-800">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-black text-white">
                        GitHub Repository URL <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Github className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="url"
                          required
                          value={githubUrl}
                          onChange={(e) => {
                            setGithubUrl(e.target.value);
                            setValidationError('');
                          }}
                          placeholder="https://github.com/username/project-repository"
                          className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-400 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 font-mono outline-none"
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">Must be a valid public GitHub URL e.g. https://github.com/user/repo</p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">
                        Live Project URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={liveUrl}
                        onChange={(e) => setLiveUrl(e.target.value)}
                        placeholder="https://my-project-demo.vercel.app"
                        className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 font-mono outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300">
                        Candidate Comments / Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={candidateComments}
                        onChange={(e) => setCandidateComments(e.target.value)}
                        placeholder="Add any notes for the evaluation team..."
                        className="w-full bg-slate-950 border border-slate-700 focus:border-emerald-400 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none"
                      />
                    </div>

                    {validationError && (
                      <div className="p-3 bg-red-950/80 border border-red-500/80 rounded-xl text-red-200 text-xs font-bold flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    {submissionSuccessMsg && (
                      <div className="p-3 bg-emerald-950/80 border border-emerald-500/80 rounded-xl text-emerald-200 text-xs font-bold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{submissionSuccessMsg}</span>
                      </div>
                    )}

                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowProjectModal(false)}
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-extrabold text-xs rounded-xl border border-slate-700"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all border border-emerald-400 flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>{submitting ? 'Submitting...' : sub ? 'Resubmit Updated Project' : 'Submit Project'}</span>
                      </button>
                    </div>
                  </form>
                );
              })()}

            </div>

          </div>
        </div>
      )}

      {/* ==========================================
         CONFIRMATION DIALOG (REQUIREMENT #9)
         ========================================== */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="bg-slate-900 border-2 border-emerald-400 rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl text-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <FolderGit2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-black text-white">Confirm Project Submission</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Are you sure you want to submit this project? Make sure your GitHub repository contains your complete project and is accessible to the reviewer.
              </p>
              <p className="text-xs font-mono text-emerald-400 truncate bg-slate-950 p-2 rounded-lg border border-slate-800 mt-2">
                {githubUrl}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-extrabold text-xs rounded-xl border border-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmitProject}
                disabled={submitting}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all border border-emerald-400 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Submitting...' : 'Submit Project'}</span>
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}

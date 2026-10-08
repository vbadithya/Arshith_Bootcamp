import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, CheckCircle, Circle, Award, Download, 
  ChevronRight, ChevronLeft, BookOpen, ExternalLink, 
  Code, Sparkles, AlertTriangle, CheckSquare,
  Clock, Flag, RotateCcw, Trophy, Check, X, HelpCircle,
  ShieldCheck, Play, ArrowRight, RefreshCw, Lock,
  User, FileText, CheckCircle2, ShieldAlert, GraduationCap,
  FolderCheck, Send, AlertCircle, MessageSquare
} from 'lucide-react';
import { generateCoursePDF, generateQuestionPaperPDF } from '../utils/pdfGenerator';
import { api } from '../services/api';
import { STUDENT_PROFILE } from '../data/coursesData';
import ModuleQuizModal from '../components/ModuleQuizModal';
import FinalTestModal from '../components/FinalTestModal';

export default function LearningPage({ 
  course, 
  activeModuleId, 
  onBack, 
  onToggleModuleComplete, 
  onViewCertificate 
}) {
  const [currentModule, setCurrentModule] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [finalTestModalOpen, setFinalTestModalOpen] = useState(false);

  const savedUser = JSON.parse(localStorage.getItem('student_user') || '{}');
  const studentName = savedUser?.name || 'Arshith Kumar';

  // Course Projects State (3 Required Projects)
  const [isProjectMode, setIsProjectMode] = useState(false);
  const [candidateSubmissions, setCandidateSubmissions] = useState({});
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [activeProjectForDetails, setActiveProjectForDetails] = useState(null);

  // Project Submission Form State
  const [submitGithubUrl, setSubmitGithubUrl] = useState('');
  const [submitLiveUrl, setSubmitLiveUrl] = useState('');
  const [submitNotes, setSubmitNotes] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  const [showSubmissionConfirmModal, setShowSubmissionConfirmModal] = useState(false);
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);
  const [submissionSuccessToast, setSubmissionSuccessToast] = useState('');

  // Exam Simulator State
  const [isExamMode, setIsExamMode] = useState(false);
  const [examAnswers, setExamAnswers] = useState({});
  const [examFlagged, setExamFlagged] = useState({});
  const [examCurrentQ, setExamCurrentQ] = useState(0);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examTimeLeft, setExamTimeLeft] = useState(45 * 60);
  const [examTimerActive, setExamTimerActive] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [examFilter, setExamFilter] = useState('all'); // 'all', 'incorrect', 'flagged'

  const finalTest = course?.finalTest;

  // Normalized 4 Question Papers list
  const questionPapers = useMemo(() => {
    if (finalTest?.questionPapers && finalTest.questionPapers.length > 0) {
      return finalTest.questionPapers;
    }
    if (finalTest?.questions && finalTest.questions.length > 0) {
      return [
        {
          id: "qp-arshith-kumar",
          studentName: "Arshith Kumar",
          candidateId: "ARB-STD-001",
          rollNo: "2026-AK-101",
          paperCode: "ARB-PY-QP01",
          title: "Paper 1: Arshith Kumar Examination Set",
          subtitle: "Core Architecture, Memory Model & Sequences",
          timeLimitMinutes: finalTest.timeLimitMinutes || 45,
          passingScore: finalTest.passingScore || 80,
          totalMarks: finalTest.totalMarks || 100,
          questions: finalTest.questions
        }
      ];
    }
    return [];
  }, [finalTest]);

  // Selected Paper State
  const [selectedPaperId, setSelectedPaperId] = useState(() => {
    return questionPapers[0]?.id || 'qp-arshith-kumar';
  });

  // Track submission records per paper
  const [paperRecords, setPaperRecords] = useState({});

  // Ensure selectedPaperId remains valid
  useEffect(() => {
    if (questionPapers.length > 0 && !questionPapers.some(p => p.id === selectedPaperId)) {
      setSelectedPaperId(questionPapers[0].id);
    }
  }, [questionPapers, selectedPaperId]);

  const activePaper = useMemo(() => {
    return questionPapers.find(p => p.id === selectedPaperId) || questionPapers[0] || {};
  }, [questionPapers, selectedPaperId]);

  const examQuestions = activePaper?.questions || [];
  const totalExamQuestions = examQuestions.length;

  // Helper to load paper submission from localStorage
  const loadPaperRecord = (paperId) => {
    if (!course?.id || !paperId) return null;
    try {
      const saved = localStorage.getItem(`arshith_exam_${course.id}_${paperId}`);
      if (saved) return JSON.parse(saved);
      // Fallback to legacy single exam key if matching first paper
      if (paperId === questionPapers[0]?.id) {
        const legacy = localStorage.getItem(`arshith_exam_${course.id}`);
        if (legacy) return JSON.parse(legacy);
      }
    } catch (e) {}
    return null;
  };

  // Sync state whenever active paper or exam mode changes
  useEffect(() => {
    if (!activePaper?.id) return;
    const rec = loadPaperRecord(activePaper.id);
    if (rec?.submitted) {
      setExamSubmitted(true);
      setExamAnswers(rec.answers || {});
      setExamTimerActive(false);
    } else {
      setExamSubmitted(false);
      setExamAnswers({});
      setExamFlagged({});
      setExamCurrentQ(0);
      setExamTimeLeft((activePaper.timeLimitMinutes || 45) * 60);
      setExamTimerActive(isExamMode);
    }
  }, [selectedPaperId, isExamMode, course?.id]);

  // Refresh all papers records
  useEffect(() => {
    if (!course?.id || questionPapers.length === 0) return;
    const records = {};
    questionPapers.forEach(p => {
      const rec = loadPaperRecord(p.id);
      if (rec?.submitted) records[p.id] = rec;
    });
    setPaperRecords(records);
  }, [selectedPaperId, examSubmitted, course?.id, questionPapers]);

  // Module selection
  useEffect(() => {
    if (!course || !course.modules || course.modules.length === 0) return;

    if (activeModuleId) {
      const mod = course.modules.find(m => m.id === activeModuleId);
      if (mod) {
        setCurrentModule(mod);
        setShowSolution(false);
        return;
      }
    }

    // Default to first module
    setCurrentModule(course.modules[0]);
    setShowSolution(false);
  }, [course, activeModuleId]);

  if (!course) return null;

  const currentModuleIndex = course.modules?.findIndex(m => m.id === currentModule?.id) ?? 0;
  const completedCount = course.modules?.filter(m => m.completed).length || 0;
  const totalCount = course.modules?.length || 1;
  const isCourseFullyCompleted = course.progress === 100 || completedCount === totalCount;

  // Handle Mark Module Complete
  const handleMarkComplete = () => {
    if (!currentModule) return;
    onToggleModuleComplete(course.id, currentModule.id);

    // Check if this was the final uncompleted module
    const remainingUncompleted = course.modules.filter(m => !m.completed && m.id !== currentModule.id);
    if (remainingUncompleted.length === 0) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModule(course.modules[currentModuleIndex - 1]);
      setShowSolution(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModule(course.modules[currentModuleIndex + 1]);
      setShowSolution(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const rm = currentModule?.readingMaterial;

  // Candidate identity & Submissions integration
  const candidateId = STUDENT_PROFILE?.id || 'ARB-STD-001';
  const candidateName = STUDENT_PROFILE?.name || 'Arshith Kumar';
  const candidateEmail = STUDENT_PROFILE?.email || 'arshith@arshithbootcamp.com';

  const loadSubmissions = async () => {
    if (!course?.id) return;
    setLoadingSubmissions(true);
    try {
      const res = await api.getCandidateSubmissions(course.id, candidateId);
      if (res.success && res.submissions) {
        const map = {};
        res.submissions.forEach(sub => {
          map[sub.projectId] = sub;
        });
        setCandidateSubmissions(map);
      }
    } catch (e) {
      console.warn('Could not load candidate submissions:', e);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, [course?.id]);

  useEffect(() => {
    if (activeProjectForDetails) {
      const existing = candidateSubmissions[activeProjectForDetails.id];
      if (existing) {
        setSubmitGithubUrl(existing.githubUrl || '');
        setSubmitLiveUrl(existing.liveUrl || '');
        setSubmitNotes(existing.candidateComments || '');
      } else {
        setSubmitGithubUrl('');
        setSubmitLiveUrl('');
        setSubmitNotes('');
      }
      setSubmissionError('');
    }
  }, [activeProjectForDetails, candidateSubmissions]);

  const courseProjects = useMemo(() => {
    if (course?.projects && course.projects.length > 0) return course.projects;
    return [];
  }, [course?.projects]);

  const submittedProjectsCount = useMemo(() => {
    return courseProjects.filter(p => {
      const s = candidateSubmissions[p.id];
      return s && (s.status === 'Submitted' || s.status === 'Under Review' || s.status === 'Approved');
    }).length;
  }, [courseProjects, candidateSubmissions]);

  const approvedProjectsCount = useMemo(() => {
    return courseProjects.filter(p => {
      const s = candidateSubmissions[p.id];
      return s && s.status === 'Approved';
    }).length;
  }, [courseProjects, candidateSubmissions]);

  const validateGithubUrl = (url) => {
    if (!url || typeof url !== 'string') return false;
    const trimmed = url.trim();
    const githubRegex = /^https:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/i;
    return githubRegex.test(trimmed);
  };

  const handleInitiateProjectSubmit = () => {
    const trimmed = submitGithubUrl.trim();
    if (!validateGithubUrl(trimmed)) {
      setSubmissionError('Please enter a valid GitHub repository URL.');
      return;
    }
    setSubmissionError('');
    setShowSubmissionConfirmModal(true);
  };

  const handleConfirmProjectSubmit = async () => {
    if (!activeProjectForDetails) return;
    setIsSubmittingProject(true);
    setSubmissionError('');
    try {
      const res = await api.submitProject(course.id, activeProjectForDetails.id, {
        candidateId,
        candidateName,
        candidateEmail,
        githubUrl: submitGithubUrl.trim(),
        liveUrl: submitLiveUrl.trim(),
        candidateComments: submitNotes.trim()
      });

      setShowSubmissionConfirmModal(false);
      setSubmissionSuccessToast(res.message || 'Project submitted successfully.');
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
      setTimeout(() => setSubmissionSuccessToast(''), 4500);
      await loadSubmissions();
    } catch (err) {
      setSubmissionError(err.message || 'Unable to submit the project. Please try again.');
    } finally {
      setIsSubmittingProject(false);
    }
  };

  // Full Course Completion: Modules completed + Exam passed + 3 Projects submitted/approved
  const isCourseRequirementsAllMet = isCourseFullyCompleted && examSubmitted && examPassed && submittedProjectsCount >= 3;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Toast Notification */}
      {submissionSuccessToast && (
        <div className="fixed top-5 right-5 z-50 px-5 py-3 rounded-2xl shadow-2xl border-2 border-emerald-400 bg-emerald-950 text-emerald-200 flex items-center gap-3 text-xs font-black animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{submissionSuccessToast}</span>
        </div>
      )}

      {/* Top Bar */}
      <header className="bg-slate-900 border-b-2 border-brand-900 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (isProjectMode) {
                setIsProjectMode(false);
              } else if (isExamMode && !examSubmitted && Object.keys(examAnswers).length > 0) {
                if (window.confirm("An active exam is in progress. Are you sure you want to exit? Your progress in this attempt will be reset.")) {
                  setIsExamMode(false);
                  setExamTimerActive(false);
                }
              } else if (isExamMode) {
                setIsExamMode(false);
                setExamTimerActive(false);
              } else {
                onBack();
              }
            }}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1.5 text-xs font-extrabold border border-slate-700 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Exit Boot Camp Player</span>
          </button>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div>
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">{course.title}</span>
            <h2 className="text-sm font-black text-white truncate max-w-xs sm:max-w-md">
              {currentModule?.title}
            </h2>
          </div>
        </div>

        {/* Progress Tracker Widget */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Boot Camp Progress</p>
              <p className="text-xs font-black text-emerald-400">{completedCount} / {totalCount} Modules ({course.progress}%)</p>
            </div>
            <div className="w-28 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          {/* Final Test Button */}
          <button
            onClick={() => setFinalTestModalOpen(true)}
            className="px-3.5 py-1.5 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg flex items-center gap-1.5 transition-all"
            title="Take 45-Minute SQL Final Assessment"
          >
            <Clock className="w-4 h-4 text-slate-950" />
            <span>Final Assessment (45m)</span>
          </button>

          <button
            onClick={() => generateCoursePDF(course, studentName)}
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
              <span className="text-slate-300 uppercase">Modules Progression</span>
              <span className="text-emerald-400">{completedCount} / {totalCount} Done</span>
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
            {course.modules?.map((mod, idx) => {
              const isSelected = currentModule?.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setCurrentModule(mod);
                    setShowSolution(false);
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

          {/* Highlighted Final Assessment Card Down of 15 Modules */}
          <div className="bg-gradient-to-br from-amber-950/90 via-slate-900 to-slate-950 p-4.5 rounded-2xl border-2 border-amber-400 shadow-2xl space-y-3 ring-2 ring-amber-400/40 mt-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-black uppercase rounded-full tracking-wider shadow-sm">
                ★ Course Certification
              </span>
              <span className="text-[10px] font-bold text-amber-300 font-mono">25 Qs • 45 Mins</span>
            </div>

            <div>
              <h4 className="text-sm font-black text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SQL Final Assessment</span>
              </h4>
              <p className="text-[11px] text-slate-300 font-medium pt-1 leading-relaxed">
                Test your mastery across all 15 modules to earn your verified course certificate.
              </p>
            </div>

            {/* Highlighting Yellow Pill Button requested by User */}
            <button
              onClick={() => setFinalTestModalOpen(true)}
              className="w-full py-3 px-4 rounded-full text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 shadow-xl transition-all flex items-center justify-center gap-2 border-2 border-amber-300 cursor-pointer"
            >
              <Clock className="w-4 h-4 text-slate-950 shrink-0" />
              <span>Final Assessment (45m)</span>
            </button>
          </div>

          {/* COURSE PROJECTS SIDEBAR CARD */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (isExamMode && !examSubmitted && Object.keys(examAnswers).length > 0) {
                  if (!window.confirm("Leave active exam? Your answers in this attempt will be reset.")) return;
                }
                setIsExamMode(false);
                setIsProjectMode(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full p-4 rounded-2xl text-left transition-all border-2 relative overflow-hidden group cursor-pointer ${
                isProjectMode
                  ? 'bg-gradient-to-br from-brand-900 via-brand-800 to-indigo-950 border-brand-400 shadow-xl ring-2 ring-brand-400/30'
                  : 'bg-slate-900/90 hover:bg-slate-800 border-indigo-500/40 hover:border-indigo-400 shadow-lg'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                  isProjectMode
                    ? 'bg-brand-500 text-slate-950 border-brand-300 font-black'
                    : 'bg-indigo-400/10 text-indigo-400 border-indigo-500/30'
                }`}>
                  <FolderCheck className="w-5 h-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 flex items-center gap-1">
                      Required Projects
                    </span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      approvedProjectsCount === 3
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                        : submittedProjectsCount > 0
                        ? 'bg-brand-950 text-brand-300 border border-brand-600'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {submittedProjectsCount} / 3 Ready
                    </span>
                  </div>

                  <h4 className="text-xs font-black text-white mt-1 group-hover:text-indigo-300 transition-colors">
                    3 Course Projects
                  </h4>

                  <p className="text-[10px] text-slate-400 mt-1">
                    {approvedProjectsCount === 3
                      ? 'All 3 Projects Approved ✓'
                      : `${submittedProjectsCount} of 3 submitted • GitHub Review`}
                  </p>
                </div>
              </div>
            </button>
          </div>

        </div>

        {/* Right Main Stage: Modules Reading Material OR Interactive Exam Simulator OR Course Projects (8 Cols) */}
        <div className="lg:col-span-8 p-4 sm:p-8 overflow-y-auto space-y-8 max-w-4xl mx-auto w-full">

          {/* ========================================================================= */}
          {/* VIEW C: 3 COURSE-SPECIFIC PROJECTS & GITHUB SUBMISSION                    */}
          {/* ========================================================================= */}
          {isProjectMode ? (
            <div className="space-y-6 animate-fade-in">

              {/* Course Completion Celebration Banner if all requirements met */}
              {isCourseRequirementsAllMet && (
                <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-brand-950 border-2 border-emerald-400 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase rounded-full border border-emerald-400/40">
                      🎉 Course Fully Completed
                    </span>
                    <h3 className="text-xl font-black text-white">All Course Requirements Fulfilled!</h3>
                    <p className="text-xs text-slate-300 font-medium">
                      All Modules 100% Completed • Final Test Passed • 3 Course Projects Submitted & Approved
                    </p>
                  </div>

                  <button
                    onClick={() => onViewCertificate(course.id)}
                    className="px-5 py-2.5 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full border-2 border-emerald-300 shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-slate-950" />
                    <span>View Official Certificate</span>
                  </button>
                </div>
              )}

              {/* Projects Overview Header Banner */}
              <div className="bg-slate-900/90 rounded-3xl p-6 border-2 border-brand-500/40 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-brand-500/20 text-brand-300 text-[10px] font-black uppercase rounded-full border border-brand-400/30 flex items-center gap-1.5">
                        <FolderCheck className="w-3.5 h-3.5 text-brand-400" />
                        Course Deliverables
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {course.title}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-white mt-1">Course Projects (3 Required)</h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Candidates must complete all 3 projects and submit their GitHub repository links for instructor review.
                    </p>
                  </div>

                  <div className="text-right sm:self-center">
                    <p className="text-xs font-extrabold text-slate-400">Project Progress</p>
                    <p className="text-xl font-black text-emerald-400">
                      {submittedProjectsCount} / 3 <span className="text-xs text-slate-400 font-bold">Submitted</span>
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-black text-slate-400">
                    <span>
                      {approvedProjectsCount === 3
                        ? '100% Projects Approved'
                        : `${Math.round((submittedProjectsCount / 3) * 100)}% Submitted for Review`}
                    </span>
                    <span className="text-emerald-400 font-mono">
                      {approvedProjectsCount} Approved • {submittedProjectsCount - approvedProjectsCount} Under Review
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-brand-600 via-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${Math.round((submittedProjectsCount / 3) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* 3 Projects Cards Layout */}
              <div className="space-y-4">
                {courseProjects.map((proj, pIdx) => {
                  const sub = candidateSubmissions[proj.id];
                  const status = sub?.status || 'Not Started';

                  return (
                    <div
                      key={proj.id || pIdx}
                      className="bg-slate-900/80 border-2 border-slate-800 hover:border-slate-700 rounded-3xl p-6 transition-all space-y-4 relative overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="w-7 h-7 rounded-xl bg-brand-900 text-white font-black text-xs flex items-center justify-center border border-brand-700">
                            {pIdx + 1}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-wider text-brand-300 bg-brand-950/80 px-2.5 py-0.5 rounded-full border border-brand-800">
                            PROJECT {proj.projectNumber || (pIdx + 1)}
                          </span>
                          <span className="text-xs font-bold text-slate-400">
                            Difficulty: {proj.difficulty || 'Beginner'}
                          </span>
                          <span className="text-xs font-bold text-slate-400">
                            • Estimated Time: {proj.estimatedTime || '2–3 Days'}
                          </span>
                        </div>

                        {/* Status Badge */}
                        <span className={`self-start sm:self-auto text-[10px] font-black uppercase px-3 py-1 rounded-full border ${
                          status === 'Approved'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600'
                            : status === 'Needs Changes'
                            ? 'bg-rose-950/80 text-rose-300 border-rose-600 animate-pulse'
                            : status === 'Submitted'
                            ? 'bg-amber-950/80 text-amber-300 border-amber-600'
                            : status === 'Under Review'
                            ? 'bg-blue-950/80 text-blue-300 border-blue-600'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          Status: {status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-white">{proj.title}</h3>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-3xl">
                          {proj.shortDescription || proj.objective}
                        </p>
                      </div>

                      {/* Reviewer Comments Callout if Needs Changes */}
                      {status === 'Needs Changes' && sub?.reviewerComments && (
                        <div className="p-4 rounded-2xl bg-rose-950/60 border-2 border-rose-800/80 space-y-1 text-xs">
                          <p className="font-black text-rose-300 flex items-center gap-1.5">
                            <AlertCircle className="w-4 h-4 text-rose-400" />
                            Reviewer Feedback (Changes Requested):
                          </p>
                          <p className="text-rose-200 italic font-medium pl-5.5">
                            "{sub.reviewerComments}"
                          </p>
                          <p className="text-[11px] text-rose-300/80 pt-1 pl-5.5">
                            Please update your GitHub repository and resubmit your updated link below.
                          </p>
                        </div>
                      )}

                      {/* Submitted Repository URL Info Box */}
                      {sub?.githubUrl && (
                        <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="text-[10px] font-black text-slate-400 uppercase">GitHub Repo:</span>
                            <a
                              href={sub.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="font-mono text-emerald-400 hover:underline flex items-center gap-1 truncate text-xs"
                            >
                              <span>{sub.githubUrl}</span>
                              <ExternalLink className="w-3 h-3 shrink-0" />
                            </a>
                          </div>
                          {sub.submittedAt && (
                            <span className="text-[10px] text-slate-500 font-mono">
                              Submitted: {new Date(sub.submittedAt).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Action Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold">
                          <Code className="w-3.5 h-3.5 text-brand-400" />
                          <span>Requires Complete GitHub Repository</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveProjectForDetails(proj)}
                          className={`px-5 py-2.5 text-xs font-black rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer ${
                            status === 'Needs Changes'
                              ? 'bg-rose-600 hover:bg-rose-500 text-white border-2 border-rose-400'
                              : status === 'Approved'
                              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                              : status === 'Submitted'
                              ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-600'
                              : 'bg-brand-600 hover:bg-brand-500 text-white border-2 border-brand-400'
                          }`}
                        >
                          <span>
                            {status === 'Needs Changes'
                              ? 'Resubmit Updated Project'
                              : status === 'Submitted' || status === 'Approved'
                              ? 'View Project Details'
                              : 'View Project & Submit'}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ) : isExamMode ? (
            <div className="space-y-6">
              
              {/* Question Papers Hub: 4 Student Sets Selection Banner */}
              <div className="bg-slate-900/90 rounded-3xl p-5 border-2 border-emerald-500/40 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-amber-400/10 text-amber-300 text-[10px] font-black uppercase rounded-full border border-amber-500/30 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                      Official Master Certification Papers
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      4 Student-Assigned Examination Sets
                    </span>
                  </div>

                  <span className="text-[11px] font-black text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-700">
                    Active: {activePaper.studentName}
                  </span>
                </div>

                {/* 4 Candidate Paper Selector Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {questionPapers.map((paper, pIdx) => {
                    const isSelected = paper.id === selectedPaperId;
                    const sub = paperRecords[paper.id];

                    return (
                      <button
                        key={paper.id}
                        onClick={() => handleSelectPaper(paper.id)}
                        className={`p-3 rounded-2xl border-2 text-left transition-all relative overflow-hidden group ${
                          isSelected
                            ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-brand-950 border-emerald-400 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-400/30'
                            : 'bg-slate-950/80 hover:bg-slate-800/90 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                            {paper.paperCode}
                          </span>
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${
                            sub?.submitted
                              ? sub.passed
                                ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                                : 'bg-rose-950 text-rose-300 border-rose-600'
                              : isSelected
                              ? 'bg-brand-500 text-slate-950 font-black border-brand-300'
                              : 'bg-slate-800 text-slate-400 border-slate-700'
                          }`}>
                            {sub?.submitted ? `${sub.percentage}%` : isSelected ? 'Active' : `Paper ${pIdx + 1}`}
                          </span>
                        </div>

                        <div className="text-xs font-black text-white flex items-center gap-1.5 truncate">
                          <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">{paper.studentName}</span>
                        </div>

                        <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between font-mono">
                          <span>{paper.rollNo}</span>
                          <span>{paper.questions?.length || 15} MCQs</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Paper Official Hall Ticket & Admit Card Header */}
              <div className="bg-slate-900/95 border-2 border-emerald-500/40 rounded-3xl p-6 shadow-xl relative overflow-hidden space-y-4">
                {/* Background Watermark */}
                <div className="absolute right-4 bottom-2 text-5xl sm:text-6xl font-black text-slate-800/15 select-none pointer-events-none uppercase tracking-widest font-mono">
                  {activePaper.studentName}
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-4 relative z-10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black uppercase">
                        {activePaper.paperCode} • Official Set
                      </span>
                      <span className="text-[11px] font-bold text-amber-400">
                        Candidate: {activePaper.studentName}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                      {activePaper.title}
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5 max-w-xl">
                      {activePaper.subtitle || activePaper.description}
                    </p>
                  </div>

                  {/* Candidate Metrics Pill Box */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 shrink-0 bg-slate-950 p-3 rounded-2xl border border-slate-800 text-[11px]">
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase block font-bold">Roll Number</span>
                      <span className="font-black text-emerald-300">{activePaper.rollNo}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 uppercase block font-bold">Candidate ID</span>
                      <span className="font-bold text-slate-300">{activePaper.candidateId}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-[9px] text-slate-500 uppercase block font-bold">Passing Mark</span>
                      <span className="font-bold text-amber-400">{activePaper.passingScore || 80}%</span>
                    </div>
                  </div>
                </div>

                {/* Status, Timer & Action Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-3">
                    {!examSubmitted ? (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold">
                        <Clock className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300">Time Left:</span>
                        <span className={`font-black ${examTimeLeft < 300 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`}>
                          {formatTimer(examTimeLeft)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-700/60">
                        <CheckCircle className="w-4 h-4" />
                        Result Recorded for {activePaper.studentName}
                      </span>
                    )}

                    <span className="text-xs font-bold text-slate-400">
                      Answered: <strong className="text-emerald-400">{answeredCount}</strong> / {totalExamQuestions}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {examSubmitted && (
                      <button
                        onClick={() => generateQuestionPaperPDF(course, activePaper, { userAnswers: examAnswers })}
                        className="px-4 py-2 text-xs font-bold text-emerald-300 bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-600 rounded-xl flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download {activePaper.studentName}'s PDF</span>
                      </button>
                    )}

                    {!examSubmitted && (
                      <button
                        onClick={() => setShowSubmitModal(true)}
                        className="px-5 py-2 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
                      >
                        Finish & Submit
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / totalExamQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* EXAM IN PROGRESS VIEW */}
              {!examSubmitted ? (
                <div className="space-y-6">

                  {/* Question Matrix Navigator */}
                  <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="text-slate-300 uppercase tracking-wider">
                        {activePaper.studentName} Question Navigator
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Click number to jump to question
                      </span>
                    </div>

                    <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 gap-1.5">
                      {examQuestions.map((q, idx) => {
                        const qKey = q.id || idx;
                        const isAnswered = examAnswers[qKey] !== undefined;
                        const isFlagged = examFlagged[qKey];
                        const isCurrent = examCurrentQ === idx;

                        let btnBg = "bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800";
                        if (isCurrent) {
                          btnBg = "bg-brand-600 text-white font-black border-white ring-2 ring-emerald-400";
                        } else if (isFlagged) {
                          btnBg = "bg-amber-950 text-amber-300 border-amber-500 font-bold";
                        } else if (isAnswered) {
                          btnBg = "bg-emerald-950 text-emerald-300 border-emerald-600 font-bold";
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => setExamCurrentQ(idx)}
                            className={`p-2 rounded-lg text-xs transition-all border flex items-center justify-center relative ${btnBg}`}
                            title={`Jump to Q${idx + 1}`}
                          >
                            <span>{idx + 1}</span>
                            {isFlagged && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute top-1 right-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Question Stage */}
                  {examQuestions[examCurrentQ] && (
                    <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
                      
                      {/* Question Top Info */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-black">
                            Question {examCurrentQ + 1} of {totalExamQuestions}
                          </span>
                          {examQuestions[examCurrentQ].topic && (
                            <span className="text-xs font-bold text-slate-400">
                              Topic: {examQuestions[examCurrentQ].topic}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => {
                            const qKey = examQuestions[examCurrentQ].id || examCurrentQ;
                            setExamFlagged(prev => ({ ...prev, [qKey]: !prev[qKey] }));
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                            examFlagged[examQuestions[examCurrentQ].id || examCurrentQ]
                              ? 'bg-amber-950 border-amber-500 text-amber-300'
                              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                          }`}
                        >
                          <Flag className="w-3.5 h-3.5" />
                          <span>{examFlagged[examQuestions[examCurrentQ].id || examCurrentQ] ? 'Flagged' : 'Flag for Review'}</span>
                        </button>
                      </div>

                      {/* Question Text */}
                      <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                        {examQuestions[examCurrentQ].questionText}
                      </h3>

                      {/* Code Snippet (if any) */}
                      {examQuestions[examCurrentQ].codeSnippet && (
                        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto shadow-inner">
                          <pre>{examQuestions[examCurrentQ].codeSnippet}</pre>
                        </div>
                      )}

                      {/* 4 Interactive Radio Options */}
                      <div className="grid gap-3 pt-2">
                        {examQuestions[examCurrentQ].options?.map((optionText, optIdx) => {
                          const qKey = examQuestions[examCurrentQ].id || examCurrentQ;
                          const isSelected = examAnswers[qKey] === optIdx;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                setExamAnswers(prev => ({
                                  ...prev,
                                  [qKey]: optIdx
                                }));
                              }}
                              className={`w-full p-4 rounded-2xl text-left transition-all border flex items-start gap-3.5 ${
                                isSelected
                                  ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/40'
                                  : 'bg-slate-950/70 hover:bg-slate-800 border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-black border transition-all ${
                                isSelected
                                  ? 'bg-emerald-400 text-slate-950 border-emerald-300 font-black'
                                  : 'bg-slate-800 text-slate-400 border-slate-700'
                              }`}>
                                {String.fromCharCode(65 + optIdx)}
                              </div>

                              <span className="text-xs sm:text-sm font-medium leading-relaxed pt-0.5">
                                {optionText}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Bottom Navigator Controls */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <button
                          onClick={() => setExamCurrentQ(prev => Math.max(0, prev - 1))}
                          disabled={examCurrentQ === 0}
                          className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 border border-slate-700 flex items-center gap-1.5 transition-all"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Previous Question</span>
                        </button>

                        <div className="text-xs font-mono text-slate-400">
                          {examCurrentQ + 1} / {totalExamQuestions}
                        </div>

                        {examCurrentQ < totalExamQuestions - 1 ? (
                          <button
                            onClick={() => setExamCurrentQ(prev => Math.min(totalExamQuestions - 1, prev + 1))}
                            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 border border-brand-500 flex items-center gap-1.5 transition-all"
                          >
                            <span>Next Question</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => setShowSubmitModal(true)}
                            className="px-6 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 border border-emerald-300 flex items-center gap-1.5 transition-all shadow-lg"
                          >
                            <span>Review & Submit</span>
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                    </div>
                  )}

                </div>
              ) : (
                /* EXAM SUBMITTED: SCORECARD & DETAILED REVIEW MODE */
                <div className="space-y-8">
                  
                  {/* Official Score Card Banner */}
                  <div className={`p-8 rounded-3xl border-2 text-center space-y-4 shadow-2xl relative overflow-hidden ${
                    examPassed 
                      ? 'bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 border-emerald-400' 
                      : 'bg-gradient-to-b from-rose-950 via-slate-900 to-slate-900 border-rose-500'
                  }`}>
                    {/* Watermark */}
                    <div className="absolute right-6 top-6 text-7xl font-black text-white/5 select-none pointer-events-none uppercase">
                      {activePaper.studentName}
                    </div>

                    <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-xl border-2 ${
                      examPassed ? 'bg-emerald-500/20 text-emerald-400 border-emerald-400' : 'bg-rose-500/20 text-rose-400 border-rose-500'
                    }`}>
                      {examPassed ? '🏆' : '📚'}
                    </div>

                    <div className="space-y-1.5 relative z-10">
                      <span className={`text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full border ${
                        examPassed ? 'bg-emerald-950 text-emerald-300 border-emerald-500' : 'bg-rose-950 text-rose-300 border-rose-600'
                      }`}>
                        {examPassed ? 'Certification Exam Passed • Distinction' : 'Needs Improvement'}
                      </span>
                      
                      <div className="pt-2">
                        <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest block">
                          CANDIDATE: {activePaper.studentName} ({activePaper.rollNo})
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white pt-1">
                          Score: {examPercentage}% ({correctExamCount} / {totalExamQuestions})
                        </h2>
                      </div>

                      <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed pt-1">
                        {examPassed 
                          ? `Outstanding accomplishment! ${activePaper.studentName} has mastered ${course.title} (${activePaper.paperCode}) with verified technical excellence.` 
                          : `Passing score is ${activePaper.passingScore || 80}%. Review the in-depth explanations below to solidify your understanding.`}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-3 relative z-10">
                      <button
                        onClick={() => generateQuestionPaperPDF(course, activePaper, { userAnswers: examAnswers })}
                        className="px-6 py-3 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg flex items-center gap-2 border-2 border-emerald-300 transition-all"
                      >
                        <Download className="w-4 h-4 text-slate-950" />
                        <span>Download {activePaper.studentName}'s PDF</span>
                      </button>

                      {examPassed && (
                        <button
                          onClick={() => onViewCertificate(course.id)}
                          className="px-6 py-3 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg flex items-center gap-2 border-2 border-amber-300 transition-all"
                        >
                          <Award className="w-4 h-4 text-slate-950" />
                          <span>Claim Official Certificate</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          // Switch to next unattempted paper
                          const nextPaper = questionPapers.find(p => p.id !== activePaper.id);
                          if (nextPaper) handleSelectPaper(nextPaper.id);
                        }}
                        className="px-6 py-3 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-700 flex items-center gap-2"
                      >
                        <RefreshCw className="w-4 h-4 text-amber-400" />
                        <span>Try Another Student Paper Set</span>
                      </button>
                    </div>
                  </div>

                  {/* Comprehensive Review of All Questions */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h3 className="text-lg font-black text-white">Detailed Solutions & Authoritative Explanations</h3>
                        <p className="text-xs text-slate-400">Review answers for {activePaper.studentName} ({activePaper.paperCode})</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-400">✓ {correctExamCount} Correct</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs font-bold text-rose-400">✗ {totalExamQuestions - correctExamCount} Incorrect</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {examQuestions.map((q, idx) => {
                        const qKey = q.id || idx;
                        const userAns = examAnswers[qKey];
                        const isCorrect = userAns === q.correctAnswer;

                        return (
                          <div
                            key={idx}
                            className={`p-6 rounded-2xl border space-y-4 ${
                              isCorrect 
                                ? 'bg-slate-900/80 border-slate-800' 
                                : 'bg-slate-900/80 border-rose-950/60'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-slate-400">
                                Question {idx + 1} of {totalExamQuestions} {q.topic && `• ${q.topic}`}
                              </span>
                              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                                isCorrect 
                                  ? 'bg-emerald-950 text-emerald-300 border-emerald-700' 
                                  : 'bg-rose-950 text-rose-300 border-rose-700'
                              }`}>
                                {isCorrect ? 'Correct ✓' : 'Incorrect ✗'}
                              </span>
                            </div>

                            <h4 className="text-sm font-bold text-white leading-relaxed">
                              {q.questionText}
                            </h4>

                            {q.codeSnippet && (
                              <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                                <pre>{q.codeSnippet}</pre>
                              </div>
                            )}

                            <div className="grid gap-2">
                              {q.options?.map((opt, optIdx) => {
                                const isUserChoice = userAns === optIdx;
                                const isActualCorrect = optIdx === q.correctAnswer;

                                let optBorder = "border-slate-800 bg-slate-950/60 text-slate-400";
                                if (isActualCorrect) {
                                  optBorder = "border-emerald-500 bg-emerald-950/50 text-emerald-200 font-bold";
                                } else if (isUserChoice && !isActualCorrect) {
                                  optBorder = "border-rose-500 bg-rose-950/50 text-rose-200 font-bold";
                                }

                                return (
                                  <div
                                    key={optIdx}
                                    className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-3 ${optBorder}`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="font-mono font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                                      <span>{opt}</span>
                                    </div>
                                    {isActualCorrect && <span className="text-[10px] uppercase font-black text-emerald-400 shrink-0">Correct Key</span>}
                                    {isUserChoice && !isActualCorrect && <span className="text-[10px] uppercase font-black text-rose-400 shrink-0">Your Answer</span>}
                                  </div>
                                );
                              })}
                            </div>

                            {q.explanation && (
                              <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 text-xs text-slate-300 space-y-1">
                                <strong className="text-emerald-400 block font-bold">Authoritative Explanation:</strong>
                                <p className="leading-relaxed">{q.explanation}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
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
              <h3 className="text-2xl font-black text-white">Congratulations! Course 100% Completed!</h3>
              <p className="text-xs text-emerald-200 font-medium max-w-lg mx-auto">
                You have completed all modules for {course.title}. Download your complete course manual PDF or claim your official completion certificate now!
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => generateCoursePDF(course, studentName)}
                  className="px-6 py-3 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Download Complete Course PDF</span>
                </button>

                <button
                  onClick={() => onViewCertificate(course.id)}
                  className="px-6 py-3 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-slate-950" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          )}

          {/* Reading Material Sections */}
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
                    {rm.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Sections */}
              {rm.sections && rm.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-base font-bold text-white border-b border-slate-800 pb-1">
                    {sec.heading}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">{sec.text}</p>
                  
                  {sec.bulletPoints && (
                    <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx}>{bp}</li>
                      ))}
                    </ul>
                  )}

                  {sec.table && (
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-xs text-left border-collapse border border-slate-800">
                        <thead>
                          <tr className="bg-slate-950 text-emerald-400">
                            {sec.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-2 border border-slate-800">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sec.table.rows.map((r, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-800/40">
                              {r.map((c, cIdx) => (
                                <td key={cIdx} className="p-2 border border-slate-800 text-slate-300">{c}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              {/* Code Examples */}
              {rm.codeExamples && rm.codeExamples.map((ex, exIdx) => (
                <div key={exIdx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Code className="w-4 h-4" />
                      <span>{ex.title}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Python 3 / SQL</span>
                  </div>

                  <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-x-auto font-mono text-xs text-emerald-300">
                    <pre>{ex.code}</pre>
                  </div>
                  {ex.explanation && (
                    <p className="text-xs text-slate-400 italic">Note: {ex.explanation}</p>
                  )}
                </div>
              ))}

              {/* Practice Exercise */}
              {rm.practiceExercise && (
                <div className="bg-slate-950 p-5 rounded-2xl border border-amber-500/40 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>Practice Challenge: {rm.practiceExercise.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{rm.practiceExercise.problem}</p>

                  <button
                    onClick={() => setShowSolution(!showSolution)}
                    className="px-3 py-1.5 text-xs font-bold text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 rounded-lg border border-amber-800"
                  >
                    {showSolution ? 'Hide Solution' : 'View Solution Code'}
                  </button>

                  {showSolution && (
                    <div className="bg-slate-900 p-3 rounded-xl font-mono text-xs text-emerald-300 border border-slate-800">
                      <pre>{rm.practiceExercise.solutionCode}</pre>
                    </div>
                  )}
                </div>
              )}

              {/* Key Takeaways */}
              {rm.keyTakeaways && rm.keyTakeaways.length > 0 && (
                <div className="bg-brand-950/40 p-5 rounded-2xl border border-brand-800/80 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">Key Takeaways</h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {rm.keyTakeaways.map((kt, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{kt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Official References */}
              {rm.references && rm.references.length > 0 && (
                <div className="pt-4 border-t border-slate-800 text-xs space-y-2">
                  <span className="font-bold text-slate-400 uppercase">Learning References:</span>
                  <div className="flex flex-wrap gap-3">
                    {rm.references.map((ref, rIdx) => (
                      <a
                        key={rIdx}
                        href={ref.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        <span>{ref.title}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Bottom Action Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentModuleIndex <= 0}
              className="w-full sm:w-auto px-4 py-3 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-2xl flex items-center justify-center gap-1.5 transition-all border border-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Take Module Quiz Button */}
            <button
              onClick={() => setQuizModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl transition-all flex items-center justify-center gap-2 border-2 border-amber-300"
            >
              <HelpCircle className="w-4.5 h-4.5 text-slate-950" />
              <span>Take {currentModule?.title?.split('—')[0] || 'Module'} Quiz (5 Qs)</span>
            </button>

            <button
              onClick={handleMarkComplete}
              className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-black shadow-lg transition-all flex items-center justify-center gap-2 border-2 ${
                currentModule?.completed
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                  : 'bg-brand-600 hover:bg-brand-500 text-white border-brand-900'
              }`}
            >
              <CheckCircle className="w-4.5 h-4.5" />
              <span>{currentModule?.completed ? 'Completed ✓' : 'Mark Complete ✓'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentModuleIndex >= (course.modules?.length || 1) - 1}
              className="w-full sm:w-auto px-4 py-3 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 disabled:opacity-40 rounded-2xl flex items-center justify-center gap-1.5 transition-all border border-brand-900"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      </div>
    </div>

      {/* Module Quiz Modal */}
      {currentModule && (
        <ModuleQuizModal
          isOpen={quizModalOpen}
          onClose={() => setQuizModalOpen(false)}
          module={currentModule}
          courseId={course.id}
          onQuizPassed={(modId) => {
            onToggleModuleComplete(course.id, modId);
          }}
          onContinueNextModule={() => {
            handleNext();
          }}
        />
      )}

      {/* Final Assessment Modal */}
      <FinalTestModal
        isOpen={finalTestModalOpen}
        onClose={() => setFinalTestModalOpen(false)}
        course={course}
        onTestPassed={() => {
          confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.5 }
          });
        }}
        onViewCourseProgress={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* CANDIDATE PROJECT DETAILS & SUBMISSION MODAL */}
      {activeProjectForDetails && (() => {
        const proj = activeProjectForDetails;
        const sub = candidateSubmissions[proj.id];
        const status = sub?.status || 'Not Started';
        const isEditable = status === 'Not Started' || status === 'Needs Changes';

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 border-2 border-brand-500/50 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-white relative max-h-[92vh] overflow-y-auto space-y-6">
              <button
                onClick={() => {
                  setActiveProjectForDetails(null);
                  setSubmissionError('');
                }}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-slate-800 pb-4 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-950 text-brand-300 border border-brand-700">
                    PROJECT {proj.projectNumber || 1}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    Difficulty: {proj.difficulty || 'Beginner'}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    • Estimated: {proj.estimatedTime || '2–3 Days'}
                  </span>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                    status === 'Approved'
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                      : status === 'Needs Changes'
                      ? 'bg-rose-950 text-rose-300 border-rose-600 animate-pulse'
                      : status === 'Submitted'
                      ? 'bg-amber-950 text-amber-300 border-amber-600'
                      : status === 'Under Review'
                      ? 'bg-blue-950 text-blue-300 border-blue-600'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {status}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-white">{proj.title}</h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {proj.shortDescription}
                </p>
              </div>

              {/* Reviewer Feedback Box (if Needs Changes) */}
              {status === 'Needs Changes' && sub?.reviewerComments && (
                <div className="p-4 rounded-2xl bg-rose-950/70 border-2 border-rose-700 space-y-1.5 text-xs">
                  <p className="font-black text-rose-300 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    Reviewer Feedback (Changes Requested):
                  </p>
                  <p className="text-rose-100 italic font-medium pl-5.5">
                    "{sub.reviewerComments}"
                  </p>
                  <p className="text-[11px] text-rose-300/90 pt-1 pl-5.5">
                    You can update your code, commit to GitHub, and resubmit your updated repository URL below.
                  </p>
                </div>
              )}

              {/* Project Instructions Tabs / Details */}
              <div className="space-y-4 text-xs">
                {/* Objective */}
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                  <p className="text-[10px] font-black uppercase tracking-wider text-brand-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Project Objective
                  </p>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {proj.objective}
                  </p>
                </div>

                {/* Requirements */}
                {proj.requirements && (
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <CheckSquare className="w-3.5 h-3.5" />
                      Mandatory Requirements
                    </p>
                    <ul className="space-y-1.5 text-slate-300">
                      {(Array.isArray(proj.requirements)
                        ? proj.requirements
                        : proj.requirements.split('\n')
                      ).filter(Boolean).map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {proj.technologies && (
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" />
                      Technologies & Skills Expected
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {(Array.isArray(proj.technologies)
                        ? proj.technologies
                        : proj.technologies.split(',')
                      ).map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 text-[11px] font-bold bg-slate-900 text-slate-200 border border-slate-700 rounded-lg">
                          {typeof tech === 'string' ? tech.trim() : tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expected Output */}
                {proj.expectedOutput && (
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                    <p className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                      Expected Output & Deliverable
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      {proj.expectedOutput}
                    </p>
                  </div>
                )}

                {/* Submission Instructions */}
                <div className="p-4 rounded-2xl bg-brand-950/40 border border-brand-800/80 space-y-1.5">
                  <p className="text-[10px] font-black uppercase tracking-wider text-brand-300">
                    Submission Instructions
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300">
                    <li>Complete your project on your local machine.</li>
                    <li>Upload/push your complete code to a public GitHub repository.</li>
                    <li>Ensure the repository contains a README.md and complete source files.</li>
                    <li>Paste your public GitHub repository URL below.</li>
                    <li>Submit your repository for reviewer evaluation.</li>
                  </ol>
                </div>
              </div>

              {/* GitHub Repository Submission Form */}
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-white">GitHub Repository Submission</h3>
                  {status === 'Submitted' && (
                    <span className="text-[10px] font-bold text-amber-400">Under Review</span>
                  )}
                  {status === 'Approved' && (
                    <span className="text-[10px] font-bold text-emerald-400">Approved ✓</span>
                  )}
                </div>

                {/* Validation Error Message Banner */}
                {submissionError && (
                  <div className="p-3 bg-rose-950/80 border border-rose-700 rounded-xl text-rose-200 text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{submissionError}</span>
                  </div>
                )}

                {/* If already submitted and NOT needs changes: read only view */}
                {!isEditable ? (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400">Submitted GitHub Repository</p>
                      <a
                        href={sub?.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-emerald-400 hover:underline flex items-center gap-1.5 text-xs font-bold mt-1 break-all"
                      >
                        <span>{sub?.githubUrl}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>

                    {sub?.liveUrl && (
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400">Live Demo URL</p>
                        <a
                          href={sub.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-blue-400 hover:underline flex items-center gap-1.5 text-xs font-bold mt-1"
                        >
                          <span>{sub.liveUrl}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      </div>
                    )}

                    {sub?.candidateComments && (
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400">Candidate Comments</p>
                        <p className="text-slate-300 italic mt-0.5">"{sub.candidateComments}"</p>
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Submitted on: {sub?.submittedAt ? new Date(sub.submittedAt).toLocaleString() : 'N/A'}</span>
                      <span className="font-extrabold text-slate-400">Duplicate submissions disabled</span>
                    </div>
                  </div>
                ) : (
                  /* Form for initial submission OR resubmission on Needs Changes */
                  <form onSubmit={(e) => { e.preventDefault(); handleInitiateProjectSubmit(); }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        GitHub Repository URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={submitGithubUrl}
                        onChange={(e) => {
                          setSubmitGithubUrl(e.target.value);
                          if (submissionError) setSubmissionError('');
                        }}
                        placeholder="https://github.com/your-username/project-repo"
                        className="w-full px-4 py-2.5 text-xs font-mono bg-slate-950 border-2 border-slate-800 rounded-xl outline-none focus:border-brand-500 text-white"
                      />
                      <p className="text-[10px] text-slate-400 mt-1">
                        Format: https://github.com/username/repository (make sure your repo is set to Public)
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Live Project URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={submitLiveUrl}
                        onChange={(e) => setSubmitLiveUrl(e.target.value)}
                        placeholder="https://your-project.vercel.app or Netlify URL"
                        className="w-full px-4 py-2.5 text-xs font-mono bg-slate-950 border-2 border-slate-800 rounded-xl outline-none focus:border-brand-500 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Candidate Comments / Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={submitNotes}
                        onChange={(e) => setSubmitNotes(e.target.value)}
                        placeholder="Add any notes for the reviewer (e.g. key features implemented, libraries used, or instructions)..."
                        className="w-full px-4 py-2 text-xs bg-slate-950 border-2 border-slate-800 rounded-xl outline-none focus:border-brand-500 text-white"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveProjectForDetails(null);
                          setSubmissionError('');
                        }}
                        className="px-4 py-2.5 text-xs font-bold text-slate-400 hover:text-white rounded-xl"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmittingProject}
                        className="px-6 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-500 rounded-xl border-2 border-brand-400 shadow-md cursor-pointer transition-all disabled:opacity-50"
                      >
                        {status === 'Needs Changes' ? 'Resubmit Project' : 'Submit Project'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* SUBMISSION CONFIRMATION POPUP MODAL */}
      {showSubmissionConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-brand-400 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-white space-y-5 text-center relative">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/20 text-brand-400 border border-brand-400/30 flex items-center justify-center mx-auto text-2xl">
              <FolderCheck className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white">Confirm Project Submission</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Are you sure you want to submit this project? Make sure your GitHub repository contains your complete project and is accessible to the reviewer.
              </p>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-400 break-all text-left">
              🔗 {submitGithubUrl}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmissionConfirmModal(false)}
                className="w-1/2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={isSubmittingProject}
                onClick={handleConfirmProjectSubmit}
                className="w-1/2 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-black text-xs transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmittingProject ? 'Submitting...' : 'Submit Project'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, CheckCircle, Circle, Award, Download, 
  ChevronRight, ChevronLeft, BookOpen, ExternalLink, 
  Code, Sparkles, AlertTriangle, CheckSquare,
  Clock, Flag, RotateCcw, Trophy, Check, X, HelpCircle,
  ShieldCheck, Play, ArrowRight, RefreshCw, Lock,
  User, FileText, CheckCircle2, ShieldAlert, GraduationCap
} from 'lucide-react';
import { generateCoursePDF, generateQuestionPaperPDF } from '../utils/pdfGenerator';

export default function LearningPage({ 
  course, 
  activeModuleId, 
  onBack, 
  onToggleModuleComplete, 
  onViewCertificate 
}) {
  const [currentModule, setCurrentModule] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);

  // Lock State Modal
  const [showLockedModal, setShowLockedModal] = useState(false);

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
        setSelectedAnswers({});
        setShowAnswers(false);
        setIsExamMode(false);
        return;
      }
    }

    // Default to first module
    setCurrentModule(course.modules[0]);
    setShowSolution(false);
    setSelectedAnswers({});
    setShowAnswers(false);
    setIsExamMode(false);
  }, [course, activeModuleId]);

  // Exam Timer Countdown
  useEffect(() => {
    let interval = null;
    if (isExamMode && examTimerActive && !examSubmitted && examTimeLeft > 0) {
      interval = setInterval(() => {
        setExamTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExamMode, examTimerActive, examSubmitted, examTimeLeft]);

  if (!course) return null;

  const currentModuleIndex = course.modules?.findIndex(m => m.id === currentModule?.id) ?? 0;
  const completedCount = course.modules?.filter(m => m.completed).length || 0;
  const totalCount = course.modules?.length || 1;
  const allModulesCompleted = course.modules && course.modules.length > 0 && course.modules.every(m => m.completed);
  // Strict locking: all modules must be completed (or course progress 100% with all modules marked)
  const isCourseFullyCompleted = allModulesCompleted || (course.progress === 100 && completedCount === totalCount);

  // Handle Mark Module Complete
  const handleMarkComplete = () => {
    if (!currentModule) return;
    onToggleModuleComplete(course.id, currentModule.id);

    // Check if this completes all remaining modules
    const remainingUncompleted = course.modules.filter(m => !m.completed && m.id !== currentModule.id);
    if (remainingUncompleted.length === 0) {
      confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.55 }
      });
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModule(course.modules[currentModuleIndex - 1]);
      setShowSolution(false);
      setSelectedAnswers({});
      setShowAnswers(false);
      setIsExamMode(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModule(course.modules[currentModuleIndex + 1]);
      setShowSolution(false);
      setSelectedAnswers({});
      setShowAnswers(false);
      setIsExamMode(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Exam Handlers
  const openExam = () => {
    if (!isCourseFullyCompleted) {
      setShowLockedModal(true);
      return;
    }
    setIsExamMode(true);
    const rec = loadPaperRecord(activePaper.id);
    if (!rec?.submitted) {
      setExamAnswers({});
      setExamFlagged({});
      setExamCurrentQ(0);
      setExamTimeLeft((activePaper.timeLimitMinutes || 45) * 60);
      setExamTimerActive(true);
    }
    setShowSubmitModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPaper = (paperId) => {
    if (paperId === selectedPaperId) return;
    if (isExamMode && !examSubmitted && Object.keys(examAnswers).length > 0) {
      if (!window.confirm(`You are currently answering ${activePaper.studentName}'s question paper. Switching to another paper will reset your active unsaved responses in this paper. Continue?`)) {
        return;
      }
    }
    setSelectedPaperId(paperId);
    setExamCurrentQ(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAutoSubmit = () => {
    performExamSubmission();
  };

  const handleManualSubmit = () => {
    setShowSubmitModal(false);
    performExamSubmission();
  };

  const performExamSubmission = () => {
    setExamSubmitted(true);
    setExamTimerActive(false);

    // Calculate score for active paper
    let score = 0;
    examQuestions.forEach((q, idx) => {
      const qKey = q.id || idx;
      if (examAnswers[qKey] === q.correctAnswer) {
        score++;
      }
    });

    const percentage = totalExamQuestions > 0 ? Math.round((score / totalExamQuestions) * 100) : 0;
    const passed = percentage >= (activePaper.passingScore || finalTest?.passingScore || 80);

    const submissionData = {
      submitted: true,
      paperId: activePaper.id,
      studentName: activePaper.studentName,
      paperCode: activePaper.paperCode,
      answers: examAnswers,
      score,
      total: totalExamQuestions,
      percentage,
      passed,
      submittedAt: new Date().toISOString()
    };

    try {
      localStorage.setItem(`arshith_exam_${course.id}_${activePaper.id}`, JSON.stringify(submissionData));
      setPaperRecords(prev => ({ ...prev, [activePaper.id]: submissionData }));
    } catch (e) {}

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (passed) {
      confetti({
        particleCount: 220,
        spread: 100,
        origin: { y: 0.5 }
      });
    }
  };

  // Exam Score calculation for active paper
  let correctExamCount = 0;
  examQuestions.forEach((q, idx) => {
    const qKey = q.id || idx;
    if (examAnswers[qKey] === q.correctAnswer) {
      correctExamCount++;
    }
  });
  const examPercentage = totalExamQuestions > 0 ? Math.round((correctExamCount / totalExamQuestions) * 100) : 0;
  const examPassed = examPercentage >= (activePaper.passingScore || finalTest?.passingScore || 80);
  const answeredCount = Object.keys(examAnswers).length;

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const rm = currentModule?.readingMaterial;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar */}
      <header className="bg-slate-900 border-b-2 border-brand-900 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (isExamMode && !examSubmitted && Object.keys(examAnswers).length > 0) {
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
            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1.5 text-xs font-extrabold border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{isExamMode ? "Exit Exam View" : "Exit Player"}</span>
          </button>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div>
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">{course.title}</span>
            <h2 className="text-sm font-black text-white truncate max-w-xs sm:max-w-md">
              {isExamMode ? `${activePaper.paperCode || 'QP'} • ${activePaper.studentName || 'Final Exam'}` : currentModule?.title}
            </h2>
          </div>
        </div>

        {/* Progress Tracker Widget & Actions */}
        <div className="flex items-center gap-4">
          {isExamMode && !examSubmitted ? (
            /* Live Exam Timer Widget */
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 font-mono text-xs font-black ${
                examTimeLeft < 300 
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse' 
                  : 'bg-slate-800 border-slate-700 text-emerald-400'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTimer(examTimeLeft)}</span>
              </div>

              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-4 py-2 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
              >
                Submit Paper
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Module Progress</span>
                <p className="text-xs font-black text-white">
                  {completedCount} / {totalCount} Completed ({Math.round(completedCount/totalCount * 100)}%)
                </p>
              </div>

              <div className="w-24 sm:w-32 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.round(completedCount/totalCount * 100)}%` }}
                />
              </div>

              {isCourseFullyCompleted && (
                <button
                  onClick={() => onViewCertificate(course.id)}
                  className="px-3.5 py-1.5 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="hidden md:inline">Certificate Ready</span>
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0">
        
        {/* Left Sidebar: Course Curriculum Outline (4 Cols) */}
        <div className="lg:col-span-4 bg-slate-900/70 border-r-2 border-brand-900 p-4 sm:p-5 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">Course Syllabus</h3>
              <p className="text-[11px] text-slate-400 font-medium">{course.modules?.length} Interactive Modules</p>
            </div>
            <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${
              isCourseFullyCompleted 
                ? 'bg-emerald-950 text-emerald-300 border-emerald-600' 
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>
              {isCourseFullyCompleted ? "100% Complete" : `${completedCount}/${totalCount} Done`}
            </span>
          </div>

          {/* Module List Cards */}
          <div className="space-y-2">
            {course.modules?.map((m, idx) => {
              const isCurrent = !isExamMode && m.id === currentModule?.id;
              const isDone = Boolean(m.completed);

              return (
                <button
                  key={m.id || idx}
                  onClick={() => {
                    if (isExamMode && !examSubmitted && Object.keys(examAnswers).length > 0) {
                      if (!window.confirm("Leave active exam? Your answers in this attempt will be reset.")) return;
                    }
                    setIsExamMode(false);
                    setCurrentModule(m);
                    setShowSolution(false);
                    setSelectedAnswers({});
                    setShowAnswers(false);
                  }}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all border flex items-start gap-3 relative group ${
                    isCurrent
                      ? 'bg-slate-800/90 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-slate-900/60 hover:bg-slate-800 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="mt-0.5">
                    {isDone ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : isCurrent ? (
                      <Circle className="w-4 h-4 text-emerald-400 fill-emerald-400/20 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Module {idx + 1}
                      </span>
                      {m.estimatedHours && (
                        <span className="text-[9px] text-slate-500 font-semibold">{m.estimatedHours} hrs</span>
                      )}
                    </div>
                    <h4 className={`text-xs font-bold truncate mt-0.5 ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                      {m.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* FINAL CERTIFICATION EXAM SIDEBAR CARD */}
          {finalTest && (
            <div className="pt-2">
              <button
                onClick={() => {
                  if (!isCourseFullyCompleted) {
                    setShowLockedModal(true);
                  } else {
                    openExam();
                  }
                }}
                className={`w-full p-4 rounded-2xl text-left transition-all border-2 relative overflow-hidden group ${
                  isExamMode
                    ? 'bg-gradient-to-br from-brand-900 to-emerald-950 border-emerald-400 shadow-xl'
                    : isCourseFullyCompleted
                    ? 'bg-slate-900/90 hover:bg-slate-800 border-amber-500/50 hover:border-amber-400 shadow-lg'
                    : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-700/80 opacity-90'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                    isExamMode 
                      ? 'bg-emerald-500 text-slate-950 border-emerald-300 font-black' 
                      : isCourseFullyCompleted
                      ? 'bg-amber-400/10 text-amber-400 border-amber-500/30'
                      : 'bg-slate-800/80 text-amber-400/80 border-slate-700'
                  }`}>
                    {isCourseFullyCompleted ? <Trophy className="w-5 h-5" /> : <Lock className="w-4 h-4 text-amber-400" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                        {!isCourseFullyCompleted && <Lock className="w-2.5 h-2.5 inline" />}
                        Final Assessment
                      </span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        examSubmitted
                          ? examPassed 
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                            : 'bg-rose-950 text-rose-300 border border-rose-600'
                          : isCourseFullyCompleted 
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                          : 'bg-amber-950/80 text-amber-300 border border-amber-600/50'
                      }`}>
                        {examSubmitted ? `Score: ${examPercentage}%` : isCourseFullyCompleted ? '4 Papers Ready' : `Locked (${completedCount}/${totalCount})`}
                      </span>
                    </div>

                    <h4 className="text-xs font-black text-white mt-1 group-hover:text-emerald-300 transition-colors">
                      {finalTest.title}
                    </h4>

                    <p className="text-[10px] text-slate-400 mt-1">
                      {isCourseFullyCompleted 
                        ? (examSubmitted ? 'Submission recorded • Review below' : '4 Student Sets: Arshith, Priya, Rahul & Adithya')
                        : `Complete all ${totalCount} modules to unlock final question papers (${completedCount}/${totalCount} done)`}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          )}

        </div>

        {/* Right Main Stage: Modules Reading Material OR Interactive Exam Simulator (8 Cols) */}
        <div className="lg:col-span-8 p-4 sm:p-8 overflow-y-auto space-y-8 max-w-4xl mx-auto w-full">

          {/* ========================================================================= */}
          {/* VIEW A: INTERACTIVE FINAL EXAM SIMULATOR (4 STUDENT QUESTION PAPERS)      */}
          {/* ========================================================================= */}
          {isExamMode ? (
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
            /* ========================================================================= */
            /* VIEW B: MODULE READING MATERIAL & PRACTICAL EXERCISES                    */
            /* ========================================================================= */
            <div className="space-y-8">
              
              {/* Module Top Header */}
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-black uppercase tracking-wider">
                    Module {currentModuleIndex + 1} of {course.modules?.length}
                  </span>
                  {currentModule?.completed && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {currentModule?.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {currentModule?.description}
                </p>
              </div>

              {/* Module Completed Card (When 100% course completed) */}
              {isCourseFullyCompleted && (
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-brand-950 border-2 border-emerald-500/50 text-center space-y-4 shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center mx-auto text-2xl">
                    🏆
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    All Modules Mastered! Final Examination Unlocked 🎉
                  </h3>
                  <p className="text-xs text-slate-300 max-w-lg mx-auto">
                    You have completed all {totalCount} modules in {course.title}. Take the official certification examination by selecting from the 4 student question papers!
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={openExam}
                      className="px-6 py-3 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg flex items-center gap-2 border-2 border-amber-300 transition-all"
                    >
                      <Trophy className="w-4 h-4 text-slate-950" />
                      <span>Take Final Test (4 Student Question Papers)</span>
                    </button>

                    <button
                      onClick={() => generateCoursePDF(course)}
                      className="px-6 py-3 text-xs font-black text-white bg-brand-900 hover:bg-brand-800 rounded-full border border-brand-700 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4 text-emerald-400" />
                      <span>Download Course PDF</span>
                    </button>

                    <button
                      onClick={() => onViewCertificate(course.id)}
                      className="px-6 py-3 text-xs font-bold text-emerald-300 bg-emerald-950 hover:bg-emerald-900 rounded-full border border-emerald-700 flex items-center gap-2"
                    >
                      <Award className="w-4 h-4 text-emerald-400" />
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
                      <p className="text-sm leading-relaxed text-slate-300 font-normal whitespace-pre-line">
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
                            <span className="text-slate-300">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Deep Dive Sections */}
                  {rm.sections && rm.sections.length > 0 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-black text-emerald-400 border-b border-slate-800 pb-2">
                        3. Core Concepts & Architecture
                      </h3>

                      {rm.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
                          <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400 font-mono font-bold">3.{sIdx + 1}</span>
                            <span>{sec.heading}</span>
                          </h4>
                          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 whitespace-pre-line">
                            {sec.text}
                          </p>

                          {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                            <ul className="space-y-1.5 pt-2 pl-2 text-xs">
                              {sec.bulletPoints.map((bp, bpIdx) => (
                                <li key={bpIdx} className="flex items-start gap-2 text-slate-300">
                                  <span className="text-emerald-400 font-black">→</span>
                                  <span>{bp}</span>
                                </li>
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
                        <span>4. Executable Code Implementations</span>
                      </h3>

                      <div className="space-y-4">
                        {rm.codeExamples.map((ex, exIdx) => (
                          <div key={exIdx} className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
                            <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300">
                              <span>{ex.title}</span>
                              <span className="text-[10px] font-mono text-emerald-400 uppercase">{ex.language || 'python'}</span>
                            </div>
                            <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                              {ex.code}
                            </pre>
                            {ex.explanation && (
                              <div className="bg-slate-900/40 p-3 text-[11px] text-slate-400 border-t border-slate-900">
                                <strong className="text-slate-300">Analysis:</strong> {ex.explanation}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Takeaways */}
                  {rm.keyTakeaways && rm.keyTakeaways.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-black text-emerald-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <span>5. Key Engineering Takeaways</span>
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs">
                        {rm.keyTakeaways.map((takeaway, tIdx) => (
                          <div key={tIdx} className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-slate-300 flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exercises */}
                  {rm.exercises && rm.exercises.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-black text-emerald-400 border-b border-slate-800 pb-2">
                        6. Hands-On Practice Exercises
                      </h3>

                      <div className="space-y-3">
                        {rm.exercises.map((exe, eIdx) => (
                          <div key={eIdx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                            <h4 className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                              <span>Exercise {eIdx + 1}: {exe.title}</span>
                              {exe.difficulty && (
                                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-amber-500/20">
                                  {exe.difficulty}
                                </span>
                              )}
                            </h4>
                            <p className="text-xs text-slate-300 leading-relaxed">{exe.prompt}</p>
                            {exe.hint && (
                              <p className="text-[11px] text-slate-500 italic">💡 Hint: {exe.hint}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* References */}
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
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <button
                  onClick={handlePrev}
                  disabled={currentModuleIndex <= 0}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-2xl flex items-center justify-center gap-1.5 transition-all border border-slate-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Module</span>
                </button>

                <button
                  onClick={handleMarkComplete}
                  className={`w-full sm:w-auto px-7 py-3 rounded-full text-xs font-black shadow-lg transition-all flex items-center justify-center gap-2 border-2 ${
                    currentModule?.completed
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                      : 'bg-brand-600 hover:bg-brand-500 text-white border-brand-900'
                  }`}
                >
                  <CheckCircle className="w-4.5 h-4.5" />
                  <span>{currentModule?.completed ? 'Module Completed ✓' : 'Mark Module Complete ✓'}</span>
                </button>

                {currentModuleIndex < (course.modules?.length || 1) - 1 ? (
                  <button
                    onClick={handleNext}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-2xl flex items-center justify-center gap-1.5 transition-all border border-brand-900"
                  >
                    <span>Next Module</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  finalTest && (
                    <button
                      onClick={() => {
                        if (!isCourseFullyCompleted) {
                          setShowLockedModal(true);
                        } else {
                          openExam();
                        }
                      }}
                      className={`w-full sm:w-auto px-6 py-3 text-xs font-black rounded-full flex items-center justify-center gap-1.5 transition-all shadow-lg border-2 ${
                        isCourseFullyCompleted
                          ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-300'
                          : 'bg-slate-800 text-amber-300 border-amber-500/40 hover:bg-slate-700'
                      }`}
                    >
                      {isCourseFullyCompleted ? <Trophy className="w-4 h-4 text-slate-950" /> : <Lock className="w-4 h-4 text-amber-400" />}
                      <span>{isCourseFullyCompleted ? 'Take Master Exam (4 Papers)' : `Final Exam Locked (${completedCount}/${totalCount})`}</span>
                    </button>
                  )
                )}
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-6 text-white relative">
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl">
                📝
              </div>
              <h3 className="text-xl font-black">Submit {activePaper.studentName}'s Paper?</h3>
              <p className="text-xs text-slate-400">
                You are submitting <strong>{activePaper.paperCode}</strong> ({activePaper.studentName}). Your final score will be calculated and recorded.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Candidate:</span>
                <span className="font-bold text-white">{activePaper.studentName} ({activePaper.rollNo})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Questions Answered:</span>
                <span className="font-bold text-emerald-400">{answeredCount} of {totalExamQuestions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Unanswered Questions:</span>
                <span className="font-bold text-rose-400">{totalExamQuestions - answeredCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Passing Criteria:</span>
                <span className="font-bold text-amber-400">{activePaper.passingScore || 80}%</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="w-1/2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all border border-slate-700"
              >
                Continue Answering
              </button>
              <button
                onClick={handleManualSubmit}
                className="w-1/2 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs transition-all shadow-md"
              >
                Confirm Submission
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOCKED EXAMINATION MODAL */}
      {showLockedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 text-white relative">
            <button
              onClick={() => setShowLockedModal(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto text-2xl shadow-lg">
                <Lock className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Final Examination Sealed 🔒</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                In accordance with Arshith Boot Camp academic integrity guidelines, the 4 student question papers are strictly locked until you complete all course modules.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">Current Course Progress</span>
                <span className="text-amber-400">{completedCount} / {totalCount} Modules ({Math.round(completedCount/totalCount * 100)}%)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-300"
                  style={{ width: `${Math.round(completedCount/totalCount * 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Complete the remaining <strong className="text-white">{totalCount - completedCount}</strong> module(s) to unlock the 4 official question papers set for:
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-300">
                  <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Paper 1: Arshith Kumar</span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-300">
                  <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Paper 2: Priya Sharma</span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-300">
                  <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Paper 3: Rahul Verma</span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-300">
                  <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Paper 4: Adithya V</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLockedModal(false)}
                className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-black text-xs transition-all shadow-md"
              >
                Continue Learning Modules
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

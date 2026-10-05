import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, CheckCircle, Circle, Award, Download, 
  ChevronRight, ChevronLeft, BookOpen, ExternalLink, 
  Code, Sparkles, AlertTriangle, CheckSquare,
  Clock, Flag, RotateCcw, Trophy, Check, X, HelpCircle,
  ShieldCheck, Play, ArrowRight, RefreshCw
} from 'lucide-react';
import { generateCoursePDF } from '../utils/pdfGenerator';

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
  const examQuestions = finalTest?.questions || [];
  const totalExamQuestions = examQuestions.length;

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

  // Load persistent exam submission if available
  useEffect(() => {
    if (!course?.id) return;
    try {
      const saved = localStorage.getItem(`arshith_exam_${course.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.submitted) {
          setExamSubmitted(true);
          setExamAnswers(parsed.answers || {});
          setExamTimerActive(false);
        }
      }
    } catch (e) {}
  }, [course?.id]);

  // Exam Handlers (Strictly single attempt, no retake option)
  const openExam = () => {
    setIsExamMode(true);
    if (!examSubmitted) {
      setExamAnswers({});
      setExamFlagged({});
      setExamCurrentQ(0);
      setExamTimeLeft((finalTest?.timeLimitMinutes || 45) * 60);
      setExamTimerActive(true);
    }
    setShowSubmitModal(false);
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
    try {
      localStorage.setItem(`arshith_exam_${course.id}`, JSON.stringify({
        submitted: true,
        answers: examAnswers,
        submittedAt: new Date().toISOString()
      }));
    } catch (e) {}
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Calculate score
    let score = 0;
    examQuestions.forEach((q, idx) => {
      const qKey = q.id || idx;
      if (examAnswers[qKey] === q.correctAnswer) {
        score++;
      }
    });
    const percentage = totalExamQuestions > 0 ? Math.round((score / totalExamQuestions) * 100) : 0;
    if (percentage >= (finalTest?.passingScore || 80)) {
      confetti({
        particleCount: 220,
        spread: 100,
        origin: { y: 0.5 }
      });
    }
  };

  // Exam Score calculation
  let correctExamCount = 0;
  examQuestions.forEach((q, idx) => {
    const qKey = q.id || idx;
    if (examAnswers[qKey] === q.correctAnswer) {
      correctExamCount++;
    }
  });
  const examPercentage = totalExamQuestions > 0 ? Math.round((correctExamCount / totalExamQuestions) * 100) : 0;
  const examPassed = examPercentage >= (finalTest?.passingScore || 80);
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
              if (isExamMode && !examSubmitted) {
                if (window.confirm("An active exam is in progress. Are you sure you want to exit? Your progress in this attempt will be reset.")) {
                  setIsExamMode(false);
                  setExamTimerActive(false);
                }
              } else {
                onBack();
              }
            }}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1.5 text-xs font-extrabold border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Exit Boot Camp Player</span>
          </button>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div>
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">{course.title}</span>
            <h2 className="text-sm font-black text-white truncate max-w-xs sm:max-w-md">
              {isExamMode ? (finalTest?.title || "Python Master Certification Exam") : currentModule?.title}
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
                className="px-4 py-1.5 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg transition-all"
              >
                Submit Exam
              </button>
            </div>
          ) : (
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
          )}

          <button
            onClick={() => generateCoursePDF(course)}
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
        
        {/* Left Sidebar: Modules List & Final Exam Link (4 Cols) */}
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
              const isSelected = !isExamMode && currentModule?.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setIsExamMode(false);
                    setCurrentModule(mod);
                    setShowSolution(false);
                    setSelectedAnswers({});
                    setShowAnswers(false);
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

          {/* FINAL CERTIFICATION EXAM SIDEBAR CARD */}
          {finalTest && (
            <div className="pt-2">
              <button
                onClick={() => {
                  openExam();
                }}
                className={`w-full p-4 rounded-2xl text-left transition-all border-2 relative overflow-hidden group ${
                  isExamMode
                    ? 'bg-gradient-to-br from-brand-900 to-emerald-950 border-emerald-400 shadow-xl'
                    : isCourseFullyCompleted
                    ? 'bg-slate-900/90 hover:bg-slate-800 border-amber-500/50 hover:border-amber-400 shadow-lg'
                    : 'bg-slate-900/60 hover:bg-slate-800 border-slate-700/80'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                    isExamMode 
                      ? 'bg-emerald-500 text-slate-950 border-emerald-300 font-black' 
                      : 'bg-amber-400/10 text-amber-400 border-amber-500/30'
                  }`}>
                    <Trophy className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                        Final Assessment
                      </span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        examSubmitted
                          ? examPassed 
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                            : 'bg-rose-950 text-rose-300 border border-rose-600'
                          : isCourseFullyCompleted 
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {examSubmitted ? `Score: ${examPercentage}%` : isCourseFullyCompleted ? 'Ready' : '25 MCQs'}
                      </span>
                    </div>

                    <h4 className="text-xs font-black text-white mt-1 group-hover:text-emerald-300 transition-colors">
                      {finalTest.title}
                    </h4>

                    <p className="text-[10px] text-slate-400 mt-1">
                      {examSubmitted ? 'Submission recorded (Single attempt)' : `${totalExamQuestions} Questions • ${finalTest.timeLimitMinutes || 45} Mins • Pass ${finalTest.passingScore || 80}%`}
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
          {/* VIEW A: INTERACTIVE FINAL EXAM SIMULATOR                                  */}
          {/* ========================================================================= */}
          {isExamMode ? (
            <div className="space-y-6">
              
              {/* Exam Header Banner */}
              <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 rounded-3xl p-6 border-2 border-emerald-500/40 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-amber-400/10 text-amber-300 text-[10px] font-black uppercase rounded-full border border-amber-500/30 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      Official Master Certification Exam
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      Passing Criteria: {finalTest?.passingScore || 80}%
                    </span>
                  </div>

                  {!examSubmitted && (
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400">
                        Answered: <strong className="text-emerald-400">{answeredCount}</strong> / {totalExamQuestions}
                      </span>
                      <button
                        onClick={() => setShowSubmitModal(true)}
                        className="px-4 py-2 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md"
                      >
                        Finish & Submit
                      </button>
                    </div>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white">{finalTest?.title}</h1>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">{finalTest?.description}</p>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / totalExamQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* EXAM IN PROGRESS VIEW */}
              {!examSubmitted ? (
                <div className="space-y-6">

                  {/* 25-Question Matrix Navigator */}
                  <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="text-slate-300 uppercase tracking-wider">Question Quick Navigation</span>
                      <span className="text-[11px] text-slate-400">
                        Click number to jump to question
                      </span>
                    </div>

                    <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-13 lg:grid-cols-25 gap-1.5">
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
                        {examQuestions[examCurrentQ].options?.map((opt, oIdx) => {
                          const qKey = examQuestions[examCurrentQ].id || examCurrentQ;
                          const isSelected = examAnswers[qKey] === oIdx;

                          return (
                            <button
                              key={oIdx}
                              onClick={() => {
                                setExamAnswers(prev => ({ ...prev, [qKey]: oIdx }));
                              }}
                              className={`w-full text-left p-4 rounded-2xl text-xs transition-all border flex items-center justify-between group ${
                                isSelected
                                  ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200 font-bold shadow-lg'
                                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 border ${
                                  isSelected 
                                    ? 'bg-emerald-400 text-slate-950 border-emerald-300' 
                                    : 'bg-slate-800 text-slate-400 border-slate-700 group-hover:text-white'
                                }`}>
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span className="leading-relaxed">{opt}</span>
                              </div>

                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                                isSelected ? 'border-emerald-400 bg-emerald-400 text-slate-950' : 'border-slate-700'
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
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
                  
                  {/* Score Card Banner */}
                  <div className={`p-8 rounded-3xl border-2 text-center space-y-4 ${
                    examPassed 
                      ? 'bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 border-emerald-400' 
                      : 'bg-gradient-to-b from-rose-950 via-slate-900 to-slate-900 border-rose-500'
                  }`}>
                    <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl shadow-xl border-2 ${
                      examPassed ? 'bg-emerald-500/20 text-emerald-400 border-emerald-400' : 'bg-rose-500/20 text-rose-400 border-rose-500'
                    }`}>
                      {examPassed ? '🏆' : '📚'}
                    </div>

                    <div className="space-y-1">
                      <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                        examPassed ? 'bg-emerald-950 text-emerald-300 border-emerald-500' : 'bg-rose-950 text-rose-300 border-rose-600'
                      }`}>
                        {examPassed ? 'Certification Exam Passed' : 'Needs Improvement'}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-black text-white pt-2">
                        Your Score: {examPercentage}% ({correctExamCount} / {totalExamQuestions})
                      </h2>
                      <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed pt-1">
                        {examPassed 
                          ? `Outstanding accomplishment! You have conquered the rigorous Python Master Certification Exam and proven your technical depth across all 15 modules.` 
                          : `Passing score is ${finalTest?.passingScore || 80}%. Review the in-depth explanations below to solidify your understanding.`}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                      {examPassed && (
                        <button
                          onClick={() => onViewCertificate(course.id)}
                          className="px-6 py-3 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg flex items-center gap-2 border-2 border-amber-300"
                        >
                          <Award className="w-4 h-4 text-slate-950" />
                          <span>Claim Official Certificate</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setIsExamMode(false);
                          setCurrentModule(course.modules[0]);
                        }}
                        className="px-6 py-3 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-800"
                      >
                        Exit to Course Modules
                      </button>
                    </div>
                  </div>

                  {/* Comprehensive Review of All 25 Questions */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h3 className="text-lg font-black text-white">Detailed Solutions & Authoritative Explanations</h3>
                        <p className="text-xs text-slate-400">Review your answers against the complete grading rubric</p>
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
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 border ${
                                  isCorrect ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                                }`}>
                                  Q{idx + 1}
                                </span>
                                {q.topic && (
                                  <span className="text-xs font-bold text-slate-400">
                                    {q.topic}
                                  </span>
                                )}
                              </div>

                              <span className={`text-[11px] font-black px-2.5 py-1 rounded-full border ${
                                isCorrect ? 'bg-emerald-950 text-emerald-300 border-emerald-600' : 'bg-rose-950 text-rose-300 border-rose-600'
                              }`}>
                                {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                              </span>
                            </div>

                            <p className="text-xs font-bold text-white leading-relaxed">
                              {q.questionText}
                            </p>

                            {q.codeSnippet && (
                              <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                                <pre>{q.codeSnippet}</pre>
                              </div>
                            )}

                            <div className="grid gap-2">
                              {q.options?.map((opt, oIdx) => {
                                const isThisUser = userAns === oIdx;
                                const isThisCorrect = q.correctAnswer === oIdx;

                                let optStyle = "bg-slate-950/50 border-slate-800 text-slate-400";
                                if (isThisCorrect) {
                                  optStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                                } else if (isThisUser && !isThisCorrect) {
                                  optStyle = "bg-rose-950/60 border-rose-600 text-rose-300 line-through";
                                }

                                return (
                                  <div
                                    key={oIdx}
                                    className={`p-3 rounded-xl text-xs border flex items-center justify-between ${optStyle}`}
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <span className="font-bold opacity-80">{String.fromCharCode(65 + oIdx)}.</span>
                                      <span>{opt}</span>
                                    </div>
                                    <div className="text-[10px] font-black shrink-0 ml-2">
                                      {isThisCorrect && <span className="text-emerald-400">✓ Correct Key</span>}
                                      {isThisUser && !isThisCorrect && <span className="text-rose-400">Your Selection</span>}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 text-[11px] leading-relaxed text-slate-300">
                              <span className="text-emerald-400 font-bold">Authoritative Explanation: </span>
                              {q.explanation}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              )}

              {/* Submit Confirmation Modal */}
              {showSubmitModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                  <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-4 shadow-2xl text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-xl border border-emerald-500/20">
                      ?
                    </div>

                    <h3 className="text-lg font-black text-white">Ready to Submit Your Exam?</h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      You have answered <strong className="text-emerald-400">{answeredCount}</strong> of <strong className="text-white">{totalExamQuestions}</strong> questions.
                      {answeredCount < totalExamQuestions && (
                        <span className="block text-amber-400 font-bold mt-1">
                          Warning: You have {totalExamQuestions - answeredCount} unanswered questions!
                        </span>
                      )}
                    </p>

                    <div className="flex items-center justify-center gap-3 pt-3">
                      <button
                        onClick={() => setShowSubmitModal(false)}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700"
                      >
                        Keep Reviewing
                      </button>

                      <button
                        onClick={handleManualSubmit}
                        className="px-6 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 border border-emerald-300 shadow-lg"
                      >
                        Yes, Submit Exam Now
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* ========================================================================= */
            /* VIEW B: STANDARD COURSE MODULE READING MATERIAL                           */
            /* ========================================================================= */
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
                  <h3 className="text-2xl font-black text-white">Congratulations! All 15 Modules Completed!</h3>
                  <p className="text-xs text-emerald-200 font-medium max-w-lg mx-auto">
                    You have mastered all modules in {course.title}. Take the comprehensive Master Certification Exam to validate your engineering depth and claim your official credential!
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {finalTest && (
                      <button
                        onClick={openExam}
                        className="px-6 py-3 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg flex items-center gap-2 border-2 border-amber-300"
                      >
                        <Trophy className="w-4 h-4 text-slate-950" />
                        <span>{examSubmitted ? 'View Master Exam Results & Solutions' : 'Take Master Certification Exam (25 MCQs)'}</span>
                      </button>
                    )}

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
                      <p className="text-sm leading-relaxed text-slate-300 whitespace-pre-line">{sec.text}</p>
                      
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
                      <p className="text-xs text-slate-300 font-medium whitespace-pre-line">{rm.practiceExercise.problem}</p>

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

                  {/* Module Knowledge Check (5 MCQs) */}
                  {rm.mcqs && rm.mcqs.length > 0 && (
                    <div className="bg-slate-950 p-6 rounded-3xl border border-emerald-500/30 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/20">
                            ?
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-white uppercase tracking-wider">Module Knowledge Check (5 MCQs)</h4>
                            <p className="text-[11px] text-slate-400">Test your mastery of concepts from this module</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setShowAnswers(!showAnswers)}
                            className="px-3 py-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 rounded-xl border border-emerald-800 transition-all"
                          >
                            {showAnswers ? 'Hide Answer Key' : 'Reveal Answer Key'}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {rm.mcqs.map((mcq, qIdx) => {
                          const selected = selectedAnswers[mcq.id];
                          const isAnswered = selected !== undefined;
                          const isCorrect = selected === mcq.correctAnswer;

                          return (
                            <div key={mcq.id || qIdx} className="bg-slate-900/70 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
                              <div className="flex items-start gap-2.5">
                                <span className="w-6 h-6 rounded-lg bg-slate-800 text-emerald-400 text-xs font-black flex items-center justify-center shrink-0 border border-slate-700">
                                  Q{qIdx + 1}
                                </span>
                                <p className="text-xs font-bold text-white leading-relaxed">{mcq.question}</p>
                              </div>

                              <div className="grid gap-2 pt-1 sm:pl-8">
                                {mcq.options.map((opt, oIdx) => {
                                  const isThisSelected = selected === oIdx;
                                  const isThisCorrect = oIdx === mcq.correctAnswer;

                                  let btnStyle = "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:text-white";
                                  if (showAnswers) {
                                    if (isThisCorrect) btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                                    else if (isThisSelected) btnStyle = "bg-rose-950/60 border-rose-600 text-rose-300 line-through";
                                  } else if (isAnswered) {
                                    if (isThisSelected && isCorrect) btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                                    else if (isThisSelected && !isCorrect) btnStyle = "bg-rose-950/60 border-rose-600 text-rose-300";
                                  }

                                  return (
                                    <button
                                      key={oIdx}
                                      onClick={() => {
                                        setSelectedAnswers(prev => ({ ...prev, [mcq.id]: oIdx }));
                                      }}
                                      className={`w-full text-left p-3 rounded-xl text-xs transition-all border flex items-center justify-between ${btnStyle}`}
                                    >
                                      <span>{opt}</span>
                                      {isAnswered && isThisSelected && (
                                        <span className="text-[11px] font-black shrink-0 ml-2">
                                          {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                                        </span>
                                      )}
                                      {showAnswers && isThisCorrect && !isThisSelected && (
                                        <span className="text-[11px] font-black text-emerald-400 shrink-0 ml-2">
                                          ✓ Correct Key
                                        </span>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {(isAnswered || showAnswers) && (
                                <div className="sm:pl-8 pt-1">
                                  <p className="text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60 leading-relaxed">
                                    <span className="text-emerald-400 font-bold">Explanation: </span>
                                    {mcq.explanation}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
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
                      onClick={openExam}
                      className="w-full sm:w-auto px-6 py-3 text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-lg border-2 border-amber-300"
                    >
                      <Trophy className="w-4 h-4 text-slate-950" />
                      <span>{examSubmitted ? 'View Master Exam Results' : 'Take Master Exam (25 MCQs)'}</span>
                    </button>
                  )
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

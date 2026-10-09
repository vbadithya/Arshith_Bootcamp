import React from 'react';
import { 
  BookOpen, Award, CheckCircle, Clock, PlayCircle, 
  TrendingUp, Sparkles, ArrowRight, Download, User, FolderGit2
} from 'lucide-react';
import { STUDENT_PROFILE, SAMPLE_CERTIFICATES } from '../data/coursesData';
import { generateCoursePDF } from '../utils/pdfGenerator';

export default function StudentDashboard({ user, courses, onSelectCourse, onStartLearning, onViewCertificate }) {
  const enrolledCourses = courses.filter(c => c.progress > 0);
  const completedCourses = courses.filter(c => c.progress === 100);
  const inProgressCourse = enrolledCourses.sort((a, b) => b.progress - a.progress)[0] || courses[0];

  return (
    <div className="py-10 bg-[#FAFDFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white dark-bezel-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <img
                src={STUDENT_PROFILE.avatar}
                alt={STUDENT_PROFILE.name}
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-emerald-400/40 shadow-md"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Welcome back, {user?.full_name || user?.name || STUDENT_PROFILE.name} 👋
                </h1>
                <p className="text-xs sm:text-sm text-emerald-200/90 font-medium mt-0.5">
                  Arshith Boot Camp Student Dashboard • Keep building your skills!
                </p>
              </div>
            </div>

            <button
              onClick={() => onStartLearning(inProgressCourse.id)}
              className="px-6 py-3 text-xs font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full shadow-lg transition-all flex items-center gap-2 shrink-0 border-2 border-emerald-300"
            >
              <PlayCircle className="w-4 h-4 text-slate-950" />
              <span>Resume Learning</span>
            </button>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-brand-700/60">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-emerald-300 uppercase">Enrolled Boot Camps</p>
              <p className="text-2xl font-black text-white">{enrolledCourses.length}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-emerald-300 uppercase">Completed Courses</p>
              <p className="text-2xl font-black text-white">{completedCourses.length}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-emerald-300 uppercase">Certificates</p>
              <p className="text-2xl font-black text-amber-300">{SAMPLE_CERTIFICATES.length}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-emerald-300 uppercase">Learning Hours</p>
              <p className="text-2xl font-black text-white">42 hrs</p>
            </div>
          </div>
        </div>

        {/* Continue Learning Spotlight Banner */}
        {inProgressCourse && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 dark-bezel space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-brand-900 bg-brand-50 px-3 py-1 rounded-full uppercase border border-brand-200">
                Currently Studying
              </span>
              <span className="text-xs font-bold text-slate-500">{inProgressCourse.progress}% Overall Progress</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">{inProgressCourse.title}</h3>
                <p className="text-xs text-slate-500 font-semibold">
                  Instructor: {inProgressCourse.instructor.name} • Level: {inProgressCourse.level}
                </p>

                {/* Progress bar */}
                <div className="w-full max-w-md h-2.5 bg-slate-100 rounded-full overflow-hidden mt-3 border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full"
                    style={{ width: `${inProgressCourse.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => generateCoursePDF(inProgressCourse)}
                  className="px-4 py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-300 flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-brand-800" />
                  <span>Download Course PDF</span>
                </button>

                <button
                  onClick={() => onStartLearning(inProgressCourse.id)}
                  className="px-6 py-3 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 rounded-full border-2 border-brand-900 shadow-md transition-all flex items-center gap-2"
                >
                  <span>Continue Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enrolled Courses Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-slate-900">My Enrolled Boot Camp Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => {
              const completedModules = course.modules?.filter(m => m.completed).length || 0;
              const totalModules = course.modules?.length || 1;

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl p-6 dark-bezel flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-brand-800">{course.category}</span>
                      <span className="text-xs font-bold text-slate-500">{course.level}</span>
                    </div>

                    <h3 
                      onClick={() => onSelectCourse(course.id)}
                      className="text-lg font-black text-slate-900 hover:text-brand-700 cursor-pointer transition-colors"
                    >
                      {course.title}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex justify-between items-center text-xs font-black text-slate-700">
                      <span>{completedModules} / {totalModules} Modules</span>
                      <span className="text-emerald-800 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <FolderGit2 className="w-3 h-3 text-emerald-600" />
                        <span>3 Projects</span>
                      </span>
                      <span className="text-brand-700 font-extrabold">{course.progress}%</span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <div
                        className="h-full bg-gradient-to-r from-brand-600 to-emerald-400 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => onStartLearning(course.id)}
                        className="text-xs font-black text-brand-700 hover:text-brand-900 flex items-center gap-1"
                      >
                        <span>Open Modules</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

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
                        className="text-xs font-bold text-slate-600 hover:text-brand-900 flex items-center gap-1"
                      >
                        <Download className="w-3.5 h-3.5 text-brand-700" />
                        <span>PDF</span>
                      </button>

                      {course.progress === 100 && (
                        <button
                          onClick={() => onViewCertificate(course.id)}
                          className="px-3 py-1 text-[11px] font-black text-amber-900 bg-amber-200 rounded-full flex items-center gap-1 border border-amber-300"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Earned Certificates Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-slate-900">Earned Certificates</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAMPLE_CERTIFICATES.map((cert) => (
              <div key={cert.id} className="bg-white rounded-3xl p-6 border-2 border-amber-300 bg-gradient-to-tr from-amber-50/50 to-white shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider">ID: {cert.id}</span>
                  <h3 className="text-base font-black text-slate-900">{cert.courseTitle}</h3>
                  <p className="text-xs text-slate-600 font-semibold">Issued on: {cert.issueDate}</p>
                </div>

                <button
                  onClick={() => onViewCertificate(cert.courseId)}
                  className="px-4 py-2 text-xs font-black text-amber-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-xs transition-all flex items-center gap-1 border border-amber-500 shrink-0"
                >
                  <Award className="w-4 h-4" />
                  <span>View</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

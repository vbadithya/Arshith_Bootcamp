import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, ShieldCheck, GraduationCap, ArrowLeft, Award } from 'lucide-react';
import { LOGO_WATERMARK_BASE64 } from '../utils/pdfGenerator.js';

export default function CertificatePage({ certificate, onBack, onVerifyClick }) {
  const certificateRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  if (!certificate) return null;

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    setDownloading(true);

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#FFFFFF',
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`ArshithBootCamp_Certificate_${certificate.id}.pdf`);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="py-10 bg-[#FAFDFB] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-800 hover:text-brand-900 bg-white border-2 border-brand-900 px-4 py-2 rounded-full shadow-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onVerifyClick(certificate.id)}
              className="px-4 py-2 text-xs font-extrabold text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200 rounded-full transition-all flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verify Online</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="px-6 py-2.5 text-xs font-black text-white bg-brand-600 hover:bg-brand-700 active:scale-98 rounded-full border-2 border-brand-900 shadow-md transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Generating PDF...' : 'Download Certificate PDF'}</span>
            </button>
          </div>
        </div>

        {/* Certificate Display Card */}
        <div className="bg-slate-200 p-2 sm:p-6 rounded-3xl dark-bezel overflow-x-auto">
          <div
            ref={certificateRef}
            className="bg-white text-slate-900 p-8 sm:p-14 rounded-2xl border-[12px] border-double border-brand-900 min-w-[760px] relative overflow-hidden font-sans space-y-8 text-center"
            style={{ backgroundImage: 'radial-gradient(#0FA477 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
          >
            {/* Watermark Background Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.10] z-0 select-none">
              <img src={LOGO_WATERMARK_BASE64} alt="ARSHITH Watermark" className="w-[420px] max-w-full object-contain pointer-events-none select-none" />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 space-y-8">
            
            {/* Header Logo */}
            <div className="flex items-center justify-between border-b-2 border-brand-900 pb-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-2xl bg-brand-900 text-emerald-400 flex items-center justify-center shadow-md">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    ARSHITH <span className="text-brand-600">BOOT CAMP</span>
                  </h2>
                  <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                    Learn Today, Build Tomorrow
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Official Credential</p>
                <p className="text-xs font-black text-brand-700 font-mono">ID: {certificate.id}</p>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2 pt-2">
              <span className="px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black uppercase tracking-widest border border-amber-300">
                Official Certification
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-wider uppercase font-serif">
                Certificate of Completion
              </h1>
              <p className="text-xs text-slate-500 font-bold tracking-wide uppercase">
                This is to certify that
              </p>
            </div>

            {/* Student Name */}
            <div className="py-2 border-b-2 border-brand-600/40 max-w-md mx-auto">
              <h3 className="text-3xl sm:text-4xl font-black text-brand-900 tracking-tight italic font-serif">
                {certificate.studentName}
              </h3>
            </div>

            <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
              has successfully completed all required module reading manuals, code examples, and final course assessments for:
            </p>

            {/* Course Title */}
            <div>
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                {certificate.courseTitle}
              </h4>
              <p className="text-xs font-extrabold text-brand-700 mt-1">
                Grade Achieved: {certificate.grade || '98% Distinction'}
              </p>
            </div>

            {/* Footer Details & QR */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 items-end text-left">
              <div>
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Date of Issue</p>
                <p className="text-sm font-black text-slate-900">{certificate.issueDate}</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-1 bg-brand-50 rounded-2xl border-2 border-brand-900 p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-900 p-1 flex flex-col justify-between rounded-lg">
                    <div className="flex justify-between">
                      <div className="w-3 h-3 bg-white rounded-xs" />
                      <div className="w-3 h-3 bg-white rounded-xs" />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-3 h-3 bg-white rounded-xs" />
                      <div className="w-3 h-3 bg-emerald-400 rounded-xs" />
                    </div>
                  </div>
                </div>
                <p className="text-[9px] font-extrabold text-slate-400">Scan to Verify</p>
              </div>

              <div className="text-right">
                <div className="h-8 font-serif italic text-lg font-bold text-slate-900 border-b border-slate-300 inline-block px-4">
                  {certificate.instructorName}
                </div>
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-1">Lead Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

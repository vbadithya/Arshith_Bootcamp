import jsPDF from 'jspdf';
import { ARSHITH_LOGO_BASE64 } from './logoAsset.js';

export function generateCoursePDF(course, studentName = 'Arshith Kumar') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let y = margin;

  // Helper to add dark green headers/footers and official Arshith logo watermark
  const addHeaderFooter = (pageNumber) => {
    // Subtle official logo watermark on every page
    try {
      if (doc.saveGraphicsState) doc.saveGraphicsState();
      if (doc.setGState) doc.setGState(new doc.GState({ opacity: 0.09 }));
      const logoW = 110;
      const logoH = 44;
      doc.addImage(
        ARSHITH_LOGO_BASE64,
        'PNG',
        (pageWidth - logoW) / 2,
        (pageHeight - logoH) / 2,
        logoW,
        logoH
      );
      if (doc.restoreGraphicsState) doc.restoreGraphicsState();
    } catch (e) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(45);
      doc.setTextColor(232, 240, 236);
      doc.text("ARSHITH", pageWidth / 2, pageHeight / 2, { align: "center", angle: 45 });
    }

    // Header bar
    doc.setFillColor(0, 51, 35); // #013323 Dark Green
    doc.rect(0, 0, pageWidth, 12, 'F');
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text("ARSHITH BOOT CAMP — Official Course Manual", margin, 8);

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(course.title, pageWidth - margin, 8, { align: "right" });

    // Footer bar
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text("Learn Today, Build Tomorrow • www.arshithbootcamp.com", margin, pageHeight - 6);
    doc.text(`Page ${pageNumber}`, pageWidth - margin, pageHeight - 6, { align: "right" });
  };

  let pageCount = 1;

  // ==========================================
  // COVER PAGE
  // ==========================================
  // Dark Green Banner Background
  doc.setFillColor(1, 51, 35); // #013323
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Cover Page Watermark
  try {
    if (doc.saveGraphicsState) doc.saveGraphicsState();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(45);
    doc.setTextColor(3, 65, 46); // subtle contrast against dark green cover
    doc.text("ARSHITH GROUP", pageWidth / 2, pageHeight / 2 + 35, { align: "center", angle: 45 });
    if (doc.restoreGraphicsState) doc.restoreGraphicsState();
  } catch (e) {}

  // Decorative Accent Bar
  doc.setFillColor(15, 164, 119); // #0FA477 Mint Green
  doc.rect(margin, 40, 6, 90, 'F');

  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(255, 255, 255);
  doc.text("ARSHITH BOOT CAMP", margin + 14, 52);

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(166, 226, 205); // Mint light
  doc.text("Learn Today, Build Tomorrow", margin + 14, 62);

  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.5);
  doc.line(margin + 14, 70, pageWidth - margin, 70);

  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  const courseTitleLines = doc.splitTextToSize(`COMPLETE COURSE MANUAL:\n${course.title.toUpperCase()}`, contentWidth - 20);
  doc.text(courseTitleLines, margin + 14, 85);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(203, 213, 225);
  doc.text(`Level: ${course.level}  |  Duration: ${course.duration}  |  Total Modules: ${course.modules.length}`, margin + 14, 120);

  // Student Enrollment Card Box
  doc.setFillColor(5, 71, 49); // Dark green card
  doc.roundedRect(margin, 160, contentWidth, 50, 4, 4, 'F');

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(166, 226, 205);
  doc.text("STUDENT CREDENTIAL & ENROLLMENT", margin + 10, 172);

  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(`Student Name: ${studentName}`, margin + 10, 184);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(226, 232, 240);
  doc.text(`Issued by: Arshith Boot Camp Platform`, margin + 10, 196);
  doc.text(`Date of Export: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`, margin + 10, 204);

  // ==========================================
  // TABLE OF CONTENTS (PAGE 2)
  // ==========================================
  doc.addPage();
  pageCount++;
  addHeaderFooter(pageCount);

  y = 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(1, 51, 35);
  doc.text("Table of Contents", margin, y);

  y += 6;
  doc.setDrawColor(15, 164, 119);
  doc.setLineWidth(1);
  doc.line(margin, y, margin + 40, y);

  y += 12;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);

  course.modules.forEach((mod, idx) => {
    if (y > pageHeight - 25) {
      doc.addPage();
      pageCount++;
      addHeaderFooter(pageCount);
      y = 25;
    }

    doc.setFont("helvetica", "bold");
    doc.setTextColor(1, 51, 35);
    doc.text(`${(idx + 1).toString().padStart(2, '0')}.`, margin, y);
    doc.text(mod.title, margin + 10, y);

    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    const descLines = doc.splitTextToSize(mod.description, contentWidth - 15);
    doc.text(descLines, margin + 10, y);

    y += (descLines.length * 4) + 5;
    doc.setFontSize(10);
  });

  // ==========================================
  // MODULES CONTENT
  // ==========================================
  course.modules.forEach((mod) => {
    doc.addPage();
    pageCount++;
    addHeaderFooter(pageCount);
    y = 25;

    // Module Header Box
    doc.setFillColor(234, 248, 243); // Mint light bg
    doc.roundedRect(margin, y, contentWidth, 22, 3, 3, 'F');
    doc.setDrawColor(0, 135, 90);
    doc.roundedRect(margin, y, contentWidth, 22, 3, 3, 'S');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(1, 51, 35);
    doc.text(mod.title, margin + 6, y + 10);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    doc.text(mod.description, margin + 6, y + 17);

    y += 30;

    const rm = mod.readingMaterial;
    if (rm) {
      // 1. Introduction
      if (rm.introduction) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 135, 90);
        doc.text("1. Introduction", margin, y);
        y += 6;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        const introLines = doc.splitTextToSize(rm.introduction, contentWidth);
        doc.text(introLines, margin, y);
        y += (introLines.length * 4) + 6;
      }

      // 2. Learning Objectives
      if (rm.objectives && rm.objectives.length > 0) {
        if (y > pageHeight - 40) {
          doc.addPage();
          pageCount++;
          addHeaderFooter(pageCount);
          y = 25;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 135, 90);
        doc.text("2. Learning Objectives", margin, y);
        y += 6;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        rm.objectives.forEach((obj) => {
          const lines = doc.splitTextToSize(`• ${obj}`, contentWidth - 5);
          doc.text(lines, margin + 4, y);
          y += (lines.length * 4) + 1;
        });
        y += 4;
      }

      // 3. Code Examples
      if (rm.codeExamples && rm.codeExamples.length > 0) {
        rm.codeExamples.forEach((ex) => {
          if (y > pageHeight - 60) {
            doc.addPage();
            pageCount++;
            addHeaderFooter(pageCount);
            y = 25;
          }

          doc.setFont("helvetica", "bold");
          doc.setFontSize(10);
          doc.setTextColor(1, 51, 35);
          doc.text(`Code Example: ${ex.title}`, margin, y);
          y += 5;

          // Dark Code Box
          const codeLines = doc.splitTextToSize(ex.code, contentWidth - 12);
          const boxHeight = (codeLines.length * 3.8) + 8;

          doc.setFillColor(30, 41, 59); // Slate dark code box
          doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'F');

          doc.setFont("courier", "normal");
          doc.setFontSize(8);
          doc.setTextColor(226, 232, 240);
          doc.text(codeLines, margin + 6, y + 6);

          y += boxHeight + 4;

          if (ex.explanation) {
            doc.setFont("helvetica", "italic");
            doc.setFontSize(8.5);
            doc.setTextColor(100, 116, 139);
            const expLines = doc.splitTextToSize(`Note: ${ex.explanation}`, contentWidth);
            doc.text(expLines, margin, y);
            y += (expLines.length * 4) + 6;
          }
        });
      }

      // 4. Key Takeaways
      if (rm.keyTakeaways && rm.keyTakeaways.length > 0) {
        if (y > pageHeight - 40) {
          doc.addPage();
          pageCount++;
          addHeaderFooter(pageCount);
          y = 25;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 135, 90);
        doc.text("3. Key Takeaways", margin, y);
        y += 6;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        rm.keyTakeaways.forEach((kt) => {
          const lines = doc.splitTextToSize(`✓ ${kt}`, contentWidth - 5);
          doc.text(lines, margin + 4, y);
          y += (lines.length * 4) + 1;
        });
        y += 6;
      }

      // 5. Module Knowledge Check (MCQs)
      if (rm.mcqs && rm.mcqs.length > 0) {
        if (y > pageHeight - 50) {
          doc.addPage();
          pageCount++;
          addHeaderFooter(pageCount);
          y = 25;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 135, 90);
        doc.text("4. Module Knowledge Check (MCQs)", margin, y);
        y += 6;

        rm.mcqs.forEach((mcq, mIdx) => {
          if (y > pageHeight - 45) {
            doc.addPage();
            pageCount++;
            addHeaderFooter(pageCount);
            y = 25;
          }

          doc.setFont("helvetica", "bold");
          doc.setFontSize(9);
          doc.setTextColor(15, 23, 42);
          const qLines = doc.splitTextToSize(`Q${mIdx + 1}: ${mcq.question}`, contentWidth - 5);
          doc.text(qLines, margin, y);
          y += (qLines.length * 4) + 1;

          mcq.options.forEach((opt, optIdx) => {
            const isCorrect = optIdx === mcq.correctAnswer;
            const optLines = doc.splitTextToSize(`  ${opt}${isCorrect ? '  [CORRECT KEY]' : ''}`, contentWidth - 10);
            if (isCorrect) {
              doc.setFont("helvetica", "bold");
              doc.setTextColor(0, 135, 90);
            } else {
              doc.setFont("helvetica", "normal");
              doc.setTextColor(71, 85, 105);
            }
            doc.text(optLines, margin + 4, y);
            y += (optLines.length * 3.6);
          });

          doc.setFont("helvetica", "italic");
          doc.setFontSize(8);
          doc.setTextColor(100, 116, 139);
          const expLines = doc.splitTextToSize(`Explanation: ${mcq.explanation}`, contentWidth - 10);
          doc.text(expLines, margin + 4, y);
          y += (expLines.length * 3.5) + 3;
        });
        y += 4;
      }
    }
  });

  // ==========================================
  // FINAL MASTER CERTIFICATION EXAM
  // ==========================================
  if (course.finalTest && course.finalTest.questions && course.finalTest.questions.length > 0) {
    doc.addPage();
    pageCount++;
    addHeaderFooter(pageCount);
    y = 20;

    // Exam Title Banner
    doc.setFillColor(1, 51, 35);
    doc.roundedRect(margin, y, contentWidth, 24, 3, 3, 'F');
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text(course.finalTest.title || "MASTER CERTIFICATION EXAMINATION", margin + 8, y + 10);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(166, 226, 205);
    doc.text(`${course.finalTest.questions.length} Comprehensive Assessment Questions • Passing Score: ${course.finalTest.passingScore || 80}%`, margin + 8, y + 18);
    y += 30;

    course.finalTest.questions.forEach((q, qIdx) => {
      if (y > pageHeight - 50) {
        doc.addPage();
        pageCount++;
        addHeaderFooter(pageCount);
        y = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(1, 51, 35);
      const qTextLines = doc.splitTextToSize(`Q${qIdx + 1}. [${q.topic || 'Concept'}] ${q.questionText}`, contentWidth - 4);
      doc.text(qTextLines, margin, y);
      y += (qTextLines.length * 4.2) + 1;

      if (q.codeSnippet) {
        if (y > pageHeight - 40) {
          doc.addPage();
          pageCount++;
          addHeaderFooter(pageCount);
          y = 20;
        }
        const snippetLines = doc.splitTextToSize(q.codeSnippet, contentWidth - 12);
        const snippetHeight = (snippetLines.length * 3.5) + 6;
        doc.setFillColor(248, 250, 252);
        doc.roundedRect(margin + 2, y, contentWidth - 4, snippetHeight, 2, 2, 'F');
        doc.setFont("courier", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor(15, 23, 42);
        doc.text(snippetLines, margin + 5, y + 4);
        y += snippetHeight + 2;
      }

      q.options.forEach((opt, oIdx) => {
        if (y > pageHeight - 20) {
          doc.addPage();
          pageCount++;
          addHeaderFooter(pageCount);
          y = 20;
        }
        const optLetter = String.fromCharCode(65 + oIdx);
        const isCorrect = oIdx === q.correctAnswer;
        const optLines = doc.splitTextToSize(`(${optLetter}) ${opt} ${isCorrect ? ' [CORRECT KEY]' : ''}`, contentWidth - 10);

        doc.setFontSize(8.5);
        if (isCorrect) {
          doc.setFont("helvetica", "bold");
          doc.setTextColor(0, 135, 90);
        } else {
          doc.setFont("helvetica", "normal");
          doc.setTextColor(71, 85, 105);
        }
        doc.text(optLines, margin + 4, y);
        y += (optLines.length * 3.6);
      });

      if (y > pageHeight - 25) {
        doc.addPage();
        pageCount++;
        addHeaderFooter(pageCount);
        y = 20;
      }
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      const expLines = doc.splitTextToSize(`Explanation: ${q.explanation}`, contentWidth - 10);
      doc.text(expLines, margin + 4, y);
      y += (expLines.length * 3.5) + 4;
    });
  }

  // ==========================================
  // FINAL COMPLETION SUMMARY PAGE
  // ==========================================
  doc.addPage();
  pageCount++;
  addHeaderFooter(pageCount);
  y = 30;

  doc.setFillColor(1, 51, 35);
  doc.roundedRect(margin, y, contentWidth, 140, 4, 4, 'F');

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("COURSE COMPLETION SUMMARY", margin + 15, y + 25);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(166, 226, 205);
  doc.text("Congratulations on completing the entire curriculum!", margin + 15, y + 36);

  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.5);
  doc.line(margin + 15, y + 45, pageWidth - margin - 15, y + 45);

  doc.setFontSize(11);
  doc.setTextColor(255, 255, 255);
  doc.text(`Student Name: ${studentName}`, margin + 15, y + 60);
  doc.text(`Course Title: ${course.title}`, margin + 15, y + 70);
  doc.text(`Total Modules Completed: ${course.modules.length} / ${course.modules.length} (100%)`, margin + 15, y + 80);
  doc.text(`Credential Platform: Arshith Boot Camp`, margin + 15, y + 90);
  doc.text(`Official Tagline: Learn Today, Build Tomorrow`, margin + 15, y + 100);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 215, 0); // Gold
  doc.text("★ Verified Official Course Document ★", margin + 15, y + 120);

  // Save PDF
  const filename = `ArshithBootCamp_${course.id}_Complete_Course.pdf`;
  doc.save(filename);
}

/**
 * Generate Official Student Question Paper PDF
 */
export async function generateQuestionPaperPDF(course, paper, options = {}) {
  const { includeSolutions = true, userAnswers = {} } = options;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - (margin * 2);
  let y = 18;
  let pageCount = 1;

  const addHeaderFooter = (pageNum) => {
    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(1, 51, 35);
    doc.text("ARSHITH BOOT CAMP — OFFICIAL CERTIFICATION EXAMINATION", margin, 10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text(`PAPER: ${paper.paperCode} | SET: ${paper.studentName}`, pageWidth - margin, 10, { align: 'right' });
    
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.3);
    doc.line(margin, 12, pageWidth - margin, 12);

    // Footer
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(`Official Examination Directorate • Confidential & Authorized for ${paper.studentName}`, margin, pageHeight - 7);
    doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  addHeaderFooter(1);

  // Institution Banner
  doc.setFillColor(1, 51, 35);
  doc.roundedRect(margin, y, contentWidth, 22, 3, 3, 'F');
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text("ARSHITH BOOT CAMP EXAMINATION COUNCIL", margin + 8, y + 8);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(166, 226, 205);
  doc.text(`${course?.title || 'Master Certification'} • Official Assessment Paper Set`, margin + 8, y + 16);
  y += 28;

  // Candidate Details Hall Ticket Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 32, 2, 2, 'FD');

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("CANDIDATE INFORMATION & EXAMINATION METRICS", margin + 6, y + 7);

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);

  const col1 = margin + 6;
  const col2 = margin + 70;
  const col3 = margin + 130;

  doc.text(`Student Name: `, col1, y + 15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(1, 51, 35);
  doc.text(`${paper.studentName}`, col1 + 22, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(`Roll Number: `, col1, y + 23);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(1, 51, 35);
  doc.text(`${paper.rollNo || '2026-STD-101'}`, col1 + 22, y + 23);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(`Candidate ID: `, col2, y + 15);
  doc.setFont("helvetica", "bold");
  doc.text(`${paper.candidateId || 'ARB-STD-001'}`, col2 + 22, y + 15);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(`Paper Code: `, col2, y + 23);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(14, 116, 144);
  doc.text(`${paper.paperCode}`, col2 + 22, y + 23);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(`Time Allowed: ${paper.timeLimitMinutes || 45} Mins`, col3, y + 15);
  doc.text(`Total Marks: ${paper.totalMarks || 100}`, col3, y + 21);
  doc.text(`Passing: ${paper.passingScore || 80}%`, col3, y + 27);

  y += 38;

  // Questions Loop
  const questions = paper.questions || [];
  questions.forEach((q, qIdx) => {
    if (y > pageHeight - 50) {
      doc.addPage();
      pageCount++;
      addHeaderFooter(pageCount);
      y = 18;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(1, 51, 35);
    const qTextLines = doc.splitTextToSize(`Q${qIdx + 1}. [${q.topic || 'Concept'}] ${q.questionText}`, contentWidth - 4);
    doc.text(qTextLines, margin, y);
    y += (qTextLines.length * 4) + 1;

    if (q.codeSnippet) {
      if (y > pageHeight - 40) {
        doc.addPage();
        pageCount++;
        addHeaderFooter(pageCount);
        y = 18;
      }
      const snippetLines = doc.splitTextToSize(q.codeSnippet, contentWidth - 12);
      const snippetHeight = (snippetLines.length * 3.4) + 6;
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(margin + 2, y, contentWidth - 4, snippetHeight, 1.5, 1.5, 'F');
      doc.setFont("courier", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(15, 23, 42);
      doc.text(snippetLines, margin + 5, y + 4);
      y += snippetHeight + 2;
    }

    q.options.forEach((opt, oIdx) => {
      if (y > pageHeight - 20) {
        doc.addPage();
        pageCount++;
        addHeaderFooter(pageCount);
        y = 18;
      }
      const optLetter = String.fromCharCode(65 + oIdx);
      const isCorrect = oIdx === q.correctAnswer;
      const isUserChoice = userAnswers[q.id || qIdx] === oIdx;

      let suffix = '';
      if (includeSolutions && isCorrect) suffix = '  [CORRECT KEY]';
      if (includeSolutions && isUserChoice && !isCorrect) suffix = '  [YOUR SELECTION]';

      const optLines = doc.splitTextToSize(`(${optLetter}) ${opt}${suffix}`, contentWidth - 10);
      doc.setFontSize(8);

      if (includeSolutions && isCorrect) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(5, 150, 105);
      } else if (includeSolutions && isUserChoice && !isCorrect) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(225, 29, 72);
      } else {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(71, 85, 105);
      }

      doc.text(optLines, margin + 4, y);
      y += (optLines.length * 3.5);
    });

    if (includeSolutions && q.explanation) {
      if (y > pageHeight - 25) {
        doc.addPage();
        pageCount++;
        addHeaderFooter(pageCount);
        y = 18;
      }
      doc.setFont("helvetica", "italic");
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139);
      const expLines = doc.splitTextToSize(`Explanation: ${q.explanation}`, contentWidth - 8);
      doc.text(expLines, margin + 4, y + 1);
      y += (expLines.length * 3.2) + 2;
    }

    y += 4;
  });

  const cleanName = paper.studentName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `Question_Paper_${paper.paperCode}_${cleanName}.pdf`;
  doc.save(filename);
}


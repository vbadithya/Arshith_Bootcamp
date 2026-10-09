const fs = require('fs');
const path = require('path');
const { jsPDF } = require('./node_modules/jspdf');

const dbPath = path.join(__dirname, 'server/data/db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Test generateCoursePDF logic
function testGeneratePDF(course) {
  console.log('Testing course:', course.id, course.title);
  try {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    let y = margin;

    const addWatermark = () => {};
    const addHeaderFooter = (pageNumber) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("ARSHITH BOOT CAMP — Official Course Manual", margin, 8);
    };

    let pageCount = 1;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text("ARSHITH BOOT CAMP", margin + 14, 52);

    const courseTitleLines = doc.splitTextToSize(`COMPLETE COURSE MANUAL:\n${(course.title || '').toUpperCase()}`, contentWidth - 20);
    doc.text(courseTitleLines, margin + 14, 85);

    doc.setFontSize(11);
    doc.text(`Level: ${course.level || 'All Levels'}  |  Duration: ${course.duration || 'Self-Paced'}  |  Total Modules: ${course.modules ? course.modules.length : 0}`, margin + 14, 120);

    // TOC
    doc.addPage();
    pageCount++;
    addHeaderFooter(pageCount);

    (course.modules || []).forEach((mod, idx) => {
      if (y > pageHeight - 25) {
        doc.addPage();
        pageCount++;
        addHeaderFooter(pageCount);
        y = 25;
      }

      doc.setFont("helvetica", "bold");
      doc.text(`${(idx + 1).toString().padStart(2, '0')}.`, margin, y);
      doc.text(mod.title || 'Untitled Module', margin + 10, y);

      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      const descLines = doc.splitTextToSize(mod.description || '', contentWidth - 15);
      doc.text(descLines, margin + 10, y);

      y += (descLines.length * 4) + 5;
    });

    // Modules
    (course.modules || []).forEach((mod) => {
      doc.addPage();
      pageCount++;
      addHeaderFooter(pageCount);
      y = 25;

      doc.setFont("helvetica", "bold");
      doc.text(mod.title || 'Untitled Module', margin + 6, y + 10);
      doc.text(mod.description || '', margin + 6, y + 17);

      y += 30;
      const rm = mod.readingMaterial;
      if (rm) {
        if (rm.introduction) {
          const introLines = doc.splitTextToSize(rm.introduction, contentWidth);
          doc.text(introLines, margin, y);
          y += (introLines.length * 4) + 6;
        }

        if (rm.objectives && rm.objectives.length > 0) {
          rm.objectives.forEach((obj) => {
            const lines = doc.splitTextToSize(`• ${obj}`, contentWidth - 5);
            doc.text(lines, margin + 4, y);
            y += (lines.length * 4) + 1;
          });
        }

        if (rm.sections && rm.sections.length > 0) {
          rm.sections.forEach((sec) => {
            if (sec.heading || sec.title) {
              doc.text(sec.heading || sec.title, margin, y);
              y += 5;
            }
            if (sec.text || sec.content) {
              const textLines = doc.splitTextToSize(sec.text || sec.content, contentWidth);
              doc.text(textLines, margin, y);
              y += (textLines.length * 3.8) + 4;
            }
            if (sec.bulletPoints || sec.bullets) {
              (sec.bulletPoints || sec.bullets).forEach((bp) => {
                const bpLines = doc.splitTextToSize(`• ${bp}`, contentWidth - 4);
                doc.text(bpLines, margin + 3, y);
                y += (bpLines.length * 3.5) + 1;
              });
            }
          });
        }

        if (rm.codeExamples && rm.codeExamples.length > 0) {
          rm.codeExamples.forEach((ex) => {
            if (ex.title) doc.text(`Code Example: ${ex.title}`, margin, y);
            if (ex.code) {
              const codeLines = doc.splitTextToSize(ex.code, contentWidth - 12);
              doc.text(codeLines, margin + 6, y + 6);
            }
          });
        }
      }
    });

    console.log('PDF test SUCCESS for:', course.id);
  } catch (err) {
    console.error('PDF test FAILED for:', course.id, err);
  }
}

dbData.courses.forEach(testGeneratePDF);

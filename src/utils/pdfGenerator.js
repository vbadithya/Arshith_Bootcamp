import jsPDF from 'jspdf';

let cachedLogoDataUrl = null;

export function getLogoDataURL() {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;
  if (typeof document === 'undefined') return '';

  try {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 240;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mainColor = '#013323'; // ARSHiTH dark green

    // Font setup for serif branding
    ctx.font = 'bold 90px Georgia, "Times New Roman", serif';
    ctx.fillStyle = mainColor;
    ctx.textBaseline = 'alphabetic';

    const startX = 50;
    const baselineY = 150;

    // Draw "ARSH"
    ctx.fillText('ARSH', startX, baselineY);
    const arshWidth = ctx.measureText('ARSH').width;

    // Draw "i"
    const iX = startX + arshWidth + 4;
    ctx.fillText('i', iX, baselineY);
    const iWidth = ctx.measureText('i').width;

    // Draw "TH"
    const thX = iX + iWidth + 4;
    ctx.fillText('TH', thX, baselineY);

    // Overlapping dots above 'i'
    // Teal dot
    ctx.fillStyle = '#2B8B9E';
    ctx.beginPath();
    ctx.arc(iX + 10, baselineY - 68, 15, 0, Math.PI * 2);
    ctx.fill();

    // Magenta dot
    ctx.fillStyle = '#A82B7B';
    ctx.beginPath();
    ctx.arc(iX + 26, baselineY - 82, 15, 0, Math.PI * 2);
    ctx.fill();

    // Curved Underline Swoosh
    ctx.fillStyle = mainColor;
    ctx.beginPath();
    ctx.moveTo(startX + 120, baselineY + 28);
    ctx.quadraticCurveTo(startX + 260, baselineY + 55, startX + 440, baselineY + 22);
    ctx.quadraticCurveTo(startX + 260, baselineY + 40, startX + 120, baselineY + 28);
    ctx.closePath();
    ctx.fill();

    cachedLogoDataUrl = canvas.toDataURL('image/png');
    return cachedLogoDataUrl;
  } catch (err) {
    console.error('Failed to generate logo watermark canvas:', err);
    return '';
  }
}

export const LOGO_WATERMARK_BASE64 = typeof document !== 'undefined' ? getLogoDataURL() : '';

export function generateCoursePDF(course, studentName = 'Arshith Kumar') {
  try {
    if (!course) {
      alert("Course PDF is currently unavailable.");
      return;
    }

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

    const safeCourseTitle = String(course.title || 'Complete Course Manual');
    const safeCourseLevel = String(course.level || 'All Levels');
    const safeCourseDuration = String(course.duration || 'Self-Paced');
    const modulesList = Array.isArray(course.modules) ? course.modules : [];

    // Helper to add centered subtle Arshith logo watermark (18% opacity)
    const addWatermark = () => {
      const logoData = getLogoDataURL();
      if (!logoData) return;

      const logoWidth = 130; // mm
      const logoHeight = 52;  // mm
      const x = (pageWidth - logoWidth) / 2;
      const yPos = (pageHeight - logoHeight) / 2;

      try {
        const GStateClass = (jsPDF && jsPDF.GState) || doc.GState;
        if (GStateClass) {
          doc.setGState(new GStateClass({ opacity: 0.18 }));
        }
      } catch (e) {
        // GState optional opacity setting
      }

      try {
        doc.addImage(logoData, 'PNG', x, yPos, logoWidth, logoHeight);
      } catch (e) {
        console.error("Watermark addImage error:", e);
      }

      try {
        const GStateClass = (jsPDF && jsPDF.GState) || doc.GState;
        if (GStateClass) {
          doc.setGState(new GStateClass({ opacity: 1.0 }));
        }
      } catch (e) {
        // Reset opacity
      }
    };

    // Helper to add dark green headers/footers
    const addHeaderFooter = (pageNumber) => {
      addWatermark();

      // Header bar
      doc.setFillColor(0, 51, 35); // #013323 Dark Green
      doc.rect(0, 0, pageWidth, 12, 'F');
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(255, 255, 255);
      doc.text("ARSHITH BOOT CAMP — Official Course Manual", margin, 8);

      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text(safeCourseTitle, pageWidth - margin, 8, { align: "right" });

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
    doc.setFillColor(1, 51, 35); // #013323
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    addWatermark();

    // Decorative Accent Bar
    doc.setFillColor(15, 164, 119); // #0FA477 Mint Green
    doc.rect(margin, 40, 6, 90, 'F');

    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.setTextColor(255, 255, 255);
    doc.text("ARSHITH BOOT CAMP", margin + 14, 52);

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(166, 226, 205);
    doc.text("Learn Today, Build Tomorrow", margin + 14, 62);

    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(0.5);
    doc.line(margin + 14, 70, pageWidth - margin, 70);

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    const courseTitleLines = doc.splitTextToSize(`COMPLETE COURSE MANUAL:\n${safeCourseTitle.toUpperCase()}`, contentWidth - 20);
    doc.text(courseTitleLines, margin + 14, 85);

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(203, 213, 225);
    doc.text(`Level: ${safeCourseLevel}  |  Duration: ${safeCourseDuration}  |  Total Modules: ${modulesList.length}`, margin + 14, 120);

    // Student Enrollment Card Box
    doc.setFillColor(5, 71, 49);
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

    modulesList.forEach((mod, idx) => {
      if (y > pageHeight - 25) {
        doc.addPage();
        pageCount++;
        addHeaderFooter(pageCount);
        y = 25;
      }

      const modTitle = String(mod.title || mod.name || `Module ${idx + 1}`);
      const modDesc = String(mod.description || '');

      doc.setFont("helvetica", "bold");
      doc.setTextColor(1, 51, 35);
      doc.text(`${(idx + 1).toString().padStart(2, '0')}.`, margin, y);
      doc.text(modTitle, margin + 10, y);

      y += 5;
      if (modDesc) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        const descLines = doc.splitTextToSize(modDesc, contentWidth - 15);
        doc.text(descLines, margin + 10, y);
        y += (descLines.length * 4) + 5;
      } else {
        y += 5;
      }
      doc.setFontSize(10);
    });

    // ==========================================
    // MODULES CONTENT
    // ==========================================
    modulesList.forEach((mod, idx) => {
      doc.addPage();
      pageCount++;
      addHeaderFooter(pageCount);
      y = 25;

      const modTitle = String(mod.title || mod.name || `Module ${idx + 1}`);
      const modDesc = String(mod.description || '');

      // Module Header Box
      doc.setFillColor(234, 248, 243);
      doc.roundedRect(margin, y, contentWidth, 22, 3, 3, 'F');
      doc.setDrawColor(0, 135, 90);
      doc.roundedRect(margin, y, contentWidth, 22, 3, 3, 'S');

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(1, 51, 35);
      doc.text(modTitle, margin + 6, y + 10);

      if (modDesc) {
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(51, 65, 85);
        doc.text(modDesc, margin + 6, y + 17);
      }

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
          const introLines = doc.splitTextToSize(String(rm.introduction), contentWidth);
          doc.text(introLines, margin, y);
          y += (introLines.length * 4) + 6;
        }

        // 2. Learning Objectives
        if (Array.isArray(rm.objectives) && rm.objectives.length > 0) {
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
            const lines = doc.splitTextToSize(`• ${String(obj)}`, contentWidth - 5);
            doc.text(lines, margin + 4, y);
            y += (lines.length * 4) + 1;
          });
          y += 4;
        }

        // 3. Detailed Curriculum Sections
        const secList = Array.isArray(rm.sections) ? rm.sections : [];
        if (secList.length > 0) {
          secList.forEach((sec) => {
            if (y > pageHeight - 40) {
              doc.addPage();
              pageCount++;
              addHeaderFooter(pageCount);
              y = 25;
            }

            const secHeading = String(sec.heading || sec.title || '');
            const secText = String(sec.text || sec.content || '');
            const secBullets = Array.isArray(sec.bulletPoints) ? sec.bulletPoints : (Array.isArray(sec.bullets) ? sec.bullets : []);

            if (secHeading) {
              doc.setFont("helvetica", "bold");
              doc.setFontSize(10.5);
              doc.setTextColor(1, 51, 35);
              doc.text(secHeading, margin, y);
              y += 5;
            }

            if (secText) {
              doc.setFont("helvetica", "normal");
              doc.setFontSize(8.5);
              doc.setTextColor(51, 65, 85);
              const textLines = doc.splitTextToSize(secText, contentWidth);
              doc.text(textLines, margin, y);
              y += (textLines.length * 3.8) + 4;
            }

            if (secBullets.length > 0) {
              doc.setFont("helvetica", "normal");
              doc.setFontSize(8);
              doc.setTextColor(71, 85, 105);
              secBullets.forEach((bp) => {
                const bpLines = doc.splitTextToSize(`• ${String(bp)}`, contentWidth - 4);
                if (y > pageHeight - 20) {
                  doc.addPage();
                  pageCount++;
                  addHeaderFooter(pageCount);
                  y = 25;
                }
                doc.text(bpLines, margin + 3, y);
                y += (bpLines.length * 3.5) + 1;
              });
              y += 3;
            }
          });
        }

        // 4. Code Examples
        const codeExList = Array.isArray(rm.codeExamples) ? rm.codeExamples : [];
        if (codeExList.length > 0) {
          codeExList.forEach((ex) => {
            if (y > pageHeight - 60) {
              doc.addPage();
              pageCount++;
              addHeaderFooter(pageCount);
              y = 25;
            }

            const exTitle = String(ex.title || 'Code Example');
            const exCode = String(ex.code || '');
            const exExp = String(ex.explanation || '');

            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.setTextColor(1, 51, 35);
            doc.text(`Code Example: ${exTitle}`, margin, y);
            y += 5;

            if (exCode) {
              const codeLines = doc.splitTextToSize(exCode, contentWidth - 12);
              const boxHeight = (codeLines.length * 3.8) + 8;

              doc.setFillColor(30, 41, 59);
              doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'F');

              doc.setFont("courier", "normal");
              doc.setFontSize(8);
              doc.setTextColor(226, 232, 240);
              doc.text(codeLines, margin + 6, y + 6);

              y += boxHeight + 4;
            }

            if (exExp) {
              doc.setFont("helvetica", "italic");
              doc.setFontSize(8.5);
              doc.setTextColor(100, 116, 139);
              const expLines = doc.splitTextToSize(`Note: ${exExp}`, contentWidth);
              doc.text(expLines, margin, y);
              y += (expLines.length * 4) + 6;
            }
          });
        }

        // 5. Key Takeaways
        const ktList = Array.isArray(rm.keyTakeaways) ? rm.keyTakeaways : [];
        if (ktList.length > 0) {
          if (y > pageHeight - 40) {
            doc.addPage();
            pageCount++;
            addHeaderFooter(pageCount);
            y = 25;
          }

          doc.setFont("helvetica", "bold");
          doc.setFontSize(11);
          doc.setTextColor(0, 135, 90);
          doc.text("Key Takeaways", margin, y);
          y += 6;

          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          doc.setTextColor(51, 65, 85);
          ktList.forEach((kt) => {
            const lines = doc.splitTextToSize(`✓ ${String(kt)}`, contentWidth - 5);
            doc.text(lines, margin + 4, y);
            y += (lines.length * 4) + 1;
          });
          y += 6;
        }
      }
    });

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
    doc.text(`Course Title: ${safeCourseTitle}`, margin + 15, y + 70);
    doc.text(`Total Modules Completed: ${modulesList.length} / ${modulesList.length} (100%)`, margin + 15, y + 80);
    doc.text(`Credential Platform: Arshith Boot Camp`, margin + 15, y + 90);
    doc.text(`Official Tagline: Learn Today, Build Tomorrow`, margin + 15, y + 100);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 215, 0); // Gold
    doc.text("★ Verified Official Course Document ★", margin + 15, y + 120);

    // Save PDF with clear proper filename
    const cleanTitle = safeCourseTitle.replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `Arshith_Group_${cleanTitle}_Complete_Course.pdf`;

    // Cross-browser save trigger
    try {
      doc.save(filename);
    } catch (saveError) {
      console.warn("Direct doc.save failed, falling back to Blob download:", saveError);
      const blob = doc.output('blob');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    }
  } catch (err) {
    console.error("Error generating Course PDF:", err);
    alert("Course PDF is currently unavailable.");
  }
}

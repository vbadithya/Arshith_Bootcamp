const { jsPDF } = require('jspdf');

const dummyCourse = {
  id: 'sql-data-analysis',
  title: 'SQL & Relational Databases',
  level: 'All Levels',
  duration: '35 hours',
  modules: [
    {
      id: 'mod-1',
      title: 'Module 01 — Introduction to SQL',
      description: 'Basics of SQL and database architecture.',
      readingMaterial: {
        introduction: 'Welcome to SQL!',
        objectives: ['Learn DDL', 'Learn DML'],
        codeExamples: [
          { title: 'CREATE TABLE', code: 'CREATE TABLE users (id INT PRIMARY KEY);', explanation: 'Creates table' }
        ],
        keyTakeaways: ['SQL is essential.']
      }
    }
  ]
};

// Simulate PDF generation with watermark
const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();

const addPageWatermark = (isDarkBg = false) => {
  doc.saveGraphicsState();
  if (typeof doc.setGState === 'function') {
    doc.setGState(new doc.GState({ opacity: isDarkBg ? 0.05 : 0.07 }));
  }

  const textColor = isDarkBg ? [255, 255, 255] : [1, 51, 35];
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(...textColor);
  doc.text("ARSHiTH BOOT CAMP", pageWidth / 2, pageHeight / 2 - 8, {
    align: "center",
    angle: 35
  });

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("OFFICIAL COURSE MANUAL • VERIFIED LEARNING CONTENT", pageWidth / 2, pageHeight / 2 + 5, {
    align: "center",
    angle: 35
  });

  doc.setDrawColor(...textColor);
  doc.setLineWidth(1.2);
  const cx = pageWidth / 2;
  const cy = pageHeight / 2 + 10;
  const length = 65;
  const rad = (35 * Math.PI) / 180;
  const x1 = cx - (length / 2) * Math.cos(rad);
  const y1 = cy - (length / 2) * Math.sin(rad);
  const x2 = cx + (length / 2) * Math.cos(rad);
  const y2 = cy + (length / 2) * Math.sin(rad);
  doc.line(x1, y1, x2, y2);

  doc.restoreGraphicsState();
};

addPageWatermark(true);
doc.addPage();
addPageWatermark(false);

const output = doc.output();
console.log('PDF export with watermark generated cleanly! Size:', output.length);

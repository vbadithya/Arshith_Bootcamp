const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

try {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const addWatermark = (isDarkBg = false) => {
    const centerX = pageWidth / 2;
    const centerY = pageHeight / 2;

    doc.saveGraphicsState();

    if (isDarkBg) {
      if (typeof doc.setGState === 'function') {
        doc.setGState(new doc.GState({ opacity: 0.05 }));
      }
      doc.setTextColor(255, 255, 255);
    } else {
      if (typeof doc.setGState === 'function') {
        doc.setGState(new doc.GState({ opacity: 0.07 }));
      }
      doc.setTextColor(1, 51, 35);
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(42);
    doc.text("ARSHiTH", centerX, centerY - 5, {
      align: "center",
      angle: 35
    });

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    if (!isDarkBg) {
      doc.setTextColor(15, 164, 119);
    } else {
      doc.setTextColor(166, 226, 205);
    }
    doc.text("BOOT CAMP MANUAL", centerX, centerY + 10, {
      align: "center",
      angle: 35
    });

    doc.restoreGraphicsState();
  };

  // Page 1: Dark Cover
  doc.setFillColor(1, 51, 35);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  addWatermark(true);

  // Page 2: Light Content
  doc.addPage();
  addWatermark(false);
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text("Sample Course Page Content", 20, 30);

  const outputPath = path.join(__dirname, 'test_output.pdf');
  const pdfBuffer = doc.output('arraybuffer');
  fs.writeFileSync(outputPath, Buffer.from(pdfBuffer));
  console.log('PDF saved successfully to:', outputPath);
} catch (err) {
  console.error('Error generating PDF watermark:', err);
}

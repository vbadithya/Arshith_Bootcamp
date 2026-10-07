const { jsPDF } = require('jspdf');

try {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const addPageWatermark = (isDarkCover = false) => {
    doc.saveGraphicsState();
    try {
      if (typeof doc.setGState === 'function') {
        doc.setGState(new doc.GState({ opacity: isDarkCover ? 0.06 : 0.08 }));
      }
    } catch (e) {}

    const textColor = isDarkCover ? [255, 255, 255] : [1, 51, 35];
    doc.setFont("helvetica", "bold");
    doc.setFontSize(36);
    doc.setTextColor(...textColor);
    
    // Centered diagonal watermark text
    doc.text("ARSHiTH BOOT CAMP", pageWidth / 2, pageHeight / 2 - 8, {
      align: "center",
      angle: 35
    });

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("OFFICIAL COURSE MANUAL • VERIFIED LEARNING CONTENT", pageWidth / 2, pageHeight / 2 + 6, {
      align: "center",
      angle: 35
    });

    // Watermark underline swoosh line
    doc.setDrawColor(...textColor);
    doc.setLineWidth(1.5);
    const cx = pageWidth / 2;
    const cy = pageHeight / 2 + 12;
    const length = 60;
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

  const pdfOutput = doc.output();
  console.log('Watermarked PDF successfully generated! Length:', pdfOutput.length);
} catch (err) {
  console.error('Watermark test error:', err);
}

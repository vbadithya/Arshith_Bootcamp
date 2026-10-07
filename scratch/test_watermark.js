import jsPDF from 'jspdf';
import fs from 'fs';

try {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Test setGState & angle
  doc.saveGraphicsState();
  if (typeof doc.setGState === 'function') {
    doc.setGState(new doc.GState({ opacity: 0.08 }));
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(38);
  doc.setTextColor(1, 51, 35);
  doc.text("ARSHiTH BOOT CAMP", pageWidth / 2, pageHeight / 2, {
    align: "center",
    angle: 35
  });
  doc.restoreGraphicsState();

  const pdfOutput = doc.output();
  console.log('PDF generated successfully! Output length:', pdfOutput.length);
} catch (err) {
  console.error('Error testing jsPDF watermark:', err);
}

// When the "Download Resume" button is clicked, download your PDF file
document.addEventListener("DOMContentLoaded", function() {
  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "Sangu_resume.pdf"; // PDF file should be in the same folder
      link.download = "Sangamesh_Sanjay_Hiremath_Resume.pdf";
      link.click();
    });
  }
});

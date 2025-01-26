// JavaScript for handling PDF viewing functionality
document.addEventListener("DOMContentLoaded", function () {
  const pdfItems = document.querySelectorAll(".pdf-item");
  const pdfEmbed = document.getElementById("pdfEmbed");

  pdfItems.forEach((item) => {
    item.addEventListener("click", function () {
      const pdfFile = this.getAttribute("data-pdf");
      pdfEmbed.src = `pdfs/{pdfFile}`; // Update this path
    });
  });
});

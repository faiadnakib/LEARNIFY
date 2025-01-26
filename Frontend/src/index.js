// Slider functionality
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots-container");
let currentSlide = 0;
const totalSlides = slides.length;

// Create dot navigation for each slide
function createDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-slide", i);
    dot.addEventListener("click", () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

// Move to a specific slide
function moveToSlide(index) {
  currentSlide = index;
  updateSlider();
  updateActiveDot();
}

// Update slider display
function updateSlider() {
  const newTransformValue = `translateX(-${currentSlide * 100}%)`;
  document.querySelector(".slides").style.transform = newTransformValue;
}

// Update active dot
function updateActiveDot() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentSlide) {
      dot.classList.add("active");
    }
  });
}

// Previous slide
function prevSlide() {
  currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
  updateSlider();
  updateActiveDot();
}

// Next slide
function nextSlide() {
  currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
  updateSlider();
  updateActiveDot();
}

// Auto-slide every 2 seconds
function autoSlide() {
  setInterval(() => {
    nextSlide();
  }, 2000); // 2000ms = 2 seconds
}

// Initialize the slider
function initSlider() {
  createDots();
  updateSlider();
  updateActiveDot();
  autoSlide();
}

// Call initSlider on page load
document.addEventListener("DOMContentLoaded", initSlider);

// Event listeners for left and right arrows
document.querySelector(".arrow.left").addEventListener("click", prevSlide);
document.querySelector(".arrow.right").addEventListener("click", nextSlide);
// Add event listeners for category selection
document.getElementById("science-block").addEventListener("click", function () {
  showCategory("science");
});

document
  .getElementById("arts-crafts-block")
  .addEventListener("click", function () {
    showCategory("arts-crafts");
  });

document
  .getElementById("communication-block")
  .addEventListener("click", function () {
    showCategory("communication");
  });

// Function to show the selected category and hide others
function showCategory(category) {
  // Hide all sections
  document.getElementById("science").style.display = "none";
  document.getElementById("arts-crafts").style.display = "none";
  document.getElementById("communication").style.display = "none";

  // Show the selected category
  document.getElementById(category).style.display = "block";
}

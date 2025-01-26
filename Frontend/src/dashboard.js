// Check if the user is logged in when the page loads
window.addEventListener("DOMContentLoaded", function () {
  // Simulate checking if the user is logged in
  if (localStorage.getItem("loggedIn") === "true") {
    document.body.classList.add("logged-in");
    document.querySelector(".auth-buttons").innerHTML = `
      <a href="dashboard.html" class="profileBtn">Go to Dashboard</a>
      <a href="#" class="logoutBtn" onclick="logout()">Log Out</a>
    `;
  }
});

// Logout functionality
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html"; // Redirect back to the homepage
}

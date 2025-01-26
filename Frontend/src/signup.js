document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (validateEmail(email)) {
      alert("Sign-up successful!");
      // Add backend logic here
    } else {
      alert("Invalid email format.");
    }
  });

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\\.[^\s@]+$/;
  return emailPattern.test(email);
}

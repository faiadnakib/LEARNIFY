document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (validateEmail(email)) {
      alert("Login successful!");
      // Perform login logic here
    } else {
      alert("Invalid email format.");
    }
  });

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

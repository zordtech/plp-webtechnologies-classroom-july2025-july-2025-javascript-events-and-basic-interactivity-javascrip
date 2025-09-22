// ================================
// Part 1: Variables & Conditionals
// ================================
let clickCount = 0;
let colors = ["#f28b82", "#fbbc04", "#34a853", "#4285f4", "#9c27b0"];
let colorIndex = 0;

// ======================
// Part 2: Custom Functions
// ======================
function updateClickCounter() {
  clickCount++;
  document.getElementById("clickCount").textContent = clickCount;
}

function changeBackgroundColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
}

// =================================
// Part 3: Loops (demonstration only)
// =================================
function logColors() {
  console.log("Available Colors:");
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }

  console.log("Colors using forEach:");
  colors.forEach(color => console.log(color));
}
logColors(); // Just runs on load

// ===============================
// Part 4: DOM Interactions & Events
// ===============================

// Click counter
document.getElementById("countBtn").addEventListener("click", updateClickCounter);

// Background color changer
document.getElementById("colorBtn").addEventListener("click", changeBackgroundColor);

// ===============================
// Part 5: Custom Form Validation
// ===============================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  // Get form values
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Reset errors
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Validate username
  if (username.length < 3) {
    document.getElementById("usernameError").textContent = "Username must be at least 3 characters.";
    valid = false;
  }

  // Validate email (basic regex)
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
  }
});
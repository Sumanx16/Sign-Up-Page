document.addEventListener("DOMContentLoaded", function () {
    // Attach event listener to the form to handle submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        handleSignup();
    });
});

// Function to handle signup when button is clicked
function handleSignup() {
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate input
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Display input values (for testing)
    console.log("Full Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Sign-up successful!"); // Placeholder action
}

// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

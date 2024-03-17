document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var usernameInput = document.getElementById("uname");
        var passwordInput = document.getElementById("paswrd");
        var errorMsg = document.getElementById("error-msg");

        var username = usernameInput.value.trim();
        var password = passwordInput.value.trim();

        // Basic client-side validation
        if (username === "" || password === "") {
            errorMsg.innerText = "Please enter both username and password.";
            return; // Exit the function if validation fails
        }

        // Perform login validation (you can replace this with your own logic)
        if (username === "admin" && password === "password") {
            // Redirect to the home page if login is successful
            window.location.href = "home.html";
        } else {
            // Display error message for invalid credentials
            errorMsg.innerText = "Invalid username or password.";
        }
    });
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Redirect to home page
    window.location.href = "/home.html";
});
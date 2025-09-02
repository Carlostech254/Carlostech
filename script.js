// script.js

// Switch between Create Account and Login views
function switchToLogin() {
    document.getElementById('createAccountContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

function switchToCreateAccount() {
    document.getElementById('createAccountContainer').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none';
}

// Handle Create Account form submission
document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("createEmail").value;
    const password = document.getElementById("createPassword").value;
    const messageDiv = document.getElementById("createMessage");

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        messageDiv.textContent = "Please enter a valid email address.";
        messageDiv.style.color = "red";
        return;
    }

    // Save account data to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    messageDiv.textContent = "Account created successfully! You can now log in.";
    messageDiv.style.color = "green";
});

// Handle Login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const messageDiv = document.getElementById("loginMessage");

    // Retrieve stored user data from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        messageDiv.textContent = "Login successful! Welcome back.";
        messageDiv.style.color = "blue";
        window.location.href ="page1.html";//page1.html
    } else {
        messageDiv.textContent = "Invalid email or password. Please try again.";
        messageDiv.style.color = "red";
    }
});


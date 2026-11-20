
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginError = document.getElementById("login-error");
const loginSuccess = document.getElementById("login-success");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    if (username === "" || password === "") {
        loginSuccess.textContent = "";
        loginError.textContent = "Email and password are required!";
        return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(username)) {
    loginSuccess.textContent = "";
    loginError.textContent = "Email must use @gmail.com!";
    return;
    }

    loginError.textContent = "";
    loginSuccess.textContent = "Login successful, redirecting to XYVER";

    setTimeout(function() {
        window.location.href = "index.html";
    }, 1500);
});

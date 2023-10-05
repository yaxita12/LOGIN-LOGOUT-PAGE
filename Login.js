function showRegistrationForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function login() {
    // Implement your login logic here
    // For simplicity, we'll just show the dashboard on successful login
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function register() {
    // Implement your registration logic here
    // For simplicity, we'll just show the dashboard on successful registration
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function logout() {
    // Implement your logout logic here
    // For simplicity, we'll just hide the dashboard and show the login form
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

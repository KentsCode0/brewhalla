function simulateLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    // Reset error message
    errorElement.style.display = 'none';
    errorElement.textContent = '';

    // Simulate login process
    if (username === 'Kentharold' && password === 'Kentharold30') {
        window.location.href = 'createmenus.html';
    } else {
        errorElement.textContent = 'Incorrect username or password';
        errorElement.style.display = 'block';
    }
}

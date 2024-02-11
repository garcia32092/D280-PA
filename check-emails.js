// D1: Include JavaScript code that verifies the email fields match when a user enters a second email address
document.getElementById('contactForm').onsubmit = function(e) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var emailError = document.getElementById('emailError');

    // Check if emails match
    if (email !== confirmEmail) {
        e.preventDefault();
        emailError.style.display = 'block'; // Show the error message
    } else {
        emailError.style.display = 'none'; // Hide the error message
    }
};

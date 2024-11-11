document.getElementById("toggle").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});


function sendEmail() {
    const emailInput = document.getElementById('email-input').value;
    if (emailInput) {
        alert(`Thank you! The email "${emailInput}" has been submitted.`);
        // Here you could add functionality to actually send the email to your backend
    } else {
        alert("Please enter a valid email address.");
    }
}
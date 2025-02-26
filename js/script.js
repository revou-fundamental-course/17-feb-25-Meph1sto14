// Ini JavaScript Exsternal

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
    
    // Get values from input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    
    // Display an alert with the submitted information
    alert(`Form Submitted Successfully!\n\nName: ${name}\nEmail: ${email}\nDestination: ${interest}`);
    
    // Optional: Reset the form after submission
    this.reset();
});
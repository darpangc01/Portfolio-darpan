const yearSpan = document.getElementById("year"); // Display current year in footer
yearSpan.textContent = new Date().getFullYear();

// Mobile menu toggle button and navigation menu
const menuButton = document.getElementById("hamburger");
const navigationMenu = document.getElementById("navMenu");

// When hamburger clicked, toggle menu visibility and update accessibility attribute
menuButton.addEventListener("click", function () {
    navigationMenu.classList.toggle("active");

    // Check current state of aria-expanded and toggle it
    if (menuButton.getAttribute("aria-expanded") === "true") {
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        menuButton.setAttribute("aria-expanded", "true");
    }
});


const progressBar = document.getElementById("scrollBar");
// Update scroll progress bar width as user scrolls
window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / totalHeight) * 100;
    progressBar.style.width = scrollPercent + "%";// Set progress bar width accordingly
});

// Contact form and message display
const contactForm = document.getElementById("contactForm");
const messageDisplay = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameValue = document.getElementById("name").value.trim();// Get values and trim whitespace
    const emailValue = document.getElementById("email").value.trim();
    const messageValue = document.getElementById("message").value.trim();

    // Check if any required field is empty
    if (!nameValue || !emailValue || !messageValue) {
        messageDisplay.style.color = "red";
        messageDisplay.textContent = "Please fill in all fields!";
        return;
    }

    // If every field is filled shows the success message
    messageDisplay.style.color = "green";
    messageDisplay.textContent = "Message sent successfully!";

    // Clear the form fields after submission
    contactForm.reset();
});

// JavaScript to toggle FAQ accordion visibility
document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling; // Target the corresponding answer

        // Toggle 'display' style between none and block
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            // Hide other open items if needed
            document.querySelectorAll(".accordion-content").forEach((item) => {
                item.style.display = "none";
            });
            content.style.display = "block";
        }
    });
});

// for hamburger //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const closeBtn = document.querySelector('.close-btn'); // Close button

// Open the menu when clicking the hamburger
hamburger.addEventListener('click', function() {
    navMenu.classList.add('show');
});

// Close the menu when clicking the close button inside the menu
closeBtn.addEventListener('click', function() {
    navMenu.classList.remove('show');
});

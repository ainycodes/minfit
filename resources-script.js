
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

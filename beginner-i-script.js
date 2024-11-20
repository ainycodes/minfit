document.addEventListener("DOMContentLoaded", () => {
    // Toggle accordion content visibility
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Modal elements
    const popupModal = document.getElementById("popup-modal");
    const popupTitle = document.querySelector("#popup-modal h2");
    const popupBody = document.getElementById("popup-body");
    const closePopup = document.getElementById("close-popup");

    // Display week content in modal on click
    document.querySelectorAll(".week-link").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const weekId = link.getAttribute("data-week");
            const content = document.getElementById(`content-${weekId}`);

            if (content) {
                popupTitle.textContent = `${link.textContent} Routine`;
                popupBody.innerHTML = content.innerHTML;
                popupModal.style.display = "flex"; // Show modal
            }
        });
    });

    // Close modal
    closePopup.addEventListener("click", () => {
        popupModal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", event => {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });
});


function openTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Deactivate all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the clicked tab's content and set the link as active
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Set the first tab as active on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-link').click();
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

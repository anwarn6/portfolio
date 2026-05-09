// =====================
// Scroll to Top Button
// =====================
const scrollUp = document.querySelector(".scroll-up");
const navbar = document.querySelector(".navbar");

window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollUp.classList.add("scroll-active");
    } else {
        scrollUp.classList.remove("scroll-active");
    }

    // Efek shadow saat navbar di-scroll
    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};


// =====================
// Hamburger Menu
// =====================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
});

// Tutup menu saat link diklik (mobile)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("open");
    });
});
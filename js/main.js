/**
 * Main JavaScript - Core Initialization
 * Handles dark mode, scroll progress, smooth scrolling, and module initialization
 */

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to system preference
const currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Scroll Progress Indicator
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            const navMenu = document.querySelector('.navbar-nav');
            navMenu?.classList.remove('active');
        }
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.navbar-nav');

mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    const isOpen = navMenu?.classList.contains('active');
    mobileToggle.textContent = isOpen ? '✕' : '☰';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu?.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (mobileToggle) mobileToggle.textContent = '☰';
    }
});

// Typing Effect for Hero Text (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect on hero subtitle if exists
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle && heroSubtitle.dataset.type) {
    const originalText = heroSubtitle.textContent;
    typeWriter(heroSubtitle, originalText, 50);
}

// Console Easter Egg for Developers
console.log('%c🎮 Game Developer Portfolio', 'color: #00f2ff; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Check out the source code!', 'color: #bd00ff; font-size: 14px;');
console.log('%cBuilt with vanilla JS, CSS, and lots of ☕', 'color: #b0b0b0; font-size: 12px;');

// Prevent right-click on images (Optional - remove if you don't want this)
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', e => e.preventDefault());
// });

console.log('✅ Main.js loaded successfully');

/**
 * Animations - Scroll-triggered animations and effects
 */

// Intersection Observer for Fade-In Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            // Trigger counter animation if element has data-count attribute
            if (entry.target.dataset.count) {
                animateCounter(entry.target);
            }

            // Trigger progress bar animation if element has progress-fill class
            if (entry.target.classList.contains('progress-fill')) {
                animateProgressBar(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all elements with .hidden class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// Counter Animation for Stats
function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Progress Bar Animation
function animateProgressBar(element) {
    const targetWidth = element.dataset.progress || '0';
    setTimeout(() => {
        element.style.width = targetWidth + '%';
    }, 100);
}

// Parallax Effect for Background (Optional - Performance Intensive)
const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Stagger Animation for Grid Items
function staggerAnimation(parentSelector, childSelector, delay = 100) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;

    const children = parent.querySelectorAll(childSelector);

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll(childSelector);
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('show');
                    }, index * delay);
                });
                staggerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    staggerObserver.observe(parent);
}

// Apply stagger animations to grids
staggerAnimation('.skills-grid', '.glass-card', 100);
staggerAnimation('.project-grid', '.glass-card', 150);

// Hover Tilt Effect for Cards (3D Effect)
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 40;
        const rotateY = (centerX - x) / 40;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Text Reveal Animation
function revealText(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';

        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.animation = `fadeInChar 0.5s ease forwards ${index * 0.03}s`;
            element.appendChild(span);
        });
    });
}

// Add fadeInChar animation via CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInChar {
        to {
            opacity: 1;
            transform: translateY(0);
        }
        from {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// Smooth Fade-in for Images When Loaded
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('fade-in');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

console.log('✅ Animations.js loaded successfully');

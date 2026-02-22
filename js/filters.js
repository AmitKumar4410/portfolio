/**
 * Filters - Project filtering functionality
 */

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Filter projects based on selected category.
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter || 'all';

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        filterProjects(filterValue);
    });
});

function filterProjects(category) {
    projectCards.forEach((card, index) => {
        const cardCategory = card.dataset.category || '';
        const isVisible = category === 'all' || cardCategory === category || cardCategory.includes(category);

        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';

        setTimeout(() => {
            if (!isVisible) {
                card.style.display = 'none';
                return;
            }

            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, index * 50);
        }, 300);
    });
}

console.log('Filters.js loaded successfully');

/**
 * Filters - Project filtering functionality
 */

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Filter projects based on category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        filterProjects(filterValue);
    });
});

function filterProjects(category) {
    projectCards.forEach((card, index) => {
        const cardCategory = card.dataset.category;

        // Add exit animation
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';

        setTimeout(() => {
            if (category === 'all' || cardCategory === category || cardCategory?.includes(category)) {
                card.style.display = 'block';
                // Stagger entrance animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, index * 50);
            } else {
                card.style.display = 'none';
            }
        }, 300);
    });

    // Update count
    updateProjectCount(category);
}

function updateProjectCount(category) {
    const countElement = document.querySelector('.project-count');
    if (!countElement) return;

    let visibleCount = 0;
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'all' || cardCategory === category || cardCategory?.includes(category)) {
            visibleCount++;
        }
    });

    countElement.textContent = `Showing ${visibleCount} project${visibleCount !== 1 ? 's' : ''}`;
}

// Project Search Functionality
const searchInput = document.getElementById('project-search');

searchInput?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    projectCards.forEach(card => {
        const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.project-description')?.textContent.toLowerCase() || '';
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');

        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm);

        if (matchesSearch) {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                if (card.style.opacity === '0') {
                    card.style.display = 'none';
                }
            }, 300);
        }
    });
});

// Modal for Project Details
const projectModals = document.querySelectorAll('.project-card');
const modalOverlay = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');

projectCards.forEach(card => {
    const viewDetailsBtn = card.querySelector('.view-details');

    viewDetailsBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        openProjectModal(card);
    });
});

function openProjectModal(card) {
    if (!modalOverlay) return;

    const title = card.querySelector('.project-title')?.textContent || '';
    const description = card.querySelector('.project-description')?.textContent || '';
    const image = card.querySelector('.project-image img')?.src || '';
    const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);

    // Populate modal content
    const modalTitle = modalOverlay.querySelector('.modal-title');
    const modalDescription = modalOverlay.querySelector('.modal-description');
    const modalImage = modalOverlay.querySelector('.modal-image');
    const modalTags = modalOverlay.querySelector('.modal-tags');

    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.textContent = description;
    if (modalImage) modalImage.src = image;
    if (modalTags) {
        modalTags.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

modalClose?.addEventListener('click', closeModal);

modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
        closeModal();
    }
});

// Sort Projects
const sortSelect = document.getElementById('project-sort');

sortSelect?.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    sortProjects(sortBy);
});

function sortProjects(sortBy) {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    const cardsArray = Array.from(projectCards);

    cardsArray.sort((a, b) => {
        if (sortBy === 'name') {
            const nameA = a.querySelector('.project-title')?.textContent || '';
            const nameB = b.querySelector('.project-title')?.textContent || '';
            return nameA.localeCompare(nameB);
        } else if (sortBy === 'date') {
            const dateA = a.dataset.date || '0';
            const dateB = b.dataset.date || '0';
            return dateB.localeCompare(dateA); // Newest first
        }
        return 0;
    });

    // Re-append in sorted order
    cardsArray.forEach(card => {
        projectGrid.appendChild(card);
    });
}

console.log('✅ Filters.js loaded successfully');

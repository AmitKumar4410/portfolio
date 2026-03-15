/**
 * Contact Form - Form validation and submission handling
 */

const contactForm = document.getElementById('contact-form');
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
const successMessage = document.querySelector('.form-success');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form submission handler
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const formData = {
        name: document.getElementById('contact-name')?.value.trim(),
        email: document.getElementById('contact-email')?.value.trim(),
        subject: document.getElementById('contact-subject')?.value.trim(),
        message: document.getElementById('contact-message')?.value.trim()
    };

    // Validate form
    let isValid = true;

    if (!formData.name || formData.name.length < 2) {
        showError('contact-name', 'Please enter a valid name');
        isValid = false;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
        showError('contact-email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!formData.subject || formData.subject.length < 3) {
        showError('contact-subject', 'Please enter a subject');
        isValid = false;
    }

    if (!formData.message || formData.message.length < 10) {
        showError('contact-message', 'Message must be at least 10 characters');
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Disable submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

    try {
        // Initialize EmailJS with your Public Key
        emailjs.init("rGo2ZDTYxJFKEwF-k");

        //Send form using EmailJS
        await emailjs.sendForm('service_iv6cyb6', 'template_zx6xfje', '#contact-form');

        // Show success message
        showSuccess('Message sent successfully! I\'ll get back to you soon.');

        // Reset form
        contactForm.reset();

    } catch (error) {
        console.error('Form submission error:', error);
        showError('contact-message', 'Failed to send message. Please try again or email me directly.');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// Show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field?.nextElementSibling;

    if (field) {
        field.classList.add('error');
        if (errorElement && errorElement.classList.contains('form-error')) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
}

// Clear all errors
function clearErrors() {
    formInputs.forEach(input => {
        input.classList.remove('error');
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('form-error')) {
            errorElement.style.display = 'none';
        }
    });

    if (successMessage) {
        successMessage.classList.remove('show');
    }
}

// Show success message
function showSuccess(message) {
    if (successMessage) {
        successMessage.textContent = message;
        successMessage.classList.add('show');

        // Hide after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

// Simulate form submission (for demo)
function simulateSubmission() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
}

// Real-time validation on input
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        const value = input.value.trim();
        const fieldId = input.id;

        // Clear error when user starts fixing it
        if (input.classList.contains('error') && value) {
            input.classList.remove('error');
            const errorElement = input.nextElementSibling;
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.style.display = 'none';
            }
        }
    });

    // Add input animation
    input.addEventListener('focus', () => {
        input.parentElement?.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement?.classList.remove('focused');
        }
    });
});

// Character counter for message field
const messageField = document.getElementById('contact-message');
if (messageField) {
    const counter = document.createElement('small');
    counter.className = 'char-counter';
    counter.style.cssText = 'color: var(--text-muted); font-size: var(--font-size-xs); float: right; margin-top: 5px;';
    messageField.parentElement.appendChild(counter);

    messageField.addEventListener('input', () => {
        const length = messageField.value.length;
        counter.textContent = `${length} characters`;

        if (length >= 10) {
            counter.style.color = 'var(--neon-primary)';
        } else {
            counter.style.color = 'var(--text-muted)';
        }
    });
}

console.log('✅ Contact.js loaded successfully');

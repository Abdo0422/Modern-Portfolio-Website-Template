const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

const fadeElements = document.querySelectorAll('.hero-text, .hero-img, .about-img, .about-text, .project-card, .contact-info, .contact-form');
fadeElements.forEach(element => {
    if (!element.classList.contains('fade-in')) {
        element.style.opacity = '0';
        observer.observe(element);
    }
});

// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksAll = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // You would normally handle form submission with AJAX or a backend service
    const name = document.getElementById('name').value;
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    contactForm.reset();
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
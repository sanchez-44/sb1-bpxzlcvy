// Navigation functionality module
export function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
}

function handleNavClick(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close mobile menu if open
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenuBtn?.classList.remove('active');
        }
    }
}
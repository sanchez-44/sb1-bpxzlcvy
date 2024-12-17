// Mobile menu functionality module
export function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    // Guard clause to prevent errors if elements don't exist
    if (!mobileMenuBtn || !nav) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Add click event listener
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', handleClickOutside);

    function toggleMobileMenu(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    }

    function handleClickOutside(e) {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }
}
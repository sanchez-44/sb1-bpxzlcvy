// Import styles
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import dependencies
import AOS from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import local modules
import { initializeHeader } from './modules/header.js';
import { initializeMobileMenu } from './modules/mobileMenu.js';
import { initializeSlider } from './modules/slider.js';
import { initializeContactForm } from './modules/contactForm.js';
import { initializeNavigation } from './modules/navigation.js';
import { logger } from './utils/logger.js';

// Initialize Swiper with modules
Swiper.use([Navigation, Pagination, Autoplay]);

// Initialize modules safely
function initializeModules() {
    const modules = [
        { name: 'header', init: initializeHeader },
        { name: 'mobileMenu', init: initializeMobileMenu },
        { name: 'slider', init: initializeSlider },
        { name: 'contactForm', init: initializeContactForm },
        { name: 'navigation', init: initializeNavigation }
    ];

    modules.forEach(module => {
        try {
            module.init();
            logger.info(`${module.name} initialized successfully`);
        } catch (error) {
            logger.error(`Failed to initialize ${module.name}:`, error);
        }
    });
}

// Initialize AOS with configuration
function initializeAOS() {
    try {
        AOS.init({
            duration: 800,
            once: true,
            disable: 'mobile',
            startEvent: 'DOMContentLoaded'
        });
        logger.info('AOS initialized successfully');
    } catch (error) {
        logger.error('Failed to initialize AOS:', error);
    }
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeAOS();
    initializeModules();
});
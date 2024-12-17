import Swiper from 'swiper';
import { logger } from '../utils/logger.js';
import { getElement } from '../utils/dom.js';

export function initializeSlider() {
    const sliderContainer = getElement('.swiper-container');
    
    if (!sliderContainer) {
        logger.warn('Slider container not found, skipping initialization');
        return null;
    }

    try {
        return new Swiper(sliderContainer, {
            modules: ['navigation', 'pagination', 'autoplay'],
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    } catch (error) {
        logger.error('Failed to initialize slider:', error);
        return null;
    }
}
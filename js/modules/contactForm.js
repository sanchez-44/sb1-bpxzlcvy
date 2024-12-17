import { validateEmail, validatePhone, validateRequired } from '../utils/validation.js';
import { showNotification } from '../utils/notifications.js';
import { getElement } from '../utils/dom.js';

export function initializeContactForm() {
    const contactForm = getElement('.contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleSubmit);
    attachInputValidators(contactForm);
}

function attachInputValidators(form) {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
    });
}

function validateInput(e) {
    const input = e.target;
    const value = input.value;
    let isValid = true;

    switch (input.type) {
        case 'email':
            isValid = validateEmail(value);
            break;
        case 'tel':
            isValid = validatePhone(value);
            break;
        default:
            isValid = validateRequired(value);
    }

    toggleInputValidation(input, isValid);
}

function toggleInputValidation(input, isValid) {
    input.classList.toggle('invalid', !isValid);
    input.classList.toggle('valid', isValid);
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    
    try {
        await submitForm(formProps);
        showNotification('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', 'success');
        e.target.reset();
    } catch (error) {
        showNotification('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.', 'error');
    }
}

async function submitForm(data) {
    // Implement your form submission logic here
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}
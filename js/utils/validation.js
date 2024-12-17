// Form validation utility functions
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhone(phone) {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

export function validateRequired(value) {
    return value.trim().length > 0;
}
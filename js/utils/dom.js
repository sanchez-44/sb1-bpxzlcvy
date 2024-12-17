// DOM utility functions
export function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}

export function getElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
    }
    return element;
}

export function getElements(selector) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
        console.warn(`No elements found: ${selector}`);
    }
    return elements;
}
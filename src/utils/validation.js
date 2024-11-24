// utils/validation.js

// Validation utilities for form fields
export const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return {
        isValid: nameRegex.test(name),
        error: nameRegex.test(name) ? '' : 'Only letters are allowed'
    };
};

export const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return {
        isValid: emailRegex.test(email),
        error: emailRegex.test(email) ? '' : 'Please enter a valid email address'
    };
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return {
        isValid: passwordRegex.test(password),
        error: passwordRegex.test(password) ? '' : 'Password must include uppercase, lowercase, number and special character'
    };
};
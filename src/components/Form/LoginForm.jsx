import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { validateName, validateEmail, validatePassword } from '../../utils/validation';

const LoginForm = () => {
    const navigate = useNavigate();

    // Form state management
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        season: ''
    });

    // Error state management
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        const firstNameResult = validateName(formData.firstName);
        if (!firstNameResult.isValid) newErrors.firstName = firstNameResult.error;

        const lastNameResult = validateName(formData.lastName);
        if (!lastNameResult.isValid) newErrors.lastName = lastNameResult.error;

        const emailResult = validateEmail(formData.email);
        if (!emailResult.isValid) newErrors.email = emailResult.error;

        const passwordResult = validatePassword(formData.password);
        if (!passwordResult.isValid) newErrors.password = passwordResult.error;

        if (!formData.season) {
            newErrors.season = 'Please select your favorite season';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate('/profile', { state: formData });
        }
    };

    const seasons = ['Spring', 'Fall', 'Winter'];

    return (
        <div className="form-container">
            <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                />

                <FormInput
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />

                <FormSelect
                    label="Favorite Season"
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                    options={['Spring', 'Fall', 'Winter']}
                    error={errors.season}
                />

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default LoginForm;
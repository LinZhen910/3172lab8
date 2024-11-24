// src/components/Form/FormInput.jsx
import React from 'react';

const FormInput = ({ label, name, type = "text", value, onChange, error }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="transition-all duration-300 ease-in-out"
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default FormInput;
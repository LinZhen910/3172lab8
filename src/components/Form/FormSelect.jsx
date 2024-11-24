// src/components/Form/FormSelect.jsx
import React from 'react';

const FormSelect = ({ label, name, value, onChange, options, error }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="transition-all duration-300 ease-in-out"
            >
                <option value="">Select {label}</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default FormSelect;
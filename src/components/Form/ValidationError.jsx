import React from 'react';

const ValidationError = ({ message }) => {
    return (
        <div className="text-red-500 text-sm mb-2">
            {message}
        </div>
    );
};

export default ValidationError;
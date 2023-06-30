import React from 'react';

const inputStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        jusitfyContent: 'space-between',
        alignItems: 'center',
        margin: '10px',
        gap: '20px',
    },
    label: {
        fontSize: '16px',
        width:'200px',
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    input: {
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%',
        fontSize: '16px',
    },
};

const InputField = ({ label, value, type, onChange }) => {
    return (
        <div style={inputStyles.container}>
            <label htmlFor="input-field" style={inputStyles.label}>
                {label}:
            </label>
            <input
                type={type}
                id="input-field"
                style={inputStyles.input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;

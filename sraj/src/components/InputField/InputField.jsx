import React from 'react';

const inputStyles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // margin: '10px 0',
        gap: '20px',
        flexWrap: 'wrap',
        width: '100%',
    },
    label: {
        flexBasis: '30%',
        fontSize: '16px',
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    input: {
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        flexBasis: '70%',
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

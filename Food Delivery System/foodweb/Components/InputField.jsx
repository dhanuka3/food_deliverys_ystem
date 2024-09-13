import React from 'react';

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="animated-input"
    />
  </div>
);

export default InputField;

import React from "react";

const Dropdown = ({ name, value, options, onChange }) => {
  return (
    <div className="dropdown-container">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="dropdown-select">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

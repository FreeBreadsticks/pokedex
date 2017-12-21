import React from 'react';


const SelectInput = ({name, label, onChange, defaultOption, value, options}) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;

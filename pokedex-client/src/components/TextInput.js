import React from 'react';


const TextInput = ({name, label, onChange, value, input_type}) => {

  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type={input_type}
          name={name}
          className="form-control"
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};


export default TextInput;

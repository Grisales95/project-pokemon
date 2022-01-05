import React from 'react';
import { InputForm } from './Login.elements';

const Input = ({ name, handleInputChange, text, type, data }) => {
  return (
    <InputForm
      name={name}
      onChange={handleInputChange}
      placeholder={text}
      type={type}
      value={data}
    />
  );
};

export default Input;

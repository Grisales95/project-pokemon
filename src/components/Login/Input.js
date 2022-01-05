import React from 'react';
import { InputForm } from './Login.elements';

const Input = ({ type, text }) => {
  return <InputForm type={type} placeholder={text} />;
};

export default Input;

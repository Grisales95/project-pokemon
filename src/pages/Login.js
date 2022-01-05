import React, { useState } from 'react';
import {
  LoginContainer,
  LoginCard,
  Form,
  ButtonForm,
} from '../components/Login/Login.elements';
import pokemonLogo from '../assets/images/pokemon-logo.png';
import Input from '../components/Login/Input';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() == 0) {
      alert('que le pasa hpta!');
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <img src={pokemonLogo} width='270px' alt='pokemon-logo' />
        <Form onSubmit={handleSubmit}>
          <Input
            type='email'
            text='Your email'
            name='email'
            handleInputChange={handleInputChange}
            data={email}
          />
          <Input
            type='password'
            text='Your password'
            name='password'
            handleInputChange={handleInputChange}
            data={password}
          />
          <ButtonForm>Sign in</ButtonForm>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;

import React from 'react';
import {
  LoginContainer,
  LoginCard,
  Form,
  ButtonForm,
} from '../components/Login/Login.elements';
import pokemonLogo from '../assets/images/pokemon-logo.png';
import Input from '../components/Login/Input';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <LoginContainer>
      <LoginCard>
        <img src={pokemonLogo} width='270px' alt='pokemon-logo' />
        <Form onSubmit={handleSubmit}>
          <Input type='email' text='Insert email' />
          <Input type='password' text='Insert password' />
          <ButtonForm>Sign in</ButtonForm>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;

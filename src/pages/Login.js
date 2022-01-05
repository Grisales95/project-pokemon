import React, { useState } from "react";
import {
  LoginContainer,
  LoginCard,
  Form,
  ButtonForm,
  ErrorMsg,
} from "../components/Login/Login.elements";
import pokemonLogo from "../assets/images/pokemon-logo.png";
import Input from "../components/Login/Input";
import formValidator from "../helpers/formValidator";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    isErrorEmail: false,
    isErrorPassword: false,
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
    let formError = formValidator(formData);
    if (!formError?.isErrorFind) {
      alert("Todo bien");
      setError({
        isErrorEmail: false,
        isErrorPassword: false,
      });
      return;
    }
    alert("Todo malangas");
    setError(formError);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <img src={pokemonLogo} width="270px" alt="pokemon-logo" />
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            text="Your email"
            name="email"
            handleInputChange={handleInputChange}
            data={email}
          />
          {error.isErrorEmail && (
            <ErrorMsg>Please enter a valid email address</ErrorMsg>
          )}

          <Input
            type="password"
            text="Your password"
            name="password"
            handleInputChange={handleInputChange}
            data={password}
            error={error.isErrorPassword && true}
          />
          {error.isErrorPassword && (
            <ErrorMsg>
              password must be a minimum <br /> of 8 characters
            </ErrorMsg>
          )}
          <ButtonForm>Sign in</ButtonForm>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;

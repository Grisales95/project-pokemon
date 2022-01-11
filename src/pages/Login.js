import React, { useContext, useState } from "react";
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
import { types } from "../types/types";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
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
      dispatch({
        type: types.login,
        logged: true,
      });
      setError({
        isErrorEmail: false,
        isErrorPassword: false,
      });
      return;
    }
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
            error={error.isErrorEmail}
          />
          {error.isErrorEmail && (
            <ErrorMsg className="animate__animated animate__bounceIn">
              Please enter a valid email address
            </ErrorMsg>
          )}

          <Input
            type="password"
            text="Your password"
            name="password"
            handleInputChange={handleInputChange}
            data={password}
            error={error.isErrorPassword}
          />
          {error.isErrorPassword && (
            <ErrorMsg className="animate__animated animate__bounceIn">
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

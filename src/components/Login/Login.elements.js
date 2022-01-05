import styled from "styled-components";
import imgsRandom from "../../helpers/imgsRandom";

const random = Math.round(Math.random() * (imgsRandom.length - 1));

export const LoginContainer = styled.div`
  align-items: center;
  background-image: url(${imgsRandom[random]});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  z-index: 1;

  &::before {
    background-color: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const LoginCard = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.border};
  height: 480px;
  max-width: 400px;
  padding: 50px 10px;
  text-align: center;
  width: 400px;

  @media (max-width: 425px) {
    background-color: inherit;
    border: none;
    box-shadow: inherit;
    max-width: 300px;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0px;
`;

export const InputForm = styled.input`
  border: 10px solid ${(props) => (props.error ? "red" : "gray")};
  border-radius: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  margin: 10px;
  padding: 15px 10px;
  outline: none;
  width: 80%;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.primary};
    border: 1px solid;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const ButtonForm = styled.button`
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: ${({ theme }) => theme.border};
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin: 20px 0;
  padding: 15px 10px;
  outline: none;
  transition: background 0.5s;
  width: 80%;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  font-weigth: bold;
  margin-top: -5px;
`;

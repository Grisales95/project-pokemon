import styled from 'styled-components';
import { NavContainer } from '../Navbar/Navbar.elements';

export const HomeContainer = styled(NavContainer)``;

export const InputPokemon = styled.input`
  background: ${({ active }) => active && 'blue'};
  border: 2px solid gray;
  border-radius: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  display: block;
  margin: 30px auto;
  padding: 10px;
  outline: none;
  width: 85%;
  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonPage = styled.button`
  color: ${({ theme }) => theme.secondary};
  background: #fff;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.border};
  margin-bottom: 15px;
  padding: 10px;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: #fff;
  }
`;

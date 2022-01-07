import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* background-color: ${({ theme }) => theme.primary};
   */
  background-color: ${({ theme }) => theme.secondary};
  height: 90px;
  padding: 10px 0;
  width: 100%;
`;

export const NavContainer = styled.div`
  margin: auto;
  max-width: 80%;

  @media (max-width: 425px) {
    max-width: 90%;
  }
`;

export const NavBarStyled = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
`;
export const LinkStyled = styled(NavLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0 10px;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: yellow;
    text-decoration: underline;
  }

  &.active {
    color: yellow;
  }
`;

export const LogOut = styled.div`
  color: #fff;
  cursor: pointer;
  padding: 0 10px;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    color: yellow;
    text-decoration: underline;
  }
`;

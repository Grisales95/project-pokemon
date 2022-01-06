import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.primary};
  min-height: 50px;
  padding: 5px 0;
  width: 100%;
`;

export const HomeContainer = styled.div`
  margin: auto;
  max-width: 80%;
`;

export const NavBarStyled = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ListContainer = styled.ul`
  display: flex;
`;
export const LinkStyled = styled(NavLink)`
  color: #fff;
  cursor: pointer;
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

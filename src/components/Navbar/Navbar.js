import React, { useContext } from "react";

import pokemonLogo from "../../assets/images/pokemon-logo.png";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

import {
  HeaderStyled,
  HomeContainer,
  LinkStyled,
  ListContainer,
  LogOut,
  NavBarStyled,
} from "./Navbar.elements";
const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <>
      <HeaderStyled>
        <HomeContainer>
          <NavBarStyled>
            <img src={pokemonLogo} alt="pokemon-logo" width="120px" />
            <ListContainer>
              <LinkStyled to="/home"> Home</LinkStyled>
              <LinkStyled to="/favorites">Favorites(0)</LinkStyled>
              <LogOut
                onClick={() => {
                  dispatch({
                    type: types.logout,
                  });
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
              </LogOut>
            </ListContainer>
          </NavBarStyled>
        </HomeContainer>
      </HeaderStyled>
    </>
  );
};

export default Navbar;

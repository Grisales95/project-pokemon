import React, { useContext, useEffect } from "react";

import pokemonLogo from "../../assets/images/pokemon-logo.png";
import pikachuLogo from "../../assets/images/580b57fcd9996e24bc43c325.png";
import { types } from "../../types/types";

import {
  HeaderStyled,
  LinkStyled,
  ListContainer,
  LogOut,
  NavBarStyled,
  NavContainer,
} from "./Navbar.elements";
import { AuthContext } from "../../context/authContext";
import { FavoritesPokemonContext } from "../../context/favoritesPokemonContext";
const Navbar = () => {
  const { favoritesPokemon } = useContext(FavoritesPokemonContext);
  useEffect(() => {
    localStorage.setItem("fav-pokemons", JSON.stringify(favoritesPokemon));
  }, [favoritesPokemon]);
  const { dispatch } = useContext(AuthContext);

  return (
    <>
      <HeaderStyled>
        <NavContainer>
          <NavBarStyled>
            <img src={pokemonLogo} alt="pokemon-logo" width="180px" />
            <img
              src={pikachuLogo}
              alt="pikachu"
              width="80px"
              style={{ marginTop: "-10px" }}
            />
            <ListContainer>
              <LinkStyled to="/home"> Home</LinkStyled>
              <LinkStyled to="/favorites">
                Favorites({favoritesPokemon.length})
              </LinkStyled>
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
        </NavContainer>
      </HeaderStyled>
    </>
  );
};

export default Navbar;

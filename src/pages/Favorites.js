import React from "react";
import { useContext } from "react/cjs/react.development";
import {
  DeleteAllFavoritesButton,
  FavoritesContainer,
} from "../components/Favorites/Favorites.elements";
import {
  ListPokemon,
  PokemonCard,
} from "../components/Home/PokemonCard/PokemonCard.elements";
import PokemonItem from "../components/Home/PokemonItem/PokemonItem";
import { FavoritesPokemonContext } from "../context/favoritesPokemonContext";

const Favorites = () => {
  const { favoritesPokemon } = useContext(FavoritesPokemonContext);
  return (
    <FavoritesContainer>
      <DeleteAllFavoritesButton>Delete all Pokemons</DeleteAllFavoritesButton>
      <ListPokemon>
        {favoritesPokemon.length === 0 ? (
          <p>you don't have favorite pokemon</p>
        ) : (
          <PokemonCard>
            {favoritesPokemon.map((pokemon) => (
              <PokemonItem pokemon={pokemon} />
            ))}
          </PokemonCard>
        )}
      </ListPokemon>
    </FavoritesContainer>
  );
};

export default Favorites;

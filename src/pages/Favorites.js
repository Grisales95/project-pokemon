import React from 'react';
import { useContext } from 'react/cjs/react.development';
import {
  ButtonContainer,
  DeleteAllFavoritesButton,
  FavoritesContainer,
  NoFavoritesPokemon,
} from '../components/Favorites/Favorites.elements';
import {
  ListPokemon,
  PokemonCard,
} from '../components/Home/PokemonCard/PokemonCard.elements';
import PokemonItem from '../components/Home/PokemonItem/PokemonItem';
import { FavoritesPokemonContext } from '../context/favoritesPokemonContext';
import { types } from '../types/types';

const Favorites = () => {
  const { favoritesPokemon, dispatch } = useContext(FavoritesPokemonContext);
  return (
    <FavoritesContainer>
      <ListPokemon>
        {favoritesPokemon.length === 0 ? (
          <NoFavoritesPokemon>
            you don't have favorite pokemon...
          </NoFavoritesPokemon>
        ) : (
          <>
            <ButtonContainer>
              <DeleteAllFavoritesButton
                onClick={() =>
                  dispatch({
                    type: types.deleteAllPokemon,
                  })
                }
              >
                Delete all Pokemons
              </DeleteAllFavoritesButton>
            </ButtonContainer>
            <PokemonCard>
              {favoritesPokemon.map((pokemon) => (
                <PokemonItem pokemon={pokemon} />
              ))}
            </PokemonCard>
          </>
        )}
      </ListPokemon>
    </FavoritesContainer>
  );
};

export default Favorites;

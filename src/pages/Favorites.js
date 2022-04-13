import { useContext } from "react";
import {
  ButtonContainer,
  DeleteAllFavoritesButton,
  FavoritesContainer,
  NoFavoritesPokemon,
} from "../components/Favorites/Favorites.elements";
import { ListPokemon } from "../components/Home/PokemonCard/PokemonCard.elements";
import PokemonItem from "../components/Home/PokemonItem/PokemonItem";
import { FavoritesPokemonContext } from "../context/favoritesPokemonContext";
import { types } from "../types/types";

const Favorites = () => {
  const { favoritesPokemon, dispatch } = useContext(FavoritesPokemonContext);
  return (
    <FavoritesContainer>
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
          <ListPokemon flex={favoritesPokemon.length < 5 && true}>
            {favoritesPokemon.map((pokemon) => (
              <PokemonItem pokemon={pokemon} key={pokemon.name} />
            ))}
          </ListPokemon>
        </>
      )}
    </FavoritesContainer>
  );
};

export default Favorites;

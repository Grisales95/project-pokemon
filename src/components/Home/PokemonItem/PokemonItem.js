import {
  AddFavoriteIcon,
  LinkButton,
  PokeBallImg,
  PokemonCard,
  PokemonImg,
  PokemonName,
  PokemonOrder,
  TypePokemon,
} from '../PokemonCard/PokemonCard.elements';

import pokeball from '../../../assets/images/pokeball-logo.png';
import { useContext } from 'react/cjs/react.development';
import { colorsIconsType, colorsType } from '../../../helpers/colorsTypes';
import { FavoritesPokemonContext } from '../../../context/favoritesPokemonContext';
import { types } from '../../../types/types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PokemonItem = ({ pokemon }) => {
  const { favoritesPokemon, dispatch } = useContext(FavoritesPokemonContext);

  useEffect(() => {
    window.event.stopPropagation();
  }, []);

  if (!pokemon.types) {
    return null;
  }

  const color = colorsType[pokemon.types[0]?.type?.name];
  const color2 = colorsIconsType[[pokemon.types[0]?.type?.name]];
  const color3 = colorsIconsType[[pokemon.types[1]?.type?.name]];

  const addTottlePokemonAction = (e) => {
    e.stopPropagation();
    dispatch({
      type: types.addToggle,
      payload: pokemon,
    });
  };
  return (
    <>
      <PokemonCard
        className='animate__animated animate__fadeIn'
        background={color}
      >
        <AddFavoriteIcon
          onClick={addTottlePokemonAction}
          className={
            favoritesPokemon.length > 0
              ? favoritesPokemon.map((poke) =>
                  poke.id === pokemon.id ? 'fas fa-heart' : 'far fa-heart'
                )
              : 'far fa-heart'
          }
        ></AddFavoriteIcon>

        <div>
          <PokemonName>{pokemon.name}</PokemonName>{' '}
          {pokemon.types && (
            <>
              <TypePokemon bgColor={color2}>
                {pokemon.types[0].type.name}
              </TypePokemon>
              <br />
              {pokemon.types[1] && (
                <TypePokemon bgColor={color3}>
                  {pokemon.types[1].type.name}
                </TypePokemon>
              )}
            </>
          )}
        </div>
        <PokeBallImg src={pokeball} alt='poke-ball' />
        <PokemonOrder>#{pokemon.order}</PokemonOrder>
        {pokemon.sprites?.other.dream_world.front_default ? (
          <Link to={`/pokemon/${pokemon.name}`} target='_blank'>
            <PokemonImg
              src={pokemon.sprites?.other.dream_world.front_default}
            />
          </Link>
        ) : (
          <Link to={`/pokemon/${pokemon.name}`} target='_blank'>
            <PokemonImg src={pokemon.sprites?.front_default} />
          </Link>
        )}
      </PokemonCard>
    </>
  );
};

export default PokemonItem;

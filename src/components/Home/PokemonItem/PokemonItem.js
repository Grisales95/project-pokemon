import {
  AddFavoriteIcon,
  PokeBallImg,
  PokemonCard,
  PokemonImg,
  PokemonName,
  PokemonOrder,
  TypePokemon,
} from '../PokemonCard/PokemonCard.elements';

import pokeball from '../../../assets/images/pokeball-logo.png';
import { useState } from 'react/cjs/react.development';

const PokemonItem = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <PokemonCard className='animate__animated animate__fadeIn'>
      <AddFavoriteIcon
        onClick={() => setIsFavorite(!isFavorite)}
        className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}
      ></AddFavoriteIcon>
      <div>
        <PokemonName>{pokemon.name}</PokemonName>
        {pokemon.types && (
          <>
            <TypePokemon>{pokemon.types[0].type.name}</TypePokemon>
            <br />
            {pokemon.types[1] && (
              <TypePokemon>{pokemon.types[1].type.name}</TypePokemon>
            )}
          </>
        )}
      </div>
      <PokeBallImg src={pokeball} alt='poke-ball' />
      <PokemonOrder>#{pokemon.order}</PokemonOrder>
      <PokemonImg src={pokemon.sprites?.other.dream_world.front_default} />
    </PokemonCard>
  );
};

export default PokemonItem;

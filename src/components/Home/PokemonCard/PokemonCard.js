import { usePokemons } from '../../../hooks/usePokemons';
import PokemonItem from '../PokemonItem/PokemonItem';

const PokemonCard = ({ url }) => {
  const { isLoading, data: pokemon } = usePokemons(url);

  return (
    <>
      {isLoading && null} {pokemon && <PokemonItem pokemon={pokemon} />}
    </>
  );
};

export default PokemonCard;

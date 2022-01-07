import { usePokemons } from '../../../hooks/usePokemons';
import PokemonItem from '../PokemonItem/PokemonItem';
import { ListPokemon } from './PokemonCard.elements';

const PokemonCard = ({ url }) => {
  const { isLoading, data: pokemon } = usePokemons(url);

  return <>{pokemon && <PokemonItem pokemon={pokemon} />}</>;
};

export default PokemonCard;

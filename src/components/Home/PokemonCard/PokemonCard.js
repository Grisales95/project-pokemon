import { useEffect } from 'react';
import { usePokemons } from '../../../hooks/usePokemons';
import PokemonItem from '../PokemonItem/PokemonItem';

const PokemonCard = ({ url }) => {
  const { isLoading, data: pokemon, setData } = usePokemons(url);

  useEffect(() => {
    return () => setData({});
  }, []);

  return (
    <>
      {isLoading && null} {pokemon && <PokemonItem pokemon={pokemon} />}
    </>
  );
};

export default PokemonCard;

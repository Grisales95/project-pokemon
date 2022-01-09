import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePokemons } from '../hooks/usePokemons';
const PokemonDetails = () => {
  const [id] = useState(useParams().id);

  const { data } = usePokemons(`/pokemon/${id}`);
  return <div>{data?.name}</div>;
};

export default PokemonDetails;

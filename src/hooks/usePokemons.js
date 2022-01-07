import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/PokemonApi';
// import { fetchPokemons } from '../helpers/fetchPokemons';

export const usePokemons = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await pokemonApi.get(url);
      setData(res.data);
      setIsLoading(false);
    };
    getData();
  }, [url]);

  return {
    isLoading,
    data,
  };
};

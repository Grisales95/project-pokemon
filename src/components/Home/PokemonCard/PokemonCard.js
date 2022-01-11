import { useEffect } from "react";
import { usePokemons } from "../../../hooks/usePokemons";
import PokemonItem from "../PokemonItem/PokemonItem";

const PokemonCard = ({ url }) => {
  const { isLoading, data: pokemon } = usePokemons(url);

  useEffect(() => {
    return () => null;
  }, []);

  return (
    <>
      {isLoading && null} {pokemon && <PokemonItem pokemon={pokemon} />}
    </>
  );
};

export default PokemonCard;

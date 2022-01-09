import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  NameContainer,
  PokemonContainer,
  PokemonDetailsContainer,
  PokemonDetailsInfo,
} from "../components/PokemonDetails/PokemonDetails.elements";
import { colorsType } from "../helpers/colorsTypes";
import { usePokemons } from "../hooks/usePokemons";
const PokemonDetails = () => {
  const [id] = useState(useParams().id);
  const { data: pokemon } = usePokemons(`/pokemon/${id}`);

  if (!pokemon.types) {
    return "cargando...";
  }

  const color = colorsType[pokemon.types[0]?.type.name];

  return (
    <PokemonDetailsContainer bgColor={color}>
      <NameContainer>
        <p>#{pokemon.order}</p>
        <p>{pokemon.name}</p>
      </NameContainer>
      <PokemonContainer>
        <PokemonDetailsInfo>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </PokemonDetailsInfo>
        <div></div>
      </PokemonContainer>
    </PokemonDetailsContainer>
  );
};

export default PokemonDetails;

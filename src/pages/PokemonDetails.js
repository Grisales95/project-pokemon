import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { LoaderContainer } from "../components/Loader/loader.elemets";
import {
  IconsTypeBackground,
  IconsImg,
  NameContainer,
  NamePokemon,
  PokemonContainer,
  PokemonDetailsContainer,
  PokemonDetailsInfo,
  PokemonImageContainer,
  StatsPokemonContainer,
  Text,
  IconsTypeContainer,
  BaseStatsContainer,
  PokemonStats,
  ImgPokemon,
  PokemonAbilities,
  Abilities,
  AbilitiesContainer,
  ShinyImg,
  ShinyContainer,
  ShinyContainerImg,
  ContainerSizePokemon,
} from "../components/PokemonDetails/PokemonDetails.elements";
import { colorsIconsType, colorsType } from "../helpers/colorsTypes";
import { usePokemons } from "../hooks/usePokemons";
const PokemonDetails = () => {
  const [id] = useState(useParams().id);
  const { data: pokemon } = usePokemons(`/pokemon/${id}`);

  if (!pokemon.types) {
    return (
      <LoaderContainer>
        <TailSpin />
      </LoaderContainer>
    );
  }

  const types1 = pokemon.types[0]?.type.name;
  const types2 = pokemon.types[1]?.type.name;

  const color = colorsType[types1];
  const iconType = `../iconsType/${types1}.svg`;
  const iconType2 = `../iconsType/${types2}.svg`;

  return (
    <PokemonDetailsContainer bgColor={color}>
      <NameContainer>
        <Text>#{pokemon.order}</Text>
        <NamePokemon>{pokemon.name.toUpperCase()}</NamePokemon>
      </NameContainer>
      <PokemonContainer>
        <PokemonDetailsInfo>
          <ContainerSizePokemon>
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>
          </ContainerSizePokemon>

          <AbilitiesContainer>
            <Abilities>Abilities: </Abilities>
            {pokemon.abilities.map((poke) => (
              <PokemonAbilities
                color={colorsType[types1]}
                key={poke.ability.name}
              >
                {poke.ability.name.toUpperCase()}
              </PokemonAbilities>
            ))}
          </AbilitiesContainer>
          <ShinyContainer>
            <Text>Shiny Version:</Text>
            {pokemon.sprites.front_shiny ? (
              <ShinyContainerImg>
                <ShinyImg
                  src={pokemon.sprites.front_shiny}
                  alt={`${pokemon.name} shiny`}
                  bgColor={colorsIconsType[types1]}
                />
              </ShinyContainerImg>
            ) : (
              <Text>No shiny version</Text>
            )}
          </ShinyContainer>
        </PokemonDetailsInfo>
        <PokemonImageContainer>
          {pokemon.sprites?.other.dream_world.front_default ? (
            <ImgPokemon
              src={pokemon.sprites?.other.dream_world.front_default}
              alt={pokemon.name}
            />
          ) : (
            <ImgPokemon
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
            />
          )}
        </PokemonImageContainer>
        <StatsPokemonContainer>
          <IconsTypeContainer>
            <IconsTypeBackground bgIcon={colorsIconsType[types1]}>
              <IconsImg src={iconType} alt="pokemon-type" />
            </IconsTypeBackground>

            {types2 && (
              <IconsTypeBackground bgIcon={colorsIconsType[types2]}>
                <IconsImg src={iconType2} alt="pokemon-type" />
              </IconsTypeBackground>
            )}
          </IconsTypeContainer>
          <Text>Base stats:</Text>
          <BaseStatsContainer>
            {pokemon.stats.map((poke, index) => (
              <PokemonStats color={colorsType[types1]} key={index}>
                {poke.stat.name.toUpperCase()}: {poke.base_stat}
              </PokemonStats>
            ))}
          </BaseStatsContainer>
        </StatsPokemonContainer>
      </PokemonContainer>
    </PokemonDetailsContainer>
  );
};

export default PokemonDetails;

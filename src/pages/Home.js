import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

import {
  ButtonContainer,
  ButtonPage,
  HomeContainer,
  InputPokemon,
} from "../components/Home/Home.elements";
import PokemonCard from "../components/Home/PokemonCard/PokemonCard";
import { ListPokemon } from "../components/Home/PokemonCard/PokemonCard.elements";
import IconsType from "../components/IconsType/IconsType";
import { IconsContainer } from "../components/IconsType/IconsType.elements";
import { LoaderContainer } from "../components/Loader/loader.elemets";
import Paginator from "../components/Paginator/Paginator";
import { colorsType } from "../helpers/iconsType";

import { usePokemons } from "../hooks/usePokemons";

const Home = () => {
  const [type, setType] = useState("");
  const { isLoading, data: pokemons } = usePokemons(
    type ? `/type/${type}` : "/pokemon?limit=800"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [nameSearch, setNameSearch] = useState("");
  const [nextPageByName, setNextPageByName] = useState(10);

  const perPage = 20;
  const indexOfLastPoke = currentPage * perPage;
  const indexOfFirstPoke = indexOfLastPoke - perPage;

  const filteredPokemons = () => {
    if (pokemons) {
      if (nameSearch.length === 0) {
        return type
          ? pokemons.pokemon?.slice(indexOfFirstPoke, indexOfLastPoke)
          : pokemons.results?.slice(indexOfFirstPoke, indexOfLastPoke);
      }
      const pokemonByName =
        pokemons.results &&
        pokemons.results.filter((poke) => poke.name.includes(nameSearch));
      return pokemons.results && pokemonByName.slice(0, nextPageByName);
    }
    return;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const searchChange = ({ target }) => {
    setType("");
    setNameSearch(target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleAllPokemonIcon = () => {
    setType("");
    setCurrentPage(1);
  };
  return (
    <HomeContainer>
      {pokemons.results || pokemons.pokemon ? (
        <>
          <InputPokemon
            type="text"
            placeholder="search pokemon"
            value={nameSearch}
            onChange={searchChange}
          />
          {nameSearch.length === 0 && (
            <>
              <IconsContainer>
                <img
                  src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"
                  alt="pokeball"
                  width="40px"
                  onClick={() => handleAllPokemonIcon()}
                  style={{ cursor: "pointer", margin: "5px" }}
                />
                {colorsType.map((icon) => (
                  <IconsType
                    icon={icon}
                    setType={setType}
                    key={icon.type}
                    setCurrentPage={setCurrentPage}
                  />
                ))}
              </IconsContainer>
              <Paginator
                totalPokemons={
                  type ? pokemons?.pokemon?.length : pokemons?.results?.length
                }
                perPage={perPage}
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          )}
          <ListPokemon flex={filteredPokemons.length < 4 && true}>
            {type
              ? filteredPokemons()?.map((poke) => (
                  <PokemonCard url={poke.pokemon.url} key={poke.pokemon.name} />
                ))
              : filteredPokemons()?.map((poke) => (
                  <PokemonCard url={poke.url} key={poke.name} />
                ))}
          </ListPokemon>
          {nameSearch.length > 0 && (
            <ButtonContainer>
              <ButtonPage onClick={() => setNextPageByName(nextPageByName + 5)}>
                Show more
              </ButtonPage>
            </ButtonContainer>
          )}
        </>
      ) : (
        <LoaderContainer>
          <TailSpin />
          {isLoading && "Loading..."}
        </LoaderContainer>
      )}
    </HomeContainer>
  );
};

export default Home;

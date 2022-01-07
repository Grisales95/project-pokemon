import React, { useState } from "react";
import {
  ButtonContainer,
  ButtonPage,
  HomeContainer,
  InputPokemon,
} from "../components/Home/Home.elements";
import PokemonCard from "../components/Home/PokemonCard/PokemonCard";
import { ListPokemon } from "../components/Home/PokemonCard/PokemonCard.elements";
import { usePokemons } from "../hooks/usePokemons";

const Home = () => {
  const { isLoading, data: pokemons } = usePokemons("/pokemon?limit=750");
  const [currentPage, setCurrentPage] = useState(0);
  const [nameSearch, setNameSearch] = useState("");

  if (!pokemons.results) {
    return null;
  }

  const filteredPokemons = () => {
    if (pokemons) {
      if (nameSearch.length === 0) {
        return pokemons.results?.slice(currentPage, currentPage + 20);
      }
      const pokemonByName = pokemons.results?.filter((poke) =>
        poke.name.includes(nameSearch)
      );
      return pokemonByName.slice(currentPage, currentPage + 20);
    }
    return;
  };

  const nextPage = () => {
    if (
      pokemons.results?.filter((poke) => poke.name.includes(nameSearch))
        .length >
      currentPage + 20
    ) {
      setCurrentPage(currentPage + 20);
    }
  };

  const previousPage = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 20);
  };

  const searchChange = ({ target }) => {
    setNameSearch(target.value.toLowerCase());
    setCurrentPage(0);
  };
  return (
    <HomeContainer>
      <InputPokemon
        type="text"
        placeholder="search pokemon"
        value={nameSearch}
        onChange={searchChange}
      />

      <ButtonContainer>
        <ButtonPage onClick={() => previousPage()}>Previous</ButtonPage>
        <ButtonPage onClick={() => nextPage()}>Next</ButtonPage>
      </ButtonContainer>

      <ListPokemon>
        {filteredPokemons().map((poke) => (
          <PokemonCard url={poke.url} key={poke.name} />
        ))}
      </ListPokemon>

      {isLoading && "Cargando..."}
    </HomeContainer>
  );
};

export default Home;

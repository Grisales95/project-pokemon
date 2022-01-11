import React, { useState } from 'react';

import {
  ButtonContainer,
  ButtonPage,
  HomeContainer,
  InputPokemon,
} from '../components/Home/Home.elements';
import PokemonCard from '../components/Home/PokemonCard/PokemonCard';
import { ListPokemon } from '../components/Home/PokemonCard/PokemonCard.elements';
import Paginator from '../components/Paginator/Paginator';

import { usePokemons } from '../hooks/usePokemons';

const Home = () => {
  const { isLoading, data: pokemons } = usePokemons('/pokemon?limit=800');
  const [currentPage, setCurrentPage] = useState(1);
  const [nameSearch, setNameSearch] = useState('');
  const [nextPageByName, setNextPageByName] = useState(12);

  const perPage = 20;
  const indexOfLastPoke = currentPage * perPage;
  const indexOfFirstPoke = indexOfLastPoke - perPage;

  if (!pokemons.results) {
    return null;
  }

  const filteredPokemons = () => {
    if (pokemons) {
      if (nameSearch.length === 0) {
        return pokemons.results?.slice(indexOfFirstPoke, indexOfLastPoke);
      }
      const pokemonByName = pokemons.results?.filter((poke) =>
        poke.name.includes(nameSearch)
      );
      return pokemonByName.slice(0, nextPageByName);
    }
    return;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const searchChange = ({ target }) => {
    setNameSearch(target.value.toLowerCase());
    setCurrentPage(1);
  };

  return (
    <HomeContainer>
      <InputPokemon
        type='text'
        placeholder='search pokemon'
        value={nameSearch}
        onChange={searchChange}
      />
      {nameSearch.length === 0 && (
        <Paginator
          totalPokemons={pokemons.results.length}
          perPage={perPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
      <ListPokemon>
        {filteredPokemons().map((poke) => (
          <PokemonCard url={poke.url} key={poke.name} />
        ))}
      </ListPokemon>
      {nameSearch.length > 0 && (
        <ButtonContainer onClick={() => setNextPageByName(nextPageByName + 6)}>
          <ButtonPage>Show more</ButtonPage>
        </ButtonContainer>
      )}

      {isLoading && 'Loading...'}
    </HomeContainer>
  );
};

export default Home;

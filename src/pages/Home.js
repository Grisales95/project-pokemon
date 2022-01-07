import React from 'react';
import { HomeContainer } from '../components/Home/Home.elements';
import PokemonCard from '../components/Home/PokemonCard/PokemonCard';
import { ListPokemon } from '../components/Home/PokemonCard/PokemonCard.elements';
import { usePokemons } from '../hooks/usePokemons';

const Home = () => {
  const { isLoading, data: pokemons } = usePokemons('/pokemon?limit=20');

  return (
    <HomeContainer>
      <ListPokemon>
        {pokemons.results?.map((poke) => (
          <PokemonCard url={poke.url} key={poke.name} />
        ))}
      </ListPokemon>

      {isLoading && 'Cargando...'}
    </HomeContainer>
  );
};

export default Home;

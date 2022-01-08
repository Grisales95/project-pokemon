import { createContext, useReducer } from "react";
import { favoritesPokemonReducer } from "../store/favoritesPokemon/favoritesPokemonReducer";

const FavoritesPokemonContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("fav-pokemons")) || [];
};

const FavoritesPokemonProvider = ({ children }) => {
  const [favoritesPokemon, dispatch] = useReducer(
    favoritesPokemonReducer,
    {},
    init
  );
  return (
    <FavoritesPokemonContext.Provider value={{ favoritesPokemon, dispatch }}>
      {children}
    </FavoritesPokemonContext.Provider>
  );
};

export { FavoritesPokemonContext };
export default FavoritesPokemonProvider;

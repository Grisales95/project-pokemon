import { types } from "../../types/types";

export const favoritesPokemonReducer = (state = [], action) => {
  switch (action.type) {
    case types.addToggle:
      const repeatPokemon = state.find((poke) => poke.id === action.payload.id);
      if (repeatPokemon) {
        return state.filter((poke) => poke.id !== action.payload.id);
      }
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

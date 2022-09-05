import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";

const rootReducer = combineReducers({
  pokemonList: PokemonListReducer,
});

export default rootReducer;

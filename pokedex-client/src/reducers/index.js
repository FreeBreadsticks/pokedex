import { combineReducers } from 'redux';
import pokemons from './pokemonReducer'

const rootReducer = combineReducers({
  pokemons: pokemons
});

export default rootReducer;

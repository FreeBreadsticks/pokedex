import * as types from '../actions/actionTypes';

export default function pokemonReducer(state = [], action){
  switch (action.type) {

    case types.LOAD_POKEMON_SUCCESS:
      return action.pokemons;

    default:
      return state;
  }
}

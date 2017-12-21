import * as types from '../actions/actionTypes';

export default function pokemonReducer(state = [], action){
  switch (action.type) {

    case types.LOAD_POKEMON_SUCCESS:
      return action.pokemons;

    case types.SAVE_POKEMON_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.pokemon)
      ];

    default:
      return state;
  }
}

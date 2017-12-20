import * as types from './actionTypes';

function loadPokemonSuccess(pokemons){
  return { type: types.LOAD_POKEMON_SUCCESS, pokemons}
}
export function loadPokemon(){
  return function (dispatch){
    return fetch('http://localhost:3001/api/pokemons')
          .then(response => response.json())
          .then(pokemons => {
            dispatch(loadPokemonSuccess(pokemons));
          }).catch(error => {
            throw(error);
          });
    }
}

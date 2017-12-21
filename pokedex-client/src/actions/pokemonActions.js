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



function createPokemonSuccess(pokemon){
  return { type: types.SAVE_POKEMON_SUCCESS, pokemon }
}

export function createPokemon(pokemon){
  return function (dispatch){
    return fetch('http://localhost:3001/api/pokemons', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemon: pokemon)
    })
      .then(response => response.json())
      .then(pokemon => {
        dispatch(createPokemonSuccess(pokemon))
      }).catch(error => {
        throw(error)
      })
  }
}

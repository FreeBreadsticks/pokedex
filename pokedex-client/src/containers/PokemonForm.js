import React, {Component} from 'react';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pokemonActions from '../actions/pokemonActions';


class PokemonForm extends Component {
  constructor(props){
    super(props)

    this.state ={
      pokemon: Object.assign({}, props.pokemon),
      errors: {},
      saving: false
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    let newPokemon = Object.assign({}, this.state.pokemon, { [name]: value })
    return this.setState({ pokemon: newPokemon })
  }

  onSave = () => {
    console.log("saving");
  }


  render(){

    const allTypes = ["Bug", "Dragon", "Ice", "Fighting", "Fire", "Flying", "Grass", "Ghost", "Ground", "Electric", "Normal", "Poison", "Psychic", "Rock", "Water", "Dark", "Steel", "Fairy"]

    return (
      <div className="container">
        <form>

          <TextInput
            input_type="text"
            name="name"
            label="Name"
            value={this.state.pokemon.name}
            onChange={this.handleChange}
            error={this.state.errors.name} />

          <TextInput
            input_type="text"
            name="description"
            label="Description"
            value={this.state.pokemon.description}
            onChange={this.handleChange}
            error={this.state.errors.description} />

          <SelectInput
            name="poke_type"
            label="Pokemon Type"
            value={this.state.poke_type}
            defaultOption="Select Type"
            options={allTypes}
            onChange={this.handleChange} error={this.state.errors.poke_type} />

          <TextInput
            input_type="text"
            name="img_url"
            label="Image Link"
            value={this.state.pokemon.img_url}
            onChange={this.handleChange}
            error={this.state.errors.img_url} />

          <TextInput
            input_type="number"
            name="pokedex_num"
            label="Pokedex Number"
            value={this.state.pokemon.pokedex_num}
            onChange={this.handleChange}
            error={this.state.errors.pokedex_num} />

          <input
            type="submit"
            disable={this.state.saving.toString()}
            value={this.state.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.onSave}/>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let pokemon = {name: '', description: '', poke_type: '', img_url: '', pokedex_num: 0}

  return {
    pokemon: pokemon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
// t.string "name"
// t.string "description"
// t.string "poke_type"
// t.string "img_url"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.integer "pokedex_num"

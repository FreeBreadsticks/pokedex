import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">

            <div className="navbar-brand poke-nav"><img src="https://lh3.ggpht.com/Rgu3sVghXOhNfkRQvk_HdEGb9bgKhyHRkKItb0FuberhA1BcNJwUVyav-PNacIsIYboB=w300" alt="" /><p className="poke-nav">POKEDEX</p></div>

          <NavLink to="/" activeClassName="active" className="navbar-brand">Home</NavLink>

          <NavLink to="/pokemons" activeClassName="active" className="navbar-brand">Pokemon</NavLink>

          <NavLink to="/about" activeClassName="active" className="navbar-brand">About</NavLink>

          </div>
        </div>
      </div>
  )
}

export default Navbar;

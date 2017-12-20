import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navbar = () => {
  return (
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/pokemons" activeClassName="active">Courses</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
  )
}

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

// create classes
// var NavBar = React.createClass({
//   render: function(){
//     return(
//       <nav className="navbar navbar-inverse">
//         <div className="container-fluid">
//           <div className="navbar-header">
//             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
//               <span className="sr-only">Toggle navigation</span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//               <span className="icon-bar"></span>
//             </button>
//             <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
//           </div>
//           <div className="collapse navbar-collapse" id="navbar-collapse">
//             <NavMenu links={this.props.links} />
//           </div>
//         </div>
//       </nav>
//     );
//   }
// });

// var NavBrand = React.createClass({
//   render: function(){
//     return (
//       <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
//     );
//   }
// });
//
// var NavMenu = React.createClass({
//   render: function(){
//     var links = this.props.links.map(function(link){
//       if(link.dropdown) {
//         return (
//           <NavLinkDropdown links={link.links} text={link.text} active={link.active} />
//         );
//       }
//       else {
//         return (
//           <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
//         );
//       }
//     });
//     return (
//       <ul className="nav navbar-nav">
//         {links}
//       </ul>
//     );
//   }
// });
//
// var NavLinkDropdown = React.createClass({
//   render: function(){
//     var active = false;
//     var links = this.props.links.map(function(link){
//       if(link.active){
//         active = true;
//       }
//       return (
//         <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
//       );
//     });
//     return (
//       <li className={"dropdown " + (active ? "active" : "")}>
//         <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
//           {this.props.text}
//           <span className="caret"></span>
//         </a>
//         <ul className="dropdown-menu">
//           {links}
//         </ul>
//       </li>
//     );
//   }
// });
//
// var NavLink = React.createClass({
//   render: function(){
//     return(
//       <li className={(this.props.active ? "active" : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>
//     );
//   }
// });
//
// // set data
// var navbar = {};
// navbar.brand =
//   {linkTo: "#", text: "React Bootstrap Navbar"};
// navbar.links = [
//   {linkTo: "#", text: "Link 1"},
//   {linkTo: "#", text: "Link 2"},
//   {dropdown: true, text: "Dropdown", links: [
//     {linkTo: "#", text: "Dropdown Link 1"},
//     {linkTo: "#", text: "Dropdown Link 2", active: true}
//   ]}
// ];
//
// // render NavBar
// React.render(
//   <NavBar {...navbar} />,
//   document.getElementById("navbar")
// );

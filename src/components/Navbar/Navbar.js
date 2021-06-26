import React from "react";

import NavbarLogo from "../../assests/images/logo.svg";

import './Navbar.scss'

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={NavbarLogo} alt={NavbarLogo}></img>

        <ul className="navbar__items">
          <li className="navbar__item"><a href="#" className="navbar__links">Features</a></li>
          <li className="navbar__item"><a href="#" className="navbar__links">Pricing</a></li>
          <li className="navbar__item"><a href="#" className="navbar__links">Resources</a></li>
        </ul>
      </div>

      <div className="navbar__buttons">
        <button className="navbar__buttons--1">Login</button>
        <button className="navbar__buttons--2">Sign Up</button>
      </div>
    </div>
  );
};

export default navbar;

import React, { useRef } from "react";

import LogoSvg from "../LogoSvg/LogoSvg";
import hamburgerIcon from "../../assests/images/icon-hamburger.svg";

import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";

import "./Navbar.scss";

const Navbar = () => {
  const buttonText = "Sign Up";
  const color = "34313D";

  const sidebarRef = useRef();

  const sidebarHandler = () =>{
      sidebarRef.current.classList.toggle("show-sidebar");
  }

  return (
    <>
      <Sidebar sidebarRef={sidebarRef} />
      <div className="navbar">
        <div className="navbar__logo">
          <LogoSvg color={color} />

          <ul className="navbar__items">
            <li className="navbar__item">
              <a href="#" className="navbar__links">
                Features
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__links">
                Pricing
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__links">
                Resources
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__buttons">
          <button className="navbar__buttons-login">Login</button>
          <Button buttonText={buttonText} />
        </div>

        <div className="navbar__hamburger" onClick={sidebarHandler}>
          <img src={hamburgerIcon} alt={hamburgerIcon} />
        </div>
      </div>
    </>
  );
};

export default Navbar;

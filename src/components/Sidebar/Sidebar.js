import React from "react";

import Button from "../Button/Button";
import closeIcon from "../../assests/images/icon-close.svg";

import './Sidebar.scss';

const Sidebar = ({ sidebarRef }) => {
    const buttonText = "Sign Up";

    const closeSideBarHandler = () => {
      sidebarRef.current.classList.toggle("show-sidebar");
    }

  return (
    <aside class="sidebar" ref={sidebarRef}>
      <div class="sidebar__toggle">
        <img src={closeIcon} alt={closeIcon} onClick={closeSideBarHandler} />
      </div>

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
        <div className="navbar__buttons">
          <button className="navbar__buttons-login">Login</button>
          <Button buttonText={buttonText} />
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;

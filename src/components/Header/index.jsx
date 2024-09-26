import React from 'react';
import {NavLink} from "react-router-dom";
import MainMenu from "../MainMenu";

const Header = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__leftSide">
          <NavLink to="/"><img src="./img/logo.png" alt="Logo"/></NavLink>
          <button className="navigation__button"><img src="./img/search.svg" alt="Search"/></button>
        </div>
        <div className="navigation__rightSide">
          <div className="navigation__button buttonMenu"><img src="./img/menu.png" alt="Menu"/></div>
          <NavLink className="navigation__button buttonProfile" to="registration"><img src="./img/profile.png"
                                                                                        alt="Profile"/></NavLink>
          <NavLink to="cart" className="navigation__button buttonBasket"><img src="./img/basket.png" alt="Basket"/>
            <div className="basketCounter"></div>
          </NavLink>
        </div>
        <MainMenu />
      </div>
    </nav>
  );
};

export default Header;
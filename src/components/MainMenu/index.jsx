import React from 'react';
import {NavLink} from "react-router-dom";

const MainMenu = ({menuRef}) => {
  return (
    <div className="mainMenu" ref={menuRef}>
      <h3>MENU</h3>
      <ul className="mainMenu__firstLevel">
        <li>
          <p><a href="#">MAIN</a></p>
          <ul className="mainMenu__secondLevel">
            <li><NavLink to="#">Accessories</NavLink></li>
            <li><NavLink to="#">Bags</NavLink></li>
            <li><NavLink to="#">Denim</NavLink></li>
            <li><NavLink to="#">T-Shirts</NavLink></li>
          </ul>
        </li>
        <li>
          <p><a href="#">WOMAN</a></p>
          <ul className="mainMenu__secondLevel">
            <li><NavLink to="#">Accessories</NavLink></li>
            <li><NavLink to="#">Jackets & Coats</NavLink></li>
            <li><NavLink to="#">Polos</NavLink></li>
            <li><NavLink to="#">T-Shirts</NavLink></li>
            <li><NavLink to="#">Shirts</NavLink></li>
          </ul>
        </li>
        <li>
          <p><a href="#">KIDS</a></p>
          <ul className="mainMenu__secondLevel">
            <li><NavLink to="#">Accessories</NavLink></li>
            <li><NavLink to="#">Jackets & Coats</NavLink></li>
            <li><NavLink to="#">Polos</NavLink></li>
            <li><NavLink to="#">T-Shirts</NavLink></li>
            <li><NavLink to="#">Shirts</NavLink></li>
            <li><NavLink to="#">Bags</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
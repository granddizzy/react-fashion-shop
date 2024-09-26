import React from 'react';

const Header = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__leftSide">
          <a href="index.html"><img src="./img/logo.png" alt="Logo"/></a>
          <button className="navigation__button"><img src="./img/search.svg" alt="Search"/></button>
        </div>
        <div className="navigation__rightSide">
          <div className="navigation__button buttonMenu"><img src="./img/menu.png" alt="Menu"/></div>
          <a className="navigation__button buttonProfile" href="registration.html"><img src="./img/profile.png"
                                                                                        alt="Profile"/></a>
          <a href="cart.html" className="navigation__button buttonBasket"><img src="./img/basket.png" alt="Basket"/>
            <div className="basketCounter"></div>
          </a>
        </div>
        <div className="mainMenu">
          <h3>MENU</h3>
          <ul className="mainMenu__firstLevel">
            <li>
              <p><a href="#">MAIN</a></p>
              <ul className="mainMenu__secondLevel">
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">T-Shirts</a></li>
              </ul>
            </li>
            <li>
              <p><a href="#">WOMAN</a></p>
              <ul className="mainMenu__secondLevel">
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Jackets & Coats</a></li>
                <li><a href="#">Polos</a></li>
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Shirts</a></li>
              </ul>
            </li>
            <li>
              <p><a href="#">KIDS</a></p>
              <ul className="mainMenu__secondLevel">
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Jackets & Coats</a></li>
                <li><a href="#">Polos</a></li>
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Bags</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
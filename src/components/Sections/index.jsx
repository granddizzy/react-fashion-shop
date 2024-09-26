import React from 'react';

const Sections = () => {
  return (
    <nav className="storeSections container">
      <div className="storeSections__item storeItem storeSections__item_forWoman">
        <a href="catalog.html">
          <div className="storeItem__fill">
            <span className="storeItem__text1">30% OFF</span><span className="storeItem__text2">FOR WOMEN</span>
          </div>
        </a>
      </div>
      <div className="storeSections__item storeItem storeSections__item_forMen">
        <a href="catalog.html">
          <div className="storeItem__fill">
            <span className="storeItem__text1">HOT DEAL</span><span className="storeItem__text2">FOR MEN</span>
          </div>
        </a>
      </div>
      <div className="storeSections_item storeItem storeSections__item_forKids">
        <a href="catalog.html">
          <div className="storeItem__fill">
            <span className="storeItem__text1">NEW ARRIVALS</span><span className="storeItem__text2">FOR KIDS</span>
          </div>
        </a>
      </div>
      <div className="storeSections__item storeItem storeSections__item_accesories">
        <a href="catalog.html">
          <div className="storeItem__fill">
            <span className="storeItem__text1">LUXIROUS & TRENDY</span><span
            className="storeItem__text2">ACCESORIES</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Sections;
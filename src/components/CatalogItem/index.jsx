import React from 'react';

const CatalogItem = ({item}) => {
  return (
    <div className="catalogItems__item catalogItem" data-id={item.id}>
      <div className="catalogItem__photo">
        <img src={item.src} alt="Fetured item"/>
        <div className="catalogItem__fill">
          <div className="catalogItem__button">
            <img src="./img/basket.svg" alt="Add to cart"/>
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
      <div className="catalogItem__text">
        <h3 className="catalogItem__title"></h3>
        <p className="catalogItem__description"></p>
        <p className="catalogItem__price"></p>
      </div>
    </div>
  );
};

export default CatalogItem;
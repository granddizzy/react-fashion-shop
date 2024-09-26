import React from 'react';

const Fetured = () => {
  return (
    <section className="feturedItems container">
      <h1>Fetured Items</h1>
      <p className="description">Shop for items based on what we featured in this week</p>
      <div className="catalogItems">
        <template id="templateFeturedItem">
          <div className="catalogItems__item catalogItem" data-id="">
            <div className="catalogItem__photo">
              <img src="" alt="Fetured item"/>
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
        </template>
      </div>
      <div className="feturedItems__buttons">
        <button id="catalogButton" className="feturedItems__allButton">Browse All Product</button>
      </div>
    </section>
  );
};

export default Fetured;
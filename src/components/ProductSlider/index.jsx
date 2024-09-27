import React from 'react';

const ProductSlider = ({product}) => {
  return (
    <div className="productSlider">
      <div className="bigContainer">
        <div className="carousel-control-prev1 productSlider__button" data-bs-target="#carouselExampleIndicators"
             data-bs-slide="prev">
          <img src="./img/sliderLeftButton.svg" alt=""/>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={product.photo} className="d-block" alt=""/>
            </div>
          </div>
        </div>
        <div className="carousel-control-next1 productSlider__button"
             data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <img src="./img/sliderRightButton.svg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
import React from 'react';
import {addProduct, delProduct} from "../../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const CatalogItem = ({item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.items);

  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

  const toggleCartItem = (item) => {
    if (isInCart) {
      dispatch(delProduct(item));
    } else {
      dispatch(addProduct(item));
    }
  }

  return (
    <div className="catalogItems__item catalogItem" data-id={item.id}>
      <div className="catalogItem__photo">
        <img src={item.photo} alt="Fetured item"/>
        <div className="catalogItem__fill">
          <div onClick={() => toggleCartItem(item)} className="catalogItem__button">
            <img src="./img/basket.svg" alt="Add to cart"/>
            <p>{isInCart ? "Remove" : "Add to Cart"}</p>
          </div>
        </div>
      </div>
      <div className="catalogItem__text">
        <h3 className="catalogItem__title">{item.title}</h3>
        <p className="catalogItem__description">{item.description}</p>
        <p className="catalogItem__price">{item.price}</p>
      </div>
    </div>
  );
};

export default CatalogItem;
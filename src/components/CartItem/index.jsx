import React from 'react';
import {addProduct, delProduct} from "../../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const CatalogItem = ({item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.items);

  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

  const removeCartItem = (item) => {
    if (isInCart) {
      dispatch(delProduct(item));
    } else {
      dispatch(addProduct(item));
    }
  }

  return (
    <div className="shoppingCart__item shoppingItem">
      <div className="shoppingItem__wrap">
        <img src={item.photo} alt=""/>
        <div className="shoppingItem__rightSide">
          <div className="shoppingItem__rightSideContent">
            <h1>{item.title}</h1>
            <p>Price: <span className="shoppingItem__price">{item.price}</span></p>
            <p>Color: <span className="shoppingItem__color">item.color</span></p>
            <p>Size: <span className="shoppingItem__size">{item.size}</span></p>
            <p>
              <label>
                Quantity:
                <input className="shoppingItem__quantity" name="quantity" placeholder="" type="number"/>
              </label>
            </p>
          </div>
        </div>
      </div>
      <img onClick={()=>removeCartItem(item)} src="./img/cartCrossButton.svg" className="shoppingItem__crossButton" alt=""/>
    </div>
  );
};

export default CatalogItem;
import React from 'react';
import {addProduct, delProduct} from "../../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from '../../redux/cartSlice';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const {items} = useSelector((state) => state.cartItems);

  const cartItem = items.find((cartItem) => cartItem.id === item.id);

  const removeCartItem = (item) => {
    if (cartItem) {
      dispatch(delProduct(item));
    } else {
      dispatch(addProduct(item));
    }
  }

  const handleChangeCount = (e) => {
    const newCount = e.target.value;

    if (newCount > 0 && newCount <= 99) {
      const updatedCartItem = {
        ...cartItem,
        count: e.target.value
      };
      dispatch(setCount(updatedCartItem));
    }
  }

  return (
    <div className="shoppingCart__item shoppingItem">
      <div className="shoppingItem__wrap">
        {item.photos && item.photos.length > 0 && (
          <img src={item.photos[0]} alt=""/>
        )}
        <div className="shoppingItem__rightSide">
          <div className="shoppingItem__rightSideContent">
            <h1>{item.title}</h1>
            <p>Price: <span className="shoppingItem__price">{item.price.toFixed(2)}</span></p>
            <p>Color: <span className="shoppingItem__color">item.color</span></p>
            <p>Size: <span className="shoppingItem__size">{item.size}</span></p>
            <p>
              <label>
                Quantity:
                <input onChange={handleChangeCount} value={cartItem.count} className="shoppingItem__quantity"
                       name="quantity" placeholder="" type="number"/>
              </label>
            </p>
          </div>
        </div>
      </div>
      <img onClick={() => removeCartItem(item)} src="/img/cartCrossButton.svg" className="shoppingItem__crossButton"
           alt=""/>
    </div>
  );
};

export default CartItem;
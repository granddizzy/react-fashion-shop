import React from 'react';
import {delProduct} from "../../redux/cartSlice";
import {useDispatch} from "react-redux";
import {updateSelectedData} from '../../redux/cartSlice';
import {NavLink} from "react-router-dom";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeCartItem = (item) => {
    dispatch(delProduct(item));
  }

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    const updatedCartItem = {
      ...item,
      selectedColor: newColor
    };
    dispatch(updateSelectedData(updatedCartItem));
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    const updatedCartItem = {
      ...item,
      selectedSize: newSize
    };
    dispatch(updateSelectedData(updatedCartItem));
  };

  const handleChangeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0 && newQuantity <= 99) {
      const updatedCartItem = {
        ...item,
        selectedQuantity: newQuantity
      };
      dispatch(updateSelectedData(updatedCartItem));
    }
  }

  return (
    <div className="shoppingCart__item shoppingItem">
      <div className="shoppingItem__wrap">
        <NavLink to={`/catalog/${item.id}`}>
          {item.photos && item.photos.length > 0 && (
            <img src={item.photos[0]} alt=""/>
          )}
        </NavLink>
        <div className="shoppingItem__rightSide">
          <div className="shoppingItem__rightSideContent">
            <h1>{item.title}</h1>
            <p>Price: <span className="shoppingItem__price">{item.price.toFixed(2)}</span></p>

            <p>
              Color:
              <select
                className="shoppingItem__colorSelect"
                value={item.selectedColor}
                onChange={handleColorChange}
              >
                {item.colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </p>

            <p>
              Size:
              <select
                className="shoppingItem__sizeSelect"
                value={item.selectedSize}
                onChange={handleSizeChange}
              >
                {item.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </p>

            <p>
              <label>
                Quantity:
                <input onChange={handleChangeQuantity} value={item.selectedQuantity} className="shoppingItem__quantitySelect"
                       name="quantity" placeholder="" type="number" min="1"
                       step="1"/>
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
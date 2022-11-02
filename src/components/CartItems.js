import React from "react";
import style from './CartItems.module.css';

const CartItems = ({ name, price, image, quantity, handleRemoveClick, id, dispatch }) => {



  return (
    <div className= {style.Item}>
      <div>
        <img src={image} alt="item" />
      </div>
      <div>
        <strong className={style.name}>{name}</strong>
        <p>
          <small className={style.price}>Php {price}</small>
        </p>
        <p>
          <button className={style.add}>+</button>
          <small className={style.quantity}>Quantity {quantity}</small>
          <button className={style.minus}>-</button>
        </p>
        <p>
          <small>Subtotal: Php {price * quantity}</small>
        </p>
        <button onClick={() => handleRemoveClick(id)}>Remove Item</button>
      </div>
    </div>
  );
};

export default CartItems;

import React from "react";
import style from './ItemBox.module.css';

const ItemBox = ({
  id,
  name,
  price,
  image,
  orderClick,
  deleteClick,
  showEditItemForm,
  editItem,
  dispatch,
}) => {
  return (
    <div className={style.Item}>
      <div>

        <p className={style.parent}>
        <br />
          {editItem ? (
            ""
          ) : (
            <button className={style.edit} onClick={() => showEditItemForm(true, id)}>Edit</button>
          )}
          <br />
          {/* <button className={style.delete} onClick={() => dispatch({type:"HANDLE_DELETE", payload: {id:id}})}>X</button> */}
          <button className={style.delete} onClick={() => deleteClick(id)}>X</button>
        
        </p>

        <img src={image} alt="item" />
      </div>
      <div>
        <strong>{name}</strong>
        <p>
          <small>Php {price}</small>
        </p>
        <p>
          <button className={style.orderButton} onClick={() => orderClick(id)}>Order</button>
        </p>
      </div>
    </div>
  );
};

export default ItemBox;

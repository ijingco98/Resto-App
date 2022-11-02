import React from "react";
import FilterCartItem from "../components/FilterCartItem";
import NewItem from "../components/NewItem";
import EditItemForm from "../components/EditItemForm";

export default function Shop({
  filterCategory,
  categories,
  listItems,
  cartTotal,
  listCartItems,
  newItem,
  editItem,
  addItem,
  showAddItemForm,
  hideNewItemForm,
  editItemDetail,
  saveChanges,
  hideEditItemForm
}) {
  return (
    <div>
      {newItem ? (
        <NewItem submit={addItem} hideNewItemForm={hideNewItemForm} />
      ) : (
        <button onClick={showAddItemForm}>Add Item</button>
      )}
      {editItem ? (
        <EditItemForm
          details={editItemDetail}
          saveChanges={saveChanges}
          hideEditItemForm={hideEditItemForm}
        />
      ) : (
        ""
      )}
      <div>
        <FilterCartItem
          filterCategory={filterCategory}
          categories={categories}
        />
      </div>
      <br />
      <div className="ItemList">{listItems}</div>
      <h1>Cart Total Amount: {cartTotal}</h1>
      <div className="ItemList">{listCartItems}</div>
    </div>
  );
}

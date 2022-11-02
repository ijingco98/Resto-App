import "./App.css";
import React, { useState, useReducer } from "react";
import ItemBox from "./components/ItemBox";
import FilterCartItem from "./components/FilterCartItem";
import NewItem from "./components/NewItem";
import { v4 as uuidv4 } from "uuid";
import EditItemForm from "./components/EditItemForm";
import CartItems from "./components/CartItems";

import style from './nav/Home.module.css';
import About from "./nav/About";
import Shop from "./nav/Shop";
import Nav from "./nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/////initial states for the useReducer/////

const initialState= {
  items: [
    {
      id: uuidv4(),
      name: "Burger",
      price: 50,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/198/198416.png",
    },
    {
      id: uuidv4(),
      name: "Iced Tea",
      price: 45,
      category: "Drink",
      image: "https://cdn-icons-png.flaticon.com/512/1187/1187466.png",
    },
    {
      id: uuidv4(),
      name: "Pizza",
      price: 100,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    },
    {
      id: uuidv4(),
      name: "Fries",
      price: 25,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/123/123300.png",
    },
    {
      id: uuidv4(),
      name: "Coffee",
      price: 45,
      category: "Drink",
      image: "https://cdn-icons-png.flaticon.com/512/3127/3127450.png",
    },
  ],
  editItemDetail:[],
  newItem:false,
  editItem:false,
  category:"",
  cartItem:[],
  cartTotal: 0,
}

const reducer = (state, action) => {
switch(action.type) {

  case "SET_CATEGORY":
  return{ ...state, category: action.payload.name
    }
    default: 
  return {
      ...state
    }

  case "HANDLE_DELETE":
    const deleteList = state.items.filter((item) => item.id !== action.payload.id)
    const deleteListB = state.cartItem.filter((item) => item.id !== action.payload.id)
  return {...state, Items: deleteList, CartItems: deleteListB}
  
  // case "INCREMENT":
  //   const checkCartIdInc = state.cart.filter((item)=> item.id === action.payload.id) 
  //     if(checkCartIdInc.length > 0){
  //   const updatedCartQty = state.cart.map((item) => {
  //         if(item.id === action.payload.id) {
  // return {...item, qty: item.qty+1}
  //         } return item;
  //       })
  //       return {...state, cart: updatedCartQty}
  //     }
  // case "DECREMENT":
  //   const checkCartIdDec = state.cart.filter((item)=> item.id === action.payload.id) 
  //   let deleteFlag = false
  //   const cartCheck = checkCartIdDec[0]
  //     if(checkCartIdDec.length > 0){
  //       let updatedCartQty = state.cart.map((item) => {
  //         if(item.id === action.payload.id) {
  //           if(item.qty - 1 > 0){
  //             return {...item, qty: item.qty-1}
  //           }
  //           deleteFlag = true
  //         } 
  //         return item;
  //       })
  //       if(deleteFlag === true) {
  //         updatedCartQty = updatedCartQty.filter((item) => item.id !== action.payload.id)
  //       }
  //       return {...state, cart: updatedCartQty }
  //     }


}
};

const App = () => {
const [state, dispatch] = useReducer(reducer, initialState);

const getTotal = (cart) => {
  let sum = 0;
  cart.forEach((item) => {
    sum += item.quantity * item.price;
  });
  setCartTotal(sum);
};

const handleDeleteClick = (id) => {
  //filter
  const newItems = items.filter((item) => item.id !== id);
  const deleteListB = cartItem.filter((item) => item.id !== id);
  setItems(newItems);
  getTotal(deleteListB);
  setCartItems(deleteListB);
};

const handleRemoveClick = (id) => {
var result = window.confirm ("Are you sure to remove these items?");
  if(result){
  const newCartItems = cartItem.filter((item) => item.id !== id);
  setCartItems(newCartItems);
  getTotal(newCartItems);}
};

// const handleDeleteClick = (item) => {
//   dispatch({type:"HANDLE_DELETE", payload: {name:item} });
// };

// const filterCategory = (category) => {
//   dispatch({type:"SET_CATEGORY", payload: {name:category} });
// };



//////////// codes that are still in useState////////////

  const [editItemDetail, setEditItemDetail] = useState([]);
  const [newItem, showNewForm] = useState(false);
  const [editItem, showEditForm] = useState(false);
  const [category, setCategory] = useState("");
  const [cartItem, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      name: "Burger",
      price: 50,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/198/198416.png",
    },
    {
      id: uuidv4(),
      name: "Iced Tea",
      price: 45,
      category: "Drink",
      image: "https://cdn-icons-png.flaticon.com/512/1187/1187466.png",
    },
    {
      id: uuidv4(),
      name: "Pizza",
      price: 100,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    },
    {
      id: uuidv4(),
      name: "Fries",
      price: 25,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/123/123300.png",
    },
    {
      id: uuidv4(),
      name: "Coffee",
      price: 45,
      category: "Drink",
      image: "https://cdn-icons-png.flaticon.com/512/3127/3127450.png",
    },
  ]);

  const categories = items.reduce((categories, item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
    return categories;
  }, []);

  let filteredItems =
    state.category === ""
      ? items
      : items.filter((item) => {
          return item.category === category;
        });

  const showAddItemForm = () => {
    newItem ? showNewForm(false) : showNewForm(true);
  };

  const showEditItemForm = (status, id) => {
    //show edit form
    editItem ? showEditForm(false) : showEditForm(status);

    const indexOfItem = items.findIndex((item) => item.id === id);
    const listItems = [...items];
    setEditItemDetail(...listItems.splice(indexOfItem, 1));
  };
  const hideNewItemForm = (status) => {
    editItem ? showNewForm(status) : showNewForm(status);
  };
  const hideEditItemForm = (status) => {
    editItem ? showEditForm(status) : showEditForm(status);
  };

  const addItem = (newItem) => {
    const item = {
      id: uuidv4(),
      ...newItem,
    };
    const newItems = [...items, item];
    setItems(newItems);
    showNewForm(false);
  };

  const saveChanges = (i) => {
    const indexOfItem = items.findIndex((item) => item.id === i.id);
    const itemsCopy = [...items];
    itemsCopy.splice(indexOfItem, 1, i);
   const updatedCartItem = cartItem.map((item) => {
    if (item.id === i.id) {
      return {...i, quantity:item.quantity}
    }
    return item;
   });

   
   setCartItems(updatedCartItem);
   getTotal(updatedCartItem);
    setItems(itemsCopy);
    showEditForm(false);

  };

  const handleOrderClick = (id) => {
    const cartCopy = [...cartItem];
    let exists = false;
    //check if item exist on cart
    cartCopy.forEach((item) => {
      if (id === item.id) {
        item.quantity++;
        exists = true;
      }
    });

    if (exists === false) {
      let newItem = items.filter((item) => item.id === id);

      newItem = Object.assign({}, ...newItem);

      const item = {
        ...newItem,
        quantity: 1,
      };
      cartCopy.push(item);
    }
    getTotal(cartCopy);
    setCartItems(cartCopy);
  };

  const listCartItems = cartItem.map((item, index) => (
    <CartItems
      key={index}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
      handleRemoveClick = {handleRemoveClick}
    />
  ));

  const listItems =
    filteredItems.length === 0 ? (
      <p>No item available.</p>
    ) : (
      filteredItems.map((item, index) => (
        //data transformation
        <ItemBox
          key={index}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          deleteClick={handleDeleteClick}
          orderClick={handleOrderClick}
          showEditItemForm={showEditItemForm}
          editItem={editItem}
          dispatch={dispatch}
          />
      ))
    );


    return (
      <div className="App">
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route
                path="/shop"
                component={() => (
                  <Shop
                    categories={categories}
                    listItems={listItems}
                    cartTotal={cartTotal}
                    listCartItems={listCartItems}
                    newItem={newItem}
                    editItem={editItem}
                    addItem={addItem}
                    showAddItemForm={showAddItemForm}
                    hideNewItemForm={hideNewItemForm}
                    editItemDetail={editItemDetail}
                    saveChanges={saveChanges}
                    hideEditItemForm={hideEditItemForm}
                    dispatch={dispatch}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  };
  
  function Home() {
    return <div className={style.home}>
      <h1 className={style.title}> <i>Tara, Kain tayo!</i></h1>
      <br></br>
      <p className={style.body}><i>Piging</i> is a Filipino term that translates to feast, banquet, party, or reception. It is used to describe the celebration that comes after a wedding, a marriage proposal, or even a job promotion.
      <br />
      <br />
      For all the events that happen from life and death, there is a <i>piging</i> expected to happen.</p>
    </div>;
  }
  
  export default App;

//   return (
//     <div className="App">
//       {/* RESTO APP */}
//       <h1>Resto App</h1>
//       {state.category}

//       <br />
//       {newItem ? (
//         <NewItem submit={addItem} hideNewItemForm={hideNewItemForm} />
//       ) : (
//         <button onClick={showAddItemForm}>Add Item</button>
//       )}
//       {editItem ? (
//         <EditItemForm
//           details={editItemDetail}
//           saveChanges={saveChanges}
//           hideEditItemForm={hideEditItemForm}
//         />
//       ) : (
//         ""
//       )}
//       <br />
//       <FilterCartItem dispatch={dispatch} categories={categories} />
//       <br />
//       <div className="ItemList">{listItems}</div>
//       <h2>Cart Total Amount: {cartTotal}</h2>
//       <div className="ItemList">{listCartItems}</div>
//     </div>
//   );
// };

// export default App;

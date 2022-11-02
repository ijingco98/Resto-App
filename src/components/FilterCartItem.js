import React, { useState } from "react";

const FilterCartItem = ({ categories, dispatch }) => {
  const [category, setCategory] = useState("");

  const options = categories.map(category => {
    return  <option key={category} value={category}>{category}</option>
  });
  
  return (
    <div>
      <select value={category} onChange={ (e) => dispatch({type:"SET_CATEGORY", payload: {name: e.target.value}})}>
        <option value="">All</option>
        {options}
      </select>
    </div>
  );
};

export default FilterCartItem;

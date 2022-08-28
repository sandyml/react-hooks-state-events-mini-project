import React from "react";
// import React, { useState } from 'react';

function CategoryFilter({ categories, filterCats, catState }) {
  
  function handleClick(event) {
    //console.log(event);
    //setSelected(e.target.value)
    filterCats(event.target.value)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(cat => {
        return <button className={(catState === cat) ? 'selected' : ''} onClick={handleClick} key={cat} value={cat}>{cat}</button>
      })}
    </div>
  );
}

export default CategoryFilter;

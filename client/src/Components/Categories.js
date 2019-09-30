import React from 'react';

const Categories = (props) => {
  const buttonNodes = props.categories.map((value, i) => (
      <button value={value} key={i} onClick={handleClick}>{value}</button>
  ));

  function handleClick(evt){
    props.setCategory(evt.target.value);
  }

  return(
    <>
    <h2>Categories</h2>
      <button value="" onClick={handleClick}>All</button>
      {buttonNodes}
    </>
  )
}

export default Categories;

import React from 'react';

const Categories = (props) => {
  const values = props.categories.map((value, index) => {
    return(
      <button value={value} key={index} onClick={filterCategory}>{value}</button>
    )
  })

  function filterCategory(event){
    props.setCategory(event.target.value);
  }

  return(
    <>
    <h2>CategoriesButtons</h2>
      <button value="" onClick={filterCategory}>All</button>
      {values}
    </>
  )
}

export default Categories;

import React from 'react';

const Categories = ({categories}) => {
  const values = categories.map((value, index) => {
    return(
      <button value={value} key={index}>{value}</button>
    )
  })
  return(
    <>
    <h2>CategoriesButtons</h2>
      {values}
    </>
  )
}

export default Categories;

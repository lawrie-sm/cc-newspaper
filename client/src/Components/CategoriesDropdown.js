import React from 'react';

const CategoriesDropdown = ({categories}) => {
  const values = categories.map((value, index) => {
    return(
      <option value={value}>{value}</option>
    )
  })
  return(
    <>
    <h2>CategoriesDropdown</h2>
    <select>
      {values}
    </select>
    </>
  )
}

export default CategoriesDropdown;

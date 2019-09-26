import React from 'react';

const ArticleList = ({articles}) => {
  const values = articles.map((value, index) => {
    return(
      <li>{value}</li>
    )
  })
  return(
    <>
    <h3>ArticleList</h3>
    <ul>
    {values}
    </ul>
    </>
  )
}

export default ArticleList;

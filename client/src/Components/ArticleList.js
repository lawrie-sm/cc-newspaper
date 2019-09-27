import React from 'react';

const ArticleList = (props) => {
  const articles = props.articles.map((value, index) => {
    return(
      <li>{value.title}</li>
    )
  })
  return(
    <>
    <h3>ArticleList</h3>
    <ul>
    {articles}
    </ul>
    </>
  )
}

export default ArticleList;

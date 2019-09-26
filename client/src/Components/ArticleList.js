import React from 'react';

const ArticleList = ({headlines}) => {
  const articles = headlines.map((article, index) => {
    return(
      <option value={article}>{article}</option>
    )
  })
  return(
    <>
    <h3>ArticleList</h3>
    {articles}
    </>
  )
}

export default ArticleList;

import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({filter, articles}) => {
  const articleNodes = articles.map((article, index) => (
    filter.toUpperCase() === article.category || filter === '' ?
      <ArticleListItem key={index} article={article} /> : null
  ));

  return (
    <>
    <h3>ArticleList</h3>
    <ul>{articleNodes}</ul>
    </>
  )
}

export default ArticleList;

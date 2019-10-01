import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({filter, articles}) => {
  const articleNodes = articles.map((article, index) => (
    filter.toUpperCase() === article.category || filter === '' ?
      <ArticleListItem key={index} article={article} /> : null
  ));

  return (
    <>
    <ul>{articleNodes}</ul>
    </>
  )
}

export default ArticleList;

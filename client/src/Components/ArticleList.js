import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({filter, articles}) => {
  const articleNodes = articles.map((article, index) => {
    if (filter.toUpperCase() === article.category ||
      filter === '') {
      return (
        <ArticleListItem
          key={index}
          article={article}
        />
      )
    }
    return null;
  });

  return (
    <>
    <h3>ArticleList</h3>
    <ul>{articleNodes}</ul>
    </>
  )
}

export default ArticleList;

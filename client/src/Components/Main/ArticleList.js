import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({filter, articles, images}) => {
  const articleNodes = articles.map((article, index) => (
    filter === article.category || filter === '' ?
      <ArticleListItem
      key={index}
      article={article}
      imageLink={images[article.category]} /> : null
  ));

  return (
    <>
    <ul>{articleNodes}</ul>
    </>
  )
}

export default ArticleList;

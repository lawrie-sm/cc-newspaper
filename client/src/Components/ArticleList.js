import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({filter, articles, setArticle}) => {

  function handleClick(event){
    setArticle(event.target.id);
  }

  const articleNodes = articles.map((article, index) => {
    if (filter.toUpperCase() === article.category ||
      filter === '') {
      return (
        <ArticleListItem
          key={index}
          index={index}
          article={article}
          handleClick={handleClick}
        />
      )
    }
    return null;
  });

  return(
    <>
    <h3>ArticleList</h3>
    <ul>{articleNodes}</ul>
    </>
  )
}

export default ArticleList;

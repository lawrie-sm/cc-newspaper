import React from 'react';

const ArticleDetail = ({article}) => (
  <>
  <h1>{article.category}</h1>
  <h2>{article.date}</h2>
  <h3>{article.text}</h3>

</>
)

export default ArticleDetail;

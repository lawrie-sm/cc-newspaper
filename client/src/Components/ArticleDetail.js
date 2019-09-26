import React from 'react';

const ArticleDetail = ({article}) => (
  <>
  <h3>{article.title}</h3>
  <p>{article.journalist}</p>
  <p>{article.article}</p>
</>
)

export default ArticleDetail;

import React from 'react';

const ArticleDetail = ({value}) => (
  <>
  <h3>{value.title}</h3>
  <p>{value.journalist}</p>
  <p>{value.article}</p>
</>
)

export default ArticleDetail;

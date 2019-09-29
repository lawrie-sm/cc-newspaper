import React from 'react';

const ArticleDetail = ({value}) => (
  <>
  <h3>{value.title}</h3>
  <p>{value.author}</p>
  <p>{value.text}</p>
</>
)

export default ArticleDetail;

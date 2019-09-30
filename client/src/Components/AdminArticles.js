import React from 'react';

const AdminArticles = ({articles}) => {

  const articleNodes = articles.map((article, index) => (
    <p key={index}>{article.title}</p>
  )
)
console.log(articleNodes);
return (
  {articleNodes}
)
}

export default AdminArticles;

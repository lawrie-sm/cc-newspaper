import React from 'react';

const AdminArticles = ({articles}) => {

  const articleNodes = articles.map((a, i) => (
    <p key={i}>{a.title}</p>
  ));
  return (<>{articleNodes}</>)
}

export default AdminArticles;

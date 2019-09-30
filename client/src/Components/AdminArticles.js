import React from 'react';

const AdminArticles = ({articles}) => {

  const articleNodes = articles.map((a, i) => (
    <>
    <p key={i}>{a.title}</p>
    <button>edit</button>
    <button>delete</button>
    </>
  ));
  return (<>{articleNodes}</>)
}

export default AdminArticles;

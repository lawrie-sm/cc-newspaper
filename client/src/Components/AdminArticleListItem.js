import React from 'react';

const AdminArticleListItem = ({article, handleDelete}) => (
  <>
  <p>{article.title}</p>
  <button>edit</button>
  <button onClick = {handleDelete} >delete</button>
  </>

)

export default AdminArticleListItem;

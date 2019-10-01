import React from 'react';

const AdminArticleListItem = ({article, handleDelete, handleEdit}) => (
  <>
  <p>{article.title}</p>
  <button onClick = {handleEdit}>edit</button>
  <button onClick = {handleDelete} >delete</button>
  </>

)

export default AdminArticleListItem;

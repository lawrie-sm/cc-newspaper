import React from 'react';
import './Lists.css';

const AdminArticleListItem = ({article, handleDelete, handleEdit}) => (
  <>
  <p>{article.title}</p>
  <button onClick = {handleEdit}>Edit</button>
  <button onClick = {handleDelete} >Delete</button>
  </>

)

export default AdminArticleListItem;

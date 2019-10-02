import React from 'react';
import './Lists.css';

const AdminJournalistListItem = ({author, handleDelete, handleEdit}) => (
  <>
  <p>{author.name}, {author.title}</p>
  <button onClick = {handleEdit} >Edit</button>
  <button onClick = {handleDelete} >Delete</button>
  </>
)

export default AdminJournalistListItem;

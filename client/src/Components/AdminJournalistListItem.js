import React from 'react';

const AdminJournalistListItem = ({author, handleDelete, handleEdit}) => (
  <>
  <p>{author.name}, {author.title}</p>
  <button onClick = {handleEdit} >edit</button>
  <button onClick = {handleDelete} >delete</button>
  </>
)

export default AdminJournalistListItem;

import React from 'react';

const AdminJournalistListItem = ({author, handleDelete}) => (
  <>
  <p>{author.name}, {author.title}</p>
  <button>edit</button>
  <button onClick = {handleDelete} >delete</button>
  </>
)

export default AdminJournalistListItem;

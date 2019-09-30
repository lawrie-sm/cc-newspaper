import React from 'react';
import AdminJournalistListItem from './AdminJournalistListItem';


const AdminJournalists = ({authors, deleteAuthor}) => {

  const handleDelete = (id) => (
    () => {
      deleteAuthor(id)
    }
  )

  const authorNodes = authors.map((a, i) => (
    <AdminJournalistListItem author={a} key={a.id} handleDelete={handleDelete(a.id)} />
  ));
  return (<>{authorNodes}</>)
}

export default AdminJournalists;

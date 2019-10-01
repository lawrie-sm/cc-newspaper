import React from 'react';
import AdminJournalistListItem from './AdminJournalistListItem';


const AdminJournalists = ({authors, deleteAuthor, selectEditAuthor}) => {

  const handleDelete = (id) => (
    () => {
      deleteAuthor(id)
    }
  )

  const handleEdit = (id) => (
    () => {
      selectEditAuthor(id)
    }
  )

  const authorNodes = authors.map((a, i) => (
    <AdminJournalistListItem
      author={a}
      key={a.id}
      handleDelete={handleDelete(a.id)}
      handleEdit={handleEdit(a.id)} />
  ));
  return (<>{authorNodes}</>)
}

export default AdminJournalists;

import React from 'react';
import AdminArticleListItem from './AdminArticleListItem';

const AdminArticles = ({articles, deleteArticle, editArticle}) => {

  const handleDelete = (id) => (
    () => {
      deleteArticle(id)
    }
  )
  const handleEdit = (a) => (
    () => {
      editArticle(a)
    }
  )

  const articleNodes = articles.map((a, i) => (
    <AdminArticleListItem
    article={a}
    key={a.id}
    handleDelete={handleDelete(a.id)}
    handleEdit={handleEdit(a)} />
  ));
  return (<>{articleNodes}</>)
}

export default AdminArticles;

import React from 'react';
import AdminArticleListItem from './AdminArticleListItem';

const AdminArticles = ({articles, deleteArticle}) => {

  const handleDelete = (id) => (
    () => {
      deleteArticle(id)
    }
  )

  const articleNodes = articles.map((a, i) => (
    <AdminArticleListItem article={a} key={a.id} handleDelete={handleDelete(a.id)} />
  ));
  return (<>{articleNodes}</>)
}

export default AdminArticles;

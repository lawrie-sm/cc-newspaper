import React, {Component} from 'react';
import AdminArticles from './AdminArticles';
import AdminJournalists from './AdminJournalists';
import AdminArticlesForm from './AdminArticlesForm';
import AdminJournalistsForm from './AdminJournalistsForm';

const AdminComponent = (props) => {
  if (props.authors.length > 0) {
    return (
      <>
      <AdminArticles
        articles = {props.articles}
        deleteArticle = {props.deleteArticle}
        selectEditArticle = {props.selectEditArticle} />
      <AdminJournalists
        authors = {props.authors}
        deleteAuthor = {props.deleteAuthor}
        selectEditAuthor = {props.selectEditAuthor} />
      <AdminArticlesForm
        categories = {props.categories} 
        authors = {props.authors}
        selectedArticle = {props.selectedArticle}
        createArticle = {props.createArticle}
        submitEditArticle = {props.submitEditArticle} />
      <AdminJournalistsForm
        selectedAuthor = {props.selectedAuthor}
        createAuthor = {props.createAuthor}
        submitEditAuthor = {props.submitEditAuthor} />
      </>
    )
  }
  return(null);
}

export default AdminComponent;

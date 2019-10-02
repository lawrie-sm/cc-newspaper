import React, {Component} from 'react';
import AdminArticles from './AdminArticles';
import AdminJournalists from './AdminJournalists';
import AdminArticlesForm from './AdminArticlesForm';
import AdminJournalistsForm from './AdminJournalistsForm';
import './AdminComponent.css'

const AdminComponent = (props) => {
  if (props.authors.length > 0) {
    return (
      <div className="admin-container">
        <div className="admin-column">
          <h2>Articles</h2>
          <AdminArticlesForm
            categories = {props.categories} 
            authors = {props.authors}
            selectedArticle = {props.selectedArticle}
            createArticle = {props.createArticle}
            submitEditArticle = {props.submitEditArticle} />
          <hr/>
          <AdminArticles
            articles = {props.articles}
            deleteArticle = {props.deleteArticle}
            selectEditArticle = {props.selectEditArticle} />
        </div>
        <div className="admin-column">
          <h2>Journalists</h2>
          <AdminJournalistsForm
            selectedAuthor = {props.selectedAuthor}
            createAuthor = {props.createAuthor}
            submitEditAuthor = {props.submitEditAuthor} />
          <hr/>
          <AdminJournalists
            authors = {props.authors}
            deleteAuthor = {props.deleteAuthor}
            selectEditAuthor = {props.selectEditAuthor} />
        </div>
      </div>
    )
  }
  return(null);
}

export default AdminComponent;

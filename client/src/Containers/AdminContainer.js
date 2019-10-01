import React, {Component} from 'react';
import AdminArticles from '../Components/AdminArticles';
import AdminJournalists from '../Components/AdminJournalists';
import AdminArticlesForm from '../Components/AdminArticlesForm';
import AdminJournalistsForm from '../Components/AdminJournalistsForm';

class AdminContainer extends Component {

  render(props) {
    if (this.props.authors.length > 0) {
      return(
        <>
        <AdminArticles articles = {this.props.articles} deleteArticle = {this.props.deleteArticle} editArticle = {this.props.editArticle} />
        <AdminJournalists authors = {this.props.authors} deleteAuthor = {this.props.deleteAuthor} />
        <AdminArticlesForm
        categories = {this.props.categories} 
        selectedArticle = {this.props.selectedArticle}
        authors = {this.props.authors}
        createArticle = {this.props.createArticle} />
        <AdminJournalistsForm createAuthor = {this.props.createAuthor} />
        </>
      )
    }
    return null;
  }

  }

  export default AdminContainer;

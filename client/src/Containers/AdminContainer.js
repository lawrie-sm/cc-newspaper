import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminArticles from '../Components/AdminArticles';
import AdminJournalists from '../Components/AdminJournalists';
import AdminArticlesForm from '../Components/AdminArticlesForm';
import AdminJournalistsForm from '../Components/AdminJournalistsForm';



class AdminContainer extends Component {

  render(props){
    return(
      <>
      <AdminArticles articles={this.props.articles} />
      <AdminJournalists journalists = {this.props.journalists} />
      <AdminArticlesForm />
      <AdminJournalistsForm />
    </>
  )}

  }

  export default AdminContainer;

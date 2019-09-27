import React from 'react';
import ArticleDetail from './ArticleDetail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const ArticleList = (props) => {
  const articles = props.articles.map((value, index) => {
    return(
      <li key={index}>
      <Router>
      <Switch>
      <Route path="/article" component={ArticleDetail} article={value} /><h2>{value.title}</h2>

      </Switch>
      </Router>
      <h3>{value.author.name}, {value.author.title}</h3>
      <h3>{value.date}</h3>
      <h3>{value.category}</h3>
      <h3>{value.summary}</h3>
      </li>
    )
  })
  return(
    <>
    <h3>ArticleList</h3>
    <ul>
    {articles}
    </ul>
    </>
  )
}

export default ArticleList;

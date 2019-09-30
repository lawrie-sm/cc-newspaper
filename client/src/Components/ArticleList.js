import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const ArticleList = (props) => {
  const filter = props.filter;
  const articles = props.articles.map((article, index) => {

    if(filter.toUpperCase() === article.category){
      return(
        <li key={index}>
        <Link to={`/article/${index}`}>
        <h2 value={article} id={index} key={index} onClick={showArticle}>{article.title}</h2>
        </Link>
        <h3>{article.author.name}, {article.author.title}</h3>
        <h3><Moment fromNow ago>{article.date}</Moment> ago</h3>
        <h3>{article.category}</h3>
        <h3>{article.summary}</h3>
        </li>
      )}else if(filter === ""){
        return(
          <li key={index}>
          <Link to={`/article/${index}`}>
          <h2 value={article} id={index} key={index} onClick={showArticle}>{article.title}</h2>
          </Link>
          <h3>{article.author.name}, {article.author.title}</h3>
          <h3><Moment fromNow ago>{article.date}</Moment> ago</h3>
          <h3>{article.category}</h3>
          <h3>{article.summary}</h3>
          </li>
        )}else{
          return(
            null
          )
        }
      })

      function showArticle(event){
        props.setArticle(event.target.id);
      }

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

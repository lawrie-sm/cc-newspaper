import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import './ArticleListItem.css';


const ArticleListItem = ({article, imageLink}) => (
  <>
  <li>
    <div className="article-container">
      <div className="article-list-item-text">
      <Link to={`/article/${article.id}`}>
      <h2 className="headline"> {article.title} </h2>
      </Link>
        <div className="article-details">
        <p className="details">{article.author.name}, {article.author.title}</p>
        <p className="details"><Moment fromNow ago>{article.date}</Moment> ago</p>
        <p className="category">{article.category}</p>
        </div>
      <h3 className="summary">{article.summary}</h3>
      </div>
      <div className="article-list-item-image">
    <img src={imageLink} width="250" height="auto" />
      </div>
    </div>
  </li>
  <br />
    <hr align="left" />
    <br />
    </>
)

export default ArticleListItem;

import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import './ArticleListItem.css'

const ArticleListItem = ({article}) => (
  <li>
    <Link to={`/article/${article.id}`}>
      <h2> {article.title} </h2>
    </Link>
    <div className="article-details">
    <p className="details">{article.author.name}, {article.author.title}</p>
    <p className="details"><Moment fromNow ago>{article.date}</Moment> ago</p>
    <p className="details">{article.category}</p>
    </div>
    <h3>{article.summary}</h3>
    <hr />
  </li>
)

export default ArticleListItem;

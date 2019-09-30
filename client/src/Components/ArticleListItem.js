import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const ArticleListItem = ({article}) => (
  <li>
    <Link to={`/article/${article.id}`}>
      <h2> {article.title} </h2>
    </Link>
    <h3>{article.author.name}, {article.author.title}</h3>
    <h3><Moment fromNow ago>{article.date}</Moment> ago</h3>
    <h3>{article.category}</h3>
    <h3>{article.summary}</h3>
  </li>
)

export default ArticleListItem;

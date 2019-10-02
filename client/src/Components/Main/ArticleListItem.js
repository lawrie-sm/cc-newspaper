import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import './ArticleListItem.css';
// import culture from '../../Images/culture.jpg';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../Images/', false, /\.(png|jpe?g|svg)$/));

const ArticleListItem = ({article}) => (
  <li>
    <div className="article-container">
      <div className="article-list-item-text">
      <Link to={`/article/${article.id}`}>
      <h2> {article.title} </h2>
      </Link>
        <div className="article-details">
        <p className="details">{article.author.name}, {article.author.title}</p>
        <p className="details"><Moment fromNow ago>{article.date}</Moment> ago</p>
        <p className="details">{article.category}</p>
        </div>
      <h3 className="summary">{article.summary}</h3>
      </div>
      <div className="article-list-item-image">
    <img src={images} width="250" height="auto" />
      </div>
    </div>
  <hr />
  </li>
)

export default ArticleListItem;

// "../../Images/" + article.category.toLowerCase() + ".jpg"

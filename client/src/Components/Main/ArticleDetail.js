import React from 'react';
import Moment from 'react-moment';
import './ArticleDetail.css';

const ArticleDetail = ({article, imageLink}) => (
    <div class="article-detail-container">
      <div>
        <h1 className="headline">{article.title}</h1>
      </div>
        <div className="article-details">
          <p className="details">{article.author.name}, {article.author.title}</p>
          <p className="details"><Moment format="dddd, MMMM Do YYYY">{article.date}</Moment></p>
          <p className="category">{article.category}</p>
        </div>
          <h3 className="article-summary">{article.summary}</h3>
      <div className="article-body">
        <div>
        <p className="body"><img className="article-image" src={imageLink} width="250" height="auto" align="right" />{article.text}</p>
        </div>
      </div>
    </div>
)

export default ArticleDetail;

// <div>
// <img className="article-image" src={imageLink} width="250" height="auto" />
// </div>

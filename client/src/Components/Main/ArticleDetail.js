import React from 'react';
import './ArticleDetail.css';

const ArticleDetail = ({article, imageLink}) => (
  <>
    <div>
    <h1 className="headline">{article.title}</h1>
    </div>
      <div>
      <h3>{article.date}</h3>
      <h3>{article.category}</h3>
      <h3>{article.author.name}, {article.author.title}</h3>
      </div>
      <div>
      <h3 className="article-summary">{article.summary}</h3>
      <h3 className="body">{article.text}</h3>
      </div>
    <div>
    <img src={imageLink} width="250" height="auto" />
    </div>
  </>
)

export default ArticleDetail;

import React from 'react';

const ArticleList = (props) => {
  const filter = props.filter;

  const articles = props.articles.map((article, index) => {

    if(filter.toUpperCase() == article.category){
      return(
        <li key={index}>
        <h2>{article.title}</h2>
        <h3>{article.author.name}, {article.author.title}</h3>
        <h3>{article.date}</h3>
        <h3>{article.category}</h3>
        <h3>{article.summary}</h3>
        </li>
    )}else if(filter == ""){
      return(
        <li key={index}>
        <h2>{article.title}</h2>
        <h3>{article.author.name}, {article.author.title}</h3>
        <h3>{article.date}</h3>
        <h3>{article.category}</h3>
        <h3>{article.summary}</h3>
        </li>
    )}else{
      return
  }
  })

// const ArticleList = (props) => {
//   const filter = props.filter;
//   const articles = props.articles.map((article, index) => {
//     return(
//       <li key={index}>
//       <h2>{article.title}</h2>
//       <h3>{article.author.name}, {article.author.title}</h3>
//       <h3>{article.date}</h3>
//       <h3>{article.category}</h3>
//       <h3>{article.summary}</h3>
//       </li>
//     )
//   })



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


  // if (article.category == filter.toUpperCase())

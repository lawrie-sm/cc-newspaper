import React from 'react';
import Categories from './Categories';
import ArticleList from './ArticleList';

const Main = ({categories, setCategory, articles, filter, setArticle}) => (
  <>
  <Categories categories = {categories} setCategory = {setCategory} />
  <ArticleList articles = {articles} filter={filter} setArticle = {setArticle} />
  </>

)

export default Main;

// <Categories categories = {this.state.categories} setCategory = {this.setCategory} />
// <ArticleList articles = {this.state.articles} filter={this.state.category} setArticle = {this.setArticle}/>

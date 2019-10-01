import React from 'react';
import Categories from './Categories';
import ArticleList from './ArticleList';

const Main = ({categories, setCategory, articles, filter, setArticle, selectedCategory}) => (
  <>
    <Categories categories={categories} setCategory={setCategory} selectedCategory={selectedCategory} />
    <ArticleList articles={articles} filter={filter} setArticle={setArticle} />
  </>
)

export default Main;

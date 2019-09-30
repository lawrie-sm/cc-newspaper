import React from 'react';
import Categories from './Categories';
import ArticleList from './ArticleList';

const Main = ({categories, setCategory, articles, filter, setArticle}) => (
  <>
    <Categories categories={categories} setCategory={setCategory} />
    <ArticleList articles={articles} filter={filter} setArticle={setArticle} />
  </>
)

export default Main;

import React from 'react';
import Categories from './Categories';
import ArticleList from './ArticleList';

const Main = ({categories, setCategory, articles, filter, setArticle, selectedCategory, images}) => (
  <>
    <Categories categories={categories} setCategory={setCategory} selectedCategory={selectedCategory} />
    <ArticleList articles={articles} filter={filter} setArticle={setArticle} images={images} />
  </>
)

export default Main;

import React, {Component} from 'react';
import Header from '../Components/Header';
import Categories from '../Components/Categories';
import ArticleList from '../Components/ArticleList';

class NewsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      journalists: [],
      categories: [ "World", "UK", "Sport", "Culture", "Education"],
      category: "",
      articleId: ""
    };
    this.setCategory = this.setCategory.bind(this);
    this.setArticle = this.setArticle.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:8080/articles/by-date";

    fetch(url)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles}))
    .catch(err => console.error);
  }

  setCategory(category){
    this.setState({category: category})
  }

  setArticle(article){
    this.setState({articleId: article})
  }



render(){
  return(
    <>
    <h1>NewsContainer</h1>
    <Header />
    <Categories categories = {this.state.categories} setCategory = {this.setCategory} />
    <ArticleList articles = {this.state.articles} filter={this.state.category} setArticle = {this.setArticle}/>
    </>
  )}

}

export default NewsContainer;

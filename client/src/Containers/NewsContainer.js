import React, {Component} from 'react';
import Header from '../Components/Header';
import CategoriesDropdown from '../Components/CategoriesDropdown';
// import Search from '../Components/Search';
import ArticleList from '../Components/ArticleList';

class NewsContainer extends Component {

constructor(props) {
  super(props);

  this.state = {
    articles: [],
    journalists: [],
    categories: [1, 2, 3, 4, 5]
  };
}

  componentDidMount() {
    const url = "http://localhost:8080/articles/by-date";

    fetch(url)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles}))
    .catch(err => console.error);
 }

render(){
  return(
    <>
    <h1>NewsContainer</h1>
    <ArticleList articles = {this.state.articles}/>
    </>
  )
}

}

export default NewsContainer;

// <Header />
// <CategoriesDropdown categories = {this.state.categories} />
//

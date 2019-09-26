import React, {Component} from 'react';
import Header from '../Components/Header';
import CategoriesDropdown from '../Components/CategoriesDropdown';
import Search from '../Components/Search';
import ArticleList from '../Components/ArticleList';

class NewsContainer extends Component {

constructor(props) {
  super(props);

  this.state = {
    articles: [1, 2, 3, 4, 5],
    journalists: [],
    categories: [1, 2, 3, 4, 5]
  }

  // ComponentDidMount() {
  //   const url = "";
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(articles => this.setState({articles: articles}))
  //   .catch(err => console.error);
  // }

 }
render(){
  return(
    <>
    <h1>NewsContainer</h1>
    <Header />
    <CategoriesDropdown categories = {this.state.categories} />
    <Search />
    <ArticleList articles = {this.state.articles}/>
    </>
  )
}

}

export default NewsContainer;

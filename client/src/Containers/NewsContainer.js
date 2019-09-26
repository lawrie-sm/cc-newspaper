import React, {Component} from 'react';
import Header from '../Components/Header';
import CategoriesDropdown from '../Components/CategoriesDropdown';
import Search from '../Components/Search';

class NewsContainer extends Component {

constructor(props) {
  super(props);

  this.state = {
    articles: [],
    journalists: [],
    categories: [1, 2, 3, 4, 5]
  }

 }
render(){
  return(
    <>
    <h1>NewsContainer</h1>
    <Header />
    <CategoriesDropdown categories={this.state.categories} />
    <Search />
    </>
  )
}

}

export default NewsContainer;

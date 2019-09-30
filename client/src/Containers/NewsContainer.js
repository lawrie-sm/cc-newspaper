import React, {Component} from 'react';
import Header from '../Components/Header';
import ArticleDetail from '../Components/ArticleDetail';
import AdminContainer from './AdminContainer';
import Main from '../Components/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class NewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      authors: [],
      categories: [ "World", "UK", "Sport", "Culture", "Education"],
      selectedCategory: "",
    };
    this.setCategory = this.setCategory.bind(this);
    this.main = this.main.bind(this);
    this.admin = this.admin.bind(this);
    this.articleDetail = this.articleDetail.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/articles/by-date")
      .then(res => res.json())
      .then(articles => this.setState({articles}))
      .catch(err => console.error);

    fetch("http://localhost:8080/authors")
      .then(res => res.json())
      .then(authors => this.setState({authors: authors._embedded.authors}))
      .catch(err => console.error);
  }

  setCategory(category){
    this.setState({selectedCategory: category})
  }

  main(props) {
    return (
      <Main
        categories = {this.state.categories}
        setCategory = {this.setCategory}
        articles = {this.state.articles}
        filter={this.state.selectedCategory}
      />
    )
  }

  admin(props) {
    return (
      <AdminContainer
        articles = {this.state.articles}
        authors = {this.state.authors}
        categories= {this.state.categories}
      />
    )
  }

  articleDetail(props) {
    const article = this.state.articles.find(a => a.id == props.match.params.id);
    return <ArticleDetail article={article} />
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={this.main} />
            <Route exact path="/admin" render={this.admin} />
            <Route path="/article/:id" render={this.articleDetail} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default NewsContainer;

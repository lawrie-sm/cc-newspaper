import React, {Component} from 'react';
import Header from '../Components/Main/Header';
import ArticleDetail from '../Components/Main/ArticleDetail';
import AdminContainer from '../Components/Admin/AdminComponent';
import Main from '../Components/Main/Main';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as api from '../Api/api.js'

class NewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      authors: [],
      categories: [ "WORLD", "UK", "SPORT", "CULTURE", "EDUCATION"],
      selectedCategory: "",
      selectedArticle: {},
      selectedAuthor: {},
    };
    this.setCategory = this.setCategory.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderAdmin = this.renderAdmin.bind(this);
    this.renderArticleDetail = this.renderArticleDetail.bind(this);
    this.createArticle = this.createArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.selectEditArticle = this.selectEditArticle.bind(this);
    this.submitEditArticle = this.submitEditArticle.bind(this);
    this.createAuthor = this.createAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.selectEditAuthor = this.selectEditAuthor.bind(this);
    this.submitEditAuthor = this.submitEditAuthor.bind(this);
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

  findAuthorById(id) {
    return this.state.authors.find(a => a.id == id);
  }

  setCategory(category){
    this.setState({selectedCategory: category})
  }

  selectEditArticle(article){
    this.setState({selectedArticle: article});
  }

  selectEditAuthor(id) {
    const selectedAuthor = this.findAuthorById(id);
    this.setState({selectedAuthor});
  }

  // CRUD functions

  createArticle(article) {
    api.postArticle(article)
      .then(newArticle => {
        newArticle.author = this.findAuthorById(article.authorId);
        const articles = [...this.state.articles, newArticle];
        this.setState({articles});
      });
  }

  submitEditArticle(article) {
    api.patchArticle(article)
      .then(newArticle => {
        newArticle.author = this.findAuthorById(article.authorId);
        let articles = [...this.state.articles];
        const index = articles.findIndex(a => a.id === article.id);
        articles[index] = newArticle;
        this.setState({articles});
      });
  }

  deleteArticle(id) {
    api.deleteArticle(id);
    const articles = this.state.articles.filter(a => a.id !== id)
    this.setState({articles})
  }

  createAuthor(author) {
    api.postAuthor(author)
      .then(newAuthor => {
        const authors = [...this.state.authors, newAuthor];
        this.setState({authors});
      });
  }

  deleteAuthor(id) {
    api.deleteAuthor(id);
    const authors = this.state.authors.filter(a => a.id !== id)
    const articles = this.state.articles.filter(a => a.author.id !== id)
    this.setState({authors, articles})
  }

  submitEditAuthor(author) {
    api.patchAuthor(author)
      .then(newAuthor => {
        let authors = [...this.state.authors];
        const index = authors.findIndex(a => a.id === author.id);
        authors[index] = newAuthor;
        this.setState({authors});
      });
  }

  // Render Functions

  renderMain(props) {
    return (
      <Main
      categories = {this.state.categories}
      setCategory = {this.setCategory}
      articles = {this.state.articles}
      filter={this.state.selectedCategory}
      selectedCategory={this.state.selectedCategory}
      />
    )
  }

  renderArticleDetail(props) {
    const article = this.state.articles.find(a => a.id == props.match.params.id);
    return <ArticleDetail article={article} />
  }

  renderAdmin(props) {
    return (
      <AdminContainer
        articles = {this.state.articles}
        authors = {this.state.authors}
        categories= {this.state.categories}
        selectedArticle = {this.state.selectedArticle}
        selectedAuthor = {this.state.selectedAuthor}
        deleteArticle = {this.deleteArticle}
        createArticle = {this.createArticle}
        selectEditArticle = {this.selectEditArticle}
        submitEditArticle = {this.submitEditArticle}
        deleteAuthor = {this.deleteAuthor}
        createAuthor = {this.createAuthor}
        selectEditAuthor = {this.selectEditAuthor}
        submitEditAuthor = {this.submitEditAuthor}
      />
    )
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={this.renderMain} />
            <Route exact path="/admin" render={this.renderAdmin} />
            <Route path="/article/:id" render={this.renderArticleDetail} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default NewsContainer;

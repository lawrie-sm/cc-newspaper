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
      categories: [ "WORLD", "UK", "SPORT", "CULTURE", "EDUCATION"],
      selectedCategory: "",
      selectedArticle: {}
    };
    this.setCategory = this.setCategory.bind(this);
    this.main = this.main.bind(this);
    this.admin = this.admin.bind(this);
    this.articleDetail = this.articleDetail.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.submitEditArticle = this.submitEditArticle.bind(this);
    this.createArticle = this.createArticle.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.createAuthor = this.createAuthor.bind(this);
  }

  // TODO: Delay rendering until we have everything
  // To avoid checking authors in admin container

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

  findAuthorById(id) {
    return this.state.authors.find(a => a.id == id);
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
      selectedArticle = {this.state.selectedArticle}
      deleteArticle = {this.deleteArticle}
      createArticle = {this.createArticle}
      editArticle = {this.editArticle}
      deleteAuthor = {this.deleteAuthor}
      createAuthor = {this.createAuthor}
      submitEditArticle = {this.submitEditArticle}
      />
    )
  }

  articleDetail(props) {
    const article = this.state.articles.find(a => a.id == props.match.params.id);
    return <ArticleDetail article={article} />
  }

  createArticle(article) {
    if (article.id) delete article.id;
    article.author = `http://localhost:8080/authors/${article.authorId}`
    fetch('http://localhost:8080/articles', {
      method: 'POST',
      body: JSON.stringify(article),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(newArticle => {
      newArticle.author = this.findAuthorById(article.authorId);
      const articles = [...this.state.articles, newArticle];
      this.setState({articles});

    })
    .catch(err => console.error);
  }

  submitEditArticle(article) {
    console.log("EDITING:");
    console.log(article);
  }

  createAuthor(author) {
    fetch('http://localhost:8080/authors', {
      method: 'POST',
      body: JSON.stringify(author),
      headers: { 'Content-Type': 'application/json' }
    })
  .then(res => res.json())
  .then(newAuthor => {
    const authors = [...this.state.authors, newAuthor];
    this.setState({authors});
  })
  .catch(err => console.error);
}

editArticle(article){
  this.setState({selectedArticle: article});
}

deleteArticle(id) {
  const articles = this.state.articles.filter(a => a.id !== id)
  this.setState({articles})

  fetch(`http://localhost:8080/articles/${id}`, {
    method: 'DELETE'
  })
  .catch(err => console.error);
}

deleteAuthor(id) {
  const authors = this.state.authors.filter(a => a.id !== id)
  this.setState({authors})
  fetch(`http://localhost:8080/authors/${id}`, {
    method: 'DELETE'
  })
  .catch(err => console.error);
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

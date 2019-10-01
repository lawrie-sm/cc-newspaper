import React, {Component} from 'react';

class AdminArticlesForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: "",
      authorId: 0,
      title: "",
      text: "",
      summary: "",
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidUpdate(prevProps){
    if (this.props.selectedArticle &&
      this.props.selectedArticle !==prevProps.selectedArticle){
      this.setState({...this.props.selectedArticle, authorId: this.props.selectedArticle.author.id})
    }
  }

  handleChange({ target: { value, name } }) {
    this.setState({[name]: value});
  }

  inputsAreValid() {
    const s = this.state;
    return !!(s.title && s.summary && s.text && s.date);
  }

  handleSubmit(evt){
    if (this.inputsAreValid()) {
      this.props.createArticle({...this.state})
    }
  }

  handleEditSubmit(evt){
    if (this.inputsAreValid()) {
      this.props.submitEditArticle({...this.state})
    }
  }

  render(){

    const categoryNodes = this.props.categories.map((c, index) => (
      <option value={c} key={index}>{c}</option>
    ))

    const authorNodes = this.props.authors.map((a, index) => (
      <option value={a.id} key={index}>{a.name}, {a.title}</option>
    ))

    return(
      <>
      <p>AdminArticlesForm</p>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} required />
        </div>

        <div>
          <label htmlFor="summary">Summary:</label>
          <input type="text" id="summary" name="summary" value={this.state.summary} onChange={this.handleChange} required />
        </div>

        <div>
          <label htmlFor="text">Text:</label>
          <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleChange} required />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange} required/>
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <select name="category" value={this.state.category} onChange={this.handleChange} required >
              {categoryNodes}
          </select>
        </div>

        <div>
          <label htmlFor="authorId">Author:</label>
          <select name="authorId" value={this.state.authorId} onChange={this.handleChange} required >
              {authorNodes}
          </select>
        </div>

        <input onClick={this.handleSubmit} type="submit" value="Submit" />
        <input onClick={this.handleEditSubmit} type="submit" value="Update" />
      </form>

      </>
    )

  }
}

export default AdminArticlesForm;

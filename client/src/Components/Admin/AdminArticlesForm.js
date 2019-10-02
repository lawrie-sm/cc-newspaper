import React, {Component} from 'react';
import './AdminForms.css';

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
    evt.preventDefault();
    if (this.inputsAreValid()) {
      this.props.createArticle({...this.state})
    }
  }

  handleEditSubmit(evt){
    evt.preventDefault();
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
      <form>
        <div className="form-container">
          <div className="form-column">
            <label htmlFor="title">Title:</label>
            <label htmlFor="summary">Summary:</label>
            <label htmlFor="text">Text:</label>
            <label htmlFor="date">Date:</label>
            <label htmlFor="category">Category:</label>
            <label htmlFor="authorId">Author:</label>
          </div>
          <div className="form-column">
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} required />
            <input type="text" id="summary" name="summary" value={this.state.summary} onChange={this.handleChange} required />
            <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleChange} required />
            <input type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange} required/>
            <select className="form-select" name="category" value={this.state.category} onChange={this.handleChange} required >
                {categoryNodes}
            </select>
            <select className="form-select" name="authorId" value={this.state.authorId} onChange={this.handleChange} required >
                {authorNodes}
            </select>
          </div>
        </div>

        <div className="form-container">
          <div className="form-column">
            <input className="form-button" onClick={this.handleSubmit} type="submit" value="Submit" />
          </div>
          <div className="form-column">
            <input className="form-button" onClick={this.handleEditSubmit} type="submit" value="Update" />
          </div>
        </div>
      </form>
    )
  }
}

export default AdminArticlesForm;

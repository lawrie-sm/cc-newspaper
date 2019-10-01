import React, {Component} from 'react';

class AdminArticlesForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: this.props.categories[0],
      authorId: this.props.authors[0].id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({[name]: value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.createArticle(this.state)
  }

  componentDidUpdate(){
    this.setState(this.props.selectedArticle)
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
      <form onSubmit={this.handleSubmit}>
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
      <select name="category" onChange={this.handleChange} required >
      <>
      {categoryNodes}
      </>
      </select>
      </div>

      <div>
      <label htmlFor="authorId">Author:</label>
      <select name="authorId" onChange={this.handleChange} required >
      <>
      {authorNodes}
      </>
      </select>
      </div>

      <input type="submit" value="Submit" />

      </form>

      </>
    )

  }
}

export default AdminArticlesForm;

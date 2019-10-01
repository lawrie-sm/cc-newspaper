import React, {Component} from 'react';

class AdminJournalistsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  componentDidUpdate(prevProps){
    if (this.props.selectedAuthor &&
        this.props.selectedAuthor !==prevProps.selectedAuthor){
        this.setState(this.props.selectedAuthor)
    }
  }

  handleChange({ target: { value, name } }) {
    this.setState({[name]: value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.createAuthor(this.state)
  }

  handleEditSubmit(evt){
    evt.preventDefault();
    this.props.submitEditAuthor(this.state)
  }

  render() {
    return(
      <>
      <p>AdminJournalistsForm</p>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input value={this.state.title} type="text" id="title" name="title" onChange={this.handleChange} required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input value={this.state.name} type="text" id="name" name="name" onChange={this.handleChange} required />
        </div>
        <input onClick={this.handleSubmit} type="submit" value="Submit" />
        <input onClick={this.handleEditSubmit} type="submit" value="Update" />
      </form>
      </>
    )}
}

export default AdminJournalistsForm;

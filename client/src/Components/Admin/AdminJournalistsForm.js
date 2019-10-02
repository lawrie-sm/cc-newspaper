import React, {Component} from 'react';
import './AdminForms.css';

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

  inputsAreValid() {
    const s = this.state;
    return !!(s.title && s.name);
  }

  handleSubmit(evt){
    evt.preventDefault();
    if (this.inputsAreValid()) {
      this.props.createAuthor(this.state)
    }
  }

  handleEditSubmit(evt){
    evt.preventDefault();
    if (this.inputsAreValid()) {
      this.props.submitEditAuthor(this.state)
    }
  }

  render() {
    return(
      <form>
        <div className="form-container">
          <div className="form-column">
            <label htmlFor="title">Title:</label>
            <label htmlFor="name">Name:</label>
          </div>
          <div className="form-column">
            <input value={this.state.name} type="text" id="name" name="name" onChange={this.handleChange} required />
            <input value={this.state.title} type="text" id="title" name="title" onChange={this.handleChange} required />
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
    )}
}

export default AdminJournalistsForm;

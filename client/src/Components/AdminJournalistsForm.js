import React, {Component} from 'react';

class AdminJournalistsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({[name]: value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.createAuthor(this.state)
  }
  render(){
    return(

      <>
      <p>AdminJournalistsForm</p>
      <form onSubmit={this.handleSubmit}>
      <div>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" onChange={this.handleChange} required />
      </div>

      <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={this.handleChange} required />
      </div>


      <input type="submit" value="Submit" />

      </form>

      </>
    )}
  }

  export default AdminJournalistsForm;

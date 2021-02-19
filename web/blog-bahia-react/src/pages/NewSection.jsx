import React from 'react';
import SectionForm from '../components/SectionForm';
import { Redirect } from 'react-router-dom';
import { newSection } from '../services/api';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(section) {
    const response = await newSection(section);
    alert(response.statusText);
    this.setState({ shouldRedirect: true });
  }

  render() {
    if (this.state.shouldRedirect) {
      return (<Redirect to="/admin" />);
    }
    return (
      <SectionForm type="new" handleSubmit={this.handleSubmit} newSection={true} />
    )
  }
}

export default NewPost;
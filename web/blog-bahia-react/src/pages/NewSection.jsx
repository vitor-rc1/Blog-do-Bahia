import React from 'react';
import SectionForm from '../components/SectionForm';
import { Redirect } from 'react-router-dom';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(section) {
    console.log(section)
    const URL = 'http://localhost:3001/section/create';
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(section),
    });
    this.setState({ shouldRedirect: true })
  }

  render() {
    if (this.state.shouldRedirect) {
      return (<Redirect to="/" />);
    }
    return (
      <SectionForm handleSubmit={this.handleSubmit} newSection={true} />
    )
  }
}

export default NewPost;
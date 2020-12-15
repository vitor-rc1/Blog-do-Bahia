import React from 'react';
import PostForm from '../components/PostForm';
import { Redirect } from 'react-router-dom';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(post) {
    console.log(post)
    const URL = 'http://localhost:3001/create';
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    this.setState({ shouldRedirect: true })
  }

  render() {
    if (this.state.shouldRedirect) {
      return (<Redirect to="/" />);
    }
    return (
      <PostForm handleSubmit={this.handleSubmit} newPost={true} />
    )
  }
}

export default NewPost;
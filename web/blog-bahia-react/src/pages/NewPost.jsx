import React from 'react';
import PostForm from '../components/PostForm';
import { Redirect } from 'react-router-dom';
import { newPost } from '../services/api';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(post) {
    const response = await newPost(post);
    alert(response.statusText);
    this.setState({ shouldRedirect: true });
  }

  render() {
    if (this.state.shouldRedirect) {
      return (<Redirect to="/admin" />);
    }
    return (
      <PostForm type="new" handleSubmit={this.handleSubmit} newPost={true} />
    )
  }
}

export default NewPost;
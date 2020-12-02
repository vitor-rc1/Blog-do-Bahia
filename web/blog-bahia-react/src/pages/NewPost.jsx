import React from 'react';
import { Redirect } from 'react-router-dom';
import PostForm from '../components/PostForm';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    this.setState({ shouldRedirect: true })
  }

  render() {
    if (this.state.shouldRedirect) {
    return (<Redirect to="/" />);
    }
    return (
      <PostForm handleSubmit= { this.handleSubmit } />
    )
  }
}

export default NewPost;
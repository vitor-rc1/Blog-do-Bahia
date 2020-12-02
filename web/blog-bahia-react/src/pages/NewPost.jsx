import React from 'react';
import PostForm from '../components/PostForm';
import { Redirect } from 'react-router-dom';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(post) {
    // this.setState({ shouldRedirect: true })
    console.log(post)
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
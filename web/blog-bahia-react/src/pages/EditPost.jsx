import React from 'react';
import PostForm from '../components/PostForm';
import { Redirect } from 'react-router-dom';

class EditPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false, shouldLoading: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(post) {
    const URL = `http://localhost:3001/${this.state.id}/update`;
    await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    this.setState({ shouldRedirect: true })
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }
  async loadPost(idPost) {
    const URL = `http://localhost:3001/${idPost}/post`;
    const response = await fetch(URL);
    const [{id, post}] = await response.json();
    this.setState({ post, id }, () => {
      this.setState({ shouldLoading: true })
    });
  }

  render() {
    if (this.state.shouldRedirect) {
    return (<Redirect to="/" />);
    }else if(this.state.shouldLoading) {
    return (
      <PostForm handleSubmit={ this.handleSubmit } editPost={true} post={this.state.post}/>
    )}
    return '';
  }
}

export default EditPost;
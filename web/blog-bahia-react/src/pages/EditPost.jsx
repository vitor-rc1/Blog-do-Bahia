import React from 'react';
import PostForm from '../components/PostForm';
import { Redirect } from 'react-router-dom';
import { getPost, updatePost } from '../services/api';

class EditPost extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false, shouldLoading: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(post) {
    updatePost(post);
    this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }
  
  async loadPost(idPost) {
    const data = await getPost(idPost);
    this.setState({ data }, () => {
      this.setState({ shouldLoading: true })
    });
  }

  render() {
    if (this.state.shouldRedirect) {
    return (<Redirect to="/" />);
    }else if(this.state.shouldLoading) {
    return (
      <PostForm handleSubmit={ this.handleSubmit } editPost={true} post={this.state.data[0]}/>
    )}
    return '';
  }
}

export default EditPost;
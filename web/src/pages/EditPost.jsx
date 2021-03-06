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
    const response = await updatePost(post);
    alert(response.statusText);
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
    return (<Redirect to="/admin" />);
    } else if(this.state.shouldLoading) {
    return (
      <PostForm type="edit" handleSubmit={ this.handleSubmit } editPost={true} post={this.state.data.post}/>
    )}
    return '';
  }
}

export default EditPost;
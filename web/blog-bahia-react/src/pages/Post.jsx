import React from 'react';
import PostContent from '../components/PostContent';

import './Post.css';

import { getPost } from '../services/api';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {post: {}, shouldLoading: false};
    this.loadPost = this.loadPost.bind(this);
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }
  async loadPost(idPost) {
    const [post] = await getPost(idPost);
    console.log(post)
    this.setState({ post });
    this.setState({ post }, () => {
      this.setState({ shouldLoading: true })
    });
  }

  render() {
    const { shouldLoading } = this.state;
    if (!shouldLoading) {
      return '';
    }
    
    return (
      <PostContent post={this.state.post} />
    )
  }
}

export default Post;
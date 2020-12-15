import React from 'react';
import PostExample from '../services/PostExample';
import PostContent from '../components/PostContent';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {post: {}};
    this.loadPost = this.loadPost.bind(this);
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }
  async loadPost(idPost) {
    const URL = `http://localhost:3001/${idPost}/post`;
    const response = await fetch(URL);
    const [{post}] = await response.json();
    this.setState({ post });
  }

  render() {
    return (
      <PostContent post={this.state.post} />
    )
  }
}

export default Post;
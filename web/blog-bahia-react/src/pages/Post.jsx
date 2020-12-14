import React from 'react';
import PostExample from '../services/PostExample';
import PostContent from '../components/PostContent';

class Post extends React.Component {
  constructor() {
    super();
    this.state = { ...PostExample };
  }

  componentDidMount() {
    console.log(this.props.match.params);
  }

  render() {
    return (
      <PostContent post={this.state} />
    )
  }
}

export default Post;
import React from 'react';
import PostExample from '../services/PostExample';
import PostAudio from '../components/PostComponents/PostAudio';
import PostImage from '../components/PostComponents/PostImage';
import PostText from '../components/PostComponents/PostText';
import PostVideo from '../components/PostComponents/PostVideo';
import './Post.css'

class Post extends React.Component {
  constructor() {
    super();
    // this.state = { ... this.props };
    this.state = { ...PostExample }
  }
  render() {
    console.log(this.state)
    return (
      <div className="post">
        <h2 className="post-title">{this.state.title}</h2>
        <div className="post-content">
          <div className="post-left">
            <PostImage params={this.state.postItems[1]} />
            <PostVideo params={this.state.postItems[2]} />
          </div>
          <div className="post-middle">
            <PostText params={this.state.postItems[0]} />
          </div>
          <div className="post-right">
            <PostAudio params={this.state.postItems[3]} />
            <PostVideo params={this.state.postItems[2]} />
          </div>
        </div>
      </div>
    )
  }
}

export default Post;
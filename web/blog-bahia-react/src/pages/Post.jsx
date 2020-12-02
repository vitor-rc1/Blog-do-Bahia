import React from 'react';
import PostExample from '../services/PostExample';
import imgExample from '../images/post/Rectangle 3.svg';

class Post extends React.Component {
  constructor() {
    super();
    // this.state = { ... this.props };
    this.state = {...PostExample}
  }
  render() {
    console.log(this.state)
    return (
      <div className="post">
        <header className="post-title">{ this.state.title }</header>
        <div className="post-left">
          <img src={ this.state.postItems[1].url } alt="post" />
          <iframe src={ this.state.postItems[2].url } height="250" width="250" />
        </div>
        <div className="post-middle">{ this.state.postItems[0].text }</div>
        <div className="post-right">

        </div>
      </div>
    )
  }
}

export default Post;
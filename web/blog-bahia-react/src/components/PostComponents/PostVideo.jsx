import React from 'react';
import './PostVideo.css';

class PostVideo extends React.Component {
  constructor() {
    super();
    this.textVideo = this.textVideo.bind(this);
  }
  textVideo() {
    return (
      <h6 className="post-video-component-text" >{this.props.params.text}</h6>
    )
  }
  render() {
    return (
      <div className="post-video-component">
        <iframe
          src={this.props.params.url}
          alt={this.props.params.text}
          width={this.props.params.width}
          height={this.props.params.height}
          className="post-video-component-video"
        />
        { this.props.params.text ? this.textVideo() : ''}
      </div>
    )
  }
}

export default PostVideo;